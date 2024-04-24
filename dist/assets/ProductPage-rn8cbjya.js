import{Q as k,d as I,R as S,_ as L,L as $,M as B,g as j,y as O,P as C,o as r,c as i,m as e,u as o,t as l,F as g,s as x,a as E,N as m,q as y,A as N,O as R,z as v,J as z,K as A}from"./index-LPrqi_sh.js";const K=k("productInfo",()=>{const s=I([]),c="https://shoes-shop-40b9a-default-rtdb.firebaseio.com/products.json";return{productInfo:s,getProductInfo:async n=>{const f=`${c}?orderBy="product_id"&equalTo="${n}"`;try{const t=await S.get(f),u=Object.keys(t.data)[0],h=t.data[u];s.value=h,console.log(s.value)}catch(t){console.error("Error fetching product info:",t)}}}}),M=s=>(z("data-v-4af1ded2"),s=s(),A(),s),T={class:"flex gap-6 mb-8"},V={class:"w-full max-w-lg"},W=["src"],q={class:"product__info"},D={class:"mb-6"},F={class:"text-3xl font-medium mb-2"},U={class:"text-xl font-semibold"},J={class:"form__group relative w-8 h-8 flex justify-center items-center"},Q=["value","id"],G=["for"],H=M(()=>e("div",{class:"text-2xl font-medium mb-3"},[e("span"),e("span")],-1)),X={class:"flex mb-5 gap-5"},Y={class:"text-xl"},Z={__name:"ProductPage",setup(s){const c=I(""),p=$(),n=I("");let f=B();const t=K();j(()=>{n.value=p.params.id,t.getProductInfo(n.value)}),O(()=>{n.value=p.params.id,t.getProductInfo(n.value)});const u=C();return(h,a)=>(r(),i("div",T,[e("div",V,[e("img",{class:"w-full",src:o(t).productInfo.product_thumb,alt:""},null,8,W)]),e("div",q,[e("div",D,[e("h3",F,l(o(t).productInfo.product_name),1),e("p",U,l(o(t).productInfo.product_price)+" "+l(o(t).productInfo.product_cur_symbol),1)]),(r(!0),i(g,null,x(o(t).productInfo.options,(d,w)=>(r(),i("ul",{class:"product__options flex gap-3 mb-5",key:w},[(r(!0),i(g,null,x(d.product_option_value,(b,_)=>(r(),i("li",{key:_},[e("div",J,[N(e("input",{"onUpdate:modelValue":a[0]||(a[0]=P=>c.value=P),class:"form__input-radio absolute opacity-0 cursor-pointer",type:"radio",name:"options",value:b.name,id:`size_${_}${d.id}`},null,8,Q),[[R,c.value]]),e("label",{class:"block w-full border w-full text-xl text-center rounded-md cursor-pointer",for:`size_${_}${d.id}`},l(b.name),9,G)])]))),128))]))),128)),H,e("div",X,[E(m,{icon:o(v).cart,label:"В кошик",btnStyle:"border-gray-200 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition border border-gray-400 text-gray-400",onClick:a[1]||(a[1]=d=>o(f).addProductToCart(o(t).productInfo.product_id,o(t).productInfo,c.value))},null,8,["icon"]),o(u).isInWishList(o(t).productInfo.product_id)?(r(),y(m,{key:1,icon:o(v).wishActive,btnStyle:"border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition text-gray-400"},null,8,["icon"])):(r(),y(m,{key:0,onClick:a[2]||(a[2]=d=>o(u).addProductToWishList(o(t).productInfo.product_id,o(t).productInfo)),icon:o(v).wish,btnStyle:"border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition text-gray-400"},null,8,["icon"]))]),e("div",Y,[e("p",null,l(o(t).productInfo.product_name),1)])])]))}},ot=L(Z,[["__scopeId","data-v-4af1ded2"]]);export{ot as default};
