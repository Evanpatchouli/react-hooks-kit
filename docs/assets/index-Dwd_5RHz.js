const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BzCQl8fX.js","assets/index-CzeDniON.js","assets/index-C6NV9D6F.css"])))=>i.map(i=>d[i]);
import{r as d,c as Ha,e as _s,_ as ae,b as R,d as m,f as oe,u as qa,h as Ar,g as Qn,i as Ka,k as Ga,m as Qa,l as ue,n as ge,o as Ja,p as Nr,C as Ya,q as F,s as Xa,t as je,v as hr,w as Nt,x as mr,y as Za,z as wo,A as fr,D as Xo,E as Ot,F as St,G as gr,H as ve,I as fe,T as Ws,J as el,K as Yt,L as q,M as En,N as Ln,P as Bn,O as Ko,Q as Go,R as tl,S as dt,U as _o,V as ol,W as Jt,X as Ge,Y as jn,Z as Dn,$ as nl,a0 as Or,a1 as rl,a2 as vr,a3 as Mn,a4 as il,a5 as sl,a6 as Vr,a7 as Tn,a8 as Hs,a9 as qs,aa as ir,ab as al,ac as un,ad as ll,ae as cl,af as dl,ag as Ks,ah as Uo,a as o,ai as ul,aj as Gs,ak as pl,al as Qs,am as Js,an as hl,j as s,ao as ml,ap as b,aq as fl,ar as gl,as as uo,at as ke,B as A,au as vl,av as bl,aw as yl,ax as pe,ay as wl,az as Zo,aA as en,aB as Xt,aC as br,aD as tn,aE as yr,aF as wr,aG as zn,aH as Un,aI as Lr,aJ as Ht,aK as xl,aL as $l,aM as Ys,aN as xr,aO as Xs,aP as Cl,aQ as Zs,aR as Pn,aS as kl,aT as pn,aU as $t,aV as hn,aW as Sl}from"./index-CzeDniON.js";function Tl(e,t){return()=>null}function yo(e,t){var n,r;return d.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function Rl(e,t){return()=>null}function El(e,t,n,r,i){return null}let go;function ea(){if(go)return go;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),go="reverse",e.scrollLeft>0?go="default":(e.scrollLeft=1,e.scrollLeft===0&&(go="negative")),document.body.removeChild(e),go}function Ml(e,t){const n=e.scrollLeft;if(t!=="rtl")return n;switch(ea()){case"negative":return e.scrollWidth-e.clientWidth+n;case"reverse":return e.scrollWidth-e.clientWidth-n;default:return n}}const Pl={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Il=Ha(),Al=["component","direction","spacing","divider","children","className","useFlexGap"],Nl=Ja(),Ol=Il("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function Vl(e){return qa({props:e,name:"MuiStack",defaultTheme:Nl})}function Ll(e,t){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((r,i,a)=>(r.push(i),a<n.length-1&&r.push(d.cloneElement(t,{key:`separator-${a}`})),r),[])}const Bl=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],jl=({ownerState:e,theme:t})=>{let n=m({display:"flex",flexDirection:"column"},Ar({theme:t},Qn({values:e.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=Ka(t),i=Object.keys(t.breakpoints.values).reduce((c,p)=>((typeof e.spacing=="object"&&e.spacing[p]!=null||typeof e.direction=="object"&&e.direction[p]!=null)&&(c[p]=!0),c),{}),a=Qn({values:e.direction,base:i}),l=Qn({values:e.spacing,base:i});typeof a=="object"&&Object.keys(a).forEach((c,p,h)=>{if(!a[c]){const v=p>0?a[h[p-1]]:"column";a[c]=v}}),n=Ga(n,Ar({theme:t},l,(c,p)=>e.useFlexGap?{gap:Nr(r,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Bl(p?a[p]:e.direction)}`]:Nr(r,c)}}))}return n=Qa(t.breakpoints,n),n};function Dl(e={}){const{createStyledComponent:t=Ol,useThemeProps:n=Vl,componentName:r="MuiStack"}=e,i=()=>ue({root:["root"]},c=>ge(r,c),{}),a=t(jl);return d.forwardRef(function(c,p){const h=n(c),g=_s(h),{component:v="div",direction:k="column",spacing:x=0,divider:y,children:w,className:T,useFlexGap:E=!1}=g,S=ae(g,Al),$={direction:k,spacing:x,useFlexGap:E},M=i();return R.jsx(a,m({as:v,ownerState:$,ref:p,className:oe(M.root,T)},S,{children:y?Ll(w,y):w}))})}const zl={configure:e=>{Ya.configure(e)}},Ul=Object.freeze(Object.defineProperty({__proto__:null,capitalize:F,createChainedFunction:Xa,createSvgIcon:je,debounce:hr,deprecatedPropType:Tl,isMuiElement:yo,ownerDocument:Nt,ownerWindow:mr,requirePropFactory:Rl,setRef:Za,unstable_ClassNameGenerator:zl,unstable_useEnhancedEffect:wo,unstable_useId:fr,unsupportedProp:El,useControlled:Xo,useEventCallback:Ot,useForkRef:St,useIsFocusVisible:gr},Symbol.toStringTag,{value:"Module"}));function Fl(e){return ge("MuiCollapse",e)}ve("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const _l=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Wl=e=>{const{orientation:t,classes:n}=e,r={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return ue(r,Fl,n)},Hl=q("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.state==="entered"&&t.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>m({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&m({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),ql=q("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>m({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Kl=q("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>m({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),ct=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiCollapse"}),{addEndListener:i,children:a,className:l,collapsedSize:u="0px",component:c,easing:p,in:h,onEnter:g,onEntered:v,onEntering:k,onExit:x,onExited:y,onExiting:w,orientation:T="vertical",style:E,timeout:S=el.standard,TransitionComponent:$=Ws}=r,M=ae(r,_l),C=m({},r,{orientation:T,collapsedSize:u}),I=Wl(C),j=Yt(),O=d.useRef(),L=d.useRef(null),z=d.useRef(),ne=typeof u=="number"?`${u}px`:u,W=T==="horizontal",B=W?"width":"height";d.useEffect(()=>()=>{clearTimeout(O.current)},[]);const X=d.useRef(null),U=St(n,X),ee=V=>K=>{if(V){const D=X.current;K===void 0?V(D):V(D,K)}},le=()=>L.current?L.current[W?"clientWidth":"clientHeight"]:0,Q=ee((V,K)=>{L.current&&W&&(L.current.style.position="absolute"),V.style[B]=ne,g&&g(V,K)}),Ee=ee((V,K)=>{const D=le();L.current&&W&&(L.current.style.position="");const{duration:ie,easing:be}=En({style:E,timeout:S,easing:p},{mode:"enter"});if(S==="auto"){const ce=j.transitions.getAutoHeightDuration(D);V.style.transitionDuration=`${ce}ms`,z.current=ce}else V.style.transitionDuration=typeof ie=="string"?ie:`${ie}ms`;V.style[B]=`${D}px`,V.style.transitionTimingFunction=be,k&&k(V,K)}),Be=ee((V,K)=>{V.style[B]="auto",v&&v(V,K)}),qe=ee(V=>{V.style[B]=`${le()}px`,x&&x(V)}),Se=ee(y),Ie=ee(V=>{const K=le(),{duration:D,easing:ie}=En({style:E,timeout:S,easing:p},{mode:"exit"});if(S==="auto"){const be=j.transitions.getAutoHeightDuration(K);V.style.transitionDuration=`${be}ms`,z.current=be}else V.style.transitionDuration=typeof D=="string"?D:`${D}ms`;V.style[B]=ne,V.style.transitionTimingFunction=ie,w&&w(V)}),H=V=>{S==="auto"&&(O.current=setTimeout(V,z.current||0)),i&&i(X.current,V)};return R.jsx($,m({in:h,onEnter:Q,onEntered:Be,onEntering:Ee,onExit:qe,onExited:Se,onExiting:Ie,addEndListener:H,nodeRef:X,timeout:S==="auto"?null:S},M,{children:(V,K)=>R.jsx(Hl,m({as:c,className:oe(I.root,l,{entered:I.entered,exited:!h&&ne==="0px"&&I.hidden}[V]),style:m({[W?"minWidth":"minHeight"]:ne},E),ownerState:m({},C,{state:V}),ref:U},K,{children:R.jsx(ql,{ownerState:m({},C,{state:V}),className:I.wrapper,ref:L,children:R.jsx(Kl,{ownerState:m({},C,{state:V}),className:I.wrapperInner,children:a})})}))}))});ct.muiSupportAuto=!0;function Gl(e){return ge("MuiAlert",e)}const Br=ve("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Ql=je(R.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Jl=je(R.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Yl=je(R.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Xl=je(R.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Zl=je(R.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ec=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],tc=e=>{const{variant:t,color:n,severity:r,classes:i}=e,a={root:["root",`${t}${F(n||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return ue(a,Gl,i)},oc=q(Bn,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${F(n.color||n.severity)}`]]}})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?Ko:Go,r=e.palette.mode==="light"?Go:Ko,i=t.color||t.severity;return m({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},i&&t.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:n(e.palette[i].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${i}StandardBg`]:r(e.palette[i].light,.9),[`& .${Br.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:e.palette[i].main}},i&&t.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:n(e.palette[i].light,.6),border:`1px solid ${(e.vars||e).palette[i].light}`,[`& .${Br.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:e.palette[i].main}},i&&t.variant==="filled"&&m({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${i}FilledColor`],backgroundColor:e.vars.palette.Alert[`${i}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[i].dark:e.palette[i].main,color:e.palette.getContrastText(e.palette[i].main)}))}),nc=q("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),rc=q("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),jr=q("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Dr={success:R.jsx(Ql,{fontSize:"inherit"}),warning:R.jsx(Jl,{fontSize:"inherit"}),error:R.jsx(Yl,{fontSize:"inherit"}),info:R.jsx(Xl,{fontSize:"inherit"})},ic=d.forwardRef(function(t,n){var r,i,a,l,u,c;const p=fe({props:t,name:"MuiAlert"}),{action:h,children:g,className:v,closeText:k="Close",color:x,components:y={},componentsProps:w={},icon:T,iconMapping:E=Dr,onClose:S,role:$="alert",severity:M="success",slotProps:C={},slots:I={},variant:j="standard"}=p,O=ae(p,ec),L=m({},p,{color:x,severity:M,variant:j}),z=tc(L),ne=(r=(i=I.closeButton)!=null?i:y.CloseButton)!=null?r:Ln,W=(a=(l=I.closeIcon)!=null?l:y.CloseIcon)!=null?a:Zl,B=(u=C.closeButton)!=null?u:w.closeButton,X=(c=C.closeIcon)!=null?c:w.closeIcon;return R.jsxs(oc,m({role:$,elevation:0,ownerState:L,className:oe(z.root,v),ref:n},O,{children:[T!==!1?R.jsx(nc,{ownerState:L,className:z.icon,children:T||E[M]||Dr[M]}):null,R.jsx(rc,{ownerState:L,className:z.message,children:g}),h!=null?R.jsx(jr,{ownerState:L,className:z.action,children:h}):null,h==null&&S?R.jsx(jr,{ownerState:L,className:z.action,children:R.jsx(ne,m({size:"small","aria-label":k,title:k,color:"inherit",onClick:S},B,{children:R.jsx(W,m({fontSize:"small"},X))}))}):null]}))});function sc(e){return ge("MuiTypography",e)}ve("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const ac=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],lc=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:i,variant:a,classes:l}=e,u={root:["root",a,e.align!=="inherit"&&`align${F(t)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return ue(u,sc,l)},cc=q("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${F(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>m({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),zr={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},dc={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},uc=e=>dc[e]||e,vt=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTypography"}),i=uc(r.color),a=_s(m({},r,{color:i})),{align:l="inherit",className:u,component:c,gutterBottom:p=!1,noWrap:h=!1,paragraph:g=!1,variant:v="body1",variantMapping:k=zr}=a,x=ae(a,ac),y=m({},a,{align:l,color:i,className:u,component:c,gutterBottom:p,noWrap:h,paragraph:g,variant:v,variantMapping:k}),w=c||(g?"p":k[v]||zr[v])||"span",T=lc(y);return R.jsx(cc,m({as:w,ref:n,ownerState:y,className:oe(T.root,u)},x))});function pc(e,t,n=(r,i)=>r===i){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}const hc={disableDefaultClasses:!1},mc=d.createContext(hc);function fc(e){const{disableDefaultClasses:t}=d.useContext(mc);return n=>t?"":e(n)}function Ur(e){return e.substring(2).toLowerCase()}function gc(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function vc(e){const{children:t,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:i,touchEvent:a="onTouchEnd"}=e,l=d.useRef(!1),u=d.useRef(null),c=d.useRef(!1),p=d.useRef(!1);d.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const h=St(t.ref,u),g=Ot(x=>{const y=p.current;p.current=!1;const w=Nt(u.current);if(!c.current||!u.current||"clientX"in x&&gc(x,w))return;if(l.current){l.current=!1;return}let T;x.composedPath?T=x.composedPath().indexOf(u.current)>-1:T=!w.documentElement.contains(x.target)||u.current.contains(x.target),!T&&(n||!y)&&i(x)}),v=x=>y=>{p.current=!0;const w=t.props[x];w&&w(y)},k={ref:h};return a!==!1&&(k[a]=v(a)),d.useEffect(()=>{if(a!==!1){const x=Ur(a),y=Nt(u.current),w=()=>{l.current=!0};return y.addEventListener(x,g),y.addEventListener("touchmove",w),()=>{y.removeEventListener(x,g),y.removeEventListener("touchmove",w)}}},[g,a]),r!==!1&&(k[r]=v(r)),d.useEffect(()=>{if(r!==!1){const x=Ur(r),y=Nt(u.current);return y.addEventListener(x,g),()=>{y.removeEventListener(x,g)}}},[g,r]),R.jsx(d.Fragment,{children:d.cloneElement(t,k)})}var ut="top",Tt="bottom",Rt="right",pt="left",$r="auto",on=[ut,Tt,Rt,pt],xo="start",Qo="end",bc="clippingParents",ta="viewport",Io="popper",yc="reference",Fr=on.reduce(function(e,t){return e.concat([t+"-"+xo,t+"-"+Qo])},[]),oa=[].concat(on,[$r]).reduce(function(e,t){return e.concat([t,t+"-"+xo,t+"-"+Qo])},[]),wc="beforeRead",xc="read",$c="afterRead",Cc="beforeMain",kc="main",Sc="afterMain",Tc="beforeWrite",Rc="write",Ec="afterWrite",Mc=[wc,xc,$c,Cc,kc,Sc,Tc,Rc,Ec];function Dt(e){return e?(e.nodeName||"").toLowerCase():null}function bt(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function co(e){var t=bt(e).Element;return e instanceof t||e instanceof Element}function kt(e){var t=bt(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Cr(e){if(typeof ShadowRoot>"u")return!1;var t=bt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Pc(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},i=t.attributes[n]||{},a=t.elements[n];!kt(a)||!Dt(a)||(Object.assign(a.style,r),Object.keys(i).forEach(function(l){var u=i[l];u===!1?a.removeAttribute(l):a.setAttribute(l,u===!0?"":u)}))})}function Ic(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var i=t.elements[r],a=t.attributes[r]||{},l=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),u=l.reduce(function(c,p){return c[p]="",c},{});!kt(i)||!Dt(i)||(Object.assign(i.style,u),Object.keys(a).forEach(function(c){i.removeAttribute(c)}))})}}const Ac={name:"applyStyles",enabled:!0,phase:"write",fn:Pc,effect:Ic,requires:["computeStyles"]};function jt(e){return e.split("-")[0]}var lo=Math.max,In=Math.min,$o=Math.round;function sr(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function na(){return!/^((?!chrome|android).)*safari/i.test(sr())}function Co(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&kt(e)&&(i=e.offsetWidth>0&&$o(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&$o(r.height)/e.offsetHeight||1);var l=co(e)?bt(e):window,u=l.visualViewport,c=!na()&&n,p=(r.left+(c&&u?u.offsetLeft:0))/i,h=(r.top+(c&&u?u.offsetTop:0))/a,g=r.width/i,v=r.height/a;return{width:g,height:v,top:h,right:p+g,bottom:h+v,left:p,x:p,y:h}}function kr(e){var t=Co(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function ra(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Cr(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function qt(e){return bt(e).getComputedStyle(e)}function Nc(e){return["table","td","th"].indexOf(Dt(e))>=0}function Zt(e){return((co(e)?e.ownerDocument:e.document)||window.document).documentElement}function Fn(e){return Dt(e)==="html"?e:e.assignedSlot||e.parentNode||(Cr(e)?e.host:null)||Zt(e)}function _r(e){return!kt(e)||qt(e).position==="fixed"?null:e.offsetParent}function Oc(e){var t=/firefox/i.test(sr()),n=/Trident/i.test(sr());if(n&&kt(e)){var r=qt(e);if(r.position==="fixed")return null}var i=Fn(e);for(Cr(i)&&(i=i.host);kt(i)&&["html","body"].indexOf(Dt(i))<0;){var a=qt(i);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return i;i=i.parentNode}return null}function nn(e){for(var t=bt(e),n=_r(e);n&&Nc(n)&&qt(n).position==="static";)n=_r(n);return n&&(Dt(n)==="html"||Dt(n)==="body"&&qt(n).position==="static")?t:n||Oc(e)||t}function Sr(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Wo(e,t,n){return lo(e,In(t,n))}function Vc(e,t,n){var r=Wo(e,t,n);return r>n?n:r}function ia(){return{top:0,right:0,bottom:0,left:0}}function sa(e){return Object.assign({},ia(),e)}function aa(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Lc=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,sa(typeof t!="number"?t:aa(t,on))};function Bc(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,l=n.modifiersData.popperOffsets,u=jt(n.placement),c=Sr(u),p=[pt,Rt].indexOf(u)>=0,h=p?"height":"width";if(!(!a||!l)){var g=Lc(i.padding,n),v=kr(a),k=c==="y"?ut:pt,x=c==="y"?Tt:Rt,y=n.rects.reference[h]+n.rects.reference[c]-l[c]-n.rects.popper[h],w=l[c]-n.rects.reference[c],T=nn(a),E=T?c==="y"?T.clientHeight||0:T.clientWidth||0:0,S=y/2-w/2,$=g[k],M=E-v[h]-g[x],C=E/2-v[h]/2+S,I=Wo($,C,M),j=c;n.modifiersData[r]=(t={},t[j]=I,t.centerOffset=I-C,t)}}function jc(e){var t=e.state,n=e.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||ra(t.elements.popper,i)&&(t.elements.arrow=i))}const Dc={name:"arrow",enabled:!0,phase:"main",fn:Bc,effect:jc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ko(e){return e.split("-")[1]}var zc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Uc(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:$o(n*i)/i||0,y:$o(r*i)/i||0}}function Wr(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,l=e.offsets,u=e.position,c=e.gpuAcceleration,p=e.adaptive,h=e.roundOffsets,g=e.isFixed,v=l.x,k=v===void 0?0:v,x=l.y,y=x===void 0?0:x,w=typeof h=="function"?h({x:k,y}):{x:k,y};k=w.x,y=w.y;var T=l.hasOwnProperty("x"),E=l.hasOwnProperty("y"),S=pt,$=ut,M=window;if(p){var C=nn(n),I="clientHeight",j="clientWidth";if(C===bt(n)&&(C=Zt(n),qt(C).position!=="static"&&u==="absolute"&&(I="scrollHeight",j="scrollWidth")),C=C,i===ut||(i===pt||i===Rt)&&a===Qo){$=Tt;var O=g&&C===M&&M.visualViewport?M.visualViewport.height:C[I];y-=O-r.height,y*=c?1:-1}if(i===pt||(i===ut||i===Tt)&&a===Qo){S=Rt;var L=g&&C===M&&M.visualViewport?M.visualViewport.width:C[j];k-=L-r.width,k*=c?1:-1}}var z=Object.assign({position:u},p&&zc),ne=h===!0?Uc({x:k,y},bt(n)):{x:k,y};if(k=ne.x,y=ne.y,c){var W;return Object.assign({},z,(W={},W[$]=E?"0":"",W[S]=T?"0":"",W.transform=(M.devicePixelRatio||1)<=1?"translate("+k+"px, "+y+"px)":"translate3d("+k+"px, "+y+"px, 0)",W))}return Object.assign({},z,(t={},t[$]=E?y+"px":"",t[S]=T?k+"px":"",t.transform="",t))}function Fc(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0?!0:r,a=n.adaptive,l=a===void 0?!0:a,u=n.roundOffsets,c=u===void 0?!0:u,p={placement:jt(t.placement),variation:ko(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Wr(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Wr(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const _c={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Fc,data:{}};var mn={passive:!0};function Wc(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0?!0:i,l=r.resize,u=l===void 0?!0:l,c=bt(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach(function(h){h.addEventListener("scroll",n.update,mn)}),u&&c.addEventListener("resize",n.update,mn),function(){a&&p.forEach(function(h){h.removeEventListener("scroll",n.update,mn)}),u&&c.removeEventListener("resize",n.update,mn)}}const Hc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Wc,data:{}};var qc={left:"right",right:"left",bottom:"top",top:"bottom"};function Rn(e){return e.replace(/left|right|bottom|top/g,function(t){return qc[t]})}var Kc={start:"end",end:"start"};function Hr(e){return e.replace(/start|end/g,function(t){return Kc[t]})}function Tr(e){var t=bt(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Rr(e){return Co(Zt(e)).left+Tr(e).scrollLeft}function Gc(e,t){var n=bt(e),r=Zt(e),i=n.visualViewport,a=r.clientWidth,l=r.clientHeight,u=0,c=0;if(i){a=i.width,l=i.height;var p=na();(p||!p&&t==="fixed")&&(u=i.offsetLeft,c=i.offsetTop)}return{width:a,height:l,x:u+Rr(e),y:c}}function Qc(e){var t,n=Zt(e),r=Tr(e),i=(t=e.ownerDocument)==null?void 0:t.body,a=lo(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=lo(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),u=-r.scrollLeft+Rr(e),c=-r.scrollTop;return qt(i||n).direction==="rtl"&&(u+=lo(n.clientWidth,i?i.clientWidth:0)-a),{width:a,height:l,x:u,y:c}}function Er(e){var t=qt(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function la(e){return["html","body","#document"].indexOf(Dt(e))>=0?e.ownerDocument.body:kt(e)&&Er(e)?e:la(Fn(e))}function Ho(e,t){var n;t===void 0&&(t=[]);var r=la(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),a=bt(r),l=i?[a].concat(a.visualViewport||[],Er(r)?r:[]):r,u=t.concat(l);return i?u:u.concat(Ho(Fn(l)))}function ar(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Jc(e,t){var n=Co(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function qr(e,t,n){return t===ta?ar(Gc(e,n)):co(t)?Jc(t,n):ar(Qc(Zt(e)))}function Yc(e){var t=Ho(Fn(e)),n=["absolute","fixed"].indexOf(qt(e).position)>=0,r=n&&kt(e)?nn(e):e;return co(r)?t.filter(function(i){return co(i)&&ra(i,r)&&Dt(i)!=="body"}):[]}function Xc(e,t,n,r){var i=t==="clippingParents"?Yc(e):[].concat(t),a=[].concat(i,[n]),l=a[0],u=a.reduce(function(c,p){var h=qr(e,p,r);return c.top=lo(h.top,c.top),c.right=In(h.right,c.right),c.bottom=In(h.bottom,c.bottom),c.left=lo(h.left,c.left),c},qr(e,l,r));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function ca(e){var t=e.reference,n=e.element,r=e.placement,i=r?jt(r):null,a=r?ko(r):null,l=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,c;switch(i){case ut:c={x:l,y:t.y-n.height};break;case Tt:c={x:l,y:t.y+t.height};break;case Rt:c={x:t.x+t.width,y:u};break;case pt:c={x:t.x-n.width,y:u};break;default:c={x:t.x,y:t.y}}var p=i?Sr(i):null;if(p!=null){var h=p==="y"?"height":"width";switch(a){case xo:c[p]=c[p]-(t[h]/2-n[h]/2);break;case Qo:c[p]=c[p]+(t[h]/2-n[h]/2);break}}return c}function Jo(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,l=a===void 0?e.strategy:a,u=n.boundary,c=u===void 0?bc:u,p=n.rootBoundary,h=p===void 0?ta:p,g=n.elementContext,v=g===void 0?Io:g,k=n.altBoundary,x=k===void 0?!1:k,y=n.padding,w=y===void 0?0:y,T=sa(typeof w!="number"?w:aa(w,on)),E=v===Io?yc:Io,S=e.rects.popper,$=e.elements[x?E:v],M=Xc(co($)?$:$.contextElement||Zt(e.elements.popper),c,h,l),C=Co(e.elements.reference),I=ca({reference:C,element:S,placement:i}),j=ar(Object.assign({},S,I)),O=v===Io?j:C,L={top:M.top-O.top+T.top,bottom:O.bottom-M.bottom+T.bottom,left:M.left-O.left+T.left,right:O.right-M.right+T.right},z=e.modifiersData.offset;if(v===Io&&z){var ne=z[i];Object.keys(L).forEach(function(W){var B=[Rt,Tt].indexOf(W)>=0?1:-1,X=[ut,Tt].indexOf(W)>=0?"y":"x";L[W]+=ne[X]*B})}return L}function Zc(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,l=n.padding,u=n.flipVariations,c=n.allowedAutoPlacements,p=c===void 0?oa:c,h=ko(r),g=h?u?Fr:Fr.filter(function(x){return ko(x)===h}):on,v=g.filter(function(x){return p.indexOf(x)>=0});v.length===0&&(v=g);var k=v.reduce(function(x,y){return x[y]=Jo(e,{placement:y,boundary:i,rootBoundary:a,padding:l})[jt(y)],x},{});return Object.keys(k).sort(function(x,y){return k[x]-k[y]})}function ed(e){if(jt(e)===$r)return[];var t=Rn(e);return[Hr(e),t,Hr(t)]}function td(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0?!0:i,l=n.altAxis,u=l===void 0?!0:l,c=n.fallbackPlacements,p=n.padding,h=n.boundary,g=n.rootBoundary,v=n.altBoundary,k=n.flipVariations,x=k===void 0?!0:k,y=n.allowedAutoPlacements,w=t.options.placement,T=jt(w),E=T===w,S=c||(E||!x?[Rn(w)]:ed(w)),$=[w].concat(S).reduce(function(Ie,H){return Ie.concat(jt(H)===$r?Zc(t,{placement:H,boundary:h,rootBoundary:g,padding:p,flipVariations:x,allowedAutoPlacements:y}):H)},[]),M=t.rects.reference,C=t.rects.popper,I=new Map,j=!0,O=$[0],L=0;L<$.length;L++){var z=$[L],ne=jt(z),W=ko(z)===xo,B=[ut,Tt].indexOf(ne)>=0,X=B?"width":"height",U=Jo(t,{placement:z,boundary:h,rootBoundary:g,altBoundary:v,padding:p}),ee=B?W?Rt:pt:W?Tt:ut;M[X]>C[X]&&(ee=Rn(ee));var le=Rn(ee),Q=[];if(a&&Q.push(U[ne]<=0),u&&Q.push(U[ee]<=0,U[le]<=0),Q.every(function(Ie){return Ie})){O=z,j=!1;break}I.set(z,Q)}if(j)for(var Ee=x?3:1,Be=function(H){var V=$.find(function(K){var D=I.get(K);if(D)return D.slice(0,H).every(function(ie){return ie})});if(V)return O=V,"break"},qe=Ee;qe>0;qe--){var Se=Be(qe);if(Se==="break")break}t.placement!==O&&(t.modifiersData[r]._skip=!0,t.placement=O,t.reset=!0)}}const od={name:"flip",enabled:!0,phase:"main",fn:td,requiresIfExists:["offset"],data:{_skip:!1}};function Kr(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Gr(e){return[ut,Rt,Tt,pt].some(function(t){return e[t]>=0})}function nd(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,l=Jo(t,{elementContext:"reference"}),u=Jo(t,{altBoundary:!0}),c=Kr(l,r),p=Kr(u,i,a),h=Gr(c),g=Gr(p);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:h,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":g})}const rd={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:nd};function id(e,t,n){var r=jt(e),i=[pt,ut].indexOf(r)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,l=a[0],u=a[1];return l=l||0,u=(u||0)*i,[pt,Rt].indexOf(r)>=0?{x:u,y:l}:{x:l,y:u}}function sd(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,l=oa.reduce(function(h,g){return h[g]=id(g,t.rects,a),h},{}),u=l[t.placement],c=u.x,p=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[r]=l}const ad={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:sd};function ld(e){var t=e.state,n=e.name;t.modifiersData[n]=ca({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const cd={name:"popperOffsets",enabled:!0,phase:"read",fn:ld,data:{}};function dd(e){return e==="x"?"y":"x"}function ud(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0?!0:i,l=n.altAxis,u=l===void 0?!1:l,c=n.boundary,p=n.rootBoundary,h=n.altBoundary,g=n.padding,v=n.tether,k=v===void 0?!0:v,x=n.tetherOffset,y=x===void 0?0:x,w=Jo(t,{boundary:c,rootBoundary:p,padding:g,altBoundary:h}),T=jt(t.placement),E=ko(t.placement),S=!E,$=Sr(T),M=dd($),C=t.modifiersData.popperOffsets,I=t.rects.reference,j=t.rects.popper,O=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,L=typeof O=="number"?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),z=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,ne={x:0,y:0};if(C){if(a){var W,B=$==="y"?ut:pt,X=$==="y"?Tt:Rt,U=$==="y"?"height":"width",ee=C[$],le=ee+w[B],Q=ee-w[X],Ee=k?-j[U]/2:0,Be=E===xo?I[U]:j[U],qe=E===xo?-j[U]:-I[U],Se=t.elements.arrow,Ie=k&&Se?kr(Se):{width:0,height:0},H=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ia(),V=H[B],K=H[X],D=Wo(0,I[U],Ie[U]),ie=S?I[U]/2-Ee-D-V-L.mainAxis:Be-D-V-L.mainAxis,be=S?-I[U]/2+Ee+D+K+L.mainAxis:qe+D+K+L.mainAxis,ce=t.elements.arrow&&nn(t.elements.arrow),he=ce?$==="y"?ce.clientTop||0:ce.clientLeft||0:0,Me=(W=z?.[$])!=null?W:0,Re=ee+ie-Me-he,ye=ee+be-Me,rt=Wo(k?In(le,Re):le,ee,k?lo(Q,ye):Q);C[$]=rt,ne[$]=rt-ee}if(u){var Ye,Qe=$==="x"?ut:pt,Et=$==="x"?Tt:Rt,Pe=C[M],tt=M==="y"?"height":"width",ht=Pe+w[Qe],wt=Pe-w[Et],mt=[ut,pt].indexOf(T)!==-1,_=(Ye=z?.[M])!=null?Ye:0,J=mt?ht:Pe-I[tt]-j[tt]-_+L.altAxis,se=mt?Pe+I[tt]+j[tt]-_-L.altAxis:wt,me=k&&mt?Vc(J,Pe,se):Wo(k?J:ht,Pe,k?se:wt);C[M]=me,ne[M]=me-Pe}t.modifiersData[r]=ne}}const pd={name:"preventOverflow",enabled:!0,phase:"main",fn:ud,requiresIfExists:["offset"]};function hd(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function md(e){return e===bt(e)||!kt(e)?Tr(e):hd(e)}function fd(e){var t=e.getBoundingClientRect(),n=$o(t.width)/e.offsetWidth||1,r=$o(t.height)/e.offsetHeight||1;return n!==1||r!==1}function gd(e,t,n){n===void 0&&(n=!1);var r=kt(t),i=kt(t)&&fd(t),a=Zt(t),l=Co(e,i,n),u={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Dt(t)!=="body"||Er(a))&&(u=md(t)),kt(t)?(c=Co(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=Rr(a))),{x:l.left+u.scrollLeft-c.x,y:l.top+u.scrollTop-c.y,width:l.width,height:l.height}}function vd(e){var t=new Map,n=new Set,r=[];e.forEach(function(a){t.set(a.name,a)});function i(a){n.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(u){if(!n.has(u)){var c=t.get(u);c&&i(c)}}),r.push(a)}return e.forEach(function(a){n.has(a.name)||i(a)}),r}function bd(e){var t=vd(e);return Mc.reduce(function(n,r){return n.concat(t.filter(function(i){return i.phase===r}))},[])}function yd(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function wd(e){var t=e.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Qr={placement:"bottom",modifiers:[],strategy:"absolute"};function Jr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function xd(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?Qr:i;return function(u,c,p){p===void 0&&(p=a);var h={placement:"bottom",orderedModifiers:[],options:Object.assign({},Qr,a),modifiersData:{},elements:{reference:u,popper:c},attributes:{},styles:{}},g=[],v=!1,k={state:h,setOptions:function(T){var E=typeof T=="function"?T(h.options):T;y(),h.options=Object.assign({},a,h.options,E),h.scrollParents={reference:co(u)?Ho(u):u.contextElement?Ho(u.contextElement):[],popper:Ho(c)};var S=bd(wd([].concat(r,h.options.modifiers)));return h.orderedModifiers=S.filter(function($){return $.enabled}),x(),k.update()},forceUpdate:function(){if(!v){var T=h.elements,E=T.reference,S=T.popper;if(Jr(E,S)){h.rects={reference:gd(E,nn(S),h.options.strategy==="fixed"),popper:kr(S)},h.reset=!1,h.placement=h.options.placement,h.orderedModifiers.forEach(function(L){return h.modifiersData[L.name]=Object.assign({},L.data)});for(var $=0;$<h.orderedModifiers.length;$++){if(h.reset===!0){h.reset=!1,$=-1;continue}var M=h.orderedModifiers[$],C=M.fn,I=M.options,j=I===void 0?{}:I,O=M.name;typeof C=="function"&&(h=C({state:h,options:j,name:O,instance:k})||h)}}}},update:yd(function(){return new Promise(function(w){k.forceUpdate(),w(h)})}),destroy:function(){y(),v=!0}};if(!Jr(u,c))return k;k.setOptions(p).then(function(w){!v&&p.onFirstUpdate&&p.onFirstUpdate(w)});function x(){h.orderedModifiers.forEach(function(w){var T=w.name,E=w.options,S=E===void 0?{}:E,$=w.effect;if(typeof $=="function"){var M=$({state:h,name:T,instance:k,options:S}),C=function(){};g.push(M||C)}})}function y(){g.forEach(function(w){return w()}),g=[]}return k}}var $d=[Hc,cd,_c,Ac,ad,od,pd,Dc,rd],Cd=xd({defaultModifiers:$d});function kd(e){return ge("MuiPopper",e)}ve("MuiPopper",["root"]);const Sd=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Td=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Rd(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function lr(e){return typeof e=="function"?e():e}function Ed(e){return e.nodeType!==void 0}const Md=()=>ue({root:["root"]},fc(kd)),Pd={},Id=d.forwardRef(function(t,n){var r;const{anchorEl:i,children:a,direction:l,disablePortal:u,modifiers:c,open:p,placement:h,popperOptions:g,popperRef:v,slotProps:k={},slots:x={},TransitionProps:y}=t,w=ae(t,Sd),T=d.useRef(null),E=St(T,n),S=d.useRef(null),$=St(S,v),M=d.useRef($);wo(()=>{M.current=$},[$]),d.useImperativeHandle(v,()=>S.current,[]);const C=Rd(h,l),[I,j]=d.useState(C),[O,L]=d.useState(lr(i));d.useEffect(()=>{S.current&&S.current.forceUpdate()}),d.useEffect(()=>{i&&L(lr(i))},[i]),wo(()=>{if(!O||!p)return;const X=le=>{j(le.placement)};let U=[{name:"preventOverflow",options:{altBoundary:u}},{name:"flip",options:{altBoundary:u}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:le})=>{X(le)}}];c!=null&&(U=U.concat(c)),g&&g.modifiers!=null&&(U=U.concat(g.modifiers));const ee=Cd(O,T.current,m({placement:C},g,{modifiers:U}));return M.current(ee),()=>{ee.destroy(),M.current(null)}},[O,u,c,p,g,C]);const z={placement:I};y!==null&&(z.TransitionProps=y);const ne=Md(),W=(r=x.root)!=null?r:"div",B=dt({elementType:W,externalSlotProps:k.root,externalForwardedProps:w,additionalProps:{role:"tooltip",ref:E},ownerState:t,className:ne.root});return R.jsx(W,m({},B,{children:typeof a=="function"?a(z):a}))}),Ad=d.forwardRef(function(t,n){const{anchorEl:r,children:i,container:a,direction:l="ltr",disablePortal:u=!1,keepMounted:c=!1,modifiers:p,open:h,placement:g="bottom",popperOptions:v=Pd,popperRef:k,style:x,transition:y=!1,slotProps:w={},slots:T={}}=t,E=ae(t,Td),[S,$]=d.useState(!0),M=()=>{$(!1)},C=()=>{$(!0)};if(!c&&!h&&(!y||S))return null;let I;if(a)I=a;else if(r){const L=lr(r);I=L&&Ed(L)?Nt(L).body:Nt(null).body}const j=!h&&c&&(!y||S)?"none":void 0,O=y?{in:h,onEnter:M,onExited:C}:void 0;return R.jsx(tl,{disablePortal:u,container:I,children:R.jsx(Id,m({anchorEl:r,direction:l,disablePortal:u,modifiers:p,ref:n,open:y?!S:h,placement:g,popperOptions:v,popperRef:k,slotProps:w,slots:T},E,{style:m({position:"fixed",top:0,left:0,display:j},x),TransitionProps:O,children:i}))})}),Nd=2;function da(e,t){return e-t}function Ao(e,t,n){return e==null?t:Math.min(Math.max(t,e),n)}function Yr(e,t){var n;const{index:r}=(n=e.reduce((i,a,l)=>{const u=Math.abs(t-a);return i===null||u<i.distance||u===i.distance?{distance:u,index:l}:i},null))!=null?n:{};return r}function fn(e,t){if(t.current!==void 0&&e.changedTouches){const n=e;for(let r=0;r<n.changedTouches.length;r+=1){const i=n.changedTouches[r];if(i.identifier===t.current)return{x:i.clientX,y:i.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function An(e,t,n){return(e-t)*100/(n-t)}function Od(e,t,n){return(n-t)*e+t}function Vd(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Ld(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Vd(t)))}function Xr({values:e,newValue:t,index:n}){const r=e.slice();return r[n]=t,r.sort(da)}function gn({sliderRef:e,activeIndex:t,setActive:n}){var r,i;const a=Nt(e.current);if(!((r=e.current)!=null&&r.contains(a.activeElement))||Number(a==null||(i=a.activeElement)==null?void 0:i.getAttribute("data-index"))!==t){var l;(l=e.current)==null||l.querySelector(`[type="range"][data-index="${t}"]`).focus()}n&&n(t)}function vn(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?pc(e,t):!1}const Bd={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},jd=e=>e;let bn;function Jn(){return bn===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?bn=CSS.supports("touch-action","none"):bn=!0),bn}function Dd(e){const{"aria-labelledby":t,defaultValue:n,disabled:r=!1,disableSwap:i=!1,isRtl:a=!1,marks:l=!1,max:u=100,min:c=0,name:p,onChange:h,onChangeCommitted:g,orientation:v="horizontal",rootRef:k,scale:x=jd,step:y=1,tabIndex:w,value:T}=e,E=d.useRef(),[S,$]=d.useState(-1),[M,C]=d.useState(-1),[I,j]=d.useState(!1),O=d.useRef(0),[L,z]=Xo({controlled:T,default:n??c,name:"Slider"}),ne=h&&((_,J,se)=>{const me=_.nativeEvent||_,De=new me.constructor(me.type,me);Object.defineProperty(De,"target",{writable:!0,value:{value:J,name:p}}),h(De,J,se)}),W=Array.isArray(L);let B=W?L.slice().sort(da):[L];B=B.map(_=>Ao(_,c,u));const X=l===!0&&y!==null?[...Array(Math.floor((u-c)/y)+1)].map((_,J)=>({value:c+y*J})):l||[],U=X.map(_=>_.value),{isFocusVisibleRef:ee,onBlur:le,onFocus:Q,ref:Ee}=gr(),[Be,qe]=d.useState(-1),Se=d.useRef(),Ie=St(Ee,Se),H=St(k,Ie),V=_=>J=>{var se;const me=Number(J.currentTarget.getAttribute("data-index"));Q(J),ee.current===!0&&qe(me),C(me),_==null||(se=_.onFocus)==null||se.call(_,J)},K=_=>J=>{var se;le(J),ee.current===!1&&qe(-1),C(-1),_==null||(se=_.onBlur)==null||se.call(_,J)};wo(()=>{if(r&&Se.current.contains(document.activeElement)){var _;(_=document.activeElement)==null||_.blur()}},[r]),r&&S!==-1&&$(-1),r&&Be!==-1&&qe(-1);const D=_=>J=>{var se;(se=_.onChange)==null||se.call(_,J);const me=Number(J.currentTarget.getAttribute("data-index")),De=B[me],Fe=U.indexOf(De);let xe=J.target.valueAsNumber;if(X&&y==null){const Ve=U[U.length-1];xe>Ve?xe=Ve:xe<U[0]?xe=U[0]:xe=xe<De?U[Fe-1]:U[Fe+1]}if(xe=Ao(xe,c,u),W){i&&(xe=Ao(xe,B[me-1]||-1/0,B[me+1]||1/0));const Ve=xe;xe=Xr({values:B,newValue:xe,index:me});let ze=me;i||(ze=xe.indexOf(Ve)),gn({sliderRef:Se,activeIndex:ze})}z(xe),qe(me),ne&&!vn(xe,L)&&ne(J,xe,me),g&&g(J,xe)},ie=d.useRef();let be=v;a&&v==="horizontal"&&(be+="-reverse");const ce=({finger:_,move:J=!1})=>{const{current:se}=Se,{width:me,height:De,bottom:Fe,left:xe}=se.getBoundingClientRect();let Ve;be.indexOf("vertical")===0?Ve=(Fe-_.y)/De:Ve=(_.x-xe)/me,be.indexOf("-reverse")!==-1&&(Ve=1-Ve);let ze;if(ze=Od(Ve,c,u),y)ze=Ld(ze,y,c);else{const G=Yr(U,ze);ze=U[G]}ze=Ao(ze,c,u);let ot=0;if(W){J?ot=ie.current:ot=Yr(B,ze),i&&(ze=Ao(ze,B[ot-1]||-1/0,B[ot+1]||1/0));const G=ze;ze=Xr({values:B,newValue:ze,index:ot}),i&&J||(ot=ze.indexOf(G),ie.current=ot)}return{newValue:ze,activeIndex:ot}},he=Ot(_=>{const J=fn(_,E);if(!J)return;if(O.current+=1,_.type==="mousemove"&&_.buttons===0){Me(_);return}const{newValue:se,activeIndex:me}=ce({finger:J,move:!0});gn({sliderRef:Se,activeIndex:me,setActive:$}),z(se),!I&&O.current>Nd&&j(!0),ne&&!vn(se,L)&&ne(_,se,me)}),Me=Ot(_=>{const J=fn(_,E);if(j(!1),!J)return;const{newValue:se}=ce({finger:J,move:!0});$(-1),_.type==="touchend"&&C(-1),g&&g(_,se),E.current=void 0,ye()}),Re=Ot(_=>{if(r)return;Jn()||_.preventDefault();const J=_.changedTouches[0];J!=null&&(E.current=J.identifier);const se=fn(_,E);if(se!==!1){const{newValue:De,activeIndex:Fe}=ce({finger:se});gn({sliderRef:Se,activeIndex:Fe,setActive:$}),z(De),ne&&!vn(De,L)&&ne(_,De,Fe)}O.current=0;const me=Nt(Se.current);me.addEventListener("touchmove",he),me.addEventListener("touchend",Me)}),ye=d.useCallback(()=>{const _=Nt(Se.current);_.removeEventListener("mousemove",he),_.removeEventListener("mouseup",Me),_.removeEventListener("touchmove",he),_.removeEventListener("touchend",Me)},[Me,he]);d.useEffect(()=>{const{current:_}=Se;return _.addEventListener("touchstart",Re,{passive:Jn()}),()=>{_.removeEventListener("touchstart",Re,{passive:Jn()}),ye()}},[ye,Re]),d.useEffect(()=>{r&&ye()},[r,ye]);const rt=_=>J=>{var se;if((se=_.onMouseDown)==null||se.call(_,J),r||J.defaultPrevented||J.button!==0)return;J.preventDefault();const me=fn(J,E);if(me!==!1){const{newValue:Fe,activeIndex:xe}=ce({finger:me});gn({sliderRef:Se,activeIndex:xe,setActive:$}),z(Fe),ne&&!vn(Fe,L)&&ne(J,Fe,xe)}O.current=0;const De=Nt(Se.current);De.addEventListener("mousemove",he),De.addEventListener("mouseup",Me)},Ye=An(W?B[0]:c,c,u),Qe=An(B[B.length-1],c,u)-Ye,Et=(_={})=>{const J=_o(_),se={onMouseDown:rt(J||{})},me=m({},J,se);return m({},_,{ref:H},me)},Pe=_=>J=>{var se;(se=_.onMouseOver)==null||se.call(_,J);const me=Number(J.currentTarget.getAttribute("data-index"));C(me)},tt=_=>J=>{var se;(se=_.onMouseLeave)==null||se.call(_,J),C(-1)};return{active:S,axis:be,axisProps:Bd,dragging:I,focusedThumbIndex:Be,getHiddenInputProps:(_={})=>{var J;const se=_o(_),me={onChange:D(se||{}),onFocus:V(se||{}),onBlur:K(se||{})},De=m({},se,me);return m({tabIndex:w,"aria-labelledby":t,"aria-orientation":v,"aria-valuemax":x(u),"aria-valuemin":x(c),name:p,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(J=e.step)!=null?J:void 0,disabled:r},_,De,{style:m({},Pl,{direction:a?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Et,getThumbProps:(_={})=>{const J=_o(_),se={onMouseOver:Pe(J||{}),onMouseLeave:tt(J||{})};return m({},_,J,se)},marks:X,open:M,range:W,rootRef:H,trackLeap:Qe,trackOffset:Ye,values:B,getThumbStyle:_=>({pointerEvents:S!==-1&&S!==_?"none":void 0})}}function zd(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:n=!1,onClose:r,open:i,resumeHideDuration:a}=e,l=d.useRef();d.useEffect(()=>{if(!i)return;function T(E){E.defaultPrevented||(E.key==="Escape"||E.key==="Esc")&&r?.(E,"escapeKeyDown")}return document.addEventListener("keydown",T),()=>{document.removeEventListener("keydown",T)}},[i,r]);const u=Ot((T,E)=>{r?.(T,E)}),c=Ot(T=>{!r||T==null||(clearTimeout(l.current),l.current=setTimeout(()=>{u(null,"timeout")},T))});d.useEffect(()=>(i&&c(t),()=>{clearTimeout(l.current)}),[i,t,c]);const p=T=>{r?.(T,"clickaway")},h=()=>{clearTimeout(l.current)},g=d.useCallback(()=>{t!=null&&c(a??t*.5)},[t,a,c]),v=T=>E=>{const S=T.onBlur;S?.(E),g()},k=T=>E=>{const S=T.onFocus;S?.(E),h()},x=T=>E=>{const S=T.onMouseEnter;S?.(E),h()},y=T=>E=>{const S=T.onMouseLeave;S?.(E),g()};return d.useEffect(()=>{if(!n&&i)return window.addEventListener("focus",g),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",h)}},[n,g,i]),{getRootProps:(T={})=>{const E=m({},_o(e),_o(T));return m({role:"presentation"},T,E,{onBlur:v(E),onFocus:k(E),onMouseEnter:x(E),onMouseLeave:y(E)})},onClickAway:p}}const Ud=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Fd=q(Ad,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ua=d.forwardRef(function(t,n){var r;const i=ol(),a=fe({props:t,name:"MuiPopper"}),{anchorEl:l,component:u,components:c,componentsProps:p,container:h,disablePortal:g,keepMounted:v,modifiers:k,open:x,placement:y,popperOptions:w,popperRef:T,transition:E,slots:S,slotProps:$}=a,M=ae(a,Ud),C=(r=S?.root)!=null?r:c?.Root,I=m({anchorEl:l,container:h,disablePortal:g,keepMounted:v,modifiers:k,open:x,placement:y,popperOptions:w,popperRef:T,transition:E},M);return R.jsx(Fd,m({as:u,direction:i?.direction,slots:{root:C},slotProps:$??p},I,{ref:n}))});function _d(e){return ge("MuiListSubheader",e)}ve("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const Wd=["className","color","component","disableGutters","disableSticky","inset"],Hd=e=>{const{classes:t,color:n,disableGutters:r,inset:i,disableSticky:a}=e,l={root:["root",n!=="default"&&`color${F(n)}`,!r&&"gutters",i&&"inset",!a&&"sticky"]};return ue(l,_d,t)},qd=q("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="default"&&t[`color${F(n.color)}`],!n.disableGutters&&t.gutters,n.inset&&t.inset,!n.disableSticky&&t.sticky]}})(({theme:e,ownerState:t})=>m({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},t.color==="primary"&&{color:(e.vars||e).palette.primary.main},t.color==="inherit"&&{color:"inherit"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.inset&&{paddingLeft:72},!t.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})),cr=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiListSubheader"}),{className:i,color:a="default",component:l="li",disableGutters:u=!1,disableSticky:c=!1,inset:p=!1}=r,h=ae(r,Wd),g=m({},r,{color:a,component:l,disableGutters:u,disableSticky:c,inset:p}),v=Hd(g);return R.jsx(qd,m({as:l,className:oe(v.root,i),ref:n,ownerState:g},h))});cr.muiSkipListHighlight=!0;const Kd=je(R.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function Gd(e){return ge("MuiChip",e)}const Ae=ve("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),Qd=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],Jd=e=>{const{classes:t,disabled:n,size:r,color:i,iconColor:a,onDelete:l,clickable:u,variant:c}=e,p={root:["root",c,n&&"disabled",`size${F(r)}`,`color${F(i)}`,u&&"clickable",u&&`clickableColor${F(i)}`,l&&"deletable",l&&`deletableColor${F(i)}`,`${c}${F(i)}`],label:["label",`label${F(r)}`],avatar:["avatar",`avatar${F(r)}`,`avatarColor${F(i)}`],icon:["icon",`icon${F(r)}`,`iconColor${F(a)}`],deleteIcon:["deleteIcon",`deleteIcon${F(r)}`,`deleteIconColor${F(i)}`,`deleteIcon${F(c)}Color${F(i)}`]};return ue(p,Gd,t)},Yd=q("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{color:r,iconColor:i,clickable:a,onDelete:l,size:u,variant:c}=n;return[{[`& .${Ae.avatar}`]:t.avatar},{[`& .${Ae.avatar}`]:t[`avatar${F(u)}`]},{[`& .${Ae.avatar}`]:t[`avatarColor${F(r)}`]},{[`& .${Ae.icon}`]:t.icon},{[`& .${Ae.icon}`]:t[`icon${F(u)}`]},{[`& .${Ae.icon}`]:t[`iconColor${F(i)}`]},{[`& .${Ae.deleteIcon}`]:t.deleteIcon},{[`& .${Ae.deleteIcon}`]:t[`deleteIcon${F(u)}`]},{[`& .${Ae.deleteIcon}`]:t[`deleteIconColor${F(r)}`]},{[`& .${Ae.deleteIcon}`]:t[`deleteIcon${F(c)}Color${F(r)}`]},t.root,t[`size${F(u)}`],t[`color${F(r)}`],a&&t.clickable,a&&r!=="default"&&t[`clickableColor${F(r)})`],l&&t.deletable,l&&r!=="default"&&t[`deletableColor${F(r)}`],t[c],t[`${c}${F(r)}`]]}})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return m({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${Ae.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${Ae.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:n,fontSize:e.typography.pxToRem(12)},[`& .${Ae.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${Ae.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${Ae.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${Ae.icon}`]:m({marginLeft:5,marginRight:-6},t.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},t.iconColor===t.color&&m({color:e.vars?e.vars.palette.Chip.defaultIconColor:n},t.color!=="default"&&{color:"inherit"})),[`& .${Ae.deleteIcon}`]:m({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:Ge(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:Ge(e.palette.text.primary,.4)}},t.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},t.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`:Ge(e.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].contrastText}})},t.size==="small"&&{height:24},t.color!=="default"&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},t.onDelete&&{[`&.${Ae.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Ge(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},t.onDelete&&t.color!=="default"&&{[`&.${Ae.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}})},({theme:e,ownerState:t})=>m({},t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Ge(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${Ae.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Ge(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},t.clickable&&t.color!=="default"&&{[`&:hover, &.${Ae.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}}),({theme:e,ownerState:t})=>m({},t.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${Ae.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${Ae.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${Ae.avatar}`]:{marginLeft:4},[`& .${Ae.avatarSmall}`]:{marginLeft:2},[`& .${Ae.icon}`]:{marginLeft:4},[`& .${Ae.iconSmall}`]:{marginLeft:2},[`& .${Ae.deleteIcon}`]:{marginRight:5},[`& .${Ae.deleteIconSmall}`]:{marginRight:3}},t.variant==="outlined"&&t.color!=="default"&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:Ge(e.palette[t.color].main,.7)}`,[`&.${Ae.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ge(e.palette[t.color].main,e.palette.action.hoverOpacity)},[`&.${Ae.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:Ge(e.palette[t.color].main,e.palette.action.focusOpacity)},[`& .${Ae.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:Ge(e.palette[t.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].main}}})),Xd=q("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:n}=e,{size:r}=n;return[t.label,t[`label${F(r)}`]]}})(({ownerState:e})=>m({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.variant==="outlined"&&{paddingLeft:11,paddingRight:11},e.size==="small"&&{paddingLeft:8,paddingRight:8},e.size==="small"&&e.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function Zr(e){return e.key==="Backspace"||e.key==="Delete"}const Ue=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiChip"}),{avatar:i,className:a,clickable:l,color:u="default",component:c,deleteIcon:p,disabled:h=!1,icon:g,label:v,onClick:k,onDelete:x,onKeyDown:y,onKeyUp:w,size:T="medium",variant:E="filled",tabIndex:S,skipFocusWhenDisabled:$=!1}=r,M=ae(r,Qd),C=d.useRef(null),I=St(C,n),j=Q=>{Q.stopPropagation(),x&&x(Q)},O=Q=>{Q.currentTarget===Q.target&&Zr(Q)&&Q.preventDefault(),y&&y(Q)},L=Q=>{Q.currentTarget===Q.target&&(x&&Zr(Q)?x(Q):Q.key==="Escape"&&C.current&&C.current.blur()),w&&w(Q)},z=l!==!1&&k?!0:l,ne=z||x?Jt:c||"div",W=m({},r,{component:ne,disabled:h,size:T,color:u,iconColor:d.isValidElement(g)&&g.props.color||u,onDelete:!!x,clickable:z,variant:E}),B=Jd(W),X=ne===Jt?m({component:c||"div",focusVisibleClassName:B.focusVisible},x&&{disableRipple:!0}):{};let U=null;x&&(U=p&&d.isValidElement(p)?d.cloneElement(p,{className:oe(p.props.className,B.deleteIcon),onClick:j}):R.jsx(Kd,{className:oe(B.deleteIcon),onClick:j}));let ee=null;i&&d.isValidElement(i)&&(ee=d.cloneElement(i,{className:oe(B.avatar,i.props.className)}));let le=null;return g&&d.isValidElement(g)&&(le=d.cloneElement(g,{className:oe(B.icon,g.props.className)})),R.jsxs(Yd,m({as:ne,className:oe(B.root,a),disabled:z&&h?!0:void 0,onClick:k,onKeyDown:O,onKeyUp:L,ref:I,tabIndex:$&&h?-1:S,ownerState:W},X,M,{children:[ee||le,R.jsx(Xd,{className:oe(B.label),ownerState:W,children:v}),U]}))});function Zd(e){return ge("MuiBottomNavigation",e)}ve("MuiBottomNavigation",["root"]);const eu=["children","className","component","onChange","showLabels","value"],tu=e=>{const{classes:t}=e;return ue({root:["root"]},Zd,t)},ou=q("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(e.vars||e).palette.background.paper})),nu=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiBottomNavigation"}),{children:i,className:a,component:l="div",onChange:u,showLabels:c=!1,value:p}=r,h=ae(r,eu),g=m({},r,{component:l,showLabels:c}),v=tu(g);return R.jsx(ou,m({as:l,className:oe(v.root,a),ref:n,ownerState:g},h,{children:d.Children.map(i,(k,x)=>{if(!d.isValidElement(k))return null;const y=k.props.value===void 0?x:k.props.value;return d.cloneElement(k,{selected:y===p,showLabel:k.props.showLabel!==void 0?k.props.showLabel:c,value:y,onChange:u})})}))});function ru(e){return ge("MuiBottomNavigationAction",e)}const pa=ve("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),iu=["className","icon","label","onChange","onClick","selected","showLabel","value"],su=e=>{const{classes:t,showLabel:n,selected:r}=e;return ue({root:["root",!n&&!r&&"iconOnly",r&&"selected"],label:["label",!n&&!r&&"iconOnly",r&&"selected"]},ru,t)},au=q(Jt,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.showLabel&&!n.selected&&t.iconOnly]}})(({theme:e,ownerState:t})=>m({transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(e.vars||e).palette.text.secondary,flexDirection:"column",flex:"1"},!t.showLabel&&!t.selected&&{paddingTop:14},!t.showLabel&&!t.selected&&!t.label&&{paddingTop:0},{[`&.${pa.selected}`]:{color:(e.vars||e).palette.primary.main}})),lu=q("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(e,t)=>t.label})(({theme:e,ownerState:t})=>m({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!t.showLabel&&!t.selected&&{opacity:0,transitionDelay:"0s"},{[`&.${pa.selected}`]:{fontSize:e.typography.pxToRem(14)}})),ei=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiBottomNavigationAction"}),{className:i,icon:a,label:l,onChange:u,onClick:c,value:p}=r,h=ae(r,iu),g=r,v=su(g),k=x=>{u&&u(x,p),c&&c(x)};return R.jsxs(au,m({ref:n,className:oe(v.root,i),focusRipple:!0,onClick:k,ownerState:g},h,{children:[a,R.jsx(lu,{className:v.label,ownerState:g,children:l})]}))});function cu(e){return ge("MuiCard",e)}ve("MuiCard",["root"]);const du=["className","raised"],uu=e=>{const{classes:t}=e;return ue({root:["root"]},cu,t)},pu=q(Bn,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Mr=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiCard"}),{className:i,raised:a=!1}=r,l=ae(r,du),u=m({},r,{raised:a}),c=uu(u);return R.jsx(pu,m({className:oe(c.root,i),elevation:a?8:void 0,ref:n,ownerState:u},l))});function hu(e){return ge("PrivateSwitchBase",e)}ve("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const mu=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],fu=e=>{const{classes:t,checked:n,disabled:r,edge:i}=e,a={root:["root",n&&"checked",r&&"disabled",i&&`edge${F(i)}`],input:["input"]};return ue(a,hu,t)},gu=q(Jt)(({ownerState:e})=>m({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),vu=q("input",{shouldForwardProp:Dn})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),bu=d.forwardRef(function(t,n){const{autoFocus:r,checked:i,checkedIcon:a,className:l,defaultChecked:u,disabled:c,disableFocusRipple:p=!1,edge:h=!1,icon:g,id:v,inputProps:k,inputRef:x,name:y,onBlur:w,onChange:T,onFocus:E,readOnly:S,required:$=!1,tabIndex:M,type:C,value:I}=t,j=ae(t,mu),[O,L]=Xo({controlled:i,default:!!u,name:"SwitchBase",state:"checked"}),z=jn(),ne=Q=>{E&&E(Q),z&&z.onFocus&&z.onFocus(Q)},W=Q=>{w&&w(Q),z&&z.onBlur&&z.onBlur(Q)},B=Q=>{if(Q.nativeEvent.defaultPrevented)return;const Ee=Q.target.checked;L(Ee),T&&T(Q,Ee)};let X=c;z&&typeof X>"u"&&(X=z.disabled);const U=C==="checkbox"||C==="radio",ee=m({},t,{checked:O,disabled:X,disableFocusRipple:p,edge:h}),le=fu(ee);return R.jsxs(gu,m({component:"span",className:oe(le.root,l),centerRipple:!0,focusRipple:!p,disabled:X,tabIndex:null,role:void 0,onFocus:ne,onBlur:W,ownerState:ee,ref:n},j,{children:[R.jsx(vu,m({autoFocus:r,checked:i,defaultChecked:u,className:le.input,disabled:X,id:U?v:void 0,name:y,onChange:B,readOnly:S,ref:x,required:$,ownerState:ee,tabIndex:M,type:C},C==="checkbox"&&I===void 0?{}:{value:I},k)),O?a:g]}))});function yu(e){return ge("MuiFab",e)}const ti=ve("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),wu=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],xu=e=>{const{color:t,variant:n,classes:r,size:i}=e,a={root:["root",n,`size${F(i)}`,t==="inherit"?"colorInherit":t]},l=ue(a,yu,r);return m({},r,l)},$u=q(Jt,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>Dn(e)||e==="classes",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${F(n.size)}`],n.color==="inherit"&&t.colorInherit,t[F(n.size)],t[n.color]]}})(({theme:e,ownerState:t})=>{var n,r;return m({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:(n=(r=e.palette).getContrastText)==null?void 0:n.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${ti.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},t.size==="small"&&{width:40,height:40},t.size==="medium"&&{width:48,height:48},t.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},t.variant==="extended"&&t.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},t.variant==="extended"&&t.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},t.color==="inherit"&&{color:"inherit"})},({theme:e,ownerState:t})=>m({},t.color!=="inherit"&&t.color!=="default"&&(e.vars||e).palette[t.color]!=null&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}}),({theme:e})=>({[`&.${ti.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),ha=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiFab"}),{children:i,className:a,color:l="default",component:u="button",disabled:c=!1,disableFocusRipple:p=!1,focusVisibleClassName:h,size:g="large",variant:v="circular"}=r,k=ae(r,wu),x=m({},r,{color:l,component:u,disabled:c,disableFocusRipple:p,size:g,variant:v}),y=xu(x);return R.jsx($u,m({className:oe(y.root,a),component:u,disabled:c,focusRipple:!p,focusVisibleClassName:oe(y.focusVisible,h),ownerState:x,ref:n},k,{classes:y,children:i}))});function Cu(e){return ge("MuiFormControl",e)}ve("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const ku=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Su=e=>{const{classes:t,margin:n,fullWidth:r}=e,i={root:["root",n!=="none"&&`margin${F(n)}`,r&&"fullWidth"]};return ue(i,Cu,t)},Tu=q("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>m({},t.root,t[`margin${F(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>m({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),ma=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiFormControl"}),{children:i,className:a,color:l="primary",component:u="div",disabled:c=!1,error:p=!1,focused:h,fullWidth:g=!1,hiddenLabel:v=!1,margin:k="none",required:x=!1,size:y="medium",variant:w="outlined"}=r,T=ae(r,ku),E=m({},r,{color:l,component:u,disabled:c,error:p,fullWidth:g,hiddenLabel:v,margin:k,required:x,size:y,variant:w}),S=Su(E),[$,M]=d.useState(()=>{let W=!1;return i&&d.Children.forEach(i,B=>{if(!yo(B,["Input","Select"]))return;const X=yo(B,["Select"])?B.props.input:B;X&&nl(X.props)&&(W=!0)}),W}),[C,I]=d.useState(()=>{let W=!1;return i&&d.Children.forEach(i,B=>{yo(B,["Input","Select"])&&(Or(B.props,!0)||Or(B.props.inputProps,!0))&&(W=!0)}),W}),[j,O]=d.useState(!1);c&&j&&O(!1);const L=h!==void 0&&!c?h:j;let z;const ne=d.useMemo(()=>({adornedStart:$,setAdornedStart:M,color:l,disabled:c,error:p,filled:C,focused:L,fullWidth:g,hiddenLabel:v,size:y,onBlur:()=>{O(!1)},onEmpty:()=>{I(!1)},onFilled:()=>{I(!0)},onFocus:()=>{O(!0)},registerEffect:z,required:x,variant:w}),[$,l,c,p,C,L,g,v,z,x,y,w]);return R.jsx(rl.Provider,{value:ne,children:R.jsx(Tu,m({as:u,ownerState:E,className:oe(S.root,a),ref:n},T,{children:i}))})}),Ru=Dl({createStyledComponent:q("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>fe({props:e,name:"MuiStack"})});function Eu(e){return ge("MuiFormHelperText",e)}const oi=ve("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var ni;const Mu=["children","className","component","disabled","error","filled","focused","margin","required","variant"],Pu=e=>{const{classes:t,contained:n,size:r,disabled:i,error:a,filled:l,focused:u,required:c}=e,p={root:["root",i&&"disabled",a&&"error",r&&`size${F(r)}`,n&&"contained",u&&"focused",l&&"filled",c&&"required"]};return ue(p,Eu,t)},Iu=q("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.size&&t[`size${F(n.size)}`],n.contained&&t.contained,n.filled&&t.filled]}})(({theme:e,ownerState:t})=>m({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${oi.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${oi.error}`]:{color:(e.vars||e).palette.error.main}},t.size==="small"&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),Au=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiFormHelperText"}),{children:i,className:a,component:l="p"}=r,u=ae(r,Mu),c=jn(),p=vr({props:r,muiFormControl:c,states:["variant","size","disabled","error","filled","focused","required"]}),h=m({},r,{component:l,contained:p.variant==="filled"||p.variant==="outlined",variant:p.variant,size:p.size,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),g=Pu(h);return R.jsx(Iu,m({as:l,ownerState:h,className:oe(g.root,a),ref:n},u,{children:i===" "?ni||(ni=R.jsx("span",{className:"notranslate",children:"​"})):i}))});function Nu(e){return ge("MuiFormLabel",e)}const qo=ve("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Ou=["children","className","color","component","disabled","error","filled","focused","required"],Vu=e=>{const{classes:t,color:n,focused:r,disabled:i,error:a,filled:l,required:u}=e,c={root:["root",`color${F(n)}`,i&&"disabled",a&&"error",l&&"filled",r&&"focused",u&&"required"],asterisk:["asterisk",a&&"error"]};return ue(c,Nu,t)},Lu=q("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>m({},t.root,e.color==="secondary"&&t.colorSecondary,e.filled&&t.filled)})(({theme:e,ownerState:t})=>m({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${qo.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${qo.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${qo.error}`]:{color:(e.vars||e).palette.error.main}})),Bu=q("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${qo.error}`]:{color:(e.vars||e).palette.error.main}})),ju=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiFormLabel"}),{children:i,className:a,component:l="label"}=r,u=ae(r,Ou),c=jn(),p=vr({props:r,muiFormControl:c,states:["color","required","focused","disabled","error","filled"]}),h=m({},r,{color:p.color||"primary",component:l,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),g=Vu(h);return R.jsxs(Lu,m({as:l,ownerState:h,className:oe(g.root,a),ref:n},u,{children:[i,p.required&&R.jsxs(Bu,{ownerState:h,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}))});function Du(e){return ge("MuiInputLabel",e)}ve("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const zu=["disableAnimation","margin","shrink","variant","className"],Uu=e=>{const{classes:t,formControl:n,size:r,shrink:i,disableAnimation:a,variant:l,required:u}=e,c={root:["root",n&&"formControl",!a&&"animated",i&&"shrink",r&&r!=="normal"&&`size${F(r)}`,l],asterisk:[u&&"asterisk"]},p=ue(c,Du,t);return m({},t,p)},Fu=q(ju,{shouldForwardProp:e=>Dn(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${qo.asterisk}`]:t.asterisk},t.root,n.formControl&&t.formControl,n.size==="small"&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,n.focused&&t.focused,t[n.variant]]}})(({theme:e,ownerState:t})=>m({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},t.variant==="filled"&&m({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&m({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),t.variant==="outlined"&&m({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),fa=d.forwardRef(function(t,n){const r=fe({name:"MuiInputLabel",props:t}),{disableAnimation:i=!1,shrink:a,className:l}=r,u=ae(r,zu),c=jn();let p=a;typeof p>"u"&&c&&(p=c.filled||c.focused||c.adornedStart);const h=vr({props:r,muiFormControl:c,states:["size","variant","required","focused"]}),g=m({},r,{disableAnimation:i,formControl:c,shrink:p,size:h.size,variant:h.variant,required:h.required,focused:h.focused}),v=Uu(g);return R.jsx(Fu,m({"data-shrink":p,ownerState:g,ref:n,className:oe(v.root,l)},u,{classes:v}))});function _u(e){return ge("MuiListItemButton",e)}const No=ve("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Wu=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Hu=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.alignItems==="flex-start"&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters]},qu=e=>{const{alignItems:t,classes:n,dense:r,disabled:i,disableGutters:a,divider:l,selected:u}=e,p=ue({root:["root",r&&"dense",!a&&"gutters",l&&"divider",i&&"disabled",t==="flex-start"&&"alignItemsFlexStart",u&&"selected"]},_u,n);return m({},n,p)},Ku=q(Jt,{shouldForwardProp:e=>Dn(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Hu})(({theme:e,ownerState:t})=>m({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${No.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${No.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${No.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${No.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${No.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),_e=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:a=!1,component:l="div",children:u,dense:c=!1,disableGutters:p=!1,divider:h=!1,focusVisibleClassName:g,selected:v=!1,className:k}=r,x=ae(r,Wu),y=d.useContext(Mn),w=d.useMemo(()=>({dense:c||y.dense||!1,alignItems:i,disableGutters:p}),[i,y.dense,c,p]),T=d.useRef(null);wo(()=>{a&&T.current&&T.current.focus()},[a]);const E=m({},r,{alignItems:i,dense:w.dense,disableGutters:p,divider:h,selected:v}),S=qu(E),$=St(T,n);return R.jsx(Mn.Provider,{value:w,children:R.jsx(Ku,m({ref:$,href:x.href||x.to,component:(x.href||x.to)&&l==="div"?"button":l,focusVisibleClassName:oe(S.focusVisible,g),ownerState:E,className:oe(S.root,k)},x,{classes:S,children:u}))})}),Gu=["className"],Qu=e=>{const{alignItems:t,classes:n}=e;return ue({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},il,n)},Ju=q("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>m({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),We=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiListItemIcon"}),{className:i}=r,a=ae(r,Gu),l=d.useContext(Mn),u=m({},r,{alignItems:l.alignItems}),c=Qu(u);return R.jsx(Ju,m({className:oe(c.root,i),ownerState:u,ref:n},a))}),Yu=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Xu=e=>{const{classes:t,inset:n,primary:r,secondary:i,dense:a}=e;return ue({root:["root",n&&"inset",a&&"dense",r&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},sl,t)},Zu=q("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Vr.primary}`]:t.primary},{[`& .${Vr.secondary}`]:t.secondary},t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})(({ownerState:e})=>m({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),He=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiListItemText"}),{children:i,className:a,disableTypography:l=!1,inset:u=!1,primary:c,primaryTypographyProps:p,secondary:h,secondaryTypographyProps:g}=r,v=ae(r,Yu),{dense:k}=d.useContext(Mn);let x=c??i,y=h;const w=m({},r,{disableTypography:l,inset:u,primary:!!x,secondary:!!y,dense:k}),T=Xu(w);return x!=null&&x.type!==vt&&!l&&(x=R.jsx(vt,m({variant:k?"body2":"body1",className:T.primary,component:p!=null&&p.variant?void 0:"span",display:"block"},p,{children:x}))),y!=null&&y.type!==vt&&!l&&(y=R.jsx(vt,m({variant:"body2",className:T.secondary,color:"text.secondary",display:"block"},g,{children:y}))),R.jsxs(Zu,m({className:oe(T.root,a),ownerState:w,ref:n},v,{children:[x,y]}))}),ep=e=>!e||!Tn(e);function tp(e){return ge("MuiSlider",e)}const At=ve("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),op=e=>{const{open:t}=e;return{offset:oe(t&&At.valueLabelOpen),circle:At.valueLabelCircle,label:At.valueLabelLabel}};function np(e){const{children:t,className:n,value:r}=e,i=op(e);return t?d.cloneElement(t,{className:oe(t.props.className)},R.jsxs(d.Fragment,{children:[t.props.children,R.jsx("span",{className:oe(i.offset,n),"aria-hidden":!0,children:R.jsx("span",{className:i.circle,children:R.jsx("span",{className:i.label,children:r})})})]})):null}const rp=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function ri(e){return e}const ip=q("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`color${F(n.color)}`],n.size!=="medium"&&t[`size${F(n.size)}`],n.marked&&t.marked,n.orientation==="vertical"&&t.vertical,n.track==="inverted"&&t.trackInverted,n.track===!1&&t.trackFalse]}})(({theme:e,ownerState:t})=>m({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},t.orientation==="horizontal"&&m({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},t.size==="small"&&{height:2},t.marked&&{marginBottom:20}),t.orientation==="vertical"&&m({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},t.size==="small"&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${At.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${At.dragging}`]:{[`& .${At.thumb}, & .${At.track}`]:{transition:"none"}}})),sp=q("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})(({ownerState:e})=>m({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),ap=q("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?Go(e.palette[t.color].main,.62):Ko(e.palette[t.color].main,.5);return m({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{border:"none"},t.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},t.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},t.track===!1&&{display:"none"},t.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n})}),lp=q("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.thumb,t[`thumbColor${F(n.color)}`],n.size!=="medium"&&t[`thumbSize${F(n.size)}`]]}})(({theme:e,ownerState:t})=>m({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{width:12,height:12},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":m({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},t.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${At.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:Ge(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${At.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:Ge(e.palette[t.color].main,.16)}`},[`&.${At.disabled}`]:{"&:hover":{boxShadow:"none"}}})),cp=q(np,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e,ownerState:t})=>m({[`&.${At.valueLabelOpen}`]:{transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(1)`},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(0)`,position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},t.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},t.orientation==="vertical"&&{right:t.size==="small"?"20px":"30px",top:"50%",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},t.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),dp=q("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Hs(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:n}=e;return[t.mark,n&&t.markActive]}})(({theme:e,ownerState:t,markActive:n})=>m({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},n&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),up=q("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Hs(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e,ownerState:t,markLabelActive:n})=>m({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},t.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},t.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},n&&{color:(e.vars||e).palette.text.primary})),pp=e=>{const{disabled:t,dragging:n,marked:r,orientation:i,track:a,classes:l,color:u,size:c}=e,p={root:["root",t&&"disabled",n&&"dragging",r&&"marked",i==="vertical"&&"vertical",a==="inverted"&&"trackInverted",a===!1&&"trackFalse",u&&`color${F(u)}`,c&&`size${F(c)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",c&&`thumbSize${F(c)}`,u&&`thumbColor${F(u)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return ue(p,tp,l)},hp=({children:e})=>e,ii=d.forwardRef(function(t,n){var r,i,a,l,u,c,p,h,g,v,k,x,y,w,T,E,S,$,M,C,I,j,O,L;const z=fe({props:t,name:"MuiSlider"}),W=Yt().direction==="rtl",{"aria-label":B,"aria-valuetext":X,"aria-labelledby":U,component:ee="span",components:le={},componentsProps:Q={},color:Ee="primary",classes:Be,className:qe,disableSwap:Se=!1,disabled:Ie=!1,getAriaLabel:H,getAriaValueText:V,marks:K=!1,max:D=100,min:ie=0,orientation:be="horizontal",size:ce="medium",step:he=1,scale:Me=ri,slotProps:Re,slots:ye,track:rt="normal",valueLabelDisplay:Ye="off",valueLabelFormat:Qe=ri}=z,Et=ae(z,rp),Pe=m({},z,{isRtl:W,max:D,min:ie,classes:Be,disabled:Ie,disableSwap:Se,orientation:be,marks:K,color:Ee,size:ce,step:he,scale:Me,track:rt,valueLabelDisplay:Ye,valueLabelFormat:Qe}),{axisProps:tt,getRootProps:ht,getHiddenInputProps:wt,getThumbProps:mt,open:_,active:J,axis:se,focusedThumbIndex:me,range:De,dragging:Fe,marks:xe,values:Ve,trackOffset:ze,trackLeap:ot,getThumbStyle:G}=Dd(m({},Pe,{rootRef:n}));Pe.marked=xe.length>0&&xe.some(Je=>Je.label),Pe.dragging=Fe,Pe.focusedThumbIndex=me;const Y=pp(Pe),$e=(r=(i=ye?.root)!=null?i:le.Root)!=null?r:ip,we=(a=(l=ye?.rail)!=null?l:le.Rail)!=null?a:sp,Ke=(u=(c=ye?.track)!=null?c:le.Track)!=null?u:ap,Xe=(p=(h=ye?.thumb)!=null?h:le.Thumb)!=null?p:lp,it=(g=(v=ye?.valueLabel)!=null?v:le.ValueLabel)!=null?g:cp,xt=(k=(x=ye?.mark)!=null?x:le.Mark)!=null?k:dp,st=(y=(w=ye?.markLabel)!=null?w:le.MarkLabel)!=null?y:up,Ut=(T=(E=ye?.input)!=null?E:le.Input)!=null?T:"input",po=(S=Re?.root)!=null?S:Q.root,cn=($=Re?.rail)!=null?$:Q.rail,ho=(M=Re?.track)!=null?M:Q.track,Ro=(C=Re?.thumb)!=null?C:Q.thumb,Eo=(I=Re?.valueLabel)!=null?I:Q.valueLabel,qn=(j=Re?.mark)!=null?j:Q.mark,Mo=(O=Re?.markLabel)!=null?O:Q.markLabel,Kn=(L=Re?.input)!=null?L:Q.input,eo=dt({elementType:$e,getSlotProps:ht,externalSlotProps:po,externalForwardedProps:Et,additionalProps:m({},ep($e)&&{as:ee}),ownerState:m({},Pe,po?.ownerState),className:[Y.root,qe]}),Po=dt({elementType:we,externalSlotProps:cn,ownerState:Pe,className:Y.rail}),ft=dt({elementType:Ke,externalSlotProps:ho,additionalProps:{style:m({},tt[se].offset(ze),tt[se].leap(ot))},ownerState:m({},Pe,ho?.ownerState),className:Y.track}),Ft=dt({elementType:Xe,getSlotProps:mt,externalSlotProps:Ro,ownerState:m({},Pe,Ro?.ownerState),className:Y.thumb}),Gn=dt({elementType:it,externalSlotProps:Eo,ownerState:m({},Pe,Eo?.ownerState),className:Y.valueLabel}),_t=dt({elementType:xt,externalSlotProps:qn,ownerState:Pe,className:Y.mark}),to=dt({elementType:st,externalSlotProps:Mo,ownerState:Pe,className:Y.markLabel}),dn=dt({elementType:Ut,getSlotProps:wt,externalSlotProps:Kn,ownerState:Pe});return R.jsxs($e,m({},eo,{children:[R.jsx(we,m({},Po)),R.jsx(Ke,m({},ft)),xe.filter(Je=>Je.value>=ie&&Je.value<=D).map((Je,Ze)=>{const mo=An(Je.value,ie,D),fo=tt[se].offset(mo);let Mt;return rt===!1?Mt=Ve.indexOf(Je.value)!==-1:Mt=rt==="normal"&&(De?Je.value>=Ve[0]&&Je.value<=Ve[Ve.length-1]:Je.value<=Ve[0])||rt==="inverted"&&(De?Je.value<=Ve[0]||Je.value>=Ve[Ve.length-1]:Je.value>=Ve[0]),R.jsxs(d.Fragment,{children:[R.jsx(xt,m({"data-index":Ze},_t,!Tn(xt)&&{markActive:Mt},{style:m({},fo,_t.style),className:oe(_t.className,Mt&&Y.markActive)})),Je.label!=null?R.jsx(st,m({"aria-hidden":!0,"data-index":Ze},to,!Tn(st)&&{markLabelActive:Mt},{style:m({},fo,to.style),className:oe(Y.markLabel,to.className,Mt&&Y.markLabelActive),children:Je.label})):null]},Ze)}),Ve.map((Je,Ze)=>{const mo=An(Je,ie,D),fo=tt[se].offset(mo),Mt=Ye==="off"?hp:it;return R.jsx(Mt,m({},!Tn(Mt)&&{valueLabelFormat:Qe,valueLabelDisplay:Ye,value:typeof Qe=="function"?Qe(Me(Je),Ze):Qe,index:Ze,open:_===Ze||J===Ze||Ye==="on",disabled:Ie},Gn,{children:R.jsx(Xe,m({"data-index":Ze},Ft,{className:oe(Y.thumb,Ft.className,J===Ze&&Y.active,me===Ze&&Y.focusVisible),style:m({},fo,G(Ze),Ft.style),children:R.jsx(Ut,m({"data-index":Ze,"aria-label":H?H(Ze):B,"aria-valuenow":Me(Je),"aria-labelledby":U,"aria-valuetext":V?V(Me(Je),Ze):X,value:Ve[Ze]},dn))}))}),Ze)})]}))});function mp(e){return ge("MuiSnackbarContent",e)}ve("MuiSnackbarContent",["root","message","action"]);const fp=["action","className","message","role"],gp=e=>{const{classes:t}=e;return ue({root:["root"],action:["action"],message:["message"]},mp,t)},vp=q(Bn,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t=e.palette.mode==="light"?.8:.98,n=qs(e.palette.background.default,t);return m({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(n),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),bp=q("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),yp=q("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),wp=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiSnackbarContent"}),{action:i,className:a,message:l,role:u="alert"}=r,c=ae(r,fp),p=r,h=gp(p);return R.jsxs(vp,m({role:u,square:!0,elevation:6,className:oe(h.root,a),ownerState:p,ref:n},c,{children:[R.jsx(bp,{className:h.message,ownerState:p,children:l}),i?R.jsx(yp,{className:h.action,ownerState:p,children:i}):null]}))});function xp(e){return ge("MuiSnackbar",e)}ve("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const $p=["onEnter","onExited"],Cp=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],kp=e=>{const{classes:t,anchorOrigin:n}=e,r={root:["root",`anchorOrigin${F(n.vertical)}${F(n.horizontal)}`]};return ue(r,xp,t)},si=q("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`anchorOrigin${F(n.anchorOrigin.vertical)}${F(n.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:t})=>{const n={left:"50%",right:"auto",transform:"translateX(-50%)"};return m({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},t.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},t.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},t.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:m({},t.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},t.anchorOrigin.horizontal==="center"&&n,t.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},t.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Sp=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiSnackbar"}),i=Yt(),a={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:l,anchorOrigin:{vertical:u,horizontal:c}={vertical:"bottom",horizontal:"left"},autoHideDuration:p=null,children:h,className:g,ClickAwayListenerProps:v,ContentProps:k,disableWindowBlurListener:x=!1,message:y,open:w,TransitionComponent:T=ir,transitionDuration:E=a,TransitionProps:{onEnter:S,onExited:$}={}}=r,M=ae(r.TransitionProps,$p),C=ae(r,Cp),I=m({},r,{anchorOrigin:{vertical:u,horizontal:c},autoHideDuration:p,disableWindowBlurListener:x,TransitionComponent:T,transitionDuration:E}),j=kp(I),{getRootProps:O,onClickAway:L}=zd(m({},I)),[z,ne]=d.useState(!0),W=dt({elementType:si,getSlotProps:O,externalForwardedProps:C,ownerState:I,additionalProps:{ref:n},className:[j.root,g]}),B=U=>{ne(!0),$&&$(U)},X=(U,ee)=>{ne(!1),S&&S(U,ee)};return!w&&z?null:R.jsx(vc,m({onClickAway:L},v,{children:R.jsx(si,m({},W,{children:R.jsx(T,m({appear:!0,in:w,timeout:E,direction:u==="top"?"down":"up",onEnter:X,onExited:B},M,{children:h||R.jsx(wp,m({message:y,action:l},k))}))}))}))}),Tp=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Rp={entering:{transform:"none"},entered:{transform:"none"}},Ep=d.forwardRef(function(t,n){const r=Yt(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:a,appear:l=!0,children:u,easing:c,in:p,onEnter:h,onEntered:g,onEntering:v,onExit:k,onExited:x,onExiting:y,style:w,timeout:T=i,TransitionComponent:E=Ws}=t,S=ae(t,Tp),$=d.useRef(null),M=St($,u.ref,n),C=B=>X=>{if(B){const U=$.current;X===void 0?B(U):B(U,X)}},I=C(v),j=C((B,X)=>{al(B);const U=En({style:w,timeout:T,easing:c},{mode:"enter"});B.style.webkitTransition=r.transitions.create("transform",U),B.style.transition=r.transitions.create("transform",U),h&&h(B,X)}),O=C(g),L=C(y),z=C(B=>{const X=En({style:w,timeout:T,easing:c},{mode:"exit"});B.style.webkitTransition=r.transitions.create("transform",X),B.style.transition=r.transitions.create("transform",X),k&&k(B)}),ne=C(x),W=B=>{a&&a($.current,B)};return R.jsx(E,m({appear:l,in:p,nodeRef:$,onEnter:j,onEntered:O,onEntering:I,onExit:z,onExited:ne,onExiting:L,addEndListener:W,timeout:T},S,{children:(B,X)=>d.cloneElement(u,m({style:m({transform:"scale(0)",visibility:B==="exited"&&!p?"hidden":void 0},Rp[B],w,u.props.style),ref:M},X))}))});function Mp(e){return ge("MuiSpeedDial",e)}const yn=ve("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),Pp=["ref"],Ip=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],Ap=["ref"],Np=e=>{const{classes:t,open:n,direction:r}=e,i={root:["root",`direction${F(r)}`],fab:["fab"],actions:["actions",!n&&"actionsClosed"]};return ue(i,Mp,t)};function Oo(e){if(e==="up"||e==="down")return"vertical";if(e==="right"||e==="left")return"horizontal"}function Op(e,t,n){return e<t?t:e>n?n:e}const Kt=32,wn=16,Vp=q("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`direction${F(n.direction)}`]]}})(({theme:e,ownerState:t})=>m({zIndex:(e.vars||e).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},t.direction==="up"&&{flexDirection:"column-reverse",[`& .${yn.actions}`]:{flexDirection:"column-reverse",marginBottom:-Kt,paddingBottom:wn+Kt}},t.direction==="down"&&{flexDirection:"column",[`& .${yn.actions}`]:{flexDirection:"column",marginTop:-Kt,paddingTop:wn+Kt}},t.direction==="left"&&{flexDirection:"row-reverse",[`& .${yn.actions}`]:{flexDirection:"row-reverse",marginRight:-Kt,paddingRight:wn+Kt}},t.direction==="right"&&{flexDirection:"row",[`& .${yn.actions}`]:{flexDirection:"row",marginLeft:-Kt,paddingLeft:wn+Kt}})),Lp=q(ha,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(e,t)=>t.fab})(()=>({pointerEvents:"auto"})),Bp=q("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.actions,!n.open&&t.actionsClosed]}})(({ownerState:e})=>m({display:"flex",pointerEvents:"auto"},!e.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})),jp=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiSpeedDial"}),i=Yt(),a={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{ariaLabel:l,FabProps:{ref:u}={},children:c,className:p,direction:h="up",hidden:g=!1,icon:v,onBlur:k,onClose:x,onFocus:y,onKeyDown:w,onMouseEnter:T,onMouseLeave:E,onOpen:S,open:$,TransitionComponent:M=Ep,transitionDuration:C=a,TransitionProps:I}=r,j=ae(r.FabProps,Pp),O=ae(r,Ip),[L,z]=Xo({controlled:$,default:!1,name:"SpeedDial",state:"open"}),ne=m({},r,{open:L,direction:h}),W=Np(ne),B=d.useRef();d.useEffect(()=>()=>{clearTimeout(B.current)},[]);const X=d.useRef(0),U=d.useRef(),ee=d.useRef([]);ee.current=[ee.current[0]];const le=d.useCallback(D=>{ee.current[0]=D},[]),Q=St(u,le),Ee=(D,ie)=>be=>{ee.current[D+1]=be,ie&&ie(be)},Be=D=>{w&&w(D);const ie=D.key.replace("Arrow","").toLowerCase(),{current:be=ie}=U;if(D.key==="Escape"){z(!1),ee.current[0].focus(),x&&x(D,"escapeKeyDown");return}if(Oo(ie)===Oo(be)&&Oo(ie)!==void 0){D.preventDefault();const ce=ie===be?1:-1,he=Op(X.current+ce,0,ee.current.length-1);ee.current[he].focus(),X.current=he,U.current=be}};d.useEffect(()=>{L||(X.current=0,U.current=void 0)},[L]);const qe=D=>{D.type==="mouseleave"&&E&&E(D),D.type==="blur"&&k&&k(D),clearTimeout(B.current),D.type==="blur"?B.current=setTimeout(()=>{z(!1),x&&x(D,"blur")}):(z(!1),x&&x(D,"mouseLeave"))},Se=D=>{j.onClick&&j.onClick(D),clearTimeout(B.current),L?(z(!1),x&&x(D,"toggle")):(z(!0),S&&S(D,"toggle"))},Ie=D=>{D.type==="mouseenter"&&T&&T(D),D.type==="focus"&&y&&y(D),clearTimeout(B.current),L||(B.current=setTimeout(()=>{z(!0),S&&S(D,{focus:"focus",mouseenter:"mouseEnter"}[D.type])}))},H=l.replace(/^[^a-z]+|[^\w:.-]+/gi,""),V=d.Children.toArray(c).filter(D=>d.isValidElement(D)),K=V.map((D,ie)=>{const be=D.props,{FabProps:{ref:ce}={},tooltipPlacement:he}=be,Me=ae(be.FabProps,Ap),Re=he||(Oo(h)==="vertical"?"left":"top");return d.cloneElement(D,{FabProps:m({},Me,{ref:Ee(ie,ce)}),delay:30*(L?ie:V.length-ie),open:L,tooltipPlacement:Re,id:`${H}-action-${ie}`})});return R.jsxs(Vp,m({className:oe(W.root,p),ref:n,role:"presentation",onKeyDown:Be,onBlur:qe,onFocus:Ie,onMouseEnter:Ie,onMouseLeave:qe,ownerState:ne},O,{children:[R.jsx(M,m({in:!g,timeout:C,unmountOnExit:!0},I,{children:R.jsx(Lp,m({color:"primary","aria-label":l,"aria-haspopup":"true","aria-expanded":L,"aria-controls":`${H}-actions`},j,{onClick:Se,className:oe(W.fab,j.className),ref:Q,ownerState:ne,children:d.isValidElement(v)&&yo(v,["SpeedDialIcon"])?d.cloneElement(v,{open:L}):v}))})),R.jsx(Bp,{id:`${H}-actions`,role:"menu","aria-orientation":Oo(h),className:oe(W.actions,!L&&W.actionsClosed),ownerState:ne,children:K})]}))});function Dp(e){return ge("MuiTooltip",e)}const Qt=ve("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),zp=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Up(e){return Math.round(e*1e5)/1e5}const Fp=e=>{const{classes:t,disableInteractive:n,arrow:r,touch:i,placement:a}=e,l={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",i&&"touch",`tooltipPlacement${F(a.split("-")[0])}`],arrow:["arrow"]};return ue(l,Dp,t)},_p=q(ua,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})(({theme:e,ownerState:t,open:n})=>m({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${Qt.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Qt.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Qt.arrow}`]:m({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${Qt.arrow}`]:m({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Wp=q("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${F(n.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>m({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Ge(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Up(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${Qt.popper}[data-popper-placement*="left"] &`]:m({transformOrigin:"right center"},t.isRtl?m({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):m({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${Qt.popper}[data-popper-placement*="right"] &`]:m({transformOrigin:"left center"},t.isRtl?m({marginRight:"14px"},t.touch&&{marginRight:"24px"}):m({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${Qt.popper}[data-popper-placement*="top"] &`]:m({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${Qt.popper}[data-popper-placement*="bottom"] &`]:m({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),Hp=q("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Ge(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let xn=!1,Yn=null,Vo={x:0,y:0};function $n(e,t){return n=>{t&&t(n),e(n)}}const qp=d.forwardRef(function(t,n){var r,i,a,l,u,c,p,h,g,v,k,x,y,w,T,E,S,$,M;const C=fe({props:t,name:"MuiTooltip"}),{arrow:I=!1,children:j,components:O={},componentsProps:L={},describeChild:z=!1,disableFocusListener:ne=!1,disableHoverListener:W=!1,disableInteractive:B=!1,disableTouchListener:X=!1,enterDelay:U=100,enterNextDelay:ee=0,enterTouchDelay:le=700,followCursor:Q=!1,id:Ee,leaveDelay:Be=0,leaveTouchDelay:qe=1500,onClose:Se,onOpen:Ie,open:H,placement:V="bottom",PopperComponent:K,PopperProps:D={},slotProps:ie={},slots:be={},title:ce,TransitionComponent:he=ir,TransitionProps:Me}=C,Re=ae(C,zp),ye=d.isValidElement(j)?j:R.jsx("span",{children:j}),rt=Yt(),Ye=rt.direction==="rtl",[Qe,Et]=d.useState(),[Pe,tt]=d.useState(null),ht=d.useRef(!1),wt=B||Q,mt=d.useRef(),_=d.useRef(),J=d.useRef(),se=d.useRef(),[me,De]=Xo({controlled:H,default:!1,name:"Tooltip",state:"open"});let Fe=me;const xe=fr(Ee),Ve=d.useRef(),ze=d.useCallback(()=>{Ve.current!==void 0&&(document.body.style.WebkitUserSelect=Ve.current,Ve.current=void 0),clearTimeout(se.current)},[]);d.useEffect(()=>()=>{clearTimeout(mt.current),clearTimeout(_.current),clearTimeout(J.current),ze()},[ze]);const ot=Ce=>{clearTimeout(Yn),xn=!0,De(!0),Ie&&!Fe&&Ie(Ce)},G=Ot(Ce=>{clearTimeout(Yn),Yn=setTimeout(()=>{xn=!1},800+Be),De(!1),Se&&Fe&&Se(Ce),clearTimeout(mt.current),mt.current=setTimeout(()=>{ht.current=!1},rt.transitions.duration.shortest)}),Y=Ce=>{ht.current&&Ce.type!=="touchstart"||(Qe&&Qe.removeAttribute("title"),clearTimeout(_.current),clearTimeout(J.current),U||xn&&ee?_.current=setTimeout(()=>{ot(Ce)},xn?ee:U):ot(Ce))},$e=Ce=>{clearTimeout(_.current),clearTimeout(J.current),J.current=setTimeout(()=>{G(Ce)},Be)},{isFocusVisibleRef:we,onBlur:Ke,onFocus:Xe,ref:it}=gr(),[,xt]=d.useState(!1),st=Ce=>{Ke(Ce),we.current===!1&&(xt(!1),$e(Ce))},Ut=Ce=>{Qe||Et(Ce.currentTarget),Xe(Ce),we.current===!0&&(xt(!0),Y(Ce))},po=Ce=>{ht.current=!0;const gt=ye.props;gt.onTouchStart&&gt.onTouchStart(Ce)},cn=Y,ho=$e,Ro=Ce=>{po(Ce),clearTimeout(J.current),clearTimeout(mt.current),ze(),Ve.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",se.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Ve.current,Y(Ce)},le)},Eo=Ce=>{ye.props.onTouchEnd&&ye.props.onTouchEnd(Ce),ze(),clearTimeout(J.current),J.current=setTimeout(()=>{G(Ce)},qe)};d.useEffect(()=>{if(!Fe)return;function Ce(gt){(gt.key==="Escape"||gt.key==="Esc")&&G(gt)}return document.addEventListener("keydown",Ce),()=>{document.removeEventListener("keydown",Ce)}},[G,Fe]);const qn=St(ye.ref,it,Et,n);!ce&&ce!==0&&(Fe=!1);const Mo=d.useRef(),Kn=Ce=>{const gt=ye.props;gt.onMouseMove&&gt.onMouseMove(Ce),Vo={x:Ce.clientX,y:Ce.clientY},Mo.current&&Mo.current.update()},eo={},Po=typeof ce=="string";z?(eo.title=!Fe&&Po&&!W?ce:null,eo["aria-describedby"]=Fe?xe:null):(eo["aria-label"]=Po?ce:null,eo["aria-labelledby"]=Fe&&!Po?xe:null);const ft=m({},eo,Re,ye.props,{className:oe(Re.className,ye.props.className),onTouchStart:po,ref:qn},Q?{onMouseMove:Kn}:{}),Ft={};X||(ft.onTouchStart=Ro,ft.onTouchEnd=Eo),W||(ft.onMouseOver=$n(cn,ft.onMouseOver),ft.onMouseLeave=$n(ho,ft.onMouseLeave),wt||(Ft.onMouseOver=cn,Ft.onMouseLeave=ho)),ne||(ft.onFocus=$n(Ut,ft.onFocus),ft.onBlur=$n(st,ft.onBlur),wt||(Ft.onFocus=Ut,Ft.onBlur=st));const Gn=d.useMemo(()=>{var Ce;let gt=[{name:"arrow",enabled:!!Pe,options:{element:Pe,padding:4}}];return(Ce=D.popperOptions)!=null&&Ce.modifiers&&(gt=gt.concat(D.popperOptions.modifiers)),m({},D.popperOptions,{modifiers:gt})},[Pe,D]),_t=m({},C,{isRtl:Ye,arrow:I,disableInteractive:wt,placement:V,PopperComponentProp:K,touch:ht.current}),to=Fp(_t),dn=(r=(i=be.popper)!=null?i:O.Popper)!=null?r:_p,Je=(a=(l=(u=be.transition)!=null?u:O.Transition)!=null?l:he)!=null?a:ir,Ze=(c=(p=be.tooltip)!=null?p:O.Tooltip)!=null?c:Wp,mo=(h=(g=be.arrow)!=null?g:O.Arrow)!=null?h:Hp,fo=un(dn,m({},D,(v=ie.popper)!=null?v:L.popper,{className:oe(to.popper,D?.className,(k=(x=ie.popper)!=null?x:L.popper)==null?void 0:k.className)}),_t),Mt=un(Je,m({},Me,(y=ie.transition)!=null?y:L.transition),_t),_a=un(Ze,m({},(w=ie.tooltip)!=null?w:L.tooltip,{className:oe(to.tooltip,(T=(E=ie.tooltip)!=null?E:L.tooltip)==null?void 0:T.className)}),_t),Wa=un(mo,m({},(S=ie.arrow)!=null?S:L.arrow,{className:oe(to.arrow,($=(M=ie.arrow)!=null?M:L.arrow)==null?void 0:$.className)}),_t);return R.jsxs(d.Fragment,{children:[d.cloneElement(ye,ft),R.jsx(dn,m({as:K??ua,placement:V,anchorEl:Q?{getBoundingClientRect:()=>({top:Vo.y,left:Vo.x,right:Vo.x,bottom:Vo.y,width:0,height:0})}:Qe,popperRef:Mo,open:Qe?Fe:!1,id:xe,transition:!0},Ft,fo,{popperOptions:Gn,children:({TransitionProps:Ce})=>R.jsx(Je,m({timeout:rt.transitions.duration.shorter},Ce,Mt,{children:R.jsxs(Ze,m({},_a,{children:[ce,I?R.jsx(mo,m({},Wa,{ref:tt})):null]}))}))}))]})});function Kp(e){return ge("MuiSpeedDialAction",e)}const Gp=ve("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),Qp=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],Jp=e=>{const{open:t,tooltipPlacement:n,classes:r}=e,i={fab:["fab",!t&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${F(n)}`,!t&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return ue(i,Kp,r)},Yp=q(ha,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.fab,!n.open&&t.fabClosed]}})(({theme:e,ownerState:t})=>m({margin:8,color:(e.vars||e).palette.text.secondary,backgroundColor:(e.vars||e).palette.background.paper,"&:hover":{backgroundColor:e.vars?e.vars.palette.SpeedDialAction.fabHoverBg:qs(e.palette.background.paper,.15)},transition:`${e.transitions.create("transform",{duration:e.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!t.open&&{opacity:0,transform:"scale(0)"})),Xp=q("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.staticTooltip,!n.open&&t.staticTooltipClosed,t[`tooltipPlacement${F(n.tooltipPlacement)}`]]}})(({theme:e,ownerState:t})=>({position:"relative",display:"flex",alignItems:"center",[`& .${Gp.staticTooltipLabel}`]:m({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.shorter}),opacity:1},!t.open&&{opacity:0,transform:"scale(0.5)"},t.tooltipPlacement==="left"&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},t.tooltipPlacement==="right"&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})})),Zp=q("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(e,t)=>t.staticTooltipLabel})(({theme:e})=>m({position:"absolute"},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.paper,borderRadius:(e.vars||e).shape.borderRadius,boxShadow:(e.vars||e).shadows[1],color:(e.vars||e).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})),eh=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiSpeedDialAction"}),{className:i,delay:a=0,FabProps:l={},icon:u,id:c,open:p,TooltipClasses:h,tooltipOpen:g=!1,tooltipPlacement:v="left",tooltipTitle:k}=r,x=ae(r,Qp),y=m({},r,{tooltipPlacement:v}),w=Jp(y),[T,E]=d.useState(g),S=()=>{E(!1)},$=()=>{E(!0)},M={transitionDelay:`${a}ms`},C=R.jsx(Yp,m({size:"small",className:oe(w.fab,i),tabIndex:-1,role:"menuitem",ownerState:y},l,{style:m({},M,l.style),children:u}));return g?R.jsxs(Xp,m({id:c,ref:n,className:w.staticTooltip,ownerState:y},x,{children:[R.jsx(Zp,{style:M,id:`${c}-label`,className:w.staticTooltipLabel,ownerState:y,children:k}),d.cloneElement(C,{"aria-labelledby":`${c}-label`})]})):(!p&&T&&E(!1),R.jsx(qp,m({id:c,ref:n,title:k,placement:v,onClose:S,onOpen:$,open:p&&T,classes:h},x,{children:C})))}),th=je(R.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function oh(e){return ge("MuiSpeedDialIcon",e)}const oo=ve("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),nh=["className","icon","open","openIcon"],rh=e=>{const{classes:t,open:n,openIcon:r}=e;return ue({root:["root"],icon:["icon",n&&"iconOpen",r&&n&&"iconWithOpenIconOpen"],openIcon:["openIcon",n&&"openIconOpen"]},oh,t)},ih=q("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${oo.icon}`]:t.icon},{[`& .${oo.icon}`]:n.open&&t.iconOpen},{[`& .${oo.icon}`]:n.open&&n.openIcon&&t.iconWithOpenIconOpen},{[`& .${oo.openIcon}`]:t.openIcon},{[`& .${oo.openIcon}`]:n.open&&t.openIconOpen},t.root]}})(({theme:e,ownerState:t})=>({height:24,[`& .${oo.icon}`]:m({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.short})},t.open&&m({transform:"rotate(45deg)"},t.openIcon&&{opacity:0})),[`& .${oo.openIcon}`]:m({position:"absolute",transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},t.open&&{transform:"rotate(0deg)",opacity:1})})),ga=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiSpeedDialIcon"}),{className:i,icon:a,openIcon:l}=r,u=ae(r,nh),c=r,p=rh(c);function h(g,v){return d.isValidElement(g)?d.cloneElement(g,{className:v}):g}return R.jsxs(ih,m({className:oe(p.root,i),ref:n,ownerState:c},u,{children:[l?h(l,p.openIcon):null,a?h(a,p.icon):R.jsx(th,{className:p.icon})]}))});ga.muiName="SpeedDialIcon";function sh(e){return ge("MuiSwitch",e)}const lt=ve("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),ah=["className","color","edge","size","sx"],lh=e=>{const{classes:t,edge:n,size:r,color:i,checked:a,disabled:l}=e,u={root:["root",n&&`edge${F(n)}`,`size${F(r)}`],switchBase:["switchBase",`color${F(i)}`,a&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=ue(u,sh,t);return m({},t,c)},ch=q("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.edge&&t[`edge${F(n.edge)}`],t[`size${F(n.size)}`]]}})(({ownerState:e})=>m({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${lt.thumb}`]:{width:16,height:16},[`& .${lt.switchBase}`]:{padding:4,[`&.${lt.checked}`]:{transform:"translateX(16px)"}}})),dh=q(bu,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.switchBase,{[`& .${lt.input}`]:t.input},n.color!=="default"&&t[`color${F(n.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${lt.checked}`]:{transform:"translateX(20px)"},[`&.${lt.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${lt.checked} + .${lt.track}`]:{opacity:.5},[`&.${lt.disabled} + .${lt.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${lt.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>m({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Ge(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${lt.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ge(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${lt.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${e.palette.mode==="light"?Go(e.palette[t.color].main,.62):Ko(e.palette[t.color].main,.55)}`}},[`&.${lt.checked} + .${lt.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}})),uh=q("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),ph=q("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Pr=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiSwitch"}),{className:i,color:a="primary",edge:l=!1,size:u="medium",sx:c}=r,p=ae(r,ah),h=m({},r,{color:a,edge:l,size:u}),g=lh(h),v=R.jsx(ph,{className:g.thumb,ownerState:h});return R.jsxs(ch,{className:oe(g.root,i),sx:c,ownerState:h,children:[R.jsx(dh,m({type:"checkbox",icon:v,checkedIcon:v,ref:n,ownerState:h},p,{classes:m({},g,{root:g.switchBase})})),R.jsx(uh,{className:g.track,ownerState:h})]})});function hh(e){return ge("MuiTab",e)}const no=ve("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),mh=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],fh=e=>{const{classes:t,textColor:n,fullWidth:r,wrapped:i,icon:a,label:l,selected:u,disabled:c}=e,p={root:["root",a&&l&&"labelIcon",`textColor${F(n)}`,r&&"fullWidth",i&&"wrapped",u&&"selected",c&&"disabled"],iconWrapper:["iconWrapper"]};return ue(p,hh,t)},gh=q(Jt,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.label&&n.icon&&t.labelIcon,t[`textColor${F(n.textColor)}`],n.fullWidth&&t.fullWidth,n.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>m({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${no.iconWrapper}`]:m({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${no.selected}`]:{opacity:1},[`&.${no.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${no.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${no.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${no.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${no.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),Bt=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTab"}),{className:i,disabled:a=!1,disableFocusRipple:l=!1,fullWidth:u,icon:c,iconPosition:p="top",indicator:h,label:g,onChange:v,onClick:k,onFocus:x,selected:y,selectionFollowsFocus:w,textColor:T="inherit",value:E,wrapped:S=!1}=r,$=ae(r,mh),M=m({},r,{disabled:a,disableFocusRipple:l,selected:y,icon:!!c,iconPosition:p,label:!!g,fullWidth:u,textColor:T,wrapped:S}),C=fh(M),I=c&&g&&d.isValidElement(c)?d.cloneElement(c,{className:oe(C.iconWrapper,c.props.className)}):c,j=L=>{!y&&v&&v(L,E),k&&k(L)},O=L=>{w&&!y&&v&&v(L,E),x&&x(L)};return R.jsxs(gh,m({focusRipple:!l,className:oe(C.root,i),ref:n,role:"tab","aria-selected":y,disabled:a,onClick:j,onFocus:O,ownerState:M,tabIndex:y?0:-1},$,{children:[p==="top"||p==="start"?R.jsxs(d.Fragment,{children:[I,g]}):R.jsxs(d.Fragment,{children:[g,I]}),h]}))}),va=d.createContext();function vh(e){return ge("MuiTable",e)}ve("MuiTable",["root","stickyHeader"]);const bh=["className","component","padding","size","stickyHeader"],yh=e=>{const{classes:t,stickyHeader:n}=e;return ue({root:["root",n&&"stickyHeader"]},vh,t)},wh=q("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>m({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":m({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),ai="table",ba=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTable"}),{className:i,component:a=ai,padding:l="normal",size:u="medium",stickyHeader:c=!1}=r,p=ae(r,bh),h=m({},r,{component:a,padding:l,size:u,stickyHeader:c}),g=yh(h),v=d.useMemo(()=>({padding:l,size:u,stickyHeader:c}),[l,u,c]);return R.jsx(va.Provider,{value:v,children:R.jsx(wh,m({as:a,role:a===ai?null:"table",ref:n,className:oe(g.root,i),ownerState:h},p))})}),_n=d.createContext();function xh(e){return ge("MuiTableBody",e)}ve("MuiTableBody",["root"]);const $h=["className","component"],Ch=e=>{const{classes:t}=e;return ue({root:["root"]},xh,t)},kh=q("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),Sh={variant:"body"},li="tbody",ya=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTableBody"}),{className:i,component:a=li}=r,l=ae(r,$h),u=m({},r,{component:a}),c=Ch(u);return R.jsx(_n.Provider,{value:Sh,children:R.jsx(kh,m({className:oe(c.root,i),as:a,ref:n,role:a===li?null:"rowgroup",ownerState:u},l))})});function Th(e){return ge("MuiTableCell",e)}const Rh=ve("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Eh=["align","className","component","padding","scope","size","sortDirection","variant"],Mh=e=>{const{classes:t,variant:n,align:r,padding:i,size:a,stickyHeader:l}=e,u={root:["root",n,l&&"stickyHeader",r!=="inherit"&&`align${F(r)}`,i!=="normal"&&`padding${F(i)}`,`size${F(a)}`]};return ue(u,Th,t)},Ph=q("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${F(n.size)}`],n.padding!=="normal"&&t[`padding${F(n.padding)}`],n.align!=="inherit"&&t[`align${F(n.align)}`],n.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>m({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Go(Ge(e.palette.divider,1),.88):Ko(Ge(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${Rh.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),et=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTableCell"}),{align:i="inherit",className:a,component:l,padding:u,scope:c,size:p,sortDirection:h,variant:g}=r,v=ae(r,Eh),k=d.useContext(va),x=d.useContext(_n),y=x&&x.variant==="head";let w;l?w=l:w=y?"th":"td";let T=c;w==="td"?T=void 0:!T&&y&&(T="col");const E=g||x&&x.variant,S=m({},r,{align:i,component:w,padding:u||(k&&k.padding?k.padding:"normal"),size:p||(k&&k.size?k.size:"medium"),sortDirection:h,stickyHeader:E==="head"&&k&&k.stickyHeader,variant:E}),$=Mh(S);let M=null;return h&&(M=h==="asc"?"ascending":"descending"),R.jsx(Ph,m({as:w,ref:n,className:oe($.root,a),"aria-sort":M,scope:T,ownerState:S},v))});function Ih(e){return ge("MuiTableContainer",e)}ve("MuiTableContainer",["root"]);const Ah=["className","component"],Nh=e=>{const{classes:t}=e;return ue({root:["root"]},Ih,t)},Oh=q("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Vh=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTableContainer"}),{className:i,component:a="div"}=r,l=ae(r,Ah),u=m({},r,{component:a}),c=Nh(u);return R.jsx(Oh,m({ref:n,as:a,className:oe(c.root,i),ownerState:u},l))});function Lh(e){return ge("MuiTableHead",e)}ve("MuiTableHead",["root"]);const Bh=["className","component"],jh=e=>{const{classes:t}=e;return ue({root:["root"]},Lh,t)},Dh=q("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),zh={variant:"head"},ci="thead",wa=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTableHead"}),{className:i,component:a=ci}=r,l=ae(r,Bh),u=m({},r,{component:a}),c=jh(u);return R.jsx(_n.Provider,{value:zh,children:R.jsx(Dh,m({as:a,className:oe(c.root,i),ref:n,role:a===ci?null:"rowgroup",ownerState:u},l))})}),Uh=je(R.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Fh=je(R.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function _h(e){return ge("MuiTableRow",e)}const di=ve("MuiTableRow",["root","selected","hover","head","footer"]),Wh=["className","component","hover","selected"],Hh=e=>{const{classes:t,selected:n,hover:r,head:i,footer:a}=e;return ue({root:["root",n&&"selected",r&&"hover",i&&"head",a&&"footer"]},_h,t)},qh=q("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.head&&t.head,n.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${di.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${di.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),ui="tr",Fo=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTableRow"}),{className:i,component:a=ui,hover:l=!1,selected:u=!1}=r,c=ae(r,Wh),p=d.useContext(_n),h=m({},r,{component:a,hover:l,selected:u,head:p&&p.variant==="head",footer:p&&p.variant==="footer"}),g=Hh(h);return R.jsx(qh,m({as:a,ref:n,className:oe(g.root,i),role:a===ui?null:"row",ownerState:h},c))});function Kh(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Gh(e,t,n,r={},i=()=>{}){const{ease:a=Kh,duration:l=300}=r;let u=null;const c=t[e];let p=!1;const h=()=>{p=!0},g=v=>{if(p){i(new Error("Animation cancelled"));return}u===null&&(u=v);const k=Math.min(1,(v-u)/l);if(t[e]=a(k)*(n-c)+c,k>=1){requestAnimationFrame(()=>{i(null)});return}requestAnimationFrame(g)};return c===n?(i(new Error("Element already at target position")),h):(requestAnimationFrame(g),h)}const Qh=["onChange"],Jh={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Yh(e){const{onChange:t}=e,n=ae(e,Qh),r=d.useRef(),i=d.useRef(null),a=()=>{r.current=i.current.offsetHeight-i.current.clientHeight};return wo(()=>{const l=hr(()=>{const c=r.current;a(),c!==r.current&&t(r.current)}),u=mr(i.current);return u.addEventListener("resize",l),()=>{l.clear(),u.removeEventListener("resize",l)}},[t]),d.useEffect(()=>{a(),t(r.current)},[t]),R.jsx("div",m({style:Jh,ref:i},n))}function Xh(e){return ge("MuiTabScrollButton",e)}const Zh=ve("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),em=["className","slots","slotProps","direction","orientation","disabled"],tm=e=>{const{classes:t,orientation:n,disabled:r}=e;return ue({root:["root",n,r&&"disabled"]},Xh,t)},om=q(Jt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.orientation&&t[n.orientation]]}})(({ownerState:e})=>m({width:40,flexShrink:0,opacity:.8,[`&.${Zh.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),nm=d.forwardRef(function(t,n){var r,i;const a=fe({props:t,name:"MuiTabScrollButton"}),{className:l,slots:u={},slotProps:c={},direction:p}=a,h=ae(a,em),v=Yt().direction==="rtl",k=m({isRtl:v},a),x=tm(k),y=(r=u.StartScrollButtonIcon)!=null?r:Uh,w=(i=u.EndScrollButtonIcon)!=null?i:Fh,T=dt({elementType:y,externalSlotProps:c.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:k}),E=dt({elementType:w,externalSlotProps:c.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:k});return R.jsx(om,m({component:"div",className:oe(x.root,l),ref:n,role:null,ownerState:k,tabIndex:null},h,{children:p==="left"?R.jsx(y,m({},T)):R.jsx(w,m({},E))}))});function rm(e){return ge("MuiTabs",e)}const Xn=ve("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),im=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],pi=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,hi=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,Cn=(e,t,n)=>{let r=!1,i=n(e,t);for(;i;){if(i===e.firstChild){if(r)return;r=!0}const a=i.disabled||i.getAttribute("aria-disabled")==="true";if(!i.hasAttribute("tabindex")||a)i=n(e,i);else{i.focus();return}}},sm=e=>{const{vertical:t,fixed:n,hideScrollbar:r,scrollableX:i,scrollableY:a,centered:l,scrollButtonsHideMobile:u,classes:c}=e;return ue({root:["root",t&&"vertical"],scroller:["scroller",n&&"fixed",r&&"hideScrollbar",i&&"scrollableX",a&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",l&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",u&&"scrollButtonsHideMobile"],scrollableX:[i&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]},rm,c)},am=q("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Xn.scrollButtons}`]:t.scrollButtons},{[`& .${Xn.scrollButtons}`]:n.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,n.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>m({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${Xn.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),lm=q("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.scroller,n.fixed&&t.fixed,n.hideScrollbar&&t.hideScrollbar,n.scrollableX&&t.scrollableX,n.scrollableY&&t.scrollableY]}})(({ownerState:e})=>m({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),cm=q("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.flexContainer,n.vertical&&t.flexContainerVertical,n.centered&&t.centered]}})(({ownerState:e})=>m({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),dm=q("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>m({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),um=q(Yh)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),mi={},xa=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTabs"}),i=Yt(),a=i.direction==="rtl",{"aria-label":l,"aria-labelledby":u,action:c,centered:p=!1,children:h,className:g,component:v="div",allowScrollButtonsMobile:k=!1,indicatorColor:x="primary",onChange:y,orientation:w="horizontal",ScrollButtonComponent:T=nm,scrollButtons:E="auto",selectionFollowsFocus:S,slots:$={},slotProps:M={},TabIndicatorProps:C={},TabScrollButtonProps:I={},textColor:j="primary",value:O,variant:L="standard",visibleScrollbar:z=!1}=r,ne=ae(r,im),W=L==="scrollable",B=w==="vertical",X=B?"scrollTop":"scrollLeft",U=B?"top":"left",ee=B?"bottom":"right",le=B?"clientHeight":"clientWidth",Q=B?"height":"width",Ee=m({},r,{component:v,allowScrollButtonsMobile:k,indicatorColor:x,orientation:w,vertical:B,scrollButtons:E,textColor:j,variant:L,visibleScrollbar:z,fixed:!W,hideScrollbar:W&&!z,scrollableX:W&&!B,scrollableY:W&&B,centered:p&&!W,scrollButtonsHideMobile:!k}),Be=sm(Ee),qe=dt({elementType:$.StartScrollButtonIcon,externalSlotProps:M.startScrollButtonIcon,ownerState:Ee}),Se=dt({elementType:$.EndScrollButtonIcon,externalSlotProps:M.endScrollButtonIcon,ownerState:Ee}),[Ie,H]=d.useState(!1),[V,K]=d.useState(mi),[D,ie]=d.useState(!1),[be,ce]=d.useState(!1),[he,Me]=d.useState(!1),[Re,ye]=d.useState({overflow:"hidden",scrollbarWidth:0}),rt=new Map,Ye=d.useRef(null),Qe=d.useRef(null),Et=()=>{const G=Ye.current;let Y;if(G){const we=G.getBoundingClientRect();Y={clientWidth:G.clientWidth,scrollLeft:G.scrollLeft,scrollTop:G.scrollTop,scrollLeftNormalized:Ml(G,i.direction),scrollWidth:G.scrollWidth,top:we.top,bottom:we.bottom,left:we.left,right:we.right}}let $e;if(G&&O!==!1){const we=Qe.current.children;if(we.length>0){const Ke=we[rt.get(O)];$e=Ke?Ke.getBoundingClientRect():null}}return{tabsMeta:Y,tabMeta:$e}},Pe=Ot(()=>{const{tabsMeta:G,tabMeta:Y}=Et();let $e=0,we;if(B)we="top",Y&&G&&($e=Y.top-G.top+G.scrollTop);else if(we=a?"right":"left",Y&&G){const Xe=a?G.scrollLeftNormalized+G.clientWidth-G.scrollWidth:G.scrollLeft;$e=(a?-1:1)*(Y[we]-G[we]+Xe)}const Ke={[we]:$e,[Q]:Y?Y[Q]:0};if(isNaN(V[we])||isNaN(V[Q]))K(Ke);else{const Xe=Math.abs(V[we]-Ke[we]),it=Math.abs(V[Q]-Ke[Q]);(Xe>=1||it>=1)&&K(Ke)}}),tt=(G,{animation:Y=!0}={})=>{Y?Gh(X,Ye.current,G,{duration:i.transitions.duration.standard}):Ye.current[X]=G},ht=G=>{let Y=Ye.current[X];B?Y+=G:(Y+=G*(a?-1:1),Y*=a&&ea()==="reverse"?-1:1),tt(Y)},wt=()=>{const G=Ye.current[le];let Y=0;const $e=Array.from(Qe.current.children);for(let we=0;we<$e.length;we+=1){const Ke=$e[we];if(Y+Ke[le]>G){we===0&&(Y=G);break}Y+=Ke[le]}return Y},mt=()=>{ht(-1*wt())},_=()=>{ht(wt())},J=d.useCallback(G=>{ye({overflow:null,scrollbarWidth:G})},[]),se=()=>{const G={};G.scrollbarSizeListener=W?R.jsx(um,{onChange:J,className:oe(Be.scrollableX,Be.hideScrollbar)}):null;const $e=W&&(E==="auto"&&(D||be)||E===!0);return G.scrollButtonStart=$e?R.jsx(T,m({slots:{StartScrollButtonIcon:$.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:qe},orientation:w,direction:a?"right":"left",onClick:mt,disabled:!D},I,{className:oe(Be.scrollButtons,I.className)})):null,G.scrollButtonEnd=$e?R.jsx(T,m({slots:{EndScrollButtonIcon:$.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Se},orientation:w,direction:a?"left":"right",onClick:_,disabled:!be},I,{className:oe(Be.scrollButtons,I.className)})):null,G},me=Ot(G=>{const{tabsMeta:Y,tabMeta:$e}=Et();if(!(!$e||!Y)){if($e[U]<Y[U]){const we=Y[X]+($e[U]-Y[U]);tt(we,{animation:G})}else if($e[ee]>Y[ee]){const we=Y[X]+($e[ee]-Y[ee]);tt(we,{animation:G})}}}),De=Ot(()=>{W&&E!==!1&&Me(!he)});d.useEffect(()=>{const G=hr(()=>{Ye.current&&Pe()});let Y;const $e=Xe=>{Xe.forEach(it=>{it.removedNodes.forEach(xt=>{var st;(st=Y)==null||st.unobserve(xt)}),it.addedNodes.forEach(xt=>{var st;(st=Y)==null||st.observe(xt)})}),G(),De()},we=mr(Ye.current);we.addEventListener("resize",G);let Ke;return typeof ResizeObserver<"u"&&(Y=new ResizeObserver(G),Array.from(Qe.current.children).forEach(Xe=>{Y.observe(Xe)})),typeof MutationObserver<"u"&&(Ke=new MutationObserver($e),Ke.observe(Qe.current,{childList:!0})),()=>{var Xe,it;G.clear(),we.removeEventListener("resize",G),(Xe=Ke)==null||Xe.disconnect(),(it=Y)==null||it.disconnect()}},[Pe,De]),d.useEffect(()=>{const G=Array.from(Qe.current.children),Y=G.length;if(typeof IntersectionObserver<"u"&&Y>0&&W&&E!==!1){const $e=G[0],we=G[Y-1],Ke={root:Ye.current,threshold:.99},Xe=Ut=>{ie(!Ut[0].isIntersecting)},it=new IntersectionObserver(Xe,Ke);it.observe($e);const xt=Ut=>{ce(!Ut[0].isIntersecting)},st=new IntersectionObserver(xt,Ke);return st.observe(we),()=>{it.disconnect(),st.disconnect()}}},[W,E,he,h?.length]),d.useEffect(()=>{H(!0)},[]),d.useEffect(()=>{Pe()}),d.useEffect(()=>{me(mi!==V)},[me,V]),d.useImperativeHandle(c,()=>({updateIndicator:Pe,updateScrollButtons:De}),[Pe,De]);const Fe=R.jsx(dm,m({},C,{className:oe(Be.indicator,C.className),ownerState:Ee,style:m({},V,C.style)}));let xe=0;const Ve=d.Children.map(h,G=>{if(!d.isValidElement(G))return null;const Y=G.props.value===void 0?xe:G.props.value;rt.set(Y,xe);const $e=Y===O;return xe+=1,d.cloneElement(G,m({fullWidth:L==="fullWidth",indicator:$e&&!Ie&&Fe,selected:$e,selectionFollowsFocus:S,onChange:y,textColor:j,value:Y},xe===1&&O===!1&&!G.props.tabIndex?{tabIndex:0}:{}))}),ze=G=>{const Y=Qe.current,$e=Nt(Y).activeElement;if($e.getAttribute("role")!=="tab")return;let Ke=w==="horizontal"?"ArrowLeft":"ArrowUp",Xe=w==="horizontal"?"ArrowRight":"ArrowDown";switch(w==="horizontal"&&a&&(Ke="ArrowRight",Xe="ArrowLeft"),G.key){case Ke:G.preventDefault(),Cn(Y,$e,hi);break;case Xe:G.preventDefault(),Cn(Y,$e,pi);break;case"Home":G.preventDefault(),Cn(Y,null,pi);break;case"End":G.preventDefault(),Cn(Y,null,hi);break}},ot=se();return R.jsxs(am,m({className:oe(Be.root,g),ownerState:Ee,ref:n,as:v},ne,{children:[ot.scrollButtonStart,ot.scrollbarSizeListener,R.jsxs(lm,{className:Be.scroller,ownerState:Ee,style:{overflow:Re.overflow,[B?`margin${a?"Left":"Right"}`:"marginBottom"]:z?void 0:-Re.scrollbarWidth},ref:Ye,children:[R.jsx(cm,{"aria-label":l,"aria-labelledby":u,"aria-orientation":w==="vertical"?"vertical":null,className:Be.flexContainer,ownerState:Ee,onKeyDown:ze,ref:Qe,role:"tablist",children:Ve}),Ie&&Fe]}),ot.scrollButtonEnd]}))});function pm(e){return ge("MuiTextField",e)}ve("MuiTextField",["root"]);const hm=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],mm={standard:dl,filled:cl,outlined:ll},fm=e=>{const{classes:t}=e;return ue({root:["root"]},pm,t)},gm=q(ma,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),vm=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTextField"}),{autoComplete:i,autoFocus:a=!1,children:l,className:u,color:c="primary",defaultValue:p,disabled:h=!1,error:g=!1,FormHelperTextProps:v,fullWidth:k=!1,helperText:x,id:y,InputLabelProps:w,inputProps:T,InputProps:E,inputRef:S,label:$,maxRows:M,minRows:C,multiline:I=!1,name:j,onBlur:O,onChange:L,onFocus:z,placeholder:ne,required:W=!1,rows:B,select:X=!1,SelectProps:U,type:ee,value:le,variant:Q="outlined"}=r,Ee=ae(r,hm),Be=m({},r,{autoFocus:a,color:c,disabled:h,error:g,fullWidth:k,multiline:I,required:W,select:X,variant:Q}),qe=fm(Be),Se={};Q==="outlined"&&(w&&typeof w.shrink<"u"&&(Se.notched=w.shrink),Se.label=$),X&&((!U||!U.native)&&(Se.id=void 0),Se["aria-describedby"]=void 0);const Ie=fr(y),H=x&&Ie?`${Ie}-helper-text`:void 0,V=$&&Ie?`${Ie}-label`:void 0,K=mm[Q],D=R.jsx(K,m({"aria-describedby":H,autoComplete:i,autoFocus:a,defaultValue:p,fullWidth:k,multiline:I,name:j,rows:B,maxRows:M,minRows:C,type:ee,value:le,id:Ie,inputRef:S,onBlur:O,onChange:L,onFocus:z,placeholder:ne,inputProps:T},Se,E));return R.jsxs(gm,m({className:oe(qe.root,u),disabled:h,error:g,fullWidth:k,ref:n,required:W,color:c,variant:Q,ownerState:Be},Ee,{children:[$!=null&&$!==""&&R.jsx(fa,m({htmlFor:Ie,id:V},w,{children:$})),X?R.jsx(Ks,m({"aria-describedby":H,id:Ie,labelId:V,value:le,input:D},U,{children:l})):D,x&&R.jsx(Au,m({id:H},v,{children:x}))]}))}),bm=je([R.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),R.jsx("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime"),ym=je(R.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),wm=je(R.jsx("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"CodeOutlined"),xm=je(R.jsx("path",{d:"M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"}),"Coffee"),$m=je(R.jsx("path",{d:"m13.7826 15.1719 2.1213-2.1213 5.9963 5.9962-2.1213 2.1213zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21z"}),"ConstructionOutlined"),Cm=je(R.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy"),km=je(R.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm3.17-6.41a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 12.59l1.41-1.41c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 14l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 15.41l-1.41 1.41c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 14l-1.42-1.41zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"}),"DeleteForeverRounded"),Sm=je(R.jsx("path",{d:"M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17 6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"}),"DeveloperMode"),Zn=je(R.jsx("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"}),"EmailOutlined"),Vt=je(R.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),Lt=je(R.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),Tm=je(R.jsx("path",{d:"M7.25 12.5 4.75 9H3.5v6h1.25v-3.5L7.3 15h1.2V9H7.25zM9.5 15h4v-1.25H11v-1.11h2.5v-1.26H11v-1.12h2.5V9h-4zm9.75-6v4.5h-1.12V9.99h-1.25v3.52h-1.13V9H14.5v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9h-1.25z"}),"FiberNewOutlined"),Rm=je(R.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"}),"FileCopyOutlined"),Em=je(R.jsx("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Mm=je(R.jsx("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),Pm=je(R.jsx("path",{d:"M13 11.33 18 18H6l5-6.67V6h2m2.96-2H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81z"}),"ScienceOutlined"),Im=je(R.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),$a=je(R.jsx("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}),"ThumbUpAlt"),Ca=je(R.jsx("path",{d:"m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82l4.11-4.1M14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z"}),"ThumbUpOffAlt");function ka(e){const t=d.useRef();return d.useEffect(()=>{t.current=e},[e]),t.current}function zt(e,t){const[n,r]=d.useState(e||!1),i=a=>{if(typeof a=="boolean"){r(a);return}r(l=>!l)};return[n?t?.true??!0:t?.false??!1,i,r]}function Am(e){if(e&&typeof e!="object")throw new Error("Initial value must be an object");const[t,n]=d.useState(e||Object.create({}));function r(a){return t[a]}function i(...a){if(a.length===0)throw new Error("No arguments provided");if(["string","number","symbol"].includes(typeof a[0])){const l=a[0],u=a[1];n(c=>({...c,[l]:typeof u=="function"?u(c[l]):u}))}else if(typeof a[0]=="object"){const l=a[0],u=a[1]||"rehydrate";n(c=>u==="override"?{...l}:{...c,...l})}else if(typeof a[0]=="function"){const l=a[0],u=a[1]||"rehydrate";n(c=>{const p=l(c);return u==="override"?{...p}:{...c,...p}})}else throw new Error("Invalid arguments")}return[t,i,r]}const Wn=e=>{const[t,n]=d.useState(new Map(Object.entries(e)));function r(...u){if(u.length===0)throw new Error("No arguments provided");const c=u[0],p=u[1];if(typeof c=="function"){const h=c,g=p||"override";n(v=>{const k=h(v),x=k instanceof Map?k:new Map(Object.entries(k));return g==="override"?x:new Map([...v,...x])})}else if(typeof c=="object"&&c!==null){const h=c,g=p||"rehydrate";n(v=>g==="override"?new Map(Object.entries(h)):new Map([...v,...Object.entries(h)]))}else if(u.length===2){const h=c;if(typeof p=="function"){const g=p;n(v=>{const k=t.get(h);return new Map(v.entries()).set(h,g(k))})}else{const g=p;n(v=>new Map(v.entries()).set(h,g))}}else throw new Error("Invalid arguments")}function i(u){return t.get(u)}function a(u){n(c=>c.has(u)?(c.delete(u),new Map(c)):c)}function l(u,c){n(p=>{if(p.has(u)&&p.get(u)===c)return p;const h=new Map(p);return h.set(u,c),h})}return{map:t,set:r,get:i,del:a,add:l}};function Sa(e,t,n){const[r,i]=d.useState([...e].map(C=>({...C,[t?.idKey||"_id"]:Uo()}))),[a,l]=d.useState([...e]);d.useEffect(()=>{const C=r.map(I=>{const j={...I};return j[t?.idKey||"_id"]&&delete j[t?.idKey||"_id"],j});l([...C])},n||[]);const u=d.useCallback(()=>{const C=r.map(I=>{const j={...I};return j[t?.idKey||"_id"]&&delete j[t?.idKey||"_id"],j});l([...C])},[r]),c=d.useCallback(C=>{i(I=>[...I,{...C,[t?.idKey||"_id"]:Uo()}])},[t?.idKey]),p=d.useCallback(C=>{if(C==null)throw new Error("idKey is required to removeItem in list");i(I=>I.filter(j=>j[t?.idKey||"_id"]!==C))},[t?.idKey]),h=d.useCallback(C=>{C.forEach(I=>{p(I)})},[t?.idKey]),g=d.useCallback(C=>{if(C!==void 0){i([...C].map(I=>({...I,[t?.idKey||"_id"]:Uo()})));return}i([...a].map(I=>({...I,[t?.idKey||"_id"]:Uo()})))},[a]),v=d.useCallback(C=>{if(C.some(I=>[void 0,null].includes(I[t?.idKey||"_id"])))throw new Error("idKey is required to updateItem in list");i(C)},[]),x=[...r].sort(t?.sortFn||(()=>0)).filter(t?.filterFn||(()=>!0)),[y,w]=d.useState(1),T=d.useMemo(()=>Math.max(1,Math.ceil(x.length/(t?.itemsPerPage??10))),[x.length,t?.itemsPerPage]),E=d.useCallback(C=>{C>=1&&C<=T&&w(C)},[T]),S=d.useCallback(()=>{y>1&&w(C=>C-1)},[y]),$=d.useCallback(()=>{y<T&&w(C=>C+1)},[y,T]),M=x.slice((y-1)*(t?.itemsPerPage??10),y*(t?.itemsPerPage??10));return[r,{updateItems:v,addItem:c,removeItem:p,removeItems:h,save:u,reset:g,filteredItems:x,originalItems:a,render:()=>x?.length?x.map((C,I,j)=>t?.renderFn?o(d.Fragment,{children:t?.renderFn(C,I,j)},C[t?.idKey||"_id"]):null):t?.renderEmpty?typeof t?.renderEmpty=="function"?t?.renderEmpty():t?.renderEmpty:null,pagedItems:M,currentPage:y,totalPage:T,goToPage:E,goLastPage:S,goNextPage:$}]}const Nm=(e,t={idKey:"_id"})=>{const[n,r]=d.useState(ul(e)),[i,a]=d.useState(null),l=t.idKey,u=t.renderNode||(()=>null),c=t.filterFn;if(!l&&l!==0)throw new Error("You must provide an idKey to useTree");const p=(S,$,M=0,C=null)=>{const I=$(S,M,C),j=S.children?.map(L=>p(L,$,M+1,S))||[];return[I,...j]};let h="[react-hooks-kit][useTree] Node cannot be its own parent";const g=(S,$)=>{if(!S[l]&&S[l]!==0&&(S[l]=`${Uo()}`),S[l]===$){if(t.strict)throw new Error(h);return console.error(h),h}let M=!1,C=!1;if(h=`[react-hooks-kit][useTree] Node with id ${S[l]} already exists`,p(n,I=>{if(I[l]===S[l]&&(C=!0,t.strict))throw new Error(h)}),C)return console.error(h),h;if(p(n,I=>{I[l]===$&&(M=!0,Array.isArray(I.children)||(I.children=[]),I.children?.push(S))}),h=`[react-hooks-kit][useTree] Parent with id ${$} does not exist`,!M&&t.strict)throw new Error(h);if(!M)return console.error(h),h;r({...n})},v=S=>{let $="[react-hooks-kit][removeNode] You must provide a nodeId to removeNode";if(!S&&S!==0){if(t.strict)throw new Error($);return console.error($),$}let M=!1;if(p(n,C=>{C[l]===S&&(M=!0),C.children?.some(I=>I[l]===S)&&(M=!0),C.children=C.children?.filter(I=>I[l]!==S)||[]}),!M){if($=`[react-hooks-kit][useTree] Node to remove with id ${S} does not exist`,t.strict)throw new Error($);return console.error($),$}r({...n})},k=(S,$)=>{let M="[react-hooks-kit][useTree] You must provide a nodeId to updateNode";if(!S&&S!==0){if(t.strict)throw new Error(M);return console.error(M),M}let C=!1;if(p(n,I=>{I[l]===S&&(C=!0,Object.assign(I,$))}),!C){if(M=`[react-hooks-kit][useTree] Node to update with id ${S} does not exist`,t.strict)throw new Error(M);return console.error(M),M}r({...n})},x=S=>{let $=null;return p(n,M=>{M[l]===S&&($=M)}),$},y=S=>{let $;typeof S=="string"?$=C=>C[l]===S:$=S;const M=[];return p(n,C=>{$(C)&&M.push(C)}),M},w=(S,$)=>{let M=null;if(p(n,C=>{C[l]===S&&(M=C)}),M===null){let C=`[react-hooks-kit][useTree] Node to move with id ${S} does not exist`;if(t.strict)throw new Error(C);return console.error(C),C}v(S),g(M,$)},T=d.useCallback(()=>{if(!u)throw new Error("[react-hooks-kit][useTree] You must provide a renderNode function to useTree");return!n||JSON.stringify(n)==="{}"?t.renderEmpty?typeof t.renderEmpty=="function"?t.renderEmpty():t.renderEmpty:null:p(n,(S,$,M)=>u(S,l,$,M,n))},[n,u]),E=(S,$)=>{if(typeof S=="string"){let C=x(S);return C?p(C,$):[]}else return p(n,S)};return d.useEffect(()=>{if(c){const S=p(n,$=>c($)?$:null);a(S.filter($=>$!==null))}},[n,c]),[n,{addNode:g,removeNode:v,updateNode:k,findNode:x,moveNode:w,searchTree:y,traverse:E,render:T}]},Ta=(e,t="onSetState",n)=>{const[r,i]=d.useState(t==="onSetState"?0:-1),[a,l]=d.useState(e),u=c=>{l(c),t==="onSetState"&&i(p=>p+1)};return d.useEffect(()=>{t==="onChange"&&i(c=>c+1)},n?typeof n=="function"?n(a):n:[a]),[a,u,r]};function Om(e){const t=d.useRef(e),n=Gs();return{get:r=>r===void 0||t.current===null?t.current:Reflect.get(t.current,r),set:(r,i)=>{const a=Reflect.set(t.current,r,i);return n(),a},has:r=>Reflect.has(t.current,r),apply:r=>{const i=Reflect.apply(r,t.current,[t.current]);return n(),i}}}const Vm=(e,t,n)=>{let r;r=t;const i=d.useMemo(()=>({immediate:typeof n?.immediate=="boolean"?n.immediate?"all":"none":n?.immediate??"none",callAtFirst:n?.callAtFirst??!0,pauseAtFirst:n?.pauseAtFirst??!1,duration:n?.duration??r??1e3,delay:n?.delay??0}),[n,r]),[a,l]=d.useState(0),[u,c]=d.useState(i.pauseAtFirst),p=d.useRef(0),h=d.useRef(null),g=d.useRef(e);g.current=e;const v=u?"off":"on",k=d.useCallback(()=>{h.current&&(clearTimeout(h.current),h.current=null)},[]),x=d.useCallback(()=>{k(),h.current=setTimeout(()=>{p.current+=1;const $=p.current;l($),(i.callAtFirst||$>0)&&g.current($),u||x()},i.duration)},[i.duration,i.callAtFirst,u,k]),y=d.useCallback(()=>{c(!0),k()},[k]),w=d.useCallback(()=>{c(!1)},[]),T=d.useCallback(()=>{p.current=0,l(0)},[]),E=d.useCallback($=>{setTimeout(y,$)},[y]),S=d.useCallback($=>{setTimeout(w,$)},[w]);return d.useEffect(()=>(u||x(),k),[u,x,k]),d.useEffect(()=>{const M=setTimeout(()=>{(i.immediate==="mounted"||i.immediate==="all")&&g.current(0)},i.delay);return()=>clearTimeout(M)},[i.immediate,i.delay]),{tick:a,status:v,pause:y,resume:w,reset:T,delayedPause:E,delayedResume:S}};function Lm(e,t=200,n=!1,r){let i=null,a=!1;const l=function(...u){return new Promise((c,p)=>{if(i&&clearTimeout(i),n&&!a){const h=e.apply(this,u);r&&r(h),c(h),a=!0,i=setTimeout(()=>{a=!1,i=null},t)}else a=!0,i=setTimeout(()=>{const h=e.apply(this,u);r&&r(h),c(h),a=!1,i=null},t)})};return l.cancel=function(){i&&clearTimeout(i),i=null,a=!1},l}const Bm=()=>{};function jm(e,t=200,n=!1,r){if(typeof e!="function")throw new Error("fn must be a function");if(typeof t!="number")throw new Error("delay must be a number");const i=d.useRef(e),a=d.useRef({immediate:n,callback:r});return i.current=e,a.current={immediate:n,callback:r},d.useMemo(()=>t<0?Bm:t===0?i.current:Lm(i.current,t,a.current.immediate,a.current.callback),[t])}const er=(e,t,n,r,i)=>{let a=!1;typeof r=="boolean"?a=r:r&&(a=r.strict||!1,i=r.immediate);let l=pl;t instanceof Function&&(l=t);let u;try{u=l(e,t,a)}catch(v){console.error(v)}const[c,p]=d.useState(u),h=d.useRef(c),g=d.useRef(!1);return d.useEffect(()=>{!g.current&&i&&(n?.(c,h.current),g.current=!0)},[]),d.useEffect(()=>{let v;try{v=l(e,t,a)}catch(k){console.error(k)}Qs(v,h.current)||(n?.(v,h.current),p(v),h.current=v)},[e,t,n]),c};function Dm(e,t,n){const[r,i]=d.useState(e()),a=d.useRef(r);return d.useEffect(()=>{let u;const c=()=>{const p=e();p!==a.current&&(a.current=p,i(p),t?.(p)),u=requestAnimationFrame(c)};return c(),()=>{cancelAnimationFrame(u)}},[e]),n?[r,()=>{const u=e();u!==a.current&&(a.current=u,i(u),t?.(u))}]:r}function zm(e,t=()=>{},n=!1){return Dm(e,t,n)}const Um=(e,t,n=!1)=>{d.useEffect(()=>{const r=Js(e).then(t);return n&&t(e.value),()=>r()},[e.id])};function Ra({callback:e,target:t}={},n=[]){const[r,i]=d.useState({width:0,height:0});return d.useLayoutEffect(()=>{if(t){const a=typeof t=="string"?document.getElementById(t):t.current;if(a){const l=new ResizeObserver(u=>{u.forEach(c=>{i({width:c.target.clientWidth,height:c.target.clientHeight}),e?.({width:c.target.clientWidth,height:c.target.clientHeight})})});return l.observe(a),()=>{l.unobserve(a)}}}else{const a=()=>{i({width:window.innerWidth,height:window.innerHeight}),e?.({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",a),a(),()=>window.removeEventListener("resize",a)}},n),r}function Fm(e,t,n){let r={};Array.isArray(t)&&(n=t);const[i,a]=d.useState({status:"idle",data:null,error:null}),l=d.useRef(e),u=d.useRef(r),c=d.useRef(0),p=d.useRef(null);l.current=e,u.current=r;const h=d.useCallback(()=>{p.current?.controller.abort()},[]),g=d.useCallback(()=>{p.current?.controller.abort();const v=c.current+1;c.current=v;const k=new AbortController;p.current={id:v,controller:k},a({status:"pending",data:null,error:null});let x;try{x=l.current()}catch(y){x=Promise.reject(y)}Promise.resolve(x).then(y=>{const w=p.current;!k.signal.aborted&&w?.id===v&&(a({status:"resolved",data:y,error:null}),u.current.onResolve?.(y))}).catch(y=>{const w=p.current;k.signal.aborted||w?.id!==v||(a({status:"rejected",data:null,error:y}),u.current.onReject?.(y))}).finally(()=>{const y=p.current;!k.signal.aborted&&y?.id===v&&u.current.onFinally?.()})},[]);return d.useEffect(()=>(g(),h),[g,h,...n||[]]),[i,h,g]}function _m(e,t){const[n,r]=d.useState(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),i=d.useCallback(a=>l=>{const u=l.matches?"dark":"light";r(u),a(u)},[]);return d.useEffect(()=>{const a=window.matchMedia("(prefers-color-scheme: dark)");let l=null;return l=i((()=>{})),a.addEventListener?a.addEventListener("change",l):a.addListener(l),()=>{l&&(a.removeEventListener?a.removeEventListener("change",l):a.removeListener(l))}},[e,t,i]),n}const Wm=e=>{const t=hl.createRoot(e);return{render:n=>{t.render(n)},unmount:()=>{queueMicrotask(()=>t.unmount())}}},Hm=e=>{const t=document.createElement("div");t.style.position="fixed",t.style.top="0",t.style.right="0",t.style.bottom="0",t.style.left="0",t.style.backgroundColor="rgba(0, 0, 0, 0.5)",t.style.zIndex="999",t.style.cursor="default",t.style.userSelect="none",t.style.webkitUserSelect="none",t.style.setProperty("pointer-events","none","important");const n=e;if(n&&(n.backgroundColor!==void 0&&(t.style.backgroundColor=n.backgroundColor),n.opacity!==void 0&&(t.style.opacity=n.opacity.toString()),n.zIndex!==void 0&&(t.style.zIndex=n.zIndex.toString()),n.pointerEvents!==void 0)){const r=String(n.pointerEvents),i=/\s*!important$/i.test(r);t.style.setProperty("pointer-events",r.replace(/\s*!important$/i,""),i?"important":"")}return t};function Hn(e,t,n){const[r,i]=d.useState(-1),a=d.useRef(null),l=d.useRef(new Map),u=d.useRef(new Set),c=d.useCallback(y=>{u.current.add(y)},[]),p=d.useCallback(y=>{u.current.delete(y)},[]);d.useEffect(()=>{const y=e[r],w=document.body,T=Hm(n?.maskConfig);y&&w&&(w.appendChild(T),a.current=T),y?.ids?.forEach(S=>{const $=document.getElementById(S);$&&(l.current.set(S,$.style.zIndex),$.style.zIndex="1000")});const E=y?.renders?.map(({id:S,render:$,containerStyle:M,containerClassName:C})=>{if(u.current.has(S))return;const I=document.getElementById(S),j=document.createElement("div");if(j.style.zIndex="1001",j.style.position="relative",n?.containerStyle&&Object.keys(n.containerStyle).forEach(O=>{j.style[O]=n.containerStyle[O]}),M&&Object.keys(M).forEach(O=>{j.style[O]=M[O]}),n?.containerClassName&&(j.className=n.containerClassName),C&&(j.className=C),I?.appendChild(j),j&&I){const O=Wm(j);return O.render($(S,y.name,y.data,y.ids)),{container:j,root:O}}});return()=>{y&&w&&a.current?.parentNode===w&&(w.removeChild(T),a.current=null),E?.forEach(S=>{S?.root.unmount(),S?.container.remove()}),l.current.forEach((S,$)=>{const M=document.getElementById($);M&&(M.style.zIndex=S)}),l.current.clear()}},[r,e,t,n]);const h=d.useCallback(()=>i(0),[]),g=d.useCallback(()=>i(-1),[]),v=d.useCallback(()=>i(y=>Math.min(y+1,e.length-1)),[e]),k=d.useCallback(()=>i(y=>Math.max(y-1,0)),[]),x=d.useCallback(y=>i(Math.max(0,Math.min(y,e.length-1))),[e]);return[r,{start:h,stop:g,next:v,last:k,go:x,step:r,options:{steps:e,callback:t,config:n},register:c,unregister:p}]}const qm=({id:e,guider:t,children:n})=>{const[r,i]=d.useState(null),{step:a,options:l}=t,{steps:u}=l||{},c=u?.[a];d.useEffect(()=>{t.register(e);const h=c?.renders?.find(g=>g.id===e)?.render;return i(h?h(e,c.name,c.data,c.ids):null),()=>{t.unregister(e)}},[e,c]);const p=document.getElementById(e);return s(b,{children:[n,p&&ml.createPortal(r,p)]})};let tr=!1;function Ir(e={},t=!0){const n=d.useRef(null),r=d.useRef(!1);return d.useEffect(()=>{if(!r.current){try{"paintWorklet"in CSS&&!tr?(CSS.paintWorklet.addModule(fl),tr=!0):tr||console.warn("Your browser doesn't support CSS Paint API")}catch(i){console.error(i)}r.current=!0}},[]),d.useEffect(()=>{const i=n.current;if(!i)return;const a=e.trigger??"mousedown",l=e.duration??500,u=e.color??null,c=e.num??10,p=e.size??3;let h=null;const g=v=>{if(!t)return;h!==null&&(cancelAnimationFrame(h),h=null);const k=v.clientX-i.getBoundingClientRect().left,x=v.clientY-i.getBoundingClientRect().top,y=performance.now();i.style.setProperty("--particle-x",`${k}px`),i.style.setProperty("--particle-y",`${x}px`),i.style.setProperty("--particle-size",`${p}`),i.style.setProperty("--particle-color",u??""),i.style.setProperty("--particle-time","0"),i.style.setProperty("--particle-num",`${c}`),i.style.backgroundImage="paint(particle)";const w=T=>{const E=l===0?1:(T-y)/l;i.style.setProperty("--particle-time",`${E}`),E<1?h=requestAnimationFrame(w):h!==null&&(cancelAnimationFrame(h),h=null)};h=requestAnimationFrame(w)};return i.addEventListener(a,g),()=>{i.removeEventListener(a,g),h!==null&&cancelAnimationFrame(h)}},[n,e,t]),n}function Km(e){const[t,n]=d.useState({width:0,height:0,top:0,left:0});return d.useEffect(()=>{const r=document.getElementById(e);if(!r)return;const i=new ResizeObserver(a=>{a.forEach(l=>{n({width:l.contentRect.width,height:l.contentRect.height,top:l.contentRect.top,left:l.contentRect.left})})});return i.observe(r),()=>{i.unobserve(r)}},[e]),t}function Gm(e,...t){const[n,r]=d.useState(e),i=d.useMemo(()=>t.filter(l=>typeof l=="function"?l(n,n):l).map(l=>typeof l=="string"?l:"Data is protected and cannot be modified."),[n,t]);return[n,l=>{i.length&&i.forEach(u=>{throw new Error(u)}),typeof l=="function"&&(l=l(n)),!Qs(n,l)&&(t.length&&t.forEach(u=>{if(typeof u=="function"){const c=u(n,l);if(c)switch(typeof c){case"string":throw new Error(c);case"boolean":throw new Error("Data is protected and cannot be modified.")}}}),r(l))}]}function rn(e){const[t,n]=d.useState(e??document.title),r=d.useRef(document.title),i=d.useRef(!1);return d.useEffect(()=>{e&&(i.current=!0,document.title=e)},[]),d.useEffect(()=>{i.current=!0,document.title=t},[t]),d.useEffect(()=>{const a=document.querySelector("title");if(!a)return;const l=r.current,u=new MutationObserver(()=>{i.current||n(document.title),i.current=!1});return u.observe(a,{childList:!0,characterData:!0,subtree:!0}),i.current=!1,()=>{u.disconnect(),document.title=l}},[]),[t,n]}function So(e,t){const n=d.useMemo(()=>typeof t=="string"||typeof t=="number"?{content:t}:t?.badge??null,[t]);d.useEffect(()=>{if(e){if(!n){or(e);return}Qm(e,n).then(or).catch(()=>or(e))}},[e,n])}function or(e){document.querySelectorAll("link[rel*='icon']").forEach(n=>n.remove());const t=document.createElement("link");t.rel="icon",t.type="image/png",t.href=e,document.head.appendChild(t)}async function Qm(e,t){const{content:n,position:r="top-right",bgColor:i="#ff3b30",textColor:a="#fff",size:l=.5}=t;return new Promise((u,c)=>{const p=new Image;p.onload=()=>{try{const h=Math.max(p.naturalWidth||0,64),g=document.createElement("canvas");g.width=h,g.height=h;const v=g.getContext("2d");if(!v)return c("ctx failed");v.drawImage(p,0,0,h,h);const k=Math.max(h*l,14),x=k/2,y=h*.06;let w=0,T=0;switch(r){case"top-left":w=x+y,T=x+y;break;case"bottom-left":w=x+y,T=h-x-y;break;case"bottom-right":w=h-x-y,T=h-x-y;break;default:w=h-x-y,T=x+y}v.fillStyle=i,v.beginPath(),v.arc(w,T,x,0,Math.PI*2),v.fill();let E=String(n);typeof n=="number"&&n>99&&(E="99+"),v.fillStyle=a,v.font=`bold ${k*.65}px system-ui, -apple-system, sans-serif`,v.textAlign="center",v.textBaseline="middle",v.fillText(E,w,T+.5),u(g.toDataURL("image/png"))}catch(h){c(h)}},p.onerror=()=>{c(new Error(`Failed to load icon: ${e}`))},p.src=e})}function Jm(e,t={}){const{fontFamily:n="Arial, sans-serif",fontSize:r=24,textColor:i="#fff",bgColor:a="transparent",dpr:l=window.devicePixelRatio||1}=t,u=document.createElement("canvas");u.width=r*l,u.height=r*l;const c=u.getContext("2d");if(!c)throw new Error("Failed to get 2D context from canvas");return c.scale(l,l),c.fillStyle=a,c.fillRect(0,0,r,r),c.fillStyle=i,c.font=`bold ${r}px ${n}`,c.textAlign="center",c.textBaseline="middle",c.fillText(String(e),r/2,r/2),u.toDataURL("image/png")}const Ym={facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},fi=["qr_code"];let Xm=0,gi=null;const Zm=()=>(gi??=gl(()=>import("./index-BzCQl8fX.js"),__vite__mapDeps([0,1,2])),gi),ef=()=>typeof navigator<"u"&&/MicroMessenger/i.test(navigator.userAgent),Gt=e=>e instanceof Error?e:new Error(String(e));class tf{constructor(t={}){this.scanner=null,this.currentMode="none",this.isScanning=!1,this.isPaused=!1,this.operation=0,this.cameraSwitchRequest=0,this.abortController=null,this.lastHtml5Options=null,this.ownedContainers=new WeakMap,this.pendingScanners=new WeakSet,this.disposedScanners=new WeakSet,this.wechatAdapter=t.wechatAdapter,this.isWechatEnvironment=t.isWechatEnvironment??ef,this.loadHtml5Qrcode=t.loadHtml5Qrcode??Zm}getRecommendedMode(){return this.isWechatAvailable()?"wechat":"html5"}validateMode(t){return t==="wechat"&&!this.isWechatAvailable()?{valid:!1,reason:"WeChat scanning requires a WeChat browser and an available wechatAdapter."}:t==="html5"&&typeof document>"u"?{valid:!1,reason:"HTML5 scanning requires a browser document."}:{valid:!0}}async start(t){const n=++this.operation;this.abortController?.abort();const r=new AbortController;this.abortController=r;try{const i=t.mode==="auto"?this.getRecommendedMode():t.mode,a=this.validateMode(i);if(!a.valid)throw new Error(a.reason);if(t.formats.length===0)throw new Error("At least one scan format must be provided.");if(i==="html5"&&this.assertContainer(t.containerId),await this.stopActiveScanner(),!this.isCurrent(n))return;this.currentMode=i,this.isScanning=!0,this.isPaused=!1,i==="wechat"?await this.startWechat(t,r.signal,n):await this.startHtml5(t,n)}catch(i){if(!this.isCurrent(n))return;const a=Gt(i);throw this.isScanning=!1,this.isPaused=!1,this.currentMode="none",t.onError?.(a),a}}async stop(){++this.operation,this.abortController?.abort(),this.abortController=null;const t=this.currentMode;this.currentMode="none",this.isScanning=!1,this.isPaused=!1;const n=this.stopActiveScanner(),r=t==="wechat"&&this.wechatAdapter?.cancel?Promise.resolve(this.wechatAdapter.cancel()):Promise.resolve();await Promise.all([n,r])}async pause(){if(this.currentMode!=="html5"||!this.scanner||!this.isScanning)throw new Error("An active HTML5 scanner is required before pausing.");this.scanner.pause(!0),this.isPaused=!0}async resume(){if(this.currentMode!=="html5"||!this.scanner||!this.isPaused)throw new Error("A paused HTML5 scanner is required before resuming.");this.scanner.resume(),this.isPaused=!1}async switchCamera(t){if(this.currentMode!=="html5"||!this.scanner||!this.isScanning||!this.lastHtml5Options)throw new Error("An active HTML5 scanner is required before switching cameras.");const n=++this.cameraSwitchRequest,r=this.operation,i=this.scanner,a=await this.getCameras();if(this.assertCurrentCameraOperation(n,r,i),a.length===0)throw new Error("No camera was found.");let l;if(t){if(l=a.find(p=>p.id===t),!l)throw new Error(`Camera ${t} was not found.`)}else{if(a.length<2)throw new Error("At least two cameras are required to switch cameras.");const p=this.getRunningCameraId(),h=a.findIndex(g=>g.id===p);l=a[(h+1+a.length)%a.length]}this.assertCurrentCameraOperation(n,r,i);const u=this.start({...this.lastHtml5Options,mode:"html5",camera:l.id}),c=this.operation;if(await u,n!==this.cameraSwitchRequest||!this.isCurrent(c)||this.currentMode!=="html5"||!this.isScanning){const p=new Error("Camera switch was superseded by a newer operation.");throw p.name="AbortError",p}return l}async getCameras(){if(typeof navigator>"u")throw new Error("Camera enumeration requires a browser environment.");const{Html5Qrcode:t}=await this.loadHtml5Qrcode();return(await t.getCameras()).map(({id:r,label:i})=>({id:r,label:i}))}scanImage(t,n={}){try{if(this.assertImageFile(t,n.maxFileSize),(n.formats??fi).length===0)throw new Error("At least one scan format must be provided.");this.assertImageContainer(n.containerId,n.showImage??!1)}catch(r){return Promise.reject(Gt(r))}return this.scanImageInternal(t,n).catch(r=>{throw Gt(r)})}async scanImageInternal(t,n){const r=n.formats??fi,i=++this.operation;this.abortController?.abort(),this.abortController=null;const a=this.currentMode;this.currentMode="none",this.isScanning=!1,this.isPaused=!1;const l=this.stopActiveScanner(),u=a==="wechat"&&this.wechatAdapter?.cancel?Promise.resolve(this.wechatAdapter.cancel()):Promise.resolve();await Promise.all([l,u]),this.assertCurrentImageOperation(i);const c=await this.loadHtml5Qrcode();this.assertCurrentImageOperation(i);const p=n.showImage??!1,h=this.resolveImageContainer(n.containerId,p);let g;try{g=new c.Html5Qrcode(h.id,{formatsToSupport:this.mapFormats(c,r),useBarCodeDetectorIfSupported:(n.useNativeDetector??!0)&&this.getSupportsNativeDetector(),verbose:n.verbose??!1})}catch(v){throw h.owned&&h.element.remove(),Gt(v)}h.owned&&this.ownedContainers.set(g,h.element),this.scanner=g;try{this.pendingScanners.add(g);let v;try{v=await g.scanFileV2(t,p)}finally{this.pendingScanners.delete(g)}this.isActiveScanner(i,g)||(await this.disposeScanner(g),this.assertCurrentImageOperation(i));const k=this.normalizeResult(c,v,"image");return p||(this.scanner===g&&(this.scanner=null),await this.disposeScanner(g)),k}catch(v){throw this.scanner===g&&(this.scanner=null),await this.disposeScanner(g),Gt(v)}}async getCameraCapabilities(){if(this.currentMode!=="html5"||!this.scanner||!this.isScanning)return null;try{const t=this.scanner.getRunningTrackCapabilities(),n=this.scanner.getRunningTrackSettings(),r=t.torch,i=Array.isArray(r)?r.indexOf(!0)>=0&&r.indexOf(!1)>=0:r===!0,a=t.zoom,l=this.finiteNumberOrNull(a?.min),u=this.finiteNumberOrNull(a?.max),c=l!==null&&u!==null&&u>=l;return{torch:{supported:i,enabled:typeof n.torch=="boolean"?n.torch:null},zoom:{supported:c,value:this.finiteNumberOrNull(n.zoom),min:c?l:null,max:c?u:null,step:c?this.positiveFiniteNumberOrNull(a?.step):null}}}catch(t){throw Gt(t)}}async setTorch(t){const n=this.getActiveHtml5Scanner("torch");if(!(await this.getCameraCapabilities())?.torch.supported)throw new Error("The active camera does not support torch control.");const i={torch:t};await n.applyVideoConstraints({advanced:[i]});const a=await this.getCameraCapabilities();if(!a)throw new Error("The active camera stopped before torch was applied.");return a}async setZoom(t){if(!Number.isFinite(t))throw new Error("Camera zoom must be a finite number.");const n=this.getActiveHtml5Scanner("zoom"),r=await this.getCameraCapabilities();if(!r?.zoom.supported)throw new Error("The active camera does not support zoom control.");if(t<r.zoom.min||t>r.zoom.max)throw new Error(`Camera zoom must be between ${r.zoom.min} and ${r.zoom.max}.`);const i={zoom:t};await n.applyVideoConstraints({advanced:[i]});const a=await this.getCameraCapabilities();if(!a)throw new Error("The active camera stopped before zoom was applied.");return a}getCurrentMode(){return this.currentMode}getIsScanning(){return this.isScanning}getIsWechatEnv(){return this.isWechatEnvironment()}getSupportsNativeDetector(){if(typeof window>"u")return!1;const t=window.BarcodeDetector;if(typeof t!="function")return!1;try{return new t({formats:["qr_code"]}),!0}catch{return!1}}async destroy(){await this.stop()}isWechatAvailable(){return this.getIsWechatEnv()&&!!this.wechatAdapter&&(this.wechatAdapter?.isAvailable?.()??!0)}assertContainer(t){if(!t)throw new Error("containerId is required for HTML5 scanning.");if(!document.getElementById(t))throw new Error(`Container #${t} does not exist.`)}assertImageFile(t,n){if(typeof File>"u"||!(t instanceof File))throw new Error("scanImage requires a browser File object.");if(t.type&&!t.type.startsWith("image/"))throw new Error("scanImage only accepts image files.");if(n!==void 0&&(!Number.isFinite(n)||n<=0))throw new Error("maxFileSize must be a positive finite number.");if(n!==void 0&&t.size>n)throw new Error(`Image file size ${t.size} exceeds the ${n} byte limit.`)}resolveImageContainer(t,n){if(typeof document>"u")throw new Error("Image scanning requires a browser document.");if(t){const a=document.getElementById(t);if(!a)throw new Error(`Container #${t} does not exist.`);const l=this.createOwnedScannerContainer(a,!1);return{id:l.id,element:l,owned:!0}}if(n)throw new Error("containerId is required when showImage is true.");const r=document.body??document.documentElement;if(!r)throw new Error("Image scanning requires an initialized browser document.");const i=this.createOwnedScannerContainer(r,!0);return{id:i.id,element:i,owned:!0}}createOwnedScannerContainer(t,n){const r=document.createElement("div");return r.id=`react-hooks-kit-qrcode-scanner-${++Xm}`,r.hidden=n,t.appendChild(r),r}assertImageContainer(t,n){if(typeof document>"u")throw new Error("Image scanning requires a browser document.");if(n&&!t)throw new Error("containerId is required when showImage is true.");if(t&&!document.getElementById(t))throw new Error(`Container #${t} does not exist.`)}assertCurrentImageOperation(t){this.isCurrent(t)||this.throwSupersededImageError()}throwSupersededImageError(){const t=new Error("Image scan was superseded by a newer operation.");throw t.name="AbortError",t}assertCurrentCameraOperation(t,n,r){if(t===this.cameraSwitchRequest&&this.isCurrent(n)&&this.scanner===r&&this.currentMode==="html5"&&this.isScanning)return;const i=new Error("Camera switch was superseded by a newer operation.");throw i.name="AbortError",i}getActiveHtml5Scanner(t){if(this.currentMode!=="html5"||!this.scanner||!this.isScanning)throw new Error(`An active HTML5 scanner is required before controlling camera ${t}.`);return this.scanner}finiteNumberOrNull(t){return typeof t=="number"&&Number.isFinite(t)?t:null}positiveFiniteNumberOrNull(t){const n=this.finiteNumberOrNull(t);return n!==null&&n>0?n:null}createBasicResult(t,n){return{text:t,source:n,format:null,formatName:null,contentType:null,bounds:null,decoderName:null,timestamp:Date.now()}}normalizeResult(t,n,r){const i=n.result,a=i.bounds;return{text:n.decodedText,source:r,format:i.format===void 0?null:this.unmapFormat(t,i.format.format),formatName:i.format?.formatName??null,contentType:i.decodedTextType===void 0?null:i.decodedTextType===1?"url":"unknown",bounds:a?{x:a.x,y:a.y,width:a.width,height:a.height}:null,decoderName:i.debugData?.decoderName??null,timestamp:Date.now()}}async startWechat(t,n,r){const i=await this.wechatAdapter.scan({signal:n,formats:t.formats});this.isCurrent(r)&&(this.isScanning=!1,this.currentMode="none",i===null?t.onCancel?.():t.onSuccess(i,this.createBasicResult(i,"wechat")))}async startHtml5(t,n){const r=await this.loadHtml5Qrcode();if(!this.isCurrent(n))return;const i=t.useNativeDetector&&this.getSupportsNativeDetector(),a=document.getElementById(t.containerId);if(!a)throw new Error(`Container #${t.containerId} does not exist.`);const l=this.createOwnedScannerContainer(a,!1);let u;try{u=new r.Html5Qrcode(l.id,{formatsToSupport:this.mapFormats(r,t.formats),useBarCodeDetectorIfSupported:i,verbose:t.verbose})}catch(g){throw l.remove(),g}this.ownedContainers.set(u,l),this.scanner=u,this.lastHtml5Options=t;const c=t.camera??Ym,p=typeof c=="string"?c:{facingMode:"environment"},h={fps:t.fps,qrbox:t.qrbox,aspectRatio:t.aspectRatio,disableFlip:t.disableFlip,videoConstraints:typeof c=="string"?void 0:c};try{this.pendingScanners.add(u);try{await u.start(p,h,(g,v)=>{this.isActiveScanner(n,u)&&(t.onSuccess(g,this.normalizeResult(r,v,"camera")),t.stopOnSuccess&&this.stop().catch(k=>t.onError?.(Gt(k))))},g=>{this.isActiveScanner(n,u)&&t.onDecodeError?.(g)})}finally{this.pendingScanners.delete(u)}this.isActiveScanner(n,u)||await this.disposeScanner(u)}catch(g){throw this.scanner===u&&(this.scanner=null),await this.disposeScanner(u),g}}mapFormats(t,n){const r=t.Html5QrcodeSupportedFormats,i={qr_code:r.QR_CODE,aztec:r.AZTEC,codabar:r.CODABAR,code_39:r.CODE_39,code_93:r.CODE_93,code_128:r.CODE_128,data_matrix:r.DATA_MATRIX,maxicode:r.MAXICODE,itf:r.ITF,ean_13:r.EAN_13,ean_8:r.EAN_8,pdf_417:r.PDF_417,rss_14:r.RSS_14,rss_expanded:r.RSS_EXPANDED,upc_a:r.UPC_A,upc_e:r.UPC_E,upc_ean_extension:r.UPC_EAN_EXTENSION};return n.map(a=>i[a])}unmapFormat(t,n){const r=t.Html5QrcodeSupportedFormats;return[[r.QR_CODE,"qr_code"],[r.AZTEC,"aztec"],[r.CODABAR,"codabar"],[r.CODE_39,"code_39"],[r.CODE_93,"code_93"],[r.CODE_128,"code_128"],[r.DATA_MATRIX,"data_matrix"],[r.MAXICODE,"maxicode"],[r.ITF,"itf"],[r.EAN_13,"ean_13"],[r.EAN_8,"ean_8"],[r.PDF_417,"pdf_417"],[r.RSS_14,"rss_14"],[r.RSS_EXPANDED,"rss_expanded"],[r.UPC_A,"upc_a"],[r.UPC_E,"upc_e"],[r.UPC_EAN_EXTENSION,"upc_ean_extension"]].find(([l])=>l===n)?.[1]??null}getRunningCameraId(){try{return this.scanner?.getRunningTrackSettings().deviceId}catch{const t=this.lastHtml5Options?.camera;return typeof t=="string"?t:void 0}}isCurrent(t){return t===this.operation}isActiveScanner(t,n){return this.isCurrent(t)&&this.scanner===n}async stopActiveScanner(){const t=this.scanner;if(this.scanner=null,!!t)try{await this.disposeScanner(t)}catch(n){throw this.scanner||(this.scanner=t),n}}async disposeScanner(t){if(this.disposedScanners.has(t))return;if(this.pendingScanners.has(t)){const i=this.ownedContainers.get(t);i&&(i.hidden=!0);return}let n;if(t.isScanning)try{await t.stop()}catch(i){n=i}try{t.clear()}catch(i){n??=i}if(n)throw Gt(n);const r=this.ownedContainers.get(t);r&&(this.ownedContainers.delete(t),r.remove()),this.disposedScanners.add(t)}}const vi={fps:10,qrbox:250,aspectRatio:1,disableFlip:!1,formats:["qr_code"],useNativeDetector:!0,verbose:!1,stopOnSuccess:!1},Pt=e=>e instanceof Error?e:new Error(String(e)),of=(e,t)=>({text:e,source:t,format:null,formatName:null,contentType:null,bounds:null,decoderName:null,timestamp:Date.now()}),nf=async()=>{if(typeof navigator>"u"||!navigator.mediaDevices||!navigator.permissions?.query)return{state:"unsupported",status:null};try{const e=await navigator.permissions.query({name:"camera"});return{state:e.state,status:e}}catch{return{state:"unsupported",status:null}}},rf=()=>typeof navigator>"u"||!navigator.mediaDevices||!navigator.permissions?.query?"unsupported":"unknown",sf=(e,t)=>{if(typeof File>"u"||!(e instanceof File))throw new Error("scanImage requires a browser File object.");if(e.type&&!e.type.startsWith("image/"))throw new Error("scanImage only accepts image files.");if(t.maxFileSize!==void 0&&(!Number.isFinite(t.maxFileSize)||t.maxFileSize<=0))throw new Error("maxFileSize must be a positive finite number.");if(t.maxFileSize!==void 0&&e.size>t.maxFileSize)throw new Error(`Image file size ${e.size} exceeds the ${t.maxFileSize} byte limit.`);if(t.formats?.length===0)throw new Error("At least one scan format must be provided.");if(typeof document>"u")throw new Error("Image scanning requires a browser document.");if(t.showImage&&!t.containerId)throw new Error("containerId is required when showImage is true.");if(t.containerId&&!document.getElementById(t.containerId))throw new Error(`Container #${t.containerId} does not exist.`)},af=e=>e==="starting"||e==="scanning"||e==="paused",lf=(e={})=>{const t=typeof e=="string"?{mode:e}:e,n=t.mode??"auto",r=d.useRef({onSuccess:t.onSuccess,onError:t.onError,onCancel:t.onCancel,onDecodeError:t.onDecodeError});r.current={onSuccess:t.onSuccess,onError:t.onError,onCancel:t.onCancel,onDecodeError:t.onDecodeError};const[i]=d.useState(()=>t.service??new tf({wechatAdapter:t.wechatAdapter})),[a,l]=d.useState("idle"),[u,c]=d.useState(null),[p,h]=d.useState(null),[g,v]=d.useState(null),[k,x]=d.useState("none"),[y,w]=d.useState(null),[T,E]=d.useState(rf),[S]=d.useState(()=>({isWechatEnv:i.getIsWechatEnv(),supportsNativeDetector:i.getSupportsNativeDetector()})),$=d.useRef(!1),M=d.useRef(0),C=d.useRef(0),I=d.useRef(0),j=d.useRef(null);d.useEffect(()=>($.current=!0,()=>{$.current=!1,++M.current,i.destroy().catch(()=>{})}),[i]);const O=d.useCallback(H=>$.current&&H===M.current,[]),L=d.useCallback(H=>{const V=j.current;if(V&&(V.status.removeEventListener("change",V.listener),j.current=null),!H)return;const K=()=>{$.current&&E(H.state)};H.addEventListener("change",K),j.current={status:H,listener:K}},[]),z=d.useCallback(async()=>{const H=++I.current,V=await nf();return $.current&&H===I.current&&(L(V.status),E(V.state)),V.state},[L]);d.useEffect(()=>(z(),()=>{++I.current,L(null)}),[z,L]);const ne=d.useCallback(async(H={})=>{const V=++M.current,K=++C.current,D={onSuccess:H.onSuccess,onError:H.onError,onCancel:H.onCancel,onDecodeError:H.onDecodeError};let ie=!1,be=!1;$.current&&(v(null),c(null),h(null),w(null),l("starting"),x("none"));const ce={...vi,...H,mode:H.mode??n,formats:H.formats??vi.formats,onSuccess:(he,Me)=>{if(!O(V)||ce.stopOnSuccess&&be)return;be=ce.stopOnSuccess;const Re=i.getCurrentMode()==="wechat"||ce.mode==="wechat"||ce.mode==="auto"&&i.getIsWechatEnv()?"wechat":"camera",ye=Me?Me.text===he?Me:{...Me,text:he}:of(he,Re);c(he),h(ye),ce.stopOnSuccess?(++C.current,l("idle"),x("none"),w(null)):(l("scanning"),x(i.getCurrentMode())),(D.onSuccess??r.current.onSuccess)?.(he,ye)},onError:he=>{O(V)&&(ie=!0,v(he),l("error"),x("none"),w(null),(D.onError??r.current.onError)?.(he))},onCancel:()=>{O(V)&&(l("idle"),x("none"),w(null),(D.onCancel??r.current.onCancel)?.())},onDecodeError:he=>{O(V)&&(D.onDecodeError??r.current.onDecodeError)?.(he)}};try{const he=i.start(ce);if(await Promise.resolve(),O(V)&&i.getCurrentMode()==="wechat"&&i.getIsScanning()&&(x("wechat"),l("scanning")),await he,!O(V))return;const Me=i.getCurrentMode();if(x(Me),l(i.getIsScanning()?"scanning":"idle"),Me==="html5"&&i.getIsScanning()&&(E("granted"),z(),i.getCameraCapabilities))try{const Re=await i.getCameraCapabilities();O(V)&&K===C.current&&w(Re)}catch{O(V)&&K===C.current&&w(null)}}catch(he){const Me=Pt(he);throw O(V)&&(v(Me),l("error"),x("none"),w(null),Me.name==="NotAllowedError"&&(E("denied"),z()),ie||(D.onError??r.current.onError)?.(Me)),Me}},[O,z,n,i]),W=d.useCallback(async()=>{const H=++M.current;++C.current,$.current&&(l("stopping"),w(null));try{if(await i.stop(),!O(H))return;l("idle"),x("none"),w(null)}catch(V){const K=Pt(V);throw O(H)&&(v(K),l("error"),x("none"),w(null),r.current.onError?.(K)),K}},[O,i]),B=d.useCallback(async()=>{const H=M.current;try{await i.pause(),O(H)&&l("paused")}catch(V){const K=Pt(V);throw O(H)&&(v(K),r.current.onError?.(K)),K}},[O,i]),X=d.useCallback(async()=>{const H=M.current;try{await i.resume(),O(H)&&l("scanning")}catch(V){const K=Pt(V);throw O(H)&&(v(K),r.current.onError?.(K)),K}},[O,i]),U=d.useCallback(async H=>{const V=M.current,K=++C.current;$.current&&w(null);try{const D=await i.switchCamera(H);if(O(V)&&(v(null),x(i.getCurrentMode()),l("scanning"),E("granted"),z(),i.getCameraCapabilities))try{const ie=await i.getCameraCapabilities();O(V)&&K===C.current&&w(ie)}catch{O(V)&&K===C.current&&w(null)}return D}catch(D){const ie=Pt(D);if(O(V)){if(v(ie),ie.name==="NotAllowedError"&&(E("denied"),z()),i.getCameraCapabilities&&i.getIsScanning())try{const be=await i.getCameraCapabilities();O(V)&&K===C.current&&w(be)}catch{}r.current.onError?.(ie)}throw ie}},[O,z,i]),ee=d.useCallback(async()=>{try{const H=await i.getCameras();return $.current&&(v(null),E("granted"),z()),H}catch(H){const V=Pt(H);throw $.current&&(v(V),V.name==="NotAllowedError"&&(E("denied"),z()),r.current.onError?.(V)),V}},[z,i]),le=d.useCallback(async(H,V={})=>{const{onSuccess:K,onError:D,...ie}=V;try{if(sf(H,V),!i.scanImage)throw new Error("The configured QR code scan service does not support image scanning.")}catch(ce){const he=Pt(ce);throw $.current&&(v(he),(D??r.current.onError)?.(he)),he}const be=++M.current;++C.current,$.current&&(v(null),c(null),h(null),w(null),x("none"),l("decoding"));try{const ce=await i.scanImage(H,ie);return O(be)&&(c(ce.text),h(ce),l("idle"),x("none"),(K??r.current.onSuccess)?.(ce.text,ce)),ce}catch(ce){const he=Pt(ce);throw O(be)&&(v(he),l("error"),x("none"),(D??r.current.onError)?.(he)),he}},[O,i]),Q=d.useCallback(async()=>{const H=++C.current;if(!i.getCameraCapabilities)return $.current&&w(null),null;try{const V=await i.getCameraCapabilities();return $.current&&H===C.current&&(w(V),v(null)),V}catch(V){const K=Pt(V);throw $.current&&H===C.current&&(v(K),r.current.onError?.(K)),K}},[i]),Ee=d.useCallback(async H=>{const V=++C.current;try{if(!i.setTorch)throw new Error("The configured QR code scan service does not support torch control.");const K=await i.setTorch(H);return $.current&&V===C.current&&(w(K),v(null)),K}catch(K){const D=Pt(K);throw $.current&&V===C.current&&(v(D),r.current.onError?.(D)),D}},[i]),Be=d.useCallback(async H=>{const V=++C.current;try{if(!i.setZoom)throw new Error("The configured QR code scan service does not support zoom control.");const K=await i.setZoom(H);return $.current&&V===C.current&&(w(K),v(null)),K}catch(K){const D=Pt(K);throw $.current&&V===C.current&&(v(D),r.current.onError?.(D)),D}},[i]),qe=d.useCallback(()=>{c(null),h(null)},[]),Se=d.useCallback(()=>{v(null),l(H=>H==="error"?i.getIsScanning()?"scanning":"idle":H)},[i]),Ie=d.useCallback(async()=>{await W(),$.current&&(c(null),h(null),v(null))},[W]);return{status:a,isScanning:af(a),isPaused:a==="paused",isDecodingImage:a==="decoding",result:u,scanResult:p,error:g,mode:k,cameraCapabilities:y,cameraPermission:T,isWechatEnv:S.isWechatEnv,supportsNativeDetector:S.supportsNativeDetector,start:ne,stop:W,pause:B,resume:X,switchCamera:U,getCameras:ee,scanImage:le,refreshCameraCapabilities:Q,setTorch:Ee,setZoom:Be,refreshCameraPermission:z,clearResult:qe,clearError:Se,reset:Ie}},It={GettingStarted:{Overview:{route:"overview",title:"Overview"},Installation:{route:"installation",title:"Installation"},Usage:{route:"usage",title:"Usage"},FAQs:{route:"faqs",title:"FAQs"},Support:{route:"support",title:"Support"}},SentMail:{SentMail:{route:"sent-mail",title:"Sent mail"}},Draft:{Draft:{route:"draft",title:"Draft"}},StatefulHooks:{UsePrevious:{route:"usePrevious",title:"UsePrevious",status:"stable"},UseToggle:{route:"useToggle",title:"UseToggle",status:"stable"},UseLoading:{route:"useLoading",title:"UseLoading",status:"stable"},UseRecord:{route:"useRecord",title:"UseRecord",status:"experimental"},UseMap:{route:"useMap",title:"UseMap",status:"new"},UseMeta:{route:"useMeta",title:"UseMeta",status:"stable"},UseList:{route:"useList",title:"UseList",status:"stable"},UseTree:{route:"useTree",title:"UseTree",status:"stable"},UseReactive:{route:"useReactive",title:"UseReactive",status:"stable"},UseReactor:{route:"useReactor",title:"UseReactor",status:"new"},UseTickState:{route:"useTickState",title:"UseTickState",status:"stable"},UseMemento:{route:"useMemento",title:"UseMemento",status:"stable"}},CallbackHooks:{UseTicker:{route:"useTicker",title:"UseTicker",status:"new"},UseDebounce:{route:"useDebounce",title:"UseDebounce",status:"new"},UseThrottle:{route:"useThrottle",title:"UseThrottle",status:"new"},UseUrl:{route:"useUrl",title:"UseUrl",status:"new"},UseWatch:{route:"useWatch",title:"UseWatch",status:"new"},UseWatchGetter:{route:"useWatchGetter",title:"UseWatchGetter",status:"new"},UseReactorListener:{route:"useReactorListener",title:"UseReactorListener",status:"new"},UseResize:{route:"useResize",title:"UseResize",status:"new"}},PromiseHooks:{UsePromise:{route:"usePromise",title:"UsePromise",status:"experimental"},UseFetch:{route:"useFetch",title:"UseFetch",status:"preview"}},UtilsHooks:{UseForceUpdate:{route:"useForceUpdate",title:"UseForceUpdate",status:"preview"},UseForm:{route:"useForm",title:"UseForm",status:"preview"},UseLazy:{route:"useLazy",title:"UseLazy",status:"preview"},UseLazyImg:{route:"useLazyImg",title:"UseLazyImg",status:"preview"},UseLazyAudio:{route:"useLazyAudio",title:"UseLazyAudio",status:"preview"},UseLazyVideo:{route:"useLazyVideo",title:"UseLazyVideo",status:"preview"},UseMixRef:{route:"useMixRef",title:"UseMixRef",status:"experimental"},UseSafe:{route:"useSafe",title:"UseSafe",status:"preview"},UseLocalStorage:{route:"useLocalStorage",title:"UseLocalStorage",status:"preview"},UseIndexDB:{route:"useIndexDB",title:"UseIndexDB",status:"preview"},useInfiniteScroll:{route:"useInfiniteScroll",title:"UseInfiniteScroll",status:"new"},useAutoPageSize:{route:"useAutoPageSize",title:"UseAutoPageSize",status:"new"}},LifecycleHooks:{UseBeforeMount:{route:"useBeforeMount",title:"UseBeforeMount",status:"preview"},UseMount:{route:"useMount",title:"UseMount",status:"preview"},UseUnmount:{route:"useUnMount",title:"UseUnmount",status:"preview"},UseUpdate:{route:"useUpdate",title:"UseUpdate",status:"preview"},UseUpdateEffect:{route:"useUpdateEffect",title:"UseUpdateEffect",status:"preview"},UseAsyncEffect:{route:"useAsyncEffect",title:"UseAsyncEffect",status:"preview"}},UiUxHooks:{UseTheme:{route:"useTheme",title:"UseTheme",status:"preview"},UseColor:{route:"useColor",title:"UseColor",status:"preview"},UseToast:{route:"useToast",title:"UseToast",status:"experimental"},UseGuide:{route:"useGuide",title:"UseGuide",status:"experimental"},UseRipple:{route:"useRipple",title:"UseRipple",status:"experimental"},UseParticle:{route:"useParticle",title:"UseParticle",status:"experimental"},UseHoudini:{route:"useHoudini",title:"UseHoudini",status:"preview"}},EventHooks:{UseEmitter:{route:"useEmitter",title:"UseEmitter",status:"experimental"},UseReceiver:{route:"useReceiver",title:"UseReceiver",status:"experimental"},UseBroadCastChannel:{route:"useBroadCastChannel",title:"UseBroadCastChannel",status:"experimental"},UseProvide:{route:"useProvide",title:"UseProvide",status:"experimental"},UseInject:{route:"useInject",title:"UseInject",status:"experimental"}},OtherHooks:{UseQrcodeScan:{route:"useQrcodeScan",title:"UseQrcodeScan",status:"new"},UseProtect:{route:"useProtect",title:"UseProtect",status:"experimental"},UseRaf:{route:"useRaf",title:"UseRaf",status:"preview"},UseRafState:{route:"useRafState",title:"UseRafState",status:"preview"},UseReflect:{route:"useReflect",title:"UseReflect",status:"experimental"},UseBatchHooks:{route:"useBatchHooks",title:"UseBatchHooks",status:"experimental"},UseClickAway:{route:"useClickAway",title:"UseClickAway",status:"preview"},UseConsoleLog:{route:"useConsoleLog",title:"UseConsoleLog",status:"experimental"},UseCookie:{route:"useCookie",title:"UseCookie",status:"preview"},UseDimensions:{route:"useDimensions",title:"UseDimensions",status:"preview"},UseDimensionsById:{route:"useDimensionsById",title:"UseDimensionsById",status:"preview"},UseSafeArea:{route:"useSafeArea",title:"UseSafeArea",status:"preview"},UseScroll:{route:"useScroll",title:"UseScroll",status:"preview"},UseSingleTon:{route:"useSingleton",title:"UseSingleTon",status:"preview"},UseMediaQuery:{route:"useMediaQuery",title:"UseMediaQuery",status:"preview"},UseMousePosition:{route:"useMousePosition",title:"UseMousePosition",status:"preview"},UseNetwork:{route:"useNetWork",title:"UseNetWork",status:"experimental"},UseOverflow:{route:"useOverflow",title:"UseOverflow",status:"preview"},UseWhyDidYouUpdate:{route:"useWhyDidYouUpdate",title:"UseWhyDidYouUpdate",status:"experimental"},UseEyeDropper:{route:"useEyeDropper",title:"UseEyeDropper",status:"preview"},UseHover:{route:"useHover",title:"UseHover",status:"preview"},UseKeyPress:{route:"useKeyPress",title:"UseKeyPress",status:"preview"},UseBattery:{route:"useBattery",title:"UseBattery",status:"experimental"},UseTitle:{route:"useTitle",title:"UseTitle",status:"new"},UseFavicon:{route:"useFavicon",title:"UseFavicon",status:"new"}}},N=e=>o("li",{style:{marginBottom:"0.5rem"},...e});function cf(e){return o("div",{style:{width:"fit-content",height:"fit-content"},css:e.css,onClick:e.onClick,children:o(Rm,{style:{transform:"rotateY(180deg)"},fontSize:"small"})})}const bi=(e,t,n,r)=>{navigator.clipboard.writeText(e??"").then(()=>{t&&t()}).catch(i=>{n&&n(i||new Error("Copy failed with some unknown error"))}).finally(()=>{r&&r()})},yi=(e,t,n,r)=>{const i=document.createElement("textarea");i.value=e||"",document.body.appendChild(i),i.focus(),i.select();const a=document.execCommand("copy");document.body.removeChild(i),a?t&&t():n&&n(new Error("Copy failed with some unknown error"))};let dr=(e,t,n,r)=>{navigator.clipboard&&window.isSecureContext?(bi(e,t,n,r),dr=bi):(yi(e,t,n),dr=yi)};const ur=e=>{const t=uo(),[n,r]=d.useState(e.defaultOpen||!1),i=()=>r(!n),a=()=>{dr(e.children,()=>{t("Copied to clipboard")},()=>{t("Failed to copy to clipboard")})};return s("div",{css:df,children:[o("div",{css:uf,children:n&&o(cf,{onClick:a})}),o(ct,{in:n,children:o(ke,{theme:"vscDarkPlus",lang:e.lang??"tsx",children:e.children})}),s("div",{css:pf,children:[o(A,{className:"CodexBoxBtn",onClick:i,size:"small",children:o(wm,{})}),o(A,{className:"CodexBoxBtn",onClick:a,size:"small",children:o(Cm,{fontSize:"small"})}),o(A,{className:"CodexBoxBtn",onClick:()=>{},size:"small",children:o(vl,{fontSize:"small"})})]})]})},df={name:"bjn8wh",styles:"position:relative"},uf={name:"1f4m62j",styles:"position:absolute;top:16px;right:8px;z-index:1;color:gray;cursor:pointer;padding:8px 6px 2px 6px;border-radius:4px;&:hover{background-color:#333;}&:active{transition:background-color 0.1s ease-in-out;background-color:#444;}"},pf={name:"7ggdfk",styles:"display:flex;justify-content:flex-end;align-items:center;gap:0.5em"},hf={$article:{Consideration:"注意事项"},useWatch:{desc:"一个监听对象某具名属性变化的 hook。",detail:s(b,{children:["useWatch 是一个用于监听对象属性变化的 hook，它接受三个参数，分别是：",s("ol",{children:[o("li",{children:"目标对象"}),o("li",{children:'目标属性路径 (形如 "a.b.c" 或者 ["a", "b", "c"]) 或者一个 getter 函数'}),o("li",{children:"回调函数"})]}),"当目标对象的目标属性发生变化时，useWatch 会调用回调函数，回调函数接受两个参数，分别是：",s("ol",{children:[o("li",{children:"旧值"}),o("li",{children:"新值"})]}),"例如："]}),consideration:s("ol",{children:[o(N,{children:"目标应该是一个对象"}),o(N,{children:"目标属性路径应该是一个字符串或者字符串数组，更推荐后者"}),o(N,{children:"回调函数应该是一个函数"}),s(N,{children:["默认情况下，返回值不会有明确的类型推断，因为从复杂对象中获取类型是困难的，但是你可以手动指定类型，例如：",o("code",{children:'const a: string = useWatch(obj, "a")'}),"。与此同时，回调函数会自动为旧值和新值分配类型。"]}),o(N,{children:"严格模式会影响获取特殊键的属性，并可能导致能量消耗，最好的方法是使用数组作为路径而不是字符串路径与严格模式。"}),s(N,{children:["如何获取被监听的值 ","( 比如 c in const obj = { a: { b : { c : 1 } } } )","?",o("p",{children:"有四种方式："}),s("ol",{children:[o("li",{children:o(ke,{children:'const c = useWatch(obj, "a.b.c", (a: number|undefined, b) => {})'})}),o("li",{children:o(ke,{children:'const c: number|undefined = useWatch(obj, "a.b.c", (a, b) => {})'})}),o("li",{children:o(ke,{children:'const c = useWatch<typeof obj, number>(obj, "a.b.c", (a, b) => {})'})}),o("li",{children:o(ke,{children:'const c: PathValue<typeof obj, "a.b.c"> = useWatch(obj, "a.b.c", (a, b) => {})'})}),o("p",{children:'第四种方式只适用于字符串路径而不是数组路径，并且如果路径中的一个键包含 "." 字符，则推断将失败。'})]})]}),o("p",{children:'因此，建议避免在对象中使用包含 "." 字符 的字符串作为键，然后在非严格模式下使用字符串或数组路径，从字符串路径推断出 PathValue。一切都会很好。 此外，使用 getter 替代路径，在这种情况下，你需要确认你的 getter 总能正确工作。'})]})}},at=()=>o("span",{css:$css`color: gray;`,children:"Going to complete"}),mf={$article:{Consideration:"Consideration"},useWatch:{desc:"A hook to watch certain property in an object.",detail:s(b,{children:["useWatch is a hook that is used to watch the change of certain property, it accepts three parameters, which are:",s("ol",{children:[o("li",{children:"target object"}),o("li",{children:'target property path (like "a.b.c" or ["a", "b", "c"]) or a getter function'}),o("li",{children:"callback function"})]}),"When the target property of the target object changes, useWatch will call the callback function, which accepts two parameters, which are:",s("ol",{children:[o("li",{children:"old value"}),o("li",{children:"new value"})]}),"For example:"]}),$p1:"",consideration:s("ol",{children:[o(N,{children:"target object should be type of object"}),o(N,{children:"target property path should be type of string or array of string, the latter is suggested"}),o(N,{children:"callback function should be type of function"}),s(N,{children:["default, the returned will has no excipit type infer, because inter a type from a complex object is difficult, but you can assign type by yourself, like this: ",o("code",{children:'const a: string = useWatch(obj, "a")'}),". In the meantime, callback function will auto assign type to old value and new value"]}),o(N,{children:"the strict will make effects to get the property with special key and may cause energy consumption, the best way is to use array as path instead of string path with strict mode."}),s(N,{children:["How can I get valueType watched ","( like c in const obj = { a: { b : { c : 1 } } } )","?",o("p",{children:"There are five ways:"}),s("ol",{children:[o("li",{children:o(ke,{lang:"ts",children:'const c = useWatch(obj, "a.b.c", (a: number|undefined, b) => {})'})}),o("li",{children:o(ke,{lang:"ts",children:'const c: number|undefined = useWatch(obj, "a.b.c", (a, b) => {})'})}),o("li",{children:o(ke,{lang:"ts",children:'const c = useWatch<typeof obj, number>(obj, "a.b.c", (a, b) => {})'})}),o("li",{children:o(ke,{lang:"ts",children:'const c: PathValue<typeof obj, "a.b.c"> = useWatch(obj, "a.b.c", (a, b) => {})'})}),o("li",{children:o(ke,{lang:"ts",children:"const c = useWatch(obj, (state) => state.a.b.c, (a, b) => {})"})}),o("p",{children:'The fourth way is only work with string path not array path, and infer will fail if the one key in path includes "." character.'})]})]}),o("p",{children:'Therefore, it is suggested to avoid using string includes "." as keys in your object, and then run with string or array path or under non-strict mode with PathValue inferred from the string path. Everything will be fine. Otherwise, use getter instead of path, in this case, you need to confirm your getter always works correctly.'})]}),$best:o("ul",{children:o(at,{})}),$faqs:o("ul",{children:o(at,{})}),$apis:{generics:o(b,{}),params:{},return:{}}},useUrl:{desc:"A hook to get url params.",detail:s(b,{children:["useUrl is a hook that is used to listen url and get params, it accepts four parameters.",s("ol",{children:[s(N,{children:[o("strong",{children:"callback (?)"}),": The function will be called when url changes."]}),s(N,{children:[o("strong",{children:"name (?)"}),": The name of url listener, if you have multiple url listeners, you can use this parameter to distinguish them."]}),s(N,{children:[o("strong",{children:"immediate (false)"}),": The function will be called immediately when url changes."]}),s(N,{children:[o("strong",{children:"config (?)"}),": The configuration of the params parser.",s("ol",{children:[s(N,{children:[o("strong",{children:"mode (?)"}),': The mode of the params parser: `"string"` | `"auto"` = `"auto"`.']}),s(N,{children:[o("strong",{children:"autoParams (?)"}),": The parameters to treat as auto."]}),s(N,{children:[o("strong",{children:"stringifyParams (?)"}),": The parameters to treat as string."]}),s(N,{children:[o("strong",{children:"custom (?)"}),": The custom parser of certain query parameters."]})]})]})]}),"For example:"]}),consideration:s(b,{children:[o("strong",{children:"Type parameters"}),o("ol",{children:s("li",{children:[o("strong",{children:"T"})," - `string` or `object`",s("ul",{children:[o("li",{children:'The string to convert, like `"http://localhost?id=1&name=evan"`'}),s("li",{children:["object: object to inferred as, like ",o("code",{children:'`{ id: "1", name: "evan" }`'})]})]})]})}),s("ol",{children:[s("li",{children:[o("strong",{children:"Mode"}),' - The mode to use when converting: `"string"` | `"fuzzy"` | `"auto"` | `"strict"` | `"any"` = `"auto"`.']}),s("li",{children:[o("strong",{children:"StrictParams"})," - The parameters to treat as strict."]}),s("li",{children:[o("strong",{children:"FuzzyParams"})," - The parameters to treat as fuzzy."]})]})]})},useProtect:{desc:"A hook to protect your state.",detail:s(b,{children:["useProtect is a hook that is used to protect your state being changed:",s("ol",{children:[o("li",{children:"initialValue"}),o("li",{children:"Conditions to protect"})]}),"For example:"]}),consideration:s("ol",{children:[o(N,{children:"initialValue is type of any"}),o(N,{children:"Conditions to protect could be type of boolean, string or null."}),s("ul",{children:[s(N,{children:[o("strong",{children:"boolean"}),": if the condition is true, the state will be protected with default error message."]}),s(N,{children:[o("strong",{children:"string"}),": if the condition is not empty string, the state will be protected with the string as error message."]}),s(N,{children:[o("strong",{children:"null"}),": if the condition is null, the state will not be protected"]})]})]})},useToggle:{desc:"A hook to toggle boolean state.",detail:s(b,{children:["useToggle is a hook that is used to toggle boolean state:",o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"initialValue"})," (?) : boolean, default is false"]}),s("li",{children:[o("strong",{children:"valueMap"})," (?) : the returned value map"]}),s("ul",{children:[s("li",{children:[o("strong",{children:"true"})," (?) : the value when state is true, default is true"]}),s("li",{children:[o("strong",{children:"false"})," (?) : the value when state is false, default is false"]})]})]}),"For example:"]}),consideration:o("ol",{children:o(N,{children:"initialValue is type of boolean"})}),$p1:"configure the value mapping"},useLoading:{desc:"A hook to toggle loading state.",detail:s(b,{children:["useLoading is a hook that is used to manage loading state:",o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"initialValue"})," (?) : loading map"]}),s("li",{children:[o("strong",{children:"options"})," (?) : the config of value formatter"]}),s("ul",{children:[s("li",{children:[o("strong",{children:"boolify"})," (?) : the value when state is true, default is true"]}),s("li",{children:[o("strong",{children:"setType"}),' (?) : invoke setter using "override" or "spread"']})]})]}),"For example:"]}),consideration:s("ol",{children:[o(N,{children:"Returned Value is an array merged with object like the struct following : "}),o(ke,{lang:"text",theme:"oneLight",children:`
[loading, onLoading, unLoading, plusLoading, minusLoading, setLoading]
  & 
{
  loading;
  onLoading;
  unLoading;
  plusLoading;
  minusLoading;
  setLoading;
}
`}),o(N,{children:"When you use loading in count way, you must confirm that plus times is always same with minus times"}),o(N,{children:"By default, the loading value will be false when the loading value is 0, you can disable it by setting boolify to false"}),s(N,{children:["By default, the set actions will ",o("strong",{children:"override"}),' the old value, you can disable it by setting setType to "spread"']})]}),$p1:"You can use loading in count way, that means you can plus or minus loading value, and the loading state will be true when the value is greater than 0, otherwise false."},useMeta:{desc:"A React Hook that returns a meta state and a function to set the meta state",detail:s(b,{children:[o("h4",{children:"Parameters: "}),s(N,{children:[o("strong",{children:"initialObject"})," : The initial state object of the meta state."]}),s(N,{children:[o("strong",{children:"deepSet"})," (?): Whether to use deep clone when setting the meta state. Defaults to false."]})]}),$p1:"Use setObj to update certain property in object and rerender the component. If you directly reassign properties in object, the view will only sync at next rerender.",$p2:"Set property from the old property",$p3:"Reset the whole object directly or from old object",consideration:s("ol",{children:[o(N,{children:"The state must be an object."}),o(N,{children:"No deepSet will work quicker."}),s(N,{children:["Do not reassign properties during setting :",s("div",{style:{marginTop:"4px"},children:["It is ",o("strong",{children:"bad"})," and will not work: ❌"]}),o(ke,{lang:"ts",children:"set('count', obj.count++)"}),o("div",{children:"It is ok: ✅"}),o(ke,{lang:"ts",children:"set('count', obj.count + 1)"}),o("div",{children:"It is the best: ✅"}),o(ke,{lang:"ts",children:"set('count', (pre) +> pre + 1)"})]})]}),$faqs:s("ul",{children:[s(N,{children:[o("strong",{children:"Q"}),": Why useMeta instead of useState?"]}),s(N,{children:[o("strong",{children:"A"}),": Because useMeta makes it easier to set deep properties of the state."]}),o("br",{}),s(N,{children:[o("strong",{children:"Q"}),": What's the difference of deepSet or not?"]}),s(N,{children:[o("strong",{children:"A"}),": When deepSet is true, the state will be deep cloned when setting the state, otherwise it will be shallow cloned. Deepclone is slower than shallowclone, but it is safer. Therefore, when the state object is huge, you should avoid using deepSet unless necessary."]})]})},useReactive:{desc:"A hook to make your object reactive.",detail:s(b,{children:["useReactive is a hook that is used to make your object reactive:",o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"initialValue"})," : primitives, array, object, Date, Map or Set"]}),s("li",{children:[o("strong",{children:"deep"})," (?) : boolean, Whether to deep reactive, default is true"]})]}),"For example:"]}),$p1:"Create a reactive proxy for an object",$p2:"Create a reactive proxy for an array",$p3:"Create a reactive proxy for a primitive value. In this case, the returned struct will be like this: { value: 1 }, and you can get the value by using value property.",consideration:s(b,{children:[s("ol",{children:[o(N,{children:"initialValue could be of primitives, array, object, Date, Map and Set."}),o(N,{children:"deep is type of boolean"})]}),s("p",{style:{padding:"20px",background:"#cff",borderRadius:"4px"},children:[o("strong",{children:"ℹ️ Notice"})," : Every time you call a method on the reactive object will cause rerender."]}),s("p",{style:{padding:"20px",background:"#ffd",borderRadius:"4px"},children:[o("strong",{children:"⚠️ Warning"})," : useReactive makes proxies for all properties on the target as many as possible, some apis will behave differently from the original."]})]}),$best:o(b,{children:s("ul",{children:[s(N,{children:[o("strong",{children:"Better performance"})," : Use shallow reactive, and define a property to rerender."]}),s(N,{children:[o("strong",{children:"Better reactive"})," : Use deep reactive, rerender every when property changes."]}),s(N,{children:[o("strong",{children:"Better security"})," : Use unwrap (exported from useReactive) to control reactive data, and reassign it to the reactive proxy."]})]})}),$faqs:s("ul",{children:[s(N,{children:[o("strong",{children:"Q"}),": Why useReactive instead of useState?"]}),s(N,{children:[o("strong",{children:"A"}),": Because useReactive simplifies the process of making object reactive. That is you can play react.js like Vue.js."]}),o("br",{}),s(N,{children:[o("strong",{children:"Q"}),": What's the difference of deep or not?"]}),s(N,{children:[o("strong",{children:"A"}),": When deep is true, the object will be deep reactive, otherwise it will be shallow reactive. Deep reactive means every properties on object will get proxied. Shallow reactive means only the first level properties will get proxied."]})]}),$apis:{generics:o("ul",{children:s("li",{children:[o("strong",{children:"T"}),": suggest to extends primitives | Array | object | Date | Map | Set"]})}),params:{},return:{}}},useList:{desc:"A hook to manage list state.",detail:o(b,{}),consideration:s("ol",{children:[s(N,{children:[o("strong",{children:"initialValue"})," : array"]}),s(N,{children:[o("strong",{children:"options"})," : object"]})]}),$p1:"Just render the temporary list view.",$p2:"Control the temporary list data, as you see, the original list data is still. Only when you save the list, will the original list get updated.",$best:o("ul",{children:s(N,{children:[o("strong",{children:"Best management"})," : Use isolation and control together."]})}),$faqs:s(b,{children:[s(N,{children:[o("strong",{children:"Q"}),": Why useList instead of useState?"]}),s(N,{children:[o("strong",{children:"A"}),": Because useList makes it easier to manage list state."]}),o("br",{}),s(N,{children:[o("strong",{children:"Q"}),": What abilities does useList have?"]}),s(N,{children:[o("strong",{children:"A"}),": useList has lots of abilities:",s("ol",{children:[s("li",{children:[o("strong",{children:"render"}),": render the list view"]}),s("li",{children:[o("strong",{children:"isolation"}),": isolate the view data and original data."]}),s("li",{children:[o("strong",{children:"control"}),": provide many ways to control the list data."]}),s("li",{children:[o("strong",{children:"backtracking"}),": provide ability to trace back the list data."]}),s("li",{children:[o("strong",{children:"pagination"}),": provide ability to paginate the list data."]}),o("span",{children:"..."})]})]})]}),$apis:{generics:o(b,{children:s("li",{children:[o("strong",{children:"T"}),": typeof list elements"]})}),params:{},return:{}}},useReactor:{desc:"A state hook based on Reactor Model.",detail:s(b,{children:[o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"initialValue"})," : object"]}),s("li",{children:[o("strong",{children:"plugins"})," : ","ReactorPlugin<T>[]"]})]}),"For example:"]}),consideration:s(b,{children:[s("ol",{children:[o(N,{children:"Direct mutation of reactor.value properties won't trigger re-renders. Always use set() or setValue() to update state."}),o(N,{children:'Use path-based set() method (e.g., set("user.name", "John")) for updating nested properties instead of direct assignment.'}),o(N,{children:"Reactor is best suited for managing complex object state. For simple primitive values, consider using useState instead."}),o(N,{children:"Plugin actions are executed synchronously during state changes. Avoid heavy computations in plugin callbacks."}),o(N,{children:"The event bus (emit/on) is isolated to Reactor instances only and doesn't share events with useEmitter or useReceiver hooks."})]}),s("p",{style:{padding:"20px",background:"#ffd",borderRadius:"4px"},children:[o("strong",{children:"⚠️ Warning"})," : please invoke subscribe, on and listeners in useEffect hook area to avoid some unexpectable problems."]})]}),$p1:"Basic usage, manage a state. You can use get() to get certain property by path or directly access that by keys chain. You can use set() to update certain property value by path.",$p1_1:"Because this state is typeof object, therefore, the third button can directly change the stored value, but will not trigger the rerender.",$p2:"Register a plugin to the Reactor Instance, and dipatch its name to invoke the plugin",$p3:"Import listen from useReactor, listen the state changing, and do something in then code block.",$p4:"Ressign the value of Reactor instance can override the state. You can also use setValue to do that.",$p5:"You can clone a new Reactor from an existing Reactor instance, but they will point to the same state. CloneValue will just clone value of state.",$p6:"You can assign a default value to Reactor, and when you invoke reset, the value will be reset to default value.",$p7:"Different Reactor instances can communicate with each other by a global event bus, you can emit a event and use on to receive a event payload.",$p7_notice:o(b,{children:s("p",{style:{padding:"20px",background:"#cff",borderRadius:"4px"},children:[o("strong",{children:"ℹ️ Notice"})," : Reactor Event Bus is dependent from the Emitter's."]})}),$best:s("ul",{children:[s(N,{children:[o("strong",{children:"Component Communication"}),": Use Reactor's event bus (emit/on) to sync data between components without prop drilling."]}),s(N,{children:[o("strong",{children:"Plugin System"}),": Leverage plugins for cross-cutting concerns like logging, validation, or persistence to keep component logic clean."]}),s(N,{children:[o("strong",{children:"Path-based Access"}),': Use get("user.profile.name") and set("user.profile.name", value) for deeply nested properties instead of manual traversal.']}),s(N,{children:[o("strong",{children:"State Subscription"}),": Use subscribe() to react to state changes in other parts of your application without tight coupling."]}),s(N,{children:[o("strong",{children:"Default Values"}),": Set default values with setDefaultValue() and use reset() to easily restore initial state (useful for forms)."]}),s(N,{children:[o("strong",{children:"State Cloning"}),": Use cloneValue() when you need an independent copy of the state for comparison or undo functionality."]})]}),$faqs:s("ul",{children:[s(N,{children:[o("strong",{children:"Q"}),": Why useReactor instead of useState?"]}),s(N,{children:[o("strong",{children:"A"}),": Reactor provides advanced features like path-based access, subscriptions, plugins, event system, and easier state management for complex objects. It's ideal when you need more than simple state updates."]}),s(N,{children:[o("strong",{children:"Q"}),": When should I use plugins?"]}),s(N,{children:[o("strong",{children:"A"}),": Use plugins to add custom logic that runs on state changes or actions, such as logging, validation, persistence, or side effects. Plugins help keep your component code clean and reusable."]}),s(N,{children:[o("strong",{children:"Q"}),": Can I use Reactor outside of React components?"]}),s(N,{children:[o("strong",{children:"A"}),": Yes, you can create a Reactor instance directly using `new Reactor(initialValue)`, but it won't trigger React re-renders. Use useReactor hook inside components for automatic re-rendering."]})]}),$apis:{generics:o("ul",{children:s("li",{children:[o("strong",{children:"T"}),": typeof state value."]})}),params:{},return:{}}},useTree:{desc:"A hook to manage tree state.",detail:s(b,{children:[o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"initialValue"})," : array"]}),s("li",{children:[o("strong",{children:"options"})," : object"]})]}),"For example:"]}),$p1:"Here is a simple example to show how to use useTree hook.",consideration:s("ol",{children:[s(N,{children:["initialValue is type of ",o("span",{className:"txt-secondary",children:"TreeNode"})]}),o(N,{children:"options is type of object"})]}),$best:o("ul",{children:s(N,{children:[o("strong",{children:"Control the virtual nodes"})," : Avoid to change the original nodes directly."]})}),$faqs:s("ul",{children:[s(N,{children:[o("strong",{children:"Q"}),": Why useTree instead of useState?"]}),s(N,{children:[o("strong",{children:"A"}),": Because useTree makes it easier to manage and render tree state."]})]}),$apis:{generics:s(b,{children:[s("li",{children:[o("strong",{children:"T"}),": extends TreeNode, type of node"]}),s("li",{children:[o("strong",{children:"K"}),": extends string, key name of node as idKey"]})]}),params:{},return:{}}},useBatchHooks:{desc:"A hook to batch hooks.",detail:s(b,{children:["useBatchHooks is a hook that is used to batch hooks:",o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"hook"})," : the hook to be executed"]}),s("li",{children:[o("strong",{children:"count"})," (?) : number of times to execute the hook, default is 1"]})]}),"For example:"]}),$p1:"You can batch hooks to create a series of ripple refs and bind them to a series of elements.",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useMemento:{desc:"A hook to manage a state as memento",detail:s(b,{children:[o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"initialState"})," : any"]}),s("li",{children:[o("strong",{children:"config"})," : object"]})]}),"For example:"]}),$p1:"The initial state will be the first state in the history. By default, the history size is 10, and the strict mode is false. Therefore, the history will be 10 states at most, and an Error would be thrown out when the idKey is not found.",$p2:"You should know that if you invoke clear api, all will be cleared, including the history, so this action is not rollbackable. Also, after clear, current idKey will be set to NaN. (In future versions, it may be set to other falsy value such null.)",consideration:s("ol",{children:[o(N,{children:"initialState is type of any"}),o(N,{children:"config is type of object of MementoConfig"})]}),$best:o("ul",{children:s(N,{children:[o("strong",{children:"Strict Mode"})," : Use strict mode and set idKey to a unique value."]})}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},usePrevious:{desc:"A hook to store previous state.",detail:s(b,{children:["usePrevious is a hook that is used to store previous state:",o("h4",{children:"Parameters : "}),o("ol",{children:s("li",{children:[o("strong",{children:"state"})," : any state from useState"]})}),"For example:"]}),$p1:"The previous state will be undefined when the state is the first state.",consideration:o("ol",{children:"It is just a simple hook, no consideration."}),$best:o(b,{children:"This is a React component that allows users to toggle between a light and dark theme. The usePrevious hook is used to keep track of the previous theme, and a message is logged to the console whenever the theme changes."}),$faqs:s("ul",{children:[s(N,{children:[o("strong",{children:"Q"}),": Why usePrevious instead of useState?"]}),s(N,{children:[o("strong",{children:"A"}),": Because it is more convenient for readonly state."]}),o("br",{})]}),$apis:{generics:o(b,{children:s("li",{children:[o("strong",{children:"T"}),": extends any, type of state."]})}),params:{state:"any state from useState"},return:{previous:"the previous state"}}},useEmitter:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useReceiver:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useReflect:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useProvide:{desc:"A hook to share a state with other components.",detail:s(b,{children:["useProvide is a hook that is used to share a state with other components, and it is based on"," ",o("a",{href:"#/docs/useEmitter",children:"useEmitter"}),":",o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"name"})," : the name of the state, should be unique"]}),s("li",{children:[o("strong",{children:"state"})," : any state from useState"]})]}),"For example:"]}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useInject:{desc:"A hook to inject a state from other components.",detail:s(b,{children:["useInject is a hook that is used to inject a state from other components, and it is based on"," ",o("a",{href:"#/docs/useReceiver",children:"useReceiver"}),":",o("h4",{children:"Parameters : "}),o("ol",{children:s("li",{children:[o("strong",{children:"name"})," : the name of the state, should be unique"]})}),"For example:"]}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useGuide:{desc:"",detail:o(b,{}),$p1:"Make guidence for elements with certain ids.",$p2:s(b,{children:[s("p",{children:[o("strong",{children:"Try to wrapp the target element with Target component."})," The wrapped is different from the raw, they have different method to render and insert the guide element into DOM tree."]}),o("p",{children:"By raw way, useGuide will create a div wrapper on every guidence element, and append it to the target element."}),s("p",{children:["By Target wrapped way, useGuide will wrap the target element with pure fregment, and render the guidence element into the fregment with",o("code",{children:" React.createPortal "}),"."]}),o("p",{children:"The expressional difference in visiable is that the wrapped way will higher the zIndex of target element than mask, and the raw way will not. (Actually, the raw way will higher target too, but for some reason, it may not work.)"})]}),consideration:s("ol",{children:[o(N,{children:"target element should have id"}),o(N,{children:"the id should be unique"})]}),$best:s("ul",{children:[o(N,{children:"Ensure the parent element of the target element has a position of either 'relative' or 'absolute'. This allows the guide element (with 'absolute' positioning) to be positioned relative to the parent element."}),o(N,{children:"If the parent element is a scroll container, ensure it has sufficient height and width to contain all its content. This allows the guide element to correctly follow its target element when the user scrolls."}),o(N,{children:"Avoid using 'overflow: hidden' on the parent element if possible. This could cause the guide element to be clipped or hidden."}),o(N,{children:"If the parent element has a high 'z-index' value, you may need to adjust the 'z-index' of the guide element to ensure it appears above the parent element."}),o(N,{children:"If the parent element has padding or borders, these values may need to be considered in the positioning calculations for the guide element."})]}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useTickState:{desc:"A hook to manage state with tick.",detail:s(b,{children:["useTickState is a hook that is used to manage state with tick:",o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"initialValue"})," : any"]}),s("li",{children:[o("strong",{children:"tickBy"}),' : "onSetState" | "onChange"']})]}),"For example:"]}),$p1:"Tick by onSetState(default)",$p2:"Tick by onChange",consideration:s("ol",{children:[o(N,{children:`When tickby "onSetState", you'd better avoid abuse setState`}),o(N,{children:`When tickby "onChange", you'd better confirm your dependencies`})]}),$best:o("ul",{children:o(N,{children:'Tick by "onSetState", and before invoke setState check whether the new value is differ from the old.'})}),$faqs:s("ul",{children:[s(N,{children:[o("strong",{children:"Q"})," : Why I need useTickState?"]}),s(N,{children:[o("strong",{children:"A"})," : useTickState give you a more clear tag to tag whether the state changes"]})]}),$apis:{generics:o(b,{}),params:{},return:{}}},useReactorListener:{desc:"A hook to listen Reactor instance's value changes.",detail:s(b,{children:["useReactorListener is a hook that is used to listen Reactor instance's value changes:",o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"reactor"})," : Reactor instance"]}),s("li",{children:[o("strong",{children:"callback"})," : ReactorListener Callback"]}),s("li",{children:[o("strong",{children:"immediate"})," : boolean, default is false"]})]}),"For example:"]}),$p1:"The immediate listener will be invoked immediately when the listener is registered. Therefor, the first example will not get userCopy sync at initial, and the second example will.",consideration:s("ol",{children:[o(N,{children:"reactor is type of Reactor instance"}),o(N,{children:"callback is type of ReactorListenerCallback"})]}),$best:o("ul",{children:o(N,{children:"Use immediate listener to sync the value at initial."})}),$faqs:s("ul",{children:[s(N,{children:[o("strong",{children:"Q"})," : Why I need useReactorListener?"]}),s(N,{children:[o("strong",{children:"A"})," : useReactorListener allows you to listen a Reactor independently."]})]}),$apis:{generics:o(b,{}),params:{},return:{}}},useTicker:{desc:"A hook to manage a ticker.",detail:s(b,{children:["useTicker is a hook that is used to manage a ticker:",o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"fn"})," : Callback function"]}),s("li",{children:[o("strong",{children:"duration or options"})," : the duration of ticker's config"]}),s("li",{children:[o("strong",{children:"options"})," : ticker's config"]})]}),"For example:"]}),$p1:"",consideration:o("ol",{children:o("li",{children:"when immediate is true, only the first resume will call the callback immediately."})}),$best:o("ol",{children:o(at,{})}),$faqs:o("ul",{children:o(at,{})}),$apis:{generics:o(b,{}),params:{},return:{}}},useDebounce:{desc:"",detail:o(b,{children:"useDebounce is a hook that is used to debounce a function."}),$p1:"Try to click on the button frequently, and see whether the number changes 1 sec after your last click.",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o("ul",{children:s("li",{children:[o("strong",{children:"R"}),": suggest to extends primitives | Array | object | Date | Map | Set"]})}),params:{},return:{}}},useMap:{desc:"A React Hook that manages a Map state with convenient methods for manipulation.",detail:s(b,{children:["useMap is a hook that provides a convenient way to manage Map state in React. It wraps the native Map data structure and provides methods like set, get, del, and add to manipulate the map state. The returned map is readonly, which means you cannot use map.set() directly, but must use the provided set() method to trigger re-renders.",o("h4",{children:"Parameters:"}),o("ol",{children:s("li",{children:[o("strong",{children:"initialState"}),": T extends Object - The initial state object that will be converted to a Map."]})}),"For example:"]}),$p1:"Basic usage: initialize a map with an object, and use get() to retrieve values and set() to update values.",$h2:"Get and Set",$p2:"You can get properties from the map directly by `map.get` or by using get method, and set properties by using set method. `map.set` is omitted from the map.",$h3:"Four overloads of set",$p3:s(b,{children:["Set method has 4 overloads:",s("ol",{children:[o("li",{children:"set<K> = (key: K, value: T[K]): void;"}),o("li",{children:"set<K> = (key: K, setValueAction: (prev: T[K]) => T[K]): void"}),o("li",{children:"set(record, mode?: 'rehydrate' | 'override'): void"}),o("li",{children:"set(setMapAction: (prev: Map) => T | Map, mode?: 'rehydrate' | 'override'): void"})]})]}),$p4:s(b,{children:[o("p",{children:"About 3rd and 4th overload, you can set second parameter to 'rehydrate' to rehydrate the map, or 'override' to override the map. If the mode not specified, it will be 'rehydrate' by default."}),o("p",{children:"About 4th overload, the return of setMapAction could be type of a Map instance of a plain object of T."})]}),$h4:"Del and Add",$p5:"You can delete a property by using del method, and add a property by using add method.",consideration:s("ol",{children:[o(N,{children:"Unless you del, the type of map.get is T[K] actually"}),o(N,{children:'Default set action mode is "rehydrate"'})]}),$best:o("ol",{children:o("span",{children:"If you prefer Map than Object, useMap is a good choice than useRecord"})}),$faqs:s("ul",{children:[s(N,{children:[o("strong",{children:"Q"}),": Why useMap instead of useState with Map?"]}),s(N,{children:[o("strong",{children:"A"}),": useMap provides convenient methods (set, get, del, add) and ensures immutability automatically. You don't need to manually create a new Map instance to trigger re-renders."]}),s(N,{children:[o("strong",{children:"Q"}),": What's the difference between 'rehydrate' and 'override' mode?"]}),s(N,{children:[o("strong",{children:"A"}),": 'rehydrate' merges new values with existing ones (keeps existing keys), while 'override' replaces the entire map (removes all existing keys)."]}),s(N,{children:[o("strong",{children:"Q"}),": Can I use map.set() directly?"]}),s(N,{children:[o("strong",{children:"A"}),": No, the returned map is readonly. You must use the provided set() method to trigger re-renders."]})]}),$apis:{generics:o(b,{}),params:{},return:{}}},useRecord:{desc:"useRecord is a hook that is used to manage an one-level record object.",detail:s(b,{children:[o("h4",{children:"Parameters : "}),o("ol",{children:s("li",{children:[o("strong",{children:"initialValue"})," : object"]})}),"For example:"]}),$p1:"You can use setRecord to set a property of the record object.",consideration:o("ol",{children:o(at,{})}),$best:o("ul",{children:o(at,{})}),$faqs:o("ul",{children:o(at,{})}),$apis:{generics:o(b,{}),params:{},return:{}}},useResize:{desc:"",detail:o(b,{}),$p1:"Prop nothing, listen the resize event of window. Try to resize the window and see the changes.",$h2:"Listen an element",$p2:"Prop a ref, listen the resize event of the ref element. Try to drag the sliders to see the changes.",consideration:o("ol",{children:o(at,{})}),$best:o("ul",{children:o(at,{})}),$faqs:o("ul",{children:o(at,{})}),$apis:{generics:o(b,{}),params:{},return:{}}},useThrottle:{desc:"useThrottle is a hook that is used to throttle a function to be called at most once in a certain period.",detail:s(b,{children:[o("h4",{children:"Parameters : "}),s("ol",{children:[s(N,{children:[o("strong",{children:"fn"})," : Callback function"]}),s(N,{children:[o("strong",{children:"interval"})," : number"]}),s(N,{children:[o("strong",{children:"options"})," : throttle's config"]})]}),"For example:"]}),$p1:"Click the button, and see whether the number changes only once during every second.",consideration:o("ol",{children:o(at,{})}),$best:o("ul",{children:o(at,{})}),$faqs:o("ul",{children:o(at,{})}),$apis:{generics:o(b,{}),params:{},return:{}}},useWatchGetter:{desc:"A hook to watch the getter of a state.",detail:s(b,{children:[o("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[o("strong",{children:"getter"})," : Getter"]}),s("li",{children:[o("strong",{children:"callback"})," : WatcherCallback"]}),s("li",{children:[o("strong",{children:"updater"})," : Whether to return a manual reupdate function."]})]}),"For example:"]}),$p1:"The callback will be invoked when the getter result changes.",consideration:o("ol",{children:o(N,{children:"If you want to manually reupdate the getter, you can set the updater to true, and the return value will be an array like [value, reupdate func]."})}),$best:o("ul",{children:o(at,{})}),$faqs:o("ul",{children:o(at,{})}),$apis:{generics:o(b,{}),params:{},return:{}}},useTitle:{desc:"A React Hook for managing and monitoring the document title with automatic restoration.",detail:s(b,{children:[s("p",{children:[o("code",{children:"useTitle"})," provides a reactive way to manage the document title. It returns the current title and a setter function, allowing you to read and update the title dynamically."]}),o("p",{children:"The hook uses MutationObserver to detect external title changes (e.g., from other components or scripts) and automatically syncs the state. When the component unmounts, the original title is restored."})]}),$p1:"The hook returns an array with the current title and a setter function. Switch between tabs above to see different use cases including counters, notifications, timers, and status indicators.",consideration:s("ol",{children:[o("li",{children:"The document title is a global resource. Multiple components using this hook may conflict with each other."}),o("li",{children:"The hook uses MutationObserver which has good browser support but may not work in very old browsers."}),o("li",{children:"The original title is restored when the component unmounts, which may override titles set by other components."}),o("li",{children:"Frequent title updates (e.g., every second) may impact performance on low-end devices."})]}),$best:s("ul",{children:[o("li",{children:"Use descriptive titles that reflect the current page state or content."}),s("li",{children:["For notification counts, use format like ",o("code",{children:"(3) New Messages"})," to draw attention."]}),o("li",{children:"Avoid updating the title too frequently (more than once per second) to prevent performance issues."}),o("li",{children:"Place the hook at the top level of your component for consistent behavior."}),s("li",{children:["For timers or counters, consider using ",o("code",{children:"useEffect"})," to sync the title with state changes."]}),o("li",{children:"Keep titles concise - browser tabs have limited space for displaying titles."})]}),$faqs:s("ul",{children:[s("li",{children:[o("strong",{children:"Q: Will the original title be restored when the component unmounts?"}),o("br",{}),"A: Yes, the hook automatically restores the original document title when the component unmounts."]}),s("li",{children:[o("strong",{children:"Q: Can this hook detect title changes made by other components?"}),o("br",{}),"A: Yes, the hook uses MutationObserver to monitor the title element and automatically syncs with external changes."]}),s("li",{children:[o("strong",{children:"Q: What happens if multiple components use this hook?"}),o("br",{}),"A: They may conflict with each other since the document title is global. Consider using only one instance or coordinating between components."]}),s("li",{children:[o("strong",{children:"Q: Does this work in all browsers?"}),o("br",{}),"A: Yes, MutationObserver is supported in all modern browsers. For older browsers, the hook will still work but won't detect external changes."]}),s("li",{children:[o("strong",{children:"Q: Can I use this for SEO?"}),o("br",{}),"A: This hook changes the title dynamically on the client side. For SEO, set the initial title in your HTML or use server-side rendering."]})]}),$apis:{generics:o(b,{}),params:{initialTitle:"Optional initial title to set when the component mounts. If not provided, uses the current document title."},return:{"[0] title":"The current document title (reactive to external changes).","[1] setTitle":"Function to update the document title. Signature: (title: string) => void"}}},usePromise:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useFavicon:{desc:"A React Hook for dynamically setting the page favicon with optional badge support.",detail:s(b,{children:[s("p",{children:[o("code",{children:"useFavicon"})," allows you to dynamically change the favicon of your page and add badges to it. It supports multiple use cases including notification counters, status indicators, and custom badges."]}),o("p",{children:"The hook provides a simple API with function overloading: you can pass just a URL for basic usage, or pass a number/string for quick badge creation, or use the full options object for complete control."})]}),$p1:"The hook supports three usage patterns: basic (just URL), shorthand (URL + badge content), and full configuration (URL + options object). Switch between tabs above to see different examples.",consideration:s("ol",{children:[o("li",{children:"The favicon is a global resource - only one can be displayed at a time. If multiple components use this hook simultaneously, they will conflict."}),o("li",{children:"Badge rendering uses canvas, which may have CORS restrictions for cross-origin images. Use same-origin images when possible."}),o("li",{children:'Numbers over 99 will automatically display as "99+" to maintain readability.'}),o("li",{children:"The hook will remove all existing favicon elements and create a new one to avoid browser caching issues."})]}),$best:s("ul",{children:[s("li",{children:["Use the shorthand syntax ",o("code",{children:"useFavicon(url, count)"})," for simple badge counters."]}),s("li",{children:["When count is 0, pass ",o("code",{children:"undefined"})," or ",o("code",{children:"void 0"}),' to hide the badge instead of showing "0".']}),o("li",{children:"Place the hook at the top level of your component, not inside conditional statements."}),o("li",{children:"Use same-origin images to avoid CORS issues with canvas rendering."}),s("li",{children:["For notification badges, use red background (",o("code",{children:"#ff3b30"}),") to draw attention."]}),s("li",{children:["For status indicators, use small size (",o("code",{children:"size: 0.3"}),") and position at bottom-right."]})]}),$faqs:s("ul",{children:[s("li",{children:[o("strong",{children:"Q: Can I use this without a badge?"}),o("br",{}),"A: Yes, simply call ",o("code",{children:"useFavicon(iconUrl)"})," without the second parameter."]}),s("li",{children:[o("strong",{children:"Q: What happens if the icon fails to load?"}),o("br",{}),"A: The hook will fallback to the original icon URL without the badge."]}),s("li",{children:[o("strong",{children:"Q: Can I change the badge dynamically?"}),o("br",{}),"A: Yes, the hook will update the favicon whenever the iconUrl or badge options change."]}),s("li",{children:[o("strong",{children:"Q: What happens when the badge content exceeds 99?"}),o("br",{}),'A: Numbers over 99 will automatically display as "99+" to maintain readability.']}),s("li",{children:[o("strong",{children:"Q: Why is my badge not showing?"}),o("br",{}),"A: Check if the image is from the same origin. Cross-origin images may fail due to CORS restrictions."]})]}),$apis:{generics:o(b,{}),params:{iconUrl:"The URL of the favicon image.",badge:"Shorthand for badge content. Can be a string or number. When provided, creates a badge with default settings.",options:"Full configuration object for the favicon.","options.badge":"Badge configuration to overlay on the favicon.","options.badge.content":"The content to display in the badge. Numbers over 99 will display as '99+'.","options.badge.position":"Badge position. One of: 'top-right', 'top-left', 'bottom-right', 'bottom-left'. Defaults to 'top-right'.","options.badge.bgColor":"Badge background color. Defaults to '#ff3b30'.","options.badge.textColor":"Badge text color. Defaults to '#fff'.","options.badge.size":"Badge size as a ratio of icon size (0-1). Defaults to 0.5."},return:{void:"This hook does not return any value."}}},useClickAway:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useCookie:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useDimensions:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useHover:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useKeyPress:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useMousePosition:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useOverflow:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useRaf:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useRafState:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useScroll:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useSafeArea:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useAsyncEffect:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useDimensionsById:{desc:"Observe the dimensions of a DOM element selected by id.",detail:o(b,{children:s("p",{children:[o("code",{children:"useDimensionsById"})," tracks an element with ",o("code",{children:"ResizeObserver"})," and returns its width, height, top, and left values."]})}),$p1:"The target element must exist in the document and have the supplied id.",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},useQrcodeScan:{desc:"Scan QR codes and barcodes from a camera or image file.",detail:s(b,{children:[s("p",{children:[o("code",{children:"useQrcodeScan"})," provides live camera scanning, image decoding, normalized result metadata, camera permission state, torch, and zoom controls."]}),o("p",{children:"Camera access requires HTTPS or localhost. Image decoding does not request camera permission."})]}),$p1:"Render the scanner container before calling start. Use scanImage when you only need to decode an image.",consideration:s("ol",{children:[o("li",{children:"Camera permission and device availability depend on the browser and active camera."}),o("li",{children:"Stop the scanner when leaving the page to release the camera."})]}),$best:s("ul",{children:[o("li",{children:"Handle scanner errors in the onError callback."}),o("li",{children:"Check cameraCapabilities before using torch or zoom."})]}),$faqs:o("ul",{children:o("li",{children:"Camera scanning requires a secure context such as HTTPS or localhost."})}),$apis:{generics:o(b,{}),params:{},return:{}}},useInfiniteScroll:{desc:"A React Hook for implementing infinite scrolling with automatic load detection using IntersectionObserver.",detail:s(b,{children:[s("p",{children:[o("code",{children:"useInfiniteScroll"})," provides a simple way to implement infinite scrolling in React applications. It automatically detects when a loader element becomes visible and triggers asynchronous data loading using the browser’s ",o("code",{children:"IntersectionObserver"})," API."]}),o("p",{children:"The hook manages the entire lifecycle of an infinite list: loading state, accumulated items, concurrency control, and viewport/container visibility detection. It also supports both page-level scrolling and scrollable container elements."}),s("p",{children:["By returning a ",o("code",{children:"loader"})," element that must be rendered at the bottom of your list, the hook can observe its visibility and trigger additional data loading when users scroll near the end of the content."]})]}),$p1:"Render the returned loader element at the bottom of your list. When it enters the viewport (or container), the hook automatically triggers loadMore and appends new items.",consideration:s("ol",{children:[s("li",{children:["The ",o("code",{children:"loader"})," element must be rendered in the DOM for the observer to detect it. If it is conditionally hidden, infinite loading will not trigger."]}),s("li",{children:["The ",o("code",{children:"loadMore"})," function should be stable (e.g., wrapped with ",o("code",{children:"useCallback"}),"or referencing stable state) to avoid unnecessary re-observation or unexpected requests."]}),s("li",{children:["When using ",o("code",{children:'mode="container"'}),", ensure the container element has a fixed height and ",o("code",{children:"overflow: auto"})," or ",o("code",{children:"overflow: scroll"})," so scrolling events occur inside the container."]}),o("li",{children:"The hook prevents concurrent requests internally, but your API should still be idempotent or safe against repeated calls in case of network retries."}),o("li",{children:"If the loader is already visible when mounted (for example when the list is short), the hook will immediately trigger loading until the viewport/container is filled."})]}),$best:s("ul",{children:[s("li",{children:["Always place the returned ",o("code",{children:"loader"})," at the bottom of your list items so the observer can detect when the user reaches the end."]}),s("li",{children:["Use ",o("code",{children:"preloadDistance"})," (e.g., 200–400px) to start loading before the user actually reaches the bottom for smoother UX."]}),s("li",{children:["When working with scrollable panels or chat-style layouts, use",o("code",{children:'mode="container"'})," with ",o("code",{children:"containerRef"})," or ",o("code",{children:"containerId"}),"."]}),s("li",{children:["Keep pagination state outside the hook (e.g., page or cursor) and update it inside",o("code",{children:"loadMore"}),"."]}),s("li",{children:["Use ",o("code",{children:"reload()"})," when filters or query parameters change to restart the list from the beginning."]}),s("li",{children:["Use ",o("code",{children:"triggerLoadMore()"})," if you need to manually load more data (for example when a button is clicked)."]})]}),$faqs:s("ul",{children:[s("li",{children:[o("strong",{children:"Q: Why is the loader not triggering?"}),o("br",{}),"A: Ensure the loader element is rendered and visible in the DOM. The observer only works if the element exists and can intersect with the viewport or container."]}),s("li",{children:[o("strong",{children:"Q: Can I use this with a scrollable container instead of the window?"}),o("br",{}),"A: Yes. Set ",o("code",{children:'mode="container"'})," and provide either ",o("code",{children:"containerRef"})," or",o("code",{children:"containerId"}),"."]}),s("li",{children:[o("strong",{children:"Q: Can I manually control the loaded items?"}),o("br",{}),"A: Yes. Use the returned ",o("code",{children:"setItems"})," function to modify the list manually."]}),s("li",{children:[o("strong",{children:"Q: How do I reset the list?"}),o("br",{}),"A: Call ",o("code",{children:"reset()"})," to clear the items and loading state, or use",o("code",{children:"reload()"})," to reset and immediately fetch the first page again."]}),s("li",{children:[o("strong",{children:"Q: What happens if the list is shorter than the viewport?"}),o("br",{}),"A: The hook automatically triggers additional loads until the viewport or container becomes filled or ",o("code",{children:"hasMore"})," becomes false."]})]}),$apis:{generics:s(b,{children:[o("p",{children:o("code",{children:"<T, C>"})}),s("ul",{children:[s("li",{children:[o("code",{children:"T"})," — Type of items returned by ",o("code",{children:"loadMore"}),"."]}),s("li",{children:[o("code",{children:"C"})," — HTML element type used as the loader container. Defaults to"," ",o("code",{children:'"div"'}),"."]})]})]}),params:{loadMore:"Async function used to fetch the next batch of items. Should return an array of items or void.",hasMore:"Boolean indicating whether more data is available. When false, loading stops permanently.",loader:"Custom loading indicator. Can be a ReactNode or a function returning a ReactNode.",component:"HTML element type used as the wrapper for the loader element. Defaults to 'div'.",props:"Props passed to the loader container element.",preloadDistance:"Distance in pixels from the viewport/container bottom that triggers preloading. Defaults to 200.",observerOptions:"Custom IntersectionObserver options for advanced control.",disabled:"When true, automatic loading is disabled.",mode:"Scroll detection mode. 'viewport' observes the window, 'container' observes a specific scroll container, and 'auto' chooses automatically.",containerId:"ID of the scroll container element. Takes priority when mode='container'.",containerRef:"Ref to the scroll container element when mode='container'. Used if containerId is not provided."},return:{loader:"React element that must be rendered at the end of the list to trigger loading when it becomes visible.",loading:"Boolean indicating whether a request is currently in progress.",items:"Accumulated array of loaded items.",setItems:"State setter allowing manual modification of the items array.",reset:"Clears all items and resets the loading state.",reload:"Resets the list and immediately triggers the first load.",triggerLoadMore:"Manually triggers the loadMore function."}}},useAutoPageSize:{desc:"",detail:o(b,{}),$p1:"",consideration:o("ol",{}),$best:o("ul",{}),$faqs:o("ul",{}),$apis:{generics:o(b,{}),params:{},return:{}}},__end:"end of locale mappings, please do not delete this line"},ff={en:{...mf},cn:{...hf}};function f(e){const t=bl("locale");return yl(ff[t],e)}const P=({children:e,id:t,low:n,top:r})=>o(vt,{id:t,variant:n?"h6":"h5",component:"h6",gutterBottom:!0,marginTop:r??"40px",fontWeight:"bold",children:e}),Ne=({children:e,top:t})=>s(b,{children:[o(vt,{id:"hook-faqs",variant:"h5",component:"h5",gutterBottom:!0,marginTop:t??"40px",fontWeight:"bold",children:"FAQs"}),e]}),Le=({children:e,top:t})=>s(b,{children:[o(vt,{id:"hook-best",variant:"h5",component:"h5",gutterBottom:!0,marginTop:t??"40px",fontWeight:"bold",children:"Best Practice"}),e]}),Oe=({children:e,top:t})=>s(b,{children:[o(vt,{id:"hook-usage",variant:"h5",component:"h5",gutterBottom:!0,marginTop:t??"40px",fontWeight:"bold",children:"Usage"}),e]}),re=({children:e})=>o(vt,{variant:"body1",gutterBottom:!0,children:e}),Z=({children:e,code:t,lang:n})=>s("div",{className:"Demo",children:[o(Mr,{style:{padding:"2rem"},children:e}),o(ur,{lang:n,children:t})]}),Te=({children:e})=>{const t=f("$article.Consideration");return s(b,{children:[o(P,{id:"hook-consider",children:t}),o(re,{children:e})]})},gf=({children:e})=>o(vt,{variant:"h4",component:"h1",gutterBottom:!0,marginTop:"40px",fontWeight:"bold",children:e});function de(e){return s(b,{children:[o(vt,{variant:"h4",component:"h1",gutterBottom:!0,marginTop:"40px",fontWeight:"bold",children:e.title}),o(vt,{variant:"subtitle1",gutterBottom:!0,children:o("div",{id:"hook-desc",children:e.desc})}),o("div",{children:e.children}),o(Ru,{sx:{height:"1rem"}})]})}const vf="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function Ea(){d.useEffect(()=>{document.title=`overview - ${pe.homepage}`},[]);const e=_m();d.useEffect(()=>{console.log(`theme: ${e}`)},[e]);const[t,n]=zt(),r=Ir({},!t);return s(de,{title:"Overview",desc:vf,children:[o(P,{children:"Introduction"}),s(re,{children:["react-hooks-kit is an open source library focused on making it easy to use react hooks.",o("br",{}),o("br",{}),"It includes a comprehensive collection of hooks that empower you to accomplish any task in your application without being forced into a specific way of doing things.",o("br",{}),o("br",{}),"react-hooks-kit is a lightweight library that doesn't require any dependencies. It's easy to use, and it's easy to learn.",o("br",{})]}),o(P,{children:"Advantages"}),o(re,{children:s("ul",{children:[s(N,{children:[o("strong",{children:"Cosying"}),": react-hooks-kit provides a simple API that makes it easy to use react hooks."]}),s(N,{children:[o("strong",{children:"Lightweight"}),": It is a lightweight library without any dependencies."]}),s(N,{children:[o("strong",{children:"Overall"}),": It includes a comprehensive collection of hooks that empower you to accomplish different tasks in your application like store, parser, listeners, effects, etc."]}),s(N,{children:[o("strong",{children:"Typescript support"}),": It is developed with typescript and provides excellent typescript support and type inference support."]}),s("li",{children:[o("strong",{children:"innovation"}),": It provides some innovative hooks like useWatch (partial listener), useRipple (css houdini effect), etc."]})]})}),o(P,{children:"Information"}),o(re,{children:s("p",{children:["There are about 60 hooks in library, most of them are still experimental and not stable yet. In menu, only the hooks without prefix tag is entirely stable. If a hook with prefix tag of"," ",o("strong",{children:"new"}),", it means it has passed tests; with a prefix tag of ",o("strong",{children:"cup"})," means experimental; a prefix tag of"," ",o("strong",{children:"clock"})," means in plan."]})}),o("div",{css:$css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 32px;
      `,children:s(A,{onClick:n,color:t?"primary":"inherit",style:{textTransform:"none"},ref:r,disableRipple:!0,children:[o("span",{style:{marginRight:8},children:"Was this page helpful?"}),t?o($a,{}):o(Ca,{})]})})]})}function sn(e){const[t,n]=zt(),r=Ir({},!t);return o("div",{css:$css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 32px;
      `,children:s(A,{onClick:n,color:t?"primary":"inherit",style:{textTransform:"none"},ref:r,disableRipple:!0,children:[o("span",{style:{marginRight:8},children:e.children??"Was this page helpful?"}),t?o($a,{}):o(Ca,{})]})})}const bf="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function yf(){return d.useEffect(()=>{document.title=`overview - ${pe.homepage}`},[]),s(de,{title:"Installation",desc:bf,children:[o(P,{children:"npm"}),o(re,{children:o(ke,{lang:"bash",children:"npm i -S @evanpatchouli/react-hooks-kit"})}),o(P,{children:"pnpm"}),o(re,{children:o(ke,{lang:"bash",children:"pnpm i -S @evanpatchouli/react-hooks-kit"})}),o(P,{children:"yarn"}),o(re,{children:o(ke,{lang:"bash",children:"yarn add -S @evanpatchouli/react-hooks-kit"})}),o(sn,{})]})}var Lo={},nr={exports:{}},wi;function an(){return wi||(wi=1,(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(nr)),nr.exports}var rr={};const wf=wl(Ul);var xi;function ln(){return xi||(xi=1,(function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=wf})(rr)),rr}var $i;function xf(){if($i)return Lo;$i=1;var e=an();Object.defineProperty(Lo,"__esModule",{value:!0}),Lo.default=void 0;var t=e(ln()),n=Zo(),r=(0,t.default)((0,n.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");return Lo.default=r,Lo}var $f=xf();const Cf=en($f);var Bo={},Ci;function kf(){if(Ci)return Bo;Ci=1;var e=an();Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.default=void 0;var t=e(ln()),n=Zo(),r=(0,t.default)((0,n.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");return Bo.default=r,Bo}var Sf=kf();const Tf=en(Sf);function yt(e){return e.hidden?null:s("span",{children:[o("span",{style:{color:"red",marginRight:"0.25em"},children:"*"}),e.children]})}const Ma=o(Ue,{label:"string",color:"primary"}),Pa=o(Ue,{label:"number",color:"secondary"}),Ia=o(Ue,{label:"boolean",color:"success"}),Aa=o(Ue,{label:"object",color:"info"}),Na=o(Ue,{label:"ReactNode",color:"warning"}),Oa=o(Ue,{label:"undefined",color:"default"}),Va=o(Ue,{label:"null",color:"error",variant:"outlined"}),La=o(Ue,{label:"any",color:"secondary",variant:"outlined"}),Rf=o(Ue,{label:"unknown",color:"error"}),Ef=o(Ue,{label:"never",color:"error"}),Ba=o(Ue,{label:"void",color:"primary",variant:"outlined"}),Mf=o(Ue,{label:"symbol",color:"error"}),Pf=o(Ue,{label:"bigint",color:"error"}),ja=o(Ue,{label:"function",color:"primary",variant:"outlined"}),If=o(Ue,{label:"Array",color:"info",variant:"outlined"}),Af=e=>o(Ue,{color:"primary",variant:"outlined",label:`Dispatch<SetStateAction<${e}>>`}),Nn={String:e=>e?.length?o(Ue,{label:e,color:"primary"}):Ma,Number:e=>e?o(Ue,{label:e,color:"secondary"}):Pa,Boolean:e=>typeof e=="boolean"?o(Ue,{label:`${e}`,color:"success"}):Ia,Object:()=>Aa,ReactNode:()=>Na,Undefined:()=>Oa,Null:()=>Va,Any:()=>La,Unknown:()=>Rf,Never:()=>Ef,Void:()=>Ba,Symbol:()=>Mf,BigInt:()=>Pf,Function:e=>e?o(Ue,{label:e,color:"primary",variant:"outlined"}):ja,Array:e=>e?o(Ue,{label:`Array<${e}>`,color:"info",variant:"outlined"}):If,SetAction:Af},pr=e=>{if(typeof e=="object")return e;if(!e.includes("|")&&!e.includes("&"))switch(e){case"string":return Ma;case"number":return Pa;case"boolean":return Ia;case"object":return Aa;case"ReactNode":return Na;case"undefined":return Oa;case"null":return Va;case"any":return La;case"void":return Ba;case"function":return ja;default:return o(Ue,{label:e,color:"default"})}else{if(e.includes("|"))return e.split("|").map(t=>pr(t.trim())).map((t,n,r)=>s(d.Fragment,{children:[t,r.length-1===n?null:" | "]},t.props.label));if(e.includes("&"))return e.split("&").map(t=>pr(t.trim())).map((t,n,r)=>s(d.Fragment,{children:[t,r.length-1===n?null:" & "]},t.props.label))}},Da=({name:e,type:t,required:n,defaultValue:r,desc:i,details:a,properties:l})=>({name:e,type:pr(t),required:n,defaultValue:[void 0,null].includes(r)?o("span",{css:$css`color: gainsboro`,children:`${r}`}):typeof r=="boolean"?`${r}`:typeof r=="string"?`"${r}"`:typeof r=="object"?(()=>{if(Array.isArray(r))return r.length===0?"[]":JSON.stringify(r);try{return`{ ${Object.keys(r).map(u=>`${u}: ${r[u]}`)} }`}catch{return r}})():r==="--"?"--":r,desc:i,details:a,properties:l?.map(u=>Da(u))||[]});function Nf(e,t,n,r,i,a,l){return Da({name:e,type:t,required:n,defaultValue:r,desc:i,details:a,properties:l})}function Of(e){const{row:t}=e,[n,r]=d.useState(!1),i=t.properties?.length||t.details;return s(d.Fragment,{children:[s(Fo,{sx:{"& > *":{borderBottom:"unset"}},children:[o(et,{children:o(Ln,{style:{display:i?"block":"none"},"aria-label":"expand row",size:"small",onClick:()=>r(!n),children:n?o(Tf,{}):o(Cf,{})})}),s(et,{component:"th",scope:"row",children:[t.required&&o(yt,{}),t.name]}),o(et,{align:"center",children:t.type}),e.type==="param"&&o(et,{align:"center",children:t.defaultValue}),o(et,{align:"left",children:t.desc})]}),o(Fo,{children:o(et,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:o(ct,{in:n,timeout:"auto",unmountOnExit:!0,children:s(Xt,{sx:{margin:1},children:[t.details,s(ba,{size:"small","aria-label":"purchases",children:[t.properties.length<=0?null:o(wa,{children:s(Fo,{children:[o(et,{sx:{fontWeight:"bold"},children:"name"}),o(et,{sx:{fontWeight:"bold"},align:"center",children:"type"}),e?.type!=="return"&&o(et,{sx:{fontWeight:"bold"},align:"center",children:"default"}),o(et,{sx:{fontWeight:"bold"},align:"left",children:"description"})]})}),o(ya,{children:t.properties.map(a=>s(Fo,{children:[o(et,{component:"th",scope:"row",children:a.name}),o(et,{align:"center",children:a.type}),e.type==="param"&&o(et,{align:"center",children:a.defaultValue}),o(et,{align:"left",children:a.desc})]},a.name))})]})]})})})})]})}function te(e){const t={sx:{backgroundColor:"black",color:"white",fontWeight:"bold"}},n=e.rows?.map(r=>Nf(r.name,r.type,r.required,r.defaultValue,r.desc,r.details,r.properties??[]));return o(Vh,{component:Bn,children:s(ba,{"aria-label":"collapsible table",children:[o(wa,{children:s(Fo,{children:[o(et,{...t}),o(et,{...t,children:e?.return?"ReturnValue":"Parameters"}),o(et,{...t,align:"center",children:"type"}),!e?.return&&o(et,{...t,align:"center",children:"default"}),o(et,{...t,align:"center",children:"description"})]})}),o(ya,{children:n?.map(r=>o(Of,{row:r,type:e.return?"return":"param"},r.name))})]})})}function za(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useToggle"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}const Vf="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.",Lf=`
import { useToogle } from "@evanpatchouli/react-hooks-kit";

const staticStyles: { [x: string]: React.CSSProperties } = {
  button: {
    width: "80px",
    height: "2rem",
    cursor: "pointer",
    padding: "10px 4px",
    textTransform: "uppercase",
    background: "white",
    borderRadius: "20px",
    position: "relative",
  },
  text: {
    position: "absolute",
    top: "50%",
    fontFamily: "sans-serif",
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
};

const Switcher = () => {
  const [isOn, toggle] = useToogle();
  return (
    <button
      style={{
        ...staticStyles.button,
        border: \`1px solid \${isOn ? "dodgerblue" : "gray"}\`,
      }}
      onClick={toggle}
    >
      <span
        style={{
          ...staticStyles.text,
          left: isOn ? "100%" : "0",
          color: isOn ? "dodgerblue" : "gray",
          transform: \`translate(\${isOn ? "calc(-8px - 100%)" : "calc(8px)"}, -50%)\`,
        }}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </button>
  );
};
`,On={button:{width:"80px",height:"1.8rem",cursor:"pointer",padding:"10px 4px",textTransform:"uppercase",background:"white",borderRadius:"20px",position:"relative"},text:{position:"absolute",top:"50%",fontFamily:"sans-serif",transition:"all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"}},Bf=()=>{const[e,t]=zt();return o("button",{style:{...On.button,border:`1px solid ${e?"dodgerblue":"gray"}`},onClick:t,children:o("span",{style:{...On.text,left:e?"100%":"0",color:e?"dodgerblue":"gray",transform:`translate(${e?"calc(-8px - 100%)":"calc(8px)"}, -50%)`},children:e?"ON":"OFF"})})},jf=`
import { useToogle, useRipple } from "@evanpatchouli/react-hooks-kit";

const RippleSwitcher = () => {
  const [isOn, toggle] = useToogle();
  const ref = useRipple<HTMLButtonElement>({
    color: "hsla(210, 100%, 56%, 0.557)",
    duration: 500,
    trigger: "mousedown",
  });
  return (
    <button
      ref={ref}
      style={{
        ...staticStyles.button,
        border: \`1px solid \${isOn ? "dodgerblue" : "gray"}\`,
      }}
      onClick={toggle}
    >
      <span
        style={{
          ...staticStyles.text,
          left: isOn ? "100%" : "0",
          color: isOn ? "blue" : "gainsboro",
          transform: \`translate(\${isOn ? "calc(-2px - 100%)" : "calc(2px)"}, -50%)\`,
          backgroundColor: isOn ? 'hsla(210, 100%, 56%, 0.557)' : "gray",
          padding: '0 4px',
          lineHeight: '1.4rem',
          borderRadius: '12px',
        }}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </button>
  );
};
`,Df=()=>{const[e,t]=zt(),n=br({color:"hsla(210, 100%, 56%, 0.557)",duration:500,trigger:"mousedown"});return o("button",{ref:n,style:{...On.button,border:`1px solid ${e?"dodgerblue":"gray"}`},onClick:t,children:o("span",{style:{...On.text,left:e?"100%":"0",color:e?"blue":"gainsboro",transform:`translate(${e?"calc(-2px - 100%)":"calc(2px)"}, -50%)`,backgroundColor:e?"hsla(210, 100%, 56%, 0.557)":"gray",padding:"0 4px",lineHeight:"1.4rem",borderRadius:"12px"},children:e?"ON":"OFF"})})};function zf(){return d.useEffect(()=>{document.title=`Usage - ${pe.homepage}`},[]),s(de,{title:"Usage",desc:Vf,children:[o(P,{children:"npm"}),o("p",{children:'Take "useToggle" as an example, you can use it to make a Switcher:'}),s(re,{children:[o(Bf,{}),o(ur,{children:Lf})]}),o("p",{children:'Use "useRipple" to make Switcher more cool:'}),s(re,{children:[o(Df,{}),o(ur,{children:jf})]}),o("strong",{children:"Now, you get a cool RippleSwitcher!"}),o(za,{}),o(sn,{})]})}const Uf="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function Ff(){return d.useEffect(()=>{document.title=`FAQs - ${pe.homepage}`},[]),s(de,{title:"FAQs",desc:Uf,children:[o(P,{children:"How about the Compatibility ?"}),s("p",{children:["This library is compatible with ",o("code",{children:"react@^16.8.0"})," ~ ",o("code",{children:"react@^18.2.0"}),"."]}),o(P,{children:"Is it really lightweight ?"}),s("p",{children:["Yes, it is. The bundle size is only ",o("code",{children:"~ 1.5kb"})," (minified and gzipped). It goes without any dependencies besides ",o("code",{children:"react"})," and ",o("code",{children:"react-dom"}),"."]}),o(P,{children:"How about its support for typescript ?"}),o("p",{children:"This library is written in typescript and it has its own type definitions. So you can use it with typescript without any problem."}),o(P,{children:"Is it tree-shakable ?"}),o("p",{children:"Yes, it is. All of the hooks are exported as named exports. So you can import only the hooks that you need."}),o(P,{children:"How about the performance ?"}),o("p",{children:"The performance is good. The hooks are optimized and memoized. So they will not cause unnecessary re-renders in your app."}),o(P,{children:"How about the browser support ?"}),s("p",{children:["This library is compatible with all modern browsers. It also works with IE11. But you need to include the polyfills for ",o("code",{children:"Promise"})," and ",o("code",{children:"Object.assign"})," in your app. Some special hooks such as useRipple that goes with Houdini may not be available in some browsers."]}),o(P,{children:"How about the accessibility ?"}),s("p",{children:["This library is compatible with accessibility. All of the hooks are tested with"," ",o("code",{children:"@testing-library/react"}),"."]}),o(sn,{})]})}const _f="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function Wf(){return d.useEffect(()=>{document.title=`Support - ${pe.homepage}`},[]),s(de,{title:"Support",desc:_f,children:[o(P,{children:"Support us to make it better !"}),s(A,{LinkComponent:"a",variant:"contained",children:["Buy me a coffee",o(xm,{style:{marginLeft:8}})]}),o(sn,{children:"🥰 Thank you ~ "})]})}const ki=Object.freeze(Object.defineProperty({__proto__:null,FAQs:Ff,Installation:yf,Overview:Ea,Support:Wf,Usage:zf},Symbol.toStringTag,{value:"Module"}));function Hf(){const e=Object.values(It).map(a=>Object.values(a)).flat(),[t,n]=d.useState(0),[r,i]=tn({last:"Last",lastLink:"",next:"Next",nextLink:""});return yr(a=>{const u=a.hash.replace("#/docs/","").split("?")[0],c=e.findIndex(g=>g.route===u),p=e[c-1],h=e[c+1];p?(i("last",p.title),i("lastLink",p.route)):(i("last","Docs"),i("lastLink","")),h&&(i("next",h.title),i("nextLink",h.route))},"article-navigator",!0),o(Xt,{sx:{width:"100%",flex:"1"},children:s(nu,{showLabels:!0,value:t,onChange:(a,l)=>{n(l)},style:{display:"flex",bottom:"0",left:"0",right:"0",justifyContent:"space-between",zIndex:1e3,backgroundColor:"white"},children:[o(ei,{LinkComponent:"a",href:`#/docs/${r.lastLink}`,label:r.last,icon:o(Em,{})}),o(ei,{LinkComponent:"a",href:`#/docs/${r.nextLink}`,label:r.next,icon:o(Mm,{})})]})})}const Vn=d.createContext({});function qf(e){return ge("MuiTimeline",e)}ve("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function To(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${F(e)}`}const Kf=["position","className"],Gf=e=>{const{position:t,classes:n}=e,r={root:["root",t&&To(t)]};return ue(r,qf,n)},Qf=q("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.position&&t[To(n.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),Jf=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTimeline"}),{position:i="right",className:a}=r,l=ae(r,Kf),u=m({},r,{position:i}),c=Gf(u),p=d.useMemo(()=>({position:i}),[i]);return R.jsx(Vn.Provider,{value:p,children:R.jsx(Qf,m({className:oe(c.root,a),ownerState:u,ref:n},l))})});function Yf(e){return ge("MuiTimelineContent",e)}const Xf=ve("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),Zf=["className"],eg=e=>{const{position:t,classes:n}=e,r={root:["root",To(t)]};return ue(r,Yf,n)},tg=q(vt,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[To(n.position)]]}})(({ownerState:e})=>m({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),ro=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTimelineContent"}),{className:i}=r,a=ae(r,Zf),{position:l}=d.useContext(Vn),u=m({},r,{position:l||"right"}),c=eg(u);return R.jsx(tg,m({component:"div",className:oe(c.root,i),ownerState:u,ref:n},a))}),og=ve("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function ng(e){return ge("MuiTimelineItem",e)}const rg=ve("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]),ig=["position","className"],sg=e=>{const{position:t,classes:n,hasOppositeContent:r}=e,i={root:["root",To(t),!r&&"missingOppositeContent"]};return ue(i,ng,n)},ag=q("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[To(n.position)]]}})(({ownerState:e})=>m({listStyle:"none",display:"flex",position:"relative",minHeight:70},e.position==="left"&&{flexDirection:"row-reverse"},(e.position==="alternate"||e.position==="alternate-reverse")&&{[`&:nth-of-type(${e.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${Xf.root}`]:{textAlign:"right"},[`& .${og.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})),io=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTimelineItem"}),{position:i,className:a}=r,l=ae(r,ig),{position:u}=d.useContext(Vn);let c=!1;d.Children.forEach(r.children,v=>{yo(v,["TimelineOppositeContent"])&&(c=!0)});const p=m({},r,{position:i||u||"right",hasOppositeContent:c}),h=sg(p),g=d.useMemo(()=>({position:p.position}),[p.position]);return R.jsx(Vn.Provider,{value:g,children:R.jsx(ag,m({className:oe(h.root,a),ownerState:p,ref:n},l))})});function lg(e){return ge("MuiTimelineSeparator",e)}ve("MuiTimelineSeparator",["root"]);const cg=["className"],dg=e=>{const{classes:t}=e;return ue({root:["root"]},lg,t)},ug=q("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),so=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTimelineSeparator"}),{className:i}=r,a=ae(r,cg),l=r,u=dg(l);return R.jsx(ug,m({className:oe(u.root,i),ownerState:l,ref:n},a))});function pg(e){return ge("MuiTimelineConnector",e)}ve("MuiTimelineConnector",["root"]);const hg=["className"],mg=e=>{const{classes:t}=e;return ue({root:["root"]},pg,t)},fg=q("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})),vo=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTimelineConnector"}),{className:i}=r,a=ae(r,hg),l=r,u=mg(l);return R.jsx(fg,m({className:oe(u.root,i),ownerState:l,ref:n},a))});function gg(e){return ge("MuiTimelineDot",e)}ve("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const vg=["className","color","variant"],bg=e=>{const{color:t,variant:n,classes:r}=e,i={root:["root",n,t!=="inherit"&&`${n}${F(t)}`]};return ue(i,gg,r)},yg=q("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.color!=="inherit"&&`${n.variant}${F(n.color)}`],t[n.variant]]}})(({ownerState:e,theme:t})=>m({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},e.variant==="filled"&&m({borderColor:"transparent"},e.color!=="inherit"&&m({},e.color==="grey"?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main})),e.variant==="outlined"&&m({boxShadow:"none",backgroundColor:"transparent"},e.color!=="inherit"&&m({},e.color==="grey"?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[e.color].main})))),ao=d.forwardRef(function(t,n){const r=fe({props:t,name:"MuiTimelineDot"}),{className:i,color:a="grey",variant:l="filled"}=r,u=ae(r,vg),c=m({},r,{color:a,variant:l}),p=bg(c);return R.jsx(yg,m({className:oe(p.root,i),ownerState:c,ref:n},u))});function wg(){const e=t=>()=>{document.getElementById(t)?.scrollIntoView({behavior:"smooth",block:"center"})};return s(Jf,{className:"doc-navigator-line",sx:{[`& .${rg.root}:before`]:{flex:0,padding:0}},children:[s(io,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-desc"),children:[s(so,{children:[o(ao,{}),o(vo,{})]}),o(ro,{children:o("div",{style:{cursor:"pointer"},children:"Description"})})]}),s(io,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-usage"),children:[s(so,{children:[o(ao,{}),o(vo,{})]}),o(ro,{children:o("div",{style:{cursor:"pointer"},children:"Usage"})})]}),s(io,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-consider"),children:[s(so,{children:[o(ao,{}),o(vo,{})]}),o(ro,{children:o("div",{style:{cursor:"pointer"},children:"Considerations"})})]}),s(io,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-best"),children:[s(so,{children:[o(ao,{}),o(vo,{})]}),o(ro,{children:o("div",{style:{cursor:"pointer"},children:"Best practice"})})]}),s(io,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-faqs"),children:[s(so,{children:[o(ao,{}),o(vo,{})]}),o(ro,{children:o("div",{style:{cursor:"pointer"},children:"FAQs"})})]}),s(io,{children:[s(so,{children:[o(ao,{}),o(vo,{})]}),o(ro,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-api"),children:o("div",{style:{cursor:"pointer"},children:"Hook's Apis"})})]}),s(io,{children:[o(so,{children:o(ao,{})}),o(ro,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-ref"),children:o("div",{style:{cursor:"pointer"},children:"Reference"})})]})]})}const nt=(e,t,n)=>{e&&(typeof e=="string"&&e?window.location.hash=e.replace(/#/g,""):typeof e=="object"&&e.path&&(window.location.hash||(e.hash??t)?window.location.hash=e.path.replace(/#/g,""):window.location.assign(e.path)))};function xg(){return o(de,{title:"Docs of react-hooks-kit",children:s(re,{children:[o("p",{children:"This is a collection of hooks to manage state and view much more easier in ReactJs."}),o("p",{children:"It includes some stateful hooks:"}),s("ul",{children:[o("li",{children:"useLoading"}),o("li",{children:"useTree"}),o("li",{children:"useReactive"}),o("li",{children:"useReactor"}),o("li",{children:"..."})]}),o("p",{children:"And it also includes some utils:"}),s("ul",{children:[o("li",{children:"useGuide"}),o("li",{children:"useTicker"}),o("li",{children:"..."})]}),o("p",{children:"And it also provides some magical hooks:"}),s("ul",{children:[o("li",{children:"useEmitter"}),o("li",{children:"useReceiver"}),o("li",{children:"useProvide"}),o("li",{children:"useInject"}),o("li",{children:"..."})]}),o("p",{children:"And some houdini hooks:"}),s("ul",{children:[o("li",{children:"useRipple"}),o("li",{children:"useParticle"}),o("li",{children:"..."})]})]})})}const $g="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function Cg(){d.useEffect(()=>{document.title=`SentMail - ${pe.homepage}`},[]);const e={display:"flex",gap:1,textTransform:"none"};return s(de,{title:"SentMail",desc:$g,children:[o(P,{children:"Sent mail to us to get more information and support."}),s(A,{sx:e,children:[o(Zn,{})," evanpatchouli@gmail.com"]}),s(A,{sx:e,children:[o(Zn,{})," evanpatchouli@foxmail.com"]}),s(A,{sx:e,children:[o(Zn,{})," 3125019716@qq.com"]}),o(sn,{})]})}const kg=()=>{const[e,t]=d.useState(0),n=ka(e),r=d.useRef();return d.useEffect(()=>(r.current=setInterval(()=>{t(i=>++i)},17),()=>{r.current&&clearInterval(r.current)}),[]),s("div",{children:[s("h1",{children:["Now: ",e,", previous: ",n,", timer:",`${r.current}`]}),o(A,{variant:"contained",color:"primary",onClick:()=>{r.current&&clearInterval(r.current)},children:"Stop"})]})},Sg=`import usePrevoius from "@/hooks/usePrevious";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevoius(count);
  const timer = useRef<NodeJS.Timer>();
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((p) => ++p);
    }, 17);
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);
  return (
    <div>
      <h1>
        Now: {count}, previous: {previousCount}, timer:
        {\`\${timer.current}\`}
      </h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (timer.current) {
            clearInterval(timer.current);
          }
        }}
      >
        Stop
      </Button>
    </div>
  );
};`,Si={code:Sg,View:kg};function Tg(){const e=[{name:"state",type:"T",defaultValue:o(yt,{children:"Required"}),desc:"state to be tracked"}],t=[{name:"prevoiusState",type:"T",defaultValue:null,desc:"the previous value of the state that was passed in"}],n=f("usePrevious.$apis.generics");return s(b,{children:[o(P,{id:"hook-api",children:"Api of usePrevoius"}),o(re,{children:n}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:e}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:t})]})}function Rg(){const[e,t]=d.useState("light"),n=ka(e);return d.useEffect(()=>{n&&n!==e&&console.log(`Theme changed from ${n} to ${e}`)},[e,n]),s("div",{children:[s("p",{children:["Current theme: ",e]}),o("button",{onClick:()=>{t(e==="light"?"dark":"light")},children:"Toggle theme"})]})}const Eg=`import { useState, useEffect } from "react";
import usePrevious from "@/hooks/usePrevious";

function View() {
  const [theme, setTheme] = useState("light");
  const prevTheme = usePrevious(theme);

  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      console.log(\`Theme changed from \${prevTheme} to \${theme}\`);
    }
  }, [theme, prevTheme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}`,Ti={View:Rg,code:Eg};function Mg(){const e="usePrevious",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:Si.code,children:o(Si.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),s(Le,{children:[r,o(Z,{code:Ti.code,children:o(Ti.View,{})})]}),o(Ne,{children:l}),o(Tg,{})]})}const Pg=()=>{const[e,t]=zt();return o(b,{children:o(Pr,{checked:e,onChange:t})})},Ig=`
import useToggle from "@/hooks/useToggle";
import { Switch } from "@mui/material";

const View = () => {
  const [open, toggleOpen] = useToggle();
  return (
    <>
      <Switch checked={open} onChange={toggleOpen} />
    </>
  );
};
`,Ri={code:Ig,View:Pg},Ag=()=>{const[e,t]=zt(!1,{true:"Open",false:"Close"});return s(b,{children:[o(Pr,{checked:e==="Open",onChange:t})," ",e]})},Ng=`
import useToggle from "@/hooks/useToggle";
import { Switch } from "@mui/material";

const View = () => {
  const [open, toggleOpen] = useToggle(false, {
    true: "Open",
    false: "Close",
  } as const);
  return (
    <>
      <Switch checked={open === "Open"} onChange={toggleOpen} /> {open}
    </>
  );
};
`,Ei={code:Ng,View:Ag};function Og(){const e="useToggle",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e.replace(/([A-Z])/g,a=>a.toUpperCase()),desc:t,children:[o(re,{children:n}),o(Z,{code:Ri.code,children:o(Ri.View,{})}),o(P,{children:"Value map"}),o("p",{children:i}),o(Z,{code:Ei.code,children:o(Ei.View,{})}),o(Te,{children:r}),o(za,{})]})}const Vg=()=>s("div",{css:$css`display: flex;`,children:[o(Lg,{}),o("s",{css:$css`margin: 0 20px;`}),o(Bg,{})]}),Lg=()=>{const[,e]=zt(),{loading:t,setLoading:n}=wr({load:!1});return s("div",{css:$css`display: flex; align-items: center;`,children:[o("strong",{children:"setLoading : "}),o(Pr,{onChange:()=>{e(),n("load",r=>!r)}}),o("div",{css:$css`
        width: 60px;
        height: 60px;
        border: 2px solid gray;
        position: relative;
        border-radius: 50%;
        `,children:o("div",{css:$css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `,children:o(zn,{on:t.load})})})]})},Bg=()=>{zt();const{loading:e,onLoading:t,unLoading:n}=wr({load:!1});return s("div",{css:$css`display: flex; align-items: center;`,children:[o("strong",{children:"(on & un)Loading : "}),o(A,{onClick:()=>n("load"),children:"Off"}),o("div",{css:$css`
        width: 60px;
        height: 60px;
        border: 2px solid gray;
        position: relative;
        border-radius: 50%;
        `,children:o("div",{css:$css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `,children:o(zn,{on:e.load})})}),o(A,{onClick:()=>t("load"),children:"On"})]})},jg=`
import { Button, Switch } from "@mui/material";
import Loading from "@/components/Loading";
import useToggle from "@/hooks/useToggle";
import { useLoading } from "@/hooks/useLoading";

const View = () => (
  <div css={$css\`display: flex;\`}>
    <Demo1 />
    <s css={$css\`margin: 0 20px;\`} />
    <Demo2 />
  </div>
);

const Demo1 = () => {
  const [, toggleOpen] = useToggle();
  const { loading, setLoading } = useLoading({
    load: false,
  });
  return (
    <div css={$css\`display: flex; align-items: center;\`}>
      <strong>setLoading : </strong>
      <Switch
        onChange={() => {
          toggleOpen();
          setLoading("load", (pre) => !pre);
        }}
      />
      <div
        css={$css\`
        width: 60px;
        height: 60px;
        border: 2px solid gray;
        position: relative;
        border-radius: 50%;
        \`}
      >
        <div
          css={$css\`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        \`}
        >
          <Loading on={loading.load} />
        </div>
      </div>
    </div>
  );
};

const Demo2 = () => {
  const [, toggleOpen] = useToggle();
  const { loading, onLoading, unLoading } = useLoading({
    load: false,
  });
  return (
    <div css={$css\`display: flex; align-items: center;\`}>
      <strong>(on & un)Loading : </strong>
      <Button onClick={() => unLoading("load")}>Off</Button>
      <div
        css={$css\`
        width: 60px;
        height: 60px;
        border: 2px solid gray;
        position: relative;
        border-radius: 50%;
        \`}
      >
        <div
          css={$css\`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        \`}
        >
          <Loading on={loading.load} />
        </div>
      </div>
      <Button onClick={() => onLoading("load")}>On</Button>
    </div>
  );
};
`,Mi={code:jg,View:Vg},Dg=()=>{const[e,t]=d.useState({setType:"override",boolify:!0}),n=()=>{t(u=>({...u,setType:u.setType==="override"?"spread":"override"}))},r=()=>{t(u=>({...u,boolify:!u.boolify}))},{loading:i,plusLoading:a,minusLoading:l}=wr({load:!1},e);return s("div",{css:$css`
      display: flex;
      align-items: center;
      `,children:[s("div",{children:[s(A,{css:$css`display: block; text-transform: none;`,onClick:n,children:["setType : ",e?.setType]}),s(A,{css:$css`display: block; text-transform: none;`,onClick:r,children:["boolify : ",`${e?.boolify}`]})]}),o(A,{onClick:()=>{l("load")},children:"-"}),o("div",{css:$css`
        width: 60px;
        height: 60px;
        border: 2px solid gray;
        position: relative;
        border-radius: 50%;
        `,children:o("div",{css:$css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `,children:o(zn,{on:!!i.load})})}),o(A,{onClick:()=>{a("load")},children:"+"}),s("strong",{children:["count : ",JSON.stringify(i.load)]})]})},zg=`
import Loading from "@/components/Loading";
import { useLoading } from "@/hooks/useLoading";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [options, setOptions] = useState({
    setType: "override" as "override" | "spread", // default
    boolify: true, // default
  });

  const toggleSetType = () => {
    setOptions((prev) => ({
      ...prev,
      setType: prev.setType === "override" ? "spread" : "override",
    }));
  };

  const toggleboolify = () => {
    setOptions((prev) => ({
      ...prev,
      boolify: !prev.boolify,
    }));
  };

  const { loading, plusLoading, minusLoading } = useLoading(
    {
      load: false,
    },
    options
  );
  return (
    <div
      css={$css\`
      display: flex;
      align-items: center;
      \`}
    >
      <div>
        <Button css={$css\`display: block; text-transform: none;\`} onClick={toggleSetType}>
          setType : {options?.setType}
        </Button>
        <Button css={$css\`display: block; text-transform: none;\`} onClick={toggleboolify}>
          boolify : {\`\${options?.boolify}\`}
        </Button>
      </div>
      <Button
        onClick={() => {
          minusLoading("load");
        }}
      >
        -
      </Button>
      <div
        css={$css\`
        width: 60px;
        height: 60px;
        border: 2px solid gray;
        position: relative;
        border-radius: 50%;
        \`}
      >
        <div
          css={$css\`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        \`}
        >
          <Loading on={!!loading.load} />
        </div>
      </div>
      <Button
        onClick={() => {
          plusLoading("load");
        }}
      >
        +
      </Button>
      <strong>count : {JSON.stringify(loading.load)}</strong>
    </div>
  );
};
`,Pi={code:zg,View:Dg};function kn(){return o("span",{style:{marginRight:"10px"}})}function Ug(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useLoading"}),o(P,{low:!0,top:"20px",children:"Generics"}),o(re,{children:o("ul",{children:s("li",{children:[o("strong",{children:"T"}),": should extends object"]})})}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"loadingMap",type:"object",defaultValue:o(yt,{children:"Required"}),desc:"initial state map of loadings"},{name:"options",type:"object",defaultValue:{setType:"override",boolify:!0},desc:"options of useLoadingApi",properties:[{name:"setType",type:'"override" | "spread"',defaultValue:"override",desc:"set action mode of setter"},{name:"boolify",type:"boolean",defaultValue:!0,desc:"whether the value is false when state is 0, and is true when state is 1; or the value is 0 when state is false, and is 1 when state is true"}]}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array & Object)"}),o(te,{return:!0,rows:[{name:"[0] loading",type:o(Ue,{label:"{ [x: keyof T]: boolean | number }"}),desc:"state of loadings"},{name:"[1] setLoading",type:"(k, v) => void | ( k, (v) => T[k] ) => void | (obj: Partial<T>) => void | ( (obj) => Partial<T> ) => void",desc:"set the state of certain loading value",details:s("p",{children:[o("strong",{children:"overload 1"})," : ","(k, v) => void"," ",o(kn,{})," set the state of loading[k] to v",o("br",{}),o("strong",{children:"overload 2"})," : ","( k, (v) => T[k] ) => void"," ",o(kn,{})," ","set the state of loading[k] to v(loading[k])",o("br",{}),o("strong",{children:"overload 3"})," : ","(obj: Partial<T>) => void"," ",o(kn,{})," ","set the state of loading by obj",o("br",{}),o("strong",{children:"overload 4"})," : ","( (obj) => Partial<T> ) => void"," ",o(kn,{})," set the state of loading by obj(loading)"]})},{name:"[2] onLoading",type:"(key: keyof T) => void",desc:"set the state of loading[key] to true"},{name:"[3] unLoading",type:"(key: keyof T) => void",desc:"set the state of loading[key] to false"},{name:"[4] plusLoading",type:"(key: keyof T) => void",desc:"plus the state of loading[key] by 1"},{name:"[5] minusLoading",type:"(key: keyof T) => void",desc:"minus the state of loading[key] by 1"}]})]})}function Fg(){const e="useLoading",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e.replace(/([A-Z])/g,a=>a.toUpperCase()),desc:t,children:[o(re,{children:n}),o(Z,{code:Mi.code,children:o(Mi.View,{})}),o(P,{children:"Counter mode"}),o("p",{children:i}),o(Z,{code:Pi.code,children:o(Pi.View,{})}),o(Te,{children:r}),o(Ug,{})]})}const _g=()=>{const[e,t]=Am({name:"record",count:1});return s(b,{children:[o("pre",{children:JSON.stringify(e,null,2)}),o(A,{onClick:()=>t("count",e.count+1),children:"count++"})]})},Wg=`import { useRecord } from "@evanpatchouli-hooks-kit";
import { Button } from "@mui/material";

const View = () => {
  const [record, setRecord] = useRecord({
    name: "record",
    count: 1,
  });
  return (
    <>
      <pre>{JSON.stringify(record, null, 2)}</pre>
      <Button onClick={() => setRecord("count", record.count + 1)}>count++</Button>
    </>
  );
};
`,Ii={code:Wg,View:_g};function Hg(){const e=[{name:"initial",type:"object",defaultValue:{},desc:"an one-level record object"}],t=[{name:"[0] state",type:"object",defaultValue:null,desc:"state of record"},{name:"[1] setRecordAction",type:"Function",desc:s("div",{css:$css`text-align: left;`,children:[o("span",{children:"set method has 4 overloads:"}),s("ul",{children:[o("li",{children:o("code",{children:"set<K> = (key: K, value: T[K]): void;"})}),o("li",{children:o("code",{children:"set<K> = (key: K, setValueAction: (prev: T[K]) => T[K]): void;"})}),o("li",{children:o("code",{children:'set(record, mode?: "rehydrate" | "override"): void;'})}),o("li",{children:o("code",{children:'set(setRecordAction: (prev: T) => Partial<T>, mode?: "rehydrate" | "override"): void;'})})]}),o("span",{children:"mode:"}),s("ul",{children:[s("li",{children:[o("strong",{children:"rehydrate"}),": merge the new state with the old state"]}),s("li",{children:[o("strong",{children:"override"}),": replace the old state with the new state"]})]})]})}];return s(b,{children:[o(P,{id:"hook-api",children:"Api of useRecord"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:e}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:t})]})}function qg(){const e="useRecord",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:Ii.code,children:o(Ii.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(Hg,{})]})}const Kg=()=>{const{map:e}=Wn({name:"useMap",kind:"statefult-hook",state:"experimental"});return o(b,{children:o("pre",{children:JSON.stringify(Object.fromEntries(e),null,2)})})},Gg=`import { useMap } from "@evanpatchouli/react-hooks-kit";
import { Button } from "@mui/material";

const View = () => {
  const { map } = useMap({
    name: "useMap",
    kind: "statefult-hook",
    state: "experimental",
  });
  return (
    <>
      <pre>{JSON.stringify(Object.fromEntries(map), null, 2)}</pre>
    </>
  );
};
`,Ai={code:Gg,View:Kg},Qg=()=>{const{map:e,set:t,get:n}=Wn({count:1});return s(b,{children:[s("pre",{children:["map.count: ",e.get("count")]}),o(A,{onClick:()=>t("count",n("count")+1),children:"count++"})]})},Jg=`import { useMap } from "@evanpatchouli/react-hooks-kit";
import { Button } from "@mui/material";

const View = () => {
  const { map, set, get } = useMap({
    count: 1,
  });
  return (
    <>
      <pre>map.count: {map.get("count")}</pre>
      <Button onClick={() => set("count", get("count") + 1)}>count++</Button>
    </>
  );
};
`,Ni={code:Jg,View:Qg},Yg=()=>{const{map:e,set:t,get:n}=Wn({count:1});return s(b,{children:[s("pre",{children:["map.count: ",e.get("count")]}),o(A,{onClick:()=>t("count",n("count")+1),children:"overload 1"}),o(A,{onClick:()=>t("count",r=>r+1),children:"overload 2"}),o(A,{onClick:()=>t(r=>({count:r.get("count")+1}),"rehydrate"),children:"overload 3"}),o(A,{onClick:()=>t(r=>new Map(Object.entries({count:r.get("count")+1})),"override"),children:"overload 4"})]})},Xg=`import { useMap } from "@evanpatchouli/react-hooks-kit";
import { Button } from "@mui/material";

const View = () => {
  const { map, set, get } = useMap({
    count: 1,
  });
  return (
    <>
      <pre>map.count: {map.get("count")}</pre>
      <Button onClick={() => set("count", get("count") + 1)}>overload 1</Button>
      <Button onClick={() => set("count", (prev) => (prev as number) + 1)}>overload 2</Button>
      <Button onClick={() => set((prev) => ({ count: prev.get("count") + 1 }), "rehydrate")}>overload 3</Button>
      <Button onClick={() => set((prev) => new Map(Object.entries({ count: prev.get("count") + 1 })), "override")}>
        overload 4
      </Button>
    </>
  );
};
`,Oi={code:Xg,View:Yg},Zg=()=>{const{map:e,del:t,add:n}=Wn({a:"a",b:"b"});return s(b,{children:[o("pre",{children:JSON.stringify(Object.fromEntries(e),null,2)}),o(A,{onClick:()=>t("b"),children:"Del b"}),o(A,{onClick:()=>n("b","b"),children:"Add b"})]})},ev=`import { useMap } from "@evanpatchouli/react-hooks-kit";
import { Button } from "@mui/material";

const View = () => {
  const { map, del, add } = useMap({
    a: "a",
    b: "b",
  });
  return (
    <>
      <pre>{JSON.stringify(Object.fromEntries(map), null, 2)}</pre>
      <Button onClick={() => del("b")}>Del b</Button>
      <Button onClick={() => add("b", "b")}>Add b</Button>
    </>
  );
};
`,Vi={code:ev,View:Zg};function tv(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useMap"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initial object",type:"T",defaultValue:"{}",desc:"initial object to be convert into Map"}]}),s(P,{low:!0,top:"20px",children:["ReturnValue ","{ map, get, set, del, add }"]}),o(te,{return:!0,rows:[{name:"map",type:"Map<K, T[K]>",desc:"map object state"},{name:"get",type:"(key: K) => T[K]",desc:"get value by key from map"},{name:"set",type:"4 overloads",desc:"set method"},{name:"del",type:"(key: K) => void",desc:"del property by key"},{name:"add",type:"(key: K, value: any) => void",desc:"add property to map"}]})]})}function ov(){const e="useMap",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$h2`),u=f(`${e}.$p2`),c=f(`${e}.$p3`),p=f(`${e}.$h3`),h=f(`${e}.$p4`),g=f(`${e}.$h4`),v=f(`${e}.$p5`),k=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:Ai.code,children:o(Ai.View,{})}),o("p",{children:a}),o(P,{children:l}),o("p",{children:u}),o(Z,{code:Ni.code,children:o(Ni.View,{})}),o(P,{children:p}),o("p",{children:c}),o(Z,{code:Oi.code,children:o(Oi.View,{})}),o("p",{children:h}),o(P,{children:g}),o("p",{children:v}),o(Z,{code:Vi.code,children:o(Vi.View,{})})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:k}),o(tv,{})]})}const nv=()=>{const[e,t]=tn({name:"John",age:20,more:{address:"Taipei",score:100},messi:{game:{wordCup:{win:!0}}}});return s(b,{children:[o(A,{onClick:()=>{t("age",e.age+1)},children:"obj.age++"}),o(A,{onClick:()=>{e.more.score++},children:"obj.more.score++ [lazy]"}),o(A,{onClick:()=>{e.messi.game.wordCup.win=!e.messi.game.wordCup.win},children:"!obj.messi.game.wordCup.win [lazy]"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},rv=`import Code from "@/components/code";
import { useMeta } from "@/hooks/useMeta";
import { Button } from "@mui/material";

const View = () => {
  const [obj, setObj] = useMeta({
    name: "John",
    age: 20,
    more: {
      address: "Taipei",
      score: 100,
    },
    messi: {
      game: {
        wordCup: {
          win: true,
        },
      },
    },
  });
  return (
    <>
      <Button
        onClick={() => {
          setObj("age", obj.age + 1);
        }}
      >
        obj.age++
      </Button>
      <Button
        onClick={() => {
          obj.more.score++;
        }}
      >
        obj.more.score++ [lazy]
      </Button>
      <Button
        onClick={() => {
          obj.messi.game.wordCup.win = !obj.messi.game.wordCup.win;
        }}
      >
        !obj.messi.game.wordCup.win [lazy]
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};
`,Li={code:rv,View:nv},iv=()=>{const[e,t]=tn({width:100,height:100});return s(b,{children:[o(A,{onClick:()=>{t("width",(n,r)=>n+1)},children:"obj.width++"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},sv=`
import Code from "@/components/code";
import { useMeta } from "@/hooks/useMeta";
import { Button } from "@mui/material";

const View = () => {
  const [obj, setObj] = useMeta({
    width: 100,
    height: 100,
  });
  return (
    <>
      <Button
        onClick={() => {
          setObj("width", (pre, oldObj) => pre + 1);
        }}
      >
        obj.width++
      </Button>

      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};
`,Bi={code:sv,View:iv},av=()=>{const[e,t]=tn({width:100,height:100});return s(b,{children:[o(A,{onClick:()=>{t({width:e.width+1,height:e.height+1})},children:"override obj"}),o(A,{onClick:()=>{t(n=>({...n,width:n.width+1}))},children:"override obj from old"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},lv=`
import Code from "@/components/code";
import { useMeta } from "@/hooks/useMeta";
import { Button } from "@mui/material";

// Example of setAction of whole object
const View = () => {
  const [obj, setObj] = useMeta({
    width: 100,
    height: 100,
  });
  return (
    <>
      <Button
        onClick={() => {
          setObj({ width: obj.width + 1, height: obj.height + 1 });
        }}
      >
        override obj
      </Button>

      <Button
        onClick={() => {
          setObj((old) => ({
            ...old,
            width: old.width + 1,
          }));
        }}
      >
        override obj from old
      </Button>

      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};
`,ji={code:lv,View:av};function cv(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useMeta"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initialObject",type:"T extends object",defaultValue:o(yt,{children:"Required"}),desc:"initial state of object"},{name:"options",type:"{ deepSet?: boolean; createNonExists?: boolean }",defaultValue:"{ deepSet: false, createNonExist: false }",desc:"options of useMeta",properties:[{name:"deepSet",type:"boolean",defaultValue:!1,desc:"Whether to deep clone object when setting property",details:s(b,{children:[o("strong",{children:"DeepClone"})," will make it slower especially"," ",o("strong",{children:"a huge object"})]})},{name:"createNonExist",type:"boolean",defaultValue:!1,desc:"Whether to create non-exists property when setting property"}]}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"[0] state",type:"T",desc:"state of object"},{name:"[1] setter",type:"type: (k, v) => void | ( k, (oldValue, oldObject) => Value ) => void | (obj: T) => void | ( (oldObject) => T ) => void",desc:"setter of object"}]})]})}function dv(){const e="useMeta",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`),a=f(`${e}.$p2`),l=f(`${e}.$p3`),u=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e.replace(/([A-Z])/g,c=>c.toUpperCase()),desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(P,{low:!0,children:"Set deep property in object"}),o("p",{children:i}),o(Z,{code:Li.code,children:o(Li.View,{})}),o(P,{low:!0,children:"Set action of property"}),o("p",{children:a}),o(Z,{code:Bi.code,children:o(Bi.View,{})}),o(P,{low:!0,children:"Set action of whole object"}),o("p",{children:l}),o(Z,{code:ji.code,children:o(ji.View,{})})]}),o(Te,{children:r}),o(Ne,{children:u}),o(cv,{})]})}const uv=()=>{const[e,t]=Sa([{name:"Leo Messi"},{name:"Cristiano Ronaldo"},{name:"Neymar"},{name:"Kylian Mbappe"},{name:"Kevin De Bruyne"},{name:"Ronaldinho"}],{renderFn(r){return s("div",{css:$css`margin-bottom: 8px;`,children:[o("label",{css:$css`margin-right: 1rem;`,children:"Name"}),o("span",{id:r.name,children:r.name})]})}},[]),n=d.useMemo(()=>t.render(),[e]);return o(b,{children:n})},pv=`import useList from "@/hooks/useList";
import { useMemo } from "react";

const View = () => {
  const [list, lister] = useList<{
    name: string;
  }>(
    [
      { name: "Leo Messi" },
      { name: "Cristiano Ronaldo" },
      { name: "Neymar" },
      { name: "Kylian Mbappe" },
      { name: "Kevin De Bruyne" },
      { name: "Ronaldinho" },
    ],
    {
      renderFn(item) {
        return (
          <div css={$css\`margin-bottom: 8px;\`}>
            <label css={$css\`margin-right: 1rem;\`}>Name</label>
            <span id={item.name}>{item.name}</span>
          </div>
        );
      },
    },
    []
  );

  const listView = useMemo(() => lister.render(), [list]);
  return <>{listView}</>;
};`,Di={code:pv,View:uv},hv=()=>{const[e,t]=Sa([{name:"Leo Messi"},{name:"Cristiano Ronaldo"},{name:"Neymar"},{name:"Kylian Mbappe"},{name:"Kevin De Bruyne"},{name:"Ronaldinho"}],{renderFn(l){return s("div",{css:$css`margin-bottom: 8px;`,children:[o("label",{css:$css`margin-right: 1rem;`,children:"Name"}),o("span",{id:l.name,children:l.name})]})}},[]),n=()=>{t.addItem({name:Math.random().toString(36).slice(-8)})},r=()=>{const l=e.find((u,c)=>!e[c+1])?._id;(l||l===0)&&t.removeItem(l)},i=()=>{t.save()},a=d.useMemo(()=>t.render(),[e]);return s(b,{children:[a,s("div",{css:$css`text-align: right;`,children:[o("span",{children:"The temp list length: "}),o(Ue,{label:`${e.length}`}),o("span",{children:"The original list length: "}),o(Ue,{label:`${t.originalItems.length}`}),o(A,{color:"error",onClick:r,children:"Pop"}),o(A,{color:"primary",onClick:n,children:"Add"}),o(A,{color:"success",onClick:i,children:"Save"})]})]})},mv=`import useList from "@/hooks/useList";
import { Button, Chip } from "@mui/material";
import { useMemo } from "react";

const View = () => {
  const [list, lister] = useList<{
    name: string;
  }>(
    [
      { name: "Leo Messi" },
      { name: "Cristiano Ronaldo" },
      { name: "Neymar" },
      { name: "Kylian Mbappe" },
      { name: "Kevin De Bruyne" },
      { name: "Ronaldinho" },
    ],
    {
      renderFn(item) {
        return (
          <div css={$css\`margin-bottom: 8px;\`}>
            <label css={$css\`margin-right: 1rem;\`}>Name</label>
            <span id={item.name}>{item.name}</span>
          </div>
        );
      },
    },
    []
  );

  const handleAdd = () => {
    lister.addItem({
      name: Math.random().toString(36).slice(-8),
    });
  };

  const handlePop = () => {
    const lastIdkey = list.find((item, idx) => !list[idx + 1])?._id;
    if (lastIdkey || lastIdkey === 0) {
      lister.removeItem(lastIdkey);
    }
  };

  const handleSave = () => {
    lister.save();
  };

  const listView = useMemo(() => lister.render(), [list]);
  return (
    <>
      {listView}
      <div css={$css\`text-align: right;\`}>
        <span>The temp list length: </span>
        <Chip label={\`\${list.length}\`} />
        <span>The original list length: </span>
        <Chip label={\`\${lister.originalItems.length}\`} />
        <Button color="error" onClick={handlePop}>
          Pop
        </Button>
        <Button color="primary" onClick={handleAdd}>
          Add
        </Button>
        <Button color="success" onClick={handleSave}>
          Save
        </Button>
      </div>
    </>
  );
};`,zi={code:mv,View:hv};function fv(){const e=f("useList.$apis.generics");return s(b,{children:[o(P,{id:"hook-api",children:"Api of useList"}),s(P,{low:!0,top:"20px",children:["Generics",'<T extends object = { [key: string]: any }, K extends string | number = "_id">']}),o(re,{children:e}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initialItems",type:"Array<any>",defaultValue:o(yt,{children:"Required"}),desc:"initial list items"},{name:"options",type:"UseListOptions",defaultValue:{idKey:"_id"},desc:"options for useList",properties:[{name:"idKey",type:"string",defaultValue:"_id",desc:"idkey of item"},{name:"sortFn",type:"SortFunction<T>",defaultValue:null,desc:"sort function"},{name:"filterFn",type:"FilterFunction<T>",defaultValue:null,desc:"filter function"},{name:"renderFn",type:"RenderFunction<T>",defaultValue:"(item) => item",desc:"render of item"},{name:"renderEmpty",type:"Function | JSX.Element | React.ReactNode",defaultValue:null,desc:"render of no data"},{name:"itemsPerPage",type:"number",defaultValue:1,desc:"pageSize of pagination"}]},{name:"dependencies",type:"Array<any>",defaultValue:"[]",desc:"dependencies for items to auto save"}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"[0] temp list",type:"Array<ItemExtended<T>>",defaultValue:null,desc:"the temporary virtual list data"},{name:"[1] list manager",type:"object",desc:"list manager object",properties:[{name:"updateItems",type:"(newItems: Item<T>[]) => void",desc:"Function to replace the current list of items with a new list."},{name:"addItem",type:"(item: Item<T>) => void",desc:"Function to add a new item to the list."},{name:"removeItem",type:"(id: string | number) => void",desc:"Function to remove an item from the list by its id."},{name:"removeItems",type:"(ids: (string | number)[]) => void",desc:"Function to remove multiple items from the list by their ids."},{name:"save",type:"() => void",desc:"Function to save the current state of the list."},{name:"reset",type:"() => void",desc:"Function to reset the list to its original state."},{name:"filteredItems",type:"Item<T>[]",desc:"The current list of items after applying the filter function."},{name:"originalItems",type:"Item<T>[]",desc:"The original list of items."},{name:"render",type:"() => React.ReactNode",desc:"Function to render the current list of items."},{name:"pagedItems",type:"Item<T>[]",desc:"The current page of items when pagination is applied."},{name:"currentPage",type:"number",desc:"The current page number when pagination is applied."},{name:"totalPage",type:"number",desc:"The total number of pages when pagination is applied."},{name:"goToPage",type:"(page: number) => void",desc:"Function to navigate to a specific page."},{name:"goLastPage",type:"() => void",desc:"Function to navigate to the previous page."},{name:"goNextPage",type:"() => void",desc:"Function to navigate to the next page."}]}]})]})}function gv(){const e="useList",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`),a=f(`${e}.$p2`),l=f(`${e}.$faqs`),u=f(`${e}.$best`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e.replace(/([A-Z])/g,c=>c.toUpperCase()),desc:t,children:[o(re,{children:n}),s(Oe,{children:[o("p",{children:i}),o(Z,{code:Di.code,children:o(Di.View,{})}),o("p",{children:a}),o(Z,{code:zi.code,children:o(zi.View,{})})]}),o(Te,{children:r}),o(Le,{children:u}),o(Ne,{children:l}),o(fv,{})]})}var jo={},Ui;function vv(){if(Ui)return jo;Ui=1;var e=an();Object.defineProperty(jo,"__esModule",{value:!0}),jo.default=void 0;var t=e(ln()),n=Zo(),r=(0,t.default)((0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");return jo.default=r,jo}var bv=vv();const yv=en(bv);function Ua(e){const[t,n]=d.useState(!0);return o(Xt,{sx:{width:"400px",...e.sx},children:o(ct,{in:e.open??t,children:o(ic,{action:o(Ln,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{n(!1),e.setOpen&&e.setOpen(!1)},children:o(yv,{fontSize:"inherit"})}),severity:e.severity??"info",sx:{mb:2},children:e.children})})})}const wv={_id:"1",name:"Root",children:[{_id:"2",name:"Child 1",children:[{_id:"5",name:"Child 1.1",children:[]},{_id:"6",name:"Child 1.2",children:[]}]},{_id:"3",name:"Child 2",children:[]},{_id:"4",name:"Child 3",children:[]}]},xv=()=>{const[e,t]=d.useState(!1),[n,r]=d.useState(""),[i,{addNode:a,removeNode:l,moveNode:u,searchTree:c,render:p}]=Nm(wv,{idKey:"_id",renderNode:(w,T,E,S,$)=>o("div",{css:$css`margin-left: ${E*20}px;`,children:w.name},T)}),h=()=>{let T=a({_id:"7",name:"New Node",children:[]},"1");T&&(r(T),t(!0))},g=()=>{let w=l("7");w&&(r(w),t(!0))},[v,k]=zt();return s("div",{children:[o(A,{onClick:h,children:"Add Node"}),o(A,{onClick:g,children:"Remove Node"}),o(A,{onClick:()=>{let w=()=>u("7","4");v&&(w=()=>u("7","1"));let T=w();T?(r(T),t(!0)):k()},children:"Move Node"}),o(A,{onClick:()=>{const w=c("3");console.log(w)},children:"Search Node"}),o("div",{children:p()}),o(Ua,{severity:"error",open:e,setOpen:t,sx:{position:"fixed",bottom:16,right:16,zIndex:9999,width:"fit-content"},children:n})]})},$v=`import { useToggle } from "@/hooks";
import { Button } from "@mui/material";
import { useState } from "react";
import useTree from "@/hooks/useTree";
import Alert from "@/components/Alert";

type TreeNode = {
  _id: string;
  name: string;
  children: TreeNode[];
};

const initialTree: TreeNode = {
  _id: "1",
  name: "Root",
  children: [
    {
      _id: "2",
      name: "Child 1",
      children: [
        {
          _id: "5",
          name: "Child 1.1",
          children: [],
        },
        {
          _id: "6",
          name: "Child 1.2",
          children: [],
        },
      ],
    },
    {
      _id: "3",
      name: "Child 2",
      children: [],
    },
    {
      _id: "4",
      name: "Child 3",
      children: [],
    },
  ],
};

const View = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [tree, { addNode, removeNode, moveNode, searchTree, render }] = useTree<TreeNode, "_id">(initialTree, {
    idKey: "_id",
    renderNode: (node, idKey, level, parent, tree) => (
      <div key={idKey} css={$css\`margin-left: \${level * 20}px;\`}>
        {node.name}
      </div>
    ),
  });

  const handleAddNode = () => {
    const newNode = {
      _id: "7",
      name: "New Node",
      children: [],
    };
    let err = addNode(newNode, "1");
    if (err) {
      setAlertContent(err);
      setAlertOpen(true);
    }
  };

  const handleRemoveNode = () => {
    let err = removeNode("7");
    if (err) {
      setAlertContent(err);
      setAlertOpen(true);
    }
  };

  const [move, toggleMove] = useToggle();

  const handleMoveNode = () => {
    let moveFn = () => moveNode("7", "4");
    if (move) {
      moveFn = () => moveNode("7", "1");
    }
    let err = moveFn();
    if (err) {
      setAlertContent(err);
      setAlertOpen(true);
    } else {
      toggleMove();
    }
  };

  const handleSearchTree = () => {
    const result = searchTree("3");
    console.log(result);
  };

  return (
    <div>
      <Button onClick={handleAddNode}>Add Node</Button>
      <Button onClick={handleRemoveNode}>Remove Node</Button>
      <Button onClick={handleMoveNode}>Move Node</Button>
      <Button onClick={handleSearchTree}>Search Node</Button>
      <div>{render()}</div>
      <Alert
        severity="error"
        open={alertOpen}
        setOpen={setAlertOpen}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 9999,
          width: "fit-content",
        }}
      >
        {alertContent}
      </Alert>
    </div>
  );
};`,Fi={code:$v,View:xv};function Cv(){const e=f("useTree.$apis.generics");return s(b,{children:[o(P,{id:"hook-api",children:"Api of useTree"}),s(P,{low:!0,top:"20px",children:["Generics",'<T extends object = { [key: string]: any }, K extends string | number = "_id">']}),o(re,{children:e}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:"{}",desc:"initial tree data"},{name:"options",type:"UseTreeOptions<T,K>",defaultValue:{idKey:"_id"},desc:"options of useTree",properties:[{name:"idKey",type:"string",defaultValue:"id",desc:"key of id"},{name:"renderNode",type:"(node: TreeNode<T>, idKey: string, level: number) => React.ReactNode",desc:"render node of tree"},{name:"renderEmpty",type:"React.ReactNode | (() => React.ReactNode)",desc:"render empty node of tree"},{name:"filterFn",type:"(node: TreeNode<T>) => boolean",desc:"filter node of tree"},{name:"strict",type:"boolean",defaultValue:!1,desc:"if true, addNode, removeNode, updateNode, moveNode will check and throw error; if false, will return the errMsg"}]}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"[0] tree",type:'TreeNode<"_id">',desc:"state of tree data"},{name:"[1] manager",type:"TreeManager<T>",desc:"manager objectr of tree data",properties:[{name:"addNode",type:"(node: TreeNode<T>, parentId: any) => string | null",desc:"add a node to tree"},{name:"removeNode",type:"(nodeId: any) => string | null",desc:"remove a node from tree"},{name:"updateNode",type:"(nodeId: any, node: TreeNode<T>) => string | null",desc:"update a node of tree"},{name:"findNode",type:"(nodeId: any) => TreeNode<T> | null",desc:"find a node from tree"},{name:"moveNode",type:"(nodeId: any, parentId: T) => string | null",desc:"move a node to another node"},{name:"searchTree",type:"(nodeId: any) => TreeNode<T> | null",desc:"search a node from tree"},{name:"traverse",type:o(ke,{theme:"oneLight",style:{background:"#ebebeb"},lang:"ts",children:`Traverse<Callback> {
  (callback: Callback): any[];
  (nodeId: string, callback?: 
    Callback | undefined): any[];
}`}),desc:"traverse tree or certain node"},{name:"render",type:"() => React.ReactNode[]|React.ReactNode|null",desc:"use options.renderNode to render tree"}]}]})]})}function kv(){const e="useTree",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:Fi.code,children:o(Fi.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(Cv,{})]})}const Sv=()=>{const e=Un({name:"John",age:20,more:{address:"Taipei",score:100},messi:{game:{wordCup:{win:!0}}}},!0);return s(b,{children:[o(A,{onClick:()=>{e.age=Math.random()*100},children:"obj.age++"}),o(A,{onClick:()=>{e.more.score++},children:"obj.more.score++"}),o(A,{onClick:()=>{e.messi.game.wordCup.win=!e.messi.game.wordCup.win},children:"console.log(obj.age)"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},Tv=`import Code from "@/components/code";
import useReactive from "@/hooks/useReactive";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const View = () => {
  const obj = useReactive(
    {
      name: "John",
      age: 20,
      more: {
        address: "Taipei",
        score: 100,
      },
      messi: {
        game: {
          wordCup: {
            win: true,
          },
        },
      },
    },
    true
  );

  return (
    <>
      <Button
        onClick={() => {
          obj.age = Math.random() * 100;
        }}
      >
        obj.age++
      </Button>
      <Button
        onClick={() => {
          obj.more.score++;
        }}
      >
        obj.more.score++
      </Button>
      <Button
        onClick={() => {
          obj.messi.game.wordCup.win = !obj.messi.game.wordCup.win;
        }}
      >
        console.log(obj.age)
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};`,_i={code:Tv,View:Sv};function Rv(){const e=f("useReactive.$apis.generics");return s(b,{children:[o(P,{id:"hook-api",children:"Api of useReactive"}),s(P,{low:!0,top:"20px",children:["Generics","<T = any>"]}),o(re,{children:e}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initialObject",type:"primitive | Array | object | Date | Map | Set",defaultValue:o(yt,{children:"Required"}),desc:"initial value of reactive"},{name:"deepReactive",type:"boolean",defaultValue:!0,desc:"Whether to make the object reactive deeply. Default: true"},{name:"...callbacks",type:"Watcher<T>[]",defaultValue:null,desc:"When a reactive value changes, the callback will be triggered"}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Object)"}),o(te,{return:!0,rows:[{name:"ReactiveObject",type:"Reactive<T>",defaultValue:null,desc:"reactive object from initialObject",details:s("p",{children:["If the initialObject is a primitive type, the return value is a reactive primitive type. Just like:",o(ke,{lang:"ts",children:`const reactiveNumber = useReactive(1);
// typeof reactiveNumber will be like following:            
type ReactiveNumber =
{
  value: 1,
  set: (value: number) => void,
  get: () => number,
}`}),o("br",{})]})}]})]})}const Ev=()=>{const e=Un([1,2,3]);return d.useEffect(()=>{console.log(e)},[]),s(b,{children:[o(A,{onClick:()=>{e[0]++},children:"arr[0]++"}),o(A,{onClick:()=>{e.push(1)},children:"push"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},Mv=`import Code from "@/components/code";
import useReactive from "@/hooks/useReactive";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const View = () => {
  const arr = useReactive([1, 2, 3]);

  useEffect(() => {
    console.log(arr);
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          arr[0]++;
        }}
      >
        arr[0]++
      </Button>
      <Button
        onClick={() => {
          arr.push(1);
        }}
      >
        push
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(arr, null, 2)}
      </Code>
    </>
  );
};`,Wi={code:Mv,View:Ev},Pv=()=>{let e=Un(0);return d.useEffect(()=>{console.log(e)},[]),s(b,{children:[o(A,{onClick:()=>{e.value++},children:"c.value++"}),o(ke,{theme:"oneLight",lang:"json",children:`${e.value}`})]})},Iv=`import Code from "@/components/code";
import useReactive from "@/hooks/useReactive";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const View = () => {
  let c = useReactive(0);

  useEffect(() => {
    console.log(c);
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          c.value++;
        }}
      >
        c.value++
      </Button>
      <Code theme="oneLight" lang="json">
        {\`\${c.value}\`}
      </Code>
    </>
  );
};`,Hi={code:Iv,View:Pv},Av=()=>{let e=Un(0);const[t,n]=d.useState();return s(b,{children:[o(A,{onClick:()=>{console.log(e),console.log(Lr(e)),n(Lr(e))},children:"assign cValue with unwrap"}),o(ke,{theme:"oneLight",lang:"json",children:t?.toString()})]})},Nv=`import Code from "@/components/code";
import useReactive, { unwrap } from "@/hooks/useReactive";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  let c = useReactive(0);
  const [cValue, setCValue] = useState<number | undefined>();

  return (
    <>
      <Button
        onClick={() => {
          console.log(c);
          console.log(unwrap(c));
          setCValue(unwrap(c));
        }}
      >
        assign cValue with unwrap
      </Button>
      <Code theme="oneLight" lang="json">
        {cValue?.toString()}
      </Code>
    </>
  );
};`,qi={code:Nv,View:Av};function Ov(){const e="useReactive",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`),a=f(`${e}.$p2`),l=f(`${e}.$p3`),u=f(`${e}.$best`),c=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o("p",{children:i}),o(Z,{code:_i.code,children:o(_i.View,{})}),o("p",{children:a}),o(Z,{code:Wi.code,children:o(Wi.View,{})}),o("p",{children:l}),o(Z,{code:Hi.code,children:o(Hi.View,{})}),o(Z,{code:qi.code,children:o(qi.View,{})})]}),o(Te,{children:r}),o(Le,{children:u}),o(Ne,{children:c}),o(Rv,{})]})}const Vv=()=>{const e=uo(),t=Ht({name:"John",age:20,more:{address:"Taipei",score:100},messi:{game:{wordCup:{win:!0}}}});return s(b,{children:[o(A,{onClick:()=>{e(t.value.messi.game.wordCup.win.toString()),console.log(t)},children:"toastWordCupWin"}),o(A,{onClick:()=>{t.set("messi.game.wordCup.win",!t.get("messi.game.wordCup.win"))},children:"set wordCup.win (render)"}),o(A,{onClick:()=>{t.value.messi.game.wordCup.win=!t.value.messi.game.wordCup.win},children:"assign wordCup.win (not render)"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(t,null,2)})]})},Lv=`
import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
import useToast from "@/hooks/useToast";
import { Button } from "@mui/material";

const View = () => {
  const toast = useToast();
  const obj = useReactor(
    {
      name: "John",
      age: 20,
      more: {
        address: "Taipei",
        score: 100,
      },
      messi: {
        game: {
          wordCup: {
            win: true,
          },
        },
      },
    },
    [
      {
        name: "toastWordCupWin",
        action: (state) => {
          toast(obj.get("messi.game.wordCup.win")?.toString());
          console.log(obj);
        },
      },
    ]
  );
  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<"toastWordCupWin">("toastWordCupWin");
        }}
      >
        toastWordCupWin
      </Button>
      <Button
        onClick={() => {
          obj.set("messi.game.wordCup.win", !obj.get("messi.game.wordCup.win"));
        }}
      >
        set wordCup.win (render)
      </Button>
      <Button
        onClick={() => {
          obj.value.messi.game.wordCup.win = !obj.value.messi.game.wordCup.win;
        }}
      >
        assign wordCup.win (not render)
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};
`,Ki={code:Lv,View:Vv},Bv=()=>{const e=Ht({name:"evan",sex:"male",age:20},[{name:"age++",action:t=>{e.set("age",++t.age)}}]);return s(b,{children:[o(A,{onClick:()=>{e.dispatch("age++")},children:"age++"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},jv=`import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
import { Button } from "@mui/material";

type PluginNames = "age++";

const View = () => {
  const obj = useReactor(
    {
      name: "evan",
      sex: "male",
      age: 20,
    },
    [
      {
        name: "age++",
        action: (state) => {
          obj.set("age", ++state.age);
        },
      },
    ]
  );

  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<PluginNames>("age++");
        }}
      >
        age++
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};
`,Gi={code:jv,View:Bv},Dv=()=>{const e=Ht({name:"evan",sex:"male",age:20},[{name:"age++",action:n=>{e.set("age",++n.age)}}]),t=uo();return Js(e).then(()=>{const n=e.get("age");t(n?.toString())}),s(b,{children:[o(A,{onClick:()=>{e.dispatch("age++")},children:"age++"}),o("span",{children:"age will be toasted at screen if changes"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},zv=`import Code from "@/components/code";
import { useToast } from "@/hooks";
import useReactor, { listen } from "@/hooks/useReactor";
import { Button } from "@mui/material";

type PluginNames = "age++";

const View = () => {
  const obj = useReactor(
    {
      name: "evan",
      sex: "male",
      age: 20,
    },
    [
      {
        name: "age++",
        action: (state) => {
          obj.set("age", ++state.age);
        },
      },
    ]
  );

  const toast = useToast();

  listen(obj).then(() => {
    const age = obj.get("age");
    toast(age?.toString());
  });

  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<PluginNames>("age++");
        }}
      >
        age++
      </Button>
      <span>age will be toasted at screen if changes</span>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};
`,Qi={code:zv,View:Dv},Uv=()=>{const e=Ht({name:"evan",sex:"male",age:20},[{name:"age++",action:r=>{e.set("age",++r.age)}}]);return s(b,{children:[o(A,{onClick:()=>{e.dispatch("age++")},children:"age++"}),o(A,{onClick:()=>{e.value={name:"messi",sex:"male",age:36}},children:"reAssign"}),o(A,{onClick:()=>{e.setValue({name:"Cristiano Ronaldo",sex:"male",age:38})},children:"set new value"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},Fv=`import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
import { Button } from "@mui/material";

type Person = {
  name: string;
  sex: string;
  age: number;
};

type PluginNames = "age++";

const View = () => {
  const obj = useReactor<Person>(
    {
      name: "evan",
      sex: "male",
      age: 20,
    },
    [
      {
        name: "age++",
        action: (state) => {
          obj.set("age", ++state.age);
        },
      },
    ]
  );

  const reAssign = () => {
    obj.value = {
      name: "messi",
      sex: "male",
      age: 36,
    };
  };

  const setNewValue = () => {
    obj.setValue({
      name: "Cristiano Ronaldo",
      sex: "male",
      age: 38,
    });
  };

  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<PluginNames>("age++");
        }}
      >
        age++
      </Button>
      <Button onClick={reAssign}>reAssign</Button>
      <Button onClick={setNewValue}>set new value</Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};
`,Ji={code:Fv,View:Uv},_v=()=>{const e=Ht({name:"evan",sex:"male",age:20},[{name:"age++",action:(n,r,i)=>{i.set("age",++n.age)}}]),t=e.clone();return s(b,{children:[o(A,{onClick:()=>{e.dispatch("age++")},children:"age++"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)}),o(A,{onClick:()=>{t.dispatch("age++")},children:"age2++"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(t,null,2)}),o(A,{children:"clonedValue"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e.cloneValue(),null,2)})]})},Wv=`import Code from "@/components/code";
import useReactor, { Reactor } from "@/hooks/useReactor";
import { Button } from "@mui/material";

type PluginNames = "age++";

const View = () => {
  const obj = useReactor(
    {
      name: "evan",
      sex: "male",
      age: 20,
    },
    [
      {
        name: "age++",
        action: (state, payload, that) => {
          that.set("age", ++state.age);
        },
      },
    ]
  );

  const obj2 = obj.clone();

  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<PluginNames>("age++");
        }}
      >
        age++
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
      <Button
        onClick={() => {
          obj2.dispatch<PluginNames>("age++");
        }}
      >
        age2++
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj2, null, 2)}
      </Code>
      <Button>clonedValue</Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj.cloneValue(), null, 2)}
      </Code>
    </>
  );
};
`,Yi={code:Wv,View:_v},Hv=()=>{const e=Ht(0,[{name:"age++",action(t,n,r){r.setValue(t+1)}}]);return s(b,{children:[o(A,{onClick:()=>{e.dispatch("age++")},children:"age++"}),o(A,{onClick:()=>{e.reset()},children:"reset"}),o(ke,{theme:"oneLight",lang:"json",children:JSON.stringify({age:e,default:e.getDefaultValue()},null,2)})]})},qv=`import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
import { Button } from "@mui/material";

type PluginNames = "age++";

const View = () => {
  const obj = useReactor(
    {
      name: "evan",
      sex: "male",
      age: 20,
    },
    [
      {
        name: "age++",
        action: (state) => {
          obj.set("age", ++state.age);
        },
      },
    ]
  );

  obj.setDefaultValue({
    name: "evan",
    sex: "male",
    age: 20,
  });

  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<PluginNames>("age++");
        }}
      >
        age++
      </Button>
      <Button
        onClick={() => {
          obj.reset();
        }}
      >
        reset
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};
`,Xi={code:qv,View:Hv},Zi=({children:e,style:t,loading:n})=>s("div",{style:{position:"relative",...t},children:[e,n&&o("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,backgroundColor:"rgba(255, 255, 255, 0.666)"},children:o(zn,{on:n})})]}),es={background:"#fafafa",height:"60px"},Kv=()=>{Gs();const e=Ht({name:"Leo Messi",sex:"male",age:20,received:"",loading:!1},[{name:"greet_to_cr7",action:r=>{e.emit("greet_to_cr7",`Hello! I'm ${r.name}.`)}},{name:"receive_greet_to_messi",action:(r,i)=>{e.set("loading",!0),setTimeout(()=>{e.set("received",i),e.set("loading",!1)},500)}}]);d.useEffect(()=>{e.on("greet_to_messi",r=>{e.dispatch("receive_greet_to_messi",r)})},[]);const t=Ht({name:"Cristiano Ronaldo",sex:"male",age:38,received:"",loading:!1},[{name:"greet_to_messi",action:(r,i)=>{t.emit("greet_to_messi",`Hello, ${i} I'm ${r.name}.`)}},{name:"receive_greet_to_cr7",action:(r,i)=>{t.set("loading",!0),setTimeout(()=>{t.set("received",i);const a=i.split(" ").slice(-1)[0];t.dispatch("greet_to_messi",a),t.set("loading",!1)},500)}}]);return d.useEffect(()=>{t.on("greet_to_cr7",r=>t.dispatch("receive_greet_to_cr7",r))},[]),s(b,{children:[o(A,{onClick:()=>{e.dispatch("greet_to_cr7")},children:"Messi greet to CR7"}),o(A,{onClick:()=>{e.set("received",""),t.set("received","")},style:{marginLeft:"1em"},children:"Reset All"}),o("div",{style:{marginLeft:"0.5em"},children:"Messi got: "}),o(Zi,{loading:e.get("loading"),style:es,children:o(ke,{theme:"oneLight",lang:"text",children:e.get("received")})}),o("div",{style:{marginLeft:"0.5em"},children:"CR7 got: "}),o(Zi,{loading:t.get("loading"),style:es,children:o(ke,{theme:"oneLight",lang:"text",children:t.get("received")})})]})},Gv=`import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
import { Button } from "@mui/material";

type PluginNames = "greet_to_cr7" | "receive_greet_to_messi";

const View = () => {
  const messi = useReactor(
    {
      name: "Leo Messi",
      sex: "male",
      age: 20,
      received: "",
      loading: false,
    },
    [
      {
        name: "greet_to_cr7",
        action: (state) => {
          messi.emit("greet_to_cr7", \`Hello! I'm \${state.name}.\`);
        },
      },
      {
        name: "receive_greet_to_messi",
        action: (state, playload) => {
          messi.set("loading", true);
          setTimeout(() => {
            messi.set("received", playload);
            messi.set("loading", false);
          }, 500);
        },
      },
    ]
  );

  messi.on("greet_to_messi", (v) => messi.dispatch("receive_greet_to_messi", v));

  const cr7 = useReactor(
    {
      name: "Cristiano Ronaldo",
      sex: "male",
      age: 38,
      received: "",
      loading: false,
    },
    [
      {
        name: "greet_to_messi",
        action: (state, playload) => {
          cr7.emit("greet_to_messi", \`Hello, \${playload} I'm \${state.name}.\`);
        },
      },
      {
        name: "receive_greet_to_cr7",
        action: (state, playload) => {
          cr7.set("loading", true);
          setTimeout(() => {
            cr7.set("received", playload);
            // parse greeter name
            const greeterName = playload.split(" ").slice(-1)[0];
            cr7.dispatch("greet_to_messi", greeterName);
            cr7.set("loading", false);
          }, 500);
        },
      },
    ]
  );

  cr7.on("greet_to_cr7", (v) => cr7.dispatch("receive_greet_to_cr7", v));

  const resetAll = () => {
    messi.set("received", "");
    cr7.set("received", "");
  };

  return (
    <>
      <Button
        onClick={() => {
          messi.dispatch<PluginNames>("greet_to_cr7");
        }}
      >
        Messi greet to CR7
      </Button>
      <Button
        onClick={resetAll}
        style={{
          marginLeft: "1em",
        }}
      >
        Reset All
      </Button>
      <div style={{ marginLeft: "0.5em" }}>Messi got: </div>
      <Div loading={messi.get("loading")} style={DivStyle}>
        <Code theme="oneLight" lang="text">
          {messi.get("received")}
        </Code>
      </Div>
      <div style={{ marginLeft: "0.5em" }}>CR7 got: </div>
      <Div loading={cr7.get("loading")} style={DivStyle}>
        <Code theme="oneLight" lang="text">
          {cr7.get("received")}
        </Code>
      </Div>
    </>
  );
};
`,ts={code:Gv,View:Kv};function Qv(){const e=f("useReactor.$apis.generics");return s(b,{children:[o(P,{id:"hook-api",children:"Api of useReactive"}),s(P,{low:!0,top:"20px",children:["Generics","<T = any>"]}),o(re,{children:e}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initialValue",type:"any",defaultValue:o(yt,{children:"Required"}),desc:"initial value of reactor to hold"},{name:"plugins",type:"ReactorPlugin<T>[]",defaultValue:"[]",desc:"register plugins to invoke some actions and onActions."}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Object)"}),o(te,{return:!0,rows:[{name:"ReactorInstance",type:"Reactor<T>",defaultValue:null,desc:"reactor object from initialValue",details:s("p",{children:["Reactor is a state management tool based on React Hooks with the following features:",s("ul",{children:[o("li",{children:"View updates are only triggered by set invocation or value reassignment."}),o("li",{children:"Direct changes to deep state properties won't trigger view updates but are stored in memory and applied on the next view update."}),o("li",{children:"Reactor is a reactive, proxy, cloneable, resettable, dispatchable, serializable, subscribable, listenable, and pluginable object."})]})]}),properties:[{name:"value",type:"T",desc:"The current value of the reactor."},{name:"get",type:"(path?: Path<T>) => PathValue<T, typeof path>",desc:"get certain property from the value of the reactor."},{name:"set",type:"(path?: Path<T>, value: PathValue<T, typeof path>) => void",desc:"Set certain property to the value of the reactor."},{name:"reset",type:"() => void",desc:"Reset the value of the reactor to the default value."},{name:"setValue",type:"(value: T | SetAction<T>) => void",desc:"Override the value with value proped."},{name:"setDefaultValue",type:"(value: T) => void",desc:"Override the defaultValue with value proped."},{name:"getDefaultValue",type:"() => T",desc:"get the default value of the reactor."},{name:"clone",type:"() => T",desc:"Clone this reactor."},{name:"cloneValue",type:"() => T",desc:"Clone the value of this reactor."},{name:"dispatch",type:"(action: string, payload?; any) => void",desc:"invoke the plugins action will certain action name equal to plugin's name."},{name:"emit",type:"(eventName: string, payload?: any) => void",desc:"send a event on reactor event bus."},{name:"on",type:"(eventName: string, handler: (payload?: any) => void) => void",desc:"listen a event on reactor event bus."}]}]})]})}function Jv(){const e="useReactor",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`),a=f(`${e}.$p1_1`),l=f(`${e}.$p2`),u=f(`${e}.$p3`),c=f(`${e}.$p4`),p=f(`${e}.$p5`),h=f(`${e}.$p6`),g=f(`${e}.$p7`),v=f(`${e}.$p7_notice`),k=f(`${e}.$best`),x=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e.replace(/([A-Z])/g,y=>y.toUpperCase()),desc:t,children:[o(re,{children:n}),s(Oe,{children:[o("p",{children:i}),o(Z,{code:Ki.code,children:o(Ki.View,{})}),o("p",{children:a}),o("br",{}),o("p",{children:l}),o(Z,{code:Gi.code,children:o(Gi.View,{})}),o("br",{}),o("p",{children:u}),o(Z,{code:Qi.code,children:o(Qi.View,{})}),o("br",{}),o("p",{children:c}),o(Z,{code:Ji.code,children:o(Ji.View,{})}),o("br",{}),o("p",{children:p}),o(Z,{code:Yi.code,children:o(Yi.View,{})}),o("br",{}),o("p",{children:h}),o(Z,{code:Xi.code,children:o(Xi.View,{})}),o("br",{}),o("p",{children:g}),o(Z,{code:ts.code,children:o(ts.View,{})}),v]}),o(Te,{children:r}),o(Le,{children:k}),o(Ne,{children:x}),o(Qv,{})]})}const Yv=()=>{const[e,t,n]=Ta(0);return s("span",{children:["cnt: ",e," ",o(A,{onClick:()=>t(Number(Math.floor(Math.random()*10))),children:"tick"}),o("br",{}),"cntChanges: ",n]})},Xv=`import useTickState from "@/hooks/useTickState";
import { Button } from "@mui/material";

const View = () => {
  const [cnt, setCtn, tick] = useTickState(0);
  return (
    <span>
      cnt: {cnt}{" "}
      <Button onClick={() => setCtn(Number(Math.floor(Math.random() * 10)))}>
        tick
      </Button>
      <br />
      cntChanges: {tick}
    </span>
  );
};
`,os={code:Xv,View:Yv},Zv=()=>{const[e,t,n]=Ta(0,"onChange",r=>[r]);return s("span",{children:["cnt: ",e," ",o(A,{onClick:()=>t(Number(Math.floor(Math.random()*10))),children:"tick"}),o("br",{}),"cntChanges: ",n]})},eb=`import useTickState from "@/hooks/useTickState";
import { Button } from "@mui/material";

const View = () => {
  const [cnt, setCtn, tick] = useTickState(0, "onChange", (state) => [state]);
  return (
    <span>
      cnt: {cnt}{" "}
      <Button onClick={() => setCtn(Number(Math.floor(Math.random() * 10)))}>
        tick
      </Button>
      <br />
      cntChanges: {tick}
    </span>
  );
};
`,ns={code:eb,View:Zv};function tb(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useTickState"}),s(P,{low:!0,top:"20px",children:["Generics","<T extends unknown = any>"]}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initial",type:"T",defaultValue:null,desc:"initial state"},{name:"tickBy",type:'"onSetState"|"onChange"',defaultValue:"onSetState",desc:"The trigger to increment the tick"},{name:"dependencies",type:"Array | (state) => Array",defaultValue:"[state]",desc:"onChange useEffect dependencies"}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"[0] state",type:"T",defaultValue:null,desc:"state"},{name:"[1] setState",type:"SetStateAction",desc:"setState function"},{name:"[2] tick",type:"number",desc:"tick (value changes)"}]})]})}function ob(){const e="useTickState",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$p2`),u=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o("p",{children:a}),o(Z,{code:os.code,children:o(os.View,{})}),o("p",{children:l}),o(Z,{code:ns.code,children:o(ns.View,{})})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:u}),o(tb,{})]})}const nb=()=>{const[e,t,n]=xl("initial"),[r,i]=d.useState("initial"),a=l=>{i(l.target.value)};return s("div",{css:$css`margin: 20px;`,children:[o(vm,{label:"NewState",value:r,onInput:a}),o("br",{}),o(A,{onClick:()=>t(r),children:"setState"}),o(A,{onClick:()=>n.createMemento("memento 1"),children:"createMemento"}),o(A,{onClick:()=>n.rollback(),children:"rollback"}),o(A,{onClick:()=>n.forward(),children:"forward"}),o(A,{onClick:()=>n.clear(),children:"clear"}),s("label",{css:$css`display: block;`,children:["state: ",o("span",{children:e})]}),s("label",{css:$css`display: block;`,children:["idKey: ",o("span",{children:n.idKey})]}),s("label",{css:$css`display: block;`,children:["mementos: ",o("span",{children:JSON.stringify(n.mementos,null,2)})]}),s("label",{css:$css`display: block;`,children:["history: ",o("span",{children:JSON.stringify(n.history,null,2)})]})]})},rb=`import useMemento from "@/hooks/useMemento";
import { Button } from "@mui/material";

const View = () => {
  const [state, setState, memento] = useMemento("initial");
  return (
    <div css={$css\`margin: 20px;\`}>
      <Button onClick={() => setState("new state")}>setState</Button>
      <Button onClick={() => memento.createMemento("memento 1")}>createMemento</Button>
      <Button onClick={() => memento.rollback()}>rollback</Button>
      <Button onClick={() => memento.forward()}>forward</Button>
      <Button onClick={() => memento.clear()}>clear</Button>
      <label css={$css\`display: block;\`}>
        state: <span>{state}</span>
      </label>
      <label css={$css\`display: block;\`}>
        idKey: <span>{memento.idKey}</span>
      </label>
      <label css={$css\`display: block;\`}>
        mementos: <span>{JSON.stringify(memento.mementos, null, 2)}</span>
      </label>
      <label css={$css\`display: block;\`}>
        history: <span>{JSON.stringify(memento.history, null, 2)}</span>
      </label>
    </div>
  );
};

`,rs={code:rb,View:nb};function ib(){const e=[{name:"initialState",type:"T",defaultValue:Nn.Null(),desc:"initial state of memento"},{name:"config",type:"object",defaultValue:{historySize:10,strict:!1},desc:"configuration for memento",properties:[{name:"historySize",type:"number",defaultValue:10,desc:"size of the history"},{name:"strict",type:"boolean",defaultValue:!1,desc:"throw error when idKey is not found"}]}],t=[{name:"[0] state",type:"T | null",defaultValue:"initialState",desc:"current state"},{name:"[1] setState",type:Nn.SetAction("T|null"),desc:"set new state to memento (popstate)"},{name:"[2] manager",type:"object",desc:"memento manager with various methods",properties:[{name:"idKey",type:"number | NaN",desc:"current state's id"},{name:"createMemento",type:"(idKey: string) => void",desc:"create a memento"},{name:"deleteMemento",type:"(idKey: string) => void",desc:"delete a memento"},{name:"clearMementos",type:"() => void",desc:"clear all mementos"},{name:"rollback",type:"() => void",desc:"rollback to previous state"},{name:"forward",type:"() => void",desc:"forward to next state"},{name:"goToHistory",type:"(index: number) => void",desc:"go to a history state"},{name:"goToMemento",type:"(idKey: string) => void",desc:"go to a memento state"},{name:"deleteHistory",type:"(index: number) => void",desc:"delete a history state"},{name:"clearHistory",type:"() => void",desc:"clear all history states"},{name:"clone",type:"(idKey: string) => void",desc:"clone a history state"},{name:"clear",type:"() => void",desc:"clear all states"},{name:"history",type:"Array<HistoryItem<T>>",desc:"all history states"},{name:"mementos",type:"Array<Memento<T>>",desc:"all mementos"}]}];return s(b,{children:[o(P,{id:"hook-api",children:"Api of useMemento"}),s(P,{low:!0,top:"20px",children:["Generics","<T = any>"]}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:e}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:t})]})}function sb(){const e="useMemento",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$p2`),u=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o("p",{children:a}),o(Z,{code:rs.code,children:o(rs.View,{})}),o("p",{children:l})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:u}),o(ib,{})]})}const ab=()=>{const[e,t]=d.useState(0),n=Vm(()=>{t(e+1)},1e3,{immediate:!0,pauseAtFirst:!1}),r=()=>n.pause(),i=()=>n.resume(),a=()=>{n.reset(),t(0)},l=()=>n.delayedPause(2e3),u=()=>n.delayedResume(2e3);return s(b,{children:[s("p",{children:["count: ",e," ticker: ",n.tick]}),o(A,{onClick:r,children:"pause"}),o(A,{onClick:i,children:"resume"}),o(A,{onClick:a,children:"reset"}),o(A,{onClick:l,children:"pause after 2s"}),o(A,{onClick:u,children:"resume after 2s"})]})},lb=`import useTicker from "@hooks/useTicker";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const ticker = useTicker(
    () => {
      setCount(count + 1);
    },
    1000,
    {
      immediate: true,
      pauseAtFirst: false,
    }
  );
  const pause = () => ticker.pause();
  const resume = () => ticker.resume();
  const reset = () => {
    ticker.reset();
    setCount(0);
  };
  const pauseAfter2s = () => ticker.delayedPause(2000);
  const resumeAfter2s = () => ticker.delayedResume(2000);
  return (
    <>
      <p>
        count: {count} ticker: {ticker.tick}
      </p>
      <Button onClick={pause}>pause</Button>
      <Button onClick={resume}>resume</Button>
      <Button onClick={reset}>reset</Button>
      <Button onClick={pauseAfter2s}>pause after 2s</Button>
      <Button onClick={resumeAfter2s}>resume after 2s</Button>
    </>
  );
};`,is={code:lb,View:ab};function cb(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useTicker"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"fn",type:"(tick: number) => void",desc:"callback function"},{name:"options or duration",type:"TickerOptions | number",desc:"options or duration"},{name:"options",type:"TickerOptions",desc:"options"}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Object)"}),o(te,{return:!0,rows:[{name:"tick",type:"number",defaultValue:0,desc:"tick count"},{name:"status",type:'"on" | "off"',defaultValue:'"off"',desc:"status of ticker"},{name:"resume",type:"() => void",desc:"resume ticker"},{name:"pause",type:"() => void",desc:"pause ticker"},{name:"reset",type:"() => void",desc:"reset ticker"},{name:"delayedPause",type:"(delay: number) => void",desc:"pause ticker after delay"},{name:"delayedResume",type:"(delay: number) => void",desc:"resume ticker after delay"}]})]})}function db(){const e="useTicker",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:is.code,children:o(is.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(cb,{})]})}const ub=()=>{const[e,t]=d.useState(0),r=jm(()=>{t(i=>i+1)},1e3,!1);return s(b,{children:[s("h4",{children:["count: ",e]}),o(A,{onClick:r,variant:"contained",color:"primary",children:"+1"})]})},pb=`
import useDebounce from "@hooks/useDebounce";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [num, setNum] = useState(0);
  const plusNum = () => {
    setNum((prevNum) => prevNum + 1);
  };
  const plusNumDebounced = useDebounce(plusNum, 200, true);
  return (
    <>
      <h4>count: {num}</h4>
      <Button onClick={plusNumDebounced}>+1</Button>
    </>
  );
};
`,ss={code:pb,View:ub};function hb(){const e=[{name:"fn",type:"(args: any[]) => R",defaultValue:void 0,desc:"debounce function"},{name:"delay",type:"number",defaultValue:200,desc:"delay time"},{name:"immediate",type:"boolean",defaultValue:!1,desc:"whether to execute immediately"},{name:"callback",type:"(result: R) => void",defaultValue:void 0,desc:"callback function"}],t=[{name:"debounceFn",type:"function & { cancel: () => void }",desc:"debounce function",properties:[{name:"cancel",type:"() => void",desc:"cancel function"}]}],n=f("useDebounce.$apis.generics");return s(b,{children:[o(P,{id:"hook-api",children:"Api of useDebounce"}),o("pre",{children:`function useDebounce<R = void>(
  fn: (args: any[]) => R, 
  delay?: number, 
  immediate?: boolean, 
  callback?: (result: ReturnType<typeof fn>) => void
  ): {
    (...args: any[]): Promise<unknown>;
    cancel(): void;
}`}),n,o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:e}),o(P,{low:!0,top:"20px",children:"ReturnValue (Function Object)"}),o(te,{return:!0,rows:t})]})}function mb(){const e="useDebounce",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:ss.code,children:o(ss.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(hb,{})]})}const fb=()=>{const[e,t]=d.useState(0),n=$l(function(){t(r=>r+1)},1e3);return s(b,{children:[s("p",{children:["Throttle: ",e]}),o(A,{variant:"contained",onClick:n,children:"Throttle + 1"})]})},gb=`
import { useThrottle } from "@evanpatchouli/react-hooks-kit";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [cnt, setCnt] = useState(0);
  const throttlePlusNum = useThrottle(() => {
    setCnt((prevNum) => prevNum + 1);
  }, 1000);
  return (
    <>
      <p>Throttle: {cnt}</p>
      <Button variant="contained" onClick={throttlePlusNum}>Throttle + 1</Button>
    </>
  );
};
`,as={code:gb,View:fb};function vb(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useThrottle"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"fn",type:"(args: any[]) => R",defaultValue:void 0,desc:"function to throttle"},{name:"interval",type:"number",defaultValue:200,desc:"time to throttle"},{name:"options",type:"object",defaultValue:{leading:!0,trailing:!1},desc:"options of the throttle",properties:[{name:"leading",type:"boolean",defaultValue:!0,desc:"call function on leading edge"},{name:"trailing",type:"boolean",defaultValue:!1,desc:"call function on trailing edge"}]}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Function Object)"}),o(te,{return:!0,rows:[{name:"throttleFn",type:"function & { cancel: () => void }",desc:"throttled function",properties:[{name:"cancel",type:"() => void",desc:"cancel function"}]}]})]})}function bb(){const e="useThrottle",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:as.code,children:o(as.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(vb,{})]})}const yb=()=>{const{params:e}=yr(()=>{console.log("url changed")},"ursUrl exmaple1 listener",!0);return s(b,{children:[o("span",{children:"url params: "}),o("code",{children:JSON.stringify(e,null,2)}),s("span",{style:{color:"gainsboro"},children:[" ","( try to change query params in broswer location bar )"]})]})},wb=`
import useUrl from "@/hooks/useUrl";

const View = () => {
  const { params } = useUrl<"?id=2">(
    () => {
      console.log("url changed");
    },
    "ursUrl exmaple1 listener",
    true // call immediately
  );
  return (
    <>
      <span>url params: </span>
      <code>{JSON.stringify(params, null, 2)}</code>
      <span>( try to change query params in broswer location bar )</span>
    </>
  );
};
`,ls={code:wb,View:yb};function xb(){const e=f("useUrl.desc"),t=f("useUrl.detail"),n=f("useUrl.consideration");return d.useEffect(()=>{document.title=`useUrl - ${pe.homepage}`},[]),s(de,{title:"UseUrl",desc:e,children:[o(re,{children:t}),o(Z,{code:ls.code,children:o(ls.View,{})}),o(Te,{children:n})]})}const $b=()=>{const[e,t]=Hn([{ids:["logs"],name:"guide",renders:[{id:"logs",render(c,p,h,g){return s("div",{onClick:()=>{t.stop()},style:{width:"fit-content"},children:[p," ",h," : only the first not work (☝️ click here to close )"]})}}]}],void 0,{containerStyle:{backgroundColor:"#fff",zIndex:"9999",padding:"10px 20px",borderRadius:"6px",cursor:"pointer"}}),n=[],[r,i]=d.useState({a:1,b:2,c:{c1:1,c2:{"c3.x":1}}}),a=er(r,"c.c2.c3.x",(c,p)=>{console.log(`num.c.c2.["c3.x"]: ${c} -> ${p}`)}),l=er(r,"c.c2.c3.x",(c,p)=>{console.log(`(#c__c2__c3_x$strict) num.c.c2.["c3.x"]: ${c} -> ${p}`)},!0),u=er(r,["c","c2","c3.x"],(c,p)=>{console.log(`(#c__c2__c3_x$array) num.c.c2.["c3.x"]: ${c} -> ${p}`)},{immediate:!0});return s(b,{children:[o(A,{variant:"outlined",onClick:()=>{t.start(),i(c=>({...c,c:{...c.c,c2:{...c.c.c2,"c3.x":c.c.c2["c3.x"]+1}},a:r.a+1}))},children:JSON.stringify(r,null,2)}),s("div",{css:$css({marginBlock:"1rem"}),children:[s(A,{variant:"contained",color:"success",children:["c__c2__c3_x: ",a]})," ",'default is non-strict mode, the special key "c3.x" will cause mistake.']}),s("div",{css:$css({marginBlock:"1rem"}),children:[s(A,{variant:"contained",color:"success",children:["c__c2__c3_x$strict: ",l]})," ","set strict mode to ",o("code",{children:"true"})," works, but may cause energy consumption."]}),s("div",{css:$css({marginBlock:"1rem"}),children:[s(A,{variant:"contained",color:"success",children:["c__c2__c3_x$array: ",u]})," ",o("strong",{children:"Most suggested"}),': use array to access the special key "c3.x".']}),o("div",{id:"logs",children:n.filter(c=>!c.startsWith("theme")).map((c,p)=>o("p",{children:c},p))})]})},Cb=`
import useConsoleLog from "@/hooks/useConsoleLog";
import useWatch from "@/hooks/useWatch";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const logs = useConsoleLog();
  const [num, setNum] = useState({
    a: 1,
    b: 2,
    c: {
      c1: 1,
      c2: {
        "c3.x": 1,
      },
    },
  });
  const c__c2__c3_x = useWatch(num, "c.c2.c3.x", (a, b) => {
    console.log(\`num.c.c2.["c3.x"]: \${a} -> \${b}\`);
  });
  const c__c2__c3_x$strict = useWatch(
    num,
    "c.c2.c3.x",
    (a, b) => {
      console.log(\`(#c__c2__c3_x$strict) num.c.c2.["c3.x"]: \${a} -> \${b}\`);
    },
    true
  );
  const c__c2__c3_x$array = useWatch(num, ["c", "c2", "c3.x"], (a, b) => {
    console.log(\`(#c__c2__c3_x$array) num.c.c2.["c3.x"]: \${a} -> \${b}\`);
  });
  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          setNum((_num) => ({
            ..._num,
            c: {
              ..._num.c,
              c2: {
                ..._num.c.c2,
                "c3.x": _num.c.c2["c3.x"] + 1,
              },
            },
            a: num.a + 1,
          }));
        }}
      >
        {JSON.stringify(num, null, 2)}
      </Button>
      <div
        css={$css({
          marginBlock: "1rem",
        })}
      >
        <Button variant="contained" color="success">
          c__c2__c3_x: {c__c2__c3_x}
        </Button>{" "}
        default is non-strict mode, the special key "c3.x" will cause mistake.
      </div>
      <div
        css={$css({
          marginBlock: "1rem",
        })}
      >
        <Button variant="contained" color="success">
          c__c2__c3_x$strict: {c__c2__c3_x$strict}
        </Button>{" "}
        set strict mode to <code>true</code> works, but may cause energy consumption.
      </div>
      <div
        css={$css({
          marginBlock: "1rem",
        })}
      >
        <Button variant="contained" color="success">
          c__c2__c3_x$array: {c__c2__c3_x$array}
        </Button>{" "}
        <strong>Most suggested</strong>: use array to access the special key "c3.x".
      </div>
      <div>
        {logs
          .filter((e: string) => !e.startsWith("theme"))
          .map((log, index) => (
            <p key={index}>{log}</p>
          ))}
      </div>
    </>
  );
};
`,cs={code:Cb,View:$b};function kb(){const e=[{name:"object",type:"object state variable",required:!0,defaultValue:void 0,desc:"object state variable to watch"},{name:"path",type:"(value: T) => void | undefined",defaultValue:void 0,desc:"callback function when value changed"},{name:"callback",type:"Callback<V>",defaultValue:void 0,desc:"callback function when value changed"},{name:"configOrStrict",type:"Config | boolean",defaultValue:!1,desc:s("div",{css:$css`text-align: left;`,children:["Config object to configure the watch behavior.",o("br",{}),"Config structure:",o("pre",{children:`interface Config {
  strict?: boolean;
  immediate?: boolean;
}`})]})},{name:"immediate",type:"boolean",defaultValue:!1,desc:"whether to execute callback immediately"}];return s(b,{children:[o(P,{id:"hook-api",children:"Api of useWatchGetter"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:e}),o(P,{low:!0,top:"20px",children:"ReturnValue (value)"}),o(te,{return:!0,rows:[{name:"value",type:"T | undefined",defaultValue:null,desc:"value watched"}]})]})}function Sb(){const e="useWatch",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`useWatch - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:cs.code,children:o(cs.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(kb,{})]})}const Tb=()=>{const[e,t]=d.useState({a:1,b:2}),n=()=>t(a=>({...a,a:a.a+1})),r=()=>t(a=>({...a,a:a.a-1})),i=zm(()=>e.a);return s(b,{children:[o(A,{onClick:n,children:"Increment"}),o(A,{onClick:r,children:"Decrement"}),o("pre",{children:JSON.stringify(i,null,2)})]})},Rb=`
import { useWatchGetter } from "@evanpatchouli/react-hooks-kit";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [obj, setObj] = useState({ a: 1, b: 2 });
  const increment = () => setObj((prev) => ({ ...prev, a: prev.a + 1 }));
  const decrement = () => setObj((prev) => ({ ...prev, a: prev.a - 1 }));
  const value = useWatchGetter(() => obj.a);
  return (
    <>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  );
};
`,ds={code:Rb,View:Tb};function Eb(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useWatchGetter"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"getter",type:"getter function",required:!0,defaultValue:void 0,desc:"getter function should return a value"},{name:"callback",type:"(value: T) => void | undefined",defaultValue:void 0,desc:"callback function when value changed"},{name:"updater",type:"boolean",defaultValue:"false",desc:"if true, return [value, updater]"}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (value or Array([value, updater]))"}),o(te,{return:!0,rows:[{name:"value or array",type:"T | [T, Function]",defaultValue:null,desc:"value or Array([value, updater])"}]})]})}function Mb(){const e="useWatchGetter",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:ds.code,children:o(ds.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(Eb,{})]})}const us=e=>{const t=Ht("user"),[n,r]=d.useState("");return Um(t,i=>{r(i),console.log("user changes")},e.immediate),s(b,{children:[s(A,{onClick:()=>t.setValue(Math.random().toString(36).slice(-8)),children:["user changes ",e.immediate?"immediate":"unimmediate"]}),s("div",{children:["user: ",t.value]}),s("div",{children:["useCopy: ",n]})]})},Pb=()=>s(b,{children:[o(us,{}),o(us,{immediate:!0})]}),Ib=`import useReactorListener from "@hooks/useReactorListener";
import useReactor from "@hooks/useReactor";
import { Button } from "@mui/material";
import { useState } from "react";

const Example = (props: { immediate?: boolean }) => {
  const user = useReactor("user");
  const [useCopy, setUseCopy] = useState("");
  useReactorListener(
    user,
    (value) => {
      setUseCopy(value);
      console.log("user changes");
    },
    props.immediate
  );
  return (
    <>
      <Button
        onClick={() => user.setValue(Math.random().toString(36).slice(-8))}
      >
        user changes {props.immediate ? "immediate" : "unimmediate"}
      </Button>
      <div>user: {user.value}</div>
      <div>useCopy: {useCopy}</div>
    </>
  );
};

const View = () => (
  <>
    <Example />
    <Example immediate />
  </>
);
`,ps={code:Ib,View:Pb};function Ab(){const e=[{name:"target",type:"Reactor<T>",defaultValue:o(yt,{children:"Required"}),desc:"An instance of Reactor Class"},{name:"callback",type:Nn.Function("(value: T) => void"),defaultValue:Nn.Undefined(),desc:"callback function"}];return s(b,{children:[o(P,{id:"hook-api",children:"Api of useReactorListener"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:e}),o(P,{low:!0,top:"20px",children:"ReturnValue (Void)"})]})}function Nb(){const e="useReactorListener",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o("p",{children:a}),o(Z,{code:ps.code,children:o(ps.View,{})})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(Ab,{})]})}const Ob=()=>{const e=Ra();return o(b,{children:s("span",{children:["x: ",e.width,", y: ",e.height]})})},Vb=`
import { useResize } from "@evanpatchouli/react-hooks-kit";

const View = () => {
  const size = useResize();
  return (
    <>
      <span>
        x: {size.width}, y: {size.height}
      </span>
    </>
  );
};
`,hs={code:Vb,View:Ob},Lb=()=>{const e=uo(),t=d.useRef(null),n=Ra({callback(u){e(`width: ${u.width}, height: ${u.height}`)},target:t}),[r,i]=d.useState(200),[a,l]=d.useState(200);return s(b,{children:[s("div",{ref:t,style:{width:r+"px",height:a+"px",backgroundColor:"lightblue"},children:["x: ",n.width,", y: ",n.height]}),o(ii,{value:r,onChange:(u,c)=>i(c),min:10,max:500,step:1,valueLabelDisplay:"auto"}),o(ii,{value:a,onChange:(u,c)=>l(c),min:10,max:500,step:1,valueLabelDisplay:"auto"})]})},Bb=`
import { useResize, useToast } from "@evanpatchouli/react-hooks-kit";
import { Slider } from "@mui/material";
import { useRef, useState } from "react";

const View = () => {
  const toast = useToast();
  const ref = useRef(null);
  const size = useResize({
    callback(size) {
      toast(\`width: \${size.width}, height: \${size.height}\`);
    },
    target: ref,
  });
  const [w, setW] = useState(200);
  const [h, setH] = useState(200);
  return (
    <>
      <div
        ref={ref}
        style={{
          width: w + "px",
          height: h + "px",
          backgroundColor: "lightblue",
        }}
      >
        x: {size.width}, y: {size.height}
      </div>
      <Slider
        value={w}
        onChange={(_, value) => setW(value as number)}
        min={10}
        max={500}
        step={1}
        valueLabelDisplay="auto"
      />
      <Slider
        value={h}
        onChange={(_, value) => setH(value as number)}
        min={10}
        max={500}
        step={1}
        valueLabelDisplay="auto"
      />
    </>
  );
};
`,ms={code:Bb,View:Lb};function jb(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useResize"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"options",type:"{ callback?; target? }",defaultValue:{},desc:"if target is undefined, it will listen to window resize. target chould be id string or ref object",properties:[{name:"callback",type:"(size) => void | undefined",defaultValue:void 0,desc:"callback function when size changed"},{name:"target",type:"string | RefObject | undefined",defaultValue:void 0,desc:"target element to listen resize"}]},{name:"deps",type:"any[]",defaultValue:[],desc:"dependencies list"}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Object)"}),o(te,{return:!0,rows:[{name:"size",type:"{ width: number, height: number }",defaultValue:null,desc:"size object"}]})]})}function Db(){const e="useResize",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$h2`),u=f(`${e}.$p2`),c=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:hs.code,children:o(hs.View,{})}),o("p",{children:a}),o(P,{children:l}),o(Z,{code:ms.code,children:o(ms.View,{})}),o("p",{children:u})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:c}),o(jb,{})]})}const zb=()=>{const[e,t]=Fm(async()=>await(await fetch("https://api.example.com/data")).json());return s(b,{children:[e.status==="idle"&&o("p",{children:"Click the button to fetch data"}),e.status==="pending"&&o("p",{children:"Loading..."}),e.status==="resolved"&&o("p",{children:"Success!"}),e.status==="rejected"&&o("p",{children:"Error!"}),o(A,{onClick:t,children:"Abort"})]})},Ub=`

`,fs={code:Ub,View:zb};function Fb(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of usePromise"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[]})]})}function _b(){const e="usePromise",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:fs.code,children:o(fs.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(Fb,{})]})}const Wb=()=>{const[e,t]=d.useState(""),n=uo(),r=xr("kid1","kid2",i=>{t(i),n(`${i}`)});return s(b,{children:[o(A,{onClick:()=>{r.emit("kid1","kid1 said Hello!")},children:"Kid1 Send"}),o(Xs,{value:e})]})},Hb=()=>{const e=xr("kid2"),t=uo(),[n,r]=d.useState("");return d.useEffect(()=>{e.subscribe("kid1",i=>{t(`${i}`),r(i)})},[]),s(b,{children:[o(A,{onClick:()=>{e.emit("kid2","kid2 said Hello!")},children:"Kid2 Send"}),o(Xs,{value:n})]})},qb=()=>{const e=d.useContext(Ys),t=()=>{const i={};e.forEach((a,l)=>{i[l]=a}),console.log(i)},[n,r]=zt();return s(b,{children:[o(A,{onClick:t,children:"Print All listners"}),o("br",{}),o(Wb,{}),o("br",{}),o(A,{onClick:r,children:"Show/Hide Kid2"}),n&&o(Hb,{})]})},Kb=`

  `,gs={code:Kb,View:qb};function Gb(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useEmitter"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function Qb(){const e="useEmitter",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:gs.code,children:o(gs.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(Gb,{})]})}const Jb=()=>{const e=xr("tester"),t=uo(),[n]=Cl("test",(...a)=>{t(JSON.stringify(a))}),r=d.useContext(Ys),i=()=>{const a={};r.forEach((l,u)=>{a[u]=l}),console.log(a)};return s(b,{children:[o(A,{onClick:()=>{e.emit("test","hello")},children:"Send"}),o("div",{children:JSON.stringify(n)}),o(A,{onClick:i,children:"Print All"})]})},Yb=`

`,vs={code:Yb,View:Jb};function Xb(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useReceiver"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function Zb(){const e="useReceiver",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:vs.code,children:o(vs.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(Xb,{})]})}const ey=()=>{const[e,t]=d.useState({name:"Evan",age:20});return Zs("someone",e),s(b,{children:[o(A,{onClick:()=>t({...e,name:e.name==="Evan"?"Nave":"Evan"}),children:e.name}),o(A,{onClick:()=>t({...e,age:e.age+1}),children:e.age})]})},ty=()=>{const[e]=Pn("someone"),[t]=Pn("someone");return s(b,{children:[s("div",{style:{display:"flex"},children:[o("span",{children:e?.name}),o("div",{style:{width:"2rem"}}),o("span",{children:e?.age})]}),s("div",{style:{display:"flex"},children:[o("span",{children:t?.name}),o("div",{style:{width:"2rem"}}),o("span",{children:t?.age})]})]})},oy=()=>s(b,{children:[o("h4",{children:"UseProvide"}),o(ey,{}),o("h4",{children:"Inject"}),o(ty,{})]}),ny=`import useInject from "@/hooks/useInject";
import useProvide from "@/hooks/useProvide";
import { Button } from "@mui/material";
import { useState } from "react";

type Person = {
  name: string;
  age: number;
};

type InjectMap = {
  "": {
    someone: Person;
  };
};

const UseProvideExample = () => {
  const [state, setState] = useState<Person>({
    name: "Evan",
    age: 20,
  });
  useProvide("someone", state);
  return (
    <>
      <Button
        onClick={() =>
          setState({ ...state, name: state.name === "Evan" ? "Nave" : "Evan" })
        }
      >
        {state.name}
      </Button>
      <Button onClick={() => setState({ ...state, age: state.age + 1 })}>
        {state.age}
      </Button>
    </>
  );
};

const UseInjectExample = () => {
  const [state] = useInject<InjectMap>("someone");
  const [state2] = useInject<InjectMap>("someone");
  return (
    <>
      <div style={{ display: "flex" }}>
        <span>{state?.name}</span>
        <div style={{ width: "2rem" }}></div>
        <span>{state?.age}</span>
      </div>
      <div style={{ display: "flex" }}>
        <span>{state2?.name}</span>
        <div style={{ width: "2rem" }}></div>
        <span>{state2?.age}</span>
      </div>
    </>
  );
};

const View = () => {
  return (
    <>
      <h4>UseProvide</h4>
      <UseProvideExample />
      <h4>Inject</h4>
      <UseInjectExample />
    </>
  );
};`,bs={code:ny,View:oy};function ry(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useProvide"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"name",type:"string",defaultValue:o(yt,{children:"Required"}),desc:"The unique name of the state to be provided globally"},{name:"state",type:"any",defaultValue:o(yt,{children:"Required"}),desc:"The state to be provided globally"}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Void)"})]})}function iy(){const e="useProvide",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:bs.code,children:o(bs.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(ry,{})]})}const sy=()=>{const[e,t]=d.useState({name:"Evan",age:20});return Zs("someone",e),s(b,{children:[o(A,{onClick:()=>t({...e,name:e.name==="Evan"?"Nave":"Evan"}),children:e.name}),o(A,{onClick:()=>t({...e,age:e.age+1}),children:e.age})]})},ay=()=>{const[e]=Pn("someone"),[t]=Pn("someone");return s(b,{children:[s("div",{style:{display:"flex"},children:[o("span",{children:e?.name}),o("div",{style:{width:"2rem"}}),o("span",{children:e?.age})]}),s("div",{style:{display:"flex"},children:[o("span",{children:t?.name}),o("div",{style:{width:"2rem"}}),o("span",{children:t?.age})]})]})},ly=()=>s(b,{children:[o("h4",{children:"UseProvide"}),o(sy,{}),o("h4",{children:"Inject"}),o(ay,{})]}),cy=`import useInject from "@/hooks/useInject";
import useProvide from "@/hooks/useProvide";
import { Button } from "@mui/material";
import { useState } from "react";

type Person = {
  name: string;
  age: number;
};

type InjectMap = {
  "": {
    someone: Person;
  };
};

const UseProvideExample = () => {
  const [state, setState] = useState<Person>({
    name: "Evan",
    age: 20,
  });
  useProvide("someone", state);
  return (
    <>
      <Button
        onClick={() =>
          setState({ ...state, name: state.name === "Evan" ? "Nave" : "Evan" })
        }
      >
        {state.name}
      </Button>
      <Button onClick={() => setState({ ...state, age: state.age + 1 })}>
        {state.age}
      </Button>
    </>
  );
};

const UseInjectExample = () => {
  const [state] = useInject<InjectMap>("someone");
  const [state2] = useInject<InjectMap>("someone");
  return (
    <>
      <div style={{ display: "flex" }}>
        <span>{state?.name}</span>
        <div style={{ width: "2rem" }}></div>
        <span>{state?.age}</span>
      </div>
      <div style={{ display: "flex" }}>
        <span>{state2?.name}</span>
        <div style={{ width: "2rem" }}></div>
        <span>{state2?.age}</span>
      </div>
    </>
  );
};

const View = () => {
  return (
    <>
      <h4>UseProvide</h4>
      <UseProvideExample />
      <h4>Inject</h4>
      <UseInjectExample />
    </>
  );
};`,ys={code:cy,View:ly};function dy(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useInject"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"name",type:"string",defaultValue:o(yt,{children:"Required"}),desc:"The unique name of the state to be provided globally"}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"[0]state",type:"T[K] | undefined",defaultValue:null,desc:"state injected from provided globally, if the state is not provided, it will be undefined, and because of the delay of event, the state will be undefined at the first render"},{name:"[1]setState",type:s(b,{children:[o(Ue,{label:"(value: T[K] | undefined) => void"})," |"," ",o(Ue,{label:"undefined"})]}),desc:"set state function, if the state is not provided, it will be undefined"}]})]})}function uy(){const e="useInject",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:ys.code,children:o(ys.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(dy,{})]})}const py=[`
const Demo1 = () => {
  const useRippleRef = useRipple<HTMLDivElement>();
  return (
    <div
      ref={useRippleRef}
    >
      Click to render ripple effect
    </div>
  );
}
`];function hy(){d.useEffect(()=>{document.title=`useRipple - ${pe.homepage}`},[]);const e=br();return s(de,{title:"UseRipple",desc:"useRipple is a hook for using houdini particle effect.",children:[o(re,{children:"A hook to render ripple effect by using houdini paintWorklet."}),o(P,{children:"Usage"}),o(Z,{code:py[0],children:o("div",{css:my.demo1,ref:e,children:"Click to render ripple effect"})}),o(P,{children:"Considerations"}),o(re,{children:s("ol",{children:[s("li",{children:[o("strong",{children:"useRipple"})," is a hook to render ripple effect by using ",o("strong",{children:"houdini"})," paintWorklet."]}),s("li",{children:[o("strong",{children:"mousedown"})," is the default trigger to render ripple effect. You should avoid using the same trigger on you component other click-like handler to avoid conflict."]}),s("li",{children:["Different triggers will make the effect a little ",o("strong",{children:"different"}),"."]})]})})]})}const my={demo1:$css`
  &:hover {
    cursor: pointer;
    background-color: azure;
  }
  &::selection {
    background-color: transparent;
  }
`};function fy(){d.useEffect(()=>{document.title=`useParticle - ${pe.homepage}`},[]);const e=Ir({color:"blue"});return s(de,{title:"UseParticle",desc:"useParticle is a hook for using houdini particle effect.",children:[o(re,{children:"A hook to render particle effect by using houdini paintWorklet."}),o(Mr,{children:o("div",{css:$css`
          &::selection {
            background-color: transparent;
          }
          &:hover {
            cursor: pointer;
            background-color: gainsboro;
          }
        `,ref:e,children:"Particle"})})]})}const gy=()=>{const[e,t]=Hn(Array.from({length:9},(n,r)=>r+1).map(n=>({ids:[`s${n}`],name:`Step ${n}`,data:{},renders:[{id:`s${n}`,render(r,i,a,l){console.log(r,i,a,l);const u=n===9?t.stop:t.next;return s("div",{css:$css`
              display: flex;
              align-items: center;
              width: fit-content; 
              position: absolute;
              background: #fff;
              padding: 4px 20px;
              border-radius: 6px;
              transform: translate(-50%, 50%);
              `,children:[o("div",{css:$css`width: 60px;`,children:i}),o("div",{css:$css`padding: 4px 12px; &:hover { cursor: pointer; background: #eee;  border-radius: 4px;}`,onClick:u,children:n===9?"End":"Next"})]})}}]})));return s("div",{css:Ct.containerCss,children:[o("div",{id:"s1",css:Ct.boxCss("red"),onClick:t.start,children:"Start"}),o("div",{id:"s2",css:Ct.boxCss("green"),children:"2"}),o("div",{id:"s3",css:Ct.boxCss("blue"),children:"3"}),o("div",{id:"s4",css:Ct.boxCss("black"),children:"4"}),o("div",{id:"s5",css:Ct.boxCss("purple"),children:"5"}),o("div",{id:"s6",css:Ct.boxCss("pink"),children:"6"}),o("div",{id:"s7",css:Ct.boxCss("cyan"),children:"7"}),o("div",{id:"s8",css:Ct.boxCss("magenta"),children:"8"}),o("div",{id:"s9",css:Ct.boxCss("orange"),children:"9"})]})};var Ct;(e=>{e.containerCss=$css`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
gap: 10px;
width: 300px;
height: 300px;
`,e.boxCss=t=>$css`
color: ${t};
display: flex;
justify-content: center;
align-items: center;
border-radius: 6px;
cursor: pointer;
`})(Ct||(Ct={}));const vy=`import useGuide from "@hooks/useGuide";

const View = () => {
  const [currentStep, guider] = useGuide(
    Array.from({ length: 9 }, (_, i) => i + 1).map((i) => ({
      ids: [\`s\${i}\`],
      name: \`Step \${i}\`,
      data: {},
      renders: [
        {
          id: \`s\${i}\`,
          render(id, name, data, ids) {
            console.log(id, name, data, ids);
            const onClick = i === 9 ? guider.stop : guider.next;
            return (
              <div
                css={$css\`
              display: flex;
              align-items: center;
              width: fit-content; 
              position: absolute;
              background: #fff;
              padding: 4px 20px;
              border-radius: 6px;
              transform: translate(-50%, 50%);
              \`}
              >
                <div css={$css\`width: 60px;\`}>{name}</div>
                <div
                  css={$css\`padding: 4px 12px; &:hover { cursor: pointer; background: #eee;  border-radius: 4px;}\`}
                  onClick={onClick}
                >
                  {i === 9 ? "End" : "Next"}
                </div>
              </div>
            );
          },
        },
      ],
    }))
  );
  return (
    <div css={style.containerCss}>
      <div id="s1" css={style.boxCss("red")} onClick={guider.start}>
        Start
      </div>
      <div id="s2" css={style.boxCss("green")}>
        2
      </div>
      <div id="s3" css={style.boxCss("blue")}>
        3
      </div>
      <div id="s4" css={style.boxCss("black")}>
        4
      </div>
      <div id="s5" css={style.boxCss("purple")}>
        5
      </div>
      <div id="s6" css={style.boxCss("pink")}>
        6
      </div>
      <div id="s7" css={style.boxCss("cyan")}>
        7
      </div>
      <div id="s8" css={style.boxCss("magenta")}>
        8
      </div>
      <div id="s9" css={style.boxCss("orange")}>
        9
      </div>
    </div>
  );
};

module style {
  export const containerCss = $css\`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
gap: 10px;
width: 300px;
height: 300px;
\`;

  export const boxCss = (color: string) => $css\`
color: \${color};
display: flex;
justify-content: center;
align-items: center;
border-radius: 6px;
cursor: pointer;
\`;
}
`,ws={code:vy,View:gy};function by(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useGuide"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[]})]})}const Fa=e=>{const{id:t,name:n,data:r,ids:i,guider:a}=e;return o("div",{onClick:a.stop,css:Yo.guide,children:"Stop"})},yy=()=>{const[,e]=Hn([{ids:["example2-s1"],name:"Step1",renders:[{id:"example2-s1",render(t,n,r,i){return o(Fa,{...{id:t,name:n,data:r,ids:i,guider:e}})}}]}]);return o("div",{children:o("div",{id:"example2-s1",onClick:e.start,style:Yo.btn,children:"Start"})})},wy=()=>{const[,e]=Hn([{ids:["example2-s2"],name:"Step1",renders:[{id:"example2-s2",render(t,n,r,i){return o(Fa,{...{id:t,name:n,data:r,ids:i,guider:e}})}}]}]);return o(qm,{id:"example2-s2",guider:e,children:o("div",{id:"example2-s2",onClick:e.start,style:Yo.btn,children:"Start"})})};var Yo;(e=>{e.btn={cursor:"pointer",background:"#fff",padding:"4px 20px",borderRadius:"6px",border:"1px solid #333",boxSizing:"content-box"},e.guide=$css({display:"flex",alignItems:"center",width:"fit-content",position:"absolute",background:"#fff",padding:"4px 20px",borderRadius:"6px"})})(Yo||(Yo={}));const xy=()=>s("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-around"},children:[o(yy,{}),o(wy,{})]}),$y=`import useGuide, { Guider, Target } from "@hooks/useGuide";

const Guide = (props: {
  id: string;
  name: string;
  data: any;
  ids: string[];
  guider: Guider;
}) => {
  const { id, name, data, ids, guider } = props;
  return (
    <div onClick={guider.stop} css={style.guide}>
      Stop
    </div>
  );
};

const DefaultRender = () => {
  const [, guider] = useGuide([
    {
      ids: ["example2-s1"],
      name: "Step1",
      renders: [
        {
          id: "example2-s1",
          render(id, name, data, ids) {
            const props = { id, name, data, ids, guider };
            return <Guide {...props} />;
          },
        },
      ],
    },
  ]);

  return (
    <div>
      <div id="example2-s1" onClick={guider.start} style={style.btn}>
        Start
      </div>
    </div>
  );
};

const TargetWrapped = () => {
  const [, guider] = useGuide([
    {
      ids: ["example2-s2"],
      name: "Step1",
      renders: [
        {
          id: "example2-s2",
          render(id, name, data, ids) {
            const props = { id, name, data, ids, guider };
            return <Guide {...props} />;
          },
        },
      ],
    },
  ]);

  return (
    <Target id="example2-s2" guider={guider}>
      <div id="example2-s2" onClick={guider.start} style={style.btn}>
        Start
      </div>
    </Target>
  );
};

module style {
  export const btn = {
    cursor: "pointer",
    background: "#fff",
    padding: "4px 20px",
    borderRadius: "6px",
    border: "1px solid #333",
    boxSizing: "content-box",
  } as React.CSSProperties;

  export const guide = $css({
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    position: "absolute",
    background: "#fff",
    padding: "4px 20px",
    borderRadius: "6px",
  });
}

const View = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-around",
    }}
  >
    <DefaultRender />
    <TargetWrapped />
  </div>
);
`,xs={code:$y,View:xy};function Cy(){const e="useGuide",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$p2`),u=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o("p",{children:a}),o(Z,{code:ws.code,children:o(ws.View,{})}),o("p",{children:l}),o(Z,{code:xs.code,children:o(xs.View,{})})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:u}),o(by,{})]})}function ky({loadMore:e,hasMore:t,loader:n,component:r,props:i,preloadDistance:a=200,observerOptions:l,disabled:u,containerId:c,containerRef:p,mode:h="auto"}){const[g,v]=d.useState([]),[k,x]=d.useState(!1),y=d.useRef(null),w=d.useRef(null),T=d.useRef(null),E=d.useRef(!1),S=d.useRef(null),$=d.useRef(!0),M=d.useRef(e),C=d.useRef(t);M.current=e,C.current=t;const I=d.useCallback(()=>{const U=document.getElementById(c);return y.current=U,U},[c,p]),j=d.useCallback(()=>{const U=I();return h==="auto"?U?"container":"viewport":h},[h,I]);d.useEffect(()=>{I()},[I]),d.useEffect(()=>()=>{$.current=!1,w.current?.disconnect()},[]);const O=d.useCallback(()=>{const U=T.current;if(!U)return!1;const ee=U.getBoundingClientRect();if(j()==="viewport")return ee.top<=window.innerHeight+a;const Q=y.current;if(!Q)return console.error("[react-hooks-kit][useInfiniteScroll] Container element not found for infinite scroll."),!1;const Ee=Q.getBoundingClientRect();return ee.top<=Ee.bottom+a},[a,j]),L=d.useCallback(async()=>{if(E.current||S.current||!C.current||u)return;E.current=!0,$.current&&x(!0);const U=M.current();S.current=U;try{const ee=await U;Array.isArray(ee)&&$.current&&v(le=>[...le,...ee])}finally{S.current=null,E.current=!1,$.current&&(x(!1),requestAnimationFrame(()=>{!E.current&&C.current&&!u&&O()&&L()}))}},[u,O]),z=d.useCallback(U=>{if(T.current=U,w.current&&w.current.disconnect(),!U){w.current=null;return}const ee=j(),le=y.current;if(!le&&(ee==="container"||h==="auto"&&!!c)){w.current=null;return}w.current=new IntersectionObserver(Ee=>{Ee[0]?.isIntersecting&&L()},{root:ee==="container"?le:null,rootMargin:`0px 0px ${a}px 0px`,threshold:0,...l}),w.current.observe(U),requestAnimationFrame(()=>{!E.current&&C.current&&!u&&O()&&L()})},[L,a,l,u,O,j,c,p,h]);d.useEffect(()=>{I(),T.current&&!w.current&&z(T.current)},[I,z]);const ne=d.useCallback(()=>{v([]),E.current=!1,x(!1)},[]),W=d.useCallback(async()=>{ne(),await new Promise(U=>requestAnimationFrame(()=>U(void 0))),await L()},[ne,L]),B=r||"div",X=k?typeof n=="function"?n():n??"Loading...":null;return{loader:o(B,{ref:z,...i,children:X}),loading:k,items:g,setItems:v,reset:ne,reload:W,triggerLoadMore:L}}const Sy=e=>new Promise(t=>{setTimeout(()=>{const i=Array.from({length:10}).map((a,l)=>({id:(e-1)*10+l+1,title:`Item ${(e-1)*10+l+1}`}));t({items:i,hasMore:e<5})},1e3)}),Ty=()=>{const[e,t]=d.useState(1),[n,r]=d.useState(!0),{loader:i,items:a,reset:l}=ky({loadMore:async()=>{const u=await Sy(e);return t(c=>c+1),r(u.hasMore),u.items},hasMore:n,loader:o("div",{style:{textAlign:"center"},children:"Loading more..."}),preloadDistance:200,mode:"container",containerId:"infinite-scroll-container"});return s(Mr,{id:"infinite-scroll-container",style:{maxWidth:400,height:220,margin:"20px auto",padding:20,overflow:"auto"},children:[o(A,{onClick:l,children:"Reset"}),a.map((u,c)=>o("div",{style:{height:20},children:u.title},c)),i]})},Ry=`
import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { Button } from "@mui/material";
import { useState } from "react";

const mockFetch = (page: number) =>
  new Promise<{ items: any[]; hasMore: boolean }>((resolve) => {
    setTimeout(() => {
      const pageSize = 10;
      const maxPage = 5;

      const items = Array.from({ length: pageSize }).map((_, i) => ({
        id: (page - 1) * pageSize + i + 1,
        title: \`Item \${(page - 1) * pageSize + i + 1}\`,
      }));

      resolve({
        items,
        hasMore: page < maxPage,
      });
    }, 800);
  });

const View = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { loader, loading, items, reset } = useInfiniteScroll({
    loadMore: async () => {
      const data = await mockFetch(page);
      setPage(p => p + 1);
      setHasMore(data.hasMore);
      return data.items;
    },
    hasMore,
    loader: <div style={{ textAlign: "center" }}>Loading more...</div>,
    preloadDistance: 200
  });

  return (
    <div>
      <Button onClick={reset}>Reset</Button>
      {items.map((item, idx) => (
        <div key={idx}>{item.title}</div>
      ))}
      {loader}
    </div>
  );
};
`,$s={code:Ry,View:Ty};function Ey(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useInfiniteScroll"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[]})]})}function My(){const e="useInfiniteScroll",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:$s.code,children:o($s.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(Ey,{})]})}const Py=()=>o(b,{children:o("h3",{children:"useAutoPageSize"})}),Iy=`

`,Cs={code:Iy,View:Py};function Ay(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useAutoPageSize"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[]})]})}function Ny(){const e="useAutoPageSize",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:Cs.code,children:o(Cs.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(Ay,{})]})}const Oy=()=>{const[e,t]=Gm(0,(c,p)=>5<(p??0)?"Num cannot be greater than 5":null,(c,p)=>0>(p??0)?"Num cannot be less than 0":null),[n,r]=d.useState(null),[i,a]=d.useState(!1),l=()=>{a(!1)},u=s(d.Fragment,{children:[o(A,{color:"secondary",size:"small",onClick:l,children:"UNDO"}),o(Ln,{size:"small","aria-label":"close",color:"inherit",onClick:l,children:o(ym,{fontSize:"small"})})]});return s(b,{children:[o(A,{onClick:()=>{try{t(c=>c-1)}catch(c){r(c.message),a(!0)}},children:"-"}),o("span",{children:"num: "}),o("code",{children:e}),o(A,{onClick:()=>{try{t(c=>c+1)}catch(c){r(c.message),a(!0)}},children:"+"}),o(Sp,{open:i,autoHideDuration:6e3,onClose:l,message:n,action:u})]})},Vy=`
import useProtect from "@/hooks/useProtect";
import { Close } from "@mui/icons-material";
import { Button, IconButton, Snackbar } from "@mui/material";
import { Fragment, useState } from "react";

const View = () => {
  const [num, setNum] = useProtect(
    0,
    (a, b) => (5 < (b ?? 0) ? "Num cannot be greater than 5" : null),
    (a, b) => (0 > (b ?? 0) ? "Num cannot be less than 0" : null)
  );
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const action = (
    <Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <Close fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <>
      <Button
        onClick={() => {
          try {
            setNum((p) => p - 1);
          } catch (error: any) {
            setErrMsg(error.message);
            setOpen(true);
          }
        }}
      >
        -
      </Button>
      <span>num: </span>
      <code>{num}</code>
      <Button
        onClick={() => {
          try {
            setNum((p) => p + 1);
          } catch (error: any) {
            setErrMsg(error.message);
            setOpen(true);
          }
        }}
      >
        +
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message={errMsg} action={action} />
    </>
  );
};
`,ks={code:Vy,View:Oy};function Ly(){const e=f("useProtect.desc"),t=f("useProtect.detail"),n=f("useProtect.consideration");return d.useEffect(()=>{document.title=`useProtect - ${pe.homepage}`},[]),s(de,{title:"UseProtect",desc:e,children:[o(re,{children:t}),o(Z,{code:ks.code,children:o(ks.View,{})}),o(Te,{children:n})]})}const By={border:"none",background:"none",padding:"0.5rem 1.5rem",borderRadius:"3px",cursor:"pointer",boxShadow:"0 0 0 1px #ccc",margin:"1rem",position:"relative"},jy=()=>{const e=kl(br,3,{duration:300});return o(b,{children:e.map((t,n)=>o("button",{type:"button",ref:t,style:By,children:++n},n))})},Dy=`import useRipple from "@/hooks/houdini/hooks/useRipple";
import useBatchHooks from "@/hooks/useBatchHooks";
import React from "react";

const styles = {
  border: "none",
  background: "none",
  padding: "0.5rem 1.5rem",
  borderRadius: "3px",
  cursor: "pointer",
  boxShadow: "0 0 0 1px #ccc",
  margin: "1rem",
  position: "relative",
} as React.CSSProperties;

const View = () => {
  const ripples = useBatchHooks<typeof useRipple<HTMLButtonElement>>(useRipple, 3, {
    duration: 300,
  });
  return (
    <>
      {ripples.map((ref, i) => (
        <button type="button" key={i} ref={ref} style={styles}>
          {++i}
        </button>
      ))}
    </>
  );
};
`,Ss={code:Dy,View:jy};function zy(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useBatchHooks"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function Uy(){const e="useBatchHooks",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o("p",{children:a}),o(Z,{code:Ss.code,children:o(Ss.View,{})})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(zy,{})]})}const Fy=()=>{const e=Om({x:0});return o(b,{children:s(A,{onClick:()=>{e.set("x",Math.random())},children:["$x: ",e.get("x")]})})},_y=`

`,Ts={code:_y,View:Fy};function Wy(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useReflect"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function Hy(){const e="useReflect",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:Ts.code,children:o(Ts.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(Wy,{})]})}const qy=()=>{const[e,t]=rn();return s(b,{children:[s("div",{style:{marginBottom:"16px"},children:[o("strong",{children:"Current Title: "}),o("span",{children:e})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[o(A,{variant:"contained",onClick:()=>t("New Title"),children:'Set to "New Title"'}),o(A,{variant:"contained",onClick:()=>t("Another Title"),children:'Set to "Another Title"'}),o(A,{variant:"outlined",onClick:()=>{document.title="External Change"},children:"External Change (via document.title)"})]})]})},Ky=`import useTitle from "@hooks/useTitle";
import { Button } from "@mui/material";

const View = () => {
  const [title, setTitle] = useTitle("useTitle Demo");

  return (
    <>
      <div>
        <strong>Current Title: </strong>
        <span>{title}</span>
      </div>
      <div>
        <Button onClick={() => setTitle("New Title")}>
          Set to "New Title"
        </Button>
        <Button onClick={() => setTitle("Another Title")}>
          Set to "Another Title"
        </Button>
        <Button onClick={() => {
          document.title = "External Change";
        }}>
          External Change (via document.title)
        </Button>
      </div>
    </>
  );
};`,Rs={code:Ky,View:qy},Gy=()=>{const[e,t]=d.useState(0),[n,r]=rn("Counter: 0");return d.useEffect(()=>{r(`Counter: ${e}`)},[e]),s(b,{children:[o("h3",{children:"Example 2: Dynamic Counter Title"}),o("p",{children:"The page title updates automatically with the counter value."}),s("div",{style:{marginBottom:"16px"},children:[o("strong",{children:"Current Count: "}),o("span",{style:{fontSize:"24px",fontWeight:"bold"},children:e})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[o(A,{variant:"contained",onClick:()=>t(e+1),children:"Increment"}),o(A,{variant:"outlined",onClick:()=>t(e-1),children:"Decrement"}),o(A,{variant:"outlined",onClick:()=>t(0),children:"Reset"})]})]})},Qy=`import useTitle from "@evanpatchouli/react-hooks-kit";
import { useState, useEffect } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useTitle("Counter: 0");

  useEffect(() => {
    setTitle(\`Counter: \${count}\`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`,Es={code:Qy,View:Gy},Jy=()=>{const[e,t]=d.useState(0),[n,r]=rn("Messages");return d.useEffect(()=>{e>0?r(`(${e}) New Messages`):r("Messages")},[e]),s(b,{children:[o("h3",{children:"Example 3: Notification Title"}),o("p",{children:"The page title shows unread message count, similar to email clients."}),s("div",{style:{marginBottom:"16px"},children:[o("strong",{children:"Unread Messages: "}),o("span",{style:{fontSize:"24px",fontWeight:"bold",color:e>0?"#ff3b30":"#666"},children:e})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[o(A,{variant:"contained",onClick:()=>t(e+1),children:"New Message"}),o(A,{variant:"outlined",onClick:()=>t(Math.max(0,e-1)),children:"Mark as Read"}),o(A,{variant:"outlined",onClick:()=>t(0),children:"Clear All"})]})]})},Yy=`import useTitle from "@evanpatchouli/react-hooks-kit";
import { useState, useEffect } from "react";

const View = () => {
  const [unread, setUnread] = useState(0);
  const [title, setTitle] = useTitle("Messages");

  useEffect(() => {
    if (unread > 0) {
      setTitle(\`(\${unread}) New Messages\`);
    } else {
      setTitle("Messages");
    }
  }, [unread]);

  return (
    <div>
      <p>Unread: {unread}</p>
      <button onClick={() => setUnread(unread + 1)}>
        New Message
      </button>
    </div>
  );
};`,Ms={code:Yy,View:Jy},Xy=()=>{const[e,t]=d.useState(0),[n,r]=d.useState(!1),[i,a]=rn("Timer: 00:00");return d.useEffect(()=>{let l=null;return n&&(l=setInterval(()=>{t(u=>u+1)},1e3)),()=>{l&&clearInterval(l)}},[n]),d.useEffect(()=>{const l=Math.floor(e/60),u=e%60,c=`${String(l).padStart(2,"0")}:${String(u).padStart(2,"0")}`;a(`Timer: ${c}`)},[e]),s(b,{children:[o("h3",{children:"Example 4: Timer Title"}),o("p",{children:"The page title updates every second to show elapsed time."}),s("div",{style:{marginBottom:"16px"},children:[o("strong",{children:"Elapsed Time: "}),s("span",{style:{fontSize:"32px",fontWeight:"bold",fontFamily:"monospace"},children:[String(Math.floor(e/60)).padStart(2,"0"),":",String(e%60).padStart(2,"0")]})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[o(A,{variant:"contained",color:n?"error":"primary",onClick:()=>r(!n),children:n?"Pause":"Start"}),o(A,{variant:"outlined",onClick:()=>{t(0),r(!1)},children:"Reset"})]})]})},Zy=`import useTitle from "@evanpatchouli/react-hooks-kit";
import { useState, useEffect } from "react";

const View = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [title, setTitle] = useTitle("Timer: 00:00");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  useEffect(() => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const timeStr = \`\${String(mins).padStart(2, '0')}:\${String(secs).padStart(2, '0')}\`;
    setTitle(\`Timer: \${timeStr}\`);
  }, [seconds]);

  return (
    <button onClick={() => setIsRunning(!isRunning)}>
      {isRunning ? "Pause" : "Start"}
    </button>
  );
};`,Ps={code:Zy,View:Xy};function ew(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useTitle"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"initialTitle",type:"string",defaultValue:"document.title",desc:"The initial title to set when the component mounts. If not provided, uses the current document title."}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"[0] title",type:"string",defaultValue:null,desc:"The current document title (reactive to external changes)"},{name:"[1] setTitle",type:"(title: string) => void",defaultValue:null,desc:"Function to update the document title"}]})]})}function Sn(e){const{children:t,value:n,index:r,...i}=e;return o("div",{role:"tabpanel",hidden:n!==r,id:`example-tabpanel-${r}`,"aria-labelledby":`example-tab-${r}`,...i,children:n===r&&o(Xt,{sx:{p:3},children:t})})}function tw(){const[e,t]=d.useState(0),n="useTitle",r=f(`${n}.desc`),i=f(`${n}.detail`),a=f(`${n}.$best`),l=f(`${n}.consideration`),u=f(`${n}.$p1`),c=f(`${n}.$faqs`);return rn(`✨${n}✨ - ${pe.homepage}`),s(de,{title:n,desc:r,children:[o(re,{children:i}),s(Oe,{children:[o(Xt,{sx:{borderBottom:1,borderColor:"divider"},children:s(xa,{value:e,onChange:(p,h)=>t(h),children:[o(Bt,{label:"Basic"}),o(Bt,{label:"Counter"}),o(Bt,{label:"Notification"}),o(Bt,{label:"Timer"})]})}),o(Sn,{value:e,index:0,children:o(Z,{code:Rs.code,children:o(Rs.View,{})})}),o(Sn,{value:e,index:1,children:o(Z,{code:Es.code,children:o(Es.View,{})})}),o(Sn,{value:e,index:2,children:o(Z,{code:Ms.code,children:o(Ms.View,{})})}),o(Sn,{value:e,index:3,children:o(Z,{code:Ps.code,children:o(Ps.View,{})})}),o("p",{children:u})]}),o(Te,{children:l}),o(Le,{children:a}),o(Ne,{children:c}),o(ew,{})]})}const ow=()=>{const[e,t]=d.useState(0);return So("/react-hooks-kit/favicon.ico",e>0?e:void 0),s(b,{children:[o("h3",{children:"Example 1: Dynamic Counter Badge"}),o("p",{children:"Click the button to increment the badge counter on the favicon."}),s(A,{variant:"contained",onClick:()=>t(e+1),children:["Count: ",e]}),o(A,{variant:"outlined",onClick:()=>t(0),style:{marginLeft:"10px"},children:"Reset"})]})},nw=`import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  useFavicon("/favicon.ico", count);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};`,Is={code:nw,View:ow},rw=()=>{const[e,t]=d.useState(3);return So("/react-hooks-kit/favicon.ico",{badge:{content:e,position:"top-right",bgColor:"#ff3b30",textColor:"#fff"}}),s(b,{children:[o("h3",{children:"Example 2: Notification Badge"}),s("p",{children:["Unread messages: ",e]}),o(A,{variant:"contained",onClick:()=>t(e+1),children:"Add Message"}),o(A,{variant:"outlined",onClick:()=>t(Math.max(0,e-1)),style:{marginLeft:"10px"},children:"Mark as Read"}),o(A,{variant:"outlined",onClick:()=>t(0),style:{marginLeft:"10px"},children:"Clear All"})]})},iw=`import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [unread, setUnread] = useState(3);

  useFavicon("/favicon.ico", {
    badge: {
      content: unread,
      position: "top-right",
      bgColor: "#ff3b30",
      textColor: "#fff"
    }
  });

  return <div>Unread messages: {unread}</div>;
};`,As={code:iw,View:rw},sw=()=>{const[e,t]=d.useState("online");return So("/react-hooks-kit/favicon.ico",{badge:{content:"●",position:"bottom-right",bgColor:e==="online"?"#00ff00":"#ff0000",textColor:"#fff",size:.3}}),s(b,{children:[o("h3",{children:"Example 3: Status Indicator"}),s("p",{children:["Current status: ",o("strong",{children:e})]}),o(A,{variant:"contained",onClick:()=>t(e==="online"?"offline":"online"),children:"Toggle Status"})]})},aw=`import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [status, setStatus] = useState<"online" | "offline">("online");

  useFavicon("/favicon.ico", {
    badge: {
      content: "●",
      position: "bottom-right",
      bgColor: status === "online" ? "#00ff00" : "#ff0000",
      textColor: "#fff",
      size: 0.3
    }
  });

  return <div>Status: {status}</div>;
};`,Ns={code:aw,View:sw},lw=()=>{const[e,t]=d.useState("top-right");return So("/react-hooks-kit/favicon.ico",{badge:{content:"5",position:e}}),s(b,{children:[o("h3",{children:"Example 4: Different Positions"}),o("p",{children:"Select badge position:"}),s(ma,{style:{minWidth:200},children:[o(fa,{children:"Position"}),s(Ks,{value:e,label:"Position",onChange:n=>t(n.target.value),children:[o(pn,{value:"top-right",children:"Top Right"}),o(pn,{value:"top-left",children:"Top Left"}),o(pn,{value:"bottom-right",children:"Bottom Right"}),o(pn,{value:"bottom-left",children:"Bottom Left"})]})]})]})},cw=`import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [position, setPosition] = useState<"top-right" | "top-left" | "bottom-right" | "bottom-left">("top-right");

  useFavicon("/favicon.ico", {
    badge: {
      content: "5",
      position: position
    }
  });

  return (
    <select onChange={(e) => setPosition(e.target.value as any)}>
      <option value="top-right">Top Right</option>
      <option value="top-left">Top Left</option>
      <option value="bottom-right">Bottom Right</option>
      <option value="bottom-left">Bottom Left</option>
    </select>
  );
};`,Os={code:cw,View:lw},dw=()=>{const[e,t]=d.useState(150);return So("/react-hooks-kit/favicon.ico",e),s(b,{children:[o("h3",{children:"Example 5: 99+ Display"}),s("p",{children:["Count: ",e,' (displays as "99+" when over 99)']}),o(A,{variant:"contained",onClick:()=>t(e+10),children:"+10"}),o(A,{variant:"outlined",onClick:()=>t(Math.max(0,e-10)),style:{marginLeft:"10px"},children:"-10"}),o(A,{variant:"outlined",onClick:()=>t(50),style:{marginLeft:"10px"},children:"Set to 50"}),o(A,{variant:"outlined",onClick:()=>t(150),style:{marginLeft:"10px"},children:"Set to 150"})]})},uw=`import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(150);
  useFavicon("/favicon.ico", count); // Will display as "99+"

  return <div>Count: {count}</div>;
};`,Vs={code:uw,View:dw},pw=()=>(So(Jm("🍎")),s(b,{children:[o("h3",{children:"Example 6: Use a text favicon"}),s("p",{children:["You can also use a text favicon by ",o("code",{children:"createTextFavicon"}),"."]})]})),hw=`import useFavicon, { createTextFavicon } from "@evanpatchouli/react-hooks-kit";

const View = () => {
  const [count, setCount] = useState(0);
  useFavicon(createTextFavicon("🍎"));

  return (
    <>
      <h3>Example 6: Use a text favicon</h3>
      <p>You can also use a text favicon by <code>createTextFavicon</code>.</p>
    </>
  );
};`,Ls={code:hw,View:pw};function mw(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useFavicon"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"iconUrl",type:"string",defaultValue:o(yt,{}),desc:"The URL of the favicon image."},{name:"badge",type:"string | number",defaultValue:"undefined",desc:"Shorthand for badge content. When provided, creates a badge with default settings."},{name:"options",type:"UseFaviconOptions",defaultValue:"undefined",desc:"Full configuration object for the favicon.",properties:[{name:"badge",type:"BadgeOptions",defaultValue:"undefined",desc:"Badge configuration to overlay on the favicon.",properties:[{name:"content",type:"string | number",defaultValue:o(yt,{}),desc:"The content to display in the badge. Numbers over 99 will display as '99+'."},{name:"position",type:"'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",defaultValue:"'top-right'",desc:"Badge position."},{name:"bgColor",type:"string",defaultValue:"'#ff3b30'",desc:"Badge background color."},{name:"textColor",type:"string",defaultValue:"'#fff'",desc:"Badge text color."},{name:"size",type:"number",defaultValue:"0.5",desc:"Badge size as a ratio of icon size (0-1)."}]}]}]}),o(P,{low:!0,top:"20px",children:"Return Value"}),o(te,{return:!0,rows:[{name:"void",type:"void",defaultValue:null,desc:"This hook does not return any value."}]})]})}function bo(e){const{children:t,value:n,index:r,...i}=e;return o("div",{role:"tabpanel",hidden:n!==r,id:`example-tabpanel-${r}`,"aria-labelledby":`example-tab-${r}`,...i,children:n===r&&o(Xt,{sx:{p:3},children:t})})}function fw(){const[e,t]=d.useState(0),n="useFavicon",r=f(`${n}.desc`),i=f(`${n}.detail`),a=f(`${n}.$best`),l=f(`${n}.consideration`),u=f(`${n}.$p1`),c=f(`${n}.$faqs`);return d.useEffect(()=>{document.title=`${n} - ${pe.homepage}`},[]),s(de,{title:n,desc:r,children:[o(re,{children:i}),s(Oe,{children:[o(Xt,{sx:{borderBottom:1,borderColor:"divider"},children:s(xa,{value:e,onChange:(p,h)=>t(h),children:[o(Bt,{label:"Counter"}),o(Bt,{label:"Notification"}),o(Bt,{label:"Status"}),o(Bt,{label:"Position"}),o(Bt,{label:"99+"}),o(Bt,{label:"Text Favicon"})]})}),o(bo,{value:e,index:0,children:o(Z,{code:Is.code,children:o(Is.View,{})})}),o(bo,{value:e,index:1,children:o(Z,{code:As.code,children:o(As.View,{})})}),o(bo,{value:e,index:2,children:o(Z,{code:Ns.code,children:o(Ns.View,{})})}),o(bo,{value:e,index:3,children:o(Z,{code:Os.code,children:o(Os.View,{})})}),o(bo,{value:e,index:4,children:o(Z,{code:Vs.code,children:o(Vs.View,{})})}),o(bo,{value:e,index:5,children:o(Z,{code:Ls.code,children:o(Ls.View,{})})}),o("p",{children:u})]}),o(Te,{children:l}),o(Le,{children:a}),o(Ne,{children:c}),o(mw,{})]})}const gw=()=>{const e=Km("dimensions-by-id-demo");return s("div",{children:[o("div",{id:"dimensions-by-id-demo",style:{width:240,padding:16,border:"1px solid currentColor",resize:"both",overflow:"auto"},children:"Resize this box"}),o("pre",{children:JSON.stringify(e,null,2)})]})},vw=`import useDimensionsById from "@hooks/useDimensionsById";

const dimensions = useDimensionsById("target-id");`,Bs={code:vw,View:gw};function bw(){return s(b,{children:[o(P,{id:"hook-api",children:"Api of useDimensionsById"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"id",type:"string",desc:"The id of the element to observe."}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Array)"}),o(te,{return:!0,rows:[{name:"width",type:"number",desc:"Observed content width."},{name:"height",type:"number",desc:"Observed content height."},{name:"top",type:"number",desc:"Observed content top offset."},{name:"left",type:"number",desc:"Observed content left offset."}]})]})}function yw(){const e="useDimensionsById",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),s(Oe,{children:[o(Z,{code:Bs.code,children:o(Bs.View,{})}),o("p",{children:a})]}),o(Te,{children:i}),o(Le,{children:r}),o(Ne,{children:l}),o(bw,{})]})}const ww=()=>{const e=lf();return s("div",{children:[o("div",{id:"qr-reader-docs",style:{minHeight:80}}),o("button",{onClick:()=>{e.start({containerId:"qr-reader-docs"})},children:"Start camera"})," ",o("button",{onClick:()=>{e.stop()},children:"Stop"}),s("p",{children:["Status: ",e.status]}),s("p",{children:["Permission: ",e.cameraPermission]}),e.scanResult?s("p",{children:["Result: ",e.scanResult.text]}):null]})},xw=`const scanner = useQrcodeScan();
await scanner.start({ containerId: "qr-reader" });
await scanner.stop();`,js={code:xw,View:ww};function $w(){return s(b,{children:[o(P,{id:"hook-api",children:"API of useQrcodeScan"}),o(P,{low:!0,top:"20px",children:"Parameters"}),o(te,{param:!0,rows:[{name:"options",type:"UseQrcodeScanOptions | QrcodeScanMode",defaultValue:"{}",desc:"Scanner mode, callbacks, and optional service adapter."}]}),o(P,{low:!0,top:"20px",children:"ReturnValue (Object)"}),o(te,{return:!0,rows:[{name:"status",type:"QrcodeScanStatus",desc:"Current scanner lifecycle state."},{name:"scanResult",type:"QrcodeScanResult | null",desc:"Latest normalized scan result."},{name:"start",type:"(options?) => Promise<void>",desc:"Start a live camera scan."},{name:"stop",type:"() => Promise<void>",desc:"Stop scanning and release resources."},{name:"scanImage",type:"(file, options?) => Promise<QrcodeScanResult>",desc:"Decode a QR code or barcode from an image."}]})]})}function Cw(){const e="useQrcodeScan",t=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$best`),a=f(`${e}.$faqs`);return d.useEffect(()=>{document.title=`${e} - ${pe.homepage}`},[]),s(de,{title:e,desc:t,children:[o(re,{children:n}),o(Oe,{children:o(Z,{code:js.code,children:o(js.View,{})})}),o(Te,{children:r}),o(Le,{children:i}),o(Ne,{children:a}),o($w,{})]})}const Ds=Object.freeze(Object.defineProperty({__proto__:null,Overview:Ea,SentMail:Cg,UseAutoPageSize:Ny,UseBatchHooks:Uy,UseDebounce:mb,UseDimensionsById:yw,UseEmitter:Qb,UseFavicon:fw,UseGuide:Cy,UseInfiniteScroll:My,UseInject:uy,UseList:gv,UseLoading:Fg,UseMap:ov,UseMemento:sb,UseMeta:dv,UseParticle:fy,UsePrevious:Mg,UsePromise:_b,UseProtect:Ly,UseProvide:iy,UseQrcodeScan:Cw,UseReactive:Ov,UseReactor:Jv,UseReactorListener:Nb,UseReceiver:Zb,UseRecord:qg,UseReflect:Hy,UseResize:Db,UseRipple:hy,UseThrottle:bb,UseTickState:ob,UseTicker:db,UseTitle:tw,UseToggle:Og,UseTree:kv,UseUrl:xb,UseWatch:Sb,UseWatchGetter:Mb},Symbol.toStringTag,{value:"Module"}));function kw(e){return e.split("?")[0].split("/").filter(Boolean).pop()||""}function Sw(){return s("div",{css:$css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // height: calc(100vh - 160px);
      height: 260px;
      font-size: 2rem;
      color: #ccc;
      // border: 2px dotted #ccc;
      border-radius: 8px;
      margin-top: 60px;
      margin-inline: 10%;
    `,children:[o($m,{}),o("div",{children:"This page is still deving..."})]})}var Do={},zs;function Tw(){if(zs)return Do;zs=1;var e=an();Object.defineProperty(Do,"__esModule",{value:!0}),Do.default=void 0;var t=e(ln()),n=Zo(),r=(0,t.default)((0,n.jsx)("path",{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");return Do.default=r,Do}var Rw=Tw();const Us=en(Rw);var zo={},Fs;function Ew(){if(Fs)return zo;Fs=1;var e=an();Object.defineProperty(zo,"__esModule",{value:!0}),zo.default=void 0;var t=e(ln()),n=Zo(),r=(0,t.default)((0,n.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");return zo.default=r,zo}var Mw=Ew();const Pw=en(Mw);function Iw(e,t,n){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(e,t,"");else if(window.sidebar&&/Firefox/i.test(navigator.userAgent)||window.opera&&window.print){var r=document.createElement("a");r.href=t,r.title=e,r.rel="sidebar",document.body.appendChild(r),r.click(),document.body.removeChild(r)}else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(t,e);else{const i=[/Mac/i.test(navigator.platform)?"Cmd":"Ctrl","D"];n?n(i):alert("Press "+i[0]+" + D to bookmark this page.")}}function Aw(){const[e,t]=d.useState(null),[n,r]=d.useState(!1);return s(b,{children:[o(Xt,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1,position:"fixed",bottom:"80px",right:"40px"},children:o(jp,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:o(ga,{}),children:[{icon:o(Us,{style:{rotate:"180deg"}}),name:"Bottom",callback:()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{icon:o(Us,{}),name:"Top",callback:()=>{window.scrollTo({top:0,behavior:"smooth"})}},{icon:o(Im,{}),name:"Star",callback:()=>{Iw(null,null,a=>{t(s("span",{children:[o("span",{children:"Please press "}),o("strong",{children:a.join(" + ")}),o("span",{children:" to bookmark site. ✨"})]})),r(!0)})}},{icon:o(Pw,{}),name:"Share"}].map(a=>o(eh,{icon:a.icon,tooltipTitle:a.name,onClick:a.callback},a.name))})}),o(Ua,{open:n,setOpen:r,sx:{position:"fixed",bottom:"0%",right:"0%",transform:"translate(-10px, -10px)"},children:e})]})}const Nw={new:o(Tm,{color:"primary"}),deving:o(Sm,{}),stable:o(b,{}),experimental:o(Pm,{color:"secondary"}),preview:o(bm,{color:"disabled"}),deprecated:o(km,{color:"error"})};function Wt({type:e}){return Nw[e]}function Ow(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}function Lw(){const[e,t]=tn({0:!0,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1}),n=yr(),r=kw(n.hash);return s("div",{className:"Docs",children:[o("div",{className:"Docs-Left",children:s($t,{className:"Docs-Left-Menu",sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:o(cr,{component:"div",id:"nested-list-subheader",onClick:()=>{nt("/docs",!0)},style:{cursor:"pointer"},children:"Docs of react-hooks-kit"}),children:[s(_e,{onClick:()=>{t(0,!e[0])},children:[o(We,{children:"📖"}),o(He,{primary:"Getting started"}),e[0]?o(Vt,{}):o(Lt,{})]}),o(ct,{in:e[0],timeout:"auto",unmountOnExit:!0,children:s($t,{component:"div",disablePadding:!0,children:[s(_e,{sx:{pl:4},selected:r==="overview",onClick:()=>nt("/docs/overview",!0),children:[o(We,{children:"🧐"}),o(He,{primary:"Overview"})]}),s(_e,{sx:{pl:4},selected:r==="installation",onClick:()=>nt("/docs/installation",!0),children:[o(We,{children:"⬇️"}),o(He,{primary:"Installation"})]}),s(_e,{sx:{pl:4},selected:r==="usage",onClick:()=>nt("/docs/usage",!0),children:[o(We,{children:"🫰"}),o(He,{primary:"Usage"})]}),s(_e,{sx:{pl:4},selected:r==="faqs",onClick:()=>nt("/docs/faqs",!0),children:[o(We,{children:"❓"}),o(He,{primary:"FAQs"})]}),s(_e,{sx:{pl:4},selected:r==="support",onClick:()=>nt("/docs/support",!0),children:[o(We,{children:"💰"}),o(He,{primary:"Support"})]})]})}),s(_e,{selected:r==="sent-mail",onClick:()=>nt("/docs/sent-mail",!0),children:[o(We,{children:"📧"}),o(He,{primary:"Sent mail"})]}),s(_e,{selected:r==="draft",onClick:()=>nt("/docs/draft",!0),children:[o(We,{children:"⚓"}),o(He,{primary:"Drafts"})]}),s($t,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:o(cr,{component:"div",id:"nested-list-subheader",children:"Functional hooks"}),children:[s(_e,{onClick:()=>{t(1,!e[1])},children:[o(We,{children:"💾"}),o(He,{primary:"Stateful hooks"}),e[1]?o(Vt,{}):o(Lt,{})]}),o(ct,{in:e[1],timeout:"auto",unmountOnExit:!0,children:o($t,{component:"div",disablePadding:!0,children:Object.entries(It.StatefulHooks).map(([,{route:i,status:a}])=>s(_e,{sx:{pl:4,opacity:a==="deprecated"?"0.5":"1"},selected:r===i,onClick:()=>nt(`/docs/${i}`,!0),children:[o(We,{children:o(Wt,{type:a})}),o(He,{children:a==="deprecated"?o("del",{children:i}):i})]}))})}),s(_e,{onClick:()=>{t(2,!e[2])},children:[o(We,{children:"♻️"}),o(He,{primary:"Callback hooks"}),e[2]?o(Vt,{}):o(Lt,{})]}),o(ct,{in:e[2],timeout:"auto",unmountOnExit:!0,children:o($t,{component:"div",disablePadding:!0,children:Object.entries(It.CallbackHooks).map(([,{route:i,status:a}])=>s(_e,{sx:{pl:4},selected:r===i,onClick:()=>nt(`/docs/${i}`,!0),children:[o(We,{children:o(Wt,{type:a})}),o(He,{primary:i})]}))})}),s(_e,{onClick:()=>{t(3,!e[3])},children:[o(We,{children:"⌚"}),o(He,{primary:"Promise hooks"}),e[3]?o(Vt,{}):o(Lt,{})]}),o(ct,{in:e[3],timeout:"auto",unmountOnExit:!0,children:o($t,{component:"div",disablePadding:!0,children:Object.entries(It.PromiseHooks).map(([,{route:i,status:a}])=>s(_e,{sx:{pl:4,opacity:a==="deprecated"?"0.5":"1"},selected:r===i,onClick:()=>nt(`/docs/${i}`,!0),children:[o(We,{children:o(Wt,{type:a})}),o(He,{children:a==="deprecated"?o("del",{children:i}):i})]}))})}),s(_e,{onClick:()=>{t(4,!e[4])},children:[o(We,{children:"🛠️"}),o(He,{primary:"Utils hooks"}),e[4]?o(Vt,{}):o(Lt,{})]}),o(ct,{in:e[4],timeout:"auto",unmountOnExit:!0,children:o($t,{component:"div",disablePadding:!0,children:Object.entries(It.UtilsHooks).map(([,{route:i,status:a}])=>s(_e,{sx:{pl:4},selected:r===i,onClick:()=>nt(`/docs/${i}`,!0),children:[o(We,{children:o(Wt,{type:a})}),o(He,{primary:i})]}))})}),s(_e,{onClick:()=>{t(5,!e[5])},children:[o(We,{children:"🔮"}),o(He,{primary:"Lifecycle hooks"}),e[5]?o(Vt,{}):o(Lt,{})]}),o(ct,{in:e[5],timeout:"auto",unmountOnExit:!0,children:o($t,{component:"div",disablePadding:!0,children:Object.entries(It.LifecycleHooks).map(([,{route:i,status:a}])=>s(_e,{sx:{pl:4},selected:r===i,onClick:()=>nt(`/docs/${i}`,!0),children:[o(We,{children:o(Wt,{type:a})}),o(He,{primary:i})]}))})}),s(_e,{onClick:()=>{t(6,!e[6])},children:[o(We,{children:"♨️"}),o(He,{primary:"Event hooks"}),e[6]?o(Vt,{}):o(Lt,{})]}),o(ct,{in:e[6],timeout:"auto",unmountOnExit:!0,children:o($t,{component:"div",disablePadding:!0,children:Object.entries(It.EventHooks).map(([,{route:i,status:a}])=>s(_e,{sx:{pl:4},selected:r===i,onClick:()=>nt(`/docs/${i}`,!0),children:[o(We,{children:o(Wt,{type:a})}),o(He,{primary:i})]}))})}),s(_e,{onClick:()=>{t(7,!e[7])},children:[o(We,{children:"🎉"}),o(He,{primary:"UI & UX hooks"}),e[7]?o(Vt,{}):o(Lt,{})]}),o(ct,{in:e[7],timeout:"auto",unmountOnExit:!0,children:o($t,{component:"div",disablePadding:!0,children:Object.entries(It.UiUxHooks).map(([,{route:i,status:a}])=>s(_e,{sx:{pl:4},selected:r===i,onClick:()=>nt(`/docs/${i}`,!0),children:[o(We,{children:o(Wt,{type:a})}),o(He,{primary:i})]}))})}),s(_e,{onClick:()=>{t(8,!e[8])},children:[o(We,{children:"🎉"}),o(He,{primary:"Utils hooks"}),e[8]?o(Vt,{}):o(Lt,{})]}),o(ct,{in:e[8],timeout:"auto",unmountOnExit:!0,children:o($t,{component:"div",disablePadding:!0,children:Object.entries(It.UtilsHooks).map(([,{route:i,status:a}])=>s(_e,{sx:{pl:4},selected:r===i,onClick:()=>nt(`/docs/${i}`,!0),children:[o(We,{children:o(Wt,{type:a})}),o(He,{primary:i})]}))})}),s(_e,{onClick:()=>{t(9,!e[9])},children:[o(We,{children:"🪄"}),o(He,{primary:"Other hooks"}),e[9]?o(Vt,{}):o(Lt,{})]}),o(ct,{in:e[9],timeout:"auto",unmountOnExit:!0,children:o($t,{component:"div",disablePadding:!0,children:Object.entries(It.OtherHooks).map(([,{route:i,status:a}])=>s(_e,{sx:{pl:4},selected:r===i,onClick:()=>nt(`/docs/${i}`,!0),children:[o(We,{children:o(Wt,{type:a})}),o(He,{primary:i})]}))})})]})]})}),s("div",{className:"Docs-Main",children:[o(Sl,{children:o(hn,{path:"/",children:s(b,{children:[o(hn,{path:"",element:o(xg,{})}),Object.entries(It).map(([i,a])=>{const l=i;return Object.entries(a).map(([u,c])=>{const p=Ow(u);let h;return l==="GettingStarted"?p in ki&&(h=ki[p]):p in Ds&&(h=Ds[p]),h?o(hn,{path:c.route,element:o(h,{})}):o(hn,{path:c.route,element:s(b,{children:[o(gf,{children:c.title}),o(Sw,{})]})})})})]})})}),o(Hf,{})]}),s("div",{className:"Docs-Right",children:[o(wg,{}),o(Aw,{})]})]})}export{Lw as default};
