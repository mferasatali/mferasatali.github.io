import{p as f,ap as h,X as p,e as k,g as x,aq as y,R as S,ar as w,a6 as C,f as L,a2 as V,s as B,as as T,i as P,a as s}from"./index-dcd553f5.js";const _={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function A(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[t])}function r(e){const[t,a]=e.split("@");return Array.from({length:a}).map(()=>n(t))}function n(e){let t=[];if(!e)return t;const a=_[e];if(e!==a){if(e.includes(","))return o(e);if(e.includes("@"))return r(e);a.includes(",")?t=o(a):a.includes("@")?t=r(a):a&&t.push(n(a))}return[A(e,t)]}function o(e){return e.replace(/\s/g,"").split(",").map(n)}const R=f({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...h(),...p(),...k()},"VSkeletonLoader"),D=x()({name:"VSkeletonLoader",props:R(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:d,backgroundColorStyles:u}=y(S(e,"color")),{dimensionStyles:c}=w(e),{elevationClasses:g}=C(e),{themeClasses:v}=L(e),{t:m}=V(),b=B(()=>n(T(e.type).join(",")));return P(()=>{var l;const i=!a.default||e.loading;return s("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},v.value,d.value,g.value],style:[u.value,i?c.value:{}],"aria-busy":e.boilerplate?void 0:i,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:m(e.loadingText),role:e.boilerplate?void 0:"alert"},[i?b.value:(l=a.default)==null?void 0:l.call(a)])}),{}}});export{D as V};
