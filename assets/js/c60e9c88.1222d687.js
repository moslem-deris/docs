(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),a=(n(0),n(168)),o={title:"Sub Actions",category:"Main Components",order:16},c={unversionedId:"components/subactions",id:"components/subactions",isDocsHomePage:!1,title:"Sub Actions",description:"- Definition & Principles",source:"@site/docs/components/subactions.md",slug:"/components/subactions",permalink:"/docs/docs/components/subactions",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/components/subactions.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616672537,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"Transformers",permalink:"/docs/docs/components/transformers"},next:{title:"Providers",permalink:"/docs/docs/components/providers"}},s=[{value:"Definition &amp; Principles",id:"definition--principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-sample",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),Object(a.b)("a",{name:"definition-principles"}),Object(a.b)("h3",{id:"definition--principles"},"Definition & Principles"),Object(a.b)("p",null,"Read from the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Sub-Actions"},Object(a.b)("strong",{parentName:"a"},"Porto SAP Documentation (#Sub-Actions)")),"."),Object(a.b)("a",{name:"rules"}),Object(a.b)("h3",{id:"rules"},"Rules"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All SubActions MUST extend from ",Object(a.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Actions\\SubAction"),".")),Object(a.b)("a",{name:"folder-structure"}),Object(a.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Actions\n                - ValidateAddressSubAction.php\n                - BuildOrderSubAction.php\n                - ...\n")),Object(a.b)("a",{name:"code-sample"}),Object(a.b)("h3",{id:"code-sample"},"Code Sample"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ValidateAddressSubAction User Action:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Shipment\\Actions;\n\nuse App\\Containers\\Recipient\\Models\\Recipient;\nuse App\\Containers\\Recipient\\Tasks\\UpdateRecipientTask;\nuse App\\Containers\\Shipment\\Tasks\\ValidateAddressWithEasyPostTask;\nuse App\\Containers\\Shipment\\Tasks\\ValidateAddressWithMelissaDataTask;\nuse App\\Ship\\Parents\\Actions\\SubAction;\n\nclass ValidateAddressSubAction extends SubAction\n{\n    public function run(Recipient $recipient)\n    {\n        $hasValidAddress = true;\n\n        $easyPostResponse = Apiato::call(ValidateAddressWithEasyPostTask::class, [$recipient]);\n\n        ...\n    }\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Every feature available for Actions, is also available in SubActions.")))}l.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);