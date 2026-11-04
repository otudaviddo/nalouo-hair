/* Nalouo Hair — code commun à toutes les pages (fr, en, nl) */
(()=>{
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const WA='32493377682';
const wa=msg=>`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const LG=(document.documentElement.lang||'fr').slice(0,2);
const ROOT=document.documentElement.dataset.root||'';

/* ---------- textes de l'interface ---------- */
const TX={
 fr:{loc:'fr-BE',home:'Accueil',crumbs:"Fil d'Ariane",copied:'Numéro copié',selected:'Numéro sélectionné',prod:n=>`${n} produit${n>1?'s':''}`,
   notFoundT:'Produit introuvable',notFoundP:'Ce lien ne correspond à aucun produit de la collection.',seeColl:'Voir la collection',
   lace:'Lace',len:'Longueur',cap:'Taille de bonnet',byConfig:'Prix selon configuration',carte:'La carte des tarifs',
   quoteBtn:'Prendre rendez-vous',contact:'Nous contacter',yourWig:'Votre perruque',onsiteK:'Prix et stock',onsiteH:'Disponibles sur place',onsiteP:'Prenez rendez-vous au showroom ou contactez-nous : nous vous confirmons le prix exact, le stock et le délai.',wigNote:'Confection en 15 à 25 jours ouvrés. Acompte et règlement au showroom.',
   per:c=>`Prix indicatif par ${c==='bundles'?'bundle de 100 g':'pièce'}`,avail:'Demander la disponibilité',
   bundlesNote:'Pour une pose complète, comptez en général 3 bundles. ',payNote:'Règlement sur place, au showroom.',
   origin:'Origine',wigSpecs:[["Confection","15 à 25 jours ouvrés"],["Montage","2 bundles, 3 dès 18″"],["Lace","Closure ou frontale HD"],["Couleur","Naturelle ou jet black"]],
   bspecs:[["Poids","100 g par bundle"],["Traitement","Brut, non traité"],["Coloration","Jusqu'au blond 613"]],
   worn:'Portées',wornAlt:n=>`${n}, portées`,detail:'Détail de la mèche',more:'Vous aimerez aussi',
   cats:{bundles:'Extensions raw hair',lace:'Closures & frontales',clips:'Clips & ponytails',wigs:'Perruques'},
   opt:{},
   waWig:(n,l,len,cap)=>`Bonjour Nalouo Hair, je souhaite prendre rendez-vous pour une ${n.toLowerCase()} : ${l}, ${len}", bonnet ${cap}. Pouvez-vous me confirmer le prix et le stock ?`,
   waStock:(n,len)=>`Bonjour Nalouo Hair, avez-vous en stock : ${n}, ${len}" ? Je souhaiterais passer au showroom.`,
   cfgOut:d=>`Perruque ${d.tex.toLowerCase()}, ${d.lace.toLowerCase()}, ${d.len}″ (${Math.round(d.len*2.54)} cm), bonnet ${d.cap}, ${d.col.toLowerCase()}.`,
   waCfg:d=>`Bonjour Nalouo Hair, je souhaite prendre rendez-vous pour une perruque ${d.tex.toLowerCase()} : ${d.lace}, ${d.len}", bonnet ${d.cap}, ${d.col.toLowerCase()}. Pouvez-vous me confirmer le prix et le stock ?`},
 en:{loc:'en-IE',home:'Home',crumbs:'Breadcrumb',copied:'Number copied',selected:'Number selected',prod:n=>`${n} product${n>1?'s':''}`,
   notFoundT:'Product not found',notFoundP:'This link does not match any product in the collection.',seeColl:'View the collection',
   lace:'Lace',len:'Length',cap:'Cap size',byConfig:'Price depends on your choices',carte:'See the price list',
   quoteBtn:'Book an appointment',contact:'Contact us',yourWig:'Your wig',onsiteK:'Price and stock',onsiteH:'Available in store',onsiteP:'Book an appointment at the showroom or contact us: we confirm the exact price, stock and making time.',wigNote:'Made in 15 to 25 working days. Deposit and payment at the showroom.',
   per:c=>`Guide price per ${c==='bundles'?'100 g bundle':'piece'}`,avail:'Check availability',
   bundlesNote:'A full install usually takes 3 bundles. ',payNote:'Payment in person, at the showroom.',
   origin:'Origin',wigSpecs:[["Making","15 to 25 working days"],["Construction","2 bundles, 3 from 18″"],["Lace","HD closure or frontal"],["Colour","Natural or jet black"]],
   bspecs:[["Weight","100 g per bundle"],["Processing","Raw, unprocessed"],["Colouring","Up to 613 blonde"]],
   worn:'Worn',wornAlt:n=>`${n}, worn`,detail:'Hair detail',more:'You may also like',
   cats:{bundles:'Raw hair extensions',lace:'Closures & frontals',clips:'Clips & ponytails',wigs:'Wigs'},
   opt:{'Lisse':'Straight','Ondulée':'Wavy','Bouclée':'Curly','Closure 2×6':'Closure 2×6','Closure 5×5':'Closure 5×5','Closure 6×6':'Closure 6×6','Frontale 13×4':'Frontal 13×4','Frontale 13×6':'Frontal 13×6'},
   waWig:(n,l,len,cap)=>`Hello Nalouo Hair, I would like to book an appointment for a ${n}: ${l}, ${len}", cap ${cap}. Could you confirm the price and stock?`,
   waStock:(n,len)=>`Hello Nalouo Hair, do you have in stock: ${n}, ${len}"? I would like to visit the showroom.`,
   cfgOut:d=>`${d.tex} wig, ${d.lace.toLowerCase()}, ${d.len}″ (${Math.round(d.len*2.54)} cm), cap ${d.cap}, ${d.col.toLowerCase()}.`,
   waCfg:d=>`Hello Nalouo Hair, I would like to book an appointment for a ${d.tex} wig: ${d.lace}, ${d.len}", cap ${d.cap}, ${d.col.toLowerCase()}. Could you confirm the price and stock?`},
 nl:{loc:'nl-BE',home:'Home',crumbs:'Kruimelpad',copied:'Nummer gekopieerd',selected:'Nummer geselecteerd',prod:n=>`${n} product${n>1?'en':''}`,
   notFoundT:'Product niet gevonden',notFoundP:'Deze link hoort bij geen enkel product uit de collectie.',seeColl:'Bekijk de collectie',
   lace:'Lace',len:'Lengte',cap:'Capmaat',byConfig:'Prijs volgens uw keuzes',carte:'Bekijk de prijslijst',
   quoteBtn:'Afspraak maken',contact:'Contacteer ons',yourWig:'Uw pruik',onsiteK:'Prijs en voorraad',onsiteH:'Ter plaatse beschikbaar',onsiteP:'Maak een afspraak in de showroom of neem contact met ons op: we bevestigen de precieze prijs, de voorraad en de levertermijn.',wigNote:'Gemaakt in 15 tot 25 werkdagen. Voorschot en betaling in de showroom.',
   per:c=>`Richtprijs per ${c==='bundles'?'bundel van 100 g':'stuk'}`,avail:'Beschikbaarheid vragen',
   bundlesNote:'Voor een volledige plaatsing rekent u meestal 3 bundels. ',payNote:'Betaling ter plaatse, in de showroom.',
   origin:'Herkomst',wigSpecs:[["Vervaardiging","15 tot 25 werkdagen"],["Opbouw","2 bundels, 3 vanaf 18″"],["Lace","HD-closure of frontal"],["Kleur","Natuurlijk of jet black"]],
   bspecs:[["Gewicht","100 g per bundel"],["Behandeling","Ruw, onbehandeld"],["Kleuren","Tot blond 613"]],
   worn:'Gedragen',wornAlt:n=>`${n}, gedragen`,detail:'Detail van het haar',more:'Misschien ook iets voor u',
   cats:{bundles:'Raw hair extensions',lace:'Closures & frontals',clips:'Clips & ponytails',wigs:'Pruiken'},
   opt:{'Lisse':'Steil','Ondulée':'Golvend','Bouclée':'Krullend','Frontale 13×4':'Frontal 13×4','Frontale 13×6':'Frontal 13×6'},
   waWig:(n,l,len,cap)=>`Hallo Nalouo Hair, ik wil graag een afspraak maken voor een ${n.toLowerCase()}: ${l}, ${len}", capmaat ${cap}. Kunt u de prijs en voorraad bevestigen?`,
   waStock:(n,len)=>`Hallo Nalouo Hair, hebben jullie in voorraad: ${n}, ${len}"? Ik kom graag langs in de showroom.`,
   cfgOut:d=>`Pruik ${d.tex.toLowerCase()}, ${d.lace.toLowerCase()}, ${d.len}″ (${Math.round(d.len*2.54)} cm), capmaat ${d.cap}, ${d.col.toLowerCase()}.`,
   waCfg:d=>`Hallo Nalouo Hair, ik wil graag een afspraak maken voor een pruik ${d.tex.toLowerCase()}: ${d.lace}, ${d.len}", capmaat ${d.cap}, ${d.col.toLowerCase()}. Kunt u de prijs en voorraad bevestigen?`}
}[LG]||null;
const T=TX||{};
const optL=v=>T.opt&&T.opt[v]||v;

