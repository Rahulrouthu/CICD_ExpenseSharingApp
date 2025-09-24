import{r as v,b as Yo,a as z}from"./vendor-BKU87Gzz.js";import{h as Jo,c as W,p as y,f as jr,G as Y}from"./ui-ClE06_EU.js";import{u as Ue,a as Xo,N as Go,O as Ko,L as Jr,B as Qo,R as Zo,b as ie,c as es}from"./router-DZ36VwN9.js";import{P as be,R as ts,L as rs,C as ns,X as os,Y as ss,T as _n,a as Ln,b as as,c as is,d as cs,e as ls}from"./charts-NwoJJowT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var Nn={exports:{}},Bt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ds=v,us=Symbol.for("react.element"),fs=Symbol.for("react.fragment"),hs=Object.prototype.hasOwnProperty,ms=ds.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ps={key:!0,ref:!0,__self:!0,__source:!0};function Bn(e,t,r){var n,o={},s=null,a=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)hs.call(t,n)&&!ps.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:us,type:e,key:s,ref:a,props:o,_owner:ms.current}}Bt.Fragment=fs;Bt.jsx=Bn;Bt.jsxs=Bn;Nn.exports=Bt;var i=Nn.exports,ur={},Xr=Yo;ur.createRoot=Xr.createRoot,ur.hydrateRoot=Xr.hydrateRoot;const gs=v.createContext(null),Kt={didCatch:!1,error:null};class ys extends v.Component{constructor(t){super(t),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Kt}static getDerivedStateFromError(t){return{didCatch:!0,error:t}}resetErrorBoundary(){const{error:t}=this.state;if(t!==null){for(var r,n,o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];(r=(n=this.props).onReset)===null||r===void 0||r.call(n,{args:s,reason:"imperative-api"}),this.setState(Kt)}}componentDidCatch(t,r){var n,o;(n=(o=this.props).onError)===null||n===void 0||n.call(o,t,r)}componentDidUpdate(t,r){const{didCatch:n}=this.state,{resetKeys:o}=this.props;if(n&&r.error!==null&&bs(t.resetKeys,o)){var s,a;(s=(a=this.props).onReset)===null||s===void 0||s.call(a,{next:o,prev:t.resetKeys,reason:"keys"}),this.setState(Kt)}}render(){const{children:t,fallbackRender:r,FallbackComponent:n,fallback:o}=this.props,{didCatch:s,error:a}=this.state;let c=t;if(s){const f={error:a,resetErrorBoundary:this.resetErrorBoundary};if(typeof r=="function")c=r(f);else if(n)c=v.createElement(n,f);else if(o===null||v.isValidElement(o))c=o;else throw a}return v.createElement(gs.Provider,{value:{didCatch:s,error:a,resetErrorBoundary:this.resetErrorBoundary}},c)}}function bs(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e.length!==t.length||e.some((r,n)=>!Object.is(r,t[n]))}const Un=Jo`
// Colors adapted from https://tailwindcss.com/docs/customizing-colors 

:root {
  &,&.light-mode{
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;
    --color-green-100: #dcfce7;
    --color-green-500: #4aa04a;
    --color-green-700: #15803d;
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;

    --color-red-100: #fee2e2;
    --color-red-500: #d31b1b;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;


    --image-grayscale: 0;
    --image-opacity: 100%;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  }
  &.dark-mode{
    --color-grey-0: #18212f;
    --color-grey-50: #111827;
    --color-grey-100: #1f2937;
    --color-grey-200: #374151;
    --color-grey-300: #4b5563;
    --color-grey-400: #6b7280;
    --color-grey-500: #9ca3af;
    --color-grey-600: #d1d5db;
    --color-grey-700: #e5e7eb;
    --color-grey-800: #f3f4f6;
    --color-grey-900: #f9fafb;

    --color-blue-100: #075985;
    --color-blue-700: #e0f2fe;
    --color-green-100: #166534;
    --color-green-700: #ae7;
    --color-yellow-100: #854d0e;
    --color-yellow-700: #fef9c3;
    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;
    --color-indigo-100: #3730a3;
    --color-indigo-700: #e0e7ff;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 1.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;
    
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  background-color: var(--color-grey-100);
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);
  background-color: var(--color-grey-100);
  transition: color 0.3s, background-color 0.3s;
  max-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`,xs={sm:W`
    font-size: 1.2rem;
    padding: 0.34rem 0.7rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    border-radius: 0%;
  `,md:W`
    font-size: 1.4rem;
    padding: 0.7rem 1.1rem;
    font-weight: 500;
    text-align: center;
  `,lg:W`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `},vs={primary:W`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,secondary:W`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,success:W`
    color: var(--color-green-500);
    background-color: var(--color-green-500);

    &:hover {
      background-color: var(--color-green-700);
    }
  `,danger:W`
    color: var(--color-red-500);
    background-color: var(--color-red-500);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,text:W`
    color: ${e=>e||"var(--color-brand-100)"};
    background-color: transparent;
    box-shadow: none;

    &:hover {
      background-color: var(--color-grey-50);
    }
  `},ws={primary:W`
    color: var(--color-red-100);
  `,secondary:W`
    color: var(--color-grey-600);
  `,success:W`
    color: var(--color-green-500);
  `,accent:W`
    color: var(--color-silver-700);
  `,danger:W`
    color: var(--color-red-700);
  `},pe=y.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  &:focus {
    outline: none; 
  } 
  ${e=>xs[e.size]}
  ${e=>vs[e.variation]}
  ${e=>ws[e.color]}
`;pe.defaultProps={variation:"primary",size:"md",color:"var(--color-brand-600)"};const Te=y.h1`
    ${e=>e.as==="h1"&&W`
        font-size: 3rem;
        font-weight: 600;
    `}
   
    ${e=>e.as==="h2"&&W`
        font-size: 2rem;
        font-weight: 600;
    `}
    ${e=>e.as==="h3"&&W`
        font-size: 1.5rem;
        font-weight: 500;
    `}
    
    ${e=>e.as==="h-center"&&W`
        font-size: 3rem;
        font-weight: 600;
        text-align: center;
    `}
    padding-left: 1rem 0; 
    line-height: 1.4;
`,Es=y.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`,js=y.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;function Ss({error:e,resetErrorBoundary:t}){return i.jsxs(i.Fragment,{children:[i.jsx(Un,{}),i.jsx(Es,{children:i.jsxs(js,{children:[i.jsx(Te,{as:"h1",children:"Something went wrong! 🧐"}),i.jsx("code",{style:{color:"red"},children:i.jsx(i.Fragment,{children:e.message})}),i.jsx("br",{}),i.jsx(pe,{onClick:t,children:"Try again"})]})})]})}const ks=jr`
  to {
    transform: rotate(1turn)
  }
`,Fs=y.div`
  margin: 4.8rem auto;
  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-brand-600));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${ks} 1.5s infinite linear;
`,We=()=>{const[e,t]=v.useState(!0),[r,n]=v.useState(null),[o,s]=v.useState(null),{loggedInUser:a}=ot();return v.useEffect(()=>{const c=async()=>{if(a){t(!0);try{const d=await fetch(`http://localhost:8080/users/user/${a}`);if(d.ok){const u=await d.json();n(u),console.log(u),u.profileImageFileName&&(console.log(u.profileImageFileName),f(u.profileImageFileName))}else console.error("Failed to fetch user data")}catch(d){console.error("Error fetching user data:",d)}finally{t(!1)}}else t(!1),n(null)},f=async d=>{try{const u=await fetch(`http://localhost:8080/users/user/profileImage/${d}`);if(u.ok){const h=await u.blob();console.log(h);const w=URL.createObjectURL(h);console.log("imageurl",w),s(w)}else console.error("Failed to fetch profile image")}catch(u){console.error("Error fetching profile image:",u)}};c()},[a]),{isLoading:e,user:r,profileImage:o}},In=v.createContext(),Cs=({children:e})=>{const[t,r]=v.useState(!1),[n,o]=v.useState(!0),[s,a]=v.useState(null),c=()=>{r(!0),o(!1)},f=()=>{r(!1),a(null)},d=t;return i.jsx(In.Provider,{value:{isAuthenticated:d,login:c,logout:f,isLoading:n,loggedInUser:s,setLoggedInUser:a},children:e})},ot=()=>v.useContext(In);function Os({children:e}){const t=y.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;y.div`
  display: "flex";
  justify-content: center;
  align-items: center;
  height: 100vh;
`;const r=Ue(),n=Xo(),{isAuthenticated:o,isLoading:s}=ot(),{user:a}=We();if(v.useEffect(()=>{o||r("/signin")},[o,s,r]),s)return i.jsx(t,{children:i.jsx(Fs,{})});const c=o&&((a==null?void 0:a.role)==="ADMIN"||(a==null?void 0:a.role)==="ROLE_ADMIN");return console.log(c),!c&&n.pathname.startsWith("/admin")?(setTimeout(()=>{r("/dashboard")},3e3),null):e}function As(){const e=Ue();return()=>e(-1)}const Ts=()=>{const{logout:e}=ot(),t=Ue(),r=async()=>{e(),t("/signin")};return z.useEffect(()=>{r()},[]),null},Ae=y.button`
  background: ${({bg:e})=>e||"none"};
  color: ${({color:e})=>e||"var(--color-brand-600)"};
  border: none;
  padding: ${({size:e})=>{switch(e){case"sm":return"0.6rem";case"md":return"1rem";case"lg":return"1.5rem";default:return"1rem"}}};
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  outline: none;
  display: flex !important;
  align-items: center; 
  justify-content: center;
  font-size: ${({iconSize:e})=>e?`calc(${e} - 0.5rem)`:"1.6rem"};
  text-align: center; 
  gap: 0.5rem; 
  &:hover, &:focus {
    background-color: var(--color-grey-100);
    outline: none;
  }
  & svg {
    width: ${({iconSize:e})=>e||"1.6rem"};
    height: ${({iconSize:e})=>e||"1.6rem"};
    color: ${({color:e})=>e||"var(--color-brand-600)"};
  }
`;function Ds(e){return Y({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"},child:[]},{tag:"path",attr:{d:"m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"},child:[]}]})(e)}function Rs(e){return Y({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"},child:[]}]})(e)}function Ms(e){return Y({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"},child:[]}]})(e)}function Ps(e){return Y({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1 2 6v2h20V6z"},child:[]}]})(e)}function _s(e){return Y({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"},child:[]}]})(e)}function Ls(e,t){const[r,n]=v.useState(()=>{const o=localStorage.getItem(t);return o?JSON.parse(o):e});return v.useEffect(()=>{localStorage.setItem(t,JSON.stringify(r))},[r,t]),[r,n]}const Vn=v.createContext();function Ns({children:e}){const[t,r]=Ls(!1,"isDarkMode"),n=v.useCallback(()=>{r(s=>!s)},[r]),o=v.useMemo(()=>({isDarkMode:t,toggleDarkMode:n}),[t,n]);return v.useEffect(()=>{t?(document.documentElement.classList.add("dark-mode"),document.documentElement.classList.remove("light-mode")):(document.documentElement.classList.add("light-mode"),document.documentElement.classList.remove("dark-mode"))},[t]),i.jsx(Vn.Provider,{value:o,children:e})}function zn(){const e=v.useContext(Vn);if(e===void 0)throw new Error("Dark mode context is used outside of provider!");return e}function Bs(e){return Y({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"},child:[]}]})(e)}function Us(e){return Y({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z"},child:[]}]})(e)}function Is(e){return Y({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"},child:[]}]})(e)}function Vs(){const{isDarkMode:e,toggleDarkMode:t}=zn();return i.jsx(Ae,{iconSize:"2.1rem",onClick:t,children:e?i.jsx(Is,{color:"var(--color-grey-700)"}):i.jsx(Bs,{})})}const zs=y.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`,$s=y.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`,Hs=()=>{const e=Ue(),{user:t,profileImage:r}=We();if(!t)return i.jsx("div",{children:"No user data available"});console.log("user:",t);const{username:n}=t;return i.jsxs(zs,{children:[i.jsx($s,{src:r||"default-user.jpg",alt:n,onClick:()=>e("/account")}),i.jsx("span",{children:n})]})},qs=y.ul`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;function Ws(){const{user:e,profileImage:t}=We(),r=Ue(),n=e&&t;return console.log("hasAvatar",n),i.jsxs(qs,{children:[i.jsx("li",{children:n?i.jsx(Hs,{}):i.jsx(Ae,{iconSize:"2.4rem",onClick:()=>r("/account"),children:i.jsx(Rs,{})})}),i.jsx("li",{children:i.jsx(Vs,{})}),i.jsx("li",{children:i.jsx(Ae,{iconSize:"2.4rem",onClick:()=>r("/signout"),children:i.jsx(_s,{})})})]})}const Ys=y.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;function Js(){return i.jsx(Ys,{children:i.jsx(Ws,{})})}function Xs(e){return Y({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M268.383 22.168l-55.918 84.482 29.717 3.733c-9.22 30.13-11.095 50.878-8.885 92.12 14.138-2.23 25.56-3.025 40.586 1.39-9.877-36.84-8.844-49.427-4.88-89.768l32.622 2.277-33.242-94.234zm218.482 2.21l-108.36 30.03 20.915 25.975c-49.512 31.019-80.331 55.548-104.74 123.164 13.201-.152 28.098 2.921 44.174 9.004 5.728-44.666 33.74-76.14 79.302-108.918l19.983 24.816 48.726-104.07zm-463.574 2.31L89.17 129.173l19.084-28.711c35.554 32.44 58.145 76.33 57.308 107.43 18.568-8.696 29.927-9.527 49.735-3.778-8.105-31.203-43.577-108.722-91.639-129.103l16.57-26.037L23.292 26.687zm276.117 214.667c-5.28.12-10.21 2.415-16.937 9.594l-6.565 6.969-6.812-6.72c-7.387-7.28-13.216-9.29-19.125-9.03-5.908.26-12.855 3.367-20.625 9.656l-6.217 5.03-5.906-5.374c-8.9-8.052-16.485-10.439-23.75-10.064-5.288.274-10.775 2.266-16.25 5.75l40.966 73.69c15.454 9.451 47.034 13.006 68.75 2.062l39.594-73.344c-7.51-3.062-14.26-6.202-20.094-7.406-2.112-.437-4.07-.756-5.968-.813-.354-.01-.71-.008-1.06 0zm-89.97 96.188v.002c-18.035 12.742-32.516 34.717-38.125 66.904-5.435 31.196 3.129 52.266 18.283 66.625 15.155 14.36 37.902 21.736 61 21.436 23.1-.3 46.136-8.31 61.625-22.936 15.49-14.627 24.249-35.425 19.281-65.187-5.137-30.757-18.4-52.148-35.19-65.094-28.482 15.056-64.095 11.856-86.875-1.75z"},child:[]}]})(e)}function Gs(e){return Y({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.814 32.316c-3.955-.014-7.922-.01-11.9.007-19.147.089-38.6.592-58.219 1.32l5.676 24.893c20.431-2.31 42.83-4.03 65.227-4.89 12.134-.466 24.194-.712 35.892-.65 35.095.183 66.937 3.13 87.77 11.202l8.908 3.454-3.977 8.685c-29.061 63.485-35.782 124.732-31.228 184.826 2.248-71.318 31.893-134.75 70.81-216.068-52.956-8.8-109.634-12.582-168.959-12.78zm28.034 38.79c-8.74.007-17.65.184-26.559.526-41.672 1.6-83.199 6.49-110.264 12.096 30.233 56.079 54.69 112.287 70.483 167.082a71.934 71.934 0 0 1 5.894.045c4.018.197 7.992.742 11.875 1.59-16.075-51.397-34.385-98.8-57.146-146.131l-5.143-10.694 11.686-2.068c29.356-5.198 59.656-7.21 88.494-7.219 1.922 0 3.84.007 5.748.024 18.324.16 35.984 1.108 52.346 2.535l11.054.965-3.224 10.617c-18.7 61.563-22.363 127.678-11.79 190.582.176.163.354.325.526.49 3.813-1.336 7.38-2.698 10.705-4.154-8.254-67.394-4.597-136.923 26.229-209.201-17.202-4.383-43.425-6.674-72.239-7.034a656.656 656.656 0 0 0-8.675-.05zm144.945 7.385c-30.956 65.556-52.943 118.09-56.547 174.803 20.038-66.802 58.769-126.685 102.904-165.158a602.328 602.328 0 0 0-46.357-9.645zM103.832 97.02c-18.76 3.868-37.086 8.778-54.812 15.562 8.626 7.48 24.22 21.395 43.14 39.889 8.708-8.963 17.589-17.818 26.852-25.87a1067.587 1067.587 0 0 0-15.18-29.581zm142.023 7.482c-13.62-.066-27.562.324-41.554 1.293-1.468 13.682-9.56 26.482-19.225 39.07 15.431 36.469 28.758 73.683 40.756 113.194 18.375 5.42 36.554 11.827 51.28 19.504-5.47-42.458-4.722-85.963 2.38-128.508-12.885-13.31-19.597-28.09-20.135-44.34a621.48 621.48 0 0 0-13.502-.213zm182.018 26.985c-24.73 29.3-46.521 65.997-61.37 105.912 27.264-38.782 60.79-69.032 96.477-90.4a1318.664 1318.664 0 0 0-35.107-15.512zm-300.74 11.959c-14.594 13.188-29.014 29.017-44.031 44.097 32.289 19.191 59.791 41.918 82.226 67.66 1.393-.526 2.8-.999 4.215-1.43-10.498-36.096-24.885-73.033-42.41-110.327zM360.52 268.198c-16.397 19.788-31.834 30.235-53.09 38.57 2.391 9.22-1.16 19.805-9.334 27.901-4.808 4.761-10.85 10.188-19.684 13.715a62.896 62.896 0 0 0 3.9 2.127c12.364 6.17 34.207 4.18 54.5-5.049 20.23-9.2 38.302-25.092 45-41.191 3.357-9.05.96-13.77-4.917-20.692-4.184-4.925-10.295-9.89-16.375-15.38zm-170.079.586c-10.715-.098-21.597 2.994-30.59 9.76-12.79 9.623-22.65 26.784-22.738 55.934v.2l-.01.2c-2.92 61.381 1.6 89.7 10.555 105.065 7.904 13.562 21.05 20.054 40.28 31.994.916-2.406 1.87-5.365 2.765-9.098 2.277-9.499 4.161-22.545 5.355-36.975 2.389-28.858 2.04-63.51-1.955-88.445l-2.111-13.19 13.016 2.995c31.615 7.273 49.7 8.132 60.2 6.28 10.502-1.854 14.061-5.523 20.221-11.624 5.79-5.732 5.682-7.795 4.456-11.021-1.227-3.227-6.149-8.545-14.5-13.633-16.703-10.176-45.085-19.611-71.614-26.647a53.988 53.988 0 0 0-13.33-1.795zm189.1 69.416c-10.013 9.754-22.335 17.761-35.277 23.647-20.983 9.542-44.063 13.907-63.211 7.553-6.76 2.516-10.687 5.407-12.668 7.8-2.718 3.284-2.888 5.7-1.967 9.16.92 3.46 3.665 7.568 7.059 10.524 3.393 2.956 7.426 4.492 8.959 4.564 46.794 2.222 67.046-11.207 92.277-26.783 7.358-4.542 10.174-13.743 9.469-22.931-.353-4.594-1.69-8.911-3.233-11.63a9.009 9.009 0 0 0-1.408-1.904zm-166.187 9.096c2.727 25.068 2.772 54.314.642 80.053-1.247 15.072-3.175 28.779-5.789 39.685-1.137 4.746-2.388 8.954-3.9 12.659l146.697-6.465c-1.656-6.149-3.344-12.324-5.031-18.502a127.004 127.004 0 0 1-17.24 4.424l.044.73-8.316.518c-5.121.614-10.452.953-15.983.992l-83.86 5.21 2.493-11.607c7.947-37.006 8.68-69.589 3.778-105.234a353.433 353.433 0 0 1-13.536-2.463zm31.972 4.684c3.948 31.933 3.473 62.41-2.406 95.2l19.264-1.196a39.44 39.44 0 0 1-6.1-14.778c-1.296-6.88-.575-14.538 3.926-20.87.199-.281.414-.55.627-.821-5.246-4.845-9.628-11.062-11.614-18.524-2.114-7.944-.794-17.67 5.497-25.27 2.079-2.51 4.592-4.776 7.543-6.816-2.61-2.08-4.898-4.285-6.874-6.582-3.064.021-6.345-.093-9.863-.343zm132.666 41.785c-23.456 14.253-49.81 27.876-96.41 25.664a26.402 26.402 0 0 1-4.518-.615c-1.233.553-1.891 1.256-2.382 1.947-.963 1.355-1.532 3.8-.909 7.113 1.248 6.627 7.525 13.889 13.37 14.569 41.385 4.813 69.979-8.726 87.341-24.477 8-7.258 8.068-11.9 6.89-16.951-.59-2.523-1.89-4.969-3.382-7.25zm-6.683 49.062a114.657 114.657 0 0 1-8.547 4.86c1.65 6.051 3.304 12.102 4.937 18.154l19.92-3.572c-5.14-4.387-9.162-8.954-12.39-13.496-1.442-2.029-2.713-4.001-3.92-5.946z"},child:[]}]})(e)}const Ks=jr`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Qs=y.div`
  font-size: 2.1rem;
  color: var(--color-grey-700);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Ks} 1s ease;
`;function Zs(){const{isDarkMode:e}=zn(),t=i.jsx(Gs,{size:30,color:"var(--color-indigo-700)"});return i.jsxs(Qs,{children:[t,"   ExpenseWise"]})}const ea=y.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,ht=y(Go)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;function ta(){const{user:e}=We();return i.jsx("nav",{children:i.jsxs(ea,{children:[i.jsx("li",{children:i.jsxs(ht,{to:"/dashboard",children:[i.jsx(Ds,{})," ",i.jsx("span",{children:"Home"})]})}),i.jsx("li",{children:i.jsxs(ht,{to:"/split/expense",children:[i.jsx(Xs,{})," ",i.jsx("span",{children:"Split Expense"})]})}),i.jsx("li",{children:i.jsxs(ht,{to:"/account",children:[i.jsx(Ms,{})," ",i.jsx("span",{children:"Account"})]})}),((e==null?void 0:e.role)==="ROLE_ADMIN"||(e==null?void 0:e.role)==="ADMIN")&&i.jsx("li",{children:i.jsxs(ht,{to:"/admin",children:[i.jsx(Us,{})," ",i.jsx("span",{children:"Admin Pannel"})]})})]})})}const ra=y.aside`
    background-color: var(--color-grey-0);
    padding: 1.6rem 2.3rem 3.2rem;
    border-right: 1px solid var(--color-grey-100);
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;function na(){return i.jsxs(ra,{children:[i.jsx(Zs,{}),i.jsx(ta,{})]})}const oa=y.main`
    background-color: var(--color-grey-100);
    padding: 4rem 4.7rem 6.4rem;
