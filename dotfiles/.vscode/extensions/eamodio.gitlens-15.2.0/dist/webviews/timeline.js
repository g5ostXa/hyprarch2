var e,t={},i={};function o(e){var s=i[e];if(void 0!==s)return s.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,i)=>(o.f[i](e,t),t)),[])),o.u=e=>"lib-billboard.js",o.miniCssF=e=>{},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},o.l=(t,i,s,r)=>{if(e[t])e[t].push(i);else{var a,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),h=0;h<c.length;h++){var d=c[h];if(d.getAttribute("src")==t){a=d;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=t),e[t]=[i];var u=(i,o)=>{a.onerror=a.onload=null,clearTimeout(p);var s=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((e=>e(o))),i)return i(o)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),l&&document.head.appendChild(a)}},o.p="#{root}/dist/webviews/",void 0!==o&&Object.defineProperty(o,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}}),(()=>{var e={122:0};o.f.j=(t,i)=>{var s=o.o(e,t)?e[t]:void 0;if(0!==s)if(s)i.push(s[2]);else{var r=new Promise(((i,o)=>s=e[t]=[i,o]));i.push(s[2]=r);var a=o.p+o.u(t),l=new Error;o.l(a,(i=>{if(o.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,s[1](l)}}),"chunk-"+t,t)}};var t=(t,i)=>{var s,r,[a,l,c]=i,h=0;if(a.some((t=>0!==e[t]))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(c)c(o)}for(t&&t(i);h<a.length;h++)r=a[h],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0},i=self.webpackChunk=self.webpackChunk||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var s={};o.d(s,{h:()=>TimelineApp});const r=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===r.trustedTypes&&(r.trustedTypes={createPolicy:(e,t)=>t});const a={configurable:!1,enumerable:!1,writable:!1};void 0===r.FAST&&Reflect.defineProperty(r,"FAST",Object.assign({value:Object.create(null)},a));const l=r.FAST;if(void 0===l.getById){const e=Object.create(null);Reflect.defineProperty(l,"getById",Object.assign({value(t,i){let o=e[t];return void 0===o&&(o=i?e[t]=i():null),o}},a))}const c=Object.freeze([]);function h(){const e=new WeakMap;return function(t){let i=e.get(t);if(void 0===i){let o=Reflect.getPrototypeOf(t);for(;void 0===i&&null!==o;)i=e.get(o),o=Reflect.getPrototypeOf(o);i=void 0===i?[]:i.slice(0),e.set(t,i)}return i}}const d=r.FAST.getById(1,(()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function o(e){try{e.call()}catch(e){t.push(e),setTimeout(i,0)}}function s(){let t=0;for(;t<e.length;)if(o(e[t]),t++,t>1024){for(let i=0,o=e.length-t;i<o;i++)e[i]=e[i+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&r.requestAnimationFrame(s),e.push(t)},process:s})})),u=r.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let p=u;const g=`fast-${Math.random().toString(36).substring(2,8)}`,f=`${g}{`,m=`}${g}`,v=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(p!==u)throw new Error("The HTML policy can only be set once.");p=e},createHTML:e=>p.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(g),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${g}:`,"")),createInterpolationPlaceholder:e=>`${f}${e}${m}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${g}:${e}--\x3e`,queueUpdate:d.enqueue,processUpdates:d.process,nextUpdate:()=>new Promise(d.enqueue),setAttribute(e,t,i){null==i?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class SubscriberSet{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=t.indexOf(e);-1!==i&&t.splice(i,1)}}notify(e){const t=this.spillover,i=this.source;if(void 0===t){const t=this.sub1,o=this.sub2;void 0!==t&&t.handleChange(i,e),void 0!==o&&o.handleChange(i,e)}else for(let o=0,s=t.length;o<s;++o)t[o].handleChange(i,e)}}class PropertyChangeNotifier{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const i=this.subscribers[e];void 0!==i&&i.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var i;if(t){let i=this.subscribers[t];void 0===i&&(this.subscribers[t]=i=new SubscriberSet(this.source)),i.subscribe(e)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new SubscriberSet(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){const i=this.subscribers[t];void 0!==i&&i.unsubscribe(e)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(e)}}const y=l.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=v.queueUpdate;let o,s=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(e){let i=e.$fastController||t.get(e);return void 0===i&&(Array.isArray(e)?i=s(e):t.set(e,i=new PropertyChangeNotifier(e))),i}const a=h();class DefaultObservableAccessor{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==o&&o.watch(e,this.name),e[this.field]}setValue(e,t){const i=this.field,o=e[i];if(o!==t){e[i]=t;const s=e[this.callback];"function"==typeof s&&s.call(e,o,t),r(e).notify(this.name)}}}class BindingObserverImplementation extends SubscriberSet{constructor(e,t,i=!1){super(e,t),this.binding=e,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const i=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const s=this.binding(e,t);return o=i,s}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const i=this.last,s=r(e),a=null===i?this.first:{};if(a.propertySource=e,a.propertyName=t,a.notifier=s,s.subscribe(this,t),null!==i){if(!this.needsRefresh){let t;o=void 0,t=i.propertySource[i.propertyName],o=this,e===t&&(this.needsRefresh=!0)}i.next=a}this.last=a}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){s=e},getNotifier:r,track(e,t){void 0!==o&&o.watch(e,t)},trackVolatile(){void 0!==o&&(o.needsRefresh=!0)},notify(e,t){r(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new DefaultObservableAccessor(t)),a(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:a,binding(e,t,i=this.isVolatileBinding(e)){return new BindingObserverImplementation(e,t,i)},isVolatileBinding:t=>e.test(t.toString())})}));function w(e,t){y.defineProperty(e,t)}const x=l.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class ExecutionContext{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return x.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){x.set(e)}}y.defineProperty(ExecutionContext.prototype,"index"),y.defineProperty(ExecutionContext.prototype,"length");const S=Object.seal(new ExecutionContext);class ElementStyles{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function C(e){return e.map((e=>e instanceof ElementStyles?C(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function $(e){return e.map((e=>e instanceof ElementStyles?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}ElementStyles.create=(()=>{if(v.supportsAdoptedStyleSheets){const e=new Map;return t=>new AdoptedStyleSheetsStyles(t,e)}return e=>new StyleElementStyles(e)})();const A=Symbol("prependToAdoptedStyleSheets");function _(e){const t=[],i=[];return e.forEach((e=>(e[A]?t:i).push(e))),{prepend:t,append:i}}let P=(e,t)=>{const{prepend:i,append:o}=_(t);e.adoptedStyleSheets=[...i,...e.adoptedStyleSheets,...o]},T=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(v.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),P=(e,t)=>{const{prepend:i,append:o}=_(t);e.adoptedStyleSheets.splice(0,0,...i),e.adoptedStyleSheets.push(...o)},T=(e,t)=>{for(const i of t){const t=e.adoptedStyleSheets.indexOf(i);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(Vo){}class AdoptedStyleSheetsStyles extends ElementStyles{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=$(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=C(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let i=t.get(e);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(e),t.set(e,i)),i}))}return this._styleSheets}addStylesTo(e){P(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){T(e,this.styleSheets),super.removeStylesFrom(e)}}let D=0;class StyleElementStyles extends ElementStyles{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=$(e),this.styleSheets=C(e),this.styleClass="fast-style-class-"+ ++D}addStylesTo(e){const t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let o=0;o<t.length;o++){const s=document.createElement("style");s.innerHTML=t[o],s.className=i,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let i=0,o=t.length;i<o;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const O=Object.freeze({locate:h()}),E={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},F={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class AttributeDefinition{constructor(e,t,i=t.toLowerCase(),o="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=o,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===o&&void 0===s&&(this.converter=E)}setValue(e,t){const i=e[this.fieldName],o=this.converter;void 0!==o&&(t=o.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return y.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,i=this.guards;i.has(e)||"fromView"===t||v.queueUpdate((()=>{i.add(e);const o=e[this.fieldName];switch(t){case"reflect":const t=this.converter;v.setAttribute(e,this.attribute,void 0!==t?t.toView(o):o);break;case"boolean":v.setBooleanAttribute(e,this.attribute,o)}i.delete(e)}))}static collect(e,...t){const i=[];t.push(O.locate(e));for(let o=0,s=t.length;o<s;++o){const s=t[o];if(void 0!==s)for(let t=0,o=s.length;t<o;++t){const o=s[t];"string"==typeof o?i.push(new AttributeDefinition(e,o)):i.push(new AttributeDefinition(e,o.property,o.attribute,o.mode,o.converter))}}return i}}function B(e,t){let i;function o(e,t){arguments.length>1&&(i.property=t),O.locate(e.constructor).push(i)}return arguments.length>1?(i={},void o(e,t)):(i=void 0===e?{}:e,o)}const N={mode:"open"},z={},U=l.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class fast_definitions_FASTElementDefinition{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const i=AttributeDefinition.collect(e,t.attributes),o=new Array(i.length),s={},r={};for(let e=0,t=i.length;e<t;++e){const t=i[e];o[e]=t.attribute,s[t.name]=t,r[t.attribute]=t}this.attributes=i,this.observedAttributes=o,this.propertyLookup=s,this.attributeLookup=r,this.shadowOptions=void 0===t.shadowOptions?N:null===t.shadowOptions?void 0:Object.assign(Object.assign({},N),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?z:Object.assign(Object.assign({},z),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?ElementStyles.create(t.styles):t.styles instanceof ElementStyles?t.styles:ElementStyles.create([t.styles])}get isDefined(){return!!U.getByType(this.type)}define(e=customElements){const t=this.type;if(U.register(this)){const e=this.attributes,i=t.prototype;for(let t=0,o=e.length;t<o;++t)y.defineProperty(i,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}fast_definitions_FASTElementDefinition.forType=U.getByType;function W(e,t,i,o){var s,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(r<3?s(a):r>3?s(t,i,a):s(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;const j=new WeakMap,q={bubbles:!0,composed:!0,cancelable:!0};function G(e){return e.shadowRoot||j.get(e)||null}class Controller extends PropertyChangeNotifier{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const i=t.shadowOptions;if(void 0!==i){const t=e.attachShadow(i);"closed"===i.mode&&j.set(e,t)}const o=y.getAccessors(e);if(o.length>0){const t=this.boundObservables=Object.create(null);for(let i=0,s=o.length;i<s;++i){const s=o[i].name,r=e[s];void 0!==r&&(delete e[s],t[s]=r)}}}get isConnected(){return y.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,y.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=G(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const i=e.behaviors;e.addStylesTo(t),null!==i&&this.addBehaviors(i)}}removeStyles(e){const t=G(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const i=e.behaviors;e.removeStylesFrom(t),null!==i&&this.removeBehaviors(i)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),i=e.length,o=[];for(let s=0;s<i;++s){const i=e[s];t.has(i)?t.set(i,t.get(i)+1):(t.set(i,1),o.push(i))}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].bind(e,S)}}removeBehaviors(e,t=!1){const i=this.behaviors;if(null===i)return;const o=e.length,s=[];for(let r=0;r<o;++r){const o=e[r];if(i.has(o)){const e=i.get(o)-1;0===e||t?i.delete(o)&&s.push(o):i.set(o,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,S);const t=this.behaviors;if(null!==t)for(const[i]of t)i.bind(e,S);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[i]of t)i.unbind(e)}}onAttributeChangedCallback(e,t,i){const o=this.definition.attributeLookup[e];void 0!==o&&o.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},q),i)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const i=Object.keys(t);for(let o=0,s=i.length;o<s;++o){const s=i[o];e[s]=t[s]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,i=G(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||v.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const i=fast_definitions_FASTElementDefinition.forType(e.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return e.$fastController=new Controller(e,i)}}function Q(e){return class extends e{constructor(){super(),Controller.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}const K=Object.assign(Q(HTMLElement),{from:e=>Q(e),define:(e,t)=>new fast_definitions_FASTElementDefinition(e,t).define().type});const Y=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let o=Y.get(i);void 0===o&&Y.set(i,o=new Map),o.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=Y.get(t);if(void 0!==i)return i.get(e)});class ResolverBuilder{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,ye(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:i,key:o}=this;return this.container=this.key=void 0,i.registerResolver(o,new ResolverImpl(o,e,t))}}function J(e){const t=e.slice(),i=Object.keys(e),o=i.length;let s;for(let r=0;r<o;++r)s=i[r],Re(s)||(t[s]=e[s]);return t}const Z=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new ResolverImpl(e,1,e),transient:e=>new ResolverImpl(e,2,e)}),X=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Z.singleton})}),ee=new Map;function te(e){return t=>Reflect.getOwnMetadata(e,t)}let ie=null;const oe=Object.freeze({createContainer:e=>new ContainerImpl(null,Object.assign({},X.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:oe.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(me,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||oe.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new ContainerImpl(e,Object.assign({},X.default,t,{parentLocator:oe.findParentContainer})):ie||(ie=new ContainerImpl(null,Object.assign({},X.default,t,{parentLocator:()=>null}))),getDesignParamtypes:te("design:paramtypes"),getAnnotationParamtypes:te("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=ee.get(e);if(void 0===t){const i=e.inject;if(void 0===i){const i=oe.getDesignParamtypes(e),o=oe.getAnnotationParamtypes(e);if(void 0===i)if(void 0===o){const i=Object.getPrototypeOf(e);t="function"==typeof i&&i!==Function.prototype?J(oe.getDependencies(i)):[]}else t=J(o);else if(void 0===o)t=J(i);else{t=J(i);let e,s=o.length;for(let i=0;i<s;++i)e=o[i],void 0!==e&&(t[i]=e);const r=Object.keys(o);let a;s=r.length;for(let e=0;e<s;++e)a=r[e],Re(a)||(t[a]=o[a])}}else t=J(i);ee.set(e,t)}return t},defineProperty(e,t,i,o=!1){const s=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[s];if(void 0===e){const r=this instanceof HTMLElement?oe.findResponsibleContainer(this):oe.getOrCreateDOMContainer();if(e=r.get(i),this[s]=e,o&&this instanceof K){const o=this.$fastController,r=()=>{oe.findResponsibleContainer(this).get(i)!==this[s]&&(this[s]=e,o.notify(t))};o.subscribe({handleChange:r},"isConnected")}}return e}})},createInterface(e,t){const i="function"==typeof e?e:t,o="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Ce,s="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),r=function(e,t,i){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${r.friendlyName}'`);if(t)oe.defineProperty(e,t,r,s);else{oe.getOrCreateAnnotationParamTypes(e)[i]=r}};return r.$isInterface=!0,r.friendlyName=o??"(anonymous)",null!=i&&(r.register=function(e,t){return i(new ResolverBuilder(e,null!=t?t:r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject:(...e)=>function(t,i,o){if("number"==typeof o){const i=oe.getOrCreateAnnotationParamTypes(t),s=e[0];void 0!==s&&(i[o]=s)}else if(i)oe.defineProperty(t,i,e[0]);else{const i=o?oe.getOrCreateAnnotationParamTypes(o.value):oe.getOrCreateAnnotationParamTypes(t);let s;for(let t=0;t<e.length;++t)s=e[t],void 0!==s&&(i[t]=s)}},transient:e=>(e.register=function(t){return we.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=re)=>(e.register=function(t){return we.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),se=oe.createInterface("Container");function ne(e){return function(t){const i=function(e,t,o){oe.inject(i)(e,t,o)};return i.$isResolver=!0,i.resolve=function(i,o){return e(t,i,o)},i}}oe.inject;const re={scoped:!1};ae=(e,t,i,o)=>i.getAll(e,o);var ae;ne(((e,t,i)=>()=>i.get(e))),ne(((e,t,i)=>i.has(e,!0)?i.get(e):void 0));function le(e,t,i){oe.inject(le)(e,t,i)}le.$isResolver=!0,le.resolve=()=>{};ne(((e,t,i)=>{const o=ce(e,t),s=new ResolverImpl(e,0,o);return i.registerResolver(e,s),o})),ne(((e,t,i)=>ce(e,t)));function ce(e,t){return t.getFactory(e).construct(t)}class ResolverImpl{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=e.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,o;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(o=null===(i=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===i?void 0:i.call(t,e))&&void 0!==o?o:null;default:return null}}}function he(e){return this.get(e)}function de(e,t){return t(e)}class FactoryImpl{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return i=void 0===t?new this.Type(...this.dependencies.map(he,e)):new this.Type(...this.dependencies.map(he,e),...t),null==this.transformers?i:this.transformers.reduce(de,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const ue={$isResolver:!0,resolve:(e,t)=>t};function pe(e){return"function"==typeof e.register}function ge(e){return function(e){return pe(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const fe=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),me="__DI_LOCATE_PARENT__",be=new Map;class ContainerImpl{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(se,ue),e instanceof Node&&e.addEventListener(me,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,i,o,s,r;const a=this.context;for(let l=0,c=e.length;l<c;++l)if(t=e[l],ke(t))if(pe(t))t.register(this,a);else if(void 0!==t.prototype)we.singleton(t,t).register(this);else for(i=Object.keys(t),s=0,r=i.length;s<r;++s)o=t[i[s]],ke(o)&&(pe(o)?o.register(this,a):this.register(o));return--this.registerDepth,this}registerResolver(e,t){xe(e);const i=this.resolvers,o=i.get(e);return null==o?i.set(e,t):o instanceof ResolverImpl&&4===o.strategy?o.state.push(t):i.set(e,new ResolverImpl(e,4,[o,t])),t}registerTransformer(e,t){const i=this.getResolver(e);if(null==i)return!1;if(i.getFactory){const e=i.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(xe(e),void 0!==e.resolve)return e;let i,o=this;for(;null!=o;){if(i=o.resolvers.get(e),null!=i)return i;if(null==o.parent){const i=ge(e)?this:o;return t?this.jitRegister(e,i):null}o=o.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(xe(e),e.$isResolver)return e.resolve(this,this);let t,i=this;for(;null!=i;){if(t=i.resolvers.get(e),null!=t)return t.resolve(i,this);if(null==i.parent){const o=ge(e)?this:i;return t=this.jitRegister(e,o),t.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){xe(e);const i=this;let o,s=i;if(t){let t=c;for(;null!=s;)o=s.resolvers.get(e),null!=o&&(t=t.concat(Se(o,s,i))),s=s.parent;return t}for(;null!=s;){if(o=s.resolvers.get(e),null!=o)return Se(o,s,i);if(s=s.parent,null==s)return c}return c}getFactory(e){let t=be.get(e);if(void 0===t){if($e(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);be.set(e,t=new FactoryImpl(e,oe.getDependencies(e)))}return t}registerFactory(e,t){be.set(e,t)}createChild(e){return new ContainerImpl(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(fe.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(pe(e)){const i=e.register(t);if(!(i instanceof Object)||null==i.resolve){const i=t.resolvers.get(e);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}const ve=new WeakMap;function ye(e){return function(t,i,o){if(ve.has(o))return ve.get(o);const s=e(t,i,o);return ve.set(o,s),s}}const we=Object.freeze({instance:(e,t)=>new ResolverImpl(e,0,t),singleton:(e,t)=>new ResolverImpl(e,1,t),transient:(e,t)=>new ResolverImpl(e,2,t),callback:(e,t)=>new ResolverImpl(e,3,t),cachedCallback:(e,t)=>new ResolverImpl(e,3,ye(t)),aliasTo:(e,t)=>new ResolverImpl(t,5,e)});function xe(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Se(e,t,i){if(e instanceof ResolverImpl&&4===e.strategy){const o=e.state;let s=o.length;const r=new Array(s);for(;s--;)r[s]=o[s].resolve(t,i);return r}return[e.resolve(t,i)]}const Ce="(anonymous)";function ke(e){return"object"==typeof e&&null!==e||"function"==typeof e}const $e=function(){const e=new WeakMap;let t=!1,i="",o=0;return function(s){return t=e.get(s),void 0===t&&(i=s.toString(),o=i.length,t=o>=29&&o<=100&&125===i.charCodeAt(o-1)&&i.charCodeAt(o-2)<=32&&93===i.charCodeAt(o-3)&&101===i.charCodeAt(o-4)&&100===i.charCodeAt(o-5)&&111===i.charCodeAt(o-6)&&99===i.charCodeAt(o-7)&&32===i.charCodeAt(o-8)&&101===i.charCodeAt(o-9)&&118===i.charCodeAt(o-10)&&105===i.charCodeAt(o-11)&&116===i.charCodeAt(o-12)&&97===i.charCodeAt(o-13)&&110===i.charCodeAt(o-14)&&88===i.charCodeAt(o-15),e.set(s,t)),t}}(),Ae={};function Re(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Ae[e];if(void 0!==t)return t;const i=e.length;if(0===i)return Ae[e]=!1;let o=0;for(let t=0;t<i;++t)if(o=e.charCodeAt(t),0===t&&48===o&&i>1||o<48||o>57)return Ae[e]=!1;return Ae[e]=!0}default:return!1}}function _e(e){return`${e.toLowerCase()}:presentation`}const Pe=new Map,Te=Object.freeze({define(e,t,i){const o=_e(e);void 0===Pe.get(o)?Pe.set(o,t):Pe.set(o,!1),i.register(we.instance(o,t))},forTag(e,t){const i=_e(e),o=Pe.get(i);if(!1===o){return oe.findResponsibleContainer(t).get(i)}return o||null}});class DefaultComponentPresentation{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?ElementStyles.create(t):t instanceof ElementStyles?t:ElementStyles.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class FoundationElement extends K{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Te.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new FoundationElementRegistry(this===FoundationElement?class extends FoundationElement{}:this,e,t)}}function De(e,t,i){return"function"==typeof e?e(t,i):e}W([w],FoundationElement.prototype,"template",void 0),W([w],FoundationElement.prototype,"styles",void 0);class FoundationElementRegistry{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const i=this.definition,o=this.overrideDefinition,s=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:s,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new DefaultComponentPresentation(De(i.template,e,i),De(i.styles,e,i));e.definePresentation(t);let s=De(i.shadowOptions,e,i);e.shadowRootMode&&(s?o.shadowOptions||(s.mode=e.shadowRootMode):null!==s&&(s={mode:e.shadowRootMode})),e.defineElement({elementOptions:De(i.elementOptions,e,i),shadowOptions:s,attributes:De(i.attributes,e,i)})}})}}class CSSDirective{createCSS(){return""}createBehavior(){}}function Oe(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Ee=document.createElement("div");class QueuedStyleSheetTarget{setProperty(e,t){v.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){v.queueUpdate((()=>this.target.removeProperty(e)))}}class DocumentStyleSheetTarget extends QueuedStyleSheetTarget{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class HeadStyleElementStyleSheetTarget extends QueuedStyleSheetTarget{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class StyleElementStyleSheetTarget{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),y.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),v.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),v.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:i}=this.style;if(i){const e=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[e].style}else this.target=null}}W([w],StyleElementStyleSheetTarget.prototype,"target",void 0);class ElementStyleSheetTarget{constructor(e){this.target=e.style}setProperty(e,t){v.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){v.queueUpdate((()=>this.target.removeProperty(e)))}}class RootStyleSheetTarget{setProperty(e,t){RootStyleSheetTarget.properties[e]=t;for(const i of RootStyleSheetTarget.roots.values())Fe.getOrCreate(RootStyleSheetTarget.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete RootStyleSheetTarget.properties[e];for(const t of RootStyleSheetTarget.roots.values())Fe.getOrCreate(RootStyleSheetTarget.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=RootStyleSheetTarget;if(!t.has(e)){t.add(e);const i=Fe.getOrCreate(this.normalizeRoot(e));for(const e in RootStyleSheetTarget.properties)i.setProperty(e,RootStyleSheetTarget.properties[e])}}static unregisterRoot(e){const{roots:t}=RootStyleSheetTarget;if(t.has(e)){t.delete(e);const i=Fe.getOrCreate(RootStyleSheetTarget.normalizeRoot(e));for(const e in RootStyleSheetTarget.properties)i.removeProperty(e)}}static normalizeRoot(e){return e===Ee?document:e}}RootStyleSheetTarget.roots=new Set,RootStyleSheetTarget.properties={};const Ie=new WeakMap,Le=v.supportsAdoptedStyleSheets?class ConstructableStyleSheetTarget extends QueuedStyleSheetTarget{constructor(e){super();const t=new CSSStyleSheet;t[A]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(ElementStyles.create([t]))}}:StyleElementStyleSheetTarget,Fe=Object.freeze({getOrCreate(e){if(Ie.has(e))return Ie.get(e);let t;return e===Ee?t=new RootStyleSheetTarget:e instanceof Document?t=v.supportsAdoptedStyleSheets?new DocumentStyleSheetTarget:new HeadStyleElementStyleSheetTarget:t=e instanceof K?new Le(e):new ElementStyleSheetTarget(e),Ie.set(e,t),t}});class DesignTokenImpl extends CSSDirective{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=DesignTokenImpl.uniqueId(),DesignTokenImpl.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new DesignTokenImpl({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return DesignTokenImpl.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=DesignTokenNode.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof DesignTokenImpl&&(t=this.alias(t)),DesignTokenNode.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),DesignTokenNode.existsFor(e)&&DesignTokenNode.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Ee,e),this}subscribe(e,t){const i=this.getOrCreateSubscriberSet(t);t&&!DesignTokenNode.existsFor(t)&&DesignTokenNode.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){const i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}DesignTokenImpl.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),DesignTokenImpl.tokensById=new Map;class DesignTokenBindingObserver{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=y.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,S))}}class Store{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),y.getNotifier(this).notify(e.id))}get(e){return y.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Be=new WeakMap,Me=new WeakMap;class DesignTokenNode{constructor(e){this.target=e,this.store=new Store,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const i=DesignTokenImpl.getTokenById(t);i&&(i.notify(this.target),this.updateCSSTokenReflection(e,i))}},Be.set(e,this),y.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof K?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Be.get(e)||new DesignTokenNode(e)}static existsFor(e){return Be.has(e)}static findParent(e){if(Ee!==e.target){let t=Oe(e.target);for(;null!==t;){if(Be.has(t))return Be.get(t);t=Oe(t)}return DesignTokenNode.getOrCreate(Ee)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==Ee?DesignTokenNode.getOrCreate(Ee):null}while(null!==i);return null}get parent(){return Me.get(this)||null}updateCSSTokenReflection(e,t){if(DesignTokenImpl.isCSSDesignToken(t)){const i=this.parent,o=this.isReflecting(t);if(i){const s=i.get(t),r=e.get(t);s===r||o?s===r&&o&&this.stopReflectToCSS(t):this.reflectToCSS(t)}else o||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const i=this.getRaw(e);return void 0!==i?(this.hydrate(e,i),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=DesignTokenNode.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){DesignTokenImpl.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),DesignTokenImpl.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=DesignTokenNode.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){Me.get(this).removeChild(this)}}appendChild(e){e.parent&&Me.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));Me.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),y.getNotifier(this.store).subscribe(e);for(const[t,i]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):i)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),y.getNotifier(this.store).unsubscribe(e),e.parent===this&&Me.delete(e)}contains(e){return function(e,t){let i=t;for(;null!==i;){if(i===e)return!0;i=Oe(i)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),DesignTokenNode.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),DesignTokenNode.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const i=DesignTokenImpl.getTokenById(t);i&&(this.hydrate(i,this.getRaw(i)),this.updateCSSTokenReflection(this.store,i))}hydrate(e,t){if(!this.has(e)){const i=this.bindingObservers.get(e);DesignTokenImpl.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const i=new DesignTokenBindingObserver(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}DesignTokenNode.cssCustomPropertyReflector=new class CustomPropertyReflector{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:i}=e;this.add(t,i)}add(e,t){Fe.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(DesignTokenNode.getOrCreate(t).get(e)))}remove(e,t){Fe.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},W([w],DesignTokenNode.prototype,"children",void 0);const Ve=Object.freeze({create:function(e){return DesignTokenImpl.from(e)},notifyConnection:e=>!(!e.isConnected||!DesignTokenNode.existsFor(e))&&(DesignTokenNode.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!DesignTokenNode.existsFor(e))&&(DesignTokenNode.getOrCreate(e).unbind(),!0),registerRoot(e=Ee){RootStyleSheetTarget.registerRoot(e)},unregisterRoot(e=Ee){RootStyleSheetTarget.unregisterRoot(e)}}),Ne=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ze=new Map,He=new Map;let Ue=null;const We=oe.createInterface((e=>e.cachedCallback((e=>(null===Ue&&(Ue=new DefaultDesignSystem(null,e)),Ue))))),je=Object.freeze({tagFor:e=>He.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return oe.findResponsibleContainer(e).get(We)},getOrCreate(e){if(!e)return null===Ue&&(Ue=oe.getOrCreateDOMContainer().get(We)),Ue;const t=e.$$designSystem$$;if(t)return t;const i=oe.getOrCreateDOMContainer(e);if(i.has(We,!1))return i.get(We);{const t=new DefaultDesignSystem(e,i);return i.register(we.instance(We,t)),t}}});class DefaultDesignSystem{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Ne.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,i=[],o=this.disambiguate,s=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(e,r,a){const l=function(e,t,i){return"string"==typeof e?{name:e,type:t,callback:i}:e}(e,r,a),{name:c,callback:h,baseClass:d}=l;let{type:u}=l,p=c,g=ze.get(p),f=!0;for(;g;){const e=o(p,u,g);switch(e){case Ne.ignoreDuplicate:return;case Ne.definitionCallbackOnly:f=!1,g=void 0;break;default:p=e,g=ze.get(p)}}f&&((He.has(u)||u===FoundationElement)&&(u=class extends u{}),ze.set(p,u),He.set(u,p),d&&He.set(d,p)),i.push(new ElementDefinitionEntry(t,p,u,s,h,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&Ve.registerRoot(this.designTokenRoot)),t.registerWithContext(r,...e);for(const e of i)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class ElementDefinitionEntry{constructor(e,t,i,o,s,r){this.container=e,this.name=t,this.type=i,this.shadowRootMode=o,this.callback=s,this.willDefine=r,this.definition=null}definePresentation(e){Te.define(this.name,e,this.container)}defineElement(e){this.definition=new fast_definitions_FASTElementDefinition(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return je.tagFor(e)}}let qe=0;function Ge(e=""){return`${e}${qe++}`}var Qe;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Qe||(Qe={}));const Ke="ArrowDown",Ye="ArrowUp",Je="Enter",Ze="Escape",Xe="Home",et="End",tt="Tab";function it(...e){return e.every((e=>e instanceof HTMLElement))}let ot;class ARIAGlobalStatesAndProperties{}W([B({attribute:"aria-atomic"})],ARIAGlobalStatesAndProperties.prototype,"ariaAtomic",void 0),W([B({attribute:"aria-busy"})],ARIAGlobalStatesAndProperties.prototype,"ariaBusy",void 0),W([B({attribute:"aria-controls"})],ARIAGlobalStatesAndProperties.prototype,"ariaControls",void 0),W([B({attribute:"aria-current"})],ARIAGlobalStatesAndProperties.prototype,"ariaCurrent",void 0),W([B({attribute:"aria-describedby"})],ARIAGlobalStatesAndProperties.prototype,"ariaDescribedby",void 0),W([B({attribute:"aria-details"})],ARIAGlobalStatesAndProperties.prototype,"ariaDetails",void 0),W([B({attribute:"aria-disabled"})],ARIAGlobalStatesAndProperties.prototype,"ariaDisabled",void 0),W([B({attribute:"aria-errormessage"})],ARIAGlobalStatesAndProperties.prototype,"ariaErrormessage",void 0),W([B({attribute:"aria-flowto"})],ARIAGlobalStatesAndProperties.prototype,"ariaFlowto",void 0),W([B({attribute:"aria-haspopup"})],ARIAGlobalStatesAndProperties.prototype,"ariaHaspopup",void 0),W([B({attribute:"aria-hidden"})],ARIAGlobalStatesAndProperties.prototype,"ariaHidden",void 0),W([B({attribute:"aria-invalid"})],ARIAGlobalStatesAndProperties.prototype,"ariaInvalid",void 0),W([B({attribute:"aria-keyshortcuts"})],ARIAGlobalStatesAndProperties.prototype,"ariaKeyshortcuts",void 0),W([B({attribute:"aria-label"})],ARIAGlobalStatesAndProperties.prototype,"ariaLabel",void 0),W([B({attribute:"aria-labelledby"})],ARIAGlobalStatesAndProperties.prototype,"ariaLabelledby",void 0),W([B({attribute:"aria-live"})],ARIAGlobalStatesAndProperties.prototype,"ariaLive",void 0),W([B({attribute:"aria-owns"})],ARIAGlobalStatesAndProperties.prototype,"ariaOwns",void 0),W([B({attribute:"aria-relevant"})],ARIAGlobalStatesAndProperties.prototype,"ariaRelevant",void 0),W([B({attribute:"aria-roledescription"})],ARIAGlobalStatesAndProperties.prototype,"ariaRoledescription",void 0);class HTMLDirective{constructor(){this.targetIndex=0}}class TargetedHTMLDirective extends HTMLDirective{constructor(){super(...arguments),this.createPlaceholder=v.createInterpolationPlaceholder}}class AttachedBehaviorHTMLDirective extends HTMLDirective{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return v.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function st(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=y.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function nt(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function rt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function at(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function lt(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function ct(e){v.setAttribute(this.target,this.targetName,e)}function ht(e){v.setBooleanAttribute(this.target,this.targetName,e)}function dt(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function ut(e){this.target[this.targetName]=e}function pt(e){const t=this.classVersions||Object.create(null),i=this.target;let o=this.version||0;if(null!=e&&e.length){const s=e.split(/\s+/);for(let e=0,r=s.length;e<r;++e){const r=s[e];""!==r&&(t[r]=o,i.classList.add(r))}}if(this.classVersions=t,this.version=o+1,0!==o){o-=1;for(const e in t)t[e]===o&&i.classList.remove(e)}}class HTMLBindingDirective extends TargetedHTMLDirective{constructor(e){super(),this.binding=e,this.bind=st,this.unbind=rt,this.updateTarget=ct,this.isBindingVolatile=y.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=ut,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,i)=>v.createHTML(e(t,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=ht;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=nt,this.unbind=lt;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=pt)}}targetAtContent(){this.updateTarget=dt,this.unbind=at}createBehavior(e){return new BindingBehavior(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class BindingBehavior{constructor(e,t,i,o,s,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=o,this.unbind=s,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){ExecutionContext.setEvent(e);const t=this.binding(this.source,this.context);ExecutionContext.setEvent(null),!0!==t&&e.preventDefault()}}let gt=null;class CompilationContext{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){gt=this}static borrow(e){const t=gt||new CompilationContext;return t.directives=e,t.reset(),gt=null,t}}function ft(e){if(1===e.length)return e[0];let t;const i=e.length,o=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),s=new HTMLBindingDirective(((e,t)=>{let s="";for(let r=0;r<i;++r)s+=o[r](e,t);return s}));return s.targetName=t,s}const mt=m.length;function bt(e,t){const i=t.split(f);if(1===i.length)return null;const o=[];for(let t=0,s=i.length;t<s;++t){const s=i[t],r=s.indexOf(m);let a;if(-1===r)a=s;else{const t=parseInt(s.substring(0,r));o.push(e.directives[t]),a=s.substring(r+mt)}""!==a&&o.push(a)}return o}function vt(e,t,i=!1){const o=t.attributes;for(let s=0,r=o.length;s<r;++s){const a=o[s],l=a.value,c=bt(e,l);let h=null;null===c?i&&(h=new HTMLBindingDirective((()=>l)),h.targetName=a.name):h=ft(c),null!==h&&(t.removeAttributeNode(a),s--,r--,e.addFactory(h))}}function yt(e,t,i){const o=bt(e,t.textContent);if(null!==o){let s=t;for(let r=0,a=o.length;r<a;++r){const a=o[r],l=0===r?t:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);"string"==typeof a?l.textContent=a:(l.textContent=" ",e.captureContentBinding(a)),s=l,e.targetIndex++,l!==t&&i.nextNode()}e.targetIndex--}}const wt=document.createRange();class HTMLView{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let o,s=this.firstChild;for(;s!==t;)o=s.nextSibling,i.insertBefore(s,e),s=o;i.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let i,o=this.firstChild;for(;o!==t;)i=o.nextSibling,e.appendChild(o),o=i;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let i,o=this.firstChild;for(;o!==t;)i=o.nextSibling,e.removeChild(o),o=i;e.removeChild(t);const s=this.behaviors,r=this.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(r)}bind(e,t){const i=this.behaviors;if(this.source!==e)if(null!==this.source){const o=this.source;this.source=e,this.context=t;for(let s=0,r=i.length;s<r;++s){const r=i[s];r.unbind(o),r.bind(e,t)}}else{this.source=e,this.context=t;for(let o=0,s=i.length;o<s;++o)i[o].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let i=0,o=e.length;i<o;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){wt.setStartBefore(e[0].firstChild),wt.setEndAfter(e[e.length-1].lastChild),wt.deleteContents();for(let t=0,i=e.length;t<i;++t){const i=e[t],o=i.behaviors,s=i.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(s)}}}}class ViewTemplate{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=v.createHTML(t);const i=e.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(e=i)}else e=t;const i=function(e,t){const i=e.content;document.adoptNode(i);const o=CompilationContext.borrow(t);vt(o,e,!0);const s=o.behaviorFactories;o.reset();const r=v.createTemplateWalker(i);let a;for(;a=r.nextNode();)switch(o.targetIndex++,a.nodeType){case 1:vt(o,a);break;case 3:yt(o,a,r);break;case 8:v.isMarker(a)&&o.addFactory(t[v.extractDirectiveIndexFromMarker(a)])}let l=0;(v.isMarker(i.firstChild)||1===i.childNodes.length&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),l=-1);const c=o.behaviorFactories;return o.release(),{fragment:i,viewBehaviorFactories:c,hostBehaviorFactories:s,targetOffset:l}}(e,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,o=new Array(this.behaviorCount),s=v.createTemplateWalker(t);let r=0,a=this.targetOffset,l=s.nextNode();for(let e=i.length;r<e;++r){const e=i[r],t=e.targetIndex;for(;null!==l;){if(a===t){o[r]=e.createBehavior(l);break}l=s.nextNode(),a++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let i=0,s=t.length;i<s;++i,++r)o[r]=t[i].createBehavior(e)}return new HTMLView(t,o)}render(e,t,i){"string"==typeof t&&(t=document.getElementById(t)),void 0===i&&(i=t);const o=this.create(i);return o.bind(e,S),o.appendTo(t),o}}const xt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function St(e,...t){const i=[];let o="";for(let s=0,r=e.length-1;s<r;++s){const r=e[s];let a=t[s];if(o+=r,a instanceof ViewTemplate){const e=a;a=()=>e}if("function"==typeof a&&(a=new HTMLBindingDirective(a)),a instanceof TargetedHTMLDirective){const e=xt.exec(r);null!==e&&(a.targetName=e[2])}a instanceof HTMLDirective?(o+=a.createPlaceholder(i.length),i.push(a)):o+=a}return o+=e[e.length-1],new ViewTemplate(o,i)}class RefBehavior{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Ct(e){return new AttachedBehaviorHTMLDirective("fast-ref",RefBehavior,e)}class StartEnd{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const kt=(e,t)=>St`
    <span
        part="end"
        ${Ct("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Ct("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,$t=(e,t)=>St`
    <span
        part="start"
        ${Ct("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Ct("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;St`
    <span part="end" ${Ct("endContainer")}>
        <slot
            name="end"
            ${Ct("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,St`
    <span part="start" ${Ct("startContainer")}>
        <slot
            name="start"
            ${Ct("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function At(e,...t){const i=O.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(e.prototype,i,Object.getOwnPropertyDescriptor(t.prototype,i))}));O.locate(t).forEach((e=>i.push(e)))}))}function Rt(e){return it(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class ListboxOption extends FoundationElement{constructor(e,t,i,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),y.notify(this,"value")}get value(){var e;return y.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}W([w],ListboxOption.prototype,"checked",void 0),W([w],ListboxOption.prototype,"content",void 0),W([w],ListboxOption.prototype,"defaultSelected",void 0),W([B({mode:"boolean"})],ListboxOption.prototype,"disabled",void 0),W([B({attribute:"selected",mode:"boolean"})],ListboxOption.prototype,"selectedAttribute",void 0),W([w],ListboxOption.prototype,"selected",void 0),W([B({attribute:"value",mode:"fromView"})],ListboxOption.prototype,"initialValue",void 0);class DelegatesARIAListboxOption{}W([w],DelegatesARIAListboxOption.prototype,"ariaChecked",void 0),W([w],DelegatesARIAListboxOption.prototype,"ariaPosInSet",void 0),W([w],DelegatesARIAListboxOption.prototype,"ariaSelected",void 0),W([w],DelegatesARIAListboxOption.prototype,"ariaSetSize",void 0),At(DelegatesARIAListboxOption,ARIAGlobalStatesAndProperties),At(ListboxOption,StartEnd,DelegatesARIAListboxOption);class Listbox extends FoundationElement{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return y.track(this,"options"),this._options}set options(e){this._options=e,y.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const i=e>t?-1:e<t?1:0,o=e+i;let s=null;switch(i){case-1:s=this.options.reduceRight(((e,t,i)=>!e&&!t.disabled&&i<o?t:e),s);break;case 1:s=this.options.reduce(((e,t,i)=>!e&&!t.disabled&&i>o?t:e),s)}return this.options.indexOf(s)}handleChange(e,t){if("selected"===t)Listbox.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),Listbox.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case Xe:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case Ke:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case Ye:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case et:e.preventDefault(),this.selectLastOption();break;case tt:return this.focusAndScrollOptionIntoView(),!0;case Je:case Ze:return!0;case" ":if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(this.hasSelectableOptions){if((null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.disabled)&&"number"==typeof e){const i=this.getSelectableIndex(e,t),o=i>-1?i:e;return this.selectedIndex=o,void(t===o&&this.selectedIndexChanged(t,o))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var i;const o=t.filter(Listbox.slottedOptionFilter);null===(i=this.options)||void 0===i||i.forEach((e=>{const t=y.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=o.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let i=e.length;for(;i--;)if(t(e[i],i,e))return i;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,i;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Rt(t)&&e.push(t),e)),[]);const i=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=Ge("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=i})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}Listbox.slottedOptionFilter=e=>Rt(e)&&!e.hidden,Listbox.TYPE_AHEAD_TIMEOUT_MS=1e3,W([B({mode:"boolean"})],Listbox.prototype,"disabled",void 0),W([w],Listbox.prototype,"selectedIndex",void 0),W([w],Listbox.prototype,"selectedOptions",void 0),W([w],Listbox.prototype,"slottedOptions",void 0),W([w],Listbox.prototype,"typeaheadBuffer",void 0);class DelegatesARIAListbox{}function _t(e,t,i=0){return[t,i]=[t,i].sort(((e,t)=>e-t)),t<=e&&e<i}W([w],DelegatesARIAListbox.prototype,"ariaActiveDescendant",void 0),W([w],DelegatesARIAListbox.prototype,"ariaDisabled",void 0),W([w],DelegatesARIAListbox.prototype,"ariaExpanded",void 0),W([w],DelegatesARIAListbox.prototype,"ariaMultiSelectable",void 0),At(DelegatesARIAListbox,ARIAGlobalStatesAndProperties),At(Listbox,DelegatesARIAListbox);class ListboxElement extends Listbox{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,o;this.ariaActiveDescendant=null!==(o=null===(i=this.options[t])||void 0===i?void 0:i.id)&&void 0!==o?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=_t(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=_t(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=_t(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=_t(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const i=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return i&&!i.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case Xe:return void this.checkFirstOption(i);case Ke:return void this.checkNextOption(i);case Ye:return void this.checkPreviousOption(i);case et:return void this.checkLastOption(i);case tt:return this.focusAndScrollOptionIntoView(),!0;case Ze:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case" ":if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,null===(i=this.options)||void 0===i||i.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var i;const o=Math.max(0,parseInt(null!==(i=null==t?void 0:t.toFixed())&&void 0!==i?i:"",10));o!==t&&v.queueUpdate((()=>{this.size=o}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}W([w],ListboxElement.prototype,"activeIndex",void 0),W([B({mode:"boolean"})],ListboxElement.prototype,"multiple",void 0),W([B({converter:F})],ListboxElement.prototype,"size",void 0);const Pt="form-associated-proxy",Tt="ElementInternals",Dt=Tt in window&&"setFormValue"in window[Tt].prototype,Ot=new WeakMap;function Et(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Dt}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=e?t.concat(Array.from(e)):t;return Object.freeze(i)}return c}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),v.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),v.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Dt)return null;let e=Ot.get(this);return e||(e=this.attachInternals(),Ot.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,i){this.elementInternals?this.elementInternals.setValidity(e,t,i):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Pt),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Pt)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===Je)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return B({mode:"boolean"})(t.prototype,"disabled"),B({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),B({attribute:"current-value"})(t.prototype,"currentValue"),B(t.prototype,"name"),B({mode:"boolean"})(t.prototype,"required"),w(t.prototype,"value"),t}class _Select extends ListboxElement{}class FormAssociatedSelect extends(Et(_Select)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const It="above",Lt="below";class Select extends FormAssociatedSelect{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ge("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void v.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return y.track(this,"value"),this._value}set value(e){var t,i,o,s,r,a,l;const c=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),c=null!==(o=null===(i=this._options[this.selectedIndex])||void 0===i?void 0:i.value)&&void 0!==o?o:null,h=null!==(r=null===(s=this._options[t])||void 0===s?void 0:s.value)&&void 0!==r?r:null;-1!==t&&c===h||(e="",this.selectedIndex=t),e=null!==(l=null===(a=this.firstSelectedOption)||void 0===a?void 0:a.value)&&void 0!==l?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),y.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,i;this.$fastController.isConnected&&(this.value=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==i?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?It:Lt,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===It?~~e.top:~~t}get displayValue(){var e,t;return y.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;this.isSameNode(i)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(i))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{y.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{y.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var i;super.selectedOptionsChanged(e,t),null===(i=this.options)||void 0===i||i.forEach(((e,t)=>{var i;const o=null===(i=this.proxy)||void 0===i?void 0:i.options.item(t);o&&(o.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(Listbox.slottedOptionFilter),i=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===i?0:i}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case" ":e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case Xe:case et:e.preventDefault();break;case Je:e.preventDefault(),this.open=!this.open;break;case Ze:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case tt:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Ke||t===Ye)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&y.notify(this,"displayValue")}}W([B({attribute:"open",mode:"boolean"})],Select.prototype,"open",void 0),W([function(e,t,i){return Object.assign({},i,{get:function(){return y.trackVolatile(),i.get.apply(this)}})}],Select.prototype,"collapsible",null),W([w],Select.prototype,"control",void 0),W([B({attribute:"position"})],Select.prototype,"positionAttribute",void 0),W([w],Select.prototype,"position",void 0),W([w],Select.prototype,"maxHeight",void 0);class DelegatesARIASelect{}W([w],DelegatesARIASelect.prototype,"ariaControls",void 0),At(DelegatesARIASelect,DelegatesARIAListbox),At(Select,StartEnd,DelegatesARIASelect);const Ft=e=>"function"==typeof e,Bt=()=>null;function Mt(e){return void 0===e?Bt:Ft(e)?e:()=>e}class NodeObservationBehavior{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=y.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(c),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class SlottedBehavior extends NodeObservationBehavior{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Vt(e){return"string"==typeof e&&(e={property:e}),new AttachedBehaviorHTMLDirective("fast-slotted",SlottedBehavior,e)}function Nt(e,t){const i=[];let o="";const s=[];for(let r=0,a=e.length-1;r<a;++r){o+=e[r];let a=t[r];if(a instanceof CSSDirective){const e=a.createBehavior();a=a.createCSS(),e&&s.push(e)}a instanceof ElementStyles||a instanceof CSSStyleSheet?(""!==o.trim()&&(i.push(o),o=""),i.push(a)):o+=a}return o+=e[e.length-1],""!==o.trim()&&i.push(o),{styles:i,behaviors:s}}function zt(e,...t){const{styles:i,behaviors:o}=Nt(e,t),s=ElementStyles.create(i);return o.length&&s.withBehaviors(...o),s}function Ht(e){return`:host([hidden]){display:none}:host{display:${e}}`}const Ut=function(){if("boolean"==typeof ot)return ot;if("undefined"==typeof window||!window.document||!window.document.createElement)return ot=!1,ot;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),ot=!0}catch(e){ot=!1}finally{document.head.removeChild(e)}return ot}()?"focus-visible":"focus",Wt="not-allowed";function jt(e){const t=getComputedStyle(document.body),i=document.querySelector("body");if(i){const o=i.getAttribute("data-vscode-theme-kind");for(const[s,r]of e){let e=t.getPropertyValue(s).toString();if("vscode-high-contrast"===o)0===e.length&&r.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===r.name&&(e="transparent");else if("vscode-high-contrast-light"===o){if(0===e.length&&r.name.includes("background"))switch(r.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===r.name&&(e="transparent");r.setValueFor(i,e)}}}const qt=new Map;let Gt=!1;function Qt(e,t){const i=Ve.create(e);if(t){if(t.includes("--fake-vscode-token")){t=`${t}-${"id"+Math.random().toString(16).slice(2)}`}qt.set(t,i)}return Gt||(!function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{jt(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),jt(e)}))}(qt),Gt=!0),i}Qt("background","--vscode-editor-background").withDefault("#1e1e1e");const Kt=Qt("border-width").withDefault(1),Yt=(Qt("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),Qt("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),Qt("corner-radius").withDefault(0)),Jt=Qt("corner-radius-round").withDefault(2),Zt=Qt("design-unit").withDefault(4),Xt=Qt("disabled-opacity").withDefault(.4),ei=Qt("focus-border","--vscode-focusBorder").withDefault("#007fd4"),ti=Qt("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),ii=(Qt("font-weight","--vscode-font-weight").withDefault("400"),Qt("foreground","--vscode-foreground").withDefault("#cccccc")),oi=Qt("input-height").withDefault("26"),si=Qt("input-min-width").withDefault("100px"),ni=Qt("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),ri=Qt("type-ramp-base-line-height").withDefault("normal"),ai=(Qt("type-ramp-minus1-font-size").withDefault("11px"),Qt("type-ramp-minus1-line-height").withDefault("16px"),Qt("type-ramp-minus2-font-size").withDefault("9px"),Qt("type-ramp-minus2-line-height").withDefault("16px"),Qt("type-ramp-plus1-font-size").withDefault("16px"),Qt("type-ramp-plus1-line-height").withDefault("24px"),Qt("scrollbarWidth").withDefault("10px"),Qt("scrollbarHeight").withDefault("10px"),Qt("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Qt("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Qt("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Qt("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Qt("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Qt("button-border","--vscode-button-border").withDefault("transparent"),Qt("button-icon-background").withDefault("transparent"),Qt("button-icon-corner-radius").withDefault("5px"),Qt("button-icon-outline-offset").withDefault(0),Qt("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),Qt("button-icon-padding").withDefault("3px"),Qt("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Qt("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Qt("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Qt("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Qt("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Qt("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Qt("button-padding-horizontal").withDefault("11px"),Qt("button-padding-vertical").withDefault("4px"),Qt("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Qt("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Qt("checkbox-corner-radius").withDefault(3),Qt("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),Qt("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),li=Qt("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),ci=(Qt("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Qt("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Qt("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c")),hi=Qt("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),di=(Qt("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),Qt("dropdown-list-max-height").withDefault("200px"));Qt("input-background","--vscode-input-background").withDefault("#3c3c3c"),Qt("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),Qt("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Qt("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Qt("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Qt("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Qt("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Qt("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Qt("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),Qt("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),Qt("panel-view-border","--vscode-panel-border").withDefault("#80808059"),Qt("tag-corner-radius").withDefault("2px");const ui=class Dropdown extends Select{}.compose({baseName:"dropdown",template:(e,t)=>St`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${function(e,t,i){const o=Ft(e)?e:()=>e,s=Mt(t),r=Mt(i);return(e,t)=>o(e,t)?s(e,t):r(e,t)}((e=>e.collapsible),St`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Ct("control")}
                >
                    ${$t(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${kt(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Ct("listbox")}
        >
            <slot
                ${Vt({filter:Listbox.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>zt`
	${Ht("inline-flex")} :host {
		background: ${ci};
		border-radius: calc(${Jt} * 1px);
		box-sizing: border-box;
		color: ${ii};
		contain: contents;
		font-family: ${ti};
		height: calc(${oi} * 1px);
		position: relative;
		user-select: none;
		min-width: ${si};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${Kt} * 1px) solid ${hi};
		border-radius: calc(${Jt} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${ni};
		line-height: ${ri};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${ci};
		border: calc(${Kt} * 1px) solid ${ei};
		border-radius: calc(${Jt} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${di};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${Ut}) .control {
		border-color: ${ei};
	}
	:host(:not([disabled]):hover) {
		background: ${ci};
		border-color: ${hi};
	}
	:host(:${Ut}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${ai};
		border: calc(${Kt} * 1px) solid transparent;
		color: ${li};
	}
	:host([disabled]) {
		cursor: ${Wt};
		opacity: ${Xt};
	}
	:host([disabled]) .control {
		cursor: ${Wt};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${ci};
		color: ${ii};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${ei};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${ei};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${oi} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${oi} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${Zt} * 4px);
		min-width: calc(${Zt} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});const pi=class option_Option extends ListboxOption{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}.compose({baseName:"option",template:(e,t)=>St`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${$t(0,t)}
        <span class="content" part="content">
            <slot ${Vt("content")}></slot>
        </span>
        ${kt(0,t)}
    </template>
`,styles:(e,t)=>zt`
	${Ht("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Yt};
		border: calc(${Kt} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${ii};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${ni};
		line-height: ${ri};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${Zt} / 2) * 1px)
			calc((${Zt} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${Ut}) {
		border-color: ${ei};
		background: ${ai};
		color: ${ii};
	}
	:host([aria-selected='true']) {
		background: ${ai};
		border: calc(${Kt} * 1px) solid transparent;
		color: ${li};
	}
	:host(:active) {
		background: ${ai};
		color: ${li};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${ai};
		border: calc(${Kt} * 1px) solid transparent;
		color: ${li};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${ai};
		color: ${ii};
	}
	:host([disabled]) {
		cursor: ${Wt};
		opacity: ${Xt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`});class IpcCall{constructor(e,t,i=!1,o=!1){this.scope=e,this.reset=i,this.pack=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const gi=new IpcCommand("core","webview/ready"),fi=new IpcCommand("core","webview/focus/changed"),mi=(new IpcCommand("core","command/execute"),new IpcCommand("core","configuration/update"),new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const bi="timeline",vi=new IpcCommand(bi,"point/open"),yi=new IpcCommand(bi,"period/update"),wi=new IpcNotification(bi,"didChange");function xi(e,t,i){let o,s,r,a,l;function c(e){const i=e-(s??0);return null==s||i>=t||i<0}function h(){const e=Date.now();if(c(e))d();else{l=setTimeout(h,t-(e-(s??0)))}}function d(){return l=void 0,o?function(){const t=o,i=r;return o=r=void 0,a=e.apply(i,t),a}():(o=void 0,r=void 0,a)}function u(...e){const d=Date.now(),u=c(d);return o=null!=i&&o?i(o,e):e,r=this,s=d,u&&null==l?(l=setTimeout(h,t),a):(null==l&&(l=setTimeout(h,t)),a)}return u.cancel=function(){null!=l&&clearTimeout(l),o=void 0,s=void 0,r=void 0,l=void 0},u.flush=function(){return null==l?a:(clearTimeout(l),d())},u.pending=function(){return null!=l},u}const Si=",",Ci="=",ki="{",$i="(",Ai=")",Ri=/\(([\s\S]*)\)/,_i=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,Pi=/\s?=.*$/;function Ti(e){const t=.001*performance.now();let i=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],o-=e[1],o<0&&(i--,o+=1e9)),[i,o]}const Di=500;function Oi(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const Ei=Oi(),Ii=new Map;function Li(e){Ii.delete(e)}function Fi(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const i=Ei.next();return{scopeId:i,prefix:`[${String(i).padStart(5)}] ${e}`}}Error;function Bi(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze({codeSuggest:"https://gitkraken.com/solutions/code-suggest?utm_source=gitlens-extension&utm_medium=in-app-links",cloudPatches:"https://gitkraken.com/solutions/cloud-patches?utm_source=gitlens-extension&utm_medium=in-app-links",graph:"https://gitkraken.com/solutions/commit-graph?utm_source=gitlens-extension&utm_medium=in-app-links",launchpad:"https://gitkraken.com/solutions/launchpad?utm_source=gitlens-extension&utm_medium=in-app-links",platform:"https://gitkraken.com/devex?utm_source=gitlens-extension&utm_medium=in-app-links",pricing:"https://gitkraken.com/gitlens/pricing?utm_source=gitlens-extension&utm_medium=in-app-links",proFeatures:"https://gitkraken.com/gitlens/pro-features?utm_source=gitlens-extension&utm_medium=in-app-links",security:"https://help.gitkraken.com/gitlens/security?utm_source=gitlens-extension&utm_medium=in-app-links",workspaces:"https://gitkraken.com/solutions/workspaces?utm_source=gitlens-extension&utm_medium=in-app-links",cli:"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links",browserExtension:"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links",desktop:"https://gitkraken.com/git-client?utm_source=gitlens-extension&utm_medium=in-app-links",releaseNotes:"https://help.gitkraken.com/gitlens/gitlens-release-notes-current/",releaseAnnouncement:"https://www.gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee?utm_source=gitlens-extension&utm_medium=in-app-links"});var Mi=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(Mi||{}),Vi=(e=>(e.ActionPrefix="gitlens.action.",e.AddAuthors="gitlens.addAuthors",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowFocusPage="gitlens.showFocusPage",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowInTimeline="gitlens.showInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWelcomePage="gitlens.showWelcomePage",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(Vi||{});const{fromCharCode:Ni}=String;new TextEncoder;function zi(e){const[t,i]=Ti(e);return 1e3*t+Math.floor(i/1e6)}function Hi(e,t,i){if(null==i)return`${t} ${e}${1===t?"":"s"}`;const o=1===t?e:i.plural??`${e}s`;return i.only?o:`${0===t?i.zero??t:i.format?.(t)??t}${i.infix??" "}${o}`}const Ui=Symbol("logInstanceNameFn");function Wi(e){return function(e,t=!1){let i,o,s,r,a,l=0,c=!1,h=!1,d=!0;null!=e&&({args:i,if:o,enter:s,exit:r,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:h=!1,timed:d=!0}=e);l>0&&(h=!0,d=!0);d&&(c=!0);const u=ji.isDebugging,p=t?ji.debug:ji.log,g=u?"debug":"info";return(e,t,f)=>{let m,v;if("function"==typeof f.value?(m=f.value,v="value"):"function"==typeof f.get&&(m=f.get,v="get"),null==m||null==v)throw new Error("Not supported");const y=!1!==i?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(_i,"")||t,t=t.slice(0,t.indexOf(ki));let i=t.indexOf($i),o=t.indexOf(Ai);i=i>=0?i+1:0,o=o>0?o:t.indexOf(Ci),t=t.slice(i,o),t=`(${t})`;const s=Ri.exec(t);return null!=s?s[1].split(Si).map((e=>e.trim().replace(Pi,""))):[]}(m):[];f[v]=function(...e){if(!u&&!ji.enabled(g)||null!=o&&!o.apply(this,e))return m.apply(this,e);const f=Ei.next(),v=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let i=t?.name??"";const o=i.indexOf("_");i=-1===o?i:i.substr(o+1),null!=t?.[Ui]&&(i=t[Ui](e,i));return i}(this):void 0;let w,x=v?c?`[${f.toString(16).padStart(5)}] ${v}.${t}`:`${v}.${t}`:t;null!=a&&(x=a({id:f,instance:this,instanceName:v??"",name:t,prefix:x},...e)),c&&(w={scopeId:f,prefix:x},function(e,t){Ii.set(e,t)}(f,w));const S=null!=s?s(...e):"";let C;if(!1===i||0===e.length)C="",h||p.call(ji,`${x}${S}`);else{let t;C="";let o,s,r,a=-1;for(r of e){if(o=y[++a],t=i?.[a],null!=t){if("boolean"==typeof t)continue;if(C.length>0&&(C+=", "),"string"==typeof t){C+=t;continue}s=String(t(r))}else C.length>0&&(C+=", "),s=ji.toLoggable(r);C+=o?`${o}=${s}`:s}h||p.call(ji,C?`${x}${S}(${C})`:`${x}${S}`)}if(h||d||null!=r){const t=d?Ti():void 0,i=e=>{const i=void 0!==t?` [${zi(t)}ms]`:"";h?ji.error(e,C?`${x}${S}(${C})`:`${x}${S}`,w?.exitDetails?`failed${w.exitDetails}${i}`:`failed${i}`):ji.error(e,x,w?.exitDetails?`failed${w.exitDetails}${i}`:`failed${i}`),c&&Li(f)};let o;try{o=m.apply(this,e)}catch(e){throw i(e),e}const s=e=>{let i,o,s,a;if(null!=t?(i=zi(t),i>Di?(o=ji.warn,s=` [*${i}ms] (slow)`):(o=p,s=` [${i}ms]`)):(s="",o=p),null!=r)if("function"==typeof r)try{a=r(e)}catch(e){a=`@log.exit error: ${e}`}else!0===r&&(a=`returned ${ji.toLoggable(e)}`);else w?.exitFailed?(a=w.exitFailed,o=ji.error):a="completed";h?(0===l||i>l)&&o.call(ji,C?`${x}${S}(${C}) ${a}${w?.exitDetails||""}${s}`:`${x}${S} ${a}${w?.exitDetails||""}${s}`):o.call(ji,C?`${x}(${C}) ${a}${w?.exitDetails||""}${s}`:`${x} ${a}${w?.exitDetails||""}${s}`),c&&Li(f)};return null!=o&&Bi(o)?o.then(s,i):s(o),o}return m.apply(this,e)}}}(e,!0)}const ji=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,i=!1){this.provider=e,this._isDebugging=i,this.logLevel=t}enabled(e){return this.level>=qi(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=qi(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...i){if(this.level<1&&!this.isDebugging)return;let o;if(o=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`,null==o){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,i)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let i;"string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const i=this.provider.toLoggable?.(e);if(null!=i)return i;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const i=t.map((e=>this.toLoggable(e))).join(", ");return 0!==i.length?` — ${i}`:""}};function qi(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const Gi={enabled:e=>ji.enabled(e)||ji.isDebugging,log:(e,t,i,...o)=>{switch(e){case"error":ji.error("",t,i,...o);break;case"warn":ji.warn(t,i,...o);break;case"info":ji.log(t,i,...o);break;default:ji.debug(t,i,...o)}}};var Qi;function Ki(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function Yi(e,t){return new Promise((i=>{e.addEventListener(t,(function o(s){s.target===e&&(e.removeEventListener(t,o),i())}))}))}(Qi||(Qi={})).on=function(e,t,i,o){let s=!1;if("string"==typeof e){const r=function(t){const o=t?.target?.closest(e);null!=o&&i(t,o)};return document.addEventListener(t,r,o??!0),{dispose:()=>{s||(s=!0,document.removeEventListener(t,r,o??!0))}}}const r=function(e){i(e,this)};return e.addEventListener(t,r,o??!1),{dispose:()=>{s||(s=!0,e.removeEventListener(t,r,o??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...i){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:Fi(e??""),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??Gi,this._time=Ti(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=Ti(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=Ti(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[i,o]=Ti(this._time),s=1e3*i+Math.floor(o/1e6),r=e?.message??"";this.logProvider.log(s>250?"warn":this.logLevel,this.logScope,`${r?`${r} `:""}[${s}ms]${e?.suffix??""}`)}}const Ji=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,i)=>{null==this.listeners&&(this.listeners=new LinkedList);const o=this.listeners.push(null==t?e:[e,t]),s={dispose:()=>{s.dispose=_Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(s),s}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};Ji._noop=function(){};let Zi=Ji;const Xi={done:!0,value:void 0},eo=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};eo.Undefined=new eo(void 0);let to=eo;class LinkedList{constructor(){this._first=to.Undefined,this._last=to.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===to.Undefined}clear(){this._first=to.Undefined,this._last=to.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const i=new to(e);if(this._first===to.Undefined)this._first=i,this._last=i;else if(t){const e=this._last;this._last=i,i.prev=e,e.next=i}else{const e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===to.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===to.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==to.Undefined&&e.next!==to.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===to.Undefined&&e.next===to.Undefined?(this._first=to.Undefined,this._last=to.Undefined):e.next===to.Undefined?(this._last=this._last.prev,this._last.next=to.Undefined):e.prev===to.Undefined&&(this._first=this._first.next,this._first.prev=to.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===to.Undefined?Xi:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==to.Undefined;t=t.next)e.push(t.element);return e}}var io=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,so=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?oo(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&io(t,i,r),r};let no;function ro(){return no??=acquireVsCodeApi()}const ao=Oi();function lo(){return`webview:${ao.next()}`}let co=class{constructor(e){this.appName=e,this._onReceiveMessage=new Zi,this._pendingHandlers=new Map,this._api=ro(),this._disposable=Qi.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=Ii.get(Ei.current),i=e.data;if(i.packed&&i.params instanceof Uint8Array){const o=function(e,t,...i){return(t?.provider??Gi).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...i):void 0}(Fi(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,i.params=JSON.parse(this._textDecoder.decode(i.params)),o?.stop()}if(null==i.completionId)this._onReceiveMessage.fire(i);else{const e=uo(i.method,i.completionId);this._pendingHandlers.get(e)?.(i)}}sendCommand(e,t){const i=lo();this.postMessage({id:i,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const i=lo(),o=new Promise(((t,o)=>{const s=uo(e.response.method,i);let r;function a(){clearTimeout(r),r=void 0,this._pendingHandlers.delete(s)}r=setTimeout((()=>{a.call(this),o(new Error(`Timed out waiting for completion of ${s}`))}),6e4),this._pendingHandlers.set(s,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,completionId:i}),o}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var ho;function uo(e,t){return`${e}|${t}`}so([Wi({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],co.prototype,"onMessageReceived",1),so([Wi({args:{0:e=>e.method,1:!1}})],co.prototype,"sendCommand",1),so([Wi({args:{0:e=>e.method,1:!1,2:!1}})],co.prototype,"sendRequest",1),so([Wi({args:{0:e=>`${e.id}, method=${e.method}`}})],co.prototype,"postMessage",1),co=so([(ho=(e,t)=>`${e.appName}(${t})`,e=>{e[Ui]=ho})],co);function po(e,t){const i=Math.pow(10,t);return Math.round(e*i)/i}class RGBA{constructor(e,t,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=po(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=po(Math.max(Math.min(1,t),0),3),this.l=po(Math.max(Math.min(1,i),0),3),this.a=po(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,i=e.g/255,o=e.b/255,s=e.a,r=Math.max(t,i,o),a=Math.min(t,i,o);let l=0,c=0;const h=(a+r)/2,d=r-a;if(d>0){switch(c=Math.min(h<=.5?d/(2*h):d/(2-2*h),1),r){case t:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-t)/d+2;break;case o:l=(t-i)/d+4}l*=60,l=Math.round(l)}return new HSLA(l,c,h,s)}static _hue2rgb(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){const t=e.h/360,{s:i,l:o,a:s}=e;let r,a,l;if(0===i)r=a=l=o;else{const e=o<.5?o*(1+i):o+i-o*i,s=2*o-e;r=HSLA._hue2rgb(s,e,t+1/3),a=HSLA._hue2rgb(s,e,t),l=HSLA._hue2rgb(s,e,t-1/3)}return new RGBA(Math.round(255*r),Math.round(255*a),Math.round(255*l),s)}}class HSVA{constructor(e,t,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=po(Math.max(Math.min(1,t),0),3),this.v=po(Math.max(Math.min(1,i),0),3),this.a=po(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,i=e.g/255,o=e.b/255,s=Math.max(t,i,o),r=s-Math.min(t,i,o),a=0===s?0:r/s;let l;return l=0===r?0:s===t?((i-o)/r%6+6)%6:s===i?(o-t)/r+2:(t-i)/r+4,new HSVA(Math.round(60*l),a,s,e.a)}static toRGBA(e){const{h:t,s:i,v:o,a:s}=e,r=o*i,a=r*(1-Math.abs(t/60%2-1)),l=o-r;let[c,h,d]=[0,0,0];return t<60?(c=r,h=a):t<120?(c=a,h=r):t<180?(h=r,d=a):t<240?(h=a,d=r):t<300?(c=a,d=r):t<=360&&(c=r,d=a),c=Math.round(255*(c+l)),h=Math.round(255*(h+l)),d=Math.round(255*(d+l)),new RGBA(c,h,d,s)}}function go(e,t){return t.getPropertyValue(e).trim()}const fo=class _Color{static from(e){return e instanceof _Color?e:xo(e)||_Color.red}static fromCssVariable(e,t){return xo(go(e,t))||_Color.red}static fromHex(e){return So(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return po(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new mo(new RGBA(0,0,0,e.rgba.a));if(1===t)return new mo(new RGBA(255,255,255,e.rgba.a));const i=e.getRelativeLuminance();let o=20;const s=(e,i)=>{const r=e.mix(i,.5),a=r.getRelativeLuminance();return Math.abs(t-a)<1e-7||!o--?r:a>t?s(e,r):s(r,i)},r=(i>t?s(mo.black,e):s(e,mo.white)).rgba;return new mo(new RGBA(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:i,b:o,a:s}=this.rgba;return new _Color(new RGBA(t,i,o,s*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,i=this.rgba.a,o=t.a,s=i+o*(1-i);if(s<1e-6)return _Color.transparent;const r=this.rgba.r*i/s+t.r*o*(1-i)/s,a=this.rgba.g*i/s+t.g*o*(1-i)/s,l=this.rgba.b*i/s+t.b*o*(1-i)/s;return new _Color(new RGBA(r,a,l,s))}mix(e,t){return function(e,t,i){const o=e.rgba,s=t.rgba;return new mo(new RGBA(o.r+i*(s.r-o.r),o.g+i*(s.g-o.g),o.b+i*(s.b-o.b),o.a+i*(s.a-o.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:i,b:o,a:s}=this.rgba;return new _Color(new RGBA(e.rgba.r-s*(e.rgba.r-t),e.rgba.g-s*(e.rgba.g-i),e.rgba.b-s*(e.rgba.b-o),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const i=1-e.rgba.a;return new _Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return yo(e);return bo(e)}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;const o=e.getRelativeLuminance(),s=t.getRelativeLuminance();return i=i*(s-o)/s,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;const o=e.getRelativeLuminance();return i=i*(o-t.getRelativeLuminance())/o,e.darken(i)}};fo.white=new fo(new RGBA(255,255,255,1)),fo.black=new fo(new RGBA(0,0,0,1)),fo.red=new fo(new RGBA(255,0,0,1)),fo.blue=new fo(new RGBA(0,0,255,1)),fo.green=new fo(new RGBA(0,255,0,1)),fo.cyan=new fo(new RGBA(0,255,255,1)),fo.lightgrey=new fo(new RGBA(211,211,211,1)),fo.transparent=new fo(new RGBA(0,0,0,0));let mo=fo;function bo(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function vo(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function yo(e){return`#${vo(e.rgba.r)}${vo(e.rgba.g)}${vo(e.rgba.b)}`}const wo=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function xo(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===Mi.Hash)return So(e);const t=wo.exec(e);if(null==t)return null;const i=t[1];let o;switch(i){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(i){case"rgb":case"rgba":return new mo(new RGBA(o[0],o[1],o[2],o[3]));case"hsl":case"hsla":return new mo(new HSLA(o[0],o[1],o[2],o[3]))}return mo.red}function So(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==Mi.Hash)return null;switch(t){case 7:{const t=16*Co(e.charCodeAt(1))+Co(e.charCodeAt(2)),i=16*Co(e.charCodeAt(3))+Co(e.charCodeAt(4)),o=16*Co(e.charCodeAt(5))+Co(e.charCodeAt(6));return new mo(new RGBA(t,i,o,1))}case 9:{const t=16*Co(e.charCodeAt(1))+Co(e.charCodeAt(2)),i=16*Co(e.charCodeAt(3))+Co(e.charCodeAt(4)),o=16*Co(e.charCodeAt(5))+Co(e.charCodeAt(6)),s=16*Co(e.charCodeAt(7))+Co(e.charCodeAt(8));return new mo(new RGBA(t,i,o,s/255))}case 4:{const t=Co(e.charCodeAt(1)),i=Co(e.charCodeAt(2)),o=Co(e.charCodeAt(3));return new mo(new RGBA(16*t+t,16*i+i,16*o+o))}case 5:{const t=Co(e.charCodeAt(1)),i=Co(e.charCodeAt(2)),o=Co(e.charCodeAt(3)),s=Co(e.charCodeAt(4));return new mo(new RGBA(16*t+t,16*i+i,16*o+o,(16*s+s)/255))}default:return null}}function Co(e){switch(e){case Mi.Digit0:return 0;case Mi.Digit1:return 1;case Mi.Digit2:return 2;case Mi.Digit3:return 3;case Mi.Digit4:return 4;case Mi.Digit5:return 5;case Mi.Digit6:return 6;case Mi.Digit7:return 7;case Mi.Digit8:return 8;case Mi.Digit9:return 9;case Mi.a:case Mi.A:return 10;case Mi.b:case Mi.B:return 11;case Mi.c:case Mi.C:return 12;case Mi.d:case Mi.D:return 13;case Mi.e:case Mi.E:return 14;case Mi.f:case Mi.F:return 15}return 0}const ko=new Zi,$o=ko.event;function Ao(e){const t=document.documentElement,i=window.getComputedStyle(t),o=document.body.classList,s=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),r=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=go("--vscode-editor-background",i);let l=go("--vscode-editor-foreground",i);return l||(l=go("--vscode-foreground",i)),{colors:{background:a,foreground:l},computedStyle:i,isLightTheme:s,isHighContrastTheme:r,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],i=Ao();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(i),t.push($o(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",ji.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=ro(),this._hostIpc=new co(this.appName),t.push(this._hostIpc),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{ko.fire(Ao(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===mi.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(gi,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(Qi.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=xi((e=>{this.sendCommand(fi,e)}),150);this.bindDisposables.push(Qi.on(document,"focusin",(t=>{const i=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===i||(this._focused=!0,this._inputFocused=i,e({focused:!0,inputFocused:i}))})),Qi.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?ji.log(e,...t):ji.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}const Ro=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,_o=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Po=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let To;const Do=new Map;let Oo,Eo,Io;function Lo(e,t,i,o=!0){const s=`${i??""}:${t=t??void 0}`;let r=Do.get(s);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=_o.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:i}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:i||void 0}}const i={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Ro))if(null!=t)for(const[e,o]of Object.entries(t))if(null!=o)switch(e){case"year":i.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:i.month="long";break;case 3:i.month="short";break;case 2:i.month="2-digit";break;case 1:i.month="numeric"}break;case"day":i.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:i.weekday="long";break;case 3:i.weekday="short";break;case 2:i.weekday="narrow"}break;case"hour":i.hour=2===o.length?"2-digit":"numeric",i.hour12="hh"===o||"h"===o;break;case"minute":i.minute=2===o.length?"2-digit":"numeric";break;case"second":i.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":i.fractionalSecondDigits=3;break;case"dayPeriod":i.dayPeriod="narrow",i.hour12=!0,i.hourCycle="h12";break;case"timeZoneName":i.timeZoneName=2===o.length?"long":"short"}return i}(t);let a;a=null==i?Oo:"system"===i?void 0:[i],r=new Intl.DateTimeFormat(a,e),o&&Do.set(s,r)}if(null==t||_o.test(t))return r.format(e);function a(e){const t=`${i??""}:time:${e}`;let s=Do.get(t);if(null==s){const r={localeMatcher:"best fit",timeStyle:e};let a;a=null==i?Oo:"system"===i?void 0:[i],s=new Intl.DateTimeFormat(a,r),o&&Do.set(t,s)}return s}const l=r.formatToParts(e);return t.replace(Ro,((t,i,o,s,r,c,h,d,u,p,g,f,m,v,y)=>{if(null!=i)return i.substring(1,i.length-1);for(const[t,i]of Object.entries(y)){if(null==i)continue;const o=l.find((e=>e.type===t));if("Do"===i&&"day"===o?.type)return Bo(Number(o.value));if("a"===i&&"dayPeriod"===o?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??o)?.value??""}`}return o?.value??""}return""}))}const Fo=["th","st","nd","rd"];function Bo(e){const t=e%100;return`${e}${Fo[(t-20)%10]??Fo[t]??Fo[0]}`}class TimelineChart{constructor(e,t){this.placement=t,this._onDidClickDataPoint=new Zi,this._commitsByTimestamp=new Map,this._authorsByIndex=new Map,this._indexByAuthors=new Map,this._dateFormat=void 0,this._shortDateFormat=void 0,this._selector=e;const i=()=>{const e=this._size;this._chart?.resize({width:e.width,height:e.height})},o=this.compact?32:0,s=this.compact?16:0;this.$container=document.querySelector(e).parentElement,this._resizeObserver=new ResizeObserver((e=>{const t=e[0].borderBoxSize[0],r={width:Math.floor(t.inlineSize)+o,height:Math.floor(t.blockSize)+s};this._size=r,requestAnimationFrame(i)}));const r=this.$container.getBoundingClientRect();this._size={height:Math.floor(r.height)+o,width:Math.floor(r.width)+s},this._resizeObserver.observe(this.$container,{box:"border-box"})}get onDidClickDataPoint(){return this._onDidClickDataPoint.event}get compact(){return"editor"!==this.placement}dispose(){this._resizeObserver.disconnect(),this._chart?.destroy()}reset(){this._chart?.unselect(),this._chart?.unzoom()}setEmptyState(e,t){const i=document.getElementById("empty"),o=document.getElementById("header");null!=t.uri?(0===e?.length?(i.innerHTML="<p>No commits found for the specified time period.</p>",i.removeAttribute("hidden")):i.setAttribute("hidden",""),o.removeAttribute("hidden")):null==e?(i.innerHTML="<p>There are no editors open that can provide file history information.</p>",i.removeAttribute("hidden"),o.setAttribute("hidden","")):(i.setAttribute("hidden",""),o.removeAttribute("hidden"))}async updateChart(e){this._dateFormat=e.dateFormat,this._shortDateFormat=e.shortDateFormat,this._commitsByTimestamp.clear(),this._authorsByIndex.clear(),this._indexByAuthors.clear();let t=e?.dataset;if(null!=t||e.access.allowed||"editor"!==this.placement||(t=function(){const e=[],t=["Eric Amodio","Justin Roberts","Keith Daulton","Ramin Tadayon","Ada Lovelace","Grace Hopper"],i=10;for(let o=0;o<i;o++){const s=new Date((new Date).getTime()-Math.floor(7776e6*Math.random()));e.push({commit:String(o),author:t[Math.floor(Math.random()*t.length)],date:s.toISOString(),message:"",additions:0===o?2:o===i-1?50:Math.floor(20*Math.random())+1,deletions:0===o?1:o===i-1?25:Math.floor(20*Math.random())+1,sort:s.getTime()})}return e.sort(((e,t)=>t.sort-e.sort))}()),this.setEmptyState(t,e),null==t||0===t.length)return this._chart?.destroy(),void(this._chart=void 0);const i={},s={},r={},a={},l={},c=[],h={},d=[];let u,p,g,f,m,v=0;const{bb:y,bar:w,bubble:x,zoom:S}=await o.e(162).then(o.bind(o,86));for(u of t){({author:p,date:g,additions:f,deletions:m}=u),this._indexByAuthors.has(p)||(this._indexByAuthors.set(p,v),this._authorsByIndex.set(v,p),v--);const e="time";null==h[e]&&(h[e]=[],h.additions=[],h.deletions=[],i.additions=e,i.deletions=e,a.additions="y2",a.deletions="y2",r.additions="Additions",r.deletions="Deletions",s.additions="rgba(73, 190, 71, 1)",s.deletions="rgba(195, 32, 45, 1)",l.additions=w(),l.deletions=w(),d.push(e),c.push(["additions","deletions"]));const t=`${e}.${p}`;null==h[t]&&(h[t]=[],h[p]=[],i[p]=t,a[p]="y",r[p]=p,l[p]=x(),d.push(t)),h[e].push(g),h.additions.push(f??0),h.deletions.push(m??0),h[t].push(g);const o=null==f&&null==m?6:(f??0)+(m??0);h[p].push({y:this._indexByAuthors.get(p),z:o}),this._commitsByTimestamp.set(g,u)}c.push(d);const C=Object.entries(h).map((([e,t])=>[e,...t]));null!=this._chart&&null!=this._loading&&(this._loading.cancel(),this._loading=void 0,this._chart?.destroy(),this._chart=void 0),this._loading=function(){const e={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0};return e.promise=new Promise(((t,i)=>{e.fulfill=function(i){e.pending=!1,t(i)},e.cancel=function(t){e.pending=!1,null!=t?i(t):i()}})),e}();try{if(null==this._chart){const e=this.getChartOptions(S);null==e.axis&&(e.axis={y:{tick:{}}}),null==e.axis.y&&(e.axis.y={tick:{}}),null==e.axis.y.tick&&(e.axis.y.tick={}),e.axis.y.min=v-2,e.axis.y.tick.values=[...this._authorsByIndex.keys()],e.data={...e.data,axes:a,colors:s,columns:C,groups:c,names:r,types:l,xs:i},e.onafterinit=()=>setTimeout((()=>{this._loading?.fulfill(),this._loading=void 0}),250),this._chart=y.generate(e)}else this._chart.config("axis.y.tick.values",[...this._authorsByIndex.keys()],!1),this._chart.config("axis.y.min",v-2,!1),this._chart.groups(c),this._chart.load({axes:a,colors:s,columns:C,names:r,types:l,xs:i,unload:!0,done:()=>{setTimeout((()=>{this._loading?.fulfill(),this._loading=void 0}),250)}});return this._loading.promise}catch(e){}}getChartOptions(e){const t={bindto:this._selector,data:{xFormat:"%Y-%m-%dT%H:%M:%S.%LZ",xLocaltime:!1,onclick:this.onDataPointClicked.bind(this)},axis:{x:{type:"timeseries",clipPath:!1,localtime:!0,show:!0,tick:{centered:!0,culling:!1,fit:!1,format:e=>this.compact?"":"number"==typeof e?e:Lo(e,this._shortDateFormat??"short"),multiline:!1,show:!1,outer:!this.compact}},y:{max:0,padding:{top:75,bottom:100},show:!0,tick:{format:e=>this.compact?"":this._authorsByIndex.get(e)??"",outer:!this.compact,show:this.compact}},y2:{padding:this.compact?{top:0,bottom:0}:void 0,label:this.compact?void 0:{text:"Lines changed",position:"outer-middle"},show:!0,tick:{format:e=>this.compact?"":e,outer:!this.compact}}},bar:{width:2,sensitivity:4,padding:2},bubble:{maxR:100,zerobased:!0},grid:{focus:{edge:!0,show:!0,y:!0},front:!1,lines:{front:!1},x:{show:!1},y:{show:!0}},legend:{show:!this.compact,padding:10},point:{sensitivity:"radius"},resize:{auto:!1},size:this._size,tooltip:{grouped:!0,format:{title:this.getTooltipTitle.bind(this),name:this.getTooltipName.bind(this),value:this.getTooltipValue.bind(this)},show:!0,order:"desc"},zoom:{enabled:e(),type:"drag",rescale:!0,resetButton:!0,extent:[1,.01],x:{min:100}}};return t}getTooltipName(e,t,i,o){if("additions"===i||"deletions"===i)return e;const s=new Date(this._chart.data(i)[0].values[o].x),r=this._commitsByTimestamp.get(s.toISOString());return r?.commit.slice(0,8)??"00000000"}getTooltipTitle(e){const t=new Date(e),i=`${function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(function(e,t){const i=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,o,s,r]of Po){const a=Math.abs(i);if(a>=o||1e3===o)return t?(null==To&&(null!=Io?To=Io.resolvedOptions().locale:null!=Eo?To=Eo.resolvedOptions().locale:(Io=new Intl.RelativeTimeFormat(Oo,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),To=Io.resolvedOptions().locale)),"en"===To||To?.startsWith("en-")?`${Math.round(a/s)}${r}`:(null==Io&&(Io=new Intl.RelativeTimeFormat(Oo,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Io.format(Math.round(i/s),e))):(null==Eo&&(Eo=new Intl.RelativeTimeFormat(Oo,{localeMatcher:"best fit",numeric:"auto",style:"long"})),Eo.format(Math.round(i/s),e))}return""}(t))}   (${Lo(t,this._dateFormat)})`,o=this._commitsByTimestamp.get(t.toISOString());return null==o?i:`${o.author}, ${i}`}getTooltipValue(e,t,i,o){if("additions"===i||"deletions"===i)return 0===e?void 0:e;const s=new Date(this._chart.data(i)[0].values[o].x),r=this._commitsByTimestamp.get(s.toISOString());return r?.message??"???"}onDataPointClicked(e,t){const i=this._commitsByTimestamp.get(new Date(e.x).toISOString());null!=i&&this._onDidClickDataPoint.fire({data:{id:i.commit,selected:!0}})}}const Mo=globalThis,Vo=Mo.ShadowRoot&&(void 0===Mo.ShadyCSS||Mo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,No=Symbol(),zo=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==No)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Vo&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=zo.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&zo.set(t,e))}return e}toString(){return this.cssText}}const Ho=e=>new n("string"==typeof e?e:e+"",void 0,No),Uo=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new n(i,e,No)},Wo=Vo?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ho(t)})(e):e,{is:jo,defineProperty:qo,getOwnPropertyDescriptor:Go,getOwnPropertyNames:Qo,getOwnPropertySymbols:Ko,getPrototypeOf:Yo}=Object,Jo=globalThis,Zo=Jo.trustedTypes,Xo=Zo?Zo.emptyScript:"",es=Jo.reactiveElementPolyfillSupport,ts=(e,t)=>e,is={toAttribute(e,t){switch(t){case Boolean:e=e?Xo:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},os=(e,t)=>!jo(e,t),ss={attribute:!0,type:String,converter:is,reflect:!1,hasChanged:os};Symbol.metadata??=Symbol("metadata"),Jo.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ss){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&qo(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=Go(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const r=o?.call(this);s.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ss}static _$Ei(){if(this.hasOwnProperty(ts("elementProperties")))return;const e=Yo(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ts("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ts("properties"))){const e=this.properties,t=[...Qo(e),...Ko(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(Wo(e))}else void 0!==e&&t.push(Wo(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Vo)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),o=Mo.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:is).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:is;this._$Em=o,this[o]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??os)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[ts("elementProperties")]=new Map,b[ts("finalized")]=new Map,es?.({ReactiveElement:b}),(Jo.reactiveElementVersions??=[]).push("2.0.4");const ns=globalThis,rs=ns.trustedTypes,as=rs?rs.createPolicy("lit-html",{createHTML:e=>e}):void 0,ls="$lit$",cs=`lit$${Math.random().toFixed(9).slice(2)}$`,hs="?"+cs,ds=`<${hs}>`,us=document,ps=()=>us.createComment(""),gs=e=>null===e||"object"!=typeof e&&"function"!=typeof e,fs=Array.isArray,ms=e=>fs(e)||"function"==typeof e?.[Symbol.iterator],bs="[ \t\n\f\r]",vs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ys=/-->/g,ws=/>/g,xs=RegExp(`>|${bs}(?:([^\\s"'>=/]+)(${bs}*=${bs}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Ss=/'/g,Cs=/"/g,ks=/^(?:script|style|textarea|title)$/i,$s=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),As=$s(1),Rs=($s(2),Symbol.for("lit-noChange")),_s=Symbol.for("lit-nothing"),Ps=new WeakMap,Ts=us.createTreeWalker(us,129);function Ds(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==as?as.createHTML(t):t}const Os=(e,t)=>{const i=e.length-1,o=[];let s,r=2===t?"<svg>":"",a=vs;for(let t=0;t<i;t++){const i=e[t];let l,c,h=-1,d=0;for(;d<i.length&&(a.lastIndex=d,c=a.exec(i),null!==c);)d=a.lastIndex,a===vs?"!--"===c[1]?a=ys:void 0!==c[1]?a=ws:void 0!==c[2]?(ks.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=xs):void 0!==c[3]&&(a=xs):a===xs?">"===c[0]?(a=s??vs,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?xs:'"'===c[3]?Cs:Ss):a===Cs||a===Ss?a=xs:a===ys||a===ws?a=vs:(a=xs,s=void 0);const u=a===xs&&e[t+1].startsWith("/>")?" ":"";r+=a===vs?i+ds:h>=0?(o.push(l),i.slice(0,h)+ls+i.slice(h)+cs+u):i+cs+(-2===h?t:u)}return[Ds(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class V{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,r=0;const a=e.length-1,l=this.parts,[c,h]=Os(e,t);if(this.el=V.createElement(c,i),Ts.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Ts.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(ls)){const t=h[r++],i=o.getAttribute(e).split(cs),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?k:"?"===a[1]?H:"@"===a[1]?I:R}),o.removeAttribute(e)}else e.startsWith(cs)&&(l.push({type:6,index:s}),o.removeAttribute(e));if(ks.test(o.tagName)){const e=o.textContent.split(cs),t=e.length-1;if(t>0){o.textContent=rs?rs.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],ps()),Ts.nextNode(),l.push({type:2,index:++s});o.append(e[t],ps())}}}else if(8===o.nodeType)if(o.data===hs)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(cs,e+1));)l.push({type:7,index:s}),e+=cs.length-1}s++}}static createElement(e,t){const i=us.createElement("template");return i.innerHTML=e,i}}function Es(e,t,i=e,o){if(t===Rs)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=gs(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=Es(e,s._$AS(e,t.values),s,o)),t}class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??us).importNode(t,!0);Ts.currentNode=o;let s=Ts.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new M(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new L(s,this,e)),this._$AV.push(t),l=i[++a]}r!==l?.index&&(s=Ts.nextNode(),r++)}return Ts.currentNode=us,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=_s,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Es(this,e,t),gs(e)?e===_s||null==e||""===e?(this._$AH!==_s&&this._$AR(),this._$AH=_s):e!==this._$AH&&e!==Rs&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ms(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_s&&gs(this._$AH)?this._$AA.nextSibling.data=e:this.T(us.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=V.createElement(Ds(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new lit_html_S(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Ps.get(e.strings);return void 0===t&&Ps.set(e.strings,t=new V(e)),t}k(e){fs(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new M(this.S(ps()),this.S(ps()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=_s,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_s}_$AI(e,t=this,i,o){const s=this.strings;let r=!1;if(void 0===s)e=Es(this,e,t,0),r=!gs(e)||e!==this._$AH&&e!==Rs,r&&(this._$AH=e);else{const o=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=Es(this,o[i+a],t,a),l===Rs&&(l=this._$AH[a]),r||=!gs(l)||l!==this._$AH[a],l===_s?e=_s:e!==_s&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===_s?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_s?void 0:e}}class H extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_s)}}class I extends R{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=Es(this,e,t,0)??_s)===Rs)return;const i=this._$AH,o=e===_s&&i!==_s||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==_s&&(i===_s||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Es(this,e)}}const Is=ns.litHtmlPolyfillSupport;Is?.(V,M),(ns.litHtmlVersions??=[]).push("3.1.4");class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new M(t.insertBefore(ps(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Rs}}lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const Ls=globalThis.litElementPolyfillSupport;Ls?.({LitElement:lit_element_s});(globalThis.litElementVersions??=[]).push("4.0.6");const Fs=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Bs={attribute:!0,type:String,converter:is,reflect:!1,hasChanged:os},Ms=(e=Bs,t,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e)}}throw Error("Unsupported decorator location: "+o)};function Vs(e){return(t,i)=>"object"==typeof i?Ms(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}const Ns=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function zs(e,t){return(i,o,s)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?i:s??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ns(i,o,{get(){let i=e.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return Ns(i,o,{get(){return r(this)}})}}var Hs=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Ws=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?Us(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Hs(t,i,r),r};const js=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133"});let qs=class extends lit_element_s{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};qs.styles=Uo`
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

		${Ho(Object.entries(js).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

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
	`,Ws([Vs()],qs.prototype,"icon",2),Ws([Vs()],qs.prototype,"modifier",2),Ws([Vs({type:Number})],qs.prototype,"size",2),Ws([Vs()],qs.prototype,"flip",2),Ws([Vs()],qs.prototype,"rotate",2),qs=Ws([Fs("code-icon")],qs);var Gs=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,Ks=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?Qs(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Gs(t,i,r),r};let Ys=class extends lit_element_s{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return As`<div class="progress-bar"></div>`}};Ys.styles=Uo`
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
	`,Ks([Vs({reflect:!0})],Ys.prototype,"mode",2),Ks([Vs({type:Boolean})],Ys.prototype,"active",2),Ks([Vs()],Ys.prototype,"position",2),Ys=Ks([Fs("progress-indicator")],Ys);Uo`
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
`;const Js=Uo`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,Zs=Uo`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,Xs=Uo`
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
`,en=Uo`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Js}
	}
	a:hover {
		text-decoration: underline;
	}
`;Uo`
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
`;var tn=Object.defineProperty,on=Object.defineProperties,sn=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,rn=Object.getOwnPropertySymbols,an=Object.prototype.hasOwnProperty,ln=Object.prototype.propertyIsEnumerable,cn=(e,t,i)=>t in e?tn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,hn=(e,t)=>{for(var i in t||(t={}))an.call(t,i)&&cn(e,i,t[i]);if(rn)for(var i of rn(t))ln.call(t,i)&&cn(e,i,t[i]);return e},dn=(e,t)=>on(e,nn(t)),un=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?sn(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&tn(t,i,r),r},pn=new Map,gn=new WeakMap;function fn(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function mn(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function bn(e,t){pn.set(e,fn(t))}function vn(e,t,i){const o=gn.get(e);if(null==o?void 0:o[t])return mn(o[t],i.dir);const s=pn.get(t);return s?mn(s,i.dir):{keyframes:[],options:{duration:0}}}var yn=Uo`
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
`,wn=Uo`
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
`,xn=Uo`
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
`,Sn=class extends lit_element_s{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const i=new CustomEvent(e,hn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o)return void customElements.define(e,class extends t{},i);let s=" (unknown version)",r=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in o&&o.version&&(r=" v"+o.version)}};Sn.version="2.15.1",Sn.dependencies={},un([Vs()],Sn.prototype,"dir",2),un([Vs()],Sn.prototype,"lang",2);const Cn=Math.min,kn=Math.max,$n=Math.round,An=Math.floor,Rn=e=>({x:e,y:e}),_n={left:"right",right:"left",bottom:"top",top:"bottom"},Pn={start:"end",end:"start"};function Tn(e,t,i){return kn(e,Cn(t,i))}function Dn(e,t){return"function"==typeof e?e(t):e}function On(e){return e.split("-")[0]}function En(e){return e.split("-")[1]}function In(e){return"x"===e?"y":"x"}function Ln(e){return"y"===e?"height":"width"}function Fn(e){return["top","bottom"].includes(On(e))?"y":"x"}function Bn(e){return In(Fn(e))}function Mn(e){return e.replace(/start|end/g,(e=>Pn[e]))}function Vn(e){return e.replace(/left|right|bottom|top/g,(e=>_n[e]))}function Nn(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function zn(e){const{x:t,y:i,width:o,height:s}=e;return{width:o,height:s,top:i,left:t,right:t+o,bottom:i+s,x:t,y:i}}function Hn(e,t,i){let{reference:o,floating:s}=e;const r=Fn(t),a=Bn(t),l=Ln(a),c=On(t),h="y"===r,d=o.x+o.width/2-s.width/2,u=o.y+o.height/2-s.height/2,p=o[l]/2-s[l]/2;let g;switch(c){case"top":g={x:d,y:o.y-s.height};break;case"bottom":g={x:d,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:u};break;case"left":g={x:o.x-s.width,y:u};break;default:g={x:o.x,y:o.y}}switch(En(t)){case"start":g[a]-=p*(i&&h?-1:1);break;case"end":g[a]+=p*(i&&h?-1:1)}return g}async function Un(e,t){var i;void 0===t&&(t={});const{x:o,y:s,platform:r,rects:a,elements:l,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=Dn(t,e),f=Nn(g),m=l[p?"floating"===u?"reference":"floating":u],v=zn(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(m)))||i?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:h,rootBoundary:d,strategy:c})),y="floating"===u?{x:o,y:s,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),x=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},S=zn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(v.top-S.top+f.top)/x.y,bottom:(S.bottom-v.bottom+f.bottom)/x.y,left:(v.left-S.left+f.left)/x.x,right:(S.right-v.right+f.right)/x.x}}function Wn(e){return Gn(e)?(e.nodeName||"").toLowerCase():"#document"}function jn(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function qn(e){var t;return null==(t=(Gn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Gn(e){return e instanceof Node||e instanceof jn(e).Node}function Qn(e){return e instanceof Element||e instanceof jn(e).Element}function Kn(e){return e instanceof HTMLElement||e instanceof jn(e).HTMLElement}function Yn(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof jn(e).ShadowRoot)}function Jn(e){const{overflow:t,overflowX:i,overflowY:o,display:s}=or(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(s)}function Zn(e){return["table","td","th"].includes(Wn(e))}function Xn(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function er(e){const t=tr(),i=or(e);return"none"!==i.transform||"none"!==i.perspective||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||["transform","perspective","filter"].some((e=>(i.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(i.contain||"").includes(e)))}function tr(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ir(e){return["html","body","#document"].includes(Wn(e))}function or(e){return jn(e).getComputedStyle(e)}function sr(e){return Qn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function nr(e){if("html"===Wn(e))return e;const t=e.assignedSlot||e.parentNode||Yn(e)&&e.host||qn(e);return Yn(t)?t.host:t}function rr(e){const t=nr(e);return ir(t)?e.ownerDocument?e.ownerDocument.body:e.body:Kn(t)&&Jn(t)?t:rr(t)}function ar(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);const s=rr(e),r=s===(null==(o=e.ownerDocument)?void 0:o.body),a=jn(s);return r?t.concat(a,a.visualViewport||[],Jn(s)?s:[],a.frameElement&&i?ar(a.frameElement):[]):t.concat(s,ar(s,[],i))}function lr(e){const t=or(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const s=Kn(e),r=s?e.offsetWidth:i,a=s?e.offsetHeight:o,l=$n(i)!==r||$n(o)!==a;return l&&(i=r,o=a),{width:i,height:o,$:l}}function cr(e){return Qn(e)?e:e.contextElement}function hr(e){const t=cr(e);if(!Kn(t))return Rn(1);const i=t.getBoundingClientRect(),{width:o,height:s,$:r}=lr(t);let a=(r?$n(i.width):i.width)/o,l=(r?$n(i.height):i.height)/s;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const dr=Rn(0);function ur(e){const t=jn(e);return tr()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:dr}function pr(e,t,i,o){void 0===t&&(t=!1),void 0===i&&(i=!1);const s=e.getBoundingClientRect(),r=cr(e);let a=Rn(1);t&&(o?Qn(o)&&(a=hr(o)):a=hr(e));const l=function(e,t,i){return void 0===t&&(t=!1),!(!i||t&&i!==jn(e))&&t}(r,i,o)?ur(r):Rn(0);let c=(s.left+l.x)/a.x,h=(s.top+l.y)/a.y,d=s.width/a.x,u=s.height/a.y;if(r){const e=jn(r),t=o&&Qn(o)?jn(o):o;let i=e,s=i.frameElement;for(;s&&o&&t!==i;){const e=hr(s),t=s.getBoundingClientRect(),o=or(s),r=t.left+(s.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(s.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,h*=e.y,d*=e.x,u*=e.y,c+=r,h+=a,i=jn(s),s=i.frameElement}}return zn({width:d,height:u,x:c,y:h})}function gr(e){return pr(qn(e)).left+sr(e).scrollLeft}function fr(e,t,i){let o;if("viewport"===t)o=function(e,t){const i=jn(e),o=qn(e),s=i.visualViewport;let r=o.clientWidth,a=o.clientHeight,l=0,c=0;if(s){r=s.width,a=s.height;const e=tr();(!e||e&&"fixed"===t)&&(l=s.offsetLeft,c=s.offsetTop)}return{width:r,height:a,x:l,y:c}}(e,i);else if("document"===t)o=function(e){const t=qn(e),i=sr(e),o=e.ownerDocument.body,s=kn(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=kn(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let a=-i.scrollLeft+gr(e);const l=-i.scrollTop;return"rtl"===or(o).direction&&(a+=kn(t.clientWidth,o.clientWidth)-s),{width:s,height:r,x:a,y:l}}(qn(e));else if(Qn(t))o=function(e,t){const i=pr(e,!0,"fixed"===t),o=i.top+e.clientTop,s=i.left+e.clientLeft,r=Kn(e)?hr(e):Rn(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:s*r.x,y:o*r.y}}(t,i);else{const i=ur(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return zn(o)}function mr(e,t){const i=nr(e);return!(i===t||!Qn(i)||ir(i))&&("fixed"===or(i).position||mr(i,t))}function br(e,t,i){const o=Kn(t),s=qn(t),r="fixed"===i,a=pr(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const c=Rn(0);if(o||!o&&!r)if(("body"!==Wn(t)||Jn(s))&&(l=sr(t)),o){const e=pr(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else s&&(c.x=gr(s));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function vr(e){return"static"===or(e).position}function yr(e,t){return Kn(e)&&"fixed"!==or(e).position?t?t(e):e.offsetParent:null}function wr(e,t){const i=jn(e);if(Xn(e))return i;if(!Kn(e)){let t=nr(e);for(;t&&!ir(t);){if(Qn(t)&&!vr(t))return t;t=nr(t)}return i}let o=yr(e,t);for(;o&&Zn(o)&&vr(o);)o=yr(o,t);return o&&ir(o)&&vr(o)&&!er(o)?i:o||function(e){let t=nr(e);for(;Kn(t)&&!ir(t);){if(Xn(t))return null;if(er(t))return t;t=nr(t)}return null}(e)||i}const xr={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:s}=e;const r="fixed"===s,a=qn(o),l=!!t&&Xn(t.floating);if(o===a||l&&r)return i;let c={scrollLeft:0,scrollTop:0},h=Rn(1);const d=Rn(0),u=Kn(o);if((u||!u&&!r)&&(("body"!==Wn(o)||Jn(a))&&(c=sr(o)),Kn(o))){const e=pr(o);h=hr(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-c.scrollLeft*h.x+d.x,y:i.y*h.y-c.scrollTop*h.y+d.y}},getDocumentElement:qn,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:s}=e;const r="clippingAncestors"===i?Xn(t)?[]:function(e,t){const i=t.get(e);if(i)return i;let o=ar(e,[],!1).filter((e=>Qn(e)&&"body"!==Wn(e))),s=null;const r="fixed"===or(e).position;let a=r?nr(e):e;for(;Qn(a)&&!ir(a);){const t=or(a),i=er(a);i||"fixed"!==t.position||(s=null),(r?!i&&!s:!i&&"static"===t.position&&s&&["absolute","fixed"].includes(s.position)||Jn(a)&&!i&&mr(e,a))?o=o.filter((e=>e!==a)):s=t,a=nr(a)}return t.set(e,o),o}(t,this._c):[].concat(i),a=[...r,o],l=a[0],c=a.reduce(((e,i)=>{const o=fr(t,i,s);return e.top=kn(o.top,e.top),e.right=Cn(o.right,e.right),e.bottom=Cn(o.bottom,e.bottom),e.left=kn(o.left,e.left),e}),fr(t,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:wr,getElementRects:async function(e){const t=this.getOffsetParent||wr,i=this.getDimensions,o=await i(e.floating);return{reference:br(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:i}=lr(e);return{width:t,height:i}},getScale:hr,isElement:Qn,isRTL:function(e){return"rtl"===or(e).direction}};function Sr(e,t,i,o){void 0===o&&(o={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=o,h=cr(e),d=s||r?[...h?ar(h):[],...ar(t)]:[];d.forEach((e=>{s&&e.addEventListener("scroll",i,{passive:!0}),r&&e.addEventListener("resize",i)}));const u=h&&l?function(e,t){let i,o=null;const s=qn(e);function r(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),r();const{left:h,top:d,width:u,height:p}=e.getBoundingClientRect();if(l||t(),!u||!p)return;const g={rootMargin:-An(d)+"px "+-An(s.clientWidth-(h+u))+"px "+-An(s.clientHeight-(d+p))+"px "+-An(h)+"px",threshold:kn(0,Cn(1,c))||1};let f=!0;function m(e){const t=e[0].intersectionRatio;if(t!==c){if(!f)return a();t?a(!1,t):i=setTimeout((()=>{a(!1,1e-7)}),1e3)}f=!1}try{o=new IntersectionObserver(m,{...g,root:s.ownerDocument})}catch(e){o=new IntersectionObserver(m,g)}o.observe(e)}(!0),r}(h,i):null;let p,g=-1,f=null;a&&(f=new ResizeObserver((e=>{let[o]=e;o&&o.target===h&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=f)||e.observe(t)}))),i()})),h&&!c&&f.observe(h),f.observe(t));let m=c?pr(e):null;return c&&function t(){const o=pr(e);!m||o.x===m.x&&o.y===m.y&&o.width===m.width&&o.height===m.height||i();m=o,p=requestAnimationFrame(t)}(),i(),()=>{var e;d.forEach((e=>{s&&e.removeEventListener("scroll",i),r&&e.removeEventListener("resize",i)})),null==u||u(),null==(e=f)||e.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const Cr=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:s,y:r,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:i,platform:o,elements:s}=e,r=await(null==o.isRTL?void 0:o.isRTL(s.floating)),a=On(i),l=En(i),c="y"===Fn(i),h=["left","top"].includes(a)?-1:1,d=r&&c?-1:1,u=Dn(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:f}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&"number"==typeof f&&(g="end"===l?-1*f:f),c?{x:g*d,y:p*h}:{x:p*h,y:g*d}}(t,e);return a===(null==(i=l.offset)?void 0:i.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:s+c.x,y:r+c.y,data:{...c,placement:a}}}}},kr=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:s}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...c}=Dn(e,t),h={x:i,y:o},d=await Un(t,c),u=Fn(On(s)),p=In(u);let g=h[p],f=h[u];if(r){const e="y"===p?"bottom":"right";g=Tn(g+d["y"===p?"top":"left"],g,g-d[e])}if(a){const e="y"===u?"bottom":"right";f=Tn(f+d["y"===u?"top":"left"],f,f-d[e])}const m=l.fn({...t,[p]:g,[u]:f});return{...m,data:{x:m.x-i,y:m.y-o}}}}},$r=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:s,middlewareData:r,rects:a,initialPlacement:l,platform:c,elements:h}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...v}=Dn(e,t);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const y=On(s),w=Fn(l),x=On(l)===l,S=await(null==c.isRTL?void 0:c.isRTL(h.floating)),C=p||(x||!m?[Vn(l)]:function(e){const t=Vn(e);return[Mn(e),t,Mn(t)]}(l)),$="none"!==f;!p&&$&&C.push(...function(e,t,i,o){const s=En(e);let r=function(e,t,i){const o=["left","right"],s=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?s:o:t?o:s;case"left":case"right":return t?r:a;default:return[]}}(On(e),"start"===i,o);return s&&(r=r.map((e=>e+"-"+s)),t&&(r=r.concat(r.map(Mn)))),r}(l,m,f,S));const A=[l,...C],_=await Un(t,v),P=[];let T=(null==(o=r.flip)?void 0:o.overflows)||[];if(d&&P.push(_[y]),u){const e=function(e,t,i){void 0===i&&(i=!1);const o=En(e),s=Bn(e),r=Ln(s);let a="x"===s?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Vn(a)),[a,Vn(a)]}(s,a,S);P.push(_[e[0]],_[e[1]])}if(T=[...T,{placement:s,overflows:P}],!P.every((e=>e<=0))){var D,O;const e=((null==(D=r.flip)?void 0:D.index)||0)+1,t=A[e];if(t)return{data:{index:e,overflows:T},reset:{placement:t}};let i=null==(O=T.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:O.placement;if(!i)switch(g){case"bestFit":{var E;const e=null==(E=T.filter((e=>{if($){const t=Fn(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(i=e);break}case"initialPlacement":i=l}if(s!==i)return{reset:{placement:i}}}return{}}}},Ar=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:i,rects:o,platform:s,elements:r}=t,{apply:a=(()=>{}),...l}=Dn(e,t),c=await Un(t,l),h=On(i),d=En(i),u="y"===Fn(i),{width:p,height:g}=o.floating;let f,m;"top"===h||"bottom"===h?(f=h,m=d===(await(null==s.isRTL?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(m=h,f="end"===d?"top":"bottom");const v=g-c.top-c.bottom,y=p-c.left-c.right,w=Cn(g-c[f],v),x=Cn(p-c[m],y),S=!t.middlewareData.shift;let C=w,$=x;if(u?$=d||S?Cn(x,y):y:C=d||S?Cn(w,v):v,S&&!d){const e=kn(c.left,0),t=kn(c.right,0),i=kn(c.top,0),o=kn(c.bottom,0);u?$=p-2*(0!==e||0!==t?e+t:kn(c.left,c.right)):C=g-2*(0!==i||0!==o?i+o:kn(c.top,c.bottom))}await a({...t,availableWidth:$,availableHeight:C});const A=await s.getDimensions(r.floating);return p!==A.width||g!==A.height?{reset:{rects:!0}}:{}}}},Rr=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:s,rects:r,platform:a,elements:l,middlewareData:c}=t,{element:h,padding:d=0}=Dn(e,t)||{};if(null==h)return{};const u=Nn(d),p={x:i,y:o},g=Bn(s),f=Ln(g),m=await a.getDimensions(h),v="y"===g,y=v?"top":"left",w=v?"bottom":"right",x=v?"clientHeight":"clientWidth",S=r.reference[f]+r.reference[g]-p[g]-r.floating[f],C=p[g]-r.reference[g],$=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let A=$?$[x]:0;A&&await(null==a.isElement?void 0:a.isElement($))||(A=l.floating[x]||r.floating[f]);const _=S/2-C/2,P=A/2-m[f]/2-1,T=Cn(u[y],P),D=Cn(u[w],P),O=T,E=A-m[f]-D,F=A/2-m[f]/2+_,B=Tn(O,F,E),N=!c.arrow&&null!=En(s)&&F!==B&&r.reference[f]/2-(F<O?T:D)-m[f]/2<0,z=N?F<O?F-O:F-E:0;return{[g]:p[g]+z,data:{[g]:B,centerOffset:F-B-z,...N&&{alignmentOffset:z}},reset:N}}}),_r=(e,t,i)=>{const o=new Map,s={platform:xr,...i},r={...s.platform,_c:o};return(async(e,t,i)=>{const{placement:o="bottom",strategy:s="absolute",middleware:r=[],platform:a}=i,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:d,y:u}=Hn(h,o,c),p=o,g={},f=0;for(let i=0;i<l.length;i++){const{name:r,fn:m}=l[i],{x:v,y,data:w,reset:x}=await m({x:d,y:u,initialPlacement:o,placement:p,strategy:s,middlewareData:g,rects:h,platform:a,elements:{reference:e,floating:t}});d=null!=v?v:d,u=null!=y?y:u,g={...g,[r]:{...g[r],...w}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(h=!0===x.rects?await a.getElementRects({reference:e,floating:t,strategy:s}):x.rects),({x:d,y:u}=Hn(h,p,c))),i=-1)}return{x:d,y:u,placement:p,strategy:s,middlewareData:g}})(e,t,{...s,platform:r})},Pr=1;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Tr=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==Pr||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return Rs}});function Dr(e){return Er(e)}function Or(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Er(e){for(let t=e;t;t=Or(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=Or(e);t;t=Or(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var Ir=class extends Sn{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let i=0,o=0,s=0,r=0,a=0,l=0,c=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(i=e.left,o=e.bottom,s=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):(i=t.left,o=t.bottom,s=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):e.left<t.left?(i=e.right,o=e.top,s=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom):(i=t.right,o=t.top,s=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Sr(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[Cr({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ar({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push($r({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(kr({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Ar({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Rr({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>xr.getOffsetParent(e,Dr):xr.getOffsetParent;_r(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:dn(hn({},xr),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:i,placement:o})=>{const s="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=i.arrow.x,t=i.arrow.y;let o="",a="",l="",c="";if("start"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?i:"",c=s?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":i,c=s?i:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:l,left:c,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return As`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Tr({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Tr({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?As`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function Lr(e,t){return new Promise((i=>{e.addEventListener(t,(function o(s){s.target===e&&(e.removeEventListener(t,o),i())}))}))}function Fr(e,t,i){return new Promise((o=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,dn(hn({},i),{duration:Mr()?0:i.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})}))}function Br(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function Mr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Vr(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}Ir.styles=[xn,wn],un([zs(".popup")],Ir.prototype,"popup",2),un([zs(".popup__arrow")],Ir.prototype,"arrowEl",2),un([Vs()],Ir.prototype,"anchor",2),un([Vs({type:Boolean,reflect:!0})],Ir.prototype,"active",2),un([Vs({reflect:!0})],Ir.prototype,"placement",2),un([Vs({reflect:!0})],Ir.prototype,"strategy",2),un([Vs({type:Number})],Ir.prototype,"distance",2),un([Vs({type:Number})],Ir.prototype,"skidding",2),un([Vs({type:Boolean})],Ir.prototype,"arrow",2),un([Vs({attribute:"arrow-placement"})],Ir.prototype,"arrowPlacement",2),un([Vs({attribute:"arrow-padding",type:Number})],Ir.prototype,"arrowPadding",2),un([Vs({type:Boolean})],Ir.prototype,"flip",2),un([Vs({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],Ir.prototype,"flipFallbackPlacements",2),un([Vs({attribute:"flip-fallback-strategy"})],Ir.prototype,"flipFallbackStrategy",2),un([Vs({type:Object})],Ir.prototype,"flipBoundary",2),un([Vs({attribute:"flip-padding",type:Number})],Ir.prototype,"flipPadding",2),un([Vs({type:Boolean})],Ir.prototype,"shift",2),un([Vs({type:Object})],Ir.prototype,"shiftBoundary",2),un([Vs({attribute:"shift-padding",type:Number})],Ir.prototype,"shiftPadding",2),un([Vs({attribute:"auto-size"})],Ir.prototype,"autoSize",2),un([Vs()],Ir.prototype,"sync",2),un([Vs({type:Object})],Ir.prototype,"autoSizeBoundary",2),un([Vs({attribute:"auto-size-padding",type:Number})],Ir.prototype,"autoSizePadding",2),un([Vs({attribute:"hover-bridge",type:Boolean})],Ir.prototype,"hoverBridge",2);const Nr=new Set,zr=new MutationObserver(Gr),Hr=new Map;let Ur,Wr=document.documentElement.dir||"ltr",jr=document.documentElement.lang||navigator.language;function qr(...e){e.map((e=>{const t=e.$code.toLowerCase();Hr.has(t)?Hr.set(t,Object.assign(Object.assign({},Hr.get(t)),e)):Hr.set(t,e),Ur||(Ur=e)})),Gr()}function Gr(){Wr=document.documentElement.dir||"ltr",jr=document.documentElement.lang||navigator.language,[...Nr.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}zr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Nr.add(this.host)}hostDisconnected(){Nr.delete(this.host)}dir(){return`${this.host.dir||Wr}`.toLowerCase()}lang(){return`${this.host.lang||jr}`.toLowerCase()}getTranslationData(e){var t,i;const o=new Intl.Locale(e.replace(/_/g,"-")),s=null==o?void 0:o.language.toLowerCase(),r=null!==(i=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:s,region:r,primary:Hr.get(`${s}-${r}`),secondary:Hr.get(s)}}exists(e,t){var i;const{primary:o,secondary:s}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||s&&s[e]||t.includeFallback&&Ur&&Ur[e])}term(e,...t){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(o&&o[e])s=o[e];else{if(!Ur||!Ur[e])return String(e);s=Ur[e]}return"function"==typeof s?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}var Qr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};qr(Qr);var Kr=Qr,Yr=class extends LocalizeController{};function Jr(e,t){const i=hn({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:s}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach((t=>{const s=t;if(e.has(s)){const t=e.get(s),r=this[s];t!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,r))}})),s.call(this,e)}}}qr(Kr);var Zr=class extends Sn{constructor(){super(),this.localize=new Yr(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Br(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Br(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Vr(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:i}=vn(this,"tooltip.show",{dir:this.localize.dir()});await Fr(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Vr(this.body);const{keyframes:e,options:i}=vn(this,"tooltip.hide",{dir:this.localize.dir()});await Fr(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Lr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Lr(this,"sl-after-hide")}render(){return As`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Tr({tooltip:!0,"tooltip--open":this.open})}
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
    `}};Zr.styles=[xn,yn],Zr.dependencies={"sl-popup":Ir},un([zs("slot:not([name])")],Zr.prototype,"defaultSlot",2),un([zs(".tooltip__body")],Zr.prototype,"body",2),un([zs("sl-popup")],Zr.prototype,"popup",2),un([Vs()],Zr.prototype,"content",2),un([Vs()],Zr.prototype,"placement",2),un([Vs({type:Boolean,reflect:!0})],Zr.prototype,"disabled",2),un([Vs({type:Number})],Zr.prototype,"distance",2),un([Vs({type:Boolean,reflect:!0})],Zr.prototype,"open",2),un([Vs({type:Number})],Zr.prototype,"skidding",2),un([Vs()],Zr.prototype,"trigger",2),un([Vs({type:Boolean})],Zr.prototype,"hoist",2),un([Jr("open",{waitUntilFirstUpdate:!0})],Zr.prototype,"handleOpenChange",1),un([Jr(["content","distance","hoist","placement","skidding"])],Zr.prototype,"handleOptionsChange",1),un([Jr("disabled")],Zr.prototype,"handleDisabledChange",1),bn("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),bn("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Zr.define("sl-tooltip");var Xr=Object.defineProperty,ea=Object.getOwnPropertyDescriptor,ta=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?ea(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&Xr(t,i,r),r};bn("tooltip.show",null),bn("tooltip.hide",null);let ia=class extends lit_element_s{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return As`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??_s}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};ia.styles=Uo`
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
	`,ta([Vs()],ia.prototype,"content",2),ta([Vs({reflect:!0})],ia.prototype,"placement",2),ta([Vs({type:Boolean})],ia.prototype,"disabled",2),ta([Vs({type:Number})],ia.prototype,"distance",2),ta([Vs({type:Boolean})],ia.prototype,"hoist",2),ia=ta([Fs("gl-tooltip")],ia);var oa=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,na=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?sa(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&oa(t,i,r),r};let ra=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?As`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?As`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?As`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:As`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};ra.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},ra.styles=[Xs,Uo`
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
				${Zs}
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
		`],na([zs(".control")],ra.prototype,"control",2),na([Vs()],ra.prototype,"appearance",2),na([Vs({type:Boolean,reflect:!0})],ra.prototype,"disabled",2),na([Vs({reflect:!0})],ra.prototype,"density",2),na([Vs({type:Boolean,reflect:!0})],ra.prototype,"full",2),na([Vs()],ra.prototype,"href",2),na([Vs({reflect:!0})],ra.prototype,"role",1),na([Vs()],ra.prototype,"tooltip",2),ra=na([Fs("gl-button")],ra);var aa=(e=>(e.Free="free",e.FreePlus="free+",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(aa||{}),la=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.FreePlusTrialReactivationEligible=5]="FreePlusTrialReactivationEligible",e[e.Paid=6]="Paid",e))(la||{});function ca(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function ha(e,t){return da(e.plan.effective.expiresOn,t)}function da(e,t){return null!=e?function(e,t,i,o){const s=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),r=o??Math.floor;switch(i){case"days":return r(s/864e5);case"hours":return r(s/36e5);case"minutes":return r(s/6e4);case"seconds":return r(s/1e3);default:return s}}(Date.now(),new Date(e),t,Math.round):void 0}const ua=Uo`
	a {
		color: var(--link-foreground);
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var pa=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,fa=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?ga(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&pa(t,i,r),r};let ma=class extends lit_element_s{firstUpdated(){"alert"===this.appearance&&queueMicrotask((()=>this.button.focus()))}render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":_s;switch(this.state){case la.VerificationRequired:return As`
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${ba(Vi.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${e}"
							href="${ba(Vi.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case la.Free:return As`
					<gl-button
						appearance="${e}"
						href="${ba(Vi.PlusStartPreviewTrial,this.source)}"
						>Continue</gl-button
					>
					<p>
						Continuing gives you 3 days to preview
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded}  and other `:""}local
						Pro features.<br />
						${"alert"!==e?As`<br />`:""} For full access to Pro features
						<a href="${ba(Vi.PlusSignUp,this.source)}"
							>start your free 7-day Pro trial</a
						>
						or
						<a href="${ba(Vi.PlusLogin,this.source)}" title="Sign In">sign in</a>.
					</p>
				`;case la.FreePreviewTrialExpired:return As`
					<gl-button
						appearance="${e}"
						href="${ba(Vi.PlusSignUp,this.source)}"
						>Start Pro Trial</gl-button
					>
					<p>
						Start your free 7-day Pro trial to try
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and other `:""}Pro
						features, or
						<a href="${ba(Vi.PlusLogin,this.source)}" title="Sign In">sign in</a>.
					</p>
				`;case la.FreePlusTrialExpired:return As` <gl-button
						appearance="${e}"
						href="${ba(Vi.PlusUpgrade,this.source)}"
						>Upgrade to Pro</gl-button
					>
					<p>
						Your Pro trial has ended. Please upgrade for full access to
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and other `:""}Pro
						features.
					</p>
					<p class="special">Special: <b>50% off first seat of Pro</b> — only $4/month!<br /></p>`;case la.FreePlusTrialReactivationEligible:return As`
					<gl-button
						appearance="${e}"
						href="${ba(Vi.PlusReactivateProTrial,this.source)}"
						>Continue</gl-button
					>
					<p>
						Reactivate your Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another 7 days!
					</p>
				`}}};function ba(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}ma.styles=[ua,Uo`
			:host {
				--gk-action-radius: 0.3rem;
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button:not(.inline) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}

			.actions {
				text-align: center;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}

			.special {
				font-size: smaller;
				text-align: center;
			}

			:host([appearance='welcome']) .special {
				opacity: 0.6;
			}
		`],fa([zs("gl-button")],ma.prototype,"button",2),fa([Vs({type:String})],ma.prototype,"appearance",2),fa([Vs()],ma.prototype,"featureWithArticleIfNeeded",2),fa([Vs({type:Object})],ma.prototype,"source",2),fa([Vs({attribute:!1,type:Number})],ma.prototype,"state",2),ma=fa([Fs("gl-feature-gate-plus-state")],ma);var va=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,wa=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?ya(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&va(t,i,r),r};let xa=class extends lit_element_s{render(){if(!this.visible||null!=this.state&&(null!=(e=this.state)&&(6===e||1===e||3===e)))return void(this.hidden=!0);var e;const t=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,As`
			<section>
				<slot></slot>
				<slot name="feature"></slot>
				<gl-feature-gate-plus-state
					appearance=${t}
					.featureWithArticleIfNeeded=${this.featureWithArticleIfNeeded}
					.source=${this.source}
					.state=${this.state}
				></gl-feature-gate-plus-state>
			</section>
		`}};xa.styles=Uo`
		:host {
			--background: var(--vscode-sideBar-background);
			--foreground: var(--vscode-sideBar-foreground);
			--link-foreground: var(--vscode-textLink-foreground);
			--link-foreground-active: var(--vscode-textLink-activeForeground);

			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: auto;
			z-index: 100;

			box-sizing: border-box;
		}

		:host-context(body[data-placement='editor']),
		:host([appearance='alert']) {
			--background: transparent;
			--foreground: var(--vscode-editor-foreground);

			backdrop-filter: blur(3px) saturate(0.8);
			padding: 0 2rem;
		}

		::slotted(p) {
			margin: revert !important;
		}

		::slotted(p:first-child) {
			margin-top: 0 !important;
		}

		section {
			--section-foreground: var(--foreground);
			--section-background: var(--background);
			--section-border-color: transparent;

			display: flex;
			flex-direction: column;
			padding: 0 2rem 1.3rem 2rem;
			background: var(--section-background);
			color: var(--section-foreground);
			border: 1px solid var(--section-border-color);

			height: min-content;
		}

		:host-context(body[data-placement='editor']) section,
		:host([appearance='alert']) section {
			--section-foreground: var(--color-alert-foreground);
			--section-background: var(--color-alert-infoBackground);
			--section-border-color: var(--color-alert-infoBorder);

			--link-decoration-default: underline;
			--link-foreground: var(--vscode-foreground);
			--link-foreground-active: var(--vscode-foreground);

			border-radius: 0.3rem;
			max-width: 600px;
			max-height: min-content;
			margin: 0.2rem auto;
			padding: 1.3rem;
		}

		:host-context(body[data-placement='editor']) section ::slotted(gl-button),
		:host([appearance='alert']) section ::slotted(gl-button) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	`,wa([Vs({reflect:!0})],xa.prototype,"appearance",2),wa([Vs()],xa.prototype,"featureWithArticleIfNeeded",2),wa([Vs({type:Object})],xa.prototype,"source",2),wa([Vs({attribute:!1,type:Number})],xa.prototype,"state",2),wa([Vs({type:Boolean})],xa.prototype,"visible",2),xa=wa([Fs("gl-feature-gate")],xa);Ir.define("sl-popup");const Sa=new WeakMap;function Ca(e,t){return function(i,o,s){let r=Sa.get(i.constructor);null==r&&Sa.set(i.constructor,r=[]),r.push({method:s.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_s{emit(e,t,i){const o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(o),o}update(e){const t=Sa.get(this.constructor);if(null!=t)for(const{keys:i,method:o,afterFirstUpdate:s}of t){if(s&&!this.hasUpdated)continue;const t=i.filter((t=>e.has(t)));t.length&&o.call(this,t)}super.update(e)}}var ka=Object.defineProperty,$a=Object.getOwnPropertyDescriptor,Aa=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?$a(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&ka(t,i,r),r};let Ra=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{e.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=Ki(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus())return;const i=Ki(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),i)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Yi(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,Yi(this,"gl-popover-after-hide")}render(){return As`<sl-popup
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
		</sl-popup>`}};Ra.shadowRootOptions={...lit_element_s.shadowRootOptions,delegatesFocus:!0},Ra.styles=Uo`
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
	`,Aa([zs("#popover")],Ra.prototype,"body",2),Aa([zs("sl-popup")],Ra.prototype,"popup",2),Aa([Vs({reflect:!0})],Ra.prototype,"placement",2),Aa([Vs({type:Object})],Ra.prototype,"anchor",2),Aa([Vs({reflect:!0,type:Boolean})],Ra.prototype,"disabled",2),Aa([Vs({type:Number})],Ra.prototype,"distance",2),Aa([Vs({reflect:!0,type:Boolean})],Ra.prototype,"open",2),Aa([Vs({type:Number})],Ra.prototype,"skidding",2),Aa([Vs()],Ra.prototype,"trigger",2),Aa([Vs({type:Boolean})],Ra.prototype,"hoist",2),Aa([Ca("open",{afterFirstUpdate:!0})],Ra.prototype,"handleOpenChange",1),Aa([Ca(["distance","hoist","placement","skidding"])],Ra.prototype,"handleOptionsChange",1),Aa([Ca("disabled")],Ra.prototype,"handleDisabledChange",1),Ra=Aa([Fs("gl-popover")],Ra);var _a=Object.defineProperty,Pa=Object.getOwnPropertyDescriptor,Ta=(e,t,i,o)=>{for(var s,r=o>1?void 0:o?Pa(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o?s(t,i,r):s(r))||r);return o&&r&&_a(t,i,r),r};let Da=class extends lit_element_s{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:ha(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return As`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===la.VerificationRequired)return As`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(i=this.subscription,"free"!==(o=i.plan.actual.id)&&"free+"!==o||this.cloud&&null!=this.subscription.account)return As`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(1===t||3===t))return As`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t,i,o;return this.cloud?As`${e}<span class="badge-icon">☁️</span>`:e}renderPopoverHeader(){const e=As`<span class="popup-title"
			>${this.preview?"Preview feature":"Pro feature"}${this.cloud?" ☁️":""}</span
		>`;return this.state===la.Paid?As`<div class="popup-header">${e}</div>`:this.cloud?this.preview?As`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require a paid plan in the future</span
					>
				</div>`:As`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires a paid plan</span>
			</div>`:this.preview?As`<div class="popup-header">
				${e}<span class="popup-subtitle">May require a paid plan in the future</span>
			</div>`:As`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires a paid plan for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return _s;let e;switch(this.state){case la.Paid:e=As`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${Oa(Vi.ShowAccountView,void 0)}"
							>${ca(this.subscription?.plan.actual.id??aa.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case la.VerificationRequired:e=As`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Oa(Vi.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${Oa(Vi.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case la.FreePlusInTrial:{const t=this.daysRemaining;e=As`<p>
						You have
						<strong>${t<1?"<1 day":Hi("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case la.FreePlusTrialExpired:e=As`<p>
						Your Pro trial as ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(As`<p>Please upgrade for full access to Pro features:</p>`)}`;break;case la.FreePlusTrialReactivationEligible:e=As`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another 7 days!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Oa(Vi.PlusReactivateProTrial,this.source)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===la.FreeInPreviewTrial){const t=this.daysRemaining;e=As`<p>
							You have
							<strong>${t<1?"<1 day":Hi("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=As`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return As`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return As`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${Oa(Vi.PlusSignUp,this.source)}"
				>Start 7-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${Oa(Vi.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return As`<div class="actions">
			${e??_s}
			<gl-button
				appearance="primary"
				density="tight"
				href="${Oa(Vi.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			<p class="special">Special: <b>50% off first seat of Pro</b> — only $4/month!<br /></p>
		</div>`}};function Oa(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}Da.styles=[Xs,en,Uo`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus {
				${Ho(Js)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.6rem;
			}

			.popup-content .actions .special {
				font-size: smaller;
				margin-top: 0.8rem;
				opacity: 0.6;
				text-align: center;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],Ta([Vs({type:Boolean})],Da.prototype,"cloud",2),Ta([Vs({reflect:!0})],Da.prototype,"placement",2),Ta([Vs({type:Boolean})],Da.prototype,"preview",2),Ta([Vs({type:Object})],Da.prototype,"source",2),Ta([Vs({attribute:!1})],Da.prototype,"subscription",2),Da=Ta([Fs("gl-feature-badge")],Da);class TimelineApp extends App{constructor(){super("TimelineApp")}onInitialize(){var e;je.getOrCreate(e).withPrefix("vscode").register(ui(),pi()),this.updateState()}onBind(){const e=super.onBind?.()??[];return e.push(Qi.on(document,"keydown",(e=>this.onKeyDown(e))),Qi.on(document.getElementById("periods"),"change",((e,t)=>this.onPeriodChanged(e,t))),{dispose:()=>this._chart?.dispose()}),e}onMessageReceived(e){if(!0===wi.is(e))this.state=e.params.state,this.setState(this.state),this.updateState();else super.onMessageReceived?.(e)}onChartDataPointClicked(e){this.sendCommand(vi,e)}onKeyDown(e){"Escape"!==e.key&&"Esc"!==e.key||this._chart?.reset()}onPeriodChanged(e,t){const i=t.options[t.selectedIndex].value;!function(e){if("all"===e)return;const[t,i]=e.split("|");if(isNaN(Number(t))||"D"!==i&&"M"!==i&&"Y"!==i)throw new Error(`Invalid period: ${e}`)}(i),this.log(`onPeriodChanged(): name=${t.name}, value=${i}`),this.updateLoading(!0),this.sendCommand(yi,{period:i})}updateState(){const e=document.getElementById("subscription-gate");null!=e&&(e.source={source:"timeline",detail:"gate"},e.state=this.state.access.subscription.current.state,e.visible=!0!==this.state.access.allowed);const t=document.querySelectorAll("gl-feature-badge");for(const e of t)e.source={source:"timeline",detail:"badge"},e.subscription=this.state.access.subscription.current;null==this._chart&&(this._chart=new TimelineChart("#chart",this.placement),this._chart.onDidClickDataPoint(this.onChartDataPointClicked,this));let{title:i,sha:o}=this.state,s="";if(null!=i){const e=i.lastIndexOf("/");if(e>=0){const t=i.substring(e+1);s=i.substring(0,e),i=t}}else"editor"!==this.placement||null!=this.state.dataset||this.state.access.allowed||(i="index.ts",s="src/app");function r(e,t,i){const o=document.querySelector(`[data-bind="${e}"]`);null!=o&&(i?.html?o.innerHTML=t??"":o.textContent=t??"")}r("title",i),r("description",s),r("sha",o?`<code-icon icon="git-commit" size="16"></code-icon><span class="sha">${o}</span>`:void 0,{html:!0});const a=document.getElementById("periods");if(null!=a){const e=this.state?.period,t=a.getElementsByTagName("vscode-option");for(const i of t)e===i.getAttribute("value")?i.setAttribute("selected",""):i.removeAttribute("selected")}this._chart.updateChart(this.state).finally((()=>this.updateLoading(!1)))}updateLoading(e){document.getElementById("spinner")?.setAttribute("active",e?"true":"false")}}new TimelineApp;var Ea=s.h;export{Ea as TimelineApp};