/* Catalogue Nalouo Hair : prix repris du site actuel (indicatifs) */
(function(g){
const L12=[12,14,16,18,20,22,24,26,28,30,32,34], L12_28=[12,14,16,18,20,22,24,26,28], L18=[18,20,22,24,26,28];
const tbl=(lens,prices)=>Object.fromEntries(lens.map((l,i)=>[l,prices[i]]));
const clipStyles={"Lisse":tbl(L18,[155,165,175,185,190,200]),"Ondulée":tbl(L18,[165,175,185,195,205,215]),"Bouclée":tbl(L18,[175,185,195,205,215,225]),"Kinky":tbl(L18,[180,190,200,210,220,230])};
const BUNDLE_SPECS=[["Poids","100 g par bundle"],["Traitement","Brut, non traité"],["Coloration","Jusqu'au blond 613"],["Pose complète","3 bundles en général"]];
const P=[
 {id:"viet-lisse",slug:"vietnamiennes-lisses",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes lisses",sub:"Couleur naturelle · 100 g",img:"img/bob-front.webp",pos:"50% 30%",zoom:"50% 75%",origin:"Vietnam",
  desc:"Mèches vietnamiennes brutes, non traitées. Elles se coiffent, se bouclent et se colorent jusqu'au blond 613 sans perdre leur qualité.",
  prices:{_:tbl(L12,[105,110,120,130,140,150,160,165,175,195,205,215])}},
 {id:"ind-ondulee",slug:"indiennes-ondulees",cat:"bundles",catL:"Extensions raw hair",name:"Indiennes ondulées",sub:"Temples indiens · 100 g",img:"img/wavy-profile.webp",pos:"50% 30%",zoom:"40% 70%",origin:"Inde",
  desc:"Sélectionnées directement dans les temples indiens, naturellement épaisses et pleines. Colorables jusqu'au blond 613.",
  prices:{_:tbl(L12,[115,120,125,135,145,155,165,175,185,250,210,215])}},
 {id:"ind-bouclee",slug:"indiennes-bouclees",cat:"bundles",catL:"Extensions raw hair",name:"Indiennes bouclées",sub:"Temples indiens · 100 g",img:"img/hero-curly.webp",pos:"52% 40%",zoom:"60% 70%",origin:"Inde",
  desc:"Boucles brutes, épaisses et pleines, qui restent douces et sans nœuds. Pour un volume luxueux et durable.",
  prices:{_:tbl(L12,[125,130,135,145,155,165,175,185,195,215,220,225])}},
 {id:"burmese",slug:"burmese-bouclees",cat:"bundles",catL:"Extensions raw hair",name:"Burmese bouclées",sub:"Kinky curly · 100 g",img:"img/tex-bundles.webp",origin:"Birmanie",
  desc:"Imitent parfaitement la texture afro pour un rendu naturel et authentique. Se coiffent, se bouclent ou se colorent simplement.",
  prices:{_:tbl(L12,[125,130,135,145,155,165,175,185,195,215,220,225])}},
 {id:"kinky-lisse",slug:"kinky-lisses",cat:"bundles",catL:"Extensions raw hair",name:"Kinky lisses",sub:"Texture afro lissée · 100 g",glyph:"K",tone:"#2b1d14",
  desc:"Imitent parfaitement la texture afro lissée. Chaque bundle contient 100 g, pour un look volumineux et réaliste.",
  prices:{_:tbl(L12,[null,null,140,150,160,170,180,190,200,220,225,230])}},
 {id:"viet-blond",slug:"vietnamiennes-blondes",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes blondes",sub:"Lisses · blond · 100 g",img:"img/blonde.webp",pos:"38% 30%",origin:"Vietnam",
  desc:"Traitées pour préserver leur texture lisse et soyeuse, avec une brillance et une fluidité remarquables.",
  prices:{_:tbl(L12,[155,160,170,180,190,200,210,215,225,245,255,265])}},
 {id:"viet-jet",slug:"vietnamiennes-jet-black",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes jet black",sub:"Lisses · noir intense · 100 g",img:"img/bob-kiss.webp",pos:"50% 30%",zoom:"55% 70%",origin:"Vietnam",
  desc:"Un noir profond et brillant, sur une base vietnamienne robuste qui dure, même après plusieurs poses.",
  prices:{_:tbl(L12,[130,135,145,155,165,175,185,190,200,220,230,240])}},
 {id:"viet-couleurs",slug:"vietnamiennes-couleurs",cat:"bundles",catL:"Extensions raw hair",name:"Vietnamiennes, autres couleurs",sub:"Brun, auburn… · 100 g",img:"img/brown-wavy.webp",pos:"50% 30%",zoom:"45% 72%",origin:"Vietnam",
  desc:"Nos lisses vietnamiennes dans une gamme de couleurs de base : brun, auburn et d'autres teintes riches.",
  prices:{_:tbl(L12,[140,145,155,165,175,185,195,200,210,230,240,250])}},
 {id:"lace",slug:"closures-frontales-hd",cat:"lace",catL:"Closures & frontales",name:"Closures & frontales HD",sub:"HD film lace",glyph:"L",tone:"#3a2a22",optLabel:"Format",
  desc:"Dentelle HD ultra-fine et respirante, invisible sur tous les tons de peau, pour une ligne de cheveux impeccable.",
  specs:[["Dentelle","HD film lace"],["Closures","5×5 · 6×6 · 2×6"],["Frontale","13×4"],["Rendu","Invisible sur tous les tons de peau"]],
  prices:{"Closure 5×5":tbl(L12_28,[115,120,130,140,150,160,170,185,195]),"Closure 2×6":tbl(L12_28,[105,110,120,130,135,140,145,150,155]),"Closure 6×6":tbl(L12_28,[125,130,140,150,160,170,695,190,200]),"Frontale 13×4":tbl(L12_28,[140,150,160,170,180,190,200,210,220])}},
 {id:"clips",slug:"extensions-a-clips",cat:"clips",catL:"Clips & tape-ins",name:"Extensions à clips",sub:"100 g · 7 bandes invisibles",img:"img/blonde.webp",pos:"60% 60%",optLabel:"Texture",
  desc:"Clips invisibles en cheveux bruts, légers sur la tête. Pour plus de volume, nous conseillons 200 g (14 bandes).",
  specs:[["Poids","100 g · 7 bandes"],["Volume","200 g · 14 bandes conseillés"],["Pose","Seule, en quelques minutes"],["Coloration","Possible"]],
  prices:clipStyles},
 {id:"ponytail",slug:"ponytails",cat:"clips",catL:"Ponytails",name:"Ponytails",sub:"Cheveux naturels · 100 g",img:"img/duo2.webp",pos:"74% 40%",optLabel:"Texture",
  desc:"Une queue de cheval de luxe en cheveux naturels, 100 g, qui se fond avec vos cheveux.",
  specs:[["Poids","100 g"],["Cheveux","Naturels"],["Textures","Lisse, ondulée, bouclée, kinky"],["Longueurs","18″ à 28″"]],
  prices:clipStyles},
 {id:"wig-viet",slug:"perruque-vietnamienne-lisse",cat:"wigs",catL:"Perruques",name:"Perruque vietnamienne lisse",sub:"Sur mesure · 15–25 jours",img:"img/bob-selfie.webp",pos:"50% 30%",zoom:"50% 60%",range:[350,780],quote:true,
  desc:"Montée avec 2 bundles (3 dès 18″) et une closure ou une frontale. Couleur naturelle, ou jet black sans supplément."},
 {id:"wig-ondulee",slug:"perruque-indienne-ondulee",cat:"wigs",catL:"Perruques",name:"Perruque indienne ondulée",sub:"Sur mesure · 15–25 jours",img:"img/wavy-front.webp",pos:"50% 30%",zoom:"45% 70%",range:[370,810],quote:true,
  desc:"Montée avec 2 bundles (3 dès 18″) et une closure ou une frontale. Couleur naturelle, ou jet black sans supplément."},
 {id:"wig-bouclee",slug:"perruque-indienne-bouclee",cat:"wigs",catL:"Perruques",name:"Perruque indienne bouclée",sub:"Sur mesure · 15–25 jours",img:"img/hero-curly.webp",pos:"52% 30%",zoom:"60% 70%",range:[390,840],quote:true,
  desc:"Montée avec 2 bundles (3 dès 18″) et une closure ou une frontale. Couleur naturelle, ou jet black sans supplément."}
];
g.NH={P,L12,L12_28,BUNDLE_SPECS};
})(typeof window!=="undefined"?window:globalThis);
