import{i as ze,e as Ke,g as re,c as yt,a as ht,m as Ue,h as pt,b as _,d as R,T as he,p as U,r as I,I as K,u as _e,w as V,o as W,f as wt,j as P,n as ee,k as H,l as Ae,q as Ee,s as Ye,t as Se,v as ke,x as Te,y as bt,z as Y,A as xt,B as _t,C as Ge,D as Xe,E as Et,F as St,G as kt,H as Qe,J as Ot,K as Ct,L as Pt,M as At,N as Ze,O as Tt,P as Lt,Q as Ft,R as Mt,S as Je,U as Vt,V as Bt,W as Le,X as Dt,Y as Fe,Z as Oe,_ as et,$ as J,a0 as fe,a1 as L,a2 as C,a3 as q,a4 as Rt,a5 as It,a6 as Nt,a7 as tt,a8 as nt,a9 as ot,aa as at,ab as Ht,ac as $t}from"./index-73ef9cfc.js";import{a as Z,d as jt,s as pe,b as qt,g as it,n as st,p as Me,f as de,c as ve,e as Ve,B as me,h as Be,i as De,m as Wt,u as zt,j as Kt,k as Ut,l as Yt,V as Gt,o as ne,q as te}from"./VGrid-e80a9032.js";import{m as Xt,a as Qt,u as Zt,M as Jt,f as en}from"./forwardRefs-870153de.js";const oe=new WeakMap;function tn(e,n){Object.keys(n).forEach(t=>{if(ze(t)){const o=Ke(t),a=oe.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[r,s]=i;r===o&&(e.removeEventListener(o,s),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),oe.has(e)||oe.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function nn(e,n){Object.keys(n).forEach(t=>{if(ze(t)){const o=Ke(t),a=oe.get(e);a==null||a.forEach(i=>{const[r,s]=i;r===o&&(e.removeEventListener(o,s),a.delete(i))})}else e.removeAttribute(t)})}function on(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return re()({name:t??yt(ht(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...Ue()},setup(o,a){let{slots:i}=a;return()=>{var r;return pt(o.tag,{class:[e,o.class],style:o.style},(r=i.default)==null?void 0:r.call(i))}}})}function rt(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function an(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?sn(e):Ce(e))return e;e=e.parentElement}return document.scrollingElement}function ie(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Ce(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Ce(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function sn(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function rn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const ln="/assets/menu-ee0b645c.svg",cn="/assets/mfa-logo-6aecc9b1.png",un=[{name:"GitHub",link:"https://github.com/ferasatali",icon:"/github.png"},{name:"LinkedIn",link:"https://www.linkedin.com/in/mferasatali",icon:"/linkedin-02.png"},{name:"GitHub Aslase",link:"https://github.com/fali-aslase",icon:"/github.png"},{name:"Twitter",link:"https://twitter.com/AliFerasat",icon:"/twitter.png"},{name:"Instagram",link:"https://www.instagram.com/mferasatali/",icon:"/instagram.png"},{name:"Facebook",link:"https://www.facebook.com/mferasatali",icon:"/facebook-01.png"}],fn=on("v-spacer","div","VSpacer");const dn=U({target:[Object,Array]},"v-dialog-transition"),vn=re()({name:"VDialogTransition",props:dn(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var x;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),a.style.visibility="";const{x:r,y:s,sx:u,sy:f,speed:d}=Ie(e.target,a),p=Z(a,[{transform:`translate(${r}px, ${s}px) scale(${u}, ${f})`,opacity:0},{}],{duration:225*d,easing:jt});(x=Re(a))==null||x.forEach(g=>{Z(g,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*d,easing:pe})}),p.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var x;await new Promise(g=>requestAnimationFrame(g));const{x:r,y:s,sx:u,sy:f,speed:d}=Ie(e.target,a);Z(a,[{},{transform:`translate(${r}px, ${s}px) scale(${u}, ${f})`,opacity:0}],{duration:125*d,easing:qt}).finished.then(()=>i()),(x=Re(a))==null||x.forEach(g=>{Z(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*d,easing:pe})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?_(he,R({name:"dialog-transition"},o,{css:!1}),t):_(he,{name:"dialog-transition"},t)}});function Re(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ie(e,n){const t=it(e),o=st(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(w=>parseFloat(w)),[r,s]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;r==="left"||s==="left"?u-=t.width/2:(r==="right"||s==="right")&&(u+=t.width/2);let f=t.top+t.height/2;r==="top"||s==="top"?f-=t.height/2:(r==="bottom"||s==="bottom")&&(f+=t.height/2);const d=t.width/o.width,p=t.height/o.height,x=Math.max(1,d,p),g=d/x||0,v=p/x||0,c=o.width*o.height/(window.innerWidth*window.innerHeight),y=c>.12?Math.min(1.5,(c-.12)*10+1):1;return{x:u-(a+o.left),y:f-(i+o.top),sx:g,sy:v,speed:y}}function ge(e,n){return{x:e.x+n.x,y:e.y+n.y}}function mn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ne(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ge({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ge({x:a,y:i},n)}return ge({x:n.width/2,y:n.height/2},n)}const lt={static:hn,connected:wn},gn=U({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in lt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function yn(e,n){const t=I({}),o=I();K&&_e(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var r,s;V(()=>e.locationStrategy,i),W(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(r=e.locationStrategy(n,e,t))==null?void 0:r.updateLocation:o.value=(s=lt[e.locationStrategy](n,e,t))==null?void 0:s.updateLocation});function a(i){var r;(r=o.value)==null||r.call(o,i)}return{contentStyles:t,updateLocation:o}}function hn(){}function pn(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=st(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function wn(e,n,t){(Array.isArray(e.target.value)||rn(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=wt(()=>{const v=Me(n.location,e.isRtl.value),c=n.origin==="overlap"?v:n.origin==="auto"?de(v):Me(n.origin,e.isRtl.value);return v.side===c.side&&v.align===ve(c).align?{preferredAnchor:Ve(v),preferredOrigin:Ve(c)}:{preferredAnchor:v,preferredOrigin:c}}),[r,s,u,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(v=>P(()=>{const c=parseFloat(n[v]);return isNaN(c)?1/0:c})),d=P(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const v=n.offset.split(" ").map(parseFloat);return v.length<2&&v.push(0),v}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let p=!1;const x=new ResizeObserver(()=>{p&&g()});V([e.target,e.contentEl],(v,c)=>{let[y,w]=v,[h,b]=c;h&&!Array.isArray(h)&&x.unobserve(h),y&&!Array.isArray(y)&&x.observe(y),b&&x.unobserve(b),w&&x.observe(w)},{immediate:!0}),W(()=>{x.disconnect()});function g(){if(p=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>p=!0)}),!e.target.value||!e.contentEl.value)return;const v=it(e.target.value),c=pn(e.contentEl.value,e.isRtl.value),y=ie(e.contentEl.value),w=12;y.length||(y.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(c.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),c.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const h=y.reduce((O,S)=>{const m=S.getBoundingClientRect(),E=new me({x:S===document.documentElement?0:m.x,y:S===document.documentElement?0:m.y,width:S.clientWidth,height:S.clientHeight});return O?new me({x:Math.max(O.left,E.left),y:Math.max(O.top,E.top),width:Math.min(O.right,E.right)-Math.max(O.left,E.left),height:Math.min(O.bottom,E.bottom)-Math.max(O.top,E.top)}):E},void 0);h.x+=w,h.y+=w,h.width-=w*2,h.height-=w*2;let b={anchor:a.value,origin:i.value};function F(O){const S=new me(c),m=Ne(O.anchor,v),E=Ne(O.origin,S);let{x:D,y:N}=mn(m,E);switch(O.anchor.side){case"top":N-=d.value[0];break;case"bottom":N+=d.value[0];break;case"left":D-=d.value[0];break;case"right":D+=d.value[0];break}switch(O.anchor.align){case"top":N-=d.value[1];break;case"bottom":N+=d.value[1];break;case"left":D-=d.value[1];break;case"right":D+=d.value[1];break}return S.x+=D,S.y+=N,S.width=Math.min(S.width,u.value),S.height=Math.min(S.height,f.value),{overflows:De(S,h),x:D,y:N}}let B=0,T=0;const l={x:0,y:0},M={x:!1,y:!1};let ce=-1;for(;!(ce++>10);){const{x:O,y:S,overflows:m}=F(b);B+=O,T+=S,c.x+=O,c.y+=S;{const E=Be(b.anchor),D=m.x.before||m.x.after,N=m.y.before||m.y.after;let G=!1;if(["x","y"].forEach(A=>{if(A==="x"&&D&&!M.x||A==="y"&&N&&!M.y){const z={anchor:{...b.anchor},origin:{...b.origin}},X=A==="x"?E==="y"?ve:de:E==="y"?de:ve;z.anchor=X(z.anchor),z.origin=X(z.origin);const{overflows:$}=F(z);($[A].before<=m[A].before&&$[A].after<=m[A].after||$[A].before+$[A].after<(m[A].before+m[A].after)/2)&&(b=z,G=M[A]=!0)}}),G)continue}m.x.before&&(B+=m.x.before,c.x+=m.x.before),m.x.after&&(B-=m.x.after,c.x-=m.x.after),m.y.before&&(T+=m.y.before,c.y+=m.y.before),m.y.after&&(T-=m.y.after,c.y-=m.y.after);{const E=De(c,h);l.x=h.width-E.x.before-E.x.after,l.y=h.height-E.y.before-E.y.after,B+=E.x.before,c.x+=E.x.before,T+=E.y.before,c.y+=E.y.before}break}const ue=Be(b.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:H(ye(T)),left:e.isRtl.value?void 0:H(ye(B)),right:e.isRtl.value?H(ye(-B)):void 0,minWidth:H(ue==="y"?Math.min(r.value,v.width):r.value),maxWidth:H(He(Ae(l.x,r.value===1/0?0:r.value,u.value))),maxHeight:H(He(Ae(l.y,s.value===1/0?0:s.value,f.value)))}),{available:l,contentBox:c}}return V(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>g()),ee(()=>{const v=g();if(!v)return;const{available:c,contentBox:y}=v;y.height>c.y&&requestAnimationFrame(()=>{g(),requestAnimationFrame(()=>{g()})})}),{updateLocation:g}}function ye(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function He(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let we=!0;const se=[];function bn(e){!we||se.length?(se.push(e),be()):(we=!1,e(),be())}let $e=-1;function be(){cancelAnimationFrame($e),$e=requestAnimationFrame(()=>{const e=se.shift();e&&e(),se.length?be():we=!0})}const ae={none:null,close:En,block:Sn,reposition:kn},xn=U({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ae}},"VOverlay-scroll-strategies");function _n(e,n){if(!K)return;let t;Ee(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ye(),await ee(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=ae[e.scrollStrategy])==null||o.call(ae,n,e,t)}))}),W(()=>{t==null||t.stop()})}function En(e){function n(t){e.isActive.value=!1}ct(e.targetEl.value??e.contentEl.value,n)}function Sn(e,n){var r;const t=(r=e.root.value)==null?void 0:r.offsetParent,o=[...new Set([...ie(e.targetEl.value,n.contained?t:void 0),...ie(e.contentEl.value,n.contained?t:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(s=>Ce(s)&&s)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((s,u)=>{s.style.setProperty("--v-body-scroll-x",H(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",H(-s.scrollTop)),s!==document.documentElement&&s.style.setProperty("--v-scrollbar-offset",H(a)),s.classList.add("v-overlay-scroll-blocked")}),W(()=>{o.forEach((s,u)=>{const f=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-f,s.scrollTop=-d}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function kn(e,n,t){let o=!1,a=-1,i=-1;function r(s){bn(()=>{var d,p;const u=performance.now();(p=(d=e.updateLocation).value)==null||p.call(d,s),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{t.run(()=>{ct(e.targetEl.value??e.contentEl.value,s=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{r(s)})})):r(s)})})}),W(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function ct(e,n){const t=[document,...ie(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),W(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const xe=Symbol.for("vuetify:v-menu"),On=U({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Cn(e,n){const t={},o=a=>()=>{if(!K)return Promise.resolve(!0);const i=a==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(r=>{const s=parseInt(e[a]??0,10);t[a]=window.setTimeout(()=>{n==null||n(i),r(i)},s)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const Pn=U({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...On()},"VOverlay-activator");function An(e,n){let{isActive:t,isTop:o}=n;const a=Se("useActivator"),i=I();let r=!1,s=!1,u=!0;const f=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!f.value),{runOpenDelay:p,runCloseDelay:x}=Cn(e,l=>{l===(e.openOnHover&&r||f.value&&s)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(u=!0),t.value=l)}),g=I(),v={onClick:l=>{l.stopPropagation(),i.value=l.currentTarget||l.target,t.value||(g.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var M;(M=l.sourceCapabilities)!=null&&M.firesTouchEvents||(r=!0,i.value=l.currentTarget||l.target,p())},onMouseleave:l=>{r=!1,x()},onFocus:l=>{bt(l.target,":focus-visible")!==!1&&(s=!0,l.stopPropagation(),i.value=l.currentTarget||l.target,p())},onBlur:l=>{s=!1,l.stopPropagation(),x()}},c=P(()=>{const l={};return d.value&&(l.onClick=v.onClick),e.openOnHover&&(l.onMouseenter=v.onMouseenter,l.onMouseleave=v.onMouseleave),f.value&&(l.onFocus=v.onFocus,l.onBlur=v.onBlur),l}),y=P(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{r=!0,p()},l.onMouseleave=()=>{r=!1,x()}),f.value&&(l.onFocusin=()=>{s=!0,p()},l.onFocusout=()=>{s=!1,x()}),e.closeOnContentClick){const M=ke(xe,null);l.onClick=()=>{t.value=!1,M==null||M.closeParents()}}return l}),w=P(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(r=!0,u=!1,p())},l.onMouseleave=()=>{r=!1,x()}),l});V(o,l=>{l&&(e.openOnHover&&!r&&(!f.value||!s)||f.value&&!s&&(!e.openOnHover||!r))&&(t.value=!1)}),V(t,l=>{l||setTimeout(()=>{g.value=void 0})},{flush:"post"});const h=I();Ee(()=>{h.value&&ee(()=>{i.value=Te(h.value)})});const b=I(),F=P(()=>e.target==="cursor"&&g.value?g.value:b.value?Te(b.value):ut(e.target,a)||i.value),B=P(()=>Array.isArray(F.value)?void 0:F.value);let T;return V(()=>!!e.activator,l=>{l&&K?(T=Ye(),T.run(()=>{Tn(e,a,{activatorEl:i,activatorEvents:c})})):T&&T.stop()},{flush:"post",immediate:!0}),W(()=>{T==null||T.stop()}),{activatorEl:i,activatorRef:h,target:F,targetEl:B,targetRef:b,activatorEvents:c,contentEvents:y,scrimEvents:w}}function Tn(e,n,t){let{activatorEl:o,activatorEvents:a}=t;V(()=>e.activator,(u,f)=>{if(f&&u!==f){const d=s(f);d&&r(d)}u&&ee(()=>i())},{immediate:!0}),V(()=>e.activatorProps,()=>{i()}),W(()=>{r()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&tn(u,R(a.value,f))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&nn(u,R(a.value,f))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=ut(u,n);return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,o.value}}function ut(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Ln(){if(!K)return Y(!1);const{ssr:e}=xt();if(e){const n=Y(!1);return _t(()=>{n.value=!0}),n}else return Y(!0)}function ft(){const n=Se("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const je=Symbol.for("vuetify:stack"),Q=Ge([]);function Fn(e,n,t){const o=Se("useStack"),a=!t,i=ke(je,void 0),r=Ge({activeChildren:new Set});Xe(je,r);const s=Y(+n.value);_e(e,()=>{var p;const d=(p=Q.at(-1))==null?void 0:p[1];s.value=d?d+10:+n.value,a&&Q.push([o.uid,s.value]),i==null||i.activeChildren.add(o.uid),W(()=>{if(a){const x=St(Q).findIndex(g=>g[0]===o.uid);Q.splice(x,1)}i==null||i.activeChildren.delete(o.uid)})});const u=Y(!0);a&&Ee(()=>{var p;const d=((p=Q.at(-1))==null?void 0:p[0])===o.uid;setTimeout(()=>u.value=d)});const f=P(()=>!r.activeChildren.size);return{globalTop:Et(u),localTop:f,stackStyles:P(()=>({zIndex:s.value}))}}function Mn(e){return{teleportTarget:P(()=>{const t=e.value;if(t===!0||!K)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Vn(){return!0}function dt(e,n,t){if(!e||vt(e,t)===!1)return!1;const o=rt(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function vt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Vn)(e)}function Bn(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&dt(e,n,t)&&setTimeout(()=>{vt(e,t)&&o&&o(e)},0)}function qe(e,n){const t=rt(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Dn={mounted(e,n){const t=a=>Bn(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=dt(a,e,n)};qe(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(qe(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Rn(e){const{modelValue:n,color:t,...o}=e;return _(he,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&_("div",R({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const mt=U({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Pn(),...Ue(),...Wt(),...Xt(),...gn(),...xn(),...kt(),...Qt()},"VOverlay"),We=re()({name:"VOverlay",directives:{ClickOutside:Dn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...mt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=Qe(e,"modelValue"),r=P({get:()=>i.value,set:k=>{k&&e.disabled||(i.value=k)}}),{teleportTarget:s}=Mn(P(()=>e.attach||e.contained)),{themeClasses:u}=Ot(e),{rtlClasses:f,isRtl:d}=Ct(),{hasContent:p,onAfterLeave:x}=Zt(e,r),g=zt(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:v,localTop:c,stackStyles:y}=Fn(r,Pt(e,"zIndex"),e._disableGlobalStack),{activatorEl:w,activatorRef:h,target:b,targetEl:F,targetRef:B,activatorEvents:T,contentEvents:l,scrimEvents:M}=An(e,{isActive:r,isTop:c}),{dimensionStyles:ce}=Kt(e),ue=Ln(),{scopeId:O}=ft();V(()=>e.disabled,k=>{k&&(r.value=!1)});const S=I(),m=I(),{contentStyles:E,updateLocation:D}=yn(e,{isRtl:d,contentEl:m,target:b,isActive:r});_n(e,{root:S,contentEl:m,targetEl:F,isActive:r,updateLocation:D});function N(k){a("click:outside",k),e.persistent?$():r.value=!1}function G(){return r.value&&v.value}K&&V(r,k=>{k?window.addEventListener("keydown",A):window.removeEventListener("keydown",A)},{immediate:!0}),At(()=>{K&&window.removeEventListener("keydown",A)});function A(k){var j,Pe;k.key==="Escape"&&v.value&&(e.persistent?$():(r.value=!1,(j=m.value)!=null&&j.contains(document.activeElement)&&((Pe=w.value)==null||Pe.focus())))}const z=Ut();_e(()=>e.closeOnBack,()=>{Yt(z,k=>{v.value&&r.value?(k(!1),e.persistent?$():r.value=!1):k()})});const X=I();V(()=>r.value&&(e.absolute||e.contained)&&s.value==null,k=>{if(k){const j=an(S.value);j&&j!==document.scrollingElement&&(X.value=j.scrollTop)}});function $(){e.noClickAnimation||m.value&&Z(m.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:pe})}function gt(){x(),a("afterLeave")}return Ze(()=>{var k;return _(Je,null,[(k=t.activator)==null?void 0:k.call(t,{isActive:r.value,props:R({ref:h,targetRef:B},T.value,e.activatorProps)}),ue.value&&p.value&&_(Tt,{disabled:!s.value,to:s.value},{default:()=>[_("div",R({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},u.value,f.value,e.class],style:[y.value,{top:H(X.value)},e.style],ref:S},O,o),[_(Rn,R({color:g,modelValue:r.value&&!!e.scrim},M.value),null),_(Jt,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:gt},{default:()=>{var j;return[Lt(_("div",R({ref:m,class:["v-overlay__content",e.contentClass],style:[ce.value,E.value]},l.value,e.contentProps),[(j=t.default)==null?void 0:j.call(t,{isActive:r})]),[[Ft,r.value],[Mt("click-outside"),{handler:N,closeConditional:G,include:()=>[w.value]}]])]}})])]})])}),{activatorEl:w,target:b,animateClick:$,contentEl:m,globalTop:v,localTop:c,updateLocation:D}}}),In=U({id:String,...Vt(mt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:vn}}),["absolute"])},"VMenu"),Nn=re()({name:"VMenu",props:In(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Qe(e,"modelValue"),{scopeId:a}=ft(),i=Bt(),r=P(()=>e.id||`v-menu-${i}`),s=I(),u=ke(xe,null),f=Y(0);Xe(xe,{register(){++f.value},unregister(){--f.value},closeParents(){setTimeout(()=>{f.value||(o.value=!1,u==null||u.closeParents())},40)}});async function d(c){var h,b,F;const y=c.relatedTarget,w=c.target;await ee(),o.value&&y!==w&&((h=s.value)!=null&&h.contentEl)&&((b=s.value)!=null&&b.globalTop)&&![document,s.value.contentEl].includes(w)&&!s.value.contentEl.contains(w)&&((F=Le(s.value.contentEl)[0])==null||F.focus())}V(o,c=>{c?(u==null||u.register(),document.addEventListener("focusin",d,{once:!0})):(u==null||u.unregister(),document.removeEventListener("focusin",d))});function p(){u==null||u.closeParents()}function x(c){var y,w,h;e.disabled||c.key==="Tab"&&(Dt(Le((y=s.value)==null?void 0:y.contentEl,!1),c.shiftKey?"prev":"next",F=>F.tabIndex>=0)||(o.value=!1,(h=(w=s.value)==null?void 0:w.activatorEl)==null||h.focus()))}function g(c){var w;if(e.disabled)return;const y=(w=s.value)==null?void 0:w.contentEl;y&&o.value?c.key==="ArrowDown"?(c.preventDefault(),Fe(y,"next")):c.key==="ArrowUp"&&(c.preventDefault(),Fe(y,"prev")):["ArrowDown","ArrowUp"].includes(c.key)&&(o.value=!0,c.preventDefault(),setTimeout(()=>setTimeout(()=>g(c))))}const v=P(()=>R({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":r.value,onKeydown:g},e.activatorProps));return Ze(()=>{const c=We.filterProps(e);return _(We,R({ref:s,class:["v-menu",e.class],style:e.style},c,{modelValue:o.value,"onUpdate:modelValue":y=>o.value=y,absolute:!0,activatorProps:v.value,"onClick:outside":p,onKeydown:x},a),{activator:t.activator,default:function(){for(var y=arguments.length,w=new Array(y),h=0;h<y;h++)w[h]=arguments[h];return _(Gt,{root:"VMenu"},{default:()=>{var b;return[(b=t.default)==null?void 0:b.call(t,...w)]}})}})}),en({id:r,ΨopenChildren:f},s)}}),le=e=>(tt("data-v-ed1ceb93"),e=e(),nt(),e),Hn={class:"d-flex align-center justify-space-between flex-wrap pa-4"},$n=le(()=>C("img",{width:"100px",src:cn,class:"mr-4"},null,-1)),jn={class:"d-flex flex-column base-card base-card-card ml-4"},qn=le(()=>C("div",{class:"d-flex align-center justify-center"},[C("p",{class:"header"},"Contact & Social Links")],-1)),Wn={class:"d-flex flex-column mt-2 base-card base-card-menu",style:{gap:"0.6rem"}},zn={class:"d-flex align-center",style:{gap:"0.6rem"}},Kn=le(()=>C("p",null,"ferasatali14@gmail.com",-1)),Un={class:"d-flex align-center",style:{gap:"0.6rem"}},Yn=le(()=>C("p",null,"03424658936",-1)),Gn=["src"],Xn=["href"],Qn={class:"d-flex flex-column mt-2 base-card base-card-menu"},Zn=Oe({__name:"HeaderComponent",setup(e){const n=I(!1);return(t,o)=>{const a=et("RouterLink");return J(),fe("div",Hn,[_(a,{to:"/"},{default:L(()=>[$n]),_:1}),_(fn),C("div",null,[_(Nn,{location:"left","close-on-content-click":!1,"model-value":n.value,"onUpdate:modelValue":o[0]||(o[0]=i=>n.value=i)},{activator:L(({props:i})=>[_(ne,R({class:"text-capitalize free-trail-btn",height:"45px"},i),{default:L(()=>[q(" Connect With Ferasat ")]),_:2},1040)]),default:L(()=>[C("div",jn,[qn,C("div",Wn,[C("div",zn,[_(te,null,{default:L(()=>[q(" mdi-email ")]),_:1}),Kn]),C("div",Un,[_(te,null,{default:L(()=>[q(" mdi-phone ")]),_:1}),Yn])]),(J(!0),fe(Je,null,Rt(It(un),(i,r)=>(J(),fe("div",{class:"d-flex align-center flex-row mt-3 base-card base-card-menu",style:{gap:"0.6rem"},key:r},[C("img",{width:"25px",class:"social-icons",src:i.icon},null,8,Gn),C("p",null,[q(Nt(i.name)+" : ",1),C("a",{href:i.link,target:"_blank"}," MFerasatAli",8,Xn)])]))),128)),C("div",Qn,[_(ne,{variant:"text",href:"https://drive.google.com/file/d/1NKosJ2dj94GCBNEzmjgpjcA82yuKfUsp/view?usp=sharing",target:"_blank"},{default:L(()=>[_(te,{class:"mr-2"},{default:L(()=>[q(" mdi-download ")]),_:1}),q(" Resume ")]),_:1}),_(ne,{variant:"text",href:"https://drive.google.com/file/d/18a37mXxFUQZzhxqfwQeBEKYo-eIKSacu/view?usp=sharing",target:"_blank"},{default:L(()=>[_(te,{class:"mr-2"},{default:L(()=>[q(" mdi-download ")]),_:1}),q(" Cover Letter ")]),_:1})])])]),_:1},8,["model-value"])])])}}});const Jn=ot(Zn,[["__scopeId","data-v-ed1ceb93"]]),eo=Oe({__name:"View",setup(e){return(n,t)=>{const o=et("router-view");return J(),at(Ht,null,{default:L(()=>[_(o)]),_:1})}}}),to=e=>(tt("data-v-ca8e24e4"),e=e(),nt(),e),no={class:"app-container"},oo={class:"mt-auto d-flex align-center justify-center pt-7"},ao=to(()=>C("img",{src:ln},null,-1)),io=Oe({__name:"Default",setup(e){return(n,t)=>(J(),at($t,null,{default:L(()=>[C("div",no,[_(Jn),_(eo)]),C("div",oo,[_(ne,{variant:"text",class:"btn-explore",to:"/discover"},{prepend:L(()=>[ao]),default:L(()=>[q(" Discover ")]),_:1})])]),_:1}))}});const co=ot(io,[["__scopeId","data-v-ca8e24e4"]]);export{co as default};