`,sa=y.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`,aa=y.div`
    max-width: 100rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;function ia(){return i.jsxs(sa,{children:[i.jsx(Js,{}),i.jsx(na,{}),i.jsx(oa,{children:i.jsx(aa,{children:i.jsx(Ko,{})})})]})}const ca=y.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-start;
`;y.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;y.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;y.div`
  margin: 30px 0;
`;y.div`
  margin: 20px;
`;y.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`;y.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;const Sr=y.input.attrs({type:"file"})`
  font-size: 1rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.3rem 0.7rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;y.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;y.button`
  background-color: var(--color-grey-0);
  border: none;

  ${e=>e.active&&W`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;const la=y.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  background: var(--color-grey-100);
  backdrop-filter: blur(5px);
  box-shadow: var(--shadow-md);
`,it=y.form`
  padding: ${e=>e.type==="regular"?"2.1rem":"1rem"};
  background-color: ${e=>e.type==="regular"?"var(--color-grey-100)":"transparent"};
  display: ${e=>e.type==="regular"?"block":"inline-block"};
  border: ${e=>e.type==="regular"?"1px solid var(--color-grey-300)":"none"};
  border-radius: ${e=>e.type==="regular"?"var(--border-radius-md)":"0"};
  /* width: ${e=>e.type==="modal"?"80rem":"auto"}; */
  width: 100%;
  overflow: hidden;
  font-size: 1.4rem;
  color: var(--color-grey-700);
  & > * {
    display: block;
    /* margin-bottom: 1rem; */
  }
  & input{
    width: 100%;
    margin-bottom: 1rem;
  }
  & Button{
    margin: 1rem 0 1rem 0;
  }
`,da=y.span`
  color: ${e=>e||"var(--color-grey-100)"};
  margin-right: 10px;
  margin-top: 1rem;
`,He=y.div`
  color: var(--color-red-500);
  margin-bottom: 10px;
`;it.defaultProps={type:"regular"};y.div`
  display: grid;
  align-items: center;
  grid-template-columns: 21rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;y.label`
  font-weight: 500;
`;y.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;y.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;y.label`
  font-weight: 500;
`;y.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;const ne=y.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  margin-top: 1rem;
  box-shadow: var(--shadow-sm);
`;y.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;y.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;y.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${e=>e.position.x}px;
  top: ${e=>e.position.y}px;
`;y.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;const ua=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`,fa=y.div`
  position: relative;
  width: 300px;
  background-color: var(--color-grey-100);
  border-radius: 8px;
  padding: 20px;
  box-shadow: var(--shadow-sm);
`,ha=y.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: silver;
  box-sizing: border-box;
`,kr=({isOpen:e,onClose:t,children:r})=>e?i.jsx(ua,{onClick:t,children:i.jsxs(fa,{onClick:n=>n.stopPropagation(),children:[i.jsx(ha,{onClick:t,children:"×"}),r]})}):null;y.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;y.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;y.div`
  display: flex;
  gap: 0.6rem;
`;y.button`
  background-color: ${e=>e.active?" var(--color-brand-600)":"var(--color-grey-50)"};
  color: ${e=>e.active?" var(--color-brand-50)":"inherit"};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;const ma=y.input.attrs({type:"radio"})`
  /* Hide the default radio button */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px !important;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 50%;
  outline: none;
  margin: 0 8px 0 0 !important;
  position: relative;
  cursor: pointer;

  /* Checkmark for the selected state */
  &:checked::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: var(--color-brand-500);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,pa=y.label`
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
`,Me=({id:e,name:t,value:r,checked:n,onChange:o,label:s})=>i.jsxs(pa,{htmlFor:e,children:[i.jsx(ma,{id:e,name:t,value:r,checked:n,onChange:o}),s]}),Ut=y.div`
    display: flex;
    ${e=>e.type==="horizontal"&&W`
        justify-content: space-between;
        align-items: center;
    `}
    ${e=>e.type==="vertical"&&W`
        flex-direction: column;
        gap: 1.6rem;
    `}
`;Ut.defaultProps={type:"vertical"};const ga=y.select`
  font-size: 1.4rem;
  padding: 1rem 1.2rem;
  box-sizing: border-box;
  /* appearance: none; */
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;function ya({options:e,value:t,onChange:r,...n}){return i.jsx(ga,{value:t,onChange:r,...n,children:e.map(o=>i.jsx("option",{value:o.value,children:o.label},o.value))})}function ba(e){return Y({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"},child:[]}]})(e)}const xa=jr`
  to {
    transform: rotate(1turn)
  }
