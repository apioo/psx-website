"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[442],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8489:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:6},s="Integration",l={unversionedId:"integration",id:"integration",title:"Integration",description:"All PSX components are framework independent and can be easily used in many different environments. The following page",source:"@site/docs/integration.md",sourceDirName:".",slug:"/integration",permalink:"/docs/integration",editUrl:"https://github.com/apioo/psx-website/edit/main/docs/integration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Data",permalink:"/docs/data"},next:{title:"Components",permalink:"/docs/components"}},p=[{value:"Symfony",id:"symfony",children:[],level:2},{value:"Laravel",id:"laravel",children:[],level:2},{value:"PSX",id:"psx",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integration"},"Integration"),(0,a.kt)("p",null,"All PSX components are framework independent and can be easily used in many different environments. The following page\nprovides an overview about available integrations:"),(0,a.kt)("h2",{id:"symfony"},"Symfony"),(0,a.kt)("p",null,"In development"),(0,a.kt)("h2",{id:"laravel"},"Laravel"),(0,a.kt)("p",null,"In development"),(0,a.kt)("h2",{id:"psx"},"PSX"),(0,a.kt)("p",null,"PSX is a framework dedicated to build REST APIs. All our components have evolved out of this framework but currently our\nmain focus is to develop and extend our framework independent components. The framework is still in active use at\n",(0,a.kt)("a",{parentName:"p",href:"https://www.fusio-project.org/"},"Fusio"),", which is an open source API management system. If you like to try a different\nframework dedicated to API development feel free to check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apioo/psx"},"repository"),". To give\nyou a first impression a normal controller in PSX always represents a HTTP resource and it looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n#[Description('Collection endpoint')]\nclass CollectionPopo extends SchemaApiAbstract\n{\n    #[Inject]\n    private Population $populationService;\n\n    #[QueryParam(name: \"startIndex\", type: \"integer\")]\n    #[QueryParam(name: \"count\", type: \"integer\")]\n    #[Outgoing(code: 200, schema: Collection::class)]\n    protected function doGet(HttpContextInterface $context)\n    {\n        return $this->populationService->getAll(\n            $context->getParameter('startIndex'),\n            $context->getParameter('count')\n        );\n    }\n\n    #[Incoming(schema: Entity::class)]\n    #[Outgoing(code: 201, schema: Message::class)]\n    protected function doPost($record, HttpContextInterface $context)\n    {\n        $this->populationService->create(\n            $record->getPlace(),\n            $record->getRegion(),\n            $record->getPopulation(),\n            $record->getUsers(),\n            $record->getWorldUsers()\n        );\n\n        $message = new Message();\n        $message->setSuccess(true);\n        $message->setMessage('Create population successful');\n        return $message;\n    }\n}\n\n")))}d.isMDXComponent=!0}}]);