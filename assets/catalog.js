/* Catalogue Nalouo Hair : bundles et closures selon la carte des tarifs Instagram (nov. 2026) ; couleurs et perruques repris du site actuel */
(function(g){
const L12=[12,14,16,18,20,22,24,26,28,30,32,34], L12_28=[12,14,16,18,20,22,24,26,28], L18=[18,20,22,24,26,28];
const L30=[12,14,16,18,20,22,24,26,28,30], L26=[12,14,16,18,20,22,24,26];
/* carte des tarifs : bundle de 100 g (clips et ponytails : même prix par 100 g) */
const BUNDLE={"Lisse":[115,120,130,140,150,160,170,180,190,210],"Ondulée":[115,120,130,140,150,160,170,180,190,210],"Bouclée":[125,130,145,145,160,170,180,190,200,220]};
const LACE={"Closure 2×6":[110,115,125,135,140,145,150,160],"Closure 5×5":[120,125,135,145,155,165,175,185],"Closure 6×6":[135,135,145,155,165,175,185,195],"Frontale 13×4":[145,155,165,175,185,195,205,215],"Frontale 13×6":[150,160,170,180,190,200,210,220]};
const TARIFS={bundles:{lens:L30,cols:BUNDLE},lace:{lens:L26,cols:LACE},shipping:"Envoi en Belgique : + 10 €. Union européenne et international : prix sur demande."};
const tbl=(lens,prices)=>Object.fromEntries(lens.map((l,i)=>[l,prices[i]]));
const clipStyles=Object.fromEntries(Object.entries(BUNDLE).map(([k,v])=>[k,tbl(L18,v.slice(3,9))]));
const BUNDLE_SPECS=[["Poids","100 g par bundle"],["Traitement","Brut, non traité"],["Coloration","Jusqu'au blond 613"],["Pose complète","3 bundles en général"]];
const P=[
 {id:"viet-lisse",slug:"vietnamiennes-lisses",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes lisses",sub:"Couleur naturelle · 100 g",img:"img/lisse-bundles.webp",img2:"img/lisse-model.webp",prod:"cover",pos:"50% 50%",zoom:"40% 60%",origin:"Vietnam",
  desc:"Mèches vietnamiennes brutes, non traitées. Elles se coiffent, se bouclent et se colorent jusqu'au blond 613 sans perdre leur qualité.",
  prices:{_:tbl(L30,BUNDLE["Lisse"])}},
 {id:"ind-ondulee",slug:"indiennes-ondulees",cat:"bundles",catL:"Extensions raw hair",name:"Indiennes ondulées",sub:"Temples indiens · 100 g",img:"img/ondulee-bundle.webp",img2:"img/wavy-front.webp",prod:true,pos:"50% 50%",zoom:"50% 45%",origin:"Inde",
  desc:"Sélectionnées directement dans les temples indiens, naturellement épaisses et pleines. Colorables jusqu'au blond 613.",
  prices:{_:tbl(L30,BUNDLE["Ondulée"])}},
 {id:"ind-bouclee",slug:"indiennes-bouclees",cat:"bundles",catL:"Extensions raw hair",name:"Indiennes bouclées",sub:"Temples indiens · 100 g",img:"img/bouclee-bundles.webp",img2:"img/bouclee-model.webp",prod:true,pos:"50% 50%",zoom:"50% 50%",origin:"Inde",
  desc:"Boucles brutes, épaisses et pleines, qui restent douces et sans nœuds. Pour un volume luxueux et durable.",
  prices:{_:tbl(L30,BUNDLE["Bouclée"])}},
 {id:"viet-blond",slug:"vietnamiennes-blondes",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes blondes",sub:"Lisses · blond · 100 g",img:"img/blonde.webp",pos:"45% 35%",zoom:"55% 60%",origin:"Vietnam",
  desc:"Traitées pour préserver leur texture lisse et soyeuse, avec une brillance et une fluidité remarquables.",
  prices:{_:tbl(L12,[155,160,170,180,190,200,210,215,225,245,255,265])}},
 {id:"viet-jet",slug:"vietnamiennes-jet-black",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes jet black",sub:"Lisses · noir intense · 100 g",img:"img/bob-kiss.webp",pos:"50% 30%",zoom:"55% 70%",origin:"Vietnam",
  desc:"Un noir profond et brillant, sur une base vietnamienne robuste qui dure, même après plusieurs poses.",
  prices:{_:tbl(L12,[130,135,145,155,165,175,185,190,200,220,230,240])}},
 {id:"viet-couleurs",slug:"vietnamiennes-couleurs",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes, autres couleurs",sub:"Brun, auburn… · 100 g",img:"img/couleur-model.webp",img2:"img/brown-wavy.webp",pos:"50% 30%",zoom:"40% 60%",origin:"Vietnam",
  desc:"Nos lisses vietnamiennes dans une gamme de couleurs de base : brun, auburn et d'autres teintes riches.",
  prices:{_:tbl(L12,[140,145,155,165,175,185,195,200,210,230,240,250])}},
 {id:"lace",slug:"closures-frontales-hd",cat:"lace",catL:"Closures & frontales",name:"Closures & frontales HD",sub:"HD film lace",img:"img/lace-main.webp",pos:"40% 45%",zoom:"30% 38%",glyph:"L",tone:"#3a2a22",optLabel:"Format",
  desc:"Dentelle HD ultra-fine et respirante, invisible sur tous les tons de peau, pour une ligne de cheveux impeccable.",
  specs:[["Dentelle","HD film lace"],["Closures","2×6 · 5×5 · 6×6"],["Frontales","13×4 · 13×6"],["Rendu","Invisible sur tous les tons de peau"]],
  prices:Object.fromEntries(Object.entries(LACE).map(([k,v])=>[k,tbl(L26,v)]))},
 {id:"clips",slug:"extensions-a-clips",cat:"clips",catL:"Clips & tape-ins",name:"Extensions à clips",sub:"100 g · 7 bandes invisibles",img:"img/blonde.webp",pos:"50% 40%",zoom:"55% 70%",optLabel:"Texture",
  desc:"Clips invisibles en cheveux bruts, légers sur la tête. Pour plus de volume, nous conseillons 200 g (14 bandes).",
  specs:[["Poids","100 g · 7 bandes"],["Volume","200 g · 14 bandes conseillés"],["Pose","Seule, en quelques minutes"],["Coloration","Possible"]],
  prices:clipStyles},
 {id:"ponytail",slug:"ponytails",cat:"clips",catL:"Ponytails",name:"Ponytails",sub:"Cheveux naturels · 100 g",img:"img/ponytail-side.webp",img2:"img/ponytail-back.webp",pos:"55% 30%",zoom:"72% 60%",optLabel:"Texture",
  desc:"Une queue de cheval de luxe en cheveux naturels, 100 g, qui se fond avec vos cheveux.",
  specs:[["Poids","100 g"],["Cheveux","Naturels"],["Textures","Lisse, ondulée, bouclée"],["Longueurs","18″ à 28″"]],
  prices:clipStyles},
 {id:"wig-viet",slug:"perruque-vietnamienne-lisse",cat:"wigs",catL:"Perruques",name:"Perruque vietnamienne lisse",sub:"Sur mesure · 15–25 jours",img:"img/bob-selfie.webp",pos:"50% 30%",zoom:"50% 60%",range:[350,780],quote:true,
  desc:"Montée avec 2 bundles (3 dès 18″) et une closure ou une frontale. Couleur naturelle, ou jet black sans supplément."},
 {id:"wig-ondulee",slug:"perruque-indienne-ondulee",cat:"wigs",catL:"Perruques",name:"Perruque indienne ondulée",sub:"Sur mesure · 15–25 jours",img:"img/wavy-front.webp",pos:"50% 30%",zoom:"45% 70%",range:[370,810],quote:true,
  desc:"Montée avec 2 bundles (3 dès 18″) et une closure ou une frontale. Couleur naturelle, ou jet black sans supplément."},
 {id:"wig-bouclee",slug:"perruque-indienne-bouclee",cat:"wigs",catL:"Perruques",name:"Perruque indienne bouclée",sub:"Sur mesure · 15–25 jours",img:"img/bouclee-model.webp",pos:"50% 22%",zoom:"72% 55%",range:[390,840],quote:true,
  desc:"Montée avec 2 bundles (3 dès 18″) et une closure ou une frontale. Couleur naturelle, ou jet black sans supplément."}
];
g.NH={P,L12,L12_28,L26,BUNDLE_SPECS,TARIFS};
})(typeof window!=="undefined"?window:globalThis);
