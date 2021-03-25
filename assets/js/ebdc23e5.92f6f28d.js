(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(168)),i={title:"ETag",slug:"/etag"},c={unversionedId:"features/etag",id:"features/etag",isDocsHomePage:!1,title:"ETag",description:"ETag Middleware",source:"@site/docs/features/etag.md",slug:"/etag",permalink:"/docs/docs/etag",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/features/etag.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616672537,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"Search Query Parameter",permalink:"/docs/docs/search-query-parameter"},next:{title:"Useful Commands",permalink:"/docs/docs/useful-commands"}},p=[{value:"ETag Middleware",id:"etag-middleware",children:[]}],l={toc:p};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"etag-middleware"},"ETag Middleware"),Object(o.b)("p",null,"Apiato provides an ETag Middleware (",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Middlewares/Http/ProcessETagHeadersMiddleware.php"),") that implements the Shallow technique.\nIt can be used to reduce bandwidth on the client side (especially for Mobile devices)."),Object(o.b)("p",null,"By default the feature is disabled. To enable it go to ",Object(o.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," and set ",Object(o.b)("inlineCode",{parentName:"p"},"use-etag")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),".\nOf course your client should send the ",Object(o.b)("inlineCode",{parentName:"p"},"If-None-Match")," HTTP Header ",Object(o.b)("inlineCode",{parentName:"p"},"(= etag)")," in his request for this feature to work properly."))}d.isMDXComponent=!0},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(r),f=n,m=s["".concat(i,".").concat(f)]||s[f]||u[f]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);