import{o as s,c as r,t as i,G as I,_ as w,d as _,M as L,m as e,a as m,u,z as C,N as g,F as f,s as v,A as B,O,J as P,K as j,P as q,r as A,q as y,w as N,H as E}from"./index-LPrqi_sh.js";const it={__name:"TitleElement",props:{label:{type:String,required:!1}},setup(t){return(n,l)=>(s(),r("h2",{class:I(n.$attrs.class||"font-bold text-4xl")},i(t.label),3))}},F={class:"w-full max-w-sm fixed top-36 inset-x-1/2 z-30 bg-white py-8 px-4 -translate-x-2/4 rounded-2xl"},M={class:"relative"},W={class:"form__group relative w-8 h-8 flex justify-center items-center"},z=["value"],V={class:"block w-full border w-full text-xl text-center rounded-md cursor-pointer",for:"options"},T={__name:"ProductOptionPoupUp",props:{id:{type:Number,required:!1},options:{type:Array,default:!1},isOpen:{type:Boolean,required:!1},item:{type:Object,default:!1}},emits:["click"],setup(t,{emit:n}){const l=n,c=_(""),d=()=>{l("click")},p=L();return(x,o)=>(s(),r(f,null,[e("div",{onClick:o[0]||(o[0]=a=>d()),class:"embet fixed top-0 left-0 h-full w-full bg-black opacity-70 z-20"}),e("div",F,[e("div",M,[m(g,{onClick:o[1]||(o[1]=a=>d()),btnStyle:"border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition absolute -top-5 right-0",icon:u(C).close},null,8,["icon"]),(s(!0),r(f,null,v(t.options,(a,h)=>(s(),r("ul",{class:"product__options flex justify-center gap-3 mb-5",key:h},[(s(!0),r(f,null,v(a.product_option_value,(b,S)=>(s(),r("li",{key:S},[e("div",W,[B(e("input",{"onUpdate:modelValue":o[2]||(o[2]=$=>c.value=$),class:"form__input-radio absolute opacity-0 cursor-pointer",type:"radio",name:"options",value:b.name},null,8,z),[[O,c.value]]),e("label",V,i(b.name),1)])]))),128))]))),128)),m(g,{onClick:o[3]||(o[3]=a=>u(p).addProductToCart(t.id,t.item,c.value)),icon:x.icon,label:"В кошик",btnStyle:"mx-auto border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition border border-gray-400 text-gray-400"},null,8,["icon"])])])],64))}},U=w(T,[["__scopeId","data-v-47ee8884"]]),D=t=>(P("data-v-cc3ccf50"),t=t(),j(),t),G={class:"wish-button",type:"button"},H={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},J=D(()=>e("rect",{x:"0.5",y:"0.5",width:"31",height:"31",rx:"6.5",fill:"white",stroke:"#F8F8F8"},null,-1)),K=["stroke","fill"],R={__name:"ButtonItemWish",props:{fill:{type:String,default:"transparent"},stroke:{type:String,default:"#EAEAEA"}},setup(t){return(n,l)=>(s(),r("button",G,[(s(),r("svg",H,[J,e("path",{d:"M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z",stroke:t.stroke,fill:t.fill,"stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"},null,8,K)]))]))}},k=w(R,[["__scopeId","data-v-cc3ccf50"]]),Z={class:"product max-w-full sm:max-w-80 px-8 py-2 border border-gray-100 rounded-3xl transform motion-safe:hover:scale-105 shadow-md transition hover:shadow-lg"},Q={class:"product__head"},X=["src"],Y={class:"product__body mb-2"},tt={href:"/",class:"text-sm uppercase"},et={href:"/"},ot={class:"text-xs font-medium cursor-pointer"},st={class:"product__footer flex justify-between"},nt={class:""},rt=e("span",{class:"block uppercase text-stone-300 text-sm"},"Ціна:",-1),lt={class:"font-bold"},ct={__name:"ProductItem",props:{id:{type:[Number,String],default:!0},thumb:{type:String,default:!1},price:{type:String,default:!1},name:{type:String,default:!1},currency:{type:String,default:!1},options:{type:Array,default:!1},currency:{type:String,required:!1},manufacturer:{type:String,required:!1},item:{type:Object,default:!1}},setup(t){const n=_(!1),l=()=>{n.value=!n.value};_("");const c=()=>{console.log("Відбувся клік")},d=q(),p=C.cart;return(x,o)=>{const a=A("router-link");return s(),r(f,null,[e("div",Z,[e("div",Q,[u(d).isInWishList(t.id)?(s(),y(k,{key:1,fill:"green",stroke:"green"})):(s(),y(k,{key:0,onClick:o[0]||(o[0]=h=>u(d).addProductToWishList(t.id,t.item))})),m(a,{to:`/product/${t.id}`},{default:N(()=>[e("img",{class:"m-auto sm:m-0",src:t.thumb,alt:"goods"},null,8,X)]),_:1},8,["to"])]),e("div",Y,[e("a",tt,[e("h4",null,i(t.name),1)]),e("a",et,[e("h6",ot,i(t.manufacturer),1)])]),e("div",st,[e("div",nt,[rt,e("span",lt,[e("span",null,i(t.price),1),e("span",null,i(t.currency),1)])]),m(g,{icon:u(p),onClick:o[1]||(o[1]=h=>l()),item:t.item,label:"В кошик",btnStyle:"border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition border border-gray-400 text-gray-400"},null,8,["icon","item"])])]),n.value?(s(),y(U,{key:0,id:t.id,item:t.item,isOpen:n.value,onBackgroundClick:l,onClick:l,onSendOptions:c,options:t.options},null,8,["id","item","isOpen","options"])):E("",!0)],64)}}};export{ct as _,it as a};
