/* Nalouo Hair — code commun à toutes les pages */
(()=>{
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const WA='32493377682';
const wa=msg=>`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

/* ---------- catalogue (prix repris du site actuel) ---------- */
const {P,L12,L12_28,BUNDLE_SPECS}=window.NH;
const byId=Object.fromEntries(P.map(p=>[p.id,p]));
const eur=n=>new Intl.NumberFormat('fr-BE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
const minPrice=p=>p.range?p.range[0]:Math.min(...Object.values(p.prices).flatMap(t=>Object.values(t)).filter(Boolean));
const priceLine=p=>p.range?`${eur(p.range[0])} – ${eur(p.range[1])}`:`À partir de ${eur(minPrice(p))}`;
const IM=window.NH_IMG||{};
const srcset=src=>{const b=src.replace(/^img\/|\.webp$/g,''),m=IM[b];if(!m)return '';return `srcset="${m.v.map(w=>`img/${b}-${w}.webp ${w}w`).concat(`${src} ${m.w}w`).join(', ')}" width="${m.w}" height="${m.h}"`};
const visual=(p,extra='',sizes='(max-width:760px) 50vw, 25vw')=>p.img?`<img src="${p.img}" ${srcset(p.img)} sizes="${sizes}" alt="${p.name}" loading="lazy" style="object-position:${p.pos||'50% 50%'}" ${extra}>`:`<div class="swatch" style="background:radial-gradient(120% 90% at 30% 20%,${p.tone}cc,#100c0a)">${p.glyph}</div>`;
const card=p=>`<a class="card" href="${p.slug}.html" data-cat="${p.cat}">
   <div class="vis">${visual(p,'','(max-width:760px) 100vw, 50vw')}</div>
   <div class="meta"><h3>${p.name}</h3><p class="sub">${p.catL} · ${p.sub}</p><p class="price">${priceLine(p)}</p></div></a>`;
const pills=(label,name,vals,sel,fmt=v=>v,dis=()=>false)=>`<fieldset class="opt"><legend class="lab"><span>${label}</span></legend><div class="pills">${vals.map(v=>`<label class="pill"><input type="radio" name="${name}" value="${v}" ${v==sel?'checked':''} ${dis(v)?'disabled':''}><span>${fmt(v)}</span></label>`).join('')}</div></fieldset>`;

/* ---------- en-tête, menu ---------- */
const hdr=$('#hdr');
if(hdr){const onScroll=()=>hdr.classList.toggle('solid',scrollY>Math.min(innerHeight*.5,420));addEventListener('scroll',onScroll,{passive:true});onScroll();}
const mnav=$('#mnav'),mb=$('#menuBtn');
const closeMenu=()=>{if(mnav&&!mnav.hidden){mnav.hidden=true;document.documentElement.classList.remove('menu-on');mb&&mb.setAttribute('aria-expanded','false')}};
if(mnav&&mb){
  mb.onclick=()=>{mnav.hidden=false;document.documentElement.classList.add('menu-on');mb.setAttribute('aria-expanded','true');$('#menuClose').focus()};
  $('#menuClose').onclick=()=>{closeMenu();mb.focus()};
  const fig=$('#mnavImg');
  $$('.mnav-list a').forEach(a=>{const show=()=>{if(fig&&a.dataset.img&&!fig.src.endsWith(a.dataset.img)){fig.classList.remove('sw');void fig.offsetWidth;fig.src=a.dataset.img;fig.classList.add('sw')}};a.addEventListener('mouseenter',show);a.addEventListener('focus',show)});
}
addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

/* ---------- apparitions au défilement (une fois, rien de caché sans JS) ---------- */
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
  const els=$$('[data-reveal]').filter(e=>e.getBoundingClientRect().top>innerHeight*.92);
  els.forEach(e=>e.classList.add('rv'));
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{rootMargin:'0px 0px -8% 0px'});
  els.forEach(e=>io.observe(e));
}

/* ---------- accueil : le mot de la texture suit la photo visible ---------- */
const txw=$$('.tx-words span');
if(txw.length&&'IntersectionObserver' in window){
  const io2=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){const i=en.target.dataset.i;txw.forEach(w=>w.classList.toggle('on',w.dataset.i===i))}}),{rootMargin:'-45% 0px -45% 0px'});
  $$('.tx-pic').forEach(p=>io2.observe(p));
}

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
  if(!grid.children.length)grid.innerHTML=P.map(card).join('');
  const render=f=>{let n=0;[...grid.children].forEach(c=>{const on=f==='all'||c.dataset.cat===f;c.hidden=!on;if(on){c.dataset.pos=n%6;n++}});count.textContent=`${n} produit${n>1?'s':''}`};
  const set=f=>{$$('.chip').forEach(c=>c.setAttribute('aria-pressed',c.dataset.f===f));render(f)};
  $('#chips').addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){set(b.dataset.f);history.replaceState(null,'',b.dataset.f==='all'?location.pathname:'#'+b.dataset.f)}});
  const h=location.hash.slice(1);set(['bundles','lace','clips','wigs'].includes(h)?h:'all');
}

/* ---------- Fiche produit ---------- */
if(page==='produit'){
  const root=$('#pp');let st={};
  const draw=()=>{
    const pid=document.body.dataset.product||location.hash.slice(1);const p=byId[pid]||null;
    if(p&&!document.body.dataset.product){location.replace(p.slug+'.html');return}
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
    const media=p.img?`<figure class="big">${visual(p,'fetchpriority="high"','(max-width:900px) 100vw, 56vw')}</figure>
       <figure class="zoom"><img src="${p.img}" ${srcset(p.img)} sizes="(max-width:900px) 100vw, 56vw" alt="" style="object-position:${p.zoom||'50% 70%'};transform-origin:${p.zoom||'50% 70%'}"><figcaption>Détail de la mèche</figcaption></figure>
       <figure><img src="${p.img}" ${srcset(p.img)} sizes="(max-width:900px) 50vw, 28vw" alt="" loading="lazy" style="object-position:${p.pos||'50% 50%'};filter:grayscale(1) contrast(1.05)"><figcaption>${p.sub}</figcaption></figure>`
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
  if(!document.body.dataset.product)addEventListener('hashchange',()=>{st={};draw();scrollTo(0,0)});draw();
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
