(self.webpackChunkjazevedo_me=self.webpackChunkjazevedo_me||[]).push([[691],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function i(t,r,a){return o()?(e.exports=i=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},3913:function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},6525:function(e,t,r){var n=r(8331);function o(){return"undefined"!=typeof Reflect&&Reflect.get?(e.exports=o=Reflect.get,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,r){var o=n(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(arguments.length<3?e:r):i.value}},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(this,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},9754:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},2205:function(e,t,r){var n=r(9489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},430:function(e){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},8585:function(e,t,r){var n=r(8).default,o=r(1506);e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,r){var n=r(2858),o=r(3884),i=r(379),a=r(521);e.exports=function(e,t){return n(e)||o(e,t)||i(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},8331:function(e,t,r){var n=r(9754);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n(e)););return e},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),i=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},5957:function(e,t,r){var n=r(9754),o=r(9489),i=r(430),a=r(9100);function l(t){var r="function"==typeof Map?new Map:void 0;return e.exports=l=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return a(e,arguments,n(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},e.exports.__esModule=!0,e.exports.default=e.exports,l(t)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},121:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7462),o=r(3366),i=r(6814),a=r(7294),l=r(4708),u=r(3292),c=r.n(u),s=r(780),d=r(685),f=r(5803),p=r(703),v=["variant","className","children"],g={Button:(0,i.Z)(f.Z,{target:"e1f1m0jq0"})("position:relative;text-decoration:none;border-radius:4px;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;svg{display:block!important;}box-shadow:",(0,d.A)("z1"),";--highlight-bg:transparent;--border-size:0px;&.variant-solid{background-color:",(0,s.$_)("primary"),";color:",(0,s.$_)("light"),";&:hover{--highlight-bg:",(0,s.$_)("primary+10"),";}&:active{--highlight-bg:",(0,s.$_)("primary-10"),";}}&.variant-hollow{background-color:",(0,l.m4)((0,s.$_)("light"),.1),";color:",(0,s.$_)("text-strong"),";--border-size:2px;&:hover{--highlight-bg:",(0,l.m4)((0,s.$_)("light"),.1),";}&:active{--highlight-bg:",(0,l.m4)((0,s.$_)("light"),.2),";}}--x-padding:15px;--y-padding:8px;padding-top:calc(var(--y-padding) - calc(var(--border-size) * 2));padding-bottom:calc(var(--y-padding) - calc(var(--border-size) * 2));padding-left:calc(var(--x-padding) - calc(var(--border-size) * 2));padding-right:calc(var(--x-padding) - calc(var(--border-size) * 2));border:var(--border-size) solid ",(0,s.$_)("primary"),";&:hover{box-shadow:",(0,d.A)("z2"),";}&:active{box-shadow:",(0,d.A)("z0"),';}&::before{position:absolute;left:0;top:0;height:100%;width:100%;content:" ";transition:0.1s background-color linear;background-color:var(--highlight-bg);border-radius:4px;z-index:0;}&>*{position:relative;}')};function m(e){var t=e.variant,r=e.className,i=e.children,l=(0,o.Z)(e,v),u=a.Children.map(i,(function(e){return"string"==typeof e?(0,p.tZ)("span",null,e):e}));return(0,p.tZ)(g.Button,(0,n.Z)({className:c()(r,"variant-"+(null!=t?t:"solid"))},l),u)}},9208:function(e,t,r){"use strict";r.d(t,{ZP:function(){return b}});var n=r(3),o=r(427),i=r(5239),a=r(7294),l=r(3094),u=r(2371),c=r(3381),s=r(6814),d=r(5002),f=(0,s.Z)("pre",{target:"e1ykj0xl0"})("position:relative;margin:0;padding:0!important;background-color:transparent!important;&>code{font-size:1rem;}",(0,d.hz)(.125)," overflow:auto;"),p=r(703);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={Figure:l.Z,Icon:u.Z},A={a:c.ZP,pre:f};function b(e){var t=e.content,r=e.components,n=e.passthroughProps;return(0,p.tZ)(i.MDXProvider,{components:(0,a.useMemo)((function(){return g(g(g({},m),A),r)}),[r])},(0,p.tZ)(o.MDXRenderer,n,t))}},4772:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(6814),o=r(7294),i=r(4213),a=r(9208),l=r(5212),u=r(6176),c=r(5002),s=r(703),d={SpoilerWrapper:(0,n.Z)("span",{target:"ev3fdeb2"})(""),SpoilerLabel:(0,n.Z)("span",{target:"ev3fdeb1"})(c.CH," &:hover,&:active{",c.Ui,";}background-color:var(--highlight-color);"),SpoilerText:(0,n.Z)("span",{target:"ev3fdeb0"})("")};function f(e){var t=e.email,r=(0,o.useState)(!1),n=r[0],i=r[1];return(0,s.tZ)(d.SpoilerWrapper,{onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},onFocus:function(){return i(!0)},tabIndex:0},!n&&(0,s.tZ)(d.SpoilerLabel,null,"Hover to show email"),n&&(0,s.tZ)(d.SpoilerText,null,t))}var p=r(7942),v=r(6578),g=r(685),m=r(2371),A=r(5102),b=r(3),h=r(7746),x=r(3745),y=r(2822);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j={ProjectCarousel:(0,n.Z)("div",{target:"e1sxqdem1"})("display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;.react-horizontal-scrolling-menu--item:not(:last-child){margin-right:",p.S.micro,";}.react-horizontal-scrolling-menu--wrapper{width:100%;}.react-horizontal-scrolling-menu--scroll-container{padding-top:4px;padding-bottom:",p.S.centi,";width:100%;",(0,c.u2)()," padding-left:var(--carousel-left-padding);padding-right:",v.Gj,";display:flex;height:max-content;overflow-y:hidden;position:relative;width:100%;}"),ProjectCard:(0,n.Z)(x.Z,{target:"e1sxqdem0"})({name:"7biq7q",styles:"user-select:none;user-drag:none"})},M="carousel-scroll-container";function O(e){var t=e.leftPadding,r=e.projects,n=e.className,i=e.style,a=(0,y.c0)(),l=a.dragStart,u=a.dragStop,c=a.dragMove,d=a.dragging,f=(0,o.useRef)(null),p=(0,o.useRef)(null);(0,o.useEffect)((function(){if(null!=f.current){var e=f.current.getElementsByClassName(M);e.length>0&&null!=e[0]&&(p.current=e[0])}}),[]),(0,y.mZ)(p);var v="number"==typeof t?t+"px":t;return(0,s.tZ)(j.ProjectCarousel,{ref:f,className:n,onMouseLeave:u,style:E(E({},i),{},{"--carousel-left-padding":v})},(0,s.tZ)(h.ScrollMenu,{scrollContainerClassName:M,onMouseDown:function(){return l},onMouseUp:function(){return u},onMouseMove:function(e){var t=e.scrollContainer;return function(e){return c(e,(function(e){t.current&&(t.current.scrollLeft+=e)}))}}},r.map((function(e,t){return(0,s.tZ)(j.ProjectCard,{key:t,itemId:String(t),project:e,onClick:function(){return!d}})}))))}var S=r(121);var B={PageLayout:(0,n.Z)("div",{target:"egx8gvb10"})("position:relative;z-index:0;--image-size:256px;",(0,A.zN)("md"),"{--image-size:180px;}display:grid;grid-template-rows:auto auto;grid-template-columns:",v.Gj," 1fr var(--image-size) min(\n        calc(",v.xZ," - var(--image-size)),\n        calc(100% - (2 * ",v.Gj,") - var(--image-size))\n      ) 1fr ",v.Gj,';grid-template-areas:". . profile content . ." "carousel carousel carousel carousel carousel carousel";padding-top:',p.S.milli,";padding-bottom:",p.S.milli,";",(0,A.zN)("xl"),"{padding-top:",p.S.nano,";}",(0,A.zN)("lg"),"{grid-template-rows:max-content auto auto;grid-template-columns:",v.Gj," 1fr min(",v.xZ,", calc(100% - (2 * ",v.Gj,"))) 1fr ",v.Gj,';grid-template-areas:". . profile . ." ". . content . ." "carousel carousel carousel carousel carousel";padding-top:',p.S.femto,";}--content-padding:",p.S.centi,";",(0,A.zN)("lg"),"{--content-padding:0;}"),ProfileWrapper:(0,n.Z)("div",{target:"egx8gvb9"})("grid-area:profile;border:8px solid white;border-radius:1000px;overflow:hidden;box-shadow:",(0,g.A)("z3"),";justify-self:start;width:var(--image-size);height:var(--image-size);img,picture{border-radius:1000px;}"),ContentWrapper:(0,n.Z)("article",{target:"egx8gvb8"})({name:"3l4eus",styles:"grid-area:content;padding-left:var(--content-padding)"}),Name:(0,n.Z)("h1",{target:"egx8gvb7"})("font-weight:900;font-size:4rem;margin-bottom:",p.S.nano,";margin-top:40px;line-height:0.9;",(0,A.zN)("lg"),"{margin-top:",p.S.micro,";}"),Headline:(0,n.Z)("h2",{target:"egx8gvb6"})("font-size:2rem;margin-bottom:",p.S.femto,";font-weight:300;"),SubHeadline:(0,n.Z)("h3",{target:"egx8gvb5"})({name:"qelznu",styles:"font-size:1.5rem;font-weight:400"}),Heading:(0,n.Z)("h3",{target:"egx8gvb4"})("font-size:1.5rem;font-weight:700;margin-top:",p.S.centi,";margin-bottom:",p.S.micro,";"),About:(0,n.Z)("div",{target:"egx8gvb3"})("margin-top:",p.S.milli,";& p{font-size:1.2rem;margin-bottom:",p.S.nano,";font-weight:400;}& a{",c.FV,";}"),EmailSpoilerHeading:(0,n.Z)("h4",{target:"egx8gvb2"})("font-size:1.05rem;margin-top:",p.S.micro,";"),Carousel:(0,n.Z)(O,{target:"egx8gvb1"})({name:"zks83",styles:"grid-area:carousel;width:100%"}),CarouselPositioner:(0,n.Z)("div",{target:"egx8gvb0"})({name:"11jygu5",styles:"margin-left:var(--content-padding);grid-area:content;pointer-events:none"})};function _(e){var t=e.data,n=t.file.childMdx,o=n.body,c=n.frontmatter,d=c.title,v=c.name,g=c.headline,A=c.subHeadline,b=c.email,h=t.topProjects.projectFiles.map((function(e){return e.childMdx}));return(0,s.tZ)(u.Z,{title:d,headerSpacing:"sparse",style:{overflowX:"hidden"}},(0,s.tZ)(l.Z,null),(0,s.tZ)(B.PageLayout,null,(0,s.tZ)(B.ProfileWrapper,null,(0,s.tZ)(i.S,{src:"../../static/img/profile.jpg",alt:"",layout:"constrained",width:256,quality:90,placeholder:"blurred",__imageData:r(5414)})),(0,s.tZ)(B.ContentWrapper,null,(0,s.tZ)(B.Name,null,v),(0,s.tZ)(B.Headline,null,g),(0,s.tZ)(B.SubHeadline,null,A),(0,s.tZ)(B.EmailSpoilerHeading,null,(0,s.tZ)(m.Z,{name:"envelope",style:{marginRight:p.S.nano}}),(0,s.tZ)(f,{email:b})),(0,s.tZ)(B.About,null,(0,s.tZ)(B.Heading,null,"About"),(0,s.tZ)(a.ZP,{content:o})),(0,s.tZ)(B.Heading,null,"Recent projects"," ",(0,s.tZ)(S.Z,{href:"/projects",text:"View All",style:{fontSize:"1.05rem",marginLeft:p.S.nano,verticalAlign:"4px"}}))),(0,s.tZ)(C,{projects:h})))}function C(e){var t=e.projects,r=(0,o.useRef)(),n=(0,o.useState)(v.Gj),i=n[0],a=n[1];return(0,o.useLayoutEffect)((function(){var e=function(){if(null!=r.current){var e=r.current.getBoundingClientRect().x;a(e)}};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),(0,s.tZ)(o.Fragment,null,(0,s.tZ)(B.CarouselPositioner,{ref:r}),(0,s.tZ)(B.Carousel,{projects:t,leftPadding:i}))}},427:function(e,t,r){var n=r(8721);e.exports={MDXRenderer:n}},8721:function(e,t,r){var n=r(9100),o=r(319),i=r(9713),a=r(7316),l=["scope","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),d=r(5239).mdx,f=r(4990).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=a(e,l),u=f(t),p=s.useMemo((function(){if(!r)return null;var e=c({React:s,mdx:d},u),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,t]);return s.createElement(p,c({},i))}},7746:function(e,t,r){var n=r(4575),o=r(3913),i=r(6525),a=r(2205),l=r(8585),u=r(9754),c=r(5957),s=r(319),d=r(3038),f=r(9713);function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}r(4477),function(e,t){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var v=l(t);!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".react-horizontal-scrolling-menu--wrapper {\n  display: flex;\n}\n\n.react-horizontal-scrolling-menu--scroll-container {\n  display: flex;\n  height: max-content;\n  overflow-y: hidden;\n  position: relative;\n  width: 100%;\n}\n\n:export {\n  wrapper: react-horizontal-scrolling-menu--wrapper;\n  container: react-horizontal-scrolling-menu--scroll-container;\n}\n");var g="react-horizontal-scrolling-menu",m="-separator",A="".concat(g,"--separator"),b="".concat(g,"--item"),h="".concat(g,"--scroll-container"),x="".concat(g,"--wrapper"),y="itemId",w="data-key",E="data-index",j=Object.freeze({__proto__:null,rootClassName:g,separatorString:m,separatorClassName:A,itemClassName:b,scrollContainerClassName:h,wrapperClassName:x,id:y,dataKeyAttribute:w,dataIndexAttribute:E});function M(e){var t=e.className,r=void 0===t?"":t,n=e.children,o=e.onScroll,i=void 0===o?function(){}:o,a=e.scrollRef,l=v.default.useMemo((function(){return"".concat(h," ").concat(r)}),[r]);return v.default.createElement("div",{className:l,onScroll:i,ref:a},n)}var O,S=v.default.memo((function(e){var t,r=e.className,n=e.id,o=e.index,i=e.refs,a=v.default.useRef(null);return i[o]=a,v.default.createElement("div",Object.assign({className:r},(f(t={},w,n),f(t,E,o),t),{ref:a}))})),B=v.default.memo((function(e){var t,r=e.children,n=e.className,o=e.id,i=e.index,a=e.refs,l=v.default.useRef(null);return a[String(i)]=l,v.default.createElement("div",Object.assign({className:n},(f(t={},w,o),f(t,E,i),t),{ref:l}),r)}));function _(e){var t=e.children,r=e.itemClassName,n=void 0===r?"":r,o=e.refs,i=e.separatorClassName,a=void 0===i?"":i,l=v.default.Children.toArray(t).filter(Boolean),u=l.length,c=v.default.useMemo((function(){return"".concat(b," ").concat(n)}),[n]),s=v.default.useMemo((function(){return"".concat(A," ").concat(a)}),[a]);return v.default.createElement(v.default.Fragment,null,l.map((function(e,t){var r,n,i=null===(n=null===(r=e)||void 0===r?void 0:r.props)||void 0===n?void 0:n[y],a=i+m,l=t+1===u;return[v.default.createElement(B,{className:c,id:i,key:"menuItem__"+i,refs:o,index:t},e),!l&&v.default.createElement(S,{className:s,id:a,refs:o,key:a,index:t+.1})]})))}function C(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function I(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function Z(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return I(r.overflowY,t)||I(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function k(e,t,r,n,o,i,a,l){return i<e&&a>t||i>e&&a<t?0:i<=e&&l<=r||a>=t&&l>=r?i-e-n:a>t&&l<r||i<e&&l>r?a-t+o:0}function P(e,t){var r=window,n=t.scrollMode,o=t.block,i=t.inline,a=t.boundary,l=t.skipOverflowHiddenElements,u="function"==typeof a?a:function(e){return e!==a};if(!C(e))throw new TypeError("Invalid target");for(var c=document.scrollingElement||document.documentElement,s=[],d=e;C(d)&&u(d);){if((d=d.parentElement)===c){s.push(d);break}null!=d&&d===document.body&&Z(d)&&!Z(document.documentElement)||null!=d&&Z(d,l)&&s.push(d)}for(var f=r.visualViewport?r.visualViewport.width:innerWidth,p=r.visualViewport?r.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,g=window.scrollY||pageYOffset,m=e.getBoundingClientRect(),A=m.height,b=m.width,h=m.top,x=m.right,y=m.bottom,w=m.left,E="start"===o||"nearest"===o?h:"end"===o?y:h+A/2,j="center"===i?w+b/2:"end"===i?x:w,M=[],O=0;O<s.length;O++){var S=s[O],B=S.getBoundingClientRect(),_=B.height,I=B.width,P=B.top,Q=B.right,z=B.bottom,N=B.left;if("if-needed"===n&&h>=0&&w>=0&&y<=p&&x<=f&&h>=P&&y<=z&&w>=N&&x<=Q)return M;var R=getComputedStyle(S),D=parseInt(R.borderLeftWidth,10),F=parseInt(R.borderTopWidth,10),H=parseInt(R.borderRightWidth,10),U=parseInt(R.borderBottomWidth,10),T=0,W=0,L="offsetWidth"in S?S.offsetWidth-S.clientWidth-D-H:0,V="offsetHeight"in S?S.offsetHeight-S.clientHeight-F-U:0;if(c===S)T="start"===o?E:"end"===o?E-p:"nearest"===o?k(g,g+p,p,F,U,g+E,g+E+A,A):E-p/2,W="start"===i?j:"center"===i?j-f/2:"end"===i?j-f:k(v,v+f,f,D,H,v+j,v+j+b,b),T=Math.max(0,T+g),W=Math.max(0,W+v);else{T="start"===o?E-P-F:"end"===o?E-z+U+V:"nearest"===o?k(P,z,_,F,U+V,E,E+A,A):E-(P+_/2)+V/2,W="start"===i?j-N-D:"center"===i?j-(N+I/2)+L/2:"end"===i?j-Q+H+L:k(N,Q,I,D,H+L,j,j+b,b);var q=S.scrollLeft,X=S.scrollTop;E+=X-(T=Math.max(0,Math.min(X+T,S.scrollHeight-_+V))),j+=q-(W=Math.max(0,Math.min(q+W,S.scrollWidth-I+L)))}M.push({el:S,top:T,left:W})}return M}function Q(e){return e===Object(e)&&0!==Object.keys(e).length}function z(e,t){var r=!e.ownerDocument.documentElement.contains(e);if(Q(t)&&"function"==typeof t.behavior)return t.behavior(r?[]:P(e,t));if(!r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:Q(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,o=e.top,i=e.left;n.scroll&&r?n.scroll({top:o,left:i,behavior:t}):(n.scrollTop=o,n.scrollLeft=i)}))}(P(e,n),n.behavior)}}var N=function(){return O||(O="performance"in window?performance.now.bind(performance):Date.now),O()};function R(e){var t=N(),r=Math.min((t-e.startTime)/e.duration,1),n=e.ease(r),o=e.startX+(e.x-e.startX)*n,i=e.startY+(e.y-e.startY)*n;e.method(o,i),o!==e.x||i!==e.y?requestAnimationFrame((function(){return R(e)})):e.cb()}function D(e,t,r,n,o,i){var a,l,u;void 0===n&&(n=600),void 0===o&&(o=function(e){return 1+--e*e*e*e*e}),a=e,l=e.scrollLeft,u=e.scrollTop,R({scrollable:a,method:function(t,r){e.scrollLeft=Math.ceil(t),e.scrollTop=Math.ceil(r)},startTime:N(),startX:l,startY:u,x:t,y:r,duration:n,ease:o,cb:i})}var F=function(e,t){var r=t||{};return function(e){return e&&!e.behavior||"smooth"===e.behavior}(r)?z(e,{block:r.block,inline:r.inline,scrollMode:r.scrollMode,boundary:r.boundary,behavior:function(e){return Promise.all(e.reduce((function(e,t){var n=t.el,o=t.left,i=t.top,a=n.scrollLeft,l=n.scrollTop;return a===o&&l===i?e:[].concat(e,[new Promise((function(e){return D(n,o,i,r.duration,r.ease,(function(){return e({el:n,left:[a,o],top:[l,i]})}))}))])}),[]))}}):Promise.resolve(z(e,t))};function H(e,t,r,n,o){var i,a,l=(null===(a=null===(i=e)||void 0===i?void 0:i.entry)||void 0===a?void 0:a.target)||e,u=t||"smooth";return l&&F(l,Object.assign({behavior:u,inline:r||"end",block:n||"nearest",duration:500},o))}var U=function(e){return document.querySelector("[data-key='".concat(e,"']"))},T=function(e){return document.querySelector("[data-index='".concat(e,"']"))};function W(e){return v.default.isValidElement(e)&&e||"function"==typeof e&&v.default.createElement(e,null)||null}var L=function(e){return e.filter((function(e){return!new RegExp(".*-separator$").test(e)}))};function V(e){var t=e.items,n=e.itemsChanged,o=e.refs,i=e.options,a=v.default.useRef(),l=v.default.useState([]),u=d(l,2),c=u[0],f=u[1],p=v.default.useRef(+setTimeout((function(){}),0)),g=v.default.useCallback((function(e){t.set(function(e,t){return s(e).map((function(e){var r,n,o=e.target,i=(null===(r=null==o?void 0:o.dataset)||void 0===r?void 0:r.key)||"";return[i,{index:String((null===(n=null==o?void 0:o.dataset)||void 0===n?void 0:n.index)||""),key:i,entry:e,visible:e.intersectionRatio>=t.ratio}]}))}(e,i)),r.g.clearTimeout(p.current),p.current=+setTimeout((function(){return r.g.requestAnimationFrame((function(){f((function(e){var r=t.getVisible().map((function(e){return e[1].key}));return JSON.stringify(e)!==JSON.stringify(r)?r:e}))}))}),i.throttle)}),[t,i]);return v.default.useLayoutEffect((function(){var e=function(e){return Object.values(e).map((function(e){return e.current})).filter(Boolean)}(o),t=a.current||new IntersectionObserver(g,i);return a.current=t,e.forEach((function(e){return t.observe(e)})),function(){clearTimeout(p.current),t.disconnect(),a.current=void 0}}),[g,n,i,o]),{visibleItems:c}}function q(e,t){var r=v.default.useState(""),n=d(r,2),o=n[0],i=n[1],a=v.default.useMemo((function(){return t=e,v.default.Children.toArray(t).map((function(e){var t,r;return null===(r=null===(t=e)||void 0===t?void 0:t.props)||void 0===r?void 0:r[y]})).filter(Boolean);var t}),[e]);return v.default.useEffect((function(){var e=a.filter(Boolean).join("");t.toItemsWithoutSeparators().filter((function(e){return!a.includes(e)})).forEach((function(e){var r,n,o=(null===(r=t.last())||void 0===r?void 0:r.key)===e&&(null===(n=t.prev(e))||void 0===n?void 0:n.key)||"";t.delete(o),t.delete("".concat(e,"-separator")),t.delete(e)})),i(e)}),[a,t]),o}var X=function(e){a(r,e);var t=p(r);function r(){return n(this,r),t.apply(this,arguments)}return o(r,[{key:"toArr",value:function(){return this.sort(s(this))}},{key:"toItems",value:function(){return this.toArr().map((function(e){return d(e,1)[0]}))}},{key:"toItemsWithoutSeparators",value:function(){return L(this.toItems())}},{key:"toItemsKeys",value:function(){return this.toItems()}},{key:"sort",value:function(e){return e.sort((function(e,t){var r=d(e,2)[1],n=d(t,2)[1];return+r.index-+n.index}))}},{key:"set",value:function(e,t){var n=this;return Array.isArray(e)?this.sort(e).forEach((function(e){var t=d(e,2),o=t[0],a=t[1];i(u(r.prototype),"set",n).call(n,o,a)})):i(u(r.prototype),"set",this).call(this,e,t),this}},{key:"first",value:function(){var e;return null===(e=this.toArr()[0])||void 0===e?void 0:e[1]}},{key:"last",value:function(){var e,t;return null===(t=null===(e=this.toArr().slice(-1))||void 0===e?void 0:e[0])||void 0===t?void 0:t[1]}},{key:"filter",value:function(e){return this.toArr().filter(e)}},{key:"find",value:function(e){return this.toArr().find(e)}},{key:"findIndex",value:function(e){return this.toArr().findIndex(e)}},{key:"prev",value:function(e){var t,r=this.toArr(),n=r.findIndex((function(t){var r=d(t,2),n=r[0],o=r[1];return n===e||o===e}));return-1!==n?null===(t=r[n-1])||void 0===t?void 0:t[1]:void 0}},{key:"next",value:function(e){var t,r=this.toArr(),n=r.findIndex((function(t){var r=d(t,2),n=r[0],o=r[1];return n===e||o===e}));return-1!==n?null===(t=r[n+1])||void 0===t?void 0:t[1]:void 0}},{key:"getVisible",value:function(){return this.filter((function(e){return e[1].visible}))}}]),r}(c(Map)),G={ratio:.9,rootMargin:"5px",threshold:[.05,.5,.75,.95],throttle:100},Y=v.default.createContext({}),J=function(e){return e.reduce((function(e,t){return e.concat(t).concat("".concat(t,"-separator"))}),[]).slice(0,-1)};e.ScrollMenu=function(e){var t=e.LeftArrow,r=e.RightArrow,n=e.children,o=e.transitionDuration,i=void 0===o?500:o,a=e.transitionEase,l=e.transitionBehavior,u=e.onInit,c=void 0===u?function(){}:u,s=e.onUpdate,f=void 0===s?function(){}:s,p=e.onMouseDown,g=e.onMouseUp,m=e.onMouseMove,A=e.onScroll,b=void 0===A?function(){}:A,h=e.onWheel,y=void 0===h?function(){}:h,w=e.options,E=void 0===w?G:w,j=e.scrollContainerClassName,O=void 0===j?"":j,S=e.itemClassName,B=void 0===S?"":S,C=e.separatorClassName,I=void 0===C?"":C,Z=e.wrapperClassName,k=void 0===Z?"":Z,P=e.apiRef,Q=void 0===P?{current:{}}:P,z=W(t),N=W(r),R=v.default.useRef(null),D=v.default.useState({}),F=d(D,1)[0],J=v.default.useMemo((function(){return Object.assign(Object.assign(Object.assign({},G),E),{root:R.current})}),[E,R.current]),K=v.default.useRef(new X).current,$=q(n,K),ee=V({items:K,itemsChanged:$,options:J,refs:F}).visibleItems,te=!!ee.length,re=v.default.useMemo((function(){return function(e){var t,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,a=L(n),l=!!(null===(t=e.first())||void 0===t?void 0:t.visible),u=!!(null===(r=e.last())||void 0===r?void 0:r.visible),c=function(t){var r;return null===(r=e.find((function(e){return e[1].key===String(t)})))||void 0===r?void 0:r[1]},s=function(){var t,r;return e.prev(null===(r=null===(t=e.getVisible())||void 0===t?void 0:t[0])||void 0===r?void 0:r[1])},d=function(){var t,r,n,o;return e.next(null===(o=null===(n=null===(r=null===(t=e.getVisible())||void 0===t?void 0:t.slice)||void 0===r?void 0:r.call(t,-1))||void 0===n?void 0:n[0])||void 0===o?void 0:o[1])};return{getItemById:c,getItemElementById:U,getItemByIndex:function(t){var r;return null===(r=e.find((function(e){return String(e[1].index)===String(t)})))||void 0===r?void 0:r[1]},getItemElementByIndex:T,getNextItem:d,getPrevItem:s,isFirstItemVisible:l,isItemVisible:function(e){return n.includes(e)},isLastItem:function(t){return e.last()===c(t)},isLastItemVisible:u,scrollNext:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=n.duration,l=n.ease,u=n.boundary,c=void 0===u?null==o?void 0:o.current:u,s=null!=e?e:null==i?void 0:i.behavior;return H(d(),s,t||"start",r||"nearest",{boundary:c,duration:null!=a?a:null==i?void 0:i.duration,ease:null!=l?l:null==i?void 0:i.ease})},scrollPrev:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=n.duration,l=n.ease,u=n.boundary,c=void 0===u?null==o?void 0:o.current:u,d=null!=e?e:null==i?void 0:i.behavior;return H(s(),d,t||"end",r||"nearest",{boundary:c,duration:null!=a?a:null==i?void 0:i.duration,ease:null!=l?l:null==i?void 0:i.ease})},scrollToItem:function(e,t,r,n,a){var l,u;return H(e,null!=t?t:null==i?void 0:i.behavior,r,n,Object.assign(Object.assign({boundary:null==o?void 0:o.current},a),{duration:null!==(l=null==a?void 0:a.duration)&&void 0!==l?l:null==i?void 0:i.duration,ease:null!==(u=null==a?void 0:a.ease)&&void 0!==u?u:null==i?void 0:i.ease}))},visibleItems:n,visibleItemsWithoutSeparators:a}}(K,ee,R,{duration:i,ease:a,behavior:l})}),[K,ee,$]),ne=v.default.useCallback((function(){return Object.assign(Object.assign({},re),{initComplete:te,items:K,visibleItems:ee,scrollContainer:R})}),[re,te,K,ee,R]),oe=v.default.useState(ne),ie=d(oe,2),ae=ie[0],le=ie[1];!function(e){var t=e.cb,r=void 0===t?function(){}:t,n=e.condition,o=e.hash;v.default.useEffect((function(){n&&r()}),[o,n])}({cb:function(){return f(ae)},condition:function(e){var t=e.cb,r=e.condition,n=v.default.useState(!1),o=d(n,2),i=o[0],a=o[1];return v.default.useEffect((function(){r&&!i&&(a(!0),t())}),[r,i]),i}({cb:function(){return c(ae)},condition:te}),hash:JSON.stringify(ee.concat(String(null==ae?void 0:ae.isFirstItemVisible)).concat(String(null==ae?void 0:ae.isLastItemVisible)))}),v.default.useEffect((function(){return le(ne())}),[ne]),Q.current=ae;var ue=v.default.useCallback((function(e){return b(ae,e)}),[b,ae]),ce=v.default.useCallback((function(e){return y(ae,e)}),[y,ae]),se=v.default.useMemo((function(){return"".concat(x," ").concat(k)}),[k]);return v.default.createElement("div",{className:se,onWheel:ce,onMouseDown:null==p?void 0:p(ae),onMouseUp:null==g?void 0:g(ae),onMouseMove:null==m?void 0:m(ae)},v.default.createElement(Y.Provider,{value:ae},z,v.default.createElement(M,{className:O,onScroll:ue,scrollRef:R},v.default.createElement(_,{refs:F,itemClassName:B,separatorClassName:I},n)),N))},e.VisibilityContext=Y,e.constants=j,e.getItemsPos=function(e){var t,r=function(e){return e.filter((function(e,t,r){var n=0===t,o=t===r.length-1,i=new RegExp(m).test(e);return!((n||o)&&i)}))}(e),n=r[Math.floor(r.length/2)];return{first:null==r?void 0:r[0],center:n,last:null===(t=r.slice(-1))||void 0===t?void 0:t[0]}},e.slidingWindow=function(e,t){var r=L(e),n=L(t);return{prev:function(){return J(function(e,t){var r=e.findIndex((function(e){return e===(null==t?void 0:t[0])})),n=t.length,o=r-n,i=o<0,a=i?0:o,l=e.slice(a,i?n:r);return l.length===n?l:e.slice(r,n)}(r,n))},next:function(){return J(function(e,t){var r=e.findIndex((function(e){var r;return e===(null===(r=t.slice(-1))||void 0===r?void 0:r[0])})),n=t.length,o=r+n+1,i=o>e.length-1,a=i?e.length-1:o,l=e.slice(i?a-n+1:r+1,a);return l.length===n?l:e.slice(e.length-n,e.length+n)}(r,n))}}},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(7294))},5414:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYFAgT/xAAYAQACAwAAAAAAAAAAAAAAAAACBAADBf/aAAwDAQACEAMQAAAB5xPLUMybZY1ou7NUJcFX/8QAHBAAAgMAAwEAAAAAAAAAAAAAAgMBBAUREhMU/9oACAEBAAEFAr+s9ihXoV0Hqcyq4r7LNkK2d7KOCOYPTebsVTJ6f//EABsRAQACAgMAAAAAAAAAAAAAAAEAAwIQEzJR/9oACAEDAQE/Aca6XBQnFT6x66//xAAcEQACAQUBAAAAAAAAAAAAAAAAAQIDEhMUMVH/2gAIAQIBAT8B2KrdzN+fhHrMcH1H/8QAHhAAAgMAAgMBAAAAAAAAAAAAAQIAAxESEyEiMQT/2gAIAQEABj8CFNFa1X2HA3Pcj9zhqiMYdnL7BrkHInbxtLessbrr9h1jJpaBgfI8yp2+v+hicgn/xAAdEAEAAgMAAwEAAAAAAAAAAAABABEhMUFhcZHB/9oACAEBAAE/IbgRAAKVcmNbjwyAB8DW9wkUJYnZVRoNbvlyvrlTkzZ+wGqPuJwKgnG4yZjxWigPE5b5P//aAAwDAQACAAMAAAAQ/wAgf//EABsRAAICAwEAAAAAAAAAAAAAAAABEaGRscHx/9oACAEDAQE/EIDiWbo8BGxdG3J//8QAHBEBAAIBBQAAAAAAAAAAAAAAAQChkREhUXHw/9oACAECAQE/EEJHa8XOb3MqQNqK9E//xAAdEAEBAAIDAAMAAAAAAAAAAAABEQAhMUFxUYHB/9oACAEBAAE/ENE1kAgAaoEQ9wpWxyBCFijZq4uI0wSNnHzhHqCREUAG0F4Gbe8EkScSYWLIH2DKaI2CPzEOKmiFCeIYxFO0lQAINve1wVKeVRXP/9k="},"images":{"fallback":{"src":"/static/7f2ca6b5d1a2adc405fb3d1bd72ba0f8/b74b6/profile.jpg","srcSet":"/static/7f2ca6b5d1a2adc405fb3d1bd72ba0f8/a23f8/profile.jpg 64w,\\n/static/7f2ca6b5d1a2adc405fb3d1bd72ba0f8/42d17/profile.jpg 128w,\\n/static/7f2ca6b5d1a2adc405fb3d1bd72ba0f8/b74b6/profile.jpg 256w,\\n/static/7f2ca6b5d1a2adc405fb3d1bd72ba0f8/daf87/profile.jpg 512w","sizes":"(min-width: 256px) 256px, 100vw"},"sources":[{"srcSet":"/static/7f2ca6b5d1a2adc405fb3d1bd72ba0f8/8d8e7/profile.webp 64w,\\n/static/7f2ca6b5d1a2adc405fb3d1bd72ba0f8/acc73/profile.webp 128w,\\n/static/7f2ca6b5d1a2adc405fb3d1bd72ba0f8/0fc77/profile.webp 256w,\\n/static/7f2ca6b5d1a2adc405fb3d1bd72ba0f8/cc23f/profile.webp 512w","type":"image/webp","sizes":"(min-width: 256px) 256px, 100vw"}]},"width":256,"height":256}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-94a3a731c6e98f83be2d.js.map