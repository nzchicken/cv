(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),i=n.n(a),o=n(146),r=o.a.header.withConfig({displayName:"Header__Container",componentId:"sc-1s8zzr6-0"})(["position:fixed;top:0;height:100px;width:100%;z-index:9999;background:#d9e2e1;"]),l=o.a.div.withConfig({displayName:"Header__Title",componentId:"sc-1s8zzr6-1"})(["margin-top:0.5em;font-weight:bold;font-size:1.2em;"]),m=o.a.div.withConfig({displayName:"Header__Subtitle",componentId:"sc-1s8zzr6-2"})(["background:linear-gradient( 270deg,rgba(0,0,0,0) 180px,rgba(0,0,0,100) 220px );-webkit-background-clip:text;-webkit-text-fill-color:transparent;color:transparent;background-clip:text;white-space:nowrap;overflow:hidden;font-size:0.8em;"]),d=o.a.div.withConfig({displayName:"Header__ContactDetails",componentId:"sc-1s8zzr6-3"})(["position:absolute;top:0.5em;right:0;text-align:right;"]),c=o.a.div.withConfig({displayName:"Header__ContactPhone",componentId:"sc-1s8zzr6-4"})([""]),p=o.a.div.withConfig({displayName:"Header__ContactEmail",componentId:"sc-1s8zzr6-5"})([""]),s=function(e){var t=e.title,n=e.subtitle,a=e.phone,o=e.email;return i.a.createElement(r,null,i.a.createElement(x,null,i.a.createElement(l,null,t),i.a.createElement(m,null,n),i.a.createElement(d,null,i.a.createElement(c,null,a),i.a.createElement(p,null,o))))},u=n(208),h=n.n(u),g={title:"CV for great victory",contact:{title:"Ben Naylor",subtitle:"Professional Code Monkey, General Enthusiast",email:"nayben@gmail.com",phone:"+31 6 1427 2332"}},f=o.a.div.withConfig({displayName:"Layout__Body",componentId:"edudls-0"})(["background:linear-gradient( 180deg,#d9e2e1 0%,#f5f5f5 100% );"]),w=function(e){var t=e.children;return i.a.createElement(f,null,i.a.createElement(h.a,{title:g.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),i.a.createElement(s,g.contact),i.a.createElement(x,{marginTop:"80px"},t))},x=o.a.div.withConfig({displayName:"PageContainer",componentId:"sc-1e1zf7i-0"})(["margin-top:",";position:relative;margin-left:","%;width:","%;overflow:auto;@media (max-width:768px){margin-left:8px;width:calc(100% - 16px);}@media (min-width:768px) and (max-width:1200px){margin-left:","%;width:calc(100% - ","%);}"],function(e){return e.marginTop||"0px"},14.589794459467125,.618033*100,7.294897229733563,23.60676889863497),y=o.a.div.withConfig({displayName:"Section__Container",componentId:"sc-7o27o9-0"})(["position:relative;padding:0 50px 0 60px;overflow:auto;margin-bottom:3em;background:",";@media (max-width:768px){padding:0px 16px 0px 24px;}"],function(e){return e.color}),_=o.a.div.withConfig({displayName:"Section__Bar",componentId:"sc-7o27o9-1"})(["position:absolute;left:0;top:0;width:12px;height:100%;background:",";@media (max-width:768px){width:8px;}"],function(e){return e.color}),b=o.a.h1.withConfig({displayName:"Section__Heading",componentId:"sc-7o27o9-2"})([" "]),k=function(e){var t=e.title,n=e.html,a=e.color,o=e.backcolor,r=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,{color:o},i.a.createElement(_,{color:a}),i.a.createElement(b,null,t),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),r))},v=n(216),E=o.a.div.withConfig({displayName:"WorkHistory__Container",componentId:"sc-1mk92hm-0"})(["position:relative;padding-left:0.5em;"]),C=o.a.div.withConfig({displayName:"WorkHistory__Bar",componentId:"sc-1mk92hm-1"})(["position:absolute;left:-48px;top:0;width:12px;height:100%;background-color:#9eb5ff;border-radius:0px 12px 12px 0px;@media (max-width:768px){width:8px;left:-16px;border-radius:0px 8px 8px 0px;}"]),I=o.a.div.withConfig({displayName:"WorkHistory__HeadingWrapper",componentId:"sc-1mk92hm-2"})([""]),N=o.a.h3.withConfig({displayName:"WorkHistory__Company",componentId:"sc-1mk92hm-3"})(["display:inline-block;font-style:italic;margin-top:0.8em;"]),H=o.a.div.withConfig({displayName:"WorkHistory__Separator",componentId:"sc-1mk92hm-4"})(["display:inline-block;padding:0px 5px;&:before{font-size:1.3em;content:'//';}"]),z=o.a.h3.withConfig({displayName:"WorkHistory__JobTitle",componentId:"sc-1mk92hm-5"})(["display:inline-block;margin-top:0.8em;"]),M=o.a.div.withConfig({displayName:"WorkHistory__Duration",componentId:"sc-1mk92hm-6"})(["margin-bottom:0.8em;"]),W=function(e){var t=e.html,n=e.company,a=e.title,o=e.timeFrom,r=e.timeTo;return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,null,i.a.createElement(C,null),i.a.createElement(I,null,i.a.createElement(z,null,a),i.a.createElement(H,null),i.a.createElement(N,null,n)),i.a.createElement(M,null,Object(v.format)(o,"MMM 'YY")," - ",null==r?"Present":Object(v.format)(r,"MMM 'YY")),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))};n.d(t,"query",function(){return T});var S=o.a.div.withConfig({displayName:"pages__Container",componentId:"ifild7-0"})(["width:100%;"]),T=(t.default=function(e){var t=e.data;return i.a.createElement(w,null,i.a.createElement(S,null,t.posts.edges.map(function(e,n){var a=e.node;return i.a.createElement(k,Object.assign({key:n,html:a.html},a.frontmatter),"experience"===a.frontmatter.content&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Work History"),t.experience.edges.map(function(e,t){var n=e.node;return i.a.createElement(W,Object.assign({key:t},n.frontmatter,{html:n.html}))})))})))},"132833293")}}]);
//# sourceMappingURL=component---src-pages-index-js-cbe383505a0e0a909863.js.map