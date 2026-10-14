/* Nalouo Hair — code commun à toutes les pages */
(()=>{
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const WA='32493377682';
const wa=msg=>`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

/* ---------- catalogue (prix repris du site actuel) ---------- */
const L12=[12,14,16,18,20,22,24,26,28,30,32,34], L12_28=[12,14,16,18,20,22,24,26,28], L18=[18,20,22,24,26,28];
const tbl=(lens,prices)=>Object.fromEntries(lens.map((l,i)=>[l,prices[i]]));
const clipStyles={"Lisse":tbl(L18,[155,165,175,185,190,200]),"Ondulée":tbl(L18,[165,175,185,195,205,215]),"Bouclée":tbl(L18,[175,185,195,205,215,225]),"Kinky":tbl(L18,[180,190,200,210,220,230])};
const BUNDLE_SPECS=[["Poids","100 g par bundle"],["Traitement","Brut, non traité"],["Coloration","Jusqu'au blond 613"],["Pose complète","3 bundles en général"]];
const P=[
 {id:"viet-lisse",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes lisses",sub:"Couleur naturelle · 100 g",img:"img/bob-front.webp",pos:"50% 30%",zoom:"50% 75%",origin:"Vietnam",
  desc:"Mèches vietnamiennes brutes, non traitées. Elles se coiffent, se bouclent et se colorent jusqu'au blond 613 sans perdre leur qualité.",
  prices:{_:tbl(L12,[105,110,120,130,140,150,160,165,175,195,205,215])}},
 {id:"ind-ondulee",cat:"bundles",catL:"Extensions raw hair",name:"Indiennes ondulées",sub:"Temples indiens · 100 g",img:"img/wavy-profile.webp",pos:"50% 30%",zoom:"40% 70%",origin:"Inde",
  desc:"Sélectionnées directement dans les temples indiens, naturellement épaisses et pleines. Colorables jusqu'au blond 613.",
  prices:{_:tbl(L12,[115,120,125,135,145,155,165,175,185,250,210,215])}},
 {id:"ind-bouclee",cat:"bundles",catL:"Extensions raw hair",name:"Indiennes bouclées",sub:"Temples indiens · 100 g",img:"img/hero-curly.webp",pos:"52% 40%",zoom:"60% 70%",origin:"Inde",
  desc:"Boucles brutes, épaisses et pleines, qui restent douces et sans nœuds. Pour un volume luxueux et durable.",
  prices:{_:tbl(L12,[125,130,135,145,155,165,175,185,195,215,220,225])}},
 {id:"burmese",cat:"bundles",catL:"Extensions raw hair",name:"Burmese bouclées",sub:"Kinky curly · 100 g",img:"img/tex-bundles.webp",origin:"Birmanie",
  desc:"Imitent parfaitement la texture afro pour un rendu naturel et authentique. Se coiffent, se bouclent ou se colorent simplement.",
  prices:{_:tbl(L12,[125,130,135,145,155,165,175,185,195,215,220,225])}},
 {id:"kinky-lisse",cat:"bundles",catL:"Extensions raw hair",name:"Kinky lisses",sub:"Texture afro lissée · 100 g",glyph:"K",tone:"#2b1d14",
  desc:"Imitent parfaitement la texture afro lissée. Chaque bundle contient 100 g, pour un look volumineux et réaliste.",
  prices:{_:tbl(L12,[null,null,140,150,160,170,180,190,200,220,225,230])}},
 {id:"viet-blond",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes blondes",sub:"Lisses · blond · 100 g",img:"img/blonde.webp",pos:"38% 30%",origin:"Vietnam",
  desc:"Traitées pour préserver leur texture lisse et soyeuse, avec une brillance et une fluidité remarquables.",
  prices:{_:tbl(L12,[155,160,170,180,190,200,210,215,225,245,255,265])}},
 {id:"viet-jet",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes jet black",sub:"Lisses · noir intense · 100 g",img:"img/bob-kiss.webp",pos:"50% 30%",zoom:"55% 70%",origin:"Vietnam",
  desc:"Un noir profond et brillant, sur une base vietnamienne robuste qui dure, même après plusieurs poses.",
  prices:{_:tbl(L12,[130,135,145,155,165,175,185,190,200,220,230,240])}},
 {id:"viet-couleurs",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes, autres couleurs",sub:"Brun, auburn… · 100 g",img:"img/brown-wavy.webp",pos:"50% 30%",zoom:"45% 72%",origin:"Vietnam",
  desc:"Nos lisses vietnamiennes dans une gamme de couleurs de base : brun, auburn et d'autres teintes riches.",
  prices:{_:tbl(L12,[140,145,155,165,175,185,195,200,210,230,240,250])}},
 {id:"lace",cat:"lace",catL:"Closures & frontales",name:"Closures & frontales HD",sub:"HD film lace",glyph:"L",tone:"#3a2a22",optLabel:"Format",
  desc:"Dentelle HD ultra-fine et respirante, invisible sur tous les tons de peau, pour une ligne de cheveux impeccable.",
  specs:[["Dentelle","HD film lace"],["Closures","5×5 · 6×6 · 2×6"],["Frontale","13×4"],["Rendu","Invisible sur tous les tons de peau"]],
  prices:{"Closure 5×5":tbl(L12_28,[115,120,130,140,150,160,170,185,195]),"Closure 2×6":tbl(L12_28,[105,110,120,130,135,140,145,150,155]),"Closure 6×6":tbl(L12_28,[125,130,140,150,160,170,695,190,200]),"Frontale 13×4":tbl(L12_28,[140,150,160,170,180,190,200,210,220])}},
 {id:"clips",cat:"clips",catL:"Clips & tape-ins",name:"Extensions à clips",sub:"100 g · 7 bandes invisibles",img:"img/blonde.webp",pos:"60% 60%",optLabel:"Texture",
  desc:"Clips invisibles en cheveux bruts, légers sur la tête. Pour plus de volume, nous conseillons 200 g (14 bandes).",
  specs:[["Poids","100 g · 7 bandes"],["Volume","200 g · 14 bandes conseillés"],["Pose","Seule, en quelques minutes"],["Coloration","Possible"]],
  prices:clipStyles},
 {id:"ponytail",cat:"clips",catL:"Ponytails",name:"Ponytails",sub:"Cheveux naturels · 100 g",img:"img/duo2.webp",pos:"74% 40%",optLabel:"Texture",
  desc:"Une queue de cheval de luxe en cheveux naturels, 100 g, qui se fond avec vos cheveux.",
  specs:[["Poids","100 g"],["Cheveux","Naturels"],["Textures","Lisse, ondulée, bouclée, kinky"],["Longueurs","18″ à 28″"]],
  prices:clipStyles},
 {id:"wig-viet",cat:"wigs",catL:"Perruques",name:"Perruque vietnamienne lisse",sub:"Sur mesure · 15–25 jours",img:"img/bob-selfie.webp",pos:"50% 30%",zoom:"50% 60%",range:[350,780],quote:true,
  desc:"Montée avec 2 bundles (3 dès 18″) et une closure ou une frontale. Couleur naturelle, ou jet black sans supplément."},
 {id:"wig-ondulee",cat:"wigs",catL:"Perruques",name:"Perruque indienne ondulée",sub:"Sur mesure · 15–25 jours",img:"img/wavy-front.webp",pos:"50% 30%",zoom:"45% 70%",range:[370,810],quote:true,
  desc:"Montée avec 2 bundles (3 dès 18″) et une closure ou une frontale. Couleur naturelle, ou jet black sans supplément."},
 {id:"wig-bouclee",cat:"wigs",catL:"Perruques",name:"Perruque indienne bouclée",sub:"Sur mesure · 15–25 jours",img:"img/hero-curly.webp",pos:"52% 30%",zoom:"60% 70%",range:[390,840],quote:true,
  desc:"Montée avec 2 bundles (3 dès 18″) et une closure ou une frontale. Couleur naturelle, ou jet black sans supplément."}
];
const byId=Object.fromEntries(P.map(p=>[p.id,p]));
const eur=n=>new Intl.NumberFormat('fr-BE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
const minPrice=p=>p.range?p.range[0]:Math.min(...Object.values(p.prices).flatMap(t=>Object.values(t)).filter(Boolean));
const priceLine=p=>p.range?`${eur(p.range[0])} – ${eur(p.range[1])}`:`À partir de ${eur(minPrice(p))}`;
const visual=(p,extra='')=>p.img?`<img src="${p.img}" alt="${p.name}" loading="lazy" style="object-position:${p.pos||'50% 50%'}" ${extra}>`:`<div class="swatch" style="background:radial-gradient(120% 90% at 30% 20%,${p.tone}cc,#100c0a)">${p.glyph}</div>`;
const card=p=>`<a class="card" href="produit.html#${p.id}">
   <div class="vis">${visual(p)}<span class="tag mono">${p.catL}</span></div>
   <div class="meta"><h3>${p.name}</h3><span class="sub">${p.sub}</span><span class="price">${priceLine(p)}</span></div></a>`;
const pills=(label,name,vals,sel,fmt=v=>v,dis=()=>false)=>`<fieldset class="opt"><legend class="lab"><span>${label}</span></legend><div class="pills">${vals.map(v=>`<label class="pill"><input type="radio" name="${name}" value="${v}" ${v==sel?'checked':''} ${dis(v)?'disabled':''}><span>${fmt(v)}</span></label>`).join('')}</div></fieldset>`;

/* ---------- en-tête, menu ---------- */
const hdr=$('#hdr');
if(hdr){const onScroll=()=>hdr.classList.toggle('solid',scrollY>Math.min(innerHeight*.5,420));addEventListener('scroll',onScroll,{passive:true});onScroll();}
const mnav=$('#mnav'),mb=$('#menuBtn');
const closeMenu=()=>{if(mnav){mnav.hidden=true;mb&&mb.setAttribute('aria-expanded','false')}};
if(mnav&&mb){mb.onclick=()=>{mnav.hidden=false;mb.setAttribute('aria-expanded','true');$('#menuClose').focus()};$('#menuClose').onclick=closeMenu;}
addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

/* ---------- horaires : jour en cours ---------- */
const row=$(`.hours tr[data-d="${new Date().getDay()}"]`);if(row)row.classList.add('today');

/* ---------- copier le numéro ---------- */
$$('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText('+'+WA);toast('Numéro copié')}
  catch(e){const r=document.createRange();r.selectNodeContents($(b.dataset.copy));const s=getSelection();s.removeAllRanges();s.addRange(r);toast('Numéro sélectionné')}
}));
let tt;function toast(m){const t=$('#toast');if(!t)return;t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2200)}

const page=document.body.dataset.page;

/* ---------- Collection ---------- */
if(page==='collection'){
  const grid=$('#grid'),count=$('#count');
  const render=f=>{const list=P.filter(p=>f==='all'||p.cat===f);grid.innerHTML=list.map(card).join('');count.textContent=`${list.length} produit${list.length>1?'s':''}`};
  const set=f=>{$$('.chip').forEach(c=>c.setAttribute('aria-pressed',c.dataset.f===f));render(f)};
  $('#chips').addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){set(b.dataset.f);history.replaceState(null,'',b.dataset.f==='all'?location.pathname:'#'+b.dataset.f)}});
  const h=location.hash.slice(1);set(['bundles','lace','clips','wigs'].includes(h)?h:'all');
}

/* ---------- Fiche produit ---------- */
if(page==='produit'){
  const root=$('#pp');let st={};
  const draw=()=>{
    const p=byId[location.hash.slice(1)]||null;
    if(!p){root.innerHTML=`<div class="pp-empty"><h1 style="font-size:48px">Produit introuvable</h1><p>Ce lien ne correspond à aucun produit de la collection.</p><a class="btn dark" href="collection.html">Voir la collection</a></div>`;return}
    document.title=`${p.name} · Nalouo Hair`;
    if(st.id!==p.id)st={id:p.id,opt:null,len:null,lace:'Frontale 13×4',wlen:'22',cap:'M'};
    let opts='',price='',cta='',note='';
    if(p.quote){
      opts=pills('Lace','lace',['Closure 5×5','Closure 6×6','Closure 2×6','Frontale 13×4'],st.lace)+pills('Longueur','wlen',L12_28.map(String),st.wlen,v=>v+'″')+pills('Taille de bonnet','cap',['S','M','L'],st.cap);
      price=`<div class="total"><span class="fine">Prix selon configuration</span><strong>${eur(p.range[0])} – ${eur(p.range[1])}</strong></div>`;
      cta=`<a class="btn dark" target="_blank" rel="noopener" href="${wa(`Bonjour Nalouo Hair, je souhaite un devis pour une ${p.name.toLowerCase()} : ${st.lace}, ${st.wlen}", bonnet ${st.cap}.`)}">Demander mon devis sur WhatsApp</a>`;
      note='Confection en 15 à 25 jours ouvrés. Acompte et règlement au showroom.';
    }else{
      const keys=Object.keys(p.prices);
      if(keys[0]!=='_'){st.opt=st.opt||keys[0];opts+=pills(p.optLabel,'opt',keys,st.opt)}else st.opt='_';
      const t=p.prices[st.opt],lens=Object.keys(t).map(Number);
      if(!st.len||!t[st.len])st.len=lens.find(l=>t[l]);
      opts+=`<fieldset class="opt"><legend class="lab"><span>Longueur</span><span>${st.len}″ · ${Math.round(st.len*2.54)} cm</span></legend><div class="pills">${lens.map(l=>`<label class="pill"><input type="radio" name="len" value="${l}" ${l==st.len?'checked':''} ${t[l]?'':'disabled'}><span>${l}″</span></label>`).join('')}</div>
        <div class="ruler" aria-hidden="true"><b style="width:${(lens.indexOf(st.len)+1)/lens.length*100}%"></b>${lens.map((l,i)=>`<i style="left:${(i+1)/lens.length*100}%;height:${8+i*1.6}px"></i>`).join('')}</div></fieldset>`;
      price=`<div class="total"><span class="fine">Prix indicatif par ${p.cat==='bundles'?'bundle de 100 g':'pièce'}</span><strong>${eur(t[st.len])}</strong></div>`;
      cta=`<a class="btn dark" target="_blank" rel="noopener" href="${wa(`Bonjour Nalouo Hair, avez-vous en stock : ${p.name}${st.opt!=='_'?' ('+st.opt+')':''}, ${st.len}" ? Je souhaiterais passer au showroom.`)}">Demander la disponibilité</a>`;
      note=(p.cat==='bundles'?'Pour une pose complète, comptez en général 3 bundles. ':'')+'Règlement sur place, au showroom.';
    }
    const specs=p.specs||(p.cat==='bundles'?[["Origine",p.origin||"—"],...BUNDLE_SPECS.slice(0,3)]:[["Confection","15 à 25 jours ouvrés"],["Montage","2 bundles, 3 dès 18″"],["Lace","Closure ou frontale HD"],["Couleur","Naturelle ou jet black"]]);
    const media=p.img?`<figure class="big">${visual(p,'fetchpriority="high"')}</figure>
       <figure class="zoom"><img src="${p.img}" alt="" style="object-position:${p.zoom||'50% 70%'};transform-origin:${p.zoom||'50% 70%'}"><figcaption>Détail de la mèche</figcaption></figure>
       <figure><img src="${p.img}" alt="" style="object-position:${p.pos||'50% 50%'};filter:grayscale(1) contrast(1.05)"><figcaption>${p.sub}</figcaption></figure>`
      :`<figure class="big">${visual(p)}</figure>`;
    const more=P.filter(x=>x.cat===p.cat&&x.id!==p.id).concat(P.filter(x=>x.cat!==p.cat)).slice(0,4);
    root.innerHTML=`<nav class="crumbs" aria-label="Fil d'Ariane"><a href="index.html">Accueil</a><span>/</span><a href="collection.html#${p.cat}">${p.catL}</a><span>/</span><span>${p.name}</span></nav>
      <div class="pp-grid">
        <div class="pp-media">${media}</div>
        <div class="pp-info">
          <span class="cat">${p.catL}</span>
          <h1>${p.name}</h1>
          <p class="desc">${p.desc}</p>
          <form id="ppForm">${opts}</form>
          ${price}${cta}<p class="fine">${note}</p>
          <dl class="pp-specs">${specs.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
        </div>
      </div>
      <section class="pp-more" aria-labelledby="moreT"><h2 id="moreT">Vous aimerez aussi</h2><div class="grid">${more.map(card).join('')}</div></section>`;
    $('#ppForm').onchange=e=>{const n=e.target.name,v=e.target.value;st[n]=n==='len'?Number(v):v;const y=scrollY;draw();scrollTo(0,y)};
  };
  addEventListener('hashchange',()=>{st={};draw();scrollTo(0,0)});draw();
}

/* ---------- Perruques : configurateur ---------- */
if(page==='perruques'){
  const f=$('#wigForm'),out=$('#wigOut'),go=$('#wigGo');
  const R={"Vietnamienne lisse":[350,780],"Indienne ondulée":[370,810],"Indienne bouclée":[390,840]};
  const upd=()=>{const d=Object.fromEntries(new FormData(f));
    out.innerHTML=`<p>Perruque ${d.tex.toLowerCase()}, ${d.lace.toLowerCase()}, ${d.len}″ (${Math.round(d.len*2.54)} cm), bonnet ${d.cap}, ${d.col.toLowerCase()}.</p><strong>${eur(R[d.tex][0])} – ${eur(R[d.tex][1])}</strong>`;
    go.href=wa(`Bonjour Nalouo Hair, je souhaite un devis pour une perruque ${d.tex.toLowerCase()} : ${d.lace}, ${d.len}", bonnet ${d.cap}, ${d.col.toLowerCase()}.`)};
  f.addEventListener('change',upd);upd();
}
})();
