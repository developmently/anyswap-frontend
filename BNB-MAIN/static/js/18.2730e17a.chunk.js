(this.webpackJsonpuniswap=this.webpackJsonpuniswap||[]).push([[18],{1289:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r=t(0),a=t.n(r);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t,r=arguments[n];for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function o(e){var n=e.svgRef,t=e.title,r=function(e,n){if(null==e)return{};var t,r=function(e,n){if(null==e)return{};for(var t,r={},a=Object.keys(e),i=0;i<a.length;i++)t=a[i],0<=n.indexOf(t)||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),i=0;i<a.length;i++)t=a[i],0<=n.indexOf(t)||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t]);return r}(e,["svgRef","title"]);return a.a.createElement("svg",i({width:12,height:7,viewBox:"0 0 12 7",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,c)}var c=a.a.createElement("path",{d:"M0.97168 1L6.20532 6L11.439 1",stroke:"#2F80ED"}),u=a.a.forwardRef(function(e,n){return a.a.createElement(o,i({svgRef:n},e))});t.p},1295:function(e,n,t){"use strict";t.d(n,"a",function(){return m});var r=t(3),a=t(0),i=t.n(a),o=t(4);function c(){var e=Object(r.a)(["\n  position: absolute;\n  top: 80%;\n  left: 0;\n  height: 1rem;\n  width: 100%;\n  background-color: ",";\n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n  content: '';\n  position: absolute;\n  top: -0.5rem;\n  left: 0;\n  height: 1rem;\n  width: 100%;\n  background-color: ",";\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  position: relative;\n  width: calc(100% - 1rem);\n  margin: 0 auto;\n  border-radius: 0.625rem;\n"]);return l=function(){return e},e}var d=o.d.div(l());function m(e){e.hideTop,e.hideBottom;var n=e.children;return i.a.createElement(d,null,n)}o.d.div(u(),function(e){return e.theme.concreteGray}),o.d.div(c(),function(e){return e.theme.concreteGray})},1827:function(e,n,t){"use strict";t.r(n);var m=t(0),f=t.n(m),r=t(28),s=t(8),a=t(157),i=t(3),o=t(108),h=t(36),c=t(4),u=(t(1295),t(1289)),b=(t(237),t(14)),l=t(16),d=t(27);function p(){var e=Object(i.a)(["\nmargin-bottom: 0;\n"]);return p=function(){return e},e}function g(){var e=Object(i.a)(["\n  ","\n  height: 38px;\n  font-family: 'Manrope';\n  font-size: 0.75rem;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  color: #96989e;\n  border-top: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  cursor:pointer;\n  text-decoration: none;\n  padding: 0 0.625rem;\n  background:#fff;\n  white-space:nowrap;\n\n  .icon {\n    ","\n    width: 28px;\n    height: 28px;\n    background:#f5f5f5;\n    border-radius:100%;\n    margin-right:0.625rem;\n  }\n  &:first-child {\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px;\n    &.active {\n      border: 0.0625rem solid #734be2;\n    }\n  }\n  &:last-child {\n    border-top-right-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-right: 0.0625rem solid rgba(0, 0, 0, 0.04);\n    &.active {\n      border: 0.0625rem solid #734be2;\n    }\n  }\n\n  &."," {\n    border: 0.0625rem solid #734be2;\n    color: #734be2;\n    font-weight: bold;\n    .icon {\n      background: #734be2;\n    }\n  }\n  @media screen and (max-width: 960px) {\n    .icon {\n      display:none;\n    }\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(i.a)(["\n  ","\n  list-style: none;\n  margin: 0;\n  padding:0;\n"]);return v=function(){return e},e}function x(){var e=Object(i.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return x=function(){return e},e}function O(){var e=Object(i.a)(["\n  background-color: ",";\n  width: 100%;\n  height: 100%;\n  padding: 2rem 0 2rem 0;\n"]);return O=function(){return e},e}function y(){var e=Object(i.a)(["\n  flex: 1 0 auto;\n"]);return y=function(){return e},e}function j(){var e=Object(i.a)(["\n  ",";\n  align-items: center;\n  font-size: 1rem;\n  font-family: 'Manrope';\n  color: ",";\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 1rem;\n\n  :hover {\n    color: ",";\n  }\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return j=function(){return e},e}var E=[{path:"/add-liquidity",textKey:"addLiquidity",icon:t(489),iconActive:t(488),regex:/\/add-liquidity/},{path:"/remove-liquidity",textKey:"removeLiquidity",icon:t(508),iconActive:t(506),regex:/\/remove-liquidity/},{path:"/create-exchange",textKey:"createExchange",icon:t(500),iconActive:t(498),regex:/\/create-exchange.*/}],w=c.d.div(j(),function(e){return e.theme.FlexBC},function(e){return e.theme.royalBlue},function(e){var n=e.theme;return Object(l.b)(.1,n.royalBlue)}),k=(c.d.span(y()),c.d.div(O(),function(e){return e.theme.inputBackground}),Object(c.d)(function(e){e.isError,e.highSlippageWarning;var n=Object(a.a)(e,["isError","highSlippageWarning"]);return f.a.createElement(u.a,n)})(x(),function(e){return e.theme.royalBlue}),c.d.ul(v(),function(e){return e.theme.FlexSC})),A=Object(c.d)(o.c).attrs({activeClassName:"MODE"})(g(),function(e){return e.theme.FlexC},function(e){return e.theme.FlexC},"MODE"),q=Object(c.d)(d.f)(p()),C=Object(r.g)(function(e){var o=e.location.pathname,t=e.history,c=Object(h.b)().t,n=Object(m.useState)(!1),r=Object(s.a)(n,2),a=r[0],i=(r[1],E[E.findIndex(function(e){var n=e.regex;return o.match(n)})].textKey),u=Object(m.useCallback)(function(e){var n=E.findIndex(function(e){var n=e.regex;return o.match(n)});t.push(E[(n+E.length+e)%E.length].path)},[o,t]),l=Object(m.useCallback)(function(){u(1)},[u]),d=Object(m.useCallback)(function(){u(-1)},[u]);return Object(b.a)("ArrowDown",l,a),Object(b.a)("ArrowUp",d,a),f.a.createElement(w,null,f.a.createElement(q,null,c(i)),f.a.createElement(k,null,E.map(function(e){var n=e.path,t=e.textKey,r=e.regex,a=e.icon,i=e.iconActive;return f.a.createElement(A,{key:n,to:n,isActive:function(e,n){return n.pathname.match(r)}},f.a.createElement("div",{className:"icon"},f.a.createElement("img",{alt:"",src:o.match(r)?i:a})),c(t))})))});t.d(n,"default",function(){return P});var B=Object(m.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(15)]).then(t.bind(null,1828))}),S=Object(m.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(16)]).then(t.bind(null,1829))}),F=Object(m.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(14)]).then(t.bind(null,1824))});function P(e){var n=e.params;return f.a.createElement(f.a.Fragment,null,f.a.createElement(C,null),f.a.createElement(m.Suspense,{fallback:null},f.a.createElement(r.d,null,f.a.createElement(r.b,{exact:!0,strict:!0,path:"/add-liquidity",component:function(){return f.a.createElement(B,{params:n})}}),f.a.createElement(r.b,{exact:!0,strict:!0,path:"/remove-liquidity",component:function(){return f.a.createElement(S,{params:n})}}),f.a.createElement(r.b,{exact:!0,strict:!0,path:"/create-exchange",component:function(){return f.a.createElement(F,{params:n})}}),f.a.createElement(r.b,{path:"/create-exchange/:tokenAddress",render:function(e){var n=e.match;return f.a.createElement(r.a,{to:{pathname:"/create-exchange",state:{tokenAddress:n.params.tokenAddress}}})}}),f.a.createElement(r.a,{to:"/add-liquidity"}))))}}}]);