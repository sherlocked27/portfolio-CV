(this["webpackJsonpportfolio-cv"]=this["webpackJsonpportfolio-cv"]||[]).push([[12],{170:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a(5),l=a(21),c=function(e){var t=e.label,a=e.link,s=e.value,r=e.format;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"70%",children:t}),Object(n.jsx)("td",{children:a?Object(n.jsx)("a",{href:a,children:r(s)}):r(s)})]})};c.defaultProps={format:function(e){return e},link:null,value:null};var i=c,o=function(e){var t=e.data;return Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsx)(i,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},u=a(22),b=function(){var e=Object(s.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1998-08-27T01:28:00");r(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(n.jsx)(n.Fragment,{children:a})},j=[{key:"age",label:"Current age",value:Object(n.jsx)(b,{})},{key:"location",label:"Current city",value:"Jaipur, India"}],h=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"Some stats about me"}),Object(n.jsx)(o,{data:j})]})},d=a(157),p=a.n(d),f=a(53),m=a(159),O=a(69),g=a.n(O),v=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/mldangelo/personal-site/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/mldangelo/personal-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/mldangelo/personal-site/commits",format:function(e){return g()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],k=function(){var e=Object(s.useState)(v),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(s.useCallback)(Object(m.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(v.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{value:Object.keys(a).includes(e.key)?a[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(s.useEffect)((function(){l()}),[l]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Some stats about this site"}),Object(n.jsx)(o,{data:a})]})};t.default=function(){return Object(n.jsx)(l.a,{title:"Stats",description:"Some statistics about Michael D'Angelo and mldangelo.com",children:Object(n.jsxs)("article",{className:"post",id:"stats",children:[Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(r.b,{to:"/stats",children:"Stats"})})})}),Object(n.jsx)(h,{}),Object(n.jsx)(k,{})]})})}}}]);
//# sourceMappingURL=12.bec5b7b5.chunk.js.map