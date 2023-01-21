"use strict";(self.webpackChunkjazevedo_me=self.webpackChunkjazevedo_me||[]).push([[324],{2324:function(e,t,n){n.r(t),n.d(t,{default:function(){return ft}});var o=n(7462),r=n(4316),i=n(7294);function a(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function s(e){return e&&e.ownerDocument||document}function c(e){void 0===e&&(e=s());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}function u(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var l=!("undefined"==typeof window||!window.document||!window.document.createElement),d=!1,f=!1;try{var p={get passive(){return d=!0},get once(){return f=d=!0}};l&&(window.addEventListener("test",p,p),window.removeEventListener("test",p,!0))}catch(gt){}var h=function(e,t,n,o){if(o&&"boolean"!=typeof o&&!f){var r=o.once,i=o.capture,a=n;!f&&r&&(a=n.__once||function e(o){this.removeEventListener(t,e,i),n.call(this,o)},n.__once=a),e.addEventListener(t,a,d?o:i)}e.addEventListener(t,n,o)};var v=function(e,t,n,o){var r=o&&"boolean"!=typeof o?o.capture:o;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var g=function(e,t,n,o){return h(e,t,n,o),function(){v(e,t,n,o)}},m=n(5697),b=n.n(m),E=n(3935);function x(e){var t,n,o=(t=e,(n=(0,i.useRef)(t)).current=t,n);(0,i.useEffect)((function(){return function(){return o.current()}}),[])}var y=function(e){var t=(0,i.useRef)(e);return(0,i.useEffect)((function(){t.current=e}),[e]),t};function w(e){var t=y(e);return(0,i.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}function C(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function k(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function S(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=k(e.className,t):e.setAttribute("class",k(e.className&&e.className.baseVal||"",t))}function T(e,t){return function(e){var t=s(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var O=/([A-Z])/g;var N=/^ms-/;function R(e){return function(e){return e.replace(O,"-$1").toLowerCase()}(e).replace(N,"-ms-")}var z=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var B,M=function(e,t){var n="",o="";if("string"==typeof t)return e.style.getPropertyValue(R(t))||T(e).getPropertyValue(R(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!z.test(e))}(r)?n+=R(r)+": "+i+";":o+=r+"("+i+") ":e.style.removeProperty(R(r))})),o&&(n+="transform: "+o+";"),e.style.cssText+=";"+n};function D(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function L(e){var t;return D(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=D(e)?s():s(e),n=D(e)||t.defaultView;return t.body.clientWidth<n.innerWidth}(e):e.scrollHeight>e.clientHeight}var F=["template","script","style"],I=function(e,t,n){[].forEach.call(e.children,(function(e){-1===t.indexOf(e)&&function(e){var t=e.nodeType,n=e.tagName;return 1===t&&-1===F.indexOf(n.toLowerCase())}(e)&&n(e)}))};function Z(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var A,P=function(){function e(e){var t=void 0===e?{}:e,n=t.hideSiblingNodes,o=void 0===n||n,r=t.handleContainerOverflow,i=void 0===r||r;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=o,this.handleContainerOverflow=i,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=function(e){if((!B&&0!==B||e)&&l){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),B=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return B}()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return t=this.data,n=function(t){return-1!==t.modals.indexOf(e)},o=-1,t.some((function(e,t){return!!n(e,t)&&(o=t,!0)})),o;var t,n,o},t.setContainerStyle=function(e,t){var n={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(n.paddingRight=parseInt(M(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),M(t,n)},t.removeContainerStyle=function(e,t){Object.assign(t.style,e.style)},t.add=function(e,t,n){var o=this.modals.indexOf(e),r=this.containers.indexOf(t);if(-1!==o)return o;if(o=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var n=t.dialog,o=t.backdrop;I(e,[n,o],(function(e){return Z(!0,e)}))}(t,e),-1!==r)return this.data[r].modals.push(e),o;var i={modals:[e],classes:n?n.split(/\s+/):[],overflowing:L(t)};return this.handleContainerOverflow&&this.setContainerStyle(i,t),i.classes.forEach(C.bind(null,t)),this.containers.push(t),this.data.push(i),o},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var n=this.containerIndexFromModal(e),o=this.data[n],r=this.containers[n];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(t,1),0===o.modals.length)o.classes.forEach(S.bind(null,r)),this.handleContainerOverflow&&this.removeContainerStyle(o,r),this.hideSiblingNodes&&function(e,t){var n=t.dialog,o=t.backdrop;I(e,[n,o],(function(e){return Z(!1,e)}))}(r,e),this.containers.splice(n,1),this.data.splice(n,1);else if(this.hideSiblingNodes){var i=o.modals[o.modals.length-1],a=i.backdrop;Z(!1,i.dialog),Z(!1,a)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),_=P,W=function(e){var t;return"undefined"==typeof document?null:null==e?s().body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function V(e){var t=e||(A||(A=new _),A),n=(0,i.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:function(e,o){return t.add(n.current,e,o)},remove:function(){return t.remove(n.current)},isTopModal:function(){return t.isTopModal(n.current)},setDialogRef:(0,i.useCallback)((function(e){n.current.dialog=e}),[]),setBackdropRef:(0,i.useCallback)((function(e){n.current.backdrop=e}),[])})}var X=(0,i.forwardRef)((function(e,t){var n=e.show,r=void 0!==n&&n,s=e.role,d=void 0===s?"dialog":s,f=e.className,p=e.style,h=e.children,v=e.backdrop,m=void 0===v||v,b=e.keyboard,y=void 0===b||b,C=e.onBackdropClick,k=e.onEscapeKeyDown,S=e.transition,T=e.backdropTransition,O=e.autoFocus,N=void 0===O||O,R=e.enforceFocus,z=void 0===R||R,B=e.restoreFocus,M=void 0===B||B,D=e.restoreFocusOptions,L=e.renderDialog,F=e.renderBackdrop,I=void 0===F?function(e){return i.createElement("div",e)}:F,Z=e.manager,A=e.container,P=e.containerClassName,_=e.onShow,X=e.onHide,q=void 0===X?function(){}:X,H=e.onExit,j=e.onExited,U=e.onExiting,$=e.onEnter,G=e.onEntering,K=e.onEntered,Y=a(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),J=function(e,t){var n=(0,i.useState)((function(){return W(e)})),o=n[0],r=n[1];if(!o){var a=W(e);a&&r(a)}return(0,i.useEffect)((function(){t&&o&&t(o)}),[t,o]),(0,i.useEffect)((function(){var t=W(e);t!==o&&r(t)}),[e,o]),o}(A),Q=V(Z),ee=function(){var e=(0,i.useRef)(!0),t=(0,i.useRef)((function(){return e.current}));return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}(),te=function(e){var t=(0,i.useRef)(null);return(0,i.useEffect)((function(){t.current=e})),t.current}(r),ne=(0,i.useState)(!r),oe=ne[0],re=ne[1],ie=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(function(){return Q}),[Q]),l&&!te&&r&&(ie.current=c()),S||r||oe?r&&oe&&re(!1):re(!0);var ae=w((function(){if(Q.add(J,P),fe.current=g(document,"keydown",le),de.current=g(document,"focus",(function(){return setTimeout(ce)}),!0),_&&_(),N){var e=c(document);Q.dialog&&e&&!u(Q.dialog,e)&&(ie.current=e,Q.dialog.focus())}})),se=w((function(){var e;(Q.remove(),null==fe.current||fe.current(),null==de.current||de.current(),M)&&(null==(e=ie.current)||null==e.focus||e.focus(D),ie.current=null)}));(0,i.useEffect)((function(){r&&J&&ae()}),[r,J,ae]),(0,i.useEffect)((function(){oe&&se()}),[oe,se]),x((function(){se()}));var ce=w((function(){if(z&&ee()&&Q.isTopModal()){var e=c();Q.dialog&&e&&!u(Q.dialog,e)&&Q.dialog.focus()}})),ue=w((function(e){e.target===e.currentTarget&&(null==C||C(e),!0===m&&q())})),le=w((function(e){y&&27===e.keyCode&&Q.isTopModal()&&(null==k||k(e),e.defaultPrevented||q())})),de=(0,i.useRef)(),fe=(0,i.useRef)(),pe=S;if(!J||!(r||pe&&!oe))return null;var he=(0,o.Z)({role:d,ref:Q.setDialogRef,"aria-modal":"dialog"===d||void 0},Y,{style:p,className:f,tabIndex:-1}),ve=L?L(he):i.createElement("div",he,i.cloneElement(h,{role:"document"}));pe&&(ve=i.createElement(pe,{appear:!0,unmountOnExit:!0,in:!!r,onExit:H,onExiting:U,onExited:function(){re(!0);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==j||j.apply(void 0,t)},onEnter:$,onEntering:G,onEntered:K},ve));var ge=null;if(m){var me=T;ge=I({ref:Q.setBackdropRef,onClick:ue}),me&&(ge=i.createElement(me,{appear:!0,in:!!r},ge))}return i.createElement(i.Fragment,null,E.createPortal(i.createElement(i.Fragment,null,ge,ve),J))})),q={show:b().bool,container:b().any,onShow:b().func,onHide:b().func,backdrop:b().oneOfType([b().bool,b().oneOf(["static"])]),renderDialog:b().func,renderBackdrop:b().func,onEscapeKeyDown:b().func,onBackdropClick:b().func,containerClassName:b().string,keyboard:b().bool,transition:b().elementType,backdropTransition:b().elementType,autoFocus:b().bool,enforceFocus:b().bool,restoreFocus:b().bool,restoreFocusOptions:b().shape({preventScroll:b().bool}),onEnter:b().func,onEntering:b().func,onEntered:b().func,onExit:b().func,onExiting:b().func,onExited:b().func,manager:b().instanceOf(_)};X.displayName="Modal",X.propTypes=q;var H=Object.assign(X,{Manager:_}),j=n(4578),U=!1,$=i.createContext(null),G=function(e){return e.scrollTop},K="unmounted",Y="exited",J="entering",Q="entered",ee="exiting",te=function(e){function t(t,n){var o;o=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?i?(r=Y,o.appearStatus=J):r=Q:r=t.unmountOnExit||t.mountOnEnter?K:Y,o.state={status:r},o.nextCallback=null,o}(0,j.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===K?{status:Y}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==J&&n!==Q&&(t=J):n!==J&&n!==Q||(t=ee)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===J){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:E.findDOMNode(this);n&&G(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Y&&this.setState({status:K})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[E.findDOMNode(this),o],i=r[0],a=r[1],s=this.getTimeouts(),c=o?s.appear:s.enter;!e&&!n||U?this.safeSetState({status:Q},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:J},(function(){t.props.onEntering(i,a),t.onTransitionEnd(c,(function(){t.safeSetState({status:Q},(function(){t.props.onEntered(i,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:E.findDOMNode(this);t&&!U?(this.props.onExit(o),this.safeSetState({status:ee},(function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:Y},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:Y},(function(){e.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:E.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],a=r[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===K)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,a(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement($.Provider,{value:null},"function"==typeof n?n(e,o):i.cloneElement(i.Children.only(n),o))},t}(i.Component);function ne(){}te.contextType=$,te.propTypes={},te.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ne,onEntering:ne,onEntered:ne,onExit:ne,onExiting:ne,onExited:ne},te.UNMOUNTED=K,te.EXITED=Y,te.ENTERING=J,te.ENTERED=Q,te.EXITING=ee;var oe=te,re=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return S(e,t)}))},ie=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var o=t.resolveArguments(e,n),r=o[0],i=o[1];t.removeClasses(r,"exit"),t.addClass(r,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var o=t.resolveArguments(e,n),r=o[0],i=o[1]?"appear":"enter";t.addClass(r,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var o=t.resolveArguments(e,n),r=o[0],i=o[1]?"appear":"enter";t.removeClasses(r,i),t.addClass(r,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,o="string"==typeof n,r=o?""+(o&&n?n+"-":"")+e:n[e];return{baseClassName:r,activeClassName:o?r+"-active":n[e+"Active"],doneClassName:o?r+"-done":n[e+"Done"]}},t}(0,j.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var o=this.getClassNames(t)[n+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&r&&(o+=" "+r),"active"===n&&e&&G(e),o&&(this.appliedClasses[t][n]=o,function(e,t){e&&t&&t.split(" ").forEach((function(t){return C(e,t)}))}(e,o))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],o=n.base,r=n.active,i=n.done;this.appliedClasses[t]={},o&&re(e,o),r&&re(e,r),i&&re(e,i)},n.render=function(){var e=this.props,t=(e.classNames,a(e,["classNames"]));return i.createElement(oe,(0,o.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(i.Component);ie.defaultProps={classNames:""},ie.propTypes={};var ae,se=ie,ce=[],ue="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(ae||(ae={}));var le,de=function(e){return Object.freeze(e)},fe=function(e,t){this.inlineSize=e,this.blockSize=t,de(this)},pe=function(){function e(e,t,n,o){return this.x=e,this.y=t,this.width=n,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,de(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),he=function(e){return e instanceof SVGElement&&"getBBox"in e},ve=function(e){if(he(e)){var t=e.getBBox(),n=t.width,o=t.height;return!n&&!o}var r=e,i=r.offsetWidth,a=r.offsetHeight;return!(i||a||e.getClientRects().length)},ge=function(e){var t;if(e instanceof Element)return!0;var n=null===(t=null==e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},me="undefined"!=typeof window?window:{},be=new WeakMap,Ee=/auto|scroll/,xe=/^tb|vertical/,ye=/msie|trident/i.test(me.navigator&&me.navigator.userAgent),we=function(e){return parseFloat(e||"0")},Ce=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new fe((n?t:e)||0,(n?e:t)||0)},ke=de({devicePixelContentBoxSize:Ce(),borderBoxSize:Ce(),contentBoxSize:Ce(),contentRect:new pe(0,0,0,0)}),Se=function(e,t){if(void 0===t&&(t=!1),be.has(e)&&!t)return be.get(e);if(ve(e))return be.set(e,ke),ke;var n=getComputedStyle(e),o=he(e)&&e.ownerSVGElement&&e.getBBox(),r=!ye&&"border-box"===n.boxSizing,i=xe.test(n.writingMode||""),a=!o&&Ee.test(n.overflowY||""),s=!o&&Ee.test(n.overflowX||""),c=o?0:we(n.paddingTop),u=o?0:we(n.paddingRight),l=o?0:we(n.paddingBottom),d=o?0:we(n.paddingLeft),f=o?0:we(n.borderTopWidth),p=o?0:we(n.borderRightWidth),h=o?0:we(n.borderBottomWidth),v=d+u,g=c+l,m=(o?0:we(n.borderLeftWidth))+p,b=f+h,E=s?e.offsetHeight-b-e.clientHeight:0,x=a?e.offsetWidth-m-e.clientWidth:0,y=r?v+m:0,w=r?g+b:0,C=o?o.width:we(n.width)-y-x,k=o?o.height:we(n.height)-w-E,S=C+v+x+m,T=k+g+E+b,O=de({devicePixelContentBoxSize:Ce(Math.round(C*devicePixelRatio),Math.round(k*devicePixelRatio),i),borderBoxSize:Ce(S,T,i),contentBoxSize:Ce(C,k,i),contentRect:new pe(d,c,C,k)});return be.set(e,O),O},Te=function(e,t,n){var o=Se(e,n),r=o.borderBoxSize,i=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(t){case ae.DEVICE_PIXEL_CONTENT_BOX:return a;case ae.BORDER_BOX:return r;default:return i}},Oe=function(e){var t=Se(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=de([t.borderBoxSize]),this.contentBoxSize=de([t.contentBoxSize]),this.devicePixelContentBoxSize=de([t.devicePixelContentBoxSize])},Ne=function(e){if(ve(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},Re=function(){var e=1/0,t=[];ce.forEach((function(n){if(0!==n.activeTargets.length){var o=[];n.activeTargets.forEach((function(t){var n=new Oe(t.target),r=Ne(t.target);o.push(n),t.lastReportedSize=Te(t.target,t.observedBox),r<e&&(e=r)})),t.push((function(){n.callback.call(n.observer,o,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,o=t;n<o.length;n++){(0,o[n])()}return e},ze=function(e){ce.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(Ne(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},Be=function(){var e,t=0;for(ze(t);ce.some((function(e){return e.activeTargets.length>0}));)t=Re(),ze(t);return ce.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:ue}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=ue),window.dispatchEvent(e)),t>0},Me=[],De=function(e){if(!le){var t=0,n=document.createTextNode("");new MutationObserver((function(){return Me.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),le=function(){n.textContent="".concat(t?t--:t++)}}Me.push(e),le()},Le=0,Fe={attributes:!0,characterData:!0,childList:!0,subtree:!0},Ie=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Ze=function(e){return void 0===e&&(e=0),Date.now()+e},Ae=!1,Pe=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!Ae){Ae=!0;var n,o=Ze(e);n=function(){var n=!1;try{n=Be()}finally{if(Ae=!1,e=o-Ze(),!Le)return;n?t.run(1e3):e>0?t.run(e):t.start()}},De((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,Fe)};document.body?t():me.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Ie.forEach((function(t){return me.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),Ie.forEach((function(t){return me.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),_e=function(e){!Le&&e>0&&Pe.start(),!(Le+=e)&&Pe.stop()},We=function(){function e(e,t){this.target=e,this.observedBox=t||ae.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=Te(this.target,this.observedBox,!0);return e=this.target,he(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),Ve=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},Xe=new WeakMap,qe=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},He=function(){function e(){}return e.connect=function(e,t){var n=new Ve(e,t);Xe.set(e,n)},e.observe=function(e,t,n){var o=Xe.get(e),r=0===o.observationTargets.length;qe(o.observationTargets,t)<0&&(r&&ce.push(o),o.observationTargets.push(new We(t,n&&n.box)),_e(1),Pe.schedule())},e.unobserve=function(e,t){var n=Xe.get(e),o=qe(n.observationTargets,t),r=1===n.observationTargets.length;o>=0&&(r&&ce.splice(ce.indexOf(n),1),n.observationTargets.splice(o,1),_e(-1))},e.disconnect=function(e){var t=this,n=Xe.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),je=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");He.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ge(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");He.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ge(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");He.unobserve(this,e)},e.prototype.disconnect=function(){He.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();var Ue=i["undefined"!=typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];var $e=e=>{const t=i.useRef(e);return i.useEffect((()=>{t.current=e})),t};const Ge="undefined"!=typeof window&&"ResizeObserver"in window?window.ResizeObserver:je;function Ke(){}let Ye;const Je=()=>Ye||(Ye=function(){let e=!1,t=[];const n=new Map,o=new Ge(((o,r)=>{t=t.concat(o),e||window.requestAnimationFrame((function(){const o=new Set;for(let e=0;e<t.length;e++){if(o.has(t[e].target))continue;o.add(t[e].target);const i=n.get(t[e].target);null==i||i.forEach((n=>n(t[e],r)))}t=[],e=!1})),e=!0}));return{observer:o,subscribe(e,t){var r;o.observe(e);const i=null!==(r=n.get(e))&&void 0!==r?r:[];i.push(t),n.set(e,i)},unsubscribe(e,t){var r;const i=null!==(r=n.get(e))&&void 0!==r?r:[];if(1===i.length)return o.unobserve(e),void n.delete(e);const a=i.indexOf(t);-1!==a&&i.splice(a,1),n.set(e,i)}}}());var Qe=function(e,t){const n=Je(),o=$e(t);return Ue((()=>{let t=!1;const r=e&&"current"in e?e.current:e;if(!r)return Ke;function i(e,n){t||o.current(e,n)}return n.subscribe(r,i),()=>{t=!0,n.unsubscribe(r,i)}}),[e,n,o]),n.observer},et=n(674),tt=n(8231),nt=n(6119);let ot;!function(e){e[e.ModalOverlay=800]="ModalOverlay",e[e.Modal=900]="Modal"}(ot||(ot={}));var rt=n(6226),it=n(29),at=n(9446),st=n(917);const ct="lightbox-fade",ut="lightbox-fadeZoom",lt=nt.d1.Normal,dt={Backdrop:(0,r.Z)("div",{target:"ehyq58g6"})("position:fixed;top:0;left:0;right:0;bottom:0;z-index:",ot.ModalOverlay,";background-color:",(0,et.$_)("modalOverlay"),";backdrop-filter:blur(4px);&.",ct,"-appear{opacity:0;}&.",ct,"-exit{opacity:1;}&.",ct,"-appear-active{opacity:1;}&.",ct,"-exit-active{opacity:0;}&.",ct,"-appear-active,&.",ct,"-exit-active{",(0,nt.eR)(["opacity"]),";}"),LightboxModal:(0,r.Z)(H,{target:"ehyq58g5"})("position:fixed;top:0;left:0;z-index:",ot.Modal,";display:none;width:100%;height:100%;overflow:hidden;outline:0;display:flex;flex-direction:row;align-items:center;justify-content:center;pointer-events:none;&.",ut,"-appear{opacity:0;transform:scale(0.25);}&.",ut,"-exit{opacity:1;transform:none;}&.",ut,"-appear-active{opacity:1;transform:none;}&.",ut,"-exit-active{opacity:0;transform:scale(0.25);}&.",ut,"-exit-active{",(0,nt.eR)(["opacity","transform"],{speed:lt}),";}&.",ut,"-appear-active{transition:opacity ",lt,"ms ",nt.mv,",transform ",lt,"ms ",nt.UE,";}"),ImageWrapper:(0,r.Z)("div",{target:"ehyq58g4"})("position:relative;--base-percent:95%;width:calc(var(--base-percent) - (2 * var(--site-padding)));height:calc(var(--base-percent) - (2 * var(--site-padding)));",(0,tt.zN)("md"),"{--base-percent:100%;}"),ImagePlacer:(0,r.Z)("div",{target:"ehyq58g3"})({name:"oznals",styles:"width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none"}),ImageFigure:(0,r.Z)("figure",{target:"ehyq58g2"})({name:"pn5vpc",styles:"display:table;max-width:100%;max-height:100%"}),Image:(0,r.Z)("img",{target:"ehyq58g1"})("border-radius:8px;box-shadow:",(0,rt.A)("z1"),';user-select:none;pointer-events:auto;display:block;&[data-has-caption="true"]{border-bottom-left-radius:0;border-bottom-right-radius:0;}'),Caption:(0,r.Z)("figcaption",{target:"ehyq58g0"})("padding:",at.S.nano,";pointer-events:auto;background-color:",(0,et.$_)("bg+20"),";border-bottom-left-radius:8px;border-bottom-right-radius:8px;box-shadow:",(0,rt.A)("z1"),";display:table-caption;caption-side:bottom;")};function ft(e){let{image:t,captionChildren:n,onClose:o,className:r,style:a}=e;const s=(0,it.zP)(t),c="first"===s.render?null:s.value,u=null!=t?t:c;return(0,st.tZ)(dt.LightboxModal,{show:null!==t,onHide:o,onBackdropClick:o,className:r,style:a,transition:vt,backdropTransition:ht,restoreFocus:!1,renderBackdrop:e=>(0,st.tZ)(dt.Backdrop,e)},null===u?(0,st.tZ)(i.Fragment,null):(0,st.tZ)(pt,{image:u,captionChildren:n}))}function pt(e){let{image:t,captionChildren:n}=e;const o=i.useRef(null),r=i.useRef(null),{0:a,1:s}=(0,i.useState)(null),{0:c,1:u}=(0,i.useState)(1e4),l=c*t.aspectRatio,d=(0,i.useCallback)(((e,n)=>{var o,i;const s=n-(null!==(o=null===(i=r.current)||void 0===i?void 0:i.offsetHeight)&&void 0!==o?o:0);let c;c=e/s>t.aspectRatio?s:e/t.aspectRatio,null!==a&&(c=Math.min(c,a)),u(c)}),[a,t.aspectRatio]);return Qe(o,(e=>{let{contentRect:t}=e;return d(t.width,t.height)})),(0,i.useEffect)((()=>{if(null!==o.current&&null!==a){const e=o.current.clientWidth,t=o.current.clientHeight;d(e,t)}}),[a,d]),(0,st.tZ)(dt.ImageWrapper,null,(0,st.tZ)(dt.ImagePlacer,{ref:o},(0,st.tZ)(dt.ImageFigure,null,(0,st.tZ)(dt.Image,{src:t.src,width:l,height:c,onLoad:()=>{const e=new Image;e.src=t.src,e.onload=()=>{s(e.height)}},"data-has-caption":void 0!==n}),void 0!==n&&(0,st.tZ)(dt.Caption,{ref:r,"aria-hidden":null===a,style:{display:null===a?"none":void 0}},n))))}function ht(e){return(0,st.tZ)(se,(0,o.Z)({},e,{timeout:lt,classNames:ct}))}function vt(e){return(0,st.tZ)(se,(0,o.Z)({},e,{timeout:lt,classNames:ut}))}}}]);
//# sourceMappingURL=324-786238e1c50b61f5774f.js.map