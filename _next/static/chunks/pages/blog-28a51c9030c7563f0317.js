(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{8542:function(t,e,r){"use strict";var a=r(7146),n=r(1664),l=r(6666);e.Z=function(t){var e=t.text;return(0,a.tZ)(n.default,{href:"/tags/".concat((0,l.G)(e)),children:(0,a.tZ)("a",{className:"mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400",children:e.split(" ").join("-")})})}},6002:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var a=r(7146),n=r(7883),l=r(8542),i=r(7300),c=r(9748),s={year:"numeric",month:"long",day:"numeric"};function o(t){var e=t.posts,r=t.title,o=(0,c.useState)(""),d=o[0],u=o[1],g=e.filter((function(t){return(t.title+t.summary+t.tags.join(" ")).toLowerCase().includes(d.toLowerCase())}));return(0,a.tZ)(a.HY,{children:(0,a.BX)("div",{className:"divide-y",children:[(0,a.BX)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:[(0,a.tZ)("h1",{className:"text-3xl mono font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r}),(0,a.BX)("div",{className:"relative max-w-lg",children:[(0,a.tZ)("input",{"aria-label":"Search articles",type:"text",onChange:function(t){return u(t.target.value)},placeholder:"Search articles",className:"block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"}),(0,a.tZ)("svg",{className:"absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})]}),(0,a.BX)("ul",{children:[!g.length&&"No posts found.",g.map((function(t){var e=t.slug,r=t.date,c=t.title,o=t.summary,d=t.tags;return(0,a.tZ)("li",{className:"py-4",children:(0,a.BX)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,a.BX)("dl",{children:[(0,a.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,a.tZ)("dd",{className:"text-base mono font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.tZ)("time",{dateTime:r,children:new Date(r).toLocaleDateString(i.SP,s)})})]}),(0,a.BX)("div",{className:"space-y-3 xl:col-span-3",children:[(0,a.BX)("div",{children:[(0,a.tZ)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,a.tZ)(n.Z,{href:"/blog/".concat(e),className:"text-gray-900 dark:text-gray-100",children:c})}),(0,a.tZ)("div",{className:"flex flex-wrap",children:d.map((function(t){return(0,a.tZ)(l.Z,{text:t},t)}))})]}),(0,a.tZ)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:o})]})]})},e)}))]})]})})}},6666:function(t,e,r){"use strict";r.d(e,{G:function(){return a}});var a=function(t){return t&&t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(t){return t.toLowerCase()})).join("-")}},2695:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return c},default:function(){return s}});var a=r(7146),n=r(7300),l=r(6002),i=r(4629),c=!0;function s(t){var e=t.posts;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(i.Is,{title:"Blog - ".concat(n.v),description:n.WL,url:"".concat(n.or,"/blog")}),(0,a.tZ)(l.Z,{posts:e,title:"All Posts"})]})}},5809:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(2695)}])}},function(t){t.O(0,[888,179],(function(){return e=5809,t(t.s=e);var e}));var e=t.O();_N_E=e}]);