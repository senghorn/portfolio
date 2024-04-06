import{s as ne,e as b,a as I,t as Q,c as j,b as E,g as S,d as q,f as g,C as F,m as p,i as B,h as f,j as G,n as J,F as T,H as me,l as de,E as ge,x as U}from"../chunks/scheduler.2dmqLCSc.js";import{S as se,i as re,a as N,c as K,t as V,b as ie,d as ce,m as he,e as ue,g as O}from"../chunks/index.B6OAav6X.js";import{e as z}from"../chunks/each.D6YF6ztN.js";function X(r,l,a){const t=r.slice();return t[1]=l[a],t}function Y(r,l,a){const t=r.slice();return t[4]=l[a],t}function Z(r){let l,a,t=r[4]+"",i,_;return{c(){l=b("span"),a=b("span"),i=Q(t),_=I(),this.h()},l(x){l=j(x,"SPAN",{class:!0});var m=E(l);a=j(m,"SPAN",{class:!0});var k=E(a);i=q(k,t),k.forEach(g),_=S(m),m.forEach(g),this.h()},h(){p(a,"class","ml-1"),p(l,"class","inline-flex items-center m-1 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-xs text-gray-600")},m(x,m){B(x,l,m),f(l,a),f(a,i),f(l,_)},p(x,m){m&1&&t!==(t=x[4]+"")&&G(i,t)},d(x){x&&g(l)}}}function ee(r){let l,a,t=r[1]+"";return{c(){l=b("li"),a=new me(!1),this.h()},l(i){l=j(i,"LI",{class:!0});var _=E(l);a=de(_,!1),_.forEach(g),this.h()},h(){a.a=null,p(l,"class","svelte-ozxba")},m(i,_){B(i,l,_),a.m(t,l)},p(i,_){_&1&&t!==(t=i[1]+"")&&a.p(t)},d(i){i&&g(l)}}}function _e(r){let l,a,t,i,_,x,m,k=r[0].jobPeriod+"",L,M,y,$,D=r[0].companyName+"",w,h,P,C,c=z(r[0].techList),d=[];for(let e=0;e<c.length;e+=1)d[e]=Z(Y(r,c,e));let o=z(r[0].jobDescription),n=[];for(let e=0;e<o.length;e+=1)n[e]=ee(X(r,o,e));return{c(){l=b("div"),a=b("div"),t=b("img"),x=I(),m=b("p"),L=Q(k),M=I(),y=b("div"),$=b("h3"),w=Q(D),h=I(),P=b("div");for(let e=0;e<d.length;e+=1)d[e].c();C=I();for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){l=j(e,"DIV",{class:!0});var u=E(l);a=j(u,"DIV",{class:!0});var s=E(a);t=j(s,"IMG",{src:!0,alt:!0,class:!0}),x=S(s),m=j(s,"P",{class:!0});var v=E(m);L=q(v,k),v.forEach(g),s.forEach(g),M=S(u),y=j(u,"DIV",{class:!0});var H=E(y);$=j(H,"H3",{});var R=E($);w=q(R,D),R.forEach(g),h=S(H),P=j(H,"DIV",{class:!0});var W=E(P);for(let A=0;A<d.length;A+=1)d[A].l(W);W.forEach(g),C=S(H);for(let A=0;A<n.length;A+=1)n[A].l(H);H.forEach(g),u.forEach(g),this.h()},h(){F(t.src,i=r[0].companyLogo)||p(t,"src",i),p(t,"alt",_=r[0].companyName),p(t,"class","svelte-ozxba"),p(m,"class","svelte-ozxba"),p(a,"class","job-timeline svelte-ozxba"),p(P,"class","p-1"),p(y,"class","job-description svelte-ozxba"),p(l,"class","job svelte-ozxba")},m(e,u){B(e,l,u),f(l,a),f(a,t),f(a,x),f(a,m),f(m,L),f(l,M),f(l,y),f(y,$),f($,w),f(y,h),f(y,P);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(P,null);f(y,C);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(y,null)},p(e,[u]){if(u&1&&!F(t.src,i=e[0].companyLogo)&&p(t,"src",i),u&1&&_!==(_=e[0].companyName)&&p(t,"alt",_),u&1&&k!==(k=e[0].jobPeriod+"")&&G(L,k),u&1&&D!==(D=e[0].companyName+"")&&G(w,D),u&1){c=z(e[0].techList);let s;for(s=0;s<c.length;s+=1){const v=Y(e,c,s);d[s]?d[s].p(v,u):(d[s]=Z(v),d[s].c(),d[s].m(P,null))}for(;s<d.length;s+=1)d[s].d(1);d.length=c.length}if(u&1){o=z(e[0].jobDescription);let s;for(s=0;s<o.length;s+=1){const v=X(e,o,s);n[s]?n[s].p(v,u):(n[s]=ee(v),n[s].c(),n[s].m(y,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=o.length}},i:J,o:J,d(e){e&&g(l),T(d,e),T(n,e)}}}function pe(r,l,a){let{job:t}=l;return r.$$set=i=>{"job"in i&&a(0,t=i.job)},[t]}class fe extends se{constructor(l){super(),re(this,l,pe,_e,ne,{job:0})}}function te(r,l,a){const t=r.slice();return t[2]=l[a],t}function le(r,l,a){const t=r.slice();return t[5]=l[a],t}function ae(r){let l,a;return l=new fe({props:{job:r[5]}}),{c(){ie(l.$$.fragment)},l(t){ce(l.$$.fragment,t)},m(t,i){he(l,t,i),a=!0},p:J,i(t){a||(N(l.$$.fragment,t),a=!0)},o(t){V(l.$$.fragment,t),a=!1},d(t){ue(l,t)}}}function oe(r){let l,a;return l=new fe({props:{job:r[2]}}),{c(){ie(l.$$.fragment)},l(t){ce(l.$$.fragment,t)},m(t,i){he(l,t,i),a=!0},p:J,i(t){a||(N(l.$$.fragment,t),a=!0)},o(t){V(l.$$.fragment,t),a=!1},d(t){ue(l,t)}}}function ve(r){let l,a,t,i,_="🧑🏻‍💻 Professional",x,m,k,L,M="👷🏻‍♂️ Project",y,$,D,w=z(r[0]),h=[];for(let o=0;o<w.length;o+=1)h[o]=ae(le(r,w,o));const P=o=>V(h[o],1,1,()=>{h[o]=null});let C=z(r[1]),c=[];for(let o=0;o<C.length;o+=1)c[o]=oe(te(r,C,o));const d=o=>V(c[o],1,1,()=>{c[o]=null});return{c(){l=b("meta"),a=I(),t=b("div"),i=b("h1"),i.textContent=_,x=I(),m=b("div");for(let o=0;o<h.length;o+=1)h[o].c();k=I(),L=b("h1"),L.textContent=M,y=I(),$=b("div");for(let o=0;o<c.length;o+=1)c[o].c();this.h()},l(o){const n=ge("svelte-7uiy7e",document.head);l=j(n,"META",{name:!0,content:!0}),n.forEach(g),a=S(o),t=j(o,"DIV",{class:!0});var e=E(t);i=j(e,"H1",{"data-svelte-h":!0}),U(i)!=="svelte-eoav6e"&&(i.textContent=_),x=S(e),m=j(e,"DIV",{class:!0});var u=E(m);for(let v=0;v<h.length;v+=1)h[v].l(u);u.forEach(g),k=S(e),L=j(e,"H1",{"data-svelte-h":!0}),U(L)!=="svelte-16i7rzk"&&(L.textContent=M),y=S(e),$=j(e,"DIV",{class:!0});var s=E($);for(let v=0;v<c.length;v+=1)c[v].l(s);s.forEach(g),e.forEach(g),this.h()},h(){document.title="Work",p(l,"name","description"),p(l,"content","Showcasing my coding works both professional and academic."),p(m,"class","job-list svelte-9rf6bz"),p($,"class","job-list svelte-9rf6bz"),p(t,"class","p-8 mx-auto w-full max-w-screen-lg sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl")},m(o,n){f(document.head,l),B(o,a,n),B(o,t,n),f(t,i),f(t,x),f(t,m);for(let e=0;e<h.length;e+=1)h[e]&&h[e].m(m,null);f(t,k),f(t,L),f(t,y),f(t,$);for(let e=0;e<c.length;e+=1)c[e]&&c[e].m($,null);D=!0},p(o,[n]){if(n&1){w=z(o[0]);let e;for(e=0;e<w.length;e+=1){const u=le(o,w,e);h[e]?(h[e].p(u,n),N(h[e],1)):(h[e]=ae(u),h[e].c(),N(h[e],1),h[e].m(m,null))}for(O(),e=w.length;e<h.length;e+=1)P(e);K()}if(n&2){C=z(o[1]);let e;for(e=0;e<C.length;e+=1){const u=te(o,C,e);c[e]?(c[e].p(u,n),N(c[e],1)):(c[e]=oe(u),c[e].c(),N(c[e],1),c[e].m($,null))}for(O(),e=C.length;e<c.length;e+=1)d(e);K()}},i(o){if(!D){for(let n=0;n<w.length;n+=1)N(h[n]);for(let n=0;n<C.length;n+=1)N(c[n]);D=!0}},o(o){h=h.filter(Boolean);for(let n=0;n<h.length;n+=1)V(h[n]);c=c.filter(Boolean);for(let n=0;n<c.length;n+=1)V(c[n]);D=!1},d(o){o&&(g(a),g(t)),g(l),T(h,o),T(c,o)}}}function be(r){return[[{companyName:"Qnergy Inc.",companyLogo:"qnergy-logo.png",jobPeriod:"June 2023-Feb 2024",techList:["React.js","Node.js","Express.js","MongoDB","Linux"],jobDescription:["Built email notification feature to alert user about their subscription","Developed test automation project using Playwright framework",`Implemented <span class="highlight">security CAPTCHA</span> and <span class="highlight">device cookies</span>, which detected hundreds of bot-like login attempts using Google's reCaptcha V3 API`]},{companyName:"University of Utah",companyLogo:"u-logo.jpg",jobPeriod:"May 2022-Aug 2023",techList:["Java","Selenium","MySQL","HTML","CSS","JavaScript","Git","Docker","Linux","Windows"],jobDescription:["Created, maintained, and updated existing Java Selenium Test applications","Refined Web Application for test result tracker which improved data storage and retrieval using MySQL"]}],[{companyName:"CareCoord",companyLogo:"carecoord.png",jobPeriod:"Aug 2022-May 2023",techList:["ReactNative","Node.js","Express.js","MySQL","Docker"],jobDescription:["Built real-time group messaging feature","Implemented user authentication flow in both frontend and backend","Coordinate with team to put together full-stack mobile application"]}]]}class $e extends se{constructor(l){super(),re(this,l,be,ve,ne,{})}}export{$e as component};