/* ---------- catalogue (traduit selon la langue de la page) ---------- */
const {L12_28}=window.NH;
const P=window.NH.P.map(p=>Object.assign({},p,LG==='fr'?{}:{catL:p.id==='ponytail'?'Ponytails':p.id==='clips'?'Clip-ins':T.cats[p.cat]},p.tr&&p.tr[LG]||{}));
const byId=Object.fromEntries(P.map(p=>[p.id,p]));
const eur=n=>new Intl.NumberFormat(T.loc,{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
const IM=window.NH_IMG||{};
const srcset=src=>{const b=src.replace(/^img\/|\.webp$/g,''),m=IM[b];if(!m)return '';return `srcset="${m.v.map(w=>`${ROOT}img/${b}-${w}.webp ${w}w`).concat(`${ROOT}${src} ${m.w}w`).join(', ')}" width="${m.w}" height="${m.h}"`};
const visual=(p,extra='',sizes='(max-width:760px) 50vw, 25vw')=>p.img?`<img${p.prod?` class="prod${p.prod==='cover'?' cover':''}"`:''} src="${ROOT}${p.img}" ${srcset(p.img)} sizes="${sizes}" alt="${p.name}" loading="lazy" style="object-position:${p.pos||'50% 50%'}" ${extra}>`:`<div class="swatch" style="background:radial-gradient(120% 90% at 30% 20%,${p.tone}cc,#100c0a)">${p.glyph}</div>`;
const alt2=(p,sizes)=>p.img2?`<img class="alt" src="${ROOT}${p.img2}" ${srcset(p.img2)} sizes="${sizes}" alt="" loading="lazy">`:'';
const card=p=>`<a class="card" href="${p.slug}.html" data-cat="${p.cat}">
   <div class="vis${p.img2?' has-alt':''}">${visual(p,'','(max-width:760px) 100vw, 50vw')}${alt2(p,'(max-width:760px) 100vw, 50vw')}</div>
   <div class="meta"><h3>${p.name}</h3><p class="sub">${p.catL} · ${p.sub}</p></div></a>`;
const pills=(label,name,vals,sel,fmt=v=>v,dis=()=>false)=>`<fieldset class="opt"><legend class="lab"><span>${label}</span></legend><div class="pills">${vals.map(v=>`<label class="pill"><input type="radio" name="${name}" value="${v}" ${v==sel?'checked':''} ${dis(v)?'disabled':''}><span>${fmt(v)}</span></label>`).join('')}</div></fieldset>`;

/* ---------- en-tête, menu ---------- */
const hdr=$('#hdr');
if(hdr){const onScroll=()=>hdr.classList.toggle('solid',scrollY>Math.min(innerHeight*.5,420));addEventListener('scroll',onScroll,{passive:true});onScroll();}
const mnav=$('#mnav'),mb=$('#menuBtn');
const closeMenu=()=>{if(mnav&&!mnav.hidden){mnav.hidden=true;document.documentElement.classList.remove('menu-on');if(mb){mb.setAttribute('aria-expanded','false');mb.focus()}}};
if(mnav&&mb){
  mb.onclick=()=>{mnav.hidden=false;document.documentElement.classList.add('menu-on');mb.setAttribute('aria-expanded','true');$('#menuClose').focus()};
  $('#menuClose').onclick=closeMenu;
  /* le focus clavier reste dans le menu ouvert */
  mnav.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const f=$$('#mnav a[href],#mnav button').filter(x=>x.offsetParent!==null);if(!f.length)return;
    const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}});
  const fig=$('#mnavImg');
  $$('.mnav-list a').forEach(a=>{const show=()=>{if(fig&&a.dataset.img&&!fig.src.endsWith(a.dataset.img.replace(/^(\.\.\/)+/,''))){fig.classList.remove('sw');void fig.offsetWidth;fig.src=a.dataset.img;fig.style.objectPosition=a.dataset.pos||'50% 30%';fig.classList.add('sw')}};a.addEventListener('mouseenter',show);a.addEventListener('focus',show)});
}
addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
/* menu trop haut pour l'écran : la liste défile doucement en suivant la souris */
const msc=$('.mnav-scroll');
if(msc){
  const edge=()=>{const ov=msc.scrollHeight>msc.clientHeight+2;msc.classList.toggle('ov',ov);msc.classList.toggle('top',ov&&msc.scrollTop<4);msc.classList.toggle('end',ov&&msc.scrollTop>msc.scrollHeight-msc.clientHeight-4)};
  msc.addEventListener('scroll',edge,{passive:true});addEventListener('resize',edge);
  if(mb)mb.addEventListener('click',()=>requestAnimationFrame(()=>{msc.scrollTop=0;edge()}));
  if(matchMedia('(hover:hover)').matches){let tgt=0,raf=0;
    const loop=()=>{const d=tgt-msc.scrollTop;if(Math.abs(d)<.5){raf=0;return}msc.scrollTop+=d*.14;raf=requestAnimationFrame(loop)};
    msc.closest('.mnav').addEventListener('mousemove',e=>{const max=msc.scrollHeight-msc.clientHeight;if(max<=0)return;const r=msc.getBoundingClientRect();
      const p=Math.min(1,Math.max(0,(e.clientY-r.top-r.height*.2)/(r.height*.6)));tgt=p*max;if(!raf)raf=requestAnimationFrame(loop)});}
}

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

