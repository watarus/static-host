!function(){"use strict";var e=(i.prototype.resolveMethod=function(o){var t=this;if("android"===this.os&&void 0!==window[this.androidBridge]&&void 0!==window[this.androidBridge][o])return function(e,n){var r=JSON.stringify({callback:e,parameter:n[0]});window[t.androidBridge][o](r)};if("ios"===this.os&&void 0!==window.webkit&&void 0!==window.webkit.messageHandlers&&void 0!==window.webkit.messageHandlers[o])return function(e,n){var r=JSON.stringify({callback:e,parameter:n[0]});window.webkit.messageHandlers[o].postMessage(r)};throw new Error("["+this.os+"] App bridge of "+o+" does not exist")},i.prototype.invoke=function(e){for(var o=this,t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Promise(function(n){var r=e+"-"+i.callbackIdentifier++;window[r]=function(e){n(JSON.parse(e)),delete window[r]},o.resolveMethod(e)(r,t)})},i.callbackIdentifier=0,i);function i(e,n){this.os=e,this.androidBridge=n}function c(e){var n,r=[];for(var o in e){var t=e[o];if(e.hasOwnProperty(o)&&void 0!==t){var i=encodeURIComponent(o);if(n=t,"[object Array]"===Object.prototype.toString.call(n))for(var a=0;a<t.length;a++)r.push(i+"="+encodeURIComponent(String(t[a])));else r.push(i+"="+encodeURIComponent(String(t)))}}return r.join("&")}function w(e){try{var n=window[e],r="__storage_test__";return n.setItem(r,r),n.removeItem(r),!0}catch(e){return!1}}function u(e){var n={name:e.name,message:e.message,fileName:e.fileName,stack:e.stack};(new Image).src="https://i.smartnews-ads.com/pe?b="+encodeURIComponent(JSON.stringify(n))}var t=0;function l(){return new e("ios","SmartNewsAds").invoke("retrieveUUID").catch(function(){return new e("android","SmartNewsAds").invoke("retrieveUUID")}).catch(function(){return r=window.parent===window.self,(null===(n=null===(e=window.webkit)||void 0===e?void 0:e.messageHandlers)||void 0===n?void 0:n.UUIDResolver)&&r?new Promise(function(n){var e,r,o="_smartnews_ads_legacy_callback_"+t++;window[o]=function(e){delete window[o],n(e)},null===(r=null===(e=window.webkit)||void 0===e?void 0:e.messageHandlers)||void 0===r||r.UUIDResolver.postMessage(o)}):Promise.reject(new Error("UUIDResolver does not exist"));var e,n,r}).catch(function(){return Promise.resolve(null)})}var v={};function r(e,n,r){var o=e+"/"+n;if(v[o])return null;v[o]=!0;var t,i,a={id:e,t:Math.floor((new Date).valueOf()/1e3),url:location.href,referrer:document.referrer,e:n,v:this.version};for(var s in r)r.hasOwnProperty(s)&&(a["d["+s+"]"]=r[s]);if(!v[e]){var d=function(e){for(var n=document.cookie.split(";"),r=0;r<n.length;r++){var o=n[r].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"").split("=");if(o[0]===e)return decodeURIComponent(o[1])}if(w("localStorage"))return window.localStorage.getItem(e)||void 0}("snexid")||"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"===e?n:3&n|8).toString(16)});t="snexid",i=d,document.cookie=t+"="+encodeURIComponent(i)+"; path=/; max-age=63072000",w("localStorage")&&window.localStorage.setItem(t,i),a.exid=d,v[e]=!0}return"Promise"in window?Promise.race([l(),new Promise(function(e){return window.setTimeout(function(){return e(null)},1e3)})]).then(function(e){return null!==e&&(a.uuid=e),(new Image).src="https://i.smartnews-ads.com/p?"+c(a),a}).catch(function(e){return u(e),a}):((new Image).src="https://i.smartnews-ads.com/p?"+c(a),a)}try{!function(){if(void 0===window.SmartnewsAds||void 0===window.SmartnewsAds.p)throw new Error("SmartnewsAds does not defined.");var e=window.SmartnewsAds.p;if(e.callMethod=r,e.queue){for(var n in e.queue)e.queue.hasOwnProperty(n)&&e.callMethod.apply(e,e.queue[n]);e.queue.length=0}}()}catch(e){u(e)}}();
