(this["webpackJsonpfood-recipe"]=this["webpackJsonpfood-recipe"]||[]).push([[0],{11:function(e,c,t){},13:function(e,c,t){},15:function(e,c,t){},16:function(e,c,t){"use strict";t.r(c);var n=t(1),r=t(5),i=t.n(r),s=(t(11),t(4)),a=t.n(s),o=t(6),j=t(2),l=(t(13),t(0)),u=function(e){return Object(l.jsx)("div",{className:"recipe",children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("img",{className:"recipe-image",src:e.image,alt:""}),Object(l.jsxs)("p",{children:["Calories:",e.calories]}),Object(l.jsx)("p",{children:"Ingredients:"}),Object(l.jsx)("ol",{children:e.ingredients.map((function(e){return Object(l.jsx)("li",{children:e})}))})]})})};t(15);var b=function(){var e=Object(n.useState)([]),c=Object(j.a)(e,2),t=c[0],r=c[1],i=Object(n.useState)(""),s=Object(j.a)(i,2),b=s[0],p=s[1],d=Object(n.useState)("chicken"),h=Object(j.a)(d,2),f=h[0],O=h[1];Object(n.useEffect)((function(){m()}),[f]);var m=function(){var e=Object(o.a)(a.a.mark((function e(){var c,t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("49bc5582","&app_key=").concat("c3edfca0463cb242d0fc42f9b538ddb4"),e.next=3,fetch(c);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n.hits),console.log(n.hits);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(b),p("")},children:[Object(l.jsx)("h1",{children:"Food Recipe Search"}),Object(l.jsxs)("div",{className:"search-bar",children:[Object(l.jsx)("input",{type:"text",placeholder:"search",value:b,onChange:function(e){p(e.target.value),console.log(b)}}),Object(l.jsx)("button",{id:"search-btn",type:"submit",children:"search"})]})]}),t.map((function(e){return Object(l.jsx)(u,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredientLines},e.recipe.label)}))]})};i.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.61ee8826.chunk.js.map