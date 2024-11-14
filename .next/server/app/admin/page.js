(()=>{var e={};e.id=3,e.ids=[3],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4181:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>x,pages:()=>o,routeModule:()=>m,tree:()=>c}),t(1852),t(3733),t(996);var a=t(170),r=t(5002),l=t(3876),i=t.n(l),n=t(6299),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(s,d);let c=["",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1852)),"/Users/shahzerbaig/Desktop/Javascript/dev/live_projects/main-server/src/app/admin/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,3733)),"/Users/shahzerbaig/Desktop/Javascript/dev/live_projects/main-server/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,996,23)),"next/dist/client/components/not-found-error"]}],o=["/Users/shahzerbaig/Desktop/Javascript/dev/live_projects/main-server/src/app/admin/page.tsx"],x="/admin/page",h={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5680:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,3642,23)),Promise.resolve().then(t.t.bind(t,7586,23)),Promise.resolve().then(t.t.bind(t,7838,23)),Promise.resolve().then(t.t.bind(t,8057,23)),Promise.resolve().then(t.t.bind(t,7741,23)),Promise.resolve().then(t.t.bind(t,3118,23))},844:()=>{},698:(e,s,t)=>{Promise.resolve().then(t.bind(t,1977))},1977:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var a=t(7247),r=t(8964);let l=()=>{let[e,s]=(0,r.useState)("trades"),[t,l]=(0,r.useState)(!1),[i,n]=(0,r.useState)([]),[d,c]=(0,r.useState)([{id:"2777",name:"Big Bull",email:"anonym@ous.co",status:!1}]),[o,x]=(0,r.useState)(!0),[h,m]=(0,r.useState)(null),[p,u]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{(async()=>{try{x(!0);let e=await fetch("http://159.89.173.118/api/admin/");if(!e.ok)throw Error("Failed to fetch data from the API");let s=await e.json();n(s||[])}catch(e){e instanceof Error&&m(e.message),u(!0)}finally{x(!1)}})()},[]),(0,a.jsxs)("div",{className:"min-h-screen flex bg-gray-100",children:[(0,a.jsxs)("div",{className:`fixed top-0 left-0 z-40 h-full bg-white shadow-lg transition-transform ${t?"translate-x-0":"-translate-x-full"} md:translate-x-0 md:relative md:w-64`,children:[a.jsx("div",{className:"p-4 border-b",children:a.jsx("h2",{className:"text-lg font-bold text-black",children:"Admin Panel"})}),(0,a.jsxs)("nav",{className:"p-4",children:[a.jsx("button",{className:`w-full text-left p-2 mb-2 rounded text-black ${"trades"===e?"bg-blue-100 text-blue-600":"hover:bg-gray-200"}`,onClick:()=>s("trades"),children:"Trades"}),a.jsx("button",{className:`w-full text-left p-2 rounded text-black ${"users"===e?"bg-blue-100 text-blue-600":"hover:bg-gray-200"}`,onClick:()=>s("users"),children:"Users"})]})]}),t&&a.jsx("div",{className:"fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden",onClick:()=>l(!1)}),(0,a.jsxs)("div",{className:"flex-1 p-6 md:ml-64",children:[a.jsx("button",{className:"p-2 bg-blue-600 text-white rounded md:hidden",onClick:()=>l(!t),children:"Menu"}),o&&a.jsx("p",{children:"Loading..."}),h&&a.jsx("div",{className:"fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50",onClick:()=>u(!1),children:(0,a.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow w-full max-w-md",children:[a.jsx("h3",{className:"text-lg font-bold mb-4",children:"Error"}),a.jsx("p",{className:"mb-4",children:h}),a.jsx("button",{className:"bg-blue-600 text-white px-4 py-2 rounded",onClick:()=>{u(!1),"Failed to fetch data from the API"===h&&(window.location.href="/")},children:"Failed to fetch data from the API"===h?"Go to Home":"Close"})]})}),!o&&!h&&"trades"===e&&(0,a.jsxs)("div",{className:"bg-white w-80 p-6 rounded-lg shadow",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4 text-black",children:"Trades"}),a.jsx("div",{className:"overflow-auto",children:(0,a.jsxs)("table",{className:"min-w-full border border-gray-200",children:[a.jsx("thead",{className:"bg-gray-200 text-gray-600",children:(0,a.jsxs)("tr",{children:[a.jsx("th",{className:"p-3 text-left",children:"Action"}),a.jsx("th",{className:"p-3 text-left",children:"Type"}),a.jsx("th",{className:"p-3 text-left",children:"Stock"}),a.jsx("th",{className:"p-3 text-left",children:"Price"}),a.jsx("th",{className:"p-3 text-left",children:"Amount"}),a.jsx("th",{className:"p-3 text-left",children:"Currency"})]})}),a.jsx("tbody",{children:i.map((e,s)=>(0,a.jsxs)("tr",{className:`border-t text-black border-gray-200 ${"sell"===e.action?"bg-red-100":"buy"===e.action?"bg-green-300":""}`,children:[a.jsx("td",{className:"p-3",children:e.action}),a.jsx("td",{className:"p-3",children:e.type}),a.jsx("td",{className:"p-3",children:e.stock}),a.jsx("td",{className:"p-3",children:e.price}),a.jsx("td",{className:"p-3",children:e.amount}),a.jsx("td",{className:"p-3",children:e.currency})]},s))})]})})]}),!o&&!h&&"users"===e&&(0,a.jsxs)("div",{className:"bg-white w-11/12 p-6 rounded-lg shadow",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4 text-black",children:"Users"}),a.jsx("div",{className:"overflow-auto",children:(0,a.jsxs)("table",{className:"min-w-full border border-gray-200",children:[a.jsx("thead",{className:"bg-gray-200 text-gray-600",children:(0,a.jsxs)("tr",{children:[a.jsx("th",{className:"p-3 text-left",children:"ID"}),a.jsx("th",{className:"p-3 text-left",children:"Name"}),a.jsx("th",{className:"p-3 text-left",children:"Email"}),a.jsx("th",{className:"p-3 text-left",children:"Status"})]})}),a.jsx("tbody",{children:d?d.map(e=>(0,a.jsxs)("tr",{className:"border-t text-black border-gray-200",children:[a.jsx("td",{className:"p-3",children:e.id}),a.jsx("td",{className:"p-3",children:e.name}),a.jsx("td",{className:"p-3",children:e.email}),a.jsx("td",{className:"p-3",children:a.jsx("span",{style:{height:"10px",width:"10px",borderRadius:"50%",backgroundColor:e.status?"green":"red",display:"inline-block",marginRight:"8px"}})})]},e.id)):a.jsx(a.Fragment,{})})]})})]})]})]})}},1852:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});let a=(0,t(5347).createProxy)(String.raw`/Users/shahzerbaig/Desktop/Javascript/dev/live_projects/main-server/src/app/admin/page.tsx#default`)},3733:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c,metadata:()=>d});var a=t(2051),r=t(7818),l=t.n(r),i=t(494),n=t.n(i);t(5023);let d={title:"Digi Trader",description:"Be a Digital Trader",icons:{icon:[{url:"/favicon-16x16.png",sizes:"16x16"},{url:"/favicon-32x32.png",sizes:"32x32"}]}};function c({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:`${l().variable} ${n().variable} antialiased`,children:e})})}},5023:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[900],()=>t(4181));module.exports=a})();