`;y(ba)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${xa} 1.5s infinite linear;
`;const va=y.div`
  width: 100%;
  max-width: 90%;
  border-collapse: collapse;
  overflow: scroll;
  overflow-x: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
`,wa=y.table`
  color: var(--color-grey-100);
  width: 100%;
  border-collapse: collapse;
`,Ea=y.thead`
  font-weight: bold;
  border: 1px solid var(--color-silver-700);
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  background-color: var(--color-silver-100);
  color: var(--color-silver-100);
`,ja=y.tbody``,Gr=y.tr`
  &:nth-child(even) {
    background-color: var(--color-grey-100);
  }
`,Qt=y.td`
  max-width: 300px;
  border: 1px solid var(--color-grey-300);
  padding: 1rem;
  color: var(--color-silver-700);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function Sa(e){return e.split(/(?=[A-Z])/).map(r=>r.toLowerCase()).join("-")}const $n=({headers:e,data:t,actions:r})=>{const n=[...e,"Actions"];return i.jsx(va,{children:i.jsxs(wa,{children:[i.jsx(Ea,{children:i.jsx(Gr,{children:n.map(o=>i.jsx(Qt,{children:Sa(o)},o))})}),i.jsx(ja,{children:t.map((o,s)=>i.jsxs(Gr,{children:[e.map(a=>i.jsx(Qt,{children:o[a]},a)),i.jsx(Qt,{children:i.jsx(ca,{children:r.map((a,c)=>i.jsxs(Ae,{color:a.color,iconSize:"2.1rem",onClick:()=>a.onClick(o),children:[a.icon," ",a.label]},c))})})]},s))})]})})};$n.propTypes={headers:be.arrayOf(be.string).isRequired,data:be.arrayOf(be.object).isRequired,actions:be.arrayOf(be.shape({label:be.string.isRequired,icon:be.element.isRequired,color:be.string.isRequired,onClick:be.func.isRequired})).isRequired};y.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;y.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${e=>e.type}-700);
  background-color: var(--color-${e=>e.type}-100);
`;const ka=y.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
`,Fa=y.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`,Ca=y.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;function Oa(){const e=As();return i.jsx(Fa,{children:i.jsxs(Ca,{children:[i.jsx(Te,{as:"h1",children:"The page you are looking for could not be found 😢"}),i.jsx(pe,{onClick:e,size:"md",children:"← Go back"})]})})}let Aa={data:""},Ta=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Aa,Da=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ra=/\/\*[^]*?\*\/|  +/g,Kr=/\n+/g,Ce=(e,t)=>{let r="",n="",o="";for(let s in e){let a=e[s];s[0]=="@"?s[1]=="i"?r=s+" "+a+";":n+=s[1]=="f"?Ce(a,s):s+"{"+Ce(a,s[1]=="k"?"":t)+"}":typeof a=="object"?n+=Ce(a,t?t.replace(/([^,])+/g,c=>s.replace(/(^:.*)|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,c):c?c+" "+f:f)):s):a!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Ce.p?Ce.p(s,a):s+":"+a+";")}return r+(t&&o?t+"{"+o+"}":o)+n},we={},Hn=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Hn(e[r]);return t}return e},Ma=(e,t,r,n,o)=>{let s=Hn(e),a=we[s]||(we[s]=(f=>{let d=0,u=11;for(;d<f.length;)u=101*u+f.charCodeAt(d++)>>>0;return"go"+u})(s));if(!we[a]){let f=s!==e?e:(d=>{let u,h,w=[{}];for(;u=Da.exec(d.replace(Ra,""));)u[4]?w.shift():u[3]?(h=u[3].replace(Kr," ").trim(),w.unshift(w[0][h]=w[0][h]||{})):w[0][u[1]]=u[2].replace(Kr," ").trim();return w[0]})(e);we[a]=Ce(o?{["@keyframes "+a]:f}:f,r?"":"."+a)}let c=r&&we.g?we.g:null;return r&&(we.g=we[a]),((f,d,u,h)=>{h?d.data=d.data.replace(h,f):d.data.indexOf(f)===-1&&(d.data=u?f+d.data:d.data+f)})(we[a],t,n,c),a},Pa=(e,t,r)=>e.reduce((n,o,s)=>{let a=t[s];if(a&&a.call){let c=a(r),f=c&&c.props&&c.props.className||/^go/.test(c)&&c;a=f?"."+f:c&&typeof c=="object"?c.props?"":Ce(c,""):c===!1?"":c}return n+o+(a??"")},"");function It(e){let t=this||{},r=e.call?e(t.p):e;return Ma(r.unshift?r.raw?Pa(r,[].slice.call(arguments,1),t.p):r.reduce((n,o)=>Object.assign(n,o&&o.call?o(t.p):o),{}):r,Ta(t.target),t.g,t.o,t.k)}let qn,fr,hr;It.bind({g:1});let je=It.bind({k:1});function _a(e,t,r,n){Ce.p=t,qn=e,fr=r,hr=n}function De(e,t){let r=this||{};return function(){let n=arguments;function o(s,a){let c=Object.assign({},s),f=c.className||o.className;r.p=Object.assign({theme:fr&&fr()},c),r.o=/ *go\d+/.test(f),c.className=It.apply(r,n)+(f?" "+f:"");let d=e;return e[0]&&(d=c.as||e,delete c.as),hr&&d[0]&&hr(c),qn(d,c)}return o}}var La=e=>typeof e=="function",At=(e,t)=>La(e)?e(t):e,Na=(()=>{let e=0;return()=>(++e).toString()})(),Wn=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ba=20,Et=new Map,Ua=1e3,Qr=e=>{if(Et.has(e))return;let t=setTimeout(()=>{Et.delete(e),Ie({type:4,toastId:e})},Ua);Et.set(e,t)},Ia=e=>{let t=Et.get(e);t&&clearTimeout(t)},mr=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Ba)};case 1:return t.toast.id&&Ia(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:r}=t;return e.toasts.find(s=>s.id===r.id)?mr(e,{type:1,toast:r}):mr(e,{type:0,toast:r});case 3:let{toastId:n}=t;return n?Qr(n):e.toasts.forEach(s=>{Qr(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===n||n===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+o}))}}},jt=[],St={toasts:[],pausedAt:void 0},Ie=e=>{St=mr(St,e),jt.forEach(t=>{t(St)})},Va={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},za=(e={})=>{let[t,r]=v.useState(St);v.useEffect(()=>(jt.push(r),()=>{let o=jt.indexOf(r);o>-1&&jt.splice(o,1)}),[t]);let n=t.toasts.map(o=>{var s,a;return{...e,...e[o.type],...o,duration:o.duration||((s=e[o.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||Va[o.type],style:{...e.style,...(a=e[o.type])==null?void 0:a.style,...o.style}}});return{...t,toasts:n}},$a=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Na()}),ct=e=>(t,r)=>{let n=$a(t,e,r);return Ie({type:2,toast:n}),n.id},ue=(e,t)=>ct("blank")(e,t);ue.error=ct("error");ue.success=ct("success");ue.loading=ct("loading");ue.custom=ct("custom");ue.dismiss=e=>{Ie({type:3,toastId:e})};ue.remove=e=>Ie({type:4,toastId:e});ue.promise=(e,t,r)=>{let n=ue.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(o=>(ue.success(At(t.success,o),{id:n,...r,...r==null?void 0:r.success}),o)).catch(o=>{ue.error(At(t.error,o),{id:n,...r,...r==null?void 0:r.error})}),e};var Ha=(e,t)=>{Ie({type:1,toast:{id:e,height:t}})},qa=()=>{Ie({type:5,time:Date.now()})},Wa=e=>{let{toasts:t,pausedAt:r}=za(e);v.useEffect(()=>{if(r)return;let s=Date.now(),a=t.map(c=>{if(c.duration===1/0)return;let f=(c.duration||0)+c.pauseDuration-(s-c.createdAt);if(f<0){c.visible&&ue.dismiss(c.id);return}return setTimeout(()=>ue.dismiss(c.id),f)});return()=>{a.forEach(c=>c&&clearTimeout(c))}},[t,r]);let n=v.useCallback(()=>{r&&Ie({type:6,time:Date.now()})},[r]),o=v.useCallback((s,a)=>{let{reverseOrder:c=!1,gutter:f=8,defaultPosition:d}=a||{},u=t.filter(O=>(O.position||d)===(s.position||d)&&O.height),h=u.findIndex(O=>O.id===s.id),w=u.filter((O,b)=>b<h&&O.visible).length;return u.filter(O=>O.visible).slice(...c?[w+1]:[0,w]).reduce((O,b)=>O+(b.height||0)+f,0)},[t]);return{toasts:t,handlers:{updateHeight:Ha,startPause:qa,endPause:n,calculateOffset:o}}},Ya=je`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ja=je`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Xa=je`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ga=De("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ya} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ja} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Xa} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ka=je`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Qa=De("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ka} 1s linear infinite;
`,Za=je`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ei=je`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ti=De("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Za} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ei} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ri=De("div")`
  position: absolute;
`,ni=De("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,oi=je`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,si=De("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${oi} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ai=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return t!==void 0?typeof t=="string"?v.createElement(si,null,t):t:r==="blank"?null:v.createElement(ni,null,v.createElement(Qa,{...n}),r!=="loading"&&v.createElement(ri,null,r==="error"?v.createElement(Ga,{...n}):v.createElement(ti,{...n})))},ii=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ci=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,li="0%{opacity:0;} 100%{opacity:1;}",di="0%{opacity:1;} 100%{opacity:0;}",ui=De("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,fi=De("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,hi=(e,t)=>{let r=e.includes("top")?1:-1,[n,o]=Wn()?[li,di]:[ii(r),ci(r)];return{animation:t?`${je(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${je(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},mi=v.memo(({toast:e,position:t,style:r,children:n})=>{let o=e.height?hi(e.position||t||"top-center",e.visible):{opacity:0},s=v.createElement(ai,{toast:e}),a=v.createElement(fi,{...e.ariaProps},At(e.message,e));return v.createElement(ui,{className:e.className,style:{...o,...r,...e.style}},typeof n=="function"?n({icon:s,message:a}):v.createElement(v.Fragment,null,s,a))});_a(v.createElement);var pi=({id:e,className:t,style:r,onHeightUpdate:n,children:o})=>{let s=v.useCallback(a=>{if(a){let c=()=>{let f=a.getBoundingClientRect().height;n(e,f)};c(),new MutationObserver(c).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return v.createElement("div",{ref:s,className:t,style:r},o)},gi=(e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Wn()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...o}},yi=It`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,mt=16,bi=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:o,containerStyle:s,containerClassName:a})=>{let{toasts:c,handlers:f}=Wa(r);return v.createElement("div",{style:{position:"fixed",zIndex:9999,top:mt,left:mt,right:mt,bottom:mt,pointerEvents:"none",...s},className:a,onMouseEnter:f.startPause,onMouseLeave:f.endPause},c.map(d=>{let u=d.position||t,h=f.calculateOffset(d,{reverseOrder:e,gutter:n,defaultPosition:t}),w=gi(u,h);return v.createElement(pi,{id:d.id,key:d.id,onHeightUpdate:f.updateHeight,className:d.visible?yi:"",style:w},d.type==="custom"?At(d.message,d):o?o(d):v.createElement(mi,{toast:d,position:u}))}))};function Yn(e,t){return function(){return e.apply(t,arguments)}}const{toString:xi}=Object.prototype,{getPrototypeOf:Fr}=Object,Vt=(e=>t=>{const r=xi.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),ge=e=>(e=e.toLowerCase(),t=>Vt(t)===e),zt=e=>t=>typeof t===e,{isArray:Ye}=Array,st=zt("undefined");function vi(e){return e!==null&&!st(e)&&e.constructor!==null&&!st(e.constructor)&&le(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Jn=ge("ArrayBuffer");function wi(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Jn(e.buffer),t}const Ei=zt("string"),le=zt("function"),Xn=zt("number"),$t=e=>e!==null&&typeof e=="object",ji=e=>e===!0||e===!1,kt=e=>{if(Vt(e)!=="object")return!1;const t=Fr(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Si=ge("Date"),ki=ge("File"),Fi=ge("Blob"),Ci=ge("FileList"),Oi=e=>$t(e)&&le(e.pipe),Ai=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||le(e.append)&&((t=Vt(e))==="formdata"||t==="object"&&le(e.toString)&&e.toString()==="[object FormData]"))},Ti=ge("URLSearchParams"),[Di,Ri,Mi,Pi]=["ReadableStream","Request","Response","Headers"].map(ge),_i=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function lt(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),Ye(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const s=r?Object.getOwnPropertyNames(e):Object.keys(e),a=s.length;let c;for(n=0;n<a;n++)c=s[n],t.call(null,e[c],c,e)}}function Gn(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const Pe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Kn=e=>!st(e)&&e!==Pe;function pr(){const{caseless:e}=Kn(this)&&this||{},t={},r=(n,o)=>{const s=e&&Gn(t,o)||o;kt(t[s])&&kt(n)?t[s]=pr(t[s],n):kt(n)?t[s]=pr({},n):Ye(n)?t[s]=n.slice():t[s]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&lt(arguments[n],r);return t}const Li=(e,t,r,{allOwnKeys:n}={})=>(lt(t,(o,s)=>{r&&le(o)?e[s]=Yn(o,r):e[s]=o},{allOwnKeys:n}),e),Ni=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Bi=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Ui=(e,t,r,n)=>{let o,s,a;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],(!n||n(a,e,t))&&!c[a]&&(t[a]=e[a],c[a]=!0);e=r!==!1&&Fr(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Ii=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Vi=e=>{if(!e)return null;if(Ye(e))return e;let t=e.length;if(!Xn(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},zi=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Fr(Uint8Array)),$i=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Hi=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},qi=ge("HTMLFormElement"),Wi=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),Zr=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Yi=ge("RegExp"),Qn=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};lt(r,(o,s)=>{let a;(a=t(o,s,e))!==!1&&(n[s]=a||o)}),Object.defineProperties(e,n)},Ji=e=>{Qn(e,(t,r)=>{if(le(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(le(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Xi=(e,t)=>{const r={},n=o=>{o.forEach(s=>{r[s]=!0})};return Ye(e)?n(e):n(String(e).split(t)),r},Gi=()=>{},Ki=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Zt="abcdefghijklmnopqrstuvwxyz",en="0123456789",Zn={DIGIT:en,ALPHA:Zt,ALPHA_DIGIT:Zt+Zt.toUpperCase()+en},Qi=(e=16,t=Zn.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Zi(e){return!!(e&&le(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const ec=e=>{const t=new Array(10),r=(n,o)=>{if($t(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const s=Ye(n)?[]:{};return lt(n,(a,c)=>{const f=r(a,o+1);!st(f)&&(s[c]=f)}),t[o]=void 0,s}}return n};return r(e,0)},tc=ge("AsyncFunction"),rc=e=>e&&($t(e)||le(e))&&le(e.then)&&le(e.catch),eo=((e,t)=>e?setImmediate:t?((r,n)=>(Pe.addEventListener("message",({source:o,data:s})=>{o===Pe&&s===r&&n.length&&n.shift()()},!1),o=>{n.push(o),Pe.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",le(Pe.postMessage)),nc=typeof queueMicrotask<"u"?queueMicrotask.bind(Pe):typeof process<"u"&&process.nextTick||eo,p={isArray:Ye,isArrayBuffer:Jn,isBuffer:vi,isFormData:Ai,isArrayBufferView:wi,isString:Ei,isNumber:Xn,isBoolean:ji,isObject:$t,isPlainObject:kt,isReadableStream:Di,isRequest:Ri,isResponse:Mi,isHeaders:Pi,isUndefined:st,isDate:Si,isFile:ki,isBlob:Fi,isRegExp:Yi,isFunction:le,isStream:Oi,isURLSearchParams:Ti,isTypedArray:zi,isFileList:Ci,forEach:lt,merge:pr,extend:Li,trim:_i,stripBOM:Ni,inherits:Bi,toFlatObject:Ui,kindOf:Vt,kindOfTest:ge,endsWith:Ii,toArray:Vi,forEachEntry:$i,matchAll:Hi,isHTMLForm:qi,hasOwnProperty:Zr,hasOwnProp:Zr,reduceDescriptors:Qn,freezeMethods:Ji,toObjectSet:Xi,toCamelCase:Wi,noop:Gi,toFiniteNumber:Ki,findKey:Gn,global:Pe,isContextDefined:Kn,ALPHABET:Zn,generateString:Qi,isSpecCompliantForm:Zi,toJSONObject:ec,isAsyncFn:tc,isThenable:rc,setImmediate:eo,asap:nc};function M(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}p.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const to=M.prototype,ro={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ro[e]={value:e}});Object.defineProperties(M,ro);Object.defineProperty(to,"isAxiosError",{value:!0});M.from=(e,t,r,n,o,s)=>{const a=Object.create(to);return p.toFlatObject(e,a,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),M.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,s&&Object.assign(a,s),a};const oc=null;function gr(e){return p.isPlainObject(e)||p.isArray(e)}function no(e){return p.endsWith(e,"[]")?e.slice(0,-2):e}function tn(e,t,r){return e?e.concat(t).map(function(o,s){return o=no(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function sc(e){return p.isArray(e)&&!e.some(gr)}const ac=p.toFlatObject(p,{},null,function(t){return/^is[A-Z]/.test(t)});function Ht(e,t,r){if(!p.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=p.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(A,x){return!p.isUndefined(x[A])});const n=r.metaTokens,o=r.visitor||u,s=r.dots,a=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&p.isSpecCompliantForm(t);if(!p.isFunction(o))throw new TypeError("visitor must be a function");function d(b){if(b===null)return"";if(p.isDate(b))return b.toISOString();if(!f&&p.isBlob(b))throw new M("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(b)||p.isTypedArray(b)?f&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function u(b,A,x){let T=b;if(b&&!x&&typeof b=="object"){if(p.endsWith(A,"{}"))A=n?A:A.slice(0,-2),b=JSON.stringify(b);else if(p.isArray(b)&&sc(b)||(p.isFileList(b)||p.endsWith(A,"[]"))&&(T=p.toArray(b)))return A=no(A),T.forEach(function(k,L){!(p.isUndefined(k)||k===null)&&t.append(a===!0?tn([A],L,s):a===null?A:A+"[]",d(k))}),!1}return gr(b)?!0:(t.append(tn(x,A,s),d(b)),!1)}const h=[],w=Object.assign(ac,{defaultVisitor:u,convertValue:d,isVisitable:gr});function O(b,A){if(!p.isUndefined(b)){if(h.indexOf(b)!==-1)throw Error("Circular reference detected in "+A.join("."));h.push(b),p.forEach(b,function(T,F){(!(p.isUndefined(T)||T===null)&&o.call(t,T,p.isString(F)?F.trim():F,A,w))===!0&&O(T,A?A.concat(F):[F])}),h.pop()}}if(!p.isObject(e))throw new TypeError("data must be an object");return O(e),t}function rn(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Cr(e,t){this._pairs=[],e&&Ht(e,this,t)}const oo=Cr.prototype;oo.append=function(t,r){this._pairs.push([t,r])};oo.toString=function(t){const r=t?function(n){return t.call(this,n,rn)}:rn;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function ic(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function so(e,t,r){if(!t)return e;const n=r&&r.encode||ic,o=r&&r.serialize;let s;if(o?s=o(t,r):s=p.isURLSearchParams(t)?t.toString():new Cr(t,r).toString(n),s){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class nn{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){p.forEach(this.handlers,function(n){n!==null&&t(n)})}}const ao={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cc=typeof URLSearchParams<"u"?URLSearchParams:Cr,lc=typeof FormData<"u"?FormData:null,dc=typeof Blob<"u"?Blob:null,uc={isBrowser:!0,classes:{URLSearchParams:cc,FormData:lc,Blob:dc},protocols:["http","https","file","blob","url","data"]},Or=typeof window<"u"&&typeof document<"u",fc=(e=>Or&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),hc=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mc=Or&&window.location.href||"http://localhost",pc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Or,hasStandardBrowserEnv:fc,hasStandardBrowserWebWorkerEnv:hc,origin:mc},Symbol.toStringTag,{value:"Module"})),me={...pc,...uc};function gc(e,t){return Ht(e,new me.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,s){return me.isNode&&p.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function yc(e){return p.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function bc(e){const t={},r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function io(e){function t(r,n,o,s){let a=r[s++];if(a==="__proto__")return!0;const c=Number.isFinite(+a),f=s>=r.length;return a=!a&&p.isArray(o)?o.length:a,f?(p.hasOwnProp(o,a)?o[a]=[o[a],n]:o[a]=n,!c):((!o[a]||!p.isObject(o[a]))&&(o[a]=[]),t(r,n,o[a],s)&&p.isArray(o[a])&&(o[a]=bc(o[a])),!c)}if(p.isFormData(e)&&p.isFunction(e.entries)){const r={};return p.forEachEntry(e,(n,o)=>{t(yc(n),o,r,0)}),r}return null}function xc(e,t,r){if(p.isString(e))try{return(t||JSON.parse)(e),p.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const dt={transitional:ao,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=p.isObject(t);if(s&&p.isHTMLForm(t)&&(t=new FormData(t)),p.isFormData(t))return o?JSON.stringify(io(t)):t;if(p.isArrayBuffer(t)||p.isBuffer(t)||p.isStream(t)||p.isFile(t)||p.isBlob(t)||p.isReadableStream(t))return t;if(p.isArrayBufferView(t))return t.buffer;if(p.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return gc(t,this.formSerializer).toString();if((c=p.isFileList(t))||n.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Ht(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),xc(t)):t}],transformResponse:[function(t){const r=this.transitional||dt.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(p.isResponse(t)||p.isReadableStream(t))return t;if(t&&p.isString(t)&&(n&&!this.responseType||o)){const a=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(a)throw c.name==="SyntaxError"?M.from(c,M.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:me.classes.FormData,Blob:me.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};p.forEach(["delete","get","head","post","put","patch"],e=>{dt.headers[e]={}});const vc=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),wc=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),r=a.substring(0,o).trim().toLowerCase(),n=a.substring(o+1).trim(),!(!r||t[r]&&vc[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},on=Symbol("internals");function Qe(e){return e&&String(e).trim().toLowerCase()}function Ft(e){return e===!1||e==null?e:p.isArray(e)?e.map(Ft):String(e)}function Ec(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const jc=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function er(e,t,r,n,o){if(p.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!p.isString(t)){if(p.isString(n))return t.indexOf(n)!==-1;if(p.isRegExp(n))return n.test(t)}}function Sc(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function kc(e,t){const r=p.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,a){return this[n].call(this,t,o,s,a)},configurable:!0})})}let oe=class{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function s(c,f,d){const u=Qe(f);if(!u)throw new Error("header name must be a non-empty string");const h=p.findKey(o,u);(!h||o[h]===void 0||d===!0||d===void 0&&o[h]!==!1)&&(o[h||f]=Ft(c))}const a=(c,f)=>p.forEach(c,(d,u)=>s(d,u,f));if(p.isPlainObject(t)||t instanceof this.constructor)a(t,r);else if(p.isString(t)&&(t=t.trim())&&!jc(t))a(wc(t),r);else if(p.isHeaders(t))for(const[c,f]of t.entries())s(f,c,n);else t!=null&&s(r,t,n);return this}get(t,r){if(t=Qe(t),t){const n=p.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return Ec(o);if(p.isFunction(r))return r.call(this,o,n);if(p.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Qe(t),t){const n=p.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||er(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function s(a){if(a=Qe(a),a){const c=p.findKey(n,a);c&&(!r||er(n,n[c],c,r))&&(delete n[c],o=!0)}}return p.isArray(t)?t.forEach(s):s(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const s=r[n];(!t||er(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const r=this,n={};return p.forEach(this,(o,s)=>{const a=p.findKey(n,s);if(a){r[a]=Ft(o),delete r[s];return}const c=t?Sc(s):String(s).trim();c!==s&&delete r[s],r[c]=Ft(o),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return p.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&p.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[on]=this[on]={accessors:{}}).accessors,o=this.prototype;function s(a){const c=Qe(a);n[c]||(kc(o,a),n[c]=!0)}return p.isArray(t)?t.forEach(s):s(t),this}};oe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.reduceDescriptors(oe.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});p.freezeMethods(oe);function tr(e,t){const r=this||dt,n=t||r,o=oe.from(n.headers);let s=n.data;return p.forEach(e,function(c){s=c.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function co(e){return!!(e&&e.__CANCEL__)}function Je(e,t,r){M.call(this,e??"canceled",M.ERR_CANCELED,t,r),this.name="CanceledError"}p.inherits(Je,M,{__CANCEL__:!0});function lo(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new M("Request failed with status code "+r.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function Fc(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Cc(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,s=0,a;return t=t!==void 0?t:1e3,function(f){const d=Date.now(),u=n[s];a||(a=d),r[o]=f,n[o]=d;let h=s,w=0;for(;h!==o;)w+=r[h++],h=h%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),d-a<t)return;const O=u&&d-u;return O?Math.round(w*1e3/O):void 0}}function Oc(e,t){let r=0,n=1e3/t,o,s;const a=(d,u=Date.now())=>{r=u,o=null,s&&(clearTimeout(s),s=null),e.apply(null,d)};return[(...d)=>{const u=Date.now(),h=u-r;h>=n?a(d,u):(o=d,s||(s=setTimeout(()=>{s=null,a(o)},n-h)))},()=>o&&a(o)]}const Tt=(e,t,r=3)=>{let n=0;const o=Cc(50,250);return Oc(s=>{const a=s.loaded,c=s.lengthComputable?s.total:void 0,f=a-n,d=o(f),u=a<=c;n=a;const h={loaded:a,total:c,progress:c?a/c:void 0,bytes:f,rate:d||void 0,estimated:d&&c&&u?(c-a)/d:void 0,event:s,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(h)},r)},sn=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},an=e=>(...t)=>p.asap(()=>e(...t)),Ac=me.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function o(s){let a=s;return t&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(a){const c=p.isString(a)?o(a):a;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}(),Tc=me.hasStandardBrowserEnv?{write(e,t,r,n,o,s){const a=[e+"="+encodeURIComponent(t)];p.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),p.isString(n)&&a.push("path="+n),p.isString(o)&&a.push("domain="+o),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Dc(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Rc(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function uo(e,t){return e&&!Dc(t)?Rc(e,t):t}const cn=e=>e instanceof oe?{...e}:e;function Ne(e,t){t=t||{};const r={};function n(d,u,h){return p.isPlainObject(d)&&p.isPlainObject(u)?p.merge.call({caseless:h},d,u):p.isPlainObject(u)?p.merge({},u):p.isArray(u)?u.slice():u}function o(d,u,h){if(p.isUndefined(u)){if(!p.isUndefined(d))return n(void 0,d,h)}else return n(d,u,h)}function s(d,u){if(!p.isUndefined(u))return n(void 0,u)}function a(d,u){if(p.isUndefined(u)){if(!p.isUndefined(d))return n(void 0,d)}else return n(void 0,u)}function c(d,u,h){if(h in t)return n(d,u);if(h in e)return n(void 0,d)}const f={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c,headers:(d,u)=>o(cn(d),cn(u),!0)};return p.forEach(Object.keys(Object.assign({},e,t)),function(u){const h=f[u]||o,w=h(e[u],t[u],u);p.isUndefined(w)&&h!==c||(r[u]=w)}),r}const fo=e=>{const t=Ne({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:s,headers:a,auth:c}=t;t.headers=a=oe.from(a),t.url=so(uo(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(p.isFormData(r)){if(me.hasStandardBrowserEnv||me.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((f=a.getContentType())!==!1){const[d,...u]=f?f.split(";").map(h=>h.trim()).filter(Boolean):[];a.setContentType([d||"multipart/form-data",...u].join("; "))}}if(me.hasStandardBrowserEnv&&(n&&p.isFunction(n)&&(n=n(t)),n||n!==!1&&Ac(t.url))){const d=o&&s&&Tc.read(s);d&&a.set(o,d)}return t},Mc=typeof XMLHttpRequest<"u",Pc=Mc&&function(e){return new Promise(function(r,n){const o=fo(e);let s=o.data;const a=oe.from(o.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:d}=o,u,h,w,O,b;function A(){O&&O(),b&&b(),o.cancelToken&&o.cancelToken.unsubscribe(u),o.signal&&o.signal.removeEventListener("abort",u)}let x=new XMLHttpRequest;x.open(o.method.toUpperCase(),o.url,!0),x.timeout=o.timeout;function T(){if(!x)return;const k=oe.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),N={data:!c||c==="text"||c==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:k,config:e,request:x};lo(function(Q){r(Q),A()},function(Q){n(Q),A()},N),x=null}"onloadend"in x?x.onloadend=T:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(T)},x.onabort=function(){x&&(n(new M("Request aborted",M.ECONNABORTED,e,x)),x=null)},x.onerror=function(){n(new M("Network Error",M.ERR_NETWORK,e,x)),x=null},x.ontimeout=function(){let L=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const N=o.transitional||ao;o.timeoutErrorMessage&&(L=o.timeoutErrorMessage),n(new M(L,N.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,x)),x=null},s===void 0&&a.setContentType(null),"setRequestHeader"in x&&p.forEach(a.toJSON(),function(L,N){x.setRequestHeader(N,L)}),p.isUndefined(o.withCredentials)||(x.withCredentials=!!o.withCredentials),c&&c!=="json"&&(x.responseType=o.responseType),d&&([w,b]=Tt(d,!0),x.addEventListener("progress",w)),f&&x.upload&&([h,O]=Tt(f),x.upload.addEventListener("progress",h),x.upload.addEventListener("loadend",O)),(o.cancelToken||o.signal)&&(u=k=>{x&&(n(!k||k.type?new Je(null,e,x):k),x.abort(),x=null)},o.cancelToken&&o.cancelToken.subscribe(u),o.signal&&(o.signal.aborted?u():o.signal.addEventListener("abort",u)));const F=Fc(o.url);if(F&&me.protocols.indexOf(F)===-1){n(new M("Unsupported protocol "+F+":",M.ERR_BAD_REQUEST,e));return}x.send(s||null)})},_c=(e,t)=>{let r=new AbortController,n;const o=function(f){if(!n){n=!0,a();const d=f instanceof Error?f:this.reason;r.abort(d instanceof M?d:new Je(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{o(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",o):f.unsubscribe(o))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",o));const{signal:c}=r;return c.unsubscribe=a,[c,()=>{s&&clearTimeout(s),s=null}]},Lc=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},Nc=async function*(e,t,r){for await(const n of e)yield*Lc(ArrayBuffer.isView(n)?n:await r(String(n)),t)},ln=(e,t,r,n,o)=>{const s=Nc(e,t,o);let a=0,c,f=d=>{c||(c=!0,n&&n(d))};return new ReadableStream({async pull(d){try{const{done:u,value:h}=await s.next();if(u){f(),d.close();return}let w=h.byteLength;if(r){let O=a+=w;r(O)}d.enqueue(new Uint8Array(h))}catch(u){throw f(u),u}},cancel(d){return f(d),s.return()}},{highWaterMark:2})},qt=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ho=qt&&typeof ReadableStream=="function",yr=qt&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),mo=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Bc=ho&&mo(()=>{let e=!1;const t=new Request(me.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),dn=64*1024,br=ho&&mo(()=>p.isReadableStream(new Response("").body)),Dt={stream:br&&(e=>e.body)};qt&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Dt[t]&&(Dt[t]=p.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new M(`Response type '${t}' is not supported`,M.ERR_NOT_SUPPORT,n)})})})(new Response);const Uc=async e=>{if(e==null)return 0;if(p.isBlob(e))return e.size;if(p.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(p.isArrayBufferView(e)||p.isArrayBuffer(e))return e.byteLength;if(p.isURLSearchParams(e)&&(e=e+""),p.isString(e))return(await yr(e)).byteLength},Ic=async(e,t)=>{const r=p.toFiniteNumber(e.getContentLength());return r??Uc(t)},Vc=qt&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:s,timeout:a,onDownloadProgress:c,onUploadProgress:f,responseType:d,headers:u,withCredentials:h="same-origin",fetchOptions:w}=fo(e);d=d?(d+"").toLowerCase():"text";let[O,b]=o||s||a?_c([o,s],a):[],A,x;const T=()=>{!A&&setTimeout(()=>{O&&O.unsubscribe()}),A=!0};let F;try{if(f&&Bc&&r!=="get"&&r!=="head"&&(F=await Ic(u,n))!==0){let J=new Request(t,{method:"POST",body:n,duplex:"half"}),Q;if(p.isFormData(n)&&(Q=J.headers.get("content-type"))&&u.setContentType(Q),J.body){const[se,_]=sn(F,Tt(an(f)));n=ln(J.body,dn,se,_,yr)}}p.isString(h)||(h=h?"include":"omit"),x=new Request(t,{...w,signal:O,method:r.toUpperCase(),headers:u.normalize().toJSON(),body:n,duplex:"half",credentials:h});let k=await fetch(x);const L=br&&(d==="stream"||d==="response");if(br&&(c||L)){const J={};["status","statusText","headers"].forEach(R=>{J[R]=k[R]});const Q=p.toFiniteNumber(k.headers.get("content-length")),[se,_]=c&&sn(Q,Tt(an(c),!0))||[];k=new Response(ln(k.body,dn,se,()=>{_&&_(),L&&T()},yr),J)}d=d||"text";let N=await Dt[p.findKey(Dt,d)||"text"](k,e);return!L&&T(),b&&b(),await new Promise((J,Q)=>{lo(J,Q,{data:N,headers:oe.from(k.headers),status:k.status,statusText:k.statusText,config:e,request:x})})}catch(k){throw T(),k&&k.name==="TypeError"&&/fetch/i.test(k.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,e,x),{cause:k.cause||k}):M.from(k,k&&k.code,e,x)}}),xr={http:oc,xhr:Pc,fetch:Vc};p.forEach(xr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const un=e=>`- ${e}`,zc=e=>p.isFunction(e)||e===null||e===!1,po={getAdapter:e=>{e=p.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let s=0;s<t;s++){r=e[s];let a;if(n=r,!zc(r)&&(n=xr[(a=String(r)).toLowerCase()],n===void 0))throw new M(`Unknown adapter '${a}'`);if(n)break;o[a||"#"+s]=n}if(!n){const s=Object.entries(o).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let a=t?s.length>1?`since :
`+s.map(un).join(`
`):" "+un(s[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return n},adapters:xr};function rr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Je(null,e)}function fn(e){return rr(e),e.headers=oe.from(e.headers),e.data=tr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),po.getAdapter(e.adapter||dt.adapter)(e).then(function(n){return rr(e),n.data=tr.call(e,e.transformResponse,n),n.headers=oe.from(n.headers),n},function(n){return co(n)||(rr(e),n&&n.response&&(n.response.data=tr.call(e,e.transformResponse,n.response),n.response.headers=oe.from(n.response.headers))),Promise.reject(n)})}const go="1.7.4",Ar={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ar[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const hn={};Ar.transitional=function(t,r,n){function o(s,a){return"[Axios v"+go+"] Transitional option '"+s+"'"+a+(n?". "+n:"")}return(s,a,c)=>{if(t===!1)throw new M(o(a," has been removed"+(r?" in "+r:"")),M.ERR_DEPRECATED);return r&&!hn[a]&&(hn[a]=!0,console.warn(o(a," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,a,c):!0}};function $c(e,t,r){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const s=n[o],a=t[s];if(a){const c=e[s],f=c===void 0||a(c,s,e);if(f!==!0)throw new M("option "+s+" must be "+f,M.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new M("Unknown option "+s,M.ERR_BAD_OPTION)}}const vr={assertOptions:$c,validators:Ar},ke=vr.validators;let Le=class{constructor(t){this.defaults=t,this.interceptors={request:new nn,response:new nn}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Ne(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&vr.assertOptions(n,{silentJSONParsing:ke.transitional(ke.boolean),forcedJSONParsing:ke.transitional(ke.boolean),clarifyTimeoutError:ke.transitional(ke.boolean)},!1),o!=null&&(p.isFunction(o)?r.paramsSerializer={serialize:o}:vr.assertOptions(o,{encode:ke.function,serialize:ke.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let a=s&&p.merge(s.common,s[r.method]);s&&p.forEach(["delete","get","head","post","put","patch","common"],b=>{delete s[b]}),r.headers=oe.concat(a,s);const c=[];let f=!0;this.interceptors.request.forEach(function(A){typeof A.runWhen=="function"&&A.runWhen(r)===!1||(f=f&&A.synchronous,c.unshift(A.fulfilled,A.rejected))});const d=[];this.interceptors.response.forEach(function(A){d.push(A.fulfilled,A.rejected)});let u,h=0,w;if(!f){const b=[fn.bind(this),void 0];for(b.unshift.apply(b,c),b.push.apply(b,d),w=b.length,u=Promise.resolve(r);h<w;)u=u.then(b[h++],b[h++]);return u}w=c.length;let O=r;for(h=0;h<w;){const b=c[h++],A=c[h++];try{O=b(O)}catch(x){A.call(this,x);break}}try{u=fn.call(this,O)}catch(b){return Promise.reject(b)}for(h=0,w=d.length;h<w;)u=u.then(d[h++],d[h++]);return u}getUri(t){t=Ne(this.defaults,t);const r=uo(t.baseURL,t.url);return so(r,t.params,t.paramsSerializer)}};p.forEach(["delete","get","head","options"],function(t){Le.prototype[t]=function(r,n){return this.request(Ne(n||{},{method:t,url:r,data:(n||{}).data}))}});p.forEach(["post","put","patch"],function(t){function r(n){return function(s,a,c){return this.request(Ne(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Le.prototype[t]=r(),Le.prototype[t+"Form"]=r(!0)});let Hc=class yo{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s;const a=new Promise(c=>{n.subscribe(c),s=c}).then(o);return a.cancel=function(){n.unsubscribe(s)},a},t(function(s,a,c){n.reason||(n.reason=new Je(s,a,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new yo(function(o){t=o}),cancel:t}}};function qc(e){return function(r){return e.apply(null,r)}}function Wc(e){return p.isObject(e)&&e.isAxiosError===!0}const wr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(wr).forEach(([e,t])=>{wr[t]=e});function bo(e){const t=new Le(e),r=Yn(Le.prototype.request,t);return p.extend(r,Le.prototype,t,{allOwnKeys:!0}),p.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return bo(Ne(e,o))},r}const V=bo(dt);V.Axios=Le;V.CanceledError=Je;V.CancelToken=Hc;V.isCancel=co;V.VERSION=go;V.toFormData=Ht;V.AxiosError=M;V.Cancel=V.CanceledError;V.all=function(t){return Promise.all(t)};V.spread=qc;V.isAxiosError=Wc;V.mergeConfig=Ne;V.AxiosHeaders=oe;V.formToJSON=e=>io(p.isHTMLForm(e)?new FormData(e):e);V.getAdapter=po.getAdapter;V.HttpStatusCode=wr;V.default=V;const{Axios:tf,AxiosError:rf,CanceledError:nf,isCancel:of,CancelToken:sf,VERSION:af,all:cf,Cancel:lf,isAxiosError:df,spread:uf,toFormData:ff,AxiosHeaders:hf,HttpStatusCode:mf,formToJSON:pf,getAdapter:gf,mergeConfig:yf}=V;var ut=e=>e.type==="checkbox",qe=e=>e instanceof Date,te=e=>e==null;const xo=e=>typeof e=="object";var K=e=>!te(e)&&!Array.isArray(e)&&xo(e)&&!qe(e),vo=e=>K(e)&&e.target?ut(e.target)?e.target.checked:e.target.value:e,Yc=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,wo=(e,t)=>e.has(Yc(t)),Jc=e=>{const t=e.constructor&&e.constructor.prototype;return K(t)&&t.hasOwnProperty("isPrototypeOf")},Tr=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function re(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Tr&&(e instanceof Blob||e instanceof FileList))&&(r||K(e)))if(t=r?[]:{},!r&&!Jc(e))t=e;else for(const n in e)e.hasOwnProperty(n)&&(t[n]=re(e[n]));else return e;return t}var ft=e=>Array.isArray(e)?e.filter(Boolean):[],H=e=>e===void 0,j=(e,t,r)=>{if(!t||!K(e))return r;const n=ft(t.split(/[,[\].]+?/)).reduce((o,s)=>te(o)?o:o[s],e);return H(n)||n===e?H(e[t])?r:e[t]:n},xe=e=>typeof e=="boolean",Dr=e=>/^\w*$/.test(e),Eo=e=>ft(e.replace(/["|']|\]/g,"").split(/\.|\[/)),$=(e,t,r)=>{let n=-1;const o=Dr(t)?[t]:Eo(t),s=o.length,a=s-1;for(;++n<s;){const c=o[n];let f=r;if(n!==a){const d=e[c];f=K(d)||Array.isArray(d)?d:isNaN(+o[n+1])?{}:[]}if(c==="__proto__")return;e[c]=f,e=e[c]}return e};const Rt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},he={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ee={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Xc=z.createContext(null),Rr=()=>z.useContext(Xc);var jo=(e,t,r,n=!0)=>{const o={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(o,s,{get:()=>{const a=s;return t._proxyFormState[a]!==he.all&&(t._proxyFormState[a]=!n||he.all),r&&(r[a]=!0),e[a]}});return o},ce=e=>K(e)&&!Object.keys(e).length,So=(e,t,r,n)=>{r(e);const{name:o,...s}=e;return ce(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(a=>t[a]===(!n||he.all))},Ct=e=>Array.isArray(e)?e:[e],ko=(e,t,r)=>!e||!t||e===t||Ct(e).some(n=>n&&(r?n===t:n.startsWith(t)||t.startsWith(n)));function Mr(e){const t=z.useRef(e);t.current=e,z.useEffect(()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function Gc(e){const t=Rr(),{control:r=t.control,disabled:n,name:o,exact:s}=e||{},[a,c]=z.useState(r._formState),f=z.useRef(!0),d=z.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),u=z.useRef(o);return u.current=o,Mr({disabled:n,next:h=>f.current&&ko(u.current,h.name,s)&&So(h,d.current,r._updateFormState)&&c({...r._formState,...h}),subject:r._subjects.state}),z.useEffect(()=>(f.current=!0,d.current.isValid&&r._updateValid(!0),()=>{f.current=!1}),[r]),jo(a,r,d.current,!1)}var ve=e=>typeof e=="string",Fo=(e,t,r,n,o)=>ve(e)?(n&&t.watch.add(e),j(r,e,o)):Array.isArray(e)?e.map(s=>(n&&t.watch.add(s),j(r,s))):(n&&(t.watchAll=!0),r);function Kc(e){const t=Rr(),{control:r=t.control,name:n,defaultValue:o,disabled:s,exact:a}=e||{},c=z.useRef(n);c.current=n,Mr({disabled:s,subject:r._subjects.values,next:u=>{ko(c.current,u.name,a)&&d(re(Fo(c.current,r._names,u.values||r._formValues,!1,o)))}});const[f,d]=z.useState(r._getWatch(n,o));return z.useEffect(()=>r._removeUnmounted()),f}function Qc(e){const t=Rr(),{name:r,disabled:n,control:o=t.control,shouldUnregister:s}=e,a=wo(o._names.array,r),c=Kc({control:o,name:r,defaultValue:j(o._formValues,r,j(o._defaultValues,r,e.defaultValue)),exact:!0}),f=Gc({control:o,name:r}),d=z.useRef(o.register(r,{...e.rules,value:c,...xe(e.disabled)?{disabled:e.disabled}:{}}));return z.useEffect(()=>{const u=o._options.shouldUnregister||s,h=(w,O)=>{const b=j(o._fields,w);b&&(b._f.mount=O)};if(h(r,!0),u){const w=re(j(o._options.defaultValues,r));$(o._defaultValues,r,w),H(j(o._formValues,r))&&$(o._formValues,r,w)}return()=>{(a?u&&!o._state.action:u)?o.unregister(r):h(r,!1)}},[r,o,a,s]),z.useEffect(()=>{j(o._fields,r)&&o._updateDisabledField({disabled:n,fields:o._fields,name:r,value:j(o._fields,r)._f.value})},[n,r,o]),{field:{name:r,value:c,...xe(n)||f.disabled?{disabled:f.disabled||n}:{},onChange:z.useCallback(u=>d.current.onChange({target:{value:vo(u),name:r},type:Rt.CHANGE}),[r]),onBlur:z.useCallback(()=>d.current.onBlur({target:{value:j(o._formValues,r),name:r},type:Rt.BLUR}),[r,o]),ref:u=>{const h=j(o._fields,r);h&&u&&(h._f.ref={focus:()=>u.focus(),select:()=>u.select(),setCustomValidity:w=>u.setCustomValidity(w),reportValidity:()=>u.reportValidity()})}},formState:f,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!j(f.errors,r)},isDirty:{enumerable:!0,get:()=>!!j(f.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!j(f.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!j(f.validatingFields,r)},error:{enumerable:!0,get:()=>j(f.errors,r)}})}}const Zc=e=>e.render(Qc(e));var el=(e,t,r,n,o)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:o||!0}}:{},mn=e=>({isOnSubmit:!e||e===he.onSubmit,isOnBlur:e===he.onBlur,isOnChange:e===he.onChange,isOnAll:e===he.all,isOnTouch:e===he.onTouched}),pn=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const nt=(e,t,r,n)=>{for(const o of r||Object.keys(e)){const s=j(e,o);if(s){const{_f:a,...c}=s;if(a){if(a.refs&&a.refs[0]&&t(a.refs[0],o)&&!n)break;if(a.ref&&t(a.ref,a.name)&&!n)break;nt(c,t)}else K(c)&&nt(c,t)}}};var tl=(e,t,r)=>{const n=ft(j(e,r));return $(n,"root",t[r]),$(e,r,n),e},Pr=e=>e.type==="file",Oe=e=>typeof e=="function",Mt=e=>{if(!Tr)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Ot=e=>ve(e),_r=e=>e.type==="radio",Pt=e=>e instanceof RegExp;const gn={value:!1,isValid:!1},yn={value:!0,isValid:!0};var Co=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!H(e[0].attributes.value)?H(e[0].value)||e[0].value===""?yn:{value:e[0].value,isValid:!0}:yn:gn}return gn};const bn={isValid:!1,value:null};var Oo=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,bn):bn;function xn(e,t,r="validate"){if(Ot(e)||Array.isArray(e)&&e.every(Ot)||xe(e)&&!e)return{type:r,message:Ot(e)?e:"",ref:t}}var ze=e=>K(e)&&!Pt(e)?e:{value:e,message:""},vn=async(e,t,r,n,o)=>{const{ref:s,refs:a,required:c,maxLength:f,minLength:d,min:u,max:h,pattern:w,validate:O,name:b,valueAsNumber:A,mount:x,disabled:T}=e._f,F=j(t,b);if(!x||T)return{};const k=a?a[0]:s,L=P=>{n&&k.reportValidity&&(k.setCustomValidity(xe(P)?"":P||""),k.reportValidity())},N={},J=_r(s),Q=ut(s),se=J||Q,_=(A||Pr(s))&&H(s.value)&&H(F)||Mt(s)&&s.value===""||F===""||Array.isArray(F)&&!F.length,R=el.bind(null,b,r,N),Se=(P,B,X,ee=Ee.maxLength,fe=Ee.minLength)=>{const de=P?B:X;N[b]={type:P?ee:fe,message:de,ref:s,...R(P?ee:fe,de)}};if(o?!Array.isArray(F)||!F.length:c&&(!se&&(_||te(F))||xe(F)&&!F||Q&&!Co(a).isValid||J&&!Oo(a).isValid)){const{value:P,message:B}=Ot(c)?{value:!!c,message:c}:ze(c);if(P&&(N[b]={type:Ee.required,message:B,ref:k,...R(Ee.required,B)},!r))return L(B),N}if(!_&&(!te(u)||!te(h))){let P,B;const X=ze(h),ee=ze(u);if(!te(F)&&!isNaN(F)){const fe=s.valueAsNumber||F&&+F;te(X.value)||(P=fe>X.value),te(ee.value)||(B=fe<ee.value)}else{const fe=s.valueAsDate||new Date(F),de=Ke=>new Date(new Date().toDateString()+" "+Ke),Xe=s.type=="time",Ge=s.type=="week";ve(X.value)&&F&&(P=Xe?de(F)>de(X.value):Ge?F>X.value:fe>new Date(X.value)),ve(ee.value)&&F&&(B=Xe?de(F)<de(ee.value):Ge?F<ee.value:fe<new Date(ee.value))}if((P||B)&&(Se(!!P,X.message,ee.message,Ee.max,Ee.min),!r))return L(N[b].message),N}if((f||d)&&!_&&(ve(F)||o&&Array.isArray(F))){const P=ze(f),B=ze(d),X=!te(P.value)&&F.length>+P.value,ee=!te(B.value)&&F.length<+B.value;if((X||ee)&&(Se(X,P.message,B.message),!r))return L(N[b].message),N}if(w&&!_&&ve(F)){const{value:P,message:B}=ze(w);if(Pt(P)&&!F.match(P)&&(N[b]={type:Ee.pattern,message:B,ref:s,...R(Ee.pattern,B)},!r))return L(B),N}if(O){if(Oe(O)){const P=await O(F,t),B=xn(P,k);if(B&&(N[b]={...B,...R(Ee.validate,B.message)},!r))return L(B.message),N}else if(K(O)){let P={};for(const B in O){if(!ce(P)&&!r)break;const X=xn(await O[B](F,t),k,B);X&&(P={...X,...R(B,X.message)},L(X.message),r&&(N[b]=P))}if(!ce(P)&&(N[b]={ref:k,...P},!r))return N}}return L(!0),N};function rl(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=H(e)?n++:e[t[n++]];return e}function nl(e){for(const t in e)if(e.hasOwnProperty(t)&&!H(e[t]))return!1;return!0}function G(e,t){const r=Array.isArray(t)?t:Dr(t)?[t]:Eo(t),n=r.length===1?e:rl(e,r),o=r.length-1,s=r[o];return n&&delete n[s],o!==0&&(K(n)&&ce(n)||Array.isArray(n)&&nl(n))&&G(e,r.slice(0,-1)),e}var nr=()=>{let e=[];return{get observers(){return e},next:o=>{for(const s of e)s.next&&s.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(s=>s!==o)}}),unsubscribe:()=>{e=[]}}},_t=e=>te(e)||!xo(e);function _e(e,t){if(_t(e)||_t(t))return e===t;if(qe(e)&&qe(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const o of r){const s=e[o];if(!n.includes(o))return!1;if(o!=="ref"){const a=t[o];if(qe(s)&&qe(a)||K(s)&&K(a)||Array.isArray(s)&&Array.isArray(a)?!_e(s,a):s!==a)return!1}}return!0}var Ao=e=>e.type==="select-multiple",ol=e=>_r(e)||ut(e),or=e=>Mt(e)&&e.isConnected,To=e=>{for(const t in e)if(Oe(e[t]))return!0;return!1};function Lt(e,t={}){const r=Array.isArray(e);if(K(e)||r)for(const n in e)Array.isArray(e[n])||K(e[n])&&!To(e[n])?(t[n]=Array.isArray(e[n])?[]:{},Lt(e[n],t[n])):te(e[n])||(t[n]=!0);return t}function Do(e,t,r){const n=Array.isArray(e);if(K(e)||n)for(const o in e)Array.isArray(e[o])||K(e[o])&&!To(e[o])?H(t)||_t(r[o])?r[o]=Array.isArray(e[o])?Lt(e[o],[]):{...Lt(e[o])}:Do(e[o],te(t)?{}:t[o],r[o]):r[o]=!_e(e[o],t[o]);return r}var pt=(e,t)=>Do(e,t,Lt(t)),Ro=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>H(e)?e:t?e===""?NaN:e&&+e:r&&ve(e)?new Date(e):n?n(e):e;function sr(e){const t=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):t.disabled))return Pr(t)?t.files:_r(t)?Oo(e.refs).value:Ao(t)?[...t.selectedOptions].map(({value:r})=>r):ut(t)?Co(e.refs).value:Ro(H(t.value)?e.ref.value:t.value,e)}var sl=(e,t,r,n)=>{const o={};for(const s of e){const a=j(t,s);a&&$(o,s,a._f)}return{criteriaMode:r,names:[...e],fields:o,shouldUseNativeValidation:n}},Ze=e=>H(e)?e:Pt(e)?e.source:K(e)?Pt(e.value)?e.value.source:e.value:e,al=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function wn(e,t,r){const n=j(e,r);if(n||Dr(r))return{error:n,name:r};const o=r.split(".");for(;o.length;){const s=o.join("."),a=j(t,s),c=j(e,s);if(a&&!Array.isArray(a)&&r!==s)return{name:r};if(c&&c.type)return{name:s,error:c};o.pop()}return{name:r}}var il=(e,t,r,n,o)=>o.isOnAll?!1:!r&&o.isOnTouch?!(t||e):(r?n.isOnBlur:o.isOnBlur)?!e:(r?n.isOnChange:o.isOnChange)?e:!0,cl=(e,t)=>!ft(j(e,t)).length&&G(e,t);const ll={mode:he.onSubmit,reValidateMode:he.onChange,shouldFocusError:!0};function dl(e={}){let t={...ll,...e},r={submitCount:0,isDirty:!1,isLoading:Oe(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},n={},o=K(t.defaultValues)||K(t.values)?re(t.defaultValues||t.values)||{}:{},s=t.shouldUnregister?{}:re(o),a={action:!1,mount:!1,watch:!1},c={mount:new Set,unMount:new Set,array:new Set,watch:new Set},f,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:nr(),array:nr(),state:nr()},w=mn(t.mode),O=mn(t.reValidateMode),b=t.criteriaMode===he.all,A=l=>m=>{clearTimeout(d),d=setTimeout(l,m)},x=async l=>{if(u.isValid||l){const m=t.resolver?ce((await se()).errors):await R(n,!0);m!==r.isValid&&h.state.next({isValid:m})}},T=(l,m)=>{(u.isValidating||u.validatingFields)&&((l||Array.from(c.mount)).forEach(g=>{g&&(m?$(r.validatingFields,g,m):G(r.validatingFields,g))}),h.state.next({validatingFields:r.validatingFields,isValidating:!ce(r.validatingFields)}))},F=(l,m=[],g,C,S=!0,E=!0)=>{if(C&&g){if(a.action=!0,E&&Array.isArray(j(n,l))){const D=g(j(n,l),C.argA,C.argB);S&&$(n,l,D)}if(E&&Array.isArray(j(r.errors,l))){const D=g(j(r.errors,l),C.argA,C.argB);S&&$(r.errors,l,D),cl(r.errors,l)}if(u.touchedFields&&E&&Array.isArray(j(r.touchedFields,l))){const D=g(j(r.touchedFields,l),C.argA,C.argB);S&&$(r.touchedFields,l,D)}u.dirtyFields&&(r.dirtyFields=pt(o,s)),h.state.next({name:l,isDirty:P(l,m),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else $(s,l,m)},k=(l,m)=>{$(r.errors,l,m),h.state.next({errors:r.errors})},L=l=>{r.errors=l,h.state.next({errors:r.errors,isValid:!1})},N=(l,m,g,C)=>{const S=j(n,l);if(S){const E=j(s,l,H(g)?j(o,l):g);H(E)||C&&C.defaultChecked||m?$(s,l,m?E:sr(S._f)):ee(l,E),a.mount&&x()}},J=(l,m,g,C,S)=>{let E=!1,D=!1;const U={name:l},q=!!(j(n,l)&&j(n,l)._f.disabled);if(!g||C){u.isDirty&&(D=r.isDirty,r.isDirty=U.isDirty=P(),E=D!==U.isDirty);const ae=q||_e(j(o,l),m);D=!!(!q&&j(r.dirtyFields,l)),ae||q?G(r.dirtyFields,l):$(r.dirtyFields,l,!0),U.dirtyFields=r.dirtyFields,E=E||u.dirtyFields&&D!==!ae}if(g){const ae=j(r.touchedFields,l);ae||($(r.touchedFields,l,g),U.touchedFields=r.touchedFields,E=E||u.touchedFields&&ae!==g)}return E&&S&&h.state.next(U),E?U:{}},Q=(l,m,g,C)=>{const S=j(r.errors,l),E=u.isValid&&xe(m)&&r.isValid!==m;if(e.delayError&&g?(f=A(()=>k(l,g)),f(e.delayError)):(clearTimeout(d),f=null,g?$(r.errors,l,g):G(r.errors,l)),(g?!_e(S,g):S)||!ce(C)||E){const D={...C,...E&&xe(m)?{isValid:m}:{},errors:r.errors,name:l};r={...r,...D},h.state.next(D)}},se=async l=>{T(l,!0);const m=await t.resolver(s,t.context,sl(l||c.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return T(l),m},_=async l=>{const{errors:m}=await se(l);if(l)for(const g of l){const C=j(m,g);C?$(r.errors,g,C):G(r.errors,g)}else r.errors=m;return m},R=async(l,m,g={valid:!0})=>{for(const C in l){const S=l[C];if(S){const{_f:E,...D}=S;if(E){const U=c.array.has(E.name);T([C],!0);const q=await vn(S,s,b,t.shouldUseNativeValidation&&!m,U);if(T([C]),q[E.name]&&(g.valid=!1,m))break;!m&&(j(q,E.name)?U?tl(r.errors,q,E.name):$(r.errors,E.name,q[E.name]):G(r.errors,E.name))}D&&await R(D,m,g)}}return g.valid},Se=()=>{for(const l of c.unMount){const m=j(n,l);m&&(m._f.refs?m._f.refs.every(g=>!or(g)):!or(m._f.ref))&&Yt(l)}c.unMount=new Set},P=(l,m)=>(l&&m&&$(s,l,m),!_e(Br(),o)),B=(l,m,g)=>Fo(l,c,{...a.mount?s:H(m)?o:ve(l)?{[l]:m}:m},g,m),X=l=>ft(j(a.mount?s:o,l,e.shouldUnregister?j(o,l,[]):[])),ee=(l,m,g={})=>{const C=j(n,l);let S=m;if(C){const E=C._f;E&&(!E.disabled&&$(s,l,Ro(m,E)),S=Mt(E.ref)&&te(m)?"":m,Ao(E.ref)?[...E.ref.options].forEach(D=>D.selected=S.includes(D.value)):E.refs?ut(E.ref)?E.refs.length>1?E.refs.forEach(D=>(!D.defaultChecked||!D.disabled)&&(D.checked=Array.isArray(S)?!!S.find(U=>U===D.value):S===D.value)):E.refs[0]&&(E.refs[0].checked=!!S):E.refs.forEach(D=>D.checked=D.value===S):Pr(E.ref)?E.ref.value="":(E.ref.value=S,E.ref.type||h.values.next({name:l,values:{...s}})))}(g.shouldDirty||g.shouldTouch)&&J(l,S,g.shouldTouch,g.shouldDirty,!0),g.shouldValidate&&Ke(l)},fe=(l,m,g)=>{for(const C in m){const S=m[C],E=`${l}.${C}`,D=j(n,E);(c.array.has(l)||!_t(S)||D&&!D._f)&&!qe(S)?fe(E,S,g):ee(E,S,g)}},de=(l,m,g={})=>{const C=j(n,l),S=c.array.has(l),E=re(m);$(s,l,E),S?(h.array.next({name:l,values:{...s}}),(u.isDirty||u.dirtyFields)&&g.shouldDirty&&h.state.next({name:l,dirtyFields:pt(o,s),isDirty:P(l,E)})):C&&!C._f&&!te(E)?fe(l,E,g):ee(l,E,g),pn(l,c)&&h.state.next({...r}),h.values.next({name:a.mount?l:void 0,values:{...s}})},Xe=async l=>{a.mount=!0;const m=l.target;let g=m.name,C=!0;const S=j(n,g),E=()=>m.type?sr(S._f):vo(l),D=U=>{C=Number.isNaN(U)||U===j(s,g,U)};if(S){let U,q;const ae=E(),Ve=l.type===Rt.BLUR||l.type===Rt.FOCUS_OUT,Ho=!al(S._f)&&!t.resolver&&!j(r.errors,g)&&!S._f.deps||il(Ve,j(r.touchedFields,g),r.isSubmitted,O,w),Xt=pn(g,c,Ve);$(s,g,ae),Ve?(S._f.onBlur&&S._f.onBlur(l),f&&f(0)):S._f.onChange&&S._f.onChange(l);const Gt=J(g,ae,Ve,!1),qo=!ce(Gt)||Xt;if(!Ve&&h.values.next({name:g,type:l.type,values:{...s}}),Ho)return u.isValid&&x(),qo&&h.state.next({name:g,...Xt?{}:Gt});if(!Ve&&Xt&&h.state.next({...r}),t.resolver){const{errors:Wr}=await se([g]);if(D(ae),C){const Wo=wn(r.errors,n,g),Yr=wn(Wr,n,Wo.name||g);U=Yr.error,g=Yr.name,q=ce(Wr)}}else T([g],!0),U=(await vn(S,s,b,t.shouldUseNativeValidation))[g],T([g]),D(ae),C&&(U?q=!1:u.isValid&&(q=await R(n,!0)));C&&(S._f.deps&&Ke(S._f.deps),Q(g,q,U,Gt))}},Ge=(l,m)=>{if(j(r.errors,m)&&l.focus)return l.focus(),1},Ke=async(l,m={})=>{let g,C;const S=Ct(l);if(t.resolver){const E=await _(H(l)?l:S);g=ce(E),C=l?!S.some(D=>j(E,D)):g}else l?(C=(await Promise.all(S.map(async E=>{const D=j(n,E);return await R(D&&D._f?{[E]:D}:D)}))).every(Boolean),!(!C&&!r.isValid)&&x()):C=g=await R(n);return h.state.next({...!ve(l)||u.isValid&&g!==r.isValid?{}:{name:l},...t.resolver||!l?{isValid:g}:{},errors:r.errors}),m.shouldFocus&&!C&&nt(n,Ge,l?S:c.mount),C},Br=l=>{const m={...a.mount?s:o};return H(l)?m:ve(l)?j(m,l):l.map(g=>j(m,g))},Ur=(l,m)=>({invalid:!!j((m||r).errors,l),isDirty:!!j((m||r).dirtyFields,l),isTouched:!!j((m||r).touchedFields,l),isValidating:!!j((m||r).validatingFields,l),error:j((m||r).errors,l)}),Io=l=>{l&&Ct(l).forEach(m=>G(r.errors,m)),h.state.next({errors:l?r.errors:{}})},Ir=(l,m,g)=>{const C=(j(n,l,{_f:{}})._f||{}).ref,S=j(r.errors,l)||{},{ref:E,message:D,type:U,...q}=S;$(r.errors,l,{...q,...m,ref:C}),h.state.next({name:l,errors:r.errors,isValid:!1}),g&&g.shouldFocus&&C&&C.focus&&C.focus()},Vo=(l,m)=>Oe(l)?h.values.subscribe({next:g=>l(B(void 0,m),g)}):B(l,m,!0),Yt=(l,m={})=>{for(const g of l?Ct(l):c.mount)c.mount.delete(g),c.array.delete(g),m.keepValue||(G(n,g),G(s,g)),!m.keepError&&G(r.errors,g),!m.keepDirty&&G(r.dirtyFields,g),!m.keepTouched&&G(r.touchedFields,g),!m.keepIsValidating&&G(r.validatingFields,g),!t.shouldUnregister&&!m.keepDefaultValue&&G(o,g);h.values.next({values:{...s}}),h.state.next({...r,...m.keepDirty?{isDirty:P()}:{}}),!m.keepIsValid&&x()},Vr=({disabled:l,name:m,field:g,fields:C,value:S})=>{if(xe(l)&&a.mount||l){const E=l?void 0:H(S)?sr(g?g._f:j(C,m)._f):S;$(s,m,E),J(m,E,!1,!1,!0)}},Jt=(l,m={})=>{let g=j(n,l);const C=xe(m.disabled);return $(n,l,{...g||{},_f:{...g&&g._f?g._f:{ref:{name:l}},name:l,mount:!0,...m}}),c.mount.add(l),g?Vr({field:g,disabled:m.disabled,name:l,value:m.value}):N(l,!0,m.value),{...C?{disabled:m.disabled}:{},...t.progressive?{required:!!m.required,min:Ze(m.min),max:Ze(m.max),minLength:Ze(m.minLength),maxLength:Ze(m.maxLength),pattern:Ze(m.pattern)}:{},name:l,onChange:Xe,onBlur:Xe,ref:S=>{if(S){Jt(l,m),g=j(n,l);const E=H(S.value)&&S.querySelectorAll&&S.querySelectorAll("input,select,textarea")[0]||S,D=ol(E),U=g._f.refs||[];if(D?U.find(q=>q===E):E===g._f.ref)return;$(n,l,{_f:{...g._f,...D?{refs:[...U.filter(or),E,...Array.isArray(j(o,l))?[{}]:[]],ref:{type:E.type,name:l}}:{ref:E}}}),N(l,!1,void 0,E)}else g=j(n,l,{}),g._f&&(g._f.mount=!1),(t.shouldUnregister||m.shouldUnregister)&&!(wo(c.array,l)&&a.action)&&c.unMount.add(l)}}},zr=()=>t.shouldFocusError&&nt(n,Ge,c.mount),zo=l=>{xe(l)&&(h.state.next({disabled:l}),nt(n,(m,g)=>{const C=j(n,g);C&&(m.disabled=C._f.disabled||l,Array.isArray(C._f.refs)&&C._f.refs.forEach(S=>{S.disabled=C._f.disabled||l}))},0,!1))},$r=(l,m)=>async g=>{let C;g&&(g.preventDefault&&g.preventDefault(),g.persist&&g.persist());let S=re(s);if(h.state.next({isSubmitting:!0}),t.resolver){const{errors:E,values:D}=await se();r.errors=E,S=D}else await R(n);if(G(r.errors,"root"),ce(r.errors)){h.state.next({errors:{}});try{await l(S,g)}catch(E){C=E}}else m&&await m({...r.errors},g),zr(),setTimeout(zr);if(h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ce(r.errors)&&!C,submitCount:r.submitCount+1,errors:r.errors}),C)throw C},$o=(l,m={})=>{j(n,l)&&(H(m.defaultValue)?de(l,re(j(o,l))):(de(l,m.defaultValue),$(o,l,re(m.defaultValue))),m.keepTouched||G(r.touchedFields,l),m.keepDirty||(G(r.dirtyFields,l),r.isDirty=m.defaultValue?P(l,re(j(o,l))):P()),m.keepError||(G(r.errors,l),u.isValid&&x()),h.state.next({...r}))},Hr=(l,m={})=>{const g=l?re(l):o,C=re(g),S=ce(l),E=S?o:C;if(m.keepDefaultValues||(o=g),!m.keepValues){if(m.keepDirtyValues)for(const D of c.mount)j(r.dirtyFields,D)?$(E,D,j(s,D)):de(D,j(E,D));else{if(Tr&&H(l))for(const D of c.mount){const U=j(n,D);if(U&&U._f){const q=Array.isArray(U._f.refs)?U._f.refs[0]:U._f.ref;if(Mt(q)){const ae=q.closest("form");if(ae){ae.reset();break}}}}n={}}s=e.shouldUnregister?m.keepDefaultValues?re(o):{}:re(E),h.array.next({values:{...E}}),h.values.next({values:{...E}})}c={mount:m.keepDirtyValues?c.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},a.mount=!u.isValid||!!m.keepIsValid||!!m.keepDirtyValues,a.watch=!!e.shouldUnregister,h.state.next({submitCount:m.keepSubmitCount?r.submitCount:0,isDirty:S?!1:m.keepDirty?r.isDirty:!!(m.keepDefaultValues&&!_e(l,o)),isSubmitted:m.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:S?[]:m.keepDirtyValues?m.keepDefaultValues&&s?pt(o,s):r.dirtyFields:m.keepDefaultValues&&l?pt(o,l):{},touchedFields:m.keepTouched?r.touchedFields:{},errors:m.keepErrors?r.errors:{},isSubmitSuccessful:m.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},qr=(l,m)=>Hr(Oe(l)?l(s):l,m);return{control:{register:Jt,unregister:Yt,getFieldState:Ur,handleSubmit:$r,setError:Ir,_executeSchema:se,_getWatch:B,_getDirty:P,_updateValid:x,_removeUnmounted:Se,_updateFieldArray:F,_updateDisabledField:Vr,_getFieldArray:X,_reset:Hr,_resetDefaultValues:()=>Oe(t.defaultValues)&&t.defaultValues().then(l=>{qr(l,t.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:l=>{r={...r,...l}},_disableForm:zo,_subjects:h,_proxyFormState:u,_setErrors:L,get _fields(){return n},get _formValues(){return s},get _state(){return a},set _state(l){a=l},get _defaultValues(){return o},get _names(){return c},set _names(l){c=l},get _formState(){return r},set _formState(l){r=l},get _options(){return t},set _options(l){t={...t,...l}}},trigger:Ke,register:Jt,handleSubmit:$r,watch:Vo,setValue:de,getValues:Br,reset:qr,resetField:$o,clearErrors:Io,unregister:Yt,setError:Ir,setFocus:(l,m={})=>{const g=j(n,l),C=g&&g._f;if(C){const S=C.refs?C.refs[0]:C.ref;S.focus&&(S.focus(),m.shouldSelect&&S.select())}},getFieldState:Ur}}function Mo(e={}){const t=z.useRef(),r=z.useRef(),[n,o]=z.useState({isDirty:!1,isValidating:!1,isLoading:Oe(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Oe(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...dl(e),formState:n});const s=t.current.control;return s._options=e,Mr({subject:s._subjects.state,next:a=>{So(a,s._proxyFormState,s._updateFormState,!0)&&o({...s._formState})}}),z.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),z.useEffect(()=>{if(s._proxyFormState.isDirty){const a=s._getDirty();a!==n.isDirty&&s._subjects.state.next({isDirty:a})}},[s,n.isDirty]),z.useEffect(()=>{e.values&&!_e(e.values,r.current)?(s._reset(e.values,s._options.resetOptions),r.current=e.values,o(a=>({...a}))):s._resetDefaultValues()},[e.values,s]),z.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),z.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),z.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),t.current.formState=jo(n,s),t.current}const Po=()=>{const[e,t]=v.useState("");return v.useEffect(()=>{(async()=>{try{const n=await V.get("http://localhost:8080/csrf-token");t(n.data.token),V.defaults.headers.common["X-CSRF-TOKEN"]=n.data.token}catch(n){console.error("Error fetching CSRF token:",n)}})()},[]),e},ar=y.div`
  font-size: 1rem;
  width: 50px;
  height: 50px;
  /* border: 1px solid lightgrey; */
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ul=({file:e})=>e?e.type.startsWith("image/")?i.jsx(ar,{children:i.jsx("img",{src:URL.createObjectURL(e),alt:"Preview",style:{maxWidth:"100%",maxHeight:"100%"}})}):i.jsx(ar,{children:"Preview not available"}):i.jsx(ar,{children:"No file selected"}),fl=y.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-grey-100);
`,hl=y.div`
  margin-top: 10px;
`,ml=()=>{const{register:e,handleSubmit:t,setValue:r,formState:{errors:n},setError:o}=Mo(),[s,a]=v.useState(""),[c,f]=v.useState([]),[d,u]=v.useState(null),h=v.useRef(null),w=Ue(),O=Po(),b=x=>{const T=x.target.files[0],F=URL.createObjectURL(T);T&&(u(F),r("profileImage",x.target.files[0]))};console.log(d);const A=async x=>{try{const T=new FormData;T.append("user",new Blob([JSON.stringify({username:x.username,email:x.email,password:x.password})],{type:"application/json"})),T.append("profileImage",x.profileImage[0]);const F=await V.post("http://localhost:8080/register",T,{headers:{"Content-Type":"multipart/form-data","X-CSRF-TOKEN":O}});console.log(F),w("/signin")}catch(T){if(T.response)if(T.response.status===409){const{message:F,suggestedUsernames:k}=T.response.data;a(F),f(k)}else if(T.response.status===400){const{errors:F}=T.response.data;F.forEach(k=>{o(k.field,{type:"manual",message:k.defaultMessage})})}else T.response.data&&T.response.data.message&&(alert(T.response.data.message),a(T.response.data.message)),a(T.response.data);else a("An unexpected error occurred while registering.")}console.log("Registered Data:",{username:x.username,email:x.email,password:x.password,image:x.profileImage[0]?x.profileImage[0].name:null})};return i.jsx(fl,{children:i.jsx(la,{children:i.jsxs(it,{onSubmit:t(A),children:[i.jsx(Te,{as:"h2",children:"Register"}),i.jsx(ne,{name:"username",type:"text",placeholder:"Username",...e("username",{required:"Username is required"})}),n.username&&i.jsx(He,{children:n.username.message}),i.jsx(ne,{name:"email",type:"email",placeholder:"Email",...e("email",{required:"Email is required"})}),n.email&&i.jsx(He,{children:n.email.message}),i.jsx(ne,{name:"password",type:"password",placeholder:"Password",...e("password",{required:"Password is required"})}),n.password&&i.jsx(He,{children:n.password.message}),i.jsx(Sr,{name:"profileImage",accept:"image/*",ref:h,onChange:b,...e("profileImage",{required:!0})}),n.profileImage&&i.jsx(He,{children:n.profileImage.message}),d&&i.jsx(ul,{file:d}),i.jsx("div",{children:i.jsx("img",{src:d,alt:"Image preview",style:{width:"200px",height:"auto"}})}),i.jsx(pe,{style:{marginTop:"10px"},variation:"secondary",size:"md",type:"submit",children:"Register"}),s&&i.jsx(He,{children:s}),c.length>0&&i.jsxs(hl,{children:[i.jsx("p",{children:"Username suggestions:"}),c.map((x,T)=>i.jsxs("span",{children:[x," "]},T))]})]})})})},pl=y.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-grey-100);
`,gl=y.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: var(--shadow-md);
`,yl=y.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`,En=y.div`
  margin-bottom: 15px;
`,bl=y.div`
  margin-bottom: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`,xl=y.input`
  margin-right: 5px;
  width: fit-content;
`,vl=y.label`
  font-weight: bold;
  margin-right: 5px;
`,jn=y.label`
  display: block;
  font-weight: bold;
  margin: 10px 5px 0 0;
`,Sn=y.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: transparent;
`,wl=y.h2`
  margin-bottom: 20px;
`,El=y.span`
  margin: 5px 0;
  color: ${e=>e.errors?"red":"green"};
  overflow: auto;
`,jl=y.div`
  margin-right: 5px;
  text-align: center;
`,Sl=y.div`
  margin-right: 5px;
  padding: 10px;
  text-align: center;
`,kl=()=>{const[e,t]=v.useState(""),[r,n]=v.useState(""),[o,s]=v.useState(!1),[a,c]=v.useState(!1),[f,d]=v.useState(null),u=Ue(),{login:h}=ot(),{loggedInUser:w,setLoggedInUser:O}=ot(),b=Po();v.useEffect(()=>{const x=localStorage.getItem("rememberMe")==="true";if(s(x),x){const T=localStorage.getItem("username");t(T||"")}},[]);const A=async x=>{x.preventDefault();try{const F=await fetch("http://localhost:8080/login",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-Token":b},body:JSON.stringify({username:e,password:r})});if(F.ok){const k=await F.json(),{username:L}=k;O(L),d("Login successful!"),h(),u("/"),o?(localStorage.setItem("username",e),localStorage.setItem("rememberMe",!0)):(localStorage.removeItem("username"),localStorage.removeItem("rememberMe"))}else{const k=await F.text();c(!0),d(k),console.error("Login failed: ",k)}}catch(T){console.error("Error:",T)}};return i.jsx(pl,{children:i.jsxs(gl,{children:[i.jsx(wl,{children:"Login"}),i.jsxs(yl,{onSubmit:A,children:[i.jsxs(En,{children:[i.jsx(jn,{htmlFor:"username",children:"Username:"}),i.jsx(Sn,{type:"text",id:"username",value:e,onChange:x=>t(x.target.value),required:!0})]}),i.jsxs(En,{children:[i.jsx(jn,{htmlFor:"password",children:"Password:"}),i.jsx(Sn,{type:"password",id:"password",value:r,onChange:x=>n(x.target.value),required:!0})]}),i.jsxs(bl,{children:[i.jsxs("span",{children:[i.jsx(vl,{htmlFor:"rememberMe",style:{marginBottom:"auto"},children:"Remember me"}),i.jsx(xl,{type:"checkbox",id:"rememberMe",checked:o,onChange:x=>s(x.target.checked)})]}),i.jsx(jl,{children:i.jsx(Jr,{to:"/forgot-password",children:"Forgot Password?"})})]}),f&&i.jsx(El,{errors:a,children:f}),i.jsx(pe,{size:"lg",type:"submit",children:"Login"}),i.jsx(Sl,{children:i.jsx(Jr,{to:"/signup",children:"Sign Up"})})]})]})})};function Fl(e){return Y({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function Er(e){return Y({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Cl(e){return Y({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"},child:[]}]})(e)}function Ol(e){return Y({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(e)}function Al(e){return Y({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"},child:[]}]})(e)}function Tl(e){return Y({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16.7574 2.99677L14.7574 4.99677H5V18.9968H19V9.23941L21 7.23941V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99677C3 3.44448 3.44772 2.99677 4 2.99677H16.7574ZM20.4853 2.09727L21.8995 3.51149L12.7071 12.7039L11.2954 12.7063L11.2929 11.2897L20.4853 2.09727Z"},child:[]}]})(e)}function Dl(e){return Y({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z"},child:[]}]})(e)}const Rl=async()=>{try{const e=await fetch("http://localhost:8080/users/admin",{method:"GET",headers:{},credentials:"include"});if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){throw console.error("Error fetching users:",e),e}},Ml=async e=>{console.log("createUser-userData",e);try{const t=new FormData;t.append("user",new Blob([JSON.stringify({username:e.username,email:e.email,password:e.password,role:e.role||"USER"})],{type:"application/json"}));const r=e.profileImage!==null?e.profileImage[0]:null;t.append("profileImage",r);const n=await V.post("http://localhost:8080/users/admin",t,{headers:{"Content-Type":"multipart/form-data"}});if(n.status>=200&&n.status<300)return n.data;throw new Error("Network response was not ok")}catch(t){if(t.response)return[{error:t.response.data}];throw t}},Pl=async(e,t)=>{console.log("updateUser");try{const r=new FormData;r.append("userDetails",new Blob([JSON.stringify({username:t.username,email:t.email,password:t.password,role:t.role})],{type:"application/json"})),r.append("profileImage",t.profileImage[0]);const n=await V.put(`http://localhost:8080/users/admin/${e}`,r,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0});return console.log("response",n),n.data}catch(r){if(r.response)return{error:r.response.data};throw r}},_l=async e=>{try{if(!(await fetch(`http://localhost:8080/users/admin/${e}`,{method:"DELETE",headers:{},credentials:"include"})).ok)throw new Error("Network response was not ok")}catch(t){if(t.response)return{error:t.response.data};throw t}},gt={fetchUsers:Rl,createUser:Ml,updateUser:Pl,deleteUser:_l},yt=y.div`
    color: var(--color-red-500);
    padding: 5px 0;
`,Ll=y.div`
  position: relative;
`,Nl=y.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`,kn={username:"",password:"",email:"",role:"",profileImage:null},Bl=()=>{const[e,t]=v.useState([]),[r,n]=v.useState(null),[o,s]=v.useState(!1),[a,c]=v.useState(!1),[f,d]=v.useState(""),{register:u,handleSubmit:h,formState:{errors:w},setValue:O,reset:b,control:A}=Mo({defaultValues:kn}),x=()=>{c(!0)},T=()=>{c(!1),d(""),k()},F=_=>{const R=_.target.files[0];R&&O("profileImage",R)},k=()=>{b(kn),d("")};v.useEffect(()=>{L()},[]);const L=async()=>{try{const _=await gt.fetchUsers();t(_)}catch(_){console.error("Error fetching users:",_)}},N=async _=>{try{const R=await gt.createUser(_);if(console.log("User data saved",R,R.status,R.error),R.status===400&&R.data){const Se=Object.values(R.data).join(", ");d(`Validation failed: ${Se}`),console.log("Validation errors:",R.data)}else R.status===403?d("You are not authorized to perform this action.",R):R[0].error?(d(`Error creating user: ${R[0].error.message}`),console.log("Error creating user:",R.error)):(L(),s(!1),T())}catch(R){console.error("Error creating user:",R),d(`Error details: ${R.message}`)}},J=async _=>{try{const R=await gt.updateUser(r.id,_);if(console.log("User data updated",R.error,R[0]),R.status===400&&R.data){console.log("User err",R);const Se=Object.values(R.data).join(", ");d(`Validation failed: ${Se}`),console.log("Validation errors:",R.data)}else R.status===403?d("You are not authorized to perform this action.",R):R.error?(d(`Error creating user: ${R.error.message}`),console.log("Error creating user:",R.error)):(L(),k(),n(null),s(!1),T())}catch(R){console.error("Error updating user:",R)}},Q=async _=>{try{await gt.deleteUser(_.id),await L()}catch(R){console.error("Error deleting user:",R)}},se=_=>{O("username",_.username),O("password",_.password),O("email",_.email),O("role",_.role),O("profileImage",null),n(_),s(!0),x()};return i.jsxs(i.Fragment,{children:[i.jsx(Te,{as:"h1",children:"Users"}),i.jsxs(Ll,{children:[i.jsxs(Ae,{onClick:()=>{n(null),s(!0),x()},children:[i.jsx(Er,{})," Add User"]}),o&&i.jsx(i.Fragment,{children:i.jsx(kr,{isOpen:a,onClose:T,onClick:()=>s(!1),children:i.jsxs(it,{onSubmit:h(r?J:N),children:[i.jsx(ne,{type:"text",id:"username",placeholder:"Username",...u("username",{required:"Username is required"})}),w.username&&i.jsx(yt,{className:"error",children:w.username.message}),i.jsx(ne,{type:"password",id:"password",placeholder:"Password",...u("password",{required:"Password is required",minLength:{value:6,message:"Password must be at least 6 characters"}})}),w.password&&i.jsx(yt,{className:"error",children:w.password.message}),i.jsx(ne,{type:"email",id:"email",placeholder:"Email",...u("email",{required:"Email is required",pattern:/^\S+@\S+$/i})}),w.email&&i.jsx(yt,{className:"error",children:w.email.message}),i.jsx(Sr,{name:"profileImage",accept:"image/*",onChange:F,...u("profileImage",{required:!0})}),w.profileImage&&i.jsx(He,{children:w.profileImage.message}),i.jsx(Nl,{children:i.jsx(Zc,{name:"role",control:A,render:({field:_})=>i.jsxs(i.Fragment,{children:[i.jsx(Me,{id:"userRole",name:"role",value:"USER",label:"User",checked:_.value==="USER",onChange:()=>_.onChange("USER")}),i.jsx(Me,{id:"adminRole",name:"role",value:"ADMIN",label:"Admin",checked:_.value==="ADMIN",onChange:()=>_.onChange("ADMIN")})]})})}),f&&i.jsx(yt,{className:"error",children:f}),i.jsx(Ae,{bg:"var(--color-grey-50)",type:"submit",children:r?i.jsxs(i.Fragment,{children:[i.jsx(Ol,{})," Update"]}):i.jsxs(i.Fragment,{children:[i.jsx(Er,{})," Create"]})})]})})}),i.jsx($n,{headers:["id","username","profileImageFileName","email","role","balance","expenses"],data:e,actions:[{icon:i.jsx(Tl,{}),label:" Edit",color:"var(--color-green-700)",onClick:se},{icon:i.jsx(Dl,{}),label:" Delete",color:"red",onClick:Q}]})]})]})};function ye(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function Be(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const _o=6048e5,Ul=864e5;let Il={};function Wt(){return Il}function at(e,t){var c,f,d,u;const r=Wt(),n=(t==null?void 0:t.weekStartsOn)??((f=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:f.weekStartsOn)??r.weekStartsOn??((u=(d=r.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??0,o=ye(e),s=o.getDay(),a=(s<n?7:0)+s-n;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}function Nt(e){return at(e,{weekStartsOn:1})}function Lo(e){const t=ye(e),r=t.getFullYear(),n=Be(e,0);n.setFullYear(r+1,0,4),n.setHours(0,0,0,0);const o=Nt(n),s=Be(e,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const a=Nt(s);return t.getTime()>=o.getTime()?r+1:t.getTime()>=a.getTime()?r:r-1}function Fn(e){const t=ye(e);return t.setHours(0,0,0,0),t}function Cn(e){const t=ye(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function Vl(e,t){const r=Fn(e),n=Fn(t),o=+r-Cn(r),s=+n-Cn(n);return Math.round((o-s)/Ul)}function zl(e){const t=Lo(e),r=Be(e,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),Nt(r)}function $l(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Hl(e){if(!$l(e)&&typeof e!="number")return!1;const t=ye(e);return!isNaN(Number(t))}function ql(e){const t=ye(e),r=Be(e,0);return r.setFullYear(t.getFullYear(),0,1),r.setHours(0,0,0,0),r}const Wl={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Yl=(e,t,r)=>{let n;const o=Wl[e];return typeof o=="string"?n=o:t===1?n=o.one:n=o.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};function ir(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}const Jl={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Xl={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Gl={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Kl={date:ir({formats:Jl,defaultWidth:"full"}),time:ir({formats:Xl,defaultWidth:"full"}),dateTime:ir({formats:Gl,defaultWidth:"full"})},Ql={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zl=(e,t,r,n)=>Ql[e];function et(e){return(t,r)=>{const n=r!=null&&r.context?String(r.context):"standalone";let o;if(n==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,c=r!=null&&r.width?String(r.width):a;o=e.formattingValues[c]||e.formattingValues[a]}else{const a=e.defaultWidth,c=r!=null&&r.width?String(r.width):e.defaultWidth;o=e.values[c]||e.values[a]}const s=e.argumentCallback?e.argumentCallback(t):t;return o[s]}}const ed={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},td={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},rd={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},nd={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},od={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},sd={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ad=(e,t)=>{const r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},id={ordinalNumber:ad,era:et({values:ed,defaultWidth:"wide"}),quarter:et({values:td,defaultWidth:"wide",argumentCallback:e=>e-1}),month:et({values:rd,defaultWidth:"wide"}),day:et({values:nd,defaultWidth:"wide"}),dayPeriod:et({values:od,defaultWidth:"wide",formattingValues:sd,defaultFormattingWidth:"wide"})};function tt(e){return(t,r={})=>{const n=r.width,o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;const a=s[0],c=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(c)?ld(c,h=>h.test(a)):cd(c,h=>h.test(a));let d;d=e.valueCallback?e.valueCallback(f):f,d=r.valueCallback?r.valueCallback(d):d;const u=t.slice(a.length);return{value:d,rest:u}}}function cd(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function ld(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function dd(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const o=n[0],s=t.match(e.parsePattern);if(!s)return null;let a=e.valueCallback?e.valueCallback(s[0]):s[0];a=r.valueCallback?r.valueCallback(a):a;const c=t.slice(o.length);return{value:a,rest:c}}}const ud=/^(\d+)(th|st|nd|rd)?/i,fd=/\d+/i,hd={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},md={any:[/^b/i,/^(a|c)/i]},pd={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gd={any:[/1/i,/2/i,/3/i,/4/i]},yd={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},bd={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},xd={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},vd={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},wd={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ed={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},jd={ordinalNumber:dd({matchPattern:ud,parsePattern:fd,valueCallback:e=>parseInt(e,10)}),era:tt({matchPatterns:hd,defaultMatchWidth:"wide",parsePatterns:md,defaultParseWidth:"any"}),quarter:tt({matchPatterns:pd,defaultMatchWidth:"wide",parsePatterns:gd,defaultParseWidth:"any",valueCallback:e=>e+1}),month:tt({matchPatterns:yd,defaultMatchWidth:"wide",parsePatterns:bd,defaultParseWidth:"any"}),day:tt({matchPatterns:xd,defaultMatchWidth:"wide",parsePatterns:vd,defaultParseWidth:"any"}),dayPeriod:tt({matchPatterns:wd,defaultMatchWidth:"any",parsePatterns:Ed,defaultParseWidth:"any"})},Sd={code:"en-US",formatDistance:Yl,formatLong:Kl,formatRelative:Zl,localize:id,match:jd,options:{weekStartsOn:0,firstWeekContainsDate:1}};function kd(e){const t=ye(e);return Vl(t,ql(t))+1}function Fd(e){const t=ye(e),r=+Nt(t)-+zl(t);return Math.round(r/_o)+1}function No(e,t){var u,h,w,O;const r=ye(e),n=r.getFullYear(),o=Wt(),s=(t==null?void 0:t.firstWeekContainsDate)??((h=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??o.firstWeekContainsDate??((O=(w=o.locale)==null?void 0:w.options)==null?void 0:O.firstWeekContainsDate)??1,a=Be(e,0);a.setFullYear(n+1,0,s),a.setHours(0,0,0,0);const c=at(a,t),f=Be(e,0);f.setFullYear(n,0,s),f.setHours(0,0,0,0);const d=at(f,t);return r.getTime()>=c.getTime()?n+1:r.getTime()>=d.getTime()?n:n-1}function Cd(e,t){var c,f,d,u;const r=Wt(),n=(t==null?void 0:t.firstWeekContainsDate)??((f=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:f.firstWeekContainsDate)??r.firstWeekContainsDate??((u=(d=r.locale)==null?void 0:d.options)==null?void 0:u.firstWeekContainsDate)??1,o=No(e,t),s=Be(e,0);return s.setFullYear(o,0,n),s.setHours(0,0,0,0),at(s,t)}function Od(e,t){const r=ye(e),n=+at(r,t)-+Cd(r,t);return Math.round(n/_o)+1}function I(e,t){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}const Fe={y(e,t){const r=e.getFullYear(),n=r>0?r:1-r;return I(t==="yy"?n%100:n,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):I(r+1,2)},d(e,t){return I(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return I(e.getHours()%12||12,t.length)},H(e,t){return I(e.getHours(),t.length)},m(e,t){return I(e.getMinutes(),t.length)},s(e,t){return I(e.getSeconds(),t.length)},S(e,t){const r=t.length,n=e.getMilliseconds(),o=Math.trunc(n*Math.pow(10,r-3));return I(o,t.length)}},$e={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},On={G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const n=e.getFullYear(),o=n>0?n:1-n;return r.ordinalNumber(o,{unit:"year"})}return Fe.y(e,t)},Y:function(e,t,r,n){const o=No(e,n),s=o>0?o:1-o;if(t==="YY"){const a=s%100;return I(a,2)}return t==="Yo"?r.ordinalNumber(s,{unit:"year"}):I(s,t.length)},R:function(e,t){const r=Lo(e);return I(r,t.length)},u:function(e,t){const r=e.getFullYear();return I(r,t.length)},Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return I(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return I(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return Fe.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){const n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return I(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){const o=Od(e,n);return t==="wo"?r.ordinalNumber(o,{unit:"week"}):I(o,t.length)},I:function(e,t,r){const n=Fd(e);return t==="Io"?r.ordinalNumber(n,{unit:"week"}):I(n,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):Fe.d(e,t)},D:function(e,t,r){const n=kd(e);return t==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):I(n,t.length)},E:function(e,t,r){const n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){const o=e.getDay(),s=(o-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return I(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){const o=e.getDay(),s=(o-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return I(s,t.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,r){const n=e.getDay(),o=n===0?7:n;switch(t){case"i":return String(o);case"ii":return I(o,t.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,r){const n=e.getHours();let o;switch(n===12?o=$e.noon:n===0?o=$e.midnight:o=n/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,r){const n=e.getHours();let o;switch(n>=17?o=$e.evening:n>=12?o=$e.afternoon:n>=4?o=$e.morning:o=$e.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return Fe.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):Fe.H(e,t)},K:function(e,t,r){const n=e.getHours()%12;return t==="Ko"?r.ordinalNumber(n,{unit:"hour"}):I(n,t.length)},k:function(e,t,r){let n=e.getHours();return n===0&&(n=24),t==="ko"?r.ordinalNumber(n,{unit:"hour"}):I(n,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):Fe.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):Fe.s(e,t)},S:function(e,t){return Fe.S(e,t)},X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(t){case"X":return Tn(n);case"XXXX":case"XX":return Re(n);case"XXXXX":case"XXX":default:return Re(n,":")}},x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"x":return Tn(n);case"xxxx":case"xx":return Re(n);case"xxxxx":case"xxx":default:return Re(n,":")}},O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+An(n,":");case"OOOO":default:return"GMT"+Re(n,":")}},z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+An(n,":");case"zzzz":default:return"GMT"+Re(n,":")}},t:function(e,t,r){const n=Math.trunc(e.getTime()/1e3);return I(n,t.length)},T:function(e,t,r){const n=e.getTime();return I(n,t.length)}};function An(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),o=Math.trunc(n/60),s=n%60;return s===0?r+String(o):r+String(o)+t+I(s,2)}function Tn(e,t){return e%60===0?(e>0?"-":"+")+I(Math.abs(e)/60,2):Re(e,t)}function Re(e,t=""){const r=e>0?"-":"+",n=Math.abs(e),o=I(Math.trunc(n/60),2),s=I(n%60,2);return r+o+t+s}const Dn=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Bo=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Ad=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],o=r[2];if(!o)return Dn(e,t);let s;switch(n){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",Dn(n,t)).replace("{{time}}",Bo(o,t))},Td={p:Bo,P:Ad},Dd=/^D+$/,Rd=/^Y+$/,Md=["D","DD","YY","YYYY"];function Pd(e){return Dd.test(e)}function _d(e){return Rd.test(e)}function Ld(e,t,r){const n=Nd(e,t,r);if(console.warn(n),Md.includes(e))throw new RangeError(n)}function Nd(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Bd=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ud=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Id=/^'([^]*?)'?$/,Vd=/''/g,zd=/[a-zA-Z]/;function $d(e,t,r){var u,h,w,O;const n=Wt(),o=n.locale??Sd,s=n.firstWeekContainsDate??((h=(u=n.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??1,a=n.weekStartsOn??((O=(w=n.locale)==null?void 0:w.options)==null?void 0:O.weekStartsOn)??0,c=ye(e);if(!Hl(c))throw new RangeError("Invalid time value");let f=t.match(Ud).map(b=>{const A=b[0];if(A==="p"||A==="P"){const x=Td[A];return x(b,o.formatLong)}return b}).join("").match(Bd).map(b=>{if(b==="''")return{isToken:!1,value:"'"};const A=b[0];if(A==="'")return{isToken:!1,value:Hd(b)};if(On[A])return{isToken:!0,value:b};if(A.match(zd))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return{isToken:!1,value:b}});o.localize.preprocessor&&(f=o.localize.preprocessor(c,f));const d={firstWeekContainsDate:s,weekStartsOn:a,locale:o};return f.map(b=>{if(!b.isToken)return b.value;const A=b.value;(_d(A)||Pd(A))&&Ld(A,t,String(e));const x=On[A[0]];return x(c,A,o.localize,d)}).join("")}function Hd(e){const t=e.match(Id);return t?t[1].replace(Vd,"'"):e}const rt=e=>new Intl.NumberFormat("en",{style:"currency",currency:"INR"}).format(e),qd=()=>{const{isLoading:e,user:t,profileImage:r}=We();if(e)return i.jsx("div",{children:"Loading..."});if(!t)return i.jsx("div",{children:"User not found"});const n=r||null;return i.jsxs(i.Fragment,{children:[i.jsx(Te,{as:"h1",children:"User Profile"}),i.jsxs(Wd,{children:[n&&i.jsx(Yd,{src:n,alt:`${t.username}'s profile`}),i.jsxs(Jd,{children:[i.jsxs(cr,{children:[i.jsx("strong",{children:"Username:"})," ",t.username]}),i.jsxs(cr,{children:[i.jsx("strong",{children:"Email:"})," ",t.email]}),i.jsxs(cr,{children:[i.jsx("strong",{children:"Balance:"}),rt(t.balance)]})]})]})]})},Wd=y.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 400px;
  padding: 41px;
  /* border: 1px solid var(--color-grey-300); */
  /* border-radius: 8px; */
  box-shadow: var(--shadow-sm);
`,Yd=y.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`,Jd=y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`,cr=y.p`
  /* font-size: 18px; */
  margin: 5px 0;
  strong {
    margin-right: 10px;
  }
`,Xd=y.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
`,Gd=y.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${e=>e.color}-100);

  & svg {
    width: 2.8rem;
    height: auto;
    color: var(--color-${e=>e.color}-700);
  }
`,Kd=y.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`,Qd=y.p`
  font-size: 1.6rem;
  line-height: 1;
  font-weight: 500;
`;function bt({icon:e,title:t,value:r,color:n}){return i.jsxs(Xd,{children:[i.jsx(Gd,{color:n,children:e}),i.jsx(Kd,{children:t}),i.jsx(Qd,{children:r})]})}function Zd({summary:e}){const{user:t}=We();return i.jsxs(i.Fragment,{children:[i.jsx(bt,{title:"Current Balance",color:"blue",icon:i.jsx(Ps,{}),value:rt(t==null?void 0:t.balance)}),i.jsx(bt,{title:"Total Expenses",color:"grey",icon:i.jsx(Cl,{}),value:rt(e.totalTillToday)}),i.jsx(bt,{title:"Expenses this month",color:"indigo",icon:i.jsx(Fl,{}),value:rt(e.totalThisMonth)}),i.jsx(bt,{title:"Expenses This Year",color:"green",icon:i.jsx(Al,{}),value:rt(e.totalThisYear)})]})}const xt="http://localhost:8080/expenses";class Lr{static async addExpense(t){try{return(await V.post(xt,t)).data}catch(r){throw r.response?(console.error("Error response:",r.response.data),new Error(r.response.data.message)):(r.request?console.error("No response received:",r.request):console.error("Error setting up the request:",r.message),r)}}static async getAllExpenses(){try{return(await V.get(xt)).data}catch(t){throw console.error("Error fetching expenses:",t.message),t}}static async updateExpense(t,r){try{return(await V.put(`${xt}/${t}`,r)).data}catch(n){throw n.response?(console.error("Error response:",n.response.data),new Error(n.response.data.message)):(n.request?console.error("No response received:",n.request):console.error("Error setting up the request:",n.message),n)}}static async deleteExpense(t){try{return(await V.delete(`${xt}/${t}`)).data}catch(r){throw r.response?(console.error("Error response:",r.response.data),new Error(r.response.data.message)):(r.request?console.error("No response received:",r.request):console.error("Error setting up the request:",r.message),r)}}}const eu=[{name:"Jan",expenses:4e3},{name:"Feb",expenses:3e3},{name:"Mar",expenses:2e3},{name:"Apr",expenses:2780},{name:"May",expenses:1890},{name:"Jun",expenses:2390},{name:"Jul",expenses:3490},{name:"Aug",expenses:2e3},{name:"Sep",expenses:2780},{name:"Oct",expenses:1890},{name:"Nov",expenses:2390},{name:"Dec",expenses:3490}],tu=[{category:"Food",amount:300},{category:"Utilities",amount:150},{category:"Transportation",amount:200},{category:"Entertainment",amount:50}],ru=()=>{const[e,t]=v.useState([]),[r,n]=v.useState({totalTillToday:0,totalThisMonth:0,totalThisYear:0}),o=async()=>{try{const h=await Lr.getAllExpenses();t(h),console.log("fetchExpenses called!")}catch(h){console.error("Error fetching expenses:",h.message)}};return v.useEffect(()=>(o(),()=>{}),[]),v.useEffect(()=>{const h=new Date,w=e.reduce((T,F)=>new Date(F.date)<=h?T+parseFloat(F.amount):T,0),O=h.getMonth()+1,b=h.getFullYear(),A=e.reduce((T,F)=>{const k=new Date(F.date);return k.getMonth()+1===O&&k.getFullYear()===b?T+parseFloat(F.amount):T},0),x=e.reduce((T,F)=>new Date(F.date).getFullYear()===b?T+parseFloat(F.amount):T,0);n({totalTillToday:w.toFixed(2),totalThisMonth:A.toFixed(2),totalThisYear:x.toFixed(2)})},[e]),{expenses:e,fetchExpenses:o,summary:r,expensesByCategory:tu,lineChartData:eu,sortExpensesByDateLatest:()=>e.slice().sort((h,w)=>new Date(w.date)-new Date(h.date)),sortExpensesByDateOldest:()=>e.slice().sort((h,w)=>new Date(h.date)-new Date(w.date)),sortExpensesByAmountMax:()=>e.slice().sort((h,w)=>parseFloat(w.amount)-parseFloat(h.amount)),sortExpensesByAmountMin:()=>e.slice().sort((h,w)=>parseFloat(h.amount)-parseFloat(w.amount))}},nu=y.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`,ou=y.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`,su=y.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`,au=y.li`
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-sm);
  padding: 1.6rem;
  margin-bottom: 1.2rem;
  box-shadow: var(--shadow-sm);
  position: relative;
  cursor: pointer;

  &:hover {
    .tooltip {
      opacity: 1;
      visibility: visible;
    }
  }
`,iu=y.h3`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
`,cu=y.p`
  font-size: 1.4rem;
  line-height: 1.6;
`,lu=y.div`
  position: absolute;
  top: calc(10% + 8px);
  left: 70%;
  transform: translateX(-50%);
  background-color: var(--color-grey-100);
  color: var(--color-grey-700);
  padding: 0.8rem;
  border-radius: var(--border-radius-sm);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  display: block;

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent var(--color-grey-800) transparent;
  }
`;function du({expenses:e}){const[t,r]=v.useState(null),n=s=>{r(s)},o=()=>{r(null)};return i.jsxs(nu,{children:[i.jsx(Ut,{type:"horizontal",children:i.jsx(Te,{as:"h2",children:"Expenses"})}),e&&e.length>0?i.jsx(ou,{children:e.map(s=>i.jsxs(au,{onMouseEnter:()=>n(s),onMouseLeave:o,children:[i.jsx(iu,{children:s.category}),i.jsxs(cu,{children:[i.jsx("strong",{children:"Amount:"})," $",parseFloat(s.amount).toFixed(2),i.jsx("br",{}),i.jsx("strong",{children:"Date:"})," ",new Date(s.date).toLocaleDateString()]}),t&&t.expense_id===s.expense_id&&i.jsxs(lu,{className:"tooltip",children:[i.jsx("strong",{children:"Description:"})," ",s.description||"No description"]})]},s.expense_id))}):i.jsx(su,{children:"No expenses recorded today."})]})}const uu=y.div`
    width: 100%;
    height: 400px; /* Set a fixed height or adjust as needed */
    background-color: var(--color-grey-0);
    padding: 3.2rem 3.2rem 1.6rem 1.6rem;
    grid-column: 1 / span 4;
    border-radius: var(--border-radius-md);
    overflow-x: auto;
`,fu=({expenses:e})=>{const r=(n=>{const o={};return n.forEach(a=>{const c=$d(new Date(a.date),"dd-MMM");o[c]||(o[c]=0),o[c]+=parseFloat(a.amount)}),Object.keys(o).map(a=>({name:a,expenses:o[a]}))})(e);return i.jsx(uu,{children:i.jsx(ts,{width:"100%",height:"100%",children:i.jsxs(rs,{data:r,children:[i.jsx(ns,{stroke:"var(--color-grey-300)"}),i.jsx(os,{dataKey:"name"}),i.jsx(ss,{}),i.jsx(_n,{}),i.jsx(Ln,{}),i.jsx(as,{type:"monotone",dataKey:"expenses",stroke:"var(--color-brand-700)"})]})})})};y.div`
  /* width: 100%; */
  display: flex;
  /* flex-grow: 1; */
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;const hu=y.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: var(--color-grey-0);
    padding: 0 0 1.6rem 0;
    grid-column: 3 / span 2;
    border-radius: var(--border-radius-md);
`,mu=["#0088FE","#00C49F","#FFBB28","#FF8042","#AF19FF","#FF1967","#FF6B19","#9CFF19","#1971FF","#FF19E6","#19FF71","#19FFBE","#FF1971","#19FF9E","#7119FF","#FF7119"],pu=({expenses:e})=>{const r=(()=>{const n={},o={};return e.forEach(a=>{const{category:c,amount:f}=a;n[c]?n[c]+=parseFloat(f):(n[c]=parseFloat(f),o[c]=mu[Object.keys(n).indexOf(c)])}),Object.keys(n).map(a=>({name:a,value:n[a],color:o[a]}))})();return i.jsx(hu,{children:i.jsxs(is,{width:400,height:400,children:[i.jsx(cs,{dataKey:"value",data:r,cx:200,cy:200,outerRadius:80,fill:"var(--color-brand-700)",label:!0,children:r.map((n,o)=>i.jsx(ls,{fill:n.color},`cell-${o}`))}),i.jsx(_n,{}),i.jsx(Ln,{})]})})},Nr=({isOpen:e,onClose:t,onSubmit:r})=>{const[n,o]=v.useState("daily"),[s,a]=v.useState(""),[c,f]=v.useState(""),[d,u]=v.useState(""),[h,w]=v.useState(""),[O,b]=v.useState("monthly"),[A,x]=v.useState(""),T=async k=>{k.preventDefault();const L={expenseType:n,amount:s,category:c,description:d,date:h,recurrence:O,recurrenceEndDate:A};try{await Lr.addExpense(L),r(L),F(),t()}catch(N){console.error("Error adding expense:",N)}},F=()=>{o("daily"),a(""),f(""),u(""),w(""),b("monthly"),x("")};return i.jsx(kr,{isOpen:e,onClose:t,children:i.jsxs(it,{onSubmit:T,children:[i.jsx(Me,{id:"daily",value:"daily",checked:n==="daily",onChange:()=>o("daily"),label:"Daily Expense"}),i.jsx(Me,{id:"oneTime",value:"oneTime",checked:n==="oneTime",onChange:()=>o("oneTime"),label:"One-time Expense"}),i.jsx(Me,{id:"recurring",value:"recurring",checked:n==="recurring",onChange:()=>o("recurring"),label:"Recurring Expense"}),i.jsxs(i.Fragment,{children:[i.jsx(ne,{type:"number",value:s,onChange:k=>a(k.target.value),placeholder:"Amount",required:!0}),i.jsx(ne,{type:"text",value:c,onChange:k=>f(k.target.value),placeholder:"Category",required:!0}),i.jsx(ka,{value:d,onChange:k=>u(k.target.value),placeholder:"Description"}),i.jsx(ne,{type:"date",value:h,onChange:k=>w(k.target.value),placeholder:"Expense Date"})]}),n==="recurring"&&i.jsxs(i.Fragment,{children:[i.jsx(Me,{value:"monthly",checked:O==="monthly",onChange:()=>b("monthly"),label:"Monthly"}),i.jsx(Me,{value:"yearly",checked:O==="yearly",onChange:()=>b("yearly"),label:"Yearly"}),i.jsx(da,{children:"Recurrence End Date"}),i.jsx(ne,{type:"date",value:A,onChange:k=>x(k.target.value),placeholder:"Recurrence End Date"})]}),i.jsx(pe,{type:"submit",children:"Add Expense"})]})})};function gu(e){return Y({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"},child:[]},{tag:"path",attr:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"},child:[]}]})(e)}const yu=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 1.6rem;
  position: relative; 
`,bu=y.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--color-brand-600);
  color: var(--color-grey-100);
  border: none;
  padding: 1.2rem;
  font-size: 2rem;
  font-weight: 500;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);

  &:hover {
    background-color: var(--color-brand-700);
  }

  @media (max-width: 768px) {
    right: 1rem;
    bottom: 1rem;
  }
`;function xu(){const[e,t]=v.useState(!1),{expenses:r,fetchExpenses:n,summary:o,sortExpensesByDateLatest:s}=ru(),a=()=>{t(!0)},c=()=>{t(!1)},f=async()=>{try{t(!1),n()}catch(d){console.error("Error adding expense:",d)}};return i.jsxs(i.Fragment,{children:[i.jsxs(yu,{children:[i.jsx(Zd,{summary:o}),i.jsx(du,{expenses:s()}),i.jsx(pu,{expenses:r}),i.jsx(fu,{expenses:s()})]}),i.jsx(bu,{onClick:a,children:i.jsx(gu,{})}),i.jsx(Nr,{isOpen:e,onClose:c,onSubmit:f})]})}function vu(){return i.jsxs(i.Fragment,{children:[i.jsx(Ut,{type:"horizontal",children:i.jsx(Te,{as:"h1",children:"Dashboard"})}),i.jsx(xu,{})]})}const Rn=y.div`
    font-weight: 500;
    margin-top: 1rem;
    &:first-letter {
        display: inline-block;
        margin-right: 4px;
        font-size: 1.8rem;
    }
`;function wu({onAddFriend:e}){const[t,r]=v.useState(""),[n,o]=v.useState(""),[s,a]=v.useState(null);function c(d){if(d.preventDefault(),!t||!s)return;const h={id:crypto.randomUUID(),name:t,image:URL.createObjectURL(s),balance:0};e(h),r(""),o(""),a(null)}function f(d){const u=d.target.files[0];a(u)}return i.jsxs(it,{className:"form-add-friend",onSubmit:c,children:[i.jsx(Rn,{children:"👫 Friend name"}),i.jsx(ne,{type:"text",value:t,onChange:d=>r(d.target.value)}),i.jsx(Rn,{children:"🌄 Upload Image"}),i.jsx(Sr,{onChange:f}),i.jsx("span",{children:n}),i.jsx(pe,{size:"sm",children:"Add"})]})}function Eu(e){return Y({attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(e)}const ju=y.li`
  display: grid;
  grid-template-columns: 4.8rem 1fr auto auto;
  align-items: center;
  column-gap: 1.6rem;
  padding: 1.2rem;
  border-radius: 7px;
  transition: 0.5s;

  &.selected,
  &:hover {
    background-color: var(--color-brand-50);
  }
`,Su=y.img`
  border-radius: 50%;
  width: 100%;
  grid-row: span 2;
`,ku=y.h3`
  grid-row: 1;
  grid-column: 2;
`,lr=y.p`
  grid-row: 2;
  grid-column: 2;
`;y(pe)`
  grid-row: span 2;
  grid-column: 3;
`;y(pe)`
  grid-row: span 2;
  grid-column: 4;
`;const Fu=({friend:e,onSelection:t,onRemove:r,selectedFriend:n})=>{const o=(n==null?void 0:n.id)===e.id;return i.jsxs(ju,{className:o?"selected":"",onClick:()=>t(e),children:[i.jsx(Su,{src:e.image,alt:e.name}),i.jsx(ku,{children:e.name}),e.balance<0&&i.jsxs(lr,{className:"red",children:["You owe ",e.name," ",Math.abs(e.balance),"₹"]}),e.balance>0&&i.jsxs(lr,{className:"green",children:[e.name," owes you ",Math.abs(e.balance),"₹"]}),e.balance===0&&i.jsxs(lr,{children:["You and ",e.name," are even"]}),i.jsx(Ae,{size:"sm",color:"red",onClick:()=>r(e.id),children:i.jsx(Eu,{})})]})},Cu=y.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  /* border: 1px solid var(--color-silver-100); */
`,Ou=({friends:e,onSelection:t,selectedFriend:r})=>{const[n,o]=v.useState(e);v.useEffect(()=>{o(e)},[e]);const s=a=>{o(c=>c.filter(f=>f.id!==a))};return i.jsx(Cu,{children:n.map(a=>i.jsx(Fu,{friend:a,selectedFriend:r,onSelection:t,onRemove:s},a.id))})},Au=y.form`
  width: 300px;
  font-size: 1.6rem;
  display: grid;
  align-items: center;
  /* gap: 1rem; */
  background-color: var(--color-lightest);
  border-radius: 7px;
  Button{
    margin-top: 2rem;
  }
`,Tu=y.h2`
  grid-column: 1 / -1;
  font-size: 2.2rem;
  text-transform: capitalize;
  letter-spacing: -0.5px;
  margin-bottom: 1.6rem;
`,vt=y.div`
    font-weight: 500;
    margin-top: 1rem;
    &:first-letter {
        display: inline-block;
        margin-right: 4px;
        font-size: 1.8rem;
    }
`,Du=({selectedFriend:e,onSplitBill:t})=>{const[r,n]=v.useState(""),[o,s]=v.useState(""),a=r?r-o:"",[c,f]=v.useState("user"),d=u=>{u.preventDefault(),!(!r||!o)&&t(c==="user"?a:-o)};return i.jsxs(Au,{className:"form-split-bill",onSubmit:d,children:[i.jsxs(Tu,{children:["Split a bill with ",e.name]}),i.jsx(vt,{children:"💰 Bill value"}),i.jsx(ne,{type:"text",value:r,onChange:u=>n(Number(u.target.value))}),i.jsx(vt,{children:"🧍‍♀️ Your expense"}),i.jsx(ne,{type:"text",value:o,onChange:u=>s(Number(u.target.value)>r?o:Number(u.target.value))}),i.jsxs(vt,{children:["👫 ",e.name,"'s expense"]}),i.jsx(ne,{type:"text",disabled:!0,value:a}),i.jsx(vt,{children:"🤑 Who is paying the bill"}),i.jsx(ya,{options:[{value:"user",label:"You"},{value:"friend",label:`${e.name}`}],value:c,onChange:u=>f(u.target.value)}),i.jsx(pe,{children:"Split bill"})]})},Ru=[{id:118836,name:"Clark",image:"/faces/christian-buehner-DItYlc26zVI-unsplash.jpeg",balance:-7},{id:933372,name:"Sarah",image:"/faces/camp.jpg",balance:20},{id:499476,name:"Anthony",image:"/faces/christian.jpg",balance:0}],Mu=y.div`
  min-height: 60vh;
  display: grid;
  /* place-items: center; */
  grid-template-columns: 50rem 30rem;
  column-gap: 4rem;
  align-items: start;
`,Pu=y.div`
  width: fit-content;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  
  li {
    display: grid;
    grid-template-columns: 4.8rem 1fr auto;
    align-items: center;
    column-gap: 1.6rem;
    padding: 1.2rem;
    border-radius: 7px;
    transition: 0.5s;

    &.selected,
    &:hover {
      background-color: var(--color-lightest);
    }
  }

  img {
    border-radius: 50%;
    width: 100%;
    grid-row: span 2;
  }

  h3 {
    grid-row: 1;
    grid-column: 2;
  }

  p {
    grid-row: 2;
    grid-column: 2;
  }

  .button {
    grid-row: span 2;
    grid-column: 3;
  }

  > .button {
    float: right;
    margin-right: 1.2rem;
  }

  .green {
    color: #66a80f;
  }

  .red {
    color: #e03131;
  }
`,_u=y.h2`
  grid-column: 1 / -1;
  font-size: 2.2rem;
  text-transform: capitalize;
  letter-spacing: -0.5px;
  margin-bottom: 1.6rem;
`,Lu=()=>{const[e,t]=v.useState(Ru),[r,n]=v.useState(!1),[o,s]=v.useState(null),a=()=>{n(u=>!u)},c=u=>{t(h=>[...h,u]),n(!1)},f=u=>{s(h=>(h==null?void 0:h.id)===u.id?null:u),n(!1)},d=u=>{t(h=>h.map(w=>w.id===o.id?{...w,balance:w.balance+u}:w)),s(null)};return i.jsxs(i.Fragment,{children:[i.jsx(Ut,{type:"horizontal",children:i.jsx(Te,{as:"h1",children:"Split Bills"})}),i.jsxs(Mu,{children:[i.jsxs(Pu,{children:[i.jsx(_u,{children:"Friends"}),i.jsx(Ou,{friends:e,selectedFriend:o,onSelection:f}),r&&i.jsx(wu,{onAddFriend:c}),i.jsx(pe,{variation:"text",onClick:a,children:r?"Close":"Add friend"})]}),o&&i.jsx(Du,{selectedFriend:o,onSplitBill:d},o.id)]})]})},Nu=y.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 8px;
`,Uo=({expense:e})=>i.jsxs(Nu,{className:"expense-item",children:[i.jsxs("p",{children:["Amount: ",e.amount]}),i.jsxs("p",{children:["Category: ",e.category]}),i.jsxs("p",{children:["Description: ",e.description]}),i.jsxs("p",{children:["Date: ",e.date]})]});var Z=[];for(var dr=0;dr<256;++dr)Z.push((dr+256).toString(16).slice(1));function Bu(e,t=0){return(Z[e[t+0]]+Z[e[t+1]]+Z[e[t+2]]+Z[e[t+3]]+"-"+Z[e[t+4]]+Z[e[t+5]]+"-"+Z[e[t+6]]+Z[e[t+7]]+"-"+Z[e[t+8]]+Z[e[t+9]]+"-"+Z[e[t+10]]+Z[e[t+11]]+Z[e[t+12]]+Z[e[t+13]]+Z[e[t+14]]+Z[e[t+15]]).toLowerCase()}var wt,Uu=new Uint8Array(16);function Iu(){if(!wt&&(wt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!wt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return wt(Uu)}var Vu=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Mn={randomUUID:Vu};function Pn(e,t,r){if(Mn.randomUUID&&!e)return Mn.randomUUID();e=e||{};var n=e.random||(e.rng||Iu)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,Bu(n)}const zu=({expenses:e})=>{const t=new Date,r=t.getMonth()+1,n=t.getFullYear(),o=e==null?void 0:e.filter(a=>{const c=new Date(a.date);return c.getMonth()+1===r&&c.getFullYear()===n}),s=e==null?void 0:e.filter(a=>new Date(a.date).getFullYear()===n);return e==null||e.reduce((a,c)=>new Date(c.date)<=t?a+parseFloat(c.amount):a,0).toFixed(2),o==null||o.reduce((a,c)=>a+parseFloat(c.amount),0).toFixed(2),s==null||s.reduce((a,c)=>a+parseFloat(c.amount),0).toFixed(2),i.jsx("div",{})},$u=y.div`
  margin: 10px;
`,Hu=()=>{const[e,t]=v.useState(!1),[r,n]=v.useState([]);v.useEffect(()=>{(async()=>{try{const d=await Lr.getAllExpenses();n(d)}catch(d){console.error("Error fetching expenses:",d.message)}})()},[]);const o=()=>{t(!0)},s=()=>{t(!1)},a=(f,d,u,h,w,O)=>{let b=new Date(h);for(;b<=O;)n(A=>[...A,{id:Pn(),amount:f,category:d,description:u,date:b.toISOString().split("T")[0],expenseType:"recurring"}]),w==="monthly"?b.setMonth(b.getMonth()+1):w==="yearly"&&b.setFullYear(b.getFullYear()+1)},c=f=>{if(n(d=>[...d,{id:Pn(),...f}]),f.expenseType==="recurring"){const{amount:d,category:u,description:h,date:w,recurrenceEndDate:O,recurrence:b}=f;a(d,u,h,w,b,O)}s()};return i.jsxs("div",{children:[i.jsxs(Ae,{onClick:o,children:[i.jsx(Er,{})," Add Expense"]}),i.jsx(kr,{isOpen:e,onClose:s,children:i.jsx(Nr,{onSubmit:c})}),i.jsxs($u,{children:[console.log(r),r==null?void 0:r.map(f=>i.jsx(Uo,{expense:f},f.id))]}),i.jsx(zu,{expenses:r})]})},qu=()=>i.jsx(Cs,{children:i.jsxs(Ns,{children:[i.jsx(Un,{}),i.jsx(Qo,{children:i.jsxs(Zo,{children:[i.jsxs(ie,{element:i.jsx(Os,{children:i.jsx(ia,{})}),children:[i.jsx(ie,{index:!0,element:i.jsx(es,{replace:!0,to:"Dashboard"})}),i.jsx(ie,{path:"/dashboard",element:i.jsx(vu,{})}),i.jsx(ie,{path:"/signout",element:i.jsx(Ts,{setIsLoggedIn:!0})}),i.jsx(ie,{path:"/expenses/add",element:i.jsx(Nr,{})}),i.jsx(ie,{path:"/expenses/:id",element:i.jsx(Uo,{})}),i.jsx(ie,{path:"/expenses",element:i.jsx(Hu,{})}),i.jsx(ie,{path:"/admin",element:i.jsx(Bl,{})}),i.jsx(ie,{path:"/account",element:i.jsx(qd,{})}),i.jsx(ie,{path:"/split/expense",element:i.jsx(Lu,{})})]}),i.jsx(ie,{path:"/signup",element:i.jsx(ml,{})}),i.jsx(ie,{path:"/signin",element:i.jsx(kl,{})}),i.jsx(ie,{path:"*",element:i.jsx(Oa,{})})]})}),i.jsx(bi,{position:"top-center",gutter:11,containerStyle:{margin:"7px"},toastOptions:{success:{duration:3e3},error:{duration:5e3}},style:{fontSize:"14px",maxWidth:"500px",padding:"16px 24px",backgroundColor:"var(--color-grey-0)",color:"var(--color-grey-700)"}})]})});ur.createRoot(document.getElementById("root")).render(i.jsx(z.StrictMode,{children:i.jsx(ys,{FallbackComponent:Ss,onReset:()=>window.location.replace("/"),children:i.jsx(qu,{})})}));
//# sourceMappingURL=index-CrrmhI-h.js.map
