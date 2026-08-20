(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function V_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gp={exports:{}},El={},yp={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rs=Symbol.for("react.element"),G_=Symbol.for("react.portal"),K_=Symbol.for("react.fragment"),q_=Symbol.for("react.strict_mode"),Y_=Symbol.for("react.profiler"),Q_=Symbol.for("react.provider"),X_=Symbol.for("react.context"),J_=Symbol.for("react.forward_ref"),Z_=Symbol.for("react.suspense"),ev=Symbol.for("react.memo"),tv=Symbol.for("react.lazy"),Kd=Symbol.iterator;function nv(t){return t===null||typeof t!="object"?null:(t=Kd&&t[Kd]||t["@@iterator"],typeof t=="function"?t:null)}var _p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vp=Object.assign,wp={};function ci(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||_p}ci.prototype.isReactComponent={};ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ep(){}Ep.prototype=ci.prototype;function eu(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||_p}var tu=eu.prototype=new Ep;tu.constructor=eu;vp(tu,ci.prototype);tu.isPureReactComponent=!0;var qd=Array.isArray,Sp=Object.prototype.hasOwnProperty,nu={current:null},Cp={key:!0,ref:!0,__self:!0,__source:!0};function xp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Sp.call(e,r)&&!Cp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Rs,type:t,key:s,ref:o,props:i,_owner:nu.current}}function rv(t,e){return{$$typeof:Rs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ru(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rs}function iv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yd=/\/+/g;function Zl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iv(""+t.key):e.toString(36)}function uo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Rs:case G_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zl(o,0):r,qd(i)?(n="",t!=null&&(n=t.replace(Yd,"$&/")+"/"),uo(i,e,n,"",function(c){return c})):i!=null&&(ru(i)&&(i=rv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Zl(s,l);o+=uo(s,e,n,a,i)}else if(a=nv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Zl(s,l++),o+=uo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hs(t,e,n){if(t==null)return t;var r=[],i=0;return uo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Be={current:null},ho={transition:null},ov={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ho,ReactCurrentOwner:nu};function kp(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Hs,forEach:function(t,e,n){Hs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hs(t,function(){e++}),e},toArray:function(t){return Hs(t,function(e){return e})||[]},only:function(t){if(!ru(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=ci;q.Fragment=K_;q.Profiler=Y_;q.PureComponent=eu;q.StrictMode=q_;q.Suspense=Z_;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov;q.act=kp;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=vp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Sp.call(e,a)&&!Cp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Rs,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:X_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Q_,_context:t},t.Consumer=t};q.createElement=xp;q.createFactory=function(t){var e=xp.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:J_,render:t}};q.isValidElement=ru;q.lazy=function(t){return{$$typeof:tv,_payload:{_status:-1,_result:t},_init:sv}};q.memo=function(t,e){return{$$typeof:ev,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=ho.transition;ho.transition={};try{t()}finally{ho.transition=e}};q.unstable_act=kp;q.useCallback=function(t,e){return Be.current.useCallback(t,e)};q.useContext=function(t){return Be.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Be.current.useDeferredValue(t)};q.useEffect=function(t,e){return Be.current.useEffect(t,e)};q.useId=function(){return Be.current.useId()};q.useImperativeHandle=function(t,e,n){return Be.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return Be.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Be.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Be.current.useMemo(t,e)};q.useReducer=function(t,e,n){return Be.current.useReducer(t,e,n)};q.useRef=function(t){return Be.current.useRef(t)};q.useState=function(t){return Be.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return Be.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return Be.current.useTransition()};q.version="18.3.1";yp.exports=q;var G=yp.exports;const Ip=V_(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv=G,av=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),uv=Object.prototype.hasOwnProperty,dv=lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hv={key:!0,ref:!0,__self:!0,__source:!0};function Tp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uv.call(e,r)&&!hv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:av,type:t,key:s,ref:o,props:i,_owner:dv.current}}El.Fragment=cv;El.jsx=Tp;El.jsxs=Tp;gp.exports=El;var f=gp.exports,Ua={},Rp={exports:{}},st={},Pp={exports:{}},Np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var b=N.length;N.push(z);e:for(;0<b;){var te=b-1>>>1,me=N[te];if(0<i(me,z))N[te]=z,N[b]=me,b=te;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],b=N.pop();if(b!==z){N[0]=b;e:for(var te=0,me=N.length,cn=me>>>1;te<cn;){var pt=2*(te+1)-1,Fe=N[pt],Ft=pt+1,un=N[Ft];if(0>i(Fe,b))Ft<me&&0>i(un,Fe)?(N[te]=un,N[Ft]=b,te=Ft):(N[te]=Fe,N[pt]=b,te=pt);else if(Ft<me&&0>i(un,b))N[te]=un,N[Ft]=b,te=Ft;else break e}}return z}function i(N,z){var b=N.sortIndex-z.sortIndex;return b!==0?b:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],d=1,u=null,p=3,w=!1,E=!1,C=!1,U=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=N)r(c),z.sortIndex=z.expirationTime,e(a,z);else break;z=n(c)}}function x(N){if(C=!1,_(N),!E)if(n(a)!==null)E=!0,wi(R);else{var z=n(c);z!==null&&Gn(x,z.startTime-N)}}function R(N,z){E=!1,C&&(C=!1,y(L),L=-1),w=!0;var b=p;try{for(_(z),u=n(a);u!==null&&(!(u.expirationTime>z)||N&&!pe());){var te=u.callback;if(typeof te=="function"){u.callback=null,p=u.priorityLevel;var me=te(u.expirationTime<=z);z=t.unstable_now(),typeof me=="function"?u.callback=me:u===n(a)&&r(a),_(z)}else r(a);u=n(a)}if(u!==null)var cn=!0;else{var pt=n(c);pt!==null&&Gn(x,pt.startTime-z),cn=!1}return cn}finally{u=null,p=b,w=!1}}var O=!1,D=null,L=-1,J=5,$=-1;function pe(){return!(t.unstable_now()-$<J)}function ln(){if(D!==null){var N=t.unstable_now();$=N;var z=!0;try{z=D(!0,N)}finally{z?Ae():(O=!1,D=null)}}else O=!1}var Ae;if(typeof m=="function")Ae=function(){m(ln)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,an=ft.port2;ft.port1.onmessage=ln,Ae=function(){an.postMessage(null)}}else Ae=function(){U(ln,0)};function wi(N){D=N,O||(O=!0,Ae())}function Gn(N,z){L=U(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){E||w||(E=!0,wi(R))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var b=p;p=z;try{return N()}finally{p=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var b=p;p=N;try{return z()}finally{p=b}},t.unstable_scheduleCallback=function(N,z,b){var te=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?te+b:te):b=te,N){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=b+me,N={id:d++,callback:z,priorityLevel:N,startTime:b,expirationTime:me,sortIndex:-1},b>te?(N.sortIndex=b,e(c,N),n(a)===null&&N===n(c)&&(C?(y(L),L=-1):C=!0,Gn(x,b-te))):(N.sortIndex=me,e(a,N),E||w||(E=!0,wi(R))),N},t.unstable_shouldYield=pe,t.unstable_wrapCallback=function(N){var z=p;return function(){var b=p;p=z;try{return N.apply(this,arguments)}finally{p=b}}}})(Np);Pp.exports=Np;var fv=Pp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv=G,it=fv;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ap=new Set,ts={};function gr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(ts[t]=e,t=0;t<e.length;t++)Ap.add(e[t])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),za=Object.prototype.hasOwnProperty,mv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qd={},Xd={};function gv(t){return za.call(Xd,t)?!0:za.call(Qd,t)?!1:mv.test(t)?Xd[t]=!0:(Qd[t]=!0,!1)}function yv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _v(t,e,n,r){if(e===null||typeof e>"u"||yv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var iu=/[\-:]([a-z])/g;function su(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(iu,su);Ne[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(iu,su);Ne[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(iu,su);Ne[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function ou(t,e,n,r){var i=Ne.hasOwnProperty(e)?Ne[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_v(e,n,i,r)&&(n=null),r||i===null?gv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sn=pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),xr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),Wa=Symbol.for("react.profiler"),bp=Symbol.for("react.provider"),Op=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),Ba=Symbol.for("react.suspense"),$a=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),Dp=Symbol.for("react.offscreen"),Jd=Symbol.iterator;function Ei(t){return t===null||typeof t!="object"?null:(t=Jd&&t[Jd]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,ea;function Di(t){if(ea===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ea=e&&e[1]||""}return`
`+ea+t}var ta=!1;function na(t,e){if(!t||ta)return"";ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ta=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Di(t):""}function vv(t){switch(t.tag){case 5:return Di(t.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 2:case 15:return t=na(t.type,!1),t;case 11:return t=na(t.type.render,!1),t;case 1:return t=na(t.type,!0),t;default:return""}}function Ha(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kr:return"Fragment";case xr:return"Portal";case Wa:return"Profiler";case lu:return"StrictMode";case Ba:return"Suspense";case $a:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Op:return(t.displayName||"Context")+".Consumer";case bp:return(t._context.displayName||"Context")+".Provider";case au:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cu:return e=t.displayName||null,e!==null?e:Ha(t.type)||"Memo";case fn:e=t._payload,t=t._init;try{return Ha(t(e))}catch{}}return null}function wv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ha(e);case 8:return e===lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ev(t){var e=Lp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gs(t){t._valueTracker||(t._valueTracker=Ev(t))}function Mp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Lp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ro(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Va(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fp(t,e){e=e.checked,e!=null&&ou(t,"checked",e,!1)}function Ga(t,e){Fp(t,e);var n=Mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ka(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ka(t,e.type,Mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function eh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ka(t,e,n){(e!=="number"||Ro(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Li=Array.isArray;function jr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function th(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Li(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mn(n)}}function jp(t,e){var n=Mn(e.value),r=Mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function nh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Up(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ya(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Up(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ks,zp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ks.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ns(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sv=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(t){Sv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zi[e]=zi[t]})});function Wp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zi.hasOwnProperty(t)&&zi[t]?(""+e).trim():e+"px"}function Bp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Cv=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(t,e){if(e){if(Cv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Xa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Za=null,Ur=null,zr=null;function rh(t){if(t=As(t)){if(typeof Za!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Il(e),Za(t.stateNode,t.type,e))}}function $p(t){Ur?zr?zr.push(t):zr=[t]:Ur=t}function Hp(){if(Ur){var t=Ur,e=zr;if(zr=Ur=null,rh(t),e)for(t=0;t<e.length;t++)rh(e[t])}}function Vp(t,e){return t(e)}function Gp(){}var ra=!1;function Kp(t,e,n){if(ra)return t(e,n);ra=!0;try{return Vp(t,e,n)}finally{ra=!1,(Ur!==null||zr!==null)&&(Gp(),Hp())}}function rs(t,e){var n=t.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var ec=!1;if(Qt)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){ec=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{ec=!1}function xv(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Wi=!1,Po=null,No=!1,tc=null,kv={onError:function(t){Wi=!0,Po=t}};function Iv(t,e,n,r,i,s,o,l,a){Wi=!1,Po=null,xv.apply(kv,arguments)}function Tv(t,e,n,r,i,s,o,l,a){if(Iv.apply(this,arguments),Wi){if(Wi){var c=Po;Wi=!1,Po=null}else throw Error(k(198));No||(No=!0,tc=c)}}function yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ih(t){if(yr(t)!==t)throw Error(k(188))}function Rv(t){var e=t.alternate;if(!e){if(e=yr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ih(i),t;if(s===r)return ih(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Yp(t){return t=Rv(t),t!==null?Qp(t):null}function Qp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qp(t);if(e!==null)return e;t=t.sibling}return null}var Xp=it.unstable_scheduleCallback,sh=it.unstable_cancelCallback,Pv=it.unstable_shouldYield,Nv=it.unstable_requestPaint,fe=it.unstable_now,Av=it.unstable_getCurrentPriorityLevel,du=it.unstable_ImmediatePriority,Jp=it.unstable_UserBlockingPriority,Ao=it.unstable_NormalPriority,bv=it.unstable_LowPriority,Zp=it.unstable_IdlePriority,Sl=null,Ot=null;function Ov(t){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:Mv,Dv=Math.log,Lv=Math.LN2;function Mv(t){return t>>>=0,t===0?32:31-(Dv(t)/Lv|0)|0}var qs=64,Ys=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Mi(l):(s&=o,s!==0&&(r=Mi(s)))}else o=n&~i,o!==0?r=Mi(o):s!==0&&(r=Mi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kt(e),i=1<<n,r|=t[n],e&=~i;return r}function Fv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Fv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function nc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function em(){var t=qs;return qs<<=1,!(qs&4194240)&&(qs=64),t}function ia(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ps(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kt(e),t[e]=n}function Uv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function tm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nm,fu,rm,im,sm,rc=!1,Qs=[],xn=null,kn=null,In=null,is=new Map,ss=new Map,mn=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(t,e){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":is.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(e.pointerId)}}function Ci(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=As(e),e!==null&&fu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Wv(t,e,n,r,i){switch(e){case"focusin":return xn=Ci(xn,t,e,n,r,i),!0;case"dragenter":return kn=Ci(kn,t,e,n,r,i),!0;case"mouseover":return In=Ci(In,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return is.set(s,Ci(is.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ss.set(s,Ci(ss.get(s)||null,t,e,n,r,i)),!0}return!1}function om(t){var e=Xn(t.target);if(e!==null){var n=yr(e);if(n!==null){if(e=n.tag,e===13){if(e=qp(n),e!==null){t.blockedOn=e,sm(t.priority,function(){rm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ja=r,n.target.dispatchEvent(r),Ja=null}else return e=As(n),e!==null&&fu(e),t.blockedOn=n,!1;e.shift()}return!0}function lh(t,e,n){fo(t)&&n.delete(e)}function Bv(){rc=!1,xn!==null&&fo(xn)&&(xn=null),kn!==null&&fo(kn)&&(kn=null),In!==null&&fo(In)&&(In=null),is.forEach(lh),ss.forEach(lh)}function xi(t,e){t.blockedOn===e&&(t.blockedOn=null,rc||(rc=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,Bv)))}function os(t){function e(i){return xi(i,t)}if(0<Qs.length){xi(Qs[0],t);for(var n=1;n<Qs.length;n++){var r=Qs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xn!==null&&xi(xn,t),kn!==null&&xi(kn,t),In!==null&&xi(In,t),is.forEach(e),ss.forEach(e),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)om(n),n.blockedOn===null&&mn.shift()}var Wr=sn.ReactCurrentBatchConfig,Oo=!0;function $v(t,e,n,r){var i=X,s=Wr.transition;Wr.transition=null;try{X=1,pu(t,e,n,r)}finally{X=i,Wr.transition=s}}function Hv(t,e,n,r){var i=X,s=Wr.transition;Wr.transition=null;try{X=4,pu(t,e,n,r)}finally{X=i,Wr.transition=s}}function pu(t,e,n,r){if(Oo){var i=ic(t,e,n,r);if(i===null)pa(t,e,r,Do,n),oh(t,r);else if(Wv(i,t,e,n,r))r.stopPropagation();else if(oh(t,r),e&4&&-1<zv.indexOf(t)){for(;i!==null;){var s=As(i);if(s!==null&&nm(s),s=ic(t,e,n,r),s===null&&pa(t,e,r,Do,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pa(t,e,r,null,n)}}var Do=null;function ic(t,e,n,r){if(Do=null,t=uu(r),t=Xn(t),t!==null)if(e=yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Do=t,null}function lm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case du:return 1;case Jp:return 4;case Ao:case bv:return 16;case Zp:return 536870912;default:return 16}default:return 16}}var Sn=null,mu=null,po=null;function am(){if(po)return po;var t,e=mu,n=e.length,r,i="value"in Sn?Sn.value:Sn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return po=i.slice(t,1<r?1-r:void 0)}function mo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xs(){return!0}function ah(){return!1}function ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xs:ah,this.isPropagationStopped=ah,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),e}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gu=ot(ui),Ns=ue({},ui,{view:0,detail:0}),Vv=ot(Ns),sa,oa,ki,Cl=ue({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(sa=t.screenX-ki.screenX,oa=t.screenY-ki.screenY):oa=sa=0,ki=t),sa)},movementY:function(t){return"movementY"in t?t.movementY:oa}}),ch=ot(Cl),Gv=ue({},Cl,{dataTransfer:0}),Kv=ot(Gv),qv=ue({},Ns,{relatedTarget:0}),la=ot(qv),Yv=ue({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=ot(Yv),Xv=ue({},ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jv=ot(Xv),Zv=ue({},ui,{data:0}),uh=ot(Zv),e0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=n0[t])?!!e[t]:!1}function yu(){return r0}var i0=ue({},Ns,{key:function(t){if(t.key){var e=e0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(t){return t.type==="keypress"?mo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s0=ot(i0),o0=ue({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dh=ot(o0),l0=ue({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),a0=ot(l0),c0=ue({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=ot(c0),d0=ue({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=ot(d0),f0=[9,13,27,32],_u=Qt&&"CompositionEvent"in window,Bi=null;Qt&&"documentMode"in document&&(Bi=document.documentMode);var p0=Qt&&"TextEvent"in window&&!Bi,cm=Qt&&(!_u||Bi&&8<Bi&&11>=Bi),hh=" ",fh=!1;function um(t,e){switch(t){case"keyup":return f0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function m0(t,e){switch(t){case"compositionend":return dm(e);case"keypress":return e.which!==32?null:(fh=!0,hh);case"textInput":return t=e.data,t===hh&&fh?null:t;default:return null}}function g0(t,e){if(Ir)return t==="compositionend"||!_u&&um(t,e)?(t=am(),po=mu=Sn=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cm&&e.locale!=="ko"?null:e.data;default:return null}}var y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!y0[t.type]:e==="textarea"}function hm(t,e,n,r){$p(r),e=Lo(e,"onChange"),0<e.length&&(n=new gu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $i=null,ls=null;function _0(t){Cm(t,0)}function xl(t){var e=Pr(t);if(Mp(e))return t}function v0(t,e){if(t==="change")return e}var fm=!1;if(Qt){var aa;if(Qt){var ca="oninput"in document;if(!ca){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),ca=typeof mh.oninput=="function"}aa=ca}else aa=!1;fm=aa&&(!document.documentMode||9<document.documentMode)}function gh(){$i&&($i.detachEvent("onpropertychange",pm),ls=$i=null)}function pm(t){if(t.propertyName==="value"&&xl(ls)){var e=[];hm(e,ls,t,uu(t)),Kp(_0,e)}}function w0(t,e,n){t==="focusin"?(gh(),$i=e,ls=n,$i.attachEvent("onpropertychange",pm)):t==="focusout"&&gh()}function E0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(ls)}function S0(t,e){if(t==="click")return xl(e)}function C0(t,e){if(t==="input"||t==="change")return xl(e)}function x0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rt=typeof Object.is=="function"?Object.is:x0;function as(t,e){if(Rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!za.call(e,i)||!Rt(t[i],e[i]))return!1}return!0}function yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _h(t,e){var n=yh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yh(n)}}function mm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gm(){for(var t=window,e=Ro();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ro(t.document)}return e}function vu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function k0(t){var e=gm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mm(n.ownerDocument.documentElement,n)){if(r!==null&&vu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_h(n,s);var o=_h(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var I0=Qt&&"documentMode"in document&&11>=document.documentMode,Tr=null,sc=null,Hi=null,oc=!1;function vh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||Tr==null||Tr!==Ro(r)||(r=Tr,"selectionStart"in r&&vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&as(Hi,r)||(Hi=r,r=Lo(sc,"onSelect"),0<r.length&&(e=new gu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Tr)))}function Js(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rr={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionend:Js("Transition","TransitionEnd")},ua={},ym={};Qt&&(ym=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function kl(t){if(ua[t])return ua[t];if(!Rr[t])return t;var e=Rr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ym)return ua[t]=e[n];return t}var _m=kl("animationend"),vm=kl("animationiteration"),wm=kl("animationstart"),Em=kl("transitionend"),Sm=new Map,wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(t,e){Sm.set(t,e),gr(e,[t])}for(var da=0;da<wh.length;da++){var ha=wh[da],T0=ha.toLowerCase(),R0=ha[0].toUpperCase()+ha.slice(1);zn(T0,"on"+R0)}zn(_m,"onAnimationEnd");zn(vm,"onAnimationIteration");zn(wm,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(Em,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function Eh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Tv(r,e,void 0,t),t.currentTarget=null}function Cm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Eh(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Eh(i,l,c),s=a}}}if(No)throw t=tc,No=!1,tc=null,t}function ie(t,e){var n=e[dc];n===void 0&&(n=e[dc]=new Set);var r=t+"__bubble";n.has(r)||(xm(e,t,2,!1),n.add(r))}function fa(t,e,n){var r=0;e&&(r|=4),xm(n,t,r,e)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function cs(t){if(!t[Zs]){t[Zs]=!0,Ap.forEach(function(n){n!=="selectionchange"&&(P0.has(n)||fa(n,!1,t),fa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zs]||(e[Zs]=!0,fa("selectionchange",!1,e))}}function xm(t,e,n,r){switch(lm(e)){case 1:var i=$v;break;case 4:i=Hv;break;default:i=pu}n=i.bind(null,e,n,t),i=void 0,!ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Xn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Kp(function(){var c=s,d=uu(n),u=[];e:{var p=Sm.get(t);if(p!==void 0){var w=gu,E=t;switch(t){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":w=s0;break;case"focusin":E="focus",w=la;break;case"focusout":E="blur",w=la;break;case"beforeblur":case"afterblur":w=la;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=a0;break;case _m:case vm:case wm:w=Qv;break;case Em:w=u0;break;case"scroll":w=Vv;break;case"wheel":w=h0;break;case"copy":case"cut":case"paste":w=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=dh}var C=(e&4)!==0,U=!C&&t==="scroll",y=C?p!==null?p+"Capture":null:p;C=[];for(var m=c,_;m!==null;){_=m;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,y!==null&&(x=rs(m,y),x!=null&&C.push(us(m,x,_)))),U)break;m=m.return}0<C.length&&(p=new w(p,E,null,n,d),u.push({event:p,listeners:C}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",p&&n!==Ja&&(E=n.relatedTarget||n.fromElement)&&(Xn(E)||E[Xt]))break e;if((w||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,w?(E=n.relatedTarget||n.toElement,w=c,E=E?Xn(E):null,E!==null&&(U=yr(E),E!==U||E.tag!==5&&E.tag!==6)&&(E=null)):(w=null,E=c),w!==E)){if(C=ch,x="onMouseLeave",y="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(C=dh,x="onPointerLeave",y="onPointerEnter",m="pointer"),U=w==null?p:Pr(w),_=E==null?p:Pr(E),p=new C(x,m+"leave",w,n,d),p.target=U,p.relatedTarget=_,x=null,Xn(d)===c&&(C=new C(y,m+"enter",E,n,d),C.target=_,C.relatedTarget=U,x=C),U=x,w&&E)t:{for(C=w,y=E,m=0,_=C;_;_=Er(_))m++;for(_=0,x=y;x;x=Er(x))_++;for(;0<m-_;)C=Er(C),m--;for(;0<_-m;)y=Er(y),_--;for(;m--;){if(C===y||y!==null&&C===y.alternate)break t;C=Er(C),y=Er(y)}C=null}else C=null;w!==null&&Sh(u,p,w,C,!1),E!==null&&U!==null&&Sh(u,U,E,C,!0)}}e:{if(p=c?Pr(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var R=v0;else if(ph(p))if(fm)R=C0;else{R=E0;var O=w0}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=S0);if(R&&(R=R(t,c))){hm(u,R,n,d);break e}O&&O(t,p,c),t==="focusout"&&(O=p._wrapperState)&&O.controlled&&p.type==="number"&&Ka(p,"number",p.value)}switch(O=c?Pr(c):window,t){case"focusin":(ph(O)||O.contentEditable==="true")&&(Tr=O,sc=c,Hi=null);break;case"focusout":Hi=sc=Tr=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,vh(u,n,d);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":vh(u,n,d)}var D;if(_u)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ir?um(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(cm&&n.locale!=="ko"&&(Ir||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ir&&(D=am()):(Sn=d,mu="value"in Sn?Sn.value:Sn.textContent,Ir=!0)),O=Lo(c,L),0<O.length&&(L=new uh(L,t,null,n,d),u.push({event:L,listeners:O}),D?L.data=D:(D=dm(n),D!==null&&(L.data=D)))),(D=p0?m0(t,n):g0(t,n))&&(c=Lo(c,"onBeforeInput"),0<c.length&&(d=new uh("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=D))}Cm(u,e)})}function us(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=rs(t,n),s!=null&&r.unshift(us(t,s,i)),s=rs(t,e),s!=null&&r.push(us(t,s,i))),t=t.return}return r}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=rs(n,s),a!=null&&o.unshift(us(n,a,l))):i||(a=rs(n,s),a!=null&&o.push(us(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var N0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function Ch(t){return(typeof t=="string"?t:""+t).replace(N0,`
`).replace(A0,"")}function eo(t,e,n){if(e=Ch(e),Ch(t)!==e&&n)throw Error(k(425))}function Mo(){}var lc=null,ac=null;function cc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,O0=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(t){return xh.resolve(null).then(t).catch(D0)}:uc;function D0(t){setTimeout(function(){throw t})}function ma(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),os(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);os(e)}function Tn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var di=Math.random().toString(36).slice(2),bt="__reactFiber$"+di,ds="__reactProps$"+di,Xt="__reactContainer$"+di,dc="__reactEvents$"+di,L0="__reactListeners$"+di,M0="__reactHandles$"+di;function Xn(t){var e=t[bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xt]||n[bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kh(t);t!==null;){if(n=t[bt])return n;t=kh(t)}return e}t=n,n=t.parentNode}return null}function As(t){return t=t[bt]||t[Xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Pr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Il(t){return t[ds]||null}var hc=[],Nr=-1;function Wn(t){return{current:t}}function oe(t){0>Nr||(t.current=hc[Nr],hc[Nr]=null,Nr--)}function re(t,e){Nr++,hc[Nr]=t.current,t.current=e}var Fn={},Me=Wn(Fn),qe=Wn(!1),ir=Fn;function Xr(t,e){var n=t.type.contextTypes;if(!n)return Fn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(t){return t=t.childContextTypes,t!=null}function Fo(){oe(qe),oe(Me)}function Ih(t,e,n){if(Me.current!==Fn)throw Error(k(168));re(Me,e),re(qe,n)}function km(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,wv(t)||"Unknown",i));return ue({},n,r)}function jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fn,ir=Me.current,re(Me,t),re(qe,qe.current),!0}function Th(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=km(t,e,ir),r.__reactInternalMemoizedMergedChildContext=t,oe(qe),oe(Me),re(Me,t)):oe(qe),re(qe,n)}var Wt=null,Tl=!1,ga=!1;function Im(t){Wt===null?Wt=[t]:Wt.push(t)}function F0(t){Tl=!0,Im(t)}function Bn(){if(!ga&&Wt!==null){ga=!0;var t=0,e=X;try{var n=Wt;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wt=null,Tl=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(t+1)),Xp(du,Bn),i}finally{X=e,ga=!1}}return null}var Ar=[],br=0,Uo=null,zo=0,lt=[],at=0,sr=null,Bt=1,$t="";function Kn(t,e){Ar[br++]=zo,Ar[br++]=Uo,Uo=t,zo=e}function Tm(t,e,n){lt[at++]=Bt,lt[at++]=$t,lt[at++]=sr,sr=t;var r=Bt;t=$t;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var s=32-kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bt=1<<32-kt(e)+i|n<<i|r,$t=s+t}else Bt=1<<s|n<<i|r,$t=t}function wu(t){t.return!==null&&(Kn(t,1),Tm(t,1,0))}function Eu(t){for(;t===Uo;)Uo=Ar[--br],Ar[br]=null,zo=Ar[--br],Ar[br]=null;for(;t===sr;)sr=lt[--at],lt[at]=null,$t=lt[--at],lt[at]=null,Bt=lt[--at],lt[at]=null}var rt=null,nt=null,le=!1,vt=null;function Rm(t,e){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rt=t,nt=Tn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rt=t,nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=sr!==null?{id:Bt,overflow:$t}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rt=t,nt=null,!0):!1;default:return!1}}function fc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pc(t){if(le){var e=nt;if(e){var n=e;if(!Rh(t,e)){if(fc(t))throw Error(k(418));e=Tn(n.nextSibling);var r=rt;e&&Rh(t,e)?Rm(r,n):(t.flags=t.flags&-4097|2,le=!1,rt=t)}}else{if(fc(t))throw Error(k(418));t.flags=t.flags&-4097|2,le=!1,rt=t}}}function Ph(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rt=t}function to(t){if(t!==rt)return!1;if(!le)return Ph(t),le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cc(t.type,t.memoizedProps)),e&&(e=nt)){if(fc(t))throw Pm(),Error(k(418));for(;e;)Rm(t,e),e=Tn(e.nextSibling)}if(Ph(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nt=Tn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nt=null}}else nt=rt?Tn(t.stateNode.nextSibling):null;return!0}function Pm(){for(var t=nt;t;)t=Tn(t.nextSibling)}function Jr(){nt=rt=null,le=!1}function Su(t){vt===null?vt=[t]:vt.push(t)}var j0=sn.ReactCurrentBatchConfig;function Ii(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function no(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nh(t){var e=t._init;return e(t._payload)}function Nm(t){function e(y,m){if(t){var _=y.deletions;_===null?(y.deletions=[m],y.flags|=16):_.push(m)}}function n(y,m){if(!t)return null;for(;m!==null;)e(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=An(y,m),y.index=0,y.sibling=null,y}function s(y,m,_){return y.index=_,t?(_=y.alternate,_!==null?(_=_.index,_<m?(y.flags|=2,m):_):(y.flags|=2,m)):(y.flags|=1048576,m)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function l(y,m,_,x){return m===null||m.tag!==6?(m=Ca(_,y.mode,x),m.return=y,m):(m=i(m,_),m.return=y,m)}function a(y,m,_,x){var R=_.type;return R===kr?d(y,m,_.props.children,x,_.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===fn&&Nh(R)===m.type)?(x=i(m,_.props),x.ref=Ii(y,m,_),x.return=y,x):(x=So(_.type,_.key,_.props,null,y.mode,x),x.ref=Ii(y,m,_),x.return=y,x)}function c(y,m,_,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=xa(_,y.mode,x),m.return=y,m):(m=i(m,_.children||[]),m.return=y,m)}function d(y,m,_,x,R){return m===null||m.tag!==7?(m=rr(_,y.mode,x,R),m.return=y,m):(m=i(m,_),m.return=y,m)}function u(y,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ca(""+m,y.mode,_),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vs:return _=So(m.type,m.key,m.props,null,y.mode,_),_.ref=Ii(y,null,m),_.return=y,_;case xr:return m=xa(m,y.mode,_),m.return=y,m;case fn:var x=m._init;return u(y,x(m._payload),_)}if(Li(m)||Ei(m))return m=rr(m,y.mode,_,null),m.return=y,m;no(y,m)}return null}function p(y,m,_,x){var R=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:l(y,m,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Vs:return _.key===R?a(y,m,_,x):null;case xr:return _.key===R?c(y,m,_,x):null;case fn:return R=_._init,p(y,m,R(_._payload),x)}if(Li(_)||Ei(_))return R!==null?null:d(y,m,_,x,null);no(y,_)}return null}function w(y,m,_,x,R){if(typeof x=="string"&&x!==""||typeof x=="number")return y=y.get(_)||null,l(m,y,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vs:return y=y.get(x.key===null?_:x.key)||null,a(m,y,x,R);case xr:return y=y.get(x.key===null?_:x.key)||null,c(m,y,x,R);case fn:var O=x._init;return w(y,m,_,O(x._payload),R)}if(Li(x)||Ei(x))return y=y.get(_)||null,d(m,y,x,R,null);no(m,x)}return null}function E(y,m,_,x){for(var R=null,O=null,D=m,L=m=0,J=null;D!==null&&L<_.length;L++){D.index>L?(J=D,D=null):J=D.sibling;var $=p(y,D,_[L],x);if($===null){D===null&&(D=J);break}t&&D&&$.alternate===null&&e(y,D),m=s($,m,L),O===null?R=$:O.sibling=$,O=$,D=J}if(L===_.length)return n(y,D),le&&Kn(y,L),R;if(D===null){for(;L<_.length;L++)D=u(y,_[L],x),D!==null&&(m=s(D,m,L),O===null?R=D:O.sibling=D,O=D);return le&&Kn(y,L),R}for(D=r(y,D);L<_.length;L++)J=w(D,y,L,_[L],x),J!==null&&(t&&J.alternate!==null&&D.delete(J.key===null?L:J.key),m=s(J,m,L),O===null?R=J:O.sibling=J,O=J);return t&&D.forEach(function(pe){return e(y,pe)}),le&&Kn(y,L),R}function C(y,m,_,x){var R=Ei(_);if(typeof R!="function")throw Error(k(150));if(_=R.call(_),_==null)throw Error(k(151));for(var O=R=null,D=m,L=m=0,J=null,$=_.next();D!==null&&!$.done;L++,$=_.next()){D.index>L?(J=D,D=null):J=D.sibling;var pe=p(y,D,$.value,x);if(pe===null){D===null&&(D=J);break}t&&D&&pe.alternate===null&&e(y,D),m=s(pe,m,L),O===null?R=pe:O.sibling=pe,O=pe,D=J}if($.done)return n(y,D),le&&Kn(y,L),R;if(D===null){for(;!$.done;L++,$=_.next())$=u(y,$.value,x),$!==null&&(m=s($,m,L),O===null?R=$:O.sibling=$,O=$);return le&&Kn(y,L),R}for(D=r(y,D);!$.done;L++,$=_.next())$=w(D,y,L,$.value,x),$!==null&&(t&&$.alternate!==null&&D.delete($.key===null?L:$.key),m=s($,m,L),O===null?R=$:O.sibling=$,O=$);return t&&D.forEach(function(ln){return e(y,ln)}),le&&Kn(y,L),R}function U(y,m,_,x){if(typeof _=="object"&&_!==null&&_.type===kr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Vs:e:{for(var R=_.key,O=m;O!==null;){if(O.key===R){if(R=_.type,R===kr){if(O.tag===7){n(y,O.sibling),m=i(O,_.props.children),m.return=y,y=m;break e}}else if(O.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===fn&&Nh(R)===O.type){n(y,O.sibling),m=i(O,_.props),m.ref=Ii(y,O,_),m.return=y,y=m;break e}n(y,O);break}else e(y,O);O=O.sibling}_.type===kr?(m=rr(_.props.children,y.mode,x,_.key),m.return=y,y=m):(x=So(_.type,_.key,_.props,null,y.mode,x),x.ref=Ii(y,m,_),x.return=y,y=x)}return o(y);case xr:e:{for(O=_.key;m!==null;){if(m.key===O)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(y,m.sibling),m=i(m,_.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else e(y,m);m=m.sibling}m=xa(_,y.mode,x),m.return=y,y=m}return o(y);case fn:return O=_._init,U(y,m,O(_._payload),x)}if(Li(_))return E(y,m,_,x);if(Ei(_))return C(y,m,_,x);no(y,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,_),m.return=y,y=m):(n(y,m),m=Ca(_,y.mode,x),m.return=y,y=m),o(y)):n(y,m)}return U}var Zr=Nm(!0),Am=Nm(!1),Wo=Wn(null),Bo=null,Or=null,Cu=null;function xu(){Cu=Or=Bo=null}function ku(t){var e=Wo.current;oe(Wo),t._currentValue=e}function mc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Br(t,e){Bo=t,Cu=Or=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(Cu!==t)if(t={context:t,memoizedValue:e,next:null},Or===null){if(Bo===null)throw Error(k(308));Or=t,Bo.dependencies={lanes:0,firstContext:t}}else Or=Or.next=t;return e}var Jn=null;function Iu(t){Jn===null?Jn=[t]:Jn.push(t)}function bm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Iu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jt(t,r)}function Jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pn=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Om(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jt(t,n)}return i=r.interleaved,i===null?(e.next=e,Iu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jt(t,n)}function go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hu(t,n)}}function Ah(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $o(t,e,n,r){var i=t.updateQueue;pn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(s!==null){var u=i.baseState;o=0,d=c=a=null,l=s;do{var p=l.lane,w=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=t,C=l;switch(p=e,w=n,C.tag){case 1:if(E=C.payload,typeof E=="function"){u=E.call(w,u,p);break e}u=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=C.payload,p=typeof E=="function"?E.call(w,u,p):E,p==null)break e;u=ue({},u,p);break e;case 2:pn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else w={eventTime:w,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,a=u):d=d.next=w,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(a=u),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);lr|=o,t.lanes=o,t.memoizedState=u}}function bh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var bs={},Dt=Wn(bs),hs=Wn(bs),fs=Wn(bs);function Zn(t){if(t===bs)throw Error(k(174));return t}function Ru(t,e){switch(re(fs,e),re(hs,t),re(Dt,bs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ya(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ya(e,t)}oe(Dt),re(Dt,e)}function ei(){oe(Dt),oe(hs),oe(fs)}function Dm(t){Zn(fs.current);var e=Zn(Dt.current),n=Ya(e,t.type);e!==n&&(re(hs,t),re(Dt,n))}function Pu(t){hs.current===t&&(oe(Dt),oe(hs))}var ae=Wn(0);function Ho(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ya=[];function Nu(){for(var t=0;t<ya.length;t++)ya[t]._workInProgressVersionPrimary=null;ya.length=0}var yo=sn.ReactCurrentDispatcher,_a=sn.ReactCurrentBatchConfig,or=0,ce=null,_e=null,Se=null,Vo=!1,Vi=!1,ps=0,U0=0;function be(){throw Error(k(321))}function Au(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rt(t[n],e[n]))return!1;return!0}function bu(t,e,n,r,i,s){if(or=s,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yo.current=t===null||t.memoizedState===null?$0:H0,t=n(r,i),Vi){s=0;do{if(Vi=!1,ps=0,25<=s)throw Error(k(301));s+=1,Se=_e=null,e.updateQueue=null,yo.current=V0,t=n(r,i)}while(Vi)}if(yo.current=Go,e=_e!==null&&_e.next!==null,or=0,Se=_e=ce=null,Vo=!1,e)throw Error(k(300));return t}function Ou(){var t=ps!==0;return ps=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ce.memoizedState=Se=t:Se=Se.next=t,Se}function ht(){if(_e===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=Se===null?ce.memoizedState:Se.next;if(e!==null)Se=e,_e=t;else{if(t===null)throw Error(k(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Se===null?ce.memoizedState=Se=t:Se=Se.next=t}return Se}function ms(t,e){return typeof e=="function"?e(t):e}function va(t){var e=ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var d=c.lane;if((or&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=u,o=r):a=a.next=u,ce.lanes|=d,lr|=d}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,Rt(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ce.lanes|=s,lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wa(t){var e=ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rt(s,e.memoizedState)||(Ve=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Lm(){}function Mm(t,e){var n=ce,r=ht(),i=e(),s=!Rt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,Du(Um.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,gs(9,jm.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(k(349));or&30||Fm(n,e,i)}return i}function Fm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jm(t,e,n,r){e.value=n,e.getSnapshot=r,zm(e)&&Wm(t)}function Um(t,e,n){return n(function(){zm(e)&&Wm(t)})}function zm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rt(t,n)}catch{return!0}}function Wm(t){var e=Jt(t,1);e!==null&&It(e,t,1,-1)}function Oh(t){var e=At();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:t},e.queue=t,t=t.dispatch=B0.bind(null,ce,t),[e.memoizedState,t]}function gs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Bm(){return ht().memoizedState}function _o(t,e,n,r){var i=At();ce.flags|=t,i.memoizedState=gs(1|e,n,void 0,r===void 0?null:r)}function Rl(t,e,n,r){var i=ht();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&Au(r,o.deps)){i.memoizedState=gs(e,n,s,r);return}}ce.flags|=t,i.memoizedState=gs(1|e,n,s,r)}function Dh(t,e){return _o(8390656,8,t,e)}function Du(t,e){return Rl(2048,8,t,e)}function $m(t,e){return Rl(4,2,t,e)}function Hm(t,e){return Rl(4,4,t,e)}function Vm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gm(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4,4,Vm.bind(null,e,t),n)}function Lu(){}function Km(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Au(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function qm(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Au(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ym(t,e,n){return or&21?(Rt(n,e)||(n=em(),ce.lanes|=n,lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n)}function z0(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=_a.transition;_a.transition={};try{t(!1),e()}finally{X=n,_a.transition=r}}function Qm(){return ht().memoizedState}function W0(t,e,n){var r=Nn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xm(t))Jm(e,n);else if(n=bm(t,e,n,r),n!==null){var i=ze();It(n,t,r,i),Zm(n,e,r)}}function B0(t,e,n){var r=Nn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xm(t))Jm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Rt(l,o)){var a=e.interleaved;a===null?(i.next=i,Iu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=bm(t,e,i,r),n!==null&&(i=ze(),It(n,t,r,i),Zm(n,e,r))}}function Xm(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function Jm(t,e){Vi=Vo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Zm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hu(t,n)}}var Go={readContext:dt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},$0={readContext:dt,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:Dh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_o(4194308,4,Vm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _o(4194308,4,t,e)},useInsertionEffect:function(t,e){return _o(4,2,t,e)},useMemo:function(t,e){var n=At();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=At();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=W0.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:Oh,useDebugValue:Lu,useDeferredValue:function(t){return At().memoizedState=t},useTransition:function(){var t=Oh(!1),e=t[0];return t=z0.bind(null,t[1]),At().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ce,i=At();if(le){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),ke===null)throw Error(k(349));or&30||Fm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Dh(Um.bind(null,r,s,t),[t]),r.flags|=2048,gs(9,jm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=At(),e=ke.identifierPrefix;if(le){var n=$t,r=Bt;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ps++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=U0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},H0={readContext:dt,useCallback:Km,useContext:dt,useEffect:Du,useImperativeHandle:Gm,useInsertionEffect:$m,useLayoutEffect:Hm,useMemo:qm,useReducer:va,useRef:Bm,useState:function(){return va(ms)},useDebugValue:Lu,useDeferredValue:function(t){var e=ht();return Ym(e,_e.memoizedState,t)},useTransition:function(){var t=va(ms)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Lm,useSyncExternalStore:Mm,useId:Qm,unstable_isNewReconciler:!1},V0={readContext:dt,useCallback:Km,useContext:dt,useEffect:Du,useImperativeHandle:Gm,useInsertionEffect:$m,useLayoutEffect:Hm,useMemo:qm,useReducer:wa,useRef:Bm,useState:function(){return wa(ms)},useDebugValue:Lu,useDeferredValue:function(t){var e=ht();return _e===null?e.memoizedState=t:Ym(e,_e.memoizedState,t)},useTransition:function(){var t=wa(ms)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Lm,useSyncExternalStore:Mm,useId:Qm,unstable_isNewReconciler:!1};function yt(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pl={isMounted:function(t){return(t=t._reactInternals)?yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ze(),i=Nn(t),s=qt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(It(e,t,i,r),go(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ze(),i=Nn(t),s=qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(It(e,t,i,r),go(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),r=Nn(t),i=qt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rn(t,i,r),e!==null&&(It(e,t,r,n),go(e,t,r))}};function Lh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!as(n,r)||!as(i,s):!0}function eg(t,e,n){var r=!1,i=Fn,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Ye(e)?ir:Me.current,r=e.contextTypes,s=(r=r!=null)?Xr(t,i):Fn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pl.enqueueReplaceState(e,e.state,null)}function yc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Tu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Ye(e)?ir:Me.current,i.context=Xr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pl.enqueueReplaceState(i,i.state,null),$o(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,e){try{var n="",r=e;do n+=vv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ea(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _c(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var G0=typeof WeakMap=="function"?WeakMap:Map;function tg(t,e,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){qo||(qo=!0,Rc=r),_c(t,e)},n}function ng(t,e,n){n=qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_c(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_c(t,e),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new G0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ow.bind(null,t,e,n),e.then(t,t))}function jh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qt(-1,1),e.tag=2,Rn(n,e,1))),n.lanes|=1),t)}var K0=sn.ReactCurrentOwner,Ve=!1;function Ue(t,e,n,r){e.child=t===null?Am(e,null,n,r):Zr(e,t.child,n,r)}function zh(t,e,n,r,i){n=n.render;var s=e.ref;return Br(e,i),r=bu(t,e,n,r,s,i),n=Ou(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(le&&n&&wu(e),e.flags|=1,Ue(t,e,r,i),e.child)}function Wh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$u(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,rg(t,e,s,r,i)):(t=So(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:as,n(o,r)&&t.ref===e.ref)return Zt(t,e,i)}return e.flags|=1,t=An(s,r),t.ref=e.ref,t.return=e,e.child=t}function rg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(as(s,r)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,Zt(t,e,i)}return vc(t,e,n,r,i)}function ig(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Lr,tt),tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(Lr,tt),tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(Lr,tt),tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(Lr,tt),tt|=r;return Ue(t,e,i,n),e.child}function sg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vc(t,e,n,r,i){var s=Ye(n)?ir:Me.current;return s=Xr(e,s),Br(e,i),n=bu(t,e,n,r,s,i),r=Ou(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(le&&r&&wu(e),e.flags|=1,Ue(t,e,n,i),e.child)}function Bh(t,e,n,r,i){if(Ye(n)){var s=!0;jo(e)}else s=!1;if(Br(e,i),e.stateNode===null)vo(t,e),eg(e,n,r),yc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=dt(c):(c=Ye(n)?ir:Me.current,c=Xr(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Mh(e,o,r,c),pn=!1;var p=e.memoizedState;o.state=p,$o(e,r,o,i),a=e.memoizedState,l!==r||p!==a||qe.current||pn?(typeof d=="function"&&(gc(e,n,d,r),a=e.memoizedState),(l=pn||Lh(e,n,l,r,p,a,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Om(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:yt(e.type,l),o.props=c,u=e.pendingProps,p=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=dt(a):(a=Ye(n)?ir:Me.current,a=Xr(e,a));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==u||p!==a)&&Mh(e,o,r,a),pn=!1,p=e.memoizedState,o.state=p,$o(e,r,o,i);var E=e.memoizedState;l!==u||p!==E||qe.current||pn?(typeof w=="function"&&(gc(e,n,w,r),E=e.memoizedState),(c=pn||Lh(e,n,c,r,p,E,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return wc(t,e,n,r,s,i)}function wc(t,e,n,r,i,s){sg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Th(e,n,!1),Zt(t,e,s);r=e.stateNode,K0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zr(e,t.child,null,s),e.child=Zr(e,null,l,s)):Ue(t,e,l,s),e.memoizedState=r.state,i&&Th(e,n,!0),e.child}function og(t){var e=t.stateNode;e.pendingContext?Ih(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ih(t,e.context,!1),Ru(t,e.containerInfo)}function $h(t,e,n,r,i){return Jr(),Su(i),e.flags|=256,Ue(t,e,n,r),e.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function Sc(t){return{baseLanes:t,cachePool:null,transitions:null}}function lg(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(ae,i&1),t===null)return pc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bl(o,r,0,null),t=rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sc(n),e.memoizedState=Ec,t):Mu(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return q0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=An(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=An(l,s):(s=rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ec,r}return s=t.child,t=s.sibling,r=An(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Mu(t,e){return e=bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ro(t,e,n,r){return r!==null&&Su(r),Zr(e,t.child,null,n),t=Mu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function q0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ea(Error(k(422))),ro(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bl({mode:"visible",children:r.children},i,0,null),s=rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zr(e,t.child,null,o),e.child.memoizedState=Sc(o),e.memoizedState=Ec,s);if(!(e.mode&1))return ro(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=Ea(s,r,void 0),ro(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ve||l){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jt(t,i),It(r,t,i,-1))}return Bu(),r=Ea(Error(k(421))),ro(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,nt=Tn(i.nextSibling),rt=e,le=!0,vt=null,t!==null&&(lt[at++]=Bt,lt[at++]=$t,lt[at++]=sr,Bt=t.id,$t=t.overflow,sr=e),e=Mu(e,r.children),e.flags|=4096,e)}function Hh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mc(t.return,e,n)}function Sa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ag(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ue(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hh(t,n,e);else if(t.tag===19)Hh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ho(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ho(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sa(e,!0,n,null,s);break;case"together":Sa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=An(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=An(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Y0(t,e,n){switch(e.tag){case 3:og(e),Jr();break;case 5:Dm(e);break;case 1:Ye(e.type)&&jo(e);break;case 4:Ru(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(Wo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?lg(t,e,n):(re(ae,ae.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);re(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ag(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,ig(t,e,n)}return Zt(t,e,n)}var cg,Cc,ug,dg;cg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cc=function(){};ug=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zn(Dt.current);var s=null;switch(n){case"input":i=Va(t,i),r=Va(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=qa(t,i),r=qa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Mo)}Qa(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ts.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ts.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&ie("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};dg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ti(t,e){if(!le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Q0(t,e,n){var r=e.pendingProps;switch(Eu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return Ye(e.type)&&Fo(),Oe(e),null;case 3:return r=e.stateNode,ei(),oe(qe),oe(Me),Nu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(to(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vt!==null&&(Ac(vt),vt=null))),Cc(t,e),Oe(e),null;case 5:Pu(e);var i=Zn(fs.current);if(n=e.type,t!==null&&e.stateNode!=null)ug(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Oe(e),null}if(t=Zn(Dt.current),to(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bt]=e,r[ds]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Fi.length;i++)ie(Fi[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Zd(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":th(r,s),ie("invalid",r)}Qa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&eo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&eo(r.textContent,l,t),i=["children",""+l]):ts.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Gs(r),eh(r,s,!0);break;case"textarea":Gs(r),nh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Mo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Up(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bt]=e,t[ds]=r,cg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xa(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fi.length;i++)ie(Fi[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":Zd(t,r),i=Va(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),ie("invalid",t);break;case"textarea":th(t,r),i=qa(t,r),ie("invalid",t);break;default:i=r}Qa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Bp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&zp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ns(t,a):typeof a=="number"&&ns(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ts.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ie("scroll",t):a!=null&&ou(t,s,a,o))}switch(n){case"input":Gs(t),eh(t,r,!1);break;case"textarea":Gs(t),nh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?jr(t,!!r.multiple,s,!1):r.defaultValue!=null&&jr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)dg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Zn(fs.current),Zn(Dt.current),to(e)){if(r=e.stateNode,n=e.memoizedProps,r[bt]=e,(s=r.nodeValue!==n)&&(t=rt,t!==null))switch(t.tag){case 3:eo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=e,e.stateNode=r}return Oe(e),null;case 13:if(oe(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(le&&nt!==null&&e.mode&1&&!(e.flags&128))Pm(),Jr(),e.flags|=98560,s=!1;else if(s=to(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[bt]=e}else Jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),s=!1}else vt!==null&&(Ac(vt),vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?we===0&&(we=3):Bu())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return ei(),Cc(t,e),t===null&&cs(e.stateNode.containerInfo),Oe(e),null;case 10:return ku(e.type._context),Oe(e),null;case 17:return Ye(e.type)&&Fo(),Oe(e),null;case 19:if(oe(ae),s=e.memoizedState,s===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ti(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ho(t),o!==null){for(e.flags|=128,Ti(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>ni&&(e.flags|=128,r=!0,Ti(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ho(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ti(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!le)return Oe(e),null}else 2*fe()-s.renderingStartTime>ni&&n!==1073741824&&(e.flags|=128,r=!0,Ti(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=ae.current,re(ae,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return Wu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tt&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function X0(t,e){switch(Eu(e),e.tag){case 1:return Ye(e.type)&&Fo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ei(),oe(qe),oe(Me),Nu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pu(e),null;case 13:if(oe(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(ae),null;case 4:return ei(),null;case 10:return ku(e.type._context),null;case 22:case 23:return Wu(),null;case 24:return null;default:return null}}var io=!1,De=!1,J0=typeof WeakSet=="function"?WeakSet:Set,A=null;function Dr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(t,e,r)}else n.current=null}function xc(t,e,n){try{n()}catch(r){de(t,e,r)}}var Vh=!1;function Z0(t,e){if(lc=Oo,t=gm(),vu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,d=0,u=t,p=null;t:for(;;){for(var w;u!==n||i!==0&&u.nodeType!==3||(l=o+i),u!==s||r!==0&&u.nodeType!==3||(a=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(w=u.firstChild)!==null;)p=u,u=w;for(;;){if(u===t)break t;if(p===n&&++c===i&&(l=o),p===s&&++d===r&&(a=o),(w=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=w}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ac={focusedElem:t,selectionRange:n},Oo=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var C=E.memoizedProps,U=E.memoizedState,y=e.stateNode,m=y.getSnapshotBeforeUpdate(e.elementType===e.type?C:yt(e.type,C),U);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){de(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return E=Vh,Vh=!1,E}function Gi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xc(e,n,s)}i=i.next}while(i!==r)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hg(t){var e=t.alternate;e!==null&&(t.alternate=null,hg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bt],delete e[ds],delete e[dc],delete e[L0],delete e[M0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fg(t){return t.tag===5||t.tag===3||t.tag===4}function Gh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ic(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mo));else if(r!==4&&(t=t.child,t!==null))for(Ic(t,e,n),t=t.sibling;t!==null;)Ic(t,e,n),t=t.sibling}function Tc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tc(t,e,n),t=t.sibling;t!==null;)Tc(t,e,n),t=t.sibling}var Te=null,_t=!1;function dn(t,e,n){for(n=n.child;n!==null;)pg(t,e,n),n=n.sibling}function pg(t,e,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:De||Dr(n,e);case 6:var r=Te,i=_t;Te=null,dn(t,e,n),Te=r,_t=i,Te!==null&&(_t?(t=Te,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(_t?(t=Te,n=n.stateNode,t.nodeType===8?ma(t.parentNode,n):t.nodeType===1&&ma(t,n),os(t)):ma(Te,n.stateNode));break;case 4:r=Te,i=_t,Te=n.stateNode.containerInfo,_t=!0,dn(t,e,n),Te=r,_t=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xc(n,e,o),i=i.next}while(i!==r)}dn(t,e,n);break;case 1:if(!De&&(Dr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){de(n,e,l)}dn(t,e,n);break;case 21:dn(t,e,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,dn(t,e,n),De=r):dn(t,e,n);break;default:dn(t,e,n)}}function Kh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new J0),e.forEach(function(r){var i=aw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Te=l.stateNode,_t=!1;break e;case 3:Te=l.stateNode.containerInfo,_t=!0;break e;case 4:Te=l.stateNode.containerInfo,_t=!0;break e}l=l.return}if(Te===null)throw Error(k(160));pg(s,o,i),Te=null,_t=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){de(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mg(e,t),e=e.sibling}function mg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gt(e,t),Nt(t),r&4){try{Gi(3,t,t.return),Nl(3,t)}catch(C){de(t,t.return,C)}try{Gi(5,t,t.return)}catch(C){de(t,t.return,C)}}break;case 1:gt(e,t),Nt(t),r&512&&n!==null&&Dr(n,n.return);break;case 5:if(gt(e,t),Nt(t),r&512&&n!==null&&Dr(n,n.return),t.flags&32){var i=t.stateNode;try{ns(i,"")}catch(C){de(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Fp(i,s),Xa(l,o);var c=Xa(l,s);for(o=0;o<a.length;o+=2){var d=a[o],u=a[o+1];d==="style"?Bp(i,u):d==="dangerouslySetInnerHTML"?zp(i,u):d==="children"?ns(i,u):ou(i,d,u,c)}switch(l){case"input":Ga(i,s);break;case"textarea":jp(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?jr(i,!!s.multiple,w,!1):p!==!!s.multiple&&(s.defaultValue!=null?jr(i,!!s.multiple,s.defaultValue,!0):jr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ds]=s}catch(C){de(t,t.return,C)}}break;case 6:if(gt(e,t),Nt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){de(t,t.return,C)}}break;case 3:if(gt(e,t),Nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{os(e.containerInfo)}catch(C){de(t,t.return,C)}break;case 4:gt(e,t),Nt(t);break;case 13:gt(e,t),Nt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Uu=fe())),r&4&&Kh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(De=(c=De)||d,gt(e,t),De=c):gt(e,t),Nt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(u=A=d;A!==null;){switch(p=A,w=p.child,p.tag){case 0:case 11:case 14:case 15:Gi(4,p,p.return);break;case 1:Dr(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(C){de(r,n,C)}}break;case 5:Dr(p,p.return);break;case 22:if(p.memoizedState!==null){Yh(u);continue}}w!==null?(w.return=p,A=w):Yh(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=u.stateNode,a=u.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Wp("display",o))}catch(C){de(t,t.return,C)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(C){de(t,t.return,C)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:gt(e,t),Nt(t),r&4&&Kh(t);break;case 21:break;default:gt(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fg(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ns(i,""),r.flags&=-33);var s=Gh(t);Tc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Gh(t);Ic(t,l,o);break;default:throw Error(k(161))}}catch(a){de(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ew(t,e,n){A=t,gg(t)}function gg(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||io;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||De;l=io;var c=De;if(io=o,(De=a)&&!c)for(A=i;A!==null;)o=A,a=o.child,o.tag===22&&o.memoizedState!==null?Qh(i):a!==null?(a.return=o,A=a):Qh(i);for(;s!==null;)A=s,gg(s),s=s.sibling;A=i,io=l,De=c}qh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):qh(t)}}function qh(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:De||Nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&os(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}De||e.flags&512&&kc(e)}catch(p){de(e,e.return,p)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Yh(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Qh(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(a){de(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){de(e,i,a)}}var s=e.return;try{kc(e)}catch(a){de(e,s,a)}break;case 5:var o=e.return;try{kc(e)}catch(a){de(e,o,a)}}}catch(a){de(e,e.return,a)}if(e===t){A=null;break}var l=e.sibling;if(l!==null){l.return=e.return,A=l;break}A=e.return}}var tw=Math.ceil,Ko=sn.ReactCurrentDispatcher,Fu=sn.ReactCurrentOwner,ut=sn.ReactCurrentBatchConfig,Y=0,ke=null,ye=null,Pe=0,tt=0,Lr=Wn(0),we=0,ys=null,lr=0,Al=0,ju=0,Ki=null,He=null,Uu=0,ni=1/0,zt=null,qo=!1,Rc=null,Pn=null,so=!1,Cn=null,Yo=0,qi=0,Pc=null,wo=-1,Eo=0;function ze(){return Y&6?fe():wo!==-1?wo:wo=fe()}function Nn(t){return t.mode&1?Y&2&&Pe!==0?Pe&-Pe:j0.transition!==null?(Eo===0&&(Eo=em()),Eo):(t=X,t!==0||(t=window.event,t=t===void 0?16:lm(t.type)),t):1}function It(t,e,n,r){if(50<qi)throw qi=0,Pc=null,Error(k(185));Ps(t,n,r),(!(Y&2)||t!==ke)&&(t===ke&&(!(Y&2)&&(Al|=n),we===4&&gn(t,Pe)),Qe(t,r),n===1&&Y===0&&!(e.mode&1)&&(ni=fe()+500,Tl&&Bn()))}function Qe(t,e){var n=t.callbackNode;jv(t,e);var r=bo(t,t===ke?Pe:0);if(r===0)n!==null&&sh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sh(n),e===1)t.tag===0?F0(Xh.bind(null,t)):Im(Xh.bind(null,t)),O0(function(){!(Y&6)&&Bn()}),n=null;else{switch(tm(r)){case 1:n=du;break;case 4:n=Jp;break;case 16:n=Ao;break;case 536870912:n=Zp;break;default:n=Ao}n=xg(n,yg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yg(t,e){if(wo=-1,Eo=0,Y&6)throw Error(k(327));var n=t.callbackNode;if($r()&&t.callbackNode!==n)return null;var r=bo(t,t===ke?Pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Qo(t,r);else{e=r;var i=Y;Y|=2;var s=vg();(ke!==t||Pe!==e)&&(zt=null,ni=fe()+500,nr(t,e));do try{iw();break}catch(l){_g(t,l)}while(!0);xu(),Ko.current=s,Y=i,ye!==null?e=0:(ke=null,Pe=0,e=we)}if(e!==0){if(e===2&&(i=nc(t),i!==0&&(r=i,e=Nc(t,i))),e===1)throw n=ys,nr(t,0),gn(t,r),Qe(t,fe()),n;if(e===6)gn(t,r);else{if(i=t.current.alternate,!(r&30)&&!nw(i)&&(e=Qo(t,r),e===2&&(s=nc(t),s!==0&&(r=s,e=Nc(t,s))),e===1))throw n=ys,nr(t,0),gn(t,r),Qe(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:qn(t,He,zt);break;case 3:if(gn(t,r),(r&130023424)===r&&(e=Uu+500-fe(),10<e)){if(bo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uc(qn.bind(null,t,He,zt),e);break}qn(t,He,zt);break;case 4:if(gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tw(r/1960))-r,10<r){t.timeoutHandle=uc(qn.bind(null,t,He,zt),r);break}qn(t,He,zt);break;case 5:qn(t,He,zt);break;default:throw Error(k(329))}}}return Qe(t,fe()),t.callbackNode===n?yg.bind(null,t):null}function Nc(t,e){var n=Ki;return t.current.memoizedState.isDehydrated&&(nr(t,e).flags|=256),t=Qo(t,e),t!==2&&(e=He,He=n,e!==null&&Ac(e)),t}function Ac(t){He===null?He=t:He.push.apply(He,t)}function nw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gn(t,e){for(e&=~ju,e&=~Al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kt(e),r=1<<n;t[n]=-1,e&=~r}}function Xh(t){if(Y&6)throw Error(k(327));$r();var e=bo(t,0);if(!(e&1))return Qe(t,fe()),null;var n=Qo(t,e);if(t.tag!==0&&n===2){var r=nc(t);r!==0&&(e=r,n=Nc(t,r))}if(n===1)throw n=ys,nr(t,0),gn(t,e),Qe(t,fe()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qn(t,He,zt),Qe(t,fe()),null}function zu(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(ni=fe()+500,Tl&&Bn())}}function ar(t){Cn!==null&&Cn.tag===0&&!(Y&6)&&$r();var e=Y;Y|=1;var n=ut.transition,r=X;try{if(ut.transition=null,X=1,t)return t()}finally{X=r,ut.transition=n,Y=e,!(Y&6)&&Bn()}}function Wu(){tt=Lr.current,oe(Lr)}function nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,b0(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Eu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fo();break;case 3:ei(),oe(qe),oe(Me),Nu();break;case 5:Pu(r);break;case 4:ei();break;case 13:oe(ae);break;case 19:oe(ae);break;case 10:ku(r.type._context);break;case 22:case 23:Wu()}n=n.return}if(ke=t,ye=t=An(t.current,null),Pe=tt=e,we=0,ys=null,ju=Al=lr=0,He=Ki=null,Jn!==null){for(e=0;e<Jn.length;e++)if(n=Jn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jn=null}return t}function _g(t,e){do{var n=ye;try{if(xu(),yo.current=Go,Vo){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vo=!1}if(or=0,Se=_e=ce=null,Vi=!1,ps=0,Fu.current=null,n===null||n.return===null){we=1,ys=e,ye=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Pe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=jh(o);if(w!==null){w.flags&=-257,Uh(w,o,l,s,e),w.mode&1&&Fh(s,c,e),e=w,a=c;var E=e.updateQueue;if(E===null){var C=new Set;C.add(a),e.updateQueue=C}else E.add(a);break e}else{if(!(e&1)){Fh(s,c,e),Bu();break e}a=Error(k(426))}}else if(le&&l.mode&1){var U=jh(o);if(U!==null){!(U.flags&65536)&&(U.flags|=256),Uh(U,o,l,s,e),Su(ti(a,l));break e}}s=a=ti(a,l),we!==4&&(we=2),Ki===null?Ki=[s]:Ki.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=tg(s,a,e);Ah(s,y);break e;case 1:l=a;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Pn===null||!Pn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=ng(s,l,e);Ah(s,x);break e}}s=s.return}while(s!==null)}Eg(n)}catch(R){e=R,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function vg(){var t=Ko.current;return Ko.current=Go,t===null?Go:t}function Bu(){(we===0||we===3||we===2)&&(we=4),ke===null||!(lr&268435455)&&!(Al&268435455)||gn(ke,Pe)}function Qo(t,e){var n=Y;Y|=2;var r=vg();(ke!==t||Pe!==e)&&(zt=null,nr(t,e));do try{rw();break}catch(i){_g(t,i)}while(!0);if(xu(),Y=n,Ko.current=r,ye!==null)throw Error(k(261));return ke=null,Pe=0,we}function rw(){for(;ye!==null;)wg(ye)}function iw(){for(;ye!==null&&!Pv();)wg(ye)}function wg(t){var e=Cg(t.alternate,t,tt);t.memoizedProps=t.pendingProps,e===null?Eg(t):ye=e,Fu.current=null}function Eg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=X0(n,e),n!==null){n.flags&=32767,ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ye=null;return}}else if(n=Q0(n,e,tt),n!==null){ye=n;return}if(e=e.sibling,e!==null){ye=e;return}ye=e=t}while(e!==null);we===0&&(we=5)}function qn(t,e,n){var r=X,i=ut.transition;try{ut.transition=null,X=1,sw(t,e,n,r)}finally{ut.transition=i,X=r}return null}function sw(t,e,n,r){do $r();while(Cn!==null);if(Y&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Uv(t,s),t===ke&&(ye=ke=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,xg(Ao,function(){return $r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ut.transition,ut.transition=null;var o=X;X=1;var l=Y;Y|=4,Fu.current=null,Z0(t,n),mg(n,t),k0(ac),Oo=!!lc,ac=lc=null,t.current=n,ew(n),Nv(),Y=l,X=o,ut.transition=s}else t.current=n;if(so&&(so=!1,Cn=t,Yo=i),s=t.pendingLanes,s===0&&(Pn=null),Ov(n.stateNode),Qe(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qo)throw qo=!1,t=Rc,Rc=null,t;return Yo&1&&t.tag!==0&&$r(),s=t.pendingLanes,s&1?t===Pc?qi++:(qi=0,Pc=t):qi=0,Bn(),null}function $r(){if(Cn!==null){var t=tm(Yo),e=ut.transition,n=X;try{if(ut.transition=null,X=16>t?16:t,Cn===null)var r=!1;else{if(t=Cn,Cn=null,Yo=0,Y&6)throw Error(k(331));var i=Y;for(Y|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(A=c;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Gi(8,d,s)}var u=d.child;if(u!==null)u.return=d,A=u;else for(;A!==null;){d=A;var p=d.sibling,w=d.return;if(hg(d),d===c){A=null;break}if(p!==null){p.return=w,A=p;break}A=w}}}var E=s.alternate;if(E!==null){var C=E.child;if(C!==null){E.child=null;do{var U=C.sibling;C.sibling=null,C=U}while(C!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gi(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,A=y;break e}A=s.return}}var m=t.current;for(A=m;A!==null;){o=A;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,A=_;else e:for(o=m;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nl(9,l)}}catch(R){de(l,l.return,R)}if(l===o){A=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,A=x;break e}A=l.return}}if(Y=i,Bn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Sl,t)}catch{}r=!0}return r}finally{X=n,ut.transition=e}}return!1}function Jh(t,e,n){e=ti(n,e),e=tg(t,e,1),t=Rn(t,e,1),e=ze(),t!==null&&(Ps(t,1,e),Qe(t,e))}function de(t,e,n){if(t.tag===3)Jh(t,t,n);else for(;e!==null;){if(e.tag===3){Jh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){t=ti(n,t),t=ng(e,t,1),e=Rn(e,t,1),t=ze(),e!==null&&(Ps(e,1,t),Qe(e,t));break}}e=e.return}}function ow(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Pe&n)===n&&(we===4||we===3&&(Pe&130023424)===Pe&&500>fe()-Uu?nr(t,0):ju|=n),Qe(t,e)}function Sg(t,e){e===0&&(t.mode&1?(e=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):e=1);var n=ze();t=Jt(t,e),t!==null&&(Ps(t,e,n),Qe(t,n))}function lw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sg(t,n)}function aw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),Sg(t,n)}var Cg;Cg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qe.current)Ve=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ve=!1,Y0(t,e,n);Ve=!!(t.flags&131072)}else Ve=!1,le&&e.flags&1048576&&Tm(e,zo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vo(t,e),t=e.pendingProps;var i=Xr(e,Me.current);Br(e,n),i=bu(null,e,r,t,i,n);var s=Ou();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ye(r)?(s=!0,jo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tu(e),i.updater=Pl,e.stateNode=i,i._reactInternals=e,yc(e,r,t,n),e=wc(null,e,r,!0,s,n)):(e.tag=0,le&&s&&wu(e),Ue(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uw(r),t=yt(r,t),i){case 0:e=vc(null,e,r,t,n);break e;case 1:e=Bh(null,e,r,t,n);break e;case 11:e=zh(null,e,r,t,n);break e;case 14:e=Wh(null,e,r,yt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),vc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Bh(t,e,r,i,n);case 3:e:{if(og(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Om(t,e),$o(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ti(Error(k(423)),e),e=$h(t,e,r,n,i);break e}else if(r!==i){i=ti(Error(k(424)),e),e=$h(t,e,r,n,i);break e}else for(nt=Tn(e.stateNode.containerInfo.firstChild),rt=e,le=!0,vt=null,n=Am(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){e=Zt(t,e,n);break e}Ue(t,e,r,n)}e=e.child}return e;case 5:return Dm(e),t===null&&pc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,cc(r,i)?o=null:s!==null&&cc(r,s)&&(e.flags|=32),sg(t,e),Ue(t,e,o,n),e.child;case 6:return t===null&&pc(e),null;case 13:return lg(t,e,n);case 4:return Ru(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zr(e,null,r,n):Ue(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),zh(t,e,r,i,n);case 7:return Ue(t,e,e.pendingProps,n),e.child;case 8:return Ue(t,e,e.pendingProps.children,n),e.child;case 12:return Ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(Wo,r._currentValue),r._currentValue=o,s!==null)if(Rt(s.value,o)){if(s.children===i.children&&!qe.current){e=Zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=qt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),mc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ue(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Br(e,n),i=dt(i),r=r(i),e.flags|=1,Ue(t,e,r,n),e.child;case 14:return r=e.type,i=yt(r,e.pendingProps),i=yt(r.type,i),Wh(t,e,r,i,n);case 15:return rg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),vo(t,e),e.tag=1,Ye(r)?(t=!0,jo(e)):t=!1,Br(e,n),eg(e,r,i),yc(e,r,i,n),wc(null,e,r,!0,t,n);case 19:return ag(t,e,n);case 22:return ig(t,e,n)}throw Error(k(156,e.tag))};function xg(t,e){return Xp(t,e)}function cw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(t,e,n,r){return new cw(t,e,n,r)}function $u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uw(t){if(typeof t=="function")return $u(t)?1:0;if(t!=null){if(t=t.$$typeof,t===au)return 11;if(t===cu)return 14}return 2}function An(t,e){var n=t.alternate;return n===null?(n=ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function So(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$u(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case kr:return rr(n.children,i,s,e);case lu:o=8,i|=8;break;case Wa:return t=ct(12,n,e,i|2),t.elementType=Wa,t.lanes=s,t;case Ba:return t=ct(13,n,e,i),t.elementType=Ba,t.lanes=s,t;case $a:return t=ct(19,n,e,i),t.elementType=$a,t.lanes=s,t;case Dp:return bl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bp:o=10;break e;case Op:o=9;break e;case au:o=11;break e;case cu:o=14;break e;case fn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function rr(t,e,n,r){return t=ct(7,t,r,e),t.lanes=n,t}function bl(t,e,n,r){return t=ct(22,t,r,e),t.elementType=Dp,t.lanes=n,t.stateNode={isHidden:!1},t}function Ca(t,e,n){return t=ct(6,t,null,e),t.lanes=n,t}function xa(t,e,n){return e=ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hu(t,e,n,r,i,s,o,l,a){return t=new dw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(s),t}function hw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function kg(t){if(!t)return Fn;t=t._reactInternals;e:{if(yr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ye(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ye(n))return km(t,n,e)}return e}function Ig(t,e,n,r,i,s,o,l,a){return t=Hu(n,r,!0,t,i,s,o,l,a),t.context=kg(null),n=t.current,r=ze(),i=Nn(n),s=qt(r,i),s.callback=e??null,Rn(n,s,i),t.current.lanes=i,Ps(t,i,r),Qe(t,r),t}function Ol(t,e,n,r){var i=e.current,s=ze(),o=Nn(i);return n=kg(n),e.context===null?e.context=n:e.pendingContext=n,e=qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rn(i,e,o),t!==null&&(It(t,i,o,s),go(t,i,o)),o}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vu(t,e){Zh(t,e),(t=t.alternate)&&Zh(t,e)}function fw(){return null}var Tg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gu(t){this._internalRoot=t}Dl.prototype.render=Gu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Ol(t,e,null,null)};Dl.prototype.unmount=Gu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ar(function(){Ol(null,t,null,null)}),e[Xt]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=im();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mn.length&&e!==0&&e<mn[n].priority;n++);mn.splice(n,0,t),n===0&&om(t)}};function Ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ef(){}function pw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Xo(o);s.call(c)}}var o=Ig(e,r,t,0,null,!1,!1,"",ef);return t._reactRootContainer=o,t[Xt]=o.current,cs(t.nodeType===8?t.parentNode:t),ar(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Xo(a);l.call(c)}}var a=Hu(t,0,!1,null,null,!1,!1,"",ef);return t._reactRootContainer=a,t[Xt]=a.current,cs(t.nodeType===8?t.parentNode:t),ar(function(){Ol(e,a,n,r)}),a}function Ml(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Xo(o);l.call(a)}}Ol(e,o,t,i)}else o=pw(n,e,t,i,r);return Xo(o)}nm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mi(e.pendingLanes);n!==0&&(hu(e,n|1),Qe(e,fe()),!(Y&6)&&(ni=fe()+500,Bn()))}break;case 13:ar(function(){var r=Jt(t,1);if(r!==null){var i=ze();It(r,t,1,i)}}),Vu(t,1)}};fu=function(t){if(t.tag===13){var e=Jt(t,134217728);if(e!==null){var n=ze();It(e,t,134217728,n)}Vu(t,134217728)}};rm=function(t){if(t.tag===13){var e=Nn(t),n=Jt(t,e);if(n!==null){var r=ze();It(n,t,e,r)}Vu(t,e)}};im=function(){return X};sm=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};Za=function(t,e,n){switch(e){case"input":if(Ga(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Il(r);if(!i)throw Error(k(90));Mp(r),Ga(r,i)}}}break;case"textarea":jp(t,n);break;case"select":e=n.value,e!=null&&jr(t,!!n.multiple,e,!1)}};Vp=zu;Gp=ar;var mw={usingClientEntryPoint:!1,Events:[As,Pr,Il,$p,Hp,zu]},Ri={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gw={bundleType:Ri.bundleType,version:Ri.version,rendererPackageName:Ri.rendererPackageName,rendererConfig:Ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ri.findFiberByHostInstance||fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{Sl=oo.inject(gw),Ot=oo}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mw;st.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(e))throw Error(k(200));return hw(t,e,null,n)};st.createRoot=function(t,e){if(!Ku(t))throw Error(k(299));var n=!1,r="",i=Tg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hu(t,1,!1,null,null,n,!1,r,i),t[Xt]=e.current,cs(t.nodeType===8?t.parentNode:t),new Gu(e)};st.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Yp(e),t=t===null?null:t.stateNode,t};st.flushSync=function(t){return ar(t)};st.hydrate=function(t,e,n){if(!Ll(e))throw Error(k(200));return Ml(null,t,e,!0,n)};st.hydrateRoot=function(t,e,n){if(!Ku(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Tg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ig(e,null,t,1,n??null,i,!1,s,o),t[Xt]=e.current,cs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Dl(e)};st.render=function(t,e,n){if(!Ll(e))throw Error(k(200));return Ml(null,t,e,!1,n)};st.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(k(40));return t._reactRootContainer?(ar(function(){Ml(null,null,t,!1,function(){t._reactRootContainer=null,t[Xt]=null})}),!0):!1};st.unstable_batchedUpdates=zu;st.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ll(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Ml(t,e,n,!1,r)};st.version="18.3.1-next-f1338f8080-20240426";function Rg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rg)}catch(t){console.error(t)}}Rg(),Rp.exports=st;var yw=Rp.exports,tf=yw;Ua.createRoot=tf.createRoot,Ua.hydrateRoot=tf.hydrateRoot;const _w=()=>{};var nf={};/**
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
 */const Pg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw hi(e)},hi=function(t){return new Error("Firebase Database ("+Pg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ng=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,d=s>>2,u=(s&3)<<4|l>>4;let p=(l&15)<<2|c>>6,w=c&63;a||(w=64,o||(p=64)),r.push(n[d],n[u],n[p],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ng(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||u==null)throw new ww;const p=s<<2|l>>4;if(r.push(p),c!==64){const w=l<<4&240|c>>2;if(r.push(w),u!==64){const E=c<<6&192|u;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ww extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ag=function(t){const e=Ng(t);return qu.encodeByteArray(e,!0)},Jo=function(t){return Ag(t).replace(/\./g,"")},Zo=function(t){try{return qu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ew(t){return bg(void 0,t)}function bg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Sw(n)||(t[n]=bg(t[n],e[n]));return t}function Sw(t){return t!=="__proto__"}/**
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
 */function Cw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xw=()=>Cw().__FIREBASE_DEFAULTS__,kw=()=>{if(typeof process>"u"||typeof nf>"u")return;const t=nf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Iw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zo(t[1]);return e&&JSON.parse(e)},Yu=()=>{try{return _w()||xw()||kw()||Iw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Og=t=>{var e,n;return(n=(e=Yu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Tw=t=>{const e=Og(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dg=()=>{var t;return(t=Yu())==null?void 0:t.config},Lg=t=>{var e;return(e=Yu())==null?void 0:e[`_${t}`]};/**
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
 */class Os{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Rw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Jo(JSON.stringify(n)),Jo(JSON.stringify(o)),""].join(".")}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function Pw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aw(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bw(){return Pg.NODE_ADMIN===!0}function Ow(){try{return typeof indexedDB=="object"}catch{return!1}}function Dw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Lw="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Lw,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Mw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new $n(i,l,r)}}function Mw(t,e){try{let n=0,r="";for(;n<t.length;){const i=t.indexOf("{$",n);if(i===-1){r+=t.substring(n);break}const s=t.indexOf("}",i+2);if(s===-1){r+=t.substring(n);break}const o=t.substring(i+2,s),l=e[o];r+=t.substring(n,i)+(l!=null?String(l):`<${o}?>`),n=s+1}return r}catch{return t}}/**
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
 */function _s(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
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
 */const Fg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=_s(Zo(s[0])||""),n=_s(Zo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Fw=function(t){const e=Fg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jw=function(t){const e=Fg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function on(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ri(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function bc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function el(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(rf(s)&&rf(o)){if(!cr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rf(t){return t!==null&&typeof t=="object"}/**
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
 */function fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Uw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const p=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=l^s&(o^l),d=1518500249):(c=s^o^l,d=1859775393):u<60?(c=s&o|l&(s|o),d=2400959708):(c=s^o^l,d=3395469782);const p=(i<<5|i>>>27)+c+a+d+r[u]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function zw(t,e){const n=new Ww(t,e);return n.subscribe.bind(n)}class Ww{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ka),i.error===void 0&&(i.error=ka),i.complete===void 0&&(i.complete=ka);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ka(){}function Xu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const $w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ls(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jg(t){return(await fetch(t,{credentials:"include"})).ok}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class Hw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Os;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gw(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vw(t){return t===Yn?void 0:t}function Gw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const qw={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Yw=Z.INFO,Qw={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Xw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Qw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ju{constructor(e){this.name=e,this._logLevel=Yw,this._logHandler=Xw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Jw=(t,e)=>e.some(n=>t instanceof n);let sf,of;function Zw(){return sf||(sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eE(){return of||(of=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ug=new WeakMap,Oc=new WeakMap,zg=new WeakMap,Ia=new WeakMap,Zu=new WeakMap;function tE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(bn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ug.set(n,t)}).catch(()=>{}),Zu.set(e,t),e}function nE(t){if(Oc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Oc.set(t,e)}let Dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rE(t){Dc=t(Dc)}function iE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ta(this),e,...n);return zg.set(r,e.sort?e.sort():[e]),bn(r)}:eE().includes(t)?function(...e){return t.apply(Ta(this),e),bn(Ug.get(this))}:function(...e){return bn(t.apply(Ta(this),e))}}function sE(t){return typeof t=="function"?iE(t):(t instanceof IDBTransaction&&nE(t),Jw(t,Zw())?new Proxy(t,Dc):t)}function bn(t){if(t instanceof IDBRequest)return tE(t);if(Ia.has(t))return Ia.get(t);const e=sE(t);return e!==t&&(Ia.set(t,e),Zu.set(e,t)),e}const Ta=t=>Zu.get(t);function oE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=bn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(bn(o.result),a.oldVersion,a.newVersion,bn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const lE=["get","getKey","getAll","getAllKeys","count"],aE=["put","add","delete","clear"],Ra=new Map;function lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=aE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ra.set(e,s),s}rE(t=>({...t,get:(e,n,r)=>lf(e,n)||t.get(e,n,r),has:(e,n)=>!!lf(e,n)||t.has(e,n)}));/**
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
 */class cE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lc="@firebase/app",af="0.16.0";/**
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
 */const en=new Ju("@firebase/app"),dE="@firebase/app-compat",hE="@firebase/analytics-compat",fE="@firebase/analytics",pE="@firebase/app-check-compat",mE="@firebase/app-check",gE="@firebase/auth",yE="@firebase/auth-compat",_E="@firebase/database",vE="@firebase/data-connect",wE="@firebase/database-compat",EE="@firebase/functions",SE="@firebase/functions-compat",CE="@firebase/installations",xE="@firebase/installations-compat",kE="@firebase/messaging",IE="@firebase/messaging-compat",TE="@firebase/performance",RE="@firebase/performance-compat",PE="@firebase/remote-config",NE="@firebase/remote-config-compat",AE="@firebase/storage",bE="@firebase/storage-compat",OE="@firebase/firestore",DE="@firebase/ai",LE="@firebase/firestore-compat",ME="firebase",FE="12.17.0";/**
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
 */const Mc="[DEFAULT]",jE={[Lc]:"fire-core",[dE]:"fire-core-compat",[fE]:"fire-analytics",[hE]:"fire-analytics-compat",[mE]:"fire-app-check",[pE]:"fire-app-check-compat",[gE]:"fire-auth",[yE]:"fire-auth-compat",[_E]:"fire-rtdb",[vE]:"fire-data-connect",[wE]:"fire-rtdb-compat",[EE]:"fire-fn",[SE]:"fire-fn-compat",[CE]:"fire-iid",[xE]:"fire-iid-compat",[kE]:"fire-fcm",[IE]:"fire-fcm-compat",[TE]:"fire-perf",[RE]:"fire-perf-compat",[PE]:"fire-rc",[NE]:"fire-rc-compat",[AE]:"fire-gcs",[bE]:"fire-gcs-compat",[OE]:"fire-fst",[LE]:"fire-fst-compat",[DE]:"fire-vertex","fire-js":"fire-js",[ME]:"fire-js-all"};/**
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
 */const tl=new Map,UE=new Map,Fc=new Map;function cf(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ii(t){const e=t.name;if(Fc.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;Fc.set(e,t);for(const n of tl.values())cf(n,t);for(const n of UE.values())cf(n,t);return!0}function ed(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const zE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new Ds("app","Firebase",zE);/**
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
 */class WE{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const pi=FE;function Wg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Mc,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(n||(n=Dg()),!n)throw Ht.create("no-options");const s=tl.get(i);if(s)if(cr(n,s.options)){if(cr(r,s.config))return s;throw Ht.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw Ht.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new Kw(i);for(const a of Fc.values())o.addComponent(a);const l=new WE(n,r,o);return tl.set(i,l),l}function Bg(t=Mc){const e=tl.get(t);if(!e&&t===Mc&&Dg())return Wg();if(!e)throw Ht.create("no-app",{appName:t});return e}function On(t,e,n){let r=jE[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(o.join(" "));return}ii(new ur(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const BE="firebase-heartbeat-database",$E=1,vs="firebase-heartbeat-store";let Pa=null;function $g(){return Pa||(Pa=oE(BE,$E,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ht.create("idb-open",{originalErrorMessage:t.message})})),Pa}async function HE(t){try{const n=(await $g()).transaction(vs),r=await n.objectStore(vs).get(Hg(t));return await n.done,r}catch(e){if(e instanceof $n)en.warn(e.message);else{const n=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function uf(t,e){try{const r=(await $g()).transaction(vs,"readwrite");await r.objectStore(vs).put(e,Hg(t)),await r.done}catch(n){if(n instanceof $n)en.warn(n.message);else{const r=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function Hg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const VE=1024,GE=30;class KE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=df();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>GE){const o=QE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=df(),{heartbeatsToSend:r,unsentEntries:i}=qE(this._heartbeatsCache.heartbeats),s=Jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return en.warn(n),""}}}function df(){return new Date().toISOString().substring(0,10)}function qE(t,e=VE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ow()?Dw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return uf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return uf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hf(t){return Jo(JSON.stringify({version:2,heartbeats:t})).length}function QE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function XE(t){ii(new ur("platform-logger",e=>new cE(e),"PRIVATE")),ii(new ur("heartbeat",e=>new KE(e),"PRIVATE")),On(Lc,af,t),On(Lc,af,"esm2020"),On("fire-js","")}/**
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
 */XE("");var JE="firebase",ZE="12.17.1";/**
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
 */On(JE,ZE,"app");function Vg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eS=Vg,Gg=new Ds("auth","Firebase",Vg());/**
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
 */const nl=new Ju("@firebase/auth");function Kg(t,...e){nl.logLevel<=Z.WARN&&nl.warn(`Auth (${pi}): ${t}`,...e)}function Co(t,...e){nl.logLevel<=Z.ERROR&&nl.error(`Auth (${pi}): ${t}`,...e)}/**
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
 */function Pt(t,...e){throw td(t,...e)}function Lt(t,...e){return td(t,...e)}function qg(t,e,n){const r={...eS(),[e]:n};return new Ds("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return qg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function td(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gg.create(t,...e)}function F(t,e,...n){if(!t)throw td(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Co(e),new Error(e)}function tn(t,e){t||Vt(e)}/**
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
 */function jc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function tS(){return ff()==="http:"||ff()==="https:"}function ff(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function nS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tS()||Nw()||"connection"in navigator)?navigator.onLine:!0}function rS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ms{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Qu()||Mg()}get(){return nS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nd(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Yg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oS=new Ms(3e4,6e4);function _r(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Hn(t,e,n,r,i={}){return Qg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=fi({...o,key:t.config.apiKey}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:a,...s};return Pw()||(c.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Ls(t.emulatorConfig.host)&&(c.credentials="include"),Yg.fetch()(await Xg(t,t.config.apiHost,n,l),c)})}async function Qg(t,e,n){t._canInitEmulator=!1;const r={...iS,...e};try{const i=new aS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw lo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw lo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw lo(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw qg(t,d,c);Pt(t,d)}}catch(i){if(i instanceof $n)throw i;Pt(t,"network-request-failed",{message:String(i)})}}async function jl(t,e,n,r,i={}){const s=await Hn(t,e,n,r,i);return"mfaPendingCredential"in s&&Pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Xg(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?nd(t.config,i):`${t.config.apiScheme}://${i}`;return sS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function lS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),oS.get())})}}function lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Lt(t,e,r);return i.customData._tokenResponse=n,i}function pf(t){return t!==void 0&&t.enterprise!==void 0}class cS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uS(t,e){return Hn(t,"GET","/v2/recaptchaConfig",_r(t,e))}/**
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
 */async function dS(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function rl(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hS(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=rd(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yi(Na(i.auth_time)),issuedAtTime:Yi(Na(i.iat)),expirationTime:Yi(Na(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Na(t){return Number(t)*1e3}function rd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zo(n);return i?JSON.parse(i):(Co("Failed to decode base64 JWT payload"),null)}catch(i){return Co("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mf(t){const e=rd(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ws(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&fS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Uc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function il(t){var u;const e=t.auth,n=await t.getIdToken(),r=await ws(t,rl(e,{idToken:n}));F(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(u=i.providerUserInfo)!=null&&u.length?Jg(i.providerUserInfo):[],o=gS(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?a:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Uc(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function mS(t){const e=Ze(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Jg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function yS(t,e){const n=await Qg(t,{},async()=>{const r=fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Xg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ls(t.emulatorConfig.host)&&(a.credentials="include"),Yg.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _S(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",_r(t,e))}/**
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
 */class Hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=mf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hr;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hr,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function hn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class St{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new pS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Uc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ws(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hS(this,e)}reload(){return mS(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new St({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await ws(this,dS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:u,emailVerified:p,isAnonymous:w,providerData:E,stsTokenManager:C}=n;F(u&&C,e,"internal-error");const U=Hr.fromJSON(this.name,C);F(typeof u=="string",e,"internal-error"),hn(r,e.name),hn(i,e.name),F(typeof p=="boolean",e,"internal-error"),F(typeof w=="boolean",e,"internal-error"),hn(s,e.name),hn(o,e.name),hn(l,e.name),hn(a,e.name),hn(c,e.name),hn(d,e.name);const y=new St({uid:u,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:U,createdAt:c,lastLoginAt:d});return E&&Array.isArray(E)&&(y.providerData=E.map(m=>({...m}))),a&&(y._redirectEventId=a),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hr;i.updateFromServerResponse(n);const s=new St({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await il(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];F(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Jg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Hr;l.updateFromIdToken(r);const a=new St({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
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
 */const gf=new Map;function Gt(t){tn(t instanceof Function,"Expected a class definition");let e=gf.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gf.set(t,e),e)}/**
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
 */class Zg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zg.type="NONE";const yf=Zg;/**
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
 */function xo(t,e,n){return`firebase:${t}:${e}:${n}`}class Vr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xo(this.userKey,i.apiKey,s),this.fullPersistenceKey=xo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await rl(this.auth,{idToken:e}).catch(()=>{});return n?St._fromGetAccountInfoResponse(this.auth,n,e):null}return St._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vr(Gt(yf),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Gt(yf);const o=xo(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let u;if(typeof d=="string"){const p=await rl(e,{idToken:d}).catch(()=>{});if(!p)break;u=await St._fromGetAccountInfoResponse(e,p,d)}else u=St._fromJSON(e,d);c!==s&&(l=u),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Vr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Vr(s,e,r))}}/**
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
 */function _f(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ey(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sy(e))return"Blackberry";if(oy(e))return"Webos";if(ty(e))return"Safari";if((e.includes("chrome/")||ny(e))&&!e.includes("edge/"))return"Chrome";if(iy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ey(t=We()){return/firefox\//i.test(t)}function ty(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ny(t=We()){return/crios\//i.test(t)}function ry(t=We()){return/iemobile/i.test(t)}function iy(t=We()){return/android/i.test(t)}function sy(t=We()){return/blackberry/i.test(t)}function oy(t=We()){return/webos/i.test(t)}function id(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vS(t=We()){var e;return id(t)&&!!((e=window.navigator)!=null&&e.standalone)}function wS(){return Aw()&&document.documentMode===10}function ly(t=We()){return id(t)||iy(t)||oy(t)||sy(t)||/windows phone/i.test(t)||ry(t)}/**
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
 */function ay(t,e=[]){let n;switch(t){case"Browser":n=_f(We());break;case"Worker":n=`${_f(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pi}/${r}`}/**
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
 */class ES{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SS(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",_r(t,e))}/**
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
 */const CS=6;class xS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??CS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class kS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vf(this),this.idTokenSubscription=new vf(this),this.beforeStateQueue=new ES(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rl(this,{idToken:e}),r=await St._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(Dn(this));const n=e?Ze(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SS(this),n=new xS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _S(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ay(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Kg(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function mi(t){return Ze(t)}class vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=zw(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ul={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IS(t){Ul=t}function cy(t){return Ul.loadJS(t)}function TS(){return Ul.recaptchaEnterpriseScript}function RS(){return Ul.gapiScript}function PS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class NS{constructor(){this.enterprise=new AS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class AS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
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
 */const bS="recaptcha-enterprise",uy="NO_RECAPTCHA",wf="onFirebaseAuthREInstanceReady";class yn{constructor(e){this.type=bS,this.auth=mi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{uS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new cS(a);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;pf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(uy)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new NS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(async l=>{if(!n&&pf(window.grecaptcha)&&yn.scriptInjectionDeferred)await yn.scriptInjectionDeferred.promise,i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=TS();a.length!==0&&(a+=l+`&onload=${wf}`),yn.scriptInjectionDeferred=new Os,window[wf]=()=>{var c;(c=yn.scriptInjectionDeferred)==null||c.resolve()},cy(a).then(()=>{var c;return(c=yn.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}yn.scriptInjectionDeferred=null;async function Ef(t,e,n,r=!1,i=!1){const s=new yn(t);let o;if(i)o=uy;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Sf(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ef(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ef(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function OS(t,e){const n=ed(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(cr(s,e??{}))return i;Pt(i,"already-initialized")}return n.initialize({options:e})}function DS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function LS(t,e,n){const r=mi(t);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=dy(e),{host:o,port:l}=MS(e),a=l===null?"":`:${l}`,c={url:`${s}//${o}${a}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(cr(c,r.config.emulator)&&cr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ls(o)?jg(`${s}//${o}${a}`):FS()}function dy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MS(t){const e=dy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Cf(o)}}}function Cf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class sd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function jS(t,e){return Hn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function US(t,e){return jl(t,"POST","/v1/accounts:signInWithPassword",_r(t,e))}/**
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
 */async function zS(t,e){return jl(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}async function WS(t,e){return jl(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}/**
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
 */class Es extends sd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Es(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Es(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sf(e,n,"signInWithPassword",US);case"emailLink":return zS(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sf(e,r,"signUpPassword",jS);case"emailLink":return WS(e,{idToken:n,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gr(t,e){return jl(t,"POST","/v1/accounts:signInWithIdp",_r(t,e))}/**
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
 */const BS="http://localhost";class dr extends sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new dr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:BS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fi(n)}return e}}/**
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
 */function $S(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HS(t){const e=ji(Ui(t)).link,n=e?ji(Ui(e)).deep_link_id:null,r=ji(Ui(t)).deep_link_id;return(r?ji(Ui(r)).link:null)||r||n||e||t}class od{constructor(e){const n=ji(Ui(e)),r=n.apiKey??null,i=n.oobCode??null,s=$S(n.mode??null);F(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=HS(e);try{return new od(n)}catch{return null}}}/**
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
 */class gi{constructor(){this.providerId=gi.PROVIDER_ID}static credential(e,n){return Es._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=od.parseLink(n);return F(r,"argument-error"),Es._fromEmailAndCode(e,r.code,r.tenantId)}}gi.PROVIDER_ID="password";gi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fs extends hy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _n extends Fs{constructor(){super("facebook.com")}static credential(e){return dr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
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
 */class vn extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class wn extends Fs{constructor(){super("github.com")}static credential(e){return dr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
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
 */class En extends Fs{constructor(){super("twitter.com")}static credential(e,n){return dr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return En.credential(n,r)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
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
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await St._fromIdTokenResponse(e,r,i),o=xf(r);return new si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xf(r);return new si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class sl extends $n{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new sl(e,n,r,i)}}function fy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sl._fromErrorAndOperation(t,s,e,r):s})}async function VS(t,e,n=!1){const r=await ws(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return si._forOperation(t,"link",r)}/**
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
 */async function GS(t,e,n=!1){const{auth:r}=t;if(wt(r.app))return Promise.reject(Dn(r));const i="reauthenticate";try{const s=await ws(t,fy(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=rd(s.idToken);F(o,r,"internal-error");const{sub:l}=o;return F(t.uid===l,r,"user-mismatch"),si._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pt(r,"user-mismatch"),s}}/**
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
 */async function py(t,e,n=!1){if(wt(t.app))return Promise.reject(Dn(t));const r="signIn",i=await fy(t,r,e),s=await si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function KS(t,e){return py(mi(t),e)}/**
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
 */async function qS(t){const e=mi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function YS(t,e,n){return wt(t.app)?Promise.reject(Dn(t)):KS(Ze(t),gi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qS(t),r})}function QS(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function XS(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function JS(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function ZS(t){return Ze(t).signOut()}const ol="__sak";/**
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
 */class my{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const eC=1e3,tC=10;class gy extends my{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gy.type="LOCAL";const nC=gy;/**
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
 */class yy extends my{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yy.type="SESSION";const _y=yy;/**
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
 */function rC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await rC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
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
 */function ld(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=ld("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const p=u;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mt(){return window}function sC(t){Mt().location.href=t}/**
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
 */function vy(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function oC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function aC(){return vy()?self:null}/**
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
 */const wy="firebaseLocalStorageDb",cC=1,ll="firebaseLocalStorage",Ey="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wl(t,e){return t.transaction([ll],e?"readwrite":"readonly").objectStore(ll)}function uC(){const t=indexedDB.deleteDatabase(wy);return new js(t).toPromise()}function Sy(){const t=indexedDB.open(wy,cC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ll,{keyPath:Ey})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ll)?e(r):(r.close(),await uC(),e(await Sy()))})})}async function kf(t,e,n){const r=Wl(t,!0).put({[Ey]:e,value:n});return new js(r).toPromise()}async function dC(t,e){const n=Wl(t,!1).get(e),r=await new js(n).toPromise();return r===void 0?null:r.value}function If(t,e){const n=Wl(t,!0).delete(e);return new js(n).toPromise()}const hC=800,fC=3;class Cy{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=Sy(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(this.isHiding||n++>fC)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(aC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await oC(),!this.activeServiceWorker)return;this.sender=new iC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await kf(e,ol,"1"),await If(e,ol)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>If(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isHiding)return[];try{const e=await this._withRetries(i=>{const s=Wl(i,!1).getAll();return new js(s).toPromise()});if(this.isHiding)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(e){return this.isHiding||Kg(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Cy.type="LOCAL";const pC=Cy;new Ms(3e4,6e4);/**
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
 */function mC(t,e){return e?Gt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ad extends sd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gC(t){return py(t.auth,new ad(t),t.bypassAuthState)}function yC(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),GS(n,new ad(t),t.bypassAuthState)}async function _C(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),VS(n,new ad(t),t.bypassAuthState)}/**
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
 */class xy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gC;case"linkViaPopup":case"linkViaRedirect":return _C;case"reauthViaPopup":case"reauthViaRedirect":return yC;default:Pt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vC=new Ms(2e3,1e4);class Mr extends xy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vC.get())};e()}}Mr.currentPopupAction=null;/**
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
 */const wC="pendingRedirect",ko=new Map;class EC extends xy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const r=await SC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SC(t,e){const n=kC(e),r=xC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CC(t,e){ko.set(t._key(),e)}function xC(t){return Gt(t._redirectPersistence)}function kC(t){return xo(wC,t.config.apiKey,t.name)}async function IC(t,e,n=!1){if(wt(t.app))return Promise.reject(Dn(t));const r=mi(t),i=mC(r,e),o=await new EC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const TC=10*60*1e3;class RC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ky(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tf(e))}saveEventToCache(e){this.cachedEventUids.add(Tf(e)),this.lastProcessedEventTime=Date.now()}}function Tf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ky({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ky(t);default:return!1}}/**
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
 */async function NC(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
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
 */const AC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bC=/^https?/;async function OC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NC(t);for(const n of e)try{if(DC(n))return}catch{}Pt(t,"unauthorized-domain")}function DC(t){const e=jc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bC.test(n))return!1;if(AC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const LC=new Ms(3e4,6e4);function Rf(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MC(t){return new Promise((e,n)=>{var i,s,o;function r(){Rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rf(),n(Lt(t,"network-request-failed"))},timeout:LC.get()})}if((s=(i=Mt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Mt().gapi)!=null&&o.load)r();else{const l=PS("iframefcb");return Mt()[l]=()=>{gapi.load?r():n(Lt(t,"network-request-failed"))},cy(`${RS()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Io=null,e})}let Io=null;function FC(t){return Io=Io||MC(t),Io}/**
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
 */const jC=new Ms(5e3,15e3),UC="__/auth/iframe",zC="emulator/auth/iframe",WC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $C(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nd(e,zC):`https://${t.config.authDomain}/${UC}`,r={apiKey:e.apiKey,appName:t.name,v:pi},i=BC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fi(r).slice(1)}`}async function HC(t){const e=await FC(t),n=Mt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:$C(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),l=Mt().setTimeout(()=>{s(o)},jC.get());function a(){Mt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const VC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GC=500,KC=600,qC="_blank",YC="http://localhost";class Pf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QC(t,e,n,r=GC,i=KC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...VC,width:r.toString(),height:i.toString(),top:s,left:o},c=We().toLowerCase();n&&(l=ny(c)?qC:n),ey(c)&&(e=e||YC,a.scrollbars="yes");const d=Object.entries(a).reduce((p,[w,E])=>`${p}${w}=${E},`,"");if(vS(c)&&l!=="_self")return XC(e||"",l),new Pf(null);const u=window.open(e||"",l,d);F(u,t,"popup-blocked");try{u.focus()}catch{}return new Pf(u)}function XC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JC="__/auth/handler",ZC="emulator/auth/handler",ex=encodeURIComponent("fac");async function Nf(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pi,eventId:i};if(e instanceof hy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Fs){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),c=a?`#${ex}=${encodeURIComponent(a)}`:"";return`${tx(t)}?${fi(l).slice(1)}${c}`}function tx({config:t}){return t.emulator?nd(t,ZC):`https://${t.authDomain}/${JC}`}/**
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
 */const Aa="webStorageSupport";class nx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_y,this._completeRedirectFn=IC,this._overrideRedirectResult=CC}async _openPopup(e,n,r,i){var o;tn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Nf(e,n,r,jc(),i);return QC(e,s,ld())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Nf(e,n,r,jc(),i);return sC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HC(e),r=new RC(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Aa,{type:Aa},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Aa];s!==void 0&&n(!!s),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ly()||ty()||id()}}const rx=nx;var Af="@firebase/auth",bf="1.13.4";/**
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
 */class ix{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ox(t){ii(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ay(t)},c=new kS(r,i,s,a);return DS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ii(new ur("auth-internal",e=>{const n=mi(e.getProvider("auth").getImmediate());return(r=>new ix(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(Af,bf,sx(t)),On(Af,bf,"esm2020")}/**
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
 */const lx=5*60,ax=Lg("authIdTokenMaxAge")||lx;let Of=null;const cx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ax)return;const i=n==null?void 0:n.token;Of!==i&&(Of=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ux(t=Bg()){const e=ed(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OS(t,{popupRedirectResolver:rx,persistence:[pC,nC,_y]}),r=Lg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=cx(s.toString());XS(n,o,()=>o(n.currentUser)),QS(n,l=>o(l))}}const i=Og("auth");return i&&LS(n,`http://${i}`),n}function dx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}IS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Lt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ox("Browser");var Df={};const Lf="@firebase/database",Mf="1.1.4";/**
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
 */let Iy="";function hx(t){Iy=t}/**
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
 */class fx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_s(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class px{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return on(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ty=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fx(e)}}catch{}return new px},er=Ty("localStorage"),mx=Ty("sessionStorage");/**
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
 */const Kr=new Ju("@firebase/database"),gx=function(){let t=1;return function(){return t++}}(),Ry=function(t){const e=$w(t),n=new Uw;n.update(e);const r=n.digest();return qu.encodeByteArray(r)},Us=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Us.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let Qi=null,Ff=!0;const yx=function(t,e){T(!0,"Can't turn on custom loggers persistently."),Kr.logLevel=Z.VERBOSE,Qi=Kr.log.bind(Kr)},Le=function(...t){if(Ff===!0&&(Ff=!1,Qi===null&&mx.get("logging_enabled")===!0&&yx()),Qi){const e=Us.apply(null,t);Qi(e)}},zs=function(t){return function(...e){Le(t,...e)}},zc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Us(...t);Kr.error(e)},nn=function(...t){const e=`FIREBASE FATAL ERROR: ${Us(...t)}`;throw Kr.error(e),new Error(e)},Xe=function(...t){const e="FIREBASE WARNING: "+Us(...t);Kr.warn(e)},_x=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Py=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},oi="[MIN_NAME]",hr="[MAX_NAME]",yi=function(t,e){if(t===e)return 0;if(t===oi||e===hr)return-1;if(e===oi||t===hr)return 1;{const n=jf(t),r=jf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},wx=function(t,e){return t===e?0:t<e?-1:1},Pi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},cd=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=cd(t[e[r]]);return n+="}",n},Ny=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ay=function(t){T(!Py(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(a=0;a<64;a+=8){let p=parseInt(d.substr(a,8),2).toString(16);p.length===1&&(p="0"+p),u=u+p}return u.toLowerCase()},Ex=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Sx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Cx(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const xx=new RegExp("^-?(0*)\\d{1,10}$"),kx=-2147483648,Ix=2147483647,jf=function(t){if(xx.test(t)){const e=Number(t);if(e>=kx&&e<=Ix)return e}return null},_i=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Tx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Rx{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,wt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Xe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Px{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xe(e)}}class To{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}To.OWNER="owner";/**
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
 */const ud="5",by="v",Oy="s",Dy="r",Ly="f",My=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fy="ls",jy="p",Wc="ac",Uy="websocket",zy="long_polling";/**
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
 */class Wy{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=er.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&er.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Nx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function By(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===Uy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===zy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Nx(t)&&(n.ns=t.namespace);const i=[];return Je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Ax{constructor(){this.counters_={}}incrementCounter(e,n=1){on(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ew(this.counters_)}}/**
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
 */const ba={},Oa={};function dd(t){const e=t.toString();return ba[e]||(ba[e]=new Ax),ba[e]}function bx(t,e){const n=t.toString();return Oa[n]||(Oa[n]=e()),Oa[n]}/**
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
 */class Ox{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&_i(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Uf="start",Dx="close",Lx="pLPCommand",Mx="pRTLPCB",$y="id",Hy="pw",Vy="ser",Fx="cb",jx="seg",Ux="ts",zx="d",Wx="dframe",Gy=1870,Ky=30,Bx=Gy-Ky,$x=25e3,Hx=3e4;class Fr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zs(e),this.stats_=dd(n),this.urlFn=a=>(this.appCheckToken&&(a[Wc]=this.appCheckToken),By(n,zy,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ox(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Hx)),vx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hd((...s)=>{const[o,l,a,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Uf)this.id=l,this.password=a;else if(o===Dx)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Uf]="t",r[Vy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Fx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[by]=ud,this.transportSessionId&&(r[Oy]=this.transportSessionId),this.lastSessionId&&(r[Fy]=this.lastSessionId),this.applicationId&&(r[jy]=this.applicationId),this.appCheckToken&&(r[Wc]=this.appCheckToken),typeof location<"u"&&location.hostname&&My.test(location.hostname)&&(r[Dy]=Ly);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fr.forceAllow_=!0}static forceDisallow(){Fr.forceDisallow_=!0}static isAvailable(){return Fr.forceAllow_?!0:!Fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ex()&&!Sx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ag(n),i=Ny(r,Bx);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Wx]="t",r[$y]=e,r[Hy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gx(),window[Lx+this.uniqueCallbackIdentifier]=e,window[Mx+this.uniqueCallbackIdentifier]=n,this.myIFrame=hd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$y]=this.myID,e[Hy]=this.myPW,e[Vy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ky+r.length<=Gy;){const o=this.pendingSegs.shift();r=r+"&"+jx+i+"="+o.seg+"&"+Ux+i+"="+o.ts+"&"+zx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor($x)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Vx=16384,Gx=45e3;let al=null;typeof MozWebSocket<"u"?al=MozWebSocket:typeof WebSocket<"u"&&(al=WebSocket);class Et{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zs(this.connId),this.stats_=dd(n),this.connURL=Et.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[by]=ud,typeof location<"u"&&location.hostname&&My.test(location.hostname)&&(o[Dy]=Ly),n&&(o[Oy]=n),r&&(o[Fy]=r),i&&(o[Wc]=i),s&&(o[jy]=s),By(e,Uy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,er.set("previous_websocket_failure",!0);try{let r;bw(),this.mySock=new al(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&al!==null&&!Et.forceDisallow_}static previouslyFailed(){return er.isInMemoryStorage||er.get("previous_websocket_failure")===!0}markConnectionHealthy(){er.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=_s(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ny(n,Vx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Gx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
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
 */class Ss{static get ALL_TRANSPORTS(){return[Fr,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Et&&Et.isAvailable();let r=n&&!Et.previouslyFailed();if(e.webSocketOnly&&(n||Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Et];else{const i=this.transports_=[];for(const s of Ss.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ss.globalTransportInitialized_=!1;/**
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
 */const Kx=6e4,qx=5e3,Yx=10*1024,Qx=100*1024,Da="t",zf="d",Xx="s",Wf="r",Jx="e",Bf="o",$f="a",Hf="n",Vf="p",Zx="h";class ek{constructor(e,n,r,i,s,o,l,a,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zs("c:"+this.id+":"),this.transportManager_=new Ss(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Qx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Yx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Da in e){const n=e[Da];n===$f?this.upgradeIfSecondaryHealthy_():n===Wf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Bf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Pi("t",e),r=Pi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$f,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Pi("t",e),r=Pi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Pi(Da,e);if(zf in e){const r=e[zf];if(n===Zx){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Hf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Xx?this.onConnectionShutdown_(r):n===Wf?this.onReset_(r):n===Jx?zc("Server Error: "+r):n===Bf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ud!==r&&Xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Xi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Kx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(er.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class qy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Yy{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class cl extends Yy{static getInstance(){return new cl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Gf=32,Kf=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ee("")}function H(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jn(t){return t.pieces_.length-t.pieceNum_}function ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function Qy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function tk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Jy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ee(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Ge(t,e){const n=H(t),r=H(e);if(n===null)return e;if(n===r)return Ge(ne(t),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fd(t,e){if(jn(t)!==jn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ct(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(jn(t)>jn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class nk{constructor(e,n){this.errorPrefix_=n,this.parts_=Xy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Fl(this.parts_[r]);Zy(this)}}function rk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fl(e),Zy(t)}function ik(t){const e=t.parts_.pop();t.byteLength_-=Fl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zy(t){if(t.byteLength_>Kf)throw new Error(t.errorPrefix_+"has a key path longer than "+Kf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Gf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gf+") or object contains a cycle "+Qn(t))}function Qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class pd extends Yy{static getInstance(){return new pd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ni=1e3,sk=60*5*1e3,qf=30*1e3,ok=1.3,lk=3e4,ak="server_kill",Yf=3;class Yt extends qy{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Yt.nextPersistentConnectionId_++,this.log_=zs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ni,this.maxReconnectDelay_=sk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(xe(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Os,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;Yt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&on(e,"w")){const r=ri(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Fw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zc("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lk&&(this.reconnectDelay_=Ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ok)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(u){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,p]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=p&&p.token,l=new ek(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,w=>{Xe(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(ak)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Xe(u),a())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bc(this.interruptReasons_)&&(this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>cd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yf&&(this.reconnectDelay_=qf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Iy.replace(/\./g,"-")]=1,Qu()?e["framework.cordova"]=1:Mg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cl.getInstance().currentlyOnline();return bc(this.interruptReasons_)&&e}}Yt.nextPersistentConnectionId_=0;Yt.nextConnectionId_=0;/**
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
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
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
 */class Bl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new V(oi,e),i=new V(oi,n);return this.compare(r,i)!==0}minPost(){return V.MIN}}/**
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
 */let ao;class e_ extends Bl{static get __EMPTY_NODE(){return ao}static set __EMPTY_NODE(e){ao=e}compare(e,n){return yi(e.name,n.name)}isDefinedOn(e){throw hi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(hr,ao)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,ao)}toString(){return".key"}}const qr=new e_;/**
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
 */class co{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ce.RED,this.left=i??Ke.EMPTY_NODE,this.right=s??Ke.EMPTY_NODE}copy(e,n,r,i,s){return new Ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class ck{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new co(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new co(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new co(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new co(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new ck;/**
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
 */function uk(t,e){return yi(t.name,e.name)}function md(t,e){return yi(t,e)}/**
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
 */let Bc;function dk(t){Bc=t}const t_=function(t){return typeof t=="number"?"number:"+Ay(t):"string:"+t},n_=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&on(e,".sv"),"Priority must be a string or number.")}else T(t===Bc||t.isEmpty(),"priority of unexpected type.");T(t===Bc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Qf;class Ee{static set __childrenNodeConstructor(e){Qf=e}static get __childrenNodeConstructor(){return Qf}constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),n_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:H(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=H(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+t_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ay(this.value_):e+=this.value_,this.lazyHash_=Ry(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),s=Ee.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let r_,i_;function hk(t){r_=t}function fk(t){i_=t}class pk extends Bl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?yi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(hr,new Ee("[PRIORITY-POST]",i_))}makePost(e,n){const r=r_(e);return new V(n,new Ee("[PRIORITY-POST]",r))}toString(){return".priority"}}const he=new pk;/**
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
 */const mk=Math.log(2);class gk{constructor(e){const n=s=>parseInt(Math.log(s)/mk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ul=function(t,e,n,r){t.sort(e);const i=function(a,c){const d=c-a;let u,p;if(d===0)return null;if(d===1)return u=t[a],p=n?n(u):u,new Ce(p,u.node,Ce.BLACK,null,null);{const w=parseInt(d/2,10)+a,E=i(a,w),C=i(w+1,c);return u=t[w],p=n?n(u):u,new Ce(p,u.node,Ce.BLACK,E,C)}},s=function(a){let c=null,d=null,u=t.length;const p=function(E,C){const U=u-E,y=u;u-=E;const m=i(U+1,y),_=t[U],x=n?n(_):_;w(new Ce(x,_.node,C,null,m))},w=function(E){c?(c.left=E,c=E):(d=E,c=E)};for(let E=0;E<a.count;++E){const C=a.nextBitIsOne(),U=Math.pow(2,a.count-(E+1));C?p(U,Ce.BLACK):(p(U,Ce.BLACK),p(U,Ce.RED))}return d},o=new gk(t.length),l=s(o);return new Ke(r||e,l)};/**
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
 */let La;const Sr={};class Kt{static get Default(){return T(Sr&&he,"ChildrenNode.ts has not been loaded"),La=La||new Kt({".priority":Sr},{".priority":he}),La}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return on(this.indexSet_,e.toString())}addIndex(e,n){T(e!==qr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(V.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=ul(r,e.getCompare()):l=Sr;const a=e.toString(),c={...this.indexSet_};c[a]=e;const d={...this.indexes_};return d[a]=l,new Kt(d,c)}addToIndexes(e,n){const r=el(this.indexes_,(i,s)=>{const o=ri(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===Sr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(V.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ul(l,o.getCompare())}else return Sr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new V(e.name,l))),a.insert(e,e.node)}});return new Kt(r,this.indexSet_)}removeFromIndexes(e,n){const r=el(this.indexes_,i=>{if(i===Sr)return i;{const s=n.get(e.name);return s?i.remove(new V(e.name,s)):i}});return new Kt(r,this.indexSet_)}}/**
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
 */let Ai;class j{static get EMPTY_NODE(){return Ai||(Ai=new j(new Ke(md),null,Kt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&n_(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ai}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ai:n}}getChild(e){const n=H(e);return n===null?this:this.getImmediateChild(n).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new V(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ai:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=H(e);if(r===null)return n;{T(H(e)!==".priority"||jn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ne(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(he,(o,l)=>{n[o]=l.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+t_(this.getPriority().val())+":"),this.forEachChild(he,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ry(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new V(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ws?-1:0}withIndex(e){if(e===qr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(he),i=n.getIterator(he);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qr?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yk extends j{constructor(){super(new Ke(md),j.EMPTY_NODE,Kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Ws=new yk;Object.defineProperties(V,{MIN:{value:new V(oi,j.EMPTY_NODE)},MAX:{value:new V(hr,Ws)}});e_.__EMPTY_NODE=j.EMPTY_NODE;Ee.__childrenNodeConstructor=j;dk(Ws);fk(Ws);/**
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
 */const _k=!0;function Re(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,Re(e))}if(!(t instanceof Array)&&_k){const n=[];let r=!1;if(Je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Re(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new V(o,a)))}}),n.length===0)return j.EMPTY_NODE;const s=ul(n,uk,o=>o.name,md);if(r){const o=ul(n,he.getCompare());return new j(s,Re(e),new Kt({".priority":o},{".priority":he}))}else return new j(s,Re(e),Kt.Default)}else{let n=j.EMPTY_NODE;return Je(t,(r,i)=>{if(on(t,r)&&r.substring(0,1)!=="."){const s=Re(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Re(e))}}hk(Re);/**
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
 */class vk extends Bl{constructor(e){super(),this.indexPath_=e,T(!K(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?yi(e.name,n.name):s}makePost(e,n){const r=Re(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new V(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Ws);return new V(hr,e)}toString(){return Xy(this.indexPath_,0).join("/")}}/**
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
 */class wk extends Bl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?yi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const r=Re(e);return new V(n,r)}toString(){return".value"}}const Ek=new wk;/**
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
 */function s_(t){return{type:"value",snapshotNode:t}}function li(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Cs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Sk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class gd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Cs(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(li(n,r)):o.trackChildChange(xs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(he,(i,s)=>{n.hasChild(i)||r.trackChildChange(Cs(i,s))}),n.isLeafNode()||n.forEachChild(he,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(xs(i,s,o))}else r.trackChildChange(li(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ks{constructor(e){this.indexedFilter_=new gd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ks.getStartPost_(e),this.endPost_=ks.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new V(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(he,(o,l)=>{s.matches(new V(o,l))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Ck{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ks(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new V(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(p,w)=>u(w,p)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const a=new V(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||l.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const w=p==null?1:o(p,a);if(d&&!r.isEmpty()&&w>=0)return s!=null&&s.trackChildChange(xs(n,r,u)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Cs(n,u));const C=l.updateImmediateChild(n,j.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(li(p.name,p.node)),C.updateImmediateChild(p.name,p.node)):C}}else return r.isEmpty()?e:d&&o(c,a)>=0?(s!=null&&(s.trackChildChange(Cs(c.name,c.node)),s.trackChildChange(li(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
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
 */class yd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oi}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new yd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xk(t){return t.loadsAllData()?new gd(t.getIndex()):t.hasLimit()?new Ck(t):new ks(t)}function Xf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===he?n="$priority":t.index_===Ek?n="$value":t.index_===qr?n="$key":(T(t.index_ instanceof vk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==he&&(e.i=t.index_.toString()),e}/**
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
 */class dl extends qy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=zs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=dl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Xf(e._queryParams);this.restRequest_(s+".json",a,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),ri(this.listens_,o)===l){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=dl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Xf(e._queryParams),r=e._path.toString(),i=new Os;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=_s(l.responseText)}catch{Xe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Xe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class kk{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function hl(){return{value:null,children:new Map}}function o_(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=H(e);t.children.has(r)||t.children.set(r,hl());const i=t.children.get(r);e=ne(e),o_(i,e,n)}}function $c(t,e,n){t.value!==null?n(e,t.value):Ik(t,(r,i)=>{const s=new ee(e.toString()+"/"+r);$c(i,s,n)})}function Ik(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Tk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Zf=10*1e3,Rk=30*1e3,Pk=5*60*1e3;class Nk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Tk(e);const r=Zf+(Rk-Zf)*Math.random();Xi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Je(e,(i,s)=>{s>0&&on(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Xi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pk))}}/**
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
 */var xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xt||(xt={}));function l_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _d(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class fl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=xt.ACK_USER_WRITE,this.source=l_()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new fl(Q(),n,this.revert)}}else return T(H(this.path)===e,"operationForChild called for unrelated child."),new fl(ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class Is{constructor(e,n){this.source=e,this.path=n,this.type=xt.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new Is(this.source,Q()):new Is(this.source,ne(this.path))}}/**
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
 */class fr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=xt.OVERWRITE}operationForChild(e){return K(this.path)?new fr(this.source,Q(),this.snap.getImmediateChild(e)):new fr(this.source,ne(this.path),this.snap)}}/**
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
 */class Ts{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=xt.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new fr(this.source,Q(),n.value):new Ts(this.source,Q(),n)}else return T(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ts(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class pr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=H(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ak{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bk(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Sk(o.childName,o.snapshotNode))}),bi(t,i,"child_removed",e,r,n),bi(t,i,"child_added",e,r,n),bi(t,i,"child_moved",s,r,n),bi(t,i,"child_changed",e,r,n),bi(t,i,"value",e,r,n),i}function bi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>Dk(t,l,a)),o.forEach(l=>{const a=Ok(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Ok(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Dk(t,e,n){if(e.childName==null||n.childName==null)throw hi("Should only compare child_ events.");const r=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function $l(t,e){return{eventCache:t,serverCache:e}}function Ji(t,e,n,r){return $l(new pr(e,n,r),t.serverCache)}function a_(t,e,n,r){return $l(t.eventCache,new pr(e,n,r))}function Hc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function mr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ma;const Lk=()=>(Ma||(Ma=new Ke(wx)),Ma);class se{static fromObject(e){let n=new se(null);return Je(e,(r,i)=>{n=n.set(new ee(r),i)}),n}constructor(e,n=Lk()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(K(e))return null;{const r=H(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ne(e),n);return s!=null?{path:ve(new ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=H(e),r=this.children.get(n);return r!==null?r.subtree(ne(e)):new se(null)}}set(e,n){if(K(e))return new se(n,this.children);{const r=H(e),s=(this.children.get(r)||new se(null)).set(ne(e),n),o=this.children.insert(r,s);return new se(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new se(null):new se(null,this.children);{const n=H(e),r=this.children.get(n);if(r){const i=r.remove(ne(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new se(null):new se(this.value,s)}else return this}}get(e){if(K(e))return this.value;{const n=H(e),r=this.children.get(n);return r?r.get(ne(e)):null}}setTree(e,n){if(K(e))return n;{const r=H(e),s=(this.children.get(r)||new se(null)).setTree(ne(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new se(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ve(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(K(e))return null;{const s=H(e),o=this.children.get(s);return o?o.findOnPath_(ne(e),ve(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const i=H(e),s=this.children.get(i);return s?s.foreachOnPath_(ne(e),ve(n,i),r):new se(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Tt{constructor(e){this.writeTree_=e}static empty(){return new Tt(new se(null))}}function Zi(t,e,n){if(K(e))return new Tt(new se(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ge(i,e);return s=s.updateChild(o,n),new Tt(t.writeTree_.set(i,s))}else{const i=new se(n),s=t.writeTree_.setTree(e,i);return new Tt(s)}}}function ep(t,e,n){let r=t;return Je(n,(i,s)=>{r=Zi(r,ve(e,i),s)}),r}function tp(t,e){if(K(e))return Tt.empty();{const n=t.writeTree_.setTree(e,new se(null));return new Tt(n)}}function Vc(t,e){return vr(t,e)!=null}function vr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ge(n.path,e)):null}function np(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(r,i)=>{e.push(new V(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new V(r,i.value))}),e}function Ln(t,e){if(K(e))return t;{const n=vr(t,e);return n!=null?new Tt(new se(n)):new Tt(t.writeTree_.subtree(e))}}function Gc(t){return t.writeTree_.isEmpty()}function ai(t,e){return c_(Q(),t.writeTree_,e)}function c_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=c_(ve(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ve(t,".priority"),r)),n}}/**
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
 */function wd(t,e){return f_(e,t)}function Mk(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Zi(t.visibleWrites,e,n)),t.lastWriteId=r}function Fk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function jk(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Uk(l,r.path)?i=!1:Ct(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return zk(t),!0;if(r.snap)t.visibleWrites=tp(t.visibleWrites,r.path);else{const l=r.children;Je(l,a=>{t.visibleWrites=tp(t.visibleWrites,ve(r.path,a))})}return!0}else return!1}function Uk(t,e){if(t.snap)return Ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ct(ve(t.path,n),e))return!0;return!1}function zk(t){t.visibleWrites=u_(t.allWrites,Wk,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Wk(t){return t.visible}function u_(t,e,n){let r=Tt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Ct(n,o)?(l=Ge(n,o),r=Zi(r,l,s.snap)):Ct(o,n)&&(l=Ge(o,n),r=Zi(r,Q(),s.snap.getChild(l)));else if(s.children){if(Ct(n,o))l=Ge(n,o),r=ep(r,l,s.children);else if(Ct(o,n))if(l=Ge(o,n),K(l))r=ep(r,Q(),s.children);else{const a=ri(s.children,H(l));if(a){const c=a.getChild(ne(l));r=Zi(r,Q(),c)}}}else throw hi("WriteRecord should have .snap or .children")}}return r}function d_(t,e,n,r,i){if(!r&&!i){const s=vr(t.visibleWrites,e);if(s!=null)return s;{const o=Ln(t.visibleWrites,e);if(Gc(o))return n;if(n==null&&!Vc(o,Q()))return null;{const l=n||j.EMPTY_NODE;return ai(o,l)}}}else{const s=Ln(t.visibleWrites,e);if(!i&&Gc(s))return n;if(!i&&n==null&&!Vc(s,Q()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Ct(c.path,e)||Ct(e,c.path))},l=u_(t.allWrites,o,e),a=n||j.EMPTY_NODE;return ai(l,a)}}}function Bk(t,e,n){let r=j.EMPTY_NODE;const i=vr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ln(t.visibleWrites,e);return n.forEachChild(he,(o,l)=>{const a=ai(Ln(s,new ee(o)),l);r=r.updateImmediateChild(o,a)}),np(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ln(t.visibleWrites,e);return np(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $k(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ve(e,n);if(Vc(t.visibleWrites,s))return null;{const o=Ln(t.visibleWrites,s);return Gc(o)?i.getChild(n):ai(o,i.getChild(n))}}function Hk(t,e,n,r){const i=ve(e,n),s=vr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ln(t.visibleWrites,i);return ai(o,r.getNode().getImmediateChild(n))}else return null}function Vk(t,e){return vr(t.visibleWrites,e)}function Gk(t,e,n,r,i,s,o){let l;const a=Ln(t.visibleWrites,e),c=vr(a,Q());if(c!=null)l=c;else if(n!=null)l=ai(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],u=o.getCompare(),p=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let w=p.getNext();for(;w&&d.length<i;)u(w,r)!==0&&d.push(w),w=p.getNext();return d}else return[]}function Kk(){return{visibleWrites:Tt.empty(),allWrites:[],lastWriteId:-1}}function pl(t,e,n,r){return d_(t.writeTree,t.treePath,e,n,r)}function Ed(t,e){return Bk(t.writeTree,t.treePath,e)}function rp(t,e,n,r){return $k(t.writeTree,t.treePath,e,n,r)}function ml(t,e){return Vk(t.writeTree,ve(t.treePath,e))}function qk(t,e,n,r,i,s){return Gk(t.writeTree,t.treePath,e,n,r,i,s)}function Sd(t,e,n){return Hk(t.writeTree,t.treePath,e,n)}function h_(t,e){return f_(ve(t.treePath,e),t.writeTree)}function f_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Yk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,xs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Cs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,li(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,xs(r,e.snapshotNode,i.oldSnap));else throw hi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Qk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const p_=new Qk;class Cd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new pr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mr(this.viewCache_),s=qk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Xk(t){return{filter:t}}function Jk(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Zk(t,e,n,r,i){const s=new Yk;let o,l;if(n.type===xt.OVERWRITE){const c=n;c.source.fromUser?o=Kc(t,e,c.path,c.snap,r,i,s):(T(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=gl(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===xt.MERGE){const c=n;c.source.fromUser?o=tI(t,e,c.path,c.children,r,i,s):(T(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=qc(t,e,c.path,c.children,r,i,l,s))}else if(n.type===xt.ACK_USER_WRITE){const c=n;c.revert?o=iI(t,e,c.path,r,i,s):o=nI(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===xt.LISTEN_COMPLETE)o=rI(t,e,n.path,r,s);else throw hi("Unknown operation type: "+n.type);const a=s.getChanges();return eI(e,o,a),{viewCache:o,changes:a}}function eI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Hc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(s_(Hc(e)))}}function m_(t,e,n,r,i,s){const o=e.eventCache;if(ml(r,n)!=null)return e;{let l,a;if(K(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=mr(e),d=c instanceof j?c:j.EMPTY_NODE,u=Ed(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=pl(r,mr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=H(n);if(c===".priority"){T(jn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const u=rp(r,n,d,a);u!=null?l=t.filter.updatePriority(d,u):l=o.getNode()}else{const d=ne(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const p=rp(r,n,o.getNode(),a);p!=null?u=o.getNode().getImmediateChild(c).updateChild(d,p):u=o.getNode().getImmediateChild(c)}else u=Sd(r,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,d,i,s):l=o.getNode()}}return Ji(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function gl(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(K(n))c=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const w=a.getNode().updateChild(n,r);c=d.updateFullNode(a.getNode(),w,null)}else{const w=H(n);if(!a.isCompleteForPath(n)&&jn(n)>1)return e;const E=ne(n),U=a.getNode().getImmediateChild(w).updateChild(E,r);w===".priority"?c=d.updatePriority(a.getNode(),U):c=d.updateChild(a.getNode(),w,U,E,p_,null)}const u=a_(e,c,a.isFullyInitialized()||K(n),d.filtersNodes()),p=new Cd(i,u,s);return m_(t,u,n,i,p,l)}function Kc(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const d=new Cd(i,e,s);if(K(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ji(e,c,!0,t.filter.filtersNodes());else{const u=H(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ji(e,c,l.isFullyInitialized(),l.isFiltered());else{const p=ne(n),w=l.getNode().getImmediateChild(u);let E;if(K(p))E=r;else{const C=d.getCompleteChild(u);C!=null?Qy(p)===".priority"&&C.getChild(Jy(p)).isEmpty()?E=C:E=C.updateChild(p,r):E=j.EMPTY_NODE}if(w.equals(E))a=e;else{const C=t.filter.updateChild(l.getNode(),u,E,p,d,o);a=Ji(e,C,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ip(t,e){return t.eventCache.isCompleteForChild(e)}function tI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const d=ve(n,a);ip(e,H(d))&&(l=Kc(t,l,d,c,i,s,o))}),r.foreach((a,c)=>{const d=ve(n,a);ip(e,H(d))||(l=Kc(t,l,d,c,i,s,o))}),l}function sp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function qc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;K(n)?c=r:c=new se(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,p)=>{if(d.hasChild(u)){const w=e.serverCache.getNode().getImmediateChild(u),E=sp(t,w,p);a=gl(t,a,new ee(u),E,i,s,o,l)}}),c.children.inorderTraversal((u,p)=>{const w=!e.serverCache.isCompleteForChild(u)&&p.value===null;if(!d.hasChild(u)&&!w){const E=e.serverCache.getNode().getImmediateChild(u),C=sp(t,E,p);a=gl(t,a,new ee(u),C,i,s,o,l)}}),a}function nI(t,e,n,r,i,s,o){if(ml(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(K(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return gl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(K(n)){let c=new se(null);return a.getNode().forEachChild(qr,(d,u)=>{c=c.set(new ee(d),u)}),qc(t,e,n,c,i,s,l,o)}else return e}else{let c=new se(null);return r.foreach((d,u)=>{const p=ve(n,d);a.isCompleteForPath(p)&&(c=c.set(d,a.getNode().getChild(p)))}),qc(t,e,n,c,i,s,l,o)}}function rI(t,e,n,r,i){const s=e.serverCache,o=a_(e,s.getNode(),s.isFullyInitialized()||K(n),s.isFiltered());return m_(t,o,n,r,p_,i)}function iI(t,e,n,r,i,s){let o;if(ml(r,n)!=null)return e;{const l=new Cd(r,e,i),a=e.eventCache.getNode();let c;if(K(n)||H(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=pl(r,mr(e));else{const u=e.serverCache.getNode();T(u instanceof j,"serverChildren would be complete if leaf node"),d=Ed(r,u)}d=d,c=t.filter.updateFullNode(a,d,s)}else{const d=H(n);let u=Sd(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=a.getImmediateChild(d)),u!=null?c=t.filter.updateChild(a,d,u,ne(n),l,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(a,d,j.EMPTY_NODE,ne(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pl(r,mr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||ml(r,Q())!=null,Ji(e,c,o,t.filter.filtersNodes())}}/**
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
 */class sI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new gd(r.getIndex()),s=xk(r);this.processor_=Xk(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(j.EMPTY_NODE,l.getNode(),null),d=new pr(a,o.isFullyInitialized(),i.filtersNodes()),u=new pr(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=$l(u,d),this.eventGenerator_=new Ak(this.query_)}get query(){return this.query_}}function oI(t){return t.viewCache_.serverCache.getNode()}function lI(t,e){const n=mr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(H(e)).isEmpty())?n.getChild(e):null}function op(t){return t.eventRegistrations_.length===0}function aI(t,e){t.eventRegistrations_.push(e)}function lp(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function ap(t,e,n,r){e.type===xt.MERGE&&e.source.queryId!==null&&(T(mr(t.viewCache_),"We should always have a full cache before handling merges"),T(Hc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Zk(t.processor_,i,e,n,r);return Jk(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,g_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function cI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(he,(s,o)=>{r.push(li(s,o))}),n.isFullyInitialized()&&r.push(s_(n.getNode())),g_(t,r,n.getNode(),e)}function g_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return bk(t.eventGenerator_,e,n,i)}/**
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
 */let yl;class uI{constructor(){this.views=new Map}}function dI(t){T(!yl,"__referenceConstructor has already been defined"),yl=t}function hI(){return T(yl,"Reference.ts has not been loaded"),yl}function fI(t){return t.views.size===0}function xd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),ap(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ap(o,e,n,r));return s}}function pI(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=pl(n,i?r:null),a=!1;l?a=!0:r instanceof j?(l=Ed(n,r),a=!1):(l=j.EMPTY_NODE,a=!1);const c=$l(new pr(l,a,!1),new pr(r,i,!1));return new sI(e,c)}return o}function mI(t,e,n,r,i,s){const o=pI(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),aI(o,n),cI(o,n)}function gI(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Un(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(lp(c,n,r)),op(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(lp(a,n,r)),op(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Un(t)&&s.push(new(hI())(e._repo,e._path)),{removed:s,events:o}}function y_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Yr(t,e){let n=null;for(const r of t.views.values())n=n||lI(r,e);return n}function __(t,e){if(e._queryParams.loadsAllData())return Hl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function v_(t,e){return __(t,e)!=null}function Un(t){return Hl(t)!=null}function Hl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let _l;function yI(t){T(!_l,"__referenceConstructor has already been defined"),_l=t}function _I(){return T(_l,"Reference.ts has not been loaded"),_l}let vI=1;class cp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new se(null),this.pendingWriteTree_=Kk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function w_(t,e,n,r,i){return Mk(t.pendingWriteTree_,e,n,r,i),i?Bs(t,new fr(l_(),e,n)):[]}function tr(t,e,n=!1){const r=Fk(t.pendingWriteTree_,e);if(jk(t.pendingWriteTree_,e)){let s=new se(null);return r.snap!=null?s=s.set(Q(),!0):Je(r.children,o=>{s=s.set(new ee(o),!0)}),Bs(t,new fl(r.path,s,n))}else return[]}function Vl(t,e,n){return Bs(t,new fr(_d(),e,n))}function wI(t,e,n){const r=se.fromObject(n);return Bs(t,new Ts(_d(),e,r))}function EI(t,e){return Bs(t,new Is(_d(),e))}function SI(t,e,n){const r=Id(t,n);if(r){const i=Td(r),s=i.path,o=i.queryId,l=Ge(s,e),a=new Is(vd(o),l);return Rd(t,s,a)}else return[]}function Yc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||v_(o,e))){const a=gI(o,e,n,r);fI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const d=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(p,w)=>Un(w));if(d&&!u){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const w=kI(p);for(let E=0;E<w.length;++E){const C=w[E],U=C.query,y=C_(t,C);t.listenProvider_.startListening(es(U),vl(t,U),y.hashFn,y.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(es(e),null):c.forEach(p=>{const w=t.queryToTagMap.get(Gl(p));t.listenProvider_.stopListening(es(p),w)}))}II(t,c)}return l}function CI(t,e,n,r){const i=Id(t,r);if(i!=null){const s=Td(i),o=s.path,l=s.queryId,a=Ge(o,e),c=new fr(vd(l),a,n);return Rd(t,o,c)}else return[]}function xI(t,e,n,r){const i=Id(t,r);if(i){const s=Td(i),o=s.path,l=s.queryId,a=Ge(o,e),c=se.fromObject(n),d=new Ts(vd(l),a,c);return Rd(t,o,d)}else return[]}function up(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,w)=>{const E=Ge(p,i);s=s||Yr(w,E),o=o||Un(w)});let l=t.syncPointTree_.get(i);l?(o=o||Un(l),s=s||Yr(l,Q())):(l=new uI,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((w,E)=>{const C=Yr(E,Q());C&&(s=s.updateImmediateChild(w,C))}));const c=v_(l,e);if(!c&&!e._queryParams.loadsAllData()){const p=Gl(e);T(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const w=TI();t.queryToTagMap.set(p,w),t.tagToQueryMap.set(w,p)}const d=wd(t.pendingWriteTree_,i);let u=mI(l,e,n,d,s,a);if(!c&&!o&&!r){const p=__(l,e);u=u.concat(RI(t,e,p))}return u}function kd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ge(o,e),c=Yr(l,a);if(c)return c});return d_(i,e,s,n,!0)}function Bs(t,e){return E_(e,t.syncPointTree_,null,wd(t.pendingWriteTree_,Q()))}function E_(t,e,n,r){if(K(t.path))return S_(t,e,n,r);{const i=e.get(Q());n==null&&i!=null&&(n=Yr(i,Q()));let s=[];const o=H(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,d=h_(r,o);s=s.concat(E_(l,a,c,d))}return i&&(s=s.concat(xd(i,t,r,n))),s}}function S_(t,e,n,r){const i=e.get(Q());n==null&&i!=null&&(n=Yr(i,Q()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=h_(r,o),d=t.operationForChild(o);d&&(s=s.concat(S_(d,l,a,c)))}),i&&(s=s.concat(xd(i,t,r,n))),s}function C_(t,e){const n=e.query,r=vl(t,n);return{hashFn:()=>(oI(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?SI(t,n._path,r):EI(t,n._path);{const s=Cx(i,n);return Yc(t,n,null,s)}}}}function vl(t,e){const n=Gl(e);return t.queryToTagMap.get(n)}function Gl(t){return t._path.toString()+"$"+t._queryIdentifier}function Id(t,e){return t.tagToQueryMap.get(e)}function Td(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function Rd(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=wd(t.pendingWriteTree_,e);return xd(r,n,i,null)}function kI(t){return t.fold((e,n,r)=>{if(n&&Un(n))return[Hl(n)];{let i=[];return n&&(i=y_(n)),Je(r,(s,o)=>{i=i.concat(o)}),i}})}function es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(_I())(t._repo,t._path):t}function II(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Gl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function TI(){return vI++}function RI(t,e,n){const r=e._path,i=vl(t,e),s=C_(t,n),o=t.listenProvider_.startListening(es(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)T(!Un(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,d,u)=>{if(!K(c)&&d&&Un(d))return[Hl(d).query];{let p=[];return d&&(p=p.concat(y_(d).map(w=>w.query))),Je(u,(w,E)=>{p=p.concat(E)}),p}});for(let c=0;c<a.length;++c){const d=a[c];t.listenProvider_.stopListening(es(d),vl(t,d))}}return o}/**
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
 */class Pd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Pd(n)}node(){return this.node_}}class Nd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Nd(this.syncTree_,n)}node(){return kd(this.syncTree_,this.path_)}}const PI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dp=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return NI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return AI(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},NI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},AI=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},bI=function(t,e,n,r){return Ad(e,new Nd(n,t),r)},x_=function(t,e,n){return Ad(t,new Pd(e),n)};function Ad(t,e,n){const r=t.getPriority().val(),i=dp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=dp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ee(l,Re(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ee(i))),o.forEachChild(he,(l,a)=>{const c=Ad(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
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
 */class bd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Od(t,e){let n=e instanceof ee?e:new ee(e),r=t,i=H(n);for(;i!==null;){const s=ri(r.node.children,i)||{children:{},childCount:0};r=new bd(i,r,s),n=ne(n),i=H(n)}return r}function vi(t){return t.node.value}function k_(t,e){t.node.value=e,Qc(t)}function I_(t){return t.node.childCount>0}function OI(t){return vi(t)===void 0&&!I_(t)}function Kl(t,e){Je(t.node.children,(n,r)=>{e(new bd(n,t,r))})}function T_(t,e,n,r){n&&e(t),Kl(t,i=>{T_(i,e,!0)})}function DI(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function $s(t){return new ee(t.parent===null?t.name:$s(t.parent)+"/"+t.name)}function Qc(t){t.parent!==null&&LI(t.parent,t.name,t)}function LI(t,e,n){const r=OI(n),i=on(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Qc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qc(t))}/**
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
 */const MI=/[\[\].#$\/\u0000-\u001F\u007F]/,FI=/[\[\].#$\u0000-\u001F\u007F]/,Fa=10*1024*1024,R_=function(t){return typeof t=="string"&&t.length!==0&&!MI.test(t)},P_=function(t){return typeof t=="string"&&t.length!==0&&!FI.test(t)},jI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),P_(t)},UI=function(t,e,n,r){Dd(Xu(t,"value"),e,n)},Dd=function(t,e,n){const r=n instanceof ee?new nk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Qn(r)+" with contents = "+e.toString());if(Py(e))throw new Error(t+"contains "+e.toString()+" "+Qn(r));if(typeof e=="string"&&e.length>Fa/3&&Fl(e)>Fa)throw new Error(t+"contains a string greater than "+Fa+" utf8 bytes "+Qn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!R_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rk(r,o),Dd(t,l,r),ik(r)}),i&&s)throw new Error(t+' contains ".value" child '+Qn(r)+" in addition to actual children.")}},N_=function(t,e,n,r){if(!P_(n))throw new Error(Xu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),N_(t,e,n)},WI=function(t,e){if(H(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},BI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!R_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!jI(n))throw new Error(Xu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class $I{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ld(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!fd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function A_(t,e,n){Ld(t,n),b_(t,r=>fd(r,e))}function rn(t,e,n){Ld(t,n),b_(t,r=>Ct(r,e)||Ct(e,r))}function b_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(HI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function HI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Qi&&Le("event: "+n.toString()),_i(r)}}}/**
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
 */const VI="repo_interrupt",GI=25;class KI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $I,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hl(),this.transactionQueueTree_=new bd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qI(t,e,n){if(t.stats_=dd(t.repoInfo_),t.forceRestClient_||Tx())t.server_=new dl(t.repoInfo_,(r,i,s,o)=>{hp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yt(t.repoInfo_,e,(r,i,s,o)=>{hp(t,r,i,s,o)},r=>{fp(t,r)},r=>{QI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=bx(t.repoInfo_,()=>new Nk(t.stats_,t.server_)),t.infoData_=new kk,t.infoSyncTree_=new cp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Vl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Fd(t,"connected",!1),t.serverSyncTree_=new cp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);rn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function YI(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Md(t){return PI({timestamp:YI(t)})}function hp(t,e,n,r,i){t.dataUpdateCount++;const s=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=el(n,c=>Re(c));o=xI(t.serverSyncTree_,s,a,i)}else{const a=Re(n);o=CI(t.serverSyncTree_,s,a,i)}else if(r){const a=el(n,c=>Re(c));o=wI(t.serverSyncTree_,s,a)}else{const a=Re(n);o=Vl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ql(t,s)),rn(t.eventQueue_,l,o)}function fp(t,e){Fd(t,"connected",e),e===!1&&JI(t)}function QI(t,e){Je(e,(n,r)=>{Fd(t,n,r)})}function Fd(t,e,n){const r=new ee("/.info/"+e),i=Re(n);t.infoData_.updateSnapshot(r,i);const s=Vl(t.infoSyncTree_,r,i);rn(t.eventQueue_,r,s)}function O_(t){return t.nextWriteId_++}function XI(t,e,n,r,i){jd(t,"set",{path:e.toString(),value:n,priority:r});const s=Md(t),o=Re(n,r),l=kd(t.serverSyncTree_,e),a=x_(o,l,s),c=O_(t),d=w_(t.serverSyncTree_,e,a,c,!0);Ld(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(p,w)=>{const E=p==="ok";E||Xe("set at "+e+" failed: "+p);const C=tr(t.serverSyncTree_,c,!E);rn(t.eventQueue_,e,C),t1(t,i,p,w)});const u=j_(t,e);ql(t,u),rn(t.eventQueue_,u,[])}function JI(t){jd(t,"onDisconnectEvents");const e=Md(t),n=hl();$c(t.onDisconnect_,Q(),(i,s)=>{const o=bI(i,s,t.serverSyncTree_,e);o_(n,i,o)});let r=[];$c(n,Q(),(i,s)=>{r=r.concat(Vl(t.serverSyncTree_,i,s));const o=j_(t,i);ql(t,o)}),t.onDisconnect_=hl(),rn(t.eventQueue_,Q(),r)}function ZI(t,e,n){let r;H(e._path)===".info"?r=up(t.infoSyncTree_,e,n):r=up(t.serverSyncTree_,e,n),A_(t.eventQueue_,e._path,r)}function pp(t,e,n){let r;H(e._path)===".info"?r=Yc(t.infoSyncTree_,e,n):r=Yc(t.serverSyncTree_,e,n),A_(t.eventQueue_,e._path,r)}function e1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(VI)}function jd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function t1(t,e,n,r){e&&_i(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function D_(t,e,n){return kd(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Ud(t,e=t.transactionQueueTree_){if(e||Yl(t,e),vi(e)){const n=M_(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&n1(t,$s(e),n)}else I_(e)&&Kl(e,n=>{Ud(t,n)})}function n1(t,e,n){const r=n.map(c=>c.currentWriteId),i=D_(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];T(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=Ge(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{jd(t,"transaction put response",{path:a.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let p=0;p<n.length;p++)n[p].status=2,d=d.concat(tr(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&u.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Yl(t,Od(t.transactionQueueTree_,e)),Ud(t,t.transactionQueueTree_),rn(t.eventQueue_,e,d);for(let p=0;p<u.length;p++)_i(u[p])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Xe("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}ql(t,e)}},o)}function ql(t,e){const n=L_(t,e),r=$s(n),i=M_(t,n);return r1(t,i,r),r}function r1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ge(n,a.path);let d=!1,u;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,u=a.abortReason,i=i.concat(tr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=GI)d=!0,u="maxretry",i=i.concat(tr(t.serverSyncTree_,a.currentWriteId,!0));else{const p=D_(t,a.path,o);a.currentInputSnapshot=p;const w=e[l].update(p.val());if(w!==void 0){Dd("transaction failed: Data returned ",w,a.path);let E=Re(w);typeof w=="object"&&w!=null&&on(w,".priority")||(E=E.updatePriority(p.getPriority()));const U=a.currentWriteId,y=Md(t),m=x_(E,p,y);a.currentOutputSnapshotRaw=E,a.currentOutputSnapshotResolved=m,a.currentWriteId=O_(t),o.splice(o.indexOf(U),1),i=i.concat(w_(t.serverSyncTree_,a.path,m,a.currentWriteId,a.applyLocally)),i=i.concat(tr(t.serverSyncTree_,U,!0))}else d=!0,u="nodata",i=i.concat(tr(t.serverSyncTree_,a.currentWriteId,!0))}rn(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(p){setTimeout(p,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(u),!1,null))))}Yl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)_i(r[l]);Ud(t,t.transactionQueueTree_)}function L_(t,e){let n,r=t.transactionQueueTree_;for(n=H(e);n!==null&&vi(r)===void 0;)r=Od(r,n),e=ne(e),n=H(e);return r}function M_(t,e){const n=[];return F_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function F_(t,e,n){const r=vi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Kl(e,i=>{F_(t,i,n)})}function Yl(t,e){const n=vi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,k_(e,n.length>0?n:void 0)}Kl(e,r=>{Yl(t,r)})}function j_(t,e){const n=$s(L_(t,e)),r=Od(t.transactionQueueTree_,e);return DI(r,i=>{ja(t,i)}),ja(t,r),T_(r,i=>{ja(t,i)}),n}function ja(t,e){const n=vi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(tr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?k_(e,void 0):n.length=s+1,rn(t.eventQueue_,$s(e),i);for(let o=0;o<r.length;o++)_i(r[o])}}/**
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
 */function i1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function s1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const mp=function(t,e){const n=o1(t),r=n.namespace;n.domain==="firebase.com"&&nn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&nn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_x();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ee(n.pathString)}},o1=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=i1(t.substring(d,u)));const p=s1(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const w=e.slice(0,c);if(w.toLowerCase()==="localhost")n="localhost";else if(w.split(".").length<=2)n=w;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class l1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class a1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class c1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class zd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return K(this._path)?null:Qy(this._path)}get ref(){return new Vn(this._repo,this._path)}get _queryIdentifier(){const e=Jf(this._queryParams),n=cd(e);return n==="{}"?"default":n}get _queryObject(){return Jf(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof zd))return!1;const n=this._repo===e._repo,r=fd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+tk(this._path)}}class Vn extends zd{constructor(e,n){super(e,n,new yd,!1)}get parent(){const e=Jy(this._path);return e===null?null:new Vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class wl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),r=Xc(this.ref,e);return new wl(this._node.getChild(n),r,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new wl(i,Xc(this.ref,r),he)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jt(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?Xc(t._root,e):t._root}function Xc(t,e){return t=Ze(t),H(t._path)===null?zI("child","path",e):N_("child","path",e),new Vn(t._repo,ve(t._path,e))}function Cr(t,e){t=Ze(t),WI("set",t._path),UI("set",e,t._path);const n=new Os;return XI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Wd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new l1("value",this,new wl(e.snapshotNode,new Vn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new a1(this,e,n):null}matches(e){return e instanceof Wd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function u1(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,c=(d,u)=>{pp(t._repo,t,l),a(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new c1(n,s||void 0),l=new Wd(o);return ZI(t._repo,t,l),()=>pp(t._repo,t,l)}function Oi(t,e,n,r){return u1(t,"value",e,n,r)}dI(Vn);yI(Vn);/**
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
 */const d1="FIREBASE_DATABASE_EMULATOR_HOST",Jc={};let h1=!1;function f1(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Ls(s);t.repoInfo_=new Wy(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function p1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||nn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=mp(s,i),l=o.repoInfo,a;typeof process<"u"&&Df&&(a=Df[d1]),a?(s=`http://${a}?ns=${l.namespace}`,o=mp(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new Px(t.name,t.options,e);BI("Invalid Firebase Database URL",o),K(o.path)||nn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=g1(l,t,c,new Rx(t,n));return new y1(d,t)}function m1(t,e){const n=Jc[e];(!n||n[t.key]!==t)&&nn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),e1(t),delete n[t.key]}function g1(t,e,n,r){let i=Jc[e.name];i||(i={},Jc[e.name]=i);let s=i[t.toURLString()];return s&&nn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new KI(t,h1,n,r),i[t.toURLString()]=s,s}class y1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vn(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(m1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nn("Cannot call "+e+" on a deleted database.")}}function _1(t=Bg(),e){const n=ed(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Tw("database");r&&v1(n,...r)}return n}function v1(t,e,n,r={}){t=Ze(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&cr(r,s.repoInfo_.emulatorOptions))return;nn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&nn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new To(To.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Rw(r.mockUserToken,t.app.options.projectId);o=new To(l)}Ls(e)&&jg(e),f1(s,i,r,o)}/**
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
 */function w1(t){hx(pi),ii(new ur("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return p1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),On(Lf,Mf,t),On(Lf,Mf,"esm2020")}/**
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
 */Yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};w1();const E1={apiKey:"AIzaSyAEPNgXhItKISTG-mnybLEdPVmuXLe9cu8",authDomain:"habit-tracker-1c359.firebaseapp.com",projectId:"habit-tracker-1c359",storageBucket:"habit-tracker-1c359.firebasestorage.app",messagingSenderId:"633793333230",appId:"1:633793333230:web:0cfe83db253d96974eb0ff",databaseURL:"https://habit-tracker-1c359-default-rtdb.firebaseio.com"},U_=Wg(E1),Zc=ux(U_),Ut=_1(U_),S1=[{email:"gp47@habits.local",password:"gp47pass123",name:"GP47",emoji:"🚀",color:"#FF6B9D",bgColor:"#FFE5F0"},{email:"pri@habits.local",password:"pripass123",name:"Pri",emoji:"🎯",color:"#00D9FF",bgColor:"#E0F7FF"},{email:"nikki@habits.local",password:"nikkilogpass123",name:"Nikki",emoji:"✨",color:"#FFAA00",bgColor:"#FFF4E0"},{email:"sid@habits.local",password:"sidpass123",name:"Sid",emoji:"⚡",color:"#7FFF00",bgColor:"#F0FFE0"}];function C1(){const[t,e]=G.useState(!1),[n,r]=G.useState(""),i=async s=>{r(""),e(!0);try{await YS(Zc,s.email,s.password)}catch(o){r("Login failed: "+o.message),e(!1)}};return f.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #0f0f1e 0%, #1a1a3e 50%, #0a2a3e 100%)",color:"#c8b6ff",fontFamily:'"Fredoka One", "Righteous", sans-serif',display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",position:"relative",overflow:"hidden"},children:[f.jsx("div",{style:{position:"absolute",width:"300px",height:"300px",background:"radial-gradient(circle, rgba(200,182,255,0.1) 0%, transparent 70%)",borderRadius:"50%",top:"-100px",right:"-100px",pointerEvents:"none"}}),f.jsx("div",{style:{position:"absolute",width:"300px",height:"300px",background:"radial-gradient(circle, rgba(200,182,255,0.1) 0%, transparent 70%)",borderRadius:"50%",bottom:"-100px",left:"-100px",pointerEvents:"none"}}),f.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a2e 0%, #2d2a4e 100%)",padding:"50px",borderRadius:"20px",border:"2px solid #c8b6ff",maxWidth:"550px",width:"100%",boxShadow:"0 20px 60px rgba(200, 182, 255, 0.2)",position:"relative",zIndex:10},children:[f.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[f.jsx("div",{style:{fontSize:"60px",marginBottom:"15px",animation:"float 3s ease-in-out infinite"},children:"🎯"}),f.jsx("h1",{style:{fontSize:"32px",fontWeight:"bold",margin:"10px 0"},children:"Habit Tracker"}),f.jsx("p",{style:{fontSize:"16px",background:"linear-gradient(90deg, #c8b6ff, #ff006e)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"10px",fontWeight:"bold"},children:"For 4 Friends 🚀"})]}),n&&f.jsx("div",{style:{color:"#ff6b6b",marginBottom:"20px",padding:"12px",background:"#ff6b6b20",borderRadius:"8px",fontSize:"14px",textAlign:"center",border:"1px solid #ff6b6b"},children:n}),f.jsx("div",{style:{textAlign:"center",marginBottom:"25px",color:"#999",fontSize:"13px",textTransform:"uppercase",letterSpacing:"2px",fontWeight:"bold"},children:"👇 Click Your Name to Login"}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"30px"},children:S1.map(s=>f.jsxs("button",{onClick:()=>i(s),disabled:t,style:{padding:"20px 15px",background:s.bgColor,color:s.color,border:`3px solid ${s.color}`,borderRadius:"12px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",fontSize:"16px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",opacity:t?.6:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",textTransform:"uppercase",letterSpacing:"1px",boxShadow:`0 4px 15px ${s.color}30`,transform:"translateY(0px)"},onMouseOver:o=>{o.currentTarget.style.transform="translateY(-5px)",o.currentTarget.style.boxShadow=`0 8px 25px ${s.color}50`,o.currentTarget.style.background=s.color,o.currentTarget.style.color="#0f0f1e"},onMouseOut:o=>{o.currentTarget.style.transform="translateY(0px)",o.currentTarget.style.boxShadow=`0 4px 15px ${s.color}30`,o.currentTarget.style.background=s.bgColor,o.currentTarget.style.color=s.color},children:[f.jsx("span",{style:{fontSize:"28px"},children:s.emoji}),f.jsx("span",{children:s.name})]},s.email))}),f.jsx("style",{children:`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `})]})]})}class x1 extends Ip.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("PomodoroTimer crashed:",e,n)}render(){var e;return this.state.hasError?f.jsxs("div",{style:{minHeight:"100vh",background:"#0f0f1e",color:"#ff6b6b",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif",padding:"20px"},children:[f.jsx("div",{style:{fontSize:"48px",marginBottom:"20px"},children:"❌"}),f.jsx("div",{style:{fontSize:"20px",marginBottom:"10px",fontWeight:"bold"},children:"App Crashed"}),f.jsx("div",{style:{fontSize:"14px",color:"#c8b6ff",maxWidth:"500px",textAlign:"center"},children:f.jsx("pre",{style:{background:"#1a1a2e",padding:"15px",borderRadius:"8px",textAlign:"left",overflow:"auto"},children:(e=this.state.error)==null?void 0:e.toString()})}),f.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:"20px",padding:"10px 20px",background:"#c8b6ff",color:"#0f0f1e",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold"},children:"Reload Page"})]}):this.props.children}}const k1=({user:t})=>{const e=(h=new Date)=>{const g=h.getFullYear(),v=String(h.getMonth()+1).padStart(2,"0"),S=String(h.getDate()).padStart(2,"0");return`${g}-${v}-${S}`},n=["GP47","Pri","Nikki","Sid"],r=[{id:1,name:"Exercise",category:"💪",type:"pomodoro",sessionsRequired:2},{id:2,name:"AI Reading",category:"🤖",type:"pomodoro",sessionsRequired:1},{id:3,name:"Sleep 8hrs",category:"😴",type:"checkbox"},{id:4,name:"Brush Twice Daily",category:"🪥",type:"checkbox"},{id:5,name:"Water Intake",category:"💧",type:"counter",goal:8},{id:6,name:"Take Vitamins",category:"💊",type:"checkbox"},{id:7,name:"Eat 2 Eggs",category:"🥚",type:"checkbox"}],[i,s]=G.useState(null),[o,l]=G.useState(()=>localStorage.getItem("activeTab")||"habits"),[a,c]=G.useState({}),[d,u]=G.useState(!1),[p,w]=G.useState(!0),E=G.useRef(!1),[C,U]=G.useState([]),y=G.useRef(0),[m,_]=G.useState(()=>{const h=localStorage.getItem("notificationsEnabled");return h?JSON.parse(h):!1}),x=G.useRef({}),[R,O]=G.useState(!1),[D,L]=G.useState(""),[J,$]=G.useState({}),[pe,ln]=G.useState(()=>localStorage.getItem("calendarView")||"week"),[Ae,ft]=G.useState({}),[an,wi]=G.useState(e()),[Gn,N]=G.useState({}),z=async()=>{"Notification"in window&&(Notification.permission==="granted"?_(!0):Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(_(!0),b("🔔 Notifications enabled!","success")))},b=(h,g="info",v=3e3)=>{const S=++y.current,I={id:S,message:h,type:g};U(P=>[...P,I]),setTimeout(()=>{U(P=>P.filter(B=>B.id!==S))},v)},te=(h,g={})=>{if(m&&"Notification"in window)try{const v=new Notification(h,{icon:"🏆",badge:"🎯",requireInteraction:!1,tag:"habit-notification",...g});setTimeout(()=>{v&&v.close&&v.close()},3e3)}catch(v){console.error("Notification error:",v)}};G.useEffect(()=>{Object.keys(a).length!==0&&Object.keys(a).forEach(h=>{if(h===i)return;const g=a[h],v=x.current[h];if(!v){x.current[h]=JSON.parse(JSON.stringify(g));return}if(g.pomodoro.sessions>v.pomodoro.sessions){const P=`🎯 ${h} just completed a session! Level ${g.pomodoro.level} 🚀`;b(P,"success"),te(`${h} is crushing it! 🔥`,{body:`They just leveled up to Level ${g.pomodoro.level}!`,tag:"session-complete"})}if(g.pomodoro.level>v.pomodoro.level){const P=`⭐ ${h} just leveled up to Level ${g.pomodoro.level}! 🎉`;b(P,"success"),te(`${h} leveled up! ⭐`,{body:`Now at Level ${g.pomodoro.level}. Can you keep up?`,tag:"level-up"})}const S=g.habits.filter(P=>P.completed),I=v.habits.filter(P=>P.completed);if(S.length>I.length){const P=S.find(B=>!I.includes(B));if(P){const B=`💪 ${h} completed ${P.category} ${P.name}!`;b(B,"info"),te(`${h} is staying on track! 💪`,{body:`Completed: ${P.name}`,tag:"habit-complete"})}}if(g.stats.completionPercentage>=70&&v.stats.completionPercentage<70){const P=`🏆 ${h} hit their daily goal! 70%+ complete 🎉`;b(P,"success"),te(`${h} crushed today's goal! 🏆`,{body:"They hit 70% completion. Don't fall behind!",tag:"daily-goal"})}x.current[h]=JSON.parse(JSON.stringify(g))})},[a,i,m]),G.useEffect(()=>{const h=()=>{const v=new Date,S=new Date(v);S.setDate(S.getDate()+1),S.setHours(0,0,0,0);const I=S-v,P=Math.floor(I/(1e3*60*60)),B=Math.floor(I%(1e3*60*60)/(1e3*60)),W=Math.floor(I%(1e3*60)/1e3);L(`${P}h ${B}m ${W}s`)};h();const g=setInterval(h,1e3);return()=>clearInterval(g)},[]);const me=h=>{const g=h.split("@")[0];return n.find(v=>v.toLowerCase()===g.toLowerCase())||g};if(!t||!t.email)return f.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0a0e27",color:"#c8b6ff"},children:"Loading user data..."});const cn=me(t.email);G.useEffect(()=>{s(cn)},[cn]),G.useEffect(()=>{localStorage.setItem("activeTab",o)},[o]),G.useEffect(()=>{localStorage.setItem("notificationsEnabled",JSON.stringify(m))},[m]),G.useEffect(()=>{localStorage.setItem("calendarView",pe)},[pe]),G.useEffect(()=>{const h=jt(Ut,`history/${an}`);return Oi(h,v=>{v.exists()?N(v.val()):N({})},v=>{console.warn(`History data not found for ${an}:`,v),N({})})},[an]),G.useEffect(()=>{const h=jt(Ut,"history");return Oi(h,v=>{if(v.exists()){const S=v.val();console.log("📊 [HISTORY LOADED] Raw data:",S);const I={};Object.keys(S).forEach(P=>{I[P]={},Object.keys(S[P]).forEach(B=>{I[P][B]={completed:(S[P][B].completionPercentage||0)>=70,completionPercentage:S[P][B].completionPercentage||0}})}),console.log("📊 [COMPLETION MAP]:",I),$(I)}else console.warn("📊 [HISTORY] No history data found in Firebase"),$({})},v=>{console.error("❌ [HISTORY ERROR]:",v),$({})})},[]),G.useEffect(()=>{const h=jt(Ut,"users"),g=setTimeout(()=>{console.warn("Firebase loading timeout - initializing locally");const S={};n.forEach(I=>{S[I]=Fe()}),c(S),w(!1)},5e3),v=Oi(h,S=>{if(clearTimeout(g),S.exists()){let I=S.val();if(n.forEach(P=>{I[P]?I[P]=Ft(I[P],P):I[P]=Fe()}),!E.current){E.current=!0;let P=!1;n.forEach(B=>{if(I[B]){I[B].habits=I[B].habits.map(Ie=>{const mt=r.find(Xl=>Xl.id===Ie.id);return mt&&(!Ie.type||!Ie.category||!Ie.name)?(P=!0,{...mt,...Ie}):Ie});const W=new Set(I[B].habits.map(Ie=>Ie.id));r.forEach(Ie=>{W.has(Ie.id)||(P=!0,I[B].habits.push({...Ie,completed:!1,streak:0,bestStreak:0,count:0,sessionsCompleted:0}))})}}),P&&Cr(h,I).catch(B=>console.error("Error saving migrated data:",B))}c(I)}else{const I={};n.forEach(P=>{I[P]=Fe()}),Cr(h,I).catch(P=>{console.error("Error initializing Firebase:",P),c(I)}),c(I)}w(!1)},S=>{clearTimeout(g),console.error("Firebase error:",S);const I={};n.forEach(P=>{I[P]=Fe()}),c(I),w(!1)});return()=>{clearTimeout(g),v()}},[]);const pt=async(h=-1)=>{const g=new Date;g.setDate(g.getDate()+h);const v=e(g);console.log("💾 [SAVING HISTORY] Date:",v,"Offset:",h,"Users:",Object.keys(a));const S=Object.keys(a).map(I=>{const P=a[I],B=jt(Ut,`history/${v}/${I}`),W=P.habits.filter(mt=>mt.completed).length,Ie={habits:P.habits,completionPercentage:P.stats.completionPercentage,completedCount:W,myloCompleted:!1,timestamp:g.toISOString()};return console.log(`💾 [SAVING] ${I} - ${v}:`,Ie.completionPercentage+"%"),Cr(B,Ie).catch(mt=>(console.error("❌ Error saving history for",I,":",mt),Promise.reject(mt)))});try{await Promise.all(S),console.log("✅ Daily completion saved for",v)}catch(I){console.error("❌ Failed to save some history records:",I)}};G.useEffect(()=>{const h=jt(Ut,"history"),g=jt(Ut,"bonusTask"),v=Oi(h,I=>{I.exists()&&$(I.val())},I=>{console.error("Error loading history:",I)}),S=Oi(g,I=>{I.exists()?ft(I.val()):ft({})},I=>{console.error("Error loading bonus task:",I)});return()=>{v(),S()}},[]),G.useEffect(()=>{if(!i||Object.keys(a).length===0||Object.keys(J).length===0)return;const h=async()=>{const v=localStorage.getItem("lastResetDate"),S=e(),I=v&&v!==S;if(console.log("[RESET CHECK]",{lastResetDate:v,today:S,shouldReset:I}),I){console.log("[RESET TRIGGERED] Date changed:",v,"→",S),await pt();const P=JSON.parse(JSON.stringify(a)),B=[];n.forEach(W=>{var Ie;if(P[W]){const mt=new Date;mt.setDate(mt.getDate()-1);const Xl=e(mt),Jl=J[Xl],Gd=((Ie=Jl==null?void 0:Jl[W])==null?void 0:Ie.completed)||!1;P[W].habits.forEach(ge=>{ge.type==="checkbox"||ge.type==="counter"?(ge.completed=!1,ge.type==="counter"&&(ge.count=0),Gd?(ge.streak=(ge.streak||0)+1,ge.bestStreak=Math.max(ge.bestStreak||0,ge.streak)):ge.streak=0):ge.type==="pomodoro"&&(ge.sessionsCompleted=0,ge.completed=!1,Gd?(ge.streak=(ge.streak||0)+1,ge.bestStreak=Math.max(ge.bestStreak||0,ge.streak)):ge.streak=0)}),P[W].pomodoro.sessionsToday=0,P[W].pomodoro.dailyXP=0,P[W].stats.completionPercentage=0,B.push(et(W,P[W]))}}),await Promise.all(B),c(P),ft({}),b("📅 Daily reset! New habits unlocked for today","success")}localStorage.setItem("lastResetDate",S)};h();const g=setInterval(h,6e4);return()=>clearInterval(g)},[i,J]);const Fe=()=>({habits:r.map(h=>({...h,completed:!1,streak:0,bestStreak:0,count:0,sessionsCompleted:0})),pomodoro:{sessions:0,xp:0,level:1,dailyXP:0,sessionsToday:0},stats:{completionPercentage:0,perfectWeekCount:0}}),Ft=(h,g)=>!h||typeof h!="object"?(console.warn(`Invalid user data for ${g}, creating new`),Fe()):(h.pomodoro||(h.pomodoro={sessions:0,xp:0,level:1,dailyXP:0,sessionsToday:0}),h.stats||(h.stats={completionPercentage:0,perfectWeekCount:0}),(!h.habits||!Array.isArray(h.habits))&&(h.habits=[]),typeof h.pomodoro.xp!="number"&&(h.pomodoro.xp=0),typeof h.pomodoro.level!="number"&&(h.pomodoro.level=Math.floor(h.pomodoro.xp/100)+1),typeof h.pomodoro.dailyXP!="number"&&(h.pomodoro.dailyXP=0),typeof h.stats.completionPercentage!="number"&&(h.stats.completionPercentage=0),h),un=G.useRef(0),et=async(h,g)=>{if(!h||!g){console.error("Invalid save: missing userName or userData",{userName:h,userData:g});return}un.current++,O(!0);try{const v=jt(Ut,`users/${h}`);await Cr(v,g)}catch(v){console.error("Firebase save failed for",h,":",v),b("❌ Failed to save. Check your connection.","error")}finally{un.current--,un.current===0&&O(!1)}},Bd=()=>{try{const h=new(window.AudioContext||window.webkitAudioContext);for(let g=0;g<3;g++)setTimeout(()=>{const v=h.createOscillator(),S=h.createGain();v.connect(S),S.connect(h.destination),v.frequency.value=900+g*200,v.type="sine",S.gain.setValueAtTime(.4,h.currentTime),S.gain.exponentialRampToValueAtTime(.01,h.currentTime+.3),v.start(h.currentTime),v.stop(h.currentTime+.3)},g*150);$d()}catch{$d()}},$d=()=>{const h=document.getElementById("notification-flash");h&&(h.style.opacity="1",setTimeout(()=>{h.style.opacity="0"},300))},z_=h=>{if(!i||R)return;const g=JSON.parse(JSON.stringify(a));if(!g[i]){console.error("User not found:",i);return}const v=g[i].habits.find(S=>S.id===h);if(v&&v.type==="checkbox"){const S=v.completed;v.completed=!v.completed,!S&&v.completed?(g[i].pomodoro.xp+=5,g[i].pomodoro.dailyXP+=5,g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1,b(`✅ ${v.name} completed! +5 XP`,"success")):S&&!v.completed&&(g[i].pomodoro.xp=Math.max(0,g[i].pomodoro.xp-5),g[i].pomodoro.dailyXP=Math.max(0,g[i].pomodoro.dailyXP-5),g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1,b(`↶ ${v.name} unchecked! -5 XP`,"info")),wr(g),c(g),et(i,g[i])}},Hd=(h,g)=>{if(!i||R)return;const v=JSON.parse(JSON.stringify(a));if(!v[i]){console.error("User not found:",i);return}const S=v[i].habits.find(I=>I.id===h);if(S&&S.type==="counter"){const I=S.completed;S.count=Math.max(0,S.count+g),S.completed=S.count>=(S.goal||8),!I&&S.completed?(v[i].pomodoro.xp+=5,v[i].pomodoro.dailyXP+=5,v[i].pomodoro.level=Math.floor(v[i].pomodoro.xp/100)+1,b(`✅ ${S.name} goal reached! +5 XP`,"success")):I&&!S.completed&&(v[i].pomodoro.xp=Math.max(0,v[i].pomodoro.xp-5),v[i].pomodoro.dailyXP=Math.max(0,v[i].pomodoro.dailyXP-5),v[i].pomodoro.level=Math.floor(v[i].pomodoro.xp/100)+1,b(`↶ ${S.name} below goal! -5 XP`,"info")),wr(v),c(v),et(i,v[i])}},W_=h=>{if(!i||R)return;const g=JSON.parse(JSON.stringify(a));if(!g[i]){console.error("User not found:",i);return}const v=g[i].habits.find(S=>S.id===h);if(v&&v.type==="pomodoro"){v.sessionsCompleted=(v.sessionsCompleted||0)+1,v.sessionsCompleted>=v.sessionsRequired&&(v.completed=!0),g[i].pomodoro.sessions+=1,g[i].pomodoro.sessionsToday+=1;const I=10+(g[i].pomodoro.sessionsToday<=3?10:0);g[i].pomodoro.xp+=I,g[i].pomodoro.dailyXP+=I,g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1,wr(g),c(g),et(i,g[i]),Bd(),b(`✅ ${v.name} session added! +${I} XP`,"success")}},B_=h=>{if(!i||R)return;const g=JSON.parse(JSON.stringify(a));if(!g[i]){console.error("User not found:",i);return}const v=g[i].habits.find(S=>S.id===h);if(v&&v.type==="pomodoro"&&v.sessionsCompleted>0){v.sessionsCompleted-=1,v.sessionsCompleted<v.sessionsRequired&&(v.completed=!1),g[i].pomodoro.sessions=Math.max(0,g[i].pomodoro.sessions-1),g[i].pomodoro.sessionsToday=Math.max(0,g[i].pomodoro.sessionsToday-1);const I=10+(g[i].pomodoro.sessionsToday<3?10:0);g[i].pomodoro.xp=Math.max(0,g[i].pomodoro.xp-I),g[i].pomodoro.dailyXP=Math.max(0,g[i].pomodoro.dailyXP-I),g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1,wr(g),c(g),et(i,g[i]),b(`↶ ${v.name} session removed! -${I} XP`,"info")}},wr=(h,g=Ae)=>{if(!h||!h[i]){console.error("Invalid update: missing users or currentUser data");return}const v=e(),S=h[i].habits.filter(W=>W.completed).length,I=g[v]?1:0,P=S+I,B=h[i].habits.length+1;h[i].stats.completionPercentage=Math.floor(P/B*100)},$_=()=>{if(!i||R)return;const h=e();if(Ae[h])return;const g=JSON.parse(JSON.stringify(a));if(!g[i]){console.error("User not found:",i);return}g[i].pomodoro.xp+=20,g[i].pomodoro.dailyXP+=20,g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1;const v={completedBy:i,timestamp:new Date().toISOString()},S={...Ae,[h]:v};wr(g,S),c(g),ft(S),et(i,g[i]);const I=jt(Ut,`bonusTask/${h}`);Cr(I,v).catch(P=>{console.error("Error saving bonus task:",P),b("❌ Failed to save bonus task. Try again.","error")}),b(`🐕 ${i} walked Mylo! +20 XP bonus`,"success"),Bd()},Vd=()=>{if(!i||R)return;const h=e();if(!Ae[h]||Ae[h].completedBy!==i)return;const g=JSON.parse(JSON.stringify(a));if(!g[i]){console.error("User not found:",i);return}g[i].pomodoro.xp=Math.max(0,g[i].pomodoro.xp-20),g[i].pomodoro.dailyXP=Math.max(0,g[i].pomodoro.dailyXP-20),g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1;const v={...Ae};delete v[h],wr(g,v),c(g),ft(v),et(i,g[i]);const S=jt(Ut,`bonusTask/${h}`);Cr(S,null).catch(I=>{console.error("Error removing bonus task:",I),b("❌ Failed to remove bonus task. Try again.","error")}),b("↶ Bonus task removed! -20 XP","info")},Ql="#0f0f1e",M="#c8b6ff";if(p)return f.jsx("div",{style:{minHeight:"100vh",background:Ql,color:M,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"inherit"},children:"Loading..."});const je=a[i]||Fe(),H_=je.habits.filter(h=>h.completed).length;return f.jsxs("div",{style:{minHeight:"100vh",background:Ql,color:M,fontFamily:'"Fredoka One", "Righteous", sans-serif'},children:[f.jsx("div",{id:"notification-flash",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:M,opacity:"0",pointerEvents:"none",transition:"opacity 0.3s ease",zIndex:9999}}),d&&f.jsx("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"120px",animation:"float 1s ease-out forwards",pointerEvents:"none",zIndex:5e3},children:"✨"}),f.jsx("style",{children:`
        @keyframes float { 0% { transform: translate(-50%, -50%) scale(1); opacity: 1; } 100% { transform: translate(-50%, -150%) scale(0); opacity: 0; } }
      `}),f.jsxs("div",{className:"header-section",style:{padding:"var(--space-xl)",position:"relative",overflow:"hidden"},children:[f.jsx("div",{style:{position:"absolute",top:0,right:0,width:"300px",height:"300px",background:"radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)",borderRadius:"50%",pointerEvents:"none"}}),f.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1},children:[f.jsxs("div",{style:{marginBottom:"var(--space-xl)"},children:[f.jsxs("h1",{className:"header-title",style:{marginBottom:"var(--space-xs)"},children:["Welcome back, ",cn,"! 🎯"]}),f.jsx("p",{className:"text-secondary",style:{fontSize:"var(--font-size-sm)"},children:"Track your habits, compete with friends, and level up! 🚀"})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--space-md)",marginBottom:"var(--space-lg)"},children:[f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:"⭐"}),f.jsx("div",{className:"stat-label",children:"Level"}),f.jsx("div",{className:"stat-value",children:je.pomodoro.level})]}),f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:"✨"}),f.jsx("div",{className:"stat-label",children:"Total XP"}),f.jsx("div",{className:"stat-value",children:je.pomodoro.xp})]}),f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:"📊"}),f.jsx("div",{className:"stat-label",children:"Today's Progress"}),f.jsxs("div",{className:"stat-value",children:[je.stats.completionPercentage,"%"]})]}),f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:"⏰"}),f.jsx("div",{className:"stat-label",children:"Reset In"}),f.jsxs("div",{className:"stat-value",children:[D.split("h")[0],"h"]})]})]}),f.jsxs("div",{className:"flex-between",style:{gap:"var(--space-md)",flexWrap:"wrap"},children:[f.jsx("button",{onClick:z,className:m?"btn-primary":"btn-secondary",children:m?"🔔 Notifications On":"🔕 Enable Notifications"}),R&&f.jsx("div",{style:{fontSize:"12px",color:"var(--color-text-secondary)",marginLeft:"var(--space-md)"},children:"💾 Saving..."})]})]}),f.jsxs("div",{className:"progress-section",style:{maxWidth:"1200px",margin:"0 auto"},children:[f.jsxs("div",{className:"progress-label",children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-md)"},children:[f.jsx("span",{children:"📈 Today's Progress"}),f.jsxs("span",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-text-tertiary)"},children:["(",je.habits.filter(h=>h.completed).length+(Ae[e()]?1:0),"/8)"]})]}),f.jsxs("span",{className:"progress-percentage",children:[je.stats.completionPercentage,"%"]})]}),f.jsx("div",{className:"progress-bar",children:f.jsx("div",{className:"progress-bar-fill",style:{width:`${je.stats.completionPercentage}%`}})}),f.jsx("div",{style:{fontSize:"var(--font-size-xs)",color:"var(--color-text-secondary)",marginTop:"var(--space-sm)"},children:je.stats.completionPercentage>=70?"✅ Daily goal achieved!":`Complete ${Math.ceil((7-(je.habits.filter(h=>h.completed).length+(Ae[e()]?1:0)))/8*100)} more to reach 70%`})]})]}),f.jsx("div",{style:{padding:"var(--space-lg)",background:Ql,maxWidth:"1200px",margin:"0 auto",width:"100%"},children:f.jsx("div",{className:"tab-nav",children:[{id:"habits",label:"🎯 Habits"},{id:"history",label:"📊 History"},{id:"leaderboard",label:"🏆 Leaderboard"},...i==="GP47"?[{id:"admin",label:"⚙️ Admin"}]:[]].map(h=>f.jsx("button",{onClick:()=>l(h.id),className:`tab-btn ${o===h.id?"active":""}`,children:h.label},h.id))})}),o==="habits"&&f.jsxs("div",{style:{padding:"var(--space-xl)",maxWidth:"800px",margin:"0 auto"},children:[f.jsxs("div",{style:{marginBottom:"var(--space-lg)"},children:[f.jsxs("h2",{style:{marginBottom:"var(--space-md)"},children:[i,"'s Daily Habits"]}),f.jsxs("div",{className:"card",style:{marginBottom:"var(--space-lg)"},children:[f.jsxs("div",{className:"flex-between",style:{marginBottom:"var(--space-md)"},children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-secondary text-sm",children:"Today's Progress"}),f.jsxs("div",{style:{fontSize:"var(--font-size-2xl)",fontWeight:"bold",marginTop:"var(--space-sm)"},children:[je.stats.completionPercentage,"%"]})]}),f.jsxs("div",{style:{textAlign:"right"},children:[f.jsx("div",{className:"text-secondary text-sm",children:"Completion"}),(()=>{const h=e(),g=Ae[h]?1:0,v=H_+g,S=je.habits.length+1;return f.jsxs("div",{style:{fontSize:"var(--font-size-xl)",fontWeight:"bold",marginTop:"var(--space-sm)"},children:[v,"/",S]})})()]})]}),f.jsx("div",{style:{width:"100%",height:"12px",background:"var(--color-bg-secondary)",borderRadius:"var(--radius-full)",overflow:"hidden",marginBottom:"var(--space-sm)"},children:f.jsx("div",{style:{width:`${je.stats.completionPercentage}%`,height:"100%",background:`linear-gradient(90deg, ${M} 0%, ${M} 100%)`,transition:"width var(--transition-base)",boxShadow:`0 0 10px ${M}40`}})}),f.jsxs("div",{className:"flex-between",style:{fontSize:"var(--font-size-sm)",color:"var(--color-text-secondary)"},children:[f.jsxs("span",{children:["📅 ",new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"})]}),f.jsxs("span",{children:["⏰ Resets in ",D]})]}),je.stats.completionPercentage>=70&&f.jsx("div",{style:{marginTop:"var(--space-md)",padding:"var(--space-sm) var(--space-md)",background:"var(--color-success)",borderRadius:"var(--radius-md)",textAlign:"center",fontSize:"var(--font-size-sm)",fontWeight:"bold"},children:"🏆 Daily Goal Achieved!"})]})]}),je.habits.map(h=>f.jsxs("div",{style:{padding:"15px",marginBottom:"10px",background:h.completed?M:"#1a1a2e",color:h.completed?"#0f0f1e":M,borderRadius:"10px",cursor:h.type==="checkbox"?"pointer":"default",display:"flex",justifyContent:"space-between",alignItems:"center",border:`2px solid ${M}`,transition:"all 0.2s"},onClick:()=>h.type==="checkbox"&&z_(h.id),children:[f.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center",flex:1},children:[f.jsx("span",{style:{fontSize:"24px"},children:h.category}),f.jsxs("div",{children:[f.jsx("div",{style:{fontWeight:"bold"},children:h.name}),f.jsxs("div",{style:{fontSize:"12px",opacity:.8},children:["Streak: ",h.streak," | Best: ",h.bestStreak]}),h.type==="pomodoro"&&f.jsxs("div",{style:{fontSize:"11px",opacity:.8,marginTop:"4px"},children:["Sessions: ",h.sessionsCompleted,"/",h.sessionsRequired]})]})]}),h.type==="checkbox"&&f.jsx("div",{style:{fontSize:"24px"},children:h.completed?"✅":"⭕"}),h.type==="pomodoro"&&f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsx("div",{style:{width:"60px",height:"8px",background:"#333",borderRadius:"4px",overflow:"hidden",border:`1px solid ${M}`},children:f.jsx("div",{style:{width:`${h.sessionsCompleted/h.sessionsRequired*100}%`,height:"100%",background:M,transition:"width 0.3s"}})}),f.jsxs("span",{style:{minWidth:"30px",textAlign:"center",fontSize:"12px"},children:[h.sessionsCompleted,"/",h.sessionsRequired]}),h.sessionsCompleted<h.sessionsRequired&&f.jsx("button",{onClick:()=>W_(h.id),style:{padding:"6px 12px",background:"transparent",color:M,border:`2px solid ${M}`,borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit",whiteSpace:"nowrap"},children:"✓ Add"}),h.sessionsCompleted>0&&f.jsx("button",{onClick:()=>B_(h.id),style:{padding:"6px 12px",background:"transparent",color:"#ff6b6b",border:"2px solid #ff6b6b",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit",whiteSpace:"nowrap"},children:"↶ Undo"})]}),h.type==="counter"&&f.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[f.jsx("button",{onClick:()=>Hd(h.id,-1),style:{width:"30px",height:"30px",background:"transparent",border:`2px solid ${h.completed?"#0f0f1e":M}`,color:h.completed?"#0f0f1e":M,borderRadius:"50%",cursor:"pointer",fontWeight:"bold",fontSize:"16px",fontFamily:"inherit"},children:"−"}),f.jsxs("div",{style:{minWidth:"40px",textAlign:"center",fontWeight:"bold",fontSize:"18px"},children:[h.count,"/",h.goal]}),f.jsx("button",{onClick:()=>Hd(h.id,1),style:{width:"30px",height:"30px",background:h.count>=h.goal?"#0f0f1e":"transparent",border:`2px solid ${h.completed?"#0f0f1e":M}`,color:h.completed?"#0f0f1e":M,borderRadius:"50%",cursor:"pointer",fontWeight:"bold",fontSize:"16px",fontFamily:"inherit"},children:"+"})]})]},h.id)),je.stats.completionPercentage>=70&&f.jsx("div",{style:{marginTop:"30px",padding:"15px",background:"#2a2547",borderRadius:"10px",textAlign:"center",fontWeight:"bold",border:`2px solid ${M}`},children:"🏆 Daily Goal Met! 70%+ habits completed"}),f.jsxs("div",{style:{marginTop:"30px",padding:"20px",background:"#1a2a1e",borderRadius:"12px",border:"2px solid #7FFF00"},children:[f.jsx("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"10px",color:"#7FFF00"},children:"🐕 Daily Bonus Task"}),(()=>{const h=e(),g=Ae[h],v=g&&g.completedBy===i;return f.jsxs("div",{style:{padding:"15px",background:g?"#333":"#0f0f1e",borderRadius:"8px",border:g?"2px solid #999":"2px solid #7FFF00",cursor:g?v?"pointer":"default":"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",opacity:g&&!v?.5:1},onClick:()=>{g?v&&Vd():$_()},children:[f.jsxs("div",{children:[f.jsx("div",{style:{fontWeight:"bold",color:g?"#999":"#7FFF00",marginBottom:"5px"},children:"Take Mylo for a Walk"}),f.jsx("div",{style:{fontSize:"12px",color:"#999"},children:g?`✅ Completed by ${g.completedBy}`:"First one to complete earns 20 XP!"})]}),!g&&f.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",color:"#7FFF00"},children:"+20 XP"}),v&&f.jsx("button",{onClick:S=>{S.stopPropagation(),Vd()},style:{padding:"6px 12px",background:"transparent",color:"#ff6b6b",border:"2px solid #ff6b6b",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit"},children:"↶ Undo"})]})})()]}),f.jsxs("div",{style:{marginTop:"50px",paddingTop:"30px",borderTop:"2px solid #333"},children:[f.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:M},children:"👥 Others' Progress (Read-Only)"}),n.filter(h=>h!==i).map(h=>{const g=a[h]||Fe(),v=g.habits.filter(S=>S.completed).length;return f.jsxs("div",{style:{padding:"15px",marginBottom:"15px",background:"#1a1a2e",borderRadius:"10px",border:"1px solid #333"},children:[f.jsx("div",{style:{fontWeight:"bold",marginBottom:"10px",color:M},children:h}),f.jsxs("div",{style:{fontSize:"12px",color:"#999",marginBottom:"8px"},children:["Completion: ",g.stats.completionPercentage,"% (",v,"/",g.habits.length,") | Level: ",g.pomodoro.level]}),f.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:g.habits.map(S=>f.jsxs("div",{style:{padding:"6px 12px",background:S.completed?M:"#0f0f1e",color:S.completed?"#0f0f1e":M,borderRadius:"6px",fontSize:"11px",fontWeight:"bold"},children:[S.category," ",S.completed?"✅":"⭕"]},S.id))})]},h)})]})]}),o==="leaderboard"&&f.jsxs("div",{style:{padding:"30px",maxWidth:"900px",margin:"0 auto"},children:[f.jsx("div",{style:{fontSize:"28px",fontWeight:"bold",marginBottom:"10px",color:M},children:"🏆 Leaderboard"}),f.jsx("div",{style:{fontSize:"13px",color:"#999",marginBottom:"30px",textTransform:"uppercase",letterSpacing:"1px"},children:"Real-Time Rankings & Completion Tracking"}),f.jsxs("div",{style:{marginBottom:"30px",background:"#1a1a2e",padding:"15px",borderRadius:"12px",border:"2px solid #7FFF00"},children:[f.jsx("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"12px",color:"#7FFF00"},children:"⚡ How to Gain XP"}),f.jsxs("div",{style:{fontSize:"13px",color:"#ccc",lineHeight:"1.6"},children:[f.jsxs("div",{style:{marginBottom:"8px"},children:["✓ ",f.jsx("strong",{children:"Base XP:"})," +10 XP per session (timer or manual)"]}),f.jsxs("div",{style:{marginBottom:"8px"},children:["🔥 ",f.jsx("strong",{children:"Session Bonus:"})," +10 extra XP for first 3 sessions of the day (total +20)"]}),f.jsxs("div",{style:{marginBottom:"8px"},children:["✅ ",f.jsx("strong",{children:"Habit Completion:"})," +5 XP per checkbox/counter habit completed"]}),f.jsxs("div",{style:{marginBottom:"8px"},children:["🐕 ",f.jsx("strong",{children:"Daily Bonus (Mylo):"})," +20 XP once per day (first to claim)"]}),f.jsxs("div",{style:{marginBottom:"8px"},children:["📈 ",f.jsx("strong",{children:"Leveling:"})," 100 XP = 1 Level"]}),f.jsxs("div",{children:["💪 ",f.jsx("strong",{children:"Daily Goal:"})," Complete 70%+ of habits to hit daily completion target"]})]})]}),f.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${M}`},children:[f.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:M},children:"📅 Completion Calendar"}),f.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:[f.jsx("button",{onClick:()=>ln("week"),style:{padding:"8px 16px",background:pe==="week"?M:"#0f0f1e",color:pe==="week"?"#0f0f1e":M,border:`2px solid ${M}`,borderRadius:"6px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",fontSize:"12px"},children:"This Week"}),f.jsx("button",{onClick:()=>ln("month"),style:{padding:"8px 16px",background:pe==="month"?M:"#0f0f1e",color:pe==="month"?"#0f0f1e":M,border:`2px solid ${M}`,borderRadius:"6px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",fontSize:"12px"},children:"Last 30 Days"})]}),f.jsx("div",{style:{display:"flex",gap:"15px",flexWrap:"wrap",marginBottom:"20px",fontSize:"12px"},children:[{name:"GP47",color:"#FF6B9D"},{name:"Pri",color:"#00D9FF"},{name:"Nikki",color:"#FFAA00"},{name:"Sid",color:"#7FFF00"}].map(h=>f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"3px",background:h.color}}),f.jsx("span",{children:h.name})]},h.name))}),f.jsxs("div",{style:{background:"#0f0f1e",padding:"15px",borderRadius:"8px",overflowX:"auto"},children:[pe==="week"&&f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"12px",color:"#999",marginBottom:"10px",textTransform:"uppercase"},children:"This Week"}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"8px"},children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((h,g)=>{const v=new Date;v.setDate(v.getDate()-(v.getDay()-g-1+7)%7);const S=e(v),I=J[S]||{},P={GP47:"#FF6B9D",Pri:"#00D9FF",Nikki:"#FFAA00",Sid:"#7FFF00"};return f.jsxs("div",{style:{textAlign:"center"},children:[f.jsx("div",{style:{fontSize:"11px",color:"#999",marginBottom:"5px",fontWeight:"bold"},children:h}),f.jsx("div",{style:{width:"100%",aspectRatio:"1",background:"#1a1a2e",borderRadius:"8px",border:"1px solid #333",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",padding:"4px",gap:"2px"},children:Object.keys(I).length>0?Object.keys(I).map(B=>I[B].completed&&f.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"2px",background:P[B]}},B)):f.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"—"})})]},h)})})]}),pe==="month"&&f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"12px",color:"#999",marginBottom:"10px",textTransform:"uppercase"},children:"Last 30 Days"}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(40px, 1fr))",gap:"4px"},children:Array.from({length:30}).map((h,g)=>{const v=new Date;v.setDate(v.getDate()-(29-g));const S=e(v),I=J[S]||{},P={GP47:"#FF6B9D",Pri:"#00D9FF",Nikki:"#FFAA00",Sid:"#7FFF00"},B=Object.keys(I).filter(W=>I[W].completed).length;return f.jsx("div",{style:{aspectRatio:"1",background:B===4?"#2d5f2e":B>=2?"#3a3a5f":"#1a1a2e",borderRadius:"4px",border:"1px solid #333",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",padding:"2px",gap:"1px",title:`${S}: ${B} users completed`},children:B>0?Object.keys(I).map(W=>I[W].completed&&f.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"1px",background:P[W]}},W)):f.jsx("span",{style:{fontSize:"8px",color:"#666"},children:"·"})},S)})})]})]}),f.jsxs("div",{style:{marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #333"},children:[f.jsx("div",{style:{fontSize:"13px",color:"#999",marginBottom:"10px",textTransform:"uppercase"},children:"Today's Progress"}),n.map(h=>{const g=a[h]||Fe(),v=g.stats.completionPercentage>=70,S={GP47:"#FF6B9D",Pri:"#00D9FF",Nikki:"#FFAA00",Sid:"#7FFF00"};return f.jsx("div",{style:{marginBottom:"12px",borderRadius:"8px",overflow:"hidden"},children:f.jsxs("div",{style:{padding:"10px 12px",background:`linear-gradient(90deg, ${S[h]}30 ${g.stats.completionPercentage}%, #0f0f1e ${g.stats.completionPercentage}%)`,borderRadius:"8px",borderLeft:`4px solid ${S[h]}`,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsx("span",{style:{fontWeight:"bold",color:S[h]},children:h}),f.jsxs("span",{style:{fontSize:"12px",color:"#999"},children:[g.stats.completionPercentage,"% ",v?"✅":"⏳"]})]})},h)})]})]}),f.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${M}`},children:[f.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:M},children:"🔥 Longest Active Streaks"}),n.map(h=>{var S;const v=(((S=a[h])==null?void 0:S.habits)||[]).reduce((I,P)=>P.streak>I.streak?P:I,{streak:0,name:"None"});return f.jsxs("div",{style:{padding:"12px",marginBottom:"8px",background:"#0f0f1e",borderRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsx("span",{style:{fontWeight:"bold"},children:h}),f.jsxs("span",{style:{fontSize:"12px",color:"#999"},children:[v.name," • ",f.jsxs("span",{style:{color:M,fontWeight:"bold"},children:[v.streak," days 🔥"]})]})]},h)})]}),f.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${M}`},children:[f.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:M},children:"⭐ Overall Level"}),n.sort((h,g)=>{var v,S;return(((v=a[g])==null?void 0:v.pomodoro.level)||1)-(((S=a[h])==null?void 0:S.pomodoro.level)||1)}).map((h,g)=>{var P,B;const v=((P=a[h])==null?void 0:P.pomodoro.level)||1,S=((B=a[h])==null?void 0:B.pomodoro.xp)||0,I=["🥇","🥈","🥉"];return f.jsxs("div",{style:{padding:"12px",marginBottom:"8px",background:"#0f0f1e",borderRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[f.jsx("span",{children:I[g]||"4️⃣"}),f.jsx("span",{style:{fontWeight:"bold"},children:h})]}),f.jsxs("span",{style:{fontSize:"12px",color:"#999"},children:["Level ",f.jsx("span",{style:{color:M,fontWeight:"bold",fontSize:"14px"},children:v})," • ",S," XP"]})]},h)})]}),f.jsxs("div",{style:{background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${M}`},children:[f.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:M},children:"🏅 Stats"}),n.map(h=>{const g=a[h]||Fe(),v=g.pomodoro.sessions||0;return f.jsxs("div",{style:{padding:"12px",marginBottom:"8px",background:"#0f0f1e",borderRadius:"8px"},children:[f.jsx("div",{style:{fontWeight:"bold",marginBottom:"6px"},children:h}),f.jsxs("div",{style:{fontSize:"12px",color:"#999"},children:["💎 ",v," total sessions | 🎯 ",g.pomodoro.dailyXP," XP today"]})]},h)})]})]}),o==="history"&&f.jsxs("div",{style:{padding:"30px",maxWidth:"1200px",margin:"0 auto"},children:[f.jsx("div",{style:{fontSize:"28px",fontWeight:"bold",marginBottom:"10px",color:M},children:"📊 Daily Summary"}),f.jsx("div",{style:{fontSize:"13px",color:"#999",marginBottom:"30px",textTransform:"uppercase",letterSpacing:"1px"},children:"View what all 4 users completed on any day"}),f.jsxs("div",{className:"card",style:{marginBottom:"30px",display:"flex",alignItems:"center",gap:"15px"},children:[f.jsx("label",{style:{fontSize:"14px",fontWeight:"bold"},children:"📅 Select Date:"}),f.jsx("input",{type:"date",value:an,onChange:h=>wi(h.target.value),style:{padding:"10px 15px",background:"#1a1a2e",color:"#c8b6ff",border:"2px solid #00d9ff",borderRadius:"8px",fontFamily:"inherit",fontSize:"14px",cursor:"pointer",flex:1,maxWidth:"200px"}})]}),Object.keys(Gn).length>0?f.jsxs("div",{children:[f.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"25px",color:M,paddingBottom:"15px",borderBottom:"2px solid rgba(0, 217, 255, 0.2)"},children:["📈 ",an," - All Users Performance"]}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px",marginBottom:"30px"},children:n.map(h=>{const g=Gn[h],v=h==="GP47"?"#FF6B9D":h==="Pri"?"#00D9FF":h==="Nikki"?"#FFAA00":"#7FFF00";return g?f.jsxs("div",{className:"card",style:{borderLeft:`4px solid ${v}`},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px",paddingBottom:"15px",borderBottom:`1px solid rgba(${parseInt(v.slice(1,3),16)}, ${parseInt(v.slice(3,5),16)}, ${parseInt(v.slice(5,7),16)}, 0.2)`},children:[f.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:v},children:[h==="GP47"?"🚀":h==="Pri"?"🎯":h==="Nikki"?"✨":"⚡"," ",h]}),f.jsxs("div",{style:{textAlign:"right"},children:[f.jsx("div",{style:{fontSize:"12px",color:"#999"},children:"Completion"}),f.jsxs("div",{style:{fontSize:"20px",fontWeight:"bold",color:g.completionPercentage>=70?"#34d399":"#ff9d3d"},children:[g.completionPercentage,"%"]})]})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:g.habits&&g.habits.map((S,I)=>f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px",background:S.completed?"rgba(52, 211, 153, 0.1)":"rgba(139, 146, 176, 0.05)",borderRadius:"6px"},children:[f.jsx("span",{style:{fontSize:"16px"},children:S.completed?"✅":"❌"}),f.jsxs("span",{style:{flex:1,fontSize:"12px",color:S.completed?"#34d399":"#999"},children:[S.category," ",S.name]}),S.sessionsCompleted>0&&f.jsxs("span",{style:{fontSize:"10px",background:v,color:"#0f0f1e",padding:"2px 8px",borderRadius:"12px",fontWeight:"bold"},children:[S.sessionsCompleted," sessions"]}),S.count>0&&f.jsxs("span",{style:{fontSize:"10px",background:v,color:"#0f0f1e",padding:"2px 8px",borderRadius:"12px",fontWeight:"bold"},children:[S.count," count"]})]},I))}),g.myloCompleted&&f.jsx("div",{style:{marginTop:"15px",padding:"10px",background:"rgba(255, 157, 61, 0.1)",borderRadius:"6px",borderLeft:"3px solid #ff9d3d",fontSize:"12px",color:"#ff9d3d"},children:"🐕 Mylo Bonus: +20 XP"})]},h):f.jsxs("div",{className:"card",style:{opacity:.5},children:[f.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"15px",color:v},children:[h==="GP47"?"🚀":h==="Pri"?"🎯":h==="Nikki"?"✨":"⚡"," ",h]}),f.jsx("div",{style:{textAlign:"center",color:"#999",padding:"20px"},children:"No data"})]},h)})}),f.jsxs("div",{className:"card",style:{background:"linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(167, 139, 222, 0.05) 100%)"},children:[f.jsx("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"15px",color:M},children:"📊 Summary Statistics"}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"15px"},children:n.map(h=>{const g=Gn[h];return f.jsxs("div",{style:{textAlign:"center",padding:"15px",background:"#1a1a2e",borderRadius:"8px"},children:[f.jsx("div",{style:{fontSize:"14px",fontWeight:"bold",marginBottom:"8px"},children:h}),f.jsxs("div",{style:{fontSize:"24px",fontWeight:"bold",color:g?"#34d399":"#999",marginBottom:"5px"},children:[g?g.completedCount:0,"/8"]}),f.jsx("div",{style:{fontSize:"12px",color:"#999"},children:"Completed"})]},h)})})]})]}):f.jsxs("div",{className:"card",style:{textAlign:"center",padding:"60px 20px",color:"#999"},children:[f.jsx("div",{style:{fontSize:"40px",marginBottom:"15px"},children:"📭"}),f.jsxs("div",{style:{fontSize:"16px",marginBottom:"5px"},children:["No data found for ",an]}),f.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"This date hasn't been logged yet. Select a different date."})]})]}),o==="admin"&&i==="GP47"&&f.jsxs("div",{style:{padding:"30px",maxWidth:"600px",margin:"0 auto"},children:[f.jsx("div",{style:{fontSize:"28px",fontWeight:"bold",marginBottom:"10px",color:M},children:"⚙️ Admin Panel"}),f.jsx("div",{style:{fontSize:"13px",color:"#999",marginBottom:"30px"},children:"Reset user stats and levels"}),f.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${M}`},children:[f.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:M},children:"🔄 Reset User Levels"}),n.map(h=>{const g=a[h]||Fe();return f.jsxs("div",{style:{padding:"15px",marginBottom:"10px",background:"#0f0f1e",borderRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs("div",{children:[f.jsx("div",{style:{fontWeight:"bold",marginBottom:"5px"},children:h}),f.jsxs("div",{style:{fontSize:"12px",color:"#999"},children:["Level ",g.pomodoro.level," • ",g.pomodoro.xp," XP"]})]}),f.jsx("button",{onClick:()=>{const v=JSON.parse(JSON.stringify(a));v[h].pomodoro.xp=0,v[h].pomodoro.level=1,v[h].pomodoro.dailyXP=0,c(v),et(h,v[h]),b(`✅ Reset ${h}'s level to 1`,"success")},style:{padding:"8px 16px",background:"#ff6b6b",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit"},children:"Reset"})]},h)})]}),f.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${M}`},children:[f.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:M},children:"📅 Reset Daily Habits"}),f.jsx("p",{style:{fontSize:"12px",color:"#999",marginBottom:"15px"},children:"Clears today's habit progress (checkboxes, counters) but keeps XP/levels"}),f.jsx("button",{onClick:()=>{if(window.confirm("Reset ALL users daily habits? XP and levels stay the same.")){const h=JSON.parse(JSON.stringify(a));n.forEach(g=>{h[g].habits.forEach(v=>{v.type==="checkbox"||v.type==="counter"?(v.completed=!1,v.type==="counter"&&(v.count=0)):v.type==="pomodoro"&&(v.sessionsCompleted=0,v.completed=!1)}),h[g].pomodoro.sessionsToday=0,h[g].pomodoro.dailyXP=0,h[g].stats.completionPercentage=0,et(g,h[g])}),c(h),ft({}),b("✅ Reset all daily habits","success")}},style:{padding:"10px 20px",background:"#4a90e2",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"13px",fontFamily:"inherit"},children:"Reset All Daily Habits"})]}),f.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${M}`},children:[f.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:M},children:"🔥 Reset Streaks"}),f.jsx("p",{style:{fontSize:"12px",color:"#999",marginBottom:"15px"},children:"Clears streak counters but keeps best streaks"}),f.jsx("button",{onClick:()=>{if(window.confirm("Reset all current streaks? Best streaks are preserved.")){const h=JSON.parse(JSON.stringify(a));n.forEach(g=>{h[g].habits.forEach(v=>{v.streak=0}),et(g,h[g])}),c(h),b("✅ Reset all streaks","success")}},style:{padding:"10px 20px",background:"#f39c12",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"13px",fontFamily:"inherit"},children:"Reset All Streaks"})]}),f.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${M}`},children:[f.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:M},children:"⏰ Force Daily Reset"}),f.jsx("p",{style:{fontSize:"12px",color:"#999",marginBottom:"15px"},children:"Manually trigger midnight reset logic"}),f.jsx("button",{onClick:()=>{if(window.confirm("Force daily reset now? Habits will clear and streaks will update.")){pt();const h=JSON.parse(JSON.stringify(a));n.forEach(g=>{var v;if(h[g]){const S=new Date;S.setDate(S.getDate()-1);const I=e(S),P=J[I],B=((v=P==null?void 0:P[g])==null?void 0:v.completed)||!1;h[g].habits.forEach(W=>{W.type==="checkbox"||W.type==="counter"?(W.completed=!1,W.type==="counter"&&(W.count=0),B?(W.streak=(W.streak||0)+1,W.bestStreak=Math.max(W.bestStreak||0,W.streak)):W.streak=0):W.type==="pomodoro"&&(W.sessionsCompleted=0,W.completed=!1,B?(W.streak=(W.streak||0)+1,W.bestStreak=Math.max(W.bestStreak||0,W.streak)):W.streak=0)}),h[g].pomodoro.sessionsToday=0,h[g].pomodoro.dailyXP=0,h[g].stats.completionPercentage=0,et(g,h[g])}}),c(h),ft({}),localStorage.setItem("lastResetDate",e()),b("✅ Daily reset forced!","success")}},style:{padding:"10px 20px",background:"#27ae60",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"13px",fontFamily:"inherit"},children:"Force Daily Reset Now"})]}),f.jsxs("div",{style:{background:"#1a2a1a",padding:"20px",borderRadius:"12px",border:"2px solid #27ae60"},children:[f.jsx("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"15px",color:"#27ae60"},children:"📊 Save Today's Data"}),f.jsx("button",{onClick:async()=>{try{await pt(0),b("✅ Today's data saved to history!","success")}catch{b("❌ Error saving history","error")}},style:{padding:"10px 20px",background:"#27ae60",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontFamily:"inherit"},children:"Save Today's Completion to History"})]}),f.jsxs("div",{style:{background:"#2a1a1a",padding:"20px",borderRadius:"12px",border:"2px solid #ff6b6b"},children:[f.jsx("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"15px",color:"#ff6b6b"},children:"⚠️ Danger Zone"}),f.jsx("button",{onClick:()=>{if(window.confirm("Reset ALL users XP and levels? This cannot be undone!")){const h=JSON.parse(JSON.stringify(a));n.forEach(g=>{h[g].pomodoro.xp=0,h[g].pomodoro.level=1,h[g].pomodoro.dailyXP=0,et(g,h[g])}),c(h),b("✅ Reset all users to Level 1","success")}},style:{padding:"12px 24px",background:"#ff6b6b",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontFamily:"inherit"},children:"Reset All Users"}),f.jsx("button",{onClick:()=>{if(window.confirm("🚨 FACTORY RESET: Delete ALL data for ALL users? This cannot be undone!")){const h=JSON.parse(JSON.stringify(a));n.forEach(g=>{h[g]=Fe(),et(g,h[g])}),c(h),ft({}),b("🔧 Factory reset complete! All data cleared.","success")}},style:{marginLeft:"10px",padding:"12px 24px",background:"#8b0000",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontFamily:"inherit"},children:"🚨 Factory Reset Everything"})]})]}),f.jsx("div",{style:{position:"fixed",top:"100px",right:"20px",zIndex:1e4,maxWidth:"350px"},children:C.map(h=>f.jsx("div",{style:{padding:"15px 20px",marginBottom:"10px",background:h.type==="success"?"#2d5f2e":"#2a2547",border:`2px solid ${M}`,borderRadius:"10px",color:M,fontWeight:"bold",fontSize:"14px",animation:"slideIn 0.3s ease-out",boxShadow:`0 4px 20px ${M}40`},children:h.message},h.id))}),f.jsx("style",{children:`
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
      `})]})};function I1(t){return f.jsx(x1,{children:f.jsx(k1,{...t})})}function T1(){const[t,e]=G.useState(null),[n,r]=G.useState(!0);G.useEffect(()=>JS(Zc,o=>{e(o),r(!1)}),[]);const i=async()=>{try{await ZS(Zc)}catch(s){console.error("Error logging out:",s)}};return n?f.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0f0f1e",color:"#c8b6ff",fontFamily:'"Fredoka One", sans-serif',fontSize:"18px"},children:"Loading..."}):t?f.jsxs("div",{style:{position:"relative"},children:[f.jsx("button",{onClick:i,style:{position:"fixed",top:"20px",right:"20px",padding:"10px 20px",background:"#c8b6ff",color:"#0f0f1e",border:"none",borderRadius:"8px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",zIndex:1e3},children:"Logout"}),f.jsx(I1,{user:t})]}):f.jsx(C1,{})}Ua.createRoot(document.getElementById("root")).render(f.jsx(Ip.StrictMode,{children:f.jsx(T1,{})}));