/* ---------- carte des tarifs : la colonne survolée s'éclaire ---------- */
$$('[data-ct]').forEach(t=>{const clr=()=>t.querySelectorAll('.hl').forEach(x=>x.classList.remove('hl'));
  t.addEventListener('mouseover',e=>{const c=e.target.closest('td,th');if(!c)return;clr();const i=c.cellIndex;if(i>0)t.querySelectorAll(`tr>*:nth-child(${i+1})`).forEach(x=>x.classList.add('hl'))});
  t.addEventListener('mouseleave',clr)});

/* ---------- horaires : jour en cours ---------- */
const row=$(`.hours tr[data-d="${new Date().getDay()}"]`);if(row)row.classList.add('today');

/* ---------- copier le numéro ---------- */
$$('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText('+'+WA);toast(T.copied)}
  catch(e){const r=document.createRange();r.selectNodeContents($(b.dataset.copy));const s=getSelection();s.removeAllRanges();s.addRange(r);toast(T.selected)}
}));
let tt;function toast(m){const t=$('#toast');if(!t)return;t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2200)}

const page=document.body.dataset.page;

/* ---------- Collection ---------- */
if(page==='collection'){
  const grid=$('#grid'),count=$('#count');
  if(!grid.children.length)grid.innerHTML=P.map(card).join('');
  const render=f=>{let n=0;[...grid.children].forEach(c=>{const on=f==='all'||c.dataset.cat===f;c.hidden=!on;if(on){c.dataset.pos=n%6;n++}});count.textContent=T.prod(n)};
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
    if(!p){root.innerHTML=`<div class="pp-empty"><h1 style="font-size:48px">${T.notFoundT}</h1><p>${T.notFoundP}</p><a class="btn dark" href="collection.html">${T.seeColl}</a></div>`;return}
    document.title=`${p.name} · Nalouo Hair`;
    if(st.id!==p.id)st={id:p.id,opt:null,len:null,lace:'Frontale 13×4',wlen:'22',cap:'M'};
    let opts='',price='',cta='',note='';
    if(p.quote){
      opts=pills(T.lace,'lace',['Closure 2×6','Closure 5×5','Closure 6×6','Frontale 13×4','Frontale 13×6'],st.lace,optL)+pills(T.len,'wlen',L12_28.map(String),st.wlen,v=>v+'″')+pills(T.cap,'cap',['S','M','L'],st.cap);
      price=`<div class="onsite pp-onsite"><p class="onsite-k">${T.onsiteK}</p><p class="onsite-h">${T.onsiteH}</p><p>${T.onsiteP}</p></div>`;
      cta=`<div class="ctas onsite-cta"><a class="btn dark" target="_blank" rel="noopener" href="${wa(T.waWig(p.name,optL(st.lace),st.wlen,st.cap))}">${T.quoteBtn}</a><a class="btn line" href="tel:+32493377682">${T.contact}</a></div>`;
      note=T.wigNote;
    }else{
      const keys=Object.keys(p.prices);
      if(keys[0]!=='_'){st.opt=st.opt||keys[0];opts+=pills(p.optLabel,'opt',keys,st.opt,optL)}else st.opt='_';
      const t=p.prices[st.opt],lens=Object.keys(t).map(Number);
      if(!st.len||!t[st.len])st.len=lens.find(l=>t[l]);
      opts+=`<fieldset class="opt"><legend class="lab"><span>${T.len}</span><span>${st.len}″ · ${Math.round(st.len*2.54)} cm</span></legend><div class="pills">${lens.map(l=>`<label class="pill"><input type="radio" name="len" value="${l}" ${l==st.len?'checked':''} ${t[l]?'':'disabled'}><span>${l}″</span></label>`).join('')}</div>
        <div class="ruler" aria-hidden="true"><b style="width:${(lens.indexOf(st.len)+1)/lens.length*100}%"></b>${lens.map((l,i)=>`<i style="left:${(i+1)/lens.length*100}%;height:${8+i*1.6}px"></i>`).join('')}</div></fieldset>`;
      price=`<div class="total"><span class="fine">${T.per(p.cat)}</span><strong>${eur(t[st.len])}</strong><a class="lnk tarif-lnk" href="tarifs.html">${T.carte}</a></div>`;
      cta=`<a class="btn dark" target="_blank" rel="noopener" href="${wa(T.waStock(p.name+(st.opt!=='_'?' ('+optL(st.opt)+')':''),st.len))}">${T.avail}</a>`;
      note=(p.cat==='bundles'?T.bundlesNote:'')+T.payNote;
    }
    const specs=p.specs||(p.cat==='bundles'?[[T.origin,p.origin||"—"],...T.bspecs]:T.wigSpecs);
    const SZ='(max-width:900px) 100vw, 56vw',SZ2='(max-width:900px) 50vw, 28vw';
    const second=p.img2?`<figure><img src="${ROOT}${p.img2}" ${srcset(p.img2)} sizes="${SZ2}" alt="${T.wornAlt(p.name)}" loading="lazy" style="object-position:50% 30%"><figcaption>${T.worn}</figcaption></figure>`
       :`<figure><img src="${ROOT}${p.img}" ${srcset(p.img)} sizes="${SZ2}" alt="" loading="lazy" style="object-position:${p.pos||'50% 50%'};filter:grayscale(1) contrast(1.05)"><figcaption>${p.sub}</figcaption></figure>`;
    const media=p.img?`<figure class="big${p.prod?' prod':''}">${visual(p,'fetchpriority="high"',SZ)}</figure>
       <figure class="zoom${p.prod?' prod':''}"><img src="${ROOT}${p.img}" ${srcset(p.img)} sizes="${SZ2}" alt="" loading="lazy" style="object-position:${p.zoom||'50% 70%'};transform-origin:${p.zoom||'50% 70%'}"><figcaption>${T.detail}</figcaption></figure>
       ${second}`
      :`<figure class="big">${visual(p)}</figure>`;
    const more=P.filter(x=>x.cat===p.cat&&x.id!==p.id).concat(P.filter(x=>x.cat!==p.cat)).slice(0,4);
    root.innerHTML=`<nav class="crumbs" aria-label="${T.crumbs}"><a href="index.html">${T.home}</a><span aria-hidden="true">/</span><a href="collection.html#${p.cat}">${p.catL}</a><span aria-hidden="true">/</span><span>${p.name}</span></nav>
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
      <section class="pp-more" aria-labelledby="moreT"><h2 id="moreT">${T.more}</h2><div class="grid">${more.map(card).join('')}</div></section>`;
    $('#ppForm').onchange=e=>{const n=e.target.name,v=e.target.value;st[n]=n==='len'?Number(v):v;const y=scrollY;draw();scrollTo(0,y)};
  };
  if(!document.body.dataset.product)addEventListener('hashchange',()=>{st={};draw();scrollTo(0,0)});draw();
}

