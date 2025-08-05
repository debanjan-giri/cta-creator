import{c as g,D as j,d as v,r as d,a as k,e as N,g as C,j as e,b as S,h as B,L as T,y as E}from"./index-Dm6IITds.js";import{B as O,S as M,M as H,a as L,D as $,p as z}from"./DynamicCTATemplateCard-C5LDMODM.js";import"./GeminJsonCreator-CndDgsq8.js";import"./NoopTransition-DCrOcCUI.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],J=g("Copy",A);function R(s,c=j,p=v){const i=[];return Object.entries(s).forEach(([a,n])=>{n!=null&&(typeof n=="object"?c.forEach(r=>{const l=n[r];if(l!=null){const o=r!==p?`-${r}`:"";i.push(`${a}${o}-${l}`)}}):i.push(`${a}-${n}`))}),i}const m=d.forwardRef(({as:s="div",bsPrefix:c,className:p,direction:i,gap:a,...n},r)=>{c=k(c,i==="horizontal"?"hstack":"vstack");const l=N(),o=C();return e.jsx(s,{...n,ref:r,className:S(p,c,...R({gap:a},l,o))})});m.displayName="Stack";const P=d.memo(({editorData:s,activeMenu:c,setActiveMenu:p,isHover:i,domTree:a="",setDomTree:n=()=>{}})=>{const[r,l]=d.useState(!1),[o,h]=d.useState("Json"),u=d.useRef(null);d.useEffect(()=>{u.current&&n(u.current.outerHTML)},[s]),console.log("domTree",a);const f=t=>{const y=typeof t=="string"?t:JSON.stringify(t,null,2);navigator.clipboard.writeText(y),E.success("Copied to clipboard")},x=[{key:"Json",title:"JSON"},{key:"Html",title:"HTML"}],b=()=>o==="Json"?s:a,w=()=>{switch(o){case"Json":return e.jsx("pre",{className:"m-0",style:{whiteSpace:"pre-wrap",wordBreak:"break-word",overflow:"visible",maxWidth:"100%"},children:JSON.stringify(s,null,2)});case"Html":return e.jsx("pre",{className:"m-0",style:{whiteSpace:"pre-wrap",wordBreak:"break-word",overflow:"visible",maxWidth:"100%"},children:z(`${a}`)});default:return null}};return e.jsxs("div",{className:"p-3 m-3 bg-light rounded shadow-sm",style:{maxHeight:"100%",overflow:"hidden"},children:[e.jsx("style",{children:`
          .tab-btn {
            background: none;
            border: none;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #6c757d;
            position: relative;
            white-space: nowrap;
            cursor: pointer;
            font-weight: 500;
            transition: color 0.2s ease;
          }
          .tab-btn:hover {
            color: #0d6efd;
          }
          .tab-btn.active {
            color: #0d6efd;
          }
          .tab-btn .underline {
            position: absolute;
            bottom: -2px;
            left: 25%;
            right: 25%;
            height: 3px;
            background-color: #0d6efd;
            border-radius: 2px;
            transition: all 0.2s ease;
          }
          .tab-btn .icon { 
            margin-bottom: 0.25rem;
            font-size: 1.1rem;
          }
          /* Hide scrollbar for Chrome, Safari and Opera */
          .output-content::-webkit-scrollbar {
            display: none;
          }
          .output-content {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE 10+ */
          }
          .tab-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }
        `}),e.jsxs("div",{className:"bg-white rounded p-3 fw-semibold mb-3 d-flex justify-content-between align-items-center",children:[e.jsx("span",{className:"m-0",children:"Card Preview"}),e.jsx(m,{direction:"horizontal",gap:2,children:e.jsx(O,{bg:"secondary",style:{cursor:"pointer"},onClick:()=>{l(!r)},children:r?"Hide Output":"Show Output"})})]}),r?e.jsxs("div",{className:"bg-white p-4 rounded-3 border shadow-sm",children:[e.jsxs("div",{className:"tab-header ",children:[e.jsx(M,{slidesPerView:"auto",spaceBetween:12,modules:[H],mousewheel:{forceToAxis:!0},grabCursor:!0,freeMode:!0,style:{width:"auto",flex:1},children:x.map(t=>e.jsx(L,{style:{width:"auto"},children:e.jsxs("button",{className:`tab-btn ${o===t.key?"active":""}`,onClick:()=>h(t.key),children:[e.jsx("span",{children:t.title}),o===t.key&&e.jsx("div",{className:"underline"})]})},t.key))}),e.jsxs(B,{variant:"primary",size:"sm",className:"rounded d-flex align-items-center gap-1 ms-3",onClick:t=>{t.stopPropagation(),f(b())},children:["Copy ",e.jsx(J,{size:15})]})]}),e.jsx("div",{className:"output-content",style:{maxHeight:"500px",overflow:"auto",...o.toLowerCase()==="html"&&{border:"1px solid #dee2e6",borderRadius:"8px",pointerEvents:"none"}},children:w()})]}):e.jsx("div",{ref:u,children:s?e.jsx("div",{className:"bg-white rounded-3",children:e.jsx($,{isHover:i,setActiveMenu:p,...s})}):e.jsx("div",{className:"text-muted fst-italic p-2",children:"No card data available"})}),e.jsx(T,{position:"top-center",autoClose:2e3})]})});export{P as default};
