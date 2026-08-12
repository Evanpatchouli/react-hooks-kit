const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Bh0xbNdn.js","assets/index-DbUDkJeE.js","assets/index-C6NV9D6F.css"])))=>i.map(i=>d[i]);
import{r as u,c as Ha,e as Ws,_ as ae,b as R,d as f,f as oe,u as Ka,h as Ar,g as Qn,i as Ga,k as Qa,m as Ja,l as pe,n as ge,o as Ya,p as Nr,C as Xa,q as _,s as Za,t as je,v as hr,w as Nt,x as mr,y as el,z as wo,A as fr,D as Xo,E as Vt,F as St,G as gr,H as ve,I as fe,T as qs,J as tl,K as Yt,L as K,M as Mn,N as Bn,P as jn,O as Ko,Q as Go,R as ol,S as ut,U as Fo,V as nl,W as Jt,X as Ge,Y as Dn,Z as Un,$ as rl,a0 as Vr,a1 as il,a2 as vr,a3 as Pn,a4 as sl,a5 as al,a6 as Or,a7 as Rn,a8 as Hs,a9 as Ks,aa as ir,ab as ll,ac as pn,ad as cl,ae as dl,af as ul,ag as Gs,ah as zo,a as t,ai as pl,aj as Qs,ak as hl,al as Js,am as Ys,j as s,an as ml,ao as fl,ap as uo,aq as ke,B as N,ar as gl,as as b,at as vl,au as bl,av as ce,aw as yl,ax as Zo,ay as en,az as Xt,aA as br,aB as tn,aC as yr,aD as wr,aE as on,aF as zn,aG as Lr,aH as qt,aI as wl,aJ as xl,aK as _n,aL as Xs,aM as xr,aN as Zs,aO as $l,aP as ea,aQ as In,aR as Cl,aS as kl,aT as hn,aU as $t,aV as mn,aW as Sl}from"./index-DbUDkJeE.js";function Tl(e,o){return()=>null}function yo(e,o){var n,r;return u.isValidElement(e)&&o.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function Rl(e,o){return()=>null}function El(e,o,n,r,i){return null}let go;function ta(){if(go)return go;const e=document.createElement("div"),o=document.createElement("div");return o.style.width="10px",o.style.height="1px",e.appendChild(o),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),go="reverse",e.scrollLeft>0?go="default":(e.scrollLeft=1,e.scrollLeft===0&&(go="negative")),document.body.removeChild(e),go}function Ml(e,o){const n=e.scrollLeft;if(o!=="rtl")return n;switch(ta()){case"negative":return e.scrollWidth-e.clientWidth+n;case"reverse":return e.scrollWidth-e.clientWidth-n;default:return n}}const Pl={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Il=Ha(),Al=["component","direction","spacing","divider","children","className","useFlexGap"],Nl=Ya(),Vl=Il("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function Ol(e){return Ka({props:e,name:"MuiStack",defaultTheme:Nl})}function Ll(e,o){const n=u.Children.toArray(e).filter(Boolean);return n.reduce((r,i,a)=>(r.push(i),a<n.length-1&&r.push(u.cloneElement(o,{key:`separator-${a}`})),r),[])}const Bl=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],jl=({ownerState:e,theme:o})=>{let n=f({display:"flex",flexDirection:"column"},Ar({theme:o},Qn({values:e.direction,breakpoints:o.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=Ga(o),i=Object.keys(o.breakpoints.values).reduce((c,p)=>((typeof e.spacing=="object"&&e.spacing[p]!=null||typeof e.direction=="object"&&e.direction[p]!=null)&&(c[p]=!0),c),{}),a=Qn({values:e.direction,base:i}),l=Qn({values:e.spacing,base:i});typeof a=="object"&&Object.keys(a).forEach((c,p,h)=>{if(!a[c]){const v=p>0?a[h[p-1]]:"column";a[c]=v}}),n=Qa(n,Ar({theme:o},l,(c,p)=>e.useFlexGap?{gap:Nr(r,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Bl(p?a[p]:e.direction)}`]:Nr(r,c)}}))}return n=Ja(o.breakpoints,n),n};function Dl(e={}){const{createStyledComponent:o=Vl,useThemeProps:n=Ol,componentName:r="MuiStack"}=e,i=()=>pe({root:["root"]},c=>ge(r,c),{}),a=o(jl);return u.forwardRef(function(c,p){const h=n(c),g=Ws(h),{component:v="div",direction:C="column",spacing:y=0,divider:k,children:w,className:T,useFlexGap:E=!1}=g,S=ae(g,Al),$={direction:C,spacing:y,useFlexGap:E},P=i();return R.jsx(a,f({as:v,ownerState:$,ref:p,className:oe(P.root,T)},S,{children:k?Ll(w,k):w}))})}const Ul={configure:e=>{Xa.configure(e)}},zl=Object.freeze(Object.defineProperty({__proto__:null,capitalize:_,createChainedFunction:Za,createSvgIcon:je,debounce:hr,deprecatedPropType:Tl,isMuiElement:yo,ownerDocument:Nt,ownerWindow:mr,requirePropFactory:Rl,setRef:el,unstable_ClassNameGenerator:Ul,unstable_useEnhancedEffect:wo,unstable_useId:fr,unsupportedProp:El,useControlled:Xo,useEventCallback:Vt,useForkRef:St,useIsFocusVisible:gr},Symbol.toStringTag,{value:"Module"}));function _l(e){return ge("MuiCollapse",e)}ve("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Fl=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Wl=e=>{const{orientation:o,classes:n}=e,r={root:["root",`${o}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${o}`],wrapperInner:["wrapperInner",`${o}`]};return pe(r,_l,n)},ql=K("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.orientation],n.state==="entered"&&o.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&o.hidden]}})(({theme:e,ownerState:o})=>f({height:0,overflow:"hidden",transition:e.transitions.create("height")},o.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},o.state==="entered"&&f({height:"auto",overflow:"visible"},o.orientation==="horizontal"&&{width:"auto"}),o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&{visibility:"hidden"})),Hl=K("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,o)=>o.wrapper})(({ownerState:e})=>f({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Kl=K("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,o)=>o.wrapperInner})(({ownerState:e})=>f({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),dt=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiCollapse"}),{addEndListener:i,children:a,className:l,collapsedSize:d="0px",component:c,easing:p,in:h,onEnter:g,onEntered:v,onEntering:C,onExit:y,onExited:k,onExiting:w,orientation:T="vertical",style:E,timeout:S=tl.standard,TransitionComponent:$=qs}=r,P=ae(r,Fl),x=f({},r,{orientation:T,collapsedSize:d}),A=Wl(x),U=Yt(),O=u.useRef(),L=u.useRef(null),D=u.useRef(),te=typeof d=="number"?`${d}px`:d,z=T==="horizontal",B=z?"width":"height";u.useEffect(()=>()=>{clearTimeout(O.current)},[]);const W=u.useRef(null),q=St(n,W),re=V=>G=>{if(V){const j=W.current;G===void 0?V(j):V(j,G)}},de=()=>L.current?L.current[z?"clientWidth":"clientHeight"]:0,J=re((V,G)=>{L.current&&z&&(L.current.style.position="absolute"),V.style[B]=te,g&&g(V,G)}),Le=re((V,G)=>{const j=de();L.current&&z&&(L.current.style.position="");const{duration:ie,easing:be}=Mn({style:E,timeout:S,easing:p},{mode:"enter"});if(S==="auto"){const ue=U.transitions.getAutoHeightDuration(j);V.style.transitionDuration=`${ue}ms`,D.current=ue}else V.style.transitionDuration=typeof ie=="string"?ie:`${ie}ms`;V.style[B]=`${j}px`,V.style.transitionTimingFunction=be,C&&C(V,G)}),Be=re((V,G)=>{V.style[B]="auto",v&&v(V,G)}),He=re(V=>{V.style[B]=`${de()}px`,y&&y(V)}),Te=re(k),Pe=re(V=>{const G=de(),{duration:j,easing:ie}=Mn({style:E,timeout:S,easing:p},{mode:"exit"});if(S==="auto"){const be=U.transitions.getAutoHeightDuration(G);V.style.transitionDuration=`${be}ms`,D.current=be}else V.style.transitionDuration=typeof j=="string"?j:`${j}ms`;V.style[B]=te,V.style.transitionTimingFunction=ie,w&&w(V)}),H=V=>{S==="auto"&&(O.current=setTimeout(V,D.current||0)),i&&i(W.current,V)};return R.jsx($,f({in:h,onEnter:J,onEntered:Be,onEntering:Le,onExit:He,onExited:Te,onExiting:Pe,addEndListener:H,nodeRef:W,timeout:S==="auto"?null:S},P,{children:(V,G)=>R.jsx(ql,f({as:c,className:oe(A.root,l,{entered:A.entered,exited:!h&&te==="0px"&&A.hidden}[V]),style:f({[z?"minWidth":"minHeight"]:te},E),ownerState:f({},x,{state:V}),ref:q},G,{children:R.jsx(Hl,{ownerState:f({},x,{state:V}),className:A.wrapper,ref:L,children:R.jsx(Kl,{ownerState:f({},x,{state:V}),className:A.wrapperInner,children:a})})}))}))});dt.muiSupportAuto=!0;function Gl(e){return ge("MuiAlert",e)}const Br=ve("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Ql=je(R.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Jl=je(R.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Yl=je(R.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Xl=je(R.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Zl=je(R.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ec=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],tc=e=>{const{variant:o,color:n,severity:r,classes:i}=e,a={root:["root",`${o}${_(n||r)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return pe(a,Gl,i)},oc=K(jn,{name:"MuiAlert",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`${n.variant}${_(n.color||n.severity)}`]]}})(({theme:e,ownerState:o})=>{const n=e.palette.mode==="light"?Ko:Go,r=e.palette.mode==="light"?Go:Ko,i=o.color||o.severity;return f({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},i&&o.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:n(e.palette[i].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${i}StandardBg`]:r(e.palette[i].light,.9),[`& .${Br.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:e.palette[i].main}},i&&o.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:n(e.palette[i].light,.6),border:`1px solid ${(e.vars||e).palette[i].light}`,[`& .${Br.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:e.palette[i].main}},i&&o.variant==="filled"&&f({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${i}FilledColor`],backgroundColor:e.vars.palette.Alert[`${i}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[i].dark:e.palette[i].main,color:e.palette.getContrastText(e.palette[i].main)}))}),nc=K("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),rc=K("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),jr=K("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Dr={success:R.jsx(Ql,{fontSize:"inherit"}),warning:R.jsx(Jl,{fontSize:"inherit"}),error:R.jsx(Yl,{fontSize:"inherit"}),info:R.jsx(Xl,{fontSize:"inherit"})},ic=u.forwardRef(function(o,n){var r,i,a,l,d,c;const p=fe({props:o,name:"MuiAlert"}),{action:h,children:g,className:v,closeText:C="Close",color:y,components:k={},componentsProps:w={},icon:T,iconMapping:E=Dr,onClose:S,role:$="alert",severity:P="success",slotProps:x={},slots:A={},variant:U="standard"}=p,O=ae(p,ec),L=f({},p,{color:y,severity:P,variant:U}),D=tc(L),te=(r=(i=A.closeButton)!=null?i:k.CloseButton)!=null?r:Bn,z=(a=(l=A.closeIcon)!=null?l:k.CloseIcon)!=null?a:Zl,B=(d=x.closeButton)!=null?d:w.closeButton,W=(c=x.closeIcon)!=null?c:w.closeIcon;return R.jsxs(oc,f({role:$,elevation:0,ownerState:L,className:oe(D.root,v),ref:n},O,{children:[T!==!1?R.jsx(nc,{ownerState:L,className:D.icon,children:T||E[P]||Dr[P]}):null,R.jsx(rc,{ownerState:L,className:D.message,children:g}),h!=null?R.jsx(jr,{ownerState:L,className:D.action,children:h}):null,h==null&&S?R.jsx(jr,{ownerState:L,className:D.action,children:R.jsx(te,f({size:"small","aria-label":C,title:C,color:"inherit",onClick:S},B,{children:R.jsx(z,f({fontSize:"small"},W))}))}):null]}))});function sc(e){return ge("MuiTypography",e)}ve("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const ac=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],lc=e=>{const{align:o,gutterBottom:n,noWrap:r,paragraph:i,variant:a,classes:l}=e,d={root:["root",a,e.align!=="inherit"&&`align${_(o)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return pe(d,sc,l)},cc=K("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.variant&&o[n.variant],n.align!=="inherit"&&o[`align${_(n.align)}`],n.noWrap&&o.noWrap,n.gutterBottom&&o.gutterBottom,n.paragraph&&o.paragraph]}})(({theme:e,ownerState:o})=>f({margin:0},o.variant==="inherit"&&{font:"inherit"},o.variant!=="inherit"&&e.typography[o.variant],o.align!=="inherit"&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})),Ur={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},dc={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},uc=e=>dc[e]||e,bt=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTypography"}),i=uc(r.color),a=Ws(f({},r,{color:i})),{align:l="inherit",className:d,component:c,gutterBottom:p=!1,noWrap:h=!1,paragraph:g=!1,variant:v="body1",variantMapping:C=Ur}=a,y=ae(a,ac),k=f({},a,{align:l,color:i,className:d,component:c,gutterBottom:p,noWrap:h,paragraph:g,variant:v,variantMapping:C}),w=c||(g?"p":C[v]||Ur[v])||"span",T=lc(k);return R.jsx(cc,f({as:w,ref:n,ownerState:k,className:oe(T.root,d)},y))});function pc(e,o,n=(r,i)=>r===i){return e.length===o.length&&e.every((r,i)=>n(r,o[i]))}const hc={disableDefaultClasses:!1},mc=u.createContext(hc);function fc(e){const{disableDefaultClasses:o}=u.useContext(mc);return n=>o?"":e(n)}function zr(e){return e.substring(2).toLowerCase()}function gc(e,o){return o.documentElement.clientWidth<e.clientX||o.documentElement.clientHeight<e.clientY}function vc(e){const{children:o,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:i,touchEvent:a="onTouchEnd"}=e,l=u.useRef(!1),d=u.useRef(null),c=u.useRef(!1),p=u.useRef(!1);u.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const h=St(o.ref,d),g=Vt(y=>{const k=p.current;p.current=!1;const w=Nt(d.current);if(!c.current||!d.current||"clientX"in y&&gc(y,w))return;if(l.current){l.current=!1;return}let T;y.composedPath?T=y.composedPath().indexOf(d.current)>-1:T=!w.documentElement.contains(y.target)||d.current.contains(y.target),!T&&(n||!k)&&i(y)}),v=y=>k=>{p.current=!0;const w=o.props[y];w&&w(k)},C={ref:h};return a!==!1&&(C[a]=v(a)),u.useEffect(()=>{if(a!==!1){const y=zr(a),k=Nt(d.current),w=()=>{l.current=!0};return k.addEventListener(y,g),k.addEventListener("touchmove",w),()=>{k.removeEventListener(y,g),k.removeEventListener("touchmove",w)}}},[g,a]),r!==!1&&(C[r]=v(r)),u.useEffect(()=>{if(r!==!1){const y=zr(r),k=Nt(d.current);return k.addEventListener(y,g),()=>{k.removeEventListener(y,g)}}},[g,r]),R.jsx(u.Fragment,{children:u.cloneElement(o,C)})}var pt="top",Tt="bottom",Rt="right",ht="left",$r="auto",nn=[pt,Tt,Rt,ht],xo="start",Qo="end",bc="clippingParents",oa="viewport",Io="popper",yc="reference",_r=nn.reduce(function(e,o){return e.concat([o+"-"+xo,o+"-"+Qo])},[]),na=[].concat(nn,[$r]).reduce(function(e,o){return e.concat([o,o+"-"+xo,o+"-"+Qo])},[]),wc="beforeRead",xc="read",$c="afterRead",Cc="beforeMain",kc="main",Sc="afterMain",Tc="beforeWrite",Rc="write",Ec="afterWrite",Mc=[wc,xc,$c,Cc,kc,Sc,Tc,Rc,Ec];function Dt(e){return e?(e.nodeName||"").toLowerCase():null}function yt(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var o=e.ownerDocument;return o&&o.defaultView||window}return e}function co(e){var o=yt(e).Element;return e instanceof o||e instanceof Element}function kt(e){var o=yt(e).HTMLElement;return e instanceof o||e instanceof HTMLElement}function Cr(e){if(typeof ShadowRoot>"u")return!1;var o=yt(e).ShadowRoot;return e instanceof o||e instanceof ShadowRoot}function Pc(e){var o=e.state;Object.keys(o.elements).forEach(function(n){var r=o.styles[n]||{},i=o.attributes[n]||{},a=o.elements[n];!kt(a)||!Dt(a)||(Object.assign(a.style,r),Object.keys(i).forEach(function(l){var d=i[l];d===!1?a.removeAttribute(l):a.setAttribute(l,d===!0?"":d)}))})}function Ic(e){var o=e.state,n={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,n.popper),o.styles=n,o.elements.arrow&&Object.assign(o.elements.arrow.style,n.arrow),function(){Object.keys(o.elements).forEach(function(r){var i=o.elements[r],a=o.attributes[r]||{},l=Object.keys(o.styles.hasOwnProperty(r)?o.styles[r]:n[r]),d=l.reduce(function(c,p){return c[p]="",c},{});!kt(i)||!Dt(i)||(Object.assign(i.style,d),Object.keys(a).forEach(function(c){i.removeAttribute(c)}))})}}const Ac={name:"applyStyles",enabled:!0,phase:"write",fn:Pc,effect:Ic,requires:["computeStyles"]};function jt(e){return e.split("-")[0]}var lo=Math.max,An=Math.min,$o=Math.round;function sr(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(o){return o.brand+"/"+o.version}).join(" "):navigator.userAgent}function ra(){return!/^((?!chrome|android).)*safari/i.test(sr())}function Co(e,o,n){o===void 0&&(o=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;o&&kt(e)&&(i=e.offsetWidth>0&&$o(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&$o(r.height)/e.offsetHeight||1);var l=co(e)?yt(e):window,d=l.visualViewport,c=!ra()&&n,p=(r.left+(c&&d?d.offsetLeft:0))/i,h=(r.top+(c&&d?d.offsetTop:0))/a,g=r.width/i,v=r.height/a;return{width:g,height:v,top:h,right:p+g,bottom:h+v,left:p,x:p,y:h}}function kr(e){var o=Co(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(o.width-n)<=1&&(n=o.width),Math.abs(o.height-r)<=1&&(r=o.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function ia(e,o){var n=o.getRootNode&&o.getRootNode();if(e.contains(o))return!0;if(n&&Cr(n)){var r=o;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ht(e){return yt(e).getComputedStyle(e)}function Nc(e){return["table","td","th"].indexOf(Dt(e))>=0}function Zt(e){return((co(e)?e.ownerDocument:e.document)||window.document).documentElement}function Fn(e){return Dt(e)==="html"?e:e.assignedSlot||e.parentNode||(Cr(e)?e.host:null)||Zt(e)}function Fr(e){return!kt(e)||Ht(e).position==="fixed"?null:e.offsetParent}function Vc(e){var o=/firefox/i.test(sr()),n=/Trident/i.test(sr());if(n&&kt(e)){var r=Ht(e);if(r.position==="fixed")return null}var i=Fn(e);for(Cr(i)&&(i=i.host);kt(i)&&["html","body"].indexOf(Dt(i))<0;){var a=Ht(i);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||o&&a.willChange==="filter"||o&&a.filter&&a.filter!=="none")return i;i=i.parentNode}return null}function rn(e){for(var o=yt(e),n=Fr(e);n&&Nc(n)&&Ht(n).position==="static";)n=Fr(n);return n&&(Dt(n)==="html"||Dt(n)==="body"&&Ht(n).position==="static")?o:n||Vc(e)||o}function Sr(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Wo(e,o,n){return lo(e,An(o,n))}function Oc(e,o,n){var r=Wo(e,o,n);return r>n?n:r}function sa(){return{top:0,right:0,bottom:0,left:0}}function aa(e){return Object.assign({},sa(),e)}function la(e,o){return o.reduce(function(n,r){return n[r]=e,n},{})}var Lc=function(o,n){return o=typeof o=="function"?o(Object.assign({},n.rects,{placement:n.placement})):o,aa(typeof o!="number"?o:la(o,nn))};function Bc(e){var o,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,l=n.modifiersData.popperOffsets,d=jt(n.placement),c=Sr(d),p=[ht,Rt].indexOf(d)>=0,h=p?"height":"width";if(!(!a||!l)){var g=Lc(i.padding,n),v=kr(a),C=c==="y"?pt:ht,y=c==="y"?Tt:Rt,k=n.rects.reference[h]+n.rects.reference[c]-l[c]-n.rects.popper[h],w=l[c]-n.rects.reference[c],T=rn(a),E=T?c==="y"?T.clientHeight||0:T.clientWidth||0:0,S=k/2-w/2,$=g[C],P=E-v[h]-g[y],x=E/2-v[h]/2+S,A=Wo($,x,P),U=c;n.modifiersData[r]=(o={},o[U]=A,o.centerOffset=A-x,o)}}function jc(e){var o=e.state,n=e.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=o.elements.popper.querySelector(i),!i)||ia(o.elements.popper,i)&&(o.elements.arrow=i))}const Dc={name:"arrow",enabled:!0,phase:"main",fn:Bc,effect:jc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ko(e){return e.split("-")[1]}var Uc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zc(e,o){var n=e.x,r=e.y,i=o.devicePixelRatio||1;return{x:$o(n*i)/i||0,y:$o(r*i)/i||0}}function Wr(e){var o,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,l=e.offsets,d=e.position,c=e.gpuAcceleration,p=e.adaptive,h=e.roundOffsets,g=e.isFixed,v=l.x,C=v===void 0?0:v,y=l.y,k=y===void 0?0:y,w=typeof h=="function"?h({x:C,y:k}):{x:C,y:k};C=w.x,k=w.y;var T=l.hasOwnProperty("x"),E=l.hasOwnProperty("y"),S=ht,$=pt,P=window;if(p){var x=rn(n),A="clientHeight",U="clientWidth";if(x===yt(n)&&(x=Zt(n),Ht(x).position!=="static"&&d==="absolute"&&(A="scrollHeight",U="scrollWidth")),x=x,i===pt||(i===ht||i===Rt)&&a===Qo){$=Tt;var O=g&&x===P&&P.visualViewport?P.visualViewport.height:x[A];k-=O-r.height,k*=c?1:-1}if(i===ht||(i===pt||i===Tt)&&a===Qo){S=Rt;var L=g&&x===P&&P.visualViewport?P.visualViewport.width:x[U];C-=L-r.width,C*=c?1:-1}}var D=Object.assign({position:d},p&&Uc),te=h===!0?zc({x:C,y:k},yt(n)):{x:C,y:k};if(C=te.x,k=te.y,c){var z;return Object.assign({},D,(z={},z[$]=E?"0":"",z[S]=T?"0":"",z.transform=(P.devicePixelRatio||1)<=1?"translate("+C+"px, "+k+"px)":"translate3d("+C+"px, "+k+"px, 0)",z))}return Object.assign({},D,(o={},o[$]=E?k+"px":"",o[S]=T?C+"px":"",o.transform="",o))}function _c(e){var o=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0?!0:r,a=n.adaptive,l=a===void 0?!0:a,d=n.roundOffsets,c=d===void 0?!0:d,p={placement:jt(o.placement),variation:ko(o.placement),popper:o.elements.popper,popperRect:o.rects.popper,gpuAcceleration:i,isFixed:o.options.strategy==="fixed"};o.modifiersData.popperOffsets!=null&&(o.styles.popper=Object.assign({},o.styles.popper,Wr(Object.assign({},p,{offsets:o.modifiersData.popperOffsets,position:o.options.strategy,adaptive:l,roundOffsets:c})))),o.modifiersData.arrow!=null&&(o.styles.arrow=Object.assign({},o.styles.arrow,Wr(Object.assign({},p,{offsets:o.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-placement":o.placement})}const Fc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:_c,data:{}};var fn={passive:!0};function Wc(e){var o=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0?!0:i,l=r.resize,d=l===void 0?!0:l,c=yt(o.elements.popper),p=[].concat(o.scrollParents.reference,o.scrollParents.popper);return a&&p.forEach(function(h){h.addEventListener("scroll",n.update,fn)}),d&&c.addEventListener("resize",n.update,fn),function(){a&&p.forEach(function(h){h.removeEventListener("scroll",n.update,fn)}),d&&c.removeEventListener("resize",n.update,fn)}}const qc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Wc,data:{}};var Hc={left:"right",right:"left",bottom:"top",top:"bottom"};function En(e){return e.replace(/left|right|bottom|top/g,function(o){return Hc[o]})}var Kc={start:"end",end:"start"};function qr(e){return e.replace(/start|end/g,function(o){return Kc[o]})}function Tr(e){var o=yt(e),n=o.pageXOffset,r=o.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Rr(e){return Co(Zt(e)).left+Tr(e).scrollLeft}function Gc(e,o){var n=yt(e),r=Zt(e),i=n.visualViewport,a=r.clientWidth,l=r.clientHeight,d=0,c=0;if(i){a=i.width,l=i.height;var p=ra();(p||!p&&o==="fixed")&&(d=i.offsetLeft,c=i.offsetTop)}return{width:a,height:l,x:d+Rr(e),y:c}}function Qc(e){var o,n=Zt(e),r=Tr(e),i=(o=e.ownerDocument)==null?void 0:o.body,a=lo(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=lo(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),d=-r.scrollLeft+Rr(e),c=-r.scrollTop;return Ht(i||n).direction==="rtl"&&(d+=lo(n.clientWidth,i?i.clientWidth:0)-a),{width:a,height:l,x:d,y:c}}function Er(e){var o=Ht(e),n=o.overflow,r=o.overflowX,i=o.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function ca(e){return["html","body","#document"].indexOf(Dt(e))>=0?e.ownerDocument.body:kt(e)&&Er(e)?e:ca(Fn(e))}function qo(e,o){var n;o===void 0&&(o=[]);var r=ca(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),a=yt(r),l=i?[a].concat(a.visualViewport||[],Er(r)?r:[]):r,d=o.concat(l);return i?d:d.concat(qo(Fn(l)))}function ar(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Jc(e,o){var n=Co(e,!1,o==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Hr(e,o,n){return o===oa?ar(Gc(e,n)):co(o)?Jc(o,n):ar(Qc(Zt(e)))}function Yc(e){var o=qo(Fn(e)),n=["absolute","fixed"].indexOf(Ht(e).position)>=0,r=n&&kt(e)?rn(e):e;return co(r)?o.filter(function(i){return co(i)&&ia(i,r)&&Dt(i)!=="body"}):[]}function Xc(e,o,n,r){var i=o==="clippingParents"?Yc(e):[].concat(o),a=[].concat(i,[n]),l=a[0],d=a.reduce(function(c,p){var h=Hr(e,p,r);return c.top=lo(h.top,c.top),c.right=An(h.right,c.right),c.bottom=An(h.bottom,c.bottom),c.left=lo(h.left,c.left),c},Hr(e,l,r));return d.width=d.right-d.left,d.height=d.bottom-d.top,d.x=d.left,d.y=d.top,d}function da(e){var o=e.reference,n=e.element,r=e.placement,i=r?jt(r):null,a=r?ko(r):null,l=o.x+o.width/2-n.width/2,d=o.y+o.height/2-n.height/2,c;switch(i){case pt:c={x:l,y:o.y-n.height};break;case Tt:c={x:l,y:o.y+o.height};break;case Rt:c={x:o.x+o.width,y:d};break;case ht:c={x:o.x-n.width,y:d};break;default:c={x:o.x,y:o.y}}var p=i?Sr(i):null;if(p!=null){var h=p==="y"?"height":"width";switch(a){case xo:c[p]=c[p]-(o[h]/2-n[h]/2);break;case Qo:c[p]=c[p]+(o[h]/2-n[h]/2);break}}return c}function Jo(e,o){o===void 0&&(o={});var n=o,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,l=a===void 0?e.strategy:a,d=n.boundary,c=d===void 0?bc:d,p=n.rootBoundary,h=p===void 0?oa:p,g=n.elementContext,v=g===void 0?Io:g,C=n.altBoundary,y=C===void 0?!1:C,k=n.padding,w=k===void 0?0:k,T=aa(typeof w!="number"?w:la(w,nn)),E=v===Io?yc:Io,S=e.rects.popper,$=e.elements[y?E:v],P=Xc(co($)?$:$.contextElement||Zt(e.elements.popper),c,h,l),x=Co(e.elements.reference),A=da({reference:x,element:S,placement:i}),U=ar(Object.assign({},S,A)),O=v===Io?U:x,L={top:P.top-O.top+T.top,bottom:O.bottom-P.bottom+T.bottom,left:P.left-O.left+T.left,right:O.right-P.right+T.right},D=e.modifiersData.offset;if(v===Io&&D){var te=D[i];Object.keys(L).forEach(function(z){var B=[Rt,Tt].indexOf(z)>=0?1:-1,W=[pt,Tt].indexOf(z)>=0?"y":"x";L[z]+=te[W]*B})}return L}function Zc(e,o){o===void 0&&(o={});var n=o,r=n.placement,i=n.boundary,a=n.rootBoundary,l=n.padding,d=n.flipVariations,c=n.allowedAutoPlacements,p=c===void 0?na:c,h=ko(r),g=h?d?_r:_r.filter(function(y){return ko(y)===h}):nn,v=g.filter(function(y){return p.indexOf(y)>=0});v.length===0&&(v=g);var C=v.reduce(function(y,k){return y[k]=Jo(e,{placement:k,boundary:i,rootBoundary:a,padding:l})[jt(k)],y},{});return Object.keys(C).sort(function(y,k){return C[y]-C[k]})}function ed(e){if(jt(e)===$r)return[];var o=En(e);return[qr(e),o,qr(o)]}function td(e){var o=e.state,n=e.options,r=e.name;if(!o.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0?!0:i,l=n.altAxis,d=l===void 0?!0:l,c=n.fallbackPlacements,p=n.padding,h=n.boundary,g=n.rootBoundary,v=n.altBoundary,C=n.flipVariations,y=C===void 0?!0:C,k=n.allowedAutoPlacements,w=o.options.placement,T=jt(w),E=T===w,S=c||(E||!y?[En(w)]:ed(w)),$=[w].concat(S).reduce(function(Pe,H){return Pe.concat(jt(H)===$r?Zc(o,{placement:H,boundary:h,rootBoundary:g,padding:p,flipVariations:y,allowedAutoPlacements:k}):H)},[]),P=o.rects.reference,x=o.rects.popper,A=new Map,U=!0,O=$[0],L=0;L<$.length;L++){var D=$[L],te=jt(D),z=ko(D)===xo,B=[pt,Tt].indexOf(te)>=0,W=B?"width":"height",q=Jo(o,{placement:D,boundary:h,rootBoundary:g,altBoundary:v,padding:p}),re=B?z?Rt:ht:z?Tt:pt;P[W]>x[W]&&(re=En(re));var de=En(re),J=[];if(a&&J.push(q[te]<=0),d&&J.push(q[re]<=0,q[de]<=0),J.every(function(Pe){return Pe})){O=D,U=!1;break}A.set(D,J)}if(U)for(var Le=y?3:1,Be=function(H){var V=$.find(function(G){var j=A.get(G);if(j)return j.slice(0,H).every(function(ie){return ie})});if(V)return O=V,"break"},He=Le;He>0;He--){var Te=Be(He);if(Te==="break")break}o.placement!==O&&(o.modifiersData[r]._skip=!0,o.placement=O,o.reset=!0)}}const od={name:"flip",enabled:!0,phase:"main",fn:td,requiresIfExists:["offset"],data:{_skip:!1}};function Kr(e,o,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-o.height-n.y,right:e.right-o.width+n.x,bottom:e.bottom-o.height+n.y,left:e.left-o.width-n.x}}function Gr(e){return[pt,Rt,Tt,ht].some(function(o){return e[o]>=0})}function nd(e){var o=e.state,n=e.name,r=o.rects.reference,i=o.rects.popper,a=o.modifiersData.preventOverflow,l=Jo(o,{elementContext:"reference"}),d=Jo(o,{altBoundary:!0}),c=Kr(l,r),p=Kr(d,i,a),h=Gr(c),g=Gr(p);o.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:h,hasPopperEscaped:g},o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":g})}const rd={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:nd};function id(e,o,n){var r=jt(e),i=[ht,pt].indexOf(r)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},o,{placement:e})):n,l=a[0],d=a[1];return l=l||0,d=(d||0)*i,[ht,Rt].indexOf(r)>=0?{x:d,y:l}:{x:l,y:d}}function sd(e){var o=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,l=na.reduce(function(h,g){return h[g]=id(g,o.rects,a),h},{}),d=l[o.placement],c=d.x,p=d.y;o.modifiersData.popperOffsets!=null&&(o.modifiersData.popperOffsets.x+=c,o.modifiersData.popperOffsets.y+=p),o.modifiersData[r]=l}const ad={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:sd};function ld(e){var o=e.state,n=e.name;o.modifiersData[n]=da({reference:o.rects.reference,element:o.rects.popper,placement:o.placement})}const cd={name:"popperOffsets",enabled:!0,phase:"read",fn:ld,data:{}};function dd(e){return e==="x"?"y":"x"}function ud(e){var o=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0?!0:i,l=n.altAxis,d=l===void 0?!1:l,c=n.boundary,p=n.rootBoundary,h=n.altBoundary,g=n.padding,v=n.tether,C=v===void 0?!0:v,y=n.tetherOffset,k=y===void 0?0:y,w=Jo(o,{boundary:c,rootBoundary:p,padding:g,altBoundary:h}),T=jt(o.placement),E=ko(o.placement),S=!E,$=Sr(T),P=dd($),x=o.modifiersData.popperOffsets,A=o.rects.reference,U=o.rects.popper,O=typeof k=="function"?k(Object.assign({},o.rects,{placement:o.placement})):k,L=typeof O=="number"?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),D=o.modifiersData.offset?o.modifiersData.offset[o.placement]:null,te={x:0,y:0};if(x){if(a){var z,B=$==="y"?pt:ht,W=$==="y"?Tt:Rt,q=$==="y"?"height":"width",re=x[$],de=re+w[B],J=re-w[W],Le=C?-U[q]/2:0,Be=E===xo?A[q]:U[q],He=E===xo?-U[q]:-A[q],Te=o.elements.arrow,Pe=C&&Te?kr(Te):{width:0,height:0},H=o.modifiersData["arrow#persistent"]?o.modifiersData["arrow#persistent"].padding:sa(),V=H[B],G=H[W],j=Wo(0,A[q],Pe[q]),ie=S?A[q]/2-Le-j-V-L.mainAxis:Be-j-V-L.mainAxis,be=S?-A[q]/2+Le+j+G+L.mainAxis:He+j+G+L.mainAxis,ue=o.elements.arrow&&rn(o.elements.arrow),he=ue?$==="y"?ue.clientTop||0:ue.clientLeft||0:0,Ee=(z=D?.[$])!=null?z:0,Re=re+ie-Ee-he,ye=re+be-Ee,it=Wo(C?An(de,Re):de,re,C?lo(J,ye):J);x[$]=it,te[$]=it-re}if(d){var Ye,Qe=$==="x"?pt:ht,Et=$==="x"?Tt:Rt,Me=x[P],ot=P==="y"?"height":"width",mt=Me+w[Qe],wt=Me-w[Et],ft=[pt,ht].indexOf(T)!==-1,F=(Ye=D?.[P])!=null?Ye:0,Y=ft?mt:Me-A[ot]-U[ot]-F+L.altAxis,se=ft?Me+A[ot]+U[ot]-F-L.altAxis:wt,me=C&&ft?Oc(Y,Me,se):Wo(C?Y:mt,Me,C?se:wt);x[P]=me,te[P]=me-Me}o.modifiersData[r]=te}}const pd={name:"preventOverflow",enabled:!0,phase:"main",fn:ud,requiresIfExists:["offset"]};function hd(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function md(e){return e===yt(e)||!kt(e)?Tr(e):hd(e)}function fd(e){var o=e.getBoundingClientRect(),n=$o(o.width)/e.offsetWidth||1,r=$o(o.height)/e.offsetHeight||1;return n!==1||r!==1}function gd(e,o,n){n===void 0&&(n=!1);var r=kt(o),i=kt(o)&&fd(o),a=Zt(o),l=Co(e,i,n),d={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Dt(o)!=="body"||Er(a))&&(d=md(o)),kt(o)?(c=Co(o,!0),c.x+=o.clientLeft,c.y+=o.clientTop):a&&(c.x=Rr(a))),{x:l.left+d.scrollLeft-c.x,y:l.top+d.scrollTop-c.y,width:l.width,height:l.height}}function vd(e){var o=new Map,n=new Set,r=[];e.forEach(function(a){o.set(a.name,a)});function i(a){n.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(d){if(!n.has(d)){var c=o.get(d);c&&i(c)}}),r.push(a)}return e.forEach(function(a){n.has(a.name)||i(a)}),r}function bd(e){var o=vd(e);return Mc.reduce(function(n,r){return n.concat(o.filter(function(i){return i.phase===r}))},[])}function yd(e){var o;return function(){return o||(o=new Promise(function(n){Promise.resolve().then(function(){o=void 0,n(e())})})),o}}function wd(e){var o=e.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(o).map(function(n){return o[n]})}var Qr={placement:"bottom",modifiers:[],strategy:"absolute"};function Jr(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return!o.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function xd(e){e===void 0&&(e={});var o=e,n=o.defaultModifiers,r=n===void 0?[]:n,i=o.defaultOptions,a=i===void 0?Qr:i;return function(d,c,p){p===void 0&&(p=a);var h={placement:"bottom",orderedModifiers:[],options:Object.assign({},Qr,a),modifiersData:{},elements:{reference:d,popper:c},attributes:{},styles:{}},g=[],v=!1,C={state:h,setOptions:function(T){var E=typeof T=="function"?T(h.options):T;k(),h.options=Object.assign({},a,h.options,E),h.scrollParents={reference:co(d)?qo(d):d.contextElement?qo(d.contextElement):[],popper:qo(c)};var S=bd(wd([].concat(r,h.options.modifiers)));return h.orderedModifiers=S.filter(function($){return $.enabled}),y(),C.update()},forceUpdate:function(){if(!v){var T=h.elements,E=T.reference,S=T.popper;if(Jr(E,S)){h.rects={reference:gd(E,rn(S),h.options.strategy==="fixed"),popper:kr(S)},h.reset=!1,h.placement=h.options.placement,h.orderedModifiers.forEach(function(L){return h.modifiersData[L.name]=Object.assign({},L.data)});for(var $=0;$<h.orderedModifiers.length;$++){if(h.reset===!0){h.reset=!1,$=-1;continue}var P=h.orderedModifiers[$],x=P.fn,A=P.options,U=A===void 0?{}:A,O=P.name;typeof x=="function"&&(h=x({state:h,options:U,name:O,instance:C})||h)}}}},update:yd(function(){return new Promise(function(w){C.forceUpdate(),w(h)})}),destroy:function(){k(),v=!0}};if(!Jr(d,c))return C;C.setOptions(p).then(function(w){!v&&p.onFirstUpdate&&p.onFirstUpdate(w)});function y(){h.orderedModifiers.forEach(function(w){var T=w.name,E=w.options,S=E===void 0?{}:E,$=w.effect;if(typeof $=="function"){var P=$({state:h,name:T,instance:C,options:S}),x=function(){};g.push(P||x)}})}function k(){g.forEach(function(w){return w()}),g=[]}return C}}var $d=[qc,cd,Fc,Ac,ad,od,pd,Dc,rd],Cd=xd({defaultModifiers:$d});function kd(e){return ge("MuiPopper",e)}ve("MuiPopper",["root"]);const Sd=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Td=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Rd(e,o){if(o==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function lr(e){return typeof e=="function"?e():e}function Ed(e){return e.nodeType!==void 0}const Md=()=>pe({root:["root"]},fc(kd)),Pd={},Id=u.forwardRef(function(o,n){var r;const{anchorEl:i,children:a,direction:l,disablePortal:d,modifiers:c,open:p,placement:h,popperOptions:g,popperRef:v,slotProps:C={},slots:y={},TransitionProps:k}=o,w=ae(o,Sd),T=u.useRef(null),E=St(T,n),S=u.useRef(null),$=St(S,v),P=u.useRef($);wo(()=>{P.current=$},[$]),u.useImperativeHandle(v,()=>S.current,[]);const x=Rd(h,l),[A,U]=u.useState(x),[O,L]=u.useState(lr(i));u.useEffect(()=>{S.current&&S.current.forceUpdate()}),u.useEffect(()=>{i&&L(lr(i))},[i]),wo(()=>{if(!O||!p)return;const W=de=>{U(de.placement)};let q=[{name:"preventOverflow",options:{altBoundary:d}},{name:"flip",options:{altBoundary:d}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:de})=>{W(de)}}];c!=null&&(q=q.concat(c)),g&&g.modifiers!=null&&(q=q.concat(g.modifiers));const re=Cd(O,T.current,f({placement:x},g,{modifiers:q}));return P.current(re),()=>{re.destroy(),P.current(null)}},[O,d,c,p,g,x]);const D={placement:A};k!==null&&(D.TransitionProps=k);const te=Md(),z=(r=y.root)!=null?r:"div",B=ut({elementType:z,externalSlotProps:C.root,externalForwardedProps:w,additionalProps:{role:"tooltip",ref:E},ownerState:o,className:te.root});return R.jsx(z,f({},B,{children:typeof a=="function"?a(D):a}))}),Ad=u.forwardRef(function(o,n){const{anchorEl:r,children:i,container:a,direction:l="ltr",disablePortal:d=!1,keepMounted:c=!1,modifiers:p,open:h,placement:g="bottom",popperOptions:v=Pd,popperRef:C,style:y,transition:k=!1,slotProps:w={},slots:T={}}=o,E=ae(o,Td),[S,$]=u.useState(!0),P=()=>{$(!1)},x=()=>{$(!0)};if(!c&&!h&&(!k||S))return null;let A;if(a)A=a;else if(r){const L=lr(r);A=L&&Ed(L)?Nt(L).body:Nt(null).body}const U=!h&&c&&(!k||S)?"none":void 0,O=k?{in:h,onEnter:P,onExited:x}:void 0;return R.jsx(ol,{disablePortal:d,container:A,children:R.jsx(Id,f({anchorEl:r,direction:l,disablePortal:d,modifiers:p,ref:n,open:k?!S:h,placement:g,popperOptions:v,popperRef:C,slotProps:w,slots:T},E,{style:f({position:"fixed",top:0,left:0,display:U},y),TransitionProps:O,children:i}))})}),Nd=2;function ua(e,o){return e-o}function Ao(e,o,n){return e==null?o:Math.min(Math.max(o,e),n)}function Yr(e,o){var n;const{index:r}=(n=e.reduce((i,a,l)=>{const d=Math.abs(o-a);return i===null||d<i.distance||d===i.distance?{distance:d,index:l}:i},null))!=null?n:{};return r}function gn(e,o){if(o.current!==void 0&&e.changedTouches){const n=e;for(let r=0;r<n.changedTouches.length;r+=1){const i=n.changedTouches[r];if(i.identifier===o.current)return{x:i.clientX,y:i.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Nn(e,o,n){return(e-o)*100/(n-o)}function Vd(e,o,n){return(n-o)*e+o}function Od(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const o=e.toString().split(".")[1];return o?o.length:0}function Ld(e,o,n){const r=Math.round((e-n)/o)*o+n;return Number(r.toFixed(Od(o)))}function Xr({values:e,newValue:o,index:n}){const r=e.slice();return r[n]=o,r.sort(ua)}function vn({sliderRef:e,activeIndex:o,setActive:n}){var r,i;const a=Nt(e.current);if(!((r=e.current)!=null&&r.contains(a.activeElement))||Number(a==null||(i=a.activeElement)==null?void 0:i.getAttribute("data-index"))!==o){var l;(l=e.current)==null||l.querySelector(`[type="range"][data-index="${o}"]`).focus()}n&&n(o)}function bn(e,o){return typeof e=="number"&&typeof o=="number"?e===o:typeof e=="object"&&typeof o=="object"?pc(e,o):!1}const Bd={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},jd=e=>e;let yn;function Jn(){return yn===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?yn=CSS.supports("touch-action","none"):yn=!0),yn}function Dd(e){const{"aria-labelledby":o,defaultValue:n,disabled:r=!1,disableSwap:i=!1,isRtl:a=!1,marks:l=!1,max:d=100,min:c=0,name:p,onChange:h,onChangeCommitted:g,orientation:v="horizontal",rootRef:C,scale:y=jd,step:k=1,tabIndex:w,value:T}=e,E=u.useRef(),[S,$]=u.useState(-1),[P,x]=u.useState(-1),[A,U]=u.useState(!1),O=u.useRef(0),[L,D]=Xo({controlled:T,default:n??c,name:"Slider"}),te=h&&((F,Y,se)=>{const me=F.nativeEvent||F,Ue=new me.constructor(me.type,me);Object.defineProperty(Ue,"target",{writable:!0,value:{value:Y,name:p}}),h(Ue,Y,se)}),z=Array.isArray(L);let B=z?L.slice().sort(ua):[L];B=B.map(F=>Ao(F,c,d));const W=l===!0&&k!==null?[...Array(Math.floor((d-c)/k)+1)].map((F,Y)=>({value:c+k*Y})):l||[],q=W.map(F=>F.value),{isFocusVisibleRef:re,onBlur:de,onFocus:J,ref:Le}=gr(),[Be,He]=u.useState(-1),Te=u.useRef(),Pe=St(Le,Te),H=St(C,Pe),V=F=>Y=>{var se;const me=Number(Y.currentTarget.getAttribute("data-index"));J(Y),re.current===!0&&He(me),x(me),F==null||(se=F.onFocus)==null||se.call(F,Y)},G=F=>Y=>{var se;de(Y),re.current===!1&&He(-1),x(-1),F==null||(se=F.onBlur)==null||se.call(F,Y)};wo(()=>{if(r&&Te.current.contains(document.activeElement)){var F;(F=document.activeElement)==null||F.blur()}},[r]),r&&S!==-1&&$(-1),r&&Be!==-1&&He(-1);const j=F=>Y=>{var se;(se=F.onChange)==null||se.call(F,Y);const me=Number(Y.currentTarget.getAttribute("data-index")),Ue=B[me],_e=q.indexOf(Ue);let xe=Y.target.valueAsNumber;if(W&&k==null){const Ve=q[q.length-1];xe>Ve?xe=Ve:xe<q[0]?xe=q[0]:xe=xe<Ue?q[_e-1]:q[_e+1]}if(xe=Ao(xe,c,d),z){i&&(xe=Ao(xe,B[me-1]||-1/0,B[me+1]||1/0));const Ve=xe;xe=Xr({values:B,newValue:xe,index:me});let ze=me;i||(ze=xe.indexOf(Ve)),vn({sliderRef:Te,activeIndex:ze})}D(xe),He(me),te&&!bn(xe,L)&&te(Y,xe,me),g&&g(Y,xe)},ie=u.useRef();let be=v;a&&v==="horizontal"&&(be+="-reverse");const ue=({finger:F,move:Y=!1})=>{const{current:se}=Te,{width:me,height:Ue,bottom:_e,left:xe}=se.getBoundingClientRect();let Ve;be.indexOf("vertical")===0?Ve=(_e-F.y)/Ue:Ve=(F.x-xe)/me,be.indexOf("-reverse")!==-1&&(Ve=1-Ve);let ze;if(ze=Vd(Ve,c,d),k)ze=Ld(ze,k,c);else{const Q=Yr(q,ze);ze=q[Q]}ze=Ao(ze,c,d);let nt=0;if(z){Y?nt=ie.current:nt=Yr(B,ze),i&&(ze=Ao(ze,B[nt-1]||-1/0,B[nt+1]||1/0));const Q=ze;ze=Xr({values:B,newValue:ze,index:nt}),i&&Y||(nt=ze.indexOf(Q),ie.current=nt)}return{newValue:ze,activeIndex:nt}},he=Vt(F=>{const Y=gn(F,E);if(!Y)return;if(O.current+=1,F.type==="mousemove"&&F.buttons===0){Ee(F);return}const{newValue:se,activeIndex:me}=ue({finger:Y,move:!0});vn({sliderRef:Te,activeIndex:me,setActive:$}),D(se),!A&&O.current>Nd&&U(!0),te&&!bn(se,L)&&te(F,se,me)}),Ee=Vt(F=>{const Y=gn(F,E);if(U(!1),!Y)return;const{newValue:se}=ue({finger:Y,move:!0});$(-1),F.type==="touchend"&&x(-1),g&&g(F,se),E.current=void 0,ye()}),Re=Vt(F=>{if(r)return;Jn()||F.preventDefault();const Y=F.changedTouches[0];Y!=null&&(E.current=Y.identifier);const se=gn(F,E);if(se!==!1){const{newValue:Ue,activeIndex:_e}=ue({finger:se});vn({sliderRef:Te,activeIndex:_e,setActive:$}),D(Ue),te&&!bn(Ue,L)&&te(F,Ue,_e)}O.current=0;const me=Nt(Te.current);me.addEventListener("touchmove",he),me.addEventListener("touchend",Ee)}),ye=u.useCallback(()=>{const F=Nt(Te.current);F.removeEventListener("mousemove",he),F.removeEventListener("mouseup",Ee),F.removeEventListener("touchmove",he),F.removeEventListener("touchend",Ee)},[Ee,he]);u.useEffect(()=>{const{current:F}=Te;return F.addEventListener("touchstart",Re,{passive:Jn()}),()=>{F.removeEventListener("touchstart",Re,{passive:Jn()}),ye()}},[ye,Re]),u.useEffect(()=>{r&&ye()},[r,ye]);const it=F=>Y=>{var se;if((se=F.onMouseDown)==null||se.call(F,Y),r||Y.defaultPrevented||Y.button!==0)return;Y.preventDefault();const me=gn(Y,E);if(me!==!1){const{newValue:_e,activeIndex:xe}=ue({finger:me});vn({sliderRef:Te,activeIndex:xe,setActive:$}),D(_e),te&&!bn(_e,L)&&te(Y,_e,xe)}O.current=0;const Ue=Nt(Te.current);Ue.addEventListener("mousemove",he),Ue.addEventListener("mouseup",Ee)},Ye=Nn(z?B[0]:c,c,d),Qe=Nn(B[B.length-1],c,d)-Ye,Et=(F={})=>{const Y=Fo(F),se={onMouseDown:it(Y||{})},me=f({},Y,se);return f({},F,{ref:H},me)},Me=F=>Y=>{var se;(se=F.onMouseOver)==null||se.call(F,Y);const me=Number(Y.currentTarget.getAttribute("data-index"));x(me)},ot=F=>Y=>{var se;(se=F.onMouseLeave)==null||se.call(F,Y),x(-1)};return{active:S,axis:be,axisProps:Bd,dragging:A,focusedThumbIndex:Be,getHiddenInputProps:(F={})=>{var Y;const se=Fo(F),me={onChange:j(se||{}),onFocus:V(se||{}),onBlur:G(se||{})},Ue=f({},se,me);return f({tabIndex:w,"aria-labelledby":o,"aria-orientation":v,"aria-valuemax":y(d),"aria-valuemin":y(c),name:p,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(Y=e.step)!=null?Y:void 0,disabled:r},F,Ue,{style:f({},Pl,{direction:a?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Et,getThumbProps:(F={})=>{const Y=Fo(F),se={onMouseOver:Me(Y||{}),onMouseLeave:ot(Y||{})};return f({},F,Y,se)},marks:W,open:P,range:z,rootRef:H,trackLeap:Qe,trackOffset:Ye,values:B,getThumbStyle:F=>({pointerEvents:S!==-1&&S!==F?"none":void 0})}}function Ud(e={}){const{autoHideDuration:o=null,disableWindowBlurListener:n=!1,onClose:r,open:i,resumeHideDuration:a}=e,l=u.useRef();u.useEffect(()=>{if(!i)return;function T(E){E.defaultPrevented||(E.key==="Escape"||E.key==="Esc")&&r?.(E,"escapeKeyDown")}return document.addEventListener("keydown",T),()=>{document.removeEventListener("keydown",T)}},[i,r]);const d=Vt((T,E)=>{r?.(T,E)}),c=Vt(T=>{!r||T==null||(clearTimeout(l.current),l.current=setTimeout(()=>{d(null,"timeout")},T))});u.useEffect(()=>(i&&c(o),()=>{clearTimeout(l.current)}),[i,o,c]);const p=T=>{r?.(T,"clickaway")},h=()=>{clearTimeout(l.current)},g=u.useCallback(()=>{o!=null&&c(a??o*.5)},[o,a,c]),v=T=>E=>{const S=T.onBlur;S?.(E),g()},C=T=>E=>{const S=T.onFocus;S?.(E),h()},y=T=>E=>{const S=T.onMouseEnter;S?.(E),h()},k=T=>E=>{const S=T.onMouseLeave;S?.(E),g()};return u.useEffect(()=>{if(!n&&i)return window.addEventListener("focus",g),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",h)}},[n,g,i]),{getRootProps:(T={})=>{const E=f({},Fo(e),Fo(T));return f({role:"presentation"},T,E,{onBlur:v(E),onFocus:C(E),onMouseEnter:y(E),onMouseLeave:k(E)})},onClickAway:p}}const zd=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],_d=K(Ad,{name:"MuiPopper",slot:"Root",overridesResolver:(e,o)=>o.root})({}),pa=u.forwardRef(function(o,n){var r;const i=nl(),a=fe({props:o,name:"MuiPopper"}),{anchorEl:l,component:d,components:c,componentsProps:p,container:h,disablePortal:g,keepMounted:v,modifiers:C,open:y,placement:k,popperOptions:w,popperRef:T,transition:E,slots:S,slotProps:$}=a,P=ae(a,zd),x=(r=S?.root)!=null?r:c?.Root,A=f({anchorEl:l,container:h,disablePortal:g,keepMounted:v,modifiers:C,open:y,placement:k,popperOptions:w,popperRef:T,transition:E},P);return R.jsx(_d,f({as:d,direction:i?.direction,slots:{root:x},slotProps:$??p},A,{ref:n}))});function Fd(e){return ge("MuiListSubheader",e)}ve("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const Wd=["className","color","component","disableGutters","disableSticky","inset"],qd=e=>{const{classes:o,color:n,disableGutters:r,inset:i,disableSticky:a}=e,l={root:["root",n!=="default"&&`color${_(n)}`,!r&&"gutters",i&&"inset",!a&&"sticky"]};return pe(l,Fd,o)},Hd=K("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.color!=="default"&&o[`color${_(n.color)}`],!n.disableGutters&&o.gutters,n.inset&&o.inset,!n.disableSticky&&o.sticky]}})(({theme:e,ownerState:o})=>f({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},o.color==="primary"&&{color:(e.vars||e).palette.primary.main},o.color==="inherit"&&{color:"inherit"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.inset&&{paddingLeft:72},!o.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})),cr=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiListSubheader"}),{className:i,color:a="default",component:l="li",disableGutters:d=!1,disableSticky:c=!1,inset:p=!1}=r,h=ae(r,Wd),g=f({},r,{color:a,component:l,disableGutters:d,disableSticky:c,inset:p}),v=qd(g);return R.jsx(Hd,f({as:l,className:oe(v.root,i),ref:n,ownerState:g},h))});cr.muiSkipListHighlight=!0;const Kd=je(R.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function Gd(e){return ge("MuiChip",e)}const Ie=ve("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),Qd=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],Jd=e=>{const{classes:o,disabled:n,size:r,color:i,iconColor:a,onDelete:l,clickable:d,variant:c}=e,p={root:["root",c,n&&"disabled",`size${_(r)}`,`color${_(i)}`,d&&"clickable",d&&`clickableColor${_(i)}`,l&&"deletable",l&&`deletableColor${_(i)}`,`${c}${_(i)}`],label:["label",`label${_(r)}`],avatar:["avatar",`avatar${_(r)}`,`avatarColor${_(i)}`],icon:["icon",`icon${_(r)}`,`iconColor${_(a)}`],deleteIcon:["deleteIcon",`deleteIcon${_(r)}`,`deleteIconColor${_(i)}`,`deleteIcon${_(c)}Color${_(i)}`]};return pe(p,Gd,o)},Yd=K("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e,{color:r,iconColor:i,clickable:a,onDelete:l,size:d,variant:c}=n;return[{[`& .${Ie.avatar}`]:o.avatar},{[`& .${Ie.avatar}`]:o[`avatar${_(d)}`]},{[`& .${Ie.avatar}`]:o[`avatarColor${_(r)}`]},{[`& .${Ie.icon}`]:o.icon},{[`& .${Ie.icon}`]:o[`icon${_(d)}`]},{[`& .${Ie.icon}`]:o[`iconColor${_(i)}`]},{[`& .${Ie.deleteIcon}`]:o.deleteIcon},{[`& .${Ie.deleteIcon}`]:o[`deleteIcon${_(d)}`]},{[`& .${Ie.deleteIcon}`]:o[`deleteIconColor${_(r)}`]},{[`& .${Ie.deleteIcon}`]:o[`deleteIcon${_(c)}Color${_(r)}`]},o.root,o[`size${_(d)}`],o[`color${_(r)}`],a&&o.clickable,a&&r!=="default"&&o[`clickableColor${_(r)})`],l&&o.deletable,l&&r!=="default"&&o[`deletableColor${_(r)}`],o[c],o[`${c}${_(r)}`]]}})(({theme:e,ownerState:o})=>{const n=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return f({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${Ie.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${Ie.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:n,fontSize:e.typography.pxToRem(12)},[`& .${Ie.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${Ie.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${Ie.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${Ie.icon}`]:f({marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&f({color:e.vars?e.vars.palette.Chip.defaultIconColor:n},o.color!=="default"&&{color:"inherit"})),[`& .${Ie.deleteIcon}`]:f({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:Ge(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:Ge(e.palette.text.primary,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[o.color].contrastTextChannel} / 0.7)`:Ge(e.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(e.vars||e).palette[o.color].main,color:(e.vars||e).palette[o.color].contrastText},o.onDelete&&{[`&.${Ie.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Ge(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${Ie.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}})},({theme:e,ownerState:o})=>f({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Ge(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${Ie.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Ge(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${Ie.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}}),({theme:e,ownerState:o})=>f({},o.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${Ie.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${Ie.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${Ie.avatar}`]:{marginLeft:4},[`& .${Ie.avatarSmall}`]:{marginLeft:2},[`& .${Ie.icon}`]:{marginLeft:4},[`& .${Ie.iconSmall}`]:{marginLeft:2},[`& .${Ie.deleteIcon}`]:{marginRight:5},[`& .${Ie.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(e.vars||e).palette[o.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:Ge(e.palette[o.color].main,.7)}`,[`&.${Ie.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ge(e.palette[o.color].main,e.palette.action.hoverOpacity)},[`&.${Ie.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:Ge(e.palette[o.color].main,e.palette.action.focusOpacity)},[`& .${Ie.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:Ge(e.palette[o.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].main}}})),Xd=K("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,o)=>{const{ownerState:n}=e,{size:r}=n;return[o.label,o[`label${_(r)}`]]}})(({ownerState:e})=>f({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.variant==="outlined"&&{paddingLeft:11,paddingRight:11},e.size==="small"&&{paddingLeft:8,paddingRight:8},e.size==="small"&&e.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function Zr(e){return e.key==="Backspace"||e.key==="Delete"}const De=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiChip"}),{avatar:i,className:a,clickable:l,color:d="default",component:c,deleteIcon:p,disabled:h=!1,icon:g,label:v,onClick:C,onDelete:y,onKeyDown:k,onKeyUp:w,size:T="medium",variant:E="filled",tabIndex:S,skipFocusWhenDisabled:$=!1}=r,P=ae(r,Qd),x=u.useRef(null),A=St(x,n),U=J=>{J.stopPropagation(),y&&y(J)},O=J=>{J.currentTarget===J.target&&Zr(J)&&J.preventDefault(),k&&k(J)},L=J=>{J.currentTarget===J.target&&(y&&Zr(J)?y(J):J.key==="Escape"&&x.current&&x.current.blur()),w&&w(J)},D=l!==!1&&C?!0:l,te=D||y?Jt:c||"div",z=f({},r,{component:te,disabled:h,size:T,color:d,iconColor:u.isValidElement(g)&&g.props.color||d,onDelete:!!y,clickable:D,variant:E}),B=Jd(z),W=te===Jt?f({component:c||"div",focusVisibleClassName:B.focusVisible},y&&{disableRipple:!0}):{};let q=null;y&&(q=p&&u.isValidElement(p)?u.cloneElement(p,{className:oe(p.props.className,B.deleteIcon),onClick:U}):R.jsx(Kd,{className:oe(B.deleteIcon),onClick:U}));let re=null;i&&u.isValidElement(i)&&(re=u.cloneElement(i,{className:oe(B.avatar,i.props.className)}));let de=null;return g&&u.isValidElement(g)&&(de=u.cloneElement(g,{className:oe(B.icon,g.props.className)})),R.jsxs(Yd,f({as:te,className:oe(B.root,a),disabled:D&&h?!0:void 0,onClick:C,onKeyDown:O,onKeyUp:L,ref:A,tabIndex:$&&h?-1:S,ownerState:z},W,P,{children:[re||de,R.jsx(Xd,{className:oe(B.label),ownerState:z,children:v}),q]}))});function Zd(e){return ge("MuiBottomNavigation",e)}ve("MuiBottomNavigation",["root"]);const eu=["children","className","component","onChange","showLabels","value"],tu=e=>{const{classes:o}=e;return pe({root:["root"]},Zd,o)},ou=K("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(e.vars||e).palette.background.paper})),nu=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiBottomNavigation"}),{children:i,className:a,component:l="div",onChange:d,showLabels:c=!1,value:p}=r,h=ae(r,eu),g=f({},r,{component:l,showLabels:c}),v=tu(g);return R.jsx(ou,f({as:l,className:oe(v.root,a),ref:n,ownerState:g},h,{children:u.Children.map(i,(C,y)=>{if(!u.isValidElement(C))return null;const k=C.props.value===void 0?y:C.props.value;return u.cloneElement(C,{selected:k===p,showLabel:C.props.showLabel!==void 0?C.props.showLabel:c,value:k,onChange:d})})}))});function ru(e){return ge("MuiBottomNavigationAction",e)}const ha=ve("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),iu=["className","icon","label","onChange","onClick","selected","showLabel","value"],su=e=>{const{classes:o,showLabel:n,selected:r}=e;return pe({root:["root",!n&&!r&&"iconOnly",r&&"selected"],label:["label",!n&&!r&&"iconOnly",r&&"selected"]},ru,o)},au=K(Jt,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,!n.showLabel&&!n.selected&&o.iconOnly]}})(({theme:e,ownerState:o})=>f({transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(e.vars||e).palette.text.secondary,flexDirection:"column",flex:"1"},!o.showLabel&&!o.selected&&{paddingTop:14},!o.showLabel&&!o.selected&&!o.label&&{paddingTop:0},{[`&.${ha.selected}`]:{color:(e.vars||e).palette.primary.main}})),lu=K("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(e,o)=>o.label})(({theme:e,ownerState:o})=>f({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!o.showLabel&&!o.selected&&{opacity:0,transitionDelay:"0s"},{[`&.${ha.selected}`]:{fontSize:e.typography.pxToRem(14)}})),ei=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiBottomNavigationAction"}),{className:i,icon:a,label:l,onChange:d,onClick:c,value:p}=r,h=ae(r,iu),g=r,v=su(g),C=y=>{d&&d(y,p),c&&c(y)};return R.jsxs(au,f({ref:n,className:oe(v.root,i),focusRipple:!0,onClick:C,ownerState:g},h,{children:[a,R.jsx(lu,{className:v.label,ownerState:g,children:l})]}))});function cu(e){return ge("MuiCard",e)}ve("MuiCard",["root"]);const du=["className","raised"],uu=e=>{const{classes:o}=e;return pe({root:["root"]},cu,o)},pu=K(jn,{name:"MuiCard",slot:"Root",overridesResolver:(e,o)=>o.root})(()=>({overflow:"hidden"})),Mr=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiCard"}),{className:i,raised:a=!1}=r,l=ae(r,du),d=f({},r,{raised:a}),c=uu(d);return R.jsx(pu,f({className:oe(c.root,i),elevation:a?8:void 0,ref:n,ownerState:d},l))});function hu(e){return ge("PrivateSwitchBase",e)}ve("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const mu=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],fu=e=>{const{classes:o,checked:n,disabled:r,edge:i}=e,a={root:["root",n&&"checked",r&&"disabled",i&&`edge${_(i)}`],input:["input"]};return pe(a,hu,o)},gu=K(Jt)(({ownerState:e})=>f({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),vu=K("input",{shouldForwardProp:Un})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),bu=u.forwardRef(function(o,n){const{autoFocus:r,checked:i,checkedIcon:a,className:l,defaultChecked:d,disabled:c,disableFocusRipple:p=!1,edge:h=!1,icon:g,id:v,inputProps:C,inputRef:y,name:k,onBlur:w,onChange:T,onFocus:E,readOnly:S,required:$=!1,tabIndex:P,type:x,value:A}=o,U=ae(o,mu),[O,L]=Xo({controlled:i,default:!!d,name:"SwitchBase",state:"checked"}),D=Dn(),te=J=>{E&&E(J),D&&D.onFocus&&D.onFocus(J)},z=J=>{w&&w(J),D&&D.onBlur&&D.onBlur(J)},B=J=>{if(J.nativeEvent.defaultPrevented)return;const Le=J.target.checked;L(Le),T&&T(J,Le)};let W=c;D&&typeof W>"u"&&(W=D.disabled);const q=x==="checkbox"||x==="radio",re=f({},o,{checked:O,disabled:W,disableFocusRipple:p,edge:h}),de=fu(re);return R.jsxs(gu,f({component:"span",className:oe(de.root,l),centerRipple:!0,focusRipple:!p,disabled:W,tabIndex:null,role:void 0,onFocus:te,onBlur:z,ownerState:re,ref:n},U,{children:[R.jsx(vu,f({autoFocus:r,checked:i,defaultChecked:d,className:de.input,disabled:W,id:q?v:void 0,name:k,onChange:B,readOnly:S,ref:y,required:$,ownerState:re,tabIndex:P,type:x},x==="checkbox"&&A===void 0?{}:{value:A},C)),O?a:g]}))});function yu(e){return ge("MuiFab",e)}const ti=ve("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),wu=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],xu=e=>{const{color:o,variant:n,classes:r,size:i}=e,a={root:["root",n,`size${_(i)}`,o==="inherit"?"colorInherit":o]},l=pe(a,yu,r);return f({},r,l)},$u=K(Jt,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>Un(e)||e==="classes",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`size${_(n.size)}`],n.color==="inherit"&&o.colorInherit,o[_(n.size)],o[n.color]]}})(({theme:e,ownerState:o})=>{var n,r;return f({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:(n=(r=e.palette).getContrastText)==null?void 0:n.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${ti.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},o.size==="small"&&{width:40,height:40},o.size==="medium"&&{width:48,height:48},o.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},o.variant==="extended"&&o.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},o.variant==="extended"&&o.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},o.color==="inherit"&&{color:"inherit"})},({theme:e,ownerState:o})=>f({},o.color!=="inherit"&&o.color!=="default"&&(e.vars||e).palette[o.color]!=null&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}}),({theme:e})=>({[`&.${ti.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),ma=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiFab"}),{children:i,className:a,color:l="default",component:d="button",disabled:c=!1,disableFocusRipple:p=!1,focusVisibleClassName:h,size:g="large",variant:v="circular"}=r,C=ae(r,wu),y=f({},r,{color:l,component:d,disabled:c,disableFocusRipple:p,size:g,variant:v}),k=xu(y);return R.jsx($u,f({className:oe(k.root,a),component:d,disabled:c,focusRipple:!p,focusVisibleClassName:oe(k.focusVisible,h),ownerState:y,ref:n},C,{classes:k,children:i}))});function Cu(e){return ge("MuiFormControl",e)}ve("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const ku=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Su=e=>{const{classes:o,margin:n,fullWidth:r}=e,i={root:["root",n!=="none"&&`margin${_(n)}`,r&&"fullWidth"]};return pe(i,Cu,o)},Tu=K("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},o)=>f({},o.root,o[`margin${_(e.margin)}`],e.fullWidth&&o.fullWidth)})(({ownerState:e})=>f({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),fa=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiFormControl"}),{children:i,className:a,color:l="primary",component:d="div",disabled:c=!1,error:p=!1,focused:h,fullWidth:g=!1,hiddenLabel:v=!1,margin:C="none",required:y=!1,size:k="medium",variant:w="outlined"}=r,T=ae(r,ku),E=f({},r,{color:l,component:d,disabled:c,error:p,fullWidth:g,hiddenLabel:v,margin:C,required:y,size:k,variant:w}),S=Su(E),[$,P]=u.useState(()=>{let z=!1;return i&&u.Children.forEach(i,B=>{if(!yo(B,["Input","Select"]))return;const W=yo(B,["Select"])?B.props.input:B;W&&rl(W.props)&&(z=!0)}),z}),[x,A]=u.useState(()=>{let z=!1;return i&&u.Children.forEach(i,B=>{yo(B,["Input","Select"])&&(Vr(B.props,!0)||Vr(B.props.inputProps,!0))&&(z=!0)}),z}),[U,O]=u.useState(!1);c&&U&&O(!1);const L=h!==void 0&&!c?h:U;let D;const te=u.useMemo(()=>({adornedStart:$,setAdornedStart:P,color:l,disabled:c,error:p,filled:x,focused:L,fullWidth:g,hiddenLabel:v,size:k,onBlur:()=>{O(!1)},onEmpty:()=>{A(!1)},onFilled:()=>{A(!0)},onFocus:()=>{O(!0)},registerEffect:D,required:y,variant:w}),[$,l,c,p,x,L,g,v,D,y,k,w]);return R.jsx(il.Provider,{value:te,children:R.jsx(Tu,f({as:d,ownerState:E,className:oe(S.root,a),ref:n},T,{children:i}))})}),Ru=Dl({createStyledComponent:K("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>fe({props:e,name:"MuiStack"})});function Eu(e){return ge("MuiFormHelperText",e)}const oi=ve("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var ni;const Mu=["children","className","component","disabled","error","filled","focused","margin","required","variant"],Pu=e=>{const{classes:o,contained:n,size:r,disabled:i,error:a,filled:l,focused:d,required:c}=e,p={root:["root",i&&"disabled",a&&"error",r&&`size${_(r)}`,n&&"contained",d&&"focused",l&&"filled",c&&"required"]};return pe(p,Eu,o)},Iu=K("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.size&&o[`size${_(n.size)}`],n.contained&&o.contained,n.filled&&o.filled]}})(({theme:e,ownerState:o})=>f({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${oi.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${oi.error}`]:{color:(e.vars||e).palette.error.main}},o.size==="small"&&{marginTop:4},o.contained&&{marginLeft:14,marginRight:14})),Au=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiFormHelperText"}),{children:i,className:a,component:l="p"}=r,d=ae(r,Mu),c=Dn(),p=vr({props:r,muiFormControl:c,states:["variant","size","disabled","error","filled","focused","required"]}),h=f({},r,{component:l,contained:p.variant==="filled"||p.variant==="outlined",variant:p.variant,size:p.size,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),g=Pu(h);return R.jsx(Iu,f({as:l,ownerState:h,className:oe(g.root,a),ref:n},d,{children:i===" "?ni||(ni=R.jsx("span",{className:"notranslate",children:"​"})):i}))});function Nu(e){return ge("MuiFormLabel",e)}const Ho=ve("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Vu=["children","className","color","component","disabled","error","filled","focused","required"],Ou=e=>{const{classes:o,color:n,focused:r,disabled:i,error:a,filled:l,required:d}=e,c={root:["root",`color${_(n)}`,i&&"disabled",a&&"error",l&&"filled",r&&"focused",d&&"required"],asterisk:["asterisk",a&&"error"]};return pe(c,Nu,o)},Lu=K("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},o)=>f({},o.root,e.color==="secondary"&&o.colorSecondary,e.filled&&o.filled)})(({theme:e,ownerState:o})=>f({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Ho.focused}`]:{color:(e.vars||e).palette[o.color].main},[`&.${Ho.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Ho.error}`]:{color:(e.vars||e).palette.error.main}})),Bu=K("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${Ho.error}`]:{color:(e.vars||e).palette.error.main}})),ju=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiFormLabel"}),{children:i,className:a,component:l="label"}=r,d=ae(r,Vu),c=Dn(),p=vr({props:r,muiFormControl:c,states:["color","required","focused","disabled","error","filled"]}),h=f({},r,{color:p.color||"primary",component:l,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),g=Ou(h);return R.jsxs(Lu,f({as:l,ownerState:h,className:oe(g.root,a),ref:n},d,{children:[i,p.required&&R.jsxs(Bu,{ownerState:h,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}))});function Du(e){return ge("MuiInputLabel",e)}ve("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const Uu=["disableAnimation","margin","shrink","variant","className"],zu=e=>{const{classes:o,formControl:n,size:r,shrink:i,disableAnimation:a,variant:l,required:d}=e,c={root:["root",n&&"formControl",!a&&"animated",i&&"shrink",r&&r!=="normal"&&`size${_(r)}`,l],asterisk:[d&&"asterisk"]},p=pe(c,Du,o);return f({},o,p)},_u=K(ju,{shouldForwardProp:e=>Un(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${Ho.asterisk}`]:o.asterisk},o.root,n.formControl&&o.formControl,n.size==="small"&&o.sizeSmall,n.shrink&&o.shrink,!n.disableAnimation&&o.animated,n.focused&&o.focused,o[n.variant]]}})(({theme:e,ownerState:o})=>f({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},o.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},o.size==="small"&&{transform:"translate(0, 17px) scale(1)"},o.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!o.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},o.variant==="filled"&&f({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},o.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},o.shrink&&f({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},o.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),o.variant==="outlined"&&f({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},o.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},o.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),ga=u.forwardRef(function(o,n){const r=fe({name:"MuiInputLabel",props:o}),{disableAnimation:i=!1,shrink:a,className:l}=r,d=ae(r,Uu),c=Dn();let p=a;typeof p>"u"&&c&&(p=c.filled||c.focused||c.adornedStart);const h=vr({props:r,muiFormControl:c,states:["size","variant","required","focused"]}),g=f({},r,{disableAnimation:i,formControl:c,shrink:p,size:h.size,variant:h.variant,required:h.required,focused:h.focused}),v=zu(g);return R.jsx(_u,f({"data-shrink":p,ownerState:g,ref:n,className:oe(v.root,l)},d,{classes:v}))});function Fu(e){return ge("MuiListItemButton",e)}const No=ve("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Wu=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],qu=(e,o)=>{const{ownerState:n}=e;return[o.root,n.dense&&o.dense,n.alignItems==="flex-start"&&o.alignItemsFlexStart,n.divider&&o.divider,!n.disableGutters&&o.gutters]},Hu=e=>{const{alignItems:o,classes:n,dense:r,disabled:i,disableGutters:a,divider:l,selected:d}=e,p=pe({root:["root",r&&"dense",!a&&"gutters",l&&"divider",i&&"disabled",o==="flex-start"&&"alignItemsFlexStart",d&&"selected"]},Fu,n);return f({},n,p)},Ku=K(Jt,{shouldForwardProp:e=>Un(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:qu})(({theme:e,ownerState:o})=>f({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${No.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${No.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${No.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${No.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${No.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},o.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},o.alignItems==="flex-start"&&{alignItems:"flex-start"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.dense&&{paddingTop:4,paddingBottom:4})),Fe=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:a=!1,component:l="div",children:d,dense:c=!1,disableGutters:p=!1,divider:h=!1,focusVisibleClassName:g,selected:v=!1,className:C}=r,y=ae(r,Wu),k=u.useContext(Pn),w=u.useMemo(()=>({dense:c||k.dense||!1,alignItems:i,disableGutters:p}),[i,k.dense,c,p]),T=u.useRef(null);wo(()=>{a&&T.current&&T.current.focus()},[a]);const E=f({},r,{alignItems:i,dense:w.dense,disableGutters:p,divider:h,selected:v}),S=Hu(E),$=St(T,n);return R.jsx(Pn.Provider,{value:w,children:R.jsx(Ku,f({ref:$,href:y.href||y.to,component:(y.href||y.to)&&l==="div"?"button":l,focusVisibleClassName:oe(S.focusVisible,g),ownerState:E,className:oe(S.root,C)},y,{classes:S,children:d}))})}),Gu=["className"],Qu=e=>{const{alignItems:o,classes:n}=e;return pe({root:["root",o==="flex-start"&&"alignItemsFlexStart"]},sl,n)},Ju=K("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.alignItems==="flex-start"&&o.alignItemsFlexStart]}})(({theme:e,ownerState:o})=>f({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},o.alignItems==="flex-start"&&{marginTop:8})),We=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiListItemIcon"}),{className:i}=r,a=ae(r,Gu),l=u.useContext(Pn),d=f({},r,{alignItems:l.alignItems}),c=Qu(d);return R.jsx(Ju,f({className:oe(c.root,i),ownerState:d,ref:n},a))}),Yu=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Xu=e=>{const{classes:o,inset:n,primary:r,secondary:i,dense:a}=e;return pe({root:["root",n&&"inset",a&&"dense",r&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},al,o)},Zu=K("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${Or.primary}`]:o.primary},{[`& .${Or.secondary}`]:o.secondary},o.root,n.inset&&o.inset,n.primary&&n.secondary&&o.multiline,n.dense&&o.dense]}})(({ownerState:e})=>f({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),qe=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiListItemText"}),{children:i,className:a,disableTypography:l=!1,inset:d=!1,primary:c,primaryTypographyProps:p,secondary:h,secondaryTypographyProps:g}=r,v=ae(r,Yu),{dense:C}=u.useContext(Pn);let y=c??i,k=h;const w=f({},r,{disableTypography:l,inset:d,primary:!!y,secondary:!!k,dense:C}),T=Xu(w);return y!=null&&y.type!==bt&&!l&&(y=R.jsx(bt,f({variant:C?"body2":"body1",className:T.primary,component:p!=null&&p.variant?void 0:"span",display:"block"},p,{children:y}))),k!=null&&k.type!==bt&&!l&&(k=R.jsx(bt,f({variant:"body2",className:T.secondary,color:"text.secondary",display:"block"},g,{children:k}))),R.jsxs(Zu,f({className:oe(T.root,a),ownerState:w,ref:n},v,{children:[y,k]}))}),ep=e=>!e||!Rn(e);function tp(e){return ge("MuiSlider",e)}const At=ve("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),op=e=>{const{open:o}=e;return{offset:oe(o&&At.valueLabelOpen),circle:At.valueLabelCircle,label:At.valueLabelLabel}};function np(e){const{children:o,className:n,value:r}=e,i=op(e);return o?u.cloneElement(o,{className:oe(o.props.className)},R.jsxs(u.Fragment,{children:[o.props.children,R.jsx("span",{className:oe(i.offset,n),"aria-hidden":!0,children:R.jsx("span",{className:i.circle,children:R.jsx("span",{className:i.label,children:r})})})]})):null}const rp=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function ri(e){return e}const ip=K("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`color${_(n.color)}`],n.size!=="medium"&&o[`size${_(n.size)}`],n.marked&&o.marked,n.orientation==="vertical"&&o.vertical,n.track==="inverted"&&o.trackInverted,n.track===!1&&o.trackFalse]}})(({theme:e,ownerState:o})=>f({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[o.color].main,WebkitTapHighlightColor:"transparent"},o.orientation==="horizontal"&&f({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},o.size==="small"&&{height:2},o.marked&&{marginBottom:20}),o.orientation==="vertical"&&f({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},o.size==="small"&&{width:2},o.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${At.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${At.dragging}`]:{[`& .${At.thumb}, & .${At.track}`]:{transition:"none"}}})),sp=K("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,o)=>o.rail})(({ownerState:e})=>f({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),ap=K("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,o)=>o.track})(({theme:e,ownerState:o})=>{const n=e.palette.mode==="light"?Go(e.palette[o.color].main,.62):Ko(e.palette[o.color].main,.5);return f({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},o.size==="small"&&{border:"none"},o.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},o.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},o.track===!1&&{display:"none"},o.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${o.color}Track`]:n,borderColor:e.vars?e.vars.palette.Slider[`${o.color}Track`]:n})}),lp=K("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.thumb,o[`thumbColor${_(n.color)}`],n.size!=="medium"&&o[`thumbSize${_(n.size)}`]]}})(({theme:e,ownerState:o})=>f({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},o.size==="small"&&{width:12,height:12},o.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},o.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":f({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},o.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${At.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.16)`:Ge(e.palette[o.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${At.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.16)`:Ge(e.palette[o.color].main,.16)}`},[`&.${At.disabled}`]:{"&:hover":{boxShadow:"none"}}})),cp=K(np,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,o)=>o.valueLabel})(({theme:e,ownerState:o})=>f({[`&.${At.valueLabelOpen}`]:{transform:`${o.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(1)`},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:`${o.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(0)`,position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},o.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},o.orientation==="vertical"&&{right:o.size==="small"?"20px":"30px",top:"50%",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},o.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),dp=K("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Hs(e)&&e!=="markActive",overridesResolver:(e,o)=>{const{markActive:n}=e;return[o.mark,n&&o.markActive]}})(({theme:e,ownerState:o,markActive:n})=>f({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},o.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},o.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},n&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),up=K("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Hs(e)&&e!=="markLabelActive",overridesResolver:(e,o)=>o.markLabel})(({theme:e,ownerState:o,markLabelActive:n})=>f({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},o.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},o.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},n&&{color:(e.vars||e).palette.text.primary})),pp=e=>{const{disabled:o,dragging:n,marked:r,orientation:i,track:a,classes:l,color:d,size:c}=e,p={root:["root",o&&"disabled",n&&"dragging",r&&"marked",i==="vertical"&&"vertical",a==="inverted"&&"trackInverted",a===!1&&"trackFalse",d&&`color${_(d)}`,c&&`size${_(c)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",o&&"disabled",c&&`thumbSize${_(c)}`,d&&`thumbColor${_(d)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return pe(p,tp,l)},hp=({children:e})=>e,ii=u.forwardRef(function(o,n){var r,i,a,l,d,c,p,h,g,v,C,y,k,w,T,E,S,$,P,x,A,U,O,L;const D=fe({props:o,name:"MuiSlider"}),z=Yt().direction==="rtl",{"aria-label":B,"aria-valuetext":W,"aria-labelledby":q,component:re="span",components:de={},componentsProps:J={},color:Le="primary",classes:Be,className:He,disableSwap:Te=!1,disabled:Pe=!1,getAriaLabel:H,getAriaValueText:V,marks:G=!1,max:j=100,min:ie=0,orientation:be="horizontal",size:ue="medium",step:he=1,scale:Ee=ri,slotProps:Re,slots:ye,track:it="normal",valueLabelDisplay:Ye="off",valueLabelFormat:Qe=ri}=D,Et=ae(D,rp),Me=f({},D,{isRtl:z,max:j,min:ie,classes:Be,disabled:Pe,disableSwap:Te,orientation:be,marks:G,color:Le,size:ue,step:he,scale:Ee,track:it,valueLabelDisplay:Ye,valueLabelFormat:Qe}),{axisProps:ot,getRootProps:mt,getHiddenInputProps:wt,getThumbProps:ft,open:F,active:Y,axis:se,focusedThumbIndex:me,range:Ue,dragging:_e,marks:xe,values:Ve,trackOffset:ze,trackLeap:nt,getThumbStyle:Q}=Dd(f({},Me,{rootRef:n}));Me.marked=xe.length>0&&xe.some(Je=>Je.label),Me.dragging=_e,Me.focusedThumbIndex=me;const X=pp(Me),$e=(r=(i=ye?.root)!=null?i:de.Root)!=null?r:ip,we=(a=(l=ye?.rail)!=null?l:de.Rail)!=null?a:sp,Ke=(d=(c=ye?.track)!=null?c:de.Track)!=null?d:ap,Xe=(p=(h=ye?.thumb)!=null?h:de.Thumb)!=null?p:lp,st=(g=(v=ye?.valueLabel)!=null?v:de.ValueLabel)!=null?g:cp,xt=(C=(y=ye?.mark)!=null?y:de.Mark)!=null?C:dp,at=(k=(w=ye?.markLabel)!=null?w:de.MarkLabel)!=null?k:up,zt=(T=(E=ye?.input)!=null?E:de.Input)!=null?T:"input",po=(S=Re?.root)!=null?S:J.root,dn=($=Re?.rail)!=null?$:J.rail,ho=(P=Re?.track)!=null?P:J.track,Ro=(x=Re?.thumb)!=null?x:J.thumb,Eo=(A=Re?.valueLabel)!=null?A:J.valueLabel,Hn=(U=Re?.mark)!=null?U:J.mark,Mo=(O=Re?.markLabel)!=null?O:J.markLabel,Kn=(L=Re?.input)!=null?L:J.input,eo=ut({elementType:$e,getSlotProps:mt,externalSlotProps:po,externalForwardedProps:Et,additionalProps:f({},ep($e)&&{as:re}),ownerState:f({},Me,po?.ownerState),className:[X.root,He]}),Po=ut({elementType:we,externalSlotProps:dn,ownerState:Me,className:X.rail}),gt=ut({elementType:Ke,externalSlotProps:ho,additionalProps:{style:f({},ot[se].offset(ze),ot[se].leap(nt))},ownerState:f({},Me,ho?.ownerState),className:X.track}),_t=ut({elementType:Xe,getSlotProps:ft,externalSlotProps:Ro,ownerState:f({},Me,Ro?.ownerState),className:X.thumb}),Gn=ut({elementType:st,externalSlotProps:Eo,ownerState:f({},Me,Eo?.ownerState),className:X.valueLabel}),Ft=ut({elementType:xt,externalSlotProps:Hn,ownerState:Me,className:X.mark}),to=ut({elementType:at,externalSlotProps:Mo,ownerState:Me,className:X.markLabel}),un=ut({elementType:zt,getSlotProps:wt,externalSlotProps:Kn,ownerState:Me});return R.jsxs($e,f({},eo,{children:[R.jsx(we,f({},Po)),R.jsx(Ke,f({},gt)),xe.filter(Je=>Je.value>=ie&&Je.value<=j).map((Je,Ze)=>{const mo=Nn(Je.value,ie,j),fo=ot[se].offset(mo);let Mt;return it===!1?Mt=Ve.indexOf(Je.value)!==-1:Mt=it==="normal"&&(Ue?Je.value>=Ve[0]&&Je.value<=Ve[Ve.length-1]:Je.value<=Ve[0])||it==="inverted"&&(Ue?Je.value<=Ve[0]||Je.value>=Ve[Ve.length-1]:Je.value>=Ve[0]),R.jsxs(u.Fragment,{children:[R.jsx(xt,f({"data-index":Ze},Ft,!Rn(xt)&&{markActive:Mt},{style:f({},fo,Ft.style),className:oe(Ft.className,Mt&&X.markActive)})),Je.label!=null?R.jsx(at,f({"aria-hidden":!0,"data-index":Ze},to,!Rn(at)&&{markLabelActive:Mt},{style:f({},fo,to.style),className:oe(X.markLabel,to.className,Mt&&X.markLabelActive),children:Je.label})):null]},Ze)}),Ve.map((Je,Ze)=>{const mo=Nn(Je,ie,j),fo=ot[se].offset(mo),Mt=Ye==="off"?hp:st;return R.jsx(Mt,f({},!Rn(Mt)&&{valueLabelFormat:Qe,valueLabelDisplay:Ye,value:typeof Qe=="function"?Qe(Ee(Je),Ze):Qe,index:Ze,open:F===Ze||Y===Ze||Ye==="on",disabled:Pe},Gn,{children:R.jsx(Xe,f({"data-index":Ze},_t,{className:oe(X.thumb,_t.className,Y===Ze&&X.active,me===Ze&&X.focusVisible),style:f({},fo,Q(Ze),_t.style),children:R.jsx(zt,f({"data-index":Ze,"aria-label":H?H(Ze):B,"aria-valuenow":Ee(Je),"aria-labelledby":q,"aria-valuetext":V?V(Ee(Je),Ze):W,value:Ve[Ze]},un))}))}),Ze)})]}))});function mp(e){return ge("MuiSnackbarContent",e)}ve("MuiSnackbarContent",["root","message","action"]);const fp=["action","className","message","role"],gp=e=>{const{classes:o}=e;return pe({root:["root"],action:["action"],message:["message"]},mp,o)},vp=K(jn,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>{const o=e.palette.mode==="light"?.8:.98,n=Ks(e.palette.background.default,o);return f({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(n),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),bp=K("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0"}),yp=K("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),wp=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiSnackbarContent"}),{action:i,className:a,message:l,role:d="alert"}=r,c=ae(r,fp),p=r,h=gp(p);return R.jsxs(vp,f({role:d,square:!0,elevation:6,className:oe(h.root,a),ownerState:p,ref:n},c,{children:[R.jsx(bp,{className:h.message,ownerState:p,children:l}),i?R.jsx(yp,{className:h.action,ownerState:p,children:i}):null]}))});function xp(e){return ge("MuiSnackbar",e)}ve("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const $p=["onEnter","onExited"],Cp=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],kp=e=>{const{classes:o,anchorOrigin:n}=e,r={root:["root",`anchorOrigin${_(n.vertical)}${_(n.horizontal)}`]};return pe(r,xp,o)},si=K("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`anchorOrigin${_(n.anchorOrigin.vertical)}${_(n.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:o})=>{const n={left:"50%",right:"auto",transform:"translateX(-50%)"};return f({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},o.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},o.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},o.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:f({},o.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},o.anchorOrigin.horizontal==="center"&&n,o.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},o.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Sp=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiSnackbar"}),i=Yt(),a={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:l,anchorOrigin:{vertical:d,horizontal:c}={vertical:"bottom",horizontal:"left"},autoHideDuration:p=null,children:h,className:g,ClickAwayListenerProps:v,ContentProps:C,disableWindowBlurListener:y=!1,message:k,open:w,TransitionComponent:T=ir,transitionDuration:E=a,TransitionProps:{onEnter:S,onExited:$}={}}=r,P=ae(r.TransitionProps,$p),x=ae(r,Cp),A=f({},r,{anchorOrigin:{vertical:d,horizontal:c},autoHideDuration:p,disableWindowBlurListener:y,TransitionComponent:T,transitionDuration:E}),U=kp(A),{getRootProps:O,onClickAway:L}=Ud(f({},A)),[D,te]=u.useState(!0),z=ut({elementType:si,getSlotProps:O,externalForwardedProps:x,ownerState:A,additionalProps:{ref:n},className:[U.root,g]}),B=q=>{te(!0),$&&$(q)},W=(q,re)=>{te(!1),S&&S(q,re)};return!w&&D?null:R.jsx(vc,f({onClickAway:L},v,{children:R.jsx(si,f({},z,{children:R.jsx(T,f({appear:!0,in:w,timeout:E,direction:d==="top"?"down":"up",onEnter:W,onExited:B},P,{children:h||R.jsx(wp,f({message:k,action:l},C))}))}))}))}),Tp=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Rp={entering:{transform:"none"},entered:{transform:"none"}},Ep=u.forwardRef(function(o,n){const r=Yt(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:a,appear:l=!0,children:d,easing:c,in:p,onEnter:h,onEntered:g,onEntering:v,onExit:C,onExited:y,onExiting:k,style:w,timeout:T=i,TransitionComponent:E=qs}=o,S=ae(o,Tp),$=u.useRef(null),P=St($,d.ref,n),x=B=>W=>{if(B){const q=$.current;W===void 0?B(q):B(q,W)}},A=x(v),U=x((B,W)=>{ll(B);const q=Mn({style:w,timeout:T,easing:c},{mode:"enter"});B.style.webkitTransition=r.transitions.create("transform",q),B.style.transition=r.transitions.create("transform",q),h&&h(B,W)}),O=x(g),L=x(k),D=x(B=>{const W=Mn({style:w,timeout:T,easing:c},{mode:"exit"});B.style.webkitTransition=r.transitions.create("transform",W),B.style.transition=r.transitions.create("transform",W),C&&C(B)}),te=x(y),z=B=>{a&&a($.current,B)};return R.jsx(E,f({appear:l,in:p,nodeRef:$,onEnter:U,onEntered:O,onEntering:A,onExit:D,onExited:te,onExiting:L,addEndListener:z,timeout:T},S,{children:(B,W)=>u.cloneElement(d,f({style:f({transform:"scale(0)",visibility:B==="exited"&&!p?"hidden":void 0},Rp[B],w,d.props.style),ref:P},W))}))});function Mp(e){return ge("MuiSpeedDial",e)}const wn=ve("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),Pp=["ref"],Ip=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],Ap=["ref"],Np=e=>{const{classes:o,open:n,direction:r}=e,i={root:["root",`direction${_(r)}`],fab:["fab"],actions:["actions",!n&&"actionsClosed"]};return pe(i,Mp,o)};function Vo(e){if(e==="up"||e==="down")return"vertical";if(e==="right"||e==="left")return"horizontal"}function Vp(e,o,n){return e<o?o:e>n?n:e}const Kt=32,xn=16,Op=K("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`direction${_(n.direction)}`]]}})(({theme:e,ownerState:o})=>f({zIndex:(e.vars||e).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},o.direction==="up"&&{flexDirection:"column-reverse",[`& .${wn.actions}`]:{flexDirection:"column-reverse",marginBottom:-Kt,paddingBottom:xn+Kt}},o.direction==="down"&&{flexDirection:"column",[`& .${wn.actions}`]:{flexDirection:"column",marginTop:-Kt,paddingTop:xn+Kt}},o.direction==="left"&&{flexDirection:"row-reverse",[`& .${wn.actions}`]:{flexDirection:"row-reverse",marginRight:-Kt,paddingRight:xn+Kt}},o.direction==="right"&&{flexDirection:"row",[`& .${wn.actions}`]:{flexDirection:"row",marginLeft:-Kt,paddingLeft:xn+Kt}})),Lp=K(ma,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(e,o)=>o.fab})(()=>({pointerEvents:"auto"})),Bp=K("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.actions,!n.open&&o.actionsClosed]}})(({ownerState:e})=>f({display:"flex",pointerEvents:"auto"},!e.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})),jp=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiSpeedDial"}),i=Yt(),a={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{ariaLabel:l,FabProps:{ref:d}={},children:c,className:p,direction:h="up",hidden:g=!1,icon:v,onBlur:C,onClose:y,onFocus:k,onKeyDown:w,onMouseEnter:T,onMouseLeave:E,onOpen:S,open:$,TransitionComponent:P=Ep,transitionDuration:x=a,TransitionProps:A}=r,U=ae(r.FabProps,Pp),O=ae(r,Ip),[L,D]=Xo({controlled:$,default:!1,name:"SpeedDial",state:"open"}),te=f({},r,{open:L,direction:h}),z=Np(te),B=u.useRef();u.useEffect(()=>()=>{clearTimeout(B.current)},[]);const W=u.useRef(0),q=u.useRef(),re=u.useRef([]);re.current=[re.current[0]];const de=u.useCallback(j=>{re.current[0]=j},[]),J=St(d,de),Le=(j,ie)=>be=>{re.current[j+1]=be,ie&&ie(be)},Be=j=>{w&&w(j);const ie=j.key.replace("Arrow","").toLowerCase(),{current:be=ie}=q;if(j.key==="Escape"){D(!1),re.current[0].focus(),y&&y(j,"escapeKeyDown");return}if(Vo(ie)===Vo(be)&&Vo(ie)!==void 0){j.preventDefault();const ue=ie===be?1:-1,he=Vp(W.current+ue,0,re.current.length-1);re.current[he].focus(),W.current=he,q.current=be}};u.useEffect(()=>{L||(W.current=0,q.current=void 0)},[L]);const He=j=>{j.type==="mouseleave"&&E&&E(j),j.type==="blur"&&C&&C(j),clearTimeout(B.current),j.type==="blur"?B.current=setTimeout(()=>{D(!1),y&&y(j,"blur")}):(D(!1),y&&y(j,"mouseLeave"))},Te=j=>{U.onClick&&U.onClick(j),clearTimeout(B.current),L?(D(!1),y&&y(j,"toggle")):(D(!0),S&&S(j,"toggle"))},Pe=j=>{j.type==="mouseenter"&&T&&T(j),j.type==="focus"&&k&&k(j),clearTimeout(B.current),L||(B.current=setTimeout(()=>{D(!0),S&&S(j,{focus:"focus",mouseenter:"mouseEnter"}[j.type])}))},H=l.replace(/^[^a-z]+|[^\w:.-]+/gi,""),V=u.Children.toArray(c).filter(j=>u.isValidElement(j)),G=V.map((j,ie)=>{const be=j.props,{FabProps:{ref:ue}={},tooltipPlacement:he}=be,Ee=ae(be.FabProps,Ap),Re=he||(Vo(h)==="vertical"?"left":"top");return u.cloneElement(j,{FabProps:f({},Ee,{ref:Le(ie,ue)}),delay:30*(L?ie:V.length-ie),open:L,tooltipPlacement:Re,id:`${H}-action-${ie}`})});return R.jsxs(Op,f({className:oe(z.root,p),ref:n,role:"presentation",onKeyDown:Be,onBlur:He,onFocus:Pe,onMouseEnter:Pe,onMouseLeave:He,ownerState:te},O,{children:[R.jsx(P,f({in:!g,timeout:x,unmountOnExit:!0},A,{children:R.jsx(Lp,f({color:"primary","aria-label":l,"aria-haspopup":"true","aria-expanded":L,"aria-controls":`${H}-actions`},U,{onClick:Te,className:oe(z.fab,U.className),ref:J,ownerState:te,children:u.isValidElement(v)&&yo(v,["SpeedDialIcon"])?u.cloneElement(v,{open:L}):v}))})),R.jsx(Bp,{id:`${H}-actions`,role:"menu","aria-orientation":Vo(h),className:oe(z.actions,!L&&z.actionsClosed),ownerState:te,children:G})]}))});function Dp(e){return ge("MuiTooltip",e)}const Qt=ve("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Up=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function zp(e){return Math.round(e*1e5)/1e5}const _p=e=>{const{classes:o,disableInteractive:n,arrow:r,touch:i,placement:a}=e,l={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",i&&"touch",`tooltipPlacement${_(a.split("-")[0])}`],arrow:["arrow"]};return pe(l,Dp,o)},Fp=K(pa,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.popper,!n.disableInteractive&&o.popperInteractive,n.arrow&&o.popperArrow,!n.open&&o.popperClose]}})(({theme:e,ownerState:o,open:n})=>f({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${Qt.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Qt.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Qt.arrow}`]:f({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${Qt.arrow}`]:f({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Wp=K("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.tooltip,n.touch&&o.touch,n.arrow&&o.tooltipArrow,o[`tooltipPlacement${_(n.placement.split("-")[0])}`]]}})(({theme:e,ownerState:o})=>f({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Ge(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${zp(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${Qt.popper}[data-popper-placement*="left"] &`]:f({transformOrigin:"right center"},o.isRtl?f({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):f({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${Qt.popper}[data-popper-placement*="right"] &`]:f({transformOrigin:"left center"},o.isRtl?f({marginRight:"14px"},o.touch&&{marginRight:"24px"}):f({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${Qt.popper}[data-popper-placement*="top"] &`]:f({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${Qt.popper}[data-popper-placement*="bottom"] &`]:f({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),qp=K("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,o)=>o.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Ge(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let $n=!1,Yn=null,Oo={x:0,y:0};function Cn(e,o){return n=>{o&&o(n),e(n)}}const Hp=u.forwardRef(function(o,n){var r,i,a,l,d,c,p,h,g,v,C,y,k,w,T,E,S,$,P;const x=fe({props:o,name:"MuiTooltip"}),{arrow:A=!1,children:U,components:O={},componentsProps:L={},describeChild:D=!1,disableFocusListener:te=!1,disableHoverListener:z=!1,disableInteractive:B=!1,disableTouchListener:W=!1,enterDelay:q=100,enterNextDelay:re=0,enterTouchDelay:de=700,followCursor:J=!1,id:Le,leaveDelay:Be=0,leaveTouchDelay:He=1500,onClose:Te,onOpen:Pe,open:H,placement:V="bottom",PopperComponent:G,PopperProps:j={},slotProps:ie={},slots:be={},title:ue,TransitionComponent:he=ir,TransitionProps:Ee}=x,Re=ae(x,Up),ye=u.isValidElement(U)?U:R.jsx("span",{children:U}),it=Yt(),Ye=it.direction==="rtl",[Qe,Et]=u.useState(),[Me,ot]=u.useState(null),mt=u.useRef(!1),wt=B||J,ft=u.useRef(),F=u.useRef(),Y=u.useRef(),se=u.useRef(),[me,Ue]=Xo({controlled:H,default:!1,name:"Tooltip",state:"open"});let _e=me;const xe=fr(Le),Ve=u.useRef(),ze=u.useCallback(()=>{Ve.current!==void 0&&(document.body.style.WebkitUserSelect=Ve.current,Ve.current=void 0),clearTimeout(se.current)},[]);u.useEffect(()=>()=>{clearTimeout(ft.current),clearTimeout(F.current),clearTimeout(Y.current),ze()},[ze]);const nt=Ce=>{clearTimeout(Yn),$n=!0,Ue(!0),Pe&&!_e&&Pe(Ce)},Q=Vt(Ce=>{clearTimeout(Yn),Yn=setTimeout(()=>{$n=!1},800+Be),Ue(!1),Te&&_e&&Te(Ce),clearTimeout(ft.current),ft.current=setTimeout(()=>{mt.current=!1},it.transitions.duration.shortest)}),X=Ce=>{mt.current&&Ce.type!=="touchstart"||(Qe&&Qe.removeAttribute("title"),clearTimeout(F.current),clearTimeout(Y.current),q||$n&&re?F.current=setTimeout(()=>{nt(Ce)},$n?re:q):nt(Ce))},$e=Ce=>{clearTimeout(F.current),clearTimeout(Y.current),Y.current=setTimeout(()=>{Q(Ce)},Be)},{isFocusVisibleRef:we,onBlur:Ke,onFocus:Xe,ref:st}=gr(),[,xt]=u.useState(!1),at=Ce=>{Ke(Ce),we.current===!1&&(xt(!1),$e(Ce))},zt=Ce=>{Qe||Et(Ce.currentTarget),Xe(Ce),we.current===!0&&(xt(!0),X(Ce))},po=Ce=>{mt.current=!0;const vt=ye.props;vt.onTouchStart&&vt.onTouchStart(Ce)},dn=X,ho=$e,Ro=Ce=>{po(Ce),clearTimeout(Y.current),clearTimeout(ft.current),ze(),Ve.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",se.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Ve.current,X(Ce)},de)},Eo=Ce=>{ye.props.onTouchEnd&&ye.props.onTouchEnd(Ce),ze(),clearTimeout(Y.current),Y.current=setTimeout(()=>{Q(Ce)},He)};u.useEffect(()=>{if(!_e)return;function Ce(vt){(vt.key==="Escape"||vt.key==="Esc")&&Q(vt)}return document.addEventListener("keydown",Ce),()=>{document.removeEventListener("keydown",Ce)}},[Q,_e]);const Hn=St(ye.ref,st,Et,n);!ue&&ue!==0&&(_e=!1);const Mo=u.useRef(),Kn=Ce=>{const vt=ye.props;vt.onMouseMove&&vt.onMouseMove(Ce),Oo={x:Ce.clientX,y:Ce.clientY},Mo.current&&Mo.current.update()},eo={},Po=typeof ue=="string";D?(eo.title=!_e&&Po&&!z?ue:null,eo["aria-describedby"]=_e?xe:null):(eo["aria-label"]=Po?ue:null,eo["aria-labelledby"]=_e&&!Po?xe:null);const gt=f({},eo,Re,ye.props,{className:oe(Re.className,ye.props.className),onTouchStart:po,ref:Hn},J?{onMouseMove:Kn}:{}),_t={};W||(gt.onTouchStart=Ro,gt.onTouchEnd=Eo),z||(gt.onMouseOver=Cn(dn,gt.onMouseOver),gt.onMouseLeave=Cn(ho,gt.onMouseLeave),wt||(_t.onMouseOver=dn,_t.onMouseLeave=ho)),te||(gt.onFocus=Cn(zt,gt.onFocus),gt.onBlur=Cn(at,gt.onBlur),wt||(_t.onFocus=zt,_t.onBlur=at));const Gn=u.useMemo(()=>{var Ce;let vt=[{name:"arrow",enabled:!!Me,options:{element:Me,padding:4}}];return(Ce=j.popperOptions)!=null&&Ce.modifiers&&(vt=vt.concat(j.popperOptions.modifiers)),f({},j.popperOptions,{modifiers:vt})},[Me,j]),Ft=f({},x,{isRtl:Ye,arrow:A,disableInteractive:wt,placement:V,PopperComponentProp:G,touch:mt.current}),to=_p(Ft),un=(r=(i=be.popper)!=null?i:O.Popper)!=null?r:Fp,Je=(a=(l=(d=be.transition)!=null?d:O.Transition)!=null?l:he)!=null?a:ir,Ze=(c=(p=be.tooltip)!=null?p:O.Tooltip)!=null?c:Wp,mo=(h=(g=be.arrow)!=null?g:O.Arrow)!=null?h:qp,fo=pn(un,f({},j,(v=ie.popper)!=null?v:L.popper,{className:oe(to.popper,j?.className,(C=(y=ie.popper)!=null?y:L.popper)==null?void 0:C.className)}),Ft),Mt=pn(Je,f({},Ee,(k=ie.transition)!=null?k:L.transition),Ft),Wa=pn(Ze,f({},(w=ie.tooltip)!=null?w:L.tooltip,{className:oe(to.tooltip,(T=(E=ie.tooltip)!=null?E:L.tooltip)==null?void 0:T.className)}),Ft),qa=pn(mo,f({},(S=ie.arrow)!=null?S:L.arrow,{className:oe(to.arrow,($=(P=ie.arrow)!=null?P:L.arrow)==null?void 0:$.className)}),Ft);return R.jsxs(u.Fragment,{children:[u.cloneElement(ye,gt),R.jsx(un,f({as:G??pa,placement:V,anchorEl:J?{getBoundingClientRect:()=>({top:Oo.y,left:Oo.x,right:Oo.x,bottom:Oo.y,width:0,height:0})}:Qe,popperRef:Mo,open:Qe?_e:!1,id:xe,transition:!0},_t,fo,{popperOptions:Gn,children:({TransitionProps:Ce})=>R.jsx(Je,f({timeout:it.transitions.duration.shorter},Ce,Mt,{children:R.jsxs(Ze,f({},Wa,{children:[ue,A?R.jsx(mo,f({},qa,{ref:ot})):null]}))}))}))]})});function Kp(e){return ge("MuiSpeedDialAction",e)}const Gp=ve("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),Qp=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],Jp=e=>{const{open:o,tooltipPlacement:n,classes:r}=e,i={fab:["fab",!o&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${_(n)}`,!o&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return pe(i,Kp,r)},Yp=K(ma,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.fab,!n.open&&o.fabClosed]}})(({theme:e,ownerState:o})=>f({margin:8,color:(e.vars||e).palette.text.secondary,backgroundColor:(e.vars||e).palette.background.paper,"&:hover":{backgroundColor:e.vars?e.vars.palette.SpeedDialAction.fabHoverBg:Ks(e.palette.background.paper,.15)},transition:`${e.transitions.create("transform",{duration:e.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!o.open&&{opacity:0,transform:"scale(0)"})),Xp=K("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.staticTooltip,!n.open&&o.staticTooltipClosed,o[`tooltipPlacement${_(n.tooltipPlacement)}`]]}})(({theme:e,ownerState:o})=>({position:"relative",display:"flex",alignItems:"center",[`& .${Gp.staticTooltipLabel}`]:f({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.shorter}),opacity:1},!o.open&&{opacity:0,transform:"scale(0.5)"},o.tooltipPlacement==="left"&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},o.tooltipPlacement==="right"&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})})),Zp=K("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(e,o)=>o.staticTooltipLabel})(({theme:e})=>f({position:"absolute"},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.paper,borderRadius:(e.vars||e).shape.borderRadius,boxShadow:(e.vars||e).shadows[1],color:(e.vars||e).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})),eh=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiSpeedDialAction"}),{className:i,delay:a=0,FabProps:l={},icon:d,id:c,open:p,TooltipClasses:h,tooltipOpen:g=!1,tooltipPlacement:v="left",tooltipTitle:C}=r,y=ae(r,Qp),k=f({},r,{tooltipPlacement:v}),w=Jp(k),[T,E]=u.useState(g),S=()=>{E(!1)},$=()=>{E(!0)},P={transitionDelay:`${a}ms`},x=R.jsx(Yp,f({size:"small",className:oe(w.fab,i),tabIndex:-1,role:"menuitem",ownerState:k},l,{style:f({},P,l.style),children:d}));return g?R.jsxs(Xp,f({id:c,ref:n,className:w.staticTooltip,ownerState:k},y,{children:[R.jsx(Zp,{style:P,id:`${c}-label`,className:w.staticTooltipLabel,ownerState:k,children:C}),u.cloneElement(x,{"aria-labelledby":`${c}-label`})]})):(!p&&T&&E(!1),R.jsx(Hp,f({id:c,ref:n,title:C,placement:v,onClose:S,onOpen:$,open:p&&T,classes:h},y,{children:x})))}),th=je(R.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function oh(e){return ge("MuiSpeedDialIcon",e)}const oo=ve("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),nh=["className","icon","open","openIcon"],rh=e=>{const{classes:o,open:n,openIcon:r}=e;return pe({root:["root"],icon:["icon",n&&"iconOpen",r&&n&&"iconWithOpenIconOpen"],openIcon:["openIcon",n&&"openIconOpen"]},oh,o)},ih=K("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${oo.icon}`]:o.icon},{[`& .${oo.icon}`]:n.open&&o.iconOpen},{[`& .${oo.icon}`]:n.open&&n.openIcon&&o.iconWithOpenIconOpen},{[`& .${oo.openIcon}`]:o.openIcon},{[`& .${oo.openIcon}`]:n.open&&o.openIconOpen},o.root]}})(({theme:e,ownerState:o})=>({height:24,[`& .${oo.icon}`]:f({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.short})},o.open&&f({transform:"rotate(45deg)"},o.openIcon&&{opacity:0})),[`& .${oo.openIcon}`]:f({position:"absolute",transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},o.open&&{transform:"rotate(0deg)",opacity:1})})),va=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiSpeedDialIcon"}),{className:i,icon:a,openIcon:l}=r,d=ae(r,nh),c=r,p=rh(c);function h(g,v){return u.isValidElement(g)?u.cloneElement(g,{className:v}):g}return R.jsxs(ih,f({className:oe(p.root,i),ref:n,ownerState:c},d,{children:[l?h(l,p.openIcon):null,a?h(a,p.icon):R.jsx(th,{className:p.icon})]}))});va.muiName="SpeedDialIcon";function sh(e){return ge("MuiSwitch",e)}const ct=ve("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),ah=["className","color","edge","size","sx"],lh=e=>{const{classes:o,edge:n,size:r,color:i,checked:a,disabled:l}=e,d={root:["root",n&&`edge${_(n)}`,`size${_(r)}`],switchBase:["switchBase",`color${_(i)}`,a&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=pe(d,sh,o);return f({},o,c)},ch=K("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.edge&&o[`edge${_(n.edge)}`],o[`size${_(n.size)}`]]}})(({ownerState:e})=>f({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${ct.thumb}`]:{width:16,height:16},[`& .${ct.switchBase}`]:{padding:4,[`&.${ct.checked}`]:{transform:"translateX(16px)"}}})),dh=K(bu,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.switchBase,{[`& .${ct.input}`]:o.input},n.color!=="default"&&o[`color${_(n.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${ct.checked}`]:{transform:"translateX(20px)"},[`&.${ct.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${ct.checked} + .${ct.track}`]:{opacity:.5},[`&.${ct.disabled} + .${ct.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${ct.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:o})=>f({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Ge(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${ct.checked}`]:{color:(e.vars||e).palette[o.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ge(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ct.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${o.color}DisabledColor`]:`${e.palette.mode==="light"?Go(e.palette[o.color].main,.62):Ko(e.palette[o.color].main,.55)}`}},[`&.${ct.checked} + .${ct.track}`]:{backgroundColor:(e.vars||e).palette[o.color].main}})),uh=K("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,o)=>o.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),ph=K("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,o)=>o.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Pr=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiSwitch"}),{className:i,color:a="primary",edge:l=!1,size:d="medium",sx:c}=r,p=ae(r,ah),h=f({},r,{color:a,edge:l,size:d}),g=lh(h),v=R.jsx(ph,{className:g.thumb,ownerState:h});return R.jsxs(ch,{className:oe(g.root,i),sx:c,ownerState:h,children:[R.jsx(dh,f({type:"checkbox",icon:v,checkedIcon:v,ref:n,ownerState:h},p,{classes:f({},g,{root:g.switchBase})})),R.jsx(uh,{className:g.track,ownerState:h})]})});function hh(e){return ge("MuiTab",e)}const no=ve("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),mh=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],fh=e=>{const{classes:o,textColor:n,fullWidth:r,wrapped:i,icon:a,label:l,selected:d,disabled:c}=e,p={root:["root",a&&l&&"labelIcon",`textColor${_(n)}`,r&&"fullWidth",i&&"wrapped",d&&"selected",c&&"disabled"],iconWrapper:["iconWrapper"]};return pe(p,hh,o)},gh=K(Jt,{name:"MuiTab",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.label&&n.icon&&o.labelIcon,o[`textColor${_(n.textColor)}`],n.fullWidth&&o.fullWidth,n.wrapped&&o.wrapped]}})(({theme:e,ownerState:o})=>f({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},o.label&&{flexDirection:o.iconPosition==="top"||o.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},o.icon&&o.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${no.iconWrapper}`]:f({},o.iconPosition==="top"&&{marginBottom:6},o.iconPosition==="bottom"&&{marginTop:6},o.iconPosition==="start"&&{marginRight:e.spacing(1)},o.iconPosition==="end"&&{marginLeft:e.spacing(1)})},o.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${no.selected}`]:{opacity:1},[`&.${no.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},o.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${no.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${no.disabled}`]:{color:(e.vars||e).palette.text.disabled}},o.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${no.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${no.disabled}`]:{color:(e.vars||e).palette.text.disabled}},o.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},o.wrapped&&{fontSize:e.typography.pxToRem(12)})),Bt=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTab"}),{className:i,disabled:a=!1,disableFocusRipple:l=!1,fullWidth:d,icon:c,iconPosition:p="top",indicator:h,label:g,onChange:v,onClick:C,onFocus:y,selected:k,selectionFollowsFocus:w,textColor:T="inherit",value:E,wrapped:S=!1}=r,$=ae(r,mh),P=f({},r,{disabled:a,disableFocusRipple:l,selected:k,icon:!!c,iconPosition:p,label:!!g,fullWidth:d,textColor:T,wrapped:S}),x=fh(P),A=c&&g&&u.isValidElement(c)?u.cloneElement(c,{className:oe(x.iconWrapper,c.props.className)}):c,U=L=>{!k&&v&&v(L,E),C&&C(L)},O=L=>{w&&!k&&v&&v(L,E),y&&y(L)};return R.jsxs(gh,f({focusRipple:!l,className:oe(x.root,i),ref:n,role:"tab","aria-selected":k,disabled:a,onClick:U,onFocus:O,ownerState:P,tabIndex:k?0:-1},$,{children:[p==="top"||p==="start"?R.jsxs(u.Fragment,{children:[A,g]}):R.jsxs(u.Fragment,{children:[g,A]}),h]}))}),ba=u.createContext();function vh(e){return ge("MuiTable",e)}ve("MuiTable",["root","stickyHeader"]);const bh=["className","component","padding","size","stickyHeader"],yh=e=>{const{classes:o,stickyHeader:n}=e;return pe({root:["root",n&&"stickyHeader"]},vh,o)},wh=K("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.stickyHeader&&o.stickyHeader]}})(({theme:e,ownerState:o})=>f({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":f({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})),ai="table",ya=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTable"}),{className:i,component:a=ai,padding:l="normal",size:d="medium",stickyHeader:c=!1}=r,p=ae(r,bh),h=f({},r,{component:a,padding:l,size:d,stickyHeader:c}),g=yh(h),v=u.useMemo(()=>({padding:l,size:d,stickyHeader:c}),[l,d,c]);return R.jsx(ba.Provider,{value:v,children:R.jsx(wh,f({as:a,role:a===ai?null:"table",ref:n,className:oe(g.root,i),ownerState:h},p))})}),Wn=u.createContext();function xh(e){return ge("MuiTableBody",e)}ve("MuiTableBody",["root"]);const $h=["className","component"],Ch=e=>{const{classes:o}=e;return pe({root:["root"]},xh,o)},kh=K("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-row-group"}),Sh={variant:"body"},li="tbody",wa=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTableBody"}),{className:i,component:a=li}=r,l=ae(r,$h),d=f({},r,{component:a}),c=Ch(d);return R.jsx(Wn.Provider,{value:Sh,children:R.jsx(kh,f({className:oe(c.root,i),as:a,ref:n,role:a===li?null:"rowgroup",ownerState:d},l))})});function Th(e){return ge("MuiTableCell",e)}const Rh=ve("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Eh=["align","className","component","padding","scope","size","sortDirection","variant"],Mh=e=>{const{classes:o,variant:n,align:r,padding:i,size:a,stickyHeader:l}=e,d={root:["root",n,l&&"stickyHeader",r!=="inherit"&&`align${_(r)}`,i!=="normal"&&`padding${_(i)}`,`size${_(a)}`]};return pe(d,Th,o)},Ph=K("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`size${_(n.size)}`],n.padding!=="normal"&&o[`padding${_(n.padding)}`],n.align!=="inherit"&&o[`align${_(n.align)}`],n.stickyHeader&&o.stickyHeader]}})(({theme:e,ownerState:o})=>f({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Go(Ge(e.palette.divider,1),.88):Ko(Ge(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},o.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},o.variant==="body"&&{color:(e.vars||e).palette.text.primary},o.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},o.size==="small"&&{padding:"6px 16px",[`&.${Rh.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},o.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},o.padding==="none"&&{padding:0},o.align==="left"&&{textAlign:"left"},o.align==="center"&&{textAlign:"center"},o.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},o.align==="justify"&&{textAlign:"justify"},o.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),et=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTableCell"}),{align:i="inherit",className:a,component:l,padding:d,scope:c,size:p,sortDirection:h,variant:g}=r,v=ae(r,Eh),C=u.useContext(ba),y=u.useContext(Wn),k=y&&y.variant==="head";let w;l?w=l:w=k?"th":"td";let T=c;w==="td"?T=void 0:!T&&k&&(T="col");const E=g||y&&y.variant,S=f({},r,{align:i,component:w,padding:d||(C&&C.padding?C.padding:"normal"),size:p||(C&&C.size?C.size:"medium"),sortDirection:h,stickyHeader:E==="head"&&C&&C.stickyHeader,variant:E}),$=Mh(S);let P=null;return h&&(P=h==="asc"?"ascending":"descending"),R.jsx(Ph,f({as:w,ref:n,className:oe($.root,a),"aria-sort":P,scope:T,ownerState:S},v))});function Ih(e){return ge("MuiTableContainer",e)}ve("MuiTableContainer",["root"]);const Ah=["className","component"],Nh=e=>{const{classes:o}=e;return pe({root:["root"]},Ih,o)},Vh=K("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,o)=>o.root})({width:"100%",overflowX:"auto"}),Oh=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTableContainer"}),{className:i,component:a="div"}=r,l=ae(r,Ah),d=f({},r,{component:a}),c=Nh(d);return R.jsx(Vh,f({ref:n,as:a,className:oe(c.root,i),ownerState:d},l))});function Lh(e){return ge("MuiTableHead",e)}ve("MuiTableHead",["root"]);const Bh=["className","component"],jh=e=>{const{classes:o}=e;return pe({root:["root"]},Lh,o)},Dh=K("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-header-group"}),Uh={variant:"head"},ci="thead",xa=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTableHead"}),{className:i,component:a=ci}=r,l=ae(r,Bh),d=f({},r,{component:a}),c=jh(d);return R.jsx(Wn.Provider,{value:Uh,children:R.jsx(Dh,f({as:a,className:oe(c.root,i),ref:n,role:a===ci?null:"rowgroup",ownerState:d},l))})}),zh=je(R.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),_h=je(R.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Fh(e){return ge("MuiTableRow",e)}const di=ve("MuiTableRow",["root","selected","hover","head","footer"]),Wh=["className","component","hover","selected"],qh=e=>{const{classes:o,selected:n,hover:r,head:i,footer:a}=e;return pe({root:["root",n&&"selected",r&&"hover",i&&"head",a&&"footer"]},Fh,o)},Hh=K("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.head&&o.head,n.footer&&o.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${di.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${di.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Ge(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),ui="tr",_o=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTableRow"}),{className:i,component:a=ui,hover:l=!1,selected:d=!1}=r,c=ae(r,Wh),p=u.useContext(Wn),h=f({},r,{component:a,hover:l,selected:d,head:p&&p.variant==="head",footer:p&&p.variant==="footer"}),g=qh(h);return R.jsx(Hh,f({as:a,ref:n,className:oe(g.root,i),role:a===ui?null:"row",ownerState:h},c))});function Kh(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Gh(e,o,n,r={},i=()=>{}){const{ease:a=Kh,duration:l=300}=r;let d=null;const c=o[e];let p=!1;const h=()=>{p=!0},g=v=>{if(p){i(new Error("Animation cancelled"));return}d===null&&(d=v);const C=Math.min(1,(v-d)/l);if(o[e]=a(C)*(n-c)+c,C>=1){requestAnimationFrame(()=>{i(null)});return}requestAnimationFrame(g)};return c===n?(i(new Error("Element already at target position")),h):(requestAnimationFrame(g),h)}const Qh=["onChange"],Jh={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Yh(e){const{onChange:o}=e,n=ae(e,Qh),r=u.useRef(),i=u.useRef(null),a=()=>{r.current=i.current.offsetHeight-i.current.clientHeight};return wo(()=>{const l=hr(()=>{const c=r.current;a(),c!==r.current&&o(r.current)}),d=mr(i.current);return d.addEventListener("resize",l),()=>{l.clear(),d.removeEventListener("resize",l)}},[o]),u.useEffect(()=>{a(),o(r.current)},[o]),R.jsx("div",f({style:Jh,ref:i},n))}function Xh(e){return ge("MuiTabScrollButton",e)}const Zh=ve("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),em=["className","slots","slotProps","direction","orientation","disabled"],tm=e=>{const{classes:o,orientation:n,disabled:r}=e;return pe({root:["root",n,r&&"disabled"]},Xh,o)},om=K(Jt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.orientation&&o[n.orientation]]}})(({ownerState:e})=>f({width:40,flexShrink:0,opacity:.8,[`&.${Zh.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),nm=u.forwardRef(function(o,n){var r,i;const a=fe({props:o,name:"MuiTabScrollButton"}),{className:l,slots:d={},slotProps:c={},direction:p}=a,h=ae(a,em),v=Yt().direction==="rtl",C=f({isRtl:v},a),y=tm(C),k=(r=d.StartScrollButtonIcon)!=null?r:zh,w=(i=d.EndScrollButtonIcon)!=null?i:_h,T=ut({elementType:k,externalSlotProps:c.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:C}),E=ut({elementType:w,externalSlotProps:c.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:C});return R.jsx(om,f({component:"div",className:oe(y.root,l),ref:n,role:null,ownerState:C,tabIndex:null},h,{children:p==="left"?R.jsx(k,f({},T)):R.jsx(w,f({},E))}))});function rm(e){return ge("MuiTabs",e)}const Xn=ve("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),im=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],pi=(e,o)=>e===o?e.firstChild:o&&o.nextElementSibling?o.nextElementSibling:e.firstChild,hi=(e,o)=>e===o?e.lastChild:o&&o.previousElementSibling?o.previousElementSibling:e.lastChild,kn=(e,o,n)=>{let r=!1,i=n(e,o);for(;i;){if(i===e.firstChild){if(r)return;r=!0}const a=i.disabled||i.getAttribute("aria-disabled")==="true";if(!i.hasAttribute("tabindex")||a)i=n(e,i);else{i.focus();return}}},sm=e=>{const{vertical:o,fixed:n,hideScrollbar:r,scrollableX:i,scrollableY:a,centered:l,scrollButtonsHideMobile:d,classes:c}=e;return pe({root:["root",o&&"vertical"],scroller:["scroller",n&&"fixed",r&&"hideScrollbar",i&&"scrollableX",a&&"scrollableY"],flexContainer:["flexContainer",o&&"flexContainerVertical",l&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",d&&"scrollButtonsHideMobile"],scrollableX:[i&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]},rm,c)},am=K("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${Xn.scrollButtons}`]:o.scrollButtons},{[`& .${Xn.scrollButtons}`]:n.scrollButtonsHideMobile&&o.scrollButtonsHideMobile},o.root,n.vertical&&o.vertical]}})(({ownerState:e,theme:o})=>f({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${Xn.scrollButtons}`]:{[o.breakpoints.down("sm")]:{display:"none"}}})),lm=K("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.scroller,n.fixed&&o.fixed,n.hideScrollbar&&o.hideScrollbar,n.scrollableX&&o.scrollableX,n.scrollableY&&o.scrollableY]}})(({ownerState:e})=>f({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),cm=K("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.flexContainer,n.vertical&&o.flexContainerVertical,n.centered&&o.centered]}})(({ownerState:e})=>f({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),dm=K("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,o)=>o.indicator})(({ownerState:e,theme:o})=>f({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(o.vars||o).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(o.vars||o).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),um=K(Yh)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),mi={},$a=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTabs"}),i=Yt(),a=i.direction==="rtl",{"aria-label":l,"aria-labelledby":d,action:c,centered:p=!1,children:h,className:g,component:v="div",allowScrollButtonsMobile:C=!1,indicatorColor:y="primary",onChange:k,orientation:w="horizontal",ScrollButtonComponent:T=nm,scrollButtons:E="auto",selectionFollowsFocus:S,slots:$={},slotProps:P={},TabIndicatorProps:x={},TabScrollButtonProps:A={},textColor:U="primary",value:O,variant:L="standard",visibleScrollbar:D=!1}=r,te=ae(r,im),z=L==="scrollable",B=w==="vertical",W=B?"scrollTop":"scrollLeft",q=B?"top":"left",re=B?"bottom":"right",de=B?"clientHeight":"clientWidth",J=B?"height":"width",Le=f({},r,{component:v,allowScrollButtonsMobile:C,indicatorColor:y,orientation:w,vertical:B,scrollButtons:E,textColor:U,variant:L,visibleScrollbar:D,fixed:!z,hideScrollbar:z&&!D,scrollableX:z&&!B,scrollableY:z&&B,centered:p&&!z,scrollButtonsHideMobile:!C}),Be=sm(Le),He=ut({elementType:$.StartScrollButtonIcon,externalSlotProps:P.startScrollButtonIcon,ownerState:Le}),Te=ut({elementType:$.EndScrollButtonIcon,externalSlotProps:P.endScrollButtonIcon,ownerState:Le}),[Pe,H]=u.useState(!1),[V,G]=u.useState(mi),[j,ie]=u.useState(!1),[be,ue]=u.useState(!1),[he,Ee]=u.useState(!1),[Re,ye]=u.useState({overflow:"hidden",scrollbarWidth:0}),it=new Map,Ye=u.useRef(null),Qe=u.useRef(null),Et=()=>{const Q=Ye.current;let X;if(Q){const we=Q.getBoundingClientRect();X={clientWidth:Q.clientWidth,scrollLeft:Q.scrollLeft,scrollTop:Q.scrollTop,scrollLeftNormalized:Ml(Q,i.direction),scrollWidth:Q.scrollWidth,top:we.top,bottom:we.bottom,left:we.left,right:we.right}}let $e;if(Q&&O!==!1){const we=Qe.current.children;if(we.length>0){const Ke=we[it.get(O)];$e=Ke?Ke.getBoundingClientRect():null}}return{tabsMeta:X,tabMeta:$e}},Me=Vt(()=>{const{tabsMeta:Q,tabMeta:X}=Et();let $e=0,we;if(B)we="top",X&&Q&&($e=X.top-Q.top+Q.scrollTop);else if(we=a?"right":"left",X&&Q){const Xe=a?Q.scrollLeftNormalized+Q.clientWidth-Q.scrollWidth:Q.scrollLeft;$e=(a?-1:1)*(X[we]-Q[we]+Xe)}const Ke={[we]:$e,[J]:X?X[J]:0};if(isNaN(V[we])||isNaN(V[J]))G(Ke);else{const Xe=Math.abs(V[we]-Ke[we]),st=Math.abs(V[J]-Ke[J]);(Xe>=1||st>=1)&&G(Ke)}}),ot=(Q,{animation:X=!0}={})=>{X?Gh(W,Ye.current,Q,{duration:i.transitions.duration.standard}):Ye.current[W]=Q},mt=Q=>{let X=Ye.current[W];B?X+=Q:(X+=Q*(a?-1:1),X*=a&&ta()==="reverse"?-1:1),ot(X)},wt=()=>{const Q=Ye.current[de];let X=0;const $e=Array.from(Qe.current.children);for(let we=0;we<$e.length;we+=1){const Ke=$e[we];if(X+Ke[de]>Q){we===0&&(X=Q);break}X+=Ke[de]}return X},ft=()=>{mt(-1*wt())},F=()=>{mt(wt())},Y=u.useCallback(Q=>{ye({overflow:null,scrollbarWidth:Q})},[]),se=()=>{const Q={};Q.scrollbarSizeListener=z?R.jsx(um,{onChange:Y,className:oe(Be.scrollableX,Be.hideScrollbar)}):null;const $e=z&&(E==="auto"&&(j||be)||E===!0);return Q.scrollButtonStart=$e?R.jsx(T,f({slots:{StartScrollButtonIcon:$.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:He},orientation:w,direction:a?"right":"left",onClick:ft,disabled:!j},A,{className:oe(Be.scrollButtons,A.className)})):null,Q.scrollButtonEnd=$e?R.jsx(T,f({slots:{EndScrollButtonIcon:$.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Te},orientation:w,direction:a?"left":"right",onClick:F,disabled:!be},A,{className:oe(Be.scrollButtons,A.className)})):null,Q},me=Vt(Q=>{const{tabsMeta:X,tabMeta:$e}=Et();if(!(!$e||!X)){if($e[q]<X[q]){const we=X[W]+($e[q]-X[q]);ot(we,{animation:Q})}else if($e[re]>X[re]){const we=X[W]+($e[re]-X[re]);ot(we,{animation:Q})}}}),Ue=Vt(()=>{z&&E!==!1&&Ee(!he)});u.useEffect(()=>{const Q=hr(()=>{Ye.current&&Me()});let X;const $e=Xe=>{Xe.forEach(st=>{st.removedNodes.forEach(xt=>{var at;(at=X)==null||at.unobserve(xt)}),st.addedNodes.forEach(xt=>{var at;(at=X)==null||at.observe(xt)})}),Q(),Ue()},we=mr(Ye.current);we.addEventListener("resize",Q);let Ke;return typeof ResizeObserver<"u"&&(X=new ResizeObserver(Q),Array.from(Qe.current.children).forEach(Xe=>{X.observe(Xe)})),typeof MutationObserver<"u"&&(Ke=new MutationObserver($e),Ke.observe(Qe.current,{childList:!0})),()=>{var Xe,st;Q.clear(),we.removeEventListener("resize",Q),(Xe=Ke)==null||Xe.disconnect(),(st=X)==null||st.disconnect()}},[Me,Ue]),u.useEffect(()=>{const Q=Array.from(Qe.current.children),X=Q.length;if(typeof IntersectionObserver<"u"&&X>0&&z&&E!==!1){const $e=Q[0],we=Q[X-1],Ke={root:Ye.current,threshold:.99},Xe=zt=>{ie(!zt[0].isIntersecting)},st=new IntersectionObserver(Xe,Ke);st.observe($e);const xt=zt=>{ue(!zt[0].isIntersecting)},at=new IntersectionObserver(xt,Ke);return at.observe(we),()=>{st.disconnect(),at.disconnect()}}},[z,E,he,h?.length]),u.useEffect(()=>{H(!0)},[]),u.useEffect(()=>{Me()}),u.useEffect(()=>{me(mi!==V)},[me,V]),u.useImperativeHandle(c,()=>({updateIndicator:Me,updateScrollButtons:Ue}),[Me,Ue]);const _e=R.jsx(dm,f({},x,{className:oe(Be.indicator,x.className),ownerState:Le,style:f({},V,x.style)}));let xe=0;const Ve=u.Children.map(h,Q=>{if(!u.isValidElement(Q))return null;const X=Q.props.value===void 0?xe:Q.props.value;it.set(X,xe);const $e=X===O;return xe+=1,u.cloneElement(Q,f({fullWidth:L==="fullWidth",indicator:$e&&!Pe&&_e,selected:$e,selectionFollowsFocus:S,onChange:k,textColor:U,value:X},xe===1&&O===!1&&!Q.props.tabIndex?{tabIndex:0}:{}))}),ze=Q=>{const X=Qe.current,$e=Nt(X).activeElement;if($e.getAttribute("role")!=="tab")return;let Ke=w==="horizontal"?"ArrowLeft":"ArrowUp",Xe=w==="horizontal"?"ArrowRight":"ArrowDown";switch(w==="horizontal"&&a&&(Ke="ArrowRight",Xe="ArrowLeft"),Q.key){case Ke:Q.preventDefault(),kn(X,$e,hi);break;case Xe:Q.preventDefault(),kn(X,$e,pi);break;case"Home":Q.preventDefault(),kn(X,null,pi);break;case"End":Q.preventDefault(),kn(X,null,hi);break}},nt=se();return R.jsxs(am,f({className:oe(Be.root,g),ownerState:Le,ref:n,as:v},te,{children:[nt.scrollButtonStart,nt.scrollbarSizeListener,R.jsxs(lm,{className:Be.scroller,ownerState:Le,style:{overflow:Re.overflow,[B?`margin${a?"Left":"Right"}`:"marginBottom"]:D?void 0:-Re.scrollbarWidth},ref:Ye,children:[R.jsx(cm,{"aria-label":l,"aria-labelledby":d,"aria-orientation":w==="vertical"?"vertical":null,className:Be.flexContainer,ownerState:Le,onKeyDown:ze,ref:Qe,role:"tablist",children:Ve}),Pe&&_e]}),nt.scrollButtonEnd]}))});function pm(e){return ge("MuiTextField",e)}ve("MuiTextField",["root"]);const hm=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],mm={standard:ul,filled:dl,outlined:cl},fm=e=>{const{classes:o}=e;return pe({root:["root"]},pm,o)},gm=K(fa,{name:"MuiTextField",slot:"Root",overridesResolver:(e,o)=>o.root})({}),vm=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTextField"}),{autoComplete:i,autoFocus:a=!1,children:l,className:d,color:c="primary",defaultValue:p,disabled:h=!1,error:g=!1,FormHelperTextProps:v,fullWidth:C=!1,helperText:y,id:k,InputLabelProps:w,inputProps:T,InputProps:E,inputRef:S,label:$,maxRows:P,minRows:x,multiline:A=!1,name:U,onBlur:O,onChange:L,onFocus:D,placeholder:te,required:z=!1,rows:B,select:W=!1,SelectProps:q,type:re,value:de,variant:J="outlined"}=r,Le=ae(r,hm),Be=f({},r,{autoFocus:a,color:c,disabled:h,error:g,fullWidth:C,multiline:A,required:z,select:W,variant:J}),He=fm(Be),Te={};J==="outlined"&&(w&&typeof w.shrink<"u"&&(Te.notched=w.shrink),Te.label=$),W&&((!q||!q.native)&&(Te.id=void 0),Te["aria-describedby"]=void 0);const Pe=fr(k),H=y&&Pe?`${Pe}-helper-text`:void 0,V=$&&Pe?`${Pe}-label`:void 0,G=mm[J],j=R.jsx(G,f({"aria-describedby":H,autoComplete:i,autoFocus:a,defaultValue:p,fullWidth:C,multiline:A,name:U,rows:B,maxRows:P,minRows:x,type:re,value:de,id:Pe,inputRef:S,onBlur:O,onChange:L,onFocus:D,placeholder:te,inputProps:T},Te,E));return R.jsxs(gm,f({className:oe(He.root,d),disabled:h,error:g,fullWidth:C,ref:n,required:z,color:c,variant:J,ownerState:Be},Le,{children:[$!=null&&$!==""&&R.jsx(ga,f({htmlFor:Pe,id:V},w,{children:$})),W?R.jsx(Gs,f({"aria-describedby":H,id:Pe,labelId:V,value:de,input:j},q,{children:l})):j,y&&R.jsx(Au,f({id:H},v,{children:y}))]}))}),bm=je([R.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),R.jsx("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime"),ym=je(R.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),wm=je(R.jsx("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"CodeOutlined"),xm=je(R.jsx("path",{d:"M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"}),"Coffee"),$m=je(R.jsx("path",{d:"m13.7826 15.1719 2.1213-2.1213 5.9963 5.9962-2.1213 2.1213zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21z"}),"ConstructionOutlined"),Cm=je(R.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy"),km=je(R.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm3.17-6.41a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 12.59l1.41-1.41c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 14l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 15.41l-1.41 1.41c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 14l-1.42-1.41zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"}),"DeleteForeverRounded"),Sm=je(R.jsx("path",{d:"M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17 6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"}),"DeveloperMode"),Zn=je(R.jsx("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"}),"EmailOutlined"),Ot=je(R.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),Lt=je(R.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),Tm=je(R.jsx("path",{d:"M7.25 12.5 4.75 9H3.5v6h1.25v-3.5L7.3 15h1.2V9H7.25zM9.5 15h4v-1.25H11v-1.11h2.5v-1.26H11v-1.12h2.5V9h-4zm9.75-6v4.5h-1.12V9.99h-1.25v3.52h-1.13V9H14.5v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9h-1.25z"}),"FiberNewOutlined"),Rm=je(R.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"}),"FileCopyOutlined"),Em=je(R.jsx("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Mm=je(R.jsx("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),Pm=je(R.jsx("path",{d:"M13 11.33 18 18H6l5-6.67V6h2m2.96-2H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81z"}),"ScienceOutlined"),Im=je(R.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Ca=je(R.jsx("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}),"ThumbUpAlt"),ka=je(R.jsx("path",{d:"m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82l4.11-4.1M14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z"}),"ThumbUpOffAlt");function Sa(e){const o=u.useRef();return u.useEffect(()=>{o.current=e},[e]),o.current}function Ut(e,o){const[n,r]=u.useState(e||!1),i=a=>{if(typeof a=="boolean"){r(a);return}r(l=>!l)};return[n?o?.true??!0:o?.false??!1,i,r]}function Am(e){if(e&&typeof e!="object")throw new Error("Initial value must be an object");const[o,n]=u.useState(e||Object.create({}));function r(a){return o[a]}function i(...a){if(a.length===0)throw new Error("No arguments provided");if(["string","number","symbol"].includes(typeof a[0])){const l=a[0],d=a[1];n(c=>({...c,[l]:typeof d=="function"?d(c[l]):d}))}else if(typeof a[0]=="object"){const l=a[0],d=a[1]||"rehydrate";n(c=>d==="override"?{...l,...c}:{...c,...l})}else if(typeof a[0]=="function"){const l=a[0],d=a[1]||"rehydrate";n(c=>{const p=l(c);return d==="override"?{...p}:{...c,...p}})}else throw new Error("Invalid arguments")}return[o,i,r]}const qn=e=>{const[o,n]=u.useState(new Map(Object.entries(e)));function r(...d){if(d.length===0)throw new Error("No arguments provided");const c=d[0],p=d[1];if(typeof c=="function"){const h=c,g=p||"override";n(v=>{const C=h(v),y=C instanceof Map?C:new Map(Object.entries(C));return g==="override"?y:new Map([...v,...y])})}else if(typeof c=="object"&&c!==null){const h=c,g=p||"rehydrate";n(v=>g==="override"?new Map(Object.entries(h)):new Map([...v,...Object.entries(h)]))}else if(d.length===2){const h=c;if(typeof p=="function"){const g=p;n(v=>{const C=o.get(h);return new Map(v.entries()).set(h,g(C))})}else{const g=p;n(v=>new Map(v.entries()).set(h,g))}}else throw new Error("Invalid arguments")}function i(d){return o.get(d)}function a(d){n(c=>c.has(d)?(c.delete(d),new Map(c)):c)}function l(d,c){n(p=>{if(p.has(d)&&p.get(d)===c)return p;const h=new Map(p);return h.set(d,c),h})}return{map:o,set:r,get:i,del:a,add:l}};function Ta(e,o,n){const[r,i]=u.useState([...e].map(x=>({...x,[o?.idKey||"_id"]:zo()}))),[a,l]=u.useState([...e]);u.useEffect(()=>{const x=r.map(A=>{const U={...A};return U[o?.idKey||"_id"]&&delete U[o?.idKey||"_id"],U});l([...x])},n||[]);const d=u.useCallback(()=>{const x=r.map(A=>{const U={...A};return U[o?.idKey||"_id"]&&delete U[o?.idKey||"_id"],U});l([...x])},[r]),c=u.useCallback(x=>{i(A=>[...A,{...x,[o?.idKey||"_id"]:zo()}])},[o?.idKey]),p=u.useCallback(x=>{if(x==null)throw new Error("idKey is required to removeItem in list");i(A=>A.filter(U=>U[o?.idKey||"_id"]!==x))},[o?.idKey]),h=u.useCallback(x=>{x.forEach(A=>{p(A)})},[o?.idKey]),g=u.useCallback(x=>{if(x!==void 0){i([...x].map(A=>({...A,[o?.idKey||"_id"]:zo()})));return}i([...a].map(A=>({...A,[o?.idKey||"_id"]:zo()})))},[a]),v=u.useCallback(x=>{if(x.some(A=>[void 0,null].includes(A[o?.idKey||"_id"])))throw new Error("idKey is required to updateItem in list");i(x)},[]),y=[...r].sort(o?.sortFn||(()=>0)).filter(o?.filterFn||(()=>!0)),[k,w]=u.useState(1),T=u.useMemo(()=>Math.max(1,Math.ceil(y.length/(o?.itemsPerPage??10))),[y.length,o?.itemsPerPage]),E=u.useCallback(x=>{x>=1&&x<=T&&w(x)},[T]),S=u.useCallback(()=>{k>1&&w(x=>x-1)},[k]),$=u.useCallback(()=>{k<T&&w(x=>x+1)},[k,T]),P=y.slice((k-1)*(o?.itemsPerPage??10),k*(o?.itemsPerPage??10));return[r,{updateItems:v,addItem:c,removeItem:p,removeItems:h,save:d,reset:g,filteredItems:y,originalItems:a,render:()=>y?.length?y.map((x,A,U)=>o?.renderFn?t(u.Fragment,{children:o?.renderFn(x,A,U)},x[o?.idKey||"_id"]):null):o?.renderEmpty?typeof o?.renderEmpty=="function"?o?.renderEmpty():o?.renderEmpty:null,pagedItems:P,currentPage:k,totalPage:T,goToPage:E,goLastPage:S,goNextPage:$}]}const Nm=(e,o={idKey:"_id"})=>{const[n,r]=u.useState(pl(e)),[i,a]=u.useState(null),l=o.idKey,d=o.renderNode||(()=>null),c=o.filterFn;if(!l&&l!==0)throw new Error("You must provide an idKey to useTree");const p=(S,$,P=0,x=null)=>{const A=$(S,P,x),U=S.children?.map(L=>p(L,$,P+1,S))||[];return[A,...U]};let h="[react-hooks-kit][useTree] Node cannot be its own parent";const g=(S,$)=>{if(!S[l]&&S[l]!==0&&(S[l]=`${zo()}`),S[l]===$){if(o.strict)throw new Error(h);return console.error(h),h}let P=!1,x=!1;if(h=`[react-hooks-kit][useTree] Node with id ${S[l]} already exists`,p(n,A=>{if(A[l]===S[l]&&(x=!0,o.strict))throw new Error(h)}),x)return console.error(h),h;if(p(n,A=>{A[l]===$&&(P=!0,Array.isArray(A.children)||(A.children=[]),A.children?.push(S))}),h=`[react-hooks-kit][useTree] Parent with id ${$} does not exist`,!P&&o.strict)throw new Error(h);if(!P)return console.error(h),h;r({...n})},v=S=>{let $="[react-hooks-kit][removeNode] You must provide a nodeId to removeNode";if(!S&&S!==0){if(o.strict)throw new Error($);return console.error($),$}let P=!1;if(p(n,x=>{x[l]===S&&(P=!0),x.children?.some(A=>A[l]===S)&&(P=!0),x.children=x.children?.filter(A=>A[l]!==S)||[]}),!P){if($=`[react-hooks-kit][useTree] Node to remove with id ${S} does not exist`,o.strict)throw new Error($);return console.error($),$}r({...n})},C=(S,$)=>{let P="[react-hooks-kit][useTree] You must provide a nodeId to updateNode";if(!S&&S!==0){if(o.strict)throw new Error(P);return console.error(P),P}let x=!1;if(p(n,A=>{A[l]===S&&(x=!0,Object.assign(A,$))}),!x){if(P=`[react-hooks-kit][useTree] Node to update with id ${S} does not exist`,o.strict)throw new Error(P);return console.error(P),P}r({...n})},y=S=>{let $=null;return p(n,P=>{P[l]===S&&($=P)}),$},k=S=>{let $;typeof S=="string"?$=x=>x[l]===S:$=S;const P=[];return p(n,x=>{$(x)&&P.push(x)}),P},w=(S,$)=>{let P=null;if(p(n,x=>{x[l]===S&&(P=x)}),P===null){let x=`[react-hooks-kit][useTree] Node to move with id ${S} does not exist`;if(o.strict)throw new Error(x);return console.error(x),x}v(S),g(P,$)},T=u.useCallback(()=>{if(!d)throw new Error("[react-hooks-kit][useTree] You must provide a renderNode function to useTree");return!n||JSON.stringify(n)==="{}"?o.renderEmpty?typeof o.renderEmpty=="function"?o.renderEmpty():o.renderEmpty:null:p(n,(S,$,P)=>d(S,l,$,P,n))},[n,d]),E=(S,$)=>{if(typeof S=="string"){let x=y(S);return x?p(x,$):[]}else return p(n,S)};return u.useEffect(()=>{if(c){const S=p(n,$=>c($)?$:null);a(S.filter($=>$!==null))}},[n,c]),[n,{addNode:g,removeNode:v,updateNode:C,findNode:y,moveNode:w,searchTree:k,traverse:E,render:T}]},Ra=(e,o="onSetState",n)=>{const[r,i]=u.useState(o==="onSetState"?0:-1),[a,l]=u.useState(e),d=c=>{l(c),o==="onSetState"&&i(p=>p+1)};return u.useEffect(()=>{o==="onChange"&&i(c=>c+1)},n?typeof n=="function"?n(a):n:[a]),[a,d,r]};function Vm(e){const o=u.useRef(e),n=Qs();return{get:r=>r===void 0||o.current===null?o.current:Reflect.get(o.current,r),set:(r,i)=>{const a=Reflect.set(o.current,r,i);return n(),a},has:r=>Reflect.has(o.current,r),apply:r=>Reflect.apply(r,o.current,[])}}const Om=(e,o,n)=>{let r;r=o;const i=u.useMemo(()=>({immediate:typeof n?.immediate=="boolean"?n.immediate?"all":"none":n?.immediate??"none",callAtFirst:n?.callAtFirst??!0,pauseAtFirst:n?.pauseAtFirst??!1,duration:n?.duration??r??1e3,delay:n?.delay??0}),[n,r]),[a,l]=u.useState(0),[d,c]=u.useState(i.pauseAtFirst),p=u.useRef(0),h=u.useRef(null),g=u.useRef(e);g.current=e;const v=d?"off":"on",C=u.useCallback(()=>{h.current&&(clearTimeout(h.current),h.current=null)},[]),y=u.useCallback(()=>{C(),h.current=setTimeout(()=>{p.current+=1;const $=p.current;l($),(i.callAtFirst||$>0)&&g.current($),d||y()},i.duration)},[i.duration,i.callAtFirst,d,C]),k=u.useCallback(()=>{c(!0),C()},[C]),w=u.useCallback(()=>{c(!1)},[]),T=u.useCallback(()=>{p.current=0,l(0)},[]),E=u.useCallback($=>{setTimeout(k,$)},[k]),S=u.useCallback($=>{setTimeout(w,$)},[w]);return u.useEffect(()=>(d||y(),C),[d,y,C]),u.useEffect(()=>{const P=setTimeout(()=>{(i.immediate==="mounted"||i.immediate==="all")&&g.current(0)},i.delay);return()=>clearTimeout(P)},[i.immediate,i.delay]),{tick:a,status:v,pause:k,resume:w,reset:T,delayedPause:E,delayedResume:S}};function Lm(e,o=200,n=!1,r){let i=null,a=!1;const l=function(...d){return new Promise((c,p)=>{if(i&&clearTimeout(i),n&&!a){const h=e.apply(this,d);r&&r(h),c(h),a=!0,i=setTimeout(()=>{a=!1,i=null},o)}else a=!0,i=setTimeout(()=>{const h=e.apply(this,d);r&&r(h),c(h),a=!1,i=null},o)})};return l.cancel=function(){i&&clearTimeout(i),i=null,a=!1},l}const Bm=()=>{};function jm(e,o=200,n=!1,r){if(typeof e!="function")throw new Error("fn must be a function");if(typeof o!="number")throw new Error("delay must be a number");const i=u.useRef(e),a=u.useRef({immediate:n,callback:r});return i.current=e,a.current={immediate:n,callback:r},u.useMemo(()=>o<0?Bm:o===0?i.current:Lm(i.current,o,a.current.immediate,a.current.callback),[o])}const er=(e,o,n,r,i)=>{let a=!1;typeof r=="boolean"?a=r:r&&(a=r.strict||!1,i=r.immediate);let l=hl;o instanceof Function&&(l=o);let d;try{d=l(e,o,a)}catch(v){console.error(v)}const[c,p]=u.useState(d),h=u.useRef(c),g=u.useRef(!1);return u.useEffect(()=>{!g.current&&i&&(n?.(c,h.current),g.current=!0)},[]),u.useEffect(()=>{let v;try{v=l(e,o,a)}catch(C){console.error(C)}Js(v,h.current)||(n?.(v,h.current),p(v),h.current=v)},[e,o,n]),c};function Dm(e,o,n){const[r,i]=u.useState(e()),a=u.useRef(r);return u.useEffect(()=>{let d;const c=()=>{const p=e();p!==a.current&&(a.current=p,i(p),o?.(p)),d=requestAnimationFrame(c)};return c(),()=>{cancelAnimationFrame(d)}},[e]),n?[r,()=>{const d=e();d!==a.current&&(a.current=d,i(d),o?.(d))}]:r}function Um(e,o=()=>{},n=!1){return Dm(e,o,n)}const zm=(e,o,n=!1)=>{u.useEffect(()=>{const r=Ys(e).then(o);return n&&o(e.value),()=>r()},[e.id])};function Ea({callback:e,target:o}={},n=[]){const[r,i]=u.useState({width:0,height:0});return u.useLayoutEffect(()=>{if(o){const a=typeof o=="string"?document.getElementById(o):o.current;if(a){const l=new ResizeObserver(d=>{d.forEach(c=>{i({width:c.target.clientWidth,height:c.target.clientHeight}),e?.({width:c.target.clientWidth,height:c.target.clientHeight})})});return l.observe(a),()=>{l.unobserve(a)}}}else{const a=()=>{i({width:window.innerWidth,height:window.innerHeight}),e?.({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",a),a(),()=>window.removeEventListener("resize",a)}},n),r}function _m(e,o,n){let r={};const[i,a]=u.useState({status:"idle",data:null,error:null}),l=new AbortController;return[i,()=>{l.abort()},()=>{a({...i,status:"pending"}),e().then(p=>{a({status:"resolved",data:p,error:null}),r.onResolve?.(p)}).catch(p=>{p.name!=="AbortError"&&(a({status:"rejected",data:null,error:p}),r.onReject?.(p))}).finally(()=>{r.onFinally?.()})}]}function Fm(e,o){const[n,r]=u.useState(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),i=u.useCallback(a=>l=>{const d=l.matches?"dark":"light";r(d),a(d)},[]);return u.useEffect(()=>{const a=window.matchMedia("(prefers-color-scheme: dark)");let l=null;return l=i(()=>{}),a.addEventListener("change",l),()=>{l&&a.removeEventListener("change",l)}},[e,o,i]),n}function Wm({loadMoreItems:e,items:o,hasMore:n,height:r,style:i,renderTop:a,renderItem:l,itemComponent:d,itemComponentProps:c,renderEmpty:p,renderLoader:h,renderUnLoaded:g,loaderComponent:v,loaderComponentProps:C,containerComponent:y,containerComponentProps:k,renderBottom:w,observerOptions:T},E){const[S,$]=u.useState(!1),P=u.useRef(null),x=u.useCallback(async()=>{S||!n||($(!0),await e(),$(!1))},[S,n,e]);u.useEffect(()=>{const te={root:null,rootMargin:"20px",threshold:1},z=new IntersectionObserver(B=>{B[0].isIntersecting&&x()},{...te,...T});return P.current&&z.observe(P.current),()=>z.disconnect()},[T,x]);const A=u.useMemo(()=>y||"div",[y]),U=u.useMemo(()=>d||"div",[d]),O=u.useMemo(()=>v||"div",[v]),L=u.useMemo(()=>{const{style:te,...z}=k??{};return{...z,style:{overflow:"auto",height:r,...i,...te}}},[k,r,i]),D=u.useCallback(()=>s(A,{...L,children:[typeof a=="function"?a():a,(o||[]).length===0&&(typeof p=="function"?p():p===void 0?"No data":p),o.map((te,z)=>t(U,{...c,children:typeof l=="function"?l(te):l},z)),s(O,{ref:P,...C,children:[S&&(typeof h=="function"?h():h===void 0?"Loading...":h),!S&&!n&&(typeof g=="function"?g():g===void 0?"No more data":g)]}),typeof w=="function"?w():w]}),[L,a,o,U,c,l,P,C,S,h,n,g,w]);return[P,S,o,D]}let tr=!1;function Ir(e={},o=!0){const n=u.useRef(null),r=u.useRef(!1);return u.useEffect(()=>{if(!r.current){try{"paintWorklet"in CSS&&!tr?(CSS.paintWorklet.addModule(ml),tr=!0):tr||console.warn("Your browser doesn't support CSS Paint API")}catch(i){console.error(i)}r.current=!0}},[]),u.useEffect(()=>{const i=n.current;if(!i)return;const a=e.trigger||"mousedown",l=e.duration||500,d=e.color||null,c=e.num||10,p=e.size??3;let h=null;const g=v=>{if(!o)return;const C=v.clientX-i.getBoundingClientRect().left,y=v.clientY-i.getBoundingClientRect().top,k=performance.now();console.log(`x: ${C}, y: ${y}`),i.style.setProperty("--particle-x",`${C}px`),i.style.setProperty("--particle-y",`${y}px`),i.style.setProperty("--particle-size",`${p}`),i.style.setProperty("--particle-color",d===null?null:d),i.style.setProperty("--particle-time",`${performance.now()/l}`),i.style.setProperty("--particle-num",`${c}`),i.style.backgroundImage="paint(particle)";const w=T=>{const E=(T-k)/(e.duration??500);i.style.setProperty("--particle-time",`${E}`),E<1?h=requestAnimationFrame(w):h&&cancelAnimationFrame(h)};h=requestAnimationFrame(w)};return i.addEventListener(a,g),()=>{i.removeEventListener(a,g)}},[n,e]),n}function qm(e){const[o,n]=u.useState({width:0,height:0,top:0,left:0});return u.useEffect(()=>{const r=document.getElementById(e);if(!r)return;const i=new ResizeObserver(a=>{a.forEach(l=>{n({width:l.contentRect.width,height:l.contentRect.height,top:l.contentRect.top,left:l.contentRect.left})})});return i.observe(r),()=>{i.unobserve(r)}},[e]),o}function Hm(e,...o){const[n,r]=u.useState(e),i=u.useMemo(()=>o.filter(l=>typeof l=="function"?l(n,n):l).map(l=>typeof l=="string"?l:"Data is protected and cannot be modified."),[JSON.stringify(n),o]);return[n,l=>{i.length&&i.forEach(d=>{throw new Error(d)}),typeof l=="function"&&(l=l(n)),!Js(n,l)&&(o.length&&o.forEach(d=>{if(typeof d=="function"){const c=d(n,l);if(c)switch(typeof c){case"string":throw new Error(c);case"boolean":throw new Error("Data is protected and cannot be modified.")}}}),r(l))}]}function sn(e){const[o,n]=u.useState(e??document.title),r=u.useRef(document.title),i=u.useRef(!1);return u.useEffect(()=>{e&&(i.current=!0,document.title=e)},[]),u.useEffect(()=>{i.current=!0,document.title=o},[o]),u.useEffect(()=>{const a=document.querySelector("title");if(!a)return;const l=r.current,d=new MutationObserver(()=>{i.current||n(document.title),i.current=!1});return d.observe(a,{childList:!0,characterData:!0,subtree:!0}),()=>{d.disconnect(),document.title=l}},[]),[o,n]}function So(e,o){const n=u.useMemo(()=>typeof o=="string"||typeof o=="number"?{content:o}:o?.badge??null,[o]);u.useEffect(()=>{if(e){if(!n){or(e);return}Km(e,n).then(or).catch(()=>or(e))}},[e,n])}function or(e){document.querySelectorAll("link[rel*='icon']").forEach(n=>n.remove());const o=document.createElement("link");o.rel="icon",o.type="image/png",o.href=e,document.head.appendChild(o)}async function Km(e,o){const{content:n,position:r="top-right",bgColor:i="#ff3b30",textColor:a="#fff",size:l=.5}=o;return new Promise((d,c)=>{const p=new Image;p.onload=()=>{try{const h=Math.max(p.naturalWidth||0,64),g=document.createElement("canvas");g.width=h,g.height=h;const v=g.getContext("2d");if(!v)return c("ctx failed");v.drawImage(p,0,0,h,h);const C=Math.max(h*l,14),y=C/2,k=h*.06;let w=0,T=0;switch(r){case"top-left":w=y+k,T=y+k;break;case"bottom-left":w=y+k,T=h-y-k;break;case"bottom-right":w=h-y-k,T=h-y-k;break;default:w=h-y-k,T=y+k}v.fillStyle=i,v.beginPath(),v.arc(w,T,y,0,Math.PI*2),v.fill();let E=String(n);typeof n=="number"&&n>99&&(E="99+"),v.fillStyle=a,v.font=`bold ${C*.65}px system-ui, -apple-system, sans-serif`,v.textAlign="center",v.textBaseline="middle",v.fillText(E,w,T+.5),d(g.toDataURL("image/png"))}catch(h){c(h)}},p.onerror=()=>{c(new Error(`Failed to load icon: ${e}`))},p.src=e})}function Gm(e,o={}){const{fontFamily:n="Arial, sans-serif",fontSize:r=24,textColor:i="#fff",bgColor:a="transparent",dpr:l=window.devicePixelRatio||1}=o,d=document.createElement("canvas");d.width=r*l,d.height=r*l;const c=d.getContext("2d");if(!c)throw new Error("Failed to get 2D context from canvas");return c.scale(l,l),c.fillStyle=a,c.fillRect(0,0,r,r),c.fillStyle=i,c.font=`bold ${r}px ${n}`,c.textAlign="center",c.textBaseline="middle",c.fillText(String(e),r/2,r/2),d.toDataURL("image/png")}const Qm={facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},fi=["qr_code"];let Jm=0,gi=null;const Ym=()=>(gi??=fl(()=>import("./index-Bh0xbNdn.js"),__vite__mapDeps([0,1,2])),gi),Xm=()=>typeof navigator<"u"&&/MicroMessenger/i.test(navigator.userAgent),Gt=e=>e instanceof Error?e:new Error(String(e));class Zm{constructor(o={}){this.scanner=null,this.currentMode="none",this.isScanning=!1,this.isPaused=!1,this.operation=0,this.cameraSwitchRequest=0,this.abortController=null,this.lastHtml5Options=null,this.ownedContainers=new WeakMap,this.pendingScanners=new WeakSet,this.disposedScanners=new WeakSet,this.wechatAdapter=o.wechatAdapter,this.isWechatEnvironment=o.isWechatEnvironment??Xm,this.loadHtml5Qrcode=o.loadHtml5Qrcode??Ym}getRecommendedMode(){return this.isWechatAvailable()?"wechat":"html5"}validateMode(o){return o==="wechat"&&!this.isWechatAvailable()?{valid:!1,reason:"WeChat scanning requires a WeChat browser and an available wechatAdapter."}:o==="html5"&&typeof document>"u"?{valid:!1,reason:"HTML5 scanning requires a browser document."}:{valid:!0}}async start(o){const n=++this.operation;this.abortController?.abort();const r=new AbortController;this.abortController=r;try{const i=o.mode==="auto"?this.getRecommendedMode():o.mode,a=this.validateMode(i);if(!a.valid)throw new Error(a.reason);if(o.formats.length===0)throw new Error("At least one scan format must be provided.");if(i==="html5"&&this.assertContainer(o.containerId),await this.stopActiveScanner(),!this.isCurrent(n))return;this.currentMode=i,this.isScanning=!0,this.isPaused=!1,i==="wechat"?await this.startWechat(o,r.signal,n):await this.startHtml5(o,n)}catch(i){if(!this.isCurrent(n))return;const a=Gt(i);throw this.isScanning=!1,this.isPaused=!1,this.currentMode="none",o.onError?.(a),a}}async stop(){++this.operation,this.abortController?.abort(),this.abortController=null;const o=this.currentMode;this.currentMode="none",this.isScanning=!1,this.isPaused=!1;const n=this.stopActiveScanner(),r=o==="wechat"&&this.wechatAdapter?.cancel?Promise.resolve(this.wechatAdapter.cancel()):Promise.resolve();await Promise.all([n,r])}async pause(){if(this.currentMode!=="html5"||!this.scanner||!this.isScanning)throw new Error("An active HTML5 scanner is required before pausing.");this.scanner.pause(!0),this.isPaused=!0}async resume(){if(this.currentMode!=="html5"||!this.scanner||!this.isPaused)throw new Error("A paused HTML5 scanner is required before resuming.");this.scanner.resume(),this.isPaused=!1}async switchCamera(o){if(this.currentMode!=="html5"||!this.scanner||!this.isScanning||!this.lastHtml5Options)throw new Error("An active HTML5 scanner is required before switching cameras.");const n=++this.cameraSwitchRequest,r=this.operation,i=this.scanner,a=await this.getCameras();if(this.assertCurrentCameraOperation(n,r,i),a.length===0)throw new Error("No camera was found.");let l;if(o){if(l=a.find(p=>p.id===o),!l)throw new Error(`Camera ${o} was not found.`)}else{if(a.length<2)throw new Error("At least two cameras are required to switch cameras.");const p=this.getRunningCameraId(),h=a.findIndex(g=>g.id===p);l=a[(h+1+a.length)%a.length]}this.assertCurrentCameraOperation(n,r,i);const d=this.start({...this.lastHtml5Options,mode:"html5",camera:l.id}),c=this.operation;if(await d,n!==this.cameraSwitchRequest||!this.isCurrent(c)||this.currentMode!=="html5"||!this.isScanning){const p=new Error("Camera switch was superseded by a newer operation.");throw p.name="AbortError",p}return l}async getCameras(){if(typeof navigator>"u")throw new Error("Camera enumeration requires a browser environment.");const{Html5Qrcode:o}=await this.loadHtml5Qrcode();return(await o.getCameras()).map(({id:r,label:i})=>({id:r,label:i}))}scanImage(o,n={}){try{if(this.assertImageFile(o,n.maxFileSize),(n.formats??fi).length===0)throw new Error("At least one scan format must be provided.");this.assertImageContainer(n.containerId,n.showImage??!1)}catch(r){return Promise.reject(Gt(r))}return this.scanImageInternal(o,n).catch(r=>{throw Gt(r)})}async scanImageInternal(o,n){const r=n.formats??fi,i=++this.operation;this.abortController?.abort(),this.abortController=null;const a=this.currentMode;this.currentMode="none",this.isScanning=!1,this.isPaused=!1;const l=this.stopActiveScanner(),d=a==="wechat"&&this.wechatAdapter?.cancel?Promise.resolve(this.wechatAdapter.cancel()):Promise.resolve();await Promise.all([l,d]),this.assertCurrentImageOperation(i);const c=await this.loadHtml5Qrcode();this.assertCurrentImageOperation(i);const p=n.showImage??!1,h=this.resolveImageContainer(n.containerId,p);let g;try{g=new c.Html5Qrcode(h.id,{formatsToSupport:this.mapFormats(c,r),useBarCodeDetectorIfSupported:(n.useNativeDetector??!0)&&this.getSupportsNativeDetector(),verbose:n.verbose??!1})}catch(v){throw h.owned&&h.element.remove(),Gt(v)}h.owned&&this.ownedContainers.set(g,h.element),this.scanner=g;try{this.pendingScanners.add(g);let v;try{v=await g.scanFileV2(o,p)}finally{this.pendingScanners.delete(g)}this.isActiveScanner(i,g)||(await this.disposeScanner(g),this.assertCurrentImageOperation(i));const C=this.normalizeResult(c,v,"image");return p||(this.scanner===g&&(this.scanner=null),await this.disposeScanner(g)),C}catch(v){throw this.scanner===g&&(this.scanner=null),await this.disposeScanner(g),Gt(v)}}async getCameraCapabilities(){if(this.currentMode!=="html5"||!this.scanner||!this.isScanning)return null;try{const o=this.scanner.getRunningTrackCapabilities(),n=this.scanner.getRunningTrackSettings(),r=o.torch,i=Array.isArray(r)?r.indexOf(!0)>=0&&r.indexOf(!1)>=0:r===!0,a=o.zoom,l=this.finiteNumberOrNull(a?.min),d=this.finiteNumberOrNull(a?.max),c=l!==null&&d!==null&&d>=l;return{torch:{supported:i,enabled:typeof n.torch=="boolean"?n.torch:null},zoom:{supported:c,value:this.finiteNumberOrNull(n.zoom),min:c?l:null,max:c?d:null,step:c?this.positiveFiniteNumberOrNull(a?.step):null}}}catch(o){throw Gt(o)}}async setTorch(o){const n=this.getActiveHtml5Scanner("torch");if(!(await this.getCameraCapabilities())?.torch.supported)throw new Error("The active camera does not support torch control.");const i={torch:o};await n.applyVideoConstraints({advanced:[i]});const a=await this.getCameraCapabilities();if(!a)throw new Error("The active camera stopped before torch was applied.");return a}async setZoom(o){if(!Number.isFinite(o))throw new Error("Camera zoom must be a finite number.");const n=this.getActiveHtml5Scanner("zoom"),r=await this.getCameraCapabilities();if(!r?.zoom.supported)throw new Error("The active camera does not support zoom control.");if(o<r.zoom.min||o>r.zoom.max)throw new Error(`Camera zoom must be between ${r.zoom.min} and ${r.zoom.max}.`);const i={zoom:o};await n.applyVideoConstraints({advanced:[i]});const a=await this.getCameraCapabilities();if(!a)throw new Error("The active camera stopped before zoom was applied.");return a}getCurrentMode(){return this.currentMode}getIsScanning(){return this.isScanning}getIsWechatEnv(){return this.isWechatEnvironment()}getSupportsNativeDetector(){if(typeof window>"u")return!1;const o=window.BarcodeDetector;if(typeof o!="function")return!1;try{return new o({formats:["qr_code"]}),!0}catch{return!1}}async destroy(){await this.stop()}isWechatAvailable(){return this.getIsWechatEnv()&&!!this.wechatAdapter&&(this.wechatAdapter?.isAvailable?.()??!0)}assertContainer(o){if(!o)throw new Error("containerId is required for HTML5 scanning.");if(!document.getElementById(o))throw new Error(`Container #${o} does not exist.`)}assertImageFile(o,n){if(typeof File>"u"||!(o instanceof File))throw new Error("scanImage requires a browser File object.");if(o.type&&!o.type.startsWith("image/"))throw new Error("scanImage only accepts image files.");if(n!==void 0&&(!Number.isFinite(n)||n<=0))throw new Error("maxFileSize must be a positive finite number.");if(n!==void 0&&o.size>n)throw new Error(`Image file size ${o.size} exceeds the ${n} byte limit.`)}resolveImageContainer(o,n){if(typeof document>"u")throw new Error("Image scanning requires a browser document.");if(o){const a=document.getElementById(o);if(!a)throw new Error(`Container #${o} does not exist.`);const l=this.createOwnedScannerContainer(a,!1);return{id:l.id,element:l,owned:!0}}if(n)throw new Error("containerId is required when showImage is true.");const r=document.body??document.documentElement;if(!r)throw new Error("Image scanning requires an initialized browser document.");const i=this.createOwnedScannerContainer(r,!0);return{id:i.id,element:i,owned:!0}}createOwnedScannerContainer(o,n){const r=document.createElement("div");return r.id=`react-hooks-kit-qrcode-scanner-${++Jm}`,r.hidden=n,o.appendChild(r),r}assertImageContainer(o,n){if(typeof document>"u")throw new Error("Image scanning requires a browser document.");if(n&&!o)throw new Error("containerId is required when showImage is true.");if(o&&!document.getElementById(o))throw new Error(`Container #${o} does not exist.`)}assertCurrentImageOperation(o){this.isCurrent(o)||this.throwSupersededImageError()}throwSupersededImageError(){const o=new Error("Image scan was superseded by a newer operation.");throw o.name="AbortError",o}assertCurrentCameraOperation(o,n,r){if(o===this.cameraSwitchRequest&&this.isCurrent(n)&&this.scanner===r&&this.currentMode==="html5"&&this.isScanning)return;const i=new Error("Camera switch was superseded by a newer operation.");throw i.name="AbortError",i}getActiveHtml5Scanner(o){if(this.currentMode!=="html5"||!this.scanner||!this.isScanning)throw new Error(`An active HTML5 scanner is required before controlling camera ${o}.`);return this.scanner}finiteNumberOrNull(o){return typeof o=="number"&&Number.isFinite(o)?o:null}positiveFiniteNumberOrNull(o){const n=this.finiteNumberOrNull(o);return n!==null&&n>0?n:null}createBasicResult(o,n){return{text:o,source:n,format:null,formatName:null,contentType:null,bounds:null,decoderName:null,timestamp:Date.now()}}normalizeResult(o,n,r){const i=n.result,a=i.bounds;return{text:n.decodedText,source:r,format:i.format===void 0?null:this.unmapFormat(o,i.format.format),formatName:i.format?.formatName??null,contentType:i.decodedTextType===void 0?null:i.decodedTextType===1?"url":"unknown",bounds:a?{x:a.x,y:a.y,width:a.width,height:a.height}:null,decoderName:i.debugData?.decoderName??null,timestamp:Date.now()}}async startWechat(o,n,r){const i=await this.wechatAdapter.scan({signal:n,formats:o.formats});this.isCurrent(r)&&(this.isScanning=!1,this.currentMode="none",i===null?o.onCancel?.():o.onSuccess(i,this.createBasicResult(i,"wechat")))}async startHtml5(o,n){const r=await this.loadHtml5Qrcode();if(!this.isCurrent(n))return;const i=o.useNativeDetector&&this.getSupportsNativeDetector(),a=document.getElementById(o.containerId);if(!a)throw new Error(`Container #${o.containerId} does not exist.`);const l=this.createOwnedScannerContainer(a,!1);let d;try{d=new r.Html5Qrcode(l.id,{formatsToSupport:this.mapFormats(r,o.formats),useBarCodeDetectorIfSupported:i,verbose:o.verbose})}catch(g){throw l.remove(),g}this.ownedContainers.set(d,l),this.scanner=d,this.lastHtml5Options=o;const c=o.camera??Qm,p=typeof c=="string"?c:{facingMode:"environment"},h={fps:o.fps,qrbox:o.qrbox,aspectRatio:o.aspectRatio,disableFlip:o.disableFlip,videoConstraints:typeof c=="string"?void 0:c};try{this.pendingScanners.add(d);try{await d.start(p,h,(g,v)=>{this.isActiveScanner(n,d)&&(o.onSuccess(g,this.normalizeResult(r,v,"camera")),o.stopOnSuccess&&this.stop().catch(C=>o.onError?.(Gt(C))))},g=>{this.isActiveScanner(n,d)&&o.onDecodeError?.(g)})}finally{this.pendingScanners.delete(d)}this.isActiveScanner(n,d)||await this.disposeScanner(d)}catch(g){throw this.scanner===d&&(this.scanner=null),await this.disposeScanner(d),g}}mapFormats(o,n){const r=o.Html5QrcodeSupportedFormats,i={qr_code:r.QR_CODE,aztec:r.AZTEC,codabar:r.CODABAR,code_39:r.CODE_39,code_93:r.CODE_93,code_128:r.CODE_128,data_matrix:r.DATA_MATRIX,maxicode:r.MAXICODE,itf:r.ITF,ean_13:r.EAN_13,ean_8:r.EAN_8,pdf_417:r.PDF_417,rss_14:r.RSS_14,rss_expanded:r.RSS_EXPANDED,upc_a:r.UPC_A,upc_e:r.UPC_E,upc_ean_extension:r.UPC_EAN_EXTENSION};return n.map(a=>i[a])}unmapFormat(o,n){const r=o.Html5QrcodeSupportedFormats;return[[r.QR_CODE,"qr_code"],[r.AZTEC,"aztec"],[r.CODABAR,"codabar"],[r.CODE_39,"code_39"],[r.CODE_93,"code_93"],[r.CODE_128,"code_128"],[r.DATA_MATRIX,"data_matrix"],[r.MAXICODE,"maxicode"],[r.ITF,"itf"],[r.EAN_13,"ean_13"],[r.EAN_8,"ean_8"],[r.PDF_417,"pdf_417"],[r.RSS_14,"rss_14"],[r.RSS_EXPANDED,"rss_expanded"],[r.UPC_A,"upc_a"],[r.UPC_E,"upc_e"],[r.UPC_EAN_EXTENSION,"upc_ean_extension"]].find(([l])=>l===n)?.[1]??null}getRunningCameraId(){try{return this.scanner?.getRunningTrackSettings().deviceId}catch{const o=this.lastHtml5Options?.camera;return typeof o=="string"?o:void 0}}isCurrent(o){return o===this.operation}isActiveScanner(o,n){return this.isCurrent(o)&&this.scanner===n}async stopActiveScanner(){const o=this.scanner;if(this.scanner=null,!!o)try{await this.disposeScanner(o)}catch(n){throw this.scanner||(this.scanner=o),n}}async disposeScanner(o){if(this.disposedScanners.has(o))return;if(this.pendingScanners.has(o)){const i=this.ownedContainers.get(o);i&&(i.hidden=!0);return}let n;if(o.isScanning)try{await o.stop()}catch(i){n=i}try{o.clear()}catch(i){n??=i}if(n)throw Gt(n);const r=this.ownedContainers.get(o);r&&(this.ownedContainers.delete(o),r.remove()),this.disposedScanners.add(o)}}const vi={fps:10,qrbox:250,aspectRatio:1,disableFlip:!1,formats:["qr_code"],useNativeDetector:!0,verbose:!1,stopOnSuccess:!1},Pt=e=>e instanceof Error?e:new Error(String(e)),ef=(e,o)=>({text:e,source:o,format:null,formatName:null,contentType:null,bounds:null,decoderName:null,timestamp:Date.now()}),tf=async()=>{if(typeof navigator>"u"||!navigator.mediaDevices||!navigator.permissions?.query)return{state:"unsupported",status:null};try{const e=await navigator.permissions.query({name:"camera"});return{state:e.state,status:e}}catch{return{state:"unsupported",status:null}}},of=()=>typeof navigator>"u"||!navigator.mediaDevices||!navigator.permissions?.query?"unsupported":"unknown",nf=(e,o)=>{if(typeof File>"u"||!(e instanceof File))throw new Error("scanImage requires a browser File object.");if(e.type&&!e.type.startsWith("image/"))throw new Error("scanImage only accepts image files.");if(o.maxFileSize!==void 0&&(!Number.isFinite(o.maxFileSize)||o.maxFileSize<=0))throw new Error("maxFileSize must be a positive finite number.");if(o.maxFileSize!==void 0&&e.size>o.maxFileSize)throw new Error(`Image file size ${e.size} exceeds the ${o.maxFileSize} byte limit.`);if(o.formats?.length===0)throw new Error("At least one scan format must be provided.");if(typeof document>"u")throw new Error("Image scanning requires a browser document.");if(o.showImage&&!o.containerId)throw new Error("containerId is required when showImage is true.");if(o.containerId&&!document.getElementById(o.containerId))throw new Error(`Container #${o.containerId} does not exist.`)},rf=e=>e==="starting"||e==="scanning"||e==="paused",sf=(e={})=>{const o=typeof e=="string"?{mode:e}:e,n=o.mode??"auto",r=u.useRef({onSuccess:o.onSuccess,onError:o.onError,onCancel:o.onCancel,onDecodeError:o.onDecodeError});r.current={onSuccess:o.onSuccess,onError:o.onError,onCancel:o.onCancel,onDecodeError:o.onDecodeError};const[i]=u.useState(()=>o.service??new Zm({wechatAdapter:o.wechatAdapter})),[a,l]=u.useState("idle"),[d,c]=u.useState(null),[p,h]=u.useState(null),[g,v]=u.useState(null),[C,y]=u.useState("none"),[k,w]=u.useState(null),[T,E]=u.useState(of),[S]=u.useState(()=>({isWechatEnv:i.getIsWechatEnv(),supportsNativeDetector:i.getSupportsNativeDetector()})),$=u.useRef(!1),P=u.useRef(0),x=u.useRef(0),A=u.useRef(0),U=u.useRef(null);u.useEffect(()=>($.current=!0,()=>{$.current=!1,++P.current,i.destroy().catch(()=>{})}),[i]);const O=u.useCallback(H=>$.current&&H===P.current,[]),L=u.useCallback(H=>{const V=U.current;if(V&&(V.status.removeEventListener("change",V.listener),U.current=null),!H)return;const G=()=>{$.current&&E(H.state)};H.addEventListener("change",G),U.current={status:H,listener:G}},[]),D=u.useCallback(async()=>{const H=++A.current,V=await tf();return $.current&&H===A.current&&(L(V.status),E(V.state)),V.state},[L]);u.useEffect(()=>(D(),()=>{++A.current,L(null)}),[D,L]);const te=u.useCallback(async(H={})=>{const V=++P.current,G=++x.current,j={onSuccess:H.onSuccess,onError:H.onError,onCancel:H.onCancel,onDecodeError:H.onDecodeError};let ie=!1,be=!1;$.current&&(v(null),c(null),h(null),w(null),l("starting"),y("none"));const ue={...vi,...H,mode:H.mode??n,formats:H.formats??vi.formats,onSuccess:(he,Ee)=>{if(!O(V)||ue.stopOnSuccess&&be)return;be=ue.stopOnSuccess;const Re=i.getCurrentMode()==="wechat"||ue.mode==="wechat"||ue.mode==="auto"&&i.getIsWechatEnv()?"wechat":"camera",ye=Ee?Ee.text===he?Ee:{...Ee,text:he}:ef(he,Re);c(he),h(ye),ue.stopOnSuccess?(++x.current,l("idle"),y("none"),w(null)):(l("scanning"),y(i.getCurrentMode())),(j.onSuccess??r.current.onSuccess)?.(he,ye)},onError:he=>{O(V)&&(ie=!0,v(he),l("error"),y("none"),w(null),(j.onError??r.current.onError)?.(he))},onCancel:()=>{O(V)&&(l("idle"),y("none"),w(null),(j.onCancel??r.current.onCancel)?.())},onDecodeError:he=>{O(V)&&(j.onDecodeError??r.current.onDecodeError)?.(he)}};try{const he=i.start(ue);if(await Promise.resolve(),O(V)&&i.getCurrentMode()==="wechat"&&i.getIsScanning()&&(y("wechat"),l("scanning")),await he,!O(V))return;const Ee=i.getCurrentMode();if(y(Ee),l(i.getIsScanning()?"scanning":"idle"),Ee==="html5"&&i.getIsScanning()&&(E("granted"),D(),i.getCameraCapabilities))try{const Re=await i.getCameraCapabilities();O(V)&&G===x.current&&w(Re)}catch{O(V)&&G===x.current&&w(null)}}catch(he){const Ee=Pt(he);throw O(V)&&(v(Ee),l("error"),y("none"),w(null),Ee.name==="NotAllowedError"&&(E("denied"),D()),ie||(j.onError??r.current.onError)?.(Ee)),Ee}},[O,D,n,i]),z=u.useCallback(async()=>{const H=++P.current;++x.current,$.current&&(l("stopping"),w(null));try{if(await i.stop(),!O(H))return;l("idle"),y("none"),w(null)}catch(V){const G=Pt(V);throw O(H)&&(v(G),l("error"),y("none"),w(null),r.current.onError?.(G)),G}},[O,i]),B=u.useCallback(async()=>{const H=P.current;try{await i.pause(),O(H)&&l("paused")}catch(V){const G=Pt(V);throw O(H)&&(v(G),r.current.onError?.(G)),G}},[O,i]),W=u.useCallback(async()=>{const H=P.current;try{await i.resume(),O(H)&&l("scanning")}catch(V){const G=Pt(V);throw O(H)&&(v(G),r.current.onError?.(G)),G}},[O,i]),q=u.useCallback(async H=>{const V=P.current,G=++x.current;$.current&&w(null);try{const j=await i.switchCamera(H);if(O(V)&&(v(null),y(i.getCurrentMode()),l("scanning"),E("granted"),D(),i.getCameraCapabilities))try{const ie=await i.getCameraCapabilities();O(V)&&G===x.current&&w(ie)}catch{O(V)&&G===x.current&&w(null)}return j}catch(j){const ie=Pt(j);if(O(V)){if(v(ie),ie.name==="NotAllowedError"&&(E("denied"),D()),i.getCameraCapabilities&&i.getIsScanning())try{const be=await i.getCameraCapabilities();O(V)&&G===x.current&&w(be)}catch{}r.current.onError?.(ie)}throw ie}},[O,D,i]),re=u.useCallback(async()=>{try{const H=await i.getCameras();return $.current&&(v(null),E("granted"),D()),H}catch(H){const V=Pt(H);throw $.current&&(v(V),V.name==="NotAllowedError"&&(E("denied"),D()),r.current.onError?.(V)),V}},[D,i]),de=u.useCallback(async(H,V={})=>{const{onSuccess:G,onError:j,...ie}=V;try{if(nf(H,V),!i.scanImage)throw new Error("The configured QR code scan service does not support image scanning.")}catch(ue){const he=Pt(ue);throw $.current&&(v(he),(j??r.current.onError)?.(he)),he}const be=++P.current;++x.current,$.current&&(v(null),c(null),h(null),w(null),y("none"),l("decoding"));try{const ue=await i.scanImage(H,ie);return O(be)&&(c(ue.text),h(ue),l("idle"),y("none"),(G??r.current.onSuccess)?.(ue.text,ue)),ue}catch(ue){const he=Pt(ue);throw O(be)&&(v(he),l("error"),y("none"),(j??r.current.onError)?.(he)),he}},[O,i]),J=u.useCallback(async()=>{const H=++x.current;if(!i.getCameraCapabilities)return $.current&&w(null),null;try{const V=await i.getCameraCapabilities();return $.current&&H===x.current&&(w(V),v(null)),V}catch(V){const G=Pt(V);throw $.current&&H===x.current&&(v(G),r.current.onError?.(G)),G}},[i]),Le=u.useCallback(async H=>{const V=++x.current;try{if(!i.setTorch)throw new Error("The configured QR code scan service does not support torch control.");const G=await i.setTorch(H);return $.current&&V===x.current&&(w(G),v(null)),G}catch(G){const j=Pt(G);throw $.current&&V===x.current&&(v(j),r.current.onError?.(j)),j}},[i]),Be=u.useCallback(async H=>{const V=++x.current;try{if(!i.setZoom)throw new Error("The configured QR code scan service does not support zoom control.");const G=await i.setZoom(H);return $.current&&V===x.current&&(w(G),v(null)),G}catch(G){const j=Pt(G);throw $.current&&V===x.current&&(v(j),r.current.onError?.(j)),j}},[i]),He=u.useCallback(()=>{c(null),h(null)},[]),Te=u.useCallback(()=>{v(null),l(H=>H==="error"?i.getIsScanning()?"scanning":"idle":H)},[i]),Pe=u.useCallback(async()=>{await z(),$.current&&(c(null),h(null),v(null))},[z]);return{status:a,isScanning:rf(a),isPaused:a==="paused",isDecodingImage:a==="decoding",result:d,scanResult:p,error:g,mode:C,cameraCapabilities:k,cameraPermission:T,isWechatEnv:S.isWechatEnv,supportsNativeDetector:S.supportsNativeDetector,start:te,stop:z,pause:B,resume:W,switchCamera:q,getCameras:re,scanImage:de,refreshCameraCapabilities:J,setTorch:Le,setZoom:Be,refreshCameraPermission:D,clearResult:He,clearError:Te,reset:Pe}},It={GettingStarted:{Overview:{route:"overview",title:"Overview"},Installation:{route:"installation",title:"Installation"},Usage:{route:"usage",title:"Usage"},FAQs:{route:"faqs",title:"FAQs"},Support:{route:"support",title:"Support"}},SentMail:{SentMail:{route:"sent-mail",title:"Sent mail"}},Draft:{Draft:{route:"draft",title:"Draft"}},StatefulHooks:{UsePrevious:{route:"usePrevious",title:"UsePrevious",status:"stable"},UseToggle:{route:"useToggle",title:"UseToggle",status:"stable"},UseLoading:{route:"useLoading",title:"UseLoading",status:"stable"},UseRecord:{route:"useRecord",title:"UseRecord",status:"experimental"},UseMap:{route:"useMap",title:"UseMap",status:"new"},UseMeta:{route:"useMeta",title:"UseMeta",status:"stable"},UseList:{route:"useList",title:"UseList",status:"stable"},UseTree:{route:"useTree",title:"UseTree",status:"stable"},UseReactive:{route:"useReactive",title:"UseReactive",status:"stable"},UseReactor:{route:"useReactor",title:"UseReactor",status:"new"},UseReactorStore:{route:"useReactorStore",title:"UseReactorStore",status:"deprecated"},UseReactorStoreContext:{route:"useReactorStoreContext",title:"UseReactorStoreContext",status:"deprecated"},UseReactorStoreRef:{route:"useReactorStoreRef",title:"UseReactorStoreRef",status:"deprecated"},UseTickState:{route:"useTickState",title:"UseTickState",status:"stable"},UseMemento:{route:"useMemento",title:"UseMemento",status:"stable"}},CallbackHooks:{UseTicker:{route:"useTicker",title:"UseTicker",status:"new"},UseDebounce:{route:"useDebounce",title:"UseDebounce",status:"new"},UseThrottle:{route:"useThrottle",title:"UseThrottle",status:"new"},UseUrl:{route:"useUrl",title:"UseUrl",status:"new"},UseWatch:{route:"useWatch",title:"UseWatch",status:"new"},UseWatchGetter:{route:"useWatchGetter",title:"UseWatchGetter",status:"new"},UseReactorListener:{route:"useReactorListener",title:"UseReactorListener",status:"new"},UseResize:{route:"useResize",title:"UseResize",status:"new"}},PromiseHooks:{UsePromise:{route:"usePromise",title:"UsePromise",status:"experimental"},UseFetch:{route:"useFetch",title:"UseFetch",status:"preview"},UseGenerator:{route:"useGenerator",title:"UseGenerator",status:"deprecated"}},UtilsHooks:{UseForceUpdate:{route:"useForceUpdate",title:"UseForceUpdate",status:"preview"},UseForm:{route:"useForm",title:"UseForm",status:"preview"},UseLazy:{route:"useLazy",title:"UseLazy",status:"preview"},UseLazyImg:{route:"useLazyImg",title:"UseLazyImg",status:"preview"},UseLazyAudio:{route:"useLazyAudio",title:"UseLazyAudio",status:"preview"},UseLazyVideo:{route:"useLazyVideo",title:"UseLazyVideo",status:"preview"},UseMixRef:{route:"useMixRef",title:"UseMixRef",status:"experimental"},UseSafe:{route:"useSafe",title:"UseSafe",status:"preview"},UseLocalStorage:{route:"useLocalStorage",title:"UseLocalStorage",status:"preview"},UseIndexDB:{route:"useIndexDB",title:"UseIndexDB",status:"preview"},useInfiniteScroll:{route:"useInfiniteScroll",title:"UseInfiniteScroll",status:"new"},useAutoPageSize:{route:"useAutoPageSize",title:"UseAutoPageSize",status:"new"}},LifecycleHooks:{UseBeforeMount:{route:"useBeforeMount",title:"UseBeforeMount",status:"preview"},UseMount:{route:"useMount",title:"UseMount",status:"preview"},UseUnmount:{route:"useUnmount",title:"UseUnmount",status:"preview"},UseUpdate:{route:"useUpdate",title:"UseUpdate",status:"preview"},UseUpdateEffect:{route:"useUpdateEffect",title:"UseUpdateEffect",status:"preview"},UseAsyncEffect:{route:"useAsyncEffect",title:"UseAsyncEffect",status:"preview"}},UiUxHooks:{UseTheme:{route:"useTheme",title:"UseTheme",status:"preview"},UseColor:{route:"useColor",title:"UseColor",status:"preview"},UseToast:{route:"useToast",title:"UseToast",status:"experimental"},UseGuide:{route:"useGuide",title:"UseGuide",status:"experimental"},UseVirtualArea:{route:"useVirtualArea",title:"UseVirtualArea",status:"deprecated"},UseRipple:{route:"useRipple",title:"UseRipple",status:"experimental"},UseParticle:{route:"useParticle",title:"UseParticle",status:"experimental"},UseHoudini:{route:"useHoudini",title:"UseHoudini",status:"preview"}},EventHooks:{UseEmitter:{route:"useEmitter",title:"UseEmitter",status:"experimental"},UseReceiver:{route:"useReceiver",title:"UseReceiver",status:"experimental"},UseBroadCastChannel:{route:"useBroadCastChannel",title:"UseBroadCastChannel",status:"experimental"},UseProvide:{route:"useProvide",title:"UseProvide",status:"experimental"},UseInject:{route:"useInject",title:"UseInject",status:"experimental"}},OtherHooks:{UseQrcodeScan:{route:"useQrcodeScan",title:"UseQrcodeScan",status:"new"},UseProtect:{route:"useProtect",title:"UseProtect",status:"experimental"},UseRaf:{route:"useRaf",title:"UseRaf",status:"preview"},UseRafState:{route:"useRafState",title:"UseRafState",status:"preview"},UseReflect:{route:"useReflect",title:"UseReflect",status:"experimental"},UseBatchHooks:{route:"useBatchHooks",title:"UseBatchHooks",status:"experimental"},UseClickAway:{route:"useClickAway",title:"UseClickAway",status:"preview"},UseConsoleLog:{route:"useConsoleLog",title:"UseConsoleLog",status:"experimental"},UseCookie:{route:"useCookie",title:"UseCookie",status:"preview"},UseDimensions:{route:"useDimensions",title:"UseDimensions",status:"preview"},UseDimensionsById:{route:"useDimensionsById",title:"UseDimensionsById",status:"preview"},UseSafeArea:{route:"useSafeArea",title:"UseSafeArea",status:"preview"},UseScroll:{route:"useScroll",title:"UseScroll",status:"preview"},UseSingleTon:{route:"useSingleTon",title:"UseSingleTon",status:"preview"},UseMediaQuery:{route:"useMediaQuery",title:"UseMediaQuery",status:"preview"},UseMousePosition:{route:"useMousePosition",title:"UseMousePosition",status:"preview"},UseNetwork:{route:"useNetWork",title:"UseNetWork",status:"experimental"},UseOverflow:{route:"useOverflow",title:"UseOverflow",status:"preview"},UseWhyDidYouUpdate:{route:"useWhyDidYouUpdate",title:"UseWhyDidYouUpdate",status:"experimental"},UseEyeDropper:{route:"useEyeDropper",title:"UseEyeDropper",status:"preview"},UseHover:{route:"useHover",title:"UseHover",status:"preview"},UseKeyPress:{route:"useKeyPress",title:"UseKeyPress",status:"preview"},UseBattery:{route:"useBattery",title:"UseBattery",status:"experimental"},UseTitle:{route:"useTitle",title:"UseTitle",status:"new"},UseFavicon:{route:"useFavicon",title:"UseFavicon",status:"new"}}},I=e=>t("li",{style:{marginBottom:"0.5rem"},...e});function af(e){return t("div",{style:{width:"fit-content",height:"fit-content"},css:e.css,onClick:e.onClick,children:t(Rm,{style:{transform:"rotateY(180deg)"},fontSize:"small"})})}const bi=(e,o,n,r)=>{navigator.clipboard.writeText(e??"").then(()=>{o&&o()}).catch(i=>{n&&n(i||new Error("Copy failed with some unknown error"))}).finally(()=>{r&&r()})},yi=(e,o,n,r)=>{const i=document.createElement("textarea");i.value=e||"",document.body.appendChild(i),i.focus(),i.select();const a=document.execCommand("copy");document.body.removeChild(i),a?o&&o():n&&n(new Error("Copy failed with some unknown error"))};let dr=(e,o,n,r)=>{navigator.clipboard&&window.isSecureContext?(bi(e,o,n,r),dr=bi):(yi(e,o,n),dr=yi)};const ur=e=>{const o=uo(),[n,r]=u.useState(e.defaultOpen||!1),i=()=>r(!n),a=()=>{dr(e.children,()=>{o("Copied to clipboard")},()=>{o("Failed to copy to clipboard")})};return s("div",{css:lf,children:[t("div",{css:cf,children:n&&t(af,{onClick:a})}),t(dt,{in:n,children:t(ke,{theme:"vscDarkPlus",lang:e.lang??"tsx",children:e.children})}),s("div",{css:df,children:[t(N,{className:"CodexBoxBtn",onClick:i,size:"small",children:t(wm,{})}),t(N,{className:"CodexBoxBtn",onClick:a,size:"small",children:t(Cm,{fontSize:"small"})}),t(N,{className:"CodexBoxBtn",onClick:()=>{},size:"small",children:t(gl,{fontSize:"small"})})]})]})},lf={name:"bjn8wh",styles:"position:relative"},cf={name:"1f4m62j",styles:"position:absolute;top:16px;right:8px;z-index:1;color:gray;cursor:pointer;padding:8px 6px 2px 6px;border-radius:4px;&:hover{background-color:#333;}&:active{transition:background-color 0.1s ease-in-out;background-color:#444;}"},df={name:"7ggdfk",styles:"display:flex;justify-content:flex-end;align-items:center;gap:0.5em"},uf={$article:{Consideration:"注意事项"},useWatch:{desc:"一个监听对象某具名属性变化的 hook。",detail:s(b,{children:["useWatch 是一个用于监听对象属性变化的 hook，它接受三个参数，分别是：",s("ol",{children:[t("li",{children:"目标对象"}),t("li",{children:'目标属性路径 (形如 "a.b.c" 或者 ["a", "b", "c"]) 或者一个 getter 函数'}),t("li",{children:"回调函数"})]}),"当目标对象的目标属性发生变化时，useWatch 会调用回调函数，回调函数接受两个参数，分别是：",s("ol",{children:[t("li",{children:"旧值"}),t("li",{children:"新值"})]}),"例如："]}),consideration:s("ol",{children:[t(I,{children:"目标应该是一个对象"}),t(I,{children:"目标属性路径应该是一个字符串或者字符串数组，更推荐后者"}),t(I,{children:"回调函数应该是一个函数"}),s(I,{children:["默认情况下，返回值不会有明确的类型推断，因为从复杂对象中获取类型是困难的，但是你可以手动指定类型，例如：",t("code",{children:'const a: string = useWatch(obj, "a")'}),"。与此同时，回调函数会自动为旧值和新值分配类型。"]}),t(I,{children:"严格模式会影响获取特殊键的属性，并可能导致能量消耗，最好的方法是使用数组作为路径而不是字符串路径与严格模式。"}),s(I,{children:["如何获取被监听的值 ","( 比如 c in const obj = { a: { b : { c : 1 } } } )","?",t("p",{children:"有四种方式："}),s("ol",{children:[t("li",{children:t(ke,{children:'const c = useWatch(obj, "a.b.c", (a: number|undefined, b) => {})'})}),t("li",{children:t(ke,{children:'const c: number|undefined = useWatch(obj, "a.b.c", (a, b) => {})'})}),t("li",{children:t(ke,{children:'const c = useWatch<typeof obj, number>(obj, "a.b.c", (a, b) => {})'})}),t("li",{children:t(ke,{children:'const c: PathValue<typeof obj, "a.b.c"> = useWatch(obj, "a.b.c", (a, b) => {})'})}),t("p",{children:'第四种方式只适用于字符串路径而不是数组路径，并且如果路径中的一个键包含 "." 字符，则推断将失败。'})]})]}),t("p",{children:'因此，建议避免在对象中使用包含 "." 字符 的字符串作为键，然后在非严格模式下使用字符串或数组路径，从字符串路径推断出 PathValue。一切都会很好。 此外，使用 getter 替代路径，在这种情况下，你需要确认你的 getter 总能正确工作。'})]})}},lt=()=>t("span",{css:$css`color: gray;`,children:"Going to complete"}),pf={$article:{Consideration:"Consideration"},useWatch:{desc:"A hook to watch certain property in an object.",detail:s(b,{children:["useWatch is a hook that is used to watch the change of certain property, it accepts three parameters, which are:",s("ol",{children:[t("li",{children:"target object"}),t("li",{children:'target property path (like "a.b.c" or ["a", "b", "c"]) or a getter function'}),t("li",{children:"callback function"})]}),"When the target property of the target object changes, useWatch will call the callback function, which accepts two parameters, which are:",s("ol",{children:[t("li",{children:"old value"}),t("li",{children:"new value"})]}),"For example:"]}),$p1:"",consideration:s("ol",{children:[t(I,{children:"target object should be type of object"}),t(I,{children:"target property path should be type of string or array of string, the latter is suggested"}),t(I,{children:"callback function should be type of function"}),s(I,{children:["default, the returned will has no excipit type infer, because inter a type from a complex object is difficult, but you can assign type by yourself, like this: ",t("code",{children:'const a: string = useWatch(obj, "a")'}),". In the meantime, callback function will auto assign type to old value and new value"]}),t(I,{children:"the strict will make effects to get the property with special key and may cause energy consumption, the best way is to use array as path instead of string path with strict mode."}),s(I,{children:["How can I get valueType watched ","( like c in const obj = { a: { b : { c : 1 } } } )","?",t("p",{children:"There are five ways:"}),s("ol",{children:[t("li",{children:t(ke,{lang:"ts",children:'const c = useWatch(obj, "a.b.c", (a: number|undefined, b) => {})'})}),t("li",{children:t(ke,{lang:"ts",children:'const c: number|undefined = useWatch(obj, "a.b.c", (a, b) => {})'})}),t("li",{children:t(ke,{lang:"ts",children:'const c = useWatch<typeof obj, number>(obj, "a.b.c", (a, b) => {})'})}),t("li",{children:t(ke,{lang:"ts",children:'const c: PathValue<typeof obj, "a.b.c"> = useWatch(obj, "a.b.c", (a, b) => {})'})}),t("li",{children:t(ke,{lang:"ts",children:"const c = useWatch(obj, (state) => state.a.b.c, (a, b) => {})"})}),t("p",{children:'The fourth way is only work with string path not array path, and infer will fail if the one key in path includes "." character.'})]})]}),t("p",{children:'Therefore, it is suggested to avoid using string includes "." as keys in your object, and then run with string or array path or under non-strict mode with PathValue inferred from the string path. Everything will be fine. Otherwise, use getter instead of path, in this case, you need to confirm your getter always works correctly.'})]}),$best:t("ul",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(b,{}),params:{},return:{}}},useUrl:{desc:"A hook to get url params.",detail:s(b,{children:["useUrl is a hook that is used to listen url and get params, it accepts four parameters.",s("ol",{children:[s(I,{children:[t("strong",{children:"callback (?)"}),": The function will be called when url changes."]}),s(I,{children:[t("strong",{children:"name (?)"}),": The name of url listener, if you have multiple url listeners, you can use this parameter to distinguish them."]}),s(I,{children:[t("strong",{children:"immediate (false)"}),": The function will be called immediately when url changes."]}),s(I,{children:[t("strong",{children:"config (?)"}),": The configuration of the params parser.",s("ol",{children:[s(I,{children:[t("strong",{children:"mode (?)"}),': The mode of the params parser: `"string"` | `"auto"` = `"auto"`.']}),s(I,{children:[t("strong",{children:"autoParams (?)"}),": The parameters to treat as auto."]}),s(I,{children:[t("strong",{children:"stringifyParams (?)"}),": The parameters to treat as string."]}),s(I,{children:[t("strong",{children:"custom (?)"}),": The custom parser of certain query parameters."]})]})]})]}),"For example:"]}),consideration:s(b,{children:[t("strong",{children:"Type parameters"}),t("ol",{children:s("li",{children:[t("strong",{children:"T"})," - `string` or `object`",s("ul",{children:[t("li",{children:'The string to convert, like `"http://localhost?id=1&name=evan"`'}),s("li",{children:["object: object to inferred as, like ",t("code",{children:'`{ id: "1", name: "evan" }`'})]})]})]})}),s("ol",{children:[s("li",{children:[t("strong",{children:"Mode"}),' - The mode to use when converting: `"string"` | `"fuzzy"` | `"auto"` | `"strict"` | `"any"` = `"auto"`.']}),s("li",{children:[t("strong",{children:"StrictParams"})," - The parameters to treat as strict."]}),s("li",{children:[t("strong",{children:"FuzzyParams"})," - The parameters to treat as fuzzy."]})]})]})},useProtect:{desc:"A hook to protect your state.",detail:s(b,{children:["useProtect is a hook that is used to protect your state being changed:",s("ol",{children:[t("li",{children:"initialValue"}),t("li",{children:"Conditions to protect"})]}),"For example:"]}),consideration:s("ol",{children:[t(I,{children:"initialValue is type of any"}),t(I,{children:"Conditions to protect could be type of boolean, string or null."}),s("ul",{children:[s(I,{children:[t("strong",{children:"boolean"}),": if the condition is true, the state will be protected with default error message."]}),s(I,{children:[t("strong",{children:"string"}),": if the condition is not empty string, the state will be protected with the string as error message."]}),s(I,{children:[t("strong",{children:"null"}),": if the condition is null, the state will not be protected"]})]})]})},useToggle:{desc:"A hook to toggle boolean state.",detail:s(b,{children:["useToggle is a hook that is used to toggle boolean state:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," (?) : boolean, default is false"]}),s("li",{children:[t("strong",{children:"valueMap"})," (?) : the returned value map"]}),s("ul",{children:[s("li",{children:[t("strong",{children:"true"})," (?) : the value when state is true, default is true"]}),s("li",{children:[t("strong",{children:"false"})," (?) : the value when state is false, default is false"]})]})]}),"For example:"]}),consideration:t("ol",{children:t(I,{children:"initialValue is type of boolean"})}),$p1:"configure the value mapping"},useLoading:{desc:"A hook to toggle loading state.",detail:s(b,{children:["useLoading is a hook that is used to manage loading state:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," (?) : loading map"]}),s("li",{children:[t("strong",{children:"options"})," (?) : the config of value formatter"]}),s("ul",{children:[s("li",{children:[t("strong",{children:"boolify"})," (?) : the value when state is true, default is true"]}),s("li",{children:[t("strong",{children:"setType"}),' (?) : invoke setter using "override" or "spread"']})]})]}),"For example:"]}),consideration:s("ol",{children:[t(I,{children:"Returned Value is an array merged with object like the struct following : "}),t(ke,{lang:"text",theme:"oneLight",children:`
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
`}),t(I,{children:"When you use loading in count way, you must confirm that plus times is always same with minus times"}),t(I,{children:"By default, the loading value will be false when the loading value is 0, you can disable it by setting boolify to false"}),s(I,{children:["By default, the set actions will ",t("strong",{children:"override"}),' the old value, you can disable it by setting setType to "spread"']})]}),$p1:"You can use loading in count way, that means you can plus or minus loading value, and the loading state will be true when the value is greater than 0, otherwise false."},useMeta:{desc:"A React Hook that returns a meta state and a function to set the meta state",detail:s(b,{children:[t("h4",{children:"Parameters: "}),s(I,{children:[t("strong",{children:"initialObject"})," : The initial state object of the meta state."]}),s(I,{children:[t("strong",{children:"deepSet"})," (?): Whether to use deep clone when setting the meta state. Defaults to false."]})]}),$p1:"Use setObj to update certain property in object and rerender the component. If you directly reassign properties in object, the view will only sync at next rerender.",$p2:"Set property from the old property",$p3:"Reset the whole object directly or from old object",consideration:s("ol",{children:[t(I,{children:"The state must be an object."}),t(I,{children:"No deepSet will work quicker."}),s(I,{children:["Do not reassign properties during setting :",s("div",{style:{marginTop:"4px"},children:["It is ",t("strong",{children:"bad"})," and will not work: ❌"]}),t(ke,{lang:"ts",children:"set('count', obj.count++)"}),t("div",{children:"It is ok: ✅"}),t(ke,{lang:"ts",children:"set('count', obj.count + 1)"}),t("div",{children:"It is the best: ✅"}),t(ke,{lang:"ts",children:"set('count', (pre) +> pre + 1)"})]})]}),$faqs:s("ul",{children:[s(I,{children:[t("strong",{children:"Q"}),": Why useMeta instead of useState?"]}),s(I,{children:[t("strong",{children:"A"}),": Because useMeta makes it easier to set deep properties of the state."]}),t("br",{}),s(I,{children:[t("strong",{children:"Q"}),": What's the difference of deepSet or not?"]}),s(I,{children:[t("strong",{children:"A"}),": When deepSet is true, the state will be deep cloned when setting the state, otherwise it will be shallow cloned. Deepclone is slower than shallowclone, but it is safer. Therefore, when the state object is huge, you should avoid using deepSet unless necessary."]})]})},useReactive:{desc:"A hook to make your object reactive.",detail:s(b,{children:["useReactive is a hook that is used to make your object reactive:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," : primitives, array, object, Date, Map or Set"]}),s("li",{children:[t("strong",{children:"deep"})," (?) : boolean, Whether to deep reactive, default is true"]})]}),"For example:"]}),$p1:"Create a reactive proxy for an object",$p2:"Create a reactive proxy for an array",$p3:"Create a reactive proxy for a primitive value. In this case, the returned struct will be like this: { value: 1 }, and you can get the value by using value property.",consideration:s(b,{children:[s("ol",{children:[t(I,{children:"initialValue could be of primitives, array, object, Date, Map and Set."}),t(I,{children:"deep is type of boolean"})]}),s("p",{style:{padding:"20px",background:"#cff",borderRadius:"4px"},children:[t("strong",{children:"ℹ️ Notice"})," : Every time you call a method on the reactive object will cause rerender."]}),s("p",{style:{padding:"20px",background:"#ffd",borderRadius:"4px"},children:[t("strong",{children:"⚠️ Warning"})," : useReactive makes proxies for all properties on the target as many as possible, some apis will behave differently from the original."]})]}),$best:t(b,{children:s("ul",{children:[s(I,{children:[t("strong",{children:"Better performance"})," : Use shallow reactive, and define a property to rerender."]}),s(I,{children:[t("strong",{children:"Better reactive"})," : Use deep reactive, rerender every when property changes."]}),s(I,{children:[t("strong",{children:"Better security"})," : Use unwrap (exported from useReactive) to control reactive data, and reassign it to the reactive proxy."]})]})}),$faqs:s("ul",{children:[s(I,{children:[t("strong",{children:"Q"}),": Why useReactive instead of useState?"]}),s(I,{children:[t("strong",{children:"A"}),": Because useReactive simplifies the process of making object reactive. That is you can play react.js like Vue.js."]}),t("br",{}),s(I,{children:[t("strong",{children:"Q"}),": What's the difference of deep or not?"]}),s(I,{children:[t("strong",{children:"A"}),": When deep is true, the object will be deep reactive, otherwise it will be shallow reactive. Deep reactive means every properties on object will get proxied. Shallow reactive means only the first level properties will get proxied."]})]}),$apis:{generics:t("ul",{children:s("li",{children:[t("strong",{children:"T"}),": suggest to extends primitives | Array | object | Date | Map | Set"]})}),params:{},return:{}}},useList:{desc:"A hook to manage list state.",detail:t(b,{}),consideration:s("ol",{children:[s(I,{children:[t("strong",{children:"initialValue"})," : array"]}),s(I,{children:[t("strong",{children:"options"})," : object"]})]}),$p1:"Just render the temporary list view.",$p2:"Control the temporary list data, as you see, the original list data is still. Only when you save the list, will the original list get updated.",$best:t("ul",{children:s(I,{children:[t("strong",{children:"Best management"})," : Use isolation and control together."]})}),$faqs:s(b,{children:[s(I,{children:[t("strong",{children:"Q"}),": Why useList instead of useState?"]}),s(I,{children:[t("strong",{children:"A"}),": Because useList makes it easier to manage list state."]}),t("br",{}),s(I,{children:[t("strong",{children:"Q"}),": What abilities does useList have?"]}),s(I,{children:[t("strong",{children:"A"}),": useList has lots of abilities:",s("ol",{children:[s("li",{children:[t("strong",{children:"render"}),": render the list view"]}),s("li",{children:[t("strong",{children:"isolation"}),": isolate the view data and original data."]}),s("li",{children:[t("strong",{children:"control"}),": provide many ways to control the list data."]}),s("li",{children:[t("strong",{children:"backtracking"}),": provide ability to trace back the list data."]}),s("li",{children:[t("strong",{children:"pagination"}),": provide ability to paginate the list data."]}),t("span",{children:"..."})]})]})]}),$apis:{generics:t(b,{children:s("li",{children:[t("strong",{children:"T"}),": typeof list elements"]})}),params:{},return:{}}},useVirtualArea:{desc:"A hook to render huge list in a virtual area way.",detail:s(b,{children:["useVirtualArea is a hook that is used to render huge list in a virtual area way:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"options"})," : object"]}),s("li",{children:[t("strong",{children:"dependencies"})," : array"]})]}),"For example:"]}),$p1:"",consideration:s("ol",{children:[t(I,{children:"options is type of object"}),t(I,{children:"dependencies is type of array"}),t(I,{children:"options.items is required"}),t(I,{children:"options.renderItem is required"}),t(I,{children:"options.hasMore is required"}),t(I,{children:"options.loadMoreItems is required"}),t(I,{children:"options.height is required"})]}),$faqs:s("ul",{children:[s(I,{children:[t("strong",{children:"Q"}),": Why useVirtualArea instead of useState?"]}),s(I,{children:[t("strong",{children:"A"}),": Because useVirtualArea makes it more efficient to render huge list in a virtual area way."]}),t("br",{}),s(I,{children:[t("strong",{children:"Q"}),": What is virtual area?"]}),s(I,{children:[t("strong",{children:"A"}),": Virtual area is a virtual area in your page that is used to render huge list. It is not really a area, but a concept."]}),t("br",{}),s(I,{children:[t("strong",{children:"Q"}),": How about the performance?"]}),s(I,{children:[t("strong",{children:"A"}),": It is much more efficient than using useState to render huge list. You can try it by yourself. The performance is similar to react-window."]})]}),$apis:{generics:s("ul",{children:[s("li",{children:[t("strong",{children:"C"}),': extends keyof React.JSX.IntrinsicElements. Default: "div"']}),s("li",{children:[t("strong",{children:"I"}),': extends keyof React.JSX.IntrinsicElements. Default: "div"']}),s("li",{children:[t("strong",{children:"L"}),': extends keyof React.JSX.IntrinsicElements. Default: "div"']})]}),params:{},return:{}}},useReactor:{desc:"A state hook based on Reactor Model.",detail:s(b,{children:[t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," : object"]}),s("li",{children:[t("strong",{children:"plugins"})," : ","ReactorPlugin<T>[]"]})]}),"For example:"]}),consideration:s(b,{children:[s("ol",{children:[t(I,{children:"Direct mutation of reactor.value properties won't trigger re-renders. Always use set() or setValue() to update state."}),t(I,{children:'Use path-based set() method (e.g., set("user.name", "John")) for updating nested properties instead of direct assignment.'}),t(I,{children:"Reactor is best suited for managing complex object state. For simple primitive values, consider using useState instead."}),t(I,{children:"Plugin actions are executed synchronously during state changes. Avoid heavy computations in plugin callbacks."}),t(I,{children:"The event bus (emit/on) is isolated to Reactor instances only and doesn't share events with useEmitter or useReceiver hooks."})]}),s("p",{style:{padding:"20px",background:"#ffd",borderRadius:"4px"},children:[t("strong",{children:"⚠️ Warning"})," : please invoke subscribe, on and listeners in useEffect hook area to avoid some unexpectable problems."]})]}),$p1:"Basic usage, manage a state. You can use get() to get certain property by path or directly access that by keys chain. You can use set() to update certain property value by path.",$p1_1:"Because this state is typeof object, therefore, the third button can directly change the stored value, but will not trigger the rerender.",$p2:"Register a plugin to the Reactor Instance, and dipatch its name to invoke the plugin",$p3:"Import listen from useReactor, listen the state changing, and do something in then code block.",$p4:"Ressign the value of Reactor instance can override the state. You can also use setValue to do that.",$p5:"You can clone a new Reactor from an existing Reactor instance, but they will point to the same state. CloneValue will just clone value of state.",$p6:"You can assign a default value to Reactor, and when you invoke reset, the value will be reset to default value.",$p7:"Different Reactor instances can communicate with each other by a global event bus, you can emit a event and use on to receive a event payload.",$p7_notice:t(b,{children:s("p",{style:{padding:"20px",background:"#cff",borderRadius:"4px"},children:[t("strong",{children:"ℹ️ Notice"})," : Reactor Event Bus is dependent from the Emitter's."]})}),$best:s("ul",{children:[s(I,{children:[t("strong",{children:"Component Communication"}),": Use Reactor's event bus (emit/on) to sync data between components without prop drilling."]}),s(I,{children:[t("strong",{children:"Plugin System"}),": Leverage plugins for cross-cutting concerns like logging, validation, or persistence to keep component logic clean."]}),s(I,{children:[t("strong",{children:"Path-based Access"}),': Use get("user.profile.name") and set("user.profile.name", value) for deeply nested properties instead of manual traversal.']}),s(I,{children:[t("strong",{children:"State Subscription"}),": Use subscribe() to react to state changes in other parts of your application without tight coupling."]}),s(I,{children:[t("strong",{children:"Default Values"}),": Set default values with setDefaultValue() and use reset() to easily restore initial state (useful for forms)."]}),s(I,{children:[t("strong",{children:"State Cloning"}),": Use cloneValue() when you need an independent copy of the state for comparison or undo functionality."]})]}),$faqs:s("ul",{children:[s(I,{children:[t("strong",{children:"Q"}),": Why useReactor instead of useState?"]}),s(I,{children:[t("strong",{children:"A"}),": Reactor provides advanced features like path-based access, subscriptions, plugins, event system, and easier state management for complex objects. It's ideal when you need more than simple state updates."]}),s(I,{children:[t("strong",{children:"Q"}),": When should I use plugins?"]}),s(I,{children:[t("strong",{children:"A"}),": Use plugins to add custom logic that runs on state changes or actions, such as logging, validation, persistence, or side effects. Plugins help keep your component code clean and reusable."]}),s(I,{children:[t("strong",{children:"Q"}),": Can I use Reactor outside of React components?"]}),s(I,{children:[t("strong",{children:"A"}),": Yes, you can create a Reactor instance directly using `new Reactor(initialValue)`, but it won't trigger React re-renders. Use useReactor hook inside components for automatic re-rendering."]})]}),$apis:{generics:t("ul",{children:s("li",{children:[t("strong",{children:"T"}),": typeof state value."]})}),params:{},return:{}}},useTree:{desc:"A hook to manage tree state.",detail:s(b,{children:[t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," : array"]}),s("li",{children:[t("strong",{children:"options"})," : object"]})]}),"For example:"]}),$p1:"Here is a simple example to show how to use useTree hook.",consideration:s("ol",{children:[s(I,{children:["initialValue is type of ",t("span",{className:"txt-secondary",children:"TreeNode"})]}),t(I,{children:"options is type of object"})]}),$best:t("ul",{children:s(I,{children:[t("strong",{children:"Control the virtual nodes"})," : Avoid to change the original nodes directly."]})}),$faqs:s("ul",{children:[s(I,{children:[t("strong",{children:"Q"}),": Why useTree instead of useState?"]}),s(I,{children:[t("strong",{children:"A"}),": Because useTree makes it easier to manage and render tree state."]})]}),$apis:{generics:s(b,{children:[s("li",{children:[t("strong",{children:"T"}),": extends TreeNode, type of node"]}),s("li",{children:[t("strong",{children:"K"}),": extends string, key name of node as idKey"]})]}),params:{},return:{}}},useBatchHooks:{desc:"A hook to batch hooks.",detail:s(b,{children:["useBatchHooks is a hook that is used to batch hooks:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"hook"})," : the hook to be executed"]}),s("li",{children:[t("strong",{children:"count"})," (?) : number of times to execute the hook, default is 1"]})]}),"For example:"]}),$p1:"You can batch hooks to create a series of ripple refs and bind them to a series of elements.",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useMemento:{desc:"A hook to manage a state as memento",detail:s(b,{children:[t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialState"})," : any"]}),s("li",{children:[t("strong",{children:"config"})," : object"]})]}),"For example:"]}),$p1:"The initial state will be the first state in the history. By default, the history size is 10, and the strict mode is false. Therefore, the history will be 10 states at most, and an Error would be thrown out when the idKey is not found.",$p2:"You should know that if you invoke clear api, all will be cleared, including the history, so this action is not rollbackable. Also, after clear, current idKey will be set to NaN. (In future versions, it may be set to other falsy value such null.)",consideration:s("ol",{children:[t(I,{children:"initialState is type of any"}),t(I,{children:"config is type of object of MementoConfig"})]}),$best:t("ul",{children:s(I,{children:[t("strong",{children:"Strict Mode"})," : Use strict mode and set idKey to a unique value."]})}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},usePrevious:{desc:"A hook to store previous state.",detail:s(b,{children:["usePrevious is a hook that is used to store previous state:",t("h4",{children:"Parameters : "}),t("ol",{children:s("li",{children:[t("strong",{children:"state"})," : any state from useState"]})}),"For example:"]}),$p1:"The previous state will be undefined when the state is the first state.",consideration:t("ol",{children:"It is just a simple hook, no consideration."}),$best:t(b,{children:"This is a React component that allows users to toggle between a light and dark theme. The usePrevious hook is used to keep track of the previous theme, and a message is logged to the console whenever the theme changes."}),$faqs:s("ul",{children:[s(I,{children:[t("strong",{children:"Q"}),": Why usePrevious instead of useState?"]}),s(I,{children:[t("strong",{children:"A"}),": Because it is more convenient for readonly state."]}),t("br",{})]}),$apis:{generics:t(b,{children:s("li",{children:[t("strong",{children:"T"}),": extends any, type of state."]})}),params:{state:"any state from useState"},return:{previous:"the previous state"}}},useEmitter:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useReceiver:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useReflect:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useProvide:{desc:"A hook to share a state with other components.",detail:s(b,{children:["useProvide is a hook that is used to share a state with other components, and it is based on"," ",t("a",{href:"#/docs/useEmitter",children:"useEmitter"}),":",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"name"})," : the name of the state, should be unique"]}),s("li",{children:[t("strong",{children:"state"})," : any state from useState"]})]}),"For example:"]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useInject:{desc:"A hook to inject a state from other components.",detail:s(b,{children:["useInject is a hook that is used to inject a state from other components, and it is based on"," ",t("a",{href:"#/docs/useReceiver",children:"useReceiver"}),":",t("h4",{children:"Parameters : "}),t("ol",{children:s("li",{children:[t("strong",{children:"name"})," : the name of the state, should be unique"]})}),"For example:"]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useGuide:{desc:"",detail:t(b,{}),$p1:"Make guidence for elements with certain ids.",$p2:s(b,{children:[s("p",{children:[t("strong",{children:"Try to wrapp the target element with Target component."})," The wrapped is different from the raw, they have different method to render and insert the guide element into DOM tree."]}),t("p",{children:"By raw way, useGuide will create a div wrapper on every guidence element, and append it to the target element."}),s("p",{children:["By Target wrapped way, useGuide will wrap the target element with pure fregment, and render the guidence element into the fregment with",t("code",{children:" React.createPortal "}),"."]}),t("p",{children:"The expressional difference in visiable is that the wrapped way will higher the zIndex of target element than mask, and the raw way will not. (Actually, the raw way will higher target too, but for some reason, it may not work.)"})]}),consideration:s("ol",{children:[t(I,{children:"target element should have id"}),t(I,{children:"the id should be unique"})]}),$best:s("ul",{children:[t(I,{children:"Ensure the parent element of the target element has a position of either 'relative' or 'absolute'. This allows the guide element (with 'absolute' positioning) to be positioned relative to the parent element."}),t(I,{children:"If the parent element is a scroll container, ensure it has sufficient height and width to contain all its content. This allows the guide element to correctly follow its target element when the user scrolls."}),t(I,{children:"Avoid using 'overflow: hidden' on the parent element if possible. This could cause the guide element to be clipped or hidden."}),t(I,{children:"If the parent element has a high 'z-index' value, you may need to adjust the 'z-index' of the guide element to ensure it appears above the parent element."}),t(I,{children:"If the parent element has padding or borders, these values may need to be considered in the positioning calculations for the guide element."})]}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useReactorStore:{desc:"A hook to store the Reactor instance.",detail:s("p",{style:{padding:"20px",background:"#fef",borderRadius:"4px"},children:[t("strong",{children:"⛔ Deprecated"})," : This hook is deprecated since"," ",t("span",{style:{color:"blue"},children:"v0.1.22"}),"."]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useReactorStoreContext:{desc:"A hook to share the Reactor instance with the react context.",detail:s("p",{style:{padding:"20px",background:"#fef",borderRadius:"4px"},children:[t("strong",{children:"⛔ Deprecated"})," : This hook is deprecated since"," ",t("span",{style:{color:"blue"},children:"v0.1.22"}),"."]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useReactorStoreRef:{desc:"A hook to set the Reactor instance to ref.",detail:s("p",{style:{padding:"20px",background:"#fef",borderRadius:"4px"},children:[t("strong",{children:"⛔ Deprecated"})," : This hook is deprecated since"," ",t("span",{style:{color:"blue"},children:"v0.1.22"}),"."]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useTickState:{desc:"A hook to manage state with tick.",detail:s(b,{children:["useTickState is a hook that is used to manage state with tick:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," : any"]}),s("li",{children:[t("strong",{children:"tickBy"}),' : "onSetState" | "onChange"']})]}),"For example:"]}),$p1:"Tick by onSetState(default)",$p2:"Tick by onChange",consideration:s("ol",{children:[t(I,{children:`When tickby "onSetState", you'd better avoid abuse setState`}),t(I,{children:`When tickby "onChange", you'd better confirm your dependencies`})]}),$best:t("ul",{children:t(I,{children:'Tick by "onSetState", and before invoke setState check whether the new value is differ from the old.'})}),$faqs:s("ul",{children:[s(I,{children:[t("strong",{children:"Q"})," : Why I need useTickState?"]}),s(I,{children:[t("strong",{children:"A"})," : useTickState give you a more clear tag to tag whether the state changes"]})]}),$apis:{generics:t(b,{}),params:{},return:{}}},useReactorListener:{desc:"A hook to listen Reactor instance's value changes.",detail:s(b,{children:["useReactorListener is a hook that is used to listen Reactor instance's value changes:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"reactor"})," : Reactor instance"]}),s("li",{children:[t("strong",{children:"callback"})," : ReactorListener Callback"]}),s("li",{children:[t("strong",{children:"immediate"})," : boolean, default is false"]})]}),"For example:"]}),$p1:"The immediate listener will be invoked immediately when the listener is registered. Therefor, the first example will not get userCopy sync at initial, and the second example will.",consideration:s("ol",{children:[t(I,{children:"reactor is type of Reactor instance"}),t(I,{children:"callback is type of ReactorListenerCallback"})]}),$best:t("ul",{children:t(I,{children:"Use immediate listener to sync the value at initial."})}),$faqs:s("ul",{children:[s(I,{children:[t("strong",{children:"Q"})," : Why I need useReactorListener?"]}),s(I,{children:[t("strong",{children:"A"})," : useReactorListener allows you to listen a Reactor independently."]})]}),$apis:{generics:t(b,{}),params:{},return:{}}},useTicker:{desc:"A hook to manage a ticker.",detail:s(b,{children:["useTicker is a hook that is used to manage a ticker:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"fn"})," : Callback function"]}),s("li",{children:[t("strong",{children:"duration or options"})," : the duration of ticker's config"]}),s("li",{children:[t("strong",{children:"options"})," : ticker's config"]})]}),"For example:"]}),$p1:"",consideration:t("ol",{children:t("li",{children:"when immediate is true, only the first resume will call the callback immediately."})}),$best:t("ol",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(b,{}),params:{},return:{}}},useDebounce:{desc:"",detail:t(b,{children:"useDebounce is a hook that is used to debounce a function."}),$p1:"Try to click on the button frequently, and see whether the number changes 1 sec after your last click.",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t("ul",{children:s("li",{children:[t("strong",{children:"R"}),": suggest to extends primitives | Array | object | Date | Map | Set"]})}),params:{},return:{}}},useMap:{desc:"A React Hook that manages a Map state with convenient methods for manipulation.",detail:s(b,{children:["useMap is a hook that provides a convenient way to manage Map state in React. It wraps the native Map data structure and provides methods like set, get, del, and add to manipulate the map state. The returned map is readonly, which means you cannot use map.set() directly, but must use the provided set() method to trigger re-renders.",t("h4",{children:"Parameters:"}),t("ol",{children:s("li",{children:[t("strong",{children:"initialState"}),": T extends Object - The initial state object that will be converted to a Map."]})}),"For example:"]}),$p1:"Basic usage: initialize a map with an object, and use get() to retrieve values and set() to update values.",$h2:"Get and Set",$p2:"You can get properties from the map directly by `map.get` or by using get method, and set properties by using set method. `map.set` is omitted from the map.",$h3:"Four overloads of set",$p3:s(b,{children:["Set method has 4 overloads:",s("ol",{children:[t("li",{children:"set<K> = (key: K, value: T[K]): void;"}),t("li",{children:"set<K> = (key: K, setValueAction: (prev: T[K]) => T[K]): void"}),t("li",{children:"set(record, mode?: 'rehydrate' | 'override'): void"}),t("li",{children:"set(setMapAction: (prev: Map) => T | Map, mode?: 'rehydrate' | 'override'): void"})]})]}),$p4:s(b,{children:[t("p",{children:"About 3rd and 4th overload, you can set second parameter to 'rehydrate' to rehydrate the map, or 'override' to override the map. If the mode not specified, it will be 'rehydrate' by default."}),t("p",{children:"About 4th overload, the return of setMapAction could be type of a Map instance of a plain object of T."})]}),$h4:"Del and Add",$p5:"You can delete a property by using del method, and add a property by using add method.",consideration:s("ol",{children:[t(I,{children:"Unless you del, the type of map.get is T[K] actually"}),t(I,{children:'Default set action mode is "rehydrate"'})]}),$best:t("ol",{children:t("span",{children:"If you prefer Map than Object, useMap is a good choice than useRecord"})}),$faqs:s("ul",{children:[s(I,{children:[t("strong",{children:"Q"}),": Why useMap instead of useState with Map?"]}),s(I,{children:[t("strong",{children:"A"}),": useMap provides convenient methods (set, get, del, add) and ensures immutability automatically. You don't need to manually create a new Map instance to trigger re-renders."]}),s(I,{children:[t("strong",{children:"Q"}),": What's the difference between 'rehydrate' and 'override' mode?"]}),s(I,{children:[t("strong",{children:"A"}),": 'rehydrate' merges new values with existing ones (keeps existing keys), while 'override' replaces the entire map (removes all existing keys)."]}),s(I,{children:[t("strong",{children:"Q"}),": Can I use map.set() directly?"]}),s(I,{children:[t("strong",{children:"A"}),": No, the returned map is readonly. You must use the provided set() method to trigger re-renders."]})]}),$apis:{generics:t(b,{}),params:{},return:{}}},useRecord:{desc:"useRecord is a hook that is used to manage an one-level record object.",detail:s(b,{children:[t("h4",{children:"Parameters : "}),t("ol",{children:s("li",{children:[t("strong",{children:"initialValue"})," : object"]})}),"For example:"]}),$p1:"You can use setRecord to set a property of the record object.",consideration:t("ol",{children:t(lt,{})}),$best:t("ul",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(b,{}),params:{},return:{}}},useResize:{desc:"",detail:t(b,{}),$p1:"Prop nothing, listen the resize event of window. Try to resize the window and see the changes.",$h2:"Listen an element",$p2:"Prop a ref, listen the resize event of the ref element. Try to drag the sliders to see the changes.",consideration:t("ol",{children:t(lt,{})}),$best:t("ul",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(b,{}),params:{},return:{}}},useThrottle:{desc:"useThrottle is a hook that is used to throttle a function to be called at most once in a certain period.",detail:s(b,{children:[t("h4",{children:"Parameters : "}),s("ol",{children:[s(I,{children:[t("strong",{children:"fn"})," : Callback function"]}),s(I,{children:[t("strong",{children:"interval"})," : number"]}),s(I,{children:[t("strong",{children:"options"})," : throttle's config"]})]}),"For example:"]}),$p1:"Click the button, and see whether the number changes only once during every second.",consideration:t("ol",{children:t(lt,{})}),$best:t("ul",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(b,{}),params:{},return:{}}},useWatchGetter:{desc:"A hook to watch the getter of a state.",detail:s(b,{children:[t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"getter"})," : Getter"]}),s("li",{children:[t("strong",{children:"callback"})," : WatcherCallback"]}),s("li",{children:[t("strong",{children:"updater"})," : Whether to return a manual reupdate function."]})]}),"For example:"]}),$p1:"The callback will be invoked when the getter result changes.",consideration:t("ol",{children:t(I,{children:"If you want to manually reupdate the getter, you can set the updater to true, and the return value will be an array like [value, reupdate func]."})}),$best:t("ul",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(b,{}),params:{},return:{}}},useTitle:{desc:"A React Hook for managing and monitoring the document title with automatic restoration.",detail:s(b,{children:[s("p",{children:[t("code",{children:"useTitle"})," provides a reactive way to manage the document title. It returns the current title and a setter function, allowing you to read and update the title dynamically."]}),t("p",{children:"The hook uses MutationObserver to detect external title changes (e.g., from other components or scripts) and automatically syncs the state. When the component unmounts, the original title is restored."})]}),$p1:"The hook returns an array with the current title and a setter function. Switch between tabs above to see different use cases including counters, notifications, timers, and status indicators.",consideration:s("ol",{children:[t("li",{children:"The document title is a global resource. Multiple components using this hook may conflict with each other."}),t("li",{children:"The hook uses MutationObserver which has good browser support but may not work in very old browsers."}),t("li",{children:"The original title is restored when the component unmounts, which may override titles set by other components."}),t("li",{children:"Frequent title updates (e.g., every second) may impact performance on low-end devices."})]}),$best:s("ul",{children:[t("li",{children:"Use descriptive titles that reflect the current page state or content."}),s("li",{children:["For notification counts, use format like ",t("code",{children:"(3) New Messages"})," to draw attention."]}),t("li",{children:"Avoid updating the title too frequently (more than once per second) to prevent performance issues."}),t("li",{children:"Place the hook at the top level of your component for consistent behavior."}),s("li",{children:["For timers or counters, consider using ",t("code",{children:"useEffect"})," to sync the title with state changes."]}),t("li",{children:"Keep titles concise - browser tabs have limited space for displaying titles."})]}),$faqs:s("ul",{children:[s("li",{children:[t("strong",{children:"Q: Will the original title be restored when the component unmounts?"}),t("br",{}),"A: Yes, the hook automatically restores the original document title when the component unmounts."]}),s("li",{children:[t("strong",{children:"Q: Can this hook detect title changes made by other components?"}),t("br",{}),"A: Yes, the hook uses MutationObserver to monitor the title element and automatically syncs with external changes."]}),s("li",{children:[t("strong",{children:"Q: What happens if multiple components use this hook?"}),t("br",{}),"A: They may conflict with each other since the document title is global. Consider using only one instance or coordinating between components."]}),s("li",{children:[t("strong",{children:"Q: Does this work in all browsers?"}),t("br",{}),"A: Yes, MutationObserver is supported in all modern browsers. For older browsers, the hook will still work but won't detect external changes."]}),s("li",{children:[t("strong",{children:"Q: Can I use this for SEO?"}),t("br",{}),"A: This hook changes the title dynamically on the client side. For SEO, set the initial title in your HTML or use server-side rendering."]})]}),$apis:{generics:t(b,{}),params:{initialTitle:"Optional initial title to set when the component mounts. If not provided, uses the current document title."},return:{"[0] title":"The current document title (reactive to external changes).","[1] setTitle":"Function to update the document title. Signature: (title: string) => void"}}},usePromise:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useGenerator:{desc:"A hook to manage a generator.",detail:s("p",{style:{padding:"20px",background:"#fef",borderRadius:"4px"},children:[t("strong",{children:"⛔ Deprecated"})," : This hook is deprecated since"," ",t("span",{style:{color:"blue"},children:"v1.2.2"}),"."]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useFavicon:{desc:"A React Hook for dynamically setting the page favicon with optional badge support.",detail:s(b,{children:[s("p",{children:[t("code",{children:"useFavicon"})," allows you to dynamically change the favicon of your page and add badges to it. It supports multiple use cases including notification counters, status indicators, and custom badges."]}),t("p",{children:"The hook provides a simple API with function overloading: you can pass just a URL for basic usage, or pass a number/string for quick badge creation, or use the full options object for complete control."})]}),$p1:"The hook supports three usage patterns: basic (just URL), shorthand (URL + badge content), and full configuration (URL + options object). Switch between tabs above to see different examples.",consideration:s("ol",{children:[t("li",{children:"The favicon is a global resource - only one can be displayed at a time. If multiple components use this hook simultaneously, they will conflict."}),t("li",{children:"Badge rendering uses canvas, which may have CORS restrictions for cross-origin images. Use same-origin images when possible."}),t("li",{children:'Numbers over 99 will automatically display as "99+" to maintain readability.'}),t("li",{children:"The hook will remove all existing favicon elements and create a new one to avoid browser caching issues."})]}),$best:s("ul",{children:[s("li",{children:["Use the shorthand syntax ",t("code",{children:"useFavicon(url, count)"})," for simple badge counters."]}),s("li",{children:["When count is 0, pass ",t("code",{children:"undefined"})," or ",t("code",{children:"void 0"}),' to hide the badge instead of showing "0".']}),t("li",{children:"Place the hook at the top level of your component, not inside conditional statements."}),t("li",{children:"Use same-origin images to avoid CORS issues with canvas rendering."}),s("li",{children:["For notification badges, use red background (",t("code",{children:"#ff3b30"}),") to draw attention."]}),s("li",{children:["For status indicators, use small size (",t("code",{children:"size: 0.3"}),") and position at bottom-right."]})]}),$faqs:s("ul",{children:[s("li",{children:[t("strong",{children:"Q: Can I use this without a badge?"}),t("br",{}),"A: Yes, simply call ",t("code",{children:"useFavicon(iconUrl)"})," without the second parameter."]}),s("li",{children:[t("strong",{children:"Q: What happens if the icon fails to load?"}),t("br",{}),"A: The hook will fallback to the original icon URL without the badge."]}),s("li",{children:[t("strong",{children:"Q: Can I change the badge dynamically?"}),t("br",{}),"A: Yes, the hook will update the favicon whenever the iconUrl or badge options change."]}),s("li",{children:[t("strong",{children:"Q: What happens when the badge content exceeds 99?"}),t("br",{}),'A: Numbers over 99 will automatically display as "99+" to maintain readability.']}),s("li",{children:[t("strong",{children:"Q: Why is my badge not showing?"}),t("br",{}),"A: Check if the image is from the same origin. Cross-origin images may fail due to CORS restrictions."]})]}),$apis:{generics:t(b,{}),params:{iconUrl:"The URL of the favicon image.",badge:"Shorthand for badge content. Can be a string or number. When provided, creates a badge with default settings.",options:"Full configuration object for the favicon.","options.badge":"Badge configuration to overlay on the favicon.","options.badge.content":"The content to display in the badge. Numbers over 99 will display as '99+'.","options.badge.position":"Badge position. One of: 'top-right', 'top-left', 'bottom-right', 'bottom-left'. Defaults to 'top-right'.","options.badge.bgColor":"Badge background color. Defaults to '#ff3b30'.","options.badge.textColor":"Badge text color. Defaults to '#fff'.","options.badge.size":"Badge size as a ratio of icon size (0-1). Defaults to 0.5."},return:{void:"This hook does not return any value."}}},useClickAway:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useCookie:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useDimensions:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useHover:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useKeyPress:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useMousePosition:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useOverflow:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useRaf:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useRafState:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useScroll:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useSafeArea:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useAsyncEffect:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useDimensionsById:{desc:"Observe the dimensions of a DOM element selected by id.",detail:t(b,{children:s("p",{children:[t("code",{children:"useDimensionsById"})," tracks an element with ",t("code",{children:"ResizeObserver"})," and returns its width, height, top, and left values."]})}),$p1:"The target element must exist in the document and have the supplied id.",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},useQrcodeScan:{desc:"Scan QR codes and barcodes from a camera or image file.",detail:s(b,{children:[s("p",{children:[t("code",{children:"useQrcodeScan"})," provides live camera scanning, image decoding, normalized result metadata, camera permission state, torch, and zoom controls."]}),t("p",{children:"Camera access requires HTTPS or localhost. Image decoding does not request camera permission."})]}),$p1:"Render the scanner container before calling start. Use scanImage when you only need to decode an image.",consideration:s("ol",{children:[t("li",{children:"Camera permission and device availability depend on the browser and active camera."}),t("li",{children:"Stop the scanner when leaving the page to release the camera."})]}),$best:s("ul",{children:[t("li",{children:"Handle scanner errors in the onError callback."}),t("li",{children:"Check cameraCapabilities before using torch or zoom."})]}),$faqs:t("ul",{children:t("li",{children:"Camera scanning requires a secure context such as HTTPS or localhost."})}),$apis:{generics:t(b,{}),params:{},return:{}}},useInfiniteScroll:{desc:"A React Hook for implementing infinite scrolling with automatic load detection using IntersectionObserver.",detail:s(b,{children:[s("p",{children:[t("code",{children:"useInfiniteScroll"})," provides a simple way to implement infinite scrolling in React applications. It automatically detects when a loader element becomes visible and triggers asynchronous data loading using the browser’s ",t("code",{children:"IntersectionObserver"})," API."]}),t("p",{children:"The hook manages the entire lifecycle of an infinite list: loading state, accumulated items, concurrency control, and viewport/container visibility detection. It also supports both page-level scrolling and scrollable container elements."}),s("p",{children:["By returning a ",t("code",{children:"loader"})," element that must be rendered at the bottom of your list, the hook can observe its visibility and trigger additional data loading when users scroll near the end of the content."]})]}),$p1:"Render the returned loader element at the bottom of your list. When it enters the viewport (or container), the hook automatically triggers loadMore and appends new items.",consideration:s("ol",{children:[s("li",{children:["The ",t("code",{children:"loader"})," element must be rendered in the DOM for the observer to detect it. If it is conditionally hidden, infinite loading will not trigger."]}),s("li",{children:["The ",t("code",{children:"loadMore"})," function should be stable (e.g., wrapped with ",t("code",{children:"useCallback"}),"or referencing stable state) to avoid unnecessary re-observation or unexpected requests."]}),s("li",{children:["When using ",t("code",{children:'mode="container"'}),", ensure the container element has a fixed height and ",t("code",{children:"overflow: auto"})," or ",t("code",{children:"overflow: scroll"})," so scrolling events occur inside the container."]}),t("li",{children:"The hook prevents concurrent requests internally, but your API should still be idempotent or safe against repeated calls in case of network retries."}),t("li",{children:"If the loader is already visible when mounted (for example when the list is short), the hook will immediately trigger loading until the viewport/container is filled."})]}),$best:s("ul",{children:[s("li",{children:["Always place the returned ",t("code",{children:"loader"})," at the bottom of your list items so the observer can detect when the user reaches the end."]}),s("li",{children:["Use ",t("code",{children:"preloadDistance"})," (e.g., 200–400px) to start loading before the user actually reaches the bottom for smoother UX."]}),s("li",{children:["When working with scrollable panels or chat-style layouts, use",t("code",{children:'mode="container"'})," with ",t("code",{children:"containerRef"})," or ",t("code",{children:"containerId"}),"."]}),s("li",{children:["Keep pagination state outside the hook (e.g., page or cursor) and update it inside",t("code",{children:"loadMore"}),"."]}),s("li",{children:["Use ",t("code",{children:"reload()"})," when filters or query parameters change to restart the list from the beginning."]}),s("li",{children:["Use ",t("code",{children:"triggerLoadMore()"})," if you need to manually load more data (for example when a button is clicked)."]})]}),$faqs:s("ul",{children:[s("li",{children:[t("strong",{children:"Q: Why is the loader not triggering?"}),t("br",{}),"A: Ensure the loader element is rendered and visible in the DOM. The observer only works if the element exists and can intersect with the viewport or container."]}),s("li",{children:[t("strong",{children:"Q: Can I use this with a scrollable container instead of the window?"}),t("br",{}),"A: Yes. Set ",t("code",{children:'mode="container"'})," and provide either ",t("code",{children:"containerRef"})," or",t("code",{children:"containerId"}),"."]}),s("li",{children:[t("strong",{children:"Q: Can I manually control the loaded items?"}),t("br",{}),"A: Yes. Use the returned ",t("code",{children:"setItems"})," function to modify the list manually."]}),s("li",{children:[t("strong",{children:"Q: How do I reset the list?"}),t("br",{}),"A: Call ",t("code",{children:"reset()"})," to clear the items and loading state, or use",t("code",{children:"reload()"})," to reset and immediately fetch the first page again."]}),s("li",{children:[t("strong",{children:"Q: What happens if the list is shorter than the viewport?"}),t("br",{}),"A: The hook automatically triggers additional loads until the viewport or container becomes filled or ",t("code",{children:"hasMore"})," becomes false."]})]}),$apis:{generics:s(b,{children:[t("p",{children:t("code",{children:"<T, C>"})}),s("ul",{children:[s("li",{children:[t("code",{children:"T"})," — Type of items returned by ",t("code",{children:"loadMore"}),"."]}),s("li",{children:[t("code",{children:"C"})," — HTML element type used as the loader container. Defaults to"," ",t("code",{children:'"div"'}),"."]})]})]}),params:{loadMore:"Async function used to fetch the next batch of items. Should return an array of items or void.",hasMore:"Boolean indicating whether more data is available. When false, loading stops permanently.",loader:"Custom loading indicator. Can be a ReactNode or a function returning a ReactNode.",component:"HTML element type used as the wrapper for the loader element. Defaults to 'div'.",props:"Props passed to the loader container element.",preloadDistance:"Distance in pixels from the viewport/container bottom that triggers preloading. Defaults to 200.",observerOptions:"Custom IntersectionObserver options for advanced control.",disabled:"When true, automatic loading is disabled.",mode:"Scroll detection mode. 'viewport' observes the window, 'container' observes a specific scroll container, and 'auto' chooses automatically.",containerId:"ID of the scroll container element. Takes priority when mode='container'.",containerRef:"Ref to the scroll container element when mode='container'. Used if containerId is not provided."},return:{loader:"React element that must be rendered at the end of the list to trigger loading when it becomes visible.",loading:"Boolean indicating whether a request is currently in progress.",items:"Accumulated array of loaded items.",setItems:"State setter allowing manual modification of the items array.",reset:"Clears all items and resets the loading state.",reload:"Resets the list and immediately triggers the first load.",triggerLoadMore:"Manually triggers the loadMore function."}}},useAutoPageSize:{desc:"",detail:t(b,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(b,{}),params:{},return:{}}},__end:"end of locale mappings, please do not delete this line"},hf={en:{...pf},cn:{...uf}};function m(e){const o=vl("locale");return bl(hf[o],e)}const M=({children:e,id:o,low:n,top:r})=>t(bt,{id:o,variant:n?"h6":"h5",component:"h6",gutterBottom:!0,marginTop:r??"40px",fontWeight:"bold",children:e}),Ae=({children:e,top:o})=>s(b,{children:[t(bt,{id:"hook-faqs",variant:"h5",component:"h5",gutterBottom:!0,marginTop:o??"40px",fontWeight:"bold",children:"FAQs"}),e]}),Oe=({children:e,top:o})=>s(b,{children:[t(bt,{id:"hook-best",variant:"h5",component:"h5",gutterBottom:!0,marginTop:o??"40px",fontWeight:"bold",children:"Best Practice"}),e]}),Ne=({children:e,top:o})=>s(b,{children:[t(bt,{id:"hook-usage",variant:"h5",component:"h5",gutterBottom:!0,marginTop:o??"40px",fontWeight:"bold",children:"Usage"}),e]}),ne=({children:e})=>t(bt,{variant:"body1",gutterBottom:!0,children:e}),Z=({children:e,code:o,lang:n})=>s("div",{className:"Demo",children:[t(Mr,{style:{padding:"2rem"},children:e}),t(ur,{lang:n,children:o})]}),Se=({children:e})=>{const o=m("$article.Consideration");return s(b,{children:[t(M,{id:"hook-consider",children:o}),t(ne,{children:e})]})},mf=({children:e})=>t(bt,{variant:"h4",component:"h1",gutterBottom:!0,marginTop:"40px",fontWeight:"bold",children:e});function le(e){return s(b,{children:[t(bt,{variant:"h4",component:"h1",gutterBottom:!0,marginTop:"40px",fontWeight:"bold",children:e.title}),t(bt,{variant:"subtitle1",gutterBottom:!0,children:t("div",{id:"hook-desc",children:e.desc})}),t("div",{children:e.children}),t(Ru,{sx:{height:"1rem"}})]})}const ff="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function Ma(){u.useEffect(()=>{document.title=`overview - ${ce.homepage}`},[]);const e=Fm();u.useEffect(()=>{console.log(`theme: ${e}`)},[e]);const[o,n]=Ut(),r=Ir({},!o);return s(le,{title:"Overview",desc:ff,children:[t(M,{children:"Introduction"}),s(ne,{children:["react-hooks-kit is an open source library focused on making it easy to use react hooks.",t("br",{}),t("br",{}),"It includes a comprehensive collection of hooks that empower you to accomplish any task in your application without being forced into a specific way of doing things.",t("br",{}),t("br",{}),"react-hooks-kit is a lightweight library that doesn't require any dependencies. It's easy to use, and it's easy to learn.",t("br",{})]}),t(M,{children:"Advantages"}),t(ne,{children:s("ul",{children:[s(I,{children:[t("strong",{children:"Cosying"}),": react-hooks-kit provides a simple API that makes it easy to use react hooks."]}),s(I,{children:[t("strong",{children:"Lightweight"}),": It is a lightweight library without any dependencies."]}),s(I,{children:[t("strong",{children:"Overall"}),": It includes a comprehensive collection of hooks that empower you to accomplish different tasks in your application like store, parser, listeners, effects, etc."]}),s(I,{children:[t("strong",{children:"Typescript support"}),": It is developed with typescript and provides excellent typescript support and type inference support."]}),s("li",{children:[t("strong",{children:"innovation"}),": It provides some innovative hooks like useWatch (partial listener), useRipple (css houdini effect), etc."]})]})}),t(M,{children:"Information"}),t(ne,{children:s("p",{children:["There are about 60 hooks in library, most of them are still experimental and not stable yet. In menu, only the hooks without prefix tag is entirely stable. If a hook with prefix tag of"," ",t("strong",{children:"new"}),", it means it has passed tests; with a prefix tag of ",t("strong",{children:"cup"})," means experimental; a prefix tag of"," ",t("strong",{children:"clock"})," means in plan."]})}),t("div",{css:$css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 32px;
      `,children:s(N,{onClick:n,color:o?"primary":"inherit",style:{textTransform:"none"},ref:r,disableRipple:!0,children:[t("span",{style:{marginRight:8},children:"Was this page helpful?"}),o?t(Ca,{}):t(ka,{})]})})]})}function an(e){const[o,n]=Ut(),r=Ir({},!o);return t("div",{css:$css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 32px;
      `,children:s(N,{onClick:n,color:o?"primary":"inherit",style:{textTransform:"none"},ref:r,disableRipple:!0,children:[t("span",{style:{marginRight:8},children:e.children??"Was this page helpful?"}),o?t(Ca,{}):t(ka,{})]})})}const gf="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function vf(){return u.useEffect(()=>{document.title=`overview - ${ce.homepage}`},[]),s(le,{title:"Installation",desc:gf,children:[t(M,{children:"npm"}),t(ne,{children:t(ke,{lang:"bash",children:"npm i -S @evanpatchouli/react-hooks-kit"})}),t(M,{children:"pnpm"}),t(ne,{children:t(ke,{lang:"bash",children:"pnpm i -S @evanpatchouli/react-hooks-kit"})}),t(M,{children:"yarn"}),t(ne,{children:t(ke,{lang:"bash",children:"yarn add -S @evanpatchouli/react-hooks-kit"})}),t(an,{})]})}var Lo={},nr={exports:{}},wi;function ln(){return wi||(wi=1,(function(e){function o(n){return n&&n.__esModule?n:{default:n}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports})(nr)),nr.exports}var rr={};const bf=yl(zl);var xi;function cn(){return xi||(xi=1,(function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=bf})(rr)),rr}var $i;function yf(){if($i)return Lo;$i=1;var e=ln();Object.defineProperty(Lo,"__esModule",{value:!0}),Lo.default=void 0;var o=e(cn()),n=Zo(),r=(0,o.default)((0,n.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");return Lo.default=r,Lo}var wf=yf();const xf=en(wf);var Bo={},Ci;function $f(){if(Ci)return Bo;Ci=1;var e=ln();Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.default=void 0;var o=e(cn()),n=Zo(),r=(0,o.default)((0,n.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");return Bo.default=r,Bo}var Cf=$f();const kf=en(Cf);function tt(e){return e.hidden?null:s("span",{children:[t("span",{style:{color:"red",marginRight:"0.25em"},children:"*"}),e.children]})}const Pa=t(De,{label:"string",color:"primary"}),Ia=t(De,{label:"number",color:"secondary"}),Aa=t(De,{label:"boolean",color:"success"}),Na=t(De,{label:"object",color:"info"}),Va=t(De,{label:"ReactNode",color:"warning"}),Oa=t(De,{label:"undefined",color:"default"}),La=t(De,{label:"null",color:"error",variant:"outlined"}),Ba=t(De,{label:"any",color:"secondary",variant:"outlined"}),Sf=t(De,{label:"unknown",color:"error"}),Tf=t(De,{label:"never",color:"error"}),ja=t(De,{label:"void",color:"primary",variant:"outlined"}),Rf=t(De,{label:"symbol",color:"error"}),Ef=t(De,{label:"bigint",color:"error"}),Da=t(De,{label:"function",color:"primary",variant:"outlined"}),Mf=t(De,{label:"Array",color:"info",variant:"outlined"}),Pf=e=>t(De,{color:"primary",variant:"outlined",label:`Dispatch<SetStateAction<${e}>>`}),Vn={String:e=>e?.length?t(De,{label:e,color:"primary"}):Pa,Number:e=>e?t(De,{label:e,color:"secondary"}):Ia,Boolean:e=>typeof e=="boolean"?t(De,{label:`${e}`,color:"success"}):Aa,Object:()=>Na,ReactNode:()=>Va,Undefined:()=>Oa,Null:()=>La,Any:()=>Ba,Unknown:()=>Sf,Never:()=>Tf,Void:()=>ja,Symbol:()=>Rf,BigInt:()=>Ef,Function:e=>e?t(De,{label:e,color:"primary",variant:"outlined"}):Da,Array:e=>e?t(De,{label:`Array<${e}>`,color:"info",variant:"outlined"}):Mf,SetAction:Pf},pr=e=>{if(typeof e=="object")return e;if(!e.includes("|")&&!e.includes("&"))switch(e){case"string":return Pa;case"number":return Ia;case"boolean":return Aa;case"object":return Na;case"ReactNode":return Va;case"undefined":return Oa;case"null":return La;case"any":return Ba;case"void":return ja;case"function":return Da;default:return t(De,{label:e,color:"default"})}else{if(e.includes("|"))return e.split("|").map(o=>pr(o.trim())).map((o,n,r)=>s(u.Fragment,{children:[o,r.length-1===n?null:" | "]},o.props.label));if(e.includes("&"))return e.split("&").map(o=>pr(o.trim())).map((o,n,r)=>s(u.Fragment,{children:[o,r.length-1===n?null:" & "]},o.props.label))}},Ua=({name:e,type:o,required:n,defaultValue:r,desc:i,details:a,properties:l})=>({name:e,type:pr(o),required:n,defaultValue:[void 0,null].includes(r)?t("span",{css:$css`color: gainsboro`,children:`${r}`}):typeof r=="boolean"?`${r}`:typeof r=="string"?`"${r}"`:typeof r=="object"?(()=>{if(Array.isArray(r))return r.length===0?"[]":JSON.stringify(r);try{return`{ ${Object.keys(r).map(d=>`${d}: ${r[d]}`)} }`}catch{return r}})():r==="--"?"--":r,desc:i,details:a,properties:l?.map(d=>Ua(d))||[]});function If(e,o,n,r,i,a,l){return Ua({name:e,type:o,required:n,defaultValue:r,desc:i,details:a,properties:l})}function Af(e){const{row:o}=e,[n,r]=u.useState(!1),i=o.properties?.length||o.details;return s(u.Fragment,{children:[s(_o,{sx:{"& > *":{borderBottom:"unset"}},children:[t(et,{children:t(Bn,{style:{display:i?"block":"none"},"aria-label":"expand row",size:"small",onClick:()=>r(!n),children:n?t(kf,{}):t(xf,{})})}),s(et,{component:"th",scope:"row",children:[o.required&&t(tt,{}),o.name]}),t(et,{align:"center",children:o.type}),e.type==="param"&&t(et,{align:"center",children:o.defaultValue}),t(et,{align:"left",children:o.desc})]}),t(_o,{children:t(et,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:t(dt,{in:n,timeout:"auto",unmountOnExit:!0,children:s(Xt,{sx:{margin:1},children:[o.details,s(ya,{size:"small","aria-label":"purchases",children:[o.properties.length<=0?null:t(xa,{children:s(_o,{children:[t(et,{sx:{fontWeight:"bold"},children:"name"}),t(et,{sx:{fontWeight:"bold"},align:"center",children:"type"}),e?.type!=="return"&&t(et,{sx:{fontWeight:"bold"},align:"center",children:"default"}),t(et,{sx:{fontWeight:"bold"},align:"left",children:"description"})]})}),t(wa,{children:o.properties.map(a=>s(_o,{children:[t(et,{component:"th",scope:"row",children:a.name}),t(et,{align:"center",children:a.type}),e.type==="param"&&t(et,{align:"center",children:a.defaultValue}),t(et,{align:"left",children:a.desc})]},a.name))})]})]})})})})]})}function ee(e){const o={sx:{backgroundColor:"black",color:"white",fontWeight:"bold"}},n=e.rows?.map(r=>If(r.name,r.type,r.required,r.defaultValue,r.desc,r.details,r.properties??[]));return t(Oh,{component:jn,children:s(ya,{"aria-label":"collapsible table",children:[t(xa,{children:s(_o,{children:[t(et,{...o}),t(et,{...o,children:e?.return?"ReturnValue":"Parameters"}),t(et,{...o,align:"center",children:"type"}),!e?.return&&t(et,{...o,align:"center",children:"default"}),t(et,{...o,align:"center",children:"description"})]})}),t(wa,{children:n?.map(r=>t(Af,{row:r,type:e.return?"return":"param"},r.name))})]})})}function za(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useToggle"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}const Nf="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.",Vf=`
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
`,On={button:{width:"80px",height:"1.8rem",cursor:"pointer",padding:"10px 4px",textTransform:"uppercase",background:"white",borderRadius:"20px",position:"relative"},text:{position:"absolute",top:"50%",fontFamily:"sans-serif",transition:"all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"}},Of=()=>{const[e,o]=Ut();return t("button",{style:{...On.button,border:`1px solid ${e?"dodgerblue":"gray"}`},onClick:o,children:t("span",{style:{...On.text,left:e?"100%":"0",color:e?"dodgerblue":"gray",transform:`translate(${e?"calc(-8px - 100%)":"calc(8px)"}, -50%)`},children:e?"ON":"OFF"})})},Lf=`
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
`,Bf=()=>{const[e,o]=Ut(),n=br({color:"hsla(210, 100%, 56%, 0.557)",duration:500,trigger:"mousedown"});return t("button",{ref:n,style:{...On.button,border:`1px solid ${e?"dodgerblue":"gray"}`},onClick:o,children:t("span",{style:{...On.text,left:e?"100%":"0",color:e?"blue":"gainsboro",transform:`translate(${e?"calc(-2px - 100%)":"calc(2px)"}, -50%)`,backgroundColor:e?"hsla(210, 100%, 56%, 0.557)":"gray",padding:"0 4px",lineHeight:"1.4rem",borderRadius:"12px"},children:e?"ON":"OFF"})})};function jf(){return u.useEffect(()=>{document.title=`Usage - ${ce.homepage}`},[]),s(le,{title:"Usage",desc:Nf,children:[t(M,{children:"npm"}),t("p",{children:'Take "useToggle" as an example, you can use it to make a Switcher:'}),s(ne,{children:[t(Of,{}),t(ur,{children:Vf})]}),t("p",{children:'Use "useRipple" to make Switcher more cool:'}),s(ne,{children:[t(Bf,{}),t(ur,{children:Lf})]}),t("strong",{children:"Now, you get a cool RippleSwitcher!"}),t(za,{}),t(an,{})]})}const Df="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function Uf(){return u.useEffect(()=>{document.title=`FAQs - ${ce.homepage}`},[]),s(le,{title:"FAQs",desc:Df,children:[t(M,{children:"How about the Compatibility ?"}),s("p",{children:["This library is compatible with ",t("code",{children:"react@^16.8.0"})," ~ ",t("code",{children:"react@^18.2.0"}),"."]}),t(M,{children:"Is it really lightweight ?"}),s("p",{children:["Yes, it is. The bundle size is only ",t("code",{children:"~ 1.5kb"})," (minified and gzipped). It goes without any dependencies besides ",t("code",{children:"react"})," and ",t("code",{children:"react-dom"}),"."]}),t(M,{children:"How about its support for typescript ?"}),t("p",{children:"This library is written in typescript and it has its own type definitions. So you can use it with typescript without any problem."}),t(M,{children:"Is it tree-shakable ?"}),t("p",{children:"Yes, it is. All of the hooks are exported as named exports. So you can import only the hooks that you need."}),t(M,{children:"How about the performance ?"}),t("p",{children:"The performance is good. The hooks are optimized and memoized. So they will not cause unnecessary re-renders in your app."}),t(M,{children:"How about the browser support ?"}),s("p",{children:["This library is compatible with all modern browsers. It also works with IE11. But you need to include the polyfills for ",t("code",{children:"Promise"})," and ",t("code",{children:"Object.assign"})," in your app. Some special hooks such as useRipple that goes with Houdini may not be available in some browsers."]}),t(M,{children:"How about the accessibility ?"}),s("p",{children:["This library is compatible with accessibility. All of the hooks are tested with"," ",t("code",{children:"@testing-library/react"}),"."]}),t(an,{})]})}const zf="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function _f(){return u.useEffect(()=>{document.title=`Support - ${ce.homepage}`},[]),s(le,{title:"Support",desc:zf,children:[t(M,{children:"Support us to make it better !"}),s(N,{LinkComponent:"a",variant:"contained",children:["Buy me a coffee",t(xm,{style:{marginLeft:8}})]}),t(an,{children:"🥰 Thank you ~ "})]})}const ki=Object.freeze(Object.defineProperty({__proto__:null,FAQs:Uf,Installation:vf,Overview:Ma,Support:_f,Usage:jf},Symbol.toStringTag,{value:"Module"}));function Ff(){const e=Object.values(It).map(a=>Object.values(a)).flat(),[o,n]=u.useState(0),[r,i]=tn({last:"Last",lastLink:"",next:"Next",nextLink:""});return yr(a=>{const d=a.hash.replace("#/docs/","").split("?")[0],c=e.findIndex(g=>g.route===d),p=e[c-1],h=e[c+1];p?(i("last",p.title),i("lastLink",p.route)):(i("last","Docs"),i("lastLink","")),h&&(i("next",h.title),i("nextLink",h.route))},"article-navigator",!0),t(Xt,{sx:{width:"100%",flex:"1"},children:s(nu,{showLabels:!0,value:o,onChange:(a,l)=>{n(l)},style:{display:"flex",bottom:"0",left:"0",right:"0",justifyContent:"space-between",zIndex:1e3,backgroundColor:"white"},children:[t(ei,{LinkComponent:"a",href:`#/docs/${r.lastLink}`,label:r.last,icon:t(Em,{})}),t(ei,{LinkComponent:"a",href:`#/docs/${r.nextLink}`,label:r.next,icon:t(Mm,{})})]})})}const Ln=u.createContext({});function Wf(e){return ge("MuiTimeline",e)}ve("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function To(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${_(e)}`}const qf=["position","className"],Hf=e=>{const{position:o,classes:n}=e,r={root:["root",o&&To(o)]};return pe(r,Wf,n)},Kf=K("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.position&&o[To(n.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),Gf=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTimeline"}),{position:i="right",className:a}=r,l=ae(r,qf),d=f({},r,{position:i}),c=Hf(d),p=u.useMemo(()=>({position:i}),[i]);return R.jsx(Ln.Provider,{value:p,children:R.jsx(Kf,f({className:oe(c.root,a),ownerState:d,ref:n},l))})});function Qf(e){return ge("MuiTimelineContent",e)}const Jf=ve("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),Yf=["className"],Xf=e=>{const{position:o,classes:n}=e,r={root:["root",To(o)]};return pe(r,Qf,n)},Zf=K(bt,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[To(n.position)]]}})(({ownerState:e})=>f({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),ro=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTimelineContent"}),{className:i}=r,a=ae(r,Yf),{position:l}=u.useContext(Ln),d=f({},r,{position:l||"right"}),c=Xf(d);return R.jsx(Zf,f({component:"div",className:oe(c.root,i),ownerState:d,ref:n},a))}),eg=ve("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function tg(e){return ge("MuiTimelineItem",e)}const og=ve("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]),ng=["position","className"],rg=e=>{const{position:o,classes:n,hasOppositeContent:r}=e,i={root:["root",To(o),!r&&"missingOppositeContent"]};return pe(i,tg,n)},ig=K("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[To(n.position)]]}})(({ownerState:e})=>f({listStyle:"none",display:"flex",position:"relative",minHeight:70},e.position==="left"&&{flexDirection:"row-reverse"},(e.position==="alternate"||e.position==="alternate-reverse")&&{[`&:nth-of-type(${e.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${Jf.root}`]:{textAlign:"right"},[`& .${eg.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})),io=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTimelineItem"}),{position:i,className:a}=r,l=ae(r,ng),{position:d}=u.useContext(Ln);let c=!1;u.Children.forEach(r.children,v=>{yo(v,["TimelineOppositeContent"])&&(c=!0)});const p=f({},r,{position:i||d||"right",hasOppositeContent:c}),h=rg(p),g=u.useMemo(()=>({position:p.position}),[p.position]);return R.jsx(Ln.Provider,{value:g,children:R.jsx(ig,f({className:oe(h.root,a),ownerState:p,ref:n},l))})});function sg(e){return ge("MuiTimelineSeparator",e)}ve("MuiTimelineSeparator",["root"]);const ag=["className"],lg=e=>{const{classes:o}=e;return pe({root:["root"]},sg,o)},cg=K("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),so=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTimelineSeparator"}),{className:i}=r,a=ae(r,ag),l=r,d=lg(l);return R.jsx(cg,f({className:oe(d.root,i),ownerState:l,ref:n},a))});function dg(e){return ge("MuiTimelineConnector",e)}ve("MuiTimelineConnector",["root"]);const ug=["className"],pg=e=>{const{classes:o}=e;return pe({root:["root"]},dg,o)},hg=K("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})),vo=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTimelineConnector"}),{className:i}=r,a=ae(r,ug),l=r,d=pg(l);return R.jsx(hg,f({className:oe(d.root,i),ownerState:l,ref:n},a))});function mg(e){return ge("MuiTimelineDot",e)}ve("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const fg=["className","color","variant"],gg=e=>{const{color:o,variant:n,classes:r}=e,i={root:["root",n,o!=="inherit"&&`${n}${_(o)}`]};return pe(i,mg,r)},vg=K("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.color!=="inherit"&&`${n.variant}${_(n.color)}`],o[n.variant]]}})(({ownerState:e,theme:o})=>f({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(o.vars||o).shadows[1],margin:"11.5px 0"},e.variant==="filled"&&f({borderColor:"transparent"},e.color!=="inherit"&&f({},e.color==="grey"?{color:(o.vars||o).palette.grey[50],backgroundColor:(o.vars||o).palette.grey[400]}:{color:(o.vars||o).palette[e.color].contrastText,backgroundColor:(o.vars||o).palette[e.color].main})),e.variant==="outlined"&&f({boxShadow:"none",backgroundColor:"transparent"},e.color!=="inherit"&&f({},e.color==="grey"?{borderColor:(o.vars||o).palette.grey[400]}:{borderColor:(o.vars||o).palette[e.color].main})))),ao=u.forwardRef(function(o,n){const r=fe({props:o,name:"MuiTimelineDot"}),{className:i,color:a="grey",variant:l="filled"}=r,d=ae(r,fg),c=f({},r,{color:a,variant:l}),p=gg(c);return R.jsx(vg,f({className:oe(p.root,i),ownerState:c,ref:n},d))});function bg(){const e=o=>()=>{document.getElementById(o)?.scrollIntoView({behavior:"smooth",block:"center"})};return s(Gf,{className:"doc-navigator-line",sx:{[`& .${og.root}:before`]:{flex:0,padding:0}},children:[s(io,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-desc"),children:[s(so,{children:[t(ao,{}),t(vo,{})]}),t(ro,{children:t("div",{style:{cursor:"pointer"},children:"Description"})})]}),s(io,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-usage"),children:[s(so,{children:[t(ao,{}),t(vo,{})]}),t(ro,{children:t("div",{style:{cursor:"pointer"},children:"Usage"})})]}),s(io,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-consider"),children:[s(so,{children:[t(ao,{}),t(vo,{})]}),t(ro,{children:t("div",{style:{cursor:"pointer"},children:"Considerations"})})]}),s(io,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-best"),children:[s(so,{children:[t(ao,{}),t(vo,{})]}),t(ro,{children:t("div",{style:{cursor:"pointer"},children:"Best practice"})})]}),s(io,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-faqs"),children:[s(so,{children:[t(ao,{}),t(vo,{})]}),t(ro,{children:t("div",{style:{cursor:"pointer"},children:"FAQs"})})]}),s(io,{children:[s(so,{children:[t(ao,{}),t(vo,{})]}),t(ro,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-api"),children:t("div",{style:{cursor:"pointer"},children:"Hook's Apis"})})]}),s(io,{children:[t(so,{children:t(ao,{})}),t(ro,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-ref"),children:t("div",{style:{cursor:"pointer"},children:"Reference"})})]})]})}const rt=(e,o,n)=>{e&&(typeof e=="string"&&e?window.location.hash=e.replace(/#/g,""):typeof e=="object"&&e.path&&(window.location.hash||(e.hash??o)?window.location.hash=e.path.replace(/#/g,""):window.location.assign(e.path)))};function yg(){return t(le,{title:"Docs of react-hooks-kit",children:s(ne,{children:[t("p",{children:"This is a collection of hooks to manage state and view much more easier in ReactJs."}),t("p",{children:"It includes some stateful hooks:"}),s("ul",{children:[t("li",{children:"useLoading"}),t("li",{children:"useTree"}),t("li",{children:"useReactive"}),t("li",{children:"useReactor"}),t("li",{children:"..."})]}),t("p",{children:"And it also includes some utils:"}),s("ul",{children:[t("li",{children:"useGuide"}),t("li",{children:"useTicker"}),t("li",{children:"useVirtualArea"}),t("li",{children:"..."})]}),t("p",{children:"And it also provides some magical hooks:"}),s("ul",{children:[t("li",{children:"useEmitter"}),t("li",{children:"useReceiver"}),t("li",{children:"useProvide"}),t("li",{children:"useInject"}),t("li",{children:"..."})]}),t("p",{children:"And some houdini hooks:"}),s("ul",{children:[t("li",{children:"useRipple"}),t("li",{children:"useParticle"}),t("li",{children:"..."})]})]})})}const wg="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function xg(){u.useEffect(()=>{document.title=`SentMail - ${ce.homepage}`},[]);const e={display:"flex",gap:1,textTransform:"none"};return s(le,{title:"SentMail",desc:wg,children:[t(M,{children:"Sent mail to us to get more information and support."}),s(N,{sx:e,children:[t(Zn,{})," evanpatchouli@gmail.com"]}),s(N,{sx:e,children:[t(Zn,{})," evanpatchouli@foxmail.com"]}),s(N,{sx:e,children:[t(Zn,{})," 3125019716@qq.com"]}),t(an,{})]})}const $g=()=>{const[e,o]=u.useState(0),n=Sa(e),r=u.useRef();return u.useEffect(()=>(r.current=setInterval(()=>{o(i=>++i)},17),()=>{r.current&&clearInterval(r.current)}),[]),s("div",{children:[s("h1",{children:["Now: ",e,", previous: ",n,", timer:",`${r.current}`]}),t(N,{variant:"contained",color:"primary",onClick:()=>{r.current&&clearInterval(r.current)},children:"Stop"})]})},Cg=`import usePrevoius from "@/hooks/usePrevious";
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
};`,Si={code:Cg,View:$g};function kg(){const e=[{name:"state",type:"T",defaultValue:t(tt,{children:"Required"}),desc:"state to be tracked"}],o=[{name:"prevoiusState",type:"T",defaultValue:null,desc:"the previous value of the state that was passed in"}],n=m("usePrevious.$apis.generics");return s(b,{children:[t(M,{id:"hook-api",children:"Api of usePrevoius"}),t(ne,{children:n}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:o})]})}function Sg(){const[e,o]=u.useState("light"),n=Sa(e);return u.useEffect(()=>{n&&n!==e&&console.log(`Theme changed from ${n} to ${e}`)},[e,n]),s("div",{children:[s("p",{children:["Current theme: ",e]}),t("button",{onClick:()=>{o(e==="light"?"dark":"light")},children:"Toggle theme"})]})}const Tg=`import { useState, useEffect } from "react";
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
}`,Ti={View:Sg,code:Tg};function Rg(){const e="usePrevious",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:Si.code,children:t(Si.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),s(Oe,{children:[r,t(Z,{code:Ti.code,children:t(Ti.View,{})})]}),t(Ae,{children:l}),t(kg,{})]})}const Eg=()=>{const[e,o]=Ut();return t(b,{children:t(Pr,{checked:e,onChange:o})})},Mg=`
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
`,Ri={code:Mg,View:Eg},Pg=()=>{const[e,o]=Ut(!1,{true:"Open",false:"Close"});return s(b,{children:[t(Pr,{checked:e==="Open",onChange:o})," ",e]})},Ig=`
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
`,Ei={code:Ig,View:Pg};function Ag(){const e="useToggle",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.consideration`),i=m(`${e}.$p1`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e.replace(/([A-Z])/g,a=>a.toUpperCase()),desc:o,children:[t(ne,{children:n}),t(Z,{code:Ri.code,children:t(Ri.View,{})}),t(M,{children:"Value map"}),t("p",{children:i}),t(Z,{code:Ei.code,children:t(Ei.View,{})}),t(Se,{children:r}),t(za,{})]})}const Ng=()=>s("div",{css:$css`display: flex;`,children:[t(Vg,{}),t("s",{css:$css`margin: 0 20px;`}),t(Og,{})]}),Vg=()=>{const[,e]=Ut(),{loading:o,setLoading:n}=wr({load:!1});return s("div",{css:$css`display: flex; align-items: center;`,children:[t("strong",{children:"setLoading : "}),t(Pr,{onChange:()=>{e(),n("load",r=>!r)}}),t("div",{css:$css`
        width: 60px;
        height: 60px;
        border: 2px solid gray;
        position: relative;
        border-radius: 50%;
        `,children:t("div",{css:$css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `,children:t(on,{on:o.load})})})]})},Og=()=>{Ut();const{loading:e,onLoading:o,unLoading:n}=wr({load:!1});return s("div",{css:$css`display: flex; align-items: center;`,children:[t("strong",{children:"(on & un)Loading : "}),t(N,{onClick:()=>n("load"),children:"Off"}),t("div",{css:$css`
        width: 60px;
        height: 60px;
        border: 2px solid gray;
        position: relative;
        border-radius: 50%;
        `,children:t("div",{css:$css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `,children:t(on,{on:e.load})})}),t(N,{onClick:()=>o("load"),children:"On"})]})},Lg=`
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
`,Mi={code:Lg,View:Ng},Bg=()=>{const[e,o]=u.useState({setType:"override",boolify:!0}),n=()=>{o(d=>({...d,setType:d.setType==="override"?"spread":"override"}))},r=()=>{o(d=>({...d,boolify:!d.boolify}))},{loading:i,plusLoading:a,minusLoading:l}=wr({load:!1},e);return s("div",{css:$css`
      display: flex;
      align-items: center;
      `,children:[s("div",{children:[s(N,{css:$css`display: block; text-transform: none;`,onClick:n,children:["setType : ",e?.setType]}),s(N,{css:$css`display: block; text-transform: none;`,onClick:r,children:["boolify : ",`${e?.boolify}`]})]}),t(N,{onClick:()=>{l("load")},children:"-"}),t("div",{css:$css`
        width: 60px;
        height: 60px;
        border: 2px solid gray;
        position: relative;
        border-radius: 50%;
        `,children:t("div",{css:$css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `,children:t(on,{on:!!i.load})})}),t(N,{onClick:()=>{a("load")},children:"+"}),s("strong",{children:["count : ",JSON.stringify(i.load)]})]})},jg=`
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
`,Pi={code:jg,View:Bg};function Sn(){return t("span",{style:{marginRight:"10px"}})}function Dg(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useLoading"}),t(M,{low:!0,top:"20px",children:"Generics"}),t(ne,{children:t("ul",{children:s("li",{children:[t("strong",{children:"T"}),": should extends object"]})})}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"loadingMap",type:"object",defaultValue:t(tt,{children:"Required"}),desc:"initial state map of loadings"},{name:"options",type:"object",defaultValue:{setType:"override",boolify:!0},desc:"options of useLoadingApi",properties:[{name:"setType",type:'"override" | "spread"',defaultValue:"override",desc:"set action mode of setter"},{name:"boolify",type:"boolean",defaultValue:!0,desc:"whether the value is false when state is 0, and is true when state is 1; or the value is 0 when state is false, and is 1 when state is true"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array & Object)"}),t(ee,{return:!0,rows:[{name:"[0] loading",type:t(De,{label:"{ [x: keyof T]: boolean | number }"}),desc:"state of loadings"},{name:"[1] setLoading",type:"(k, v) => void | ( k, (v) => T[k] ) => void | (obj: Partial<T>) => void | ( (obj) => Partial<T> ) => void",desc:"set the state of certain loading value",details:s("p",{children:[t("strong",{children:"overload 1"})," : ","(k, v) => void"," ",t(Sn,{})," set the state of loading[k] to v",t("br",{}),t("strong",{children:"overload 2"})," : ","( k, (v) => T[k] ) => void"," ",t(Sn,{})," ","set the state of loading[k] to v(loading[k])",t("br",{}),t("strong",{children:"overload 3"})," : ","(obj: Partial<T>) => void"," ",t(Sn,{})," ","set the state of loading by obj",t("br",{}),t("strong",{children:"overload 4"})," : ","( (obj) => Partial<T> ) => void"," ",t(Sn,{})," set the state of loading by obj(loading)"]})},{name:"[2] onLoading",type:"(key: keyof T) => void",desc:"set the state of loading[key] to true"},{name:"[3] unLoading",type:"(key: keyof T) => void",desc:"set the state of loading[key] to false"},{name:"[4] plusLoading",type:"(key: keyof T) => void",desc:"plus the state of loading[key] by 1"},{name:"[5] minusLoading",type:"(key: keyof T) => void",desc:"minus the state of loading[key] by 1"}]})]})}function Ug(){const e="useLoading",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.consideration`),i=m(`${e}.$p1`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e.replace(/([A-Z])/g,a=>a.toUpperCase()),desc:o,children:[t(ne,{children:n}),t(Z,{code:Mi.code,children:t(Mi.View,{})}),t(M,{children:"Counter mode"}),t("p",{children:i}),t(Z,{code:Pi.code,children:t(Pi.View,{})}),t(Se,{children:r}),t(Dg,{})]})}const zg=()=>{const[e,o]=Am({name:"record",count:1});return s(b,{children:[t("pre",{children:JSON.stringify(e,null,2)}),t(N,{onClick:()=>o("count",e.count+1),children:"count++"})]})},_g=`import { useRecord } from "@evanpatchouli-hooks-kit";
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
`,Ii={code:_g,View:zg};function Fg(){const e=[{name:"initial",type:"object",defaultValue:{},desc:"an one-level record object"}],o=[{name:"[0] state",type:"object",defaultValue:null,desc:"state of record"},{name:"[1] setRecordAction",type:"Function",desc:s("div",{css:$css`text-align: left;`,children:[t("span",{children:"set method has 4 overloads:"}),s("ul",{children:[t("li",{children:t("code",{children:"set<K> = (key: K, value: T[K]): void;"})}),t("li",{children:t("code",{children:"set<K> = (key: K, setValueAction: (prev: T[K]) => T[K]): void;"})}),t("li",{children:t("code",{children:'set(record, mode?: "rehydrate" | "override"): void;'})}),t("li",{children:t("code",{children:'set(setRecordAction: (prev: T) => Partial<T>, mode?: "rehydrate" | "override"): void;'})})]}),t("span",{children:"mode:"}),s("ul",{children:[s("li",{children:[t("strong",{children:"rehydrate"}),": merge the new state with the old state"]}),s("li",{children:[t("strong",{children:"override"}),": replace the old state with the new state"]})]})]})}];return s(b,{children:[t(M,{id:"hook-api",children:"Api of useRecord"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:o})]})}function Wg(){const e="useRecord",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:Ii.code,children:t(Ii.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(Fg,{})]})}const qg=()=>{const{map:e}=qn({name:"useMap",kind:"statefult-hook",state:"experimental"});return t(b,{children:t("pre",{children:JSON.stringify(Object.fromEntries(e),null,2)})})},Hg=`import { useMap } from "@evanpatchouli/react-hooks-kit";
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
`,Ai={code:Hg,View:qg},Kg=()=>{const{map:e,set:o,get:n}=qn({count:1});return s(b,{children:[s("pre",{children:["map.count: ",e.get("count")]}),t(N,{onClick:()=>o("count",n("count")+1),children:"count++"})]})},Gg=`import { useMap } from "@evanpatchouli/react-hooks-kit";
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
`,Ni={code:Gg,View:Kg},Qg=()=>{const{map:e,set:o,get:n}=qn({count:1});return s(b,{children:[s("pre",{children:["map.count: ",e.get("count")]}),t(N,{onClick:()=>o("count",n("count")+1),children:"overload 1"}),t(N,{onClick:()=>o("count",r=>r+1),children:"overload 2"}),t(N,{onClick:()=>o(r=>({count:r.get("count")+1}),"rehydrate"),children:"overload 3"}),t(N,{onClick:()=>o(r=>new Map(Object.entries({count:r.get("count")+1})),"override"),children:"overload 4"})]})},Jg=`import { useMap } from "@evanpatchouli/react-hooks-kit";
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
`,Vi={code:Jg,View:Qg},Yg=()=>{const{map:e,del:o,add:n}=qn({a:"a",b:"b"});return s(b,{children:[t("pre",{children:JSON.stringify(Object.fromEntries(e),null,2)}),t(N,{onClick:()=>o("b"),children:"Del b"}),t(N,{onClick:()=>n("b","b"),children:"Add b"})]})},Xg=`import { useMap } from "@evanpatchouli/react-hooks-kit";
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
`,Oi={code:Xg,View:Yg};function Zg(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useMap"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initial object",type:"T",defaultValue:"{}",desc:"initial object to be convert into Map"}]}),s(M,{low:!0,top:"20px",children:["ReturnValue ","{ map, get, set, del, add }"]}),t(ee,{return:!0,rows:[{name:"map",type:"Map<K, T[K]>",desc:"map object state"},{name:"get",type:"(key: K) => T[K]",desc:"get value by key from map"},{name:"set",type:"4 overloads",desc:"set method"},{name:"del",type:"(key: K) => void",desc:"del property by key"},{name:"add",type:"(key: K, value: any) => void",desc:"add property to map"}]})]})}function ev(){const e="useMap",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$h2`),d=m(`${e}.$p2`),c=m(`${e}.$p3`),p=m(`${e}.$h3`),h=m(`${e}.$p4`),g=m(`${e}.$h4`),v=m(`${e}.$p5`),C=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:Ai.code,children:t(Ai.View,{})}),t("p",{children:a}),t(M,{children:l}),t("p",{children:d}),t(Z,{code:Ni.code,children:t(Ni.View,{})}),t(M,{children:p}),t("p",{children:c}),t(Z,{code:Vi.code,children:t(Vi.View,{})}),t("p",{children:h}),t(M,{children:g}),t("p",{children:v}),t(Z,{code:Oi.code,children:t(Oi.View,{})})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:C}),t(Zg,{})]})}const tv=()=>{const[e,o]=tn({name:"John",age:20,more:{address:"Taipei",score:100},messi:{game:{wordCup:{win:!0}}}});return s(b,{children:[t(N,{onClick:()=>{o("age",e.age+1)},children:"obj.age++"}),t(N,{onClick:()=>{e.more.score++},children:"obj.more.score++ [lazy]"}),t(N,{onClick:()=>{e.messi.game.wordCup.win=!e.messi.game.wordCup.win},children:"!obj.messi.game.wordCup.win [lazy]"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},ov=`import Code from "@/components/code";
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
`,Li={code:ov,View:tv},nv=()=>{const[e,o]=tn({width:100,height:100});return s(b,{children:[t(N,{onClick:()=>{o("width",(n,r)=>n+1)},children:"obj.width++"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},rv=`
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
`,Bi={code:rv,View:nv},iv=()=>{const[e,o]=tn({width:100,height:100});return s(b,{children:[t(N,{onClick:()=>{o({width:e.width+1,height:e.height+1})},children:"override obj"}),t(N,{onClick:()=>{o(n=>({...n,width:n.width+1}))},children:"override obj from old"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},sv=`
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
`,ji={code:sv,View:iv};function av(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useMeta"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initialObject",type:"T extends object",defaultValue:t(tt,{children:"Required"}),desc:"initial state of object"},{name:"options",type:"{ deepSet?: boolean; createNonExists?: boolean }",defaultValue:"{ deepSet: false, createNonExist: false }",desc:"options of useMeta",properties:[{name:"deepSet",type:"boolean",defaultValue:!1,desc:"Whether to deep clone object when setting property",details:s(b,{children:[t("strong",{children:"DeepClone"})," will make it slower especially"," ",t("strong",{children:"a huge object"})]})},{name:"createNonExist",type:"boolean",defaultValue:!1,desc:"Whether to create non-exists property when setting property"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"[0] state",type:"T",desc:"state of object"},{name:"[1] setter",type:"type: (k, v) => void | ( k, (oldValue, oldObject) => Value ) => void | (obj: T) => void | ( (oldObject) => T ) => void",desc:"setter of object"}]})]})}function lv(){const e="useMeta",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.consideration`),i=m(`${e}.$p1`),a=m(`${e}.$p2`),l=m(`${e}.$p3`),d=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e.replace(/([A-Z])/g,c=>c.toUpperCase()),desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(M,{low:!0,children:"Set deep property in object"}),t("p",{children:i}),t(Z,{code:Li.code,children:t(Li.View,{})}),t(M,{low:!0,children:"Set action of property"}),t("p",{children:a}),t(Z,{code:Bi.code,children:t(Bi.View,{})}),t(M,{low:!0,children:"Set action of whole object"}),t("p",{children:l}),t(Z,{code:ji.code,children:t(ji.View,{})})]}),t(Se,{children:r}),t(Ae,{children:d}),t(av,{})]})}const cv=()=>{const[e,o]=Ta([{name:"Leo Messi"},{name:"Cristiano Ronaldo"},{name:"Neymar"},{name:"Kylian Mbappe"},{name:"Kevin De Bruyne"},{name:"Ronaldinho"}],{renderFn(r){return s("div",{css:$css`margin-bottom: 8px;`,children:[t("label",{css:$css`margin-right: 1rem;`,children:"Name"}),t("span",{id:r.name,children:r.name})]})}},[]),n=u.useMemo(()=>o.render(),[e]);return t(b,{children:n})},dv=`import useList from "@/hooks/useList";
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
};`,Di={code:dv,View:cv},uv=()=>{const[e,o]=Ta([{name:"Leo Messi"},{name:"Cristiano Ronaldo"},{name:"Neymar"},{name:"Kylian Mbappe"},{name:"Kevin De Bruyne"},{name:"Ronaldinho"}],{renderFn(l){return s("div",{css:$css`margin-bottom: 8px;`,children:[t("label",{css:$css`margin-right: 1rem;`,children:"Name"}),t("span",{id:l.name,children:l.name})]})}},[]),n=()=>{o.addItem({name:Math.random().toString(36).slice(-8)})},r=()=>{const l=e.find((d,c)=>!e[c+1])?._id;(l||l===0)&&o.removeItem(l)},i=()=>{o.save()},a=u.useMemo(()=>o.render(),[e]);return s(b,{children:[a,s("div",{css:$css`text-align: right;`,children:[t("span",{children:"The temp list length: "}),t(De,{label:`${e.length}`}),t("span",{children:"The original list length: "}),t(De,{label:`${o.originalItems.length}`}),t(N,{color:"error",onClick:r,children:"Pop"}),t(N,{color:"primary",onClick:n,children:"Add"}),t(N,{color:"success",onClick:i,children:"Save"})]})]})},pv=`import useList from "@/hooks/useList";
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
};`,Ui={code:pv,View:uv};function hv(){const e=m("useList.$apis.generics");return s(b,{children:[t(M,{id:"hook-api",children:"Api of useList"}),s(M,{low:!0,top:"20px",children:["Generics",'<T extends object = { [key: string]: any }, K extends string | number = "_id">']}),t(ne,{children:e}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initialItems",type:"Array<any>",defaultValue:t(tt,{children:"Required"}),desc:"initial list items"},{name:"options",type:"UseListOptions",defaultValue:{idKey:"_id"},desc:"options for useList",properties:[{name:"idKey",type:"string",defaultValue:"_id",desc:"idkey of item"},{name:"sortFn",type:"SortFunction<T>",defaultValue:null,desc:"sort function"},{name:"filterFn",type:"FilterFunction<T>",defaultValue:null,desc:"filter function"},{name:"renderFn",type:"RenderFunction<T>",defaultValue:"(item) => item",desc:"render of item"},{name:"renderEmpty",type:"Function | JSX.Element | React.ReactNode",defaultValue:null,desc:"render of no data"},{name:"itemsPerPage",type:"number",defaultValue:1,desc:"pageSize of pagination"}]},{name:"dependencies",type:"Array<any>",defaultValue:"[]",desc:"dependencies for items to auto save"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"[0] temp list",type:"Array<ItemExtended<T>>",defaultValue:null,desc:"the temporary virtual list data"},{name:"[1] list manager",type:"object",desc:"list manager object",properties:[{name:"updateItems",type:"(newItems: Item<T>[]) => void",desc:"Function to replace the current list of items with a new list."},{name:"addItem",type:"(item: Item<T>) => void",desc:"Function to add a new item to the list."},{name:"removeItem",type:"(id: string | number) => void",desc:"Function to remove an item from the list by its id."},{name:"removeItems",type:"(ids: (string | number)[]) => void",desc:"Function to remove multiple items from the list by their ids."},{name:"save",type:"() => void",desc:"Function to save the current state of the list."},{name:"reset",type:"() => void",desc:"Function to reset the list to its original state."},{name:"filteredItems",type:"Item<T>[]",desc:"The current list of items after applying the filter function."},{name:"originalItems",type:"Item<T>[]",desc:"The original list of items."},{name:"render",type:"() => React.ReactNode",desc:"Function to render the current list of items."},{name:"pagedItems",type:"Item<T>[]",desc:"The current page of items when pagination is applied."},{name:"currentPage",type:"number",desc:"The current page number when pagination is applied."},{name:"totalPage",type:"number",desc:"The total number of pages when pagination is applied."},{name:"goToPage",type:"(page: number) => void",desc:"Function to navigate to a specific page."},{name:"goLastPage",type:"() => void",desc:"Function to navigate to the previous page."},{name:"goNextPage",type:"() => void",desc:"Function to navigate to the next page."}]}]})]})}function mv(){const e="useList",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.consideration`),i=m(`${e}.$p1`),a=m(`${e}.$p2`),l=m(`${e}.$faqs`),d=m(`${e}.$best`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e.replace(/([A-Z])/g,c=>c.toUpperCase()),desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t("p",{children:i}),t(Z,{code:Di.code,children:t(Di.View,{})}),t("p",{children:a}),t(Z,{code:Ui.code,children:t(Ui.View,{})})]}),t(Se,{children:r}),t(Oe,{children:d}),t(Ae,{children:l}),t(hv,{})]})}var jo={},zi;function fv(){if(zi)return jo;zi=1;var e=ln();Object.defineProperty(jo,"__esModule",{value:!0}),jo.default=void 0;var o=e(cn()),n=Zo(),r=(0,o.default)((0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");return jo.default=r,jo}var gv=fv();const vv=en(gv);function _a(e){const[o,n]=u.useState(!0);return t(Xt,{sx:{width:"400px",...e.sx},children:t(dt,{in:e.open??o,children:t(ic,{action:t(Bn,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{n(!1),e.setOpen&&e.setOpen(!1)},children:t(vv,{fontSize:"inherit"})}),severity:e.severity??"info",sx:{mb:2},children:e.children})})})}const bv={_id:"1",name:"Root",children:[{_id:"2",name:"Child 1",children:[{_id:"5",name:"Child 1.1",children:[]},{_id:"6",name:"Child 1.2",children:[]}]},{_id:"3",name:"Child 2",children:[]},{_id:"4",name:"Child 3",children:[]}]},yv=()=>{const[e,o]=u.useState(!1),[n,r]=u.useState(""),[i,{addNode:a,removeNode:l,moveNode:d,searchTree:c,render:p}]=Nm(bv,{idKey:"_id",renderNode:(w,T,E,S,$)=>t("div",{css:$css`margin-left: ${E*20}px;`,children:w.name},T)}),h=()=>{let T=a({_id:"7",name:"New Node",children:[]},"1");T&&(r(T),o(!0))},g=()=>{let w=l("7");w&&(r(w),o(!0))},[v,C]=Ut();return s("div",{children:[t(N,{onClick:h,children:"Add Node"}),t(N,{onClick:g,children:"Remove Node"}),t(N,{onClick:()=>{let w=()=>d("7","4");v&&(w=()=>d("7","1"));let T=w();T?(r(T),o(!0)):C()},children:"Move Node"}),t(N,{onClick:()=>{const w=c("3");console.log(w)},children:"Search Node"}),t("div",{children:p()}),t(_a,{severity:"error",open:e,setOpen:o,sx:{position:"fixed",bottom:16,right:16,zIndex:9999,width:"fit-content"},children:n})]})},wv=`import { useToggle } from "@/hooks";
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
};`,_i={code:wv,View:yv};function xv(){const e=m("useTree.$apis.generics");return s(b,{children:[t(M,{id:"hook-api",children:"Api of useTree"}),s(M,{low:!0,top:"20px",children:["Generics",'<T extends object = { [key: string]: any }, K extends string | number = "_id">']}),t(ne,{children:e}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:"{}",desc:"initial tree data"},{name:"options",type:"UseTreeOptions<T,K>",defaultValue:{idKey:"_id"},desc:"options of useTree",properties:[{name:"idKey",type:"string",defaultValue:"id",desc:"key of id"},{name:"renderNode",type:"(node: TreeNode<T>, idKey: string, level: number) => React.ReactNode",desc:"render node of tree"},{name:"renderEmpty",type:"React.ReactNode | (() => React.ReactNode)",desc:"render empty node of tree"},{name:"filterFn",type:"(node: TreeNode<T>) => boolean",desc:"filter node of tree"},{name:"strict",type:"boolean",defaultValue:!1,desc:"if true, addNode, removeNode, updateNode, moveNode will check and throw error; if false, will return the errMsg"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"[0] tree",type:'TreeNode<"_id">',desc:"state of tree data"},{name:"[1] manager",type:"TreeManager<T>",desc:"manager objectr of tree data",properties:[{name:"addNode",type:"(node: TreeNode<T>, parentId: any) => string | null",desc:"add a node to tree"},{name:"removeNode",type:"(nodeId: any) => string | null",desc:"remove a node from tree"},{name:"updateNode",type:"(nodeId: any, node: TreeNode<T>) => string | null",desc:"update a node of tree"},{name:"findNode",type:"(nodeId: any) => TreeNode<T> | null",desc:"find a node from tree"},{name:"moveNode",type:"(nodeId: any, parentId: T) => string | null",desc:"move a node to another node"},{name:"searchTree",type:"(nodeId: any) => TreeNode<T> | null",desc:"search a node from tree"},{name:"traverse",type:t(ke,{theme:"oneLight",style:{background:"#ebebeb"},lang:"ts",children:`Traverse<Callback> {
  (callback: Callback): any[];
  (nodeId: string, callback?: 
    Callback | undefined): any[];
}`}),desc:"traverse tree or certain node"},{name:"render",type:"() => React.ReactNode[]|React.ReactNode|null",desc:"use options.renderNode to render tree"}]}]})]})}function $v(){const e="useTree",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:_i.code,children:t(_i.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(xv,{})]})}const Cv=()=>{const e=zn({name:"John",age:20,more:{address:"Taipei",score:100},messi:{game:{wordCup:{win:!0}}}},!0);return s(b,{children:[t(N,{onClick:()=>{e.age=Math.random()*100},children:"obj.age++"}),t(N,{onClick:()=>{e.more.score++},children:"obj.more.score++"}),t(N,{onClick:()=>{e.messi.game.wordCup.win=!e.messi.game.wordCup.win},children:"console.log(obj.age)"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},kv=`import Code from "@/components/code";
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
};`,Fi={code:kv,View:Cv};function Sv(){const e=m("useReactive.$apis.generics");return s(b,{children:[t(M,{id:"hook-api",children:"Api of useReactive"}),s(M,{low:!0,top:"20px",children:["Generics","<T = any>"]}),t(ne,{children:e}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initialObject",type:"primitive | Array | object | Date | Map | Set",defaultValue:t(tt,{children:"Required"}),desc:"initial value of reactive"},{name:"deepReactive",type:"boolean",defaultValue:!0,desc:"Whether to make the object reactive deeply. Default: true"},{name:"...callbacks",type:"Watcher<T>[]",defaultValue:null,desc:"When a reactive value changes, the callback will be triggered"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Object)"}),t(ee,{return:!0,rows:[{name:"ReactiveObject",type:"Reactive<T>",defaultValue:null,desc:"reactive object from initialObject",details:s("p",{children:["If the initialObject is a primitive type, the return value is a reactive primitive type. Just like:",t(ke,{lang:"ts",children:`const reactiveNumber = useReactive(1);
// typeof reactiveNumber will be like following:            
type ReactiveNumber =
{
  value: 1,
  set: (value: number) => void,
  get: () => number,
}`}),t("br",{})]})}]})]})}const Tv=()=>{const e=zn([1,2,3]);return u.useEffect(()=>{console.log(e)},[]),s(b,{children:[t(N,{onClick:()=>{e[0]++},children:"arr[0]++"}),t(N,{onClick:()=>{e.push(1)},children:"push"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},Rv=`import Code from "@/components/code";
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
};`,Wi={code:Rv,View:Tv},Ev=()=>{let e=zn(0);return u.useEffect(()=>{console.log(e)},[]),s(b,{children:[t(N,{onClick:()=>{e.value++},children:"c.value++"}),t(ke,{theme:"oneLight",lang:"json",children:`${e.value}`})]})},Mv=`import Code from "@/components/code";
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
};`,qi={code:Mv,View:Ev},Pv=()=>{let e=zn(0);const[o,n]=u.useState();return s(b,{children:[t(N,{onClick:()=>{console.log(e),console.log(Lr(e)),n(Lr(e))},children:"assign cValue with unwrap"}),t(ke,{theme:"oneLight",lang:"json",children:o?.toString()})]})},Iv=`import Code from "@/components/code";
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
};`,Hi={code:Iv,View:Pv};function Av(){const e="useReactive",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.consideration`),i=m(`${e}.$p1`),a=m(`${e}.$p2`),l=m(`${e}.$p3`),d=m(`${e}.$best`),c=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t("p",{children:i}),t(Z,{code:Fi.code,children:t(Fi.View,{})}),t("p",{children:a}),t(Z,{code:Wi.code,children:t(Wi.View,{})}),t("p",{children:l}),t(Z,{code:qi.code,children:t(qi.View,{})}),t(Z,{code:Hi.code,children:t(Hi.View,{})})]}),t(Se,{children:r}),t(Oe,{children:d}),t(Ae,{children:c}),t(Sv,{})]})}const Nv=()=>{const e=uo(),o=qt({name:"John",age:20,more:{address:"Taipei",score:100},messi:{game:{wordCup:{win:!0}}}});return s(b,{children:[t(N,{onClick:()=>{e(o.value.messi.game.wordCup.win.toString()),console.log(o)},children:"toastWordCupWin"}),t(N,{onClick:()=>{o.set("messi.game.wordCup.win",!o.get("messi.game.wordCup.win"))},children:"set wordCup.win (render)"}),t(N,{onClick:()=>{o.value.messi.game.wordCup.win=!o.value.messi.game.wordCup.win},children:"assign wordCup.win (not render)"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(o,null,2)})]})},Vv=`
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
`,Ki={code:Vv,View:Nv},Ov=()=>{const e=qt({name:"evan",sex:"male",age:20},[{name:"age++",action:o=>{e.set("age",++o.age)}}]);return s(b,{children:[t(N,{onClick:()=>{e.dispatch("age++")},children:"age++"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},Lv=`import Code from "@/components/code";
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
`,Gi={code:Lv,View:Ov},Bv=()=>{const e=qt({name:"evan",sex:"male",age:20},[{name:"age++",action:n=>{e.set("age",++n.age)}}]),o=uo();return Ys(e).then(()=>{const n=e.get("age");o(n?.toString())}),s(b,{children:[t(N,{onClick:()=>{e.dispatch("age++")},children:"age++"}),t("span",{children:"age will be toasted at screen if changes"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},jv=`import Code from "@/components/code";
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
`,Qi={code:jv,View:Bv},Dv=()=>{const e=qt({name:"evan",sex:"male",age:20},[{name:"age++",action:r=>{e.set("age",++r.age)}}]);return s(b,{children:[t(N,{onClick:()=>{e.dispatch("age++")},children:"age++"}),t(N,{onClick:()=>{e.value={name:"messi",sex:"male",age:36}},children:"reAssign"}),t(N,{onClick:()=>{e.setValue({name:"Cristiano Ronaldo",sex:"male",age:38})},children:"set new value"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},Uv=`import Code from "@/components/code";
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
`,Ji={code:Uv,View:Dv},zv=()=>{const e=qt({name:"evan",sex:"male",age:20},[{name:"age++",action:(n,r,i)=>{i.set("age",++n.age)}}]),o=e.clone();return s(b,{children:[t(N,{onClick:()=>{e.dispatch("age++")},children:"age++"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)}),t(N,{onClick:()=>{o.dispatch("age++")},children:"age2++"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(o,null,2)}),t(N,{children:"clonedValue"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify(e.cloneValue(),null,2)})]})},_v=`import Code from "@/components/code";
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
`,Yi={code:_v,View:zv},Fv=()=>{const e=qt(0,[{name:"age++",action(o,n,r){r.setValue(o+1)}}]);return s(b,{children:[t(N,{onClick:()=>{e.dispatch("age++")},children:"age++"}),t(N,{onClick:()=>{e.reset()},children:"reset"}),t(ke,{theme:"oneLight",lang:"json",children:JSON.stringify({age:e,default:e.getDefaultValue()},null,2)})]})},Wv=`import Code from "@/components/code";
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
`,Xi={code:Wv,View:Fv},Zi=({children:e,style:o,loading:n})=>s("div",{style:{position:"relative",...o},children:[e,n&&t("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,backgroundColor:"rgba(255, 255, 255, 0.666)"},children:t(on,{on:n})})]}),es={background:"#fafafa",height:"60px"},qv=()=>{Qs();const e=qt({name:"Leo Messi",sex:"male",age:20,received:"",loading:!1},[{name:"greet_to_cr7",action:r=>{e.emit("greet_to_cr7",`Hello! I'm ${r.name}.`)}},{name:"receive_greet_to_messi",action:(r,i)=>{e.set("loading",!0),setTimeout(()=>{e.set("received",i),e.set("loading",!1)},500)}}]);u.useEffect(()=>{e.on("greet_to_messi",r=>{e.dispatch("receive_greet_to_messi",r)})},[]);const o=qt({name:"Cristiano Ronaldo",sex:"male",age:38,received:"",loading:!1},[{name:"greet_to_messi",action:(r,i)=>{o.emit("greet_to_messi",`Hello, ${i} I'm ${r.name}.`)}},{name:"receive_greet_to_cr7",action:(r,i)=>{o.set("loading",!0),setTimeout(()=>{o.set("received",i);const a=i.split(" ").slice(-1)[0];o.dispatch("greet_to_messi",a),o.set("loading",!1)},500)}}]);return u.useEffect(()=>{o.on("greet_to_cr7",r=>o.dispatch("receive_greet_to_cr7",r))},[]),s(b,{children:[t(N,{onClick:()=>{e.dispatch("greet_to_cr7")},children:"Messi greet to CR7"}),t(N,{onClick:()=>{e.set("received",""),o.set("received","")},style:{marginLeft:"1em"},children:"Reset All"}),t("div",{style:{marginLeft:"0.5em"},children:"Messi got: "}),t(Zi,{loading:e.get("loading"),style:es,children:t(ke,{theme:"oneLight",lang:"text",children:e.get("received")})}),t("div",{style:{marginLeft:"0.5em"},children:"CR7 got: "}),t(Zi,{loading:o.get("loading"),style:es,children:t(ke,{theme:"oneLight",lang:"text",children:o.get("received")})})]})},Hv=`import Code from "@/components/code";
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
`,ts={code:Hv,View:qv};function Kv(){const e=m("useReactor.$apis.generics");return s(b,{children:[t(M,{id:"hook-api",children:"Api of useReactive"}),s(M,{low:!0,top:"20px",children:["Generics","<T = any>"]}),t(ne,{children:e}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initialValue",type:"any",defaultValue:t(tt,{children:"Required"}),desc:"initial value of reactor to hold"},{name:"plugins",type:"ReactorPlugin<T>[]",defaultValue:"[]",desc:"register plugins to invoke some actions and onActions."}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Object)"}),t(ee,{return:!0,rows:[{name:"ReactorInstance",type:"Reactor<T>",defaultValue:null,desc:"reactor object from initialValue",details:s("p",{children:["Reactor is a state management tool based on React Hooks with the following features:",s("ul",{children:[t("li",{children:"View updates are only triggered by set invocation or value reassignment."}),t("li",{children:"Direct changes to deep state properties won't trigger view updates but are stored in memory and applied on the next view update."}),t("li",{children:"Reactor is a reactive, proxy, cloneable, resettable, dispatchable, serializable, subscribable, listenable, and pluginable object."})]})]}),properties:[{name:"value",type:"T",desc:"The current value of the reactor."},{name:"get",type:"(path?: Path<T>) => PathValue<T, typeof path>",desc:"get certain property from the value of the reactor."},{name:"set",type:"(path?: Path<T>, value: PathValue<T, typeof path>) => void",desc:"Set certain property to the value of the reactor."},{name:"reset",type:"() => void",desc:"Reset the value of the reactor to the default value."},{name:"setValue",type:"(value: T | SetAction<T>) => void",desc:"Override the value with value proped."},{name:"setDefaultValue",type:"(value: T) => void",desc:"Override the defaultValue with value proped."},{name:"getDefaultValue",type:"() => T",desc:"get the default value of the reactor."},{name:"clone",type:"() => T",desc:"Clone this reactor."},{name:"cloneValue",type:"() => T",desc:"Clone the value of this reactor."},{name:"dispatch",type:"(action: string, payload?; any) => void",desc:"invoke the plugins action will certain action name equal to plugin's name."},{name:"emit",type:"(eventName: string, payload?: any) => void",desc:"send a event on reactor event bus."},{name:"on",type:"(eventName: string, handler: (payload?: any) => void) => void",desc:"listen a event on reactor event bus."}]}]})]})}function Gv(){const e="useReactor",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.consideration`),i=m(`${e}.$p1`),a=m(`${e}.$p1_1`),l=m(`${e}.$p2`),d=m(`${e}.$p3`),c=m(`${e}.$p4`),p=m(`${e}.$p5`),h=m(`${e}.$p6`),g=m(`${e}.$p7`),v=m(`${e}.$p7_notice`),C=m(`${e}.$best`),y=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e.replace(/([A-Z])/g,k=>k.toUpperCase()),desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t("p",{children:i}),t(Z,{code:Ki.code,children:t(Ki.View,{})}),t("p",{children:a}),t("br",{}),t("p",{children:l}),t(Z,{code:Gi.code,children:t(Gi.View,{})}),t("br",{}),t("p",{children:d}),t(Z,{code:Qi.code,children:t(Qi.View,{})}),t("br",{}),t("p",{children:c}),t(Z,{code:Ji.code,children:t(Ji.View,{})}),t("br",{}),t("p",{children:p}),t(Z,{code:Yi.code,children:t(Yi.View,{})}),t("br",{}),t("p",{children:h}),t(Z,{code:Xi.code,children:t(Xi.View,{})}),t("br",{}),t("p",{children:g}),t(Z,{code:ts.code,children:t(ts.View,{})}),v]}),t(Se,{children:r}),t(Oe,{children:C}),t(Ae,{children:y}),t(Kv,{})]})}function Qv(){const e="useReactorStore",o=m(`${e}.desc`),n=m(`${e}.detail`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),t(le,{title:e,desc:o,children:t(ne,{children:n})})}function Jv(){const e="useReactorStoreContext",o=m(`${e}.desc`),n=m(`${e}.detail`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),t(le,{title:e,desc:o,children:t(ne,{children:n})})}function Yv(){const e="useReactorStoreRef",o=m(`${e}.desc`),n=m(`${e}.detail`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),t(le,{title:e,desc:o,children:t(ne,{children:n})})}const Xv=()=>{const[e,o,n]=Ra(0);return s("span",{children:["cnt: ",e," ",t(N,{onClick:()=>o(Number(Math.floor(Math.random()*10))),children:"tick"}),t("br",{}),"cntChanges: ",n]})},Zv=`import useTickState from "@/hooks/useTickState";
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
`,os={code:Zv,View:Xv},eb=()=>{const[e,o,n]=Ra(0,"onChange",r=>[r]);return s("span",{children:["cnt: ",e," ",t(N,{onClick:()=>o(Number(Math.floor(Math.random()*10))),children:"tick"}),t("br",{}),"cntChanges: ",n]})},tb=`import useTickState from "@/hooks/useTickState";
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
`,ns={code:tb,View:eb};function ob(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useTickState"}),s(M,{low:!0,top:"20px",children:["Generics","<T extends unknown = any>"]}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initial",type:"T",defaultValue:null,desc:"initial state"},{name:"tickBy",type:'"onSetState"|"onChange"',defaultValue:"onSetState",desc:"The trigger to increment the tick"},{name:"dependencies",type:"Array | (state) => Array",defaultValue:"[state]",desc:"onChange useEffect dependencies"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"[0] state",type:"T",defaultValue:null,desc:"state"},{name:"[1] setState",type:"SetStateAction",desc:"setState function"},{name:"[2] tick",type:"number",desc:"tick (value changes)"}]})]})}function nb(){const e="useTickState",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$p2`),d=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t("p",{children:a}),t(Z,{code:os.code,children:t(os.View,{})}),t("p",{children:l}),t(Z,{code:ns.code,children:t(ns.View,{})})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:d}),t(ob,{})]})}const rb=()=>{const[e,o,n]=wl("initial"),[r,i]=u.useState("initial"),a=l=>{i(l.target.value)};return s("div",{css:$css`margin: 20px;`,children:[t(vm,{label:"NewState",value:r,onInput:a}),t("br",{}),t(N,{onClick:()=>o(r),children:"setState"}),t(N,{onClick:()=>n.createMemento("memento 1"),children:"createMemento"}),t(N,{onClick:()=>n.rollback(),children:"rollback"}),t(N,{onClick:()=>n.forward(),children:"forward"}),t(N,{onClick:()=>n.clear(),children:"clear"}),s("label",{css:$css`display: block;`,children:["state: ",t("span",{children:e})]}),s("label",{css:$css`display: block;`,children:["idKey: ",t("span",{children:n.idKey})]}),s("label",{css:$css`display: block;`,children:["mementos: ",t("span",{children:JSON.stringify(n.mementos,null,2)})]}),s("label",{css:$css`display: block;`,children:["history: ",t("span",{children:JSON.stringify(n.history,null,2)})]})]})},ib=`import useMemento from "@/hooks/useMemento";
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

`,rs={code:ib,View:rb};function sb(){const e=[{name:"initialState",type:"T",defaultValue:Vn.Null(),desc:"initial state of memento"},{name:"config",type:"object",defaultValue:{historySize:10,strict:!1},desc:"configuration for memento",properties:[{name:"historySize",type:"number",defaultValue:10,desc:"size of the history"},{name:"strict",type:"boolean",defaultValue:!1,desc:"throw error when idKey is not found"}]}],o=[{name:"[0] state",type:"T | null",defaultValue:"initialState",desc:"current state"},{name:"[1] setState",type:Vn.SetAction("T|null"),desc:"set new state to memento (popstate)"},{name:"[2] manager",type:"object",desc:"memento manager with various methods",properties:[{name:"idKey",type:"number | NaN",desc:"current state's id"},{name:"createMemento",type:"(idKey: string) => void",desc:"create a memento"},{name:"deleteMemento",type:"(idKey: string) => void",desc:"delete a memento"},{name:"clearMementos",type:"() => void",desc:"clear all mementos"},{name:"rollback",type:"() => void",desc:"rollback to previous state"},{name:"forward",type:"() => void",desc:"forward to next state"},{name:"goToHistory",type:"(index: number) => void",desc:"go to a history state"},{name:"goToMemento",type:"(idKey: string) => void",desc:"go to a memento state"},{name:"deleteHistory",type:"(index: number) => void",desc:"delete a history state"},{name:"clearHistory",type:"() => void",desc:"clear all history states"},{name:"clone",type:"(idKey: string) => void",desc:"clone a history state"},{name:"clear",type:"() => void",desc:"clear all states"},{name:"history",type:"Array<HistoryItem<T>>",desc:"all history states"},{name:"mementos",type:"Array<Memento<T>>",desc:"all mementos"}]}];return s(b,{children:[t(M,{id:"hook-api",children:"Api of useMemento"}),s(M,{low:!0,top:"20px",children:["Generics","<T = any>"]}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:o})]})}function ab(){const e="useMemento",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$p2`),d=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t("p",{children:a}),t(Z,{code:rs.code,children:t(rs.View,{})}),t("p",{children:l})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:d}),t(sb,{})]})}const lb=()=>{const[e,o]=u.useState(0),n=Om(()=>{o(e+1)},1e3,{immediate:!0,pauseAtFirst:!1}),r=()=>n.pause(),i=()=>n.resume(),a=()=>{n.reset(),o(0)},l=()=>n.delayedPause(2e3),d=()=>n.delayedResume(2e3);return s(b,{children:[s("p",{children:["count: ",e," ticker: ",n.tick]}),t(N,{onClick:r,children:"pause"}),t(N,{onClick:i,children:"resume"}),t(N,{onClick:a,children:"reset"}),t(N,{onClick:l,children:"pause after 2s"}),t(N,{onClick:d,children:"resume after 2s"})]})},cb=`import useTicker from "@hooks/useTicker";
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
};`,is={code:cb,View:lb};function db(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useTicker"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"fn",type:"(tick: number) => void",desc:"callback function"},{name:"options or duration",type:"TickerOptions | number",desc:"options or duration"},{name:"options",type:"TickerOptions",desc:"options"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Object)"}),t(ee,{return:!0,rows:[{name:"tick",type:"number",defaultValue:0,desc:"tick count"},{name:"status",type:'"on" | "off"',defaultValue:'"off"',desc:"status of ticker"},{name:"resume",type:"() => void",desc:"resume ticker"},{name:"pause",type:"() => void",desc:"pause ticker"},{name:"reset",type:"() => void",desc:"reset ticker"},{name:"delayedPause",type:"(delay: number) => void",desc:"pause ticker after delay"},{name:"delayedResume",type:"(delay: number) => void",desc:"resume ticker after delay"}]})]})}function ub(){const e="useTicker",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:is.code,children:t(is.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(db,{})]})}const pb=()=>{const[e,o]=u.useState(0),r=jm(()=>{o(i=>i+1)},1e3,!1);return s(b,{children:[s("h4",{children:["count: ",e]}),t(N,{onClick:r,variant:"contained",color:"primary",children:"+1"})]})},hb=`
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
`,ss={code:hb,View:pb};function mb(){const e=[{name:"fn",type:"(args: any[]) => R",defaultValue:void 0,desc:"debounce function"},{name:"delay",type:"number",defaultValue:200,desc:"delay time"},{name:"immediate",type:"boolean",defaultValue:!1,desc:"whether to execute immediately"},{name:"callback",type:"(result: R) => void",defaultValue:void 0,desc:"callback function"}],o=[{name:"debounceFn",type:"function & { cancel: () => void }",desc:"debounce function",properties:[{name:"cancel",type:"() => void",desc:"cancel function"}]}],n=m("useDebounce.$apis.generics");return s(b,{children:[t(M,{id:"hook-api",children:"Api of useDebounce"}),t("pre",{children:`function useDebounce<R = void>(
  fn: (args: any[]) => R, 
  delay?: number, 
  immediate?: boolean, 
  callback?: (result: ReturnType<typeof fn>) => void
  ): {
    (...args: any[]): Promise<unknown>;
    cancel(): void;
}`}),n,t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Function Object)"}),t(ee,{return:!0,rows:o})]})}function fb(){const e="useDebounce",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:ss.code,children:t(ss.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(mb,{})]})}const gb=()=>{const[e,o]=u.useState(0),n=xl(function(){o(r=>r+1)},1e3);return s(b,{children:[s("p",{children:["Throttle: ",e]}),t(N,{variant:"contained",onClick:n,children:"Throttle + 1"})]})},vb=`
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
`,as={code:vb,View:gb};function bb(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useThrottle"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"fn",type:"(args: any[]) => R",defaultValue:void 0,desc:"function to throttle"},{name:"interval",type:"number",defaultValue:200,desc:"time to throttle"},{name:"options",type:"object",defaultValue:{leading:!0,trailing:!1},desc:"options of the throttle",properties:[{name:"leading",type:"boolean",defaultValue:!0,desc:"call function on leading edge"},{name:"trailing",type:"boolean",defaultValue:!1,desc:"call function on trailing edge"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Function Object)"}),t(ee,{return:!0,rows:[{name:"throttleFn",type:"function & { cancel: () => void }",desc:"throttled function",properties:[{name:"cancel",type:"() => void",desc:"cancel function"}]}]})]})}function yb(){const e="useThrottle",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:as.code,children:t(as.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(bb,{})]})}const wb=()=>{const{params:e}=yr(()=>{console.log("url changed")},"ursUrl exmaple1 listener",!0);return s(b,{children:[t("span",{children:"url params: "}),t("code",{children:JSON.stringify(e,null,2)}),s("span",{style:{color:"gainsboro"},children:[" ","( try to change query params in broswer location bar )"]})]})},xb=`
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
`,ls={code:xb,View:wb};function $b(){const e=m("useUrl.desc"),o=m("useUrl.detail"),n=m("useUrl.consideration");return u.useEffect(()=>{document.title=`useUrl - ${ce.homepage}`},[]),s(le,{title:"UseUrl",desc:e,children:[t(ne,{children:o}),t(Z,{code:ls.code,children:t(ls.View,{})}),t(Se,{children:n})]})}const Cb=()=>{const[e,o]=_n([{ids:["logs"],name:"guide",renders:[{id:"logs",render(c,p,h,g){return s("div",{onClick:()=>{o.stop()},style:{width:"fit-content"},children:[p," ",h," : only the first not work (☝️ click here to close )"]})}}]}],void 0,{containerStyle:{backgroundColor:"#fff",zIndex:"9999",padding:"10px 20px",borderRadius:"6px",cursor:"pointer"}}),n=[],[r,i]=u.useState({a:1,b:2,c:{c1:1,c2:{"c3.x":1}}}),a=er(r,"c.c2.c3.x",(c,p)=>{console.log(`num.c.c2.["c3.x"]: ${c} -> ${p}`)}),l=er(r,"c.c2.c3.x",(c,p)=>{console.log(`(#c__c2__c3_x$strict) num.c.c2.["c3.x"]: ${c} -> ${p}`)},!0),d=er(r,["c","c2","c3.x"],(c,p)=>{console.log(`(#c__c2__c3_x$array) num.c.c2.["c3.x"]: ${c} -> ${p}`)},{immediate:!0});return s(b,{children:[t(N,{variant:"outlined",onClick:()=>{o.start(),i(c=>({...c,c:{...c.c,c2:{...c.c.c2,"c3.x":c.c.c2["c3.x"]+1}},a:r.a+1}))},children:JSON.stringify(r,null,2)}),s("div",{css:$css({marginBlock:"1rem"}),children:[s(N,{variant:"contained",color:"success",children:["c__c2__c3_x: ",a]})," ",'default is non-strict mode, the special key "c3.x" will cause mistake.']}),s("div",{css:$css({marginBlock:"1rem"}),children:[s(N,{variant:"contained",color:"success",children:["c__c2__c3_x$strict: ",l]})," ","set strict mode to ",t("code",{children:"true"})," works, but may cause energy consumption."]}),s("div",{css:$css({marginBlock:"1rem"}),children:[s(N,{variant:"contained",color:"success",children:["c__c2__c3_x$array: ",d]})," ",t("strong",{children:"Most suggested"}),': use array to access the special key "c3.x".']}),t("div",{id:"logs",children:n.filter(c=>!c.startsWith("theme")).map((c,p)=>t("p",{children:c},p))})]})},kb=`
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
`,cs={code:kb,View:Cb};function Sb(){const e=[{name:"object",type:"object state variable",required:!0,defaultValue:void 0,desc:"object state variable to watch"},{name:"path",type:"(value: T) => void | undefined",defaultValue:void 0,desc:"callback function when value changed"},{name:"callback",type:"Callback<V>",defaultValue:void 0,desc:"callback function when value changed"},{name:"configOrStrict",type:"Config | boolean",defaultValue:!1,desc:s("div",{css:$css`text-align: left;`,children:["Config object to configure the watch behavior.",t("br",{}),"Config structure:",t("pre",{children:`interface Config {
  strict?: boolean;
  immediate?: boolean;
}`})]})},{name:"immediate",type:"boolean",defaultValue:!1,desc:"whether to execute callback immediately"}];return s(b,{children:[t(M,{id:"hook-api",children:"Api of useWatchGetter"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (value)"}),t(ee,{return:!0,rows:[{name:"value",type:"T | undefined",defaultValue:null,desc:"value watched"}]})]})}function Tb(){const e="useWatch",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`useWatch - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:cs.code,children:t(cs.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(Sb,{})]})}const Rb=()=>{const[e,o]=u.useState({a:1,b:2}),n=()=>o(a=>({...a,a:a.a+1})),r=()=>o(a=>({...a,a:a.a-1})),i=Um(()=>e.a);return s(b,{children:[t(N,{onClick:n,children:"Increment"}),t(N,{onClick:r,children:"Decrement"}),t("pre",{children:JSON.stringify(i,null,2)})]})},Eb=`
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
`,ds={code:Eb,View:Rb};function Mb(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useWatchGetter"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"getter",type:"getter function",required:!0,defaultValue:void 0,desc:"getter function should return a value"},{name:"callback",type:"(value: T) => void | undefined",defaultValue:void 0,desc:"callback function when value changed"},{name:"updater",type:"boolean",defaultValue:"false",desc:"if true, return [value, updater]"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (value or Array([value, updater]))"}),t(ee,{return:!0,rows:[{name:"value or array",type:"T | [T, Function]",defaultValue:null,desc:"value or Array([value, updater])"}]})]})}function Pb(){const e="useWatchGetter",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:ds.code,children:t(ds.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(Mb,{})]})}const us=e=>{const o=qt("user"),[n,r]=u.useState("");return zm(o,i=>{r(i),console.log("user changes")},e.immediate),s(b,{children:[s(N,{onClick:()=>o.setValue(Math.random().toString(36).slice(-8)),children:["user changes ",e.immediate?"immediate":"unimmediate"]}),s("div",{children:["user: ",o.value]}),s("div",{children:["useCopy: ",n]})]})},Ib=()=>s(b,{children:[t(us,{}),t(us,{immediate:!0})]}),Ab=`import useReactorListener from "@hooks/useReactorListener";
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
`,ps={code:Ab,View:Ib};function Nb(){const e=[{name:"target",type:"Reactor<T>",defaultValue:t(tt,{children:"Required"}),desc:"An instance of Reactor Class"},{name:"callback",type:Vn.Function("(value: T) => void"),defaultValue:Vn.Undefined(),desc:"callback function"}];return s(b,{children:[t(M,{id:"hook-api",children:"Api of useReactorListener"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Void)"})]})}function Vb(){const e="useReactorListener",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t("p",{children:a}),t(Z,{code:ps.code,children:t(ps.View,{})})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(Nb,{})]})}const Ob=()=>{const e=Ea();return t(b,{children:s("span",{children:["x: ",e.width,", y: ",e.height]})})},Lb=`
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
`,hs={code:Lb,View:Ob},Bb=()=>{const e=uo(),o=u.useRef(null),n=Ea({callback(d){e(`width: ${d.width}, height: ${d.height}`)},target:o}),[r,i]=u.useState(200),[a,l]=u.useState(200);return s(b,{children:[s("div",{ref:o,style:{width:r+"px",height:a+"px",backgroundColor:"lightblue"},children:["x: ",n.width,", y: ",n.height]}),t(ii,{value:r,onChange:(d,c)=>i(c),min:10,max:500,step:1,valueLabelDisplay:"auto"}),t(ii,{value:a,onChange:(d,c)=>l(c),min:10,max:500,step:1,valueLabelDisplay:"auto"})]})},jb=`
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
`,ms={code:jb,View:Bb};function Db(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useResize"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"options",type:"{ callback?; target? }",defaultValue:{},desc:"if target is undefined, it will listen to window resize. target chould be id string or ref object",properties:[{name:"callback",type:"(size) => void | undefined",defaultValue:void 0,desc:"callback function when size changed"},{name:"target",type:"string | RefObject | undefined",defaultValue:void 0,desc:"target element to listen resize"}]},{name:"deps",type:"any[]",defaultValue:[],desc:"dependencies list"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Object)"}),t(ee,{return:!0,rows:[{name:"size",type:"{ width: number, height: number }",defaultValue:null,desc:"size object"}]})]})}function Ub(){const e="useResize",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$h2`),d=m(`${e}.$p2`),c=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:hs.code,children:t(hs.View,{})}),t("p",{children:a}),t(M,{children:l}),t(Z,{code:ms.code,children:t(ms.View,{})}),t("p",{children:d})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:c}),t(Db,{})]})}const zb=()=>{const[e,o]=_m(async()=>await(await fetch("https://api.example.com/data")).json());return s(b,{children:[e.status==="idle"&&t("p",{children:"Click the button to fetch data"}),e.status==="pending"&&t("p",{children:"Loading..."}),e.status==="resolved"&&t("p",{children:"Success!"}),e.status==="rejected"&&t("p",{children:"Error!"}),t(N,{onClick:o,children:"Abort"})]})},_b=`

`,fs={code:_b,View:zb};function Fb(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of usePromise"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[]})]})}function Wb(){const e="usePromise",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:fs.code,children:t(fs.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(Fb,{})]})}function qb(){const e="useGenerator",o=m(`${e}.desc`),n=m(`${e}.detail`);return m(`${e}.$best`),m(`${e}.consideration`),m(`${e}.$p1`),m(`${e}.$faqs`),u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),t(le,{title:e,desc:o,children:t(ne,{children:n})})}const Hb=()=>{const[e,o]=u.useState(""),n=uo(),r=xr("kid1","kid2",i=>{o(i),n(`${i}`)});return s(b,{children:[t(N,{onClick:()=>{r.emit("kid1","kid1 said Hello!")},children:"Kid1 Send"}),t(Zs,{value:e})]})},Kb=()=>{const e=xr("kid2"),o=uo(),[n,r]=u.useState("");return u.useEffect(()=>{e.subscribe("kid1",i=>{o(`${i}`),r(i)})},[]),s(b,{children:[t(N,{onClick:()=>{e.emit("kid2","kid2 said Hello!")},children:"Kid2 Send"}),t(Zs,{value:n})]})},Gb=()=>{const e=u.useContext(Xs),o=()=>{const i={};e.forEach((a,l)=>{i[l]=a}),console.log(i)},[n,r]=Ut();return s(b,{children:[t(N,{onClick:o,children:"Print All listners"}),t("br",{}),t(Hb,{}),t("br",{}),t(N,{onClick:r,children:"Show/Hide Kid2"}),n&&t(Kb,{})]})},Qb=`

  `,gs={code:Qb,View:Gb};function Jb(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useEmitter"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function Yb(){const e="useEmitter",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:gs.code,children:t(gs.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(Jb,{})]})}const Xb=()=>{const e=xr("tester"),o=uo(),[n]=$l("test",(...a)=>{o(JSON.stringify(a))}),r=u.useContext(Xs),i=()=>{const a={};r.forEach((l,d)=>{a[d]=l}),console.log(a)};return s(b,{children:[t(N,{onClick:()=>{e.emit("test","hello")},children:"Send"}),t("div",{children:JSON.stringify(n)}),t(N,{onClick:i,children:"Print All"})]})},Zb=`

`,vs={code:Zb,View:Xb};function ey(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useReceiver"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function ty(){const e="useReceiver",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:vs.code,children:t(vs.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(ey,{})]})}const oy=()=>{const[e,o]=u.useState({name:"Evan",age:20});return ea("someone",e),s(b,{children:[t(N,{onClick:()=>o({...e,name:e.name==="Evan"?"Nave":"Evan"}),children:e.name}),t(N,{onClick:()=>o({...e,age:e.age+1}),children:e.age})]})},ny=()=>{const[e]=In("someone"),[o]=In("someone");return s(b,{children:[s("div",{style:{display:"flex"},children:[t("span",{children:e?.name}),t("div",{style:{width:"2rem"}}),t("span",{children:e?.age})]}),s("div",{style:{display:"flex"},children:[t("span",{children:o?.name}),t("div",{style:{width:"2rem"}}),t("span",{children:o?.age})]})]})},ry=()=>s(b,{children:[t("h4",{children:"UseProvide"}),t(oy,{}),t("h4",{children:"Inject"}),t(ny,{})]}),iy=`import useInject from "@/hooks/useInject";
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
};`,bs={code:iy,View:ry};function sy(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useProvide"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"name",type:"string",defaultValue:t(tt,{children:"Required"}),desc:"The unique name of the state to be provided globally"},{name:"state",type:"any",defaultValue:t(tt,{children:"Required"}),desc:"The state to be provided globally"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Void)"})]})}function ay(){const e="useProvide",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:bs.code,children:t(bs.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(sy,{})]})}const ly=()=>{const[e,o]=u.useState({name:"Evan",age:20});return ea("someone",e),s(b,{children:[t(N,{onClick:()=>o({...e,name:e.name==="Evan"?"Nave":"Evan"}),children:e.name}),t(N,{onClick:()=>o({...e,age:e.age+1}),children:e.age})]})},cy=()=>{const[e]=In("someone"),[o]=In("someone");return s(b,{children:[s("div",{style:{display:"flex"},children:[t("span",{children:e?.name}),t("div",{style:{width:"2rem"}}),t("span",{children:e?.age})]}),s("div",{style:{display:"flex"},children:[t("span",{children:o?.name}),t("div",{style:{width:"2rem"}}),t("span",{children:o?.age})]})]})},dy=()=>s(b,{children:[t("h4",{children:"UseProvide"}),t(ly,{}),t("h4",{children:"Inject"}),t(cy,{})]}),uy=`import useInject from "@/hooks/useInject";
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
};`,ys={code:uy,View:dy};function py(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useInject"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"name",type:"string",defaultValue:t(tt,{children:"Required"}),desc:"The unique name of the state to be provided globally"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"[0]state",type:"T[K] | undefined",defaultValue:null,desc:"state injected from provided globally, if the state is not provided, it will be undefined, and because of the delay of event, the state will be undefined at the first render"},{name:"[1]setState",type:s(b,{children:[t(De,{label:"(value: T[K] | undefined) => void"})," |"," ",t(De,{label:"undefined"})]}),desc:"set state function, if the state is not provided, it will be undefined"}]})]})}function hy(){const e="useInject",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:ys.code,children:t(ys.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(py,{})]})}const my=[`
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
`];function fy(){u.useEffect(()=>{document.title=`useRipple - ${ce.homepage}`},[]);const e=br();return s(le,{title:"UseRipple",desc:"useRipple is a hook for using houdini particle effect.",children:[t(ne,{children:"A hook to render ripple effect by using houdini paintWorklet."}),t(M,{children:"Usage"}),t(Z,{code:my[0],children:t("div",{css:gy.demo1,ref:e,children:"Click to render ripple effect"})}),t(M,{children:"Considerations"}),t(ne,{children:s("ol",{children:[s("li",{children:[t("strong",{children:"useRipple"})," is a hook to render ripple effect by using ",t("strong",{children:"houdini"})," paintWorklet."]}),s("li",{children:[t("strong",{children:"mousedown"})," is the default trigger to render ripple effect. You should avoid using the same trigger on you component other click-like handler to avoid conflict."]}),s("li",{children:["Different triggers will make the effect a little ",t("strong",{children:"different"}),"."]})]})})]})}const gy={demo1:$css`
  &:hover {
    cursor: pointer;
    background-color: azure;
  }
  &::selection {
    background-color: transparent;
  }
`};function vy(){u.useEffect(()=>{document.title=`useParticle - ${ce.homepage}`},[]);const e=Ir({color:"blue"});return s(le,{title:"UseParticle",desc:"useParticle is a hook for using houdini particle effect.",children:[t(ne,{children:"A hook to render particle effect by using houdini paintWorklet."}),t(Mr,{children:t("div",{css:$css`
          &::selection {
            background-color: transparent;
          }
          &:hover {
            cursor: pointer;
            background-color: gainsboro;
          }
        `,ref:e,children:"Particle"})})]})}const by=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 50 50",children:[t("circle",{cx:"25",cy:"25",r:"20",stroke:"#aaa","stroke-width":"2",fill:"none"}),t("line",{x1:"15",y1:"15",x2:"35",y2:"35",stroke:"#aaa","stroke-width":"2"})]});function yy(){const[e,o]=u.useState([]),[n,r]=u.useState(!0),i=async()=>{await new Promise(h=>setTimeout(h,1e3+Math.random()*1e3)),o(h=>[...h,...Array.from({length:10},(g,v)=>v+h.length)]),e.length+10>=50&&r(!1)},a=h=>t("div",{css:$css`margin-left: 20px`,children:h}),[l,d,c,p]=Wm({loadMoreItems:i,items:e,hasMore:n,renderItem:a,renderEmpty:s("div",{css:$css`display: flex; align-items: center; padding-block: 20px;`,children:[t("span",{children:"No Data"}),t("div",{css:$css`margin-left: 12px; width: 20px; height: 20px;`,children:t(by,{})})]}),height:"300px",style:{position:"relative"},loaderComponentProps:{style:{marginBlock:"20px"}},renderTop:()=>s("div",{css:$css`display: flex; align-items: center; position: sticky; top: 0; z-index: 1; background-color: #fff; padding: 10px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);`,children:[t("strong",{children:"total : "}),t("span",{css:$css`margin-left: 20px;`,children:e.length}),t("strong",{css:$css`margin-left: 20px;`,children:"hasMore : "}),t("span",{css:$css`margin-left: 20px;`,children:n.toString()}),t("strong",{css:$css`margin-left: 20px;`,children:"loading : "}),t("span",{css:$css`margin-left: 20px;`,children:d.toString()})]}),renderLoader:()=>s("div",{css:$css`display: flex; align-items: center; margin-left: 12px;`,children:[t(on,{on:!0}),t("span",{css:$css`margin-left: 20px; color: #44A2FC;`,children:"Loading Items..."})]}),renderUnLoaded:()=>s("div",{css:$css`display: flex; align-items: center;`,children:[t("span",{css:$css`color: #333;`,children:"No more Items"}),t("span",{css:$css`
              margin-left: 20px;
              color: #44A2FC;
              cursor: pointer;
            `,onClick:()=>{o([]),r(!0)},children:"Restart"})]})});return t("div",{children:p()})}const wy=`import React, { useState, useEffect } from "react";
import useVirtualArea from "@hooks/useVirtualArea";
import Loading from "@/components/Loading";

const Empty = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 50 50"
  >
    <circle cx="25" cy="25" r="20" stroke="#aaa" stroke-width="2" fill="none" />
    <line x1="15" y1="15" x2="35" y2="35" stroke="#aaa" stroke-width="2" />
  </svg>
);

function View() {
  const [items, setItems] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreItems = async () => {
    // 模拟网络请求
    // Mock network request
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1000)
    );

    // push new items
    setItems((prevItems) => [
      ...prevItems,
      ...Array.from({ length: 10 }, (_, i) => i + prevItems.length),
    ]);

    // do not load more if there has been 50 items at least
    if (items.length + 10 >= 50) {
      setHasMore(false);
    }
  };

  const renderItem = (item: any) => (
    <div css={$css\`margin-left: 20px\`}>{item}</div>
  );

  const [loaderRef, loading, _items, render] = useVirtualArea({
    loadMoreItems,
    items,
    hasMore,
    renderItem,
    renderEmpty: (
      <div css={$css\`display: flex; align-items: center; padding-block: 20px;\`}>
        <span>No Data</span>
        <div
          css={$css\`margin-left: 12px; width: 20px; height: 20px;\`}
          children={<Empty />}
        />
      </div>
    ),
    height: "300px",
    style: {
      position: "relative",
    },
    loaderComponentProps: {
      style: {
        marginBlock: "20px",
      },
    },
    renderTop: () => {
      return (
        <div
          css={$css\`display: flex; align-items: center; position: sticky; top: 0; z-index: 1; background-color: #fff; padding: 10px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\`}
        >
          <strong>total : </strong>
          <span css={$css\`margin-left: 20px;\`}>{items.length}</span>
          <strong css={$css\`margin-left: 20px;\`}>hasMore : </strong>
          <span css={$css\`margin-left: 20px;\`}>{hasMore.toString()}</span>
          <strong css={$css\`margin-left: 20px;\`}>loading : </strong>
          <span css={$css\`margin-left: 20px;\`}>{loading.toString()}</span>
        </div>
      );
    },
    renderLoader: () => {
      return (
        <div css={$css\`display: flex; align-items: center; margin-left: 12px;\`}>
          <Loading on />
          <span css={$css\`margin-left: 20px; color: #44A2FC;\`}>
            Loading Items...
          </span>
        </div>
      );
    },
    renderUnLoaded: () => {
      return (
        <div css={$css\`display: flex; align-items: center;\`}>
          <span css={$css\`color: #333;\`}>No more Items</span>
          <span
            css={$css\`
              margin-left: 20px;
              color: #44A2FC;
              cursor: pointer;
            \`}
            onClick={() => {
              setItems([]);
              setHasMore(true);
            }}
          >
            Restart
          </span>
        </div>
      );
    },
  });

  return <div>{render()}</div>;
}
`,ws={View:yy,code:wy};function xy(){const e=[{name:"options",type:"object",defaultValue:t(tt,{children:"Required"}),desc:"options of VirtualAreaOptions",properties:[{name:"loadMoreItems",type:"function",defaultValue:t(tt,{children:"Required"}),desc:"load more items function",details:"() => Promise<void>"},{name:"items",type:"any[]",defaultValue:t(tt,{children:"Required"}),desc:"items to render"},{name:"hasMore",type:"boolean",defaultValue:t(tt,{children:"Required"}),desc:"whether there are more items to load"},{name:"height",type:"React.CSSProperties['height']",defaultValue:t(tt,{children:"Required"}),desc:"height of virtual area"},{name:"style",type:"React.CSSProperties",defaultValue:"{}",desc:"style of virtual area"},{name:"renderTop",type:"React.ReactNode | (() => React.ReactNode)",defaultValue:"null",desc:"render function of top area"},{name:"renderItem",type:"React.ReactNode | ((item: any) => React.ReactNode)",defaultValue:t(tt,{children:"Required"}),desc:"render function of item"},{name:"itemComponent",type:"I",defaultValue:"null",desc:"component of item"},{name:"itemComponentProps",type:"React.JSX.IntrinsicElements[I]",defaultValue:"{}",desc:"props of item component"},{name:"renderEmpty",type:"React.ReactNode | (() => React.ReactNode)",defaultValue:"No data",desc:"render function of no data"},{name:"renderLoader",type:"React.ReactNode | (() => React.ReactNode)",defaultValue:"Loading...",desc:"render function of loader"},{name:"renderUnLoaded",type:"React.ReactNode | (() => React.ReactNode)",defaultValue:"No more data",desc:"render function of unloaded"},{name:"loaderComponent",type:"L",defaultValue:"div",desc:"component of loader"},{name:"loaderComponentProps",type:"React.JSX.IntrinsicElements[L]",defaultValue:"{}",desc:"props of loader component"},{name:"containerComponent",type:"C",defaultValue:"div",desc:"component of container"},{name:"containerComponentProps",type:"React.JSX.IntrinsicElements[C]",defaultValue:"{}",desc:"props of container component"},{name:"renderBottom",type:"React.ReactNode | (() => React.ReactNode)",defaultValue:"null",desc:"render function of bottom area"},{name:"observerOptions",type:"IntersectionObserverInit",defaultValue:{root:null,rootMargin:"20px",threshold:1},desc:"options of IntersectionObserver"}]},{name:"depths",type:"array",defaultValue:t(b,{children:"[]"}),desc:"dependencies of items render function"}],o=[{name:"[0] loaderRef",type:t(De,{label:"RefObject"}),desc:"ref of loader"},{name:"[1] loading",type:"boolean",desc:"state of loading"},{name:"[2] items",type:"Array<any>",desc:"items of list"},{name:"[3] render",type:"() => JSX.Element",desc:"render function of virtual area"}],n=m("useVirtualArea.$apis.generics");return s(b,{children:[t(M,{id:"hook-api",children:"Api of useVirtualArea"}),s(M,{low:!0,top:"20px",children:["Generics","<C, I, L>"]}),t(ne,{children:n}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:o})]})}function $y(){const e="useVirtualArea",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.consideration`),i=m(`${e}.$p1`),a=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e.replace(/([A-Z])/g,l=>l.toUpperCase()),desc:o,children:[t(ne,{children:n}),t(Ne,{children:t(Z,{code:ws.code,children:t(ws.View,{})})}),t("p",{children:i}),t(Se,{children:r}),t(Ae,{children:a}),t(xy,{})]})}const Cy=()=>{const[e,o]=_n(Array.from({length:9},(n,r)=>r+1).map(n=>({ids:[`s${n}`],name:`Step ${n}`,data:{},renders:[{id:`s${n}`,render(r,i,a,l){console.log(r,i,a,l);const d=n===9?o.stop:o.next;return s("div",{css:$css`
              display: flex;
              align-items: center;
              width: fit-content; 
              position: absolute;
              background: #fff;
              padding: 4px 20px;
              border-radius: 6px;
              transform: translate(-50%, 50%);
              `,children:[t("div",{css:$css`width: 60px;`,children:i}),t("div",{css:$css`padding: 4px 12px; &:hover { cursor: pointer; background: #eee;  border-radius: 4px;}`,onClick:d,children:n===9?"End":"Next"})]})}}]})));return s("div",{css:Ct.containerCss,children:[t("div",{id:"s1",css:Ct.boxCss("red"),onClick:o.start,children:"Start"}),t("div",{id:"s2",css:Ct.boxCss("green"),children:"2"}),t("div",{id:"s3",css:Ct.boxCss("blue"),children:"3"}),t("div",{id:"s4",css:Ct.boxCss("black"),children:"4"}),t("div",{id:"s5",css:Ct.boxCss("purple"),children:"5"}),t("div",{id:"s6",css:Ct.boxCss("pink"),children:"6"}),t("div",{id:"s7",css:Ct.boxCss("cyan"),children:"7"}),t("div",{id:"s8",css:Ct.boxCss("magenta"),children:"8"}),t("div",{id:"s9",css:Ct.boxCss("orange"),children:"9"})]})};var Ct;(e=>{e.containerCss=$css`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
gap: 10px;
width: 300px;
height: 300px;
`,e.boxCss=o=>$css`
color: ${o};
display: flex;
justify-content: center;
align-items: center;
border-radius: 6px;
cursor: pointer;
`})(Ct||(Ct={}));const ky=`import useGuide from "@hooks/useGuide";

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
`,xs={code:ky,View:Cy};function Sy(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useGuide"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[]})]})}const Fa=e=>{const{id:o,name:n,data:r,ids:i,guider:a}=e;return t("div",{onClick:a.stop,css:Yo.guide,children:"Stop"})},Ty=()=>{const[,e]=_n([{ids:["example2-s1"],name:"Step1",renders:[{id:"example2-s1",render(o,n,r,i){return t(Fa,{...{id:o,name:n,data:r,ids:i,guider:e}})}}]}]);return t("div",{children:t("div",{id:"example2-s1",onClick:e.start,style:Yo.btn,children:"Start"})})},Ry=()=>{const[,e]=_n([{ids:["example2-s2"],name:"Step1",renders:[{id:"example2-s2",render(o,n,r,i){return t(Fa,{...{id:o,name:n,data:r,ids:i,guider:e}})}}]}]);return t(Cl,{id:"example2-s2",guider:e,children:t("div",{id:"example2-s2",onClick:e.start,style:Yo.btn,children:"Start"})})};var Yo;(e=>{e.btn={cursor:"pointer",background:"#fff",padding:"4px 20px",borderRadius:"6px",border:"1px solid #333",boxSizing:"content-box"},e.guide=$css({display:"flex",alignItems:"center",width:"fit-content",position:"absolute",background:"#fff",padding:"4px 20px",borderRadius:"6px"})})(Yo||(Yo={}));const Ey=()=>s("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-around"},children:[t(Ty,{}),t(Ry,{})]}),My=`import useGuide, { Guider, Target } from "@hooks/useGuide";

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
`,$s={code:My,View:Ey};function Py(){const e="useGuide",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$p2`),d=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t("p",{children:a}),t(Z,{code:xs.code,children:t(xs.View,{})}),t("p",{children:l}),t(Z,{code:$s.code,children:t($s.View,{})})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:d}),t(Sy,{})]})}function Iy({loadMore:e,hasMore:o,loader:n,component:r,props:i,preloadDistance:a=200,observerOptions:l,disabled:d,containerId:c,containerRef:p,mode:h="auto"}){const[g,v]=u.useState([]),[C,y]=u.useState(!1),k=u.useRef(null),w=u.useRef(null),T=u.useRef(null),E=u.useRef(!1),S=u.useRef(null),$=u.useRef(!0),P=u.useRef(e),x=u.useRef(o);P.current=e,x.current=o;const A=u.useCallback(()=>h==="auto"?k.current?"container":"viewport":h,[h]);u.useEffect(()=>{k.current=document.getElementById(c)},[c,p]),u.useEffect(()=>()=>{$.current=!1,w.current?.disconnect()},[]);const U=u.useCallback(()=>{const W=T.current;if(!W)return!1;const q=W.getBoundingClientRect();if(A()==="viewport")return q.top<=window.innerHeight+a;const de=k.current;if(!de)return console.error("[react-hooks-kit][useInfiniteScroll] Container element not found for infinite scroll."),!1;const J=de.getBoundingClientRect();return q.top<=J.bottom+a},[a,A]),O=u.useCallback(async()=>{if(E.current||S.current||!x.current||d)return;E.current=!0,$.current&&y(!0);const W=P.current();S.current=W;try{const q=await W;Array.isArray(q)&&$.current&&v(re=>[...re,...q])}finally{S.current=null,E.current=!1,$.current&&(y(!1),requestAnimationFrame(()=>{!E.current&&x.current&&!d&&U()&&O()}))}},[d,U]),L=u.useCallback(W=>{if(T.current=W,w.current&&w.current.disconnect(),!W){w.current=null;return}w.current=new IntersectionObserver(q=>{q[0]?.isIntersecting&&O()},{root:A()==="container"?k.current:null,rootMargin:`0px 0px ${a}px 0px`,threshold:0,...l}),w.current.observe(W),requestAnimationFrame(()=>{!E.current&&x.current&&!d&&U()&&O()})},[O,a,l,d,U,A]),D=u.useCallback(()=>{v([]),E.current=!1,y(!1)},[]),te=u.useCallback(async()=>{D(),await new Promise(W=>requestAnimationFrame(()=>W(void 0))),await O()},[D,O]),z=r||"div",B=C?typeof n=="function"?n():n??"Loading...":null;return{loader:t(z,{ref:L,...i,children:B}),loading:C,items:g,setItems:v,reset:D,reload:te,triggerLoadMore:O}}const Ay=e=>new Promise(o=>{setTimeout(()=>{const i=Array.from({length:10}).map((a,l)=>({id:(e-1)*10+l+1,title:`Item ${(e-1)*10+l+1}`}));o({items:i,hasMore:e<5})},1e3)}),Ny=()=>{const[e,o]=u.useState(1),[n,r]=u.useState(!0),{loader:i,items:a,reset:l}=Iy({loadMore:async()=>{const d=await Ay(e);return o(c=>c+1),r(d.hasMore),d.items},hasMore:n,loader:t("div",{style:{textAlign:"center"},children:"Loading more..."}),preloadDistance:200,mode:"container",containerId:"infinite-scroll-container"});return s(Mr,{id:"infinite-scroll-container",style:{maxWidth:400,height:220,margin:"20px auto",padding:20,overflow:"auto"},children:[t(N,{onClick:l,children:"Reset"}),a.map((d,c)=>t("div",{style:{height:20},children:d.title},c)),i]})},Vy=`
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
`,Cs={code:Vy,View:Ny};function Oy(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useInfiniteScroll"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[]})]})}function Ly(){const e="useInfiniteScroll",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:Cs.code,children:t(Cs.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(Oy,{})]})}const By=()=>t(b,{children:t("h3",{children:"useAutoPageSize"})}),jy=`

`,ks={code:jy,View:By};function Dy(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useAutoPageSize"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[]})]})}function Uy(){const e="useAutoPageSize",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:ks.code,children:t(ks.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(Dy,{})]})}const zy=()=>{const[e,o]=Hm(0,(c,p)=>5<(p??0)?"Num cannot be greater than 5":null,(c,p)=>0>(p??0)?"Num cannot be less than 0":null),[n,r]=u.useState(null),[i,a]=u.useState(!1),l=()=>{a(!1)},d=s(u.Fragment,{children:[t(N,{color:"secondary",size:"small",onClick:l,children:"UNDO"}),t(Bn,{size:"small","aria-label":"close",color:"inherit",onClick:l,children:t(ym,{fontSize:"small"})})]});return s(b,{children:[t(N,{onClick:()=>{try{o(c=>c-1)}catch(c){r(c.message),a(!0)}},children:"-"}),t("span",{children:"num: "}),t("code",{children:e}),t(N,{onClick:()=>{try{o(c=>c+1)}catch(c){r(c.message),a(!0)}},children:"+"}),t(Sp,{open:i,autoHideDuration:6e3,onClose:l,message:n,action:d})]})},_y=`
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
`,Ss={code:_y,View:zy};function Fy(){const e=m("useProtect.desc"),o=m("useProtect.detail"),n=m("useProtect.consideration");return u.useEffect(()=>{document.title=`useProtect - ${ce.homepage}`},[]),s(le,{title:"UseProtect",desc:e,children:[t(ne,{children:o}),t(Z,{code:Ss.code,children:t(Ss.View,{})}),t(Se,{children:n})]})}const Wy={border:"none",background:"none",padding:"0.5rem 1.5rem",borderRadius:"3px",cursor:"pointer",boxShadow:"0 0 0 1px #ccc",margin:"1rem",position:"relative"},qy=()=>{const e=kl(br,3,{duration:300});return t(b,{children:e.map((o,n)=>t("button",{type:"button",ref:o,style:Wy,children:++n},n))})},Hy=`import useRipple from "@/hooks/houdini/hooks/useRipple";
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
`,Ts={code:Hy,View:qy};function Ky(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useBatchHooks"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function Gy(){const e="useBatchHooks",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t("p",{children:a}),t(Z,{code:Ts.code,children:t(Ts.View,{})})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(Ky,{})]})}const Qy=()=>{const e=Vm({x:0});return t(b,{children:s(N,{onClick:()=>{e.set("x",Math.random())},children:["$x: ",e.get("x")]})})},Jy=`

`,Rs={code:Jy,View:Qy};function Yy(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useReflect"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function Xy(){const e="useReflect",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:Rs.code,children:t(Rs.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(Yy,{})]})}const Zy=()=>{const[e,o]=sn();return s(b,{children:[s("div",{style:{marginBottom:"16px"},children:[t("strong",{children:"Current Title: "}),t("span",{children:e})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t(N,{variant:"contained",onClick:()=>o("New Title"),children:'Set to "New Title"'}),t(N,{variant:"contained",onClick:()=>o("Another Title"),children:'Set to "Another Title"'}),t(N,{variant:"outlined",onClick:()=>{document.title="External Change"},children:"External Change (via document.title)"})]})]})},ew=`import useTitle from "@hooks/useTitle";
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
};`,Es={code:ew,View:Zy},tw=()=>{const[e,o]=u.useState(0),[n,r]=sn("Counter: 0");return u.useEffect(()=>{r(`Counter: ${e}`)},[e]),s(b,{children:[t("h3",{children:"Example 2: Dynamic Counter Title"}),t("p",{children:"The page title updates automatically with the counter value."}),s("div",{style:{marginBottom:"16px"},children:[t("strong",{children:"Current Count: "}),t("span",{style:{fontSize:"24px",fontWeight:"bold"},children:e})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t(N,{variant:"contained",onClick:()=>o(e+1),children:"Increment"}),t(N,{variant:"outlined",onClick:()=>o(e-1),children:"Decrement"}),t(N,{variant:"outlined",onClick:()=>o(0),children:"Reset"})]})]})},ow=`import useTitle from "@evanpatchouli/react-hooks-kit";
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
};`,Ms={code:ow,View:tw},nw=()=>{const[e,o]=u.useState(0),[n,r]=sn("Messages");return u.useEffect(()=>{e>0?r(`(${e}) New Messages`):r("Messages")},[e]),s(b,{children:[t("h3",{children:"Example 3: Notification Title"}),t("p",{children:"The page title shows unread message count, similar to email clients."}),s("div",{style:{marginBottom:"16px"},children:[t("strong",{children:"Unread Messages: "}),t("span",{style:{fontSize:"24px",fontWeight:"bold",color:e>0?"#ff3b30":"#666"},children:e})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t(N,{variant:"contained",onClick:()=>o(e+1),children:"New Message"}),t(N,{variant:"outlined",onClick:()=>o(Math.max(0,e-1)),children:"Mark as Read"}),t(N,{variant:"outlined",onClick:()=>o(0),children:"Clear All"})]})]})},rw=`import useTitle from "@evanpatchouli/react-hooks-kit";
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
};`,Ps={code:rw,View:nw},iw=()=>{const[e,o]=u.useState(0),[n,r]=u.useState(!1),[i,a]=sn("Timer: 00:00");return u.useEffect(()=>{let l=null;return n&&(l=setInterval(()=>{o(d=>d+1)},1e3)),()=>{l&&clearInterval(l)}},[n]),u.useEffect(()=>{const l=Math.floor(e/60),d=e%60,c=`${String(l).padStart(2,"0")}:${String(d).padStart(2,"0")}`;a(`Timer: ${c}`)},[e]),s(b,{children:[t("h3",{children:"Example 4: Timer Title"}),t("p",{children:"The page title updates every second to show elapsed time."}),s("div",{style:{marginBottom:"16px"},children:[t("strong",{children:"Elapsed Time: "}),s("span",{style:{fontSize:"32px",fontWeight:"bold",fontFamily:"monospace"},children:[String(Math.floor(e/60)).padStart(2,"0"),":",String(e%60).padStart(2,"0")]})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t(N,{variant:"contained",color:n?"error":"primary",onClick:()=>r(!n),children:n?"Pause":"Start"}),t(N,{variant:"outlined",onClick:()=>{o(0),r(!1)},children:"Reset"})]})]})},sw=`import useTitle from "@evanpatchouli/react-hooks-kit";
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
};`,Is={code:sw,View:iw};function aw(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useTitle"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"initialTitle",type:"string",defaultValue:"document.title",desc:"The initial title to set when the component mounts. If not provided, uses the current document title."}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"[0] title",type:"string",defaultValue:null,desc:"The current document title (reactive to external changes)"},{name:"[1] setTitle",type:"(title: string) => void",defaultValue:null,desc:"Function to update the document title"}]})]})}function Tn(e){const{children:o,value:n,index:r,...i}=e;return t("div",{role:"tabpanel",hidden:n!==r,id:`example-tabpanel-${r}`,"aria-labelledby":`example-tab-${r}`,...i,children:n===r&&t(Xt,{sx:{p:3},children:o})})}function lw(){const[e,o]=u.useState(0),n="useTitle",r=m(`${n}.desc`),i=m(`${n}.detail`),a=m(`${n}.$best`),l=m(`${n}.consideration`),d=m(`${n}.$p1`),c=m(`${n}.$faqs`);return sn(`✨${n}✨ - ${ce.homepage}`),s(le,{title:n,desc:r,children:[t(ne,{children:i}),s(Ne,{children:[t(Xt,{sx:{borderBottom:1,borderColor:"divider"},children:s($a,{value:e,onChange:(p,h)=>o(h),children:[t(Bt,{label:"Basic"}),t(Bt,{label:"Counter"}),t(Bt,{label:"Notification"}),t(Bt,{label:"Timer"})]})}),t(Tn,{value:e,index:0,children:t(Z,{code:Es.code,children:t(Es.View,{})})}),t(Tn,{value:e,index:1,children:t(Z,{code:Ms.code,children:t(Ms.View,{})})}),t(Tn,{value:e,index:2,children:t(Z,{code:Ps.code,children:t(Ps.View,{})})}),t(Tn,{value:e,index:3,children:t(Z,{code:Is.code,children:t(Is.View,{})})}),t("p",{children:d})]}),t(Se,{children:l}),t(Oe,{children:a}),t(Ae,{children:c}),t(aw,{})]})}const cw=()=>{const[e,o]=u.useState(0);return So("/react-hooks-kit/favicon.ico",e>0?e:void 0),s(b,{children:[t("h3",{children:"Example 1: Dynamic Counter Badge"}),t("p",{children:"Click the button to increment the badge counter on the favicon."}),s(N,{variant:"contained",onClick:()=>o(e+1),children:["Count: ",e]}),t(N,{variant:"outlined",onClick:()=>o(0),style:{marginLeft:"10px"},children:"Reset"})]})},dw=`import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  useFavicon("/favicon.ico", count);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};`,As={code:dw,View:cw},uw=()=>{const[e,o]=u.useState(3);return So("/react-hooks-kit/favicon.ico",{badge:{content:e,position:"top-right",bgColor:"#ff3b30",textColor:"#fff"}}),s(b,{children:[t("h3",{children:"Example 2: Notification Badge"}),s("p",{children:["Unread messages: ",e]}),t(N,{variant:"contained",onClick:()=>o(e+1),children:"Add Message"}),t(N,{variant:"outlined",onClick:()=>o(Math.max(0,e-1)),style:{marginLeft:"10px"},children:"Mark as Read"}),t(N,{variant:"outlined",onClick:()=>o(0),style:{marginLeft:"10px"},children:"Clear All"})]})},pw=`import useFavicon from "@evanpatchouli/react-hooks-kit";
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
};`,Ns={code:pw,View:uw},hw=()=>{const[e,o]=u.useState("online");return So("/react-hooks-kit/favicon.ico",{badge:{content:"●",position:"bottom-right",bgColor:e==="online"?"#00ff00":"#ff0000",textColor:"#fff",size:.3}}),s(b,{children:[t("h3",{children:"Example 3: Status Indicator"}),s("p",{children:["Current status: ",t("strong",{children:e})]}),t(N,{variant:"contained",onClick:()=>o(e==="online"?"offline":"online"),children:"Toggle Status"})]})},mw=`import useFavicon from "@evanpatchouli/react-hooks-kit";
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
};`,Vs={code:mw,View:hw},fw=()=>{const[e,o]=u.useState("top-right");return So("/react-hooks-kit/favicon.ico",{badge:{content:"5",position:e}}),s(b,{children:[t("h3",{children:"Example 4: Different Positions"}),t("p",{children:"Select badge position:"}),s(fa,{style:{minWidth:200},children:[t(ga,{children:"Position"}),s(Gs,{value:e,label:"Position",onChange:n=>o(n.target.value),children:[t(hn,{value:"top-right",children:"Top Right"}),t(hn,{value:"top-left",children:"Top Left"}),t(hn,{value:"bottom-right",children:"Bottom Right"}),t(hn,{value:"bottom-left",children:"Bottom Left"})]})]})]})},gw=`import useFavicon from "@evanpatchouli/react-hooks-kit";
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
};`,Os={code:gw,View:fw},vw=()=>{const[e,o]=u.useState(150);return So("/react-hooks-kit/favicon.ico",e),s(b,{children:[t("h3",{children:"Example 5: 99+ Display"}),s("p",{children:["Count: ",e,' (displays as "99+" when over 99)']}),t(N,{variant:"contained",onClick:()=>o(e+10),children:"+10"}),t(N,{variant:"outlined",onClick:()=>o(Math.max(0,e-10)),style:{marginLeft:"10px"},children:"-10"}),t(N,{variant:"outlined",onClick:()=>o(50),style:{marginLeft:"10px"},children:"Set to 50"}),t(N,{variant:"outlined",onClick:()=>o(150),style:{marginLeft:"10px"},children:"Set to 150"})]})},bw=`import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(150);
  useFavicon("/favicon.ico", count); // Will display as "99+"

  return <div>Count: {count}</div>;
};`,Ls={code:bw,View:vw},yw=()=>(So(Gm("🍎")),s(b,{children:[t("h3",{children:"Example 6: Use a text favicon"}),s("p",{children:["You can also use a text favicon by ",t("code",{children:"createTextFavicon"}),"."]})]})),ww=`import useFavicon, { createTextFavicon } from "@evanpatchouli/react-hooks-kit";

const View = () => {
  const [count, setCount] = useState(0);
  useFavicon(createTextFavicon("🍎"));

  return (
    <>
      <h3>Example 6: Use a text favicon</h3>
      <p>You can also use a text favicon by <code>createTextFavicon</code>.</p>
    </>
  );
};`,Bs={code:ww,View:yw};function xw(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useFavicon"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"iconUrl",type:"string",defaultValue:t(tt,{}),desc:"The URL of the favicon image."},{name:"badge",type:"string | number",defaultValue:"undefined",desc:"Shorthand for badge content. When provided, creates a badge with default settings."},{name:"options",type:"UseFaviconOptions",defaultValue:"undefined",desc:"Full configuration object for the favicon.",properties:[{name:"badge",type:"BadgeOptions",defaultValue:"undefined",desc:"Badge configuration to overlay on the favicon.",properties:[{name:"content",type:"string | number",defaultValue:t(tt,{}),desc:"The content to display in the badge. Numbers over 99 will display as '99+'."},{name:"position",type:"'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",defaultValue:"'top-right'",desc:"Badge position."},{name:"bgColor",type:"string",defaultValue:"'#ff3b30'",desc:"Badge background color."},{name:"textColor",type:"string",defaultValue:"'#fff'",desc:"Badge text color."},{name:"size",type:"number",defaultValue:"0.5",desc:"Badge size as a ratio of icon size (0-1)."}]}]}]}),t(M,{low:!0,top:"20px",children:"Return Value"}),t(ee,{return:!0,rows:[{name:"void",type:"void",defaultValue:null,desc:"This hook does not return any value."}]})]})}function bo(e){const{children:o,value:n,index:r,...i}=e;return t("div",{role:"tabpanel",hidden:n!==r,id:`example-tabpanel-${r}`,"aria-labelledby":`example-tab-${r}`,...i,children:n===r&&t(Xt,{sx:{p:3},children:o})})}function $w(){const[e,o]=u.useState(0),n="useFavicon",r=m(`${n}.desc`),i=m(`${n}.detail`),a=m(`${n}.$best`),l=m(`${n}.consideration`),d=m(`${n}.$p1`),c=m(`${n}.$faqs`);return u.useEffect(()=>{document.title=`${n} - ${ce.homepage}`},[]),s(le,{title:n,desc:r,children:[t(ne,{children:i}),s(Ne,{children:[t(Xt,{sx:{borderBottom:1,borderColor:"divider"},children:s($a,{value:e,onChange:(p,h)=>o(h),children:[t(Bt,{label:"Counter"}),t(Bt,{label:"Notification"}),t(Bt,{label:"Status"}),t(Bt,{label:"Position"}),t(Bt,{label:"99+"}),t(Bt,{label:"Text Favicon"})]})}),t(bo,{value:e,index:0,children:t(Z,{code:As.code,children:t(As.View,{})})}),t(bo,{value:e,index:1,children:t(Z,{code:Ns.code,children:t(Ns.View,{})})}),t(bo,{value:e,index:2,children:t(Z,{code:Vs.code,children:t(Vs.View,{})})}),t(bo,{value:e,index:3,children:t(Z,{code:Os.code,children:t(Os.View,{})})}),t(bo,{value:e,index:4,children:t(Z,{code:Ls.code,children:t(Ls.View,{})})}),t(bo,{value:e,index:5,children:t(Z,{code:Bs.code,children:t(Bs.View,{})})}),t("p",{children:d})]}),t(Se,{children:l}),t(Oe,{children:a}),t(Ae,{children:c}),t(xw,{})]})}const Cw=()=>{const e=qm("dimensions-by-id-demo");return s("div",{children:[t("div",{id:"dimensions-by-id-demo",style:{width:240,padding:16,border:"1px solid currentColor",resize:"both",overflow:"auto"},children:"Resize this box"}),t("pre",{children:JSON.stringify(e,null,2)})]})},kw=`import useDimensionsById from "@hooks/useDimensionsById";

const dimensions = useDimensionsById("target-id");`,js={code:kw,View:Cw};function Sw(){return s(b,{children:[t(M,{id:"hook-api",children:"Api of useDimensionsById"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"id",type:"string",desc:"The id of the element to observe."}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(ee,{return:!0,rows:[{name:"width",type:"number",desc:"Observed content width."},{name:"height",type:"number",desc:"Observed content height."},{name:"top",type:"number",desc:"Observed content top offset."},{name:"left",type:"number",desc:"Observed content left offset."}]})]})}function Tw(){const e="useDimensionsById",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.$best`),i=m(`${e}.consideration`),a=m(`${e}.$p1`),l=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),s(Ne,{children:[t(Z,{code:js.code,children:t(js.View,{})}),t("p",{children:a})]}),t(Se,{children:i}),t(Oe,{children:r}),t(Ae,{children:l}),t(Sw,{})]})}const Rw=()=>{const e=sf();return s("div",{children:[t("div",{id:"qr-reader-docs",style:{minHeight:80}}),t("button",{onClick:()=>{e.start({containerId:"qr-reader-docs"})},children:"Start camera"})," ",t("button",{onClick:()=>{e.stop()},children:"Stop"}),s("p",{children:["Status: ",e.status]}),s("p",{children:["Permission: ",e.cameraPermission]}),e.scanResult?s("p",{children:["Result: ",e.scanResult.text]}):null]})},Ew=`const scanner = useQrcodeScan();
await scanner.start({ containerId: "qr-reader" });
await scanner.stop();`,Ds={code:Ew,View:Rw};function Mw(){return s(b,{children:[t(M,{id:"hook-api",children:"API of useQrcodeScan"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(ee,{param:!0,rows:[{name:"options",type:"UseQrcodeScanOptions | QrcodeScanMode",defaultValue:"{}",desc:"Scanner mode, callbacks, and optional service adapter."}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Object)"}),t(ee,{return:!0,rows:[{name:"status",type:"QrcodeScanStatus",desc:"Current scanner lifecycle state."},{name:"scanResult",type:"QrcodeScanResult | null",desc:"Latest normalized scan result."},{name:"start",type:"(options?) => Promise<void>",desc:"Start a live camera scan."},{name:"stop",type:"() => Promise<void>",desc:"Stop scanning and release resources."},{name:"scanImage",type:"(file, options?) => Promise<QrcodeScanResult>",desc:"Decode a QR code or barcode from an image."}]})]})}function Pw(){const e="useQrcodeScan",o=m(`${e}.desc`),n=m(`${e}.detail`),r=m(`${e}.consideration`),i=m(`${e}.$best`),a=m(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${ce.homepage}`},[]),s(le,{title:e,desc:o,children:[t(ne,{children:n}),t(Ne,{children:t(Z,{code:Ds.code,children:t(Ds.View,{})})}),t(Se,{children:r}),t(Oe,{children:i}),t(Ae,{children:a}),t(Mw,{})]})}const Us=Object.freeze(Object.defineProperty({__proto__:null,Overview:Ma,SentMail:xg,UseAutoPageSize:Uy,UseBatchHooks:Gy,UseDebounce:fb,UseDimensionsById:Tw,UseEmitter:Yb,UseFavicon:$w,UseGenerator:qb,UseGuide:Py,UseInfiniteScroll:Ly,UseInject:hy,UseList:mv,UseLoading:Ug,UseMap:ev,UseMemento:ab,UseMeta:lv,UseParticle:vy,UsePrevious:Rg,UsePromise:Wb,UseProtect:Fy,UseProvide:ay,UseQrcodeScan:Pw,UseReactive:Av,UseReactor:Gv,UseReactorListener:Vb,UseReactorStore:Qv,UseReactorStoreContext:Jv,UseReactorStoreRef:Yv,UseReceiver:ty,UseRecord:Wg,UseReflect:Xy,UseResize:Ub,UseRipple:fy,UseThrottle:yb,UseTickState:nb,UseTicker:ub,UseTitle:lw,UseToggle:Ag,UseTree:$v,UseUrl:$b,UseVirtualArea:$y,UseWatch:Tb,UseWatchGetter:Pb},Symbol.toStringTag,{value:"Module"}));function Iw(e){return e.split("?")[0].split("/").filter(Boolean).pop()||""}function Aw(){return s("div",{css:$css`
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
    `,children:[t($m,{}),t("div",{children:"This page is still deving..."})]})}var Do={},zs;function Nw(){if(zs)return Do;zs=1;var e=ln();Object.defineProperty(Do,"__esModule",{value:!0}),Do.default=void 0;var o=e(cn()),n=Zo(),r=(0,o.default)((0,n.jsx)("path",{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");return Do.default=r,Do}var Vw=Nw();const _s=en(Vw);var Uo={},Fs;function Ow(){if(Fs)return Uo;Fs=1;var e=ln();Object.defineProperty(Uo,"__esModule",{value:!0}),Uo.default=void 0;var o=e(cn()),n=Zo(),r=(0,o.default)((0,n.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");return Uo.default=r,Uo}var Lw=Ow();const Bw=en(Lw);function jw(e,o,n){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(e,o,"");else if(window.sidebar&&/Firefox/i.test(navigator.userAgent)||window.opera&&window.print){var r=document.createElement("a");r.href=o,r.title=e,r.rel="sidebar",document.body.appendChild(r),r.click(),document.body.removeChild(r)}else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(o,e);else{const i=[/Mac/i.test(navigator.platform)?"Cmd":"Ctrl","D"];n?n(i):alert("Press "+i[0]+" + D to bookmark this page.")}}function Dw(){const[e,o]=u.useState(null),[n,r]=u.useState(!1);return s(b,{children:[t(Xt,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1,position:"fixed",bottom:"80px",right:"40px"},children:t(jp,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:t(va,{}),children:[{icon:t(_s,{style:{rotate:"180deg"}}),name:"Bottom",callback:()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{icon:t(_s,{}),name:"Top",callback:()=>{window.scrollTo({top:0,behavior:"smooth"})}},{icon:t(Im,{}),name:"Star",callback:()=>{jw(null,null,a=>{o(s("span",{children:[t("span",{children:"Please press "}),t("strong",{children:a.join(" + ")}),t("span",{children:" to bookmark site. ✨"})]})),r(!0)})}},{icon:t(Bw,{}),name:"Share"}].map(a=>t(eh,{icon:a.icon,tooltipTitle:a.name,onClick:a.callback},a.name))})}),t(_a,{open:n,setOpen:r,sx:{position:"fixed",bottom:"0%",right:"0%",transform:"translate(-10px, -10px)"},children:e})]})}const Uw={new:t(Tm,{color:"primary"}),deving:t(Sm,{}),stable:t(b,{}),experimental:t(Pm,{color:"secondary"}),preview:t(bm,{color:"disabled"}),deprecated:t(km,{color:"error"})};function Wt({type:e}){return Uw[e]}function zw(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}function Fw(){const[e,o]=tn({0:!0,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1}),n=yr(),r=Iw(n.hash);return s("div",{className:"Docs",children:[t("div",{className:"Docs-Left",children:s($t,{className:"Docs-Left-Menu",sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:t(cr,{component:"div",id:"nested-list-subheader",onClick:()=>{rt("/docs",!0)},style:{cursor:"pointer"},children:"Docs of react-hooks-kit"}),children:[s(Fe,{onClick:()=>{o(0,!e[0])},children:[t(We,{children:"📖"}),t(qe,{primary:"Getting started"}),e[0]?t(Ot,{}):t(Lt,{})]}),t(dt,{in:e[0],timeout:"auto",unmountOnExit:!0,children:s($t,{component:"div",disablePadding:!0,children:[s(Fe,{sx:{pl:4},selected:r==="overview",onClick:()=>rt("/docs/overview",!0),children:[t(We,{children:"🧐"}),t(qe,{primary:"Overview"})]}),s(Fe,{sx:{pl:4},selected:r==="installation",onClick:()=>rt("/docs/installation",!0),children:[t(We,{children:"⬇️"}),t(qe,{primary:"Installation"})]}),s(Fe,{sx:{pl:4},selected:r==="usage",onClick:()=>rt("/docs/usage",!0),children:[t(We,{children:"🫰"}),t(qe,{primary:"Usage"})]}),s(Fe,{sx:{pl:4},selected:r==="faqs",onClick:()=>rt("/docs/faqs",!0),children:[t(We,{children:"❓"}),t(qe,{primary:"FAQs"})]}),s(Fe,{sx:{pl:4},selected:r==="support",onClick:()=>rt("/docs/support",!0),children:[t(We,{children:"💰"}),t(qe,{primary:"Support"})]})]})}),s(Fe,{selected:r==="sent-mail",onClick:()=>rt("/docs/sent-mail",!0),children:[t(We,{children:"📧"}),t(qe,{primary:"Sent mail"})]}),s(Fe,{selected:r==="draft",onClick:()=>rt("/docs/draft",!0),children:[t(We,{children:"⚓"}),t(qe,{primary:"Drafts"})]}),s($t,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:t(cr,{component:"div",id:"nested-list-subheader",children:"Functional hooks"}),children:[s(Fe,{onClick:()=>{o(1,!e[1])},children:[t(We,{children:"💾"}),t(qe,{primary:"Stateful hooks"}),e[1]?t(Ot,{}):t(Lt,{})]}),t(dt,{in:e[1],timeout:"auto",unmountOnExit:!0,children:t($t,{component:"div",disablePadding:!0,children:Object.entries(It.StatefulHooks).map(([,{route:i,status:a}])=>s(Fe,{sx:{pl:4,opacity:a==="deprecated"?"0.5":"1"},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(We,{children:t(Wt,{type:a})}),t(qe,{children:a==="deprecated"?t("del",{children:i}):i})]}))})}),s(Fe,{onClick:()=>{o(2,!e[2])},children:[t(We,{children:"♻️"}),t(qe,{primary:"Callback hooks"}),e[2]?t(Ot,{}):t(Lt,{})]}),t(dt,{in:e[2],timeout:"auto",unmountOnExit:!0,children:t($t,{component:"div",disablePadding:!0,children:Object.entries(It.CallbackHooks).map(([,{route:i,status:a}])=>s(Fe,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(We,{children:t(Wt,{type:a})}),t(qe,{primary:i})]}))})}),s(Fe,{onClick:()=>{o(3,!e[3])},children:[t(We,{children:"⌚"}),t(qe,{primary:"Promise hooks"}),e[3]?t(Ot,{}):t(Lt,{})]}),t(dt,{in:e[3],timeout:"auto",unmountOnExit:!0,children:t($t,{component:"div",disablePadding:!0,children:Object.entries(It.PromiseHooks).map(([,{route:i,status:a}])=>s(Fe,{sx:{pl:4,opacity:a==="deprecated"?"0.5":"1"},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(We,{children:t(Wt,{type:a})}),t(qe,{children:a==="deprecated"?t("del",{children:i}):i})]}))})}),s(Fe,{onClick:()=>{o(4,!e[4])},children:[t(We,{children:"🛠️"}),t(qe,{primary:"Utils hooks"}),e[4]?t(Ot,{}):t(Lt,{})]}),t(dt,{in:e[4],timeout:"auto",unmountOnExit:!0,children:t($t,{component:"div",disablePadding:!0,children:Object.entries(It.UtilsHooks).map(([,{route:i,status:a}])=>s(Fe,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(We,{children:t(Wt,{type:a})}),t(qe,{primary:i})]}))})}),s(Fe,{onClick:()=>{o(5,!e[5])},children:[t(We,{children:"🔮"}),t(qe,{primary:"Lifecycle hooks"}),e[5]?t(Ot,{}):t(Lt,{})]}),t(dt,{in:e[5],timeout:"auto",unmountOnExit:!0,children:t($t,{component:"div",disablePadding:!0,children:Object.entries(It.LifecycleHooks).map(([,{route:i,status:a}])=>s(Fe,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(We,{children:t(Wt,{type:a})}),t(qe,{primary:i})]}))})}),s(Fe,{onClick:()=>{o(6,!e[6])},children:[t(We,{children:"♨️"}),t(qe,{primary:"Event hooks"}),e[6]?t(Ot,{}):t(Lt,{})]}),t(dt,{in:e[6],timeout:"auto",unmountOnExit:!0,children:t($t,{component:"div",disablePadding:!0,children:Object.entries(It.EventHooks).map(([,{route:i,status:a}])=>s(Fe,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(We,{children:t(Wt,{type:a})}),t(qe,{primary:i})]}))})}),s(Fe,{onClick:()=>{o(7,!e[7])},children:[t(We,{children:"🎉"}),t(qe,{primary:"UI & UX hooks"}),e[7]?t(Ot,{}):t(Lt,{})]}),t(dt,{in:e[7],timeout:"auto",unmountOnExit:!0,children:t($t,{component:"div",disablePadding:!0,children:Object.entries(It.UiUxHooks).map(([,{route:i,status:a}])=>s(Fe,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(We,{children:t(Wt,{type:a})}),t(qe,{primary:i})]}))})}),s(Fe,{onClick:()=>{o(8,!e[8])},children:[t(We,{children:"🎉"}),t(qe,{primary:"Utils hooks"}),e[8]?t(Ot,{}):t(Lt,{})]}),t(dt,{in:e[8],timeout:"auto",unmountOnExit:!0,children:t($t,{component:"div",disablePadding:!0,children:Object.entries(It.UtilsHooks).map(([,{route:i,status:a}])=>s(Fe,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(We,{children:t(Wt,{type:a})}),t(qe,{primary:i})]}))})}),s(Fe,{onClick:()=>{o(9,!e[9])},children:[t(We,{children:"🪄"}),t(qe,{primary:"Other hooks"}),e[9]?t(Ot,{}):t(Lt,{})]}),t(dt,{in:e[9],timeout:"auto",unmountOnExit:!0,children:t($t,{component:"div",disablePadding:!0,children:Object.entries(It.OtherHooks).map(([,{route:i,status:a}])=>s(Fe,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(We,{children:t(Wt,{type:a})}),t(qe,{primary:i})]}))})})]})]})}),s("div",{className:"Docs-Main",children:[t(Sl,{children:t(mn,{path:"/",children:s(b,{children:[t(mn,{path:"",element:t(yg,{})}),Object.entries(It).map(([i,a])=>{const l=i;return Object.entries(a).map(([d,c])=>{const p=zw(d);let h;return l==="GettingStarted"?p in ki&&(h=ki[p]):p in Us&&(h=Us[p]),h?t(mn,{path:c.route,element:t(h,{})}):t(mn,{path:c.route,element:s(b,{children:[t(mf,{children:c.title}),t(Aw,{})]})})})})]})})}),t(Ff,{})]}),s("div",{className:"Docs-Right",children:[t(bg,{}),t(Dw,{})]})]})}export{Fw as default};
