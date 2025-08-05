import{c as r,r as R,j as t}from"./index-Dm6IITds.js";import{I as x}from"./InputBox-FuFfNva1.js";import{S as U}from"./Selector-qfWk41Mc.js";import{A as T,a as V}from"./arrow-right-Dif753kM.js";import{A as $}from"./align-center-CTJPHlRF.js";import"./iconBase-CPV39RTW.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]],q=r("ArrowDownLeft",B);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],P=r("ArrowDownRight",H);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],G=r("ArrowDown",F);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]],K=r("ArrowUpLeft",J);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],W=r("ArrowUpRight",Q);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Y=r("ArrowUp",X),ee=({onChange:u,changedData:e,modalComponent:I})=>{var n,c,w,y,k,f,v,A,z,C,N;const[l,j]=R.useState({url:((c=(n=e==null?void 0:e.imageObject)==null?void 0:n[0])==null?void 0:c.url)||"",size:((y=(w=e==null?void 0:e.imageObject)==null?void 0:w[0])==null?void 0:y.size.replace("px",""))||"",position:((f=(k=e==null?void 0:e.imageObject)==null?void 0:k[0])==null?void 0:f.position)||"",alt:((A=(v=e==null?void 0:e.imageObject)==null?void 0:v[0])==null?void 0:A.alt)||"",extraClass:((C=(z=e==null?void 0:e.imageObject)==null?void 0:z[0])==null?void 0:C.extraClass)||""});R.useEffect(()=>{var o,m,s,b,_,O,S,E,L,M;j({url:((m=(o=e==null?void 0:e.imageObject)==null?void 0:o[0])==null?void 0:m.url)||"",size:((b=(s=e==null?void 0:e.imageObject)==null?void 0:s[0])==null?void 0:b.size.replace("px",""))||"",position:((O=(_=e==null?void 0:e.imageObject)==null?void 0:_[0])==null?void 0:O.position)||"",alt:((E=(S=e==null?void 0:e.imageObject)==null?void 0:S[0])==null?void 0:E.alt)||"",extraClass:((M=(L=e==null?void 0:e.imageObject)==null?void 0:L[0])==null?void 0:M.extraClass)||""})},[e]);const p=(o,m)=>{const s={...l,[o]:m};if(j(s),u){const b=[{url:s.url,size:`${s.size}px`,position:s.position,alt:s.alt,extraClass:s.extraClass}];u(b)}},i=!((N=l.url)!=null&&N.trim());return console.log("ImageEditor",i),t.jsxs("div",{className:"p-3 bg-white rounded shadow-sm ",children:[t.jsx("div",{className:"mb-3",children:t.jsx(x,{label:"Url",placeholder:"Image Url",value:l.url,setValue:o=>p("url",o)})}),t.jsx("div",{className:"mb-3",children:t.jsx(x,{label:"Size in pixels",placeholder:"Image Size in pixels",value:l.size,isDisabled:i,setValue:o=>p("size",o)})}),t.jsx("div",{className:"mb-3",children:t.jsx(U,{isDisabled:i,label:"Select Position",data:[{key:"right",label:"Right",icon:T},{key:"left",label:"Left",icon:V},{key:"top",label:"Top",icon:Y},{key:"bottom",label:"Bottom",icon:G},{key:"top-right",label:"Top Right",icon:W},{key:"top-left",label:"Top Left",icon:K},{key:"bottom-left",label:"Bottom Left",icon:q},{key:"bottom-right",label:"Bottom Right",icon:P},{key:"top-center",label:"Top Center",icon:$}],value:l.position,onSelect:o=>p("position",o)})}),t.jsx("div",{className:"mb-3",children:t.jsx(x,{isDisabled:i,label:"Alt Text",value:l.alt,setValue:o=>p("alt",o),placeholder:"Enter Alt Text"})}),t.jsx("div",{className:"mb-3",children:t.jsx(x,{isDisabled:i,label:"Extra Class",placeholder:"Enter Bootstrap Class",value:l.extraClass,isTextarea:!0,setValue:o=>p("extraClass",o)})}),t.jsx("div",{style:{opacity:i?.5:1,pointerEvents:i?"none":"auto"},children:I})]})};export{ee as default};
