function e(e,n,i,t){Object.defineProperty(e,n,{get:i,set:t,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var i=globalThis,t={},r={},a=i.parcelRequire85b2;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},i.parcelRequire85b2=a),(0,a.register)("27Lyk",function(n,i){e(n.exports,"register",()=>t,e=>t=e);var t,r=new Map;t=function(e,n){for(var i=0;i<n.length-1;i+=2)r.set(n[i],{baseUrl:e,path:n[i+1]})}}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["l1gf1","index.5d95ddbf.js","htEWk","gruener-migrationsbeirat-muenchen.4b6eae60.svg","jEpl6","Emily-Wachelka-Migrationsbeirat.3bd112ed.webp","hZBmc","Tina-Garway-Migrationsbeirat.46c98b92.webp","cmpbf","Matu-Mbala-Migrationsbeirat.64343cd7.webp","bT4uY","Carmen-Romano-Migrationsbeirat.971b0701.webp","ccZjD","Bakir-Lemes-Migrationsbeirat.98dd1aa0.webp"]'));var s={};s=function(){/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,n=Array.isArray||function(n){return"[object Array]"===e.call(n)};function i(e){return"function"==typeof e}function t(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function r(e,n){return null!=e&&"object"==typeof e&&n in e}var a=RegExp.prototype.test,s=/\S/,o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},l=/\s*/,u=/\s+/,h=/\s*=/,c=/\s*\}/,g=/#|\^|\/|>|\{|&|=|!/;function d(e){this.string=e,this.tail=e,this.pos=0}function p(e,n){this.view=e,this.cache={".":this.view},this.parent=n}function f(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}d.prototype.eos=function(){return""===this.tail},d.prototype.scan=function(e){var n=this.tail.match(e);if(!n||0!==n.index)return"";var i=n[0];return this.tail=this.tail.substring(i.length),this.pos+=i.length,i},d.prototype.scanUntil=function(e){var n,i=this.tail.search(e);switch(i){case -1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,i),this.tail=this.tail.substring(i)}return this.pos+=n.length,n},p.prototype.push=function(e){return new p(e,this)},p.prototype.lookup=function(e){var n=this.cache;if(n.hasOwnProperty(e))s=n[e];else{for(var t,a,s,o,l,u,h=this,c=!1;h;){if(e.indexOf(".")>0)for(o=h.view,l=e.split("."),u=0;null!=o&&u<l.length;)u===l.length-1&&(c=r(o,l[u])||(t=o,a=l[u],null!=t&&"object"!=typeof t&&t.hasOwnProperty&&t.hasOwnProperty(a))),o=o[l[u++]];else o=h.view[e],c=r(h.view,e);if(c){s=o;break}h=h.parent}n[e]=s}return i(s)&&(s=s.call(this.view)),s},f.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},f.prototype.parse=function(e,i){var r=this.templateCache,o=e+":"+(i||m.tags).join(":"),p=void 0!==r,f=p?r.get(o):void 0;return void 0==f&&(f=function(e,i){if(!e)return[];var r,o,p,f,b,k,v,w,M,y=!1,S=[],E=[],A=[],L=!1,R=!1,F="",U=0;function _(){if(L&&!R)for(;A.length;)delete E[A.pop()];else A=[];L=!1,R=!1}function C(e){if("string"==typeof e&&(e=e.split(u,2)),!n(e)||2!==e.length)throw Error("Invalid tags: "+e);r=RegExp(t(e[0])+"\\s*"),o=RegExp("\\s*"+t(e[1])),p=RegExp("\\s*"+t("}"+e[1]))}C(i||m.tags);for(var D=new d(e);!D.eos();){if(f=D.pos,k=D.scanUntil(r))for(var H,W=0,z=k.length;W<z;++W){;(H=v=k.charAt(W),a.call(s,H))?(R=!0,y=!0,F+=" "):(A.push(E.length),F+=v),E.push(["text",v,f,f+1]),f+=1,"\n"===v&&(_(),F="",U=0,y=!1)}if(!D.scan(r))break;if(L=!0,b=D.scan(g)||"name",D.scan(l),"="===b?(k=D.scanUntil(h),D.scan(h),D.scanUntil(o)):"{"===b?(k=D.scanUntil(p),D.scan(c),D.scanUntil(o),b="&"):k=D.scanUntil(o),!D.scan(o))throw Error("Unclosed tag at "+D.pos);if(w=">"==b?[b,k,f,D.pos,F,U,y]:[b,k,f,D.pos],U++,E.push(w),"#"===b||"^"===b)S.push(w);else if("/"===b){if(!(M=S.pop()))throw Error('Unopened section "'+k+'" at '+f);if(M[1]!==k)throw Error('Unclosed section "'+M[1]+'" at '+f)}else"name"===b||"{"===b||"&"===b?R=!0:"="===b&&C(k)}if(_(),M=S.pop())throw Error('Unclosed section "'+M[1]+'" at '+D.pos);return function(e){for(var n,i=[],t=i,r=[],a=0,s=e.length;a<s;++a)switch((n=e[a])[0]){case"#":case"^":t.push(n),r.push(n),t=n[4]=[];break;case"/":r.pop()[5]=n[2],t=r.length>0?r[r.length-1][4]:i;break;default:t.push(n)}return i}(function(e){for(var n,i,t=[],r=0,a=e.length;r<a;++r)(n=e[r])&&("text"===n[0]&&i&&"text"===i[0]?(i[1]+=n[1],i[3]=n[3]):(t.push(n),i=n));return t}(E))}(e,i),p&&r.set(o,f)),f},f.prototype.render=function(e,n,i,t){var r=this.getConfigTags(t),a=this.parse(e,r),s=n instanceof p?n:new p(n,void 0);return this.renderTokens(a,s,i,e,t)},f.prototype.renderTokens=function(e,n,i,t,r){for(var a,s,o,l="",u=0,h=e.length;u<h;++u)o=void 0,"#"===(s=(a=e[u])[0])?o=this.renderSection(a,n,i,t,r):"^"===s?o=this.renderInverted(a,n,i,t,r):">"===s?o=this.renderPartial(a,n,i,r):"&"===s?o=this.unescapedValue(a,n):"name"===s?o=this.escapedValue(a,n,r):"text"===s&&(o=this.rawValue(a)),void 0!==o&&(l+=o);return l},f.prototype.renderSection=function(e,t,r,a,s){var o=this,l="",u=t.lookup(e[1]);if(u){if(n(u))for(var h=0,c=u.length;h<c;++h)l+=this.renderTokens(e[4],t.push(u[h]),r,a,s);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)l+=this.renderTokens(e[4],t.push(u),r,a,s);else if(i(u)){if("string"!=typeof a)throw Error("Cannot use higher-order sections without the original template");null!=(u=u.call(t.view,a.slice(e[3],e[5]),function(e){return o.render(e,t,r,s)}))&&(l+=u)}else l+=this.renderTokens(e[4],t,r,a,s);return l}},f.prototype.renderInverted=function(e,i,t,r,a){var s=i.lookup(e[1]);if(!s||n(s)&&0===s.length)return this.renderTokens(e[4],i,t,r,a)},f.prototype.indentPartial=function(e,n,i){for(var t=n.replace(/[^ \t]/g,""),r=e.split("\n"),a=0;a<r.length;a++)r[a].length&&(a>0||!i)&&(r[a]=t+r[a]);return r.join("\n")},f.prototype.renderPartial=function(e,n,t,r){if(t){var a=this.getConfigTags(r),s=i(t)?t(e[1]):t[e[1]];if(null!=s){var o=e[6],l=e[5],u=e[4],h=s;0==l&&u&&(h=this.indentPartial(s,u,o));var c=this.parse(h,a);return this.renderTokens(c,n,t,h,r)}}},f.prototype.unescapedValue=function(e,n){var i=n.lookup(e[1]);if(null!=i)return i},f.prototype.escapedValue=function(e,n,i){var t=this.getConfigEscape(i)||m.escape,r=n.lookup(e[1]);if(null!=r)return"number"==typeof r&&t===m.escape?String(r):t(r)},f.prototype.rawValue=function(e){return e[1]},f.prototype.getConfigTags=function(e){return n(e)?e:e&&"object"==typeof e?e.tags:void 0},f.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!n(e)?e.escape:void 0};var m={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(cache){b.templateCache=cache},get templateCache(){return b.templateCache}},b=new f;return m.clearCache=function(){return b.clearCache()},m.parse=function(e,n){return b.parse(e,n)},m.render=function(e,i,t,r){if("string"!=typeof e)throw TypeError('Invalid template! Template should be a "string" but "'+(n(e)?"array":typeof e)+'" was given as the first argument for mustache#render(template, view, partials)');return b.render(e,i,t,r)},m.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,function(e){return o[e]})},m.Scanner=d,m.Context=p,m.Writer=f,m}();var o={};o="{{> header }}\n{{> main }}\n{{> footer }}\n";var l={};e(l,"footer",()=>n(u)),e(l,"header",()=>n(h)),e(l,"main",()=>n(c)),e(l,"members",()=>n(g));var u={};u='<footer>\n  <ul class="social">\n    <li><a href="{{links.facebook}}" target="_blank" class="facebook">facebook</a></li>\n    <li><a href="{{links.instagram}}" target="_blank" class="instagram">instagram</a></li>\n  </ul>\n  <div class="info">\n    <ul>\n      <li><a href="mailto:{{links.mailto}}">{{links.mailto}}</a></li>\n      <li><a href="{{links.imprint}}">{{i18n.imprint}}</a></li>\n    </ul>\n  </div>\n</footer>\n';var h={};h='<header>\n  <a href="{{links.home}}">\n    <img class="logo" src="{{images.logo}}" alt="Logo" />\n    <span class="title">{{i18n.title}}</span>\n  </a>\n</header>\n';var c={};c="<main></main>\n";var g={};g='\n<section class="members">\n  <ul>\n    {{#main.members}}\n      <li>\n        <figure>\n          <a href="{{link}}"><img src="{{image}}" alt="{{name}}" class="bordered"></a>\n          <figcaption>\n            <a href="{{link}}">{{name}}</a>\n          </figcaption>\n        </figure>\n      </li>\n    {{/main.members}}\n  </ul>\n</section>\n';const d=()=>{let{pathname:e}=window.location,n=e.match(/^\/(en|de)/);return n&&"en"===n[1]?"enUS":"deDE"},p={deDE:{title:"Grüner Migrationsbeirat München",origin:"Herkunftsland",languages:"Sprachen",functions:"Funktionen innerhalb des Migrationsbeirats",responsibilities:"Zuständigkeiten innerhalb der Fraktion",focusOfWork:"Arbeitsschwerpunkt",imprint:"Impressum"},enUS:{title:"Green Migration Advisory Board Munich",origin:"Country of origin",languages:"Languages",functions:"Functions within the Migration Advisory Board",responsibilities:"Responsibilities within the group",focusOfWork:"Focus of work",imprint:"Imprint"}},f=()=>{let e=d();return"deDE"===e?"":`/${e.substring(0,2)}`};var m={};m=new URL("gruener-migrationsbeirat-muenchen.4b6eae60.svg",import.meta.url).toString();class b{constructor(e){this.data={template:e.template,page:{head:e.page.head,main:e.page.main,header:{},footer:{},images:{logo:new URL(m).toString()},links:{instagram:"https://instagram.com/gruennahes_vielfaltsbuendnis?igshid=NGVhN2U2NjQ0Yg==",facebook:"https://www.facebook.com/profile.php?id=100089455185993",mailto:"info@gruener-migrations-beirat.de",imprint:`${f()}/impressum`,home:`${f()}/`},i18n:p[this.getLanguage()]}}}attachObservers(){let e=new IntersectionObserver(([e])=>e.target.classList.toggle("pinned",e.intersectionRatio<1),{threshold:[1]}),n=document.querySelector("header");n&&e.observe(n)}attachListeners(){window.addEventListener("resize",()=>{this.applyLayout()}),document.body.addEventListener("scroll",()=>{console.log("s",document.body.scrollTop)},{passive:!0})}getLanguage(){return d()}applyLayout(){let e=window.innerWidth;document.body.classList.toggle("mobile",e<=480),document.body.classList.toggle("tablet",e>480&&e<=768),document.body.classList.toggle("desktop",e>768)}setTitle(e){let n=document.head.querySelector("title");if(n){let i=p[this.getLanguage()].title;n.innerHTML=e?`${e} \u{2600}\u{FE0F}${i}`:i}}setDescription(e){let n=document.head.querySelector('meta[name="description"]');n&&n.setAttribute("content",e)}async render(){let{template:e,page:i}=this.data;this.setTitle(i.head.title),this.setDescription(i.head.description),document.body.innerHTML=n(s).render(n(o),i,l),document.body.querySelectorAll("main").forEach(t=>{t.innerHTML=n(s).render(e,i,l)}),this.applyLayout(),this.attachListeners(),this.attachObservers()}}var k={};k=new URL("Emily-Wachelka-Migrationsbeirat.3bd112ed.webp",import.meta.url).toString();var v={};v=new URL("Tina-Garway-Migrationsbeirat.46c98b92.webp",import.meta.url).toString();var w={};w=new URL("Matu-Mbala-Migrationsbeirat.64343cd7.webp",import.meta.url).toString();var M={};M=new URL("Carmen-Romano-Migrationsbeirat.971b0701.webp",import.meta.url).toString();var y={};y=new URL("Bakir-Lemes-Migrationsbeirat.98dd1aa0.webp",import.meta.url).toString();const S={emily:{name:"Emily Wachelka",image:new URL(k).toString()},tina:{name:"Tina Garway",image:new URL(v).toString()},matu:{name:"Matu Mbala",image:new URL(w).toString()},carmen:{name:"Carmen Romano",image:new URL(M).toString()},bakir:{name:"Bakir Lemes",image:new URL(y).toString()}},E={deDE:{emily:{head:{title:"Emily Wachelka",description:""},info:{origin:"USA",languages:"Englisch, Deutsch, Italienisch, ein bisschen Spanisch",functions:{list:["Stimmberechtigtes Mitglied im Ausschuss 1 für Bildung, Erziehung, Kinder und Jugend","Beratendes Mitglied in Ausschuss 4 (Ausschuss für Aufenthalts- und Zuwanderungsrecht mit Rassismus,Diskriminierung und Flüchtlingspolitik)","Beratendes Mitglied in Ausschuss 5 (Arbeit, Wirtschaft, Umwelt, Stadtplanung)","Sprecherin der Kommission für die Zukunft des Beirats"]},responsibilities:{list:["Cosprecherin zusammen mit Carmen Romano, insbesondere zuständig für die Zusammenarbeit innerhalb des Migrationsbeirats mit der Fraktion, mit anderen progressiven Kräften und auch mit den übrigen Mitgliedern im Beirat.","Co-Betreuerin der Öffentlichkeitsarbeit der Liste"]}}},tina:{head:{title:"Tina Garway",description:""},info:{languages:"Englisch"}},carmen:{head:{title:"Carmen Romano",description:""},info:{languages:"Englisch"}},bakir:{head:{title:"Bakir Lemes",description:""},info:{languages:"Englisch"}},matu:{head:{title:"Matu Mbala",description:""},info:{languages:"Englisch"}}},enUS:{emily:{head:{title:"Emily Wachelka",description:""},info:{languages:"English"}},tina:{head:{title:"Tina Garway",description:""},info:{languages:"English"}},carmen:{head:{title:"Carmen Romano",description:""},info:{languages:"English"}},bakir:{head:{title:"Bakir Lemes",description:""},info:{languages:"English"}},matu:{head:{title:"Matu Mbala",description:""},info:{languages:"English"}}}};var A={};A='{{#main}}\n\n  <h1>{{name}}</h1>\n\n  <img src="{{image}}" alt="{{name}}" class="member bordered" />\n\n  {{#info}}\n    {{#languages}}\n      <h2>{{i18n.languages}}:</h2>\n      {{languages}}\n    {{/languages}}\n\n    {{#origin}}\n      <h2>{{i18n.origin}}:</h2>\n      {{origin}}\n    {{/origin}}\n\n    {{#functions}}\n      <h2>{{i18n.functions}}:</h2>\n      <ul>\n        {{#list}}\n          <li>{{.}}</li>\n        {{/list}}\n      </ul>\n    {{/functions}}\n\n    {{#focusOfWork}}\n      <h2>{{i18n.focusOfWork}}:</h2>\n      <ul>\n        {{#list}}\n          <li>{{.}}</li>\n        {{/list}}\n      </ul>\n    {{/focusOfWork}}\n\n    {{#responsibilities}}\n      <h2>{{i18n.responsibilities}}:</h2>\n      <ul>\n        {{#list}}\n          <li>{{.}}</li>\n        {{/list}}\n      </ul>\n    {{/responsibilities}}\n  {{/info}}\n{{/main}}\n\n';class L extends b{constructor(e){let i=E[d()][e];super({template:n(A),page:{head:i.head,main:{...S[e],...i}}})}}var R={};const F={deDE:{template:n(R="<h1>{{i18n.imprint}}</h1>\n\nEmily Wachelka<br />\nSiebenbürgener Str. 14<br />\n81377 München<br />\ninfo@gruener-migrationsbeirat-muenchen.de\n\n"),page:{head:{title:"Impressum",description:""}}},enUS:{template:n(R),page:{head:{title:"Imprint",description:""}}}};class U extends b{constructor(){super(F[d()])}}var _={};_="<h1>404</h1>\n";class C extends b{constructor(){super({template:n(_),page:{head:{title:"\uD83E\uDD37 404",description:"Page not found"}}})}}var D={};D='<h1>Grünnahe Fraktion im Münchner Migrationsbeirat</h1>\n\n<a href="#beirat" class="intro bordered"><span></span></a>\n\n<h2>Was ist der Migrationsbeirat?</h2>\n<p>\n  Der Migrationsbeirat ist die Interessenvertretung der Münchner*innen mit Migrationsgeschichte.\n  Seine Aufgabe ist es, den Stadtrat und die Verwaltung in allen Fragen,\n  die die ausländische Bevölkerung in München vertreten, zu beraten.\n  Der Beirat existiert seit 1974 und wurde am 19. März 2023 neu gewählt.\n</p>\n\n<h3>Der Migrationsbeirat</h3>\n<ul>\n  <li>verfügt über einen jährlichen Zuschuss-Etat von rund 160.000 € für Integrationsprojekte.</li>\n  <li>gibt Empfehlungen und stellt Anträge an den Stadtrat und an die Stadtverwaltung.</li>\n  <li>organisiert politische Diskussionsveranstaltungen.</li>\n  <li>macht sich für das kommunale Wahlrecht für alle stark.</li>\n  <li>pflegt Kontakt zu Vereinen und Organisationen aus den Migrant*innen Communities.</li>\n  <li>ist die Anlaufstelle für alle Fragen, die Migrant*innen in München betreffen.</li>\n</ul>\n\n<h3>Der Migrationsbeirat beschäftigt sich mit folgenden Themen:</h3>\n<ul>\n  <li>Antidiskriminierung und Antirassismus</li>\n  <li>Erziehung und Bildung</li>\n  <li>Kinder- und Jugendhilfepolitik</li>\n  <li>Arbeit und sozialen Fragen</li>\n  <li>Frauenangelegenheiten</li>\n  <li>Sport und Freizeit</li>\n  <li>Kultur und dem interkulturellen Dialog</li>\n  <li>Migrationspolitik und Völkerverständigung</li>\n  <li>Politik für Geflüchtete und Migrationsrecht</li>\n  <li>Organisation von Fachtagen, Bürgersprechstunden und Festen</li>\n</ul>\n\n<h3>Unsere Werte, unsere Vision:</h3>\n<ul>\n  <li>Wir stehen für die Rechte und Bedürfnisse aller Mitbürger*innen mit Migrationsbiographien.</li>\n  <li>Wir setzen uns für eine offene Stadt ein, die unseren Ideen zuhört und unsere Kompetenzen wertschätzt.</li>\n  <li>Wir stehen für eine transparentere, effektivere und demokratischere Arbeit im Migrationsbeirat\n    und für den Abbau aller Hürden,die derzeit bestehen und zu einer geringen Wahlbeteiligung führen.</li>\n  <li>Wir stehen für Mehrsprachigkeit, Partizipation und Förderung aller Migrantenorganisationen.</li>\n</ul>\n\n<h3>Aktuelle Informationen (mehrsprachig!) über die Arbeit der Grünnahen Fraktion findest Du hier:</h3>\n<ul>\n  <li><a href="{{links.facebook}}" target="_blank">Grünnahes Vielfaltsbündnis auf Facebook</a></li>\n  <li><a href="{{links.instagram}}" target="_blank">Grünnahes Vielfaltsbündnis auf Instagram</a></li>\n</ul>\n\n<h3 id="beirat">Im Migrationsbeirat der Landeshauptstadt München ist die Grüne Fraktion durch folgende Personen vertreten:</h3>\n\n{{> members}}\n';const H={deDE:{template:n('<h1>Grünnahe Fraktion im Münchner Migrationsbeirat</h1>\n\n<a href="#beirat" class="intro bordered"><span></span></a>\n\n<h2>Was ist der Migrationsbeirat?</h2>\n<p>\n  Der Migrationsbeirat ist die Interessenvertretung der Münchner*innen mit Migrationsgeschichte.\n  Seine Aufgabe ist es, den Stadtrat und die Verwaltung in allen Fragen,\n  die die ausländische Bevölkerung in München vertreten, zu beraten.\n  Der Beirat existiert seit 1974 und wurde am 19. März 2023 neu gewählt.\n</p>\n\n<h3>Der Migrationsbeirat</h3>\n<ul>\n  <li>verfügt über einen jährlichen Zuschuss-Etat von rund 160.000 € für Integrationsprojekte.</li>\n  <li>gibt Empfehlungen und stellt Anträge an den Stadtrat und an die Stadtverwaltung.</li>\n  <li>organisiert politische Diskussionsveranstaltungen.</li>\n  <li>macht sich für das kommunale Wahlrecht für alle stark.</li>\n  <li>pflegt Kontakt zu Vereinen und Organisationen aus den Migrant*innen Communities.</li>\n  <li>ist die Anlaufstelle für alle Fragen, die Migrant*innen in München betreffen.</li>\n</ul>\n\n<h3>Der Migrationsbeirat beschäftigt sich mit folgenden Themen:</h3>\n<ul>\n  <li>Antidiskriminierung und Antirassismus</li>\n  <li>Erziehung und Bildung</li>\n  <li>Kinder- und Jugendhilfepolitik</li>\n  <li>Arbeit und sozialen Fragen</li>\n  <li>Frauenangelegenheiten</li>\n  <li>Sport und Freizeit</li>\n  <li>Kultur und dem interkulturellen Dialog</li>\n  <li>Migrationspolitik und Völkerverständigung</li>\n  <li>Politik für Geflüchtete und Migrationsrecht</li>\n  <li>Organisation von Fachtagen, Bürgersprechstunden und Festen</li>\n</ul>\n\n<h3>Unsere Werte, unsere Vision:</h3>\n<ul>\n  <li>Wir stehen für die Rechte und Bedürfnisse aller Mitbürger*innen mit Migrationsbiographien.</li>\n  <li>Wir setzen uns für eine offene Stadt ein, die unseren Ideen zuhört und unsere Kompetenzen wertschätzt.</li>\n  <li>Wir stehen für eine transparentere, effektivere und demokratischere Arbeit im Migrationsbeirat\n    und für den Abbau aller Hürden,die derzeit bestehen und zu einer geringen Wahlbeteiligung führen.</li>\n  <li>Wir stehen für Mehrsprachigkeit, Partizipation und Förderung aller Migrantenorganisationen.</li>\n</ul>\n\n<h3>Aktuelle Informationen (mehrsprachig!) über die Arbeit der Grünnahen Fraktion findest Du hier:</h3>\n<ul>\n  <li><a href="{{links.facebook}}" target="_blank">Grünnahes Vielfaltsbündnis auf Facebook</a></li>\n  <li><a href="{{links.instagram}}" target="_blank">Grünnahes Vielfaltsbündnis auf Instagram</a></li>\n</ul>\n\n<a class="anchor" id="beirat"></a>\n<h3>Im Migrationsbeirat der Landeshauptstadt München ist die Grüne Fraktion durch folgende Personen vertreten:</h3>\n\n{{> members}}\n'),page:{head:{title:"",description:"Der Migrationsbeirat ist die Interessenvertretung der Münchner*innen mit Migrationsgeschichte. Seine Aufgabe ist es, den Stadtrat und die Verwaltung in allen Fragen, die die ausländische Bevölkerung in München vertreten, zu beraten."}}},enUS:{template:n(D),page:{head:{title:"",description:"The Migration Advisory Board represents the interests of Munich residents with a migration history. His job is to advise the city council and the administration on all issues relating to the foreign population in Munich."}}}};class W extends b{constructor(){let e=d(),n=f(),i=H[e];i.page.main={members:[{name:"Tina Garway",image:new URL(v).toString(),link:`${n}/person/tina-garway`},{name:"Bakir Lemes",image:new URL(y).toString(),link:`${n}/person/bakir-lemes`},{name:"Matu Mbala",image:new URL(w).toString(),link:`${n}/person/matu-mbala`},{name:"Carmen Romano",image:new URL(M).toString(),link:`${n}/person/carmen-romano`},{name:"Emily Wachelka",image:new URL(k).toString(),link:`${n}/person/emily-wachelka`}]},super(i)}}const z=()=>{let{pathname:e}=window.location,n=e.replace(/^\/(en|de)/,""),i=n.match("^/person/([a-z-]+)$");return i?{path:"/person",param:i[1]}:{path:n||"/",param:""}};(async()=>{let e=async()=>{let e;let n=z();switch(n.path){case"/person":e=new L(n.param.split("-")[0]);break;case"/impressum":case"/imprint":e=new U;break;case"/":case"":e=new W;break;default:e=new C}e.render()};document.body?await e():document.addEventListener("DOMContentLoaded",async()=>{await e()})})();
//# sourceMappingURL=index.5d95ddbf.js.map