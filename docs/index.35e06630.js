function e(e,n,i,t){Object.defineProperty(e,n,{get:i,set:t,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var i=globalThis,t={},r={},a=i.parcelRequire85b2;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},i.parcelRequire85b2=a),(0,a.register)("27Lyk",function(n,i){e(n.exports,"register",()=>t,e=>t=e);var t,r=new Map;t=function(e,n){for(var i=0;i<n.length-1;i+=2)r.set(n[i],{baseUrl:e,path:n[i+1]})}}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["l1gf1","index.35e06630.js","drtLC","gruener-migrationsbeirat-muenchen.2a4f8901.webp","7ZUdH","migrationsbeirat.48670c2b.jpg","jEpl6","Emily-Wachelka-Migrationsbeirat.3bd112ed.webp","lUEVa","Emily-Wachelka-Migrationsbeirat.5bf04b7c.jpg","hZBmc","Tina-Garway-Migrationsbeirat.46c98b92.webp","eTi2p","Tina-Garway-Migrationsbeirat.46d9aa44.jpg","cmpbf","Matu-Mbala-Migrationsbeirat.64343cd7.webp","lBrOV","Matu-Mbala-Migrationsbeirat.562d4331.jpg","bT4uY","Carmen-Romano-Migrationsbeirat.971b0701.webp","j2Z8q","Carmen-Romano-Migrationsbeirat.486e0b8c.jpg","ccZjD","Bakir-Lemes-Migrationsbeirat.98dd1aa0.webp","7e3Wx","Bakir-Lemes-Migrationsbeirat.6f72f58e.jpg"]'));var s={};s=function(){/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,n=Array.isArray||function(n){return"[object Array]"===e.call(n)};function i(e){return"function"==typeof e}function t(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function r(e,n){return null!=e&&"object"==typeof e&&n in e}var a=RegExp.prototype.test,s=/\S/,l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},o=/\s*/,u=/\s+/,c=/\s*=/,d=/\s*\}/,g=/#|\^|\/|>|\{|&|=|!/;function h(e){this.string=e,this.tail=e,this.pos=0}function m(e,n){this.view=e,this.cache={".":this.view},this.parent=n}function p(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}h.prototype.eos=function(){return""===this.tail},h.prototype.scan=function(e){var n=this.tail.match(e);if(!n||0!==n.index)return"";var i=n[0];return this.tail=this.tail.substring(i.length),this.pos+=i.length,i},h.prototype.scanUntil=function(e){var n,i=this.tail.search(e);switch(i){case -1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,i),this.tail=this.tail.substring(i)}return this.pos+=n.length,n},m.prototype.push=function(e){return new m(e,this)},m.prototype.lookup=function(e){var n=this.cache;if(n.hasOwnProperty(e))s=n[e];else{for(var t,a,s,l,o,u,c=this,d=!1;c;){if(e.indexOf(".")>0)for(l=c.view,o=e.split("."),u=0;null!=l&&u<o.length;)u===o.length-1&&(d=r(l,o[u])||(t=l,a=o[u],null!=t&&"object"!=typeof t&&t.hasOwnProperty&&t.hasOwnProperty(a))),l=l[o[u++]];else l=c.view[e],d=r(c.view,e);if(d){s=l;break}c=c.parent}n[e]=s}return i(s)&&(s=s.call(this.view)),s},p.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},p.prototype.parse=function(e,i){var r=this.templateCache,l=e+":"+(i||f.tags).join(":"),m=void 0!==r,p=m?r.get(l):void 0;return void 0==p&&(p=function(e,i){if(!e)return[];var r,l,m,p,b,v,k,w,M,S=!1,y=[],E=[],A=[],R=!1,L=!1,F="",U=0;function H(){if(R&&!L)for(;A.length;)delete E[A.pop()];else A=[];R=!1,L=!1}function _(e){if("string"==typeof e&&(e=e.split(u,2)),!n(e)||2!==e.length)throw Error("Invalid tags: "+e);r=RegExp(t(e[0])+"\\s*"),l=RegExp("\\s*"+t(e[1])),m=RegExp("\\s*"+t("}"+e[1]))}_(i||f.tags);for(var W=new h(e);!W.eos();){if(p=W.pos,v=W.scanUntil(r))for(var z,B=0,D=v.length;B<D;++B){;(z=k=v.charAt(B),a.call(s,z))?(L=!0,S=!0,F+=" "):(A.push(E.length),F+=k),E.push(["text",k,p,p+1]),p+=1,"\n"===k&&(H(),F="",U=0,S=!1)}if(!W.scan(r))break;if(R=!0,b=W.scan(g)||"name",W.scan(o),"="===b?(v=W.scanUntil(c),W.scan(c),W.scanUntil(l)):"{"===b?(v=W.scanUntil(m),W.scan(d),W.scanUntil(l),b="&"):v=W.scanUntil(l),!W.scan(l))throw Error("Unclosed tag at "+W.pos);if(w=">"==b?[b,v,p,W.pos,F,U,S]:[b,v,p,W.pos],U++,E.push(w),"#"===b||"^"===b)y.push(w);else if("/"===b){if(!(M=y.pop()))throw Error('Unopened section "'+v+'" at '+p);if(M[1]!==v)throw Error('Unclosed section "'+M[1]+'" at '+p)}else"name"===b||"{"===b||"&"===b?L=!0:"="===b&&_(v)}if(H(),M=y.pop())throw Error('Unclosed section "'+M[1]+'" at '+W.pos);return function(e){for(var n,i=[],t=i,r=[],a=0,s=e.length;a<s;++a)switch((n=e[a])[0]){case"#":case"^":t.push(n),r.push(n),t=n[4]=[];break;case"/":r.pop()[5]=n[2],t=r.length>0?r[r.length-1][4]:i;break;default:t.push(n)}return i}(function(e){for(var n,i,t=[],r=0,a=e.length;r<a;++r)(n=e[r])&&("text"===n[0]&&i&&"text"===i[0]?(i[1]+=n[1],i[3]=n[3]):(t.push(n),i=n));return t}(E))}(e,i),m&&r.set(l,p)),p},p.prototype.render=function(e,n,i,t){var r=this.getConfigTags(t),a=this.parse(e,r),s=n instanceof m?n:new m(n,void 0);return this.renderTokens(a,s,i,e,t)},p.prototype.renderTokens=function(e,n,i,t,r){for(var a,s,l,o="",u=0,c=e.length;u<c;++u)l=void 0,"#"===(s=(a=e[u])[0])?l=this.renderSection(a,n,i,t,r):"^"===s?l=this.renderInverted(a,n,i,t,r):">"===s?l=this.renderPartial(a,n,i,r):"&"===s?l=this.unescapedValue(a,n):"name"===s?l=this.escapedValue(a,n,r):"text"===s&&(l=this.rawValue(a)),void 0!==l&&(o+=l);return o},p.prototype.renderSection=function(e,t,r,a,s){var l=this,o="",u=t.lookup(e[1]);if(u){if(n(u))for(var c=0,d=u.length;c<d;++c)o+=this.renderTokens(e[4],t.push(u[c]),r,a,s);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)o+=this.renderTokens(e[4],t.push(u),r,a,s);else if(i(u)){if("string"!=typeof a)throw Error("Cannot use higher-order sections without the original template");null!=(u=u.call(t.view,a.slice(e[3],e[5]),function(e){return l.render(e,t,r,s)}))&&(o+=u)}else o+=this.renderTokens(e[4],t,r,a,s);return o}},p.prototype.renderInverted=function(e,i,t,r,a){var s=i.lookup(e[1]);if(!s||n(s)&&0===s.length)return this.renderTokens(e[4],i,t,r,a)},p.prototype.indentPartial=function(e,n,i){for(var t=n.replace(/[^ \t]/g,""),r=e.split("\n"),a=0;a<r.length;a++)r[a].length&&(a>0||!i)&&(r[a]=t+r[a]);return r.join("\n")},p.prototype.renderPartial=function(e,n,t,r){if(t){var a=this.getConfigTags(r),s=i(t)?t(e[1]):t[e[1]];if(null!=s){var l=e[6],o=e[5],u=e[4],c=s;0==o&&u&&(c=this.indentPartial(s,u,l));var d=this.parse(c,a);return this.renderTokens(d,n,t,c,r)}}},p.prototype.unescapedValue=function(e,n){var i=n.lookup(e[1]);if(null!=i)return i},p.prototype.escapedValue=function(e,n,i){var t=this.getConfigEscape(i)||f.escape,r=n.lookup(e[1]);if(null!=r)return"number"==typeof r&&t===f.escape?String(r):t(r)},p.prototype.rawValue=function(e){return e[1]},p.prototype.getConfigTags=function(e){return n(e)?e:e&&"object"==typeof e?e.tags:void 0},p.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!n(e)?e.escape:void 0};var f={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(cache){b.templateCache=cache},get templateCache(){return b.templateCache}},b=new p;return f.clearCache=function(){return b.clearCache()},f.parse=function(e,n){return b.parse(e,n)},f.render=function(e,i,t,r){if("string"!=typeof e)throw TypeError('Invalid template! Template should be a "string" but "'+(n(e)?"array":typeof e)+'" was given as the first argument for mustache#render(template, view, partials)');return b.render(e,i,t,r)},f.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,function(e){return l[e]})},f.Scanner=h,f.Context=m,f.Writer=p,f}();var l={};l="{{> header }}\n{{> main }}\n{{> footer }}\n";var o={};e(o,"footer",()=>n(u)),e(o,"header",()=>n(c)),e(o,"main",()=>n(d)),e(o,"members",()=>n(g)),e(o,"social",()=>n(h));var u={};u='<footer>\n  <div class="engage">\n    {{> social}}\n  </div>\n  <div class="legal">\n    <ul>\n      <li><a href="mailto:{{links.mailto}}">{{links.mailto}}</a></li>\n      <li><a href="{{links.imprint}}">{{i18n.imprint}}</a></li>\n    </ul>\n  </div>\n</footer>\n';var c={};c='<header>\n  <div class="content">\n    <a href="{{links.home}}">\n      <img class="logo" src="{{images.logo}}" alt="Logo" />\n      <span class="title">{{i18n.title}}</span>\n    </a>\n    <div class="actions">\n      <select class="language">\n        {{#header.languages}}\n          <option value="{{value}}"{{#selected}} selected{{/selected}}>{{label}}</option>\n        {{/header.languages}}\n      </select>\n    </div>\n  </div>\n</header>\n';var d={};d="<main></main>\n";var g={};g='<section class="members">\n  <ul>\n    {{#main.members}}\n      <li>\n        <figure>\n          <a href="{{link}}" aria-label="{{name}}"><img src="" data-src="{{image}}" alt="{{name}}" class="bordered"></a>\n          <figcaption>\n            <a href="{{link}}">{{name}}</a>\n          </figcaption>\n        </figure>\n      </li>\n    {{/main.members}}\n  </ul>\n</section>\n';var h={};h='<ul class="social">\n  <li><a href="{{links.facebook}}" target="_blank" class="facebook">facebook</a></li>\n  <li><a href="{{links.instagram}}" target="_blank" class="instagram">instagram</a></li>\n</ul>\n';const m=()=>{let{pathname:e}=window.location,n=e.match(/^\/(en|de)/);return n&&"en"===n[1]?"enUS":"deDE"},p={deDE:{title:"Grüner Migrationsbeirat München",origin:"Herkunftsland",languages:"Sprachen",functions:"Funktionen innerhalb des Migrationsbeirats",responsibilities:"Zuständigkeiten innerhalb der Fraktion",focusOfWork:"Arbeitsschwerpunkt",imprint:"Impressum"},enUS:{title:"Green Migration Advisory Board Munich",origin:"Country of origin",languages:"Languages",functions:"Functions within the Migration Advisory Board",responsibilities:"Responsibilities within the group",focusOfWork:"Focus of work",imprint:"Imprint"}},f=()=>{let e=m();return"deDE"===e?"":`/${e.substring(0,2)}`};var b={};b=new URL("gruener-migrationsbeirat-muenchen.2a4f8901.webp",import.meta.url).toString();var v={};v=new URL("migrationsbeirat.48670c2b.jpg",import.meta.url).toString();class k{constructor(e){let n=m();this.data={template:e.template,page:{head:e.page.head,main:e.page.main,header:{languages:[{value:"de",label:"Deutsch",selected:n.startsWith("de")},{value:"en",label:"English",selected:n.startsWith("en")}]},footer:{},images:{logo:new URL(b).toString()},links:{instagram:"https://instagram.com/gruennahes_vielfaltsbuendnis?igshid=NGVhN2U2NjQ0Yg==",facebook:"https://www.facebook.com/profile.php?id=100089455185993",mailto:"info@gmbmuc.de",imprint:`${f()}/impressum`,home:`${f()}/`},i18n:p[this.getLanguage()]}}}attachObservers(){let e=new IntersectionObserver(([e])=>{let n=e.intersectionRatio<1;e.target.classList.toggle("pinned",n),n&&this.loadImages()},{threshold:[1]}),n=document.querySelector("header");n&&e.observe(n)}loadImages(){document.querySelectorAll('img[src=""]').forEach(e=>{let n=e.dataset.src;n&&(e.setAttribute("src",n),e.style.display="block")})}attachListeners(){window.addEventListener("resize",()=>{this.applyLayout()}),document.body.addEventListener("scroll",()=>{console.log("s",document.body.scrollTop)},{passive:!0})}attachEvents(){document.querySelectorAll("select.language").forEach(e=>{e.addEventListener("change",e=>{let{value:n}=e.target,i=document.location.pathname.replace(/^\/(|de|en|it)$/,`/${"de"===n?"":n}`);document.location.href=i.replace(/^\/(de|en|it)\//,`/${"de"===n?"":n}/`)})})}getLanguage(){return m()}applyLayout(){let e=window.innerHeight,n=window.innerWidth;document.body.classList.toggle("xs",n<375),document.body.classList.toggle("mobile",n>=375&&n<480),document.body.classList.toggle("tablet",n>=480&&n<768),document.body.classList.toggle("desktop",n>=768),e>1024&&this.loadImages()}setTitle(e){let n=document.head.querySelector("title");if(n){let i=p[this.getLanguage()].title,t=e?`${e} :: ${i}`:i;n.innerHTML=t;let r=document.head.querySelector('meta[property="og:title"]');r?.setAttribute("content",t.replace("::","☀"))}}setDescription(e){let n=document.head.querySelector('meta[name="description"]');n&&n.setAttribute("content",e)}setUrl(e){let n=document.head.querySelector('meta[property="og:url"]');n?.setAttribute("content",e||document.location.href)}setImage(e){let n=document.head.querySelector('meta[property="og:image"]'),i=new URL(v).toString();n?.setAttribute("content",e||i)}async render(){let{template:e,page:i}=this.data;this.setTitle(i.head.title),this.setDescription(i.head.description),this.setUrl(i.head.url),this.setImage(i.head.image),document.body.innerHTML=n(s).render(n(l),i,o),document.body.querySelectorAll("main").forEach(t=>{let r=document.createElement("article");r.innerHTML=n(s).render(e,i,o),t.append(r)}),this.applyLayout(),this.attachListeners(),this.attachObservers(),this.attachEvents()}}var w={};w=new URL("Emily-Wachelka-Migrationsbeirat.3bd112ed.webp",import.meta.url).toString();var M={};M=new URL("Emily-Wachelka-Migrationsbeirat.5bf04b7c.jpg",import.meta.url).toString();var S={};S=new URL("Tina-Garway-Migrationsbeirat.46c98b92.webp",import.meta.url).toString();var y={};y=new URL("Tina-Garway-Migrationsbeirat.46d9aa44.jpg",import.meta.url).toString();var E={};E=new URL("Matu-Mbala-Migrationsbeirat.64343cd7.webp",import.meta.url).toString();var A={};A=new URL("Matu-Mbala-Migrationsbeirat.562d4331.jpg",import.meta.url).toString();var R={};R=new URL("Carmen-Romano-Migrationsbeirat.971b0701.webp",import.meta.url).toString();var L={};L=new URL("Carmen-Romano-Migrationsbeirat.486e0b8c.jpg",import.meta.url).toString();var F={};F=new URL("Bakir-Lemes-Migrationsbeirat.98dd1aa0.webp",import.meta.url).toString();var U={};U=new URL("Bakir-Lemes-Migrationsbeirat.6f72f58e.jpg",import.meta.url).toString();const H={emily:{name:"Emily Wachelka",image:new URL(w).toString(),ogImage:new URL(M).toString()},tina:{name:"Tina Garway",image:new URL(S).toString(),ogImage:new URL(y).toString()},matu:{name:"Matu Mbala",image:new URL(E).toString(),ogImage:new URL(A).toString()},carmen:{name:"Carmen Romano",image:new URL(R).toString(),ogImage:new URL(L).toString()},bakir:{name:"Bakir Lemes",image:new URL(F).toString(),ogImage:new URL(U).toString()}},_={deDE:{emily:{head:{title:"Emily Wachelka",description:"Stimmberechtigtes Mitglied im Ausschuss 1 für Bildung, Erziehung, Kinder und Jugend."},info:{origin:"USA",languages:"Englisch, Deutsch, Italienisch, ein bisschen Spanisch",functions:{list:["Stimmberechtigtes Mitglied im Ausschuss 1 für Bildung, Erziehung, Kinder und Jugend","Beratendes Mitglied in Ausschuss 4 (Ausschuss für Aufenthalts- und Zuwanderungsrecht mit Rassismus,Diskriminierung und Flüchtlingspolitik)","Beratendes Mitglied in Ausschuss 5 (Arbeit, Wirtschaft, Umwelt, Stadtplanung)","Sprecherin der Kommission für die Zukunft des Beirats"]},responsibilities:{list:["Co-Sprecherin zusammen mit Carmen Romano, insbesondere zuständig für die Zusammenarbeit innerhalb des Migrationsbeirats mit der Fraktion, mit anderen progressiven Kräften und auch mit den übrigen Mitgliedern im Beirat.","Co-Betreuerin der Öffentlichkeitsarbeit der Liste"]}}},tina:{head:{title:"Tina Garway",description:"Sprecherin des Ausschusses für Aufenthalts- und Zuwanderungsrecht mit Rassismus, Diskriminierung und Flüchtlingspolitik und somit Mitglied des Erweiterten Vorstandes."},info:{languages:"Englisch, Italienisch, Deutsch, Französisch",origin:"Liberia",functions:{list:["Sprecherin des Ausschusses für Aufenthalts- und Zuwanderungsrecht mit Rassismus, Diskriminierung und Flüchtlingspolitik und somit Mitglied des Erweiterten Vorstandes","Beratendes Mitglied des Ausschusses für Soziales, Gesundheit und Frauenangelegenheiten"]},focusOfWork:{list:["Vielfaltsorientierte und Diskriminierungskritische Bildungsarbeit / – Organisationsentwicklung","Empowerment von BIPoC"]}}},carmen:{head:{title:"Carmen Romano",description:"Mitglied im Ausschuss für Zuschussvergaben und Ausschuss 4 (Ausschuss für Aufenthalts- und Zuwanderungsrecht mit Rassismus,Diskriminierung und Flüchtlingspolitik)."},info:{languages:"Italienisch, Deutsch, Englisch, ein bisschen Spanisch",origin:"Italien",functions:{list:["Mitglied im Ausschuss für Zuschussvergaben und Ausschuss 4 (Ausschuss für Aufenthalts- und Zuwanderungsrecht mit Rassismus,Diskriminierung und Flüchtlingspolitik)","Leiterin der Arbeitsgruppe „Diskriminierung auf dem Wohnungsmarkt“"]},responsibilities:{list:["Co-Sprecherin zusammen mit Emily Wachelka, insbesondere zuständig für die Zusammenarbeit außerhalb des Migrationsbeirates mit unterschiedlichen Parteieingliederungen, weitere Migrantischen Organisationen usw.","Co-Betreuerin der Öffentlichkeitsarbeit der Liste"]}}},bakir:{head:{title:"Bakir Lemes",description:"Bakir studiert Politikwissenschaften an der TU München. Er arbeitet bei PwC und ist Mitglied des Europäischen Jugendparlaments. Er ist Sprecher des AK für Migration und Flucht der Grünen München und Ortsvertreter der Grünen Jugend München Mitte / West.  Seit 2017 ist München seine Heimat."},info:{about:"Bakir studiert Politikwissenschaften an der TU München. Er arbeitet bei PwC und ist Mitglied des Europäischen Jugendparlaments. Er ist Sprecher des AK für Migration und Flucht der Grünen München und Ortsvertreter der Grünen Jugend München Mitte / West.  Seit 2017 ist München seine Heimat.",languages:"Bosnisch, Deutsch, Englisch, Hebräisch",origin:"Bosnien und Herzegowina",functions:{list:["Stimmberechtigtes Mitglied im Ausschuss für Aufenthalts- und Zuwanderungsrecht mit Rassismus,Diskriminierung und Flüchtlingspolitik","Beratendes Mitglied im Ausschuss für Arbeit und Wirtschaft, Stadtplanung, Mobilität und Umwelt","Sowie im Ausschuss für Bildung und Erziehung, Kinder, Jugend und Familie"]}}},matu:{head:{title:"Matu Mbala",description:"Matu arbeitet für die Landeshauptstadt München, Sozialreferat, und ist Mitglied im Bezirksausschuss Schwabing West. Stadtplanung, Umwelt, Wirtschaft, Sport und Freizeit sind seine Interessensgebiete."},info:{about:"Matu arbeitet für die Landeshauptstadt München, Sozialreferat, und ist Mitglied im Bezirksausschuss Schwabing West. Stadtplanung, Umwelt, Wirtschaft, Sport und Freizeit sind seine Interessensgebiete.",languages:"Deutsch, Englisch, Italienisch, Grundkenntnisse Katalanisch",origin:"Italien",functions:{list:["Stimmberechtigtes Mitglied im Ausschuss A5 – Arbeit, Wirtschaft, Stadtplanung, Mobilität und Umwelt"]}}}},enUS:{emily:{head:{title:"Emily Wachelka",description:""},info:{languages:"English"}},tina:{head:{title:"Tina Garway",description:""},info:{languages:"English"}},carmen:{head:{title:"Carmen Romano",description:""},info:{languages:"English"}},bakir:{head:{title:"Bakir Lemes",description:""},info:{languages:"English"}},matu:{head:{title:"Matu Mbala",description:""},info:{languages:"English"}}}};var W={};W='{{#main}}\n\n  <h1>{{name}}</h1>\n\n  <img src="{{image}}" alt="{{name}}" class="member bordered" />\n\n  {{#info}}\n    {{#about}}\n      <p class="about">{{about}}</p>\n    {{/about}}\n\n    {{#languages}}\n      <h2>{{i18n.languages}}:</h2>\n      {{languages}}\n    {{/languages}}\n\n    {{#origin}}\n      <h2>{{i18n.origin}}:</h2>\n      {{origin}}\n    {{/origin}}\n\n    {{#functions}}\n      <h2>{{i18n.functions}}:</h2>\n      <ul class="list">\n        {{#list}}\n          <li>{{.}}</li>\n        {{/list}}\n      </ul>\n    {{/functions}}\n\n    {{#focusOfWork}}\n      <h2>{{i18n.focusOfWork}}:</h2>\n      <ul class="list">\n        {{#list}}\n          <li>{{.}}</li>\n        {{/list}}\n      </ul>\n    {{/focusOfWork}}\n\n    {{#responsibilities}}\n      <h2>{{i18n.responsibilities}}:</h2>\n      <ul class="list">\n        {{#list}}\n          <li>{{.}}</li>\n        {{/list}}\n      </ul>\n    {{/responsibilities}}\n  {{/info}}\n{{/main}}\n\n';class z extends k{constructor(e){let i=_[m()][e],t=H[e];super({template:n(W),page:{head:{...i.head,image:t.ogImage},main:{...t,...i}}})}}var B={};const D={deDE:{template:n(B="<h1>{{i18n.imprint}}</h1>\n\nEmily Wachelka<br />\nSiebenbürgener Str. 14<br />\n81377 München<br />\ninfo@gmbmuc.de\n\n"),page:{head:{title:"Impressum",description:""}}},enUS:{template:n(B),page:{head:{title:"Imprint",description:""}}}};class C extends k{constructor(){super(D[m()])}}var I={};I="<h1>404</h1>\n";class T extends k{constructor(){super({template:n(I),page:{head:{title:"\uD83E\uDD37 404",description:"Page not found"}}})}}var j={};j='<h1>Grüner Migrationsbeirat in München</h1>\n\n<a href="#beirat" class="intro bordered" aria-label="zum Beirat"><span></span></a>\n\n<h2>Was ist der Migrationsbeirat?</h2>\n<p>\n  Der Migrationsbeirat ist die Interessenvertretung der Münchner*innen mit Migrationsgeschichte.\n  Seine Aufgabe ist es, den Stadtrat und die Verwaltung in allen Fragen,\n  die die ausländische Bevölkerung in München vertreten, zu beraten.\n  Der Beirat existiert seit 1974 und wurde am 19. März 2023 neu gewählt.\n</p>\n\n<h3>Aktuelle Informationen (mehrsprachig)</h3>\n{{> social}}\n\n<h3>Der Migrationsbeirat</h3>\n<ul class="list">\n  <li>verfügt über einen jährlichen Zuschuss-Etat von rund 160.000 € für Integrationsprojekte.</li>\n  <li>gibt Empfehlungen und stellt Anträge an den Stadtrat und an die Stadtverwaltung.</li>\n  <li>organisiert politische Diskussionsveranstaltungen.</li>\n  <li>macht sich für das kommunale Wahlrecht für alle stark.</li>\n  <li>pflegt Kontakt zu Vereinen und Organisationen aus den Migrant*innen Communities.</li>\n  <li>ist die Anlaufstelle für alle Fragen, die Migrant*innen in München betreffen.</li>\n</ul>\n\n<h3>Der Migrationsbeirat beschäftigt sich mit folgenden Themen</h3>\n<ul class="list">\n  <li>Antidiskriminierung und Antirassismus</li>\n  <li>Erziehung und Bildung</li>\n  <li>Kinder- und Jugendhilfepolitik</li>\n  <li>Arbeit und sozialen Fragen</li>\n  <li>Frauenangelegenheiten</li>\n  <li>Sport und Freizeit</li>\n  <li>Kultur und dem interkulturellen Dialog</li>\n  <li>Migrationspolitik und Völkerverständigung</li>\n  <li>Politik für Geflüchtete und Migrationsrecht</li>\n  <li>Organisation von Fachtagen, Bürgersprechstunden und Festen</li>\n</ul>\n\n<h3>Unsere Werte, unsere Vision</h3>\n<ul class="list">\n  <li>Wir stehen für die Rechte und Bedürfnisse aller Mitbürger*innen mit Migrationsbiographien.</li>\n  <li>Wir setzen uns für eine offene Stadt ein, die unseren Ideen zuhört und unsere Kompetenzen wertschätzt.</li>\n  <li>Wir stehen für eine transparentere, effektivere und demokratischere Arbeit im Migrationsbeirat\n    und für den Abbau aller Hürden,die derzeit bestehen und zu einer geringen Wahlbeteiligung führen.</li>\n  <li>Wir stehen für Mehrsprachigkeit, Partizipation und Förderung aller Migrantenorganisationen.</li>\n</ul>\n\n<a class="anchor" id="beirat"></a>\n<h3>Im Migrationsbeirat der Landeshauptstadt München ist die Grüne Fraktion durch folgende Personen vertreten:</h3>\n\n{{> members}}\n';var x={};x='<h1>Grünnahe Fraktion im Münchner Migrationsbeirat</h1>\n\n<a href="#beirat" class="intro bordered" aria-label="zum Beirat"><span></span></a>\n\n<h2>Was ist der Migrationsbeirat?</h2>\n<p>\n  Der Migrationsbeirat ist die Interessenvertretung der Münchner*innen mit Migrationsgeschichte.\n  Seine Aufgabe ist es, den Stadtrat und die Verwaltung in allen Fragen,\n  die die ausländische Bevölkerung in München vertreten, zu beraten.\n  Der Beirat existiert seit 1974 und wurde am 19. März 2023 neu gewählt.\n</p>\n\n<h3>Aktuelle Informationen (mehrsprachig)</h3>\n{{> social}}\n\n<h3>Der Migrationsbeirat</h3>\n<ul class="list">\n  <li>verfügt über einen jährlichen Zuschuss-Etat von rund 160.000 € für Integrationsprojekte.</li>\n  <li>gibt Empfehlungen und stellt Anträge an den Stadtrat und an die Stadtverwaltung.</li>\n  <li>organisiert politische Diskussionsveranstaltungen.</li>\n  <li>macht sich für das kommunale Wahlrecht für alle stark.</li>\n  <li>pflegt Kontakt zu Vereinen und Organisationen aus den Migrant*innen Communities.</li>\n  <li>ist die Anlaufstelle für alle Fragen, die Migrant*innen in München betreffen.</li>\n</ul>\n\n<h3>Der Migrationsbeirat beschäftigt sich mit folgenden Themen</h3>\n<ul class="list">\n  <li>Antidiskriminierung und Antirassismus</li>\n  <li>Erziehung und Bildung</li>\n  <li>Kinder- und Jugendhilfepolitik</li>\n  <li>Arbeit und sozialen Fragen</li>\n  <li>Frauenangelegenheiten</li>\n  <li>Sport und Freizeit</li>\n  <li>Kultur und dem interkulturellen Dialog</li>\n  <li>Migrationspolitik und Völkerverständigung</li>\n  <li>Politik für Geflüchtete und Migrationsrecht</li>\n  <li>Organisation von Fachtagen, Bürgersprechstunden und Festen</li>\n</ul>\n\n<h3>Unsere Werte, unsere Vision</h3>\n<ul class="list">\n  <li>Wir stehen für die Rechte und Bedürfnisse aller Mitbürger*innen mit Migrationsbiographien.</li>\n  <li>Wir setzen uns für eine offene Stadt ein, die unseren Ideen zuhört und unsere Kompetenzen wertschätzt.</li>\n  <li>Wir stehen für eine transparentere, effektivere und demokratischere Arbeit im Migrationsbeirat\n    und für den Abbau aller Hürden,die derzeit bestehen und zu einer geringen Wahlbeteiligung führen.</li>\n  <li>Wir stehen für Mehrsprachigkeit, Partizipation und Förderung aller Migrantenorganisationen.</li>\n</ul>\n\n<a class="anchor" id="beirat"></a>\n<h3>Im Migrationsbeirat der Landeshauptstadt München ist die Grüne Fraktion durch folgende Personen vertreten:</h3>\n\n{{> members}}\n';const O=new URL(v).toString(),G={deDE:{template:n(j),page:{head:{description:"Der Migrationsbeirat ist die Interessenvertretung der Münchner*innen mit Migrationsgeschichte. Seine Aufgabe ist es, den Stadtrat und die Verwaltung in allen Fragen, die die ausländische Bevölkerung in München vertreten, zu beraten.",image:O}}},enUS:{template:n(x),page:{head:{description:"The Migration Advisory Board represents the interests of Munich residents with a migration history. His job is to advise the city council and the administration on all issues relating to the foreign population in Munich.",image:O}}}};class P extends k{constructor(){let e=m(),n=f(),i=G[e];i.page.main={members:[{name:"Tina Garway",image:new URL(S).toString(),link:`${n}/person/tina-garway`},{name:"Bakir Lemes",image:new URL(F).toString(),link:`${n}/person/bakir-lemes`},{name:"Matu Mbala",image:new URL(E).toString(),link:`${n}/person/matu-mbala`},{name:"Carmen Romano",image:new URL(R).toString(),link:`${n}/person/carmen-romano`},{name:"Emily Wachelka",image:new URL(w).toString(),link:`${n}/person/emily-wachelka`}]},super(i)}}const V=()=>{let{pathname:e}=window.location,n=e.replace(/^\/(en|de)/,""),i=n.match("^/person/([a-z-]+)$");return i?{path:"/person",param:i[1]}:{path:n||"/",param:""}};(async()=>{let e=async()=>{let e;let n=V();switch(n.path){case"/person":e=new z(n.param.split("-")[0]);break;case"/impressum":case"/imprint":e=new C;break;case"/":case"":e=new P;break;default:e=new T}e.render()};document.body?await e():document.addEventListener("DOMContentLoaded",async()=>{await e()})})();
//# sourceMappingURL=index.35e06630.js.map
