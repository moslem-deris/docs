(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(168)),i={title:"Postman Environment",category:"Miscellaneous",order:6},l={unversionedId:"miscellaneous/postman",id:"miscellaneous/postman",isDocsHomePage:!1,title:"Postman Environment",description:"- Apiato Postman API & Environment",source:"@site/docs/miscellaneous/postman.md",slug:"/miscellaneous/postman",permalink:"/docs/docs/miscellaneous/postman",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/miscellaneous/postman.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616672537,formattedLastUpdatedAt:"3/25/2021"},c=[],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#title"},"Apiato Postman API & Environment"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#add-environment-collection"},"Add Apiato Environment & Collection to Postman ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#using-apiato-collection"},"Using the Postman Apiato API Collection")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#download"},"Download Environment & Collection"))))),Object(r.b)("a",{name:"title"}),"## Apiato Postman API & Environment",Object(r.b)("p",null,"If you use Postman to build and explore your API's you will find this predefined Apiato Postman collection a great\nstart to your new Apiato project. Simply download both the Environment and Collection to Postman to get started."),Object(r.b)("a",{name:"prerequisites"}),"### Prerequisites",Object(r.b)("h4",{id:"configure-apiato"},"Configure Apiato"),Object(r.b)("p",null,"It's important that you run the following shell commands to migrate and seed your database. The next command configures\na Laravel Passport client. Finally you need to run the last command to grant the Admin user with full permission to\naccess all routes."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate:refresh --seed\nphp artisan passport:client --password\nphp artisan apiato:permissions:toRole admin\n")),Object(r.b)("p",null,"Be sure to copy and paste your new Client Id and Client Secret into the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file. Like so..."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"CLIENT_WEB_ADMIN_ID={CLIENT_ID}\nCLIENT_WEB_ADMIN_SECRET={CLIENT_SECRET}\n\nCLIENT_MOBILE_ADMIN_ID={CLIENT_ID}\nCLIENT_MOBILE_ADMIN_SECRET={CLIENT_SECRET}\n")),Object(r.b)("p",null,"The above steps will ensure you have a functioning Apiato API environment to explore with Postman."),Object(r.b)("h4",{id:"download--install-postman"},"Download & Install Postman"),Object(r.b)("p",null,"Visit the Postman website and download the application."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.getpostman.com/"},"Postman"))),Object(r.b)("a",{name:"add-environment-collection"}),"### Add Apiato Environment & Collection to Postman",Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[Download Apiato Environment]","({{ site.baseurl }}/assets/postman/Apiato_API.postman_environment.json)"),Object(r.b)("li",{parentName:"ul"},"[Download Apiato Collection]","({{ site.baseurl }}/assets/postman/Apiato_API.postman_collection.json)")),Object(r.b)("p",null,"Steps"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open Postman"),Object(r.b)("li",{parentName:"ul"},'Click on "',Object(r.b)("strong",{parentName:"li"},"import"),'" button ',Object(r.b)("strong",{parentName:"li"},"top left")," of Postman application."),Object(r.b)("li",{parentName:"ul"},'Click on "',Object(r.b)("strong",{parentName:"li"},"Choose files"),'". Select both the Environment and Collection JSON files and click add.'),Object(r.b)("li",{parentName:"ul"},'Select "',Object(r.b)("strong",{parentName:"li"},"Apiato Environment"),'" from the Environment dropdown list on the ',Object(r.b)("strong",{parentName:"li"},"top right")," of the Postman Application.")),Object(r.b)("a",{name:"using-apiato-collection"}),"### Using the Postman Apiato API Collection",Object(r.b)("p",null,"The first thing you need to do to use the Apiato endpoints is to login to your Apiato API."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select the ",Object(r.b)("strong",{parentName:"li"},"Apiato API Collection")," in the left menu."),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("strong",{parentName:"li"},"Authentication")," folder."),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("strong",{parentName:"li"},"Login")," endpoint."),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Send")," button.")),Object(r.b)("p",null,"The response will return a body with the API access token. Normally you would have to manually add this in a header\nwith each request using ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization: Bearer TOKEN"),". This however is automatically done for you."),Object(r.b)("p",null,"From this point you can now access all endpoints using the ",Object(r.b)("strong",{parentName:"p"},"Super Admin")," role."),Object(r.b)("p",null,"If you would like to test logging into your application with different users then switch to the ",Object(r.b)("inlineCode",{parentName:"p"},"body")," tab on the\n",Object(r.b)("inlineCode",{parentName:"p"},"login")," endpoint and update the credentials."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "email": "admin@admin.com",\n    "password": "admin"\n}\n')),Object(r.b)("a",{name:"download"}),"### Download Environment & Collection",Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"[Download Apiato Environment]","({{ site.baseurl }}/assets/postman/Apiato_API.postman_environment.json)"),Object(r.b)("li",{parentName:"ul"},"[Download Apiato Collection]","({{ site.baseurl }}/assets/postman/Apiato_API.postman_collection.json)")))}p.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||r;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);