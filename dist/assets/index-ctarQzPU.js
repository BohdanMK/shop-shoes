(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ea(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const be={},rr=[],St=()=>{},pp=()=>!1,ks=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ca=e=>e.startsWith("onUpdate:"),Pe=Object.assign,Sa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},mp=Object.prototype.hasOwnProperty,ae=(e,t)=>mp.call(e,t),Y=Array.isArray,ir=e=>ui(e)==="[object Map]",qu=e=>ui(e)==="[object Set]",Ac=e=>ui(e)==="[object Date]",Z=e=>typeof e=="function",Ae=e=>typeof e=="string",gn=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",Ku=e=>(ve(e)||Z(e))&&Z(e.then)&&Z(e.catch),Gu=Object.prototype.toString,ui=e=>Gu.call(e),gp=e=>ui(e).slice(8,-1),Yu=e=>ui(e)==="[object Object]",Ia=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zi=Ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ts=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vp=/-(\w)/g,At=Ts(e=>e.replace(vp,(t,n)=>n?n.toUpperCase():"")),yp=/\B([A-Z])/g,br=Ts(e=>e.replace(yp,"-$1").toLowerCase()),As=Ts(e=>e.charAt(0).toUpperCase()+e.slice(1)),oo=Ts(e=>e?`on${As(e)}`:""),$n=(e,t)=>!Object.is(e,t),Vi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ns=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},bp=e=>{const t=parseFloat(e);return isNaN(t)?e:t},_p=e=>{const t=Ae(e)?Number(e):NaN;return isNaN(t)?e:t};let xc;const Mo=()=>xc||(xc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ka(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Ae(r)?Sp(r):ka(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(Ae(e)||ve(e))return e}const wp=/;(?![^(]*\))/g,Ep=/:([^]+)/,Cp=/\/\*[^]*?\*\//g;function Sp(e){const t={};return e.replace(Cp,"").split(wp).forEach(n=>{if(n){const r=n.split(Ep);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ke(e){let t="";if(Ae(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){const r=ke(e[n]);r&&(t+=r+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ip="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kp=Ea(Ip);function Ju(e){return!!e||e===""}function Tp(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=rs(e[r],t[r]);return n}function rs(e,t){if(e===t)return!0;let n=Ac(e),r=Ac(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=gn(e),r=gn(t),n||r)return e===t;if(n=Y(e),r=Y(t),n||r)return n&&r?Tp(e,t):!1;if(n=ve(e),r=ve(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!rs(e[o],t[o]))return!1}}return String(e)===String(t)}const Se=e=>Ae(e)?e:e==null?"":Y(e)||ve(e)&&(e.toString===Gu||!Z(e.toString))?JSON.stringify(e,Xu,2):String(e),Xu=(e,t)=>t&&t.__v_isRef?Xu(e,t.value):ir(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[ao(r,s)+" =>"]=i,n),{})}:qu(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ao(n))}:gn(t)?ao(t):ve(t)&&!Y(t)&&!Yu(t)?String(t):t,ao=(e,t="")=>{var n;return gn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Je;class Qu{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Je,!t&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Je;try{return Je=this,t()}finally{Je=n}}}on(){Je=this}off(){Je=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Zu(e){return new Qu(e)}function Ap(e,t=Je){t&&t.active&&t.effects.push(e)}function ef(){return Je}function xp(e){Je&&Je.cleanups.push(e)}const Ta=e=>{const t=new Set(e);return t.w=0,t.n=0,t},tf=e=>(e.w&vn)>0,nf=e=>(e.n&vn)>0,Pp=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=vn},Op=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];tf(i)&&!nf(i)?i.delete(e):t[n++]=i,i.w&=~vn,i.n&=~vn}t.length=n}},is=new WeakMap;let Pr=0,vn=1;const Do=30;let at;const Mn=Symbol(""),Fo=Symbol("");class Aa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ap(this,r)}run(){if(!this.active)return this.fn();let t=at,n=fn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=at,at=this,fn=!0,vn=1<<++Pr,Pr<=Do?Pp(this):Pc(this),this.fn()}finally{Pr<=Do&&Op(this),vn=1<<--Pr,at=this.parent,fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){at===this?this.deferStop=!0:this.active&&(Pc(this),this.onStop&&this.onStop(),this.active=!1)}}function Pc(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let fn=!0;const rf=[];function _r(){rf.push(fn),fn=!1}function wr(){const e=rf.pop();fn=e===void 0?!0:e}function Ge(e,t,n){if(fn&&at){let r=is.get(e);r||is.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ta()),sf(i)}}function sf(e,t){let n=!1;Pr<=Do?nf(e)||(e.n|=vn,n=!tf(e)):n=!e.has(at),n&&(e.add(at),at.deps.push(e))}function $t(e,t,n,r,i,s){const o=is.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&Y(e)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||!gn(l)&&l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":Y(e)?Ia(n)&&a.push(o.get("length")):(a.push(o.get(Mn)),ir(e)&&a.push(o.get(Fo)));break;case"delete":Y(e)||(a.push(o.get(Mn)),ir(e)&&a.push(o.get(Fo)));break;case"set":ir(e)&&a.push(o.get(Mn));break}if(a.length===1)a[0]&&$o(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);$o(Ta(c))}}function $o(e,t){const n=Y(e)?e:[...e];for(const r of n)r.computed&&Oc(r);for(const r of n)r.computed||Oc(r)}function Oc(e,t){(e!==at||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Rp(e,t){var n;return(n=is.get(e))==null?void 0:n.get(t)}const Lp=Ea("__proto__,__v_isRef,__isVue"),of=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gn)),Rc=Np();function Np(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ie(this);for(let s=0,o=this.length;s<o;s++)Ge(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_r();const r=ie(this)[t].apply(this,n);return wr(),r}}),e}function Mp(e){const t=ie(this);return Ge(t,"has",e),t.hasOwnProperty(e)}class af{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Gp:ff:s?uf:lf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=Y(t);if(!i){if(o&&ae(Rc,n))return Reflect.get(Rc,n,r);if(n==="hasOwnProperty")return Mp}const a=Reflect.get(t,n,r);return(gn(n)?of.has(n):Lp(n))||(i||Ge(t,"get",n),s)?a:Ne(a)?o&&Ia(n)?a:a.value:ve(a)?i?hf(a):fi(a):a}}class cf extends af{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._shallow){const c=fr(s);if(!ss(r)&&!fr(r)&&(s=ie(s),r=ie(r)),!Y(t)&&Ne(s)&&!Ne(r))return c?!1:(s.value=r,!0)}const o=Y(t)&&Ia(n)?Number(n)<t.length:ae(t,n),a=Reflect.set(t,n,r,i);return t===ie(i)&&(o?$n(r,s)&&$t(t,"set",n,r):$t(t,"add",n,r)),a}deleteProperty(t,n){const r=ae(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&$t(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!gn(n)||!of.has(n))&&Ge(t,"has",n),r}ownKeys(t){return Ge(t,"iterate",Y(t)?"length":Mn),Reflect.ownKeys(t)}}class Dp extends af{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Fp=new cf,$p=new Dp,Up=new cf(!0),xa=e=>e,xs=e=>Reflect.getPrototypeOf(e);function ki(e,t,n=!1,r=!1){e=e.__v_raw;const i=ie(e),s=ie(t);n||($n(t,s)&&Ge(i,"get",t),Ge(i,"get",s));const{has:o}=xs(i),a=r?xa:n?Ra:qr;if(o.call(i,t))return a(e.get(t));if(o.call(i,s))return a(e.get(s));e!==i&&e.get(t)}function Ti(e,t=!1){const n=this.__v_raw,r=ie(n),i=ie(e);return t||($n(e,i)&&Ge(r,"has",e),Ge(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Ai(e,t=!1){return e=e.__v_raw,!t&&Ge(ie(e),"iterate",Mn),Reflect.get(e,"size",e)}function Lc(e){e=ie(e);const t=ie(this);return xs(t).has.call(t,e)||(t.add(e),$t(t,"add",e,e)),this}function Nc(e,t){t=ie(t);const n=ie(this),{has:r,get:i}=xs(n);let s=r.call(n,e);s||(e=ie(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?$n(t,o)&&$t(n,"set",e,t):$t(n,"add",e,t),this}function Mc(e){const t=ie(this),{has:n,get:r}=xs(t);let i=n.call(t,e);i||(e=ie(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&$t(t,"delete",e,void 0),s}function Dc(){const e=ie(this),t=e.size!==0,n=e.clear();return t&&$t(e,"clear",void 0,void 0),n}function xi(e,t){return function(r,i){const s=this,o=s.__v_raw,a=ie(o),c=t?xa:e?Ra:qr;return!e&&Ge(a,"iterate",Mn),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function Pi(e,t,n){return function(...r){const i=this.__v_raw,s=ie(i),o=ir(s),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=i[e](...r),l=n?xa:t?Ra:qr;return!t&&Ge(s,"iterate",c?Fo:Mn),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[l(f[0]),l(f[1])]:l(f),done:d}},[Symbol.iterator](){return this}}}}function Gt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bp(){const e={get(s){return ki(this,s)},get size(){return Ai(this)},has:Ti,add:Lc,set:Nc,delete:Mc,clear:Dc,forEach:xi(!1,!1)},t={get(s){return ki(this,s,!1,!0)},get size(){return Ai(this)},has:Ti,add:Lc,set:Nc,delete:Mc,clear:Dc,forEach:xi(!1,!0)},n={get(s){return ki(this,s,!0)},get size(){return Ai(this,!0)},has(s){return Ti.call(this,s,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:xi(!0,!1)},r={get(s){return ki(this,s,!0,!0)},get size(){return Ai(this,!0)},has(s){return Ti.call(this,s,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:xi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Pi(s,!1,!1),n[s]=Pi(s,!0,!1),t[s]=Pi(s,!1,!0),r[s]=Pi(s,!0,!0)}),[e,n,t,r]}const[Hp,jp,zp,Vp]=Bp();function Pa(e,t){const n=t?e?Vp:zp:e?jp:Hp;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ae(n,i)&&i in r?n:r,i,s)}const Wp={get:Pa(!1,!1)},qp={get:Pa(!1,!0)},Kp={get:Pa(!0,!1)},lf=new WeakMap,uf=new WeakMap,ff=new WeakMap,Gp=new WeakMap;function Yp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jp(e){return e.__v_skip||!Object.isExtensible(e)?0:Yp(gp(e))}function fi(e){return fr(e)?e:Oa(e,!1,Fp,Wp,lf)}function df(e){return Oa(e,!1,Up,qp,uf)}function hf(e){return Oa(e,!0,$p,Kp,ff)}function Oa(e,t,n,r,i){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Jp(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return i.set(e,a),a}function dn(e){return fr(e)?dn(e.__v_raw):!!(e&&e.__v_isReactive)}function fr(e){return!!(e&&e.__v_isReadonly)}function ss(e){return!!(e&&e.__v_isShallow)}function pf(e){return dn(e)||fr(e)}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function Ps(e){return ns(e,"__v_skip",!0),e}const qr=e=>ve(e)?fi(e):e,Ra=e=>ve(e)?hf(e):e;function mf(e){fn&&at&&(e=ie(e),sf(e.dep||(e.dep=Ta())))}function gf(e,t){e=ie(e);const n=e.dep;n&&$o(n)}function Ne(e){return!!(e&&e.__v_isRef===!0)}function ge(e){return vf(e,!1)}function Xp(e){return vf(e,!0)}function vf(e,t){return Ne(e)?e:new Qp(e,t)}class Qp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ie(t),this._value=n?t:qr(t)}get value(){return mf(this),this._value}set value(t){const n=this.__v_isShallow||ss(t)||fr(t);t=n?t:ie(t),$n(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:qr(t),gf(this))}}function ee(e){return Ne(e)?e.value:e}const Zp={get:(e,t,n)=>ee(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function yf(e){return dn(e)?e:new Proxy(e,Zp)}function em(e){const t=Y(e)?new Array(e.length):{};for(const n in e)t[n]=nm(e,n);return t}class tm{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Rp(ie(this._object),this._key)}}function nm(e,t,n){const r=e[t];return Ne(r)?r:new tm(e,t,n)}class rm{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Aa(t,()=>{this._dirty||(this._dirty=!0,gf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=ie(this);return mf(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function im(e,t,n=!1){let r,i;const s=Z(e);return s?(r=e,i=St):(r=e.get,i=e.set),new rm(r,i,s||!i,n)}function hn(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Os(s,t,n)}return i}function et(e,t,n,r){if(Z(e)){const s=hn(e,t,n,r);return s&&Ku(s)&&s.catch(o=>{Os(o,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(et(e[s],t,n,r));return i}function Os(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](e,o,a)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){hn(c,null,10,[e,o,a]);return}}sm(e,n,i,r)}function sm(e,t,n,r=!0){console.error(e)}let Kr=!1,Uo=!1;const He=[];let _t=0;const sr=[];let Lt=null,xn=0;const bf=Promise.resolve();let La=null;function Na(e){const t=La||bf;return e?t.then(this?e.bind(this):e):t}function om(e){let t=_t+1,n=He.length;for(;t<n;){const r=t+n>>>1,i=He[r],s=Gr(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function Ma(e){(!He.length||!He.includes(e,Kr&&e.allowRecurse?_t+1:_t))&&(e.id==null?He.push(e):He.splice(om(e.id),0,e),_f())}function _f(){!Kr&&!Uo&&(Uo=!0,La=bf.then(Ef))}function am(e){const t=He.indexOf(e);t>_t&&He.splice(t,1)}function cm(e){Y(e)?sr.push(...e):(!Lt||!Lt.includes(e,e.allowRecurse?xn+1:xn))&&sr.push(e),_f()}function Fc(e,t,n=Kr?_t+1:0){for(;n<He.length;n++){const r=He[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;He.splice(n,1),n--,r()}}}function wf(e){if(sr.length){const t=[...new Set(sr)];if(sr.length=0,Lt){Lt.push(...t);return}for(Lt=t,Lt.sort((n,r)=>Gr(n)-Gr(r)),xn=0;xn<Lt.length;xn++)Lt[xn]();Lt=null,xn=0}}const Gr=e=>e.id==null?1/0:e.id,lm=(e,t)=>{const n=Gr(e)-Gr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ef(e){Uo=!1,Kr=!0,He.sort(lm);try{for(_t=0;_t<He.length;_t++){const t=He[_t];t&&t.active!==!1&&hn(t,null,14)}}finally{_t=0,He.length=0,wf(),Kr=!1,La=null,(He.length||sr.length)&&Ef()}}function um(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||be;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[l]||be;d&&(i=n.map(m=>Ae(m)?m.trim():m)),f&&(i=n.map(bp))}let a,c=r[a=oo(t)]||r[a=oo(At(t))];!c&&s&&(c=r[a=oo(br(t))]),c&&et(c,e,6,i);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,et(u,e,6,i)}}function Cf(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!Z(e)){const c=u=>{const l=Cf(u,t,!0);l&&(a=!0,Pe(o,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(ve(e)&&r.set(e,null),null):(Y(s)?s.forEach(c=>o[c]=null):Pe(o,s),ve(e)&&r.set(e,o),o)}function Rs(e,t){return!e||!ks(t)?!1:(t=t.slice(2).replace(/Once$/,""),ae(e,t[0].toLowerCase()+t.slice(1))||ae(e,br(t))||ae(e,t))}let De=null,Ls=null;function os(e){const t=De;return De=e,Ls=e&&e.type.__scopeId||null,t}function Wn(e){Ls=e}function qn(){Ls=null}function Xe(e,t=De,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Yc(-1);const s=os(t);let o;try{o=e(...i)}finally{os(s),r._d&&Yc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function co(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:f,data:d,setupState:m,ctx:g,inheritAttrs:v}=e;let k,b;const _=os(e);try{if(n.shapeFlag&4){const P=i||r,j=P;k=bt(l.call(j,P,f,s,m,d,g)),b=c}else{const P=t;k=bt(P.length>1?P(s,{attrs:c,slots:a,emit:u}):P(s,null)),b=t.props?c:fm(c)}}catch(P){$r.length=0,Os(P,e,1),k=J(nt)}let R=k;if(b&&v!==!1){const P=Object.keys(b),{shapeFlag:j}=R;P.length&&j&7&&(o&&P.some(Ca)&&(b=dm(b,o)),R=bn(R,b))}return n.dirs&&(R=bn(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),k=R,os(_),k}const fm=e=>{let t;for(const n in e)(n==="class"||n==="style"||ks(n))&&((t||(t={}))[n]=e[n]);return t},dm=(e,t)=>{const n={};for(const r in e)(!Ca(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function hm(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$c(r,o,u):!!o;if(c&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const d=l[f];if(o[d]!==r[d]&&!Rs(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$c(r,o,u):!0:!!o;return!1}function $c(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Rs(n,s))return!0}return!1}function pm({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Da="components";function ft(e,t){return If(Da,e,!0,t)||e}const Sf=Symbol.for("v-ndc");function mm(e){return Ae(e)?If(Da,e,!1)||e:e||Sf}function If(e,t,n=!0,r=!1){const i=De||Le;if(i){const s=i.type;if(e===Da){const a=o1(s,!1);if(a&&(a===t||a===At(t)||a===As(At(t))))return s}const o=Uc(i[e]||s[e],t)||Uc(i.appContext[e],t);return!o&&r?s:o}}function Uc(e,t){return e&&(e[t]||e[At(t)]||e[As(At(t))])}const gm=e=>e.__isSuspense;function vm(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):cm(e)}function t6(e,t){return Fa(e,null,t)}const Oi={};function Dn(e,t,n){return Fa(e,t,n)}function Fa(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=be){var a;const c=ef()===((a=Le)==null?void 0:a.scope)?Le:null;let u,l=!1,f=!1;if(Ne(e)?(u=()=>e.value,l=ss(e)):dn(e)?(u=()=>e,r=!0):Y(e)?(f=!0,l=e.some(P=>dn(P)||ss(P)),u=()=>e.map(P=>{if(Ne(P))return P.value;if(dn(P))return Rn(P);if(Z(P))return hn(P,c,2)})):Z(e)?t?u=()=>hn(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),et(e,c,3,[m])}:u=St,t&&r){const P=u;u=()=>Rn(P())}let d,m=P=>{d=_.onStop=()=>{hn(P,c,4),d=_.onStop=void 0}},g;if(Zr)if(m=St,t?n&&et(t,c,3,[u(),f?[]:void 0,m]):u(),i==="sync"){const P=l1();g=P.__watcherHandles||(P.__watcherHandles=[])}else return St;let v=f?new Array(e.length).fill(Oi):Oi;const k=()=>{if(_.active)if(t){const P=_.run();(r||l||(f?P.some((j,ne)=>$n(j,v[ne])):$n(P,v)))&&(d&&d(),et(t,c,3,[P,v===Oi?void 0:f&&v[0]===Oi?[]:v,m]),v=P)}else _.run()};k.allowRecurse=!!t;let b;i==="sync"?b=k:i==="post"?b=()=>Ke(k,c&&c.suspense):(k.pre=!0,c&&(k.id=c.uid),b=()=>Ma(k));const _=new Aa(u,b);t?n?k():v=_.run():i==="post"?Ke(_.run.bind(_),c&&c.suspense):_.run();const R=()=>{_.stop(),c&&c.scope&&Sa(c.scope.effects,_)};return g&&g.push(R),R}function ym(e,t,n){const r=this.proxy,i=Ae(e)?e.includes(".")?kf(r,e):()=>r[e]:e.bind(r,r);let s;Z(t)?s=t:(s=t.handler,n=t);const o=Le;dr(this);const a=Fa(i,s.bind(r),n);return o?dr(o):Fn(),a}function kf(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Rn(e,t){if(!ve(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ne(e))Rn(e.value,t);else if(Y(e))for(let n=0;n<e.length;n++)Rn(e[n],t);else if(qu(e)||ir(e))e.forEach(n=>{Rn(n,t)});else if(Yu(e))for(const n in e)Rn(e[n],t);return e}function as(e,t){const n=De;if(n===null)return e;const r=$s(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,a,c,u=be]=t[s];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Rn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function In(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(_r(),et(c,n,8,[e.el,a,e,t]),wr())}}const rn=Symbol("_leaveCb"),Ri=Symbol("_enterCb");function Tf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rf(()=>{e.isMounted=!0}),Nf(()=>{e.isUnmounting=!0}),e}const Ze=[Function,Array],Af={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ze,onEnter:Ze,onAfterEnter:Ze,onEnterCancelled:Ze,onBeforeLeave:Ze,onLeave:Ze,onAfterLeave:Ze,onLeaveCancelled:Ze,onBeforeAppear:Ze,onAppear:Ze,onAfterAppear:Ze,onAppearCancelled:Ze},bm={name:"BaseTransition",props:Af,setup(e,{slots:t}){const n=Gf(),r=Tf();let i;return()=>{const s=t.default&&$a(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const v of s)if(v.type!==nt){o=v;break}}const a=ie(e),{mode:c}=a;if(r.isLeaving)return lo(o);const u=Bc(o);if(!u)return lo(o);const l=Yr(u,a,r,n);Jr(u,l);const f=n.subTree,d=f&&Bc(f);let m=!1;const{getTransitionKey:g}=u.type;if(g){const v=g();i===void 0?i=v:v!==i&&(i=v,m=!0)}if(d&&d.type!==nt&&(!Pn(u,d)||m)){const v=Yr(d,a,r,n);if(Jr(d,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},lo(o);c==="in-out"&&u.type!==nt&&(v.delayLeave=(k,b,_)=>{const R=xf(r,d);R[String(d.key)]=d,k[rn]=()=>{b(),k[rn]=void 0,delete l.delayedLeave},l.delayedLeave=_})}return o}}},_m=bm;function xf(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Yr(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:k,onAfterAppear:b,onAppearCancelled:_}=t,R=String(e.key),P=xf(n,e),j=(M,U)=>{M&&et(M,r,9,U)},ne=(M,U)=>{const X=U[1];j(M,U),Y(M)?M.every(he=>he.length<=1)&&X():M.length<=1&&X()},te={mode:s,persisted:o,beforeEnter(M){let U=a;if(!n.isMounted)if(i)U=v||a;else return;M[rn]&&M[rn](!0);const X=P[R];X&&Pn(e,X)&&X.el[rn]&&X.el[rn](),j(U,[M])},enter(M){let U=c,X=u,he=l;if(!n.isMounted)if(i)U=k||c,X=b||u,he=_||l;else return;let H=!1;const ce=M[Ri]=$e=>{H||(H=!0,$e?j(he,[M]):j(X,[M]),te.delayedLeave&&te.delayedLeave(),M[Ri]=void 0)};U?ne(U,[M,ce]):ce()},leave(M,U){const X=String(e.key);if(M[Ri]&&M[Ri](!0),n.isUnmounting)return U();j(f,[M]);let he=!1;const H=M[rn]=ce=>{he||(he=!0,U(),ce?j(g,[M]):j(m,[M]),M[rn]=void 0,P[X]===e&&delete P[X])};P[X]=e,d?ne(d,[M,H]):H()},clone(M){return Yr(M,t,n,r)}};return te}function lo(e){if(Ns(e))return e=bn(e),e.children=null,e}function Bc(e){return Ns(e)?e.children?e.children[0]:void 0:e}function Jr(e,t){e.shapeFlag&6&&e.component?Jr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $a(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===we?(o.patchFlag&128&&i++,r=r.concat($a(o.children,t,a))):(t||o.type!==nt)&&r.push(a!=null?bn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ua(e,t){return Z(e)?Pe({name:e.name},t,{setup:e}):e}const Mr=e=>!!e.type.__asyncLoader,Ns=e=>e.type.__isKeepAlive;function wm(e,t){Pf(e,"a",t)}function Em(e,t){Pf(e,"da",t)}function Pf(e,t,n=Le){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ms(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ns(i.parent.vnode)&&Cm(r,t,n,i),i=i.parent}}function Cm(e,t,n,r){const i=Ms(t,e,r,!0);Mf(()=>{Sa(r[t],i)},n)}function Ms(e,t,n=Le,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;_r(),dr(n);const a=et(t,n,e,o);return Fn(),wr(),a});return r?i.unshift(s):i.push(s),s}}const Vt=e=>(t,n=Le)=>(!Zr||e==="sp")&&Ms(e,(...r)=>t(...r),n),Of=Vt("bm"),Rf=Vt("m"),Sm=Vt("bu"),Lf=Vt("u"),Nf=Vt("bum"),Mf=Vt("um"),Im=Vt("sp"),km=Vt("rtg"),Tm=Vt("rtc");function Am(e,t=Le){Ms("ec",e,t)}function yn(e,t,n,r){let i;const s=n&&n[r];if(Y(e)||Ae(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s&&s[o])}else if(ve(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,s&&s[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=t(e[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function Df(e,t,n={},r,i){if(De.isCE||De.parent&&Mr(De.parent)&&De.parent.isCE)return t!=="default"&&(n.name=t),J("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),A();const o=s&&Ff(s(n)),a=Re(we,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Ff(e){return e.some(t=>ls(t)?!(t.type===nt||t.type===we&&!Ff(t.children)):!0)?e:null}const Bo=e=>e?Yf(e)?$s(e)||e.proxy:Bo(e.parent):null,Dr=Pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Bo(e.parent),$root:e=>Bo(e.root),$emit:e=>e.emit,$options:e=>Ba(e),$forceUpdate:e=>e.f||(e.f=()=>Ma(e.update)),$nextTick:e=>e.n||(e.n=Na.bind(e.proxy)),$watch:e=>ym.bind(e)}),uo=(e,t)=>e!==be&&!e.__isScriptSetup&&ae(e,t),xm={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(uo(r,t))return o[t]=1,r[t];if(i!==be&&ae(i,t))return o[t]=2,i[t];if((u=e.propsOptions[0])&&ae(u,t))return o[t]=3,s[t];if(n!==be&&ae(n,t))return o[t]=4,n[t];Ho&&(o[t]=0)}}const l=Dr[t];let f,d;if(l)return t==="$attrs"&&Ge(e,"get",t),l(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==be&&ae(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,ae(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return uo(i,t)?(i[t]=n,!0):r!==be&&ae(r,t)?(r[t]=n,!0):ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==be&&ae(e,o)||uo(t,o)||(a=s[0])&&ae(a,o)||ae(r,o)||ae(Dr,o)||ae(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Hc(e){return Y(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ho=!0;function Pm(e){const t=Ba(e),n=e.proxy,r=e.ctx;Ho=!1,t.beforeCreate&&jc(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:v,deactivated:k,beforeDestroy:b,beforeUnmount:_,destroyed:R,unmounted:P,render:j,renderTracked:ne,renderTriggered:te,errorCaptured:M,serverPrefetch:U,expose:X,inheritAttrs:he,components:H,directives:ce,filters:$e}=t;if(u&&Om(u,r,null),o)for(const pe in o){const le=o[pe];Z(le)&&(r[pe]=le.bind(n))}if(i){const pe=i.call(n,n);ve(pe)&&(e.data=fi(pe))}if(Ho=!0,s)for(const pe in s){const le=s[pe],Pt=Z(le)?le.bind(n,n):Z(le.get)?le.get.bind(n,n):St,Kt=!Z(le)&&Z(le.set)?le.set.bind(n):St,gt=Ee({get:Pt,set:Kt});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>gt.value,set:We=>gt.value=We})}if(a)for(const pe in a)$f(a[pe],r,n,pe);if(c){const pe=Z(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(le=>{Fr(le,pe[le])})}l&&jc(l,e,"c");function se(pe,le){Y(le)?le.forEach(Pt=>pe(Pt.bind(n))):le&&pe(le.bind(n))}if(se(Of,f),se(Rf,d),se(Sm,m),se(Lf,g),se(wm,v),se(Em,k),se(Am,M),se(Tm,ne),se(km,te),se(Nf,_),se(Mf,P),se(Im,U),Y(X))if(X.length){const pe=e.exposed||(e.exposed={});X.forEach(le=>{Object.defineProperty(pe,le,{get:()=>n[le],set:Pt=>n[le]=Pt})})}else e.exposed||(e.exposed={});j&&e.render===St&&(e.render=j),he!=null&&(e.inheritAttrs=he),H&&(e.components=H),ce&&(e.directives=ce)}function Om(e,t,n=St){Y(e)&&(e=jo(e));for(const r in e){const i=e[r];let s;ve(i)?"default"in i?s=tt(i.from||r,i.default,!0):s=tt(i.from||r):s=tt(i),Ne(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function jc(e,t,n){et(Y(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function $f(e,t,n,r){const i=r.includes(".")?kf(n,r):()=>n[r];if(Ae(e)){const s=t[e];Z(s)&&Dn(i,s)}else if(Z(e))Dn(i,e.bind(n));else if(ve(e))if(Y(e))e.forEach(s=>$f(s,t,n,r));else{const s=Z(e.handler)?e.handler.bind(n):t[e.handler];Z(s)&&Dn(i,s,e)}}function Ba(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(u=>cs(c,u,o,!0)),cs(c,t,o)),ve(t)&&s.set(t,c),c}function cs(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&cs(e,s,n,!0),i&&i.forEach(o=>cs(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Rm[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Rm={data:zc,props:Vc,emits:Vc,methods:Or,computed:Or,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:Or,directives:Or,watch:Nm,provide:zc,inject:Lm};function zc(e,t){return t?e?function(){return Pe(Z(e)?e.call(this,this):e,Z(t)?t.call(this,this):t)}:t:e}function Lm(e,t){return Or(jo(e),jo(t))}function jo(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ve(e,t){return e?[...new Set([].concat(e,t))]:t}function Or(e,t){return e?Pe(Object.create(null),e,t):t}function Vc(e,t){return e?Y(e)&&Y(t)?[...new Set([...e,...t])]:Pe(Object.create(null),Hc(e),Hc(t??{})):t}function Nm(e,t){if(!e)return t;if(!t)return e;const n=Pe(Object.create(null),e);for(const r in t)n[r]=Ve(e[r],t[r]);return n}function Uf(){return{app:null,config:{isNativeTag:pp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mm=0;function Dm(e,t){return function(r,i=null){Z(r)||(r=Pe({},r)),i!=null&&!ve(i)&&(i=null);const s=Uf(),o=new WeakSet;let a=!1;const c=s.app={_uid:Mm++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:u1,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&Z(u.install)?(o.add(u),u.install(c,...l)):Z(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,f){if(!a){const d=J(r,i);return d.appContext=s,l&&t?t(d,u):e(d,u,f),a=!0,c._container=u,u.__vue_app__=c,$s(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c},runWithContext(u){Xr=c;try{return u()}finally{Xr=null}}};return c}}let Xr=null;function Fr(e,t){if(Le){let n=Le.provides;const r=Le.parent&&Le.parent.provides;r===n&&(n=Le.provides=Object.create(r)),n[e]=t}}function tt(e,t,n=!1){const r=Le||De;if(r||Xr){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Xr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Z(t)?t.call(r&&r.proxy):t}}function Fm(){return!!(Le||De||Xr)}function $m(e,t,n,r=!1){const i={},s={};ns(s,Fs,1),e.propsDefaults=Object.create(null),Bf(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:df(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Um(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=ie(i),[c]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=e.vnode.dynamicProps;for(let f=0;f<l.length;f++){let d=l[f];if(Rs(e.emitsOptions,d))continue;const m=t[d];if(c)if(ae(s,d))m!==s[d]&&(s[d]=m,u=!0);else{const g=At(d);i[g]=zo(c,a,g,m,e,!1)}else m!==s[d]&&(s[d]=m,u=!0)}}}else{Bf(e,t,i,s)&&(u=!0);let l;for(const f in a)(!t||!ae(t,f)&&((l=br(f))===f||!ae(t,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(i[f]=zo(c,a,f,void 0,e,!0)):delete i[f]);if(s!==a)for(const f in s)(!t||!ae(t,f))&&(delete s[f],u=!0)}u&&$t(e,"set","$attrs")}function Bf(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(zi(c))continue;const u=t[c];let l;i&&ae(i,l=At(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:Rs(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=ie(n),u=a||be;for(let l=0;l<s.length;l++){const f=s[l];n[f]=zo(i,c,f,u[f],e,!ae(u,f))}}return o}function zo(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(dr(i),r=u[n]=c.call(null,t),Fn())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===br(n))&&(r=!0))}return r}function Hf(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!Z(e)){const l=f=>{c=!0;const[d,m]=Hf(f,t,!0);Pe(o,d),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!s&&!c)return ve(e)&&r.set(e,rr),rr;if(Y(s))for(let l=0;l<s.length;l++){const f=At(s[l]);Wc(f)&&(o[f]=be)}else if(s)for(const l in s){const f=At(l);if(Wc(f)){const d=s[l],m=o[f]=Y(d)||Z(d)?{type:d}:Pe({},d);if(m){const g=Gc(Boolean,m.type),v=Gc(String,m.type);m[0]=g>-1,m[1]=v<0||g<v,(g>-1||ae(m,"default"))&&a.push(f)}}}const u=[o,a];return ve(e)&&r.set(e,u),u}function Wc(e){return e[0]!=="$"}function qc(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Kc(e,t){return qc(e)===qc(t)}function Gc(e,t){return Y(t)?t.findIndex(n=>Kc(n,e)):Z(t)&&Kc(t,e)?0:-1}const jf=e=>e[0]==="_"||e==="$stable",Ha=e=>Y(e)?e.map(bt):[bt(e)],Bm=(e,t,n)=>{if(t._n)return t;const r=Xe((...i)=>Ha(t(...i)),n);return r._c=!1,r},zf=(e,t,n)=>{const r=e._ctx;for(const i in e){if(jf(i))continue;const s=e[i];if(Z(s))t[i]=Bm(i,s,r);else if(s!=null){const o=Ha(s);t[i]=()=>o}}},Vf=(e,t)=>{const n=Ha(t);e.slots.default=()=>n},Hm=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ie(t),ns(t,"_",n)):zf(t,e.slots={})}else e.slots={},t&&Vf(e,t);ns(e.slots,Fs,1)},jm=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=be;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(Pe(i,t),!n&&a===1&&delete i._):(s=!t.$stable,zf(t,i)),o=t}else t&&(Vf(e,t),o={default:1});if(s)for(const a in i)!jf(a)&&o[a]==null&&delete i[a]};function Vo(e,t,n,r,i=!1){if(Y(e)){e.forEach((d,m)=>Vo(d,t&&(Y(t)?t[m]:t),n,r,i));return}if(Mr(r)&&!i)return;const s=r.shapeFlag&4?$s(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e,u=t&&t.r,l=a.refs===be?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(Ae(u)?(l[u]=null,ae(f,u)&&(f[u]=null)):Ne(u)&&(u.value=null)),Z(c))hn(c,a,12,[o,l]);else{const d=Ae(c),m=Ne(c);if(d||m){const g=()=>{if(e.f){const v=d?ae(f,c)?f[c]:l[c]:c.value;i?Y(v)&&Sa(v,s):Y(v)?v.includes(s)||v.push(s):d?(l[c]=[s],ae(f,c)&&(f[c]=l[c])):(c.value=[s],e.k&&(l[e.k]=c.value))}else d?(l[c]=o,ae(f,c)&&(f[c]=o)):m&&(c.value=o,e.k&&(l[e.k]=o))};o?(g.id=-1,Ke(g,n)):g()}}}const Ke=vm;function zm(e){return Vm(e)}function Vm(e,t){const n=Mo();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:d,setScopeId:m=St,insertStaticContent:g}=e,v=(h,p,y,w=null,S=null,I=null,D=!1,O=null,L=!!p.dynamicChildren)=>{if(h===p)return;h&&!Pn(h,p)&&(w=C(h),We(h,S,I,!0),h=null),p.patchFlag===-2&&(L=!1,p.dynamicChildren=null);const{type:T,ref:q,shapeFlag:z}=p;switch(T){case Ds:k(h,p,y,w);break;case nt:b(h,p,y,w);break;case Wi:h==null&&_(p,y,w,D);break;case we:H(h,p,y,w,S,I,D,O,L);break;default:z&1?j(h,p,y,w,S,I,D,O,L):z&6?ce(h,p,y,w,S,I,D,O,L):(z&64||z&128)&&T.process(h,p,y,w,S,I,D,O,L,N)}q!=null&&S&&Vo(q,h&&h.ref,I,p||h,!p)},k=(h,p,y,w)=>{if(h==null)r(p.el=a(p.children),y,w);else{const S=p.el=h.el;p.children!==h.children&&u(S,p.children)}},b=(h,p,y,w)=>{h==null?r(p.el=c(p.children||""),y,w):p.el=h.el},_=(h,p,y,w)=>{[h.el,h.anchor]=g(h.children,p,y,w,h.el,h.anchor)},R=({el:h,anchor:p},y,w)=>{let S;for(;h&&h!==p;)S=d(h),r(h,y,w),h=S;r(p,y,w)},P=({el:h,anchor:p})=>{let y;for(;h&&h!==p;)y=d(h),i(h),h=y;i(p)},j=(h,p,y,w,S,I,D,O,L)=>{D=D||p.type==="svg",h==null?ne(p,y,w,S,I,D,O,L):U(h,p,S,I,D,O,L)},ne=(h,p,y,w,S,I,D,O)=>{let L,T;const{type:q,props:z,shapeFlag:K,transition:Q,dirs:re}=h;if(L=h.el=o(h.type,I,z&&z.is,z),K&8?l(L,h.children):K&16&&M(h.children,L,null,w,S,I&&q!=="foreignObject",D,O),re&&In(h,null,w,"created"),te(L,h,h.scopeId,D,w),z){for(const de in z)de!=="value"&&!zi(de)&&s(L,de,null,z[de],I,h.children,w,S,Be);"value"in z&&s(L,"value",null,z.value),(T=z.onVnodeBeforeMount)&&yt(T,w,h)}re&&In(h,null,w,"beforeMount");const ye=Wm(S,Q);ye&&Q.beforeEnter(L),r(L,p,y),((T=z&&z.onVnodeMounted)||ye||re)&&Ke(()=>{T&&yt(T,w,h),ye&&Q.enter(L),re&&In(h,null,w,"mounted")},S)},te=(h,p,y,w,S)=>{if(y&&m(h,y),w)for(let I=0;I<w.length;I++)m(h,w[I]);if(S){let I=S.subTree;if(p===I){const D=S.vnode;te(h,D,D.scopeId,D.slotScopeIds,S.parent)}}},M=(h,p,y,w,S,I,D,O,L=0)=>{for(let T=L;T<h.length;T++){const q=h[T]=O?sn(h[T]):bt(h[T]);v(null,q,p,y,w,S,I,D,O)}},U=(h,p,y,w,S,I,D)=>{const O=p.el=h.el;let{patchFlag:L,dynamicChildren:T,dirs:q}=p;L|=h.patchFlag&16;const z=h.props||be,K=p.props||be;let Q;y&&kn(y,!1),(Q=K.onVnodeBeforeUpdate)&&yt(Q,y,p,h),q&&In(p,h,y,"beforeUpdate"),y&&kn(y,!0);const re=S&&p.type!=="foreignObject";if(T?X(h.dynamicChildren,T,O,y,w,re,I):D||le(h,p,O,null,y,w,re,I,!1),L>0){if(L&16)he(O,p,z,K,y,w,S);else if(L&2&&z.class!==K.class&&s(O,"class",null,K.class,S),L&4&&s(O,"style",z.style,K.style,S),L&8){const ye=p.dynamicProps;for(let de=0;de<ye.length;de++){const xe=ye[de],st=z[xe],Yn=K[xe];(Yn!==st||xe==="value")&&s(O,xe,st,Yn,S,h.children,y,w,Be)}}L&1&&h.children!==p.children&&l(O,p.children)}else!D&&T==null&&he(O,p,z,K,y,w,S);((Q=K.onVnodeUpdated)||q)&&Ke(()=>{Q&&yt(Q,y,p,h),q&&In(p,h,y,"updated")},w)},X=(h,p,y,w,S,I,D)=>{for(let O=0;O<p.length;O++){const L=h[O],T=p[O],q=L.el&&(L.type===we||!Pn(L,T)||L.shapeFlag&70)?f(L.el):y;v(L,T,q,null,w,S,I,D,!0)}},he=(h,p,y,w,S,I,D)=>{if(y!==w){if(y!==be)for(const O in y)!zi(O)&&!(O in w)&&s(h,O,y[O],null,D,p.children,S,I,Be);for(const O in w){if(zi(O))continue;const L=w[O],T=y[O];L!==T&&O!=="value"&&s(h,O,T,L,D,p.children,S,I,Be)}"value"in w&&s(h,"value",y.value,w.value)}},H=(h,p,y,w,S,I,D,O,L)=>{const T=p.el=h?h.el:a(""),q=p.anchor=h?h.anchor:a("");let{patchFlag:z,dynamicChildren:K,slotScopeIds:Q}=p;Q&&(O=O?O.concat(Q):Q),h==null?(r(T,y,w),r(q,y,w),M(p.children,y,q,S,I,D,O,L)):z>0&&z&64&&K&&h.dynamicChildren?(X(h.dynamicChildren,K,y,S,I,D,O),(p.key!=null||S&&p===S.subTree)&&Wf(h,p,!0)):le(h,p,y,q,S,I,D,O,L)},ce=(h,p,y,w,S,I,D,O,L)=>{p.slotScopeIds=O,h==null?p.shapeFlag&512?S.ctx.activate(p,y,w,D,L):$e(p,y,w,S,I,D,L):ze(h,p,L)},$e=(h,p,y,w,S,I,D)=>{const O=h.component=t1(h,w,S);if(Ns(h)&&(O.ctx.renderer=N),n1(O),O.asyncDep){if(S&&S.registerDep(O,se),!h.el){const L=O.subTree=J(nt);b(null,L,p,y)}return}se(O,h,p,y,S,I,D)},ze=(h,p,y)=>{const w=p.component=h.component;if(hm(h,p,y))if(w.asyncDep&&!w.asyncResolved){pe(w,p,y);return}else w.next=p,am(w.update),w.update();else p.el=h.el,w.vnode=p},se=(h,p,y,w,S,I,D)=>{const O=()=>{if(h.isMounted){let{next:q,bu:z,u:K,parent:Q,vnode:re}=h,ye=q,de;kn(h,!1),q?(q.el=re.el,pe(h,q,D)):q=re,z&&Vi(z),(de=q.props&&q.props.onVnodeBeforeUpdate)&&yt(de,Q,q,re),kn(h,!0);const xe=co(h),st=h.subTree;h.subTree=xe,v(st,xe,f(st.el),C(st),h,S,I),q.el=xe.el,ye===null&&pm(h,xe.el),K&&Ke(K,S),(de=q.props&&q.props.onVnodeUpdated)&&Ke(()=>yt(de,Q,q,re),S)}else{let q;const{el:z,props:K}=p,{bm:Q,m:re,parent:ye}=h,de=Mr(p);if(kn(h,!1),Q&&Vi(Q),!de&&(q=K&&K.onVnodeBeforeMount)&&yt(q,ye,p),kn(h,!0),z&&ue){const xe=()=>{h.subTree=co(h),ue(z,h.subTree,h,S,null)};de?p.type.__asyncLoader().then(()=>!h.isUnmounted&&xe()):xe()}else{const xe=h.subTree=co(h);v(null,xe,y,w,h,S,I),p.el=xe.el}if(re&&Ke(re,S),!de&&(q=K&&K.onVnodeMounted)){const xe=p;Ke(()=>yt(q,ye,xe),S)}(p.shapeFlag&256||ye&&Mr(ye.vnode)&&ye.vnode.shapeFlag&256)&&h.a&&Ke(h.a,S),h.isMounted=!0,p=y=w=null}},L=h.effect=new Aa(O,()=>Ma(T),h.scope),T=h.update=()=>L.run();T.id=h.uid,kn(h,!0),T()},pe=(h,p,y)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,Um(h,p.props,w,y),jm(h,p.children,y),_r(),Fc(h),wr()},le=(h,p,y,w,S,I,D,O,L=!1)=>{const T=h&&h.children,q=h?h.shapeFlag:0,z=p.children,{patchFlag:K,shapeFlag:Q}=p;if(K>0){if(K&128){Kt(T,z,y,w,S,I,D,O,L);return}else if(K&256){Pt(T,z,y,w,S,I,D,O,L);return}}Q&8?(q&16&&Be(T,S,I),z!==T&&l(y,z)):q&16?Q&16?Kt(T,z,y,w,S,I,D,O,L):Be(T,S,I,!0):(q&8&&l(y,""),Q&16&&M(z,y,w,S,I,D,O,L))},Pt=(h,p,y,w,S,I,D,O,L)=>{h=h||rr,p=p||rr;const T=h.length,q=p.length,z=Math.min(T,q);let K;for(K=0;K<z;K++){const Q=p[K]=L?sn(p[K]):bt(p[K]);v(h[K],Q,y,null,S,I,D,O,L)}T>q?Be(h,S,I,!0,!1,z):M(p,y,w,S,I,D,O,L,z)},Kt=(h,p,y,w,S,I,D,O,L)=>{let T=0;const q=p.length;let z=h.length-1,K=q-1;for(;T<=z&&T<=K;){const Q=h[T],re=p[T]=L?sn(p[T]):bt(p[T]);if(Pn(Q,re))v(Q,re,y,null,S,I,D,O,L);else break;T++}for(;T<=z&&T<=K;){const Q=h[z],re=p[K]=L?sn(p[K]):bt(p[K]);if(Pn(Q,re))v(Q,re,y,null,S,I,D,O,L);else break;z--,K--}if(T>z){if(T<=K){const Q=K+1,re=Q<q?p[Q].el:w;for(;T<=K;)v(null,p[T]=L?sn(p[T]):bt(p[T]),y,re,S,I,D,O,L),T++}}else if(T>K)for(;T<=z;)We(h[T],S,I,!0),T++;else{const Q=T,re=T,ye=new Map;for(T=re;T<=K;T++){const Ye=p[T]=L?sn(p[T]):bt(p[T]);Ye.key!=null&&ye.set(Ye.key,T)}let de,xe=0;const st=K-re+1;let Yn=!1,Ic=0;const Ir=new Array(st);for(T=0;T<st;T++)Ir[T]=0;for(T=Q;T<=z;T++){const Ye=h[T];if(xe>=st){We(Ye,S,I,!0);continue}let vt;if(Ye.key!=null)vt=ye.get(Ye.key);else for(de=re;de<=K;de++)if(Ir[de-re]===0&&Pn(Ye,p[de])){vt=de;break}vt===void 0?We(Ye,S,I,!0):(Ir[vt-re]=T+1,vt>=Ic?Ic=vt:Yn=!0,v(Ye,p[vt],y,null,S,I,D,O,L),xe++)}const kc=Yn?qm(Ir):rr;for(de=kc.length-1,T=st-1;T>=0;T--){const Ye=re+T,vt=p[Ye],Tc=Ye+1<q?p[Ye+1].el:w;Ir[T]===0?v(null,vt,y,Tc,S,I,D,O,L):Yn&&(de<0||T!==kc[de]?gt(vt,y,Tc,2):de--)}}},gt=(h,p,y,w,S=null)=>{const{el:I,type:D,transition:O,children:L,shapeFlag:T}=h;if(T&6){gt(h.component.subTree,p,y,w);return}if(T&128){h.suspense.move(p,y,w);return}if(T&64){D.move(h,p,y,N);return}if(D===we){r(I,p,y);for(let z=0;z<L.length;z++)gt(L[z],p,y,w);r(h.anchor,p,y);return}if(D===Wi){R(h,p,y);return}if(w!==2&&T&1&&O)if(w===0)O.beforeEnter(I),r(I,p,y),Ke(()=>O.enter(I),S);else{const{leave:z,delayLeave:K,afterLeave:Q}=O,re=()=>r(I,p,y),ye=()=>{z(I,()=>{re(),Q&&Q()})};K?K(I,re,ye):ye()}else r(I,p,y)},We=(h,p,y,w=!1,S=!1)=>{const{type:I,props:D,ref:O,children:L,dynamicChildren:T,shapeFlag:q,patchFlag:z,dirs:K}=h;if(O!=null&&Vo(O,null,y,h,!0),q&256){p.ctx.deactivate(h);return}const Q=q&1&&K,re=!Mr(h);let ye;if(re&&(ye=D&&D.onVnodeBeforeUnmount)&&yt(ye,p,h),q&6)Ii(h.component,y,w);else{if(q&128){h.suspense.unmount(y,w);return}Q&&In(h,null,p,"beforeUnmount"),q&64?h.type.remove(h,p,y,S,N,w):T&&(I!==we||z>0&&z&64)?Be(T,p,y,!1,!0):(I===we&&z&384||!S&&q&16)&&Be(L,p,y),w&&Kn(h)}(re&&(ye=D&&D.onVnodeUnmounted)||Q)&&Ke(()=>{ye&&yt(ye,p,h),Q&&In(h,null,p,"unmounted")},y)},Kn=h=>{const{type:p,el:y,anchor:w,transition:S}=h;if(p===we){Gn(y,w);return}if(p===Wi){P(h);return}const I=()=>{i(y),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(h.shapeFlag&1&&S&&!S.persisted){const{leave:D,delayLeave:O}=S,L=()=>D(y,I);O?O(h.el,I,L):L()}else I()},Gn=(h,p)=>{let y;for(;h!==p;)y=d(h),i(h),h=y;i(p)},Ii=(h,p,y)=>{const{bum:w,scope:S,update:I,subTree:D,um:O}=h;w&&Vi(w),S.stop(),I&&(I.active=!1,We(D,h,p,y)),O&&Ke(O,p),Ke(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Be=(h,p,y,w=!1,S=!1,I=0)=>{for(let D=I;D<h.length;D++)We(h[D],p,y,w,S)},C=h=>h.shapeFlag&6?C(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),B=(h,p,y)=>{h==null?p._vnode&&We(p._vnode,null,null,!0):v(p._vnode||null,h,p,null,null,null,y),Fc(),wf(),p._vnode=h},N={p:v,um:We,m:gt,r:Kn,mt:$e,mc:M,pc:le,pbc:X,n:C,o:e};let W,ue;return t&&([W,ue]=t(N)),{render:B,hydrate:W,createApp:Dm(B,W)}}function kn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Wm(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wf(e,t,n=!1){const r=e.children,i=t.children;if(Y(r)&&Y(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=sn(i[s]),a.el=o.el),n||Wf(o,a)),a.type===Ds&&(a.el=o.el)}}function qm(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<u?s=a+1:o=a;u<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const Km=e=>e.__isTeleport,we=Symbol.for("v-fgt"),Ds=Symbol.for("v-txt"),nt=Symbol.for("v-cmt"),Wi=Symbol.for("v-stc"),$r=[];let ct=null;function A(e=!1){$r.push(ct=e?null:[])}function Gm(){$r.pop(),ct=$r[$r.length-1]||null}let Qr=1;function Yc(e){Qr+=e}function qf(e){return e.dynamicChildren=Qr>0?ct||rr:null,Gm(),Qr>0&&ct&&ct.push(e),e}function $(e,t,n,r,i,s){return qf(x(e,t,n,r,i,s,!0))}function Re(e,t,n,r,i){return qf(J(e,t,n,r,i,!0))}function ls(e){return e?e.__v_isVNode===!0:!1}function Pn(e,t){return e.type===t.type&&e.key===t.key}const Fs="__vInternal",Kf=({key:e})=>e??null,qi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ae(e)||Ne(e)||Z(e)?{i:De,r:e,k:t,f:!!n}:e:null);function x(e,t=null,n=null,r=0,i=null,s=e===we?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kf(t),ref:t&&qi(t),scopeId:Ls,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:De};return a?(ja(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Ae(n)?8:16),Qr>0&&!o&&ct&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&ct.push(c),c}const J=Ym;function Ym(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Sf)&&(e=nt),ls(e)){const a=bn(e,t,!0);return n&&ja(a,n),Qr>0&&!s&&ct&&(a.shapeFlag&6?ct[ct.indexOf(e)]=a:ct.push(a)),a.patchFlag|=-2,a}if(a1(e)&&(e=e.__vccOpts),t){t=Jm(t);let{class:a,style:c}=t;a&&!Ae(a)&&(t.class=ke(a)),ve(c)&&(pf(c)&&!Y(c)&&(c=Pe({},c)),t.style=ka(c))}const o=Ae(e)?1:gm(e)?128:Km(e)?64:ve(e)?4:Z(e)?2:0;return x(e,t,n,r,i,o,s,!0)}function Jm(e){return e?pf(e)||Fs in e?Pe({},e):e:null}function bn(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=t?Qm(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Kf(a),ref:t&&t.ref?n&&i?Y(i)?i.concat(qi(t)):[i,qi(t)]:qi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bn(e.ssContent),ssFallback:e.ssFallback&&bn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ur(e=" ",t=0){return J(Ds,null,e,t)}function Xm(e,t){const n=J(Wi,null,e);return n.staticCount=t,n}function Ie(e="",t=!1){return t?(A(),Re(nt,null,e)):J(nt,null,e)}function bt(e){return e==null||typeof e=="boolean"?J(nt):Y(e)?J(we,null,e.slice()):typeof e=="object"?sn(e):J(Ds,null,String(e))}function sn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:bn(e)}function ja(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ja(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Fs in t)?t._ctx=De:i===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Z(t)?(t={default:t,_ctx:De},n=32):(t=String(t),r&64?(n=16,t=[Ur(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qm(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=ke([t.class,r.class]));else if(i==="style")t.style=ka([t.style,r.style]);else if(ks(i)){const s=t[i],o=r[i];o&&s!==o&&!(Y(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function yt(e,t,n,r=null){et(e,t,7,[n,r])}const Zm=Uf();let e1=0;function t1(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Zm,s={uid:e1++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hf(r,i),emitsOptions:Cf(r,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=um.bind(null,s),e.ce&&e.ce(s),s}let Le=null;const Gf=()=>Le||De;let za,Jn,Jc="__VUE_INSTANCE_SETTERS__";(Jn=Mo()[Jc])||(Jn=Mo()[Jc]=[]),Jn.push(e=>Le=e),za=e=>{Jn.length>1?Jn.forEach(t=>t(e)):Jn[0](e)};const dr=e=>{za(e),e.scope.on()},Fn=()=>{Le&&Le.scope.off(),za(null)};function Yf(e){return e.vnode.shapeFlag&4}let Zr=!1;function n1(e,t=!1){Zr=t;const{props:n,children:r}=e.vnode,i=Yf(e);$m(e,n,i,t),Hm(e,r);const s=i?r1(e,t):void 0;return Zr=!1,s}function r1(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ps(new Proxy(e.ctx,xm));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?s1(e):null;dr(e),_r();const s=hn(r,e,0,[e.props,i]);if(wr(),Fn(),Ku(s)){if(s.then(Fn,Fn),t)return s.then(o=>{Xc(e,o,t)}).catch(o=>{Os(o,e,0)});e.asyncDep=s}else Xc(e,s,t)}else Jf(e,t)}function Xc(e,t,n){Z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=yf(t)),Jf(e,n)}let Qc;function Jf(e,t,n){const r=e.type;if(!e.render){if(!t&&Qc&&!r.render){const i=r.template||Ba(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Pe(Pe({isCustomElement:s,delimiters:a},o),c);r.render=Qc(i,u)}}e.render=r.render||St}{dr(e),_r();try{Pm(e)}finally{wr(),Fn()}}}function i1(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ge(e,"get","$attrs"),t[n]}}))}function s1(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return i1(e)},slots:e.slots,emit:e.emit,expose:t}}function $s(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yf(Ps(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dr)return Dr[n](e)},has(t,n){return n in t||n in Dr}}))}function o1(e,t=!0){return Z(e)?e.displayName||e.name:e.name||t&&e.__name}function a1(e){return Z(e)&&"__vccOpts"in e}const Ee=(e,t)=>im(e,t,Zr);function Us(e,t,n){const r=arguments.length;return r===2?ve(t)&&!Y(t)?ls(t)?J(e,null,[t]):J(e,t):J(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ls(n)&&(n=[n]),J(e,t,n))}const c1=Symbol.for("v-scx"),l1=()=>tt(c1),u1="3.3.13",f1="http://www.w3.org/2000/svg",On=typeof document<"u"?document:null,Zc=On&&On.createElement("template"),d1={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?On.createElementNS(f1,e):On.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>On.createTextNode(e),createComment:e=>On.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>On.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Zc.innerHTML=r?`<svg>${e}</svg>`:e;const a=Zc.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Yt="transition",kr="animation",hr=Symbol("_vtc"),Bs=(e,{slots:t})=>Us(_m,Qf(e),t);Bs.displayName="Transition";const Xf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},h1=Bs.props=Pe({},Af,Xf),Tn=(e,t=[])=>{Y(e)?e.forEach(n=>n(...t)):e&&e(...t)},el=e=>e?Y(e)?e.some(t=>t.length>1):e.length>1:!1;function Qf(e){const t={};for(const H in e)H in Xf||(t[H]=e[H]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,g=p1(i),v=g&&g[0],k=g&&g[1],{onBeforeEnter:b,onEnter:_,onEnterCancelled:R,onLeave:P,onLeaveCancelled:j,onBeforeAppear:ne=b,onAppear:te=_,onAppearCancelled:M=R}=t,U=(H,ce,$e)=>{tn(H,ce?l:a),tn(H,ce?u:o),$e&&$e()},X=(H,ce)=>{H._isLeaving=!1,tn(H,f),tn(H,m),tn(H,d),ce&&ce()},he=H=>(ce,$e)=>{const ze=H?te:_,se=()=>U(ce,H,$e);Tn(ze,[ce,se]),tl(()=>{tn(ce,H?c:s),Rt(ce,H?l:a),el(ze)||nl(ce,r,v,se)})};return Pe(t,{onBeforeEnter(H){Tn(b,[H]),Rt(H,s),Rt(H,o)},onBeforeAppear(H){Tn(ne,[H]),Rt(H,c),Rt(H,u)},onEnter:he(!1),onAppear:he(!0),onLeave(H,ce){H._isLeaving=!0;const $e=()=>X(H,ce);Rt(H,f),ed(),Rt(H,d),tl(()=>{H._isLeaving&&(tn(H,f),Rt(H,m),el(P)||nl(H,r,k,$e))}),Tn(P,[H,$e])},onEnterCancelled(H){U(H,!1),Tn(R,[H])},onAppearCancelled(H){U(H,!0),Tn(M,[H])},onLeaveCancelled(H){X(H),Tn(j,[H])}})}function p1(e){if(e==null)return null;if(ve(e))return[fo(e.enter),fo(e.leave)];{const t=fo(e);return[t,t]}}function fo(e){return _p(e)}function Rt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[hr]||(e[hr]=new Set)).add(t)}function tn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[hr];n&&(n.delete(t),n.size||(e[hr]=void 0))}function tl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let m1=0;function nl(e,t,n,r){const i=e._endId=++m1,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Zf(e,t);if(!o)return r();const u=o+"end";let l=0;const f=()=>{e.removeEventListener(u,d),s()},d=m=>{m.target===e&&++l>=c&&f()};setTimeout(()=>{l<c&&f()},a+1),e.addEventListener(u,d)}function Zf(e,t){const n=window.getComputedStyle(e),r=g=>(n[g]||"").split(", "),i=r(`${Yt}Delay`),s=r(`${Yt}Duration`),o=rl(i,s),a=r(`${kr}Delay`),c=r(`${kr}Duration`),u=rl(a,c);let l=null,f=0,d=0;t===Yt?o>0&&(l=Yt,f=o,d=s.length):t===kr?u>0&&(l=kr,f=u,d=c.length):(f=Math.max(o,u),l=f>0?o>u?Yt:kr:null,d=l?l===Yt?s.length:c.length:0);const m=l===Yt&&/\b(transform|all)(,|$)/.test(r(`${Yt}Property`).toString());return{type:l,timeout:f,propCount:d,hasTransform:m}}function rl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>il(n)+il(e[r])))}function il(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ed(){return document.body.offsetHeight}function g1(e,t,n){const r=e[hr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Va=Symbol("_vod"),us={beforeMount(e,{value:t},{transition:n}){e[Va]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Tr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Tr(e,!0),r.enter(e)):r.leave(e,()=>{Tr(e,!1)}):Tr(e,t))},beforeUnmount(e,{value:t}){Tr(e,t)}};function Tr(e,t){e.style.display=t?e[Va]:"none"}const v1=Symbol("");function y1(e,t,n){const r=e.style,i=Ae(n);if(n&&!i){if(t&&!Ae(t))for(const s in t)n[s]==null&&Wo(r,s,"");for(const s in n)Wo(r,s,n[s])}else{const s=r.display;if(i){if(t!==n){const o=r[v1];o&&(n+=";"+o),r.cssText=n}}else t&&e.removeAttribute("style");Va in e&&(r.display=s)}}const sl=/\s*!important$/;function Wo(e,t,n){if(Y(n))n.forEach(r=>Wo(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=b1(e,t);sl.test(n)?e.setProperty(br(r),n.replace(sl,""),"important"):e[r]=n}}const ol=["Webkit","Moz","ms"],ho={};function b1(e,t){const n=ho[t];if(n)return n;let r=At(t);if(r!=="filter"&&r in e)return ho[t]=r;r=As(r);for(let i=0;i<ol.length;i++){const s=ol[i]+r;if(s in e)return ho[t]=s}return t}const al="http://www.w3.org/1999/xlink";function _1(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(al,t.slice(6,t.length)):e.setAttributeNS(al,t,n);else{const s=kp(t);n==null||s&&!Ju(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function w1(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const u=a==="OPTION"?e.getAttribute("value"):e.value,l=n??"";u!==l&&(e.value=l),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Ju(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function td(e,t,n,r){e.addEventListener(t,n,r)}function E1(e,t,n,r){e.removeEventListener(t,n,r)}const cl=Symbol("_vei");function C1(e,t,n,r,i=null){const s=e[cl]||(e[cl]={}),o=s[t];if(r&&o)o.value=r;else{const[a,c]=S1(t);if(r){const u=s[t]=T1(r,i);td(e,a,u,c)}else o&&(E1(e,a,o,c),s[t]=void 0)}}const ll=/(?:Once|Passive|Capture)$/;function S1(e){let t;if(ll.test(e)){t={};let r;for(;r=e.match(ll);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):br(e.slice(2)),t]}let po=0;const I1=Promise.resolve(),k1=()=>po||(I1.then(()=>po=0),po=Date.now());function T1(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;et(A1(r,n.value),t,5,[r])};return n.value=e,n.attached=k1(),n}function A1(e,t){if(Y(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const ul=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,x1=(e,t,n,r,i=!1,s,o,a,c)=>{t==="class"?g1(e,r,i):t==="style"?y1(e,n,r):ks(t)?Ca(t)||C1(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):P1(e,t,r,i))?w1(e,t,r,s,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),_1(e,t,r,i))};function P1(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ul(t)&&Z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ul(t)&&Ae(n)?!1:t in e}const nd=new WeakMap,rd=new WeakMap,fs=Symbol("_moveCb"),fl=Symbol("_enterCb"),id={name:"TransitionGroup",props:Pe({},h1,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Gf(),r=Tf();let i,s;return Lf(()=>{if(!i.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!D1(i[0].el,n.vnode.el,o))return;i.forEach(L1),i.forEach(N1);const a=i.filter(M1);ed(),a.forEach(c=>{const u=c.el,l=u.style;Rt(u,o),l.transform=l.webkitTransform=l.transitionDuration="";const f=u[fs]=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",f),u[fs]=null,tn(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=ie(e),a=Qf(o);let c=o.tag||we;i=s,s=t.default?$a(t.default()):[];for(let u=0;u<s.length;u++){const l=s[u];l.key!=null&&Jr(l,Yr(l,a,r,n))}if(i)for(let u=0;u<i.length;u++){const l=i[u];Jr(l,Yr(l,a,r,n)),nd.set(l,l.el.getBoundingClientRect())}return J(c,null,s)}}},O1=e=>delete e.mode;id.props;const R1=id;function L1(e){const t=e.el;t[fs]&&t[fs](),t[fl]&&t[fl]()}function N1(e){rd.set(e,e.el.getBoundingClientRect())}function M1(e){const t=nd.get(e),n=rd.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",e}}function D1(e,t,n){const r=e.cloneNode(),i=e[hr];i&&i.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=Zf(r);return s.removeChild(r),o}const dl=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Y(t)?n=>Vi(t,n):t},mo=Symbol("_assign"),n6={created(e,{value:t},n){e.checked=rs(t,n.props.value),e[mo]=dl(n),td(e,"change",()=>{e[mo](F1(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[mo]=dl(r),t!==n&&(e.checked=rs(t,r.props.value))}};function F1(e){return"_value"in e?e._value:e.value}const $1=["ctrl","shift","alt","meta"],U1={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>$1.some(n=>e[`${n}Key`]&&!t.includes(n))},r6=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<t.length;o++){const a=U1[t[o]];if(a&&a(i,t))return}return e(i,...s)})},B1=Pe({patchProp:x1},d1);let hl;function H1(){return hl||(hl=zm(B1))}const j1=(...e)=>{const t=H1().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=z1(r);if(!i)return;const s=t._component;!Z(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function z1(e){return Ae(e)?document.querySelector(e):e}var V1=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let sd;const Hs=e=>sd=e,od=Symbol();function qo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Br;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Br||(Br={}));function W1(){const e=Zu(!0),t=e.run(()=>ge({}));let n=[],r=[];const i=Ps({install(s){Hs(i),i._a=s,s.provide(od,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!V1?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const ad=()=>{};function pl(e,t,n,r=ad){e.push(t);const i=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&ef()&&xp(i),i}function Xn(e,...t){e.slice().forEach(n=>{n(...t)})}const q1=e=>e();function Ko(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];qo(i)&&qo(r)&&e.hasOwnProperty(n)&&!Ne(r)&&!dn(r)?e[n]=Ko(i,r):e[n]=r}return e}const K1=Symbol();function G1(e){return!qo(e)||!e.hasOwnProperty(K1)}const{assign:nn}=Object;function Y1(e){return!!(Ne(e)&&e.effect)}function J1(e,t,n,r){const{state:i,actions:s,getters:o}=t,a=n.state.value[e];let c;function u(){a||(n.state.value[e]=i?i():{});const l=em(n.state.value[e]);return nn(l,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=Ps(Ee(()=>{Hs(n);const m=n._s.get(e);return o[d].call(m,m)})),f),{}))}return c=cd(e,u,t,n,r,!0),c}function cd(e,t,n={},r,i,s){let o;const a=nn({actions:{}},n),c={deep:!0};let u,l,f=[],d=[],m;const g=r.state.value[e];!s&&!g&&(r.state.value[e]={}),ge({});let v;function k(M){let U;u=l=!1,typeof M=="function"?(M(r.state.value[e]),U={type:Br.patchFunction,storeId:e,events:m}):(Ko(r.state.value[e],M),U={type:Br.patchObject,payload:M,storeId:e,events:m});const X=v=Symbol();Na().then(()=>{v===X&&(u=!0)}),l=!0,Xn(f,U,r.state.value[e])}const b=s?function(){const{state:U}=n,X=U?U():{};this.$patch(he=>{nn(he,X)})}:ad;function _(){o.stop(),f=[],d=[],r._s.delete(e)}function R(M,U){return function(){Hs(r);const X=Array.from(arguments),he=[],H=[];function ce(se){he.push(se)}function $e(se){H.push(se)}Xn(d,{args:X,name:M,store:j,after:ce,onError:$e});let ze;try{ze=U.apply(this&&this.$id===e?this:j,X)}catch(se){throw Xn(H,se),se}return ze instanceof Promise?ze.then(se=>(Xn(he,se),se)).catch(se=>(Xn(H,se),Promise.reject(se))):(Xn(he,ze),ze)}}const P={_p:r,$id:e,$onAction:pl.bind(null,d),$patch:k,$reset:b,$subscribe(M,U={}){const X=pl(f,M,U.detached,()=>he()),he=o.run(()=>Dn(()=>r.state.value[e],H=>{(U.flush==="sync"?l:u)&&M({storeId:e,type:Br.direct,events:m},H)},nn({},c,U)));return X},$dispose:_},j=fi(P);r._s.set(e,j);const te=(r._a&&r._a.runWithContext||q1)(()=>r._e.run(()=>(o=Zu()).run(t)));for(const M in te){const U=te[M];if(Ne(U)&&!Y1(U)||dn(U))s||(g&&G1(U)&&(Ne(U)?U.value=g[M]:Ko(U,g[M])),r.state.value[e][M]=U);else if(typeof U=="function"){const X=R(M,U);te[M]=X,a.actions[M]=U}}return nn(j,te),nn(ie(j),te),Object.defineProperty(j,"$state",{get:()=>r.state.value[e],set:M=>{k(U=>{nn(U,M)})}}),r._p.forEach(M=>{nn(j,o.run(()=>M({store:j,app:r._a,pinia:r,options:a})))}),g&&s&&n.hydrate&&n.hydrate(j.$state,g),u=!0,l=!0,j}function js(e,t,n){let r,i;const s=typeof t=="function";typeof e=="string"?(r=e,i=s?n:t):(i=e,r=e.id);function o(a,c){const u=Fm();return a=a||(u?tt(od,null):null),a&&Hs(a),a=sd,a._s.has(r)||(s?cd(r,t,i,a):J1(r,i,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Qn=typeof window<"u";function X1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const fe=Object.assign;function go(e,t){const n={};for(const r in t){const i=t[r];n[r]=dt(i)?i.map(e):e(i)}return n}const Hr=()=>{},dt=Array.isArray,Q1=/\/$/,Z1=e=>e.replace(Q1,"");function vo(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=r0(r??t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function e0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ml(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function t0(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&pr(t.matched[r],n.matched[i])&&ld(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function pr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ld(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!n0(e[n],t[n]))return!1;return!0}function n0(e,t){return dt(e)?gl(e,t):dt(t)?gl(t,e):e===t}function gl(e,t){return dt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function r0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ei;(function(e){e.pop="pop",e.push="push"})(ei||(ei={}));var jr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(jr||(jr={}));function i0(e){if(!e)if(Qn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Z1(e)}const s0=/^[^#]+#/;function o0(e,t){return e.replace(s0,"#")+t}function a0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const zs=()=>({left:window.pageXOffset,top:window.pageYOffset});function c0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=a0(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function vl(e,t){return(history.state?history.state.position-t:-1)+e}const Go=new Map;function l0(e,t){Go.set(e,t)}function u0(e){const t=Go.get(e);return Go.delete(e),t}let f0=()=>location.protocol+"//"+location.host;function ud(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),ml(c,"")}return ml(n,e)+r+i}function d0(e,t,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const m=ud(e,location),g=n.value,v=t.value;let k=0;if(d){if(n.value=m,t.value=d,o&&o===g){o=null;return}k=v?d.position-v.position:0}else r(m);i.forEach(b=>{b(n.value,g,{delta:k,type:ei.pop,direction:k?k>0?jr.forward:jr.back:jr.unknown})})};function c(){o=n.value}function u(d){i.push(d);const m=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(m),m}function l(){const{history:d}=window;d.state&&d.replaceState(fe({},d.state,{scroll:zs()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function yl(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?zs():null}}function h0(e){const{history:t,location:n}=window,r={value:ud(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:f0()+e+c;try{t[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(m){console.error(m),n[l?"replace":"assign"](d)}}function o(c,u){const l=fe({},t.state,yl(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=fe({},i.value,t.state,{forward:c,scroll:zs()});s(l.current,l,!0);const f=fe({},yl(r.value,c,null),{position:l.position+1},u);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function p0(e){e=i0(e);const t=h0(e),n=d0(e,t.state,t.location,t.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=fe({location:"",base:e,go:r,createHref:o0.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function m0(e){return typeof e=="string"||e&&typeof e=="object"}function fd(e){return typeof e=="string"||typeof e=="symbol"}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dd=Symbol("");var bl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(bl||(bl={}));function mr(e,t){return fe(new Error,{type:e,[dd]:!0},t)}function Ot(e,t){return e instanceof Error&&dd in e&&(t==null||!!(e.type&t))}const _l="[^/]+?",g0={sensitive:!1,strict:!1,start:!0,end:!0},v0=/[.+*?^${}()[\]/\\]/g;function y0(e,t){const n=fe({},g0,t),r=[];let i=n.start?"^":"";const s=[];for(const u of e){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const d=u[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(v0,"\\$&"),m+=40;else if(d.type===1){const{value:g,repeatable:v,optional:k,regexp:b}=d;s.push({name:g,repeatable:v,optional:k});const _=b||_l;if(_!==_l){m+=10;try{new RegExp(`(${_})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+P.message)}}let R=v?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(R=k&&u.length<2?`(?:/${R})`:"/"+R),k&&(R+="?"),i+=R,m+=20,k&&(m+=-8),v&&(m+=-20),_===".*"&&(m+=-50)}l.push(m)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),f={};if(!l)return null;for(let d=1;d<l.length;d++){const m=l[d]||"",g=s[d-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function c(u){let l="",f=!1;for(const d of e){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const m of d)if(m.type===0)l+=m.value;else if(m.type===1){const{value:g,repeatable:v,optional:k}=m,b=g in u?u[g]:"";if(dt(b)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=dt(b)?b.join("/"):b;if(!_)if(k)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);l+=_}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function b0(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function _0(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=b0(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(wl(r))return 1;if(wl(i))return-1}return i.length-r.length}function wl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const w0={type:0,value:""},E0=/[a-zA-Z0-9_]/;function C0(e){if(!e)return[[]];if(e==="/")return[[w0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function f(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:E0.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function S0(e,t,n){const r=y0(C0(e.path),n),i=fe(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function I0(e,t){const n=[],r=new Map;t=Sl({strict:!1,end:!0,sensitive:!1},t);function i(l){return r.get(l)}function s(l,f,d){const m=!d,g=k0(l);g.aliasOf=d&&d.record;const v=Sl(t,l),k=[g];if("alias"in l){const R=typeof l.alias=="string"?[l.alias]:l.alias;for(const P of R)k.push(fe({},g,{components:d?d.record.components:g.components,path:P,aliasOf:d?d.record:g}))}let b,_;for(const R of k){const{path:P}=R;if(f&&P[0]!=="/"){const j=f.record.path,ne=j[j.length-1]==="/"?"":"/";R.path=f.record.path+(P&&ne+P)}if(b=S0(R,f,v),d?d.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),m&&l.name&&!Cl(b)&&o(l.name)),g.children){const j=g.children;for(let ne=0;ne<j.length;ne++)s(j[ne],b,d&&d.children[ne])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return _?()=>{o(_)}:Hr}function o(l){if(fd(l)){const f=r.get(l);f&&(r.delete(l),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(l);f>-1&&(n.splice(f,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let f=0;for(;f<n.length&&_0(l,n[f])>=0&&(l.record.path!==n[f].record.path||!hd(l,n[f]));)f++;n.splice(f,0,l),l.record.name&&!Cl(l)&&r.set(l.record.name,l)}function u(l,f){let d,m={},g,v;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw mr(1,{location:l});v=d.record.name,m=fe(El(f.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),l.params&&El(l.params,d.keys.map(_=>_.name))),g=d.stringify(m)}else if("path"in l)g=l.path,d=n.find(_=>_.re.test(g)),d&&(m=d.parse(g),v=d.record.name);else{if(d=f.name?r.get(f.name):n.find(_=>_.re.test(f.path)),!d)throw mr(1,{location:l,currentLocation:f});v=d.record.name,m=fe({},f.params,l.params),g=d.stringify(m)}const k=[];let b=d;for(;b;)k.unshift(b.record),b=b.parent;return{name:v,path:g,params:m,matched:k,meta:A0(k)}}return e.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function El(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function k0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:T0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function T0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Cl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function A0(e){return e.reduce((t,n)=>fe(t,n.meta),{})}function Sl(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function hd(e,t){return t.children.some(n=>n===e||hd(e,n))}const pd=/#/g,x0=/&/g,P0=/\//g,O0=/=/g,R0=/\?/g,md=/\+/g,L0=/%5B/g,N0=/%5D/g,gd=/%5E/g,M0=/%60/g,vd=/%7B/g,D0=/%7C/g,yd=/%7D/g,F0=/%20/g;function Wa(e){return encodeURI(""+e).replace(D0,"|").replace(L0,"[").replace(N0,"]")}function $0(e){return Wa(e).replace(vd,"{").replace(yd,"}").replace(gd,"^")}function Yo(e){return Wa(e).replace(md,"%2B").replace(F0,"+").replace(pd,"%23").replace(x0,"%26").replace(M0,"`").replace(vd,"{").replace(yd,"}").replace(gd,"^")}function U0(e){return Yo(e).replace(O0,"%3D")}function B0(e){return Wa(e).replace(pd,"%23").replace(R0,"%3F")}function H0(e){return e==null?"":B0(e).replace(P0,"%2F")}function ds(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function j0(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(md," "),o=s.indexOf("="),a=ds(o<0?s:s.slice(0,o)),c=o<0?null:ds(s.slice(o+1));if(a in t){let u=t[a];dt(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function Il(e){let t="";for(let n in e){const r=e[n];if(n=U0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(dt(r)?r.map(s=>s&&Yo(s)):[r&&Yo(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function z0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=dt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const V0=Symbol(""),kl=Symbol(""),qa=Symbol(""),Ka=Symbol(""),Jo=Symbol("");function Ar(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function on(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(mr(4,{from:n,to:t})):f instanceof Error?a(f):m0(f)?a(mr(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(f=>a(f))})}function yo(e,t,n,r){const i=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(W0(a)){const u=(a.__vccOpts||a)[t];u&&i.push(on(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=X1(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[t];return d&&on(d,n,r,s,o)()}))}}return i}function W0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Tl(e){const t=tt(qa),n=tt(Ka),r=Ee(()=>t.resolve(ee(e.to))),i=Ee(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const d=f.findIndex(pr.bind(null,l));if(d>-1)return d;const m=Al(c[u-2]);return u>1&&Al(l)===m&&f[f.length-1].path!==m?f.findIndex(pr.bind(null,c[u-2])):d}),s=Ee(()=>i.value>-1&&Y0(n.params,r.value.params)),o=Ee(()=>i.value>-1&&i.value===n.matched.length-1&&ld(n.params,r.value.params));function a(c={}){return G0(c)?t[ee(e.replace)?"replace":"push"](ee(e.to)).catch(Hr):Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const q0=Ua({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tl,setup(e,{slots:t}){const n=fi(Tl(e)),{options:r}=tt(qa),i=Ee(()=>({[xl(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xl(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Us("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),K0=q0;function G0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Y0(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!dt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Al(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xl=(e,t,n)=>e??t??n,J0=Ua({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=tt(Jo),i=Ee(()=>e.route||r.value),s=tt(kl,0),o=Ee(()=>{let u=ee(s);const{matched:l}=i.value;let f;for(;(f=l[u])&&!f.components;)u++;return u}),a=Ee(()=>i.value.matched[o.value]);Fr(kl,Ee(()=>o.value+1)),Fr(V0,a),Fr(Jo,i);const c=ge();return Dn(()=>[c.value,a.value,e.name],([u,l,f],[d,m,g])=>{l&&(l.instances[f]=u,m&&m!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=m.leaveGuards),l.updateGuards.size||(l.updateGuards=m.updateGuards))),u&&l&&(!m||!pr(l,m)||!d)&&(l.enterCallbacks[f]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=i.value,l=e.name,f=a.value,d=f&&f.components[l];if(!d)return Pl(n.default,{Component:d,route:u});const m=f.props[l],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,k=Us(d,fe({},g,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[l]=null)},ref:c}));return Pl(n.default,{Component:k,route:u})||k}}});function Pl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const X0=J0;function Q0(e){const t=I0(e.routes,e),n=e.parseQuery||j0,r=e.stringifyQuery||Il,i=e.history,s=Ar(),o=Ar(),a=Ar(),c=Xp(Jt);let u=Jt;Qn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=go.bind(null,C=>""+C),f=go.bind(null,H0),d=go.bind(null,ds);function m(C,B){let N,W;return fd(C)?(N=t.getRecordMatcher(C),W=B):W=C,t.addRoute(W,N)}function g(C){const B=t.getRecordMatcher(C);B&&t.removeRoute(B)}function v(){return t.getRoutes().map(C=>C.record)}function k(C){return!!t.getRecordMatcher(C)}function b(C,B){if(B=fe({},B||c.value),typeof C=="string"){const y=vo(n,C,B.path),w=t.resolve({path:y.path},B),S=i.createHref(y.fullPath);return fe(y,w,{params:d(w.params),hash:ds(y.hash),redirectedFrom:void 0,href:S})}let N;if("path"in C)N=fe({},C,{path:vo(n,C.path,B.path).path});else{const y=fe({},C.params);for(const w in y)y[w]==null&&delete y[w];N=fe({},C,{params:f(y)}),B.params=f(B.params)}const W=t.resolve(N,B),ue=C.hash||"";W.params=l(d(W.params));const h=e0(r,fe({},C,{hash:$0(ue),path:W.path})),p=i.createHref(h);return fe({fullPath:h,hash:ue,query:r===Il?z0(C.query):C.query||{}},W,{redirectedFrom:void 0,href:p})}function _(C){return typeof C=="string"?vo(n,C,c.value.path):fe({},C)}function R(C,B){if(u!==C)return mr(8,{from:B,to:C})}function P(C){return te(C)}function j(C){return P(fe(_(C),{replace:!0}))}function ne(C){const B=C.matched[C.matched.length-1];if(B&&B.redirect){const{redirect:N}=B;let W=typeof N=="function"?N(C):N;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=_(W):{path:W},W.params={}),fe({query:C.query,hash:C.hash,params:"path"in W?{}:C.params},W)}}function te(C,B){const N=u=b(C),W=c.value,ue=C.state,h=C.force,p=C.replace===!0,y=ne(N);if(y)return te(fe(_(y),{state:typeof y=="object"?fe({},ue,y.state):ue,force:h,replace:p}),B||N);const w=N;w.redirectedFrom=B;let S;return!h&&t0(r,W,N)&&(S=mr(16,{to:w,from:W}),gt(W,W,!0,!1)),(S?Promise.resolve(S):X(w,W)).catch(I=>Ot(I)?Ot(I,2)?I:Kt(I):le(I,w,W)).then(I=>{if(I){if(Ot(I,2))return te(fe({replace:p},_(I.to),{state:typeof I.to=="object"?fe({},ue,I.to.state):ue,force:h}),B||w)}else I=H(w,W,!0,p,ue);return he(w,W,I),I})}function M(C,B){const N=R(C,B);return N?Promise.reject(N):Promise.resolve()}function U(C){const B=Gn.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(C):C()}function X(C,B){let N;const[W,ue,h]=Z0(C,B);N=yo(W.reverse(),"beforeRouteLeave",C,B);for(const y of W)y.leaveGuards.forEach(w=>{N.push(on(w,C,B))});const p=M.bind(null,C,B);return N.push(p),Be(N).then(()=>{N=[];for(const y of s.list())N.push(on(y,C,B));return N.push(p),Be(N)}).then(()=>{N=yo(ue,"beforeRouteUpdate",C,B);for(const y of ue)y.updateGuards.forEach(w=>{N.push(on(w,C,B))});return N.push(p),Be(N)}).then(()=>{N=[];for(const y of h)if(y.beforeEnter)if(dt(y.beforeEnter))for(const w of y.beforeEnter)N.push(on(w,C,B));else N.push(on(y.beforeEnter,C,B));return N.push(p),Be(N)}).then(()=>(C.matched.forEach(y=>y.enterCallbacks={}),N=yo(h,"beforeRouteEnter",C,B),N.push(p),Be(N))).then(()=>{N=[];for(const y of o.list())N.push(on(y,C,B));return N.push(p),Be(N)}).catch(y=>Ot(y,8)?y:Promise.reject(y))}function he(C,B,N){a.list().forEach(W=>U(()=>W(C,B,N)))}function H(C,B,N,W,ue){const h=R(C,B);if(h)return h;const p=B===Jt,y=Qn?history.state:{};N&&(W||p?i.replace(C.fullPath,fe({scroll:p&&y&&y.scroll},ue)):i.push(C.fullPath,ue)),c.value=C,gt(C,B,N,p),Kt()}let ce;function $e(){ce||(ce=i.listen((C,B,N)=>{if(!Ii.listening)return;const W=b(C),ue=ne(W);if(ue){te(fe(ue,{replace:!0}),W).catch(Hr);return}u=W;const h=c.value;Qn&&l0(vl(h.fullPath,N.delta),zs()),X(W,h).catch(p=>Ot(p,12)?p:Ot(p,2)?(te(p.to,W).then(y=>{Ot(y,20)&&!N.delta&&N.type===ei.pop&&i.go(-1,!1)}).catch(Hr),Promise.reject()):(N.delta&&i.go(-N.delta,!1),le(p,W,h))).then(p=>{p=p||H(W,h,!1),p&&(N.delta&&!Ot(p,8)?i.go(-N.delta,!1):N.type===ei.pop&&Ot(p,20)&&i.go(-1,!1)),he(W,h,p)}).catch(Hr)}))}let ze=Ar(),se=Ar(),pe;function le(C,B,N){Kt(C);const W=se.list();return W.length?W.forEach(ue=>ue(C,B,N)):console.error(C),Promise.reject(C)}function Pt(){return pe&&c.value!==Jt?Promise.resolve():new Promise((C,B)=>{ze.add([C,B])})}function Kt(C){return pe||(pe=!C,$e(),ze.list().forEach(([B,N])=>C?N(C):B()),ze.reset()),C}function gt(C,B,N,W){const{scrollBehavior:ue}=e;if(!Qn||!ue)return Promise.resolve();const h=!N&&u0(vl(C.fullPath,0))||(W||!N)&&history.state&&history.state.scroll||null;return Na().then(()=>ue(C,B,h)).then(p=>p&&c0(p)).catch(p=>le(p,C,B))}const We=C=>i.go(C);let Kn;const Gn=new Set,Ii={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:k,getRoutes:v,resolve:b,options:e,push:P,replace:j,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Pt,install(C){const B=this;C.component("RouterLink",K0),C.component("RouterView",X0),C.config.globalProperties.$router=B,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>ee(c)}),Qn&&!Kn&&c.value===Jt&&(Kn=!0,P(i.location).catch(ue=>{}));const N={};for(const ue in Jt)Object.defineProperty(N,ue,{get:()=>c.value[ue],enumerable:!0});C.provide(qa,B),C.provide(Ka,df(N)),C.provide(Jo,c);const W=C.unmount;Gn.add(C),C.unmount=function(){Gn.delete(C),Gn.size<1&&(u=Jt,ce&&ce(),ce=null,c.value=Jt,Kn=!1,pe=!1),W()}}};function Be(C){return C.reduce((B,N)=>B.then(()=>U(N)),Promise.resolve())}return Ii}function Z0(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(u=>pr(u,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(u=>pr(u,c))||i.push(c))}return[n,r,i]}function eg(){return tt(Ka)}function bd(e,t){return function(){return e.apply(t,arguments)}}const{toString:tg}=Object.prototype,{getPrototypeOf:Ga}=Object,Vs=(e=>t=>{const n=tg.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),xt=e=>(e=e.toLowerCase(),t=>Vs(t)===e),Ws=e=>t=>typeof t===e,{isArray:Er}=Array,ti=Ws("undefined");function ng(e){return e!==null&&!ti(e)&&e.constructor!==null&&!ti(e.constructor)&&rt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _d=xt("ArrayBuffer");function rg(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_d(e.buffer),t}const ig=Ws("string"),rt=Ws("function"),wd=Ws("number"),qs=e=>e!==null&&typeof e=="object",sg=e=>e===!0||e===!1,Ki=e=>{if(Vs(e)!=="object")return!1;const t=Ga(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},og=xt("Date"),ag=xt("File"),cg=xt("Blob"),lg=xt("FileList"),ug=e=>qs(e)&&rt(e.pipe),fg=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||rt(e.append)&&((t=Vs(e))==="formdata"||t==="object"&&rt(e.toString)&&e.toString()==="[object FormData]"))},dg=xt("URLSearchParams"),hg=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function di(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Er(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let a;for(r=0;r<o;r++)a=s[r],t.call(null,e[a],a,e)}}function Ed(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Cd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Sd=e=>!ti(e)&&e!==Cd;function Xo(){const{caseless:e}=Sd(this)&&this||{},t={},n=(r,i)=>{const s=e&&Ed(t,i)||i;Ki(t[s])&&Ki(r)?t[s]=Xo(t[s],r):Ki(r)?t[s]=Xo({},r):Er(r)?t[s]=r.slice():t[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&di(arguments[r],n);return t}const pg=(e,t,n,{allOwnKeys:r}={})=>(di(t,(i,s)=>{n&&rt(i)?e[s]=bd(i,n):e[s]=i},{allOwnKeys:r}),e),mg=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),gg=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},vg=(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&Ga(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},yg=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},bg=e=>{if(!e)return null;if(Er(e))return e;let t=e.length;if(!wd(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},_g=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ga(Uint8Array)),wg=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},Eg=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Cg=xt("HTMLFormElement"),Sg=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Ol=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ig=xt("RegExp"),Id=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};di(n,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(r[s]=o||i)}),Object.defineProperties(e,r)},kg=e=>{Id(e,(t,n)=>{if(rt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(rt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Tg=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Er(e)?r(e):r(String(e).split(t)),n},Ag=()=>{},xg=(e,t)=>(e=+e,Number.isFinite(e)?e:t),bo="abcdefghijklmnopqrstuvwxyz",Rl="0123456789",kd={DIGIT:Rl,ALPHA:bo,ALPHA_DIGIT:bo+bo.toUpperCase()+Rl},Pg=(e=16,t=kd.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Og(e){return!!(e&&rt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Rg=e=>{const t=new Array(10),n=(r,i)=>{if(qs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const s=Er(r)?[]:{};return di(r,(o,a)=>{const c=n(o,i+1);!ti(c)&&(s[a]=c)}),t[i]=void 0,s}}return r};return n(e,0)},Lg=xt("AsyncFunction"),Ng=e=>e&&(qs(e)||rt(e))&&rt(e.then)&&rt(e.catch),E={isArray:Er,isArrayBuffer:_d,isBuffer:ng,isFormData:fg,isArrayBufferView:rg,isString:ig,isNumber:wd,isBoolean:sg,isObject:qs,isPlainObject:Ki,isUndefined:ti,isDate:og,isFile:ag,isBlob:cg,isRegExp:Ig,isFunction:rt,isStream:ug,isURLSearchParams:dg,isTypedArray:_g,isFileList:lg,forEach:di,merge:Xo,extend:pg,trim:hg,stripBOM:mg,inherits:gg,toFlatObject:vg,kindOf:Vs,kindOfTest:xt,endsWith:yg,toArray:bg,forEachEntry:wg,matchAll:Eg,isHTMLForm:Cg,hasOwnProperty:Ol,hasOwnProp:Ol,reduceDescriptors:Id,freezeMethods:kg,toObjectSet:Tg,toCamelCase:Sg,noop:Ag,toFiniteNumber:xg,findKey:Ed,global:Cd,isContextDefined:Sd,ALPHABET:kd,generateString:Pg,isSpecCompliantForm:Og,toJSONObject:Rg,isAsyncFn:Lg,isThenable:Ng};function oe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}E.inherits(oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Td=oe.prototype,Ad={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ad[e]={value:e}});Object.defineProperties(oe,Ad);Object.defineProperty(Td,"isAxiosError",{value:!0});oe.from=(e,t,n,r,i,s)=>{const o=Object.create(Td);return E.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),oe.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const Mg=null;function Qo(e){return E.isPlainObject(e)||E.isArray(e)}function xd(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function Ll(e,t,n){return e?e.concat(t).map(function(i,s){return i=xd(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function Dg(e){return E.isArray(e)&&!e.some(Qo)}const Fg=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function Ks(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,k){return!E.isUndefined(k[v])});const r=n.metaTokens,i=n.visitor||l,s=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(E.isDate(g))return g.toISOString();if(!c&&E.isBlob(g))throw new oe("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(g)||E.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function l(g,v,k){let b=g;if(g&&!k&&typeof g=="object"){if(E.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(E.isArray(g)&&Dg(g)||(E.isFileList(g)||E.endsWith(v,"[]"))&&(b=E.toArray(g)))return v=xd(v),b.forEach(function(R,P){!(E.isUndefined(R)||R===null)&&t.append(o===!0?Ll([v],P,s):o===null?v:v+"[]",u(R))}),!1}return Qo(g)?!0:(t.append(Ll(k,v,s),u(g)),!1)}const f=[],d=Object.assign(Fg,{defaultVisitor:l,convertValue:u,isVisitable:Qo});function m(g,v){if(!E.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),E.forEach(g,function(b,_){(!(E.isUndefined(b)||b===null)&&i.call(t,b,E.isString(_)?_.trim():_,v,d))===!0&&m(b,v?v.concat(_):[_])}),f.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Nl(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ya(e,t){this._pairs=[],e&&Ks(e,this,t)}const Pd=Ya.prototype;Pd.append=function(t,n){this._pairs.push([t,n])};Pd.toString=function(t){const n=t?function(r){return t.call(this,r,Nl)}:Nl;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function $g(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Od(e,t,n){if(!t)return e;const r=n&&n.encode||$g,i=n&&n.serialize;let s;if(i?s=i(t,n):s=E.isURLSearchParams(t)?t.toString():new Ya(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Ug{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ml=Ug,Rd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Bg=typeof URLSearchParams<"u"?URLSearchParams:Ya,Hg=typeof FormData<"u"?FormData:null,jg=typeof Blob<"u"?Blob:null,zg={isBrowser:!0,classes:{URLSearchParams:Bg,FormData:Hg,Blob:jg},protocols:["http","https","file","blob","url","data"]},Ld=typeof window<"u"&&typeof document<"u",Vg=(e=>Ld&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Wg=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",qg=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ld,hasStandardBrowserEnv:Vg,hasStandardBrowserWebWorkerEnv:Wg},Symbol.toStringTag,{value:"Module"})),Et={...qg,...zg};function Kg(e,t){return Ks(e,new Et.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Et.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Gg(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Yg(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function Nd(e){function t(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=s>=n.length;return o=!o&&E.isArray(i)?i.length:o,c?(E.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!E.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&E.isArray(i[o])&&(i[o]=Yg(i[o])),!a)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,i)=>{t(Gg(r),i,n,0)}),n}return null}function Jg(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ja={transitional:Rd,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=E.isObject(t);if(s&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return i?JSON.stringify(Nd(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Kg(t,this.formSerializer).toString();if((a=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ks(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Jg(t)):t}],transformResponse:[function(t){const n=this.transitional||Ja.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&E.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?oe.from(a,oe.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Et.classes.FormData,Blob:Et.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{Ja.headers[e]={}});const Xa=Ja,Xg=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qg=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&Xg[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Dl=Symbol("internals");function xr(e){return e&&String(e).trim().toLowerCase()}function Gi(e){return e===!1||e==null?e:E.isArray(e)?e.map(Gi):String(e)}function Zg(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const ev=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function _o(e,t,n,r,i){if(E.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function tv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function nv(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}class Gs{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function s(a,c,u){const l=xr(c);if(!l)throw new Error("header name must be a non-empty string");const f=E.findKey(i,l);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||c]=Gi(a))}const o=(a,c)=>E.forEach(a,(u,l)=>s(u,l,c));return E.isPlainObject(t)||t instanceof this.constructor?o(t,n):E.isString(t)&&(t=t.trim())&&!ev(t)?o(Qg(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=xr(t),t){const r=E.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Zg(i);if(E.isFunction(n))return n.call(this,i,r);if(E.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=xr(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||_o(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function s(o){if(o=xr(o),o){const a=E.findKey(r,o);a&&(!n||_o(r,r[a],a,n))&&(delete r[a],i=!0)}}return E.isArray(t)?t.forEach(s):s(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!t||_o(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const n=this,r={};return E.forEach(this,(i,s)=>{const o=E.findKey(r,s);if(o){n[o]=Gi(i),delete n[s];return}const a=t?tv(s):String(s).trim();a!==s&&delete n[s],n[a]=Gi(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Dl]=this[Dl]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=xr(o);r[a]||(nv(i,o),r[a]=!0)}return E.isArray(t)?t.forEach(s):s(t),this}}Gs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(Gs.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});E.freezeMethods(Gs);const Ut=Gs;function wo(e,t){const n=this||Xa,r=t||n,i=Ut.from(r.headers);let s=r.data;return E.forEach(e,function(a){s=a.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function Md(e){return!!(e&&e.__CANCEL__)}function hi(e,t,n){oe.call(this,e??"canceled",oe.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(hi,oe,{__CANCEL__:!0});function rv(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new oe("Request failed with status code "+n.status,[oe.ERR_BAD_REQUEST,oe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const iv=Et.hasStandardBrowserEnv?{write(e,t,n,r,i,s){const o=[e+"="+encodeURIComponent(t)];E.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),E.isString(r)&&o.push("path="+r),E.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function sv(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ov(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Dd(e,t){return e&&!sv(t)?ov(e,t):t}const av=Et.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=E.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function cv(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function lv(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),l=r[s];o||(o=u),n[i]=c,r[i]=u;let f=s,d=0;for(;f!==i;)d+=n[f++],f=f%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),u-o<t)return;const m=l&&u-l;return m?Math.round(d*1e3/m):void 0}}function Fl(e,t){let n=0;const r=lv(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a),u=s<=o;n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-s)/c:void 0,event:i};l[t?"download":"upload"]=!0,e(l)}}const uv=typeof XMLHttpRequest<"u",fv=uv&&function(e){return new Promise(function(n,r){let i=e.data;const s=Ut.from(e.headers).normalize();let{responseType:o,withXSRFToken:a}=e,c;function u(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}let l;if(E.isFormData(i)){if(Et.hasStandardBrowserEnv||Et.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((l=s.getContentType())!==!1){const[v,...k]=l?l.split(";").map(b=>b.trim()).filter(Boolean):[];s.setContentType([v||"multipart/form-data",...k].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",k=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(v+":"+k))}const d=Dd(e.baseURL,e.url);f.open(e.method.toUpperCase(),Od(d,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function m(){if(!f)return;const v=Ut.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:e,request:f};rv(function(R){n(R),u()},function(R){r(R),u()},b),f=null}if("onloadend"in f?f.onloadend=m:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(m)},f.onabort=function(){f&&(r(new oe("Request aborted",oe.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new oe("Network Error",oe.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let k=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||Rd;e.timeoutErrorMessage&&(k=e.timeoutErrorMessage),r(new oe(k,b.clarifyTimeoutError?oe.ETIMEDOUT:oe.ECONNABORTED,e,f)),f=null},Et.hasStandardBrowserEnv&&(a&&E.isFunction(a)&&(a=a(e)),a||a!==!1&&av(d))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&iv.read(e.xsrfCookieName);v&&s.set(e.xsrfHeaderName,v)}i===void 0&&s.setContentType(null),"setRequestHeader"in f&&E.forEach(s.toJSON(),function(k,b){f.setRequestHeader(b,k)}),E.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),o&&o!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",Fl(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Fl(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=v=>{f&&(r(!v||v.type?new hi(null,e,f):v),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const g=cv(d);if(g&&Et.protocols.indexOf(g)===-1){r(new oe("Unsupported protocol "+g+":",oe.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Zo={http:Mg,xhr:fv};E.forEach(Zo,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const $l=e=>`- ${e}`,dv=e=>E.isFunction(e)||e===null||e===!1,Fd={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let s=0;s<t;s++){n=e[s];let o;if(r=n,!dv(n)&&(r=Zo[(o=String(n)).toLowerCase()],r===void 0))throw new oe(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?s.length>1?`since :
`+s.map($l).join(`
`):" "+$l(s[0]):"as no adapter specified";throw new oe("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Zo};function Eo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new hi(null,e)}function Ul(e){return Eo(e),e.headers=Ut.from(e.headers),e.data=wo.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Fd.getAdapter(e.adapter||Xa.adapter)(e).then(function(r){return Eo(e),r.data=wo.call(e,e.transformResponse,r),r.headers=Ut.from(r.headers),r},function(r){return Md(r)||(Eo(e),r&&r.response&&(r.response.data=wo.call(e,e.transformResponse,r.response),r.response.headers=Ut.from(r.response.headers))),Promise.reject(r)})}const Bl=e=>e instanceof Ut?e.toJSON():e;function gr(e,t){t=t||{};const n={};function r(u,l,f){return E.isPlainObject(u)&&E.isPlainObject(l)?E.merge.call({caseless:f},u,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function i(u,l,f){if(E.isUndefined(l)){if(!E.isUndefined(u))return r(void 0,u,f)}else return r(u,l,f)}function s(u,l){if(!E.isUndefined(l))return r(void 0,l)}function o(u,l){if(E.isUndefined(l)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function a(u,l,f){if(f in t)return r(u,l);if(f in e)return r(void 0,u)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,l)=>i(Bl(u),Bl(l),!0)};return E.forEach(Object.keys(Object.assign({},e,t)),function(l){const f=c[l]||i,d=f(e[l],t[l],l);E.isUndefined(d)&&f!==a||(n[l]=d)}),n}const $d="1.6.7",Qa={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Qa[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Hl={};Qa.transitional=function(t,n,r){function i(s,o){return"[Axios v"+$d+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(t===!1)throw new oe(i(o," has been removed"+(n?" in "+n:"")),oe.ERR_DEPRECATED);return n&&!Hl[o]&&(Hl[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,a):!0}};function hv(e,t,n){if(typeof e!="object")throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const a=e[s],c=a===void 0||o(a,s,e);if(c!==!0)throw new oe("option "+s+" must be "+c,oe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new oe("Unknown option "+s,oe.ERR_BAD_OPTION)}}const ea={assertOptions:hv,validators:Qa},Xt=ea.validators;class hs{constructor(t){this.defaults=t,this.interceptors={request:new Ml,response:new Ml}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=gr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&ea.assertOptions(r,{silentJSONParsing:Xt.transitional(Xt.boolean),forcedJSONParsing:Xt.transitional(Xt.boolean),clarifyTimeoutError:Xt.transitional(Xt.boolean)},!1),i!=null&&(E.isFunction(i)?n.paramsSerializer={serialize:i}:ea.assertOptions(i,{encode:Xt.function,serialize:Xt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&E.merge(s.common,s[n.method]);s&&E.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=Ut.concat(o,s);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let l,f=0,d;if(!c){const g=[Ul.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),d=g.length,l=Promise.resolve(n);f<d;)l=l.then(g[f++],g[f++]);return l}d=a.length;let m=n;for(f=0;f<d;){const g=a[f++],v=a[f++];try{m=g(m)}catch(k){v.call(this,k);break}}try{l=Ul.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,d=u.length;f<d;)l=l.then(u[f++],u[f++]);return l}getUri(t){t=gr(this.defaults,t);const n=Dd(t.baseURL,t.url);return Od(n,t.params,t.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(t){hs.prototype[t]=function(n,r){return this.request(gr(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,a){return this.request(gr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}hs.prototype[t]=n(),hs.prototype[t+"Form"]=n(!0)});const Yi=hs;class Za{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,a){r.reason||(r.reason=new hi(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Za(function(i){t=i}),cancel:t}}}const pv=Za;function mv(e){return function(n){return e.apply(null,n)}}function gv(e){return E.isObject(e)&&e.isAxiosError===!0}const ta={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ta).forEach(([e,t])=>{ta[t]=e});const vv=ta;function Ud(e){const t=new Yi(e),n=bd(Yi.prototype.request,t);return E.extend(n,Yi.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Ud(gr(e,i))},n}const Oe=Ud(Xa);Oe.Axios=Yi;Oe.CanceledError=hi;Oe.CancelToken=pv;Oe.isCancel=Md;Oe.VERSION=$d;Oe.toFormData=Ks;Oe.AxiosError=oe;Oe.Cancel=Oe.CanceledError;Oe.all=function(t){return Promise.all(t)};Oe.spread=mv;Oe.isAxiosError=gv;Oe.mergeConfig=gr;Oe.AxiosHeaders=Ut;Oe.formToJSON=e=>Nd(E.isHTMLForm(e)?new FormData(e):e);Oe.getAdapter=Fd.getAdapter;Oe.HttpStatusCode=vv;Oe.default=Oe;const yv=Oe,ec=js("productList",()=>{const e=ge([]),t=ge([]),n=ge(4),r=ge(!0),i="https://shoes-shop-40b9a-default-rtdb.firebaseio.com/products.json",s=async()=>{try{const l=await yv.get(i);e.value=l.data}catch(l){console.error("Error fetching users:",l)}},o=l=>e.value.find(f=>f.product_id==l),a=()=>{n.value+=4},c=Ee(()=>{const l=[];return e.value.forEach(f=>{f.category_for&&!l.some(d=>d.name===f.category_for)&&l.push({name:f.category_for,id:f.category_id})}),l}),u=Ee(()=>t.value?e.value.filter(f=>f.product_name.includes(t.value)):e.value);return{productList:e,getProductList:s,getProductInfo:o,categoryList:c,searchList:u,searchValue:t,updateLimitToShow:a,limitToShow:n,statusShowMoreBtn:r}}),bv={__name:"App",setup(e){const t=eg(),n=Ee(()=>(t.meta.layout||"empty")+"-layout"),r=ec();return Of(()=>{r.getProductList()}),(i,s)=>{const o=ft("router-view");return A(),Re(mm(n.value),null,{default:Xe(()=>[J(o)]),_:1})}}},_v=["type"],wv=["innerHTML"],Ev={key:2},Cv={__name:"ButtonItem",props:{label:{type:String,required:!1},icon:{type:String,required:!1},iconSvg:{type:String,required:!1},btnStyle:{type:String,required:!1},type:{type:String,required:!1,default:"button"}},setup(e){return(t,n)=>{const r=ft("font-awesome-icon");return A(),$("button",{class:ke(e.btnStyle||"border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition"),type:e.type},[e.icon?(A(),Re(r,{key:0,icon:e.icon,style:{width:"50px",height:"40px"}},null,8,["icon"])):Ie("",!0),e.iconSvg?(A(),$("svg",{key:1,class:ke(t.$attrs.class||"w-6 h-6"),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",innerHTML:e.iconSvg},null,10,wv)):Ie("",!0),e.label?(A(),$("span",Ev,Se(e.label),1)):Ie("",!0)],10,_v)}}},Fe=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Sv=["for"],Iv=["name","placeholder","type","value"],kv={__name:"InputGroup",props:{error:{type:Array,requered:!1},value:{type:String,default:""},type:{type:String,default:"text"},label:{type:String,default:!1},name:{type:String,default:"text"},placeholder:{type:String,default:"text"},boxClass:{type:[String,Boolean],default:!1}},emits:["update:value"],setup(e,{emit:t}){const n=t,r=i=>{n("update:value",i.target.value)};return(i,s)=>(A(),$("div",{class:ke(["form-group",e.boxClass])},[e.label?(A(),$("label",{key:0,class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white relative",for:e.name},Se(e.label),9,Sv)):Ie("",!0),x("input",{name:e.name,placeholder:e.placeholder,type:e.type,onInput:r,value:e.value,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,40,Iv),J(R1,null,{default:Xe(()=>[(A(!0),$(we,null,yn(e.error,o=>(A(),$("div",{key:o.$uid,class:"text-red-700 text-xs absolute"},Se(o.$message),1))),128))]),_:1})],2))}},Tv=Fe(kv,[["__scopeId","data-v-3a2ba502"]]),Av={class:"form-group form-group--checkbox flex items-center relative"},xv=["id","name","placeholder","value"],Pv=["for"],Ov={__name:"RadioGroup",props:{value:{type:String,default:""},label:{type:String,default:!1},name:{type:String,default:"text"},placeholder:{type:String,default:"text"}},emits:["update:checkedValue"],setup(e,{emit:t}){const n=t,r=i=>{console.log(i.target.value),n("update:checkedValue",i.target.value)};return(i,s)=>(A(),$("div",Av,[x("input",{id:e.value,name:e.name,placeholder:e.placeholder,type:"radio",value:e.value,onInput:s[0]||(s[0]=o=>r(o)),class:"form-group__checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-none outline-none"},null,40,xv),e.label?(A(),$("label",{key:0,for:e.value,class:"form-group__checkbox-label ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2.5 relative"},Se(e.label),9,Pv)):Ie("",!0)]))}},Rv=Fe(Ov,[["__scopeId","data-v-6057905a"]]),Lv={class:"form-group"},Nv=["for"],Mv=["name","placeholder","type"],Dv={__name:"TextAreaGroup",props:{type:{type:String,default:"text"},label:{type:String,default:!1},name:{type:String,default:"text"},placeholder:{type:String,default:"text"}},emits:"update:value",setup(e,{emit:t}){const n=t,r=i=>{n("update:value",i.target.value)};return(i,s)=>(A(),$("div",Lv,[e.label?(A(),$("label",{key:0,for:e.name,class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},Se(e.label),9,Nv)):Ie("",!0),x("textarea",{name:e.name,placeholder:e.placeholder,type:e.type,onInput:r,class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}," ",40,Mv)]))}},Fv={},$v={class:"empty-layout h-svh flex bg-gray-500 justify-center"};function Uv(e,t){const n=ft("router-view");return A(),$("div",$v,[J(n)])}const Bv=Fe(Fv,[["render",Uv],["__scopeId","data-v-ac6be478"]]),Hv={class:"w-full md:flex hidden justify-center gap-10"},jv=["href"],zv=["src"],Vv={__name:"TheNav",props:{navLinks:{type:Array,required:!0}},setup(e){return(t,n)=>(A(),$("nav",null,[x("ul",Hv,[(A(!0),$(we,null,yn(e.navLinks,r=>(A(),$("li",{key:r.id},[x("a",{href:r.link,class:"flex items-center gap-5 transform motion-safe:hover:scale-110 transition xl:flex-row flex-col xl:gap-y-5 gap-y-0"},[x("img",{src:r.icon},null,8,zv),x("span",null,Se(r.name),1)],8,jv)]))),128))])]))}},Wv={href:"/",class:"header-logo flex gap-x-7 items-center"},qv=["src"],Kv={class:"header-logo__title font-bold"},Gv={class:"header-logo__subtitle"},Yv={__name:"HeaderBlockLogo",props:{title:{type:String,required:!1},image:{type:String,required:!1},subTitle:{type:String,required:!1}},setup(e){return(t,n)=>(A(),$("a",Wv,[x("img",{src:e.image,alt:""},null,8,qv),x("div",null,[x("h4",Kv,Se(e.title),1),x("span",Gv,Se(e.subTitle),1)])]))}},Bd=Fe(Yv,[["__scopeId","data-v-a343ccb5"]]),Ue={menu:'<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>',microphone:'<path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>',search:'<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" fill="#9B9B9B"></path>',category:'<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>',submenu:'<path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>',user:'<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" fill="#9B9B9B"></path>',play:'<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>',sun:'<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>',lung:'<path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clip-rule="evenodd"></path>',location:'<path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path>',setting:'<path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>',data:'<path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>',help:'<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>',feedback:'<path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>',keyboard:'<path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd"></path>',arrow:'<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>',clock:'<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>',menu2:'<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>',home:'<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>',trending:'<path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path>',subscriptions:'<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>',library:'<path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>',history:'<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>',cart:'<path xmlns="http://www.w3.org/2000/svg" d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path xmlns="http://www.w3.org/2000/svg" d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path xmlns="http://www.w3.org/2000/svg" d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',wish:'<path d="M12.9537 0C14.3511 0 15.5249 0.47123 16.4751 1.41369C17.4253 2.35615 17.9004 3.5065 17.9004 4.86475C17.9004 5.53002 17.7607 6.20221 17.4812 6.88134C17.2017 7.56047 16.8943 8.16336 16.5589 8.69003C16.2235 9.2167 15.6576 9.89582 14.8611 10.7274C14.0646 11.559 13.3939 12.2312 12.8489 12.744C12.3039 13.2568 11.4305 14.0399 10.2288 15.0932L8.92924 16.2574L7.62968 15.1348C6.45588 14.0537 5.58951 13.2568 5.03056 12.744C4.4716 12.2312 3.79388 11.559 2.99737 10.7274C2.20087 9.89582 1.63493 9.2167 1.29956 8.69003C0.96419 8.16336 0.663754 7.56047 0.398252 6.88134C0.132751 6.20221 0 5.53002 0 4.86475C0 3.5065 0.475108 2.35615 1.42532 1.41369C2.37554 0.47123 3.53536 0 4.90479 0C6.52575 0 7.86723 0.623686 8.92924 1.87106C9.99124 0.623686 11.3327 0 12.9537 0ZM9.01308 13.8043C10.3825 12.5846 11.3816 11.6768 12.0105 11.0808C12.6393 10.4849 13.331 9.77109 14.0856 8.93951C14.8401 8.10792 15.3642 7.38029 15.6576 6.7566C15.9511 6.13292 16.0978 5.5023 16.0978 4.86475C16.0978 3.97773 15.7973 3.24317 15.1965 2.66106C14.5956 2.07895 13.848 1.7879 12.9537 1.7879C12.2829 1.7879 11.6471 1.98194 11.0463 2.37001C10.4454 2.75808 10.0192 3.25703 9.76766 3.86686H8.09081C7.86723 3.25703 7.455 2.75808 6.85413 2.37001C6.25326 1.98194 5.60348 1.7879 4.90479 1.7879C4.01047 1.7879 3.26986 2.07895 2.68296 2.66106C2.09606 3.24317 1.80262 3.97773 1.80262 4.86475C1.80262 5.5023 1.94235 6.13292 2.22183 6.7566C2.5013 7.38029 3.02532 8.10792 3.79388 8.93951C4.56243 9.77109 5.26112 10.4849 5.88994 11.0808C6.51876 11.6768 7.50391 12.5846 8.84539 13.8043L8.92924 13.8874L9.01308 13.8043Z" fill="#9B9B9B"/>',wishActive:'<path d="M12.9537 0C14.3511 0 15.5249 0.47123 16.4751 1.41369C17.4253 2.35615 17.9004 3.5065 17.9004 4.86475C17.9004 5.53002 17.7607 6.20221 17.4812 6.88134C17.2017 7.56047 16.8943 8.16336 16.5589 8.69003C16.2235 9.2167 15.6576 9.89582 14.8611 10.7274C14.0646 11.559 13.3939 12.2312 12.8489 12.744C12.3039 13.2568 11.4305 14.0399 10.2288 15.0932L8.92924 16.2574L7.62968 15.1348C6.45588 14.0537 5.58951 13.2568 5.03056 12.744C4.4716 12.2312 3.79388 11.559 2.99737 10.7274C2.20087 9.89582 1.63493 9.2167 1.29956 8.69003C0.96419 8.16336 0.663754 7.56047 0.398252 6.88134C0.132751 6.20221 0 5.53002 0 4.86475C0 3.5065 0.475108 2.35615 1.42532 1.41369C2.37554 0.47123 3.53536 0 4.90479 0C6.52575 0 7.86723 0.623686 8.92924 1.87106C9.99124 0.623686 11.3327 0 12.9537 0ZM9.01308 13.8043C10.3825 12.5846 11.3816 11.6768 12.0105 11.0808C12.6393 10.4849 13.331 9.77109 14.0856 8.93951C14.8401 8.10792 15.3642 7.38029 15.6576 6.7566C15.9511 6.13292 16.0978 5.5023 16.0978 4.86475C16.0978 3.97773 15.7973 3.24317 15.1965 2.66106C14.5956 2.07895 13.848 1.7879 12.9537 1.7879C12.2829 1.7879 11.6471 1.98194 11.0463 2.37001C10.4454 2.75808 10.0192 3.25703 9.76766 3.86686H8.09081C7.86723 3.25703 7.455 2.75808 6.85413 2.37001C6.25326 1.98194 5.60348 1.7879 4.90479 1.7879C4.01047 1.7879 3.26986 2.07895 2.68296 2.66106C2.09606 3.24317 1.80262 3.97773 1.80262 4.86475C1.80262 5.5023 1.94235 6.13292 2.22183 6.7566C2.5013 7.38029 3.02532 8.10792 3.79388 8.93951C4.56243 9.77109 5.26112 10.4849 5.88994 11.0808C6.51876 11.6768 7.50391 12.5846 8.84539 13.8043L8.92924 13.8874L9.01308 13.8043Z" fill="green"/>',facebook:'<path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>',intagram:'<path xmlns="http://www.w3.org/2000/svg" d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>',youtube:'<path fill-rule="evenodd" clip-rule="evenodd" d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z" fill="#0F0F0F"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z" fill="#0F0F0F"/>',close:'<path d="M12 12L7 7M12 12L17 17M12 12L17 7M12 12L7 17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',closeCart:'<path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="#B5B5B5"/>',edit:'<path xmlns="http://www.w3.org/2000/svg" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path xmlns="http://www.w3.org/2000/svg" d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'},Hd=e=>(Wn("data-v-57ce70ce"),e=e(),qn(),e),Jv=["data-count"],Xv=["innerHTML"],Qv={key:1},Zv={key:2},ey=Hd(()=>x("span",null,"грн",-1)),ty=[ey],ny=["innerHTML"],ry={key:1},iy={key:2},sy={key:3},oy=Hd(()=>x("span",null,"грн",-1)),ay=[oy],cy={__name:"ButtonItemIcon",props:{label:{type:[Number,String],required:!1},icon:{type:String,required:!1},iconStyle:{type:String,required:!1},btnStyle:{type:String,required:!1},value:{type:String,required:!1},is_link:{type:String,required:!1},user_status:{type:[String,Object],required:!1},index_quantity:{type:[Number,String,Object],required:!1}},setup(e){return(t,n)=>{const r=ft("router-link");return e.is_link?(A(),Re(r,{key:1,to:e.is_link,class:ke(e.btnStyle||"border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition")},{default:Xe(()=>[e.icon?(A(),$("svg",{key:0,class:ke(t.$attrs.class||"w-6 h-6"),fill:"none",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",innerHTML:e.icon},null,10,ny)):Ie("",!0),e.label&&e.user_status?(A(),$("span",ry,"user")):Ie("",!0),e.label&&!e.user_status?(A(),$("span",iy,Se(e.label),1)):Ie("",!0),e.value==="cart"?(A(),$("span",sy,ay)):Ie("",!0)]),_:1},8,["to","class"])):(A(),$("button",{key:0,class:ke({"with-attr":e.index_quantity,[e.btnStyle||"border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition"]:!0}),"data-count":e.index_quantity},[e.icon?(A(),$("svg",{key:0,class:ke(t.$attrs.class||"w-6 h-6"),fill:"none",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",innerHTML:e.icon},null,10,Xv)):Ie("",!0),e.label?(A(),$("span",Qv,Se(e.label),1)):Ie("",!0),e.value==="cart"?(A(),$("span",Zv,ty)):Ie("",!0)],10,Jv))}}},wt=Fe(cy,[["__scopeId","data-v-57ce70ce"]]),pi=js("cartInfo",()=>{const e=ge(JSON.parse(localStorage.getItem("cartList"))||[]),t=ge(!1),n=ge(!1),r=l=>{e.value=e.value.filter(f=>f.cart_key!==l),localStorage.setItem("cartList",JSON.stringify(e.value))},i=(l,f,d)=>{if(console.log(d),f={...f,cart_key:""},f={...f,cart_option:""},f={...f,cart_key:""},d){const m=[...e.value].filter(v=>v.product_id===l);console.log(m);const g=m.some(v=>v.cart_option===d);if(u(t),g){const v=m.find(b=>b.cart_option===d),k=e.value.findIndex(b=>b.cart_key===v.cart_key);k!==-1&&(e.value[k].cart_quantity+=1)}else f.cart_option=d,f.cart_quantity=1,f.cart_key=parseInt(Math.floor(Math.random()*1e4)+1,10),e.value.push(f);localStorage.setItem("cartList",JSON.stringify(e.value))}else u(n)},s=l=>{console.log(l);const f=e.value.find(d=>d.cart_key===l);f.cart_quantity+=1,console.log(f),localStorage.setItem("cartList",JSON.stringify(e.value))},o=l=>{console.log(l);const f=e.value.find(d=>d.cart_key===l);f.cart_quantity>1?f.cart_quantity-=1:r(l),console.log(f),localStorage.setItem("cartList",JSON.stringify(e.value))},a=Ee(()=>e.value.reduce((f,d)=>f+parseFloat(d.product_price*d.cart_quantity),0)),c=Ee(()=>e.value.reduce((f,d)=>f+parseFloat(d.cart_quantity),0)),u=l=>{l.value=!0,console.log(l.value),setTimeout(()=>{l.value=!1,console.log(l.value)},2e3)};return{cartList:e,removeCartItem:r,updateQuantity:s,minusQuantity:o,getTotalValue:a,addProductToCart:i,getTotalQuantity:c,visiblePopUp:t,visibleError:n}});var jl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ly=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},zd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),r.push(n[l],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ly(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new uy;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const g=u<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class uy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fy=function(e){const t=jd(e);return zd.encodeByteArray(t,!0)},Vd=function(e){return fy(e).replace(/\./g,"")},Wd=function(e){try{return zd.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=()=>dy().__FIREBASE_DEFAULTS__,py=()=>{if(typeof process>"u"||typeof jl>"u")return;const e=jl.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},my=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Wd(e[1]);return t&&JSON.parse(t)},tc=()=>{try{return hy()||py()||my()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},gy=e=>{var t,n;return(n=(t=tc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},qd=()=>{var e;return(e=tc())===null||e===void 0?void 0:e.config},Kd=e=>{var t;return(t=tc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function by(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function _y(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wy(){const e=je();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ey(){try{return typeof indexedDB=="object"}catch{return!1}}function Cy(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="FirebaseError";class Cn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Sy,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Iy(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Cn(i,a,r)}}function Iy(e,t){return e.replace(ky,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ky=/\{\$([^}]+)}/g;function Ty(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ps(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(zl(s)&&zl(o)){if(!ps(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zl(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Rr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Lr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Ay(e,t){const n=new xy(e,t);return n.subscribe.bind(n)}class xy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Py(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Co),i.error===void 0&&(i.error=Co),i.complete===void 0&&(i.complete=Co);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Py(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Co(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e){return e&&e._delegate?e._delegate:e}class vr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new vy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ly(t))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=An){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=An){return this.instances.has(t)}getOptions(t=An){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ry(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=An){return this.component?this.component.multipleInstances?t:An:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ry(e){return e===An?void 0:e}function Ly(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Oy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(me||(me={}));const My={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Dy=me.INFO,Fy={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},$y=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Fy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gd{constructor(t){this.name=t,this._logLevel=Dy,this._logHandler=$y,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in me))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?My[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...t),this._logHandler(this,me.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...t),this._logHandler(this,me.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,me.INFO,...t),this._logHandler(this,me.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,me.WARN,...t),this._logHandler(this,me.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...t),this._logHandler(this,me.ERROR,...t)}}const Uy=(e,t)=>t.some(n=>e instanceof n);let Vl,Wl;function By(){return Vl||(Vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hy(){return Wl||(Wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yd=new WeakMap,na=new WeakMap,Jd=new WeakMap,So=new WeakMap,nc=new WeakMap;function jy(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(pn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Yd.set(n,e)}).catch(()=>{}),nc.set(t,e),t}function zy(e){if(na.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});na.set(e,t)}let ra={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return na.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Jd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Vy(e){ra=e(ra)}function Wy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Io(this),t,...n);return Jd.set(r,t.sort?t.sort():[t]),pn(r)}:Hy().includes(e)?function(...t){return e.apply(Io(this),t),pn(Yd.get(this))}:function(...t){return pn(e.apply(Io(this),t))}}function qy(e){return typeof e=="function"?Wy(e):(e instanceof IDBTransaction&&zy(e),Uy(e,By())?new Proxy(e,ra):e)}function pn(e){if(e instanceof IDBRequest)return jy(e);if(So.has(e))return So.get(e);const t=qy(e);return t!==e&&(So.set(e,t),nc.set(t,e)),t}const Io=e=>nc.get(e);function Ky(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=pn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pn(o.result),c.oldVersion,c.newVersion,pn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Gy=["get","getKey","getAll","getAllKeys","count"],Yy=["put","add","delete","clear"],ko=new Map;function ql(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ko.get(t))return ko.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Yy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gy.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return ko.set(t,s),s}Vy(e=>({...e,get:(t,n,r)=>ql(t,n)||e.get(t,n,r),has:(t,n)=>!!ql(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ia="@firebase/app",Kl="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Gd("@firebase/app"),Qy="@firebase/app-compat",Zy="@firebase/analytics-compat",e2="@firebase/analytics",t2="@firebase/app-check-compat",n2="@firebase/app-check",r2="@firebase/auth",i2="@firebase/auth-compat",s2="@firebase/database",o2="@firebase/database-compat",a2="@firebase/functions",c2="@firebase/functions-compat",l2="@firebase/installations",u2="@firebase/installations-compat",f2="@firebase/messaging",d2="@firebase/messaging-compat",h2="@firebase/performance",p2="@firebase/performance-compat",m2="@firebase/remote-config",g2="@firebase/remote-config-compat",v2="@firebase/storage",y2="@firebase/storage-compat",b2="@firebase/firestore",_2="@firebase/firestore-compat",w2="firebase",E2="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="[DEFAULT]",C2={[ia]:"fire-core",[Qy]:"fire-core-compat",[e2]:"fire-analytics",[Zy]:"fire-analytics-compat",[n2]:"fire-app-check",[t2]:"fire-app-check-compat",[r2]:"fire-auth",[i2]:"fire-auth-compat",[s2]:"fire-rtdb",[o2]:"fire-rtdb-compat",[a2]:"fire-fn",[c2]:"fire-fn-compat",[l2]:"fire-iid",[u2]:"fire-iid-compat",[f2]:"fire-fcm",[d2]:"fire-fcm-compat",[h2]:"fire-perf",[p2]:"fire-perf-compat",[m2]:"fire-rc",[g2]:"fire-rc-compat",[v2]:"fire-gcs",[y2]:"fire-gcs-compat",[b2]:"fire-fst",[_2]:"fire-fst-compat","fire-js":"fire-js",[w2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Map,S2=new Map,oa=new Map;function Gl(e,t){try{e.container.addComponent(t)}catch(n){Un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ni(e){const t=e.name;if(oa.has(t))return Un.debug(`There were multiple attempts to register component ${t}.`),!1;oa.set(t,e);for(const n of ms.values())Gl(n,e);for(const n of S2.values())Gl(n,e);return!0}function Xd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function lt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new mi("app","Firebase",I2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=E2;function Qd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:sa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=qd()),!n)throw mn.create("no-options");const s=ms.get(i);if(s){if(ps(n,s.options)&&ps(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new Ny(i);for(const c of oa.values())o.addComponent(c);const a=new k2(n,r,o);return ms.set(i,a),a}function T2(e=sa){const t=ms.get(e);if(!t&&e===sa&&qd())return Qd();if(!t)throw mn.create("no-app",{appName:e});return t}function or(e,t,n){var r;let i=(r=C2[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Un.warn(a.join(" "));return}ni(new vr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2="firebase-heartbeat-database",x2=1,ri="firebase-heartbeat-store";let To=null;function Zd(){return To||(To=Ky(A2,x2,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ri)}catch(n){console.warn(n)}}}}).catch(e=>{throw mn.create("idb-open",{originalErrorMessage:e.message})})),To}async function P2(e){try{const n=(await Zd()).transaction(ri),r=await n.objectStore(ri).get(eh(e));return await n.done,r}catch(t){if(t instanceof Cn)Un.warn(t.message);else{const n=mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Un.warn(n.message)}}}async function Yl(e,t){try{const r=(await Zd()).transaction(ri,"readwrite");await r.objectStore(ri).put(t,eh(e)),await r.done}catch(n){if(n instanceof Cn)Un.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function eh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=1024,R2=30*24*60*60*1e3;class L2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new M2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jl();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=R2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jl(),{heartbeatsToSend:r,unsentEntries:i}=N2(this._heartbeatsCache.heartbeats),s=Vd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Jl(){return new Date().toISOString().substring(0,10)}function N2(e,t=O2){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xl(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xl(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class M2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ey()?Cy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await P2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Xl(e){return Vd(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(e){ni(new vr("platform-logger",t=>new Jy(t),"PRIVATE")),ni(new vr("heartbeat",t=>new L2(t),"PRIVATE")),or(ia,Kl,e),or(ia,Kl,"esm2017"),or("fire-js","")}D2("");var F2="firebase",$2="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(F2,$2,"app");function rc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function th(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const U2=th,nh=new mi("auth","Firebase",th());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Gd("@firebase/auth");function B2(e,...t){gs.logLevel<=me.WARN&&gs.warn(`Auth (${vi}): ${e}`,...t)}function Ji(e,...t){gs.logLevel<=me.ERROR&&gs.error(`Auth (${vi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e,...t){throw ic(e,...t)}function It(e,...t){return ic(e,...t)}function rh(e,t,n){const r=Object.assign(Object.assign({},U2()),{[t]:n});return new mi("auth","Firebase",r).create(t,{appName:e.name})}function kt(e){return rh(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ic(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return nh.create(e,...t)}function G(e,t,...n){if(!e)throw ic(t,...n)}function Mt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ji(t),new Error(t)}function Bt(e,t){e||Mt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function H2(){return Ql()==="http:"||Ql()==="https:"}function Ql(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H2()||by()||"connection"in navigator)?navigator.onLine:!0}function z2(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Bt(n>t,"Short delay should be less than long delay!"),this.isMobile=yy()||_y()}get(){return j2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(e,t){Bt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=new yi(3e4,6e4);function Wt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function pt(e,t,n,r,i={}){return sh(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=gi(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),ih.fetch()(oh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function sh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},V2),t);try{const i=new K2(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Li(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Li(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Li(e,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rh(e,l,u);ht(e,l)}}catch(i){if(i instanceof Cn)throw i;ht(e,"network-request-failed",{message:String(i)})}}async function bi(e,t,n,r,i={}){const s=await pt(e,t,n,r,i);return"mfaPendingCredential"in s&&ht(e,"multi-factor-auth-required",{_serverResponse:s}),s}function oh(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?sc(e.config,i):`${e.config.apiScheme}://${i}`}function q2(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class K2{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),W2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Li(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(e,t,r);return i.customData._tokenResponse=n,i}function Zl(e){return e!==void 0&&e.enterprise!==void 0}class G2{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return q2(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Y2(e,t){return pt(e,"GET","/v2/recaptchaConfig",Wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(e,t){return pt(e,"POST","/v1/accounts:delete",t)}async function ah(e,t){return pt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function X2(e,t=!1){const n=it(e),r=await n.getIdToken(t),i=oc(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zr(Ao(i.auth_time)),issuedAtTime:zr(Ao(i.iat)),expirationTime:zr(Ao(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ao(e){return Number(e)*1e3}function oc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ji("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wd(n);return i?JSON.parse(i):(Ji("Failed to decode base64 JWT payload"),null)}catch(i){return Ji("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function eu(e){const t=oc(e);return G(t,"internal-error"),G(typeof t.exp<"u","internal-error"),G(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Cn&&Q2(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Q2({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Bn(e,ah(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?ch(s.providerUserInfo):[],a=tb(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ca(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function eb(e){const t=it(e);await vs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function tb(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function ch(e){return e.map(t=>{var{providerId:n}=t,r=rc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(e,t){const n=await sh(e,{},async()=>{const r=gi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=oh(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ih.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rb(e,t){return pt(e,"POST","/v2/accounts:revokeToken",Wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){G(t.idToken,"internal-error"),G(typeof t.idToken<"u","internal-error"),G(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):eu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){G(t.length!==0,"internal-error");const n=eu(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nb(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ar;return r&&(G(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ar,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){G(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Dt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=rc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ca(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Bn(this,this.stsTokenManager.getToken(this.auth,t));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return X2(this,t)}reload(){return eb(this)}_assign(t){this!==t&&(G(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Dt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await vs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(kt(this.auth));const t=await this.getIdToken();return await Bn(this,J2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(u=n.createdAt)!==null&&u!==void 0?u:void 0,_=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:R,emailVerified:P,isAnonymous:j,providerData:ne,stsTokenManager:te}=n;G(R&&te,t,"internal-error");const M=ar.fromJSON(this.name,te);G(typeof R=="string",t,"internal-error"),Qt(f,t.name),Qt(d,t.name),G(typeof P=="boolean",t,"internal-error"),G(typeof j=="boolean",t,"internal-error"),Qt(m,t.name),Qt(g,t.name),Qt(v,t.name),Qt(k,t.name),Qt(b,t.name),Qt(_,t.name);const U=new Dt({uid:R,auth:t,email:d,emailVerified:P,displayName:f,isAnonymous:j,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:M,createdAt:b,lastLoginAt:_});return ne&&Array.isArray(ne)&&(U.providerData=ne.map(X=>Object.assign({},X))),k&&(U._redirectEventId=k),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new ar;i.updateFromServerResponse(n);const s=new Dt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await vs(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ch(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ar;a.updateFromIdToken(r);const c=new Dt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ca(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=new Map;function Ft(e){Bt(e instanceof Function,"Expected a class definition");let t=tu.get(e);return t?(Bt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,tu.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}lh.type="NONE";const nu=lh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e,t,n){return`firebase:${e}:${t}:${n}`}class cr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Dt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new cr(Ft(nu),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ft(nu);const o=Xi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const f=Dt._fromJSON(t,l);u!==s&&(a=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new cr(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new cr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(dh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(uh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ph(t))return"Blackberry";if(mh(t))return"Webos";if(ac(t))return"Safari";if((t.includes("chrome/")||fh(t))&&!t.includes("edge/"))return"Chrome";if(hh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uh(e=je()){return/firefox\//i.test(e)}function ac(e=je()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fh(e=je()){return/crios\//i.test(e)}function dh(e=je()){return/iemobile/i.test(e)}function hh(e=je()){return/android/i.test(e)}function ph(e=je()){return/blackberry/i.test(e)}function mh(e=je()){return/webos/i.test(e)}function Ys(e=je()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ib(e=je()){var t;return Ys(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function sb(){return wy()&&document.documentMode===10}function gh(e=je()){return Ys(e)||hh(e)||mh(e)||ph(e)||/windows phone/i.test(e)||dh(e)}function ob(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(e,t=[]){let n;switch(e){case"Browser":n=ru(je());break;case"Worker":n=`${ru(je())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${vi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(e,t={}){return pt(e,"GET","/v2/passwordPolicy",Wt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=6;class ub{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iu(this),this.idTokenSubscription=new iu(this),this.beforeStateQueue=new ab(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ah(this,{idToken:t}),r=await Dt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await vs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=z2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(lt(this.app))return Promise.reject(kt(this));const n=t?it(t):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&G(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return lt(this.app)?Promise.reject(kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await cb(this),n=new ub(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new mi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rb(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ft(t)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=vh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&B2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Sn(e){return it(e)}class iu{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ay(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function db(e){Js=e}function yh(e){return Js.loadJS(e)}function hb(){return Js.recaptchaEnterpriseScript}function pb(){return Js.gapiScript}function mb(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const gb="recaptcha-enterprise",vb="NO_RECAPTCHA";class yb{constructor(t){this.type=gb,this.auth=Sn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Y2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new G2(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Zl(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(vb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Zl(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=hb();c.length!==0&&(c+=a),yh(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function su(e,t,n,r=!1){const i=new yb(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ys(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await su(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await su(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(e,t){const n=Xd(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ps(s,t??{}))return i;ht(i,"already-initialized")}return n.initialize({options:t})}function _b(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function wb(e,t,n){const r=Sn(e);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=bh(t),{host:o,port:a}=Eb(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Cb()}function bh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Eb(e){const t=bh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ou(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ou(o)}}}function ou(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Cb(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(t){return Mt("not implemented")}_linkToIdToken(t,n){return Mt("not implemented")}_getReauthenticationResolver(t){return Mt("not implemented")}}async function Sb(e,t){return pt(e,"POST","/v1/accounts:update",t)}async function Ib(e,t){return pt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(e,t){return bi(e,"POST","/v1/accounts:signInWithPassword",Wt(e,t))}async function Tb(e,t){return pt(e,"POST","/v1/accounts:sendOobCode",Wt(e,t))}async function Ab(e,t){return Tb(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(e,t){return bi(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}async function Pb(e,t){return bi(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends cc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ii(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ii(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ys(t,n,"signInWithPassword",kb);case"emailLink":return xb(t,{email:this._email,oobCode:this._password});default:ht(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ys(t,r,"signUpPassword",Ib);case"emailLink":return Pb(t,{idToken:n,email:this._email,oobCode:this._password});default:ht(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(e,t){return bi(e,"POST","/v1/accounts:signInWithIdp",Wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="http://localhost";class Hn extends cc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Hn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=rc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return lr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,lr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,lr(t,n)}buildRequest(){const t={requestUri:Ob,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=gi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lb(e){const t=Rr(Lr(e)).link,n=t?Rr(Lr(t)).deep_link_id:null,r=Rr(Lr(e)).deep_link_id;return(r?Rr(Lr(r)).link:null)||r||n||t||e}class lc{constructor(t){var n,r,i,s,o,a;const c=Rr(Lr(t)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Rb((i=c.mode)!==null&&i!==void 0?i:null);G(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Lb(t);try{return new lc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.providerId=Cr.PROVIDER_ID}static credential(t,n){return ii._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=lc.parseLink(n);return G(r,"argument-error"),ii._fromEmailAndCode(t,r.code,r.tenantId)}}Cr.PROVIDER_ID="password";Cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends _h{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends _i{constructor(){super("facebook.com")}static credential(t){return Hn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return an.credentialFromTaggedObject(t)}static credentialFromError(t){return an.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return an.credential(t.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends _i{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Hn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends _i{constructor(){super("github.com")}static credential(t){return Hn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ln.credentialFromTaggedObject(t)}static credentialFromError(t){return ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ln.credential(t.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends _i{constructor(){super("twitter.com")}static credential(t,n){return Hn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return un.credentialFromTaggedObject(t)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return un.credential(n,r)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb(e,t){return bi(e,"POST","/v1/accounts:signUp",Wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Dt._fromIdTokenResponse(t,r,i),o=au(r);return new jn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=au(r);return new jn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function au(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Cn{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bs.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new bs(t,n,r,i)}}function wh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bs._fromErrorAndOperation(e,s,t,r):s})}async function Mb(e,t,n=!1){const r=await Bn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return jn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(e,t,n=!1){const{auth:r}=e;if(lt(r.app))return Promise.reject(kt(r));const i="reauthenticate";try{const s=await Bn(e,wh(r,i,t,e),n);G(s.idToken,r,"internal-error");const o=oc(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(e.uid===a,r,"user-mismatch"),jn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(e,t,n=!1){if(lt(e.app))return Promise.reject(kt(e));const r="signIn",i=await wh(e,r,t),s=await jn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Fb(e,t){return Eh(Sn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(e,t,n){var r;G(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),G(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(G(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(G(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ch(e){const t=Sn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Ub(e,t,n){const r=Sn(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&$b(r,i,n),await ys(r,i,"getOobCode",Ab)}async function Bb(e,t,n){if(lt(e.app))return Promise.reject(kt(e));const r=Sn(e),o=await ys(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Nb).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ch(e),c}),a=await jn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Hb(e,t,n){return lt(e.app)?Promise.reject(kt(e)):Fb(it(e),Cr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ch(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(e,t){return pt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zb(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=it(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Bn(r,jb(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Vb(e,t){const n=it(e);return lt(n.auth.app)?Promise.reject(kt(n.auth)):Sh(n,t,null)}function Wb(e,t){return Sh(it(e),null,t)}async function Sh(e,t,n){const{auth:r}=e,s={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await Bn(e,Sb(r,s));await e._updateTokensIfNecessary(o,!0)}function qb(e,t,n,r){return it(e).onIdTokenChanged(t,n,r)}function Kb(e,t,n){return it(e).beforeAuthStateChanged(t,n)}function cu(e,t,n,r){return it(e).onAuthStateChanged(t,n,r)}function Gb(e){return it(e).signOut()}const _s="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_s,"1"),this.storage.removeItem(_s),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(){const e=je();return ac(e)||Ys(e)}const Jb=1e3,Xb=10;class kh extends Ih{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Yb()&&ob(),this.fallbackToPolling=gh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sb()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Xb):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Jb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}kh.type="LOCAL";const Qb=kh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th extends Ih{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Th.type="SESSION";const Ah=Th;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Xs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await Zb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=uc("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function t_(e){Tt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function n_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function i_(){return xh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="firebaseLocalStorageDb",s_=1,ws="firebaseLocalStorage",Oh="fbase_key";class wi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qs(e,t){return e.transaction([ws],t?"readwrite":"readonly").objectStore(ws)}function o_(){const e=indexedDB.deleteDatabase(Ph);return new wi(e).toPromise()}function la(){const e=indexedDB.open(Ph,s_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ws,{keyPath:Oh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ws)?t(r):(r.close(),await o_(),t(await la()))})})}async function lu(e,t,n){const r=Qs(e,!0).put({[Oh]:t,value:n});return new wi(r).toPromise()}async function a_(e,t){const n=Qs(e,!1).get(t),r=await new wi(n).toPromise();return r===void 0?null:r.value}function uu(e,t){const n=Qs(e,!0).delete(t);return new wi(n).toPromise()}const c_=800,l_=3;class Rh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await la(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>l_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xs._getInstance(i_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await n_(),!this.activeServiceWorker)return;this.sender=new e_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||r_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await la();return await lu(t,_s,"1"),await uu(t,_s),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lu(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>a_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>uu(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Qs(i,!1).getAll();return new wi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),c_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rh.type="LOCAL";const u_=Rh;new yi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(e,t){return t?Ft(t):(G(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends cc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return lr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return lr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return lr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function d_(e){return Eh(e.auth,new fc(e),e.bypassAuthState)}function h_(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),Db(n,new fc(e),e.bypassAuthState)}async function p_(e){const{auth:t,user:n}=e;return G(n,t,"internal-error"),Mb(n,new fc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return d_;case"linkViaPopup":case"linkViaRedirect":return p_;case"reauthViaPopup":case"reauthViaRedirect":return h_;default:ht(this.auth,"internal-error")}}resolve(t){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=new yi(2e3,1e4);class Zn extends Lh{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return G(t,this.auth,"internal-error"),t}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const t=uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,m_.get())};t()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="pendingRedirect",Qi=new Map;class v_ extends Lh{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Qi.get(this.auth._key());if(!t){try{const r=await y_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Qi.set(this.auth._key(),t)}return this.bypassAuthState||Qi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y_(e,t){const n=w_(t),r=__(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function b_(e,t){Qi.set(e._key(),t)}function __(e){return Ft(e._redirectPersistence)}function w_(e){return Xi(g_,e.config.apiKey,e.name)}async function E_(e,t,n=!1){if(lt(e.app))return Promise.reject(kt(e));const r=Sn(e),i=f_(r,t),o=await new v_(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=10*60*1e3;class S_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!I_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Nh(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=C_&&this.cachedEventUids.clear(),this.cachedEventUids.has(fu(t))}saveEventToCache(t){this.cachedEventUids.add(fu(t)),this.lastProcessedEventTime=Date.now()}}function fu(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Nh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function I_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nh(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(e,t={}){return pt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A_=/^https?/;async function x_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await k_(e);for(const n of t)try{if(P_(n))return}catch{}ht(e,"unauthorized-domain")}function P_(e){const t=aa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!A_.test(n))return!1;if(T_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new yi(3e4,6e4);function du(){const e=Tt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function R_(e){return new Promise((t,n)=>{var r,i,s;function o(){du(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{du(),n(It(e,"network-request-failed"))},timeout:O_.get()})}if(!((i=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Tt().gapi)===null||s===void 0)&&s.load)o();else{const a=mb("iframefcb");return Tt()[a]=()=>{gapi.load?o():n(It(e,"network-request-failed"))},yh(`${pb()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Zi=null,t})}let Zi=null;function L_(e){return Zi=Zi||R_(e),Zi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=new yi(5e3,15e3),M_="__/auth/iframe",D_="emulator/auth/iframe",F_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U_(e){const t=e.config;G(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?sc(t,D_):`https://${e.config.authDomain}/${M_}`,r={apiKey:t.apiKey,appName:e.name,v:vi},i=$_.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${gi(r).slice(1)}`}async function B_(e){const t=await L_(e),n=Tt().gapi;return G(n,e,"internal-error"),t.open({where:document.body,url:U_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:F_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(e,"network-request-failed"),a=Tt().setTimeout(()=>{s(o)},N_.get());function c(){Tt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j_=500,z_=600,V_="_blank",W_="http://localhost";class hu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function q_(e,t,n,r=j_,i=z_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},H_),{width:r.toString(),height:i.toString(),top:s,left:o}),u=je().toLowerCase();n&&(a=fh(u)?V_:n),uh(u)&&(t=t||W_,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[m,g])=>`${d}${m}=${g},`,"");if(ib(u)&&a!=="_self")return K_(t||"",a),new hu(null);const f=window.open(t||"",a,l);G(f,e,"popup-blocked");try{f.focus()}catch{}return new hu(f)}function K_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="__/auth/handler",Y_="emulator/auth/handler",J_=encodeURIComponent("fac");async function pu(e,t,n,r,i,s){G(e.config.authDomain,e,"auth-domain-config-required"),G(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:vi,eventId:i};if(t instanceof _h){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ty(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,f]of Object.entries(s||{}))o[l]=f}if(t instanceof _i){const l=t.getScopes().filter(f=>f!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await e._getAppCheckToken(),u=c?`#${J_}=${encodeURIComponent(c)}`:"";return`${X_(e)}?${gi(a).slice(1)}${u}`}function X_({config:e}){return e.emulator?sc(e,Y_):`https://${e.authDomain}/${G_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="webStorageSupport";class Q_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ah,this._completeRedirectFn=E_,this._overrideRedirectResult=b_}async _openPopup(t,n,r,i){var s;Bt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await pu(t,n,r,aa(),i);return q_(t,o,uc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await pu(t,n,r,aa(),i);return t_(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await B_(t),r=new S_(t);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xo,{type:xo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xo];o!==void 0&&n(!!o),ht(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return gh()||ac()||Ys()}}const Z_=Q_;var mu="@firebase/auth",gu="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nw(e){ni(new vr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vh(e)},u=new fb(r,i,s,c);return _b(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ni(new vr("auth-internal",t=>{const n=Sn(t.getProvider("auth").getImmediate());return(r=>new ew(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(mu,gu,tw(e)),or(mu,gu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=5*60,iw=Kd("authIdTokenMaxAge")||rw;let vu=null;const sw=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iw)return;const i=n==null?void 0:n.token;vu!==i&&(vu=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ow(e=T2()){const t=Xd(e,"auth");if(t.isInitialized())return t.getImmediate();const n=bb(e,{popupRedirectResolver:Z_,persistence:[u_,Qb,Ah]}),r=Kd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=sw(s.toString());Kb(n,o,()=>o(n.currentUser)),qb(n,a=>o(a))}}const i=gy("auth");return i&&wb(n,`http://${i}`),n}function aw(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}db({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nw("Browser");const cw={apiKey:"AIzaSyBQsa1go-BH1Je9nLMAnvh66xwX6IFLKfo",authDomain:"shoes-shop-40b9a.firebaseapp.com",projectId:"shoes-shop-40b9a",storageBucket:"shoes-shop-40b9a.appspot.com",messagingSenderId:"1085688926786",appId:"1:1085688926786:web:694c9aac26699cfccb13db",measurementId:"G-8MCDW6LSR5"},lw=Qd(cw),Zt=ow(lw),uw=js("authInfo",()=>{const e=ge(null),t=ge(null),n=ge(null),r=ge(!1),i=ge(!1);async function s(m,g){await Bb(Zt,m,g).then(v=>{console.log(e),n.value=v.user.email}).catch(v=>{t.value=v.message})}const o=async(m,g)=>{await Hb(Zt,m,g).then(v=>{console.log(v)}).catch(v=>{t.value=v.message,console.log(v.message)})};cu(Zt,m=>{console.log(),e.value=m});const a=async()=>{await Gb(Zt).then(()=>{}).catch(m=>{console.log(m.message)})},c=async m=>{await Ub(Zt,m).then(()=>{n.value=`Інструкція по відновленню відправлена на ${m}`,console.log(n.value)}).catch(g=>{console.log(g),t.value=g.message})},u=async m=>{if(!m){t.value="Ім'я користувача не може бути порожнім.";return}try{await zb(Zt.currentUser,{displayName:m}),n.value="Ім'я користувача успішно оновлено.",d(r),console.log("12312312")}catch(g){t.value=g.message,d(i),console.error(g)}},l=async m=>{const g=Zt.currentUser;try{await Vb(g,m),d(r),console.log("Email successfully updated")}catch(v){d(i),console.error("Error updating email:",v.message)}},f=async m=>{const g=Zt.currentUser;console.log(m);try{await Wb(g,m),console.log("Password successfully updated"),d(r)}catch(v){d(i),console.error("Error updating password:",v.message)}},d=m=>{m.value=!0,console.log(m.value),setTimeout(()=>{m.value=!1,console.log(m.value)},2e3)};return{user:e,error:t,successMessage:n,register:s,loginUser:o,onAuthStateChanged:cu,signOutUser:a,rememberPass:c,updateUserName:u,changeEmail:l,changePassword:f,visiblePopUp:r,visibleError:i}}),Zs=js("wishListInfo",()=>{const e=ge(JSON.parse(localStorage.getItem("wishList"))||[]),t=s=>{e.value=e.value.filter(o=>o.product_id!==s),localStorage.setItem("wishList",JSON.stringify(e.value))},n=(s,o)=>{const a=e.value.find(c=>c.product_id===s);console.log(a),a||e.value.push(o),console.log(e),localStorage.setItem("wishList",JSON.stringify(e.value))},r=Ee(()=>s=>e.value.length>0?e.value.some(o=>o.product_id===s):!1),i=Ee(()=>e.value.length);return{wishList:e,addProductToWishList:n,removeWishListItem:t,isInWishList:r,getTotalQuantity:i}}),fw={class:"header-btns__list flex items-center justify-center"},dw={__name:"HeaderListButton",emits:["value"],setup(e,{emit:t}){const n=pi(),r=uw(),i=Zs(),s=ge([{id:1,name:"",icon:Ue.cart,value:"cart"},{id:2,name:"Пошук",icon:Ue.search,value:"search"},{id:3,name:"Закладки",icon:Ue.wish,value:"wish"},{id:4,name:"Профіль",icon:Ue.user,value:"account"}]),o=t,a=c=>{o("buttonClick",c)};return(c,u)=>(A(),$("ul",fw,[(A(!0),$(we,null,yn(s.value,l=>(A(),$("li",{key:l.id},[l.value==="cart"?(A(),Re(wt,{key:0,value:l.value,label:ee(n).getTotalValue,icon:l.icon,index_quantity:ee(n).getTotalQuantity,onClick:f=>a(l.value)},null,8,["value","label","icon","index_quantity","onClick"])):l.value==="wish"?(A(),Re(wt,{key:1,value:l.value,label:l.name,icon:l.icon,index_quantity:ee(i).getTotalQuantity,onClick:f=>a(l.value)},null,8,["value","label","icon","index_quantity","onClick"])):l.value==="account"&&ee(r).user?(A(),Re(wt,{key:2,user_status:ee(r).user,is_link:"/user/page",value:l.value,label:l.name,icon:l.icon,onClick:f=>a(l.value)},null,8,["user_status","value","label","icon","onClick"])):l.value==="account"&&!ee(r).user?(A(),Re(wt,{key:3,is_link:"/login",value:l.value,label:l.name,icon:l.icon,onClick:f=>a(l.value)},null,8,["value","label","icon","onClick"])):(A(),Re(wt,{key:4,value:l.value,label:l.name,icon:l.icon,onClick:f=>a(l.value)},null,8,["value","label","icon","onClick"]))]))),128))]))}},hw=Fe(dw,[["__scopeId","data-v-d41fd007"]]),pw={class:"border-b border-gray-300 pb-5 mb-8"},mw={class:"flex justify-between mb-5 lg:flex-row flex-col"},gw={class:"flex justify-between lg:flex-row flex-row-reverse"},vw={__name:"TheHeader",props:{openModalBlock:{type:Function,required:!1},openModalSearchFunc:{type:Function,required:!1},openModalWisthFun:{type:Function,required:!1},openModalCatalogFun:{type:Function,required:!1}},setup(e){const t=ge([{id:1,name:"Nike",icon:"/src/assets/images/brands/icons8-nike.svg",link:"https://www.nike.com/"},{id:2,name:"Adidas",icon:"/src/assets/images/brands/adidas.svg",link:"https://www.adidas.com/"},{id:3,name:"Puma",icon:"/src/assets/images/brands/puma.png",link:"https://www.puma.com/"},{id:4,name:"Reebok",icon:"/src/assets/images/brands/reebok-48.png",link:"https://www.reebok.com/"},{id:5,name:"New Balance",icon:"/src/assets/images/brands/icons8.png",link:"https://www.newbalance.com/"},{id:6,name:"Vans",icon:"/src/assets/images/brands/vans.png",link:"https://www.vans.com/"}]),n=e,r=i=>{console.log(i),i==="cart"&&(console.log(i),n.openModalBlock()),i==="search"&&n.openModalSearchFunc(),i==="wish"&&(console.log("оПЕН ВІШ ЛІСТ"),n.openModalWisthFun())};return(i,s)=>{const o=ft("ButtonItem");return A(),$("header",pw,[x("div",mw,[x("div",gw,[J(o,{icon:"fa-solid fa-bars",onClick:s[0]||(s[0]=a=>e.openModalCatalogFun())}),J(Bd,{title:"REACT SNEAKERS",subTitle:"Магазин лучших кроссовок",image:"/src/assets/images/logo.png"})]),J(hw,{onButtonClick:r})]),x("div",null,[J(Vv,{navLinks:t.value},null,8,["navLinks"])])])}}},yw={class:"transform motion-safe:hover:scale-110 transition"},bw=["href"],_w=["innerHTML"],ww={__name:"ContactBlockSocialItem",props:{link:{type:String,required:!1},name:{type:String,required:!1},icon:{type:String,required:!1}},setup(e){return(t,n)=>(A(),$("li",yw,[x("a",{href:e.link},[(A(),$("svg",{fill:"#000000",width:"32px",height:"32px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",innerHTML:e.icon},null,8,_w))],8,bw)]))}},Ew={class:"contact-list mb-2"},Cw=["href"],Sw=["href"],Iw=["href"],kw={class:"flex gap-1.5 social-list"},Tw={__name:"ContactBlock",props:{socialInfo:{type:Array,required:!0},contactInfo:{type:Array,required:!0}},setup(e){return(t,n)=>(A(),$("div",null,[x("ul",Ew,[(A(!0),$(we,null,yn(e.contactInfo,(r,i)=>(A(),$("li",{key:i,class:"transform motion-safe:hover:scale-105 transition text-xs font-medium text-neutral-400"},[r.type==="tel"?(A(),$("a",{key:0,href:"tel:"+r.value},Se(r.value),9,Cw)):r.type==="email"?(A(),$("a",{key:1,href:"mailto:"+r.value},Se(r.value),9,Sw)):r.type==="address"?(A(),$("a",{key:2,href:"https://"+r.link},Se(r.value),9,Iw)):Ie("",!0)]))),128))]),x("ul",kw,[(A(!0),$(we,null,yn(e.socialInfo,(r,i)=>(A(),Re(ww,{key:i,name:r.name,link:r.link,icon:r.icon},null,8,["name","link","icon"]))),128))])]))}},Aw=Fe(Tw,[["__scopeId","data-v-e4123cbc"]]),xw=e=>(Wn("data-v-cf1875e4"),e=e(),qn(),e),Pw={class:"footer mt-8 border-t pt-5 border-gray-300"},Ow={class:"footer__content flex justify-between items-center"},Rw=xw(()=>x("div",{class:"-ml-28 lg:block hidden"},[x("a",{class:"text-neutral-400",href:""},"Privacy Policy@")],-1)),Lw={__name:"TheFooter",setup(e){const t=ge([{type:"email",value:"top@mail.com"},{type:"tel",value:"+380441200031"},{type:"address",value:"Місто: Мрій вулиця: Чудова 25",link:"google.com"}]),n=ge([{name:"facebook",icon:Ue.facebook,link:"https://facebook.com/"},{name:"instagram",icon:Ue.intagram,link:"https://instagram.com/"},{name:"instagram",icon:Ue.youtube,link:"https://www.youtube.com/"}]);return(r,i)=>(A(),$("footer",Pw,[x("div",Ow,[J(Bd,{title:"REACT SNEAKERS",subTitle:"Магазин лучших кроссовок",image:"/src/assets/images/logo.png"}),Rw,J(Aw,{socialInfo:n.value,contactInfo:t.value},null,8,["socialInfo","contactInfo"])])]))}},Nw=Fe(Lw,[["__scopeId","data-v-cf1875e4"]]),Mw={key:0},Dw=["innerHTML"],Fw={key:0},$w=["innerHTML"],er={__name:"ButtonComon",props:{label:{type:String,required:!1},iconSvg:{type:String,required:!1},link:{type:String,required:!1}},setup(e){return(t,n)=>{const r=ft("router-link");return e.link?(A(),Re(r,{key:0,to:e.link,class:ke(t.$attrs.class||"banner__btn text-lg text-white font-bold py-2.5 px-8 bg-green-400 rounded-3xl hover:bg-green-500 transition ease-in-out delay-150"),type:"button"},{default:Xe(()=>[e.label?(A(),$("span",Mw,Se(e.label),1)):Ie("",!0),e.iconSvg?(A(),$("svg",{key:1,class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",innerHTML:e.iconSvg},null,8,Dw)):Ie("",!0)]),_:1},8,["to","class"])):(A(),$("button",{key:1,class:ke(t.$attrs.class||"banner__btn text-lg text-white font-bold py-2.5 px-8 bg-green-400 rounded-3xl hover:bg-green-500 transition ease-in-out delay-150"),type:"button"},[e.label?(A(),$("span",Fw,Se(e.label),1)):Ie("",!0),Df(t.$slots,"default"),e.iconSvg?(A(),$("svg",{key:1,class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",innerHTML:e.iconSvg},null,8,$w)):Ie("",!0)],2))}}},Uw={__name:"PopUpEmbet",setup(e){const{openModal:t}=tt("cartActions");return(n,r)=>(A(),$("div",{class:ke(["embet fixed top-0 left-o h-full w-full bg-black opacity-70 z-20 opacity-0 invisible",{"is-open":ee(t)}])},Se(ee(t)),3))}},Bw=Fe(Uw,[["__scopeId","data-v-1102397b"]]),Hw={class:"flex flex-auto border p-5 gap-2 rounded-2xl"},jw=["src"],zw={key:0,class:"block"},Vw={key:1},Ww={key:2,class:"flex gap-2"},qw={class:"block font-bold"},Kw=x("span",null,"грн.",-1),Gw={__name:"CartListItem",props:{id:{type:[Number,String],required:!1},name:{type:String,required:!1},image:{type:String,required:!1},option:{type:String,required:!1},price:{type:[Number,String],required:!1},quantity:{type:Number,required:!1},cartKey:{type:Number,required:!1},wishList:{type:Boolean,default:!1}},setup(e){const t=pi(),n=Zs();return(r,i)=>{const s=ft("router-link");return A(),$("div",Hw,[x("img",{class:"max-w-16 max-h-16",src:e.image,alt:""},null,8,jw),x("div",null,[J(s,{to:`/product/${e.id}`},{default:Xe(()=>[Ur(Se(e.name),1)]),_:1},8,["to"]),as(x("div",null," Товар в списку бажань ",512),[[us,ee(n).isInWishList(e.id)]]),as(x("div",null," Товар не в списку бажань ",512),[[us,!ee(n).isInWishList(e.id)]]),e.wishList?Ie("",!0):(A(),$("span",zw,"Розмір: "+Se(e.option),1)),e.wishList?Ie("",!0):(A(),$("span",Vw,"Кількість: "+Se(e.quantity),1)),e.wishList?Ie("",!0):(A(),$("div",Ww,[J(er,{onClick:i[0]||(i[0]=o=>ee(t).minusQuantity(e.cartKey)),class:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"},{default:Xe(()=>[Ur("-")]),_:1}),J(er,{onClick:i[1]||(i[1]=o=>ee(t).updateQuantity(e.cartKey)),class:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"},{default:Xe(()=>[Ur("+")]),_:1})])),x("span",qw,[x("span",null,Se(e.price),1),Kw])]),e.wishList?(A(),Re(er,{key:1,onClick:i[3]||(i[3]=o=>ee(n).removeWishListItem(e.id)),class:"flex justify-center items-center bg-transparent w-8 h-6 rounded",iconSvg:ee(Ue).closeCart},null,8,["iconSvg"])):(A(),Re(er,{key:0,onClick:i[2]||(i[2]=o=>ee(t).removeCartItem(e.cartKey)),class:"flex justify-center items-center bg-transparent w-8 h-6 rounded",iconSvg:ee(Ue).closeCart},null,8,["iconSvg"]))])}}},Yw={class:"flex-auto flex flex-col gap-y-5 max-h-[626px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"},Mh={__name:"CartList",props:{products:{type:Array,required:!1},wishList:{type:[Boolean,String],default:!1}},setup(e){return(t,n)=>(A(),$("ul",Yw,[(A(!0),$(we,null,yn(e.products,(r,i)=>(A(),$("li",{key:i},[J(Gw,{id:r.product_id,image:r.product_thumb,price:r.product_price,option:r.cart_option,name:r.product_name,cartKey:r.cart_key,quantity:r.cart_quantity,wishList:e.wishList},null,8,["id","image","price","option","name","cartKey","quantity","wishList"])]))),128))]))}},eo=e=>(Wn("data-v-fc0622bf"),e=e(),qn(),e),Jw={class:"cart__head flex justify-between items-center"},Xw=eo(()=>x("h4",{class:"text-xl font-bold"},"Корзина",-1)),Qw={key:0,class:"h-full flex flex-col"},Zw={class:"cart__footer mt-16 mb-16"},e3={class:"flex mb-2"},t3=eo(()=>x("span",null,"Всього:",-1)),n3=eo(()=>x("span",{class:"middle flex-auto border-b border-dashed relative -top-1"},null,-1)),r3={class:"font-bold"},i3=eo(()=>x("span",null,"грн.",-1)),s3={key:1,class:"m-auto"},o3=Xm(`<svg fill="#000000" height="140px" width="140px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 231.523 231.523" xml:space="preserve" data-v-fc0622bf><g data-v-fc0622bf><path d="M107.415,145.798c0.399,3.858,3.656,6.73,7.451,6.73c0.258,0,0.518-0.013,0.78-0.04c4.12-0.426,7.115-4.111,6.689-8.231\r
                    l-3.459-33.468c-0.426-4.12-4.113-7.111-8.231-6.689c-4.12,0.426-7.115,4.111-6.689,8.231L107.415,145.798z" data-v-fc0622bf></path><path d="M154.351,152.488c0.262,0.027,0.522,0.04,0.78,0.04c3.796,0,7.052-2.872,7.451-6.73l3.458-33.468\r
                    c0.426-4.121-2.569-7.806-6.689-8.231c-4.123-0.421-7.806,2.57-8.232,6.689l-3.458,33.468\r
                    C147.235,148.377,150.23,152.062,154.351,152.488z" data-v-fc0622bf></path><path d="M96.278,185.088c-12.801,0-23.215,10.414-23.215,23.215c0,12.804,10.414,23.221,23.215,23.221\r
                    c12.801,0,23.216-10.417,23.216-23.221C119.494,195.502,109.079,185.088,96.278,185.088z M96.278,216.523\r
                    c-4.53,0-8.215-3.688-8.215-8.221c0-4.53,3.685-8.215,8.215-8.215c4.53,0,8.216,3.685,8.216,8.215\r
                    C104.494,212.835,100.808,216.523,96.278,216.523z" data-v-fc0622bf></path><path d="M173.719,185.088c-12.801,0-23.216,10.414-23.216,23.215c0,12.804,10.414,23.221,23.216,23.221\r
                    c12.802,0,23.218-10.417,23.218-23.221C196.937,195.502,186.521,185.088,173.719,185.088z M173.719,216.523\r
                    c-4.53,0-8.216-3.688-8.216-8.221c0-4.53,3.686-8.215,8.216-8.215c4.531,0,8.218,3.685,8.218,8.215\r
                    C181.937,212.835,178.251,216.523,173.719,216.523z" data-v-fc0622bf></path><path d="M218.58,79.08c-1.42-1.837-3.611-2.913-5.933-2.913H63.152l-6.278-24.141c-0.86-3.305-3.844-5.612-7.259-5.612H18.876\r
                    c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24.94l6.227,23.946c0.031,0.134,0.066,0.267,0.104,0.398l23.157,89.046\r
                    c0.86,3.305,3.844,5.612,7.259,5.612h108.874c3.415,0,6.399-2.307,7.259-5.612l23.21-89.25C220.49,83.309,220,80.918,218.58,79.08z\r
                    M183.638,165.418H86.362l-19.309-74.25h135.895L183.638,165.418z" data-v-fc0622bf></path><path d="M105.556,52.851c1.464,1.463,3.383,2.195,5.302,2.195c1.92,0,3.84-0.733,5.305-2.198c2.928-2.93,2.927-7.679-0.003-10.607\r
                    L92.573,18.665c-2.93-2.928-7.678-2.927-10.607,0.002c-2.928,2.93-2.927,7.679,0.002,10.607L105.556,52.851z" data-v-fc0622bf></path><path d="M159.174,55.045c1.92,0,3.841-0.733,5.306-2.199l23.552-23.573c2.928-2.93,2.925-7.679-0.005-10.606\r
                    c-2.93-2.928-7.679-2.925-10.606,0.005l-23.552,23.573c-2.928,2.93-2.925,7.679,0.005,10.607\r
                    C155.338,54.314,157.256,55.045,159.174,55.045z" data-v-fc0622bf></path><path d="M135.006,48.311c0.001,0,0.001,0,0.002,0c4.141,0,7.499-3.357,7.5-7.498l0.008-33.311c0.001-4.142-3.356-7.501-7.498-7.502\r
                    c-0.001,0-0.001,0-0.001,0c-4.142,0-7.5,3.357-7.501,7.498l-0.008,33.311C127.507,44.951,130.864,48.31,135.006,48.311z" data-v-fc0622bf></path></g></svg>`,1),a3=[o3],c3={__name:"CartPopUp",props:{closeModal:{type:Function,required:!1},openModal:{type:Boolean,required:!0}},setup(e){const t=e,n=pi();return(r,i)=>(A(),$(we,null,[J(Bw,{onClick:i[0]||(i[0]=s=>t.closeModal())}),x("div",{class:ke(["cart-pop-up bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 flex flex-col",{"is-open":t.openModal}])},[x("div",Jw,[Xw,J(wt,{onClick:i[1]||(i[1]=s=>t.closeModal()),icon:ee(Ue).close},null,8,["icon"])]),ee(n).cartList.length>0?(A(),$("div",Qw,[J(Mh,{products:ee(n).cartList},null,8,["products"]),x("div",Zw,[x("div",e3,[t3,n3,x("span",r3,[x("span",null,Se(ee(n).getTotalValue),1),i3])]),J(er,{class:"banner__btn text-lg text-white font-bold py-2.5 px-8 bg-green-400 rounded-3xl hover:bg-green-500 transition ease-in-out delay-150 w-full flex justify-center items-center",label:"Оформить заказ",iconSvg:ee(Ue).arrow,link:"/checkout"},null,8,["iconSvg"])])])):(A(),$("div",s3,a3))],2)],64))}},l3=Fe(c3,[["__scopeId","data-v-fc0622bf"]]),u3={class:"form__group"},f3=["innerHTML"],d3={__name:"SearchElement",props:{icon:{type:String,required:!1},labelClass:{type:String,required:!1},inputClass:{type:String,required:!1},groupClass:{type:String,required:!1}},emits:"update:value",setup(e,{emit:t}){const n=t,r=i=>{n("update:value",i.target.value)};return(i,s)=>(A(),$("div",u3,[x("label",{class:ke([e.labelClass||"flex border border-gray-300 border-solid rounded-lg py-2 px-1"]),for:""},[e.icon?(A(),$("svg",{key:0,class:ke(i.$attrs.class||"w-6 h-6"),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",innerHTML:e.icon},null,10,f3)):Ie("",!0),x("input",{class:ke([e.inputClass||"outline-none text-gray-400 font-normal"]),type:"text",placeholder:"Пошук...",onInput:r},null,34)],2)]))}},h3=Fe(d3,[["__scopeId","data-v-bd625413"]]),p3={class:"flex gap-x-8 items-center flex-col sm:flex-row"},m3={href:""},g3=["src"],v3={class:"flex-auto"},y3={class:"block font-bold text-center sm:text-left"},b3=x("span",null,"грн.",-1),_3={__name:"SearchProductItem",props:{productList:{type:Array,required:!1}},setup(e){const t=Zs();return(n,r)=>{const i=ft("router-link");return A(!0),$(we,null,yn(e.productList,(s,o)=>(A(),$("li",{class:"mb-4 sm:mb-0",key:o},[x("div",p3,[x("a",m3,[x("img",{class:"max-w-32 max-h-32",src:s.product_thumb,alt:""},null,8,g3)]),x("div",v3,[J(i,{to:`/product/${s.product_id}`},{default:Xe(()=>[Ur(Se(s.product_name),1)]),_:2},1032,["to"]),x("span",y3,[x("span",null,Se(s.product_price),1),b3])]),ee(t).isInWishList(s.product_id)?(A(),Re(wt,{key:1,icon:ee(Ue).wishActive,btnStyle:"border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition text-gray-400"},null,8,["icon"])):(A(),Re(wt,{key:0,icon:ee(Ue).wish,onClick:a=>ee(t).addProductToWishList(s.product_id,s),label:"В список",btnStyle:"max-h-16 border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition border border-gray-400 text-gray-400 text-nowrap"},null,8,["icon","onClick"]))])]))),128)}}},w3={class:"w-full relative pointer-events-auto"},E3={key:0,class:"mx-auto max-w-screen-md bg-white py-10 px-5 mt-4 rounded-2xl shadow-lg max-h-96 overflow-y-auto pointer-events-auto"},C3={__name:"SearchPopUp",props:{closeModalSearchFunc:{type:Function,required:!1},openModalSearch:{type:Boolean,required:!0},openModalSearch:{type:Boolean,required:!1}},setup(e){const t=ec();ge([{product_id:"41",product_name:"Мужские Кроссовки Nike Blazer Mid Suede",category_id:4,category_name:"Nike",product_thumb:"/src/assets/images/product.png",product_price:"1440",product_cur_symbol:"грн"},{product_id:"141",product_name:"Мужские Кроссовки Nike Air Max 270",category_id:4,category_name:"Nike",product_thumb:"/src/assets/images/image_5.png",product_price:"1140",product_cur_symbol:"грн"},{product_id:"41",product_name:"Мужские Кроссовки Nike Blazer Mid Suede",category_id:4,category_name:"Nike",product_thumb:"/src/assets/images/image_6.png",product_price:"1340",product_cur_symbol:"грн"},{product_id:"41",product_name:"Кроссовки Puma X Aka Boku Future Rider",category_id:5,category_name:"Puma",product_thumb:"/src/assets/images/image_8.png",product_price:"1240",product_cur_symbol:"грн"},{product_id:"41",product_name:"Мужские Кроссовки Under Armour Curry 8",category_id:6,category_name:"Under",product_thumb:"/src/assets/images/image_9.png",product_price:"1040",product_cur_symbol:"грн"}]);const n=e,r=ge(""),i=ge([]);return Dn(r,(s,o)=>{i.value=t.productList.filter(a=>a.product_name.toLowerCase().includes(s.toLowerCase()))}),(s,o)=>(A(),$(we,null,[x("div",{onClick:o[0]||(o[0]=a=>n.closeModalSearchFunc()),class:ke(["embet fixed top-0 left-o h-full w-full bg-black opacity-70 z-20 opacity-0 invisible",{"is-open":n.openModalSearch}])},null,2),x("div",{class:ke(["fixed top-0  z-40 search__pop-up w-full pointer-events-none",{"is-open":n.openModalSearch}])},[x("div",w3,[J(h3,{icon:ee(Ue).search,labelClass:"flex gap-3 bg-white w-full block px-8 py-4 lg:pl-28",inputClass:"outline-none text-gray-400 font-normal w-full pr-28 ",groupClass:"w-full",value:r.value,"onUpdate:value":o[1]||(o[1]=a=>r.value=a)},null,8,["icon","value"]),J(er,{onClick:o[2]||(o[2]=a=>n.closeModalSearchFunc()),class:"flex justify-center items-center bg-transparent w-8 h-6 rounded absolute right-4 lg:right-24 top-4 transform motion-safe:hover:scale-110 transition",iconSvg:ee(Ue).close},null,8,["iconSvg"])]),i.value.length>0?(A(),$("div",E3,[x("ul",null,[J(_3,{productList:i.value},null,8,["productList"])])])):Ie("",!0)],2)],64))}},S3=Fe(C3,[["__scopeId","data-v-84c5f819"]]),to=e=>(Wn("data-v-91cd6d83"),e=e(),qn(),e),I3={class:"cart__head flex justify-between items-center"},k3=to(()=>x("h4",{class:"text-xl font-bold"},"Список побажань",-1)),T3={key:1,class:"m-auto text-center"},A3=to(()=>x("h4",{class:"text-sky-950 font-semibold text-xl"},"Список бажаних товарів пустий",-1)),x3=to(()=>x("svg",{class:"m-auto",xmlns:"http://www.w3.org/2000/svg",height:"140px",width:"140px",viewBox:"0 0 64 64","stroke-width":"3",stroke:"rgb(20 83 45)",fill:"none"},[x("path",{d:"M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z"})],-1)),P3=[A3,x3],O3=to(()=>x("div",{class:"cart__footer"},null,-1)),R3={__name:"WishListPopUp",props:{cartList:{type:Array,required:!1},closeModalWisthFun:{type:Function,required:!1},openModalWisth:{type:Boolean,required:!0}},setup(e){const t=e,n=Zs();return(r,i)=>(A(),$(we,null,[x("div",{onClick:i[0]||(i[0]=s=>t.closeModalWisthFun()),class:ke(["embet fixed top-0 left-o h-full w-full bg-black opacity-70 z-20 opacity-0 invisible",{"is-open":t.openModalWisth}])},null,2),x("div",{class:ke(["wish-pop-up bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 flex flex-col",{"is-open":t.openModalWisth}])},[x("div",I3,[k3,J(wt,{onClick:i[1]||(i[1]=s=>t.closeModalWisthFun()),icon:ee(Ue).close},null,8,["icon"])]),ee(n).getTotalQuantity?(A(),Re(Mh,{key:0,products:ee(n).wishList,wishList:"true"},null,8,["products"])):(A(),$("div",T3,P3)),O3],2)],64))}},L3=Fe(R3,[["__scopeId","data-v-91cd6d83"]]),N3=e=>(Wn("data-v-58bccc29"),e=e(),qn(),e),M3={class:"catalog-pop-up__head flex justify-between items-center mb-5"},D3=N3(()=>x("h4",{class:"text-2xl font-bold"},"Каталог",-1)),F3={class:"capitalize"},$3={__name:"CategoryPopUp",props:{catalogList:{type:Array,required:!1},closeModalCatalogFun:{type:Function,required:!1},openModalCatalog:{type:Boolean,required:!0}},setup(e){const t=e,n=ec();return(r,i)=>{const s=ft("router-link");return A(),$(we,null,[x("div",{onClick:i[0]||(i[0]=o=>t.closeModalCatalogFun()),class:ke(["embet fixed top-0 left-o h-full w-full bg-black opacity-70 z-20 opacity-0 invisible",{"is-open":t.openModalCatalog}])},null,2),x("div",{class:ke(["catalog-pop-up bg-white w-96 h-full fixed left-0 top-0 z-20 p-8 flex flex-col",{"is-open":t.openModalCatalog}])},[x("div",null,[x("div",M3,[D3,J(wt,{onClick:i[1]||(i[1]=o=>t.closeModalCatalogFun()),icon:ee(Ue).close},null,8,["icon"])])]),x("div",null,[x("ul",null,[(A(!0),$(we,null,yn(ee(n).categoryList,(o,a)=>(A(),$("li",{key:a,class:"mt-1.5"},[J(s,{to:`/category/${o.id}`,class:"text-lg font-medium flex items-center justify-between w-full pr-3 py-2.5 pl-3.5 rounded-xl cursor-pointer hover:bg-slate-200 group-hover/item:visible ... transition-all"},{default:Xe(()=>[x("span",F3,Se(o.name),1)]),_:2},1032,["to"])]))),128))])])],2)],64)}}},U3=Fe($3,[["__scopeId","data-v-58bccc29"]]),B3=e=>(Wn("data-v-2fa2054a"),e=e(),qn(),e),H3={class:"p-4 w-full max-w-md max-h-full top-6 inset-x-2/4 -translate-x-2/4 fixed z-50",ref:"successPopUp"},j3=B3(()=>x("div",{class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},[x("div",{class:"p-4 md:p-5 text-center flex items-center gap-2 border-current shadow-md"},[x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px"},[x("path",{fill:"#4caf50",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),x("path",{fill:"#ccff90",d:"M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"})]),x("h3",{class:"text-lg font-normal text-gray-500 dark:text-gray-400"},"Товар успішно доданий в кошик:)")])],-1)),z3=[j3],V3={__name:"SuccessPopUp",setup(e){const t=pi();return(n,r)=>(A(),Re(Bs,null,{default:Xe(()=>[as(x("div",H3,z3,512),[[us,ee(t).visiblePopUp]])]),_:1}))}},Dh=Fe(V3,[["__scopeId","data-v-2fa2054a"]]),W3=e=>(Wn("data-v-fd4ffaa9"),e=e(),qn(),e),q3={class:"p-4 w-full max-w-md max-h-full top-6 inset-x-2/4 -translate-x-2/4 fixed z-50"},K3=W3(()=>x("div",{class:"relative bg-white rounded-lg shadow dark:bg-gray-700 border-current shadow-md"},[x("div",{class:"p-4 md:p-5 text-center flex items-center gap-2"},[x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px"},[x("path",{fill:"#f44336",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),x("path",{fill:"#fff",d:"M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"}),x("path",{fill:"#fff",d:"M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"})]),x("h3",{class:"text-lg font-normal text-red-400 dark:text-red-400"},"Виберіть опцію розміру!")])],-1)),G3=[K3],Y3={__name:"ErrorPopUp",setup(e){const t=pi();return(n,r)=>(A(),Re(Bs,null,{default:Xe(()=>[as(x("div",q3,G3,512),[[us,ee(t).visibleError]])]),_:1}))}},Fh=Fe(Y3,[["__scopeId","data-v-fd4ffaa9"]]),J3={class:"main-layout w-screen min-h-screen h-full"},X3={class:"main-layout__block pt-20"},Q3={__name:"MainLayout",setup(e){const t=ge(!1),n=ge(!1),r=ge(!1),i=ge(!1);function s(){console.log(t.value),t.value=!0}const o=()=>{console.log(t.value),t.value=!1};function a(){n.value=!0}function c(){n.value=!1}function u(){r.value=!0}function l(){r.value=!1}function f(){i.value=!0}function d(){i.value=!1}return Fr("cartActions",{closeModal:o,openModalBlock:s,openModal:t}),(m,g)=>{const v=ft("router-view"),k=ft("ContainerBlock");return A(),$("div",J3,[x("div",X3,[J(k,null,{default:Xe(()=>[J(vw,{openModalBlock:s,openModalSearchFunc:a,openModalWisthFun:u,openModalCatalogFun:f}),J(Dh),J(Fh),J(v),J(Nw)]),_:1}),J(l3,{openModal:t.value,closeModal:o},null,8,["openModal"]),J(S3,{openModalSearch:n.value,closeModalSearchFunc:c},null,8,["openModalSearch"]),J(L3,{openModalWisth:r.value,closeModalWisthFun:l},null,8,["openModalWisth"]),J(U3,{openModalCatalog:i.value,closeModalCatalogFun:d},null,8,["openModalCatalog"])])])}}},Z3=Fe(Q3,[["__scopeId","data-v-ac7ae93e"]]),e4={},t4={class:"container 2xl my-0 mx-auto bg-white p-10 rounded-3xl relative"};function n4(e,t){return A(),$("div",t4,[Df(e.$slots,"default")])}const r4=Fe(e4,[["render",n4]]),i4="modulepreload",s4=function(e,t){return new URL(e,t).href},yu={},ot=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=s4(o,r),o in yu)return;yu[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const d=s[f];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":i4,a||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),a)return new Promise((f,d)=>{l.addEventListener("load",f),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},o4=Q0({history:p0(),routes:[{name:"start",path:"/",component:()=>ot(()=>import("./StartPage-PNXsfmpR.js"),__vite__mapDeps([]),import.meta.url)},{name:"Home",path:"/Home",meta:{layout:"main"},component:()=>ot(()=>import("./HomePage-Xh2JEMUW.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)},{name:"register",path:"/register",meta:{layout:"empty"},component:()=>ot(()=>import("./RegisterPage-8Jobt905.js"),__vite__mapDeps([4,5,6,7,8,9]),import.meta.url)},{name:"login",path:"/login",meta:{layout:"empty"},component:()=>ot(()=>import("./LoginPage-ymqGU6mc.js"),__vite__mapDeps([10,5,6,7,8,11]),import.meta.url)},{name:"remember",path:"/remember",meta:{layout:"empty"},component:()=>ot(()=>import("./RememberPage-mNWVSoQ8.js"),__vite__mapDeps([12,5,6,13]),import.meta.url)},{name:"category",path:"/category/:id",meta:{layout:"main"},component:()=>ot(()=>import("./CategoryPage-klF48Y0J.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)},{name:"product",path:"/product/:id",meta:{layout:"main"},component:()=>ot(()=>import("./ProductPage-vlYYxcoL.js"),__vite__mapDeps([16,17]),import.meta.url)},{name:"checkout",path:"/checkout",meta:{layout:"main"},component:()=>ot(()=>import("./CheckOutPage-3Az-5jlx.js"),__vite__mapDeps([18,19,6,20]),import.meta.url)},{name:"user-page",path:"/user/page",meta:{layout:"main"},component:()=>ot(()=>import("./UserPage-fri7aX5V.js"),__vite__mapDeps([21,6,22]),import.meta.url)},{name:"confirm",path:"/confirm",meta:{layout:"main"},component:()=>ot(()=>import("./ConfirmPage-pPX816qL.js"),__vite__mapDeps([23,19]),import.meta.url)},{name:"thanks",path:"/thanks",meta:{layout:"main"},component:()=>ot(()=>import("./ThankPage-T9PVLa6O.js"),__vite__mapDeps([24,25]),import.meta.url)}]});function bu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bu(Object(n),!0).forEach(function(r){Me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Es(e){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Es(e)}function a4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c4(e,t,n){return t&&_u(e.prototype,t),n&&_u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dc(e,t){return u4(e)||d4(e,t)||$h(e,t)||p4()}function Ei(e){return l4(e)||f4(e)||$h(e)||h4()}function l4(e){if(Array.isArray(e))return ua(e)}function u4(e){if(Array.isArray(e))return e}function f4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function d4(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function $h(e,t){if(e){if(typeof e=="string")return ua(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ua(e,t)}}function ua(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var wu=function(){},hc={},Uh={},Bh=null,Hh={mark:wu,measure:wu};try{typeof window<"u"&&(hc=window),typeof document<"u"&&(Uh=document),typeof MutationObserver<"u"&&(Bh=MutationObserver),typeof performance<"u"&&(Hh=performance)}catch{}var m4=hc.navigator||{},Eu=m4.userAgent,Cu=Eu===void 0?"":Eu,_n=hc,Ce=Uh,Su=Bh,Ni=Hh;_n.document;var qt=!!Ce.documentElement&&!!Ce.head&&typeof Ce.addEventListener=="function"&&typeof Ce.createElement=="function",jh=~Cu.indexOf("MSIE")||~Cu.indexOf("Trident/"),Mi,Di,Fi,$i,Ui,Ht="___FONT_AWESOME___",fa=16,zh="fa",Vh="svg-inline--fa",zn="data-fa-i2svg",da="data-fa-pseudo-element",g4="data-fa-pseudo-element-pending",pc="data-prefix",mc="data-icon",Iu="fontawesome-i2svg",v4="async",y4=["HTML","HEAD","STYLE","SCRIPT"],Wh=function(){try{return!0}catch{return!1}}(),_e="classic",Te="sharp",gc=[_e,Te];function Ci(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[_e]}})}var si=Ci((Mi={},Me(Mi,_e,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Me(Mi,Te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Mi)),oi=Ci((Di={},Me(Di,_e,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Me(Di,Te,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Di)),ai=Ci((Fi={},Me(Fi,_e,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Me(Fi,Te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Fi)),b4=Ci(($i={},Me($i,_e,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Me($i,Te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),$i)),_4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,qh="fa-layers-text",w4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,E4=Ci((Ui={},Me(Ui,_e,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Me(Ui,Te,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ui)),Kh=[1,2,3,4,5,6,7,8,9,10],C4=Kh.concat([11,12,13,14,15,16,17,18,19,20]),S4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ln={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ci=new Set;Object.keys(oi[_e]).map(ci.add.bind(ci));Object.keys(oi[Te]).map(ci.add.bind(ci));var I4=[].concat(gc,Ei(ci),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ln.GROUP,Ln.SWAP_OPACITY,Ln.PRIMARY,Ln.SECONDARY]).concat(Kh.map(function(e){return"".concat(e,"x")})).concat(C4.map(function(e){return"w-".concat(e)})),Vr=_n.FontAwesomeConfig||{};function k4(e){var t=Ce.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function T4(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Ce&&typeof Ce.querySelector=="function"){var A4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];A4.forEach(function(e){var t=dc(e,2),n=t[0],r=t[1],i=T4(k4(n));i!=null&&(Vr[r]=i)})}var Gh={styleDefault:"solid",familyDefault:"classic",cssPrefix:zh,replacementClass:Vh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vr.familyPrefix&&(Vr.cssPrefix=Vr.familyPrefix);var yr=F(F({},Gh),Vr);yr.autoReplaceSvg||(yr.observeMutations=!1);var V={};Object.keys(Gh).forEach(function(e){Object.defineProperty(V,e,{enumerable:!0,set:function(n){yr[e]=n,Wr.forEach(function(r){return r(V)})},get:function(){return yr[e]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(t){yr.cssPrefix=t,Wr.forEach(function(n){return n(V)})},get:function(){return yr.cssPrefix}});_n.FontAwesomeConfig=V;var Wr=[];function x4(e){return Wr.push(e),function(){Wr.splice(Wr.indexOf(e),1)}}var en=fa,Ct={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function P4(e){if(!(!e||!qt)){var t=Ce.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Ce.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ce.head.insertBefore(t,r),e}}var O4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function li(){for(var e=12,t="";e-- >0;)t+=O4[Math.random()*62|0];return t}function Sr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function vc(e){return e.classList?Sr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Yh(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R4(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Yh(e[n]),'" ')},"").trim()}function no(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function yc(e){return e.size!==Ct.size||e.x!==Ct.x||e.y!==Ct.y||e.rotate!==Ct.rotate||e.flipX||e.flipY}function L4(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function N4(e){var t=e.transform,n=e.width,r=n===void 0?fa:n,i=e.height,s=i===void 0?fa:i,o=e.startCentered,a=o===void 0?!1:o,c="";return a&&jh?c+="translate(".concat(t.x/en-r/2,"em, ").concat(t.y/en-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(t.x/en,"em), calc(-50% + ").concat(t.y/en,"em)) "):c+="translate(".concat(t.x/en,"em, ").concat(t.y/en,"em) "),c+="scale(".concat(t.size/en*(t.flipX?-1:1),", ").concat(t.size/en*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var M4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Jh(){var e=zh,t=Vh,n=V.cssPrefix,r=V.replacementClass,i=M4;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var ku=!1;function Po(){V.autoAddCss&&!ku&&(P4(Jh()),ku=!0)}var D4={mixout:function(){return{dom:{css:Jh,insertCss:Po}}},hooks:function(){return{beforeDOMElementCreation:function(){Po()},beforeI2svg:function(){Po()}}}},jt=_n||{};jt[Ht]||(jt[Ht]={});jt[Ht].styles||(jt[Ht].styles={});jt[Ht].hooks||(jt[Ht].hooks={});jt[Ht].shims||(jt[Ht].shims=[]);var ut=jt[Ht],Xh=[],F4=function e(){Ce.removeEventListener("DOMContentLoaded",e),Cs=1,Xh.map(function(t){return t()})},Cs=!1;qt&&(Cs=(Ce.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ce.readyState),Cs||Ce.addEventListener("DOMContentLoaded",F4));function $4(e){qt&&(Cs?setTimeout(e,0):Xh.push(e))}function Si(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Yh(e):"<".concat(t," ").concat(R4(r),">").concat(s.map(Si).join(""),"</").concat(t,">")}function Tu(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var U4=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},Oo=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=i!==void 0?U4(n,i):n,c,u,l;for(r===void 0?(c=1,l=t[s[0]]):(c=0,l=r);c<o;c++)u=s[c],l=a(l,t[u],u,t);return l};function B4(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ha(e){var t=B4(e);return t.length===1?t[0].toString(16):null}function H4(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Au(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function pa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Au(t);typeof ut.hooks.addPack=="function"&&!i?ut.hooks.addPack(e,Au(t)):ut.styles[e]=F(F({},ut.styles[e]||{}),s),e==="fas"&&pa("fa",t)}var Bi,Hi,ji,tr=ut.styles,j4=ut.shims,z4=(Bi={},Me(Bi,_e,Object.values(ai[_e])),Me(Bi,Te,Object.values(ai[Te])),Bi),bc=null,Qh={},Zh={},ep={},tp={},np={},V4=(Hi={},Me(Hi,_e,Object.keys(si[_e])),Me(Hi,Te,Object.keys(si[Te])),Hi);function W4(e){return~I4.indexOf(e)}function q4(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!W4(i)?i:null}var rp=function(){var t=function(s){return Oo(tr,function(o,a,c){return o[c]=Oo(a,s,{}),o},{})};Qh=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),Zh=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),np=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in tr||V.autoFetchSvg,r=Oo(j4,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});ep=r.names,tp=r.unicodes,bc=ro(V.styleDefault,{family:V.familyDefault})};x4(function(e){bc=ro(e.styleDefault,{family:V.familyDefault})});rp();function _c(e,t){return(Qh[e]||{})[t]}function K4(e,t){return(Zh[e]||{})[t]}function Nn(e,t){return(np[e]||{})[t]}function ip(e){return ep[e]||{prefix:null,iconName:null}}function G4(e){var t=tp[e],n=_c("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wn(){return bc}var wc=function(){return{prefix:null,iconName:null,rest:[]}};function ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?_e:n,i=si[r][e],s=oi[r][e]||oi[r][i],o=e in ut.styles?e:null;return s||o||null}var xu=(ji={},Me(ji,_e,Object.keys(ai[_e])),Me(ji,Te,Object.keys(ai[Te])),ji);function io(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Me(t,_e,"".concat(V.cssPrefix,"-").concat(_e)),Me(t,Te,"".concat(V.cssPrefix,"-").concat(Te)),t),o=null,a=_e;(e.includes(s[_e])||e.some(function(u){return xu[_e].includes(u)}))&&(a=_e),(e.includes(s[Te])||e.some(function(u){return xu[Te].includes(u)}))&&(a=Te);var c=e.reduce(function(u,l){var f=q4(V.cssPrefix,l);if(tr[l]?(l=z4[a].includes(l)?b4[a][l]:l,o=l,u.prefix=l):V4[a].indexOf(l)>-1?(o=l,u.prefix=ro(l,{family:a})):f?u.iconName=f:l!==V.replacementClass&&l!==s[_e]&&l!==s[Te]&&u.rest.push(l),!i&&u.prefix&&u.iconName){var d=o==="fa"?ip(u.iconName):{},m=Nn(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||m||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!tr.far&&tr.fas&&!V.autoFetchSvg&&(u.prefix="fas")}return u},wc());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===Te&&(tr.fass||V.autoFetchSvg)&&(c.prefix="fass",c.iconName=Nn(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=wn()||"fas"),c}var Y4=function(){function e(){a4(this,e),this.definitions={}}return c4(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=F(F({},n.definitions[a]||{}),o[a]),pa(a,o[a]);var c=ai[_e][a];c&&pa(c,o[a]),rp()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,u=o.icon,l=u[2];n[a]||(n[a]={}),l.length>0&&l.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][c]=u}),n}}]),e}(),Pu=[],nr={},ur={},J4=Object.keys(ur);function X4(e,t){var n=t.mixoutsTo;return Pu=e,nr={},Object.keys(ur).forEach(function(r){J4.indexOf(r)===-1&&delete ur[r]}),Pu.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Es(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){nr[o]||(nr[o]=[]),nr[o].push(s[o])})}r.provides&&r.provides(ur)}),n}function ma(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=nr[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Vn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=nr[e]||[];i.forEach(function(s){s.apply(null,n)})}function zt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ur[e]?ur[e].apply(null,t):void 0}function ga(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||wn();if(t)return t=Nn(n,t)||t,Tu(sp.definitions,n,t)||Tu(ut.styles,n,t)}var sp=new Y4,Q4=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Vn("noAuto")},Z4={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qt?(Vn("beforeI2svg",t),zt("pseudoElements2svg",t),zt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,$4(function(){tE({autoReplaceSvgRoot:n}),Vn("watch",t)})}},eE={icon:function(t){if(t===null)return null;if(Es(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Nn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ro(t[0]);return{prefix:r,iconName:Nn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(V.cssPrefix,"-"))>-1||t.match(_4))){var i=io(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||wn(),iconName:Nn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=wn();return{prefix:s,iconName:Nn(s,t)||t}}}},Qe={noAuto:Q4,config:V,dom:Z4,parse:eE,library:sp,findIconDefinition:ga,toHtml:Si},tE=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Ce:n;(Object.keys(ut.styles).length>0||V.autoFetchSvg)&&qt&&V.autoReplaceSvg&&Qe.dom.i2svg({node:r})};function so(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Si(r)})}}),Object.defineProperty(e,"node",{get:function(){if(qt){var r=Ce.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function nE(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(yc(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};i.style=no(F(F({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function rE(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(V.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:F(F({},i),{},{id:o}),children:r}]}]}function Ec(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,c=e.title,u=e.maskId,l=e.titleId,f=e.extra,d=e.watchable,m=d===void 0?!1:d,g=r.found?r:n,v=g.width,k=g.height,b=i==="fak",_=[V.replacementClass,s?"".concat(V.cssPrefix,"-").concat(s):""].filter(function(U){return f.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(f.classes).join(" "),R={children:[],attributes:F(F({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(k)})},P=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/k*16*.0625,"em")}:{};m&&(R.attributes[zn]=""),c&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(l||li())},children:[c]}),delete R.attributes.title);var j=F(F({},R),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:F(F({},P),f.styles)}),ne=r.found&&n.found?zt("generateAbstractMask",j)||{children:[],attributes:{}}:zt("generateAbstractIcon",j)||{children:[],attributes:{}},te=ne.children,M=ne.attributes;return j.children=te,j.attributes=M,a?rE(j):nE(j)}function Ou(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,c=a===void 0?!1:a,u=F(F(F({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(u[zn]="");var l=F({},o.styles);yc(i)&&(l.transform=N4({transform:i,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var f=no(l);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function iE(e){var t=e.content,n=e.title,r=e.extra,i=F(F(F({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=no(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ro=ut.styles;function va(e){var t=e[0],n=e[1],r=e.slice(4),i=dc(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(Ln.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Ln.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Ln.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var sE={found:!1,width:512,height:512};function oE(e,t){!Wh&&!V.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ya(e,t){var n=t;return t==="fa"&&V.styleDefault!==null&&(t=wn()),new Promise(function(r,i){if(zt("missingIconAbstract"),n==="fa"){var s=ip(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ro[t]&&Ro[t][e]){var o=Ro[t][e];return r(va(o))}oE(e,t),r(F(F({},sE),{},{icon:V.showMissingIcons&&e?zt("missingIconAbstract")||{}:{}}))})}var Ru=function(){},ba=V.measurePerformance&&Ni&&Ni.mark&&Ni.measure?Ni:{mark:Ru,measure:Ru},Nr='FA "6.5.1"',aE=function(t){return ba.mark("".concat(Nr," ").concat(t," begins")),function(){return op(t)}},op=function(t){ba.mark("".concat(Nr," ").concat(t," ends")),ba.measure("".concat(Nr," ").concat(t),"".concat(Nr," ").concat(t," begins"),"".concat(Nr," ").concat(t," ends"))},Cc={begin:aE,end:op},es=function(){};function Lu(e){var t=e.getAttribute?e.getAttribute(zn):null;return typeof t=="string"}function cE(e){var t=e.getAttribute?e.getAttribute(pc):null,n=e.getAttribute?e.getAttribute(mc):null;return t&&n}function lE(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(V.replacementClass)}function uE(){if(V.autoReplaceSvg===!0)return ts.replace;var e=ts[V.autoReplaceSvg];return e||ts.replace}function fE(e){return Ce.createElementNS("http://www.w3.org/2000/svg",e)}function dE(e){return Ce.createElement(e)}function ap(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?fE:dE:n;if(typeof e=="string")return Ce.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild(ap(o,{ceFn:r}))}),i}function hE(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ts={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(ap(i),n)}),n.getAttribute(zn)===null&&V.keepOriginalSource){var r=Ce.createComment(hE(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~vc(n).indexOf(V.replacementClass))return ts.replace(t);var i=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===V.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Si(a)}).join(`
`);n.setAttribute(zn,""),n.innerHTML=o}};function Nu(e){e()}function cp(e,t){var n=typeof t=="function"?t:es;if(e.length===0)n();else{var r=Nu;V.mutateApproach===v4&&(r=_n.requestAnimationFrame||Nu),r(function(){var i=uE(),s=Cc.begin("mutate");e.map(i),s(),n()})}}var Sc=!1;function lp(){Sc=!0}function _a(){Sc=!1}var Ss=null;function Mu(e){if(Su&&V.observeMutations){var t=e.treeCallback,n=t===void 0?es:t,r=e.nodeCallback,i=r===void 0?es:r,s=e.pseudoElementsCallback,o=s===void 0?es:s,a=e.observeMutationsRoot,c=a===void 0?Ce:a;Ss=new Su(function(u){if(!Sc){var l=wn();Sr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Lu(f.addedNodes[0])&&(V.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&V.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Lu(f.target)&&~S4.indexOf(f.attributeName))if(f.attributeName==="class"&&cE(f.target)){var d=io(vc(f.target)),m=d.prefix,g=d.iconName;f.target.setAttribute(pc,m||l),g&&f.target.setAttribute(mc,g)}else lE(f.target)&&i(f.target)})}}),qt&&Ss.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pE(){Ss&&Ss.disconnect()}function mE(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function gE(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=io(vc(e));return i.prefix||(i.prefix=wn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=K4(i.prefix,e.innerText)||_c(i.prefix,ha(e.innerText))),!i.iconName&&V.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function vE(e){var t=Sr(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return V.autoA11y&&(n?t["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||li()):(t["aria-hidden"]="true",t.focusable="false")),t}function yE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ct,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Du(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gE(e),r=n.iconName,i=n.prefix,s=n.rest,o=vE(e),a=ma("parseNodeAttributes",{},e),c=t.styleParser?mE(e):[];return F({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ct,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var bE=ut.styles;function up(e){var t=V.autoReplaceSvg==="nest"?Du(e,{styleParser:!1}):Du(e);return~t.extra.classes.indexOf(qh)?zt("generateLayersText",e,t):zt("generateSvgReplacementMutation",e,t)}var En=new Set;gc.map(function(e){En.add("fa-".concat(e))});Object.keys(si[_e]).map(En.add.bind(En));Object.keys(si[Te]).map(En.add.bind(En));En=Ei(En);function Fu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qt)return Promise.resolve();var n=Ce.documentElement.classList,r=function(f){return n.add("".concat(Iu,"-").concat(f))},i=function(f){return n.remove("".concat(Iu,"-").concat(f))},s=V.autoFetchSvg?En:gc.map(function(l){return"fa-".concat(l)}).concat(Object.keys(bE));s.includes("fa")||s.push("fa");var o=[".".concat(qh,":not([").concat(zn,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(zn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Sr(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Cc.begin("onTree"),u=a.reduce(function(l,f){try{var d=up(f);d&&l.push(d)}catch(m){Wh||m.name==="MissingIcon"&&console.error(m)}return l},[]);return new Promise(function(l,f){Promise.all(u).then(function(d){cp(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),l()})}).catch(function(d){c(),f(d)})})}function _E(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;up(e).then(function(n){n&&cp([n],t)})}function wE(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ga(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ga(i||{})),e(r,F(F({},n),{},{mask:i}))}}var EE=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ct:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,u=n.maskId,l=u===void 0?null:u,f=n.title,d=f===void 0?null:f,m=n.titleId,g=m===void 0?null:m,v=n.classes,k=v===void 0?[]:v,b=n.attributes,_=b===void 0?{}:b,R=n.styles,P=R===void 0?{}:R;if(t){var j=t.prefix,ne=t.iconName,te=t.icon;return so(F({type:"icon"},t),function(){return Vn("beforeDOMElementCreation",{iconDefinition:t,params:n}),V.autoA11y&&(d?_["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(g||li()):(_["aria-hidden"]="true",_.focusable="false")),Ec({icons:{main:va(te),mask:c?va(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:j,iconName:ne,transform:F(F({},Ct),i),symbol:o,title:d,maskId:l,titleId:g,extra:{attributes:_,styles:P,classes:k}})})}},CE={mixout:function(){return{icon:wE(EE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fu,n.nodeCallback=_E,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Ce:r,s=n.callback,o=s===void 0?function(){}:s;return Fu(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,u=r.symbol,l=r.mask,f=r.maskId,d=r.extra;return new Promise(function(m,g){Promise.all([ya(i,a),l.iconName?ya(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var k=dc(v,2),b=k[0],_=k[1];m([n,Ec({icons:{main:b,mask:_},prefix:a,iconName:i,transform:c,symbol:u,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=no(a);c.length>0&&(i.style=c);var u;return yc(o)&&(u=zt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},SE={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return so({type:"layer"},function(){Vn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(Ei(s)).join(" ")},children:o}]})}}}},IE={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,l=r.styles,f=l===void 0?{}:l;return so({type:"counter",content:n},function(){return Vn("beforeDOMElementCreation",{content:n,params:r}),iE({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(Ei(a))}})})}}}},kE={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Ct:i,o=r.title,a=o===void 0?null:o,c=r.classes,u=c===void 0?[]:c,l=r.attributes,f=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return so({type:"text",content:n},function(){return Vn("beforeDOMElementCreation",{content:n,params:r}),Ou({content:n,transform:F(F({},Ct),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(V.cssPrefix,"-layers-text")].concat(Ei(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(jh){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();a=l.width/u,c=l.height/u}return V.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ou({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},TE=new RegExp('"',"ug"),$u=[1105920,1112319];function AE(e){var t=e.replace(TE,""),n=H4(t,0),r=n>=$u[0]&&n<=$u[1],i=t.length===2?t[0]===t[1]:!1;return{value:ha(i?t[0]:t),isSecondary:r||i}}function Uu(e,t){var n="".concat(g4).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Sr(e.children),o=s.filter(function(te){return te.getAttribute(da)===t})[0],a=_n.getComputedStyle(e,t),c=a.getPropertyValue("font-family").match(w4),u=a.getPropertyValue("font-weight"),l=a.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&l!=="none"&&l!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?Te:_e,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?oi[d][c[2].toLowerCase()]:E4[d][u],g=AE(f),v=g.value,k=g.isSecondary,b=c[0].startsWith("FontAwesome"),_=_c(m,v),R=_;if(b){var P=G4(v);P.iconName&&P.prefix&&(_=P.iconName,m=P.prefix)}if(_&&!k&&(!o||o.getAttribute(pc)!==m||o.getAttribute(mc)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var j=yE(),ne=j.extra;ne.attributes[da]=t,ya(_,m).then(function(te){var M=Ec(F(F({},j),{},{icons:{main:te,mask:wc()},prefix:m,iconName:R,extra:ne,watchable:!0})),U=Ce.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=M.map(function(X){return Si(X)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function xE(e){return Promise.all([Uu(e,"::before"),Uu(e,"::after")])}function PE(e){return e.parentNode!==document.head&&!~y4.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(da)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Bu(e){if(qt)return new Promise(function(t,n){var r=Sr(e.querySelectorAll("*")).filter(PE).map(xE),i=Cc.begin("searchPseudoElements");lp(),Promise.all(r).then(function(){i(),_a(),t()}).catch(function(){i(),_a(),n()})})}var OE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Bu,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ce:r;V.searchPseudoElements&&Bu(i)}}},Hu=!1,RE={mixout:function(){return{dom:{unwatch:function(){lp(),Hu=!0}}}},hooks:function(){return{bootstrap:function(){Mu(ma("mutationObserverCallbacks",{}))},noAuto:function(){pE()},watch:function(n){var r=n.observeMutationsRoot;Hu?_a():Mu(ma("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ju=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},LE={mixout:function(){return{parse:{transform:function(n){return ju(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=ju(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(u," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:d};return{tag:"g",attributes:F({},m.outer),children:[{tag:"g",attributes:F({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:F(F({},r.icon.attributes),m.path)}]}]}}}},Lo={x:0,y:0,width:"100%",height:"100%"};function zu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function NE(e){return e.tag==="g"?e.children:[e]}var ME={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?io(i.split(" ").map(function(o){return o.trim()})):wc();return s.prefix||(s.prefix=wn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,u=s.width,l=s.icon,f=o.width,d=o.icon,m=L4({transform:c,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:F(F({},Lo),{},{fill:"white"})},v=l.children?{children:l.children.map(zu)}:{},k={tag:"g",attributes:F({},m.inner),children:[zu(F({tag:l.tag,attributes:F(F({},l.attributes),m.path)},v))]},b={tag:"g",attributes:F({},m.outer),children:[k]},_="mask-".concat(a||li()),R="clip-".concat(a||li()),P={tag:"mask",attributes:F(F({},Lo),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,b]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:NE(d)},P]};return r.push(j,{tag:"rect",attributes:F({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(_,")")},Lo)}),{children:r,attributes:i}}}},DE={provides:function(t){var n=!1;_n.matchMedia&&(n=_n.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:F(F({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=F(F({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:F(F({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:F(F({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:F(F({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:F(F({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:F(F({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:F(F({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:F(F({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},FE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},$E=[D4,CE,SE,IE,kE,OE,RE,LE,ME,DE,FE];X4($E,{mixoutsTo:Qe});Qe.noAuto;Qe.config;var UE=Qe.library;Qe.dom;var wa=Qe.parse;Qe.findIconDefinition;Qe.toHtml;var BE=Qe.icon;Qe.layer;Qe.text;Qe.counter;function Vu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vu(Object(n),!0).forEach(function(r){qe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Is(e){"@babel/helpers - typeof";return Is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Is(e)}function qe(e,t,n){return t=VE(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function HE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function jE(e,t){if(e==null)return{};var n=HE(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zE(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function VE(e){var t=zE(e,"string");return typeof t=="symbol"?t:String(t)}var WE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fp={exports:{}};(function(e){(function(t){var n=function(b,_,R){if(!u(_)||f(_)||d(_)||m(_)||c(_))return _;var P,j=0,ne=0;if(l(_))for(P=[],ne=_.length;j<ne;j++)P.push(n(b,_[j],R));else{P={};for(var te in _)Object.prototype.hasOwnProperty.call(_,te)&&(P[b(te,R)]=n(b,_[te],R))}return P},r=function(b,_){_=_||{};var R=_.separator||"_",P=_.split||/(?=[A-Z])/;return b.split(P).join(R)},i=function(b){return g(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(_,R){return R?R.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var _=i(b);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(b,_){return r(b,_).toLowerCase()},a=Object.prototype.toString,c=function(b){return typeof b=="function"},u=function(b){return b===Object(b)},l=function(b){return a.call(b)=="[object Array]"},f=function(b){return a.call(b)=="[object Date]"},d=function(b){return a.call(b)=="[object RegExp]"},m=function(b){return a.call(b)=="[object Boolean]"},g=function(b){return b=b-0,b===b},v=function(b,_){var R=_&&"process"in _?_.process:_;return typeof R!="function"?b:function(P,j){return R(P,b,j)}},k={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(b,_){return n(v(i,_),b)},decamelizeKeys:function(b,_){return n(v(o,_),b,_)},pascalizeKeys:function(b,_){return n(v(s,_),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=k:t.humps=k})(WE)})(fp);var qE=fp.exports,KE=["class","style"];function GE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=qE.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function YE(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function dp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return dp(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,u){var l=e.attributes[u];switch(u){case"class":c.class=YE(l);break;case"style":c.style=GE(l);break;default:c.attrs[u]=l}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=jE(n,KE);return Us(e.tag,Nt(Nt(Nt({},t),{},{class:i.class,style:Nt(Nt({},i.style),o)},i.attrs),a),r)}var hp=!1;try{hp=!0}catch{}function JE(){if(!hp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function No(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?qe({},e,t):{}}function XE(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},qe(t,"fa-".concat(e.size),e.size!==null),qe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),qe(t,"fa-pull-".concat(e.pull),e.pull!==null),qe(t,"fa-swap-opacity",e.swapOpacity),qe(t,"fa-bounce",e.bounce),qe(t,"fa-shake",e.shake),qe(t,"fa-beat",e.beat),qe(t,"fa-fade",e.fade),qe(t,"fa-beat-fade",e.beatFade),qe(t,"fa-flash",e.flash),qe(t,"fa-spin-pulse",e.spinPulse),qe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Wu(e){if(e&&Is(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(wa.icon)return wa.icon(e);if(e===null)return null;if(Is(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var QE=Ua({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=Ee(function(){return Wu(t.icon)}),s=Ee(function(){return No("classes",XE(t))}),o=Ee(function(){return No("transform",typeof t.transform=="string"?wa.transform(t.transform):t.transform)}),a=Ee(function(){return No("mask",Wu(t.mask))}),c=Ee(function(){return BE(i.value,Nt(Nt(Nt(Nt({},s.value),o.value),a.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Dn(c,function(l){if(!l)return JE("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var u=Ee(function(){return c.value?dp(c.value.abstract[0],{},r):null});return function(){return u.value}}}),ZE={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},e6={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};UE.add(e6,ZE);const mt=j1(bv);mt.component("empty-layout",Bv);mt.component("main-layout",Z3);mt.component("ContainerBlock",r4);mt.component("ButtonItem",Cv);mt.component("InputGroup",Tv);mt.component("RadioGroup",Rv);mt.component("TextAreaGroup",Dv);mt.component("SuccessPopUp",Dh);mt.component("ErrorPopUp",Fh);mt.component("font-awesome-icon",QE);mt.use(o4).use(W1()).mount("#app");export{fi as $,as as A,us as B,er as C,uw as D,r6 as E,we as F,ke as G,Ie as H,Bd as I,Wn as J,qn as K,eg as L,pi as M,wt as N,n6 as O,Zs as P,js as Q,yv as R,h3 as S,R1 as T,o4 as U,Bs as V,Mh as W,Gf as X,Of as Y,Ne as Z,Fe as _,J as a,dn as a0,fr as a1,tt as a2,Ur as b,$ as c,ge as d,Lf as e,Dn as f,Rf as g,Nf as h,Us as i,Sm as j,Ee as k,ka as l,x as m,Na as n,A as o,Fr as p,Re as q,ft as r,yn as s,Se as t,ee as u,Xm as v,Xe as w,ec as x,t6 as y,Ue as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./HomePage-Xh2JEMUW.js","./ProductItem-Kb3aXWwc.js","./ProductItem-LrONpSoB.css","./HomePage-oBP4377j.css","./RegisterPage-8Jobt905.js","./authValidations-FMsfjMo2.js","./index-zH42Ky3_.js","./TipsElement-p01s5i2R.js","./TipsElement-LoqjZZwu.css","./RegisterPage-3m6q21TB.css","./LoginPage-ymqGU6mc.js","./LoginPage-hF-xJ2Hf.css","./RememberPage-mNWVSoQ8.js","./RememberPage-BAH9PlQD.css","./CategoryPage-klF48Y0J.js","./CategoryPage-JO-cnUb-.css","./ProductPage-vlYYxcoL.js","./ProductPage-unBpUBac.css","./CheckOutPage-3Az-5jlx.js","./orderInfo-OfSssCMN.js","./CheckOutPage-NHqPdlhd.css","./UserPage-fri7aX5V.js","./UserPage-YVuqGV6d.css","./ConfirmPage-pPX816qL.js","./ThankPage-T9PVLa6O.js","./ThankPage-KGlmDs3G.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}