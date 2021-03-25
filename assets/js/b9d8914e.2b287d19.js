(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),s=(n(0),n(168)),i={title:"System Settings",slug:"/system-settings"},o={unversionedId:"features/system-settings",id:"features/system-settings",isDocsHomePage:!1,title:"System Settings",description:"- Seed the default settings",source:"@site/docs/features/system-settings.md",slug:"/system-settings",permalink:"/docs/docs/system-settings",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/features/system-settings.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616697796,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"Payments",permalink:"/docs/docs/payments"},next:{title:"API Versioning",permalink:"/docs/docs/api-versioning"}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#seed-the-default-settings"},"Seed the default settings")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#read-settings"},"Read settings"))),Object(s.b)("br",null),Object(s.b)("br",null),Object(s.b)("p",null,"At many cases you need to have some dynamic system settings, such as in a referral program, where you give 'gifts' to anyone who refers new users. But those gifts can be changed in the future, so it's better not have them statically created in the code, instead read from the database where an  Admin can manage them at any time."),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"app/Containers/Settings")," Container helps storing and retrieving those key values settings. It also seed the database with the default configurations during the installation."),Object(s.b)("a",{name:"seed-the-default-settings"}),Object(s.b)("h4",{id:"seed-the-default-settings"},"Seed the default settings"),Object(s.b)("p",null,"Default Settings should be seeded in ",Object(s.b)("inlineCode",{parentName:"p"},"app/Containers/Settings/Database/Seeders/DefaultSystemSettingsSeeder.php")),Object(s.b)("a",{name:"read-settings"}),Object(s.b)("h4",{id:"read-settings"},"Read settings"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n$value = $this->findSettingsByKeyTask->run('whateverSettingsName');\n")),Object(s.b)("p",null,"You can search for settings by Key as in the example above, or create a class for each settings as follow:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n$value = $this->findWhateverSettingsTask->run();\n")))}u.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||s;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);