(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},u=t(1003),l=t(880),s=t(9246);var c={};function f(e,r,t,n){if(e&&u.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var r=o(u.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?u.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,p=a.as,m=i.default.useRef(d),b=i.default.useRef(p),v=e.children,y=e.replace,h=e.shallow,g=e.scroll,_=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var j=(r=i.default.Children.only(v))&&"object"===typeof r&&r.ref,x=o(s.useIntersection({rootMargin:"200px"}),3),E=x[0],I=x[1],C=x[2],A=i.default.useCallback((function(e){b.current===p&&m.current===d||(C(),b.current=p,m.current=d),E(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,d,C,E]);i.default.useEffect((function(){var e=I&&t&&u.isLocalURL(d),r="undefined"!==typeof _?_:n&&n.locale,o=c[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,I,_,t,n]);var O={ref:A,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:l,scroll:i}))}(e,n,d,p,y,h,g,_)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var S="undefined"!==typeof _?_:n&&n.locale,w=n&&n.isLocaleDomain&&u.getDomainLocale(p,S,n&&n.locales,n&&n.domainLocales);O.href=w||u.addBasePath(u.addLocale(p,S,n&&n.defaultLocale))}return i.default.cloneElement(r,O)};r.default=d,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!u,c=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],m=o(a.useState(r?r.current:null),2),b=m[0],v=m[1],y=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=l.get(n):(r=l.get(t),s.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var r=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&s.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:b,rootMargin:t}))}),[n,b,t,d]),h=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&v(r.current)}),[r]),[y,d,h]};var a=t(7294),i=t(4686),u="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},5244:function(e,r,t){"use strict";t.d(r,{m:function(){return v}});var n=t(5893),o=t(1163),a=t.n(o),i=t(7294),u=t(9363),l=t(8929),s=t(8058),c=t(3459),f=t(3377),d=t(7658),p=t.n(d);function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){m(e,r,t[r])}))}return e}function v(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=function(t){var a=(0,l.S)(),u=a.userData,s=a.getUser,c=(0,o.useRouter)().pathname,d=c===f.M.LOGIN||c===f.M.REGISTER||"/"===c;return(0,i.useEffect)((function(){u||s()}),[]),d?u?(0,n.jsx)(y,{isCredential:d}):(0,n.jsx)(e,b({},t)):u?r?u.isAdmin?(0,n.jsx)(e,b({},t)):(0,n.jsx)(y,{isCredential:!0}):(0,n.jsx)(e,b({},t)):(0,n.jsx)(y,{isCredential:d})};return t}var y=function(e){var r=e.isCredential,t=(0,s.l)(),o=t.setTrue,i=t.setFalse;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Sd,{title:"N\xe3o Autorizado"}),(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(),a().push(r?f.M.HOME:f.M.LOGIN).finally(i)},className:"".concat(p().notAuth," rounded"),children:[(0,n.jsx)("p",{children:"Voc\xea n\xe3o pode acessar esse recurso "}),(0,n.jsx)(c.z,{label:"Voltar"})]})]})}},3459:function(e,r,t){"use strict";t.d(r,{z:function(){return c},M:function(){return f}});var n=t(5893),o=(t(7294),t(4931)),a=t(9363),i=t(2429),u=t.n(i),l=t(7041),s=t.n(l),c=function(e){var r=e.label,t=e.onClick;return(0,n.jsxs)("button",{type:"submit",onClick:t,className:s().buttonBorder,children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),r]})},f=function(e){var r=e.isLogin,t=e.label,i=e.register,l=e.errors,s=r?"ENTRAR":"CADASTRAR",f=["name","cpf","birthDate","email","password"],d={name:{required:"O nome \xe9 obrigat\xf3rio",pattern:"",min:""},cpf:{required:"O cpf \xe9 obrigat\xf3rio",pattern:"O cpf deve ficar no formato XXX.XXX.XXX-XX",min:""},birthDate:{required:"A data de nascimento \xe9 obrigat\xf3ria",pattern:"A data de nascimento deve ficar no formato dd/mm/yyyy",min:""},email:{required:"O email \xe9 obrigat\xf3rio",pattern:"",min:""},password:{required:"A senha \xe9 obrigat\xf3ria",pattern:"",min:"A senha deve ter no m\xednimo 6 d\xedgitos"}},p=function(e){o.ZP.error(e)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-2xl",children:t}),!r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.II,{label:"Nome",placeHolder:"Nome",register:i("name",{required:!0}),id:"name",className:u().credentialsInput}),(0,n.jsx)(a.II,{label:"CPF",placeHolder:"CPF",register:i("cpf",{required:!0,pattern:/\d{3}\.\d{3}\.\d{3}\-\d{2}/g}),id:"cpf",className:u().credentialsInput}),(0,n.jsx)(a.II,{label:"Data de Nascimento",placeHolder:"Data de Nascimento",register:i("birthDate",{required:!0,pattern:/^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/}),id:"date",className:u().credentialsInput})]}),(0,n.jsx)(a.II,{label:"Email",placeHolder:"Email",register:i("email",{required:!0}),id:"email",type:"email",className:u().credentialsInput}),(0,n.jsx)(a.II,{label:"Senha",placeHolder:"Senha",id:"password",register:i("password",{required:!0,min:6}),className:u().credentialsInput,type:"password"}),(0,n.jsx)(c,{onClick:function(){f.forEach((function(e){var r,t,n;"required"===(null===(r=l[e])||void 0===r?void 0:r.type)&&p(d[e].required),"pattern"===(null===(t=l[e])||void 0===t?void 0:t.type)&&p(d[e].pattern),"min"===(null===(n=l[e])||void 0===n?void 0:n.type)&&p(d[e].min)}))},label:s})]})}},1407:function(e,r,t){"use strict";t.d(r,{c:function(){return f}});var n=t(5893),o=t(1664),a=t.n(o),i=(t(7294),t(7536)),u=t(3377),l=t(3459),s=t(2429),c=t.n(s),f=function(e){var r=e.onSubmit,t=e.isLogin,o=void 0!==t&&t,s=o?"Entrar":"Registrar",f=o?"N\xe3o tem cadastro? Cadastre Aqui":"J\xe1 tem login? Entre Aqui",d=(0,i.cI)(),p=d.register,m=d.handleSubmit,b=d.formState.errors;return(0,n.jsxs)("div",{className:c().credentials,children:[(0,n.jsx)("form",{onSubmit:m((function(e){if(!o)return r(e);var t=e.email,n=e.password;return r({email:t,password:n})})),autoComplete:"off",className:"".concat(c().formCredentials," rounded"),children:(0,n.jsx)(l.M,{isLogin:o,label:s,errors:b,register:p})}),(0,n.jsx)("div",{className:c().redirect,children:(0,n.jsx)(a(),{replace:!0,href:o?u.M.REGISTER:u.M.LOGIN,children:f})})]})}},3377:function(e,r,t){"use strict";t.d(r,{M:function(){return n}});var n={LOGIN:"/login",REGISTER:"/register",CREATE_BUS:"/create-bus",HOME:"/home",PROFILE:"/profile",PROFILE_UPDATE:"/profile/update",BUS:"/bus",LOGOUT:"/logout",UPDATE_BUS:"/update-bus",SEARCH_BUS:"/search-bus"}},2083:function(e,r,t){"use strict";t.d(r,{x:function(){return o}});var n=t(4931),o=function(e){if(!(null===e||void 0===e?void 0:e.isCanceled)&&e){var r=e.response.data,t=r.message,o=r.errors;return o.length>0?n.Am.error(o[0]):t?n.Am.error(t):void n.Am.error("N\xe3o foi poss\xedvel fazer isso no momento")}}},7658:function(e){e.exports={notAuth:"withAuth_notAuth___86PU"}},2429:function(e){e.exports={credentialsInput:"Credentials_credentialsInput__gsHMg",credentials:"Credentials_credentials__Oc15W",formCredentials:"Credentials_formCredentials__Xa6ej",inputError:"Credentials_inputError__yp8il",label:"Credentials_label__XTi8k",redirect:"Credentials_redirect__PGnc6"}},7041:function(e){e.exports={buttonBorder:"Button_buttonBorder__AohEF","btn-anim1":"Button_btn-anim1__CyFmk","btn-anim2":"Button_btn-anim2__dW1Wl","btn-anim3":"Button_btn-anim3__3urRD","btn-anim4":"Button_btn-anim4___6mM2"}},1664:function(e,r,t){e.exports=t(1551)}}]);