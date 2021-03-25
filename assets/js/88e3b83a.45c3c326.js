(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return a?r.a.createElement(d,l(l({ref:t},p),{},{components:a})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(108)),i={title:"Software Architectural Patterns",slug:"/software-architectural-patterns"},l={unversionedId:"software-architectural-patterns",id:"software-architectural-patterns",isDocsHomePage:!1,title:"Software Architectural Patterns",description:"- Introduction",source:"@site/docs/software-architectural-patterns.md",slug:"/software-architectural-patterns",permalink:"/docs/docs/software-architectural-patterns",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/software-architectural-patterns.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616630150,formattedLastUpdatedAt:"3/24/2021",sidebar:"docs",previous:{title:"Responses",permalink:"/docs/docs/responses"},next:{title:"Conventions and Principles",permalink:"/docs/docs/conventions-and-principles"}},c=[{value:"Porto",id:"porto",children:[]},{value:"MVC",id:"mvc",children:[]}],p={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#intro"},"Introduction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#porto-intro"},"Porto"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#introduction-1"},"Introduction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#container-layer"},"The Containers Layer"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rm-container"},"Remove a Container (default Containers)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#new-Containter"},"Create new Container"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#use-Generator"},"Option 1) Using the Code Generator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#manual-new-container"},"Option 2) Manually")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#Containter-Conventions"},"Container Conventions")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#ship-layer"},"The Ship Layer")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#mvc-intro"},"MVC"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#mvc-introduction"},"MVC Introduction"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#Difference-mvc"},"Difference between Standard MVC and Apiato's MVC")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#Setup-mvc"},"Setup my Apiato MVC App"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#1--first-get-a-fresh-version-of-apiato"},"1) First get a fresh version of Apiato")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#2--create-the--application-"},"2) Create the Application")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#3--create-route-file"},"3) Create route file")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#4--create-controller"},"4) Create Controller")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#5--create-models"},"5) Create Models")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#6--create-views"},"6) Create Views")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#7--create-transformers"},"7) Create Transformers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#8--create-service-providers"},"8) Create Service Providers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#9--create-migrations"},"9) Create Migrations")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#10--create-seeds"},"10) Create Seeds")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#more-classes"},"More Classes")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#Apiato-features"},"How to use Apiato features"))))))),Object(o.b)("a",{name:"intro"}),"### Introduction",Object(o.b)("p",null,"The two most common architectures, used for building projects on top of Apiato are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Porto")," (Route Request Controller Action Task Model Transformer)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MVC")," (Model View Controller). ",Object(o.b)("em",{parentName:"li"},"The Apiato MVC version is a little different than the standard MVC."))),Object(o.b)("p",null,"Porto is the Apiato recommended architecture for building scalable API's with Apiato.\nHowever, it also support building API's using the popular MVC architecture (with a little modifications)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Apiato features are written using Porto, and can be used by any architecture.")),Object(o.b)("p",null,"Below you will see how you can both any of the architectures to build your project."),Object(o.b)("h2",{id:"porto"},"Porto"),Object(o.b)("a",{name:"porto-intro"}),"### Introduction",Object(o.b)("p",null,"Porto is an architecture that consists of 2 layers the ",Object(o.b)("strong",{parentName:"p"},"Containers")," layer and the ",Object(o.b)("strong",{parentName:"p"},"Ship")," layer."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Container")," layer holds your application business logic code. Same like Modular, DDD and plugins architectures;\nApiato allows separating the business logic into multiple folders called ",Object(o.b)("strong",{parentName:"p"},"Containers"),". While the ",Object(o.b)("strong",{parentName:"p"},"Ship")," layer holds\nthe infrastructure code (your shared code between all ",Object(o.b)("strong",{parentName:"p"},"Containers"),"). You will rarely touch it anyway."),Object(o.b)("p",null,"The Apiato features themselves are developed using the Porto Software Architectural Pattern. (Means the features\nprovided in Apiato live in Containers)."),Object(o.b)("p",null,"Spending 15 minutes, reading the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto"},"Porto Document")," before getting started, is a great\ninvestment of time."),Object(o.b)("a",{name:"container-layer"}),"### The Containers Layer",Object(o.b)("p",null,"Read about the Containers layer ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Containers-Layer"},"here")),Object(o.b)("a",{name:"rm-container"}),"#### Remove a Container (default Containers)",Object(o.b)("p",null,"Apiato comes with some default containers. All the containers are optional, and some of them contain essential features."),Object(o.b)("p",null,"Let's say you don't want to use the built in documentation generator feature of Apiato. To get rid of that feature you\ncan simply delete the ",Object(o.b)("inlineCode",{parentName:"p"},"documentation")," container."),Object(o.b)("p",null,"To remove a Container, simply delete the folder then run ",Object(o.b)("inlineCode",{parentName:"p"},"composer update")," to remove its dependencies."),Object(o.b)("a",{name:"new-Containter"}),"#### Create new Container",Object(o.b)("a",{name:"use-Generator"}),"**Option 1) Using the Code Generator:**",Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"php artisan apiato:container")),Object(o.b)("p",null,"Refer to the ",Object(o.b)("a",{parentName:"p",href:"http://apiato.io/features/code-generator/"},"code generator")," page for more details."),Object(o.b)("a",{name:"manual-new-container"}),"**Option 2) manually:**",Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a folder in the Containers folder."),Object(o.b)("li",{parentName:"ol"},"Start creating components and adding them in it.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"(The Ship engine will auto load and register everything automatically for you)"),"."),Object(o.b)("p",null,"For the auto-loading to work flawlessly you MUST adhere to the component's naming conventions and directories. So you\nneed to refer to the ",Object(o.b)("inlineCode",{parentName:"p"},"documentation page")," of the component when creating it."),Object(o.b)("a",{name:"Containter-Conventions"}),"#### Container Conventions",Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Containers names SHOULD start with Capital. Use CamelCase to rename Containers."),Object(o.b)("li",{parentName:"ul"},'Namespace should be the same as the container name, (if container name is "Printer" the namespace should be\n',Object(o.b)("inlineCode",{parentName:"li"},"App\\Containers\\Printer"),")."),Object(o.b)("li",{parentName:"ul"},"Container MAY be named to anything however. A good practice is to name it to its most important Model name.\n",Object(o.b)("em",{parentName:"li"},"Example: If the User Story is (User can create a Stores and Stores can have Items) then we you could have 3\nContainers (User, Store and Item)."))),Object(o.b)("a",{name:"ship-layer"}),"### The Ship Layer",Object(o.b)("p",null,"Read about the Ship layer ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/Mahmoudz/Porto#Port-Layer"},"here"))),Object(o.b)("h2",{id:"mvc"},"MVC"),Object(o.b)("a",{name:"mvc-intro"}),"### MVC Introduction",Object(o.b)("p",null,"Due to the popularity of MVC, and the fact that many developers don't have enough time to learn about new architectures.\nApiato, supports the MVC architecture. That is 97% compatible with the laravel MVC."),Object(o.b)("p",null,"Below you will learn how you can build your API on top of Apiato, using your previous knowledge of the Laravel MVC\nframework."),Object(o.b)("a",{name:"Difference-mvc"}),"#### Difference between Standard MVC and Apiato's MVC",Object(o.b)("p",null,"The Porto architecture, does not replace the MVC architecture, instead it extends it for good. So Models, Views, Routes\nand Controllers all still exist, but in different places with a strict set of responsibilities for each component\n",Object(o.b)("inlineCode",{parentName:"p"},"class type"),"."),Object(o.b)("a",{name:"Setup-mvc"}),"#### Setup my Apiato MVC App",Object(o.b)("h5",{id:"1-first-get-a-fresh-version-of-apiato"},"1) First get a fresh version of Apiato"),Object(o.b)("h5",{id:"2-create-the-application"},"2) Create the Application"),Object(o.b)("p",null,"If you open ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/")," you will see a list of Proto's Containers, each container provide some features for you.\nHowever, you don't need to modify them, whether you are using the Porto or MVC architecture. So forget about all these\nfolders for now."),Object(o.b)("p",null,"All we need is to create a new folder called ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," (your MVC application, it's an alternative to the ",Object(o.b)("inlineCode",{parentName:"p"},"app"),"\nfolder on the root of the Laravel project). This folder will hold all your Models, Views, Routes, Controllers etc files."),Object(o.b)("h5",{id:"3-create-route-file"},"3) Create route file"),Object(o.b)("p",null,"In Laravel, the routes files live in the ",Object(o.b)("inlineCode",{parentName:"p"},"routes/")," folder on the root of the project. But In Apiato MVC, the routes\nfiles should live in:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"app/Containers/Application/UI/API/Routes/")," (for API Routes)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"app/Containers/Application/UI/WEB/Routes/")," (for WEB Routes)")),Object(o.b)("p",null,"Create ",Object(o.b)("inlineCode",{parentName:"p"},"api.php")," at ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Application/UI/API/Routes/api.php")," \"alternative to Laravel's ",Object(o.b)("inlineCode",{parentName:"p"},"routes/api.php"),'"\nCreate ',Object(o.b)("inlineCode",{parentName:"p"},"web.php")," at ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Application/UI/API/Routes/web.php")," \"alternative to Laravel's ",Object(o.b)("inlineCode",{parentName:"p"},"routes/web.php"),'"'),Object(o.b)("p",null,"In both files create all your endpoints as you would in Laravel."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: You must use ",Object(o.b)("inlineCode",{parentName:"p"},"$router->")," instead of the facade ",Object(o.b)("inlineCode",{parentName:"p"},"Route::")," in the route files.")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// Use this `$router` variable\n$router->get('/', function () {\n    return view('welcome');\n});\n\n// DO not use the `Route` facade\nRoute::get('/', function () {\n    return view('welcome');\n});\n")),Object(o.b)("h5",{id:"4-create-controller"},"4) Create Controller"),Object(o.b)("p",null,"In Laravel, the Controllers classes live in the ",Object(o.b)("inlineCode",{parentName:"p"},"app/Http/Controllers/")," folder. But In Apiato MVC, the ",Object(o.b)("inlineCode",{parentName:"p"},"Controller"),"\nclasses should live in:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"app/Containers/Application/UI/API/Controllers/Controller.php")," (To handle API Routes) MUST extend from ",Object(o.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Controllers\\ApiController")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"app/Containers/Application/UI/WEB/Controllers/Controller.php")," (To handle WEB Routes) MUST extend from ",Object(o.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Controllers\\WebController"))),Object(o.b)("h5",{id:"5-create-models"},"5) Create Models"),Object(o.b)("p",null,"In Laravel, the Models classes live in the root of the ",Object(o.b)("inlineCode",{parentName:"p"},"app/")," folder. But In Apiato MVC, the Models classes should\nlive in ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Application/Models"),"."),Object(o.b)("p",null,"All model must ",Object(o.b)("inlineCode",{parentName:"p"},"extend")," from ",Object(o.b)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Models\\Model"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note the ",Object(o.b)("inlineCode",{parentName:"p"},"User")," Model should remain in the User Container (",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/User/Models/User.php"),"), to keep all the\nfeatures working without any modifications.")),Object(o.b)("h5",{id:"6-create-views"},"6) Create Views"),Object(o.b)("p",null,"In Laravel, the Views files live in the ",Object(o.b)("inlineCode",{parentName:"p"},"resources/views/")," folder. In Apiato MVC, the Views files can live in that\nsame directory or/and in this container folder ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Application/UI/WEB/Views/"),"."),Object(o.b)("h5",{id:"7-create-transformers"},"7) Create Transformers"),Object(o.b)("p",null,"In Laravel, the Transformers classes live in the ",Object(o.b)("inlineCode",{parentName:"p"},"app/Transformers/")," folder. But In Apiato MVC, the Transformers\nclasses should live in ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Application/UI/API/Transformers/"),"."),Object(o.b)("p",null,"Transformers must extend from ",Object(o.b)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Transformers\\Transformer"),"."),Object(o.b)("h5",{id:"8-create-service-providers"},"8) Create Service Providers"),Object(o.b)("p",null,"In Laravel, the Service Providers classes live in the ",Object(o.b)("inlineCode",{parentName:"p"},"app/Providers/")," folder. But In Apiato MVC, the Service Providers\nclasses can live in ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Application/Providers/"),", but also can live anywhere else."),Object(o.b)("p",null,"If you want the Service Providers to be automatically loaded (without having to register it in the ",Object(o.b)("inlineCode",{parentName:"p"},"config/app.php"),"\nfile), rename your file to  ",Object(o.b)("inlineCode",{parentName:"p"},"MainServiceProvider.php")," (full path ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Application/Providers/MainServiceProvider.php"),").\nOtherwise you can create Service Providers anywhere and register them manually in Laravel."),Object(o.b)("h5",{id:"9-create-migrations"},"9) Create Migrations"),Object(o.b)("p",null,"In Laravel, the Migrations classes live in the ",Object(o.b)("inlineCode",{parentName:"p"},"database/migrations/")," folder on the root of the project. In Apiato\nMVC, the Migrations classes can live in that same directory or/and in this container folder\n",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Application/Data/Migrations/"),"."),Object(o.b)("h5",{id:"10-create-seeds"},"10) Create Seeds"),Object(o.b)("p",null,"In Laravel, the Seeds files live in the ",Object(o.b)("inlineCode",{parentName:"p"},"database/migrations/")," folder on the root of the project. In Apiato MVC, the\nSeeds files can live in that same directory or/and in this container folder ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Application/Data/Seeders/"),"."),Object(o.b)("h5",{id:"more-classes"},"More Classes"),Object(o.b)("p",null,"All other classes types work the same way, you can refer to the documentation for where to place them and what they\nshould extend. For more details you can always get in touch with us on ",Object(o.b)("strong",{parentName:"p"},"Slack"),"."),Object(o.b)("a",{name:"Apiato-features"}),"#### How to use Apiato features",Object(o.b)("p",null,"Apiato features are all provided as Actions & Tasks classes."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each Action class has single function ",Object(o.b)("inlineCode",{parentName:"li"},"run")," which does one feature only."),Object(o.b)("li",{parentName:"ul"},"Each Task class has single function ",Object(o.b)("inlineCode",{parentName:"li"},"run")," which does one job only (a tiny piece of the business logic).")),Object(o.b)("p",null,"You can use Actions/Tasks classes anyway you want:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Using Apiato Facade with Apiato caller style ",Object(o.b)("inlineCode",{parentName:"li"},"$user = \\Apiato::call('Car@GetDriversAction', [$request->id]);")),Object(o.b)("li",{parentName:"ul"},"Using Apiato Facade with full class name ",Object(o.b)("inlineCode",{parentName:"li"},"$user = \\Apiato::call(GetDriversAction::class, [$request->id]);")),Object(o.b)("li",{parentName:"ul"},"Using the helper call function with full class name ",Object(o.b)("inlineCode",{parentName:"li"},"$user = $this->call(GetDriversAction::class, [$request->id]);")),Object(o.b)("li",{parentName:"ul"},"Using the helper call function with Apiato caller style ",Object(o.b)("inlineCode",{parentName:"li"},"$user = $this->call('Car@GetDriversAction', [$request->id]);")),Object(o.b)("li",{parentName:"ul"},"Without Apiato involvement using plain PHP ",Object(o.b)("inlineCode",{parentName:"li"},"$user = $action = new GetDriversAction::class; $action->run($request->id);")),Object(o.b)("li",{parentName:"ul"},"Without Apiato involvement using plain Laravel IoC ",Object(o.b)("inlineCode",{parentName:"li"},"$user = \\App::make(GetDriversAction::class)->run($request->id);"))),Object(o.b)("p",null,"Be creative, at the end of the day it's a class with a function."))}s.isMDXComponent=!0}}]);