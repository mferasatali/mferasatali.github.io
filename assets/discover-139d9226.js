import{V as oe,A as be,a as he,b as pe}from"./app-483a0bd3.js";import{g as L,T as ye}from"./TextPlugin-190e56bf.js";import{p as K,U as xe,g as J,j as x,z as P,r as H,N as Z,b as c,S as Se,d as X,ae as ne,m as _e,af as Ce,ag as de,K as ke,A as Te,ah as ie,I as we,w as Ve,W as ze,l as Pe,H as Re,L as z,ai as Be,k as Ie,aj as Ae,Z as Me,ak as $e,B as Ee,_ as Oe,$ as Fe,aa as He,a1 as _,ac as Ge,a2 as T,a3 as E,a7 as je,a8 as Ne,a9 as De}from"./index-f7d58602.js";import{r as Ue,t as We,o as Y,a as qe,s as Le,v as Xe,w as Ye,q as ue,x as Ke,y as Je,u as Ze}from"./VGrid-be8e2964.js";const Qe="/assets/augur-(rep)-0d2a4e2c.svg",et="/assets/dent-(dent)-e38d562a.svg",tt="/assets/civic-(cvc)-1be24508.svg",at="/assets/wanchain-(wan)-aa053263.svg";const fe=Symbol.for("vuetify:v-tabs"),lt=K({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...xe(Ue({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),O=J()({name:"VTab",props:lt(),setup(e,u){let{slots:s,attrs:r}=u;const{textColorClasses:g,textColorStyles:d}=We(e,"sliderColor"),l=x(()=>e.direction==="horizontal"),n=P(!1),t=H(),i=H();function f(v){var R,m;let{value:b}=v;if(n.value=b,b){const w=(m=(R=t.value)==null?void 0:R.$el.parentElement)==null?void 0:m.querySelector(".v-tab--selected .v-tab__slider"),B=i.value;if(!w||!B)return;const j=getComputedStyle(w).color,p=w.getBoundingClientRect(),S=B.getBoundingClientRect(),V=l.value?"x":"y",I=l.value?"X":"Y",F=l.value?"right":"bottom",C=l.value?"width":"height",N=p[V],A=S[V],k=N>A?p[F]-S[F]:p[V]-S[V],D=Math.sign(k)>0?l.value?"right":"bottom":Math.sign(k)<0?l.value?"left":"top":"center",U=(Math.abs(k)+(Math.sign(k)<0?p[C]:S[C]))/Math.max(p[C],S[C])||0,h=p[C]/S[C]||0,M=1.5;qe(B,{backgroundColor:[j,"currentcolor"],transform:[`translate${I}(${k}px) scale${I}(${h})`,`translate${I}(${k/M}px) scale${I}(${(U-1)/M+1})`,"none"],transformOrigin:Array(3).fill(D)},{duration:225,easing:Le})}}return Z(()=>{const v=Y.filterProps(e);return c(Y,X({symbol:fe,ref:t,class:["v-tab",e.class],style:e.style,tabindex:n.value?0:-1,role:"tab","aria-selected":String(n.value),active:!1},v,r,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":f}),{...s,default:()=>{var b;return c(Se,null,[((b=s.default)==null?void 0:b.call(s))??e.text,!e.hideSlider&&c("div",{ref:i,class:["v-tab__slider",g.value],style:d.value},null)])}})}),{}}});function re(e){const s=Math.abs(e);return Math.sign(e)*(s/((1/.501-2)*(1-s)+1))}function ce(e){let{selectedElement:u,containerSize:s,contentSize:r,isRtl:g,currentScrollOffset:d,isHorizontal:l}=e;const n=l?u.clientWidth:u.clientHeight,t=l?u.offsetLeft:u.offsetTop,i=g&&l?r-t-n:t,f=s+d,v=n+i,b=n*.4;return i<=d?d=Math.max(i-b,0):f<=v&&(d=Math.min(d-(f-v-b),r-s)),d}function st(e){let{selectedElement:u,containerSize:s,contentSize:r,isRtl:g,isHorizontal:d}=e;const l=d?u.clientWidth:u.clientHeight,n=d?u.offsetLeft:u.offsetTop,t=g&&d?r-n-l/2-s/2:n+l/2-s/2;return Math.min(r-s,Math.max(0,t))}const ot=Symbol.for("vuetify:v-slide-group"),me=K({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ot},nextIcon:{type:ne,default:"$next"},prevIcon:{type:ne,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},..._e(),...Ce(),...de(),...Xe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ve=J()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const{isRtl:r}=ke(),{displayClasses:g,mobile:d}=Te(e),l=Ye(e,e.symbol),n=P(!1),t=P(0),i=P(0),f=P(0),v=x(()=>e.direction==="horizontal"),{resizeRef:b,contentRect:R}=ie(),{resizeRef:m,contentRect:w}=ie(),B=x(()=>l.selected.value.length?l.items.value.findIndex(a=>a.id===l.selected.value[0]):-1),j=x(()=>l.selected.value.length?l.items.value.findIndex(a=>a.id===l.selected.value[l.selected.value.length-1]):-1);if(we){let a=-1;Ve(()=>[l.selected.value,R.value,w.value,v.value],()=>{cancelAnimationFrame(a),a=requestAnimationFrame(()=>{if(R.value&&w.value){const o=v.value?"width":"height";i.value=R.value[o],f.value=w.value[o],n.value=i.value+1<f.value}if(B.value>=0&&m.value){const o=m.value.children[j.value];B.value===0||!n.value?t.value=0:e.centerActive?t.value=st({selectedElement:o,containerSize:i.value,contentSize:f.value,isRtl:r.value,isHorizontal:v.value}):n.value&&(t.value=ce({selectedElement:o,containerSize:i.value,contentSize:f.value,isRtl:r.value,currentScrollOffset:t.value,isHorizontal:v.value}))}})})}const p=P(!1);let S=0,V=0;function I(a){const o=v.value?"clientX":"clientY";V=(r.value&&v.value?-1:1)*t.value,S=a.touches[0][o],p.value=!0}function F(a){if(!n.value)return;const o=v.value?"clientX":"clientY",y=r.value&&v.value?-1:1;t.value=y*(V+S-a.touches[0][o])}function C(a){const o=f.value-i.value;t.value<0||!n.value?t.value=0:t.value>=o&&(t.value=o),p.value=!1}function N(){b.value&&(b.value[v.value?"scrollLeft":"scrollTop"]=0)}const A=P(!1);function k(a){if(A.value=!0,!(!n.value||!m.value)){for(const o of a.composedPath())for(const y of m.value.children)if(y===o){t.value=ce({selectedElement:y,containerSize:i.value,contentSize:f.value,isRtl:r.value,currentScrollOffset:t.value,isHorizontal:v.value});return}}}function D(a){A.value=!1}function Q(a){var o;!A.value&&!(a.relatedTarget&&((o=m.value)!=null&&o.contains(a.relatedTarget)))&&h()}function U(a){m.value&&(v.value?a.key==="ArrowRight"?h(r.value?"prev":"next"):a.key==="ArrowLeft"&&h(r.value?"next":"prev"):a.key==="ArrowDown"?h("next"):a.key==="ArrowUp"&&h("prev"),a.key==="Home"?h("first"):a.key==="End"&&h("last"))}function h(a){var o,y,ae,le,se;if(m.value)if(!a)(o=ze(m.value)[0])==null||o.focus();else if(a==="next"){const $=(y=m.value.querySelector(":focus"))==null?void 0:y.nextElementSibling;$?$.focus():h("first")}else if(a==="prev"){const $=(ae=m.value.querySelector(":focus"))==null?void 0:ae.previousElementSibling;$?$.focus():h("last")}else a==="first"?(le=m.value.firstElementChild)==null||le.focus():a==="last"&&((se=m.value.lastElementChild)==null||se.focus())}function M(a){const o=t.value+(a==="prev"?-1:1)*i.value;t.value=Pe(o,0,f.value-i.value)}const ge=x(()=>{let a=t.value>f.value-i.value?-(f.value-i.value)+re(f.value-i.value-t.value):-t.value;t.value<=0&&(a=re(-t.value));const o=r.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${o*a}px)`,transition:p.value?"none":"",willChange:p.value?"transform":""}}),W=x(()=>({next:l.next,prev:l.prev,select:l.select,isSelected:l.isSelected})),q=x(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return n.value||Math.abs(t.value)>0;case"mobile":return d.value||n.value||Math.abs(t.value)>0;default:return!d.value&&(n.value||Math.abs(t.value)>0)}}),ee=x(()=>Math.abs(t.value)>0),te=x(()=>f.value>Math.abs(t.value)+i.value);return Z(()=>c(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":q.value,"v-slide-group--is-overflowing":n.value},g.value,e.class],style:e.style,tabindex:A.value||l.selected.value.length?-1:0,onFocus:Q},{default:()=>{var a,o,y;return[q.value&&c("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ee.value}],onClick:()=>ee.value&&M("prev")},[((a=s.prev)==null?void 0:a.call(s,W.value))??c(oe,null,{default:()=>[c(ue,{icon:r.value?e.nextIcon:e.prevIcon},null)]})]),c("div",{key:"container",ref:b,class:"v-slide-group__container",onScroll:N},[c("div",{ref:m,class:"v-slide-group__content",style:ge.value,onTouchstartPassive:I,onTouchmovePassive:F,onTouchendPassive:C,onFocusin:k,onFocusout:D,onKeydown:U},[(o=s.default)==null?void 0:o.call(s,W.value)])]),q.value&&c("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!te.value}],onClick:()=>te.value&&M("next")},[((y=s.next)==null?void 0:y.call(s,W.value))??c(oe,null,{default:()=>[c(ue,{icon:r.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:l.selected,scrollTo:M,scrollOffset:t,focus:h}}});function nt(e){return e?e.map(u=>Ae(u)?u:{text:u,value:u}):[]}const it=K({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...me({mandatory:"force"}),...Ke(),...de()},"VTabs"),ut=J()({name:"VTabs",props:it(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const r=Re(e,"modelValue"),g=x(()=>nt(e.items)),{densityClasses:d}=Je(e),{backgroundColorClasses:l,backgroundColorStyles:n}=Ze(z(e,"bgColor"));return Be({VTab:{color:z(e,"color"),direction:z(e,"direction"),stacked:z(e,"stacked"),fixed:z(e,"fixedTabs"),sliderColor:z(e,"sliderColor"),hideSlider:z(e,"hideSlider")}}),Z(()=>{const t=ve.filterProps(e);return c(ve,X(t,{modelValue:r.value,"onUpdate:modelValue":i=>r.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},d.value,l.value,e.class],style:[{"--v-tabs-height":Ie(e.height)},n.value,e.style],role:"tablist",symbol:fe}),{default:()=>[s.default?s.default():g.value.map(i=>c(O,X(i,{key:i.text}),null))]})}),{}}}),G=e=>(je("data-v-13d806af"),e=e(),Ne(),e),rt={class:"mt-4"},ct=G(()=>T("img",{src:Qe,class:"pl-7"},null,-1)),vt=G(()=>T("img",{src:et,class:"pl-7"},null,-1)),dt=G(()=>T("img",{src:tt,class:"pl-7"},null,-1)),ft=G(()=>T("img",{src:at,class:"pl-7"},null,-1)),mt={style:{"max-width":"1700px",margin:"0 auto"}},gt={class:"mt-auto"},bt=Me({__name:"discover",setup(e){const u=$e();L.registerPlugin(ye);const s=H(null);Ee(()=>{L.to(s.value,{duration:1,opacity:1,display:"block",x:1,y:1})});const r=be(),g=H(1),d=n=>{r.setExploreCurrentTab(n)},l=async()=>{await L.to(s.value,{opacity:1,delay:.6,x:"-50px",y:"1000"}),u.back()};return(n,t)=>{const i=Oe("router-view");return Fe(),He(Ge,null,{default:_(()=>[T("div",{ref_key:"animation",ref:s,class:"animation"},[T("div",rt,[c(ut,{modelValue:g.value,"onUpdate:modelValue":[t[0]||(t[0]=f=>g.value=f),d],color:"deep-white-accent-4","align-tabs":"center"},{default:_(()=>[c(O,{value:1},{default:_(()=>[E("Journey "),ct]),_:1}),c(O,{value:2},{default:_(()=>[E("Experience "),vt]),_:1}),c(O,{value:3},{default:_(()=>[E("Projects "),dt]),_:1}),c(O,{value:5},{default:_(()=>[E("Contact Me "),ft]),_:1})]),_:1},8,["modelValue"])]),T("div",mt,[c(i)])],512),T("div",gt,[c(pe,{align:"center",class:"px-10 mb-6 align-center justify-space-between"},{default:_(()=>[c(he,{cols:"12",class:"d-flex align-center justify-center mt-0 pt-0"},{default:_(()=>[c(Y,{variant:"text",class:"btn-explore",onClick:l,"prepend-icon":"mdi-close"},{default:_(()=>[E(" Close ")]),_:1})]),_:1})]),_:1})])]),_:1})}}});const St=De(bt,[["__scopeId","data-v-13d806af"]]);export{St as default};
