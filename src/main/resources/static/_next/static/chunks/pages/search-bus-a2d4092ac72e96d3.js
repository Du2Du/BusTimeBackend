(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{5661:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search-bus",function(){return s(9543)}])},9543:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return m}});var t=s(5893),r=s(7294),i=s(9363),a=s(5244),c=s(2007),o=s(1163),u=s(5621),l=s(1173),h=s(2083),d=s(2866),_=s(9621),f=s.n(_),v=function(){var n=(0,r.useState)(),e=n[0],s=n[1],a=(0,o.useRouter)().query.line;(0,r.useEffect)((function(){c()}),[a]);var c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;l.z.get("".concat(u.M.FILTER_BUS,"?line=").concat(a,"&size=10&page=").concat(n)).then((function(n){return s(n.data)})).catch(h.x)};return(0,t.jsxs)("div",{className:f().listAll,children:[(0,t.jsxs)("h1",{children:["Rotas da linha: ",a]}),0===(null===e||void 0===e?void 0:e.content.length)?(0,t.jsx)("h2",{className:"".concat(f().not," mt-3"),children:"Nenhuma Rota de \xd4nibus encontrado"}):e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:f().list,children:e.content.map((function(n){return(0,t.jsx)("div",{className:f().item,children:(0,t.jsx)(d.V,{bus:n})},n.id)}))}),(0,t.jsx)(i.tl,{reloadItens:c,pagination:e,showTotal:!0})]})]})},m=(0,a.m)((function(){return(0,t.jsxs)("div",{className:f().searchBus,children:[(0,t.jsx)(i.Sd,{title:"Pesquisar"}),(0,t.jsx)(c.h,{}),(0,t.jsx)(v,{})]})}))},2083:function(n,e,s){"use strict";s.d(e,{x:function(){return r}});var t=s(4931),r=function(n){if(!(null===n||void 0===n?void 0:n.isCanceled)&&n){var e=n.response.data,s=e.message,r=e.errors;return r.length>0?t.Am.error(r[0]):s?t.Am.error(s):void t.Am.error("N\xe3o foi poss\xedvel fazer isso no momento")}}},9621:function(n){n.exports={searchBus:"SearchBus_searchBus__v_BK7",not:"SearchBus_not__a4BhA",listAll:"SearchBus_listAll__ENRXM",list:"SearchBus_list__D4His",item:"SearchBus_item__fY7Ra"}}},function(n){n.O(0,[980,617,955,874,791,774,888,179],(function(){return e=5661,n(n.s=e);var e}));var e=n.O();_N_E=e}]);