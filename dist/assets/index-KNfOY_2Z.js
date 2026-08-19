(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fp={exports:{}},vl={},pp={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Symbol.for("react.element"),Wy=Symbol.for("react.portal"),By=Symbol.for("react.fragment"),$y=Symbol.for("react.strict_mode"),Hy=Symbol.for("react.profiler"),Vy=Symbol.for("react.provider"),Gy=Symbol.for("react.context"),Ky=Symbol.for("react.forward_ref"),qy=Symbol.for("react.suspense"),Qy=Symbol.for("react.memo"),Yy=Symbol.for("react.lazy"),Hd=Symbol.iterator;function Xy(t){return t===null||typeof t!="object"?null:(t=Hd&&t[Hd]||t["@@iterator"],typeof t=="function"?t:null)}var mp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gp=Object.assign,_p={};function ai(t,e,n){this.props=t,this.context=e,this.refs=_p,this.updater=n||mp}ai.prototype.isReactComponent={};ai.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ai.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yp(){}yp.prototype=ai.prototype;function Zc(t,e,n){this.props=t,this.context=e,this.refs=_p,this.updater=n||mp}var eu=Zc.prototype=new yp;eu.constructor=Zc;gp(eu,ai.prototype);eu.isPureReactComponent=!0;var Vd=Array.isArray,vp=Object.prototype.hasOwnProperty,tu={current:null},wp={key:!0,ref:!0,__self:!0,__source:!0};function Ep(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vp.call(e,r)&&!wp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ks,type:t,key:s,ref:o,props:i,_owner:tu.current}}function Jy(t,e){return{$$typeof:ks,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nu(t){return typeof t=="object"&&t!==null&&t.$$typeof===ks}function Zy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gd=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zy(""+t.key):e.toString(36)}function ao(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ks:case Wy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xl(o,0):r,Vd(i)?(n="",t!=null&&(n=t.replace(Gd,"$&/")+"/"),ao(i,e,n,"",function(c){return c})):i!=null&&(nu(i)&&(i=Jy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Vd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Xl(s,l);o+=ao(s,e,n,a,i)}else if(a=Xy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Xl(s,l++),o+=ao(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bs(t,e,n){if(t==null)return t;var r=[],i=0;return ao(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},co={transition:null},tv={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:co,ReactCurrentOwner:tu};function Sp(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Bs,forEach:function(t,e,n){Bs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bs(t,function(){e++}),e},toArray:function(t){return Bs(t,function(e){return e})||[]},only:function(t){if(!nu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=ai;K.Fragment=By;K.Profiler=Hy;K.PureComponent=Zc;K.StrictMode=$y;K.Suspense=qy;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv;K.act=Sp;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)vp.call(e,a)&&!wp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ks,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:Gy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vy,_context:t},t.Consumer=t};K.createElement=Ep;K.createFactory=function(t){var e=Ep.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:Ky,render:t}};K.isValidElement=nu;K.lazy=function(t){return{$$typeof:Yy,_payload:{_status:-1,_result:t},_init:ev}};K.memo=function(t,e){return{$$typeof:Qy,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=co.transition;co.transition={};try{t()}finally{co.transition=e}};K.unstable_act=Sp;K.useCallback=function(t,e){return ze.current.useCallback(t,e)};K.useContext=function(t){return ze.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};K.useEffect=function(t,e){return ze.current.useEffect(t,e)};K.useId=function(){return ze.current.useId()};K.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return ze.current.useMemo(t,e)};K.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};K.useRef=function(t){return ze.current.useRef(t)};K.useState=function(t){return ze.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return ze.current.useTransition()};K.version="18.3.1";pp.exports=K;var q=pp.exports;const nv=zy(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=q,iv=Symbol.for("react.element"),sv=Symbol.for("react.fragment"),ov=Object.prototype.hasOwnProperty,lv=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,av={key:!0,ref:!0,__self:!0,__source:!0};function Cp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ov.call(e,r)&&!av.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iv,type:t,key:s,ref:o,props:i,_owner:lv.current}}vl.Fragment=sv;vl.jsx=Cp;vl.jsxs=Cp;fp.exports=vl;var m=fp.exports,Ua={},Ip={exports:{}},it={},kp={exports:{}},xp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,j){var z=N.length;N.push(j);e:for(;0<z;){var Y=z-1>>>1,ge=N[Y];if(0<i(ge,j))N[Y]=j,N[z]=ge,z=Y;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var j=N[0],z=N.pop();if(z!==j){N[0]=z;e:for(var Y=0,ge=N.length,sn=ge>>>1;Y<sn;){var _e=2*(Y+1)-1,gr=N[_e],Tt=_e+1,_r=N[Tt];if(0>i(gr,z))Tt<ge&&0>i(_r,gr)?(N[Y]=_r,N[Tt]=z,Y=Tt):(N[Y]=gr,N[_e]=z,Y=_e);else if(Tt<ge&&0>i(_r,z))N[Y]=_r,N[Tt]=z,Y=Tt;else break e}}return j}function i(N,j){var z=N.sortIndex-j.sortIndex;return z!==0?z:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],d=1,u=null,h=3,v=!1,E=!1,C=!1,U=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=N)r(c),j.sortIndex=j.expirationTime,e(a,j);else break;j=n(c)}}function I(N){if(C=!1,y(N),!E)if(n(a)!==null)E=!0,ne(R);else{var j=n(c);j!==null&&rn(I,j.startTime-N)}}function R(N,j){E=!1,C&&(C=!1,g(D),D=-1),v=!0;var z=h;try{for(y(j),u=n(a);u!==null&&(!(u.expirationTime>j)||N&&!me());){var Y=u.callback;if(typeof Y=="function"){u.callback=null,h=u.priorityLevel;var ge=Y(u.expirationTime<=j);j=t.unstable_now(),typeof ge=="function"?u.callback=ge:u===n(a)&&r(a),y(j)}else r(a);u=n(a)}if(u!==null)var sn=!0;else{var _e=n(c);_e!==null&&rn(I,_e.startTime-j),sn=!1}return sn}finally{u=null,h=z,v=!1}}var O=!1,b=null,D=-1,Z=5,V=-1;function me(){return!(t.unstable_now()-V<Z)}function nn(){if(b!==null){var N=t.unstable_now();V=N;var j=!0;try{j=b(!0,N)}finally{j?Be():(O=!1,b=null)}}else O=!1}var Be;if(typeof p=="function")Be=function(){p(nn)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,ql=xt.port2;xt.port1.onmessage=nn,Be=function(){ql.postMessage(null)}}else Be=function(){U(nn,0)};function ne(N){b=N,O||(O=!0,Be())}function rn(N,j){D=U(function(){N(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){E||v||(E=!0,ne(R))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var z=h;h=j;try{return N()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=h;h=N;try{return j()}finally{h=z}},t.unstable_scheduleCallback=function(N,j,z){var Y=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Y+z:Y):z=Y,N){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=z+ge,N={id:d++,callback:j,priorityLevel:N,startTime:z,expirationTime:ge,sortIndex:-1},z>Y?(N.sortIndex=z,e(c,N),n(a)===null&&N===n(c)&&(C?(g(D),D=-1):C=!0,rn(I,z-Y))):(N.sortIndex=ge,e(a,N),E||v||(E=!0,ne(R))),N},t.unstable_shouldYield=me,t.unstable_wrapCallback=function(N){var j=h;return function(){var z=h;h=j;try{return N.apply(this,arguments)}finally{h=z}}}})(xp);kp.exports=xp;var cv=kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv=q,rt=cv;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tp=new Set,Ji={};function hr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(Ji[t]=e,t=0;t<e.length;t++)Tp.add(e[t])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,dv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kd={},qd={};function hv(t){return ja.call(qd,t)?!0:ja.call(Kd,t)?!1:dv.test(t)?qd[t]=!0:(Kd[t]=!0,!1)}function fv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pv(t,e,n,r){if(e===null||typeof e>"u"||fv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var ru=/[\-:]([a-z])/g;function iu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ru,iu);Ae[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ru,iu);Ae[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ru,iu);Ae[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function su(t,e,n,r){var i=Ae.hasOwnProperty(e)?Ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pv(e,n,i,r)&&(n=null),r||i===null?hv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var en=uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$s=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),za=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),lu=Symbol.for("react.forward_ref"),Wa=Symbol.for("react.suspense"),Ba=Symbol.for("react.suspense_list"),au=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Np=Symbol.for("react.offscreen"),Qd=Symbol.iterator;function vi(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,Jl;function Ai(t){if(Jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jl=e&&e[1]||""}return`
`+Jl+t}var Zl=!1;function ea(t,e){if(!t||Zl)return"";Zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ai(t):""}function mv(t){switch(t.tag){case 5:return Ai(t.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 2:case 15:return t=ea(t.type,!1),t;case 11:return t=ea(t.type.render,!1),t;case 1:return t=ea(t.type,!0),t;default:return""}}function $a(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ir:return"Fragment";case Cr:return"Portal";case za:return"Profiler";case ou:return"StrictMode";case Wa:return"Suspense";case Ba:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pp:return(t.displayName||"Context")+".Consumer";case Rp:return(t._context.displayName||"Context")+".Provider";case lu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case au:return e=t.displayName||null,e!==null?e:$a(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return $a(t(e))}catch{}}return null}function gv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $a(e);case 8:return e===ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function An(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ap(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _v(t){var e=Ap(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hs(t){t._valueTracker||(t._valueTracker=_v(t))}function Op(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ap(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ha(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=An(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bp(t,e){e=e.checked,e!=null&&su(t,"checked",e,!1)}function Va(t,e){bp(t,e);var n=An(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ga(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ga(t,e.type,An(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ga(t,e,n){(e!=="number"||xo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oi=Array.isArray;function Fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+An(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ka(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Oi(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:An(n)}}function Dp(t,e){var n=An(e.value),r=An(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,Mp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yv=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(t){yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fi[e]=Fi[t]})});function Fp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fi.hasOwnProperty(t)&&Fi[t]?(""+e).trim():e+"px"}function Up(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vv=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(t,e){if(e){if(vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Ya(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ja=null,Ur=null,jr=null;function eh(t){if(t=Rs(t)){if(typeof Ja!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Il(e),Ja(t.stateNode,t.type,e))}}function jp(t){Ur?jr?jr.push(t):jr=[t]:Ur=t}function zp(){if(Ur){var t=Ur,e=jr;if(jr=Ur=null,eh(t),e)for(t=0;t<e.length;t++)eh(e[t])}}function Wp(t,e){return t(e)}function Bp(){}var ta=!1;function $p(t,e,n){if(ta)return t(e,n);ta=!0;try{return Wp(t,e,n)}finally{ta=!1,(Ur!==null||jr!==null)&&(Bp(),zp())}}function es(t,e){var n=t.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Za=!1;if(Gt)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){Za=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{Za=!1}function wv(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ui=!1,To=null,Ro=!1,ec=null,Ev={onError:function(t){Ui=!0,To=t}};function Sv(t,e,n,r,i,s,o,l,a){Ui=!1,To=null,wv.apply(Ev,arguments)}function Cv(t,e,n,r,i,s,o,l,a){if(Sv.apply(this,arguments),Ui){if(Ui){var c=To;Ui=!1,To=null}else throw Error(k(198));Ro||(Ro=!0,ec=c)}}function fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function th(t){if(fr(t)!==t)throw Error(k(188))}function Iv(t){var e=t.alternate;if(!e){if(e=fr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return th(i),t;if(s===r)return th(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Vp(t){return t=Iv(t),t!==null?Gp(t):null}function Gp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gp(t);if(e!==null)return e;t=t.sibling}return null}var Kp=rt.unstable_scheduleCallback,nh=rt.unstable_cancelCallback,kv=rt.unstable_shouldYield,xv=rt.unstable_requestPaint,pe=rt.unstable_now,Tv=rt.unstable_getCurrentPriorityLevel,uu=rt.unstable_ImmediatePriority,qp=rt.unstable_UserBlockingPriority,Po=rt.unstable_NormalPriority,Rv=rt.unstable_LowPriority,Qp=rt.unstable_IdlePriority,wl=null,Ot=null;function Pv(t){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Ov,Nv=Math.log,Av=Math.LN2;function Ov(t){return t>>>=0,t===0?32:31-(Nv(t)/Av|0)|0}var Gs=64,Ks=4194304;function bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function No(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=bi(l):(s&=o,s!==0&&(r=bi(s)))}else o=n&~i,o!==0?r=bi(o):s!==0&&(r=bi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Et(e),i=1<<n,r|=t[n],e&=~i;return r}function bv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Et(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=bv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function tc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yp(){var t=Gs;return Gs<<=1,!(Gs&4194240)&&(Gs=64),t}function na(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Et(e),t[e]=n}function Lv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Et(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function du(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Et(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function Xp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jp,hu,Zp,em,tm,nc=!1,qs=[],vn=null,wn=null,En=null,ts=new Map,ns=new Map,un=[],Mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rh(t,e){switch(t){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":ts.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(e.pointerId)}}function Ei(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Rs(e),e!==null&&hu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Fv(t,e,n,r,i){switch(e){case"focusin":return vn=Ei(vn,t,e,n,r,i),!0;case"dragenter":return wn=Ei(wn,t,e,n,r,i),!0;case"mouseover":return En=Ei(En,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ts.set(s,Ei(ts.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ns.set(s,Ei(ns.get(s)||null,t,e,n,r,i)),!0}return!1}function nm(t){var e=Kn(t.target);if(e!==null){var n=fr(e);if(n!==null){if(e=n.tag,e===13){if(e=Hp(n),e!==null){t.blockedOn=e,tm(t.priority,function(){Zp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xa=r,n.target.dispatchEvent(r),Xa=null}else return e=Rs(n),e!==null&&hu(e),t.blockedOn=n,!1;e.shift()}return!0}function ih(t,e,n){uo(t)&&n.delete(e)}function Uv(){nc=!1,vn!==null&&uo(vn)&&(vn=null),wn!==null&&uo(wn)&&(wn=null),En!==null&&uo(En)&&(En=null),ts.forEach(ih),ns.forEach(ih)}function Si(t,e){t.blockedOn===e&&(t.blockedOn=null,nc||(nc=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Uv)))}function rs(t){function e(i){return Si(i,t)}if(0<qs.length){Si(qs[0],t);for(var n=1;n<qs.length;n++){var r=qs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vn!==null&&Si(vn,t),wn!==null&&Si(wn,t),En!==null&&Si(En,t),ts.forEach(e),ns.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)nm(n),n.blockedOn===null&&un.shift()}var zr=en.ReactCurrentBatchConfig,Ao=!0;function jv(t,e,n,r){var i=J,s=zr.transition;zr.transition=null;try{J=1,fu(t,e,n,r)}finally{J=i,zr.transition=s}}function zv(t,e,n,r){var i=J,s=zr.transition;zr.transition=null;try{J=4,fu(t,e,n,r)}finally{J=i,zr.transition=s}}function fu(t,e,n,r){if(Ao){var i=rc(t,e,n,r);if(i===null)ha(t,e,r,Oo,n),rh(t,r);else if(Fv(i,t,e,n,r))r.stopPropagation();else if(rh(t,r),e&4&&-1<Mv.indexOf(t)){for(;i!==null;){var s=Rs(i);if(s!==null&&Jp(s),s=rc(t,e,n,r),s===null&&ha(t,e,r,Oo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ha(t,e,r,null,n)}}var Oo=null;function rc(t,e,n,r){if(Oo=null,t=cu(r),t=Kn(t),t!==null)if(e=fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oo=t,null}function rm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tv()){case uu:return 1;case qp:return 4;case Po:case Rv:return 16;case Qp:return 536870912;default:return 16}default:return 16}}var _n=null,pu=null,ho=null;function im(){if(ho)return ho;var t,e=pu,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ho=i.slice(t,1<r?1-r:void 0)}function fo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qs(){return!0}function sh(){return!1}function st(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qs:sh,this.isPropagationStopped=sh,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),e}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=st(ci),Ts=de({},ci,{view:0,detail:0}),Wv=st(Ts),ra,ia,Ci,El=de({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ci&&(Ci&&t.type==="mousemove"?(ra=t.screenX-Ci.screenX,ia=t.screenY-Ci.screenY):ia=ra=0,Ci=t),ra)},movementY:function(t){return"movementY"in t?t.movementY:ia}}),oh=st(El),Bv=de({},El,{dataTransfer:0}),$v=st(Bv),Hv=de({},Ts,{relatedTarget:0}),sa=st(Hv),Vv=de({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),Gv=st(Vv),Kv=de({},ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qv=st(Kv),Qv=de({},ci,{data:0}),lh=st(Qv),Yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jv[t])?!!e[t]:!1}function gu(){return Zv}var ew=de({},Ts,{key:function(t){if(t.key){var e=Yv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tw=st(ew),nw=de({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=st(nw),rw=de({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),iw=st(rw),sw=de({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),ow=st(sw),lw=de({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aw=st(lw),cw=[9,13,27,32],_u=Gt&&"CompositionEvent"in window,ji=null;Gt&&"documentMode"in document&&(ji=document.documentMode);var uw=Gt&&"TextEvent"in window&&!ji,sm=Gt&&(!_u||ji&&8<ji&&11>=ji),ch=" ",uh=!1;function om(t,e){switch(t){case"keyup":return cw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function dw(t,e){switch(t){case"compositionend":return lm(e);case"keypress":return e.which!==32?null:(uh=!0,ch);case"textInput":return t=e.data,t===ch&&uh?null:t;default:return null}}function hw(t,e){if(kr)return t==="compositionend"||!_u&&om(t,e)?(t=im(),ho=pu=_n=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sm&&e.locale!=="ko"?null:e.data;default:return null}}var fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fw[t.type]:e==="textarea"}function am(t,e,n,r){jp(r),e=bo(e,"onChange"),0<e.length&&(n=new mu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zi=null,is=null;function pw(t){vm(t,0)}function Sl(t){var e=Rr(t);if(Op(e))return t}function mw(t,e){if(t==="change")return e}var cm=!1;if(Gt){var oa;if(Gt){var la="oninput"in document;if(!la){var hh=document.createElement("div");hh.setAttribute("oninput","return;"),la=typeof hh.oninput=="function"}oa=la}else oa=!1;cm=oa&&(!document.documentMode||9<document.documentMode)}function fh(){zi&&(zi.detachEvent("onpropertychange",um),is=zi=null)}function um(t){if(t.propertyName==="value"&&Sl(is)){var e=[];am(e,is,t,cu(t)),$p(pw,e)}}function gw(t,e,n){t==="focusin"?(fh(),zi=e,is=n,zi.attachEvent("onpropertychange",um)):t==="focusout"&&fh()}function _w(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(is)}function yw(t,e){if(t==="click")return Sl(e)}function vw(t,e){if(t==="input"||t==="change")return Sl(e)}function ww(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:ww;function ss(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ja.call(e,i)||!It(t[i],e[i]))return!1}return!0}function ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mh(t,e){var n=ph(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ph(n)}}function dm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hm(){for(var t=window,e=xo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xo(t.document)}return e}function yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ew(t){var e=hm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dm(n.ownerDocument.documentElement,n)){if(r!==null&&yu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=mh(n,s);var o=mh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sw=Gt&&"documentMode"in document&&11>=document.documentMode,xr=null,ic=null,Wi=null,sc=!1;function gh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sc||xr==null||xr!==xo(r)||(r=xr,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wi&&ss(Wi,r)||(Wi=r,r=bo(ic,"onSelect"),0<r.length&&(e=new mu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xr)))}function Ys(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Tr={animationend:Ys("Animation","AnimationEnd"),animationiteration:Ys("Animation","AnimationIteration"),animationstart:Ys("Animation","AnimationStart"),transitionend:Ys("Transition","TransitionEnd")},aa={},fm={};Gt&&(fm=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Cl(t){if(aa[t])return aa[t];if(!Tr[t])return t;var e=Tr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fm)return aa[t]=e[n];return t}var pm=Cl("animationend"),mm=Cl("animationiteration"),gm=Cl("animationstart"),_m=Cl("transitionend"),ym=new Map,_h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,e){ym.set(t,e),hr(e,[t])}for(var ca=0;ca<_h.length;ca++){var ua=_h[ca],Cw=ua.toLowerCase(),Iw=ua[0].toUpperCase()+ua.slice(1);Ln(Cw,"on"+Iw)}Ln(pm,"onAnimationEnd");Ln(mm,"onAnimationIteration");Ln(gm,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(_m,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function yh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Cv(r,e,void 0,t),t.currentTarget=null}function vm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;yh(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;yh(i,l,c),s=a}}}if(Ro)throw t=ec,Ro=!1,ec=null,t}function se(t,e){var n=e[uc];n===void 0&&(n=e[uc]=new Set);var r=t+"__bubble";n.has(r)||(wm(e,t,2,!1),n.add(r))}function da(t,e,n){var r=0;e&&(r|=4),wm(n,t,r,e)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function os(t){if(!t[Xs]){t[Xs]=!0,Tp.forEach(function(n){n!=="selectionchange"&&(kw.has(n)||da(n,!1,t),da(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xs]||(e[Xs]=!0,da("selectionchange",!1,e))}}function wm(t,e,n,r){switch(rm(e)){case 1:var i=jv;break;case 4:i=zv;break;default:i=fu}n=i.bind(null,e,n,t),i=void 0,!Za||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ha(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}$p(function(){var c=s,d=cu(n),u=[];e:{var h=ym.get(t);if(h!==void 0){var v=mu,E=t;switch(t){case"keypress":if(fo(n)===0)break e;case"keydown":case"keyup":v=tw;break;case"focusin":E="focus",v=sa;break;case"focusout":E="blur",v=sa;break;case"beforeblur":case"afterblur":v=sa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=iw;break;case pm:case mm:case gm:v=Gv;break;case _m:v=ow;break;case"scroll":v=Wv;break;case"wheel":v=aw;break;case"copy":case"cut":case"paste":v=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ah}var C=(e&4)!==0,U=!C&&t==="scroll",g=C?h!==null?h+"Capture":null:h;C=[];for(var p=c,y;p!==null;){y=p;var I=y.stateNode;if(y.tag===5&&I!==null&&(y=I,g!==null&&(I=es(p,g),I!=null&&C.push(ls(p,I,y)))),U)break;p=p.return}0<C.length&&(h=new v(h,E,null,n,d),u.push({event:h,listeners:C}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==Xa&&(E=n.relatedTarget||n.fromElement)&&(Kn(E)||E[Kt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(E=n.relatedTarget||n.toElement,v=c,E=E?Kn(E):null,E!==null&&(U=fr(E),E!==U||E.tag!==5&&E.tag!==6)&&(E=null)):(v=null,E=c),v!==E)){if(C=oh,I="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(C=ah,I="onPointerLeave",g="onPointerEnter",p="pointer"),U=v==null?h:Rr(v),y=E==null?h:Rr(E),h=new C(I,p+"leave",v,n,d),h.target=U,h.relatedTarget=y,I=null,Kn(d)===c&&(C=new C(g,p+"enter",E,n,d),C.target=y,C.relatedTarget=U,I=C),U=I,v&&E)t:{for(C=v,g=E,p=0,y=C;y;y=wr(y))p++;for(y=0,I=g;I;I=wr(I))y++;for(;0<p-y;)C=wr(C),p--;for(;0<y-p;)g=wr(g),y--;for(;p--;){if(C===g||g!==null&&C===g.alternate)break t;C=wr(C),g=wr(g)}C=null}else C=null;v!==null&&vh(u,h,v,C,!1),E!==null&&U!==null&&vh(u,U,E,C,!0)}}e:{if(h=c?Rr(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var R=mw;else if(dh(h))if(cm)R=vw;else{R=_w;var O=gw}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=yw);if(R&&(R=R(t,c))){am(u,R,n,d);break e}O&&O(t,h,c),t==="focusout"&&(O=h._wrapperState)&&O.controlled&&h.type==="number"&&Ga(h,"number",h.value)}switch(O=c?Rr(c):window,t){case"focusin":(dh(O)||O.contentEditable==="true")&&(xr=O,ic=c,Wi=null);break;case"focusout":Wi=ic=xr=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,gh(u,n,d);break;case"selectionchange":if(Sw)break;case"keydown":case"keyup":gh(u,n,d)}var b;if(_u)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else kr?om(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(sm&&n.locale!=="ko"&&(kr||D!=="onCompositionStart"?D==="onCompositionEnd"&&kr&&(b=im()):(_n=d,pu="value"in _n?_n.value:_n.textContent,kr=!0)),O=bo(c,D),0<O.length&&(D=new lh(D,t,null,n,d),u.push({event:D,listeners:O}),b?D.data=b:(b=lm(n),b!==null&&(D.data=b)))),(b=uw?dw(t,n):hw(t,n))&&(c=bo(c,"onBeforeInput"),0<c.length&&(d=new lh("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=b))}vm(u,e)})}function ls(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=es(t,n),s!=null&&r.unshift(ls(t,s,i)),s=es(t,e),s!=null&&r.push(ls(t,s,i))),t=t.return}return r}function wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=es(n,s),a!=null&&o.unshift(ls(n,a,l))):i||(a=es(n,s),a!=null&&o.push(ls(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xw=/\r\n?/g,Tw=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace(xw,`
`).replace(Tw,"")}function Js(t,e,n){if(e=wh(e),wh(t)!==e&&n)throw Error(k(425))}function Do(){}var oc=null,lc=null;function ac(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,Rw=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,Pw=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(t){return Eh.resolve(null).then(t).catch(Nw)}:cc;function Nw(t){setTimeout(function(){throw t})}function fa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),rs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);rs(e)}function Sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ui=Math.random().toString(36).slice(2),At="__reactFiber$"+ui,as="__reactProps$"+ui,Kt="__reactContainer$"+ui,uc="__reactEvents$"+ui,Aw="__reactListeners$"+ui,Ow="__reactHandles$"+ui;function Kn(t){var e=t[At];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Kt]||n[At]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sh(t);t!==null;){if(n=t[At])return n;t=Sh(t)}return e}t=n,n=t.parentNode}return null}function Rs(t){return t=t[At]||t[Kt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Il(t){return t[as]||null}var dc=[],Pr=-1;function Mn(t){return{current:t}}function le(t){0>Pr||(t.current=dc[Pr],dc[Pr]=null,Pr--)}function ie(t,e){Pr++,dc[Pr]=t.current,t.current=e}var On={},Me=Mn(On),qe=Mn(!1),er=On;function Yr(t,e){var n=t.type.contextTypes;if(!n)return On;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(t){return t=t.childContextTypes,t!=null}function Lo(){le(qe),le(Me)}function Ch(t,e,n){if(Me.current!==On)throw Error(k(168));ie(Me,e),ie(qe,n)}function Em(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,gv(t)||"Unknown",i));return de({},n,r)}function Mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,er=Me.current,ie(Me,t),ie(qe,qe.current),!0}function Ih(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=Em(t,e,er),r.__reactInternalMemoizedMergedChildContext=t,le(qe),le(Me),ie(Me,t)):le(qe),ie(qe,n)}var Ft=null,kl=!1,pa=!1;function Sm(t){Ft===null?Ft=[t]:Ft.push(t)}function bw(t){kl=!0,Sm(t)}function Fn(){if(!pa&&Ft!==null){pa=!0;var t=0,e=J;try{var n=Ft;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ft=null,kl=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(t+1)),Kp(uu,Fn),i}finally{J=e,pa=!1}}return null}var Nr=[],Ar=0,Fo=null,Uo=0,ot=[],lt=0,tr=null,Ut=1,jt="";function $n(t,e){Nr[Ar++]=Uo,Nr[Ar++]=Fo,Fo=t,Uo=e}function Cm(t,e,n){ot[lt++]=Ut,ot[lt++]=jt,ot[lt++]=tr,tr=t;var r=Ut;t=jt;var i=32-Et(r)-1;r&=~(1<<i),n+=1;var s=32-Et(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ut=1<<32-Et(e)+i|n<<i|r,jt=s+t}else Ut=1<<s|n<<i|r,jt=t}function vu(t){t.return!==null&&($n(t,1),Cm(t,1,0))}function wu(t){for(;t===Fo;)Fo=Nr[--Ar],Nr[Ar]=null,Uo=Nr[--Ar],Nr[Ar]=null;for(;t===tr;)tr=ot[--lt],ot[lt]=null,jt=ot[--lt],ot[lt]=null,Ut=ot[--lt],ot[lt]=null}var nt=null,tt=null,ae=!1,mt=null;function Im(t,e){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nt=t,tt=Sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nt=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=tr!==null?{id:Ut,overflow:jt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nt=t,tt=null,!0):!1;default:return!1}}function hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fc(t){if(ae){var e=tt;if(e){var n=e;if(!kh(t,e)){if(hc(t))throw Error(k(418));e=Sn(n.nextSibling);var r=nt;e&&kh(t,e)?Im(r,n):(t.flags=t.flags&-4097|2,ae=!1,nt=t)}}else{if(hc(t))throw Error(k(418));t.flags=t.flags&-4097|2,ae=!1,nt=t}}}function xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function Zs(t){if(t!==nt)return!1;if(!ae)return xh(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ac(t.type,t.memoizedProps)),e&&(e=tt)){if(hc(t))throw km(),Error(k(418));for(;e;)Im(t,e),e=Sn(e.nextSibling)}if(xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=Sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=nt?Sn(t.stateNode.nextSibling):null;return!0}function km(){for(var t=tt;t;)t=Sn(t.nextSibling)}function Xr(){tt=nt=null,ae=!1}function Eu(t){mt===null?mt=[t]:mt.push(t)}var Dw=en.ReactCurrentBatchConfig;function Ii(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function eo(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Th(t){var e=t._init;return e(t._payload)}function xm(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=xn(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,p,y,I){return p===null||p.tag!==6?(p=Ea(y,g.mode,I),p.return=g,p):(p=i(p,y),p.return=g,p)}function a(g,p,y,I){var R=y.type;return R===Ir?d(g,p,y.props.children,I,y.key):p!==null&&(p.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===an&&Th(R)===p.type)?(I=i(p,y.props),I.ref=Ii(g,p,y),I.return=g,I):(I=wo(y.type,y.key,y.props,null,g.mode,I),I.ref=Ii(g,p,y),I.return=g,I)}function c(g,p,y,I){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Sa(y,g.mode,I),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function d(g,p,y,I,R){return p===null||p.tag!==7?(p=Zn(y,g.mode,I,R),p.return=g,p):(p=i(p,y),p.return=g,p)}function u(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ea(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $s:return y=wo(p.type,p.key,p.props,null,g.mode,y),y.ref=Ii(g,null,p),y.return=g,y;case Cr:return p=Sa(p,g.mode,y),p.return=g,p;case an:var I=p._init;return u(g,I(p._payload),y)}if(Oi(p)||vi(p))return p=Zn(p,g.mode,y,null),p.return=g,p;eo(g,p)}return null}function h(g,p,y,I){var R=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:l(g,p,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $s:return y.key===R?a(g,p,y,I):null;case Cr:return y.key===R?c(g,p,y,I):null;case an:return R=y._init,h(g,p,R(y._payload),I)}if(Oi(y)||vi(y))return R!==null?null:d(g,p,y,I,null);eo(g,y)}return null}function v(g,p,y,I,R){if(typeof I=="string"&&I!==""||typeof I=="number")return g=g.get(y)||null,l(p,g,""+I,R);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case $s:return g=g.get(I.key===null?y:I.key)||null,a(p,g,I,R);case Cr:return g=g.get(I.key===null?y:I.key)||null,c(p,g,I,R);case an:var O=I._init;return v(g,p,y,O(I._payload),R)}if(Oi(I)||vi(I))return g=g.get(y)||null,d(p,g,I,R,null);eo(p,I)}return null}function E(g,p,y,I){for(var R=null,O=null,b=p,D=p=0,Z=null;b!==null&&D<y.length;D++){b.index>D?(Z=b,b=null):Z=b.sibling;var V=h(g,b,y[D],I);if(V===null){b===null&&(b=Z);break}t&&b&&V.alternate===null&&e(g,b),p=s(V,p,D),O===null?R=V:O.sibling=V,O=V,b=Z}if(D===y.length)return n(g,b),ae&&$n(g,D),R;if(b===null){for(;D<y.length;D++)b=u(g,y[D],I),b!==null&&(p=s(b,p,D),O===null?R=b:O.sibling=b,O=b);return ae&&$n(g,D),R}for(b=r(g,b);D<y.length;D++)Z=v(b,g,D,y[D],I),Z!==null&&(t&&Z.alternate!==null&&b.delete(Z.key===null?D:Z.key),p=s(Z,p,D),O===null?R=Z:O.sibling=Z,O=Z);return t&&b.forEach(function(me){return e(g,me)}),ae&&$n(g,D),R}function C(g,p,y,I){var R=vi(y);if(typeof R!="function")throw Error(k(150));if(y=R.call(y),y==null)throw Error(k(151));for(var O=R=null,b=p,D=p=0,Z=null,V=y.next();b!==null&&!V.done;D++,V=y.next()){b.index>D?(Z=b,b=null):Z=b.sibling;var me=h(g,b,V.value,I);if(me===null){b===null&&(b=Z);break}t&&b&&me.alternate===null&&e(g,b),p=s(me,p,D),O===null?R=me:O.sibling=me,O=me,b=Z}if(V.done)return n(g,b),ae&&$n(g,D),R;if(b===null){for(;!V.done;D++,V=y.next())V=u(g,V.value,I),V!==null&&(p=s(V,p,D),O===null?R=V:O.sibling=V,O=V);return ae&&$n(g,D),R}for(b=r(g,b);!V.done;D++,V=y.next())V=v(b,g,D,V.value,I),V!==null&&(t&&V.alternate!==null&&b.delete(V.key===null?D:V.key),p=s(V,p,D),O===null?R=V:O.sibling=V,O=V);return t&&b.forEach(function(nn){return e(g,nn)}),ae&&$n(g,D),R}function U(g,p,y,I){if(typeof y=="object"&&y!==null&&y.type===Ir&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case $s:e:{for(var R=y.key,O=p;O!==null;){if(O.key===R){if(R=y.type,R===Ir){if(O.tag===7){n(g,O.sibling),p=i(O,y.props.children),p.return=g,g=p;break e}}else if(O.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===an&&Th(R)===O.type){n(g,O.sibling),p=i(O,y.props),p.ref=Ii(g,O,y),p.return=g,g=p;break e}n(g,O);break}else e(g,O);O=O.sibling}y.type===Ir?(p=Zn(y.props.children,g.mode,I,y.key),p.return=g,g=p):(I=wo(y.type,y.key,y.props,null,g.mode,I),I.ref=Ii(g,p,y),I.return=g,g=I)}return o(g);case Cr:e:{for(O=y.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Sa(y,g.mode,I),p.return=g,g=p}return o(g);case an:return O=y._init,U(g,p,O(y._payload),I)}if(Oi(y))return E(g,p,y,I);if(vi(y))return C(g,p,y,I);eo(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=Ea(y,g.mode,I),p.return=g,g=p),o(g)):n(g,p)}return U}var Jr=xm(!0),Tm=xm(!1),jo=Mn(null),zo=null,Or=null,Su=null;function Cu(){Su=Or=zo=null}function Iu(t){var e=jo.current;le(jo),t._currentValue=e}function pc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wr(t,e){zo=t,Su=Or=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(Su!==t)if(t={context:t,memoizedValue:e,next:null},Or===null){if(zo===null)throw Error(k(308));Or=t,zo.dependencies={lanes:0,firstContext:t}}else Or=Or.next=t;return e}var qn=null;function ku(t){qn===null?qn=[t]:qn.push(t)}function Rm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ku(e)):(n.next=i.next,i.next=n),e.interleaved=n,qt(t,r)}function qt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cn=!1;function xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ht(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qt(t,n)}return i=r.interleaved,i===null?(e.next=e,ku(r)):(e.next=i.next,i.next=e),r.interleaved=e,qt(t,n)}function po(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,du(t,n)}}function Rh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wo(t,e,n,r){var i=t.updateQueue;cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(s!==null){var u=i.baseState;o=0,d=c=a=null,l=s;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=t,C=l;switch(h=e,v=n,C.tag){case 1:if(E=C.payload,typeof E=="function"){u=E.call(v,u,h);break e}u=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=C.payload,h=typeof E=="function"?E.call(v,u,h):E,h==null)break e;u=de({},u,h);break e;case 2:cn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,a=u):d=d.next=v,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=u),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);rr|=o,t.lanes=o,t.memoizedState=u}}function Ph(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Ps={},bt=Mn(Ps),cs=Mn(Ps),us=Mn(Ps);function Qn(t){if(t===Ps)throw Error(k(174));return t}function Tu(t,e){switch(ie(us,e),ie(cs,t),ie(bt,Ps),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qa(e,t)}le(bt),ie(bt,e)}function Zr(){le(bt),le(cs),le(us)}function Nm(t){Qn(us.current);var e=Qn(bt.current),n=qa(e,t.type);e!==n&&(ie(cs,t),ie(bt,n))}function Ru(t){cs.current===t&&(le(bt),le(cs))}var ce=Mn(0);function Bo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ma=[];function Pu(){for(var t=0;t<ma.length;t++)ma[t]._workInProgressVersionPrimary=null;ma.length=0}var mo=en.ReactCurrentDispatcher,ga=en.ReactCurrentBatchConfig,nr=0,ue=null,we=null,Ie=null,$o=!1,Bi=!1,ds=0,Lw=0;function Oe(){throw Error(k(321))}function Nu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!It(t[n],e[n]))return!1;return!0}function Au(t,e,n,r,i,s){if(nr=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mo.current=t===null||t.memoizedState===null?jw:zw,t=n(r,i),Bi){s=0;do{if(Bi=!1,ds=0,25<=s)throw Error(k(301));s+=1,Ie=we=null,e.updateQueue=null,mo.current=Ww,t=n(r,i)}while(Bi)}if(mo.current=Ho,e=we!==null&&we.next!==null,nr=0,Ie=we=ue=null,$o=!1,e)throw Error(k(300));return t}function Ou(){var t=ds!==0;return ds=0,t}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ue.memoizedState=Ie=t:Ie=Ie.next=t,Ie}function dt(){if(we===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var e=Ie===null?ue.memoizedState:Ie.next;if(e!==null)Ie=e,we=t;else{if(t===null)throw Error(k(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ie===null?ue.memoizedState=Ie=t:Ie=Ie.next=t}return Ie}function hs(t,e){return typeof e=="function"?e(t):e}function _a(t){var e=dt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=we,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var d=c.lane;if((nr&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=u,o=r):a=a.next=u,ue.lanes|=d,rr|=d}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,It(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,rr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ya(t){var e=dt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);It(s,e.memoizedState)||(Ve=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Am(){}function Om(t,e){var n=ue,r=dt(),i=e(),s=!It(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,bu(Lm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,fs(9,Dm.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(k(349));nr&30||bm(n,e,i)}return i}function bm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dm(t,e,n,r){e.value=n,e.getSnapshot=r,Mm(e)&&Fm(t)}function Lm(t,e,n){return n(function(){Mm(e)&&Fm(t)})}function Mm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!It(t,n)}catch{return!0}}function Fm(t){var e=qt(t,1);e!==null&&St(e,t,1,-1)}function Nh(t){var e=Nt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:t},e.queue=t,t=t.dispatch=Uw.bind(null,ue,t),[e.memoizedState,t]}function fs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Um(){return dt().memoizedState}function go(t,e,n,r){var i=Nt();ue.flags|=t,i.memoizedState=fs(1|e,n,void 0,r===void 0?null:r)}function xl(t,e,n,r){var i=dt();r=r===void 0?null:r;var s=void 0;if(we!==null){var o=we.memoizedState;if(s=o.destroy,r!==null&&Nu(r,o.deps)){i.memoizedState=fs(e,n,s,r);return}}ue.flags|=t,i.memoizedState=fs(1|e,n,s,r)}function Ah(t,e){return go(8390656,8,t,e)}function bu(t,e){return xl(2048,8,t,e)}function jm(t,e){return xl(4,2,t,e)}function zm(t,e){return xl(4,4,t,e)}function Wm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bm(t,e,n){return n=n!=null?n.concat([t]):null,xl(4,4,Wm.bind(null,e,t),n)}function Du(){}function $m(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Hm(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Vm(t,e,n){return nr&21?(It(n,e)||(n=Yp(),ue.lanes|=n,rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n)}function Mw(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=ga.transition;ga.transition={};try{t(!1),e()}finally{J=n,ga.transition=r}}function Gm(){return dt().memoizedState}function Fw(t,e,n){var r=kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Km(t))qm(e,n);else if(n=Rm(t,e,n,r),n!==null){var i=Ue();St(n,t,r,i),Qm(n,e,r)}}function Uw(t,e,n){var r=kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Km(t))qm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,It(l,o)){var a=e.interleaved;a===null?(i.next=i,ku(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Rm(t,e,i,r),n!==null&&(i=Ue(),St(n,t,r,i),Qm(n,e,r))}}function Km(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function qm(t,e){Bi=$o=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,du(t,n)}}var Ho={readContext:ut,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},jw={readContext:ut,useCallback:function(t,e){return Nt().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:Ah,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,go(4194308,4,Wm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return go(4194308,4,t,e)},useInsertionEffect:function(t,e){return go(4,2,t,e)},useMemo:function(t,e){var n=Nt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Fw.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Nt();return t={current:t},e.memoizedState=t},useState:Nh,useDebugValue:Du,useDeferredValue:function(t){return Nt().memoizedState=t},useTransition:function(){var t=Nh(!1),e=t[0];return t=Mw.bind(null,t[1]),Nt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=Nt();if(ae){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Te===null)throw Error(k(349));nr&30||bm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ah(Lm.bind(null,r,s,t),[t]),r.flags|=2048,fs(9,Dm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nt(),e=Te.identifierPrefix;if(ae){var n=jt,r=Ut;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ds++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Lw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zw={readContext:ut,useCallback:$m,useContext:ut,useEffect:bu,useImperativeHandle:Bm,useInsertionEffect:jm,useLayoutEffect:zm,useMemo:Hm,useReducer:_a,useRef:Um,useState:function(){return _a(hs)},useDebugValue:Du,useDeferredValue:function(t){var e=dt();return Vm(e,we.memoizedState,t)},useTransition:function(){var t=_a(hs)[0],e=dt().memoizedState;return[t,e]},useMutableSource:Am,useSyncExternalStore:Om,useId:Gm,unstable_isNewReconciler:!1},Ww={readContext:ut,useCallback:$m,useContext:ut,useEffect:bu,useImperativeHandle:Bm,useInsertionEffect:jm,useLayoutEffect:zm,useMemo:Hm,useReducer:ya,useRef:Um,useState:function(){return ya(hs)},useDebugValue:Du,useDeferredValue:function(t){var e=dt();return we===null?e.memoizedState=t:Vm(e,we.memoizedState,t)},useTransition:function(){var t=ya(hs)[0],e=dt().memoizedState;return[t,e]},useMutableSource:Am,useSyncExternalStore:Om,useId:Gm,unstable_isNewReconciler:!1};function ft(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tl={isMounted:function(t){return(t=t._reactInternals)?fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=kn(t),s=Ht(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(St(e,t,i,r),po(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=kn(t),s=Ht(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(St(e,t,i,r),po(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ue(),r=kn(t),i=Ht(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cn(t,i,r),e!==null&&(St(e,t,r,n),po(e,t,r))}};function Oh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ss(n,r)||!ss(i,s):!0}function Ym(t,e,n){var r=!1,i=On,s=e.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=Qe(e)?er:Me.current,r=e.contextTypes,s=(r=r!=null)?Yr(t,i):On),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tl.enqueueReplaceState(e,e.state,null)}function gc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},xu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=Qe(e)?er:Me.current,i.context=Yr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tl.enqueueReplaceState(i,i.state,null),Wo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ei(t,e){try{var n="",r=e;do n+=mv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function va(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _c(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Bw=typeof WeakMap=="function"?WeakMap:Map;function Xm(t,e,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Go||(Go=!0,Tc=r),_c(t,e)},n}function Jm(t,e,n){n=Ht(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_c(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_c(t,e),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Bw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=n0.bind(null,t,e,n),e.then(t,t))}function Lh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ht(-1,1),e.tag=2,Cn(n,e,1))),n.lanes|=1),t)}var $w=en.ReactCurrentOwner,Ve=!1;function Fe(t,e,n,r){e.child=t===null?Tm(e,null,n,r):Jr(e,t.child,n,r)}function Fh(t,e,n,r,i){n=n.render;var s=e.ref;return Wr(e,i),r=Au(t,e,n,r,s,i),n=Ou(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(ae&&n&&vu(e),e.flags|=1,Fe(t,e,r,i),e.child)}function Uh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Bu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zm(t,e,s,r,i)):(t=wo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(o,r)&&t.ref===e.ref)return Qt(t,e,i)}return e.flags|=1,t=xn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Zm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ss(s,r)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,Qt(t,e,i)}return yc(t,e,n,r,i)}function eg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Dr,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(Dr,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Dr,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(Dr,et),et|=r;return Fe(t,e,i,n),e.child}function tg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yc(t,e,n,r,i){var s=Qe(n)?er:Me.current;return s=Yr(e,s),Wr(e,i),n=Au(t,e,n,r,s,i),r=Ou(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(ae&&r&&vu(e),e.flags|=1,Fe(t,e,n,i),e.child)}function jh(t,e,n,r,i){if(Qe(n)){var s=!0;Mo(e)}else s=!1;if(Wr(e,i),e.stateNode===null)_o(t,e),Ym(e,n,r),gc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ut(c):(c=Qe(n)?er:Me.current,c=Yr(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&bh(e,o,r,c),cn=!1;var h=e.memoizedState;o.state=h,Wo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||qe.current||cn?(typeof d=="function"&&(mc(e,n,d,r),a=e.memoizedState),(l=cn||Oh(e,n,l,r,h,a,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Pm(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:ft(e.type,l),o.props=c,u=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Qe(n)?er:Me.current,a=Yr(e,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==u||h!==a)&&bh(e,o,r,a),cn=!1,h=e.memoizedState,o.state=h,Wo(e,r,o,i);var E=e.memoizedState;l!==u||h!==E||qe.current||cn?(typeof v=="function"&&(mc(e,n,v,r),E=e.memoizedState),(c=cn||Oh(e,n,c,r,h,E,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return vc(t,e,n,r,s,i)}function vc(t,e,n,r,i,s){tg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ih(e,n,!1),Qt(t,e,s);r=e.stateNode,$w.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Jr(e,t.child,null,s),e.child=Jr(e,null,l,s)):Fe(t,e,l,s),e.memoizedState=r.state,i&&Ih(e,n,!0),e.child}function ng(t){var e=t.stateNode;e.pendingContext?Ch(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ch(t,e.context,!1),Tu(t,e.containerInfo)}function zh(t,e,n,r,i){return Xr(),Eu(i),e.flags|=256,Fe(t,e,n,r),e.child}var wc={dehydrated:null,treeContext:null,retryLane:0};function Ec(t){return{baseLanes:t,cachePool:null,transitions:null}}function rg(t,e,n){var r=e.pendingProps,i=ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(ce,i&1),t===null)return fc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nl(o,r,0,null),t=Zn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ec(n),e.memoizedState=wc,t):Lu(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Hw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=xn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=xn(l,s):(s=Zn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ec(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wc,r}return s=t.child,t=s.sibling,r=xn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Lu(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function to(t,e,n,r){return r!==null&&Eu(r),Jr(e,t.child,null,n),t=Lu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Hw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=va(Error(k(422))),to(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Nl({mode:"visible",children:r.children},i,0,null),s=Zn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Jr(e,t.child,null,o),e.child.memoizedState=Ec(o),e.memoizedState=wc,s);if(!(e.mode&1))return to(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=va(s,r,void 0),to(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ve||l){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qt(t,i),St(r,t,i,-1))}return Wu(),r=va(Error(k(421))),to(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=r0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tt=Sn(i.nextSibling),nt=e,ae=!0,mt=null,t!==null&&(ot[lt++]=Ut,ot[lt++]=jt,ot[lt++]=tr,Ut=t.id,jt=t.overflow,tr=e),e=Lu(e,r.children),e.flags|=4096,e)}function Wh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pc(t.return,e,n)}function wa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ig(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Fe(t,e,r.children,n),r=ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wh(t,n,e);else if(t.tag===19)Wh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wa(e,!0,n,null,s);break;case"together":wa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _o(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Vw(t,e,n){switch(e.tag){case 3:ng(e),Xr();break;case 5:Nm(e);break;case 1:Qe(e.type)&&Mo(e);break;case 4:Tu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(jo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(ce,ce.current&1),e.flags|=128,null):n&e.child.childLanes?rg(t,e,n):(ie(ce,ce.current&1),t=Qt(t,e,n),t!==null?t.sibling:null);ie(ce,ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ig(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(ce,ce.current),r)break;return null;case 22:case 23:return e.lanes=0,eg(t,e,n)}return Qt(t,e,n)}var sg,Sc,og,lg;sg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sc=function(){};og=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qn(bt.current);var s=null;switch(n){case"input":i=Ha(t,i),r=Ha(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=Ka(t,i),r=Ka(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Do)}Qa(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ji.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ji.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&se("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};lg=function(t,e,n,r){n!==r&&(e.flags|=4)};function ki(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Gw(t,e,n){var r=e.pendingProps;switch(wu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(e),null;case 1:return Qe(e.type)&&Lo(),be(e),null;case 3:return r=e.stateNode,Zr(),le(qe),le(Me),Pu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mt!==null&&(Nc(mt),mt=null))),Sc(t,e),be(e),null;case 5:Ru(e);var i=Qn(us.current);if(n=e.type,t!==null&&e.stateNode!=null)og(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return be(e),null}if(t=Qn(bt.current),Zs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[At]=e,r[as]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Di.length;i++)se(Di[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Yd(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":Jd(r,s),se("invalid",r)}Qa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Js(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Js(r.textContent,l,t),i=["children",""+l]):Ji.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Hs(r),Xd(r,s,!0);break;case"textarea":Hs(r),Zd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Do)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[At]=e,t[as]=r,sg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ya(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Di.length;i++)se(Di[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":Yd(t,r),i=Ha(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),se("invalid",t);break;case"textarea":Jd(t,r),i=Ka(t,r),se("invalid",t);break;default:i=r}Qa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Up(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Mp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Zi(t,a):typeof a=="number"&&Zi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ji.hasOwnProperty(s)?a!=null&&s==="onScroll"&&se("scroll",t):a!=null&&su(t,s,a,o))}switch(n){case"input":Hs(t),Xd(t,r,!1);break;case"textarea":Hs(t),Zd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+An(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Do)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return be(e),null;case 6:if(t&&e.stateNode!=null)lg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Qn(us.current),Qn(bt.current),Zs(e)){if(r=e.stateNode,n=e.memoizedProps,r[At]=e,(s=r.nodeValue!==n)&&(t=nt,t!==null))switch(t.tag){case 3:Js(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Js(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=e,e.stateNode=r}return be(e),null;case 13:if(le(ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&tt!==null&&e.mode&1&&!(e.flags&128))km(),Xr(),e.flags|=98560,s=!1;else if(s=Zs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[At]=e}else Xr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;be(e),s=!1}else mt!==null&&(Nc(mt),mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ce.current&1?Se===0&&(Se=3):Wu())),e.updateQueue!==null&&(e.flags|=4),be(e),null);case 4:return Zr(),Sc(t,e),t===null&&os(e.stateNode.containerInfo),be(e),null;case 10:return Iu(e.type._context),be(e),null;case 17:return Qe(e.type)&&Lo(),be(e),null;case 19:if(le(ce),s=e.memoizedState,s===null)return be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ki(s,!1);else{if(Se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bo(t),o!==null){for(e.flags|=128,ki(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&pe()>ti&&(e.flags|=128,r=!0,ki(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ki(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return be(e),null}else 2*pe()-s.renderingStartTime>ti&&n!==1073741824&&(e.flags|=128,r=!0,ki(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pe(),e.sibling=null,n=ce.current,ie(ce,r?n&1|2:n&1),e):(be(e),null);case 22:case 23:return zu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(be(e),e.subtreeFlags&6&&(e.flags|=8192)):be(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function Kw(t,e){switch(wu(e),e.tag){case 1:return Qe(e.type)&&Lo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zr(),le(qe),le(Me),Pu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ru(e),null;case 13:if(le(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Xr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(ce),null;case 4:return Zr(),null;case 10:return Iu(e.type._context),null;case 22:case 23:return zu(),null;case 24:return null;default:return null}}var no=!1,De=!1,qw=typeof WeakSet=="function"?WeakSet:Set,P=null;function br(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function Cc(t,e,n){try{n()}catch(r){he(t,e,r)}}var Bh=!1;function Qw(t,e){if(oc=Ao,t=hm(),yu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,d=0,u=t,h=null;t:for(;;){for(var v;u!==n||i!==0&&u.nodeType!==3||(l=o+i),u!==s||r!==0&&u.nodeType!==3||(a=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)h=u,u=v;for(;;){if(u===t)break t;if(h===n&&++c===i&&(l=o),h===s&&++d===r&&(a=o),(v=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(lc={focusedElem:t,selectionRange:n},Ao=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var C=E.memoizedProps,U=E.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?C:ft(e.type,C),U);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(I){he(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return E=Bh,Bh=!1,E}function $i(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cc(e,n,s)}i=i.next}while(i!==r)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ic(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ag(t){var e=t.alternate;e!==null&&(t.alternate=null,ag(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[At],delete e[as],delete e[uc],delete e[Aw],delete e[Ow])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cg(t){return t.tag===5||t.tag===3||t.tag===4}function $h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Do));else if(r!==4&&(t=t.child,t!==null))for(kc(t,e,n),t=t.sibling;t!==null;)kc(t,e,n),t=t.sibling}function xc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xc(t,e,n),t=t.sibling;t!==null;)xc(t,e,n),t=t.sibling}var Re=null,pt=!1;function on(t,e,n){for(n=n.child;n!==null;)ug(t,e,n),n=n.sibling}function ug(t,e,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:De||br(n,e);case 6:var r=Re,i=pt;Re=null,on(t,e,n),Re=r,pt=i,Re!==null&&(pt?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(pt?(t=Re,n=n.stateNode,t.nodeType===8?fa(t.parentNode,n):t.nodeType===1&&fa(t,n),rs(t)):fa(Re,n.stateNode));break;case 4:r=Re,i=pt,Re=n.stateNode.containerInfo,pt=!0,on(t,e,n),Re=r,pt=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cc(n,e,o),i=i.next}while(i!==r)}on(t,e,n);break;case 1:if(!De&&(br(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,e,l)}on(t,e,n);break;case 21:on(t,e,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,on(t,e,n),De=r):on(t,e,n);break;default:on(t,e,n)}}function Hh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qw),e.forEach(function(r){var i=i0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Re=l.stateNode,pt=!1;break e;case 3:Re=l.stateNode.containerInfo,pt=!0;break e;case 4:Re=l.stateNode.containerInfo,pt=!0;break e}l=l.return}if(Re===null)throw Error(k(160));ug(s,o,i),Re=null,pt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){he(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dg(e,t),e=e.sibling}function dg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ht(e,t),Pt(t),r&4){try{$i(3,t,t.return),Rl(3,t)}catch(C){he(t,t.return,C)}try{$i(5,t,t.return)}catch(C){he(t,t.return,C)}}break;case 1:ht(e,t),Pt(t),r&512&&n!==null&&br(n,n.return);break;case 5:if(ht(e,t),Pt(t),r&512&&n!==null&&br(n,n.return),t.flags&32){var i=t.stateNode;try{Zi(i,"")}catch(C){he(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&bp(i,s),Ya(l,o);var c=Ya(l,s);for(o=0;o<a.length;o+=2){var d=a[o],u=a[o+1];d==="style"?Up(i,u):d==="dangerouslySetInnerHTML"?Mp(i,u):d==="children"?Zi(i,u):su(i,d,u,c)}switch(l){case"input":Va(i,s);break;case"textarea":Dp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Fr(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fr(i,!!s.multiple,s.defaultValue,!0):Fr(i,!!s.multiple,s.multiple?[]:"",!1))}i[as]=s}catch(C){he(t,t.return,C)}}break;case 6:if(ht(e,t),Pt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){he(t,t.return,C)}}break;case 3:if(ht(e,t),Pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rs(e.containerInfo)}catch(C){he(t,t.return,C)}break;case 4:ht(e,t),Pt(t);break;case 13:ht(e,t),Pt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Uu=pe())),r&4&&Hh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(De=(c=De)||d,ht(e,t),De=c):ht(e,t),Pt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(P=t,d=t.child;d!==null;){for(u=P=d;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:$i(4,h,h.return);break;case 1:br(h,h.return);var E=h.stateNode;if(typeof E.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(C){he(r,n,C)}}break;case 5:br(h,h.return);break;case 22:if(h.memoizedState!==null){Gh(u);continue}}v!==null?(v.return=h,P=v):Gh(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=u.stateNode,a=u.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Fp("display",o))}catch(C){he(t,t.return,C)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(C){he(t,t.return,C)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:ht(e,t),Pt(t),r&4&&Hh(t);break;case 21:break;default:ht(e,t),Pt(t)}}function Pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cg(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zi(i,""),r.flags&=-33);var s=$h(t);xc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$h(t);kc(t,l,o);break;default:throw Error(k(161))}}catch(a){he(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Yw(t,e,n){P=t,hg(t)}function hg(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||no;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||De;l=no;var c=De;if(no=o,(De=a)&&!c)for(P=i;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?Kh(i):a!==null?(a.return=o,P=a):Kh(i);for(;s!==null;)P=s,hg(s),s=s.sibling;P=i,no=l,De=c}Vh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Vh(t)}}function Vh(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:De||Rl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ph(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ph(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&rs(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}De||e.flags&512&&Ic(e)}catch(h){he(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Gh(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Kh(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(a){he(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){he(e,i,a)}}var s=e.return;try{Ic(e)}catch(a){he(e,s,a)}break;case 5:var o=e.return;try{Ic(e)}catch(a){he(e,o,a)}}}catch(a){he(e,e.return,a)}if(e===t){P=null;break}var l=e.sibling;if(l!==null){l.return=e.return,P=l;break}P=e.return}}var Xw=Math.ceil,Vo=en.ReactCurrentDispatcher,Mu=en.ReactCurrentOwner,ct=en.ReactCurrentBatchConfig,Q=0,Te=null,ve=null,Ne=0,et=0,Dr=Mn(0),Se=0,ps=null,rr=0,Pl=0,Fu=0,Hi=null,He=null,Uu=0,ti=1/0,Mt=null,Go=!1,Tc=null,In=null,ro=!1,yn=null,Ko=0,Vi=0,Rc=null,yo=-1,vo=0;function Ue(){return Q&6?pe():yo!==-1?yo:yo=pe()}function kn(t){return t.mode&1?Q&2&&Ne!==0?Ne&-Ne:Dw.transition!==null?(vo===0&&(vo=Yp()),vo):(t=J,t!==0||(t=window.event,t=t===void 0?16:rm(t.type)),t):1}function St(t,e,n,r){if(50<Vi)throw Vi=0,Rc=null,Error(k(185));xs(t,n,r),(!(Q&2)||t!==Te)&&(t===Te&&(!(Q&2)&&(Pl|=n),Se===4&&dn(t,Ne)),Ye(t,r),n===1&&Q===0&&!(e.mode&1)&&(ti=pe()+500,kl&&Fn()))}function Ye(t,e){var n=t.callbackNode;Dv(t,e);var r=No(t,t===Te?Ne:0);if(r===0)n!==null&&nh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nh(n),e===1)t.tag===0?bw(qh.bind(null,t)):Sm(qh.bind(null,t)),Pw(function(){!(Q&6)&&Fn()}),n=null;else{switch(Xp(r)){case 1:n=uu;break;case 4:n=qp;break;case 16:n=Po;break;case 536870912:n=Qp;break;default:n=Po}n=wg(n,fg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fg(t,e){if(yo=-1,vo=0,Q&6)throw Error(k(327));var n=t.callbackNode;if(Br()&&t.callbackNode!==n)return null;var r=No(t,t===Te?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qo(t,r);else{e=r;var i=Q;Q|=2;var s=mg();(Te!==t||Ne!==e)&&(Mt=null,ti=pe()+500,Jn(t,e));do try{e0();break}catch(l){pg(t,l)}while(!0);Cu(),Vo.current=s,Q=i,ve!==null?e=0:(Te=null,Ne=0,e=Se)}if(e!==0){if(e===2&&(i=tc(t),i!==0&&(r=i,e=Pc(t,i))),e===1)throw n=ps,Jn(t,0),dn(t,r),Ye(t,pe()),n;if(e===6)dn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Jw(i)&&(e=qo(t,r),e===2&&(s=tc(t),s!==0&&(r=s,e=Pc(t,s))),e===1))throw n=ps,Jn(t,0),dn(t,r),Ye(t,pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Hn(t,He,Mt);break;case 3:if(dn(t,r),(r&130023424)===r&&(e=Uu+500-pe(),10<e)){if(No(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ue(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cc(Hn.bind(null,t,He,Mt),e);break}Hn(t,He,Mt);break;case 4:if(dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Et(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xw(r/1960))-r,10<r){t.timeoutHandle=cc(Hn.bind(null,t,He,Mt),r);break}Hn(t,He,Mt);break;case 5:Hn(t,He,Mt);break;default:throw Error(k(329))}}}return Ye(t,pe()),t.callbackNode===n?fg.bind(null,t):null}function Pc(t,e){var n=Hi;return t.current.memoizedState.isDehydrated&&(Jn(t,e).flags|=256),t=qo(t,e),t!==2&&(e=He,He=n,e!==null&&Nc(e)),t}function Nc(t){He===null?He=t:He.push.apply(He,t)}function Jw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!It(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dn(t,e){for(e&=~Fu,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Et(e),r=1<<n;t[n]=-1,e&=~r}}function qh(t){if(Q&6)throw Error(k(327));Br();var e=No(t,0);if(!(e&1))return Ye(t,pe()),null;var n=qo(t,e);if(t.tag!==0&&n===2){var r=tc(t);r!==0&&(e=r,n=Pc(t,r))}if(n===1)throw n=ps,Jn(t,0),dn(t,e),Ye(t,pe()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hn(t,He,Mt),Ye(t,pe()),null}function ju(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(ti=pe()+500,kl&&Fn())}}function ir(t){yn!==null&&yn.tag===0&&!(Q&6)&&Br();var e=Q;Q|=1;var n=ct.transition,r=J;try{if(ct.transition=null,J=1,t)return t()}finally{J=r,ct.transition=n,Q=e,!(Q&6)&&Fn()}}function zu(){et=Dr.current,le(Dr)}function Jn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Rw(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lo();break;case 3:Zr(),le(qe),le(Me),Pu();break;case 5:Ru(r);break;case 4:Zr();break;case 13:le(ce);break;case 19:le(ce);break;case 10:Iu(r.type._context);break;case 22:case 23:zu()}n=n.return}if(Te=t,ve=t=xn(t.current,null),Ne=et=e,Se=0,ps=null,Fu=Pl=rr=0,He=Hi=null,qn!==null){for(e=0;e<qn.length;e++)if(n=qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qn=null}return t}function pg(t,e){do{var n=ve;try{if(Cu(),mo.current=Ho,$o){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$o=!1}if(nr=0,Ie=we=ue=null,Bi=!1,ds=0,Mu.current=null,n===null||n.return===null){Se=1,ps=e,ve=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Lh(o);if(v!==null){v.flags&=-257,Mh(v,o,l,s,e),v.mode&1&&Dh(s,c,e),e=v,a=c;var E=e.updateQueue;if(E===null){var C=new Set;C.add(a),e.updateQueue=C}else E.add(a);break e}else{if(!(e&1)){Dh(s,c,e),Wu();break e}a=Error(k(426))}}else if(ae&&l.mode&1){var U=Lh(o);if(U!==null){!(U.flags&65536)&&(U.flags|=256),Mh(U,o,l,s,e),Eu(ei(a,l));break e}}s=a=ei(a,l),Se!==4&&(Se=2),Hi===null?Hi=[s]:Hi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Xm(s,a,e);Rh(s,g);break e;case 1:l=a;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(In===null||!In.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=Jm(s,l,e);Rh(s,I);break e}}s=s.return}while(s!==null)}_g(n)}catch(R){e=R,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function mg(){var t=Vo.current;return Vo.current=Ho,t===null?Ho:t}function Wu(){(Se===0||Se===3||Se===2)&&(Se=4),Te===null||!(rr&268435455)&&!(Pl&268435455)||dn(Te,Ne)}function qo(t,e){var n=Q;Q|=2;var r=mg();(Te!==t||Ne!==e)&&(Mt=null,Jn(t,e));do try{Zw();break}catch(i){pg(t,i)}while(!0);if(Cu(),Q=n,Vo.current=r,ve!==null)throw Error(k(261));return Te=null,Ne=0,Se}function Zw(){for(;ve!==null;)gg(ve)}function e0(){for(;ve!==null&&!kv();)gg(ve)}function gg(t){var e=vg(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?_g(t):ve=e,Mu.current=null}function _g(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kw(n,e),n!==null){n.flags&=32767,ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Se=6,ve=null;return}}else if(n=Gw(n,e,et),n!==null){ve=n;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);Se===0&&(Se=5)}function Hn(t,e,n){var r=J,i=ct.transition;try{ct.transition=null,J=1,t0(t,e,n,r)}finally{ct.transition=i,J=r}return null}function t0(t,e,n,r){do Br();while(yn!==null);if(Q&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Lv(t,s),t===Te&&(ve=Te=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,wg(Po,function(){return Br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ct.transition,ct.transition=null;var o=J;J=1;var l=Q;Q|=4,Mu.current=null,Qw(t,n),dg(n,t),Ew(lc),Ao=!!oc,lc=oc=null,t.current=n,Yw(n),xv(),Q=l,J=o,ct.transition=s}else t.current=n;if(ro&&(ro=!1,yn=t,Ko=i),s=t.pendingLanes,s===0&&(In=null),Pv(n.stateNode),Ye(t,pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Go)throw Go=!1,t=Tc,Tc=null,t;return Ko&1&&t.tag!==0&&Br(),s=t.pendingLanes,s&1?t===Rc?Vi++:(Vi=0,Rc=t):Vi=0,Fn(),null}function Br(){if(yn!==null){var t=Xp(Ko),e=ct.transition,n=J;try{if(ct.transition=null,J=16>t?16:t,yn===null)var r=!1;else{if(t=yn,yn=null,Ko=0,Q&6)throw Error(k(331));var i=Q;for(Q|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(P=c;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:$i(8,d,s)}var u=d.child;if(u!==null)u.return=d,P=u;else for(;P!==null;){d=P;var h=d.sibling,v=d.return;if(ag(d),d===c){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var E=s.alternate;if(E!==null){var C=E.child;if(C!==null){E.child=null;do{var U=C.sibling;C.sibling=null,C=U}while(C!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$i(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,P=g;break e}P=s.return}}var p=t.current;for(P=p;P!==null;){o=P;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,P=y;else e:for(o=p;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Rl(9,l)}}catch(R){he(l,l.return,R)}if(l===o){P=null;break e}var I=l.sibling;if(I!==null){I.return=l.return,P=I;break e}P=l.return}}if(Q=i,Fn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(wl,t)}catch{}r=!0}return r}finally{J=n,ct.transition=e}}return!1}function Qh(t,e,n){e=ei(n,e),e=Xm(t,e,1),t=Cn(t,e,1),e=Ue(),t!==null&&(xs(t,1,e),Ye(t,e))}function he(t,e,n){if(t.tag===3)Qh(t,t,n);else for(;e!==null;){if(e.tag===3){Qh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){t=ei(n,t),t=Jm(e,t,1),e=Cn(e,t,1),t=Ue(),e!==null&&(xs(e,1,t),Ye(e,t));break}}e=e.return}}function n0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ue(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(Ne&n)===n&&(Se===4||Se===3&&(Ne&130023424)===Ne&&500>pe()-Uu?Jn(t,0):Fu|=n),Ye(t,e)}function yg(t,e){e===0&&(t.mode&1?(e=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):e=1);var n=Ue();t=qt(t,e),t!==null&&(xs(t,e,n),Ye(t,n))}function r0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yg(t,n)}function i0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),yg(t,n)}var vg;vg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qe.current)Ve=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ve=!1,Vw(t,e,n);Ve=!!(t.flags&131072)}else Ve=!1,ae&&e.flags&1048576&&Cm(e,Uo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_o(t,e),t=e.pendingProps;var i=Yr(e,Me.current);Wr(e,n),i=Au(null,e,r,t,i,n);var s=Ou();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(s=!0,Mo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xu(e),i.updater=Tl,e.stateNode=i,i._reactInternals=e,gc(e,r,t,n),e=vc(null,e,r,!0,s,n)):(e.tag=0,ae&&s&&vu(e),Fe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_o(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=o0(r),t=ft(r,t),i){case 0:e=yc(null,e,r,t,n);break e;case 1:e=jh(null,e,r,t,n);break e;case 11:e=Fh(null,e,r,t,n);break e;case 14:e=Uh(null,e,r,ft(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),yc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),jh(t,e,r,i,n);case 3:e:{if(ng(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Pm(t,e),Wo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ei(Error(k(423)),e),e=zh(t,e,r,n,i);break e}else if(r!==i){i=ei(Error(k(424)),e),e=zh(t,e,r,n,i);break e}else for(tt=Sn(e.stateNode.containerInfo.firstChild),nt=e,ae=!0,mt=null,n=Tm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),r===i){e=Qt(t,e,n);break e}Fe(t,e,r,n)}e=e.child}return e;case 5:return Nm(e),t===null&&fc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ac(r,i)?o=null:s!==null&&ac(r,s)&&(e.flags|=32),tg(t,e),Fe(t,e,o,n),e.child;case 6:return t===null&&fc(e),null;case 13:return rg(t,e,n);case 4:return Tu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Jr(e,null,r,n):Fe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Fh(t,e,r,i,n);case 7:return Fe(t,e,e.pendingProps,n),e.child;case 8:return Fe(t,e,e.pendingProps.children,n),e.child;case 12:return Fe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(jo,r._currentValue),r._currentValue=o,s!==null)if(It(s.value,o)){if(s.children===i.children&&!qe.current){e=Qt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ht(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wr(e,n),i=ut(i),r=r(i),e.flags|=1,Fe(t,e,r,n),e.child;case 14:return r=e.type,i=ft(r,e.pendingProps),i=ft(r.type,i),Uh(t,e,r,i,n);case 15:return Zm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),_o(t,e),e.tag=1,Qe(r)?(t=!0,Mo(e)):t=!1,Wr(e,n),Ym(e,r,i),gc(e,r,i,n),vc(null,e,r,!0,t,n);case 19:return ig(t,e,n);case 22:return eg(t,e,n)}throw Error(k(156,e.tag))};function wg(t,e){return Kp(t,e)}function s0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(t,e,n,r){return new s0(t,e,n,r)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function o0(t){if(typeof t=="function")return Bu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lu)return 11;if(t===au)return 14}return 2}function xn(t,e){var n=t.alternate;return n===null?(n=at(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Bu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ir:return Zn(n.children,i,s,e);case ou:o=8,i|=8;break;case za:return t=at(12,n,e,i|2),t.elementType=za,t.lanes=s,t;case Wa:return t=at(13,n,e,i),t.elementType=Wa,t.lanes=s,t;case Ba:return t=at(19,n,e,i),t.elementType=Ba,t.lanes=s,t;case Np:return Nl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rp:o=10;break e;case Pp:o=9;break e;case lu:o=11;break e;case au:o=14;break e;case an:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=at(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zn(t,e,n,r){return t=at(7,t,r,e),t.lanes=n,t}function Nl(t,e,n,r){return t=at(22,t,r,e),t.elementType=Np,t.lanes=n,t.stateNode={isHidden:!1},t}function Ea(t,e,n){return t=at(6,t,null,e),t.lanes=n,t}function Sa(t,e,n){return e=at(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function l0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $u(t,e,n,r,i,s,o,l,a){return t=new l0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=at(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(s),t}function a0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Eg(t){if(!t)return On;t=t._reactInternals;e:{if(fr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Qe(n))return Em(t,n,e)}return e}function Sg(t,e,n,r,i,s,o,l,a){return t=$u(n,r,!0,t,i,s,o,l,a),t.context=Eg(null),n=t.current,r=Ue(),i=kn(n),s=Ht(r,i),s.callback=e??null,Cn(n,s,i),t.current.lanes=i,xs(t,i,r),Ye(t,r),t}function Al(t,e,n,r){var i=e.current,s=Ue(),o=kn(i);return n=Eg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ht(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cn(i,e,o),t!==null&&(St(t,i,o,s),po(t,i,o)),o}function Qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hu(t,e){Yh(t,e),(t=t.alternate)&&Yh(t,e)}function c0(){return null}var Cg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vu(t){this._internalRoot=t}Ol.prototype.render=Vu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Al(t,e,null,null)};Ol.prototype.unmount=Vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ir(function(){Al(null,t,null,null)}),e[Kt]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=em();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&nm(t)}};function Gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xh(){}function u0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Qo(o);s.call(c)}}var o=Sg(e,r,t,0,null,!1,!1,"",Xh);return t._reactRootContainer=o,t[Kt]=o.current,os(t.nodeType===8?t.parentNode:t),ir(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Qo(a);l.call(c)}}var a=$u(t,0,!1,null,null,!1,!1,"",Xh);return t._reactRootContainer=a,t[Kt]=a.current,os(t.nodeType===8?t.parentNode:t),ir(function(){Al(e,a,n,r)}),a}function Dl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Qo(o);l.call(a)}}Al(e,o,t,i)}else o=u0(n,e,t,i,r);return Qo(o)}Jp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bi(e.pendingLanes);n!==0&&(du(e,n|1),Ye(e,pe()),!(Q&6)&&(ti=pe()+500,Fn()))}break;case 13:ir(function(){var r=qt(t,1);if(r!==null){var i=Ue();St(r,t,1,i)}}),Hu(t,1)}};hu=function(t){if(t.tag===13){var e=qt(t,134217728);if(e!==null){var n=Ue();St(e,t,134217728,n)}Hu(t,134217728)}};Zp=function(t){if(t.tag===13){var e=kn(t),n=qt(t,e);if(n!==null){var r=Ue();St(n,t,e,r)}Hu(t,e)}};em=function(){return J};tm=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Ja=function(t,e,n){switch(e){case"input":if(Va(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Il(r);if(!i)throw Error(k(90));Op(r),Va(r,i)}}}break;case"textarea":Dp(t,n);break;case"select":e=n.value,e!=null&&Fr(t,!!n.multiple,e,!1)}};Wp=ju;Bp=ir;var d0={usingClientEntryPoint:!1,Events:[Rs,Rr,Il,jp,zp,ju]},xi={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h0={bundleType:xi.bundleType,version:xi.version,rendererPackageName:xi.rendererPackageName,rendererConfig:xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vp(t),t===null?null:t.stateNode},findFiberByHostInstance:xi.findFiberByHostInstance||c0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{wl=io.inject(h0),Ot=io}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d0;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(e))throw Error(k(200));return a0(t,e,null,n)};it.createRoot=function(t,e){if(!Gu(t))throw Error(k(299));var n=!1,r="",i=Cg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$u(t,1,!1,null,null,n,!1,r,i),t[Kt]=e.current,os(t.nodeType===8?t.parentNode:t),new Vu(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Vp(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return ir(t)};it.hydrate=function(t,e,n){if(!bl(e))throw Error(k(200));return Dl(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!Gu(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Cg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Sg(e,null,t,1,n??null,i,!1,s,o),t[Kt]=e.current,os(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ol(e)};it.render=function(t,e,n){if(!bl(e))throw Error(k(200));return Dl(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!bl(t))throw Error(k(40));return t._reactRootContainer?(ir(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[Kt]=null})}),!0):!1};it.unstable_batchedUpdates=ju;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Dl(t,e,n,!1,r)};it.version="18.3.1-next-f1338f8080-20240426";function Ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ig)}catch(t){console.error(t)}}Ig(),Ip.exports=it;var f0=Ip.exports,Jh=f0;Ua.createRoot=Jh.createRoot,Ua.hydrateRoot=Jh.hydrateRoot;const p0=()=>{};var Zh={};/**
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
 */const kg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw di(e)},di=function(t){return new Error("Firebase Database ("+kg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const xg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},m0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ku={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,d=s>>2,u=(s&3)<<4|l>>4;let h=(l&15)<<2|c>>6,v=c&63;a||(v=64,o||(h=64)),r.push(n[d],n[u],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):m0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||u==null)throw new g0;const h=s<<2|l>>4;if(r.push(h),c!==64){const v=l<<4&240|c>>2;if(r.push(v),u!==64){const E=c<<6&192|u;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class g0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tg=function(t){const e=xg(t);return Ku.encodeByteArray(e,!0)},Yo=function(t){return Tg(t).replace(/\./g,"")},Xo=function(t){try{return Ku.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _0(t){return Rg(void 0,t)}function Rg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!y0(n)||(t[n]=Rg(t[n],e[n]));return t}function y0(t){return t!=="__proto__"}/**
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
 */function v0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const w0=()=>v0().__FIREBASE_DEFAULTS__,E0=()=>{if(typeof process>"u"||typeof Zh>"u")return;const t=Zh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},S0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xo(t[1]);return e&&JSON.parse(e)},qu=()=>{try{return p0()||w0()||E0()||S0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pg=t=>{var e,n;return(n=(e=qu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},C0=t=>{const e=Pg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ng=()=>{var t;return(t=qu())==null?void 0:t.config},Ag=t=>{var e;return(e=qu())==null?void 0:e[`_${t}`]};/**
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
 */class Ns{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function I0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Yo(JSON.stringify(n)),Yo(JSON.stringify(o)),""].join(".")}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function k0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function x0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function T0(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function R0(){return kg.NODE_ADMIN===!0}function P0(){try{return typeof indexedDB=="object"}catch{return!1}}function N0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const A0="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=A0,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?O0(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Un(i,l,r)}}function O0(t,e){try{let n=0,r="";for(;n<t.length;){const i=t.indexOf("{$",n);if(i===-1){r+=t.substring(n);break}const s=t.indexOf("}",i+2);if(s===-1){r+=t.substring(n);break}const o=t.substring(i+2,s),l=e[o];r+=t.substring(n,i)+(l!=null?String(l):`<${o}?>`),n=s+1}return r}catch{return t}}/**
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
 */function ms(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
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
 */const bg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ms(Xo(s[0])||""),n=ms(Xo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},b0=function(t){const e=bg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},D0=function(t){const e=bg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ni(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ac(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function sr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ef(s)&&ef(o)){if(!sr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ef(t){return t!==null&&typeof t=="object"}/**
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
 */function hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class L0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=l^s&(o^l),d=1518500249):(c=s^o^l,d=1859775393):u<60?(c=s&o|l&(s|o),d=2400959708):(c=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+c+a+d+r[u]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function M0(t,e){const n=new F0(t,e);return n.subscribe.bind(n)}class F0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");U0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ca),i.error===void 0&&(i.error=Ca),i.complete===void 0&&(i.complete=Ca);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ca(){}function Yu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const j0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ll=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Os(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dg(t){return(await fetch(t,{credentials:"include"})).ok}class or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vn="[DEFAULT]";/**
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
 */class z0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ns;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(B0(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:W0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function W0(t){return t===Vn?void 0:t}function B0(t){return t.instantiationMode==="EAGER"}/**
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
 */class $0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new z0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const H0={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},V0=ee.INFO,G0={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},K0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=G0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xu{constructor(e){this.name=e,this._logLevel=V0,this._logHandler=K0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?H0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const q0=(t,e)=>e.some(n=>t instanceof n);let tf,nf;function Q0(){return tf||(tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y0(){return nf||(nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lg=new WeakMap,Oc=new WeakMap,Mg=new WeakMap,Ia=new WeakMap,Ju=new WeakMap;function X0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lg.set(n,t)}).catch(()=>{}),Ju.set(e,t),e}function J0(t){if(Oc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Oc.set(t,e)}let bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Z0(t){bc=t(bc)}function eE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ka(this),e,...n);return Mg.set(r,e.sort?e.sort():[e]),Tn(r)}:Y0().includes(t)?function(...e){return t.apply(ka(this),e),Tn(Lg.get(this))}:function(...e){return Tn(t.apply(ka(this),e))}}function tE(t){return typeof t=="function"?eE(t):(t instanceof IDBTransaction&&J0(t),q0(t,Q0())?new Proxy(t,bc):t)}function Tn(t){if(t instanceof IDBRequest)return X0(t);if(Ia.has(t))return Ia.get(t);const e=tE(t);return e!==t&&(Ia.set(t,e),Ju.set(e,t)),e}const ka=t=>Ju.get(t);function nE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Tn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Tn(o.result),a.oldVersion,a.newVersion,Tn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const rE=["get","getKey","getAll","getAllKeys","count"],iE=["put","add","delete","clear"],xa=new Map;function rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xa.get(e))return xa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=iE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return xa.set(e,s),s}Z0(t=>({...t,get:(e,n,r)=>rf(e,n)||t.get(e,n,r),has:(e,n)=>!!rf(e,n)||t.has(e,n)}));/**
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
 */class sE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dc="@firebase/app",sf="0.16.0";/**
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
 */const Yt=new Xu("@firebase/app"),lE="@firebase/app-compat",aE="@firebase/analytics-compat",cE="@firebase/analytics",uE="@firebase/app-check-compat",dE="@firebase/app-check",hE="@firebase/auth",fE="@firebase/auth-compat",pE="@firebase/database",mE="@firebase/data-connect",gE="@firebase/database-compat",_E="@firebase/functions",yE="@firebase/functions-compat",vE="@firebase/installations",wE="@firebase/installations-compat",EE="@firebase/messaging",SE="@firebase/messaging-compat",CE="@firebase/performance",IE="@firebase/performance-compat",kE="@firebase/remote-config",xE="@firebase/remote-config-compat",TE="@firebase/storage",RE="@firebase/storage-compat",PE="@firebase/firestore",NE="@firebase/ai",AE="@firebase/firestore-compat",OE="firebase",bE="12.17.0";/**
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
 */const Lc="[DEFAULT]",DE={[Dc]:"fire-core",[lE]:"fire-core-compat",[cE]:"fire-analytics",[aE]:"fire-analytics-compat",[dE]:"fire-app-check",[uE]:"fire-app-check-compat",[hE]:"fire-auth",[fE]:"fire-auth-compat",[pE]:"fire-rtdb",[mE]:"fire-data-connect",[gE]:"fire-rtdb-compat",[_E]:"fire-fn",[yE]:"fire-fn-compat",[vE]:"fire-iid",[wE]:"fire-iid-compat",[EE]:"fire-fcm",[SE]:"fire-fcm-compat",[CE]:"fire-perf",[IE]:"fire-perf-compat",[kE]:"fire-rc",[xE]:"fire-rc-compat",[TE]:"fire-gcs",[RE]:"fire-gcs-compat",[PE]:"fire-fst",[AE]:"fire-fst-compat",[NE]:"fire-vertex","fire-js":"fire-js",[OE]:"fire-js-all"};/**
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
 */const Zo=new Map,LE=new Map,Mc=new Map;function of(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ri(t){const e=t.name;if(Mc.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;Mc.set(e,t);for(const n of Zo.values())of(n,t);for(const n of LE.values())of(n,t);return!0}function Zu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ME={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new As("app","Firebase",ME);/**
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
 */class FE{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=bE;function Fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Lc,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=Ng()),!n)throw zt.create("no-options");const s=Zo.get(i);if(s)if(sr(n,s.options)){if(sr(r,s.config))return s;throw zt.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw zt.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new $0(i);for(const a of Mc.values())o.addComponent(a);const l=new FE(n,r,o);return Zo.set(i,l),l}function Ug(t=Lc){const e=Zo.get(t);if(!e&&t===Lc&&Ng())return Fg();if(!e)throw zt.create("no-app",{appName:t});return e}function Rn(t,e,n){let r=DE[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(o.join(" "));return}ri(new or(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const UE="firebase-heartbeat-database",jE=1,gs="firebase-heartbeat-store";let Ta=null;function jg(){return Ta||(Ta=nE(UE,jE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gs)}catch(n){console.warn(n)}}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),Ta}async function zE(t){try{const n=(await jg()).transaction(gs),r=await n.objectStore(gs).get(zg(t));return await n.done,r}catch(e){if(e instanceof Un)Yt.warn(e.message);else{const n=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(n.message)}}}async function lf(t,e){try{const r=(await jg()).transaction(gs,"readwrite");await r.objectStore(gs).put(e,zg(t)),await r.done}catch(n){if(n instanceof Un)Yt.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(r.message)}}}function zg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const WE=1024,BE=30;class $E{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=af();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>BE){const o=GE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Yt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=af(),{heartbeatsToSend:r,unsentEntries:i}=HE(this._heartbeatsCache.heartbeats),s=Yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Yt.warn(n),""}}}function af(){return new Date().toISOString().substring(0,10)}function HE(t,e=WE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P0()?N0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cf(t){return Yo(JSON.stringify({version:2,heartbeats:t})).length}function GE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function KE(t){ri(new or("platform-logger",e=>new sE(e),"PRIVATE")),ri(new or("heartbeat",e=>new $E(e),"PRIVATE")),Rn(Dc,sf,t),Rn(Dc,sf,"esm2020"),Rn("fire-js","")}/**
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
 */KE("");var qE="firebase",QE="12.17.1";/**
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
 */Rn(qE,QE,"app");function Wg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YE=Wg,Bg=new As("auth","Firebase",Wg());/**
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
 */const el=new Xu("@firebase/auth");function $g(t,...e){el.logLevel<=ee.WARN&&el.warn(`Auth (${fi}): ${t}`,...e)}function Eo(t,...e){el.logLevel<=ee.ERROR&&el.error(`Auth (${fi}): ${t}`,...e)}/**
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
 */function kt(t,...e){throw ed(t,...e)}function Dt(t,...e){return ed(t,...e)}function Hg(t,e,n){const r={...YE(),[e]:n};return new As("auth","Firebase",r).create(e,{appName:t.name})}function Pn(t){return Hg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ed(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bg.create(t,...e)}function M(t,e,...n){if(!t)throw ed(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function Xt(t,e){t||Wt(e)}/**
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
 */function Fc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function XE(){return uf()==="http:"||uf()==="https:"}function uf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function JE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XE()||x0()||"connection"in navigator)?navigator.onLine:!0}function ZE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=Qu()||Og()}get(){return JE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function td(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Vg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nS=new bs(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function jn(t,e,n,r,i={}){return Gg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=hi({...o,key:t.config.apiKey}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:a,...s};return k0()||(c.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Os(t.emulatorConfig.host)&&(c.credentials="include"),Vg.fetch()(await Kg(t,t.config.apiHost,n,l),c)})}async function Gg(t,e,n){t._canInitEmulator=!1;const r={...eS,...e};try{const i=new iS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw so(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw so(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw so(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Hg(t,d,c);kt(t,d)}}catch(i){if(i instanceof Un)throw i;kt(t,"network-request-failed",{message:String(i)})}}async function Ml(t,e,n,r,i={}){const s=await jn(t,e,n,r,i);return"mfaPendingCredential"in s&&kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Kg(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?td(t.config,i):`${t.config.apiScheme}://${i}`;return tS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function rS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),nS.get())})}}function so(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(t,e,r);return i.customData._tokenResponse=n,i}function df(t){return t!==void 0&&t.enterprise!==void 0}class sS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function oS(t,e){return jn(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
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
 */async function lS(t,e){return jn(t,"POST","/v1/accounts:delete",e)}async function tl(t,e){return jn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aS(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=nd(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gi(Ra(i.auth_time)),issuedAtTime:Gi(Ra(i.iat)),expirationTime:Gi(Ra(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ra(t){return Number(t)*1e3}function nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xo(n);return i?JSON.parse(i):(Eo("Failed to decode base64 JWT payload"),null)}catch(i){return Eo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hf(t){const e=nd(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&cS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class uS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Uc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nl(t){var u;const e=t.auth,n=await t.getIdToken(),r=await _s(t,tl(e,{idToken:n}));M(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(u=i.providerUserInfo)!=null&&u.length?qg(i.providerUserInfo):[],o=hS(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?a:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Uc(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function dS(t){const e=Ze(t);await nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function fS(t,e){const n=await Gg(t,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Kg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&Os(t.emulatorConfig.host)&&(a.credentials="include"),Vg.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pS(t,e){return jn(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
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
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=hf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $r;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function ln(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new uS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Uc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _s(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aS(this,e)}reload(){return dS(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gt(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await _s(this,lS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:v,providerData:E,stsTokenManager:C}=n;M(u&&C,e,"internal-error");const U=$r.fromJSON(this.name,C);M(typeof u=="string",e,"internal-error"),ln(r,e.name),ln(i,e.name),M(typeof h=="boolean",e,"internal-error"),M(typeof v=="boolean",e,"internal-error"),ln(s,e.name),ln(o,e.name),ln(l,e.name),ln(a,e.name),ln(c,e.name),ln(d,e.name);const g=new yt({uid:u,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:U,createdAt:c,lastLoginAt:d});return E&&Array.isArray(E)&&(g.providerData=E.map(p=>({...p}))),a&&(g._redirectEventId=a),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new $r;i.updateFromServerResponse(n);const s=new yt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?qg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new $r;l.updateFromIdToken(r);const a=new yt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
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
 */const ff=new Map;function Bt(t){Xt(t instanceof Function,"Expected a class definition");let e=ff.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ff.set(t,e),e)}/**
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
 */class Qg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qg.type="NONE";const pf=Qg;/**
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
 */function So(t,e,n){return`firebase:${t}:${e}:${n}`}class Hr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=So(this.userKey,i.apiKey,s),this.fullPersistenceKey=So("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await tl(this.auth,{idToken:e}).catch(()=>{});return n?yt._fromGetAccountInfoResponse(this.auth,n,e):null}return yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hr(Bt(pf),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Bt(pf);const o=So(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let u;if(typeof d=="string"){const h=await tl(e,{idToken:d}).catch(()=>{});if(!h)break;u=await yt._fromGetAccountInfoResponse(e,h,d)}else u=yt._fromJSON(e,d);c!==s&&(l=u),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Hr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Hr(s,e,r))}}/**
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
 */function mf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(t_(e))return"Blackberry";if(n_(e))return"Webos";if(Xg(e))return"Safari";if((e.includes("chrome/")||Jg(e))&&!e.includes("edge/"))return"Chrome";if(e_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yg(t=je()){return/firefox\//i.test(t)}function Xg(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jg(t=je()){return/crios\//i.test(t)}function Zg(t=je()){return/iemobile/i.test(t)}function e_(t=je()){return/android/i.test(t)}function t_(t=je()){return/blackberry/i.test(t)}function n_(t=je()){return/webos/i.test(t)}function rd(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mS(t=je()){var e;return rd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function gS(){return T0()&&document.documentMode===10}function r_(t=je()){return rd(t)||e_(t)||n_(t)||t_(t)||/windows phone/i.test(t)||Zg(t)}/**
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
 */function i_(t,e=[]){let n;switch(t){case"Browser":n=mf(je());break;case"Worker":n=`${mf(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${r}`}/**
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
 */class _S{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function yS(t,e={}){return jn(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
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
 */const vS=6;class wS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??vS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ES{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new _S(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tl(this,{idToken:e}),r=await yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gt(this.app))return Promise.reject(Pn(this));const n=e?Ze(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gt(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gt(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yS(this),n=new wS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&$g(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function pi(t){return Ze(t)}class gf{constructor(e){this.auth=e,this.observer=null,this.addObserver=M0(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SS(t){Fl=t}function s_(t){return Fl.loadJS(t)}function CS(){return Fl.recaptchaEnterpriseScript}function IS(){return Fl.gapiScript}function kS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class xS{constructor(){this.enterprise=new TS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class TS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
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
 */const RS="recaptcha-enterprise",o_="NO_RECAPTCHA",_f="onFirebaseAuthREInstanceReady";class hn{constructor(e){this.type=RS,this.auth=pi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{oS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new sS(a);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;df(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(o_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(async l=>{if(!n&&df(window.grecaptcha)&&hn.scriptInjectionDeferred)await hn.scriptInjectionDeferred.promise,i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=CS();a.length!==0&&(a+=l+`&onload=${_f}`),hn.scriptInjectionDeferred=new Ns,window[_f]=()=>{var c;(c=hn.scriptInjectionDeferred)==null||c.resolve()},s_(a).then(()=>{var c;return(c=hn.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}hn.scriptInjectionDeferred=null;async function yf(t,e,n,r=!1,i=!1){const s=new hn(t);let o;if(i)o=o_;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function vf(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await yf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await yf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function PS(t,e){const n=Zu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(sr(s,e??{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function NS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AS(t,e,n){const r=pi(t);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=l_(e),{host:o,port:l}=OS(e),a=l===null?"":`:${l}`,c={url:`${s}//${o}${a}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(sr(c,r.config.emulator)&&sr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Os(o)?Dg(`${s}//${o}${a}`):bS()}function l_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OS(t){const e=l_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:wf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:wf(o)}}}function wf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class id{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function DS(t,e){return jn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function LS(t,e){return Ml(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}/**
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
 */async function MS(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function FS(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
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
 */class ys extends id{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ys(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ys(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vf(e,n,"signInWithPassword",LS);case"emailLink":return MS(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vf(e,r,"signUpPassword",DS);case"emailLink":return FS(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vr(t,e){return Ml(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
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
 */const US="http://localhost";class lr extends id{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vr(e,n)}buildRequest(){const e={requestUri:US,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
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
 */function jS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zS(t){const e=Li(Mi(t)).link,n=e?Li(Mi(e)).deep_link_id:null,r=Li(Mi(t)).deep_link_id;return(r?Li(Mi(r)).link:null)||r||n||e||t}class sd{constructor(e){const n=Li(Mi(e)),r=n.apiKey??null,i=n.oobCode??null,s=jS(n.mode??null);M(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=zS(e);try{return new sd(n)}catch{return null}}}/**
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
 */class mi{constructor(){this.providerId=mi.PROVIDER_ID}static credential(e,n){return ys._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sd.parseLink(n);return M(r,"argument-error"),ys._fromEmailAndCode(e,r.code,r.tenantId)}}mi.PROVIDER_ID="password";mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class a_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ds extends a_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fn extends Ds{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends Ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class mn extends Ds{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class gn extends Ds{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await yt._fromIdTokenResponse(e,r,i),o=Ef(r);return new ii({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ef(r);return new ii({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class rl extends Un{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rl(e,n,r,i)}}function c_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rl._fromErrorAndOperation(t,s,e,r):s})}async function WS(t,e,n=!1){const r=await _s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",r)}/**
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
 */async function BS(t,e,n=!1){const{auth:r}=t;if(gt(r.app))return Promise.reject(Pn(r));const i="reauthenticate";try{const s=await _s(t,c_(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=nd(s.idToken);M(o,r,"internal-error");const{sub:l}=o;return M(t.uid===l,r,"user-mismatch"),ii._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}/**
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
 */async function u_(t,e,n=!1){if(gt(t.app))return Promise.reject(Pn(t));const r="signIn",i=await c_(t,r,e),s=await ii._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $S(t,e){return u_(pi(t),e)}/**
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
 */async function HS(t){const e=pi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function VS(t,e,n){return gt(t.app)?Promise.reject(Pn(t)):$S(Ze(t),mi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&HS(t),r})}function GS(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function KS(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function qS(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function QS(t){return Ze(t).signOut()}const il="__sak";/**
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
 */class d_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(il,"1"),this.storage.removeItem(il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const YS=1e3,XS=10;class h_ extends d_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=r_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}h_.type="LOCAL";const JS=h_;/**
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
 */class f_ extends d_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}f_.type="SESSION";const p_=f_;/**
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
 */function ZS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await ZS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
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
 */function od(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=od("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Lt(){return window}function tC(t){Lt().location.href=t}/**
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
 */function m_(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function nC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function iC(){return m_()?self:null}/**
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
 */const g_="firebaseLocalStorageDb",sC=1,sl="firebaseLocalStorage",__="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(t,e){return t.transaction([sl],e?"readwrite":"readonly").objectStore(sl)}function oC(){const t=indexedDB.deleteDatabase(g_);return new Ls(t).toPromise()}function y_(){const t=indexedDB.open(g_,sC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sl,{keyPath:__})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sl)?e(r):(r.close(),await oC(),e(await y_()))})})}async function Sf(t,e,n){const r=jl(t,!0).put({[__]:e,value:n});return new Ls(r).toPromise()}async function lC(t,e){const n=jl(t,!1).get(e),r=await new Ls(n).toPromise();return r===void 0?null:r.value}function Cf(t,e){const n=jl(t,!0).delete(e);return new Ls(n).toPromise()}const aC=800,cC=3;class v_{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=y_(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(this.isHiding||n++>cC)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return m_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(iC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await nC(),!this.activeServiceWorker)return;this.sender=new eC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Sf(e,il,"1"),await Cf(e,il)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isHiding)return[];try{const e=await this._withRetries(i=>{const s=jl(i,!1).getAll();return new Ls(s).toPromise()});if(this.isHiding)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(e){return this.isHiding||$g(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}v_.type="LOCAL";const uC=v_;new bs(3e4,6e4);/**
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
 */function dC(t,e){return e?Bt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ld extends id{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hC(t){return u_(t.auth,new ld(t),t.bypassAuthState)}function fC(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),BS(n,new ld(t),t.bypassAuthState)}async function pC(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),WS(n,new ld(t),t.bypassAuthState)}/**
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
 */class w_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hC;case"linkViaPopup":case"linkViaRedirect":return pC;case"reauthViaPopup":case"reauthViaRedirect":return fC;default:kt(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mC=new bs(2e3,1e4);class Lr extends w_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=od();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mC.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const gC="pendingRedirect",Co=new Map;class _C extends w_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await yC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yC(t,e){const n=EC(e),r=wC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vC(t,e){Co.set(t._key(),e)}function wC(t){return Bt(t._redirectPersistence)}function EC(t){return So(gC,t.config.apiKey,t.name)}async function SC(t,e,n=!1){if(gt(t.app))return Promise.reject(Pn(t));const r=pi(t),i=dC(r,e),o=await new _C(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const CC=10*60*1e3;class IC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!E_(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CC&&this.cachedEventUids.clear(),this.cachedEventUids.has(If(e))}saveEventToCache(e){this.cachedEventUids.add(If(e)),this.lastProcessedEventTime=Date.now()}}function If(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function E_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return E_(t);default:return!1}}/**
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
 */async function xC(t,e={}){return jn(t,"GET","/v1/projects",e)}/**
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
 */const TC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RC=/^https?/;async function PC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xC(t);for(const n of e)try{if(NC(n))return}catch{}kt(t,"unauthorized-domain")}function NC(t){const e=Fc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RC.test(n))return!1;if(TC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const AC=new bs(3e4,6e4);function kf(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OC(t){return new Promise((e,n)=>{var i,s,o;function r(){kf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kf(),n(Dt(t,"network-request-failed"))},timeout:AC.get()})}if((s=(i=Lt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Lt().gapi)!=null&&o.load)r();else{const l=kS("iframefcb");return Lt()[l]=()=>{gapi.load?r():n(Dt(t,"network-request-failed"))},s_(`${IS()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Io=null,e})}let Io=null;function bC(t){return Io=Io||OC(t),Io}/**
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
 */const DC=new bs(5e3,15e3),LC="__/auth/iframe",MC="emulator/auth/iframe",FC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jC(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?td(e,MC):`https://${t.config.authDomain}/${LC}`,r={apiKey:e.apiKey,appName:t.name,v:fi},i=UC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${hi(r).slice(1)}`}async function zC(t){const e=await bC(t),n=Lt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:jC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),l=Lt().setTimeout(()=>{s(o)},DC.get());function a(){Lt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const WC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BC=500,$C=600,HC="_blank",VC="http://localhost";class xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GC(t,e,n,r=BC,i=$C){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...WC,width:r.toString(),height:i.toString(),top:s,left:o},c=je().toLowerCase();n&&(l=Jg(c)?HC:n),Yg(c)&&(e=e||VC,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[v,E])=>`${h}${v}=${E},`,"");if(mS(c)&&l!=="_self")return KC(e||"",l),new xf(null);const u=window.open(e||"",l,d);M(u,t,"popup-blocked");try{u.focus()}catch{}return new xf(u)}function KC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qC="__/auth/handler",QC="emulator/auth/handler",YC=encodeURIComponent("fac");async function Tf(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fi,eventId:i};if(e instanceof a_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ac(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Ds){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),c=a?`#${YC}=${encodeURIComponent(a)}`:"";return`${XC(t)}?${hi(l).slice(1)}${c}`}function XC({config:t}){return t.emulator?td(t,QC):`https://${t.authDomain}/${qC}`}/**
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
 */const Pa="webStorageSupport";class JC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=p_,this._completeRedirectFn=SC,this._overrideRedirectResult=vC}async _openPopup(e,n,r,i){var o;Xt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Tf(e,n,r,Fc(),i);return GC(e,s,od())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Tf(e,n,r,Fc(),i);return tC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zC(e),r=new IC(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pa,{type:Pa},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Pa];s!==void 0&&n(!!s),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return r_()||Xg()||rd()}}const ZC=JC;var Rf="@firebase/auth",Pf="1.13.4";/**
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
 */class eI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nI(t){ri(new or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i_(t)},c=new ES(r,i,s,a);return NS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ri(new or("auth-internal",e=>{const n=pi(e.getProvider("auth").getImmediate());return(r=>new eI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Rf,Pf,tI(t)),Rn(Rf,Pf,"esm2020")}/**
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
 */const rI=5*60,iI=Ag("authIdTokenMaxAge")||rI;let Nf=null;const sI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iI)return;const i=n==null?void 0:n.token;Nf!==i&&(Nf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oI(t=Ug()){const e=Zu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PS(t,{popupRedirectResolver:ZC,persistence:[uC,JS,p_]}),r=Ag("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=sI(s.toString());KS(n,o,()=>o(n.currentUser)),GS(n,l=>o(l))}}const i=Pg("auth");return i&&AS(n,`http://${i}`),n}function lI(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}SS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nI("Browser");var Af={};const Of="@firebase/database",bf="1.1.4";/**
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
 */let S_="";function aI(t){S_=t}/**
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
 */class cI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ms(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class uI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const C_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cI(e)}}catch{}return new uI},Yn=C_("localStorage"),dI=C_("sessionStorage");/**
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
 */const Gr=new Xu("@firebase/database"),hI=function(){let t=1;return function(){return t++}}(),I_=function(t){const e=j0(t),n=new L0;n.update(e);const r=n.digest();return Ku.encodeByteArray(r)},Ms=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ms.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let Ki=null,Df=!0;const fI=function(t,e){x(!0,"Can't turn on custom loggers persistently."),Gr.logLevel=ee.VERBOSE,Ki=Gr.log.bind(Gr)},Le=function(...t){if(Df===!0&&(Df=!1,Ki===null&&dI.get("logging_enabled")===!0&&fI()),Ki){const e=Ms.apply(null,t);Ki(e)}},Fs=function(t){return function(...e){Le(t,...e)}},jc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ms(...t);Gr.error(e)},Jt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ms(...t)}`;throw Gr.error(e),new Error(e)},Xe=function(...t){const e="FIREBASE WARNING: "+Ms(...t);Gr.warn(e)},pI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},k_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},si="[MIN_NAME]",ar="[MAX_NAME]",gi=function(t,e){if(t===e)return 0;if(t===si||e===ar)return-1;if(e===si||t===ar)return 1;{const n=Lf(t),r=Lf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},gI=function(t,e){return t===e?0:t<e?-1:1},Ti=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},ad=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=ad(t[e[r]]);return n+="}",n},x_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const T_=function(t){x(!k_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},_I=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const wI=new RegExp("^-?(0*)\\d{1,10}$"),EI=-2147483648,SI=2147483647,Lf=function(t){if(wI.test(t)){const e=Number(t);if(e>=EI&&e<=SI)return e}return null},_i=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},CI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class II{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,gt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Xe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class kI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xe(e)}}class ko{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ko.OWNER="owner";/**
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
 */const cd="5",R_="v",P_="s",N_="r",A_="f",O_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,b_="ls",D_="p",zc="ac",L_="websocket",M_="long_polling";/**
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
 */class F_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function U_(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===L_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===M_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xI(t)&&(n.ns=t.namespace);const i=[];return Je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class TI{constructor(){this.counters_={}}incrementCounter(e,n=1){tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _0(this.counters_)}}/**
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
 */const Na={},Aa={};function ud(t){const e=t.toString();return Na[e]||(Na[e]=new TI),Na[e]}function RI(t,e){const n=t.toString();return Aa[n]||(Aa[n]=e()),Aa[n]}/**
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
 */class PI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&_i(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Mf="start",NI="close",AI="pLPCommand",OI="pRTLPCB",j_="id",z_="pw",W_="ser",bI="cb",DI="seg",LI="ts",MI="d",FI="dframe",B_=1870,$_=30,UI=B_-$_,jI=25e3,zI=3e4;class Mr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fs(e),this.stats_=ud(n),this.urlFn=a=>(this.appCheckToken&&(a[zc]=this.appCheckToken),U_(n,M_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new PI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zI)),mI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dd((...s)=>{const[o,l,a,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mf)this.id=l,this.password=a;else if(o===NI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Mf]="t",r[W_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[bI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[R_]=cd,this.transportSessionId&&(r[P_]=this.transportSessionId),this.lastSessionId&&(r[b_]=this.lastSessionId),this.applicationId&&(r[D_]=this.applicationId),this.appCheckToken&&(r[zc]=this.appCheckToken),typeof location<"u"&&location.hostname&&O_.test(location.hostname)&&(r[N_]=A_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mr.forceAllow_=!0}static forceDisallow(){Mr.forceDisallow_=!0}static isAvailable(){return Mr.forceAllow_?!0:!Mr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_I()&&!yI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Tg(n),i=x_(r,UI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[FI]="t",r[j_]=e,r[z_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class dd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hI(),window[AI+this.uniqueCallbackIdentifier]=e,window[OI+this.uniqueCallbackIdentifier]=n,this.myIFrame=dd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[j_]=this.myID,e[z_]=this.myPW,e[W_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$_+r.length<=B_;){const o=this.pendingSegs.shift();r=r+"&"+DI+i+"="+o.seg+"&"+LI+i+"="+o.ts+"&"+MI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(jI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const WI=16384,BI=45e3;let ol=null;typeof MozWebSocket<"u"?ol=MozWebSocket:typeof WebSocket<"u"&&(ol=WebSocket);class _t{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fs(this.connId),this.stats_=ud(n),this.connURL=_t.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[R_]=cd,typeof location<"u"&&location.hostname&&O_.test(location.hostname)&&(o[N_]=A_),n&&(o[P_]=n),r&&(o[b_]=r),i&&(o[zc]=i),s&&(o[D_]=s),U_(e,L_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yn.set("previous_websocket_failure",!0);try{let r;R0(),this.mySock=new ol(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ol!==null&&!_t.forceDisallow_}static previouslyFailed(){return Yn.isInMemoryStorage||Yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ms(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=x_(n,WI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
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
 */class vs{static get ALL_TRANSPORTS(){return[Mr,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const i=this.transports_=[];for(const s of vs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);vs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}vs.globalTransportInitialized_=!1;/**
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
 */const $I=6e4,HI=5e3,VI=10*1024,GI=100*1024,Oa="t",Ff="d",KI="s",Uf="r",qI="e",jf="o",zf="a",Wf="n",Bf="p",QI="h";class YI{constructor(e,n,r,i,s,o,l,a,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fs("c:"+this.id+":"),this.transportManager_=new vs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>VI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Oa in e){const n=e[Oa];n===zf?this.upgradeIfSecondaryHealthy_():n===Uf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===jf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ti("t",e),r=Ti("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ti("t",e),r=Ti("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ti(Oa,e);if(Ff in e){const r=e[Ff];if(n===QI){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Wf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===KI?this.onConnectionShutdown_(r):n===Uf?this.onReset_(r):n===qI?jc("Server Error: "+r):n===jf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cd!==r&&Xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),qi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($I))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class H_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class V_{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ll extends V_{static getInstance(){return new ll}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $f=32,Hf=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new te("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function bn(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function G_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function XI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function K_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function q_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function Ee(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new te(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Ge(t,e){const n=$(t),r=$(e);if(n===null)return e;if(n===r)return Ge(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hd(t,e){if(bn(t)!==bn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function vt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(bn(t)>bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class JI{constructor(e,n){this.errorPrefix_=n,this.parts_=K_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ll(this.parts_[r]);Q_(this)}}function ZI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ll(e),Q_(t)}function ek(t){const e=t.parts_.pop();t.byteLength_-=Ll(e),t.parts_.length>0&&(t.byteLength_-=1)}function Q_(t){if(t.byteLength_>Hf)throw new Error(t.errorPrefix_+"has a key path longer than "+Hf+" bytes ("+t.byteLength_+").");if(t.parts_.length>$f)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$f+") or object contains a cycle "+Gn(t))}function Gn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class fd extends V_{static getInstance(){return new fd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ri=1e3,tk=60*5*1e3,Vf=30*1e3,nk=1.3,rk=3e4,ik="server_kill",Gf=3;class Vt extends H_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Vt.nextPersistentConnectionId_++,this.log_=Fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ri,this.maxReconnectDelay_=tk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(xe(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ns,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;Vt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tn(e,"w")){const r=ni(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||D0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=b0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):jc("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rk&&(this.reconnectDelay_=Ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(u){x(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,l=new YI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Xe(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(ik)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Xe(u),a())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ac(this.interruptReasons_)&&(this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ad(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new te(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gf&&(this.reconnectDelay_=Vf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+S_.replace(/\./g,"-")]=1,Qu()?e["framework.cordova"]=1:Og()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ll.getInstance().currentlyOnline();return Ac(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
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
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
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
 */class zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(si,e),i=new H(si,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
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
 */let oo;class Y_ extends zl{static get __EMPTY_NODE(){return oo}static set __EMPTY_NODE(e){oo=e}compare(e,n){return gi(e.name,n.name)}isDefinedOn(e){throw di("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(ar,oo)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,oo)}toString(){return".key"}}const Kr=new Y_;/**
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
 */class lo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ke.RED,this.left=i??Ke.EMPTY_NODE,this.right=s??Ke.EMPTY_NODE}copy(e,n,r,i,s){return new ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class sk{copy(e,n,r,i,s){return this}insert(e,n,r){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new lo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new lo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new lo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new lo(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new sk;/**
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
 */function ok(t,e){return gi(t.name,e.name)}function pd(t,e){return gi(t,e)}/**
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
 */let Wc;function lk(t){Wc=t}const X_=function(t){return typeof t=="number"?"number:"+T_(t):"string:"+t},J_=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tn(e,".sv"),"Priority must be a string or number.")}else x(t===Wc||t.isEmpty(),"priority of unexpected type.");x(t===Wc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Kf;class Ce{static set __childrenNodeConstructor(e){Kf=e}static get __childrenNodeConstructor(){return Kf}constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),J_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:$(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=$(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+X_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=T_(this.value_):e+=this.value_,this.lazyHash_=I_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(n),s=Ce.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Z_,ey;function ak(t){Z_=t}function ck(t){ey=t}class uk extends zl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?gi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(ar,new Ce("[PRIORITY-POST]",ey))}makePost(e,n){const r=Z_(e);return new H(n,new Ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const fe=new uk;/**
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
 */const dk=Math.log(2);class hk{constructor(e){const n=s=>parseInt(Math.log(s)/dk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const al=function(t,e,n,r){t.sort(e);const i=function(a,c){const d=c-a;let u,h;if(d===0)return null;if(d===1)return u=t[a],h=n?n(u):u,new ke(h,u.node,ke.BLACK,null,null);{const v=parseInt(d/2,10)+a,E=i(a,v),C=i(v+1,c);return u=t[v],h=n?n(u):u,new ke(h,u.node,ke.BLACK,E,C)}},s=function(a){let c=null,d=null,u=t.length;const h=function(E,C){const U=u-E,g=u;u-=E;const p=i(U+1,g),y=t[U],I=n?n(y):y;v(new ke(I,y.node,C,null,p))},v=function(E){c?(c.left=E,c=E):(d=E,c=E)};for(let E=0;E<a.count;++E){const C=a.nextBitIsOne(),U=Math.pow(2,a.count-(E+1));C?h(U,ke.BLACK):(h(U,ke.BLACK),h(U,ke.RED))}return d},o=new hk(t.length),l=s(o);return new Ke(r||e,l)};/**
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
 */let ba;const Er={};class $t{static get Default(){return x(Er&&fe,"ChildrenNode.ts has not been loaded"),ba=ba||new $t({".priority":Er},{".priority":fe}),ba}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ni(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return tn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=al(r,e.getCompare()):l=Er;const a=e.toString(),c={...this.indexSet_};c[a]=e;const d={...this.indexes_};return d[a]=l,new $t(d,c)}addToIndexes(e,n){const r=Jo(this.indexes_,(i,s)=>{const o=ni(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===Er)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(H.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),al(l,o.getCompare())}else return Er;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new H(e.name,l))),a.insert(e,e.node)}});return new $t(r,this.indexSet_)}removeFromIndexes(e,n){const r=Jo(this.indexes_,i=>{if(i===Er)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new $t(r,this.indexSet_)}}/**
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
 */let Pi;class F{static get EMPTY_NODE(){return Pi||(Pi=new F(new Ke(pd),null,$t.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&J_(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pi}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pi:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Pi:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=$(e);if(r===null)return n;{x($(e)!==".priority"||bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(re(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+X_(this.getPriority().val())+":"),this.forEachChild(fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":I_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Us?-1:0}withIndex(e){if(e===Kr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Kr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(fe),i=n.getIterator(fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kr?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fk extends F{constructor(){super(new Ke(pd),F.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Us=new fk;Object.defineProperties(H,{MIN:{value:new H(si,F.EMPTY_NODE)},MAX:{value:new H(ar,Us)}});Y_.__EMPTY_NODE=F.EMPTY_NODE;Ce.__childrenNodeConstructor=F;lk(Us);ck(Us);/**
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
 */const pk=!0;function Pe(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,Pe(e))}if(!(t instanceof Array)&&pk){const n=[];let r=!1;if(Je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Pe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new H(o,a)))}}),n.length===0)return F.EMPTY_NODE;const s=al(n,ok,o=>o.name,pd);if(r){const o=al(n,fe.getCompare());return new F(s,Pe(e),new $t({".priority":o},{".priority":fe}))}else return new F(s,Pe(e),$t.Default)}else{let n=F.EMPTY_NODE;return Je(t,(r,i)=>{if(tn(t,r)&&r.substring(0,1)!=="."){const s=Pe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Pe(e))}}ak(Pe);/**
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
 */class mk extends zl{constructor(e){super(),this.indexPath_=e,x(!G(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?gi(e.name,n.name):s}makePost(e,n){const r=Pe(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Us);return new H(ar,e)}toString(){return K_(this.indexPath_,0).join("/")}}/**
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
 */class gk extends zl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?gi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=Pe(e);return new H(n,r)}toString(){return".value"}}const _k=new gk;/**
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
 */function ty(t){return{type:"value",snapshotNode:t}}function oi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ws(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Es(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function yk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class md{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ws(n,l)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(oi(n,r)):o.trackChildChange(Es(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(ws(i,s))}),n.isLeafNode()||n.forEachChild(fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Es(i,s,o))}else r.trackChildChange(oi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ss{constructor(e){this.indexedFilter_=new md(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ss.getStartPost_(e),this.endPost_=Ss.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(fe,(o,l)=>{s.matches(new H(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class vk{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ss(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,v)=>u(v,h)}else o=this.index_.getCompare();const l=e;x(l.numChildren()===this.limit_,"");const a=new H(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,a);if(d&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(Es(n,r,u)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ws(n,u));const C=l.updateImmediateChild(n,F.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(oi(h.name,h.node)),C.updateImmediateChild(h.name,h.node)):C}}else return r.isEmpty()?e:d&&o(c,a)>=0?(s!=null&&(s.trackChildChange(ws(c.name,c.node)),s.trackChildChange(oi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
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
 */class gd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:si}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ar}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new gd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wk(t){return t.loadsAllData()?new md(t.getIndex()):t.hasLimit()?new vk(t):new Ss(t)}function qf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===_k?n="$value":t.index_===Kr?n="$key":(x(t.index_ instanceof mk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class cl extends H_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Fs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=cl.getListenId_(e,r),l={};this.listens_[o]=l;const a=qf(e._queryParams);this.restRequest_(s+".json",a,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),ni(this.listens_,o)===l){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=cl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=qf(e._queryParams),r=e._path.toString(),i=new Ns;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ms(l.responseText)}catch{Xe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Xe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Ek{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ul(){return{value:null,children:new Map}}function ny(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=$(e);t.children.has(r)||t.children.set(r,ul());const i=t.children.get(r);e=re(e),ny(i,e,n)}}function Bc(t,e,n){t.value!==null?n(e,t.value):Sk(t,(r,i)=>{const s=new te(e.toString()+"/"+r);Bc(i,s,n)})}function Sk(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Ck{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Yf=10*1e3,Ik=30*1e3,kk=5*60*1e3;class xk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ck(e);const r=Yf+(Ik-Yf)*Math.random();qi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Je(e,(i,s)=>{s>0&&tn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),qi(this.reportStats_.bind(this),Math.floor(Math.random()*2*kk))}}/**
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
 */var wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function ry(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _d(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class dl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wt.ACK_USER_WRITE,this.source=ry()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new dl(X(),n,this.revert)}}else return x($(this.path)===e,"operationForChild called for unrelated child."),new dl(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class Cs{constructor(e,n){this.source=e,this.path=n,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Cs(this.source,X()):new Cs(this.source,re(this.path))}}/**
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
 */class cr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wt.OVERWRITE}operationForChild(e){return G(this.path)?new cr(this.source,X(),this.snap.getImmediateChild(e)):new cr(this.source,re(this.path),this.snap)}}/**
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
 */class Is{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new cr(this.source,X(),n.value):new Is(this.source,X(),n)}else return x($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Is(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ur{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Tk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Rk(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(yk(o.childName,o.snapshotNode))}),Ni(t,i,"child_removed",e,r,n),Ni(t,i,"child_added",e,r,n),Ni(t,i,"child_moved",s,r,n),Ni(t,i,"child_changed",e,r,n),Ni(t,i,"value",e,r,n),i}function Ni(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>Nk(t,l,a)),o.forEach(l=>{const a=Pk(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Pk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Nk(t,e,n){if(e.childName==null||n.childName==null)throw di("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Wl(t,e){return{eventCache:t,serverCache:e}}function Qi(t,e,n,r){return Wl(new ur(e,n,r),t.serverCache)}function iy(t,e,n,r){return Wl(t.eventCache,new ur(e,n,r))}function $c(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function dr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Da;const Ak=()=>(Da||(Da=new Ke(gI)),Da);class oe{static fromObject(e){let n=new oe(null);return Je(e,(r,i)=>{n=n.set(new te(r),i)}),n}constructor(e,n=Ak()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(G(e))return null;{const r=$(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(re(e),n);return s!=null?{path:Ee(new te(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=$(e),r=this.children.get(n);return r!==null?r.subtree(re(e)):new oe(null)}}set(e,n){if(G(e))return new oe(n,this.children);{const r=$(e),s=(this.children.get(r)||new oe(null)).set(re(e),n),o=this.children.insert(r,s);return new oe(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=$(e),r=this.children.get(n);if(r){const i=r.remove(re(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new oe(null):new oe(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=$(e),r=this.children.get(n);return r?r.get(re(e)):null}}setTree(e,n){if(G(e))return n;{const r=$(e),s=(this.children.get(r)||new oe(null)).setTree(re(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new oe(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ee(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=$(e),o=this.children.get(s);return o?o.findOnPath_(re(e),Ee(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=$(e),s=this.children.get(i);return s?s.foreachOnPath_(re(e),Ee(n,i),r):new oe(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ee(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new oe(null))}}function Yi(t,e,n){if(G(e))return new Ct(new oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ge(i,e);return s=s.updateChild(o,n),new Ct(t.writeTree_.set(i,s))}else{const i=new oe(n),s=t.writeTree_.setTree(e,i);return new Ct(s)}}}function Xf(t,e,n){let r=t;return Je(n,(i,s)=>{r=Yi(r,Ee(e,i),s)}),r}function Jf(t,e){if(G(e))return Ct.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new Ct(n)}}function Hc(t,e){return mr(t,e)!=null}function mr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ge(n.path,e)):null}function Zf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function Nn(t,e){if(G(e))return t;{const n=mr(t,e);return n!=null?new Ct(new oe(n)):new Ct(t.writeTree_.subtree(e))}}function Vc(t){return t.writeTree_.isEmpty()}function li(t,e){return sy(X(),t.writeTree_,e)}function sy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=sy(Ee(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ee(t,".priority"),r)),n}}/**
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
 */function vd(t,e){return cy(e,t)}function Ok(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Yi(t.visibleWrites,e,n)),t.lastWriteId=r}function bk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Dk(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Lk(l,r.path)?i=!1:vt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Mk(t),!0;if(r.snap)t.visibleWrites=Jf(t.visibleWrites,r.path);else{const l=r.children;Je(l,a=>{t.visibleWrites=Jf(t.visibleWrites,Ee(r.path,a))})}return!0}else return!1}function Lk(t,e){if(t.snap)return vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vt(Ee(t.path,n),e))return!0;return!1}function Mk(t){t.visibleWrites=oy(t.allWrites,Fk,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Fk(t){return t.visible}function oy(t,e,n){let r=Ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)vt(n,o)?(l=Ge(n,o),r=Yi(r,l,s.snap)):vt(o,n)&&(l=Ge(o,n),r=Yi(r,X(),s.snap.getChild(l)));else if(s.children){if(vt(n,o))l=Ge(n,o),r=Xf(r,l,s.children);else if(vt(o,n))if(l=Ge(o,n),G(l))r=Xf(r,X(),s.children);else{const a=ni(s.children,$(l));if(a){const c=a.getChild(re(l));r=Yi(r,X(),c)}}}else throw di("WriteRecord should have .snap or .children")}}return r}function ly(t,e,n,r,i){if(!r&&!i){const s=mr(t.visibleWrites,e);if(s!=null)return s;{const o=Nn(t.visibleWrites,e);if(Vc(o))return n;if(n==null&&!Hc(o,X()))return null;{const l=n||F.EMPTY_NODE;return li(o,l)}}}else{const s=Nn(t.visibleWrites,e);if(!i&&Vc(s))return n;if(!i&&n==null&&!Hc(s,X()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(vt(c.path,e)||vt(e,c.path))},l=oy(t.allWrites,o,e),a=n||F.EMPTY_NODE;return li(l,a)}}}function Uk(t,e,n){let r=F.EMPTY_NODE;const i=mr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Nn(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=li(Nn(s,new te(o)),l);r=r.updateImmediateChild(o,a)}),Zf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Nn(t.visibleWrites,e);return Zf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function jk(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ee(e,n);if(Hc(t.visibleWrites,s))return null;{const o=Nn(t.visibleWrites,s);return Vc(o)?i.getChild(n):li(o,i.getChild(n))}}function zk(t,e,n,r){const i=Ee(e,n),s=mr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Nn(t.visibleWrites,i);return li(o,r.getNode().getImmediateChild(n))}else return null}function Wk(t,e){return mr(t.visibleWrites,e)}function Bk(t,e,n,r,i,s,o){let l;const a=Nn(t.visibleWrites,e),c=mr(a,X());if(c!=null)l=c;else if(n!=null)l=li(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],u=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=h.getNext();for(;v&&d.length<i;)u(v,r)!==0&&d.push(v),v=h.getNext();return d}else return[]}function $k(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function hl(t,e,n,r){return ly(t.writeTree,t.treePath,e,n,r)}function wd(t,e){return Uk(t.writeTree,t.treePath,e)}function ep(t,e,n,r){return jk(t.writeTree,t.treePath,e,n,r)}function fl(t,e){return Wk(t.writeTree,Ee(t.treePath,e))}function Hk(t,e,n,r,i,s){return Bk(t.writeTree,t.treePath,e,n,r,i,s)}function Ed(t,e,n){return zk(t.writeTree,t.treePath,e,n)}function ay(t,e){return cy(Ee(t.treePath,e),t.writeTree)}function cy(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Vk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Es(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ws(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,oi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Es(r,e.snapshotNode,i.oldSnap));else throw di("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Gk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const uy=new Gk;class Sd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ur(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ed(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:dr(this.viewCache_),s=Hk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Kk(t){return{filter:t}}function qk(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Qk(t,e,n,r,i){const s=new Vk;let o,l;if(n.type===wt.OVERWRITE){const c=n;c.source.fromUser?o=Gc(t,e,c.path,c.snap,r,i,s):(x(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=pl(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===wt.MERGE){const c=n;c.source.fromUser?o=Xk(t,e,c.path,c.children,r,i,s):(x(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Kc(t,e,c.path,c.children,r,i,l,s))}else if(n.type===wt.ACK_USER_WRITE){const c=n;c.revert?o=ex(t,e,c.path,r,i,s):o=Jk(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===wt.LISTEN_COMPLETE)o=Zk(t,e,n.path,r,s);else throw di("Unknown operation type: "+n.type);const a=s.getChanges();return Yk(e,o,a),{viewCache:o,changes:a}}function Yk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$c(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ty($c(e)))}}function dy(t,e,n,r,i,s){const o=e.eventCache;if(fl(r,n)!=null)return e;{let l,a;if(G(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=dr(e),d=c instanceof F?c:F.EMPTY_NODE,u=wd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=hl(r,dr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=$(n);if(c===".priority"){x(bn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const u=ep(r,n,d,a);u!=null?l=t.filter.updatePriority(d,u):l=o.getNode()}else{const d=re(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const h=ep(r,n,o.getNode(),a);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=Ed(r,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,d,i,s):l=o.getNode()}}return Qi(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function pl(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const v=a.getNode().updateChild(n,r);c=d.updateFullNode(a.getNode(),v,null)}else{const v=$(n);if(!a.isCompleteForPath(n)&&bn(n)>1)return e;const E=re(n),U=a.getNode().getImmediateChild(v).updateChild(E,r);v===".priority"?c=d.updatePriority(a.getNode(),U):c=d.updateChild(a.getNode(),v,U,E,uy,null)}const u=iy(e,c,a.isFullyInitialized()||G(n),d.filtersNodes()),h=new Sd(i,u,s);return dy(t,u,n,i,h,l)}function Gc(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const d=new Sd(i,e,s);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Qi(e,c,!0,t.filter.filtersNodes());else{const u=$(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=Qi(e,c,l.isFullyInitialized(),l.isFiltered());else{const h=re(n),v=l.getNode().getImmediateChild(u);let E;if(G(h))E=r;else{const C=d.getCompleteChild(u);C!=null?G_(h)===".priority"&&C.getChild(q_(h)).isEmpty()?E=C:E=C.updateChild(h,r):E=F.EMPTY_NODE}if(v.equals(E))a=e;else{const C=t.filter.updateChild(l.getNode(),u,E,h,d,o);a=Qi(e,C,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function tp(t,e){return t.eventCache.isCompleteForChild(e)}function Xk(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const d=Ee(n,a);tp(e,$(d))&&(l=Gc(t,l,d,c,i,s,o))}),r.foreach((a,c)=>{const d=Ee(n,a);tp(e,$(d))||(l=Gc(t,l,d,c,i,s,o))}),l}function np(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Kc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;G(n)?c=r:c=new oe(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const v=e.serverCache.getNode().getImmediateChild(u),E=np(t,v,h);a=pl(t,a,new te(u),E,i,s,o,l)}}),c.children.inorderTraversal((u,h)=>{const v=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!v){const E=e.serverCache.getNode().getImmediateChild(u),C=np(t,E,h);a=pl(t,a,new te(u),C,i,s,o,l)}}),a}function Jk(t,e,n,r,i,s,o){if(fl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return pl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(G(n)){let c=new oe(null);return a.getNode().forEachChild(Kr,(d,u)=>{c=c.set(new te(d),u)}),Kc(t,e,n,c,i,s,l,o)}else return e}else{let c=new oe(null);return r.foreach((d,u)=>{const h=Ee(n,d);a.isCompleteForPath(h)&&(c=c.set(d,a.getNode().getChild(h)))}),Kc(t,e,n,c,i,s,l,o)}}function Zk(t,e,n,r,i){const s=e.serverCache,o=iy(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return dy(t,o,n,r,uy,i)}function ex(t,e,n,r,i,s){let o;if(fl(r,n)!=null)return e;{const l=new Sd(r,e,i),a=e.eventCache.getNode();let c;if(G(n)||$(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=hl(r,dr(e));else{const u=e.serverCache.getNode();x(u instanceof F,"serverChildren would be complete if leaf node"),d=wd(r,u)}d=d,c=t.filter.updateFullNode(a,d,s)}else{const d=$(n);let u=Ed(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=a.getImmediateChild(d)),u!=null?c=t.filter.updateChild(a,d,u,re(n),l,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(a,d,F.EMPTY_NODE,re(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hl(r,dr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||fl(r,X())!=null,Qi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class tx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new md(r.getIndex()),s=wk(r);this.processor_=Kk(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(F.EMPTY_NODE,l.getNode(),null),d=new ur(a,o.isFullyInitialized(),i.filtersNodes()),u=new ur(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Wl(u,d),this.eventGenerator_=new Tk(this.query_)}get query(){return this.query_}}function nx(t){return t.viewCache_.serverCache.getNode()}function rx(t,e){const n=dr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function rp(t){return t.eventRegistrations_.length===0}function ix(t,e){t.eventRegistrations_.push(e)}function ip(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function sp(t,e,n,r){e.type===wt.MERGE&&e.source.queryId!==null&&(x(dr(t.viewCache_),"We should always have a full cache before handling merges"),x($c(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Qk(t.processor_,i,e,n,r);return qk(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,hy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function sx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(s,o)=>{r.push(oi(s,o))}),n.isFullyInitialized()&&r.push(ty(n.getNode())),hy(t,r,n.getNode(),e)}function hy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Rk(t.eventGenerator_,e,n,i)}/**
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
 */let ml;class ox{constructor(){this.views=new Map}}function lx(t){x(!ml,"__referenceConstructor has already been defined"),ml=t}function ax(){return x(ml,"Reference.ts has not been loaded"),ml}function cx(t){return t.views.size===0}function Cd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),sp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(sp(o,e,n,r));return s}}function ux(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=hl(n,i?r:null),a=!1;l?a=!0:r instanceof F?(l=wd(n,r),a=!1):(l=F.EMPTY_NODE,a=!1);const c=Wl(new ur(l,a,!1),new ur(r,i,!1));return new tx(e,c)}return o}function dx(t,e,n,r,i,s){const o=ux(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ix(o,n),sx(o,n)}function hx(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Dn(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(ip(c,n,r)),rp(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(ip(a,n,r)),rp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Dn(t)&&s.push(new(ax())(e._repo,e._path)),{removed:s,events:o}}function fy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qr(t,e){let n=null;for(const r of t.views.values())n=n||rx(r,e);return n}function py(t,e){if(e._queryParams.loadsAllData())return Bl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function my(t,e){return py(t,e)!=null}function Dn(t){return Bl(t)!=null}function Bl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let gl;function fx(t){x(!gl,"__referenceConstructor has already been defined"),gl=t}function px(){return x(gl,"Reference.ts has not been loaded"),gl}let mx=1;class op{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=$k(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gy(t,e,n,r,i){return Ok(t.pendingWriteTree_,e,n,r,i),i?js(t,new cr(ry(),e,n)):[]}function Xn(t,e,n=!1){const r=bk(t.pendingWriteTree_,e);if(Dk(t.pendingWriteTree_,e)){let s=new oe(null);return r.snap!=null?s=s.set(X(),!0):Je(r.children,o=>{s=s.set(new te(o),!0)}),js(t,new dl(r.path,s,n))}else return[]}function $l(t,e,n){return js(t,new cr(_d(),e,n))}function gx(t,e,n){const r=oe.fromObject(n);return js(t,new Is(_d(),e,r))}function _x(t,e){return js(t,new Cs(_d(),e))}function yx(t,e,n){const r=kd(t,n);if(r){const i=xd(r),s=i.path,o=i.queryId,l=Ge(s,e),a=new Cs(yd(o),l);return Td(t,s,a)}else return[]}function qc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||my(o,e))){const a=hx(o,e,n,r);cx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,v)=>Dn(v));if(d&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const v=Ex(h);for(let E=0;E<v.length;++E){const C=v[E],U=C.query,g=vy(t,C);t.listenProvider_.startListening(Xi(U),_l(t,U),g.hashFn,g.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Xi(e),null):c.forEach(h=>{const v=t.queryToTagMap.get(Hl(h));t.listenProvider_.stopListening(Xi(h),v)}))}Sx(t,c)}return l}function vx(t,e,n,r){const i=kd(t,r);if(i!=null){const s=xd(i),o=s.path,l=s.queryId,a=Ge(o,e),c=new cr(yd(l),a,n);return Td(t,o,c)}else return[]}function wx(t,e,n,r){const i=kd(t,r);if(i){const s=xd(i),o=s.path,l=s.queryId,a=Ge(o,e),c=oe.fromObject(n),d=new Is(yd(l),a,c);return Td(t,o,d)}else return[]}function lp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,v)=>{const E=Ge(h,i);s=s||qr(v,E),o=o||Dn(v)});let l=t.syncPointTree_.get(i);l?(o=o||Dn(l),s=s||qr(l,X())):(l=new ox,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,E)=>{const C=qr(E,X());C&&(s=s.updateImmediateChild(v,C))}));const c=my(l,e);if(!c&&!e._queryParams.loadsAllData()){const h=Hl(e);x(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=Cx();t.queryToTagMap.set(h,v),t.tagToQueryMap.set(v,h)}const d=vd(t.pendingWriteTree_,i);let u=dx(l,e,n,d,s,a);if(!c&&!o&&!r){const h=py(l,e);u=u.concat(Ix(t,e,h))}return u}function Id(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ge(o,e),c=qr(l,a);if(c)return c});return ly(i,e,s,n,!0)}function js(t,e){return _y(e,t.syncPointTree_,null,vd(t.pendingWriteTree_,X()))}function _y(t,e,n,r){if(G(t.path))return yy(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=qr(i,X()));let s=[];const o=$(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,d=ay(r,o);s=s.concat(_y(l,a,c,d))}return i&&(s=s.concat(Cd(i,t,r,n))),s}}function yy(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=qr(i,X()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=ay(r,o),d=t.operationForChild(o);d&&(s=s.concat(yy(d,l,a,c)))}),i&&(s=s.concat(Cd(i,t,r,n))),s}function vy(t,e){const n=e.query,r=_l(t,n);return{hashFn:()=>(nx(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?yx(t,n._path,r):_x(t,n._path);{const s=vI(i,n);return qc(t,n,null,s)}}}}function _l(t,e){const n=Hl(e);return t.queryToTagMap.get(n)}function Hl(t){return t._path.toString()+"$"+t._queryIdentifier}function kd(t,e){return t.tagToQueryMap.get(e)}function xd(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function Td(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=vd(t.pendingWriteTree_,e);return Cd(r,n,i,null)}function Ex(t){return t.fold((e,n,r)=>{if(n&&Dn(n))return[Bl(n)];{let i=[];return n&&(i=fy(n)),Je(r,(s,o)=>{i=i.concat(o)}),i}})}function Xi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(px())(t._repo,t._path):t}function Sx(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Hl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Cx(){return mx++}function Ix(t,e,n){const r=e._path,i=_l(t,e),s=vy(t,n),o=t.listenProvider_.startListening(Xi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)x(!Dn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,d,u)=>{if(!G(c)&&d&&Dn(d))return[Bl(d).query];{let h=[];return d&&(h=h.concat(fy(d).map(v=>v.query))),Je(u,(v,E)=>{h=h.concat(E)}),h}});for(let c=0;c<a.length;++c){const d=a[c];t.listenProvider_.stopListening(Xi(d),_l(t,d))}}return o}/**
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
 */class Rd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Rd(n)}node(){return this.node_}}class Pd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new Pd(this.syncTree_,n)}node(){return Id(this.syncTree_,this.path_)}}const kx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ap=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Tx(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},Tx=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Rx=function(t,e,n,r){return Nd(e,new Pd(n,t),r)},wy=function(t,e,n){return Nd(t,new Rd(e),n)};function Nd(t,e,n){const r=t.getPriority().val(),i=ap(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=ap(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ce(l,Pe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ce(i))),o.forEachChild(fe,(l,a)=>{const c=Nd(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
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
 */class Ad{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Od(t,e){let n=e instanceof te?e:new te(e),r=t,i=$(n);for(;i!==null;){const s=ni(r.node.children,i)||{children:{},childCount:0};r=new Ad(i,r,s),n=re(n),i=$(n)}return r}function yi(t){return t.node.value}function Ey(t,e){t.node.value=e,Qc(t)}function Sy(t){return t.node.childCount>0}function Px(t){return yi(t)===void 0&&!Sy(t)}function Vl(t,e){Je(t.node.children,(n,r)=>{e(new Ad(n,t,r))})}function Cy(t,e,n,r){n&&e(t),Vl(t,i=>{Cy(i,e,!0)})}function Nx(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function zs(t){return new te(t.parent===null?t.name:zs(t.parent)+"/"+t.name)}function Qc(t){t.parent!==null&&Ax(t.parent,t.name,t)}function Ax(t,e,n){const r=Px(n),i=tn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Qc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qc(t))}/**
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
 */const Ox=/[\[\].#$\/\u0000-\u001F\u007F]/,bx=/[\[\].#$\u0000-\u001F\u007F]/,La=10*1024*1024,Iy=function(t){return typeof t=="string"&&t.length!==0&&!Ox.test(t)},ky=function(t){return typeof t=="string"&&t.length!==0&&!bx.test(t)},Dx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ky(t)},Lx=function(t,e,n,r){bd(Yu(t,"value"),e,n)},bd=function(t,e,n){const r=n instanceof te?new JI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Gn(r)+" with contents = "+e.toString());if(k_(e))throw new Error(t+"contains "+e.toString()+" "+Gn(r));if(typeof e=="string"&&e.length>La/3&&Ll(e)>La)throw new Error(t+"contains a string greater than "+La+" utf8 bytes "+Gn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Iy(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZI(r,o),bd(t,l,r),ek(r)}),i&&s)throw new Error(t+' contains ".value" child '+Gn(r)+" in addition to actual children.")}},xy=function(t,e,n,r){if(!ky(n))throw new Error(Yu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Mx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xy(t,e,n)},Fx=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Ux=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Iy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Dx(n))throw new Error(Yu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class jx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!hd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ty(t,e,n){Dd(t,n),Ry(t,r=>hd(r,e))}function Zt(t,e,n){Dd(t,n),Ry(t,r=>vt(r,e)||vt(e,r))}function Ry(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(zx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ki&&Le("event: "+n.toString()),_i(r)}}}/**
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
 */const Wx="repo_interrupt",Bx=25;class $x{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ul(),this.transactionQueueTree_=new Ad,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hx(t,e,n){if(t.stats_=ud(t.repoInfo_),t.forceRestClient_||CI())t.server_=new cl(t.repoInfo_,(r,i,s,o)=>{cp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>up(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Vt(t.repoInfo_,e,(r,i,s,o)=>{cp(t,r,i,s,o)},r=>{up(t,r)},r=>{Gx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=RI(t.repoInfo_,()=>new xk(t.stats_,t.server_)),t.infoData_=new Ek,t.infoSyncTree_=new op({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=$l(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Md(t,"connected",!1),t.serverSyncTree_=new op({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);Zt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Vx(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ld(t){return kx({timestamp:Vx(t)})}function cp(t,e,n,r,i){t.dataUpdateCount++;const s=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Jo(n,c=>Pe(c));o=wx(t.serverSyncTree_,s,a,i)}else{const a=Pe(n);o=vx(t.serverSyncTree_,s,a,i)}else if(r){const a=Jo(n,c=>Pe(c));o=gx(t.serverSyncTree_,s,a)}else{const a=Pe(n);o=$l(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Gl(t,s)),Zt(t.eventQueue_,l,o)}function up(t,e){Md(t,"connected",e),e===!1&&qx(t)}function Gx(t,e){Je(e,(n,r)=>{Md(t,n,r)})}function Md(t,e,n){const r=new te("/.info/"+e),i=Pe(n);t.infoData_.updateSnapshot(r,i);const s=$l(t.infoSyncTree_,r,i);Zt(t.eventQueue_,r,s)}function Py(t){return t.nextWriteId_++}function Kx(t,e,n,r,i){Fd(t,"set",{path:e.toString(),value:n,priority:r});const s=Ld(t),o=Pe(n,r),l=Id(t.serverSyncTree_,e),a=wy(o,l,s),c=Py(t),d=gy(t.serverSyncTree_,e,a,c,!0);Dd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,v)=>{const E=h==="ok";E||Xe("set at "+e+" failed: "+h);const C=Xn(t.serverSyncTree_,c,!E);Zt(t.eventQueue_,e,C),Xx(t,i,h,v)});const u=Dy(t,e);Gl(t,u),Zt(t.eventQueue_,u,[])}function qx(t){Fd(t,"onDisconnectEvents");const e=Ld(t),n=ul();Bc(t.onDisconnect_,X(),(i,s)=>{const o=Rx(i,s,t.serverSyncTree_,e);ny(n,i,o)});let r=[];Bc(n,X(),(i,s)=>{r=r.concat($l(t.serverSyncTree_,i,s));const o=Dy(t,i);Gl(t,o)}),t.onDisconnect_=ul(),Zt(t.eventQueue_,X(),r)}function Qx(t,e,n){let r;$(e._path)===".info"?r=lp(t.infoSyncTree_,e,n):r=lp(t.serverSyncTree_,e,n),Ty(t.eventQueue_,e._path,r)}function dp(t,e,n){let r;$(e._path)===".info"?r=qc(t.infoSyncTree_,e,n):r=qc(t.serverSyncTree_,e,n),Ty(t.eventQueue_,e._path,r)}function Yx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Wx)}function Fd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function Xx(t,e,n,r){e&&_i(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Ny(t,e,n){return Id(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Ud(t,e=t.transactionQueueTree_){if(e||Kl(t,e),yi(e)){const n=Oy(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jx(t,zs(e),n)}else Sy(e)&&Vl(e,n=>{Ud(t,n)})}function Jx(t,e,n){const r=n.map(c=>c.currentWriteId),i=Ny(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Ge(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Fd(t,"transaction put response",{path:a.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Xn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Kl(t,Od(t.transactionQueueTree_,e)),Ud(t,t.transactionQueueTree_),Zt(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)_i(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Xe("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Gl(t,e)}},o)}function Gl(t,e){const n=Ay(t,e),r=zs(n),i=Oy(t,n);return Zx(t,i,r),r}function Zx(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ge(n,a.path);let d=!1,u;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,u=a.abortReason,i=i.concat(Xn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Bx)d=!0,u="maxretry",i=i.concat(Xn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Ny(t,a.path,o);a.currentInputSnapshot=h;const v=e[l].update(h.val());if(v!==void 0){bd("transaction failed: Data returned ",v,a.path);let E=Pe(v);typeof v=="object"&&v!=null&&tn(v,".priority")||(E=E.updatePriority(h.getPriority()));const U=a.currentWriteId,g=Ld(t),p=wy(E,h,g);a.currentOutputSnapshotRaw=E,a.currentOutputSnapshotResolved=p,a.currentWriteId=Py(t),o.splice(o.indexOf(U),1),i=i.concat(gy(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Xn(t.serverSyncTree_,U,!0))}else d=!0,u="nodata",i=i.concat(Xn(t.serverSyncTree_,a.currentWriteId,!0))}Zt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(u),!1,null))))}Kl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)_i(r[l]);Ud(t,t.transactionQueueTree_)}function Ay(t,e){let n,r=t.transactionQueueTree_;for(n=$(e);n!==null&&yi(r)===void 0;)r=Od(r,n),e=re(e),n=$(e);return r}function Oy(t,e){const n=[];return by(t,e,n),n.sort((r,i)=>r.order-i.order),n}function by(t,e,n){const r=yi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Vl(e,i=>{by(t,i,n)})}function Kl(t,e){const n=yi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ey(e,n.length>0?n:void 0)}Vl(e,r=>{Kl(t,r)})}function Dy(t,e){const n=zs(Ay(t,e)),r=Od(t.transactionQueueTree_,e);return Nx(r,i=>{Ma(t,i)}),Ma(t,r),Cy(r,i=>{Ma(t,i)}),n}function Ma(t,e){const n=yi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ey(e,void 0):n.length=s+1,Zt(t.eventQueue_,zs(e),i);for(let o=0;o<r.length;o++)_i(r[o])}}/**
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
 */function eT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const hp=function(t,e){const n=nT(t),r=n.namespace;n.domain==="firebase.com"&&Jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new F_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new te(n.pathString)}},nT=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=eT(t.substring(d,u)));const h=tT(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class rT{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class iT{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class sT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class jd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:G_(this._path)}get ref(){return new zn(this._repo,this._path)}get _queryIdentifier(){const e=Qf(this._queryParams),n=ad(e);return n==="{}"?"default":n}get _queryObject(){return Qf(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof jd))return!1;const n=this._repo===e._repo,r=hd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+XI(this._path)}}class zn extends jd{constructor(e,n){super(e,n,new gd,!1)}get parent(){const e=q_(this._path);return e===null?null:new zn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),r=Yc(this.ref,e);return new yl(this._node.getChild(n),r,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new yl(i,Yc(this.ref,r),fe)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wn(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?Yc(t._root,e):t._root}function Yc(t,e){return t=Ze(t),$(t._path)===null?Mx("child","path",e):xy("child","path",e),new zn(t._repo,Ee(t._path,e))}function Sr(t,e){t=Ze(t),Fx("set",t._path),Lx("set",e,t._path);const n=new Ns;return Kx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class zd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new rT("value",this,new yl(e.snapshotNode,new zn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new iT(this,e,n):null}matches(e){return e instanceof zd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function oT(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,c=(d,u)=>{dp(t._repo,t,l),a(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new sT(n,s||void 0),l=new zd(o);return Qx(t._repo,t,l),()=>dp(t._repo,t,l)}function Fa(t,e,n,r){return oT(t,"value",e,n,r)}lx(zn);fx(zn);/**
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
 */const lT="FIREBASE_DATABASE_EMULATOR_HOST",Xc={};let aT=!1;function cT(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Os(s);t.repoInfo_=new F_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function uT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=hp(s,i),l=o.repoInfo,a;typeof process<"u"&&Af&&(a=Af[lT]),a?(s=`http://${a}?ns=${l.namespace}`,o=hp(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new kI(t.name,t.options,e);Ux("Invalid Firebase Database URL",o),G(o.path)||Jt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=hT(l,t,c,new II(t,n));return new fT(d,t)}function dT(t,e){const n=Xc[e];(!n||n[t.key]!==t)&&Jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Yx(t),delete n[t.key]}function hT(t,e,n,r){let i=Xc[e.name];i||(i={},Xc[e.name]=i);let s=i[t.toURLString()];return s&&Jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new $x(t,aT,n,r),i[t.toURLString()]=s,s}class fT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zn(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jt("Cannot call "+e+" on a deleted database.")}}function pT(t=Ug(),e){const n=Zu(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=C0("database");r&&mT(n,...r)}return n}function mT(t,e,n,r={}){t=Ze(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&sr(r,s.repoInfo_.emulatorOptions))return;Jt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ko(ko.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:I0(r.mockUserToken,t.app.options.projectId);o=new ko(l)}Os(e)&&Dg(e),cT(s,i,r,o)}/**
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
 */function gT(t){aI(fi),ri(new or("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return uT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Rn(Of,bf,t),Rn(Of,bf,"esm2020")}/**
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
 */Vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gT();const _T={apiKey:"AIzaSyAEPNgXhItKISTG-mnybLEdPVmuXLe9cu8",authDomain:"habit-tracker-1c359.firebaseapp.com",projectId:"habit-tracker-1c359",storageBucket:"habit-tracker-1c359.firebasestorage.app",messagingSenderId:"633793333230",appId:"1:633793333230:web:0cfe83db253d96974eb0ff",databaseURL:"https://habit-tracker-1c359-default-rtdb.firebaseio.com"},Ly=Fg(_T),Jc=oI(Ly),Bn=pT(Ly),yT=[{email:"gp47@habits.local",password:"gp47pass123",name:"GP47",emoji:"🚀",color:"#FF6B9D",bgColor:"#FFE5F0"},{email:"pri@habits.local",password:"pripass123",name:"Pri",emoji:"🎯",color:"#00D9FF",bgColor:"#E0F7FF"},{email:"nikki@habits.local",password:"nikkilogpass123",name:"Nikki",emoji:"✨",color:"#FFAA00",bgColor:"#FFF4E0"},{email:"sid@habits.local",password:"sidpass123",name:"Sid",emoji:"⚡",color:"#7FFF00",bgColor:"#F0FFE0"}];function vT(){const[t,e]=q.useState(!1),[n,r]=q.useState(""),i=async s=>{r(""),e(!0);try{await VS(Jc,s.email,s.password)}catch(o){r("Login failed: "+o.message),e(!1)}};return m.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #0f0f1e 0%, #1a1a3e 50%, #0a2a3e 100%)",color:"#c8b6ff",fontFamily:'"Fredoka One", "Righteous", sans-serif',display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",position:"relative",overflow:"hidden"},children:[m.jsx("div",{style:{position:"absolute",width:"300px",height:"300px",background:"radial-gradient(circle, rgba(200,182,255,0.1) 0%, transparent 70%)",borderRadius:"50%",top:"-100px",right:"-100px",pointerEvents:"none"}}),m.jsx("div",{style:{position:"absolute",width:"300px",height:"300px",background:"radial-gradient(circle, rgba(200,182,255,0.1) 0%, transparent 70%)",borderRadius:"50%",bottom:"-100px",left:"-100px",pointerEvents:"none"}}),m.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a2e 0%, #2d2a4e 100%)",padding:"50px",borderRadius:"20px",border:"2px solid #c8b6ff",maxWidth:"550px",width:"100%",boxShadow:"0 20px 60px rgba(200, 182, 255, 0.2)",position:"relative",zIndex:10},children:[m.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[m.jsx("div",{style:{fontSize:"60px",marginBottom:"15px",animation:"float 3s ease-in-out infinite"},children:"🎯"}),m.jsx("h1",{style:{fontSize:"32px",fontWeight:"bold",margin:"10px 0"},children:"Habit Tracker"}),m.jsx("p",{style:{fontSize:"16px",background:"linear-gradient(90deg, #c8b6ff, #ff006e)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"10px",fontWeight:"bold"},children:"For 4 Friends 🚀"})]}),n&&m.jsx("div",{style:{color:"#ff6b6b",marginBottom:"20px",padding:"12px",background:"#ff6b6b20",borderRadius:"8px",fontSize:"14px",textAlign:"center",border:"1px solid #ff6b6b"},children:n}),m.jsx("div",{style:{textAlign:"center",marginBottom:"25px",color:"#999",fontSize:"13px",textTransform:"uppercase",letterSpacing:"2px",fontWeight:"bold"},children:"👇 Click Your Name to Login"}),m.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"30px"},children:yT.map(s=>m.jsxs("button",{onClick:()=>i(s),disabled:t,style:{padding:"20px 15px",background:s.bgColor,color:s.color,border:`3px solid ${s.color}`,borderRadius:"12px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",fontSize:"16px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",opacity:t?.6:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",textTransform:"uppercase",letterSpacing:"1px",boxShadow:`0 4px 15px ${s.color}30`,transform:"translateY(0px)"},onMouseOver:o=>{o.currentTarget.style.transform="translateY(-5px)",o.currentTarget.style.boxShadow=`0 8px 25px ${s.color}50`,o.currentTarget.style.background=s.color,o.currentTarget.style.color="#0f0f1e"},onMouseOut:o=>{o.currentTarget.style.transform="translateY(0px)",o.currentTarget.style.boxShadow=`0 4px 15px ${s.color}30`,o.currentTarget.style.background=s.bgColor,o.currentTarget.style.color=s.color},children:[m.jsx("span",{style:{fontSize:"28px"},children:s.emoji}),m.jsx("span",{children:s.name})]},s.email))}),m.jsx("style",{children:`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `})]})]})}const wT=({user:t})=>{const e=(f=new Date)=>{const _=f.getFullYear(),w=String(f.getMonth()+1).padStart(2,"0"),S=String(f.getDate()).padStart(2,"0");return`${_}-${w}-${S}`},n=["GP47","Pri","Nikki","Sid"],r=[{id:1,name:"Exercise",category:"💪",type:"pomodoro",sessionsRequired:2},{id:2,name:"AI Reading",category:"🤖",type:"pomodoro",sessionsRequired:1},{id:3,name:"Sleep 8hrs",category:"😴",type:"checkbox"},{id:4,name:"Brush Twice Daily",category:"🪥",type:"checkbox"},{id:5,name:"Water Intake",category:"💧",type:"counter",goal:8},{id:6,name:"Take Vitamins",category:"💊",type:"checkbox"},{id:7,name:"Eat 2 Eggs",category:"🥚",type:"checkbox"}],[i,s]=q.useState(null),[o,l]=q.useState(()=>localStorage.getItem("activeTab")||"habits"),[a,c]=q.useState({}),[d,u]=q.useState(!1),[h,v]=q.useState(!0),E=q.useRef(!1),[C,U]=q.useState([]),g=q.useRef(0),[p,y]=q.useState(()=>{const f=localStorage.getItem("notificationsEnabled");return f?JSON.parse(f):!1}),I=q.useRef({}),[R,O]=q.useState(!1),[b,D]=q.useState(""),[Z,V]=q.useState({}),[me,nn]=q.useState(()=>localStorage.getItem("calendarView")||"week"),[Be,xt]=q.useState({}),ql=async()=>{"Notification"in window&&(Notification.permission==="granted"?y(!0):Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(y(!0),ne("🔔 Notifications enabled!","success")))},ne=(f,_="info",w=3e3)=>{const S=++g.current,T={id:S,message:f,type:_};U(A=>[...A,T]),setTimeout(()=>{U(A=>A.filter(B=>B.id!==S))},w)},rn=(f,_={})=>{if(p&&"Notification"in window)try{const w=new Notification(f,{icon:"🏆",badge:"🎯",requireInteraction:!1,tag:"habit-notification",..._});setTimeout(()=>{w&&w.close&&w.close()},3e3)}catch(w){console.error("Notification error:",w)}};q.useEffect(()=>{Object.keys(a).length!==0&&Object.keys(a).forEach(f=>{if(f===i)return;const _=a[f],w=I.current[f];if(!w){I.current[f]=JSON.parse(JSON.stringify(_));return}if(_.pomodoro.sessions>w.pomodoro.sessions){const A=`🎯 ${f} just completed a session! Level ${_.pomodoro.level} 🚀`;ne(A,"success"),rn(`${f} is crushing it! 🔥`,{body:`They just leveled up to Level ${_.pomodoro.level}!`,tag:"session-complete"})}if(_.pomodoro.level>w.pomodoro.level){const A=`⭐ ${f} just leveled up to Level ${_.pomodoro.level}! 🎉`;ne(A,"success"),rn(`${f} leveled up! ⭐`,{body:`Now at Level ${_.pomodoro.level}. Can you keep up?`,tag:"level-up"})}const S=_.habits.filter(A=>A.completed),T=w.habits.filter(A=>A.completed);if(S.length>T.length){const A=S.find(B=>!T.includes(B));if(A){const B=`💪 ${f} completed ${A.category} ${A.name}!`;ne(B,"info"),rn(`${f} is staying on track! 💪`,{body:`Completed: ${A.name}`,tag:"habit-complete"})}}if(_.stats.completionPercentage>=70&&w.stats.completionPercentage<70){const A=`🏆 ${f} hit their daily goal! 70%+ complete 🎉`;ne(A,"success"),rn(`${f} crushed today's goal! 🏆`,{body:"They hit 70% completion. Don't fall behind!",tag:"daily-goal"})}I.current[f]=JSON.parse(JSON.stringify(_))})},[a,i,p]),q.useEffect(()=>{const f=()=>{const w=new Date,S=new Date(w);S.setDate(S.getDate()+1),S.setHours(0,0,0,0);const T=S-w,A=Math.floor(T/(1e3*60*60)),B=Math.floor(T%(1e3*60*60)/(1e3*60)),W=Math.floor(T%(1e3*60)/1e3);D(`${A}h ${B}m ${W}s`)};f();const _=setInterval(f,1e3);return()=>clearInterval(_)},[]);const j=(f=>{const _=f.split("@")[0];return n.find(w=>w.toLowerCase()===_.toLowerCase())||_})(t.email);q.useEffect(()=>{s(j)},[j]),q.useEffect(()=>{localStorage.setItem("activeTab",o)},[o]),q.useEffect(()=>{localStorage.setItem("notificationsEnabled",JSON.stringify(p))},[p]),q.useEffect(()=>{localStorage.setItem("calendarView",me)},[me]),q.useEffect(()=>{const f=Wn(Bn,"users"),_=setTimeout(()=>{console.warn("Firebase loading timeout - initializing locally");const S={};n.forEach(T=>{S[T]=Y()}),c(S),v(!1)},5e3),w=Fa(f,S=>{if(clearTimeout(_),S.exists()){let T=S.val();if(n.forEach(A=>{T[A]?T[A]=ge(T[A],A):T[A]=Y()}),!E.current){E.current=!0;let A=!1;n.forEach(B=>{if(T[B]){T[B].habits=T[B].habits.map($e=>{const vr=r.find(Ql=>Ql.id===$e.id);return vr&&(!$e.type||!$e.category||!$e.name)?(A=!0,{...vr,...$e}):$e});const W=new Set(T[B].habits.map($e=>$e.id));r.forEach($e=>{W.has($e.id)||(A=!0,T[B].habits.push({...$e,completed:!1,streak:0,bestStreak:0,count:0,sessionsCompleted:0}))})}}),A&&Sr(f,T).catch(B=>console.error("Error saving migrated data:",B))}c(T)}else{const T={};n.forEach(A=>{T[A]=Y()}),Sr(f,T).catch(A=>{console.error("Error initializing Firebase:",A),c(T)}),c(T)}v(!1)},S=>{clearTimeout(_),console.error("Firebase error:",S);const T={};n.forEach(A=>{T[A]=Y()}),c(T),v(!1)});return()=>{clearTimeout(_),w()}},[]);const z=async()=>{const f=new Date;f.setDate(f.getDate()-1);const _=e(f),w=Object.keys(a).map(S=>{const T=a[S],A=Wn(Bn,`history/${_}/${S}`);return Sr(A,{completed:T.stats.completionPercentage>=70,percentage:T.stats.completionPercentage,timestamp:f.toISOString()}).catch(B=>(console.error("Error saving history for",S,":",B),Promise.reject(B)))});try{await Promise.all(w)}catch(S){console.error("Failed to save some history records:",S)}};q.useEffect(()=>{const f=Wn(Bn,"history"),_=Wn(Bn,"bonusTask"),w=Fa(f,T=>{T.exists()&&V(T.val())},T=>{console.error("Error loading history:",T)}),S=Fa(_,T=>{T.exists()?xt(T.val()):xt({})},T=>{console.error("Error loading bonus task:",T)});return()=>{w(),S()}},[]),q.useEffect(()=>{if(!i||Object.keys(a).length===0||Object.keys(Z).length===0)return;const f=async()=>{const w=localStorage.getItem("lastResetDate"),S=e(),T=w&&w!==S;if(console.log("[RESET CHECK]",{lastResetDate:w,today:S,shouldReset:T}),T){console.log("[RESET TRIGGERED] Date changed:",w,"→",S),await z();const A=JSON.parse(JSON.stringify(a)),B=[];n.forEach(W=>{var $e;if(A[W]){const vr=new Date;vr.setDate(vr.getDate()-1);const Ql=e(vr),Yl=Z[Ql],$d=(($e=Yl==null?void 0:Yl[W])==null?void 0:$e.completed)||!1;A[W].habits.forEach(ye=>{ye.type==="checkbox"||ye.type==="counter"?(ye.completed=!1,ye.type==="counter"&&(ye.count=0),$d?(ye.streak=(ye.streak||0)+1,ye.bestStreak=Math.max(ye.bestStreak||0,ye.streak)):ye.streak=0):ye.type==="pomodoro"&&(ye.sessionsCompleted=0,ye.completed=!1,$d?(ye.streak=(ye.streak||0)+1,ye.bestStreak=Math.max(ye.bestStreak||0,ye.streak)):ye.streak=0)}),A[W].pomodoro.sessionsToday=0,A[W].pomodoro.dailyXP=0,A[W].stats.completionPercentage=0,B.push(_e(W,A[W]))}}),await Promise.all(B),c(A),xt({}),ne("📅 Daily reset! New habits unlocked for today","success")}localStorage.setItem("lastResetDate",S)};f();const _=setInterval(f,6e4);return()=>clearInterval(_)},[i,Z]);const Y=()=>({habits:r.map(f=>({...f,completed:!1,streak:0,bestStreak:0,count:0,sessionsCompleted:0})),pomodoro:{sessions:0,xp:0,level:1,dailyXP:0,sessionsToday:0},stats:{completionPercentage:0,perfectWeekCount:0}}),ge=(f,_)=>!f||typeof f!="object"?(console.warn(`Invalid user data for ${_}, creating new`),Y()):(f.pomodoro||(f.pomodoro={sessions:0,xp:0,level:1,dailyXP:0,sessionsToday:0}),f.stats||(f.stats={completionPercentage:0,perfectWeekCount:0}),(!f.habits||!Array.isArray(f.habits))&&(f.habits=[]),typeof f.pomodoro.xp!="number"&&(f.pomodoro.xp=0),typeof f.pomodoro.level!="number"&&(f.pomodoro.level=Math.floor(f.pomodoro.xp/100)+1),typeof f.pomodoro.dailyXP!="number"&&(f.pomodoro.dailyXP=0),typeof f.stats.completionPercentage!="number"&&(f.stats.completionPercentage=0),f),sn=q.useRef(0),_e=async(f,_)=>{if(!f||!_){console.error("Invalid save: missing userName or userData",{userName:f,userData:_});return}sn.current++,O(!0);try{const w=Wn(Bn,`users/${f}`);await Sr(w,_)}catch(w){console.error("Firebase save failed for",f,":",w),ne("❌ Failed to save. Check your connection.","error")}finally{sn.current--,sn.current===0&&O(!1)}},gr=()=>{try{const f=new(window.AudioContext||window.webkitAudioContext);for(let _=0;_<3;_++)setTimeout(()=>{const w=f.createOscillator(),S=f.createGain();w.connect(S),S.connect(f.destination),w.frequency.value=900+_*200,w.type="sine",S.gain.setValueAtTime(.4,f.currentTime),S.gain.exponentialRampToValueAtTime(.01,f.currentTime+.3),w.start(f.currentTime),w.stop(f.currentTime+.3)},_*150);Tt()}catch{Tt()}},Tt=()=>{const f=document.getElementById("notification-flash");f&&(f.style.opacity="1",setTimeout(()=>{f.style.opacity="0"},300))},_r=f=>{if(!i||R)return;const _=JSON.parse(JSON.stringify(a));if(!_[i]){console.error("User not found:",i);return}const w=_[i].habits.find(S=>S.id===f);if(w&&w.type==="checkbox"){const S=w.completed;w.completed=!w.completed,!S&&w.completed?(_[i].pomodoro.xp+=5,_[i].pomodoro.dailyXP+=5,_[i].pomodoro.level=Math.floor(_[i].pomodoro.xp/100)+1,ne(`✅ ${w.name} completed! +5 XP`,"success")):S&&!w.completed&&(_[i].pomodoro.xp=Math.max(0,_[i].pomodoro.xp-5),_[i].pomodoro.dailyXP=Math.max(0,_[i].pomodoro.dailyXP-5),_[i].pomodoro.level=Math.floor(_[i].pomodoro.xp/100)+1,ne(`↶ ${w.name} unchecked! -5 XP`,"info")),yr(_),c(_),_e(i,_[i])}},Wd=(f,_)=>{if(!i||R)return;const w=JSON.parse(JSON.stringify(a));if(!w[i]){console.error("User not found:",i);return}const S=w[i].habits.find(T=>T.id===f);if(S&&S.type==="counter"){const T=S.completed;S.count=Math.max(0,S.count+_),S.completed=S.count>=(S.goal||8),!T&&S.completed?(w[i].pomodoro.xp+=5,w[i].pomodoro.dailyXP+=5,w[i].pomodoro.level=Math.floor(w[i].pomodoro.xp/100)+1,ne(`✅ ${S.name} goal reached! +5 XP`,"success")):T&&!S.completed&&(w[i].pomodoro.xp=Math.max(0,w[i].pomodoro.xp-5),w[i].pomodoro.dailyXP=Math.max(0,w[i].pomodoro.dailyXP-5),w[i].pomodoro.level=Math.floor(w[i].pomodoro.xp/100)+1,ne(`↶ ${S.name} below goal! -5 XP`,"info")),yr(w),c(w),_e(i,w[i])}},My=f=>{if(!i||R)return;const _=JSON.parse(JSON.stringify(a));if(!_[i]){console.error("User not found:",i);return}const w=_[i].habits.find(S=>S.id===f);if(w&&w.type==="pomodoro"){w.sessionsCompleted=(w.sessionsCompleted||0)+1,w.sessionsCompleted>=w.sessionsRequired&&(w.completed=!0),_[i].pomodoro.sessions+=1,_[i].pomodoro.sessionsToday+=1;const T=10+(_[i].pomodoro.sessionsToday<=3?10:0);_[i].pomodoro.xp+=T,_[i].pomodoro.dailyXP+=T,_[i].pomodoro.level=Math.floor(_[i].pomodoro.xp/100)+1,yr(_),c(_),_e(i,_[i]),gr(),ne(`✅ ${w.name} session added! +${T} XP`,"success")}},Fy=f=>{if(!i||R)return;const _=JSON.parse(JSON.stringify(a));if(!_[i]){console.error("User not found:",i);return}const w=_[i].habits.find(S=>S.id===f);if(w&&w.type==="pomodoro"&&w.sessionsCompleted>0){w.sessionsCompleted-=1,w.sessionsCompleted<w.sessionsRequired&&(w.completed=!1),_[i].pomodoro.sessions=Math.max(0,_[i].pomodoro.sessions-1),_[i].pomodoro.sessionsToday=Math.max(0,_[i].pomodoro.sessionsToday-1);const T=10+(_[i].pomodoro.sessionsToday<3?10:0);_[i].pomodoro.xp=Math.max(0,_[i].pomodoro.xp-T),_[i].pomodoro.dailyXP=Math.max(0,_[i].pomodoro.dailyXP-T),_[i].pomodoro.level=Math.floor(_[i].pomodoro.xp/100)+1,yr(_),c(_),_e(i,_[i]),ne(`↶ ${w.name} session removed! -${T} XP`,"info")}},yr=(f,_=Be)=>{if(!f||!f[i]){console.error("Invalid update: missing users or currentUser data");return}const w=e(),S=f[i].habits.filter(W=>W.completed).length,T=_[w]?1:0,A=S+T,B=f[i].habits.length+1;f[i].stats.completionPercentage=Math.floor(A/B*100)},Uy=()=>{if(!i||R)return;const f=e();if(Be[f])return;const _=JSON.parse(JSON.stringify(a));if(!_[i]){console.error("User not found:",i);return}_[i].pomodoro.xp+=20,_[i].pomodoro.dailyXP+=20,_[i].pomodoro.level=Math.floor(_[i].pomodoro.xp/100)+1;const w={completedBy:i,timestamp:new Date().toISOString()},S={...Be,[f]:w};yr(_,S),c(_),xt(S),_e(i,_[i]);const T=Wn(Bn,`bonusTask/${f}`);Sr(T,w).catch(A=>{console.error("Error saving bonus task:",A),ne("❌ Failed to save bonus task. Try again.","error")}),ne(`🐕 ${i} walked Mylo! +20 XP bonus`,"success"),gr()},Bd=()=>{if(!i||R)return;const f=e();if(!Be[f]||Be[f].completedBy!==i)return;const _=JSON.parse(JSON.stringify(a));if(!_[i]){console.error("User not found:",i);return}_[i].pomodoro.xp=Math.max(0,_[i].pomodoro.xp-20),_[i].pomodoro.dailyXP=Math.max(0,_[i].pomodoro.dailyXP-20),_[i].pomodoro.level=Math.floor(_[i].pomodoro.xp/100)+1;const w={...Be};delete w[f],yr(_,w),c(_),xt(w),_e(i,_[i]);const S=Wn(Bn,`bonusTask/${f}`);Sr(S,null).catch(T=>{console.error("Error removing bonus task:",T),ne("❌ Failed to remove bonus task. Try again.","error")}),ne("↶ Bonus task removed! -20 XP","info")},Ws="#0f0f1e",L="#c8b6ff";if(h)return m.jsx("div",{style:{minHeight:"100vh",background:Ws,color:L,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"inherit"},children:"Loading..."});const Rt=a[i]||Y(),jy=Rt.habits.filter(f=>f.completed).length;return m.jsxs("div",{style:{minHeight:"100vh",background:Ws,color:L,fontFamily:'"Fredoka One", "Righteous", sans-serif'},children:[m.jsx("div",{id:"notification-flash",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:L,opacity:"0",pointerEvents:"none",transition:"opacity 0.3s ease",zIndex:9999}}),d&&m.jsx("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"120px",animation:"float 1s ease-out forwards",pointerEvents:"none",zIndex:5e3},children:"✨"}),m.jsx("style",{children:`
        @keyframes float { 0% { transform: translate(-50%, -50%) scale(1); opacity: 1; } 100% { transform: translate(-50%, -150%) scale(0); opacity: 0; } }
      `}),m.jsxs("div",{style:{background:`linear-gradient(135deg, ${Ws} 0%, ${Ws} 100%)`,padding:"var(--space-xl)",borderBottom:"1px solid var(--color-bg-tertiary)",position:"relative",overflow:"hidden"},children:[m.jsx("div",{style:{position:"absolute",top:0,right:0,width:"200px",height:"200px",background:"radial-gradient(circle, rgba(200,182,255,0.1) 0%, transparent 70%)",borderRadius:"50%",pointerEvents:"none"}}),m.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1},children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-lg)",flexWrap:"wrap",gap:"var(--space-md)"},children:[m.jsxs("div",{children:[m.jsxs("h1",{style:{fontSize:"var(--font-size-2xl)",marginBottom:"var(--space-sm)"},children:["Welcome back, ",m.jsx("span",{style:{color:L},children:j}),"! 👋"]}),m.jsx("p",{className:"text-secondary",style:{fontSize:"var(--font-size-sm)"},children:"Only your data is editable. Compete with friends below."})]}),m.jsx("button",{onClick:handleLogout,className:"btn-secondary",style:{padding:"var(--space-sm) var(--space-md)"},children:"Logout"})]}),m.jsxs("div",{className:"grid grid-4",style:{gap:"var(--space-md)",marginBottom:"var(--space-lg)"},children:[m.jsx(StatCard,{icon:"⭐",label:"Level",value:Rt.pomodoro.level,loading:h}),m.jsx(StatCard,{icon:"✨",label:"Total XP",value:Rt.pomodoro.xp,loading:h}),m.jsx(StatCard,{icon:"📊",label:"Today's Progress",value:`${Rt.stats.completionPercentage}%`,loading:h}),m.jsx(StatCard,{icon:"⏰",label:"Reset In",value:b.split("h")[0]+"h",loading:h})]}),m.jsxs("div",{className:"flex-between",style:{gap:"var(--space-md)",flexWrap:"wrap"},children:[m.jsx("button",{onClick:ql,className:p?"btn-primary":"btn-secondary",children:p?"🔔 Notifications On":"🔕 Enable Notifications"}),R&&m.jsx(StateIndicator,{isSaving:!0})]})]})]}),m.jsx("div",{style:{padding:"var(--space-lg)",display:"flex",gap:"var(--space-md)",borderBottom:"1px solid var(--color-bg-tertiary)",background:"linear-gradient(to bottom, var(--color-bg-secondary) 0%, var(--color-bg) 100%)",flexWrap:"wrap"},children:m.jsx("div",{className:"flex gap-md",style:{width:"100%",maxWidth:"1200px",margin:"0 auto"},children:[{id:"habits",label:"🎯 Habits"},{id:"leaderboard",label:"🏆 Leaderboard"},...i==="GP47"?[{id:"admin",label:"⚙️ Admin"}]:[]].map(f=>m.jsx("button",{onClick:()=>l(f.id),className:o===f.id?"btn-primary":"btn-secondary",style:{position:"relative",borderBottom:o===f.id?`3px solid ${L}`:"none",borderRadius:"0",background:(o===f.id,"transparent"),color:o===f.id?L:"var(--color-text-secondary)",padding:"var(--space-md) var(--space-lg)"},children:f.label},f.id))})}),o==="habits"&&m.jsxs("div",{style:{padding:"var(--space-xl)",maxWidth:"800px",margin:"0 auto"},children:[m.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[m.jsxs("h2",{style:{marginBottom:"var(--space-md)"},children:[i,"'s Daily Habits"]}),m.jsxs("div",{className:"card",style:{marginBottom:"var(--space-lg)"},children:[m.jsxs("div",{className:"flex-between",style:{marginBottom:"var(--space-md)"},children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-secondary text-sm",children:"Today's Progress"}),m.jsxs("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"bold",marginTop:"var(--space-sm)"},children:[Rt.stats.completionPercentage,"%"]})]}),m.jsxs("div",{style:{textAlign:"right"},children:[m.jsx("div",{className:"text-secondary text-sm",children:"Completion"}),(()=>{const f=e(),_=Be[f]?1:0,w=jy+_,S=Rt.habits.length+1;return m.jsxs("div",{style:{fontSize:"var(--font-size-xl)",fontWeight:"bold",marginTop:"var(--space-sm)"},children:[w,"/",S]})})()]})]}),m.jsx("div",{style:{width:"100%",height:"12px",background:"var(--color-bg-secondary)",borderRadius:"var(--radius-full)",overflow:"hidden",marginBottom:"var(--space-sm)"},children:m.jsx("div",{style:{width:`${Rt.stats.completionPercentage}%`,height:"100%",background:`linear-gradient(90deg, ${L} 0%, ${L} 100%)`,transition:"width var(--transition-base)",boxShadow:`0 0 10px ${L}40`}})}),m.jsxs("div",{className:"flex-between",style:{fontSize:"var(--font-size-sm)",color:"var(--color-text-secondary)"},children:[m.jsxs("span",{children:["📅 ",new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"})]}),m.jsxs("span",{children:["⏰ Resets in ",b]})]}),Rt.stats.completionPercentage>=70&&m.jsx("div",{style:{marginTop:"var(--space-md)",padding:"var(--space-sm) var(--space-md)",background:"var(--color-success)",borderRadius:"var(--radius-md)",textAlign:"center",fontSize:"var(--font-size-sm)",fontWeight:"bold"},children:"🏆 Daily Goal Achieved!"})]})]}),Rt.habits.map(f=>m.jsxs("div",{style:{padding:"15px",marginBottom:"10px",background:f.completed?L:"#1a1a2e",color:f.completed?"#0f0f1e":L,borderRadius:"10px",cursor:f.type==="checkbox"?"pointer":"default",display:"flex",justifyContent:"space-between",alignItems:"center",border:`2px solid ${L}`,transition:"all 0.2s"},onClick:()=>f.type==="checkbox"&&_r(f.id),children:[m.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center",flex:1},children:[m.jsx("span",{style:{fontSize:"24px"},children:f.category}),m.jsxs("div",{children:[m.jsx("div",{style:{fontWeight:"bold"},children:f.name}),m.jsxs("div",{style:{fontSize:"12px",opacity:.8},children:["Streak: ",f.streak," | Best: ",f.bestStreak]}),f.type==="pomodoro"&&m.jsxs("div",{style:{fontSize:"11px",opacity:.8,marginTop:"4px"},children:["Sessions: ",f.sessionsCompleted,"/",f.sessionsRequired]})]})]}),f.type==="checkbox"&&m.jsx("div",{style:{fontSize:"24px"},children:f.completed?"✅":"⭕"}),f.type==="pomodoro"&&m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[m.jsx("div",{style:{width:"60px",height:"8px",background:"#333",borderRadius:"4px",overflow:"hidden",border:`1px solid ${L}`},children:m.jsx("div",{style:{width:`${f.sessionsCompleted/f.sessionsRequired*100}%`,height:"100%",background:L,transition:"width 0.3s"}})}),m.jsxs("span",{style:{minWidth:"30px",textAlign:"center",fontSize:"12px"},children:[f.sessionsCompleted,"/",f.sessionsRequired]}),f.sessionsCompleted<f.sessionsRequired&&m.jsx("button",{onClick:()=>My(f.id),style:{padding:"6px 12px",background:"transparent",color:L,border:`2px solid ${L}`,borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit",whiteSpace:"nowrap"},children:"✓ Add"}),f.sessionsCompleted>0&&m.jsx("button",{onClick:()=>Fy(f.id),style:{padding:"6px 12px",background:"transparent",color:"#ff6b6b",border:"2px solid #ff6b6b",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit",whiteSpace:"nowrap"},children:"↶ Undo"})]}),f.type==="counter"&&m.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[m.jsx("button",{onClick:()=>Wd(f.id,-1),style:{width:"30px",height:"30px",background:"transparent",border:`2px solid ${f.completed?"#0f0f1e":L}`,color:f.completed?"#0f0f1e":L,borderRadius:"50%",cursor:"pointer",fontWeight:"bold",fontSize:"16px",fontFamily:"inherit"},children:"−"}),m.jsxs("div",{style:{minWidth:"40px",textAlign:"center",fontWeight:"bold",fontSize:"18px"},children:[f.count,"/",f.goal]}),m.jsx("button",{onClick:()=>Wd(f.id,1),style:{width:"30px",height:"30px",background:f.count>=f.goal?"#0f0f1e":"transparent",border:`2px solid ${f.completed?"#0f0f1e":L}`,color:f.completed?"#0f0f1e":L,borderRadius:"50%",cursor:"pointer",fontWeight:"bold",fontSize:"16px",fontFamily:"inherit"},children:"+"})]})]},f.id)),Rt.stats.completionPercentage>=70&&m.jsx("div",{style:{marginTop:"30px",padding:"15px",background:"#2a2547",borderRadius:"10px",textAlign:"center",fontWeight:"bold",border:`2px solid ${L}`},children:"🏆 Daily Goal Met! 70%+ habits completed"}),m.jsxs("div",{style:{marginTop:"30px",padding:"20px",background:"#1a2a1e",borderRadius:"12px",border:"2px solid #7FFF00"},children:[m.jsx("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"10px",color:"#7FFF00"},children:"🐕 Daily Bonus Task"}),(()=>{const f=e(),_=Be[f],w=_&&_.completedBy===i;return m.jsxs("div",{style:{padding:"15px",background:_?"#333":"#0f0f1e",borderRadius:"8px",border:_?"2px solid #999":"2px solid #7FFF00",cursor:_?w?"pointer":"default":"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",opacity:_&&!w?.5:1},onClick:()=>{_?w&&Bd():Uy()},children:[m.jsxs("div",{children:[m.jsx("div",{style:{fontWeight:"bold",color:_?"#999":"#7FFF00",marginBottom:"5px"},children:"Take Mylo for a Walk"}),m.jsx("div",{style:{fontSize:"12px",color:"#999"},children:_?`✅ Completed by ${_.completedBy}`:"First one to complete earns 20 XP!"})]}),!_&&m.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",color:"#7FFF00"},children:"+20 XP"}),w&&m.jsx("button",{onClick:S=>{S.stopPropagation(),Bd()},style:{padding:"6px 12px",background:"transparent",color:"#ff6b6b",border:"2px solid #ff6b6b",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit"},children:"↶ Undo"})]})})()]}),m.jsxs("div",{style:{marginTop:"50px",paddingTop:"30px",borderTop:"2px solid #333"},children:[m.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:L},children:"👥 Others' Progress (Read-Only)"}),n.filter(f=>f!==i).map(f=>{const _=a[f]||Y(),w=_.habits.filter(S=>S.completed).length;return m.jsxs("div",{style:{padding:"15px",marginBottom:"15px",background:"#1a1a2e",borderRadius:"10px",border:"1px solid #333"},children:[m.jsx("div",{style:{fontWeight:"bold",marginBottom:"10px",color:L},children:f}),m.jsxs("div",{style:{fontSize:"12px",color:"#999",marginBottom:"8px"},children:["Completion: ",_.stats.completionPercentage,"% (",w,"/",_.habits.length,") | Level: ",_.pomodoro.level]}),m.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:_.habits.map(S=>m.jsxs("div",{style:{padding:"6px 12px",background:S.completed?L:"#0f0f1e",color:S.completed?"#0f0f1e":L,borderRadius:"6px",fontSize:"11px",fontWeight:"bold"},children:[S.category," ",S.completed?"✅":"⭕"]},S.id))})]},f)})]})]}),o==="leaderboard"&&m.jsxs("div",{style:{padding:"30px",maxWidth:"900px",margin:"0 auto"},children:[m.jsx("div",{style:{fontSize:"28px",fontWeight:"bold",marginBottom:"10px",color:L},children:"🏆 Leaderboard"}),m.jsx("div",{style:{fontSize:"13px",color:"#999",marginBottom:"30px",textTransform:"uppercase",letterSpacing:"1px"},children:"Real-Time Rankings & Completion Tracking"}),m.jsxs("div",{style:{marginBottom:"30px",background:"#1a1a2e",padding:"15px",borderRadius:"12px",border:"2px solid #7FFF00"},children:[m.jsx("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"12px",color:"#7FFF00"},children:"⚡ How to Gain XP"}),m.jsxs("div",{style:{fontSize:"13px",color:"#ccc",lineHeight:"1.6"},children:[m.jsxs("div",{style:{marginBottom:"8px"},children:["✓ ",m.jsx("strong",{children:"Base XP:"})," +10 XP per session (timer or manual)"]}),m.jsxs("div",{style:{marginBottom:"8px"},children:["🔥 ",m.jsx("strong",{children:"Session Bonus:"})," +10 extra XP for first 3 sessions of the day (total +20)"]}),m.jsxs("div",{style:{marginBottom:"8px"},children:["✅ ",m.jsx("strong",{children:"Habit Completion:"})," +5 XP per checkbox/counter habit completed"]}),m.jsxs("div",{style:{marginBottom:"8px"},children:["🐕 ",m.jsx("strong",{children:"Daily Bonus (Mylo):"})," +20 XP once per day (first to claim)"]}),m.jsxs("div",{style:{marginBottom:"8px"},children:["📈 ",m.jsx("strong",{children:"Leveling:"})," 100 XP = 1 Level"]}),m.jsxs("div",{children:["💪 ",m.jsx("strong",{children:"Daily Goal:"})," Complete 70%+ of habits to hit daily completion target"]})]})]}),m.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[m.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:L},children:"📅 Completion Calendar"}),m.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:[m.jsx("button",{onClick:()=>nn("week"),style:{padding:"8px 16px",background:me==="week"?L:"#0f0f1e",color:me==="week"?"#0f0f1e":L,border:`2px solid ${L}`,borderRadius:"6px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",fontSize:"12px"},children:"This Week"}),m.jsx("button",{onClick:()=>nn("month"),style:{padding:"8px 16px",background:me==="month"?L:"#0f0f1e",color:me==="month"?"#0f0f1e":L,border:`2px solid ${L}`,borderRadius:"6px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",fontSize:"12px"},children:"Last 30 Days"})]}),m.jsx("div",{style:{display:"flex",gap:"15px",flexWrap:"wrap",marginBottom:"20px",fontSize:"12px"},children:[{name:"GP47",color:"#FF6B9D"},{name:"Pri",color:"#00D9FF"},{name:"Nikki",color:"#FFAA00"},{name:"Sid",color:"#7FFF00"}].map(f=>m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[m.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"3px",background:f.color}}),m.jsx("span",{children:f.name})]},f.name))}),m.jsxs("div",{style:{background:"#0f0f1e",padding:"15px",borderRadius:"8px",overflowX:"auto"},children:[me==="week"&&m.jsxs("div",{children:[m.jsx("div",{style:{fontSize:"12px",color:"#999",marginBottom:"10px",textTransform:"uppercase"},children:"This Week"}),m.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"8px"},children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((f,_)=>{const w=new Date;w.setDate(w.getDate()-(w.getDay()-_-1+7)%7);const S=e(w),T=Z[S]||{},A={GP47:"#FF6B9D",Pri:"#00D9FF",Nikki:"#FFAA00",Sid:"#7FFF00"};return m.jsxs("div",{style:{textAlign:"center"},children:[m.jsx("div",{style:{fontSize:"11px",color:"#999",marginBottom:"5px",fontWeight:"bold"},children:f}),m.jsx("div",{style:{width:"100%",aspectRatio:"1",background:"#1a1a2e",borderRadius:"8px",border:"1px solid #333",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",padding:"4px",gap:"2px"},children:Object.keys(T).length>0?Object.keys(T).map(B=>T[B].completed&&m.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"2px",background:A[B]}},B)):m.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"—"})})]},f)})})]}),me==="month"&&m.jsxs("div",{children:[m.jsx("div",{style:{fontSize:"12px",color:"#999",marginBottom:"10px",textTransform:"uppercase"},children:"Last 30 Days"}),m.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(40px, 1fr))",gap:"4px"},children:Array.from({length:30}).map((f,_)=>{const w=new Date;w.setDate(w.getDate()-(29-_));const S=e(w),T=Z[S]||{},A={GP47:"#FF6B9D",Pri:"#00D9FF",Nikki:"#FFAA00",Sid:"#7FFF00"},B=Object.keys(T).filter(W=>T[W].completed).length;return m.jsx("div",{style:{aspectRatio:"1",background:B===4?"#2d5f2e":B>=2?"#3a3a5f":"#1a1a2e",borderRadius:"4px",border:"1px solid #333",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",padding:"2px",gap:"1px",title:`${S}: ${B} users completed`},children:B>0?Object.keys(T).map(W=>T[W].completed&&m.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"1px",background:A[W]}},W)):m.jsx("span",{style:{fontSize:"8px",color:"#666"},children:"·"})},S)})})]})]}),m.jsxs("div",{style:{marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #333"},children:[m.jsx("div",{style:{fontSize:"13px",color:"#999",marginBottom:"10px",textTransform:"uppercase"},children:"Today's Progress"}),n.map(f=>{const _=a[f]||Y(),w=_.stats.completionPercentage>=70,S={GP47:"#FF6B9D",Pri:"#00D9FF",Nikki:"#FFAA00",Sid:"#7FFF00"};return m.jsx("div",{style:{marginBottom:"12px",borderRadius:"8px",overflow:"hidden"},children:m.jsxs("div",{style:{padding:"10px 12px",background:`linear-gradient(90deg, ${S[f]}30 ${_.stats.completionPercentage}%, #0f0f1e ${_.stats.completionPercentage}%)`,borderRadius:"8px",borderLeft:`4px solid ${S[f]}`,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{style:{fontWeight:"bold",color:S[f]},children:f}),m.jsxs("span",{style:{fontSize:"12px",color:"#999"},children:[_.stats.completionPercentage,"% ",w?"✅":"⏳"]})]})},f)})]})]}),m.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[m.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:L},children:"🔥 Longest Active Streaks"}),n.map(f=>{var S;const w=(((S=a[f])==null?void 0:S.habits)||[]).reduce((T,A)=>A.streak>T.streak?A:T,{streak:0,name:"None"});return m.jsxs("div",{style:{padding:"12px",marginBottom:"8px",background:"#0f0f1e",borderRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{style:{fontWeight:"bold"},children:f}),m.jsxs("span",{style:{fontSize:"12px",color:"#999"},children:[w.name," • ",m.jsxs("span",{style:{color:L,fontWeight:"bold"},children:[w.streak," days 🔥"]})]})]},f)})]}),m.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[m.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:L},children:"⭐ Overall Level"}),n.sort((f,_)=>{var w,S;return(((w=a[_])==null?void 0:w.pomodoro.level)||1)-(((S=a[f])==null?void 0:S.pomodoro.level)||1)}).map((f,_)=>{var A,B;const w=((A=a[f])==null?void 0:A.pomodoro.level)||1,S=((B=a[f])==null?void 0:B.pomodoro.xp)||0,T=["🥇","🥈","🥉"];return m.jsxs("div",{style:{padding:"12px",marginBottom:"8px",background:"#0f0f1e",borderRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[m.jsx("span",{children:T[_]||"4️⃣"}),m.jsx("span",{style:{fontWeight:"bold"},children:f})]}),m.jsxs("span",{style:{fontSize:"12px",color:"#999"},children:["Level ",m.jsx("span",{style:{color:L,fontWeight:"bold",fontSize:"14px"},children:w})," • ",S," XP"]})]},f)})]}),m.jsxs("div",{style:{background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[m.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:L},children:"🏅 Stats"}),n.map(f=>{const _=a[f]||Y(),w=_.pomodoro.sessions||0;return m.jsxs("div",{style:{padding:"12px",marginBottom:"8px",background:"#0f0f1e",borderRadius:"8px"},children:[m.jsx("div",{style:{fontWeight:"bold",marginBottom:"6px"},children:f}),m.jsxs("div",{style:{fontSize:"12px",color:"#999"},children:["💎 ",w," total sessions | 🎯 ",_.pomodoro.dailyXP," XP today"]})]},f)})]})]}),o==="admin"&&i==="GP47"&&m.jsxs("div",{style:{padding:"30px",maxWidth:"600px",margin:"0 auto"},children:[m.jsx("div",{style:{fontSize:"28px",fontWeight:"bold",marginBottom:"10px",color:L},children:"⚙️ Admin Panel"}),m.jsx("div",{style:{fontSize:"13px",color:"#999",marginBottom:"30px"},children:"Reset user stats and levels"}),m.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[m.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:L},children:"🔄 Reset User Levels"}),n.map(f=>{const _=a[f]||Y();return m.jsxs("div",{style:{padding:"15px",marginBottom:"10px",background:"#0f0f1e",borderRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsxs("div",{children:[m.jsx("div",{style:{fontWeight:"bold",marginBottom:"5px"},children:f}),m.jsxs("div",{style:{fontSize:"12px",color:"#999"},children:["Level ",_.pomodoro.level," • ",_.pomodoro.xp," XP"]})]}),m.jsx("button",{onClick:()=>{const w=JSON.parse(JSON.stringify(a));w[f].pomodoro.xp=0,w[f].pomodoro.level=1,w[f].pomodoro.dailyXP=0,c(w),_e(f,w[f]),ne(`✅ Reset ${f}'s level to 1`,"success")},style:{padding:"8px 16px",background:"#ff6b6b",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit"},children:"Reset"})]},f)})]}),m.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[m.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:L},children:"📅 Reset Daily Habits"}),m.jsx("p",{style:{fontSize:"12px",color:"#999",marginBottom:"15px"},children:"Clears today's habit progress (checkboxes, counters) but keeps XP/levels"}),m.jsx("button",{onClick:()=>{if(window.confirm("Reset ALL users daily habits? XP and levels stay the same.")){const f=JSON.parse(JSON.stringify(a));n.forEach(_=>{f[_].habits.forEach(w=>{w.type==="checkbox"||w.type==="counter"?(w.completed=!1,w.type==="counter"&&(w.count=0)):w.type==="pomodoro"&&(w.sessionsCompleted=0,w.completed=!1)}),f[_].pomodoro.sessionsToday=0,f[_].pomodoro.dailyXP=0,f[_].stats.completionPercentage=0,_e(_,f[_])}),c(f),xt({}),ne("✅ Reset all daily habits","success")}},style:{padding:"10px 20px",background:"#4a90e2",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"13px",fontFamily:"inherit"},children:"Reset All Daily Habits"})]}),m.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[m.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:L},children:"🔥 Reset Streaks"}),m.jsx("p",{style:{fontSize:"12px",color:"#999",marginBottom:"15px"},children:"Clears streak counters but keeps best streaks"}),m.jsx("button",{onClick:()=>{if(window.confirm("Reset all current streaks? Best streaks are preserved.")){const f=JSON.parse(JSON.stringify(a));n.forEach(_=>{f[_].habits.forEach(w=>{w.streak=0}),_e(_,f[_])}),c(f),ne("✅ Reset all streaks","success")}},style:{padding:"10px 20px",background:"#f39c12",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"13px",fontFamily:"inherit"},children:"Reset All Streaks"})]}),m.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[m.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:L},children:"⏰ Force Daily Reset"}),m.jsx("p",{style:{fontSize:"12px",color:"#999",marginBottom:"15px"},children:"Manually trigger midnight reset logic"}),m.jsx("button",{onClick:()=>{if(window.confirm("Force daily reset now? Habits will clear and streaks will update.")){z();const f=JSON.parse(JSON.stringify(a));n.forEach(_=>{var w;if(f[_]){const S=new Date;S.setDate(S.getDate()-1);const T=e(S),A=Z[T],B=((w=A==null?void 0:A[_])==null?void 0:w.completed)||!1;f[_].habits.forEach(W=>{W.type==="checkbox"||W.type==="counter"?(W.completed=!1,W.type==="counter"&&(W.count=0),B?(W.streak=(W.streak||0)+1,W.bestStreak=Math.max(W.bestStreak||0,W.streak)):W.streak=0):W.type==="pomodoro"&&(W.sessionsCompleted=0,W.completed=!1,B?(W.streak=(W.streak||0)+1,W.bestStreak=Math.max(W.bestStreak||0,W.streak)):W.streak=0)}),f[_].pomodoro.sessionsToday=0,f[_].pomodoro.dailyXP=0,f[_].stats.completionPercentage=0,_e(_,f[_])}}),c(f),xt({}),localStorage.setItem("lastResetDate",e()),ne("✅ Daily reset forced!","success")}},style:{padding:"10px 20px",background:"#27ae60",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"13px",fontFamily:"inherit"},children:"Force Daily Reset Now"})]}),m.jsxs("div",{style:{background:"#2a1a1a",padding:"20px",borderRadius:"12px",border:"2px solid #ff6b6b"},children:[m.jsx("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"15px",color:"#ff6b6b"},children:"⚠️ Danger Zone"}),m.jsx("button",{onClick:()=>{if(window.confirm("Reset ALL users XP and levels? This cannot be undone!")){const f=JSON.parse(JSON.stringify(a));n.forEach(_=>{f[_].pomodoro.xp=0,f[_].pomodoro.level=1,f[_].pomodoro.dailyXP=0,_e(_,f[_])}),c(f),ne("✅ Reset all users to Level 1","success")}},style:{padding:"12px 24px",background:"#ff6b6b",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontFamily:"inherit"},children:"Reset All Users"})]})]}),m.jsx("div",{style:{position:"fixed",top:"100px",right:"20px",zIndex:1e4,maxWidth:"350px"},children:C.map(f=>m.jsx("div",{style:{padding:"15px 20px",marginBottom:"10px",background:f.type==="success"?"#2d5f2e":"#2a2547",border:`2px solid ${L}`,borderRadius:"10px",color:L,fontWeight:"bold",fontSize:"14px",animation:"slideIn 0.3s ease-out",boxShadow:`0 4px 20px ${L}40`},children:f.message},f.id))}),m.jsx("style",{children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(400px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]})};function ET(){const[t,e]=q.useState(null),[n,r]=q.useState(!0);q.useEffect(()=>qS(Jc,o=>{e(o),r(!1)}),[]);const i=async()=>{try{await QS(Jc)}catch(s){console.error("Error logging out:",s)}};return n?m.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0f0f1e",color:"#c8b6ff",fontFamily:'"Fredoka One", sans-serif',fontSize:"18px"},children:"Loading..."}):t?m.jsxs("div",{style:{position:"relative"},children:[m.jsx("button",{onClick:i,style:{position:"fixed",top:"20px",right:"20px",padding:"10px 20px",background:"#c8b6ff",color:"#0f0f1e",border:"none",borderRadius:"8px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",zIndex:1e3},children:"Logout"}),m.jsx(wT,{user:t})]}):m.jsx(vT,{})}Ua.createRoot(document.getElementById("root")).render(m.jsx(nv.StrictMode,{children:m.jsx(ET,{})}));