/* ---------- Perruques : configurateur ---------- */
if(page==='perruques'){
  const f=$('#wigForm'),out=$('#wigOut'),go=$('#wigGo');
  const upd=()=>{const d=Object.fromEntries(new FormData(f));const i=[...f.querySelectorAll('[name=tex]')].findIndex(x=>x.checked);
    out.innerHTML=`<p class="sum-k">${T.yourWig}</p><p>${T.cfgOut(d)}</p>`;
    go.href=wa(T.waCfg(d))};
  f.addEventListener('change',upd);upd();
}
/* ---------- Galerie : filtres et visionneuse ---------- */
if(page==='galerie'){
  const items=$$('.g-it'),cnt=$('#gcount'),lb=$('#lb'),li=$('#lbImg'),lc=$('#lbCap');let cur=0,opener=null;
  const N={fr:n=>`${n} photo${n>1?'s':''}`,en:n=>`${n} photo${n>1?'s':''}`,nl:n=>`${n} foto${n>1?"'s":''}`}[LG]||(n=>n);
  const vis=()=>items.filter(x=>!x.hidden);
  const set=f=>{$$('#gchips .chip').forEach(c=>c.setAttribute('aria-pressed',String(c.dataset.f===f)));items.forEach(x=>x.hidden=!(f==='all'||x.dataset.cat===f));cnt.textContent=N(vis().length)};
  $$('#gchips .chip').forEach(c=>c.onclick=()=>set(c.dataset.f));set('all');
  const show=i=>{const v=vis();cur=(i+v.length)%v.length;const b=v[cur].querySelector('.g-btn');li.src=b.dataset.full;li.alt=b.querySelector('img').alt;lc.textContent=b.dataset.cap};
  items.forEach(x=>x.querySelector('.g-btn').onclick=e=>{opener=e.currentTarget;show(vis().indexOf(x));if(lb.showModal)lb.showModal();else lb.setAttribute('open','')});
  $('#lbX').onclick=()=>lb.close();$('#lbP').onclick=()=>show(cur-1);$('#lbN').onclick=()=>show(cur+1);
  lb.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
  lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
  lb.addEventListener('close',()=>{if(opener)opener.focus()});
}
})();
