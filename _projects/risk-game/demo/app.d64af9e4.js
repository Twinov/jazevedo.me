(function(t){function e(e){for(var a,o,s=e[0],r=e[1],h=e[2],u=0,g=[];u<s.length;u++)o=s[u],n[o]&&g.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);c&&c(e);while(g.length)g.shift()();return i.push.apply(i,h||[]),l()}function l(){for(var t,e=0;e<i.length;e++){for(var l=i[e],a=!0,s=1;s<l.length;s++){var r=l[s];0!==n[r]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=l[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var l=a[e]={i:e,l:!1,exports:{}};return t[e].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=t,o.c=a,o.d=function(t,e,l){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(l,a,function(e){return t[e]}.bind(null,a));return l},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var h=0;h<s.length;h++)e(s[h]);var c=r;i.push([0,"chunk-vendors"]),l()})({0:function(t,e,l){t.exports=l("56d7")},"458f":function(t,e,l){},"4b06":function(t,e,l){},"56d7":function(t,e,l){"use strict";l.r(e);l("cadf"),l("551c"),l("f751"),l("097d");var a=l("2b0e"),n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"app"}},[l("game-canvas",{attrs:{"highlight-color":"blue"}})],1)},i=[],o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{ref:"stageWrapper",staticClass:"stage-wrapper"},[l("v-stage",{ref:"stage",staticClass:"stage",attrs:{config:t.stageConfig}},[l("v-layer",t._l(t.waterConnectionConfigs,function(t){return l("v-line",{key:t.num,attrs:{config:t}})}),1),l("v-layer",t._l(t.territoryData,function(e,a){return l("v-territory",{key:a,attrs:{castle:e.castle,highlight:e.highlight,baseColor:e.baseColor,path:e.path},on:{"territory-click-raw":function(e){return t.handleTerritoryMouseDown(a)}}})}),1),l("v-layer",[t._l(t.castleData,function(e){return l("v-castle-icon",t._b({key:e.num},"v-castle-icon",e,!1))}),t._l(t.armyData,function(e){return l("v-army-shape",t._b({key:e.num},"v-army-shape",e,!1))})],2)],1)],1)},s=[],r=(l("6b54"),l("e814")),h=l.n(r),c=(l("a481"),l("28a5"),function(t,e){t=String(t).replace(/[^0-9a-f]/gi,""),t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),e=e||0;var l,a,n="#";for(a=0;a<3;a++)l=h()(t.substr(2*a,2),16),l=Math.round(Math.min(Math.max(0,l+l*e),255)).toString(16),n+=("00"+l).substr(l.length);return n}),u=function(t){var e,l,a,n,i,o,s,r,h=t.h,c=t.s,u=t.v;switch(n=Math.floor(6*h),i=6*h-n,o=u*(1-c),s=u*(1-i*c),r=u*(1-(1-i)*c),n%6){case 0:e=u,l=r,a=o;break;case 1:e=s,l=u,a=o;break;case 2:e=o,l=u,a=r;break;case 3:e=o,l=s,a=u;break;case 4:e=r,l=o,a=u;break;case 5:e=u,l=o,a=s;break}return{r:Math.round(255*e),g:Math.round(255*l),b:Math.round(255*a)}},g=function(t){var e,l=t.r,a=t.g,n=t.b,i=Math.max(l,a,n),o=Math.min(l,a,n),s=i-o,r=0===i?0:s/i,h=i/255;switch(i){case o:e=0;break;case l:e=a-n+s*(a<n?6:0),e/=6*s;break;case a:e=n-l+2*s,e/=6*s;break;case n:e=l-a+4*s,e/=6*s;break}return{h:e,s:r,v:h}},m=function(t){var e=t.toString(16);return 1===e.length?"0"+e:e},b=function(t){return"#"+m(t.r)+m(t.g)+m(t.b)},f=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:h()(e[1],16),g:h()(e[2],16),b:h()(e[3],16)}:null},p=function(t,e){var l=f(t);return"rgba("+l.r+","+l.g+","+l.b+","+e+")"},d=function(t,e){var l=f(t),a=g(l),n=a.v>=.7?.85:1;return a.s*=e,a.v*=n,l=u(a),t=b(l),t},y=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},v=function(t,e,l){return t<=e?e:t>=l?l:t},x=function(t){return!("undefined"===typeof t||null===t)},C=function(t){return console.log("[Error] "+t)},z=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-shape",{attrs:{config:t.config}})},P=[],w=(l("6c7b"),l("c5f6"),{props:{color:String,size:Number,x:Number,y:Number},computed:{config:function(){var t=this.size,e=this.color,l=t<5?5:t>9?12:10,a=3,n="rgba(245, 242, 242, 0.55)",i="rgb(245, 242, 242)",o={a:this.x,b:this.y};return{x:o.a,y:o.b,width:l,height:l,listening:!1,sceneFunc:function(o){o.beginPath();var s=1;if(t<=4)if(1===t)o.beginPath(),o.arc(0,0,l+a,0,2*Math.PI),o.closePath(),o.fillStyle=n,o.fill(),o.beginPath(),o.arc(0,0,l,0,2*Math.PI,!1),o.closePath(),o.fillStyle=e,o.fill();else if(2===t)o.beginPath(),o.arcTo(-l-s,0,l+a,.5*Math.PI,1.5*Math.PI),o.arcTo(l+s,0,l+a,1.5*Math.PI,.5*Math.PI,!1),o.closePath(),o.fillStyle=n,o.fill(),o.beginPath(),o.arc(-l-s,0,l,0,2*Math.PI,!1),o.moveTo(l+s,0),o.arc(l+s,0,l,0,2*Math.PI,!1),o.closePath(),o.fillStyle=e,o.fill();else if(3===t){var r=1;o.beginPath(),o.arcTo(-l-s,l+s,l+a,1.3333*Math.PI,.3333*Math.PI,!0),o.arcTo(l+s,l+s,l+a,.6667*Math.PI,1.6667*Math.PI,!0),o.arcTo(0,-l-s+r,l+a,0,Math.PI,!0),o.closePath(),o.fillStyle=n,o.fill(),o.beginPath(),o.arc(-l-s,l+s,l,0,2*Math.PI,!1),o.moveTo(l+s,l+s),o.arc(l+s,l+s,l,0,2*Math.PI,!1),o.moveTo(0,-l-s+r),o.arc(0,-l-s+r,l,0,2*Math.PI,!1),o.closePath(),o.fillStyle=e,o.fill()}else o.beginPath(),o.arcTo(-l-s,-l-s,l+a,.75*Math.PI,1.75*Math.PI,!1),o.arcTo(l+s,-l-s,l+a,1.25*Math.PI,.25*Math.PI,!1),o.arcTo(l+s,l+s,l+a,1.75*Math.PI,.75*Math.PI,!1),o.arcTo(-l-s,l+s,l+a,.25*Math.PI,1.25*Math.PI,!1),o.closePath(),o.fillStyle=n,o.fill(),o.beginPath(),o.arc(-l-s,-l-s,l,0,2*Math.PI,!1),o.moveTo(l+s,-l-s),o.arc(l+s,-l-s,l,0,2*Math.PI,!1),o.moveTo(-l-s,l+s),o.arc(-l-s,l+s,l,0,2*Math.PI,!1),o.moveTo(l+s,l+s),o.arc(l+s,l+s,l,0,2*Math.PI,!1),o.closePath(),o.fillStyle=e,o.fill();else o.beginPath(),o.arc(0,0,l,0,2*Math.PI,!1),o.closePath(),o.fillStyle=e,o.fill(),o.fillStyle=i,o.font="bold 15px Roboto",o.shadowBlur=6,o.shadowOpacity=.4,o.textBaseline="middle",o.textAlign="center",o.fillText(t,0,2)}}}}}),M=w,k=l("2877"),D=Object(k["a"])(M,z,P,!1,null,null,null),E=D.exports,I=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-image",{attrs:{config:t.config}})},S=[],T=new Image,F=28,O=28;T.src="/projects/risk-game/demo/castle.png";var j={props:{x:Number,y:Number},computed:{config:function(){var t={a:this.x,b:this.y};return{x:t.a-F/4,y:t.b-O/4,image:T,width:F,height:O,listening:!1}}}},B=j,_=Object(k["a"])(B,I,S,!1,null,null,null),A=_.exports,W=l("7591"),$=l.n(W),L=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-group",[l("v-path",{attrs:{config:t.pathConfig},on:{mouseover:t.handleMouseOver,mouseout:t.handleMouseOut,mousedown:t.handleMouseDown,tap:t.handleMouseDown}}),t.isHighlighted?l("v-group",{attrs:{config:t.clipConfig}},[l("v-path",{attrs:{config:t.highlightConfig}})],1):t._e()],1)},R=[],Y=l("362d"),H=l.n(Y),X={props:{castle:Object,highlight:String,baseColor:String,path:String},data:function(){return{mouseOver:!1}},methods:{handleMouseOver:function(){this.mouseOver=!0},handleMouseOut:function(){this.mouseOver=!1},handleMouseDown:function(){this.$emit("territory-click-raw")}},computed:{pathConfig:function(){return{x:0,y:0,scale:{x:1,y:1},data:this.path,fill:this.color,shadowBlur:10}},highlightConfig:function(){return{x:0,y:0,scale:{x:1,y:1},data:this.path,stroke:this.highlight,strokeWidth:10,opacity:.4,lineJoin:"round",fill:p(this.color,.8),listening:!1}},clipConfig:function(){var t=H.a.Path.parsePathData(this.path);return{clipFunc:function(e){e.beginPath();for(var l=0;l<t.length;l++){var a=t[l].command,n=t[l].points;switch(a){case"L":e.lineTo(n[0],n[1]);break;case"M":e.moveTo(n[0],n[1]);break;case"C":e.bezierCurveTo(n[0],n[1],n[2],n[3],n[4],n[5]);break;case"Q":e.quadraticCurveTo(n[0],n[1],n[2],n[3]);break;case"A":var i=n[0],o=n[1],s=n[2],r=n[3],h=n[4],c=n[5],u=n[6],g=n[7],m=s>r?s:r,b=s>r?1:s/r,f=s>r?r/s:1;e.translate(i,o),e.rotate(u),e.scale(b,f),e.arc(0,0,m,h,h+c,1-g),e.scale(1/b,1/f),e.rotate(-u),e.translate(-i,-o);break;case"z":e.closePath();break}}}}},color:function(){var t=this.baseColor,e=2.5,l=.15;return this.mouseOver&&this.isHighlighted?d(t,e):this.isHighlighted?c(d(t,e),-l):this.mouseOver?c(t,l):"#"+t},isHighlighted:function(){return x(this.highlight)}}},N=X,J=Object(k["a"])(N,L,R,!1,null,null,null),q=J.exports;a["default"].use($.a);var G={props:{highlight:Array,highlightColor:String},components:{"v-army-shape":E,"v-territory":q,"v-castle-icon":A},data:function(){return{stageObj:void 0,stageDimensions:{w:400,h:window.appHeight},touchState:{lastDist:0,point:void 0},scaleBounds:{min:.8,max:5},mouseOver:-1}},computed:{stageConfig:function(){var t=this;return{width:this.stageDimensions.w,height:this.stageDimensions.h,draggable:!0,dragBoundFunc:function(e){return t.clampPosition(e)}}},territoryData:function(){return[{castle:null,highlight:null,baseColor:"C5C7CF",path:"m50 73.7h18.1l9.6 5.9 4.7 11.4 12.2 5.8 18.5-8.5 1.6-19.3-10.8-15.7 20.2-13.8 4.2-12.8-0.3-1.5-8.2 0.5-9.3-4.7-12.3 8.2-8.2-5.8-15.7 5.8h-19.3l-15.8-0.6-10 12.9v19.3l19.9 7.6 0.9 5.3"},{castle:{a:175.60000610351562,b:63.29999923706055},highlight:"blue",baseColor:"C5C7CF",path:"m137.8 72.7 9 14.1c3 0.9 25 7.3 26.1 7.6 1 0.3 17.4 3.6 26 5.3l0.3 0.1 7.1-13.1 24.6-6.4 14.6 1.8s-0.6-11.1-2.3-11.1c-1.8 0-31.6-3.5-31.6-3.5s-7-5.8-7-7.6 4.7-16.4 4.7-16.4 6.4-5.3 1.8-7.6-7-6.4-12.3-7-15.5-4.1-18-1.8-5.4-4.7-7.8-5.3-13.4-0.6-16.9 2.9-18.7 0-18.7 0l-7.5 0.5 0.4 1.8-4.6 13.9-19.1 13.1 9.7 14c0-0.1 21.5 4.7 21.5 4.7"},{castle:null,highlight:null,baseColor:"C5C7CF",path:"m34.6 147.7 17.7-3.4 20-9.4 28.2-15.9c21.4-14.8 23.1-14.7 24.7-13.9 1.9 0.6 15 2.8 23.9 4.3l30.3 4.6 24 15 6.6-1.8c-3.3-5.1-7.5-11.7-9-12.5-1.9-1-2.3-10.1-2.3-13.1h-0.2c-1-0.2-24.8-5-26.1-5.3s-25.5-7.4-26.6-7.7l-0.4-0.1-8.9-14-20.1-4.5-1.7 19.7-20.3 9.4-13.7-6.5-4.7-11.6-8.7-5.2h-17l0.6 3.9s-9.9 3.5-11.7 3.5-15.8 8.8-15.8 8.8v20.5 14.6l10.5 17.5 0.7 3.1"},{castle:null,highlight:"blue",baseColor:"C5C7CF",path:"m42.1 216.9 12.3 7.6-13.4 7 26.9 8.2 14.8 7.4 13.1-14.7 1.6-25.2-19.4-5-7.1-31.2 8.7-10.1-7.4-11.4 2.1-9.1-20.5 9.5-17.9 3.5 3.3 15.6 4.1 22.2-11.1 14s-15.8-2.9-15.8-1.2c0 1.8 25.7 12.9 25.7 12.9"},{castle:null,highlight:"blue",baseColor:"C5C7CF",path:"m82.8 197.5 20.6 5.3-2.1 31.9-3.5 4 14.4 0.1 8.7 4 23.9-2.4c2.3-13.2 3.2-13.2 4-13.2 0.7-0.2 6.3-3 11.4-5.7v-32.1l-11.5-23.4 5.9-23.8 20.9-9.9 6.9-9.6-5.1-3.2-29.1-4.4c-16.5-2.7-22.2-3.8-24.2-4.3-2.7 1.2-12.1 7.4-20.4 13.1l-0.2 0.1-22.4 12.6-2.8 11.8 8.4 12.9-9.6 11.2 5.8 25"},{castle:null,highlight:null,baseColor:"C8E5C1",path:"m176.9 133.7-20.5 9.7-5.5 22.2 5.2 10.6 38.7-3.6 21.3 13.3 29.6-11.4 25.8 7.9 18.1-31.7 0.5-0.1c11.5-1.9 24.3-4.4 26.4-5.3 0.2-2.7 0.1-19.7 0-31.2l-13.8-30.1 0.5-23.8-16.2 4.7-14.6 10.5 4.1 11.1 17 5.3-8.8 18.1s0.6 5.3 2.3 7.6c1.8 2.3 14.6 5.3 14.6 5.3s-8.2 9.9-10.5 9.9-32.1-0.6-32.1-0.6v9.9l-11.1 5.3v11.7l-14.6 0.6s-5.9-12.9-5.9-14.6-2.3-11.7-2.3-11.7-9.4 1.2-11.1-0.6c-0.1-0.1-0.3-0.3-0.4-0.5l-1.1 0.2-9.8 2.7-18.5-11.5-7.3 10.1"},{castle:{a:105.19999694824219,b:286},highlight:null,baseColor:"C8E5C1",path:"m133.9 330.9 11.8-3.7-5.7-29-11.3-24.8h-28.3l-5.9-4.6c-0.6 0.9-1.2 1.5-1.6 1.8-2.3 1.8-25.7 3.5-28.1 4.7s-19.3 5.3-21 5.3-14-8.2-15.8-11.1-6.4-11.7-11.7-11.7-15.7 14.6-16.3 17.5 14.6 17 14.6 17l19.3 1.2 21 3.5 17.5 22.6 33.3-6.9 28.2 18.2"},{castle:null,highlight:"blue",baseColor:"C8E5C1",path:"m101.1 271.5h28.8l11.9 26.2 5.7 28.9 22-7 19.9-24.4 17.7-7.1-2.5-9.4c-3 0.6-12.6 2.4-15.4 2.4-3.5 0-6.1-12.5-7.3-20v-0.2l4.1-11.8-1-8.1-12.3-8.4-11.5-9.5c-6.3 3.4-10.2 5.4-11.7 5.8-0.6 1.2-1.9 7.1-2.8 12.4l-0.1 0.7-25.9 2.6-9-4.2h-15.6l-8.1 9.1 14.2 6.4s-3.7 6.8-6.7 11.2l5.6 4.4"},{castle:null,highlight:"blue",baseColor:"C8E5C1",path:"m240.1 280.1v-29.8l-17.9-40.6 5.9-26.5-12.4 4.8-21.5-13.5-37.3 3.5 5.3 10.8v32.7l11.6 9.6 12.9 8.8 1.2 9.4-4.1 11.7c1.6 9.4 4.1 17.7 5.4 18.1 3 0 15.8-2.5 15.9-2.5l0.9-0.2 2.9 10.9 6.8-2.7 24.4-4.5"},{castle:{a:252.3000030517578,b:198},highlight:"blue",baseColor:"C8E5C1",path:"m292.1 187.8-19.8-3.3-0.1 0.1-26.6-8.2-15.3 6-6.1 27.1 17.9 40.6v29.7l5.2-1 13.5 9.1 34.6-51.7-3.3-48.4"},{castle:null,highlight:null,baseColor:"C8E5C1",path:"m297.3 235.8 23.8 8-5.1-8.7 18.8-10-2.1-19.5 9.9-4.6c-3.5-6.4-8.8-15.9-9.5-16.8 8.1 6.5-3.2-2.7-16.5-15.4l-0.4-0.4 2.5-15.3-2.1-6.1c-2.4 0.9-8.7 2.4-26 5.3l-17.3 30.4 20.6 3.4 3.4 49.7"},{castle:null,highlight:null,baseColor:"A0B394",path:"m273.6 319.6c0 0.5-0.9 2-2.3 3.9l13 19c4.7 2.5 9.7 5 13.6 6.9l11.5-9-8.4-8-2.2-9.4 2.1-15.2-13.4-24.7-15-9.5-10.2 15.2 9.4 6.3c0.1 0.1 1.9 22.6 1.9 24.5"},{castle:null,highlight:null,baseColor:"A0B394",path:"m333.3 325.9c4.6 0.5 8.3 0.9 11.3 1.3l-5.8-21.2 3-19.8-14.4-17.3-5-22.7-25.6-8.6-23.1 34.5 15.4 9.7 13.9 25.7-2.1 15.5 2 8.5 8.2 7.8 22-13.4h0.2"},{castle:null,highlight:"blue",baseColor:"A0B394",path:"m242.3 356.5-6.3 10 3.6 9.8 17.4 5 29.3 5.9 4.8-9 15.3-7.3c-1.3-5.6-2.7-10.8-3.4-12.7-2.3-0.9-7.9-3.5-22-10.9l-0.6-0.3-12.6-18.5c-4.1 5.4-8.8 11.2-8.8 11.2l-22.6 10 5.9 6.8"},{castle:{a:243.39999389648438,b:435.70001220703125},highlight:null,baseColor:"A0B394",path:"m193.7 502.6 10.2-2.2 23.8-36.9 25.6 9.3 28.3-2.7 9 4.2c-0.7-4.3-1.3-7.4-1.8-8.3-1.2-2.3-12.3-24-9.9-28.6s0-36.2 0-36.2l6.5-12-28.8-5.8-18.4-5.3-3.4-9.3-3.7 5.9-17.9 25.4 14.4 25.9-21.5 34-14.9 29.3 6.4-0.6-3.9 13.9"},{castle:null,highlight:"blue",baseColor:"A0B394",path:"m204.4 459.1 20.8-33.5-14.4-25.9 18.6-26.4 10.5-16.6-5.4-6.3-5.9 2.6-22.8-8.8s-14 9.4-8.8 9.4 9.9 6.4 9.9 6.4l12.3 4.1-16.4 11.1-18.1 14-3.9 7s-14.2 2.9-18.9 4.1-27.5 8.8-29.2 9.4c-1.8 0.6-19.3 5.9-21 6.4s-24 12.3-24 12.3 7 15.8 2.9 15.8h25.1l39.2-10.5 15.2-11.1 10.7 11.1v22.2l-10.7 7.6-15.8 8.8-1.8 18.7h21l15.3-1.5 15.6-30.4"},{castle:null,highlight:"blue",baseColor:"F3E4D4",path:"m336.6 224.1 9.3-4.9 26.4 20.4 20.1 11.9 9-10.9c-0.5-0.6-0.8-1.1-0.9-1.4-0.6-1.8-2.9-16.4-2.9-16.4l4.7-7.6 8.8-4.7-13.4-3.5-8.2 3.5-2.9-11.1s0.5-1 1.1-2.3l-14.2-0.4-12.4-5.6-17.3 7.5c0.4 0.7 0.8 1.5 1.3 2.3l0.5 0.9-10.5 4.9 1.5 17.4"},{castle:{a:356.79998779296875,b:286},highlight:null,baseColor:"F3E4D4",path:"m358.5 329.8c0.5 0.6 6.5 5.3 10.8 8.8 1 0.8 1.9 1.5 2.7 2.2l16.3-1.3-7.6-20.3 8.4-31 2.5-34.9-20.4-12.1-25.5-19.7-27.1 14.4 5.2 8.9 0.2 0.1 5.2 23.3 14.6 17.6-3 20.3 6 21.6c10.9 1.2 11.5 1.9 11.7 2.1"},{castle:null,highlight:null,baseColor:"F3E4D4",path:"m436.4 309.4v-15.8l9.5-2.1v-9.3l-11-4.8 6.2-13 0.4-0.7-4.7-10.6s-5.9-8.3-7.6-7.6-6.4-6.4-8.2-6.4-12.3 9.9-12.3 9.9-3.7-3.9-6.1-6.9l-9 11-2.5 35.4-8.3 30.6 7.4 19.7 9.2-7.4 14.1 1.6h22.3l-7.1-14 7.7-9.6"},{castle:null,highlight:null,baseColor:"F3E4D4",path:"m387 414.4 1.7-5.7 0.9 0.3c0.6 0.2 15 4.3 16.2 4.7 0.7 0 4.4-1.3 7.9-2.8l-8.5-9.3 7-14.8-20.5-14.9c-4-6.7-14.5-24.1-14.9-24.7-0.4-0.4-4.8-3.9-8.7-7-6.8-5.4-10.2-8.2-11-9-1.5-0.7-13.1-2.2-23.6-3.4l-22 13.4-11.6 9.1c2.7 1.3 4.7 2.3 5.5 2.5 1.9 0.1 3.1 1 6.5 15.4l7.4-3.5 20.5 7.6s10.5 3.5 13.4 7 19.3 18.7 19.3 18.7l14 15.8c-0.1 0.1 0.1 0.3 0.5 0.6"},{castle:null,highlight:null,baseColor:"F3E4D4",path:"m378.4 346.1c0.4 0.6 13 21.4 14.8 24.6l20.4 14.8 24.7-2.4 16.3-13.1c2.6-3.4 5.3-7.6 5.2-8.6-0.6-1.4-4.6-10.9-5.3-12.5l-17.5-14h-23.6l-13.5-1.6-9.8 7.9-15.9 1.3c3.2 2.7 4 3.3 4.2 3.6"},{castle:{a:452.1000061035156,b:304.1000061035156},highlight:"blue",baseColor:"F3E4D4",path:"m518.5 319.6-7 3.6-12.3-7h14l-1.8-11.1-18.1 4.7-7-4.7-11.7-5.9-0.6-9.4-20.5-7s18.1-5.3 17-9.9-12.3-9.9-13.7-9.9-13.1 5.9-13.1 5.9l-1.3-2.9-5 10.5 10.3 4.5v12l-9.5 2.1v14.9l-7.4 9.1 7.2 14.1 18 14.4 0.1 0.2c0 0.1 4.7 11.2 5.4 12.8 0.7 1.5-1.6 5.2-4.1 8.6l21.3-3.9 15.3 4.3c0.5-1.3 2.1-6.4-2.5-7.9l-5.3-1.8 5.3-9.9 1.8-7 9.9-2.9s13.4-8.8 15.2-8.8 8.8-12 8.8-11.8c0.1 0.3-8.7 0.1-8.7 0.1"},{castle:null,highlight:null,baseColor:"F3E4D4",path:"m478.7 367.4-23 4.2-16.6 13.4-25.1 2.4-6.5 13.8 9.4 10.3-1.2 0.5c-4 1.8-9.1 3.9-10.5 3.4-1.1-0.4-12-3.5-15.2-4.4l-1.4 4.8c3.8 3.7 11.4 11.3 11.4 12.6 0 1.8 18.7 5.3 18.7 5.3l7.6-5.3 17.5 5.3 10.5-9.9s2.9-12.3 5.3-12.9 23.4-9.4 23.4-9.4l15.8-12.9-4.2-16.9-15.9-4.3"},{castle:{a:138.60000610351562,b:540.7999877929688},highlight:null,baseColor:"EAE7C4",path:"m169.7 564.6c17.1 16.2 17.1 17.3 17.1 18.7 0 0.7-0.4 5-0.8 9.3l19.8-6.3 19.7-47-11.2-33h-10.8l-25.6 5.5-21.5 16.8-23.8 1.3c-20.4 30.2-23.3 31.5-25.4 31-1.9 0.3-8.6 3.1-15.1 6.1l13.6 17.2 13.4-9.3 24.9-8.4 24.8-2.7 0.9 0.8"},{castle:null,highlight:null,baseColor:"EAE7C4",path:"m215.7 504.5 11.6 34.3 34.2 18 47.3-43-9.2-29-19.1-8.9-27.9 2.7-22.6-8.1-21.9 34h7.6"},{castle:null,highlight:null,baseColor:"EAE7C4",path:"m200.7 658 21.8-33.2 0.2-0.1 27.2-13.2 36.9-16.2-25.8-36.6-34-17.9-19.8 47.2-21.4 6.8c-0.3 2.8-0.5 5.3-0.7 6.8l-0.1 0.7-18.6 28.5 11.7 19.4 2.1 17.6 17.2 11.5-1-26.7 4.3 5.4"},{castle:null,highlight:null,baseColor:"EAE7C4",path:"m309.9 517.1-0.4-1.3-46.6 42.3 25.9 36.7 69.2 5.7 2.3-15.1 1.7-0.5c2.9-0.9 6.3-2.1 8.2-3-0.4-1.8-0.5-4.9 0-10.2l-10.9 4.5-0.8-3.2c-7-26.7-6.6-28.3-6.4-29.1 0.3-1.4 3.6-10.7 5.4-15.9-8.1-1.8-18-3.8-19.3-3.9-1.6 0-15.4-3.5-26.6-6.5l-1.7-0.5"},{castle:null,highlight:"blue",baseColor:"EAE7C4",path:"m342.9 666.2-1.5-1 3-16.8 6.2-17.3 19-16.1-3.8-4.5-8.2-7.7v-0.3l-69.3-5.7-37.7 16.5-26.9 13.1-21.9 33.3 12.7 16.2 20-8 32.1 4.7 19.5-8.4 14.8-3.3 23.1 24.9 25.6 18.7 23.3-5.3c1.4-7.8 2.7-15.9 3-19.1-3.2-1.1-12-2.5-14.1-2.5-0.7-0.2-3.3-0.2-18.9-11.4"},{castle:null,highlight:null,baseColor:"B4CDE2",path:"m320 69.1 18.1 7.1 7.2 3 6.6-20.2 16-6.2 12.9-3.7v-12l-7.6-3.2h-9.1l-6.8 4.7-12-11.2-0.4-0.2-8.2 3.8-9.3 12.8-15.1 11.9 7.7 13.4"},{castle:null,highlight:null,baseColor:"B4CDE2",path:"m357.5 36.2 6-4.2 10.3 0.1 8.9 3.8v14.8l-14.1 4-15.1 5.9-6.4 19.4 9.3 3.8 14-2.4 5.8-7 15.2 3.3c0.8 0.5 1.5 1 2.1 1.5l5.4-12 8.5-9v-16.2l12.3-8.7 5.8-19.4 9.1-3 15.1-6.8h19.9l-13.6-4.1h-40.3s-9.4 10.5-13.4 8.2-40.3 11.1-40.3 11.1l-15 7 10.5 9.9"},{castle:{a:322.5,b:87.0999984741211},highlight:null,baseColor:"B4CDE2",path:"m318.1 114.9 24.3-4.5 21.7 13 20.9-3.6 12-16.2 1.6-3.2c1.7-5.3 3.4-11.5 3.5-12.8-0.9-0.9-7.3-5.3-11.8-8.4l-13.5-2.8-5.5 6.6-15.2 2.7-18.8-7.7-18.6-7.4-8-13.8-2.1 1.6-3.8 1.1-0.5 23.9 13.7 30.2c0.1 0.5 0.1 0.9 0.1 1.3"},{castle:null,highlight:null,baseColor:"B4CDE2",path:"m320.7 153-2.4 14.8c6.1 5.8 15.2 14.3 16 14.9 0.2 0.1 0.8 0.4 8.4 14.3l18.3-8 10.6 4.8 12.9-12.3-12.2-25.8 20.6-15.7-7.9-18.2-21.2 3.6-21.7-13-23.9 4.5c0.1 8.8 0.2 25.9 0 28.7l2.5 7.4"},{castle:null,highlight:null,baseColor:"B4CDE2",path:"m420.3 150.8 4.7-18.1 12.9-14.6 2.4-0.7-3.7-9c-7.5-3.2-19-7.8-20.5-8.1-1.5-0.2-10.5 1.4-16.1 2.5l-13.4 18 8.6 19.7-20.6 15.6 12.1 25.6-13.3 12.7 0.5 0.2 14.6 0.4c1.1-1.9 2.3-3.8 3.1-4 1.8-0.6 7.6-14 7.6-14l-2.9-9.9 12.9-10.5 11.1-5.8"},{castle:{a:423.70001220703125,b:61.79999923706055},highlight:null,baseColor:"F2F2F2",path:"m450.1 19.9c-2.3 1.2-2.9-10.5-2.9-10.5l-8.7 2.2-11.6 3.8-5.7 19.1-12 8.5v15.9l-8.9 9.4-5.3 11.9c5.6 3.9 8.6 6.2 8.9 6.7 0.2 0.4 0.6 1.2-3.4 13.8 3.7-0.7 13.8-2.6 15.8-2.3 2.1 0.3 16.8 6.5 20.6 8.1l6-8.6 14.5-15 16.6 12.1h18.7l4.3-20.9 24.3-7.4 8.8-34 2-18.1-11.5 0.6-25.7 12.9 13.1-13.5s-2.3-1.2-7.6-1.2-33.3 2.9-33.3 2.9-14.6 2.4-17 3.6"},{castle:null,highlight:null,baseColor:"F2F2F2",path:"m520.7 97-19.2 12-8.3-12.1h-19.6l-15.8-11.5-13.3 13.7-6.1 8.7 3.7 9 7.5-2.2 24.5 12.3 12.3 18.7-2.9 13.4 9.9 3.5-3.5 11.1s-7 10.5-9.4 11.7-14-0.6-14-0.6-13.4 2.9-14.6 5.3-5.3 17.5-5.3 17.5l16.4-5.3 3.5 5.9 13.4-14.6 18.1-1.8 5.9-13.4-2.9-16.3 1.2-13.4-2.9-10.5 7.6-11.7 15.8-8.2-0.6-8.2 8.8-7.3-10.2-5.7"},{castle:null,highlight:null,baseColor:"F2F2F2",path:"m587.7 72.2-6.9-37 0.1-0.2 10.2-22.4-7.8 2-30.9-1.2-18.1 1-2.1 18.6-9.1 35.2-24.2 7.3-4.2 20.2 7.3 10.7 18.7-11.6 11.7 6.5 3.1-2.5 19.3-15.8 17.5 6.4 1.9 1.8 13.5-19"},{castle:null,highlight:null,baseColor:"F2F2F2",path:"m593.5 12-10.7 23.5 3.6 19.5 52-7.4 50.8-12.6 2-21h-0.1c-3.1-1.8-27.6-4.1-27.6-4.1l-1.8 12.3-11.8-4.1s-17.4-7-19.1-8.2-29.2 0-29.2 0l-8.1 2.1"},{castle:null,highlight:null,baseColor:"F2F2F2",path:"m689.3 37-50.6 12.5-52 7.4 2.9 15.7-14 19.8 7.6 6.9s-3.7 8.8 0 8.8 15.9-8.2 15.9-8.2l-8.8-11.7 12.9-9.3s31-11.1 33.9-9.9 41.5-0.1 41.5-0.1l17.3 3.9-6.6-35.8"},{castle:{a:727.5,b:51.29999923706055},highlight:null,baseColor:"F2F2F2",path:"m758.8 31.6-20.5-5.3s-7 1.2-8.8 0-14-12.3-14-12.3-16.3 1.3-22.5 0.5l-2 21.2 6.9 37.5 7 1.6 33.9 6.4 21-4.1v-15.7l11.1-21-12.1-8.8"},{castle:null,highlight:null,baseColor:"DBA9A9",path:"m628.9 357.1 14.8-17.1v-19.8h32.6l17.8-12.5 5.3-12.3c-0.8-2.2-1.5-4.3-1.7-4.8-0.4-1.3-9.2-2.6-9.2-2.6s-18 3.1-19.3 3.5-11.4 2.6-11.8 1.3-5.5-3.5-5.5-3.5l-8.3 1.3-7.2-20.2h-8.4l-5.3 8.8-4.8-1.8-10.1 2.6-10.1-5.7h-11l-5.3 4-6.6 11.4 2.6 9.6 16.7 18-7.5 4.4-4 11.4 8.8 21.9 8.3 18 4.4-6.1h9.2l5.3-7.9 8.8-4 1.5 2.1"},{castle:{a:771.2000122070312,b:268.70001220703125},highlight:"blue",baseColor:"DBA9A9",path:"m703.8 262.2c-2.6 0.9-3.5 8.1-3.5 8.1l3.5 0.2s9.6-0.4 10.9 0 12.7 3.5 12.7 3.5l8.8-3.5s17.5 3.5 19.7 4.8 4 11 4 11v15.3l-11 3.5h-8.8s-10.5 4.4-11.8 5.3-10.1 0.9-10.1 0.9l-9.2-10.1-7.5 0.4s-0.6-1.6-1.3-3.5l-4.7 10.9-17.3 12.1 22.7 14.8 37.2 10.7 32.1-20.5 13-28.4 24.3-14.1 9-14.8-8.9-5-13.2-7.5-11.4-4.8-14.9 4.8-17.1-7.4s-19.3 1.3-21 1.3-12.7-3.1-15.3-3.9-18.4-1.3-20.2-0.4-7.5 6.1-7.5 6.1 11.4 3.1 13.6 3.1c2.3 0.1 5.8 6.2 3.2 7.1"},{castle:null,highlight:null,baseColor:"DBA9A9",path:"m842.8 345.2-3-9.9v-11.8l-3.5-0.9s-4.4 10.1-5.7 10.1-2.2-7.9-2.2-7.9l2.2-13.6v-6.1l-4-16.7v-14l-8.3-4.6-0.1 0.1-9.2 15.2-24.2 14-13 28.3-32.3 20.6 9.7 25.4 93.6-28.2"},{castle:null,highlight:"blue",baseColor:"DBA9A9",path:"m683 405.4 5.6-3.2 12.7 0.5 0.8 1c1.1 1.4 2.5 3.1 3.4 4.6l35.2-4.7 0.2 0.1c2.2 0.9 4.3 1.7 6.3 2.6l6.7-14.8-16.3-43-37.5-10.9-23.7-15.5h-30.7v18.6l-15.6 18.1 6.7 9.5v11l6.5 16.5 11.7 6.8 16.9-1.7 11.1 4.5"},{castle:null,highlight:"blue",baseColor:"FFD8B3",path:"m859.5 377.9c-0.9-1.3-5.7-9.2-7-10.5s0-10.1 0-10.1l-9.2 3.5v-13.6l-93.4 28.2 6.1 16.1-7 15.5c30.3 12.4 37.7 16.4 39.5 17.8l12 1.5 7.3-5.7v-9l15-2.4 0.2 0.1c2 0.8 4.5 1.6 5.2 1.7 1.1-0.5 7.4-4 11.2-6.3l0.2-0.1 25.9-6.6v-8.3c0.1 0.1-5.2-10.5-6-11.8"},{castle:null,highlight:null,baseColor:"FFD8B3",path:"m698.4 408.4-8.4-0.4-6.6 3.8-12.5-5.1-17.3 1.8-14.8-8.6-12.1-10.2-15.3 7.7-6.6-8.5-2 2.7v14.2h9.5l10 21.6-6 16.1c17 7.1 35.4 14.5 38.1 14.9h2.5l3.3-2.3 6.7-8.3 1-5.4-13.6-3.2 7.6-13.8 18.8 2.9 12.3-0.4 1-6.2 0.4-0.6c2.5-3.4 5.3-7.6 6.3-9.4-0.5-0.9-1.4-2.2-2.3-3.3"},{castle:{a:729.2999877929688,b:453},highlight:"blue",baseColor:"FFD8B3",path:"m749.7 492.6 17-11.2-3.8-42.3 0.6-0.3c10.3-5.1 21.3-11.1 23.5-13-3.9-2.6-30-13.6-46.5-20.3l-34 4.6c0 0.1 0.1 0.1 0.1 0.2 0.4 1.3 0.9 2.7-7 13.5l-1.6 9.5-17.5 0.5-15.4-2.4-2 3.7 11.6 2.7-2.3 12.3-5.3 6.6 1.7 4.5 9.2 10.1 9.2 8.8 4.4 9.6s13.6 6.6 14.9 6.6 8.8-2.2 8.8-3.5 0.9-4.8 0.9-4.8l-7.5-4-4.8-4.4-3.1-7 8.8 3.1 10.5 3.1 9.7 4.8 19.3 8.8 0.6 0.2"},{castle:null,highlight:"blue",baseColor:"FFD8B3",path:"m840.3 406.4c-5 2.9-11 6.3-11.6 6.4-0.3 0.1-0.9 0.2-6.1-1.7l-12.8 2.1v8.3l-8.7 6.8-12.4-1.6c-1.4 1.5-6.3 5-23.7 13.6l3.8 42.1-16.9 11.1 14.2 5.8 14-3.1 11-3.5s9.7-6.1 10.5-7.9c0.9-1.8 7.5-5.7 7.5-5.7l11.8-3.5 6.6 6.1 7.9-4 6.6-10.5 3.1-14.9 3.5-12.3 6.1-5.3 12.3-4.4 6.6-2.2v-21l-7.4-7.4-25.9 6.7"},{castle:null,highlight:null,baseColor:"FFD8B3",path:"m635.9 485.3c-2.2 0-16.7 4-16.7 4l-3.1 18.4 19.7 4.8 36.8 4.4 7.9-15.8-11-14-7.5-11.4h-13.8c-1.8 0-12.3 9.6-12.3 9.6"}]},waterConnectionConfigs:function(){return[{x:0,y:0,points:[473.20001220703125,337.70001220703125,618.2000122070312,309.8999938964844],bezier:!1,tension:0,strokeWidth:3,stroke:"white",dash:[6,6],opacity:.7,num:0,isRootInsert:!1,elm:"[object Text]"},{x:0,y:0,points:[736.7000122070312,431.20001220703125,648.4000244140625,496.29998779296875],bezier:!1,tension:0,strokeWidth:3,stroke:"white",dash:[6,6],opacity:.7,num:1,isRootInsert:!1,elm:"[object Text]"},{x:0,y:0,points:[637,426.29998779296875,648.4000244140625,496.29998779296875],bezier:!1,tension:0,strokeWidth:3,stroke:"white",dash:[6,6],opacity:.7,num:2,isRootInsert:!1,elm:"[object Text]"},{x:0,y:0,points:[76.5,294.29998779296875,96.0999984741211,333.5,105.69999694824219,349.1000061035156,133.3000030517578,362.20001220703125,156.89999389648438,376,194.10000610351562,417.70001220703125],bezier:!1,tension:.30000001192092896,strokeWidth:3,stroke:"white",dash:[6,6],opacity:.7,num:3,isRootInsert:!1,elm:"[object Text]"},{x:0,y:0,points:[414.29998779296875,292,435.5,239.10000610351562,440.20001220703125,220.10000610351562,438.20001220703125,193.1999969482422,443.6000061035156,169.1999969482422,461.70001220703125,148.39999389648438,484.3999938964844,112.9000015258789],bezier:!1,tension:.30000001192092896,strokeWidth:3,stroke:"white",dash:[6,6],opacity:.7,num:4,isRootInsert:!1,elm:"[object Text]"},{x:0,y:0,points:[670.5999755859375,55.29999923706055,673.4000244140625,134.3000030517578,662.2999877929688,229.10000610351562,669.4000244140625,261.8999938964844,692.9000244140625,276.5,715.9000244140625,288.20001220703125,725.7999877929688,304.1000061035156,734.2999877929688,322.1000061035156],bezier:!1,tension:.30000001192092896,strokeWidth:3,stroke:"white",dash:[6,6],opacity:.7,num:5,isRootInsert:!1,elm:"[object Text]"},{x:0,y:0,points:[314.29998779296875,560.5999755859375,438.3999938964844,405.70001220703125],bezier:!1,tension:0,strokeWidth:3,stroke:"white",dash:[6,6],opacity:.7,num:6,isRootInsert:!1,elm:"[object Text]"},{x:0,y:0,points:[648.4000244140625,496.29998779296875,314.29998779296875,560.5999755859375],bezier:!1,tension:0,strokeWidth:3,stroke:"white",dash:[6,6],opacity:.7,num:7,isRootInsert:!1,elm:"[object Text]"}]},castleData:function(){return[{x:175.60000610351562,y:63.29999923706055},{x:105.19999694824219,y:286},{x:252.3000030517578,y:198},{x:243.39999389648438,y:435.70001220703125},{x:356.79998779296875,y:286},{x:452.1000061035156,y:304.1000061035156},{x:138.60000610351562,y:540.7999877929688},{x:322.5,y:87.0999984741211},{x:423.70001220703125,y:61.79999923706055},{x:727.5,y:51.29999923706055},{x:771.2000122070312,y:268.70001220703125},{x:729.2999877929688,y:453}]},armyData:function(){return[{size:2,color:"#8e44ad",x:77.0999984741211,y:54.70000076293945,num:0},{size:2,color:"#2980b9",x:153.39999389648438,y:50.20000076293945,num:1},{size:2,color:"#27ae60",x:54.400001525878906,y:112.19999694824219,num:2},{size:2,color:"#2980b9",x:56.900001525878906,y:196.89999389648438,num:3},{size:2,color:"#2980b9",x:123.19999694824219,y:174.5,num:4},{size:2,color:"#27ae60",x:194.5,y:151.3000030517578,num:5},{size:2,color:"#8e44ad",x:76.5,y:294.29998779296875,num:6},{size:2,color:"#2980b9",x:158.8000030517578,y:268.20001220703125,num:7},{size:2,color:"#2980b9",x:194,y:205.5,num:8},{size:2,color:"#2980b9",x:262.29998779296875,y:239.10000610351562,num:9},{size:2,color:"#27ae60",x:314.79998779296875,y:198.60000610351562,num:10},{size:2,color:"#27ae60",x:284.20001220703125,y:310.70001220703125,num:11},{size:2,color:"#27ae60",x:317.8999938964844,y:287.8999938964844,num:12},{size:2,color:"#2980b9",x:269.70001220703125,y:361.5,num:13},{size:2,color:"#8e44ad",x:251.1999969482422,y:409.79998779296875,num:14},{size:2,color:"#2980b9",x:194.10000610351562,y:417.70001220703125,num:15},{size:2,color:"#2980b9",x:369.20001220703125,y:213.10000610351562,num:16},{size:2,color:"#27ae60",x:352.6000061035156,y:254.60000610351562,num:17},{size:2,color:"#27ae60",x:414.29998779296875,y:292,num:18},{size:2,color:"#8e44ad",x:338.3999938964844,y:350.3999938964844,num:19},{size:2,color:"#8e44ad",x:421.20001220703125,y:358.70001220703125,num:20},{size:2,color:"#2980b9",x:473.20001220703125,y:337.70001220703125,num:21},{size:2,color:"#8e44ad",x:438.3999938964844,y:405.70001220703125,num:22},{size:2,color:"#27ae60",x:190.5,y:542.5999755859375,num:23},{size:2,color:"#27ae60",x:252.1999969482422,y:511.8999938964844,num:24},{size:2,color:"#8e44ad",x:240.89999389648438,y:582,num:25},{size:2,color:"#27ae60",x:314.29998779296875,y:560.5999755859375,num:26},{size:2,color:"#2980b9",x:286.79998779296875,y:634.2000122070312,num:27},{size:2,color:"#8e44ad",x:341,y:52.900001525878906,num:28},{size:2,color:"#8e44ad",x:397.5,y:26.899999618530273,num:29},{size:2,color:"#8e44ad",x:370.29998779296875,y:100.30000305175781,num:30},{size:2,color:"#27ae60",x:346.8999938964844,y:151.60000610351562,num:31},{size:2,color:"#8e44ad",x:411.29998779296875,y:125.4000015258789,num:32},{size:2,color:"#8e44ad",x:474.5,y:47.599998474121094,num:33},{size:2,color:"#27ae60",x:484.3999938964844,y:112.9000015258789,num:34},{size:2,color:"#27ae60",x:555.7999877929688,y:58,num:35},{size:2,color:"#8e44ad",x:616.0999755859375,y:27.200000762939453,num:36},{size:2,color:"#27ae60",x:670.5999755859375,y:55.29999923706055,num:37},{size:2,color:"#27ae60",x:713.5,y:36.20000076293945,num:38},{size:2,color:"#8e44ad",x:618.2000122070312,y:309.8999938964844,num:39},{size:2,color:"#2980b9",x:734.2999877929688,y:322.1000061035156,num:40},{size:2,color:"#8e44ad",x:803.5999755859375,y:327.3999938964844,num:41},{size:2,color:"#2980b9",x:688.2000122070312,y:368.3999938964844,num:42},{size:2,color:"#2980b9",x:794.2000122070312,y:392.6000061035156,num:43},{size:2,color:"#27ae60",x:637,y:426.29998779296875,num:44},{size:2,color:"#2980b9",x:736.7000122070312,y:431.20001220703125,num:45},{size:2,color:"#2980b9",x:800.7000122070312,y:453.6000061035156,num:46},{size:2,color:"#8e44ad",x:648.4000244140625,y:496.29998779296875,num:47}]},gameboardSize:function(){return{a:873.5,b:704.2000122070312}},playerInfoWidth:function(){return 320}},methods:{calculateInitialTransform:function(){var t=this.stageDimensions,e=t.w,l=t.h,a=200;"playerInfo"in this.$refs&&this.playerInfoWidth>.7*t.w&&(l-=a);var n=this.gameboardSize,i=Math.min(e,l)/8,o=(e-2*i)/n.a,s=(l-2*i)/n.b,r=Math.min(o,s),h=window.appScaleFactor;return r*=h,{x:(e-n.a*r)/2,y:(l-n.b*r)/2,scale:r}},relativePointer:function(t,e,l){return{x:t-l.getContent().offsetLeft,y:e-l.getContent().offsetTop}},clampScale:function(t){return v(t,this.scaleBounds.min,this.scaleBounds.max)},clampPosition:function(t){var e=this.calculatePositionBounds();return{x:v(t.x,e.x.min,e.x.max),y:v(t.y,e.y.min,e.y.max)}},calculatePositionBounds:function(){if(x(this.stageObj)){var t=this.stageObj.scale(),e=this.stageDimensions,l=this.gameboardSize;return{x:this.axisBounds(l.a*t.x,e.w),y:this.axisBounds(l.b*t.y,e.h)}}return C("StageObj or Gameboard are undefined. Ignoring"),{x:{min:0,max:1},y:{min:0,max:1}}},axisBounds:function(t,e){return t<e?{min:-t/2,max:e-t/2}:{min:e/2-t,max:e/2}},handleTerritoryMouseDown:function(t){this.$emit("territory-click",t)},handleResize:function(){x(this.$refs)&&x(this.$refs.stageWrapper)?this.stageDimensions={w:this.$refs.stageWrapper.clientWidth,h:this.$refs.stageWrapper.clientHeight}:C("StageWrapper not found. Skipping resize event")},handleScroll:function(t){var e=this.stageObj;if(x(e)){t.preventDefault();var l=e.scaleX(),a=e.getPointerPosition(),n={x:a.x/l-e.x()/l,y:a.y/l-e.y()/l},i=0;i=t.deltaY%1?Math.abs(t.deltaY):Math.abs(Math.min(-10,Math.max(10,t.deltaY)));var o=1.01+i/70,s=0;s=t.deltaY>0?l/o:l*o,s=this.clampScale(s),e.scale({x:s,y:s});var r={x:(a.x/s-n.x)*s,y:(a.y/s-n.y)*s};e.position(this.clampPosition(r)),e.batchDraw()}else C("StageObj not found. Scroll events will not work")},handleTouchMove:function(t){var e=t.touches[0],l=t.touches[1];if(e&&l){t.preventDefault(),t.stopPropagation();var a=this.stageObj,n=this.touchState;if(x(a)){var i=a.scaleX(),o=y({x:e.clientX,y:e.clientY},{x:l.clientX,y:l.clientY});n.lastDist||(n.lastDist=o);var s=o-n.lastDist,r=(e.clientX+l.clientX)/2,h=(e.clientY+l.clientY)/2,c={};"undefined"===typeof n.point?(c=this.relativePointer(r,h,a),n.point=c):c=n.point;var u={x:c.x/i-a.x()/i,y:c.y/i-a.y()/i},g=1.01+Math.abs(s)/100,m=this.clampScale(s<0?i/g:i*g);a.scale({x:m,y:m});var b={x:(c.x/m-u.x)*m,y:(c.y/m-u.y)*m};a.position(this.clampPosition(b)),a.batchDraw(),n.lastDist=o}else C("StageObj not found. Touch events will not work")}},handleTouchEnd:function(){this.touchState.lastDist=0,this.touchState.point=void 0},attachEventListeners:function(t){window.addEventListener("resize",this.handleResize),x(t)?(t.addEventListener("wheel",this.handleScroll),t.addEventListener("touchmove",this.handleTouchMove),t.addEventListener("touchend",this.handleTouchEnd)):C("StageRef not found. Canvas events will not work")},detachEventListeners:function(t){window.removeEventListener("resize",this.handleResize),x(t)&&(t.removeEventListener("wheel",this.handleScroll),t.removeEventListener("touchmove",this.handleTouchMove),t.removeEventListener("touchend",this.handleTouchEnd))},unlockInitialization:function(){this.initializeTransforms()},initializeTransforms:function(){console.log({w:this.$refs.stageWrapper.clientWidth,h:this.$refs.stageWrapper.clientHeight});var t=this.stageObj,e=this.calculateInitialTransform(),l=this.scaleBounds;x(t)?(t.scale({x:e.scale,y:e.scale}),t.x(e.x),t.y(e.y),l.min=Math.min(l.min,e.scale),l.max=Math.max(l.max,e.scale)):C("StageObj not found. Canvas will not be positioned")}},mounted:function(){this.$nextTick(function(){this.handleResize(),x(this.$refs.stage)&&(this.stageObj=this.$refs.stage.getStage(),this.attachEventListeners(this.stageObj.getContent()),this.unlockInitialization())})},beforeDestroy:function(){this.detachEventListeners()}},Q=G,K=(l("edfd"),Object(k["a"])(Q,o,s,!1,null,"2915eb6f",null)),U=K.exports,V={name:"app",components:{"game-canvas":U}},Z=V,tt=(l("5c0b"),Object(k["a"])(Z,n,i,!1,null,null,null)),et=tt.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(et)}}).$mount("#app")},"5c0b":function(t,e,l){"use strict";var a=l("458f"),n=l.n(a);n.a},edfd:function(t,e,l){"use strict";var a=l("4b06"),n=l.n(a);n.a}});