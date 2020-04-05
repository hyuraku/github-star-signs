(this["webpackJsonpstar-signs"]=this["webpackJsonpstar-signs"]||[]).push([[0],{19:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),o=a.n(s),i=a(2),c=a.n(i),l=a(3),u=a(4),m=a(6),d=a(5),p=a(7),h=(a(25),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.name)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("h1",null,"Enter GitHub username"),r.a.createElement("input",{type:"text",autoFocus:"autoFocus",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}))))}}]),t}(r.a.Component)),g=(a(26),function(e){var t=e.repo,a=t.name,n=t.html_url,s=t.description,o=t.owner,i=t.language,c=t.stargazers_count;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui header"},r.a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener"},a)),r.a.createElement("div",{className:"ui meta grid"},r.a.createElement("div",{className:"ui equal width row"},r.a.createElement("div",{className:"column"},o.login," "),r.a.createElement("div",{className:"column"},i," "),r.a.createElement("div",{className:"column"},"\u2605",c," "))),r.a.createElement("div",{className:"ui description"},s)))}),f=function(e){var t=e.repos.map((function(e){return r.a.createElement(g,{key:e.id,repo:e})}));return r.a.createElement("div",{className:"ui container centered cards"},t)},v=(a(27),function(e){return r.a.createElement("div",{className:"ui container NoStarRepo"},r.a.createElement("h2",null," ",r.a.createElement("span",{className:"name"},e.name)," has no starred repository"))}),E=(a(28),function(e){return r.a.createElement("div",{className:"ui container nameError"},r.a.createElement("h2",null,"Can 't find user ",r.a.createElement("span",{className:"name"},e.name),". Check spelling."))}),w=a(18),b=a.n(w).a.create({baseURL:"https://api.github.com/"}),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={starred_repos:[],add_repo_size:0,name:"",http_status:200,err_msg:"",page:1},a.onSearchSubmit=function(e){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t="",n.prev=1,a.setState({page:1}),n.next=5,c.a.awrap(b.get("/users/".concat(e,"/starred"),{params:{per_page:90,page:1}}));case 5:t=n.sent,a.setState({name:e,http_status:t.status,starred_repos:t.data,page:a.state.page+1,err_msg:"",add_repo_size:t.data.length}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),a.setState({name:e,http_status:n.t0.response.status,err_msg:n.t0.response.message});case 12:case"end":return n.stop()}}),null,null,[[1,9]])},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"additional",value:function(e,t){var a;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(b.get("/users/".concat(e,"/starred"),{params:{per_page:90,page:t}}));case 2:a=n.sent,this.setState({starred_repos:this.state.starred_repos.concat(a.data),page:this.state.page+1,add_repo_size:a.data.length});case 4:case"end":return n.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(e,t){this.state.name!==t.name&&""!==t.name&&this.setState({page:1}),""!==this.state.name&&90===this.state.add_repo_size&&this.additional(this.state.name,this.state.page)}},{key:"render",value:function(){var e="";return""!==this.state.name&&(e=200===this.state.http_status?0===this.state.starred_repos.length?r.a.createElement(v,{name:this.state.name}):r.a.createElement(f,{repos:this.state.starred_repos}):r.a.createElement(E,{name:this.state.name})),r.a.createElement("div",null,r.a.createElement(h,{onSubmit:this.onSearchSubmit}),e)}}]),t}(r.a.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(_,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/github-star-signs",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/github-star-signs","/service-worker.js");N?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):k(e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.5ae43952.chunk.js.map