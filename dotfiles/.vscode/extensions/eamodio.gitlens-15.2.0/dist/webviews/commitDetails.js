var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};function i(e,t,i){let o,n,r,a,l;function c(e){const i=e-(n??0);return null==n||i>=t||i<0}function d(){const e=Date.now();if(c(e))h();else{l=setTimeout(d,t-(e-(n??0)))}}function h(){return l=void 0,o?function(){const t=o,i=r;return o=r=void 0,a=e.apply(i,t),a}():(o=void 0,r=void 0,a)}function p(...e){const h=Date.now(),p=c(h);return o=null!=i&&o?i(o,e):e,r=this,n=h,p&&null==l?(l=setTimeout(d,t),a):(null==l&&(l=setTimeout(d,t)),a)}return p.cancel=function(){null!=l&&clearTimeout(l),o=void 0,n=void 0,r=void 0,l=void 0},p.flush=function(){return null==l?a:(clearTimeout(l),h())},p.pending=function(){return null!=l},p}e.d(t,{L:()=>CommitDetailsApp});const o=",",n="=",r="{",a="(",l=")",c=/\(([\s\S]*)\)/,d=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,h=/\s?=.*$/;function p(e){const t=.001*performance.now();let i=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],o-=e[1],o<0&&(i--,o+=1e9)),[i,o]}const u=500;function g(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const m=g(),f=new Map;function b(e){f.delete(e)}function v(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const i=m.next();return{scopeId:i,prefix:`[${String(i).padStart(5)}] ${e}`}}Error;function y(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"});const w=Object.freeze({codeSuggest:"https://gitkraken.com/solutions/code-suggest?utm_source=gitlens-extension&utm_medium=in-app-links",cloudPatches:"https://gitkraken.com/solutions/cloud-patches?utm_source=gitlens-extension&utm_medium=in-app-links",graph:"https://gitkraken.com/solutions/commit-graph?utm_source=gitlens-extension&utm_medium=in-app-links",launchpad:"https://gitkraken.com/solutions/launchpad?utm_source=gitlens-extension&utm_medium=in-app-links",platform:"https://gitkraken.com/devex?utm_source=gitlens-extension&utm_medium=in-app-links",pricing:"https://gitkraken.com/gitlens/pricing?utm_source=gitlens-extension&utm_medium=in-app-links",proFeatures:"https://gitkraken.com/gitlens/pro-features?utm_source=gitlens-extension&utm_medium=in-app-links",security:"https://help.gitkraken.com/gitlens/security?utm_source=gitlens-extension&utm_medium=in-app-links",workspaces:"https://gitkraken.com/solutions/workspaces?utm_source=gitlens-extension&utm_medium=in-app-links",cli:"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links",browserExtension:"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links",desktop:"https://gitkraken.com/git-client?utm_source=gitlens-extension&utm_medium=in-app-links",releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:"https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?utm_source=gitlens-extension&utm_medium=in-app-links"});var x=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(x||{});const{fromCharCode:k}=String;new TextEncoder;function _(e){const[t,i]=p(e);return 1e3*t+Math.floor(i/1e6)}function C(e,t,i){if(null==i)return`${t} ${e}${1===t?"":"s"}`;const o=1===t?e:i.plural??`${e}s`;return i.only?o:`${0===t?i.zero??t:i.format?.(t)??t}${i.infix??" "}${o}`}const S=Symbol("logInstanceNameFn");function A(e){return function(e,t=!1){let i,g,v,w,x,k=0,C=!1,A=!1,P=!0;null!=e&&({args:i,if:g,enter:v,exit:w,prefix:x,logThreshold:k=0,scoped:C=!0,singleLine:A=!1,timed:P=!0}=e);k>0&&(A=!0,P=!0);P&&(C=!0);const R=E.isDebugging,O=t?E.debug:E.log,T=R?"debug":"info";return(e,t,D)=>{let M,L;if("function"==typeof D.value?(M=D.value,L="value"):"function"==typeof D.get&&(M=D.get,L="get"),null==M||null==L)throw new Error("Not supported");const I=!1!==i?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(d,"")||t,t=t.slice(0,t.indexOf(r));let i=t.indexOf(a),p=t.indexOf(l);i=i>=0?i+1:0,p=p>0?p:t.indexOf(n),t=t.slice(i,p),t=`(${t})`;const u=c.exec(t);return null!=u?u[1].split(o).map((e=>e.trim().replace(h,""))):[]}(M):[];D[L]=function(...e){if(!R&&!E.enabled(T)||null!=g&&!g.apply(this,e))return M.apply(this,e);const o=m.next(),n=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let i=t?.name??"";const o=i.indexOf("_");i=-1===o?i:i.substr(o+1),null!=t?.[S]&&(i=t[S](e,i));return i}(this):void 0;let r,a=n?C?`[${o.toString(16).padStart(5)}] ${n}.${t}`:`${n}.${t}`:t;null!=x&&(a=x({id:o,instance:this,instanceName:n??"",name:t,prefix:a},...e)),C&&(r={scopeId:o,prefix:a},function(e,t){f.set(e,t)}(o,r));const l=null!=v?v(...e):"";let c;if(!1===i||0===e.length)c="",A||O.call(E,`${a}${l}`);else{let t;c="";let o,n,r,d=-1;for(r of e){if(o=I[++d],t=i?.[d],null!=t){if("boolean"==typeof t)continue;if(c.length>0&&(c+=", "),"string"==typeof t){c+=t;continue}n=String(t(r))}else c.length>0&&(c+=", "),n=E.toLoggable(r);c+=o?`${o}=${n}`:n}A||O.call(E,c?`${a}${l}(${c})`:`${a}${l}`)}if(A||P||null!=w){const t=P?p():void 0,i=e=>{const i=void 0!==t?` [${_(t)}ms]`:"";A?E.error(e,c?`${a}${l}(${c})`:`${a}${l}`,r?.exitDetails?`failed${r.exitDetails}${i}`:`failed${i}`):E.error(e,a,r?.exitDetails?`failed${r.exitDetails}${i}`:`failed${i}`),C&&b(o)};let n;try{n=M.apply(this,e)}catch(e){throw i(e),e}const d=e=>{let i,n,d,h;if(null!=t?(i=_(t),i>u?(n=E.warn,d=` [*${i}ms] (slow)`):(n=O,d=` [${i}ms]`)):(d="",n=O),null!=w)if("function"==typeof w)try{h=w(e)}catch(e){h=`@log.exit error: ${e}`}else!0===w&&(h=`returned ${E.toLoggable(e)}`);else r?.exitFailed?(h=r.exitFailed,n=E.error):h="completed";A?(0===k||i>k)&&n.call(E,c?`${a}${l}(${c}) ${h}${r?.exitDetails||""}${d}`:`${a}${l} ${h}${r?.exitDetails||""}${d}`):n.call(E,c?`${a}(${c}) ${h}${r?.exitDetails||""}${d}`:`${a} ${h}${r?.exitDetails||""}${d}`),C&&b(o)};return null!=n&&y(n)?n.then(d,i):d(n),n}return M.apply(this,e)}}}(e,!0)}const E=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,i=!1){this.provider=e,this._isDebugging=i,this.logLevel=t}enabled(e){return this.level>=P(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=P(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...i){if(this.level<1&&!this.isDebugging)return;let o;if(o=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`,null==o){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,i)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const i=this.provider.toLoggable?.(e);if(null!=i)return i;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const i=t.map((e=>this.toLoggable(e))).join(", ");return 0!==i.length?` — ${i}`:""}};function P(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const R={enabled:e=>E.enabled(e)||E.isDebugging,log:(e,t,i,...o)=>{switch(e){case"error":E.error("",t,i,...o);break;case"warn":E.warn(t,i,...o);break;case"info":E.log(t,i,...o);break;default:E.debug(t,i,...o)}}};class IpcCall{constructor(e,t,i=!1,o=!1){this.scope=e,this.reset=i,this.pack=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcRequest extends IpcCall{constructor(e,t,i,o){super(e,t,i,o),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}}class IpcNotification extends IpcCall{}const O=new IpcCommand("core","webview/ready"),T=new IpcCommand("core","webview/focus/changed"),D=new IpcCommand("core","command/execute"),M=(new IpcCommand("core","configuration/update"),new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");var L;function I(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function B(e,t){return new Promise((i=>{e.addEventListener(t,(function o(n){n.target===e&&(e.removeEventListener(t,o),i())}))}))}(L||(L={})).on=function(e,t,i,o){let n=!1;if("string"==typeof e){const r=function(t){const o=t?.target?.closest(e);null!=o&&i(t,o)};return document.addEventListener(t,r,o??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,r,o??!0))}}}const r=function(e){i(e,this)};return e.addEventListener(t,r,o??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,r,o??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...i){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:v(e??""),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??R,this._time=p(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=p(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=p(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[i,o]=p(this._time),n=1e3*i+Math.floor(o/1e6),r=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${n}ms]${e?.suffix??""}`)}}const z=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,i)=>{null==this.listeners&&(this.listeners=new LinkedList);const o=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=_Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};z._noop=function(){};let j=z;const N={done:!0,value:void 0},U=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};U.Undefined=new U(void 0);let F=U;class LinkedList{constructor(){this._first=F.Undefined,this._last=F.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===F.Undefined}clear(){this._first=F.Undefined,this._last=F.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const i=new F(e);if(this._first===F.Undefined)this._first=i,this._last=i;else if(t){const e=this._last;this._last=i,i.prev=e,e.next=i}else{const e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===F.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===F.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==F.Undefined&&e.next!==F.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===F.Undefined&&e.next===F.Undefined?(this._first=F.Undefined,this._last=F.Undefined):e.next===F.Undefined?(this._last=this._last.prev,this._last.next=F.Undefined):e.prev===F.Undefined&&(this._first=this._first.next,this._first.prev=F.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===F.Undefined?N:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==F.Undefined;t=t.next)e.push(t.element);return e}}var H=Object.defineProperty,q=Object.getOwnPropertyDescriptor,W=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?q(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&H(t,i,r),r};let G;function K(){return G??=acquireVsCodeApi()}const Y=g();function J(){return`webview:${Y.next()}`}let Z=class{constructor(e){this.appName=e,this._onReceiveMessage=new j,this._pendingHandlers=new Map,this._api=K(),this._disposable=L.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=f.get(m.current),i=e.data;if(i.packed&&i.params instanceof Uint8Array){const o=function(e,t,...i){return(t?.provider??R).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...i):void 0}(v(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,i.params=JSON.parse(this._textDecoder.decode(i.params)),o?.stop()}if(null==i.completionId)this._onReceiveMessage.fire(i);else{const e=ee(i.method,i.completionId);this._pendingHandlers.get(e)?.(i)}}sendCommand(e,t){const i=J();this.postMessage({id:i,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const i=J(),o=new Promise(((t,o)=>{const n=ee(e.response.method,i);let r;function a(){clearTimeout(r),r=void 0,this._pendingHandlers.delete(n)}r=setTimeout((()=>{a.call(this),o(new Error(`Timed out waiting for completion of ${n}`))}),6e4),this._pendingHandlers.set(n,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,completionId:i}),o}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var X;function ee(e,t){return`${e}|${t}`}W([A({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],Z.prototype,"onMessageReceived",1),W([A({args:{0:e=>e.method,1:!1}})],Z.prototype,"sendCommand",1),W([A({args:{0:e=>e.method,1:!1,2:!1}})],Z.prototype,"sendRequest",1),W([A({args:{0:e=>`${e.id}, method=${e.method}`}})],Z.prototype,"postMessage",1),Z=W([(X=(e,t)=>`${e.appName}(${t})`,e=>{e[S]=X})],Z);function te(e,t){const i=Math.pow(10,t);return Math.round(e*i)/i}class RGBA{constructor(e,t,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=te(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=te(Math.max(Math.min(1,t),0),3),this.l=te(Math.max(Math.min(1,i),0),3),this.a=te(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,i=e.g/255,o=e.b/255,n=e.a,r=Math.max(t,i,o),a=Math.min(t,i,o);let l=0,c=0;const d=(a+r)/2,h=r-a;if(h>0){switch(c=Math.min(d<=.5?h/(2*d):h/(2-2*d),1),r){case t:l=(i-o)/h+(i<o?6:0);break;case i:l=(o-t)/h+2;break;case o:l=(t-i)/h+4}l*=60,l=Math.round(l)}return new HSLA(l,c,d,n)}static _hue2rgb(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){const t=e.h/360,{s:i,l:o,a:n}=e;let r,a,l;if(0===i)r=a=l=o;else{const e=o<.5?o*(1+i):o+i-o*i,n=2*o-e;r=HSLA._hue2rgb(n,e,t+1/3),a=HSLA._hue2rgb(n,e,t),l=HSLA._hue2rgb(n,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),n)}}class HSVA{constructor(e,t,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=te(Math.max(Math.min(1,t),0),3),this.v=te(Math.max(Math.min(1,i),0),3),this.a=te(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,i=e.g/255,o=e.b/255,n=Math.max(t,i,o),r=n-Math.min(t,i,o),a=0===n?0:r/n;let l;return l=0===r?0:n===t?((i-o)/r%6+6)%6:n===i?(o-t)/r+2:(t-i)/r+4,new HSVA(Math.round(60*l),a,n,e.a)}static toRGBA(e){const{h:t,s:i,v:o,a:n}=e,r=o*i,a=r*(1-Math.abs(t/60%2-1)),l=o-r;let[c,d,h]=[0,0,0];return t<60?(c=r,d=a):t<120?(c=a,d=r):t<180?(d=r,h=a):t<240?(d=a,h=r):t<300?(c=a,h=r):t<=360&&(c=r,h=a),c=Math.round(255*(c+l)),d=Math.round(255*(d+l)),h=Math.round(255*(h+l)),new RGBA(c,d,h,n)}}function ie(e,t){return t.getPropertyValue(e).trim()}const oe=class _Color{static from(e){return e instanceof _Color?e:ce(e)||_Color.red}static fromCssVariable(e,t){return ce(ie(e,t))||_Color.red}static fromHex(e){return de(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return te(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new ne(new RGBA(0,0,0,e.rgba.a));if(1===t)return new ne(new RGBA(255,255,255,e.rgba.a));const i=e.getRelativeLuminance();let o=20;const n=(e,i)=>{const r=e.mix(i,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!o--?r:a>t?n(e,r):n(r,i)},r=(i>t?n(ne.black,e):n(e,ne.white)).rgba;return new ne(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:i,b:o,a:n}=this.rgba;return new _Color(new RGBA(t,i,o,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,i=this.rgba.a,o=t.a,n=i+o*(1-i);if(n<1e-6)return _Color.transparent;const r=this.rgba.r*i/n+t.r*o*(1-i)/n,a=this.rgba.g*i/n+t.g*o*(1-i)/n,l=this.rgba.b*i/n+t.b*o*(1-i)/n;return new _Color(new RGBA(r,a,l,n))}mix(e,t){return function(e,t,i){const o=e.rgba,n=t.rgba;return new ne(new RGBA(o.r+i*(n.r-o.r),o.g+i*(n.g-o.g),o.b+i*(n.b-o.b),o.a+i*(n.a-o.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:i,b:o,a:n}=this.rgba;return new _Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-i),e.rgba.b-n*(e.rgba.b-o),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const i=1-e.rgba.a;return new _Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return ae(e);return se(e)}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;const o=e.getRelativeLuminance(),n=t.getRelativeLuminance();return i=i*(n-o)/n,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;const o=e.getRelativeLuminance();return i=i*(o-t.getRelativeLuminance())/o,e.darken(i)}};oe.white=new oe(new RGBA(255,255,255,1)),oe.black=new oe(new RGBA(0,0,0,1)),oe.red=new oe(new RGBA(255,0,0,1)),oe.blue=new oe(new RGBA(0,0,255,1)),oe.green=new oe(new RGBA(0,255,0,1)),oe.cyan=new oe(new RGBA(0,255,255,1)),oe.lightgrey=new oe(new RGBA(211,211,211,1)),oe.transparent=new oe(new RGBA(0,0,0,0));let ne=oe;function se(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function re(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function ae(e){return`#${re(e.rgba.r)}${re(e.rgba.g)}${re(e.rgba.b)}`}const le=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function ce(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===x.Hash)return de(e);const t=le.exec(e);if(null==t)return null;const i=t[1];let o;switch(i){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(i){case"rgb":case"rgba":return new ne(new RGBA(o[0],o[1],o[2],o[3]));case"hsl":case"hsla":return new ne(new HSLA(o[0],o[1],o[2],o[3]))}return ne.red}function de(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==x.Hash)return null;switch(t){case 7:{const t=16*he(e.charCodeAt(1))+he(e.charCodeAt(2)),i=16*he(e.charCodeAt(3))+he(e.charCodeAt(4)),o=16*he(e.charCodeAt(5))+he(e.charCodeAt(6));return new ne(new RGBA(t,i,o,1))}case 9:{const t=16*he(e.charCodeAt(1))+he(e.charCodeAt(2)),i=16*he(e.charCodeAt(3))+he(e.charCodeAt(4)),o=16*he(e.charCodeAt(5))+he(e.charCodeAt(6)),n=16*he(e.charCodeAt(7))+he(e.charCodeAt(8));return new ne(new RGBA(t,i,o,n/255))}case 4:{const t=he(e.charCodeAt(1)),i=he(e.charCodeAt(2)),o=he(e.charCodeAt(3));return new ne(new RGBA(16*t+t,16*i+i,16*o+o))}case 5:{const t=he(e.charCodeAt(1)),i=he(e.charCodeAt(2)),o=he(e.charCodeAt(3)),n=he(e.charCodeAt(4));return new ne(new RGBA(16*t+t,16*i+i,16*o+o,(16*n+n)/255))}default:return null}}function he(e){switch(e){case x.Digit0:return 0;case x.Digit1:return 1;case x.Digit2:return 2;case x.Digit3:return 3;case x.Digit4:return 4;case x.Digit5:return 5;case x.Digit6:return 6;case x.Digit7:return 7;case x.Digit8:return 8;case x.Digit9:return 9;case x.a:case x.A:return 10;case x.b:case x.B:return 11;case x.c:case x.C:return 12;case x.d:case x.D:return 13;case x.e:case x.E:return 14;case x.f:case x.F:return 15}return 0}const pe=new j,ue=pe.event;function ge(e){const t=document.documentElement,i=window.getComputedStyle(t),o=document.body.classList,n=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),r=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=ie("--vscode-editor-background",i);let l=ie("--vscode-editor-foreground",i);return l||(l=ie("--vscode-foreground",i)),{colors:{background:a,foreground:l},computedStyle:i,isLightTheme:n,isHighContrastTheme:r,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],i=ge();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(i),t.push(ue(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",E.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=K(),this._hostIpc=new Z(this.appName),t.push(this._hostIpc),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{pe.fire(ge(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===M.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(O,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(L.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=i((e=>{this.sendCommand(T,e)}),150);this.bindDisposables.push(L.on(document,"focusin",(t=>{const i=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===i||(this._focused=!0,this._inputFocused=i,e({focused:!0,inputFocused:i}))})),L.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?E.log(e,...t):E.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}var me={408:(e,t)=>{var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),g=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,b={};function v(e,t,i){this.props=e,this.context=t,this.refs=b,this.updater=i||m}function y(){}function w(e,t,i){this.props=e,this.context=t,this.refs=b,this.updater=i||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=w.prototype=new y;x.constructor=w,f(x,v.prototype),x.isPureReactComponent=!0;var k=Array.isArray,_=Object.prototype.hasOwnProperty,C={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,o){var n,r={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,n)&&!S.hasOwnProperty(n)&&(r[n]=t[n]);var c=arguments.length-2;if(1===c)r.children=o;else if(1<c){for(var d=Array(c),h=0;h<c;h++)d[h]=arguments[h+2];r.children=d}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===r[n]&&(r[n]=c[n]);return{$$typeof:i,type:e,key:a,ref:l,props:r,_owner:C.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case o:c=!0}}if(c)return a=a(c=e),e=""===r?"."+R(c,0):r,k(a)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),O(a,t,n,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",k(e))for(var d=0;d<e.length;d++){var h=r+R(l=e[d],d);c+=O(l,t,n,h,a)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),d=0;!(l=e.next()).done;)c+=O(l=l.value,t,n,h=r+R(l,d++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,i){if(null==e)return e;var o=[],n=0;return O(e,o,"","",(function(e){return t.call(i,e,n++)})),o}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},L={transition:null},I={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:L,ReactCurrentOwner:C};t.Children={map:T,forEach:function(e,t,i){T(e,(function(){t.apply(this,arguments)}),i)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=n,t.Profiler=a,t.PureComponent=w,t.StrictMode=r,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=f({},e.props),r=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=C.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)_.call(t,d)&&!S.hasOwnProperty(d)&&(n[d]=void 0===t[d]&&void 0!==c?c[d]:t[d])}var d=arguments.length-2;if(1===d)n.children=o;else if(1<d){c=Array(d);for(var h=0;h<d;h++)c[h]=arguments[h+2];n.children=c}return{$$typeof:i,type:e.type,key:r,ref:a,props:n,_owner:l}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return M.current.useCallback(e,t)},t.useContext=function(e){return M.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return M.current.useDeferredValue(e)},t.useEffect=function(e,t){return M.current.useEffect(e,t)},t.useId=function(){return M.current.useId()},t.useImperativeHandle=function(e,t,i){return M.current.useImperativeHandle(e,t,i)},t.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return M.current.useMemo(e,t)},t.useReducer=function(e,t,i){return M.current.useReducer(e,t,i)},t.useRef=function(e){return M.current.useRef(e)},t.useState=function(e){return M.current.useState(e)},t.useSyncExternalStore=function(e,t,i){return M.current.useSyncExternalStore(e,t,i)},t.useTransition=function(){return M.current.useTransition()},t.version="18.2.0"},294:(e,t,i)=>{e.exports=i(408)}},fe={};function be(e){var t=fe[e];if(void 0!==t)return t.exports;var i=fe[e]={exports:{}};return me[e](i,i.exports,be),i.exports}be.d=(e,t)=>{for(var i in t)be.o(t,i)&&!be.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},be.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var ve={};(()=>{be.d(ve,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>Mt,ud:()=>zt,wt:()=>jt,ne:()=>Ut,Ku:()=>qt,FU:()=>Gt,XO:()=>ci,Ze:()=>di,K$:()=>hi,cX:()=>yi,Js:()=>wi,J9:()=>xi,si:()=>si,sg:()=>ki,hW:()=>_i,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>Ci,WV:()=>ae,h4:()=>re,kZ:()=>se});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class s{constructor(e,t,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=o.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&o.set(i,e))}return e}toString(){return this.cssText}}const n=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new s(o,e,i)},r=(i,o)=>{if(t)i.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of o){const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=t.cssText,i.appendChild(o)}},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,f=m?m.emptyScript:"",b=g.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const r=o?.call(this);n.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o,this[o]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i,o=!1,n){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??w)(o?n:this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,b?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.0.0");const k=globalThis,_=k.trustedTypes,C=_?_.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,E="?"+A,P=`<${E}>`,R=document,O=()=>R.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,M="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,B=/>/g,z=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,N=/"/g,U=/^(?:script|style|textarea|title)$/i,F=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),H=F(1),q=(F(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),G=new WeakMap,K=R.createTreeWalker(R,129);function Y(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}class Q{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,d]=((e,t)=>{const i=e.length-1,o=[];let n,r=2===t?"<svg>":"",a=L;for(let t=0;t<i;t++){const i=e[t];let l,c,d=-1,h=0;for(;h<i.length&&(a.lastIndex=h,c=a.exec(i),null!==c);)h=a.lastIndex,a===L?"!--"===c[1]?a=I:void 0!==c[1]?a=B:void 0!==c[2]?(U.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=z):void 0!==c[3]&&(a=z):a===z?">"===c[0]?(a=n??L,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?z:'"'===c[3]?N:j):a===N||a===j?a=z:a===I||a===B?a=L:(a=z,n=void 0);const p=a===z&&e[t+1].startsWith("/>")?" ":"";r+=a===L?i+P:d>=0?(o.push(l),i.slice(0,d)+S+i.slice(d)+A+p):i+A+(-2===d?t:p)}return[Y(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),o]})(e,t);if(this.el=Q.createElement(c,i),K.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=K.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(S)){const t=d[r++],i=o.getAttribute(e).split(A),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?it:"?"===a[1]?rt:"@"===a[1]?st:nt}),o.removeAttribute(e)}else e.startsWith(A)&&(l.push({type:6,index:n}),o.removeAttribute(e));if(U.test(o.tagName)){const e=o.textContent.split(A),t=e.length-1;if(t>0){o.textContent=_?_.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],O()),K.nextNode(),l.push({type:2,index:++n});o.append(e[t],O())}}}else if(8===o.nodeType)if(o.data===E)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(A,e+1));)l.push({type:7,index:n}),e+=A.length-1}n++}}static createElement(e,t){const i=R.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,o){if(t===q)return t;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const r=T(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(t=J(e,n._$AS(e,t.values),n,o)),t}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??R).importNode(t,!0);K.currentNode=o;let n=K.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new ot(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new at(n,this,e)),this._$AV.push(t),l=i[++a]}r!==l?.index&&(n=K.nextNode(),r++)}return K.currentNode=R,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),T(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=e:this.$(R.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Q.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new et(o,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new Q(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new ot(this.k(O()),this.k(O()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,o){const n=this.strings;let r=!1;if(void 0===n)e=J(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{const o=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=J(this,o[i+a],t,a),l===q&&(l=this._$AH[a]),r||=!T(l)||l!==this._$AH[a],l===W?e=W:e!==W&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class st extends nt{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??W)===q)return;const i=this._$AH,o=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const Z=k.litHtmlPolyfillSupport;Z?.(Q,ot),(k.litHtmlVersions??=[]).push("3.0.0");class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let n=o._$litPart$;if(void 0===n){const e=i?.renderBefore??null;o._$litPart$=n=new ot(t.insertBefore(O(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const X=globalThis.litElementPolyfillSupport;X?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");const ee={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},te=(e=ee,t,i)=>{const{kind:o,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];t.call(this,i),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+o)};function ie(e){return(t,i)=>"object"==typeof i?te(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}const oe=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function ne(e,t){return(i,o,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:a}="object"==typeof o?i:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return oe(i,o,{get(){if(t){let t=e.call(this);return void 0===t&&(t=r(this),a.call(this,t)),t}return r(this)}})}return oe(i,o,{get(){return r(this)}})}}class gt extends ct{}const se=n`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,re=n``,ae=n`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,le=Math.min,ce=Math.max,de=Math.round,he=(Math.floor,e=>({x:e,y:e})),pe={left:"right",right:"left",bottom:"top",top:"bottom"},ue={start:"end",end:"start"};function ge(e,t,i){return ce(e,le(t,i))}function me(e,t){return"function"==typeof e?e(t):e}function fe(e){return e.split("-")[0]}function ye(e){return e.split("-")[1]}function we(e){return"x"===e?"y":"x"}function ke(e){return"y"===e?"height":"width"}function _e(e){return["top","bottom"].includes(fe(e))?"y":"x"}function Ce(e){return we(_e(e))}function Ae(e){return e.replace(/start|end/g,(e=>ue[e]))}function Ee(e){return e.replace(/left|right|bottom|top/g,(e=>pe[e]))}function Pe(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Re(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Oe(e,t,i){let{reference:o,floating:n}=e;const r=_e(t),a=Ce(t),l=ke(a),c=fe(t),d="y"===r,h=o.x+o.width/2-n.width/2,p=o.y+o.height/2-n.height/2,u=o[l]/2-n[l]/2;let g;switch(c){case"top":g={x:h,y:o.y-n.height};break;case"bottom":g={x:h,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:p};break;case"left":g={x:o.x-n.width,y:p};break;default:g={x:o.x,y:o.y}}switch(ye(t)){case"start":g[a]-=u*(i&&d?-1:1);break;case"end":g[a]+=u*(i&&d?-1:1)}return g}async function Te(e,t){var i;void 0===t&&(t={});const{x:o,y:n,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:u=!1,padding:g=0}=me(t,e),m=Pe(g),f=l[u?"floating"===p?"reference":"floating":p],b=Re(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(f)))||i?f:f.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),v="floating"===p?{...a.floating,x:o,y:n}:a.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),w=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},x=Re(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:c}):v);return{top:(b.top-x.top+m.top)/w.y,bottom:(x.bottom-b.bottom+m.bottom)/w.y,left:(b.left-x.left+m.left)/w.x,right:(x.right-b.right+m.right)/w.x}}const De=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:n,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...b}=me(e,t);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const v=fe(n),y=fe(l)===l,w=await(null==c.isRTL?void 0:c.isRTL(d.floating)),x=u||(y||!f?[Ee(l)]:function(e){const t=Ee(e);return[Ae(e),t,Ae(t)]}(l));u||"none"===m||x.push(...function(e,t,i,o){const n=ye(e);let r=function(e,t,i){const o=["left","right"],n=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?n:o:t?o:n;case"left":case"right":return t?r:a;default:return[]}}(fe(e),"start"===i,o);return n&&(r=r.map((e=>e+"-"+n)),t&&(r=r.concat(r.map(Ae)))),r}(l,f,m,w));const k=[l,...x],_=await Te(t,b),C=[];let S=(null==(o=r.flip)?void 0:o.overflows)||[];if(h&&C.push(_[v]),p){const e=function(e,t,i){void 0===i&&(i=!1);const o=ye(e),n=Ce(e),r=ke(n);let a="x"===n?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Ee(a)),[a,Ee(a)]}(n,a,w);C.push(_[e[0]],_[e[1]])}if(S=[...S,{placement:n,overflows:C}],!C.every((e=>e<=0))){var A,E;const e=((null==(A=r.flip)?void 0:A.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let i=null==(E=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!i)switch(g){case"bestFit":{var P;const e=null==(P=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:P[0];e&&(i=e);break}case"initialPlacement":i=l}if(n!==i)return{reset:{placement:i}}}return{}}}},Me=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:i,y:o}=t,n=await async function(e,t){const{placement:i,platform:o,elements:n}=e,r=await(null==o.isRTL?void 0:o.isRTL(n.floating)),a=fe(i),l=ye(i),c="y"===_e(i),d=["left","top"].includes(a)?-1:1,h=r&&c?-1:1,p=me(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*h,y:u*d}:{x:u*d,y:g*h}}(t,e);return{x:i+n.x,y:o+n.y,data:n}}}};function Ie(e){return Ne(e)?(e.nodeName||"").toLowerCase():"#document"}function ze(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function je(e){var t;return null==(t=(Ne(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Ne(e){return e instanceof Node||e instanceof ze(e).Node}function Ue(e){return e instanceof Element||e instanceof ze(e).Element}function Fe(e){return e instanceof HTMLElement||e instanceof ze(e).HTMLElement}function qe(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof ze(e).ShadowRoot)}function Ve(e){const{overflow:t,overflowX:i,overflowY:o,display:n}=Xe(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(n)}function We(e){return["table","td","th"].includes(Ie(e))}function Ke(e){const t=Ye(),i=Xe(e);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((e=>(i.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(i.contain||"").includes(e)))}function Ye(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ze(e){return["html","body","#document"].includes(Ie(e))}function Xe(e){return ze(e).getComputedStyle(e)}function Qe(e){return Ue(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function tt(e){if("html"===Ie(e))return e;const t=e.assignedSlot||e.parentNode||qe(e)&&e.host||je(e);return qe(t)?t.host:t}function lt(e){const t=tt(e);return Ze(t)?e.ownerDocument?e.ownerDocument.body:e.body:Fe(t)&&Ve(t)?t:lt(t)}function dt(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);const n=lt(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),a=ze(n);return r?t.concat(a,a.visualViewport||[],Ve(n)?n:[],a.frameElement&&i?dt(a.frameElement):[]):t.concat(n,dt(n,[],i))}function ht(e){const t=Xe(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const n=Fe(e),r=n?e.offsetWidth:i,a=n?e.offsetHeight:o,l=de(i)!==r||de(o)!==a;return l&&(i=r,o=a),{width:i,height:o,$:l}}function pt(e){return Ue(e)?e:e.contextElement}function ut(e){const t=pt(e);if(!Fe(t))return he(1);const i=t.getBoundingClientRect(),{width:o,height:n,$:r}=ht(t);let a=(r?de(i.width):i.width)/o,l=(r?de(i.height):i.height)/n;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const mt=he(0);function ft(e){const t=ze(e);return Ye()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:mt}function bt(e,t,i,o){void 0===t&&(t=!1),void 0===i&&(i=!1);const n=e.getBoundingClientRect(),r=pt(e);let a=he(1);t&&(o?Ue(o)&&(a=ut(o)):a=ut(e));const l=function(e,t,i){return void 0===t&&(t=!1),!(!i||t&&i!==ze(e))&&t}(r,i,o)?ft(r):he(0);let c=(n.left+l.x)/a.x,d=(n.top+l.y)/a.y,h=n.width/a.x,p=n.height/a.y;if(r){const e=ze(r),t=o&&Ue(o)?ze(o):o;let i=e.frameElement;for(;i&&o&&t!==e;){const e=ut(i),t=i.getBoundingClientRect(),o=Xe(i),n=t.left+(i.clientLeft+parseFloat(o.paddingLeft))*e.x,r=t.top+(i.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,d*=e.y,h*=e.x,p*=e.y,c+=n,d+=r,i=ze(i).frameElement}}return Re({width:h,height:p,x:c,y:d})}function vt(e){return bt(je(e)).left+Qe(e).scrollLeft}function yt(e,t,i){let o;if("viewport"===t)o=function(e,t){const i=ze(e),o=je(e),n=i.visualViewport;let r=o.clientWidth,a=o.clientHeight,l=0,c=0;if(n){r=n.width,a=n.height;const e=Ye();(!e||e&&"fixed"===t)&&(l=n.offsetLeft,c=n.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,i);else if("document"===t)o=function(e){const t=je(e),i=Qe(e),o=e.ownerDocument.body,n=ce(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=ce(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+vt(e);const l=-i.scrollTop;return"rtl"===Xe(o).direction&&(a+=ce(t.clientWidth,o.clientWidth)-n),{width:n,height:r,x:a,y:l}}(je(e));else if(Ue(t))o=function(e,t){const i=bt(e,!0,"fixed"===t),o=i.top+e.clientTop,n=i.left+e.clientLeft,r=Fe(e)?ut(e):he(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:n*r.x,y:o*r.y}}(t,i);else{const i=ft(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return Re(o)}function wt(e,t){const i=tt(e);return!(i===t||!Ue(i)||Ze(i))&&("fixed"===Xe(i).position||wt(i,t))}function xt(e,t,i){const o=Fe(t),n=je(t),r="fixed"===i,a=bt(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=he(0);if(o||!o&&!r)if(("body"!==Ie(t)||Ve(n))&&(l=Qe(t)),o){const e=bt(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else n&&(c.x=vt(n));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function $t(e,t){return Fe(e)&&"fixed"!==Xe(e).position?t?t(e):e.offsetParent:null}function kt(e,t){const i=ze(e);if(!Fe(e))return i;let o=$t(e,t);for(;o&&We(o)&&"static"===Xe(o).position;)o=$t(o,t);return o&&("html"===Ie(o)||"body"===Ie(o)&&"static"===Xe(o).position&&!Ke(o))?i:o||function(e){let t=tt(e);for(;Fe(t)&&!Ze(t);){if(Ke(t))return t;t=tt(t)}return null}(e)||i}const _t={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:i,strategy:o}=e;const n=Fe(i),r=je(i);if(i===r)return t;let a={scrollLeft:0,scrollTop:0},l=he(1);const c=he(0);if((n||!n&&"fixed"!==o)&&(("body"!==Ie(i)||Ve(r))&&(a=Qe(i)),Fe(i))){const e=bt(i);l=ut(i),c.x=e.x+i.clientLeft,c.y=e.y+i.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-a.scrollLeft*l.x+c.x,y:t.y*l.y-a.scrollTop*l.y+c.y}},getDocumentElement:je,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:n}=e;const r=[..."clippingAncestors"===i?function(e,t){const i=t.get(e);if(i)return i;let o=dt(e,[],!1).filter((e=>Ue(e)&&"body"!==Ie(e))),n=null;const r="fixed"===Xe(e).position;let a=r?tt(e):e;for(;Ue(a)&&!Ze(a);){const t=Xe(a),i=Ke(a);i||"fixed"!==t.position||(n=null),(r?!i&&!n:!i&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||Ve(a)&&!i&&wt(e,a))?o=o.filter((e=>e!==a)):n=t,a=tt(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=r[0],l=r.reduce(((e,i)=>{const o=yt(t,i,n);return e.top=ce(o.top,e.top),e.right=le(o.right,e.right),e.bottom=le(o.bottom,e.bottom),e.left=ce(o.left,e.left),e}),yt(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:kt,getElementRects:async function(e){let{reference:t,floating:i,strategy:o}=e;const n=this.getOffsetParent||kt,r=this.getDimensions;return{reference:xt(t,await n(i),o),floating:{x:0,y:0,...await r(i)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return ht(e)},getScale:ut,isElement:Ue,isRTL:function(e){return"rtl"===Xe(e).direction}},Ct=n`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var St=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ae,se,Ct]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Me(6),De(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:n}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...c}=me(t,e),d={x:i,y:o},h=await Te(e,c),p=_e(fe(n)),u=we(p);let g=d[u],m=d[p];if(r){const e="y"===u?"bottom":"right";g=ge(g+h["y"===u?"top":"left"],g,g-h[e])}if(a){const e="y"===p?"bottom":"right";m=ge(m+h["y"===p?"top":"left"],m,m-h[e])}const f=l.fn({...e,[u]:g,[p]:m});return{...f,data:{x:f.x-i,y:f.y-o}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:n,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:h=0}=me(e,t)||{};if(null==d)return{};const p=Pe(h),u={x:i,y:o},g=Ce(n),m=ke(g),f=await a.getDimensions(d),b="y"===g,v=b?"top":"left",y=b?"bottom":"right",w=b?"clientHeight":"clientWidth",x=r.reference[m]+r.reference[g]-u[g]-r.floating[m],k=u[g]-r.reference[g],_=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let C=_?_[w]:0;C&&await(null==a.isElement?void 0:a.isElement(_))||(C=l.floating[w]||r.floating[m]);const S=x/2-k/2,A=C/2-f[m]/2-1,E=le(p[v],A),P=le(p[y],A),R=E,O=C-f[m]-P,T=C/2-f[m]/2+S,D=ge(R,T,O),M=!c.arrow&&null!=ye(n)&&T!=D&&r.reference[m]/2-(T<R?E:P)-f[m]/2<0,L=M?T<R?T-R:T-O:0;return{[g]:u[g]+L,data:{[g]:D,centerOffset:T-D-L,...M&&{alignmentOffset:L}},reset:M}}}))({element:this.arrowEl})),await((e,t,i)=>{const o=new Map,n={platform:_t,...i},r={...n.platform,_c:o};return(async(e,t,i)=>{const{placement:o="bottom",strategy:n="absolute",middleware:r=[],platform:a}=i,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:p}=Oe(d,o,c),u=o,g={},m=0;for(let i=0;i<l.length;i++){const{name:r,fn:f}=l[i],{x:b,y:v,data:y,reset:w}=await f({x:h,y:p,initialPlacement:o,placement:u,strategy:n,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=b?b:h,p=null!=v?v:p,g={...g,[r]:{...g[r],...y}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(d=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):w.rects),({x:h,y:p}=Oe(d,u,c))),i=-1)}return{x:h,y:p,placement:u,strategy:n,middlewareData:g}})(e,t,{...n,platform:r})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:i,middlewareData:o})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=o.arrow?.x,t=o.arrow?.y,n={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[n]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?H`<div part="arrow" class="arrow"></div>`:""}render(){return H`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}St([ie({type:Boolean})],xe.prototype,"arrow",void 0),St([ie({type:Boolean})],xe.prototype,"hover",void 0),St([ie()],xe.prototype,"placement",void 0),St([ie({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),St([ie({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),St([ne('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),St([ne(".popover")],xe.prototype,"popoverEl",void 0),St([ne(".arrow")],xe.prototype,"arrowEl",void 0),St([ie({state:!0,attribute:!1})],xe.prototype,"open",void 0);const At=n`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ae,se,At]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return H`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([ie({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);const Et=n`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=Et}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return H`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([ie({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);const Pt=new Set(["children","localName","ref","style","className"]),Rt=new WeakMap,Ot=(e,t,i,o,n)=>{const r=n?.[t];void 0===r||i===o?(e[t]=i,null==i&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,i)=>{let o=Rt.get(e);void 0===o&&Rt.set(e,o=new Map);let n=o.get(t);void 0!==i?void 0===n?(o.set(t,n={handleEvent:i}),e.addEventListener(t,n)):n.handleEvent=i:void 0!==n&&(o.delete(t),e.removeEventListener(t,n))})(e,r,i)},Tt=({react:e,tagName:t,elementClass:i,events:o,displayName:n})=>{const r=new Set(Object.keys(o??{})),a=e.forwardRef(((n,a)=>{const l=e.useRef(null),c=e.useRef(null),d={},h={};for(const[e,t]of Object.entries(n))Pt.has(e)?d["className"===e?"class":e]=t:r.has(e)||e in i.prototype?h[e]=t:d[e]=t;return e.useLayoutEffect((()=>{if(null!==c.current){for(const e in h)Ot(c.current,e,n[e],l.current?l.current[e]:void 0,o);l.current=n}})),e.useLayoutEffect((()=>{c.current?.removeAttribute("defer-hydration")}),[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e=>{c.current=e,"function"==typeof a?a(e):null!==a&&(a.current=e)}})}));return a.displayName=n??i.name,a};var Dt=be(294);const Mt=Tt({react:Dt,tagName:Se.elementName,elementClass:Se}),Lt=n`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,It=n`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Bt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class He extends gt{static{this.styles=[ae,Lt]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?H`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:H`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Bt([ie()],He.prototype,"src",void 0),Bt([ie()],He.prototype,"indicator",void 0);class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[ae,It]}render(){return H`<slot class="avatar-group" part="base"></slot>`}}const zt=Tt({react:Dt,tagName:He.elementName,elementClass:He}),jt=Tt({react:Dt,tagName:Le.elementName,elementClass:Le}),Nt=n`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Nt}static{this.elementName="gk-badge"}render(){return H`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([ie()],Be.prototype,"variant",void 0);const Ut=Tt({react:Dt,tagName:Be.elementName,elementClass:Be}),Ft=n`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var Ht=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Ft}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return H`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}Ht([ie({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),Ht([ie({reflect:!0})],Ge.prototype,"type",void 0),Ht([ie()],Ge.prototype,"variant",void 0);const qt=Tt({react:Dt,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),Vt=n`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Wt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ae,se,Vt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return H`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>H`<span class="complexity-indicator__box"></span>`))}</div>`}}Wt([ie({type:Number})],Je.prototype,"level",void 0),Wt([ie()],Je.prototype,"label",void 0);const Gt=Tt({react:Dt,tagName:Je.elementName,elementClass:Je}),Kt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Yt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Jt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Zt;const Xt=new Map;let Qt,ei,ti;new Map;const ii=["th","st","nd","rd"];function oi(e){const t=e%100;return`${e}${ii[(t-20)%10]??ii[t]??ii[0]}`}var ni=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ae]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(e,t){const i=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,o,n]of Jt){const r=Math.abs(i);if(r>=t||1e3===t)return null==Zt&&(null!=ti?Zt=ti.resolvedOptions().locale:null!=ei?Zt=ei.resolvedOptions().locale:(ti=new Intl.RelativeTimeFormat(Qt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Zt=ti.resolvedOptions().locale)),"en"===Zt||Zt?.startsWith("en-")?`${Math.round(r/o)}${n}`:(null==ti&&(ti=new Intl.RelativeTimeFormat(Qt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),ti.format(Math.round(i/o),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return H`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,i,o=!0){const n=`${i??""}:${t=t??void 0}`;let r=Xt.get(n);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Yt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:i}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:i||void 0}}const i={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Kt))if(null!=t)for(const e in t){const o=t[e];if(null!=o)switch(e){case"year":i.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric"}break;case"day":i.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow"}break;case"hour":i.hour=2===o.length?"2-digit":"numeric",i.hour12="hh"===o||"h"===o;break;case"minute":i.minute=2===o.length?"2-digit":"numeric";break;case"second":i.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=2===o.length?"long":"short"}}return i}(t);let a;a=null==i?Qt:"system"===i?void 0:[i],r=new Intl.DateTimeFormat(a,e),o&&Xt.set(n,r)}if(null==t||Yt.test(t))return r.format(e);function a(e){const t=`${i??""}:time:${e}`;let n=Xt.get(t);if(null==n){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==i?Qt:"system"===i?void 0:[i],n=new Intl.DateTimeFormat(a,r),o&&Xt.set(t,n)}return n}const l=r.formatToParts(e);return t.replace(Kt,((t,i,o,n,r,c,d,h,p,u,g,m,f,b,v)=>{if(null!=i)return i.substring(1,i.length-1);for(const t in v){const i=v[t];if(null==i)continue;const o=l.find((e=>e.type===t));if("Do"===i&&"day"===o?.type)return oi(Number(o.value));if("a"===i&&"dayPeriod"===o?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??o)?.value??""}`}return o?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}ni([ie({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],po.prototype,"date",void 0),ni([ie()],po.prototype,"format",void 0);const si=Tt({react:Dt,tagName:po.elementName,elementClass:po}),ri=n`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,ai=n`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,li=n`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class yo extends gt{static{this.styles=[ae,li]}static{this.elementName="gk-focus-item"}render(){return H`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class vo extends gt{static{this.styles=[ae,ai]}static{this.elementName="gk-focus-row"}render(){return H`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class bo extends gt{static{this.styles=[ae,ai,li,ri]}static{this.elementName="gk-focus-container"}render(){return H`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const ci=Tt({react:Dt,tagName:yo.elementName,elementClass:yo}),di=Tt({react:Dt,tagName:vo.elementName,elementClass:vo}),hi=Tt({react:Dt,tagName:bo.elementName,elementClass:bo});class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const pi=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.it)e in t||(i.remove(e),this.it.delete(e));for(const e in t){const o=!!t[e];o===this.it.has(e)||this.st?.has(e)||(o?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return q}}),ui=e=>e??W,gi=n`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var mi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[ae,se,gi]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return H`<div class="field"><label class="${pi({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${pi({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${ui(this.autocomplete)}" autocorrect="${ui(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${ui(this.name)}" part="input" placeholder="${ui(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}mi([ie()],Ro.prototype,"autocomplete",void 0),mi([ie()],Ro.prototype,"autocorrect",void 0),mi([ie({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),mi([ie()],Ro.prototype,"label",void 0),mi([ie({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),mi([ie()],Ro.prototype,"name",void 0),mi([ie()],Ro.prototype,"placeholder",void 0),mi([ie({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),mi([ie({reflect:!0})],Ro.prototype,"type",void 0),mi([ie()],Ro.prototype,"value",void 0);const fi=n`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,bi=n`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,vi=n`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ae,fi]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const i=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(i)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),i=t.length;let o=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?o=(o-1+i)%i:"ArrowDown"===e.key?o=(o+1)%i:"Home"===e.key?o=0:"End"===e.key&&(o=i-1),this._setCurrentItem(t[o]),t[o].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return H`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([function(e){return(t,i)=>{const{slot:o,selector:n}=e??{},r="slot"+(o?`[name=${o}]`:":not([name])");return oe(t,i,{get(){const t=this.renderRoot?.querySelector(r),i=t?.assignedElements(e)??[];return void 0===n?i:i.filter((e=>e.matches(n)))}})}}({flatten:!0})],Mo.prototype,"slotChildren",void 0);class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ae,bi]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return H`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([ie({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);class Ho extends gt{static{this.styles=[ae,vi]}static{this.elementName="gk-menu-label"}render(){return H`<slot class="menu-label" part="base"></slot>`}}const yi=Tt({react:Dt,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),wi=Tt({react:Dt,tagName:Do.elementName,elementClass:Do}),xi=Tt({react:Dt,tagName:Ho.elementName,elementClass:Ho}),$i=n`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Bo extends gt{static{this.styles=[ae,$i]}static{this.elementName="gk-tag"}render(){return H`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([ie()],Bo.prototype,"variant",void 0);const ki=Tt({react:Dt,tagName:Bo.elementName,elementClass:Bo}),_i=Tt({react:Dt,tagName:$e.elementName,elementClass:$e});function Ci(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Ci(...e.components))}))}})();var ye=ve.qE,we=ve.Ct,ke=ve.zx,_e=ve.v2,Ce=ve.sN,Ae=ve.J2,Ee=ve.fW;const Pe=globalThis,Re=Pe.ShadowRoot&&(void 0===Pe.ShadyCSS||Pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oe=Symbol(),Te=new WeakMap;class css_tag_n{constructor(e,t,i){if(this._$cssResult$=!0,i!==Oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Re&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=Te.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Te.set(t,e))}return e}toString(){return this.cssText}}const De=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,Oe),Me=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new css_tag_n(i,e,Oe)},Ie=Re?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return De(t)})(e):e,{is:ze,defineProperty:je,getOwnPropertyDescriptor:Ne,getOwnPropertyNames:Ue,getOwnPropertySymbols:Fe,getPrototypeOf:qe}=Object,Ve=globalThis,We=Ve.trustedTypes,Ke=We?We.emptyScript:"",Ye=Ve.reactiveElementPolyfillSupport,Ze=(e,t)=>e,Xe={toAttribute(e,t){switch(t){case Boolean:e=e?Ke:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},Qe=(e,t)=>!ze(e,t),tt={attribute:!0,type:String,converter:Xe,reflect:!1,hasChanged:Qe};Symbol.metadata??=Symbol("metadata"),Ve.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&je(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:n}=Ne(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const r=o?.call(this);n.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tt}static _$Ei(){if(this.hasOwnProperty(Ze("elementProperties")))return;const e=qe(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ze("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ze("properties"))){const e=this.properties,t=[...Ue(e),...Fe(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(Ie(e))}else void 0!==e&&t.push(Ie(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Re)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),o=Pe.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:Xe).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Xe;this._$Em=o,this[o]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??Qe)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[Ze("elementProperties")]=new Map,reactive_element_b[Ze("finalized")]=new Map,Ye?.({ReactiveElement:reactive_element_b}),(Ve.reactiveElementVersions??=[]).push("2.0.4");const lt=globalThis,dt=lt.trustedTypes,ht=dt?dt.createPolicy("lit-html",{createHTML:e=>e}):void 0,pt="$lit$",ut=`lit$${Math.random().toFixed(9).slice(2)}$`,mt="?"+ut,ft=`<${mt}>`,bt=document,vt=()=>bt.createComment(""),yt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,wt=Array.isArray,xt=e=>wt(e)||"function"==typeof e?.[Symbol.iterator],$t="[ \t\n\f\r]",kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,Ct=/>/g,St=RegExp(`>|${$t}(?:([^\\s"'>=/]+)(${$t}*=${$t}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,Et=/"/g,Pt=/^(?:script|style|textarea|title)$/i,Rt=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Ot=Rt(1),Tt=(Rt(2),Symbol.for("lit-noChange")),Dt=Symbol.for("lit-nothing"),Mt=new WeakMap,Lt=bt.createTreeWalker(bt,129);function It(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ht?ht.createHTML(t):t}const Bt=(e,t)=>{const i=e.length-1,o=[];let n,r=2===t?"<svg>":"",a=kt;for(let t=0;t<i;t++){const i=e[t];let l,c,d=-1,h=0;for(;h<i.length&&(a.lastIndex=h,c=a.exec(i),null!==c);)h=a.lastIndex,a===kt?"!--"===c[1]?a=_t:void 0!==c[1]?a=Ct:void 0!==c[2]?(Pt.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=St):void 0!==c[3]&&(a=St):a===St?">"===c[0]?(a=n??kt,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?St:'"'===c[3]?Et:At):a===Et||a===At?a=St:a===_t||a===Ct?a=kt:(a=St,n=void 0);const p=a===St&&e[t+1].startsWith("/>")?" ":"";r+=a===kt?i+ft:d>=0?(o.push(l),i.slice(0,d)+pt+i.slice(d)+ut+p):i+ut+(-2===d?t:p)}return[It(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class V{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,d]=Bt(e,t);if(this.el=V.createElement(c,i),Lt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Lt.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(pt)){const t=d[r++],i=o.getAttribute(e).split(ut),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?lit_html_k:"?"===a[1]?lit_html_H:"@"===a[1]?lit_html_I:lit_html_R}),o.removeAttribute(e)}else e.startsWith(ut)&&(l.push({type:6,index:n}),o.removeAttribute(e));if(Pt.test(o.tagName)){const e=o.textContent.split(ut),t=e.length-1;if(t>0){o.textContent=dt?dt.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],vt()),Lt.nextNode(),l.push({type:2,index:++n});o.append(e[t],vt())}}}else if(8===o.nodeType)if(o.data===mt)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(ut,e+1));)l.push({type:7,index:n}),e+=ut.length-1}n++}}static createElement(e,t){const i=bt.createElement("template");return i.innerHTML=e,i}}function zt(e,t,i=e,o){if(t===Tt)return t;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const r=yt(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(t=zt(e,n._$AS(e,t.values),n,o)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??bt).importNode(t,!0);Lt.currentNode=o;let n=Lt.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new lit_html_M(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new lit_html_L(n,this,e)),this._$AV.push(t),l=i[++a]}r!==l?.index&&(n=Lt.nextNode(),r++)}return Lt.currentNode=bt,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class lit_html_M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=Dt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=zt(this,e,t),yt(e)?e===Dt||null==e||""===e?(this._$AH!==Dt&&this._$AR(),this._$AH=Dt):e!==this._$AH&&e!==Tt&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):xt(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Dt&&yt(this._$AH)?this._$AA.nextSibling.data=e:this.T(bt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=V.createElement(It(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new lit_html_S(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Mt.get(e.strings);return void 0===t&&Mt.set(e.strings,t=new V(e)),t}k(e){wt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new lit_html_M(this.S(vt()),this.S(vt()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class lit_html_R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=Dt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Dt}_$AI(e,t=this,i,o){const n=this.strings;let r=!1;if(void 0===n)e=zt(this,e,t,0),r=!yt(e)||e!==this._$AH&&e!==Tt,r&&(this._$AH=e);else{const o=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=zt(this,o[i+a],t,a),l===Tt&&(l=this._$AH[a]),r||=!yt(l)||l!==this._$AH[a],l===Dt?e=Dt:e!==Dt&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===Dt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lit_html_k extends lit_html_R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Dt?void 0:e}}class lit_html_H extends lit_html_R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Dt)}}class lit_html_I extends lit_html_R{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){if((e=zt(this,e,t,0)??Dt)===Tt)return;const i=this._$AH,o=e===Dt&&i!==Dt||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Dt&&(i===Dt||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class lit_html_L{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){zt(this,e)}}const jt={P:pt,A:ut,C:mt,M:1,L:Bt,R:lit_html_S,D:xt,V:zt,I:lit_html_M,H:lit_html_R,N:lit_html_H,U:lit_html_I,B:lit_html_k,F:lit_html_L},Nt=lt.litHtmlPolyfillSupport;Nt?.(V,lit_html_M),(lt.litHtmlVersions??=[]).push("3.1.4");class lit_element_s extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let n=o._$litPart$;if(void 0===n){const e=i?.renderBefore??null;o._$litPart$=n=new lit_html_M(t.insertBefore(vt(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Tt}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const Ut=globalThis.litElementPolyfillSupport;Ut?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.6");const Ft=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Ht={attribute:!0,type:String,converter:Xe,reflect:!1,hasChanged:Qe},qt=(e=Ht,t,i)=>{const{kind:o,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];t.call(this,i),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+o)};function Vt(e){return(t,i)=>"object"==typeof i?qt(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function Wt(e){return Vt({...e,state:!0,attribute:!1})}const Gt=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function Kt(e,t){return(i,o,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?i:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Gt(i,o,{get(){let i=e.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return Gt(i,o,{get(){return r(this)}})}}function Yt(e){return(t,i)=>{const{slot:o,selector:n}=e??{},r="slot"+(o?`[name=${o}]`:":not([name])");return Gt(t,i,{get(){const t=this.renderRoot?.querySelector(r),i=t?.assignedElements(e)??[];return void 0===n?i:i.filter((e=>e.matches(n)))}})}}function Jt(e,t,i){return e?t(e):i?.(e)}const Zt="commitDetails",Xt=new IpcCommand(Zt,"commit/suggestChanges"),Qt=new IpcCommand(Zt,"commit/actions/execute"),ei=new IpcCommand(Zt,"file/actions/execute"),ti=new IpcCommand(Zt,"file/open"),ii=new IpcCommand(Zt,"file/openOnRemote"),oi=new IpcCommand(Zt,"file/compareWorking"),ni=new IpcCommand(Zt,"file/comparePrevious"),si=new IpcCommand(Zt,"file/stage"),ri=new IpcCommand(Zt,"file/unstage"),ai=new IpcCommand(Zt,"pickCommit"),li=new IpcCommand(Zt,"searchCommit"),ci=new IpcCommand(Zt,"switchMode"),di=(new IpcCommand(Zt,"autolinkSettings"),new IpcCommand(Zt,"pin")),hi=new IpcCommand(Zt,"navigate"),pi=new IpcCommand(Zt,"preferences/update"),ui=new IpcCommand(Zt,"wip/createPatch"),gi=new IpcCommand(Zt,"wip/changeReviewMode"),mi=new IpcCommand(Zt,"wip/showCodeSuggestion"),fi=new IpcCommand(Zt,"fetch"),bi=new IpcCommand(Zt,"publish"),vi=new IpcCommand(Zt,"push"),yi=new IpcCommand(Zt,"pull"),wi=new IpcCommand(Zt,"switch"),xi=new IpcCommand(Zt,"openPullRequestChanges"),$i=new IpcCommand(Zt,"openPullRequestComparison"),ki=new IpcCommand(Zt,"openPullRequestOnRemote"),_i=new IpcCommand(Zt,"openPullRequestDetails"),Ci=new IpcRequest(Zt,"explain"),Si=new IpcRequest(Zt,"generate"),Ai=new IpcNotification(Zt,"didChange",!0),Ei=new IpcNotification(Zt,"didChange/wip"),Pi=(new IpcNotification(Zt,"org/settings/didChange"),new IpcNotification(Zt,"didChange/jira")),Ri=new IpcNotification(Zt,"didChange/account"),Oi=new IpcNotification(Zt,"didChange/patch");var Ti=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,Mi=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Di(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ti(t,i,r),r};const Li=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let Ii=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Ii.styles=Me`
		:host {
			--code-icon-size: 16px;
			--code-icon-v-align: text-bottom;

			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${De(Object.entries(Li).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,Mi([Vt()],Ii.prototype,"icon",2),Mi([Vt()],Ii.prototype,"modifier",2),Mi([Vt({type:Number})],Ii.prototype,"size",2),Mi([Vt()],Ii.prototype,"flip",2),Mi([Vt()],Ii.prototype,"rotate",2),Ii=Mi([Ft("code-icon")],Ii);const Bi=Me`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,zi=Me`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var ji=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,Ui=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Ni(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ji(t,i,r),r};let Fi=class extends lit_element_s{constructor(){super(...arguments),this.pulse=!1}render(){return Ot`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};Fi.styles=[Bi,zi],Ui([Vt({type:Boolean})],Fi.prototype,"pulse",2),Fi=Ui([Ft("gl-indicator")],Fi);var Hi=Object.defineProperty,qi=Object.defineProperties,Vi=Object.getOwnPropertyDescriptor,Wi=Object.getOwnPropertyDescriptors,Gi=Object.getOwnPropertySymbols,Ki=Object.prototype.hasOwnProperty,Yi=Object.prototype.propertyIsEnumerable,Ji=(e,t,i)=>t in e?Hi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Zi=(e,t)=>{for(var i in t||(t={}))Ki.call(t,i)&&Ji(e,i,t[i]);if(Gi)for(var i of Gi(t))Yi.call(t,i)&&Ji(e,i,t[i]);return e},Xi=(e,t)=>qi(e,Wi(t)),Qi=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Vi(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Hi(t,i,r),r},eo=new Map,to=new WeakMap;function io(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function oo(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function no(e,t){eo.set(e,io(t))}function so(e,t,i){const o=to.get(e);if(null==o?void 0:o[t])return oo(o[t],i.dir);const n=eo.get(t);return n?oo(n,i.dir):{keyframes:[],options:{duration:0}}}var ro=Me`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,ao=Me`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,lo=Me`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,co=class extends lit_element_s{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const i=new CustomEvent(e,Zi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o)return void customElements.define(e,class extends t{},i);let n=" (unknown version)",r=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in o&&o.version&&(r=" v"+o.version)}};co.version="2.15.1",co.dependencies={},Qi([Vt()],co.prototype,"dir",2),Qi([Vt()],co.prototype,"lang",2);const ho=Math.min,uo=Math.max,go=Math.round,mo=Math.floor,fo=e=>({x:e,y:e}),wo={left:"right",right:"left",bottom:"top",top:"bottom"},xo={start:"end",end:"start"};function ko(e,t,i){return uo(e,ho(t,i))}function _o(e,t){return"function"==typeof e?e(t):e}function Co(e){return e.split("-")[0]}function So(e){return e.split("-")[1]}function Ao(e){return"x"===e?"y":"x"}function Eo(e){return"y"===e?"height":"width"}function Po(e){return["top","bottom"].includes(Co(e))?"y":"x"}function Oo(e){return Ao(Po(e))}function To(e){return e.replace(/start|end/g,(e=>xo[e]))}function Lo(e){return e.replace(/left|right|bottom|top/g,(e=>wo[e]))}function Io(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function zo(e){const{x:t,y:i,width:o,height:n}=e;return{width:o,height:n,top:i,left:t,right:t+o,bottom:i+n,x:t,y:i}}function jo(e,t,i){let{reference:o,floating:n}=e;const r=Po(t),a=Oo(t),l=Eo(a),c=Co(t),d="y"===r,h=o.x+o.width/2-n.width/2,p=o.y+o.height/2-n.height/2,u=o[l]/2-n[l]/2;let g;switch(c){case"top":g={x:h,y:o.y-n.height};break;case"bottom":g={x:h,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:p};break;case"left":g={x:o.x-n.width,y:p};break;default:g={x:o.x,y:o.y}}switch(So(t)){case"start":g[a]-=u*(i&&d?-1:1);break;case"end":g[a]+=u*(i&&d?-1:1)}return g}async function No(e,t){var i;void 0===t&&(t={});const{x:o,y:n,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:u=!1,padding:g=0}=_o(t,e),m=Io(g),f=l[u?"floating"===p?"reference":"floating":p],b=zo(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(f)))||i?f:f.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),v="floating"===p?{x:o,y:n,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),w=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},x=zo(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:c}):v);return{top:(b.top-x.top+m.top)/w.y,bottom:(x.bottom-b.bottom+m.bottom)/w.y,left:(b.left-x.left+m.left)/w.x,right:(x.right-b.right+m.right)/w.x}}function Uo(e){return Vo(e)?(e.nodeName||"").toLowerCase():"#document"}function Fo(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function qo(e){var t;return null==(t=(Vo(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Vo(e){return e instanceof Node||e instanceof Fo(e).Node}function Wo(e){return e instanceof Element||e instanceof Fo(e).Element}function Go(e){return e instanceof HTMLElement||e instanceof Fo(e).HTMLElement}function Ko(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Fo(e).ShadowRoot)}function Yo(e){const{overflow:t,overflowX:i,overflowY:o,display:n}=tn(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(n)}function Jo(e){return["table","td","th"].includes(Uo(e))}function Zo(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Xo(e){const t=Qo(),i=tn(e);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((e=>(i.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(i.contain||"").includes(e)))}function Qo(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function en(e){return["html","body","#document"].includes(Uo(e))}function tn(e){return Fo(e).getComputedStyle(e)}function on(e){return Wo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function nn(e){if("html"===Uo(e))return e;const t=e.assignedSlot||e.parentNode||Ko(e)&&e.host||qo(e);return Ko(t)?t.host:t}function sn(e){const t=nn(e);return en(t)?e.ownerDocument?e.ownerDocument.body:e.body:Go(t)&&Yo(t)?t:sn(t)}function rn(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);const n=sn(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),a=Fo(n);return r?t.concat(a,a.visualViewport||[],Yo(n)?n:[],a.frameElement&&i?rn(a.frameElement):[]):t.concat(n,rn(n,[],i))}function an(e){const t=tn(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const n=Go(e),r=n?e.offsetWidth:i,a=n?e.offsetHeight:o,l=go(i)!==r||go(o)!==a;return l&&(i=r,o=a),{width:i,height:o,$:l}}function ln(e){return Wo(e)?e:e.contextElement}function cn(e){const t=ln(e);if(!Go(t))return fo(1);const i=t.getBoundingClientRect(),{width:o,height:n,$:r}=an(t);let a=(r?go(i.width):i.width)/o,l=(r?go(i.height):i.height)/n;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const dn=fo(0);function hn(e){const t=Fo(e);return Qo()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:dn}function pn(e,t,i,o){void 0===t&&(t=!1),void 0===i&&(i=!1);const n=e.getBoundingClientRect(),r=ln(e);let a=fo(1);t&&(o?Wo(o)&&(a=cn(o)):a=cn(e));const l=function(e,t,i){return void 0===t&&(t=!1),!(!i||t&&i!==Fo(e))&&t}(r,i,o)?hn(r):fo(0);let c=(n.left+l.x)/a.x,d=(n.top+l.y)/a.y,h=n.width/a.x,p=n.height/a.y;if(r){const e=Fo(r),t=o&&Wo(o)?Fo(o):o;let i=e,n=i.frameElement;for(;n&&o&&t!==i;){const e=cn(n),t=n.getBoundingClientRect(),o=tn(n),r=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,d*=e.y,h*=e.x,p*=e.y,c+=r,d+=a,i=Fo(n),n=i.frameElement}}return zo({width:h,height:p,x:c,y:d})}function un(e){return pn(qo(e)).left+on(e).scrollLeft}function gn(e,t,i){let o;if("viewport"===t)o=function(e,t){const i=Fo(e),o=qo(e),n=i.visualViewport;let r=o.clientWidth,a=o.clientHeight,l=0,c=0;if(n){r=n.width,a=n.height;const e=Qo();(!e||e&&"fixed"===t)&&(l=n.offsetLeft,c=n.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,i);else if("document"===t)o=function(e){const t=qo(e),i=on(e),o=e.ownerDocument.body,n=uo(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=uo(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+un(e);const l=-i.scrollTop;return"rtl"===tn(o).direction&&(a+=uo(t.clientWidth,o.clientWidth)-n),{width:n,height:r,x:a,y:l}}(qo(e));else if(Wo(t))o=function(e,t){const i=pn(e,!0,"fixed"===t),o=i.top+e.clientTop,n=i.left+e.clientLeft,r=Go(e)?cn(e):fo(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:n*r.x,y:o*r.y}}(t,i);else{const i=hn(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return zo(o)}function mn(e,t){const i=nn(e);return!(i===t||!Wo(i)||en(i))&&("fixed"===tn(i).position||mn(i,t))}function fn(e,t,i){const o=Go(t),n=qo(t),r="fixed"===i,a=pn(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=fo(0);if(o||!o&&!r)if(("body"!==Uo(t)||Yo(n))&&(l=on(t)),o){const e=pn(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else n&&(c.x=un(n));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function bn(e){return"static"===tn(e).position}function vn(e,t){return Go(e)&&"fixed"!==tn(e).position?t?t(e):e.offsetParent:null}function yn(e,t){const i=Fo(e);if(Zo(e))return i;if(!Go(e)){let t=nn(e);for(;t&&!en(t);){if(Wo(t)&&!bn(t))return t;t=nn(t)}return i}let o=vn(e,t);for(;o&&Jo(o)&&bn(o);)o=vn(o,t);return o&&en(o)&&bn(o)&&!Xo(o)?i:o||function(e){let t=nn(e);for(;Go(t)&&!en(t);){if(Zo(t))return null;if(Xo(t))return t;t=nn(t)}return null}(e)||i}const wn={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:n}=e;const r="fixed"===n,a=qo(o),l=!!t&&Zo(t.floating);if(o===a||l&&r)return i;let c={scrollLeft:0,scrollTop:0},d=fo(1);const h=fo(0),p=Go(o);if((p||!p&&!r)&&(("body"!==Uo(o)||Yo(a))&&(c=on(o)),Go(o))){const e=pn(o);d=cn(o),h.x=e.x+o.clientLeft,h.y=e.y+o.clientTop}return{width:i.width*d.x,height:i.height*d.y,x:i.x*d.x-c.scrollLeft*d.x+h.x,y:i.y*d.y-c.scrollTop*d.y+h.y}},getDocumentElement:qo,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:n}=e;const r=[..."clippingAncestors"===i?Zo(t)?[]:function(e,t){const i=t.get(e);if(i)return i;let o=rn(e,[],!1).filter((e=>Wo(e)&&"body"!==Uo(e))),n=null;const r="fixed"===tn(e).position;let a=r?nn(e):e;for(;Wo(a)&&!en(a);){const t=tn(a),i=Xo(a);i||"fixed"!==t.position||(n=null),(r?!i&&!n:!i&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||Yo(a)&&!i&&mn(e,a))?o=o.filter((e=>e!==a)):n=t,a=nn(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=r[0],l=r.reduce(((e,i)=>{const o=gn(t,i,n);return e.top=uo(o.top,e.top),e.right=ho(o.right,e.right),e.bottom=ho(o.bottom,e.bottom),e.left=uo(o.left,e.left),e}),gn(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:yn,getElementRects:async function(e){const t=this.getOffsetParent||yn,i=this.getDimensions,o=await i(e.floating);return{reference:fn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:i}=an(e);return{width:t,height:i}},getScale:cn,isElement:Wo,isRTL:function(e){return"rtl"===tn(e).direction}};function xn(e,t,i,o){void 0===o&&(o={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=o,d=ln(e),h=n||r?[...d?rn(d):[],...rn(t)]:[];h.forEach((e=>{n&&e.addEventListener("scroll",i,{passive:!0}),r&&e.addEventListener("resize",i)}));const p=d&&l?function(e,t){let i,o=null;const n=qo(e);function r(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),r();const{left:d,top:h,width:p,height:u}=e.getBoundingClientRect();if(l||t(),!p||!u)return;const g={rootMargin:-mo(h)+"px "+-mo(n.clientWidth-(d+p))+"px "+-mo(n.clientHeight-(h+u))+"px "+-mo(d)+"px",threshold:uo(0,ho(1,c))||1};let m=!0;function f(e){const t=e[0].intersectionRatio;if(t!==c){if(!m)return a();t?a(!1,t):i=setTimeout((()=>{a(!1,1e-7)}),1e3)}m=!1}try{o=new IntersectionObserver(f,{...g,root:n.ownerDocument})}catch(e){o=new IntersectionObserver(f,g)}o.observe(e)}(!0),r}(d,i):null;let u,g=-1,m=null;a&&(m=new ResizeObserver((e=>{let[o]=e;o&&o.target===d&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=m)||e.observe(t)}))),i()})),d&&!c&&m.observe(d),m.observe(t));let f=c?pn(e):null;return c&&function t(){const o=pn(e);!f||o.x===f.x&&o.y===f.y&&o.width===f.width&&o.height===f.height||i();f=o,u=requestAnimationFrame(t)}(),i(),()=>{var e;h.forEach((e=>{n&&e.removeEventListener("scroll",i),r&&e.removeEventListener("resize",i)})),null==p||p(),null==(e=m)||e.disconnect(),m=null,c&&cancelAnimationFrame(u)}}const $n=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:n,y:r,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:i,platform:o,elements:n}=e,r=await(null==o.isRTL?void 0:o.isRTL(n.floating)),a=Co(i),l=So(i),c="y"===Po(i),d=["left","top"].includes(a)?-1:1,h=r&&c?-1:1,p=_o(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*h,y:u*d}:{x:u*d,y:g*h}}(t,e);return a===(null==(i=l.offset)?void 0:i.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:n+c.x,y:r+c.y,data:{...c,placement:a}}}}},kn=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:n}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...c}=_o(e,t),d={x:i,y:o},h=await No(t,c),p=Po(Co(n)),u=Ao(p);let g=d[u],m=d[p];if(r){const e="y"===u?"bottom":"right";g=ko(g+h["y"===u?"top":"left"],g,g-h[e])}if(a){const e="y"===p?"bottom":"right";m=ko(m+h["y"===p?"top":"left"],m,m-h[e])}const f=l.fn({...t,[u]:g,[p]:m});return{...f,data:{x:f.x-i,y:f.y-o}}}}},_n=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:n,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...b}=_o(e,t);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const v=Co(n),y=Po(l),w=Co(l)===l,x=await(null==c.isRTL?void 0:c.isRTL(d.floating)),k=u||(w||!f?[Lo(l)]:function(e){const t=Lo(e);return[To(e),t,To(t)]}(l)),_="none"!==m;!u&&_&&k.push(...function(e,t,i,o){const n=So(e);let r=function(e,t,i){const o=["left","right"],n=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?n:o:t?o:n;case"left":case"right":return t?r:a;default:return[]}}(Co(e),"start"===i,o);return n&&(r=r.map((e=>e+"-"+n)),t&&(r=r.concat(r.map(To)))),r}(l,f,m,x));const C=[l,...k],S=await No(t,b),A=[];let E=(null==(o=r.flip)?void 0:o.overflows)||[];if(h&&A.push(S[v]),p){const e=function(e,t,i){void 0===i&&(i=!1);const o=So(e),n=Oo(e),r=Eo(n);let a="x"===n?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Lo(a)),[a,Lo(a)]}(n,a,x);A.push(S[e[0]],S[e[1]])}if(E=[...E,{placement:n,overflows:A}],!A.every((e=>e<=0))){var P,R;const e=((null==(P=r.flip)?void 0:P.index)||0)+1,t=C[e];if(t)return{data:{index:e,overflows:E},reset:{placement:t}};let i=null==(R=E.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:R.placement;if(!i)switch(g){case"bestFit":{var O;const e=null==(O=E.filter((e=>{if(_){const t=Po(e.placement);return t===y||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:O[0];e&&(i=e);break}case"initialPlacement":i=l}if(n!==i)return{reset:{placement:i}}}return{}}}},Cn=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:i,rects:o,platform:n,elements:r}=t,{apply:a=(()=>{}),...l}=_o(e,t),c=await No(t,l),d=Co(i),h=So(i),p="y"===Po(i),{width:u,height:g}=o.floating;let m,f;"top"===d||"bottom"===d?(m=d,f=h===(await(null==n.isRTL?void 0:n.isRTL(r.floating))?"start":"end")?"left":"right"):(f=d,m="end"===h?"top":"bottom");const b=g-c.top-c.bottom,v=u-c.left-c.right,y=ho(g-c[m],b),w=ho(u-c[f],v),x=!t.middlewareData.shift;let k=y,_=w;if(p?_=h||x?ho(w,v):v:k=h||x?ho(y,b):b,x&&!h){const e=uo(c.left,0),t=uo(c.right,0),i=uo(c.top,0),o=uo(c.bottom,0);p?_=u-2*(0!==e||0!==t?e+t:uo(c.left,c.right)):k=g-2*(0!==i||0!==o?i+o:uo(c.top,c.bottom))}await a({...t,availableWidth:_,availableHeight:k});const C=await n.getDimensions(r.floating);return u!==C.width||g!==C.height?{reset:{rects:!0}}:{}}}},Sn=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:n,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:h=0}=_o(e,t)||{};if(null==d)return{};const p=Io(h),u={x:i,y:o},g=Oo(n),m=Eo(g),f=await a.getDimensions(d),b="y"===g,v=b?"top":"left",y=b?"bottom":"right",w=b?"clientHeight":"clientWidth",x=r.reference[m]+r.reference[g]-u[g]-r.floating[m],k=u[g]-r.reference[g],_=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let C=_?_[w]:0;C&&await(null==a.isElement?void 0:a.isElement(_))||(C=l.floating[w]||r.floating[m]);const S=x/2-k/2,A=C/2-f[m]/2-1,E=ho(p[v],A),P=ho(p[y],A),R=E,O=C-f[m]-P,T=C/2-f[m]/2+S,D=ko(R,T,O),M=!c.arrow&&null!=So(n)&&T!==D&&r.reference[m]/2-(T<R?E:P)-f[m]/2<0,L=M?T<R?T-R:T-O:0;return{[g]:u[g]+L,data:{[g]:D,centerOffset:T-D-L,...M&&{alignmentOffset:L}},reset:M}}}),An=(e,t,i)=>{const o=new Map,n={platform:wn,...i},r={...n.platform,_c:o};return(async(e,t,i)=>{const{placement:o="bottom",strategy:n="absolute",middleware:r=[],platform:a}=i,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:p}=jo(d,o,c),u=o,g={},m=0;for(let i=0;i<l.length;i++){const{name:r,fn:f}=l[i],{x:b,y:v,data:y,reset:w}=await f({x:h,y:p,initialPlacement:o,placement:u,strategy:n,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=b?b:h,p=null!=v?v:p,g={...g,[r]:{...g[r],...y}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(d=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):w.rects),({x:h,y:p}=jo(d,u,c))),i=-1)}return{x:h,y:p,placement:u,strategy:n,middlewareData:g}})(e,t,{...n,platform:r})},En=1,Pn=2,Rn=e=>(...t)=>({_$litDirective$:e,values:t});class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const On=Rn(class extends directive_i{constructor(e){if(super(e),e.type!==En||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return Tt}});function Tn(e){return Mn(e)}function Dn(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Mn(e){for(let t=e;t;t=Dn(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=Dn(e);t;t=Dn(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var Ln=class extends co{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let i=0,o=0,n=0,r=0,a=0,l=0,c=0,d=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(i=e.left,o=e.bottom,n=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):(i=t.left,o=t.bottom,n=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):e.left<t.left?(i=e.right,o=e.top,n=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom):(i=t.right,o=t.top,n=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=xn(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[$n({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Cn({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(_n({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(kn({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Cn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Sn({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>wn.getOffsetParent(e,Tn):wn.getOffsetParent;An(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Xi(Zi({},wn),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:i,placement:o})=>{const n="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=i.arrow.x,t=i.arrow.y;let o="",a="",l="",c="";if("start"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=n?i:"",c=n?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=n?"":i,c=n?i:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:l,left:c,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return Ot`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${On({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${On({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Ot`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function In(e,t){return new Promise((i=>{e.addEventListener(t,(function o(n){n.target===e&&(e.removeEventListener(t,o),i())}))}))}function Bn(e,t,i){return new Promise((o=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,Xi(Zi({},i),{duration:jn()?0:i.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})}))}function zn(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function jn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Nn(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}Ln.styles=[lo,ao],Qi([Kt(".popup")],Ln.prototype,"popup",2),Qi([Kt(".popup__arrow")],Ln.prototype,"arrowEl",2),Qi([Vt()],Ln.prototype,"anchor",2),Qi([Vt({type:Boolean,reflect:!0})],Ln.prototype,"active",2),Qi([Vt({reflect:!0})],Ln.prototype,"placement",2),Qi([Vt({reflect:!0})],Ln.prototype,"strategy",2),Qi([Vt({type:Number})],Ln.prototype,"distance",2),Qi([Vt({type:Number})],Ln.prototype,"skidding",2),Qi([Vt({type:Boolean})],Ln.prototype,"arrow",2),Qi([Vt({attribute:"arrow-placement"})],Ln.prototype,"arrowPlacement",2),Qi([Vt({attribute:"arrow-padding",type:Number})],Ln.prototype,"arrowPadding",2),Qi([Vt({type:Boolean})],Ln.prototype,"flip",2),Qi([Vt({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],Ln.prototype,"flipFallbackPlacements",2),Qi([Vt({attribute:"flip-fallback-strategy"})],Ln.prototype,"flipFallbackStrategy",2),Qi([Vt({type:Object})],Ln.prototype,"flipBoundary",2),Qi([Vt({attribute:"flip-padding",type:Number})],Ln.prototype,"flipPadding",2),Qi([Vt({type:Boolean})],Ln.prototype,"shift",2),Qi([Vt({type:Object})],Ln.prototype,"shiftBoundary",2),Qi([Vt({attribute:"shift-padding",type:Number})],Ln.prototype,"shiftPadding",2),Qi([Vt({attribute:"auto-size"})],Ln.prototype,"autoSize",2),Qi([Vt()],Ln.prototype,"sync",2),Qi([Vt({type:Object})],Ln.prototype,"autoSizeBoundary",2),Qi([Vt({attribute:"auto-size-padding",type:Number})],Ln.prototype,"autoSizePadding",2),Qi([Vt({attribute:"hover-bridge",type:Boolean})],Ln.prototype,"hoverBridge",2);const Un=new Set,Fn=new MutationObserver(Kn),Hn=new Map;let qn,Vn=document.documentElement.dir||"ltr",Wn=document.documentElement.lang||navigator.language;function Gn(...e){e.map((e=>{const t=e.$code.toLowerCase();Hn.has(t)?Hn.set(t,Object.assign(Object.assign({},Hn.get(t)),e)):Hn.set(t,e),qn||(qn=e)})),Kn()}function Kn(){Vn=document.documentElement.dir||"ltr",Wn=document.documentElement.lang||navigator.language,[...Un.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}Fn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Un.add(this.host)}hostDisconnected(){Un.delete(this.host)}dir(){return`${this.host.dir||Vn}`.toLowerCase()}lang(){return`${this.host.lang||Wn}`.toLowerCase()}getTranslationData(e){var t,i;const o=new Intl.Locale(e.replace(/_/g,"-")),n=null==o?void 0:o.language.toLowerCase(),r=null!==(i=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:n,region:r,primary:Hn.get(`${n}-${r}`),secondary:Hn.get(n)}}exists(e,t){var i;const{primary:o,secondary:n}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||n&&n[e]||t.includeFallback&&qn&&qn[e])}term(e,...t){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let n;if(i&&i[e])n=i[e];else if(o&&o[e])n=o[e];else{if(!qn||!qn[e])return String(e);n=qn[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}var Yn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Gn(Yn);var Jn=Yn,Zn=class extends LocalizeController{};function Xn(e,t){const i=Zi({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:n}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),r=this[n];t!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,r))}})),n.call(this,e)}}}Gn(Jn);var Qn=class extends co{constructor(){super(),this.localize=new Zn(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=zn(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=zn(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Nn(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:i}=so(this,"tooltip.show",{dir:this.localize.dir()});await Bn(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Nn(this.body);const{keyframes:e,options:i}=so(this,"tooltip.hide",{dir:this.localize.dir()});await Bn(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,In(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,In(this,"sl-after-hide")}render(){return Ot`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${On({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Qn.styles=[lo,ro],Qn.dependencies={"sl-popup":Ln},Qi([Kt("slot:not([name])")],Qn.prototype,"defaultSlot",2),Qi([Kt(".tooltip__body")],Qn.prototype,"body",2),Qi([Kt("sl-popup")],Qn.prototype,"popup",2),Qi([Vt()],Qn.prototype,"content",2),Qi([Vt()],Qn.prototype,"placement",2),Qi([Vt({type:Boolean,reflect:!0})],Qn.prototype,"disabled",2),Qi([Vt({type:Number})],Qn.prototype,"distance",2),Qi([Vt({type:Boolean,reflect:!0})],Qn.prototype,"open",2),Qi([Vt({type:Number})],Qn.prototype,"skidding",2),Qi([Vt()],Qn.prototype,"trigger",2),Qi([Vt({type:Boolean})],Qn.prototype,"hoist",2),Qi([Xn("open",{waitUntilFirstUpdate:!0})],Qn.prototype,"handleOpenChange",1),Qi([Xn(["content","distance","hoist","placement","skidding"])],Qn.prototype,"handleOptionsChange",1),Qi([Xn("disabled")],Qn.prototype,"handleDisabledChange",1),no("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),no("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Qn.define("sl-tooltip");var es=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,is=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?ts(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&es(t,i,r),r};no("tooltip.show",null),no("tooltip.hide",null);let os=class extends lit_element_s{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return Ot`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??Dt}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};os.styles=Me`
		sl-tooltip {
			--max-width: 320px;
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}
	`,is([Vt()],os.prototype,"content",2),is([Vt({reflect:!0})],os.prototype,"placement",2),is([Vt({type:Boolean})],os.prototype,"disabled",2),is([Vt({type:Number})],os.prototype,"distance",2),is([Vt({type:Boolean})],os.prototype,"hoist",2),os=is([Ft("gl-tooltip")],os);const ns=Me`
	:host {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: text-bottom;
	}

	.pill {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		line-height: normal;
		text-transform: uppercase;
		color: var(--gl-pill-foreground, var(--vscode-foreground));
		background-color: var(--gl-pill-background, var(--vscode-editorWidget-background));
	}

	.pill--outlined {
		padding: 0.1rem 0.4rem;
		background-color: transparent;
		border: 1px solid var(--gl-pill-border, var(--vscode-foreground));
	}
`;var ss=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,as=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?rs(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ss(t,i,r),r};let ls=class extends lit_element_s{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.outlined=!1,this.colorized=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?Dt:Ot`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${Jt(this.behind>0,(()=>Ot`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`))}${Jt(this.ahead>0,(()=>Ot`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`))}${Jt(this.working>0,(()=>Ot`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`))}</span
		>`}};ls.styles=[ns,Me`
			.pill {
				gap: 0.1rem;
				text-transform: none;
			}

			.state {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			.state--ahead code-icon {
				color: var(--gl-tracking-ahead);
			}

			.state--behind code-icon {
				color: var(--gl-tracking-behind);
			}

			.state--working .working {
				color: var(--gl-tracking-working);
			}

			.state code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}

			.working {
				display: inline-block;
				width: 1rem;
				text-align: center;
				vertical-align: text-bottom;
				font-weight: normal;
			}
		`],as([Vt({type:Number})],ls.prototype,"ahead",2),as([Vt({type:Number})],ls.prototype,"behind",2),as([Vt({type:Number})],ls.prototype,"working",2),as([Vt({type:Boolean})],ls.prototype,"outlined",2),as([Vt({type:Boolean})],ls.prototype,"colorized",2),ls=as([Ft("gl-tracking-pill")],ls);class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=Dt,e.type!==Pn)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Dt||null==e)return this._t=void 0,this.it=e;if(e===Tt)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const cs=Rn(unsafe_html_e);function ds(e,t,i,o=!1,n){const r={name:"",relativePath:"",children:new Map,descendants:[]};let a=e.reduce(((e,o)=>{let n=e,r="";for(const e of t(o)){r=i(r,e),void 0===n.children&&(n.children=new Map);let t=n.children.get(e);void 0===t&&(t={name:e,relativePath:r,parent:n,children:void 0,descendants:void 0},n.children.set(e,t)),void 0===n.descendants&&(n.descendants=[]),n.descendants.push(o),n=t}return n.value=o,e}),r);return o&&(a=hs(a,i,!0,n)),a}function hs(e,t,i=!0,o){if(void 0===e.children)return e;const n=[...e.children.values()];for(const e of n)hs(e,t,!1,o);if(!i&&1===n.length){const i=n[0];(void 0===i.value||o?.(i.value))&&(e.name=t(e.name,i.name),e.relativePath=i.relativePath,e.children=i.children,e.descendants=i.descendants,e.value=i.value)}return e}Me`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;const ps=Me`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,us=Me`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`,gs=(Me`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Me`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`}
	}
	a:hover {
		text-decoration: underline;
	}
`,Me`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`);var ms=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,bs=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?fs(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ms(t,i,r),r};let vs=class extends lit_element_s{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return Ot`<div class="progress-bar"></div>`}};vs.styles=Me`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,bs([Vt({reflect:!0})],vs.prototype,"mode",2),bs([Vt({type:Boolean})],vs.prototype,"active",2),bs([Vt()],vs.prototype,"position",2),vs=bs([Ft("progress-indicator")],vs);var ys=Object.defineProperty,ws=Object.getOwnPropertyDescriptor,xs=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?ws(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ys(t,i,r),r};let $s=class extends lit_element_s{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?Ot`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:Ot`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return Ot`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};$s.styles=[gs,Me`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
				min-height: 23px;
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],xs([Vt({type:Boolean,reflect:!0})],$s.prototype,"collapsable",2),xs([Vt({type:Boolean,reflect:!0})],$s.prototype,"expanded",2),xs([Vt({type:Boolean,reflect:!0})],$s.prototype,"loading",2),$s=xs([Ft("webview-pane")],$s);var ks=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,Cs=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?_s(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ks(t,i,r),r};let Ss=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.disabled=!1}render(){return Ot`
			<gl-tooltip hoist content="${this.label??Dt}">
				<a
					role="${this.href?Dt:"button"}"
					type="${this.href?Dt:"button"}"
					aria-label="${this.label??Dt}"
					?disabled=${this.disabled}
					href=${this.href??Dt}
				>
					<code-icon icon="${this.icon}"></code-icon>
				</a>
			</gl-tooltip>
		`}};Ss.styles=Me`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
		}
	`,Cs([Vt()],Ss.prototype,"href",2),Cs([Vt()],Ss.prototype,"label",2),Cs([Vt()],Ss.prototype,"icon",2),Cs([Vt({type:Boolean})],Ss.prototype,"disabled",2),Ss=Cs([Ft("action-item")],Ss);var As=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,Ps=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Es(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&As(t,i,r),r};let Rs=class extends lit_element_s{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return Ot`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;const t=this.handleKeydown.bind(this),i=`${this.actionNodes.length}`,o=this.actionNodes.map(((e,o)=>(e.setAttribute("aria-posinset",`${o+1}`),e.setAttribute("aria-setsize",i),e.setAttribute("tabindex",0===o?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}})));this._slotSubscriptionsDisposer=()=>{o?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target,i=parseInt(t.getAttribute("aria-posinset")??"0",10);let o=null;if("ArrowLeft"===e.key){const e=1===i?this.actionNodes.length-1:i-2;o=this.actionNodes[e]}else if("ArrowRight"===e.key){const e=i===this.actionNodes.length?0:i;o=this.actionNodes[e]}null!=o&&o!==t&&(t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};Rs.styles=Me`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,Ps([Yt({flatten:!0})],Rs.prototype,"actionNodes",2),Rs=Ps([Ft("action-nav")],Rs);const Os=new WeakMap;function Ts(e,t){return function(i,o,n){let r=Os.get(i.constructor);null==r&&Os.set(i.constructor,r=[]),r.push({method:n.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_s{emit(e,t,i){const o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(o),o}update(e){const t=Os.get(this.constructor);if(null!=t)for(const{keys:i,method:o,afterFirstUpdate:n}of t){if(n&&!this.hasUpdated)continue;const t=i.filter((t=>e.has(t)));t.length&&o.call(this,t)}super.update(e)}}var Ds=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,Ls=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Ms(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ds(t,i,r),r};const Is={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let Bs=class extends lit_element_s{get statusName(){return this.status?Is[this.status]:""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return Ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return Ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return Ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return Ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return Ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return Ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return Ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return Ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return Ot`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};Bs.styles=[Me`
			:host-context(.vscode-high-contrast),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],Ls([Vt()],Bs.prototype,"status",2),Ls([Wt()],Bs.prototype,"statusName",1),Bs=Ls([Ft("gl-git-status")],Bs);const zs=[us,Me``],js=[us,Me`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			/* padding-right: var(--gitlens-scrollbar-gutter-width); */
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--gitlens-tree-foreground, var(--vscode-foreground));

			content-visibility: auto;
			contain-intrinsic-size: auto 2.2rem;
			cursor: pointer;
		}

		:host(:hover),
		:host(:focus-within) {
			content-visibility: visible;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}

		/* FIXME: remove, this is for debugging
		.item:focus {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}
 		*/
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			display: inline-block;
			margin-right: 0.6rem;
			height: 2.2rem;
			line-height: 2.2rem;
			vertical-align: text-bottom;
		}

		.text {
			line-height: 1.6rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
			pointer-events: none;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			// overflow: hidden;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}
	`];var Ns=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Fs=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Us(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ns(t,i,r),r};let Hs=class extends lit_element_s{disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return Ot`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;const e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),i=this.handleSelected.bind(this),o=this.treeItems.map((o=>(o.addEventListener("keydown",e,!1),o.addEventListener("gl-tree-item-select",t,!1),o.addEventListener("gl-tree-item-selected",i,!1),{dispose:function(){o?.removeEventListener("keydown",e,!1),o?.removeEventListener("gl-tree-item-select",t,!1),o?.removeEventListener("gl-tree-item-selected",i,!1)}})));this._slotSubscriptionsDisposer=()=>{o?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target)return;const t=e.target;if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;function t(e){const t=e.level;let i=e.previousElementSibling;for(;i;){if(i.level<t)return i;i=i.previousElementSibling}}const i=e.target,o=i.level;let n=i.nextElementSibling;for(;n&&o!==n.level;){const i=t(n);n.parentExpanded=!1!==i?.expanded,n.expanded=e.detail.node.expanded,n=n.nextElementSibling}}};Hs.styles=zs,Fs([Vt({reflect:!0})],Hs.prototype,"guides",2),Fs([Yt({flatten:!0})],Hs.prototype,"treeItems",2),Hs=Fs([Ft("gl-tree")],Hs);var qs=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,Ws=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Vs(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&qs(t,i,r),r};let Gs=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClickBound=this.onComponentClick.bind(this)}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onComponentClickBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onComponentClickBound)}onComponentClick(e){this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){const e=this.level-1;if(e<1&&!this.branch)return Dt;const t=[];if(e>0)for(let i=0;i<e;i++)t.push(Ot`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(Ot`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?Ot`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:Dt}renderActions(){return Ot`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return Ot`<slot name="decorations" class="decorations"></slot>`}render(){return Ot`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${Jt(this.showIcon,(()=>Ot`<slot name="icon" class="icon"></slot>`))}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame((()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})}))}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.emit("gl-tree-item-checked",{node:this,checked:this.checked})}};Gs.styles=js,Ws([Vt({type:Boolean})],Gs.prototype,"branch",2),Ws([Vt({type:Boolean})],Gs.prototype,"expanded",2),Ws([Vt({type:String})],Gs.prototype,"path",2),Ws([Vt({type:String,attribute:"parent-path"})],Gs.prototype,"parentPath",2),Ws([Vt({type:Boolean,attribute:"parent-expanded"})],Gs.prototype,"parentExpanded",2),Ws([Vt({type:Number})],Gs.prototype,"level",2),Ws([Vt({type:Number})],Gs.prototype,"size",2),Ws([Vt({type:Number})],Gs.prototype,"position",2),Ws([Vt({type:Boolean})],Gs.prototype,"checkable",2),Ws([Vt({type:Boolean})],Gs.prototype,"checked",2),Ws([Vt({type:Boolean})],Gs.prototype,"disableCheck",2),Ws([Vt({type:Boolean})],Gs.prototype,"showIcon",2),Ws([Wt()],Gs.prototype,"selected",2),Ws([Wt()],Gs.prototype,"focused",2),Ws([Kt("#button")],Gs.prototype,"buttonEl",2),Gs=Ws([Ft("gl-tree-item")],Gs);var Ks=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,Js=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Ys(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ks(t,i,r),r};let Zs=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0}set model(e){if(this._model===e)return;let t;if(this._model=e,null!=this._model){const e=this._model.length;t=this._model.reduce(((t,i,o)=>(t.push(...Xs(i,e,o+1)),t)),[])}this.treeItems=t}get model(){return this._model}renderIcon(e){return null==e?Dt:"string"==typeof e?Ot`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?Dt:Ot`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){const t=e.actions;return null==t||0===t.length?Dt:t.map((t=>Ot`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${i=>this.onTreeItemActionClicked(i,e,t)}
			></action-item>`))}renderDecorations(e){const t=e.decorations;return null==t||0===t.length?Dt:t.map((e=>"icon"===e.type?Ot`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?Ot`<span slot="decorations">${e.label}</span>`:void 0))}renderTreeItem(e){return Ot`<gl-tree-item
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${Jt(null!=e.description,(()=>Ot`<span slot="description">${e.description}</span>`))}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map((e=>this.renderTreeItem(e)))}render(){return Ot`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,i){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:i,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};function Xs(e,t=1,i=1){const o={size:t,position:i};for(const[t,i]of Object.entries(e))null!=i&&"children"!==t&&(o[t]=i);const n=[o];if(null!=e.children&&e.children.length>0){const t=e.children.length;for(let i=0;i<t;i++)n.push(...Xs(e.children[i],t,i+1))}return n}Zs.styles=Me`
		:host {
			display: contents;
		}
	`,Js([Wt()],Zs.prototype,"treeItems",2),Js([Vt({reflect:!0})],Zs.prototype,"guides",2),Js([Vt({type:Array,attribute:!1})],Zs.prototype,"model",1),Zs=Js([Ft("gl-tree-generator")],Zs);var Qs=Object.defineProperty,er=Object.getOwnPropertyDescriptor,tr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?er(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Qs(t,i,r),r};const ir=-2;class GlDetailsBase extends lit_element_s{constructor(){super(...arguments),this.tab="commit",this.isUncommitted=!1,this.emptyText="No Files"}get fileLayout(){return this.preferences?.files?.layout??"auto"}get isCompact(){return this.preferences?.files?.compact??!0}get indentGuides(){return this.preferences?.indentGuides??"none"}get filesChangedPaneLabel(){const e=this.files?.length??0;return`${e>0?C("file",e):"Files"} changed`}renderChangedFiles(e,t){const i=this.files?.length??0,o=this.isTree(i);let n="tree",r="list-tree",a="View as Tree";switch(this.fileLayout){case"auto":n="list",r="gl-list-auto",a="View as List";break;case"list":n="tree",r="list-flat",a="View as Tree";break;case"tree":n="auto",r="list-tree",a="View as Auto"}const l=this.createTreeModel(e,this.files??[],o,this.isCompact);return Ot`
			<webview-pane collapsable expanded flexible>
				<span slot="title">${this.filesChangedPaneLabel}</span>
				<span slot="subtitle" data-region="stats">${t}</span>
				<action-nav slot="actions">
					<action-item
						data-action="files-layout"
						data-files-layout="${n}"
						label="${a}"
						icon="${r}"
					></action-item>
				</action-nav>
				${Jt(i>0&&"wip"===this.tab,(()=>Ot`<div class="section section--actions">
							<p class="button-container">
								<span class="button-group button-group--single">
									<gl-button full href="command:workbench.view.scm"
										>Commit via SCM <code-icon rotate="45" icon="arrow-up" slot="suffix"></code-icon
									></gl-button>
								</span>
							</p>
						</div>`))}
				${this.renderTreeFileModel(l)}
			</webview-pane>
		`}onShareWipChanges(e,t,i){if(!i)return;const o=new CustomEvent("share-wip",{detail:{checked:t}});this.dispatchEvent(o)}createRenderRoot(){return this}isTree(e){return"auto"===this.fileLayout?e>(this.preferences?.files?.threshold??5):"tree"===this.fileLayout}createTreeModel(e,t,i=!1,o=!0){if(!this.isUncommitted)return this.createFileTreeModel(e,t,i,o);const n=[],r=[],a=[];for(const e of t)e.staged?r.push(e):a.push(e);return 0===r.length||0===a.length?n.push(...this.createFileTreeModel(e,t,i,o)):(r.length&&n.push({label:"Staged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["staged"],children:this.createFileTreeModel(e,r,i,o,{level:2}),actions:this.getStagedActions()}),a.length&&n.push({label:"Unstaged Changes",path:"",level:1,branch:!0,checkable:!1,expanded:!0,checked:!1,context:["unstaged"],children:this.createFileTreeModel(e,a,i,o,{level:2}),actions:this.getUnstagedActions()})),n}sortChildren(e){return e.sort(((e,t)=>e.branch&&!t.branch?-1:!e.branch&&t.branch?1:e.label<t.label?-1:e.label>t.label?1:0)),e}createFileTreeModel(e,t,i=!1,o=!0,n={level:1}){if(void 0===n.level&&(n.level=1),!t.length)return[{label:"No changes",path:"",level:n.level,branch:!1,checkable:!1,expanded:!0,checked:!1}];const r=[];if(i){const e=ds(t,(e=>e.path.split("/")),((...e)=>e.join("/")),o);if(null!=e.children)for(const t of e.children.values()){const e=this.walkFileTree(t,{level:n.level});r.push(e)}}else for(const e of t){const t=this.fileToTreeModel(e,{level:n.level,branch:!1},!0);r.push(t)}return this.sortChildren(r),r}walkFileTree(e,t={level:1}){let i;if(void 0===t.level&&(t.level=1),i=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){const o=[];for(const i of e.children.values()){const e=this.walkFileTree(i,{...t,level:t.level+1});o.push(e)}o.length>0&&(this.sortChildren(o),i.branch=!0,i.children=o)}return i}getStagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Staged Changes",action:"staged-create-patch"}]:[]}getUnstagedActions(e){return"wip"===this.tab?[{icon:"gl-cloud-patch-share",label:"Share Unstaged Changes",action:"unstaged-create-patch"}]:[]}getFileActions(e,t){return[]}fileToTreeModel(e,t,i=!1,o="/"){const n=e.path.lastIndexOf(o),r=-1!==n?e.path.substring(n+1):e.path,a=i&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:{type:"status",name:e.status},label:r,description:!0===i?a:void 0,context:[e],actions:this.getFileActions(e,t),...t}}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}renderTreeFileModel(e){return Ot`<gl-tree-generator
			.model=${e}
			.guides=${this.indentGuides}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"staged-create-patch":this.onCreatePatch(e);break;case"unstaged-create-patch":this.onCreatePatch(e,!0);break;case"file-open":this.onOpenFile(e);break;case"file-unstage":this.onUnstageFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-compare-working":this.onCompareWorking(e);break;case"file-open-on-remote":this.onOpenFileOnRemote(e);break;case"file-more-actions":this.onMoreActions(e)}}onTreeItemSelected(e){e.detail.context&&this.onComparePrevious(e)}onCreatePatch(e,t=!1){const i=new CustomEvent("create-patch",{detail:{checked:!!t||"staged"}});this.dispatchEvent(i)}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context,i=new CustomEvent("file-open",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ir:void 0})});this.dispatchEvent(i)}onOpenFileOnRemote(e){if(!e.detail.context)return;const[t]=e.detail.context,i=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ir:void 0})});this.dispatchEvent(i)}onCompareWorking(e){if(!e.detail.context)return;const[t]=e.detail.context,i=new CustomEvent("file-compare-working",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ir:void 0})});this.dispatchEvent(i)}onComparePrevious(e){if(!e.detail.context)return;const[t]=e.detail.context,i=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ir:void 0})});this.dispatchEvent(i)}onMoreActions(e){if(!e.detail.context)return;const[t]=e.detail.context,i=new CustomEvent("file-more-actions",{detail:this.getEventDetail(t)});this.dispatchEvent(i)}onStageFile(e){if(!e.detail.context)return;const[t]=e.detail.context,i=new CustomEvent("file-stage",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ir:void 0})});this.dispatchEvent(i)}onUnstageFile(e){if(!e.detail.context)return;const[t]=e.detail.context,i=new CustomEvent("file-unstage",{detail:this.getEventDetail(t,{preview:!1,viewColumn:e.detail.altKey?ir:void 0})});this.dispatchEvent(i)}getEventDetail(e,t){return{path:e.path,repoPath:e.repoPath,status:e.status,staged:e.staged,showOptions:t}}}tr([Vt({type:Array})],GlDetailsBase.prototype,"files",2),tr([Vt({type:Boolean})],GlDetailsBase.prototype,"isUncommitted",2),tr([Vt({type:Object})],GlDetailsBase.prototype,"preferences",2),tr([Vt({attribute:"empty-text"})],GlDetailsBase.prototype,"emptyText",2);var or=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,sr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?nr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&or(t,i,r),r};let rr=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?Ot`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?Ot`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?Ot`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:Ot`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};rr.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},rr.styles=[us,Me`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
			}

			.control {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);

				color: inherit;
				text-decoration: none;

				width: max-content;
				height: 100%;
				cursor: pointer;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-block;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${ps}
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			gl-tooltip {
				height: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],sr([Kt(".control")],rr.prototype,"control",2),sr([Vt()],rr.prototype,"appearance",2),sr([Vt({type:Boolean,reflect:!0})],rr.prototype,"disabled",2),sr([Vt({reflect:!0})],rr.prototype,"density",2),sr([Vt({type:Boolean,reflect:!0})],rr.prototype,"full",2),sr([Vt()],rr.prototype,"href",2),sr([Vt({reflect:!0})],rr.prototype,"role",1),sr([Vt()],rr.prototype,"tooltip",2),rr=sr([Ft("gl-button")],rr);var ar=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,cr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?lr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ar(t,i,r),r};let dr=class extends lit_element_s{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return Ot`<div class="skeleton" style=${e}></div>`}};dr.styles=Me`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,cr([Vt({type:Number})],dr.prototype,"lines",2),dr=cr([Ft("skeleton-loader")],dr);const hr=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))}),pr=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,ur=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,gr=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let mr;const fr=new Map;let br,vr,yr;function wr(e,t,i,o=!0){const n=`${i??""}:${t=t??void 0}`;let r=fr.get(n);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=ur.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:i}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:i||void 0}}const i={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(pr))if(null!=t)for(const[e,o]of Object.entries(t))if(null!=o)switch(e){case"year":i.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric"}break;case"day":i.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow"}break;case"hour":i.hour=2===o.length?"2-digit":"numeric",i.hour12="hh"===o||"h"===o;break;case"minute":i.minute=2===o.length?"2-digit":"numeric";break;case"second":i.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=2===o.length?"long":"short"}return i}(t);let a;a=null==i?br:"system"===i?void 0:[i],r=new Intl.DateTimeFormat(a,e),o&&fr.set(n,r)}if(null==t||ur.test(t))return r.format(e);function a(e){const t=`${i??""}:time:${e}`;let n=fr.get(t);if(null==n){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==i?br:"system"===i?void 0:[i],n=new Intl.DateTimeFormat(a,r),o&&fr.set(t,n)}return n}const l=r.formatToParts(e);return t.replace(pr,((t,i,o,n,r,c,d,h,p,u,g,m,f,b,v)=>{if(null!=i)return i.substring(1,i.length-1);for(const[t,i]of Object.entries(v)){if(null==i)continue;const o=l.find((e=>e.type===t));if("Do"===i&&"day"===o?.type)return $r(Number(o.value));if("a"===i&&"dayPeriod"===o?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??o)?.value??""}`}return o?.value??""}return""}))}const xr=["th","st","nd","rd"];function $r(e){const t=e%100;return`${e}${xr[(t-20)%10]??xr[t]??xr[0]}`}var kr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,Cr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?_r(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&kr(t,i,r),r};let Sr=class extends lit_element_s{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date}render(){const e=wr(this.date,this.format??"MMMM Do, YYYY h:mma");return Ot`<gl-tooltip content="${e}"
			><time datetime="${this.date.toISOString()}"
				>${"relative"===this.dateStyle?function(e,t){const i=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,o,n,r]of gr){const a=Math.abs(i);if(a>=o||1e3===o)return t?(null==mr&&(null!=yr?mr=yr.resolvedOptions().locale:null!=vr?mr=vr.resolvedOptions().locale:(yr=new Intl.RelativeTimeFormat(br,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),mr=yr.resolvedOptions().locale)),"en"===mr||mr?.startsWith("en-")?`${Math.round(a/n)}${r}`:(null==yr&&(yr=new Intl.RelativeTimeFormat(br,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),yr.format(Math.round(i/n),e))):(null==vr&&(vr=new Intl.RelativeTimeFormat(br,{localeMatcher:"best fit",numeric:"auto",style:"long"})),vr.format(Math.round(i/n),e))}return""}(this.date):e}</time
			></gl-tooltip
		>`}};Cr([Vt()],Sr.prototype,"format",2),Cr([Vt({attribute:"date-style"})],Sr.prototype,"dateStyle",2),Cr([Vt({converter:hr(),reflect:!0})],Sr.prototype,"date",2),Sr=Cr([Ft("formatted-date")],Sr);var Ar=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Pr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Er(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ar(t,i,r),r};let Rr=class extends lit_element_s{constructor(){super(...arguments),this.name="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.dateStyle="relative",this.committer=!1}renderAvatar(){return this.showAvatar&&this.avatarUrl?.length?Ot`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:Ot`<code-icon icon="person" size="18"></code-icon>`}render(){return Ot`
			<gl-tooltip>
				${Jt(null!=this.url,(()=>Ot`<a class="author" href="${this.url}"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></a
						>`),(()=>Ot`<span class="author"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></span
						>`))}
				<div class="author-hover" slot="content">
					${this.avatarUrl?.length?Ot`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:Dt}
					<span>${this.name}</span>
				</div>
			</gl-tooltip>
			<span class="date">
				${this.actionLabel}
				<formatted-date
					.date=${this.date}
					.format=${this.dateFormat}
					.dateStyle=${this.dateStyle}
				></formatted-date>
			</span>
		`}};Rr.styles=Me`
		:host,
		.author {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0 0.6rem;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.author-hover {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.6rem;
			margin: 0.6rem 0.2rem 0.2rem 0.2rem;
		}

		.author-hover img {
			max-width: 64px;
		}

		.avatar {
			width: 1.8rem;
		}

		.thumb {
			width: 100%;
			height: auto;
			vertical-align: middle;
			border-radius: 0.4rem;
		}

		.name {
			flex: 1;
			font-size: 1.3rem;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.date {
			flex: none;
			margin-inline-start: auto;
			font-size: 1.3rem;
			color: var(--color-foreground--50);
		}
	`,Pr([Vt()],Rr.prototype,"name",2),Pr([Vt()],Rr.prototype,"url",2),Pr([Vt({converter:hr(),reflect:!0})],Rr.prototype,"date",2),Pr([Vt()],Rr.prototype,"avatarUrl",2),Pr([Vt({type:Boolean,attribute:"show-avatar",reflect:!0})],Rr.prototype,"showAvatar",2),Pr([Vt()],Rr.prototype,"dateFormat",2),Pr([Vt()],Rr.prototype,"dateStyle",2),Pr([Vt({type:Boolean})],Rr.prototype,"committer",2),Pr([Vt()],Rr.prototype,"actionLabel",2),Rr=Pr([Ft("commit-identity")],Rr);var Or=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Dr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Tr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Or(t,i,r),r};let Mr=class extends lit_element_s{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return Ot`
			${Jt(null!=this.added,(()=>Ot`<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
						><span class="label">+${this.added}</span></span
					>`))}
			${Jt(null!=this.modified,(()=>Ot`<span
						class="stat modified"
						title="${this.modified} modified"
						aria-label="${this.modified} modified"
						><span class="label">~${this.modified}</span></span
					>`))}
			${Jt(null!=this.removed,(()=>Ot`<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
						><span class="label">-${this.removed}</span></span
					>`))}
		`}};Mr.styles=Me`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.stat code-icon {
			margin-right: 0.25rem;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.deleted {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
		}
	`,Dr([Vt({type:Number})],Mr.prototype,"added",2),Dr([Vt({type:Number})],Mr.prototype,"modified",2),Dr([Vt({type:Number})],Mr.prototype,"removed",2),Mr=Dr([Ft("commit-stats")],Mr);Ln.define("sl-popup");var Lr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,Br=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Ir(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Lr(t,i,r),r};let zr=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{e.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=I(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus())return;const i=I(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),i)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,B(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,B(this,"gl-popover-after-hide")}render(){return Ot`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			arrow
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}};zr.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},zr.styles=Me`
		:host {
			--hide-delay: 0ms;
			--show-delay: 500ms;

			display: contents;
		}

		.popover {
			--arrow-size: var(--sl-tooltip-arrow-size);
			--arrow-color: var(--sl-tooltip-background-color);
		}

		.popover::part(popup) {
			z-index: var(--sl-z-index-tooltip);
		}

		.popover::part(arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		.popover[placement^='top']::part(popup) {
			transform-origin: bottom;
		}

		.popover[placement^='bottom']::part(popup) {
			transform-origin: top;
		}

		.popover[placement^='left']::part(popup) {
			transform-origin: right;
		}

		.popover[placement^='right']::part(popup) {
			transform-origin: left;
		}

		.popover[data-current-placement^='top']::part(arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		.popover[data-current-placement^='bottom']::part(arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		.popover[data-current-placement^='left']::part(arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		.popover[data-current-placement^='right']::part(arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		.popover__body {
			display: block;
			width: fit-content;
			border: 1px solid var(--gl-tooltip-border-color);
			border-radius: var(--sl-tooltip-border-radius);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
			background-color: var(--sl-tooltip-background-color);
			font-family: var(--sl-tooltip-font-family);
			font-size: var(--sl-tooltip-font-size);
			font-weight: var(--sl-tooltip-font-weight);
			line-height: var(--sl-tooltip-line-height);
			text-align: start;
			white-space: normal;
			color: var(--sl-tooltip-color);
			padding: var(--sl-tooltip-padding);
			user-select: none;
			-webkit-user-select: none;
			max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
			/* max-height: var(--auto-size-available-height);
			overflow: auto; */
			pointer-events: all;
		}

		.popover[data-current-placement^='top'] .popover__body,
		.popover[data-current-placement^='bottom'] .popover__body {
			width: max-content;
		}

		/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
	`,Br([Kt("#popover")],zr.prototype,"body",2),Br([Kt("sl-popup")],zr.prototype,"popup",2),Br([Vt({reflect:!0})],zr.prototype,"placement",2),Br([Vt({type:Object})],zr.prototype,"anchor",2),Br([Vt({reflect:!0,type:Boolean})],zr.prototype,"disabled",2),Br([Vt({type:Number})],zr.prototype,"distance",2),Br([Vt({reflect:!0,type:Boolean})],zr.prototype,"open",2),Br([Vt({type:Number})],zr.prototype,"skidding",2),Br([Vt()],zr.prototype,"trigger",2),Br([Vt({type:Boolean})],zr.prototype,"hoist",2),Br([Ts("open",{afterFirstUpdate:!0})],zr.prototype,"handleOpenChange",1),Br([Ts(["distance","hoist","placement","skidding"])],zr.prototype,"handleOptionsChange",1),Br([Ts("disabled")],zr.prototype,"handleDisabledChange",1),zr=Br([Ft("gl-popover")],zr);var jr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,Ur=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Nr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&jr(t,i,r),r};let Fr=class extends GlElement{constructor(){super(...arguments),this.url="",this.name="",this.status="merged",this.type="autolink",this.identifier="",this.details=!1}renderDate(){return this.date?Ot`<formatted-date
			.date=${new Date(this.date)}
			.format=${this.dateFormat}
			.dateStyle=${this.dateStyle}
		></formatted-date>`:Dt}render(){let e,t;switch(this.type){case"issue":t="closed"===this.status?"merged":"opened",e="closed"===this.status?"pass":"issues";break;case"pr":switch(t=this.status,this.status){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed";break;default:e="git-pull-request"}break;default:t="opened",e="link"}return this.compact?Ot`
				<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
				<p class="title">${this.identifier}</p>
			`:Ot`
			<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.identifier} ${this.status?this.status:Dt} ${this.renderDate()}</p>
			${Jt(!0===this.details,(()=>Ot`
					<p class="details">
						<gl-button appearance="toolbar" tooltip="Open Details" @click=${()=>this.onDetailsClicked()}
							><code-icon icon="eye"></code-icon
						></gl-button>
					</p>
				`))}
		`}onDetailsClicked(){this.emit("gl-issue-pull-request-details")}};Fr.styles=Me`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
			font-size: 1.3rem;
			grid-template-columns: min-content 1fr min-content;
		}

		:host([compact]) {
			grid-template-columns: min-content 1fr;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			text-align: center;
			padding-top: 0.1rem;
		}

		.icon--opened {
			color: var(--vscode-gitlens-openPullRequestIconColor);
		}
		.icon--closed {
			color: var(--vscode-gitlens-closedPullRequestIconColor);
		}
		.icon--merged {
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
		}

		.details {
			grid-column: 3;
			grid-row: 1 / 3;
			margin: 0;
		}
	`,Ur([Vt()],Fr.prototype,"url",2),Ur([Vt()],Fr.prototype,"name",2),Ur([Vt()],Fr.prototype,"date",2),Ur([Vt()],Fr.prototype,"dateFormat",2),Ur([Vt()],Fr.prototype,"dateStyle",2),Ur([Vt()],Fr.prototype,"status",2),Ur([Vt()],Fr.prototype,"type",2),Ur([Vt()],Fr.prototype,"identifier",2),Ur([Vt({type:Boolean,reflect:!0})],Fr.prototype,"compact",2),Ur([Vt({type:Boolean})],Fr.prototype,"details",2),Fr=Ur([Ft("issue-pull-request")],Fr);var Hr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Vr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?qr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Hr(t,i,r),r};let Wr=class extends GlDetailsBase{constructor(){super(...arguments),this.tab="commit",this.explainBusy=!1}get isStash(){return null!=this.state?.commit?.stashNumber}get shortSha(){return this.state?.commit?.shortSha??""}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView())}renderEmptyContent(){return Ot`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, show your work-in-progress, or search for or choose a commit</p>

				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="wip">Overview</gl-button>
					</span>
				</p>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full data-action="pick-commit">Choose Commit...</gl-button>
						<gl-button density="compact" data-action="search-commit" tooltip="Search for Commit"
							><code-icon icon="search"></code-icon
						></gl-button>
					</span>
				</p>
			</div>
		`}renderCommitMessage(){const e=this.state?.commit;if(null==e)return;const t=e.message,i=t.indexOf("\0\n\0");return Ot`
			<div class="section section--message">
				${Jt(!this.isStash,(()=>Ot`
						<commit-identity
							class="mb-1"
							name="${e.author.name}"
							url="${e.author.email?`mailto:${e.author.email}`:void 0}"
							date=${e.author.date}
							.dateFormat="${this.preferences?.dateFormat}"
							.avatarUrl="${e.author.avatar??""}"
							.showAvatar="${this.preferences?.avatars??!0}"
							.actionLabel="${e.sha===Pa?"modified":"committed"}"
						></commit-identity>
					`))}
				<div class="message-block">
					${Jt(-1===i,(()=>Ot`<p class="message-block__text scrollable" data-region="message">
								<strong>${cs(t)}</strong>
							</p>`),(()=>Ot`<p class="message-block__text scrollable" data-region="message">
								<strong>${cs(t.substring(0,i))}</strong><br /><span
									>${cs(t.substring(i+3))}</span
								>
							</p>`))}
				</div>
			</div>
		`}renderJiraLink(){if(null==this.state)return"Jira issues";const{hasAccount:e,hasConnectedJira:t}=this.state;let i=Ot`<a
				href="command:gitlens.plus.cloudIntegrations.manage?${encodeURIComponent(JSON.stringify({integrationId:"jira",source:"inspect",detail:{action:"connect",integration:"jira"}}))}"
				>Connect to Jira Cloud</a
			>
			&mdash; ${e?"":"sign up and "}get access to automatic rich Jira autolinks`;return e&&t&&(i=Ot`<i class="codicon codicon-check" style="vertical-align: text-bottom"></i> Jira connected
				&mdash; automatic rich Jira autolinks are enabled`),Ot`<gl-popover hoist class="inline-popover">
			<span class="tooltip-hint" slot="anchor"
				>Jira issues <code-icon icon="${t?"check":"gl-unplug"}"></code-icon
			></span>
			<span slot="content">${i}</span>
		</gl-popover>`}renderAutoLinks(){if(this.isUncommitted)return;const e=new Map;if(null!=this.state?.commit?.autolinks)for(const t of this.state.commit.autolinks)e.set(t.id,{type:"autolink",value:t});if(null!=this.state?.autolinkedIssues)for(const t of this.state.autolinkedIssues)e.set(t.id,{type:"issue",value:t});null!=this.state?.pullRequest&&e.set(this.state.pullRequest.id,{type:"pr",value:this.state.pullRequest});const t=[],i=[],o=[];for(const n of e.values())switch(n.type){case"autolink":t.push(n.value);break;case"issue":i.push(n.value);break;case"pr":o.push(n.value)}const{hasAccount:n,hasConnectedJira:r}=this.state??{},a=`command:gitlens.plus.cloudIntegrations.manage?${encodeURIComponent(JSON.stringify({integrationId:"jira",source:"inspect",detail:{action:"connect",integration:"jira"}}))}`;return Ot`
			<webview-pane
				collapsable
				?expanded=${this.state?.preferences?.autolinksExpanded??!0}
				?loading=${!this.state?.includeRichContent}
				data-region="rich-pane"
			>
				<span slot="title">Autolinks</span>
				<span slot="subtitle" data-region="autolink-count"
					>${this.state?.includeRichContent||e.size?`${e.size} found `:""}${this.state?.includeRichContent?"":"…"}</span
				>
				<action-nav slot="actions">
					<action-item
						label="${n&&r?"Manage Jira":"Connect to Jira Cloud"}"
						icon="gl-provider-jira"
						href="${a}"
					></action-item>
					<action-item
						data-action="autolinks-settings"
						label="Autolinks Settings"
						icon="gear"
						href="command:gitlens.showSettingsPage!autolinks"
					></action-item>
				</action-nav>
				${Jt(null==this.state,(()=>Ot`
						<div class="section" data-region="autolinks">
							<section class="auto-link" aria-label="Custom Autolinks" data-region="custom-autolinks">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="pull-request" aria-label="Pull request" data-region="pull-request">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="issue" aria-label="Issue" data-region="issue">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
						</div>
					`),(()=>0===e.size?Ot`
								<div class="section" data-region="rich-info">
									<p>
										<code-icon icon="info"></code-icon>&nbsp;Use
										<gl-tooltip hoist>
											<a
												href="command:gitlens.showSettingsPage!autolinks"
												data-action="autolink-settings"
												>autolinks</a
											>
											<span slot="content">Configure autolinks</span>
										</gl-tooltip>
										to linkify external references, like ${this.renderJiraLink()} or Zendesk
										tickets, in commit messages.
									</p>
								</div>
							`:Ot`
							<div class="section" data-region="autolinks">
								${t.length?Ot`
											<section
												class="auto-link"
												aria-label="Custom Autolinks"
												data-region="custom-autolinks"
											>
												${t.map((e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),Ot`
														<issue-pull-request
															type="autolink"
															name="${t}"
															url="${e.url}"
															identifier="${e.prefix}${e.id}"
															status=""
														></issue-pull-request>
													`}))}
											</section>
									  `:void 0}
								${o.length?Ot`
											<section
												class="pull-request"
												aria-label="Pull request"
												data-region="pull-request"
											>
												${o.map((e=>Ot`
														<issue-pull-request
																type="pr"
																name="${e.title}"
																url="${e.url}"
																identifier="#${e.id}"
																status="${e.state}"
																.date=${e.updatedDate}
																.dateFormat="${this.state.preferences.dateFormat}"
																.dateStyle="${this.state.preferences.dateStyle}"
															></issue-pull-request>
														</section>
									  				`))}
											</section>
									  `:void 0}
								${i.length?Ot`
											<section class="issue" aria-label="Issue" data-region="issue">
												${i.map((e=>Ot`
														<issue-pull-request
															type="issue"
															name="${e.title}"
															url="${e.url}"
															identifier="${e.id}"
															status="${e.state}"
															.date=${e.closed?e.closedDate:e.createdDate}
															.dateFormat="${this.state.preferences.dateFormat}"
															.dateStyle="${this.state.preferences.dateStyle}"
														></issue-pull-request>
													`))}
											</section>
									  `:void 0}
							</div>
						`))}
			</webview-pane>
		`}renderExplainAi(){if(!1!==this.state?.orgSettings.ai)return Ot`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this commit.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<gl-button
								full
								class="button--busy"
								data-action="explain-commit"
								aria-busy="${this.explainBusy?"true":Dt}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
								><code-icon icon="loading" modifier="spin" slot="prefix"></code-icon>Explain
								Changes</gl-button
							>
						</span>
					</p>
					${Jt(this.explain,(()=>Ot`
							<div
								class="ai-content${this.explain?.error?" has-error":""}"
								data-region="commit-explanation"
							>
								${Jt(this.explain?.error,(()=>Ot`<p class="ai-content__summary scrollable">
											${this.explain.error.message??"Error retrieving content"}
										</p>`))}
								${Jt(this.explain?.summary,(()=>Ot`<p class="ai-content__summary scrollable">${this.explain.summary}</p>`))}
							</div>
						`))}
				</div>
			</webview-pane>
		`}render(){return null==this.state?.commit?this.renderEmptyContent():Ot`
			${this.renderCommitMessage()}
			<webview-pane-group flexible>
				${this.renderAutoLinks()}
				${this.renderChangedFiles(this.isStash?"stash":"commit",this.renderCommitStats(this.state.commit.stats))}
				${this.renderExplainAi()}
			</webview-pane-group>
		`}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key)return e.preventDefault(),void e.stopPropagation();this.explainBusy=!0}renderCommitStats(e){if(null==e?.changedFiles)return;if("number"==typeof e.changedFiles)return Ot`<commit-stats added="?" modified="${e.changedFiles}" removed="?"></commit-stats>`;const{added:t,deleted:i,changed:o}=e.changedFiles;return Ot`<commit-stats added="${t}" modified="${o}" removed="${i}"></commit-stats>`}getFileActions(e,t){const i=[{icon:"go-to-file",label:"Open file",action:"file-open"}];return this.isUncommitted||(i.push({icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}),this.isStash||i.push({icon:"globe",label:"Open on remote",action:"file-open-on-remote"},{icon:"ellipsis",label:"Show more actions",action:"file-more-actions"})),i}};Vr([Vt({type:Object})],Wr.prototype,"state",2),Vr([Wt()],Wr.prototype,"isStash",1),Vr([Wt()],Wr.prototype,"shortSha",1),Vr([Wt()],Wr.prototype,"explainBusy",2),Vr([Vt({type:Object})],Wr.prototype,"explain",2),Wr=Vr([Ft("gl-commit-details")],Wr);const{I:Gr}=jt,Kr=()=>document.createComment(""),Yr=(e,t,i)=>{const o=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(Kr(),n),r=o.insertBefore(Kr(),n);i=new Gr(t,r,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,a=r!==e;if(a){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==n||a){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,n),e=t}}}return i},Jr=(e,t,i=e)=>(e._$AI(t,i),e),Zr={},Xr=e=>{e._$AP?.(!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const e=t.nextSibling;t.remove(),t=e}},Qr=(e,t,i)=>{const o=new Map;for(let n=t;n<=i;n++)o.set(e[n],n);return o},ea=Rn(class extends directive_i{constructor(e){if(super(e),e.type!==Pn)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);const n=[],r=[];let a=0;for(const t of e)n[a]=o?o(t,a):a,r[a]=i(t,a),a++;return{values:r,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,o]){const n=(e=>e._$AH)(e),{values:r,keys:a}=this.dt(t,i,o);if(!Array.isArray(n))return this.ut=a,r;const l=this.ut??=[],c=[];let d,h,p=0,u=n.length-1,g=0,m=r.length-1;for(;p<=u&&g<=m;)if(null===n[p])p++;else if(null===n[u])u--;else if(l[p]===a[g])c[g]=Jr(n[p],r[g]),p++,g++;else if(l[u]===a[m])c[m]=Jr(n[u],r[m]),u--,m--;else if(l[p]===a[m])c[m]=Jr(n[p],r[m]),Yr(e,c[m+1],n[p]),p++,m--;else if(l[u]===a[g])c[g]=Jr(n[u],r[g]),Yr(e,n[p],n[u]),u--,g++;else if(void 0===d&&(d=Qr(a,g,m),h=Qr(l,p,u)),d.has(l[p]))if(d.has(l[u])){const t=h.get(a[g]),i=void 0!==t?n[t]:null;if(null===i){const t=Yr(e,n[p]);Jr(t,r[g]),c[g]=t}else c[g]=Jr(i,r[g]),Yr(e,n[p],i),n[t]=null;g++}else Xr(n[u]),u--;else Xr(n[p]),p++;for(;g<=m;){const t=Yr(e,c[m+1]);Jr(t,r[g]),c[g++]=t}for(;p<=u;){const e=n[p++];null!==e&&Xr(e)}return this.ut=a,((e,t=Zr)=>{e._$AH=t})(e,c),Tt}});var ta=Object.defineProperty,ia=Object.getOwnPropertyDescriptor;let oa=class extends lit_element_s{render(){return Ot`<slot></slot>`}};oa.styles=Me`
		:host {
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
		}

		::slotted(webview-pane) {
			flex: none;
		}

		:host([flexible]) ::slotted(webview-pane[flexible][expanded]) {
			flex: 1;
		}
	`,oa=((e,t,i,o)=>{for(var n,r=o>1?void 0:o?ia(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ta(t,i,r),r})([Ft("webview-pane-group")],oa);const na=Me`
	.button-container {
		margin: 1rem auto 0;
		text-align: left;
		max-width: 30rem;
		transition: max-width 0.2s ease-out;
	}

	@media (min-width: 640px) {
		.button-container {
			max-width: 100%;
		}
	}

	.button-group {
		display: inline-flex;
		gap: 0.1rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}

	.button-group > *:not(:first-child),
	.button-group > *:not(:first-child) gl-button {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.button-group > *:not(:last-child),
	.button-group > *:not(:last-child) gl-button {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;class GlTreeBase extends GlElement{renderLoading(){return Ot`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return Dt;let t="tree",i="list-tree",o="View as Tree";switch(e){case"auto":t="list",i="gl-list-auto",o="View as List";break;case"list":t="tree",i="list-flat",o="View as Tree";break;case"tree":t="auto",i="list-tree",o="View as Auto"}return Ot`<action-item data-switch-value="${t}" label="${o}" icon="${i}"></action-item>`}renderTreeView(e,t="none"){return Ot`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,i=!1,o=2){const n=[];if(t){const t=ds(e,(e=>e.path.split("/")),((...e)=>e.join("/")),i);if(null!=t.children)for(const e of t.children.values()){const t=this.walkFileTree(e,{level:o});n.push(t)}}else for(const t of e){const e=this.fileToTreeModel(t,{level:o,branch:!1},!0);n.push(e)}return n}walkFileTree(e,t={level:1}){let i;if(void 0===t.level&&(t.level=1),i=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){const o=[];for(const i of e.children.values()){const e=this.walkFileTree(i,{...t,level:t.level+1});o.push(e)}o.length>0&&(i.branch=!0,i.children=o)}return i}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}getRepoActions(e,t,i){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,i,o){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"repo",label:e,description:o,context:[t],actions:this.getRepoActions(e,t,i),...i}}getFileActions(e,t){return[]}fileToTreeModel(e,t,i=!1,o="/"){const n=e.path.lastIndexOf(o),r=-1!==n?e.path.substring(n+1):e.path,a=i&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:r,description:!0===i?a:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}}var sa=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,aa=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?ra(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&sa(t,i,r),r};let la=class extends GlTreeBase{constructor(){super(),this.review=!1,this.generateBusy=!1,this.onDebouncedCreateAll=i(this.onCreateAll,250),this.onDebounceTitleInput=i(this.onTitleInput,500),this.onDebounceDescriptionInput=i(this.onDescriptionInput,500),Ee(ye,ke,_e,Ce,Ae)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some((e=>"wip"===e?.type))}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter((([,e])=>!1!==e.checked))}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return function(e,t){if(null==e)return 0;let i=0;for(const o of e)i+=t(o);return i}(this.createChanges,(e=>e.files?.length??0))}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(e){e.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame((()=>{this.titleInput.focus()}))}renderUserSelection(e){const t=e.pendingRole,i=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),o=i.get(t);return Ot`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member.name??e.member.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					<gk-popover>
						<gk-button slot="trigger">${o} <code-icon icon="chevron-down"></code-icon></gk-button>
						<gk-menu>
							${function*(e,t){if(void 0!==e){let i=0;for(const o of e)yield t(o,i++)}}(i,(([i,o])=>Ot`<gk-menu-item
										@click=${t=>this.onChangeSelectionRole(t,e,i)}
									>
										<code-icon
											icon="check"
											class="user-selection__check ${t===i?"is-active":""}"
										></code-icon>
										${o}
									</gk-menu-item>`))}
						</gk-menu>
					</gk-popover>
				</div>
			</div>
		`}renderUserSelectionList(){if(null!=this.state?.create?.userSelections&&0!==this.state?.create?.userSelections.length)return Ot`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${ea(this.state.create.userSelections,(e=>e.member.id),(e=>this.renderUserSelection(e)))}
				</div>
			</div>
		`}renderForm(){let e;switch(this.draftVisibility){case"private":e="organization";break;case"invite_only":e="lock";break;default:e="globe"}const t=this.review?"Code Suggestion":"Cloud Patch",i=this.review?"Code Suggestions":"Cloud Patches";return Ot`
			<div class="section section--action">
				${Jt(null!=this.state?.create?.creationError,(()=>Ot` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`))}
				${Jt(!1===this.review,(()=>Ot`
						<div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${e}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===this.draftVisibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===this.draftVisibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===this.draftVisibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>
						${this.renderUserSelectionList()}
					`))}
				<div class="message-input message-input--with-menu">
					<input
						id="title"
						type="text"
						class="message-input__control"
						placeholder="Title (required)"
						maxlength="100"
						.value=${this.create.title??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceTitleInput(e)}
					/>
					${Jt(!0===this.state?.orgSettings.ai,(()=>Ot`<div class="message-input__menu">
								<gl-button
									id="generate-ai"
									appearance="toolbar"
									density="compact"
									tooltip="Generate Title and Description..."
									@click=${e=>this.onGenerateTitleClick(e)}
									?disabled=${this.generateBusy}
									><code-icon
										icon=${this.generateBusy?"loading":"sparkle"}
										modifier="${this.generateBusy?"spin":""}"
									></code-icon
								></gl-button>
							</div>`))}
				</div>

				${Jt(null!=this.generate?.error,(()=>Ot`
						<div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.generate.error.message??"Error retrieving content"}</p>
						</div>
					`))}
				<div class="message-input">
					<textarea
						id="desc"
						class="message-input__control"
						placeholder="Description (optional)"
						maxlength="10000"
						.value=${this.create.description??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceDescriptionInput(e)}
					></textarea>
				</div>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full @click=${e=>this.onDebouncedCreateAll(e)}
							>Create ${t}</gl-button
						>
					</span>
				</p>
				${Jt(!0===this.review,(()=>Ot`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`))}
				${Jt(!1===this.state?.orgSettings.byob,(()=>Ot`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${w.cloudPatches}"
								title="Learn more about ${i}"
								aria-label="Learn more about ${i}"
								>${i}</a
							>
							are
							<a
								href="https://help.gitkraken.com/gitlens/security"
								title="Learn more about GitKraken security"
								aria-label="Learn more about GitKraken security"
								>securely stored</a
							>
							by GitKraken.
						</p>`),(()=>Ot`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${w.cloudPatches}"
								title="Learn more about ${i}"
								aria-label="Learn more about ${i}"
								>${t}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`))}
			</div>
		`}render(){return Ot`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return Ot`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${Jt(null!=this.validityMessage,(()=>Ot`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`))}
				<div class="change-list" data-region="files">
					${Jt(null==this.create.changes,(()=>this.renderLoading()),(()=>this.renderTreeViewWithModel()))}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;const[t,i]=e.detail.context;let o=e.detail.checked;"unstaged"===i&&(o=!!e.detail.checked||"staged");const n=this.getChangeForRepo(t);null!=n&&n.checked!==o&&(n.checked=o,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:t,checked:o}))}onTreeItemSelected(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);const e=[],t=this.createChanges.length>1,i=this.isTree(this.filesModified??0),o=this.isCompact;if(t)for(const t of this.createChanges){const n=this.getTreeForChange(t,!0,i,o);null!=n&&e.push(...n)}else{const t=this.createChanges[0],n=this.getTreeForChange(t,!1,i,o);null!=n&&e.push(...n)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,i=!1,o=!0){if(null==e.files||0===e.files.length)return;const n=[];if("wip"===e.type){const r=[],a=[];for(const t of e.files)t.staged?r.push(t):a.push(t);0===r.length||0===a.length?n.push(...this.renderFiles(e.files,i,o,t?2:1)):(a.length&&n.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(a,i,o,t?3:2)}),r.length&&n.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(r,i,o,t?3:2)}))}else n.push(...this.renderFiles(e.files,i,o));if(!t)return n;const r=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return r.children=n,[r]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit)return 0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),void(null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0);this.validityMessage=void 0,this.titleInput.setCustomValidity("");const e=this.selectedChanges.reduce(((e,[t,i])=>(e[t]=i,e)),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch()}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(e){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(e){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(e,t,i){this.emit("gl-patch-create-update-selection",{selection:t,role:i});const o=e.target?.closest("gk-popover");o?.hidePopover()}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(e){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-unstage":this.onUnstageFile(e)}}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!1,viewColumn:e.detail.altKey?-2:void 0}})}onStageFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-stage",{...t,showOptions:{preview:!1,viewColumn:e.detail.altKey?-2:void 0}})}onUnstageFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-unstage",{...t,showOptions:{preview:!1,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(e,t){const i={icon:"go-to-file",label:"Open file",action:"file-open"};return this.review?[i]:!0===e.staged?[i,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[i,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getRepoActions(e,t,i){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};aa([Vt({type:Object})],la.prototype,"state",2),aa([Vt({type:Boolean})],la.prototype,"review",2),aa([Vt({type:Object})],la.prototype,"generate",2),aa([Wt()],la.prototype,"generateBusy",2),aa([Kt("#title")],la.prototype,"titleInput",2),aa([Kt("#desc")],la.prototype,"descInput",2),aa([Kt("#generate-ai")],la.prototype,"generateAiButton",2),aa([Wt()],la.prototype,"validityMessage",2),la=aa([Ft("gl-patch-create")],la);var ca=Object.defineProperty,da=Object.getOwnPropertyDescriptor,ha=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?da(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ca(t,i,r),r};let pa=class extends GlElement{get patchCreateState(){return{preferences:this.preferences,orgSettings:this.orgSettings,create:this.createState}}render(){return Ot`<gl-patch-create
			.state=${this.patchCreateState}
			.generate=${this.generate}
			review
			@gl-patch-file-compare-working=${e=>{}}
			@gl-patch-create-update-metadata=${e=>{}}
		></gl-patch-create>`}};pa.styles=[na,Me`
			:host {
				flex: 1;
			}

			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			a {
				color: var(--vscode-textLink-foreground);
				text-decoration: none;
			}
			a:hover {
				text-decoration: underline;
			}

			gl-patch-create {
				height: 100%;
				display: block;
			}

			.pane-groups {
				display: flex;
				flex-direction: column;
				height: 100%;
			}
			.pane-groups__group {
				min-height: 0;
				flex: 1 1 auto;
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}
			.pane-groups__group webview-pane {
				flex: none;
			}
			.pane-groups__group webview-pane[expanded] {
				min-height: 0;
				flex: 1;
			}

			.pane-groups__group-fixed {
				flex: none;
			}
			.pane-groups__group-fixed webview-pane::part(content) {
				overflow: visible;
			}

			.section {
				padding: 0 var(--gitlens-scrollbar-gutter-width) 1.5rem var(--gitlens-gutter-width);
			}
			.section > :first-child {
				margin-top: 0;
			}
			.section > :last-child {
				margin-bottom: 0;
			}

			.section--action {
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				padding-top: 1.5rem;
				padding-bottom: 1.5rem;
			}
			.section--action > :first-child {
				padding-top: 0;
			}

			/* TODO: these form styles should be moved to a common location */
			.message-input {
				padding-top: 0.8rem;
			}

			.message-input__control {
				flex: 1;
				border: 1px solid var(--vscode-input-border);
				background: var(--vscode-input-background);
				padding: 0.5rem;
				font-size: 1.3rem;
				line-height: 1.4;
				width: 100%;
				border-radius: 0.2rem;
				color: var(--vscode-input-foreground);
				font-family: inherit;
			}

			.message-input__control::placeholder {
				color: var(--vscode-input-placeholderForeground);
			}

			.message-input__control:invalid {
				border-color: var(--vscode-inputValidation-errorBorder);
				background-color: var(--vscode-inputValidation-errorBackground);
			}

			.message-input__control:focus {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.message-input__control:disabled {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			.message-input__control--text {
				overflow: hidden;
				white-space: nowrap;
				opacity: 0.7;
			}

			.message-input__action {
				flex: none;
			}

			.message-input__select {
				flex: 1;
				position: relative;
				display: flex;
				align-items: stretch;
			}
			.message-input__select-icon {
				position: absolute;
				left: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}
			.message-input__select-caret {
				position: absolute;
				right: 0;
				top: 0;
				display: flex;
				width: 2.4rem;
				height: 100%;
				align-items: center;
				justify-content: center;
				pointer-events: none;
				color: var(--vscode-foreground);
			}

			.message-input__select .message-input__control {
				box-sizing: border-box;
				appearance: none;
				padding-left: 2.4rem;
				padding-right: 2.4rem;
			}

			.message-input__menu {
				position: absolute;
				top: 0.8rem;
				right: 0;
			}

			.section--action > :first-child .message-input__menu {
				top: 0;
			}

			.message-input--group {
				display: flex;
				flex-direction: row;
				align-items: stretch;
				gap: 0.6rem;
			}

			.message-input--with-menu {
				position: relative;
			}

			textarea.message-input__control {
				resize: vertical;
				min-height: 4rem;
				max-height: 40rem;
			}

			.user-selection-container {
				max-height: (2.4rem * 4);
				overflow: auto;
			}

			.user-selection {
				--gk-avatar-size: 2rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				height: 2.4rem;
			}
			.user-selection__avatar {
				flex: none;
			}

			.user-selection__info {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
			}

			.user-selection__name {
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.user-selection__actions {
				flex: none;
				color: var(--gk-button-ghost-color);
			}
			.user-selection__actions gk-button::part(base) {
				padding-right: 0;
				padding-block: 0.4rem;
			}

			.user-selection__actions gk-button code-icon {
				pointer-events: none;
			}

			.user-selection__check:not(.is-active) {
				opacity: 0;
			}

			.alert {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0.8rem 1.2rem;
				line-height: 1.2;
				background-color: var(--color-alert-errorBackground);
				border-left: 0.3rem solid var(--color-alert-errorBorder);
				color: var(--color-alert-foreground);
			}

			.alert code-icon {
				margin-right: 0.4rem;
				vertical-align: baseline;
			}

			.alert__content {
				font-size: 1.2rem;
				line-height: 1.2;
				text-align: left;
				margin: 0;
			}
		`],ha([Vt({type:Object})],pa.prototype,"orgSettings",2),ha([Vt({type:Object})],pa.prototype,"preferences",2),ha([Vt({type:Object})],pa.prototype,"generate",2),ha([Vt({type:Object})],pa.prototype,"createState",2),pa=ha([Ft("gl-inspect-patch")],pa);var ua=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,ma=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?ga(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ua(t,i,r),r};let fa=class extends GlDetailsBase{constructor(){super(),this.tab="wip",this.patchCreateMetadata={title:void 0,description:void 0},Ee(ye)}get inReview(){return this.draftState?.inReview??!1}get isUnpublished(){const e=this.wip?.branch;return null==e?.upstream||!0===e.upstream.missing}get draftsEnabled(){return!0===this.orgSettings?.drafts}get filesCount(){return this.files?.length??0}get branchState(){const e=this.wip?.branch;if(null!=e)return{ahead:e.tracking?.ahead??0,behind:e.tracking?.behind??0}}get patchCreateState(){const e=this.wip,t=e.repo.uri,i={type:"wip",repository:{name:e.repo.name,path:e.repo.path,uri:e.repo.uri},files:e.changes?.files??[],checked:!0};return{...this.patchCreateMetadata,changes:{[t]:i},creationError:void 0,visibility:"public",userSelections:void 0}}get codeSuggestions(){return this.wip?.codeSuggestions??[]}updated(e){super.updated(e),e.has("generate")&&(this.patchCreateMetadata={title:this.generate?.title??this.patchCreateMetadata.title,description:this.generate?.description??this.patchCreateMetadata.description})}get filesChangedPaneLabel(){return"Working Changes"}renderSecondaryAction(){if(!this.draftsEnabled||this.inReview)return;let e="Share as Cloud Patch",t="create-patch";const i=this.wip?.pullRequest;return null!=i&&"opened"===i.state?(this.inReview?(e="Close Suggestion for PR",t="end-patch-review"):(e="Suggest Changes for PR",t="start-patch-review"),Ot`<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button
						appearance="secondary"
						full
						data-action="${t}"
						@click=${()=>this.onToggleReviewMode(!this.inReview)}
					>
						<code-icon icon="gl-code-suggestion" slot="prefix"></code-icon>${e}
					</gl-button>
					<gl-button
						appearance="secondary"
						density="compact"
						data-action="create-patch"
						tooltip="Share as Cloud Patch"
						@click=${()=>this.onDataActionClick("create-patch")}
					>
						<code-icon icon="gl-cloud-patch-share"></code-icon>
					</gl-button>
				</span>
			</p>`):Ot`<p class="button-container">
			<span class="button-group button-group--single">
				<gl-button
					appearance="secondary"
					full
					data-action="${t}"
					@click=${()=>this.onDataActionClick(t)}
				>
					<code-icon icon="gl-cloud-patch-share" slot="prefix"></code-icon>${e}
				</gl-button>
			</span>
		</p>`}renderPrimaryAction(){const e=this.draftsEnabled;if(this.isUnpublished&&e)return Ot`<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button
						full
						data-action="publish-branch"
						@click=${()=>this.onDataActionClick("publish-branch")}
					>
						<code-icon icon="cloud-upload" slot="prefix"></code-icon> Publish Branch
					</gl-button>
				</span>
			</p>`;if(!this.isUnpublished&&!e||null==this.branchState)return;const{ahead:t,behind:i}=this.branchState;if(0===t&&0===i)return;const o=i>0?"Pull":t>0?"Push":"Fetch",n=i>0?"gl-repo-pull":t>0?"gl-repo-push":"gl-repo-fetch";return Ot`<p class="button-container">
			<span class="button-group button-group--single">
				<gl-button
					full
					data-action="${o.toLowerCase()}"
					@click=${()=>this.onDataActionClick(o.toLowerCase())}
				>
					<code-icon icon="${n}" slot="prefix"></code-icon> ${o}
					<gl-tracking-pill .ahead=${t} .behind=${i} slot="suffix"></gl-tracking-pill>
				</gl-button>
			</span>
		</p>`}renderActions(){const e=this.renderPrimaryAction(),t=this.renderSecondaryAction();return null==e&&null==t?Dt:Ot`<div class="section section--actions">${e}${t}</div>`}renderSuggestedChanges(){return 0===this.codeSuggestions.length?Dt:Ot`
			<gl-tree>
				<gl-tree-item branch .expanded=${!0} .level=${0}>
					<code-icon slot="icon" icon="gl-code-suggestion"></code-icon>
					Code Suggestions
				</gl-tree-item>
				${ea(this.codeSuggestions,(e=>e.id),(e=>Ot`
						<gl-tree-item
							.expanded=${!0}
							.level=${1}
							@gl-tree-item-selected=${()=>this.onShowCodeSuggestion(e.id)}
						>
							<gk-avatar
								class="author-icon"
								src="${e.author.avatarUri}"
								title="${e.author.name} (author)"
							></gk-avatar>
							${e.title}
							<span slot="description"
								><formatted-date .date=${new Date(e.updatedAt)}></formatted-date
							></span>
						</gl-tree-item>
					`))}
			</gl-tree>
		`}renderPullRequest(){return null==this.wip?.pullRequest?Dt:Ot`
			<webview-pane
				collapsable
				flexible
				?expanded=${this.preferences?.pullRequestExpanded??!0}
				data-region="pullrequest-pane"
			>
				<span slot="title">Pull Request #${this.wip?.pullRequest?.id}</span>
				<action-nav slot="actions">
					<action-item
						label="Open Pull Request Changes"
						icon="gl-diff-multiple"
						@click=${()=>this.onDataActionClick("open-pr-changes")}
					></action-item>
					<action-item
						label="Compare Pull Request"
						icon="compare-changes"
						@click=${()=>this.onDataActionClick("open-pr-compare")}
					></action-item>
					<action-item
						label="Open Pull Request on Remote"
						icon="globe"
						@click=${()=>this.onDataActionClick("open-pr-remote")}
					></action-item>
				</action-nav>
				<div class="section">
					<issue-pull-request
						type="pr"
						name="${this.wip.pullRequest.title}"
						url="${this.wip.pullRequest.url}"
						identifier="#${this.wip.pullRequest.id}"
						status="${this.wip.pullRequest.state}"
						.date=${this.wip.pullRequest.updatedDate}
						.dateFormat="${this.preferences?.dateFormat}"
						.dateStyle="${this.preferences?.dateStyle}"
						details
					></issue-pull-request>
				</div>
				${this.renderSuggestedChanges()}
			</webview-pane>
		`}renderIncomingOutgoing(){return null==this.branchState||0===this.branchState.ahead&&0===this.branchState.behind?Dt:Ot`
			<webview-pane collapsable>
				<span slot="title">Incoming / Outgoing</span>
				<gl-tree>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-down"></code-icon>
						Incoming Changes
						<span slot="decorations">${this.branchState.behind??0}</span>
					</gl-tree-item>
					<gl-tree-item branch .expanded=${!1}>
						<code-icon slot="icon" icon="arrow-circle-up"></code-icon>
						Outgoing Changes
						<span slot="decorations">${this.branchState.ahead??0}</span>
					</gl-tree-item>
				</gl-tree>
			</webview-pane>
		`}renderPatchCreation(){return this.inReview?Ot`<gl-inspect-patch
			.orgSettings=${this.orgSettings}
			.preferences=${this.preferences}
			.generate=${this.generate}
			.createState=${this.patchCreateState}
			@gl-patch-create-patch=${e=>{this.dispatchEvent(new CustomEvent("gl-inspect-create-suggestions",{detail:e.detail}))}}
		></gl-inspect-patch>`:Dt}render(){return null==this.wip?Dt:Ot`
			${this.renderActions()}
			<webview-pane-group flexible>
				${this.renderPullRequest()}
				${Jt(!1===this.inReview,(()=>this.renderChangedFiles("wip")))}${this.renderPatchCreation()}
			</webview-pane-group>
		`}getFileActions(e,t){const i={icon:"go-to-file",label:"Open file",action:"file-open"};return!0===e.staged?[i,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[i,{icon:"plus",label:"Stage changes",action:"file-stage"}]}onDataActionClick(e){this.dispatchEvent(new CustomEvent("data-action",{detail:{name:e}}))}onToggleReviewMode(e){this.dispatchEvent(new CustomEvent("draft-state-changed",{detail:{inReview:e}}))}onShowCodeSuggestion(e){this.dispatchEvent(new CustomEvent("gl-show-code-suggestion",{detail:{id:e}}))}};fa.styles=[Me`
			:host {
				--gk-avatar-size: 1.6rem;
			}
		`],ma([Vt({type:Object})],fa.prototype,"wip",2),ma([Vt({type:Object})],fa.prototype,"orgSettings",2),ma([Vt({type:Object})],fa.prototype,"draftState",2),ma([Vt({type:Object})],fa.prototype,"generate",2),ma([Wt()],fa.prototype,"inReview",1),ma([Wt()],fa.prototype,"patchCreateMetadata",2),fa=ma([Ft("gl-wip-details")],fa);const ba=Me`
	.commit-action {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 21px;
		border-radius: 0.25em;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		gap: 0.2rem;
	}

	.commit-action > * {
		pointer-events: none;
	}

	.commit-action:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.commit-action:hover {
		color: var(--vscode-foreground);
		text-decoration: none;
	}

	:host-context(.vscode-dark) .commit-action:hover {
		background-color: var(--color-background--lighten-15);
	}
	:host-context(.vscode-light) .commit-action:hover {
		background-color: var(--color-background--darken-15);
	}

	:host-context(.vscode-dark) .commit-action.is-active {
		background-color: var(--color-background--lighten-10);
	}
	:host-context(.vscode-light) .commit-action.is-active {
		background-color: var(--color-background--darken-10);
	}

	.commit-action.is-disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	.commit-action.is-hidden {
		display: none;
	}

	.commit-action--emphasis-low:not(:hover, :focus, :active) {
		opacity: 0.5;
	}

	.pr--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var va=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,wa=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?ya(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&va(t,i,r),r};let xa=class extends lit_element_s{constructor(){super(...arguments),this.pinned=!1,this.uncommitted=!1,this.shortSha=""}get navigationState(){if(null==this.navigation)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.navigation.count<=1?(e.back=!1,e.forward=!1):0===this.navigation.position?(e.back=!0,e.forward=!1):this.navigation.position===this.navigation.count-1&&(e.back=!1,e.forward=!0),e}handleAction(e){const t=e.target,i=t.dataset.action;if(null!=i)if("commit-actions"===i){const i=e instanceof MouseEvent&&e.altKey;this.fireEvent("commit-actions",{action:t.dataset.actionType,alt:i})}else this.fireEvent(i)}fireEvent(e,t){this.dispatchEvent(new CustomEvent(`gl-${e}`,{detail:t}))}render(){const e=this.pinned?Ot`Unpin this Commit<br />Restores Automatic Following`:Ot`Pin this Commit<br />Suspends Automatic Following`;let t="Forward",i="Back";return this.navigation?.hint&&(this.pinned?i+=` - ${this.navigation.hint}`:t+=` - ${this.navigation.hint}`),Ot`
			<div class="group">
				${Jt(!this.uncommitted,(()=>Ot`
						<gl-tooltip hoist>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="sha"
								@click=${this.handleAction}
							>
								<code-icon
									icon="${null!=this.stashNumber?"gl-stashes-view":"git-commit"}"
								></code-icon>
								<span class="sha" data-region="shortsha"
									>${null!=this.stashNumber?`#${this.stashNumber}`:this.shortSha}</span
								>
							</a>
							<span slot="content"
								>Copy ${null!=this.stashNumber?"Stash Name":"SHA"}<br />[⌥] Copy Message</span
							>
						</gl-tooltip>
					`))}
			</div>
			<div class="group">
				<gl-tooltip hoist
					><a
						class="commit-action${this.pinned?" is-active":""}"
						href="#"
						data-action="pin"
						@click=${this.handleAction}
						><code-icon
							icon="${this.pinned?"gl-pinned-filled":"pin"}"
							data-region="commit-pin"
						></code-icon></a
					><span slot="content">${e}</span></gl-tooltip
				>
				<gl-tooltip hoist content="${i}"
					><a
						class="commit-action${this.navigationState.back?"":" is-disabled"}"
						aria-disabled="${this.navigationState.back?"false":"true"}"
						href="#"
						data-action="back"
						@click=${this.handleAction}
						><code-icon icon="arrow-left" data-region="commit-back"></code-icon></a
				></gl-tooltip>
				${Jt(this.navigationState.forward,(()=>Ot`
						<gl-tooltip hoist content="${t}"
							><a class="commit-action" href="#" data-action="forward" @click=${this.handleAction}
								><code-icon icon="arrow-right" data-region="commit-forward"></code-icon></a
						></gl-tooltip>
					`))}
				<!-- TODO: add a spacer -->
				${Jt(this.uncommitted,(()=>Ot`
						<gl-tooltip hoist content="Open SCM view"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="scm"
								@click=${this.handleAction}
								><code-icon icon="source-control"></code-icon></a
						></gl-tooltip>
					`))}
				<gl-tooltip hoist content="Open in Commit Graph"
					><a
						class="commit-action"
						href="#"
						data-action="commit-actions"
						data-action-type="graph"
						@click=${this.handleAction}
						><code-icon icon="gl-graph"></code-icon></a
				></gl-tooltip>
				${Jt(!this.uncommitted,(()=>Ot`
						<gl-tooltip hoist content="Show Commit Actions"
							><a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="more"
								@click=${this.handleAction}
								><code-icon icon="kebab-vertical"></code-icon></a
						></gl-tooltip>
					`))}
			</div>
		`}};xa.styles=[ba,Me`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			:host([pinned]) {
				background-color: var(--color-alert-warningBackground);
				box-shadow: 0 0 0 0.1rem var(--color-alert-warningBorder);
				border-radius: 0.3rem;
			}

			:host([pinned]) .commit-action:hover,
			:host([pinned]) .commit-action.is-active {
				background-color: var(--color-alert-warningHoverBackground);
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				max-width: 100%;
			}

			.sha {
				margin: 0 0.5rem 0 0.25rem;
			}
		`],wa([Vt({type:Boolean,reflect:!0})],xa.prototype,"pinned",2),wa([Vt({type:Boolean})],xa.prototype,"uncommitted",2),wa([Vt({type:Object})],xa.prototype,"navigation",2),wa([Vt()],xa.prototype,"shortSha",2),wa([Vt()],xa.prototype,"stashNumber",2),xa=wa([Ft("gl-inspect-nav")],xa);var $a=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,_a=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?ka(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&$a(t,i,r),r};let Ca=class extends lit_element_s{render(){if(null==this.wip)return Dt;const e=this.wip.changes,t=this.wip.branch;if(null==e||null==t)return Dt;let i="git-pull-request";if(this.wip.pullRequest?.state)switch(this.wip.pullRequest?.state){case"merged":i="git-merge";break;case"closed":i="git-pull-request-closed"}return Ot`
			<div class="group">
				${Jt(null!=this.wip.pullRequest,(()=>Ot`<gl-popover hoist>
							<a href="#" class="commit-action" slot="anchor"
								><code-icon icon=${i} class="pr pr--${this.wip.pullRequest.state}"></code-icon
								><span>#${this.wip.pullRequest.id}</span></a
							>
							<div slot="content">
								<issue-pull-request
									type="pr"
									name="${this.wip.pullRequest.title}"
									url="${this.wip.pullRequest.url}"
									identifier="#${this.wip.pullRequest.id}"
									status="${this.wip.pullRequest.state}"
									.date=${this.wip.pullRequest.updatedDate}
									.dateFormat="${this.preferences?.dateFormat}"
									.dateStyle="${this.preferences?.dateStyle}"
									details
								></issue-pull-request>
							</div>
						</gl-popover>`))}
				<gl-tooltip hoist class="tooltip--overflowed">
					<a
						href="#"
						class="commit-action commit-action--overflowed"
						@click=${e=>this.handleAction(e,"switch")}
					>
						${Jt(null==this.wip.pullRequest,(()=>Ot`<code-icon icon="git-branch"></code-icon>`))}<span class="branch">${t.name}</span><code-icon icon="chevron-down" size="10"></code-icon
					></a>
					<div slot="content">
						Switch to Another Branch...
						<hr />
						<code-icon icon="git-branch"></code-icon><span class="md-code">${this.wip.branch?.name}</span>
					</div>
				</gl-tooltip>
			</div>
			<div class="group">
				<gl-tooltip hoist content="Fetch">
					<a href="#" class="commit-action" @click=${e=>this.handleAction(e,"fetch")}
						><code-icon icon="gl-repo-fetch"></code-icon></a
				></gl-tooltip>
			</div>
		`}handleAction(e,t){const i=e instanceof MouseEvent&&e.altKey;this.dispatchEvent(new CustomEvent("gl-branch-action",{detail:{action:t,alt:i}}))}};Ca.styles=[ba,Me`
			*,
			*::before,
			*::after {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				/* flex-wrap: wrap; */
				align-items: center;
				justify-content: space-between;
				gap: 0.2rem;
			}

			.tooltip--overflowed {
				min-width: 0;
			}

			.commit-action--overflowed {
				width: 100%;
			}

			.branch {
				min-width: 0;
				max-width: fit-content;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.group {
				display: flex;
				flex: none;
				flex-direction: row;
				min-width: 0;
				max-width: 100%;
			}

			.group:first-child {
				min-width: 0;
				flex: 0 1 auto;
			}

			hr {
				border: none;
				border-top: 1px solid var(--color-foreground--25);
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}
		`],_a([Vt({type:Object})],Ca.prototype,"wip",2),_a([Vt({type:Object})],Ca.prototype,"preferences",2),Ca=_a([Ft("gl-status-nav")],Ca);var Sa=Object.defineProperty,Aa=Object.getOwnPropertyDescriptor,Ea=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Aa(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Sa(t,i,r),r};const Pa="0000000000000000000000000000000000000000";let Ra=class extends lit_element_s{constructor(){super(),this.draftState={inReview:!1},this._disposables=[],this.indentPreference=16,Ee(we)}get isUncommitted(){return this.state?.commit?.sha===Pa}get hasCommit(){return null!=this.state?.commit}get isStash(){return null!=this.state?.commit?.stashNumber}get wipStatus(){const e=this.state?.wip;if(null==e)return;const t=e.branch;if(null==t)return;const i=e.changes,o=i?.files.length??0,n=t.tracking?.ahead??0,r=t.tracking?.behind??0,a=r>0&&n>0?"both":r>0?"behind":n>0?"ahead":o>0?"working":void 0;return{branch:e.repositoryCount>1?`${e.repo.name}:${t.name}`:t.name,upstream:t.upstream?.name,ahead:n,behind:r,working:e.changes?.files.length??0,status:a}}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updateDocumentProperties(){const e=this.state?.preferences?.indent;if(e===this.indentPreference)return;this.indentPreference=e??16;document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`)}updated(e){e.has("state")&&(this.updateDocumentProperties(),null!=this.state?.inReview&&this.state.inReview!=this.draftState.inReview&&(this.draftState.inReview=this.state.inReview))}connectedCallback(){super.connectedCallback(),this._hostIpc=new Z("commit-details"),this._disposables=[this._hostIpc.onReceiveMessage((e=>this.onMessageReceived(e))),this._hostIpc,L.on("gl-inspect-nav","gl-commit-actions",(e=>this.onCommitActions(e))),L.on("gl-status-nav","gl-branch-action",(e=>this.onBranchAction(e.detail.action))),L.on('[data-action="pick-commit"]',"click",(e=>this.onPickCommit(e))),L.on('[data-action="wip"]',"click",(e=>this.onSwitchMode(e,"wip"))),L.on('[data-action="details"]',"click",(e=>this.onSwitchMode(e,"commit"))),L.on('[data-action="search-commit"]',"click",(e=>this.onSearchCommit(e))),L.on('[data-action="files-layout"]',"click",(e=>this.onToggleFilesLayout(e))),L.on("gl-inspect-nav","gl-pin",(()=>this.onTogglePin())),L.on("gl-inspect-nav","gl-back",(()=>this.onNavigate("back"))),L.on("gl-inspect-nav","gl-forward",(()=>this.onNavigate("forward"))),L.on('[data-action="create-patch"]',"click",(e=>this.onCreatePatchFromWip(!0))),L.on('[data-region="rich-pane"]',"expanded-change",(e=>this.onExpandedChange(e.detail,"autolinks"))),L.on('[data-region="pullrequest-pane"]',"expanded-change",(e=>this.onExpandedChange(e.detail,"pullrequest"))),L.on('[data-action="explain-commit"]',"click",(e=>this.onExplainCommit(e))),L.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAiModel(e))),L.on("gl-wip-details","create-patch",(e=>this.onCreatePatchFromWip(e.detail.checked))),L.on("gl-commit-details","file-open-on-remote",(e=>this.onOpenFileOnRemote(e.detail))),L.on("gl-commit-details,gl-wip-details","file-open",(e=>this.onOpenFile(e.detail))),L.on("gl-commit-details","file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),L.on("gl-commit-details,gl-wip-details","file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),L.on("gl-commit-details","file-more-actions",(e=>this.onFileMoreActions(e.detail))),L.on("gl-wip-details","file-stage",(e=>this.onStageFile(e.detail))),L.on("gl-wip-details","file-unstage",(e=>this.onUnstageFile(e.detail))),L.on("gl-wip-details","data-action",(e=>this.onBranchAction(e.detail.name))),L.on("gl-wip-details","gl-inspect-create-suggestions",(e=>this.onSuggestChanges(e.detail))),L.on("gl-wip-details","gl-patch-generate-title",(e=>this.onCreateGenerateTitle(e.detail))),L.on("gl-wip-details","gl-show-code-suggestion",(e=>this.onShowCodeSuggestion(e.detail))),L.on("gl-wip-details","gl-patch-file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),L.on("gl-wip-details","gl-patch-file-open",(e=>this.onOpenFile(e.detail))),L.on("gl-wip-details","gl-patch-file-stage",(e=>this.onStageFile(e.detail))),L.on("gl-wip-details","gl-patch-file-unstage",(e=>this.onUnstageFile(e.detail))),L.on("gl-wip-details","gl-patch-create-cancelled",(()=>this.onDraftStateChanged(!1))),L.on("gl-status-nav,issue-pull-request","gl-issue-pull-request-details",(()=>this.onBranchAction("open-pr-details")))]}onSuggestChanges(e){this._hostIpc.sendCommand(Xt,e)}onShowCodeSuggestion(e){this._hostIpc.sendCommand(mi,e)}onMessageReceived(e){switch(!0){case Ai.is(e):e.params.state,this.state=e.params.state,this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case Ei.is(e):this.state={...this.state,wip:e.params.wip,inReview:e.params.inReview},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case Oi.is(e):this.onDraftStateChanged(e.params.inReview,!0);break;case Pi.is(e):this.state={...this.state,hasConnectedJira:e.params.hasConnectedJira},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));break;case Ri.is(e):this.state={...this.state,hasAccount:e.params.hasAccount},this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}))}}disconnectedCallback(){this._disposables.forEach((e=>e.dispose())),this._disposables=[],super.disconnectedCallback()}renderTopInspect(){return null==this.state?.commit?Dt:Ot`<gl-inspect-nav
			?uncommitted=${this.isUncommitted}
			?pinned=${this.state?.pinned}
			.navigation=${this.state?.navigationStack}
			.shortSha=${this.state?.commit.shortSha??""}
			.stashNumber=${this.state?.commit.stashNumber}
		></gl-inspect-nav>`}renderTopWip(){return null==this.state?.wip?Dt:Ot`<gl-status-nav .wip=${this.state.wip} .preferences=${this.state.preferences}></gl-status-nav>`}renderRepoStatusContent(e){const t=this.wipStatus?.status;return Ot`
			<code-icon icon="gl-repository-filled"></code-icon>
			${Jt(null!=this.wipStatus?.status,(()=>Ot`<gl-tracking-pill
						class="inspect-header__tab-tracking"
						.ahead=${this.wipStatus.ahead}
						.behind=${this.wipStatus.behind}
						.working=${this.wipStatus.working}
						outlined
					></gl-tracking-pill>`))}
			${Jt(null!=t,(()=>Ot`<gl-indicator
						class="inspect-header__tab-indicator inspect-header__tab-indicator--${t}"
					></gl-indicator>`))}
		`}renderWipTooltipContent(){return null==this.wipStatus?"Overview":Ot`
			Overview of &nbsp;<code-icon icon="git-branch" size="12"></code-icon
			><span class="md-code">${this.wipStatus.branch}</span>
			${Jt("both"===this.wipStatus.status,(()=>Ot`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${C("commit",this.wipStatus.behind)} behind and
						${C("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`))}
			${Jt("behind"===this.wipStatus.status,(()=>Ot`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${C("commit",this.wipStatus.behind)} behind
						<span class="md-code">${this.wipStatus.upstream??"origin"}</span>`))}
			${Jt("ahead"===this.wipStatus.status,(()=>Ot`<hr />
						<span class="md-code">${this.wipStatus.branch}</span> is
						${C("commit",this.wipStatus.ahead)} ahead of
						<span class="md-code"> ${this.wipStatus.upstream??"origin"}</span>`))}
			${Jt(this.wipStatus.working>0,(()=>Ot`<hr />
						${C("working change",this.wipStatus.working)}`))}
		`}renderTopSection(){const e="wip"===this.state?.mode;return Ot`
			<div class="inspect-header">
				<nav class="inspect-header__tabs">
					<gl-tooltip hoist>
						<button class="inspect-header__tab${e?"":" is-active"}" data-action="details">
							<code-icon icon="gl-inspect"></code-icon>
						</button>
						<span slot="content"
							>${null!=this.state?.commit?this.isStash?Ot`Inspect Stash
											<span class="md-code"
												><code-icon icon="gl-stashes-view"></code-icon> #${this.state.commit.stashNumber}</span
											>`:Ot`Inspect Commit
											<span class="md-code"
												><code-icon icon="git-commit"></code-icon> ${this.state.commit.shortSha}</span
											>`:"Inspect"}${this.state?.pinned?Ot`(pinned)
										<hr />
										Automatic following is suspended while pinned`:""}</span
						>
					</gl-tooltip>
					<gl-tooltip hoist>
						<button class="inspect-header__tab${e?" is-active":""}" data-action="wip">
							${this.renderRepoStatusContent(e)}
						</button>
						<span slot="content">${this.renderWipTooltipContent()}</span>
					</gl-tooltip>
				</nav>
				<div class="inspect-header__content">
					${Jt("wip"!==this.state?.mode,(()=>this.renderTopInspect()),(()=>this.renderTopWip()))}
				</div>
			</div>
		`}render(){const e=this.state?.wip;return Ot`
			<div class="commit-detail-panel scrollable">
				${this.renderTopSection()}
				<main id="main" tabindex="-1">
					${Jt("commit"===this.state?.mode,(()=>Ot`<gl-commit-details
								.state=${this.state}
								.files=${this.state?.commit?.files}
								.explain=${this.explain}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.isUncommitted=${this.isUncommitted}
							></gl-commit-details>`),(()=>Ot`<gl-wip-details
								.wip=${e}
								.files=${e?.changes?.files}
								.preferences=${this.state?.preferences}
								.orgSettings=${this.state?.orgSettings}
								.generate=${this.generate}
								.isUncommitted=${!0}
								.emptyText=${"No working changes"}
								.draftState=${this.draftState}
								@draft-state-changed=${e=>this.onDraftStateChanged(e.detail.inReview)}
							></gl-wip-details>`))}
				</main>
			</div>
		`}createRenderRoot(){return this}onDraftStateChanged(e,t=!1){e!==this.draftState.inReview&&(this.draftState={...this.draftState,inReview:e},this.requestUpdate("draftState"),t||this._hostIpc.sendCommand(gi,{inReview:e}))}onBranchAction(e){switch(e){case"pull":this._hostIpc.sendCommand(yi,void 0);break;case"push":this._hostIpc.sendCommand(vi,void 0);break;case"fetch":this._hostIpc.sendCommand(fi,void 0);break;case"publish-branch":this._hostIpc.sendCommand(bi,void 0);break;case"switch":this._hostIpc.sendCommand(wi,void 0);break;case"open-pr-changes":this._hostIpc.sendCommand(xi,void 0);break;case"open-pr-compare":this._hostIpc.sendCommand($i,void 0);break;case"open-pr-remote":this._hostIpc.sendCommand(ki,void 0);break;case"open-pr-details":this._hostIpc.sendCommand(_i,void 0)}}onCreatePatchFromWip(e=!0){null!=this.state?.wip?.changes&&this._hostIpc.sendCommand(ui,{changes:this.state.wip.changes,checked:e})}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this._hostIpc.sendCommand(D,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onExplainCommit(e){try{const e=await this._hostIpc.sendRequest(Ci,void 0);e.error?this.explain={error:{message:e.error.message??"Error retrieving content"}}:e.summary?this.explain={summary:e.summary}:this.explain=void 0}catch(e){this.explain={error:{message:"Error retrieving content"}}}}async onCreateGenerateTitle(e){try{const e=await this._hostIpc.sendRequest(Si,void 0);e.error?this.generate={error:{message:e.error.message??"Error retrieving content"}}:e.title||e.description?this.generate={title:e.title,description:e.description}:this.generate=void 0}catch(e){this.generate={error:{message:"Error retrieving content"}}}this.requestUpdate("generate")}onToggleFilesLayout(e){const t=e.target?.dataset.filesLayout??void 0;if(t===this.state?.preferences?.files?.layout)return;const i={...this.state.preferences?.files,layout:t??"auto"};this.state={...this.state,preferences:{...this.state.preferences,files:i}},this._hostIpc.sendCommand(pi,{files:i})}onExpandedChange(e,t){let i;"autolinks"===t?i={autolinksExpanded:e.expanded}:"pullrequest"===t&&(i={pullRequestExpanded:e.expanded}),null!=i&&(this.state={...this.state,preferences:{...this.state.preferences,...i}},this._hostIpc.sendCommand(pi,i))}onNavigate(e){this._hostIpc.sendCommand(hi,{direction:e})}onTogglePin(){this._hostIpc.sendCommand(di,{pin:!this.state.pinned})}onPickCommit(e){this._hostIpc.sendCommand(ai,void 0)}onSearchCommit(e){this._hostIpc.sendCommand(li,void 0)}onSwitchMode(e,t){this.state={...this.state,mode:t},this._hostIpc.sendCommand(ci,{mode:t,repoPath:this.state.commit?.repoPath})}onOpenFileOnRemote(e){this._hostIpc.sendCommand(ii,e)}onOpenFile(e){this._hostIpc.sendCommand(ti,e)}onCompareFileWithWorking(e){this._hostIpc.sendCommand(oi,e)}onCompareFileWithPrevious(e){this._hostIpc.sendCommand(ni,e)}onFileMoreActions(e){this._hostIpc.sendCommand(ei,e)}onStageFile(e){this._hostIpc.sendCommand(si,e)}onUnstageFile(e){this._hostIpc.sendCommand(ri,e)}onCommitActions(e){void 0!==this.state?.commit&&this._hostIpc.sendCommand(Qt,{action:e.detail.action,alt:e.detail.alt})}};Ea([Vt({type:Object})],Ra.prototype,"state",2),Ea([Vt({type:Object})],Ra.prototype,"explain",2),Ea([Vt({type:Object})],Ra.prototype,"generate",2),Ea([Wt()],Ra.prototype,"draftState",2),Ea([Wt()],Ra.prototype,"isUncommitted",1),Ea([Wt()],Ra.prototype,"isStash",1),Ra=Ea([Ft("gl-commit-details-app")],Ra);class CommitDetailsApp extends App{constructor(){super("CommitDetailsApp")}onInitialize(){const e=document.getElementById("app");e.state=this.state,L.on(e,"state-changed",(e=>{this.state=e.detail,this.setState(this.state)}))}}new CommitDetailsApp;var Oa=t.L;export{Oa as CommitDetailsApp};