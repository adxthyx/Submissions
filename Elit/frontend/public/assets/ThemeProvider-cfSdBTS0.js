import{g as f}from"./__commonjsHelpers__-4gQjN7DL.js";import{r as i}from"./index-XyfsBjoy.js";var c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(r){(function(){var o={}.hasOwnProperty;function s(){for(var t="",n=0;n<arguments.length;n++){var e=arguments[n];e&&(t=p(t,u(e)))}return t}function u(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return s.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var n="";for(var e in t)o.call(t,e)&&t[e]&&(n=p(n,e));return n}function p(t,n){return n?t?t+" "+n:t+n:t}r.exports?(s.default=s,r.exports=s):window.classNames=s})()})(c);var x=c.exports;const b=f(x),m=["xxl","xl","lg","md","sm","xs"],l="xs",a=i.createContext({prefixes:{},breakpoints:m,minBreakpoint:l});function v(r,o){const{prefixes:s}=i.useContext(a);return r||s[o]||o}function y(){const{breakpoints:r}=i.useContext(a);return r}function A(){const{minBreakpoint:r}=i.useContext(a);return r}export{y as a,A as b,b as c,v as u};
