(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[299],{9095:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-bus",function(){return t(7461)}])},5218:function(e,r,t){"use strict";t.d(r,{$:function(){return b}});var a=t(5893),i=t(1163),n=t.n(i),s=t(7294),o=t(7536),l=t(9363),u=t(8929),c=t(3377),f=t(4780),d=t.n(f);function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var b=function(e){var r=e.sendingData,t=e.isCreate,i=void 0!==t&&t,f=e.fieldValues,b=(0,o.cI)(),v=b.register,g=b.handleSubmit,h=b.setValue,p=(b.getValues,(0,u.S)().userData);(0,s.useEffect)((function(){if(f){var e=["line","hour","ticketPrice","inicialRoute","finalRoute","busNumber"];null===e||void 0===e||e.forEach((function(e){return h(e,f[e])}))}}),[f]);return(0,a.jsxs)("section",{className:d().section,children:[(0,a.jsxs)("h1",{className:"text-3xl mb-3",children:[i?"Registre":"Atualize"," agora uma Rota"]}),(0,a.jsxs)("form",{onSubmit:g((function(e){if(null===p||void 0===p?void 0:p.id){var t=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){m(e,r,t[r])}))}return e}({},e,{idUserAdmin:p.id});r(t)}})),className:"fields",children:[(0,a.jsx)(l.II,{register:v("line",{required:!!i}),className:"my-2",label:"Linha",placeHolder:"Linha"}),(0,a.jsx)(l.II,{register:v("hour",{required:!!i}),className:"my-2",label:"Hor\xe1rio",placeHolder:"Hor\xe1rio"}),(0,a.jsx)(l.II,{register:v("ticketPrice",{required:!!i,valueAsNumber:!0}),className:"my-2",label:"Pre\xe7o da Passagem",placeHolder:"Pre\xe7o da Passagem"}),(0,a.jsx)(l.II,{register:v("inicialRoute",{required:!!i}),className:"my-2",label:"Rota Inicial",placeholder:"Rota Inicial"}),(0,a.jsx)(l.II,{register:v("finalRoute",{required:!!i}),className:"my-2",label:"Rota Final",placeHolder:"Rota Final"}),(0,a.jsx)(l.II,{register:v("busNumber",{required:!!i}),className:"my-2",label:"N\xfamero",placeHolder:"N\xfamero"}),(0,a.jsx)(l.zx,{type:"submit",btnLabel:i?"Cadastrar":"Salvar",className:"mb-4 mt-3"}),!i&&(0,a.jsx)(l.RE,{type:"button",onClick:function(){n().push(c.M.BUS)},btnLabel:"Voltar",className:"mb-4 ml-2 mt-3"})]})]})}},7461:function(e,r,t){"use strict";t.r(r);var a=t(5893),i=(t(7294),t(4931)),n=t(5621),s=t(9363),o=t(5244),l=t(8058),u=t(5218),c=t(2007),f=t(1173),d=t(2083),m=(0,o.m)((function(){var e=(0,l.l)(),r=e.setTrue,t=e.setFalse;return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Sd,{title:"Criar \xd4nibus"}),(0,a.jsx)(c.h,{}),(0,a.jsx)(u.$,{isCreate:!0,sendingData:function(e){r(),f.z.post(n.M.CREATE_BUS,e).then((function(){i.ZP.success("\xd4nibus criado com sucesso!")})).catch(d.x).finally(t)}})]})}),!0);r.default=m},2083:function(e,r,t){"use strict";t.d(r,{x:function(){return i}});var a=t(4931),i=function(e){if(!(null===e||void 0===e?void 0:e.isCanceled)&&e){var r=e.response.data,t=r.message,i=r.errors;return i.length>0?a.Am.error(i[0]):t?a.Am.error(t):void a.Am.error("N\xe3o foi poss\xedvel fazer isso no momento")}}},4780:function(e){e.exports={section:"BusPage_section__HyCCq",field:"BusPage_field__jri_z",back:"BusPage_back__G85x0"}}},function(e){e.O(0,[980,617,955,874,998,791,774,888,179],(function(){return r=9095,e(e.s=r);var r}));var r=e.O();_N_E=r}]);