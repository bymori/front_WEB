import{o as i,c as a,t as u,l as d,a as p}from"./vendor.4d8c8edf.js";const f=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}};f();function m(r,t){return r+t}function _(r,t){return r*t}var g=(r,t)=>{for(const[l,n]of t)r[l]=n;return r};const y={data(){return{msg:"Hello App"}}};function v(r,t,l,n,e,o){return i(),a("h2",null,u(e.msg),1)}var h=g(y,[["render",v],["__scopeId","data-v-49361eb5"]]);console.log("hello world vite");console.log(m(20,30));console.log(_(5,6));console.log(d.join(["abc","nba"],"-"));const c=document.createElement("div");c.className="title";c.innerHTML="Hello Vite";document.body.appendChild(c);p(h).mount("#app");
