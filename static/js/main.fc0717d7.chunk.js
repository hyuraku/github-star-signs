(this["webpackJsonpstar-signs"]=this["webpackJsonpstar-signs"]||[]).push([[0],{28:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),o=a.n(s),i=a(4),c=a.n(i),l=a(5),u=a(16),m=a(17),d=a(18),p=a(22),g=a(20),h=a(21),f=(a(28),function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),s=a[0],o=a[1];return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(s)},className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("h1",null,"Enter GitHub username"),r.a.createElement("label",null,r.a.createElement("input",{type:"text",autoFocus:!0,value:s,onChange:function(e){return o(e.target.value)},readOnly:e.readOnly,placeholder:"Your GitHub username"})))))}),v=a(19),E=a.n(v).a.create({baseURL:"https://api.github.com/"}),b=(a(47),function(e){var t=e.repo,a=t.name,n=t.html_url,s=t.description,o=t.owner,i=t.language,c=t.stargazers_count;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui header"},r.a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener"},a)),r.a.createElement("div",{className:"ui meta grid"},r.a.createElement("div",{className:"ui equal width row"},r.a.createElement("div",{className:"column"},o.login," "),r.a.createElement("div",{className:"column"},i," "),r.a.createElement("div",{className:"column"},"\u2605",c," "))),r.a.createElement("div",{className:"ui description"},s)))}),w=function(e){var t=e.repos.map((function(e){return r.a.createElement(b,{key:e.id,repo:e})}));return r.a.createElement("div",{className:"ui container cards"},t)},S=(a(48),function(e){var t=e.name;return r.a.createElement("div",{className:"ui container NoStarRepo"},r.a.createElement("h2",null," ",r.a.createElement("span",{className:"name"},t)," has no starred repository"))}),N=(a(49),function(e){var t=e.name;return r.a.createElement("div",{className:"ui container nameError"},r.a.createElement("h2",null,"Can't find user ",r.a.createElement("span",{className:"name"},t),". Check spelling."))}),k=(a(50),function(){return r.a.createElement("div",{className:"ui loading"},r.a.createElement("div",{className:"ui active inverted dimmer"},r.a.createElement("div",{className:"ui large text loader"},"Loading")),r.a.createElement("p",null))}),y=function(){return r.a.createElement("div",null)},R=function(e){var t=e.loading,a=e.name,n=e.httpStatus,s=e.starredRepos;return!0===t?r.a.createElement(k,null):""===a?r.a.createElement(y,null):200!==n?r.a.createElement(N,{name:a}):0===s.length?r.a.createElement(S,{name:a}):r.a.createElement(w,{repos:s})},O=(a(51),function(){return r.a.createElement("footer",null,"GitHub Star Sign is built with"," ",r.a.createElement(j,{url:"https://reactjs.org/",name:"React"})," . Source is on"," ",r.a.createElement(j,{url:"https://github.com/hyuraku/github-star-signs",name:"GitHub"}),".")}),j=function(e){var t=e.url,a=e.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},a))},x=(a(52),100),C=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={starredRepos:[],addRepoSize:0,name:"",httpStatus:200,errMsg:"",page:1,loading:!1},e.onSearchSubmit=function(){var t=Object(u.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="",t.prev=1,e.setState({page:1,loading:!0}),t.next=5,E.get("/users/".concat(a,"/starred"),{params:{per_page:x,page:1}});case 5:n=t.sent,e.setState({name:a,httpStatus:n.status,starredRepos:n.data,page:e.state.page+1,errMsg:"",addRepoSize:n.data.length});case 7:if(e.state.addRepoSize!==x){t.next=14;break}return t.next=10,E.get("/users/".concat(a,"/starred"),{params:{per_page:x,page:e.state.page}});case 10:r=t.sent,e.setState({starredRepos:[].concat(Object(l.a)(e.state.starredRepos),Object(l.a)(r.data)),page:e.state.page+1,addRepoSize:r.data.length}),t.next=7;break;case 14:e.setState({loading:!1}),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),e.setState({name:a,httpStatus:t.t0.response.status,errMsg:t.t0.response.message,loading:!1});case 20:case"end":return t.stop()}}),t,null,[[1,17]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"top"},r.a.createElement(f,{onSubmit:this.onSearchSubmit,readOnly:this.state.loading}),r.a.createElement(R,{loading:this.state.loading,httpStatus:this.state.httpStatus,name:this.state.name,starredRepos:this.state.starredRepos}),r.a.createElement(O,null))}}]),a}(r.a.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/github-star-signs",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/github-star-signs","/service-worker.js");_?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):z(e)}))}}()}},[[53,1,2]]]);
//# sourceMappingURL=main.fc0717d7.chunk.js.map