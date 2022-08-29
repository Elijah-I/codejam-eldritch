(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var t=e.g.document;if(!r&&t&&(t.currentScript&&(r=t.currentScript.src),!r)){var n=t.getElementsByTagName("script");n.length&&(r=n[n.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r+"../"})();const r={azathoth:e.p+"assets/Ancients/Azathoth.png",cthulhu:e.p+"assets/Ancients/Cthulthu.png",iogSothoth:e.p+"assets/Ancients/IogSothoth.png",shubNiggurath:e.p+"assets/Ancients/ShubNiggurath.png"},t=[{id:"azathoth",name:"azathoth",cardFace:r.azathoth,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:2,blueCards:0,brownCards:4}},{id:"cthulhu",name:"cthulhu",cardFace:r.cthulhu,firstStage:{greenCards:0,blueCards:2,brownCards:2},secondStage:{greenCards:1,blueCards:0,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"iogSothoth",name:"iogSothoth",cardFace:r.iogSothoth,firstStage:{greenCards:0,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"shubNiggurath",name:"shubNiggurath",cardFace:r.shubNiggurath,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:3,blueCards:1,brownCards:2},thirdStage:{greenCards:2,blueCards:0,brownCards:4}}],n=[{id:"very_easy",name:"Очень низкая",point:0},{id:"easy",name:"Низкая",point:1},{id:"normal",name:"Средняя",point:2},{id:"hard",name:"Высокая",point:3},{id:"very_hard",name:"Очень высокая",point:4}],a={brown1:e.p+"assets/MythicCards/brown/brown1.png",brown2:e.p+"assets/MythicCards/brown/brown2.png",brown3:e.p+"assets/MythicCards/brown/brown3.png",brown4:e.p+"assets/MythicCards/brown/brown4.png",brown5:e.p+"assets/MythicCards/brown/brown5.png",brown6:e.p+"assets/MythicCards/brown/brown6.png",brown7:e.p+"assets/MythicCards/brown/brown7.png",brown8:e.p+"assets/MythicCards/brown/brown8.png",brown9:e.p+"assets/MythicCards/brown/brown9.png",brown10:e.p+"assets/MythicCards/brown/brown10.png",brown11:e.p+"assets/MythicCards/brown/brown11.png",brown12:e.p+"assets/MythicCards/brown/brown12.png",brown13:e.p+"assets/MythicCards/brown/brown13.png",brown14:e.p+"assets/MythicCards/brown/brown14.png",brown15:e.p+"assets/MythicCards/brown/brown15.png",brown16:e.p+"assets/MythicCards/brown/brown16.png",brown17:e.p+"assets/MythicCards/brown/brown17.png",brown18:e.p+"assets/MythicCards/brown/brown18.png",brown19:e.p+"assets/MythicCards/brown/brown19.png",brown20:e.p+"assets/MythicCards/brown/brown20.png",brown21:e.p+"assets/MythicCards/brown/brown21.png"},s=[{id:"brown1",cardFace:a.brown1,difficulty:"normal",color:"brown"},{id:"brown2",cardFace:a.brown2,difficulty:"normal",color:"brown"},{id:"brown3",cardFace:a.brown3,difficulty:"normal",color:"brown"},{id:"brown4",cardFace:a.brown4,difficulty:"normal",color:"brown"},{id:"brown5",cardFace:a.brown5,difficulty:"normal",color:"brown"},{id:"brown6",cardFace:a.brown6,difficulty:"hard",color:"brown"},{id:"brown7",cardFace:a.brown7,difficulty:"hard",color:"brown"},{id:"brown8",cardFace:a.brown8,difficulty:"hard",color:"brown"},{id:"brown9",cardFace:a.brown9,difficulty:"hard",color:"brown"},{id:"brown10",cardFace:a.brown10,difficulty:"hard",color:"brown"},{id:"brown11",cardFace:a.brown11,difficulty:"easy",color:"brown"},{id:"brown12",cardFace:a.brown12,difficulty:"easy",color:"brown"},{id:"brown13",cardFace:a.brown13,difficulty:"easy",color:"brown"},{id:"brown14",cardFace:a.brown14,difficulty:"easy",color:"brown"},{id:"brown15",cardFace:a.brown15,difficulty:"normal",color:"brown"},{id:"brown16",cardFace:a.brown16,difficulty:"normal",color:"brown"},{id:"brown17",cardFace:a.brown17,difficulty:"normal",color:"brown"},{id:"brown18",cardFace:a.brown18,difficulty:"normal",color:"brown"},{id:"brown19",cardFace:a.brown19,difficulty:"normal",color:"brown"},{id:"brown20",cardFace:a.brown20,difficulty:"normal",color:"brown"},{id:"brown21",cardFace:a.brown21,difficulty:"easy",color:"brown"}],c={blue1:e.p+"assets/MythicCards/blue/blue1.png",blue2:e.p+"assets/MythicCards/blue/blue2.png",blue3:e.p+"assets/MythicCards/blue/blue3.png",blue4:e.p+"assets/MythicCards/blue/blue4.png",blue5:e.p+"assets/MythicCards/blue/blue5.png",blue6:e.p+"assets/MythicCards/blue/blue6.png",blue7:e.p+"assets/MythicCards/blue/blue7.png",blue8:e.p+"assets/MythicCards/blue/blue8.png",blue9:e.p+"assets/MythicCards/blue/blue9.png",blue10:e.p+"assets/MythicCards/blue/blue10.png",blue11:e.p+"assets/MythicCards/blue/blue11.png",blue12:e.p+"assets/MythicCards/blue/blue12.png"},o=[{id:"blue1",cardFace:c.blue1,difficulty:"hard",color:"blue"},{id:"blue2",cardFace:c.blue2,difficulty:"hard",color:"blue"},{id:"blue3",cardFace:c.blue3,difficulty:"easy",color:"blue"},{id:"blue4",cardFace:c.blue4,difficulty:"easy",color:"blue"},{id:"blue5",cardFace:c.blue5,difficulty:"easy",color:"blue"},{id:"blue6",cardFace:c.blue6,difficulty:"hard",color:"blue"},{id:"blue7",cardFace:c.blue7,difficulty:"normal",color:"blue"},{id:"blue8",cardFace:c.blue8,difficulty:"hard",color:"blue"},{id:"blue9",cardFace:c.blue9,difficulty:"normal",color:"blue"},{id:"blue10",cardFace:c.blue10,difficulty:"easy",color:"blue"},{id:"blue11",cardFace:c.blue11,difficulty:"normal",color:"blue"},{id:"blue12",cardFace:c.blue12,difficulty:"normal",color:"blue"}],i={green1:e.p+"assets/MythicCards/green/green1.png",green2:e.p+"assets/MythicCards/green/green2.png",green3:e.p+"assets/MythicCards/green/green3.png",green4:e.p+"assets/MythicCards/green/green4.png",green5:e.p+"assets/MythicCards/green/green5.png",green6:e.p+"assets/MythicCards/green/green6.png",green7:e.p+"assets/MythicCards/green/green7.png",green8:e.p+"assets/MythicCards/green/green8.png",green9:e.p+"assets/MythicCards/green/green9.png",green10:e.p+"assets/MythicCards/green/green10.png",green11:e.p+"assets/MythicCards/green/green11.png",green12:e.p+"assets/MythicCards/green/green12.png",green13:e.p+"assets/MythicCards/green/green13.png",green14:e.p+"assets/MythicCards/green/green14.png",green15:e.p+"assets/MythicCards/green/green15.png",green16:e.p+"assets/MythicCards/green/green16.png",green17:e.p+"assets/MythicCards/green/green17.png",green18:e.p+"assets/MythicCards/green/green18.png"},d=[{id:"green1",cardFace:i.green1,difficulty:"easy",color:"green"},{id:"green2",cardFace:i.green2,difficulty:"hard",color:"green"},{id:"green3",cardFace:i.green3,difficulty:"hard",color:"green"},{id:"green4",cardFace:i.green4,difficulty:"hard",color:"green"},{id:"green5",cardFace:i.green5,difficulty:"hard",color:"green"},{id:"green6",cardFace:i.green6,difficulty:"hard",color:"green"},{id:"green7",cardFace:i.green7,difficulty:"normal",color:"green"},{id:"green8",cardFace:i.green8,difficulty:"normal",color:"green"},{id:"green9",cardFace:i.green9,difficulty:"normal",color:"green"},{id:"green10",cardFace:i.green10,difficulty:"normal",color:"green"},{id:"green11",cardFace:i.green11,difficulty:"normal",color:"green"},{id:"green12",cardFace:i.green12,difficulty:"easy",color:"green"},{id:"green13",cardFace:i.green13,difficulty:"normal",color:"green"},{id:"green14",cardFace:i.green14,difficulty:"normal",color:"green"},{id:"green15",cardFace:i.green15,difficulty:"normal",color:"green"},{id:"green16",cardFace:i.green16,difficulty:"easy",color:"green"},{id:"green17",cardFace:i.green17,difficulty:"easy",color:"green"},{id:"green18",cardFace:i.green18,difficulty:"easy",color:"green"}],l="DIFF",g="GAME",b={level:null,ancient:null,currentCard:null,deck:[],stage:"ACIENT",gameStage:"firstStage"};let u=Object.assign({get subDeck(){return this.deck[this.gameStage]}},b);function h(e){const r=document.querySelectorAll(e);for(let e=0;e<r.length;e++){const t=r[e];t.css=e=>(e?t.setAttribute("style",e):t.removeAttribute("style"),t),t.html=e=>(t.innerHTML=e.toString().replace(/[\r\n]/g,"").replace(/\s\s+/g," "),t),t.clear=()=>{for(;t.firstChild;)t.removeChild(t.firstChild);return t},t.setVal=e=>{t.value=e},t.getVal=()=>t.value,t.getEVal=()=>encodeURIComponent(t.value),t.getOffsetRect=e=>{const r=t.getBoundingClientRect(),n=document.body,a=document.documentElement,s=window.pageYOffset||a.scrollTop||n.scrollTop,c=window.pageXOffset||a.scrollLeft||n.scrollLeft,o=a.clientTop||n.clientTop||0,i=a.clientLeft||n.clientLeft||0;let d=0,l=0;if(e){const e=t.parentNode.getBoundingClientRect();d=e.top,l=e.left}const g=r.top+s-o-d,b=r.left+c-i-l;return{t:Math.round(g),l:Math.round(b),w:Math.round(r.right-r.left),h:Math.round(r.bottom-r.top)}}}return 1===r.length?r[0]:r}const p=e=>new Promise((r=>setTimeout((()=>r()),e)));function f(e,r,t){const n=e===document.body&&"click"===r?e=>{t(e)}:e=>{e.cancelBubble=!0,t(e)};e.removeEventListener(r,t,!1),e.addEventListener(r,n,{passive:!0})}let w=!1;f(document,"DOMContentLoaded",(()=>{w=window.matchMedia("screen and (max-width: 700px)").matches}));const m=e.p+"assets/mythicCardBackground.png";class y{constructor(e,r){this.level=e,this.tosser="default",this.controller=r}async render(){const e=document.createElement("div");e.classList.add("game","container");const r=document.createElement("div");r.classList.add("deck","card");const t=new Image;t.src=m,r.append(t),f(r,"click",(()=>this.tossCard()));const n=document.createElement("div");n.classList.add("game__ancient","card");const a=new Image;a.src=u.ancient.cardFace,n.append(a);const s=document.createElement("div");s.classList.add("game__diff");for(let e=0;e<this.level.length;e++){const r=document.createElement("div");r.classList.add("star","game__star"),e<=u.level.point&&r.classList.add("star-active"),s.append(r)}const c=document.createElement("div");c.classList.add("game__label"),c.append(document.createTextNode("GAME STAGE 1"));const o=document.createElement("div");o.classList.add("game__info");const i=document.createElement("div");i.classList.add("green_status");const d=document.createElement("div");d.classList.add("brown_status");const l=document.createElement("div");l.classList.add("blue_status"),o.append(i,d,l);const g=document.createElement("div");g.classList.add("game__table"),e.append(r,n,s,c,o,g),await h("#root").append(e),await p(0),e.classList.add("game-active"),this.renderStageInfo()}tossCard(){h(".deck").classList.toggle("deck-reverse"),this.controller.tossCard(),"next"===this.tosser&&(this.controller.nextStage(),this.setDeck("default")),u.subDeck.length||("thirdStage"===u.gameStage?this.setDeck("over"):this.setDeck("next")),this.renderStageInfo(),this.renderLabel(),this.renderTable()}renderLabel(){let e=1;"secondStage"===u.gameStage&&(e=2),"thirdStage"===u.gameStage&&(e=3),h(".game__label").html(`GAME STAGE ${e}`)}async renderTable(){const e=h(".game__table");if(null===u.currentCard)return void("over"!==this.tosser&&e.clear());const r=document.createElement("div");r.classList.add("card","game__card");const t=new Image;t.src=u.currentCard.cardFace,r.append(t),await e.append(r),await p(0),r.classList.add("card-active")}setDeck(e){this.tosser=e;const r=h(".deck");let t=this.deckContent;"next"===e&&(t="<b>NEXT STAGE</b>"),"over"===e&&(t="<b>THE GAME IS OVER</b>"),this.deckContent||(this.deckContent=r.innerHTML),r.html(t)}renderStageInfo(){const e=e=>u.subDeck.filter((r=>r.color===e)).length;h(".green_status").html(e("green")),h(".brown_status").html(e("brown")),h(".blue_status").html(e("blue"))}}class C{constructor(e,r,t){this.game=e,this.level=r,this.controller=t}async render(){const e=document.createElement("div");e.classList.add("diff","container");const r=[];for(let e in this.level){const t=document.createElement("div");t.classList.add("star"),f(t,"mouseover",(()=>{const r=h(".star");for(let t in r)Number.isInteger(+t)&&r[t].classList[t<=e?"add":"remove"]("star-active")})),f(t,"mouseout",(()=>{const e=h(".star");for(let r in e)Number.isInteger(+r)&&e[r].classList.remove("star-active")})),f(t,"click",(()=>this.pickLevel(this.level[e]))),r.push(t)}e.append(...r),await h("#root").append(e),await p(0),e.classList.add("diff-active")}pickLevel(e){h(".diff").remove(),this.controller.pickLevel(e),setTimeout((()=>{this.game.render()}),0)}}class M{constructor(e,r,t){this.diff=t,this.ancients=e,this.controller=r}async render(){const e=document.createElement("div");e.classList.add("ancients","container");const r=[];for(let e of this.ancients){const t=document.createElement("div");t.classList.add("ancient__item","card"),t.id=e.id;const n=new Image;n.src=e.cardFace,t.append(n),f(t,"click",(()=>this.pickAncient(e))),r.push(t)}e.append(...r),await h("#root").append(e),await p(0),e.classList.add("ancients-active")}pickAncient(e){h(`#${e.id}`).classList.add("ancient-selected"),setTimeout((()=>{h(".ancients").remove(),this.diff.render()}),800),this.controller.pickAncient(e)}}class v{constructor(e,r){this.ancient=e,this.controller=r}render(){const e=document.createElement("div");e.classList.add("fone");const r=document.createElement("div");r.classList.add("reload"),r.innerHTML="&#x21bb;",f(r,"click",(()=>this.reload())),h("#root").append(e,r)}reload(){this.controller.reload(),h(".container").remove(),this.ancient.render()}}class F{pick(e,r,t="any"){const n=e[r].filter((e=>"any"===t||t==e.difficulty)).sort((()=>.5-Math.random())).pop();return e[r]=e[r].filter((e=>e.id!==n.id)),[n,e]}shuffle(e,r="all"){return Object.keys(e).reduce(((t,n)=>{const a="all"===r||r==n?.5:2;return t[n]=e[n].sort((()=>a-Math.random())),t}),{})}splitByStages(e,r){const t=r=>{const t=[],n=["green","blue","brown"];for(let a of n)for(let n=0;n<r[`${a}Cards`];n++){const[r,n]=this.pick(e,a);e=n,t.push(r)}return t.sort((()=>.5-Math.random()))};return{firstStage:t(r.firstStage),secondStage:t(r.secondStage),thirdStage:t(r.thirdStage)}}}class S{make(e,r,t){switch(this.deck=new F,this.cardsRequired=this.getRequiredCardsAmount(r),t.id){case"very_easy":e=this.keep(e,["easy"]);break;case"easy":e=this.keep(e,["easy","normal"]);break;case"normal":break;case"hard":e=this.keep(e,["normal","hard"]);break;case"very_hard":e=this.keep(e,["hard"])}return e=this.deck.shuffle(e),this.deck.splitByStages(e,r)}keep(e,r){const t={};for(let n in e){t[n]=e[n].filter((e=>r.includes(e.difficulty)));const a=this.cardsRequired[n]-t[n].length;if(a>0)for(let r=0;r<a;r++){const[r]=this.deck.pick(e,n,"normal");t[n].push(r)}}return t}getRequiredCardsAmount(e){const r=["firstStage","secondStage","thirdStage"],t=t=>r.reduce(((r,n)=>r+e[n][t]),0);return{brown:t("brownCards"),green:t("greenCards"),blue:t("blueCards")}}}class k{init({diff:e,ancient:r,cards:t}){this.diff=e,this.cards=t,this.anctient=r,this.deckCreator=new S}pickAncient(e){u.ancient=e,u.stage=l}pickLevel(e){u.level=e,u.stage=g,u.deck=this.deckCreator.make(this.cards,u.ancient,u.level)}tossCard(){u.currentCard=u.subDeck.length?u.subDeck.pop():null}nextStage(){"secondStage"===u.gameStage&&(u.gameStage="thirdStage"),"firstStage"===u.gameStage&&(u.gameStage="secondStage")}reload(){Object.keys(b).forEach((e=>u[e]=b[e]))}}class L{constructor(){this.controller=new k,this.game=new y(n,this.controller),this.diff=new C(this.game,n,this.controller),this.ancient=new M(t,this.controller,this.diff),this.interface=new v(this.ancient,this.controller),this.controller.init({diff:this.diff,ancient:this.ancient,cards:{brown:s,blue:o,green:d}})}render(){this.interface.render(),this.ancient.render()}}document.addEventListener("DOMContentLoaded",(()=>(new L).render()))})();