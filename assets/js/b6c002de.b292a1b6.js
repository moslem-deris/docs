(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(168)),o={title:"Factories",category:"Optional Components",order:25},s={unversionedId:"components/factories",id:"components/factories",isDocsHomePage:!1,title:"Factories",description:"* Definition",source:"@site/docs/components/factories.md",slug:"/components/factories",permalink:"/docs/docs/components/factories",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/components/factories.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616672537,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"Seeders",permalink:"/docs/docs/components/seeders"},next:{title:"Middlewares",permalink:"/docs/docs/components/middlewares"}},i=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]}]}],l={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#definition"},"Definition"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#principles"},"Principles"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),Object(c.b)("a",{name:"definition"}),Object(c.b)("h3",{id:"definition"},"Definition"),Object(c.b)("p",null,"Factories (are a short name for Models Factories)."),Object(c.b)("p",null,"Factories are used to generate some fake data with the help of Faker to be used for testing purposes."),Object(c.b)("p",null,"Factories are mainly used from Tests."),Object(c.b)("a",{name:"principles"}),Object(c.b)("h2",{id:"principles"},"Principles"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Factories SHOULD be created in the Containers.")),Object(c.b)("a",{name:"rules"}),Object(c.b)("h3",{id:"rules"},"Rules"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A Factory is just a plain PHP script. ",Object(c.b)("em",{parentName:"li"},"(No classes or namespaces required)"))),Object(c.b)("a",{name:"folder-structure"}),Object(c.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n             - Data\n                - Factories\n                    - UserFactory.php\n                    - ...\n")),Object(c.b)("a",{name:"code-samples"}),Object(c.b)("h3",{id:"code-samples"},"Code Samples"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"A User Model Factory:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// User\n$factory->define(App\\Containers\\User\\Models\\User::class, function (Faker\\Generator $faker) {\n    return [\n        'name'     => $faker->name,\n        'email'    => $faker->email,\n        'password' => bcrypt(str_random(10)),\n    ];\n});\n\n// ...\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Usage from ",Object(c.b)("inlineCode",{parentName:"strong"},"Tests")," or anywhere else:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// creating 4 users\nfactory(User::class, 4)->create();\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Usage with relationships:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$countries = Country::all();\n\n// creating 3 rewards and attaching country relation to them\n$rewards = factory(Reward::class, 3)->make()->each(function ($reward) use ($countries) {\n    $reward->save();\n    $reward->countries()->attach([$countries->random(1)->id, $countries->random(1)->id]);\n    $reward->save();\n});\n")),Object(c.b)("p",null,"Use make instance of create and pass any data any way, then save after establishing the relations."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Usage while overriding some values:")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// creating single Offer and setting a user id\n$offer = factory(Offer::class)->make();\n$offer->user_id = $user->id;\n$offer->save();\n\n// ANOTHER EXAMPLE:\n\n// creating multiple Accounts\nfactory(Account::class, 3)->make()->each(function ($account) use ($user) {\n    $account->user_id = $user->id;\n    $account->save();\n});\n")),Object(c.b)("p",null,"For more information about the Models Factories read ",Object(c.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/testing#model-factories"},"this"),"."))}p.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);