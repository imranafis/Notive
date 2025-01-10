function f0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h0={exports:{}},Hu={},p0={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),db=Symbol.for("react.portal"),fb=Symbol.for("react.fragment"),hb=Symbol.for("react.strict_mode"),pb=Symbol.for("react.profiler"),mb=Symbol.for("react.provider"),gb=Symbol.for("react.context"),yb=Symbol.for("react.forward_ref"),vb=Symbol.for("react.suspense"),_b=Symbol.for("react.memo"),wb=Symbol.for("react.lazy"),Bg=Symbol.iterator;function Eb(t){return t===null||typeof t!="object"?null:(t=Bg&&t[Bg]||t["@@iterator"],typeof t=="function"?t:null)}var m0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g0=Object.assign,y0={};function Ro(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||m0}Ro.prototype.isReactComponent={};Ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function v0(){}v0.prototype=Ro.prototype;function yp(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||m0}var vp=yp.prototype=new v0;vp.constructor=yp;g0(vp,Ro.prototype);vp.isPureReactComponent=!0;var qg=Array.isArray,_0=Object.prototype.hasOwnProperty,_p={current:null},w0={key:!0,ref:!0,__self:!0,__source:!0};function E0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_0.call(e,r)&&!w0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:hl,type:t,key:s,ref:o,props:i,_owner:_p.current}}function Sb(t,e){return{$$typeof:hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wp(t){return typeof t=="object"&&t!==null&&t.$$typeof===hl}function Tb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hg=/\/+/g;function jd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Tb(""+t.key):e.toString(36)}function Sc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hl:case db:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jd(o,0):r,qg(i)?(n="",t!=null&&(n=t.replace(Hg,"$&/")+"/"),Sc(i,e,n,"",function(u){return u})):i!=null&&(wp(i)&&(i=Sb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qg(t))for(var a=0;a<t.length;a++){s=t[a];var c=r+jd(s,a);o+=Sc(s,e,n,c,i)}else if(c=Eb(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=r+jd(s,a++),o+=Sc(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yl(t,e,n){if(t==null)return t;var r=[],i=0;return Sc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Tc={transition:null},Ab={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Tc,ReactCurrentOwner:_p};function S0(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:Yl,forEach:function(t,e,n){Yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yl(t,function(){e++}),e},toArray:function(t){return Yl(t,function(e){return e})||[]},only:function(t){if(!wp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Ro;ke.Fragment=fb;ke.Profiler=pb;ke.PureComponent=yp;ke.StrictMode=hb;ke.Suspense=vb;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ab;ke.act=S0;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=g0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_p.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)_0.call(e,c)&&!w0.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:hl,type:t.type,key:i,ref:s,props:r,_owner:o}};ke.createContext=function(t){return t={$$typeof:gb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mb,_context:t},t.Consumer=t};ke.createElement=E0;ke.createFactory=function(t){var e=E0.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:yb,render:t}};ke.isValidElement=wp;ke.lazy=function(t){return{$$typeof:wb,_payload:{_status:-1,_result:t},_init:bb}};ke.memo=function(t,e){return{$$typeof:_b,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Tc.transition;Tc.transition={};try{t()}finally{Tc.transition=e}};ke.unstable_act=S0;ke.useCallback=function(t,e){return Zt.current.useCallback(t,e)};ke.useContext=function(t){return Zt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Zt.current.useEffect(t,e)};ke.useId=function(){return Zt.current.useId()};ke.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Zt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};ke.useRef=function(t){return Zt.current.useRef(t)};ke.useState=function(t){return Zt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Zt.current.useTransition()};ke.version="18.3.1";p0.exports=ke;var H=p0.exports;const Ep=gp(H),Ib=f0({__proto__:null,default:Ep},[H]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cb=H,kb=Symbol.for("react.element"),Rb=Symbol.for("react.fragment"),Pb=Object.prototype.hasOwnProperty,xb=Cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lb={key:!0,ref:!0,__self:!0,__source:!0};function T0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Pb.call(e,r)&&!Lb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kb,type:t,key:s,ref:o,props:i,_owner:xb.current}}Hu.Fragment=Rb;Hu.jsx=T0;Hu.jsxs=T0;h0.exports=Hu;var j=h0.exports,b0={exports:{}},yn={},A0={exports:{}},I0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(ee,te){var de=ee.length;ee.push(te);e:for(;0<de;){var M=de-1>>>1,B=ee[M];if(0<i(B,te))ee[M]=te,ee[de]=B,de=M;else break e}}function n(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var te=ee[0],de=ee.pop();if(de!==te){ee[0]=de;e:for(var M=0,B=ee.length,X=B>>>1;M<X;){var le=2*(M+1)-1,Be=ee[le],V=le+1,G=ee[V];if(0>i(Be,de))V<B&&0>i(G,Be)?(ee[M]=G,ee[V]=de,M=V):(ee[M]=Be,ee[le]=de,M=le);else if(V<B&&0>i(G,de))ee[M]=G,ee[V]=de,M=V;else break e}}return te}function i(ee,te){var de=ee.sortIndex-te.sortIndex;return de!==0?de:ee.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],h=1,d=null,p=3,v=!1,E=!1,I=!1,k=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(ee){for(var te=n(u);te!==null;){if(te.callback===null)r(u);else if(te.startTime<=ee)r(u),te.sortIndex=te.expirationTime,e(c,te);else break;te=n(u)}}function L(ee){if(I=!1,A(ee),!E)if(n(c)!==null)E=!0,He(U);else{var te=n(u);te!==null&&ct(L,te.startTime-ee)}}function U(ee,te){E=!1,I&&(I=!1,T(g),g=-1),v=!0;var de=p;try{for(A(te),d=n(c);d!==null&&(!(d.expirationTime>te)||ee&&!R());){var M=d.callback;if(typeof M=="function"){d.callback=null,p=d.priorityLevel;var B=M(d.expirationTime<=te);te=t.unstable_now(),typeof B=="function"?d.callback=B:d===n(c)&&r(c),A(te)}else r(c);d=n(c)}if(d!==null)var X=!0;else{var le=n(u);le!==null&&ct(L,le.startTime-te),X=!1}return X}finally{d=null,p=de,v=!1}}var W=!1,b=null,g=-1,w=5,S=-1;function R(){return!(t.unstable_now()-S<w)}function x(){if(b!==null){var ee=t.unstable_now();S=ee;var te=!0;try{te=b(!0,ee)}finally{te?C():(W=!1,b=null)}}else W=!1}var C;if(typeof y=="function")C=function(){y(x)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,je=ue.port2;ue.port1.onmessage=x,C=function(){je.postMessage(null)}}else C=function(){k(x,0)};function He(ee){b=ee,W||(W=!0,C())}function ct(ee,te){g=k(function(){ee(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(ee){ee.callback=null},t.unstable_continueExecution=function(){E||v||(E=!0,He(U))},t.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<ee?Math.floor(1e3/ee):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(ee){switch(p){case 1:case 2:case 3:var te=3;break;default:te=p}var de=p;p=te;try{return ee()}finally{p=de}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(ee,te){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var de=p;p=ee;try{return te()}finally{p=de}},t.unstable_scheduleCallback=function(ee,te,de){var M=t.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?M+de:M):de=M,ee){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=de+B,ee={id:h++,callback:te,priorityLevel:ee,startTime:de,expirationTime:B,sortIndex:-1},de>M?(ee.sortIndex=de,e(u,ee),n(c)===null&&ee===n(u)&&(I?(T(g),g=-1):I=!0,ct(L,de-M))):(ee.sortIndex=B,e(c,ee),E||v||(E=!0,He(U))),ee},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(ee){var te=p;return function(){var de=p;p=te;try{return ee.apply(this,arguments)}finally{p=de}}}})(I0);A0.exports=I0;var Nb=A0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Db=H,mn=Nb;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C0=new Set,Va={};function _s(t,e){fo(t,e),fo(t+"Capture",e)}function fo(t,e){for(Va[t]=e,t=0;t<e.length;t++)C0.add(e[t])}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nf=Object.prototype.hasOwnProperty,Ob=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$g={},Wg={};function Mb(t){return Nf.call(Wg,t)?!0:Nf.call($g,t)?!1:Ob.test(t)?Wg[t]=!0:($g[t]=!0,!1)}function Vb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fb(t,e,n,r){if(e===null||typeof e>"u"||Vb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sp=/[\-:]([a-z])/g;function Tp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sp,Tp);Ot[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sp,Tp);Ot[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sp,Tp);Ot[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function bp(t,e,n,r){var i=Ot.hasOwnProperty(e)?Ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fb(e,n,i,r)&&(n=null),r||i===null?Mb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Or=Db.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xl=Symbol.for("react.element"),Us=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),Ap=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),R0=Symbol.for("react.context"),Ip=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),Mf=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),P0=Symbol.for("react.offscreen"),Kg=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=Kg&&t[Kg]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,zd;function ua(t){if(zd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zd=e&&e[1]||""}return`
`+zd+t}var Bd=!1;function qd(t,e){if(!t||Bd)return"";Bd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{Bd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function Ub(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=qd(t.type,!1),t;case 11:return t=qd(t.type.render,!1),t;case 1:return t=qd(t.type,!0),t;default:return""}}function Vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Us:return"Portal";case Df:return"Profiler";case Ap:return"StrictMode";case Of:return"Suspense";case Mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R0:return(t.displayName||"Context")+".Consumer";case k0:return(t._context.displayName||"Context")+".Provider";case Ip:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cp:return e=t.displayName||null,e!==null?e:Vf(t.type)||"Memo";case Xr:e=t._payload,t=t._init;try{return Vf(t(e))}catch{}}return null}function jb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vf(e);case 8:return e===Ap?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zb(t){var e=x0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jl(t){t._valueTracker||(t._valueTracker=zb(t))}function L0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=x0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ff(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N0(t,e){e=e.checked,e!=null&&bp(t,"checked",e,!1)}function Uf(t,e){N0(t,e);var n=Ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jf(t,e.type,n):e.hasOwnProperty("defaultValue")&&jf(t,e.type,Ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jf(t,e,n){(e!=="number"||Gc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var da=Array.isArray;function eo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ei(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(da(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ei(n)}}function D0(t,e){var n=Ei(e.value),r=Ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function O0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?O0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zl,M0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zl=Zl||document.createElement("div"),Zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bb=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(t){Bb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ea[e]=Ea[t]})});function V0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ea.hasOwnProperty(t)&&Ea[t]?(""+e).trim():e+"px"}function F0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=V0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var qb=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qf(t,e){if(e){if(qb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function Hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $f=null;function kp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wf=null,to=null,no=null;function Jg(t){if(t=gl(t)){if(typeof Wf!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=Qu(e),Wf(t.stateNode,t.type,e))}}function U0(t){to?no?no.push(t):no=[t]:to=t}function j0(){if(to){var t=to,e=no;if(no=to=null,Jg(t),e)for(t=0;t<e.length;t++)Jg(e[t])}}function z0(t,e){return t(e)}function B0(){}var Hd=!1;function q0(t,e,n){if(Hd)return t(e,n);Hd=!0;try{return z0(t,e,n)}finally{Hd=!1,(to!==null||no!==null)&&(B0(),j0())}}function Ua(t,e){var n=t.stateNode;if(n===null)return null;var r=Qu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var Kf=!1;if(Ar)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Kf=!1}function Hb(t,e,n,r,i,s,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Sa=!1,Qc=null,Yc=!1,Gf=null,$b={onError:function(t){Sa=!0,Qc=t}};function Wb(t,e,n,r,i,s,o,a,c){Sa=!1,Qc=null,Hb.apply($b,arguments)}function Kb(t,e,n,r,i,s,o,a,c){if(Wb.apply(this,arguments),Sa){if(Sa){var u=Qc;Sa=!1,Qc=null}else throw Error(Z(198));Yc||(Yc=!0,Gf=u)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zg(t){if(ws(t)!==t)throw Error(Z(188))}function Gb(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zg(i),t;if(s===r)return Zg(i),e;s=s.sibling}throw Error(Z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(Z(189))}}if(n.alternate!==r)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function $0(t){return t=Gb(t),t!==null?W0(t):null}function W0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W0(t);if(e!==null)return e;t=t.sibling}return null}var K0=mn.unstable_scheduleCallback,ey=mn.unstable_cancelCallback,Qb=mn.unstable_shouldYield,Yb=mn.unstable_requestPaint,mt=mn.unstable_now,Xb=mn.unstable_getCurrentPriorityLevel,Rp=mn.unstable_ImmediatePriority,G0=mn.unstable_UserBlockingPriority,Xc=mn.unstable_NormalPriority,Jb=mn.unstable_LowPriority,Q0=mn.unstable_IdlePriority,$u=null,ir=null;function Zb(t){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot($u,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:nA,eA=Math.log,tA=Math.LN2;function nA(t){return t>>>=0,t===0?32:31-(eA(t)/tA|0)|0}var ec=64,tc=4194304;function fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=fa(a):(s&=o,s!==0&&(r=fa(s)))}else o=n&~i,o!==0?r=fa(o):s!==0&&(r=fa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Hn(e),i=1<<n,r|=t[n],e&=~i;return r}function rA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Hn(s),a=1<<o,c=i[o];c===-1?(!(a&n)||a&r)&&(i[o]=rA(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function Qf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y0(){var t=ec;return ec<<=1,!(ec&4194240)&&(ec=64),t}function $d(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function sA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Hn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Hn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ze=0;function X0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J0,xp,Z0,ew,tw,Yf=!1,nc=[],ai=null,li=null,ci=null,ja=new Map,za=new Map,Zr=[],oA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ty(t,e){switch(t){case"focusin":case"focusout":ai=null;break;case"dragenter":case"dragleave":li=null;break;case"mouseover":case"mouseout":ci=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function ta(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=gl(e),e!==null&&xp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aA(t,e,n,r,i){switch(e){case"focusin":return ai=ta(ai,t,e,n,r,i),!0;case"dragenter":return li=ta(li,t,e,n,r,i),!0;case"mouseover":return ci=ta(ci,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ja.set(s,ta(ja.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,za.set(s,ta(za.get(s)||null,t,e,n,r,i)),!0}return!1}function nw(t){var e=Yi(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=H0(n),e!==null){t.blockedOn=e,tw(t.priority,function(){Z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$f=r,n.target.dispatchEvent(r),$f=null}else return e=gl(n),e!==null&&xp(e),t.blockedOn=n,!1;e.shift()}return!0}function ny(t,e,n){bc(t)&&n.delete(e)}function lA(){Yf=!1,ai!==null&&bc(ai)&&(ai=null),li!==null&&bc(li)&&(li=null),ci!==null&&bc(ci)&&(ci=null),ja.forEach(ny),za.forEach(ny)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,Yf||(Yf=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,lA)))}function Ba(t){function e(i){return na(i,t)}if(0<nc.length){na(nc[0],t);for(var n=1;n<nc.length;n++){var r=nc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ai!==null&&na(ai,t),li!==null&&na(li,t),ci!==null&&na(ci,t),ja.forEach(e),za.forEach(e),n=0;n<Zr.length;n++)r=Zr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zr.length&&(n=Zr[0],n.blockedOn===null);)nw(n),n.blockedOn===null&&Zr.shift()}var ro=Or.ReactCurrentBatchConfig,Zc=!0;function cA(t,e,n,r){var i=ze,s=ro.transition;ro.transition=null;try{ze=1,Lp(t,e,n,r)}finally{ze=i,ro.transition=s}}function uA(t,e,n,r){var i=ze,s=ro.transition;ro.transition=null;try{ze=4,Lp(t,e,n,r)}finally{ze=i,ro.transition=s}}function Lp(t,e,n,r){if(Zc){var i=Xf(t,e,n,r);if(i===null)tf(t,e,r,eu,n),ty(t,r);else if(aA(i,t,e,n,r))r.stopPropagation();else if(ty(t,r),e&4&&-1<oA.indexOf(t)){for(;i!==null;){var s=gl(i);if(s!==null&&J0(s),s=Xf(t,e,n,r),s===null&&tf(t,e,r,eu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else tf(t,e,r,null,n)}}var eu=null;function Xf(t,e,n,r){if(eu=null,t=kp(r),t=Yi(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function rw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xb()){case Rp:return 1;case G0:return 4;case Xc:case Jb:return 16;case Q0:return 536870912;default:return 16}default:return 16}}var ii=null,Np=null,Ac=null;function iw(){if(Ac)return Ac;var t,e=Np,n=e.length,r,i="value"in ii?ii.value:ii.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ac=i.slice(t,1<r?1-r:void 0)}function Ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rc(){return!0}function ry(){return!1}function vn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rc:ry,this.isPropagationStopped=ry,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rc)},persist:function(){},isPersistent:rc}),e}var Po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dp=vn(Po),ml=at({},Po,{view:0,detail:0}),dA=vn(ml),Wd,Kd,ra,Wu=at({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Wd=t.screenX-ra.screenX,Kd=t.screenY-ra.screenY):Kd=Wd=0,ra=t),Wd)},movementY:function(t){return"movementY"in t?t.movementY:Kd}}),iy=vn(Wu),fA=at({},Wu,{dataTransfer:0}),hA=vn(fA),pA=at({},ml,{relatedTarget:0}),Gd=vn(pA),mA=at({},Po,{animationName:0,elapsedTime:0,pseudoElement:0}),gA=vn(mA),yA=at({},Po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vA=vn(yA),_A=at({},Po,{data:0}),sy=vn(_A),wA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SA[t])?!!e[t]:!1}function Op(){return TA}var bA=at({},ml,{key:function(t){if(t.key){var e=wA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Op,charCode:function(t){return t.type==="keypress"?Ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AA=vn(bA),IA=at({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oy=vn(IA),CA=at({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Op}),kA=vn(CA),RA=at({},Po,{propertyName:0,elapsedTime:0,pseudoElement:0}),PA=vn(RA),xA=at({},Wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LA=vn(xA),NA=[9,13,27,32],Mp=Ar&&"CompositionEvent"in window,Ta=null;Ar&&"documentMode"in document&&(Ta=document.documentMode);var DA=Ar&&"TextEvent"in window&&!Ta,sw=Ar&&(!Mp||Ta&&8<Ta&&11>=Ta),ay=" ",ly=!1;function ow(t,e){switch(t){case"keyup":return NA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zs=!1;function OA(t,e){switch(t){case"compositionend":return aw(e);case"keypress":return e.which!==32?null:(ly=!0,ay);case"textInput":return t=e.data,t===ay&&ly?null:t;default:return null}}function MA(t,e){if(zs)return t==="compositionend"||!Mp&&ow(t,e)?(t=iw(),Ac=Np=ii=null,zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sw&&e.locale!=="ko"?null:e.data;default:return null}}var VA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VA[t.type]:e==="textarea"}function lw(t,e,n,r){U0(r),e=tu(e,"onChange"),0<e.length&&(n=new Dp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ba=null,qa=null;function FA(t){_w(t,0)}function Ku(t){var e=Hs(t);if(L0(e))return t}function UA(t,e){if(t==="change")return e}var cw=!1;if(Ar){var Qd;if(Ar){var Yd="oninput"in document;if(!Yd){var uy=document.createElement("div");uy.setAttribute("oninput","return;"),Yd=typeof uy.oninput=="function"}Qd=Yd}else Qd=!1;cw=Qd&&(!document.documentMode||9<document.documentMode)}function dy(){ba&&(ba.detachEvent("onpropertychange",uw),qa=ba=null)}function uw(t){if(t.propertyName==="value"&&Ku(qa)){var e=[];lw(e,qa,t,kp(t)),q0(FA,e)}}function jA(t,e,n){t==="focusin"?(dy(),ba=e,qa=n,ba.attachEvent("onpropertychange",uw)):t==="focusout"&&dy()}function zA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku(qa)}function BA(t,e){if(t==="click")return Ku(e)}function qA(t,e){if(t==="input"||t==="change")return Ku(e)}function HA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:HA;function Ha(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nf.call(e,i)||!Kn(t[i],e[i]))return!1}return!0}function fy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hy(t,e){var n=fy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fy(n)}}function dw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fw(){for(var t=window,e=Gc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gc(t.document)}return e}function Vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $A(t){var e=fw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dw(n.ownerDocument.documentElement,n)){if(r!==null&&Vp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hy(n,s);var o=hy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var WA=Ar&&"documentMode"in document&&11>=document.documentMode,Bs=null,Jf=null,Aa=null,Zf=!1;function py(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zf||Bs==null||Bs!==Gc(r)||(r=Bs,"selectionStart"in r&&Vp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&Ha(Aa,r)||(Aa=r,r=tu(Jf,"onSelect"),0<r.length&&(e=new Dp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bs)))}function ic(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qs={animationend:ic("Animation","AnimationEnd"),animationiteration:ic("Animation","AnimationIteration"),animationstart:ic("Animation","AnimationStart"),transitionend:ic("Transition","TransitionEnd")},Xd={},hw={};Ar&&(hw=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Gu(t){if(Xd[t])return Xd[t];if(!qs[t])return t;var e=qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hw)return Xd[t]=e[n];return t}var pw=Gu("animationend"),mw=Gu("animationiteration"),gw=Gu("animationstart"),yw=Gu("transitionend"),vw=new Map,my="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xi(t,e){vw.set(t,e),_s(e,[t])}for(var Jd=0;Jd<my.length;Jd++){var Zd=my[Jd],KA=Zd.toLowerCase(),GA=Zd[0].toUpperCase()+Zd.slice(1);xi(KA,"on"+GA)}xi(pw,"onAnimationEnd");xi(mw,"onAnimationIteration");xi(gw,"onAnimationStart");xi("dblclick","onDoubleClick");xi("focusin","onFocus");xi("focusout","onBlur");xi(yw,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QA=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function gy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Kb(r,e,void 0,t),t.currentTarget=null}function _w(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;gy(i,a,u),s=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;gy(i,a,u),s=c}}}if(Yc)throw t=Gf,Yc=!1,Gf=null,t}function Je(t,e){var n=e[ih];n===void 0&&(n=e[ih]=new Set);var r=t+"__bubble";n.has(r)||(ww(e,t,2,!1),n.add(r))}function ef(t,e,n){var r=0;e&&(r|=4),ww(n,t,r,e)}var sc="_reactListening"+Math.random().toString(36).slice(2);function $a(t){if(!t[sc]){t[sc]=!0,C0.forEach(function(n){n!=="selectionchange"&&(QA.has(n)||ef(n,!1,t),ef(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sc]||(e[sc]=!0,ef("selectionchange",!1,e))}}function ww(t,e,n,r){switch(rw(e)){case 1:var i=cA;break;case 4:i=uA;break;default:i=Lp}n=i.bind(null,e,n,t),i=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function tf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Yi(a),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}a=a.parentNode}}r=r.return}q0(function(){var u=s,h=kp(n),d=[];e:{var p=vw.get(t);if(p!==void 0){var v=Dp,E=t;switch(t){case"keypress":if(Ic(n)===0)break e;case"keydown":case"keyup":v=AA;break;case"focusin":E="focus",v=Gd;break;case"focusout":E="blur",v=Gd;break;case"beforeblur":case"afterblur":v=Gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=iy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=hA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=kA;break;case pw:case mw:case gw:v=gA;break;case yw:v=PA;break;case"scroll":v=dA;break;case"wheel":v=LA;break;case"copy":case"cut":case"paste":v=vA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=oy}var I=(e&4)!==0,k=!I&&t==="scroll",T=I?p!==null?p+"Capture":null:p;I=[];for(var y=u,A;y!==null;){A=y;var L=A.stateNode;if(A.tag===5&&L!==null&&(A=L,T!==null&&(L=Ua(y,T),L!=null&&I.push(Wa(y,L,A)))),k)break;y=y.return}0<I.length&&(p=new v(p,E,null,n,h),d.push({event:p,listeners:I}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&n!==$f&&(E=n.relatedTarget||n.fromElement)&&(Yi(E)||E[Ir]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(E=n.relatedTarget||n.toElement,v=u,E=E?Yi(E):null,E!==null&&(k=ws(E),E!==k||E.tag!==5&&E.tag!==6)&&(E=null)):(v=null,E=u),v!==E)){if(I=iy,L="onMouseLeave",T="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(I=oy,L="onPointerLeave",T="onPointerEnter",y="pointer"),k=v==null?p:Hs(v),A=E==null?p:Hs(E),p=new I(L,y+"leave",v,n,h),p.target=k,p.relatedTarget=A,L=null,Yi(h)===u&&(I=new I(T,y+"enter",E,n,h),I.target=A,I.relatedTarget=k,L=I),k=L,v&&E)t:{for(I=v,T=E,y=0,A=I;A;A=Ns(A))y++;for(A=0,L=T;L;L=Ns(L))A++;for(;0<y-A;)I=Ns(I),y--;for(;0<A-y;)T=Ns(T),A--;for(;y--;){if(I===T||T!==null&&I===T.alternate)break t;I=Ns(I),T=Ns(T)}I=null}else I=null;v!==null&&yy(d,p,v,I,!1),E!==null&&k!==null&&yy(d,k,E,I,!0)}}e:{if(p=u?Hs(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var U=UA;else if(cy(p))if(cw)U=qA;else{U=zA;var W=jA}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(U=BA);if(U&&(U=U(t,u))){lw(d,U,n,h);break e}W&&W(t,p,u),t==="focusout"&&(W=p._wrapperState)&&W.controlled&&p.type==="number"&&jf(p,"number",p.value)}switch(W=u?Hs(u):window,t){case"focusin":(cy(W)||W.contentEditable==="true")&&(Bs=W,Jf=u,Aa=null);break;case"focusout":Aa=Jf=Bs=null;break;case"mousedown":Zf=!0;break;case"contextmenu":case"mouseup":case"dragend":Zf=!1,py(d,n,h);break;case"selectionchange":if(WA)break;case"keydown":case"keyup":py(d,n,h)}var b;if(Mp)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else zs?ow(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(sw&&n.locale!=="ko"&&(zs||g!=="onCompositionStart"?g==="onCompositionEnd"&&zs&&(b=iw()):(ii=h,Np="value"in ii?ii.value:ii.textContent,zs=!0)),W=tu(u,g),0<W.length&&(g=new sy(g,t,null,n,h),d.push({event:g,listeners:W}),b?g.data=b:(b=aw(n),b!==null&&(g.data=b)))),(b=DA?OA(t,n):MA(t,n))&&(u=tu(u,"onBeforeInput"),0<u.length&&(h=new sy("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=b))}_w(d,e)})}function Wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ua(t,n),s!=null&&r.unshift(Wa(t,s,i)),s=Ua(t,e),s!=null&&r.push(Wa(t,s,i))),t=t.return}return r}function Ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=Ua(n,s),c!=null&&o.unshift(Wa(n,c,a))):i||(c=Ua(n,s),c!=null&&o.push(Wa(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var YA=/\r\n?/g,XA=/\u0000|\uFFFD/g;function vy(t){return(typeof t=="string"?t:""+t).replace(YA,`
`).replace(XA,"")}function oc(t,e,n){if(e=vy(e),vy(t)!==e&&n)throw Error(Z(425))}function nu(){}var eh=null,th=null;function nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rh=typeof setTimeout=="function"?setTimeout:void 0,JA=typeof clearTimeout=="function"?clearTimeout:void 0,_y=typeof Promise=="function"?Promise:void 0,ZA=typeof queueMicrotask=="function"?queueMicrotask:typeof _y<"u"?function(t){return _y.resolve(null).then(t).catch(eI)}:rh;function eI(t){setTimeout(function(){throw t})}function nf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ba(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ba(e)}function ui(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xo=Math.random().toString(36).slice(2),er="__reactFiber$"+xo,Ka="__reactProps$"+xo,Ir="__reactContainer$"+xo,ih="__reactEvents$"+xo,tI="__reactListeners$"+xo,nI="__reactHandles$"+xo;function Yi(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ir]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wy(t);t!==null;){if(n=t[er])return n;t=wy(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[er]||t[Ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function Qu(t){return t[Ka]||null}var sh=[],$s=-1;function Li(t){return{current:t}}function Ze(t){0>$s||(t.current=sh[$s],sh[$s]=null,$s--)}function Ge(t,e){$s++,sh[$s]=t.current,t.current=e}var Si={},Kt=Li(Si),on=Li(!1),as=Si;function ho(t,e){var n=t.type.contextTypes;if(!n)return Si;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function an(t){return t=t.childContextTypes,t!=null}function ru(){Ze(on),Ze(Kt)}function Ey(t,e,n){if(Kt.current!==Si)throw Error(Z(168));Ge(Kt,e),Ge(on,n)}function Ew(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(Z(108,jb(t)||"Unknown",i));return at({},n,r)}function iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Si,as=Kt.current,Ge(Kt,t),Ge(on,on.current),!0}function Sy(t,e,n){var r=t.stateNode;if(!r)throw Error(Z(169));n?(t=Ew(t,e,as),r.__reactInternalMemoizedMergedChildContext=t,Ze(on),Ze(Kt),Ge(Kt,t)):Ze(on),Ge(on,n)}var gr=null,Yu=!1,rf=!1;function Sw(t){gr===null?gr=[t]:gr.push(t)}function rI(t){Yu=!0,Sw(t)}function Ni(){if(!rf&&gr!==null){rf=!0;var t=0,e=ze;try{var n=gr;for(ze=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,Yu=!1}catch(i){throw gr!==null&&(gr=gr.slice(t+1)),K0(Rp,Ni),i}finally{ze=e,rf=!1}}return null}var Ws=[],Ks=0,su=null,ou=0,An=[],In=0,ls=null,vr=1,_r="";function Wi(t,e){Ws[Ks++]=ou,Ws[Ks++]=su,su=t,ou=e}function Tw(t,e,n){An[In++]=vr,An[In++]=_r,An[In++]=ls,ls=t;var r=vr;t=_r;var i=32-Hn(r)-1;r&=~(1<<i),n+=1;var s=32-Hn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vr=1<<32-Hn(e)+i|n<<i|r,_r=s+t}else vr=1<<s|n<<i|r,_r=t}function Fp(t){t.return!==null&&(Wi(t,1),Tw(t,1,0))}function Up(t){for(;t===su;)su=Ws[--Ks],Ws[Ks]=null,ou=Ws[--Ks],Ws[Ks]=null;for(;t===ls;)ls=An[--In],An[In]=null,_r=An[--In],An[In]=null,vr=An[--In],An[In]=null}var hn=null,fn=null,tt=!1,zn=null;function bw(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ty(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=ui(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:vr,overflow:_r}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function oh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ah(t){if(tt){var e=fn;if(e){var n=e;if(!Ty(t,e)){if(oh(t))throw Error(Z(418));e=ui(n.nextSibling);var r=hn;e&&Ty(t,e)?bw(r,n):(t.flags=t.flags&-4097|2,tt=!1,hn=t)}}else{if(oh(t))throw Error(Z(418));t.flags=t.flags&-4097|2,tt=!1,hn=t}}}function by(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function ac(t){if(t!==hn)return!1;if(!tt)return by(t),tt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nh(t.type,t.memoizedProps)),e&&(e=fn)){if(oh(t))throw Aw(),Error(Z(418));for(;e;)bw(t,e),e=ui(e.nextSibling)}if(by(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=ui(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?ui(t.stateNode.nextSibling):null;return!0}function Aw(){for(var t=fn;t;)t=ui(t.nextSibling)}function po(){fn=hn=null,tt=!1}function jp(t){zn===null?zn=[t]:zn.push(t)}var iI=Or.ReactCurrentBatchConfig;function ia(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var r=n.stateNode}if(!r)throw Error(Z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function lc(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ay(t){var e=t._init;return e(t._payload)}function Iw(t){function e(T,y){if(t){var A=T.deletions;A===null?(T.deletions=[y],T.flags|=16):A.push(y)}}function n(T,y){if(!t)return null;for(;y!==null;)e(T,y),y=y.sibling;return null}function r(T,y){for(T=new Map;y!==null;)y.key!==null?T.set(y.key,y):T.set(y.index,y),y=y.sibling;return T}function i(T,y){return T=pi(T,y),T.index=0,T.sibling=null,T}function s(T,y,A){return T.index=A,t?(A=T.alternate,A!==null?(A=A.index,A<y?(T.flags|=2,y):A):(T.flags|=2,y)):(T.flags|=1048576,y)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,y,A,L){return y===null||y.tag!==6?(y=df(A,T.mode,L),y.return=T,y):(y=i(y,A),y.return=T,y)}function c(T,y,A,L){var U=A.type;return U===js?h(T,y,A.props.children,L,A.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Xr&&Ay(U)===y.type)?(L=i(y,A.props),L.ref=ia(T,y,A),L.return=T,L):(L=Nc(A.type,A.key,A.props,null,T.mode,L),L.ref=ia(T,y,A),L.return=T,L)}function u(T,y,A,L){return y===null||y.tag!==4||y.stateNode.containerInfo!==A.containerInfo||y.stateNode.implementation!==A.implementation?(y=ff(A,T.mode,L),y.return=T,y):(y=i(y,A.children||[]),y.return=T,y)}function h(T,y,A,L,U){return y===null||y.tag!==7?(y=ss(A,T.mode,L,U),y.return=T,y):(y=i(y,A),y.return=T,y)}function d(T,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return y=df(""+y,T.mode,A),y.return=T,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xl:return A=Nc(y.type,y.key,y.props,null,T.mode,A),A.ref=ia(T,null,y),A.return=T,A;case Us:return y=ff(y,T.mode,A),y.return=T,y;case Xr:var L=y._init;return d(T,L(y._payload),A)}if(da(y)||Zo(y))return y=ss(y,T.mode,A,null),y.return=T,y;lc(T,y)}return null}function p(T,y,A,L){var U=y!==null?y.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return U!==null?null:a(T,y,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Xl:return A.key===U?c(T,y,A,L):null;case Us:return A.key===U?u(T,y,A,L):null;case Xr:return U=A._init,p(T,y,U(A._payload),L)}if(da(A)||Zo(A))return U!==null?null:h(T,y,A,L,null);lc(T,A)}return null}function v(T,y,A,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return T=T.get(A)||null,a(y,T,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Xl:return T=T.get(L.key===null?A:L.key)||null,c(y,T,L,U);case Us:return T=T.get(L.key===null?A:L.key)||null,u(y,T,L,U);case Xr:var W=L._init;return v(T,y,A,W(L._payload),U)}if(da(L)||Zo(L))return T=T.get(A)||null,h(y,T,L,U,null);lc(y,L)}return null}function E(T,y,A,L){for(var U=null,W=null,b=y,g=y=0,w=null;b!==null&&g<A.length;g++){b.index>g?(w=b,b=null):w=b.sibling;var S=p(T,b,A[g],L);if(S===null){b===null&&(b=w);break}t&&b&&S.alternate===null&&e(T,b),y=s(S,y,g),W===null?U=S:W.sibling=S,W=S,b=w}if(g===A.length)return n(T,b),tt&&Wi(T,g),U;if(b===null){for(;g<A.length;g++)b=d(T,A[g],L),b!==null&&(y=s(b,y,g),W===null?U=b:W.sibling=b,W=b);return tt&&Wi(T,g),U}for(b=r(T,b);g<A.length;g++)w=v(b,T,g,A[g],L),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?g:w.key),y=s(w,y,g),W===null?U=w:W.sibling=w,W=w);return t&&b.forEach(function(R){return e(T,R)}),tt&&Wi(T,g),U}function I(T,y,A,L){var U=Zo(A);if(typeof U!="function")throw Error(Z(150));if(A=U.call(A),A==null)throw Error(Z(151));for(var W=U=null,b=y,g=y=0,w=null,S=A.next();b!==null&&!S.done;g++,S=A.next()){b.index>g?(w=b,b=null):w=b.sibling;var R=p(T,b,S.value,L);if(R===null){b===null&&(b=w);break}t&&b&&R.alternate===null&&e(T,b),y=s(R,y,g),W===null?U=R:W.sibling=R,W=R,b=w}if(S.done)return n(T,b),tt&&Wi(T,g),U;if(b===null){for(;!S.done;g++,S=A.next())S=d(T,S.value,L),S!==null&&(y=s(S,y,g),W===null?U=S:W.sibling=S,W=S);return tt&&Wi(T,g),U}for(b=r(T,b);!S.done;g++,S=A.next())S=v(b,T,g,S.value,L),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?g:S.key),y=s(S,y,g),W===null?U=S:W.sibling=S,W=S);return t&&b.forEach(function(x){return e(T,x)}),tt&&Wi(T,g),U}function k(T,y,A,L){if(typeof A=="object"&&A!==null&&A.type===js&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Xl:e:{for(var U=A.key,W=y;W!==null;){if(W.key===U){if(U=A.type,U===js){if(W.tag===7){n(T,W.sibling),y=i(W,A.props.children),y.return=T,T=y;break e}}else if(W.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Xr&&Ay(U)===W.type){n(T,W.sibling),y=i(W,A.props),y.ref=ia(T,W,A),y.return=T,T=y;break e}n(T,W);break}else e(T,W);W=W.sibling}A.type===js?(y=ss(A.props.children,T.mode,L,A.key),y.return=T,T=y):(L=Nc(A.type,A.key,A.props,null,T.mode,L),L.ref=ia(T,y,A),L.return=T,T=L)}return o(T);case Us:e:{for(W=A.key;y!==null;){if(y.key===W)if(y.tag===4&&y.stateNode.containerInfo===A.containerInfo&&y.stateNode.implementation===A.implementation){n(T,y.sibling),y=i(y,A.children||[]),y.return=T,T=y;break e}else{n(T,y);break}else e(T,y);y=y.sibling}y=ff(A,T.mode,L),y.return=T,T=y}return o(T);case Xr:return W=A._init,k(T,y,W(A._payload),L)}if(da(A))return E(T,y,A,L);if(Zo(A))return I(T,y,A,L);lc(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,y!==null&&y.tag===6?(n(T,y.sibling),y=i(y,A),y.return=T,T=y):(n(T,y),y=df(A,T.mode,L),y.return=T,T=y),o(T)):n(T,y)}return k}var mo=Iw(!0),Cw=Iw(!1),au=Li(null),lu=null,Gs=null,zp=null;function Bp(){zp=Gs=lu=null}function qp(t){var e=au.current;Ze(au),t._currentValue=e}function lh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function io(t,e){lu=t,zp=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(zp!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(lu===null)throw Error(Z(308));Gs=t,lu.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Xi=null;function Hp(t){Xi===null?Xi=[t]:Xi.push(t)}function kw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Hp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cr(t,r)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jr=!1;function $p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function di(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cr(t,n)}return i=r.interleaved,i===null?(e.next=e,Hp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cr(t,n)}function Cc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pp(t,n)}}function Iy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cu(t,e,n,r){var i=t.updateQueue;Jr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=c))}if(s!==null){var d=i.baseState;o=0,h=u=c=null,a=s;do{var p=a.lane,v=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,I=a;switch(p=e,v=n,I.tag){case 1:if(E=I.payload,typeof E=="function"){d=E.call(v,d,p);break e}d=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=I.payload,p=typeof E=="function"?E.call(v,d,p):E,p==null)break e;d=at({},d,p);break e;case 2:Jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=v,c=d):h=h.next=v,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(c=d),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);us|=o,t.lanes=o,t.memoizedState=d}}function Cy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Z(191,i));i.call(r)}}}var yl={},sr=Li(yl),Ga=Li(yl),Qa=Li(yl);function Ji(t){if(t===yl)throw Error(Z(174));return t}function Wp(t,e){switch(Ge(Qa,e),Ge(Ga,t),Ge(sr,yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bf(e,t)}Ze(sr),Ge(sr,e)}function go(){Ze(sr),Ze(Ga),Ze(Qa)}function Pw(t){Ji(Qa.current);var e=Ji(sr.current),n=Bf(e,t.type);e!==n&&(Ge(Ga,t),Ge(sr,n))}function Kp(t){Ga.current===t&&(Ze(sr),Ze(Ga))}var st=Li(0);function uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sf=[];function Gp(){for(var t=0;t<sf.length;t++)sf[t]._workInProgressVersionPrimary=null;sf.length=0}var kc=Or.ReactCurrentDispatcher,of=Or.ReactCurrentBatchConfig,cs=0,ot=null,Et=null,kt=null,du=!1,Ia=!1,Ya=0,sI=0;function zt(){throw Error(Z(321))}function Qp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Yp(t,e,n,r,i,s){if(cs=s,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kc.current=t===null||t.memoizedState===null?cI:uI,t=n(r,i),Ia){s=0;do{if(Ia=!1,Ya=0,25<=s)throw Error(Z(301));s+=1,kt=Et=null,e.updateQueue=null,kc.current=dI,t=n(r,i)}while(Ia)}if(kc.current=fu,e=Et!==null&&Et.next!==null,cs=0,kt=Et=ot=null,du=!1,e)throw Error(Z(300));return t}function Xp(){var t=Ya!==0;return Ya=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?ot.memoizedState=kt=t:kt=kt.next=t,kt}function xn(){if(Et===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=kt===null?ot.memoizedState:kt.next;if(e!==null)kt=e,Et=t;else{if(t===null)throw Error(Z(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},kt===null?ot.memoizedState=kt=t:kt=kt.next=t}return kt}function Xa(t,e){return typeof e=="function"?e(t):e}function af(t){var e=xn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var r=Et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,c=null,u=s;do{var h=u.lane;if((cs&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=d,o=r):c=c.next=d,ot.lanes|=h,us|=h}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=a,Kn(r,e.memoizedState)||(sn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ot.lanes|=s,us|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lf(t){var e=xn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function xw(){}function Lw(t,e){var n=ot,r=xn(),i=e(),s=!Kn(r.memoizedState,i);if(s&&(r.memoizedState=i,sn=!0),r=r.queue,Jp(Ow.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,Ja(9,Dw.bind(null,n,r,i,e),void 0,null),Rt===null)throw Error(Z(349));cs&30||Nw(n,e,i)}return i}function Nw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dw(t,e,n,r){e.value=n,e.getSnapshot=r,Mw(e)&&Vw(t)}function Ow(t,e,n){return n(function(){Mw(e)&&Vw(t)})}function Mw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function Vw(t){var e=Cr(t,1);e!==null&&$n(e,t,1,-1)}function ky(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=lI.bind(null,ot,t),[e.memoizedState,t]}function Ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fw(){return xn().memoizedState}function Rc(t,e,n,r){var i=Jn();ot.flags|=t,i.memoizedState=Ja(1|e,n,void 0,r===void 0?null:r)}function Xu(t,e,n,r){var i=xn();r=r===void 0?null:r;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,r!==null&&Qp(r,o.deps)){i.memoizedState=Ja(e,n,s,r);return}}ot.flags|=t,i.memoizedState=Ja(1|e,n,s,r)}function Ry(t,e){return Rc(8390656,8,t,e)}function Jp(t,e){return Xu(2048,8,t,e)}function Uw(t,e){return Xu(4,2,t,e)}function jw(t,e){return Xu(4,4,t,e)}function zw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bw(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4,4,zw.bind(null,e,t),n)}function Zp(){}function qw(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Hw(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $w(t,e,n){return cs&21?(Kn(n,e)||(n=Y0(),ot.lanes|=n,us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function oI(t,e){var n=ze;ze=n!==0&&4>n?n:4,t(!0);var r=of.transition;of.transition={};try{t(!1),e()}finally{ze=n,of.transition=r}}function Ww(){return xn().memoizedState}function aI(t,e,n){var r=hi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kw(t))Gw(e,n);else if(n=kw(t,e,n,r),n!==null){var i=Jt();$n(n,t,r,i),Qw(n,e,r)}}function lI(t,e,n){var r=hi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kw(t))Gw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kn(a,o)){var c=e.interleaved;c===null?(i.next=i,Hp(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=kw(t,e,i,r),n!==null&&(i=Jt(),$n(n,t,r,i),Qw(n,e,r))}}function Kw(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function Gw(t,e){Ia=du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pp(t,n)}}var fu={readContext:Pn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},cI={readContext:Pn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Ry,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4194308,4,zw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rc(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aI.bind(null,ot,t),[r.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:ky,useDebugValue:Zp,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=ky(!1),e=t[0];return t=oI.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ot,i=Jn();if(tt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),Rt===null)throw Error(Z(349));cs&30||Nw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ry(Ow.bind(null,r,s,t),[t]),r.flags|=2048,Ja(9,Dw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Rt.identifierPrefix;if(tt){var n=_r,r=vr;n=(r&~(1<<32-Hn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uI={readContext:Pn,useCallback:qw,useContext:Pn,useEffect:Jp,useImperativeHandle:Bw,useInsertionEffect:Uw,useLayoutEffect:jw,useMemo:Hw,useReducer:af,useRef:Fw,useState:function(){return af(Xa)},useDebugValue:Zp,useDeferredValue:function(t){var e=xn();return $w(e,Et.memoizedState,t)},useTransition:function(){var t=af(Xa)[0],e=xn().memoizedState;return[t,e]},useMutableSource:xw,useSyncExternalStore:Lw,useId:Ww,unstable_isNewReconciler:!1},dI={readContext:Pn,useCallback:qw,useContext:Pn,useEffect:Jp,useImperativeHandle:Bw,useInsertionEffect:Uw,useLayoutEffect:jw,useMemo:Hw,useReducer:lf,useRef:Fw,useState:function(){return lf(Xa)},useDebugValue:Zp,useDeferredValue:function(t){var e=xn();return Et===null?e.memoizedState=t:$w(e,Et.memoizedState,t)},useTransition:function(){var t=lf(Xa)[0],e=xn().memoizedState;return[t,e]},useMutableSource:xw,useSyncExternalStore:Lw,useId:Ww,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ch(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=hi(t),s=Tr(r,i);s.payload=e,n!=null&&(s.callback=n),e=di(t,s,i),e!==null&&($n(e,t,i,r),Cc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=hi(t),s=Tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=di(t,s,i),e!==null&&($n(e,t,i,r),Cc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),r=hi(t),i=Tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=di(t,i,r),e!==null&&($n(e,t,r,n),Cc(e,t,r))}};function Py(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ha(n,r)||!Ha(i,s):!0}function Yw(t,e,n){var r=!1,i=Si,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(i=an(e)?as:Kt.current,r=e.contextTypes,s=(r=r!=null)?ho(t,i):Si),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function xy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function uh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},$p(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pn(s):(s=an(e)?as:Kt.current,i.context=ho(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ch(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ju.enqueueReplaceState(i,i.state,null),cu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,e){try{var n="",r=e;do n+=Ub(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fI=typeof WeakMap=="function"?WeakMap:Map;function Xw(t,e,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pu||(pu=!0,Eh=r),dh(t,e)},n}function Jw(t,e,n){n=Tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dh(t,e),typeof r!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ly(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=II.bind(null,t,e,n),e.then(t,t))}function Ny(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tr(-1,1),e.tag=2,di(n,e,1))),n.lanes|=1),t)}var hI=Or.ReactCurrentOwner,sn=!1;function Xt(t,e,n,r){e.child=t===null?Cw(e,null,n,r):mo(e,t.child,n,r)}function Oy(t,e,n,r,i){n=n.render;var s=e.ref;return io(e,i),r=Yp(t,e,n,r,s,i),n=Xp(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(tt&&n&&Fp(e),e.flags|=1,Xt(t,e,r,i),e.child)}function My(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!am(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zw(t,e,s,r,i)):(t=Nc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ha,n(o,r)&&t.ref===e.ref)return kr(t,e,i)}return e.flags|=1,t=pi(s,r),t.ref=e.ref,t.return=e,e.child=t}function Zw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ha(s,r)&&t.ref===e.ref)if(sn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,kr(t,e,i)}return fh(t,e,n,r,i)}function eE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Ys,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ge(Ys,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ge(Ys,un),un|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ge(Ys,un),un|=r;return Xt(t,e,i,n),e.child}function tE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fh(t,e,n,r,i){var s=an(n)?as:Kt.current;return s=ho(e,s),io(e,i),n=Yp(t,e,n,r,s,i),r=Xp(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(tt&&r&&Fp(e),e.flags|=1,Xt(t,e,n,i),e.child)}function Vy(t,e,n,r,i){if(an(n)){var s=!0;iu(e)}else s=!1;if(io(e,i),e.stateNode===null)Pc(t,e),Yw(e,n,r),uh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=an(n)?as:Kt.current,u=ho(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&xy(e,o,r,u),Jr=!1;var p=e.memoizedState;o.state=p,cu(e,r,o,i),c=e.memoizedState,a!==r||p!==c||on.current||Jr?(typeof h=="function"&&(ch(e,n,h,r),c=e.memoizedState),(a=Jr||Py(e,n,a,r,p,c,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Rw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Fn(e.type,a),o.props=u,d=e.pendingProps,p=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Pn(c):(c=an(n)?as:Kt.current,c=ho(e,c));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==c)&&xy(e,o,r,c),Jr=!1,p=e.memoizedState,o.state=p,cu(e,r,o,i);var E=e.memoizedState;a!==d||p!==E||on.current||Jr?(typeof v=="function"&&(ch(e,n,v,r),E=e.memoizedState),(u=Jr||Py(e,n,u,r,p,E,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return hh(t,e,n,r,s,i)}function hh(t,e,n,r,i,s){tE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sy(e,n,!1),kr(t,e,s);r=e.stateNode,hI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=mo(e,t.child,null,s),e.child=mo(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=r.state,i&&Sy(e,n,!0),e.child}function nE(t){var e=t.stateNode;e.pendingContext?Ey(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ey(t,e.context,!1),Wp(t,e.containerInfo)}function Fy(t,e,n,r,i){return po(),jp(i),e.flags|=256,Xt(t,e,n,r),e.child}var ph={dehydrated:null,treeContext:null,retryLane:0};function mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function rE(t,e,n){var r=e.pendingProps,i=st.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ge(st,i&1),t===null)return ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=td(o,r,0,null),t=ss(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mh(n),e.memoizedState=ph,t):em(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=pi(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=pi(a,s):(s=ss(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ph,r}return s=t.child,t=s.sibling,r=pi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function em(t,e){return e=td({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cc(t,e,n,r){return r!==null&&jp(r),mo(e,t.child,null,n),t=em(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cf(Error(Z(422))),cc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=td({mode:"visible",children:r.children},i,0,null),s=ss(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&mo(e,t.child,null,o),e.child.memoizedState=mh(o),e.memoizedState=ph,s);if(!(e.mode&1))return cc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(Z(419)),r=cf(s,r,void 0),cc(t,e,o,r)}if(a=(o&t.childLanes)!==0,sn||a){if(r=Rt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cr(t,i),$n(r,t,i,-1))}return om(),r=cf(Error(Z(421))),cc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=CI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,fn=ui(i.nextSibling),hn=e,tt=!0,zn=null,t!==null&&(An[In++]=vr,An[In++]=_r,An[In++]=ls,vr=t.id,_r=t.overflow,ls=e),e=em(e,r.children),e.flags|=4096,e)}function Uy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lh(t.return,e,n)}function uf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function iE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Xt(t,e,r.children,n),r=st.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uy(t,n,e);else if(t.tag===19)Uy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ge(st,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),uf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}uf(e,!0,n,null,s);break;case"together":uf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=pi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mI(t,e,n){switch(e.tag){case 3:nE(e),po();break;case 5:Pw(e);break;case 1:an(e.type)&&iu(e);break;case 4:Wp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ge(au,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ge(st,st.current&1),e.flags|=128,null):n&e.child.childLanes?rE(t,e,n):(Ge(st,st.current&1),t=kr(t,e,n),t!==null?t.sibling:null);Ge(st,st.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ge(st,st.current),r)break;return null;case 22:case 23:return e.lanes=0,eE(t,e,n)}return kr(t,e,n)}var sE,gh,oE,aE;sE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gh=function(){};oE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ji(sr.current);var s=null;switch(n){case"input":i=Ff(t,i),r=Ff(t,r),s=[];break;case"select":i=at({},i,{value:void 0}),r=at({},r,{value:void 0}),s=[];break;case"textarea":i=zf(t,i),r=zf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nu)}qf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Va.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Va.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Je("scroll",t),s||a===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};aE=function(t,e,n,r){n!==r&&(e.flags|=4)};function sa(t,e){if(!tt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gI(t,e,n){var r=e.pendingProps;switch(Up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return an(e.type)&&ru(),Bt(e),null;case 3:return r=e.stateNode,go(),Ze(on),Ze(Kt),Gp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ac(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(bh(zn),zn=null))),gh(t,e),Bt(e),null;case 5:Kp(e);var i=Ji(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)oE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(Z(166));return Bt(e),null}if(t=Ji(sr.current),ac(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[er]=e,r[Ka]=s,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(i=0;i<ha.length;i++)Je(ha[i],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":Gg(r,s),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Je("invalid",r);break;case"textarea":Yg(r,s),Je("invalid",r)}qf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&oc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oc(r.textContent,a,t),i=["children",""+a]):Va.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Je("scroll",r)}switch(n){case"input":Jl(r),Qg(r,s,!0);break;case"textarea":Jl(r),Xg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=O0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[er]=e,t[Ka]=r,sE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hf(n,r),n){case"dialog":Je("cancel",t),Je("close",t),i=r;break;case"iframe":case"object":case"embed":Je("load",t),i=r;break;case"video":case"audio":for(i=0;i<ha.length;i++)Je(ha[i],t);i=r;break;case"source":Je("error",t),i=r;break;case"img":case"image":case"link":Je("error",t),Je("load",t),i=r;break;case"details":Je("toggle",t),i=r;break;case"input":Gg(t,r),i=Ff(t,r),Je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=at({},r,{value:void 0}),Je("invalid",t);break;case"textarea":Yg(t,r),i=zf(t,r),Je("invalid",t);break;default:i=r}qf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?F0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&M0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Fa(t,c):typeof c=="number"&&Fa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Va.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Je("scroll",t):c!=null&&bp(t,s,c,o))}switch(n){case"input":Jl(t),Qg(t,r,!1);break;case"textarea":Jl(t),Xg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ei(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?eo(t,!!r.multiple,s,!1):r.defaultValue!=null&&eo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)aE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(Z(166));if(n=Ji(Qa.current),Ji(sr.current),ac(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(s=r.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:oc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return Bt(e),null;case 13:if(Ze(st),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(tt&&fn!==null&&e.mode&1&&!(e.flags&128))Aw(),po(),e.flags|=98560,s=!1;else if(s=ac(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(Z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[er]=e}else po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else zn!==null&&(bh(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||st.current&1?Tt===0&&(Tt=3):om())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return go(),gh(t,e),t===null&&$a(e.stateNode.containerInfo),Bt(e),null;case 10:return qp(e.type._context),Bt(e),null;case 17:return an(e.type)&&ru(),Bt(e),null;case 19:if(Ze(st),s=e.memoizedState,s===null)return Bt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)sa(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uu(t),o!==null){for(e.flags|=128,sa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ge(st,st.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>vo&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304)}else{if(!r)if(t=uu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!tt)return Bt(e),null}else 2*mt()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,r=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=st.current,Ge(st,r?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return sm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?un&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function yI(t,e){switch(Up(e),e.tag){case 1:return an(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return go(),Ze(on),Ze(Kt),Gp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kp(e),null;case 13:if(Ze(st),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ze(st),null;case 4:return go(),null;case 10:return qp(e.type._context),null;case 22:case 23:return sm(),null;case 24:return null;default:return null}}var uc=!1,$t=!1,vI=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ft(t,e,r)}else n.current=null}function yh(t,e,n){try{n()}catch(r){ft(t,e,r)}}var jy=!1;function _I(t,e){if(eh=Zc,t=fw(),Vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,h=0,d=t,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(c=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===t)break t;if(p===n&&++u===i&&(a=o),p===s&&++h===r&&(c=o),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(th={focusedElem:t,selectionRange:n},Zc=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){e=ce;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var I=E.memoizedProps,k=E.memoizedState,T=e.stateNode,y=T.getSnapshotBeforeUpdate(e.elementType===e.type?I:Fn(e.type,I),k);T.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(L){ft(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}return E=jy,jy=!1,E}function Ca(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yh(e,n,s)}i=i.next}while(i!==r)}}function Zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lE(t){var e=t.alternate;e!==null&&(t.alternate=null,lE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[Ka],delete e[ih],delete e[tI],delete e[nI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cE(t){return t.tag===5||t.tag===3||t.tag===4}function zy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}function wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wh(t,e,n),t=t.sibling;t!==null;)wh(t,e,n),t=t.sibling}var xt=null,Un=!1;function Kr(t,e,n){for(n=n.child;n!==null;)uE(t,e,n),n=n.sibling}function uE(t,e,n){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount($u,n)}catch{}switch(n.tag){case 5:$t||Qs(n,e);case 6:var r=xt,i=Un;xt=null,Kr(t,e,n),xt=r,Un=i,xt!==null&&(Un?(t=xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(Un?(t=xt,n=n.stateNode,t.nodeType===8?nf(t.parentNode,n):t.nodeType===1&&nf(t,n),Ba(t)):nf(xt,n.stateNode));break;case 4:r=xt,i=Un,xt=n.stateNode.containerInfo,Un=!0,Kr(t,e,n),xt=r,Un=i;break;case 0:case 11:case 14:case 15:if(!$t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yh(n,e,o),i=i.next}while(i!==r)}Kr(t,e,n);break;case 1:if(!$t&&(Qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ft(n,e,a)}Kr(t,e,n);break;case 21:Kr(t,e,n);break;case 22:n.mode&1?($t=(r=$t)||n.memoizedState!==null,Kr(t,e,n),$t=r):Kr(t,e,n);break;default:Kr(t,e,n)}}function By(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vI),e.forEach(function(r){var i=kI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xt=a.stateNode,Un=!1;break e;case 3:xt=a.stateNode.containerInfo,Un=!0;break e;case 4:xt=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(xt===null)throw Error(Z(160));uE(s,o,i),xt=null,Un=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ft(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dE(e,t),e=e.sibling}function dE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),Xn(t),r&4){try{Ca(3,t,t.return),Zu(3,t)}catch(I){ft(t,t.return,I)}try{Ca(5,t,t.return)}catch(I){ft(t,t.return,I)}}break;case 1:Vn(e,t),Xn(t),r&512&&n!==null&&Qs(n,n.return);break;case 5:if(Vn(e,t),Xn(t),r&512&&n!==null&&Qs(n,n.return),t.flags&32){var i=t.stateNode;try{Fa(i,"")}catch(I){ft(t,t.return,I)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&N0(i,s),Hf(a,o);var u=Hf(a,s);for(o=0;o<c.length;o+=2){var h=c[o],d=c[o+1];h==="style"?F0(i,d):h==="dangerouslySetInnerHTML"?M0(i,d):h==="children"?Fa(i,d):bp(i,h,d,u)}switch(a){case"input":Uf(i,s);break;case"textarea":D0(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?eo(i,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?eo(i,!!s.multiple,s.defaultValue,!0):eo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ka]=s}catch(I){ft(t,t.return,I)}}break;case 6:if(Vn(e,t),Xn(t),r&4){if(t.stateNode===null)throw Error(Z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(I){ft(t,t.return,I)}}break;case 3:if(Vn(e,t),Xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(e.containerInfo)}catch(I){ft(t,t.return,I)}break;case 4:Vn(e,t),Xn(t);break;case 13:Vn(e,t),Xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rm=mt())),r&4&&By(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?($t=(u=$t)||h,Vn(e,t),$t=u):Vn(e,t),Xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(ce=t,h=t.child;h!==null;){for(d=ce=h;ce!==null;){switch(p=ce,v=p.child,p.tag){case 0:case 11:case 14:case 15:Ca(4,p,p.return);break;case 1:Qs(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(I){ft(r,n,I)}}break;case 5:Qs(p,p.return);break;case 22:if(p.memoizedState!==null){Hy(d);continue}}v!==null?(v.return=p,ce=v):Hy(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,c=d.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=V0("display",o))}catch(I){ft(t,t.return,I)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(I){ft(t,t.return,I)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Vn(e,t),Xn(t),r&4&&By(t);break;case 21:break;default:Vn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cE(n)){var r=n;break e}n=n.return}throw Error(Z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fa(i,""),r.flags&=-33);var s=zy(t);wh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zy(t);_h(t,a,o);break;default:throw Error(Z(161))}}catch(c){ft(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wI(t,e,n){ce=t,fE(t)}function fE(t,e,n){for(var r=(t.mode&1)!==0;ce!==null;){var i=ce,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uc;if(!o){var a=i.alternate,c=a!==null&&a.memoizedState!==null||$t;a=uc;var u=$t;if(uc=o,($t=c)&&!u)for(ce=i;ce!==null;)o=ce,c=o.child,o.tag===22&&o.memoizedState!==null?$y(i):c!==null?(c.return=o,ce=c):$y(i);for(;s!==null;)ce=s,fE(s),s=s.sibling;ce=i,uc=a,$t=u}qy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ce=s):qy(t)}}function qy(t){for(;ce!==null;){var e=ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Zu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ba(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}$t||e.flags&512&&vh(e)}catch(p){ft(e,e.return,p)}}if(e===t){ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}}function Hy(t){for(;ce!==null;){var e=ce;if(e===t){ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ce=n;break}ce=e.return}}function $y(t){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zu(4,e)}catch(c){ft(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){ft(e,i,c)}}var s=e.return;try{vh(e)}catch(c){ft(e,s,c)}break;case 5:var o=e.return;try{vh(e)}catch(c){ft(e,o,c)}}}catch(c){ft(e,e.return,c)}if(e===t){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var EI=Math.ceil,hu=Or.ReactCurrentDispatcher,tm=Or.ReactCurrentOwner,Rn=Or.ReactCurrentBatchConfig,Oe=0,Rt=null,_t=null,Dt=0,un=0,Ys=Li(0),Tt=0,Za=null,us=0,ed=0,nm=0,ka=null,rn=null,rm=0,vo=1/0,mr=null,pu=!1,Eh=null,fi=null,dc=!1,si=null,mu=0,Ra=0,Sh=null,xc=-1,Lc=0;function Jt(){return Oe&6?mt():xc!==-1?xc:xc=mt()}function hi(t){return t.mode&1?Oe&2&&Dt!==0?Dt&-Dt:iI.transition!==null?(Lc===0&&(Lc=Y0()),Lc):(t=ze,t!==0||(t=window.event,t=t===void 0?16:rw(t.type)),t):1}function $n(t,e,n,r){if(50<Ra)throw Ra=0,Sh=null,Error(Z(185));pl(t,n,r),(!(Oe&2)||t!==Rt)&&(t===Rt&&(!(Oe&2)&&(ed|=n),Tt===4&&ei(t,Dt)),ln(t,r),n===1&&Oe===0&&!(e.mode&1)&&(vo=mt()+500,Yu&&Ni()))}function ln(t,e){var n=t.callbackNode;iA(t,e);var r=Jc(t,t===Rt?Dt:0);if(r===0)n!==null&&ey(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ey(n),e===1)t.tag===0?rI(Wy.bind(null,t)):Sw(Wy.bind(null,t)),ZA(function(){!(Oe&6)&&Ni()}),n=null;else{switch(X0(r)){case 1:n=Rp;break;case 4:n=G0;break;case 16:n=Xc;break;case 536870912:n=Q0;break;default:n=Xc}n=wE(n,hE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hE(t,e){if(xc=-1,Lc=0,Oe&6)throw Error(Z(327));var n=t.callbackNode;if(so()&&t.callbackNode!==n)return null;var r=Jc(t,t===Rt?Dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gu(t,r);else{e=r;var i=Oe;Oe|=2;var s=mE();(Rt!==t||Dt!==e)&&(mr=null,vo=mt()+500,is(t,e));do try{bI();break}catch(a){pE(t,a)}while(!0);Bp(),hu.current=s,Oe=i,_t!==null?e=0:(Rt=null,Dt=0,e=Tt)}if(e!==0){if(e===2&&(i=Qf(t),i!==0&&(r=i,e=Th(t,i))),e===1)throw n=Za,is(t,0),ei(t,r),ln(t,mt()),n;if(e===6)ei(t,r);else{if(i=t.current.alternate,!(r&30)&&!SI(i)&&(e=gu(t,r),e===2&&(s=Qf(t),s!==0&&(r=s,e=Th(t,s))),e===1))throw n=Za,is(t,0),ei(t,r),ln(t,mt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(Z(345));case 2:Ki(t,rn,mr);break;case 3:if(ei(t,r),(r&130023424)===r&&(e=rm+500-mt(),10<e)){if(Jc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rh(Ki.bind(null,t,rn,mr),e);break}Ki(t,rn,mr);break;case 4:if(ei(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Hn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=mt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EI(r/1960))-r,10<r){t.timeoutHandle=rh(Ki.bind(null,t,rn,mr),r);break}Ki(t,rn,mr);break;case 5:Ki(t,rn,mr);break;default:throw Error(Z(329))}}}return ln(t,mt()),t.callbackNode===n?hE.bind(null,t):null}function Th(t,e){var n=ka;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=gu(t,e),t!==2&&(e=rn,rn=n,e!==null&&bh(e)),t}function bh(t){rn===null?rn=t:rn.push.apply(rn,t)}function SI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ei(t,e){for(e&=~nm,e&=~ed,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),r=1<<n;t[n]=-1,e&=~r}}function Wy(t){if(Oe&6)throw Error(Z(327));so();var e=Jc(t,0);if(!(e&1))return ln(t,mt()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var r=Qf(t);r!==0&&(e=r,n=Th(t,r))}if(n===1)throw n=Za,is(t,0),ei(t,e),ln(t,mt()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ki(t,rn,mr),ln(t,mt()),null}function im(t,e){var n=Oe;Oe|=1;try{return t(e)}finally{Oe=n,Oe===0&&(vo=mt()+500,Yu&&Ni())}}function ds(t){si!==null&&si.tag===0&&!(Oe&6)&&so();var e=Oe;Oe|=1;var n=Rn.transition,r=ze;try{if(Rn.transition=null,ze=1,t)return t()}finally{ze=r,Rn.transition=n,Oe=e,!(Oe&6)&&Ni()}}function sm(){un=Ys.current,Ze(Ys)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,JA(n)),_t!==null)for(n=_t.return;n!==null;){var r=n;switch(Up(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ru();break;case 3:go(),Ze(on),Ze(Kt),Gp();break;case 5:Kp(r);break;case 4:go();break;case 13:Ze(st);break;case 19:Ze(st);break;case 10:qp(r.type._context);break;case 22:case 23:sm()}n=n.return}if(Rt=t,_t=t=pi(t.current,null),Dt=un=e,Tt=0,Za=null,nm=ed=us=0,rn=ka=null,Xi!==null){for(e=0;e<Xi.length;e++)if(n=Xi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xi=null}return t}function pE(t,e){do{var n=_t;try{if(Bp(),kc.current=fu,du){for(var r=ot.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}du=!1}if(cs=0,kt=Et=ot=null,Ia=!1,Ya=0,tm.current=null,n===null||n.return===null){Tt=1,Za=e,_t=null;break}e:{var s=t,o=n.return,a=n,c=e;if(e=Dt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Ny(o);if(v!==null){v.flags&=-257,Dy(v,o,a,s,e),v.mode&1&&Ly(s,u,e),e=v,c=u;var E=e.updateQueue;if(E===null){var I=new Set;I.add(c),e.updateQueue=I}else E.add(c);break e}else{if(!(e&1)){Ly(s,u,e),om();break e}c=Error(Z(426))}}else if(tt&&a.mode&1){var k=Ny(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Dy(k,o,a,s,e),jp(yo(c,a));break e}}s=c=yo(c,a),Tt!==4&&(Tt=2),ka===null?ka=[s]:ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=Xw(s,c,e);Iy(s,T);break e;case 1:a=c;var y=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(fi===null||!fi.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=Jw(s,a,e);Iy(s,L);break e}}s=s.return}while(s!==null)}yE(n)}catch(U){e=U,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function mE(){var t=hu.current;return hu.current=fu,t===null?fu:t}function om(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Rt===null||!(us&268435455)&&!(ed&268435455)||ei(Rt,Dt)}function gu(t,e){var n=Oe;Oe|=2;var r=mE();(Rt!==t||Dt!==e)&&(mr=null,is(t,e));do try{TI();break}catch(i){pE(t,i)}while(!0);if(Bp(),Oe=n,hu.current=r,_t!==null)throw Error(Z(261));return Rt=null,Dt=0,Tt}function TI(){for(;_t!==null;)gE(_t)}function bI(){for(;_t!==null&&!Qb();)gE(_t)}function gE(t){var e=_E(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?yE(t):_t=e,tm.current=null}function yE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yI(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,_t=null;return}}else if(n=gI(n,e,un),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);Tt===0&&(Tt=5)}function Ki(t,e,n){var r=ze,i=Rn.transition;try{Rn.transition=null,ze=1,AI(t,e,n,r)}finally{Rn.transition=i,ze=r}return null}function AI(t,e,n,r){do so();while(si!==null);if(Oe&6)throw Error(Z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sA(t,s),t===Rt&&(_t=Rt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dc||(dc=!0,wE(Xc,function(){return so(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=ze;ze=1;var a=Oe;Oe|=4,tm.current=null,_I(t,n),dE(n,t),$A(th),Zc=!!eh,th=eh=null,t.current=n,wI(n),Yb(),Oe=a,ze=o,Rn.transition=s}else t.current=n;if(dc&&(dc=!1,si=t,mu=i),s=t.pendingLanes,s===0&&(fi=null),Zb(n.stateNode),ln(t,mt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pu)throw pu=!1,t=Eh,Eh=null,t;return mu&1&&t.tag!==0&&so(),s=t.pendingLanes,s&1?t===Sh?Ra++:(Ra=0,Sh=t):Ra=0,Ni(),null}function so(){if(si!==null){var t=X0(mu),e=Rn.transition,n=ze;try{if(Rn.transition=null,ze=16>t?16:t,si===null)var r=!1;else{if(t=si,si=null,mu=0,Oe&6)throw Error(Z(331));var i=Oe;for(Oe|=4,ce=t.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(ce=u;ce!==null;){var h=ce;switch(h.tag){case 0:case 11:case 15:Ca(8,h,s)}var d=h.child;if(d!==null)d.return=h,ce=d;else for(;ce!==null;){h=ce;var p=h.sibling,v=h.return;if(lE(h),h===u){ce=null;break}if(p!==null){p.return=v,ce=p;break}ce=v}}}var E=s.alternate;if(E!==null){var I=E.child;if(I!==null){E.child=null;do{var k=I.sibling;I.sibling=null,I=k}while(I!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ca(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,ce=T;break e}ce=s.return}}var y=t.current;for(ce=y;ce!==null;){o=ce;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,ce=A;else e:for(o=y;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zu(9,a)}}catch(U){ft(a,a.return,U)}if(a===o){ce=null;break e}var L=a.sibling;if(L!==null){L.return=a.return,ce=L;break e}ce=a.return}}if(Oe=i,Ni(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot($u,t)}catch{}r=!0}return r}finally{ze=n,Rn.transition=e}}return!1}function Ky(t,e,n){e=yo(n,e),e=Xw(t,e,1),t=di(t,e,1),e=Jt(),t!==null&&(pl(t,1,e),ln(t,e))}function ft(t,e,n){if(t.tag===3)Ky(t,t,n);else for(;e!==null;){if(e.tag===3){Ky(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fi===null||!fi.has(r))){t=yo(n,t),t=Jw(e,t,1),e=di(e,t,1),t=Jt(),e!==null&&(pl(e,1,t),ln(e,t));break}}e=e.return}}function II(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Dt&n)===n&&(Tt===4||Tt===3&&(Dt&130023424)===Dt&&500>mt()-rm?is(t,0):nm|=n),ln(t,e)}function vE(t,e){e===0&&(t.mode&1?(e=tc,tc<<=1,!(tc&130023424)&&(tc=4194304)):e=1);var n=Jt();t=Cr(t,e),t!==null&&(pl(t,e,n),ln(t,n))}function CI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vE(t,n)}function kI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(Z(314))}r!==null&&r.delete(e),vE(t,n)}var _E;_E=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,mI(t,e,n);sn=!!(t.flags&131072)}else sn=!1,tt&&e.flags&1048576&&Tw(e,ou,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pc(t,e),t=e.pendingProps;var i=ho(e,Kt.current);io(e,n),i=Yp(null,e,r,t,i,n);var s=Xp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(r)?(s=!0,iu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$p(e),i.updater=Ju,e.stateNode=i,i._reactInternals=e,uh(e,r,t,n),e=hh(null,e,r,!0,s,n)):(e.tag=0,tt&&s&&Fp(e),Xt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=PI(r),t=Fn(r,t),i){case 0:e=fh(null,e,r,t,n);break e;case 1:e=Vy(null,e,r,t,n);break e;case 11:e=Oy(null,e,r,t,n);break e;case 14:e=My(null,e,r,Fn(r.type,t),n);break e}throw Error(Z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),fh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),Vy(t,e,r,i,n);case 3:e:{if(nE(e),t===null)throw Error(Z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Rw(t,e),cu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=yo(Error(Z(423)),e),e=Fy(t,e,r,n,i);break e}else if(r!==i){i=yo(Error(Z(424)),e),e=Fy(t,e,r,n,i);break e}else for(fn=ui(e.stateNode.containerInfo.firstChild),hn=e,tt=!0,zn=null,n=Cw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),r===i){e=kr(t,e,n);break e}Xt(t,e,r,n)}e=e.child}return e;case 5:return Pw(e),t===null&&ah(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nh(r,i)?o=null:s!==null&&nh(r,s)&&(e.flags|=32),tE(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&ah(e),null;case 13:return rE(t,e,n);case 4:return Wp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mo(e,null,r,n):Xt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),Oy(t,e,r,i,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ge(au,r._currentValue),r._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===i.children&&!on.current){e=kr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Tr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),lh(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,io(e,n),i=Pn(i),r=r(i),e.flags|=1,Xt(t,e,r,n),e.child;case 14:return r=e.type,i=Fn(r,e.pendingProps),i=Fn(r.type,i),My(t,e,r,i,n);case 15:return Zw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),Pc(t,e),e.tag=1,an(r)?(t=!0,iu(e)):t=!1,io(e,n),Yw(e,r,i),uh(e,r,i,n),hh(null,e,r,!0,t,n);case 19:return iE(t,e,n);case 22:return eE(t,e,n)}throw Error(Z(156,e.tag))};function wE(t,e){return K0(t,e)}function RI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,r){return new RI(t,e,n,r)}function am(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PI(t){if(typeof t=="function")return am(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ip)return 11;if(t===Cp)return 14}return 2}function pi(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")am(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return ss(n.children,i,s,e);case Ap:o=8,i|=8;break;case Df:return t=kn(12,n,e,i|2),t.elementType=Df,t.lanes=s,t;case Of:return t=kn(13,n,e,i),t.elementType=Of,t.lanes=s,t;case Mf:return t=kn(19,n,e,i),t.elementType=Mf,t.lanes=s,t;case P0:return td(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k0:o=10;break e;case R0:o=9;break e;case Ip:o=11;break e;case Cp:o=14;break e;case Xr:o=16,r=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=kn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ss(t,e,n,r){return t=kn(7,t,r,e),t.lanes=n,t}function td(t,e,n,r){return t=kn(22,t,r,e),t.elementType=P0,t.lanes=n,t.stateNode={isHidden:!1},t}function df(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function ff(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$d(0),this.expirationTimes=$d(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$d(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lm(t,e,n,r,i,s,o,a,c){return t=new xI(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$p(s),t}function LI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function EE(t){if(!t)return Si;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(an(n))return Ew(t,n,e)}return e}function SE(t,e,n,r,i,s,o,a,c){return t=lm(n,r,!0,t,i,s,o,a,c),t.context=EE(null),n=t.current,r=Jt(),i=hi(n),s=Tr(r,i),s.callback=e??null,di(n,s,i),t.current.lanes=i,pl(t,i,r),ln(t,r),t}function nd(t,e,n,r){var i=e.current,s=Jt(),o=hi(i);return n=EE(n),e.context===null?e.context=n:e.pendingContext=n,e=Tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=di(i,e,o),t!==null&&($n(t,i,o,s),Cc(t,i,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cm(t,e){Gy(t,e),(t=t.alternate)&&Gy(t,e)}function NI(){return null}var TE=typeof reportError=="function"?reportError:function(t){console.error(t)};function um(t){this._internalRoot=t}rd.prototype.render=um.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));nd(t,e,null,null)};rd.prototype.unmount=um.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ds(function(){nd(null,t,null,null)}),e[Ir]=null}};function rd(t){this._internalRoot=t}rd.prototype.unstable_scheduleHydration=function(t){if(t){var e=ew();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zr.length&&e!==0&&e<Zr[n].priority;n++);Zr.splice(n,0,t),n===0&&nw(t)}};function dm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qy(){}function DI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=yu(o);s.call(u)}}var o=SE(e,r,t,0,null,!1,!1,"",Qy);return t._reactRootContainer=o,t[Ir]=o.current,$a(t.nodeType===8?t.parentNode:t),ds(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=yu(c);a.call(u)}}var c=lm(t,0,!1,null,null,!1,!1,"",Qy);return t._reactRootContainer=c,t[Ir]=c.current,$a(t.nodeType===8?t.parentNode:t),ds(function(){nd(e,c,n,r)}),c}function sd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var c=yu(o);a.call(c)}}nd(e,o,t,i)}else o=DI(n,e,t,i,r);return yu(o)}J0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fa(e.pendingLanes);n!==0&&(Pp(e,n|1),ln(e,mt()),!(Oe&6)&&(vo=mt()+500,Ni()))}break;case 13:ds(function(){var r=Cr(t,1);if(r!==null){var i=Jt();$n(r,t,1,i)}}),cm(t,1)}};xp=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=Jt();$n(e,t,134217728,n)}cm(t,134217728)}};Z0=function(t){if(t.tag===13){var e=hi(t),n=Cr(t,e);if(n!==null){var r=Jt();$n(n,t,e,r)}cm(t,e)}};ew=function(){return ze};tw=function(t,e){var n=ze;try{return ze=t,e()}finally{ze=n}};Wf=function(t,e,n){switch(e){case"input":if(Uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Qu(r);if(!i)throw Error(Z(90));L0(r),Uf(r,i)}}}break;case"textarea":D0(t,n);break;case"select":e=n.value,e!=null&&eo(t,!!n.multiple,e,!1)}};z0=im;B0=ds;var OI={usingClientEntryPoint:!1,Events:[gl,Hs,Qu,U0,j0,im]},oa={findFiberByHostInstance:Yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MI={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$0(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||NI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{$u=fc.inject(MI),ir=fc}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OI;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dm(e))throw Error(Z(200));return LI(t,e,null,n)};yn.createRoot=function(t,e){if(!dm(t))throw Error(Z(299));var n=!1,r="",i=TE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=lm(t,1,!1,null,null,n,!1,r,i),t[Ir]=e.current,$a(t.nodeType===8?t.parentNode:t),new um(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=$0(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return ds(t)};yn.hydrate=function(t,e,n){if(!id(e))throw Error(Z(200));return sd(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!dm(t))throw Error(Z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=TE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=SE(e,null,t,1,n??null,i,!1,s,o),t[Ir]=e.current,$a(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new rd(e)};yn.render=function(t,e,n){if(!id(e))throw Error(Z(200));return sd(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!id(t))throw Error(Z(40));return t._reactRootContainer?(ds(function(){sd(null,null,t,!1,function(){t._reactRootContainer=null,t[Ir]=null})}),!0):!1};yn.unstable_batchedUpdates=im;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!id(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return sd(t,e,n,!1,r)};yn.version="18.3.1-next-f1338f8080-20240426";function bE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bE)}catch(t){console.error(t)}}bE(),b0.exports=yn;var fm=b0.exports;const VI=gp(fm),FI=f0({__proto__:null,default:VI},[fm]);var AE,Yy=fm;AE=Yy.createRoot,Yy.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function it(){return it=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},it.apply(this,arguments)}var vt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(vt||(vt={}));const Xy="popstate";function UI(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:c=""}=Mr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),el("",{pathname:o,search:a,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");a=u===-1?c:c.slice(0,u)}return a+"#"+(typeof s=="string"?s:vl(s))}function r(i,s){fs(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return zI(e,n,r,t)}function Ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jI(){return Math.random().toString(36).substr(2,8)}function Jy(t,e){return{usr:t.state,key:t.key,idx:e}}function el(t,e,n,r){return n===void 0&&(n=null),it({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Mr(e):e,{state:n,key:e&&e.key||r||jI()})}function vl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Mr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function zI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=vt.Pop,c=null,u=h();u==null&&(u=0,o.replaceState(it({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=vt.Pop;let k=h(),T=k==null?null:k-u;u=k,c&&c({action:a,location:I.location,delta:T})}function p(k,T){a=vt.Push;let y=el(I.location,k,T);n&&n(y,k),u=h()+1;let A=Jy(y,u),L=I.createHref(y);try{o.pushState(A,"",L)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(L)}s&&c&&c({action:a,location:I.location,delta:1})}function v(k,T){a=vt.Replace;let y=el(I.location,k,T);n&&n(y,k),u=h();let A=Jy(y,u),L=I.createHref(y);o.replaceState(A,"",L),s&&c&&c({action:a,location:I.location,delta:0})}function E(k){let T=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof k=="string"?k:vl(k);return y=y.replace(/ $/,"%20"),Ce(T,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,T)}let I={get action(){return a},get location(){return t(i,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Xy,d),c=k,()=>{i.removeEventListener(Xy,d),c=null}},createHref(k){return e(i,k)},createURL:E,encodeLocation(k){let T=E(k);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:p,replace:v,go(k){return o.go(k)}};return I}var qe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qe||(qe={}));const BI=new Set(["lazy","caseSensitive","path","id","index","children"]);function qI(t){return t.index===!0}function tl(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],a=typeof i.id=="string"?i.id:o.join("-");if(Ce(i.index!==!0||!i.children,"Cannot specify children on an index route"),Ce(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),qI(i)){let c=it({},i,e(i),{id:a});return r[a]=c,c}else{let c=it({},i,e(i),{id:a,children:void 0});return r[a]=c,i.children&&(c.children=tl(i.children,e,o,r)),c}})}function Qi(t,e,n){return n===void 0&&(n="/"),Dc(t,e,n,!1)}function Dc(t,e,n,r){let i=typeof e=="string"?Mr(e):e,s=_l(i.pathname||"/",n);if(s==null)return null;let o=IE(t);$I(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let u=nC(s);a=eC(o[c],u,r)}return a}function HI(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function IE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Ce(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=mi([r,c.relativePath]),h=n.concat(c);s.children&&s.children.length>0&&(Ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),IE(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:JI(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let c of CE(s.path))i(s,o,c)}),e}function CE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=CE(r.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function $I(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ZI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const WI=/^:[\w-]+$/,KI=3,GI=2,QI=1,YI=10,XI=-2,Zy=t=>t==="*";function JI(t,e){let n=t.split("/"),r=n.length;return n.some(Zy)&&(r+=XI),e&&(r+=GI),n.filter(i=>!Zy(i)).reduce((i,s)=>i+(WI.test(s)?KI:s===""?QI:YI),r)}function ZI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function eC(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=ev({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),p=c.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=ev({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:mi([s,d.pathname]),pathnameBase:sC(mi([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=mi([s,d.pathnameBase]))}return o}function ev(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:p,isOptional:v}=h;if(p==="*"){let I=a[d]||"";o=s.slice(0,s.length-I.length).replace(/(.)\/+$/,"$1")}const E=a[d];return v&&!E?u[p]=void 0:u[p]=(E||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function tC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function nC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _l(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function rC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Mr(t):t;return{pathname:n?n.startsWith("/")?n:iC(n,e):e,search:oC(r),hash:aC(i)}}function iC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function RE(t,e){let n=kE(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function PE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Mr(t):(i=it({},t),Ce(!i.pathname||!i.pathname.includes("?"),hf("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),hf("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),hf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let c=rC(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const mi=t=>t.join("/").replace(/\/\/+/g,"/"),sC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),oC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,aC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class vu{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function od(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const xE=["post","put","patch","delete"],lC=new Set(xE),cC=["get",...xE],uC=new Set(cC),dC=new Set([301,302,303,307,308]),fC=new Set([307,308]),pf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},hC={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},aa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},hm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pC=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),LE="remix-router-transitions";function mC(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;Ce(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let P=t.detectErrorBoundary;i=N=>({hasErrorBoundary:P(N)})}else i=pC;let s={},o=tl(t.routes,i,void 0,s),a,c=t.basename||"/",u=t.unstable_dataStrategy||wC,h=t.unstable_patchRoutesOnNavigation,d=it({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),p=null,v=new Set,E=1e3,I=new Set,k=null,T=null,y=null,A=t.hydrationData!=null,L=Qi(o,t.history.location,c),U=null;if(L==null&&!h){let P=Yt(404,{pathname:t.history.location.pathname}),{matches:N,route:F}=uv(o);L=N,U={[F.id]:P}}L&&!t.hydrationData&&gt(L,o,t.history.location.pathname).active&&(L=null);let W;if(L)if(L.some(P=>P.route.lazy))W=!1;else if(!L.some(P=>P.route.loader))W=!0;else if(d.v7_partialHydration){let P=t.hydrationData?t.hydrationData.loaderData:null,N=t.hydrationData?t.hydrationData.errors:null,F=K=>K.route.loader?typeof K.route.loader=="function"&&K.route.loader.hydrate===!0?!1:P&&P[K.route.id]!==void 0||N&&N[K.route.id]!==void 0:!0;if(N){let K=L.findIndex(oe=>N[oe.route.id]!==void 0);W=L.slice(0,K+1).every(F)}else W=L.every(F)}else W=t.hydrationData!=null;else if(W=!1,L=[],d.v7_partialHydration){let P=gt(null,o,t.history.location.pathname);P.active&&P.matches&&(L=P.matches)}let b,g={historyAction:t.history.action,location:t.history.location,matches:L,initialized:W,navigation:pf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||U,fetchers:new Map,blockers:new Map},w=vt.Pop,S=!1,R,x=!1,C=new Map,ue=null,je=!1,He=!1,ct=[],ee=new Set,te=new Map,de=0,M=-1,B=new Map,X=new Set,le=new Map,Be=new Map,V=new Set,G=new Map,se=new Map,fe=new Map,rt=!1;function Vt(){if(p=t.history.listen(P=>{let{action:N,location:F,delta:K}=P;if(rt){rt=!1;return}fs(se.size===0||K!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let oe=Cs({currentLocation:g.location,nextLocation:F,historyAction:N});if(oe&&K!=null){rt=!0,t.history.go(K*-1),Qn(oe,{state:"blocked",location:F,proceed(){Qn(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),t.history.go(K)},reset(){let he=new Map(g.blockers);he.set(oe,aa),q({blockers:he})}});return}return It(N,F)}),n){NC(e,C);let P=()=>DC(e,C);e.addEventListener("pagehide",P),ue=()=>e.removeEventListener("pagehide",P)}return g.initialized||It(vt.Pop,g.location,{initialHydration:!0}),b}function Di(){p&&p(),ue&&ue(),v.clear(),R&&R.abort(),g.fetchers.forEach((P,N)=>Mi(N)),g.blockers.forEach((P,N)=>qo(N))}function D(P){return v.add(P),()=>v.delete(P)}function q(P,N){N===void 0&&(N={}),g=it({},g,P);let F=[],K=[];d.v7_fetcherPersist&&g.fetchers.forEach((oe,he)=>{oe.state==="idle"&&(V.has(he)?K.push(he):F.push(he))}),[...v].forEach(oe=>oe(g,{deletedFetchers:K,unstable_viewTransitionOpts:N.viewTransitionOpts,unstable_flushSync:N.flushSync===!0})),d.v7_fetcherPersist&&(F.forEach(oe=>g.fetchers.delete(oe)),K.forEach(oe=>Mi(oe)))}function Q(P,N,F){var K,oe;let{flushSync:he}=F===void 0?{}:F,ve=g.actionData!=null&&g.navigation.formMethod!=null&&jn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((K=P.state)==null?void 0:K._isRedirect)!==!0,ne;N.actionData?Object.keys(N.actionData).length>0?ne=N.actionData:ne=null:ve?ne=g.actionData:ne=null;let _e=N.loaderData?lv(g.loaderData,N.loaderData,N.matches||[],N.errors):g.loaderData,me=g.blockers;me.size>0&&(me=new Map(me),me.forEach((Ne,Fe)=>me.set(Fe,aa)));let Te=S===!0||g.navigation.formMethod!=null&&jn(g.navigation.formMethod)&&((oe=P.state)==null?void 0:oe._isRedirect)!==!0;a&&(o=a,a=void 0),je||w===vt.Pop||(w===vt.Push?t.history.push(P,P.state):w===vt.Replace&&t.history.replace(P,P.state));let Me;if(w===vt.Pop){let Ne=C.get(g.location.pathname);Ne&&Ne.has(P.pathname)?Me={currentLocation:g.location,nextLocation:P}:C.has(P.pathname)&&(Me={currentLocation:P,nextLocation:g.location})}else if(x){let Ne=C.get(g.location.pathname);Ne?Ne.add(P.pathname):(Ne=new Set([P.pathname]),C.set(g.location.pathname,Ne)),Me={currentLocation:g.location,nextLocation:P}}q(it({},N,{actionData:ne,loaderData:_e,historyAction:w,location:P,initialized:!0,navigation:pf,revalidation:"idle",restoreScrollPosition:$o(P,N.matches||g.matches),preventScrollReset:Te,blockers:me}),{viewTransitionOpts:Me,flushSync:he===!0}),w=vt.Pop,S=!1,x=!1,je=!1,He=!1,ct=[]}async function ie(P,N){if(typeof P=="number"){t.history.go(P);return}let F=Ah(g.location,g.matches,c,d.v7_prependBasename,P,d.v7_relativeSplatPath,N==null?void 0:N.fromRouteId,N==null?void 0:N.relative),{path:K,submission:oe,error:he}=tv(d.v7_normalizeFormMethod,!1,F,N),ve=g.location,ne=el(g.location,K,N&&N.state);ne=it({},ne,t.history.encodeLocation(ne));let _e=N&&N.replace!=null?N.replace:void 0,me=vt.Push;_e===!0?me=vt.Replace:_e===!1||oe!=null&&jn(oe.formMethod)&&oe.formAction===g.location.pathname+g.location.search&&(me=vt.Replace);let Te=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,Me=(N&&N.unstable_flushSync)===!0,Ne=Cs({currentLocation:ve,nextLocation:ne,historyAction:me});if(Ne){Qn(Ne,{state:"blocked",location:ne,proceed(){Qn(Ne,{state:"proceeding",proceed:void 0,reset:void 0,location:ne}),ie(P,N)},reset(){let Fe=new Map(g.blockers);Fe.set(Ne,aa),q({blockers:Fe})}});return}return await It(me,ne,{submission:oe,pendingError:he,preventScrollReset:Te,replace:N&&N.replace,enableViewTransition:N&&N.unstable_viewTransition,flushSync:Me})}function Qe(){if(As(),q({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){It(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}It(w||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function It(P,N,F){R&&R.abort(),R=null,w=P,je=(F&&F.startUninterruptedRevalidation)===!0,Fi(g.location,g.matches),S=(F&&F.preventScrollReset)===!0,x=(F&&F.enableViewTransition)===!0;let K=a||o,oe=F&&F.overrideNavigation,he=Qi(K,N,c),ve=(F&&F.flushSync)===!0,ne=gt(he,K,N.pathname);if(ne.active&&ne.matches&&(he=ne.matches),!he){let{error:De,notFoundMatches:wt,route:Ye}=Vi(N.pathname);Q(N,{matches:wt,loaderData:{},errors:{[Ye.id]:De}},{flushSync:ve});return}if(g.initialized&&!He&&IC(g.location,N)&&!(F&&F.submission&&jn(F.submission.formMethod))){Q(N,{matches:he},{flushSync:ve});return}R=new AbortController;let _e=Ds(t.history,N,R.signal,F&&F.submission),me;if(F&&F.pendingError)me=[Xs(he).route.id,{type:qe.error,error:F.pendingError}];else if(F&&F.submission&&jn(F.submission.formMethod)){let De=await fr(_e,N,F.submission,he,ne.active,{replace:F.replace,flushSync:ve});if(De.shortCircuited)return;if(De.pendingActionResult){let[wt,Ye]=De.pendingActionResult;if(dn(Ye)&&od(Ye.error)&&Ye.error.status===404){R=null,Q(N,{matches:De.matches,loaderData:{},errors:{[wt]:Ye.error}});return}}he=De.matches||he,me=De.pendingActionResult,oe=mf(N,F.submission),ve=!1,ne.active=!1,_e=Ds(t.history,_e.url,_e.signal)}let{shortCircuited:Te,matches:Me,loaderData:Ne,errors:Fe}=await Gn(_e,N,he,ne.active,oe,F&&F.submission,F&&F.fetcherSubmission,F&&F.replace,F&&F.initialHydration===!0,ve,me);Te||(R=null,Q(N,it({matches:Me||he},cv(me),{loaderData:Ne,errors:Fe})))}async function fr(P,N,F,K,oe,he){he===void 0&&(he={}),As();let ve=xC(N,F);if(q({navigation:ve},{flushSync:he.flushSync===!0}),oe){let me=await Ui(K,N.pathname,P.signal);if(me.type==="aborted")return{shortCircuited:!0};if(me.type==="error"){let{boundaryId:Te,error:Me}=En(N.pathname,me);return{matches:me.partialMatches,pendingActionResult:[Te,{type:qe.error,error:Me}]}}else if(me.matches)K=me.matches;else{let{notFoundMatches:Te,error:Me,route:Ne}=Vi(N.pathname);return{matches:Te,pendingActionResult:[Ne.id,{type:qe.error,error:Me}]}}}let ne,_e=pa(K,N);if(!_e.route.action&&!_e.route.lazy)ne={type:qe.error,error:Yt(405,{method:P.method,pathname:N.pathname,routeId:_e.route.id})};else if(ne=(await ht("action",P,[_e],K))[0],P.signal.aborted)return{shortCircuited:!0};if(es(ne)){let me;return he&&he.replace!=null?me=he.replace:me=sv(ne.response.headers.get("Location"),new URL(P.url),c)===g.location.pathname+g.location.search,await ut(P,ne,{submission:F,replace:me}),{shortCircuited:!0}}if(Zi(ne))throw Yt(400,{type:"defer-action"});if(dn(ne)){let me=Xs(K,_e.route.id);return(he&&he.replace)!==!0&&(w=vt.Push),{matches:K,pendingActionResult:[me.route.id,ne]}}return{matches:K,pendingActionResult:[_e.route.id,ne]}}async function Gn(P,N,F,K,oe,he,ve,ne,_e,me,Te){let Me=oe||mf(N,he),Ne=he||ve||pv(Me),Fe=!je&&(!d.v7_partialHydration||!_e);if(K){if(Fe){let Ke=jo(Te);q(it({navigation:Me},Ke!==void 0?{actionData:Ke}:{}),{flushSync:me})}let be=await Ui(F,N.pathname,P.signal);if(be.type==="aborted")return{shortCircuited:!0};if(be.type==="error"){let{boundaryId:Ke,error:Ft}=En(N.pathname,be);return{matches:be.partialMatches,loaderData:{},errors:{[Ke]:Ft}}}else if(be.matches)F=be.matches;else{let{error:Ke,notFoundMatches:Ft,route:$e}=Vi(N.pathname);return{matches:Ft,loaderData:{},errors:{[$e.id]:Ke}}}}let De=a||o,[wt,Ye]=nv(t.history,g,F,Ne,N,d.v7_partialHydration&&_e===!0,d.v7_skipActionErrorRevalidation,He,ct,ee,V,le,X,De,c,Te);if(ks(be=>!(F&&F.some(Ke=>Ke.route.id===be))||wt&&wt.some(Ke=>Ke.route.id===be)),M=++de,wt.length===0&&Ye.length===0){let be=Ol();return Q(N,it({matches:F,loaderData:{},errors:Te&&dn(Te[1])?{[Te[0]]:Te[1].error}:null},cv(Te),be?{fetchers:new Map(g.fetchers)}:{}),{flushSync:me}),{shortCircuited:!0}}if(Fe){let be={};if(!K){be.navigation=Me;let Ke=jo(Te);Ke!==void 0&&(be.actionData=Ke)}Ye.length>0&&(be.fetchers=Nd(Ye)),q(be,{flushSync:me})}Ye.forEach(be=>{te.has(be.key)&&wn(be.key),be.controller&&te.set(be.key,be.controller)});let Hr=()=>Ye.forEach(be=>wn(be.key));R&&R.signal.addEventListener("abort",Hr);let{loaderResults:Sn,fetcherResults:Tn}=await Oi(g.matches,F,wt,Ye,P);if(P.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",Hr),Ye.forEach(be=>te.delete(be.key));let tn=dv([...Sn,...Tn]);if(tn){if(tn.idx>=wt.length){let be=Ye[tn.idx-wt.length].key;X.add(be)}return await ut(P,tn.result,{replace:ne}),{shortCircuited:!0}}let{loaderData:Yn,errors:bn}=av(g,F,wt,Sn,Te,Ye,Tn,G);G.forEach((be,Ke)=>{be.subscribe(Ft=>{(Ft||be.done)&&G.delete(Ke)})}),d.v7_partialHydration&&_e&&g.errors&&Object.entries(g.errors).filter(be=>{let[Ke]=be;return!wt.some(Ft=>Ft.route.id===Ke)}).forEach(be=>{let[Ke,Ft]=be;bn=Object.assign(bn||{},{[Ke]:Ft})});let zi=Ol(),Bi=Is(M),qi=zi||Bi||Ye.length>0;return it({matches:F,loaderData:Yn,errors:bn},qi?{fetchers:new Map(g.fetchers)}:{})}function jo(P){if(P&&!dn(P[1]))return{[P[0]]:P[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function Nd(P){return P.forEach(N=>{let F=g.fetchers.get(N.key),K=la(void 0,F?F.data:void 0);g.fetchers.set(N.key,K)}),new Map(g.fetchers)}function zo(P,N,F,K){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");te.has(P)&&wn(P);let oe=(K&&K.unstable_flushSync)===!0,he=a||o,ve=Ah(g.location,g.matches,c,d.v7_prependBasename,F,d.v7_relativeSplatPath,N,K==null?void 0:K.relative),ne=Qi(he,ve,c),_e=gt(ne,he,ve);if(_e.active&&_e.matches&&(ne=_e.matches),!ne){Dn(P,N,Yt(404,{pathname:ve}),{flushSync:oe});return}let{path:me,submission:Te,error:Me}=tv(d.v7_normalizeFormMethod,!0,ve,K);if(Me){Dn(P,N,Me,{flushSync:oe});return}let Ne=pa(ne,me);if(S=(K&&K.preventScrollReset)===!0,Te&&jn(Te.formMethod)){Bo(P,N,me,Ne,ne,_e.active,oe,Te);return}le.set(P,{routeId:N,path:me}),Ll(P,N,me,Ne,ne,_e.active,oe,Te)}async function Bo(P,N,F,K,oe,he,ve,ne){As(),le.delete(P);function _e($e){if(!$e.route.action&&!$e.route.lazy){let On=Yt(405,{method:ne.formMethod,pathname:F,routeId:N});return Dn(P,N,On,{flushSync:ve}),!0}return!1}if(!he&&_e(K))return;let me=g.fetchers.get(P);Nn(P,LC(ne,me),{flushSync:ve});let Te=new AbortController,Me=Ds(t.history,F,Te.signal,ne);if(he){let $e=await Ui(oe,F,Me.signal);if($e.type==="aborted")return;if($e.type==="error"){let{error:On}=En(F,$e);Dn(P,N,On,{flushSync:ve});return}else if($e.matches){if(oe=$e.matches,K=pa(oe,F),_e(K))return}else{Dn(P,N,Yt(404,{pathname:F}),{flushSync:ve});return}}te.set(P,Te);let Ne=de,De=(await ht("action",Me,[K],oe))[0];if(Me.signal.aborted){te.get(P)===Te&&te.delete(P);return}if(d.v7_fetcherPersist&&V.has(P)){if(es(De)||dn(De)){Nn(P,Yr(void 0));return}}else{if(es(De))if(te.delete(P),M>Ne){Nn(P,Yr(void 0));return}else return X.add(P),Nn(P,la(ne)),ut(Me,De,{fetcherSubmission:ne});if(dn(De)){Dn(P,N,De.error);return}}if(Zi(De))throw Yt(400,{type:"defer-action"});let wt=g.navigation.location||g.location,Ye=Ds(t.history,wt,Te.signal),Hr=a||o,Sn=g.navigation.state!=="idle"?Qi(Hr,g.navigation.location,c):g.matches;Ce(Sn,"Didn't find any matches after fetcher action");let Tn=++de;B.set(P,Tn);let tn=la(ne,De.data);g.fetchers.set(P,tn);let[Yn,bn]=nv(t.history,g,Sn,ne,wt,!1,d.v7_skipActionErrorRevalidation,He,ct,ee,V,le,X,Hr,c,[K.route.id,De]);bn.filter($e=>$e.key!==P).forEach($e=>{let On=$e.key,Vl=g.fetchers.get(On),Fl=la(void 0,Vl?Vl.data:void 0);g.fetchers.set(On,Fl),te.has(On)&&wn(On),$e.controller&&te.set(On,$e.controller)}),q({fetchers:new Map(g.fetchers)});let zi=()=>bn.forEach($e=>wn($e.key));Te.signal.addEventListener("abort",zi);let{loaderResults:Bi,fetcherResults:qi}=await Oi(g.matches,Sn,Yn,bn,Ye);if(Te.signal.aborted)return;Te.signal.removeEventListener("abort",zi),B.delete(P),te.delete(P),bn.forEach($e=>te.delete($e.key));let be=dv([...Bi,...qi]);if(be){if(be.idx>=Yn.length){let $e=bn[be.idx-Yn.length].key;X.add($e)}return ut(Ye,be.result)}let{loaderData:Ke,errors:Ft}=av(g,g.matches,Yn,Bi,void 0,bn,qi,G);if(g.fetchers.has(P)){let $e=Yr(De.data);g.fetchers.set(P,$e)}Is(Tn),g.navigation.state==="loading"&&Tn>M?(Ce(w,"Expected pending action"),R&&R.abort(),Q(g.navigation.location,{matches:Sn,loaderData:Ke,errors:Ft,fetchers:new Map(g.fetchers)})):(q({errors:Ft,loaderData:lv(g.loaderData,Ke,Sn,Ft),fetchers:new Map(g.fetchers)}),He=!1)}async function Ll(P,N,F,K,oe,he,ve,ne){let _e=g.fetchers.get(P);Nn(P,la(ne,_e?_e.data:void 0),{flushSync:ve});let me=new AbortController,Te=Ds(t.history,F,me.signal);if(he){let De=await Ui(oe,F,Te.signal);if(De.type==="aborted")return;if(De.type==="error"){let{error:wt}=En(F,De);Dn(P,N,wt,{flushSync:ve});return}else if(De.matches)oe=De.matches,K=pa(oe,F);else{Dn(P,N,Yt(404,{pathname:F}),{flushSync:ve});return}}te.set(P,me);let Me=de,Fe=(await ht("loader",Te,[K],oe))[0];if(Zi(Fe)&&(Fe=await VE(Fe,Te.signal,!0)||Fe),te.get(P)===me&&te.delete(P),!Te.signal.aborted){if(V.has(P)){Nn(P,Yr(void 0));return}if(es(Fe))if(M>Me){Nn(P,Yr(void 0));return}else{X.add(P),await ut(Te,Fe);return}if(dn(Fe)){Dn(P,N,Fe.error);return}Ce(!Zi(Fe),"Unhandled fetcher deferred data"),Nn(P,Yr(Fe.data))}}async function ut(P,N,F){let{submission:K,fetcherSubmission:oe,replace:he}=F===void 0?{}:F;N.response.headers.has("X-Remix-Revalidate")&&(He=!0);let ve=N.response.headers.get("Location");Ce(ve,"Expected a Location header on the redirect Response"),ve=sv(ve,new URL(P.url),c);let ne=el(g.location,ve,{_isRedirect:!0});if(n){let Fe=!1;if(N.response.headers.has("X-Remix-Reload-Document"))Fe=!0;else if(hm.test(ve)){const De=t.history.createURL(ve);Fe=De.origin!==e.location.origin||_l(De.pathname,c)==null}if(Fe){he?e.location.replace(ve):e.location.assign(ve);return}}R=null;let _e=he===!0||N.response.headers.has("X-Remix-Replace")?vt.Replace:vt.Push,{formMethod:me,formAction:Te,formEncType:Me}=g.navigation;!K&&!oe&&me&&Te&&Me&&(K=pv(g.navigation));let Ne=K||oe;if(fC.has(N.response.status)&&Ne&&jn(Ne.formMethod))await It(_e,ne,{submission:it({},Ne,{formAction:ve}),preventScrollReset:S});else{let Fe=mf(ne,K);await It(_e,ne,{overrideNavigation:Fe,fetcherSubmission:oe,preventScrollReset:S})}}async function ht(P,N,F,K){try{let oe=await EC(u,P,N,F,K,s,i);return await Promise.all(oe.map((he,ve)=>{if(kC(he)){let ne=he.result;return{type:qe.redirect,response:bC(ne,N,F[ve].route.id,K,c,d.v7_relativeSplatPath)}}return TC(he)}))}catch(oe){return F.map(()=>({type:qe.error,error:oe}))}}async function Oi(P,N,F,K,oe){let[he,...ve]=await Promise.all([F.length?ht("loader",oe,F,N):[],...K.map(ne=>{if(ne.matches&&ne.match&&ne.controller){let _e=Ds(t.history,ne.path,ne.controller.signal);return ht("loader",_e,[ne.match],ne.matches).then(me=>me[0])}else return Promise.resolve({type:qe.error,error:Yt(404,{pathname:ne.path})})})]);return await Promise.all([hv(P,F,he,he.map(()=>oe.signal),!1,g.loaderData),hv(P,K.map(ne=>ne.match),ve,K.map(ne=>ne.controller?ne.controller.signal:null),!0)]),{loaderResults:he,fetcherResults:ve}}function As(){He=!0,ct.push(...ks()),le.forEach((P,N)=>{te.has(N)&&(ee.add(N),wn(N))})}function Nn(P,N,F){F===void 0&&(F={}),g.fetchers.set(P,N),q({fetchers:new Map(g.fetchers)},{flushSync:(F&&F.flushSync)===!0})}function Dn(P,N,F,K){K===void 0&&(K={});let oe=Xs(g.matches,N);Mi(P),q({errors:{[oe.route.id]:F},fetchers:new Map(g.fetchers)},{flushSync:(K&&K.flushSync)===!0})}function Br(P){return d.v7_fetcherPersist&&(Be.set(P,(Be.get(P)||0)+1),V.has(P)&&V.delete(P)),g.fetchers.get(P)||hC}function Mi(P){let N=g.fetchers.get(P);te.has(P)&&!(N&&N.state==="loading"&&B.has(P))&&wn(P),le.delete(P),B.delete(P),X.delete(P),V.delete(P),ee.delete(P),g.fetchers.delete(P)}function Nl(P){if(d.v7_fetcherPersist){let N=(Be.get(P)||0)-1;N<=0?(Be.delete(P),V.add(P)):Be.set(P,N)}else Mi(P);q({fetchers:new Map(g.fetchers)})}function wn(P){let N=te.get(P);Ce(N,"Expected fetch controller: "+P),N.abort(),te.delete(P)}function Dl(P){for(let N of P){let F=Br(N),K=Yr(F.data);g.fetchers.set(N,K)}}function Ol(){let P=[],N=!1;for(let F of X){let K=g.fetchers.get(F);Ce(K,"Expected fetcher: "+F),K.state==="loading"&&(X.delete(F),P.push(F),N=!0)}return Dl(P),N}function Is(P){let N=[];for(let[F,K]of B)if(K<P){let oe=g.fetchers.get(F);Ce(oe,"Expected fetcher: "+F),oe.state==="loading"&&(wn(F),B.delete(F),N.push(F))}return Dl(N),N.length>0}function Ml(P,N){let F=g.blockers.get(P)||aa;return se.get(P)!==N&&se.set(P,N),F}function qo(P){g.blockers.delete(P),se.delete(P)}function Qn(P,N){let F=g.blockers.get(P)||aa;Ce(F.state==="unblocked"&&N.state==="blocked"||F.state==="blocked"&&N.state==="blocked"||F.state==="blocked"&&N.state==="proceeding"||F.state==="blocked"&&N.state==="unblocked"||F.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+F.state+" -> "+N.state);let K=new Map(g.blockers);K.set(P,N),q({blockers:K})}function Cs(P){let{currentLocation:N,nextLocation:F,historyAction:K}=P;if(se.size===0)return;se.size>1&&fs(!1,"A router only supports one blocker at a time");let oe=Array.from(se.entries()),[he,ve]=oe[oe.length-1],ne=g.blockers.get(he);if(!(ne&&ne.state==="proceeding")&&ve({currentLocation:N,nextLocation:F,historyAction:K}))return he}function Vi(P){let N=Yt(404,{pathname:P}),F=a||o,{matches:K,route:oe}=uv(F);return ks(),{notFoundMatches:K,route:oe,error:N}}function En(P,N){return{boundaryId:Xs(N.partialMatches).route.id,error:Yt(400,{type:"route-discovery",pathname:P,message:N.error!=null&&"message"in N.error?N.error:String(N.error)})}}function ks(P){let N=[];return G.forEach((F,K)=>{(!P||P(K))&&(F.cancel(),N.push(K),G.delete(K))}),N}function Rs(P,N,F){if(k=P,y=N,T=F||null,!A&&g.navigation===pf){A=!0;let K=$o(g.location,g.matches);K!=null&&q({restoreScrollPosition:K})}return()=>{k=null,y=null,T=null}}function Ho(P,N){return T&&T(P,N.map(K=>HI(K,g.loaderData)))||P.key}function Fi(P,N){if(k&&y){let F=Ho(P,N);k[F]=y()}}function $o(P,N){if(k){let F=Ho(P,N),K=k[F];if(typeof K=="number")return K}return null}function gt(P,N,F){if(h){if(I.has(F))return{active:!1,matches:P};if(P){if(Object.keys(P[0].params).length>0)return{active:!0,matches:Dc(N,F,c,!0)}}else return{active:!0,matches:Dc(N,F,c,!0)||[]}}return{active:!1,matches:null}}async function Ui(P,N,F){let K=P;for(;;){let oe=a==null,he=a||o;try{await _C(h,N,K,he,s,i,fe,F)}catch(_e){return{type:"error",error:_e,partialMatches:K}}finally{oe&&(o=[...o])}if(F.aborted)return{type:"aborted"};let ve=Qi(he,N,c);if(ve)return qr(N,I),{type:"success",matches:ve};let ne=Dc(he,N,c,!0);if(!ne||K.length===ne.length&&K.every((_e,me)=>_e.route.id===ne[me].route.id))return qr(N,I),{type:"success",matches:null};K=ne}}function qr(P,N){if(N.size>=E){let F=N.values().next().value;N.delete(F)}N.add(P)}function ji(P){s={},a=tl(P,i,void 0,s)}function Dd(P,N){let F=a==null;DE(P,N,a||o,s,i),F&&(o=[...o],q({}))}return b={get basename(){return c},get future(){return d},get state(){return g},get routes(){return o},get window(){return e},initialize:Vt,subscribe:D,enableScrollRestoration:Rs,navigate:ie,fetch:zo,revalidate:Qe,createHref:P=>t.history.createHref(P),encodeLocation:P=>t.history.encodeLocation(P),getFetcher:Br,deleteFetcher:Nl,dispose:Di,getBlocker:Ml,deleteBlocker:qo,patchRoutes:Dd,_internalFetchControllers:te,_internalActiveDeferreds:G,_internalSetRoutes:ji},b}function gC(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Ah(t,e,n,r,i,s,o,a){let c,u;if(o){c=[];for(let d of e)if(c.push(d),d.route.id===o){u=d;break}}else c=e,u=e[e.length-1];let h=PE(i||".",RE(c,s),_l(t.pathname,n)||t.pathname,a==="path");return i==null&&(h.search=t.search,h.hash=t.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!pm(h.search)&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(h.pathname=h.pathname==="/"?n:mi([n,h.pathname])),vl(h)}function tv(t,e,n,r){if(!r||!gC(r))return{path:n};if(r.formMethod&&!PC(r.formMethod))return{path:n,error:Yt(405,{method:r.formMethod})};let i=()=>({path:n,error:Yt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=OE(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!jn(o))return i();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,E)=>{let[I,k]=E;return""+v+I+"="+k+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!jn(o))return i();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}Ce(typeof FormData=="function","FormData is not available in this environment");let c,u;if(r.formData)c=Ih(r.formData),u=r.formData;else if(r.body instanceof FormData)c=Ih(r.body),u=r.body;else if(r.body instanceof URLSearchParams)c=r.body,u=ov(c);else if(r.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(r.body),u=ov(c)}catch{return i()}let h={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(jn(h.formMethod))return{path:n,submission:h};let d=Mr(n);return e&&d.search&&pm(d.search)&&c.append("index",""),d.search="?"+c,{path:vl(d),submission:h}}function yC(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function nv(t,e,n,r,i,s,o,a,c,u,h,d,p,v,E,I){let k=I?dn(I[1])?I[1].error:I[1].data:void 0,T=t.createURL(e.location),y=t.createURL(i),A=I&&dn(I[1])?I[0]:void 0,L=A?yC(n,A):n,U=I?I[1].statusCode:void 0,W=o&&U&&U>=400,b=L.filter((w,S)=>{let{route:R}=w;if(R.lazy)return!0;if(R.loader==null)return!1;if(s)return typeof R.loader!="function"||R.loader.hydrate?!0:e.loaderData[R.id]===void 0&&(!e.errors||e.errors[R.id]===void 0);if(vC(e.loaderData,e.matches[S],w)||c.some(ue=>ue===w.route.id))return!0;let x=e.matches[S],C=w;return rv(w,it({currentUrl:T,currentParams:x.params,nextUrl:y,nextParams:C.params},r,{actionResult:k,actionStatus:U,defaultShouldRevalidate:W?!1:a||T.pathname+T.search===y.pathname+y.search||T.search!==y.search||NE(x,C)}))}),g=[];return d.forEach((w,S)=>{if(s||!n.some(je=>je.route.id===w.routeId)||h.has(S))return;let R=Qi(v,w.path,E);if(!R){g.push({key:S,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let x=e.fetchers.get(S),C=pa(R,w.path),ue=!1;p.has(S)?ue=!1:u.has(S)?(u.delete(S),ue=!0):x&&x.state!=="idle"&&x.data===void 0?ue=a:ue=rv(C,it({currentUrl:T,currentParams:e.matches[e.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:k,actionStatus:U,defaultShouldRevalidate:W?!1:a})),ue&&g.push({key:S,routeId:w.routeId,path:w.path,matches:R,match:C,controller:new AbortController})}),[b,g]}function vC(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function NE(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function rv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function _C(t,e,n,r,i,s,o,a){let c=[e,...n.map(u=>u.route.id)].join("-");try{let u=o.get(c);u||(u=t({path:e,matches:n,patch:(h,d)=>{a.aborted||DE(h,d,r,i,s)}}),o.set(c,u)),u&&CC(u)&&await u}finally{o.delete(c)}}function DE(t,e,n,r,i){if(t){var s;let o=r[t];Ce(o,"No route found to patch children into: routeId = "+t);let a=tl(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...a):o.children=a}else{let o=tl(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function iv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Ce(i,"No route found in manifest");let s={};for(let o in r){let c=i[o]!==void 0&&o!=="hasErrorBoundary";fs(!c,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!c&&!BI.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,it({},e(i),{lazy:void 0}))}function wC(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function EC(t,e,n,r,i,s,o,a){let c=r.reduce((d,p)=>d.add(p.route.id),new Set),u=new Set,h=await t({matches:i.map(d=>{let p=c.has(d.route.id);return it({},d,{shouldLoad:p,resolve:E=>(u.add(d.route.id),p?SC(e,n,d,s,o,E,a):Promise.resolve({type:qe.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(d=>Ce(u.has(d.route.id),'`match.resolve()` was not called for route id "'+d.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),h.filter((d,p)=>c.has(i[p].route.id))}async function SC(t,e,n,r,i,s,o){let a,c,u=h=>{let d,p=new Promise((I,k)=>d=k);c=()=>d(),e.signal.addEventListener("abort",c);let v=I=>typeof h!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):h({request:e,params:n.params,context:o},...I!==void 0?[I]:[]),E;return s?E=s(I=>v(I)):E=(async()=>{try{return{type:"data",result:await v()}}catch(I){return{type:"error",result:I}}})(),Promise.race([E,p])};try{let h=n.route[t];if(n.route.lazy)if(h){let d,[p]=await Promise.all([u(h).catch(v=>{d=v}),iv(n.route,i,r)]);if(d!==void 0)throw d;a=p}else if(await iv(n.route,i,r),h=n.route[t],h)a=await u(h);else if(t==="action"){let d=new URL(e.url),p=d.pathname+d.search;throw Yt(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:qe.data,result:void 0};else if(h)a=await u(h);else{let d=new URL(e.url),p=d.pathname+d.search;throw Yt(404,{pathname:p})}Ce(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(h){return{type:qe.error,result:h}}finally{c&&e.signal.removeEventListener("abort",c)}return a}async function TC(t){let{result:e,type:n}=t;if(ME(e)){let u;try{let h=e.headers.get("Content-Type");h&&/\bapplication\/json\b/.test(h)?e.body==null?u=null:u=await e.json():u=await e.text()}catch(h){return{type:qe.error,error:h}}return n===qe.error?{type:qe.error,error:new vu(e.status,e.statusText,u),statusCode:e.status,headers:e.headers}:{type:qe.data,data:u,statusCode:e.status,headers:e.headers}}if(n===qe.error){if(fv(e)){var r;if(e.data instanceof Error){var i;return{type:qe.error,error:e.data,statusCode:(i=e.init)==null?void 0:i.status}}e=new vu(((r=e.init)==null?void 0:r.status)||500,void 0,e.data)}return{type:qe.error,error:e,statusCode:od(e)?e.status:void 0}}if(RC(e)){var s,o;return{type:qe.deferred,deferredData:e,statusCode:(s=e.init)==null?void 0:s.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}if(fv(e)){var a,c;return{type:qe.data,data:e.data,statusCode:(a=e.init)==null?void 0:a.status,headers:(c=e.init)!=null&&c.headers?new Headers(e.init.headers):void 0}}return{type:qe.data,data:e}}function bC(t,e,n,r,i,s){let o=t.headers.get("Location");if(Ce(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!hm.test(o)){let a=r.slice(0,r.findIndex(c=>c.route.id===n)+1);o=Ah(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function sv(t,e,n){if(hm.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=_l(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Ds(t,e,n,r){let i=t.createURL(OE(e)).toString(),s={signal:n};if(r&&jn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Ih(r.formData):s.body=r.formData}return new Request(i,s)}function Ih(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function ov(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function AC(t,e,n,r,i,s){let o={},a=null,c,u=!1,h={},d=r&&dn(r[1])?r[1].error:void 0;return n.forEach((p,v)=>{let E=e[v].route.id;if(Ce(!es(p),"Cannot handle redirect results in processLoaderData"),dn(p)){let I=p.error;d!==void 0&&(I=d,d=void 0),a=a||{};{let k=Xs(t,E);a[k.route.id]==null&&(a[k.route.id]=I)}o[E]=void 0,u||(u=!0,c=od(p.error)?p.error.status:500),p.headers&&(h[E]=p.headers)}else Zi(p)?(i.set(E,p.deferredData),o[E]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!u&&(c=p.statusCode),p.headers&&(h[E]=p.headers)):(o[E]=p.data,p.statusCode&&p.statusCode!==200&&!u&&(c=p.statusCode),p.headers&&(h[E]=p.headers))}),d!==void 0&&r&&(a={[r[0]]:d},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:c||200,loaderHeaders:h}}function av(t,e,n,r,i,s,o,a){let{loaderData:c,errors:u}=AC(e,n,r,i,a);for(let h=0;h<s.length;h++){let{key:d,match:p,controller:v}=s[h];Ce(o!==void 0&&o[h]!==void 0,"Did not find corresponding fetcher result");let E=o[h];if(!(v&&v.signal.aborted))if(dn(E)){let I=Xs(t.matches,p==null?void 0:p.route.id);u&&u[I.route.id]||(u=it({},u,{[I.route.id]:E.error})),t.fetchers.delete(d)}else if(es(E))Ce(!1,"Unhandled fetcher revalidation redirect");else if(Zi(E))Ce(!1,"Unhandled fetcher deferred data");else{let I=Yr(E.data);t.fetchers.set(d,I)}}return{loaderData:c,errors:u}}function lv(t,e,n,r){let i=it({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function cv(t){return t?dn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Xs(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function uv(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Yt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,a="Unknown Server Error",c="Unknown @remix-run/router error";return t===400?(a="Bad Request",s==="route-discovery"?c='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+o):i&&n&&r?c="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?c="defer() is not supported in actions":s==="invalid-body"&&(c="Unable to encode submission body")):t===403?(a="Forbidden",c='Route "'+r+'" does not match URL "'+n+'"'):t===404?(a="Not Found",c='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",i&&n&&r?c="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(c='Invalid request method "'+i.toUpperCase()+'"')),new vu(t||500,a,new Error(c),!0)}function dv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(es(n))return{result:n,idx:e}}}function OE(t){let e=typeof t=="string"?Mr(t):t;return vl(it({},e,{hash:""}))}function IC(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function CC(t){return typeof t=="object"&&t!=null&&"then"in t}function kC(t){return ME(t.result)&&dC.has(t.result.status)}function Zi(t){return t.type===qe.deferred}function dn(t){return t.type===qe.error}function es(t){return(t&&t.type)===qe.redirect}function fv(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function RC(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function ME(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function PC(t){return uC.has(t.toLowerCase())}function jn(t){return lC.has(t.toLowerCase())}async function hv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],c=e[o];if(!c)continue;let u=t.find(d=>d.route.id===c.route.id),h=u!=null&&!NE(u,c)&&(s&&s[c.route.id])!==void 0;if(Zi(a)&&(i||h)){let d=r[o];Ce(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await VE(a,d,i).then(p=>{p&&(n[o]=p||n[o])})}}}async function VE(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:qe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:qe.error,error:i}}return{type:qe.data,data:t.deferredData.data}}}function pm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function pa(t,e){let n=typeof e=="string"?Mr(e).search:e.search;if(t[t.length-1].route.index&&pm(n||""))return t[t.length-1];let r=kE(t);return r[r.length-1]}function pv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function mf(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function xC(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function la(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function LC(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Yr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function NC(t,e){try{let n=t.sessionStorage.getItem(LE);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function DC(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(LE,JSON.stringify(n))}catch(r){fs(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _u(){return _u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_u.apply(this,arguments)}const ad=H.createContext(null),FE=H.createContext(null),ld=H.createContext(null),mm=H.createContext(null),Lo=H.createContext({outlet:null,matches:[],isDataRoute:!1}),UE=H.createContext(null);function cd(){return H.useContext(mm)!=null}function jE(){return cd()||Ce(!1),H.useContext(mm).location}function zE(t){H.useContext(ld).static||H.useLayoutEffect(t)}function BE(){let{isDataRoute:t}=H.useContext(Lo);return t?WC():OC()}function OC(){cd()||Ce(!1);let t=H.useContext(ad),{basename:e,future:n,navigator:r}=H.useContext(ld),{matches:i}=H.useContext(Lo),{pathname:s}=jE(),o=JSON.stringify(RE(i,n.v7_relativeSplatPath)),a=H.useRef(!1);return zE(()=>{a.current=!0}),H.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=PE(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:mi([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}function MC(t,e,n,r){cd()||Ce(!1);let{navigator:i}=H.useContext(ld),{matches:s}=H.useContext(Lo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=jE(),h;h=u;let d=h.pathname||"/",p=d;if(c!=="/"){let I=c.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(I.length).join("/")}let v=Qi(t,{pathname:p});return zC(v&&v.map(I=>Object.assign({},I,{params:Object.assign({},a,I.params),pathname:mi([c,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?c:mi([c,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r)}function VC(){let t=$C(),e=od(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),n?H.createElement("pre",{style:i},n):null,null)}const FC=H.createElement(VC,null);class UC extends H.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?H.createElement(Lo.Provider,{value:this.props.routeContext},H.createElement(UE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jC(t){let{routeContext:e,match:n,children:r}=t,i=H.useContext(ad);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),H.createElement(Lo.Provider,{value:e},r)}function zC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||Ce(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:p,errors:v}=n,E=d.route.loader&&p[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||E){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,d,p)=>{let v,E=!1,I=null,k=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,I=d.route.errorElement||FC,c&&(u<0&&p===0?(KC("route-fallback"),E=!0,k=null):u===p&&(E=!0,k=d.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,p+1)),y=()=>{let A;return v?A=I:E?A=k:d.route.Component?A=H.createElement(d.route.Component,null):d.route.element?A=d.route.element:A=h,H.createElement(jC,{match:d,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:A})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?H.createElement(UC,{location:n.location,revalidation:n.revalidation,component:I,error:v,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}var qE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(qE||{}),wu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(wu||{});function BC(t){let e=H.useContext(ad);return e||Ce(!1),e}function qC(t){let e=H.useContext(FE);return e||Ce(!1),e}function HC(t){let e=H.useContext(Lo);return e||Ce(!1),e}function HE(t){let e=HC(),n=e.matches[e.matches.length-1];return n.route.id||Ce(!1),n.route.id}function $C(){var t;let e=H.useContext(UE),n=qC(wu.UseRouteError),r=HE(wu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function WC(){let{router:t}=BC(qE.UseNavigateStable),e=HE(wu.UseNavigateStable),n=H.useRef(!1);return zE(()=>{n.current=!0}),H.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,_u({fromRouteId:e},s)))},[t,e])}const mv={};function KC(t,e,n){mv[t]||(mv[t]=!0)}function GC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=vt.Pop,navigator:s,static:o=!1,future:a}=t;cd()&&Ce(!1);let c=e.replace(/^\/*/,"/"),u=H.useMemo(()=>({basename:c,navigator:s,static:o,future:_u({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof r=="string"&&(r=Mr(r));let{pathname:h="/",search:d="",hash:p="",state:v=null,key:E="default"}=r,I=H.useMemo(()=>{let k=_l(h,c);return k==null?null:{location:{pathname:k,search:d,hash:p,state:v,key:E},navigationType:i}},[c,h,d,p,v,E,i]);return I==null?null:H.createElement(ld.Provider,{value:u},H.createElement(mm.Provider,{children:n,value:I}))}new Promise(()=>{});function QC(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:H.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:H.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:H.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eu(){return Eu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Eu.apply(this,arguments)}const YC="6";try{window.__reactRouterVersion=YC}catch{}function XC(t,e){return mC({basename:void 0,future:Eu({},void 0,{v7_prependBasename:!0}),history:UI({window:void 0}),hydrationData:JC(),routes:t,mapRouteProperties:QC,unstable_dataStrategy:void 0,unstable_patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function JC(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Eu({},e,{errors:ZC(e.errors)})),e}function ZC(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new vu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const ek=H.createContext({isTransitioning:!1}),tk=H.createContext(new Map),nk="startTransition",gv=Ib[nk],rk="flushSync",yv=FI[rk];function ik(t){gv?gv(t):t()}function ca(t){yv?yv(t):t()}let sk=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function ok(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=H.useState(n.state),[o,a]=H.useState(),[c,u]=H.useState({isTransitioning:!1}),[h,d]=H.useState(),[p,v]=H.useState(),[E,I]=H.useState(),k=H.useRef(new Map),{v7_startTransition:T}=r||{},y=H.useCallback(g=>{T?ik(g):g()},[T]),A=H.useCallback((g,w)=>{let{deletedFetchers:S,unstable_flushSync:R,unstable_viewTransitionOpts:x}=w;S.forEach(ue=>k.current.delete(ue)),g.fetchers.forEach((ue,je)=>{ue.data!==void 0&&k.current.set(je,ue.data)});let C=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!x||C){R?ca(()=>s(g)):y(()=>s(g));return}if(R){ca(()=>{p&&(h&&h.resolve(),p.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:x.currentLocation,nextLocation:x.nextLocation})});let ue=n.window.document.startViewTransition(()=>{ca(()=>s(g))});ue.finished.finally(()=>{ca(()=>{d(void 0),v(void 0),a(void 0),u({isTransitioning:!1})})}),ca(()=>v(ue));return}p?(h&&h.resolve(),p.skipTransition(),I({state:g,currentLocation:x.currentLocation,nextLocation:x.nextLocation})):(a(g),u({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}))},[n.window,p,h,k,y]);H.useLayoutEffect(()=>n.subscribe(A),[n,A]),H.useEffect(()=>{c.isTransitioning&&!c.flushSync&&d(new sk)},[c]),H.useEffect(()=>{if(h&&o&&n.window){let g=o,w=h.promise,S=n.window.document.startViewTransition(async()=>{y(()=>s(g)),await w});S.finished.finally(()=>{d(void 0),v(void 0),a(void 0),u({isTransitioning:!1})}),v(S)}},[y,o,h,n.window]),H.useEffect(()=>{h&&o&&i.location.key===o.location.key&&h.resolve()},[h,p,i.location,o]),H.useEffect(()=>{!c.isTransitioning&&E&&(a(E.state),u({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),I(void 0))},[c.isTransitioning,E]),H.useEffect(()=>{},[]);let L=H.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,w,S)=>n.navigate(g,{state:w,preventScrollReset:S==null?void 0:S.preventScrollReset}),replace:(g,w,S)=>n.navigate(g,{replace:!0,state:w,preventScrollReset:S==null?void 0:S.preventScrollReset})}),[n]),U=n.basename||"/",W=H.useMemo(()=>({router:n,navigator:L,static:!1,basename:U}),[n,L,U]),b=H.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return H.createElement(H.Fragment,null,H.createElement(ad.Provider,{value:W},H.createElement(FE.Provider,{value:i},H.createElement(tk.Provider,{value:k.current},H.createElement(ek.Provider,{value:c},H.createElement(GC,{basename:U,location:i.location,navigationType:i.historyAction,navigator:L,future:b},i.initialized||n.future.v7_partialHydration?H.createElement(ak,{routes:n.routes,future:n.future,state:i}):e))))),null)}const ak=H.memo(lk);function lk(t){let{routes:e,future:n,state:r}=t;return MC(e,void 0,r,n)}var vv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(vv||(vv={}));var _v;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_v||(_v={}));const $E=H.createContext(),ck=({children:t})=>{const[e,n]=H.useState(!1),r=()=>{n(i=>!i)};return j.jsx($E.Provider,{value:{isFullScreen:e,toggleFullScreen:r},children:t})},gm=()=>H.useContext($E),Ch=({type:t,placeholder:e,icon:n,value:r,onChange:i,id:s})=>j.jsxs("div",{className:"input-form",children:[j.jsx("span",{children:j.jsx("i",{className:n})}),j.jsx("input",{type:t,placeholder:e,value:r,onChange:i,id:s,required:!0,autoComplete:"off",minLength:t==="password"?6:void 0})]}),wv=({onSubmit:t,error:e,email:n,setEmail:r,password:i,setPassword:s})=>{const o=()=>{!n||!i?setError("Please fill in all fields"):t()};return j.jsxs("div",{className:"form",children:[j.jsxs("form",{children:[j.jsx(Ch,{type:"text",placeholder:"Email",value:n,onChange:a=>r(a.target.value),icon:"fas fa-envelope"}),j.jsx(Ch,{type:"password",placeholder:"Password",value:i,onChange:a=>s(a.target.value),icon:"fa-solid fa-lock"})]}),e&&j.jsx("div",{className:"error",children:e}),j.jsx("div",{id:"goBtn",onClick:o,children:"Go"})]})},uk=(t,e)=>{localStorage.setItem("userName",t),localStorage.setItem("userID",e)},WE=()=>({name:localStorage.getItem("userName"),uid:localStorage.getItem("userID")});var Ev={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},GE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),r.push(n[h],n[d],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(KE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new fk;const p=s<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const E=u<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hk=function(t){const e=KE(t);return GE.encodeByteArray(e,!0)},Su=function(t){return hk(t).replace(/\./g,"")},QE=function(t){try{return GE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=()=>pk().__FIREBASE_DEFAULTS__,gk=()=>{if(typeof process>"u"||typeof Ev>"u")return;const t=Ev.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&QE(t[1]);return e&&JSON.parse(e)},ud=()=>{try{return mk()||gk()||yk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},YE=t=>{var e,n;return(n=(e=ud())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vk=t=>{const e=YE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},XE=()=>{var t;return(t=ud())===null||t===void 0?void 0:t.config},JE=t=>{var e;return(e=ud())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Su(JSON.stringify(n)),Su(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ek(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gt())}function Sk(){var t;const e=(t=ud())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ak(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ik(){const t=Gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ck(){return!Sk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kk(){try{return typeof indexedDB=="object"}catch{return!1}}function Rk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="FirebaseError";class Vr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pk,Object.setPrototypeOf(this,Vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wl.prototype.create)}}class wl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vr(i,a,r)}}function xk(t,e){return t.replace(Lk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Lk=/\{\$([^}]+)}/g;function Nk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sv(s)&&Sv(o)){if(!Tu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ma(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ga(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dk(t,e){const n=new Ok(t,e);return n.subscribe.bind(n)}class Ok{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gf),i.error===void 0&&(i.error=gf),i.complete===void 0&&(i.complete=gf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){return t&&t._delegate?t._delegate:t}class hs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _k;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uk(e))try{this.getOrInitializeService({instanceIdentifier:Gi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gi){return this.instances.has(e)}getOptions(e=Gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gi){return this.component?this.component.multipleInstances?e:Gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fk(t){return t===Gi?void 0:t}function Uk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const zk={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},Bk=Re.INFO,qk={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},Hk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ym{constructor(e){this.name=e,this._logLevel=Bk,this._logHandler=Hk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const $k=(t,e)=>e.some(n=>t instanceof n);let Tv,bv;function Wk(){return Tv||(Tv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kk(){return bv||(bv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ZE=new WeakMap,kh=new WeakMap,eS=new WeakMap,yf=new WeakMap,vm=new WeakMap;function Gk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ZE.set(n,t)}).catch(()=>{}),vm.set(e,t),e}function Qk(t){if(kh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kh.set(t,e)}let Rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yk(t){Rh=t(Rh)}function Xk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vf(this),e,...n);return eS.set(r,e.sort?e.sort():[e]),gi(r)}:Kk().includes(t)?function(...e){return t.apply(vf(this),e),gi(ZE.get(this))}:function(...e){return gi(t.apply(vf(this),e))}}function Jk(t){return typeof t=="function"?Xk(t):(t instanceof IDBTransaction&&Qk(t),$k(t,Wk())?new Proxy(t,Rh):t)}function gi(t){if(t instanceof IDBRequest)return Gk(t);if(yf.has(t))return yf.get(t);const e=Jk(t);return e!==t&&(yf.set(t,e),vm.set(e,t)),e}const vf=t=>vm.get(t);function Zk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gi(o);return r&&o.addEventListener("upgradeneeded",c=>{r(gi(o.result),c.oldVersion,c.newVersion,gi(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const eR=["get","getKey","getAll","getAllKeys","count"],tR=["put","add","delete","clear"],_f=new Map;function Av(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_f.get(e))return _f.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eR.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return _f.set(e,s),s}Yk(t=>({...t,get:(e,n,r)=>Av(e,n)||t.get(e,n,r),has:(e,n)=>!!Av(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ph="@firebase/app",Iv="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new ym("@firebase/app"),iR="@firebase/app-compat",sR="@firebase/analytics-compat",oR="@firebase/analytics",aR="@firebase/app-check-compat",lR="@firebase/app-check",cR="@firebase/auth",uR="@firebase/auth-compat",dR="@firebase/database",fR="@firebase/data-connect",hR="@firebase/database-compat",pR="@firebase/functions",mR="@firebase/functions-compat",gR="@firebase/installations",yR="@firebase/installations-compat",vR="@firebase/messaging",_R="@firebase/messaging-compat",wR="@firebase/performance",ER="@firebase/performance-compat",SR="@firebase/remote-config",TR="@firebase/remote-config-compat",bR="@firebase/storage",AR="@firebase/storage-compat",IR="@firebase/firestore",CR="@firebase/vertexai",kR="@firebase/firestore-compat",RR="firebase",PR="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="[DEFAULT]",xR={[Ph]:"fire-core",[iR]:"fire-core-compat",[oR]:"fire-analytics",[sR]:"fire-analytics-compat",[lR]:"fire-app-check",[aR]:"fire-app-check-compat",[cR]:"fire-auth",[uR]:"fire-auth-compat",[dR]:"fire-rtdb",[fR]:"fire-data-connect",[hR]:"fire-rtdb-compat",[pR]:"fire-fn",[mR]:"fire-fn-compat",[gR]:"fire-iid",[yR]:"fire-iid-compat",[vR]:"fire-fcm",[_R]:"fire-fcm-compat",[wR]:"fire-perf",[ER]:"fire-perf-compat",[SR]:"fire-rc",[TR]:"fire-rc-compat",[bR]:"fire-gcs",[AR]:"fire-gcs-compat",[IR]:"fire-fst",[kR]:"fire-fst-compat",[CR]:"fire-vertex","fire-js":"fire-js",[RR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Map,LR=new Map,Lh=new Map;function Cv(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _o(t){const e=t.name;if(Lh.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;Lh.set(e,t);for(const n of bu.values())Cv(n,t);for(const n of LR.values())Cv(n,t);return!0}function _m(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new wl("app","Firebase",NR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=PR;function tS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yi.create("bad-app-name",{appName:String(i)});if(n||(n=XE()),!n)throw yi.create("no-options");const s=bu.get(i);if(s){if(Tu(n,s.options)&&Tu(r,s.config))return s;throw yi.create("duplicate-app",{appName:i})}const o=new jk(i);for(const c of Lh.values())o.addComponent(c);const a=new DR(n,r,o);return bu.set(i,a),a}function nS(t=xh){const e=bu.get(t);if(!e&&t===xh&&XE())return tS();if(!e)throw yi.create("no-app",{appName:t});return e}function vi(t,e,n){var r;let i=(r=xR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(a.join(" "));return}_o(new hs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="firebase-heartbeat-database",MR=1,nl="firebase-heartbeat-store";let wf=null;function rS(){return wf||(wf=Zk(OR,MR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(nl)}catch(n){console.warn(n)}}}}).catch(t=>{throw yi.create("idb-open",{originalErrorMessage:t.message})})),wf}async function VR(t){try{const n=(await rS()).transaction(nl),r=await n.objectStore(nl).get(iS(t));return await n.done,r}catch(e){if(e instanceof Vr)Rr.warn(e.message);else{const n=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function kv(t,e){try{const r=(await rS()).transaction(nl,"readwrite");await r.objectStore(nl).put(e,iS(t)),await r.done}catch(n){if(n instanceof Vr)Rr.warn(n.message);else{const r=yi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function iS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=1024,UR=30*24*60*60*1e3;class jR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=UR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rv(),{heartbeatsToSend:r,unsentEntries:i}=zR(this._heartbeatsCache.heartbeats),s=Su(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rr.warn(n),""}}}function Rv(){return new Date().toISOString().substring(0,10)}function zR(t,e=FR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kk()?Rk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pv(t){return Su(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){_o(new hs("platform-logger",e=>new nR(e),"PRIVATE")),_o(new hs("heartbeat",e=>new jR(e),"PRIVATE")),vi(Ph,Iv,t),vi(Ph,Iv,"esm2017"),vi("fire-js","")}qR("");function wm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function sS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HR=sS,oS=new wl("auth","Firebase",sS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new ym("@firebase/auth");function $R(t,...e){Au.logLevel<=Re.WARN&&Au.warn(`Auth (${No}): ${t}`,...e)}function Oc(t,...e){Au.logLevel<=Re.ERROR&&Au.error(`Auth (${No}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,...e){throw Sm(t,...e)}function Wn(t,...e){return Sm(t,...e)}function Em(t,e,n){const r=Object.assign(Object.assign({},HR()),{[e]:n});return new wl("auth","Firebase",r).create(e,{appName:t.name})}function br(t){return Em(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function WR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ln(t,"argument-error"),Em(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return oS.create(t,...e)}function we(t,e,...n){if(!t)throw Sm(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oc(e),new Error(e)}function Pr(t,e){t||wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KR(){return xv()==="http:"||xv()==="https:"}function xv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KR()||bk()||"connection"in navigator)?navigator.onLine:!0}function QR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ek()||Ak()}get(){return GR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e){Pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=new Sl(3e4,6e4);function Fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ur(t,e,n,r,i={}){return lS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=El(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return Tk()||(u.referrerPolicy="no-referrer"),aS.fetch()(cS(t,t.config.apiHost,n,a),u)})}async function lS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YR),e);try{const i=new ZR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw hc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw hc(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw hc(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Em(t,h,u);Ln(t,h)}}catch(i){if(i instanceof Vr)throw i;Ln(t,"network-request-failed",{message:String(i)})}}async function Tl(t,e,n,r,i={}){const s=await Ur(t,e,n,r,i);return"mfaPendingCredential"in s&&Ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function cS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tm(t.config,i):`${t.config.apiScheme}://${i}`}function JR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wn(this.auth,"network-request-failed")),XR.get())})}}function hc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wn(t,e,r);return i.customData._tokenResponse=n,i}function Lv(t){return t!==void 0&&t.enterprise!==void 0}class eP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tP(t,e){return Ur(t,"GET","/v2/recaptchaConfig",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e){return Ur(t,"POST","/v1/accounts:delete",e)}async function uS(t,e){return Ur(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rP(t,e=!1){const n=gn(t),r=await n.getIdToken(e),i=bm(r);we(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pa(Ef(i.auth_time)),issuedAtTime:Pa(Ef(i.iat)),expirationTime:Pa(Ef(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ef(t){return Number(t)*1e3}function bm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oc("JWT malformed, contained fewer than 3 sections"),null;try{const i=QE(n);return i?JSON.parse(i):(Oc("Failed to decode base64 JWT payload"),null)}catch(i){return Oc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Nv(t){const e=bm(t);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vr&&iP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await rl(t,uS(n,{idToken:r}));we(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dS(s.providerUserInfo):[],a=aP(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Dh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function oP(t){const e=gn(t);await Iu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dS(t){return t.map(e=>{var{providerId:n}=e,r=wm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,e){const n=await lS(t,{},async()=>{const r=El({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=cS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",aS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cP(t,e){return Ur(t,"POST","/v2/accounts:revokeToken",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){we(e.length!==0,"internal-error");const n=Nv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new oo;return r&&(we(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(we(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(we(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e){we(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rl(this,this.stsTokenManager.getToken(this.auth,e));return we(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rP(this,e)}reload(){return oP(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Iu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bn(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await rl(this,nP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(u=n.createdAt)!==null&&u!==void 0?u:void 0,y=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:L,isAnonymous:U,providerData:W,stsTokenManager:b}=n;we(A&&b,e,"internal-error");const g=oo.fromJSON(this.name,b);we(typeof A=="string",e,"internal-error"),Gr(d,e.name),Gr(p,e.name),we(typeof L=="boolean",e,"internal-error"),we(typeof U=="boolean",e,"internal-error"),Gr(v,e.name),Gr(E,e.name),Gr(I,e.name),Gr(k,e.name),Gr(T,e.name),Gr(y,e.name);const w=new Er({uid:A,auth:e,email:p,emailVerified:L,displayName:d,isAnonymous:U,photoURL:E,phoneNumber:v,tenantId:I,stsTokenManager:g,createdAt:T,lastLoginAt:y});return W&&Array.isArray(W)&&(w.providerData=W.map(S=>Object.assign({},S))),k&&(w._redirectEventId=k),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new oo;i.updateFromServerResponse(n);const s=new Er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Iu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];we(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?dS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new oo;a.updateFromIdToken(r);const c=new Er({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Dh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=new Map;function Sr(t){Pr(t instanceof Function,"Expected a class definition");let e=Dv.get(t);return e?(Pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fS.type="NONE";const Ov=fS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e,n){return`firebase:${t}:${e}:${n}`}class ao{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ao(Sr(Ov),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Sr(Ov);const o=Mc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Er._fromJSON(e,h);u!==s&&(a=d),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ao(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ao(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vS(e))return"Blackberry";if(_S(e))return"Webos";if(pS(e))return"Safari";if((e.includes("chrome/")||mS(e))&&!e.includes("edge/"))return"Chrome";if(yS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hS(t=Gt()){return/firefox\//i.test(t)}function pS(t=Gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mS(t=Gt()){return/crios\//i.test(t)}function gS(t=Gt()){return/iemobile/i.test(t)}function yS(t=Gt()){return/android/i.test(t)}function vS(t=Gt()){return/blackberry/i.test(t)}function _S(t=Gt()){return/webos/i.test(t)}function Am(t=Gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uP(t=Gt()){var e;return Am(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dP(){return Ik()&&document.documentMode===10}function wS(t=Gt()){return Am(t)||yS(t)||_S(t)||vS(t)||/windows phone/i.test(t)||gS(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t,e=[]){let n;switch(t){case"Browser":n=Mv(Gt());break;case"Worker":n=`${Mv(Gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${No}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e={}){return Ur(t,"GET","/v2/passwordPolicy",Fr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=6;class mP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:pP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vv(this),this.idTokenSubscription=new Vv(this),this.beforeStateQueue=new fP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ao.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await uS(this,{idToken:e}),r=await Er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Iu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bn(this.app))return Promise.reject(br(this));const n=e?gn(e):null;return n&&we(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bn(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bn(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hP(this),n=new mP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sr(e)||this._popupRedirectResolver;we(n,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[Sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ES(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$R(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jr(t){return gn(t)}class Vv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dk(n=>this.observer=n)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yP(t){dd=t}function SS(t){return dd.loadJS(t)}function vP(){return dd.recaptchaEnterpriseScript}function _P(){return dd.gapiScript}function wP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class EP{constructor(){this.enterprise=new SP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class SP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const TP="recaptcha-enterprise",TS="NO_RECAPTCHA";class bP{constructor(e){this.type=TP,this.auth=jr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new eP(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Lv(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(TS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new EP().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Lv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=vP();c.length!==0&&(c+=a),SS(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Fv(t,e,n,r=!1,i=!1){const s=new bP(t);let o;if(i)o=TS;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Cu(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Fv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Fv(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t,e){const n=_m(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Tu(s,e??{}))return i;Ln(i,"already-initialized")}return n.initialize({options:e})}function IP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CP(t,e,n){const r=jr(t);we(r._canInitEmulator,r,"emulator-config-failed"),we(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=bS(e),{host:o,port:a}=kP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),RP()}function bS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kP(t){const e=bS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Uv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Uv(o)}}}function Uv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}async function PP(t,e){return Ur(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){return Tl(t,"POST","/v1/accounts:signInWithPassword",Fr(t,e))}async function AS(t,e){return Ur(t,"POST","/v1/accounts:sendOobCode",Fr(t,e))}async function LP(t,e){return AS(t,e)}async function NP(t,e){return AS(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}async function OP(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Im{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new il(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new il(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cu(e,n,"signInWithPassword",xP);case"emailLink":return DP(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cu(e,r,"signUpPassword",PP);case"emailLink":return OP(e,{idToken:n,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t,e){return Tl(t,"POST","/v1/accounts:signInWithIdp",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP="http://localhost";class ps extends Im{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ps(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return lo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,lo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lo(e,n)}buildRequest(){const e={requestUri:MP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=El(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FP(t){const e=ma(ga(t)).link,n=e?ma(ga(e)).deep_link_id:null,r=ma(ga(t)).deep_link_id;return(r?ma(ga(r)).link:null)||r||n||e||t}class Cm{constructor(e){var n,r,i,s,o,a;const c=ma(ga(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,d=VP((i=c.mode)!==null&&i!==void 0?i:null);we(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=FP(e);try{return new Cm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.providerId=Do.PROVIDER_ID}static credential(e,n){return il._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cm.parseLink(n);return we(r,"argument-error"),il._fromEmailAndCode(e,r.code,r.tenantId)}}Do.PROVIDER_ID="password";Do.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Do.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends km{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends bl{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";ti.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends bl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends bl{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends bl{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ri.credential(n,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e){return Tl(t,"POST","/v1/accounts:signUp",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Er._fromIdTokenResponse(e,r,i),o=jv(r);return new ms({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jv(r);return new ms({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Vr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ku.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ku(e,n,r,i)}}function IS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ku._fromErrorAndOperation(t,s,e,r):s})}async function jP(t,e,n=!1){const r=await rl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e,n=!1){const{auth:r}=t;if(Bn(r.app))return Promise.reject(br(r));const i="reauthenticate";try{const s=await rl(t,IS(r,i,e,t),n);we(s.idToken,r,"internal-error");const o=bm(s.idToken);we(o,r,"internal-error");const{sub:a}=o;return we(t.uid===a,r,"user-mismatch"),ms._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,e,n=!1){if(Bn(t.app))return Promise.reject(br(t));const r="signIn",i=await IS(t,r,e),s=await ms._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function BP(t,e){return CS(jr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t){const e=jr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qP(t,e,n){const r=jr(t);await Cu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",NP)}async function HP(t,e,n){if(Bn(t.app))return Promise.reject(br(t));const r=jr(t),o=await Cu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&kS(t),c}),a=await ms._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function $P(t,e,n){return Bn(t.app)?Promise.reject(br(t)):BP(gn(t),Do.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kS(t),r})}async function WP(t,e){const n=gn(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await LP(n.auth,i);s!==t.email&&await t.reload()}function KP(t,e,n,r){return gn(t).onIdTokenChanged(e,n,r)}function GP(t,e,n){return gn(t).beforeAuthStateChanged(e,n)}const Ru="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ru,"1"),this.storage.removeItem(Ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=1e3,YP=10;class PS extends RS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,YP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}PS.type="LOCAL";const XP=PS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS extends RS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xS.type="SESSION";const LS=xS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await JP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Rm("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return window}function ex(t){or().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function tx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rx(){return NS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="firebaseLocalStorageDb",ix=1,Pu="firebaseLocalStorage",OS="fbase_key";class Al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hd(t,e){return t.transaction([Pu],e?"readwrite":"readonly").objectStore(Pu)}function sx(){const t=indexedDB.deleteDatabase(DS);return new Al(t).toPromise()}function Oh(){const t=indexedDB.open(DS,ix);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pu,{keyPath:OS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pu)?e(r):(r.close(),await sx(),e(await Oh()))})})}async function zv(t,e,n){const r=hd(t,!0).put({[OS]:e,value:n});return new Al(r).toPromise()}async function ox(t,e){const n=hd(t,!1).get(e),r=await new Al(n).toPromise();return r===void 0?null:r.value}function Bv(t,e){const n=hd(t,!0).delete(e);return new Al(n).toPromise()}const ax=800,lx=3;class MS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return NS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fd._getInstance(rx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tx(),!this.activeServiceWorker)return;this.sender=new ZP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oh();return await zv(e,Ru,"1"),await Bv(e,Ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ox(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hd(i,!1).getAll();return new Al(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ax)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}MS.type="LOCAL";const cx=MS;new Sl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(t,e){return e?Sr(e):(we(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends Im{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ux(t){return CS(t.auth,new Pm(t),t.bypassAuthState)}function dx(t){const{auth:e,user:n}=t;return we(n,e,"internal-error"),zP(n,new Pm(t),t.bypassAuthState)}async function fx(t){const{auth:e,user:n}=t;return we(n,e,"internal-error"),jP(n,new Pm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ux;case"linkViaPopup":case"linkViaRedirect":return fx;case"reauthViaPopup":case"reauthViaRedirect":return dx;default:Ln(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=new Sl(2e3,1e4);async function px(t,e,n){if(Bn(t.app))return Promise.reject(Wn(t,"operation-not-supported-in-this-environment"));const r=jr(t);WR(t,e,km);const i=VS(r,n);return new ts(r,"signInViaPopup",e,i).executeNotNull()}class ts extends FS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=Rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hx.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="pendingRedirect",Vc=new Map;class gx extends FS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vc.get(this.auth._key());if(!e){try{const r=await yx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vc.set(this.auth._key(),e)}return this.bypassAuthState||Vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yx(t,e){const n=wx(e),r=_x(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vx(t,e){Vc.set(t._key(),e)}function _x(t){return Sr(t._redirectPersistence)}function wx(t){return Mc(mx,t.config.apiKey,t.name)}async function Ex(t,e,n=!1){if(Bn(t.app))return Promise.reject(br(t));const r=jr(t),i=VS(r,e),o=await new gx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=10*60*1e3;class Tx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!US(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sx&&this.cachedEventUids.clear(),this.cachedEventUids.has(qv(e))}saveEventToCache(e){this.cachedEventUids.add(qv(e)),this.lastProcessedEventTime=Date.now()}}function qv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function US({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return US(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax(t,e={}){return Ur(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cx=/^https?/;async function kx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ax(t);for(const n of e)try{if(Rx(n))return}catch{}Ln(t,"unauthorized-domain")}function Rx(t){const e=Nh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Cx.test(n))return!1;if(Ix.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=new Sl(3e4,6e4);function Hv(){const t=or().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xx(t){return new Promise((e,n)=>{var r,i,s;function o(){Hv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hv(),n(Wn(t,"network-request-failed"))},timeout:Px.get()})}if(!((i=(r=or().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=or().gapi)===null||s===void 0)&&s.load)o();else{const a=wP("iframefcb");return or()[a]=()=>{gapi.load?o():n(Wn(t,"network-request-failed"))},SS(`${_P()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fc=null,e})}let Fc=null;function Lx(t){return Fc=Fc||xx(t),Fc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=new Sl(5e3,15e3),Dx="__/auth/iframe",Ox="emulator/auth/iframe",Mx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fx(t){const e=t.config;we(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tm(e,Ox):`https://${t.config.authDomain}/${Dx}`,r={apiKey:e.apiKey,appName:t.name,v:No},i=Vx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${El(r).slice(1)}`}async function Ux(t){const e=await Lx(t),n=or().gapi;return we(n,t,"internal-error"),e.open({where:document.body,url:Fx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Wn(t,"network-request-failed"),a=or().setTimeout(()=>{s(o)},Nx.get());function c(){or().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zx=500,Bx=600,qx="_blank",Hx="http://localhost";class $v{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $x(t,e,n,r=zx,i=Bx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},jx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Gt().toLowerCase();n&&(a=mS(u)?qx:n),hS(u)&&(e=e||Hx,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[v,E])=>`${p}${v}=${E},`,"");if(uP(u)&&a!=="_self")return Wx(e||"",a),new $v(null);const d=window.open(e||"",a,h);we(d,t,"popup-blocked");try{d.focus()}catch{}return new $v(d)}function Wx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx="__/auth/handler",Gx="emulator/auth/handler",Qx=encodeURIComponent("fac");async function Wv(t,e,n,r,i,s){we(t.config.authDomain,t,"auth-domain-config-required"),we(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:No,eventId:i};if(e instanceof km){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof bl){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${Qx}=${encodeURIComponent(c)}`:"";return`${Yx(t)}?${El(a).slice(1)}${u}`}function Yx({config:t}){return t.emulator?Tm(t,Gx):`https://${t.authDomain}/${Kx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="webStorageSupport";class Xx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LS,this._completeRedirectFn=Ex,this._overrideRedirectResult=vx}async _openPopup(e,n,r,i){var s;Pr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Wv(e,n,r,Nh(),i);return $x(e,o,Rm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Wv(e,n,r,Nh(),i);return ex(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ux(e),r=new Tx(e);return n.register("authEvent",i=>(we(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sf,{type:Sf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sf];o!==void 0&&n(!!o),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wS()||pS()||Am()}}const Jx=Xx;var Kv="@firebase/auth",Gv="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function t2(t){_o(new hs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;we(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ES(t)},u=new gP(r,i,s,c);return IP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_o(new hs("auth-internal",e=>{const n=jr(e.getProvider("auth").getImmediate());return(r=>new Zx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vi(Kv,Gv,e2(t)),vi(Kv,Gv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=5*60,r2=JE("authIdTokenMaxAge")||n2;let Qv=null;const i2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>r2)return;const i=n==null?void 0:n.token;Qv!==i&&(Qv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function s2(t=nS()){const e=_m(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AP(t,{popupRedirectResolver:Jx,persistence:[cx,XP,LS]}),r=JE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=i2(s.toString());GP(n,o,()=>o(n.currentUser)),KP(n,a=>o(a))}}const i=YE("auth");return i&&CP(n,`http://${i}`),n}function o2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",o2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});t2("Browser");var Yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var os,jS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function w(){}w.prototype=g.prototype,b.D=g.prototype,b.prototype=new w,b.prototype.constructor=b,b.C=function(S,R,x){for(var C=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)C[ue-2]=arguments[ue];return g.prototype[R].apply(S,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,g,w){w||(w=0);var S=Array(16);if(typeof g=="string")for(var R=0;16>R;++R)S[R]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(R=0;16>R;++R)S[R]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=b.g[0],w=b.g[1],R=b.g[2];var x=b.g[3],C=g+(x^w&(R^x))+S[0]+3614090360&4294967295;g=w+(C<<7&4294967295|C>>>25),C=x+(R^g&(w^R))+S[1]+3905402710&4294967295,x=g+(C<<12&4294967295|C>>>20),C=R+(w^x&(g^w))+S[2]+606105819&4294967295,R=x+(C<<17&4294967295|C>>>15),C=w+(g^R&(x^g))+S[3]+3250441966&4294967295,w=R+(C<<22&4294967295|C>>>10),C=g+(x^w&(R^x))+S[4]+4118548399&4294967295,g=w+(C<<7&4294967295|C>>>25),C=x+(R^g&(w^R))+S[5]+1200080426&4294967295,x=g+(C<<12&4294967295|C>>>20),C=R+(w^x&(g^w))+S[6]+2821735955&4294967295,R=x+(C<<17&4294967295|C>>>15),C=w+(g^R&(x^g))+S[7]+4249261313&4294967295,w=R+(C<<22&4294967295|C>>>10),C=g+(x^w&(R^x))+S[8]+1770035416&4294967295,g=w+(C<<7&4294967295|C>>>25),C=x+(R^g&(w^R))+S[9]+2336552879&4294967295,x=g+(C<<12&4294967295|C>>>20),C=R+(w^x&(g^w))+S[10]+4294925233&4294967295,R=x+(C<<17&4294967295|C>>>15),C=w+(g^R&(x^g))+S[11]+2304563134&4294967295,w=R+(C<<22&4294967295|C>>>10),C=g+(x^w&(R^x))+S[12]+1804603682&4294967295,g=w+(C<<7&4294967295|C>>>25),C=x+(R^g&(w^R))+S[13]+4254626195&4294967295,x=g+(C<<12&4294967295|C>>>20),C=R+(w^x&(g^w))+S[14]+2792965006&4294967295,R=x+(C<<17&4294967295|C>>>15),C=w+(g^R&(x^g))+S[15]+1236535329&4294967295,w=R+(C<<22&4294967295|C>>>10),C=g+(R^x&(w^R))+S[1]+4129170786&4294967295,g=w+(C<<5&4294967295|C>>>27),C=x+(w^R&(g^w))+S[6]+3225465664&4294967295,x=g+(C<<9&4294967295|C>>>23),C=R+(g^w&(x^g))+S[11]+643717713&4294967295,R=x+(C<<14&4294967295|C>>>18),C=w+(x^g&(R^x))+S[0]+3921069994&4294967295,w=R+(C<<20&4294967295|C>>>12),C=g+(R^x&(w^R))+S[5]+3593408605&4294967295,g=w+(C<<5&4294967295|C>>>27),C=x+(w^R&(g^w))+S[10]+38016083&4294967295,x=g+(C<<9&4294967295|C>>>23),C=R+(g^w&(x^g))+S[15]+3634488961&4294967295,R=x+(C<<14&4294967295|C>>>18),C=w+(x^g&(R^x))+S[4]+3889429448&4294967295,w=R+(C<<20&4294967295|C>>>12),C=g+(R^x&(w^R))+S[9]+568446438&4294967295,g=w+(C<<5&4294967295|C>>>27),C=x+(w^R&(g^w))+S[14]+3275163606&4294967295,x=g+(C<<9&4294967295|C>>>23),C=R+(g^w&(x^g))+S[3]+4107603335&4294967295,R=x+(C<<14&4294967295|C>>>18),C=w+(x^g&(R^x))+S[8]+1163531501&4294967295,w=R+(C<<20&4294967295|C>>>12),C=g+(R^x&(w^R))+S[13]+2850285829&4294967295,g=w+(C<<5&4294967295|C>>>27),C=x+(w^R&(g^w))+S[2]+4243563512&4294967295,x=g+(C<<9&4294967295|C>>>23),C=R+(g^w&(x^g))+S[7]+1735328473&4294967295,R=x+(C<<14&4294967295|C>>>18),C=w+(x^g&(R^x))+S[12]+2368359562&4294967295,w=R+(C<<20&4294967295|C>>>12),C=g+(w^R^x)+S[5]+4294588738&4294967295,g=w+(C<<4&4294967295|C>>>28),C=x+(g^w^R)+S[8]+2272392833&4294967295,x=g+(C<<11&4294967295|C>>>21),C=R+(x^g^w)+S[11]+1839030562&4294967295,R=x+(C<<16&4294967295|C>>>16),C=w+(R^x^g)+S[14]+4259657740&4294967295,w=R+(C<<23&4294967295|C>>>9),C=g+(w^R^x)+S[1]+2763975236&4294967295,g=w+(C<<4&4294967295|C>>>28),C=x+(g^w^R)+S[4]+1272893353&4294967295,x=g+(C<<11&4294967295|C>>>21),C=R+(x^g^w)+S[7]+4139469664&4294967295,R=x+(C<<16&4294967295|C>>>16),C=w+(R^x^g)+S[10]+3200236656&4294967295,w=R+(C<<23&4294967295|C>>>9),C=g+(w^R^x)+S[13]+681279174&4294967295,g=w+(C<<4&4294967295|C>>>28),C=x+(g^w^R)+S[0]+3936430074&4294967295,x=g+(C<<11&4294967295|C>>>21),C=R+(x^g^w)+S[3]+3572445317&4294967295,R=x+(C<<16&4294967295|C>>>16),C=w+(R^x^g)+S[6]+76029189&4294967295,w=R+(C<<23&4294967295|C>>>9),C=g+(w^R^x)+S[9]+3654602809&4294967295,g=w+(C<<4&4294967295|C>>>28),C=x+(g^w^R)+S[12]+3873151461&4294967295,x=g+(C<<11&4294967295|C>>>21),C=R+(x^g^w)+S[15]+530742520&4294967295,R=x+(C<<16&4294967295|C>>>16),C=w+(R^x^g)+S[2]+3299628645&4294967295,w=R+(C<<23&4294967295|C>>>9),C=g+(R^(w|~x))+S[0]+4096336452&4294967295,g=w+(C<<6&4294967295|C>>>26),C=x+(w^(g|~R))+S[7]+1126891415&4294967295,x=g+(C<<10&4294967295|C>>>22),C=R+(g^(x|~w))+S[14]+2878612391&4294967295,R=x+(C<<15&4294967295|C>>>17),C=w+(x^(R|~g))+S[5]+4237533241&4294967295,w=R+(C<<21&4294967295|C>>>11),C=g+(R^(w|~x))+S[12]+1700485571&4294967295,g=w+(C<<6&4294967295|C>>>26),C=x+(w^(g|~R))+S[3]+2399980690&4294967295,x=g+(C<<10&4294967295|C>>>22),C=R+(g^(x|~w))+S[10]+4293915773&4294967295,R=x+(C<<15&4294967295|C>>>17),C=w+(x^(R|~g))+S[1]+2240044497&4294967295,w=R+(C<<21&4294967295|C>>>11),C=g+(R^(w|~x))+S[8]+1873313359&4294967295,g=w+(C<<6&4294967295|C>>>26),C=x+(w^(g|~R))+S[15]+4264355552&4294967295,x=g+(C<<10&4294967295|C>>>22),C=R+(g^(x|~w))+S[6]+2734768916&4294967295,R=x+(C<<15&4294967295|C>>>17),C=w+(x^(R|~g))+S[13]+1309151649&4294967295,w=R+(C<<21&4294967295|C>>>11),C=g+(R^(w|~x))+S[4]+4149444226&4294967295,g=w+(C<<6&4294967295|C>>>26),C=x+(w^(g|~R))+S[11]+3174756917&4294967295,x=g+(C<<10&4294967295|C>>>22),C=R+(g^(x|~w))+S[2]+718787259&4294967295,R=x+(C<<15&4294967295|C>>>17),C=w+(x^(R|~g))+S[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(R+(C<<21&4294967295|C>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+x&4294967295}r.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var w=g-this.blockSize,S=this.B,R=this.h,x=0;x<g;){if(R==0)for(;x<=w;)i(this,b,x),x+=this.blockSize;if(typeof b=="string"){for(;x<g;)if(S[R++]=b.charCodeAt(x++),R==this.blockSize){i(this,S),R=0;break}}else for(;x<g;)if(S[R++]=b[x++],R==this.blockSize){i(this,S),R=0;break}}this.h=R,this.o+=g},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var w=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=w&255,w/=256;for(this.u(b),b=Array(16),g=w=0;4>g;++g)for(var S=0;32>S;S+=8)b[w++]=this.g[g]>>>S&255;return b};function s(b,g){var w=a;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=g(b)}function o(b,g){this.h=g;for(var w=[],S=!0,R=b.length-1;0<=R;R--){var x=b[R]|0;S&&x==g||(w[R]=x,S=!1)}this.g=w}var a={};function c(b){return-128<=b&&128>b?s(b,function(g){return new o([g|0],0>g?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return k(u(-b));for(var g=[],w=1,S=0;b>=w;S++)g[S]=b/w|0,w*=4294967296;return new o(g,0)}function h(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return k(h(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(g,8)),S=d,R=0;R<b.length;R+=8){var x=Math.min(8,b.length-R),C=parseInt(b.substring(R,R+x),g);8>x?(x=u(Math.pow(g,x)),S=S.j(x).add(u(C))):(S=S.j(w),S=S.add(u(C)))}return S}var d=c(0),p=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(I(this))return-k(this).m();for(var b=0,g=1,w=0;w<this.g.length;w++){var S=this.i(w);b+=(0<=S?S:4294967296+S)*g,g*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(E(this))return"0";if(I(this))return"-"+k(this).toString(b);for(var g=u(Math.pow(b,6)),w=this,S="";;){var R=L(w,g).g;w=T(w,R.j(g));var x=((0<w.g.length?w.g[0]:w.h)>>>0).toString(b);if(w=R,E(w))return x+S;for(;6>x.length;)x="0"+x;S=x+S}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function E(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function I(b){return b.h==-1}t.l=function(b){return b=T(this,b),I(b)?-1:E(b)?0:1};function k(b){for(var g=b.g.length,w=[],S=0;S<g;S++)w[S]=~b.g[S];return new o(w,~b.h).add(p)}t.abs=function(){return I(this)?k(this):this},t.add=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],S=0,R=0;R<=g;R++){var x=S+(this.i(R)&65535)+(b.i(R)&65535),C=(x>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);S=C>>>16,x&=65535,C&=65535,w[R]=C<<16|x}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(b,g){return b.add(k(g))}t.j=function(b){if(E(this)||E(b))return d;if(I(this))return I(b)?k(this).j(k(b)):k(k(this).j(b));if(I(b))return k(this.j(k(b)));if(0>this.l(v)&&0>b.l(v))return u(this.m()*b.m());for(var g=this.g.length+b.g.length,w=[],S=0;S<2*g;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var R=0;R<b.g.length;R++){var x=this.i(S)>>>16,C=this.i(S)&65535,ue=b.i(R)>>>16,je=b.i(R)&65535;w[2*S+2*R]+=C*je,y(w,2*S+2*R),w[2*S+2*R+1]+=x*je,y(w,2*S+2*R+1),w[2*S+2*R+1]+=C*ue,y(w,2*S+2*R+1),w[2*S+2*R+2]+=x*ue,y(w,2*S+2*R+2)}for(S=0;S<g;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=g;S<2*g;S++)w[S]=0;return new o(w,0)};function y(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function A(b,g){this.g=b,this.h=g}function L(b,g){if(E(g))throw Error("division by zero");if(E(b))return new A(d,d);if(I(b))return g=L(k(b),g),new A(k(g.g),k(g.h));if(I(g))return g=L(b,k(g)),new A(k(g.g),g.h);if(30<b.g.length){if(I(b)||I(g))throw Error("slowDivide_ only works with positive integers.");for(var w=p,S=g;0>=S.l(b);)w=U(w),S=U(S);var R=W(w,1),x=W(S,1);for(S=W(S,2),w=W(w,2);!E(S);){var C=x.add(S);0>=C.l(b)&&(R=R.add(w),x=C),S=W(S,1),w=W(w,1)}return g=T(b,R.j(g)),new A(R,g)}for(R=d;0<=b.l(g);){for(w=Math.max(1,Math.floor(b.m()/g.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),x=u(w),C=x.j(g);I(C)||0<C.l(b);)w-=S,x=u(w),C=x.j(g);E(x)&&(x=p),R=R.add(x),b=T(b,C)}return new A(R,b)}t.A=function(b){return L(this,b).h},t.and=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],S=0;S<g;S++)w[S]=this.i(S)&b.i(S);return new o(w,this.h&b.h)},t.or=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],S=0;S<g;S++)w[S]=this.i(S)|b.i(S);return new o(w,this.h|b.h)},t.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),w=[],S=0;S<g;S++)w[S]=this.i(S)^b.i(S);return new o(w,this.h^b.h)};function U(b){for(var g=b.g.length+1,w=[],S=0;S<g;S++)w[S]=b.i(S)<<1|b.i(S-1)>>>31;return new o(w,b.h)}function W(b,g){var w=g>>5;g%=32;for(var S=b.g.length-w,R=[],x=0;x<S;x++)R[x]=0<g?b.i(x+w)>>>g|b.i(x+w+1)<<32-g:b.i(x+w);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,os=o}).apply(typeof Yv<"u"?Yv:typeof self<"u"?self:typeof window<"u"?window:{});var pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zS,ya,BS,Uc,Mh,qS,HS,$S;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof pc=="object"&&pc];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var m=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var O=l[_];if(!(O in m))break e;m=m[O]}l=l[l.length-1],_=m[l],f=f(_),f!=_&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var m=0,_=!1,O={next:function(){if(!_&&m<l.length){var z=m++;return{value:f(z,l[z]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,m){return l.call.apply(l.bind,arguments)}function d(l,f,m){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function p(l,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function v(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function E(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(_,O,z){for(var re=Array(arguments.length-2),We=2;We<arguments.length;We++)re[We-2]=arguments[We];return f.prototype[O].apply(_,re)}}function I(l){const f=l.length;if(0<f){const m=Array(f);for(let _=0;_<f;_++)m[_]=l[_];return m}return[]}function k(l,f){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(c(_)){const O=l.length||0,z=_.length||0;l.length=O+z;for(let re=0;re<z;re++)l[O+re]=_[re]}else l.push(_)}}class T{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function y(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function L(l){return L[" "](l),l}L[" "]=function(){};var U=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function W(l,f,m){for(const _ in l)f.call(m,l[_],_,l)}function b(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function g(l){const f={};for(const m in l)f[m]=l[m];return f}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,f){let m,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(m in _)l[m]=_[m];for(let z=0;z<w.length;z++)m=w[z],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function R(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function x(l){a.setTimeout(()=>{throw l},0)}function C(){var l=te;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class ue{constructor(){this.h=this.g=null}add(f,m){const _=je.get();_.set(f,m),this.h?this.h.next=_:this.g=_,this.h=_}}var je=new T(()=>new He,l=>l.reset());class He{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,ee=!1,te=new ue,de=()=>{const l=a.Promise.resolve(void 0);ct=()=>{l.then(M)}};var M=()=>{for(var l;l=C();){try{l.h.call(l.g)}catch(m){x(m)}var f=je;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}ee=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var le=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return l}();function Be(l,f){if(X.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(U){e:{try{L(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:V[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Be.aa.h.call(this)}}E(Be,X);var V={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),se=0;function fe(l,f,m,_,O){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!_,this.ha=O,this.key=++se,this.da=this.fa=!1}function rt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Vt(l){this.src=l,this.g={},this.h=0}Vt.prototype.add=function(l,f,m,_,O){var z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);var re=D(l,f,_,O);return-1<re?(f=l[re],m||(f.fa=!1)):(f=new fe(f,this.src,z,!!_,O),f.fa=m,l.push(f)),f};function Di(l,f){var m=f.type;if(m in l.g){var _=l.g[m],O=Array.prototype.indexOf.call(_,f,void 0),z;(z=0<=O)&&Array.prototype.splice.call(_,O,1),z&&(rt(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function D(l,f,m,_){for(var O=0;O<l.length;++O){var z=l[O];if(!z.da&&z.listener==f&&z.capture==!!m&&z.ha==_)return O}return-1}var q="closure_lm_"+(1e6*Math.random()|0),Q={};function ie(l,f,m,_,O){if(Array.isArray(f)){for(var z=0;z<f.length;z++)ie(l,f[z],m,_,O);return null}return m=Ll(m),l&&l[G]?l.K(f,m,u(_)?!!_.capture:!!_,O):Qe(l,f,m,!1,_,O)}function Qe(l,f,m,_,O,z){if(!f)throw Error("Invalid event type");var re=u(O)?!!O.capture:!!O,We=zo(l);if(We||(l[q]=We=new Vt(l)),m=We.add(f,m,_,re,z),m.proxy)return m;if(_=It(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)le||(O=re),O===void 0&&(O=!1),l.addEventListener(f.toString(),_,O);else if(l.attachEvent)l.attachEvent(jo(f.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function It(){function l(m){return f.call(l.src,l.listener,m)}const f=Nd;return l}function fr(l,f,m,_,O){if(Array.isArray(f))for(var z=0;z<f.length;z++)fr(l,f[z],m,_,O);else _=u(_)?!!_.capture:!!_,m=Ll(m),l&&l[G]?(l=l.i,f=String(f).toString(),f in l.g&&(z=l.g[f],m=D(z,m,_,O),-1<m&&(rt(z[m]),Array.prototype.splice.call(z,m,1),z.length==0&&(delete l.g[f],l.h--)))):l&&(l=zo(l))&&(f=l.g[f.toString()],l=-1,f&&(l=D(f,m,_,O)),(m=-1<l?f[l]:null)&&Gn(m))}function Gn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[G])Di(f.i,l);else{var m=l.type,_=l.proxy;f.removeEventListener?f.removeEventListener(m,_,l.capture):f.detachEvent?f.detachEvent(jo(m),_):f.addListener&&f.removeListener&&f.removeListener(_),(m=zo(f))?(Di(m,l),m.h==0&&(m.src=null,f[q]=null)):rt(l)}}}function jo(l){return l in Q?Q[l]:Q[l]="on"+l}function Nd(l,f){if(l.da)l=!0;else{f=new Be(f,this);var m=l.listener,_=l.ha||l.src;l.fa&&Gn(l),l=m.call(_,f)}return l}function zo(l){return l=l[q],l instanceof Vt?l:null}var Bo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ll(l){return typeof l=="function"?l:(l[Bo]||(l[Bo]=function(f){return l.handleEvent(f)}),l[Bo])}function ut(){B.call(this),this.i=new Vt(this),this.M=this,this.F=null}E(ut,B),ut.prototype[G]=!0,ut.prototype.removeEventListener=function(l,f,m,_){fr(this,l,f,m,_)};function ht(l,f){var m,_=l.F;if(_)for(m=[];_;_=_.F)m.push(_);if(l=l.M,_=f.type||f,typeof f=="string")f=new X(f,l);else if(f instanceof X)f.target=f.target||l;else{var O=f;f=new X(_,l),S(f,O)}if(O=!0,m)for(var z=m.length-1;0<=z;z--){var re=f.g=m[z];O=Oi(re,_,!0,f)&&O}if(re=f.g=l,O=Oi(re,_,!0,f)&&O,O=Oi(re,_,!1,f)&&O,m)for(z=0;z<m.length;z++)re=f.g=m[z],O=Oi(re,_,!1,f)&&O}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],_=0;_<m.length;_++)rt(m[_]);delete l.g[f],l.h--}}this.F=null},ut.prototype.K=function(l,f,m,_){return this.i.add(String(l),f,!1,m,_)},ut.prototype.L=function(l,f,m,_){return this.i.add(String(l),f,!0,m,_)};function Oi(l,f,m,_){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,z=0;z<f.length;++z){var re=f[z];if(re&&!re.da&&re.capture==m){var We=re.listener,Pt=re.ha||re.src;re.fa&&Di(l.i,re),O=We.call(Pt,_)!==!1&&O}}return O&&!_.defaultPrevented}function As(l,f,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function Nn(l){l.g=As(()=>{l.g=null,l.i&&(l.i=!1,Nn(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Dn extends B{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Nn(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(l){B.call(this),this.h=l,this.g={}}E(Br,B);var Mi=[];function Nl(l){W(l.g,function(f,m){this.g.hasOwnProperty(m)&&Gn(f)},l),l.g={}}Br.prototype.N=function(){Br.aa.N.call(this),Nl(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wn=a.JSON.stringify,Dl=a.JSON.parse,Ol=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Is(){}Is.prototype.h=null;function Ml(l){return l.h||(l.h=l.i())}function qo(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cs(){X.call(this,"d")}E(Cs,X);function Vi(){X.call(this,"c")}E(Vi,X);var En={},ks=null;function Rs(){return ks=ks||new ut}En.La="serverreachability";function Ho(l){X.call(this,En.La,l)}E(Ho,X);function Fi(l){const f=Rs();ht(f,new Ho(f))}En.STAT_EVENT="statevent";function $o(l,f){X.call(this,En.STAT_EVENT,l),this.stat=f}E($o,X);function gt(l){const f=Rs();ht(f,new $o(f,l))}En.Ma="timingevent";function Ui(l,f){X.call(this,En.Ma,l),this.size=f}E(Ui,X);function qr(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function ji(){this.g=!0}ji.prototype.xa=function(){this.g=!1};function Dd(l,f,m,_,O,z){l.info(function(){if(l.g)if(z)for(var re="",We=z.split("&"),Pt=0;Pt<We.length;Pt++){var Ve=We[Pt].split("=");if(1<Ve.length){var Ut=Ve[0];Ve=Ve[1];var jt=Ut.split("_");re=2<=jt.length&&jt[1]=="type"?re+(Ut+"="+Ve+"&"):re+(Ut+"=redacted&")}}else re=null;else re=z;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+f+`
`+m+`
`+re})}function P(l,f,m,_,O,z,re){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+f+`
`+m+`
`+z+" "+re})}function N(l,f,m,_){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+K(l,m)+(_?" "+_:"")})}function F(l,f){l.info(function(){return"TIMEOUT: "+f})}ji.prototype.info=function(){};function K(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var _=m[l];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var z=O[0];if(z!="noop"&&z!="stop"&&z!="close")for(var re=1;re<O.length;re++)O[re]=""}}}}return wn(m)}catch{return f}}var oe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},he={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ve;function ne(){}E(ne,Is),ne.prototype.g=function(){return new XMLHttpRequest},ne.prototype.i=function(){return{}},ve=new ne;function _e(l,f,m,_){this.j=l,this.i=f,this.l=m,this.R=_||1,this.U=new Br(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new me}function me(){this.i=null,this.g="",this.h=!1}var Te={},Me={};function Ne(l,f,m){l.L=1,l.v=zl(hr(f)),l.m=m,l.P=!0,Fe(l,null)}function Fe(l,f){l.F=Date.now(),Ye(l),l.A=hr(l.v);var m=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),wg(m.i,"t",_),l.C=0,m=l.j.J,l.h=new me,l.g=Fg(l.j,m?f:null,!l.m),0<l.O&&(l.M=new Dn(p(l.Y,l,l.g),l.O)),f=l.U,m=l.g,_=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Mi[0]=O.toString()),O=Mi);for(var z=0;z<O.length;z++){var re=ie(m,O[z],_||f.handleEvent,!1,f.h||f);if(!re)break;f.g[re.key]=re}f=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Fi(),Dd(l.i,l.u,l.A,l.l,l.R,l.m)}_e.prototype.ca=function(l){l=l.target;const f=this.M;f&&pr(l)==3?f.j():this.Y(l)},_e.prototype.Y=function(l){try{if(l==this.g)e:{const jt=pr(this.g);var f=this.g.Ba();const Ls=this.g.Z();if(!(3>jt)&&(jt!=3||this.g&&(this.h.h||this.g.oa()||Cg(this.g)))){this.J||jt!=4||f==7||(f==8||0>=Ls?Fi(3):Fi(2)),Sn(this);var m=this.g.Z();this.X=m;t:if(De(this)){var _=Cg(this.g);l="";var O=_.length,z=pr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tn(this),Tn(this);var re="";break t}this.h.i=new a.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(_[f],{stream:!(z&&f==O-1)});_.length=0,this.h.g+=l,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=m==200,P(this.i,this.u,this.A,this.l,this.R,jt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var We,Pt=this.g;if((We=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(We)){var Ve=We;break t}}Ve=null}if(m=Ve)N(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yn(this,m);else{this.o=!1,this.s=3,gt(12),tn(this),Tn(this);break e}}if(this.P){m=!0;let Mn;for(;!this.J&&this.C<re.length;)if(Mn=wt(this,re),Mn==Me){jt==4&&(this.s=4,gt(14),m=!1),N(this.i,this.l,null,"[Incomplete Response]");break}else if(Mn==Te){this.s=4,gt(15),N(this.i,this.l,re,"[Invalid Chunk]"),m=!1;break}else N(this.i,this.l,Mn,null),Yn(this,Mn);if(De(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),jt!=4||re.length!=0||this.h.h||(this.s=1,gt(16),m=!1),this.o=this.o&&m,!m)N(this.i,this.l,re,"[Invalid Chunked Response]"),tn(this),Tn(this);else if(0<re.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Fd(Ut),Ut.M=!0,gt(11))}}else N(this.i,this.l,re,null),Yn(this,re);jt==4&&tn(this),this.o&&!this.J&&(jt==4?Dg(this.j,this):(this.o=!1,Ye(this)))}else cb(this.g),m==400&&0<re.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),tn(this),Tn(this)}}}catch{}finally{}};function De(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function wt(l,f){var m=l.C,_=f.indexOf(`
`,m);return _==-1?Me:(m=Number(f.substring(m,_)),isNaN(m)?Te:(_+=1,_+m>f.length?Me:(f=f.slice(_,_+m),l.C=_+m,f)))}_e.prototype.cancel=function(){this.J=!0,tn(this)};function Ye(l){l.S=Date.now()+l.I,Hr(l,l.I)}function Hr(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=qr(p(l.ba,l),f)}function Sn(l){l.B&&(a.clearTimeout(l.B),l.B=null)}_e.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(F(this.i,this.A),this.L!=2&&(Fi(),gt(17)),tn(this),this.s=2,Tn(this)):Hr(this,this.S-l)};function Tn(l){l.j.G==0||l.J||Dg(l.j,l)}function tn(l){Sn(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Nl(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Yn(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||be(m.h,l))){if(!l.K&&be(m.h,l)&&m.G==3){try{var _=m.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Kl(m),$l(m);else break e;Vd(m),gt(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=qr(p(m.Za,m),6e3));if(1>=qi(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else $i(m,11)}else if((l.K||m.g==l)&&Kl(m),!y(f))for(O=m.Da.g.parse(f),f=0;f<O.length;f++){let Ve=O[f];if(m.T=Ve[0],Ve=Ve[1],m.G==2)if(Ve[0]=="c"){m.K=Ve[1],m.ia=Ve[2];const Ut=Ve[3];Ut!=null&&(m.la=Ut,m.j.info("VER="+m.la));const jt=Ve[4];jt!=null&&(m.Aa=jt,m.j.info("SVER="+m.Aa));const Ls=Ve[5];Ls!=null&&typeof Ls=="number"&&0<Ls&&(_=1.5*Ls,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const Mn=l.g;if(Mn){const Ql=Mn.g?Mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ql){var z=_.h;z.g||Ql.indexOf("spdy")==-1&&Ql.indexOf("quic")==-1&&Ql.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Ke(z,z.h),z.h=null))}if(_.D){const Ud=Mn.g?Mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ud&&(_.ya=Ud,Xe(_.I,_.D,Ud))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var re=l;if(_.qa=Vg(_,_.J?_.ia:null,_.W),re.K){Ft(_.h,re);var We=re,Pt=_.L;Pt&&(We.I=Pt),We.B&&(Sn(We),Ye(We)),_.g=re}else Lg(_);0<m.i.length&&Wl(m)}else Ve[0]!="stop"&&Ve[0]!="close"||$i(m,7);else m.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?$i(m,7):Md(m):Ve[0]!="noop"&&m.l&&m.l.ta(Ve),m.v=0)}}Fi(4)}catch{}}var bn=class{constructor(l,f){this.g=l,this.map=f}};function zi(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bi(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function qi(l){return l.h?1:l.g?l.g.size:0}function be(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Ke(l,f){l.g?l.g.add(f):l.h=f}function Ft(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}zi.prototype.cancel=function(){if(this.i=$e(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function $e(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return I(l.i)}function On(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],m=l.length,_=0;_<m;_++)f.push(l[_]);return f}f=[],m=0;for(_ in l)f[m++]=l[_];return f}function Vl(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const _ in l)f[m++]=_;return f}}}function Fl(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=Vl(l),_=On(l),O=_.length,z=0;z<O;z++)f.call(void 0,_[z],m&&m[z],l)}var mg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YT(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var _=l[m].indexOf("="),O=null;if(0<=_){var z=l[m].substring(0,_);O=l[m].substring(_+1)}else z=l[m];f(z,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Hi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Hi){this.h=l.h,Ul(this,l.j),this.o=l.o,this.g=l.g,jl(this,l.s),this.l=l.l;var f=l.i,m=new Go;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),gg(this,m),this.m=l.m}else l&&(f=String(l).match(mg))?(this.h=!1,Ul(this,f[1]||"",!0),this.o=Wo(f[2]||""),this.g=Wo(f[3]||"",!0),jl(this,f[4]),this.l=Wo(f[5]||"",!0),gg(this,f[6]||"",!0),this.m=Wo(f[7]||"")):(this.h=!1,this.i=new Go(null,this.h))}Hi.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Ko(f,yg,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Ko(f,yg,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Ko(m,m.charAt(0)=="/"?ZT:JT,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Ko(m,tb)),l.join("")};function hr(l){return new Hi(l)}function Ul(l,f,m){l.j=m?Wo(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function jl(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function gg(l,f,m){f instanceof Go?(l.i=f,nb(l.i,l.h)):(m||(f=Ko(f,eb)),l.i=new Go(f,l.h))}function Xe(l,f,m){l.i.set(f,m)}function zl(l){return Xe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Wo(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ko(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,XT),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function XT(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var yg=/[#\/\?@]/g,JT=/[#\?:]/g,ZT=/[#\?]/g,eb=/[#\?@]/g,tb=/#/g;function Go(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function $r(l){l.g||(l.g=new Map,l.h=0,l.i&&YT(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Go.prototype,t.add=function(l,f){$r(this),this.i=null,l=Ps(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function vg(l,f){$r(l),f=Ps(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function _g(l,f){return $r(l),f=Ps(l,f),l.g.has(f)}t.forEach=function(l,f){$r(this),this.g.forEach(function(m,_){m.forEach(function(O){l.call(f,O,_,this)},this)},this)},t.na=function(){$r(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let _=0;_<f.length;_++){const O=l[_];for(let z=0;z<O.length;z++)m.push(f[_])}return m},t.V=function(l){$r(this);let f=[];if(typeof l=="string")_g(this,l)&&(f=f.concat(this.g.get(Ps(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},t.set=function(l,f){return $r(this),this.i=null,l=Ps(this,l),_g(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function wg(l,f,m){vg(l,f),0<m.length&&(l.i=null,l.g.set(Ps(l,f),I(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var _=f[m];const z=encodeURIComponent(String(_)),re=this.V(_);for(_=0;_<re.length;_++){var O=z;re[_]!==""&&(O+="="+encodeURIComponent(String(re[_]))),l.push(O)}}return this.i=l.join("&")};function Ps(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function nb(l,f){f&&!l.j&&($r(l),l.i=null,l.g.forEach(function(m,_){var O=_.toLowerCase();_!=O&&(vg(this,_),wg(this,O,m))},l)),l.j=f}function rb(l,f){const m=new ji;if(a.Image){const _=new Image;_.onload=v(Wr,m,"TestLoadImage: loaded",!0,f,_),_.onerror=v(Wr,m,"TestLoadImage: error",!1,f,_),_.onabort=v(Wr,m,"TestLoadImage: abort",!1,f,_),_.ontimeout=v(Wr,m,"TestLoadImage: timeout",!1,f,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else f(!1)}function ib(l,f){const m=new ji,_=new AbortController,O=setTimeout(()=>{_.abort(),Wr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:_.signal}).then(z=>{clearTimeout(O),z.ok?Wr(m,"TestPingServer: ok",!0,f):Wr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Wr(m,"TestPingServer: error",!1,f)})}function Wr(l,f,m,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(m)}catch{}}function sb(){this.g=new Ol}function ob(l,f,m){const _=m||"";try{Fl(l,function(O,z){let re=O;u(O)&&(re=wn(O)),f.push(_+z+"="+encodeURIComponent(re))})}catch(O){throw f.push(_+"type="+encodeURIComponent("_badmap")),O}}function Bl(l){this.l=l.Ub||null,this.j=l.eb||!1}E(Bl,Is),Bl.prototype.g=function(){return new ql(this.l,this.j)},Bl.prototype.i=function(l){return function(){return l}}({});function ql(l,f){ut.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(ql,ut),t=ql.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Yo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Yo(this)),this.g&&(this.readyState=3,Yo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Qo(this):Yo(this),this.readyState==3&&Eg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Qo(this))},t.Qa=function(l){this.g&&(this.response=l,Qo(this))},t.ga=function(){this.g&&Qo(this)};function Qo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Yo(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function Yo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ql.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Sg(l){let f="";return W(l,function(m,_){f+=_,f+=":",f+=m,f+=`\r
`}),f}function Od(l,f,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=Sg(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Xe(l,f,m))}function dt(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(dt,ut);var ab=/^https?$/i,lb=["POST","PUT"];t=dt.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ve.g(),this.v=this.o?Ml(this.o):Ml(ve),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(z){Tg(this,z);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)m.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const z of _.keys())m.set(z,_.get(z));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(z=>z.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(lb,f,void 0))||_||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,re]of m)this.g.setRequestHeader(z,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ig(this),this.u=!0,this.g.send(l),this.u=!1}catch(z){Tg(this,z)}};function Tg(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,bg(l),Hl(l)}function bg(l){l.A||(l.A=!0,ht(l,"complete"),ht(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ht(this,"complete"),ht(this,"abort"),Hl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hl(this,!0)),dt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ag(this):this.bb())},t.bb=function(){Ag(this)};function Ag(l){if(l.h&&typeof o<"u"&&(!l.v[1]||pr(l)!=4||l.Z()!=2)){if(l.u&&pr(l)==4)As(l.Ea,0,l);else if(ht(l,"readystatechange"),pr(l)==4){l.h=!1;try{const re=l.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var _;if(_=re===0){var O=String(l.D).match(mg)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),_=!ab.test(O?O.toLowerCase():"")}m=_}if(m)ht(l,"complete"),ht(l,"success");else{l.m=6;try{var z=2<pr(l)?l.g.statusText:""}catch{z=""}l.l=z+" ["+l.Z()+"]",bg(l)}}finally{Hl(l)}}}}function Hl(l,f){if(l.g){Ig(l);const m=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ht(l,"ready");try{m.onreadystatechange=_}catch{}}}function Ig(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function pr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<pr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Dl(f)}};function Cg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function cb(l){const f={};l=(l.g&&2<=pr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(y(l[_]))continue;var m=R(l[_]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const z=f[O]||[];f[O]=z,z.push(m)}b(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xo(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function kg(l){this.Aa=0,this.i=[],this.j=new ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xo("baseRetryDelayMs",5e3,l),this.cb=Xo("retryDelaySeedMs",1e4,l),this.Wa=Xo("forwardChannelMaxRetries",2,l),this.wa=Xo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(l&&l.concurrentRequestLimit),this.Da=new sb,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=kg.prototype,t.la=8,t.G=1,t.connect=function(l,f,m,_){gt(0),this.W=l,this.H=f||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=Vg(this,null,this.W),Wl(this)};function Md(l){if(Rg(l),l.G==3){var f=l.U++,m=hr(l.I);if(Xe(m,"SID",l.K),Xe(m,"RID",f),Xe(m,"TYPE","terminate"),Jo(l,m),f=new _e(l,l.j,f),f.L=2,f.v=zl(hr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=Fg(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ye(f)}Mg(l)}function $l(l){l.g&&(Fd(l),l.g.cancel(),l.g=null)}function Rg(l){$l(l),l.u&&(a.clearTimeout(l.u),l.u=null),Kl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Wl(l){if(!Bi(l.h)&&!l.s){l.s=!0;var f=l.Ga;ct||de(),ee||(ct(),ee=!0),te.add(f,l),l.B=0}}function ub(l,f){return qi(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=qr(p(l.Ga,l,f),Og(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new _e(this,this.j,l);let z=this.o;if(this.S&&(z?(z=g(z),S(z,this.S)):z=this.S),this.m!==null||this.O||(O.H=z,z=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=xg(this,O,f),m=hr(this.I),Xe(m,"RID",l),Xe(m,"CVER",22),this.D&&Xe(m,"X-HTTP-Session-Id",this.D),Jo(this,m),z&&(this.O?f="headers="+encodeURIComponent(String(Sg(z)))+"&"+f:this.m&&Od(m,this.m,z)),Ke(this.h,O),this.Ua&&Xe(m,"TYPE","init"),this.P?(Xe(m,"$req",f),Xe(m,"SID","null"),O.T=!0,Ne(O,m,null)):Ne(O,m,f),this.G=2}}else this.G==3&&(l?Pg(this,l):this.i.length==0||Bi(this.h)||Pg(this))};function Pg(l,f){var m;f?m=f.l:m=l.U++;const _=hr(l.I);Xe(_,"SID",l.K),Xe(_,"RID",m),Xe(_,"AID",l.T),Jo(l,_),l.m&&l.o&&Od(_,l.m,l.o),m=new _e(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=xg(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ke(l.h,m),Ne(m,_,f)}function Jo(l,f){l.H&&W(l.H,function(m,_){Xe(f,_,m)}),l.l&&Fl({},function(m,_){Xe(f,_,m)})}function xg(l,f,m){m=Math.min(l.i.length,m);var _=l.l?p(l.l.Na,l.l,l):null;e:{var O=l.i;let z=-1;for(;;){const re=["count="+m];z==-1?0<m?(z=O[0].g,re.push("ofs="+z)):z=0:re.push("ofs="+z);let We=!0;for(let Pt=0;Pt<m;Pt++){let Ve=O[Pt].g;const Ut=O[Pt].map;if(Ve-=z,0>Ve)z=Math.max(0,O[Pt].g-100),We=!1;else try{ob(Ut,re,"req"+Ve+"_")}catch{_&&_(Ut)}}if(We){_=re.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,_}function Lg(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;ct||de(),ee||(ct(),ee=!0),te.add(f,l),l.v=0}}function Vd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=qr(p(l.Fa,l),Og(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Ng(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=qr(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),$l(this),Ng(this))};function Fd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Ng(l){l.g=new _e(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=hr(l.qa);Xe(f,"RID","rpc"),Xe(f,"SID",l.K),Xe(f,"AID",l.T),Xe(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Xe(f,"TO",l.ja),Xe(f,"TYPE","xmlhttp"),Jo(l,f),l.m&&l.o&&Od(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=zl(hr(f)),m.m=null,m.P=!0,Fe(m,l)}t.Za=function(){this.C!=null&&(this.C=null,$l(this),Vd(this),gt(19))};function Kl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Dg(l,f){var m=null;if(l.g==f){Kl(l),Fd(l),l.g=null;var _=2}else if(be(l.h,f))m=f.D,Ft(l.h,f),_=1;else return;if(l.G!=0){if(f.o)if(_==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;_=Rs(),ht(_,new Ui(_,m)),Wl(l)}else Lg(l);else if(O=f.s,O==3||O==0&&0<f.X||!(_==1&&ub(l,f)||_==2&&Vd(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),O){case 1:$i(l,5);break;case 4:$i(l,10);break;case 3:$i(l,6);break;default:$i(l,2)}}}function Og(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function $i(l,f){if(l.j.info("Error code "+f),f==2){var m=p(l.fb,l),_=l.Xa;const O=!_;_=new Hi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ul(_,"https"),zl(_),O?rb(_.toString(),m):ib(_.toString(),m)}else gt(2);l.G=0,l.l&&l.l.sa(f),Mg(l),Rg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Mg(l){if(l.G=0,l.ka=[],l.l){const f=$e(l.h);(f.length!=0||l.i.length!=0)&&(k(l.ka,f),k(l.ka,l.i),l.h.i.length=0,I(l.i),l.i.length=0),l.l.ra()}}function Vg(l,f,m){var _=m instanceof Hi?hr(m):new Hi(m);if(_.g!="")f&&(_.g=f+"."+_.g),jl(_,_.s);else{var O=a.location;_=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var z=new Hi(null);_&&Ul(z,_),f&&(z.g=f),O&&jl(z,O),m&&(z.l=m),_=z}return m=l.D,f=l.ya,m&&f&&Xe(_,m,f),Xe(_,"VER",l.la),Jo(l,_),_}function Fg(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new dt(new Bl({eb:m})):new dt(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ug(){}t=Ug.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Gl(){}Gl.prototype.g=function(l,f){return new cn(l,f)};function cn(l,f){ut.call(this),this.g=new kg(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!y(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!y(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new xs(this)}E(cn,ut),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Md(this.g)},cn.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=wn(l),l=m);f.i.push(new bn(f.Ya++,l)),f.G==3&&Wl(f)},cn.prototype.N=function(){this.g.l=null,delete this.j,Md(this.g),delete this.g,cn.aa.N.call(this)};function jg(l){Cs.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}E(jg,Cs);function zg(){Vi.call(this),this.status=1}E(zg,Vi);function xs(l){this.g=l}E(xs,Ug),xs.prototype.ua=function(){ht(this.g,"a")},xs.prototype.ta=function(l){ht(this.g,new jg(l))},xs.prototype.sa=function(l){ht(this.g,new zg)},xs.prototype.ra=function(){ht(this.g,"b")},Gl.prototype.createWebChannel=Gl.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,$S=function(){return new Gl},HS=function(){return Rs()},qS=En,Mh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oe.NO_ERROR=0,oe.TIMEOUT=8,oe.HTTP_ERROR=6,Uc=oe,he.COMPLETE="complete",BS=he,qo.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",ut.prototype.listen=ut.prototype.K,ya=qo,dt.prototype.listenOnce=dt.prototype.L,dt.prototype.getLastError=dt.prototype.Ka,dt.prototype.getLastErrorCode=dt.prototype.Ba,dt.prototype.getStatus=dt.prototype.Z,dt.prototype.getResponseJson=dt.prototype.Oa,dt.prototype.getResponseText=dt.prototype.oa,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Ha,zS=dt}).apply(typeof pc<"u"?pc:typeof self<"u"?self:typeof window<"u"?window:{});const Xv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new ym("@firebase/firestore");function Os(){return gs.logLevel}function ae(t,...e){if(gs.logLevel<=Re.DEBUG){const n=e.map(xm);gs.debug(`Firestore (${Oo}): ${t}`,...n)}}function xr(t,...e){if(gs.logLevel<=Re.ERROR){const n=e.map(xm);gs.error(`Firestore (${Oo}): ${t}`,...n)}}function wo(t,...e){if(gs.logLevel<=Re.WARN){const n=e.map(xm);gs.warn(`Firestore (${Oo}): ${t}`,...n)}}function xm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t="Unexpected state"){const e=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: `+t;throw xr(e),new Error(e)}function Ue(t,e){t||Ee()}function Ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends Vr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ht.UNAUTHENTICATED))}shutdown(){}}class l2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class c2{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ue(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _i,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _i)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string"),new WS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ht(e)}}class u2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class d2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new u2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class h2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ue(this.o===void 0);const r=s=>{s.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.R=n.token,new f2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=p2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function Eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{static now(){return bt.fromMillis(Date.now())}static fromDate(e){return bt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new bt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ge(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ge(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ge(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new bt(0,0))}static max(){return new Se(new bt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ee(),r===void 0?r=e.length-n:r>e.length-n&&Ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class nt extends sl{construct(e,n,r){return new nt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ge(Y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new nt(n)}static emptyPath(){return new nt([])}}const m2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends sl{construct(e,n,r){return new Nt(e,n,r)}static isValidIdentifier(e){return m2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ge(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ge(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ge(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ge(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(n)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(nt.fromString(e))}static fromName(e){return new ye(nt.fromString(e).popFirst(5))}static empty(){return new ye(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new nt(e.slice()))}}function g2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Se.fromTimestamp(r===1e9?new bt(n+1,0):new bt(n,r));return new Ti(i,ye.empty(),e)}function y2(t){return new Ti(t.readTime,t.key,-1)}class Ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ti(Se.min(),ye.empty(),-1)}static max(){return new Ti(Se.max(),ye.empty(),-1)}}function v2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ye.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t){if(t.code!==Y.FAILED_PRECONDITION||t.message!==_2)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function E2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}pd.oe=-1;function md(t){return t==null}function xu(t){return t===0&&1/t==-1/0}function S2(t){return typeof t=="number"&&Number.isInteger(t)&&!xu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jv(e)),e=b2(t.get(n),e);return Jv(e)}function b2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Jv(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function GS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){this.comparator=e,this.root=n||Lt.EMPTY}insert(e,n){return new lt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mc(this.root,e,this.comparator,!1)}getReverseIterator(){return new mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mc(this.root,e,this.comparator,!0)}}class mc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Lt.RED,this.left=i??Lt.EMPTY,this.right=s??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new e_(this.data.getIterator())}getIteratorFrom(e){return new e_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new At(this.comparator);return n.data=e,n}}class e_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new qn([])}unionWith(e){let n=new At(Nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new QS("Invalid base64 string: "+s):s}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const A2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=A2.exec(t);if(Ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pt(t.seconds),nanos:pt(t.nanos)}}function pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ai(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gd(t){const e=t.mapValue.fields.__previous_value__;return Lm(e)?gd(e):e}function ol(t){const e=bi(t.mapValue.fields.__local_write_time__.timestampValue);return new bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class al{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new al("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lm(t)?4:k2(t)?9007199254740991:C2(t)?10:11:Ee()}function ur(t,e){if(t===e)return!0;const n=Ii(t);if(n!==Ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ol(t).isEqual(ol(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=bi(i.timestampValue),a=bi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ai(i.bytesValue).isEqual(Ai(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return pt(i.geoPointValue.latitude)===pt(s.geoPointValue.latitude)&&pt(i.geoPointValue.longitude)===pt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return pt(i.integerValue)===pt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=pt(i.doubleValue),a=pt(s.doubleValue);return o===a?xu(o)===xu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Eo(t.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Zv(o)!==Zv(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ur(o[c],a[c])))return!1;return!0}(t,e);default:return Ee()}}function ll(t,e){return(t.values||[]).find(n=>ur(n,e))!==void 0}function So(t,e){if(t===e)return 0;const n=Ii(t),r=Ii(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=pt(s.integerValue||s.doubleValue),c=pt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return t_(t.timestampValue,e.timestampValue);case 4:return t_(ol(t),ol(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ai(s),c=Ai(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=xe(a[u],c[u]);if(h!==0)return h}return xe(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=xe(pt(s.latitude),pt(o.latitude));return a!==0?a:xe(pt(s.longitude),pt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return n_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,h;const d=s.fields||{},p=o.fields||{},v=(a=d.value)===null||a===void 0?void 0:a.arrayValue,E=(c=p.value)===null||c===void 0?void 0:c.arrayValue,I=xe(((u=v==null?void 0:v.values)===null||u===void 0?void 0:u.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return I!==0?I:n_(v,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===gc.mapValue&&o===gc.mapValue)return 0;if(s===gc.mapValue)return 1;if(o===gc.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const p=xe(c[d],h[d]);if(p!==0)return p;const v=So(a[c[d]],u[h[d]]);if(v!==0)return v}return xe(c.length,h.length)}(t.mapValue,e.mapValue);default:throw Ee()}}function t_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=bi(t),r=bi(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function n_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=So(n[i],r[i]);if(s)return s}return xe(n.length,r.length)}function To(t){return Vh(t)}function Vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=bi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ai(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ye.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Vh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vh(n.fields[o])}`;return i+"}"}(t.mapValue):Ee()}function jc(t){switch(Ii(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gd(t);return e?16+jc(e):16;case 5:return 2*t.stringValue.length;case 6:return Ai(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+jc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Es(r.fields,(s,o)=>{i+=s.length+jc(o)}),i}(t.mapValue);default:throw Ee()}}function Fh(t){return!!t&&"integerValue"in t}function Nm(t){return!!t&&"arrayValue"in t}function r_(t){return!!t&&"nullValue"in t}function i_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zc(t){return!!t&&"mapValue"in t}function C2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function xa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function k2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(n)}setAll(e){let n=Nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=xa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Cn(xa(this.value))}}function YS(t){const e=[];return Es(t.fields,(n,r)=>{const i=new Nt([n]);if(zc(r)){const s=YS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Wt(e,0,Se.min(),Se.min(),Se.min(),Cn.empty(),0)}static newFoundDocument(e,n,r,i){return new Wt(e,1,n,Se.min(),r,i,0)}static newNoDocument(e,n){return new Wt(e,2,n,Se.min(),Se.min(),Cn.empty(),0)}static newUnknownDocument(e,n){return new Wt(e,3,n,Se.min(),Se.min(),Cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.position=e,this.inclusive=n}}function s_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ye.comparator(ye.fromName(o.referenceValue),n.key):r=So(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function o_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ur(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n="asc"){this.field=e,this.dir=n}}function R2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{}class St extends XS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new x2(e,n,r):n==="array-contains"?new D2(e,r):n==="in"?new O2(e,r):n==="not-in"?new M2(e,r):n==="array-contains-any"?new V2(e,r):new St(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new L2(e,r):new N2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(So(n,this.value)):n!==null&&Ii(this.value)===Ii(n)&&this.matchesComparison(So(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends XS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new dr(e,n)}matches(e){return JS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function JS(t){return t.op==="and"}function ZS(t){return P2(t)&&JS(t)}function P2(t){for(const e of t.filters)if(e instanceof dr)return!1;return!0}function Uh(t){if(t instanceof St)return t.field.canonicalString()+t.op.toString()+To(t.value);if(ZS(t))return t.filters.map(e=>Uh(e)).join(",");{const e=t.filters.map(n=>Uh(n)).join(",");return`${t.op}(${e})`}}function e1(t,e){return t instanceof St?function(r,i){return i instanceof St&&r.op===i.op&&r.field.isEqual(i.field)&&ur(r.value,i.value)}(t,e):t instanceof dr?function(r,i){return i instanceof dr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&e1(o,i.filters[a]),!0):!1}(t,e):void Ee()}function t1(t){return t instanceof St?function(n){return`${n.field.canonicalString()} ${n.op} ${To(n.value)}`}(t):t instanceof dr?function(n){return n.op.toString()+" {"+n.getFilters().map(t1).join(" ,")+"}"}(t):"Filter"}class x2 extends St{constructor(e,n,r){super(e,n,r),this.key=ye.fromName(r.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.matchesComparison(n)}}class L2 extends St{constructor(e,n){super(e,"in",n),this.keys=n1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class N2 extends St{constructor(e,n){super(e,"not-in",n),this.keys=n1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function n1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ye.fromName(r.referenceValue))}class D2 extends St{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nm(n)&&ll(n.arrayValue,this.value)}}class O2 extends St{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ll(this.value.arrayValue,n)}}class M2 extends St{constructor(e,n){super(e,"not-in",n)}matches(e){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ll(this.value.arrayValue,n)}}class V2 extends St{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ll(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function a_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new F2(t,e,n,r,i,s,o)}function Dm(t){const e=Ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),md(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>To(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>To(r)).join(",")),e.ue=n}return e.ue}function Om(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!R2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!e1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!o_(t.startAt,e.startAt)&&o_(t.endAt,e.endAt)}function jh(t){return ye.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function U2(t,e,n,r,i,s,o,a){return new yd(t,e,n,r,i,s,o,a)}function Mm(t){return new yd(t)}function l_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function j2(t){return t.collectionGroup!==null}function La(t){const e=Ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new At(Nt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Nu(s,r))}),n.has(Nt.keyField().canonicalString())||e.ce.push(new Nu(Nt.keyField(),r))}return e.ce}function ar(t){const e=Ae(t);return e.le||(e.le=z2(e,La(t))),e.le}function z2(t,e){if(t.limitType==="F")return a_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nu(i.field,s)});const n=t.endAt?new Lu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lu(t.startAt.position,t.startAt.inclusive):null;return a_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zh(t,e,n){return new yd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vd(t,e){return Om(ar(t),ar(e))&&t.limitType===e.limitType}function r1(t){return`${Dm(ar(t))}|lt:${t.limitType}`}function Ms(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>t1(i)).join(", ")}]`),md(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>To(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>To(i)).join(",")),`Target(${r})`}(ar(t))}; limitType=${t.limitType})`}function _d(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ye.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of La(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=s_(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,La(r),i)||r.endAt&&!function(o,a,c){const u=s_(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,La(r),i))}(t,e)}function B2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function i1(t){return(e,n)=>{let r=!1;for(const i of La(t)){const s=q2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function q2(t,e,n){const r=t.field.isKeyField()?ye.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?So(c,u):Ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return GS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=new lt(ye.comparator);function Lr(){return H2}const s1=new lt(ye.comparator);function va(...t){let e=s1;for(const n of t)e=e.insert(n.key,n);return e}function o1(t){let e=s1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ns(){return Na()}function a1(){return Na()}function Na(){return new Ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const $2=new lt(ye.comparator),W2=new At(ye.comparator);function Pe(...t){let e=W2;for(const n of t)e=e.add(n);return e}const K2=new At(xe);function G2(){return K2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xu(e)?"-0":e}}function l1(t){return{integerValue:""+t}}function Q2(t,e){return S2(e)?l1(e):Vm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this._=void 0}}function Y2(t,e,n){return t instanceof Du?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Lm(s)&&(s=gd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof cl?u1(t,e):t instanceof ul?d1(t,e):function(i,s){const o=c1(i,s),a=c_(o)+c_(i.Pe);return Fh(o)&&Fh(i.Pe)?l1(a):Vm(i.serializer,a)}(t,e)}function X2(t,e,n){return t instanceof cl?u1(t,e):t instanceof ul?d1(t,e):n}function c1(t,e){return t instanceof Ou?function(r){return Fh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Du extends wd{}class cl extends wd{constructor(e){super(),this.elements=e}}function u1(t,e){const n=f1(e);for(const r of t.elements)n.some(i=>ur(i,r))||n.push(r);return{arrayValue:{values:n}}}class ul extends wd{constructor(e){super(),this.elements=e}}function d1(t,e){let n=f1(e);for(const r of t.elements)n=n.filter(i=>!ur(i,r));return{arrayValue:{values:n}}}class Ou extends wd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function c_(t){return pt(t.integerValue||t.doubleValue)}function f1(t){return Nm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function J2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof cl&&i instanceof cl||r instanceof ul&&i instanceof ul?Eo(r.elements,i.elements,ur):r instanceof Ou&&i instanceof Ou?ur(r.Pe,i.Pe):r instanceof Du&&i instanceof Du}(t.transform,e.transform)}class Z2{constructor(e,n){this.version=e,this.transformResults=n}}class lr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new lr}static exists(e){return new lr(void 0,e)}static updateTime(e){return new lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ed{}function h1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new m1(t.key,lr.none()):new Il(t.key,t.data,lr.none());{const n=t.data,r=Cn.empty();let i=new At(Nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ts(t.key,r,new qn(i.toArray()),lr.none())}}function eL(t,e,n){t instanceof Il?function(i,s,o){const a=i.value.clone(),c=d_(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ts?function(i,s,o){if(!Bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=d_(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(p1(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Da(t,e,n,r){return t instanceof Il?function(s,o,a,c){if(!Bc(s.precondition,o))return a;const u=s.value.clone(),h=f_(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ts?function(s,o,a,c){if(!Bc(s.precondition,o))return a;const u=f_(s.fieldTransforms,c,o),h=o.data;return h.setAll(p1(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function tL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=c1(r.transform,i||null);s!=null&&(n===null&&(n=Cn.empty()),n.set(r.field,s))}return n||null}function u_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Eo(r,i,(s,o)=>J2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Il extends Ed{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ts extends Ed{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function p1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function d_(t,e,n){const r=new Map;Ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,X2(o,a,n[i]))}return r}function f_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Y2(s,o,e))}return r}class m1 extends Ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nL extends Ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&eL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=a1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=h1(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(n,r)=>u_(n,r))&&Eo(this.baseMutations,e.baseMutations,(n,r)=>u_(n,r))}}class Fm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ue(e.mutations.length===r.length);let i=function(){return $2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Le;function oL(t){switch(t){default:return Ee();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0}}function g1(t){if(t===void 0)return xr("GRPC error has no .code"),Y.UNKNOWN;switch(t){case yt.OK:return Y.OK;case yt.CANCELLED:return Y.CANCELLED;case yt.UNKNOWN:return Y.UNKNOWN;case yt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case yt.INTERNAL:return Y.INTERNAL;case yt.UNAVAILABLE:return Y.UNAVAILABLE;case yt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case yt.NOT_FOUND:return Y.NOT_FOUND;case yt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case yt.ABORTED:return Y.ABORTED;case yt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case yt.DATA_LOSS:return Y.DATA_LOSS;default:return Ee()}}(Le=yt||(yt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL=new os([4294967295,4294967295],0);function h_(t){const e=aL().encode(t),n=new jS;return n.update(e),new Uint8Array(n.digest())}function p_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new os([n,r],0),new os([i,s],0)]}class Um{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=os.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(os.fromNumber(r)));return i.compare(lL)===1&&(i=new os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=h_(e),[r,i]=p_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Um(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=h_(e),[r,i]=p_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Cl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sd(Se.min(),i,new lt(xe),Lr(),Pe())}}class Cl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Cl(r,n,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class y1{constructor(e,n){this.targetId=e,this.me=n}}class v1{constructor(e,n,r=Mt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class m_{constructor(){this.fe=0,this.ge=g_(),this.pe=Mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),n=Pe(),r=Pe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Ee()}}),new Cl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=g_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class cL{constructor(e){this.Le=e,this.Be=new Map,this.ke=Lr(),this.qe=yc(),this.Qe=yc(),this.Ke=new lt(xe)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:Ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(jh(s))if(r===0){const o=new ye(s.path);this.We(n,o,Wt.newNoDocument(o,Se.min()))}else Ue(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ai(r).toUint8Array()}catch(c){if(c instanceof QS)return wo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Um(o,i,s)}catch(c){return wo(c instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&jh(a.target)){const c=new ye(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Wt.newNoDocument(c,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Pe();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Sd(e,n,this.Ke,this.ke,r);return this.ke=Lr(),this.qe=yc(),this.Qe=yc(),this.Ke=new lt(xe),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new m_,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new At(xe),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new At(xe),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new m_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yc(){return new lt(ye.comparator)}function g_(){return new lt(ye.comparator)}const uL={asc:"ASCENDING",desc:"DESCENDING"},dL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fL={and:"AND",or:"OR"};class hL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bh(t,e){return t.useProto3Json||md(e)?e:{value:e}}function Mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pL(t,e){return Mu(t,e.toTimestamp())}function cr(t){return Ue(!!t),Se.fromTimestamp(function(n){const r=bi(n);return new bt(r.seconds,r.nanos)}(t))}function jm(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(i){return new nt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function w1(t){const e=nt.fromString(t);return Ue(A1(e)),e}function Hh(t,e){return jm(t.databaseId,e.path)}function Tf(t,e){const n=w1(e);if(n.get(1)!==t.databaseId.projectId)throw new ge(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ge(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ye(S1(n))}function E1(t,e){return jm(t.databaseId,e)}function mL(t){const e=w1(t);return e.length===4?nt.emptyPath():S1(e)}function $h(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function S1(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function y_(t,e,n){return{name:Hh(t,e),fields:n.value.mapValue.fields}}function gL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(Ue(h===void 0||typeof h=="string"),Mt.fromBase64String(h||"")):(Ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Mt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?Y.UNKNOWN:g1(u.code);return new ge(h,u.message||"")}(o);n=new v1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Tf(t,r.document.name),s=cr(r.document.updateTime),o=r.document.createTime?cr(r.document.createTime):Se.min(),a=new Cn({mapValue:{fields:r.document.fields}}),c=Wt.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new qc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Tf(t,r.document),s=r.readTime?cr(r.readTime):Se.min(),o=Wt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new qc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Tf(t,r.document),s=r.removedTargetIds||[];n=new qc([],s,i,null)}else{if(!("filter"in e))return Ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sL(i,s),a=r.targetId;n=new y1(a,o)}}return n}function yL(t,e){let n;if(e instanceof Il)n={update:y_(t,e.key,e.value)};else if(e instanceof m1)n={delete:Hh(t,e.key)};else if(e instanceof Ts)n={update:y_(t,e.key,e.data),updateMask:IL(e.fieldMask)};else{if(!(e instanceof nL))return Ee();n={verify:Hh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Du)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof cl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ul)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ou)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:pL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ee()}(t,e.precondition)),n}function vL(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?cr(i.updateTime):cr(s);return o.isEqual(Se.min())&&(o=cr(s)),new Z2(o,i.transformResults||[])}(n,e))):[]}function _L(t,e){return{documents:[E1(t,e.path)]}}function wL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=E1(t,i);const s=function(u){if(u.length!==0)return b1(dr.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Vs(p.field),direction:TL(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Bh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:i}}function EL(t){let e=mL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ue(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const p=T1(d);return p instanceof dr&&ZS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(E){return new Nu(Fs(E.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,md(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(d){const p=!!d.before,v=d.values||[];return new Lu(v,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,v=d.values||[];return new Lu(v,p)}(n.endAt)),U2(e,i,o,s,a,"F",c,u)}function SL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function T1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fs(n.unaryFilter.field);return St.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fs(n.unaryFilter.field);return St.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fs(n.unaryFilter.field);return St.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fs(n.unaryFilter.field);return St.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(t):t.fieldFilter!==void 0?function(n){return St.create(Fs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dr.create(n.compositeFilter.filters.map(r=>T1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ee()}}(n.compositeFilter.op))}(t):Ee()}function TL(t){return uL[t]}function bL(t){return dL[t]}function AL(t){return fL[t]}function Vs(t){return{fieldPath:t.canonicalString()}}function Fs(t){return Nt.fromServerFormat(t.fieldPath)}function b1(t){return t instanceof St?function(n){if(n.op==="=="){if(i_(n.value))return{unaryFilter:{field:Vs(n.field),op:"IS_NAN"}};if(r_(n.value))return{unaryFilter:{field:Vs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(i_(n.value))return{unaryFilter:{field:Vs(n.field),op:"IS_NOT_NAN"}};if(r_(n.value))return{unaryFilter:{field:Vs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vs(n.field),op:bL(n.op),value:n.value}}}(t):t instanceof dr?function(n){const r=n.getFilters().map(i=>b1(i));return r.length===1?r[0]:{compositeFilter:{op:AL(n.op),filters:r}}}(t):Ee()}function IL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function A1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,r,i,s=Se.min(),o=Se.min(),a=Mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new oi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e){this.ht=e}}function kL(t){const e=EL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(){this.ln=new PL}addToCollectionParentIndex(e,n){return this.ln.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Ti.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class PL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new At(nt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new At(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(41943040,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new bo(0)}static Qn(){return new bo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __([t,e],[n,r]){const i=xe(t,n);return i===0?xe(e,r):i}class xL{constructor(e){this.Gn=e,this.buffer=new At(__),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();__(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LL{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vo(n)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Mo(n)}await this.Yn(3e5)})}}class NL{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(pd.oe);const r=new xL(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(v_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),v_):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Os()<=Re.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function DL(t,e){return new NL(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(){this.changes=new Ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Da(r.mutation,i,qn.empty(),bt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Pe()){const i=ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=va();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Lr();const o=Na(),a=function(){return Na()}();return n.forEach((c,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Ts)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Da(h.mutation,u,h.mutation.getFieldMask(),bt.now())):o.set(u.key,qn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new ML(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Na();let i=new lt((o,a)=>o-a),s=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||qn.empty();h=a.applyToLocalView(u,h),r.set(c,h);const d=(i.get(a.batchId)||Pe()).add(c);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,d=a1();h.forEach(p=>{if(!s.has(p)){const v=h1(n.get(p),r.get(p));v!==null&&d.set(p,v),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ye.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):j2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(ns());let a=-1,c=s;return o.next(u=>$.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,Pe())).next(h=>({batchId:a,changes:o1(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ye(n)).next(r=>{let i=va();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=va();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,c=>{const u=function(d,p){return new yd(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Wt.newInvalidDocument(h)))});let a=va();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&Da(h.mutation,u,qn.empty(),bt.now()),_d(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return $.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:cr(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:kL(i.bundledQuery),readTime:cr(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(){this.overlays=new lt(ye.comparator),this.Er=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ns();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=ns(),s=n.length+1,o=new ye(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new lt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=ns(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ns(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return $.resolve(a)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iL(n,r));let s=this.Er.get(n);s===void 0&&(s=Pe(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.dr=new At(Ct.Ar),this.Rr=new At(Ct.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ct(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ct(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ye(new nt([])),r=new Ct(n,e),i=new Ct(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ye(new nt([])),r=new Ct(n,e),i=new Ct(n,e+1);let s=Pe();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ct(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ct{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ye.comparator(e.key,n.key)||xe(e.br,n.br)}static Vr(e,n){return xe(e.br,n.br)||ye.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new At(Ct.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.vr=this.vr.add(new Ct(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ct(n,0),i=new Ct(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const a=this.Cr(o.br);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new At(xe);return n.forEach(i=>{const s=new Ct(i,0),o=new Ct(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{r=r.add(a.br)})}),$.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ye.isDocumentKey(s)||(s=s.child(""));const o=new Ct(new ye(s),0);let a=new At(xe);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.br)),!0)},o),$.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ue(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return $.forEach(n.mutations,i=>{const s=new Ct(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ct(n,0),i=this.vr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e){this.Nr=e,this.docs=function(){return new lt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Wt.newInvalidDocument(n))}getEntries(e,n){let r=Lr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Wt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Lr();const o=n.path,a=new ye(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||v2(y2(h),r)<=0||(i.has(h.key)||_d(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Ee()}Lr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qL(this)}getSize(e){return $.resolve(this.size)}}class qL extends OL{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.persistence=e,this.Br=new Ss(n=>Dm(n),Om),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.kr=0,this.qr=new zm,this.targetCount=0,this.Qr=bo.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),$.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new bo(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Un(n),$.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n){this.Kr={},this.overlays={},this.$r=new pd(0),this.Ur=!1,this.Ur=!0,this.Wr=new jL,this.referenceDelegate=e(this),this.Gr=new HL(this),this.indexManager=new RL,this.remoteDocumentCache=function(i){return new BL(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new CL(n),this.jr=new FL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new zL(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ae("MemoryPersistence","Starting transaction:",e);const i=new $L(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return $.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class $L extends w2{constructor(e){super(),this.currentSequenceNumber=e}}class Bm{constructor(e){this.persistence=e,this.Zr=new zm,this.Xr=null}static ei(e){return new Bm(e)}get ti(){if(this.Xr)return this.Xr;throw Ee()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),$.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,r=>{const i=ye.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,Se.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return $.or([()=>$.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Vu{constructor(e,n){this.persistence=e,this.ri=new Ss(r=>T2(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=DL(this,n)}static ei(e,n){return new Vu(e,n)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return $.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?$.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Se.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=jc(e.data.value)),n}ir(e,n,r){return $.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return $.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=Pe(),i=Pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Ck()?8:E2(Gt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new WL;return this.ts(e,n,o).next(a=>{if(s.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(Os()<=Re.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(Os()<=Re.DEBUG&&ae("QueryEngine","Query:",Ms(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Os()<=Re.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(n))):$.resolve())}Xi(e,n){if(l_(n))return $.resolve(null);let r=ar(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zh(n,null,"F"),r=ar(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Pe(...s);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,a);return this.ss(n,u,o,c.readTime)?this.Xi(e,zh(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,i){return l_(n)||i.isEqual(Se.min())?$.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?$.resolve(null):(Os()<=Re.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ms(n)),this.os(e,o,n,g2(i,-1)).next(a=>a))})}rs(e,n){let r=new At(i1(e));return n.forEach((i,s)=>{_d(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return Os()<=Re.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Ms(n)),this.Zi.getDocumentsMatchingQuery(e,n,Ti.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new lt(xe),this.cs=new Ss(s=>Dm(s),Om),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VL(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function QL(t,e,n,r){return new GL(t,e,n,r)}async function C1(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Pe();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function YL(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const d=u.batch,p=d.keys();let v=$.resolve();return p.forEach(E=>{v=v.next(()=>h.getEntry(c,E)).next(I=>{const k=u.docVersions.get(E);Ue(k!==null),I.version.compareTo(k)<0&&(d.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),h.addEntry(I)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Pe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function k1(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function XL(t,e){const n=Ae(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const a=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(n.Gr.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(s,h.addedDocuments,d)));let v=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?v=v.withResumeToken(Mt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(d,v),function(I,k,T){return I.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(p,v,h)&&a.push(n.Gr.updateTargetData(s,v))});let c=Lr(),u=Pe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(JL(s,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!r.isEqual(Se.min())){const h=n.Gr.getLastRemoteSnapshotVersion(s).next(d=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.us=i,s))}function JL(t,e,n){let r=Pe(),i=Pe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Lr();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Se.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ae("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:i}})}function ZL(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eN(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new oi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Wh(t,e,n){const r=Ae(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vo(o))throw o;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function w_(t,e,n){const r=Ae(t);let i=Se.min(),s=Pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=Ae(c),p=d.cs.get(h);return p!==void 0?$.resolve(d.us.get(p)):d.Gr.getTargetData(u,h)}(r,o,ar(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:Se.min(),n?s:Pe())).next(a=>(tN(r,B2(e),a),{documents:a,ds:s})))}function tN(t,e,n){let r=t.ls.get(e)||Se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class E_{constructor(){this.activeTargetIds=G2()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nN{constructor(){this._o=new E_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new E_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc=null;function bf(){return vc===null?vc=function(){return 268435456+Math.round(2147483648*Math.random())}():vc++,"0x"+vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class oN extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const a=bf(),c=this.No(n,r.toUriEncodedString());ae("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,s,o),this.Bo(n,c,u,i).then(h=>(ae("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw wo("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",i),h})}ko(n,r,i,s,o,a){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=iN[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=bf();return new Promise((o,a)=>{const c=new zS;c.setWithCredentials(!0),c.listenOnce(BS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Uc.NO_ERROR:const h=c.getResponseJson();ae(qt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Uc.TIMEOUT:ae(qt,`RPC '${e}' ${s} timed out`),a(new ge(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Uc.HTTP_ERROR:const d=c.getStatus();if(ae(qt,`RPC '${e}' ${s} failed with status:`,d,"response text:",c.getResponseText()),d>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const v=p==null?void 0:p.error;if(v&&v.status&&v.message){const E=function(k){const T=k.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(T)>=0?T:Y.UNKNOWN}(v.status);a(new ge(E,v.message))}else a(new ge(Y.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ge(Y.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{ae(qt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);ae(qt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}qo(e,n,r){const i=bf(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$S(),a=HS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=s.join("");ae(qt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const d=o.createWebChannel(h,c);let p=!1,v=!1;const E=new sN({Eo:k=>{v?ae(qt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(p||(ae(qt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),ae(qt,`RPC '${e}' stream ${i} sending:`,k),d.send(k))},Ao:()=>d.close()}),I=(k,T,y)=>{k.listen(T,A=>{try{y(A)}catch(L){setTimeout(()=>{throw L},0)}})};return I(d,ya.EventType.OPEN,()=>{v||(ae(qt,`RPC '${e}' stream ${i} transport opened.`),E.So())}),I(d,ya.EventType.CLOSE,()=>{v||(v=!0,ae(qt,`RPC '${e}' stream ${i} transport closed`),E.Do())}),I(d,ya.EventType.ERROR,k=>{v||(v=!0,wo(qt,`RPC '${e}' stream ${i} transport errored:`,k),E.Do(new ge(Y.UNAVAILABLE,"The operation could not be completed")))}),I(d,ya.EventType.MESSAGE,k=>{var T;if(!v){const y=k.data[0];Ue(!!y);const A=y,L=(A==null?void 0:A.error)||((T=A[0])===null||T===void 0?void 0:T.error);if(L){ae(qt,`RPC '${e}' stream ${i} received error:`,L);const U=L.status;let W=function(w){const S=yt[w];if(S!==void 0)return g1(S)}(U),b=L.message;W===void 0&&(W=Y.INTERNAL,b="Unknown error status: "+U+" with message "+L.message),v=!0,E.Do(new ge(W,b)),d.close()}else ae(qt,`RPC '${e}' stream ${i} received:`,y),E.vo(y)}}),I(a,qS.STAT_EVENT,k=>{k.stat===Mh.PROXY?ae(qt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Mh.NOPROXY&&ae(qt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.bo()},0),E}}function Af(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t){return new hL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&ae("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n,r,i,s,o,a,c){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new R1(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new ge(Y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aN extends P1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=gL(this.serializer,e),r=function(s){if(!("targetChange"in s))return Se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Se.min():o.readTime?cr(o.readTime):Se.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=$h(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=jh(c)?{documents:_L(s,c)}:{query:wL(s,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=_1(s,o.resumeToken);const u=Bh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Se.min())>0){a.readTime=Mu(s,o.snapshotVersion.toTimestamp());const u=Bh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=SL(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=$h(this.serializer),n.removeTarget=e,this.c_(n)}}class lN extends P1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=vL(e.writeResults,e.commitTime),r=cr(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=$h(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yL(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new ge(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ge(Y.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,qh(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ge(Y.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class uN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(xr(n),this.C_=!1):ae("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{bs(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Ae(c);u.k_.add(4),await kl(u),u.K_.set("Unknown"),u.k_.delete(4),await bd(u)}(this))})}),this.K_=new uN(r,i)}}async function bd(t){if(bs(t))for(const e of t.q_)await e(!0)}async function kl(t){for(const e of t.q_)await e(!1)}function x1(t,e){const n=Ae(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Km(n)?Wm(n):Fo(n).s_()&&$m(n,e))}function Hm(t,e){const n=Ae(t),r=Fo(n);n.B_.delete(e),r.s_()&&L1(n,e),n.B_.size===0&&(r.s_()?r.a_():bs(n)&&n.K_.set("Unknown"))}function $m(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fo(t).V_(e)}function L1(t,e){t.U_.xe(e),Fo(t).m_(e)}function Wm(t){t.U_=new cL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Fo(t).start(),t.K_.F_()}function Km(t){return bs(t)&&!Fo(t).i_()&&t.B_.size>0}function bs(t){return Ae(t).k_.size===0}function N1(t){t.U_=void 0}async function fN(t){t.K_.set("Online")}async function hN(t){t.B_.forEach((e,n)=>{$m(t,e)})}async function pN(t,e){N1(t),Km(t)?(t.K_.O_(e),Wm(t)):t.K_.set("Unknown")}async function mN(t,e,n){if(t.K_.set("Online"),e instanceof v1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.B_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.B_.delete(a),i.U_.removeTarget(a))}(t,e)}catch(r){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fu(t,r)}else if(e instanceof qc?t.U_.$e(e):e instanceof y1?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(Se.min()))try{const r=await k1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.B_.get(u);h&&s.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=s.B_.get(c);if(!h)return;s.B_.set(c,h.withResumeToken(Mt.EMPTY_BYTE_STRING,h.snapshotVersion)),L1(s,c);const d=new oi(h.target,c,u,h.sequenceNumber);$m(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ae("RemoteStore","Failed to raise snapshot:",r),await Fu(t,r)}}async function Fu(t,e,n){if(!Vo(e))throw e;t.k_.add(1),await kl(t),t.K_.set("Offline"),n||(n=()=>k1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await bd(t)})}function D1(t,e){return e().catch(n=>Fu(t,n,e))}async function Ad(t){const e=Ae(t),n=Ci(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;gN(e);)try{const i=await ZL(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,yN(e,i)}catch(i){await Fu(e,i)}O1(e)&&M1(e)}function gN(t){return bs(t)&&t.L_.length<10}function yN(t,e){t.L_.push(e);const n=Ci(t);n.s_()&&n.f_&&n.g_(e.mutations)}function O1(t){return bs(t)&&!Ci(t).i_()&&t.L_.length>0}function M1(t){Ci(t).start()}async function vN(t){Ci(t).w_()}async function _N(t){const e=Ci(t);for(const n of t.L_)e.g_(n.mutations)}async function wN(t,e,n){const r=t.L_.shift(),i=Fm.from(r,e,n);await D1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ad(t)}async function EN(t,e){e&&Ci(t).f_&&await async function(r,i){if(function(o){return oL(o)&&o!==Y.ABORTED}(i.code)){const s=r.L_.shift();Ci(r).__(),await D1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ad(r)}}(t,e),O1(t)&&M1(t)}async function T_(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const r=bs(n);n.k_.add(3),await kl(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await bd(n)}async function SN(t,e){const n=Ae(t);e?(n.k_.delete(2),await bd(n)):e||(n.k_.add(2),await kl(n),n.K_.set("Unknown"))}function Fo(t){return t.W_||(t.W_=function(n,r,i){const s=Ae(n);return s.b_(),new aN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:fN.bind(null,t),mo:hN.bind(null,t),po:pN.bind(null,t),R_:mN.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Km(t)?Wm(t):t.K_.set("Unknown")):(await t.W_.stop(),N1(t))})),t.W_}function Ci(t){return t.G_||(t.G_=function(n,r,i){const s=Ae(n);return s.b_(),new lN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:vN.bind(null,t),po:EN.bind(null,t),p_:_N.bind(null,t),y_:wN.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Ad(t)):(await t.G_.stop(),t.L_.length>0&&(ae("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Gm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qm(t,e){if(xr("AsyncQueue",`${e}: ${t}`),Vo(t))return new ge(Y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{static emptySet(e){return new co(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ye.comparator(n.key,r.key):(n,r)=>ye.comparator(n.key,r.key),this.keyedMap=va(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new co;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.z_=new lt(ye.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):Ee():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ao{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ao(e,n,co.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class bN{constructor(){this.queries=A_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=Ae(n),s=i.queries;i.queries=A_(),s.forEach((o,a)=>{for(const c of a.J_)c.onError(r)})})(this,new ge(Y.ABORTED,"Firestore shutting down"))}}function A_(){return new Ss(t=>r1(t),vd)}async function AN(t,e){const n=Ae(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new TN,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Qm(o,`Initialization of query '${Ms(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&Ym(n)}async function IN(t,e){const n=Ae(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function CN(t,e){const n=Ae(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.J_)a.ta(i)&&(r=!0);o.H_=i}}r&&Ym(n)}function kN(t,e,n){const r=Ae(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function Ym(t){t.X_.forEach(e=>{e.next()})}var Kh,I_;(I_=Kh||(Kh={})).na="default",I_.Cache="cache";class RN{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ao(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Kh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.key=e}}class F1{constructor(e){this.key=e}}class PN{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=i1(e),this.ma=new co(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new b_,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),v=_d(this.query,d)?d:null,E=!!p&&this.mutatedKeys.has(p.key),I=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;p&&v?p.data.isEqual(v.data)?E!==I&&(r.track({type:3,doc:v}),k=!0):this.ya(p,v)||(r.track({type:2,doc:v}),k=!0,(c&&this.Va(v,c)>0||u&&this.Va(v,u)<0)&&(a=!0)):!p&&v?(r.track({type:0,doc:v}),k=!0):p&&!v&&(r.track({type:1,doc:p}),k=!0,(c||u)&&(a=!0)),k&&(v?(o=o.add(v),s=I?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(v,E){const I=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return I(v)-I(E)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(r),i=i!=null&&i;const a=n&&!i?this.Sa():[],c=this.Ra.size===0&&this.current&&!i?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Ao(this.query,e.ma,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new b_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new F1(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new V1(r))}),n}va(e){this.da=e.ds,this.Ra=Pe();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Ao.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class xN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LN{constructor(e){this.key=e,this.Fa=!1}}class NN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ss(a=>r1(a),vd),this.Oa=new Map,this.Na=new Set,this.La=new lt(ye.comparator),this.Ba=new Map,this.ka=new zm,this.qa={},this.Qa=new Map,this.Ka=bo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function DN(t,e,n=!0){const r=H1(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await U1(r,e,n,!0),i}async function ON(t,e){const n=H1(t);await U1(n,e,!0,!1)}async function U1(t,e,n,r){const i=await eN(t.localStore,ar(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await MN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&x1(t.remoteStore,i),a}async function MN(t,e,n,r,i){t.Ua=(d,p,v)=>async function(I,k,T,y){let A=k.view.ga(T);A.ss&&(A=await w_(I.localStore,k.query,!1).then(({documents:b})=>k.view.ga(b,A)));const L=y&&y.targetChanges.get(k.targetId),U=y&&y.targetMismatches.get(k.targetId)!=null,W=k.view.applyChanges(A,I.isPrimaryClient,L,U);return k_(I,k.targetId,W.ba),W.snapshot}(t,d,p,v);const s=await w_(t.localStore,e,!0),o=new PN(e,s.ds),a=o.ga(s.documents),c=Cl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);k_(t,n,u.ba);const h=new xN(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function VN(t,e,n){const r=Ae(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!vd(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Wh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Hm(r.remoteStore,i.targetId),Gh(r,i.targetId)}).catch(Mo)):(Gh(r,i.targetId),await Wh(r.localStore,i.targetId,!0))}async function FN(t,e){const n=Ae(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hm(n.remoteStore,r.targetId))}async function UN(t,e,n){const r=WN(t);try{const i=await function(o,a){const c=Ae(o),u=bt.now(),h=a.reduce((v,E)=>v.add(E.key),Pe());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let E=Lr(),I=Pe();return c.hs.getEntries(v,h).next(k=>{E=k,E.forEach((T,y)=>{y.isValidDocument()||(I=I.add(T))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,E)).next(k=>{d=k;const T=[];for(const y of a){const A=tL(y,d.get(y.key).overlayedDocument);A!=null&&T.push(new Ts(y.key,A,YS(A.value.mapValue),lr.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,T,a)}).next(k=>{p=k;const T=k.applyToLocalDocumentSet(d,I);return c.documentOverlayCache.saveOverlays(v,k.batchId,T)})}).then(()=>({batchId:p.batchId,changes:o1(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new lt(xe)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Rl(r,i.changes),await Ad(r.remoteStore)}catch(i){const s=Qm(i,"Failed to persist write");n.reject(s)}}async function j1(t,e){const n=Ae(t);try{const r=await XL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(Ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?Ue(o.Fa):i.removedDocuments.size>0&&(Ue(o.Fa),o.Fa=!1))}),await Rl(n,r,e)}catch(r){await Mo(r)}}function C_(t,e,n){const r=Ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const a=o.view.ea(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=Ae(o);c.onlineState=a;let u=!1;c.queries.forEach((h,d)=>{for(const p of d.J_)p.ea(a)&&(u=!0)}),u&&Ym(c)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jN(t,e,n){const r=Ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new lt(ye.comparator);o=o.insert(s,Wt.newNoDocument(s,Se.min()));const a=Pe().add(s),c=new Sd(Se.min(),new Map,new lt(xe),o,a);await j1(r,c),r.La=r.La.remove(s),r.Ba.delete(e),Xm(r)}else await Wh(r.localStore,e,!1).then(()=>Gh(r,e,n)).catch(Mo)}async function zN(t,e){const n=Ae(t),r=e.batch.batchId;try{const i=await YL(n.localStore,e);B1(n,r,null),z1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rl(n,i)}catch(i){await Mo(i)}}async function BN(t,e,n){const r=Ae(t);try{const i=await function(o,a){const c=Ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ue(d!==null),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);B1(r,e,n),z1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Rl(r,i)}catch(i){await Mo(i)}}function z1(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function B1(t,e,n){const r=Ae(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function Gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||q1(t,r)})}function q1(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Hm(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Xm(t))}function k_(t,e,n){for(const r of n)r instanceof V1?(t.ka.addReference(r.key,e),qN(t,r)):r instanceof F1?(ae("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||q1(t,r.key)):Ee()}function qN(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ae("SyncEngine","New document in limbo: "+n),t.Na.add(r),Xm(t))}function Xm(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ye(nt.fromString(e)),r=t.Ka.next();t.Ba.set(r,new LN(n)),t.La=t.La.insert(n,r),x1(t.remoteStore,new oi(ar(Mm(n.path)),r,"TargetPurposeLimboResolution",pd.oe))}}async function Rl(t,e,n){const r=Ae(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,c)=>{o.push(r.Ua(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){i.push(u);const d=qm.zi(c.targetId,u);s.push(d)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(c,u){const h=Ae(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>$.forEach(u,p=>$.forEach(p.Wi,v=>h.persistence.referenceDelegate.addReference(d,p.targetId,v)).next(()=>$.forEach(p.Gi,v=>h.persistence.referenceDelegate.removeReference(d,p.targetId,v)))))}catch(d){if(!Vo(d))throw d;ae("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const v=h.us.get(p),E=v.snapshotVersion,I=v.withLastLimboFreeSnapshotVersion(E);h.us=h.us.insert(p,I)}}}(r.localStore,s))}async function HN(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const r=await C1(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(a=>{a.forEach(c=>{c.reject(new ge(Y.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rl(n,r.Ts)}}function $N(t,e){const n=Ae(t),r=n.Ba.get(e);if(r&&r.Fa)return Pe().add(r.key);{let i=Pe();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const a=n.xa.get(o);i=i.unionWith(a.view.fa)}return i}}function H1(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=j1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$N.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jN.bind(null,e),e.Ma.R_=CN.bind(null,e.eventManager),e.Ma.Wa=kN.bind(null,e.eventManager),e}function WN(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BN.bind(null,e),e}class Uu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Td(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return QL(this.persistence,new KL,e.initialUser,this.serializer)}ja(e){return new I1(Bm.ei,this.serializer)}za(e){return new nN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uu.provider={build:()=>new Uu};class KN extends Uu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ue(this.persistence.referenceDelegate instanceof Vu);const r=this.persistence.referenceDelegate.garbageCollector;return new LL(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new I1(r=>Vu.ei(r,n),this.serializer)}}class Qh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>C_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HN.bind(null,this.syncEngine),await SN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bN}()}createDatastore(e){const n=Td(e.databaseInfo.databaseId),r=function(s){return new oN(s)}(e.databaseInfo);return function(s,o,a,c){return new cN(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new dN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>C_(this.syncEngine,n,0),function(){return S_.p()?new S_:new rN}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,h){const d=new NN(i,s,o,a,c,u);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Ae(i);ae("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await kl(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Qh.provider={build:()=>new Qh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ht.UNAUTHENTICATED,this.clientId=KS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ae("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ae("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function If(t,e){t.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await C1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function R_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YN(t);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>T_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>T_(e.remoteStore,i)),t._onlineComponents=e}async function YN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await If(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===Y.FAILED_PRECONDITION||i.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;wo("Error using user provided cache. Falling back to memory cache: "+n),await If(t,new Uu)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await If(t,new KN(void 0));return t._offlineComponents}async function $1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await R_(t,t._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await R_(t,new Qh))),t._onlineComponents}function XN(t){return $1(t).then(e=>e.syncEngine)}async function JN(t){const e=await $1(t),n=e.eventManager;return n.onListen=DN.bind(null,e.syncEngine),n.onUnlisten=VN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ON.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FN.bind(null,e.syncEngine),n}function ZN(t,e,n={}){const r=new _i;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new GN({next:p=>{h.eu(),o.enqueueAndForget(()=>IN(s,d));const v=p.docs.has(a);!v&&p.fromCache?u.reject(new ge(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&c&&c.source==="server"?u.reject(new ge(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new RN(Mm(a.path),h,{includeMetadataChanges:!0,ua:!0});return AN(s,d)}(await JN(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t,e,n){if(!n)throw new ge(Y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eD(t,e,n,r){if(e===!0&&r===!0)throw new ge(Y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function x_(t){if(!ye.isDocumentKey(t))throw new ge(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function L_(t){if(ye.isDocumentKey(t))throw new ge(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ee()}function Io(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ge(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jm(t);throw new ge(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ge(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=W1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ge(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ge(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ge(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Id{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new N_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new N_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new a2;switch(r.type){case"firstParty":return new d2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ge(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=P_.get(n);r&&(ae("ComponentProvider","Removing Datastore"),P_.delete(n),r.terminate())}(this),Promise.resolve()}}function tD(t,e,n,r={}){var i;const s=(t=Io(t,Id))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ht.MOCK_USER;else{a=wk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ge(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ht(u)}t._authCredentials=new l2(new WS(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zm(this.firestore,e,this._query)}}class pn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pn(this.firestore,e,this._key)}}class wi extends Zm{constructor(e,n,r){super(e,n,Mm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pn(this.firestore,null,new ye(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function nD(t,e,...n){if(t=gn(t),K1("collection","path",e),t instanceof Id){const r=nt.fromString(e,...n);return L_(r),new wi(t,null,r)}{if(!(t instanceof pn||t instanceof wi))throw new ge(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return L_(r),new wi(t.firestore,null,r)}}function Hc(t,e,...n){if(t=gn(t),arguments.length===1&&(e=KS.newId()),K1("doc","path",e),t instanceof Id){const r=nt.fromString(e,...n);return x_(r),new pn(t,null,new ye(r))}{if(!(t instanceof pn||t instanceof wi))throw new ge(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return x_(r),new pn(t.firestore,t instanceof wi?t.converter:null,new ye(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new R1(this,"async_queue_retry"),this.fu=()=>{const r=Af();r&&ae("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Af();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Af();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new _i;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Vo(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw xr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=Gm.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&Ee()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Cd extends Id{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new D_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new D_(e),this._firestoreClient=void 0,await e}}}function rD(t,e){const n=typeof t=="object"?t:nS(),r=typeof t=="string"?t:"(default)",i=_m(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vk("firestore");s&&tD(i,...s)}return i}function G1(t){if(t._terminated)throw new ge(Y.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||iD(t),t._firestoreClient}function iD(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,h){return new I2(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,W1(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new QN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Co(Mt.fromBase64String(e))}catch(n){throw new ge(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Co(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ge(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ge(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ge(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=/^__.*__$/;class oD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new Il(e,this.data,n,this.fieldTransforms)}}function Y1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class rg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new rg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ju(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Y1(this.Mu)&&sD.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class aD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Td(e)}$u(e,n,r,i=!1){return new rg({Mu:e,methodName:n,Ku:r,path:Nt.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function X1(t){const e=t._freezeSettings(),n=Td(t._databaseId);return new aD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function J1(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);nT("Data must be an object, but it was:",o,r);const a=eT(r,o);let c,u;if(s.merge)c=new qn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=lD(e,d,n);if(!o.contains(p))throw new ge(Y.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);uD(h,p)||h.push(p)}c=new qn(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new oD(new Cn(a),c,u)}function Z1(t,e){if(tT(t=gn(t)))return nT("Unsupported field value:",e,t),eT(t,e);if(t instanceof Q1)return function(r,i){if(!Y1(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Z1(a,i.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=gn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Q2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=bt.fromDate(r);return{timestampValue:Mu(i.serializer,s)}}if(r instanceof bt){const s=new bt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mu(i.serializer,s)}}if(r instanceof tg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Co)return{bytesValue:_1(i.serializer,r._byteString)};if(r instanceof pn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:jm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ng)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Vm(a.serializer,c)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Jm(r)}`)}(t,e)}function eT(t,e){const n={};return GS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(r,i)=>{const s=Z1(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function tT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof bt||t instanceof tg||t instanceof Co||t instanceof pn||t instanceof Q1||t instanceof ng)}function nT(t,e,n){if(!tT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Jm(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function lD(t,e,n){if((e=gn(e))instanceof eg)return e._internalPath;if(typeof e=="string")return rT(t,e);throw ju("Field path arguments must be of type string or ",t,!1,void 0,n)}const cD=new RegExp("[~\\*/\\[\\]]");function rT(t,e,n){if(e.search(cD)>=0)throw ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eg(...e.split("."))._internalPath}catch{throw ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ju(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ge(Y.INVALID_ARGUMENT,a+t+c)}function uD(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dD extends iT{data(){return super.data()}}function sT(t,e){return typeof e=="string"?rT(t,e):e instanceof eg?e._internalPath:e._delegate._internalPath}class fD{convertValue(e,n="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>pt(o.doubleValue));return new ng(s)}convertGeoPoint(e){return new tg(pt(e.latitude),pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ol(e));default:return null}}convertTimestamp(e){const n=bi(e);return new bt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=nt.fromString(e);Ue(A1(r));const i=new al(r.get(1),r.get(3)),s=new ye(r.popFirst(5));return i.isEqual(n)||xr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aT extends iT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pD(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pD extends aT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t){t=Io(t,pn);const e=Io(t.firestore,Cd);return ZN(G1(e),t._key).then(n=>vD(e,t,n))}class gD extends fD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Co(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pn(this.firestore,null,n)}}function O_(t,e,n){t=Io(t,pn);const r=Io(t.firestore,Cd),i=oT(t.converter,e);return lT(r,[J1(X1(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,lr.none())])}function yD(t,e){const n=Io(t.firestore,Cd),r=Hc(t),i=oT(t.converter,e);return lT(n,[J1(X1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,lr.exists(!1))]).then(()=>r)}function lT(t,e){return function(r,i){const s=new _i;return r.asyncQueue.enqueueAndForget(async()=>UN(await XN(r),i,s)),s.promise}(G1(t),e)}function vD(t,e,n){const r=n.docs.get(e._key),i=new gD(t);return new aT(t,i,e._key,r,new hD(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Oo=i})(No),_o(new hs("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Cd(new c2(r.getProvider("auth-internal")),new h2(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ge(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),vi(Xv,"4.7.5",e),vi(Xv,"4.7.5","esm2017")})();var _D="firebase",wD="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi(_D,wD,"app");const ED={apiKey:"AIzaSyCGr3KWUfUZeq2RE399IM6N40pj5r9J2PY",authDomain:"notive-cloud.firebaseapp.com",projectId:"notive-cloud",storageBucket:"notive-cloud.appspot.com",messagingSenderId:"623580052918",appId:"1:623580052918:web:d99045f0c4252ca0465517",measurementId:"G-VWRFV1Z8ZM"},cT=tS(ED),_c=s2(cT),$c=rD(cT),uT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAC0CAYAAABsWTVRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADh0RVh0QUxUVGFnAEJyYW5kaW5nIElkZW50aXR5IENvcnBvcmF0ZSBWZWN0b3IgTG9nbyBOIERlc2lnbi5pB/NYAAAAQWlUWHREZXNjcmlwdGlvbgAAAAAAQnJhbmRpbmcgSWRlbnRpdHkgQ29ycG9yYXRlIFZlY3RvciBMb2dvIE4gRGVzaWduLiTDBt8AAAhrSURBVHja7J1Bcts2FIYZxTNdVkdgThBl153pE0Q9geUTxDpBrRPYOoHlE1hZdhXlBFZPIGXXrKxtZxKn4JTqaBSRAvEAEIC+b4ajZEamQODn//AAEMwyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDzy9nZQB1FoOW6V8dKHT/U8Vz9P6fV4hFXoY7HqgF3j8cQRKfKcHugbD92BDegFcMXWVMjbo/bDst3r1G+VQh1+Ro51Tbitfq40fjqb2e9Xv/7y8ufvkWmPkYaX+2r8n1R5Vt2WZ+vkNThcKk+PrX8s4t/vn1beCrfUH08tviTpSrbO4QWlsj66uNJHW070gvVmBeeyleGw37LP32jyrfuql57SOsn/jAQWUnhKcu7NxBZybDLSkVoe8ME6uNacIqh4/IVgt94i9DCQZpB9gMuX47QwnCz0ikK4WnOHZavzDAlY2IDhJaGm/noO4bstghN0y1shJZByOWrMlaEFrFbuHaNS0vnGSC0+N1se77ccvkKC33HzsHR7LmZq+yuyc026lggtPDdrHAgjL7F8pVlGzV8ZYKjnaab2e4HNYmsnL+8iyWsnqzQqlmA0BupKWxexbTW7JQd7YOj855buhGGDWF9otxsmXU8CIvQ5H2fkN1srY47m6JGaO5wKbKBhRuhTCjqJs/Hys021b9bhX5f6+UQmvuwaSvrrLsRyjVv8x1XzmOp8JMTWjVA23f8G1IB1IXNsaPsFqFF5mZbcqFID4loViUAVpMOhObGaQaenCC3fCOUfbL9wdmi5XkXCC0tN5MK7VASMN1d718lC4TOQN2sKZOzza8Cx80PuNmd0M1K1gjND8PM3+I/U7c5lARMdoYzJP2zLwgtrbCZCQS977jraj4zs+BohM6EkgBjR6sJm5OaLoDJtZAMeOCyA3HnwjKWbjazGJZxNA+MOvjNtkIrjrmZMGwuEZpbZ5EkARsfQjswSLuocTPTRCA7kFAgtIDC5syTow013czU0ZZdN0LSQrMwdjYVdKLbbEHwfs/NFjXXYxo2Nwgt3L7ZQrj7Tr/FzVA4dLOSzwgt3LD5IGwk3exwqONmkv5Z1vGsQNJCE46dbRo641YdbU88x55qijLjTN3RbCUBC4HYdYQx1HEzycbMe8uLEJplpEmAjY50riHE/l6oTs7NkhVazXSOURIgdINjZdhmm2uNUH2O0MJDMoH+YLGxjg1xFJp9M4mj/YXQwgubdc5iGj7zI8MaAx03E744A0dzFDYlU051/SQXQxxDD27W6SN2qTvae9Mhjeznlaz/O51A+HlDn2utOYxiek2LUBolRaGZhs15w8TzWlCevMGlphpClTwfsERobsJmIQibE0fhp6jJistyzkz+vgWfEVpYYXOmMa9p6mpv69xMc+nOe0F94GiBhc2Jw0bLa/pnd6aO2CKDXiM0+2HTdJB2ptkgpuNRgxoRbBxeU1CJQGqOZjq3qbs951JwExR74plq/mkS/bOSsxMPm23WnFmZimo5pSXpn81xNPthMzcMMdqbDVeCNJ0heGtwTX2Boy27fkYg1dBp6mZt+zGmrjbwdE1B9s9SEppJ/8xk63TTfo+JM0nC5keE5iZstnWMheEgrCQhGLT4ruShmk0o85upOZpJg5i+CELSgIWj7wYfNlMRWtuwaepm24dw14blNH38LvqwGb3QDMOm9LU2po5RaF5TGTZHgvLNEVr3YXNmof9imhDkmhu/SLLNeWjDGqkIrW3YtPGSLtf9tOTCZtRCMwibMxuTzNU5TM9zrnFNIkdDaN2HTZuvHJw7KrOobxZq2IxdaG3C5szykhnTflr/yHia5KHnjyE3VpRCMwibtl+gurB9gwhfuW1jCweEJgybtt1sO55mO3xK3GweeoPFKjTdRikFMXZUBtNQle+Hz2q9WiEoyxShdRs2pw47yDbDp+SV24sQNnFJ0dF0w2bTc5o2wudaILZRNQNgw80eYmi0GIWmGzanHtJ900beXZ1xK/j9dehJwJZXEYbNlWYDvPFQnlIwz6YiqTrx14IijGverIKjeQqbEx+FqRzT1FFyocgkv43QLIRN3+Gkqz7SNOSZgGhDZ4uweeF7hakq2yrz+37zUmBvYhJaTI6mEzYXHS1jnnj+vXFMIovN0XRc46Kr9fIeXa18lO5dbEMFvUhEprM1wKzjhzJ8udo4i5BYQudlQA1dl4HOMvcvjrgL8QmnlIR2rH82CWTnnCuH5153fTMlLbRqiiY/koEFMWhZuY2rlRS/x5YAxOZox8LmJLAGuHIQQq9imDiPOutUjlZO8dRtF+plqskweXmylWSoa7zJIqcXuMiObeUeZAZWuY+N/tpdCiKLIXQ2hc1ycDbYlaVVFnqVmW91VYbLcZYIwYZOjZUR72Lot1Rh9D7TX6y5TKFPFg3lwxrq+FFz3Ed6PU8N1/SpekAlSUJ2tKcaF4huQnnvuvLsv+GafJvQZAHu0HgqbpY33Pk31BDYEtptjchW1A5Zp02GMQ1nQJxuVtR1lqkdHM0ml7gZuHazchOU5wNudkvtgE2hHRo7e94+bAtgS2iHBjSvqRmwKbJDY2dP1AzJgG0+kACAD0d7jn0+E+JLAkgACJ1O2N/yfMIkM7hOAkgAcDQnjEgAwIejrUgAwLXIhiQA4ENojztCG1Ej4DoJYAkQOBPa7iraATUCroT2zDMA4Fpk25mAFQkAuBTap0poBbUBrkQ2qET2SG2AS6HdM2YGrkXWZ9Us+BDaDWNm4ENoT9XeE3BivPYospH6+BrynmaQhpvxbCaO5p6zXu/r95eXv6lyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjOvwIMAL5x5L2+CRE6AAAAAElFTkSuQmCC",SD=t=>{switch(t){case"auth/weak-password":return"Weak password";case"auth/email-already-in-use":return"Email already in use";case"auth/invalid-email":return"Invalid email";case"auth/wrong-password":return"Wrong password";case"auth/user-not-found":return"User not found";default:return"Invalid credential"}},TD=()=>{H.useEffect(()=>{(I=>{const k=localStorage.getItem("userLevel");localStorage.getItem("userID"),k=="Beginner"?t("/Domain"):k=="Intermediate"&&t("/Landing")})()},[]);const t=BE(),[e,n]=H.useState(null),[r,i]=H.useState(""),[s,o]=H.useState(""),[a,c]=H.useState(""),u=E=>{n(e===E?null:E),i("")},h=async E=>{(await mD(Hc($c,"users",E.uid))).exists()?t("/Landing"):(await O_(Hc($c,"users",E.uid),{Email:E.email}),localStorage.setItem("userLevel","Beginner"),t("/Domain")),uk(E.displayName,E.uid)},d=async()=>{try{await qP(_c,s),alert("Reset email sent!"),u("login")}catch{i("Failed to send reset email. Please try again.")}},p=async()=>{try{if(e==="login"){const I=(await $P(_c,s,a)).user;console.log("Logged in:",I.uid),I.emailVerified?await h(I):i("Please verify your email first!")}else if(e==="signup"){const I=(await HP(_c,s,a)).user;console.log("Signed up:",I.uid),await O_(Hc($c,"users",I.uid),{Email:I.email}),localStorage.setItem("userLevel","Beginner"),await WP(I),alert("Verification email sent! Please verify your email before proceeding."),u("login")}}catch(E){console.error("Error:",E.message);const I=SD(E.code);i(I)}},v=async()=>{try{const E=new yr,k=(await px(_c,E)).user;console.log("Google Sign-In:",k.uid),await h(k)}catch(E){console.error("Error during Google Sign-In:",E.message),i("Google Sign-In failed. Please try again.")}};return j.jsxs("div",{className:"container",children:[j.jsxs("div",{className:"auth-panel",children:[j.jsxs("div",{className:"intro",children:[j.jsx("div",{className:"logo",children:j.jsx("img",{src:uT})}),j.jsx("p",{className:"text",children:"You deserve it!"})]}),j.jsx("div",{className:"formBtn",onClick:v,children:"Login with Gmail"}),j.jsx("div",{className:"formBtn",onClick:()=>u("login"),children:"Login with Email"}),e==="login"&&j.jsx(wv,{onSubmit:p,error:r,email:s,setEmail:o,password:a,setPassword:c}),j.jsx("div",{className:"formBtn",children:"Continue as Guest"}),j.jsx("div",{className:"formBtn",onClick:()=>u("signup"),children:"Sign-Up"}),e==="signup"&&j.jsx(wv,{onSubmit:p,error:r,email:s,setEmail:o,password:a,setPassword:c}),j.jsx("div",{id:"forgetPassBtn",onClick:()=>u("forgetpass"),children:"Forget Password"}),e==="forgetpass"&&j.jsxs("div",{className:"form",children:[j.jsx("form",{children:j.jsx(Ch,{type:"text",placeholder:"Email",value:s,onChange:E=>o(E.target.value),icon:"fas fa-envelope"})}),j.jsx("div",{id:"goBtn",onClick:d,children:"Go"})]})]}),j.jsx("div",{className:"authAnimation-panel"})]})};function bD({children:t}){return j.jsxs("header",{children:[j.jsx("div",{className:"logo",children:j.jsx("i",{className:"fa-brands fa-nfc-symbol"})}),j.jsx("div",{className:"menu",children:t})]})}const Yh=({name:t,options:e,onRadioChange:n})=>{const r=i=>{const{id:s,value:o}=i.target;n({id:s,value:o})};return j.jsx("div",{className:`${t}`,children:e.map(({id:i,value:s,label:o,bubbleClass:a})=>j.jsxs("label",{children:[j.jsx("input",{type:"radio",name:t,id:i,value:s,onChange:r}),j.jsx("span",{className:`bubble ${a}`}),o]},s))})},AD=[{id:"categoryD1",value:"Goal oriented",label:"Goal oriented",bubbleClass:"large"},{id:"categoryD2",value:"Make the most of everyday",label:"Make the most of everyday",bubbleClass:"medium"},{id:"categoryD3",value:"Organize your mind",label:"Organize your mind",bubbleClass:"small"}];function ID(){const t=BE(),[e,n]=H.useState(""),[r,i]=H.useState(!1),s=()=>{console.log("Not ready yet!!!!")},o=c=>{console.log("Selected option:",c),n(c.value),i(!0)},a=()=>{localStorage.setItem("userLevel","Intermediate"),t("/Landing")};return j.jsxs(j.Fragment,{children:[j.jsx(bD,{children:j.jsx("div",{onClick:s,children:"Demo"})}),j.jsxs("div",{className:"domain-panel",children:[j.jsxs("div",{className:"domainContainer",children:[j.jsxs("div",{className:"welcome-domain",children:[j.jsxs("p",{children:["Hello ",WE().name,","]}),j.jsx("p",{children:"Welcome to Notive - Your Next Chapter Begins Here."}),j.jsx("p",{children:"Dream, Plan, Achieve."})]}),j.jsx(Yh,{title:"Choose your adventure type:",name:"domainOptions",options:AD,onRadioChange:o})]}),j.jsx("div",{className:`Go ${r?"active":""}`,onClick:a,children:"Go"})]}),j.jsxs("div",{className:"domainAnimation-panel",children:[r&&e==="Goal oriented"&&j.jsx("h1",{children:e}),r&&e==="Make the most of everyday"&&j.jsx("h1",{children:e}),r&&e==="Organize your mind"&&j.jsx("h1",{children:e})]})]})}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function CD(t,e,n){return(e=RD(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M_(Object(n),!0).forEach(function(r){CD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function RD(t){var e=kD(t,"string");return typeof e=="symbol"?e:e+""}const V_=()=>{};let ig={},dT={},fT=null,hT={mark:V_,measure:V_};try{typeof window<"u"&&(ig=window),typeof document<"u"&&(dT=document),typeof MutationObserver<"u"&&(fT=MutationObserver),typeof performance<"u"&&(hT=performance)}catch{}const{userAgent:F_=""}=ig.navigator||{},ki=ig,et=dT,U_=fT,wc=hT;ki.document;const zr=!!et.documentElement&&!!et.head&&typeof et.addEventListener=="function"&&typeof et.createElement=="function",pT=~F_.indexOf("MSIE")||~F_.indexOf("Trident/");var PD=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,xD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,mT={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},LD={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gT=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Qt="classic",kd="duotone",ND="sharp",DD="sharp-duotone",yT=[Qt,kd,ND,DD],OD={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},MD={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},VD=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),FD={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},UD=["fak","fa-kit","fakd","fa-kit-duotone"],j_={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},jD=["kit"],zD={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},BD=["fak","fakd"],qD={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},z_={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ec={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},HD=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],$D=["fak","fa-kit","fakd","fa-kit-duotone"],WD={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},KD={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},GD={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Xh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},QD=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Jh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...HD,...QD],YD=["solid","regular","light","thin","duotone","brands"],vT=[1,2,3,4,5,6,7,8,9,10],XD=vT.concat([11,12,13,14,15,16,17,18,19,20]),JD=[...Object.keys(GD),...YD,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ec.GROUP,Ec.SWAP_OPACITY,Ec.PRIMARY,Ec.SECONDARY].concat(vT.map(t=>"".concat(t,"x"))).concat(XD.map(t=>"w-".concat(t))),ZD={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Nr="___FONT_AWESOME___",Zh=16,_T="fa",wT="svg-inline--fa",ys="data-fa-i2svg",ep="data-fa-pseudo-element",eO="data-fa-pseudo-element-pending",sg="data-prefix",og="data-icon",B_="fontawesome-i2svg",tO="async",nO=["HTML","HEAD","STYLE","SCRIPT"],ET=(()=>{try{return!0}catch{return!1}})();function Pl(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Qt]}})}const ST=J({},mT);ST[Qt]=J(J(J(J({},{"fa-duotone":"duotone"}),mT[Qt]),j_.kit),j_["kit-duotone"]);const rO=Pl(ST),tp=J({},FD);tp[Qt]=J(J(J(J({},{duotone:"fad"}),tp[Qt]),z_.kit),z_["kit-duotone"]);const q_=Pl(tp),np=J({},Xh);np[Qt]=J(J({},np[Qt]),qD.kit);const ag=Pl(np),rp=J({},KD);rp[Qt]=J(J({},rp[Qt]),zD.kit);Pl(rp);const iO=PD,TT="fa-layers-text",sO=xD,oO=J({},OD);Pl(oO);const aO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Cf=LD,lO=[...jD,...JD],Oa=ki.FontAwesomeConfig||{};function cO(t){var e=et.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function uO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}et&&typeof et.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=uO(cO(n));i!=null&&(Oa[r]=i)});const bT={styleDefault:"solid",familyDefault:Qt,cssPrefix:_T,replacementClass:wT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Oa.familyPrefix&&(Oa.cssPrefix=Oa.familyPrefix);const ko=J(J({},bT),Oa);ko.autoReplaceSvg||(ko.observeMutations=!1);const pe={};Object.keys(bT).forEach(t=>{Object.defineProperty(pe,t,{enumerable:!0,set:function(e){ko[t]=e,Ma.forEach(n=>n(pe))},get:function(){return ko[t]}})});Object.defineProperty(pe,"familyPrefix",{enumerable:!0,set:function(t){ko.cssPrefix=t,Ma.forEach(e=>e(pe))},get:function(){return ko.cssPrefix}});ki.FontAwesomeConfig=pe;const Ma=[];function dO(t){return Ma.push(t),()=>{Ma.splice(Ma.indexOf(t),1)}}const Qr=Zh,nr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fO(t){if(!t||!zr)return;const e=et.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=et.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return et.head.insertBefore(e,r),t}const hO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dl(){let t=12,e="";for(;t-- >0;)e+=hO[Math.random()*62|0];return e}function Uo(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function lg(t){return t.classList?Uo(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function AT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pO(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(AT(t[n]),'" '),"").trim()}function Rd(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function cg(t){return t.size!==nr.size||t.x!==nr.x||t.y!==nr.y||t.rotate!==nr.rotate||t.flipX||t.flipY}function mO(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function gO(t){let{transform:e,width:n=Zh,height:r=Zh,startCentered:i=!1}=t,s="";return i&&pT?s+="translate(".concat(e.x/Qr-n/2,"em, ").concat(e.y/Qr-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Qr,"em), calc(-50% + ").concat(e.y/Qr,"em)) "):s+="translate(".concat(e.x/Qr,"em, ").concat(e.y/Qr,"em) "),s+="scale(".concat(e.size/Qr*(e.flipX?-1:1),", ").concat(e.size/Qr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var yO=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function IT(){const t=_T,e=wT,n=pe.cssPrefix,r=pe.replacementClass;let i=yO;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let H_=!1;function kf(){pe.autoAddCss&&!H_&&(fO(IT()),H_=!0)}var vO={mixout(){return{dom:{css:IT,insertCss:kf}}},hooks(){return{beforeDOMElementCreation(){kf()},beforeI2svg(){kf()}}}};const Dr=ki||{};Dr[Nr]||(Dr[Nr]={});Dr[Nr].styles||(Dr[Nr].styles={});Dr[Nr].hooks||(Dr[Nr].hooks={});Dr[Nr].shims||(Dr[Nr].shims=[]);var rr=Dr[Nr];const CT=[],kT=function(){et.removeEventListener("DOMContentLoaded",kT),zu=1,CT.map(t=>t())};let zu=!1;zr&&(zu=(et.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(et.readyState),zu||et.addEventListener("DOMContentLoaded",kT));function _O(t){zr&&(zu?setTimeout(t,0):CT.push(t))}function xl(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?AT(t):"<".concat(e," ").concat(pO(n),">").concat(r.map(xl).join(""),"</").concat(e,">")}function $_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Rf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,c,u,h;for(r===void 0?(c=1,h=e[s[0]]):(c=0,h=r);c<o;c++)u=s[c],h=a(h,e[u],u,e);return h};function wO(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ip(t){const e=wO(t);return e.length===1?e[0].toString(16):null}function EO(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function W_(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function sp(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=W_(e);typeof rr.hooks.addPack=="function"&&!r?rr.hooks.addPack(t,W_(e)):rr.styles[t]=J(J({},rr.styles[t]||{}),i),t==="fas"&&sp("fa",e)}const{styles:fl,shims:SO}=rr,RT=Object.keys(ag),TO=RT.reduce((t,e)=>(t[e]=Object.keys(ag[e]),t),{});let ug=null,PT={},xT={},LT={},NT={},DT={};function bO(t){return~lO.indexOf(t)}function AO(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!bO(i)?i:null}const OT=()=>{const t=r=>Rf(fl,(i,s,o)=>(i[o]=Rf(s,r,{}),i),{});PT=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),xT=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),DT=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in fl||pe.autoFetchSvg,n=Rf(SO,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});LT=n.names,NT=n.unicodes,ug=Pd(pe.styleDefault,{family:pe.familyDefault})};dO(t=>{ug=Pd(t.styleDefault,{family:pe.familyDefault})});OT();function dg(t,e){return(PT[t]||{})[e]}function IO(t,e){return(xT[t]||{})[e]}function rs(t,e){return(DT[t]||{})[e]}function MT(t){return LT[t]||{prefix:null,iconName:null}}function CO(t){const e=NT[t],n=dg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ri(){return ug}const VT=()=>({prefix:null,iconName:null,rest:[]});function kO(t){let e=Qt;const n=RT.reduce((r,i)=>(r[i]="".concat(pe.cssPrefix,"-").concat(i),r),{});return yT.forEach(r=>{(t.includes(n[r])||t.some(i=>TO[r].includes(i)))&&(e=r)}),e}function Pd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Qt}=e,r=rO[n][t];if(n===kd&&!t)return"fad";const i=q_[n][t]||q_[n][r],s=t in rr.styles?t:null;return i||s||null}function RO(t){let e=[],n=null;return t.forEach(r=>{const i=AO(pe.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function K_(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function xd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const i=Jh.concat($D),s=K_(t.filter(d=>i.includes(d))),o=K_(t.filter(d=>!Jh.includes(d))),a=s.filter(d=>(r=d,!gT.includes(d))),[c=null]=a,u=kO(s),h=J(J({},RO(o)),{},{prefix:Pd(c,{family:u})});return J(J(J({},h),NO({values:t,family:u,styles:fl,config:pe,canonical:h,givenPrefix:r})),PO(n,r,h))}function PO(t,e,n){let{prefix:r,iconName:i}=n;if(t||!r||!i)return{prefix:r,iconName:i};const s=e==="fa"?MT(i):{},o=rs(r,i);return i=s.iconName||o||i,r=s.prefix||r,r==="far"&&!fl.far&&fl.fas&&!pe.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const xO=yT.filter(t=>t!==Qt||t!==kd),LO=Object.keys(Xh).filter(t=>t!==Qt).map(t=>Object.keys(Xh[t])).flat();function NO(t){const{values:e,family:n,canonical:r,givenPrefix:i="",styles:s={},config:o={}}=t,a=n===kd,c=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(c||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&xO.includes(n)&&(Object.keys(s).find(p=>LO.includes(p))||o.autoFetchSvg)){const p=VD.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=rs(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Ri()||"fas"),r}class DO{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]=J(J({},this.definitions[s]||{}),i[s]),sp(s,i[s]);const o=ag[Qt][s];o&&sp(o,i[s]),OT()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],c=a[2];e[s]||(e[s]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[s][u]=a)}),e[s][o]=a}),e}}let G_=[],Js={};const uo={},OO=Object.keys(uo);function MO(t,e){let{mixoutsTo:n}=e;return G_=t,Js={},Object.keys(uo).forEach(r=>{OO.indexOf(r)===-1&&delete uo[r]}),G_.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{Js[o]||(Js[o]=[]),Js[o].push(s[o])})}r.provides&&r.provides(uo)}),n}function op(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Js[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function vs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Js[t]||[]).forEach(s=>{s.apply(null,n)})}function Pi(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return uo[t]?uo[t].apply(null,e):void 0}function ap(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ri();if(e)return e=rs(n,e)||e,$_(FT.definitions,n,e)||$_(rr.styles,n,e)}const FT=new DO,VO=()=>{pe.autoReplaceSvg=!1,pe.observeMutations=!1,vs("noAuto")},FO={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zr?(vs("beforeI2svg",t),Pi("pseudoElements2svg",t),Pi("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;pe.autoReplaceSvg===!1&&(pe.autoReplaceSvg=!0),pe.observeMutations=!0,_O(()=>{jO({autoReplaceSvgRoot:e}),vs("watch",t)})}},UO={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:rs(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Pd(t[0]);return{prefix:n,iconName:rs(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(pe.cssPrefix,"-"))>-1||t.match(iO))){const e=xd(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ri(),iconName:rs(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ri();return{prefix:e,iconName:rs(e,t)||t}}}},_n={noAuto:VO,config:pe,dom:FO,parse:UO,library:FT,findIconDefinition:ap,toHtml:xl},jO=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=et}=t;(Object.keys(rr.styles).length>0||pe.autoFetchSvg)&&zr&&pe.autoReplaceSvg&&_n.dom.i2svg({node:e})};function Ld(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>xl(n))}}),Object.defineProperty(t,"node",{get:function(){if(!zr)return;const n=et.createElement("div");return n.innerHTML=t.html,n.children}}),t}function zO(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(cg(o)&&n.found&&!r.found){const{width:a,height:c}=n,u={x:a/c/2,y:.5};i.style=Rd(J(J({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function BO(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(pe.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:J(J({},i),{},{id:o}),children:r}]}]}function fg(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:c,titleId:u,extra:h,watchable:d=!1}=t,{width:p,height:v}=n.found?n:e,E=BD.includes(r),I=[pe.replacementClass,i?"".concat(pe.cssPrefix,"-").concat(i):""].filter(U=>h.classes.indexOf(U)===-1).filter(U=>U!==""||!!U).concat(h.classes).join(" ");let k={children:[],attributes:J(J({},h.attributes),{},{"data-prefix":r,"data-icon":i,class:I,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(v)})};const T=E&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/v*16*.0625,"em")}:{};d&&(k.attributes[ys]=""),a&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||dl())},children:[a]}),delete k.attributes.title);const y=J(J({},k),{},{prefix:r,iconName:i,main:e,mask:n,maskId:c,transform:s,symbol:o,styles:J(J({},T),h.styles)}),{children:A,attributes:L}=n.found&&e.found?Pi("generateAbstractMask",y)||{children:[],attributes:{}}:Pi("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=A,y.attributes=L,o?BO(y):zO(y)}function Q_(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,c=J(J(J({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});a&&(c[ys]="");const u=J({},o.styles);cg(i)&&(u.transform=gO({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Rd(u);h.length>0&&(c.style=h);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function qO(t){const{content:e,title:n,extra:r}=t,i=J(J(J({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Rd(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Pf}=rr;function lp(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(pe.cssPrefix,"-").concat(Cf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(Cf.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(Cf.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const HO={found:!1,width:512,height:512};function $O(t,e){!ET&&!pe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function cp(t,e){let n=e;return e==="fa"&&pe.styleDefault!==null&&(e=Ri()),new Promise((r,i)=>{if(n==="fa"){const s=MT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Pf[e]&&Pf[e][t]){const s=Pf[e][t];return r(lp(s))}$O(t,e),r(J(J({},HO),{},{icon:pe.showMissingIcons&&t?Pi("missingIconAbstract")||{}:{}}))})}const Y_=()=>{},up=pe.measurePerformance&&wc&&wc.mark&&wc.measure?wc:{mark:Y_,measure:Y_},wa='FA "6.7.2"',WO=t=>(up.mark("".concat(wa," ").concat(t," begins")),()=>UT(t)),UT=t=>{up.mark("".concat(wa," ").concat(t," ends")),up.measure("".concat(wa," ").concat(t),"".concat(wa," ").concat(t," begins"),"".concat(wa," ").concat(t," ends"))};var hg={begin:WO,end:UT};const Wc=()=>{};function X_(t){return typeof(t.getAttribute?t.getAttribute(ys):null)=="string"}function KO(t){const e=t.getAttribute?t.getAttribute(sg):null,n=t.getAttribute?t.getAttribute(og):null;return e&&n}function GO(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(pe.replacementClass)}function QO(){return pe.autoReplaceSvg===!0?Kc.replace:Kc[pe.autoReplaceSvg]||Kc.replace}function YO(t){return et.createElementNS("http://www.w3.org/2000/svg",t)}function XO(t){return et.createElement(t)}function jT(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?YO:XO}=e;if(typeof t=="string")return et.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(jT(s,{ceFn:n}))}),r}function JO(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Kc={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(jT(n),e)}),e.getAttribute(ys)===null&&pe.keepOriginalSource){let n=et.createComment(JO(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~lg(e).indexOf(pe.replacementClass))return Kc.replace(t);const r=new RegExp("".concat(pe.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===pe.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>xl(s)).join(`
`);e.setAttribute(ys,""),e.innerHTML=i}};function J_(t){t()}function zT(t,e){const n=typeof e=="function"?e:Wc;if(t.length===0)n();else{let r=J_;pe.mutateApproach===tO&&(r=ki.requestAnimationFrame||J_),r(()=>{const i=QO(),s=hg.begin("mutate");t.map(i),s(),n()})}}let pg=!1;function BT(){pg=!0}function dp(){pg=!1}let Bu=null;function Z_(t){if(!U_||!pe.observeMutations)return;const{treeCallback:e=Wc,nodeCallback:n=Wc,pseudoElementsCallback:r=Wc,observeMutationsRoot:i=et}=t;Bu=new U_(s=>{if(pg)return;const o=Ri();Uo(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!X_(a.addedNodes[0])&&(pe.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&pe.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&X_(a.target)&&~aO.indexOf(a.attributeName))if(a.attributeName==="class"&&KO(a.target)){const{prefix:c,iconName:u}=xd(lg(a.target));a.target.setAttribute(sg,c||o),u&&a.target.setAttribute(og,u)}else GO(a.target)&&n(a.target)})}),zr&&Bu.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ZO(){Bu&&Bu.disconnect()}function eM(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function tM(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=xd(lg(t));return i.prefix||(i.prefix=Ri()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=IO(i.prefix,t.innerText)||dg(i.prefix,ip(t.innerText))),!i.iconName&&pe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function nM(t){const e=Uo(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return pe.autoA11y&&(n?e["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(r||dl()):(e["aria-hidden"]="true",e.focusable="false")),e}function rM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function e0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=tM(t),s=nM(t),o=op("parseNodeAttributes",{},t);let a=e.styleParser?eM(t):[];return J({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:nr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s}},o)}const{styles:iM}=rr;function qT(t){const e=pe.autoReplaceSvg==="nest"?e0(t,{styleParser:!1}):e0(t);return~e.extra.classes.indexOf(TT)?Pi("generateLayersText",t,e):Pi("generateSvgReplacementMutation",t,e)}function sM(){return[...UD,...Jh]}function t0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zr)return Promise.resolve();const n=et.documentElement.classList,r=h=>n.add("".concat(B_,"-").concat(h)),i=h=>n.remove("".concat(B_,"-").concat(h)),s=pe.autoFetchSvg?sM():gT.concat(Object.keys(iM));s.includes("fa")||s.push("fa");const o=[".".concat(TT,":not([").concat(ys,"])")].concat(s.map(h=>".".concat(h,":not([").concat(ys,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Uo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const c=hg.begin("onTree"),u=a.reduce((h,d)=>{try{const p=qT(d);p&&h.push(p)}catch(p){ET||p.name==="MissingIcon"&&console.error(p)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(p=>{zT(p,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),h()})}).catch(p=>{c(),d(p)})})}function oM(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qT(t).then(n=>{n&&zT([n],e)})}function aM(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:ap(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:ap(i||{})),t(r,J(J({},n),{},{mask:i}))}}const lM=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=nr,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:c=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:p,icon:v}=t;return Ld(J({type:"icon"},t),()=>(vs("beforeDOMElementCreation",{iconDefinition:t,params:e}),pe.autoA11y&&(o?u["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(a||dl()):(u["aria-hidden"]="true",u.focusable="false")),fg({icons:{main:lp(v),mask:i?lp(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:J(J({},nr),n),symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:u,styles:h,classes:c}})))};var cM={mixout(){return{icon:aM(lM)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=t0,t.nodeCallback=oM,t}}},provides(t){t.i2svg=function(e){const{node:n=et,callback:r=()=>{}}=e;return t0(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:c,mask:u,maskId:h,extra:d}=n;return new Promise((p,v)=>{Promise.all([cp(r,o),u.iconName?cp(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[I,k]=E;p([e,fg({icons:{main:I,mask:k},prefix:o,iconName:r,transform:a,symbol:c,maskId:h,title:i,titleId:s,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Rd(o);a.length>0&&(r.style=a);let c;return cg(s)&&(c=Pi("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:r}}}},uM={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ld({type:"layer"},()=>{vs("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(pe.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},dM={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Ld({type:"counter",content:t},()=>(vs("beforeDOMElementCreation",{content:t,params:e}),qO({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(pe.cssPrefix,"-layers-counter"),...r]}})))}}}},fM={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=nr,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Ld({type:"text",content:t},()=>(vs("beforeDOMElementCreation",{content:t,params:e}),Q_({content:t,transform:J(J({},nr),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(pe.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(pT){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,a=u.height/c}return pe.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Q_({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const hM=new RegExp('"',"ug"),n0=[1105920,1112319],r0=J(J(J(J({},{FontAwesome:{normal:"fas",400:"fas"}}),MD),ZD),WD),fp=Object.keys(r0).reduce((t,e)=>(t[e.toLowerCase()]=r0[e],t),{}),pM=Object.keys(fp).reduce((t,e)=>{const n=fp[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function mM(t){const e=t.replace(hM,""),n=EO(e,0),r=n>=n0[0]&&n<=n0[1],i=e.length===2?e[0]===e[1]:!1;return{value:ip(i?e[0]:e),isSecondary:r||i}}function gM(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(fp[n]||{})[i]||pM[n]}function i0(t,e){const n="".concat(eO).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Uo(t.children).filter(p=>p.getAttribute(ep)===e)[0],a=ki.getComputedStyle(t,e),c=a.getPropertyValue("font-family"),u=c.match(sO),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const p=a.getPropertyValue("content");let v=gM(c,h);const{value:E,isSecondary:I}=mM(p),k=u[0].startsWith("FontAwesome");let T=dg(v,E),y=T;if(k){const A=CO(E);A.iconName&&A.prefix&&(T=A.iconName,v=A.prefix)}if(T&&!I&&(!o||o.getAttribute(sg)!==v||o.getAttribute(og)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const A=rM(),{extra:L}=A;L.attributes[ep]=e,cp(T,v).then(U=>{const W=fg(J(J({},A),{},{icons:{main:U,mask:VT()},prefix:v,iconName:y,extra:L,watchable:!0})),b=et.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=W.map(g=>xl(g)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function yM(t){return Promise.all([i0(t,"::before"),i0(t,"::after")])}function vM(t){return t.parentNode!==document.head&&!~nO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ep)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function s0(t){if(zr)return new Promise((e,n)=>{const r=Uo(t.querySelectorAll("*")).filter(vM).map(yM),i=hg.begin("searchPseudoElements");BT(),Promise.all(r).then(()=>{i(),dp(),e()}).catch(()=>{i(),dp(),n()})})}var _M={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=s0,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=et}=e;pe.searchPseudoElements&&s0(n)}}};let o0=!1;var wM={mixout(){return{dom:{unwatch(){BT(),o0=!0}}}},hooks(){return{bootstrap(){Z_(op("mutationObserverCallbacks",{}))},noAuto(){ZO()},watch(t){const{observeMutationsRoot:e}=t;o0?dp():Z_(op("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const a0=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var EM={mixout(){return{parse:{transform:t=>a0(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=a0(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(c," ").concat(u)},d={transform:"translate(".concat(s/2*-1," -256)")},p={outer:o,inner:h,path:d};return{tag:"g",attributes:J({},p.outer),children:[{tag:"g",attributes:J({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:J(J({},n.icon.attributes),p.path)}]}]}}}};const xf={x:0,y:0,width:"100%",height:"100%"};function l0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function SM(t){return t.tag==="g"?t.children:[t]}var TM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?xd(n.split(" ").map(i=>i.trim())):VT();return r.prefix||(r.prefix=Ri()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:c,icon:u}=i,{width:h,icon:d}=s,p=mO({transform:a,containerWidth:h,iconWidth:c}),v={tag:"rect",attributes:J(J({},xf),{},{fill:"white"})},E=u.children?{children:u.children.map(l0)}:{},I={tag:"g",attributes:J({},p.inner),children:[l0(J({tag:u.tag,attributes:J(J({},u.attributes),p.path)},E))]},k={tag:"g",attributes:J({},p.outer),children:[I]},T="mask-".concat(o||dl()),y="clip-".concat(o||dl()),A={tag:"mask",attributes:J(J({},xf),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,k]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:SM(d)},A]};return n.push(L,{tag:"rect",attributes:J({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(T,")")},xf)}),{children:n,attributes:r}}}},bM={provides(t){let e=!1;ki.matchMedia&&(e=ki.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:J(J({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=J(J({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:J(J({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:J(J({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:J(J({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:J(J({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:J(J({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:J(J({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:J(J({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},AM={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},IM=[vO,cM,uM,dM,fM,_M,wM,EM,TM,bM,AM];MO(IM,{mixoutsTo:_n});_n.noAuto;_n.config;_n.library;_n.dom;const hp=_n.parse;_n.findIconDefinition;_n.toHtml;const CM=_n.icon;_n.layer;_n.text;_n.counter;var HT={exports:{}},kM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",RM=kM,PM=RM;function $T(){}function WT(){}WT.resetWarningCache=$T;var xM=function(){function t(r,i,s,o,a,c){if(c!==PM){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:WT,resetWarningCache:$T};return n.PropTypes=n,n};HT.exports=xM();var LM=HT.exports;const Ie=gp(LM);function c0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Zn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?c0(Object(n),!0).forEach(function(r){Zs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qu(t){"@babel/helpers - typeof";return qu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qu(t)}function Zs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function NM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function DM(t,e){if(t==null)return{};var n=NM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function pp(t){return OM(t)||MM(t)||VM(t)||FM()}function OM(t){if(Array.isArray(t))return mp(t)}function MM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function VM(t,e){if(t){if(typeof t=="string")return mp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mp(t,e)}}function mp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function FM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UM(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,c=t.spin,u=t.spinPulse,h=t.spinReverse,d=t.pulse,p=t.fixedWidth,v=t.inverse,E=t.border,I=t.listItem,k=t.flip,T=t.size,y=t.rotation,A=t.pull,L=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":c,"fa-spin-reverse":h,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":v,"fa-border":E,"fa-li":I,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Zs(e,"fa-".concat(T),typeof T<"u"&&T!==null),Zs(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),Zs(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),Zs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(L).map(function(U){return L[U]?U:null}).filter(function(U){return U})}function jM(t){return t=t-0,t===t}function KT(t){return jM(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var zM=["style"];function BM(t){return t.charAt(0).toUpperCase()+t.slice(1)}function qM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=KT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[BM(i)]=s:e[i]=s,e},{})}function GT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return GT(t,c)}),i=Object.keys(e.attributes||{}).reduce(function(c,u){var h=e.attributes[u];switch(u){case"class":c.attrs.className=h,delete e.attributes.class;break;case"style":c.attrs.style=qM(h);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=h:c.attrs[KT(u)]=h}return c},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=DM(n,zM);return i.attrs.style=Zn(Zn({},i.attrs.style),o),t.apply(void 0,[e.tag,Zn(Zn({},i.attrs),a)].concat(pp(r)))}var QT=!1;try{QT=!0}catch{}function HM(){if(!QT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function u0(t){if(t&&qu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(hp.icon)return hp.icon(t);if(t===null)return null;if(t&&qu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Lf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Zs({},t,e):{}}var d0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},tr=Ep.forwardRef(function(t,e){var n=Zn(Zn({},d0),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,c=n.titleId,u=n.maskId,h=u0(r),d=Lf("classes",[].concat(pp(UM(n)),pp((o||"").split(" ")))),p=Lf("transform",typeof n.transform=="string"?hp.transform(n.transform):n.transform),v=Lf("mask",u0(i)),E=CM(h,Zn(Zn(Zn(Zn({},d),p),v),{},{symbol:s,title:a,titleId:c,maskId:u}));if(!E)return HM("Could not find icon",h),null;var I=E.abstract,k={ref:e};return Object.keys(n).forEach(function(T){d0.hasOwnProperty(T)||(k[T]=n[T])}),$M(I[0],k)});tr.displayName="FontAwesomeIcon";tr.propTypes={beat:Ie.bool,border:Ie.bool,beatFade:Ie.bool,bounce:Ie.bool,className:Ie.string,fade:Ie.bool,flash:Ie.bool,mask:Ie.oneOfType([Ie.object,Ie.array,Ie.string]),maskId:Ie.string,fixedWidth:Ie.bool,inverse:Ie.bool,flip:Ie.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ie.oneOfType([Ie.object,Ie.array,Ie.string]),listItem:Ie.bool,pull:Ie.oneOf(["right","left"]),pulse:Ie.bool,rotation:Ie.oneOf([0,90,180,270]),shake:Ie.bool,size:Ie.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ie.bool,spinPulse:Ie.bool,spinReverse:Ie.bool,symbol:Ie.oneOfType([Ie.bool,Ie.string]),title:Ie.string,titleId:Ie.string,transform:Ie.oneOfType([Ie.string,Ie.object]),swapOpacity:Ie.bool};var $M=GT.bind(null,Ep.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const WM={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z"]},KM={prefix:"fas",iconName:"bullseye",icon:[512,512,[],"f140","M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},GM={prefix:"fas",iconName:"angles-right",icon:[512,512,[187,"angle-double-right"],"f101","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},QM={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},YM={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},XM={prefix:"fas",iconName:"list-check",icon:[512,512,["tasks"],"f0ae","M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},JM={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},ZM={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};function e4({setActiveSection:t}){const{isFullScreen:e,toggleFullScreen:n}=gm(),r=i=>{e&&n(),t(i)};return j.jsxs(j.Fragment,{children:[j.jsx("div",{className:"sectionBtn",onClick:()=>r(""),children:j.jsx("img",{src:uT})}),j.jsx("div",{className:"sectionBtn",onClick:()=>r("dailyspace"),children:j.jsx(tr,{icon:QM})}),j.jsx("div",{className:"sectionBtn",onClick:()=>r("goal"),children:j.jsx(tr,{icon:KM})}),j.jsx("div",{className:"sectionBtn",onClick:()=>r("note"),children:j.jsx(tr,{icon:YM})}),j.jsx("div",{className:"sectionBtn",onClick:()=>r("task"),children:j.jsx(tr,{icon:XM})}),j.jsx("div",{className:"sectionBtn",onClick:()=>r("journal"),children:j.jsx(tr,{icon:ZM})})]})}function t4(t,e){t.innerHTML=` 
  <div class="aditor">
     <div class="line">
       <div class="Head">
       <label class="pointLabel">
       <input type="checkbox" /><span class="points"><i class="fa-solid fa-circle"></i></span
     ></label>
     <div class="content">
       <ul class="inputContent" contenteditable="true"></ul>
     </div>
       <div class="actionsOff">
           <button class="expand">
             <i class="fa-solid fa-caret-down"></i>
           </button>
       </div>
     </div>
     <div class="sub-line-off">
       <div class="sub-Head">
         <label class="pointLabel">
           <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
         <div class="sub-content">
           <ul class="inputSubContent" contenteditable="true"></ul>
         </div>
       </div>
     </div></div>
   </div>
   <div class="options" id="dropdownMenu">
     <div class="icon textBtn active" tabindex="0">
       <span><i class="fa-solid fa-paragraph"></i></span>
     </div>
     <div class="icon pointBtn" tabindex="0">
       <span><i class="fa-solid fa-list"></i></span>
     </div>
     <div class="icon indentBtn" tabindex="0">
       <span><i class="fa-solid fa-indent"></i></span>
     </div>
   </div>`;const n=t.querySelector(".textBtn"),r=t.querySelector(".pointBtn"),i=t.querySelector(".indentBtn");let s="pointLabel",o="",a=!1,c=!1,u=null,h=null;u==null&&(u=t.querySelector(".inputContent"));let d=null,p=null,v=null,E=null,I=null,k=null,T=null,y=null;const A=t.querySelector(".aditor"),L=A.querySelector(".points");W(0);let U=!1;u.textContent="Add details";function W(V){L.style.opacity=V}e!=""&&(A.innerHTML=e,U=!0);function b(){for(d=u.closest(".line"),p=d.nextElementSibling,v=d.previousElementSibling;p&&p.classList.contains("collapsed");)p=p.nextElementSibling;for(;v&&v.classList.contains("collapsed");)v=v.previousElementSibling;E=d.querySelector(".sub-line"),h!=null&&(k=h.closest(".sub-Head"),T=k.nextElementSibling,y=k.previousElementSibling),v!=null&&(I=v.querySelector(".sub-line"))}let g=!1;function w(){s="textLabel",a=!1,c=!1,B(),A.innerHTML=`
<div class="line">
     <div class="Head">
       <label class="textLabel"></label>
         <div class="content">
           <ul class="inputContent" contenteditable="true"></ul>
         </div>
       <div class="actionsOff">
           <button class="expand">
             <i class="fa-solid fa-caret-down"></i>
           </button>
       </div>
     </div>
     <div class="sub-line-off">
       <div class="sub-Head">
         <label class="pointLabel">
           <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
         <div class="sub-content">
           <ul class="inputSubContent" contenteditable="true"></ul>
         </div>
       </div>
     </div>
   </div>
 </div>`,B(),g=!1,c=!1,u=A.querySelector(".inputContent"),u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd(),b()}let S="";function R(){const V=window.getSelection();V.rangeCount>0&&(S=V.toString())}A.addEventListener("keydown",V=>{if(V.key=="/"&&(V.preventDefault(),X.classList.toggle("active"),le=Be()),V.key==" "&&(a?h.textContent.startsWith(">")?(V.preventDefault(),h.innerHTML=h.innerHTML.substring(4),s="textLabel",de(s)):h.textContent.startsWith("-")&&(V.preventDefault(),h.innerHTML=h.innerHTML.substring(1),s="pointLabel",de(s)):u.textContent.startsWith(">")?(V.preventDefault(),u.innerHTML=u.innerHTML.substring(4),s="textLabel",de(s)):u.textContent.startsWith("-")&&(V.preventDefault(),u.innerHTML=u.innerHTML.substring(1),s="pointLabel",de(s))),V.ctrlKey&&V.key=="z"&&V.preventDefault(),V.shiftKey&&(V.key==="ArrowLeft"||V.key==="ArrowRight")&&setTimeout(R,0),V.ctrlKey&&V.key=="x"&&(V.preventDefault(),a?(h.innerHTML=h.textContent.replace(S,""),h.focus(),window.getSelection().selectAllChildren(h),window.getSelection().collapseToEnd()):(u.innerHTML=u.textContent.replace(S,""),u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd())),V.ctrlKey&&V.key=="c"&&(V.preventDefault(),a?(h.focus(),window.getSelection().selectAllChildren(h),window.getSelection().collapseToEnd()):(u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd())),V.ctrlKey&&V.key=="v"&&(V.preventDefault(),a?(h.innerHTML+=S,h.focus(),window.getSelection().selectAllChildren(h),window.getSelection().collapseToEnd()):(u.innerHTML+=S,u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd())),V.ctrlKey&&V.key=="a"){V.preventDefault(),g=!0;let G=document.createRange();G.selectNodeContents(A),window.getSelection().removeAllRanges(),window.getSelection().addRange(G)}if(V.key=="Tab")if(V.shiftKey)V.preventDefault(),headingCollapse_All();else if(V.preventDefault(),s=="headingLabel"){const G=u.closest(".line");headingActionBtn(G,"switch"),headingCollapse(G)}else M();if(V.key=="Enter"&&(V.preventDefault(),b(),X.classList.remove("active"),!a&&u.textContent.trim()==""?(s="textLabel",He(s,"",d),u=d.querySelector(".inputContent"),u.focus()):!a&&u.textContent.trim()!=""?s=="headingLabel"&&d.querySelector(".actionsOff")?(s="textLabel",te(),headingScan()):te():a&&h.textContent.trim()==""?M():a&&h.textContent.trim()!=""&&te()),V.key=="Backspace"){if(g&&w(),!a)u.textContent.trim()==""&&(b(),v?(d.remove(),u=v.querySelector(".inputContent"),s=u.closest(".line").querySelector("label").className,s=="headingLabel"&&headingScan(),B(),u&&(V.preventDefault(),u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd())):p?(d.remove(),u=p.querySelector(".inputContent"),s=u.closest(".line").querySelector("label").className,B(),u&&(V.preventDefault(),u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd())):w());else if(h.textContent.trim()=="")if(b(),k=h.closest(".sub-Head"),T=k.nextElementSibling,y=k.previousElementSibling,y){if(k.remove(),h=y.querySelector(".inputSubContent"),s=y.querySelector("label").className,s=="checkboxLabel"){const se=y.closest(".line");updateParentCheckbox(se)}B(),h&&(V.preventDefault(),h.focus(),window.getSelection().selectAllChildren(h),window.getSelection().collapseToEnd())}else if(T){if(k.remove(),h=T.querySelector(".inputSubContent"),s=T.querySelector("label").className,s=="checkboxLabel"){const se=T.closest(".line");updateParentCheckbox(se)}B(),h&&(V.preventDefault(),h.focus(),window.getSelection().selectAllChildren(h),window.getSelection().collapseToEnd())}else V.preventDefault(),a=!1,d.querySelector(".actions").classList.replace("actions","actionsOff"),E.classList.replace("sub-line","sub-line-off"),u=h.closest(".line").querySelector(".inputContent"),s=u.closest(".line").querySelector("label").className,B(),u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd()}if((V.key=="ArrowUp"||V.key=="ArrowDown")&&!X.classList.contains("active")&&(V.preventDefault(),b(),ue(V.key)),V.key=="ArrowLeft"&&!X.classList.contains("active")){const G=window.getSelection().getRangeAt(0),se=document.createRange();a?(se.selectNodeContents(h),se.setEnd(G.startContainer,G.startOffset),se.toString().length==0&&(V.preventDefault(),b(),ue(V.key))):(se.selectNodeContents(u),se.setEnd(G.startContainer,G.startOffset),se.toString().length==0&&(V.preventDefault(),b(),ue(V.key)))}if(V.key=="ArrowRight"&&!X.classList.contains("active")){const G=window.getSelection().getRangeAt(0),se=document.createRange();if(a){se.selectNodeContents(h),se.setEnd(G.startContainer,G.startOffset);const fe=se.toString().length,rt=h.textContent.length;fe==rt&&(V.preventDefault(),b(),ue(V.key))}else{se.selectNodeContents(u),se.setEnd(G.startContainer,G.startOffset);const fe=se.toString().length,rt=u.textContent.length;fe==rt&&(V.preventDefault(),b(),ue(V.key))}}}),A.addEventListener("click",V=>{if(V.target.parentElement.className=="expand"||V.target.parentElement.className=="collapse")if(V.target.parentElement.closest(".line").querySelector("label").className=="headingLabel"){const se=V.target.parentElement.closest(".line");headingActionBtn(se,"switch"),headingCollapse(se)}else{let se=V.target.parentElement,fe=V.target.parentElement.closest(".line").querySelector(".sub-line");fe!=null?(fe.classList.replace("sub-line","sub-line-off"),se.classList.replace("expand","collapse"),se.innerHTML='<i class="fa-solid fa-caret-right"></i>'):(fe=se.closest(".line").querySelector(".sub-line-off"),fe.classList.replace("sub-line-off","sub-line"),se.classList.replace("collapse","expand"),se.innerHTML=' <i class="fa-solid fa-caret-down"></i>')}else if(V.target.parentElement.className=="actions")if(V.target.closest(".line").querySelector("label").className=="headingLabel"){const se=V.target.closest(".line");headingActionBtn(se,"switch"),headingCollapse(se)}else{let se=V.target,fe=V.target.closest(".line").querySelector(".sub-line");fe!=null?(fe.classList.replace("sub-line","sub-line-off"),se.classList.replace("expand","collapse"),se.innerHTML='<i class="fa-solid fa-caret-right"></i>'):(fe=se.closest(".line").querySelector(".sub-line-off"),fe.classList.replace("sub-line-off","sub-line"),se.classList.replace("collapse","expand"),se.innerHTML=' <i class="fa-solid fa-caret-down"></i>')}else if(V.target.classList=="inputContent")U||(u=V.target,b(),u.textContent="",W(1),U=!0),a=!1,u=V.target,b(),s=d.querySelector("label").className,B();else if(V.target.classList=="inputSubContent")a=!0,h=V.target,u=h.closest(".sub-Head").closest(".line").querySelector(".inputContent"),b(),s=k.querySelector("label").className,B();else if(V.target.type=="checkbox"){let G=V.target.nextElementSibling;G.classList=="unchecked"?G.classList.replace("unchecked","checked"):G.classList.replace("checked","unchecked");const se=V.target.closest(".line");G.closest(".Head")?updateNestedCheckbox(se):updateParentCheckbox(se)}else V.target.className=="sub-line"?(E=V.target.closest(".sub-line"),k=V.target.closest(".sub-Head"),b(),s=k.querySelector("label").className,h=k.querySelector(".inputSubContent"),h.focus(),window.getSelection().selectAllChildren(h),window.getSelection().collapseToEnd()):(d=V.target.closest(".line"),b(),s=d.querySelector("label").className,u=d.querySelector(".inputContent"),u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd())});function x(){if(a)k=h.closest(".sub-Head"),y=k.previousElementSibling,y!=null?(s=y.querySelector("label").className,h=y.querySelector(".inputSubContent"),h.focus(),window.getSelection().selectAllChildren(h)):y==null&&(a=!1,s=k.closest(".line").querySelector("label").className,u=k.closest(".line").querySelector(".inputContent"),u.focus(),window.getSelection().selectAllChildren(u));else if(v!=null&&I==null)s=v.querySelector("label").className,u=v.querySelector(".inputContent"),u.focus(),window.getSelection().selectAllChildren(u);else if(v!=null&&I!=null){a=!0;const V=I.lastElementChild;s=V.querySelector("label").className,h=V.querySelector(".inputSubContent"),h.focus(),window.getSelection().selectAllChildren(h)}window.getSelection().collapseToEnd()}function C(V){if(a)d=h.closest(".line"),p=d.nextElementSibling,k=h.closest(".sub-Head"),T=k.nextElementSibling,T!=null?(s=T.querySelector("label").className,h=T.querySelector(".inputSubContent"),h.focus(),window.getSelection().selectAllChildren(h)):T==null&&p!=null&&(a=!1,s=p.closest(".line").querySelector("label").className,u=p.closest(".line").querySelector(".inputContent"),u.focus(),window.getSelection().selectAllChildren(u));else if(p!=null&&E==null)s=p.querySelector("label").className,u=p.querySelector(".inputContent"),u.focus(),window.getSelection().selectAllChildren(u);else if(E!=null){a=!0;const G=E.firstElementChild;s=G.querySelector("label").className,h=G.querySelector(".inputSubContent"),h.focus(),window.getSelection().selectAllChildren(h)}V=="ArrowRight"?window.getSelection().collapseToStart():window.getSelection().collapseToEnd()}function ue(V){b(),V=="ArrowUp"?x():V=="ArrowDown"?C():V=="ArrowLeft"?x():V=="ArrowRight"&&C("ArrowRight"),b(),B()}function je(V,G){if(V=="textLabel")return`<label class="textLabel"></label>
     <div class="content">
       <ul class="inputContent" contenteditable="true">${G}</ul>
     </div>`;if(V=="pointLabel")return`<label class="pointLabel">
       <input type="checkbox" /><span class="points"><i class="fa-solid fa-circle"></i></span
     ></label>
     <div class="content">
       <ul class="inputContent" contenteditable="true">${G}</ul>
     </div>`}function He(V,G,se){let fe=je(V,G);V=="headingLabel"?se.innerHTML=`<div class="Head">
${fe}
<div class="actionsOff">
 <button class="expand">
   <i class="fa-solid fa-caret-down"></i>
 </button>
</div>
</div>
`:V=="checkboxLabel"?se.innerHTML=`<div class="Head">
   ${fe}
   <div class="actionsOff">
       <button class="expand">
         <i class="fa-solid fa-caret-down"></i>
       </button>
   </div>
 </div>
 <div class="sub-line-off">
   <div class="sub-Head">
     <label class="checkboxLabel">
       <input type="checkbox"/><span class="unchecked"></span
     ></label>
     <div class="sub-content">
       <ul class="inputSubContent" contenteditable="true"></ul>
     </div>
   </div>
 </div>`:se.innerHTML=`<div class="Head">
   ${fe}
   <div class="actionsOff">
       <button class="expand">
         <i class="fa-solid fa-caret-down"></i>
       </button>
   </div>
 </div>
 <div class="sub-line-off">
   <div class="sub-Head">
     <label class="pointLabel">
       <input type="checkbox" /><span class="points"><i class="fa-solid fa-square"></i></span
     ></label>
     <div class="sub-content">
       <ul class="inputSubContent" contenteditable="true"></ul>
     </div>
   </div>
 </div>`}function ct(V,G,se,fe){let rt=je(V,G);fe.innerHTML=`<div class="Head">
  ${rt}
  <div class="actions">
      <button class="expand">
        <i class="fa-solid fa-caret-down"></i>
      </button>
  </div>
 </div>
${se}`}function ee(V,G,se){V=="textLabel"?se.innerHTML=`
<label class="textLabel"></label>
<div class="sub-content">
 <ul class="inputSubContent" contenteditable="true">${G}</ul>
</div>`:V=="pointLabel"&&(se.innerHTML=`
<label class="pointLabel">
<input type="checkbox" /><span class="points"><i class="fa-solid fa-square"></i></i></span
></label>
<div class="sub-content">
<ul class="inputSubContent" contenteditable="true">${G}</ul>
</div>`)}function te(){if(b(),B(),a){if(!c&&h.textContent.trim()!=""){const V=window.getSelection().getRangeAt(0),G=document.createRange();G.selectNodeContents(h),G.setEnd(V.startContainer,V.startOffset);const se=G.toString().length,fe=document.createElement("div");fe.classList.add("sub-Head"),k=h.closest(".sub-Head"),E=k.closest(".sub-line"),ee(s,"",fe),se=="0"?(E.insertBefore(fe,k),h=fe.querySelector(".inputSubContent"),h.focus(),window.getSelection().selectAllChildren(h),window.getSelection().collapseToEnd()):T!=null?(E=T.closest(".sub-line"),E.insertBefore(fe,T),h=fe.querySelector(".inputSubContent"),h.focus(),window.getSelection().selectAllChildren(h),window.getSelection().collapseToEnd()):(E=k.closest(".sub-line"),E.appendChild(fe),h=fe.querySelector(".inputSubContent"),h.focus(),window.getSelection().selectAllChildren(h),window.getSelection().collapseToEnd())}else h.textContent.trim()!=""&&(ee(s,o,k),c=!1,h=k.querySelector(".inputSubContent"),h.focus(),window.getSelection().selectAllChildren(h),window.getSelection().collapseToEnd());if(d.querySelector("label").className=="checkboxLabel"){const V=k.closest(".line");updateParentCheckbox(V)}}else{const V=window.getSelection().getRangeAt(0),G=document.createRange();G.selectNodeContents(u),G.setEnd(V.startContainer,V.startOffset);const se=G.toString().length,fe=document.createElement("div");fe.classList.add("line"),He(s,"",fe),se=="0"?(A.insertBefore(fe,d),u=fe.querySelector(".inputContent"),u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd()):p!=null?(A.insertBefore(fe,p),u=fe.querySelector(".inputContent"),u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd()):(A.appendChild(fe),u=fe.querySelector(".inputContent"),u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd())}}function de(V){if(B(),b(),a)c=!0,o=h.textContent,te();else{o=u.textContent;let G=u.closest(".line").querySelector(".sub-line");G==null?He(V,o,d):(G=G.outerHTML,ct(V,o,G,d)),u=d.querySelector(".inputContent"),u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd()}}function M(){b();const V=d.querySelector(".inputContent").textContent;if(E=d.querySelector(".sub-line-off"),V=="")u.focus();else if(a)a=!1,s=d.querySelector(".Head").querySelector("label").className,s=="headingLabel"&&(s="textLabel"),u=h.closest(".sub-Head").closest(".line").querySelector(".inputContent"),te();else if(E!=null&&V!=""){const G=E.querySelectorAll(".sub-Head").length,se=d.querySelector(".actionsOff");if(G==1&&se!=null)a=!0,E.classList.replace("sub-line-off","sub-line"),se.classList.replace("actionsOff","actions"),h=E.querySelector(".inputSubContent"),s=h.closest(".sub-Head").querySelector("label").className,h.focus(),window.getSelection().selectAllChildren(h),window.getSelection().collapseToEnd();else{a=!1;const fe=d.querySelector(".collapse");E=d.querySelector(".sub-line-off"),E.classList.replace("sub-line-off","sub-line"),fe.classList.replace("collapse","expand"),fe.innerHTML=' <i class="fa-solid fa-caret-down"></i>',u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd()}}else if(E==null&&h.textContent!=""){a=!1;const G=d.querySelector(".expand");E=d.querySelector(".sub-line"),E.classList.replace("sub-line","sub-line-off"),G.classList.replace("expand","collapse"),G.innerHTML='<i class="fa-solid fa-caret-right"></i>',u.focus(),window.getSelection().selectAllChildren(u),window.getSelection().collapseToEnd()}B()}function B(){t.querySelector(".options").querySelectorAll("[class$=active]").forEach(se=>{se.classList.remove("active")}),a?i.classList.add("active"):i.classList.remove("active"),s=="textLabel"?n.classList.add("active"):s=="pointLabel"&&r.classList.add("active")}const X=t.querySelector("#dropdownMenu");let le;function Be(){if(s=="textLabel")return 0;if(s=="pointLabel")return 1}t.addEventListener("keydown",V=>{if(X.classList.contains("active")){const G=X.querySelectorAll(".icon");V.key==="ArrowRight"?(V.preventDefault(),le=(le+1)%G.length,G[le].focus()):V.key==="ArrowLeft"?(V.preventDefault(),le=(le-1+G.length)%G.length,G[le].focus()):V.key==="Enter"&&le!==-1&&(V.preventDefault(),G[le].click(),X.classList.remove("active"))}}),n.addEventListener("click",V=>{s="textLabel",de(s)}),r.addEventListener("click",V=>{s="pointLabel",de(s)}),i.addEventListener("click",V=>{M()})}function n4(t,e){t.innerHTML=`
  <div class="aditor">
  <div class="line">
    <div class="Head">
      <label class="checkboxLabel">
        <input type="checkbox"><span class="unchecked" style="opacity: 0.25;"></span></label>
      <div class="content">
        <ul class="inputContent" contenteditable="true"></ul>
      </div>
      <div class="actionsOff">
        <button class="expand">
          <i class="fa-solid fa-caret-down"></i>
        </button>
      </div>
    </div>
    <div class="sub-line-off">
      <div class="sub-Head">
        <label class="checkboxLabel">
          <input type="checkbox"><span class="unchecked"></span></label>
        <div class="sub-content">
          <ul class="inputSubContent" contenteditable="true"></ul>
        </div>
      </div>
    </div>
  </div>
</div>`;let n="checkboxLabel",r="",i=!1,s=!1,o=null,a=null;o==null&&(o=t.querySelector(".inputContent"));let c=null,u=null,h=null,d=null,p=null,v=null,E=null,I=null;const k=t.querySelector(".aditor"),T=k.querySelector(".unchecked");let y=!1;o.textContent="Add a steps";function A(M){T.style.opacity=M}A(0),e!=""&&(k.innerHTML=e,y=!0);function L(){for(c=o.closest(".line"),u=c.nextElementSibling,h=c.previousElementSibling;u&&u.classList.contains("collapsed");)u=u.nextElementSibling;for(;h&&h.classList.contains("collapsed");)h=h.previousElementSibling;d=c.querySelector(".sub-line"),a!=null&&(v=a.closest(".sub-Head"),E=v.nextElementSibling,I=v.previousElementSibling),h!=null&&(p=h.querySelector(".sub-line"))}let U=!1;function W(){n="checkboxLabel",i=!1,s=!1,k.innerHTML=`
  <div class="line">
    <div class="Head">
      <label class="checkboxLabel">
        <input type="checkbox"><span class="unchecked" style="opacity: 0.25;"></span></label>
      <div class="content">
        <ul class="inputContent" contenteditable="true"></ul>
      </div>
      <div class="actionsOff">
        <button class="expand">
          <i class="fa-solid fa-caret-down"></i>
        </button>
      </div>
    </div>
    <div class="sub-line-off">
      <div class="sub-Head">
        <label class="checkboxLabel">
          <input type="checkbox"><span class="unchecked"></span></label>
        <div class="sub-content">
          <ul class="inputSubContent" contenteditable="true"></ul>
        </div>
      </div>
    </div>
  </div>
`,U=!1,s=!1,o=k.querySelector(".inputContent"),o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd(),L()}let b="";function g(){const M=window.getSelection();M.rangeCount>0&&(b=M.toString())}k.addEventListener("keydown",M=>{if(M.key=="/"&&M.preventDefault(),M.key==" "&&(i?a.textContent.startsWith("*")&&(M.preventDefault(),a.innerHTML=a.innerHTML.substring(1),n="checkboxLabel",ct(n)):o.textContent.startsWith("*")&&(M.preventDefault(),o.innerHTML=o.innerHTML.substring(1),n="checkboxLabel",ct(n))),M.ctrlKey&&M.key=="z"&&M.preventDefault(),M.shiftKey&&(M.key==="ArrowLeft"||M.key==="ArrowRight")&&setTimeout(g,0),M.ctrlKey&&M.key=="x"&&(M.preventDefault(),i?(a.innerHTML=a.textContent.replace(b,""),a.focus(),window.getSelection().selectAllChildren(a),window.getSelection().collapseToEnd()):(o.innerHTML=o.textContent.replace(b,""),o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd())),M.ctrlKey&&M.key=="c"&&(M.preventDefault(),i?(a.focus(),window.getSelection().selectAllChildren(a),window.getSelection().collapseToEnd()):(o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd())),M.ctrlKey&&M.key=="v"&&(M.preventDefault(),i?(a.innerHTML+=b,a.focus(),window.getSelection().selectAllChildren(a),window.getSelection().collapseToEnd()):(o.innerHTML+=b,o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd())),M.ctrlKey&&M.key=="a"){M.preventDefault(),U=!0;let B=document.createRange();B.selectNodeContents(k),window.getSelection().removeAllRanges(),window.getSelection().addRange(B)}if(M.key=="Tab"&&(M.preventDefault(),ee()),M.key=="Enter"&&(M.preventDefault(),L(),!i&&o.textContent.trim()==""?(n="checkboxLabel",C(n,"",c),o=c.querySelector(".inputContent"),o.focus()):!i&&o.textContent.trim()!=""?He():i&&a.textContent.trim()==""?ee():i&&a.textContent.trim()!=""&&He()),M.key=="Backspace"){if(U&&W(),!i)o.textContent.trim()==""&&(L(),h?(c.remove(),o=h.querySelector(".inputContent"),n=o.closest(".line").querySelector("label").className,o&&(M.preventDefault(),o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd())):u?(c.remove(),o=u.querySelector(".inputContent"),n=o.closest(".line").querySelector("label").className,o&&(M.preventDefault(),o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd())):W());else if(a.textContent.trim()=="")if(L(),v=a.closest(".sub-Head"),E=v.nextElementSibling,I=v.previousElementSibling,I){if(v.remove(),a=I.querySelector(".inputSubContent"),n=I.querySelector("label").className,n=="checkboxLabel"){const X=I.closest(".line");de(X)}a&&(M.preventDefault(),a.focus(),window.getSelection().selectAllChildren(a),window.getSelection().collapseToEnd())}else if(E){if(v.remove(),a=E.querySelector(".inputSubContent"),n=E.querySelector("label").className,n=="checkboxLabel"){const X=E.closest(".line");de(X)}a&&(M.preventDefault(),a.focus(),window.getSelection().selectAllChildren(a),window.getSelection().collapseToEnd())}else M.preventDefault(),i=!1,c.querySelector(".actions").classList.replace("actions","actionsOff"),d.classList.replace("sub-line","sub-line-off"),o=a.closest(".line").querySelector(".inputContent"),n=o.closest(".line").querySelector("label").className,o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd()}if((M.key=="ArrowUp"||M.key=="ArrowDown")&&(M.preventDefault(),L(),R(M.key)),M.key=="ArrowLeft"){const B=window.getSelection().getRangeAt(0),X=document.createRange();i?(X.selectNodeContents(a),X.setEnd(B.startContainer,B.startOffset),X.toString().length==0&&(M.preventDefault(),L(),R(M.key))):(X.selectNodeContents(o),X.setEnd(B.startContainer,B.startOffset),X.toString().length==0&&(M.preventDefault(),L(),R(M.key)))}if(M.key=="ArrowRight"){const B=window.getSelection().getRangeAt(0),X=document.createRange();if(i){X.selectNodeContents(a),X.setEnd(B.startContainer,B.startOffset);const le=X.toString().length,Be=a.textContent.length;le==Be&&(M.preventDefault(),L(),R(M.key))}else{X.selectNodeContents(o),X.setEnd(B.startContainer,B.startOffset);const le=X.toString().length,Be=o.textContent.length;le==Be&&(M.preventDefault(),L(),R(M.key))}}}),k.addEventListener("click",M=>{if(M.target.parentElement.className=="expand"||M.target.parentElement.className=="collapse"){M.target.parentElement.closest(".line").querySelector("label").className;let B=M.target.parentElement,X=M.target.parentElement.closest(".line").querySelector(".sub-line");X!=null?(X.classList.replace("sub-line","sub-line-off"),B.classList.replace("expand","collapse"),B.innerHTML='<i class="fa-solid fa-caret-right"></i>'):(X=B.closest(".line").querySelector(".sub-line-off"),X.classList.replace("sub-line-off","sub-line"),B.classList.replace("collapse","expand"),B.innerHTML=' <i class="fa-solid fa-caret-down"></i>')}else if(M.target.parentElement.className=="actions"){M.target.closest(".line").querySelector("label").className;let B=M.target,X=M.target.closest(".line").querySelector(".sub-line");X!=null?(X.classList.replace("sub-line","sub-line-off"),B.classList.replace("expand","collapse"),B.innerHTML='<i class="fa-solid fa-caret-right"></i>'):(X=B.closest(".line").querySelector(".sub-line-off"),X.classList.replace("sub-line-off","sub-line"),B.classList.replace("collapse","expand"),B.innerHTML=' <i class="fa-solid fa-caret-down"></i>')}else if(M.target.classList=="inputContent")y||(o=M.target,L(),o.textContent="",A(1),y=!0),i=!1,o=M.target,L(),n=c.querySelector("label").className;else if(M.target.classList=="inputSubContent")i=!0,a=M.target,o=a.closest(".sub-Head").closest(".line").querySelector(".inputContent"),L(),n=v.querySelector("label").className;else if(M.target.type=="checkbox"){let B=M.target.nextElementSibling;B.classList=="unchecked"?B.classList.replace("unchecked","checked"):B.classList.replace("checked","unchecked");const X=M.target.closest(".line");B.closest(".Head")?te(X):de(X)}else M.target.className=="sub-line"?(d=M.target.closest(".sub-line"),v=M.target.closest(".sub-Head"),L(),n=v.querySelector("label").className,a=v.querySelector(".inputSubContent"),a.focus(),window.getSelection().selectAllChildren(a),window.getSelection().collapseToEnd()):(c=M.target.closest(".line"),L(),n=c.querySelector("label").className,o=c.querySelector(".inputContent"),o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd())});function w(){if(i)v=a.closest(".sub-Head"),I=v.previousElementSibling,I!=null?(n=I.querySelector("label").className,a=I.querySelector(".inputSubContent"),a.focus(),window.getSelection().selectAllChildren(a)):I==null&&(i=!1,n=v.closest(".line").querySelector("label").className,o=v.closest(".line").querySelector(".inputContent"),o.focus(),window.getSelection().selectAllChildren(o));else if(h!=null&&p==null)n=h.querySelector("label").className,o=h.querySelector(".inputContent"),o.focus(),window.getSelection().selectAllChildren(o);else if(h!=null&&p!=null){i=!0;const M=p.lastElementChild;n=M.querySelector("label").className,a=M.querySelector(".inputSubContent"),a.focus(),window.getSelection().selectAllChildren(a)}window.getSelection().collapseToEnd()}function S(M){if(i)c=a.closest(".line"),u=c.nextElementSibling,v=a.closest(".sub-Head"),E=v.nextElementSibling,E!=null?(n=E.querySelector("label").className,a=E.querySelector(".inputSubContent"),a.focus(),window.getSelection().selectAllChildren(a)):E==null&&u!=null&&(i=!1,n=u.closest(".line").querySelector("label").className,o=u.closest(".line").querySelector(".inputContent"),o.focus(),window.getSelection().selectAllChildren(o));else if(u!=null&&d==null)n=u.querySelector("label").className,o=u.querySelector(".inputContent"),o.focus(),window.getSelection().selectAllChildren(o);else if(d!=null){i=!0;const B=d.firstElementChild;n=B.querySelector("label").className,a=B.querySelector(".inputSubContent"),a.focus(),window.getSelection().selectAllChildren(a)}M=="ArrowRight"?window.getSelection().collapseToStart():window.getSelection().collapseToEnd()}function R(M){L(),M=="ArrowUp"?w():M=="ArrowDown"?S():M=="ArrowLeft"?w():M=="ArrowRight"&&S("ArrowRight"),L(),activeOption()}function x(M,B){if(M=="checkboxLabel")return`<label class="checkboxLabel">
              <input type="checkbox"/><span class="unchecked"></span
            ></label>
            <div class="content">
              <ul class="inputContent" contenteditable="true">${B}</ul>
            </div>`}function C(M,B,X){let le=x(M,B);M=="checkboxLabel"&&(X.innerHTML=`<div class="Head">
          ${le}
          <div class="actionsOff">
              <button class="expand">
                <i class="fa-solid fa-caret-down"></i>
              </button>
          </div>
        </div>
        <div class="sub-line-off">
          <div class="sub-Head">
            <label class="checkboxLabel">
              <input type="checkbox"/><span class="unchecked"></span
            ></label>
            <div class="sub-content">
              <ul class="inputSubContent" contenteditable="true"></ul>
            </div>
          </div>
        </div>`)}function ue(M,B,X,le){let Be=x(M,B);le.innerHTML=`<div class="Head">
         ${Be}
         <div class="actions">
             <button class="expand">
               <i class="fa-solid fa-caret-down"></i>
             </button>
         </div>
        </div>
       ${X}`}function je(M,B,X){M=="checkboxLabel"&&(X.innerHTML=`
    <label class="checkboxLabel">
      <input type="checkbox"/><span class="unchecked"></span
    ></label>
    <div class="sub-content">
      <ul class="inputSubContent" contenteditable="true">${B}</ul>
    </div>`)}function He(){if(L(),i){if(!s&&a.textContent.trim()!=""){const M=window.getSelection().getRangeAt(0),B=document.createRange();B.selectNodeContents(a),B.setEnd(M.startContainer,M.startOffset);const X=B.toString().length,le=document.createElement("div");le.classList.add("sub-Head"),v=a.closest(".sub-Head"),d=v.closest(".sub-line"),je(n,"",le),X=="0"?(d.insertBefore(le,v),a=le.querySelector(".inputSubContent"),a.focus(),window.getSelection().selectAllChildren(a),window.getSelection().collapseToEnd()):E!=null?(d=E.closest(".sub-line"),d.insertBefore(le,E),a=le.querySelector(".inputSubContent"),a.focus(),window.getSelection().selectAllChildren(a),window.getSelection().collapseToEnd()):(d=v.closest(".sub-line"),d.appendChild(le),a=le.querySelector(".inputSubContent"),a.focus(),window.getSelection().selectAllChildren(a),window.getSelection().collapseToEnd())}else a.textContent.trim()!=""&&(je(n,r,v),s=!1,a=v.querySelector(".inputSubContent"),a.focus(),window.getSelection().selectAllChildren(a),window.getSelection().collapseToEnd());if(c.querySelector("label").className=="checkboxLabel"){const M=v.closest(".line");de(M)}}else{const M=window.getSelection().getRangeAt(0),B=document.createRange();B.selectNodeContents(o),B.setEnd(M.startContainer,M.startOffset);const X=B.toString().length,le=document.createElement("div");le.classList.add("line"),C(n,"",le),X=="0"?(k.insertBefore(le,c),o=le.querySelector(".inputContent"),o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd()):u!=null?(k.insertBefore(le,u),o=le.querySelector(".inputContent"),o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd()):(k.appendChild(le),o=le.querySelector(".inputContent"),o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd())}}function ct(M){if(L(),i)s=!0,r=a.textContent,He();else{r=o.textContent;let B=o.closest(".line").querySelector(".sub-line");B==null?C(M,r,c):(B=B.outerHTML,ue(M,r,B,c)),o=c.querySelector(".inputContent"),o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd()}}function ee(){L();const M=c.querySelector(".inputContent").textContent;if(d=c.querySelector(".sub-line-off"),M=="")o.focus();else if(i)i=!1,n=c.querySelector(".Head").querySelector("label").className,n=="headingLabel"&&(n="textLabel"),o=a.closest(".sub-Head").closest(".line").querySelector(".inputContent"),He();else if(d!=null&&M!=""){const B=d.querySelectorAll(".sub-Head").length,X=c.querySelector(".actionsOff");if(B==1&&X!=null)i=!0,d.classList.replace("sub-line-off","sub-line"),X.classList.replace("actionsOff","actions"),a=d.querySelector(".inputSubContent"),n=a.closest(".sub-Head").querySelector("label").className,a.focus(),window.getSelection().selectAllChildren(a),window.getSelection().collapseToEnd();else{i=!1;const le=c.querySelector(".collapse");d=c.querySelector(".sub-line-off"),d.classList.replace("sub-line-off","sub-line"),le.classList.replace("collapse","expand"),le.innerHTML=' <i class="fa-solid fa-caret-down"></i>',o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd()}}else if(d==null&&a.textContent!=""){i=!1;const B=c.querySelector(".expand");d=c.querySelector(".sub-line"),d.classList.replace("sub-line","sub-line-off"),B.classList.replace("expand","collapse"),B.innerHTML='<i class="fa-solid fa-caret-right"></i>',o.focus(),window.getSelection().selectAllChildren(o),window.getSelection().collapseToEnd()}}function te(M){M.querySelector(".Head").querySelector(".checked")?M.querySelector(".sub-line").querySelectorAll(".unchecked").forEach(X=>{X.classList.replace("unchecked","checked")}):M.querySelector(".sub-line").querySelectorAll(".checked").forEach(X=>{X.classList.replace("checked","unchecked")})}function de(M){const B=M.querySelector(".sub-line").querySelectorAll(".unchecked").length,X=M.querySelector(".sub-line").querySelectorAll(".checked").length;if(B==0&&X>0){const le=M.querySelector(".Head").querySelector(".unchecked");le!=null&&le.classList.replace("unchecked","checked")}else if(B>0){const le=M.querySelector(".Head").querySelector(".checked");le!=null&&le.classList.replace("checked","unchecked")}}}function r4(t){t.innerHTML=` 
           <div class="aditor">
              <div class="line">
                <div class="Head">
                <label class="textLabel"></label>
                  <div class="content">
                    <ul class="inputContent" contenteditable="true"></ul>
                  </div>
                <div class="actionsOff">
                    <button class="expand">
                      <i class="fa-solid fa-caret-down"></i>
                    </button>
                </div>
              </div>
              <div class="sub-line-off">
                <div class="sub-Head">
                  <label class="pointLabel">
                    <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                  <div class="sub-content">
                    <ul class="inputSubContent" contenteditable="true"></ul>
                  </div>
                </div>
              </div></div>
            </div>
            <div class="options" id="dropdownMenu">
              <div class="icon textBtn active" tabindex="0">
                <span><i class="fa-solid fa-paragraph"></i></span>
              </div>
              <div class="icon headingBtn" tabindex="0">
                <span><i class="fa-solid fa-heading"></i></span>
              </div>
              <div class="icon pointBtn" tabindex="0">
                <span><i class="fa-solid fa-list"></i></span>
              </div>
              <div class="icon checkboxBtn" tabindex="0">
                <span><i class="fa-solid fa-square-check"></i></span>
              </div>
              <div class="icon indentBtn" tabindex="0">
                <span><i class="fa-solid fa-indent"></i></span>
              </div>
            </div>`;const e=t.querySelector(".aditor"),n=t.querySelector(".headingBtn"),r=t.querySelector(".textBtn"),i=t.querySelector(".pointBtn"),s=t.querySelector(".checkboxBtn"),o=t.querySelector(".indentBtn");let a="textLabel",c="",u=!1,h=!1,d=null,p=null;d==null&&(d=t.querySelector(".inputContent"));let v=null,E=null,I=null,k=null,T=null,y=null,A=null,L=null;function U(){for(v=d.closest(".line"),E=v.nextElementSibling,I=v.previousElementSibling;E&&E.classList.contains("collapsed");)E=E.nextElementSibling;for(;I&&I.classList.contains("collapsed");)I=I.previousElementSibling;k=v.querySelector(".sub-line"),p!=null&&(y=p.closest(".sub-Head"),A=y.nextElementSibling,L=y.previousElementSibling),I!=null&&(T=I.querySelector(".sub-line"))}let W=!1;function b(){a="textLabel",u=!1,h=!1,fe(),e.innerHTML=`
        <div class="line">
              <div class="Head">
                <label class="textLabel"></label>
                  <div class="content">
                    <ul class="inputContent" contenteditable="true"></ul>
                  </div>
                <div class="actionsOff">
                    <button class="expand">
                      <i class="fa-solid fa-caret-down"></i>
                    </button>
                </div>
              </div>
              <div class="sub-line-off">
                <div class="sub-Head">
                  <label class="pointLabel">
                    <input type="checkbox"><span class="points"><i class="fa-solid fa-square"></i></span></label>
                  <div class="sub-content">
                    <ul class="inputSubContent" contenteditable="true"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>`,fe(),W=!1,h=!1,d=e.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd(),U()}let g="";function w(){const D=window.getSelection();D.rangeCount>0&&(g=D.toString())}e.addEventListener("keydown",D=>{if(D.key=="/"&&(D.preventDefault(),rt.classList.toggle("active"),Vt=Di()),D.key==" "&&(u?p.textContent.startsWith(">")?(D.preventDefault(),p.innerHTML=p.innerHTML.substring(4),a="textLabel",G(a)):p.textContent.startsWith("-")?(D.preventDefault(),p.innerHTML=p.innerHTML.substring(1),a="pointLabel",G(a)):p.textContent.startsWith("*")&&(D.preventDefault(),p.innerHTML=p.innerHTML.substring(1),a="checkboxLabel",G(a)):d.textContent.startsWith("#")?(D.preventDefault(),d.innerHTML=d.innerHTML.substring(1),a="headingLabel",V(a)):d.textContent.startsWith(">")?(D.preventDefault(),d.innerHTML=d.innerHTML.substring(4),a="textLabel",G(a)):d.textContent.startsWith("-")?(D.preventDefault(),d.innerHTML=d.innerHTML.substring(1),a="pointLabel",G(a)):d.textContent.startsWith("*")&&(D.preventDefault(),d.innerHTML=d.innerHTML.substring(1),a="checkboxLabel",G(a))),D.ctrlKey&&D.key=="z"&&D.preventDefault(),D.shiftKey&&(D.key==="ArrowLeft"||D.key==="ArrowRight")&&setTimeout(w,0),D.ctrlKey&&D.key=="x"&&(D.preventDefault(),u?(p.innerHTML=p.textContent.replace(g,""),p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd()):(d.innerHTML=d.textContent.replace(g,""),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd())),D.ctrlKey&&D.key=="c"&&(D.preventDefault(),u?(p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd()):(d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd())),D.ctrlKey&&D.key=="v"&&(D.preventDefault(),u?(p.innerHTML+=g,p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd()):(d.innerHTML+=g,d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd())),D.ctrlKey&&D.key=="a"){D.preventDefault(),W=!0;let q=document.createRange();q.selectNodeContents(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(q)}if(D.key=="Tab")if(D.shiftKey)D.preventDefault(),X();else if(D.preventDefault(),a=="headingLabel"){const q=d.closest(".line");te(q,"switch"),M(q)}else se();if(D.key=="Enter"&&(D.preventDefault(),U(),rt.classList.remove("active"),!u&&d.textContent.trim()==""?(a="textLabel",je(a,"",v),d=v.querySelector(".inputContent"),d.focus()):!u&&d.textContent.trim()!=""?a=="headingLabel"&&v.querySelector(".actionsOff")?(a="textLabel",ee(),de()):ee():u&&p.textContent.trim()==""?se():u&&p.textContent.trim()!=""&&ee()),D.key=="Backspace"){if(W&&b(),!u)d.textContent.trim()==""&&(U(),I?(v.remove(),d=I.querySelector(".inputContent"),a=d.closest(".line").querySelector("label").className,a=="headingLabel"&&de(),fe(),d&&(D.preventDefault(),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd())):E?(v.remove(),d=E.querySelector(".inputContent"),a=d.closest(".line").querySelector("label").className,fe(),d&&(D.preventDefault(),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd())):b());else if(p.textContent.trim()=="")if(U(),y=p.closest(".sub-Head"),A=y.nextElementSibling,L=y.previousElementSibling,L){if(y.remove(),p=L.querySelector(".inputSubContent"),a=L.querySelector("label").className,a=="checkboxLabel"){const Q=L.closest(".line");Be(Q)}fe(),p&&(D.preventDefault(),p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd())}else if(A){if(y.remove(),p=A.querySelector(".inputSubContent"),a=A.querySelector("label").className,a=="checkboxLabel"){const Q=A.closest(".line");Be(Q)}fe(),p&&(D.preventDefault(),p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd())}else D.preventDefault(),u=!1,v.querySelector(".actions").classList.replace("actions","actionsOff"),k.classList.replace("sub-line","sub-line-off"),d=p.closest(".line").querySelector(".inputContent"),a=d.closest(".line").querySelector("label").className,fe(),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd()}if((D.key=="ArrowUp"||D.key=="ArrowDown")&&!rt.classList.contains("active")&&(D.preventDefault(),U(),C(D.key)),D.key=="ArrowLeft"&&!rt.classList.contains("active")){const q=window.getSelection().getRangeAt(0),Q=document.createRange();u?(Q.selectNodeContents(p),Q.setEnd(q.startContainer,q.startOffset),Q.toString().length==0&&(D.preventDefault(),U(),C(D.key))):(Q.selectNodeContents(d),Q.setEnd(q.startContainer,q.startOffset),Q.toString().length==0&&(D.preventDefault(),U(),C(D.key)))}if(D.key=="ArrowRight"&&!rt.classList.contains("active")){const q=window.getSelection().getRangeAt(0),Q=document.createRange();if(u){Q.selectNodeContents(p),Q.setEnd(q.startContainer,q.startOffset);const ie=Q.toString().length,Qe=p.textContent.length;ie==Qe&&(D.preventDefault(),U(),C(D.key))}else{Q.selectNodeContents(d),Q.setEnd(q.startContainer,q.startOffset);const ie=Q.toString().length,Qe=d.textContent.length;ie==Qe&&(D.preventDefault(),U(),C(D.key))}}});let S=!1;d.textContent="write something .....",e.addEventListener("click",D=>{if(D.target.parentElement.className=="expand"||D.target.parentElement.className=="collapse")if(D.target.parentElement.closest(".line").querySelector("label").className=="headingLabel"){const Q=D.target.parentElement.closest(".line");te(Q,"switch"),M(Q)}else{let Q=D.target.parentElement,ie=D.target.parentElement.closest(".line").querySelector(".sub-line");ie!=null?(ie.classList.replace("sub-line","sub-line-off"),Q.classList.replace("expand","collapse"),Q.innerHTML='<i class="fa-solid fa-caret-right"></i>'):(ie=Q.closest(".line").querySelector(".sub-line-off"),ie.classList.replace("sub-line-off","sub-line"),Q.classList.replace("collapse","expand"),Q.innerHTML=' <i class="fa-solid fa-caret-down"></i>')}else if(D.target.parentElement.className=="actions")if(D.target.closest(".line").querySelector("label").className=="headingLabel"){const Q=D.target.closest(".line");te(Q,"switch"),M(Q)}else{let Q=D.target,ie=D.target.closest(".line").querySelector(".sub-line");ie!=null?(ie.classList.replace("sub-line","sub-line-off"),Q.classList.replace("expand","collapse"),Q.innerHTML='<i class="fa-solid fa-caret-right"></i>'):(ie=Q.closest(".line").querySelector(".sub-line-off"),ie.classList.replace("sub-line-off","sub-line"),Q.classList.replace("collapse","expand"),Q.innerHTML=' <i class="fa-solid fa-caret-down"></i>')}else if(D.target.classList=="inputContent")S||(d=D.target,U(),d.textContent="",S=!0),u=!1,d=D.target,U(),a=v.querySelector("label").className,fe();else if(D.target.classList=="inputSubContent")u=!0,p=D.target,d=p.closest(".sub-Head").closest(".line").querySelector(".inputContent"),U(),a=y.querySelector("label").className,fe();else if(D.target.type=="checkbox"){let q=D.target.nextElementSibling;q.classList=="unchecked"?q.classList.replace("unchecked","checked"):q.classList.replace("checked","unchecked");const Q=D.target.closest(".line");q.closest(".Head")?le(Q):Be(Q)}else D.target.className=="sub-line"?(k=D.target.closest(".sub-line"),y=D.target.closest(".sub-Head"),U(),a=y.querySelector("label").className,p=y.querySelector(".inputSubContent"),p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd()):(v=D.target.closest(".line"),S||(U(),d.textContent="",S=!0),U(),a=v.querySelector("label").className,d=v.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd())});function R(){if(u)y=p.closest(".sub-Head"),L=y.previousElementSibling,L!=null?(a=L.querySelector("label").className,p=L.querySelector(".inputSubContent"),p.focus(),window.getSelection().selectAllChildren(p)):L==null&&(u=!1,a=y.closest(".line").querySelector("label").className,d=y.closest(".line").querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d));else if(I!=null&&T==null)a=I.querySelector("label").className,d=I.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d);else if(I!=null&&T!=null){u=!0;const D=T.lastElementChild;a=D.querySelector("label").className,p=D.querySelector(".inputSubContent"),p.focus(),window.getSelection().selectAllChildren(p)}window.getSelection().collapseToEnd()}function x(D){if(u)v=p.closest(".line"),E=v.nextElementSibling,y=p.closest(".sub-Head"),A=y.nextElementSibling,A!=null?(a=A.querySelector("label").className,p=A.querySelector(".inputSubContent"),p.focus(),window.getSelection().selectAllChildren(p)):A==null&&E!=null&&(u=!1,a=E.closest(".line").querySelector("label").className,d=E.closest(".line").querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d));else if(E!=null&&k==null)a=E.querySelector("label").className,d=E.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d);else if(k!=null){u=!0;const q=k.firstElementChild;a=q.querySelector("label").className,p=q.querySelector(".inputSubContent"),p.focus(),window.getSelection().selectAllChildren(p)}D=="ArrowRight"?window.getSelection().collapseToStart():window.getSelection().collapseToEnd()}function C(D){U(),D=="ArrowUp"?R():D=="ArrowDown"?x():D=="ArrowLeft"?R():D=="ArrowRight"&&x("ArrowRight"),U(),fe()}function ue(D,q){if(D=="headingLabel")return`<label class="headingLabel"></label>
              <div class="content">
                <h3><ul class="inputContent" contenteditable="true">${q}</ul></h3>
              </div>`;if(D=="textLabel")return`<label class="textLabel"></label>
              <div class="content">
                <ul class="inputContent" contenteditable="true">${q}</ul>
              </div>`;if(D=="pointLabel")return`<label class="pointLabel">
                <input type="checkbox" /><span class="points"><i class="fa-solid fa-circle"></i></span
              ></label>
              <div class="content">
                <ul class="inputContent" contenteditable="true">${q}</ul>
              </div>`;if(D=="checkboxLabel")return`<label class="checkboxLabel">
                <input type="checkbox"/><span class="unchecked"></span
              ></label>
              <div class="content">
                <ul class="inputContent" contenteditable="true">${q}</ul>
              </div>`}function je(D,q,Q){let ie=ue(D,q);D=="headingLabel"?Q.innerHTML=`<div class="Head">
      ${ie}
      <div class="actionsOff">
          <button class="expand">
            <i class="fa-solid fa-caret-down"></i>
          </button>
      </div>
    </div>
    `:D=="checkboxLabel"?Q.innerHTML=`<div class="Head">
            ${ie}
            <div class="actionsOff">
                <button class="expand">
                  <i class="fa-solid fa-caret-down"></i>
                </button>
            </div>
          </div>
          <div class="sub-line-off">
            <div class="sub-Head">
              <label class="checkboxLabel">
                <input type="checkbox"/><span class="unchecked"></span
              ></label>
              <div class="sub-content">
                <ul class="inputSubContent" contenteditable="true"></ul>
              </div>
            </div>
          </div>`:Q.innerHTML=`<div class="Head">
            ${ie}
            <div class="actionsOff">
                <button class="expand">
                  <i class="fa-solid fa-caret-down"></i>
                </button>
            </div>
          </div>
          <div class="sub-line-off">
            <div class="sub-Head">
              <label class="pointLabel">
                <input type="checkbox" /><span class="points"><i class="fa-solid fa-square"></i></span
              ></label>
              <div class="sub-content">
                <ul class="inputSubContent" contenteditable="true"></ul>
              </div>
            </div>
          </div>`}function He(D,q,Q,ie){let Qe=ue(D,q);ie.innerHTML=`<div class="Head">
           ${Qe}
           <div class="actions">
               <button class="expand">
                 <i class="fa-solid fa-caret-down"></i>
               </button>
           </div>
          </div>
         ${Q}`}function ct(D,q,Q){D=="textLabel"?Q.innerHTML=`
        <label class="textLabel"></label>
        <div class="sub-content">
          <ul class="inputSubContent" contenteditable="true">${q}</ul>
        </div>`:D=="pointLabel"?Q.innerHTML=`
      <label class="pointLabel">
         <input type="checkbox" /><span class="points"><i class="fa-solid fa-square"></i></i></span
       ></label>
       <div class="sub-content">
         <ul class="inputSubContent" contenteditable="true">${q}</ul>
       </div>`:D=="checkboxLabel"&&(Q.innerHTML=`
      <label class="checkboxLabel">
        <input type="checkbox"/><span class="unchecked"></span
      ></label>
      <div class="sub-content">
        <ul class="inputSubContent" contenteditable="true">${q}</ul>
      </div>`)}function ee(){if(U(),fe(),u){if(!h&&p.textContent.trim()!=""){const D=window.getSelection().getRangeAt(0),q=document.createRange();q.selectNodeContents(p),q.setEnd(D.startContainer,D.startOffset);const Q=q.toString().length,ie=document.createElement("div");ie.classList.add("sub-Head"),y=p.closest(".sub-Head"),k=y.closest(".sub-line"),ct(a,"",ie),Q=="0"?(k.insertBefore(ie,y),p=ie.querySelector(".inputSubContent"),p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd()):A!=null?(k=A.closest(".sub-line"),k.insertBefore(ie,A),p=ie.querySelector(".inputSubContent"),p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd()):(k=y.closest(".sub-line"),k.appendChild(ie),p=ie.querySelector(".inputSubContent"),p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd())}else p.textContent.trim()!=""&&(ct(a,c,y),h=!1,p=y.querySelector(".inputSubContent"),p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd());if(v.querySelector("label").className=="checkboxLabel"){const D=y.closest(".line");Be(D)}}else{const D=window.getSelection().getRangeAt(0),q=document.createRange();q.selectNodeContents(d),q.setEnd(D.startContainer,D.startOffset);const Q=q.toString().length,ie=document.createElement("div");if(ie.classList.add("line"),je(a,"",ie),a=="headingLabel"){let Qe=null,It=null;const fr=e.children;Array.from(fr).forEach(Gn=>{Qe==null?v==Gn&&(Qe=Gn):It==null&&Gn.querySelector("Label").className=="headingLabel"&&(It=Gn)}),Q=="0"?(e.insertBefore(ie,v),d=ie.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd()):It!=null?(e.insertBefore(ie,It),d=ie.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd()):(e.appendChild(ie),d=ie.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd())}else Q=="0"?(e.insertBefore(ie,v),d=ie.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd()):E!=null?(e.insertBefore(ie,E),d=ie.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd()):(e.appendChild(ie),d=ie.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd())}}function te(D,q){if(q=="switch"){if(D.querySelector(".collapse")){const Q=D.querySelector(".collapse");Q.classList.replace("collapse","expand"),Q.innerHTML=' <i class="fa-solid fa-caret-down"></i>'}else if(D.querySelector(".expand")){const Q=D.querySelector(".expand");Q.classList.replace("expand","collapse"),Q.innerHTML='<i class="fa-solid fa-caret-right"></i>'}}else if(q=="on"&&D.querySelector(".actionsOff")!=null)D.querySelector(".actionsOff").classList.replace("actionsOff","actions");else if(q=="off"&&D.querySelector(".actions")!=null)D.querySelector(".actions").classList.replace("actions","actionsOff");else if(q=="switchOff"){if(D.querySelector(".expand")){const Q=D.querySelector(".expand");Q.classList.replace("expand","collapse"),Q.innerHTML='<i class="fa-solid fa-caret-right"></i>'}}else if(q=="switchOn"&&D.querySelector(".collapse")){const Q=D.querySelector(".collapse");Q.classList.replace("collapse","expand"),Q.innerHTML=' <i class="fa-solid fa-caret-down"></i>'}}function de(){let D=null,q=0;const Q=Array.from(e.children);Q.forEach((ie,Qe)=>{var fr;((fr=ie.querySelector("Label"))==null?void 0:fr.className)==="headingLabel"?D=Qe:D!==null&&q++,D!=null&&q>0?(te(Q[D],"on"),D=null,q=0):D!=null&&q==0&&te(Q[D],"off")})}function M(D){let q=null,Q=null;const ie=e.children;if(Array.from(ie).forEach((Qe,It)=>{q==null?D==Qe&&(q=It):Q==null&&Qe.querySelector("Label").className=="headingLabel"&&(Q=It)}),Q!=null)for(let Qe=q+1;Qe<Q;Qe++)ie[Qe].classList.toggle("collapsed");else for(let Qe=q+1;Qe<ie.length;Qe++)ie[Qe].classList.toggle("collapsed")}let B=!1;function X(){let D=!1;const q=e.children;Array.from(q).forEach((Q,ie)=>{Q.querySelector("Label").className=="headingLabel"?(D=!0,B?te(Q,"switchOn"):te(Q,"switchOff")):D&&(!B&&q[ie].className=="line"?q[ie].classList.add("collapsed"):B&&q[ie].className=="line collapsed"&&q[ie].classList.remove("collapsed"))}),B=!B,d=t.querySelector(".inputContent"),v=d.closest(".line"),a=v.querySelector("Label").className,d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd(),U()}function le(D){D.querySelector(".Head").querySelector(".checked")?D.querySelector(".sub-line").querySelectorAll(".unchecked").forEach(Q=>{Q.classList.replace("unchecked","checked")}):D.querySelector(".sub-line").querySelectorAll(".checked").forEach(Q=>{Q.classList.replace("checked","unchecked")})}function Be(D){const q=D.querySelector(".sub-line").querySelectorAll(".unchecked").length,Q=D.querySelector(".sub-line").querySelectorAll(".checked").length;if(q==0&&Q>0){const ie=D.querySelector(".Head").querySelector(".unchecked");ie!=null&&ie.classList.replace("unchecked","checked")}else if(q>0){const ie=D.querySelector(".Head").querySelector(".checked");ie!=null&&ie.classList.replace("checked","unchecked")}}function V(D){if(U(),!u&&D!="hradingLabel"&&v.querySelector(".actionsOff")){D="headingLabel",fe(),c=d.textContent,U();let q=d.closest(".line").querySelector(".sub-line");q==null?je(D,c,v):(q=q.outerHTML,He(D,c,q,v)),de(),d=v.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd()}}function G(D){if(fe(),U(),u)h=!0,c=p.textContent,ee();else{c=d.textContent;let q=d.closest(".line").querySelector(".sub-line");q==null?je(D,c,v):(q=q.outerHTML,He(D,c,q,v)),d=v.querySelector(".inputContent"),d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd()}}function se(){U();const D=v.querySelector(".inputContent").textContent;if(k=v.querySelector(".sub-line-off"),D=="")d.focus();else if(u)u=!1,a=v.querySelector(".Head").querySelector("label").className,a=="headingLabel"&&(a="textLabel"),d=p.closest(".sub-Head").closest(".line").querySelector(".inputContent"),ee();else if(k!=null&&D!=""){const q=k.querySelectorAll(".sub-Head").length,Q=v.querySelector(".actionsOff");if(q==1&&Q!=null)u=!0,k.classList.replace("sub-line-off","sub-line"),Q.classList.replace("actionsOff","actions"),p=k.querySelector(".inputSubContent"),a=p.closest(".sub-Head").querySelector("label").className,p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd();else{u=!1;const ie=v.querySelector(".collapse");k=v.querySelector(".sub-line-off"),k.classList.replace("sub-line-off","sub-line"),ie.classList.replace("collapse","expand"),ie.innerHTML=' <i class="fa-solid fa-caret-down"></i>',d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd()}}else if(k==null&&p.textContent!=""){u=!1;const q=v.querySelector(".expand");k=v.querySelector(".sub-line"),k.classList.replace("sub-line","sub-line-off"),q.classList.replace("expand","collapse"),q.innerHTML='<i class="fa-solid fa-caret-right"></i>',d.focus(),window.getSelection().selectAllChildren(d),window.getSelection().collapseToEnd()}fe()}function fe(){t.querySelector(".options").querySelectorAll("[class$=active]").forEach(Q=>{Q.classList.remove("active")}),u?o.classList.add("active"):o.classList.remove("active"),a=="headingLabel"?n.classList.add("active"):a=="textLabel"?r.classList.add("active"):a=="pointLabel"?i.classList.add("active"):a=="checkboxLabel"&&s.classList.add("active")}const rt=t.querySelector("#dropdownMenu");let Vt;function Di(){if(a=="textLabel")return 0;if(a=="headingLabel")return 1;if(a=="pointLabel")return 2;if(a=="checkboxLabel")return 3}t.addEventListener("keydown",D=>{if(rt.classList.contains("active")){const q=rt.querySelectorAll(".icon");D.key==="ArrowRight"?(D.preventDefault(),Vt=(Vt+1)%q.length,q[Vt].focus()):D.key==="ArrowLeft"?(D.preventDefault(),Vt=(Vt-1+q.length)%q.length,q[Vt].focus()):D.key==="Enter"&&Vt!==-1&&(D.preventDefault(),q[Vt].click(),rt.classList.remove("active"))}}),n.addEventListener("click",D=>{u?(p.focus(),window.getSelection().selectAllChildren(p),window.getSelection().collapseToEnd()):(a="headingLabel",V(a))}),r.addEventListener("click",D=>{a="textLabel",G(a)}),i.addEventListener("click",D=>{a="pointLabel",G(a)}),s.addEventListener("click",D=>{a="checkboxLabel",G(a)}),o.addEventListener("click",D=>{se()})}H.forwardRef(({className:t},e)=>(H.useEffect(()=>{e&&e.current&&r4(e.current)},[e]),j.jsx("div",{ref:e,className:t})));const i4=H.forwardRef(({className:t,defaultValue:e=""},n)=>(H.useEffect(()=>{n&&n.current&&n4(n.current,e)},[n,e]),j.jsx("div",{ref:n,className:t})));function s4({tagSuggestions:t,onTagChange:e}){const[n,r]=H.useState([]),i=H.useRef(null),[s,o]=H.useState(null),[a,c]=H.useState(!1),[u,h]=H.useState(!1),[d,p]=H.useState(""),[v,E]=H.useState(t),I=H.useRef(null),k=H.useRef(null),T=H.useRef(null),y=()=>{c(!a)},A=w=>{if(!n.includes(w)){const S=[...n,w];r(S),e(S),p(""),o(null)}},L=w=>{const S=n.filter(R=>R!==w);r(S),e(S)},U=w=>{A(w),h(!1)},W=w=>{const S=w.target.value.toUpperCase();p(S);const R=t.filter(x=>x.startsWith(S));E(R),h(R.length>0)},b=()=>{E(t),h(!0)},g=w=>{if(w.key===" "&&(w.preventDefault(),d.trim()&&(A(d.trim()),p(""))),w.key==="Backspace"&&d===""){const S=n.length;s===null?o(S-1):s>=0&&(L(n[s]),o(null))}};return H.useEffect(()=>{i.current&&(i.current.scrollLeft=i.current.scrollWidth)},[n]),H.useEffect(()=>{const w=S=>{T.current&&!T.current.contains(S.target)&&k.current&&!k.current.contains(S.target)&&h(!1)};return document.addEventListener("mousedown",w),()=>{document.removeEventListener("mousedown",w)}},[]),j.jsx(j.Fragment,{children:j.jsxs("div",{className:"tagSection",children:[j.jsx("button",{ref:I,className:`tagBtn ${a?"active":""}`,onClick:y,children:a?j.jsx("i",{className:"fa-solid fa-check"}):"Tag"}),j.jsx("div",{ref:i,className:`addedTags ${a?"":"active"}`,children:n.map((w,S)=>j.jsx("button",{className:`tag ${s===S?"selected":""}`,onClick:()=>L(w),children:w},S))}),j.jsx("div",{className:`tagInputDiv ${a?"active":""}`,children:j.jsx("input",{type:"text",ref:k,value:d,onChange:W,onKeyDown:g,onFocus:b,id:"tagInput",placeholder:"Use 'Space' to add multiple tag",autoComplete:"off"})}),u&&j.jsx("div",{ref:T,className:"suggestionBox",children:j.jsx("ul",{className:"suggestionList",children:v.map((w,S)=>j.jsx("li",{onClick:()=>U(w),children:w},S))})})]})})}const o4=H.forwardRef(({className:t,defaultValue:e=""},n)=>(H.useEffect(()=>{n&&n.current&&t4(n.current,e)},[n,e]),j.jsx("div",{ref:n,className:t}))),a4=({setActivePanel:t})=>{const e=H.useRef(null),n=H.useRef(null),[r,i]=H.useState([]),s=["YESTERDAY","TODAY","TOMORROW"],[o,a]=H.useState(""),[c,u]=H.useState(""),[h,d]=H.useState(""),[p,v]=H.useState(null),[E,I]=H.useState("notes"),[k,T]=H.useState(""),[y,A]=H.useState(""),L=ue=>{v(p===ue?null:ue)},U=ue=>{E==="notes"&&e.current?T(e.current.innerHTML):E==="steps"&&n.current&&A(n.current.innerHTML),I(ue)},W=[{id:"categoryL",value:"large",label:"Large",bubbleClass:"large",extra:"*"},{id:"categoryL",value:"medium",label:"Medium",bubbleClass:"medium",extra:"***"},{id:"categoryL",value:"small",label:"Small",bubbleClass:"small",extra:"*****"}],b=[{id:"categoryP",value:"P0",label:"P0",bubbleClass:"large"},{id:"categoryP",value:"P1",label:"P1",bubbleClass:"medium"},{id:"categoryP",value:"P2",label:"P2",bubbleClass:"small"}],g=ue=>{ue.id==="categoryL"?(console.log(ue.value),d(ue.value)):ue.id==="categoryP"&&(console.log(ue.value),u(ue.value))},w=ue=>{i(ue)},S=ue=>{a(ue.target.value)},R=ue=>{},x=()=>{t("")},C=async()=>{if(!o.trim()){alert("Task name is required!");return}try{const ue=WE().uid,je={name:o.trim(),priority:c,size:h,tags:r,notes:k,steps:y,createdAt:new Date().toISOString()},He=await yD(nD($c,ue),je);console.log("Document written with ID: ",He.id),a(""),i([]),u(""),d(""),T(""),A(""),v(null),I("notes"),alert("Task saved successfully!")}catch(ue){console.error("Error adding document: ",ue),alert("Failed to save task. Please try again.")}};return j.jsxs("div",{className:"addTask",children:[j.jsx("div",{className:"backBtn",children:j.jsx(tr,{icon:WM,onClick:x})}),j.jsxs("div",{className:"taskName",children:[j.jsx("p",{children:"Task Name :"}),j.jsx("input",{type:"text",value:o,onChange:S,onKeyDown:R})]}),j.jsxs("button",{className:`details ${p==="details"?"activate":""}`,onClick:()=>{L("details")},children:[j.jsx("i",{className:`fa-solid  ${p==="details"?"fa-angle-down":"fa-angle-right"}`}),"Details"]}),j.jsx("div",{className:"detailsSection",children:p==="details"&&j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"switchBtn",children:[j.jsx("button",{className:"noteBtn",onClick:()=>{U("notes")},children:"Notes"}),j.jsx("button",{className:"stepBtn",onClick:()=>{U("steps")},children:"Steps"})]}),E==="notes"?j.jsx(o4,{ref:e,className:"Aditor_Task_Point",defaultValue:k}):j.jsx(i4,{ref:n,className:"Aditor_Task_Checkbox",defaultValue:y})]})}),j.jsxs("button",{className:`taskDetails ${p==="taskDetails"?"activate":""}`,onClick:()=>L("taskDetails"),children:[j.jsx("i",{className:`fa-solid  ${p==="taskDetails"?"fa-angle-down":"fa-angle-right"}`}),"Task details"]}),j.jsx("div",{className:"taskSection",children:p==="taskDetails"&&j.jsxs(j.Fragment,{children:[j.jsx("p",{children:"Priority :"}),j.jsx(Yh,{name:"priorityCategory",options:b,onRadioChange:g}),j.jsx("p",{children:"Task Size :"}),j.jsx(Yh,{name:"taskCategory",options:W,onRadioChange:g}),j.jsx(s4,{tagSuggestions:s,onTagChange:w})]})}),j.jsx("div",{className:"controlBtn",children:j.jsx("button",{id:"saveBtn",onClick:C,children:"Save"})})]})};function l4(){gm();const[t,e]=H.useState(""),n=r=>{e(r)};return j.jsxs("div",{className:"todaysTask",children:[j.jsx("div",{className:`actionPanel-todaysTask ${t!=""?"unactive":""}`,children:j.jsxs("div",{className:"task-options",children:[j.jsx("div",{className:"actionBtn",onClick:()=>n("addTask"),children:"Add Task"}),j.jsx("div",{className:"actionBtn",onClick:()=>n(""),children:"Select Task"})]})}),j.jsx("div",{className:`contentPanel-todaysTask ${t=="addTask"?"active":""}`,children:t==="addTask"&&j.jsx(a4,{setActivePanel:e})})]})}function c4(){const[t,e]=H.useState(""),n=new Date,r=n.toLocaleDateString("en-US",{weekday:"long"}),s=`${n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})} | ${r}`;return j.jsxs("div",{className:"dailySpace",children:[j.jsxs("div",{className:"actionPanel-dailySpace",children:[j.jsx("div",{className:"displayDate",children:s}),j.jsxs("div",{className:"taskBar",children:[j.jsx(tr,{icon:GM}),"Today's Task",j.jsx(tr,{icon:JM,className:"taskPlus",onClick:()=>e("todaysTask")})]}),j.jsx("div",{className:"taskContainer",children:"No task yet"})]}),j.jsx("div",{className:"contentPanel-dailySpace",children:t==="todaysTask"&&j.jsx(l4,{})})]})}function u4({activeSection:t}){return j.jsx(j.Fragment,{children:t==="dailyspace"&&j.jsx(c4,{})})}function d4(){const[t,e]=H.useState(""),{isFullScreen:n,toggleFullScreen:r}=gm();return H.useEffect(()=>{const i=s=>{s.ctrlKey&&s.key==="f"&&(s.preventDefault(),r())};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[r]),j.jsxs(j.Fragment,{children:[j.jsx("div",{className:`actionPanel ${n?"active":""}`,children:j.jsx(e4,{setActiveSection:e})}),j.jsx("div",{className:`contentPanel ${n?"active":""}`,children:j.jsx(u4,{activeSection:t})})]})}const f4=XC([{path:"/",element:j.jsx(TD,{})},{path:"/Domain",element:j.jsx(ID,{})},{path:"/Landing",element:j.jsx(ck,{children:j.jsx(d4,{})})}]);AE(document.getElementById("root")).render(j.jsx(H.StrictMode,{children:j.jsx(ok,{router:f4})}));
