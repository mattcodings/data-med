(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kd(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const je={},ws=[],In=()=>{},kC=()=>!1,NC=/^on[^a-z]/,ru=t=>NC.test(t),Nd=t=>t.startsWith("onUpdate:"),Rt=Object.assign,xd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xC=Object.prototype.hasOwnProperty,Oe=(t,e)=>xC.call(t,e),le=Array.isArray,bs=t=>Da(t)==="[object Map]",iu=t=>Da(t)==="[object Set]",Pg=t=>Da(t)==="[object Date]",ge=t=>typeof t=="function",dt=t=>typeof t=="string",ra=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Bv=t=>(Ue(t)||ge(t))&&ge(t.then)&&ge(t.catch),jv=Object.prototype.toString,Da=t=>jv.call(t),DC=t=>Da(t).slice(8,-1),Hv=t=>Da(t)==="[object Object]",Dd=t=>dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xc=kd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),su=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},LC=/-(\w)/g,Yn=su(t=>t.replace(LC,(e,n)=>n?n.toUpperCase():"")),MC=/\B([A-Z])/g,to=su(t=>t.replace(MC,"-$1").toLowerCase()),ou=su(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ph=su(t=>t?`on${ou(t)}`:""),Mi=(t,e)=>!Object.is(t,e),Jc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gf=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Og;const _f=()=>Og||(Og=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function au(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=dt(r)?UC(r):au(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(dt(t)||Ue(t))return t}const VC=/;(?![^(]*\))/g,FC=/:([^]+)/,$C=/\/\*[^]*?\*\//g;function UC(t){const e={};return t.replace($C,"").split(VC).forEach(n=>{if(n){const r=n.split(FC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function no(t){let e="";if(dt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=no(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const BC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jC=kd(BC);function zv(t){return!!t||t===""}function HC(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=cu(t[r],e[r]);return n}function cu(t,e){if(t===e)return!0;let n=Pg(t),r=Pg(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=ra(t),r=ra(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?HC(t,e):!1;if(n=Ue(t),r=Ue(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!cu(t[o],e[o]))return!1}}return String(t)===String(e)}function qv(t,e){return t.findIndex(n=>cu(n,e))}const Me=t=>dt(t)?t:t==null?"":le(t)||Ue(t)&&(t.toString===jv||!ge(t.toString))?JSON.stringify(t,Wv,2):String(t),Wv=(t,e)=>e&&e.__v_isRef?Wv(t,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:iu(e)?{[`Set(${e.size})`]:[...e.values()]}:Ue(e)&&!le(e)&&!Hv(e)?String(e):e;let wn;class zC{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wn,!e&&wn&&(this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=wn;try{return wn=this,e()}finally{wn=n}}}on(){wn=this}off(){wn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function qC(t,e=wn){e&&e.active&&e.effects.push(t)}function WC(){return wn}const Ld=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Kv=t=>(t.w&Gr)>0,Gv=t=>(t.n&Gr)>0,KC=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Gr},GC=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Kv(i)&&!Gv(i)?i.delete(t):e[n++]=i,i.w&=~Gr,i.n&=~Gr}e.length=n}},yf=new WeakMap;let Po=0,Gr=1;const vf=30;let bn;const Pi=Symbol(""),Ef=Symbol("");class Md{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qC(this,r)}run(){if(!this.active)return this.fn();let e=bn,n=Hr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bn,bn=this,Hr=!0,Gr=1<<++Po,Po<=vf?KC(this):kg(this),this.fn()}finally{Po<=vf&&GC(this),Gr=1<<--Po,bn=this.parent,Hr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bn===this?this.deferStop=!0:this.active&&(kg(this),this.onStop&&this.onStop(),this.active=!1)}}function kg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Hr=!0;const Yv=[];function ro(){Yv.push(Hr),Hr=!1}function io(){const t=Yv.pop();Hr=t===void 0?!0:t}function tn(t,e,n){if(Hr&&bn){let r=yf.get(t);r||yf.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Ld()),Qv(i)}}function Qv(t,e){let n=!1;Po<=vf?Gv(t)||(t.n|=Gr,n=!Kv(t)):n=!t.has(bn),n&&(t.add(bn),bn.deps.push(t))}function fr(t,e,n,r,i,s){const o=yf.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&le(t)){const c=Number(r);o.forEach((l,h)=>{(h==="length"||h>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":le(t)?Dd(n)&&a.push(o.get("length")):(a.push(o.get(Pi)),bs(t)&&a.push(o.get(Ef)));break;case"delete":le(t)||(a.push(o.get(Pi)),bs(t)&&a.push(o.get(Ef)));break;case"set":bs(t)&&a.push(o.get(Pi));break}if(a.length===1)a[0]&&wf(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);wf(Ld(c))}}function wf(t,e){const n=le(t)?t:[...t];for(const r of n)r.computed&&Ng(r);for(const r of n)r.computed||Ng(r)}function Ng(t,e){(t!==bn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const YC=kd("__proto__,__v_isRef,__isVue"),Xv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ra)),xg=QC();function QC(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=xe(this);for(let s=0,o=this.length;s<o;s++)tn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(xe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ro();const r=xe(this)[e].apply(this,n);return io(),r}}),t}function XC(t){const e=xe(this);return tn(e,"has",t),e.hasOwnProperty(t)}class Jv{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&r===(i?s?uR:nE:s?tE:eE).get(e))return e;const o=le(e);if(!i){if(o&&Oe(xg,n))return Reflect.get(xg,n,r);if(n==="hasOwnProperty")return XC}const a=Reflect.get(e,n,r);return(ra(n)?Xv.has(n):YC(n))||(i||tn(e,"get",n),s)?a:Mt(a)?o&&Dd(n)?a:a.value:Ue(a)?i?iE(a):uu(a):a}}class Zv extends Jv{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(xs(s)&&Mt(s)&&!Mt(r))return!1;if(!this._shallow&&(!El(r)&&!xs(r)&&(s=xe(s),r=xe(r)),!le(e)&&Mt(s)&&!Mt(r)))return s.value=r,!0;const o=le(e)&&Dd(n)?Number(n)<e.length:Oe(e,n),a=Reflect.set(e,n,r,i);return e===xe(i)&&(o?Mi(r,s)&&fr(e,"set",n,r):fr(e,"add",n,r)),a}deleteProperty(e,n){const r=Oe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&fr(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!ra(n)||!Xv.has(n))&&tn(e,"has",n),r}ownKeys(e){return tn(e,"iterate",le(e)?"length":Pi),Reflect.ownKeys(e)}}class JC extends Jv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ZC=new Zv,eR=new JC,tR=new Zv(!0),Vd=t=>t,lu=t=>Reflect.getPrototypeOf(t);function Tc(t,e,n=!1,r=!1){t=t.__v_raw;const i=xe(t),s=xe(e);n||(Mi(e,s)&&tn(i,"get",e),tn(i,"get",s));const{has:o}=lu(i),a=r?Vd:n?Ud:ia;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Ac(t,e=!1){const n=this.__v_raw,r=xe(n),i=xe(t);return e||(Mi(t,i)&&tn(r,"has",t),tn(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ic(t,e=!1){return t=t.__v_raw,!e&&tn(xe(t),"iterate",Pi),Reflect.get(t,"size",t)}function Dg(t){t=xe(t);const e=xe(this);return lu(e).has.call(e,t)||(e.add(t),fr(e,"add",t,t)),this}function Lg(t,e){e=xe(e);const n=xe(this),{has:r,get:i}=lu(n);let s=r.call(n,t);s||(t=xe(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Mi(e,o)&&fr(n,"set",t,e):fr(n,"add",t,e),this}function Mg(t){const e=xe(this),{has:n,get:r}=lu(e);let i=n.call(e,t);i||(t=xe(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&fr(e,"delete",t,void 0),s}function Vg(){const t=xe(this),e=t.size!==0,n=t.clear();return e&&fr(t,"clear",void 0,void 0),n}function Sc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=xe(o),c=e?Vd:t?Ud:ia;return!t&&tn(a,"iterate",Pi),o.forEach((l,h)=>r.call(i,c(l),c(h),s))}}function Cc(t,e,n){return function(...r){const i=this.__v_raw,s=xe(i),o=bs(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),h=n?Vd:e?Ud:ia;return!e&&tn(s,"iterate",c?Ef:Pi),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function Or(t){return function(...e){return t==="delete"?!1:this}}function nR(){const t={get(s){return Tc(this,s)},get size(){return Ic(this)},has:Ac,add:Dg,set:Lg,delete:Mg,clear:Vg,forEach:Sc(!1,!1)},e={get(s){return Tc(this,s,!1,!0)},get size(){return Ic(this)},has:Ac,add:Dg,set:Lg,delete:Mg,clear:Vg,forEach:Sc(!1,!0)},n={get(s){return Tc(this,s,!0)},get size(){return Ic(this,!0)},has(s){return Ac.call(this,s,!0)},add:Or("add"),set:Or("set"),delete:Or("delete"),clear:Or("clear"),forEach:Sc(!0,!1)},r={get(s){return Tc(this,s,!0,!0)},get size(){return Ic(this,!0)},has(s){return Ac.call(this,s,!0)},add:Or("add"),set:Or("set"),delete:Or("delete"),clear:Or("clear"),forEach:Sc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Cc(s,!1,!1),n[s]=Cc(s,!0,!1),e[s]=Cc(s,!1,!0),r[s]=Cc(s,!0,!0)}),[t,n,e,r]}const[rR,iR,sR,oR]=nR();function Fd(t,e){const n=e?t?oR:sR:t?iR:rR;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Oe(n,i)&&i in r?n:r,i,s)}const aR={get:Fd(!1,!1)},cR={get:Fd(!1,!0)},lR={get:Fd(!0,!1)},eE=new WeakMap,tE=new WeakMap,nE=new WeakMap,uR=new WeakMap;function hR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fR(t){return t.__v_skip||!Object.isExtensible(t)?0:hR(DC(t))}function uu(t){return xs(t)?t:$d(t,!1,ZC,aR,eE)}function rE(t){return $d(t,!1,tR,cR,tE)}function iE(t){return $d(t,!0,eR,lR,nE)}function $d(t,e,n,r,i){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=fR(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Ts(t){return xs(t)?Ts(t.__v_raw):!!(t&&t.__v_isReactive)}function xs(t){return!!(t&&t.__v_isReadonly)}function El(t){return!!(t&&t.__v_isShallow)}function sE(t){return Ts(t)||xs(t)}function xe(t){const e=t&&t.__v_raw;return e?xe(e):t}function oE(t){return vl(t,"__v_skip",!0),t}const ia=t=>Ue(t)?uu(t):t,Ud=t=>Ue(t)?iE(t):t;function aE(t){Hr&&bn&&(t=xe(t),Qv(t.dep||(t.dep=Ld())))}function cE(t,e){t=xe(t);const n=t.dep;n&&wf(n)}function Mt(t){return!!(t&&t.__v_isRef===!0)}function Qe(t){return lE(t,!1)}function dR(t){return lE(t,!0)}function lE(t,e){return Mt(t)?t:new pR(t,e)}class pR{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:xe(e),this._value=n?e:ia(e)}get value(){return aE(this),this._value}set value(e){const n=this.__v_isShallow||El(e)||xs(e);e=n?e:xe(e),Mi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ia(e),cE(this))}}function As(t){return Mt(t)?t.value:t}const mR={get:(t,e,n)=>As(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Mt(i)&&!Mt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function uE(t){return Ts(t)?t:new Proxy(t,mR)}class gR{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Md(e,()=>{this._dirty||(this._dirty=!0,cE(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=xe(this);return aE(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _R(t,e,n=!1){let r,i;const s=ge(t);return s?(r=t,i=In):(r=t.get,i=t.set),new gR(r,i,s||!i,n)}function zr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){hu(s,e,n)}return i}function Sn(t,e,n,r){if(ge(t)){const s=zr(t,e,n,r);return s&&Bv(s)&&s.catch(o=>{hu(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Sn(t[s],e,n,r));return i}function hu(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let h=0;h<l.length;h++)if(l[h](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){zr(c,null,10,[t,o,a]);return}}yR(t,n,i,r)}function yR(t,e,n,r=!0){console.error(t)}let sa=!1,bf=!1;const Lt=[];let Dn=0;const Is=[];let ar=null,Ei=0;const hE=Promise.resolve();let Bd=null;function fE(t){const e=Bd||hE;return t?e.then(this?t.bind(this):t):e}function vR(t){let e=Dn+1,n=Lt.length;for(;e<n;){const r=e+n>>>1;oa(Lt[r])<t?e=r+1:n=r}return e}function jd(t){(!Lt.length||!Lt.includes(t,sa&&t.allowRecurse?Dn+1:Dn))&&(t.id==null?Lt.push(t):Lt.splice(vR(t.id),0,t),dE())}function dE(){!sa&&!bf&&(bf=!0,Bd=hE.then(mE))}function ER(t){const e=Lt.indexOf(t);e>Dn&&Lt.splice(e,1)}function wR(t){le(t)?Is.push(...t):(!ar||!ar.includes(t,t.allowRecurse?Ei+1:Ei))&&Is.push(t),dE()}function Fg(t,e=sa?Dn+1:0){for(;e<Lt.length;e++){const n=Lt[e];n&&n.pre&&(Lt.splice(e,1),e--,n())}}function pE(t){if(Is.length){const e=[...new Set(Is)];if(Is.length=0,ar){ar.push(...e);return}for(ar=e,ar.sort((n,r)=>oa(n)-oa(r)),Ei=0;Ei<ar.length;Ei++)ar[Ei]();ar=null,Ei=0}}const oa=t=>t.id==null?1/0:t.id,bR=(t,e)=>{const n=oa(t)-oa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mE(t){bf=!1,sa=!0,Lt.sort(bR);const e=In;try{for(Dn=0;Dn<Lt.length;Dn++){const n=Lt[Dn];n&&n.active!==!1&&zr(n,null,14)}}finally{Dn=0,Lt.length=0,pE(),sa=!1,Bd=null,(Lt.length||Is.length)&&mE()}}function TR(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||je;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[h]||je;p&&(i=n.map(m=>dt(m)?m.trim():m)),f&&(i=n.map(gf))}let a,c=r[a=Ph(e)]||r[a=Ph(Yn(e))];!c&&s&&(c=r[a=Ph(to(e))]),c&&Sn(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Sn(l,t,6,i)}}function gE(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ge(t)){const c=l=>{const h=gE(l,e,!0);h&&(a=!0,Rt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Ue(t)&&r.set(t,null),null):(le(s)?s.forEach(c=>o[c]=null):Rt(o,s),Ue(t)&&r.set(t,o),o)}function fu(t,e){return!t||!ru(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,to(e))||Oe(t,e))}let Vt=null,du=null;function wl(t){const e=Vt;return Vt=t,du=t&&t.type.__scopeId||null,e}function er(t){du=t}function tr(){du=null}function Mn(t,e=Vt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Yg(-1);const s=wl(e);let o;try{o=t(...i)}finally{wl(s),r._d&&Yg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Oh(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:h,renderCache:f,data:p,setupState:m,ctx:v,inheritAttrs:w}=t;let T,b;const A=wl(t);try{if(n.shapeFlag&4){const S=i||r;T=xn(h.call(S,S,f,s,m,p,v)),b=c}else{const S=e;T=xn(S.length>1?S(s,{attrs:c,slots:a,emit:l}):S(s,null)),b=e.props?c:AR(c)}}catch(S){Ho.length=0,hu(S,t,1),T=we(Yr)}let N=T;if(b&&w!==!1){const S=Object.keys(b),{shapeFlag:j}=N;S.length&&j&7&&(o&&S.some(Nd)&&(b=IR(b,o)),N=Ds(N,b))}return n.dirs&&(N=Ds(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),T=N,wl(A),T}const AR=t=>{let e;for(const n in t)(n==="class"||n==="style"||ru(n))&&((e||(e={}))[n]=t[n]);return e},IR=(t,e)=>{const n={};for(const r in t)(!Nd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function SR(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$g(r,o,l):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!fu(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$g(r,o,l):!0:!!o;return!1}function $g(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!fu(n,s))return!0}return!1}function CR({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const RR=t=>t.__isSuspense;function PR(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):wR(t)}const Rc={};function $o(t,e,n){return _E(t,e,n)}function _E(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=je){var a;const c=WC()===((a=At)==null?void 0:a.scope)?At:null;let l,h=!1,f=!1;if(Mt(t)?(l=()=>t.value,h=El(t)):Ts(t)?(l=()=>t,r=!0):le(t)?(f=!0,h=t.some(S=>Ts(S)||El(S)),l=()=>t.map(S=>{if(Mt(S))return S.value;if(Ts(S))return Ti(S);if(ge(S))return zr(S,c,2)})):ge(t)?e?l=()=>zr(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Sn(t,c,3,[m])}:l=In,e&&r){const S=l;l=()=>Ti(S())}let p,m=S=>{p=A.onStop=()=>{zr(S,c,4)}},v;if(ca)if(m=In,e?n&&Sn(e,c,3,[l(),f?[]:void 0,m]):l(),i==="sync"){const S=wP();v=S.__watcherHandles||(S.__watcherHandles=[])}else return In;let w=f?new Array(t.length).fill(Rc):Rc;const T=()=>{if(A.active)if(e){const S=A.run();(r||h||(f?S.some((j,G)=>Mi(j,w[G])):Mi(S,w)))&&(p&&p(),Sn(e,c,3,[S,w===Rc?void 0:f&&w[0]===Rc?[]:w,m]),w=S)}else A.run()};T.allowRecurse=!!e;let b;i==="sync"?b=T:i==="post"?b=()=>Jt(T,c&&c.suspense):(T.pre=!0,c&&(T.id=c.uid),b=()=>jd(T));const A=new Md(l,b);e?n?T():w=A.run():i==="post"?Jt(A.run.bind(A),c&&c.suspense):A.run();const N=()=>{A.stop(),c&&c.scope&&xd(c.scope.effects,A)};return v&&v.push(N),N}function OR(t,e,n){const r=this.proxy,i=dt(t)?t.includes(".")?yE(r,t):()=>r[t]:t.bind(r,r);let s;ge(e)?s=e:(s=e.handler,n=e);const o=At;Ls(this);const a=_E(i,s.bind(r),n);return o?Ls(o):ki(),a}function yE(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ti(t,e){if(!Ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Mt(t))Ti(t.value,e);else if(le(t))for(let n=0;n<t.length;n++)Ti(t[n],e);else if(iu(t)||bs(t))t.forEach(n=>{Ti(n,e)});else if(Hv(t))for(const n in t)Ti(t[n],e);return t}function at(t,e){const n=Vt;if(n===null)return t;const r=_u(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=je]=e[s];o&&(ge(o)&&(o={mounted:o,updated:o}),o.deep&&Ti(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function _i(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(ro(),Sn(c,n,8,[t.el,a,t,e]),io())}}/*! #__NO_SIDE_EFFECTS__ */function Hd(t,e){return ge(t)?(()=>Rt({name:t.name},e,{setup:t}))():t}const Uo=t=>!!t.type.__asyncLoader,vE=t=>t.type.__isKeepAlive;function kR(t,e){EE(t,"a",e)}function NR(t,e){EE(t,"da",e)}function EE(t,e,n=At){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(pu(e,r,n),n){let i=n.parent;for(;i&&i.parent;)vE(i.parent.vnode)&&xR(r,e,n,i),i=i.parent}}function xR(t,e,n,r){const i=pu(e,t,r,!0);wE(()=>{xd(r[e],i)},n)}function pu(t,e,n=At,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ro(),Ls(n);const a=Sn(e,n,t,o);return ki(),io(),a});return r?i.unshift(s):i.push(s),s}}const Ar=t=>(e,n=At)=>(!ca||t==="sp")&&pu(t,(...r)=>e(...r),n),Tf=Ar("bm"),DR=Ar("m"),LR=Ar("bu"),MR=Ar("u"),VR=Ar("bum"),wE=Ar("um"),FR=Ar("sp"),$R=Ar("rtg"),UR=Ar("rtc");function BR(t,e=At){pu("ec",t,e)}const bE="components";function Fe(t,e){return HR(bE,t,!0,e)||t}const jR=Symbol.for("v-ndc");function HR(t,e,n=!0,r=!1){const i=Vt||At;if(i){const s=i.type;if(t===bE){const a=yP(s,!1);if(a&&(a===e||a===Yn(e)||a===ou(Yn(e))))return s}const o=Ug(i[t]||s[t],e)||Ug(i.appContext[t],e);return!o&&r?s:o}}function Ug(t,e){return t&&(t[e]||t[Yn(e)]||t[ou(Yn(e))])}function Ir(t,e,n,r){let i;const s=n&&n[r];if(le(t)||dt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ue(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function TE(t,e,n={},r,i){if(Vt.isCE||Vt.parent&&Uo(Vt.parent)&&Vt.parent.isCE)return e!=="default"&&(n.name=e),we("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),Q();const o=s&&AE(s(n)),a=Qn(Xe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function AE(t){return t.some(e=>Al(e)?!(e.type===Yr||e.type===Xe&&!AE(e.children)):!0)?t:null}const Af=t=>t?ME(t)?_u(t)||t.proxy:Af(t.parent):null,Bo=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Af(t.parent),$root:t=>Af(t.root),$emit:t=>t.emit,$options:t=>zd(t),$forceUpdate:t=>t.f||(t.f=()=>jd(t.update)),$nextTick:t=>t.n||(t.n=fE.bind(t.proxy)),$watch:t=>OR.bind(t)}),kh=(t,e)=>t!==je&&!t.__isScriptSetup&&Oe(t,e),zR={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(kh(r,e))return o[e]=1,r[e];if(i!==je&&Oe(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Oe(l,e))return o[e]=3,s[e];if(n!==je&&Oe(n,e))return o[e]=4,n[e];If&&(o[e]=0)}}const h=Bo[e];let f,p;if(h)return e==="$attrs"&&tn(t,"get",e),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==je&&Oe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Oe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return kh(i,e)?(i[e]=n,!0):r!==je&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==je&&Oe(t,o)||kh(e,o)||(a=s[0])&&Oe(a,o)||Oe(r,o)||Oe(Bo,o)||Oe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bg(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let If=!0;function qR(t){const e=zd(t),n=t.proxy,r=t.ctx;If=!1,e.beforeCreate&&jg(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:v,activated:w,deactivated:T,beforeDestroy:b,beforeUnmount:A,destroyed:N,unmounted:S,render:j,renderTracked:G,renderTriggered:re,errorCaptured:ve,serverPrefetch:oe,expose:ce,inheritAttrs:Ee,components:Ze,directives:De,filters:jt}=e;if(l&&WR(l,r,null),o)for(const me in o){const Te=o[me];ge(Te)&&(r[me]=Te.bind(n))}if(i){const me=i.call(n,n);Ue(me)&&(t.data=uu(me))}if(If=!0,s)for(const me in s){const Te=s[me],st=ge(Te)?Te.bind(n,n):ge(Te.get)?Te.get.bind(n,n):In,Ht=!ge(Te)&&ge(Te.set)?Te.set.bind(n):In,Et=bt({get:st,set:Ht});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Ye=>Et.value=Ye})}if(a)for(const me in a)IE(a[me],r,n,me);if(c){const me=ge(c)?c.call(n):c;Reflect.ownKeys(me).forEach(Te=>{jo(Te,me[Te])})}h&&jg(h,t,"c");function Se(me,Te){le(Te)?Te.forEach(st=>me(st.bind(n))):Te&&me(Te.bind(n))}if(Se(Tf,f),Se(DR,p),Se(LR,m),Se(MR,v),Se(kR,w),Se(NR,T),Se(BR,ve),Se(UR,G),Se($R,re),Se(VR,A),Se(wE,S),Se(FR,oe),le(ce))if(ce.length){const me=t.exposed||(t.exposed={});ce.forEach(Te=>{Object.defineProperty(me,Te,{get:()=>n[Te],set:st=>n[Te]=st})})}else t.exposed||(t.exposed={});j&&t.render===In&&(t.render=j),Ee!=null&&(t.inheritAttrs=Ee),Ze&&(t.components=Ze),De&&(t.directives=De)}function WR(t,e,n=In){le(t)&&(t=Sf(t));for(const r in t){const i=t[r];let s;Ue(i)?"default"in i?s=Cn(i.from||r,i.default,!0):s=Cn(i.from||r):s=Cn(i),Mt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function jg(t,e,n){Sn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function IE(t,e,n,r){const i=r.includes(".")?yE(n,r):()=>n[r];if(dt(t)){const s=e[t];ge(s)&&$o(i,s)}else if(ge(t))$o(i,t.bind(n));else if(Ue(t))if(le(t))t.forEach(s=>IE(s,e,n,r));else{const s=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(s)&&$o(i,s,t)}}function zd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>bl(c,l,o,!0)),bl(c,e,o)),Ue(e)&&s.set(e,c),c}function bl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&bl(t,s,n,!0),i&&i.forEach(o=>bl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=KR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const KR={data:Hg,props:zg,emits:zg,methods:Oo,computed:Oo,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:Oo,directives:Oo,watch:YR,provide:Hg,inject:GR};function Hg(t,e){return e?t?function(){return Rt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function GR(t,e){return Oo(Sf(t),Sf(e))}function Sf(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Oo(t,e){return t?Rt(Object.create(null),t,e):e}function zg(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:Rt(Object.create(null),Bg(t),Bg(e??{})):e}function YR(t,e){if(!t)return e;if(!e)return t;const n=Rt(Object.create(null),t);for(const r in e)n[r]=Wt(t[r],e[r]);return n}function SE(){return{app:null,config:{isNativeTag:kC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let QR=0;function XR(t,e){return function(r,i=null){ge(r)||(r=Rt({},r)),i!=null&&!Ue(i)&&(i=null);const s=SE(),o=new WeakSet;let a=!1;const c=s.app={_uid:QR++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:bP,get config(){return s.config},set config(l){},use(l,...h){return o.has(l)||(l&&ge(l.install)?(o.add(l),l.install(c,...h)):ge(l)&&(o.add(l),l(c,...h))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,h){return h?(s.components[l]=h,c):s.components[l]},directive(l,h){return h?(s.directives[l]=h,c):s.directives[l]},mount(l,h,f){if(!a){const p=we(r,i);return p.appContext=s,h&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,_u(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,h){return s.provides[l]=h,c},runWithContext(l){Tl=c;try{return l()}finally{Tl=null}}};return c}}let Tl=null;function jo(t,e){if(At){let n=At.provides;const r=At.parent&&At.parent.provides;r===n&&(n=At.provides=Object.create(r)),n[t]=e}}function Cn(t,e,n=!1){const r=At||Vt;if(r||Tl){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Tl._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function JR(t,e,n,r=!1){const i={},s={};vl(s,gu,1),t.propsDefaults=Object.create(null),CE(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:rE(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function ZR(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=xe(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(fu(t.emitsOptions,p))continue;const m=e[p];if(c)if(Oe(s,p))m!==s[p]&&(s[p]=m,l=!0);else{const v=Yn(p);i[v]=Cf(c,a,v,m,t,!1)}else m!==s[p]&&(s[p]=m,l=!0)}}}else{CE(t,e,i,s)&&(l=!0);let h;for(const f in a)(!e||!Oe(e,f)&&((h=to(f))===f||!Oe(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(i[f]=Cf(c,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!Oe(e,f))&&(delete s[f],l=!0)}l&&fr(t,"set","$attrs")}function CE(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Xc(c))continue;const l=e[c];let h;i&&Oe(i,h=Yn(c))?!s||!s.includes(h)?n[h]=l:(a||(a={}))[h]=l:fu(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=xe(n),l=a||je;for(let h=0;h<s.length;h++){const f=s[h];n[f]=Cf(i,c,f,l[f],t,!Oe(l,f))}}return o}function Cf(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Ls(i),r=l[n]=c.call(null,e),ki())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===to(n))&&(r=!0))}return r}function RE(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ge(t)){const h=f=>{c=!0;const[p,m]=RE(f,e,!0);Rt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!s&&!c)return Ue(t)&&r.set(t,ws),ws;if(le(s))for(let h=0;h<s.length;h++){const f=Yn(s[h]);qg(f)&&(o[f]=je)}else if(s)for(const h in s){const f=Yn(h);if(qg(f)){const p=s[h],m=o[f]=le(p)||ge(p)?{type:p}:Rt({},p);if(m){const v=Gg(Boolean,m.type),w=Gg(String,m.type);m[0]=v>-1,m[1]=w<0||v<w,(v>-1||Oe(m,"default"))&&a.push(f)}}}const l=[o,a];return Ue(t)&&r.set(t,l),l}function qg(t){return t[0]!=="$"}function Wg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Kg(t,e){return Wg(t)===Wg(e)}function Gg(t,e){return le(e)?e.findIndex(n=>Kg(n,t)):ge(e)&&Kg(e,t)?0:-1}const PE=t=>t[0]==="_"||t==="$stable",qd=t=>le(t)?t.map(xn):[xn(t)],eP=(t,e,n)=>{if(e._n)return e;const r=Mn((...i)=>qd(e(...i)),n);return r._c=!1,r},OE=(t,e,n)=>{const r=t._ctx;for(const i in t){if(PE(i))continue;const s=t[i];if(ge(s))e[i]=eP(i,s,r);else if(s!=null){const o=qd(s);e[i]=()=>o}}},kE=(t,e)=>{const n=qd(e);t.slots.default=()=>n},tP=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=xe(e),vl(e,"_",n)):OE(e,t.slots={})}else t.slots={},e&&kE(t,e);vl(t.slots,gu,1)},nP=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=je;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Rt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,OE(e,i)),o=e}else e&&(kE(t,e),o={default:1});if(s)for(const a in i)!PE(a)&&o[a]==null&&delete i[a]};function Rf(t,e,n,r,i=!1){if(le(t)){t.forEach((p,m)=>Rf(p,e&&(le(e)?e[m]:e),n,r,i));return}if(Uo(r)&&!i)return;const s=r.shapeFlag&4?_u(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,h=a.refs===je?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(dt(l)?(h[l]=null,Oe(f,l)&&(f[l]=null)):Mt(l)&&(l.value=null)),ge(c))zr(c,a,12,[o,h]);else{const p=dt(c),m=Mt(c);if(p||m){const v=()=>{if(t.f){const w=p?Oe(f,c)?f[c]:h[c]:c.value;i?le(w)&&xd(w,s):le(w)?w.includes(s)||w.push(s):p?(h[c]=[s],Oe(f,c)&&(f[c]=h[c])):(c.value=[s],t.k&&(h[t.k]=c.value))}else p?(h[c]=o,Oe(f,c)&&(f[c]=o)):m&&(c.value=o,t.k&&(h[t.k]=o))};o?(v.id=-1,Jt(v,n)):v()}}}const Jt=PR;function rP(t){return iP(t)}function iP(t,e){const n=_f();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=In,insertStaticContent:v}=t,w=(g,E,I,P=null,x=null,V=null,H=!1,U=null,C=!!E.dynamicChildren)=>{if(g===E)return;g&&!Eo(g,E)&&(P=O(g),Ye(g,x,V,!0),g=null),E.patchFlag===-2&&(C=!1,E.dynamicChildren=null);const{type:M,ref:ne,shapeFlag:X}=E;switch(M){case mu:T(g,E,I,P);break;case Yr:b(g,E,I,P);break;case Zc:g==null&&A(E,I,P,H);break;case Xe:Ze(g,E,I,P,x,V,H,U,C);break;default:X&1?j(g,E,I,P,x,V,H,U,C):X&6?De(g,E,I,P,x,V,H,U,C):(X&64||X&128)&&M.process(g,E,I,P,x,V,H,U,C,z)}ne!=null&&x&&Rf(ne,g&&g.ref,V,E||g,!E)},T=(g,E,I,P)=>{if(g==null)r(E.el=a(E.children),I,P);else{const x=E.el=g.el;E.children!==g.children&&l(x,E.children)}},b=(g,E,I,P)=>{g==null?r(E.el=c(E.children||""),I,P):E.el=g.el},A=(g,E,I,P)=>{[g.el,g.anchor]=v(g.children,E,I,P,g.el,g.anchor)},N=({el:g,anchor:E},I,P)=>{let x;for(;g&&g!==E;)x=p(g),r(g,I,P),g=x;r(E,I,P)},S=({el:g,anchor:E})=>{let I;for(;g&&g!==E;)I=p(g),i(g),g=I;i(E)},j=(g,E,I,P,x,V,H,U,C)=>{H=H||E.type==="svg",g==null?G(E,I,P,x,V,H,U,C):oe(g,E,x,V,H,U,C)},G=(g,E,I,P,x,V,H,U)=>{let C,M;const{type:ne,props:X,shapeFlag:ee,transition:ue,dirs:ye}=g;if(C=g.el=o(g.type,V,X&&X.is,X),ee&8?h(C,g.children):ee&16&&ve(g.children,C,null,P,x,V&&ne!=="foreignObject",H,U),ye&&_i(g,null,P,"created"),re(C,g,g.scopeId,H,P),X){for(const Pe in X)Pe!=="value"&&!Xc(Pe)&&s(C,Pe,null,X[Pe],V,g.children,P,x,Be);"value"in X&&s(C,"value",null,X.value),(M=X.onVnodeBeforeMount)&&Nn(M,P,g)}ye&&_i(g,null,P,"beforeMount");const ke=(!x||x&&!x.pendingBranch)&&ue&&!ue.persisted;ke&&ue.beforeEnter(C),r(C,E,I),((M=X&&X.onVnodeMounted)||ke||ye)&&Jt(()=>{M&&Nn(M,P,g),ke&&ue.enter(C),ye&&_i(g,null,P,"mounted")},x)},re=(g,E,I,P,x)=>{if(I&&m(g,I),P)for(let V=0;V<P.length;V++)m(g,P[V]);if(x){let V=x.subTree;if(E===V){const H=x.vnode;re(g,H,H.scopeId,H.slotScopeIds,x.parent)}}},ve=(g,E,I,P,x,V,H,U,C=0)=>{for(let M=C;M<g.length;M++){const ne=g[M]=U?Lr(g[M]):xn(g[M]);w(null,ne,E,I,P,x,V,H,U)}},oe=(g,E,I,P,x,V,H)=>{const U=E.el=g.el;let{patchFlag:C,dynamicChildren:M,dirs:ne}=E;C|=g.patchFlag&16;const X=g.props||je,ee=E.props||je;let ue;I&&yi(I,!1),(ue=ee.onVnodeBeforeUpdate)&&Nn(ue,I,E,g),ne&&_i(E,g,I,"beforeUpdate"),I&&yi(I,!0);const ye=x&&E.type!=="foreignObject";if(M?ce(g.dynamicChildren,M,U,I,P,ye,V):H||Te(g,E,U,null,I,P,ye,V,!1),C>0){if(C&16)Ee(U,E,X,ee,I,P,x);else if(C&2&&X.class!==ee.class&&s(U,"class",null,ee.class,x),C&4&&s(U,"style",X.style,ee.style,x),C&8){const ke=E.dynamicProps;for(let Pe=0;Pe<ke.length;Pe++){const $e=ke[Pe],rn=X[$e],ci=ee[$e];(ci!==rn||$e==="value")&&s(U,$e,rn,ci,x,g.children,I,P,Be)}}C&1&&g.children!==E.children&&h(U,E.children)}else!H&&M==null&&Ee(U,E,X,ee,I,P,x);((ue=ee.onVnodeUpdated)||ne)&&Jt(()=>{ue&&Nn(ue,I,E,g),ne&&_i(E,g,I,"updated")},P)},ce=(g,E,I,P,x,V,H)=>{for(let U=0;U<E.length;U++){const C=g[U],M=E[U],ne=C.el&&(C.type===Xe||!Eo(C,M)||C.shapeFlag&70)?f(C.el):I;w(C,M,ne,null,P,x,V,H,!0)}},Ee=(g,E,I,P,x,V,H)=>{if(I!==P){if(I!==je)for(const U in I)!Xc(U)&&!(U in P)&&s(g,U,I[U],null,H,E.children,x,V,Be);for(const U in P){if(Xc(U))continue;const C=P[U],M=I[U];C!==M&&U!=="value"&&s(g,U,M,C,H,E.children,x,V,Be)}"value"in P&&s(g,"value",I.value,P.value)}},Ze=(g,E,I,P,x,V,H,U,C)=>{const M=E.el=g?g.el:a(""),ne=E.anchor=g?g.anchor:a("");let{patchFlag:X,dynamicChildren:ee,slotScopeIds:ue}=E;ue&&(U=U?U.concat(ue):ue),g==null?(r(M,I,P),r(ne,I,P),ve(E.children,I,ne,x,V,H,U,C)):X>0&&X&64&&ee&&g.dynamicChildren?(ce(g.dynamicChildren,ee,I,x,V,H,U),(E.key!=null||x&&E===x.subTree)&&NE(g,E,!0)):Te(g,E,I,ne,x,V,H,U,C)},De=(g,E,I,P,x,V,H,U,C)=>{E.slotScopeIds=U,g==null?E.shapeFlag&512?x.ctx.activate(E,I,P,H,C):jt(E,I,P,x,V,H,C):Pt(g,E,C)},jt=(g,E,I,P,x,V,H)=>{const U=g.component=dP(g,P,x);if(vE(g)&&(U.ctx.renderer=z),pP(U),U.asyncDep){if(x&&x.registerDep(U,Se),!g.el){const C=U.subTree=we(Yr);b(null,C,E,I)}return}Se(U,g,E,I,x,V,H)},Pt=(g,E,I)=>{const P=E.component=g.component;if(SR(g,E,I))if(P.asyncDep&&!P.asyncResolved){me(P,E,I);return}else P.next=E,ER(P.update),P.update();else E.el=g.el,P.vnode=E},Se=(g,E,I,P,x,V,H)=>{const U=()=>{if(g.isMounted){let{next:ne,bu:X,u:ee,parent:ue,vnode:ye}=g,ke=ne,Pe;yi(g,!1),ne?(ne.el=ye.el,me(g,ne,H)):ne=ye,X&&Jc(X),(Pe=ne.props&&ne.props.onVnodeBeforeUpdate)&&Nn(Pe,ue,ne,ye),yi(g,!0);const $e=Oh(g),rn=g.subTree;g.subTree=$e,w(rn,$e,f(rn.el),O(rn),g,x,V),ne.el=$e.el,ke===null&&CR(g,$e.el),ee&&Jt(ee,x),(Pe=ne.props&&ne.props.onVnodeUpdated)&&Jt(()=>Nn(Pe,ue,ne,ye),x)}else{let ne;const{el:X,props:ee}=E,{bm:ue,m:ye,parent:ke}=g,Pe=Uo(E);if(yi(g,!1),ue&&Jc(ue),!Pe&&(ne=ee&&ee.onVnodeBeforeMount)&&Nn(ne,ke,E),yi(g,!0),X&&R){const $e=()=>{g.subTree=Oh(g),R(X,g.subTree,g,x,null)};Pe?E.type.__asyncLoader().then(()=>!g.isUnmounted&&$e()):$e()}else{const $e=g.subTree=Oh(g);w(null,$e,I,P,g,x,V),E.el=$e.el}if(ye&&Jt(ye,x),!Pe&&(ne=ee&&ee.onVnodeMounted)){const $e=E;Jt(()=>Nn(ne,ke,$e),x)}(E.shapeFlag&256||ke&&Uo(ke.vnode)&&ke.vnode.shapeFlag&256)&&g.a&&Jt(g.a,x),g.isMounted=!0,E=I=P=null}},C=g.effect=new Md(U,()=>jd(M),g.scope),M=g.update=()=>C.run();M.id=g.uid,yi(g,!0),M()},me=(g,E,I)=>{E.component=g;const P=g.vnode.props;g.vnode=E,g.next=null,ZR(g,E.props,P,I),nP(g,E.children,I),ro(),Fg(),io()},Te=(g,E,I,P,x,V,H,U,C=!1)=>{const M=g&&g.children,ne=g?g.shapeFlag:0,X=E.children,{patchFlag:ee,shapeFlag:ue}=E;if(ee>0){if(ee&128){Ht(M,X,I,P,x,V,H,U,C);return}else if(ee&256){st(M,X,I,P,x,V,H,U,C);return}}ue&8?(ne&16&&Be(M,x,V),X!==M&&h(I,X)):ne&16?ue&16?Ht(M,X,I,P,x,V,H,U,C):Be(M,x,V,!0):(ne&8&&h(I,""),ue&16&&ve(X,I,P,x,V,H,U,C))},st=(g,E,I,P,x,V,H,U,C)=>{g=g||ws,E=E||ws;const M=g.length,ne=E.length,X=Math.min(M,ne);let ee;for(ee=0;ee<X;ee++){const ue=E[ee]=C?Lr(E[ee]):xn(E[ee]);w(g[ee],ue,I,null,x,V,H,U,C)}M>ne?Be(g,x,V,!0,!1,X):ve(E,I,P,x,V,H,U,C,X)},Ht=(g,E,I,P,x,V,H,U,C)=>{let M=0;const ne=E.length;let X=g.length-1,ee=ne-1;for(;M<=X&&M<=ee;){const ue=g[M],ye=E[M]=C?Lr(E[M]):xn(E[M]);if(Eo(ue,ye))w(ue,ye,I,null,x,V,H,U,C);else break;M++}for(;M<=X&&M<=ee;){const ue=g[X],ye=E[ee]=C?Lr(E[ee]):xn(E[ee]);if(Eo(ue,ye))w(ue,ye,I,null,x,V,H,U,C);else break;X--,ee--}if(M>X){if(M<=ee){const ue=ee+1,ye=ue<ne?E[ue].el:P;for(;M<=ee;)w(null,E[M]=C?Lr(E[M]):xn(E[M]),I,ye,x,V,H,U,C),M++}}else if(M>ee)for(;M<=X;)Ye(g[M],x,V,!0),M++;else{const ue=M,ye=M,ke=new Map;for(M=ye;M<=ee;M++){const kt=E[M]=C?Lr(E[M]):xn(E[M]);kt.key!=null&&ke.set(kt.key,M)}let Pe,$e=0;const rn=ee-ye+1;let ci=!1,lc=0;const li=new Array(rn);for(M=0;M<rn;M++)li[M]=0;for(M=ue;M<=X;M++){const kt=g[M];if($e>=rn){Ye(kt,x,V,!0);continue}let dn;if(kt.key!=null)dn=ke.get(kt.key);else for(Pe=ye;Pe<=ee;Pe++)if(li[Pe-ye]===0&&Eo(kt,E[Pe])){dn=Pe;break}dn===void 0?Ye(kt,x,V,!0):(li[dn-ye]=M+1,dn>=lc?lc=dn:ci=!0,w(kt,E[dn],I,null,x,V,H,U,C),$e++)}const uc=ci?sP(li):ws;for(Pe=uc.length-1,M=rn-1;M>=0;M--){const kt=ye+M,dn=E[kt],Cr=kt+1<ne?E[kt+1].el:P;li[M]===0?w(null,dn,I,Cr,x,V,H,U,C):ci&&(Pe<0||M!==uc[Pe]?Et(dn,I,Cr,2):Pe--)}}},Et=(g,E,I,P,x=null)=>{const{el:V,type:H,transition:U,children:C,shapeFlag:M}=g;if(M&6){Et(g.component.subTree,E,I,P);return}if(M&128){g.suspense.move(E,I,P);return}if(M&64){H.move(g,E,I,z);return}if(H===Xe){r(V,E,I);for(let X=0;X<C.length;X++)Et(C[X],E,I,P);r(g.anchor,E,I);return}if(H===Zc){N(g,E,I);return}if(P!==2&&M&1&&U)if(P===0)U.beforeEnter(V),r(V,E,I),Jt(()=>U.enter(V),x);else{const{leave:X,delayLeave:ee,afterLeave:ue}=U,ye=()=>r(V,E,I),ke=()=>{X(V,()=>{ye(),ue&&ue()})};ee?ee(V,ye,ke):ke()}else r(V,E,I)},Ye=(g,E,I,P=!1,x=!1)=>{const{type:V,props:H,ref:U,children:C,dynamicChildren:M,shapeFlag:ne,patchFlag:X,dirs:ee}=g;if(U!=null&&Rf(U,null,I,g,!0),ne&256){E.ctx.deactivate(g);return}const ue=ne&1&&ee,ye=!Uo(g);let ke;if(ye&&(ke=H&&H.onVnodeBeforeUnmount)&&Nn(ke,E,g),ne&6)Ot(g.component,I,P);else{if(ne&128){g.suspense.unmount(I,P);return}ue&&_i(g,null,E,"beforeUnmount"),ne&64?g.type.remove(g,E,I,x,z,P):M&&(V!==Xe||X>0&&X&64)?Be(M,E,I,!1,!0):(V===Xe&&X&384||!x&&ne&16)&&Be(C,E,I),P&&nn(g)}(ye&&(ke=H&&H.onVnodeUnmounted)||ue)&&Jt(()=>{ke&&Nn(ke,E,g),ue&&_i(g,null,E,"unmounted")},I)},nn=g=>{const{type:E,el:I,anchor:P,transition:x}=g;if(E===Xe){zt(I,P);return}if(E===Zc){S(g);return}const V=()=>{i(I),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(g.shapeFlag&1&&x&&!x.persisted){const{leave:H,delayLeave:U}=x,C=()=>H(I,V);U?U(g.el,V,C):C()}else V()},zt=(g,E)=>{let I;for(;g!==E;)I=p(g),i(g),g=I;i(E)},Ot=(g,E,I)=>{const{bum:P,scope:x,update:V,subTree:H,um:U}=g;P&&Jc(P),x.stop(),V&&(V.active=!1,Ye(H,g,E,I)),U&&Jt(U,E),Jt(()=>{g.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Be=(g,E,I,P=!1,x=!1,V=0)=>{for(let H=V;H<g.length;H++)Ye(g[H],E,I,P,x)},O=g=>g.shapeFlag&6?O(g.component.subTree):g.shapeFlag&128?g.suspense.next():p(g.anchor||g.el),W=(g,E,I)=>{g==null?E._vnode&&Ye(E._vnode,null,null,!0):w(E._vnode||null,g,E,null,null,null,I),Fg(),pE(),E._vnode=g},z={p:w,um:Ye,m:Et,r:nn,mt:jt,mc:ve,pc:Te,pbc:ce,n:O,o:t};let Z,R;return e&&([Z,R]=e(z)),{render:W,hydrate:Z,createApp:XR(W,Z)}}function yi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function NE(t,e,n=!1){const r=t.children,i=e.children;if(le(r)&&le(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Lr(i[s]),a.el=o.el),n||NE(o,a)),a.type===mu&&(a.el=o.el)}}function sP(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const oP=t=>t.__isTeleport,Xe=Symbol.for("v-fgt"),mu=Symbol.for("v-txt"),Yr=Symbol.for("v-cmt"),Zc=Symbol.for("v-stc"),Ho=[];let Tn=null;function Q(t=!1){Ho.push(Tn=t?null:[])}function aP(){Ho.pop(),Tn=Ho[Ho.length-1]||null}let aa=1;function Yg(t){aa+=t}function xE(t){return t.dynamicChildren=aa>0?Tn||ws:null,aP(),aa>0&&Tn&&Tn.push(t),t}function se(t,e,n,r,i,s){return xE(D(t,e,n,r,i,s,!0))}function Qn(t,e,n,r,i){return xE(we(t,e,n,r,i,!0))}function Al(t){return t?t.__v_isVNode===!0:!1}function Eo(t,e){return t.type===e.type&&t.key===e.key}const gu="__vInternal",DE=({key:t})=>t??null,el=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?dt(t)||Mt(t)||ge(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,i=null,s=t===Xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&DE(e),ref:e&&el(e),scopeId:du,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Vt};return a?(Wd(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=dt(n)?8:16),aa>0&&!o&&Tn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Tn.push(c),c}const we=cP;function cP(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===jR)&&(t=Yr),Al(t)){const a=Ds(t,e,!0);return n&&Wd(a,n),aa>0&&!s&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(t)]=a:Tn.push(a)),a.patchFlag|=-2,a}if(vP(t)&&(t=t.__vccOpts),e){e=lP(e);let{class:a,style:c}=e;a&&!dt(a)&&(e.class=no(a)),Ue(c)&&(sE(c)&&!le(c)&&(c=Rt({},c)),e.style=au(c))}const o=dt(t)?1:RR(t)?128:oP(t)?64:Ue(t)?4:ge(t)?2:0;return D(t,e,n,r,i,o,s,!0)}function lP(t){return t?sE(t)||gu in t?Rt({},t):t:null}function Ds(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?uP(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&DE(a),ref:e&&e.ref?n&&i?le(i)?i.concat(el(e)):[i,el(e)]:el(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ds(t.ssContent),ssFallback:t.ssFallback&&Ds(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ut(t=" ",e=0){return we(mu,null,t,e)}function LE(t,e){const n=we(Zc,null,t);return n.staticCount=e,n}function Oi(t="",e=!1){return e?(Q(),Qn(Yr,null,t)):we(Yr,null,t)}function xn(t){return t==null||typeof t=="boolean"?we(Yr):le(t)?we(Xe,null,t.slice()):typeof t=="object"?Lr(t):we(mu,null,String(t))}function Lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ds(t)}function Wd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Wd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(gu in e)?e._ctx=Vt:i===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),r&64?(n=16,e=[ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function uP(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=no([e.class,r.class]));else if(i==="style")e.style=au([e.style,r.style]);else if(ru(i)){const s=e[i],o=r[i];o&&s!==o&&!(le(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Nn(t,e,n,r=null){Sn(t,e,7,[n,r])}const hP=SE();let fP=0;function dP(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||hP,s={uid:fP++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new zC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:RE(r,i),emitsOptions:gE(r,i),emit:null,emitted:null,propsDefaults:je,inheritAttrs:r.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=TR.bind(null,s),t.ce&&t.ce(s),s}let At=null,Kd,us,Qg="__VUE_INSTANCE_SETTERS__";(us=_f()[Qg])||(us=_f()[Qg]=[]),us.push(t=>At=t),Kd=t=>{us.length>1?us.forEach(e=>e(t)):us[0](t)};const Ls=t=>{Kd(t),t.scope.on()},ki=()=>{At&&At.scope.off(),Kd(null)};function ME(t){return t.vnode.shapeFlag&4}let ca=!1;function pP(t,e=!1){ca=e;const{props:n,children:r}=t.vnode,i=ME(t);JR(t,n,i,e),tP(t,r);const s=i?mP(t,e):void 0;return ca=!1,s}function mP(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=oE(new Proxy(t.ctx,zR));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?_P(t):null;Ls(t),ro();const s=zr(r,t,0,[t.props,i]);if(io(),ki(),Bv(s)){if(s.then(ki,ki),e)return s.then(o=>{Xg(t,o,e)}).catch(o=>{hu(o,t,0)});t.asyncDep=s}else Xg(t,s,e)}else VE(t,e)}function Xg(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=uE(e)),VE(t,n)}let Jg;function VE(t,e,n){const r=t.type;if(!t.render){if(!e&&Jg&&!r.render){const i=r.template||zd(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Rt(Rt({isCustomElement:s,delimiters:a},o),c);r.render=Jg(i,l)}}t.render=r.render||In}{Ls(t),ro();try{qR(t)}finally{io(),ki()}}}function gP(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return tn(t,"get","$attrs"),e[n]}}))}function _P(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return gP(t)},slots:t.slots,emit:t.emit,expose:e}}function _u(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(uE(oE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bo)return Bo[n](t)},has(e,n){return n in e||n in Bo}}))}function yP(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function vP(t){return ge(t)&&"__vccOpts"in t}const bt=(t,e)=>_R(t,e,ca);function Gd(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!le(e)?Al(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Al(n)&&(n=[n]),we(t,e,n))}const EP=Symbol.for("v-scx"),wP=()=>Cn(EP),bP="3.3.6",TP="http://www.w3.org/2000/svg",wi=typeof document<"u"?document:null,Zg=wi&&wi.createElement("template"),AP={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?wi.createElementNS(TP,t):wi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>wi.createTextNode(t),createComment:t=>wi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Zg.innerHTML=r?`<svg>${t}</svg>`:t;const a=Zg.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},IP=Symbol("_vtc");function SP(t,e,n){const r=t[IP];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Yd=Symbol("_vod"),CP={beforeMount(t,{value:e},{transition:n}){t[Yd]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):wo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),wo(t,!0),r.enter(t)):r.leave(t,()=>{wo(t,!1)}):wo(t,e))},beforeUnmount(t,{value:e}){wo(t,e)}};function wo(t,e){t.style.display=e?t[Yd]:"none"}function RP(t,e,n){const r=t.style,i=dt(n);if(n&&!i){if(e&&!dt(e))for(const s in e)n[s]==null&&Pf(r,s,"");for(const s in n)Pf(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Yd in t&&(r.display=s)}}const e_=/\s*!important$/;function Pf(t,e,n){if(le(n))n.forEach(r=>Pf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=PP(t,e);e_.test(n)?t.setProperty(to(r),n.replace(e_,""),"important"):t[r]=n}}const t_=["Webkit","Moz","ms"],Nh={};function PP(t,e){const n=Nh[e];if(n)return n;let r=Yn(e);if(r!=="filter"&&r in t)return Nh[e]=r;r=ou(r);for(let i=0;i<t_.length;i++){const s=t_[i]+r;if(s in t)return Nh[e]=s}return e}const n_="http://www.w3.org/1999/xlink";function OP(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(n_,e.slice(6,e.length)):t.setAttributeNS(n_,e,n);else{const s=jC(e);n==null||s&&!zv(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function kP(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,h=n??"";l!==h&&(t.value=h),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=zv(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function bi(t,e,n,r){t.addEventListener(e,n,r)}function NP(t,e,n,r){t.removeEventListener(e,n,r)}const r_=Symbol("_vei");function xP(t,e,n,r,i=null){const s=t[r_]||(t[r_]={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=DP(e);if(r){const l=s[e]=VP(r,i);bi(t,a,l,c)}else o&&(NP(t,a,o,c),s[e]=void 0)}}const i_=/(?:Once|Passive|Capture)$/;function DP(t){let e;if(i_.test(t)){e={};let r;for(;r=t.match(i_);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):to(t.slice(2)),e]}let xh=0;const LP=Promise.resolve(),MP=()=>xh||(LP.then(()=>xh=0),xh=Date.now());function VP(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Sn(FP(r,n.value),e,5,[r])};return n.value=t,n.attached=MP(),n}function FP(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const s_=/^on[a-z]/,$P=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?SP(t,r,i):e==="style"?RP(t,n,r):ru(e)?Nd(e)||xP(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):UP(t,e,r,i))?kP(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),OP(t,e,r,i))};function UP(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&s_.test(e)&&ge(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||s_.test(e)&&dt(n)?!1:e in t}const Il=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Jc(e,n):e};function BP(t){t.target.composing=!0}function o_(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ss=Symbol("_assign"),gt={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[Ss]=Il(i);const s=r||i.props&&i.props.type==="number";bi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=gf(a)),t[Ss](a)}),n&&bi(t,"change",()=>{t.value=t.value.trim()}),e||(bi(t,"compositionstart",BP),bi(t,"compositionend",o_),bi(t,"change",o_))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t[Ss]=Il(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&gf(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},jP={deep:!0,created(t,e,n){t[Ss]=Il(n),bi(t,"change",()=>{const r=t._modelValue,i=HP(t),s=t.checked,o=t[Ss];if(le(r)){const a=qv(r,i),c=a!==-1;if(s&&!c)o(r.concat(i));else if(!s&&c){const l=[...r];l.splice(a,1),o(l)}}else if(iu(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(FE(t,s))})},mounted:a_,beforeUpdate(t,e,n){t[Ss]=Il(n),a_(t,e,n)}};function a_(t,{value:e,oldValue:n},r){t._modelValue=e,le(e)?t.checked=qv(e,r.props.value)>-1:iu(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=cu(e,FE(t,!0)))}function HP(t){return"_value"in t?t._value:t.value}function FE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const zP=["ctrl","shift","alt","meta"],qP={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>zP.some(n=>t[`${n}Key`]&&!e.includes(n))},la=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=qP[e[i]];if(s&&s(n,e))return}return t(n,...r)},WP=Rt({patchProp:$P},AP);let c_;function KP(){return c_||(c_=rP(WP))}const GP=(...t)=>{const e=KP().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=YP(r);if(!i)return;const s=e._component;!ge(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function YP(t){return dt(t)?document.querySelector(t):t}/**
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
 *//**
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
 */const $E=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},UE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[h],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($E(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new XP;const p=s<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const v=l<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JP=function(t){const e=$E(t);return UE.encodeByteArray(e,!0)},Sl=function(t){return JP(t).replace(/\./g,"")},BE=function(t){try{return UE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ZP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eO=()=>ZP().__FIREBASE_DEFAULTS__,tO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&BE(t[1]);return e&&JSON.parse(e)},yu=()=>{try{return eO()||tO()||nO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jE=t=>{var e,n;return(n=(e=yu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HE=t=>{const e=jE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zE=()=>{var t;return(t=yu())===null||t===void 0?void 0:t.config},qE=t=>{var e;return(e=yu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function WE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sl(JSON.stringify(n)),Sl(JSON.stringify(o)),a].join(".")}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function sO(){var t;const e=(t=yu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cO(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lO(){try{return typeof indexedDB=="object"}catch{return!1}}function uO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const hO="FirebaseError";class nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hO,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nr(i,a,r)}}function fO(t,e){return t.replace(dO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dO=/\{\$([^}]+)}/g;function pO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(l_(s)&&l_(o)){if(!Cl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function l_(t){return t!==null&&typeof t=="object"}/**
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
 */function Ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ko(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function No(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mO(t,e){const n=new gO(t,e);return n.subscribe.bind(n)}class gO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_O(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dh),i.error===void 0&&(i.error=Dh),i.complete===void 0&&(i.complete=Dh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _O(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dh(){}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vi="[DEFAULT]";/**
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
 */class yO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EO(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vO(t){return t===vi?void 0:t}function EO(t){return t.instantiationMode==="EAGER"}/**
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
 */class wO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const bO={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},TO=Ie.INFO,AO={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},IO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=AO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qd{constructor(e){this.name=e,this._logLevel=TO,this._logHandler=IO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const SO=(t,e)=>e.some(n=>t instanceof n);let u_,h_;function CO(){return u_||(u_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RO(){return h_||(h_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KE=new WeakMap,Of=new WeakMap,GE=new WeakMap,Lh=new WeakMap,Xd=new WeakMap;function PO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&KE.set(n,t)}).catch(()=>{}),Xd.set(e,t),e}function OO(t){if(Of.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Of.set(t,e)}let kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Of.get(t);if(e==="objectStoreNames")return t.objectStoreNames||GE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kO(t){kf=t(kf)}function NO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mh(this),e,...n);return GE.set(r,e.sort?e.sort():[e]),qr(r)}:RO().includes(t)?function(...e){return t.apply(Mh(this),e),qr(KE.get(this))}:function(...e){return qr(t.apply(Mh(this),e))}}function xO(t){return typeof t=="function"?NO(t):(t instanceof IDBTransaction&&OO(t),SO(t,CO())?new Proxy(t,kf):t)}function qr(t){if(t instanceof IDBRequest)return PO(t);if(Lh.has(t))return Lh.get(t);const e=xO(t);return e!==t&&(Lh.set(t,e),Xd.set(e,t)),e}const Mh=t=>Xd.get(t);function DO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=qr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(qr(o.result),c.oldVersion,c.newVersion,qr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const LO=["get","getKey","getAll","getAllKeys","count"],MO=["put","add","delete","clear"],Vh=new Map;function f_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vh.get(e))return Vh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LO.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Vh.set(e,s),s}kO(t=>({...t,get:(e,n,r)=>f_(e,n)||t.get(e,n,r),has:(e,n)=>!!f_(e,n)||t.has(e,n)}));/**
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
 */class VO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nf="@firebase/app",d_="0.9.20";/**
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
 */const Vi=new Qd("@firebase/app"),$O="@firebase/app-compat",UO="@firebase/analytics-compat",BO="@firebase/analytics",jO="@firebase/app-check-compat",HO="@firebase/app-check",zO="@firebase/auth",qO="@firebase/auth-compat",WO="@firebase/database",KO="@firebase/database-compat",GO="@firebase/functions",YO="@firebase/functions-compat",QO="@firebase/installations",XO="@firebase/installations-compat",JO="@firebase/messaging",ZO="@firebase/messaging-compat",ek="@firebase/performance",tk="@firebase/performance-compat",nk="@firebase/remote-config",rk="@firebase/remote-config-compat",ik="@firebase/storage",sk="@firebase/storage-compat",ok="@firebase/firestore",ak="@firebase/firestore-compat",ck="firebase",lk="10.5.0";/**
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
 */const xf="[DEFAULT]",uk={[Nf]:"fire-core",[$O]:"fire-core-compat",[BO]:"fire-analytics",[UO]:"fire-analytics-compat",[HO]:"fire-app-check",[jO]:"fire-app-check-compat",[zO]:"fire-auth",[qO]:"fire-auth-compat",[WO]:"fire-rtdb",[KO]:"fire-rtdb-compat",[GO]:"fire-fn",[YO]:"fire-fn-compat",[QO]:"fire-iid",[XO]:"fire-iid-compat",[JO]:"fire-fcm",[ZO]:"fire-fcm-compat",[ek]:"fire-perf",[tk]:"fire-perf-compat",[nk]:"fire-rc",[rk]:"fire-rc-compat",[ik]:"fire-gcs",[sk]:"fire-gcs-compat",[ok]:"fire-fst",[ak]:"fire-fst-compat","fire-js":"fire-js",[ck]:"fire-js-all"};/**
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
 */const Rl=new Map,Df=new Map;function hk(t,e){try{t.container.addComponent(e)}catch(n){Vi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fi(t){const e=t.name;if(Df.has(e))return Vi.debug(`There were multiple attempts to register component ${e}.`),!1;Df.set(e,t);for(const n of Rl.values())hk(n,t);return!0}function vu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const fk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wr=new La("app","Firebase",fk);/**
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
 */class dk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const Yi=lk;function Jd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=zE()),!n)throw Wr.create("no-options");const s=Rl.get(i);if(s){if(Cl(n,s.options)&&Cl(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new wO(i);for(const c of Df.values())o.addComponent(c);const a=new dk(n,r,o);return Rl.set(i,a),a}function Zd(t=xf){const e=Rl.get(t);if(!e&&t===xf&&zE())return Jd();if(!e)throw Wr.create("no-app",{appName:t});return e}function jn(t,e,n){var r;let i=(r=uk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vi.warn(a.join(" "));return}Fi(new Qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pk="firebase-heartbeat-database",mk=1,ua="firebase-heartbeat-store";let Fh=null;function YE(){return Fh||(Fh=DO(pk,mk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ua)}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),Fh}async function gk(t){try{return await(await YE()).transaction(ua).objectStore(ua).get(QE(t))}catch(e){if(e instanceof nr)Vi.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vi.warn(n.message)}}}async function p_(t,e){try{const r=(await YE()).transaction(ua,"readwrite");await r.objectStore(ua).put(e,QE(t)),await r.done}catch(n){if(n instanceof nr)Vi.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vi.warn(r.message)}}}function QE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _k=1024,yk=30*24*60*60*1e3;class vk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=m_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=yk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=m_(),{heartbeatsToSend:n,unsentEntries:r}=Ek(this._heartbeatsCache.heartbeats),i=Sl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function m_(){return new Date().toISOString().substring(0,10)}function Ek(t,e=_k){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),g_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),g_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lO()?uO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return p_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return p_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function g_(t){return Sl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bk(t){Fi(new Qr("platform-logger",e=>new VO(e),"PRIVATE")),Fi(new Qr("heartbeat",e=>new vk(e),"PRIVATE")),jn(Nf,d_,t),jn(Nf,d_,"esm2017"),jn("fire-js","")}bk("");var Tk="firebase",Ak="10.5.0";/**
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
 */jn(Tk,Ak,"app");var Ik=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,ep=ep||{},de=Ik||self;function Eu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Va(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Sk(t){return Object.prototype.hasOwnProperty.call(t,$h)&&t[$h]||(t[$h]=++Ck)}var $h="closure_uid_"+(1e9*Math.random()>>>0),Ck=0;function Rk(t,e,n){return t.call.apply(t.bind,arguments)}function Pk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ft=Rk:Ft=Pk,Ft.apply(null,arguments)}function Pc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function vt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ri(){this.s=this.s,this.o=this.o}var Ok=0;ri.prototype.s=!1;ri.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ok!=0)&&Sk(this)};ri.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const XE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function __(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Eu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function $t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}$t.prototype.h=function(){this.defaultPrevented=!0};var kk=function(){if(!de.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{de.addEventListener("test",()=>{},e),de.removeEventListener("test",()=>{},e)}catch{}return t}();function ha(t){return/^[\s\xa0]*$/.test(t)}function wu(){var t=de.navigator;return t&&(t=t.userAgent)?t:""}function Ln(t){return wu().indexOf(t)!=-1}function np(t){return np[" "](t),t}np[" "]=function(){};function Nk(t,e){var n=AN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var xk=Ln("Opera"),Ms=Ln("Trident")||Ln("MSIE"),JE=Ln("Edge"),Lf=JE||Ms,ZE=Ln("Gecko")&&!(wu().toLowerCase().indexOf("webkit")!=-1&&!Ln("Edge"))&&!(Ln("Trident")||Ln("MSIE"))&&!Ln("Edge"),Dk=wu().toLowerCase().indexOf("webkit")!=-1&&!Ln("Edge");function ew(){var t=de.document;return t?t.documentMode:void 0}var Mf;e:{var Uh="",Bh=function(){var t=wu();if(ZE)return/rv:([^\);]+)(\)|;)/.exec(t);if(JE)return/Edge\/([\d\.]+)/.exec(t);if(Ms)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Dk)return/WebKit\/(\S+)/.exec(t);if(xk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bh&&(Uh=Bh?Bh[1]:""),Ms){var jh=ew();if(jh!=null&&jh>parseFloat(Uh)){Mf=String(jh);break e}}Mf=Uh}var Vf;if(de.document&&Ms){var y_=ew();Vf=y_||parseInt(Mf,10)||void 0}else Vf=void 0;var Lk=Vf;function fa(t,e){if($t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ZE){e:{try{np(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Mk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fa.$.h.call(this)}}vt(fa,$t);var Mk={2:"touch",3:"pen",4:"mouse"};fa.prototype.h=function(){fa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fa="closure_listenable_"+(1e6*Math.random()|0),Vk=0;function Fk(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Vk,this.fa=this.ia=!1}function bu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function rp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function $k(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function tw(t){const e={};for(const n in t)e[n]=t[n];return e}const v_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<v_.length;s++)n=v_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Tu(t){this.src=t,this.g={},this.h=0}Tu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=$f(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Fk(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ff(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=XE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(bu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function $f(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var ip="closure_lm_"+(1e6*Math.random()|0),Hh={};function rw(t,e,n,r,i){if(r&&r.once)return sw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)rw(t,e[s],n,r,i);return null}return n=ap(n),t&&t[Fa]?t.O(e,n,Va(r)?!!r.capture:!!r,i):iw(t,e,n,!1,r,i)}function iw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Va(i)?!!i.capture:!!i,a=op(t);if(a||(t[ip]=a=new Tu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Uk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(aw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Uk(){function t(n){return e.call(t.src,t.listener,n)}const e=Bk;return t}function sw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)sw(t,e[s],n,r,i);return null}return n=ap(n),t&&t[Fa]?t.P(e,n,Va(r)?!!r.capture:!!r,i):iw(t,e,n,!0,r,i)}function ow(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ow(t,e[s],n,r,i);else r=Va(r)?!!r.capture:!!r,n=ap(n),t&&t[Fa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=$f(s,n,r,i),-1<n&&(bu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=op(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$f(e,n,r,i)),(n=-1<t?e[t]:null)&&sp(n))}function sp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fa])Ff(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(aw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=op(e))?(Ff(n,t),n.h==0&&(n.src=null,e[ip]=null)):bu(t)}}}function aw(t){return t in Hh?Hh[t]:Hh[t]="on"+t}function Bk(t,e){if(t.fa)t=!0;else{e=new fa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&sp(t),t=n.call(r,e)}return t}function op(t){return t=t[ip],t instanceof Tu?t:null}var zh="__closure_events_fn_"+(1e9*Math.random()>>>0);function ap(t){return typeof t=="function"?t:(t[zh]||(t[zh]=function(e){return t.handleEvent(e)}),t[zh])}function yt(){ri.call(this),this.i=new Tu(this),this.S=this,this.J=null}vt(yt,ri);yt.prototype[Fa]=!0;yt.prototype.removeEventListener=function(t,e,n,r){ow(this,t,e,n,r)};function St(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new $t(e,t);else if(e instanceof $t)e.target=e.target||t;else{var i=e;e=new $t(r,t),nw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Oc(o,r,!0,e)&&i}if(o=e.g=t,i=Oc(o,r,!0,e)&&i,i=Oc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Oc(o,r,!1,e)&&i}yt.prototype.N=function(){if(yt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)bu(n[r]);delete t.g[e],t.h--}}this.J=null};yt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};yt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Oc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ff(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var cp=de.JSON.stringify;class jk{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Hk(){var t=lp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zk{constructor(){this.h=this.g=null}add(e,n){const r=cw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var cw=new jk(()=>new qk,t=>t.reset());class qk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Wk(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Kk(t){de.setTimeout(()=>{throw t},0)}let da,pa=!1,lp=new zk,lw=()=>{const t=de.Promise.resolve(void 0);da=()=>{t.then(Gk)}};var Gk=()=>{for(var t;t=Hk();){try{t.h.call(t.g)}catch(n){Kk(n)}var e=cw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pa=!1};function Au(t,e){yt.call(this),this.h=t||1,this.g=e||de,this.j=Ft(this.qb,this),this.l=Date.now()}vt(Au,yt);K=Au.prototype;K.ga=!1;K.T=null;K.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),St(this,"tick"),this.ga&&(up(this),this.start()))}};K.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function up(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}K.N=function(){Au.$.N.call(this),up(this),delete this.g};function hp(t,e,n){if(typeof t=="function")n&&(t=Ft(t,n));else if(t&&typeof t.handleEvent=="function")t=Ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:de.setTimeout(t,e||0)}function uw(t){t.g=hp(()=>{t.g=null,t.i&&(t.i=!1,uw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Yk extends ri{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uw(this)}N(){super.N(),this.g&&(de.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ma(t){ri.call(this),this.h=t,this.g={}}vt(ma,ri);var E_=[];function hw(t,e,n,r){Array.isArray(n)||(n&&(E_[0]=n.toString()),n=E_);for(var i=0;i<n.length;i++){var s=rw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function fw(t){rp(t.g,function(e,n){this.g.hasOwnProperty(n)&&sp(e)},t),t.g={}}ma.prototype.N=function(){ma.$.N.call(this),fw(this)};ma.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Iu(){this.g=!0}Iu.prototype.Ea=function(){this.g=!1};function Qk(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Xk(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function _s(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Zk(t,n)+(r?" "+r:"")})}function Jk(t,e){t.info(function(){return"TIMEOUT: "+e})}Iu.prototype.info=function(){};function Zk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return cp(n)}catch{return e}}var Qi={},w_=null;function Su(){return w_=w_||new yt}Qi.Ta="serverreachability";function dw(t){$t.call(this,Qi.Ta,t)}vt(dw,$t);function ga(t){const e=Su();St(e,new dw(e))}Qi.STAT_EVENT="statevent";function pw(t,e){$t.call(this,Qi.STAT_EVENT,t),this.stat=e}vt(pw,$t);function Kt(t){const e=Su();St(e,new pw(e,t))}Qi.Ua="timingevent";function mw(t,e){$t.call(this,Qi.Ua,t),this.size=e}vt(mw,$t);function $a(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return de.setTimeout(function(){t()},e)}var Cu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},gw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fp(){}fp.prototype.h=null;function b_(t){return t.h||(t.h=t.i())}function _w(){}var Ua={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dp(){$t.call(this,"d")}vt(dp,$t);function pp(){$t.call(this,"c")}vt(pp,$t);var Uf;function Ru(){}vt(Ru,fp);Ru.prototype.g=function(){return new XMLHttpRequest};Ru.prototype.i=function(){return{}};Uf=new Ru;function Ba(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ma(this),this.P=eN,t=Lf?125:void 0,this.V=new Au(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yw}function yw(){this.i=null,this.g="",this.h=!1}var eN=45e3,Bf={},Pl={};K=Ba.prototype;K.setTimeout=function(t){this.P=t};function jf(t,e,n){t.L=1,t.v=Ou(mr(e)),t.s=n,t.S=!0,vw(t,null)}function vw(t,e){t.G=Date.now(),ja(t),t.A=mr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Cw(n.i,"t",r),t.C=0,n=t.l.J,t.h=new yw,t.g=Gw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Yk(Ft(t.Pa,t,t.g),t.O)),hw(t.U,t.g,"readystatechange",t.nb),e=t.I?tw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ga(),Qk(t.j,t.u,t.A,t.m,t.W,t.s)}K.nb=function(t){t=t.target;const e=this.M;e&&Vn(t)==3?e.l():this.Pa(t)};K.Pa=function(t){try{if(t==this.g)e:{const h=Vn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>h)&&(h!=3||Lf||this.g&&(this.h.h||this.g.ja()||S_(this.g)))){this.J||h!=4||e==7||(e==8||0>=f?ga(3):ga(2)),Pu(this);var n=this.g.da();this.ca=n;t:if(Ew(this)){var r=S_(this.g);t="";var i=r.length,s=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),zo(this);var o="";break t}this.h.i=new de.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Xk(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ha(a)){var l=a;break t}}l=null}if(n=l)_s(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hf(this,n);else{this.i=!1,this.o=3,Kt(12),Ai(this),zo(this);break e}}this.S?(ww(this,h,o),Lf&&this.i&&h==3&&(hw(this.U,this.V,"tick",this.mb),this.V.start())):(_s(this.j,this.m,o,null),Hf(this,o)),h==4&&Ai(this),this.i&&!this.J&&(h==4?zw(this.l,this):(this.i=!1,ja(this)))}else wN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Kt(12)):(this.o=0,Kt(13)),Ai(this),zo(this)}}}catch{}finally{}};function Ew(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ww(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=tN(t,n),i==Pl){e==4&&(t.o=4,Kt(14),r=!1),_s(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Bf){t.o=4,Kt(15),_s(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else _s(t.j,t.m,i,null),Hf(t,i);Ew(t)&&i!=Pl&&i!=Bf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Kt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ep(e),e.M=!0,Kt(11))):(_s(t.j,t.m,n,"[Invalid Chunked Response]"),Ai(t),zo(t))}K.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.C<e.length&&(Pu(this),ww(this,t,e),this.i&&t!=4&&ja(this))}};function tN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Pl:(n=Number(e.substring(n,r)),isNaN(n)?Bf:(r+=1,r+n>e.length?Pl:(e=e.slice(r,r+n),t.C=r+n,e)))}K.cancel=function(){this.J=!0,Ai(this)};function ja(t){t.Y=Date.now()+t.P,bw(t,t.P)}function bw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=$a(Ft(t.lb,t),e)}function Pu(t){t.B&&(de.clearTimeout(t.B),t.B=null)}K.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Jk(this.j,this.A),this.L!=2&&(ga(),Kt(17)),Ai(this),this.o=2,zo(this)):bw(this,this.Y-t)};function zo(t){t.l.H==0||t.J||zw(t.l,t)}function Ai(t){Pu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,up(t.V),fw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Hf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||zf(n.i,t))){if(!t.K&&zf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Nl(n),Du(n);else break e;vp(n),Kt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=$a(Ft(n.ib,n),6e3));if(1>=Ow(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ii(n,11)}else if((t.K||n.g==t)&&Nl(n),!ha(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const h=l[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const f=l[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(mp(s,s.h),s.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,ze(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Kw(r,r.J?r.pa:null,r.Y),o.K){kw(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Pu(a),ja(a)),r.g=o}else jw(r);0<n.j.length&&Lu(n)}else l[0]!="stop"&&l[0]!="close"||Ii(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ii(n,7):yp(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ga(4)}catch{}}function nN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Eu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function rN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Eu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Tw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Eu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=rN(t),r=nN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Aw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ni(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ni){this.h=t.h,Ol(this,t.j),this.s=t.s,this.g=t.g,kl(this,t.m),this.l=t.l;var e=t.i,n=new _a;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),T_(this,n),this.o=t.o}else t&&(e=String(t).match(Aw))?(this.h=!1,Ol(this,e[1]||"",!0),this.s=xo(e[2]||""),this.g=xo(e[3]||"",!0),kl(this,e[4]),this.l=xo(e[5]||"",!0),T_(this,e[6]||"",!0),this.o=xo(e[7]||"")):(this.h=!1,this.i=new _a(null,this.h))}Ni.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Do(e,A_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Do(e,A_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Do(n,n.charAt(0)=="/"?aN:oN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Do(n,lN)),t.join("")};function mr(t){return new Ni(t)}function Ol(t,e,n){t.j=n?xo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function kl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function T_(t,e,n){e instanceof _a?(t.i=e,uN(t.i,t.h)):(n||(e=Do(e,cN)),t.i=new _a(e,t.h))}function ze(t,e,n){t.i.set(e,n)}function Ou(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Do(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var A_=/[#\/\?@]/g,oN=/[#\?:]/g,aN=/[#\?]/g,cN=/[#\?@]/g,lN=/#/g;function _a(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ii(t){t.g||(t.g=new Map,t.h=0,t.i&&iN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=_a.prototype;K.add=function(t,e){ii(this),this.i=null,t=so(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Iw(t,e){ii(t),e=so(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sw(t,e){return ii(t),e=so(t,e),t.g.has(e)}K.forEach=function(t,e){ii(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};K.ta=function(){ii(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};K.Z=function(t){ii(this);let e=[];if(typeof t=="string")Sw(this,t)&&(e=e.concat(this.g.get(so(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return ii(this),this.i=null,t=so(this,t),Sw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Cw(t,e,n){Iw(t,e),0<n.length&&(t.i=null,t.g.set(so(t,e),tp(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function so(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uN(t,e){e&&!t.j&&(ii(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Iw(this,r),Cw(this,i,n))},t)),t.j=e}var hN=class{constructor(t,e){this.g=t,this.map=e}};function Rw(t){this.l=t||fN,de.PerformanceNavigationTiming?(t=de.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(de.g&&de.g.Ka&&de.g.Ka()&&de.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fN=10;function Pw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ow(t){return t.h?1:t.g?t.g.size:0}function zf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mp(t,e){t.g?t.g.add(e):t.h=e}function kw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Rw.prototype.cancel=function(){if(this.i=Nw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Nw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return tp(t.i)}var dN=class{stringify(t){return de.JSON.stringify(t,void 0)}parse(t){return de.JSON.parse(t,void 0)}};function pN(){this.g=new dN}function mN(t,e,n){const r=n||"";try{Tw(t,function(i,s){let o=i;Va(i)&&(o=cp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function gN(t,e){const n=new Iu;if(de.Image){const r=new Image;r.onload=Pc(kc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Pc(kc,n,r,"TestLoadImage: error",!1,e),r.onabort=Pc(kc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Pc(kc,n,r,"TestLoadImage: timeout",!1,e),de.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function kc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ku(t){this.l=t.ec||null,this.j=t.ob||!1}vt(ku,fp);ku.prototype.g=function(){return new Nu(this.l,this.j)};ku.prototype.i=function(t){return function(){return t}}({});function Nu(t,e){yt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=gp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vt(Nu,yt);var gp=0;K=Nu.prototype;K.open=function(t,e){if(this.readyState!=gp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ya(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||de).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ha(this)),this.readyState=gp};K.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ya(this)),this.g&&(this.readyState=3,ya(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof de.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function xw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}K.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ha(this):ya(this),this.readyState==3&&xw(this)}};K.Za=function(t){this.g&&(this.response=this.responseText=t,Ha(this))};K.Ya=function(t){this.g&&(this.response=t,Ha(this))};K.ka=function(){this.g&&Ha(this)};function Ha(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ya(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ya(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Nu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _N=de.JSON.parse;function nt(t){yt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Dw,this.L=this.M=!1}vt(nt,yt);var Dw="",yN=/^https?$/i,vN=["POST","PUT"];K=nt.prototype;K.Oa=function(t){this.M=t};K.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Uf.g(),this.C=this.u?b_(this.u):b_(Uf),this.g.onreadystatechange=Ft(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){I_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=de.FormData&&t instanceof de.FormData,!(0<=XE(vN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vw(this),0<this.B&&((this.L=EN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ft(this.ua,this)):this.A=hp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){I_(this,s)}};function EN(t){return Ms&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.ua=function(){typeof ep<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))};function I_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Lw(t),xu(t)}function Lw(t){t.F||(t.F=!0,St(t,"complete"),St(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,St(this,"complete"),St(this,"abort"),xu(this))};K.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xu(this,!0)),nt.$.N.call(this)};K.La=function(){this.s||(this.G||this.v||this.l?Mw(this):this.kb())};K.kb=function(){Mw(this)};function Mw(t){if(t.h&&typeof ep<"u"&&(!t.C[1]||Vn(t)!=4||t.da()!=2)){if(t.v&&Vn(t)==4)hp(t.La,0,t);else if(St(t,"readystatechange"),Vn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Aw)[1]||null;!i&&de.self&&de.self.location&&(i=de.self.location.protocol.slice(0,-1)),r=!yN.test(i?i.toLowerCase():"")}n=r}if(n)St(t,"complete"),St(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Lw(t)}}finally{xu(t)}}}}function xu(t,e){if(t.g){Vw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||St(t,"ready");try{n.onreadystatechange=r}catch{}}}function Vw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(de.clearTimeout(t.A),t.A=null)}K.isActive=function(){return!!this.g};function Vn(t){return t.g?t.g.readyState:0}K.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}};K.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_N(e)}};function S_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Dw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function wN(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ha(t[r]))continue;var n=Wk(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}$k(e,function(r){return r.join(", ")})}K.Ia=function(){return this.m};K.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fw(t){let e="";return rp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function _p(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Fw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ze(t,e,n))}function bo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $w(t){this.Ga=0,this.j=[],this.l=new Iu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bo("baseRetryDelayMs",5e3,t),this.hb=bo("retryDelaySeedMs",1e4,t),this.eb=bo("forwardChannelMaxRetries",2,t),this.xa=bo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Rw(t&&t.concurrentRequestLimit),this.Ja=new pN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}K=$w.prototype;K.ra=8;K.H=1;function yp(t){if(Uw(t),t.H==3){var e=t.W++,n=mr(t.I);if(ze(n,"SID",t.K),ze(n,"RID",e),ze(n,"TYPE","terminate"),za(t,n),e=new Ba(t,t.l,e),e.L=2,e.v=Ou(mr(n)),n=!1,de.navigator&&de.navigator.sendBeacon)try{n=de.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&de.Image&&(new Image().src=e.v,n=!0),n||(e.g=Gw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ja(e)}Ww(t)}function Du(t){t.g&&(Ep(t),t.g.cancel(),t.g=null)}function Uw(t){Du(t),t.u&&(de.clearTimeout(t.u),t.u=null),Nl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&de.clearTimeout(t.m),t.m=null)}function Lu(t){if(!Pw(t.i)&&!t.m){t.m=!0;var e=t.Na;da||lw(),pa||(da(),pa=!0),lp.add(e,t),t.C=0}}function bN(t,e){return Ow(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=$a(Ft(t.Na,t,e),qw(t,t.C)),t.C++,!0)}K.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ba(this,this.l,t);let s=this.s;if(this.U&&(s?(s=tw(s),nw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Bw(this,i,e),n=mr(this.I),ze(n,"RID",t),ze(n,"CVER",22),this.F&&ze(n,"X-HTTP-Session-Id",this.F),za(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Fw(s)))+"&"+e:this.o&&_p(n,this.o,s)),mp(this.i,i),this.bb&&ze(n,"TYPE","init"),this.P?(ze(n,"$req",e),ze(n,"SID","null"),i.aa=!0,jf(i,n,null)):jf(i,n,e),this.H=2}}else this.H==3&&(t?C_(this,t):this.j.length==0||Pw(this.i)||C_(this))};function C_(t,e){var n;e?n=e.m:n=t.W++;const r=mr(t.I);ze(r,"SID",t.K),ze(r,"RID",n),ze(r,"AID",t.V),za(t,r),t.o&&t.s&&_p(r,t.o,t.s),n=new Ba(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Bw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mp(t.i,n),jf(n,r,e)}function za(t,e){t.na&&rp(t.na,function(n,r){ze(e,r,n)}),t.h&&Tw({},function(n,r){ze(e,r,n)})}function Bw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ft(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const h=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{mN(h,o,"req"+l+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function jw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;da||lw(),pa||(da(),pa=!0),lp.add(e,t),t.A=0}}function vp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=$a(Ft(t.Ma,t),qw(t,t.A)),t.A++,!0)}K.Ma=function(){if(this.u=null,Hw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=$a(Ft(this.jb,this),t)}};K.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Kt(10),Du(this),Hw(this))};function Ep(t){t.B!=null&&(de.clearTimeout(t.B),t.B=null)}function Hw(t){t.g=new Ba(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=mr(t.wa);ze(e,"RID","rpc"),ze(e,"SID",t.K),ze(e,"AID",t.V),ze(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ze(e,"TO",t.qa),ze(e,"TYPE","xmlhttp"),za(t,e),t.o&&t.s&&_p(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ou(mr(e)),n.s=null,n.S=!0,vw(n,t)}K.ib=function(){this.v!=null&&(this.v=null,Du(this),vp(this),Kt(19))};function Nl(t){t.v!=null&&(de.clearTimeout(t.v),t.v=null)}function zw(t,e){var n=null;if(t.g==e){Nl(t),Ep(t),t.g=null;var r=2}else if(zf(t.i,e))n=e.F,kw(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Su(),St(r,new mw(r,n)),Lu(t)}else jw(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&bN(t,e)||r==2&&vp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ii(t,5);break;case 4:Ii(t,10);break;case 3:Ii(t,6);break;default:Ii(t,2)}}}function qw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ii(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ft(t.pb,t);n||(n=new Ni("//www.google.com/images/cleardot.gif"),de.location&&de.location.protocol=="http"||Ol(n,"https"),Ou(n)),gN(n.toString(),r)}else Kt(2);t.H=0,t.h&&t.h.za(e),Ww(t),Uw(t)}K.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Kt(2)):(this.l.info("Failed to ping google.com"),Kt(1))};function Ww(t){if(t.H=0,t.ma=[],t.h){const e=Nw(t.i);(e.length!=0||t.j.length!=0)&&(__(t.ma,e),__(t.ma,t.j),t.i.i.length=0,tp(t.j),t.j.length=0),t.h.ya()}}function Kw(t,e,n){var r=n instanceof Ni?mr(n):new Ni(n);if(r.g!="")e&&(r.g=e+"."+r.g),kl(r,r.m);else{var i=de.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ni(null);r&&Ol(s,r),e&&(s.g=e),i&&kl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ze(r,n,e),ze(r,"VER",t.ra),za(t,r),r}function Gw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new nt(new ku({ob:!0})):new nt(t.va),e.Oa(t.J),e}K.isActive=function(){return!!this.h&&this.h.isActive(this)};function Yw(){}K=Yw.prototype;K.Ba=function(){};K.Aa=function(){};K.za=function(){};K.ya=function(){};K.isActive=function(){return!0};K.Va=function(){};function xl(){if(Ms&&!(10<=Number(Lk)))throw Error("Environmental error: no available transport.")}xl.prototype.g=function(t,e){return new an(t,e)};function an(t,e){yt.call(this),this.g=new $w(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ha(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ha(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new oo(this)}vt(an,yt);an.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Kt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Kw(t,null,t.Y),Lu(t)};an.prototype.close=function(){yp(this.g)};an.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=cp(t),t=n);e.j.push(new hN(e.fb++,t)),e.H==3&&Lu(e)};an.prototype.N=function(){this.g.h=null,delete this.j,yp(this.g),delete this.g,an.$.N.call(this)};function Qw(t){dp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}vt(Qw,dp);function Xw(){pp.call(this),this.status=1}vt(Xw,pp);function oo(t){this.g=t}vt(oo,Yw);oo.prototype.Ba=function(){St(this.g,"a")};oo.prototype.Aa=function(t){St(this.g,new Qw(t))};oo.prototype.za=function(t){St(this.g,new Xw)};oo.prototype.ya=function(){St(this.g,"b")};function TN(){this.blockSize=-1}function Rn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}vt(Rn,TN);Rn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Rn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)qh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){qh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){qh(this,r),i=0;break}}this.h=i,this.i+=e};Rn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ve(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var AN={};function wp(t){return-128<=t&&128>t?Nk(t,function(e){return new Ve([e|0],0>e?-1:0)}):new Ve([t|0],0>t?-1:0)}function Fn(t){if(isNaN(t)||!isFinite(t))return Cs;if(0>t)return Tt(Fn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=qf;return new Ve(e,0)}function Jw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Tt(Jw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Fn(Math.pow(e,8)),r=Cs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Fn(Math.pow(e,s)),r=r.R(s).add(Fn(o))):(r=r.R(n),r=r.add(Fn(o)))}return r}var qf=4294967296,Cs=wp(0),Wf=wp(1),R_=wp(16777216);K=Ve.prototype;K.ea=function(){if(gn(this))return-Tt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:qf+r)*e,e*=qf}return t};K.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(lr(this))return"0";if(gn(this))return"-"+Tt(this).toString(t);for(var e=Fn(Math.pow(t,6)),n=this,r="";;){var i=Ll(n,e).g;n=Dl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,lr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};K.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function lr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function gn(t){return t.h==-1}K.X=function(t){return t=Dl(this,t),gn(t)?-1:lr(t)?0:1};function Tt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ve(n,~t.h).add(Wf)}K.abs=function(){return gn(this)?Tt(this):this};K.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ve(n,n[n.length-1]&-2147483648?-1:0)};function Dl(t,e){return t.add(Tt(e))}K.R=function(t){if(lr(this)||lr(t))return Cs;if(gn(this))return gn(t)?Tt(this).R(Tt(t)):Tt(Tt(this).R(t));if(gn(t))return Tt(this.R(Tt(t)));if(0>this.X(R_)&&0>t.X(R_))return Fn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,Nc(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Nc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Nc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Nc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ve(n,0)};function Nc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function To(t,e){this.g=t,this.h=e}function Ll(t,e){if(lr(e))throw Error("division by zero");if(lr(t))return new To(Cs,Cs);if(gn(t))return e=Ll(Tt(t),e),new To(Tt(e.g),Tt(e.h));if(gn(e))return e=Ll(t,Tt(e)),new To(Tt(e.g),e.h);if(30<t.g.length){if(gn(t)||gn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wf,r=e;0>=r.X(t);)n=P_(n),r=P_(r);var i=hs(n,1),s=hs(r,1);for(r=hs(r,2),n=hs(n,2);!lr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=hs(r,1),n=hs(n,1)}return e=Dl(t,i.R(e)),new To(i,e)}for(i=Cs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Fn(n),o=s.R(e);gn(o)||0<o.X(t);)n-=r,s=Fn(n),o=s.R(e);lr(s)&&(s=Wf),i=i.add(s),t=Dl(t,o)}return new To(i,t)}K.gb=function(t){return Ll(this,t).h};K.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ve(n,this.h&t.h)};K.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ve(n,this.h|t.h)};K.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ve(n,this.h^t.h)};function P_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ve(n,t.h)}function hs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ve(i,t.h)}xl.prototype.createWebChannel=xl.prototype.g;an.prototype.send=an.prototype.u;an.prototype.open=an.prototype.m;an.prototype.close=an.prototype.close;Cu.NO_ERROR=0;Cu.TIMEOUT=8;Cu.HTTP_ERROR=6;gw.COMPLETE="complete";_w.EventType=Ua;Ua.OPEN="a";Ua.CLOSE="b";Ua.ERROR="c";Ua.MESSAGE="d";yt.prototype.listen=yt.prototype.O;nt.prototype.listenOnce=nt.prototype.P;nt.prototype.getLastError=nt.prototype.Sa;nt.prototype.getLastErrorCode=nt.prototype.Ia;nt.prototype.getStatus=nt.prototype.da;nt.prototype.getResponseJson=nt.prototype.Wa;nt.prototype.getResponseText=nt.prototype.ja;nt.prototype.send=nt.prototype.ha;nt.prototype.setWithCredentials=nt.prototype.Oa;Rn.prototype.digest=Rn.prototype.l;Rn.prototype.reset=Rn.prototype.reset;Rn.prototype.update=Rn.prototype.j;Ve.prototype.add=Ve.prototype.add;Ve.prototype.multiply=Ve.prototype.R;Ve.prototype.modulo=Ve.prototype.gb;Ve.prototype.compare=Ve.prototype.X;Ve.prototype.toNumber=Ve.prototype.ea;Ve.prototype.toString=Ve.prototype.toString;Ve.prototype.getBits=Ve.prototype.D;Ve.fromNumber=Fn;Ve.fromString=Jw;var IN=function(){return new xl},SN=function(){return Su()},Wh=Cu,CN=gw,RN=Qi,O_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},xc=_w,PN=nt,ON=Rn,Rs=Ve;const k_="@firebase/firestore";/**
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
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
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
 */let ao="10.5.0";/**
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
 */const $i=new Qd("@firebase/firestore");function Ao(){return $i.logLevel}function J(t,...e){if($i.logLevel<=Ie.DEBUG){const n=e.map(bp);$i.debug(`Firestore (${ao}): ${t}`,...n)}}function gr(t,...e){if($i.logLevel<=Ie.ERROR){const n=e.map(bp);$i.error(`Firestore (${ao}): ${t}`,...n)}}function Vs(t,...e){if($i.logLevel<=Ie.WARN){const n=e.map(bp);$i.warn(`Firestore (${ao}): ${t}`,...n)}}function bp(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+t;throw gr(e),new Error(e)}function We(t,e){t||fe()}function _e(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends nr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Zw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class NN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xN{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string"),new Zw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new xt(e)}}class DN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class LN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new DN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(We(typeof n.token=="string"),this.R=n.token,new MN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function FN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class eb{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ne(t,e){return t<e?-1:t>e?1:0}function Fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ft(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new ft(0,0))}static max(){return new pe(new ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class va{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return va.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof va?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ge extends va{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const $N=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends va{construct(e,n,r){return new It(e,n,r)}static isValidIdentifier(e){return $N.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ie(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ie(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Ge.fromString(e))}static fromName(e){return new ae(Ge.fromString(e).popFirst(5))}static empty(){return new ae(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Ge(e.slice()))}}function UN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new ft(n+1,0):new ft(n,r));return new Xr(i,ae.empty(),e)}function BN(t){return new Xr(t.readTime,t.key,-1)}class Xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xr(pe.min(),ae.empty(),-1)}static max(){return new Xr(pe.max(),ae.empty(),-1)}}function jN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const HN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qa(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==HN)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(h=>{o[l]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Wa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Tp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Tp.ae=-1;function Mu(t){return t==null}function Ml(t){return t===0&&1/t==-1/0}function qN(t){return typeof t=="number"&&Number.isInteger(t)&&!Ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function N_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Je{constructor(e,n){this.comparator=e,this.root=n||wt.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dc(this.root,e,this.comparator,!0)}}class Dc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??wt.RED,this.left=i??wt.EMPTY,this.right=s??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new wt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return wt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ct{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new x_(this.data.getIterator())}getIteratorFrom(e){return new x_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class x_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class sn{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new sn([])}unionWith(e){let n=new Ct(It.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class nb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new nb("Invalid base64 string: "+s):s}}(e);return new Bt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const WN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(We(!!t),typeof t=="string"){let e=0;const n=WN.exec(t);if(We(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ui(t){return typeof t=="string"?Bt.fromBase64String(t):Bt.fromUint8Array(t)}/**
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
 */function Ap(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ip(t){const e=t.mapValue.fields.__previous_value__;return Ap(e)?Ip(e):e}function Ea(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */class KN{constructor(e,n,r,i,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class wa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Lc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ap(t)?4:GN(t)?9007199254740991:10:fe()}function Xn(t,e){if(t===e)return!0;const n=Bi(t);if(n!==Bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ea(t).isEqual(Ea(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Jr(i.timestampValue),a=Jr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ui(i.bytesValue).isEqual(Ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ct(i.geoPointValue.latitude)===ct(s.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ct(i.integerValue)===ct(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ct(i.doubleValue),a=ct(s.doubleValue);return o===a?Ml(o)===Ml(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(N_(o)!==N_(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Xn(o[c],a[c])))return!1;return!0}(t,e);default:return fe()}}function ba(t,e){return(t.values||[]).find(n=>Xn(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=Bi(t),r=Bi(e);if(n!==r)return Ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ct(s.integerValue||s.doubleValue),c=ct(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return D_(t.timestampValue,e.timestampValue);case 4:return D_(Ea(t),Ea(e));case 5:return Ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ui(s),c=Ui(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const h=Ne(a[l],c[l]);if(h!==0)return h}return Ne(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ne(ct(s.latitude),ct(o.latitude));return a!==0?a:Ne(ct(s.longitude),ct(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const h=$s(a[l],c[l]);if(h)return h}return Ne(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Lc.mapValue&&o===Lc.mapValue)return 0;if(s===Lc.mapValue)return 1;if(o===Lc.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},h=Object.keys(l);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=Ne(c[f],h[f]);if(p!==0)return p;const m=$s(a[c[f]],l[h[f]]);if(m!==0)return m}return Ne(c.length,h.length)}(t.mapValue,e.mapValue);default:throw fe()}}function D_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ne(t,e);const n=Jr(t),r=Jr(e),i=Ne(n.seconds,r.seconds);return i!==0?i:Ne(n.nanos,r.nanos)}function Us(t){return Kf(t)}function Kf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Kf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Kf(n.fields[o])}`;return i+"}"}(t.mapValue):fe()}function Gf(t){return!!t&&"integerValue"in t}function Sp(t){return!!t&&"arrayValue"in t}function L_(t){return!!t&&"nullValue"in t}function M_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tl(t){return!!t&&"mapValue"in t}function qo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qo(n)}setAll(e){let n=It.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=qo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());tl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];tl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Zt(qo(this.value))}}function rb(t){const e=[];return Xi(t.fields,(n,r)=>{const i=new It([n]);if(tl(r)){const s=rb(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new sn(e)}/**
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
 */class Dt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,pe.min(),pe.min(),pe.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,i){return new Dt(e,1,n,pe.min(),r,i,0)}static newNoDocument(e,n){return new Dt(e,2,n,pe.min(),pe.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,pe.min(),pe.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vl{constructor(e,n){this.position=e,this.inclusive=n}}function V_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=$s(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function F_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fl{constructor(e,n="asc"){this.field=e,this.dir=n}}function YN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ib{}class ht extends ib{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new XN(e,n,r):n==="array-contains"?new ex(e,r):n==="in"?new tx(e,r):n==="not-in"?new nx(e,r):n==="array-contains-any"?new rx(e,r):new ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new JN(e,r):new ZN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($s(n,this.value)):n!==null&&Bi(this.value)===Bi(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jn extends ib{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Jn(e,n)}matches(e){return sb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function sb(t){return t.op==="and"}function ob(t){return QN(t)&&sb(t)}function QN(t){for(const e of t.filters)if(e instanceof Jn)return!1;return!0}function Yf(t){if(t instanceof ht)return t.field.canonicalString()+t.op.toString()+Us(t.value);if(ob(t))return t.filters.map(e=>Yf(e)).join(",");{const e=t.filters.map(n=>Yf(n)).join(",");return`${t.op}(${e})`}}function ab(t,e){return t instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.field.isEqual(i.field)&&Xn(r.value,i.value)}(t,e):t instanceof Jn?function(r,i){return i instanceof Jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ab(o,i.filters[a]),!0):!1}(t,e):void fe()}function cb(t){return t instanceof ht?function(n){return`${n.field.canonicalString()} ${n.op} ${Us(n.value)}`}(t):t instanceof Jn?function(n){return n.op.toString()+" {"+n.getFilters().map(cb).join(" ,")+"}"}(t):"Filter"}class XN extends ht{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class JN extends ht{constructor(e,n){super(e,"in",n),this.keys=lb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZN extends ht{constructor(e,n){super(e,"not-in",n),this.keys=lb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class ex extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sp(n)&&ba(n.arrayValue,this.value)}}class tx extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ba(this.value.arrayValue,n)}}class nx extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ba(this.value.arrayValue,n)}}class rx extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ba(this.value.arrayValue,r))}}/**
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
 */class ix{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function $_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ix(t,e,n,r,i,s,o)}function Cp(t){const e=_e(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Mu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Us(r)).join(",")),e.le=n}return e.le}function Rp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!YN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ab(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!F_(t.startAt,e.startAt)&&F_(t.endAt,e.endAt)}function Qf(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function sx(t,e,n,r,i,s,o,a){return new Vu(t,e,n,r,i,s,o,a)}function Pp(t){return new Vu(t)}function U_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ox(t){return t.collectionGroup!==null}function Wo(t){const e=_e(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ct(It.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new Fl(s,r))}),n.has(It.keyField().canonicalString())||e.he.push(new Fl(It.keyField(),r))}return e.he}function Hn(t){const e=_e(t);return e.Pe||(e.Pe=ax(e,Wo(t))),e.Pe}function ax(t,e){if(t.limitType==="F")return $_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Fl(i.field,s)});const n=t.endAt?new Vl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vl(t.startAt.position,t.startAt.inclusive):null;return $_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xf(t,e,n){return new Vu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fu(t,e){return Rp(Hn(t),Hn(e))&&t.limitType===e.limitType}function ub(t){return`${Cp(Hn(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>cb(i)).join(", ")}]`),Mu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Us(i)).join(",")),`Target(${r})`}(Hn(t))}; limitType=${t.limitType})`}function $u(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ae.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Wo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=V_(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Wo(r),i)||r.endAt&&!function(o,a,c){const l=V_(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Wo(r),i))}(t,e)}function cx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hb(t){return(e,n)=>{let r=!1;for(const i of Wo(t)){const s=lx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lx(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?$s(c,l):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
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
 */class co{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return tb(this.inner)}size(){return this.innerSize}}/**
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
 */const ux=new Je(ae.comparator);function _r(){return ux}const fb=new Je(ae.comparator);function Lo(...t){let e=fb;for(const n of t)e=e.insert(n.key,n);return e}function db(t){let e=fb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Si(){return Ko()}function pb(){return Ko()}function Ko(){return new co(t=>t.toString(),(t,e)=>t.isEqual(e))}const hx=new Je(ae.comparator),fx=new Ct(ae.comparator);function Ae(...t){let e=fx;for(const n of t)e=e.add(n);return e}const dx=new Ct(Ne);function px(){return dx}/**
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
 */function mb(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ml(e)?"-0":e}}function gb(t){return{integerValue:""+t}}function mx(t,e){return qN(e)?gb(e):mb(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Uu{constructor(){this._=void 0}}function gx(t,e,n){return t instanceof $l?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ap(s)&&(s=Ip(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ta?yb(t,e):t instanceof Aa?vb(t,e):function(i,s){const o=_b(i,s),a=B_(o)+B_(i.Te);return Gf(o)&&Gf(i.Te)?gb(a):mb(i.serializer,a)}(t,e)}function _x(t,e,n){return t instanceof Ta?yb(t,e):t instanceof Aa?vb(t,e):n}function _b(t,e){return t instanceof Ul?function(r){return Gf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $l extends Uu{}class Ta extends Uu{constructor(e){super(),this.elements=e}}function yb(t,e){const n=Eb(e);for(const r of t.elements)n.some(i=>Xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Aa extends Uu{constructor(e){super(),this.elements=e}}function vb(t,e){let n=Eb(e);for(const r of t.elements)n=n.filter(i=>!Xn(i,r));return{arrayValue:{values:n}}}class Ul extends Uu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function B_(t){return ct(t.integerValue||t.doubleValue)}function Eb(t){return Sp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ta&&i instanceof Ta||r instanceof Aa&&i instanceof Aa?Fs(r.elements,i.elements,Xn):r instanceof Ul&&i instanceof Ul?Xn(r.Te,i.Te):r instanceof $l&&i instanceof $l}(t.transform,e.transform)}class vx{constructor(e,n){this.version=e,this.transformResults=n}}class zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bu{}function wb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tb(t.key,zn.none()):new Ka(t.key,t.data,zn.none());{const n=t.data,r=Zt.empty();let i=new Ct(It.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new si(t.key,r,new sn(i.toArray()),zn.none())}}function Ex(t,e,n){t instanceof Ka?function(i,s,o){const a=i.value.clone(),c=H_(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof si?function(i,s,o){if(!nl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=H_(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(bb(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Go(t,e,n,r){return t instanceof Ka?function(s,o,a,c){if(!nl(s.precondition,o))return a;const l=s.value.clone(),h=z_(s.fieldTransforms,c,o);return l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof si?function(s,o,a,c){if(!nl(s.precondition,o))return a;const l=z_(s.fieldTransforms,c,o),h=o.data;return h.setAll(bb(s)),h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return nl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function wx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=_b(r.transform,i||null);s!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,s))}return n||null}function j_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fs(r,i,(s,o)=>yx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ka extends Bu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class si extends Bu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function bb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function H_(t,e,n){const r=new Map;We(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_x(o,a,n[i]))}return r}function z_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gx(s,o,e))}return r}class Tb extends Bu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bx extends Bu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Tx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ex(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=pb();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=wb(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,r)=>j_(n,r))&&Fs(this.baseMutations,e.baseMutations,(n,r)=>j_(n,r))}}class Op{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){We(e.mutations.length===r.length);let i=function(){return hx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Op(e,n,r,i)}}/**
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
 */class Ax{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ix{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ot,Ce;function Sx(t){switch(t){default:return fe();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function Ab(t){if(t===void 0)return gr("GRPC error has no .code"),F.UNKNOWN;switch(t){case ot.OK:return F.OK;case ot.CANCELLED:return F.CANCELLED;case ot.UNKNOWN:return F.UNKNOWN;case ot.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ot.INTERNAL:return F.INTERNAL;case ot.UNAVAILABLE:return F.UNAVAILABLE;case ot.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ot.NOT_FOUND:return F.NOT_FOUND;case ot.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ot.ABORTED:return F.ABORTED;case ot.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ot.DATA_LOSS:return F.DATA_LOSS;default:return fe()}}(Ce=ot||(ot={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Cx(){return new TextEncoder}/**
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
 */const Rx=new Rs([4294967295,4294967295],0);function q_(t){const e=Cx().encode(t),n=new ON;return n.update(e),new Uint8Array(n.digest())}function W_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Rs([n,r],0),new Rs([i,s],0)]}class kp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Mo(`Invalid padding: ${n}`);if(r<0)throw new Mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Mo(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Rs.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(Rs.fromNumber(r)));return i.compare(Rx)===1&&(i=new Rs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ee===0)return!1;const n=q_(e),[r,i]=W_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new kp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=q_(e),[r,i]=W_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ju{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ju(pe.min(),i,new Je(Ne),_r(),Ae())}}class Ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ga(r,n,Ae(),Ae(),Ae())}}/**
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
 */class rl{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class Ib{constructor(e,n){this.targetId=e,this.ge=n}}class Sb{constructor(e,n,r=Bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class K_{constructor(){this.pe=0,this.ye=Y_(),this.we=Bt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get Ce(){return this.be}ve(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ae(),n=Ae(),r=Ae();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:fe()}}),new Ga(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=Y_()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class Px{constructor(e){this.ke=e,this.qe=new Map,this.Qe=_r(),this.Ke=G_(),this.$e=new Je(Ne)}Ue(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.We(n,e.fe):this.Ge(n,e.key,e.fe);for(const n of e.removedTargetIds)this.Ge(n,e.key,e.fe)}ze(e){this.forEachTarget(e,n=>{const r=this.je(n);switch(e.state){case 0:this.He(n)&&r.ve(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.ve(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.He(n)&&(r.Le(),r.ve(e.resumeToken));break;case 4:this.He(n)&&(this.Je(n),r.ve(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.He(i)&&n(i)})}Ye(e){const n=e.targetId,r=e.ge.count,i=this.Ze(n);if(i){const s=i.target;if(Qf(s))if(r===0){const o=new ae(s.path);this.Ge(n,o,Dt.newNoDocument(o,pe.min()))}else We(r===1);else{const o=this.Xe(n);if(o!==r){const a=this.et(e),c=a?this.tt(a,e,o):1;if(c!==0){this.Je(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(n,l)}}}}}et(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ui(r).toUint8Array()}catch(c){if(c instanceof nb)return Vs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new kp(o,i,s)}catch(c){return Vs(c instanceof Mo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ee===0?null:a}tt(e,n,r){return n.ge.count===r-this.it(e,n.targetId)?0:2}it(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.rt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ge(n,s,null),i++)}),i}st(e){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Ze(o);if(a){if(s.current&&Qf(a.target)){const c=new ae(a.target.path);this.Qe.get(c)!==null||this.ot(o,c)||this.Ge(o,c,Dt.newNoDocument(c,e))}s.Ce&&(n.set(o,s.Fe()),s.Me())}});let r=Ae();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ze(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new ju(e,n,this.$e,this.Qe,r);return this.Qe=_r(),this.Ke=G_(),this.$e=new Je(Ne),i}We(e,n){if(!this.He(e))return;const r=this.ot(e,n.key)?2:0;this.je(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.Ke=this.Ke.insert(n.key,this._t(n.key).add(e))}Ge(e,n,r){if(!this.He(e))return;const i=this.je(e);this.ot(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this._t(n).delete(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}Xe(e){const n=this.je(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.je(e).Ne()}je(e){let n=this.qe.get(e);return n||(n=new K_,this.qe.set(e,n)),n}_t(e){let n=this.Ke.get(e);return n||(n=new Ct(Ne),this.Ke=this.Ke.insert(e,n)),n}He(e){const n=this.Ze(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Ze(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.ut(e)}Je(e){this.qe.set(e,new K_),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.Ge(e,n,null)})}ot(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function G_(){return new Je(ae.comparator)}function Y_(){return new Je(ae.comparator)}const Ox=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Nx=(()=>({and:"AND",or:"OR"}))();class xx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jf(t,e){return t.useProto3Json||Mu(e)?e:{value:e}}function Bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Dx(t,e){return Bl(t,e.toTimestamp())}function qn(t){return We(!!t),pe.fromTimestamp(function(n){const r=Jr(n);return new ft(r.seconds,r.nanos)}(t))}function Np(t,e){return function(r){return new Ge(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Rb(t){const e=Ge.fromString(t);return We(Nb(e)),e}function Zf(t,e){return Np(t.databaseId,e.path)}function Kh(t,e){const n=Rb(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(Pb(n))}function ed(t,e){return Np(t.databaseId,e)}function Lx(t){const e=Rb(t);return e.length===4?Ge.emptyPath():Pb(e)}function td(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pb(t){return We(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Q_(t,e,n){return{name:Zf(t,e),fields:n.value.mapValue.fields}}function Mx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,h){return l.useProto3Json?(We(h===void 0||typeof h=="string"),Bt.fromBase64String(h||"")):(We(h===void 0||h instanceof Uint8Array),Bt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const h=l.code===void 0?F.UNKNOWN:Ab(l.code);return new ie(h,l.message||"")}(o);n=new Sb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kh(t,r.document.name),s=qn(r.document.updateTime),o=r.document.createTime?qn(r.document.createTime):pe.min(),a=new Zt({mapValue:{fields:r.document.fields}}),c=Dt.newFoundDocument(i,s,o,a),l=r.targetIds||[],h=r.removedTargetIds||[];n=new rl(l,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kh(t,r.document),s=r.readTime?qn(r.readTime):pe.min(),o=Dt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new rl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kh(t,r.document),s=r.removedTargetIds||[];n=new rl([],s,i,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ix(i,s),a=r.targetId;n=new Ib(a,o)}}return n}function Vx(t,e){let n;if(e instanceof Ka)n={update:Q_(t,e.key,e.value)};else if(e instanceof Tb)n={delete:Zf(t,e.key)};else if(e instanceof si)n={update:Q_(t,e.key,e.data),updateMask:Wx(e.fieldMask)};else{if(!(e instanceof bx))return fe();n={verify:Zf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof $l)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ta)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Aa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ul)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Dx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:fe()}(t,e.precondition)),n}function Fx(t,e){return t&&t.length>0?(We(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?qn(i.updateTime):qn(s);return o.isEqual(pe.min())&&(o=qn(s)),new vx(o,i.transformResults||[])}(n,e))):[]}function $x(t,e){return{documents:[ed(t,e.path)]}}function Ux(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ed(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ed(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return kb(Jn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(f){return{field:ds(f.field),direction:Hx(f.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Jf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Bx(t){let e=Lx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){We(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=Ob(f);return p instanceof Jn&&ob(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(v){return new Fl(ps(v.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Mu(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(f){const p=!!f.before,m=f.values||[];return new Vl(m,p)}(n.startAt));let l=null;return n.endAt&&(l=function(f){const p=!f.before,m=f.values||[];return new Vl(m,p)}(n.endAt)),sx(e,i,o,s,a,"F",c,l)}function jx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ob(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ps(n.unaryFilter.field);return ht.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ps(n.unaryFilter.field);return ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return ht.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return ht.create(ps(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jn.create(n.compositeFilter.filters.map(r=>Ob(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function Hx(t){return Ox[t]}function zx(t){return kx[t]}function qx(t){return Nx[t]}function ds(t){return{fieldPath:t.canonicalString()}}function ps(t){return It.fromServerFormat(t.fieldPath)}function kb(t){return t instanceof ht?function(n){if(n.op==="=="){if(M_(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NAN"}};if(L_(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(M_(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NAN"}};if(L_(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(n.field),op:zx(n.op),value:n.value}}}(t):t instanceof Jn?function(n){const r=n.getFilters().map(i=>kb(i));return r.length===1?r[0]:{compositeFilter:{op:qx(n.op),filters:r}}}(t):fe()}function Wx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class jr{constructor(e,n,r,i,s=pe.min(),o=pe.min(),a=Bt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Kx{constructor(e){this.ct=e}}function Gx(t){const e=Bx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xf(e,e.limit,"L"):e}/**
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
 */class Yx{constructor(){this._n=new Qx}addToCollectionParentIndex(e,n){return this._n.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Xr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Xr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class Qx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ct(Ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ct(Ge.comparator)).toArray()}}/**
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
 */class Bs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Bs(0)}static Bn(){return new Bs(-1)}}/**
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
 */class Xx{constructor(){this.changes=new co(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Jx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Zx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Go(r.mutation,i,sn.empty(),ft.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const i=Si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Lo();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=_r();const o=Ko(),a=function(){return Ko()}();return n.forEach((c,l)=>{const h=r.get(l.key);i.has(l.key)&&(h===void 0||h.mutation instanceof si)?s=s.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),Go(h.mutation,l,h.mutation.getFieldMask(),ft.now())):o.set(l.key,sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,h)=>o.set(l,h)),n.forEach((l,h)=>{var f;return a.set(l,new Jx(h,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ko();let i=new Je((o,a)=>o-a),s=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let h=r.get(c)||sn.empty();h=a.applyToLocalView(l,h),r.set(c,h);const f=(i.get(a.batchId)||Ae()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,h=c.value,f=pb();h.forEach(p=>{if(!s.has(p)){const m=wb(n.get(p),r.get(p));m!==null&&f.set(p,m),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ox(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(Si());let a=-1,c=s;return o.next(l=>$.forEach(l,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,Ae())).next(h=>({batchId:a,changes:db(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let i=Lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Lo();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,c=>{const l=function(f,p){return new Vu(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,l)=>{const h=l.getKey();o.get(h)===null&&(o=o.insert(h,Dt.newInvalidDocument(h)))});let a=Lo();return o.forEach((c,l)=>{const h=s.get(c);h!==void 0&&Go(h.mutation,l,sn.empty(),ft.now()),$u(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class eD{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:qn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Gx(i.bundledQuery),readTime:qn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class tD{constructor(){this.overlays=new Je(ae.comparator),this.hr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Si();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Si(),s=n.length+1,o=new ae(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let h=s.get(l.largestBatchId);h===null&&(h=Si(),s=s.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=Si(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ax(n,r));let s=this.hr.get(n);s===void 0&&(s=Ae(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class xp{constructor(){this.Pr=new Ct(_t.Ir),this.Tr=new Ct(_t.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new _t(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new _t(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ae(new Ge([])),r=new _t(n,e),i=new _t(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ae(new Ge([])),r=new _t(n,e),i=new _t(n,e+1);let s=Ae();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _t(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _t{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ae.comparator(e.key,n.key)||Ne(e.pr,n.pr)}static Er(e,n){return Ne(e.pr,n.pr)||ae.comparator(e.key,n.key)}}/**
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
 */class nD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ct(_t.Ir)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new _t(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _t(n,0),i=new _t(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ct(Ne);return n.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ae.isDocumentKey(s)||(s=s.child(""));const o=new _t(new ae(s),0);let a=new Ct(Ne);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.pr)),!0)},o),$.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){We(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const s=new _t(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new _t(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rD{constructor(e){this.vr=e,this.docs=function(){return new Je(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=_r();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Dt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=_r();const o=n.path,a=new ae(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:h}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||jN(BN(h),r)<=0||(i.has(h.key)||$u(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){fe()}Fr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iD(this)}getSize(e){return $.resolve(this.size)}}class iD extends Xx{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class sD{constructor(e){this.persistence=e,this.Mr=new co(n=>Cp(n),Rp),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new xp,this.targetCount=0,this.Br=Bs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.qn(n),$.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Nr.containsKey(n))}}/**
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
 */class oD{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Tp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new sD(this),this.indexManager=new Yx,this.remoteDocumentCache=function(i){return new rD(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Kx(n),this.$r=new eD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new nD(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const i=new aD(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return $.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class aD extends zN{constructor(e){super(),this.currentSequenceNumber=e}}class Dp{constructor(e){this.persistence=e,this.zr=new xp,this.jr=null}static Hr(e){return new Dp(e)}get Jr(){if(this.jr)return this.jr;throw fe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=ae.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,pe.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Lp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Ae(),i=Ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Lp(e,n.fromCache,r,i)}}/**
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
 */class cD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lD{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new cD;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Ao()<=Ie.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(Ao()<=Ie.DEBUG&&J("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ao()<=Ie.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Hn(n))):$.resolve())}ji(e,n){if(U_(n))return $.resolve(null);let r=Hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xf(n,null,"F"),r=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ae(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,Xf(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,i){return U_(n)||i.isEqual(pe.min())?$.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?$.resolve(null):(Ao()<=Ie.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fs(n)),this.es(e,o,n,UN(i,-1)).next(a=>a))})}Zi(e,n){let r=new Ct(hb(e));return n.forEach((i,s)=>{$u(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Ao()<=Ie.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",fs(n)),this.zi.getDocumentsMatchingQuery(e,n,Xr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class uD{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Je(Ne),this.rs=new co(s=>Cp(s),Rp),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zx(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function hD(t,e,n,r){return new uD(t,e,n,r)}async function xb(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Ae();for(const l of i){o.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}for(const l of s){a.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function fD(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,h){const f=l.batch,p=f.keys();let m=$.resolve();return p.forEach(v=>{m=m.next(()=>h.getEntry(c,v)).next(w=>{const T=l.docVersions.get(v);We(T!==null),w.version.compareTo(T)<0&&(f.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),h.addEntry(w)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ae();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Db(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function dD(t,e){const n=_e(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,f)));let m=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(Bt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),i=i.insert(f,m),function(w,T,b){return w.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(p,m,h)&&a.push(n.Qr.updateTargetData(s,m))});let c=_r(),l=Ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(pD(s,o,e.documentUpdates).next(h=>{c=h.cs,l=h.ls})),!r.isEqual(pe.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.ns=i,s))}function pD(t,e,n){let r=Ae(),i=Ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=_r();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:i}})}function mD(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gD(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function nd(t,e,n){const r=_e(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Wa(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function X_(t,e,n){const r=_e(t);let i=pe.min(),s=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,h){const f=_e(c),p=f.rs.get(h);return p!==void 0?$.resolve(f.ns.get(p)):f.Qr.getTargetData(l,h)}(r,o,Hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:pe.min(),n?s:Ae())).next(a=>(_D(r,cx(e),a),{documents:a,hs:s})))}function _D(t,e,n){let r=t.ss.get(e)||pe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class J_{constructor(){this.activeTargetIds=px()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yD{constructor(){this.no=new J_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new J_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vD{io(e){}shutdown(){}}/**
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
 */class Z_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mc=null;function Gh(){return Mc===null?Mc=function(){return 268435456+Math.round(2147483648*Math.random())}():Mc++,"0x"+Mc.toString(16)}/**
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
 */const ED={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wD{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const Nt="WebChannelConnection";class bD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Gh(),c=this.bo(n,r);J("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,s,o),this.Co(n,c,l,i).then(h=>(J("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Vs("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",i),h})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=ED[n];return`${this.fo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Gh();return new Promise((o,a)=>{const c=new PN;c.setWithCredentials(!0),c.listenOnce(CN.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Wh.NO_ERROR:const h=c.getResponseJson();J(Nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Wh.TIMEOUT:J(Nt,`RPC '${e}' ${s} timed out`),a(new ie(F.DEADLINE_EXCEEDED,"Request time out"));break;case Wh.HTTP_ERROR:const f=c.getStatus();if(J(Nt,`RPC '${e}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const v=function(T){const b=T.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(b)>=0?b:F.UNKNOWN}(m.status);a(new ie(v,m.message))}else a(new ie(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ie(F.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{J(Nt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);J(Nt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const i=Gh(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=IN(),a=SN(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=s.join("");J(Nt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);let p=!1,m=!1;const v=new wD({lo:T=>{m?J(Nt,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(p||(J(Nt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),J(Nt,`RPC '${e}' stream ${i} sending:`,T),f.send(T))},ho:()=>f.close()}),w=(T,b,A)=>{T.listen(b,N=>{try{A(N)}catch(S){setTimeout(()=>{throw S},0)}})};return w(f,xc.EventType.OPEN,()=>{m||J(Nt,`RPC '${e}' stream ${i} transport opened.`)}),w(f,xc.EventType.CLOSE,()=>{m||(m=!0,J(Nt,`RPC '${e}' stream ${i} transport closed`),v.Vo())}),w(f,xc.EventType.ERROR,T=>{m||(m=!0,Vs(Nt,`RPC '${e}' stream ${i} transport errored:`,T),v.Vo(new ie(F.UNAVAILABLE,"The operation could not be completed")))}),w(f,xc.EventType.MESSAGE,T=>{var b;if(!m){const A=T.data[0];We(!!A);const N=A,S=N.error||((b=N[0])===null||b===void 0?void 0:b.error);if(S){J(Nt,`RPC '${e}' stream ${i} received error:`,S);const j=S.status;let G=function(oe){const ce=ot[oe];if(ce!==void 0)return Ab(ce)}(j),re=S.message;G===void 0&&(G=F.INTERNAL,re="Unknown error status: "+j+" with message "+S.message),m=!0,v.Vo(new ie(G,re)),f.close()}else J(Nt,`RPC '${e}' stream ${i} received:`,A),v.mo(A)}}),w(a,RN.STAT_EVENT,T=>{T.stat===O_.PROXY?J(Nt,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===O_.NOPROXY&&J(Nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ro()},0),v}}function Yh(){return typeof document<"u"?document:null}/**
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
 */function Hu(t){return new xx(t,!0)}/**
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
 */class Lb{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Mb{constructor(e,n,r,i,s,o,a,c){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Lb(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(gr(n.toString()),gr("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new ie(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TD extends Mb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=Mx(this.serializer,e),r=function(s){if(!("targetChange"in s))return pe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?qn(o.readTime):pe.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=td(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Qf(c)?{documents:$x(s,c)}:{query:Ux(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Cb(s,o.resumeToken);const l=Jf(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(pe.min())>0){a.readTime=Bl(s,o.snapshotVersion.toTimestamp());const l=Jf(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=jx(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=td(this.serializer),n.removeTarget=e,this.t_(n)}}class AD extends Mb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=Fx(e.writeResults,e.commitTime),r=qn(e.commitTime);return this.listener.T_(r,n)}return We(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=td(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Vx(this.serializer,r))};this.t_(n)}}/**
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
 */class ID extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new ie(F.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(F.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(F.UNKNOWN,s.toString())})}terminate(){this.A_=!0}}class SD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(gr(n),this.g_=!1):J("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class CD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Ji(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=_e(c);l.v_.add(4),await Ya(l),l.x_.set("Unknown"),l.v_.delete(4),await zu(l)}(this))})}),this.x_=new SD(r,i)}}async function zu(t){if(Ji(t))for(const e of t.F_)await e(!0)}async function Ya(t){for(const e of t.F_)await e(!1)}function Vb(t,e){const n=_e(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Fp(n)?Vp(n):lo(n).Jo()&&Mp(n,e))}function Fb(t,e){const n=_e(t),r=lo(n);n.C_.delete(e),r.Jo()&&$b(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Ji(n)&&n.x_.set("Unknown"))}function Mp(t,e){if(t.O_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lo(t).c_(e)}function $b(t,e){t.O_.Ne(e),lo(t).l_(e)}function Vp(t){t.O_=new Px({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.C_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),lo(t).start(),t.x_.p_()}function Fp(t){return Ji(t)&&!lo(t).Ho()&&t.C_.size>0}function Ji(t){return _e(t).v_.size===0}function Ub(t){t.O_=void 0}async function RD(t){t.C_.forEach((e,n)=>{Mp(t,e)})}async function PD(t,e){Ub(t),Fp(t)?(t.x_.S_(e),Vp(t)):t.x_.set("Unknown")}async function OD(t,e,n){if(t.x_.set("Online"),e instanceof Sb&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jl(t,r)}else if(e instanceof rl?t.O_.Ue(e):e instanceof Ib?t.O_.Ye(e):t.O_.ze(e),!n.isEqual(pe.min()))try{const r=await Db(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.C_.get(l);h&&s.C_.set(l,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const h=s.C_.get(c);if(!h)return;s.C_.set(c,h.withResumeToken(Bt.EMPTY_BYTE_STRING,h.snapshotVersion)),$b(s,c);const f=new jr(h.target,c,l,h.sequenceNumber);Mp(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await jl(t,r)}}async function jl(t,e,n){if(!Wa(e))throw e;t.v_.add(1),await Ya(t),t.x_.set("Offline"),n||(n=()=>Db(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await zu(t)})}function Bb(t,e){return e().catch(n=>jl(t,n,e))}async function qu(t){const e=_e(t),n=Zr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;kD(e);)try{const i=await mD(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,ND(e,i)}catch(i){await jl(e,i)}jb(e)&&Hb(e)}function kD(t){return Ji(t)&&t.D_.length<10}function ND(t,e){t.D_.push(e);const n=Zr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function jb(t){return Ji(t)&&!Zr(t).Ho()&&t.D_.length>0}function Hb(t){Zr(t).start()}async function xD(t){Zr(t).d_()}async function DD(t){const e=Zr(t);for(const n of t.D_)e.I_(n.mutations)}async function LD(t,e,n){const r=t.D_.shift(),i=Op.from(r,e,n);await Bb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qu(t)}async function MD(t,e){e&&Zr(t).P_&&await async function(r,i){if(function(o){return Sx(o)&&o!==F.ABORTED}(i.code)){const s=r.D_.shift();Zr(r).Zo(),await Bb(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qu(r)}}(t,e),jb(t)&&Hb(t)}async function ey(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Ji(n);n.v_.add(3),await Ya(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await zu(n)}async function VD(t,e){const n=_e(t);e?(n.v_.delete(2),await zu(n)):e||(n.v_.add(2),await Ya(n),n.x_.set("Unknown"))}function lo(t){return t.N_||(t.N_=function(n,r,i){const s=_e(n);return s.R_(),new TD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:RD.bind(null,t),To:PD.bind(null,t),u_:OD.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Fp(t)?Vp(t):t.x_.set("Unknown")):(await t.N_.stop(),Ub(t))})),t.N_}function Zr(t){return t.B_||(t.B_=function(n,r,i){const s=_e(n);return s.R_(),new AD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:xD.bind(null,t),To:MD.bind(null,t),E_:DD.bind(null,t),T_:LD.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await qu(t)):(await t.B_.stop(),t.D_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
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
 */class $p{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new $p(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Up(t,e){if(gr("AsyncQueue",`${e}: ${t}`),Wa(t))return new ie(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=Lo(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ty{constructor(){this.L_=new Je(ae.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):fe():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class js{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new js(e,n,Ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class FD{constructor(){this.q_=void 0,this.listeners=[]}}class $D{constructor(){this.queries=new co(e=>ub(e),Fu),this.onlineState="Unknown",this.Q_=new Set}}async function zb(t,e){const n=_e(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new FD),i)try{s.q_=await n.onListen(r)}catch(o){const a=Up(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.K_(n.onlineState),s.q_&&e.U_(s.q_)&&Bp(n)}async function qb(t,e){const n=_e(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function UD(t,e){const n=_e(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.U_(i)&&(r=!0);o.q_=i}}r&&Bp(n)}function BD(t,e,n){const r=_e(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Bp(t){t.Q_.forEach(e=>{e.next()})}class Wb{constructor(e,n,r){this.query=e,this.W_=n,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=r||{}}U_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.G_?this.j_(e)&&(this.W_.next(e),n=!0):this.H_(e,this.onlineState)&&(this.J_(e),n=!0),this.z_=e,n}onError(e){this.W_.error(e)}K_(e){this.onlineState=e;let n=!1;return this.z_&&!this.G_&&this.H_(this.z_,e)&&(this.J_(this.z_),n=!0),n}H_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Y_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}j_(e){if(e.docChanges.length>0)return!0;const n=this.z_&&this.z_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}J_(e){e=js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.G_=!0,this.W_.next(e)}}/**
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
 */class Kb{constructor(e){this.key=e}}class Gb{constructor(e){this.key=e}}class jD{constructor(e,n){this.query=e,this.sa=n,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=Ae(),this.mutatedKeys=Ae(),this.aa=hb(e),this.ua=new Ps(this.aa)}get ca(){return this.sa}la(e,n){const r=n?n.ha:new ty,i=n?n.ua:this.ua;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),m=$u(this.query,f)?f:null,v=!!p&&this.mutatedKeys.has(p.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;p&&m?p.data.isEqual(m.data)?v!==w&&(r.track({type:3,doc:m}),T=!0):this.Pa(p,m)||(r.track({type:2,doc:m}),T=!0,(c&&this.aa(m,c)>0||l&&this.aa(m,l)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),T=!0):p&&!m&&(r.track({type:1,doc:p}),T=!0,(c||l)&&(a=!0)),T&&(m?(o=o.add(m),s=w?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{ua:o,ha:r,Xi:a,mutatedKeys:s}}Pa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ua;this.ua=e.ua,this.mutatedKeys=e.mutatedKeys;const s=e.ha.k_();s.sort((l,h)=>function(p,m){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return v(p)-v(m)}(l.type,h.type)||this.aa(l.doc,h.doc)),this.Ia(r);const o=n?this.Ta():[],a=this._a.size===0&&this.current?1:0,c=a!==this.oa;return this.oa=a,s.length!==0||c?{snapshot:new js(this.query,e.ua,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}K_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ua:this.ua,ha:new ty,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(e){return!this.sa.has(e)&&!!this.ua.has(e)&&!this.ua.get(e).hasLocalMutations}Ia(e){e&&(e.addedDocuments.forEach(n=>this.sa=this.sa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.sa=this.sa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this._a;this._a=Ae(),this.ua.forEach(r=>{this.da(r.key)&&(this._a=this._a.add(r.key))});const n=[];return e.forEach(r=>{this._a.has(r)||n.push(new Gb(r))}),this._a.forEach(r=>{e.has(r)||n.push(new Kb(r))}),n}Aa(e){this.sa=e.hs,this._a=Ae();const n=this.la(e.documents);return this.applyChanges(n,!0)}Ra(){return js.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,this.oa===0,this.hasCachedResults)}}class HD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zD{constructor(e){this.key=e,this.Va=!1}}class qD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ma={},this.fa=new co(a=>ub(a),Fu),this.ga=new Map,this.pa=new Set,this.ya=new Je(ae.comparator),this.wa=new Map,this.Sa=new xp,this.ba={},this.Da=new Map,this.Ca=Bs.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return this.va===!0}}async function WD(t,e){const n=n2(t);let r,i;const s=n.fa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ra();else{const o=await gD(n.localStore,Hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await KD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Vb(n.remoteStore,o)}return i}async function KD(t,e,n,r,i){t.Fa=(f,p,m)=>async function(w,T,b,A){let N=T.view.la(b);N.Xi&&(N=await X_(w.localStore,T.query,!1).then(({documents:G})=>T.view.la(G,N)));const S=A&&A.targetChanges.get(T.targetId),j=T.view.applyChanges(N,w.isPrimaryClient,S);return ry(w,T.targetId,j.Ea),j.snapshot}(t,f,p,m);const s=await X_(t.localStore,e,!0),o=new jD(e,s.hs),a=o.la(s.documents),c=Ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);ry(t,n,l.Ea);const h=new HD(e,n,o);return t.fa.set(e,h),t.ga.has(n)?t.ga.get(n).push(e):t.ga.set(n,[e]),l.snapshot}async function GD(t,e){const n=_e(t),r=n.fa.get(e),i=n.ga.get(r.targetId);if(i.length>1)return n.ga.set(r.targetId,i.filter(s=>!Fu(s,e))),void n.fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await nd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Fb(n.remoteStore,r.targetId),rd(n,r.targetId)}).catch(qa)):(rd(n,r.targetId),await nd(n.localStore,r.targetId,!0))}async function YD(t,e,n){const r=r2(t);try{const i=await function(o,a){const c=_e(o),l=ft.now(),h=a.reduce((m,v)=>m.add(v.key),Ae());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=_r(),w=Ae();return c.os.getEntries(m,h).next(T=>{v=T,v.forEach((b,A)=>{A.isValidDocument()||(w=w.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,v)).next(T=>{f=T;const b=[];for(const A of a){const N=wx(A,f.get(A.key).overlayedDocument);N!=null&&b.push(new si(A.key,N,rb(N.value.mapValue),zn.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,b,a)}).next(T=>{p=T;const b=T.applyToLocalDocumentSet(f,w);return c.documentOverlayCache.saveOverlays(m,T.batchId,b)})}).then(()=>({batchId:p.batchId,changes:db(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.ba[o.currentUser.toKey()];l||(l=new Je(Ne)),l=l.insert(a,c),o.ba[o.currentUser.toKey()]=l}(r,i.batchId,n),await Qa(r,i.changes),await qu(r.remoteStore)}catch(i){const s=Up(i,"Failed to persist write");n.reject(s)}}async function Yb(t,e){const n=_e(t);try{const r=await dD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.wa.get(s);o&&(We(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Va=!0:i.modifiedDocuments.size>0?We(o.Va):i.removedDocuments.size>0&&(We(o.Va),o.Va=!1))}),await Qa(n,r,e)}catch(r){await qa(r)}}function ny(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.fa.forEach((s,o)=>{const a=o.view.K_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let l=!1;c.queries.forEach((h,f)=>{for(const p of f.listeners)p.K_(a)&&(l=!0)}),l&&Bp(c)}(r.eventManager,e),i.length&&r.ma.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QD(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.wa.get(e),s=i&&i.key;if(s){let o=new Je(ae.comparator);o=o.insert(s,Dt.newNoDocument(s,pe.min()));const a=Ae().add(s),c=new ju(pe.min(),new Map,new Je(Ne),o,a);await Yb(r,c),r.ya=r.ya.remove(s),r.wa.delete(e),jp(r)}else await nd(r.localStore,e,!1).then(()=>rd(r,e,n)).catch(qa)}async function XD(t,e){const n=_e(t),r=e.batch.batchId;try{const i=await fD(n.localStore,e);Xb(n,r,null),Qb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qa(n,i)}catch(i){await qa(i)}}async function JD(t,e,n){const r=_e(t);try{const i=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return c.mutationQueue.lookupMutationBatch(l,a).next(f=>(We(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(l,f))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>c.localDocuments.getDocuments(l,h))})}(r.localStore,e);Xb(r,e,n),Qb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qa(r,i)}catch(i){await qa(i)}}function Qb(t,e){(t.Da.get(e)||[]).forEach(n=>{n.resolve()}),t.Da.delete(e)}function Xb(t,e,n){const r=_e(t);let i=r.ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ba[r.currentUser.toKey()]=i}}function rd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ga.get(e))t.fa.delete(r),n&&t.ma.Ma(r,n);t.ga.delete(e),t.isPrimaryClient&&t.Sa.Vr(e).forEach(r=>{t.Sa.containsKey(r)||Jb(t,r)})}function Jb(t,e){t.pa.delete(e.path.canonicalString());const n=t.ya.get(e);n!==null&&(Fb(t.remoteStore,n),t.ya=t.ya.remove(e),t.wa.delete(n),jp(t))}function ry(t,e,n){for(const r of n)r instanceof Kb?(t.Sa.addReference(r.key,e),ZD(t,r)):r instanceof Gb?(J("SyncEngine","Document no longer in limbo: "+r.key),t.Sa.removeReference(r.key,e),t.Sa.containsKey(r.key)||Jb(t,r.key)):fe()}function ZD(t,e){const n=e.key,r=n.path.canonicalString();t.ya.get(n)||t.pa.has(r)||(J("SyncEngine","New document in limbo: "+n),t.pa.add(r),jp(t))}function jp(t){for(;t.pa.size>0&&t.ya.size<t.maxConcurrentLimboResolutions;){const e=t.pa.values().next().value;t.pa.delete(e);const n=new ae(Ge.fromString(e)),r=t.Ca.next();t.wa.set(r,new zD(n)),t.ya=t.ya.insert(n,r),Vb(t.remoteStore,new jr(Hn(Pp(n.path)),r,"TargetPurposeLimboResolution",Tp.ae))}}async function Qa(t,e,n){const r=_e(t),i=[],s=[],o=[];r.fa.isEmpty()||(r.fa.forEach((a,c)=>{o.push(r.Fa(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const h=Lp.Ki(c.targetId,l);s.push(h)}}))}),await Promise.all(o),r.ma.u_(i),await async function(c,l){const h=_e(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(l,p=>$.forEach(p.qi,m=>h.persistence.referenceDelegate.addReference(f,p.targetId,m)).next(()=>$.forEach(p.Qi,m=>h.persistence.referenceDelegate.removeReference(f,p.targetId,m)))))}catch(f){if(!Wa(f))throw f;J("LocalStore","Failed to update sequence numbers: "+f)}for(const f of l){const p=f.targetId;if(!f.fromCache){const m=h.ns.get(p),v=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(v);h.ns=h.ns.insert(p,w)}}}(r.localStore,s))}async function e2(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await xb(n.localStore,e);n.currentUser=e,function(s,o){s.Da.forEach(a=>{a.forEach(c=>{c.reject(new ie(F.CANCELLED,o))})}),s.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qa(n,r.us)}}function t2(t,e){const n=_e(t),r=n.wa.get(e);if(r&&r.Va)return Ae().add(r.key);{let i=Ae();const s=n.ga.get(e);if(!s)return i;for(const o of s){const a=n.fa.get(o);i=i.unionWith(a.view.ca)}return i}}function n2(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=t2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QD.bind(null,e),e.ma.u_=UD.bind(null,e.eventManager),e.ma.Ma=BD.bind(null,e.eventManager),e}function r2(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JD.bind(null,e),e}class iy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hD(this.persistence,new lD,e.initialUser,this.serializer)}createPersistence(e){return new oD(Dp.Hr,this.serializer)}createSharedClientState(e){return new yD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class i2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ny(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=e2.bind(null,this.syncEngine),await VD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $D}()}createDatastore(e){const n=Hu(e.databaseInfo.databaseId),r=function(s){return new bD(s)}(e.databaseInfo);return function(s,o,a,c){return new ID(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new CD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ny(this.syncEngine,n,0),function(){return Z_.C()?new Z_:new vD}())}createSyncEngine(e,n){return function(i,s,o,a,c,l,h){const f=new qD(i,s,o,a,c,l);return h&&(f.va=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=_e(n);J("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await Ya(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class Zb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Na(this.observer.next,e)}error(e){this.observer.error?this.Na(this.observer.error,e):gr("Uncaught Error in snapshot listener:",e.toString())}Ba(){this.muted=!0}Na(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class s2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=xt.UNAUTHENTICATED,this.clientId=eb.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{J("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(J("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Up(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qh(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await a2(t);J("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>ey(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>ey(e.remoteStore,s)),t._onlineComponents=e}function o2(t){return t.name==="FirebaseError"?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function a2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!o2(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await Qh(t,new iy)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Qh(t,new iy);return t._offlineComponents}async function eT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await sy(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await sy(t,new i2))),t._onlineComponents}function c2(t){return eT(t).then(e=>e.syncEngine)}async function tT(t){const e=await eT(t),n=e.eventManager;return n.onListen=WD.bind(null,e.syncEngine),n.onUnlisten=GD.bind(null,e.syncEngine),n}function l2(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const h=new Zb({next:p=>{o.enqueueAndForget(()=>qb(s,f));const m=p.docs.has(a);!m&&p.fromCache?l.reject(new ie(F.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?l.reject(new ie(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),f=new Wb(Pp(a.path),h,{includeMetadataChanges:!0,Y_:!0});return zb(s,f)}(await tT(t),t.asyncQueue,e,n,r)),r.promise}function u2(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const h=new Zb({next:p=>{o.enqueueAndForget(()=>qb(s,f)),p.fromCache&&c.source==="server"?l.reject(new ie(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),f=new Wb(a,h,{includeMetadataChanges:!0,Y_:!0});return zb(s,f)}(await tT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function nT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const oy=new Map;/**
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
 */function rT(t,e,n){if(!n)throw new ie(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function h2(t,e,n,r){if(e===!0&&r===!0)throw new ie(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ay(t){if(!ae.isDocumentKey(t))throw new ie(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cy(t){if(ae.isDocumentKey(t))throw new ie(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function yr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hp(t);throw new ie(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ly{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}h2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ly({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ly(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kN;switch(r.type){case"firstParty":return new LN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=oy.get(n);r&&(J("ComponentProvider","Removing Datastore"),oy.delete(n),r.terminate())}(this),Promise.resolve()}}function f2(t,e,n,r={}){var i;const s=(t=yr(t,Wu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=xt.MOCK_USER;else{a=WE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new ie(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new xt(l)}t._authCredentials=new NN(new Zw(a,c))}}/**
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
 */class Ku{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ku(this.firestore,e,this._query)}}class en{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new en(this.firestore,e,this._key)}}class Kr extends Ku{constructor(e,n,r){super(e,n,Pp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new en(this.firestore,null,new ae(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function d2(t,e,...n){if(t=tt(t),rT("collection","path",e),t instanceof Wu){const r=Ge.fromString(e,...n);return cy(r),new Kr(t,null,r)}{if(!(t instanceof en||t instanceof Kr))throw new ie(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return cy(r),new Kr(t.firestore,null,r)}}function Vc(t,e,...n){if(t=tt(t),arguments.length===1&&(e=eb.V()),rT("doc","path",e),t instanceof Wu){const r=Ge.fromString(e,...n);return ay(r),new en(t,null,new ae(r))}{if(!(t instanceof en||t instanceof Kr))throw new ie(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return ay(r),new en(t.firestore,t instanceof Kr?t.converter:null,new ae(r))}}/**
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
 */class p2{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new Lb(this,"async_queue_retry"),this.su=()=>{const n=Yh();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Yh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const n=Yh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new dr;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Za.push(e),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!Wa(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(e){const n=this.Ya.then(()=>(this.nu=!0,e().catch(r=>{this.tu=r,this.nu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw gr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.nu=!1,r))));return this.Ya=n,n}enqueueAfterDelay(e,n,r){this.ou(),this.iu.indexOf(e)>-1&&(n=0);const i=$p.createAndSchedule(this,e,n,r,s=>this.uu(s));return this.eu.push(i),i}ou(){this.tu&&fe()}verifyOperationInProgress(){}async cu(){let e;do e=this.Ya,await e;while(e!==this.Ya)}lu(e){for(const n of this.eu)if(n.timerId===e)return!0;return!1}hu(e){return this.cu().then(()=>{this.eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.cu()})}Pu(e){this.iu.push(e)}uu(e){const n=this.eu.indexOf(e);this.eu.splice(n,1)}}class Xa extends Wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new p2}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iT(this),this._firestoreClient.terminate()}}function m2(t,e){const n=typeof t=="object"?t:Zd(),r=typeof t=="string"?t:e||"(default)",i=vu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=HE("firestore");s&&f2(i,...s)}return i}function zp(t){return t._firestoreClient||iT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function iT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,l,h){return new KN(a,c,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,nT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new s2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hs(Bt.fromBase64String(e))}catch(n){throw new ie(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hs(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qp{constructor(e){this._methodName=e}}/**
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
 */class Wp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
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
 */const g2=/^__.*__$/;class _2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new si(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ka(e,this.data,n,this.fieldTransforms)}}class sT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new si(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function oT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class Kp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Iu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Kp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Au:!1});return i.Ru(e),i}Vu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Au:!1});return i.Iu(),i}mu(e){return this.Eu({path:void 0,Au:!0})}fu(e){return Hl(e,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Iu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ru(this.path.get(e))}Ru(e){if(e.length===0)throw this.fu("Document fields must not be empty");if(oT(this.Tu)&&g2.test(e))throw this.fu('Document fields cannot begin and end with "__"')}}class y2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hu(e)}yu(e,n,r,i=!1){return new Kp({Tu:e,methodName:n,pu:r,path:It.emptyPath(),Au:!1,gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aT(t){const e=t._freezeSettings(),n=Hu(t._databaseId);return new y2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function v2(t,e,n,r,i,s={}){const o=t.yu(s.merge||s.mergeFields?2:0,e,n,i);Gp("Data must be an object, but it was:",o,r);const a=cT(r,o);let c,l;if(s.merge)c=new sn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=id(e,f,n);if(!o.contains(p))throw new ie(F.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);uT(h,p)||h.push(p)}c=new sn(h),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new _2(new Zt(a),c,l)}class Yu extends qp{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.fu(`${this._methodName}() can only appear at the top level of your update data`):e.fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yu}}function E2(t,e,n,r){const i=t.yu(1,e,n);Gp("Data must be an object, but it was:",i,r);const s=[],o=Zt.empty();Xi(r,(c,l)=>{const h=Yp(e,c,n);l=tt(l);const f=i.Vu(h);if(l instanceof Yu)s.push(h);else{const p=Qu(l,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new sn(s);return new sT(o,a,i.fieldTransforms)}function w2(t,e,n,r,i,s){const o=t.yu(1,e,n),a=[id(e,r,n)],c=[i];if(s.length%2!=0)throw new ie(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(id(e,s[p])),c.push(s[p+1]);const l=[],h=Zt.empty();for(let p=a.length-1;p>=0;--p)if(!uT(l,a[p])){const m=a[p];let v=c[p];v=tt(v);const w=o.Vu(m);if(v instanceof Yu)l.push(m);else{const T=Qu(v,w);T!=null&&(l.push(m),h.set(m,T))}}const f=new sn(l);return new sT(h,f,o.fieldTransforms)}function Qu(t,e){if(lT(t=tt(t)))return Gp("Unsupported field value:",e,t),cT(t,e);if(t instanceof qp)return function(r,i){if(!oT(i.Tu))throw i.fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&e.Tu!==4)throw e.fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Qu(a,i.mu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ft.fromDate(r);return{timestampValue:Bl(i.serializer,s)}}if(r instanceof ft){const s=new ft(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bl(i.serializer,s)}}if(r instanceof Wp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hs)return{bytesValue:Cb(i.serializer,r._byteString)};if(r instanceof en){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Np(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.fu(`Unsupported field value: ${Hp(r)}`)}(t,e)}function cT(t,e){const n={};return tb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(t,(r,i)=>{const s=Qu(i,e.du(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function lT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ft||t instanceof Wp||t instanceof Hs||t instanceof en||t instanceof qp)}function Gp(t,e,n){if(!lT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Hp(n);throw r==="an object"?e.fu(t+" a custom object"):e.fu(t+" "+r)}}function id(t,e,n){if((e=tt(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return Yp(t,e);throw Hl("Field path arguments must be of type string or ",t,!1,void 0,n)}const b2=new RegExp("[~\\*/\\[\\]]");function Yp(t,e,n){if(e.search(b2)>=0)throw Hl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw Hl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ie(F.INVALID_ARGUMENT,a+t+c)}function uT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class hT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new en(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new T2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class T2 extends hT{data(){return super.data()}}function fT(t,e){return typeof e=="string"?Yp(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}/**
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
 */function A2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class I2{convertValue(e,n="none"){switch(Bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Wp(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ip(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ea(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);We(Nb(r));const i=new wa(r.get(1),r.get(3)),s=new ae(r.popFirst(5));return i.isEqual(n)||gr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function S2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dT extends hT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class il extends dT{data(e={}){return super.data(e)}}class C2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new il(this._firestore,this._userDataWriter,r.key,r,new Vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new il(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new il(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,h=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:R2(a.type),doc:c,oldIndex:l,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function R2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}/**
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
 */function uy(t){t=yr(t,en);const e=yr(t.firestore,Xa);return l2(zp(e),t._key).then(n=>N2(e,t,n))}class pT extends I2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new en(this.firestore,null,n)}}function P2(t){t=yr(t,Ku);const e=yr(t.firestore,Xa),n=zp(e),r=new pT(e);return A2(t._query),u2(n,t._query).then(i=>new C2(e,r,t,i))}function O2(t,e,n){t=yr(t,en);const r=yr(t.firestore,Xa),i=S2(t.converter,e,n);return mT(r,[v2(aT(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zn.none())])}function k2(t,e,n,...r){t=yr(t,en);const i=yr(t.firestore,Xa),s=aT(i);let o;return o=typeof(e=tt(e))=="string"||e instanceof Gu?w2(s,"updateDoc",t._key,e,n,r):E2(s,"updateDoc",t._key,e),mT(i,[o.toMutation(t._key,zn.exists(!0))])}function mT(t,e){return function(r,i){const s=new dr;return r.asyncQueue.enqueueAndForget(async()=>YD(await c2(r),i,s)),s.promise}(zp(t),e)}function N2(t,e,n){const r=n.docs.get(e._key),i=new pT(t);return new dT(t,i,e._key,r,new Vo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ao=i})(Yi),Fi(new Qr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Xa(new xN(r.getProvider("auth-internal")),new VN(r.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new ie(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wa(l.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),jn(k_,"4.3.0",e),jn(k_,"4.3.0","esm2017")})();function Qp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function hy(t){return t!==void 0&&t.enterprise!==void 0}class x2{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function gT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D2=gT,_T=new La("auth","Firebase",gT());/**
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
 */const zl=new Qd("@firebase/auth");function L2(t,...e){zl.logLevel<=Ie.WARN&&zl.warn(`Auth (${Yi}): ${t}`,...e)}function sl(t,...e){zl.logLevel<=Ie.ERROR&&zl.error(`Auth (${Yi}): ${t}`,...e)}/**
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
 */function Pn(t,...e){throw Xp(t,...e)}function Wn(t,...e){return Xp(t,...e)}function M2(t,e,n){const r=Object.assign(Object.assign({},D2()),{[e]:n});return new La("auth","Firebase",r).create(e,{appName:t.name})}function Xp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _T.create(t,...e)}function he(t,e,...n){if(!t)throw Xp(e,...n)}function ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sl(e),new Error(e)}function vr(t,e){t||ur(e)}/**
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
 */function sd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function V2(){return fy()==="http:"||fy()==="https:"}function fy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function F2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(V2()||oO()||"connection"in navigator)?navigator.onLine:!0}function $2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,vr(n>e,"Short delay should be less than long delay!"),this.isMobile=iO()||aO()}get(){return F2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jp(t,e){vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const U2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const B2=new Ja(3e4,6e4);function Zi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oi(t,e,n,r,i={}){return vT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ma(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),yT.fetch()(ET(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function vT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},U2),e);try{const i=new j2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fc(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fc(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw M2(t,h,l);Pn(t,h)}}catch(i){if(i instanceof nr)throw i;Pn(t,"network-request-failed",{message:String(i)})}}async function Za(t,e,n,r,i={}){const s=await oi(t,e,n,r,i);return"mfaPendingCredential"in s&&Pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ET(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Jp(t.config,i):`${t.config.apiScheme}://${i}`}class j2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wn(this.auth,"network-request-failed")),B2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wn(t,e,r);return i.customData._tokenResponse=n,i}async function H2(t,e){return oi(t,"GET","/v2/recaptchaConfig",Zi(t,e))}/**
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
 */async function z2(t,e){return oi(t,"POST","/v1/accounts:delete",e)}async function q2(t,e){return oi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function W2(t,e=!1){const n=tt(t),r=await n.getIdToken(e),i=Zp(r);he(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yo(Xh(i.auth_time)),issuedAtTime:Yo(Xh(i.iat)),expirationTime:Yo(Xh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xh(t){return Number(t)*1e3}function Zp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const i=BE(n);return i?JSON.parse(i):(sl("Failed to decode base64 JWT payload"),null)}catch(i){return sl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function K2(t){const e=Zp(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nr&&G2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function G2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Y2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zs(t,q2(n,{idToken:r}));he(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?J2(s.providerUserInfo):[],a=X2(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wT(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Q2(t){const e=tt(t);await ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function J2(t){return t.map(e=>{var{providerId:n}=e,r=Qp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Z2(t,e){const n=await vT(t,{},async()=>{const r=Ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ET(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ia{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):K2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return he(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Z2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ia;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(he(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(he(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ia,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
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
 */function kr(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zs(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return W2(this,e)}reload(){return Q2(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zs(this,z2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:N,emailVerified:S,isAnonymous:j,providerData:G,stsTokenManager:re}=n;he(N&&re,e,"internal-error");const ve=Ia.fromJSON(this.name,re);he(typeof N=="string",e,"internal-error"),kr(f,e.name),kr(p,e.name),he(typeof S=="boolean",e,"internal-error"),he(typeof j=="boolean",e,"internal-error"),kr(m,e.name),kr(v,e.name),kr(w,e.name),kr(T,e.name),kr(b,e.name),kr(A,e.name);const oe=new xi({uid:N,auth:e,email:p,emailVerified:S,displayName:f,isAnonymous:j,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:ve,createdAt:b,lastLoginAt:A});return G&&Array.isArray(G)&&(oe.providerData=G.map(ce=>Object.assign({},ce))),T&&(oe._redirectEventId=T),oe}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ia;i.updateFromServerResponse(n);const s=new xi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ql(s),s}}/**
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
 */const dy=new Map;function hr(t){vr(t instanceof Function,"Expected a class definition");let e=dy.get(t);return e?(vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dy.set(t,e),e)}/**
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
 */class bT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bT.type="NONE";const py=bT;/**
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
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Os(hr(py),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||hr(py);const o=ol(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){const f=xi._fromJSON(e,h);l!==s&&(a=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Os(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Os(s,e,r))}}/**
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
 */function my(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(TT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CT(e))return"Blackberry";if(RT(e))return"Webos";if(em(e))return"Safari";if((e.includes("chrome/")||AT(e))&&!e.includes("edge/"))return"Chrome";if(ST(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function TT(t=Ut()){return/firefox\//i.test(t)}function em(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AT(t=Ut()){return/crios\//i.test(t)}function IT(t=Ut()){return/iemobile/i.test(t)}function ST(t=Ut()){return/android/i.test(t)}function CT(t=Ut()){return/blackberry/i.test(t)}function RT(t=Ut()){return/webos/i.test(t)}function Xu(t=Ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eL(t=Ut()){var e;return Xu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tL(){return cO()&&document.documentMode===10}function PT(t=Ut()){return Xu(t)||ST(t)||RT(t)||CT(t)||/windows phone/i.test(t)||IT(t)}function nL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function OT(t,e=[]){let n;switch(t){case"Browser":n=my(Ut());break;case"Worker":n=`${my(Ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${r}`}/**
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
 */class rL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function iL(t,e={}){return oi(t,"GET","/v2/passwordPolicy",Zi(t,e))}/**
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
 */const sL=6;class oL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class aL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gy(this),this.idTokenSubscription=new gy(this),this.beforeStateQueue=new rL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_T,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?tt(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iL(this),n=new oL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new La("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hr(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[hr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&L2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function es(t){return tt(t)}class gy{constructor(e){this.auth=e,this.observer=null,this.addObserver=mO(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function cL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cL().appendChild(r)})}function lL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uL="https://www.google.com/recaptcha/enterprise.js?render=",hL="recaptcha-enterprise",fL="NO_RECAPTCHA";class dL{constructor(e){this.type=hL,this.auth=es(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{H2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new x2(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;hy(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(fL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&hy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}kT(uL+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Wl(t,e,n,r=!1){const i=new dL(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function pL(t,e){const n=vu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Cl(s,e??{}))return i;Pn(i,"already-initialized")}return n.initialize({options:e})}function mL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gL(t,e,n){const r=es(t);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=NT(e),{host:o,port:a}=_L(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yL()}function NT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _L(t){const e=NT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_y(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_y(o)}}}function _y(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class tm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,n){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}async function vL(t,e){return oi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Jh(t,e){return Za(t,"POST","/v1/accounts:signInWithPassword",Zi(t,e))}/**
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
 */async function EL(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",Zi(t,e))}async function wL(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",Zi(t,e))}/**
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
 */class Sa extends tm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Wl(e,r,"signInWithPassword");return Jh(e,i)}else return Jh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Wl(e,r,"signInWithPassword");return Jh(e,s)}else return Promise.reject(i)});case"emailLink":return EL(e,{email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return vL(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wL(e,{idToken:n,email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ks(t,e){return Za(t,"POST","/v1/accounts:signInWithIdp",Zi(t,e))}/**
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
 */const bL="http://localhost";class ji extends tm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ji(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:bL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ma(n)}return e}}/**
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
 */function TL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AL(t){const e=ko(No(t)).link,n=e?ko(No(e)).deep_link_id:null,r=ko(No(t)).deep_link_id;return(r?ko(No(r)).link:null)||r||n||e||t}class nm{constructor(e){var n,r,i,s,o,a;const c=ko(No(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=TL((i=c.mode)!==null&&i!==void 0?i:null);he(l&&h&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=AL(e);try{return new nm(n)}catch{return null}}}/**
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
 */class uo{constructor(){this.providerId=uo.PROVIDER_ID}static credential(e,n){return Sa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=nm.parseLink(n);return he(r,"argument-error"),Sa._fromEmailAndCode(e,r.code,r.tenantId)}}uo.PROVIDER_ID="password";uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ec extends xT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vr extends ec{constructor(){super("facebook.com")}static credential(e){return ji._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vr.PROVIDER_ID="facebook.com";/**
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
 */class Fr extends ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ji._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.GOOGLE_SIGN_IN_METHOD="google.com";Fr.PROVIDER_ID="google.com";/**
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
 */class $r extends ec{constructor(){super("github.com")}static credential(e){return ji._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
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
 */class Ur extends ec{constructor(){super("twitter.com")}static credential(e,n){return ji._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ur.credential(n,r)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
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
 */async function Zh(t,e){return Za(t,"POST","/v1/accounts:signUp",Zi(t,e))}/**
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
 */class Hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xi._fromIdTokenResponse(e,r,i),o=yy(r);return new Hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yy(r);return new Hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Kl extends nr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kl(e,n,r,i)}}function DT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kl._fromErrorAndOperation(t,s,e,r):s})}async function IL(t,e,n=!1){const r=await zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hi._forOperation(t,"link",r)}/**
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
 */async function SL(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await zs(t,DT(r,i,e,t),n);he(s.idToken,r,"internal-error");const o=Zp(s.idToken);he(o,r,"internal-error");const{sub:a}=o;return he(t.uid===a,r,"user-mismatch"),Hi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),s}}/**
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
 */async function LT(t,e,n=!1){const r="signIn",i=await DT(t,r,e),s=await Hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function CL(t,e){return LT(es(t),e)}/**
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
 */async function MT(t){const e=es(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RL(t,e,n){var r;const i=es(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Wl(i,s,"signUpPassword");o=Zh(i,l)}else o=Zh(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await Wl(i,s,"signUpPassword");return Zh(i,h)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&MT(t),l}),c=await Hi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function PL(t,e,n){return CL(tt(t),uo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&MT(t),r})}/**
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
 */async function OL(t,e){return oi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function kL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=tt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await zs(r,OL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function NL(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function xL(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function VT(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function DL(t){return tt(t).signOut()}const Gl="__sak";/**
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
 */class FT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gl,"1"),this.storage.removeItem(Gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function LL(){const t=Ut();return em(t)||Xu(t)}const ML=1e3,VL=10;class $T extends FT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LL()&&nL(),this.fallbackToPolling=PT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,VL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ML)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$T.type="LOCAL";const FL=$T;/**
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
 */class UT extends FT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}UT.type="SESSION";const BT=UT;/**
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
 */function $L(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ju(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await $L(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ju.receivers=[];/**
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
 */function rm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class UL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=rm("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Kn(){return window}function BL(t){Kn().location.href=t}/**
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
 */function jT(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function jL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zL(){return jT()?self:null}/**
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
 */const HT="firebaseLocalStorageDb",qL=1,Yl="firebaseLocalStorage",zT="fbase_key";class tc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zu(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function WL(){const t=indexedDB.deleteDatabase(HT);return new tc(t).toPromise()}function od(){const t=indexedDB.open(HT,qL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:zT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await WL(),e(await od()))})})}async function vy(t,e,n){const r=Zu(t,!0).put({[zT]:e,value:n});return new tc(r).toPromise()}async function KL(t,e){const n=Zu(t,!1).get(e),r=await new tc(n).toPromise();return r===void 0?null:r.value}function Ey(t,e){const n=Zu(t,!0).delete(e);return new tc(n).toPromise()}const GL=800,YL=3;class qT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await od(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ju._getInstance(zL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jL(),!this.activeServiceWorker)return;this.sender=new UL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await od();return await vy(e,Gl,"1"),await Ey(e,Gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ey(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zu(i,!1).getAll();return new tc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qT.type="LOCAL";const QL=qT;new Ja(3e4,6e4);/**
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
 */function XL(t,e){return e?hr(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class im extends tm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JL(t){return LT(t.auth,new im(t),t.bypassAuthState)}function ZL(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),SL(n,new im(t),t.bypassAuthState)}async function eM(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),IL(n,new im(t),t.bypassAuthState)}/**
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
 */class WT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JL;case"linkViaPopup":case"linkViaRedirect":return eM;case"reauthViaPopup":case"reauthViaRedirect":return ZL;default:Pn(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tM=new Ja(2e3,1e4);class ys extends WT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tM.get())};e()}}ys.currentPopupAction=null;/**
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
 */const nM="pendingRedirect",al=new Map;class rM extends WT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await iM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iM(t,e){const n=aM(e),r=oM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sM(t,e){al.set(t._key(),e)}function oM(t){return hr(t._redirectPersistence)}function aM(t){return ol(nM,t.config.apiKey,t.name)}async function cM(t,e,n=!1){const r=es(t),i=XL(r,e),o=await new rM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const lM=10*60*1e3;class uM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!KT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lM&&this.cachedEventUids.clear(),this.cachedEventUids.has(wy(e))}saveEventToCache(e){this.cachedEventUids.add(wy(e)),this.lastProcessedEventTime=Date.now()}}function wy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function KT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return KT(t);default:return!1}}/**
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
 */async function fM(t,e={}){return oi(t,"GET","/v1/projects",e)}/**
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
 */const dM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pM=/^https?/;async function mM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fM(t);for(const n of e)try{if(gM(n))return}catch{}Pn(t,"unauthorized-domain")}function gM(t){const e=sd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pM.test(n))return!1;if(dM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _M=new Ja(3e4,6e4);function by(){const t=Kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yM(t){return new Promise((e,n)=>{var r,i,s;function o(){by(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{by(),n(Wn(t,"network-request-failed"))},timeout:_M.get()})}if(!((i=(r=Kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Kn().gapi)===null||s===void 0)&&s.load)o();else{const a=lL("iframefcb");return Kn()[a]=()=>{gapi.load?o():n(Wn(t,"network-request-failed"))},kT(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw cl=null,e})}let cl=null;function vM(t){return cl=cl||yM(t),cl}/**
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
 */const EM=new Ja(5e3,15e3),wM="__/auth/iframe",bM="emulator/auth/iframe",TM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IM(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jp(e,bM):`https://${t.config.authDomain}/${wM}`,r={apiKey:e.apiKey,appName:t.name,v:Yi},i=AM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ma(r).slice(1)}`}async function SM(t){const e=await vM(t),n=Kn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:IM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Wn(t,"network-request-failed"),a=Kn().setTimeout(()=>{s(o)},EM.get());function c(){Kn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const CM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RM=500,PM=600,OM="_blank",kM="http://localhost";class Ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NM(t,e,n,r=RM,i=PM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},CM),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Ut().toLowerCase();n&&(a=AT(l)?OM:n),TT(l)&&(e=e||kM,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[m,v])=>`${p}${m}=${v},`,"");if(eL(l)&&a!=="_self")return xM(e||"",a),new Ty(null);const f=window.open(e||"",a,h);he(f,t,"popup-blocked");try{f.focus()}catch{}return new Ty(f)}function xM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DM="__/auth/handler",LM="emulator/auth/handler",MM=encodeURIComponent("fac");async function Ay(t,e,n,r,i,s){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yi,eventId:i};if(e instanceof xT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof ec){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),l=c?`#${MM}=${encodeURIComponent(c)}`:"";return`${VM(t)}?${Ma(a).slice(1)}${l}`}function VM({config:t}){return t.emulator?Jp(t,LM):`https://${t.authDomain}/${DM}`}/**
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
 */const ef="webStorageSupport";class FM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BT,this._completeRedirectFn=cM,this._overrideRedirectResult=sM}async _openPopup(e,n,r,i){var s;vr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ay(e,n,r,sd(),i);return NM(e,o,rm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ay(e,n,r,sd(),i);return BL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SM(e),r=new uM(e);return n.register("authEvent",i=>(he(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ef,{type:ef},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ef];o!==void 0&&n(!!o),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return PT()||em()||Xu()}}const $M=FM;var Iy="@firebase/auth",Sy="1.3.0";/**
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
 */class UM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jM(t){Fi(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OT(t)},l=new aL(r,i,s,c);return mL(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fi(new Qr("auth-internal",e=>{const n=es(e.getProvider("auth").getImmediate());return(r=>new UM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Iy,Sy,BM(t)),jn(Iy,Sy,"esm2017")}/**
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
 */const HM=5*60,zM=qE("authIdTokenMaxAge")||HM;let Cy=null;const qM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zM)return;const i=n==null?void 0:n.token;Cy!==i&&(Cy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qs(t=Zd()){const e=vu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pL(t,{popupRedirectResolver:$M,persistence:[QL,FL,BT]}),r=qE("authTokenSyncURL");if(r){const s=qM(r);xL(n,s,()=>s(n.currentUser)),NL(n,o=>s(o))}const i=jE("auth");return i&&gL(n,`http://${i}`),n}jM("Browser");/**
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
 */const GT="firebasestorage.googleapis.com",YT="storageBucket",WM=2*60*1e3,KM=10*60*1e3;/**
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
 */class it extends nr{constructor(e,n,r=0){super(tf(e),`Firebase Storage: ${n} (${tf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function tf(t){return"storage/"+t}function sm(){const t="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,t)}function GM(t){return new it(rt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function YM(t){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,t)}function XM(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function JM(t){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function ZM(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eV(){return new it(rt.CANCELED,"User canceled the upload/download.")}function tV(t){return new it(rt.INVALID_URL,"Invalid URL '"+t+"'.")}function nV(t){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rV(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+YT+"' property when initializing the app?")}function iV(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sV(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oV(t){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ad(t){return new it(rt.INVALID_ARGUMENT,t)}function QT(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function aV(t){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qo(t,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Io(t){throw new it(rt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class on{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=on.makeFromUrl(e,n)}catch{return new on(e,"")}if(r.path==="")return r;throw nV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(S){S.path_=decodeURIComponent(S.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${i}/o${p}`,"i"),v={bucket:1,path:3},w=n===GT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",b=new RegExp(`^https?://${w}/${i}/${T}`,"i"),N=[{regex:a,indices:c,postModify:s},{regex:m,indices:v,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let S=0;S<N.length;S++){const j=N[S],G=j.regex.exec(e);if(G){const re=G[j.indices.bucket];let ve=G[j.indices.path];ve||(ve=""),r=new on(re,ve),j.postModify(r);break}}if(r==null)throw tV(e);return r}}class cV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function lV(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function h(...T){l||(l=!0,e.apply(null,T))}function f(T){i=setTimeout(()=>{i=null,t(m,c())},T)}function p(){s&&clearTimeout(s)}function m(T,...b){if(l){p();return}if(T){p(),h.call(null,T,...b);return}if(c()||o){p(),h.call(null,T,...b);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,f(N)}let v=!1;function w(T){v||(v=!0,p(),!l&&(i!==null?(T||(a=2),clearTimeout(i),f(0)):T||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function uV(t){t(!1)}/**
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
 */function hV(t){return t!==void 0}function fV(t){return typeof t=="object"&&!Array.isArray(t)}function om(t){return typeof t=="string"||t instanceof String}function Ry(t){return am()&&t instanceof Blob}function am(){return typeof Blob<"u"&&!sO()}function Py(t,e,n,r){if(r<e)throw ad(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ad(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function cm(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function XT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Di;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Di||(Di={}));/**
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
 */function dV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class pV{constructor(e,n,r,i,s,o,a,c,l,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new $c(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Di.NO_ERROR,c=s.getStatus();if(!a||dV(c,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Di.ABORT;r(!1,new $c(!1,null,h));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new $c(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());hV(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=sm();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?QT():eV();o(c)}else{const c=ZM();o(c)}};this.canceled_?n(!1,new $c(!1,null,!0)):this.backoffId_=lV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $c{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function mV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _V(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vV(t,e,n,r,i,s,o=!0){const a=XT(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return _V(l,e),mV(l,n),gV(l,s),yV(l,r),new pV(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function EV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wV(...t){const e=EV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(am())return new Blob(t);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function TV(t){if(typeof atob>"u")throw oV("base-64");return atob(t)}/**
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
 */const $n={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nf{constructor(e,n){this.data=e,this.contentType=n||null}}function AV(t,e){switch(t){case $n.RAW:return new nf(JT(e));case $n.BASE64:case $n.BASE64URL:return new nf(ZT(t,e));case $n.DATA_URL:return new nf(SV(e),CV(e))}throw sm()}function JT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function IV(t){let e;try{e=decodeURIComponent(t)}catch{throw Qo($n.DATA_URL,"Malformed data URL.")}return JT(e)}function ZT(t,e){switch(t){case $n.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Qo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case $n.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Qo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=TV(e)}catch(i){throw i.message.includes("polyfill")?i:Qo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class e0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Qo($n.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=RV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function SV(t){const e=new e0(t);return e.base64?ZT($n.BASE64,e.rest):IV(e.rest)}function CV(t){return new e0(t).contentType}function RV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Br{constructor(e,n){let r=0,i="";Ry(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ry(this.data_)){const r=this.data_,i=bV(r,e,n);return i===null?null:new Br(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Br(r,!0)}}static getBlob(...e){if(am()){const n=e.map(r=>r instanceof Br?r.data_:r);return new Br(wV.apply(null,n))}else{const n=e.map(o=>om(o)?AV($n.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Br(i,!0)}}uploadData(){return this.data_}}/**
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
 */function t0(t){let e;try{e=JSON.parse(t)}catch{return null}return fV(e)?e:null}/**
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
 */function PV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function OV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function n0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function kV(t,e){return e}class qt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||kV}}let Uc=null;function NV(t){return!om(t)||t.length<2?t:n0(t)}function r0(){if(Uc)return Uc;const t=[];t.push(new qt("bucket")),t.push(new qt("generation")),t.push(new qt("metageneration")),t.push(new qt("name","fullPath",!0));function e(s,o){return NV(o)}const n=new qt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new qt("size");return i.xform=r,t.push(i),t.push(new qt("timeCreated")),t.push(new qt("updated")),t.push(new qt("md5Hash",null,!0)),t.push(new qt("cacheControl",null,!0)),t.push(new qt("contentDisposition",null,!0)),t.push(new qt("contentEncoding",null,!0)),t.push(new qt("contentLanguage",null,!0)),t.push(new qt("contentType",null,!0)),t.push(new qt("metadata","customMetadata",!0)),Uc=t,Uc}function xV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new on(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function DV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return xV(r,t),r}function i0(t,e,n){const r=t0(e);return r===null?null:DV(t,r,n)}function LV(t,e,n,r){const i=t0(e);if(i===null||!om(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),m=cm(p,n,r),v=XT({alt:"media",token:l});return m+v})[0]}function MV(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class s0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function o0(t){if(!t)throw sm()}function VV(t,e){function n(r,i){const s=i0(t,i,e);return o0(s!==null),s}return n}function FV(t,e){function n(r,i){const s=i0(t,i,e);return o0(s!==null),LV(s,i,t.host,t._protocol)}return n}function a0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=XM():i=QM():n.getStatus()===402?i=YM(t.bucket):n.getStatus()===403?i=JM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function $V(t){const e=a0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=GM(t.path)),s.serverResponse=i.serverResponse,s}return n}function UV(t,e,n){const r=e.fullServerUrl(),i=cm(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new s0(i,s,FV(t,n),o);return a.errorHandler=$V(e),a}function BV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=BV(null,e)),r}function HV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let S=0;S<2;S++)N=N+Math.random().toString().slice(2);return N}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=jV(e,r,i),h=MV(l,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,p=`\r
--`+c+"--",m=Br.getBlob(f,r,p);if(m===null)throw iV();const v={name:l.fullPath},w=cm(s,t.host,t._protocol),T="POST",b=t.maxUploadRetryTime,A=new s0(w,T,VV(t,n),b);return A.urlParams=v,A.headers=o,A.body=m.uploadData(),A.errorHandler=a0(e),A}class zV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Di.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Di.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Di.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Io("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class qV extends zV{initXhr(){this.xhr_.responseType="text"}}function c0(){return new qV}/**
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
 */class zi{constructor(e,n){this._service=e,n instanceof on?this._location=n:this._location=on.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zi(e,n)}get root(){const e=new on(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return n0(this._location.path)}get storage(){return this._service}get parent(){const e=PV(this._location.path);if(e===null)return null;const n=new on(this._location.bucket,e);return new zi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aV(e)}}function WV(t,e,n){t._throwIfRoot("uploadBytes");const r=HV(t.storage,t._location,r0(),new Br(e,!0),n);return t.storage.makeRequestWithTokens(r,c0).then(i=>({metadata:i,ref:t}))}function KV(t){t._throwIfRoot("getDownloadURL");const e=UV(t.storage,t._location,r0());return t.storage.makeRequestWithTokens(e,c0).then(n=>{if(n===null)throw sV();return n})}function GV(t,e){const n=OV(t._location.path,e),r=new on(t._location.bucket,n);return new zi(t.storage,r)}/**
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
 */function YV(t){return/^[A-Za-z]+:\/\//.test(t)}function QV(t,e){return new zi(t,e)}function l0(t,e){if(t instanceof lm){const n=t;if(n._bucket==null)throw rV();const r=new zi(n,n._bucket);return e!=null?l0(r,e):r}else return e!==void 0?GV(t,e):t}function XV(t,e){if(e&&YV(e)){if(t instanceof lm)return QV(t,e);throw ad("To use ref(service, url), the first argument must be a Storage instance.")}else return l0(t,e)}function Oy(t,e){const n=e==null?void 0:e[YT];return n==null?null:on.makeFromBucketSpec(n,t)}function JV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:WE(i,t.app.options.projectId))}class lm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=GT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=WM,this._maxUploadRetryTime=KM,this._requests=new Set,i!=null?this._bucket=on.makeFromBucketSpec(i,this._host):this._bucket=Oy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=on.makeFromBucketSpec(this._url,e):this._bucket=Oy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Py("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Py("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new cV(QT());{const o=vV(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const ky="@firebase/storage",Ny="0.11.2";/**
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
 */const u0="storage";function ZV(t,e,n){return t=tt(t),WV(t,e,n)}function e4(t){return t=tt(t),KV(t)}function h0(t,e){return t=tt(t),XV(t,e)}function t4(t=Zd(),e){t=tt(t);const r=vu(t,u0).getImmediate({identifier:e}),i=HE("storage");return i&&n4(r,...i),r}function n4(t,e,n,r={}){JV(t,e,n,r)}function r4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new lm(n,r,i,e,Yi)}function i4(){Fi(new Qr(u0,r4,"PUBLIC").setMultipleInstances(!0)),jn(ky,Ny,""),jn(ky,Ny,"esm2017")}i4();const s4={apiKey:"AIzaSyALx8RfOkMABgyPcPH0iXj7lnu_NezWapU",authDomain:"datamed-13891.firebaseapp.com",databaseURL:"https://datamed-13891-default-rtdb.firebaseio.com",projectId:"datamed-13891",storageBucket:"datamed-13891.appspot.com",messagingSenderId:"135159147198",appId:"1:135159147198:web:dcd503d464c1019f1a0cef"};Jd(s4);const So=m2(),nc=qs(),f0=t4(),d0=Qe(nc.currentUser);VT(nc,t=>{console.log("User state changed. Current user is: ",t),d0.value=t});const o4=()=>({user:d0});const Ke=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},a4={name:"MainNav",setup(){const{user:t}=o4();return{menuItems:[{text:"Home",url:"/"},{text:"Profile",url:"/profile"},{text:"Sign In",url:"/sign-in"},{text:"Sign Up",url:"/sign-up"},{text:"Products",url:"/product-search"}],handleSignOut:()=>{DL(nc)},user:t}}},c4={class:"d-flex justify-content-evenly"},l4={class:"d-flex gap-5"},u4={key:0},h4={key:1},f4={key:2};function d4(t,e,n,r,i,s){const o=Fe("router-link");return Q(),se("nav",c4,[(Q(!0),se(Xe,null,Ir(r.menuItems,a=>(Q(),se("li",{key:a.text},[we(o,{to:a.url,class:"nav-item"},{default:Mn(()=>[ut(Me(a.text),1)]),_:2},1032,["to"])]))),128)),D("section",l4,[r.user?(Q(),se("div",u4,"Logged in as "+Me(r.user.email||"New User"),1)):Oi("",!0),r.user?(Q(),se("div",h4,[D("button",{onClick:e[0]||(e[0]=(...a)=>r.handleSignOut&&r.handleSignOut(...a))},"Sign Out")])):Oi("",!0),r.user?Oi("",!0):(Q(),se("div",f4,[D("button",null,[we(o,{to:"/sign-in"},{default:Mn(()=>[ut("Login/Register")]),_:1})])]))])])}const p4=Ke(a4,[["render",d4],["__scopeId","data-v-03c45f17"]]);const m4={components:{MainNav:p4},name:"App"};function g4(t,e,n,r,i,s){const o=Fe("main-nav"),a=Fe("router-view");return Q(),se(Xe,null,[we(o),we(a)],64)}const _4=Ke(m4,[["render",g4]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ms=typeof window<"u";function y4(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Le=Object.assign;function rf(t,e){const n={};for(const r in e){const i=e[r];n[r]=On(i)?i.map(t):t(i)}return n}const Xo=()=>{},On=Array.isArray,v4=/\/$/,E4=t=>t.replace(v4,"");function sf(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=A4(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function w4(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function b4(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Ws(e.matched[r],n.matched[i])&&p0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function p0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!T4(t[n],e[n]))return!1;return!0}function T4(t,e){return On(t)?Dy(t,e):On(e)?Dy(e,t):t===e}function Dy(t,e){return On(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function A4(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ca;(function(t){t.pop="pop",t.push="push"})(Ca||(Ca={}));var Jo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jo||(Jo={}));function I4(t){if(!t)if(ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),E4(t)}const S4=/^[^#]+#/;function C4(t,e){return t.replace(S4,"#")+e}function R4(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const eh=()=>({left:window.pageXOffset,top:window.pageYOffset});function P4(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=R4(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ly(t,e){return(history.state?history.state.position-e:-1)+t}const cd=new Map;function O4(t,e){cd.set(t,e)}function k4(t){const e=cd.get(t);return cd.delete(t),e}let N4=()=>location.protocol+"//"+location.host;function m0(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),xy(c,"")}return xy(n,t)+r+i}function x4(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const m=m0(t,location),v=n.value,w=e.value;let T=0;if(p){if(n.value=m,e.value=p,o&&o===v){o=null;return}T=w?p.position-w.position:0}else r(m);i.forEach(b=>{b(n.value,v,{delta:T,type:Ca.pop,direction:T?T>0?Jo.forward:Jo.back:Jo.unknown})})};function c(){o=n.value}function l(p){i.push(p);const m=()=>{const v=i.indexOf(p);v>-1&&i.splice(v,1)};return s.push(m),m}function h(){const{history:p}=window;p.state&&p.replaceState(Le({},p.state,{scroll:eh()}),"")}function f(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function My(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?eh():null}}function D4(t){const{history:e,location:n}=window,r={value:m0(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:N4()+t+c;try{e[h?"replaceState":"pushState"](l,"",p),i.value=l}catch(m){console.error(m),n[h?"replace":"assign"](p)}}function o(c,l){const h=Le({},e.state,My(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,h,!0),r.value=c}function a(c,l){const h=Le({},i.value,e.state,{forward:c,scroll:eh()});s(h.current,h,!0);const f=Le({},My(r.value,c,null),{position:h.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function L4(t){t=I4(t);const e=D4(t),n=x4(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Le({location:"",base:t,go:r,createHref:C4.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function M4(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),L4(t)}function V4(t){return typeof t=="string"||t&&typeof t=="object"}function g0(t){return typeof t=="string"||typeof t=="symbol"}const Nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_0=Symbol("");var Vy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vy||(Vy={}));function Ks(t,e){return Le(new Error,{type:t,[_0]:!0},e)}function or(t,e){return t instanceof Error&&_0 in t&&(e==null||!!(t.type&e))}const Fy="[^/]+?",F4={sensitive:!1,strict:!1,start:!0,end:!0},$4=/[.+*?^${}()[\]/\\]/g;function U4(t,e){const n=Le({},F4,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const h=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace($4,"\\$&"),m+=40;else if(p.type===1){const{value:v,repeatable:w,optional:T,regexp:b}=p;s.push({name:v,repeatable:w,optional:T});const A=b||Fy;if(A!==Fy){m+=10;try{new RegExp(`(${A})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${v}" (${A}): `+S.message)}}let N=w?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(N=T&&l.length<2?`(?:/${N})`:"/"+N),T&&(N+="?"),i+=N,m+=20,T&&(m+=-8),w&&(m+=-20),A===".*"&&(m+=-50)}h.push(m)}r.push(h)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const h=l.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",v=s[p-1];f[v.name]=m&&v.repeatable?m.split("/"):m}return f}function c(l){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of p)if(m.type===0)h+=m.value;else if(m.type===1){const{value:v,repeatable:w,optional:T}=m,b=v in l?l[v]:"";if(On(b)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const A=On(b)?b.join("/"):b;if(!A)if(T)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);h+=A}}return h||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function B4(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function j4(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=B4(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if($y(r))return 1;if($y(i))return-1}return i.length-r.length}function $y(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const H4={type:0,value:""},z4=/[a-zA-Z0-9_]/;function q4(t){if(!t)return[[]];if(t==="/")return[[H4]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",h="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:z4.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function W4(t,e,n){const r=U4(q4(t.path),n),i=Le(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function K4(t,e){const n=[],r=new Map;e=jy({strict:!1,end:!0,sensitive:!1},e);function i(h){return r.get(h)}function s(h,f,p){const m=!p,v=G4(h);v.aliasOf=p&&p.record;const w=jy(e,h),T=[v];if("alias"in h){const N=typeof h.alias=="string"?[h.alias]:h.alias;for(const S of N)T.push(Le({},v,{components:p?p.record.components:v.components,path:S,aliasOf:p?p.record:v}))}let b,A;for(const N of T){const{path:S}=N;if(f&&S[0]!=="/"){const j=f.record.path,G=j[j.length-1]==="/"?"":"/";N.path=f.record.path+(S&&G+S)}if(b=W4(N,f,w),p?p.alias.push(b):(A=A||b,A!==b&&A.alias.push(b),m&&h.name&&!By(b)&&o(h.name)),v.children){const j=v.children;for(let G=0;G<j.length;G++)s(j[G],b,p&&p.children[G])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return A?()=>{o(A)}:Xo}function o(h){if(g0(h)){const f=r.get(h);f&&(r.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function c(h){let f=0;for(;f<n.length&&j4(h,n[f])>=0&&(h.record.path!==n[f].record.path||!y0(h,n[f]));)f++;n.splice(f,0,h),h.record.name&&!By(h)&&r.set(h.record.name,h)}function l(h,f){let p,m={},v,w;if("name"in h&&h.name){if(p=r.get(h.name),!p)throw Ks(1,{location:h});w=p.record.name,m=Le(Uy(f.params,p.keys.filter(A=>!A.optional).map(A=>A.name)),h.params&&Uy(h.params,p.keys.map(A=>A.name))),v=p.stringify(m)}else if("path"in h)v=h.path,p=n.find(A=>A.re.test(v)),p&&(m=p.parse(v),w=p.record.name);else{if(p=f.name?r.get(f.name):n.find(A=>A.re.test(f.path)),!p)throw Ks(1,{location:h,currentLocation:f});w=p.record.name,m=Le({},f.params,h.params),v=p.stringify(m)}const T=[];let b=p;for(;b;)T.unshift(b.record),b=b.parent;return{name:w,path:v,params:m,matched:T,meta:Q4(T)}}return t.forEach(h=>s(h)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Uy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function G4(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Y4(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Y4(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function By(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Q4(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function jy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function y0(t,e){return e.children.some(n=>n===t||y0(t,n))}const v0=/#/g,X4=/&/g,J4=/\//g,Z4=/=/g,eF=/\?/g,E0=/\+/g,tF=/%5B/g,nF=/%5D/g,w0=/%5E/g,rF=/%60/g,b0=/%7B/g,iF=/%7C/g,T0=/%7D/g,sF=/%20/g;function um(t){return encodeURI(""+t).replace(iF,"|").replace(tF,"[").replace(nF,"]")}function oF(t){return um(t).replace(b0,"{").replace(T0,"}").replace(w0,"^")}function ld(t){return um(t).replace(E0,"%2B").replace(sF,"+").replace(v0,"%23").replace(X4,"%26").replace(rF,"`").replace(b0,"{").replace(T0,"}").replace(w0,"^")}function aF(t){return ld(t).replace(Z4,"%3D")}function cF(t){return um(t).replace(v0,"%23").replace(eF,"%3F")}function lF(t){return t==null?"":cF(t).replace(J4,"%2F")}function Ql(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function uF(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(E0," "),o=s.indexOf("="),a=Ql(o<0?s:s.slice(0,o)),c=o<0?null:Ql(s.slice(o+1));if(a in e){let l=e[a];On(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Hy(t){let e="";for(let n in t){const r=t[n];if(n=aF(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(On(r)?r.map(s=>s&&ld(s)):[r&&ld(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function hF(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=On(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const fF=Symbol(""),zy=Symbol(""),th=Symbol(""),A0=Symbol(""),ud=Symbol("");function Co(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Mr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Ks(4,{from:n,to:e})):f instanceof Error?a(f):V4(f)?a(Ks(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},l=t.call(r&&r.instances[i],e,n,c);let h=Promise.resolve(l);t.length<3&&(h=h.then(c)),h.catch(f=>a(f))})}function of(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(dF(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Mr(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const h=y4(l)?l.default:l;s.components[o]=h;const p=(h.__vccOpts||h)[e];return p&&Mr(p,n,r,s,o)()}))}}return i}function dF(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qy(t){const e=Cn(th),n=Cn(A0),r=bt(()=>e.resolve(As(t.to))),i=bt(()=>{const{matched:c}=r.value,{length:l}=c,h=c[l-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(Ws.bind(null,h));if(p>-1)return p;const m=Wy(c[l-2]);return l>1&&Wy(h)===m&&f[f.length-1].path!==m?f.findIndex(Ws.bind(null,c[l-2])):p}),s=bt(()=>i.value>-1&&_F(n.params,r.value.params)),o=bt(()=>i.value>-1&&i.value===n.matched.length-1&&p0(n.params,r.value.params));function a(c={}){return gF(c)?e[As(t.replace)?"replace":"push"](As(t.to)).catch(Xo):Promise.resolve()}return{route:r,href:bt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const pF=Hd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qy,setup(t,{slots:e}){const n=uu(qy(t)),{options:r}=Cn(th),i=bt(()=>({[Ky(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ky(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Gd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),mF=pF;function gF(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _F(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!On(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Wy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ky=(t,e,n)=>t??e??n,yF=Hd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Cn(ud),i=bt(()=>t.route||r.value),s=Cn(zy,0),o=bt(()=>{let l=As(s);const{matched:h}=i.value;let f;for(;(f=h[l])&&!f.components;)l++;return l}),a=bt(()=>i.value.matched[o.value]);jo(zy,bt(()=>o.value+1)),jo(fF,a),jo(ud,i);const c=Qe();return $o(()=>[c.value,a.value,t.name],([l,h,f],[p,m,v])=>{h&&(h.instances[f]=l,m&&m!==h&&l&&l===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),l&&h&&(!m||!Ws(h,m)||!p)&&(h.enterCallbacks[f]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=i.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return Gy(n.default,{Component:p,route:l});const m=f.props[h],v=m?m===!0?l.params:typeof m=="function"?m(l):m:null,T=Gd(p,Le({},v,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Gy(n.default,{Component:T,route:l})||T}}});function Gy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vF=yF;function EF(t){const e=K4(t.routes,t),n=t.parseQuery||uF,r=t.stringifyQuery||Hy,i=t.history,s=Co(),o=Co(),a=Co(),c=dR(Nr);let l=Nr;ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=rf.bind(null,O=>""+O),f=rf.bind(null,lF),p=rf.bind(null,Ql);function m(O,W){let z,Z;return g0(O)?(z=e.getRecordMatcher(O),Z=W):Z=O,e.addRoute(Z,z)}function v(O){const W=e.getRecordMatcher(O);W&&e.removeRoute(W)}function w(){return e.getRoutes().map(O=>O.record)}function T(O){return!!e.getRecordMatcher(O)}function b(O,W){if(W=Le({},W||c.value),typeof O=="string"){const I=sf(n,O,W.path),P=e.resolve({path:I.path},W),x=i.createHref(I.fullPath);return Le(I,P,{params:p(P.params),hash:Ql(I.hash),redirectedFrom:void 0,href:x})}let z;if("path"in O)z=Le({},O,{path:sf(n,O.path,W.path).path});else{const I=Le({},O.params);for(const P in I)I[P]==null&&delete I[P];z=Le({},O,{params:f(I)}),W.params=f(W.params)}const Z=e.resolve(z,W),R=O.hash||"";Z.params=h(p(Z.params));const g=w4(r,Le({},O,{hash:oF(R),path:Z.path})),E=i.createHref(g);return Le({fullPath:g,hash:R,query:r===Hy?hF(O.query):O.query||{}},Z,{redirectedFrom:void 0,href:E})}function A(O){return typeof O=="string"?sf(n,O,c.value.path):Le({},O)}function N(O,W){if(l!==O)return Ks(8,{from:W,to:O})}function S(O){return re(O)}function j(O){return S(Le(A(O),{replace:!0}))}function G(O){const W=O.matched[O.matched.length-1];if(W&&W.redirect){const{redirect:z}=W;let Z=typeof z=="function"?z(O):z;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=A(Z):{path:Z},Z.params={}),Le({query:O.query,hash:O.hash,params:"path"in Z?{}:O.params},Z)}}function re(O,W){const z=l=b(O),Z=c.value,R=O.state,g=O.force,E=O.replace===!0,I=G(z);if(I)return re(Le(A(I),{state:typeof I=="object"?Le({},R,I.state):R,force:g,replace:E}),W||z);const P=z;P.redirectedFrom=W;let x;return!g&&b4(r,Z,z)&&(x=Ks(16,{to:P,from:Z}),Et(Z,Z,!0,!1)),(x?Promise.resolve(x):ce(P,Z)).catch(V=>or(V)?or(V,2)?V:Ht(V):Te(V,P,Z)).then(V=>{if(V){if(or(V,2))return re(Le({replace:E},A(V.to),{state:typeof V.to=="object"?Le({},R,V.to.state):R,force:g}),W||P)}else V=Ze(P,Z,!0,E,R);return Ee(P,Z,V),V})}function ve(O,W){const z=N(O,W);return z?Promise.reject(z):Promise.resolve()}function oe(O){const W=zt.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(O):O()}function ce(O,W){let z;const[Z,R,g]=wF(O,W);z=of(Z.reverse(),"beforeRouteLeave",O,W);for(const I of Z)I.leaveGuards.forEach(P=>{z.push(Mr(P,O,W))});const E=ve.bind(null,O,W);return z.push(E),Be(z).then(()=>{z=[];for(const I of s.list())z.push(Mr(I,O,W));return z.push(E),Be(z)}).then(()=>{z=of(R,"beforeRouteUpdate",O,W);for(const I of R)I.updateGuards.forEach(P=>{z.push(Mr(P,O,W))});return z.push(E),Be(z)}).then(()=>{z=[];for(const I of g)if(I.beforeEnter)if(On(I.beforeEnter))for(const P of I.beforeEnter)z.push(Mr(P,O,W));else z.push(Mr(I.beforeEnter,O,W));return z.push(E),Be(z)}).then(()=>(O.matched.forEach(I=>I.enterCallbacks={}),z=of(g,"beforeRouteEnter",O,W),z.push(E),Be(z))).then(()=>{z=[];for(const I of o.list())z.push(Mr(I,O,W));return z.push(E),Be(z)}).catch(I=>or(I,8)?I:Promise.reject(I))}function Ee(O,W,z){a.list().forEach(Z=>oe(()=>Z(O,W,z)))}function Ze(O,W,z,Z,R){const g=N(O,W);if(g)return g;const E=W===Nr,I=ms?history.state:{};z&&(Z||E?i.replace(O.fullPath,Le({scroll:E&&I&&I.scroll},R)):i.push(O.fullPath,R)),c.value=O,Et(O,W,z,E),Ht()}let De;function jt(){De||(De=i.listen((O,W,z)=>{if(!Ot.listening)return;const Z=b(O),R=G(Z);if(R){re(Le(R,{replace:!0}),Z).catch(Xo);return}l=Z;const g=c.value;ms&&O4(Ly(g.fullPath,z.delta),eh()),ce(Z,g).catch(E=>or(E,12)?E:or(E,2)?(re(E.to,Z).then(I=>{or(I,20)&&!z.delta&&z.type===Ca.pop&&i.go(-1,!1)}).catch(Xo),Promise.reject()):(z.delta&&i.go(-z.delta,!1),Te(E,Z,g))).then(E=>{E=E||Ze(Z,g,!1),E&&(z.delta&&!or(E,8)?i.go(-z.delta,!1):z.type===Ca.pop&&or(E,20)&&i.go(-1,!1)),Ee(Z,g,E)}).catch(Xo)}))}let Pt=Co(),Se=Co(),me;function Te(O,W,z){Ht(O);const Z=Se.list();return Z.length?Z.forEach(R=>R(O,W,z)):console.error(O),Promise.reject(O)}function st(){return me&&c.value!==Nr?Promise.resolve():new Promise((O,W)=>{Pt.add([O,W])})}function Ht(O){return me||(me=!O,jt(),Pt.list().forEach(([W,z])=>O?z(O):W()),Pt.reset()),O}function Et(O,W,z,Z){const{scrollBehavior:R}=t;if(!ms||!R)return Promise.resolve();const g=!z&&k4(Ly(O.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return fE().then(()=>R(O,W,g)).then(E=>E&&P4(E)).catch(E=>Te(E,O,W))}const Ye=O=>i.go(O);let nn;const zt=new Set,Ot={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,hasRoute:T,getRoutes:w,resolve:b,options:t,push:S,replace:j,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Se.add,isReady:st,install(O){const W=this;O.component("RouterLink",mF),O.component("RouterView",vF),O.config.globalProperties.$router=W,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>As(c)}),ms&&!nn&&c.value===Nr&&(nn=!0,S(i.location).catch(R=>{}));const z={};for(const R in Nr)Object.defineProperty(z,R,{get:()=>c.value[R],enumerable:!0});O.provide(th,W),O.provide(A0,rE(z)),O.provide(ud,c);const Z=O.unmount;zt.add(O),O.unmount=function(){zt.delete(O),zt.size<1&&(l=Nr,De&&De(),De=null,c.value=Nr,nn=!1,me=!1),Z()}}};function Be(O){return O.reduce((W,z)=>W.then(()=>oe(z)),Promise.resolve())}return Ot}function wF(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ws(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ws(l,c))||i.push(c))}return[n,r,i]}function I0(){return Cn(th)}const bF={},nh=t=>(er("data-v-f9a97a5a"),t=t(),tr(),t),TF={class:"d-flex header row p-5 my-5"},AF=nh(()=>D("div",{class:"col-1"},null,-1)),IF=nh(()=>D("h1",{class:"col-5"},"DataMed Electronic Health Record Specialists",-1)),SF=nh(()=>D("p",{class:"col-5"}," DataMed systems are designed to store data accurately and to capture the state of a patient across time. Our systems eliminate the need to track down a patient's previous paper medical records and assists in ensuring data is accurate and legible. DataMed systems can reduce risk of data replication as there is only one modifiable file, which means the file is more likely up to date, and decreases risk of lost paperwork. Due to the digital information being searchable and in a single file, EMRs are more effective when extracting medical data for the examination of possible trends and long term changes in a patient. Population-based studies of medical records may also be facilitated by the widespread adoption of EHRs and EMRs. ",-1)),CF=nh(()=>D("div",{class:"col-1"},null,-1)),RF=[AF,IF,SF,CF];function PF(t,e){return Q(),se("section",TF,RF)}const OF=Ke(bF,[["render",PF],["__scopeId","data-v-f9a97a5a"]]);const kF={name:"TechnicalFeatures",props:{image:{type:String,required:!1,default:""},title:{type:String,required:!0},description:{type:String,required:!0}}},NF=t=>(er("data-v-e5da9117"),t=t(),tr(),t),xF={class:"col-md-3 col-sm-10 p-3 p-lg-5 text-center border"},DF=["src","alt"],LF={class:"text-start description"},MF=NF(()=>D("button",{class:"read-more"},"Read More",-1));function VF(t,e,n,r,i,s){return Q(),se("section",xF,[n.image?(Q(),se("img",{key:0,src:n.image,alt:n.title},null,8,DF)):Oi("",!0),D("h4",null,Me(n.title),1),D("p",LF,Me(n.description),1),MF])}const S0=Ke(kF,[["render",VF],["__scopeId","data-v-e5da9117"]]),FF={title:"Quality",description:"Several studies call into question whether EHRs improve the quality of care. One 2011 study in diabetes care, published in the New England Journal of Medicine, found evidence that practices with EHR provided better quality care."},$F={title:"Costs",description:"The steep price of EHR and provider uncertainty regarding the value they will derive from adoption in the form of return on investment has a significant influence on EHR adoption."},UF={title:"Time",description:"The implementation of EMR can potentially decrease identification time of patients upon hospital admission. A research from the Annals of Internal Medicine showed that since the adoption of EMR a relative decrease in time by 65% has been recorded (from 130 to 46 hours)."},BF={image:"./src/images/TechFeatures1.jpg",title:"Digital Formatting",description:"Enables information to be used and shared over secure networks"},jF={image:"./src/images/TechFeatures2.jpg",title:"Tracking Care",description:"Allows prescriptions and outcomes to be shared with doctors and patients"},HF={image:"./src/images/TechFeatures3.jpg",title:"Technical Framework",description:"Enables information to move electronically between organizations"},zF={name:"EHRCharacteristics",components:{TechnicalFeature:S0},setup(){return{content:[FF,$F,UF]}}},qF={class:"d-flex gap-3 row justify-content-center mb-3"};function WF(t,e,n,r,i,s){const o=Fe("technical-feature");return Q(),se("section",qF,[(Q(!0),se(Xe,null,Ir(r.content,a=>(Q(),Qn(o,{key:a.title,title:a.title,description:a.description},null,8,["title","description"]))),128))])}const KF=Ke(zF,[["render",WF]]),GF={components:{TechnicalFeature:S0},name:"TechnicalFeatures",setup(){return{content:[BF,jF,HF]}}},YF={class:"d-flex gap-3 row justify-content-center"};function QF(t,e,n,r,i,s){const o=Fe("technical-feature");return Q(),se("section",YF,[(Q(!0),se(Xe,null,Ir(r.content,a=>(Q(),Qn(o,{key:a.title,image:a.image,title:a.title,description:a.description},null,8,["image","title","description"]))),128))])}const XF=Ke(GF,[["render",QF]]);function C0(t,e){return function(){return t.apply(e,arguments)}}const{toString:JF}=Object.prototype,{getPrototypeOf:hm}=Object,rh=(t=>e=>{const n=JF.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),rr=t=>(t=t.toLowerCase(),e=>rh(e)===t),ih=t=>e=>typeof e===t,{isArray:ho}=Array,Ra=ih("undefined");function ZF(t){return t!==null&&!Ra(t)&&t.constructor!==null&&!Ra(t.constructor)&&_n(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const R0=rr("ArrayBuffer");function e$(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&R0(t.buffer),e}const t$=ih("string"),_n=ih("function"),P0=ih("number"),sh=t=>t!==null&&typeof t=="object",n$=t=>t===!0||t===!1,ll=t=>{if(rh(t)!=="object")return!1;const e=hm(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},r$=rr("Date"),i$=rr("File"),s$=rr("Blob"),o$=rr("FileList"),a$=t=>sh(t)&&_n(t.pipe),c$=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||_n(t.append)&&((e=rh(t))==="formdata"||e==="object"&&_n(t.toString)&&t.toString()==="[object FormData]"))},l$=rr("URLSearchParams"),u$=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function rc(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),ho(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function O0(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const k0=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),N0=t=>!Ra(t)&&t!==k0;function hd(){const{caseless:t}=N0(this)&&this||{},e={},n=(r,i)=>{const s=t&&O0(e,i)||i;ll(e[s])&&ll(r)?e[s]=hd(e[s],r):ll(r)?e[s]=hd({},r):ho(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&rc(arguments[r],n);return e}const h$=(t,e,n,{allOwnKeys:r}={})=>(rc(e,(i,s)=>{n&&_n(i)?t[s]=C0(i,n):t[s]=i},{allOwnKeys:r}),t),f$=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),d$=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},p$=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&hm(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},m$=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},g$=t=>{if(!t)return null;if(ho(t))return t;let e=t.length;if(!P0(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},_$=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&hm(Uint8Array)),y$=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},v$=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},E$=rr("HTMLFormElement"),w$=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Yy=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),b$=rr("RegExp"),x0=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};rc(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},T$=t=>{x0(t,(e,n)=>{if(_n(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(_n(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},A$=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return ho(t)?r(t):r(String(t).split(e)),n},I$=()=>{},S$=(t,e)=>(t=+t,Number.isFinite(t)?t:e),af="abcdefghijklmnopqrstuvwxyz",Qy="0123456789",D0={DIGIT:Qy,ALPHA:af,ALPHA_DIGIT:af+af.toUpperCase()+Qy},C$=(t=16,e=D0.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function R$(t){return!!(t&&_n(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const P$=t=>{const e=new Array(10),n=(r,i)=>{if(sh(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=ho(r)?[]:{};return rc(r,(o,a)=>{const c=n(o,i+1);!Ra(c)&&(s[a]=c)}),e[i]=void 0,s}}return r};return n(t,0)},O$=rr("AsyncFunction"),k$=t=>t&&(sh(t)||_n(t))&&_n(t.then)&&_n(t.catch),L={isArray:ho,isArrayBuffer:R0,isBuffer:ZF,isFormData:c$,isArrayBufferView:e$,isString:t$,isNumber:P0,isBoolean:n$,isObject:sh,isPlainObject:ll,isUndefined:Ra,isDate:r$,isFile:i$,isBlob:s$,isRegExp:b$,isFunction:_n,isStream:a$,isURLSearchParams:l$,isTypedArray:_$,isFileList:o$,forEach:rc,merge:hd,extend:h$,trim:u$,stripBOM:f$,inherits:d$,toFlatObject:p$,kindOf:rh,kindOfTest:rr,endsWith:m$,toArray:g$,forEachEntry:y$,matchAll:v$,isHTMLForm:E$,hasOwnProperty:Yy,hasOwnProp:Yy,reduceDescriptors:x0,freezeMethods:T$,toObjectSet:A$,toCamelCase:w$,noop:I$,toFiniteNumber:S$,findKey:O0,global:k0,isContextDefined:N0,ALPHABET:D0,generateString:C$,isSpecCompliantForm:R$,toJSONObject:P$,isAsyncFn:O$,isThenable:k$};function Re(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}L.inherits(Re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const L0=Re.prototype,M0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{M0[t]={value:t}});Object.defineProperties(Re,M0);Object.defineProperty(L0,"isAxiosError",{value:!0});Re.from=(t,e,n,r,i,s)=>{const o=Object.create(L0);return L.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),Re.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const N$=null;function fd(t){return L.isPlainObject(t)||L.isArray(t)}function V0(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function Xy(t,e,n){return t?t.concat(e).map(function(i,s){return i=V0(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function x$(t){return L.isArray(t)&&!t.some(fd)}const D$=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function oh(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,T){return!L.isUndefined(T[w])});const r=n.metaTokens,i=n.visitor||h,s=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function l(v){if(v===null)return"";if(L.isDate(v))return v.toISOString();if(!c&&L.isBlob(v))throw new Re("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(v)||L.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function h(v,w,T){let b=v;if(v&&!T&&typeof v=="object"){if(L.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(L.isArray(v)&&x$(v)||(L.isFileList(v)||L.endsWith(w,"[]"))&&(b=L.toArray(v)))return w=V0(w),b.forEach(function(N,S){!(L.isUndefined(N)||N===null)&&e.append(o===!0?Xy([w],S,s):o===null?w:w+"[]",l(N))}),!1}return fd(v)?!0:(e.append(Xy(T,w,s),l(v)),!1)}const f=[],p=Object.assign(D$,{defaultVisitor:h,convertValue:l,isVisitable:fd});function m(v,w){if(!L.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(v),L.forEach(v,function(b,A){(!(L.isUndefined(b)||b===null)&&i.call(e,b,L.isString(A)?A.trim():A,w,p))===!0&&m(b,w?w.concat(A):[A])}),f.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Jy(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function fm(t,e){this._pairs=[],t&&oh(t,this,e)}const F0=fm.prototype;F0.append=function(e,n){this._pairs.push([e,n])};F0.toString=function(e){const n=e?function(r){return e.call(this,r,Jy)}:Jy;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function L$(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $0(t,e,n){if(!e)return t;const r=n&&n.encode||L$,i=n&&n.serialize;let s;if(i?s=i(e,n):s=L.isURLSearchParams(e)?e.toString():new fm(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class M${constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){L.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Zy=M$,U0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},V$=typeof URLSearchParams<"u"?URLSearchParams:fm,F$=typeof FormData<"u"?FormData:null,$$=typeof Blob<"u"?Blob:null,U$=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),B$=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Un={isBrowser:!0,classes:{URLSearchParams:V$,FormData:F$,Blob:$$},isStandardBrowserEnv:U$,isStandardBrowserWebWorkerEnv:B$,protocols:["http","https","file","blob","url","data"]};function j$(t,e){return oh(t,new Un.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Un.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function H$(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function z$(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function B0(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),c=s>=n.length;return o=!o&&L.isArray(i)?i.length:o,c?(L.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!L.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&L.isArray(i[o])&&(i[o]=z$(i[o])),!a)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(r,i)=>{e(H$(r),i,n,0)}),n}return null}function q$(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const dm={transitional:U0,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=L.isObject(e);if(s&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return i&&i?JSON.stringify(B0(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return j$(e,this.formSerializer).toString();if((a=L.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return oh(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),q$(e)):e}],transformResponse:[function(e){const n=this.transitional||dm.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&L.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Re.from(a,Re.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Un.classes.FormData,Blob:Un.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],t=>{dm.headers[t]={}});const pm=dm,W$=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),K$=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&W$[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},ev=Symbol("internals");function Ro(t){return t&&String(t).trim().toLowerCase()}function ul(t){return t===!1||t==null?t:L.isArray(t)?t.map(ul):String(t)}function G$(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Y$=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function cf(t,e,n,r,i){if(L.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!L.isString(e)){if(L.isString(r))return e.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(e)}}function Q$(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function X$(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class ah{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,c,l){const h=Ro(c);if(!h)throw new Error("header name must be a non-empty string");const f=L.findKey(i,h);(!f||i[f]===void 0||l===!0||l===void 0&&i[f]!==!1)&&(i[f||c]=ul(a))}const o=(a,c)=>L.forEach(a,(l,h)=>s(l,h,c));return L.isPlainObject(e)||e instanceof this.constructor?o(e,n):L.isString(e)&&(e=e.trim())&&!Y$(e)?o(K$(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=Ro(e),e){const r=L.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return G$(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ro(e),e){const r=L.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||cf(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Ro(o),o){const a=L.findKey(r,o);a&&(!n||cf(r,r[a],a,n))&&(delete r[a],i=!0)}}return L.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||cf(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return L.forEach(this,(i,s)=>{const o=L.findKey(r,s);if(o){n[o]=ul(i),delete n[s];return}const a=e?Q$(s):String(s).trim();a!==s&&delete n[s],n[a]=ul(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[ev]=this[ev]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Ro(o);r[a]||(X$(i,o),r[a]=!0)}return L.isArray(e)?e.forEach(s):s(e),this}}ah.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(ah.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});L.freezeMethods(ah);const pr=ah;function lf(t,e){const n=this||pm,r=e||n,i=pr.from(r.headers);let s=r.data;return L.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function j0(t){return!!(t&&t.__CANCEL__)}function ic(t,e,n){Re.call(this,t??"canceled",Re.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(ic,Re,{__CANCEL__:!0});function J$(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new Re("Request failed with status code "+n.status,[Re.ERR_BAD_REQUEST,Re.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Z$=Un.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),L.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),L.isString(s)&&c.push("path="+s),L.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function eU(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function tU(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function H0(t,e){return t&&!eU(e)?tU(t,e):e}const nU=Un.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=L.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function rU(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function iU(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),h=r[s];o||(o=l),n[i]=c,r[i]=l;let f=s,p=0;for(;f!==i;)p+=n[f++],f=f%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),l-o<e)return;const m=h&&l-h;return m?Math.round(p*1e3/m):void 0}}function tv(t,e){let n=0;const r=iU(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a),l=s<=o;n=s;const h={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-s)/c:void 0,event:i};h[e?"download":"upload"]=!0,t(h)}}const sU=typeof XMLHttpRequest<"u",oU=sU&&function(t){return new Promise(function(n,r){let i=t.data;const s=pr.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}let l;L.isFormData(i)&&(Un.isStandardBrowserEnv||Un.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?L.isString(l=s.getContentType())&&s.setContentType(l.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let h=new XMLHttpRequest;if(t.auth){const v=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(v+":"+w))}const f=H0(t.baseURL,t.url);h.open(t.method.toUpperCase(),$0(f,t.params,t.paramsSerializer),!0),h.timeout=t.timeout;function p(){if(!h)return;const v=pr.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),T={data:!o||o==="text"||o==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:v,config:t,request:h};J$(function(A){n(A),c()},function(A){r(A),c()},T),h=null}if("onloadend"in h?h.onloadend=p:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(p)},h.onabort=function(){h&&(r(new Re("Request aborted",Re.ECONNABORTED,t,h)),h=null)},h.onerror=function(){r(new Re("Network Error",Re.ERR_NETWORK,t,h)),h=null},h.ontimeout=function(){let w=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const T=t.transitional||U0;t.timeoutErrorMessage&&(w=t.timeoutErrorMessage),r(new Re(w,T.clarifyTimeoutError?Re.ETIMEDOUT:Re.ECONNABORTED,t,h)),h=null},Un.isStandardBrowserEnv){const v=(t.withCredentials||nU(f))&&t.xsrfCookieName&&Z$.read(t.xsrfCookieName);v&&s.set(t.xsrfHeaderName,v)}i===void 0&&s.setContentType(null),"setRequestHeader"in h&&L.forEach(s.toJSON(),function(w,T){h.setRequestHeader(T,w)}),L.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),o&&o!=="json"&&(h.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&h.addEventListener("progress",tv(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",tv(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=v=>{h&&(r(!v||v.type?new ic(null,t,h):v),h.abort(),h=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const m=rU(f);if(m&&Un.protocols.indexOf(m)===-1){r(new Re("Unsupported protocol "+m+":",Re.ERR_BAD_REQUEST,t));return}h.send(i||null)})},dd={http:N$,xhr:oU};L.forEach(dd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const nv=t=>`- ${t}`,aU=t=>L.isFunction(t)||t===null||t===!1,z0={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!aU(n)&&(r=dd[(o=String(n)).toLowerCase()],r===void 0))throw new Re(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(nv).join(`
`):" "+nv(s[0]):"as no adapter specified";throw new Re("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:dd};function uf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ic(null,t)}function rv(t){return uf(t),t.headers=pr.from(t.headers),t.data=lf.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),z0.getAdapter(t.adapter||pm.adapter)(t).then(function(r){return uf(t),r.data=lf.call(t,t.transformResponse,r),r.headers=pr.from(r.headers),r},function(r){return j0(r)||(uf(t),r&&r.response&&(r.response.data=lf.call(t,t.transformResponse,r.response),r.response.headers=pr.from(r.response.headers))),Promise.reject(r)})}const iv=t=>t instanceof pr?t.toJSON():t;function Gs(t,e){e=e||{};const n={};function r(l,h,f){return L.isPlainObject(l)&&L.isPlainObject(h)?L.merge.call({caseless:f},l,h):L.isPlainObject(h)?L.merge({},h):L.isArray(h)?h.slice():h}function i(l,h,f){if(L.isUndefined(h)){if(!L.isUndefined(l))return r(void 0,l,f)}else return r(l,h,f)}function s(l,h){if(!L.isUndefined(h))return r(void 0,h)}function o(l,h){if(L.isUndefined(h)){if(!L.isUndefined(l))return r(void 0,l)}else return r(void 0,h)}function a(l,h,f){if(f in e)return r(l,h);if(f in t)return r(void 0,l)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,h)=>i(iv(l),iv(h),!0)};return L.forEach(Object.keys(Object.assign({},t,e)),function(h){const f=c[h]||i,p=f(t[h],e[h],h);L.isUndefined(p)&&f!==a||(n[h]=p)}),n}const q0="1.5.1",mm={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{mm[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const sv={};mm.transitional=function(e,n,r){function i(s,o){return"[Axios v"+q0+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new Re(i(o," has been removed"+(n?" in "+n:"")),Re.ERR_DEPRECATED);return n&&!sv[o]&&(sv[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function cU(t,e,n){if(typeof t!="object")throw new Re("options must be an object",Re.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],c=a===void 0||o(a,s,t);if(c!==!0)throw new Re("option "+s+" must be "+c,Re.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Re("Unknown option "+s,Re.ERR_BAD_OPTION)}}const pd={assertOptions:cU,validators:mm},xr=pd.validators;class Xl{constructor(e){this.defaults=e,this.interceptors={request:new Zy,response:new Zy}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Gs(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&pd.assertOptions(r,{silentJSONParsing:xr.transitional(xr.boolean),forcedJSONParsing:xr.transitional(xr.boolean),clarifyTimeoutError:xr.transitional(xr.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:pd.assertOptions(i,{encode:xr.function,serialize:xr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&L.merge(s.common,s[n.method]);s&&L.forEach(["delete","get","head","post","put","patch","common"],v=>{delete s[v]}),n.headers=pr.concat(o,s);const a=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let h,f=0,p;if(!c){const v=[rv.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,l),p=v.length,h=Promise.resolve(n);f<p;)h=h.then(v[f++],v[f++]);return h}p=a.length;let m=n;for(f=0;f<p;){const v=a[f++],w=a[f++];try{m=v(m)}catch(T){w.call(this,T);break}}try{h=rv.call(this,m)}catch(v){return Promise.reject(v)}for(f=0,p=l.length;f<p;)h=h.then(l[f++],l[f++]);return h}getUri(e){e=Gs(this.defaults,e);const n=H0(e.baseURL,e.url);return $0(n,e.params,e.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(e){Xl.prototype[e]=function(n,r){return this.request(Gs(r||{},{method:e,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Gs(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Xl.prototype[e]=n(),Xl.prototype[e+"Form"]=n(!0)});const hl=Xl;class gm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new ic(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new gm(function(i){e=i}),cancel:e}}}const lU=gm;function uU(t){return function(n){return t.apply(null,n)}}function hU(t){return L.isObject(t)&&t.isAxiosError===!0}const md={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(md).forEach(([t,e])=>{md[e]=t});const fU=md;function W0(t){const e=new hl(t),n=C0(hl.prototype.request,e);return L.extend(n,hl.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return W0(Gs(t,i))},n}const lt=W0(pm);lt.Axios=hl;lt.CanceledError=ic;lt.CancelToken=lU;lt.isCancel=j0;lt.VERSION=q0;lt.toFormData=oh;lt.AxiosError=Re;lt.Cancel=lt.CanceledError;lt.all=function(e){return Promise.all(e)};lt.spread=uU;lt.isAxiosError=hU;lt.mergeConfig=Gs;lt.AxiosHeaders=pr;lt.formToJSON=t=>B0(L.isHTMLForm(t)?new FormData(t):t);lt.getAdapter=z0.getAdapter;lt.HttpStatusCode=fU;lt.default=lt;const dU=lt;const pU={name:"LatestNews",props:{title:{type:String,required:!0},image:{type:String,required:!0},description:{type:String,required:!0},url:{type:String,required:!0}}},mU=t=>(er("data-v-d2a60c86"),t=t(),tr(),t),gU={class:"d-flex col-md-9 gap-5 my-5"},_U=["src"],yU=["href"],vU=mU(()=>D("button",null,"Read More",-1)),EU=[vU];function wU(t,e,n,r,i,s){return Q(),se("section",gU,[D("img",{class:"news-image",src:n.image},null,8,_U),D("div",null,[D("h3",null,Me(n.title),1),D("p",null,Me(n.description),1),D("a",{href:n.url,target:"_blank",class:"news-button"},EU,8,yU)])])}const bU=Ke(pU,[["render",wU],["__scopeId","data-v-d2a60c86"]]),TU={name:"LatestNewsSection",components:{LatestNews:bU},setup(){const t=Qe([]);return(async()=>{const n=await dU.get("https://gnews.io/api/v4/search?q=medical&lang=en&country=us&max=2&in=medical&apikey=d042cc97dbb8d1b1b211a995f262de33");t.value=await n.data,console.log(t.value)})(),{results:t}}},AU={class:"d-flex flex-wrap justify-content-around"};function IU(t,e,n,r,i,s){const o=Fe("latest-news");return Q(),se("section",AU,[(Q(!0),se(Xe,null,Ir(r.results.articles,a=>(Q(),Qn(o,{key:a.title,title:a.title,image:a.image,description:a.description,link:a.url},null,8,["title","image","description","link"]))),128))])}const SU=Ke(TU,[["render",IU]]),CU={name:"HomeView",components:{TechnicalFeatures:XF,EHRCharacteristics:KF,LatestNewsSection:SU,HomeHeader:OF}},RU=D("div",{class:"d-flex gap-5"},[D("span",{class:"col-1"}),D("h2",{class:"border-bottom col-9 mt-5"},"Technical Features"),D("span",{class:"col-1"})],-1),PU=D("div",{class:"d-flex gap-5"},[D("span",{class:"col-1"}),D("h2",{class:"border-bottom col-9 mt-5"},"Latest News"),D("span",{class:"col-1"})],-1);function OU(t,e,n,r,i,s){const o=Fe("HomeHeader"),a=Fe("EHRCharacteristics"),c=Fe("technical-features"),l=Fe("latest-news-section");return Q(),se(Xe,null,[we(o),we(a),RU,we(c),PU,we(l)],64)}const kU=Ke(CU,[["render",OU]]);const NU={name:"ProfileImage",methods:{uploadImage(){const t=qs().currentUser.uid,e=h0(f0,"images/profileImage"+t);ZV(e,this.$refs.profileImage.files[0]).then(n=>{console.log("uploaded")}).then(kL(qs().currentUser,{photoURL:"images/profileImage"+t}))}}},K0=t=>(er("data-v-3c1ec76f"),t=t(),tr(),t),xU={class:"text-center"},DU=K0(()=>D("label",{class:"control-label image-label"},"Upload Profile Image",-1)),LU=K0(()=>D("br",null,null,-1));function MU(t,e,n,r,i,s){return Q(),se("div",xU,[DU,D("input",{type:"file",ref:"profileImage",onChange:e[0]||(e[0]=(...o)=>t.handleChange&&t.handleChange(...o)),class:"form-control"},null,544),LU,D("button",{onClick:e[1]||(e[1]=(...o)=>s.uploadImage&&s.uploadImage(...o))},"Save")])}const VU=Ke(NU,[["render",MU],["__scopeId","data-v-3c1ec76f"]]);const FU={props:{path:String},data:()=>({url:""}),mounted(){e4(h0(f0,qs().currentUser.photoURL)).then(t=>this.url=t).then(console.log(this.url))}};function $U(t,e,n,r,i,s){return Q(),se("div",{class:no(t.url?"profile-image":"no-image"),style:au({backgroundImage:"url("+t.url+")"})},null,6)}const UU=Ke(FU,[["render",$U],["__scopeId","data-v-ed895101"]]);const BU={setup(){const t=Qe([]),e=d2(So,"User"),n=qs().currentUser.uid,r=Qe(""),i=Qe(""),s=Qe(""),o=Qe(""),a=Qe(""),c=Qe(!1),l=Qe(!1);let h={name:r,email:i,company:s,phone:o,address:a};uy(Vc(So,"User",n));const f=async()=>{const w=await uy(Vc(So,"User",n));w.exists()&&(r.value=w.data().name,s.value=w.data().company,i.value=w.data().email,o.value=w.data().phone,a.value=w.data().address,l.value=w.data().address),h={name:r.value,email:i.value,company:s.value,phone:o.value,address:a.value},console.log(h)};return Tf(()=>{f(),console.log(h)}),P2(e).then(w=>{let T=[];w.docs.forEach(b=>{T.push({...b.data(),id:b.id})}),t.value=T}),{users:t,uniqueId:n,name:r,email:i,company:s,phone:o,address:a,handleSubmit:async()=>{l.value=!0,await O2(Vc(So,"User",n),{name:r.value,email:i.value,company:s.value,phone:o.value,address:a.value,dataEntered:l.value})},handleUpdate:async()=>{const w=Vc(So,"User",n);k2(w,{name:r.value,email:i.value,company:s.value,phone:o.value,address:a.value}),c.value=!1},currentData:h,getUserInfo:f,onBeforeMount:Tf,openUpdate:c,openUpdateList:()=>{c.value=!c.value},dataEntered:l}}},hn=t=>(er("data-v-996a6f40"),t=t(),tr(),t),jU={class:"me-5 client-info"},HU=hn(()=>D("h3",null,"Create Profile",-1)),zU={for:"name",class:"control-label mt-3"},qU=hn(()=>D("br",null,null,-1)),WU={class:"mt-3 control-label"},KU=hn(()=>D("br",null,null,-1)),GU={class:"mt-3 control-label"},YU=hn(()=>D("br",null,null,-1)),QU={class:"mt-3 control-label"},XU=hn(()=>D("br",null,null,-1)),JU={class:"mt-3 control-label"},ZU=hn(()=>D("br",null,null,-1)),e5=hn(()=>D("button",{class:"mt-3"},"Add Info",-1)),t5={for:"name"},n5=hn(()=>D("br",null,null,-1)),r5=hn(()=>D("br",null,null,-1)),i5=hn(()=>D("br",null,null,-1)),s5=hn(()=>D("br",null,null,-1)),o5=hn(()=>D("br",null,null,-1)),a5=hn(()=>D("button",null,"Update Info",-1)),c5={class:"d-none"};function l5(t,e,n,r,i,s){return Q(),se("section",{class:no(r.dataEntered?"d-flex gap-5":"d-flex flex-row-reverse gap-5")},[D("div",jU,[D("h2",null,"DataMed Profile For "+Me(r.currentData.name.value),1),D("h3",null,"Name: "+Me(r.currentData.name.value),1),D("h3",null,"Company: "+Me(r.currentData.company.value),1),D("h3",null,"Email: "+Me(r.currentData.email.value),1),D("h3",null,"Phone Number: "+Me(r.currentData.phone.value),1),D("h3",null,"Address: "+Me(r.currentData.address.value),1)]),r.dataEntered?(Q(),se("button",{key:1,onClick:e[6]||(e[6]=(...o)=>r.openUpdateList&&r.openUpdateList(...o)),class:"m-5"},"Update Profile")):(Q(),se("form",{key:0,class:"ms-5",onSubmit:e[5]||(e[5]=la((...o)=>r.handleSubmit&&r.handleSubmit(...o),["prevent"]))},[HU,D("label",zU,[ut("Name "),at(D("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.name=o),type:"text",name:"name",class:"form-control",required:""},null,512),[[gt,r.name]])]),qU,D("label",WU,[ut("Company "),at(D("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.company=o),type:"text",name:"company",class:"form-control",required:""},null,512),[[gt,r.company]])]),KU,D("label",GU,[ut("Email "),at(D("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.email=o),type:"email",name:"email",class:"form-control",required:""},null,512),[[gt,r.email]])]),YU,D("label",QU,[ut("Phone "),at(D("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.phone=o),type:"phone",name:"phone",class:"form-control",required:""},null,512),[[gt,r.phone]])]),XU,D("label",JU,[ut("Address "),at(D("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.address=o),type:"text",name:"address",class:"form-control",required:""},null,512),[[gt,r.address]])]),ZU,e5],32)),r.openUpdate?(Q(),se("form",{key:2,onSubmit:e[12]||(e[12]=la((...o)=>r.handleUpdate&&r.handleUpdate(...o),["prevent"]))},[D("label",t5,[ut("Name "),at(D("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>r.name=o),type:"text",name:"name",vale:"abc",required:""},null,512),[[gt,r.name]])]),n5,D("label",null,[ut("Company "),at(D("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>r.company=o),type:"text",name:"company"},null,512),[[gt,r.company]])]),r5,D("label",null,[ut("Email "),at(D("input",{"onUpdate:modelValue":e[9]||(e[9]=o=>r.email=o),type:"text",name:"email"},null,512),[[gt,r.email]])]),i5,D("label",null,[ut("Phone "),at(D("input",{"onUpdate:modelValue":e[10]||(e[10]=o=>r.phone=o),type:"text",name:"phone"},null,512),[[gt,r.phone]])]),s5,D("label",null,[ut("Address "),at(D("input",{"onUpdate:modelValue":e[11]||(e[11]=o=>r.address=o),type:"text",name:"address"},null,512),[[gt,r.address]])]),o5,a5],32)):Oi("",!0),D("ul",c5,[(Q(!0),se(Xe,null,Ir(r.users,o=>(Q(),se("li",{key:o.id},Me(o.name),1))),128))])],2)}const u5=Ke(BU,[["render",l5],["__scopeId","data-v-996a6f40"]]);const h5={name:"ProfileView",components:{ProfileImage:VU,UploadedProfileImage:UU,ProfileInfo:u5}},f5={class:"d-flex profile-data"};function d5(t,e,n,r,i,s){const o=Fe("uploaded-profile-image"),a=Fe("profile-image"),c=Fe("profile-info");return Q(),se("section",f5,[D("div",null,[we(o),we(a)]),we(c)])}const p5=Ke(h5,[["render",d5],["__scopeId","data-v-4c9f30ab"]]),fl=Qe(null),dl=Qe(!1),m5=async(t,e)=>{fl.value=null,dl.value=!0;try{if(!await PL(nc,t,e))throw new Error("Cannot login");fl.value=null,dl.value=!1}catch(n){console.log(n.message),fl.value=n.message,dl.value=!1}},g5=()=>({error:fl,isPending:dl,login:m5});const _5={setup(){const t=Qe(""),e=Qe(""),n=Qe(!1),{login:r,error:i}=g5(),s=I0();return{email:t,password:e,handleLogin:async()=>{await r(t.value,e.value),i.value||s.push("/")},error:i,showPassword:n,togglePassword:()=>{n.value=!n.value}}}},G0=t=>(er("data-v-bf67127b"),t=t(),tr(),t),y5=G0(()=>D("h1",null,"Login",-1)),v5=G0(()=>D("button",{class:"my-5 login-button"},"Login",-1)),E5={key:4};function w5(t,e,n,r,i,s){const o=Fe("font-awesome-icon"),a=Fe("router-link");return Q(),se("form",{class:"py-5 my-5",onSubmit:e[3]||(e[3]=la((...c)=>r.handleLogin&&r.handleLogin(...c),["prevent"]))},[y5,at(D("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>r.email=c),type:"email",placeholder:"Email",class:"my-5"},null,512),[[gt,r.email]]),r.showPassword?at((Q(),se("input",{key:1,"onUpdate:modelValue":e[2]||(e[2]=c=>r.password=c),type:"text",placeholder:"Password",class:"input-password"},null,512)),[[gt,r.password]]):at((Q(),se("input",{key:0,"onUpdate:modelValue":e[1]||(e[1]=c=>r.password=c),type:"password",placeholder:"Password",class:"input-password"},null,512)),[[gt,r.password]]),r.showPassword?(Q(),Qn(o,{key:3,icon:"fa-solid fa-eye-slash",onClick:r.togglePassword},null,8,["onClick"])):(Q(),Qn(o,{key:2,icon:"fa-solid fa-eye ",onClick:r.togglePassword},null,8,["onClick"])),v5,r.error?(Q(),se("div",E5,Me(r.error),1)):Oi("",!0),D("div",null,[ut("No Account? "),we(a,{to:"sign-up"},{default:Mn(()=>[ut("Sign Up Here")]),_:1})])],32)}const b5=Ke(_5,[["render",w5],["__scopeId","data-v-bf67127b"]]),pl=Qe(null),ml=Qe(!1),T5=async(t,e)=>{pl.value=null,ml.value=!0;try{if(!await RL(nc,t,e))throw new Error("Cannot sign up");pl.value=null,ml.value=!1}catch(n){console.log(n.message),pl.value=n.message,ml.value=!1}},A5=()=>({error:pl,isPending:ml,signup:T5});const I5={setup(){const t=Qe(""),e=Qe(""),n=Qe(!1),{signup:r,error:i}=A5(),s=I0();return{email:t,password:e,register:async()=>{await r(t.value,e.value),i.value||s.push("/")},error:i,showPassword:n,togglePassword:()=>{n.value=!n.value}}}},Y0=t=>(er("data-v-ac6223b8"),t=t(),tr(),t),S5=Y0(()=>D("h1",null,"Create an Account",-1)),C5=Y0(()=>D("button",{class:"my-5 login-button"},"Create Account",-1)),R5={key:4};function P5(t,e,n,r,i,s){const o=Fe("font-awesome-icon"),a=Fe("router-link");return Q(),se("form",{class:"py-5 my-5",onSubmit:e[3]||(e[3]=la((...c)=>r.register&&r.register(...c),["prevent"]))},[S5,at(D("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>r.email=c),type:"email",placeholder:"Email",class:"my-5"},null,512),[[gt,r.email]]),r.showPassword?at((Q(),se("input",{key:1,"onUpdate:modelValue":e[2]||(e[2]=c=>r.password=c),type:"text",placeholder:"Password",class:"input-password"},null,512)),[[gt,r.password]]):at((Q(),se("input",{key:0,"onUpdate:modelValue":e[1]||(e[1]=c=>r.password=c),type:"password",placeholder:"Password",class:"input-password"},null,512)),[[gt,r.password]]),r.showPassword?(Q(),Qn(o,{key:3,icon:"fa-solid fa-eye-slash",onClick:r.togglePassword},null,8,["onClick"])):(Q(),Qn(o,{key:2,icon:"fa-solid fa-eye ",onClick:r.togglePassword},null,8,["onClick"])),C5,r.error?(Q(),se("div",R5,Me(r.error),1)):Oi("",!0),D("span",null,[ut("Already have an account? "),we(a,{to:"/sign-in"},{default:Mn(()=>[ut("Sign In Here")]),_:1})])],32)}const O5=Ke(I5,[["render",P5],["__scopeId","data-v-ac6223b8"]]),k5=[{name:"Replacement CT Tube",id:1,image:"",condition:"New",price:1500,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"abcde",id:1,image:"",condition:"New",price:1500,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{name:"Abc",id:2,image:"",condition:"used",price:1400,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],Q0="/assets/product-placeholder-28a62e95.jpg";const N5={name:"ProductList",props:{productList:Array},data(){return{newProductList:this.productList,search:"",newOnly:!1,priceFilter:1e4,shoppingCart:[],value:{}}},computed:{filterProducts(){return this.newProductList.filter(t=>t.name.toLowerCase().includes(this.search))}},methods:{filterListResults(){this.newProductList=this.productList,this.newProductList=this.newProductList.filter(t=>t.price<Number(this.priceFilter)),this.newOnly&&(this.newProductList=this.newProductList.filter(t=>t.condition==="New"))},addProductToCart(t){this.shoppingCart.push(t)},handleClick(t){this.$emit("handleClick",t)}}},X0=t=>(er("data-v-5b904d39"),t=t(),tr(),t),x5={class:"d-flex"},D5=X0(()=>D("h5",null,"Max Price",-1)),L5=X0(()=>D("button",null,"Filter",-1)),M5=["alt"],V5=["onClick"];function F5(t,e,n,r,i,s){return Q(),se("section",x5,[D("form",{onSubmit:e[2]||(e[2]=la((...o)=>s.filterListResults&&s.filterListResults(...o),["prevent"])),class:"filter"},[D("label",null,[ut("New Only "),at(D("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>i.newOnly=o),type:"checkbox"},null,512),[[jP,i.newOnly]])]),D5,at(D("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>i.priceFilter=o),type:"number",min:"0",max:"10000"},null,512),[[gt,i.priceFilter]]),L5],32),D("ul",null,[(Q(!0),se(Xe,null,Ir(s.filterProducts,o=>(Q(),se("li",{key:o.id,class:"d-flex mb-5"},[D("img",{src:Q0,alt:o.name},null,8,M5),D("div",null,[D("h3",null,Me(o.name),1),D("p",null,"Condition: "+Me(o.condition),1),D("p",null,"Price: $"+Me(o.price),1),D("p",null,Me(o.description),1),D("button",{onClick:a=>s.handleClick(o)},"Add To Cart",8,V5)])]))),128))]),D("label",null,[ut("Search "),at(D("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>i.search=o),type:"text"},null,512),[[gt,i.search]])])])}const $5=Ke(N5,[["render",F5],["__scopeId","data-v-5b904d39"]]);const U5={name:"ProductCart",props:{shoppingCart:Array},data(){return{currentCart:this.shoppingCart,cartOpen:!1}},computed:{totalCost(){let t=0;return this.currentCart.forEach(e=>{t+=e.price}),t}},methods:{deleteItem(t){this.currentCart.splice(this.currentCart.indexOf(t),1),localStorage.setItem("shoppingCart",JSON.stringify(this.currentCart))},openCartPanel(){this.cartOpen=!this.cartOpen}}},J0=t=>(er("data-v-786e6876"),t=t(),tr(),t),B5={class:"shopping-cart"},j5={key:1},H5={key:0,class:"shopping-cart-open col-3"},z5={class:"cart-list"},q5=["alt"],W5=["onClick"],K5={class:"d-flex checkout p-3 justify-content-around"},G5=J0(()=>D("button",null,"Proceed to Checkout",-1)),Y5={key:1},Q5=J0(()=>D("p",null,"Shopping Cart Empty",-1)),X5=[Q5];function J5(t,e,n,r,i,s){const o=Fe("font-awesome-icon"),a=Fe("router-link");return Q(),se("section",B5,[i.cartOpen?(Q(),se("section",j5,[we(o,{icon:"fa-solid fa-xmark",class:"close-icon",onClick:s.openCartPanel},null,8,["onClick"]),n.shoppingCart.length?(Q(),se("section",H5,[D("ul",z5,[(Q(!0),se(Xe,null,Ir(n.shoppingCart,c=>(Q(),se("li",{key:c.id,class:"cart-product-container p-2 m-2"},[D("img",{class:"product-image",src:Q0,alt:c.name},null,8,q5),D("div",null,[D("h3",null,Me(c.name),1),D("p",null,"Condition: "+Me(c.condition),1),D("p",null,"Price: $"+Me(c.price),1),D("p",null,Me(c.description),1)]),D("button",{class:"mb-2",onClick:l=>s.deleteItem(c)},"Remove Item",8,W5)]))),128)),D("div",K5,[D("h3",null,"Total Cost: $"+Me(s.totalCost),1),we(a,{to:"/checkout"},{default:Mn(()=>[G5]),_:1})])])])):(Q(),se("section",Y5,X5))])):(Q(),Qn(o,{key:0,icon:"fa-solid fa-cart-shopping",class:"cart-icon",onClick:s.openCartPanel},null,8,["onClick"]))])}const Z5=Ke(U5,[["render",J5],["__scopeId","data-v-786e6876"]]);const e9={name:"ProductsComponent",components:{ProductList:$5,ProductCart:Z5},data(){return{shoppingCart:JSON.parse(localStorage.getItem("shoppingCart"))||[],productsList:k5}},methods:{updateCart(t){this.shoppingCart.push(t),console.log(this.shoppingCart),localStorage.setItem("shoppingCart",JSON.stringify(this.shoppingCart))},updateValue(t){console.log(t)}}},t9={class:"d-flex gap-5"};function n9(t,e,n,r,i,s){const o=Fe("product-list"),a=Fe("product-cart");return Q(),se("section",t9,[we(o,{"product-list":i.productsList,onHandleClick:s.updateCart},null,8,["product-list","onHandleClick"]),we(a,{"shopping-cart":i.shoppingCart},null,8,["shopping-cart"])])}const r9=Ke(e9,[["render",n9],["__scopeId","data-v-c5b2bfbf"]]);const i9={components:{ProductsComponent:r9}},s9=t=>(er("data-v-32c871f8"),t=t(),tr(),t),o9=s9(()=>D("h2",{class:"page-header py-3 my-5"},"Products",-1));function a9(t,e,n,r,i,s){const o=Fe("products-component");return Q(),se(Xe,null,[o9,we(o)],64)}const c9=Ke(i9,[["render",a9],["__scopeId","data-v-32c871f8"]]);const l9={setup(t,{slots:e}){const n=Qe(e.default().map(i=>i.props.header)),r=Qe(n.value[0]);return jo("activeHeader",r),{tabHeaders:n,activeHeader:r}}},u9={class:"tabs"},h9={class:"tabs-header"},f9=["onClick"];function d9(t,e,n,r,i,s){return Q(),se("div",u9,[D("ul",h9,[(Q(!0),se(Xe,null,Ir(r.tabHeaders,o=>(Q(),se("li",{key:o,class:no({selected:o==r.activeHeader}),onClick:a=>r.activeHeader=o},Me(o),11,f9))),128))]),TE(t.$slots,"default",{},void 0,!0)])}const p9=Ke(l9,[["render",d9],["__scopeId","data-v-8d2cc528"]]);const m9={props:["header"],setup(){return{activeHeader:Cn("activeHeader")}}},g9={class:"content"};function _9(t,e,n,r,i,s){return at((Q(),se("div",g9,[TE(t.$slots,"default")],512)),[[CP,n.header==r.activeHeader]])}const y9=Ke(m9,[["render",_9]]),v9={},E9=LE('<section class="d-flex justify-content-evenly p-5"><div><label for="first-name" class="control-label">First Name</label><input id="first-name" type="text" name="first-name" class="form-control" required></div><div><label for="middle-name" class="control-label">Middle Name (optional)</label><input id="middle-name" type="text" name="middle-name" class="form-control"></div><div><label for="last-name" class="control-label">Last Name</label><input id="last-name" required type="text" name="last-name" class="form-control"></div></section><section class="member-guest"><span class="px-5">Order as a Guest:</span><label for="guest" class="pe-5">Yes <input id="guest" type="radio" name="guest" checked="checked"></label><label for="not-guest">No <input id="not-guest" type="radio" name="guest"></label></section><section class="d-flex justify-content-around p-5"><div><label for="billing-address" class="control-label">* Billing Address</label><input id="billing-address" type="text" name="billing-address" class="form-control" required></div><div><label for="billing-address-2" class="control-label">Billing Address 2</label><input id="billing-address-2" type="text" name="billing-address-2" class="form-control" required></div></section><section class="d-flex justify-content-evenly p-5"><div><label for="city" class="control-label">* City</label><input id="city" type="text" name="city" class="form-control" required></div><div><label for="state" class="control-label">* State</label><input id="state" type="text" name="state" class="form-control" required></div><div><label for="zip-code" class="control-label">* Zip Code</label><input id="zip-code" type="text" name="zip-code" class="form-control" required></div><label>Shipping: <select><option>1 Business Day</option></select></label></section>',4),w9=[E9];function b9(t,e){return Q(),se("form",null,w9)}const T9=Ke(v9,[["render",b9]]),A9={},I9=LE('<label for="name-on-card">* Name on Card</label><input id="name-on-card" type="text" name="name-on-card"><br><label for="credit-card-number">* Credit Card Number</label><input id="credit-card-number" type="text" name="credit-card-number"><label for="expiration-date">* Expiration Date</label><input id="expiration-date" type="text" name="expiration-date"><label for="cvv">* CVV</label><input id="cvv" type="text" name="cvv">',9);function S9(t,e){return I9}const C9=Ke(A9,[["render",S9]]),R9="/assets/product-placeholder-28a62e95.jpg",P9={data(){return{currentCartItems:JSON.parse(localStorage.getItem("shoppingCart"))}}},O9={class:"cart-list"},k9=["alt"];function N9(t,e,n,r,i,s){return Q(),se("ul",O9,[(Q(!0),se(Xe,null,Ir(i.currentCartItems,o=>(Q(),se("li",{key:o.id,class:"d-flex my-5"},[D("img",{class:"product-image",src:R9,alt:o.name},null,8,k9),D("div",null,[D("h3",null,Me(o.name),1),D("p",null,"Condition: "+Me(o.condition),1),D("p",null,"Price: $"+Me(o.price),1),D("p",null,Me(o.description),1)])]))),128))])}const x9=Ke(P9,[["render",N9]]);const D9={components:{TabContainer:p9,TabItem:y9,ClientInformation:T9,PaymentInformation:C9,ReviewAndCheckout:x9}},L9={class:"payment-tabs"};function M9(t,e,n,r,i,s){const o=Fe("ClientInformation"),a=Fe("tab-item"),c=Fe("PaymentInformation"),l=Fe("ReviewAndCheckout"),h=Fe("TabContainer");return Q(),se("section",L9,[we(h,null,{default:Mn(()=>[we(a,{header:"Client Information"},{default:Mn(()=>[we(o)]),_:1}),we(a,{header:"Payment Information"},{default:Mn(()=>[we(c)]),_:1}),we(a,{header:"Review and Checkout"},{default:Mn(()=>[we(l)]),_:1})]),_:1})])}const V9=Ke(D9,[["render",M9],["__scopeId","data-v-8e894a1a"]]),Z0=EF({history:M4(),routes:[{path:"/",name:"Home",component:kU},{path:"/profile",name:"Profile",component:p5,meta:{requiresAuth:!0}},{path:"/sign-in",name:"SignIn",component:b5},{path:"/sign-up",name:"SignUp",component:O5},{path:"/product-search",name:"Products",component:c9},{path:"/checkout",name:"Checkout",component:V9}]}),F9=()=>new Promise((t,e)=>{VT(qs(),n=>{t(n)},e)});Z0.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await F9()?n():(alert("you don't have access!"),n("/")):n()});function ov(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ov(Object(n),!0).forEach(function(r){pt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ov(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Jl(t){"@babel/helpers - typeof";return Jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jl(t)}function $9(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function av(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U9(t,e,n){return e&&av(t.prototype,e),n&&av(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function pt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _m(t,e){return j9(t)||z9(t,e)||eA(t,e)||W9()}function sc(t){return B9(t)||H9(t)||eA(t)||q9()}function B9(t){if(Array.isArray(t))return gd(t)}function j9(t){if(Array.isArray(t))return t}function H9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function z9(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function eA(t,e){if(t){if(typeof t=="string")return gd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gd(t,e)}}function gd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function q9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var cv=function(){},ym={},tA={},nA=null,rA={mark:cv,measure:cv};try{typeof window<"u"&&(ym=window),typeof document<"u"&&(tA=document),typeof MutationObserver<"u"&&(nA=MutationObserver),typeof performance<"u"&&(rA=performance)}catch{}var K9=ym.navigator||{},lv=K9.userAgent,uv=lv===void 0?"":lv,ei=ym,qe=tA,hv=nA,Bc=rA;ei.document;var Sr=!!qe.documentElement&&!!qe.head&&typeof qe.addEventListener=="function"&&typeof qe.createElement=="function",iA=~uv.indexOf("MSIE")||~uv.indexOf("Trident/"),jc,Hc,zc,qc,Wc,Er="___FONT_AWESOME___",_d=16,sA="fa",oA="svg-inline--fa",qi="data-fa-i2svg",yd="data-fa-pseudo-element",G9="data-fa-pseudo-element-pending",vm="data-prefix",Em="data-icon",fv="fontawesome-i2svg",Y9="async",Q9=["HTML","HEAD","STYLE","SCRIPT"],aA=function(){try{return!0}catch{return!1}}(),He="classic",et="sharp",wm=[He,et];function oc(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[He]}})}var Pa=oc((jc={},pt(jc,He,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pt(jc,et,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),jc)),Oa=oc((Hc={},pt(Hc,He,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pt(Hc,et,{solid:"fass",regular:"fasr",light:"fasl"}),Hc)),ka=oc((zc={},pt(zc,He,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pt(zc,et,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),zc)),X9=oc((qc={},pt(qc,He,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pt(qc,et,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),qc)),J9=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,cA="fa-layers-text",Z9=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,e6=oc((Wc={},pt(Wc,He,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pt(Wc,et,{900:"fass",400:"fasr",300:"fasl"}),Wc)),lA=[1,2,3,4,5,6,7,8,9,10],t6=lA.concat([11,12,13,14,15,16,17,18,19,20]),n6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ci={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Na=new Set;Object.keys(Oa[He]).map(Na.add.bind(Na));Object.keys(Oa[et]).map(Na.add.bind(Na));var r6=[].concat(wm,sc(Na),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ci.GROUP,Ci.SWAP_OPACITY,Ci.PRIMARY,Ci.SECONDARY]).concat(lA.map(function(t){return"".concat(t,"x")})).concat(t6.map(function(t){return"w-".concat(t)})),Zo=ei.FontAwesomeConfig||{};function i6(t){var e=qe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function s6(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(qe&&typeof qe.querySelector=="function"){var o6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];o6.forEach(function(t){var e=_m(t,2),n=e[0],r=e[1],i=s6(i6(n));i!=null&&(Zo[r]=i)})}var uA={styleDefault:"solid",familyDefault:"classic",cssPrefix:sA,replacementClass:oA,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zo.familyPrefix&&(Zo.cssPrefix=Zo.familyPrefix);var Ys=Y(Y({},uA),Zo);Ys.autoReplaceSvg||(Ys.observeMutations=!1);var te={};Object.keys(uA).forEach(function(t){Object.defineProperty(te,t,{enumerable:!0,set:function(n){Ys[t]=n,ea.forEach(function(r){return r(te)})},get:function(){return Ys[t]}})});Object.defineProperty(te,"familyPrefix",{enumerable:!0,set:function(e){Ys.cssPrefix=e,ea.forEach(function(n){return n(te)})},get:function(){return Ys.cssPrefix}});ei.FontAwesomeConfig=te;var ea=[];function a6(t){return ea.push(t),function(){ea.splice(ea.indexOf(t),1)}}var Dr=_d,Bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function c6(t){if(!(!t||!Sr)){var e=qe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=qe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return qe.head.insertBefore(e,r),t}}var l6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xa(){for(var t=12,e="";t-- >0;)e+=l6[Math.random()*62|0];return e}function fo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bm(t){return t.classList?fo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function hA(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u6(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(hA(t[n]),'" ')},"").trim()}function ch(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Tm(t){return t.size!==Bn.size||t.x!==Bn.x||t.y!==Bn.y||t.rotate!==Bn.rotate||t.flipX||t.flipY}function h6(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function f6(t){var e=t.transform,n=t.width,r=n===void 0?_d:n,i=t.height,s=i===void 0?_d:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&iA?c+="translate(".concat(e.x/Dr-r/2,"em, ").concat(e.y/Dr-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Dr,"em), calc(-50% + ").concat(e.y/Dr,"em)) "):c+="translate(".concat(e.x/Dr,"em, ").concat(e.y/Dr,"em) "),c+="scale(".concat(e.size/Dr*(e.flipX?-1:1),", ").concat(e.size/Dr*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var d6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
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
}`;function fA(){var t=sA,e=oA,n=te.cssPrefix,r=te.replacementClass,i=d6;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var dv=!1;function hf(){te.autoAddCss&&!dv&&(c6(fA()),dv=!0)}var p6={mixout:function(){return{dom:{css:fA,insertCss:hf}}},hooks:function(){return{beforeDOMElementCreation:function(){hf()},beforeI2svg:function(){hf()}}}},wr=ei||{};wr[Er]||(wr[Er]={});wr[Er].styles||(wr[Er].styles={});wr[Er].hooks||(wr[Er].hooks={});wr[Er].shims||(wr[Er].shims=[]);var An=wr[Er],dA=[],m6=function t(){qe.removeEventListener("DOMContentLoaded",t),Zl=1,dA.map(function(e){return e()})},Zl=!1;Sr&&(Zl=(qe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(qe.readyState),Zl||qe.addEventListener("DOMContentLoaded",m6));function g6(t){Sr&&(Zl?setTimeout(t,0):dA.push(t))}function ac(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?hA(t):"<".concat(e," ").concat(u6(r),">").concat(s.map(ac).join(""),"</").concat(e,">")}function pv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _6=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ff=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?_6(n,i):n,c,l,h;for(r===void 0?(c=1,h=e[s[0]]):(c=0,h=r);c<o;c++)l=s[c],h=a(h,e[l],l,e);return h};function y6(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function vd(t){var e=y6(t);return e.length===1?e[0].toString(16):null}function v6(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function mv(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ed(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=mv(e);typeof An.hooks.addPack=="function"&&!i?An.hooks.addPack(t,mv(e)):An.styles[t]=Y(Y({},An.styles[t]||{}),s),t==="fas"&&Ed("fa",e)}var Kc,Gc,Yc,vs=An.styles,E6=An.shims,w6=(Kc={},pt(Kc,He,Object.values(ka[He])),pt(Kc,et,Object.values(ka[et])),Kc),Am=null,pA={},mA={},gA={},_A={},yA={},b6=(Gc={},pt(Gc,He,Object.keys(Pa[He])),pt(Gc,et,Object.keys(Pa[et])),Gc);function T6(t){return~r6.indexOf(t)}function A6(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!T6(i)?i:null}var vA=function(){var e=function(s){return ff(vs,function(o,a,c){return o[c]=ff(a,s,{}),o},{})};pA=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),mA=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),yA=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in vs||te.autoFetchSvg,r=ff(E6,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});gA=r.names,_A=r.unicodes,Am=lh(te.styleDefault,{family:te.familyDefault})};a6(function(t){Am=lh(t.styleDefault,{family:te.familyDefault})});vA();function Im(t,e){return(pA[t]||{})[e]}function I6(t,e){return(mA[t]||{})[e]}function Ri(t,e){return(yA[t]||{})[e]}function EA(t){return gA[t]||{prefix:null,iconName:null}}function S6(t){var e=_A[t],n=Im("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ti(){return Am}var Sm=function(){return{prefix:null,iconName:null,rest:[]}};function lh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?He:n,i=Pa[r][t],s=Oa[r][t]||Oa[r][i],o=t in An.styles?t:null;return s||o||null}var gv=(Yc={},pt(Yc,He,Object.keys(ka[He])),pt(Yc,et,Object.keys(ka[et])),Yc);function uh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},pt(e,He,"".concat(te.cssPrefix,"-").concat(He)),pt(e,et,"".concat(te.cssPrefix,"-").concat(et)),e),o=null,a=He;(t.includes(s[He])||t.some(function(l){return gv[He].includes(l)}))&&(a=He),(t.includes(s[et])||t.some(function(l){return gv[et].includes(l)}))&&(a=et);var c=t.reduce(function(l,h){var f=A6(te.cssPrefix,h);if(vs[h]?(h=w6[a].includes(h)?X9[a][h]:h,o=h,l.prefix=h):b6[a].indexOf(h)>-1?(o=h,l.prefix=lh(h,{family:a})):f?l.iconName=f:h!==te.replacementClass&&h!==s[He]&&h!==s[et]&&l.rest.push(h),!i&&l.prefix&&l.iconName){var p=o==="fa"?EA(l.iconName):{},m=Ri(l.prefix,l.iconName);p.prefix&&(o=null),l.iconName=p.iconName||m||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!vs.far&&vs.fas&&!te.autoFetchSvg&&(l.prefix="fas")}return l},Sm());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===et&&(vs.fass||te.autoFetchSvg)&&(c.prefix="fass",c.iconName=Ri(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=ti()||"fas"),c}var C6=function(){function t(){$9(this,t),this.definitions={}}return U9(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=Y(Y({},n.definitions[a]||{}),o[a]),Ed(a,o[a]);var c=ka[He][a];c&&Ed(c,o[a]),vA()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon,h=l[2];n[a]||(n[a]={}),h.length>0&&h.forEach(function(f){typeof f=="string"&&(n[a][f]=l)}),n[a][c]=l}),n}}]),t}(),_v=[],Es={},Ns={},R6=Object.keys(Ns);function P6(t,e){var n=e.mixoutsTo;return _v=t,Es={},Object.keys(Ns).forEach(function(r){R6.indexOf(r)===-1&&delete Ns[r]}),_v.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Jl(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Es[o]||(Es[o]=[]),Es[o].push(s[o])})}r.provides&&r.provides(Ns)}),n}function wd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Es[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Wi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Es[t]||[];i.forEach(function(s){s.apply(null,n)})}function br(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ns[t]?Ns[t].apply(null,e):void 0}function bd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ti();if(e)return e=Ri(n,e)||e,pv(wA.definitions,n,e)||pv(An.styles,n,e)}var wA=new C6,O6=function(){te.autoReplaceSvg=!1,te.observeMutations=!1,Wi("noAuto")},k6={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Sr?(Wi("beforeI2svg",e),br("pseudoElements2svg",e),br("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;te.autoReplaceSvg===!1&&(te.autoReplaceSvg=!0),te.observeMutations=!0,g6(function(){x6({autoReplaceSvgRoot:n}),Wi("watch",e)})}},N6={icon:function(e){if(e===null)return null;if(Jl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ri(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=lh(e[0]);return{prefix:r,iconName:Ri(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(te.cssPrefix,"-"))>-1||e.match(J9))){var i=uh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ti(),iconName:Ri(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ti();return{prefix:s,iconName:Ri(s,e)||e}}}},fn={noAuto:O6,config:te,dom:k6,parse:N6,library:wA,findIconDefinition:bd,toHtml:ac},x6=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?qe:n;(Object.keys(An.styles).length>0||te.autoFetchSvg)&&Sr&&te.autoReplaceSvg&&fn.dom.i2svg({node:r})};function hh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ac(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Sr){var r=qe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function D6(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Tm(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=ch(Y(Y({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function L6(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(te.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Y(Y({},i),{},{id:o}),children:r}]}]}function Cm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,h=t.titleId,f=t.extra,p=t.watchable,m=p===void 0?!1:p,v=r.found?r:n,w=v.width,T=v.height,b=i==="fak",A=[te.replacementClass,s?"".concat(te.cssPrefix,"-").concat(s):""].filter(function(oe){return f.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(f.classes).join(" "),N={children:[],attributes:Y(Y({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:A,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(T)})},S=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/T*16*.0625,"em")}:{};m&&(N.attributes[qi]=""),c&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(h||xa())},children:[c]}),delete N.attributes.title);var j=Y(Y({},N),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:Y(Y({},S),f.styles)}),G=r.found&&n.found?br("generateAbstractMask",j)||{children:[],attributes:{}}:br("generateAbstractIcon",j)||{children:[],attributes:{}},re=G.children,ve=G.attributes;return j.children=re,j.attributes=ve,a?L6(j):D6(j)}function yv(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=Y(Y(Y({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[qi]="");var h=Y({},o.styles);Tm(i)&&(h.transform=f6({transform:i,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h.transform);var f=ch(h);f.length>0&&(l.style=f);var p=[];return p.push({tag:"span",attributes:l,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function M6(t){var e=t.content,n=t.title,r=t.extra,i=Y(Y(Y({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ch(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var df=An.styles;function Td(t){var e=t[0],n=t[1],r=t.slice(4),i=_m(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(te.cssPrefix,"-").concat(Ci.GROUP)},children:[{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(Ci.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(Ci.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var V6={found:!1,width:512,height:512};function F6(t,e){!aA&&!te.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ad(t,e){var n=e;return e==="fa"&&te.styleDefault!==null&&(e=ti()),new Promise(function(r,i){if(br("missingIconAbstract"),n==="fa"){var s=EA(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&df[e]&&df[e][t]){var o=df[e][t];return r(Td(o))}F6(t,e),r(Y(Y({},V6),{},{icon:te.showMissingIcons&&t?br("missingIconAbstract")||{}:{}}))})}var vv=function(){},Id=te.measurePerformance&&Bc&&Bc.mark&&Bc.measure?Bc:{mark:vv,measure:vv},Fo='FA "6.4.2"',$6=function(e){return Id.mark("".concat(Fo," ").concat(e," begins")),function(){return bA(e)}},bA=function(e){Id.mark("".concat(Fo," ").concat(e," ends")),Id.measure("".concat(Fo," ").concat(e),"".concat(Fo," ").concat(e," begins"),"".concat(Fo," ").concat(e," ends"))},Rm={begin:$6,end:bA},gl=function(){};function Ev(t){var e=t.getAttribute?t.getAttribute(qi):null;return typeof e=="string"}function U6(t){var e=t.getAttribute?t.getAttribute(vm):null,n=t.getAttribute?t.getAttribute(Em):null;return e&&n}function B6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(te.replacementClass)}function j6(){if(te.autoReplaceSvg===!0)return _l.replace;var t=_l[te.autoReplaceSvg];return t||_l.replace}function H6(t){return qe.createElementNS("http://www.w3.org/2000/svg",t)}function z6(t){return qe.createElement(t)}function TA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?H6:z6:n;if(typeof t=="string")return qe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(TA(o,{ceFn:r}))}),i}function q6(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var _l={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(TA(i),n)}),n.getAttribute(qi)===null&&te.keepOriginalSource){var r=qe.createComment(q6(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~bm(n).indexOf(te.replacementClass))return _l.replace(e);var i=new RegExp("".concat(te.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===te.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ac(a)}).join(`
`);n.setAttribute(qi,""),n.innerHTML=o}};function wv(t){t()}function AA(t,e){var n=typeof e=="function"?e:gl;if(t.length===0)n();else{var r=wv;te.mutateApproach===Y9&&(r=ei.requestAnimationFrame||wv),r(function(){var i=j6(),s=Rm.begin("mutate");t.map(i),s(),n()})}}var Pm=!1;function IA(){Pm=!0}function Sd(){Pm=!1}var eu=null;function bv(t){if(hv&&te.observeMutations){var e=t.treeCallback,n=e===void 0?gl:e,r=t.nodeCallback,i=r===void 0?gl:r,s=t.pseudoElementsCallback,o=s===void 0?gl:s,a=t.observeMutationsRoot,c=a===void 0?qe:a;eu=new hv(function(l){if(!Pm){var h=ti();fo(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ev(f.addedNodes[0])&&(te.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&te.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Ev(f.target)&&~n6.indexOf(f.attributeName))if(f.attributeName==="class"&&U6(f.target)){var p=uh(bm(f.target)),m=p.prefix,v=p.iconName;f.target.setAttribute(vm,m||h),v&&f.target.setAttribute(Em,v)}else B6(f.target)&&i(f.target)})}}),Sr&&eu.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function W6(){eu&&eu.disconnect()}function K6(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function G6(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=uh(bm(t));return i.prefix||(i.prefix=ti()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=I6(i.prefix,t.innerText)||Im(i.prefix,vd(t.innerText))),!i.iconName&&te.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Y6(t){var e=fo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return te.autoA11y&&(n?e["aria-labelledby"]="".concat(te.replacementClass,"-title-").concat(r||xa()):(e["aria-hidden"]="true",e.focusable="false")),e}function Q6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=G6(t),r=n.iconName,i=n.prefix,s=n.rest,o=Y6(t),a=wd("parseNodeAttributes",{},t),c=e.styleParser?K6(t):[];return Y({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var X6=An.styles;function SA(t){var e=te.autoReplaceSvg==="nest"?Tv(t,{styleParser:!1}):Tv(t);return~e.extra.classes.indexOf(cA)?br("generateLayersText",t,e):br("generateSvgReplacementMutation",t,e)}var ni=new Set;wm.map(function(t){ni.add("fa-".concat(t))});Object.keys(Pa[He]).map(ni.add.bind(ni));Object.keys(Pa[et]).map(ni.add.bind(ni));ni=sc(ni);function Av(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Sr)return Promise.resolve();var n=qe.documentElement.classList,r=function(f){return n.add("".concat(fv,"-").concat(f))},i=function(f){return n.remove("".concat(fv,"-").concat(f))},s=te.autoFetchSvg?ni:wm.map(function(h){return"fa-".concat(h)}).concat(Object.keys(X6));s.includes("fa")||s.push("fa");var o=[".".concat(cA,":not([").concat(qi,"])")].concat(s.map(function(h){return".".concat(h,":not([").concat(qi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=fo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Rm.begin("onTree"),l=a.reduce(function(h,f){try{var p=SA(f);p&&h.push(p)}catch(m){aA||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise(function(h,f){Promise.all(l).then(function(p){AA(p,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),h()})}).catch(function(p){c(),f(p)})})}function J6(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;SA(t).then(function(n){n&&AA([n],e)})}function Z6(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:bd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:bd(i||{})),t(r,Y(Y({},n),{},{mask:i}))}}var e3=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Bn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,h=l===void 0?null:l,f=n.title,p=f===void 0?null:f,m=n.titleId,v=m===void 0?null:m,w=n.classes,T=w===void 0?[]:w,b=n.attributes,A=b===void 0?{}:b,N=n.styles,S=N===void 0?{}:N;if(e){var j=e.prefix,G=e.iconName,re=e.icon;return hh(Y({type:"icon"},e),function(){return Wi("beforeDOMElementCreation",{iconDefinition:e,params:n}),te.autoA11y&&(p?A["aria-labelledby"]="".concat(te.replacementClass,"-title-").concat(v||xa()):(A["aria-hidden"]="true",A.focusable="false")),Cm({icons:{main:Td(re),mask:c?Td(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:j,iconName:G,transform:Y(Y({},Bn),i),symbol:o,title:p,maskId:h,titleId:v,extra:{attributes:A,styles:S,classes:T}})})}},t3={mixout:function(){return{icon:Z6(e3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Av,n.nodeCallback=J6,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?qe:r,s=n.callback,o=s===void 0?function(){}:s;return Av(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,h=r.mask,f=r.maskId,p=r.extra;return new Promise(function(m,v){Promise.all([Ad(i,a),h.iconName?Ad(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var T=_m(w,2),b=T[0],A=T[1];m([n,Cm({icons:{main:b,mask:A},prefix:a,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:o,extra:p,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=ch(a);c.length>0&&(i.style=c);var l;return Tm(o)&&(l=br("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},n3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return hh({type:"layer"},function(){Wi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(te.cssPrefix,"-layers")].concat(sc(s)).join(" ")},children:o}]})}}}},r3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,h=r.styles,f=h===void 0?{}:h;return hh({type:"counter",content:n},function(){return Wi("beforeDOMElementCreation",{content:n,params:r}),M6({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(te.cssPrefix,"-layers-counter")].concat(sc(a))}})})}}}},i3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Bn:i,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,h=r.attributes,f=h===void 0?{}:h,p=r.styles,m=p===void 0?{}:p;return hh({type:"text",content:n},function(){return Wi("beforeDOMElementCreation",{content:n,params:r}),yv({content:n,transform:Y(Y({},Bn),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(te.cssPrefix,"-layers-text")].concat(sc(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(iA){var l=parseInt(getComputedStyle(n).fontSize,10),h=n.getBoundingClientRect();a=h.width/l,c=h.height/l}return te.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,yv({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},s3=new RegExp('"',"ug"),Iv=[1105920,1112319];function o3(t){var e=t.replace(s3,""),n=v6(e,0),r=n>=Iv[0]&&n<=Iv[1],i=e.length===2?e[0]===e[1]:!1;return{value:vd(i?e[0]:e),isSecondary:r||i}}function Sv(t,e){var n="".concat(G9).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=fo(t.children),o=s.filter(function(re){return re.getAttribute(yd)===e})[0],a=ei.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(Z9),l=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&h!=="none"&&h!==""){var f=a.getPropertyValue("content"),p=~["Sharp"].indexOf(c[2])?et:He,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Oa[p][c[2].toLowerCase()]:e6[p][l],v=o3(f),w=v.value,T=v.isSecondary,b=c[0].startsWith("FontAwesome"),A=Im(m,w),N=A;if(b){var S=S6(w);S.iconName&&S.prefix&&(A=S.iconName,m=S.prefix)}if(A&&!T&&(!o||o.getAttribute(vm)!==m||o.getAttribute(Em)!==N)){t.setAttribute(n,N),o&&t.removeChild(o);var j=Q6(),G=j.extra;G.attributes[yd]=e,Ad(A,m).then(function(re){var ve=Cm(Y(Y({},j),{},{icons:{main:re,mask:Sm()},prefix:m,iconName:N,extra:G,watchable:!0})),oe=qe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(oe,t.firstChild):t.appendChild(oe),oe.outerHTML=ve.map(function(ce){return ac(ce)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function a3(t){return Promise.all([Sv(t,"::before"),Sv(t,"::after")])}function c3(t){return t.parentNode!==document.head&&!~Q9.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(yd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Cv(t){if(Sr)return new Promise(function(e,n){var r=fo(t.querySelectorAll("*")).filter(c3).map(a3),i=Rm.begin("searchPseudoElements");IA(),Promise.all(r).then(function(){i(),Sd(),e()}).catch(function(){i(),Sd(),n()})})}var l3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Cv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?qe:r;te.searchPseudoElements&&Cv(i)}}},Rv=!1,u3={mixout:function(){return{dom:{unwatch:function(){IA(),Rv=!0}}}},hooks:function(){return{bootstrap:function(){bv(wd("mutationObserverCallbacks",{}))},noAuto:function(){W6()},watch:function(n){var r=n.observeMutationsRoot;Rv?Sd():bv(wd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},h3={mixout:function(){return{parse:{transform:function(n){return Pv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Pv(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),h="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(h)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:p};return{tag:"g",attributes:Y({},m.outer),children:[{tag:"g",attributes:Y({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Y(Y({},r.icon.attributes),m.path)}]}]}}}},pf={x:0,y:0,width:"100%",height:"100%"};function Ov(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function f3(t){return t.tag==="g"?t.children:[t]}var d3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?uh(i.split(" ").map(function(o){return o.trim()})):Sm();return s.prefix||(s.prefix=ti()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,h=s.icon,f=o.width,p=o.icon,m=h6({transform:c,containerWidth:f,iconWidth:l}),v={tag:"rect",attributes:Y(Y({},pf),{},{fill:"white"})},w=h.children?{children:h.children.map(Ov)}:{},T={tag:"g",attributes:Y({},m.inner),children:[Ov(Y({tag:h.tag,attributes:Y(Y({},h.attributes),m.path)},w))]},b={tag:"g",attributes:Y({},m.outer),children:[T]},A="mask-".concat(a||xa()),N="clip-".concat(a||xa()),S={tag:"mask",attributes:Y(Y({},pf),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,b]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:f3(p)},S]};return r.push(j,{tag:"rect",attributes:Y({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(A,")")},pf)}),{children:r,attributes:i}}}},p3={provides:function(e){var n=!1;ei.matchMedia&&(n=ei.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Y(Y({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Y(Y({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:Y(Y({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:Y(Y({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Y(Y({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:Y(Y({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Y(Y({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:Y(Y({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Y(Y({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},m3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},g3=[p6,t3,n3,r3,i3,l3,u3,h3,d3,p3,m3];P6(g3,{mixoutsTo:fn});fn.noAuto;fn.config;var _3=fn.library;fn.dom;var Cd=fn.parse;fn.findIconDefinition;fn.toHtml;var y3=fn.icon;fn.layer;fn.text;fn.counter;function kv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function cr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kv(Object(n),!0).forEach(function(r){Xt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function tu(t){"@babel/helpers - typeof";return tu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tu(t)}function Xt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function E3(t,e){if(t==null)return{};var n=v3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var w3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},CA={exports:{}};(function(t){(function(e){var n=function(b,A,N){if(!l(A)||f(A)||p(A)||m(A)||c(A))return A;var S,j=0,G=0;if(h(A))for(S=[],G=A.length;j<G;j++)S.push(n(b,A[j],N));else{S={};for(var re in A)Object.prototype.hasOwnProperty.call(A,re)&&(S[b(re,N)]=n(b,A[re],N))}return S},r=function(b,A){A=A||{};var N=A.separator||"_",S=A.split||/(?=[A-Z])/;return b.split(S).join(N)},i=function(b){return v(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(A,N){return N?N.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var A=i(b);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(b,A){return r(b,A).toLowerCase()},a=Object.prototype.toString,c=function(b){return typeof b=="function"},l=function(b){return b===Object(b)},h=function(b){return a.call(b)=="[object Array]"},f=function(b){return a.call(b)=="[object Date]"},p=function(b){return a.call(b)=="[object RegExp]"},m=function(b){return a.call(b)=="[object Boolean]"},v=function(b){return b=b-0,b===b},w=function(b,A){var N=A&&"process"in A?A.process:A;return typeof N!="function"?b:function(S,j){return N(S,b,j)}},T={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(b,A){return n(w(i,A),b)},decamelizeKeys:function(b,A){return n(w(o,A),b,A)},pascalizeKeys:function(b,A){return n(w(s,A),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=T:e.humps=T})(w3)})(CA);var b3=CA.exports,T3=["class","style"];function A3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=b3.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function I3(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function RA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return RA(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,l){var h=t.attributes[l];switch(l){case"class":c.class=I3(h);break;case"style":c.style=A3(h);break;default:c.attrs[l]=h}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=E3(n,T3);return Gd(t.tag,cr(cr(cr({},e),{},{class:i.class,style:cr(cr({},i.style),o)},i.attrs),a),r)}var PA=!1;try{PA=!0}catch{}function S3(){if(!PA&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function mf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Xt({},t,e):{}}function C3(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Xt(e,"fa-".concat(t.size),t.size!==null),Xt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Xt(e,"fa-pull-".concat(t.pull),t.pull!==null),Xt(e,"fa-swap-opacity",t.swapOpacity),Xt(e,"fa-bounce",t.bounce),Xt(e,"fa-shake",t.shake),Xt(e,"fa-beat",t.beat),Xt(e,"fa-fade",t.fade),Xt(e,"fa-beat-fade",t.beatFade),Xt(e,"fa-flash",t.flash),Xt(e,"fa-spin-pulse",t.spinPulse),Xt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Nv(t){if(t&&tu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Cd.icon)return Cd.icon(t);if(t===null)return null;if(tu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var R3=Hd({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=bt(function(){return Nv(e.icon)}),s=bt(function(){return mf("classes",C3(e))}),o=bt(function(){return mf("transform",typeof e.transform=="string"?Cd.transform(e.transform):e.transform)}),a=bt(function(){return mf("mask",Nv(e.mask))}),c=bt(function(){return y3(i.value,cr(cr(cr(cr({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});$o(c,function(h){if(!h)return S3("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=bt(function(){return c.value?RA(c.value.abstract[0],{},r):null});return function(){return l.value}}}),P3={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},O3={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},k3={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},N3={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},x3={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var D3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function L3(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var M3={exports:{}},Gt="top",cn="bottom",ln="right",Yt="left",fh="auto",po=[Gt,cn,ln,Yt],Ki="start",Qs="end",OA="clippingParents",Om="viewport",gs="popper",kA="reference",Rd=po.reduce(function(t,e){return t.concat([e+"-"+Ki,e+"-"+Qs])},[]),km=[].concat(po,[fh]).reduce(function(t,e){return t.concat([e,e+"-"+Ki,e+"-"+Qs])},[]),NA="beforeRead",xA="read",DA="afterRead",LA="beforeMain",MA="main",VA="afterMain",FA="beforeWrite",$A="write",UA="afterWrite",BA=[NA,xA,DA,LA,MA,VA,FA,$A,UA];function Zn(t){return t?(t.nodeName||"").toLowerCase():null}function un(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Gi(t){var e=un(t).Element;return t instanceof e||t instanceof Element}function yn(t){var e=un(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Nm(t){if(typeof ShadowRoot>"u")return!1;var e=un(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function V3(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},s=e.elements[n];!yn(s)||!Zn(s)||(Object.assign(s.style,r),Object.keys(i).forEach(function(o){var a=i[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function F3(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],s=e.attributes[r]||{},o=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=o.reduce(function(c,l){return c[l]="",c},{});!yn(i)||!Zn(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(c){i.removeAttribute(c)}))})}}const xm={name:"applyStyles",enabled:!0,phase:"write",fn:V3,effect:F3,requires:["computeStyles"]};function Gn(t){return t.split("-")[0]}var Li=Math.max,nu=Math.min,Xs=Math.round;function Pd(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function jA(){return!/^((?!chrome|android).)*safari/i.test(Pd())}function Js(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,s=1;e&&yn(t)&&(i=t.offsetWidth>0&&Xs(r.width)/t.offsetWidth||1,s=t.offsetHeight>0&&Xs(r.height)/t.offsetHeight||1);var o=Gi(t)?un(t):window,a=o.visualViewport,c=!jA()&&n,l=(r.left+(c&&a?a.offsetLeft:0))/i,h=(r.top+(c&&a?a.offsetTop:0))/s,f=r.width/i,p=r.height/s;return{width:f,height:p,top:h,right:l+f,bottom:h+p,left:l,x:l,y:h}}function Dm(t){var e=Js(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function HA(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Nm(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Tr(t){return un(t).getComputedStyle(t)}function $3(t){return["table","td","th"].indexOf(Zn(t))>=0}function ai(t){return((Gi(t)?t.ownerDocument:t.document)||window.document).documentElement}function dh(t){return Zn(t)==="html"?t:t.assignedSlot||t.parentNode||(Nm(t)?t.host:null)||ai(t)}function xv(t){return!yn(t)||Tr(t).position==="fixed"?null:t.offsetParent}function U3(t){var e=/firefox/i.test(Pd()),n=/Trident/i.test(Pd());if(n&&yn(t)){var r=Tr(t);if(r.position==="fixed")return null}var i=dh(t);for(Nm(i)&&(i=i.host);yn(i)&&["html","body"].indexOf(Zn(i))<0;){var s=Tr(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function cc(t){for(var e=un(t),n=xv(t);n&&$3(n)&&Tr(n).position==="static";)n=xv(n);return n&&(Zn(n)==="html"||Zn(n)==="body"&&Tr(n).position==="static")?e:n||U3(t)||e}function Lm(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ta(t,e,n){return Li(t,nu(e,n))}function B3(t,e,n){var r=ta(t,e,n);return r>n?n:r}function zA(){return{top:0,right:0,bottom:0,left:0}}function qA(t){return Object.assign({},zA(),t)}function WA(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var j3=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,qA(typeof e!="number"?e:WA(e,po))};function H3(t){var e,n=t.state,r=t.name,i=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=Gn(n.placement),c=Lm(a),l=[Yt,ln].indexOf(a)>=0,h=l?"height":"width";if(!(!s||!o)){var f=j3(i.padding,n),p=Dm(s),m=c==="y"?Gt:Yt,v=c==="y"?cn:ln,w=n.rects.reference[h]+n.rects.reference[c]-o[c]-n.rects.popper[h],T=o[c]-n.rects.reference[c],b=cc(s),A=b?c==="y"?b.clientHeight||0:b.clientWidth||0:0,N=w/2-T/2,S=f[m],j=A-p[h]-f[v],G=A/2-p[h]/2+N,re=ta(S,G,j),ve=c;n.modifiersData[r]=(e={},e[ve]=re,e.centerOffset=re-G,e)}}function z3(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||HA(e.elements.popper,i)&&(e.elements.arrow=i))}const KA={name:"arrow",enabled:!0,phase:"main",fn:H3,effect:z3,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Zs(t){return t.split("-")[1]}var q3={top:"auto",right:"auto",bottom:"auto",left:"auto"};function W3(t,e){var n=t.x,r=t.y,i=e.devicePixelRatio||1;return{x:Xs(n*i)/i||0,y:Xs(r*i)/i||0}}function Dv(t){var e,n=t.popper,r=t.popperRect,i=t.placement,s=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,h=t.roundOffsets,f=t.isFixed,p=o.x,m=p===void 0?0:p,v=o.y,w=v===void 0?0:v,T=typeof h=="function"?h({x:m,y:w}):{x:m,y:w};m=T.x,w=T.y;var b=o.hasOwnProperty("x"),A=o.hasOwnProperty("y"),N=Yt,S=Gt,j=window;if(l){var G=cc(n),re="clientHeight",ve="clientWidth";if(G===un(n)&&(G=ai(n),Tr(G).position!=="static"&&a==="absolute"&&(re="scrollHeight",ve="scrollWidth")),G=G,i===Gt||(i===Yt||i===ln)&&s===Qs){S=cn;var oe=f&&G===j&&j.visualViewport?j.visualViewport.height:G[re];w-=oe-r.height,w*=c?1:-1}if(i===Yt||(i===Gt||i===cn)&&s===Qs){N=ln;var ce=f&&G===j&&j.visualViewport?j.visualViewport.width:G[ve];m-=ce-r.width,m*=c?1:-1}}var Ee=Object.assign({position:a},l&&q3),Ze=h===!0?W3({x:m,y:w},un(n)):{x:m,y:w};if(m=Ze.x,w=Ze.y,c){var De;return Object.assign({},Ee,(De={},De[S]=A?"0":"",De[N]=b?"0":"",De.transform=(j.devicePixelRatio||1)<=1?"translate("+m+"px, "+w+"px)":"translate3d("+m+"px, "+w+"px, 0)",De))}return Object.assign({},Ee,(e={},e[S]=A?w+"px":"",e[N]=b?m+"px":"",e.transform="",e))}function K3(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,s=n.adaptive,o=s===void 0?!0:s,a=n.roundOffsets,c=a===void 0?!0:a,l={placement:Gn(e.placement),variation:Zs(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Dv(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Dv(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Mm={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:K3,data:{}};var Qc={passive:!0};function G3(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=i===void 0?!0:i,o=r.resize,a=o===void 0?!0:o,c=un(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&l.forEach(function(h){h.addEventListener("scroll",n.update,Qc)}),a&&c.addEventListener("resize",n.update,Qc),function(){s&&l.forEach(function(h){h.removeEventListener("scroll",n.update,Qc)}),a&&c.removeEventListener("resize",n.update,Qc)}}const Vm={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:G3,data:{}};var Y3={left:"right",right:"left",bottom:"top",top:"bottom"};function yl(t){return t.replace(/left|right|bottom|top/g,function(e){return Y3[e]})}var Q3={start:"end",end:"start"};function Lv(t){return t.replace(/start|end/g,function(e){return Q3[e]})}function Fm(t){var e=un(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function $m(t){return Js(ai(t)).left+Fm(t).scrollLeft}function X3(t,e){var n=un(t),r=ai(t),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;var l=jA();(l||!l&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+$m(t),y:c}}function J3(t){var e,n=ai(t),r=Fm(t),i=(e=t.ownerDocument)==null?void 0:e.body,s=Li(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Li(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+$m(t),c=-r.scrollTop;return Tr(i||n).direction==="rtl"&&(a+=Li(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Um(t){var e=Tr(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function GA(t){return["html","body","#document"].indexOf(Zn(t))>=0?t.ownerDocument.body:yn(t)&&Um(t)?t:GA(dh(t))}function na(t,e){var n;e===void 0&&(e=[]);var r=GA(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=un(r),o=i?[s].concat(s.visualViewport||[],Um(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(na(dh(o)))}function Od(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Z3(t,e){var n=Js(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Mv(t,e,n){return e===Om?Od(X3(t,n)):Gi(e)?Z3(e,n):Od(J3(ai(t)))}function eB(t){var e=na(dh(t)),n=["absolute","fixed"].indexOf(Tr(t).position)>=0,r=n&&yn(t)?cc(t):t;return Gi(r)?e.filter(function(i){return Gi(i)&&HA(i,r)&&Zn(i)!=="body"}):[]}function tB(t,e,n,r){var i=e==="clippingParents"?eB(t):[].concat(e),s=[].concat(i,[n]),o=s[0],a=s.reduce(function(c,l){var h=Mv(t,l,r);return c.top=Li(h.top,c.top),c.right=nu(h.right,c.right),c.bottom=nu(h.bottom,c.bottom),c.left=Li(h.left,c.left),c},Mv(t,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function YA(t){var e=t.reference,n=t.element,r=t.placement,i=r?Gn(r):null,s=r?Zs(r):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,c;switch(i){case Gt:c={x:o,y:e.y-n.height};break;case cn:c={x:o,y:e.y+e.height};break;case ln:c={x:e.x+e.width,y:a};break;case Yt:c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}var l=i?Lm(i):null;if(l!=null){var h=l==="y"?"height":"width";switch(s){case Ki:c[l]=c[l]-(e[h]/2-n[h]/2);break;case Qs:c[l]=c[l]+(e[h]/2-n[h]/2);break}}return c}function eo(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,s=n.strategy,o=s===void 0?t.strategy:s,a=n.boundary,c=a===void 0?OA:a,l=n.rootBoundary,h=l===void 0?Om:l,f=n.elementContext,p=f===void 0?gs:f,m=n.altBoundary,v=m===void 0?!1:m,w=n.padding,T=w===void 0?0:w,b=qA(typeof T!="number"?T:WA(T,po)),A=p===gs?kA:gs,N=t.rects.popper,S=t.elements[v?A:p],j=tB(Gi(S)?S:S.contextElement||ai(t.elements.popper),c,h,o),G=Js(t.elements.reference),re=YA({reference:G,element:N,strategy:"absolute",placement:i}),ve=Od(Object.assign({},N,re)),oe=p===gs?ve:G,ce={top:j.top-oe.top+b.top,bottom:oe.bottom-j.bottom+b.bottom,left:j.left-oe.left+b.left,right:oe.right-j.right+b.right},Ee=t.modifiersData.offset;if(p===gs&&Ee){var Ze=Ee[i];Object.keys(ce).forEach(function(De){var jt=[ln,cn].indexOf(De)>=0?1:-1,Pt=[Gt,cn].indexOf(De)>=0?"y":"x";ce[De]+=Ze[Pt]*jt})}return ce}function nB(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?km:c,h=Zs(r),f=h?a?Rd:Rd.filter(function(v){return Zs(v)===h}):po,p=f.filter(function(v){return l.indexOf(v)>=0});p.length===0&&(p=f);var m=p.reduce(function(v,w){return v[w]=eo(t,{placement:w,boundary:i,rootBoundary:s,padding:o})[Gn(w)],v},{});return Object.keys(m).sort(function(v,w){return m[v]-m[w]})}function rB(t){if(Gn(t)===fh)return[];var e=yl(t);return[Lv(t),e,Lv(e)]}function iB(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,c=n.fallbackPlacements,l=n.padding,h=n.boundary,f=n.rootBoundary,p=n.altBoundary,m=n.flipVariations,v=m===void 0?!0:m,w=n.allowedAutoPlacements,T=e.options.placement,b=Gn(T),A=b===T,N=c||(A||!v?[yl(T)]:rB(T)),S=[T].concat(N).reduce(function(zt,Ot){return zt.concat(Gn(Ot)===fh?nB(e,{placement:Ot,boundary:h,rootBoundary:f,padding:l,flipVariations:v,allowedAutoPlacements:w}):Ot)},[]),j=e.rects.reference,G=e.rects.popper,re=new Map,ve=!0,oe=S[0],ce=0;ce<S.length;ce++){var Ee=S[ce],Ze=Gn(Ee),De=Zs(Ee)===Ki,jt=[Gt,cn].indexOf(Ze)>=0,Pt=jt?"width":"height",Se=eo(e,{placement:Ee,boundary:h,rootBoundary:f,altBoundary:p,padding:l}),me=jt?De?ln:Yt:De?cn:Gt;j[Pt]>G[Pt]&&(me=yl(me));var Te=yl(me),st=[];if(s&&st.push(Se[Ze]<=0),a&&st.push(Se[me]<=0,Se[Te]<=0),st.every(function(zt){return zt})){oe=Ee,ve=!1;break}re.set(Ee,st)}if(ve)for(var Ht=v?3:1,Et=function(Ot){var Be=S.find(function(O){var W=re.get(O);if(W)return W.slice(0,Ot).every(function(z){return z})});if(Be)return oe=Be,"break"},Ye=Ht;Ye>0;Ye--){var nn=Et(Ye);if(nn==="break")break}e.placement!==oe&&(e.modifiersData[r]._skip=!0,e.placement=oe,e.reset=!0)}}const QA={name:"flip",enabled:!0,phase:"main",fn:iB,requiresIfExists:["offset"],data:{_skip:!1}};function Vv(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Fv(t){return[Gt,ln,cn,Yt].some(function(e){return t[e]>=0})}function sB(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=eo(e,{elementContext:"reference"}),a=eo(e,{altBoundary:!0}),c=Vv(o,r),l=Vv(a,i,s),h=Fv(c),f=Fv(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:h,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":f})}const XA={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:sB};function oB(t,e,n){var r=Gn(t),i=[Yt,Gt].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[Yt,ln].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function aB(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=i===void 0?[0,0]:i,o=km.reduce(function(h,f){return h[f]=oB(f,e.rects,s),h},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=o}const JA={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:aB};function cB(t){var e=t.state,n=t.name;e.modifiersData[n]=YA({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Bm={name:"popperOffsets",enabled:!0,phase:"read",fn:cB,data:{}};function lB(t){return t==="x"?"y":"x"}function uB(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,s=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,c=n.boundary,l=n.rootBoundary,h=n.altBoundary,f=n.padding,p=n.tether,m=p===void 0?!0:p,v=n.tetherOffset,w=v===void 0?0:v,T=eo(e,{boundary:c,rootBoundary:l,padding:f,altBoundary:h}),b=Gn(e.placement),A=Zs(e.placement),N=!A,S=Lm(b),j=lB(S),G=e.modifiersData.popperOffsets,re=e.rects.reference,ve=e.rects.popper,oe=typeof w=="function"?w(Object.assign({},e.rects,{placement:e.placement})):w,ce=typeof oe=="number"?{mainAxis:oe,altAxis:oe}:Object.assign({mainAxis:0,altAxis:0},oe),Ee=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Ze={x:0,y:0};if(G){if(s){var De,jt=S==="y"?Gt:Yt,Pt=S==="y"?cn:ln,Se=S==="y"?"height":"width",me=G[S],Te=me+T[jt],st=me-T[Pt],Ht=m?-ve[Se]/2:0,Et=A===Ki?re[Se]:ve[Se],Ye=A===Ki?-ve[Se]:-re[Se],nn=e.elements.arrow,zt=m&&nn?Dm(nn):{width:0,height:0},Ot=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:zA(),Be=Ot[jt],O=Ot[Pt],W=ta(0,re[Se],zt[Se]),z=N?re[Se]/2-Ht-W-Be-ce.mainAxis:Et-W-Be-ce.mainAxis,Z=N?-re[Se]/2+Ht+W+O+ce.mainAxis:Ye+W+O+ce.mainAxis,R=e.elements.arrow&&cc(e.elements.arrow),g=R?S==="y"?R.clientTop||0:R.clientLeft||0:0,E=(De=Ee==null?void 0:Ee[S])!=null?De:0,I=me+z-E-g,P=me+Z-E,x=ta(m?nu(Te,I):Te,me,m?Li(st,P):st);G[S]=x,Ze[S]=x-me}if(a){var V,H=S==="x"?Gt:Yt,U=S==="x"?cn:ln,C=G[j],M=j==="y"?"height":"width",ne=C+T[H],X=C-T[U],ee=[Gt,Yt].indexOf(b)!==-1,ue=(V=Ee==null?void 0:Ee[j])!=null?V:0,ye=ee?ne:C-re[M]-ve[M]-ue+ce.altAxis,ke=ee?C+re[M]+ve[M]-ue-ce.altAxis:X,Pe=m&&ee?B3(ye,C,ke):ta(m?ye:ne,C,m?ke:X);G[j]=Pe,Ze[j]=Pe-C}e.modifiersData[r]=Ze}}const ZA={name:"preventOverflow",enabled:!0,phase:"main",fn:uB,requiresIfExists:["offset"]};function hB(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function fB(t){return t===un(t)||!yn(t)?Fm(t):hB(t)}function dB(t){var e=t.getBoundingClientRect(),n=Xs(e.width)/t.offsetWidth||1,r=Xs(e.height)/t.offsetHeight||1;return n!==1||r!==1}function pB(t,e,n){n===void 0&&(n=!1);var r=yn(e),i=yn(e)&&dB(e),s=ai(e),o=Js(t,i,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Zn(e)!=="body"||Um(s))&&(a=fB(e)),yn(e)?(c=Js(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=$m(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function mB(t){var e=new Map,n=new Set,r=[];t.forEach(function(s){e.set(s.name,s)});function i(s){n.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var c=e.get(a);c&&i(c)}}),r.push(s)}return t.forEach(function(s){n.has(s.name)||i(s)}),r}function gB(t){var e=mB(t);return BA.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function _B(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function yB(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var $v={placement:"bottom",modifiers:[],strategy:"absolute"};function Uv(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function ph(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,s=i===void 0?$v:i;return function(a,c,l){l===void 0&&(l=s);var h={placement:"bottom",orderedModifiers:[],options:Object.assign({},$v,s),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},f=[],p=!1,m={state:h,setOptions:function(b){var A=typeof b=="function"?b(h.options):b;w(),h.options=Object.assign({},s,h.options,A),h.scrollParents={reference:Gi(a)?na(a):a.contextElement?na(a.contextElement):[],popper:na(c)};var N=gB(yB([].concat(r,h.options.modifiers)));return h.orderedModifiers=N.filter(function(S){return S.enabled}),v(),m.update()},forceUpdate:function(){if(!p){var b=h.elements,A=b.reference,N=b.popper;if(Uv(A,N)){h.rects={reference:pB(A,cc(N),h.options.strategy==="fixed"),popper:Dm(N)},h.reset=!1,h.placement=h.options.placement,h.orderedModifiers.forEach(function(ce){return h.modifiersData[ce.name]=Object.assign({},ce.data)});for(var S=0;S<h.orderedModifiers.length;S++){if(h.reset===!0){h.reset=!1,S=-1;continue}var j=h.orderedModifiers[S],G=j.fn,re=j.options,ve=re===void 0?{}:re,oe=j.name;typeof G=="function"&&(h=G({state:h,options:ve,name:oe,instance:m})||h)}}}},update:_B(function(){return new Promise(function(T){m.forceUpdate(),T(h)})}),destroy:function(){w(),p=!0}};if(!Uv(a,c))return m;m.setOptions(l).then(function(T){!p&&l.onFirstUpdate&&l.onFirstUpdate(T)});function v(){h.orderedModifiers.forEach(function(T){var b=T.name,A=T.options,N=A===void 0?{}:A,S=T.effect;if(typeof S=="function"){var j=S({state:h,name:b,instance:m,options:N}),G=function(){};f.push(j||G)}})}function w(){f.forEach(function(T){return T()}),f=[]}return m}}var vB=ph(),EB=[Vm,Bm,Mm,xm],wB=ph({defaultModifiers:EB}),bB=[Vm,Bm,Mm,xm,JA,QA,ZA,KA,XA],TB=ph({defaultModifiers:bB});const AB=Object.freeze(Object.defineProperty({__proto__:null,afterMain:VA,afterRead:DA,afterWrite:UA,applyStyles:xm,arrow:KA,auto:fh,basePlacements:po,beforeMain:LA,beforeRead:NA,beforeWrite:FA,bottom:cn,clippingParents:OA,computeStyles:Mm,createPopper:TB,createPopperBase:vB,createPopperLite:wB,detectOverflow:eo,end:Qs,eventListeners:Vm,flip:QA,hide:XA,left:Yt,main:MA,modifierPhases:BA,offset:JA,placements:km,popper:gs,popperGenerator:ph,popperOffsets:Bm,preventOverflow:ZA,read:xA,reference:kA,right:ln,start:Ki,top:Gt,variationPlacements:Rd,viewport:Om,write:$A},Symbol.toStringTag,{value:"Module"})),IB=L3(AB);/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(n,r){t.exports=r(IB)})(D3,function(n){function r(_){const u=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(_){for(const d in _)if(d!=="default"){const y=Object.getOwnPropertyDescriptor(_,d);Object.defineProperty(u,d,y.get?y:{enumerable:!0,get:()=>_[d]})}}return u.default=_,Object.freeze(u)}const i=r(n),s=new Map,o={set(_,u,d){s.has(_)||s.set(_,new Map);const y=s.get(_);if(!y.has(u)&&y.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(y.keys())[0]}.`);return}y.set(u,d)},get(_,u){return s.has(_)&&s.get(_).get(u)||null},remove(_,u){if(!s.has(_))return;const d=s.get(_);d.delete(u),d.size===0&&s.delete(_)}},a=1e6,c=1e3,l="transitionend",h=_=>(_&&window.CSS&&window.CSS.escape&&(_=_.replace(/#([^\s"#']+)/g,(u,d)=>`#${CSS.escape(d)}`)),_),f=_=>_==null?`${_}`:Object.prototype.toString.call(_).match(/\s([a-z]+)/i)[1].toLowerCase(),p=_=>{do _+=Math.floor(Math.random()*a);while(document.getElementById(_));return _},m=_=>{if(!_)return 0;let{transitionDuration:u,transitionDelay:d}=window.getComputedStyle(_);const y=Number.parseFloat(u),k=Number.parseFloat(d);return!y&&!k?0:(u=u.split(",")[0],d=d.split(",")[0],(Number.parseFloat(u)+Number.parseFloat(d))*c)},v=_=>{_.dispatchEvent(new Event(l))},w=_=>!_||typeof _!="object"?!1:(typeof _.jquery<"u"&&(_=_[0]),typeof _.nodeType<"u"),T=_=>w(_)?_.jquery?_[0]:_:typeof _=="string"&&_.length>0?document.querySelector(h(_)):null,b=_=>{if(!w(_)||_.getClientRects().length===0)return!1;const u=getComputedStyle(_).getPropertyValue("visibility")==="visible",d=_.closest("details:not([open])");if(!d)return u;if(d!==_){const y=_.closest("summary");if(y&&y.parentNode!==d||y===null)return!1}return u},A=_=>!_||_.nodeType!==Node.ELEMENT_NODE||_.classList.contains("disabled")?!0:typeof _.disabled<"u"?_.disabled:_.hasAttribute("disabled")&&_.getAttribute("disabled")!=="false",N=_=>{if(!document.documentElement.attachShadow)return null;if(typeof _.getRootNode=="function"){const u=_.getRootNode();return u instanceof ShadowRoot?u:null}return _ instanceof ShadowRoot?_:_.parentNode?N(_.parentNode):null},S=()=>{},j=_=>{_.offsetHeight},G=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,re=[],ve=_=>{document.readyState==="loading"?(re.length||document.addEventListener("DOMContentLoaded",()=>{for(const u of re)u()}),re.push(_)):_()},oe=()=>document.documentElement.dir==="rtl",ce=_=>{ve(()=>{const u=G();if(u){const d=_.NAME,y=u.fn[d];u.fn[d]=_.jQueryInterface,u.fn[d].Constructor=_,u.fn[d].noConflict=()=>(u.fn[d]=y,_.jQueryInterface)}})},Ee=(_,u=[],d=_)=>typeof _=="function"?_(...u):d,Ze=(_,u,d=!0)=>{if(!d){Ee(_);return}const y=5,k=m(u)+y;let q=!1;const B=({target:be})=>{be===u&&(q=!0,u.removeEventListener(l,B),Ee(_))};u.addEventListener(l,B),setTimeout(()=>{q||v(u)},k)},De=(_,u,d,y)=>{const k=_.length;let q=_.indexOf(u);return q===-1?!d&&y?_[k-1]:_[0]:(q+=d?1:-1,y&&(q=(q+k)%k),_[Math.max(0,Math.min(q,k-1))])},jt=/[^.]*(?=\..*)\.|.*/,Pt=/\..*/,Se=/::\d+$/,me={};let Te=1;const st={mouseenter:"mouseover",mouseleave:"mouseout"},Ht=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Et(_,u){return u&&`${u}::${Te++}`||_.uidEvent||Te++}function Ye(_){const u=Et(_);return _.uidEvent=u,me[u]=me[u]||{},me[u]}function nn(_,u){return function d(y){return g(y,{delegateTarget:_}),d.oneOff&&R.off(_,y.type,u),u.apply(_,[y])}}function zt(_,u,d){return function y(k){const q=_.querySelectorAll(u);for(let{target:B}=k;B&&B!==this;B=B.parentNode)for(const be of q)if(be===B)return g(k,{delegateTarget:B}),y.oneOff&&R.off(_,k.type,u,d),d.apply(B,[k])}}function Ot(_,u,d=null){return Object.values(_).find(y=>y.callable===u&&y.delegationSelector===d)}function Be(_,u,d){const y=typeof u=="string",k=y?d:u||d;let q=Z(_);return Ht.has(q)||(q=_),[y,k,q]}function O(_,u,d,y,k){if(typeof u!="string"||!_)return;let[q,B,be]=Be(u,d,y);u in st&&(B=(OC=>function(ls){if(!ls.relatedTarget||ls.relatedTarget!==ls.delegateTarget&&!ls.delegateTarget.contains(ls.relatedTarget))return OC.call(this,ls)})(B));const Qt=Ye(_),mn=Qt[be]||(Qt[be]={}),mt=Ot(mn,B,q?d:null);if(mt){mt.oneOff=mt.oneOff&&k;return}const kn=Et(B,u.replace(jt,"")),En=q?zt(_,d,B):nn(_,B);En.delegationSelector=q?d:null,En.callable=B,En.oneOff=k,En.uidEvent=kn,mn[kn]=En,_.addEventListener(be,En,q)}function W(_,u,d,y,k){const q=Ot(u[d],y,k);q&&(_.removeEventListener(d,q,!!k),delete u[d][q.uidEvent])}function z(_,u,d,y){const k=u[d]||{};for(const[q,B]of Object.entries(k))q.includes(y)&&W(_,u,d,B.callable,B.delegationSelector)}function Z(_){return _=_.replace(Pt,""),st[_]||_}const R={on(_,u,d,y){O(_,u,d,y,!1)},one(_,u,d,y){O(_,u,d,y,!0)},off(_,u,d,y){if(typeof u!="string"||!_)return;const[k,q,B]=Be(u,d,y),be=B!==u,Qt=Ye(_),mn=Qt[B]||{},mt=u.startsWith(".");if(typeof q<"u"){if(!Object.keys(mn).length)return;W(_,Qt,B,q,k?d:null);return}if(mt)for(const kn of Object.keys(Qt))z(_,Qt,kn,u.slice(1));for(const[kn,En]of Object.entries(mn)){const bc=kn.replace(Se,"");(!be||u.includes(bc))&&W(_,Qt,B,En.callable,En.delegationSelector)}},trigger(_,u,d){if(typeof u!="string"||!_)return null;const y=G(),k=Z(u),q=u!==k;let B=null,be=!0,Qt=!0,mn=!1;q&&y&&(B=y.Event(u,d),y(_).trigger(B),be=!B.isPropagationStopped(),Qt=!B.isImmediatePropagationStopped(),mn=B.isDefaultPrevented());const mt=g(new Event(u,{bubbles:be,cancelable:!0}),d);return mn&&mt.preventDefault(),Qt&&_.dispatchEvent(mt),mt.defaultPrevented&&B&&B.preventDefault(),mt}};function g(_,u={}){for(const[d,y]of Object.entries(u))try{_[d]=y}catch{Object.defineProperty(_,d,{configurable:!0,get(){return y}})}return _}function E(_){if(_==="true")return!0;if(_==="false")return!1;if(_===Number(_).toString())return Number(_);if(_===""||_==="null")return null;if(typeof _!="string")return _;try{return JSON.parse(decodeURIComponent(_))}catch{return _}}function I(_){return _.replace(/[A-Z]/g,u=>`-${u.toLowerCase()}`)}const P={setDataAttribute(_,u,d){_.setAttribute(`data-bs-${I(u)}`,d)},removeDataAttribute(_,u){_.removeAttribute(`data-bs-${I(u)}`)},getDataAttributes(_){if(!_)return{};const u={},d=Object.keys(_.dataset).filter(y=>y.startsWith("bs")&&!y.startsWith("bsConfig"));for(const y of d){let k=y.replace(/^bs/,"");k=k.charAt(0).toLowerCase()+k.slice(1,k.length),u[k]=E(_.dataset[y])}return u},getDataAttribute(_,u){return E(_.getAttribute(`data-bs-${I(u)}`))}};class x{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(u){return u=this._mergeConfigObj(u),u=this._configAfterMerge(u),this._typeCheckConfig(u),u}_configAfterMerge(u){return u}_mergeConfigObj(u,d){const y=w(d)?P.getDataAttribute(d,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...w(d)?P.getDataAttributes(d):{},...typeof u=="object"?u:{}}}_typeCheckConfig(u,d=this.constructor.DefaultType){for(const[y,k]of Object.entries(d)){const q=u[y],B=w(q)?"element":f(q);if(!new RegExp(k).test(B))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${B}" but expected type "${k}".`)}}}const V="5.3.2";class H extends x{constructor(u,d){super(),u=T(u),u&&(this._element=u,this._config=this._getConfig(d),o.set(this._element,this.constructor.DATA_KEY,this))}dispose(){o.remove(this._element,this.constructor.DATA_KEY),R.off(this._element,this.constructor.EVENT_KEY);for(const u of Object.getOwnPropertyNames(this))this[u]=null}_queueCallback(u,d,y=!0){Ze(u,d,y)}_getConfig(u){return u=this._mergeConfigObj(u,this._element),u=this._configAfterMerge(u),this._typeCheckConfig(u),u}static getInstance(u){return o.get(T(u),this.DATA_KEY)}static getOrCreateInstance(u,d={}){return this.getInstance(u)||new this(u,typeof d=="object"?d:null)}static get VERSION(){return V}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(u){return`${u}${this.EVENT_KEY}`}}const U=_=>{let u=_.getAttribute("data-bs-target");if(!u||u==="#"){let d=_.getAttribute("href");if(!d||!d.includes("#")&&!d.startsWith("."))return null;d.includes("#")&&!d.startsWith("#")&&(d=`#${d.split("#")[1]}`),u=d&&d!=="#"?h(d.trim()):null}return u},C={find(_,u=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(u,_))},findOne(_,u=document.documentElement){return Element.prototype.querySelector.call(u,_)},children(_,u){return[].concat(..._.children).filter(d=>d.matches(u))},parents(_,u){const d=[];let y=_.parentNode.closest(u);for(;y;)d.push(y),y=y.parentNode.closest(u);return d},prev(_,u){let d=_.previousElementSibling;for(;d;){if(d.matches(u))return[d];d=d.previousElementSibling}return[]},next(_,u){let d=_.nextElementSibling;for(;d;){if(d.matches(u))return[d];d=d.nextElementSibling}return[]},focusableChildren(_){const u=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(d=>`${d}:not([tabindex^="-"])`).join(",");return this.find(u,_).filter(d=>!A(d)&&b(d))},getSelectorFromElement(_){const u=U(_);return u&&C.findOne(u)?u:null},getElementFromSelector(_){const u=U(_);return u?C.findOne(u):null},getMultipleElementsFromSelector(_){const u=U(_);return u?C.find(u):[]}},M=(_,u="hide")=>{const d=`click.dismiss${_.EVENT_KEY}`,y=_.NAME;R.on(document,d,`[data-bs-dismiss="${y}"]`,function(k){if(["A","AREA"].includes(this.tagName)&&k.preventDefault(),A(this))return;const q=C.getElementFromSelector(this)||this.closest(`.${y}`);_.getOrCreateInstance(q)[u]()})},ne="alert",ee=".bs.alert",ue=`close${ee}`,ye=`closed${ee}`,ke="fade",Pe="show";class $e extends H{static get NAME(){return ne}close(){if(R.trigger(this._element,ue).defaultPrevented)return;this._element.classList.remove(Pe);const d=this._element.classList.contains(ke);this._queueCallback(()=>this._destroyElement(),this._element,d)}_destroyElement(){this._element.remove(),R.trigger(this._element,ye),this.dispose()}static jQueryInterface(u){return this.each(function(){const d=$e.getOrCreateInstance(this);if(typeof u=="string"){if(d[u]===void 0||u.startsWith("_")||u==="constructor")throw new TypeError(`No method named "${u}"`);d[u](this)}})}}M($e,"close"),ce($e);const rn="button",lc=".bs.button",li=".data-api",uc="active",kt='[data-bs-toggle="button"]',dn=`click${lc}${li}`;class Cr extends H{static get NAME(){return rn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(uc))}static jQueryInterface(u){return this.each(function(){const d=Cr.getOrCreateInstance(this);u==="toggle"&&d[u]()})}}R.on(document,dn,kt,_=>{_.preventDefault();const u=_.target.closest(kt);Cr.getOrCreateInstance(u).toggle()}),ce(Cr);const eI="swipe",ts=".bs.swipe",tI=`touchstart${ts}`,nI=`touchmove${ts}`,rI=`touchend${ts}`,iI=`pointerdown${ts}`,sI=`pointerup${ts}`,oI="touch",aI="pen",cI="pointer-event",lI=40,uI={endCallback:null,leftCallback:null,rightCallback:null},hI={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class hc extends x{constructor(u,d){super(),this._element=u,!(!u||!hc.isSupported())&&(this._config=this._getConfig(d),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return uI}static get DefaultType(){return hI}static get NAME(){return eI}dispose(){R.off(this._element,ts)}_start(u){if(!this._supportPointerEvents){this._deltaX=u.touches[0].clientX;return}this._eventIsPointerPenTouch(u)&&(this._deltaX=u.clientX)}_end(u){this._eventIsPointerPenTouch(u)&&(this._deltaX=u.clientX-this._deltaX),this._handleSwipe(),Ee(this._config.endCallback)}_move(u){this._deltaX=u.touches&&u.touches.length>1?0:u.touches[0].clientX-this._deltaX}_handleSwipe(){const u=Math.abs(this._deltaX);if(u<=lI)return;const d=u/this._deltaX;this._deltaX=0,d&&Ee(d>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(R.on(this._element,iI,u=>this._start(u)),R.on(this._element,sI,u=>this._end(u)),this._element.classList.add(cI)):(R.on(this._element,tI,u=>this._start(u)),R.on(this._element,nI,u=>this._move(u)),R.on(this._element,rI,u=>this._end(u)))}_eventIsPointerPenTouch(u){return this._supportPointerEvents&&(u.pointerType===aI||u.pointerType===oI)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const fI="carousel",Rr=".bs.carousel",jm=".data-api",dI="ArrowLeft",pI="ArrowRight",mI=500,mo="next",ns="prev",rs="left",fc="right",gI=`slide${Rr}`,mh=`slid${Rr}`,_I=`keydown${Rr}`,yI=`mouseenter${Rr}`,vI=`mouseleave${Rr}`,EI=`dragstart${Rr}`,wI=`load${Rr}${jm}`,bI=`click${Rr}${jm}`,Hm="carousel",dc="active",TI="slide",AI="carousel-item-end",II="carousel-item-start",SI="carousel-item-next",CI="carousel-item-prev",zm=".active",qm=".carousel-item",RI=zm+qm,PI=".carousel-item img",OI=".carousel-indicators",kI="[data-bs-slide], [data-bs-slide-to]",NI='[data-bs-ride="carousel"]',xI={[dI]:fc,[pI]:rs},DI={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},LI={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class is extends H{constructor(u,d){super(u,d),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=C.findOne(OI,this._element),this._addEventListeners(),this._config.ride===Hm&&this.cycle()}static get Default(){return DI}static get DefaultType(){return LI}static get NAME(){return fI}next(){this._slide(mo)}nextWhenVisible(){!document.hidden&&b(this._element)&&this.next()}prev(){this._slide(ns)}pause(){this._isSliding&&v(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){R.one(this._element,mh,()=>this.cycle());return}this.cycle()}}to(u){const d=this._getItems();if(u>d.length-1||u<0)return;if(this._isSliding){R.one(this._element,mh,()=>this.to(u));return}const y=this._getItemIndex(this._getActive());if(y===u)return;const k=u>y?mo:ns;this._slide(k,d[u])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(u){return u.defaultInterval=u.interval,u}_addEventListeners(){this._config.keyboard&&R.on(this._element,_I,u=>this._keydown(u)),this._config.pause==="hover"&&(R.on(this._element,yI,()=>this.pause()),R.on(this._element,vI,()=>this._maybeEnableCycle())),this._config.touch&&hc.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const y of C.find(PI,this._element))R.on(y,EI,k=>k.preventDefault());const d={leftCallback:()=>this._slide(this._directionToOrder(rs)),rightCallback:()=>this._slide(this._directionToOrder(fc)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),mI+this._config.interval))}};this._swipeHelper=new hc(this._element,d)}_keydown(u){if(/input|textarea/i.test(u.target.tagName))return;const d=xI[u.key];d&&(u.preventDefault(),this._slide(this._directionToOrder(d)))}_getItemIndex(u){return this._getItems().indexOf(u)}_setActiveIndicatorElement(u){if(!this._indicatorsElement)return;const d=C.findOne(zm,this._indicatorsElement);d.classList.remove(dc),d.removeAttribute("aria-current");const y=C.findOne(`[data-bs-slide-to="${u}"]`,this._indicatorsElement);y&&(y.classList.add(dc),y.setAttribute("aria-current","true"))}_updateInterval(){const u=this._activeElement||this._getActive();if(!u)return;const d=Number.parseInt(u.getAttribute("data-bs-interval"),10);this._config.interval=d||this._config.defaultInterval}_slide(u,d=null){if(this._isSliding)return;const y=this._getActive(),k=u===mo,q=d||De(this._getItems(),y,k,this._config.wrap);if(q===y)return;const B=this._getItemIndex(q),be=bc=>R.trigger(this._element,bc,{relatedTarget:q,direction:this._orderToDirection(u),from:this._getItemIndex(y),to:B});if(be(gI).defaultPrevented||!y||!q)return;const mn=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(B),this._activeElement=q;const mt=k?II:AI,kn=k?SI:CI;q.classList.add(kn),j(q),y.classList.add(mt),q.classList.add(mt);const En=()=>{q.classList.remove(mt,kn),q.classList.add(dc),y.classList.remove(dc,kn,mt),this._isSliding=!1,be(mh)};this._queueCallback(En,y,this._isAnimated()),mn&&this.cycle()}_isAnimated(){return this._element.classList.contains(TI)}_getActive(){return C.findOne(RI,this._element)}_getItems(){return C.find(qm,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(u){return oe()?u===rs?ns:mo:u===rs?mo:ns}_orderToDirection(u){return oe()?u===ns?rs:fc:u===ns?fc:rs}static jQueryInterface(u){return this.each(function(){const d=is.getOrCreateInstance(this,u);if(typeof u=="number"){d.to(u);return}if(typeof u=="string"){if(d[u]===void 0||u.startsWith("_")||u==="constructor")throw new TypeError(`No method named "${u}"`);d[u]()}})}}R.on(document,bI,kI,function(_){const u=C.getElementFromSelector(this);if(!u||!u.classList.contains(Hm))return;_.preventDefault();const d=is.getOrCreateInstance(u),y=this.getAttribute("data-bs-slide-to");if(y){d.to(y),d._maybeEnableCycle();return}if(P.getDataAttribute(this,"slide")==="next"){d.next(),d._maybeEnableCycle();return}d.prev(),d._maybeEnableCycle()}),R.on(window,wI,()=>{const _=C.find(NI);for(const u of _)is.getOrCreateInstance(u)}),ce(is);const MI="collapse",go=".bs.collapse",VI=".data-api",FI=`show${go}`,$I=`shown${go}`,UI=`hide${go}`,BI=`hidden${go}`,jI=`click${go}${VI}`,gh="show",ss="collapse",pc="collapsing",HI="collapsed",zI=`:scope .${ss} .${ss}`,qI="collapse-horizontal",WI="width",KI="height",GI=".collapse.show, .collapse.collapsing",_h='[data-bs-toggle="collapse"]',YI={parent:null,toggle:!0},QI={parent:"(null|element)",toggle:"boolean"};class os extends H{constructor(u,d){super(u,d),this._isTransitioning=!1,this._triggerArray=[];const y=C.find(_h);for(const k of y){const q=C.getSelectorFromElement(k),B=C.find(q).filter(be=>be===this._element);q!==null&&B.length&&this._triggerArray.push(k)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return YI}static get DefaultType(){return QI}static get NAME(){return MI}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let u=[];if(this._config.parent&&(u=this._getFirstLevelChildren(GI).filter(be=>be!==this._element).map(be=>os.getOrCreateInstance(be,{toggle:!1}))),u.length&&u[0]._isTransitioning||R.trigger(this._element,FI).defaultPrevented)return;for(const be of u)be.hide();const y=this._getDimension();this._element.classList.remove(ss),this._element.classList.add(pc),this._element.style[y]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const k=()=>{this._isTransitioning=!1,this._element.classList.remove(pc),this._element.classList.add(ss,gh),this._element.style[y]="",R.trigger(this._element,$I)},B=`scroll${y[0].toUpperCase()+y.slice(1)}`;this._queueCallback(k,this._element,!0),this._element.style[y]=`${this._element[B]}px`}hide(){if(this._isTransitioning||!this._isShown()||R.trigger(this._element,UI).defaultPrevented)return;const d=this._getDimension();this._element.style[d]=`${this._element.getBoundingClientRect()[d]}px`,j(this._element),this._element.classList.add(pc),this._element.classList.remove(ss,gh);for(const k of this._triggerArray){const q=C.getElementFromSelector(k);q&&!this._isShown(q)&&this._addAriaAndCollapsedClass([k],!1)}this._isTransitioning=!0;const y=()=>{this._isTransitioning=!1,this._element.classList.remove(pc),this._element.classList.add(ss),R.trigger(this._element,BI)};this._element.style[d]="",this._queueCallback(y,this._element,!0)}_isShown(u=this._element){return u.classList.contains(gh)}_configAfterMerge(u){return u.toggle=!!u.toggle,u.parent=T(u.parent),u}_getDimension(){return this._element.classList.contains(qI)?WI:KI}_initializeChildren(){if(!this._config.parent)return;const u=this._getFirstLevelChildren(_h);for(const d of u){const y=C.getElementFromSelector(d);y&&this._addAriaAndCollapsedClass([d],this._isShown(y))}}_getFirstLevelChildren(u){const d=C.find(zI,this._config.parent);return C.find(u,this._config.parent).filter(y=>!d.includes(y))}_addAriaAndCollapsedClass(u,d){if(u.length)for(const y of u)y.classList.toggle(HI,!d),y.setAttribute("aria-expanded",d)}static jQueryInterface(u){const d={};return typeof u=="string"&&/show|hide/.test(u)&&(d.toggle=!1),this.each(function(){const y=os.getOrCreateInstance(this,d);if(typeof u=="string"){if(typeof y[u]>"u")throw new TypeError(`No method named "${u}"`);y[u]()}})}}R.on(document,jI,_h,function(_){(_.target.tagName==="A"||_.delegateTarget&&_.delegateTarget.tagName==="A")&&_.preventDefault();for(const u of C.getMultipleElementsFromSelector(this))os.getOrCreateInstance(u,{toggle:!1}).toggle()}),ce(os);const Wm="dropdown",ui=".bs.dropdown",yh=".data-api",XI="Escape",Km="Tab",JI="ArrowUp",Gm="ArrowDown",ZI=2,e1=`hide${ui}`,t1=`hidden${ui}`,n1=`show${ui}`,r1=`shown${ui}`,Ym=`click${ui}${yh}`,Qm=`keydown${ui}${yh}`,i1=`keyup${ui}${yh}`,as="show",s1="dropup",o1="dropend",a1="dropstart",c1="dropup-center",l1="dropdown-center",hi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',u1=`${hi}.${as}`,mc=".dropdown-menu",h1=".navbar",f1=".navbar-nav",d1=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",p1=oe()?"top-end":"top-start",m1=oe()?"top-start":"top-end",g1=oe()?"bottom-end":"bottom-start",_1=oe()?"bottom-start":"bottom-end",y1=oe()?"left-start":"right-start",v1=oe()?"right-start":"left-start",E1="top",w1="bottom",b1={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},T1={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class vn extends H{constructor(u,d){super(u,d),this._popper=null,this._parent=this._element.parentNode,this._menu=C.next(this._element,mc)[0]||C.prev(this._element,mc)[0]||C.findOne(mc,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return b1}static get DefaultType(){return T1}static get NAME(){return Wm}toggle(){return this._isShown()?this.hide():this.show()}show(){if(A(this._element)||this._isShown())return;const u={relatedTarget:this._element};if(!R.trigger(this._element,n1,u).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(f1))for(const y of[].concat(...document.body.children))R.on(y,"mouseover",S);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(as),this._element.classList.add(as),R.trigger(this._element,r1,u)}}hide(){if(A(this._element)||!this._isShown())return;const u={relatedTarget:this._element};this._completeHide(u)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(u){if(!R.trigger(this._element,e1,u).defaultPrevented){if("ontouchstart"in document.documentElement)for(const y of[].concat(...document.body.children))R.off(y,"mouseover",S);this._popper&&this._popper.destroy(),this._menu.classList.remove(as),this._element.classList.remove(as),this._element.setAttribute("aria-expanded","false"),P.removeDataAttribute(this._menu,"popper"),R.trigger(this._element,t1,u)}}_getConfig(u){if(u=super._getConfig(u),typeof u.reference=="object"&&!w(u.reference)&&typeof u.reference.getBoundingClientRect!="function")throw new TypeError(`${Wm.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return u}_createPopper(){if(typeof i>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let u=this._element;this._config.reference==="parent"?u=this._parent:w(this._config.reference)?u=T(this._config.reference):typeof this._config.reference=="object"&&(u=this._config.reference);const d=this._getPopperConfig();this._popper=i.createPopper(u,this._menu,d)}_isShown(){return this._menu.classList.contains(as)}_getPlacement(){const u=this._parent;if(u.classList.contains(o1))return y1;if(u.classList.contains(a1))return v1;if(u.classList.contains(c1))return E1;if(u.classList.contains(l1))return w1;const d=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return u.classList.contains(s1)?d?m1:p1:d?_1:g1}_detectNavbar(){return this._element.closest(h1)!==null}_getOffset(){const{offset:u}=this._config;return typeof u=="string"?u.split(",").map(d=>Number.parseInt(d,10)):typeof u=="function"?d=>u(d,this._element):u}_getPopperConfig(){const u={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(P.setDataAttribute(this._menu,"popper","static"),u.modifiers=[{name:"applyStyles",enabled:!1}]),{...u,...Ee(this._config.popperConfig,[u])}}_selectMenuItem({key:u,target:d}){const y=C.find(d1,this._menu).filter(k=>b(k));y.length&&De(y,d,u===Gm,!y.includes(d)).focus()}static jQueryInterface(u){return this.each(function(){const d=vn.getOrCreateInstance(this,u);if(typeof u=="string"){if(typeof d[u]>"u")throw new TypeError(`No method named "${u}"`);d[u]()}})}static clearMenus(u){if(u.button===ZI||u.type==="keyup"&&u.key!==Km)return;const d=C.find(u1);for(const y of d){const k=vn.getInstance(y);if(!k||k._config.autoClose===!1)continue;const q=u.composedPath(),B=q.includes(k._menu);if(q.includes(k._element)||k._config.autoClose==="inside"&&!B||k._config.autoClose==="outside"&&B||k._menu.contains(u.target)&&(u.type==="keyup"&&u.key===Km||/input|select|option|textarea|form/i.test(u.target.tagName)))continue;const be={relatedTarget:k._element};u.type==="click"&&(be.clickEvent=u),k._completeHide(be)}}static dataApiKeydownHandler(u){const d=/input|textarea/i.test(u.target.tagName),y=u.key===XI,k=[JI,Gm].includes(u.key);if(!k&&!y||d&&!y)return;u.preventDefault();const q=this.matches(hi)?this:C.prev(this,hi)[0]||C.next(this,hi)[0]||C.findOne(hi,u.delegateTarget.parentNode),B=vn.getOrCreateInstance(q);if(k){u.stopPropagation(),B.show(),B._selectMenuItem(u);return}B._isShown()&&(u.stopPropagation(),B.hide(),q.focus())}}R.on(document,Qm,hi,vn.dataApiKeydownHandler),R.on(document,Qm,mc,vn.dataApiKeydownHandler),R.on(document,Ym,vn.clearMenus),R.on(document,i1,vn.clearMenus),R.on(document,Ym,hi,function(_){_.preventDefault(),vn.getOrCreateInstance(this).toggle()}),ce(vn);const Xm="backdrop",A1="fade",Jm="show",Zm=`mousedown.bs.${Xm}`,I1={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},S1={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class eg extends x{constructor(u){super(),this._config=this._getConfig(u),this._isAppended=!1,this._element=null}static get Default(){return I1}static get DefaultType(){return S1}static get NAME(){return Xm}show(u){if(!this._config.isVisible){Ee(u);return}this._append();const d=this._getElement();this._config.isAnimated&&j(d),d.classList.add(Jm),this._emulateAnimation(()=>{Ee(u)})}hide(u){if(!this._config.isVisible){Ee(u);return}this._getElement().classList.remove(Jm),this._emulateAnimation(()=>{this.dispose(),Ee(u)})}dispose(){this._isAppended&&(R.off(this._element,Zm),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const u=document.createElement("div");u.className=this._config.className,this._config.isAnimated&&u.classList.add(A1),this._element=u}return this._element}_configAfterMerge(u){return u.rootElement=T(u.rootElement),u}_append(){if(this._isAppended)return;const u=this._getElement();this._config.rootElement.append(u),R.on(u,Zm,()=>{Ee(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(u){Ze(u,this._getElement(),this._config.isAnimated)}}const C1="focustrap",gc=".bs.focustrap",R1=`focusin${gc}`,P1=`keydown.tab${gc}`,O1="Tab",k1="forward",tg="backward",N1={autofocus:!0,trapElement:null},x1={autofocus:"boolean",trapElement:"element"};class ng extends x{constructor(u){super(),this._config=this._getConfig(u),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return N1}static get DefaultType(){return x1}static get NAME(){return C1}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),R.off(document,gc),R.on(document,R1,u=>this._handleFocusin(u)),R.on(document,P1,u=>this._handleKeydown(u)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,R.off(document,gc))}_handleFocusin(u){const{trapElement:d}=this._config;if(u.target===document||u.target===d||d.contains(u.target))return;const y=C.focusableChildren(d);y.length===0?d.focus():this._lastTabNavDirection===tg?y[y.length-1].focus():y[0].focus()}_handleKeydown(u){u.key===O1&&(this._lastTabNavDirection=u.shiftKey?tg:k1)}}const rg=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ig=".sticky-top",_c="padding-right",sg="margin-right";class vh{constructor(){this._element=document.body}getWidth(){const u=document.documentElement.clientWidth;return Math.abs(window.innerWidth-u)}hide(){const u=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,_c,d=>d+u),this._setElementAttributes(rg,_c,d=>d+u),this._setElementAttributes(ig,sg,d=>d-u)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,_c),this._resetElementAttributes(rg,_c),this._resetElementAttributes(ig,sg)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(u,d,y){const k=this.getWidth(),q=B=>{if(B!==this._element&&window.innerWidth>B.clientWidth+k)return;this._saveInitialAttribute(B,d);const be=window.getComputedStyle(B).getPropertyValue(d);B.style.setProperty(d,`${y(Number.parseFloat(be))}px`)};this._applyManipulationCallback(u,q)}_saveInitialAttribute(u,d){const y=u.style.getPropertyValue(d);y&&P.setDataAttribute(u,d,y)}_resetElementAttributes(u,d){const y=k=>{const q=P.getDataAttribute(k,d);if(q===null){k.style.removeProperty(d);return}P.removeDataAttribute(k,d),k.style.setProperty(d,q)};this._applyManipulationCallback(u,y)}_applyManipulationCallback(u,d){if(w(u)){d(u);return}for(const y of C.find(u,this._element))d(y)}}const D1="modal",pn=".bs.modal",L1=".data-api",M1="Escape",V1=`hide${pn}`,F1=`hidePrevented${pn}`,og=`hidden${pn}`,ag=`show${pn}`,$1=`shown${pn}`,U1=`resize${pn}`,B1=`click.dismiss${pn}`,j1=`mousedown.dismiss${pn}`,H1=`keydown.dismiss${pn}`,z1=`click${pn}${L1}`,cg="modal-open",q1="fade",lg="show",Eh="modal-static",W1=".modal.show",K1=".modal-dialog",G1=".modal-body",Y1='[data-bs-toggle="modal"]',Q1={backdrop:!0,focus:!0,keyboard:!0},X1={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class fi extends H{constructor(u,d){super(u,d),this._dialog=C.findOne(K1,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new vh,this._addEventListeners()}static get Default(){return Q1}static get DefaultType(){return X1}static get NAME(){return D1}toggle(u){return this._isShown?this.hide():this.show(u)}show(u){this._isShown||this._isTransitioning||R.trigger(this._element,ag,{relatedTarget:u}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(cg),this._adjustDialog(),this._backdrop.show(()=>this._showElement(u)))}hide(){!this._isShown||this._isTransitioning||R.trigger(this._element,V1).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(lg),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){R.off(window,pn),R.off(this._dialog,pn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new eg({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ng({trapElement:this._element})}_showElement(u){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const d=C.findOne(G1,this._dialog);d&&(d.scrollTop=0),j(this._element),this._element.classList.add(lg);const y=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,R.trigger(this._element,$1,{relatedTarget:u})};this._queueCallback(y,this._dialog,this._isAnimated())}_addEventListeners(){R.on(this._element,H1,u=>{if(u.key===M1){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),R.on(window,U1,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),R.on(this._element,j1,u=>{R.one(this._element,B1,d=>{if(!(this._element!==u.target||this._element!==d.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(cg),this._resetAdjustments(),this._scrollBar.reset(),R.trigger(this._element,og)})}_isAnimated(){return this._element.classList.contains(q1)}_triggerBackdropTransition(){if(R.trigger(this._element,F1).defaultPrevented)return;const d=this._element.scrollHeight>document.documentElement.clientHeight,y=this._element.style.overflowY;y==="hidden"||this._element.classList.contains(Eh)||(d||(this._element.style.overflowY="hidden"),this._element.classList.add(Eh),this._queueCallback(()=>{this._element.classList.remove(Eh),this._queueCallback(()=>{this._element.style.overflowY=y},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const u=this._element.scrollHeight>document.documentElement.clientHeight,d=this._scrollBar.getWidth(),y=d>0;if(y&&!u){const k=oe()?"paddingLeft":"paddingRight";this._element.style[k]=`${d}px`}if(!y&&u){const k=oe()?"paddingRight":"paddingLeft";this._element.style[k]=`${d}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(u,d){return this.each(function(){const y=fi.getOrCreateInstance(this,u);if(typeof u=="string"){if(typeof y[u]>"u")throw new TypeError(`No method named "${u}"`);y[u](d)}})}}R.on(document,z1,Y1,function(_){const u=C.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&_.preventDefault(),R.one(u,ag,k=>{k.defaultPrevented||R.one(u,og,()=>{b(this)&&this.focus()})});const d=C.findOne(W1);d&&fi.getInstance(d).hide(),fi.getOrCreateInstance(u).toggle(this)}),M(fi),ce(fi);const J1="offcanvas",ir=".bs.offcanvas",ug=".data-api",Z1=`load${ir}${ug}`,eS="Escape",hg="show",fg="showing",dg="hiding",tS="offcanvas-backdrop",pg=".offcanvas.show",nS=`show${ir}`,rS=`shown${ir}`,iS=`hide${ir}`,mg=`hidePrevented${ir}`,gg=`hidden${ir}`,sS=`resize${ir}`,oS=`click${ir}${ug}`,aS=`keydown.dismiss${ir}`,cS='[data-bs-toggle="offcanvas"]',lS={backdrop:!0,keyboard:!0,scroll:!1},uS={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class sr extends H{constructor(u,d){super(u,d),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return lS}static get DefaultType(){return uS}static get NAME(){return J1}toggle(u){return this._isShown?this.hide():this.show(u)}show(u){if(this._isShown||R.trigger(this._element,nS,{relatedTarget:u}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new vh().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(fg);const y=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(hg),this._element.classList.remove(fg),R.trigger(this._element,rS,{relatedTarget:u})};this._queueCallback(y,this._element,!0)}hide(){if(!this._isShown||R.trigger(this._element,iS).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(dg),this._backdrop.hide();const d=()=>{this._element.classList.remove(hg,dg),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new vh().reset(),R.trigger(this._element,gg)};this._queueCallback(d,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const u=()=>{if(this._config.backdrop==="static"){R.trigger(this._element,mg);return}this.hide()},d=!!this._config.backdrop;return new eg({className:tS,isVisible:d,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:d?u:null})}_initializeFocusTrap(){return new ng({trapElement:this._element})}_addEventListeners(){R.on(this._element,aS,u=>{if(u.key===eS){if(this._config.keyboard){this.hide();return}R.trigger(this._element,mg)}})}static jQueryInterface(u){return this.each(function(){const d=sr.getOrCreateInstance(this,u);if(typeof u=="string"){if(d[u]===void 0||u.startsWith("_")||u==="constructor")throw new TypeError(`No method named "${u}"`);d[u](this)}})}}R.on(document,oS,cS,function(_){const u=C.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&_.preventDefault(),A(this))return;R.one(u,gg,()=>{b(this)&&this.focus()});const d=C.findOne(pg);d&&d!==u&&sr.getInstance(d).hide(),sr.getOrCreateInstance(u).toggle(this)}),R.on(window,Z1,()=>{for(const _ of C.find(pg))sr.getOrCreateInstance(_).show()}),R.on(window,sS,()=>{for(const _ of C.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(_).position!=="fixed"&&sr.getOrCreateInstance(_).hide()}),M(sr),ce(sr);const _g={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},hS=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),fS=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,dS=(_,u)=>{const d=_.nodeName.toLowerCase();return u.includes(d)?hS.has(d)?!!fS.test(_.nodeValue):!0:u.filter(y=>y instanceof RegExp).some(y=>y.test(d))};function pS(_,u,d){if(!_.length)return _;if(d&&typeof d=="function")return d(_);const k=new window.DOMParser().parseFromString(_,"text/html"),q=[].concat(...k.body.querySelectorAll("*"));for(const B of q){const be=B.nodeName.toLowerCase();if(!Object.keys(u).includes(be)){B.remove();continue}const Qt=[].concat(...B.attributes),mn=[].concat(u["*"]||[],u[be]||[]);for(const mt of Qt)dS(mt,mn)||B.removeAttribute(mt.nodeName)}return k.body.innerHTML}const mS="TemplateFactory",gS={allowList:_g,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},_S={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},yS={entry:"(string|element|function|null)",selector:"(string|element)"};class vS extends x{constructor(u){super(),this._config=this._getConfig(u)}static get Default(){return gS}static get DefaultType(){return _S}static get NAME(){return mS}getContent(){return Object.values(this._config.content).map(u=>this._resolvePossibleFunction(u)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(u){return this._checkContent(u),this._config.content={...this._config.content,...u},this}toHtml(){const u=document.createElement("div");u.innerHTML=this._maybeSanitize(this._config.template);for(const[k,q]of Object.entries(this._config.content))this._setContent(u,q,k);const d=u.children[0],y=this._resolvePossibleFunction(this._config.extraClass);return y&&d.classList.add(...y.split(" ")),d}_typeCheckConfig(u){super._typeCheckConfig(u),this._checkContent(u.content)}_checkContent(u){for(const[d,y]of Object.entries(u))super._typeCheckConfig({selector:d,entry:y},yS)}_setContent(u,d,y){const k=C.findOne(y,u);if(k){if(d=this._resolvePossibleFunction(d),!d){k.remove();return}if(w(d)){this._putElementInTemplate(T(d),k);return}if(this._config.html){k.innerHTML=this._maybeSanitize(d);return}k.textContent=d}}_maybeSanitize(u){return this._config.sanitize?pS(u,this._config.allowList,this._config.sanitizeFn):u}_resolvePossibleFunction(u){return Ee(u,[this])}_putElementInTemplate(u,d){if(this._config.html){d.innerHTML="",d.append(u);return}d.textContent=u.textContent}}const ES="tooltip",wS=new Set(["sanitize","allowList","sanitizeFn"]),wh="fade",bS="modal",yc="show",TS=".tooltip-inner",yg=`.${bS}`,vg="hide.bs.modal",_o="hover",bh="focus",AS="click",IS="manual",SS="hide",CS="hidden",RS="show",PS="shown",OS="inserted",kS="click",NS="focusin",xS="focusout",DS="mouseenter",LS="mouseleave",MS={AUTO:"auto",TOP:"top",RIGHT:oe()?"left":"right",BOTTOM:"bottom",LEFT:oe()?"right":"left"},VS={allowList:_g,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},FS={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class di extends H{constructor(u,d){if(typeof i>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(u,d),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return VS}static get DefaultType(){return FS}static get NAME(){return ES}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),R.off(this._element.closest(yg),vg,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const u=R.trigger(this._element,this.constructor.eventName(RS)),y=(N(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(u.defaultPrevented||!y)return;this._disposePopper();const k=this._getTipElement();this._element.setAttribute("aria-describedby",k.getAttribute("id"));const{container:q}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(q.append(k),R.trigger(this._element,this.constructor.eventName(OS))),this._popper=this._createPopper(k),k.classList.add(yc),"ontouchstart"in document.documentElement)for(const be of[].concat(...document.body.children))R.on(be,"mouseover",S);const B=()=>{R.trigger(this._element,this.constructor.eventName(PS)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(B,this.tip,this._isAnimated())}hide(){if(!this._isShown()||R.trigger(this._element,this.constructor.eventName(SS)).defaultPrevented)return;if(this._getTipElement().classList.remove(yc),"ontouchstart"in document.documentElement)for(const k of[].concat(...document.body.children))R.off(k,"mouseover",S);this._activeTrigger[AS]=!1,this._activeTrigger[bh]=!1,this._activeTrigger[_o]=!1,this._isHovered=null;const y=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),R.trigger(this._element,this.constructor.eventName(CS)))};this._queueCallback(y,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(u){const d=this._getTemplateFactory(u).toHtml();if(!d)return null;d.classList.remove(wh,yc),d.classList.add(`bs-${this.constructor.NAME}-auto`);const y=p(this.constructor.NAME).toString();return d.setAttribute("id",y),this._isAnimated()&&d.classList.add(wh),d}setContent(u){this._newContent=u,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(u){return this._templateFactory?this._templateFactory.changeContent(u):this._templateFactory=new vS({...this._config,content:u,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[TS]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(u){return this.constructor.getOrCreateInstance(u.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(wh)}_isShown(){return this.tip&&this.tip.classList.contains(yc)}_createPopper(u){const d=Ee(this._config.placement,[this,u,this._element]),y=MS[d.toUpperCase()];return i.createPopper(this._element,u,this._getPopperConfig(y))}_getOffset(){const{offset:u}=this._config;return typeof u=="string"?u.split(",").map(d=>Number.parseInt(d,10)):typeof u=="function"?d=>u(d,this._element):u}_resolvePossibleFunction(u){return Ee(u,[this._element])}_getPopperConfig(u){const d={placement:u,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:y=>{this._getTipElement().setAttribute("data-popper-placement",y.state.placement)}}]};return{...d,...Ee(this._config.popperConfig,[d])}}_setListeners(){const u=this._config.trigger.split(" ");for(const d of u)if(d==="click")R.on(this._element,this.constructor.eventName(kS),this._config.selector,y=>{this._initializeOnDelegatedTarget(y).toggle()});else if(d!==IS){const y=d===_o?this.constructor.eventName(DS):this.constructor.eventName(NS),k=d===_o?this.constructor.eventName(LS):this.constructor.eventName(xS);R.on(this._element,y,this._config.selector,q=>{const B=this._initializeOnDelegatedTarget(q);B._activeTrigger[q.type==="focusin"?bh:_o]=!0,B._enter()}),R.on(this._element,k,this._config.selector,q=>{const B=this._initializeOnDelegatedTarget(q);B._activeTrigger[q.type==="focusout"?bh:_o]=B._element.contains(q.relatedTarget),B._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},R.on(this._element.closest(yg),vg,this._hideModalHandler)}_fixTitle(){const u=this._element.getAttribute("title");u&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",u),this._element.setAttribute("data-bs-original-title",u),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(u,d){clearTimeout(this._timeout),this._timeout=setTimeout(u,d)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(u){const d=P.getDataAttributes(this._element);for(const y of Object.keys(d))wS.has(y)&&delete d[y];return u={...d,...typeof u=="object"&&u?u:{}},u=this._mergeConfigObj(u),u=this._configAfterMerge(u),this._typeCheckConfig(u),u}_configAfterMerge(u){return u.container=u.container===!1?document.body:T(u.container),typeof u.delay=="number"&&(u.delay={show:u.delay,hide:u.delay}),typeof u.title=="number"&&(u.title=u.title.toString()),typeof u.content=="number"&&(u.content=u.content.toString()),u}_getDelegateConfig(){const u={};for(const[d,y]of Object.entries(this._config))this.constructor.Default[d]!==y&&(u[d]=y);return u.selector=!1,u.trigger="manual",u}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(u){return this.each(function(){const d=di.getOrCreateInstance(this,u);if(typeof u=="string"){if(typeof d[u]>"u")throw new TypeError(`No method named "${u}"`);d[u]()}})}}ce(di);const $S="popover",US=".popover-header",BS=".popover-body",jS={...di.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},HS={...di.DefaultType,content:"(null|string|element|function)"};class vc extends di{static get Default(){return jS}static get DefaultType(){return HS}static get NAME(){return $S}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[US]:this._getTitle(),[BS]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(u){return this.each(function(){const d=vc.getOrCreateInstance(this,u);if(typeof u=="string"){if(typeof d[u]>"u")throw new TypeError(`No method named "${u}"`);d[u]()}})}}ce(vc);const zS="scrollspy",Th=".bs.scrollspy",qS=".data-api",WS=`activate${Th}`,Eg=`click${Th}`,KS=`load${Th}${qS}`,GS="dropdown-item",cs="active",YS='[data-bs-spy="scroll"]',Ah="[href]",QS=".nav, .list-group",wg=".nav-link",XS=`${wg}, .nav-item > ${wg}, .list-group-item`,JS=".dropdown",ZS=".dropdown-toggle",eC={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},tC={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class yo extends H{constructor(u,d){super(u,d),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return eC}static get DefaultType(){return tC}static get NAME(){return zS}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const u of this._observableSections.values())this._observer.observe(u)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(u){return u.target=T(u.target)||document.body,u.rootMargin=u.offset?`${u.offset}px 0px -30%`:u.rootMargin,typeof u.threshold=="string"&&(u.threshold=u.threshold.split(",").map(d=>Number.parseFloat(d))),u}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(R.off(this._config.target,Eg),R.on(this._config.target,Eg,Ah,u=>{const d=this._observableSections.get(u.target.hash);if(d){u.preventDefault();const y=this._rootElement||window,k=d.offsetTop-this._element.offsetTop;if(y.scrollTo){y.scrollTo({top:k,behavior:"smooth"});return}y.scrollTop=k}}))}_getNewObserver(){const u={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(d=>this._observerCallback(d),u)}_observerCallback(u){const d=B=>this._targetLinks.get(`#${B.target.id}`),y=B=>{this._previousScrollData.visibleEntryTop=B.target.offsetTop,this._process(d(B))},k=(this._rootElement||document.documentElement).scrollTop,q=k>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=k;for(const B of u){if(!B.isIntersecting){this._activeTarget=null,this._clearActiveClass(d(B));continue}const be=B.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(q&&be){if(y(B),!k)return;continue}!q&&!be&&y(B)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const u=C.find(Ah,this._config.target);for(const d of u){if(!d.hash||A(d))continue;const y=C.findOne(decodeURI(d.hash),this._element);b(y)&&(this._targetLinks.set(decodeURI(d.hash),d),this._observableSections.set(d.hash,y))}}_process(u){this._activeTarget!==u&&(this._clearActiveClass(this._config.target),this._activeTarget=u,u.classList.add(cs),this._activateParents(u),R.trigger(this._element,WS,{relatedTarget:u}))}_activateParents(u){if(u.classList.contains(GS)){C.findOne(ZS,u.closest(JS)).classList.add(cs);return}for(const d of C.parents(u,QS))for(const y of C.prev(d,XS))y.classList.add(cs)}_clearActiveClass(u){u.classList.remove(cs);const d=C.find(`${Ah}.${cs}`,u);for(const y of d)y.classList.remove(cs)}static jQueryInterface(u){return this.each(function(){const d=yo.getOrCreateInstance(this,u);if(typeof u=="string"){if(d[u]===void 0||u.startsWith("_")||u==="constructor")throw new TypeError(`No method named "${u}"`);d[u]()}})}}R.on(window,KS,()=>{for(const _ of C.find(YS))yo.getOrCreateInstance(_)}),ce(yo);const nC="tab",pi=".bs.tab",rC=`hide${pi}`,iC=`hidden${pi}`,sC=`show${pi}`,oC=`shown${pi}`,aC=`click${pi}`,cC=`keydown${pi}`,lC=`load${pi}`,uC="ArrowLeft",bg="ArrowRight",hC="ArrowUp",Tg="ArrowDown",Ih="Home",Ag="End",mi="active",Ig="fade",Sh="show",fC="dropdown",Sg=".dropdown-toggle",dC=".dropdown-menu",Ch=`:not(${Sg})`,pC='.list-group, .nav, [role="tablist"]',mC=".nav-item, .list-group-item",gC=`.nav-link${Ch}, .list-group-item${Ch}, [role="tab"]${Ch}`,Cg='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Rh=`${gC}, ${Cg}`,_C=`.${mi}[data-bs-toggle="tab"], .${mi}[data-bs-toggle="pill"], .${mi}[data-bs-toggle="list"]`;class gi extends H{constructor(u){super(u),this._parent=this._element.closest(pC),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),R.on(this._element,cC,d=>this._keydown(d)))}static get NAME(){return nC}show(){const u=this._element;if(this._elemIsActive(u))return;const d=this._getActiveElem(),y=d?R.trigger(d,rC,{relatedTarget:u}):null;R.trigger(u,sC,{relatedTarget:d}).defaultPrevented||y&&y.defaultPrevented||(this._deactivate(d,u),this._activate(u,d))}_activate(u,d){if(!u)return;u.classList.add(mi),this._activate(C.getElementFromSelector(u));const y=()=>{if(u.getAttribute("role")!=="tab"){u.classList.add(Sh);return}u.removeAttribute("tabindex"),u.setAttribute("aria-selected",!0),this._toggleDropDown(u,!0),R.trigger(u,oC,{relatedTarget:d})};this._queueCallback(y,u,u.classList.contains(Ig))}_deactivate(u,d){if(!u)return;u.classList.remove(mi),u.blur(),this._deactivate(C.getElementFromSelector(u));const y=()=>{if(u.getAttribute("role")!=="tab"){u.classList.remove(Sh);return}u.setAttribute("aria-selected",!1),u.setAttribute("tabindex","-1"),this._toggleDropDown(u,!1),R.trigger(u,iC,{relatedTarget:d})};this._queueCallback(y,u,u.classList.contains(Ig))}_keydown(u){if(![uC,bg,hC,Tg,Ih,Ag].includes(u.key))return;u.stopPropagation(),u.preventDefault();const d=this._getChildren().filter(k=>!A(k));let y;if([Ih,Ag].includes(u.key))y=d[u.key===Ih?0:d.length-1];else{const k=[bg,Tg].includes(u.key);y=De(d,u.target,k,!0)}y&&(y.focus({preventScroll:!0}),gi.getOrCreateInstance(y).show())}_getChildren(){return C.find(Rh,this._parent)}_getActiveElem(){return this._getChildren().find(u=>this._elemIsActive(u))||null}_setInitialAttributes(u,d){this._setAttributeIfNotExists(u,"role","tablist");for(const y of d)this._setInitialAttributesOnChild(y)}_setInitialAttributesOnChild(u){u=this._getInnerElement(u);const d=this._elemIsActive(u),y=this._getOuterElement(u);u.setAttribute("aria-selected",d),y!==u&&this._setAttributeIfNotExists(y,"role","presentation"),d||u.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(u,"role","tab"),this._setInitialAttributesOnTargetPanel(u)}_setInitialAttributesOnTargetPanel(u){const d=C.getElementFromSelector(u);d&&(this._setAttributeIfNotExists(d,"role","tabpanel"),u.id&&this._setAttributeIfNotExists(d,"aria-labelledby",`${u.id}`))}_toggleDropDown(u,d){const y=this._getOuterElement(u);if(!y.classList.contains(fC))return;const k=(q,B)=>{const be=C.findOne(q,y);be&&be.classList.toggle(B,d)};k(Sg,mi),k(dC,Sh),y.setAttribute("aria-expanded",d)}_setAttributeIfNotExists(u,d,y){u.hasAttribute(d)||u.setAttribute(d,y)}_elemIsActive(u){return u.classList.contains(mi)}_getInnerElement(u){return u.matches(Rh)?u:C.findOne(Rh,u)}_getOuterElement(u){return u.closest(mC)||u}static jQueryInterface(u){return this.each(function(){const d=gi.getOrCreateInstance(this);if(typeof u=="string"){if(d[u]===void 0||u.startsWith("_")||u==="constructor")throw new TypeError(`No method named "${u}"`);d[u]()}})}}R.on(document,aC,Cg,function(_){["A","AREA"].includes(this.tagName)&&_.preventDefault(),!A(this)&&gi.getOrCreateInstance(this).show()}),R.on(window,lC,()=>{for(const _ of C.find(_C))gi.getOrCreateInstance(_)}),ce(gi);const yC="toast",Pr=".bs.toast",vC=`mouseover${Pr}`,EC=`mouseout${Pr}`,wC=`focusin${Pr}`,bC=`focusout${Pr}`,TC=`hide${Pr}`,AC=`hidden${Pr}`,IC=`show${Pr}`,SC=`shown${Pr}`,CC="fade",Rg="hide",Ec="show",wc="showing",RC={animation:"boolean",autohide:"boolean",delay:"number"},PC={animation:!0,autohide:!0,delay:5e3};class vo extends H{constructor(u,d){super(u,d),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return PC}static get DefaultType(){return RC}static get NAME(){return yC}show(){if(R.trigger(this._element,IC).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(CC);const d=()=>{this._element.classList.remove(wc),R.trigger(this._element,SC),this._maybeScheduleHide()};this._element.classList.remove(Rg),j(this._element),this._element.classList.add(Ec,wc),this._queueCallback(d,this._element,this._config.animation)}hide(){if(!this.isShown()||R.trigger(this._element,TC).defaultPrevented)return;const d=()=>{this._element.classList.add(Rg),this._element.classList.remove(wc,Ec),R.trigger(this._element,AC)};this._element.classList.add(wc),this._queueCallback(d,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ec),super.dispose()}isShown(){return this._element.classList.contains(Ec)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(u,d){switch(u.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=d;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=d;break}}if(d){this._clearTimeout();return}const y=u.relatedTarget;this._element===y||this._element.contains(y)||this._maybeScheduleHide()}_setListeners(){R.on(this._element,vC,u=>this._onInteraction(u,!0)),R.on(this._element,EC,u=>this._onInteraction(u,!1)),R.on(this._element,wC,u=>this._onInteraction(u,!0)),R.on(this._element,bC,u=>this._onInteraction(u,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(u){return this.each(function(){const d=vo.getOrCreateInstance(this,u);if(typeof u=="string"){if(typeof d[u]>"u")throw new TypeError(`No method named "${u}"`);d[u](this)}})}}return M(vo),ce(vo),{Alert:$e,Button:Cr,Carousel:is,Collapse:os,Dropdown:vn,Modal:fi,Offcanvas:sr,Popover:vc,ScrollSpy:yo,Tab:gi,Toast:vo,Tooltip:di}})})(M3);_3.add(k3,O3,P3,N3,x3);const SB={apiKey:"AIzaSyALx8RfOkMABgyPcPH0iXj7lnu_NezWapU",authDomain:"datamed-13891.firebaseapp.com",databaseURL:"https://datamed-13891-default-rtdb.firebaseio.com",projectId:"datamed-13891",storageBucket:"datamed-13891.appspot.com",messagingSenderId:"135159147198",appId:"1:135159147198:web:dcd503d464c1019f1a0cef"};Jd(SB);GP(_4).use(Z0).component("font-awesome-icon",R3).mount("#app");
