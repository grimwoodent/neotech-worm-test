!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){var r=t(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(2)(!0)).push([e.i,"html,\nbody {\n  padding: 0;\n  margin: 0;\n}\n.content {\n  width: 100px;\n  height: 100px;\n  margin: 30px auto;\n  padding: 15px;\n}\n.score {\n  width: 100%;\n  height: 1.5em;\n  line-height: 1.5em;\n  font-size: 1.5em;\n  font-family: monospace;\n}\n.main_field {\n  width: 100%;\n  height: 100%;\n  background-color: #88b189;\n}\n.main_field__row {\n  display: flex;\n  flex-wrap: wrap;\n}\n.main_field__cell {\n  width: 10px;\n  height: 10px;\n  flex: 0 0 10px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  box-sizing: border-box;\n}\n.main_field__cell___food {\n  background-color: #585858;\n  border-radius: 50%;\n}\n.main_field__cell___worm {\n  background-color: #000000;\n  border-radius: 2px;\n}\n.main_field__cell___worm_head {\n  background-color: #343434;\n}\n.game_over_info {\n  width: 100%;\n  text-align: center;\n  font-size: 3em;\n  line-height: 3em;\n  font-family: monospace;\n  background-color: rgba(37, 37, 37, 0.92);\n  color: #9c0000;\n}\n.game_over_info__wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.5s linear;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.game_over_info__wrap___shown {\n  visibility: visible;\n  opacity: 1;\n}\n","",{version:3,sources:["index.less"],names:[],mappings:"AAAA;;EAEE,UAAU;EACV,SAAS;AACX;AACA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,qCAAqC;EACrC,sBAAsB;AACxB;AACA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,sBAAsB;EACtB,wCAAwC;EACxC,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,kBAAkB;EAClB,UAAU;EACV,8CAA8C;EAC9C,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,UAAU;AACZ",file:"index.less",sourcesContent:["html,\nbody {\n  padding: 0;\n  margin: 0;\n}\n.content {\n  width: 100px;\n  height: 100px;\n  margin: 30px auto;\n  padding: 15px;\n}\n.score {\n  width: 100%;\n  height: 1.5em;\n  line-height: 1.5em;\n  font-size: 1.5em;\n  font-family: monospace;\n}\n.main_field {\n  width: 100%;\n  height: 100%;\n  background-color: #88b189;\n}\n.main_field__row {\n  display: flex;\n  flex-wrap: wrap;\n}\n.main_field__cell {\n  width: 10px;\n  height: 10px;\n  flex: 0 0 10px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  box-sizing: border-box;\n}\n.main_field__cell___food {\n  background-color: #585858;\n  border-radius: 50%;\n}\n.main_field__cell___worm {\n  background-color: #000000;\n  border-radius: 2px;\n}\n.main_field__cell___worm_head {\n  background-color: #343434;\n}\n.game_over_info {\n  width: 100%;\n  text-align: center;\n  font-size: 3em;\n  line-height: 3em;\n  font-family: monospace;\n  background-color: rgba(37, 37, 37, 0.92);\n  color: #9c0000;\n}\n.game_over_info__wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.5s linear;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.game_over_info__wrap___shown {\n  visibility: visible;\n  opacity: 1;\n}\n"]}])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),c=null,l=0,u=[],f=t(4);function d(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],n))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(m(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function p(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,t);t.insertBefore(n,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function y(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return A(n,e.attrs),p(e,n),n}function A(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function m(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=l++;t=c||(c=y(n)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",A(n,e.attrs),p(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),o=function(){v(t),t.href&&URL.revokeObjectURL(t.href)}):(t=y(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){v(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=h(e,n);return d(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}e&&d(h(e,n),n);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,_=(b=[],function(e,n){return b[e]=n,b.filter(Boolean).join("\n")});function w(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n,t){"use strict";t.r(n);t(0);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i={START:"start",STOP:"stop",LOOP:"loop"},a=function(){function e(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=Object.assign({size:1e3,step:100,minSize:300},t),this.events=(r(n={},i.START,[]),r(n,i.STOP,[]),r(n,i.LOOP,[]),n),this._active=!1,this._loop=null,this.props.size<this.props.minSize&&(this.props.size=this.props.minSize)}var n,t,a;return n=e,(t=[{key:"on",value:function(e,n){if(!e)throw new Error("Empty event name");if("function"!=typeof n)throw new Error("Event handler is not a function");return this.events[e].push(n),this}},{key:"start",value:function(){return this._active=!0,this._callEvent(i.START),this._nextLoop(),this}},{key:"stop",value:function(){return this._active=!1,this._clearLoop(),this._callEvent(i.STOP),this}},{key:"sizeDown",value:function(){return this.props.size-this.props.step<this.props.minSize?(this.props.size=this.props.minSize,this):(this.props.size-=this.props.step,this)}},{key:"_nextLoop",value:function(){var e=this;return this._active?(this._clearLoop(),this._loop=window.setTimeout(function(){e._loop=null,e._callEvent(i.LOOP),e._nextLoop()},this.props.size),this):this}},{key:"_clearLoop",value:function(){return this._loop&&window.clearTimeout(this._loop),this}},{key:"_callEvent",value:function(e){return e?(this.events[e].forEach(function(e){e()}),this):this}}])&&o(n.prototype,t),a&&o(n,a),e}();var s=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),"number"!=typeof n.x||"number"!=typeof n.y)throw new Error("Food constructor properties corrupt");this.x=n.x,this.y=n.y};function c(e,n){return Math.floor(e+Math.random()*(n+1-e))}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=Object.assign({size:3,maxPosition:{x:49,y:49}},n),this._food=[]}var n,t,r;return n=e,(t=[{key:"refill",value:function(){for(var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=function(){var t=c(0,e.props.maxPosition.x),r=c(0,e.props.maxPosition.y);e._food.concat(n).find(function(e){return e.x===t&&e.y===r})||e._food.push(new s({x:t,y:r}))};this._food.length<this.props.size;)t();return this}},{key:"getFood",value:function(){return this._food}},{key:"eatFoodAt",value:function(e){var n=this;return new Promise(function(t,r){var o=n._food.findIndex(function(n){return n.x===e.x&&n.y===e.y});~o?(n._food.splice(o,1),t()):r()})}}])&&l(n.prototype,t),r&&l(n,r),e}();var f,d={UP:"up",DOWN:"down",LEFT:"left",RIGHT:"right",NONE:"none"},h=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),"number"!=typeof n.x||"number"!=typeof n.y||!n.direction)throw new Error("Worm part constructor properties corrupt");this.x=n.x,this.y=n.y,this.direction=n.direction};function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y=(v(f={},d.UP,[d.LEFT,d.RIGHT]),v(f,d.DOWN,[d.LEFT,d.RIGHT]),v(f,d.LEFT,[d.UP,d.DOWN]),v(f,d.RIGHT,[d.UP,d.DOWN]),f),A=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);var t=Object.assign({position:{x:24,y:24},direction:d.UP},n);this._body=[new h({x:t.position.x,y:t.position.y,direction:t.direction})],this._direction=t.direction}var n,t,r;return n=e,(t=[{key:"getBody",value:function(){return this._body}},{key:"move",value:function(){for(var e=this._body.length-1;e>=0;e--){var n=this._body[e],t=this._body[e-1];switch(n.direction){case d.UP:n.y-=1;break;case d.DOWN:n.y+=1;break;case d.LEFT:n.x-=1;break;case d.RIGHT:n.x+=1;break;case d.NONE:break;default:throw new Error("Body part direction not found")}t&&(n.direction=t.direction)}return this._direction=this._body[0].direction,this}},{key:"setDirection",value:function(e){if(!this._body[0])throw new Error("Empty head part");return y[this._direction].find(function(n){return n===e})&&(this._body[0].direction=e),this}},{key:"getHead",value:function(){return this._body[0]}},{key:"isBodyPart",value:function(e,n){var t=this._body.reduce(function(n,t){return t.x===e.x&&t.y===e.y?n+1:n},0);return n?t>1:t>0}},{key:"addNewOne",value:function(){var e=this._body[this._body.length-1];if(!e)throw new Error("Empty tail part");return this._body.push(new h({x:e.x,y:e.y,direction:d.NONE})),this}}])&&p(n.prototype,t),r&&p(n,r),e}();function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b="food",_="worm",w="worm-head",g={MAIN:"main_field__row"},E={MAIN:"main_field__cell",FOOD:"main_field__cell___food",WORM:"main_field__cell___worm",WORM_HEAD:"main_field__cell___worm_head"},C=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=Object.assign({size:{x:50,y:50}},n)}var n,t,r;return n=e,(t=[{key:"generateField",value:function(e){var n=this;e.parentNode.style.width="".concat(10*this.props.size.x,"px"),e.parentNode.style.height="".concat(10*this.props.size.y,"px"),this.field=new Array(this.props.size.y).fill(null).map(function(t,r){var o=document.createElement("div");return o.classList.add(g.MAIN),e.appendChild(o),new Array(n.props.size.x).fill(null).map(function(e,n){var t=document.createElement("div");return t.classList.add(E.MAIN),t.setAttribute("data-x",n),t.setAttribute("data-y",r),o.appendChild(t),{x:n,y:r,element:t}})})}},{key:"render",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.field)throw new Error("Field is not generated");this._forEachCell(function(e){e.element.classList.remove(E.FOOD),e.element.classList.remove(E.WORM),e.element.classList.remove(E.WORM_HEAD)}),(n[b]||[]).forEach(function(n){e.field[n.y][n.x].element.classList.add(E.FOOD)}),(n[_]||[]).forEach(function(n){e.field[n.y][n.x].element.classList.add(E.WORM)}),(n[w]||[]).forEach(function(n){e.field[n.y][n.x].element.classList.add(E.WORM_HEAD)})}},{key:"_forEachCell",value:function(e){this.field.forEach(function(n){n.forEach(function(n){e(n)})})}}])&&m(n.prototype,t),r&&m(n,r),e}();function x(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O={INPUT:"input"},k="up",B="down",T="left",L="right",P=37,z=38,j=39,U=40,N=65,S=87,R=68,I=83,M=function(){function e(){var n,t,r;arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.events=(n={},t=O.INPUT,r=[],t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n)}var n,t,r;return n=e,(t=[{key:"init",value:function(){var e=this;document.body.addEventListener("keydown",function(n){switch(n.keyCode){case P:case N:e._callEvent(O.INPUT,T);break;case z:case S:e._callEvent(O.INPUT,k);break;case j:case R:e._callEvent(O.INPUT,L);break;case U:case I:e._callEvent(O.INPUT,B)}})}},{key:"on",value:function(e,n){if(!e)throw new Error("Empty event name");if("function"!=typeof n)throw new Error("Event handler is not a function");return this.events[e].push(n),this}},{key:"_callEvent",value:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return e?(this.events[e].forEach(function(e){e.apply(void 0,t)}),this):this}}])&&x(n.prototype,t),r&&x(n,r),e}();function W(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=Object.assign({size:{x:49,y:49}},n)}var n,t,r;return n=e,(t=[{key:"isWall",value:function(e){return e.x<0||e.y<0||e.x>this.props.size.x||e.y>this.props.size.y}}])&&W(n.prototype,t),r&&W(n,r),e}();function H(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=Object.assign({score:0},n),this._holder=null}var n,t,r;return n=e,(t=[{key:"willRenderTo",value:function(e){return this._holder=e,this}},{key:"getScore",value:function(){return this.props.score}},{key:"inc",value:function(){return this.props.score++,this}},{key:"render",value:function(){return this._holder.innerHTML=""+this.props.score,this}}])&&H(n.prototype,t),r&&H(n,r),e}();function G(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Y={SHOWN:"game_over_info__wrap___shown"},q=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._gameOverHolder=null}var n,t,r;return n=e,(t=[{key:"attachGameOverTo",value:function(e){return this._gameOverHolder=e,this}},{key:"showGameOver",value:function(){return this._gameOverHolder.classList.add(Y.SHOWN),this}}])&&G(n.prototype,t),r&&G(n,r),e}();function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Z(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var $=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"init",value:function(){var e=this;return this.size={x:50,y:50},this.gameLoop=new a({size:500,step:30,minSize:70}),this.foodCourt=new u({size:5,maxPosition:{x:this.size.x-1,y:this.size.y-1}}),this.worm=new A({position:{x:Math.round(this.size.x/2),y:Math.round(this.size.y/2)},direction:d.UP}),this.wall=new D({size:{x:this.size.x-1,y:this.size.y-1}}),this.inputControl=new M({}),this.score=new F({}),this.gameInfo=new q,this.display=new C({size:{x:this.size.x,y:this.size.y}}),this.inputControl.on(O.INPUT,function(n){switch(n){case T:e.worm.setDirection(d.LEFT);break;case k:e.worm.setDirection(d.UP);break;case L:e.worm.setDirection(d.RIGHT);break;case B:e.worm.setDirection(d.DOWN)}}).init(),this.display.generateField(document.getElementById("filed_holder")),this.score.willRenderTo(document.getElementById("score_holder")),this.gameInfo.attachGameOverTo(document.getElementById("game-over")),this.gameLoop.on(i.START,function(){e.foodCourt.refill(e.worm.getBody()),e.score.render()}).on(i.LOOP,function(){var n;return e.worm.move(),e.worm.isBodyPart(e.worm.getHead(),!0)?(e.gameLoop.stop(),void e.gameInfo.showGameOver()):e.wall.isWall(e.worm.getHead())?(e.gameLoop.stop(),void e.gameInfo.showGameOver()):(e.foodCourt.eatFoodAt(e.worm.getHead()).then(function(){e.worm.addNewOne(),e.score.inc(),e.foodCourt.refill(),e.gameLoop.sizeDown(),e.score.render()},function(){}),void e.display.render((X(n={},b,e.foodCourt.getFood()),X(n,_,e.worm.getBody()),X(n,w,[e.worm.getHead()]),n)))}),this}},{key:"start",value:function(){return this.gameLoop.start(),this}}])&&Z(n.prototype,t),r&&Z(n,r),e}();document.addEventListener("DOMContentLoaded",function(){(new $).init().start()})}]);