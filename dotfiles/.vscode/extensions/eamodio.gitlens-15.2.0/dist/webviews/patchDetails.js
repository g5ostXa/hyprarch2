var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{I:()=>PatchDetailsApp,w:()=>Ns});class IpcCall{constructor(e,t,i=!1,o=!1){this.scope=e,this.reset=i,this.pack=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcRequest extends IpcCall{constructor(e,t,i,o){super(e,t,i,o),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}}class IpcNotification extends IpcCall{}const i=new IpcCommand("core","webview/ready"),o=new IpcCommand("core","webview/focus/changed"),n=new IpcCommand("core","command/execute"),r=(new IpcCommand("core","configuration/update"),new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const a="patchDetails",l=new IpcCommand(a,"apply"),c=new IpcCommand(a,"archive"),d=new IpcCommand(a,"create"),h=(new IpcCommand(a,"openInGraph"),new IpcCommand(a,"checked")),p=new IpcCommand(a,"selectRepo"),u=new IpcCommand(a,"selectBase"),f=new IpcCommand(a,"file/actions/execute"),g=new IpcCommand(a,"file/open"),m=new IpcCommand(a,"file/openOnRemote"),b=new IpcCommand(a,"file/compareWorking"),v=new IpcCommand(a,"file/comparePrevious"),y=new IpcCommand(a,"preferences/update"),w=new IpcCommand(a,"switchMode"),x=new IpcCommand(a,"cloud/copyLink"),_=new IpcCommand(a,"local/createPatch"),k=new IpcCommand(a,"create/repository/check"),C=new IpcCommand(a,"update/create/metadata"),A=new IpcCommand(a,"update/draft/metadata"),S=new IpcCommand(a,"update/draft/permissions"),E=new IpcCommand(a,"update/users"),P=new IpcCommand(a,"update/userSelection"),O=new IpcRequest(a,"explain"),R=new IpcRequest(a,"generate"),T=new IpcNotification(a,"didChange",!0),D=new IpcNotification(a,"create/didChange"),M=new IpcNotification(a,"draft/didChange"),L=new IpcNotification(a,"preferences/didChange"),I=new IpcNotification(a,"draft/didChangeRepository");new IpcNotification(a,"org/settings/didChange");function U(e,t,i){let o,n,r,a,l;function c(e){const i=e-(n??0);return null==n||i>=t||i<0}function d(){const e=Date.now();if(c(e))h();else{l=setTimeout(d,t-(e-(n??0)))}}function h(){return l=void 0,o?function(){const t=o,i=r;return o=r=void 0,a=e.apply(i,t),a}():(o=void 0,r=void 0,a)}function p(...e){const h=Date.now(),p=c(h);return o=null!=i&&o?i(o,e):e,r=this,n=h,p&&null==l?(l=setTimeout(d,t),a):(null==l&&(l=setTimeout(d,t)),a)}return p.cancel=function(){null!=l&&clearTimeout(l),o=void 0,n=void 0,r=void 0,l=void 0},p.flush=function(){return null==l?a:(clearTimeout(l),h())},p.pending=function(){return null!=l},p}const B=",",z="=",N="{",j="(",H=")",F=/\(([\s\S]*)\)/,q=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,W=/\s?=.*$/;function G(e){const t=.001*performance.now();let i=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],o-=e[1],o<0&&(i--,o+=1e9)),[i,o]}const K=500;function Y(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const Z=Y(),X=new Map;function J(e){X.delete(e)}function ee(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const i=Z.next();return{scopeId:i,prefix:`[${String(i).padStart(5)}] ${e}`}}Error;function te(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"});const ie=Object.freeze({codeSuggest:"https://gitkraken.com/solutions/code-suggest?utm_source=gitlens-extension&utm_medium=in-app-links",cloudPatches:"https://gitkraken.com/solutions/cloud-patches?utm_source=gitlens-extension&utm_medium=in-app-links",graph:"https://gitkraken.com/solutions/commit-graph?utm_source=gitlens-extension&utm_medium=in-app-links",launchpad:"https://gitkraken.com/solutions/launchpad?utm_source=gitlens-extension&utm_medium=in-app-links",platform:"https://gitkraken.com/devex?utm_source=gitlens-extension&utm_medium=in-app-links",pricing:"https://gitkraken.com/gitlens/pricing?utm_source=gitlens-extension&utm_medium=in-app-links",proFeatures:"https://gitkraken.com/gitlens/pro-features?utm_source=gitlens-extension&utm_medium=in-app-links",security:"https://help.gitkraken.com/gitlens/security?utm_source=gitlens-extension&utm_medium=in-app-links",workspaces:"https://gitkraken.com/solutions/workspaces?utm_source=gitlens-extension&utm_medium=in-app-links",cli:"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links",browserExtension:"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links",desktop:"https://gitkraken.com/git-client?utm_source=gitlens-extension&utm_medium=in-app-links",releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:"https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?utm_source=gitlens-extension&utm_medium=in-app-links"});var oe=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(oe||{});const{fromCharCode:ne}=String;new TextEncoder;function re(e){const[t,i]=G(e);return 1e3*t+Math.floor(i/1e6)}const se=Symbol("logInstanceNameFn");function ae(e){return function(e,t=!1){let i,o,n,r,a,l=0,c=!1,d=!1,h=!0;null!=e&&({args:i,if:o,enter:n,exit:r,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:h=!0}=e);l>0&&(d=!0,h=!0);h&&(c=!0);const p=le.isDebugging,u=t?le.debug:le.log,f=p?"debug":"info";return(e,t,g)=>{let m,b;if("function"==typeof g.value?(m=g.value,b="value"):"function"==typeof g.get&&(m=g.get,b="get"),null==m||null==b)throw new Error("Not supported");const v=!1!==i?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(q,"")||t,t=t.slice(0,t.indexOf(N));let i=t.indexOf(j),o=t.indexOf(H);i=i>=0?i+1:0,o=o>0?o:t.indexOf(z),t=t.slice(i,o),t=`(${t})`;const n=F.exec(t);return null!=n?n[1].split(B).map((e=>e.trim().replace(W,""))):[]}(m):[];g[b]=function(...e){if(!p&&!le.enabled(f)||null!=o&&!o.apply(this,e))return m.apply(this,e);const g=Z.next(),b=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let i=t?.name??"";const o=i.indexOf("_");i=-1===o?i:i.substr(o+1),null!=t?.[se]&&(i=t[se](e,i));return i}(this):void 0;let y,w=b?c?`[${g.toString(16).padStart(5)}] ${b}.${t}`:`${b}.${t}`:t;null!=a&&(w=a({id:g,instance:this,instanceName:b??"",name:t,prefix:w},...e)),c&&(y={scopeId:g,prefix:w},function(e,t){X.set(e,t)}(g,y));const x=null!=n?n(...e):"";let _;if(!1===i||0===e.length)_="",d||u.call(le,`${w}${x}`);else{let t;_="";let o,n,r,a=-1;for(r of e){if(o=v[++a],t=i?.[a],null!=t){if("boolean"==typeof t)continue;if(_.length>0&&(_+=", "),"string"==typeof t){_+=t;continue}n=String(t(r))}else _.length>0&&(_+=", "),n=le.toLoggable(r);_+=o?`${o}=${n}`:n}d||u.call(le,_?`${w}${x}(${_})`:`${w}${x}`)}if(d||h||null!=r){const t=h?G():void 0,i=e=>{const i=void 0!==t?` [${re(t)}ms]`:"";d?le.error(e,_?`${w}${x}(${_})`:`${w}${x}`,y?.exitDetails?`failed${y.exitDetails}${i}`:`failed${i}`):le.error(e,w,y?.exitDetails?`failed${y.exitDetails}${i}`:`failed${i}`),c&&J(g)};let o;try{o=m.apply(this,e)}catch(e){throw i(e),e}const n=e=>{let i,o,n,a;if(null!=t?(i=re(t),i>K?(o=le.warn,n=` [*${i}ms] (slow)`):(o=u,n=` [${i}ms]`)):(n="",o=u),null!=r)if("function"==typeof r)try{a=r(e)}catch(e){a=`@log.exit error: ${e}`}else!0===r&&(a=`returned ${le.toLoggable(e)}`);else y?.exitFailed?(a=y.exitFailed,o=le.error):a="completed";d?(0===l||i>l)&&o.call(le,_?`${w}${x}(${_}) ${a}${y?.exitDetails||""}${n}`:`${w}${x} ${a}${y?.exitDetails||""}${n}`):o.call(le,_?`${w}(${_}) ${a}${y?.exitDetails||""}${n}`:`${w} ${a}${y?.exitDetails||""}${n}`),c&&J(g)};return null!=o&&te(o)?o.then(n,i):n(o),o}return m.apply(this,e)}}}(e,!0)}const le=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,i=!1){this.provider=e,this._isDebugging=i,this.logLevel=t}enabled(e){return this.level>=ce(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=ce(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...i){if(this.level<1&&!this.isDebugging)return;let o;if(o=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`,null==o){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,i)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const i=this.provider.toLoggable?.(e);if(null!=i)return i;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const i=t.map((e=>this.toLoggable(e))).join(", ");return 0!==i.length?` — ${i}`:""}};function ce(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const de={enabled:e=>le.enabled(e)||le.isDebugging,log:(e,t,i,...o)=>{switch(e){case"error":le.error("",t,i,...o);break;case"warn":le.warn(t,i,...o);break;case"info":le.log(t,i,...o);break;default:le.debug(t,i,...o)}}};var he;(he||(he={})).on=function(e,t,i,o){let n=!1;if("string"==typeof e){const r=function(t){const o=t?.target?.closest(e);null!=o&&i(t,o)};return document.addEventListener(t,r,o??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,r,o??!0))}}}const r=function(e){i(e,this)};return e.addEventListener(t,r,o??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,r,o??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...i){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:ee(e??""),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??de,this._time=G(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=G(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=G(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[i,o]=G(this._time),n=1e3*i+Math.floor(o/1e6),r=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${n}ms]${e?.suffix??""}`)}}const pe=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,i)=>{null==this.listeners&&(this.listeners=new LinkedList);const o=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=_Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};pe._noop=function(){};let ue=pe;const fe={done:!0,value:void 0},ge=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};ge.Undefined=new ge(void 0);let me=ge;class LinkedList{constructor(){this._first=me.Undefined,this._last=me.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===me.Undefined}clear(){this._first=me.Undefined,this._last=me.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const i=new me(e);if(this._first===me.Undefined)this._first=i,this._last=i;else if(t){const e=this._last;this._last=i,i.prev=e,e.next=i}else{const e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===me.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===me.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==me.Undefined&&e.next!==me.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===me.Undefined&&e.next===me.Undefined?(this._first=me.Undefined,this._last=me.Undefined):e.next===me.Undefined?(this._last=this._last.prev,this._last.next=me.Undefined):e.prev===me.Undefined&&(this._first=this._first.next,this._first.prev=me.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===me.Undefined?fe:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==me.Undefined;t=t.next)e.push(t.element);return e}}var be=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,ye=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?ve(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&be(t,i,r),r};let we;function _e(){return we??=acquireVsCodeApi()}const ke=Y();function Ce(){return`webview:${ke.next()}`}let Ae=class{constructor(e){this.appName=e,this._onReceiveMessage=new ue,this._pendingHandlers=new Map,this._api=_e(),this._disposable=he.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=X.get(Z.current),i=e.data;if(i.packed&&i.params instanceof Uint8Array){const o=function(e,t,...i){return(t?.provider??de).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...i):void 0}(ee(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,i.params=JSON.parse(this._textDecoder.decode(i.params)),o?.stop()}if(null==i.completionId)this._onReceiveMessage.fire(i);else{const e=Pe(i.method,i.completionId);this._pendingHandlers.get(e)?.(i)}}sendCommand(e,t){const i=Ce();this.postMessage({id:i,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const i=Ce(),o=new Promise(((t,o)=>{const n=Pe(e.response.method,i);let r;function a(){clearTimeout(r),r=void 0,this._pendingHandlers.delete(n)}r=setTimeout((()=>{a.call(this),o(new Error(`Timed out waiting for completion of ${n}`))}),6e4),this._pendingHandlers.set(n,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,completionId:i}),o}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var Ee;function Pe(e,t){return`${e}|${t}`}ye([ae({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],Ae.prototype,"onMessageReceived",1),ye([ae({args:{0:e=>e.method,1:!1}})],Ae.prototype,"sendCommand",1),ye([ae({args:{0:e=>e.method,1:!1,2:!1}})],Ae.prototype,"sendRequest",1),ye([ae({args:{0:e=>`${e.id}, method=${e.method}`}})],Ae.prototype,"postMessage",1),Ae=ye([(Ee=(e,t)=>`${e.appName}(${t})`,e=>{e[se]=Ee})],Ae);function Oe(e,t){const i=Math.pow(10,t);return Math.round(e*i)/i}class RGBA{constructor(e,t,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=Oe(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Oe(Math.max(Math.min(1,t),0),3),this.l=Oe(Math.max(Math.min(1,i),0),3),this.a=Oe(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,i=e.g/255,o=e.b/255,n=e.a,r=Math.max(t,i,o),a=Math.min(t,i,o);let l=0,c=0;const d=(a+r)/2,h=r-a;if(h>0){switch(c=Math.min(d<=.5?h/(2*d):h/(2-2*d),1),r){case t:l=(i-o)/h+(i<o?6:0);break;case i:l=(o-t)/h+2;break;case o:l=(t-i)/h+4}l*=60,l=Math.round(l)}return new HSLA(l,c,d,n)}static _hue2rgb(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){const t=e.h/360,{s:i,l:o,a:n}=e;let r,a,l;if(0===i)r=a=l=o;else{const e=o<.5?o*(1+i):o+i-o*i,n=2*o-e;r=HSLA._hue2rgb(n,e,t+1/3),a=HSLA._hue2rgb(n,e,t),l=HSLA._hue2rgb(n,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),n)}}class HSVA{constructor(e,t,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Oe(Math.max(Math.min(1,t),0),3),this.v=Oe(Math.max(Math.min(1,i),0),3),this.a=Oe(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,i=e.g/255,o=e.b/255,n=Math.max(t,i,o),r=n-Math.min(t,i,o),a=0===n?0:r/n;let l;return l=0===r?0:n===t?((i-o)/r%6+6)%6:n===i?(o-t)/r+2:(t-i)/r+4,new HSVA(Math.round(60*l),a,n,e.a)}static toRGBA(e){const{h:t,s:i,v:o,a:n}=e,r=o*i,a=r*(1-Math.abs(t/60%2-1)),l=o-r;let[c,d,h]=[0,0,0];return t<60?(c=r,d=a):t<120?(c=a,d=r):t<180?(d=r,h=a):t<240?(d=a,h=r):t<300?(c=a,h=r):t<=360&&(c=r,h=a),c=Math.round(255*(c+l)),d=Math.round(255*(d+l)),h=Math.round(255*(h+l)),new RGBA(c,d,h,n)}}function Re(e,t){return t.getPropertyValue(e).trim()}const Te=class _Color{static from(e){return e instanceof _Color?e:Ne(e)||_Color.red}static fromCssVariable(e,t){return Ne(Re(e,t))||_Color.red}static fromHex(e){return je(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return Oe(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new De(new RGBA(0,0,0,e.rgba.a));if(1===t)return new De(new RGBA(255,255,255,e.rgba.a));const i=e.getRelativeLuminance();let o=20;const n=(e,i)=>{const r=e.mix(i,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!o--?r:a>t?n(e,r):n(r,i)},r=(i>t?n(De.black,e):n(e,De.white)).rgba;return new De(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:i,b:o,a:n}=this.rgba;return new _Color(new RGBA(t,i,o,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,i=this.rgba.a,o=t.a,n=i+o*(1-i);if(n<1e-6)return _Color.transparent;const r=this.rgba.r*i/n+t.r*o*(1-i)/n,a=this.rgba.g*i/n+t.g*o*(1-i)/n,l=this.rgba.b*i/n+t.b*o*(1-i)/n;return new _Color(new RGBA(r,a,l,n))}mix(e,t){return function(e,t,i){const o=e.rgba,n=t.rgba;return new De(new RGBA(o.r+i*(n.r-o.r),o.g+i*(n.g-o.g),o.b+i*(n.b-o.b),o.a+i*(n.a-o.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:i,b:o,a:n}=this.rgba;return new _Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-i),e.rgba.b-n*(e.rgba.b-o),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const i=1-e.rgba.a;return new _Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return Ue(e);return Me(e)}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;const o=e.getRelativeLuminance(),n=t.getRelativeLuminance();return i=i*(n-o)/n,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;const o=e.getRelativeLuminance();return i=i*(o-t.getRelativeLuminance())/o,e.darken(i)}};Te.white=new Te(new RGBA(255,255,255,1)),Te.black=new Te(new RGBA(0,0,0,1)),Te.red=new Te(new RGBA(255,0,0,1)),Te.blue=new Te(new RGBA(0,0,255,1)),Te.green=new Te(new RGBA(0,255,0,1)),Te.cyan=new Te(new RGBA(0,255,255,1)),Te.lightgrey=new Te(new RGBA(211,211,211,1)),Te.transparent=new Te(new RGBA(0,0,0,0));let De=Te;function Me(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function Ie(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function Ue(e){return`#${Ie(e.rgba.r)}${Ie(e.rgba.g)}${Ie(e.rgba.b)}`}const ze=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function Ne(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===oe.Hash)return je(e);const t=ze.exec(e);if(null==t)return null;const i=t[1];let o;switch(i){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(i){case"rgb":case"rgba":return new De(new RGBA(o[0],o[1],o[2],o[3]));case"hsl":case"hsla":return new De(new HSLA(o[0],o[1],o[2],o[3]))}return De.red}function je(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==oe.Hash)return null;switch(t){case 7:{const t=16*Fe(e.charCodeAt(1))+Fe(e.charCodeAt(2)),i=16*Fe(e.charCodeAt(3))+Fe(e.charCodeAt(4)),o=16*Fe(e.charCodeAt(5))+Fe(e.charCodeAt(6));return new De(new RGBA(t,i,o,1))}case 9:{const t=16*Fe(e.charCodeAt(1))+Fe(e.charCodeAt(2)),i=16*Fe(e.charCodeAt(3))+Fe(e.charCodeAt(4)),o=16*Fe(e.charCodeAt(5))+Fe(e.charCodeAt(6)),n=16*Fe(e.charCodeAt(7))+Fe(e.charCodeAt(8));return new De(new RGBA(t,i,o,n/255))}case 4:{const t=Fe(e.charCodeAt(1)),i=Fe(e.charCodeAt(2)),o=Fe(e.charCodeAt(3));return new De(new RGBA(16*t+t,16*i+i,16*o+o))}case 5:{const t=Fe(e.charCodeAt(1)),i=Fe(e.charCodeAt(2)),o=Fe(e.charCodeAt(3)),n=Fe(e.charCodeAt(4));return new De(new RGBA(16*t+t,16*i+i,16*o+o,(16*n+n)/255))}default:return null}}function Fe(e){switch(e){case oe.Digit0:return 0;case oe.Digit1:return 1;case oe.Digit2:return 2;case oe.Digit3:return 3;case oe.Digit4:return 4;case oe.Digit5:return 5;case oe.Digit6:return 6;case oe.Digit7:return 7;case oe.Digit8:return 8;case oe.Digit9:return 9;case oe.a:case oe.A:return 10;case oe.b:case oe.B:return 11;case oe.c:case oe.C:return 12;case oe.d:case oe.D:return 13;case oe.e:case oe.E:return 14;case oe.f:case oe.F:return 15}return 0}const Ve=new ue,qe=Ve.event;function We(e){const t=document.documentElement,i=window.getComputedStyle(t),o=document.body.classList,n=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),r=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=Re("--vscode-editor-background",i);let l=Re("--vscode-editor-foreground",i);return l||(l=Re("--vscode-foreground",i)),{colors:{background:a,foreground:l},computedStyle:i,isLightTheme:n,isHighContrastTheme:r,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],o=We();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(qe(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",le.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=_e(),this._hostIpc=new Ae(this.appName),t.push(this._hostIpc),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Ve.fire(We(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===r.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(i,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(he.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=U((e=>{this.sendCommand(o,e)}),150);this.bindDisposables.push(he.on(document,"focusin",(t=>{const i=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===i||(this._focused=!0,this._inputFocused=i,e({focused:!0,inputFocused:i}))})),he.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?le.log(e,...t):le.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}var Ke={408:(e,t)=>{var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),f=Symbol.iterator,g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function v(e,t,i){this.props=e,this.context=t,this.refs=b,this.updater=i||g}function y(){}function w(e,t,i){this.props=e,this.context=t,this.refs=b,this.updater=i||g}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=w.prototype=new y;x.constructor=w,m(x,v.prototype),x.isPureReactComponent=!0;var _=Array.isArray,k=Object.prototype.hasOwnProperty,C={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var n,r={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,n)&&!A.hasOwnProperty(n)&&(r[n]=t[n]);var c=arguments.length-2;if(1===c)r.children=o;else if(1<c){for(var d=Array(c),h=0;h<c;h++)d[h]=arguments[h+2];r.children=d}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===r[n]&&(r[n]=c[n]);return{$$typeof:i,type:e,key:a,ref:l,props:r,_owner:C.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case o:c=!0}}if(c)return a=a(c=e),e=""===r?"."+O(c,0):r,_(a)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),R(a,t,n,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",_(e))for(var d=0;d<e.length;d++){var h=r+O(l=e[d],d);c+=R(l,t,n,h,a)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),d=0;!(l=e.next()).done;)c+=R(l=l.value,t,n,h=r+O(l,d++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,i){if(null==e)return e;var o=[],n=0;return R(e,o,"","",(function(e){return t.call(i,e,n++)})),o}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},L={transition:null},I={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:L,ReactCurrentOwner:C};t.Children={map:T,forEach:function(e,t,i){T(e,(function(){t.apply(this,arguments)}),i)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=n,t.Profiler=a,t.PureComponent=w,t.StrictMode=r,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=m({},e.props),r=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=C.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)k.call(t,d)&&!A.hasOwnProperty(d)&&(n[d]=void 0===t[d]&&void 0!==c?c[d]:t[d])}var d=arguments.length-2;if(1===d)n.children=o;else if(1<d){c=Array(d);for(var h=0;h<d;h++)c[h]=arguments[h+2];n.children=c}return{$$typeof:i,type:e.type,key:r,ref:a,props:n,_owner:l}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return M.current.useCallback(e,t)},t.useContext=function(e){return M.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return M.current.useDeferredValue(e)},t.useEffect=function(e,t){return M.current.useEffect(e,t)},t.useId=function(){return M.current.useId()},t.useImperativeHandle=function(e,t,i){return M.current.useImperativeHandle(e,t,i)},t.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return M.current.useMemo(e,t)},t.useReducer=function(e,t,i){return M.current.useReducer(e,t,i)},t.useRef=function(e){return M.current.useRef(e)},t.useState=function(e){return M.current.useState(e)},t.useSyncExternalStore=function(e,t,i){return M.current.useSyncExternalStore(e,t,i)},t.useTransition=function(){return M.current.useTransition()},t.version="18.2.0"},294:(e,t,i)=>{e.exports=i(408)}},Ye={};function Ze(e){var t=Ye[e];if(void 0!==t)return t.exports;var i=Ye[e]={exports:{}};return Ke[e](i,i.exports,Ze),i.exports}Ze.d=(e,t)=>{for(var i in t)Ze.o(t,i)&&!Ze.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},Ze.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var Xe={};(()=>{Ze.d(Xe,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>Mt,ud:()=>Bt,wt:()=>zt,ne:()=>jt,Ku:()=>Vt,FU:()=>Gt,XO:()=>ci,Ze:()=>di,K$:()=>hi,cX:()=>yi,Js:()=>wi,J9:()=>xi,si:()=>ri,sg:()=>ki,hW:()=>$i,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>Ci,WV:()=>ae,h4:()=>se,kZ:()=>re});const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class s{constructor(e,t,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=o.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&o.set(i,e))}return e}toString(){return this.cssText}}const n=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new s(o,e,i)},r=(i,o)=>{if(t)i.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of o){const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=t.cssText,i.appendChild(o)}},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,m=g?g.emptyScript:"",b=f.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const r=o?.call(this);n.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o,this[o]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i,o=!1,n){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??w)(o?n:this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,b?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.0.0");const _=globalThis,k=_.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,E="?"+S,P=`<${E}>`,O=document,R=()=>O.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,M="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,U=/>/g,B=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,N=/"/g,j=/^(?:script|style|textarea|title)$/i,H=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),F=H(1),q=(H(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),G=new WeakMap,K=O.createTreeWalker(O,129);function Y(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}class Q{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,d]=((e,t)=>{const i=e.length-1,o=[];let n,r=2===t?"<svg>":"",a=L;for(let t=0;t<i;t++){const i=e[t];let l,c,d=-1,h=0;for(;h<i.length&&(a.lastIndex=h,c=a.exec(i),null!==c);)h=a.lastIndex,a===L?"!--"===c[1]?a=I:void 0!==c[1]?a=U:void 0!==c[2]?(j.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=B):void 0!==c[3]&&(a=B):a===B?">"===c[0]?(a=n??L,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?B:'"'===c[3]?N:z):a===N||a===z?a=B:a===I||a===U?a=L:(a=B,n=void 0);const p=a===B&&e[t+1].startsWith("/>")?" ":"";r+=a===L?i+P:d>=0?(o.push(l),i.slice(0,d)+A+i.slice(d)+S+p):i+S+(-2===d?t:p)}return[Y(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),o]})(e,t);if(this.el=Q.createElement(c,i),K.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=K.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(A)){const t=d[r++],i=o.getAttribute(e).split(S),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?it:"?"===a[1]?rt:"@"===a[1]?st:nt}),o.removeAttribute(e)}else e.startsWith(S)&&(l.push({type:6,index:n}),o.removeAttribute(e));if(j.test(o.tagName)){const e=o.textContent.split(S),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],R()),K.nextNode(),l.push({type:2,index:++n});o.append(e[t],R())}}}else if(8===o.nodeType)if(o.data===E)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(S,e+1));)l.push({type:7,index:n}),e+=S.length-1}n++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function Z(e,t,i=e,o){if(t===q)return t;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const r=T(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(t=Z(e,n._$AS(e,t.values),n,o)),t}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??O).importNode(t,!0);K.currentNode=o;let n=K.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new ot(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new at(n,this,e)),this._$AV.push(t),l=i[++a]}r!==l?.index&&(n=K.nextNode(),r++)}return K.currentNode=O,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),T(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Q.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new et(o,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new Q(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new ot(this.k(R()),this.k(R()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,o){const n=this.strings;let r=!1;if(void 0===n)e=Z(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{const o=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=Z(this,o[i+a],t,a),l===q&&(l=this._$AH[a]),r||=!T(l)||l!==this._$AH[a],l===W?e=W:e!==W&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class st extends nt{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??W)===q)return;const i=this._$AH,o=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const X=_.litHtmlPolyfillSupport;X?.(Q,ot),(_.litHtmlVersions??=[]).push("3.0.0");class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let n=o._$litPart$;if(void 0===n){const e=i?.renderBefore??null;o._$litPart$=n=new ot(t.insertBefore(R(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const J=globalThis.litElementPolyfillSupport;J?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");const ee={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},te=(e=ee,t,i)=>{const{kind:o,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];t.call(this,i),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+o)};function ie(e){return(t,i)=>"object"==typeof i?te(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}const oe=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function ne(e,t){return(i,o,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:a}="object"==typeof o?i:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return oe(i,o,{get(){if(t){let t=e.call(this);return void 0===t&&(t=r(this),a.call(this,t)),t}return r(this)}})}return oe(i,o,{get(){return r(this)}})}}class gt extends ct{}const re=n`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,se=n``,ae=n`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,le=Math.min,ce=Math.max,de=Math.round,he=(Math.floor,e=>({x:e,y:e})),pe={left:"right",right:"left",bottom:"top",top:"bottom"},ue={start:"end",end:"start"};function fe(e,t,i){return ce(e,le(t,i))}function ge(e,t){return"function"==typeof e?e(t):e}function me(e){return e.split("-")[0]}function be(e){return e.split("-")[1]}function ve(e){return"x"===e?"y":"x"}function ye(e){return"y"===e?"height":"width"}function we(e){return["top","bottom"].includes(me(e))?"y":"x"}function _e(e){return ve(we(e))}function ke(e){return e.replace(/start|end/g,(e=>ue[e]))}function Ce(e){return e.replace(/left|right|bottom|top/g,(e=>pe[e]))}function Ae(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Ee(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Pe(e,t,i){let{reference:o,floating:n}=e;const r=we(t),a=_e(t),l=ye(a),c=me(t),d="y"===r,h=o.x+o.width/2-n.width/2,p=o.y+o.height/2-n.height/2,u=o[l]/2-n[l]/2;let f;switch(c){case"top":f={x:h,y:o.y-n.height};break;case"bottom":f={x:h,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:p};break;case"left":f={x:o.x-n.width,y:p};break;default:f={x:o.x,y:o.y}}switch(be(t)){case"start":f[a]-=u*(i&&d?-1:1);break;case"end":f[a]+=u*(i&&d?-1:1)}return f}async function Oe(e,t){var i;void 0===t&&(t={});const{x:o,y:n,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:u=!1,padding:f=0}=ge(t,e),g=Ae(f),m=l[u?"floating"===p?"reference":"floating":p],b=Ee(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(m)))||i?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),v="floating"===p?{...a.floating,x:o,y:n}:a.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),w=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},x=Ee(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:c}):v);return{top:(b.top-x.top+g.top)/w.y,bottom:(x.bottom-b.bottom+g.bottom)/w.y,left:(b.left-x.left+g.left)/w.x,right:(x.right-b.right+g.right)/w.x}}const Re=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:n,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:m=!0,...b}=ge(e,t);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const v=me(n),y=me(l)===l,w=await(null==c.isRTL?void 0:c.isRTL(d.floating)),x=u||(y||!m?[Ce(l)]:function(e){const t=Ce(e);return[ke(e),t,ke(t)]}(l));u||"none"===g||x.push(...function(e,t,i,o){const n=be(e);let r=function(e,t,i){const o=["left","right"],n=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?n:o:t?o:n;case"left":case"right":return t?r:a;default:return[]}}(me(e),"start"===i,o);return n&&(r=r.map((e=>e+"-"+n)),t&&(r=r.concat(r.map(ke)))),r}(l,m,g,w));const _=[l,...x],k=await Oe(t,b),C=[];let A=(null==(o=r.flip)?void 0:o.overflows)||[];if(h&&C.push(k[v]),p){const e=function(e,t,i){void 0===i&&(i=!1);const o=be(e),n=_e(e),r=ye(n);let a="x"===n?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Ce(a)),[a,Ce(a)]}(n,a,w);C.push(k[e[0]],k[e[1]])}if(A=[...A,{placement:n,overflows:C}],!C.every((e=>e<=0))){var S,E;const e=((null==(S=r.flip)?void 0:S.index)||0)+1,t=_[e];if(t)return{data:{index:e,overflows:A},reset:{placement:t}};let i=null==(E=A.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!i)switch(f){case"bestFit":{var P;const e=null==(P=A.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:P[0];e&&(i=e);break}case"initialPlacement":i=l}if(n!==i)return{reset:{placement:i}}}return{}}}},Te=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:i,y:o}=t,n=await async function(e,t){const{placement:i,platform:o,elements:n}=e,r=await(null==o.isRTL?void 0:o.isRTL(n.floating)),a=me(i),l=be(i),c="y"===we(i),d=["left","top"].includes(a)?-1:1,h=r&&c?-1:1,p=ge(t,e);let{mainAxis:u,crossAxis:f,alignmentAxis:g}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&"number"==typeof g&&(f="end"===l?-1*g:g),c?{x:f*h,y:u*d}:{x:u*d,y:f*h}}(t,e);return{x:i+n.x,y:o+n.y,data:n}}}};function De(e){return Ue(e)?(e.nodeName||"").toLowerCase():"#document"}function Me(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Ie(e){var t;return null==(t=(Ue(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Ue(e){return e instanceof Node||e instanceof Me(e).Node}function ze(e){return e instanceof Element||e instanceof Me(e).Element}function Ne(e){return e instanceof HTMLElement||e instanceof Me(e).HTMLElement}function je(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Me(e).ShadowRoot)}function Fe(e){const{overflow:t,overflowX:i,overflowY:o,display:n}=Ye(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(n)}function Ve(e){return["table","td","th"].includes(De(e))}function qe(e){const t=We(),i=Ye(e);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((e=>(i.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(i.contain||"").includes(e)))}function We(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ke(e){return["html","body","#document"].includes(De(e))}function Ye(e){return Me(e).getComputedStyle(e)}function Qe(e){return ze(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function tt(e){if("html"===De(e))return e;const t=e.assignedSlot||e.parentNode||je(e)&&e.host||Ie(e);return je(t)?t.host:t}function lt(e){const t=tt(e);return Ke(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ne(t)&&Fe(t)?t:lt(t)}function dt(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);const n=lt(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),a=Me(n);return r?t.concat(a,a.visualViewport||[],Fe(n)?n:[],a.frameElement&&i?dt(a.frameElement):[]):t.concat(n,dt(n,[],i))}function ht(e){const t=Ye(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const n=Ne(e),r=n?e.offsetWidth:i,a=n?e.offsetHeight:o,l=de(i)!==r||de(o)!==a;return l&&(i=r,o=a),{width:i,height:o,$:l}}function pt(e){return ze(e)?e:e.contextElement}function ut(e){const t=pt(e);if(!Ne(t))return he(1);const i=t.getBoundingClientRect(),{width:o,height:n,$:r}=ht(t);let a=(r?de(i.width):i.width)/o,l=(r?de(i.height):i.height)/n;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const ft=he(0);function mt(e){const t=Me(e);return We()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ft}function bt(e,t,i,o){void 0===t&&(t=!1),void 0===i&&(i=!1);const n=e.getBoundingClientRect(),r=pt(e);let a=he(1);t&&(o?ze(o)&&(a=ut(o)):a=ut(e));const l=function(e,t,i){return void 0===t&&(t=!1),!(!i||t&&i!==Me(e))&&t}(r,i,o)?mt(r):he(0);let c=(n.left+l.x)/a.x,d=(n.top+l.y)/a.y,h=n.width/a.x,p=n.height/a.y;if(r){const e=Me(r),t=o&&ze(o)?Me(o):o;let i=e.frameElement;for(;i&&o&&t!==e;){const e=ut(i),t=i.getBoundingClientRect(),o=Ye(i),n=t.left+(i.clientLeft+parseFloat(o.paddingLeft))*e.x,r=t.top+(i.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,d*=e.y,h*=e.x,p*=e.y,c+=n,d+=r,i=Me(i).frameElement}}return Ee({width:h,height:p,x:c,y:d})}function vt(e){return bt(Ie(e)).left+Qe(e).scrollLeft}function yt(e,t,i){let o;if("viewport"===t)o=function(e,t){const i=Me(e),o=Ie(e),n=i.visualViewport;let r=o.clientWidth,a=o.clientHeight,l=0,c=0;if(n){r=n.width,a=n.height;const e=We();(!e||e&&"fixed"===t)&&(l=n.offsetLeft,c=n.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,i);else if("document"===t)o=function(e){const t=Ie(e),i=Qe(e),o=e.ownerDocument.body,n=ce(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=ce(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+vt(e);const l=-i.scrollTop;return"rtl"===Ye(o).direction&&(a+=ce(t.clientWidth,o.clientWidth)-n),{width:n,height:r,x:a,y:l}}(Ie(e));else if(ze(t))o=function(e,t){const i=bt(e,!0,"fixed"===t),o=i.top+e.clientTop,n=i.left+e.clientLeft,r=Ne(e)?ut(e):he(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:n*r.x,y:o*r.y}}(t,i);else{const i=mt(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return Ee(o)}function wt(e,t){const i=tt(e);return!(i===t||!ze(i)||Ke(i))&&("fixed"===Ye(i).position||wt(i,t))}function xt(e,t,i){const o=Ne(t),n=Ie(t),r="fixed"===i,a=bt(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=he(0);if(o||!o&&!r)if(("body"!==De(t)||Fe(n))&&(l=Qe(t)),o){const e=bt(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else n&&(c.x=vt(n));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function _t(e,t){return Ne(e)&&"fixed"!==Ye(e).position?t?t(e):e.offsetParent:null}function kt(e,t){const i=Me(e);if(!Ne(e))return i;let o=_t(e,t);for(;o&&Ve(o)&&"static"===Ye(o).position;)o=_t(o,t);return o&&("html"===De(o)||"body"===De(o)&&"static"===Ye(o).position&&!qe(o))?i:o||function(e){let t=tt(e);for(;Ne(t)&&!Ke(t);){if(qe(t))return t;t=tt(t)}return null}(e)||i}const $t={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:i,strategy:o}=e;const n=Ne(i),r=Ie(i);if(i===r)return t;let a={scrollLeft:0,scrollTop:0},l=he(1);const c=he(0);if((n||!n&&"fixed"!==o)&&(("body"!==De(i)||Fe(r))&&(a=Qe(i)),Ne(i))){const e=bt(i);l=ut(i),c.x=e.x+i.clientLeft,c.y=e.y+i.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-a.scrollLeft*l.x+c.x,y:t.y*l.y-a.scrollTop*l.y+c.y}},getDocumentElement:Ie,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:n}=e;const r=[..."clippingAncestors"===i?function(e,t){const i=t.get(e);if(i)return i;let o=dt(e,[],!1).filter((e=>ze(e)&&"body"!==De(e))),n=null;const r="fixed"===Ye(e).position;let a=r?tt(e):e;for(;ze(a)&&!Ke(a);){const t=Ye(a),i=qe(a);i||"fixed"!==t.position||(n=null),(r?!i&&!n:!i&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||Fe(a)&&!i&&wt(e,a))?o=o.filter((e=>e!==a)):n=t,a=tt(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=r[0],l=r.reduce(((e,i)=>{const o=yt(t,i,n);return e.top=ce(o.top,e.top),e.right=le(o.right,e.right),e.bottom=le(o.bottom,e.bottom),e.left=ce(o.left,e.left),e}),yt(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:kt,getElementRects:async function(e){let{reference:t,floating:i,strategy:o}=e;const n=this.getOffsetParent||kt,r=this.getDimensions;return{reference:xt(t,await n(i),o),floating:{x:0,y:0,...await r(i)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return ht(e)},getScale:ut,isElement:ze,isRTL:function(e){return"rtl"===Ye(e).direction}},Ct=n`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var At=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ae,re,Ct]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Te(6),Re(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:n}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...c}=ge(t,e),d={x:i,y:o},h=await Oe(e,c),p=we(me(n)),u=ve(p);let f=d[u],g=d[p];if(r){const e="y"===u?"bottom":"right";f=fe(f+h["y"===u?"top":"left"],f,f-h[e])}if(a){const e="y"===p?"bottom":"right";g=fe(g+h["y"===p?"top":"left"],g,g-h[e])}const m=l.fn({...e,[u]:f,[p]:g});return{...m,data:{x:m.x-i,y:m.y-o}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:n,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:h=0}=ge(e,t)||{};if(null==d)return{};const p=Ae(h),u={x:i,y:o},f=_e(n),g=ye(f),m=await a.getDimensions(d),b="y"===f,v=b?"top":"left",y=b?"bottom":"right",w=b?"clientHeight":"clientWidth",x=r.reference[g]+r.reference[f]-u[f]-r.floating[g],_=u[f]-r.reference[f],k=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let C=k?k[w]:0;C&&await(null==a.isElement?void 0:a.isElement(k))||(C=l.floating[w]||r.floating[g]);const A=x/2-_/2,S=C/2-m[g]/2-1,E=le(p[v],S),P=le(p[y],S),O=E,R=C-m[g]-P,T=C/2-m[g]/2+A,D=fe(O,T,R),M=!c.arrow&&null!=be(n)&&T!=D&&r.reference[g]/2-(T<O?E:P)-m[g]/2<0,L=M?T<O?T-O:T-R:0;return{[f]:u[f]+L,data:{[f]:D,centerOffset:T-D-L,...M&&{alignmentOffset:L}},reset:M}}}))({element:this.arrowEl})),await((e,t,i)=>{const o=new Map,n={platform:$t,...i},r={...n.platform,_c:o};return(async(e,t,i)=>{const{placement:o="bottom",strategy:n="absolute",middleware:r=[],platform:a}=i,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:p}=Pe(d,o,c),u=o,f={},g=0;for(let i=0;i<l.length;i++){const{name:r,fn:m}=l[i],{x:b,y:v,data:y,reset:w}=await m({x:h,y:p,initialPlacement:o,placement:u,strategy:n,middlewareData:f,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=b?b:h,p=null!=v?v:p,f={...f,[r]:{...f[r],...y}},w&&g<=50&&(g++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(d=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):w.rects),({x:h,y:p}=Pe(d,u,c))),i=-1)}return{x:h,y:p,placement:u,strategy:n,middlewareData:f}})(e,t,{...n,platform:r})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:i,middlewareData:o})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=o.arrow?.x,t=o.arrow?.y,n={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[n]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?F`<div part="arrow" class="arrow"></div>`:""}render(){return F`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}At([ie({type:Boolean})],xe.prototype,"arrow",void 0),At([ie({type:Boolean})],xe.prototype,"hover",void 0),At([ie()],xe.prototype,"placement",void 0),At([ie({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),At([ie({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),At([ne('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),At([ne(".popover")],xe.prototype,"popoverEl",void 0),At([ne(".arrow")],xe.prototype,"arrowEl",void 0),At([ie({state:!0,attribute:!1})],xe.prototype,"open",void 0);const St=n`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ae,re,St]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return F`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([ie({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);const Et=n`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=Et}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return F`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([ie({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);const Pt=new Set(["children","localName","ref","style","className"]),Ot=new WeakMap,Rt=(e,t,i,o,n)=>{const r=n?.[t];void 0===r||i===o?(e[t]=i,null==i&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,i)=>{let o=Ot.get(e);void 0===o&&Ot.set(e,o=new Map);let n=o.get(t);void 0!==i?void 0===n?(o.set(t,n={handleEvent:i}),e.addEventListener(t,n)):n.handleEvent=i:void 0!==n&&(o.delete(t),e.removeEventListener(t,n))})(e,r,i)},Tt=({react:e,tagName:t,elementClass:i,events:o,displayName:n})=>{const r=new Set(Object.keys(o??{})),a=e.forwardRef(((n,a)=>{const l=e.useRef(null),c=e.useRef(null),d={},h={};for(const[e,t]of Object.entries(n))Pt.has(e)?d["className"===e?"class":e]=t:r.has(e)||e in i.prototype?h[e]=t:d[e]=t;return e.useLayoutEffect((()=>{if(null!==c.current){for(const e in h)Rt(c.current,e,n[e],l.current?l.current[e]:void 0,o);l.current=n}})),e.useLayoutEffect((()=>{c.current?.removeAttribute("defer-hydration")}),[]),d.suppressHydrationWarning=!0,e.createElement(t,{...d,ref:e=>{c.current=e,"function"==typeof a?a(e):null!==a&&(a.current=e)}})}));return a.displayName=n??i.name,a};var Dt=Ze(294);const Mt=Tt({react:Dt,tagName:Se.elementName,elementClass:Se}),Lt=n`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,It=n`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Ut=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class He extends gt{static{this.styles=[ae,Lt]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?F`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:F`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Ut([ie()],He.prototype,"src",void 0),Ut([ie()],He.prototype,"indicator",void 0);class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[ae,It]}render(){return F`<slot class="avatar-group" part="base"></slot>`}}const Bt=Tt({react:Dt,tagName:He.elementName,elementClass:He}),zt=Tt({react:Dt,tagName:Le.elementName,elementClass:Le}),Nt=n`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Nt}static{this.elementName="gk-badge"}render(){return F`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([ie()],Be.prototype,"variant",void 0);const jt=Tt({react:Dt,tagName:Be.elementName,elementClass:Be}),Ht=n`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var Ft=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Ht}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return F`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}Ft([ie({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),Ft([ie({reflect:!0})],Ge.prototype,"type",void 0),Ft([ie()],Ge.prototype,"variant",void 0);const Vt=Tt({react:Dt,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),qt=n`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Wt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ae,re,qt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return F`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>F`<span class="complexity-indicator__box"></span>`))}</div>`}}Wt([ie({type:Number})],Je.prototype,"level",void 0),Wt([ie()],Je.prototype,"label",void 0);const Gt=Tt({react:Dt,tagName:Je.elementName,elementClass:Je}),Kt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Yt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Zt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Xt;const Jt=new Map;let Qt,ei,ti;new Map;const ii=["th","st","nd","rd"];function oi(e){const t=e%100;return`${e}${ii[(t-20)%10]??ii[t]??ii[0]}`}var ni=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ae]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(e,t){const i=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,o,n]of Zt){const r=Math.abs(i);if(r>=t||1e3===t)return null==Xt&&(null!=ti?Xt=ti.resolvedOptions().locale:null!=ei?Xt=ei.resolvedOptions().locale:(ti=new Intl.RelativeTimeFormat(Qt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Xt=ti.resolvedOptions().locale)),"en"===Xt||Xt?.startsWith("en-")?`${Math.round(r/o)}${n}`:(null==ti&&(ti=new Intl.RelativeTimeFormat(Qt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),ti.format(Math.round(i/o),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return F`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,i,o=!0){const n=`${i??""}:${t=t??void 0}`;let r=Jt.get(n);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Yt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:i}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:i||void 0}}const i={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Kt))if(null!=t)for(const e in t){const o=t[e];if(null!=o)switch(e){case"year":i.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric"}break;case"day":i.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow"}break;case"hour":i.hour=2===o.length?"2-digit":"numeric",i.hour12="hh"===o||"h"===o;break;case"minute":i.minute=2===o.length?"2-digit":"numeric";break;case"second":i.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=2===o.length?"long":"short"}}return i}(t);let a;a=null==i?Qt:"system"===i?void 0:[i],r=new Intl.DateTimeFormat(a,e),o&&Jt.set(n,r)}if(null==t||Yt.test(t))return r.format(e);function a(e){const t=`${i??""}:time:${e}`;let n=Jt.get(t);if(null==n){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==i?Qt:"system"===i?void 0:[i],n=new Intl.DateTimeFormat(a,r),o&&Jt.set(t,n)}return n}const l=r.formatToParts(e);return t.replace(Kt,((t,i,o,n,r,c,d,h,p,u,f,g,m,b,v)=>{if(null!=i)return i.substring(1,i.length-1);for(const t in v){const i=v[t];if(null==i)continue;const o=l.find((e=>e.type===t));if("Do"===i&&"day"===o?.type)return oi(Number(o.value));if("a"===i&&"dayPeriod"===o?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??o)?.value??""}`}return o?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}ni([ie({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],po.prototype,"date",void 0),ni([ie()],po.prototype,"format",void 0);const ri=Tt({react:Dt,tagName:po.elementName,elementClass:po}),si=n`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,ai=n`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,li=n`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class yo extends gt{static{this.styles=[ae,li]}static{this.elementName="gk-focus-item"}render(){return F`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class vo extends gt{static{this.styles=[ae,ai]}static{this.elementName="gk-focus-row"}render(){return F`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class bo extends gt{static{this.styles=[ae,ai,li,si]}static{this.elementName="gk-focus-container"}render(){return F`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const ci=Tt({react:Dt,tagName:yo.elementName,elementClass:yo}),di=Tt({react:Dt,tagName:vo.elementName,elementClass:vo}),hi=Tt({react:Dt,tagName:bo.elementName,elementClass:bo});class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const pi=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.it)e in t||(i.remove(e),this.it.delete(e));for(const e in t){const o=!!t[e];o===this.it.has(e)||this.st?.has(e)||(o?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return q}}),ui=e=>e??W,fi=n`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var gi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[ae,re,fi]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return F`<div class="field"><label class="${pi({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${pi({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${ui(this.autocomplete)}" autocorrect="${ui(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${ui(this.name)}" part="input" placeholder="${ui(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}}gi([ie()],Ro.prototype,"autocomplete",void 0),gi([ie()],Ro.prototype,"autocorrect",void 0),gi([ie({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),gi([ie()],Ro.prototype,"label",void 0),gi([ie({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),gi([ie()],Ro.prototype,"name",void 0),gi([ie()],Ro.prototype,"placeholder",void 0),gi([ie({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),gi([ie({reflect:!0})],Ro.prototype,"type",void 0),gi([ie()],Ro.prototype,"value",void 0);const mi=n`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,bi=n`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,vi=n`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ae,mi]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const i=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(i)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),i=t.length;let o=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?o=(o-1+i)%i:"ArrowDown"===e.key?o=(o+1)%i:"Home"===e.key?o=0:"End"===e.key&&(o=i-1),this._setCurrentItem(t[o]),t[o].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return F`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([function(e){return(t,i)=>{const{slot:o,selector:n}=e??{},r="slot"+(o?`[name=${o}]`:":not([name])");return oe(t,i,{get(){const t=this.renderRoot?.querySelector(r),i=t?.assignedElements(e)??[];return void 0===n?i:i.filter((e=>e.matches(n)))}})}}({flatten:!0})],Mo.prototype,"slotChildren",void 0);class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ae,bi]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return F`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([ie({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);class Ho extends gt{static{this.styles=[ae,vi]}static{this.elementName="gk-menu-label"}render(){return F`<slot class="menu-label" part="base"></slot>`}}const yi=Tt({react:Dt,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),wi=Tt({react:Dt,tagName:Do.elementName,elementClass:Do}),xi=Tt({react:Dt,tagName:Ho.elementName,elementClass:Ho}),_i=n`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Bo extends gt{static{this.styles=[ae,_i]}static{this.elementName="gk-tag"}render(){return F`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);r>3&&a&&Object.defineProperty(t,i,a)}([ie()],Bo.prototype,"variant",void 0);const ki=Tt({react:Dt,tagName:Bo.elementName,elementClass:Bo}),$i=Tt({react:Dt,tagName:$e.elementName,elementClass:$e});function Ci(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Ci(...e.components))}))}})();var Qe=Xe.qE,tt=Xe.Ct,lt=Xe.zx,dt=Xe.v2,ht=Xe.sN,pt=Xe.J2,ut=Xe.fW;const ft=globalThis,mt=ft.ShadowRoot&&(void 0===ft.ShadyCSS||ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bt=Symbol(),vt=new WeakMap;class css_tag_n{constructor(e,t,i){if(this._$cssResult$=!0,i!==bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(mt&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=vt.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&vt.set(t,e))}return e}toString(){return this.cssText}}const yt=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,bt),wt=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new css_tag_n(i,e,bt)},xt=mt?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return yt(t)})(e):e,{is:_t,defineProperty:kt,getOwnPropertyDescriptor:$t,getOwnPropertyNames:Ct,getOwnPropertySymbols:At,getPrototypeOf:St}=Object,Et=globalThis,Pt=Et.trustedTypes,Ot=Pt?Pt.emptyScript:"",Rt=Et.reactiveElementPolyfillSupport,Tt=(e,t)=>e,Dt={toAttribute(e,t){switch(t){case Boolean:e=e?Ot:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},Mt=(e,t)=>!_t(e,t),Lt={attribute:!0,type:String,converter:Dt,reflect:!1,hasChanged:Mt};Symbol.metadata??=Symbol("metadata"),Et.litPropertyMetadata??=new WeakMap;class reactive_element_b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Lt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&kt(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:n}=$t(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const r=o?.call(this);n.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Lt}static _$Ei(){if(this.hasOwnProperty(Tt("elementProperties")))return;const e=St(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Tt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tt("properties"))){const e=this.properties,t=[...Ct(e),...At(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(xt(e))}else void 0!==e&&t.push(xt(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(mt)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),o=ft.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:Dt).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Dt;this._$Em=o,this[o]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??Mt)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}reactive_element_b.elementStyles=[],reactive_element_b.shadowRootOptions={mode:"open"},reactive_element_b[Tt("elementProperties")]=new Map,reactive_element_b[Tt("finalized")]=new Map,Rt?.({ReactiveElement:reactive_element_b}),(Et.reactiveElementVersions??=[]).push("2.0.4");const It=globalThis,Ut=It.trustedTypes,Bt=Ut?Ut.createPolicy("lit-html",{createHTML:e=>e}):void 0,zt="$lit$",Nt=`lit$${Math.random().toFixed(9).slice(2)}$`,jt="?"+Nt,Ht=`<${jt}>`,Ft=document,Vt=()=>Ft.createComment(""),qt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Wt=Array.isArray,Gt=e=>Wt(e)||"function"==typeof e?.[Symbol.iterator],Kt="[ \t\n\f\r]",Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zt=/-->/g,Xt=/>/g,Jt=RegExp(`>|${Kt}(?:([^\\s"'>=/]+)(${Kt}*=${Kt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Qt=/'/g,ei=/"/g,ti=/^(?:script|style|textarea|title)$/i,ii=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),oi=ii(1),ni=(ii(2),Symbol.for("lit-noChange")),ri=Symbol.for("lit-nothing"),si=new WeakMap,ai=Ft.createTreeWalker(Ft,129);function li(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Bt?Bt.createHTML(t):t}const ci=(e,t)=>{const i=e.length-1,o=[];let n,r=2===t?"<svg>":"",a=Yt;for(let t=0;t<i;t++){const i=e[t];let l,c,d=-1,h=0;for(;h<i.length&&(a.lastIndex=h,c=a.exec(i),null!==c);)h=a.lastIndex,a===Yt?"!--"===c[1]?a=Zt:void 0!==c[1]?a=Xt:void 0!==c[2]?(ti.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=Jt):void 0!==c[3]&&(a=Jt):a===Jt?">"===c[0]?(a=n??Yt,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?Jt:'"'===c[3]?ei:Qt):a===ei||a===Qt?a=Jt:a===Zt||a===Xt?a=Yt:(a=Jt,n=void 0);const p=a===Jt&&e[t+1].startsWith("/>")?" ":"";r+=a===Yt?i+Ht:d>=0?(o.push(l),i.slice(0,d)+zt+i.slice(d)+Nt+p):i+Nt+(-2===d?t:p)}return[li(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class V{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,d]=ci(e,t);if(this.el=V.createElement(c,i),ai.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ai.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(zt)){const t=d[r++],i=o.getAttribute(e).split(Nt),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?lit_html_k:"?"===a[1]?lit_html_H:"@"===a[1]?lit_html_I:lit_html_R}),o.removeAttribute(e)}else e.startsWith(Nt)&&(l.push({type:6,index:n}),o.removeAttribute(e));if(ti.test(o.tagName)){const e=o.textContent.split(Nt),t=e.length-1;if(t>0){o.textContent=Ut?Ut.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],Vt()),ai.nextNode(),l.push({type:2,index:++n});o.append(e[t],Vt())}}}else if(8===o.nodeType)if(o.data===jt)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(Nt,e+1));)l.push({type:7,index:n}),e+=Nt.length-1}n++}}static createElement(e,t){const i=Ft.createElement("template");return i.innerHTML=e,i}}function di(e,t,i=e,o){if(t===ni)return t;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const r=qt(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(t=di(e,n._$AS(e,t.values),n,o)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??Ft).importNode(t,!0);ai.currentNode=o;let n=ai.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new lit_html_M(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new lit_html_L(n,this,e)),this._$AV.push(t),l=i[++a]}r!==l?.index&&(n=ai.nextNode(),r++)}return ai.currentNode=Ft,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class lit_html_M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=ri,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=di(this,e,t),qt(e)?e===ri||null==e||""===e?(this._$AH!==ri&&this._$AR(),this._$AH=ri):e!==this._$AH&&e!==ni&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Gt(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==ri&&qt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ft.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=V.createElement(li(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new lit_html_S(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=si.get(e.strings);return void 0===t&&si.set(e.strings,t=new V(e)),t}k(e){Wt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new lit_html_M(this.S(Vt()),this.S(Vt()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class lit_html_R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=ri,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ri}_$AI(e,t=this,i,o){const n=this.strings;let r=!1;if(void 0===n)e=di(this,e,t,0),r=!qt(e)||e!==this._$AH&&e!==ni,r&&(this._$AH=e);else{const o=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=di(this,o[i+a],t,a),l===ni&&(l=this._$AH[a]),r||=!qt(l)||l!==this._$AH[a],l===ri?e=ri:e!==ri&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===ri?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lit_html_k extends lit_html_R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ri?void 0:e}}class lit_html_H extends lit_html_R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ri)}}class lit_html_I extends lit_html_R{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){if((e=di(this,e,t,0)??ri)===ni)return;const i=this._$AH,o=e===ri&&i!==ri||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==ri&&(i===ri||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class lit_html_L{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){di(this,e)}}const hi={P:zt,A:Nt,C:jt,M:1,L:ci,R:lit_html_S,D:Gt,V:di,I:lit_html_M,H:lit_html_R,N:lit_html_H,U:lit_html_I,B:lit_html_k,F:lit_html_L},pi=It.litHtmlPolyfillSupport;pi?.(V,lit_html_M),(It.litHtmlVersions??=[]).push("3.1.4");class lit_element_s extends reactive_element_b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let n=o._$litPart$;if(void 0===n){const e=i?.renderBefore??null;o._$litPart$=n=new lit_html_M(t.insertBefore(Vt(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ni}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const ui=globalThis.litElementPolyfillSupport;ui?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.6");const fi=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},gi={attribute:!0,type:String,converter:Dt,reflect:!1,hasChanged:Mt},mi=(e=gi,t,i)=>{const{kind:o,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];t.call(this,i),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+o)};function bi(e){return(t,i)=>"object"==typeof i?mi(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function vi(e){return bi({...e,state:!0,attribute:!1})}const yi=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function wi(e,t){return(i,o,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?i:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return yi(i,o,{get(){let i=e.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return yi(i,o,{get(){return r(this)}})}}function xi(e){return(t,i)=>{const{slot:o,selector:n}=e??{},r="slot"+(o?`[name=${o}]`:":not([name])");return yi(t,i,{get(){const t=this.renderRoot?.querySelector(r),i=t?.assignedElements(e)??[];return void 0===n?i:i.filter((e=>e.matches(n)))}})}}function _i(e,t,i){return e?t(e):i?.(e)}const ki=new WeakMap;class GlElement extends lit_element_s{emit(e,t,i){const o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(o),o}update(e){const t=ki.get(this.constructor);if(null!=t)for(const{keys:i,method:o,afterFirstUpdate:n}of t){if(n&&!this.hasUpdated)continue;const t=i.filter((t=>e.has(t)));t.length&&o.call(this,t)}super.update(e)}}function*$i(e,t){if(void 0!==e){let i=0;for(const o of e)yield t(o,i++)}}const Ci=1,Ai=2,Si=e=>(...t)=>({_$litDirective$:e,values:t});class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:Ei}=hi,Pi=()=>document.createComment(""),Oi=(e,t,i)=>{const o=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(Pi(),n),r=o.insertBefore(Pi(),n);i=new Ei(t,r,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,a=r!==e;if(a){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==n||a){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,n),e=t}}}return i},Ri=(e,t,i=e)=>(e._$AI(t,i),e),Ti={},Di=e=>{e._$AP?.(!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const e=t.nextSibling;t.remove(),t=e}},Mi=(e,t,i)=>{const o=new Map;for(let n=t;n<=i;n++)o.set(e[n],n);return o},Li=Si(class extends directive_i{constructor(e){if(super(e),e.type!==Ai)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);const n=[],r=[];let a=0;for(const t of e)n[a]=o?o(t,a):a,r[a]=i(t,a),a++;return{values:r,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,o]){const n=(e=>e._$AH)(e),{values:r,keys:a}=this.dt(t,i,o);if(!Array.isArray(n))return this.ut=a,r;const l=this.ut??=[],c=[];let d,h,p=0,u=n.length-1,f=0,g=r.length-1;for(;p<=u&&f<=g;)if(null===n[p])p++;else if(null===n[u])u--;else if(l[p]===a[f])c[f]=Ri(n[p],r[f]),p++,f++;else if(l[u]===a[g])c[g]=Ri(n[u],r[g]),u--,g--;else if(l[p]===a[g])c[g]=Ri(n[p],r[g]),Oi(e,c[g+1],n[p]),p++,g--;else if(l[u]===a[f])c[f]=Ri(n[u],r[f]),Oi(e,n[p],n[u]),u--,f++;else if(void 0===d&&(d=Mi(a,f,g),h=Mi(l,p,u)),d.has(l[p]))if(d.has(l[u])){const t=h.get(a[f]),i=void 0!==t?n[t]:null;if(null===i){const t=Oi(e,n[p]);Ri(t,r[f]),c[f]=t}else c[f]=Ri(i,r[f]),Oi(e,n[p],i),n[t]=null;f++}else Di(n[u]),u--;else Di(n[p]),p++;for(;f<=g;){const t=Oi(e,c[g+1]);Ri(t,r[f]),c[f++]=t}for(;p<=u;){const e=n[p++];null!==e&&Di(e)}return this.ut=a,((e,t=Ti)=>{e._$AH=t})(e,c),ni}});class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ri,e.type!==Ai)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ri||null==e)return this._t=void 0,this.it=e;if(e===ni)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const Ii=Si(unsafe_html_e);function Ui(e,t,i,o=!1,n){const r={name:"",relativePath:"",children:new Map,descendants:[]};let a=e.reduce(((e,o)=>{let n=e,r="";for(const e of t(o)){r=i(r,e),void 0===n.children&&(n.children=new Map);let t=n.children.get(e);void 0===t&&(t={name:e,relativePath:r,parent:n,children:void 0,descendants:void 0},n.children.set(e,t)),void 0===n.descendants&&(n.descendants=[]),n.descendants.push(o),n=t}return n.value=o,e}),r);return o&&(a=Bi(a,i,!0,n)),a}function Bi(e,t,i=!0,o){if(void 0===e.children)return e;const n=[...e.children.values()];for(const e of n)Bi(e,t,!1,o);if(!i&&1===n.length){const i=n[0];(void 0===i.value||o?.(i.value))&&(e.name=t(e.name,i.name),e.relativePath=i.relativePath,e.children=i.children,e.descendants=i.descendants,e.value=i.value)}return e}function zi(e,t){if(null==e)return 0;let i=0;for(const o of e)i+=t(o);return i}var Ni=Object.defineProperty,ji=Object.defineProperties,Hi=Object.getOwnPropertyDescriptor,Fi=Object.getOwnPropertyDescriptors,Vi=Object.getOwnPropertySymbols,qi=Object.prototype.hasOwnProperty,Wi=Object.prototype.propertyIsEnumerable,Gi=(e,t,i)=>t in e?Ni(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Ki=(e,t)=>{for(var i in t||(t={}))qi.call(t,i)&&Gi(e,i,t[i]);if(Vi)for(var i of Vi(t))Wi.call(t,i)&&Gi(e,i,t[i]);return e},Yi=(e,t)=>ji(e,Fi(t)),Zi=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Hi(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ni(t,i,r),r},Xi=new Map,Ji=new WeakMap;function Qi(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function eo(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function to(e,t){Xi.set(e,Qi(t))}function io(e,t,i){const o=Ji.get(e);if(null==o?void 0:o[t])return eo(o[t],i.dir);const n=Xi.get(t);return n?eo(n,i.dir):{keyframes:[],options:{duration:0}}}var oo=wt`
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
`,no=wt`
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
`,ro=wt`
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
`,so=class extends lit_element_s{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const i=new CustomEvent(e,Ki({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o)return void customElements.define(e,class extends t{},i);let n=" (unknown version)",r=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in o&&o.version&&(r=" v"+o.version)}};so.version="2.15.1",so.dependencies={},Zi([bi()],so.prototype,"dir",2),Zi([bi()],so.prototype,"lang",2);const ao=Math.min,lo=Math.max,co=Math.round,ho=Math.floor,uo=e=>({x:e,y:e}),fo={left:"right",right:"left",bottom:"top",top:"bottom"},go={start:"end",end:"start"};function mo(e,t,i){return lo(e,ao(t,i))}function wo(e,t){return"function"==typeof e?e(t):e}function xo(e){return e.split("-")[0]}function _o(e){return e.split("-")[1]}function ko(e){return"x"===e?"y":"x"}function Co(e){return"y"===e?"height":"width"}function Ao(e){return["top","bottom"].includes(xo(e))?"y":"x"}function So(e){return ko(Ao(e))}function Eo(e){return e.replace(/start|end/g,(e=>go[e]))}function Po(e){return e.replace(/left|right|bottom|top/g,(e=>fo[e]))}function Oo(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function To(e){const{x:t,y:i,width:o,height:n}=e;return{width:o,height:n,top:i,left:t,right:t+o,bottom:i+n,x:t,y:i}}function Lo(e,t,i){let{reference:o,floating:n}=e;const r=Ao(t),a=So(t),l=Co(a),c=xo(t),d="y"===r,h=o.x+o.width/2-n.width/2,p=o.y+o.height/2-n.height/2,u=o[l]/2-n[l]/2;let f;switch(c){case"top":f={x:h,y:o.y-n.height};break;case"bottom":f={x:h,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:p};break;case"left":f={x:o.x-n.width,y:p};break;default:f={x:o.x,y:o.y}}switch(_o(t)){case"start":f[a]-=u*(i&&d?-1:1);break;case"end":f[a]+=u*(i&&d?-1:1)}return f}async function Io(e,t){var i;void 0===t&&(t={});const{x:o,y:n,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:u=!1,padding:f=0}=wo(t,e),g=Oo(f),m=l[u?"floating"===p?"reference":"floating":p],b=To(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(m)))||i?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:c})),v="floating"===p?{x:o,y:n,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),w=await(null==r.isElement?void 0:r.isElement(y))&&await(null==r.getScale?void 0:r.getScale(y))||{x:1,y:1},x=To(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:c}):v);return{top:(b.top-x.top+g.top)/w.y,bottom:(x.bottom-b.bottom+g.bottom)/w.y,left:(b.left-x.left+g.left)/w.x,right:(x.right-b.right+g.right)/w.x}}function Uo(e){return jo(e)?(e.nodeName||"").toLowerCase():"#document"}function zo(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function No(e){var t;return null==(t=(jo(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function jo(e){return e instanceof Node||e instanceof zo(e).Node}function Fo(e){return e instanceof Element||e instanceof zo(e).Element}function Vo(e){return e instanceof HTMLElement||e instanceof zo(e).HTMLElement}function qo(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof zo(e).ShadowRoot)}function Wo(e){const{overflow:t,overflowX:i,overflowY:o,display:n}=Jo(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(n)}function Go(e){return["table","td","th"].includes(Uo(e))}function Ko(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Yo(e){const t=Zo(),i=Jo(e);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((e=>(i.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(i.contain||"").includes(e)))}function Zo(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Xo(e){return["html","body","#document"].includes(Uo(e))}function Jo(e){return zo(e).getComputedStyle(e)}function Qo(e){return Fo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function en(e){if("html"===Uo(e))return e;const t=e.assignedSlot||e.parentNode||qo(e)&&e.host||No(e);return qo(t)?t.host:t}function tn(e){const t=en(e);return Xo(t)?e.ownerDocument?e.ownerDocument.body:e.body:Vo(t)&&Wo(t)?t:tn(t)}function on(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);const n=tn(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),a=zo(n);return r?t.concat(a,a.visualViewport||[],Wo(n)?n:[],a.frameElement&&i?on(a.frameElement):[]):t.concat(n,on(n,[],i))}function nn(e){const t=Jo(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const n=Vo(e),r=n?e.offsetWidth:i,a=n?e.offsetHeight:o,l=co(i)!==r||co(o)!==a;return l&&(i=r,o=a),{width:i,height:o,$:l}}function rn(e){return Fo(e)?e:e.contextElement}function sn(e){const t=rn(e);if(!Vo(t))return uo(1);const i=t.getBoundingClientRect(),{width:o,height:n,$:r}=nn(t);let a=(r?co(i.width):i.width)/o,l=(r?co(i.height):i.height)/n;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const an=uo(0);function ln(e){const t=zo(e);return Zo()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:an}function cn(e,t,i,o){void 0===t&&(t=!1),void 0===i&&(i=!1);const n=e.getBoundingClientRect(),r=rn(e);let a=uo(1);t&&(o?Fo(o)&&(a=sn(o)):a=sn(e));const l=function(e,t,i){return void 0===t&&(t=!1),!(!i||t&&i!==zo(e))&&t}(r,i,o)?ln(r):uo(0);let c=(n.left+l.x)/a.x,d=(n.top+l.y)/a.y,h=n.width/a.x,p=n.height/a.y;if(r){const e=zo(r),t=o&&Fo(o)?zo(o):o;let i=e,n=i.frameElement;for(;n&&o&&t!==i;){const e=sn(n),t=n.getBoundingClientRect(),o=Jo(n),r=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,d*=e.y,h*=e.x,p*=e.y,c+=r,d+=a,i=zo(n),n=i.frameElement}}return To({width:h,height:p,x:c,y:d})}function dn(e){return cn(No(e)).left+Qo(e).scrollLeft}function hn(e,t,i){let o;if("viewport"===t)o=function(e,t){const i=zo(e),o=No(e),n=i.visualViewport;let r=o.clientWidth,a=o.clientHeight,l=0,c=0;if(n){r=n.width,a=n.height;const e=Zo();(!e||e&&"fixed"===t)&&(l=n.offsetLeft,c=n.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,i);else if("document"===t)o=function(e){const t=No(e),i=Qo(e),o=e.ownerDocument.body,n=lo(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=lo(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+dn(e);const l=-i.scrollTop;return"rtl"===Jo(o).direction&&(a+=lo(t.clientWidth,o.clientWidth)-n),{width:n,height:r,x:a,y:l}}(No(e));else if(Fo(t))o=function(e,t){const i=cn(e,!0,"fixed"===t),o=i.top+e.clientTop,n=i.left+e.clientLeft,r=Vo(e)?sn(e):uo(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:n*r.x,y:o*r.y}}(t,i);else{const i=ln(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return To(o)}function pn(e,t){const i=en(e);return!(i===t||!Fo(i)||Xo(i))&&("fixed"===Jo(i).position||pn(i,t))}function un(e,t,i){const o=Vo(t),n=No(t),r="fixed"===i,a=cn(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=uo(0);if(o||!o&&!r)if(("body"!==Uo(t)||Wo(n))&&(l=Qo(t)),o){const e=cn(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else n&&(c.x=dn(n));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function fn(e){return"static"===Jo(e).position}function gn(e,t){return Vo(e)&&"fixed"!==Jo(e).position?t?t(e):e.offsetParent:null}function mn(e,t){const i=zo(e);if(Ko(e))return i;if(!Vo(e)){let t=en(e);for(;t&&!Xo(t);){if(Fo(t)&&!fn(t))return t;t=en(t)}return i}let o=gn(e,t);for(;o&&Go(o)&&fn(o);)o=gn(o,t);return o&&Xo(o)&&fn(o)&&!Yo(o)?i:o||function(e){let t=en(e);for(;Vo(t)&&!Xo(t);){if(Ko(t))return null;if(Yo(t))return t;t=en(t)}return null}(e)||i}const bn={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:n}=e;const r="fixed"===n,a=No(o),l=!!t&&Ko(t.floating);if(o===a||l&&r)return i;let c={scrollLeft:0,scrollTop:0},d=uo(1);const h=uo(0),p=Vo(o);if((p||!p&&!r)&&(("body"!==Uo(o)||Wo(a))&&(c=Qo(o)),Vo(o))){const e=cn(o);d=sn(o),h.x=e.x+o.clientLeft,h.y=e.y+o.clientTop}return{width:i.width*d.x,height:i.height*d.y,x:i.x*d.x-c.scrollLeft*d.x+h.x,y:i.y*d.y-c.scrollTop*d.y+h.y}},getDocumentElement:No,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:n}=e;const r=[..."clippingAncestors"===i?Ko(t)?[]:function(e,t){const i=t.get(e);if(i)return i;let o=on(e,[],!1).filter((e=>Fo(e)&&"body"!==Uo(e))),n=null;const r="fixed"===Jo(e).position;let a=r?en(e):e;for(;Fo(a)&&!Xo(a);){const t=Jo(a),i=Yo(a);i||"fixed"!==t.position||(n=null),(r?!i&&!n:!i&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||Wo(a)&&!i&&pn(e,a))?o=o.filter((e=>e!==a)):n=t,a=en(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=r[0],l=r.reduce(((e,i)=>{const o=hn(t,i,n);return e.top=lo(o.top,e.top),e.right=ao(o.right,e.right),e.bottom=ao(o.bottom,e.bottom),e.left=lo(o.left,e.left),e}),hn(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:mn,getElementRects:async function(e){const t=this.getOffsetParent||mn,i=this.getDimensions,o=await i(e.floating);return{reference:un(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:i}=nn(e);return{width:t,height:i}},getScale:sn,isElement:Fo,isRTL:function(e){return"rtl"===Jo(e).direction}};function vn(e,t,i,o){void 0===o&&(o={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=o,d=rn(e),h=n||r?[...d?on(d):[],...on(t)]:[];h.forEach((e=>{n&&e.addEventListener("scroll",i,{passive:!0}),r&&e.addEventListener("resize",i)}));const p=d&&l?function(e,t){let i,o=null;const n=No(e);function r(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),r();const{left:d,top:h,width:p,height:u}=e.getBoundingClientRect();if(l||t(),!p||!u)return;const f={rootMargin:-ho(h)+"px "+-ho(n.clientWidth-(d+p))+"px "+-ho(n.clientHeight-(h+u))+"px "+-ho(d)+"px",threshold:lo(0,ao(1,c))||1};let g=!0;function m(e){const t=e[0].intersectionRatio;if(t!==c){if(!g)return a();t?a(!1,t):i=setTimeout((()=>{a(!1,1e-7)}),1e3)}g=!1}try{o=new IntersectionObserver(m,{...f,root:n.ownerDocument})}catch(e){o=new IntersectionObserver(m,f)}o.observe(e)}(!0),r}(d,i):null;let u,f=-1,g=null;a&&(g=new ResizeObserver((e=>{let[o]=e;o&&o.target===d&&g&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{var e;null==(e=g)||e.observe(t)}))),i()})),d&&!c&&g.observe(d),g.observe(t));let m=c?cn(e):null;return c&&function t(){const o=cn(e);!m||o.x===m.x&&o.y===m.y&&o.width===m.width&&o.height===m.height||i();m=o,u=requestAnimationFrame(t)}(),i(),()=>{var e;h.forEach((e=>{n&&e.removeEventListener("scroll",i),r&&e.removeEventListener("resize",i)})),null==p||p(),null==(e=g)||e.disconnect(),g=null,c&&cancelAnimationFrame(u)}}const yn=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:n,y:r,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:i,platform:o,elements:n}=e,r=await(null==o.isRTL?void 0:o.isRTL(n.floating)),a=xo(i),l=_o(i),c="y"===Ao(i),d=["left","top"].includes(a)?-1:1,h=r&&c?-1:1,p=wo(t,e);let{mainAxis:u,crossAxis:f,alignmentAxis:g}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&"number"==typeof g&&(f="end"===l?-1*g:g),c?{x:f*h,y:u*d}:{x:u*d,y:f*h}}(t,e);return a===(null==(i=l.offset)?void 0:i.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:n+c.x,y:r+c.y,data:{...c,placement:a}}}}},wn=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:n}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...c}=wo(e,t),d={x:i,y:o},h=await Io(t,c),p=Ao(xo(n)),u=ko(p);let f=d[u],g=d[p];if(r){const e="y"===u?"bottom":"right";f=mo(f+h["y"===u?"top":"left"],f,f-h[e])}if(a){const e="y"===p?"bottom":"right";g=mo(g+h["y"===p?"top":"left"],g,g-h[e])}const m=l.fn({...t,[u]:f,[p]:g});return{...m,data:{x:m.x-i,y:m.y-o}}}}},xn=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:n,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:m=!0,...b}=wo(e,t);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const v=xo(n),y=Ao(l),w=xo(l)===l,x=await(null==c.isRTL?void 0:c.isRTL(d.floating)),_=u||(w||!m?[Po(l)]:function(e){const t=Po(e);return[Eo(e),t,Eo(t)]}(l)),k="none"!==g;!u&&k&&_.push(...function(e,t,i,o){const n=_o(e);let r=function(e,t,i){const o=["left","right"],n=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?n:o:t?o:n;case"left":case"right":return t?r:a;default:return[]}}(xo(e),"start"===i,o);return n&&(r=r.map((e=>e+"-"+n)),t&&(r=r.concat(r.map(Eo)))),r}(l,m,g,x));const C=[l,..._],A=await Io(t,b),S=[];let E=(null==(o=r.flip)?void 0:o.overflows)||[];if(h&&S.push(A[v]),p){const e=function(e,t,i){void 0===i&&(i=!1);const o=_o(e),n=So(e),r=Co(n);let a="x"===n?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Po(a)),[a,Po(a)]}(n,a,x);S.push(A[e[0]],A[e[1]])}if(E=[...E,{placement:n,overflows:S}],!S.every((e=>e<=0))){var P,O;const e=((null==(P=r.flip)?void 0:P.index)||0)+1,t=C[e];if(t)return{data:{index:e,overflows:E},reset:{placement:t}};let i=null==(O=E.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:O.placement;if(!i)switch(f){case"bestFit":{var R;const e=null==(R=E.filter((e=>{if(k){const t=Ao(e.placement);return t===y||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:R[0];e&&(i=e);break}case"initialPlacement":i=l}if(n!==i)return{reset:{placement:i}}}return{}}}},_n=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:i,rects:o,platform:n,elements:r}=t,{apply:a=(()=>{}),...l}=wo(e,t),c=await Io(t,l),d=xo(i),h=_o(i),p="y"===Ao(i),{width:u,height:f}=o.floating;let g,m;"top"===d||"bottom"===d?(g=d,m=h===(await(null==n.isRTL?void 0:n.isRTL(r.floating))?"start":"end")?"left":"right"):(m=d,g="end"===h?"top":"bottom");const b=f-c.top-c.bottom,v=u-c.left-c.right,y=ao(f-c[g],b),w=ao(u-c[m],v),x=!t.middlewareData.shift;let _=y,k=w;if(p?k=h||x?ao(w,v):v:_=h||x?ao(y,b):b,x&&!h){const e=lo(c.left,0),t=lo(c.right,0),i=lo(c.top,0),o=lo(c.bottom,0);p?k=u-2*(0!==e||0!==t?e+t:lo(c.left,c.right)):_=f-2*(0!==i||0!==o?i+o:lo(c.top,c.bottom))}await a({...t,availableWidth:k,availableHeight:_});const C=await n.getDimensions(r.floating);return u!==C.width||f!==C.height?{reset:{rects:!0}}:{}}}},kn=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:n,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:d,padding:h=0}=wo(e,t)||{};if(null==d)return{};const p=Oo(h),u={x:i,y:o},f=So(n),g=Co(f),m=await a.getDimensions(d),b="y"===f,v=b?"top":"left",y=b?"bottom":"right",w=b?"clientHeight":"clientWidth",x=r.reference[g]+r.reference[f]-u[f]-r.floating[g],_=u[f]-r.reference[f],k=await(null==a.getOffsetParent?void 0:a.getOffsetParent(d));let C=k?k[w]:0;C&&await(null==a.isElement?void 0:a.isElement(k))||(C=l.floating[w]||r.floating[g]);const A=x/2-_/2,S=C/2-m[g]/2-1,E=ao(p[v],S),P=ao(p[y],S),O=E,R=C-m[g]-P,T=C/2-m[g]/2+A,D=mo(O,T,R),M=!c.arrow&&null!=_o(n)&&T!==D&&r.reference[g]/2-(T<O?E:P)-m[g]/2<0,L=M?T<O?T-O:T-R:0;return{[f]:u[f]+L,data:{[f]:D,centerOffset:T-D-L,...M&&{alignmentOffset:L}},reset:M}}}),$n=(e,t,i)=>{const o=new Map,n={platform:bn,...i},r={...n.platform,_c:o};return(async(e,t,i)=>{const{placement:o="bottom",strategy:n="absolute",middleware:r=[],platform:a}=i,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:p}=Lo(d,o,c),u=o,f={},g=0;for(let i=0;i<l.length;i++){const{name:r,fn:m}=l[i],{x:b,y:v,data:y,reset:w}=await m({x:h,y:p,initialPlacement:o,placement:u,strategy:n,middlewareData:f,rects:d,platform:a,elements:{reference:e,floating:t}});h=null!=b?b:h,p=null!=v?v:p,f={...f,[r]:{...f[r],...y}},w&&g<=50&&(g++,"object"==typeof w&&(w.placement&&(u=w.placement),w.rects&&(d=!0===w.rects?await a.getElementRects({reference:e,floating:t,strategy:n}):w.rects),({x:h,y:p}=Lo(d,u,c))),i=-1)}return{x:h,y:p,placement:u,strategy:n,middlewareData:f}})(e,t,{...n,platform:r})},Cn=Si(class extends directive_i{constructor(e){if(super(e),e.type!==Ci||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return ni}});function An(e){return En(e)}function Sn(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function En(e){for(let t=e;t;t=Sn(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=Sn(e);t;t=Sn(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var Pn=class extends so{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let i=0,o=0,n=0,r=0,a=0,l=0,c=0,d=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(i=e.left,o=e.bottom,n=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):(i=t.left,o=t.bottom,n=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):e.left<t.left?(i=e.right,o=e.top,n=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom):(i=t.right,o=t.top,n=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=vn(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[yn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(_n({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(xn({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(wn({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(_n({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(kn({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>bn.getOffsetParent(e,An):bn.getOffsetParent;$n(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Yi(Ki({},bn),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:i,placement:o})=>{const n="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=i.arrow.x,t=i.arrow.y;let o="",a="",l="",c="";if("start"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=n?i:"",c=n?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=n?"":i,c=n?i:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:l,left:c,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return oi`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Cn({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Cn({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?oi`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function On(e,t){return new Promise((i=>{e.addEventListener(t,(function o(n){n.target===e&&(e.removeEventListener(t,o),i())}))}))}function Rn(e,t,i){return new Promise((o=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,Yi(Ki({},i),{duration:Dn()?0:i.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})}))}function Tn(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function Dn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Mn(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}Pn.styles=[ro,no],Zi([wi(".popup")],Pn.prototype,"popup",2),Zi([wi(".popup__arrow")],Pn.prototype,"arrowEl",2),Zi([bi()],Pn.prototype,"anchor",2),Zi([bi({type:Boolean,reflect:!0})],Pn.prototype,"active",2),Zi([bi({reflect:!0})],Pn.prototype,"placement",2),Zi([bi({reflect:!0})],Pn.prototype,"strategy",2),Zi([bi({type:Number})],Pn.prototype,"distance",2),Zi([bi({type:Number})],Pn.prototype,"skidding",2),Zi([bi({type:Boolean})],Pn.prototype,"arrow",2),Zi([bi({attribute:"arrow-placement"})],Pn.prototype,"arrowPlacement",2),Zi([bi({attribute:"arrow-padding",type:Number})],Pn.prototype,"arrowPadding",2),Zi([bi({type:Boolean})],Pn.prototype,"flip",2),Zi([bi({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],Pn.prototype,"flipFallbackPlacements",2),Zi([bi({attribute:"flip-fallback-strategy"})],Pn.prototype,"flipFallbackStrategy",2),Zi([bi({type:Object})],Pn.prototype,"flipBoundary",2),Zi([bi({attribute:"flip-padding",type:Number})],Pn.prototype,"flipPadding",2),Zi([bi({type:Boolean})],Pn.prototype,"shift",2),Zi([bi({type:Object})],Pn.prototype,"shiftBoundary",2),Zi([bi({attribute:"shift-padding",type:Number})],Pn.prototype,"shiftPadding",2),Zi([bi({attribute:"auto-size"})],Pn.prototype,"autoSize",2),Zi([bi()],Pn.prototype,"sync",2),Zi([bi({type:Object})],Pn.prototype,"autoSizeBoundary",2),Zi([bi({attribute:"auto-size-padding",type:Number})],Pn.prototype,"autoSizePadding",2),Zi([bi({attribute:"hover-bridge",type:Boolean})],Pn.prototype,"hoverBridge",2);const Ln=new Set,In=new MutationObserver(Hn),Un=new Map;let Bn,zn=document.documentElement.dir||"ltr",Nn=document.documentElement.lang||navigator.language;function jn(...e){e.map((e=>{const t=e.$code.toLowerCase();Un.has(t)?Un.set(t,Object.assign(Object.assign({},Un.get(t)),e)):Un.set(t,e),Bn||(Bn=e)})),Hn()}function Hn(){zn=document.documentElement.dir||"ltr",Nn=document.documentElement.lang||navigator.language,[...Ln.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}In.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ln.add(this.host)}hostDisconnected(){Ln.delete(this.host)}dir(){return`${this.host.dir||zn}`.toLowerCase()}lang(){return`${this.host.lang||Nn}`.toLowerCase()}getTranslationData(e){var t,i;const o=new Intl.Locale(e.replace(/_/g,"-")),n=null==o?void 0:o.language.toLowerCase(),r=null!==(i=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:n,region:r,primary:Un.get(`${n}-${r}`),secondary:Un.get(n)}}exists(e,t){var i;const{primary:o,secondary:n}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||n&&n[e]||t.includeFallback&&Bn&&Bn[e])}term(e,...t){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let n;if(i&&i[e])n=i[e];else if(o&&o[e])n=o[e];else{if(!Bn||!Bn[e])return String(e);n=Bn[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}var Fn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};jn(Fn);var Vn=Fn,qn=class extends LocalizeController{};function Wn(e,t){const i=Ki({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:n}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const n=t;if(e.has(n)){const t=e.get(n),r=this[n];t!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,r))}})),n.call(this,e)}}}jn(Vn);var Gn=class extends so{constructor(){super(),this.localize=new qn(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Tn(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Tn(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Mn(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:i}=io(this,"tooltip.show",{dir:this.localize.dir()});await Rn(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Mn(this.body);const{keyframes:e,options:i}=io(this,"tooltip.hide",{dir:this.localize.dir()});await Rn(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,On(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,On(this,"sl-after-hide")}render(){return oi`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Cn({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Gn.styles=[ro,oo],Gn.dependencies={"sl-popup":Pn},Zi([wi("slot:not([name])")],Gn.prototype,"defaultSlot",2),Zi([wi(".tooltip__body")],Gn.prototype,"body",2),Zi([wi("sl-popup")],Gn.prototype,"popup",2),Zi([bi()],Gn.prototype,"content",2),Zi([bi()],Gn.prototype,"placement",2),Zi([bi({type:Boolean,reflect:!0})],Gn.prototype,"disabled",2),Zi([bi({type:Number})],Gn.prototype,"distance",2),Zi([bi({type:Boolean,reflect:!0})],Gn.prototype,"open",2),Zi([bi({type:Number})],Gn.prototype,"skidding",2),Zi([bi()],Gn.prototype,"trigger",2),Zi([bi({type:Boolean})],Gn.prototype,"hoist",2),Zi([Wn("open",{waitUntilFirstUpdate:!0})],Gn.prototype,"handleOpenChange",1),Zi([Wn(["content","distance","hoist","placement","skidding"])],Gn.prototype,"handleOptionsChange",1),Zi([Wn("disabled")],Gn.prototype,"handleDisabledChange",1),to("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),to("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Gn.define("sl-tooltip");var Kn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,Zn=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Yn(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Kn(t,i,r),r};to("tooltip.show",null),to("tooltip.hide",null);let Xn=class extends lit_element_s{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return oi`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ri}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};Xn.styles=wt`
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
	`,Zn([bi()],Xn.prototype,"content",2),Zn([bi({reflect:!0})],Xn.prototype,"placement",2),Zn([bi({type:Boolean})],Xn.prototype,"disabled",2),Zn([bi({type:Number})],Xn.prototype,"distance",2),Zn([bi({type:Boolean})],Xn.prototype,"hoist",2),Xn=Zn([fi("gl-tooltip")],Xn);var Jn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,er=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Qn(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Jn(t,i,r),r};const tr=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let ir=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};ir.styles=wt`
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

		${yt(Object.entries(tr).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

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
	`,er([bi()],ir.prototype,"icon",2),er([bi()],ir.prototype,"modifier",2),er([bi({type:Number})],ir.prototype,"size",2),er([bi()],ir.prototype,"flip",2),er([bi()],ir.prototype,"rotate",2),ir=er([fi("code-icon")],ir);var or=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,rr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?nr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&or(t,i,r),r};let sr=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.disabled=!1}render(){return oi`
			<gl-tooltip hoist content="${this.label??ri}">
				<a
					role="${this.href?ri:"button"}"
					type="${this.href?ri:"button"}"
					aria-label="${this.label??ri}"
					?disabled=${this.disabled}
					href=${this.href??ri}
				>
					<code-icon icon="${this.icon}"></code-icon>
				</a>
			</gl-tooltip>
		`}};sr.styles=wt`
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
	`,rr([bi()],sr.prototype,"href",2),rr([bi()],sr.prototype,"label",2),rr([bi()],sr.prototype,"icon",2),rr([bi({type:Boolean})],sr.prototype,"disabled",2),sr=rr([fi("action-item")],sr);var ar=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,cr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?lr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ar(t,i,r),r};const dr={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let hr=class extends lit_element_s{get statusName(){return this.status?dr[this.status]:""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return oi`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return oi`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return oi`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return oi`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return oi`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return oi`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return oi`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return oi`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return oi`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};hr.styles=[wt`
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
		`],cr([bi()],hr.prototype,"status",2),cr([vi()],hr.prototype,"statusName",1),hr=cr([fi("gl-git-status")],hr);wt`
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
`;const pr=wt`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,ur=wt`
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
`,fr=(wt`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${wt`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`}
	}
	a:hover {
		text-decoration: underline;
	}
`,wt`
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
`),gr=[ur,wt``],mr=[ur,wt`
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
	`];var br=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,yr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?vr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&br(t,i,r),r};let wr=class extends lit_element_s{disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}firstUpdated(){this.setAttribute("role","tree")}render(){return oi`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(){if(!this.treeItems?.length)return;const e=this.handleKeydown.bind(this),t=this.handleBeforeSelected.bind(this),i=this.handleSelected.bind(this),o=this.treeItems.map((o=>(o.addEventListener("keydown",e,!1),o.addEventListener("gl-tree-item-select",t,!1),o.addEventListener("gl-tree-item-selected",i,!1),{dispose:function(){o?.removeEventListener("keydown",e,!1),o?.removeEventListener("gl-tree-item-select",t,!1),o?.removeEventListener("gl-tree-item-selected",i,!1)}})));this._slotSubscriptionsDisposer=()=>{o?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target)return;const t=e.target;if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.node.branch)return;function t(e){const t=e.level;let i=e.previousElementSibling;for(;i;){if(i.level<t)return i;i=i.previousElementSibling}}const i=e.target,o=i.level;let n=i.nextElementSibling;for(;n&&o!==n.level;){const i=t(n);n.parentExpanded=!1!==i?.expanded,n.expanded=e.detail.node.expanded,n=n.nextElementSibling}}};wr.styles=gr,yr([bi({reflect:!0})],wr.prototype,"guides",2),yr([xi({flatten:!0})],wr.prototype,"treeItems",2),wr=yr([fi("gl-tree")],wr);var xr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,kr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?_r(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&xr(t,i,r),r};let $r=class extends lit_element_s{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.()}render(){return oi`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;const t=this.handleKeydown.bind(this),i=`${this.actionNodes.length}`,o=this.actionNodes.map(((e,o)=>(e.setAttribute("aria-posinset",`${o+1}`),e.setAttribute("aria-setsize",i),e.setAttribute("tabindex",0===o?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}})));this._slotSubscriptionsDisposer=()=>{o?.forEach((({dispose:e})=>e()))}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target,i=parseInt(t.getAttribute("aria-posinset")??"0",10);let o=null;if("ArrowLeft"===e.key){const e=1===i?this.actionNodes.length-1:i-2;o=this.actionNodes[e]}else if("ArrowRight"===e.key){const e=i===this.actionNodes.length?0:i;o=this.actionNodes[e]}null!=o&&o!==t&&(t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};$r.styles=wt`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,kr([xi({flatten:!0})],$r.prototype,"actionNodes",2),$r=kr([fi("action-nav")],$r);var Cr=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,Sr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Ar(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Cr(t,i,r),r};let Er=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.selected=!1,this.focused=!1,this.onComponentClickBound=this.onComponentClick.bind(this)}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.onComponentClickBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.onComponentClickBound)}onComponentClick(e){this.selectCore({dblClick:!1,altKey:e.altKey}),this.buttonEl.focus()}updateAttrs(e,t=!1){(e.has("expanded")||t)&&this.setAttribute("aria-expanded",this.expanded.toString()),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){const e=this.level-1;if(e<1&&!this.branch)return ri;const t=[];if(e>0)for(let i=0;i<e;i++)t.push(oi`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(oi`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?oi`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:ri}renderActions(){return oi`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return oi`<slot name="decorations" class="decorations"></slot>`}render(){return oi`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
			>
				${_i(this.showIcon,(()=>oi`<slot name="icon" class="icon"></slot>`))}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.branch&&(this.expanded=!this.expanded),this.selected=!0,t||window.requestAnimationFrame((()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})}))}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.emit("gl-tree-item-checked",{node:this,checked:this.checked})}};Er.styles=mr,Sr([bi({type:Boolean})],Er.prototype,"branch",2),Sr([bi({type:Boolean})],Er.prototype,"expanded",2),Sr([bi({type:String})],Er.prototype,"path",2),Sr([bi({type:String,attribute:"parent-path"})],Er.prototype,"parentPath",2),Sr([bi({type:Boolean,attribute:"parent-expanded"})],Er.prototype,"parentExpanded",2),Sr([bi({type:Number})],Er.prototype,"level",2),Sr([bi({type:Number})],Er.prototype,"size",2),Sr([bi({type:Number})],Er.prototype,"position",2),Sr([bi({type:Boolean})],Er.prototype,"checkable",2),Sr([bi({type:Boolean})],Er.prototype,"checked",2),Sr([bi({type:Boolean})],Er.prototype,"disableCheck",2),Sr([bi({type:Boolean})],Er.prototype,"showIcon",2),Sr([vi()],Er.prototype,"selected",2),Sr([vi()],Er.prototype,"focused",2),Sr([wi("#button")],Er.prototype,"buttonEl",2),Er=Sr([fi("gl-tree-item")],Er);var Pr=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,Rr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Or(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Pr(t,i,r),r};let Tr=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0}set model(e){if(this._model===e)return;let t;if(this._model=e,null!=this._model){const e=this._model.length;t=this._model.reduce(((t,i,o)=>(t.push(...Dr(i,e,o+1)),t)),[])}this.treeItems=t}get model(){return this._model}renderIcon(e){return null==e?ri:"string"==typeof e?oi`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?ri:oi`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){const t=e.actions;return null==t||0===t.length?ri:t.map((t=>oi`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${i=>this.onTreeItemActionClicked(i,e,t)}
			></action-item>`))}renderDecorations(e){const t=e.decorations;return null==t||0===t.length?ri:t.map((e=>"icon"===e.type?oi`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?oi`<span slot="decorations">${e.label}</span>`:void 0))}renderTreeItem(e){return oi`<gl-tree-item
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
			${e.label}${_i(null!=e.description,(()=>oi`<span slot="description">${e.description}</span>`))}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}renderTree(e){return e?.map((e=>this.renderTreeItem(e)))}render(){return oi`<gl-tree>${this.renderTree(this.treeItems)}</gl-tree>`}onTreeItemSelected(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,i){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:i,dblClick:!1,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}};function Dr(e,t=1,i=1){const o={size:t,position:i};for(const[t,i]of Object.entries(e))null!=i&&"children"!==t&&(o[t]=i);const n=[o];if(null!=e.children&&e.children.length>0){const t=e.children.length;for(let i=0;i<t;i++)n.push(...Dr(e.children[i],t,i+1))}return n}Tr.styles=wt`
		:host {
			display: contents;
		}
	`,Rr([vi()],Tr.prototype,"treeItems",2),Rr([bi({reflect:!0})],Tr.prototype,"guides",2),Rr([bi({type:Array,attribute:!1})],Tr.prototype,"model",1),Tr=Rr([fi("gl-tree-generator")],Tr);var Mr=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Ir=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Lr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Mr(t,i,r),r};let Ur=class extends lit_element_s{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return oi`<div class="skeleton" style=${e}></div>`}};Ur.styles=wt`
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
	`,Ir([bi({type:Number})],Ur.prototype,"lines",2),Ur=Ir([fi("skeleton-loader")],Ur);class GlTreeBase extends GlElement{renderLoading(){return oi`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return ri;let t="tree",i="list-tree",o="View as Tree";switch(e){case"auto":t="list",i="gl-list-auto",o="View as List";break;case"list":t="tree",i="list-flat",o="View as Tree";break;case"tree":t="auto",i="list-tree",o="View as Auto"}return oi`<action-item data-switch-value="${t}" label="${o}" icon="${i}"></action-item>`}renderTreeView(e,t="none"){return oi`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,i=!1,o=2){const n=[];if(t){const t=Ui(e,(e=>e.path.split("/")),((...e)=>e.join("/")),i);if(null!=t.children)for(const e of t.children.values()){const t=this.walkFileTree(e,{level:o});n.push(t)}}else for(const t of e){const e=this.fileToTreeModel(t,{level:o,branch:!1},!0);n.push(e)}return n}walkFileTree(e,t={level:1}){let i;if(void 0===t.level&&(t.level=1),i=null==e.value?this.folderToTreeModel(e.name,t):this.fileToTreeModel(e.value,t),null!=e.children){const o=[];for(const i of e.children.values()){const e=this.walkFileTree(i,{...t,level:t.level+1});o.push(e)}o.length>0&&(i.branch=!0,i.children=o)}return i}folderToTreeModel(e,t){return{branch:!1,expanded:!0,path:e,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...t}}getRepoActions(e,t,i){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,i,o){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"repo",label:e,description:o,context:[t],actions:this.getRepoActions(e,t,i),...i}}getFileActions(e,t){return[]}fileToTreeModel(e,t,i=!1,o="/"){const n=e.path.lastIndexOf(o),r=-1!==n?e.path.substring(n+1):e.path,a=i&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:r,description:!0===i?a:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}}const Br=wt`
	.badge {
		display: inline-flex;
		font-size: var(--gl-badge-font-size, x-small);
		font-variant: all-small-caps;
		font-weight: 600;
		color: var(--gl-badge-color, var(--color-foreground--50));
		border: currentColor 1px solid;
		border-radius: 1rem;
		padding: 0 0.8rem 0.1rem;
		white-space: nowrap;
	}
`;var zr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor;let jr=class extends lit_element_s{render(){return oi`<slot class="badge" part="base"></slot>`}};jr.styles=[Br],jr=((e,t,i,o)=>{for(var n,r=o>1?void 0:o?Nr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&zr(t,i,r),r})([fi("gl-badge")],jr);var Hr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,Vr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Fr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Hr(t,i,r),r};let qr=class extends lit_element_s{constructor(){super(...arguments),this.editor=!1}render(){return oi`<div class="group"><slot></slot></div>`}};qr.styles=[ur,wt`
			:host {
				display: block;
				max-width: 30rem;
				margin-right: auto;
				margin-left: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			@media (min-width: 640px) {
				:host(:not([editor])) {
					max-width: 100%;
				}
			}

			.group {
				display: inline-flex;
				gap: 0.4rem;
				width: 100%;
				max-width: 30rem;
			}
		`],Vr([bi({type:Boolean})],qr.prototype,"editor",2),qr=Vr([fi("button-container")],qr);var Wr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,Kr=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Gr(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Wr(t,i,r),r};let Yr=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?oi`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?oi`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?oi`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:oi`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};Yr.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},Yr.styles=[ur,wt`
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
				${pr}
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
		`],Kr([wi(".control")],Yr.prototype,"control",2),Kr([bi()],Yr.prototype,"appearance",2),Kr([bi({type:Boolean,reflect:!0})],Yr.prototype,"disabled",2),Kr([bi({reflect:!0})],Yr.prototype,"density",2),Kr([bi({type:Boolean,reflect:!0})],Yr.prototype,"full",2),Kr([bi()],Yr.prototype,"href",2),Kr([bi({reflect:!0})],Yr.prototype,"role",1),Kr([bi()],Yr.prototype,"tooltip",2),Yr=Kr([fi("gl-button")],Yr);const Zr=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))}),Xr=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Jr=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Qr=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let es;const ts=new Map;let is,os,ns;function rs(e,t,i,o=!0){const n=`${i??""}:${t=t??void 0}`;let r=ts.get(n);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Jr.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:i}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:i||void 0}}const i={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Xr))if(null!=t)for(const[e,o]of Object.entries(t))if(null!=o)switch(e){case"year":i.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric"}break;case"day":i.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow"}break;case"hour":i.hour=2===o.length?"2-digit":"numeric",i.hour12="hh"===o||"h"===o;break;case"minute":i.minute=2===o.length?"2-digit":"numeric";break;case"second":i.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=2===o.length?"long":"short"}return i}(t);let a;a=null==i?is:"system"===i?void 0:[i],r=new Intl.DateTimeFormat(a,e),o&&ts.set(n,r)}if(null==t||Jr.test(t))return r.format(e);function a(e){const t=`${i??""}:time:${e}`;let n=ts.get(t);if(null==n){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==i?is:"system"===i?void 0:[i],n=new Intl.DateTimeFormat(a,r),o&&ts.set(t,n)}return n}const l=r.formatToParts(e);return t.replace(Xr,((t,i,o,n,r,c,d,h,p,u,f,g,m,b,v)=>{if(null!=i)return i.substring(1,i.length-1);for(const[t,i]of Object.entries(v)){if(null==i)continue;const o=l.find((e=>e.type===t));if("Do"===i&&"day"===o?.type)return as(Number(o.value));if("a"===i&&"dayPeriod"===o?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??o)?.value??""}`}return o?.value??""}return""}))}const ss=["th","st","nd","rd"];function as(e){const t=e%100;return`${e}${ss[(t-20)%10]??ss[t]??ss[0]}`}var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,ds=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?cs(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ls(t,i,r),r};let hs=class extends lit_element_s{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date}render(){const e=rs(this.date,this.format??"MMMM Do, YYYY h:mma");return oi`<gl-tooltip content="${e}"
			><time datetime="${this.date.toISOString()}"
				>${"relative"===this.dateStyle?function(e,t){const i=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,o,n,r]of Qr){const a=Math.abs(i);if(a>=o||1e3===o)return t?(null==es&&(null!=ns?es=ns.resolvedOptions().locale:null!=os?es=os.resolvedOptions().locale:(ns=new Intl.RelativeTimeFormat(is,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),es=ns.resolvedOptions().locale)),"en"===es||es?.startsWith("en-")?`${Math.round(a/n)}${r}`:(null==ns&&(ns=new Intl.RelativeTimeFormat(is,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),ns.format(Math.round(i/n),e))):(null==os&&(os=new Intl.RelativeTimeFormat(is,{localeMatcher:"best fit",numeric:"auto",style:"long"})),os.format(Math.round(i/n),e))}return""}(this.date):e}</time
			></gl-tooltip
		>`}};ds([bi()],hs.prototype,"format",2),ds([bi({attribute:"date-style"})],hs.prototype,"dateStyle",2),ds([bi({converter:Zr(),reflect:!0})],hs.prototype,"date",2),hs=ds([fi("formatted-date")],hs);var ps=Object.defineProperty,us=Object.getOwnPropertyDescriptor,fs=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?us(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ps(t,i,r),r};let gs=class extends lit_element_s{constructor(){super(...arguments),this.name="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.dateStyle="relative",this.committer=!1}renderAvatar(){return this.showAvatar&&this.avatarUrl?.length?oi`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:oi`<code-icon icon="person" size="18"></code-icon>`}render(){return oi`
			<gl-tooltip>
				${_i(null!=this.url,(()=>oi`<a class="author" href="${this.url}"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></a
						>`),(()=>oi`<span class="author"
							><span class="avatar">${this.renderAvatar()}</span
							><span class="name" href="${this.url}">${this.name}</span></span
						>`))}
				<div class="author-hover" slot="content">
					${this.avatarUrl?.length?oi`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:ri}
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
		`}};gs.styles=wt`
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
	`,fs([bi()],gs.prototype,"name",2),fs([bi()],gs.prototype,"url",2),fs([bi({converter:Zr(),reflect:!0})],gs.prototype,"date",2),fs([bi()],gs.prototype,"avatarUrl",2),fs([bi({type:Boolean,attribute:"show-avatar",reflect:!0})],gs.prototype,"showAvatar",2),fs([bi()],gs.prototype,"dateFormat",2),fs([bi()],gs.prototype,"dateStyle",2),fs([bi({type:Boolean})],gs.prototype,"committer",2),fs([bi()],gs.prototype,"actionLabel",2),gs=fs([fi("commit-identity")],gs);var ms=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,vs=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?bs(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ms(t,i,r),r};let ys=class extends lit_element_s{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return oi`<div class="progress-bar"></div>`}};ys.styles=wt`
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
	`,vs([bi({reflect:!0})],ys.prototype,"mode",2),vs([bi({type:Boolean})],ys.prototype,"active",2),vs([bi()],ys.prototype,"position",2),ys=vs([fi("progress-indicator")],ys);var ws=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,_s=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?xs(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ws(t,i,r),r};let ks=class extends lit_element_s{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?oi`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:oi`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return oi`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};ks.styles=[fr,wt`
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
		`],_s([bi({type:Boolean,reflect:!0})],ks.prototype,"collapsable",2),_s([bi({type:Boolean,reflect:!0})],ks.prototype,"expanded",2),_s([bi({type:Boolean,reflect:!0})],ks.prototype,"loading",2),ks=_s([fi("webview-pane")],ks);var $s=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,As=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Cs(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&$s(t,i,r),r};let Ss=class extends GlTreeBase{constructor(){super(),this.explainBusy=!1,this.selectedPatches=[],this._copiedLink=!1,ut(Qe,lt,pt,dt,ht)}get cloudDraft(){if("cloud"===this.state.draft?.draftType)return this.state.draft}get isCodeSuggestion(){return"suggested_pr_change"===this.cloudDraft?.type}get canSubmit(){return this.selectedPatches.length>0}updated(e){if(e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="ai-explanation"]')?.scrollIntoView()),e.has("state")){const e=this.state?.draft?.patches;if(e?.length){this.selectedPatches=e.map((e=>e.id));for(const t of e){const e=this.selectedPatches.indexOf(t.id);t.repository.located?-1===e&&this.selectedPatches.push(t.id):e>-1&&this.selectedPatches.splice(e,1)}}else this.selectedPatches=[]}}renderEmptyContent(){return oi`
			<div class="section section--empty" id="empty">
				<button-container>
					<gl-button full href="command:gitlens.openPatch">Open Patch...</gl-button>
				</button-container>
			</div>
		`}renderPatchMessage(){if(null==this.state?.draft?.title)return;let e=this.cloudDraft?.description;return null!=e?(e=e.trim(),oi`
			<div class="message-block">
				<p class="message-block__text scrollable" data-region="message">
					<span>${Ii(e)}</span>
				</p>
			</div>
		`):void 0}renderExplainAi(){if(!1!==this.state?.orgSettings.ai)return oi`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this patch.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<gl-button
								full
								class="button--busy"
								data-action="ai-explain"
								aria-busy="${(e=>e??ri)(this.explainBusy?"true":void 0)}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
								><code-icon icon="loading" modifier="spin" slot="prefix"></code-icon>Explain
								Changes</gl-button
							>
						</span>
					</p>
					${_i(this.explain,(()=>oi`
							<div
								class="ai-content${this.explain?.error?" has-error":""}"
								data-region="ai-explanation"
							>
								${_i(this.explain?.error,(()=>oi`<p class="ai-content__summary scrollable">
											${this.explain.error.message??"Error retrieving content"}
										</p>`))}
								${_i(this.explain?.summary,(()=>oi`<p class="ai-content__summary scrollable">${this.explain.summary}</p>`))}
							</div>
						`))}
				</div>
			</webview-pane>
		`}renderChangedFiles(){const e=this.state?.preferences?.files?.layout??"auto";return oi`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<!-- <span slot="subtitle" data-region="stats">\${this.renderCommitStats()}</span> -->
				<action-nav slot="actions">${this.renderLayoutAction(e)}</action-nav>

				${_i(null!=this.validityMessage,(()=>oi`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`))}
				<div class="change-list" data-region="files">
					${_i(null==this.state?.draft?.patches,(()=>this.renderLoading()),(()=>this.renderTreeView(this.treeModel,this.state?.preferences?.indentGuides)))}
				</div>
			</webview-pane>
		`}get treeModel(){if(null==this.state?.draft?.patches)return[];const{draft:{patches:e}}=this.state,t=this.state?.preferences?.files?.layout??"auto";let i=!1;const o=zi(e,(e=>e?.files?.length??0));i="auto"===t?o>(this.state.preferences?.files?.threshold??5):"tree"===t;const n=e?.map((e=>this.draftPatchToTreeModel(e,i,this.state.preferences?.files?.compact,{checkable:!0,checked:this.selectedPatches.includes(e.id)})));return n}renderUserSelection(e,t){if("delete"===e.change)return;const i=e.pendingRole??e.user.role,o=new Map([["owner","owner"],["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),n=o.get(i);return oi`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member?.name??e.member?.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					${_i("owner"!==i&&("owner"===t||"admin"===t),(()=>oi`
							<gk-popover>
								<gk-button slot="trigger"
									>${n} <code-icon icon="chevron-down"></code-icon
								></gk-button>
								<gk-menu>
									${$i(o,(([t,o])=>"owner"===t?void 0:oi`<gk-menu-item
													@click=${i=>this.onChangeSelectionRole(i,e,t)}
											  >
													<code-icon
														icon="check"
														class="user-selection__check ${i===t?"is-active":""}"
													></code-icon>
													${o}
											  </gk-menu-item>`))}
								</gk-menu>
							</gk-popover>
						`),(()=>oi`${n}`))}
				</div>
			</div>
		`}renderUserSelectionList(e,t=!1){if(!e.userSelections?.length)return;let i=e.userSelections;return!1===t&&(i=i.filter((e=>"owner"!==e.user?.role))),oi`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${Li(i,(e=>e.member?.id??e.user?.id),(t=>this.renderUserSelection(t,e.role)))}
				</div>
			</div>
		`}renderPatchPermissions(){const e=this.cloudDraft;if(null!=e){if("admin"===e.role||"owner"===e.role){const t=e.userSelections?.some((e=>void 0!==e.change));let i;switch(e.visibility){case"private":i="organization";break;case"invite_only":i="lock";break;default:i="globe"}return oi`
				${_i(!0!==this.isCodeSuggestion,(()=>oi` <div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${i}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===e.visibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===e.visibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===e.visibility}>
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
						</div>`))}
				${this.renderUserSelectionList(e)}
				${_i(t,(()=>oi`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${this.onUpdatePatch}
									>Update Patch</gl-button
								>
							</span>
						</p>
					`))}
			`}return oi`
			${_i(!0!==this.isCodeSuggestion,(()=>oi` <div class="message-input">
						<div class="message-input__control message-input__control--text">
							${_i("public"===e.visibility,(()=>oi`<code-icon icon="globe"></code-icon> Anyone with the link`))}
							${_i("private"===e.visibility,(()=>oi`<code-icon icon="organization"></code-icon> Members of my Org with the link`))}
							${_i("invite_only"===e.visibility,(()=>oi`<code-icon icon="lock"></code-icon> Collaborators only`))}
						</div>
					</div>`))}
			${this.renderUserSelectionList(e,!0)}
		`}}renderCodeSuggectionActions(){if(this.isCodeSuggestion&&null!=this.cloudDraft&&!this.cloudDraft.isArchived&&"viewer"!==this.cloudDraft.role)return oi`
			<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("accepted")}
						>Accept</gl-button
					>
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("rejected")}
						>Reject</gl-button
					>
				</span>
			</p>
		`}renderPatches(){return oi`
			<div class="section section--action">
				${this.renderPatchPermissions()}
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full @click=${this.onApplyPatch}>Apply Patch</gl-button>
						<gk-popover placement="top">
							<gl-button
								slot="trigger"
								density="compact"
								aria-label="Apply Patch Options..."
								title="Apply Patch Options..."
								><code-icon icon="chevron-down"></code-icon
							></gl-button>
							<gk-menu class="mine-menu" @select=${this.onSelectApplyOption}>
								<gk-menu-item data-value="branch">Apply to a Branch</gk-menu-item>
								<!-- <gk-menu-item data-value="worktree">Apply to new worktree</gk-menu-item> -->
							</gk-menu>
						</gk-popover>
					</span>
				</p>
				${this.renderCodeSuggectionActions()}
			</div>
		`}renderActionbar(){const e=this.state?.draft;if(null!=e)return"local"===e.draftType?oi`
				<div class="top-details__actionbar">
					<div class="top-details__actionbar-group"></div>
					<div class="top-details__actionbar-group">
						<a
							class="commit-action"
							href="#"
							aria-label="Share Patch"
							title="Share Patch"
							@click=${this.onShareLocalPatch}
							>Share</a
						>
					</div>
				</div>
			`:oi`
			<div class="top-details__actionbar">
				<div class="top-details__actionbar-group"></div>
				<div class="top-details__actionbar-group">
					<a class="commit-action" href="#" @click=${this.onCopyCloudLink}>
						<code-icon icon="${this._copiedLink?"check":"link"}"></code-icon>
						<span class="top-details__sha">Copy Link</span></a
					>
					${_i(null!=this.cloudDraft?.gkDevLink,(()=>oi`
							<a class="commit-action" href=${this.cloudDraft.gkDevLink} title="Open on gitkraken.dev">
								<code-icon icon="globe"></code-icon>
							</a>
						`))}
				</div>
			</div>
		`}renderDraftInfo(){if(null==this.state.draft?.title)return ri;let e;if(this.cloudDraft?.isArchived){const t=this.cloudDraft.archivedReason??"archived";e=oi`<gl-badge class="title__badge">${t}</gl-badge>`}return oi`
			<h1 class="title">${this.state.draft?.title} ${e}</h1>
			${this.renderPatchMessage()}
		`}render(){return null==this.state?.draft?oi` <div class="commit-detail-panel scrollable">${this.renderEmptyContent()}</div>`:oi`
			<div class="pane-groups">
				<div class="pane-groups__group-fixed">
					<div class="section">${this.renderActionbar()}${this.renderDraftInfo()}</div>
				</div>
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">
					${this.renderExplainAi()}${this.renderPatches()}
				</div>
			</div>
		`}createRenderRoot(){return this}onInviteUsers(e){this.emit("gl-patch-details-invite-users")}onChangeSelectionRole(e,t,i){this.emit("gl-patch-details-update-selection",{selection:t,role:i});const o=e.target?.closest("gk-popover");o?.hidePopover()}onVisibilityChange(e){const t=this.state.draft;t.visibility=e.target.value,this.emit("gl-patch-details-update-metadata",{visibility:t.visibility})}onUpdatePatch(e){this.emit("gl-patch-details-update-permissions")}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key)return e.preventDefault(),void e.stopPropagation();this.explainBusy=!0}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"apply-patch":this.onApplyPatch();break;case"change-patch-base":this.onChangePatchBase();break;case"show-patch-in-graph":this.onShowInGraph();break;case"file-open":this.onOpenFile(e);break;case"file-compare-working":this.onCompareWorking(e)}}fireFileEvent(e,t,i){const o=new CustomEvent(e,{detail:{...t,showOptions:i}});this.dispatchEvent(o)}onCompareWorking(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-compare-working",{...t,showOptions:{preview:!1,viewColumn:e.detail.altKey?-2:void 0}})}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!1,viewColumn:e.detail.altKey?-2:void 0}})}onTreeItemChecked(e){if(!e.detail.context)return;const[t]=e.detail.context,i=this.state.draft?.patches?.find((e=>e.gkRepositoryId===t));if(!i)return;const o=this.selectedPatches.indexOf(i?.id);e.detail.checked?-1===o&&(this.selectedPatches.push(i.id),this.validityMessage=void 0):o>-1&&this.selectedPatches.splice(o,1);const n=new CustomEvent("gl-patch-checked",{detail:{patch:i,checked:e.detail.checked}});this.dispatchEvent(n)}onTreeItemSelected(e){const{node:t,context:i}=e.detail;if(!0===t.branch||null==i)return;const[o]=i;this.emit("gl-patch-file-compare-previous",{...o})}onApplyPatch(e,t="current"){!1!==this.canSubmit?(this.validityMessage=void 0,this.emit("gl-patch-apply-patch",{draft:this.state.draft,target:t,selectedPatches:this.selectedPatches})):this.validityMessage="Please select changes to apply"}onArchiveDraft(e){this.emit("gl-draft-archive",{reason:e})}onSelectApplyOption(e){if(!1===this.canSubmit)return void(this.validityMessage="Please select changes to apply");const t=e.detail?.target;null!=t?.dataset?.value&&this.onApplyPatch(void 0,t.dataset.value)}onChangePatchBase(e){const t=new CustomEvent("change-patch-base",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onSelectPatchRepo(e){const t=new CustomEvent("select-patch-repo",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onShowInGraph(e){this.emit("gl-patch-details-graph-show-patch",{draft:this.state.draft})}onCopyCloudLink(){this.emit("gl-patch-details-copy-cloud-link",{draft:this.state.draft}),this._copiedLink=!0,setTimeout((()=>this._copiedLink=!1),1e3)}onShareLocalPatch(){this.emit("gl-patch-details-share-local-patch",{draft:this.state.draft})}draftPatchToTreeModel(e,t=!1,i=!0,o){const n=this.repoToTreeModel(e.repository.name,e.gkRepositoryId,o,e.repository.located?void 0:"missing");if(!e.files?.length)return n;const r=[];if(t){const t=Ui(e.files,(e=>e.path.split("/")),((...e)=>e.join("/")),i);if(null!=t.children)for(const e of t.children.values()){const t=this.walkFileTree(e,{level:2});r.push(t)}}else for(const t of e.files){const e=this.fileToTreeModel(t,{level:2,branch:!1},!0);r.push(e)}return r.length>0&&(n.branch=!0,n.children=r),n}getFileActions(e,t){return[{icon:"go-to-file",label:"Open file",action:"file-open"},{icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}]}};As([bi({type:Object})],Ss.prototype,"state",2),As([vi()],Ss.prototype,"explainBusy",2),As([bi({type:Object})],Ss.prototype,"explain",2),As([vi()],Ss.prototype,"selectedPatches",2),As([vi()],Ss.prototype,"validityMessage",2),As([vi()],Ss.prototype,"_copiedLink",2),Ss=As([fi("gl-draft-details")],Ss);var Es=Object.defineProperty,Ps=Object.getOwnPropertyDescriptor,Os=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Ps(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Es(t,i,r),r};let Rs=class extends lit_element_s{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return oi`
			${_i(null!=this.added,(()=>oi`<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
						><span class="label">+${this.added}</span></span
					>`))}
			${_i(null!=this.modified,(()=>oi`<span
						class="stat modified"
						title="${this.modified} modified"
						aria-label="${this.modified} modified"
						><span class="label">~${this.modified}</span></span
					>`))}
			${_i(null!=this.removed,(()=>oi`<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
						><span class="label">-${this.removed}</span></span
					>`))}
		`}};Rs.styles=wt`
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
	`,Os([bi({type:Number})],Rs.prototype,"added",2),Os([bi({type:Number})],Rs.prototype,"modified",2),Os([bi({type:Number})],Rs.prototype,"removed",2),Rs=Os([fi("commit-stats")],Rs);var Ts=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,Ms=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Ds(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ts(t,i,r),r};let Ls=class extends GlTreeBase{constructor(){super(),this.review=!1,this.generateBusy=!1,this.onDebouncedCreateAll=U(this.onCreateAll,250),this.onDebounceTitleInput=U(this.onTitleInput,500),this.onDebounceDescriptionInput=U(this.onDescriptionInput,500),ut(Qe,lt,dt,ht,pt)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some((e=>"wip"===e?.type))}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter((([,e])=>!1!==e.checked))}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return zi(this.createChanges,(e=>e.files?.length??0))}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(e){e.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame((()=>{this.titleInput.focus()}))}renderUserSelection(e){const t=e.pendingRole,i=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),o=i.get(t);return oi`
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
							${$i(i,(([i,o])=>oi`<gk-menu-item
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
		`}renderUserSelectionList(){if(null!=this.state?.create?.userSelections&&0!==this.state?.create?.userSelections.length)return oi`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${Li(this.state.create.userSelections,(e=>e.member.id),(e=>this.renderUserSelection(e)))}
				</div>
			</div>
		`}renderForm(){let e;switch(this.draftVisibility){case"private":e="organization";break;case"invite_only":e="lock";break;default:e="globe"}const t=this.review?"Code Suggestion":"Cloud Patch",i=this.review?"Code Suggestions":"Cloud Patches";return oi`
			<div class="section section--action">
				${_i(null!=this.state?.create?.creationError,(()=>oi` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`))}
				${_i(!1===this.review,(()=>oi`
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
					${_i(!0===this.state?.orgSettings.ai,(()=>oi`<div class="message-input__menu">
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

				${_i(null!=this.generate?.error,(()=>oi`
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
				${_i(!0===this.review,(()=>oi`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`))}
				${_i(!1===this.state?.orgSettings.byob,(()=>oi`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${ie.cloudPatches}"
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
						</p>`),(()=>oi`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${ie.cloudPatches}"
								title="Learn more about ${i}"
								aria-label="Learn more about ${i}"
								>${t}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`))}
			</div>
		`}render(){return oi`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return oi`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${_i(null!=this.validityMessage,(()=>oi`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`))}
				<div class="change-list" data-region="files">
					${_i(null==this.create.changes,(()=>this.renderLoading()),(()=>this.renderTreeViewWithModel()))}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;const[t,i]=e.detail.context;let o=e.detail.checked;"unstaged"===i&&(o=!!e.detail.checked||"staged");const n=this.getChangeForRepo(t);null!=n&&n.checked!==o&&(n.checked=o,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:t,checked:o}))}onTreeItemSelected(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);const e=[],t=this.createChanges.length>1,i=this.isTree(this.filesModified??0),o=this.isCompact;if(t)for(const t of this.createChanges){const n=this.getTreeForChange(t,!0,i,o);null!=n&&e.push(...n)}else{const t=this.createChanges[0],n=this.getTreeForChange(t,!1,i,o);null!=n&&e.push(...n)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,i=!1,o=!0){if(null==e.files||0===e.files.length)return;const n=[];if("wip"===e.type){const r=[],a=[];for(const t of e.files)t.staged?r.push(t):a.push(t);0===r.length||0===a.length?n.push(...this.renderFiles(e.files,i,o,t?2:1)):(a.length&&n.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(a,i,o,t?3:2)}),r.length&&n.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(r,i,o,t?3:2)}))}else n.push(...this.renderFiles(e.files,i,o));if(!t)return n;const r=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return r.children=n,[r]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit)return 0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),void(null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0);this.validityMessage=void 0,this.titleInput.setCustomValidity("");const e=this.selectedChanges.reduce(((e,[t,i])=>(e[t]=i,e)),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch()}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(e){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(e){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(e,t,i){this.emit("gl-patch-create-update-selection",{selection:t,role:i});const o=e.target?.closest("gk-popover");o?.hidePopover()}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(e){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(!e.detail.context||!e.detail.action)return;switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-unstage":this.onUnstageFile(e)}}onOpenFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!1,viewColumn:e.detail.altKey?-2:void 0}})}onStageFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-stage",{...t,showOptions:{preview:!1,viewColumn:e.detail.altKey?-2:void 0}})}onUnstageFile(e){if(!e.detail.context)return;const[t]=e.detail.context;this.emit("gl-patch-file-unstage",{...t,showOptions:{preview:!1,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(e,t){const i={icon:"go-to-file",label:"Open file",action:"file-open"};return this.review?[i]:!0===e.staged?[i,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[i,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getRepoActions(e,t,i){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};Ms([bi({type:Object})],Ls.prototype,"state",2),Ms([bi({type:Boolean})],Ls.prototype,"review",2),Ms([bi({type:Object})],Ls.prototype,"generate",2),Ms([vi()],Ls.prototype,"generateBusy",2),Ms([wi("#title")],Ls.prototype,"titleInput",2),Ms([wi("#desc")],Ls.prototype,"descInput",2),Ms([wi("#generate-ai")],Ls.prototype,"generateAiButton",2),Ms([vi()],Ls.prototype,"validityMessage",2),Ls=Ms([fi("gl-patch-create")],Ls);var Is=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Bs=(e,t,i,o)=>{for(var n,r=o>1?void 0:o?Us(t,i):t,a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Is(t,i,r),r};let zs=class extends GlElement{constructor(){super(),this.indentPreference=16,ut(tt,pt,dt,ht)}get wipChangesCount(){return null==this.state?.create?0:Object.values(this.state.create.changes).reduce(((e,t)=>e+=t.files?.length??0),0)}get wipChangeState(){if(null==this.state?.create)return;const e=Object.values(this.state.create.changes).reduce(((e,t)=>(null!=t.files&&(e.files+=t.files.length,e.on.add(t.repository.uri)),e)),{files:0,on:new Set});return{count:e.files,branches:Array.from(e.on).join(", ")}}get mode(){return this.state?.mode??"view"}updateDocumentProperties(){const e=this.state?.preferences?.indent;if(e===this.indentPreference)return;this.indentPreference=e??16;document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`)}updated(e){e.has("state")&&this.updateDocumentProperties()}render(){return oi`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					${_i("view"===this.mode,(()=>oi`<gl-draft-details .state=${this.state} .explain=${this.explain}></gl-draft-details>`),(()=>oi`<gl-patch-create .state=${this.state} .generate=${this.generate}></gl-patch-create>`))}
				</main>
			</div>
		`}createRenderRoot(){return this}};Bs([bi({type:Object})],zs.prototype,"state",2),Bs([bi({type:Object})],zs.prototype,"explain",2),Bs([bi({type:Object})],zs.prototype,"generate",2),Bs([bi({attribute:!1,type:Object})],zs.prototype,"app",2),zs=Bs([fi("gl-patch-details-app")],zs);const Ns="0000000000000000000000000000000000000000";class PatchDetailsApp extends App{constructor(){super("PatchDetailsApp"),this.debouncedAttachState=U(this.attachState.bind(this),100)}onInitialize(){this.debouncedAttachState()}onBind(){const e=[he.on("[data-switch-value]","click",(e=>this.onToggleFilesLayout(e))),he.on('[data-action="ai-explain"]',"click",(e=>this.onAIExplain(e))),he.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAIModel(e))),he.on('[data-action="mode"]',"click",(e=>this.onModeClicked(e))),he.on("gl-draft-details","gl-patch-apply-patch",(e=>this.onApplyPatch(e.detail))),he.on("gl-draft-details","gl-draft-archive",(e=>this.onArchiveDraft(e.detail.reason))),he.on("gl-patch-details-app","change-patch-base",(e=>this.onChangePatchBase(e.detail))),he.on("gl-patch-details-app","select-patch-repo",(e=>this.onSelectPatchRepo(e.detail))),he.on("gl-patch-details-app","gl-patch-details-graph-show-patch",(e=>this.onShowPatchInGraph(e.detail))),he.on("gl-patch-details-app","gl-patch-create-patch",(e=>this.onCreatePatch(e.detail))),he.on("gl-patch-details-app","gl-patch-share-local-patch",(()=>this.onShareLocalPatch())),he.on("gl-draft-details","gl-patch-details-copy-cloud-link",(()=>this.onCopyCloudLink())),he.on("gl-patch-create","gl-patch-create-invite-users",(()=>this.onInviteUsers())),he.on("gl-draft-details","gl-patch-details-invite-users",(()=>this.onInviteUsers())),he.on("gl-patch-create","gl-patch-create-update-selection",(e=>this.onUpdateUserSelection(e.detail))),he.on("gl-draft-details","gl-patch-details-update-selection",(e=>this.onUpdateUserSelection(e.detail))),he.on("gl-patch-create","gl-patch-create-repo-checked",(e=>this.onCreateCheckRepo(e.detail))),he.on("gl-patch-create","gl-patch-generate-title",(e=>this.onCreateGenerateTitle(e.detail))),he.on("gl-patch-create","gl-patch-create-update-metadata",(e=>this.onCreateUpdateMetadata(e.detail))),he.on("gl-draft-details","gl-patch-details-update-metadata",(e=>this.onDraftUpdateMetadata(e.detail))),he.on("gl-draft-details","gl-patch-details-update-permissions",(()=>this.onDraftUpdatePermissions())),he.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),he.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),he.on("gl-patch-create,gl-draft-details","gl-patch-file-open",(e=>this.onOpenFile(e.detail))),he.on("gl-draft-details","gl-patch-checked",(e=>this.onPatchChecked(e.detail)))];return e}onMessageReceived(e){switch(!0){case T.is(e):e.params.state,this.state=e.params.state,this.setState(this.state),this.debouncedAttachState();break;case D.is(e):case M.is(e):case L.is(e):this.state={...this.state,...e.params},this.setState(this.state),this.debouncedAttachState(!0);break;case I.is(e):{const t=this.state.draft,i=t.patches,o=i.findIndex((t=>t.id===e.params.patch.id));i.splice(o,1,e.params.patch),this.state={...this.state,draft:t},this.setState(this.state),this.debouncedAttachState(!0);break}default:super.onMessageReceived?.(e)}}onPatchChecked(e){this.sendCommand(h,e)}onCreateCheckRepo(e){this.sendCommand(k,e)}onCreateUpdateMetadata(e){this.sendCommand(C,e)}async onCreateGenerateTitle(e){try{const e=await this.sendRequest(R,void 0);e.error?this.component.generate={error:{message:e.error.message??"Error retrieving content"}}:e.title||e.description?(this.component.generate={title:e.title,description:e.description},this.state={...this.state,create:{...this.state.create,title:e.title??this.state.create?.title,description:e.description??this.state.create?.description}},this.setState(this.state),this.debouncedAttachState()):this.component.generate=void 0}catch(e){this.component.generate={error:{message:"Error retrieving content"}}}}onDraftUpdateMetadata(e){this.sendCommand(A,e)}onDraftUpdatePermissions(){this.sendCommand(S,void 0)}onShowPatchInGraph(e){}onCreatePatch(e){this.sendCommand(d,e)}onShareLocalPatch(){this.sendCommand(_,void 0)}onCopyCloudLink(){this.sendCommand(x,void 0)}onModeClicked(e){const t=e.target?.dataset.actionValue??void 0;t!==this.state.mode&&this.sendCommand(w,{mode:t})}onApplyPatch(e){null!=e.selectedPatches&&0!==e.selectedPatches.length&&this.sendCommand(l,{details:e.draft,target:e.target??"current",selected:e.selectedPatches})}onArchiveDraft(e){this.sendCommand(c,{reason:e})}onChangePatchBase(e){this.sendCommand(u,void 0)}onSelectPatchRepo(e){this.sendCommand(p,void 0)}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(n,{command:t})}onSwitchAIModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onAIExplain(e){try{const e=await this.sendRequest(O,void 0);e.error?this.component.explain={error:{message:e.error.message??"Error retrieving content"}}:e.summary?this.component.explain={summary:e.summary}:this.component.explain=void 0}catch(e){this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){const t=e.target?.dataset.switchValue??void 0;if(t===this.state.preferences.files?.layout)return;const i={...this.state.preferences.files,layout:t??"auto",compact:this.state.preferences.files?.compact??!0,threshold:this.state.preferences.files?.threshold??5,icon:this.state.preferences.files?.icon??"type"};this.state={...this.state,preferences:{...this.state.preferences,files:i}},this.debouncedAttachState(),this.sendCommand(y,{files:i})}onInviteUsers(){this.sendCommand(E,void 0)}onUpdateUserSelection(e){this.sendCommand(P,e)}onOpenFileOnRemote(e){this.sendCommand(m,e)}onOpenFile(e){this.sendCommand(g,e)}onCompareFileWithWorking(e){this.sendCommand(b,e)}onCompareFileWithPrevious(e){this.sendCommand(v,e)}onFileMoreActions(e){this.sendCommand(f,e)}get component(){return null==this._component&&(this._component=document.getElementById("app"),this._component.app=this),this._component}attachState(e){this.component.state=this.state}}new PatchDetailsApp;var js=t.I,Hs=t.w;export{js as PatchDetailsApp,Hs as uncommittedSha};