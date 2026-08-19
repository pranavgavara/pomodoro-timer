(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ly(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cp={exports:{}},vl={},dp={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.element"),My=Symbol.for("react.portal"),Fy=Symbol.for("react.fragment"),Uy=Symbol.for("react.strict_mode"),zy=Symbol.for("react.profiler"),jy=Symbol.for("react.provider"),Wy=Symbol.for("react.context"),By=Symbol.for("react.forward_ref"),$y=Symbol.for("react.suspense"),Hy=Symbol.for("react.memo"),Vy=Symbol.for("react.lazy"),Wd=Symbol.iterator;function Gy(t){return t===null||typeof t!="object"?null:(t=Wd&&t[Wd]||t["@@iterator"],typeof t=="function"?t:null)}var hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fp=Object.assign,pp={};function ii(t,e,n){this.props=t,this.context=e,this.refs=pp,this.updater=n||hp}ii.prototype.isReactComponent={};ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mp(){}mp.prototype=ii.prototype;function Yu(t,e,n){this.props=t,this.context=e,this.refs=pp,this.updater=n||hp}var Xu=Yu.prototype=new mp;Xu.constructor=Yu;fp(Xu,ii.prototype);Xu.isPureReactComponent=!0;var Bd=Array.isArray,gp=Object.prototype.hasOwnProperty,Ju={current:null},_p={key:!0,ref:!0,__self:!0,__source:!0};function yp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gp.call(e,r)&&!_p.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Is,type:t,key:s,ref:o,props:i,_owner:Ju.current}}function Ky(t,e){return{$$typeof:Is,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Is}function qy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $d=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qy(""+t.key):e.toString(36)}function ao(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Is:case My:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ql(o,0):r,Bd(i)?(n="",t!=null&&(n=t.replace($d,"$&/")+"/"),ao(i,e,n,"",function(u){return u})):i!=null&&(Zu(i)&&(i=Ky(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($d,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Bd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ql(s,l);o+=ao(s,e,n,a,i)}else if(a=Gy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ql(s,l++),o+=ao(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bs(t,e,n){if(t==null)return t;var r=[],i=0;return ao(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Qy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var je={current:null},uo={transition:null},Yy={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:uo,ReactCurrentOwner:Ju};function vp(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:Bs,forEach:function(t,e,n){Bs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bs(t,function(){e++}),e},toArray:function(t){return Bs(t,function(e){return e})||[]},only:function(t){if(!Zu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=ii;G.Fragment=Fy;G.Profiler=zy;G.PureComponent=Yu;G.StrictMode=Uy;G.Suspense=$y;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yy;G.act=vp;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=fp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ju.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)gp.call(e,a)&&!_p.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Is,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:Wy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jy,_context:t},t.Consumer=t};G.createElement=yp;G.createFactory=function(t){var e=yp.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:By,render:t}};G.isValidElement=Zu;G.lazy=function(t){return{$$typeof:Vy,_payload:{_status:-1,_result:t},_init:Qy}};G.memo=function(t,e){return{$$typeof:Hy,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=uo.transition;uo.transition={};try{t()}finally{uo.transition=e}};G.unstable_act=vp;G.useCallback=function(t,e){return je.current.useCallback(t,e)};G.useContext=function(t){return je.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return je.current.useDeferredValue(t)};G.useEffect=function(t,e){return je.current.useEffect(t,e)};G.useId=function(){return je.current.useId()};G.useImperativeHandle=function(t,e,n){return je.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return je.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return je.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return je.current.useMemo(t,e)};G.useReducer=function(t,e,n){return je.current.useReducer(t,e,n)};G.useRef=function(t){return je.current.useRef(t)};G.useState=function(t){return je.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return je.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return je.current.useTransition()};G.version="18.3.1";dp.exports=G;var Q=dp.exports;const Xy=Ly(Q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=Q,Zy=Symbol.for("react.element"),ev=Symbol.for("react.fragment"),tv=Object.prototype.hasOwnProperty,nv=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rv={key:!0,ref:!0,__self:!0,__source:!0};function wp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tv.call(e,r)&&!rv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Zy,type:t,key:s,ref:o,props:i,_owner:nv.current}}vl.Fragment=ev;vl.jsx=wp;vl.jsxs=wp;cp.exports=vl;var _=cp.exports,La={},Ep={exports:{}},rt={},Sp={exports:{}},Cp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,F){var M=R.length;R.push(F);e:for(;0<M;){var oe=M-1>>>1,pe=R[oe];if(0<i(pe,F))R[oe]=F,R[M]=pe,M=oe;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var F=R[0],M=R.pop();if(M!==F){R[0]=M;e:for(var oe=0,pe=R.length,mr=pe>>>1;oe<mr;){var kt=2*(oe+1)-1,mi=R[kt],Dt=kt+1,bt=R[Dt];if(0>i(mi,M))Dt<pe&&0>i(bt,mi)?(R[oe]=bt,R[Dt]=M,oe=Dt):(R[oe]=mi,R[kt]=M,oe=kt);else if(Dt<pe&&0>i(bt,M))R[oe]=bt,R[Dt]=M,oe=Dt;else break e}}return F}function i(R,F){var M=R.sortIndex-F.sortIndex;return M!==0?M:R.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,v=!1,E=!1,S=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=R)r(u),F.sortIndex=F.expirationTime,e(a,F);else break;F=n(u)}}function I(R){if(S=!1,y(R),!E)if(n(a)!==null)E=!0,js(P);else{var F=n(u);F!==null&&Un(I,F.startTime-R)}}function P(R,F){E=!1,S&&(S=!1,m(b),b=-1),v=!0;var M=h;try{for(y(F),c=n(a);c!==null&&(!(c.expirationTime>F)||R&&!ge());){var oe=c.callback;if(typeof oe=="function"){c.callback=null,h=c.priorityLevel;var pe=oe(c.expirationTime<=F);F=t.unstable_now(),typeof pe=="function"?c.callback=pe:c===n(a)&&r(a),y(F)}else r(a);c=n(a)}if(c!==null)var mr=!0;else{var kt=n(u);kt!==null&&Un(I,kt.startTime-F),mr=!1}return mr}finally{c=null,h=M,v=!1}}var O=!1,A=null,b=-1,X=5,B=-1;function ge(){return!(t.unstable_now()-B<X)}function Je(){if(A!==null){var R=t.unstable_now();B=R;var F=!0;try{F=A(!0,R)}finally{F?Fn():(O=!1,A=null)}}else O=!1}var Fn;if(typeof f=="function")Fn=function(){f(Je)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,pr=de.port2;de.port1.onmessage=Je,Fn=function(){pr.postMessage(null)}}else Fn=function(){j(Je,0)};function js(R){A=R,O||(O=!0,Fn())}function Un(R,F){b=j(function(){R(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){E||v||(E=!0,js(P))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var M=h;h=F;try{return R()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,F){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=h;h=R;try{return F()}finally{h=M}},t.unstable_scheduleCallback=function(R,F,M){var oe=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?oe+M:oe):M=oe,R){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=M+pe,R={id:d++,callback:F,priorityLevel:R,startTime:M,expirationTime:pe,sortIndex:-1},M>oe?(R.sortIndex=M,e(u,R),n(a)===null&&R===n(u)&&(S?(m(b),b=-1):S=!0,Un(I,M-oe))):(R.sortIndex=pe,e(a,R),E||v||(E=!0,js(P))),R},t.unstable_shouldYield=ge,t.unstable_wrapCallback=function(R){var F=h;return function(){var M=h;h=F;try{return R.apply(this,arguments)}finally{h=M}}}})(Cp);Sp.exports=Cp;var iv=Sp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv=Q,nt=iv;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ip=new Set,Xi={};function cr(t,e){Vr(t,e),Vr(t+"Capture",e)}function Vr(t,e){for(Xi[t]=e,t=0;t<e.length;t++)Ip.add(e[t])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ma=Object.prototype.hasOwnProperty,ov=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hd={},Vd={};function lv(t){return Ma.call(Vd,t)?!0:Ma.call(Hd,t)?!1:ov.test(t)?Vd[t]=!0:(Hd[t]=!0,!1)}function av(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uv(t,e,n,r){if(e===null||typeof e>"u"||av(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var ec=/[\-:]([a-z])/g;function tc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ec,tc);Ne[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ec,tc);Ne[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ec,tc);Ne[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function nc(t,e,n,r){var i=Ne.hasOwnProperty(e)?Ne[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uv(e,n,i,r)&&(n=null),r||i===null?lv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zt=sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$s=Symbol.for("react.element"),vr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),rc=Symbol.for("react.strict_mode"),Fa=Symbol.for("react.profiler"),kp=Symbol.for("react.provider"),xp=Symbol.for("react.context"),ic=Symbol.for("react.forward_ref"),Ua=Symbol.for("react.suspense"),za=Symbol.for("react.suspense_list"),sc=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Tp=Symbol.for("react.offscreen"),Gd=Symbol.iterator;function yi(t){return t===null||typeof t!="object"?null:(t=Gd&&t[Gd]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,Ql;function Ni(t){if(Ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ql=e&&e[1]||""}return`
`+Ql+t}var Yl=!1;function Xl(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ni(t):""}function cv(t){switch(t.tag){case 5:return Ni(t.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return t=Xl(t.type,!1),t;case 11:return t=Xl(t.type.render,!1),t;case 1:return t=Xl(t.type,!0),t;default:return""}}function ja(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wr:return"Fragment";case vr:return"Portal";case Fa:return"Profiler";case rc:return"StrictMode";case Ua:return"Suspense";case za:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xp:return(t.displayName||"Context")+".Consumer";case kp:return(t._context.displayName||"Context")+".Provider";case ic:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sc:return e=t.displayName||null,e!==null?e:ja(t.type)||"Memo";case rn:e=t._payload,t=t._init;try{return ja(t(e))}catch{}}return null}function dv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ja(e);case 8:return e===rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hv(t){var e=Rp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hs(t){t._valueTracker||(t._valueTracker=hv(t))}function Pp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Rp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wa(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Np(t,e){e=e.checked,e!=null&&nc(t,"checked",e,!1)}function Ba(t,e){Np(t,e);var n=Tn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$a(t,e.type,n):e.hasOwnProperty("defaultValue")&&$a(t,e.type,Tn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $a(t,e,n){(e!=="number"||xo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ai=Array.isArray;function Dr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ha(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Ai(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tn(n)}}function Ap(t,e){var n=Tn(e.value),r=Tn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Yd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Op(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Op(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,Dp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ji(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fv=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(t){fv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mi[e]=Mi[t]})});function bp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mi.hasOwnProperty(t)&&Mi[t]?(""+e).trim():e+"px"}function Lp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pv=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ga(t,e){if(e){if(pv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Ka(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qa=null;function oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qa=null,br=null,Lr=null;function Xd(t){if(t=Ts(t)){if(typeof Qa!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Il(e),Qa(t.stateNode,t.type,e))}}function Mp(t){br?Lr?Lr.push(t):Lr=[t]:br=t}function Fp(){if(br){var t=br,e=Lr;if(Lr=br=null,Xd(t),e)for(t=0;t<e.length;t++)Xd(e[t])}}function Up(t,e){return t(e)}function zp(){}var Jl=!1;function jp(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return Up(t,e,n)}finally{Jl=!1,(br!==null||Lr!==null)&&(zp(),Fp())}}function Zi(t,e){var n=t.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Ya=!1;if(Vt)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){Ya=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{Ya=!1}function mv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Fi=!1,To=null,Ro=!1,Xa=null,gv={onError:function(t){Fi=!0,To=t}};function _v(t,e,n,r,i,s,o,l,a){Fi=!1,To=null,mv.apply(gv,arguments)}function yv(t,e,n,r,i,s,o,l,a){if(_v.apply(this,arguments),Fi){if(Fi){var u=To;Fi=!1,To=null}else throw Error(k(198));Ro||(Ro=!0,Xa=u)}}function dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jd(t){if(dr(t)!==t)throw Error(k(188))}function vv(t){var e=t.alternate;if(!e){if(e=dr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jd(i),t;if(s===r)return Jd(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Bp(t){return t=vv(t),t!==null?$p(t):null}function $p(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$p(t);if(e!==null)return e;t=t.sibling}return null}var Hp=nt.unstable_scheduleCallback,Zd=nt.unstable_cancelCallback,wv=nt.unstable_shouldYield,Ev=nt.unstable_requestPaint,me=nt.unstable_now,Sv=nt.unstable_getCurrentPriorityLevel,lc=nt.unstable_ImmediatePriority,Vp=nt.unstable_UserBlockingPriority,Po=nt.unstable_NormalPriority,Cv=nt.unstable_LowPriority,Gp=nt.unstable_IdlePriority,wl=null,Pt=null;function Iv(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Tv,kv=Math.log,xv=Math.LN2;function Tv(t){return t>>>=0,t===0?32:31-(kv(t)/xv|0)|0}var Gs=64,Ks=4194304;function Oi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function No(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Oi(l):(s&=o,s!==0&&(r=Oi(s)))}else o=n&~i,o!==0?r=Oi(o):s!==0&&(r=Oi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wt(e),i=1<<n,r|=t[n],e&=~i;return r}function Rv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Rv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ja(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kp(){var t=Gs;return Gs<<=1,!(Gs&4194240)&&(Gs=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ks(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=n}function Nv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ac(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function qp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qp,uc,Yp,Xp,Jp,Za=!1,qs=[],mn=null,gn=null,_n=null,es=new Map,ts=new Map,on=[],Av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eh(t,e){switch(t){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":es.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(e.pointerId)}}function wi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ts(e),e!==null&&uc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ov(t,e,n,r,i){switch(e){case"focusin":return mn=wi(mn,t,e,n,r,i),!0;case"dragenter":return gn=wi(gn,t,e,n,r,i),!0;case"mouseover":return _n=wi(_n,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return es.set(s,wi(es.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ts.set(s,wi(ts.get(s)||null,t,e,n,r,i)),!0}return!1}function Zp(t){var e=Vn(t.target);if(e!==null){var n=dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Wp(n),e!==null){t.blockedOn=e,Jp(t.priority,function(){Yp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function co(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qa=r,n.target.dispatchEvent(r),qa=null}else return e=Ts(n),e!==null&&uc(e),t.blockedOn=n,!1;e.shift()}return!0}function th(t,e,n){co(t)&&n.delete(e)}function Dv(){Za=!1,mn!==null&&co(mn)&&(mn=null),gn!==null&&co(gn)&&(gn=null),_n!==null&&co(_n)&&(_n=null),es.forEach(th),ts.forEach(th)}function Ei(t,e){t.blockedOn===e&&(t.blockedOn=null,Za||(Za=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,Dv)))}function ns(t){function e(i){return Ei(i,t)}if(0<qs.length){Ei(qs[0],t);for(var n=1;n<qs.length;n++){var r=qs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mn!==null&&Ei(mn,t),gn!==null&&Ei(gn,t),_n!==null&&Ei(_n,t),es.forEach(e),ts.forEach(e),n=0;n<on.length;n++)r=on[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)Zp(n),n.blockedOn===null&&on.shift()}var Mr=Zt.ReactCurrentBatchConfig,Ao=!0;function bv(t,e,n,r){var i=J,s=Mr.transition;Mr.transition=null;try{J=1,cc(t,e,n,r)}finally{J=i,Mr.transition=s}}function Lv(t,e,n,r){var i=J,s=Mr.transition;Mr.transition=null;try{J=4,cc(t,e,n,r)}finally{J=i,Mr.transition=s}}function cc(t,e,n,r){if(Ao){var i=eu(t,e,n,r);if(i===null)ua(t,e,r,Oo,n),eh(t,r);else if(Ov(i,t,e,n,r))r.stopPropagation();else if(eh(t,r),e&4&&-1<Av.indexOf(t)){for(;i!==null;){var s=Ts(i);if(s!==null&&Qp(s),s=eu(t,e,n,r),s===null&&ua(t,e,r,Oo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ua(t,e,r,null,n)}}var Oo=null;function eu(t,e,n,r){if(Oo=null,t=oc(r),t=Vn(t),t!==null)if(e=dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oo=t,null}function em(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sv()){case lc:return 1;case Vp:return 4;case Po:case Cv:return 16;case Gp:return 536870912;default:return 16}default:return 16}}var fn=null,dc=null,ho=null;function tm(){if(ho)return ho;var t,e=dc,n=e.length,r,i="value"in fn?fn.value:fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ho=i.slice(t,1<r?1-r:void 0)}function fo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qs(){return!0}function nh(){return!1}function it(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qs:nh,this.isPropagationStopped=nh,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),e}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=it(si),xs=ce({},si,{view:0,detail:0}),Mv=it(xs),ea,ta,Si,El=ce({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Si&&(Si&&t.type==="mousemove"?(ea=t.screenX-Si.screenX,ta=t.screenY-Si.screenY):ta=ea=0,Si=t),ea)},movementY:function(t){return"movementY"in t?t.movementY:ta}}),rh=it(El),Fv=ce({},El,{dataTransfer:0}),Uv=it(Fv),zv=ce({},xs,{relatedTarget:0}),na=it(zv),jv=ce({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=it(jv),Bv=ce({},si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$v=it(Bv),Hv=ce({},si,{data:0}),ih=it(Hv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Kv[t])?!!e[t]:!1}function fc(){return qv}var Qv=ce({},xs,{key:function(t){if(t.key){var e=Vv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(t){return t.type==="keypress"?fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Yv=it(Qv),Xv=ce({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=it(Xv),Jv=ce({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),Zv=it(Jv),ew=ce({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),tw=it(ew),nw=ce({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rw=it(nw),iw=[9,13,27,32],pc=Vt&&"CompositionEvent"in window,Ui=null;Vt&&"documentMode"in document&&(Ui=document.documentMode);var sw=Vt&&"TextEvent"in window&&!Ui,nm=Vt&&(!pc||Ui&&8<Ui&&11>=Ui),oh=" ",lh=!1;function rm(t,e){switch(t){case"keyup":return iw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function ow(t,e){switch(t){case"compositionend":return im(e);case"keypress":return e.which!==32?null:(lh=!0,oh);case"textInput":return t=e.data,t===oh&&lh?null:t;default:return null}}function lw(t,e){if(Er)return t==="compositionend"||!pc&&rm(t,e)?(t=tm(),ho=dc=fn=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nm&&e.locale!=="ko"?null:e.data;default:return null}}var aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aw[t.type]:e==="textarea"}function sm(t,e,n,r){Mp(r),e=Do(e,"onChange"),0<e.length&&(n=new hc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zi=null,rs=null;function uw(t){gm(t,0)}function Sl(t){var e=Ir(t);if(Pp(e))return t}function cw(t,e){if(t==="change")return e}var om=!1;if(Vt){var ra;if(Vt){var ia="oninput"in document;if(!ia){var uh=document.createElement("div");uh.setAttribute("oninput","return;"),ia=typeof uh.oninput=="function"}ra=ia}else ra=!1;om=ra&&(!document.documentMode||9<document.documentMode)}function ch(){zi&&(zi.detachEvent("onpropertychange",lm),rs=zi=null)}function lm(t){if(t.propertyName==="value"&&Sl(rs)){var e=[];sm(e,rs,t,oc(t)),jp(uw,e)}}function dw(t,e,n){t==="focusin"?(ch(),zi=e,rs=n,zi.attachEvent("onpropertychange",lm)):t==="focusout"&&ch()}function hw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(rs)}function fw(t,e){if(t==="click")return Sl(e)}function pw(t,e){if(t==="input"||t==="change")return Sl(e)}function mw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ct=typeof Object.is=="function"?Object.is:mw;function is(t,e){if(Ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ma.call(e,i)||!Ct(t[i],e[i]))return!1}return!0}function dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hh(t,e){var n=dh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dh(n)}}function am(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?am(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function um(){for(var t=window,e=xo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xo(t.document)}return e}function mc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gw(t){var e=um(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&am(n.ownerDocument.documentElement,n)){if(r!==null&&mc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hh(n,s);var o=hh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _w=Vt&&"documentMode"in document&&11>=document.documentMode,Sr=null,tu=null,ji=null,nu=!1;function fh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nu||Sr==null||Sr!==xo(r)||(r=Sr,"selectionStart"in r&&mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&is(ji,r)||(ji=r,r=Do(tu,"onSelect"),0<r.length&&(e=new hc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Sr)))}function Ys(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cr={animationend:Ys("Animation","AnimationEnd"),animationiteration:Ys("Animation","AnimationIteration"),animationstart:Ys("Animation","AnimationStart"),transitionend:Ys("Transition","TransitionEnd")},sa={},cm={};Vt&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Cl(t){if(sa[t])return sa[t];if(!Cr[t])return t;var e=Cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cm)return sa[t]=e[n];return t}var dm=Cl("animationend"),hm=Cl("animationiteration"),fm=Cl("animationstart"),pm=Cl("transitionend"),mm=new Map,ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,e){mm.set(t,e),cr(e,[t])}for(var oa=0;oa<ph.length;oa++){var la=ph[oa],yw=la.toLowerCase(),vw=la[0].toUpperCase()+la.slice(1);An(yw,"on"+vw)}An(dm,"onAnimationEnd");An(hm,"onAnimationIteration");An(fm,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(pm,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function mh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yv(r,e,void 0,t),t.currentTarget=null}function gm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;mh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;mh(i,l,u),s=a}}}if(Ro)throw t=Xa,Ro=!1,Xa=null,t}function re(t,e){var n=e[lu];n===void 0&&(n=e[lu]=new Set);var r=t+"__bubble";n.has(r)||(_m(e,t,2,!1),n.add(r))}function aa(t,e,n){var r=0;e&&(r|=4),_m(n,t,r,e)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function ss(t){if(!t[Xs]){t[Xs]=!0,Ip.forEach(function(n){n!=="selectionchange"&&(ww.has(n)||aa(n,!1,t),aa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xs]||(e[Xs]=!0,aa("selectionchange",!1,e))}}function _m(t,e,n,r){switch(em(e)){case 1:var i=bv;break;case 4:i=Lv;break;default:i=cc}n=i.bind(null,e,n,t),i=void 0,!Ya||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ua(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}jp(function(){var u=s,d=oc(n),c=[];e:{var h=mm.get(t);if(h!==void 0){var v=hc,E=t;switch(t){case"keypress":if(fo(n)===0)break e;case"keydown":case"keyup":v=Yv;break;case"focusin":E="focus",v=na;break;case"focusout":E="blur",v=na;break;case"beforeblur":case"afterblur":v=na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Zv;break;case dm:case hm:case fm:v=Wv;break;case pm:v=tw;break;case"scroll":v=Mv;break;case"wheel":v=rw;break;case"copy":case"cut":case"paste":v=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=sh}var S=(e&4)!==0,j=!S&&t==="scroll",m=S?h!==null?h+"Capture":null:h;S=[];for(var f=u,y;f!==null;){y=f;var I=y.stateNode;if(y.tag===5&&I!==null&&(y=I,m!==null&&(I=Zi(f,m),I!=null&&S.push(os(f,I,y)))),j)break;f=f.return}0<S.length&&(h=new v(h,E,null,n,d),c.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==qa&&(E=n.relatedTarget||n.fromElement)&&(Vn(E)||E[Gt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(E=n.relatedTarget||n.toElement,v=u,E=E?Vn(E):null,E!==null&&(j=dr(E),E!==j||E.tag!==5&&E.tag!==6)&&(E=null)):(v=null,E=u),v!==E)){if(S=rh,I="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(S=sh,I="onPointerLeave",m="onPointerEnter",f="pointer"),j=v==null?h:Ir(v),y=E==null?h:Ir(E),h=new S(I,f+"leave",v,n,d),h.target=j,h.relatedTarget=y,I=null,Vn(d)===u&&(S=new S(m,f+"enter",E,n,d),S.target=y,S.relatedTarget=j,I=S),j=I,v&&E)t:{for(S=v,m=E,f=0,y=S;y;y=gr(y))f++;for(y=0,I=m;I;I=gr(I))y++;for(;0<f-y;)S=gr(S),f--;for(;0<y-f;)m=gr(m),y--;for(;f--;){if(S===m||m!==null&&S===m.alternate)break t;S=gr(S),m=gr(m)}S=null}else S=null;v!==null&&gh(c,h,v,S,!1),E!==null&&j!==null&&gh(c,j,E,S,!0)}}e:{if(h=u?Ir(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var P=cw;else if(ah(h))if(om)P=pw;else{P=hw;var O=dw}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=fw);if(P&&(P=P(t,u))){sm(c,P,n,d);break e}O&&O(t,h,u),t==="focusout"&&(O=h._wrapperState)&&O.controlled&&h.type==="number"&&$a(h,"number",h.value)}switch(O=u?Ir(u):window,t){case"focusin":(ah(O)||O.contentEditable==="true")&&(Sr=O,tu=u,ji=null);break;case"focusout":ji=tu=Sr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,fh(c,n,d);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":fh(c,n,d)}var A;if(pc)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Er?rm(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(nm&&n.locale!=="ko"&&(Er||b!=="onCompositionStart"?b==="onCompositionEnd"&&Er&&(A=tm()):(fn=d,dc="value"in fn?fn.value:fn.textContent,Er=!0)),O=Do(u,b),0<O.length&&(b=new ih(b,t,null,n,d),c.push({event:b,listeners:O}),A?b.data=A:(A=im(n),A!==null&&(b.data=A)))),(A=sw?ow(t,n):lw(t,n))&&(u=Do(u,"onBeforeInput"),0<u.length&&(d=new ih("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=A))}gm(c,e)})}function os(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Do(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zi(t,n),s!=null&&r.unshift(os(t,s,i)),s=Zi(t,e),s!=null&&r.push(os(t,s,i))),t=t.return}return r}function gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Zi(n,s),a!=null&&o.unshift(os(n,a,l))):i||(a=Zi(n,s),a!=null&&o.push(os(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ew=/\r\n?/g,Sw=/\u0000|\uFFFD/g;function _h(t){return(typeof t=="string"?t:""+t).replace(Ew,`
`).replace(Sw,"")}function Js(t,e,n){if(e=_h(e),_h(t)!==e&&n)throw Error(k(425))}function bo(){}var ru=null,iu=null;function su(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,Cw=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,Iw=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(t){return yh.resolve(null).then(t).catch(kw)}:ou;function kw(t){setTimeout(function(){throw t})}function ca(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ns(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ns(e)}function yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oi=Math.random().toString(36).slice(2),Rt="__reactFiber$"+oi,ls="__reactProps$"+oi,Gt="__reactContainer$"+oi,lu="__reactEvents$"+oi,xw="__reactListeners$"+oi,Tw="__reactHandles$"+oi;function Vn(t){var e=t[Rt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gt]||n[Rt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vh(t);t!==null;){if(n=t[Rt])return n;t=vh(t)}return e}t=n,n=t.parentNode}return null}function Ts(t){return t=t[Rt]||t[Gt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ir(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Il(t){return t[ls]||null}var au=[],kr=-1;function On(t){return{current:t}}function se(t){0>kr||(t.current=au[kr],au[kr]=null,kr--)}function ne(t,e){kr++,au[kr]=t.current,t.current=e}var Rn={},Le=On(Rn),Ge=On(!1),Jn=Rn;function Gr(t,e){var n=t.type.contextTypes;if(!n)return Rn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(t){return t=t.childContextTypes,t!=null}function Lo(){se(Ge),se(Le)}function wh(t,e,n){if(Le.current!==Rn)throw Error(k(168));ne(Le,e),ne(Ge,n)}function ym(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,dv(t)||"Unknown",i));return ce({},n,r)}function Mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rn,Jn=Le.current,ne(Le,t),ne(Ge,Ge.current),!0}function Eh(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=ym(t,e,Jn),r.__reactInternalMemoizedMergedChildContext=t,se(Ge),se(Le),ne(Le,t)):se(Ge),ne(Ge,n)}var Mt=null,kl=!1,da=!1;function vm(t){Mt===null?Mt=[t]:Mt.push(t)}function Rw(t){kl=!0,vm(t)}function Dn(){if(!da&&Mt!==null){da=!0;var t=0,e=J;try{var n=Mt;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mt=null,kl=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(t+1)),Hp(lc,Dn),i}finally{J=e,da=!1}}return null}var xr=[],Tr=0,Fo=null,Uo=0,st=[],ot=0,Zn=null,Ft=1,Ut="";function Wn(t,e){xr[Tr++]=Uo,xr[Tr++]=Fo,Fo=t,Uo=e}function wm(t,e,n){st[ot++]=Ft,st[ot++]=Ut,st[ot++]=Zn,Zn=t;var r=Ft;t=Ut;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var s=32-wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ft=1<<32-wt(e)+i|n<<i|r,Ut=s+t}else Ft=1<<s|n<<i|r,Ut=t}function gc(t){t.return!==null&&(Wn(t,1),wm(t,1,0))}function _c(t){for(;t===Fo;)Fo=xr[--Tr],xr[Tr]=null,Uo=xr[--Tr],xr[Tr]=null;for(;t===Zn;)Zn=st[--ot],st[ot]=null,Ut=st[--ot],st[ot]=null,Ft=st[--ot],st[ot]=null}var tt=null,et=null,le=!1,pt=null;function Em(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tt=t,et=yn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zn!==null?{id:Ft,overflow:Ut}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tt=t,et=null,!0):!1;default:return!1}}function uu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cu(t){if(le){var e=et;if(e){var n=e;if(!Sh(t,e)){if(uu(t))throw Error(k(418));e=yn(n.nextSibling);var r=tt;e&&Sh(t,e)?Em(r,n):(t.flags=t.flags&-4097|2,le=!1,tt=t)}}else{if(uu(t))throw Error(k(418));t.flags=t.flags&-4097|2,le=!1,tt=t}}}function Ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function Zs(t){if(t!==tt)return!1;if(!le)return Ch(t),le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!su(t.type,t.memoizedProps)),e&&(e=et)){if(uu(t))throw Sm(),Error(k(418));for(;e;)Em(t,e),e=yn(e.nextSibling)}if(Ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=yn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=tt?yn(t.stateNode.nextSibling):null;return!0}function Sm(){for(var t=et;t;)t=yn(t.nextSibling)}function Kr(){et=tt=null,le=!1}function yc(t){pt===null?pt=[t]:pt.push(t)}var Pw=Zt.ReactCurrentBatchConfig;function Ci(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function eo(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ih(t){var e=t._init;return e(t._payload)}function Cm(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Sn(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,y,I){return f===null||f.tag!==6?(f=ya(y,m.mode,I),f.return=m,f):(f=i(f,y),f.return=m,f)}function a(m,f,y,I){var P=y.type;return P===wr?d(m,f,y.props.children,I,y.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===rn&&Ih(P)===f.type)?(I=i(f,y.props),I.ref=Ci(m,f,y),I.return=m,I):(I=wo(y.type,y.key,y.props,null,m.mode,I),I.ref=Ci(m,f,y),I.return=m,I)}function u(m,f,y,I){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=va(y,m.mode,I),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function d(m,f,y,I,P){return f===null||f.tag!==7?(f=Xn(y,m.mode,I,P),f.return=m,f):(f=i(f,y),f.return=m,f)}function c(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ya(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case $s:return y=wo(f.type,f.key,f.props,null,m.mode,y),y.ref=Ci(m,null,f),y.return=m,y;case vr:return f=va(f,m.mode,y),f.return=m,f;case rn:var I=f._init;return c(m,I(f._payload),y)}if(Ai(f)||yi(f))return f=Xn(f,m.mode,y,null),f.return=m,f;eo(m,f)}return null}function h(m,f,y,I){var P=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:l(m,f,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $s:return y.key===P?a(m,f,y,I):null;case vr:return y.key===P?u(m,f,y,I):null;case rn:return P=y._init,h(m,f,P(y._payload),I)}if(Ai(y)||yi(y))return P!==null?null:d(m,f,y,I,null);eo(m,y)}return null}function v(m,f,y,I,P){if(typeof I=="string"&&I!==""||typeof I=="number")return m=m.get(y)||null,l(f,m,""+I,P);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case $s:return m=m.get(I.key===null?y:I.key)||null,a(f,m,I,P);case vr:return m=m.get(I.key===null?y:I.key)||null,u(f,m,I,P);case rn:var O=I._init;return v(m,f,y,O(I._payload),P)}if(Ai(I)||yi(I))return m=m.get(y)||null,d(f,m,I,P,null);eo(f,I)}return null}function E(m,f,y,I){for(var P=null,O=null,A=f,b=f=0,X=null;A!==null&&b<y.length;b++){A.index>b?(X=A,A=null):X=A.sibling;var B=h(m,A,y[b],I);if(B===null){A===null&&(A=X);break}t&&A&&B.alternate===null&&e(m,A),f=s(B,f,b),O===null?P=B:O.sibling=B,O=B,A=X}if(b===y.length)return n(m,A),le&&Wn(m,b),P;if(A===null){for(;b<y.length;b++)A=c(m,y[b],I),A!==null&&(f=s(A,f,b),O===null?P=A:O.sibling=A,O=A);return le&&Wn(m,b),P}for(A=r(m,A);b<y.length;b++)X=v(A,m,b,y[b],I),X!==null&&(t&&X.alternate!==null&&A.delete(X.key===null?b:X.key),f=s(X,f,b),O===null?P=X:O.sibling=X,O=X);return t&&A.forEach(function(ge){return e(m,ge)}),le&&Wn(m,b),P}function S(m,f,y,I){var P=yi(y);if(typeof P!="function")throw Error(k(150));if(y=P.call(y),y==null)throw Error(k(151));for(var O=P=null,A=f,b=f=0,X=null,B=y.next();A!==null&&!B.done;b++,B=y.next()){A.index>b?(X=A,A=null):X=A.sibling;var ge=h(m,A,B.value,I);if(ge===null){A===null&&(A=X);break}t&&A&&ge.alternate===null&&e(m,A),f=s(ge,f,b),O===null?P=ge:O.sibling=ge,O=ge,A=X}if(B.done)return n(m,A),le&&Wn(m,b),P;if(A===null){for(;!B.done;b++,B=y.next())B=c(m,B.value,I),B!==null&&(f=s(B,f,b),O===null?P=B:O.sibling=B,O=B);return le&&Wn(m,b),P}for(A=r(m,A);!B.done;b++,B=y.next())B=v(A,m,b,B.value,I),B!==null&&(t&&B.alternate!==null&&A.delete(B.key===null?b:B.key),f=s(B,f,b),O===null?P=B:O.sibling=B,O=B);return t&&A.forEach(function(Je){return e(m,Je)}),le&&Wn(m,b),P}function j(m,f,y,I){if(typeof y=="object"&&y!==null&&y.type===wr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case $s:e:{for(var P=y.key,O=f;O!==null;){if(O.key===P){if(P=y.type,P===wr){if(O.tag===7){n(m,O.sibling),f=i(O,y.props.children),f.return=m,m=f;break e}}else if(O.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===rn&&Ih(P)===O.type){n(m,O.sibling),f=i(O,y.props),f.ref=Ci(m,O,y),f.return=m,m=f;break e}n(m,O);break}else e(m,O);O=O.sibling}y.type===wr?(f=Xn(y.props.children,m.mode,I,y.key),f.return=m,m=f):(I=wo(y.type,y.key,y.props,null,m.mode,I),I.ref=Ci(m,f,y),I.return=m,m=I)}return o(m);case vr:e:{for(O=y.key;f!==null;){if(f.key===O)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=va(y,m.mode,I),f.return=m,m=f}return o(m);case rn:return O=y._init,j(m,f,O(y._payload),I)}if(Ai(y))return E(m,f,y,I);if(yi(y))return S(m,f,y,I);eo(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=ya(y,m.mode,I),f.return=m,m=f),o(m)):n(m,f)}return j}var qr=Cm(!0),Im=Cm(!1),zo=On(null),jo=null,Rr=null,vc=null;function wc(){vc=Rr=jo=null}function Ec(t){var e=zo.current;se(zo),t._currentValue=e}function du(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fr(t,e){jo=t,vc=Rr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(vc!==t)if(t={context:t,memoizedValue:e,next:null},Rr===null){if(jo===null)throw Error(k(308));Rr=t,jo.dependencies={lanes:0,firstContext:t}}else Rr=Rr.next=t;return e}var Gn=null;function Sc(t){Gn===null?Gn=[t]:Gn.push(t)}function km(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kt(t,r)}function Kt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sn=!1;function Cc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $t(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kt(t,n)}return i=r.interleaved,i===null?(e.next=e,Sc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kt(t,n)}function po(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ac(t,n)}}function kh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wo(t,e,n,r){var i=t.updateQueue;sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=t,S=l;switch(h=e,v=n,S.tag){case 1:if(E=S.payload,typeof E=="function"){c=E.call(v,c,h);break e}c=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=S.payload,h=typeof E=="function"?E.call(v,c,h):E,h==null)break e;c=ce({},c,h);break e;case 2:sn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,a=c):d=d.next=v,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);tr|=o,t.lanes=o,t.memoizedState=c}}function xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Rs={},Nt=On(Rs),as=On(Rs),us=On(Rs);function Kn(t){if(t===Rs)throw Error(k(174));return t}function Ic(t,e){switch(ne(us,e),ne(as,t),ne(Nt,Rs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Va(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Va(e,t)}se(Nt),ne(Nt,e)}function Qr(){se(Nt),se(as),se(us)}function Tm(t){Kn(us.current);var e=Kn(Nt.current),n=Va(e,t.type);e!==n&&(ne(as,t),ne(Nt,n))}function kc(t){as.current===t&&(se(Nt),se(as))}var ae=On(0);function Bo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ha=[];function xc(){for(var t=0;t<ha.length;t++)ha[t]._workInProgressVersionPrimary=null;ha.length=0}var mo=Zt.ReactCurrentDispatcher,fa=Zt.ReactCurrentBatchConfig,er=0,ue=null,ve=null,Ce=null,$o=!1,Wi=!1,cs=0,Nw=0;function Ae(){throw Error(k(321))}function Tc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ct(t[n],e[n]))return!1;return!0}function Rc(t,e,n,r,i,s){if(er=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mo.current=t===null||t.memoizedState===null?bw:Lw,t=n(r,i),Wi){s=0;do{if(Wi=!1,cs=0,25<=s)throw Error(k(301));s+=1,Ce=ve=null,e.updateQueue=null,mo.current=Mw,t=n(r,i)}while(Wi)}if(mo.current=Ho,e=ve!==null&&ve.next!==null,er=0,Ce=ve=ue=null,$o=!1,e)throw Error(k(300));return t}function Pc(){var t=cs!==0;return cs=0,t}function Tt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ue.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function ct(){if(ve===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Ce===null?ue.memoizedState:Ce.next;if(e!==null)Ce=e,ve=t;else{if(t===null)throw Error(k(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ce===null?ue.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function ds(t,e){return typeof e=="function"?e(t):e}function pa(t){var e=ct(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((er&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ue.lanes|=d,tr|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Ct(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,tr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ma(t){var e=ct(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ct(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Rm(){}function Pm(t,e){var n=ue,r=ct(),i=e(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,Nc(Om.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,hs(9,Am.bind(null,n,r,i,e),void 0,null),xe===null)throw Error(k(349));er&30||Nm(n,e,i)}return i}function Nm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Am(t,e,n,r){e.value=n,e.getSnapshot=r,Dm(e)&&bm(t)}function Om(t,e,n){return n(function(){Dm(e)&&bm(t)})}function Dm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ct(t,n)}catch{return!0}}function bm(t){var e=Kt(t,1);e!==null&&Et(e,t,1,-1)}function Th(t){var e=Tt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:t},e.queue=t,t=t.dispatch=Dw.bind(null,ue,t),[e.memoizedState,t]}function hs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Lm(){return ct().memoizedState}function go(t,e,n,r){var i=Tt();ue.flags|=t,i.memoizedState=hs(1|e,n,void 0,r===void 0?null:r)}function xl(t,e,n,r){var i=ct();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&Tc(r,o.deps)){i.memoizedState=hs(e,n,s,r);return}}ue.flags|=t,i.memoizedState=hs(1|e,n,s,r)}function Rh(t,e){return go(8390656,8,t,e)}function Nc(t,e){return xl(2048,8,t,e)}function Mm(t,e){return xl(4,2,t,e)}function Fm(t,e){return xl(4,4,t,e)}function Um(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zm(t,e,n){return n=n!=null?n.concat([t]):null,xl(4,4,Um.bind(null,e,t),n)}function Ac(){}function jm(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wm(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Bm(t,e,n){return er&21?(Ct(n,e)||(n=Kp(),ue.lanes|=n,tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function Aw(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=fa.transition;fa.transition={};try{t(!1),e()}finally{J=n,fa.transition=r}}function $m(){return ct().memoizedState}function Ow(t,e,n){var r=En(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hm(t))Vm(e,n);else if(n=km(t,e,n,r),n!==null){var i=Ue();Et(n,t,r,i),Gm(n,e,r)}}function Dw(t,e,n){var r=En(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hm(t))Vm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ct(l,o)){var a=e.interleaved;a===null?(i.next=i,Sc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=km(t,e,i,r),n!==null&&(i=Ue(),Et(n,t,r,i),Gm(n,e,r))}}function Hm(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function Vm(t,e){Wi=$o=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ac(t,n)}}var Ho={readContext:ut,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},bw={readContext:ut,useCallback:function(t,e){return Tt().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:Rh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,go(4194308,4,Um.bind(null,e,t),n)},useLayoutEffect:function(t,e){return go(4194308,4,t,e)},useInsertionEffect:function(t,e){return go(4,2,t,e)},useMemo:function(t,e){var n=Tt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ow.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Tt();return t={current:t},e.memoizedState=t},useState:Th,useDebugValue:Ac,useDeferredValue:function(t){return Tt().memoizedState=t},useTransition:function(){var t=Th(!1),e=t[0];return t=Aw.bind(null,t[1]),Tt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=Tt();if(le){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),xe===null)throw Error(k(349));er&30||Nm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rh(Om.bind(null,r,s,t),[t]),r.flags|=2048,hs(9,Am.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tt(),e=xe.identifierPrefix;if(le){var n=Ut,r=Ft;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=cs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Nw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lw={readContext:ut,useCallback:jm,useContext:ut,useEffect:Nc,useImperativeHandle:zm,useInsertionEffect:Mm,useLayoutEffect:Fm,useMemo:Wm,useReducer:pa,useRef:Lm,useState:function(){return pa(ds)},useDebugValue:Ac,useDeferredValue:function(t){var e=ct();return Bm(e,ve.memoizedState,t)},useTransition:function(){var t=pa(ds)[0],e=ct().memoizedState;return[t,e]},useMutableSource:Rm,useSyncExternalStore:Pm,useId:$m,unstable_isNewReconciler:!1},Mw={readContext:ut,useCallback:jm,useContext:ut,useEffect:Nc,useImperativeHandle:zm,useInsertionEffect:Mm,useLayoutEffect:Fm,useMemo:Wm,useReducer:ma,useRef:Lm,useState:function(){return ma(ds)},useDebugValue:Ac,useDeferredValue:function(t){var e=ct();return ve===null?e.memoizedState=t:Bm(e,ve.memoizedState,t)},useTransition:function(){var t=ma(ds)[0],e=ct().memoizedState;return[t,e]},useMutableSource:Rm,useSyncExternalStore:Pm,useId:$m,unstable_isNewReconciler:!1};function ht(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tl={isMounted:function(t){return(t=t._reactInternals)?dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=En(t),s=$t(r,i);s.payload=e,n!=null&&(s.callback=n),e=vn(t,s,i),e!==null&&(Et(e,t,i,r),po(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=En(t),s=$t(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vn(t,s,i),e!==null&&(Et(e,t,i,r),po(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ue(),r=En(t),i=$t(n,r);i.tag=2,e!=null&&(i.callback=e),e=vn(t,i,r),e!==null&&(Et(e,t,r,n),po(e,t,r))}};function Ph(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!is(n,r)||!is(i,s):!0}function Km(t,e,n){var r=!1,i=Rn,s=e.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=Ke(e)?Jn:Le.current,r=e.contextTypes,s=(r=r!=null)?Gr(t,i):Rn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tl.enqueueReplaceState(e,e.state,null)}function fu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Cc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=Ke(e)?Jn:Le.current,i.context=Gr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tl.enqueueReplaceState(i,i.state,null),Wo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Yr(t,e){try{var n="",r=e;do n+=cv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ga(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Fw=typeof WeakMap=="function"?WeakMap:Map;function qm(t,e,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Go||(Go=!0,Iu=r),pu(t,e)},n}function Qm(t,e,n){n=$t(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){pu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pu(t,e),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ah(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Fw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Xw.bind(null,t,e,n),e.then(t,t))}function Oh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$t(-1,1),e.tag=2,vn(n,e,1))),n.lanes|=1),t)}var Uw=Zt.ReactCurrentOwner,$e=!1;function Fe(t,e,n,r){e.child=t===null?Im(e,null,n,r):qr(e,t.child,n,r)}function bh(t,e,n,r,i){n=n.render;var s=e.ref;return Fr(e,i),r=Rc(t,e,n,r,s,i),n=Pc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qt(t,e,i)):(le&&n&&gc(e),e.flags|=1,Fe(t,e,r,i),e.child)}function Lh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ym(t,e,s,r,i)):(t=wo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:is,n(o,r)&&t.ref===e.ref)return qt(t,e,i)}return e.flags|=1,t=Sn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ym(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(is(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,qt(t,e,i)}return mu(t,e,n,r,i)}function Xm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Nr,Ze),Ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Nr,Ze),Ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(Nr,Ze),Ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(Nr,Ze),Ze|=r;return Fe(t,e,i,n),e.child}function Jm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mu(t,e,n,r,i){var s=Ke(n)?Jn:Le.current;return s=Gr(e,s),Fr(e,i),n=Rc(t,e,n,r,s,i),r=Pc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qt(t,e,i)):(le&&r&&gc(e),e.flags|=1,Fe(t,e,n,i),e.child)}function Mh(t,e,n,r,i){if(Ke(n)){var s=!0;Mo(e)}else s=!1;if(Fr(e,i),e.stateNode===null)_o(t,e),Km(e,n,r),fu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ke(n)?Jn:Le.current,u=Gr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Nh(e,o,r,u),sn=!1;var h=e.memoizedState;o.state=h,Wo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ge.current||sn?(typeof d=="function"&&(hu(e,n,d,r),a=e.memoizedState),(l=sn||Ph(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,xm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ht(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Ke(n)?Jn:Le.current,a=Gr(e,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Nh(e,o,r,a),sn=!1,h=e.memoizedState,o.state=h,Wo(e,r,o,i);var E=e.memoizedState;l!==c||h!==E||Ge.current||sn?(typeof v=="function"&&(hu(e,n,v,r),E=e.memoizedState),(u=sn||Ph(e,n,u,r,h,E,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return gu(t,e,n,r,s,i)}function gu(t,e,n,r,i,s){Jm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Eh(e,n,!1),qt(t,e,s);r=e.stateNode,Uw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qr(e,t.child,null,s),e.child=qr(e,null,l,s)):Fe(t,e,l,s),e.memoizedState=r.state,i&&Eh(e,n,!0),e.child}function Zm(t){var e=t.stateNode;e.pendingContext?wh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wh(t,e.context,!1),Ic(t,e.containerInfo)}function Fh(t,e,n,r,i){return Kr(),yc(i),e.flags|=256,Fe(t,e,n,r),e.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function eg(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(ae,i&1),t===null)return cu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nl(o,r,0,null),t=Xn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yu(n),e.memoizedState=_u,t):Oc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return zw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Sn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Sn(l,s):(s=Xn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_u,r}return s=t.child,t=s.sibling,r=Sn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Oc(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function to(t,e,n,r){return r!==null&&yc(r),qr(e,t.child,null,n),t=Oc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ga(Error(k(422))),to(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Nl({mode:"visible",children:r.children},i,0,null),s=Xn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qr(e,t.child,null,o),e.child.memoizedState=yu(o),e.memoizedState=_u,s);if(!(e.mode&1))return to(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=ga(s,r,void 0),to(t,e,o,r)}if(l=(o&t.childLanes)!==0,$e||l){if(r=xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kt(t,i),Et(r,t,i,-1))}return Uc(),r=ga(Error(k(421))),to(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Jw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,et=yn(i.nextSibling),tt=e,le=!0,pt=null,t!==null&&(st[ot++]=Ft,st[ot++]=Ut,st[ot++]=Zn,Ft=t.id,Ut=t.overflow,Zn=e),e=Oc(e,r.children),e.flags|=4096,e)}function Uh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),du(t.return,e,n)}function _a(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Fe(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uh(t,n,e);else if(t.tag===19)Uh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_a(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_a(e,!0,n,null,s);break;case"together":_a(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _o(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jw(t,e,n){switch(e.tag){case 3:Zm(e),Kr();break;case 5:Tm(e);break;case 1:Ke(e.type)&&Mo(e);break;case 4:Ic(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(zo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?eg(t,e,n):(ne(ae,ae.current&1),t=qt(t,e,n),t!==null?t.sibling:null);ne(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return tg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,Xm(t,e,n)}return qt(t,e,n)}var ng,vu,rg,ig;ng=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vu=function(){};rg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kn(Nt.current);var s=null;switch(n){case"input":i=Wa(t,i),r=Wa(t,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=Ha(t,i),r=Ha(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bo)}Ga(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&re("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ig=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ii(t,e){if(!le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ww(t,e,n){var r=e.pendingProps;switch(_c(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return Ke(e.type)&&Lo(),Oe(e),null;case 3:return r=e.stateNode,Qr(),se(Ge),se(Le),xc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pt!==null&&(Tu(pt),pt=null))),vu(t,e),Oe(e),null;case 5:kc(e);var i=Kn(us.current);if(n=e.type,t!==null&&e.stateNode!=null)rg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Oe(e),null}if(t=Kn(Nt.current),Zs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rt]=e,r[ls]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Di.length;i++)re(Di[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Kd(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":Qd(r,s),re("invalid",r)}Ga(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Js(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Js(r.textContent,l,t),i=["children",""+l]):Xi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":Hs(r),qd(r,s,!0);break;case"textarea":Hs(r),Yd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Op(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rt]=e,t[ls]=r,ng(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ka(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Di.length;i++)re(Di[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":Kd(t,r),i=Wa(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),re("invalid",t);break;case"textarea":Qd(t,r),i=Ha(t,r),re("invalid",t);break;default:i=r}Ga(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Lp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Dp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ji(t,a):typeof a=="number"&&Ji(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&re("scroll",t):a!=null&&nc(t,s,a,o))}switch(n){case"input":Hs(t),qd(t,r,!1);break;case"textarea":Hs(t),Yd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Dr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Dr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)ig(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Kn(us.current),Kn(Nt.current),Zs(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rt]=e,(s=r.nodeValue!==n)&&(t=tt,t!==null))switch(t.tag){case 3:Js(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Js(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=e,e.stateNode=r}return Oe(e),null;case 13:if(se(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(le&&et!==null&&e.mode&1&&!(e.flags&128))Sm(),Kr(),e.flags|=98560,s=!1;else if(s=Zs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Rt]=e}else Kr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),s=!1}else pt!==null&&(Tu(pt),pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?Ee===0&&(Ee=3):Uc())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return Qr(),vu(t,e),t===null&&ss(e.stateNode.containerInfo),Oe(e),null;case 10:return Ec(e.type._context),Oe(e),null;case 17:return Ke(e.type)&&Lo(),Oe(e),null;case 19:if(se(ae),s=e.memoizedState,s===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ii(s,!1);else{if(Ee!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bo(t),o!==null){for(e.flags|=128,Ii(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>Xr&&(e.flags|=128,r=!0,Ii(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ii(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!le)return Oe(e),null}else 2*me()-s.renderingStartTime>Xr&&n!==1073741824&&(e.flags|=128,r=!0,Ii(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,n=ae.current,ne(ae,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return Fc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ze&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function Bw(t,e){switch(_c(e),e.tag){case 1:return Ke(e.type)&&Lo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qr(),se(Ge),se(Le),xc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kc(e),null;case 13:if(se(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Kr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ae),null;case 4:return Qr(),null;case 10:return Ec(e.type._context),null;case 22:case 23:return Fc(),null;case 24:return null;default:return null}}var no=!1,De=!1,$w=typeof WeakSet=="function"?WeakSet:Set,N=null;function Pr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function wu(t,e,n){try{n()}catch(r){he(t,e,r)}}var zh=!1;function Hw(t,e){if(ru=Ao,t=um(),mc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(iu={focusedElem:t,selectionRange:n},Ao=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var S=E.memoizedProps,j=E.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?S:ht(e.type,S),j);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(I){he(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return E=zh,zh=!1,E}function Bi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wu(e,n,s)}i=i.next}while(i!==r)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Eu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sg(t){var e=t.alternate;e!==null&&(t.alternate=null,sg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rt],delete e[ls],delete e[lu],delete e[xw],delete e[Tw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function og(t){return t.tag===5||t.tag===3||t.tag===4}function jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||og(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bo));else if(r!==4&&(t=t.child,t!==null))for(Su(t,e,n),t=t.sibling;t!==null;)Su(t,e,n),t=t.sibling}function Cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}var Te=null,ft=!1;function tn(t,e,n){for(n=n.child;n!==null;)lg(t,e,n),n=n.sibling}function lg(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:De||Pr(n,e);case 6:var r=Te,i=ft;Te=null,tn(t,e,n),Te=r,ft=i,Te!==null&&(ft?(t=Te,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(ft?(t=Te,n=n.stateNode,t.nodeType===8?ca(t.parentNode,n):t.nodeType===1&&ca(t,n),ns(t)):ca(Te,n.stateNode));break;case 4:r=Te,i=ft,Te=n.stateNode.containerInfo,ft=!0,tn(t,e,n),Te=r,ft=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wu(n,e,o),i=i.next}while(i!==r)}tn(t,e,n);break;case 1:if(!De&&(Pr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,e,l)}tn(t,e,n);break;case 21:tn(t,e,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,tn(t,e,n),De=r):tn(t,e,n);break;default:tn(t,e,n)}}function Wh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $w),e.forEach(function(r){var i=Zw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Te=l.stateNode,ft=!1;break e;case 3:Te=l.stateNode.containerInfo,ft=!0;break e;case 4:Te=l.stateNode.containerInfo,ft=!0;break e}l=l.return}if(Te===null)throw Error(k(160));lg(s,o,i),Te=null,ft=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){he(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ag(e,t),e=e.sibling}function ag(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dt(e,t),xt(t),r&4){try{Bi(3,t,t.return),Rl(3,t)}catch(S){he(t,t.return,S)}try{Bi(5,t,t.return)}catch(S){he(t,t.return,S)}}break;case 1:dt(e,t),xt(t),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(dt(e,t),xt(t),r&512&&n!==null&&Pr(n,n.return),t.flags&32){var i=t.stateNode;try{Ji(i,"")}catch(S){he(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Np(i,s),Ka(l,o);var u=Ka(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Lp(i,c):d==="dangerouslySetInnerHTML"?Dp(i,c):d==="children"?Ji(i,c):nc(i,d,c,u)}switch(l){case"input":Ba(i,s);break;case"textarea":Ap(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Dr(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Dr(i,!!s.multiple,s.defaultValue,!0):Dr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ls]=s}catch(S){he(t,t.return,S)}}break;case 6:if(dt(e,t),xt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){he(t,t.return,S)}}break;case 3:if(dt(e,t),xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ns(e.containerInfo)}catch(S){he(t,t.return,S)}break;case 4:dt(e,t),xt(t);break;case 13:dt(e,t),xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lc=me())),r&4&&Wh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(De=(u=De)||d,dt(e,t),De=u):dt(e,t),xt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(N=t,d=t.child;d!==null;){for(c=N=d;N!==null;){switch(h=N,v=h.child,h.tag){case 0:case 11:case 14:case 15:Bi(4,h,h.return);break;case 1:Pr(h,h.return);var E=h.stateNode;if(typeof E.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(S){he(r,n,S)}}break;case 5:Pr(h,h.return);break;case 22:if(h.memoizedState!==null){$h(c);continue}}v!==null?(v.return=h,N=v):$h(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=bp("display",o))}catch(S){he(t,t.return,S)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(S){he(t,t.return,S)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:dt(e,t),xt(t),r&4&&Wh(t);break;case 21:break;default:dt(e,t),xt(t)}}function xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(og(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ji(i,""),r.flags&=-33);var s=jh(t);Cu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=jh(t);Su(t,l,o);break;default:throw Error(k(161))}}catch(a){he(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vw(t,e,n){N=t,ug(t)}function ug(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||no;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||De;l=no;var u=De;if(no=o,(De=a)&&!u)for(N=i;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?Hh(i):a!==null?(a.return=o,N=a):Hh(i);for(;s!==null;)N=s,ug(s),s=s.sibling;N=i,no=l,De=u}Bh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Bh(t)}}function Bh(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:De||Rl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ns(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}De||e.flags&512&&Eu(e)}catch(h){he(e,e.return,h)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function $h(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Hh(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(a){he(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){he(e,i,a)}}var s=e.return;try{Eu(e)}catch(a){he(e,s,a)}break;case 5:var o=e.return;try{Eu(e)}catch(a){he(e,o,a)}}}catch(a){he(e,e.return,a)}if(e===t){N=null;break}var l=e.sibling;if(l!==null){l.return=e.return,N=l;break}N=e.return}}var Gw=Math.ceil,Vo=Zt.ReactCurrentDispatcher,Dc=Zt.ReactCurrentOwner,at=Zt.ReactCurrentBatchConfig,q=0,xe=null,ye=null,Pe=0,Ze=0,Nr=On(0),Ee=0,fs=null,tr=0,Pl=0,bc=0,$i=null,Be=null,Lc=0,Xr=1/0,Lt=null,Go=!1,Iu=null,wn=null,ro=!1,pn=null,Ko=0,Hi=0,ku=null,yo=-1,vo=0;function Ue(){return q&6?me():yo!==-1?yo:yo=me()}function En(t){return t.mode&1?q&2&&Pe!==0?Pe&-Pe:Pw.transition!==null?(vo===0&&(vo=Kp()),vo):(t=J,t!==0||(t=window.event,t=t===void 0?16:em(t.type)),t):1}function Et(t,e,n,r){if(50<Hi)throw Hi=0,ku=null,Error(k(185));ks(t,n,r),(!(q&2)||t!==xe)&&(t===xe&&(!(q&2)&&(Pl|=n),Ee===4&&ln(t,Pe)),qe(t,r),n===1&&q===0&&!(e.mode&1)&&(Xr=me()+500,kl&&Dn()))}function qe(t,e){var n=t.callbackNode;Pv(t,e);var r=No(t,t===xe?Pe:0);if(r===0)n!==null&&Zd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zd(n),e===1)t.tag===0?Rw(Vh.bind(null,t)):vm(Vh.bind(null,t)),Iw(function(){!(q&6)&&Dn()}),n=null;else{switch(qp(r)){case 1:n=lc;break;case 4:n=Vp;break;case 16:n=Po;break;case 536870912:n=Gp;break;default:n=Po}n=_g(n,cg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cg(t,e){if(yo=-1,vo=0,q&6)throw Error(k(327));var n=t.callbackNode;if(Ur()&&t.callbackNode!==n)return null;var r=No(t,t===xe?Pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qo(t,r);else{e=r;var i=q;q|=2;var s=hg();(xe!==t||Pe!==e)&&(Lt=null,Xr=me()+500,Yn(t,e));do try{Qw();break}catch(l){dg(t,l)}while(!0);wc(),Vo.current=s,q=i,ye!==null?e=0:(xe=null,Pe=0,e=Ee)}if(e!==0){if(e===2&&(i=Ja(t),i!==0&&(r=i,e=xu(t,i))),e===1)throw n=fs,Yn(t,0),ln(t,r),qe(t,me()),n;if(e===6)ln(t,r);else{if(i=t.current.alternate,!(r&30)&&!Kw(i)&&(e=qo(t,r),e===2&&(s=Ja(t),s!==0&&(r=s,e=xu(t,s))),e===1))throw n=fs,Yn(t,0),ln(t,r),qe(t,me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Bn(t,Be,Lt);break;case 3:if(ln(t,r),(r&130023424)===r&&(e=Lc+500-me(),10<e)){if(No(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ue(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ou(Bn.bind(null,t,Be,Lt),e);break}Bn(t,Be,Lt);break;case 4:if(ln(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gw(r/1960))-r,10<r){t.timeoutHandle=ou(Bn.bind(null,t,Be,Lt),r);break}Bn(t,Be,Lt);break;case 5:Bn(t,Be,Lt);break;default:throw Error(k(329))}}}return qe(t,me()),t.callbackNode===n?cg.bind(null,t):null}function xu(t,e){var n=$i;return t.current.memoizedState.isDehydrated&&(Yn(t,e).flags|=256),t=qo(t,e),t!==2&&(e=Be,Be=n,e!==null&&Tu(e)),t}function Tu(t){Be===null?Be=t:Be.push.apply(Be,t)}function Kw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ln(t,e){for(e&=~bc,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wt(e),r=1<<n;t[n]=-1,e&=~r}}function Vh(t){if(q&6)throw Error(k(327));Ur();var e=No(t,0);if(!(e&1))return qe(t,me()),null;var n=qo(t,e);if(t.tag!==0&&n===2){var r=Ja(t);r!==0&&(e=r,n=xu(t,r))}if(n===1)throw n=fs,Yn(t,0),ln(t,e),qe(t,me()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bn(t,Be,Lt),qe(t,me()),null}function Mc(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Xr=me()+500,kl&&Dn())}}function nr(t){pn!==null&&pn.tag===0&&!(q&6)&&Ur();var e=q;q|=1;var n=at.transition,r=J;try{if(at.transition=null,J=1,t)return t()}finally{J=r,at.transition=n,q=e,!(q&6)&&Dn()}}function Fc(){Ze=Nr.current,se(Nr)}function Yn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cw(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(_c(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lo();break;case 3:Qr(),se(Ge),se(Le),xc();break;case 5:kc(r);break;case 4:Qr();break;case 13:se(ae);break;case 19:se(ae);break;case 10:Ec(r.type._context);break;case 22:case 23:Fc()}n=n.return}if(xe=t,ye=t=Sn(t.current,null),Pe=Ze=e,Ee=0,fs=null,bc=Pl=tr=0,Be=$i=null,Gn!==null){for(e=0;e<Gn.length;e++)if(n=Gn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gn=null}return t}function dg(t,e){do{var n=ye;try{if(wc(),mo.current=Ho,$o){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$o=!1}if(er=0,Ce=ve=ue=null,Wi=!1,cs=0,Dc.current=null,n===null||n.return===null){Ee=1,fs=e,ye=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Pe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Oh(o);if(v!==null){v.flags&=-257,Dh(v,o,l,s,e),v.mode&1&&Ah(s,u,e),e=v,a=u;var E=e.updateQueue;if(E===null){var S=new Set;S.add(a),e.updateQueue=S}else E.add(a);break e}else{if(!(e&1)){Ah(s,u,e),Uc();break e}a=Error(k(426))}}else if(le&&l.mode&1){var j=Oh(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Dh(j,o,l,s,e),yc(Yr(a,l));break e}}s=a=Yr(a,l),Ee!==4&&(Ee=2),$i===null?$i=[s]:$i.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=qm(s,a,e);kh(s,m);break e;case 1:l=a;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wn===null||!wn.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=Qm(s,l,e);kh(s,I);break e}}s=s.return}while(s!==null)}pg(n)}catch(P){e=P,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function hg(){var t=Vo.current;return Vo.current=Ho,t===null?Ho:t}function Uc(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),xe===null||!(tr&268435455)&&!(Pl&268435455)||ln(xe,Pe)}function qo(t,e){var n=q;q|=2;var r=hg();(xe!==t||Pe!==e)&&(Lt=null,Yn(t,e));do try{qw();break}catch(i){dg(t,i)}while(!0);if(wc(),q=n,Vo.current=r,ye!==null)throw Error(k(261));return xe=null,Pe=0,Ee}function qw(){for(;ye!==null;)fg(ye)}function Qw(){for(;ye!==null&&!wv();)fg(ye)}function fg(t){var e=gg(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?pg(t):ye=e,Dc.current=null}function pg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Bw(n,e),n!==null){n.flags&=32767,ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ee=6,ye=null;return}}else if(n=Ww(n,e,Ze),n!==null){ye=n;return}if(e=e.sibling,e!==null){ye=e;return}ye=e=t}while(e!==null);Ee===0&&(Ee=5)}function Bn(t,e,n){var r=J,i=at.transition;try{at.transition=null,J=1,Yw(t,e,n,r)}finally{at.transition=i,J=r}return null}function Yw(t,e,n,r){do Ur();while(pn!==null);if(q&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nv(t,s),t===xe&&(ye=xe=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,_g(Po,function(){return Ur(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=at.transition,at.transition=null;var o=J;J=1;var l=q;q|=4,Dc.current=null,Hw(t,n),ag(n,t),gw(iu),Ao=!!ru,iu=ru=null,t.current=n,Vw(n),Ev(),q=l,J=o,at.transition=s}else t.current=n;if(ro&&(ro=!1,pn=t,Ko=i),s=t.pendingLanes,s===0&&(wn=null),Iv(n.stateNode),qe(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Go)throw Go=!1,t=Iu,Iu=null,t;return Ko&1&&t.tag!==0&&Ur(),s=t.pendingLanes,s&1?t===ku?Hi++:(Hi=0,ku=t):Hi=0,Dn(),null}function Ur(){if(pn!==null){var t=qp(Ko),e=at.transition,n=J;try{if(at.transition=null,J=16>t?16:t,pn===null)var r=!1;else{if(t=pn,pn=null,Ko=0,q&6)throw Error(k(331));var i=q;for(q|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Bi(8,d,s)}var c=d.child;if(c!==null)c.return=d,N=c;else for(;N!==null;){d=N;var h=d.sibling,v=d.return;if(sg(d),d===u){N=null;break}if(h!==null){h.return=v,N=h;break}N=v}}}var E=s.alternate;if(E!==null){var S=E.child;if(S!==null){E.child=null;do{var j=S.sibling;S.sibling=null,S=j}while(S!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,N=y;else e:for(o=f;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Rl(9,l)}}catch(P){he(l,l.return,P)}if(l===o){N=null;break e}var I=l.sibling;if(I!==null){I.return=l.return,N=I;break e}N=l.return}}if(q=i,Dn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(wl,t)}catch{}r=!0}return r}finally{J=n,at.transition=e}}return!1}function Gh(t,e,n){e=Yr(n,e),e=qm(t,e,1),t=vn(t,e,1),e=Ue(),t!==null&&(ks(t,1,e),qe(t,e))}function he(t,e,n){if(t.tag===3)Gh(t,t,n);else for(;e!==null;){if(e.tag===3){Gh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){t=Yr(n,t),t=Qm(e,t,1),e=vn(e,t,1),t=Ue(),e!==null&&(ks(e,1,t),qe(e,t));break}}e=e.return}}function Xw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ue(),t.pingedLanes|=t.suspendedLanes&n,xe===t&&(Pe&n)===n&&(Ee===4||Ee===3&&(Pe&130023424)===Pe&&500>me()-Lc?Yn(t,0):bc|=n),qe(t,e)}function mg(t,e){e===0&&(t.mode&1?(e=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):e=1);var n=Ue();t=Kt(t,e),t!==null&&(ks(t,e,n),qe(t,n))}function Jw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mg(t,n)}function Zw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),mg(t,n)}var gg;gg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,jw(t,e,n);$e=!!(t.flags&131072)}else $e=!1,le&&e.flags&1048576&&wm(e,Uo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_o(t,e),t=e.pendingProps;var i=Gr(e,Le.current);Fr(e,n),i=Rc(null,e,r,t,i,n);var s=Pc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(s=!0,Mo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cc(e),i.updater=Tl,e.stateNode=i,i._reactInternals=e,fu(e,r,t,n),e=gu(null,e,r,!0,s,n)):(e.tag=0,le&&s&&gc(e),Fe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_o(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=t0(r),t=ht(r,t),i){case 0:e=mu(null,e,r,t,n);break e;case 1:e=Mh(null,e,r,t,n);break e;case 11:e=bh(null,e,r,t,n);break e;case 14:e=Lh(null,e,r,ht(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),mu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),Mh(t,e,r,i,n);case 3:e:{if(Zm(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,xm(t,e),Wo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yr(Error(k(423)),e),e=Fh(t,e,r,n,i);break e}else if(r!==i){i=Yr(Error(k(424)),e),e=Fh(t,e,r,n,i);break e}else for(et=yn(e.stateNode.containerInfo.firstChild),tt=e,le=!0,pt=null,n=Im(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kr(),r===i){e=qt(t,e,n);break e}Fe(t,e,r,n)}e=e.child}return e;case 5:return Tm(e),t===null&&cu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,su(r,i)?o=null:s!==null&&su(r,s)&&(e.flags|=32),Jm(t,e),Fe(t,e,o,n),e.child;case 6:return t===null&&cu(e),null;case 13:return eg(t,e,n);case 4:return Ic(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qr(e,null,r,n):Fe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),bh(t,e,r,i,n);case 7:return Fe(t,e,e.pendingProps,n),e.child;case 8:return Fe(t,e,e.pendingProps.children,n),e.child;case 12:return Fe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(zo,r._currentValue),r._currentValue=o,s!==null)if(Ct(s.value,o)){if(s.children===i.children&&!Ge.current){e=qt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=$t(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),du(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),du(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fr(e,n),i=ut(i),r=r(i),e.flags|=1,Fe(t,e,r,n),e.child;case 14:return r=e.type,i=ht(r,e.pendingProps),i=ht(r.type,i),Lh(t,e,r,i,n);case 15:return Ym(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ht(r,i),_o(t,e),e.tag=1,Ke(r)?(t=!0,Mo(e)):t=!1,Fr(e,n),Km(e,r,i),fu(e,r,i,n),gu(null,e,r,!0,t,n);case 19:return tg(t,e,n);case 22:return Xm(t,e,n)}throw Error(k(156,e.tag))};function _g(t,e){return Hp(t,e)}function e0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new e0(t,e,n,r)}function zc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function t0(t){if(typeof t=="function")return zc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ic)return 11;if(t===sc)return 14}return 2}function Sn(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wr:return Xn(n.children,i,s,e);case rc:o=8,i|=8;break;case Fa:return t=lt(12,n,e,i|2),t.elementType=Fa,t.lanes=s,t;case Ua:return t=lt(13,n,e,i),t.elementType=Ua,t.lanes=s,t;case za:return t=lt(19,n,e,i),t.elementType=za,t.lanes=s,t;case Tp:return Nl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kp:o=10;break e;case xp:o=9;break e;case ic:o=11;break e;case sc:o=14;break e;case rn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xn(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function Nl(t,e,n,r){return t=lt(22,t,r,e),t.elementType=Tp,t.lanes=n,t.stateNode={isHidden:!1},t}function ya(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function va(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function n0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jc(t,e,n,r,i,s,o,l,a){return t=new n0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cc(s),t}function r0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yg(t){if(!t)return Rn;t=t._reactInternals;e:{if(dr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ke(n))return ym(t,n,e)}return e}function vg(t,e,n,r,i,s,o,l,a){return t=jc(n,r,!0,t,i,s,o,l,a),t.context=yg(null),n=t.current,r=Ue(),i=En(n),s=$t(r,i),s.callback=e??null,vn(n,s,i),t.current.lanes=i,ks(t,i,r),qe(t,r),t}function Al(t,e,n,r){var i=e.current,s=Ue(),o=En(i);return n=yg(n),e.context===null?e.context=n:e.pendingContext=n,e=$t(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vn(i,e,o),t!==null&&(Et(t,i,o,s),po(t,i,o)),o}function Qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wc(t,e){Kh(t,e),(t=t.alternate)&&Kh(t,e)}function i0(){return null}var wg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bc(t){this._internalRoot=t}Ol.prototype.render=Bc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Al(t,e,null,null)};Ol.prototype.unmount=Bc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nr(function(){Al(null,t,null,null)}),e[Gt]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<on.length&&e!==0&&e<on[n].priority;n++);on.splice(n,0,t),n===0&&Zp(t)}};function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qh(){}function s0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Qo(o);s.call(u)}}var o=vg(e,r,t,0,null,!1,!1,"",qh);return t._reactRootContainer=o,t[Gt]=o.current,ss(t.nodeType===8?t.parentNode:t),nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Qo(a);l.call(u)}}var a=jc(t,0,!1,null,null,!1,!1,"",qh);return t._reactRootContainer=a,t[Gt]=a.current,ss(t.nodeType===8?t.parentNode:t),nr(function(){Al(e,a,n,r)}),a}function bl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Qo(o);l.call(a)}}Al(e,o,t,i)}else o=s0(n,e,t,i,r);return Qo(o)}Qp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oi(e.pendingLanes);n!==0&&(ac(e,n|1),qe(e,me()),!(q&6)&&(Xr=me()+500,Dn()))}break;case 13:nr(function(){var r=Kt(t,1);if(r!==null){var i=Ue();Et(r,t,1,i)}}),Wc(t,1)}};uc=function(t){if(t.tag===13){var e=Kt(t,134217728);if(e!==null){var n=Ue();Et(e,t,134217728,n)}Wc(t,134217728)}};Yp=function(t){if(t.tag===13){var e=En(t),n=Kt(t,e);if(n!==null){var r=Ue();Et(n,t,e,r)}Wc(t,e)}};Xp=function(){return J};Jp=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Qa=function(t,e,n){switch(e){case"input":if(Ba(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Il(r);if(!i)throw Error(k(90));Pp(r),Ba(r,i)}}}break;case"textarea":Ap(t,n);break;case"select":e=n.value,e!=null&&Dr(t,!!n.multiple,e,!1)}};Up=Mc;zp=nr;var o0={usingClientEntryPoint:!1,Events:[Ts,Ir,Il,Mp,Fp,Mc]},ki={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l0={bundleType:ki.bundleType,version:ki.version,rendererPackageName:ki.rendererPackageName,rendererConfig:ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bp(t),t===null?null:t.stateNode},findFiberByHostInstance:ki.findFiberByHostInstance||i0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{wl=io.inject(l0),Pt=io}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0;rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$c(e))throw Error(k(200));return r0(t,e,null,n)};rt.createRoot=function(t,e){if(!$c(t))throw Error(k(299));var n=!1,r="",i=wg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jc(t,1,!1,null,null,n,!1,r,i),t[Gt]=e.current,ss(t.nodeType===8?t.parentNode:t),new Bc(e)};rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Bp(e),t=t===null?null:t.stateNode,t};rt.flushSync=function(t){return nr(t)};rt.hydrate=function(t,e,n){if(!Dl(e))throw Error(k(200));return bl(null,t,e,!0,n)};rt.hydrateRoot=function(t,e,n){if(!$c(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=wg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vg(e,null,t,1,n??null,i,!1,s,o),t[Gt]=e.current,ss(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ol(e)};rt.render=function(t,e,n){if(!Dl(e))throw Error(k(200));return bl(null,t,e,!1,n)};rt.unmountComponentAtNode=function(t){if(!Dl(t))throw Error(k(40));return t._reactRootContainer?(nr(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[Gt]=null})}),!0):!1};rt.unstable_batchedUpdates=Mc;rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return bl(t,e,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function Eg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eg)}catch(t){console.error(t)}}Eg(),Ep.exports=rt;var a0=Ep.exports,Qh=a0;La.createRoot=Qh.createRoot,La.hydrateRoot=Qh.hydrateRoot;const u0=()=>{};var Yh={};/**
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
 */const Sg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw li(e)},li=function(t){return new Error("Firebase Database ("+Sg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Cg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},c0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,v=u&63;a||(v=64,o||(h=64)),r.push(n[d],n[c],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):c0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new d0;const h=s<<2|l>>4;if(r.push(h),u!==64){const v=l<<4&240|u>>2;if(r.push(v),c!==64){const E=u<<6&192|c;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class d0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ig=function(t){const e=Cg(t);return Hc.encodeByteArray(e,!0)},Yo=function(t){return Ig(t).replace(/\./g,"")},Xo=function(t){try{return Hc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function h0(t){return kg(void 0,t)}function kg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!f0(n)||(t[n]=kg(t[n],e[n]));return t}function f0(t){return t!=="__proto__"}/**
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
 */function p0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const m0=()=>p0().__FIREBASE_DEFAULTS__,g0=()=>{if(typeof process>"u"||typeof Yh>"u")return;const t=Yh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xo(t[1]);return e&&JSON.parse(e)},Vc=()=>{try{return u0()||m0()||g0()||_0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xg=t=>{var e,n;return(n=(e=Vc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},y0=t=>{const e=xg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Tg=()=>{var t;return(t=Vc())==null?void 0:t.config},Rg=t=>{var e;return(e=Vc())==null?void 0:e[`_${t}`]};/**
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
 */class Ps{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function v0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Yo(JSON.stringify(n)),Yo(JSON.stringify(o)),""].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function w0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function E0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function S0(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function C0(){return Sg.NODE_ADMIN===!0}function I0(){try{return typeof indexedDB=="object"}catch{return!1}}function k0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const x0="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=x0,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?T0(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bn(i,l,r)}}function T0(t,e){try{let n=0,r="";for(;n<t.length;){const i=t.indexOf("{$",n);if(i===-1){r+=t.substring(n);break}const s=t.indexOf("}",i+2);if(s===-1){r+=t.substring(n);break}const o=t.substring(i+2,s),l=e[o];r+=t.substring(n,i)+(l!=null?String(l):`<${o}?>`),n=s+1}return r}catch{return t}}/**
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
 */function ps(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
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
 */const Ng=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ps(Xo(s[0])||""),n=ps(Xo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},R0=function(t){const e=Ng(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},P0=function(t){const e=Ng(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function en(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Jr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ru(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xh(s)&&Xh(o)){if(!rr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xh(t){return t!==null&&typeof t=="object"}/**
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
 */function ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Li(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class N0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function A0(t,e){const n=new O0(t,e);return n.subscribe.bind(n)}class O0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");D0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wa),i.error===void 0&&(i.error=wa),i.complete===void 0&&(i.complete=wa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wa(){}function Kc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const b0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ll=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}/**
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
 */function As(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ag(t){return(await fetch(t,{credentials:"include"})).ok}class ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class L0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ps;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(F0(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:M0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M0(t){return t===$n?void 0:t}function F0(t){return t.instantiationMode==="EAGER"}/**
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
 */class U0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new L0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const z0={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},j0=Z.INFO,W0={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},B0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=W0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qc{constructor(e){this.name=e,this._logLevel=j0,this._logHandler=B0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?z0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const $0=(t,e)=>e.some(n=>t instanceof n);let Jh,Zh;function H0(){return Jh||(Jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V0(){return Zh||(Zh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Og=new WeakMap,Pu=new WeakMap,Dg=new WeakMap,Ea=new WeakMap,Qc=new WeakMap;function G0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Og.set(n,t)}).catch(()=>{}),Qc.set(e,t),e}function K0(t){if(Pu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pu.set(t,e)}let Nu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function q0(t){Nu=t(Nu)}function Q0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sa(this),e,...n);return Dg.set(r,e.sort?e.sort():[e]),Cn(r)}:V0().includes(t)?function(...e){return t.apply(Sa(this),e),Cn(Og.get(this))}:function(...e){return Cn(t.apply(Sa(this),e))}}function Y0(t){return typeof t=="function"?Q0(t):(t instanceof IDBTransaction&&K0(t),$0(t,H0())?new Proxy(t,Nu):t)}function Cn(t){if(t instanceof IDBRequest)return G0(t);if(Ea.has(t))return Ea.get(t);const e=Y0(t);return e!==t&&(Ea.set(t,e),Qc.set(e,t)),e}const Sa=t=>Qc.get(t);function X0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Cn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Cn(o.result),a.oldVersion,a.newVersion,Cn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const J0=["get","getKey","getAll","getAllKeys","count"],Z0=["put","add","delete","clear"],Ca=new Map;function ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Z0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||J0.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ca.set(e,s),s}q0(t=>({...t,get:(e,n,r)=>ef(e,n)||t.get(e,n,r),has:(e,n)=>!!ef(e,n)||t.has(e,n)}));/**
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
 */class eE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Au="@firebase/app",tf="0.16.0";/**
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
 */const Qt=new qc("@firebase/app"),nE="@firebase/app-compat",rE="@firebase/analytics-compat",iE="@firebase/analytics",sE="@firebase/app-check-compat",oE="@firebase/app-check",lE="@firebase/auth",aE="@firebase/auth-compat",uE="@firebase/database",cE="@firebase/data-connect",dE="@firebase/database-compat",hE="@firebase/functions",fE="@firebase/functions-compat",pE="@firebase/installations",mE="@firebase/installations-compat",gE="@firebase/messaging",_E="@firebase/messaging-compat",yE="@firebase/performance",vE="@firebase/performance-compat",wE="@firebase/remote-config",EE="@firebase/remote-config-compat",SE="@firebase/storage",CE="@firebase/storage-compat",IE="@firebase/firestore",kE="@firebase/ai",xE="@firebase/firestore-compat",TE="firebase",RE="12.17.0";/**
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
 */const Ou="[DEFAULT]",PE={[Au]:"fire-core",[nE]:"fire-core-compat",[iE]:"fire-analytics",[rE]:"fire-analytics-compat",[oE]:"fire-app-check",[sE]:"fire-app-check-compat",[lE]:"fire-auth",[aE]:"fire-auth-compat",[uE]:"fire-rtdb",[cE]:"fire-data-connect",[dE]:"fire-rtdb-compat",[hE]:"fire-fn",[fE]:"fire-fn-compat",[pE]:"fire-iid",[mE]:"fire-iid-compat",[gE]:"fire-fcm",[_E]:"fire-fcm-compat",[yE]:"fire-perf",[vE]:"fire-perf-compat",[wE]:"fire-rc",[EE]:"fire-rc-compat",[SE]:"fire-gcs",[CE]:"fire-gcs-compat",[IE]:"fire-fst",[xE]:"fire-fst-compat",[kE]:"fire-vertex","fire-js":"fire-js",[TE]:"fire-js-all"};/**
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
 */const Zo=new Map,NE=new Map,Du=new Map;function nf(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(Du.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;Du.set(e,t);for(const n of Zo.values())nf(n,t);for(const n of NE.values())nf(n,t);return!0}function Yc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const AE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new Ns("app","Firebase",AE);/**
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
 */class OE{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const ui=RE;function bg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ou,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=Tg()),!n)throw zt.create("no-options");const s=Zo.get(i);if(s)if(rr(n,s.options)){if(rr(r,s.config))return s;throw zt.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw zt.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new U0(i);for(const a of Du.values())o.addComponent(a);const l=new OE(n,r,o);return Zo.set(i,l),l}function Lg(t=Ou){const e=Zo.get(t);if(!e&&t===Ou&&Tg())return bg();if(!e)throw zt.create("no-app",{appName:t});return e}function In(t,e,n){let r=PE[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(o.join(" "));return}Zr(new ir(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const DE="firebase-heartbeat-database",bE=1,ms="firebase-heartbeat-store";let Ia=null;function Mg(){return Ia||(Ia=X0(DE,bE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ms)}catch(n){console.warn(n)}}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),Ia}async function LE(t){try{const n=(await Mg()).transaction(ms),r=await n.objectStore(ms).get(Fg(t));return await n.done,r}catch(e){if(e instanceof bn)Qt.warn(e.message);else{const n=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function rf(t,e){try{const r=(await Mg()).transaction(ms,"readwrite");await r.objectStore(ms).put(e,Fg(t)),await r.done}catch(n){if(n instanceof bn)Qt.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(r.message)}}}function Fg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ME=1024,FE=30;class UE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>FE){const o=WE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sf(),{heartbeatsToSend:r,unsentEntries:i}=zE(this._heartbeatsCache.heartbeats),s=Yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qt.warn(n),""}}}function sf(){return new Date().toISOString().substring(0,10)}function zE(t,e=ME){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),of(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),of(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return I0()?k0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function of(t){return Yo(JSON.stringify({version:2,heartbeats:t})).length}function WE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function BE(t){Zr(new ir("platform-logger",e=>new eE(e),"PRIVATE")),Zr(new ir("heartbeat",e=>new UE(e),"PRIVATE")),In(Au,tf,t),In(Au,tf,"esm2020"),In("fire-js","")}/**
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
 */BE("");var $E="firebase",HE="12.17.1";/**
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
 */In($E,HE,"app");function Ug(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VE=Ug,zg=new Ns("auth","Firebase",Ug());/**
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
 */const el=new qc("@firebase/auth");function jg(t,...e){el.logLevel<=Z.WARN&&el.warn(`Auth (${ui}): ${t}`,...e)}function Eo(t,...e){el.logLevel<=Z.ERROR&&el.error(`Auth (${ui}): ${t}`,...e)}/**
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
 */function It(t,...e){throw Xc(t,...e)}function At(t,...e){return Xc(t,...e)}function Wg(t,e,n){const r={...VE(),[e]:n};return new Ns("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return Wg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zg.create(t,...e)}function U(t,e,...n){if(!t)throw Xc(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function Yt(t,e){t||jt(e)}/**
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
 */function bu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function GE(){return lf()==="http:"||lf()==="https:"}function lf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function KE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GE()||E0()||"connection"in navigator)?navigator.onLine:!0}function qE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Os{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=Gc()||Pg()}get(){return KE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jc(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const YE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],XE=new Os(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ln(t,e,n,r,i={}){return $g(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ai({...o,key:t.config.apiKey}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:a,...s};return w0()||(u.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&As(t.emulatorConfig.host)&&(u.credentials="include"),Bg.fetch()(await Hg(t,t.config.apiHost,n,l),u)})}async function $g(t,e,n){t._canInitEmulator=!1;const r={...QE,...e};try{const i=new ZE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw so(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw so(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw so(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wg(t,d,u);It(t,d)}}catch(i){if(i instanceof bn)throw i;It(t,"network-request-failed",{message:String(i)})}}async function Ml(t,e,n,r,i={}){const s=await Ln(t,e,n,r,i);return"mfaPendingCredential"in s&&It(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Hg(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Jc(t.config,i):`${t.config.apiScheme}://${i}`;return YE.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function JE(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),XE.get())})}}function so(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=At(t,e,r);return i.customData._tokenResponse=n,i}function af(t){return t!==void 0&&t.enterprise!==void 0}class eS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tS(t,e){return Ln(t,"GET","/v2/recaptchaConfig",hr(t,e))}/**
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
 */async function nS(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function tl(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rS(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),i=Zc(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vi(ka(i.auth_time)),issuedAtTime:Vi(ka(i.iat)),expirationTime:Vi(ka(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ka(t){return Number(t)*1e3}function Zc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xo(n);return i?JSON.parse(i):(Eo("Failed to decode base64 JWT payload"),null)}catch(i){return Eo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uf(t){const e=Zc(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&iS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nl(t){var c;const e=t.auth,n=await t.getIdToken(),r=await gs(t,tl(e,{idToken:n}));U(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(c=i.providerUserInfo)!=null&&c.length?Vg(i.providerUserInfo):[],o=lS(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?a:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Lu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function oS(t){const e=Xe(t);await nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Vg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function aS(t,e){const n=await $g(t,{},async()=>{const r=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Hg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&As(t.emulatorConfig.host)&&(a.credentials="include"),Bg.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uS(t,e){return Ln(t,"POST","/v2/accounts:revokeToken",hr(t,e))}/**
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
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=uf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zr;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
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
 */function nn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _t{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new sS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Lu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gs(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rS(this,e)}reload(){return oS(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await gs(this,nS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:c,emailVerified:h,isAnonymous:v,providerData:E,stsTokenManager:S}=n;U(c&&S,e,"internal-error");const j=zr.fromJSON(this.name,S);U(typeof c=="string",e,"internal-error"),nn(r,e.name),nn(i,e.name),U(typeof h=="boolean",e,"internal-error"),U(typeof v=="boolean",e,"internal-error"),nn(s,e.name),nn(o,e.name),nn(l,e.name),nn(a,e.name),nn(u,e.name),nn(d,e.name);const m=new _t({uid:c,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:j,createdAt:u,lastLoginAt:d});return E&&Array.isArray(E)&&(m.providerData=E.map(f=>({...f}))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new zr;i.updateFromServerResponse(n);const s=new _t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];U(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Vg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new zr;l.updateFromIdToken(r);const a=new _t({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
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
 */const cf=new Map;function Wt(t){Yt(t instanceof Function,"Expected a class definition");let e=cf.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cf.set(t,e),e)}/**
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
 */class Gg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gg.type="NONE";const df=Gg;/**
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
 */function So(t,e,n){return`firebase:${t}:${e}:${n}`}class jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=So(this.userKey,i.apiKey,s),this.fullPersistenceKey=So("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await tl(this.auth,{idToken:e}).catch(()=>{});return n?_t._fromGetAccountInfoResponse(this.auth,n,e):null}return _t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jr(Wt(df),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Wt(df);const o=So(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let c;if(typeof d=="string"){const h=await tl(e,{idToken:d}).catch(()=>{});if(!h)break;c=await _t._fromGetAccountInfoResponse(e,h,d)}else c=_t._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new jr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jr(s,e,r))}}/**
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
 */function hf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jg(e))return"Blackberry";if(Zg(e))return"Webos";if(qg(e))return"Safari";if((e.includes("chrome/")||Qg(e))&&!e.includes("edge/"))return"Chrome";if(Xg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kg(t=ze()){return/firefox\//i.test(t)}function qg(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qg(t=ze()){return/crios\//i.test(t)}function Yg(t=ze()){return/iemobile/i.test(t)}function Xg(t=ze()){return/android/i.test(t)}function Jg(t=ze()){return/blackberry/i.test(t)}function Zg(t=ze()){return/webos/i.test(t)}function ed(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cS(t=ze()){var e;return ed(t)&&!!((e=window.navigator)!=null&&e.standalone)}function dS(){return S0()&&document.documentMode===10}function e_(t=ze()){return ed(t)||Xg(t)||Zg(t)||Jg(t)||/windows phone/i.test(t)||Yg(t)}/**
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
 */function t_(t,e=[]){let n;switch(t){case"Browser":n=hf(ze());break;case"Worker":n=`${hf(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
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
 */class hS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function fS(t,e={}){return Ln(t,"GET","/v2/passwordPolicy",hr(t,e))}/**
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
 */const pS=6;class mS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??pS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class gS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ff(this),this.idTokenSubscription=new ff(this),this.beforeStateQueue=new hS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tl(this,{idToken:e}),r=await _t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(kn(this));const n=e?Xe(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fS(this),n=new mS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&jg(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ci(t){return Xe(t)}class ff{constructor(e){this.auth=e,this.observer=null,this.addObserver=A0(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _S(t){Fl=t}function n_(t){return Fl.loadJS(t)}function yS(){return Fl.recaptchaEnterpriseScript}function vS(){return Fl.gapiScript}function wS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ES{constructor(){this.enterprise=new SS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class SS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
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
 */const CS="recaptcha-enterprise",r_="NO_RECAPTCHA",pf="onFirebaseAuthREInstanceReady";class an{constructor(e){this.type=CS,this.auth=ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{tS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new eS(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;af(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(r_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ES().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(async l=>{if(!n&&af(window.grecaptcha)&&an.scriptInjectionDeferred)await an.scriptInjectionDeferred.promise,i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=yS();a.length!==0&&(a+=l+`&onload=${pf}`),an.scriptInjectionDeferred=new Ps,window[pf]=()=>{var u;(u=an.scriptInjectionDeferred)==null||u.resolve()},n_(a).then(()=>{var u;return(u=an.scriptInjectionDeferred)==null?void 0:u.promise}).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}an.scriptInjectionDeferred=null;async function mf(t,e,n,r=!1,i=!1){const s=new an(t);let o;if(i)o=r_;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function gf(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await mf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await mf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function IS(t,e){const n=Yc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(rr(s,e??{}))return i;It(i,"already-initialized")}return n.initialize({options:e})}function kS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xS(t,e,n){const r=ci(t);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=i_(e),{host:o,port:l}=TS(e),a=l===null?"":`:${l}`,u={url:`${s}//${o}${a}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(rr(u,r.config.emulator)&&rr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,As(o)?Ag(`${s}//${o}${a}`):RS()}function i_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TS(t){const e=i_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_f(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_f(o)}}}function _f(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class td{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function PS(t,e){return Ln(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function NS(t,e){return Ml(t,"POST","/v1/accounts:signInWithPassword",hr(t,e))}/**
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
 */async function AS(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}async function OS(t,e){return Ml(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}/**
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
 */class _s extends td{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _s(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _s(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gf(e,n,"signInWithPassword",NS);case"emailLink":return AS(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gf(e,r,"signUpPassword",PS);case"emailLink":return OS(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Wr(t,e){return Ml(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
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
 */const DS="http://localhost";class sr extends td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wr(e,n)}buildRequest(){const e={requestUri:DS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ai(n)}return e}}/**
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
 */function bS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LS(t){const e=bi(Li(t)).link,n=e?bi(Li(e)).deep_link_id:null,r=bi(Li(t)).deep_link_id;return(r?bi(Li(r)).link:null)||r||n||e||t}class nd{constructor(e){const n=bi(Li(e)),r=n.apiKey??null,i=n.oobCode??null,s=bS(n.mode??null);U(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=LS(e);try{return new nd(n)}catch{return null}}}/**
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
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,n){return _s._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=nd.parseLink(n);return U(r,"argument-error"),_s._fromEmailAndCode(e,r.code,r.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class s_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ds extends s_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class un extends Ds{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
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
 */class cn extends Ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
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
 */class dn extends Ds{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */class hn extends Ds{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _t._fromIdTokenResponse(e,r,i),o=yf(r);return new ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yf(r);return new ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class rl extends bn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rl(e,n,r,i)}}function o_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rl._fromErrorAndOperation(t,s,e,r):s})}async function MS(t,e,n=!1){const r=await gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",r)}/**
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
 */async function FS(t,e,n=!1){const{auth:r}=t;if(mt(r.app))return Promise.reject(kn(r));const i="reauthenticate";try{const s=await gs(t,o_(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=Zc(s.idToken);U(o,r,"internal-error");const{sub:l}=o;return U(t.uid===l,r,"user-mismatch"),ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&It(r,"user-mismatch"),s}}/**
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
 */async function l_(t,e,n=!1){if(mt(t.app))return Promise.reject(kn(t));const r="signIn",i=await o_(t,r,e),s=await ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function US(t,e){return l_(ci(t),e)}/**
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
 */async function zS(t){const e=ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function jS(t,e,n){return mt(t.app)?Promise.reject(kn(t)):US(Xe(t),di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zS(t),r})}function WS(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function BS(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function $S(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function HS(t){return Xe(t).signOut()}const il="__sak";/**
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
 */class a_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(il,"1"),this.storage.removeItem(il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VS=1e3,GS=10;class u_ extends a_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}u_.type="LOCAL";const KS=u_;/**
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
 */class c_ extends a_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}c_.type="SESSION";const d_=c_;/**
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
 */function qS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await qS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
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
 */function rd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=rd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ot(){return window}function YS(t){Ot().location.href=t}/**
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
 */function h_(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function XS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ZS(){return h_()?self:null}/**
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
 */const f_="firebaseLocalStorageDb",eC=1,sl="firebaseLocalStorage",p_="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zl(t,e){return t.transaction([sl],e?"readwrite":"readonly").objectStore(sl)}function tC(){const t=indexedDB.deleteDatabase(f_);return new bs(t).toPromise()}function m_(){const t=indexedDB.open(f_,eC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sl,{keyPath:p_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sl)?e(r):(r.close(),await tC(),e(await m_()))})})}async function vf(t,e,n){const r=zl(t,!0).put({[p_]:e,value:n});return new bs(r).toPromise()}async function nC(t,e){const n=zl(t,!1).get(e),r=await new bs(n).toPromise();return r===void 0?null:r.value}function wf(t,e){const n=zl(t,!0).delete(e);return new bs(n).toPromise()}const rC=800,iC=3;class g_{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=m_(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(this.isHiding||n++>iC)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return h_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(ZS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await XS(),!this.activeServiceWorker)return;this.sender=new QS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await vf(e,il,"1"),await wf(e,il)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isHiding)return[];try{const e=await this._withRetries(i=>{const s=zl(i,!1).getAll();return new bs(s).toPromise()});if(this.isHiding)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(e){return this.isHiding||jg(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}g_.type="LOCAL";const sC=g_;new Os(3e4,6e4);/**
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
 */function oC(t,e){return e?Wt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class id extends td{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lC(t){return l_(t.auth,new id(t),t.bypassAuthState)}function aC(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),FS(n,new id(t),t.bypassAuthState)}async function uC(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),MS(n,new id(t),t.bypassAuthState)}/**
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
 */class __{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lC;case"linkViaPopup":case"linkViaRedirect":return uC;case"reauthViaPopup":case"reauthViaRedirect":return aC;default:It(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cC=new Os(2e3,1e4);class Ar extends __{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cC.get())};e()}}Ar.currentPopupAction=null;/**
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
 */const dC="pendingRedirect",Co=new Map;class hC extends __{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await fC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fC(t,e){const n=gC(e),r=mC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pC(t,e){Co.set(t._key(),e)}function mC(t){return Wt(t._redirectPersistence)}function gC(t){return So(dC,t.config.apiKey,t.name)}async function _C(t,e,n=!1){if(mt(t.app))return Promise.reject(kn(t));const r=ci(t),i=oC(r,e),o=await new hC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yC=10*60*1e3;class vC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!y_(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ef(e))}saveEventToCache(e){this.cachedEventUids.add(Ef(e)),this.lastProcessedEventTime=Date.now()}}function Ef(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y_(t);default:return!1}}/**
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
 */async function EC(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
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
 */const SC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CC=/^https?/;async function IC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EC(t);for(const n of e)try{if(kC(n))return}catch{}It(t,"unauthorized-domain")}function kC(t){const e=bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CC.test(n))return!1;if(SC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const xC=new Os(3e4,6e4);function Sf(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TC(t){return new Promise((e,n)=>{var i,s,o;function r(){Sf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sf(),n(At(t,"network-request-failed"))},timeout:xC.get()})}if((s=(i=Ot().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Ot().gapi)!=null&&o.load)r();else{const l=wS("iframefcb");return Ot()[l]=()=>{gapi.load?r():n(At(t,"network-request-failed"))},n_(`${vS()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Io=null,e})}let Io=null;function RC(t){return Io=Io||TC(t),Io}/**
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
 */const PC=new Os(5e3,15e3),NC="__/auth/iframe",AC="emulator/auth/iframe",OC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bC(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jc(e,AC):`https://${t.config.authDomain}/${NC}`,r={apiKey:e.apiKey,appName:t.name,v:ui},i=DC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ai(r).slice(1)}`}async function LC(t){const e=await RC(t),n=Ot().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:bC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),l=Ot().setTimeout(()=>{s(o)},PC.get());function a(){Ot().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const MC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FC=500,UC=600,zC="_blank",jC="http://localhost";class Cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WC(t,e,n,r=FC,i=UC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...MC,width:r.toString(),height:i.toString(),top:s,left:o},u=ze().toLowerCase();n&&(l=Qg(u)?zC:n),Kg(u)&&(e=e||jC,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[v,E])=>`${h}${v}=${E},`,"");if(cS(u)&&l!=="_self")return BC(e||"",l),new Cf(null);const c=window.open(e||"",l,d);U(c,t,"popup-blocked");try{c.focus()}catch{}return new Cf(c)}function BC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $C="__/auth/handler",HC="emulator/auth/handler",VC=encodeURIComponent("fac");async function If(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ui,eventId:i};if(e instanceof s_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ru(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Ds){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${VC}=${encodeURIComponent(a)}`:"";return`${GC(t)}?${ai(l).slice(1)}${u}`}function GC({config:t}){return t.emulator?Jc(t,HC):`https://${t.authDomain}/${$C}`}/**
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
 */const xa="webStorageSupport";class KC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d_,this._completeRedirectFn=_C,this._overrideRedirectResult=pC}async _openPopup(e,n,r,i){var o;Yt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await If(e,n,r,bu(),i);return WC(e,s,rd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await If(e,n,r,bu(),i);return YS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LC(e),r=new vC(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xa,{type:xa},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[xa];s!==void 0&&n(!!s),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e_()||qg()||ed()}}const qC=KC;var kf="@firebase/auth",xf="1.13.4";/**
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
 */class QC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XC(t){Zr(new ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(t)},u=new gS(r,i,s,a);return kS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new ir("auth-internal",e=>{const n=ci(e.getProvider("auth").getImmediate());return(r=>new QC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(kf,xf,YC(t)),In(kf,xf,"esm2020")}/**
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
 */const JC=5*60,ZC=Rg("authIdTokenMaxAge")||JC;let Tf=null;const eI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZC)return;const i=n==null?void 0:n.token;Tf!==i&&(Tf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tI(t=Lg()){const e=Yc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=IS(t,{popupRedirectResolver:qC,persistence:[sC,KS,d_]}),r=Rg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eI(s.toString());BS(n,o,()=>o(n.currentUser)),WS(n,l=>o(l))}}const i=xg("auth");return i&&xS(n,`http://${i}`),n}function nI(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}_S({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=At("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XC("Browser");var Rf={};const Pf="@firebase/database",Nf="1.1.4";/**
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
 */let v_="";function rI(t){v_=t}/**
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
 */class iI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class sI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return en(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const w_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new iI(e)}}catch{}return new sI},qn=w_("localStorage"),oI=w_("sessionStorage");/**
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
 */const Br=new qc("@firebase/database"),lI=function(){let t=1;return function(){return t++}}(),E_=function(t){const e=b0(t),n=new N0;n.update(e);const r=n.digest();return Hc.encodeByteArray(r)},Ls=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ls.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let Gi=null,Af=!0;const aI=function(t,e){x(!0,"Can't turn on custom loggers persistently."),Br.logLevel=Z.VERBOSE,Gi=Br.log.bind(Br)},be=function(...t){if(Af===!0&&(Af=!1,Gi===null&&oI.get("logging_enabled")===!0&&aI()),Gi){const e=Ls.apply(null,t);Gi(e)}},Ms=function(t){return function(...e){be(t,...e)}},Mu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ls(...t);Br.error(e)},Xt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ls(...t)}`;throw Br.error(e),new Error(e)},Qe=function(...t){const e="FIREBASE WARNING: "+Ls(...t);Br.warn(e)},uI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},S_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ti="[MIN_NAME]",or="[MAX_NAME]",hi=function(t,e){if(t===e)return 0;if(t===ti||e===or)return-1;if(e===ti||t===or)return 1;{const n=Of(t),r=Of(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},dI=function(t,e){return t===e?0:t<e?-1:1},xi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},sd=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=sd(t[e[r]]);return n+="}",n},C_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ye(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const I_=function(t){x(!S_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},hI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function pI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const mI=new RegExp("^-?(0*)\\d{1,10}$"),gI=-2147483648,_I=2147483647,Of=function(t){if(mI.test(t)){const e=Number(t);if(e>=gI&&e<=_I)return e}return null},fi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},yI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ki=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class vI{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,mt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class wI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class ko{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ko.OWNER="owner";/**
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
 */const od="5",k_="v",x_="s",T_="r",R_="f",P_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,N_="ls",A_="p",Fu="ac",O_="websocket",D_="long_polling";/**
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
 */class b_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function EI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function L_(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===O_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===D_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);EI(t)&&(n.ns=t.namespace);const i=[];return Ye(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class SI{constructor(){this.counters_={}}incrementCounter(e,n=1){en(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return h0(this.counters_)}}/**
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
 */const Ta={},Ra={};function ld(t){const e=t.toString();return Ta[e]||(Ta[e]=new SI),Ta[e]}function CI(t,e){const n=t.toString();return Ra[n]||(Ra[n]=e()),Ra[n]}/**
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
 */class II{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&fi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Df="start",kI="close",xI="pLPCommand",TI="pRTLPCB",M_="id",F_="pw",U_="ser",RI="cb",PI="seg",NI="ts",AI="d",OI="dframe",z_=1870,j_=30,DI=z_-j_,bI=25e3,LI=3e4;class Or{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ms(e),this.stats_=ld(n),this.urlFn=a=>(this.appCheckToken&&(a[Fu]=this.appCheckToken),L_(n,D_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new II(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(LI)),cI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ad((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Df)this.id=l,this.password=a;else if(o===kI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Df]="t",r[U_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[RI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[k_]=od,this.transportSessionId&&(r[x_]=this.transportSessionId),this.lastSessionId&&(r[N_]=this.lastSessionId),this.applicationId&&(r[A_]=this.applicationId),this.appCheckToken&&(r[Fu]=this.appCheckToken),typeof location<"u"&&location.hostname&&P_.test(location.hostname)&&(r[T_]=R_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Or.forceAllow_=!0}static forceDisallow(){Or.forceDisallow_=!0}static isAvailable(){return Or.forceAllow_?!0:!Or.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hI()&&!fI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ig(n),i=C_(r,DI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[OI]="t",r[M_]=e,r[F_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ad{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lI(),window[xI+this.uniqueCallbackIdentifier]=e,window[TI+this.uniqueCallbackIdentifier]=n,this.myIFrame=ad.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[M_]=this.myID,e[F_]=this.myPW,e[U_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+j_+r.length<=z_;){const o=this.pendingSegs.shift();r=r+"&"+PI+i+"="+o.seg+"&"+NI+i+"="+o.ts+"&"+AI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(bI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const MI=16384,FI=45e3;let ol=null;typeof MozWebSocket<"u"?ol=MozWebSocket:typeof WebSocket<"u"&&(ol=WebSocket);class gt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ms(this.connId),this.stats_=ld(n),this.connURL=gt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[k_]=od,typeof location<"u"&&location.hostname&&P_.test(location.hostname)&&(o[T_]=R_),n&&(o[x_]=n),r&&(o[N_]=r),i&&(o[Fu]=i),s&&(o[A_]=s),L_(e,O_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qn.set("previous_websocket_failure",!0);try{let r;C0(),this.mySock=new ol(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ol!==null&&!gt.forceDisallow_}static previouslyFailed(){return qn.isInMemoryStorage||qn.get("previous_websocket_failure")===!0}markConnectionHealthy(){qn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ps(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=C_(n,MI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(FI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gt.responsesRequiredToBeHealthy=2;gt.healthyTimeout=3e4;/**
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
 */class ys{static get ALL_TRANSPORTS(){return[Or,gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=gt&&gt.isAvailable();let r=n&&!gt.previouslyFailed();if(e.webSocketOnly&&(n||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[gt];else{const i=this.transports_=[];for(const s of ys.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ys.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ys.globalTransportInitialized_=!1;/**
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
 */const UI=6e4,zI=5e3,jI=10*1024,WI=100*1024,Pa="t",bf="d",BI="s",Lf="r",$I="e",Mf="o",Ff="a",Uf="n",zf="p",HI="h";class VI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ms("c:"+this.id+":"),this.transportManager_=new ys(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pa in e){const n=e[Pa];n===Ff?this.upgradeIfSecondaryHealthy_():n===Lf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Mf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=xi("t",e),r=xi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ff,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Uf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=xi("t",e),r=xi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=xi(Pa,e);if(bf in e){const r=e[bf];if(n===HI){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Uf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===BI?this.onConnectionShutdown_(r):n===Lf?this.onReset_(r):n===$I?Mu("Server Error: "+r):n===Mf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),od!==r&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(UI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class W_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class B_{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ll extends B_{static getInstance(){return new ll}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jf=32,Wf=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new ee("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pn(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function $_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function GI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function H_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function V_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function we(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ee(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=$(t),r=$(e);if(n===null)return e;if(n===r)return He(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ud(t,e){if(Pn(t)!==Pn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function yt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Pn(t)>Pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class KI{constructor(e,n){this.errorPrefix_=n,this.parts_=H_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ll(this.parts_[r]);G_(this)}}function qI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ll(e),G_(t)}function QI(t){const e=t.parts_.pop();t.byteLength_-=Ll(e),t.parts_.length>0&&(t.byteLength_-=1)}function G_(t){if(t.byteLength_>Wf)throw new Error(t.errorPrefix_+"has a key path longer than "+Wf+" bytes ("+t.byteLength_+").");if(t.parts_.length>jf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jf+") or object contains a cycle "+Hn(t))}function Hn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class cd extends B_{static getInstance(){return new cd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ti=1e3,YI=60*5*1e3,Bf=30*1e3,XI=1.3,JI=3e4,ZI="server_kill",$f=3;class Ht extends W_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ht.nextPersistentConnectionId_++,this.log_=Ms("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ti,this.maxReconnectDelay_=YI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ke(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ps,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ht.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&en(e,"w")){const r=Jr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||P0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=R0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mu("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>JI&&(this.reconnectDelay_=Ti),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*XI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ht.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){x(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new VI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Qe(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(ZI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Qe(c),a())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ru(this.interruptReasons_)&&(this.reconnectDelay_=Ti,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>sd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$f&&(this.reconnectDelay_=Bf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$f&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+v_.replace(/\./g,"-")]=1,Gc()?e["framework.cordova"]=1:Pg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ll.getInstance().currentlyOnline();return Ru(this.interruptReasons_)&&e}}Ht.nextPersistentConnectionId_=0;Ht.nextConnectionId_=0;/**
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
 */class jl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(ti,e),i=new H(ti,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
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
 */let oo;class K_ extends jl{static get __EMPTY_NODE(){return oo}static set __EMPTY_NODE(e){oo=e}compare(e,n){return hi(e.name,n.name)}isDefinedOn(e){throw li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(or,oo)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,oo)}toString(){return".key"}}const $r=new K_;/**
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
 */class lo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ie.RED,this.left=i??Ve.EMPTY_NODE,this.right=s??Ve.EMPTY_NODE}copy(e,n,r,i,s){return new Ie(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ve.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class ek{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new lo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new lo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new lo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new lo(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new ek;/**
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
 */function tk(t,e){return hi(t.name,e.name)}function dd(t,e){return hi(t,e)}/**
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
 */let Uu;function nk(t){Uu=t}const q_=function(t){return typeof t=="number"?"number:"+I_(t):"string:"+t},Q_=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&en(e,".sv"),"Priority must be a string or number.")}else x(t===Uu||t.isEmpty(),"priority of unexpected type.");x(t===Uu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Hf;class Se{static set __childrenNodeConstructor(e){Hf=e}static get __childrenNodeConstructor(){return Hf}constructor(e,n=Se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Q_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:$(e)===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=$(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Se.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+q_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=I_(this.value_):e+=this.value_,this.lazyHash_=E_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Se.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Se.VALUE_TYPE_ORDER.indexOf(n),s=Se.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Y_,X_;function rk(t){Y_=t}function ik(t){X_=t}class sk extends jl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?hi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(or,new Se("[PRIORITY-POST]",X_))}makePost(e,n){const r=Y_(e);return new H(n,new Se("[PRIORITY-POST]",r))}toString(){return".priority"}}const fe=new sk;/**
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
 */const ok=Math.log(2);class lk{constructor(e){const n=s=>parseInt(Math.log(s)/ok,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const al=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new Ie(h,c.node,Ie.BLACK,null,null);{const v=parseInt(d/2,10)+a,E=i(a,v),S=i(v+1,u);return c=t[v],h=n?n(c):c,new Ie(h,c.node,Ie.BLACK,E,S)}},s=function(a){let u=null,d=null,c=t.length;const h=function(E,S){const j=c-E,m=c;c-=E;const f=i(j+1,m),y=t[j],I=n?n(y):y;v(new Ie(I,y.node,S,null,f))},v=function(E){u?(u.left=E,u=E):(d=E,u=E)};for(let E=0;E<a.count;++E){const S=a.nextBitIsOne(),j=Math.pow(2,a.count-(E+1));S?h(j,Ie.BLACK):(h(j,Ie.BLACK),h(j,Ie.RED))}return d},o=new lk(t.length),l=s(o);return new Ve(r||e,l)};/**
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
 */let Na;const _r={};class Bt{static get Default(){return x(_r&&fe,"ChildrenNode.ts has not been loaded"),Na=Na||new Bt({".priority":_r},{".priority":fe}),Na}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Jr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return en(this.indexSet_,e.toString())}addIndex(e,n){x(e!==$r,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=al(r,e.getCompare()):l=_r;const a=e.toString(),u={...this.indexSet_};u[a]=e;const d={...this.indexes_};return d[a]=l,new Bt(d,u)}addToIndexes(e,n){const r=Jo(this.indexes_,(i,s)=>{const o=Jr(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===_r)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(H.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),al(l,o.getCompare())}else return _r;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new H(e.name,l))),a.insert(e,e.node)}});return new Bt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Jo(this.indexes_,i=>{if(i===_r)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new Bt(r,this.indexSet_)}}/**
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
 */let Ri;class z{static get EMPTY_NODE(){return Ri||(Ri=new z(new Ve(dd),null,Bt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Q_(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ri}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ri:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ri:this.priorityNode_;return new z(i,o,s)}}updateChild(e,n){const r=$(e);if(r===null)return n;{x($(e)!==".priority"||Pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(te(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),r++,s&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+q_(this.getPriority().val())+":"),this.forEachChild(fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":E_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fs?-1:0}withIndex(e){if(e===$r||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$r||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(fe),i=n.getIterator(fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$r?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ak extends z{constructor(){super(new Ve(dd),z.EMPTY_NODE,Bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const Fs=new ak;Object.defineProperties(H,{MIN:{value:new H(ti,z.EMPTY_NODE)},MAX:{value:new H(or,Fs)}});K_.__EMPTY_NODE=z.EMPTY_NODE;Se.__childrenNodeConstructor=z;nk(Fs);ik(Fs);/**
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
 */const uk=!0;function Re(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Se(n,Re(e))}if(!(t instanceof Array)&&uk){const n=[];let r=!1;if(Ye(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Re(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new H(o,a)))}}),n.length===0)return z.EMPTY_NODE;const s=al(n,tk,o=>o.name,dd);if(r){const o=al(n,fe.getCompare());return new z(s,Re(e),new Bt({".priority":o},{".priority":fe}))}else return new z(s,Re(e),Bt.Default)}else{let n=z.EMPTY_NODE;return Ye(t,(r,i)=>{if(en(t,r)&&r.substring(0,1)!=="."){const s=Re(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Re(e))}}rk(Re);/**
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
 */class ck extends jl{constructor(e){super(),this.indexPath_=e,x(!V(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?hi(e.name,n.name):s}makePost(e,n){const r=Re(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,Fs);return new H(or,e)}toString(){return H_(this.indexPath_,0).join("/")}}/**
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
 */class dk extends jl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?hi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=Re(e);return new H(n,r)}toString(){return".value"}}const hk=new dk;/**
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
 */function J_(t){return{type:"value",snapshotNode:t}}function ni(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ws(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class hd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(vs(n,l)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ni(n,r)):o.trackChildChange(ws(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(vs(i,s))}),n.isLeafNode()||n.forEachChild(fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ws(i,s,o))}else r.trackChildChange(ni(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Es{constructor(e){this.indexedFilter_=new hd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Es.getStartPost_(e),this.endPost_=Es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const s=this;return n.forEachChild(fe,(o,l)=>{s.matches(new H(o,l))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class pk{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,v)=>c(v,h)}else o=this.index_.getCompare();const l=e;x(l.numChildren()===this.limit_,"");const a=new H(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,a);if(d&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(ws(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(vs(n,c));const S=l.updateImmediateChild(n,z.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ni(h.name,h.node)),S.updateImmediateChild(h.name,h.node)):S}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(vs(u.name,u.node)),s.trackChildChange(ni(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,z.EMPTY_NODE)):e}}/**
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
 */class fd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ti}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:or}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new fd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mk(t){return t.loadsAllData()?new hd(t.getIndex()):t.hasLimit()?new pk(t):new Es(t)}function Vf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===hk?n="$value":t.index_===$r?n="$key":(x(t.index_ instanceof ck,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class ul extends W_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ms("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ul.getListenId_(e,r),l={};this.listens_[o]=l;const a=Vf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Jr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=ul.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Vf(e._queryParams),r=e._path.toString(),i=new Ps;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ai(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ps(l.responseText)}catch{Qe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Qe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class gk{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function cl(){return{value:null,children:new Map}}function Z_(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=$(e);t.children.has(r)||t.children.set(r,cl());const i=t.children.get(r);e=te(e),Z_(i,e,n)}}function zu(t,e,n){t.value!==null?n(e,t.value):_k(t,(r,i)=>{const s=new ee(e.toString()+"/"+r);zu(i,s,n)})}function _k(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class yk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ye(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Kf=10*1e3,vk=30*1e3,wk=5*60*1e3;class Ek{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new yk(e);const r=Kf+(vk-Kf)*Math.random();Ki(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ye(e,(i,s)=>{s>0&&en(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*wk))}}/**
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
 */var vt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vt||(vt={}));function ey(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function md(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class dl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=vt.ACK_USER_WRITE,this.source=ey()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new dl(Y(),n,this.revert)}}else return x($(this.path)===e,"operationForChild called for unrelated child."),new dl(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ss{constructor(e,n){this.source=e,this.path=n,this.type=vt.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new Ss(this.source,Y()):new Ss(this.source,te(this.path))}}/**
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
 */class lr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=vt.OVERWRITE}operationForChild(e){return V(this.path)?new lr(this.source,Y(),this.snap.getImmediateChild(e)):new lr(this.source,te(this.path),this.snap)}}/**
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
 */class Cs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=vt.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new lr(this.source,Y(),n.value):new Cs(this.source,Y(),n)}else return x($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cs(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ar{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Sk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ck(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(fk(o.childName,o.snapshotNode))}),Pi(t,i,"child_removed",e,r,n),Pi(t,i,"child_added",e,r,n),Pi(t,i,"child_moved",s,r,n),Pi(t,i,"child_changed",e,r,n),Pi(t,i,"value",e,r,n),i}function Pi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>kk(t,l,a)),o.forEach(l=>{const a=Ik(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function Ik(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function kk(t,e,n){if(e.childName==null||n.childName==null)throw li("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Wl(t,e){return{eventCache:t,serverCache:e}}function qi(t,e,n,r){return Wl(new ar(e,n,r),t.serverCache)}function ty(t,e,n,r){return Wl(t.eventCache,new ar(e,n,r))}function ju(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ur(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Aa;const xk=()=>(Aa||(Aa=new Ve(dI)),Aa);class ie{static fromObject(e){let n=new ie(null);return Ye(e,(r,i)=>{n=n.set(new ee(r),i)}),n}constructor(e,n=xk()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(V(e))return null;{const r=$(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(te(e),n);return s!=null?{path:we(new ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=$(e),r=this.children.get(n);return r!==null?r.subtree(te(e)):new ie(null)}}set(e,n){if(V(e))return new ie(n,this.children);{const r=$(e),s=(this.children.get(r)||new ie(null)).set(te(e),n),o=this.children.insert(r,s);return new ie(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=$(e),r=this.children.get(n);if(r){const i=r.remove(te(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ie(null):new ie(this.value,s)}else return this}}get(e){if(V(e))return this.value;{const n=$(e),r=this.children.get(n);return r?r.get(te(e)):null}}setTree(e,n){if(V(e))return n;{const r=$(e),s=(this.children.get(r)||new ie(null)).setTree(te(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ie(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(we(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(V(e))return null;{const s=$(e),o=this.children.get(s);return o?o.findOnPath_(te(e),we(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,r){if(V(e))return this;{this.value&&r(n,this.value);const i=$(e),s=this.children.get(i);return s?s.foreachOnPath_(te(e),we(n,i),r):new ie(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(we(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class St{constructor(e){this.writeTree_=e}static empty(){return new St(new ie(null))}}function Qi(t,e,n){if(V(e))return new St(new ie(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=He(i,e);return s=s.updateChild(o,n),new St(t.writeTree_.set(i,s))}else{const i=new ie(n),s=t.writeTree_.setTree(e,i);return new St(s)}}}function qf(t,e,n){let r=t;return Ye(n,(i,s)=>{r=Qi(r,we(e,i),s)}),r}function Qf(t,e){if(V(e))return St.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new St(n)}}function Wu(t,e){return fr(t,e)!=null}function fr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function Yf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function xn(t,e){if(V(e))return t;{const n=fr(t,e);return n!=null?new St(new ie(n)):new St(t.writeTree_.subtree(e))}}function Bu(t){return t.writeTree_.isEmpty()}function ri(t,e){return ny(Y(),t.writeTree_,e)}function ny(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ny(we(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(we(t,".priority"),r)),n}}/**
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
 */function gd(t,e){return oy(e,t)}function Tk(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Qi(t.visibleWrites,e,n)),t.lastWriteId=r}function Rk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Pk(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Nk(l,r.path)?i=!1:yt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Ak(t),!0;if(r.snap)t.visibleWrites=Qf(t.visibleWrites,r.path);else{const l=r.children;Ye(l,a=>{t.visibleWrites=Qf(t.visibleWrites,we(r.path,a))})}return!0}else return!1}function Nk(t,e){if(t.snap)return yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yt(we(t.path,n),e))return!0;return!1}function Ak(t){t.visibleWrites=ry(t.allWrites,Ok,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ok(t){return t.visible}function ry(t,e,n){let r=St.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)yt(n,o)?(l=He(n,o),r=Qi(r,l,s.snap)):yt(o,n)&&(l=He(o,n),r=Qi(r,Y(),s.snap.getChild(l)));else if(s.children){if(yt(n,o))l=He(n,o),r=qf(r,l,s.children);else if(yt(o,n))if(l=He(o,n),V(l))r=qf(r,Y(),s.children);else{const a=Jr(s.children,$(l));if(a){const u=a.getChild(te(l));r=Qi(r,Y(),u)}}}else throw li("WriteRecord should have .snap or .children")}}return r}function iy(t,e,n,r,i){if(!r&&!i){const s=fr(t.visibleWrites,e);if(s!=null)return s;{const o=xn(t.visibleWrites,e);if(Bu(o))return n;if(n==null&&!Wu(o,Y()))return null;{const l=n||z.EMPTY_NODE;return ri(o,l)}}}else{const s=xn(t.visibleWrites,e);if(!i&&Bu(s))return n;if(!i&&n==null&&!Wu(s,Y()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(yt(u.path,e)||yt(e,u.path))},l=ry(t.allWrites,o,e),a=n||z.EMPTY_NODE;return ri(l,a)}}}function Dk(t,e,n){let r=z.EMPTY_NODE;const i=fr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=xn(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=ri(xn(s,new ee(o)),l);r=r.updateImmediateChild(o,a)}),Yf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=xn(t.visibleWrites,e);return Yf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function bk(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=we(e,n);if(Wu(t.visibleWrites,s))return null;{const o=xn(t.visibleWrites,s);return Bu(o)?i.getChild(n):ri(o,i.getChild(n))}}function Lk(t,e,n,r){const i=we(e,n),s=fr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=xn(t.visibleWrites,i);return ri(o,r.getNode().getImmediateChild(n))}else return null}function Mk(t,e){return fr(t.visibleWrites,e)}function Fk(t,e,n,r,i,s,o){let l;const a=xn(t.visibleWrites,e),u=fr(a,Y());if(u!=null)l=u;else if(n!=null)l=ri(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=h.getNext();for(;v&&d.length<i;)c(v,r)!==0&&d.push(v),v=h.getNext();return d}else return[]}function Uk(){return{visibleWrites:St.empty(),allWrites:[],lastWriteId:-1}}function hl(t,e,n,r){return iy(t.writeTree,t.treePath,e,n,r)}function _d(t,e){return Dk(t.writeTree,t.treePath,e)}function Xf(t,e,n,r){return bk(t.writeTree,t.treePath,e,n,r)}function fl(t,e){return Mk(t.writeTree,we(t.treePath,e))}function zk(t,e,n,r,i,s){return Fk(t.writeTree,t.treePath,e,n,r,i,s)}function yd(t,e,n){return Lk(t.writeTree,t.treePath,e,n)}function sy(t,e){return oy(we(t.treePath,e),t.writeTree)}function oy(t,e){return{treePath:t,writeTree:e}}/**
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
 */class jk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ws(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,vs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ni(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ws(r,e.snapshotNode,i.oldSnap));else throw li("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Wk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ly=new Wk;class vd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ar(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ur(this.viewCache_),s=zk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Bk(t){return{filter:t}}function $k(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Hk(t,e,n,r,i){const s=new jk;let o,l;if(n.type===vt.OVERWRITE){const u=n;u.source.fromUser?o=$u(t,e,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!V(u.path),o=pl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===vt.MERGE){const u=n;u.source.fromUser?o=Gk(t,e,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Hu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===vt.ACK_USER_WRITE){const u=n;u.revert?o=Qk(t,e,u.path,r,i,s):o=Kk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===vt.LISTEN_COMPLETE)o=qk(t,e,n.path,r,s);else throw li("Unknown operation type: "+n.type);const a=s.getChanges();return Vk(e,o,a),{viewCache:o,changes:a}}function Vk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ju(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(J_(ju(e)))}}function ay(t,e,n,r,i,s){const o=e.eventCache;if(fl(r,n)!=null)return e;{let l,a;if(V(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ur(e),d=u instanceof z?u:z.EMPTY_NODE,c=_d(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=hl(r,ur(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=$(n);if(u===".priority"){x(Pn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Xf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=te(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Xf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=yd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return qi(e,l,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function pl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(V(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const v=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),v,null)}else{const v=$(n);if(!a.isCompleteForPath(n)&&Pn(n)>1)return e;const E=te(n),j=a.getNode().getImmediateChild(v).updateChild(E,r);v===".priority"?u=d.updatePriority(a.getNode(),j):u=d.updateChild(a.getNode(),v,j,E,ly,null)}const c=ty(e,u,a.isFullyInitialized()||V(n),d.filtersNodes()),h=new vd(i,c,s);return ay(t,c,n,i,h,l)}function $u(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new vd(i,e,s);if(V(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=qi(e,u,!0,t.filter.filtersNodes());else{const c=$(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=qi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=te(n),v=l.getNode().getImmediateChild(c);let E;if(V(h))E=r;else{const S=d.getCompleteChild(c);S!=null?$_(h)===".priority"&&S.getChild(V_(h)).isEmpty()?E=S:E=S.updateChild(h,r):E=z.EMPTY_NODE}if(v.equals(E))a=e;else{const S=t.filter.updateChild(l.getNode(),c,E,h,d,o);a=qi(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Jf(t,e){return t.eventCache.isCompleteForChild(e)}function Gk(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=we(n,a);Jf(e,$(d))&&(l=$u(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=we(n,a);Jf(e,$(d))||(l=$u(t,l,d,u,i,s,o))}),l}function Zf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Hu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;V(n)?u=r:u=new ie(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const v=e.serverCache.getNode().getImmediateChild(c),E=Zf(t,v,h);a=pl(t,a,new ee(c),E,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const v=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!v){const E=e.serverCache.getNode().getImmediateChild(c),S=Zf(t,E,h);a=pl(t,a,new ee(c),S,i,s,o,l)}}),a}function Kk(t,e,n,r,i,s,o){if(fl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(V(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return pl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(V(n)){let u=new ie(null);return a.getNode().forEachChild($r,(d,c)=>{u=u.set(new ee(d),c)}),Hu(t,e,n,u,i,s,l,o)}else return e}else{let u=new ie(null);return r.foreach((d,c)=>{const h=we(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Hu(t,e,n,u,i,s,l,o)}}function qk(t,e,n,r,i){const s=e.serverCache,o=ty(e,s.getNode(),s.isFullyInitialized()||V(n),s.isFiltered());return ay(t,o,n,r,ly,i)}function Qk(t,e,n,r,i,s){let o;if(fl(r,n)!=null)return e;{const l=new vd(r,e,i),a=e.eventCache.getNode();let u;if(V(n)||$(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=hl(r,ur(e));else{const c=e.serverCache.getNode();x(c instanceof z,"serverChildren would be complete if leaf node"),d=_d(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=$(n);let c=yd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,te(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,z.EMPTY_NODE,te(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hl(r,ur(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||fl(r,Y())!=null,qi(e,u,o,t.filter.filtersNodes())}}/**
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
 */class Yk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new hd(r.getIndex()),s=mk(r);this.processor_=Bk(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(z.EMPTY_NODE,l.getNode(),null),d=new ar(a,o.isFullyInitialized(),i.filtersNodes()),c=new ar(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Wl(c,d),this.eventGenerator_=new Sk(this.query_)}get query(){return this.query_}}function Xk(t){return t.viewCache_.serverCache.getNode()}function Jk(t,e){const n=ur(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function ep(t){return t.eventRegistrations_.length===0}function Zk(t,e){t.eventRegistrations_.push(e)}function tp(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function np(t,e,n,r){e.type===vt.MERGE&&e.source.queryId!==null&&(x(ur(t.viewCache_),"We should always have a full cache before handling merges"),x(ju(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Hk(t.processor_,i,e,n,r);return $k(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,uy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ex(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(s,o)=>{r.push(ni(s,o))}),n.isFullyInitialized()&&r.push(J_(n.getNode())),uy(t,r,n.getNode(),e)}function uy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Ck(t.eventGenerator_,e,n,i)}/**
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
 */let ml;class tx{constructor(){this.views=new Map}}function nx(t){x(!ml,"__referenceConstructor has already been defined"),ml=t}function rx(){return x(ml,"Reference.ts has not been loaded"),ml}function ix(t){return t.views.size===0}function wd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),np(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(np(o,e,n,r));return s}}function sx(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=hl(n,i?r:null),a=!1;l?a=!0:r instanceof z?(l=_d(n,r),a=!1):(l=z.EMPTY_NODE,a=!1);const u=Wl(new ar(l,a,!1),new ar(r,i,!1));return new Yk(e,u)}return o}function ox(t,e,n,r,i,s){const o=sx(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Zk(o,n),ex(o,n)}function lx(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Nn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(tp(u,n,r)),ep(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(tp(a,n,r)),ep(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Nn(t)&&s.push(new(rx())(e._repo,e._path)),{removed:s,events:o}}function cy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Hr(t,e){let n=null;for(const r of t.views.values())n=n||Jk(r,e);return n}function dy(t,e){if(e._queryParams.loadsAllData())return Bl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function hy(t,e){return dy(t,e)!=null}function Nn(t){return Bl(t)!=null}function Bl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let gl;function ax(t){x(!gl,"__referenceConstructor has already been defined"),gl=t}function ux(){return x(gl,"Reference.ts has not been loaded"),gl}let cx=1;class rp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=Uk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fy(t,e,n,r,i){return Tk(t.pendingWriteTree_,e,n,r,i),i?Us(t,new lr(ey(),e,n)):[]}function Qn(t,e,n=!1){const r=Rk(t.pendingWriteTree_,e);if(Pk(t.pendingWriteTree_,e)){let s=new ie(null);return r.snap!=null?s=s.set(Y(),!0):Ye(r.children,o=>{s=s.set(new ee(o),!0)}),Us(t,new dl(r.path,s,n))}else return[]}function $l(t,e,n){return Us(t,new lr(pd(),e,n))}function dx(t,e,n){const r=ie.fromObject(n);return Us(t,new Cs(pd(),e,r))}function hx(t,e){return Us(t,new Ss(pd(),e))}function fx(t,e,n){const r=Sd(t,n);if(r){const i=Cd(r),s=i.path,o=i.queryId,l=He(s,e),a=new Ss(md(o),l);return Id(t,s,a)}else return[]}function Vu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||hy(o,e))){const a=lx(o,e,n,r);ix(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,v)=>Nn(v));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const v=gx(h);for(let E=0;E<v.length;++E){const S=v[E],j=S.query,m=gy(t,S);t.listenProvider_.startListening(Yi(j),_l(t,j),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Yi(e),null):u.forEach(h=>{const v=t.queryToTagMap.get(Hl(h));t.listenProvider_.stopListening(Yi(h),v)}))}_x(t,u)}return l}function px(t,e,n,r){const i=Sd(t,r);if(i!=null){const s=Cd(i),o=s.path,l=s.queryId,a=He(o,e),u=new lr(md(l),a,n);return Id(t,o,u)}else return[]}function mx(t,e,n,r){const i=Sd(t,r);if(i){const s=Cd(i),o=s.path,l=s.queryId,a=He(o,e),u=ie.fromObject(n),d=new Cs(md(l),a,u);return Id(t,o,d)}else return[]}function ip(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,v)=>{const E=He(h,i);s=s||Hr(v,E),o=o||Nn(v)});let l=t.syncPointTree_.get(i);l?(o=o||Nn(l),s=s||Hr(l,Y())):(l=new tx,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,E)=>{const S=Hr(E,Y());S&&(s=s.updateImmediateChild(v,S))}));const u=hy(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Hl(e);x(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=yx();t.queryToTagMap.set(h,v),t.tagToQueryMap.set(v,h)}const d=gd(t.pendingWriteTree_,i);let c=ox(l,e,n,d,s,a);if(!u&&!o&&!r){const h=dy(l,e);c=c.concat(vx(t,e,h))}return c}function Ed(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=He(o,e),u=Hr(l,a);if(u)return u});return iy(i,e,s,n,!0)}function Us(t,e){return py(e,t.syncPointTree_,null,gd(t.pendingWriteTree_,Y()))}function py(t,e,n,r){if(V(t.path))return my(t,e,n,r);{const i=e.get(Y());n==null&&i!=null&&(n=Hr(i,Y()));let s=[];const o=$(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=sy(r,o);s=s.concat(py(l,a,u,d))}return i&&(s=s.concat(wd(i,t,r,n))),s}}function my(t,e,n,r){const i=e.get(Y());n==null&&i!=null&&(n=Hr(i,Y()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=sy(r,o),d=t.operationForChild(o);d&&(s=s.concat(my(d,l,a,u)))}),i&&(s=s.concat(wd(i,t,r,n))),s}function gy(t,e){const n=e.query,r=_l(t,n);return{hashFn:()=>(Xk(e)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?fx(t,n._path,r):hx(t,n._path);{const s=pI(i,n);return Vu(t,n,null,s)}}}}function _l(t,e){const n=Hl(e);return t.queryToTagMap.get(n)}function Hl(t){return t._path.toString()+"$"+t._queryIdentifier}function Sd(t,e){return t.tagToQueryMap.get(e)}function Cd(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function Id(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=gd(t.pendingWriteTree_,e);return wd(r,n,i,null)}function gx(t){return t.fold((e,n,r)=>{if(n&&Nn(n))return[Bl(n)];{let i=[];return n&&(i=cy(n)),Ye(r,(s,o)=>{i=i.concat(o)}),i}})}function Yi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ux())(t._repo,t._path):t}function _x(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Hl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function yx(){return cx++}function vx(t,e,n){const r=e._path,i=_l(t,e),s=gy(t,n),o=t.listenProvider_.startListening(Yi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)x(!Nn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!V(u)&&d&&Nn(d))return[Bl(d).query];{let h=[];return d&&(h=h.concat(cy(d).map(v=>v.query))),Ye(c,(v,E)=>{h=h.concat(E)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Yi(d),_l(t,d))}}return o}/**
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
 */class kd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kd(n)}node(){return this.node_}}class xd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new xd(this.syncTree_,n)}node(){return Ed(this.syncTree_,this.path_)}}const wx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},sp=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ex(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Sx(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ex=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},Sx=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Cx=function(t,e,n,r){return Td(e,new xd(n,t),r)},_y=function(t,e,n){return Td(t,new kd(e),n)};function Td(t,e,n){const r=t.getPriority().val(),i=sp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=sp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Se(l,Re(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Se(i))),o.forEachChild(fe,(l,a)=>{const u=Td(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Rd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Pd(t,e){let n=e instanceof ee?e:new ee(e),r=t,i=$(n);for(;i!==null;){const s=Jr(r.node.children,i)||{children:{},childCount:0};r=new Rd(i,r,s),n=te(n),i=$(n)}return r}function pi(t){return t.node.value}function yy(t,e){t.node.value=e,Gu(t)}function vy(t){return t.node.childCount>0}function Ix(t){return pi(t)===void 0&&!vy(t)}function Vl(t,e){Ye(t.node.children,(n,r)=>{e(new Rd(n,t,r))})}function wy(t,e,n,r){n&&e(t),Vl(t,i=>{wy(i,e,!0)})}function kx(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function zs(t){return new ee(t.parent===null?t.name:zs(t.parent)+"/"+t.name)}function Gu(t){t.parent!==null&&xx(t.parent,t.name,t)}function xx(t,e,n){const r=Ix(n),i=en(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Gu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Gu(t))}/**
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
 */const Tx=/[\[\].#$\/\u0000-\u001F\u007F]/,Rx=/[\[\].#$\u0000-\u001F\u007F]/,Oa=10*1024*1024,Ey=function(t){return typeof t=="string"&&t.length!==0&&!Tx.test(t)},Sy=function(t){return typeof t=="string"&&t.length!==0&&!Rx.test(t)},Px=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sy(t)},Nx=function(t,e,n,r){Nd(Kc(t,"value"),e,n)},Nd=function(t,e,n){const r=n instanceof ee?new KI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Hn(r)+" with contents = "+e.toString());if(S_(e))throw new Error(t+"contains "+e.toString()+" "+Hn(r));if(typeof e=="string"&&e.length>Oa/3&&Ll(e)>Oa)throw new Error(t+"contains a string greater than "+Oa+" utf8 bytes "+Hn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ye(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ey(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qI(r,o),Nd(t,l,r),QI(r)}),i&&s)throw new Error(t+' contains ".value" child '+Hn(r)+" in addition to actual children.")}},Cy=function(t,e,n,r){if(!Sy(n))throw new Error(Kc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ax=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Cy(t,e,n)},Ox=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Dx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ey(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Px(n))throw new Error(Kc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class bx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ad(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ud(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Iy(t,e,n){Ad(t,n),ky(t,r=>ud(r,e))}function Jt(t,e,n){Ad(t,n),ky(t,r=>yt(r,e)||yt(e,r))}function ky(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Lx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Lx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Gi&&be("event: "+n.toString()),fi(r)}}}/**
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
 */const Mx="repo_interrupt",Fx=25;class Ux{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cl(),this.transactionQueueTree_=new Rd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function zx(t,e,n){if(t.stats_=ld(t.repoInfo_),t.forceRestClient_||yI())t.server_=new ul(t.repoInfo_,(r,i,s,o)=>{op(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>lp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ht(t.repoInfo_,e,(r,i,s,o)=>{op(t,r,i,s,o)},r=>{lp(t,r)},r=>{Wx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=CI(t.repoInfo_,()=>new Ek(t.stats_,t.server_)),t.infoData_=new gk,t.infoSyncTree_=new rp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=$l(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Dd(t,"connected",!1),t.serverSyncTree_=new rp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Jt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function jx(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Od(t){return wx({timestamp:jx(t)})}function op(t,e,n,r,i){t.dataUpdateCount++;const s=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Jo(n,u=>Re(u));o=mx(t.serverSyncTree_,s,a,i)}else{const a=Re(n);o=px(t.serverSyncTree_,s,a,i)}else if(r){const a=Jo(n,u=>Re(u));o=dx(t.serverSyncTree_,s,a)}else{const a=Re(n);o=$l(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Gl(t,s)),Jt(t.eventQueue_,l,o)}function lp(t,e){Dd(t,"connected",e),e===!1&&$x(t)}function Wx(t,e){Ye(e,(n,r)=>{Dd(t,n,r)})}function Dd(t,e,n){const r=new ee("/.info/"+e),i=Re(n);t.infoData_.updateSnapshot(r,i);const s=$l(t.infoSyncTree_,r,i);Jt(t.eventQueue_,r,s)}function xy(t){return t.nextWriteId_++}function Bx(t,e,n,r,i){bd(t,"set",{path:e.toString(),value:n,priority:r});const s=Od(t),o=Re(n,r),l=Ed(t.serverSyncTree_,e),a=_y(o,l,s),u=xy(t),d=fy(t.serverSyncTree_,e,a,u,!0);Ad(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,v)=>{const E=h==="ok";E||Qe("set at "+e+" failed: "+h);const S=Qn(t.serverSyncTree_,u,!E);Jt(t.eventQueue_,e,S),Gx(t,i,h,v)});const c=Ay(t,e);Gl(t,c),Jt(t.eventQueue_,c,[])}function $x(t){bd(t,"onDisconnectEvents");const e=Od(t),n=cl();zu(t.onDisconnect_,Y(),(i,s)=>{const o=Cx(i,s,t.serverSyncTree_,e);Z_(n,i,o)});let r=[];zu(n,Y(),(i,s)=>{r=r.concat($l(t.serverSyncTree_,i,s));const o=Ay(t,i);Gl(t,o)}),t.onDisconnect_=cl(),Jt(t.eventQueue_,Y(),r)}function Hx(t,e,n){let r;$(e._path)===".info"?r=ip(t.infoSyncTree_,e,n):r=ip(t.serverSyncTree_,e,n),Iy(t.eventQueue_,e._path,r)}function ap(t,e,n){let r;$(e._path)===".info"?r=Vu(t.infoSyncTree_,e,n):r=Vu(t.serverSyncTree_,e,n),Iy(t.eventQueue_,e._path,r)}function Vx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Mx)}function bd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function Gx(t,e,n,r){e&&fi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Ty(t,e,n){return Ed(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function Ld(t,e=t.transactionQueueTree_){if(e||Kl(t,e),pi(e)){const n=Py(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Kx(t,zs(e),n)}else vy(e)&&Vl(e,n=>{Ld(t,n)})}function Kx(t,e,n){const r=n.map(u=>u.currentWriteId),i=Ty(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=He(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{bd(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Qn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Kl(t,Pd(t.transactionQueueTree_,e)),Ld(t,t.transactionQueueTree_),Jt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)fi(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Qe("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Gl(t,e)}},o)}function Gl(t,e){const n=Ry(t,e),r=zs(n),i=Py(t,n);return qx(t,i,r),r}function qx(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=He(n,a.path);let d=!1,c;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Qn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Fx)d=!0,c="maxretry",i=i.concat(Qn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Ty(t,a.path,o);a.currentInputSnapshot=h;const v=e[l].update(h.val());if(v!==void 0){Nd("transaction failed: Data returned ",v,a.path);let E=Re(v);typeof v=="object"&&v!=null&&en(v,".priority")||(E=E.updatePriority(h.getPriority()));const j=a.currentWriteId,m=Od(t),f=_y(E,h,m);a.currentOutputSnapshotRaw=E,a.currentOutputSnapshotResolved=f,a.currentWriteId=xy(t),o.splice(o.indexOf(j),1),i=i.concat(fy(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Qn(t.serverSyncTree_,j,!0))}else d=!0,c="nodata",i=i.concat(Qn(t.serverSyncTree_,a.currentWriteId,!0))}Jt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Kl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)fi(r[l]);Ld(t,t.transactionQueueTree_)}function Ry(t,e){let n,r=t.transactionQueueTree_;for(n=$(e);n!==null&&pi(r)===void 0;)r=Pd(r,n),e=te(e),n=$(e);return r}function Py(t,e){const n=[];return Ny(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Ny(t,e,n){const r=pi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Vl(e,i=>{Ny(t,i,n)})}function Kl(t,e){const n=pi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,yy(e,n.length>0?n:void 0)}Vl(e,r=>{Kl(t,r)})}function Ay(t,e){const n=zs(Ry(t,e)),r=Pd(t.transactionQueueTree_,e);return kx(r,i=>{Da(t,i)}),Da(t,r),wy(r,i=>{Da(t,i)}),n}function Da(t,e){const n=pi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yy(e,void 0):n.length=s+1,Jt(t.eventQueue_,zs(e),i);for(let o=0;o<r.length;o++)fi(r[o])}}/**
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
 */function Qx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Yx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const up=function(t,e){const n=Xx(t),r=n.namespace;n.domain==="firebase.com"&&Xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||uI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new b_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ee(n.pathString)}},Xx=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Qx(t.substring(d,c)));const h=Yx(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const E=e.indexOf(".");r=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class Jx{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class Zx{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class eT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Md{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return V(this._path)?null:$_(this._path)}get ref(){return new Mn(this._repo,this._path)}get _queryIdentifier(){const e=Gf(this._queryParams),n=sd(e);return n==="{}"?"default":n}get _queryObject(){return Gf(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof Md))return!1;const n=this._repo===e._repo,r=ud(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+GI(this._path)}}class Mn extends Md{constructor(e,n){super(e,n,new fd,!1)}get parent(){const e=V_(this._path);return e===null?null:new Mn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),r=Ku(this.ref,e);return new yl(this._node.getChild(n),r,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new yl(i,Ku(this.ref,r),fe)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function zn(t,e){return t=Xe(t),t._checkNotDeleted("ref"),e!==void 0?Ku(t._root,e):t._root}function Ku(t,e){return t=Xe(t),$(t._path)===null?Ax("child","path",e):Cy("child","path",e),new Mn(t._repo,we(t._path,e))}function yr(t,e){t=Xe(t),Ox("set",t._path),Nx("set",e,t._path);const n=new Ps;return Bx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Fd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Jx("value",this,new yl(e.snapshotNode,new Mn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Zx(this,e,n):null}matches(e){return e instanceof Fd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function tT(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{ap(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new eT(n,s||void 0),l=new Fd(o);return Hx(t._repo,t,l),()=>ap(t._repo,t,l)}function ba(t,e,n,r){return tT(t,"value",e,n,r)}nx(Mn);ax(Mn);/**
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
 */const nT="FIREBASE_DATABASE_EMULATOR_HOST",qu={};let rT=!1;function iT(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=As(s);t.repoInfo_=new b_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function sT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=up(s,i),l=o.repoInfo,a;typeof process<"u"&&Rf&&(a=Rf[nT]),a?(s=`http://${a}?ns=${l.namespace}`,o=up(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new wI(t.name,t.options,e);Dx("Invalid Firebase Database URL",o),V(o.path)||Xt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=lT(l,t,u,new vI(t,n));return new aT(d,t)}function oT(t,e){const n=qu[e];(!n||n[t.key]!==t)&&Xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Vx(t),delete n[t.key]}function lT(t,e,n,r){let i=qu[e.name];i||(i={},qu[e.name]=i);let s=i[t.toURLString()];return s&&Xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Ux(t,rT,n,r),i[t.toURLString()]=s,s}class aT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(zx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mn(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(oT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xt("Cannot call "+e+" on a deleted database.")}}function uT(t=Lg(),e){const n=Yc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=y0("database");r&&cT(n,...r)}return n}function cT(t,e,n,r={}){t=Xe(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&rr(r,s.repoInfo_.emulatorOptions))return;Xt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ko(ko.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:v0(r.mockUserToken,t.app.options.projectId);o=new ko(l)}As(e)&&Ag(e),iT(s,i,r,o)}/**
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
 */function dT(t){rI(ui),Zr(new ir("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return sT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),In(Pf,Nf,t),In(Pf,Nf,"esm2020")}/**
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
 */Ht.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ht.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dT();const hT={apiKey:"AIzaSyAEPNgXhItKISTG-mnybLEdPVmuXLe9cu8",authDomain:"habit-tracker-1c359.firebaseapp.com",projectId:"habit-tracker-1c359",storageBucket:"habit-tracker-1c359.firebasestorage.app",messagingSenderId:"633793333230",appId:"1:633793333230:web:0cfe83db253d96974eb0ff",databaseURL:"https://habit-tracker-1c359-default-rtdb.firebaseio.com"},Oy=bg(hT),Qu=tI(Oy),jn=uT(Oy),fT=[{email:"gp47@habits.local",password:"gp47pass123",name:"GP47",emoji:"🚀",color:"#FF6B9D",bgColor:"#FFE5F0"},{email:"pri@habits.local",password:"pripass123",name:"Pri",emoji:"🎯",color:"#00D9FF",bgColor:"#E0F7FF"},{email:"nikki@habits.local",password:"nikkilogpass123",name:"Nikki",emoji:"✨",color:"#FFAA00",bgColor:"#FFF4E0"},{email:"sid@habits.local",password:"sidpass123",name:"Sid",emoji:"⚡",color:"#7FFF00",bgColor:"#F0FFE0"}];function pT(){const[t,e]=Q.useState(!1),[n,r]=Q.useState(""),i=async s=>{r(""),e(!0);try{await jS(Qu,s.email,s.password)}catch(o){r("Login failed: "+o.message),e(!1)}};return _.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #0f0f1e 0%, #1a1a3e 50%, #0a2a3e 100%)",color:"#c8b6ff",fontFamily:'"Fredoka One", "Righteous", sans-serif',display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",position:"relative",overflow:"hidden"},children:[_.jsx("div",{style:{position:"absolute",width:"300px",height:"300px",background:"radial-gradient(circle, rgba(200,182,255,0.1) 0%, transparent 70%)",borderRadius:"50%",top:"-100px",right:"-100px",pointerEvents:"none"}}),_.jsx("div",{style:{position:"absolute",width:"300px",height:"300px",background:"radial-gradient(circle, rgba(200,182,255,0.1) 0%, transparent 70%)",borderRadius:"50%",bottom:"-100px",left:"-100px",pointerEvents:"none"}}),_.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a2e 0%, #2d2a4e 100%)",padding:"50px",borderRadius:"20px",border:"2px solid #c8b6ff",maxWidth:"550px",width:"100%",boxShadow:"0 20px 60px rgba(200, 182, 255, 0.2)",position:"relative",zIndex:10},children:[_.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[_.jsx("div",{style:{fontSize:"60px",marginBottom:"15px",animation:"float 3s ease-in-out infinite"},children:"🎯"}),_.jsx("h1",{style:{fontSize:"32px",fontWeight:"bold",margin:"10px 0"},children:"Habit Tracker"}),_.jsx("p",{style:{fontSize:"16px",background:"linear-gradient(90deg, #c8b6ff, #ff006e)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"10px",fontWeight:"bold"},children:"For 4 Friends 🚀"})]}),n&&_.jsx("div",{style:{color:"#ff6b6b",marginBottom:"20px",padding:"12px",background:"#ff6b6b20",borderRadius:"8px",fontSize:"14px",textAlign:"center",border:"1px solid #ff6b6b"},children:n}),_.jsx("div",{style:{textAlign:"center",marginBottom:"25px",color:"#999",fontSize:"13px",textTransform:"uppercase",letterSpacing:"2px",fontWeight:"bold"},children:"👇 Click Your Name to Login"}),_.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"30px"},children:fT.map(s=>_.jsxs("button",{onClick:()=>i(s),disabled:t,style:{padding:"20px 15px",background:s.bgColor,color:s.color,border:`3px solid ${s.color}`,borderRadius:"12px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",fontSize:"16px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",opacity:t?.6:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",textTransform:"uppercase",letterSpacing:"1px",boxShadow:`0 4px 15px ${s.color}30`,transform:"translateY(0px)"},onMouseOver:o=>{o.currentTarget.style.transform="translateY(-5px)",o.currentTarget.style.boxShadow=`0 8px 25px ${s.color}50`,o.currentTarget.style.background=s.color,o.currentTarget.style.color="#0f0f1e"},onMouseOut:o=>{o.currentTarget.style.transform="translateY(0px)",o.currentTarget.style.boxShadow=`0 4px 15px ${s.color}30`,o.currentTarget.style.background=s.bgColor,o.currentTarget.style.color=s.color},children:[_.jsx("span",{style:{fontSize:"28px"},children:s.emoji}),_.jsx("span",{children:s.name})]},s.email))}),_.jsx("style",{children:`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `})]})]})}const mT=({user:t})=>{const e=(p=new Date)=>{const g=p.getFullYear(),w=String(p.getMonth()+1).padStart(2,"0"),C=String(p.getDate()).padStart(2,"0");return`${g}-${w}-${C}`},n=["GP47","Pri","Nikki","Sid"],r=[{id:1,name:"Exercise",category:"💪",type:"pomodoro",sessionsRequired:2},{id:2,name:"AI Reading",category:"🤖",type:"pomodoro",sessionsRequired:1},{id:3,name:"Sleep 8hrs",category:"😴",type:"checkbox"},{id:4,name:"Brush Twice Daily",category:"🪥",type:"checkbox"},{id:5,name:"Water Intake",category:"💧",type:"counter",goal:8},{id:6,name:"Take Vitamins",category:"💊",type:"checkbox"},{id:7,name:"Eat 2 Eggs",category:"🥚",type:"checkbox"}],[i,s]=Q.useState(null),[o,l]=Q.useState(()=>localStorage.getItem("activeTab")||"habits"),[a,u]=Q.useState({}),[d,c]=Q.useState(!1),[h,v]=Q.useState(!0),E=Q.useRef(!1),[S,j]=Q.useState([]),m=Q.useRef(0),[f,y]=Q.useState(()=>{const p=localStorage.getItem("notificationsEnabled");return p?JSON.parse(p):!1}),I=Q.useRef({}),[P,O]=Q.useState(""),[A,b]=Q.useState({}),[X,B]=Q.useState(()=>localStorage.getItem("calendarView")||"week"),[ge,Je]=Q.useState({}),Fn=async()=>{"Notification"in window&&(Notification.permission==="granted"?y(!0):Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(y(!0),de("🔔 Notifications enabled!","success")))},de=(p,g="info",w=3e3)=>{const C=++m.current,T={id:C,message:p,type:g};j(D=>[...D,T]),setTimeout(()=>{j(D=>D.filter(W=>W.id!==C))},w)},pr=(p,g={})=>{if(f&&"Notification"in window)try{const w=new Notification(p,{icon:"🏆",badge:"🎯",requireInteraction:!1,tag:"habit-notification",...g});setTimeout(()=>{w&&w.close&&w.close()},3e3)}catch(w){console.error("Notification error:",w)}};Q.useEffect(()=>{Object.keys(a).length!==0&&Object.keys(a).forEach(p=>{if(p===i)return;const g=a[p],w=I.current[p];if(!w){I.current[p]=JSON.parse(JSON.stringify(g));return}if(g.pomodoro.sessions>w.pomodoro.sessions){const D=`🎯 ${p} just completed a session! Level ${g.pomodoro.level} 🚀`;de(D,"success"),pr(`${p} is crushing it! 🔥`,{body:`They just leveled up to Level ${g.pomodoro.level}!`,tag:"session-complete"})}if(g.pomodoro.level>w.pomodoro.level){const D=`⭐ ${p} just leveled up to Level ${g.pomodoro.level}! 🎉`;de(D,"success"),pr(`${p} leveled up! ⭐`,{body:`Now at Level ${g.pomodoro.level}. Can you keep up?`,tag:"level-up"})}const C=g.habits.filter(D=>D.completed),T=w.habits.filter(D=>D.completed);if(C.length>T.length){const D=C.find(W=>!T.includes(W));if(D){const W=`💪 ${p} completed ${D.category} ${D.name}!`;de(W,"info"),pr(`${p} is staying on track! 💪`,{body:`Completed: ${D.name}`,tag:"habit-complete"})}}if(g.stats.completionPercentage>=70&&w.stats.completionPercentage<70){const D=`🏆 ${p} hit their daily goal! 70%+ complete 🎉`;de(D,"success"),pr(`${p} crushed today's goal! 🏆`,{body:"They hit 70% completion. Don't fall behind!",tag:"daily-goal"})}I.current[p]=JSON.parse(JSON.stringify(g))})},[a,i,f]),Q.useEffect(()=>{const p=()=>{const w=new Date,C=new Date(w);C.setDate(C.getDate()+1),C.setHours(0,0,0,0);const T=C-w,D=Math.floor(T/(1e3*60*60)),W=Math.floor(T%(1e3*60*60)/(1e3*60)),K=Math.floor(T%(1e3*60)/1e3);O(`${D}h ${W}m ${K}s`)};p();const g=setInterval(p,1e3);return()=>clearInterval(g)},[]);const Un=(p=>{const g=p.split("@")[0];return n.find(w=>w.toLowerCase()===g.toLowerCase())||g})(t.email);Q.useEffect(()=>{s(Un)},[Un]),Q.useEffect(()=>{localStorage.setItem("activeTab",o)},[o]),Q.useEffect(()=>{localStorage.setItem("notificationsEnabled",JSON.stringify(f))},[f]),Q.useEffect(()=>{localStorage.setItem("calendarView",X)},[X]),Q.useEffect(()=>{const p=zn(jn,"users"),g=setTimeout(()=>{console.warn("Firebase loading timeout - initializing locally");const C={};n.forEach(T=>{C[T]=F()}),u(C),v(!1)},5e3),w=ba(p,C=>{if(clearTimeout(g),C.exists()){const T=C.val();if(!E.current){E.current=!0;let D=!1;n.forEach(W=>{if(T[W]){T[W].habits=T[W].habits.map(Me=>{const Ws=r.find(_i=>_i.id===Me.id);return Ws&&(!Me.type||!Me.category||!Me.name)?(D=!0,{...Ws,...Me}):Me});const K=new Set(T[W].habits.map(Me=>Me.id));r.forEach(Me=>{K.has(Me.id)||(D=!0,T[W].habits.push({...Me,completed:!1,streak:0,bestStreak:0,count:0,sessionsCompleted:0}))})}}),D&&yr(p,T).catch(W=>console.error("Error saving migrated data:",W))}u(T)}else{const T={};n.forEach(D=>{T[D]=F()}),yr(p,T).catch(D=>{console.error("Error initializing Firebase:",D),u(T)}),u(T)}v(!1)},C=>{clearTimeout(g),console.error("Firebase error:",C);const T={};n.forEach(D=>{T[D]=F()}),u(T),v(!1)});return()=>{clearTimeout(g),w()}},[]);const R=async()=>{const p=new Date;p.setDate(p.getDate()-1);const g=e(p);Object.keys(a).forEach(w=>{const C=a[w],T=zn(jn,`history/${g}/${w}`);yr(T,{completed:C.stats.completionPercentage>=70,percentage:C.stats.completionPercentage,timestamp:p.toISOString()}).catch(D=>console.error("Error saving history:",D))})};Q.useEffect(()=>{const p=zn(jn,"history"),g=zn(jn,"bonusTask"),w=ba(p,T=>{T.exists()&&b(T.val())},T=>{console.error("Error loading history:",T)}),C=ba(g,T=>{T.exists()?Je(T.val()):Je({})},T=>{console.error("Error loading bonus task:",T)});return()=>{w(),C()}},[]),Q.useEffect(()=>{if(!i||Object.keys(a).length===0)return;const p=()=>{const w=localStorage.getItem("lastResetDate"),C=e(),T=w&&w!==C;if(console.log("[RESET CHECK]",{lastResetDate:w,today:C,shouldReset:T}),T){console.log("[RESET TRIGGERED] Date changed:",w,"→",C),R();const D=JSON.parse(JSON.stringify(a));n.forEach(W=>{var K;if(D[W]){const Me=new Date;Me.setDate(Me.getDate()-1);const Ws=e(Me),_i=A[Ws],jd=((K=_i==null?void 0:_i[W])==null?void 0:K.completed)||!1;D[W].habits.forEach(_e=>{_e.type==="checkbox"||_e.type==="counter"?(_e.completed=!1,_e.type==="counter"&&(_e.count=0),jd?(_e.streak=(_e.streak||0)+1,_e.bestStreak=Math.max(_e.bestStreak||0,_e.streak)):_e.streak=0):_e.type==="pomodoro"&&(_e.sessionsCompleted=0,_e.completed=!1,jd?(_e.streak=(_e.streak||0)+1,_e.bestStreak=Math.max(_e.bestStreak||0,_e.streak)):_e.streak=0)}),D[W].pomodoro.sessionsToday=0,D[W].pomodoro.dailyXP=0,D[W].stats.completionPercentage=0,M(W,D[W])}}),u(D),Je({}),de("📅 Daily reset! New habits unlocked for today","success")}localStorage.setItem("lastResetDate",C)};p();const g=setInterval(p,6e4);return()=>clearInterval(g)},[i,A]);const F=()=>({habits:r.map(p=>({...p,completed:!1,streak:0,bestStreak:0,count:0,sessionsCompleted:0})),pomodoro:{sessions:0,xp:0,level:1,dailyXP:0,sessionsToday:0},stats:{completionPercentage:0,perfectWeekCount:0}}),M=(p,g)=>{const w=zn(jn,`users/${p}`);yr(w,g)},oe=()=>{try{const p=new(window.AudioContext||window.webkitAudioContext);for(let g=0;g<3;g++)setTimeout(()=>{const w=p.createOscillator(),C=p.createGain();w.connect(C),C.connect(p.destination),w.frequency.value=900+g*200,w.type="sine",C.gain.setValueAtTime(.4,p.currentTime),C.gain.exponentialRampToValueAtTime(.01,p.currentTime+.3),w.start(p.currentTime),w.stop(p.currentTime+.3)},g*150);pe()}catch{pe()}},pe=()=>{const p=document.getElementById("notification-flash");p&&(p.style.opacity="1",setTimeout(()=>{p.style.opacity="0"},300))},mr=p=>{if(!i)return;const g=JSON.parse(JSON.stringify(a));if(!g[i])return;const w=g[i].habits.find(C=>C.id===p);if(w&&w.type==="checkbox"){const C=w.completed;w.completed=!w.completed,!C&&w.completed?(g[i].pomodoro.xp+=5,g[i].pomodoro.dailyXP+=5,g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1,de(`✅ ${w.name} completed! +5 XP`,"success")):C&&!w.completed&&(g[i].pomodoro.xp=Math.max(0,g[i].pomodoro.xp-5),g[i].pomodoro.dailyXP=Math.max(0,g[i].pomodoro.dailyXP-5),g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1,de(`↶ ${w.name} unchecked! -5 XP`,"info")),bt(g),u(g),M(i,g[i])}},kt=(p,g)=>{if(!i)return;const w=JSON.parse(JSON.stringify(a));if(!w[i])return;const C=w[i].habits.find(T=>T.id===p);if(C&&C.type==="counter"){const T=C.completed;C.count=Math.max(0,C.count+g),C.completed=C.count>=(C.goal||8),!T&&C.completed?(w[i].pomodoro.xp+=5,w[i].pomodoro.dailyXP+=5,w[i].pomodoro.level=Math.floor(w[i].pomodoro.xp/100)+1,de(`✅ ${C.name} goal reached! +5 XP`,"success")):T&&!C.completed&&(w[i].pomodoro.xp=Math.max(0,w[i].pomodoro.xp-5),w[i].pomodoro.dailyXP=Math.max(0,w[i].pomodoro.dailyXP-5),w[i].pomodoro.level=Math.floor(w[i].pomodoro.xp/100)+1,de(`↶ ${C.name} below goal! -5 XP`,"info")),bt(w),u(w),M(i,w[i])}},mi=p=>{if(!i)return;const g=JSON.parse(JSON.stringify(a));if(!g[i])return;const w=g[i].habits.find(C=>C.id===p);if(w&&w.type==="pomodoro"){w.sessionsCompleted=(w.sessionsCompleted||0)+1,w.sessionsCompleted>=w.sessionsRequired&&(w.completed=!0),g[i].pomodoro.sessions+=1,g[i].pomodoro.sessionsToday+=1;const T=10+(g[i].pomodoro.sessionsToday<=3?10:0);g[i].pomodoro.xp+=T,g[i].pomodoro.dailyXP+=T,g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1,bt(g),u(g),M(i,g[i]),oe(),de(`✅ ${w.name} session added! +${T} XP`,"success")}},Dt=p=>{if(!i)return;const g=JSON.parse(JSON.stringify(a));if(!g[i])return;const w=g[i].habits.find(C=>C.id===p);if(w&&w.type==="pomodoro"&&w.sessionsCompleted>0){w.sessionsCompleted-=1,w.sessionsCompleted<w.sessionsRequired&&(w.completed=!1),g[i].pomodoro.sessions=Math.max(0,g[i].pomodoro.sessions-1),g[i].pomodoro.sessionsToday=Math.max(0,g[i].pomodoro.sessionsToday-1);const T=10+(g[i].pomodoro.sessionsToday+1<=3?10:0);g[i].pomodoro.xp=Math.max(0,g[i].pomodoro.xp-T),g[i].pomodoro.dailyXP=Math.max(0,g[i].pomodoro.dailyXP-T),g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1,bt(g),u(g),M(i,g[i]),de(`↶ ${w.name} session removed! -${T} XP`,"info")}},bt=(p,g=ge)=>{const w=e(),C=p[i].habits.filter(K=>K.completed).length,T=g[w]?1:0,D=C+T,W=p[i].habits.length+1;p[i].stats.completionPercentage=Math.round(D/W*100)},Dy=()=>{if(!i)return;const p=e();if(ge[p])return;const g=JSON.parse(JSON.stringify(a));g[i].pomodoro.xp+=20,g[i].pomodoro.dailyXP+=20,g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1,u(g),M(i,g[i]);const w={completedBy:i,timestamp:new Date().toISOString()},C=zn(jn,`bonusTask/${p}`);yr(C,w).catch(T=>{console.error("Error saving bonus task:",T)}),Je({...ge,[p]:w}),de(`🐕 ${i} walked Mylo! +20 XP bonus`,"success"),oe()},Ud=()=>{if(!i)return;const p=e();if(!ge[p]||ge[p].completedBy!==i)return;const g=JSON.parse(JSON.stringify(a));g[i].pomodoro.xp=Math.max(0,g[i].pomodoro.xp-20),g[i].pomodoro.dailyXP=Math.max(0,g[i].pomodoro.dailyXP-20),g[i].pomodoro.level=Math.floor(g[i].pomodoro.xp/100)+1,u(g),M(i,g[i]);const w=zn(jn,`bonusTask/${p}`);yr(w,null);const C={...ge};delete C[p],Je(C),de("↶ Bonus task removed! -20 XP","info")},zd="#0f0f1e",L="#c8b6ff";if(h)return _.jsx("div",{style:{minHeight:"100vh",background:zd,color:L,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"inherit"},children:"Loading..."});const gi=a[i]||F(),by=gi.habits.filter(p=>p.completed).length;return _.jsxs("div",{style:{minHeight:"100vh",background:zd,color:L,fontFamily:'"Fredoka One", "Righteous", sans-serif'},children:[_.jsx("div",{id:"notification-flash",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:L,opacity:"0",pointerEvents:"none",transition:"opacity 0.3s ease",zIndex:9999}}),d&&_.jsx("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"120px",animation:"float 1s ease-out forwards",pointerEvents:"none",zIndex:5e3},children:"✨"}),_.jsx("style",{children:`
        @keyframes float { 0% { transform: translate(-50%, -50%) scale(1); opacity: 1; } 100% { transform: translate(-50%, -150%) scale(0); opacity: 0; } }
      `}),_.jsxs("div",{style:{padding:"20px",borderBottom:"2px solid #333333",textAlign:"center"},children:[_.jsxs("div",{style:{fontSize:"16px",fontWeight:"bold",color:L},children:["Welcome, ",_.jsx("span",{style:{fontSize:"20px"},children:Un}),"! 👋"]}),_.jsx("button",{onClick:Fn,style:{marginTop:"10px",padding:"8px 16px",background:f?L:"#1a1a2e",color:f?"#0f0f1e":L,border:`2px solid ${L}`,borderRadius:"6px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",fontSize:"12px"},children:f?"🔔 Notifications On":"🔕 Enable Notifications"}),_.jsx("div",{style:{fontSize:"12px",color:"#999",marginTop:"5px"},children:"Only your data is editable. View others' progress below."})]}),_.jsx("div",{style:{padding:"15px",display:"flex",gap:"10px",borderBottom:"2px solid #333"},children:[{id:"habits",label:"🎯 Habits"},{id:"leaderboard",label:"🏆 Leaderboard"},...i==="GP47"?[{id:"admin",label:"⚙️ Admin"}]:[]].map(p=>_.jsx("button",{onClick:()=>l(p.id),style:{padding:"10px 20px",background:o===p.id?L:"transparent",color:o===p.id?"#0f0f1e":L,border:`2px solid ${L}`,borderRadius:"8px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",fontSize:"14px"},children:p.label},p.id))}),o==="habits"&&_.jsxs("div",{style:{padding:"30px",maxWidth:"600px",margin:"0 auto"},children:[_.jsxs("div",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"10px"},children:[i,"'s Daily Habits"]}),_.jsxs("div",{style:{fontSize:"12px",color:"#999",marginBottom:"15px",display:"flex",justifyContent:"space-between"},children:[_.jsxs("span",{children:["📅 ",new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),_.jsxs("span",{children:["⏰ Reset in ",P]})]}),_.jsx("div",{style:{fontSize:"14px",color:"#999",marginBottom:"30px"},children:(()=>{const p=e(),g=ge[p]?1:0,w=by+g,C=gi.habits.length+1;return`Completion: ${gi.stats.completionPercentage}% (${w}/${C})`})()}),gi.habits.map(p=>_.jsxs("div",{style:{padding:"15px",marginBottom:"10px",background:p.completed?L:"#1a1a2e",color:p.completed?"#0f0f1e":L,borderRadius:"10px",cursor:p.type==="checkbox"?"pointer":"default",display:"flex",justifyContent:"space-between",alignItems:"center",border:`2px solid ${L}`,transition:"all 0.2s"},onClick:()=>p.type==="checkbox"&&mr(p.id),children:[_.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center",flex:1},children:[_.jsx("span",{style:{fontSize:"24px"},children:p.category}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:"bold"},children:p.name}),_.jsxs("div",{style:{fontSize:"12px",opacity:.8},children:["Streak: ",p.streak," | Best: ",p.bestStreak]}),p.type==="pomodoro"&&_.jsxs("div",{style:{fontSize:"11px",opacity:.8,marginTop:"4px"},children:["Sessions: ",p.sessionsCompleted,"/",p.sessionsRequired]})]})]}),p.type==="checkbox"&&_.jsx("div",{style:{fontSize:"24px"},children:p.completed?"✅":"⭕"}),p.type==="pomodoro"&&_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[_.jsx("div",{style:{width:"60px",height:"8px",background:"#333",borderRadius:"4px",overflow:"hidden",border:`1px solid ${L}`},children:_.jsx("div",{style:{width:`${p.sessionsCompleted/p.sessionsRequired*100}%`,height:"100%",background:L,transition:"width 0.3s"}})}),_.jsxs("span",{style:{minWidth:"30px",textAlign:"center",fontSize:"12px"},children:[p.sessionsCompleted,"/",p.sessionsRequired]}),p.sessionsCompleted<p.sessionsRequired&&_.jsx("button",{onClick:()=>mi(p.id),style:{padding:"6px 12px",background:"transparent",color:L,border:`2px solid ${L}`,borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit",whiteSpace:"nowrap"},children:"✓ Add"}),p.sessionsCompleted>0&&_.jsx("button",{onClick:()=>Dt(p.id),style:{padding:"6px 12px",background:"transparent",color:"#ff6b6b",border:"2px solid #ff6b6b",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit",whiteSpace:"nowrap"},children:"↶ Undo"})]}),p.type==="counter"&&_.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[_.jsx("button",{onClick:()=>kt(p.id,-1),style:{width:"30px",height:"30px",background:"transparent",border:`2px solid ${p.completed?"#0f0f1e":L}`,color:p.completed?"#0f0f1e":L,borderRadius:"50%",cursor:"pointer",fontWeight:"bold",fontSize:"16px",fontFamily:"inherit"},children:"−"}),_.jsxs("div",{style:{minWidth:"40px",textAlign:"center",fontWeight:"bold",fontSize:"18px"},children:[p.count,"/",p.goal]}),_.jsx("button",{onClick:()=>kt(p.id,1),style:{width:"30px",height:"30px",background:p.count>=p.goal?"#0f0f1e":"transparent",border:`2px solid ${p.completed?"#0f0f1e":L}`,color:p.completed?"#0f0f1e":L,borderRadius:"50%",cursor:"pointer",fontWeight:"bold",fontSize:"16px",fontFamily:"inherit"},children:"+"})]})]},p.id)),gi.stats.completionPercentage>=70&&_.jsx("div",{style:{marginTop:"30px",padding:"15px",background:"#2a2547",borderRadius:"10px",textAlign:"center",fontWeight:"bold",border:`2px solid ${L}`},children:"🏆 Daily Goal Met! 70%+ habits completed"}),_.jsxs("div",{style:{marginTop:"30px",padding:"20px",background:"#1a2a1e",borderRadius:"12px",border:"2px solid #7FFF00"},children:[_.jsx("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"10px",color:"#7FFF00"},children:"🐕 Daily Bonus Task"}),(()=>{const p=e(),g=ge[p],w=g&&g.completedBy===i;return _.jsxs("div",{style:{padding:"15px",background:g?"#333":"#0f0f1e",borderRadius:"8px",border:g?"2px solid #999":"2px solid #7FFF00",cursor:g?w?"pointer":"default":"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",opacity:g&&!w?.5:1},onClick:()=>{g?w&&Ud():Dy()},children:[_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:"bold",color:g?"#999":"#7FFF00",marginBottom:"5px"},children:"Take Mylo for a Walk"}),_.jsx("div",{style:{fontSize:"12px",color:"#999"},children:g?`✅ Completed by ${g.completedBy}`:"First one to complete earns 20 XP!"})]}),!g&&_.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",color:"#7FFF00"},children:"+20 XP"}),w&&_.jsx("button",{onClick:C=>{C.stopPropagation(),Ud()},style:{padding:"6px 12px",background:"transparent",color:"#ff6b6b",border:"2px solid #ff6b6b",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit"},children:"↶ Undo"})]})})()]}),_.jsxs("div",{style:{marginTop:"50px",paddingTop:"30px",borderTop:"2px solid #333"},children:[_.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:L},children:"👥 Others' Progress (Read-Only)"}),n.filter(p=>p!==i).map(p=>{const g=a[p]||F(),w=g.habits.filter(C=>C.completed).length;return _.jsxs("div",{style:{padding:"15px",marginBottom:"15px",background:"#1a1a2e",borderRadius:"10px",border:"1px solid #333"},children:[_.jsx("div",{style:{fontWeight:"bold",marginBottom:"10px",color:L},children:p}),_.jsxs("div",{style:{fontSize:"12px",color:"#999",marginBottom:"8px"},children:["Completion: ",g.stats.completionPercentage,"% (",w,"/",g.habits.length,") | Level: ",g.pomodoro.level]}),_.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:g.habits.map(C=>_.jsxs("div",{style:{padding:"6px 12px",background:C.completed?L:"#0f0f1e",color:C.completed?"#0f0f1e":L,borderRadius:"6px",fontSize:"11px",fontWeight:"bold"},children:[C.category," ",C.completed?"✅":"⭕"]},C.id))})]},p)})]})]}),o==="leaderboard"&&_.jsxs("div",{style:{padding:"30px",maxWidth:"900px",margin:"0 auto"},children:[_.jsx("div",{style:{fontSize:"28px",fontWeight:"bold",marginBottom:"10px",color:L},children:"🏆 Leaderboard"}),_.jsx("div",{style:{fontSize:"13px",color:"#999",marginBottom:"30px",textTransform:"uppercase",letterSpacing:"1px"},children:"Real-Time Rankings & Completion Tracking"}),_.jsxs("div",{style:{marginBottom:"30px",background:"#1a1a2e",padding:"15px",borderRadius:"12px",border:"2px solid #7FFF00"},children:[_.jsx("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"12px",color:"#7FFF00"},children:"⚡ How to Gain XP"}),_.jsxs("div",{style:{fontSize:"13px",color:"#ccc",lineHeight:"1.6"},children:[_.jsxs("div",{style:{marginBottom:"8px"},children:["✓ ",_.jsx("strong",{children:"Base XP:"})," +10 XP per session (timer or manual)"]}),_.jsxs("div",{style:{marginBottom:"8px"},children:["🔥 ",_.jsx("strong",{children:"Session Bonus:"})," +10 extra XP for first 3 sessions of the day (total +20)"]}),_.jsxs("div",{style:{marginBottom:"8px"},children:["✅ ",_.jsx("strong",{children:"Habit Completion:"})," +5 XP per checkbox/counter habit completed"]}),_.jsxs("div",{style:{marginBottom:"8px"},children:["🐕 ",_.jsx("strong",{children:"Daily Bonus (Mylo):"})," +20 XP once per day (first to claim)"]}),_.jsxs("div",{style:{marginBottom:"8px"},children:["📈 ",_.jsx("strong",{children:"Leveling:"})," 100 XP = 1 Level"]}),_.jsxs("div",{children:["💪 ",_.jsx("strong",{children:"Daily Goal:"})," Complete 70%+ of habits to hit daily completion target"]})]})]}),_.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[_.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:L},children:"📅 Completion Calendar"}),_.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:[_.jsx("button",{onClick:()=>B("week"),style:{padding:"8px 16px",background:X==="week"?L:"#0f0f1e",color:X==="week"?"#0f0f1e":L,border:`2px solid ${L}`,borderRadius:"6px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",fontSize:"12px"},children:"This Week"}),_.jsx("button",{onClick:()=>B("month"),style:{padding:"8px 16px",background:X==="month"?L:"#0f0f1e",color:X==="month"?"#0f0f1e":L,border:`2px solid ${L}`,borderRadius:"6px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",fontSize:"12px"},children:"Last 30 Days"})]}),_.jsx("div",{style:{display:"flex",gap:"15px",flexWrap:"wrap",marginBottom:"20px",fontSize:"12px"},children:[{name:"GP47",color:"#FF6B9D"},{name:"Pri",color:"#00D9FF"},{name:"Nikki",color:"#FFAA00"},{name:"Sid",color:"#7FFF00"}].map(p=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[_.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"3px",background:p.color}}),_.jsx("span",{children:p.name})]},p.name))}),_.jsxs("div",{style:{background:"#0f0f1e",padding:"15px",borderRadius:"8px",overflowX:"auto"},children:[X==="week"&&_.jsxs("div",{children:[_.jsx("div",{style:{fontSize:"12px",color:"#999",marginBottom:"10px",textTransform:"uppercase"},children:"This Week"}),_.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"8px"},children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((p,g)=>{const w=new Date;w.setDate(w.getDate()-(w.getDay()-g-1+7)%7);const C=e(w),T=A[C]||{},D={GP47:"#FF6B9D",Pri:"#00D9FF",Nikki:"#FFAA00",Sid:"#7FFF00"};return _.jsxs("div",{style:{textAlign:"center"},children:[_.jsx("div",{style:{fontSize:"11px",color:"#999",marginBottom:"5px",fontWeight:"bold"},children:p}),_.jsx("div",{style:{width:"100%",aspectRatio:"1",background:"#1a1a2e",borderRadius:"8px",border:"1px solid #333",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",padding:"4px",gap:"2px"},children:Object.keys(T).length>0?Object.keys(T).map(W=>T[W].completed&&_.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"2px",background:D[W]}},W)):_.jsx("span",{style:{fontSize:"10px",color:"#666"},children:"—"})})]},p)})})]}),X==="month"&&_.jsxs("div",{children:[_.jsx("div",{style:{fontSize:"12px",color:"#999",marginBottom:"10px",textTransform:"uppercase"},children:"Last 30 Days"}),_.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(40px, 1fr))",gap:"4px"},children:Array.from({length:30}).map((p,g)=>{const w=new Date;w.setDate(w.getDate()-(29-g));const C=e(w),T=A[C]||{},D={GP47:"#FF6B9D",Pri:"#00D9FF",Nikki:"#FFAA00",Sid:"#7FFF00"},W=Object.keys(T).filter(K=>T[K].completed).length;return _.jsx("div",{style:{aspectRatio:"1",background:W===4?"#2d5f2e":W>=2?"#3a3a5f":"#1a1a2e",borderRadius:"4px",border:"1px solid #333",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",padding:"2px",gap:"1px",title:`${C}: ${W} users completed`},children:W>0?Object.keys(T).map(K=>T[K].completed&&_.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"1px",background:D[K]}},K)):_.jsx("span",{style:{fontSize:"8px",color:"#666"},children:"·"})},C)})})]})]}),_.jsxs("div",{style:{marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #333"},children:[_.jsx("div",{style:{fontSize:"13px",color:"#999",marginBottom:"10px",textTransform:"uppercase"},children:"Today's Progress"}),n.map(p=>{const g=a[p]||F(),w=g.stats.completionPercentage>=70,C={GP47:"#FF6B9D",Pri:"#00D9FF",Nikki:"#FFAA00",Sid:"#7FFF00"};return _.jsx("div",{style:{marginBottom:"12px",borderRadius:"8px",overflow:"hidden"},children:_.jsxs("div",{style:{padding:"10px 12px",background:`linear-gradient(90deg, ${C[p]}30 ${g.stats.completionPercentage}%, #0f0f1e ${g.stats.completionPercentage}%)`,borderRadius:"8px",borderLeft:`4px solid ${C[p]}`,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("span",{style:{fontWeight:"bold",color:C[p]},children:p}),_.jsxs("span",{style:{fontSize:"12px",color:"#999"},children:[g.stats.completionPercentage,"% ",w?"✅":"⏳"]})]})},p)})]})]}),_.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[_.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:L},children:"🔥 Longest Active Streaks"}),n.map(p=>{var C;const w=(((C=a[p])==null?void 0:C.habits)||[]).reduce((T,D)=>D.streak>T.streak?D:T,{streak:0,name:"None"});return _.jsxs("div",{style:{padding:"12px",marginBottom:"8px",background:"#0f0f1e",borderRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("span",{style:{fontWeight:"bold"},children:p}),_.jsxs("span",{style:{fontSize:"12px",color:"#999"},children:[w.name," • ",_.jsxs("span",{style:{color:L,fontWeight:"bold"},children:[w.streak," days 🔥"]})]})]},p)})]}),_.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[_.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:L},children:"⭐ Overall Level"}),n.sort((p,g)=>{var w,C;return(((w=a[g])==null?void 0:w.pomodoro.level)||1)-(((C=a[p])==null?void 0:C.pomodoro.level)||1)}).map((p,g)=>{var D,W;const w=((D=a[p])==null?void 0:D.pomodoro.level)||1,C=((W=a[p])==null?void 0:W.pomodoro.xp)||0,T=["🥇","🥈","🥉"];return _.jsxs("div",{style:{padding:"12px",marginBottom:"8px",background:"#0f0f1e",borderRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[_.jsx("span",{children:T[g]||"4️⃣"}),_.jsx("span",{style:{fontWeight:"bold"},children:p})]}),_.jsxs("span",{style:{fontSize:"12px",color:"#999"},children:["Level ",_.jsx("span",{style:{color:L,fontWeight:"bold",fontSize:"14px"},children:w})," • ",C," XP"]})]},p)})]}),_.jsxs("div",{style:{background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[_.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"15px",color:L},children:"🏅 Stats"}),n.map(p=>{const g=a[p]||F(),w=g.pomodoro.sessions||0;return _.jsxs("div",{style:{padding:"12px",marginBottom:"8px",background:"#0f0f1e",borderRadius:"8px"},children:[_.jsx("div",{style:{fontWeight:"bold",marginBottom:"6px"},children:p}),_.jsxs("div",{style:{fontSize:"12px",color:"#999"},children:["💎 ",w," total sessions | 🎯 ",g.pomodoro.dailyXP," XP today"]})]},p)})]})]}),o==="admin"&&i==="GP47"&&_.jsxs("div",{style:{padding:"30px",maxWidth:"600px",margin:"0 auto"},children:[_.jsx("div",{style:{fontSize:"28px",fontWeight:"bold",marginBottom:"10px",color:L},children:"⚙️ Admin Panel"}),_.jsx("div",{style:{fontSize:"13px",color:"#999",marginBottom:"30px"},children:"Reset user stats and levels"}),_.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[_.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:L},children:"🔄 Reset User Levels"}),n.map(p=>{const g=a[p]||F();return _.jsxs("div",{style:{padding:"15px",marginBottom:"10px",background:"#0f0f1e",borderRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:"bold",marginBottom:"5px"},children:p}),_.jsxs("div",{style:{fontSize:"12px",color:"#999"},children:["Level ",g.pomodoro.level," • ",g.pomodoro.xp," XP"]})]}),_.jsx("button",{onClick:()=>{const w=JSON.parse(JSON.stringify(a));w[p].pomodoro.xp=0,w[p].pomodoro.level=1,w[p].pomodoro.dailyXP=0,u(w),M(p,w[p]),de(`✅ Reset ${p}'s level to 1`,"success")},style:{padding:"8px 16px",background:"#ff6b6b",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"12px",fontFamily:"inherit"},children:"Reset"})]},p)})]}),_.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[_.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:L},children:"📅 Reset Daily Habits"}),_.jsx("p",{style:{fontSize:"12px",color:"#999",marginBottom:"15px"},children:"Clears today's habit progress (checkboxes, counters) but keeps XP/levels"}),_.jsx("button",{onClick:()=>{if(window.confirm("Reset ALL users daily habits? XP and levels stay the same.")){const p=JSON.parse(JSON.stringify(a));n.forEach(g=>{p[g].habits.forEach(w=>{w.type==="checkbox"||w.type==="counter"?(w.completed=!1,w.type==="counter"&&(w.count=0)):w.type==="pomodoro"&&(w.sessionsCompleted=0,w.completed=!1)}),p[g].pomodoro.sessionsToday=0,p[g].pomodoro.dailyXP=0,p[g].stats.completionPercentage=0,M(g,p[g])}),u(p),Je({}),de("✅ Reset all daily habits","success")}},style:{padding:"10px 20px",background:"#4a90e2",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"13px",fontFamily:"inherit"},children:"Reset All Daily Habits"})]}),_.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[_.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:L},children:"🔥 Reset Streaks"}),_.jsx("p",{style:{fontSize:"12px",color:"#999",marginBottom:"15px"},children:"Clears streak counters but keeps best streaks"}),_.jsx("button",{onClick:()=>{if(window.confirm("Reset all current streaks? Best streaks are preserved.")){const p=JSON.parse(JSON.stringify(a));n.forEach(g=>{p[g].habits.forEach(w=>{w.streak=0}),M(g,p[g])}),u(p),de("✅ Reset all streaks","success")}},style:{padding:"10px 20px",background:"#f39c12",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"13px",fontFamily:"inherit"},children:"Reset All Streaks"})]}),_.jsxs("div",{style:{marginBottom:"40px",background:"#1a1a2e",padding:"20px",borderRadius:"12px",border:`2px solid ${L}`},children:[_.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"20px",color:L},children:"⏰ Force Daily Reset"}),_.jsx("p",{style:{fontSize:"12px",color:"#999",marginBottom:"15px"},children:"Manually trigger midnight reset logic"}),_.jsx("button",{onClick:()=>{if(window.confirm("Force daily reset now? Habits will clear and streaks will update.")){R();const p=JSON.parse(JSON.stringify(a));n.forEach(g=>{var w;if(p[g]){const C=new Date;C.setDate(C.getDate()-1);const T=e(C),D=A[T],W=((w=D==null?void 0:D[g])==null?void 0:w.completed)||!1;p[g].habits.forEach(K=>{K.type==="checkbox"||K.type==="counter"?(K.completed=!1,K.type==="counter"&&(K.count=0),W?(K.streak=(K.streak||0)+1,K.bestStreak=Math.max(K.bestStreak||0,K.streak)):K.streak=0):K.type==="pomodoro"&&(K.sessionsCompleted=0,K.completed=!1,W?(K.streak=(K.streak||0)+1,K.bestStreak=Math.max(K.bestStreak||0,K.streak)):K.streak=0)}),p[g].pomodoro.sessionsToday=0,p[g].pomodoro.dailyXP=0,p[g].stats.completionPercentage=0,M(g,p[g])}}),u(p),Je({}),localStorage.setItem("lastResetDate",e()),de("✅ Daily reset forced!","success")}},style:{padding:"10px 20px",background:"#27ae60",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"13px",fontFamily:"inherit"},children:"Force Daily Reset Now"})]}),_.jsxs("div",{style:{background:"#2a1a1a",padding:"20px",borderRadius:"12px",border:"2px solid #ff6b6b"},children:[_.jsx("div",{style:{fontSize:"16px",fontWeight:"bold",marginBottom:"15px",color:"#ff6b6b"},children:"⚠️ Danger Zone"}),_.jsx("button",{onClick:()=>{if(window.confirm("Reset ALL users XP and levels? This cannot be undone!")){const p=JSON.parse(JSON.stringify(a));n.forEach(g=>{p[g].pomodoro.xp=0,p[g].pomodoro.level=1,p[g].pomodoro.dailyXP=0,M(g,p[g])}),u(p),de("✅ Reset all users to Level 1","success")}},style:{padding:"12px 24px",background:"#ff6b6b",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontFamily:"inherit"},children:"Reset All Users"})]})]}),_.jsx("div",{style:{position:"fixed",top:"100px",right:"20px",zIndex:1e4,maxWidth:"350px"},children:S.map(p=>_.jsx("div",{style:{padding:"15px 20px",marginBottom:"10px",background:p.type==="success"?"#2d5f2e":"#2a2547",border:`2px solid ${L}`,borderRadius:"10px",color:L,fontWeight:"bold",fontSize:"14px",animation:"slideIn 0.3s ease-out",boxShadow:`0 4px 20px ${L}40`},children:p.message},p.id))}),_.jsx("style",{children:`
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
      `})]})};function gT(){const[t,e]=Q.useState(null),[n,r]=Q.useState(!0);Q.useEffect(()=>$S(Qu,o=>{e(o),r(!1)}),[]);const i=async()=>{try{await HS(Qu)}catch(s){console.error("Error logging out:",s)}};return n?_.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0f0f1e",color:"#c8b6ff",fontFamily:'"Fredoka One", sans-serif',fontSize:"18px"},children:"Loading..."}):t?_.jsxs("div",{style:{position:"relative"},children:[_.jsx("button",{onClick:i,style:{position:"fixed",top:"20px",right:"20px",padding:"10px 20px",background:"#c8b6ff",color:"#0f0f1e",border:"none",borderRadius:"8px",fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",zIndex:1e3},children:"Logout"}),_.jsx(mT,{user:t})]}):_.jsx(pT,{})}La.createRoot(document.getElementById("root")).render(_.jsx(Xy.StrictMode,{children:_.jsx(gT,{})}));
