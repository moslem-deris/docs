(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{168:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,h=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(h,l(l({ref:t},c),{},{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(168)),o={title:"Hash ID"},l={unversionedId:"features/hash-id",id:"features/hash-id",isDocsHomePage:!1,title:"Hash ID",description:"- Enable Hash ID",source:"@site/docs/features/hash-id.md",slug:"/features/hash-id",permalink:"/docs/docs/features/hash-id",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/features/hash-id.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1617580354,formattedLastUpdatedAt:"4/4/2021",sidebar:"docs",previous:{title:"Default Endpoints",permalink:"/docs/docs/features/default-endpoints"},next:{title:"Localization",permalink:"/docs/docs/features/localization"}},s=[{value:"Enable Hash ID",id:"enable-hash-id",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[{value:"From Apiato Version 7.4.*",id:"from-apiato-version-74",children:[]}]},{value:"Testing",id:"testing",children:[{value:"for Parameter ID&#39;s",id:"for-parameter-ids",children:[]},{value:"for URL ID&#39;s",id:"for-url-ids",children:[]}]},{value:"Availability",id:"availability",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#enable-hash-id"},"Enable Hash ID")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#usage"},"Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#configuration"},"Configuration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#testing"},"Testing"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#for-parameter-ids"},"for Parameter ID's")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#for-url-ids"},"for URL ID's")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#availability"},"Availability"))),Object(i.b)("p",null,"Hashing your internal ID's, is very helpful feature for security reasons (to prevent some hack attacks) and business reasons (to hide the real total records from your competitors)."),Object(i.b)("h2",{id:"enable-hash-id"},"Enable Hash ID"),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"HASH_ID=true")," in the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file."),Object(i.b)("p",null,"Also with the feature make sure to always use the ",Object(i.b)("inlineCode",{parentName:"p"},"getHashedKey()")," on any model, whenever you need to return an ID (mainly from transformers) weather hashed ID or not."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"\n'id' => $user->getHashedKey(),\n\n")),Object(i.b)("p",null,"Note: if the feature is set to false ",Object(i.b)("inlineCode",{parentName:"p"},"HASH_ID=false")," the ",Object(i.b)("inlineCode",{parentName:"p"},"getHashedKey()")," will return the normal ID."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"There are 2 ways an ID's can be passed to your system via the API:"),Object(i.b)("p",null,"In URL example: ",Object(i.b)("inlineCode",{parentName:"p"},"www.apiato.test/items/abcdef"),"."),Object(i.b)("p",null,"In parameters example: ","[GET]"," or ","[POST]"," ",Object(i.b)("inlineCode",{parentName:"p"},"www.apiato.test/items?id=abcdef"),"."),Object(i.b)("p",null,"in both cases you will need to inform your API about what's coming form the Request class."),Object(i.b)("p",null,"Checkout the ",Object(i.b)("a",{parentName:"p",href:"requests"},"Requests")," page. After setting the ",Object(i.b)("inlineCode",{parentName:"p"},"$decode")," and ",Object(i.b)("inlineCode",{parentName:"p"},"$urlParameters")," properties on your Request class, the ID will be automatically decoded for you, to apply validation rules on it or/and use it from your controller (",Object(i.b)("inlineCode",{parentName:"p"},"$request->id")," will return the decoded ID)."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"You can change the default length and characters used in the ID from the config file ",Object(i.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/hashids.php"),"or in the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file by editing the ",Object(i.b)("inlineCode",{parentName:"p"},"HASH_ID_LENGTH")," value."),Object(i.b)("h3",{id:"from-apiato-version-74"},"From Apiato Version 7.4.*"),Object(i.b)("p",null,"You can set the ",Object(i.b)("inlineCode",{parentName:"p"},"HASH_ID_KEY")," in the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file to any random string. You can generate this from any of the online random string generators, or run ",Object(i.b)("inlineCode",{parentName:"p"},"head /dev/urandom | tr -dc 'A-Za-z0-9!\"#$%&'\\''()*+,-./:;<=>?@[\\]^_{|}~' | head -c 32  ; echo")," on the linux commandline. Apiato defaults to the ",Object(i.b)("inlineCode",{parentName:"p"},"APP_KEY")," should this not be set."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"HASH_ID_KEY")," acts as the salt during hashing of the ID. This should never be changed in production as it renders all previously generated IDs quite difficult to decode and recover."),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("p",null,"In your tests you must hash the ID's before making the calls, because if you tell your Request class to decode an ID for you, it will throw an exception when the ID is not encoded."),Object(i.b)("h3",{id:"for-parameter-ids"},"for Parameter ID's"),Object(i.b)("p",null,"Always use ",Object(i.b)("inlineCode",{parentName:"p"},"getHashedKey()")," on your models when you want to get the ID"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$data = [\n    'roles_ids' => [\n        $role1->getHashedKey(),\n        $role2->getHashedKey(),\n    ],\n    'user_id'   => $randomUser->getHashedKey(),\n];\n$response = $this->makeCall($data);\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Or you can do this manually ",Object(i.b)("inlineCode",{parentName:"em"},"Hashids::encode($id);"),". ")),Object(i.b)("h3",{id:"for-url-ids"},"for URL ID's"),Object(i.b)("p",null,"You can use this helper function ",Object(i.b)("inlineCode",{parentName:"p"},"injectId($id, $skipEncoding = false, $replace = '{id}')"),"."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$response = $this->injectId($admin->id)->makeCall();\n")),Object(i.b)("p",null,"More details on the ",Object(i.b)("a",{parentName:"p",href:"tests-helpers"},"Tests Helpers")," page."),Object(i.b)("h2",{id:"availability"},"Availability"),Object(i.b)("p",null,"You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"Apiato\\Core\\Traits\\HashIdTrait")," to any model or class, in order to have the ",Object(i.b)("inlineCode",{parentName:"p"},"encode")," and ",Object(i.b)("inlineCode",{parentName:"p"},"decode")," functions."),Object(i.b)("p",null,"By default you have access to these functions ",Object(i.b)("inlineCode",{parentName:"p"},"$this->encode($id)")," and  ",Object(i.b)("inlineCode",{parentName:"p"},"$this->decode($id)")," from all your Tests class and Controllers."))}b.isMDXComponent=!0}}]);