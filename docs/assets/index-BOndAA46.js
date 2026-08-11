import{r as u,c as Da,e as Bs,_ as re,b as R,d as m,f as Q,u as Ua,h as Vr,g as Kn,i as za,k as Fa,m as _a,l as le,n as pe,o as Wa,p as Ir,C as Ha,q as O,s as qa,t as Ie,v as ur,w as At,x as pr,y as Ka,z as bo,A as hr,D as Yo,E as Et,F as Tt,G as mr,H as he,I as de,T as Os,J as Ga,K as Jt,L as _,M as Sn,N as Ln,P as jn,O as Ho,Q as qo,R as Ja,S as ut,U as zo,V as Ya,W as Gt,X as He,Y as Bn,Z as On,$ as Qa,a0 as Ar,a1 as Xa,a2 as fr,a3 as Mn,a4 as Za,a5 as el,a6 as Er,a7 as Tn,a8 as Ds,a9 as Us,aa as nr,ab as tl,ac as dn,ad as ol,ae as nl,af as rl,ag as zs,ah as Do,a as t,ai as il,aj as Fs,ak as sl,al as _s,am as Ws,j as s,an as al,ao as lo,ap as be,B as E,aq as ll,ar as g,as as cl,at as dl,au as se,av as ul,aw as Qo,ax as Xo,ay as Yt,az as gr,aA as Zo,aB as vr,aC as br,aD as en,aE as Dn,aF as Nr,aG as Wt,aH as pl,aI as hl,aJ as Un,aK as Hs,aL as yr,aM as qs,aN as ml,aO as Ks,aP as Pn,aQ as fl,aR as gl,aS as un,aT as wt,aU as pn,aV as vl}from"./index-BO1YJALt.js";function bl(e,o){return()=>null}function vo(e,o){var n,r;return u.isValidElement(e)&&o.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function yl(e,o){return()=>null}function xl(e,o,n,r,i){return null}let mo;function Gs(){if(mo)return mo;const e=document.createElement("div"),o=document.createElement("div");return o.style.width="10px",o.style.height="1px",e.appendChild(o),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),mo="reverse",e.scrollLeft>0?mo="default":(e.scrollLeft=1,e.scrollLeft===0&&(mo="negative")),document.body.removeChild(e),mo}function $l(e,o){const n=e.scrollLeft;if(o!=="rtl")return n;switch(Gs()){case"negative":return e.scrollWidth-e.clientWidth+n;case"reverse":return e.scrollWidth-e.clientWidth-n;default:return n}}const wl={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},kl=Da(),Cl=["component","direction","spacing","divider","children","className","useFlexGap"],Tl=Wa(),Rl=kl("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function Sl(e){return Ua({props:e,name:"MuiStack",defaultTheme:Tl})}function Ml(e,o){const n=u.Children.toArray(e).filter(Boolean);return n.reduce((r,i,a)=>(r.push(i),a<n.length-1&&r.push(u.cloneElement(o,{key:`separator-${a}`})),r),[])}const Pl=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Vl=({ownerState:e,theme:o})=>{let n=m({display:"flex",flexDirection:"column"},Vr({theme:o},Kn({values:e.direction,breakpoints:o.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=za(o),i=Object.keys(o.breakpoints.values).reduce((c,p)=>((typeof e.spacing=="object"&&e.spacing[p]!=null||typeof e.direction=="object"&&e.direction[p]!=null)&&(c[p]=!0),c),{}),a=Kn({values:e.direction,base:i}),l=Kn({values:e.spacing,base:i});typeof a=="object"&&Object.keys(a).forEach((c,p,h)=>{if(!a[c]){const b=p>0?a[h[p-1]]:"column";a[c]=b}}),n=Fa(n,Vr({theme:o},l,(c,p)=>e.useFlexGap?{gap:Ir(r,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Pl(p?a[p]:e.direction)}`]:Ir(r,c)}}))}return n=_a(o.breakpoints,n),n};function Il(e={}){const{createStyledComponent:o=Rl,useThemeProps:n=Sl,componentName:r="MuiStack"}=e,i=()=>le({root:["root"]},c=>pe(r,c),{}),a=o(Vl);return u.forwardRef(function(c,p){const h=n(c),v=Bs(h),{component:b="div",direction:$="column",spacing:y=0,divider:x,children:w,className:S,useFlexGap:P=!1}=v,C=re(v,Cl),T={direction:$,spacing:y,useFlexGap:P},I=i();return R.jsx(a,m({as:b,ownerState:T,ref:p,className:Q(I.root,S)},C,{children:x?Ml(w,x):w}))})}const Al={configure:e=>{Ha.configure(e)}},El=Object.freeze(Object.defineProperty({__proto__:null,capitalize:O,createChainedFunction:qa,createSvgIcon:Ie,debounce:ur,deprecatedPropType:bl,isMuiElement:vo,ownerDocument:At,ownerWindow:pr,requirePropFactory:yl,setRef:Ka,unstable_ClassNameGenerator:Al,unstable_useEnhancedEffect:bo,unstable_useId:hr,unsupportedProp:xl,useControlled:Yo,useEventCallback:Et,useForkRef:Tt,useIsFocusVisible:mr},Symbol.toStringTag,{value:"Module"}));function Nl(e){return pe("MuiCollapse",e)}he("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Ll=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],jl=e=>{const{orientation:o,classes:n}=e,r={root:["root",`${o}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${o}`],wrapperInner:["wrapperInner",`${o}`]};return le(r,Nl,n)},Bl=_("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.orientation],n.state==="entered"&&o.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&o.hidden]}})(({theme:e,ownerState:o})=>m({height:0,overflow:"hidden",transition:e.transitions.create("height")},o.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},o.state==="entered"&&m({height:"auto",overflow:"visible"},o.orientation==="horizontal"&&{width:"auto"}),o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&{visibility:"hidden"})),Ol=_("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,o)=>o.wrapper})(({ownerState:e})=>m({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Dl=_("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,o)=>o.wrapperInner})(({ownerState:e})=>m({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),dt=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiCollapse"}),{addEndListener:i,children:a,className:l,collapsedSize:d="0px",component:c,easing:p,in:h,onEnter:v,onEntered:b,onEntering:$,onExit:y,onExited:x,onExiting:w,orientation:S="vertical",style:P,timeout:C=Ga.standard,TransitionComponent:T=Os}=r,I=re(r,Ll),k=m({},r,{orientation:S,collapsedSize:d}),A=jl(k),j=Jt(),z=u.useRef(),N=u.useRef(null),D=u.useRef(),X=typeof d=="number"?`${d}px`:d,B=S==="horizontal",L=B?"width":"height";u.useEffect(()=>()=>{clearTimeout(z.current)},[]);const F=u.useRef(null),W=Tt(n,F),oe=ee=>ke=>{if(ee){const H=F.current;ke===void 0?ee(H):ee(H,ke)}},ae=()=>N.current?N.current[B?"clientWidth":"clientHeight"]:0,J=oe((ee,ke)=>{N.current&&B&&(N.current.style.position="absolute"),ee.style[L]=X,v&&v(ee,ke)}),Le=oe((ee,ke)=>{const H=ae();N.current&&B&&(N.current.style.position="");const{duration:ue,easing:Te}=Sn({style:P,timeout:C,easing:p},{mode:"enter"});if(C==="auto"){const De=j.transitions.getAutoHeightDuration(H);ee.style.transitionDuration=`${De}ms`,D.current=De}else ee.style.transitionDuration=typeof ue=="string"?ue:`${ue}ms`;ee.style[L]=`${H}px`,ee.style.transitionTimingFunction=Te,$&&$(ee,ke)}),je=oe((ee,ke)=>{ee.style[L]="auto",b&&b(ee,ke)}),qe=oe(ee=>{ee.style[L]=`${ae()}px`,y&&y(ee)}),$e=oe(x),Re=oe(ee=>{const ke=ae(),{duration:H,easing:ue}=Sn({style:P,timeout:C,easing:p},{mode:"exit"});if(C==="auto"){const Te=j.transitions.getAutoHeightDuration(ke);ee.style.transitionDuration=`${Te}ms`,D.current=Te}else ee.style.transitionDuration=typeof H=="string"?H:`${H}ms`;ee.style[L]=X,ee.style.transitionTimingFunction=ue,w&&w(ee)}),Ae=ee=>{C==="auto"&&(z.current=setTimeout(ee,D.current||0)),i&&i(F.current,ee)};return R.jsx(T,m({in:h,onEnter:J,onEntered:je,onEntering:Le,onExit:qe,onExited:$e,onExiting:Re,addEndListener:Ae,nodeRef:F,timeout:C==="auto"?null:C},I,{children:(ee,ke)=>R.jsx(Bl,m({as:c,className:Q(A.root,l,{entered:A.entered,exited:!h&&X==="0px"&&A.hidden}[ee]),style:m({[B?"minWidth":"minHeight"]:X},P),ownerState:m({},k,{state:ee}),ref:W},ke,{children:R.jsx(Ol,{ownerState:m({},k,{state:ee}),className:A.wrapper,ref:N,children:R.jsx(Dl,{ownerState:m({},k,{state:ee}),className:A.wrapperInner,children:a})})}))}))});dt.muiSupportAuto=!0;function Ul(e){return pe("MuiAlert",e)}const Lr=he("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),zl=Ie(R.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Fl=Ie(R.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),_l=Ie(R.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Wl=Ie(R.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Hl=Ie(R.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ql=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],Kl=e=>{const{variant:o,color:n,severity:r,classes:i}=e,a={root:["root",`${o}${O(n||r)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return le(a,Ul,i)},Gl=_(jn,{name:"MuiAlert",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`${n.variant}${O(n.color||n.severity)}`]]}})(({theme:e,ownerState:o})=>{const n=e.palette.mode==="light"?Ho:qo,r=e.palette.mode==="light"?qo:Ho,i=o.color||o.severity;return m({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},i&&o.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:n(e.palette[i].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${i}StandardBg`]:r(e.palette[i].light,.9),[`& .${Lr.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:e.palette[i].main}},i&&o.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:n(e.palette[i].light,.6),border:`1px solid ${(e.vars||e).palette[i].light}`,[`& .${Lr.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:e.palette[i].main}},i&&o.variant==="filled"&&m({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${i}FilledColor`],backgroundColor:e.vars.palette.Alert[`${i}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[i].dark:e.palette[i].main,color:e.palette.getContrastText(e.palette[i].main)}))}),Jl=_("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Yl=_("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),jr=_("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Br={success:R.jsx(zl,{fontSize:"inherit"}),warning:R.jsx(Fl,{fontSize:"inherit"}),error:R.jsx(_l,{fontSize:"inherit"}),info:R.jsx(Wl,{fontSize:"inherit"})},Ql=u.forwardRef(function(o,n){var r,i,a,l,d,c;const p=de({props:o,name:"MuiAlert"}),{action:h,children:v,className:b,closeText:$="Close",color:y,components:x={},componentsProps:w={},icon:S,iconMapping:P=Br,onClose:C,role:T="alert",severity:I="success",slotProps:k={},slots:A={},variant:j="standard"}=p,z=re(p,ql),N=m({},p,{color:y,severity:I,variant:j}),D=Kl(N),X=(r=(i=A.closeButton)!=null?i:x.CloseButton)!=null?r:Ln,B=(a=(l=A.closeIcon)!=null?l:x.CloseIcon)!=null?a:Hl,L=(d=k.closeButton)!=null?d:w.closeButton,F=(c=k.closeIcon)!=null?c:w.closeIcon;return R.jsxs(Gl,m({role:T,elevation:0,ownerState:N,className:Q(D.root,b),ref:n},z,{children:[S!==!1?R.jsx(Jl,{ownerState:N,className:D.icon,children:S||P[I]||Br[I]}):null,R.jsx(Yl,{ownerState:N,className:D.message,children:v}),h!=null?R.jsx(jr,{ownerState:N,className:D.action,children:h}):null,h==null&&C?R.jsx(jr,{ownerState:N,className:D.action,children:R.jsx(X,m({size:"small","aria-label":$,title:$,color:"inherit",onClick:C},L,{children:R.jsx(B,m({fontSize:"small"},F))}))}):null]}))});function Xl(e){return pe("MuiTypography",e)}he("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Zl=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],ec=e=>{const{align:o,gutterBottom:n,noWrap:r,paragraph:i,variant:a,classes:l}=e,d={root:["root",a,e.align!=="inherit"&&`align${O(o)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return le(d,Xl,l)},tc=_("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.variant&&o[n.variant],n.align!=="inherit"&&o[`align${O(n.align)}`],n.noWrap&&o.noWrap,n.gutterBottom&&o.gutterBottom,n.paragraph&&o.paragraph]}})(({theme:e,ownerState:o})=>m({margin:0},o.variant==="inherit"&&{font:"inherit"},o.variant!=="inherit"&&e.typography[o.variant],o.align!=="inherit"&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})),Or={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},oc={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},nc=e=>oc[e]||e,bt=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTypography"}),i=nc(r.color),a=Bs(m({},r,{color:i})),{align:l="inherit",className:d,component:c,gutterBottom:p=!1,noWrap:h=!1,paragraph:v=!1,variant:b="body1",variantMapping:$=Or}=a,y=re(a,Zl),x=m({},a,{align:l,color:i,className:d,component:c,gutterBottom:p,noWrap:h,paragraph:v,variant:b,variantMapping:$}),w=c||(v?"p":$[b]||Or[b])||"span",S=ec(x);return R.jsx(tc,m({as:w,ref:n,ownerState:x,className:Q(S.root,d)},y))});function rc(e,o,n=(r,i)=>r===i){return e.length===o.length&&e.every((r,i)=>n(r,o[i]))}const ic={disableDefaultClasses:!1},sc=u.createContext(ic);function ac(e){const{disableDefaultClasses:o}=u.useContext(sc);return n=>o?"":e(n)}function Dr(e){return e.substring(2).toLowerCase()}function lc(e,o){return o.documentElement.clientWidth<e.clientX||o.documentElement.clientHeight<e.clientY}function cc(e){const{children:o,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:i,touchEvent:a="onTouchEnd"}=e,l=u.useRef(!1),d=u.useRef(null),c=u.useRef(!1),p=u.useRef(!1);u.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const h=Tt(o.ref,d),v=Et(y=>{const x=p.current;p.current=!1;const w=At(d.current);if(!c.current||!d.current||"clientX"in y&&lc(y,w))return;if(l.current){l.current=!1;return}let S;y.composedPath?S=y.composedPath().indexOf(d.current)>-1:S=!w.documentElement.contains(y.target)||d.current.contains(y.target),!S&&(n||!x)&&i(y)}),b=y=>x=>{p.current=!0;const w=o.props[y];w&&w(x)},$={ref:h};return a!==!1&&($[a]=b(a)),u.useEffect(()=>{if(a!==!1){const y=Dr(a),x=At(d.current),w=()=>{l.current=!0};return x.addEventListener(y,v),x.addEventListener("touchmove",w),()=>{x.removeEventListener(y,v),x.removeEventListener("touchmove",w)}}},[v,a]),r!==!1&&($[r]=b(r)),u.useEffect(()=>{if(r!==!1){const y=Dr(r),x=At(d.current);return x.addEventListener(y,v),()=>{x.removeEventListener(y,v)}}},[v,r]),R.jsx(u.Fragment,{children:u.cloneElement(o,$)})}var pt="top",Rt="bottom",St="right",ht="left",xr="auto",tn=[pt,Rt,St,ht],yo="start",Ko="end",dc="clippingParents",Js="viewport",Po="popper",uc="reference",Ur=tn.reduce(function(e,o){return e.concat([o+"-"+yo,o+"-"+Ko])},[]),Ys=[].concat(tn,[xr]).reduce(function(e,o){return e.concat([o,o+"-"+yo,o+"-"+Ko])},[]),pc="beforeRead",hc="read",mc="afterRead",fc="beforeMain",gc="main",vc="afterMain",bc="beforeWrite",yc="write",xc="afterWrite",$c=[pc,hc,mc,fc,gc,vc,bc,yc,xc];function Ot(e){return e?(e.nodeName||"").toLowerCase():null}function yt(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var o=e.ownerDocument;return o&&o.defaultView||window}return e}function ao(e){var o=yt(e).Element;return e instanceof o||e instanceof Element}function Ct(e){var o=yt(e).HTMLElement;return e instanceof o||e instanceof HTMLElement}function $r(e){if(typeof ShadowRoot>"u")return!1;var o=yt(e).ShadowRoot;return e instanceof o||e instanceof ShadowRoot}function wc(e){var o=e.state;Object.keys(o.elements).forEach(function(n){var r=o.styles[n]||{},i=o.attributes[n]||{},a=o.elements[n];!Ct(a)||!Ot(a)||(Object.assign(a.style,r),Object.keys(i).forEach(function(l){var d=i[l];d===!1?a.removeAttribute(l):a.setAttribute(l,d===!0?"":d)}))})}function kc(e){var o=e.state,n={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,n.popper),o.styles=n,o.elements.arrow&&Object.assign(o.elements.arrow.style,n.arrow),function(){Object.keys(o.elements).forEach(function(r){var i=o.elements[r],a=o.attributes[r]||{},l=Object.keys(o.styles.hasOwnProperty(r)?o.styles[r]:n[r]),d=l.reduce(function(c,p){return c[p]="",c},{});!Ct(i)||!Ot(i)||(Object.assign(i.style,d),Object.keys(a).forEach(function(c){i.removeAttribute(c)}))})}}const Cc={name:"applyStyles",enabled:!0,phase:"write",fn:wc,effect:kc,requires:["computeStyles"]};function Bt(e){return e.split("-")[0]}var so=Math.max,Vn=Math.min,xo=Math.round;function rr(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(o){return o.brand+"/"+o.version}).join(" "):navigator.userAgent}function Qs(){return!/^((?!chrome|android).)*safari/i.test(rr())}function $o(e,o,n){o===void 0&&(o=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;o&&Ct(e)&&(i=e.offsetWidth>0&&xo(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&xo(r.height)/e.offsetHeight||1);var l=ao(e)?yt(e):window,d=l.visualViewport,c=!Qs()&&n,p=(r.left+(c&&d?d.offsetLeft:0))/i,h=(r.top+(c&&d?d.offsetTop:0))/a,v=r.width/i,b=r.height/a;return{width:v,height:b,top:h,right:p+v,bottom:h+b,left:p,x:p,y:h}}function wr(e){var o=$o(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(o.width-n)<=1&&(n=o.width),Math.abs(o.height-r)<=1&&(r=o.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Xs(e,o){var n=o.getRootNode&&o.getRootNode();if(e.contains(o))return!0;if(n&&$r(n)){var r=o;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ht(e){return yt(e).getComputedStyle(e)}function Tc(e){return["table","td","th"].indexOf(Ot(e))>=0}function Qt(e){return((ao(e)?e.ownerDocument:e.document)||window.document).documentElement}function zn(e){return Ot(e)==="html"?e:e.assignedSlot||e.parentNode||($r(e)?e.host:null)||Qt(e)}function zr(e){return!Ct(e)||Ht(e).position==="fixed"?null:e.offsetParent}function Rc(e){var o=/firefox/i.test(rr()),n=/Trident/i.test(rr());if(n&&Ct(e)){var r=Ht(e);if(r.position==="fixed")return null}var i=zn(e);for($r(i)&&(i=i.host);Ct(i)&&["html","body"].indexOf(Ot(i))<0;){var a=Ht(i);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||o&&a.willChange==="filter"||o&&a.filter&&a.filter!=="none")return i;i=i.parentNode}return null}function on(e){for(var o=yt(e),n=zr(e);n&&Tc(n)&&Ht(n).position==="static";)n=zr(n);return n&&(Ot(n)==="html"||Ot(n)==="body"&&Ht(n).position==="static")?o:n||Rc(e)||o}function kr(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Fo(e,o,n){return so(e,Vn(o,n))}function Sc(e,o,n){var r=Fo(e,o,n);return r>n?n:r}function Zs(){return{top:0,right:0,bottom:0,left:0}}function ea(e){return Object.assign({},Zs(),e)}function ta(e,o){return o.reduce(function(n,r){return n[r]=e,n},{})}var Mc=function(o,n){return o=typeof o=="function"?o(Object.assign({},n.rects,{placement:n.placement})):o,ea(typeof o!="number"?o:ta(o,tn))};function Pc(e){var o,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,l=n.modifiersData.popperOffsets,d=Bt(n.placement),c=kr(d),p=[ht,St].indexOf(d)>=0,h=p?"height":"width";if(!(!a||!l)){var v=Mc(i.padding,n),b=wr(a),$=c==="y"?pt:ht,y=c==="y"?Rt:St,x=n.rects.reference[h]+n.rects.reference[c]-l[c]-n.rects.popper[h],w=l[c]-n.rects.reference[c],S=on(a),P=S?c==="y"?S.clientHeight||0:S.clientWidth||0:0,C=x/2-w/2,T=v[$],I=P-b[h]-v[y],k=P/2-b[h]/2+C,A=Fo(T,k,I),j=c;n.modifiersData[r]=(o={},o[j]=A,o.centerOffset=A-k,o)}}function Vc(e){var o=e.state,n=e.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=o.elements.popper.querySelector(i),!i)||Xs(o.elements.popper,i)&&(o.elements.arrow=i))}const Ic={name:"arrow",enabled:!0,phase:"main",fn:Pc,effect:Vc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function wo(e){return e.split("-")[1]}var Ac={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ec(e,o){var n=e.x,r=e.y,i=o.devicePixelRatio||1;return{x:xo(n*i)/i||0,y:xo(r*i)/i||0}}function Fr(e){var o,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,l=e.offsets,d=e.position,c=e.gpuAcceleration,p=e.adaptive,h=e.roundOffsets,v=e.isFixed,b=l.x,$=b===void 0?0:b,y=l.y,x=y===void 0?0:y,w=typeof h=="function"?h({x:$,y:x}):{x:$,y:x};$=w.x,x=w.y;var S=l.hasOwnProperty("x"),P=l.hasOwnProperty("y"),C=ht,T=pt,I=window;if(p){var k=on(n),A="clientHeight",j="clientWidth";if(k===yt(n)&&(k=Qt(n),Ht(k).position!=="static"&&d==="absolute"&&(A="scrollHeight",j="scrollWidth")),k=k,i===pt||(i===ht||i===St)&&a===Ko){T=Rt;var z=v&&k===I&&I.visualViewport?I.visualViewport.height:k[A];x-=z-r.height,x*=c?1:-1}if(i===ht||(i===pt||i===Rt)&&a===Ko){C=St;var N=v&&k===I&&I.visualViewport?I.visualViewport.width:k[j];$-=N-r.width,$*=c?1:-1}}var D=Object.assign({position:d},p&&Ac),X=h===!0?Ec({x:$,y:x},yt(n)):{x:$,y:x};if($=X.x,x=X.y,c){var B;return Object.assign({},D,(B={},B[T]=P?"0":"",B[C]=S?"0":"",B.transform=(I.devicePixelRatio||1)<=1?"translate("+$+"px, "+x+"px)":"translate3d("+$+"px, "+x+"px, 0)",B))}return Object.assign({},D,(o={},o[T]=P?x+"px":"",o[C]=S?$+"px":"",o.transform="",o))}function Nc(e){var o=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0?!0:r,a=n.adaptive,l=a===void 0?!0:a,d=n.roundOffsets,c=d===void 0?!0:d,p={placement:Bt(o.placement),variation:wo(o.placement),popper:o.elements.popper,popperRect:o.rects.popper,gpuAcceleration:i,isFixed:o.options.strategy==="fixed"};o.modifiersData.popperOffsets!=null&&(o.styles.popper=Object.assign({},o.styles.popper,Fr(Object.assign({},p,{offsets:o.modifiersData.popperOffsets,position:o.options.strategy,adaptive:l,roundOffsets:c})))),o.modifiersData.arrow!=null&&(o.styles.arrow=Object.assign({},o.styles.arrow,Fr(Object.assign({},p,{offsets:o.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-placement":o.placement})}const Lc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Nc,data:{}};var hn={passive:!0};function jc(e){var o=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0?!0:i,l=r.resize,d=l===void 0?!0:l,c=yt(o.elements.popper),p=[].concat(o.scrollParents.reference,o.scrollParents.popper);return a&&p.forEach(function(h){h.addEventListener("scroll",n.update,hn)}),d&&c.addEventListener("resize",n.update,hn),function(){a&&p.forEach(function(h){h.removeEventListener("scroll",n.update,hn)}),d&&c.removeEventListener("resize",n.update,hn)}}const Bc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:jc,data:{}};var Oc={left:"right",right:"left",bottom:"top",top:"bottom"};function Rn(e){return e.replace(/left|right|bottom|top/g,function(o){return Oc[o]})}var Dc={start:"end",end:"start"};function _r(e){return e.replace(/start|end/g,function(o){return Dc[o]})}function Cr(e){var o=yt(e),n=o.pageXOffset,r=o.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Tr(e){return $o(Qt(e)).left+Cr(e).scrollLeft}function Uc(e,o){var n=yt(e),r=Qt(e),i=n.visualViewport,a=r.clientWidth,l=r.clientHeight,d=0,c=0;if(i){a=i.width,l=i.height;var p=Qs();(p||!p&&o==="fixed")&&(d=i.offsetLeft,c=i.offsetTop)}return{width:a,height:l,x:d+Tr(e),y:c}}function zc(e){var o,n=Qt(e),r=Cr(e),i=(o=e.ownerDocument)==null?void 0:o.body,a=so(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=so(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),d=-r.scrollLeft+Tr(e),c=-r.scrollTop;return Ht(i||n).direction==="rtl"&&(d+=so(n.clientWidth,i?i.clientWidth:0)-a),{width:a,height:l,x:d,y:c}}function Rr(e){var o=Ht(e),n=o.overflow,r=o.overflowX,i=o.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function oa(e){return["html","body","#document"].indexOf(Ot(e))>=0?e.ownerDocument.body:Ct(e)&&Rr(e)?e:oa(zn(e))}function _o(e,o){var n;o===void 0&&(o=[]);var r=oa(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),a=yt(r),l=i?[a].concat(a.visualViewport||[],Rr(r)?r:[]):r,d=o.concat(l);return i?d:d.concat(_o(zn(l)))}function ir(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Fc(e,o){var n=$o(e,!1,o==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Wr(e,o,n){return o===Js?ir(Uc(e,n)):ao(o)?Fc(o,n):ir(zc(Qt(e)))}function _c(e){var o=_o(zn(e)),n=["absolute","fixed"].indexOf(Ht(e).position)>=0,r=n&&Ct(e)?on(e):e;return ao(r)?o.filter(function(i){return ao(i)&&Xs(i,r)&&Ot(i)!=="body"}):[]}function Wc(e,o,n,r){var i=o==="clippingParents"?_c(e):[].concat(o),a=[].concat(i,[n]),l=a[0],d=a.reduce(function(c,p){var h=Wr(e,p,r);return c.top=so(h.top,c.top),c.right=Vn(h.right,c.right),c.bottom=Vn(h.bottom,c.bottom),c.left=so(h.left,c.left),c},Wr(e,l,r));return d.width=d.right-d.left,d.height=d.bottom-d.top,d.x=d.left,d.y=d.top,d}function na(e){var o=e.reference,n=e.element,r=e.placement,i=r?Bt(r):null,a=r?wo(r):null,l=o.x+o.width/2-n.width/2,d=o.y+o.height/2-n.height/2,c;switch(i){case pt:c={x:l,y:o.y-n.height};break;case Rt:c={x:l,y:o.y+o.height};break;case St:c={x:o.x+o.width,y:d};break;case ht:c={x:o.x-n.width,y:d};break;default:c={x:o.x,y:o.y}}var p=i?kr(i):null;if(p!=null){var h=p==="y"?"height":"width";switch(a){case yo:c[p]=c[p]-(o[h]/2-n[h]/2);break;case Ko:c[p]=c[p]+(o[h]/2-n[h]/2);break}}return c}function Go(e,o){o===void 0&&(o={});var n=o,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,l=a===void 0?e.strategy:a,d=n.boundary,c=d===void 0?dc:d,p=n.rootBoundary,h=p===void 0?Js:p,v=n.elementContext,b=v===void 0?Po:v,$=n.altBoundary,y=$===void 0?!1:$,x=n.padding,w=x===void 0?0:x,S=ea(typeof w!="number"?w:ta(w,tn)),P=b===Po?uc:Po,C=e.rects.popper,T=e.elements[y?P:b],I=Wc(ao(T)?T:T.contextElement||Qt(e.elements.popper),c,h,l),k=$o(e.elements.reference),A=na({reference:k,element:C,placement:i}),j=ir(Object.assign({},C,A)),z=b===Po?j:k,N={top:I.top-z.top+S.top,bottom:z.bottom-I.bottom+S.bottom,left:I.left-z.left+S.left,right:z.right-I.right+S.right},D=e.modifiersData.offset;if(b===Po&&D){var X=D[i];Object.keys(N).forEach(function(B){var L=[St,Rt].indexOf(B)>=0?1:-1,F=[pt,Rt].indexOf(B)>=0?"y":"x";N[B]+=X[F]*L})}return N}function Hc(e,o){o===void 0&&(o={});var n=o,r=n.placement,i=n.boundary,a=n.rootBoundary,l=n.padding,d=n.flipVariations,c=n.allowedAutoPlacements,p=c===void 0?Ys:c,h=wo(r),v=h?d?Ur:Ur.filter(function(y){return wo(y)===h}):tn,b=v.filter(function(y){return p.indexOf(y)>=0});b.length===0&&(b=v);var $=b.reduce(function(y,x){return y[x]=Go(e,{placement:x,boundary:i,rootBoundary:a,padding:l})[Bt(x)],y},{});return Object.keys($).sort(function(y,x){return $[y]-$[x]})}function qc(e){if(Bt(e)===xr)return[];var o=Rn(e);return[_r(e),o,_r(o)]}function Kc(e){var o=e.state,n=e.options,r=e.name;if(!o.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0?!0:i,l=n.altAxis,d=l===void 0?!0:l,c=n.fallbackPlacements,p=n.padding,h=n.boundary,v=n.rootBoundary,b=n.altBoundary,$=n.flipVariations,y=$===void 0?!0:$,x=n.allowedAutoPlacements,w=o.options.placement,S=Bt(w),P=S===w,C=c||(P||!y?[Rn(w)]:qc(w)),T=[w].concat(C).reduce(function(Re,Ae){return Re.concat(Bt(Ae)===xr?Hc(o,{placement:Ae,boundary:h,rootBoundary:v,padding:p,flipVariations:y,allowedAutoPlacements:x}):Ae)},[]),I=o.rects.reference,k=o.rects.popper,A=new Map,j=!0,z=T[0],N=0;N<T.length;N++){var D=T[N],X=Bt(D),B=wo(D)===yo,L=[pt,Rt].indexOf(X)>=0,F=L?"width":"height",W=Go(o,{placement:D,boundary:h,rootBoundary:v,altBoundary:b,padding:p}),oe=L?B?St:ht:B?Rt:pt;I[F]>k[F]&&(oe=Rn(oe));var ae=Rn(oe),J=[];if(a&&J.push(W[X]<=0),d&&J.push(W[oe]<=0,W[ae]<=0),J.every(function(Re){return Re})){z=D,j=!1;break}A.set(D,J)}if(j)for(var Le=y?3:1,je=function(Ae){var ee=T.find(function(ke){var H=A.get(ke);if(H)return H.slice(0,Ae).every(function(ue){return ue})});if(ee)return z=ee,"break"},qe=Le;qe>0;qe--){var $e=je(qe);if($e==="break")break}o.placement!==z&&(o.modifiersData[r]._skip=!0,o.placement=z,o.reset=!0)}}const Gc={name:"flip",enabled:!0,phase:"main",fn:Kc,requiresIfExists:["offset"],data:{_skip:!1}};function Hr(e,o,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-o.height-n.y,right:e.right-o.width+n.x,bottom:e.bottom-o.height+n.y,left:e.left-o.width-n.x}}function qr(e){return[pt,St,Rt,ht].some(function(o){return e[o]>=0})}function Jc(e){var o=e.state,n=e.name,r=o.rects.reference,i=o.rects.popper,a=o.modifiersData.preventOverflow,l=Go(o,{elementContext:"reference"}),d=Go(o,{altBoundary:!0}),c=Hr(l,r),p=Hr(d,i,a),h=qr(c),v=qr(p);o.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:h,hasPopperEscaped:v},o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":v})}const Yc={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Jc};function Qc(e,o,n){var r=Bt(e),i=[ht,pt].indexOf(r)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},o,{placement:e})):n,l=a[0],d=a[1];return l=l||0,d=(d||0)*i,[ht,St].indexOf(r)>=0?{x:d,y:l}:{x:l,y:d}}function Xc(e){var o=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,l=Ys.reduce(function(h,v){return h[v]=Qc(v,o.rects,a),h},{}),d=l[o.placement],c=d.x,p=d.y;o.modifiersData.popperOffsets!=null&&(o.modifiersData.popperOffsets.x+=c,o.modifiersData.popperOffsets.y+=p),o.modifiersData[r]=l}const Zc={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Xc};function ed(e){var o=e.state,n=e.name;o.modifiersData[n]=na({reference:o.rects.reference,element:o.rects.popper,placement:o.placement})}const td={name:"popperOffsets",enabled:!0,phase:"read",fn:ed,data:{}};function od(e){return e==="x"?"y":"x"}function nd(e){var o=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0?!0:i,l=n.altAxis,d=l===void 0?!1:l,c=n.boundary,p=n.rootBoundary,h=n.altBoundary,v=n.padding,b=n.tether,$=b===void 0?!0:b,y=n.tetherOffset,x=y===void 0?0:y,w=Go(o,{boundary:c,rootBoundary:p,padding:v,altBoundary:h}),S=Bt(o.placement),P=wo(o.placement),C=!P,T=kr(S),I=od(T),k=o.modifiersData.popperOffsets,A=o.rects.reference,j=o.rects.popper,z=typeof x=="function"?x(Object.assign({},o.rects,{placement:o.placement})):x,N=typeof z=="number"?{mainAxis:z,altAxis:z}:Object.assign({mainAxis:0,altAxis:0},z),D=o.modifiersData.offset?o.modifiersData.offset[o.placement]:null,X={x:0,y:0};if(k){if(a){var B,L=T==="y"?pt:ht,F=T==="y"?Rt:St,W=T==="y"?"height":"width",oe=k[T],ae=oe+w[L],J=oe-w[F],Le=$?-j[W]/2:0,je=P===yo?A[W]:j[W],qe=P===yo?-j[W]:-A[W],$e=o.elements.arrow,Re=$&&$e?wr($e):{width:0,height:0},Ae=o.modifiersData["arrow#persistent"]?o.modifiersData["arrow#persistent"].padding:Zs(),ee=Ae[L],ke=Ae[F],H=Fo(0,A[W],Re[W]),ue=C?A[W]/2-Le-H-ee-N.mainAxis:je-H-ee-N.mainAxis,Te=C?-A[W]/2+Le+H+ke+N.mainAxis:qe+H+ke+N.mainAxis,De=o.elements.arrow&&on(o.elements.arrow),Ze=De?T==="y"?De.clientTop||0:De.clientLeft||0:0,Ye=(B=D?.[T])!=null?B:0,Se=oe+ue-Ye-Ze,ye=oe+Te-Ye,it=Fo($?Vn(ae,Se):ae,oe,$?so(J,ye):J);k[T]=it,X[T]=it-oe}if(d){var Je,Ke=T==="x"?pt:ht,Mt=T==="x"?Rt:St,we=k[I],ot=I==="y"?"height":"width",mt=we+w[Ke],xt=we-w[Mt],ft=[pt,ht].indexOf(S)!==-1,U=(Je=D?.[I])!=null?Je:0,K=ft?mt:we-A[ot]-j[ot]-U+N.altAxis,ne=ft?we+A[ot]+j[ot]-U-N.altAxis:xt,ce=$&&ft?Sc(K,we,ne):Fo($?K:mt,we,$?ne:xt);k[I]=ce,X[I]=ce-we}o.modifiersData[r]=X}}const rd={name:"preventOverflow",enabled:!0,phase:"main",fn:nd,requiresIfExists:["offset"]};function id(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function sd(e){return e===yt(e)||!Ct(e)?Cr(e):id(e)}function ad(e){var o=e.getBoundingClientRect(),n=xo(o.width)/e.offsetWidth||1,r=xo(o.height)/e.offsetHeight||1;return n!==1||r!==1}function ld(e,o,n){n===void 0&&(n=!1);var r=Ct(o),i=Ct(o)&&ad(o),a=Qt(o),l=$o(e,i,n),d={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Ot(o)!=="body"||Rr(a))&&(d=sd(o)),Ct(o)?(c=$o(o,!0),c.x+=o.clientLeft,c.y+=o.clientTop):a&&(c.x=Tr(a))),{x:l.left+d.scrollLeft-c.x,y:l.top+d.scrollTop-c.y,width:l.width,height:l.height}}function cd(e){var o=new Map,n=new Set,r=[];e.forEach(function(a){o.set(a.name,a)});function i(a){n.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(d){if(!n.has(d)){var c=o.get(d);c&&i(c)}}),r.push(a)}return e.forEach(function(a){n.has(a.name)||i(a)}),r}function dd(e){var o=cd(e);return $c.reduce(function(n,r){return n.concat(o.filter(function(i){return i.phase===r}))},[])}function ud(e){var o;return function(){return o||(o=new Promise(function(n){Promise.resolve().then(function(){o=void 0,n(e())})})),o}}function pd(e){var o=e.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(o).map(function(n){return o[n]})}var Kr={placement:"bottom",modifiers:[],strategy:"absolute"};function Gr(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return!o.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function hd(e){e===void 0&&(e={});var o=e,n=o.defaultModifiers,r=n===void 0?[]:n,i=o.defaultOptions,a=i===void 0?Kr:i;return function(d,c,p){p===void 0&&(p=a);var h={placement:"bottom",orderedModifiers:[],options:Object.assign({},Kr,a),modifiersData:{},elements:{reference:d,popper:c},attributes:{},styles:{}},v=[],b=!1,$={state:h,setOptions:function(S){var P=typeof S=="function"?S(h.options):S;x(),h.options=Object.assign({},a,h.options,P),h.scrollParents={reference:ao(d)?_o(d):d.contextElement?_o(d.contextElement):[],popper:_o(c)};var C=dd(pd([].concat(r,h.options.modifiers)));return h.orderedModifiers=C.filter(function(T){return T.enabled}),y(),$.update()},forceUpdate:function(){if(!b){var S=h.elements,P=S.reference,C=S.popper;if(Gr(P,C)){h.rects={reference:ld(P,on(C),h.options.strategy==="fixed"),popper:wr(C)},h.reset=!1,h.placement=h.options.placement,h.orderedModifiers.forEach(function(N){return h.modifiersData[N.name]=Object.assign({},N.data)});for(var T=0;T<h.orderedModifiers.length;T++){if(h.reset===!0){h.reset=!1,T=-1;continue}var I=h.orderedModifiers[T],k=I.fn,A=I.options,j=A===void 0?{}:A,z=I.name;typeof k=="function"&&(h=k({state:h,options:j,name:z,instance:$})||h)}}}},update:ud(function(){return new Promise(function(w){$.forceUpdate(),w(h)})}),destroy:function(){x(),b=!0}};if(!Gr(d,c))return $;$.setOptions(p).then(function(w){!b&&p.onFirstUpdate&&p.onFirstUpdate(w)});function y(){h.orderedModifiers.forEach(function(w){var S=w.name,P=w.options,C=P===void 0?{}:P,T=w.effect;if(typeof T=="function"){var I=T({state:h,name:S,instance:$,options:C}),k=function(){};v.push(I||k)}})}function x(){v.forEach(function(w){return w()}),v=[]}return $}}var md=[Bc,td,Lc,Cc,Zc,Gc,rd,Ic,Yc],fd=hd({defaultModifiers:md});function gd(e){return pe("MuiPopper",e)}he("MuiPopper",["root"]);const vd=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],bd=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function yd(e,o){if(o==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function sr(e){return typeof e=="function"?e():e}function xd(e){return e.nodeType!==void 0}const $d=()=>le({root:["root"]},ac(gd)),wd={},kd=u.forwardRef(function(o,n){var r;const{anchorEl:i,children:a,direction:l,disablePortal:d,modifiers:c,open:p,placement:h,popperOptions:v,popperRef:b,slotProps:$={},slots:y={},TransitionProps:x}=o,w=re(o,vd),S=u.useRef(null),P=Tt(S,n),C=u.useRef(null),T=Tt(C,b),I=u.useRef(T);bo(()=>{I.current=T},[T]),u.useImperativeHandle(b,()=>C.current,[]);const k=yd(h,l),[A,j]=u.useState(k),[z,N]=u.useState(sr(i));u.useEffect(()=>{C.current&&C.current.forceUpdate()}),u.useEffect(()=>{i&&N(sr(i))},[i]),bo(()=>{if(!z||!p)return;const F=ae=>{j(ae.placement)};let W=[{name:"preventOverflow",options:{altBoundary:d}},{name:"flip",options:{altBoundary:d}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:ae})=>{F(ae)}}];c!=null&&(W=W.concat(c)),v&&v.modifiers!=null&&(W=W.concat(v.modifiers));const oe=fd(z,S.current,m({placement:k},v,{modifiers:W}));return I.current(oe),()=>{oe.destroy(),I.current(null)}},[z,d,c,p,v,k]);const D={placement:A};x!==null&&(D.TransitionProps=x);const X=$d(),B=(r=y.root)!=null?r:"div",L=ut({elementType:B,externalSlotProps:$.root,externalForwardedProps:w,additionalProps:{role:"tooltip",ref:P},ownerState:o,className:X.root});return R.jsx(B,m({},L,{children:typeof a=="function"?a(D):a}))}),Cd=u.forwardRef(function(o,n){const{anchorEl:r,children:i,container:a,direction:l="ltr",disablePortal:d=!1,keepMounted:c=!1,modifiers:p,open:h,placement:v="bottom",popperOptions:b=wd,popperRef:$,style:y,transition:x=!1,slotProps:w={},slots:S={}}=o,P=re(o,bd),[C,T]=u.useState(!0),I=()=>{T(!1)},k=()=>{T(!0)};if(!c&&!h&&(!x||C))return null;let A;if(a)A=a;else if(r){const N=sr(r);A=N&&xd(N)?At(N).body:At(null).body}const j=!h&&c&&(!x||C)?"none":void 0,z=x?{in:h,onEnter:I,onExited:k}:void 0;return R.jsx(Ja,{disablePortal:d,container:A,children:R.jsx(kd,m({anchorEl:r,direction:l,disablePortal:d,modifiers:p,ref:n,open:x?!C:h,placement:v,popperOptions:b,popperRef:$,slotProps:w,slots:S},P,{style:m({position:"fixed",top:0,left:0,display:j},y),TransitionProps:z,children:i}))})}),Td=2;function ra(e,o){return e-o}function Vo(e,o,n){return e==null?o:Math.min(Math.max(o,e),n)}function Jr(e,o){var n;const{index:r}=(n=e.reduce((i,a,l)=>{const d=Math.abs(o-a);return i===null||d<i.distance||d===i.distance?{distance:d,index:l}:i},null))!=null?n:{};return r}function mn(e,o){if(o.current!==void 0&&e.changedTouches){const n=e;for(let r=0;r<n.changedTouches.length;r+=1){const i=n.changedTouches[r];if(i.identifier===o.current)return{x:i.clientX,y:i.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function In(e,o,n){return(e-o)*100/(n-o)}function Rd(e,o,n){return(n-o)*e+o}function Sd(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const o=e.toString().split(".")[1];return o?o.length:0}function Md(e,o,n){const r=Math.round((e-n)/o)*o+n;return Number(r.toFixed(Sd(o)))}function Yr({values:e,newValue:o,index:n}){const r=e.slice();return r[n]=o,r.sort(ra)}function fn({sliderRef:e,activeIndex:o,setActive:n}){var r,i;const a=At(e.current);if(!((r=e.current)!=null&&r.contains(a.activeElement))||Number(a==null||(i=a.activeElement)==null?void 0:i.getAttribute("data-index"))!==o){var l;(l=e.current)==null||l.querySelector(`[type="range"][data-index="${o}"]`).focus()}n&&n(o)}function gn(e,o){return typeof e=="number"&&typeof o=="number"?e===o:typeof e=="object"&&typeof o=="object"?rc(e,o):!1}const Pd={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},Vd=e=>e;let vn;function Gn(){return vn===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?vn=CSS.supports("touch-action","none"):vn=!0),vn}function Id(e){const{"aria-labelledby":o,defaultValue:n,disabled:r=!1,disableSwap:i=!1,isRtl:a=!1,marks:l=!1,max:d=100,min:c=0,name:p,onChange:h,onChangeCommitted:v,orientation:b="horizontal",rootRef:$,scale:y=Vd,step:x=1,tabIndex:w,value:S}=e,P=u.useRef(),[C,T]=u.useState(-1),[I,k]=u.useState(-1),[A,j]=u.useState(!1),z=u.useRef(0),[N,D]=Yo({controlled:S,default:n??c,name:"Slider"}),X=h&&((U,K,ne)=>{const ce=U.nativeEvent||U,Be=new ce.constructor(ce.type,ce);Object.defineProperty(Be,"target",{writable:!0,value:{value:K,name:p}}),h(Be,K,ne)}),B=Array.isArray(N);let L=B?N.slice().sort(ra):[N];L=L.map(U=>Vo(U,c,d));const F=l===!0&&x!==null?[...Array(Math.floor((d-c)/x)+1)].map((U,K)=>({value:c+x*K})):l||[],W=F.map(U=>U.value),{isFocusVisibleRef:oe,onBlur:ae,onFocus:J,ref:Le}=mr(),[je,qe]=u.useState(-1),$e=u.useRef(),Re=Tt(Le,$e),Ae=Tt($,Re),ee=U=>K=>{var ne;const ce=Number(K.currentTarget.getAttribute("data-index"));J(K),oe.current===!0&&qe(ce),k(ce),U==null||(ne=U.onFocus)==null||ne.call(U,K)},ke=U=>K=>{var ne;ae(K),oe.current===!1&&qe(-1),k(-1),U==null||(ne=U.onBlur)==null||ne.call(U,K)};bo(()=>{if(r&&$e.current.contains(document.activeElement)){var U;(U=document.activeElement)==null||U.blur()}},[r]),r&&C!==-1&&T(-1),r&&je!==-1&&qe(-1);const H=U=>K=>{var ne;(ne=U.onChange)==null||ne.call(U,K);const ce=Number(K.currentTarget.getAttribute("data-index")),Be=L[ce],Ue=W.indexOf(Be);let fe=K.target.valueAsNumber;if(F&&x==null){const Me=W[W.length-1];fe>Me?fe=Me:fe<W[0]?fe=W[0]:fe=fe<Be?W[Ue-1]:W[Ue+1]}if(fe=Vo(fe,c,d),B){i&&(fe=Vo(fe,L[ce-1]||-1/0,L[ce+1]||1/0));const Me=fe;fe=Yr({values:L,newValue:fe,index:ce});let Oe=ce;i||(Oe=fe.indexOf(Me)),fn({sliderRef:$e,activeIndex:Oe})}D(fe),qe(ce),X&&!gn(fe,N)&&X(K,fe,ce),v&&v(K,fe)},ue=u.useRef();let Te=b;a&&b==="horizontal"&&(Te+="-reverse");const De=({finger:U,move:K=!1})=>{const{current:ne}=$e,{width:ce,height:Be,bottom:Ue,left:fe}=ne.getBoundingClientRect();let Me;Te.indexOf("vertical")===0?Me=(Ue-U.y)/Be:Me=(U.x-fe)/ce,Te.indexOf("-reverse")!==-1&&(Me=1-Me);let Oe;if(Oe=Rd(Me,c,d),x)Oe=Md(Oe,x,c);else{const q=Jr(W,Oe);Oe=W[q]}Oe=Vo(Oe,c,d);let nt=0;if(B){K?nt=ue.current:nt=Jr(L,Oe),i&&(Oe=Vo(Oe,L[nt-1]||-1/0,L[nt+1]||1/0));const q=Oe;Oe=Yr({values:L,newValue:Oe,index:nt}),i&&K||(nt=Oe.indexOf(q),ue.current=nt)}return{newValue:Oe,activeIndex:nt}},Ze=Et(U=>{const K=mn(U,P);if(!K)return;if(z.current+=1,U.type==="mousemove"&&U.buttons===0){Ye(U);return}const{newValue:ne,activeIndex:ce}=De({finger:K,move:!0});fn({sliderRef:$e,activeIndex:ce,setActive:T}),D(ne),!A&&z.current>Td&&j(!0),X&&!gn(ne,N)&&X(U,ne,ce)}),Ye=Et(U=>{const K=mn(U,P);if(j(!1),!K)return;const{newValue:ne}=De({finger:K,move:!0});T(-1),U.type==="touchend"&&k(-1),v&&v(U,ne),P.current=void 0,ye()}),Se=Et(U=>{if(r)return;Gn()||U.preventDefault();const K=U.changedTouches[0];K!=null&&(P.current=K.identifier);const ne=mn(U,P);if(ne!==!1){const{newValue:Be,activeIndex:Ue}=De({finger:ne});fn({sliderRef:$e,activeIndex:Ue,setActive:T}),D(Be),X&&!gn(Be,N)&&X(U,Be,Ue)}z.current=0;const ce=At($e.current);ce.addEventListener("touchmove",Ze),ce.addEventListener("touchend",Ye)}),ye=u.useCallback(()=>{const U=At($e.current);U.removeEventListener("mousemove",Ze),U.removeEventListener("mouseup",Ye),U.removeEventListener("touchmove",Ze),U.removeEventListener("touchend",Ye)},[Ye,Ze]);u.useEffect(()=>{const{current:U}=$e;return U.addEventListener("touchstart",Se,{passive:Gn()}),()=>{U.removeEventListener("touchstart",Se,{passive:Gn()}),ye()}},[ye,Se]),u.useEffect(()=>{r&&ye()},[r,ye]);const it=U=>K=>{var ne;if((ne=U.onMouseDown)==null||ne.call(U,K),r||K.defaultPrevented||K.button!==0)return;K.preventDefault();const ce=mn(K,P);if(ce!==!1){const{newValue:Ue,activeIndex:fe}=De({finger:ce});fn({sliderRef:$e,activeIndex:fe,setActive:T}),D(Ue),X&&!gn(Ue,N)&&X(K,Ue,fe)}z.current=0;const Be=At($e.current);Be.addEventListener("mousemove",Ze),Be.addEventListener("mouseup",Ye)},Je=In(B?L[0]:c,c,d),Ke=In(L[L.length-1],c,d)-Je,Mt=(U={})=>{const K=zo(U),ne={onMouseDown:it(K||{})},ce=m({},K,ne);return m({},U,{ref:Ae},ce)},we=U=>K=>{var ne;(ne=U.onMouseOver)==null||ne.call(U,K);const ce=Number(K.currentTarget.getAttribute("data-index"));k(ce)},ot=U=>K=>{var ne;(ne=U.onMouseLeave)==null||ne.call(U,K),k(-1)};return{active:C,axis:Te,axisProps:Pd,dragging:A,focusedThumbIndex:je,getHiddenInputProps:(U={})=>{var K;const ne=zo(U),ce={onChange:H(ne||{}),onFocus:ee(ne||{}),onBlur:ke(ne||{})},Be=m({},ne,ce);return m({tabIndex:w,"aria-labelledby":o,"aria-orientation":b,"aria-valuemax":y(d),"aria-valuemin":y(c),name:p,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(K=e.step)!=null?K:void 0,disabled:r},U,Be,{style:m({},wl,{direction:a?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Mt,getThumbProps:(U={})=>{const K=zo(U),ne={onMouseOver:we(K||{}),onMouseLeave:ot(K||{})};return m({},U,K,ne)},marks:F,open:I,range:B,rootRef:Ae,trackLeap:Ke,trackOffset:Je,values:L,getThumbStyle:U=>({pointerEvents:C!==-1&&C!==U?"none":void 0})}}function Ad(e={}){const{autoHideDuration:o=null,disableWindowBlurListener:n=!1,onClose:r,open:i,resumeHideDuration:a}=e,l=u.useRef();u.useEffect(()=>{if(!i)return;function S(P){P.defaultPrevented||(P.key==="Escape"||P.key==="Esc")&&r?.(P,"escapeKeyDown")}return document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}},[i,r]);const d=Et((S,P)=>{r?.(S,P)}),c=Et(S=>{!r||S==null||(clearTimeout(l.current),l.current=setTimeout(()=>{d(null,"timeout")},S))});u.useEffect(()=>(i&&c(o),()=>{clearTimeout(l.current)}),[i,o,c]);const p=S=>{r?.(S,"clickaway")},h=()=>{clearTimeout(l.current)},v=u.useCallback(()=>{o!=null&&c(a??o*.5)},[o,a,c]),b=S=>P=>{const C=S.onBlur;C?.(P),v()},$=S=>P=>{const C=S.onFocus;C?.(P),h()},y=S=>P=>{const C=S.onMouseEnter;C?.(P),h()},x=S=>P=>{const C=S.onMouseLeave;C?.(P),v()};return u.useEffect(()=>{if(!n&&i)return window.addEventListener("focus",v),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",h)}},[n,v,i]),{getRootProps:(S={})=>{const P=m({},zo(e),zo(S));return m({role:"presentation"},S,P,{onBlur:b(P),onFocus:$(P),onMouseEnter:y(P),onMouseLeave:x(P)})},onClickAway:p}}const Ed=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Nd=_(Cd,{name:"MuiPopper",slot:"Root",overridesResolver:(e,o)=>o.root})({}),ia=u.forwardRef(function(o,n){var r;const i=Ya(),a=de({props:o,name:"MuiPopper"}),{anchorEl:l,component:d,components:c,componentsProps:p,container:h,disablePortal:v,keepMounted:b,modifiers:$,open:y,placement:x,popperOptions:w,popperRef:S,transition:P,slots:C,slotProps:T}=a,I=re(a,Ed),k=(r=C?.root)!=null?r:c?.Root,A=m({anchorEl:l,container:h,disablePortal:v,keepMounted:b,modifiers:$,open:y,placement:x,popperOptions:w,popperRef:S,transition:P},I);return R.jsx(Nd,m({as:d,direction:i?.direction,slots:{root:k},slotProps:T??p},A,{ref:n}))});function Ld(e){return pe("MuiListSubheader",e)}he("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const jd=["className","color","component","disableGutters","disableSticky","inset"],Bd=e=>{const{classes:o,color:n,disableGutters:r,inset:i,disableSticky:a}=e,l={root:["root",n!=="default"&&`color${O(n)}`,!r&&"gutters",i&&"inset",!a&&"sticky"]};return le(l,Ld,o)},Od=_("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.color!=="default"&&o[`color${O(n.color)}`],!n.disableGutters&&o.gutters,n.inset&&o.inset,!n.disableSticky&&o.sticky]}})(({theme:e,ownerState:o})=>m({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},o.color==="primary"&&{color:(e.vars||e).palette.primary.main},o.color==="inherit"&&{color:"inherit"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.inset&&{paddingLeft:72},!o.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})),ar=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiListSubheader"}),{className:i,color:a="default",component:l="li",disableGutters:d=!1,disableSticky:c=!1,inset:p=!1}=r,h=re(r,jd),v=m({},r,{color:a,component:l,disableGutters:d,disableSticky:c,inset:p}),b=Bd(v);return R.jsx(Od,m({as:l,className:Q(b.root,i),ref:n,ownerState:v},h))});ar.muiSkipListHighlight=!0;const Dd=Ie(R.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function Ud(e){return pe("MuiChip",e)}const Ce=he("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),zd=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],Fd=e=>{const{classes:o,disabled:n,size:r,color:i,iconColor:a,onDelete:l,clickable:d,variant:c}=e,p={root:["root",c,n&&"disabled",`size${O(r)}`,`color${O(i)}`,d&&"clickable",d&&`clickableColor${O(i)}`,l&&"deletable",l&&`deletableColor${O(i)}`,`${c}${O(i)}`],label:["label",`label${O(r)}`],avatar:["avatar",`avatar${O(r)}`,`avatarColor${O(i)}`],icon:["icon",`icon${O(r)}`,`iconColor${O(a)}`],deleteIcon:["deleteIcon",`deleteIcon${O(r)}`,`deleteIconColor${O(i)}`,`deleteIcon${O(c)}Color${O(i)}`]};return le(p,Ud,o)},_d=_("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e,{color:r,iconColor:i,clickable:a,onDelete:l,size:d,variant:c}=n;return[{[`& .${Ce.avatar}`]:o.avatar},{[`& .${Ce.avatar}`]:o[`avatar${O(d)}`]},{[`& .${Ce.avatar}`]:o[`avatarColor${O(r)}`]},{[`& .${Ce.icon}`]:o.icon},{[`& .${Ce.icon}`]:o[`icon${O(d)}`]},{[`& .${Ce.icon}`]:o[`iconColor${O(i)}`]},{[`& .${Ce.deleteIcon}`]:o.deleteIcon},{[`& .${Ce.deleteIcon}`]:o[`deleteIcon${O(d)}`]},{[`& .${Ce.deleteIcon}`]:o[`deleteIconColor${O(r)}`]},{[`& .${Ce.deleteIcon}`]:o[`deleteIcon${O(c)}Color${O(r)}`]},o.root,o[`size${O(d)}`],o[`color${O(r)}`],a&&o.clickable,a&&r!=="default"&&o[`clickableColor${O(r)})`],l&&o.deletable,l&&r!=="default"&&o[`deletableColor${O(r)}`],o[c],o[`${c}${O(r)}`]]}})(({theme:e,ownerState:o})=>{const n=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return m({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${Ce.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${Ce.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:n,fontSize:e.typography.pxToRem(12)},[`& .${Ce.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${Ce.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${Ce.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${Ce.icon}`]:m({marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&m({color:e.vars?e.vars.palette.Chip.defaultIconColor:n},o.color!=="default"&&{color:"inherit"})),[`& .${Ce.deleteIcon}`]:m({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:He(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:He(e.palette.text.primary,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[o.color].contrastTextChannel} / 0.7)`:He(e.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(e.vars||e).palette[o.color].main,color:(e.vars||e).palette[o.color].contrastText},o.onDelete&&{[`&.${Ce.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:He(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${Ce.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}})},({theme:e,ownerState:o})=>m({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:He(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${Ce.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:He(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${Ce.focusVisible}`]:{backgroundColor:(e.vars||e).palette[o.color].dark}}),({theme:e,ownerState:o})=>m({},o.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${Ce.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${Ce.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${Ce.avatar}`]:{marginLeft:4},[`& .${Ce.avatarSmall}`]:{marginLeft:2},[`& .${Ce.icon}`]:{marginLeft:4},[`& .${Ce.iconSmall}`]:{marginLeft:2},[`& .${Ce.deleteIcon}`]:{marginRight:5},[`& .${Ce.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(e.vars||e).palette[o.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:He(e.palette[o.color].main,.7)}`,[`&.${Ce.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:He(e.palette[o.color].main,e.palette.action.hoverOpacity)},[`&.${Ce.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:He(e.palette[o.color].main,e.palette.action.focusOpacity)},[`& .${Ce.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.7)`:He(e.palette[o.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[o.color].main}}})),Wd=_("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,o)=>{const{ownerState:n}=e,{size:r}=n;return[o.label,o[`label${O(r)}`]]}})(({ownerState:e})=>m({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.variant==="outlined"&&{paddingLeft:11,paddingRight:11},e.size==="small"&&{paddingLeft:8,paddingRight:8},e.size==="small"&&e.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function Qr(e){return e.key==="Backspace"||e.key==="Delete"}const Ee=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiChip"}),{avatar:i,className:a,clickable:l,color:d="default",component:c,deleteIcon:p,disabled:h=!1,icon:v,label:b,onClick:$,onDelete:y,onKeyDown:x,onKeyUp:w,size:S="medium",variant:P="filled",tabIndex:C,skipFocusWhenDisabled:T=!1}=r,I=re(r,zd),k=u.useRef(null),A=Tt(k,n),j=J=>{J.stopPropagation(),y&&y(J)},z=J=>{J.currentTarget===J.target&&Qr(J)&&J.preventDefault(),x&&x(J)},N=J=>{J.currentTarget===J.target&&(y&&Qr(J)?y(J):J.key==="Escape"&&k.current&&k.current.blur()),w&&w(J)},D=l!==!1&&$?!0:l,X=D||y?Gt:c||"div",B=m({},r,{component:X,disabled:h,size:S,color:d,iconColor:u.isValidElement(v)&&v.props.color||d,onDelete:!!y,clickable:D,variant:P}),L=Fd(B),F=X===Gt?m({component:c||"div",focusVisibleClassName:L.focusVisible},y&&{disableRipple:!0}):{};let W=null;y&&(W=p&&u.isValidElement(p)?u.cloneElement(p,{className:Q(p.props.className,L.deleteIcon),onClick:j}):R.jsx(Dd,{className:Q(L.deleteIcon),onClick:j}));let oe=null;i&&u.isValidElement(i)&&(oe=u.cloneElement(i,{className:Q(L.avatar,i.props.className)}));let ae=null;return v&&u.isValidElement(v)&&(ae=u.cloneElement(v,{className:Q(L.icon,v.props.className)})),R.jsxs(_d,m({as:X,className:Q(L.root,a),disabled:D&&h?!0:void 0,onClick:$,onKeyDown:z,onKeyUp:N,ref:A,tabIndex:T&&h?-1:C,ownerState:B},F,I,{children:[oe||ae,R.jsx(Wd,{className:Q(L.label),ownerState:B,children:b}),W]}))});function Hd(e){return pe("MuiBottomNavigation",e)}he("MuiBottomNavigation",["root"]);const qd=["children","className","component","onChange","showLabels","value"],Kd=e=>{const{classes:o}=e;return le({root:["root"]},Hd,o)},Gd=_("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(e.vars||e).palette.background.paper})),Jd=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiBottomNavigation"}),{children:i,className:a,component:l="div",onChange:d,showLabels:c=!1,value:p}=r,h=re(r,qd),v=m({},r,{component:l,showLabels:c}),b=Kd(v);return R.jsx(Gd,m({as:l,className:Q(b.root,a),ref:n,ownerState:v},h,{children:u.Children.map(i,($,y)=>{if(!u.isValidElement($))return null;const x=$.props.value===void 0?y:$.props.value;return u.cloneElement($,{selected:x===p,showLabel:$.props.showLabel!==void 0?$.props.showLabel:c,value:x,onChange:d})})}))});function Yd(e){return pe("MuiBottomNavigationAction",e)}const sa=he("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),Qd=["className","icon","label","onChange","onClick","selected","showLabel","value"],Xd=e=>{const{classes:o,showLabel:n,selected:r}=e;return le({root:["root",!n&&!r&&"iconOnly",r&&"selected"],label:["label",!n&&!r&&"iconOnly",r&&"selected"]},Yd,o)},Zd=_(Gt,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,!n.showLabel&&!n.selected&&o.iconOnly]}})(({theme:e,ownerState:o})=>m({transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(e.vars||e).palette.text.secondary,flexDirection:"column",flex:"1"},!o.showLabel&&!o.selected&&{paddingTop:14},!o.showLabel&&!o.selected&&!o.label&&{paddingTop:0},{[`&.${sa.selected}`]:{color:(e.vars||e).palette.primary.main}})),eu=_("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(e,o)=>o.label})(({theme:e,ownerState:o})=>m({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!o.showLabel&&!o.selected&&{opacity:0,transitionDelay:"0s"},{[`&.${sa.selected}`]:{fontSize:e.typography.pxToRem(14)}})),Xr=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiBottomNavigationAction"}),{className:i,icon:a,label:l,onChange:d,onClick:c,value:p}=r,h=re(r,Qd),v=r,b=Xd(v),$=y=>{d&&d(y,p),c&&c(y)};return R.jsxs(Zd,m({ref:n,className:Q(b.root,i),focusRipple:!0,onClick:$,ownerState:v},h,{children:[a,R.jsx(eu,{className:b.label,ownerState:v,children:l})]}))});function tu(e){return pe("MuiCard",e)}he("MuiCard",["root"]);const ou=["className","raised"],nu=e=>{const{classes:o}=e;return le({root:["root"]},tu,o)},ru=_(jn,{name:"MuiCard",slot:"Root",overridesResolver:(e,o)=>o.root})(()=>({overflow:"hidden"})),Sr=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiCard"}),{className:i,raised:a=!1}=r,l=re(r,ou),d=m({},r,{raised:a}),c=nu(d);return R.jsx(ru,m({className:Q(c.root,i),elevation:a?8:void 0,ref:n,ownerState:d},l))});function iu(e){return pe("PrivateSwitchBase",e)}he("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const su=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],au=e=>{const{classes:o,checked:n,disabled:r,edge:i}=e,a={root:["root",n&&"checked",r&&"disabled",i&&`edge${O(i)}`],input:["input"]};return le(a,iu,o)},lu=_(Gt)(({ownerState:e})=>m({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),cu=_("input",{shouldForwardProp:On})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),du=u.forwardRef(function(o,n){const{autoFocus:r,checked:i,checkedIcon:a,className:l,defaultChecked:d,disabled:c,disableFocusRipple:p=!1,edge:h=!1,icon:v,id:b,inputProps:$,inputRef:y,name:x,onBlur:w,onChange:S,onFocus:P,readOnly:C,required:T=!1,tabIndex:I,type:k,value:A}=o,j=re(o,su),[z,N]=Yo({controlled:i,default:!!d,name:"SwitchBase",state:"checked"}),D=Bn(),X=J=>{P&&P(J),D&&D.onFocus&&D.onFocus(J)},B=J=>{w&&w(J),D&&D.onBlur&&D.onBlur(J)},L=J=>{if(J.nativeEvent.defaultPrevented)return;const Le=J.target.checked;N(Le),S&&S(J,Le)};let F=c;D&&typeof F>"u"&&(F=D.disabled);const W=k==="checkbox"||k==="radio",oe=m({},o,{checked:z,disabled:F,disableFocusRipple:p,edge:h}),ae=au(oe);return R.jsxs(lu,m({component:"span",className:Q(ae.root,l),centerRipple:!0,focusRipple:!p,disabled:F,tabIndex:null,role:void 0,onFocus:X,onBlur:B,ownerState:oe,ref:n},j,{children:[R.jsx(cu,m({autoFocus:r,checked:i,defaultChecked:d,className:ae.input,disabled:F,id:W?b:void 0,name:x,onChange:L,readOnly:C,ref:y,required:T,ownerState:oe,tabIndex:I,type:k},k==="checkbox"&&A===void 0?{}:{value:A},$)),z?a:v]}))});function uu(e){return pe("MuiFab",e)}const Zr=he("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),pu=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],hu=e=>{const{color:o,variant:n,classes:r,size:i}=e,a={root:["root",n,`size${O(i)}`,o==="inherit"?"colorInherit":o]},l=le(a,uu,r);return m({},r,l)},mu=_(Gt,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>On(e)||e==="classes",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`size${O(n.size)}`],n.color==="inherit"&&o.colorInherit,o[O(n.size)],o[n.color]]}})(({theme:e,ownerState:o})=>{var n,r;return m({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:(n=(r=e.palette).getContrastText)==null?void 0:n.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${Zr.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},o.size==="small"&&{width:40,height:40},o.size==="medium"&&{width:48,height:48},o.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},o.variant==="extended"&&o.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},o.variant==="extended"&&o.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},o.color==="inherit"&&{color:"inherit"})},({theme:e,ownerState:o})=>m({},o.color!=="inherit"&&o.color!=="default"&&(e.vars||e).palette[o.color]!=null&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}}),({theme:e})=>({[`&.${Zr.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),aa=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiFab"}),{children:i,className:a,color:l="default",component:d="button",disabled:c=!1,disableFocusRipple:p=!1,focusVisibleClassName:h,size:v="large",variant:b="circular"}=r,$=re(r,pu),y=m({},r,{color:l,component:d,disabled:c,disableFocusRipple:p,size:v,variant:b}),x=hu(y);return R.jsx(mu,m({className:Q(x.root,a),component:d,disabled:c,focusRipple:!p,focusVisibleClassName:Q(x.focusVisible,h),ownerState:y,ref:n},$,{classes:x,children:i}))});function fu(e){return pe("MuiFormControl",e)}he("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const gu=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],vu=e=>{const{classes:o,margin:n,fullWidth:r}=e,i={root:["root",n!=="none"&&`margin${O(n)}`,r&&"fullWidth"]};return le(i,fu,o)},bu=_("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},o)=>m({},o.root,o[`margin${O(e.margin)}`],e.fullWidth&&o.fullWidth)})(({ownerState:e})=>m({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),la=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiFormControl"}),{children:i,className:a,color:l="primary",component:d="div",disabled:c=!1,error:p=!1,focused:h,fullWidth:v=!1,hiddenLabel:b=!1,margin:$="none",required:y=!1,size:x="medium",variant:w="outlined"}=r,S=re(r,gu),P=m({},r,{color:l,component:d,disabled:c,error:p,fullWidth:v,hiddenLabel:b,margin:$,required:y,size:x,variant:w}),C=vu(P),[T,I]=u.useState(()=>{let B=!1;return i&&u.Children.forEach(i,L=>{if(!vo(L,["Input","Select"]))return;const F=vo(L,["Select"])?L.props.input:L;F&&Qa(F.props)&&(B=!0)}),B}),[k,A]=u.useState(()=>{let B=!1;return i&&u.Children.forEach(i,L=>{vo(L,["Input","Select"])&&(Ar(L.props,!0)||Ar(L.props.inputProps,!0))&&(B=!0)}),B}),[j,z]=u.useState(!1);c&&j&&z(!1);const N=h!==void 0&&!c?h:j;let D;const X=u.useMemo(()=>({adornedStart:T,setAdornedStart:I,color:l,disabled:c,error:p,filled:k,focused:N,fullWidth:v,hiddenLabel:b,size:x,onBlur:()=>{z(!1)},onEmpty:()=>{A(!1)},onFilled:()=>{A(!0)},onFocus:()=>{z(!0)},registerEffect:D,required:y,variant:w}),[T,l,c,p,k,N,v,b,D,y,x,w]);return R.jsx(Xa.Provider,{value:X,children:R.jsx(bu,m({as:d,ownerState:P,className:Q(C.root,a),ref:n},S,{children:i}))})}),yu=Il({createStyledComponent:_("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>de({props:e,name:"MuiStack"})});function xu(e){return pe("MuiFormHelperText",e)}const ei=he("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var ti;const $u=["children","className","component","disabled","error","filled","focused","margin","required","variant"],wu=e=>{const{classes:o,contained:n,size:r,disabled:i,error:a,filled:l,focused:d,required:c}=e,p={root:["root",i&&"disabled",a&&"error",r&&`size${O(r)}`,n&&"contained",d&&"focused",l&&"filled",c&&"required"]};return le(p,xu,o)},ku=_("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.size&&o[`size${O(n.size)}`],n.contained&&o.contained,n.filled&&o.filled]}})(({theme:e,ownerState:o})=>m({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${ei.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${ei.error}`]:{color:(e.vars||e).palette.error.main}},o.size==="small"&&{marginTop:4},o.contained&&{marginLeft:14,marginRight:14})),Cu=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiFormHelperText"}),{children:i,className:a,component:l="p"}=r,d=re(r,$u),c=Bn(),p=fr({props:r,muiFormControl:c,states:["variant","size","disabled","error","filled","focused","required"]}),h=m({},r,{component:l,contained:p.variant==="filled"||p.variant==="outlined",variant:p.variant,size:p.size,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),v=wu(h);return R.jsx(ku,m({as:l,ownerState:h,className:Q(v.root,a),ref:n},d,{children:i===" "?ti||(ti=R.jsx("span",{className:"notranslate",children:"​"})):i}))});function Tu(e){return pe("MuiFormLabel",e)}const Wo=he("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Ru=["children","className","color","component","disabled","error","filled","focused","required"],Su=e=>{const{classes:o,color:n,focused:r,disabled:i,error:a,filled:l,required:d}=e,c={root:["root",`color${O(n)}`,i&&"disabled",a&&"error",l&&"filled",r&&"focused",d&&"required"],asterisk:["asterisk",a&&"error"]};return le(c,Tu,o)},Mu=_("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},o)=>m({},o.root,e.color==="secondary"&&o.colorSecondary,e.filled&&o.filled)})(({theme:e,ownerState:o})=>m({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Wo.focused}`]:{color:(e.vars||e).palette[o.color].main},[`&.${Wo.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Wo.error}`]:{color:(e.vars||e).palette.error.main}})),Pu=_("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${Wo.error}`]:{color:(e.vars||e).palette.error.main}})),Vu=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiFormLabel"}),{children:i,className:a,component:l="label"}=r,d=re(r,Ru),c=Bn(),p=fr({props:r,muiFormControl:c,states:["color","required","focused","disabled","error","filled"]}),h=m({},r,{color:p.color||"primary",component:l,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),v=Su(h);return R.jsxs(Mu,m({as:l,ownerState:h,className:Q(v.root,a),ref:n},d,{children:[i,p.required&&R.jsxs(Pu,{ownerState:h,"aria-hidden":!0,className:v.asterisk,children:[" ","*"]})]}))});function Iu(e){return pe("MuiInputLabel",e)}he("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const Au=["disableAnimation","margin","shrink","variant","className"],Eu=e=>{const{classes:o,formControl:n,size:r,shrink:i,disableAnimation:a,variant:l,required:d}=e,c={root:["root",n&&"formControl",!a&&"animated",i&&"shrink",r&&r!=="normal"&&`size${O(r)}`,l],asterisk:[d&&"asterisk"]},p=le(c,Iu,o);return m({},o,p)},Nu=_(Vu,{shouldForwardProp:e=>On(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${Wo.asterisk}`]:o.asterisk},o.root,n.formControl&&o.formControl,n.size==="small"&&o.sizeSmall,n.shrink&&o.shrink,!n.disableAnimation&&o.animated,n.focused&&o.focused,o[n.variant]]}})(({theme:e,ownerState:o})=>m({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},o.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},o.size==="small"&&{transform:"translate(0, 17px) scale(1)"},o.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!o.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},o.variant==="filled"&&m({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},o.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},o.shrink&&m({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},o.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),o.variant==="outlined"&&m({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},o.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},o.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),ca=u.forwardRef(function(o,n){const r=de({name:"MuiInputLabel",props:o}),{disableAnimation:i=!1,shrink:a,className:l}=r,d=re(r,Au),c=Bn();let p=a;typeof p>"u"&&c&&(p=c.filled||c.focused||c.adornedStart);const h=fr({props:r,muiFormControl:c,states:["size","variant","required","focused"]}),v=m({},r,{disableAnimation:i,formControl:c,shrink:p,size:h.size,variant:h.variant,required:h.required,focused:h.focused}),b=Eu(v);return R.jsx(Nu,m({"data-shrink":p,ownerState:v,ref:n,className:Q(b.root,l)},d,{classes:b}))});function Lu(e){return pe("MuiListItemButton",e)}const Io=he("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),ju=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Bu=(e,o)=>{const{ownerState:n}=e;return[o.root,n.dense&&o.dense,n.alignItems==="flex-start"&&o.alignItemsFlexStart,n.divider&&o.divider,!n.disableGutters&&o.gutters]},Ou=e=>{const{alignItems:o,classes:n,dense:r,disabled:i,disableGutters:a,divider:l,selected:d}=e,p=le({root:["root",r&&"dense",!a&&"gutters",l&&"divider",i&&"disabled",o==="flex-start"&&"alignItemsFlexStart",d&&"selected"]},Lu,n);return m({},n,p)},Du=_(Gt,{shouldForwardProp:e=>On(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Bu})(({theme:e,ownerState:o})=>m({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Io.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:He(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Io.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:He(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Io.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:He(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:He(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Io.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Io.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},o.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},o.alignItems==="flex-start"&&{alignItems:"flex-start"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.dense&&{paddingTop:4,paddingBottom:4})),ze=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:a=!1,component:l="div",children:d,dense:c=!1,disableGutters:p=!1,divider:h=!1,focusVisibleClassName:v,selected:b=!1,className:$}=r,y=re(r,ju),x=u.useContext(Mn),w=u.useMemo(()=>({dense:c||x.dense||!1,alignItems:i,disableGutters:p}),[i,x.dense,c,p]),S=u.useRef(null);bo(()=>{a&&S.current&&S.current.focus()},[a]);const P=m({},r,{alignItems:i,dense:w.dense,disableGutters:p,divider:h,selected:b}),C=Ou(P),T=Tt(S,n);return R.jsx(Mn.Provider,{value:w,children:R.jsx(Du,m({ref:T,href:y.href||y.to,component:(y.href||y.to)&&l==="div"?"button":l,focusVisibleClassName:Q(C.focusVisible,v),ownerState:P,className:Q(C.root,$)},y,{classes:C,children:d}))})}),Uu=["className"],zu=e=>{const{alignItems:o,classes:n}=e;return le({root:["root",o==="flex-start"&&"alignItemsFlexStart"]},Za,n)},Fu=_("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.alignItems==="flex-start"&&o.alignItemsFlexStart]}})(({theme:e,ownerState:o})=>m({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},o.alignItems==="flex-start"&&{marginTop:8})),Fe=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiListItemIcon"}),{className:i}=r,a=re(r,Uu),l=u.useContext(Mn),d=m({},r,{alignItems:l.alignItems}),c=zu(d);return R.jsx(Fu,m({className:Q(c.root,i),ownerState:d,ref:n},a))}),_u=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Wu=e=>{const{classes:o,inset:n,primary:r,secondary:i,dense:a}=e;return le({root:["root",n&&"inset",a&&"dense",r&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},el,o)},Hu=_("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${Er.primary}`]:o.primary},{[`& .${Er.secondary}`]:o.secondary},o.root,n.inset&&o.inset,n.primary&&n.secondary&&o.multiline,n.dense&&o.dense]}})(({ownerState:e})=>m({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),_e=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiListItemText"}),{children:i,className:a,disableTypography:l=!1,inset:d=!1,primary:c,primaryTypographyProps:p,secondary:h,secondaryTypographyProps:v}=r,b=re(r,_u),{dense:$}=u.useContext(Mn);let y=c??i,x=h;const w=m({},r,{disableTypography:l,inset:d,primary:!!y,secondary:!!x,dense:$}),S=Wu(w);return y!=null&&y.type!==bt&&!l&&(y=R.jsx(bt,m({variant:$?"body2":"body1",className:S.primary,component:p!=null&&p.variant?void 0:"span",display:"block"},p,{children:y}))),x!=null&&x.type!==bt&&!l&&(x=R.jsx(bt,m({variant:"body2",className:S.secondary,color:"text.secondary",display:"block"},v,{children:x}))),R.jsxs(Hu,m({className:Q(S.root,a),ownerState:w,ref:n},b,{children:[y,x]}))}),qu=e=>!e||!Tn(e);function Ku(e){return pe("MuiSlider",e)}const It=he("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),Gu=e=>{const{open:o}=e;return{offset:Q(o&&It.valueLabelOpen),circle:It.valueLabelCircle,label:It.valueLabelLabel}};function Ju(e){const{children:o,className:n,value:r}=e,i=Gu(e);return o?u.cloneElement(o,{className:Q(o.props.className)},R.jsxs(u.Fragment,{children:[o.props.children,R.jsx("span",{className:Q(i.offset,n),"aria-hidden":!0,children:R.jsx("span",{className:i.circle,children:R.jsx("span",{className:i.label,children:r})})})]})):null}const Yu=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function oi(e){return e}const Qu=_("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`color${O(n.color)}`],n.size!=="medium"&&o[`size${O(n.size)}`],n.marked&&o.marked,n.orientation==="vertical"&&o.vertical,n.track==="inverted"&&o.trackInverted,n.track===!1&&o.trackFalse]}})(({theme:e,ownerState:o})=>m({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[o.color].main,WebkitTapHighlightColor:"transparent"},o.orientation==="horizontal"&&m({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},o.size==="small"&&{height:2},o.marked&&{marginBottom:20}),o.orientation==="vertical"&&m({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},o.size==="small"&&{width:2},o.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${It.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${It.dragging}`]:{[`& .${It.thumb}, & .${It.track}`]:{transition:"none"}}})),Xu=_("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,o)=>o.rail})(({ownerState:e})=>m({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),Zu=_("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,o)=>o.track})(({theme:e,ownerState:o})=>{const n=e.palette.mode==="light"?qo(e.palette[o.color].main,.62):Ho(e.palette[o.color].main,.5);return m({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},o.size==="small"&&{border:"none"},o.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},o.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},o.track===!1&&{display:"none"},o.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${o.color}Track`]:n,borderColor:e.vars?e.vars.palette.Slider[`${o.color}Track`]:n})}),ep=_("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.thumb,o[`thumbColor${O(n.color)}`],n.size!=="medium"&&o[`thumbSize${O(n.size)}`]]}})(({theme:e,ownerState:o})=>m({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},o.size==="small"&&{width:12,height:12},o.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},o.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":m({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},o.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${It.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.16)`:He(e.palette[o.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${It.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / 0.16)`:He(e.palette[o.color].main,.16)}`},[`&.${It.disabled}`]:{"&:hover":{boxShadow:"none"}}})),tp=_(Ju,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,o)=>o.valueLabel})(({theme:e,ownerState:o})=>m({[`&.${It.valueLabelOpen}`]:{transform:`${o.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(1)`},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:`${o.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(0)`,position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},o.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},o.orientation==="vertical"&&{right:o.size==="small"?"20px":"30px",top:"50%",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},o.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),op=_("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Ds(e)&&e!=="markActive",overridesResolver:(e,o)=>{const{markActive:n}=e;return[o.mark,n&&o.markActive]}})(({theme:e,ownerState:o,markActive:n})=>m({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},o.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},o.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},n&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),np=_("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Ds(e)&&e!=="markLabelActive",overridesResolver:(e,o)=>o.markLabel})(({theme:e,ownerState:o,markLabelActive:n})=>m({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},o.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},o.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},n&&{color:(e.vars||e).palette.text.primary})),rp=e=>{const{disabled:o,dragging:n,marked:r,orientation:i,track:a,classes:l,color:d,size:c}=e,p={root:["root",o&&"disabled",n&&"dragging",r&&"marked",i==="vertical"&&"vertical",a==="inverted"&&"trackInverted",a===!1&&"trackFalse",d&&`color${O(d)}`,c&&`size${O(c)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",o&&"disabled",c&&`thumbSize${O(c)}`,d&&`thumbColor${O(d)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return le(p,Ku,l)},ip=({children:e})=>e,ni=u.forwardRef(function(o,n){var r,i,a,l,d,c,p,h,v,b,$,y,x,w,S,P,C,T,I,k,A,j,z,N;const D=de({props:o,name:"MuiSlider"}),B=Jt().direction==="rtl",{"aria-label":L,"aria-valuetext":F,"aria-labelledby":W,component:oe="span",components:ae={},componentsProps:J={},color:Le="primary",classes:je,className:qe,disableSwap:$e=!1,disabled:Re=!1,getAriaLabel:Ae,getAriaValueText:ee,marks:ke=!1,max:H=100,min:ue=0,orientation:Te="horizontal",size:De="medium",step:Ze=1,scale:Ye=oi,slotProps:Se,slots:ye,track:it="normal",valueLabelDisplay:Je="off",valueLabelFormat:Ke=oi}=D,Mt=re(D,Yu),we=m({},D,{isRtl:B,max:H,min:ue,classes:je,disabled:Re,disableSwap:$e,orientation:Te,marks:ke,color:Le,size:De,step:Ze,scale:Ye,track:it,valueLabelDisplay:Je,valueLabelFormat:Ke}),{axisProps:ot,getRootProps:mt,getHiddenInputProps:xt,getThumbProps:ft,open:U,active:K,axis:ne,focusedThumbIndex:ce,range:Be,dragging:Ue,marks:fe,values:Me,trackOffset:Oe,trackLeap:nt,getThumbStyle:q}=Id(m({},we,{rootRef:n}));we.marked=fe.length>0&&fe.some(Ge=>Ge.label),we.dragging=Ue,we.focusedThumbIndex=ce;const G=rp(we),ge=(r=(i=ye?.root)!=null?i:ae.Root)!=null?r:Qu,me=(a=(l=ye?.rail)!=null?l:ae.Rail)!=null?a:Xu,We=(d=(c=ye?.track)!=null?c:ae.Track)!=null?d:Zu,Qe=(p=(h=ye?.thumb)!=null?h:ae.Thumb)!=null?p:ep,st=(v=(b=ye?.valueLabel)!=null?b:ae.ValueLabel)!=null?v:tp,$t=($=(y=ye?.mark)!=null?y:ae.Mark)!=null?$:op,at=(x=(w=ye?.markLabel)!=null?w:ae.MarkLabel)!=null?x:np,Ut=(S=(P=ye?.input)!=null?P:ae.Input)!=null?S:"input",co=(C=Se?.root)!=null?C:J.root,ln=(T=Se?.rail)!=null?T:J.rail,uo=(I=Se?.track)!=null?I:J.track,To=(k=Se?.thumb)!=null?k:J.thumb,Ro=(A=Se?.valueLabel)!=null?A:J.valueLabel,Wn=(j=Se?.mark)!=null?j:J.mark,So=(z=Se?.markLabel)!=null?z:J.markLabel,Hn=(N=Se?.input)!=null?N:J.input,Xt=ut({elementType:ge,getSlotProps:mt,externalSlotProps:co,externalForwardedProps:Mt,additionalProps:m({},qu(ge)&&{as:oe}),ownerState:m({},we,co?.ownerState),className:[G.root,qe]}),Mo=ut({elementType:me,externalSlotProps:ln,ownerState:we,className:G.rail}),gt=ut({elementType:We,externalSlotProps:uo,additionalProps:{style:m({},ot[ne].offset(Oe),ot[ne].leap(nt))},ownerState:m({},we,uo?.ownerState),className:G.track}),zt=ut({elementType:Qe,getSlotProps:ft,externalSlotProps:To,ownerState:m({},we,To?.ownerState),className:G.thumb}),qn=ut({elementType:st,externalSlotProps:Ro,ownerState:m({},we,Ro?.ownerState),className:G.valueLabel}),Ft=ut({elementType:$t,externalSlotProps:Wn,ownerState:we,className:G.mark}),Zt=ut({elementType:at,externalSlotProps:So,ownerState:we,className:G.markLabel}),cn=ut({elementType:Ut,getSlotProps:xt,externalSlotProps:Hn,ownerState:we});return R.jsxs(ge,m({},Xt,{children:[R.jsx(me,m({},Mo)),R.jsx(We,m({},gt)),fe.filter(Ge=>Ge.value>=ue&&Ge.value<=H).map((Ge,Xe)=>{const po=In(Ge.value,ue,H),ho=ot[ne].offset(po);let Pt;return it===!1?Pt=Me.indexOf(Ge.value)!==-1:Pt=it==="normal"&&(Be?Ge.value>=Me[0]&&Ge.value<=Me[Me.length-1]:Ge.value<=Me[0])||it==="inverted"&&(Be?Ge.value<=Me[0]||Ge.value>=Me[Me.length-1]:Ge.value>=Me[0]),R.jsxs(u.Fragment,{children:[R.jsx($t,m({"data-index":Xe},Ft,!Tn($t)&&{markActive:Pt},{style:m({},ho,Ft.style),className:Q(Ft.className,Pt&&G.markActive)})),Ge.label!=null?R.jsx(at,m({"aria-hidden":!0,"data-index":Xe},Zt,!Tn(at)&&{markLabelActive:Pt},{style:m({},ho,Zt.style),className:Q(G.markLabel,Zt.className,Pt&&G.markLabelActive),children:Ge.label})):null]},Xe)}),Me.map((Ge,Xe)=>{const po=In(Ge,ue,H),ho=ot[ne].offset(po),Pt=Je==="off"?ip:st;return R.jsx(Pt,m({},!Tn(Pt)&&{valueLabelFormat:Ke,valueLabelDisplay:Je,value:typeof Ke=="function"?Ke(Ye(Ge),Xe):Ke,index:Xe,open:U===Xe||K===Xe||Je==="on",disabled:Re},qn,{children:R.jsx(Qe,m({"data-index":Xe},zt,{className:Q(G.thumb,zt.className,K===Xe&&G.active,ce===Xe&&G.focusVisible),style:m({},ho,q(Xe),zt.style),children:R.jsx(Ut,m({"data-index":Xe,"aria-label":Ae?Ae(Xe):L,"aria-valuenow":Ye(Ge),"aria-labelledby":W,"aria-valuetext":ee?ee(Ye(Ge),Xe):F,value:Me[Xe]},cn))}))}),Xe)})]}))});function sp(e){return pe("MuiSnackbarContent",e)}he("MuiSnackbarContent",["root","message","action"]);const ap=["action","className","message","role"],lp=e=>{const{classes:o}=e;return le({root:["root"],action:["action"],message:["message"]},sp,o)},cp=_(jn,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>{const o=e.palette.mode==="light"?.8:.98,n=Us(e.palette.background.default,o);return m({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(n),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),dp=_("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0"}),up=_("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),pp=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiSnackbarContent"}),{action:i,className:a,message:l,role:d="alert"}=r,c=re(r,ap),p=r,h=lp(p);return R.jsxs(cp,m({role:d,square:!0,elevation:6,className:Q(h.root,a),ownerState:p,ref:n},c,{children:[R.jsx(dp,{className:h.message,ownerState:p,children:l}),i?R.jsx(up,{className:h.action,ownerState:p,children:i}):null]}))});function hp(e){return pe("MuiSnackbar",e)}he("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const mp=["onEnter","onExited"],fp=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],gp=e=>{const{classes:o,anchorOrigin:n}=e,r={root:["root",`anchorOrigin${O(n.vertical)}${O(n.horizontal)}`]};return le(r,hp,o)},ri=_("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`anchorOrigin${O(n.anchorOrigin.vertical)}${O(n.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:o})=>{const n={left:"50%",right:"auto",transform:"translateX(-50%)"};return m({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},o.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},o.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},o.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:m({},o.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},o.anchorOrigin.horizontal==="center"&&n,o.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},o.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),vp=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiSnackbar"}),i=Jt(),a={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:l,anchorOrigin:{vertical:d,horizontal:c}={vertical:"bottom",horizontal:"left"},autoHideDuration:p=null,children:h,className:v,ClickAwayListenerProps:b,ContentProps:$,disableWindowBlurListener:y=!1,message:x,open:w,TransitionComponent:S=nr,transitionDuration:P=a,TransitionProps:{onEnter:C,onExited:T}={}}=r,I=re(r.TransitionProps,mp),k=re(r,fp),A=m({},r,{anchorOrigin:{vertical:d,horizontal:c},autoHideDuration:p,disableWindowBlurListener:y,TransitionComponent:S,transitionDuration:P}),j=gp(A),{getRootProps:z,onClickAway:N}=Ad(m({},A)),[D,X]=u.useState(!0),B=ut({elementType:ri,getSlotProps:z,externalForwardedProps:k,ownerState:A,additionalProps:{ref:n},className:[j.root,v]}),L=W=>{X(!0),T&&T(W)},F=(W,oe)=>{X(!1),C&&C(W,oe)};return!w&&D?null:R.jsx(cc,m({onClickAway:N},b,{children:R.jsx(ri,m({},B,{children:R.jsx(S,m({appear:!0,in:w,timeout:P,direction:d==="top"?"down":"up",onEnter:F,onExited:L},I,{children:h||R.jsx(pp,m({message:x,action:l},$))}))}))}))}),bp=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],yp={entering:{transform:"none"},entered:{transform:"none"}},xp=u.forwardRef(function(o,n){const r=Jt(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:a,appear:l=!0,children:d,easing:c,in:p,onEnter:h,onEntered:v,onEntering:b,onExit:$,onExited:y,onExiting:x,style:w,timeout:S=i,TransitionComponent:P=Os}=o,C=re(o,bp),T=u.useRef(null),I=Tt(T,d.ref,n),k=L=>F=>{if(L){const W=T.current;F===void 0?L(W):L(W,F)}},A=k(b),j=k((L,F)=>{tl(L);const W=Sn({style:w,timeout:S,easing:c},{mode:"enter"});L.style.webkitTransition=r.transitions.create("transform",W),L.style.transition=r.transitions.create("transform",W),h&&h(L,F)}),z=k(v),N=k(x),D=k(L=>{const F=Sn({style:w,timeout:S,easing:c},{mode:"exit"});L.style.webkitTransition=r.transitions.create("transform",F),L.style.transition=r.transitions.create("transform",F),$&&$(L)}),X=k(y),B=L=>{a&&a(T.current,L)};return R.jsx(P,m({appear:l,in:p,nodeRef:T,onEnter:j,onEntered:z,onEntering:A,onExit:D,onExited:X,onExiting:N,addEndListener:B,timeout:S},C,{children:(L,F)=>u.cloneElement(d,m({style:m({transform:"scale(0)",visibility:L==="exited"&&!p?"hidden":void 0},yp[L],w,d.props.style),ref:I},F))}))});function $p(e){return pe("MuiSpeedDial",e)}const bn=he("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),wp=["ref"],kp=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],Cp=["ref"],Tp=e=>{const{classes:o,open:n,direction:r}=e,i={root:["root",`direction${O(r)}`],fab:["fab"],actions:["actions",!n&&"actionsClosed"]};return le(i,$p,o)};function Ao(e){if(e==="up"||e==="down")return"vertical";if(e==="right"||e==="left")return"horizontal"}function Rp(e,o,n){return e<o?o:e>n?n:e}const qt=32,yn=16,Sp=_("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`direction${O(n.direction)}`]]}})(({theme:e,ownerState:o})=>m({zIndex:(e.vars||e).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},o.direction==="up"&&{flexDirection:"column-reverse",[`& .${bn.actions}`]:{flexDirection:"column-reverse",marginBottom:-qt,paddingBottom:yn+qt}},o.direction==="down"&&{flexDirection:"column",[`& .${bn.actions}`]:{flexDirection:"column",marginTop:-qt,paddingTop:yn+qt}},o.direction==="left"&&{flexDirection:"row-reverse",[`& .${bn.actions}`]:{flexDirection:"row-reverse",marginRight:-qt,paddingRight:yn+qt}},o.direction==="right"&&{flexDirection:"row",[`& .${bn.actions}`]:{flexDirection:"row",marginLeft:-qt,paddingLeft:yn+qt}})),Mp=_(aa,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(e,o)=>o.fab})(()=>({pointerEvents:"auto"})),Pp=_("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.actions,!n.open&&o.actionsClosed]}})(({ownerState:e})=>m({display:"flex",pointerEvents:"auto"},!e.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})),Vp=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiSpeedDial"}),i=Jt(),a={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{ariaLabel:l,FabProps:{ref:d}={},children:c,className:p,direction:h="up",hidden:v=!1,icon:b,onBlur:$,onClose:y,onFocus:x,onKeyDown:w,onMouseEnter:S,onMouseLeave:P,onOpen:C,open:T,TransitionComponent:I=xp,transitionDuration:k=a,TransitionProps:A}=r,j=re(r.FabProps,wp),z=re(r,kp),[N,D]=Yo({controlled:T,default:!1,name:"SpeedDial",state:"open"}),X=m({},r,{open:N,direction:h}),B=Tp(X),L=u.useRef();u.useEffect(()=>()=>{clearTimeout(L.current)},[]);const F=u.useRef(0),W=u.useRef(),oe=u.useRef([]);oe.current=[oe.current[0]];const ae=u.useCallback(H=>{oe.current[0]=H},[]),J=Tt(d,ae),Le=(H,ue)=>Te=>{oe.current[H+1]=Te,ue&&ue(Te)},je=H=>{w&&w(H);const ue=H.key.replace("Arrow","").toLowerCase(),{current:Te=ue}=W;if(H.key==="Escape"){D(!1),oe.current[0].focus(),y&&y(H,"escapeKeyDown");return}if(Ao(ue)===Ao(Te)&&Ao(ue)!==void 0){H.preventDefault();const De=ue===Te?1:-1,Ze=Rp(F.current+De,0,oe.current.length-1);oe.current[Ze].focus(),F.current=Ze,W.current=Te}};u.useEffect(()=>{N||(F.current=0,W.current=void 0)},[N]);const qe=H=>{H.type==="mouseleave"&&P&&P(H),H.type==="blur"&&$&&$(H),clearTimeout(L.current),H.type==="blur"?L.current=setTimeout(()=>{D(!1),y&&y(H,"blur")}):(D(!1),y&&y(H,"mouseLeave"))},$e=H=>{j.onClick&&j.onClick(H),clearTimeout(L.current),N?(D(!1),y&&y(H,"toggle")):(D(!0),C&&C(H,"toggle"))},Re=H=>{H.type==="mouseenter"&&S&&S(H),H.type==="focus"&&x&&x(H),clearTimeout(L.current),N||(L.current=setTimeout(()=>{D(!0),C&&C(H,{focus:"focus",mouseenter:"mouseEnter"}[H.type])}))},Ae=l.replace(/^[^a-z]+|[^\w:.-]+/gi,""),ee=u.Children.toArray(c).filter(H=>u.isValidElement(H)),ke=ee.map((H,ue)=>{const Te=H.props,{FabProps:{ref:De}={},tooltipPlacement:Ze}=Te,Ye=re(Te.FabProps,Cp),Se=Ze||(Ao(h)==="vertical"?"left":"top");return u.cloneElement(H,{FabProps:m({},Ye,{ref:Le(ue,De)}),delay:30*(N?ue:ee.length-ue),open:N,tooltipPlacement:Se,id:`${Ae}-action-${ue}`})});return R.jsxs(Sp,m({className:Q(B.root,p),ref:n,role:"presentation",onKeyDown:je,onBlur:qe,onFocus:Re,onMouseEnter:Re,onMouseLeave:qe,ownerState:X},z,{children:[R.jsx(I,m({in:!v,timeout:k,unmountOnExit:!0},A,{children:R.jsx(Mp,m({color:"primary","aria-label":l,"aria-haspopup":"true","aria-expanded":N,"aria-controls":`${Ae}-actions`},j,{onClick:$e,className:Q(B.fab,j.className),ref:J,ownerState:X,children:u.isValidElement(b)&&vo(b,["SpeedDialIcon"])?u.cloneElement(b,{open:N}):b}))})),R.jsx(Pp,{id:`${Ae}-actions`,role:"menu","aria-orientation":Ao(h),className:Q(B.actions,!N&&B.actionsClosed),ownerState:X,children:ke})]}))});function Ip(e){return pe("MuiTooltip",e)}const Kt=he("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Ap=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Ep(e){return Math.round(e*1e5)/1e5}const Np=e=>{const{classes:o,disableInteractive:n,arrow:r,touch:i,placement:a}=e,l={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",i&&"touch",`tooltipPlacement${O(a.split("-")[0])}`],arrow:["arrow"]};return le(l,Ip,o)},Lp=_(ia,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.popper,!n.disableInteractive&&o.popperInteractive,n.arrow&&o.popperArrow,!n.open&&o.popperClose]}})(({theme:e,ownerState:o,open:n})=>m({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${Kt.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Kt.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Kt.arrow}`]:m({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${Kt.arrow}`]:m({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),jp=_("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.tooltip,n.touch&&o.touch,n.arrow&&o.tooltipArrow,o[`tooltipPlacement${O(n.placement.split("-")[0])}`]]}})(({theme:e,ownerState:o})=>m({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:He(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Ep(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${Kt.popper}[data-popper-placement*="left"] &`]:m({transformOrigin:"right center"},o.isRtl?m({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):m({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${Kt.popper}[data-popper-placement*="right"] &`]:m({transformOrigin:"left center"},o.isRtl?m({marginRight:"14px"},o.touch&&{marginRight:"24px"}):m({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${Kt.popper}[data-popper-placement*="top"] &`]:m({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${Kt.popper}[data-popper-placement*="bottom"] &`]:m({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),Bp=_("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,o)=>o.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:He(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let xn=!1,Jn=null,Eo={x:0,y:0};function $n(e,o){return n=>{o&&o(n),e(n)}}const Op=u.forwardRef(function(o,n){var r,i,a,l,d,c,p,h,v,b,$,y,x,w,S,P,C,T,I;const k=de({props:o,name:"MuiTooltip"}),{arrow:A=!1,children:j,components:z={},componentsProps:N={},describeChild:D=!1,disableFocusListener:X=!1,disableHoverListener:B=!1,disableInteractive:L=!1,disableTouchListener:F=!1,enterDelay:W=100,enterNextDelay:oe=0,enterTouchDelay:ae=700,followCursor:J=!1,id:Le,leaveDelay:je=0,leaveTouchDelay:qe=1500,onClose:$e,onOpen:Re,open:Ae,placement:ee="bottom",PopperComponent:ke,PopperProps:H={},slotProps:ue={},slots:Te={},title:De,TransitionComponent:Ze=nr,TransitionProps:Ye}=k,Se=re(k,Ap),ye=u.isValidElement(j)?j:R.jsx("span",{children:j}),it=Jt(),Je=it.direction==="rtl",[Ke,Mt]=u.useState(),[we,ot]=u.useState(null),mt=u.useRef(!1),xt=L||J,ft=u.useRef(),U=u.useRef(),K=u.useRef(),ne=u.useRef(),[ce,Be]=Yo({controlled:Ae,default:!1,name:"Tooltip",state:"open"});let Ue=ce;const fe=hr(Le),Me=u.useRef(),Oe=u.useCallback(()=>{Me.current!==void 0&&(document.body.style.WebkitUserSelect=Me.current,Me.current=void 0),clearTimeout(ne.current)},[]);u.useEffect(()=>()=>{clearTimeout(ft.current),clearTimeout(U.current),clearTimeout(K.current),Oe()},[Oe]);const nt=ve=>{clearTimeout(Jn),xn=!0,Be(!0),Re&&!Ue&&Re(ve)},q=Et(ve=>{clearTimeout(Jn),Jn=setTimeout(()=>{xn=!1},800+je),Be(!1),$e&&Ue&&$e(ve),clearTimeout(ft.current),ft.current=setTimeout(()=>{mt.current=!1},it.transitions.duration.shortest)}),G=ve=>{mt.current&&ve.type!=="touchstart"||(Ke&&Ke.removeAttribute("title"),clearTimeout(U.current),clearTimeout(K.current),W||xn&&oe?U.current=setTimeout(()=>{nt(ve)},xn?oe:W):nt(ve))},ge=ve=>{clearTimeout(U.current),clearTimeout(K.current),K.current=setTimeout(()=>{q(ve)},je)},{isFocusVisibleRef:me,onBlur:We,onFocus:Qe,ref:st}=mr(),[,$t]=u.useState(!1),at=ve=>{We(ve),me.current===!1&&($t(!1),ge(ve))},Ut=ve=>{Ke||Mt(ve.currentTarget),Qe(ve),me.current===!0&&($t(!0),G(ve))},co=ve=>{mt.current=!0;const vt=ye.props;vt.onTouchStart&&vt.onTouchStart(ve)},ln=G,uo=ge,To=ve=>{co(ve),clearTimeout(K.current),clearTimeout(ft.current),Oe(),Me.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ne.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Me.current,G(ve)},ae)},Ro=ve=>{ye.props.onTouchEnd&&ye.props.onTouchEnd(ve),Oe(),clearTimeout(K.current),K.current=setTimeout(()=>{q(ve)},qe)};u.useEffect(()=>{if(!Ue)return;function ve(vt){(vt.key==="Escape"||vt.key==="Esc")&&q(vt)}return document.addEventListener("keydown",ve),()=>{document.removeEventListener("keydown",ve)}},[q,Ue]);const Wn=Tt(ye.ref,st,Mt,n);!De&&De!==0&&(Ue=!1);const So=u.useRef(),Hn=ve=>{const vt=ye.props;vt.onMouseMove&&vt.onMouseMove(ve),Eo={x:ve.clientX,y:ve.clientY},So.current&&So.current.update()},Xt={},Mo=typeof De=="string";D?(Xt.title=!Ue&&Mo&&!B?De:null,Xt["aria-describedby"]=Ue?fe:null):(Xt["aria-label"]=Mo?De:null,Xt["aria-labelledby"]=Ue&&!Mo?fe:null);const gt=m({},Xt,Se,ye.props,{className:Q(Se.className,ye.props.className),onTouchStart:co,ref:Wn},J?{onMouseMove:Hn}:{}),zt={};F||(gt.onTouchStart=To,gt.onTouchEnd=Ro),B||(gt.onMouseOver=$n(ln,gt.onMouseOver),gt.onMouseLeave=$n(uo,gt.onMouseLeave),xt||(zt.onMouseOver=ln,zt.onMouseLeave=uo)),X||(gt.onFocus=$n(Ut,gt.onFocus),gt.onBlur=$n(at,gt.onBlur),xt||(zt.onFocus=Ut,zt.onBlur=at));const qn=u.useMemo(()=>{var ve;let vt=[{name:"arrow",enabled:!!we,options:{element:we,padding:4}}];return(ve=H.popperOptions)!=null&&ve.modifiers&&(vt=vt.concat(H.popperOptions.modifiers)),m({},H.popperOptions,{modifiers:vt})},[we,H]),Ft=m({},k,{isRtl:Je,arrow:A,disableInteractive:xt,placement:ee,PopperComponentProp:ke,touch:mt.current}),Zt=Np(Ft),cn=(r=(i=Te.popper)!=null?i:z.Popper)!=null?r:Lp,Ge=(a=(l=(d=Te.transition)!=null?d:z.Transition)!=null?l:Ze)!=null?a:nr,Xe=(c=(p=Te.tooltip)!=null?p:z.Tooltip)!=null?c:jp,po=(h=(v=Te.arrow)!=null?v:z.Arrow)!=null?h:Bp,ho=dn(cn,m({},H,(b=ue.popper)!=null?b:N.popper,{className:Q(Zt.popper,H?.className,($=(y=ue.popper)!=null?y:N.popper)==null?void 0:$.className)}),Ft),Pt=dn(Ge,m({},Ye,(x=ue.transition)!=null?x:N.transition),Ft),Ba=dn(Xe,m({},(w=ue.tooltip)!=null?w:N.tooltip,{className:Q(Zt.tooltip,(S=(P=ue.tooltip)!=null?P:N.tooltip)==null?void 0:S.className)}),Ft),Oa=dn(po,m({},(C=ue.arrow)!=null?C:N.arrow,{className:Q(Zt.arrow,(T=(I=ue.arrow)!=null?I:N.arrow)==null?void 0:T.className)}),Ft);return R.jsxs(u.Fragment,{children:[u.cloneElement(ye,gt),R.jsx(cn,m({as:ke??ia,placement:ee,anchorEl:J?{getBoundingClientRect:()=>({top:Eo.y,left:Eo.x,right:Eo.x,bottom:Eo.y,width:0,height:0})}:Ke,popperRef:So,open:Ke?Ue:!1,id:fe,transition:!0},zt,ho,{popperOptions:qn,children:({TransitionProps:ve})=>R.jsx(Ge,m({timeout:it.transitions.duration.shorter},ve,Pt,{children:R.jsxs(Xe,m({},Ba,{children:[De,A?R.jsx(po,m({},Oa,{ref:ot})):null]}))}))}))]})});function Dp(e){return pe("MuiSpeedDialAction",e)}const Up=he("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),zp=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],Fp=e=>{const{open:o,tooltipPlacement:n,classes:r}=e,i={fab:["fab",!o&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${O(n)}`,!o&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return le(i,Dp,r)},_p=_(aa,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.fab,!n.open&&o.fabClosed]}})(({theme:e,ownerState:o})=>m({margin:8,color:(e.vars||e).palette.text.secondary,backgroundColor:(e.vars||e).palette.background.paper,"&:hover":{backgroundColor:e.vars?e.vars.palette.SpeedDialAction.fabHoverBg:Us(e.palette.background.paper,.15)},transition:`${e.transitions.create("transform",{duration:e.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!o.open&&{opacity:0,transform:"scale(0)"})),Wp=_("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.staticTooltip,!n.open&&o.staticTooltipClosed,o[`tooltipPlacement${O(n.tooltipPlacement)}`]]}})(({theme:e,ownerState:o})=>({position:"relative",display:"flex",alignItems:"center",[`& .${Up.staticTooltipLabel}`]:m({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.shorter}),opacity:1},!o.open&&{opacity:0,transform:"scale(0.5)"},o.tooltipPlacement==="left"&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},o.tooltipPlacement==="right"&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})})),Hp=_("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(e,o)=>o.staticTooltipLabel})(({theme:e})=>m({position:"absolute"},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.paper,borderRadius:(e.vars||e).shape.borderRadius,boxShadow:(e.vars||e).shadows[1],color:(e.vars||e).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})),qp=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiSpeedDialAction"}),{className:i,delay:a=0,FabProps:l={},icon:d,id:c,open:p,TooltipClasses:h,tooltipOpen:v=!1,tooltipPlacement:b="left",tooltipTitle:$}=r,y=re(r,zp),x=m({},r,{tooltipPlacement:b}),w=Fp(x),[S,P]=u.useState(v),C=()=>{P(!1)},T=()=>{P(!0)},I={transitionDelay:`${a}ms`},k=R.jsx(_p,m({size:"small",className:Q(w.fab,i),tabIndex:-1,role:"menuitem",ownerState:x},l,{style:m({},I,l.style),children:d}));return v?R.jsxs(Wp,m({id:c,ref:n,className:w.staticTooltip,ownerState:x},y,{children:[R.jsx(Hp,{style:I,id:`${c}-label`,className:w.staticTooltipLabel,ownerState:x,children:$}),u.cloneElement(k,{"aria-labelledby":`${c}-label`})]})):(!p&&S&&P(!1),R.jsx(Op,m({id:c,ref:n,title:$,placement:b,onClose:C,onOpen:T,open:p&&S,classes:h},y,{children:k})))}),Kp=Ie(R.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function Gp(e){return pe("MuiSpeedDialIcon",e)}const eo=he("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),Jp=["className","icon","open","openIcon"],Yp=e=>{const{classes:o,open:n,openIcon:r}=e;return le({root:["root"],icon:["icon",n&&"iconOpen",r&&n&&"iconWithOpenIconOpen"],openIcon:["openIcon",n&&"openIconOpen"]},Gp,o)},Qp=_("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${eo.icon}`]:o.icon},{[`& .${eo.icon}`]:n.open&&o.iconOpen},{[`& .${eo.icon}`]:n.open&&n.openIcon&&o.iconWithOpenIconOpen},{[`& .${eo.openIcon}`]:o.openIcon},{[`& .${eo.openIcon}`]:n.open&&o.openIconOpen},o.root]}})(({theme:e,ownerState:o})=>({height:24,[`& .${eo.icon}`]:m({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.short})},o.open&&m({transform:"rotate(45deg)"},o.openIcon&&{opacity:0})),[`& .${eo.openIcon}`]:m({position:"absolute",transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},o.open&&{transform:"rotate(0deg)",opacity:1})})),da=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiSpeedDialIcon"}),{className:i,icon:a,openIcon:l}=r,d=re(r,Jp),c=r,p=Yp(c);function h(v,b){return u.isValidElement(v)?u.cloneElement(v,{className:b}):v}return R.jsxs(Qp,m({className:Q(p.root,i),ref:n,ownerState:c},d,{children:[l?h(l,p.openIcon):null,a?h(a,p.icon):R.jsx(Kp,{className:p.icon})]}))});da.muiName="SpeedDialIcon";function Xp(e){return pe("MuiSwitch",e)}const ct=he("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Zp=["className","color","edge","size","sx"],eh=e=>{const{classes:o,edge:n,size:r,color:i,checked:a,disabled:l}=e,d={root:["root",n&&`edge${O(n)}`,`size${O(r)}`],switchBase:["switchBase",`color${O(i)}`,a&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=le(d,Xp,o);return m({},o,c)},th=_("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.edge&&o[`edge${O(n.edge)}`],o[`size${O(n.size)}`]]}})(({ownerState:e})=>m({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${ct.thumb}`]:{width:16,height:16},[`& .${ct.switchBase}`]:{padding:4,[`&.${ct.checked}`]:{transform:"translateX(16px)"}}})),oh=_(du,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.switchBase,{[`& .${ct.input}`]:o.input},n.color!=="default"&&o[`color${O(n.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${ct.checked}`]:{transform:"translateX(20px)"},[`&.${ct.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${ct.checked} + .${ct.track}`]:{opacity:.5},[`&.${ct.disabled} + .${ct.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${ct.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:o})=>m({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:He(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${ct.checked}`]:{color:(e.vars||e).palette[o.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:He(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ct.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${o.color}DisabledColor`]:`${e.palette.mode==="light"?qo(e.palette[o.color].main,.62):Ho(e.palette[o.color].main,.55)}`}},[`&.${ct.checked} + .${ct.track}`]:{backgroundColor:(e.vars||e).palette[o.color].main}})),nh=_("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,o)=>o.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),rh=_("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,o)=>o.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Mr=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiSwitch"}),{className:i,color:a="primary",edge:l=!1,size:d="medium",sx:c}=r,p=re(r,Zp),h=m({},r,{color:a,edge:l,size:d}),v=eh(h),b=R.jsx(rh,{className:v.thumb,ownerState:h});return R.jsxs(th,{className:Q(v.root,i),sx:c,ownerState:h,children:[R.jsx(oh,m({type:"checkbox",icon:b,checkedIcon:b,ref:n,ownerState:h},p,{classes:m({},v,{root:v.switchBase})})),R.jsx(nh,{className:v.track,ownerState:h})]})});function ih(e){return pe("MuiTab",e)}const to=he("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),sh=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],ah=e=>{const{classes:o,textColor:n,fullWidth:r,wrapped:i,icon:a,label:l,selected:d,disabled:c}=e,p={root:["root",a&&l&&"labelIcon",`textColor${O(n)}`,r&&"fullWidth",i&&"wrapped",d&&"selected",c&&"disabled"],iconWrapper:["iconWrapper"]};return le(p,ih,o)},lh=_(Gt,{name:"MuiTab",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.label&&n.icon&&o.labelIcon,o[`textColor${O(n.textColor)}`],n.fullWidth&&o.fullWidth,n.wrapped&&o.wrapped]}})(({theme:e,ownerState:o})=>m({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},o.label&&{flexDirection:o.iconPosition==="top"||o.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},o.icon&&o.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${to.iconWrapper}`]:m({},o.iconPosition==="top"&&{marginBottom:6},o.iconPosition==="bottom"&&{marginTop:6},o.iconPosition==="start"&&{marginRight:e.spacing(1)},o.iconPosition==="end"&&{marginLeft:e.spacing(1)})},o.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${to.selected}`]:{opacity:1},[`&.${to.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},o.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${to.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${to.disabled}`]:{color:(e.vars||e).palette.text.disabled}},o.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${to.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${to.disabled}`]:{color:(e.vars||e).palette.text.disabled}},o.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},o.wrapped&&{fontSize:e.typography.pxToRem(12)})),jt=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTab"}),{className:i,disabled:a=!1,disableFocusRipple:l=!1,fullWidth:d,icon:c,iconPosition:p="top",indicator:h,label:v,onChange:b,onClick:$,onFocus:y,selected:x,selectionFollowsFocus:w,textColor:S="inherit",value:P,wrapped:C=!1}=r,T=re(r,sh),I=m({},r,{disabled:a,disableFocusRipple:l,selected:x,icon:!!c,iconPosition:p,label:!!v,fullWidth:d,textColor:S,wrapped:C}),k=ah(I),A=c&&v&&u.isValidElement(c)?u.cloneElement(c,{className:Q(k.iconWrapper,c.props.className)}):c,j=N=>{!x&&b&&b(N,P),$&&$(N)},z=N=>{w&&!x&&b&&b(N,P),y&&y(N)};return R.jsxs(lh,m({focusRipple:!l,className:Q(k.root,i),ref:n,role:"tab","aria-selected":x,disabled:a,onClick:j,onFocus:z,ownerState:I,tabIndex:x?0:-1},T,{children:[p==="top"||p==="start"?R.jsxs(u.Fragment,{children:[A,v]}):R.jsxs(u.Fragment,{children:[v,A]}),h]}))}),ua=u.createContext();function ch(e){return pe("MuiTable",e)}he("MuiTable",["root","stickyHeader"]);const dh=["className","component","padding","size","stickyHeader"],uh=e=>{const{classes:o,stickyHeader:n}=e;return le({root:["root",n&&"stickyHeader"]},ch,o)},ph=_("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.stickyHeader&&o.stickyHeader]}})(({theme:e,ownerState:o})=>m({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":m({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})),ii="table",pa=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTable"}),{className:i,component:a=ii,padding:l="normal",size:d="medium",stickyHeader:c=!1}=r,p=re(r,dh),h=m({},r,{component:a,padding:l,size:d,stickyHeader:c}),v=uh(h),b=u.useMemo(()=>({padding:l,size:d,stickyHeader:c}),[l,d,c]);return R.jsx(ua.Provider,{value:b,children:R.jsx(ph,m({as:a,role:a===ii?null:"table",ref:n,className:Q(v.root,i),ownerState:h},p))})}),Fn=u.createContext();function hh(e){return pe("MuiTableBody",e)}he("MuiTableBody",["root"]);const mh=["className","component"],fh=e=>{const{classes:o}=e;return le({root:["root"]},hh,o)},gh=_("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-row-group"}),vh={variant:"body"},si="tbody",ha=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTableBody"}),{className:i,component:a=si}=r,l=re(r,mh),d=m({},r,{component:a}),c=fh(d);return R.jsx(Fn.Provider,{value:vh,children:R.jsx(gh,m({className:Q(c.root,i),as:a,ref:n,role:a===si?null:"rowgroup",ownerState:d},l))})});function bh(e){return pe("MuiTableCell",e)}const yh=he("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),xh=["align","className","component","padding","scope","size","sortDirection","variant"],$h=e=>{const{classes:o,variant:n,align:r,padding:i,size:a,stickyHeader:l}=e,d={root:["root",n,l&&"stickyHeader",r!=="inherit"&&`align${O(r)}`,i!=="normal"&&`padding${O(i)}`,`size${O(a)}`]};return le(d,bh,o)},wh=_("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`size${O(n.size)}`],n.padding!=="normal"&&o[`padding${O(n.padding)}`],n.align!=="inherit"&&o[`align${O(n.align)}`],n.stickyHeader&&o.stickyHeader]}})(({theme:e,ownerState:o})=>m({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?qo(He(e.palette.divider,1),.88):Ho(He(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},o.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},o.variant==="body"&&{color:(e.vars||e).palette.text.primary},o.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},o.size==="small"&&{padding:"6px 16px",[`&.${yh.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},o.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},o.padding==="none"&&{padding:0},o.align==="left"&&{textAlign:"left"},o.align==="center"&&{textAlign:"center"},o.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},o.align==="justify"&&{textAlign:"justify"},o.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),et=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTableCell"}),{align:i="inherit",className:a,component:l,padding:d,scope:c,size:p,sortDirection:h,variant:v}=r,b=re(r,xh),$=u.useContext(ua),y=u.useContext(Fn),x=y&&y.variant==="head";let w;l?w=l:w=x?"th":"td";let S=c;w==="td"?S=void 0:!S&&x&&(S="col");const P=v||y&&y.variant,C=m({},r,{align:i,component:w,padding:d||($&&$.padding?$.padding:"normal"),size:p||($&&$.size?$.size:"medium"),sortDirection:h,stickyHeader:P==="head"&&$&&$.stickyHeader,variant:P}),T=$h(C);let I=null;return h&&(I=h==="asc"?"ascending":"descending"),R.jsx(wh,m({as:w,ref:n,className:Q(T.root,a),"aria-sort":I,scope:S,ownerState:C},b))});function kh(e){return pe("MuiTableContainer",e)}he("MuiTableContainer",["root"]);const Ch=["className","component"],Th=e=>{const{classes:o}=e;return le({root:["root"]},kh,o)},Rh=_("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,o)=>o.root})({width:"100%",overflowX:"auto"}),Sh=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTableContainer"}),{className:i,component:a="div"}=r,l=re(r,Ch),d=m({},r,{component:a}),c=Th(d);return R.jsx(Rh,m({ref:n,as:a,className:Q(c.root,i),ownerState:d},l))});function Mh(e){return pe("MuiTableHead",e)}he("MuiTableHead",["root"]);const Ph=["className","component"],Vh=e=>{const{classes:o}=e;return le({root:["root"]},Mh,o)},Ih=_("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-header-group"}),Ah={variant:"head"},ai="thead",ma=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTableHead"}),{className:i,component:a=ai}=r,l=re(r,Ph),d=m({},r,{component:a}),c=Vh(d);return R.jsx(Fn.Provider,{value:Ah,children:R.jsx(Ih,m({as:a,className:Q(c.root,i),ref:n,role:a===ai?null:"rowgroup",ownerState:d},l))})}),Eh=Ie(R.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Nh=Ie(R.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Lh(e){return pe("MuiTableRow",e)}const li=he("MuiTableRow",["root","selected","hover","head","footer"]),jh=["className","component","hover","selected"],Bh=e=>{const{classes:o,selected:n,hover:r,head:i,footer:a}=e;return le({root:["root",n&&"selected",r&&"hover",i&&"head",a&&"footer"]},Lh,o)},Oh=_("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.head&&o.head,n.footer&&o.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${li.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${li.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:He(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:He(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),ci="tr",Uo=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTableRow"}),{className:i,component:a=ci,hover:l=!1,selected:d=!1}=r,c=re(r,jh),p=u.useContext(Fn),h=m({},r,{component:a,hover:l,selected:d,head:p&&p.variant==="head",footer:p&&p.variant==="footer"}),v=Bh(h);return R.jsx(Oh,m({as:a,ref:n,className:Q(v.root,i),role:a===ci?null:"row",ownerState:h},c))});function Dh(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Uh(e,o,n,r={},i=()=>{}){const{ease:a=Dh,duration:l=300}=r;let d=null;const c=o[e];let p=!1;const h=()=>{p=!0},v=b=>{if(p){i(new Error("Animation cancelled"));return}d===null&&(d=b);const $=Math.min(1,(b-d)/l);if(o[e]=a($)*(n-c)+c,$>=1){requestAnimationFrame(()=>{i(null)});return}requestAnimationFrame(v)};return c===n?(i(new Error("Element already at target position")),h):(requestAnimationFrame(v),h)}const zh=["onChange"],Fh={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function _h(e){const{onChange:o}=e,n=re(e,zh),r=u.useRef(),i=u.useRef(null),a=()=>{r.current=i.current.offsetHeight-i.current.clientHeight};return bo(()=>{const l=ur(()=>{const c=r.current;a(),c!==r.current&&o(r.current)}),d=pr(i.current);return d.addEventListener("resize",l),()=>{l.clear(),d.removeEventListener("resize",l)}},[o]),u.useEffect(()=>{a(),o(r.current)},[o]),R.jsx("div",m({style:Fh,ref:i},n))}function Wh(e){return pe("MuiTabScrollButton",e)}const Hh=he("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),qh=["className","slots","slotProps","direction","orientation","disabled"],Kh=e=>{const{classes:o,orientation:n,disabled:r}=e;return le({root:["root",n,r&&"disabled"]},Wh,o)},Gh=_(Gt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.orientation&&o[n.orientation]]}})(({ownerState:e})=>m({width:40,flexShrink:0,opacity:.8,[`&.${Hh.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),Jh=u.forwardRef(function(o,n){var r,i;const a=de({props:o,name:"MuiTabScrollButton"}),{className:l,slots:d={},slotProps:c={},direction:p}=a,h=re(a,qh),b=Jt().direction==="rtl",$=m({isRtl:b},a),y=Kh($),x=(r=d.StartScrollButtonIcon)!=null?r:Eh,w=(i=d.EndScrollButtonIcon)!=null?i:Nh,S=ut({elementType:x,externalSlotProps:c.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:$}),P=ut({elementType:w,externalSlotProps:c.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:$});return R.jsx(Gh,m({component:"div",className:Q(y.root,l),ref:n,role:null,ownerState:$,tabIndex:null},h,{children:p==="left"?R.jsx(x,m({},S)):R.jsx(w,m({},P))}))});function Yh(e){return pe("MuiTabs",e)}const Yn=he("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Qh=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],di=(e,o)=>e===o?e.firstChild:o&&o.nextElementSibling?o.nextElementSibling:e.firstChild,ui=(e,o)=>e===o?e.lastChild:o&&o.previousElementSibling?o.previousElementSibling:e.lastChild,wn=(e,o,n)=>{let r=!1,i=n(e,o);for(;i;){if(i===e.firstChild){if(r)return;r=!0}const a=i.disabled||i.getAttribute("aria-disabled")==="true";if(!i.hasAttribute("tabindex")||a)i=n(e,i);else{i.focus();return}}},Xh=e=>{const{vertical:o,fixed:n,hideScrollbar:r,scrollableX:i,scrollableY:a,centered:l,scrollButtonsHideMobile:d,classes:c}=e;return le({root:["root",o&&"vertical"],scroller:["scroller",n&&"fixed",r&&"hideScrollbar",i&&"scrollableX",a&&"scrollableY"],flexContainer:["flexContainer",o&&"flexContainerVertical",l&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",d&&"scrollButtonsHideMobile"],scrollableX:[i&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]},Yh,c)},Zh=_("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${Yn.scrollButtons}`]:o.scrollButtons},{[`& .${Yn.scrollButtons}`]:n.scrollButtonsHideMobile&&o.scrollButtonsHideMobile},o.root,n.vertical&&o.vertical]}})(({ownerState:e,theme:o})=>m({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${Yn.scrollButtons}`]:{[o.breakpoints.down("sm")]:{display:"none"}}})),em=_("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.scroller,n.fixed&&o.fixed,n.hideScrollbar&&o.hideScrollbar,n.scrollableX&&o.scrollableX,n.scrollableY&&o.scrollableY]}})(({ownerState:e})=>m({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),tm=_("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.flexContainer,n.vertical&&o.flexContainerVertical,n.centered&&o.centered]}})(({ownerState:e})=>m({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),om=_("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,o)=>o.indicator})(({ownerState:e,theme:o})=>m({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(o.vars||o).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(o.vars||o).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),nm=_(_h)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),pi={},fa=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTabs"}),i=Jt(),a=i.direction==="rtl",{"aria-label":l,"aria-labelledby":d,action:c,centered:p=!1,children:h,className:v,component:b="div",allowScrollButtonsMobile:$=!1,indicatorColor:y="primary",onChange:x,orientation:w="horizontal",ScrollButtonComponent:S=Jh,scrollButtons:P="auto",selectionFollowsFocus:C,slots:T={},slotProps:I={},TabIndicatorProps:k={},TabScrollButtonProps:A={},textColor:j="primary",value:z,variant:N="standard",visibleScrollbar:D=!1}=r,X=re(r,Qh),B=N==="scrollable",L=w==="vertical",F=L?"scrollTop":"scrollLeft",W=L?"top":"left",oe=L?"bottom":"right",ae=L?"clientHeight":"clientWidth",J=L?"height":"width",Le=m({},r,{component:b,allowScrollButtonsMobile:$,indicatorColor:y,orientation:w,vertical:L,scrollButtons:P,textColor:j,variant:N,visibleScrollbar:D,fixed:!B,hideScrollbar:B&&!D,scrollableX:B&&!L,scrollableY:B&&L,centered:p&&!B,scrollButtonsHideMobile:!$}),je=Xh(Le),qe=ut({elementType:T.StartScrollButtonIcon,externalSlotProps:I.startScrollButtonIcon,ownerState:Le}),$e=ut({elementType:T.EndScrollButtonIcon,externalSlotProps:I.endScrollButtonIcon,ownerState:Le}),[Re,Ae]=u.useState(!1),[ee,ke]=u.useState(pi),[H,ue]=u.useState(!1),[Te,De]=u.useState(!1),[Ze,Ye]=u.useState(!1),[Se,ye]=u.useState({overflow:"hidden",scrollbarWidth:0}),it=new Map,Je=u.useRef(null),Ke=u.useRef(null),Mt=()=>{const q=Je.current;let G;if(q){const me=q.getBoundingClientRect();G={clientWidth:q.clientWidth,scrollLeft:q.scrollLeft,scrollTop:q.scrollTop,scrollLeftNormalized:$l(q,i.direction),scrollWidth:q.scrollWidth,top:me.top,bottom:me.bottom,left:me.left,right:me.right}}let ge;if(q&&z!==!1){const me=Ke.current.children;if(me.length>0){const We=me[it.get(z)];ge=We?We.getBoundingClientRect():null}}return{tabsMeta:G,tabMeta:ge}},we=Et(()=>{const{tabsMeta:q,tabMeta:G}=Mt();let ge=0,me;if(L)me="top",G&&q&&(ge=G.top-q.top+q.scrollTop);else if(me=a?"right":"left",G&&q){const Qe=a?q.scrollLeftNormalized+q.clientWidth-q.scrollWidth:q.scrollLeft;ge=(a?-1:1)*(G[me]-q[me]+Qe)}const We={[me]:ge,[J]:G?G[J]:0};if(isNaN(ee[me])||isNaN(ee[J]))ke(We);else{const Qe=Math.abs(ee[me]-We[me]),st=Math.abs(ee[J]-We[J]);(Qe>=1||st>=1)&&ke(We)}}),ot=(q,{animation:G=!0}={})=>{G?Uh(F,Je.current,q,{duration:i.transitions.duration.standard}):Je.current[F]=q},mt=q=>{let G=Je.current[F];L?G+=q:(G+=q*(a?-1:1),G*=a&&Gs()==="reverse"?-1:1),ot(G)},xt=()=>{const q=Je.current[ae];let G=0;const ge=Array.from(Ke.current.children);for(let me=0;me<ge.length;me+=1){const We=ge[me];if(G+We[ae]>q){me===0&&(G=q);break}G+=We[ae]}return G},ft=()=>{mt(-1*xt())},U=()=>{mt(xt())},K=u.useCallback(q=>{ye({overflow:null,scrollbarWidth:q})},[]),ne=()=>{const q={};q.scrollbarSizeListener=B?R.jsx(nm,{onChange:K,className:Q(je.scrollableX,je.hideScrollbar)}):null;const ge=B&&(P==="auto"&&(H||Te)||P===!0);return q.scrollButtonStart=ge?R.jsx(S,m({slots:{StartScrollButtonIcon:T.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:qe},orientation:w,direction:a?"right":"left",onClick:ft,disabled:!H},A,{className:Q(je.scrollButtons,A.className)})):null,q.scrollButtonEnd=ge?R.jsx(S,m({slots:{EndScrollButtonIcon:T.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:$e},orientation:w,direction:a?"left":"right",onClick:U,disabled:!Te},A,{className:Q(je.scrollButtons,A.className)})):null,q},ce=Et(q=>{const{tabsMeta:G,tabMeta:ge}=Mt();if(!(!ge||!G)){if(ge[W]<G[W]){const me=G[F]+(ge[W]-G[W]);ot(me,{animation:q})}else if(ge[oe]>G[oe]){const me=G[F]+(ge[oe]-G[oe]);ot(me,{animation:q})}}}),Be=Et(()=>{B&&P!==!1&&Ye(!Ze)});u.useEffect(()=>{const q=ur(()=>{Je.current&&we()});let G;const ge=Qe=>{Qe.forEach(st=>{st.removedNodes.forEach($t=>{var at;(at=G)==null||at.unobserve($t)}),st.addedNodes.forEach($t=>{var at;(at=G)==null||at.observe($t)})}),q(),Be()},me=pr(Je.current);me.addEventListener("resize",q);let We;return typeof ResizeObserver<"u"&&(G=new ResizeObserver(q),Array.from(Ke.current.children).forEach(Qe=>{G.observe(Qe)})),typeof MutationObserver<"u"&&(We=new MutationObserver(ge),We.observe(Ke.current,{childList:!0})),()=>{var Qe,st;q.clear(),me.removeEventListener("resize",q),(Qe=We)==null||Qe.disconnect(),(st=G)==null||st.disconnect()}},[we,Be]),u.useEffect(()=>{const q=Array.from(Ke.current.children),G=q.length;if(typeof IntersectionObserver<"u"&&G>0&&B&&P!==!1){const ge=q[0],me=q[G-1],We={root:Je.current,threshold:.99},Qe=Ut=>{ue(!Ut[0].isIntersecting)},st=new IntersectionObserver(Qe,We);st.observe(ge);const $t=Ut=>{De(!Ut[0].isIntersecting)},at=new IntersectionObserver($t,We);return at.observe(me),()=>{st.disconnect(),at.disconnect()}}},[B,P,Ze,h?.length]),u.useEffect(()=>{Ae(!0)},[]),u.useEffect(()=>{we()}),u.useEffect(()=>{ce(pi!==ee)},[ce,ee]),u.useImperativeHandle(c,()=>({updateIndicator:we,updateScrollButtons:Be}),[we,Be]);const Ue=R.jsx(om,m({},k,{className:Q(je.indicator,k.className),ownerState:Le,style:m({},ee,k.style)}));let fe=0;const Me=u.Children.map(h,q=>{if(!u.isValidElement(q))return null;const G=q.props.value===void 0?fe:q.props.value;it.set(G,fe);const ge=G===z;return fe+=1,u.cloneElement(q,m({fullWidth:N==="fullWidth",indicator:ge&&!Re&&Ue,selected:ge,selectionFollowsFocus:C,onChange:x,textColor:j,value:G},fe===1&&z===!1&&!q.props.tabIndex?{tabIndex:0}:{}))}),Oe=q=>{const G=Ke.current,ge=At(G).activeElement;if(ge.getAttribute("role")!=="tab")return;let We=w==="horizontal"?"ArrowLeft":"ArrowUp",Qe=w==="horizontal"?"ArrowRight":"ArrowDown";switch(w==="horizontal"&&a&&(We="ArrowRight",Qe="ArrowLeft"),q.key){case We:q.preventDefault(),wn(G,ge,ui);break;case Qe:q.preventDefault(),wn(G,ge,di);break;case"Home":q.preventDefault(),wn(G,null,di);break;case"End":q.preventDefault(),wn(G,null,ui);break}},nt=ne();return R.jsxs(Zh,m({className:Q(je.root,v),ownerState:Le,ref:n,as:b},X,{children:[nt.scrollButtonStart,nt.scrollbarSizeListener,R.jsxs(em,{className:je.scroller,ownerState:Le,style:{overflow:Se.overflow,[L?`margin${a?"Left":"Right"}`:"marginBottom"]:D?void 0:-Se.scrollbarWidth},ref:Je,children:[R.jsx(tm,{"aria-label":l,"aria-labelledby":d,"aria-orientation":w==="vertical"?"vertical":null,className:je.flexContainer,ownerState:Le,onKeyDown:Oe,ref:Ke,role:"tablist",children:Me}),Re&&Ue]}),nt.scrollButtonEnd]}))});function rm(e){return pe("MuiTextField",e)}he("MuiTextField",["root"]);const im=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],sm={standard:rl,filled:nl,outlined:ol},am=e=>{const{classes:o}=e;return le({root:["root"]},rm,o)},lm=_(la,{name:"MuiTextField",slot:"Root",overridesResolver:(e,o)=>o.root})({}),cm=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTextField"}),{autoComplete:i,autoFocus:a=!1,children:l,className:d,color:c="primary",defaultValue:p,disabled:h=!1,error:v=!1,FormHelperTextProps:b,fullWidth:$=!1,helperText:y,id:x,InputLabelProps:w,inputProps:S,InputProps:P,inputRef:C,label:T,maxRows:I,minRows:k,multiline:A=!1,name:j,onBlur:z,onChange:N,onFocus:D,placeholder:X,required:B=!1,rows:L,select:F=!1,SelectProps:W,type:oe,value:ae,variant:J="outlined"}=r,Le=re(r,im),je=m({},r,{autoFocus:a,color:c,disabled:h,error:v,fullWidth:$,multiline:A,required:B,select:F,variant:J}),qe=am(je),$e={};J==="outlined"&&(w&&typeof w.shrink<"u"&&($e.notched=w.shrink),$e.label=T),F&&((!W||!W.native)&&($e.id=void 0),$e["aria-describedby"]=void 0);const Re=hr(x),Ae=y&&Re?`${Re}-helper-text`:void 0,ee=T&&Re?`${Re}-label`:void 0,ke=sm[J],H=R.jsx(ke,m({"aria-describedby":Ae,autoComplete:i,autoFocus:a,defaultValue:p,fullWidth:$,multiline:A,name:j,rows:L,maxRows:I,minRows:k,type:oe,value:ae,id:Re,inputRef:C,onBlur:z,onChange:N,onFocus:D,placeholder:X,inputProps:S},$e,P));return R.jsxs(lm,m({className:Q(qe.root,d),disabled:h,error:v,fullWidth:$,ref:n,required:B,color:c,variant:J,ownerState:je},Le,{children:[T!=null&&T!==""&&R.jsx(ca,m({htmlFor:Re,id:ee},w,{children:T})),F?R.jsx(zs,m({"aria-describedby":Ae,id:Re,labelId:ee,value:ae,input:H},W,{children:l})):H,y&&R.jsx(Cu,m({id:Ae},b,{children:y}))]}))}),dm=Ie([R.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),R.jsx("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime"),um=Ie(R.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),pm=Ie(R.jsx("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"CodeOutlined"),hm=Ie(R.jsx("path",{d:"M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"}),"Coffee"),mm=Ie(R.jsx("path",{d:"m13.7826 15.1719 2.1213-2.1213 5.9963 5.9962-2.1213 2.1213zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21z"}),"ConstructionOutlined"),fm=Ie(R.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy"),gm=Ie(R.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm3.17-6.41a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 12.59l1.41-1.41c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 14l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 15.41l-1.41 1.41c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 14l-1.42-1.41zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"}),"DeleteForeverRounded"),vm=Ie(R.jsx("path",{d:"M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17 6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"}),"DeveloperMode"),Qn=Ie(R.jsx("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"}),"EmailOutlined"),Nt=Ie(R.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),Lt=Ie(R.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),bm=Ie(R.jsx("path",{d:"M7.25 12.5 4.75 9H3.5v6h1.25v-3.5L7.3 15h1.2V9H7.25zM9.5 15h4v-1.25H11v-1.11h2.5v-1.26H11v-1.12h2.5V9h-4zm9.75-6v4.5h-1.12V9.99h-1.25v3.52h-1.13V9H14.5v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9h-1.25z"}),"FiberNewOutlined"),ym=Ie(R.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"}),"FileCopyOutlined"),xm=Ie(R.jsx("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),$m=Ie(R.jsx("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),wm=Ie(R.jsx("path",{d:"M13 11.33 18 18H6l5-6.67V6h2m2.96-2H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81z"}),"ScienceOutlined"),km=Ie(R.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),ga=Ie(R.jsx("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"}),"ThumbUpAlt"),va=Ie(R.jsx("path",{d:"m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82l4.11-4.1M14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z"}),"ThumbUpOffAlt");function ba(e){const o=u.useRef();return u.useEffect(()=>{o.current=e},[e]),o.current}function Dt(e,o){const[n,r]=u.useState(e||!1),i=a=>{if(typeof a=="boolean"){r(a);return}r(l=>!l)};return[n?o?.true??!0:o?.false??!1,i,r]}function Cm(e){if(e&&typeof e!="object")throw new Error("Initial value must be an object");const[o,n]=u.useState(e||Object.create({}));function r(a){return o[a]}function i(...a){if(a.length===0)throw new Error("No arguments provided");if(["string","number","symbol"].includes(typeof a[0])){const l=a[0],d=a[1];n(c=>({...c,[l]:typeof d=="function"?d(c[l]):d}))}else if(typeof a[0]=="object"){const l=a[0],d=a[1]||"rehydrate";n(c=>d==="override"?{...l,...c}:{...c,...l})}else if(typeof a[0]=="function"){const l=a[0],d=a[1]||"rehydrate";n(c=>{const p=l(c);return d==="override"?{...p}:{...c,...p}})}else throw new Error("Invalid arguments")}return[o,i,r]}const _n=e=>{const[o,n]=u.useState(new Map(Object.entries(e)));function r(...d){if(d.length===0)throw new Error("No arguments provided");const c=d[0],p=d[1];if(typeof c=="function"){const h=c,v=p||"override";n(b=>{const $=h(b),y=$ instanceof Map?$:new Map(Object.entries($));return v==="override"?y:new Map([...b,...y])})}else if(typeof c=="object"&&c!==null){const h=c,v=p||"rehydrate";n(b=>v==="override"?new Map(Object.entries(h)):new Map([...b,...Object.entries(h)]))}else if(d.length===2){const h=c;if(typeof p=="function"){const v=p;n(b=>{const $=o.get(h);return new Map(b.entries()).set(h,v($))})}else{const v=p;n(b=>new Map(b.entries()).set(h,v))}}else throw new Error("Invalid arguments")}function i(d){return o.get(d)}function a(d){n(c=>c.has(d)?(c.delete(d),new Map(c)):c)}function l(d,c){n(p=>{if(p.has(d)&&p.get(d)===c)return p;const h=new Map(p);return h.set(d,c),h})}return{map:o,set:r,get:i,del:a,add:l}};function ya(e,o,n){const[r,i]=u.useState([...e].map(k=>({...k,[o?.idKey||"_id"]:Do()}))),[a,l]=u.useState([...e]);u.useEffect(()=>{const k=r.map(A=>{const j={...A};return j[o?.idKey||"_id"]&&delete j[o?.idKey||"_id"],j});l([...k])},n||[]);const d=u.useCallback(()=>{const k=r.map(A=>{const j={...A};return j[o?.idKey||"_id"]&&delete j[o?.idKey||"_id"],j});l([...k])},[r]),c=u.useCallback(k=>{i(A=>[...A,{...k,[o?.idKey||"_id"]:Do()}])},[o?.idKey]),p=u.useCallback(k=>{if(k==null)throw new Error("idKey is required to removeItem in list");i(A=>A.filter(j=>j[o?.idKey||"_id"]!==k))},[o?.idKey]),h=u.useCallback(k=>{k.forEach(A=>{p(A)})},[o?.idKey]),v=u.useCallback(k=>{if(k!==void 0){i([...k].map(A=>({...A,[o?.idKey||"_id"]:Do()})));return}i([...a].map(A=>({...A,[o?.idKey||"_id"]:Do()})))},[a]),b=u.useCallback(k=>{if(k.some(A=>[void 0,null].includes(A[o?.idKey||"_id"])))throw new Error("idKey is required to updateItem in list");i(k)},[]),y=[...r].sort(o?.sortFn||(()=>0)).filter(o?.filterFn||(()=>!0)),[x,w]=u.useState(1),S=u.useMemo(()=>Math.max(1,Math.ceil(y.length/(o?.itemsPerPage??10))),[y.length,o?.itemsPerPage]),P=u.useCallback(k=>{k>=1&&k<=S&&w(k)},[S]),C=u.useCallback(()=>{x>1&&w(k=>k-1)},[x]),T=u.useCallback(()=>{x<S&&w(k=>k+1)},[x,S]),I=y.slice((x-1)*(o?.itemsPerPage??10),x*(o?.itemsPerPage??10));return[r,{updateItems:b,addItem:c,removeItem:p,removeItems:h,save:d,reset:v,filteredItems:y,originalItems:a,render:()=>y?.length?y.map((k,A,j)=>o?.renderFn?t(u.Fragment,{children:o?.renderFn(k,A,j)},k[o?.idKey||"_id"]):null):o?.renderEmpty?typeof o?.renderEmpty=="function"?o?.renderEmpty():o?.renderEmpty:null,pagedItems:I,currentPage:x,totalPage:S,goToPage:P,goLastPage:C,goNextPage:T}]}const Tm=(e,o={idKey:"_id"})=>{const[n,r]=u.useState(il(e)),[i,a]=u.useState(null),l=o.idKey,d=o.renderNode||(()=>null),c=o.filterFn;if(!l&&l!==0)throw new Error("You must provide an idKey to useTree");const p=(C,T,I=0,k=null)=>{const A=T(C,I,k),j=C.children?.map(N=>p(N,T,I+1,C))||[];return[A,...j]};let h="[react-hooks-kit][useTree] Node cannot be its own parent";const v=(C,T)=>{if(!C[l]&&C[l]!==0&&(C[l]=`${Do()}`),C[l]===T){if(o.strict)throw new Error(h);return console.error(h),h}let I=!1,k=!1;if(h=`[react-hooks-kit][useTree] Node with id ${C[l]} already exists`,p(n,A=>{if(A[l]===C[l]&&(k=!0,o.strict))throw new Error(h)}),k)return console.error(h),h;if(p(n,A=>{A[l]===T&&(I=!0,Array.isArray(A.children)||(A.children=[]),A.children?.push(C))}),h=`[react-hooks-kit][useTree] Parent with id ${T} does not exist`,!I&&o.strict)throw new Error(h);if(!I)return console.error(h),h;r({...n})},b=C=>{let T="[react-hooks-kit][removeNode] You must provide a nodeId to removeNode";if(!C&&C!==0){if(o.strict)throw new Error(T);return console.error(T),T}let I=!1;if(p(n,k=>{k[l]===C&&(I=!0),k.children?.some(A=>A[l]===C)&&(I=!0),k.children=k.children?.filter(A=>A[l]!==C)||[]}),!I){if(T=`[react-hooks-kit][useTree] Node to remove with id ${C} does not exist`,o.strict)throw new Error(T);return console.error(T),T}r({...n})},$=(C,T)=>{let I="[react-hooks-kit][useTree] You must provide a nodeId to updateNode";if(!C&&C!==0){if(o.strict)throw new Error(I);return console.error(I),I}let k=!1;if(p(n,A=>{A[l]===C&&(k=!0,Object.assign(A,T))}),!k){if(I=`[react-hooks-kit][useTree] Node to update with id ${C} does not exist`,o.strict)throw new Error(I);return console.error(I),I}r({...n})},y=C=>{let T=null;return p(n,I=>{I[l]===C&&(T=I)}),T},x=C=>{let T;typeof C=="string"?T=k=>k[l]===C:T=C;const I=[];return p(n,k=>{T(k)&&I.push(k)}),I},w=(C,T)=>{let I=null;if(p(n,k=>{k[l]===C&&(I=k)}),I===null){let k=`[react-hooks-kit][useTree] Node to move with id ${C} does not exist`;if(o.strict)throw new Error(k);return console.error(k),k}b(C),v(I,T)},S=u.useCallback(()=>{if(!d)throw new Error("[react-hooks-kit][useTree] You must provide a renderNode function to useTree");return!n||JSON.stringify(n)==="{}"?o.renderEmpty?typeof o.renderEmpty=="function"?o.renderEmpty():o.renderEmpty:null:p(n,(C,T,I)=>d(C,l,T,I,n))},[n,d]),P=(C,T)=>{if(typeof C=="string"){let k=y(C);return k?p(k,T):[]}else return p(n,C)};return u.useEffect(()=>{if(c){const C=p(n,T=>c(T)?T:null);a(C.filter(T=>T!==null))}},[n,c]),[n,{addNode:v,removeNode:b,updateNode:$,findNode:y,moveNode:w,searchTree:x,traverse:P,render:S}]},xa=(e,o="onSetState",n)=>{const[r,i]=u.useState(o==="onSetState"?0:-1),[a,l]=u.useState(e),d=c=>{l(c),o==="onSetState"&&i(p=>p+1)};return u.useEffect(()=>{o==="onChange"&&i(c=>c+1)},n?typeof n=="function"?n(a):n:[a]),[a,d,r]};function Rm(e){const o=u.useRef(e),n=Fs();return{get:r=>r===void 0||o.current===null?o.current:Reflect.get(o.current,r),set:(r,i)=>{const a=Reflect.set(o.current,r,i);return n(),a},has:r=>Reflect.has(o.current,r),apply:r=>Reflect.apply(r,o.current,[])}}const Sm=(e,o,n)=>{let r;r=o;const i=u.useMemo(()=>({immediate:typeof n?.immediate=="boolean"?n.immediate?"all":"none":n?.immediate??"none",callAtFirst:n?.callAtFirst??!0,pauseAtFirst:n?.pauseAtFirst??!1,duration:n?.duration??r??1e3,delay:n?.delay??0}),[n,r]),[a,l]=u.useState(0),[d,c]=u.useState(i.pauseAtFirst),p=u.useRef(0),h=u.useRef(null),v=u.useRef(e);v.current=e;const b=d?"off":"on",$=u.useCallback(()=>{h.current&&(clearTimeout(h.current),h.current=null)},[]),y=u.useCallback(()=>{$(),h.current=setTimeout(()=>{p.current+=1;const T=p.current;l(T),(i.callAtFirst||T>0)&&v.current(T),d||y()},i.duration)},[i.duration,i.callAtFirst,d,$]),x=u.useCallback(()=>{c(!0),$()},[$]),w=u.useCallback(()=>{c(!1)},[]),S=u.useCallback(()=>{p.current=0,l(0)},[]),P=u.useCallback(T=>{setTimeout(x,T)},[x]),C=u.useCallback(T=>{setTimeout(w,T)},[w]);return u.useEffect(()=>(d||y(),$),[d,y,$]),u.useEffect(()=>{const I=setTimeout(()=>{(i.immediate==="mounted"||i.immediate==="all")&&v.current(0)},i.delay);return()=>clearTimeout(I)},[i.immediate,i.delay]),{tick:a,status:b,pause:x,resume:w,reset:S,delayedPause:P,delayedResume:C}};function Mm(e,o=200,n=!1,r){let i=null,a=!1;const l=function(...d){return new Promise((c,p)=>{if(i&&clearTimeout(i),n&&!a){const h=e.apply(this,d);r&&r(h),c(h),a=!0,i=setTimeout(()=>{a=!1,i=null},o)}else a=!0,i=setTimeout(()=>{const h=e.apply(this,d);r&&r(h),c(h),a=!1,i=null},o)})};return l.cancel=function(){i&&clearTimeout(i),i=null,a=!1},l}const Pm=()=>{};function Vm(e,o=200,n=!1,r){if(typeof e!="function")throw new Error("fn must be a function");if(typeof o!="number")throw new Error("delay must be a number");const i=u.useRef(e),a=u.useRef({immediate:n,callback:r});return i.current=e,a.current={immediate:n,callback:r},u.useMemo(()=>o<0?Pm:o===0?i.current:Mm(i.current,o,a.current.immediate,a.current.callback),[o])}const Xn=(e,o,n,r,i)=>{let a=!1;typeof r=="boolean"?a=r:r&&(a=r.strict||!1,i=r.immediate);let l=sl;o instanceof Function&&(l=o);let d;try{d=l(e,o,a)}catch(b){console.error(b)}const[c,p]=u.useState(d),h=u.useRef(c),v=u.useRef(!1);return u.useEffect(()=>{!v.current&&i&&(n?.(c,h.current),v.current=!0)},[]),u.useEffect(()=>{let b;try{b=l(e,o,a)}catch($){console.error($)}_s(b,h.current)||(n?.(b,h.current),p(b),h.current=b)},[e,o,n]),c};function Im(e,o,n){const[r,i]=u.useState(e()),a=u.useRef(r);return u.useEffect(()=>{let d;const c=()=>{const p=e();p!==a.current&&(a.current=p,i(p),o?.(p)),d=requestAnimationFrame(c)};return c(),()=>{cancelAnimationFrame(d)}},[e]),n?[r,()=>{const d=e();d!==a.current&&(a.current=d,i(d),o?.(d))}]:r}function Am(e,o=()=>{},n=!1){return Im(e,o,n)}const Em=(e,o,n=!1)=>{u.useEffect(()=>{const r=Ws(e).then(o);return n&&o(e.value),()=>r()},[e.id])};function $a({callback:e,target:o}={},n=[]){const[r,i]=u.useState({width:0,height:0});return u.useLayoutEffect(()=>{if(o){const a=typeof o=="string"?document.getElementById(o):o.current;if(a){const l=new ResizeObserver(d=>{d.forEach(c=>{i({width:c.target.clientWidth,height:c.target.clientHeight}),e?.({width:c.target.clientWidth,height:c.target.clientHeight})})});return l.observe(a),()=>{l.unobserve(a)}}}else{const a=()=>{i({width:window.innerWidth,height:window.innerHeight}),e?.({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",a),a(),()=>window.removeEventListener("resize",a)}},n),r}function Nm(e,o,n){let r={};const[i,a]=u.useState({status:"idle",data:null,error:null}),l=new AbortController;return[i,()=>{l.abort()},()=>{a({...i,status:"pending"}),e().then(p=>{a({status:"resolved",data:p,error:null}),r.onResolve?.(p)}).catch(p=>{p.name!=="AbortError"&&(a({status:"rejected",data:null,error:p}),r.onReject?.(p))}).finally(()=>{r.onFinally?.()})}]}function Lm(e,o){const[n,r]=u.useState(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),i=u.useCallback(a=>l=>{const d=l.matches?"dark":"light";r(d),a(d)},[]);return u.useEffect(()=>{const a=window.matchMedia("(prefers-color-scheme: dark)");let l=null;return l=i(()=>{}),a.addEventListener("change",l),()=>{l&&a.removeEventListener("change",l)}},[e,o,i]),n}function jm({loadMoreItems:e,items:o,hasMore:n,height:r,style:i,renderTop:a,renderItem:l,itemComponent:d,itemComponentProps:c,renderEmpty:p,renderLoader:h,renderUnLoaded:v,loaderComponent:b,loaderComponentProps:$,containerComponent:y,containerComponentProps:x,renderBottom:w,observerOptions:S},P){const[C,T]=u.useState(!1),I=u.useRef(null),k=u.useCallback(async()=>{C||!n||(T(!0),await e(),T(!1))},[C,n,e]);u.useEffect(()=>{const X={root:null,rootMargin:"20px",threshold:1},B=new IntersectionObserver(L=>{L[0].isIntersecting&&k()},{...X,...S});return I.current&&B.observe(I.current),()=>B.disconnect()},[S,k]);const A=u.useMemo(()=>y||"div",[y]),j=u.useMemo(()=>d||"div",[d]),z=u.useMemo(()=>b||"div",[b]),N=u.useMemo(()=>{const{style:X,...B}=x??{};return{...B,style:{overflow:"auto",height:r,...i,...X}}},[x,r,i]),D=u.useCallback(()=>s(A,{...N,children:[typeof a=="function"?a():a,(o||[]).length===0&&(typeof p=="function"?p():p===void 0?"No data":p),o.map((X,B)=>t(j,{...c,children:typeof l=="function"?l(X):l},B)),s(z,{ref:I,...$,children:[C&&(typeof h=="function"?h():h===void 0?"Loading...":h),!C&&!n&&(typeof v=="function"?v():v===void 0?"No more data":v)]}),typeof w=="function"?w():w]}),[N,a,o,j,c,l,I,$,C,h,n,v,w]);return[I,C,o,D]}let Zn=!1;function Pr(e={},o=!0){const n=u.useRef(null),r=u.useRef(!1);return u.useEffect(()=>{if(!r.current){try{"paintWorklet"in CSS&&!Zn?(CSS.paintWorklet.addModule(al),Zn=!0):Zn||console.warn("Your browser doesn't support CSS Paint API")}catch(i){console.error(i)}r.current=!0}},[]),u.useEffect(()=>{const i=n.current;if(!i)return;const a=e.trigger||"mousedown",l=e.duration||500,d=e.color||null,c=e.num||10,p=e.size??3;let h=null;const v=b=>{if(!o)return;const $=b.clientX-i.getBoundingClientRect().left,y=b.clientY-i.getBoundingClientRect().top,x=performance.now();console.log(`x: ${$}, y: ${y}`),i.style.setProperty("--particle-x",`${$}px`),i.style.setProperty("--particle-y",`${y}px`),i.style.setProperty("--particle-size",`${p}`),i.style.setProperty("--particle-color",d===null?null:d),i.style.setProperty("--particle-time",`${performance.now()/l}`),i.style.setProperty("--particle-num",`${c}`),i.style.backgroundImage="paint(particle)";const w=S=>{const P=(S-x)/(e.duration??500);i.style.setProperty("--particle-time",`${P}`),P<1?h=requestAnimationFrame(w):h&&cancelAnimationFrame(h)};h=requestAnimationFrame(w)};return i.addEventListener(a,v),()=>{i.removeEventListener(a,v)}},[n,e]),n}function Bm(e,...o){const[n,r]=u.useState(e),i=u.useMemo(()=>o.filter(l=>typeof l=="function"?l(n,n):l).map(l=>typeof l=="string"?l:"Data is protected and cannot be modified."),[JSON.stringify(n),o]);return[n,l=>{i.length&&i.forEach(d=>{throw new Error(d)}),typeof l=="function"&&(l=l(n)),!_s(n,l)&&(o.length&&o.forEach(d=>{if(typeof d=="function"){const c=d(n,l);if(c)switch(typeof c){case"string":throw new Error(c);case"boolean":throw new Error("Data is protected and cannot be modified.")}}}),r(l))}]}function nn(e){const[o,n]=u.useState(e??document.title),r=u.useRef(document.title),i=u.useRef(!1);return u.useEffect(()=>{e&&(i.current=!0,document.title=e)},[]),u.useEffect(()=>{i.current=!0,document.title=o},[o]),u.useEffect(()=>{const a=document.querySelector("title");if(!a)return;const l=r.current,d=new MutationObserver(()=>{i.current||n(document.title),i.current=!1});return d.observe(a,{childList:!0,characterData:!0,subtree:!0}),()=>{d.disconnect(),document.title=l}},[]),[o,n]}function ko(e,o){const n=u.useMemo(()=>typeof o=="string"||typeof o=="number"?{content:o}:o?.badge??null,[o]);u.useEffect(()=>{if(e){if(!n){er(e);return}Om(e,n).then(er).catch(()=>er(e))}},[e,n])}function er(e){document.querySelectorAll("link[rel*='icon']").forEach(n=>n.remove());const o=document.createElement("link");o.rel="icon",o.type="image/png",o.href=e,document.head.appendChild(o)}async function Om(e,o){const{content:n,position:r="top-right",bgColor:i="#ff3b30",textColor:a="#fff",size:l=.5}=o;return new Promise((d,c)=>{const p=new Image;p.onload=()=>{try{const h=Math.max(p.naturalWidth||0,64),v=document.createElement("canvas");v.width=h,v.height=h;const b=v.getContext("2d");if(!b)return c("ctx failed");b.drawImage(p,0,0,h,h);const $=Math.max(h*l,14),y=$/2,x=h*.06;let w=0,S=0;switch(r){case"top-left":w=y+x,S=y+x;break;case"bottom-left":w=y+x,S=h-y-x;break;case"bottom-right":w=h-y-x,S=h-y-x;break;default:w=h-y-x,S=y+x}b.fillStyle=i,b.beginPath(),b.arc(w,S,y,0,Math.PI*2),b.fill();let P=String(n);typeof n=="number"&&n>99&&(P="99+"),b.fillStyle=a,b.font=`bold ${$*.65}px system-ui, -apple-system, sans-serif`,b.textAlign="center",b.textBaseline="middle",b.fillText(P,w,S+.5),d(v.toDataURL("image/png"))}catch(h){c(h)}},p.onerror=()=>{c(new Error(`Failed to load icon: ${e}`))},p.src=e})}function Dm(e,o={}){const{fontFamily:n="Arial, sans-serif",fontSize:r=24,textColor:i="#fff",bgColor:a="transparent",dpr:l=window.devicePixelRatio||1}=o,d=document.createElement("canvas");d.width=r*l,d.height=r*l;const c=d.getContext("2d");if(!c)throw new Error("Failed to get 2D context from canvas");return c.scale(l,l),c.fillStyle=a,c.fillRect(0,0,r,r),c.fillStyle=i,c.font=`bold ${r}px ${n}`,c.textAlign="center",c.textBaseline="middle",c.fillText(String(e),r/2,r/2),d.toDataURL("image/png")}const Vt={GettingStarted:{Overview:{route:"overview",title:"Overview"},Installation:{route:"installation",title:"Installation"},Usage:{route:"usage",title:"Usage"},FAQs:{route:"faqs",title:"FAQs"},Support:{route:"support",title:"Support"}},SentMail:{SentMail:{route:"sent-mail",title:"Sent mail"}},Draft:{Draft:{route:"draft",title:"Draft"}},StatefulHooks:{UsePrevious:{route:"usePrevious",title:"UsePrevious",status:"stable"},UseToggle:{route:"useToggle",title:"UseToggle",status:"stable"},UseLoading:{route:"useLoading",title:"UseLoading",status:"stable"},UseRecord:{route:"useRecord",title:"UseRecord",status:"experimental"},UseMap:{route:"useMap",title:"UseMap",status:"new"},UseMeta:{route:"useMeta",title:"UseMeta",status:"stable"},UseList:{route:"useList",title:"UseList",status:"stable"},UseTree:{route:"useTree",title:"UseTree",status:"stable"},UseReactive:{route:"useReactive",title:"UseReactive",status:"stable"},UseReactor:{route:"useReactor",title:"UseReactor",status:"new"},UseReactorStore:{route:"useReactorStore",title:"UseReactorStore",status:"deprecated"},UseReactorStoreContext:{route:"useReactorStoreContext",title:"UseReactorStoreContext",status:"deprecated"},UseReactorStoreRef:{route:"useReactorStoreRef",title:"UseReactorStoreRef",status:"deprecated"},UseTickState:{route:"useTickState",title:"UseTickState",status:"stable"},UseMemento:{route:"useMemento",title:"UseMemento",status:"stable"}},CallbackHooks:{UseTicker:{route:"useTicker",title:"UseTicker",status:"new"},UseDebounce:{route:"useDebounce",title:"UseDebounce",status:"new"},UseThrottle:{route:"useThrottle",title:"UseThrottle",status:"new"},UseUrl:{route:"useUrl",title:"UseUrl",status:"new"},UseWatch:{route:"useWatch",title:"UseWatch",status:"new"},UseWatchGetter:{route:"useWatchGetter",title:"UseWatchGetter",status:"new"},UseReactorListener:{route:"useReactorListener",title:"UseReactorListener",status:"new"},UseResize:{route:"useResize",title:"UseResize",status:"new"}},PromiseHooks:{UsePromise:{route:"usePromise",title:"UsePromise",status:"experimental"},UseFetch:{route:"useFetch",title:"UseFetch",status:"preview"},UseGenerator:{route:"useGenerator",title:"UseGenerator",status:"deprecated"}},UtilsHooks:{UseForceUpdate:{route:"useForceUpdate",title:"UseForceUpdate",status:"preview"},UseForm:{route:"useForm",title:"UseForm",status:"preview"},UseLazy:{route:"useLazy",title:"UseLazy",status:"preview"},UseLazyImg:{route:"useLazyImg",title:"UseLazyImg",status:"preview"},UseLazyAudio:{route:"useLazyAudio",title:"UseLazyAudio",status:"preview"},UseLazyVideo:{route:"useLazyVideo",title:"UseLazyVideo",status:"preview"},UseMixRef:{route:"useMixRef",title:"UseMixRef",status:"experimental"},UseSafe:{route:"useSafe",title:"UseSafe",status:"preview"},UseLocalStorage:{route:"useLocalStorage",title:"UseLocalStorage",status:"preview"},UseIndexDB:{route:"useIndexDB",title:"UseIndexDB",status:"preview"},useInfiniteScroll:{route:"useInfiniteScroll",title:"UseInfiniteScroll",status:"new"},useAutoPageSize:{route:"useAutoPageSize",title:"UseAutoPageSize",status:"new"}},LifecycleHooks:{UseBeforeMount:{route:"useBeforeMount",title:"UseBeforeMount",status:"preview"},UseMount:{route:"useMount",title:"UseMount",status:"preview"},UseUnmount:{route:"useUnmount",title:"UseUnmount",status:"preview"},UseUpdate:{route:"useUpdate",title:"UseUpdate",status:"preview"},UseUpdateEffect:{route:"useUpdateEffect",title:"UseUpdateEffect",status:"preview"},UseAsyncEffect:{route:"useAsyncEffect",title:"UseAsyncEffect",status:"preview"}},UiUxHooks:{UseTheme:{route:"useTheme",title:"UseTheme",status:"preview"},UseColor:{route:"useColor",title:"UseColor",status:"preview"},UseToast:{route:"useToast",title:"UseToast",status:"experimental"},UseGuide:{route:"useGuide",title:"UseGuide",status:"experimental"},UseVirtualArea:{route:"useVirtualArea",title:"UseVirtualArea",status:"deprecated"},UseRipple:{route:"useRipple",title:"UseRipple",status:"experimental"},UseParticle:{route:"useParticle",title:"UseParticle",status:"experimental"},UseHoudini:{route:"useHoudini",title:"UseHoudini",status:"preview"}},EventHooks:{UseEmitter:{route:"useEmitter",title:"UseEmitter",status:"experimental"},UseReceiver:{route:"useReceiver",title:"UseReceiver",status:"experimental"},UseBroadCastChannel:{route:"useBroadCastChannel",title:"UseBroadCastChannel",status:"experimental"},UseProvide:{route:"useProvide",title:"UseProvide",status:"experimental"},UseInject:{route:"useInject",title:"UseInject",status:"experimental"}},OtherHooks:{UseProtect:{route:"useProtect",title:"UseProtect",status:"experimental"},UseRaf:{route:"useRaf",title:"UseRaf",status:"preview"},UseRafState:{route:"useRafState",title:"UseRafState",status:"preview"},UseReflect:{route:"useReflect",title:"UseReflect",status:"experimental"},UseBatchHooks:{route:"useBatchHooks",title:"UseBatchHooks",status:"experimental"},UseClickAway:{route:"useClickAway",title:"UseClickAway",status:"preview"},UseConsoleLog:{route:"useConsoleLog",title:"UseConsoleLog",status:"experimental"},UseCookie:{route:"useCookie",title:"UseCookie",status:"preview"},UseDimensions:{route:"useDimensions",title:"UseDimensions",status:"preview"},UseSafeArea:{route:"useSafeArea",title:"UseSafeArea",status:"preview"},UseScroll:{route:"useScroll",title:"UseScroll",status:"preview"},UseSingleTon:{route:"useSingleTon",title:"UseSingleTon",status:"preview"},UseMediaQuery:{route:"useMediaQuery",title:"UseMediaQuery",status:"preview"},UseMousePosition:{route:"useMousePosition",title:"UseMousePosition",status:"preview"},UseNetwork:{route:"useNetWork",title:"UseNetWork",status:"experimental"},UseOverflow:{route:"useOverflow",title:"UseOverflow",status:"preview"},UseWhyDidYouUpdate:{route:"useWhyDidYouUpdate",title:"UseWhyDidYouUpdate",status:"experimental"},UseEyeDropper:{route:"useEyeDropper",title:"UseEyeDropper",status:"preview"},UseHover:{route:"useHover",title:"UseHover",status:"preview"},UseKeyPress:{route:"useKeyPress",title:"UseKeyPress",status:"preview"},UseBattery:{route:"useBattery",title:"UseBattery",status:"experimental"},UseTitle:{route:"useTitle",title:"UseTitle",status:"new"},UseFavicon:{route:"useFavicon",title:"UseFavicon",status:"new"}}},V=e=>t("li",{style:{marginBottom:"0.5rem"},...e});function Um(e){return t("div",{style:{width:"fit-content",height:"fit-content"},css:e.css,onClick:e.onClick,children:t(ym,{style:{transform:"rotateY(180deg)"},fontSize:"small"})})}const hi=(e,o,n,r)=>{navigator.clipboard.writeText(e??"").then(()=>{o&&o()}).catch(i=>{n&&n(i||new Error("Copy failed with some unknown error"))}).finally(()=>{r&&r()})},mi=(e,o,n,r)=>{const i=document.createElement("textarea");i.value=e||"",document.body.appendChild(i),i.focus(),i.select();const a=document.execCommand("copy");document.body.removeChild(i),a?o&&o():n&&n(new Error("Copy failed with some unknown error"))};let lr=(e,o,n,r)=>{navigator.clipboard&&window.isSecureContext?(hi(e,o,n,r),lr=hi):(mi(e,o,n),lr=mi)};const cr=e=>{const o=lo(),[n,r]=u.useState(e.defaultOpen||!1),i=()=>r(!n),a=()=>{lr(e.children,()=>{o("Copied to clipboard")},()=>{o("Failed to copy to clipboard")})};return s("div",{css:zm,children:[t("div",{css:Fm,children:n&&t(Um,{onClick:a})}),t(dt,{in:n,children:t(be,{theme:"vscDarkPlus",lang:e.lang??"tsx",children:e.children})}),s("div",{css:_m,children:[t(E,{className:"CodexBoxBtn",onClick:i,size:"small",children:t(pm,{})}),t(E,{className:"CodexBoxBtn",onClick:a,size:"small",children:t(fm,{fontSize:"small"})}),t(E,{className:"CodexBoxBtn",onClick:()=>{},size:"small",children:t(ll,{fontSize:"small"})})]})]})},zm={name:"bjn8wh",styles:"position:relative"},Fm={name:"1f4m62j",styles:"position:absolute;top:16px;right:8px;z-index:1;color:gray;cursor:pointer;padding:8px 6px 2px 6px;border-radius:4px;&:hover{background-color:#333;}&:active{transition:background-color 0.1s ease-in-out;background-color:#444;}"},_m={name:"7ggdfk",styles:"display:flex;justify-content:flex-end;align-items:center;gap:0.5em"},Wm={$article:{Consideration:"注意事项"},useWatch:{desc:"一个监听对象某具名属性变化的 hook。",detail:s(g,{children:["useWatch 是一个用于监听对象属性变化的 hook，它接受三个参数，分别是：",s("ol",{children:[t("li",{children:"目标对象"}),t("li",{children:'目标属性路径 (形如 "a.b.c" 或者 ["a", "b", "c"]) 或者一个 getter 函数'}),t("li",{children:"回调函数"})]}),"当目标对象的目标属性发生变化时，useWatch 会调用回调函数，回调函数接受两个参数，分别是：",s("ol",{children:[t("li",{children:"旧值"}),t("li",{children:"新值"})]}),"例如："]}),consideration:s("ol",{children:[t(V,{children:"目标应该是一个对象"}),t(V,{children:"目标属性路径应该是一个字符串或者字符串数组，更推荐后者"}),t(V,{children:"回调函数应该是一个函数"}),s(V,{children:["默认情况下，返回值不会有明确的类型推断，因为从复杂对象中获取类型是困难的，但是你可以手动指定类型，例如：",t("code",{children:'const a: string = useWatch(obj, "a")'}),"。与此同时，回调函数会自动为旧值和新值分配类型。"]}),t(V,{children:"严格模式会影响获取特殊键的属性，并可能导致能量消耗，最好的方法是使用数组作为路径而不是字符串路径与严格模式。"}),s(V,{children:["如何获取被监听的值 ","( 比如 c in const obj = { a: { b : { c : 1 } } } )","?",t("p",{children:"有四种方式："}),s("ol",{children:[t("li",{children:t(be,{children:'const c = useWatch(obj, "a.b.c", (a: number|undefined, b) => {})'})}),t("li",{children:t(be,{children:'const c: number|undefined = useWatch(obj, "a.b.c", (a, b) => {})'})}),t("li",{children:t(be,{children:'const c = useWatch<typeof obj, number>(obj, "a.b.c", (a, b) => {})'})}),t("li",{children:t(be,{children:'const c: PathValue<typeof obj, "a.b.c"> = useWatch(obj, "a.b.c", (a, b) => {})'})}),t("p",{children:'第四种方式只适用于字符串路径而不是数组路径，并且如果路径中的一个键包含 "." 字符，则推断将失败。'})]})]}),t("p",{children:'因此，建议避免在对象中使用包含 "." 字符 的字符串作为键，然后在非严格模式下使用字符串或数组路径，从字符串路径推断出 PathValue。一切都会很好。 此外，使用 getter 替代路径，在这种情况下，你需要确认你的 getter 总能正确工作。'})]})}},lt=()=>t("span",{css:$css`color: gray;`,children:"Going to complete"}),Hm={$article:{Consideration:"Consideration"},useWatch:{desc:"A hook to watch certain property in an object.",detail:s(g,{children:["useWatch is a hook that is used to watch the change of certain property, it accepts three parameters, which are:",s("ol",{children:[t("li",{children:"target object"}),t("li",{children:'target property path (like "a.b.c" or ["a", "b", "c"]) or a getter function'}),t("li",{children:"callback function"})]}),"When the target property of the target object changes, useWatch will call the callback function, which accepts two parameters, which are:",s("ol",{children:[t("li",{children:"old value"}),t("li",{children:"new value"})]}),"For example:"]}),$p1:"",consideration:s("ol",{children:[t(V,{children:"target object should be type of object"}),t(V,{children:"target property path should be type of string or array of string, the latter is suggested"}),t(V,{children:"callback function should be type of function"}),s(V,{children:["default, the returned will has no excipit type infer, because inter a type from a complex object is difficult, but you can assign type by yourself, like this: ",t("code",{children:'const a: string = useWatch(obj, "a")'}),". In the meantime, callback function will auto assign type to old value and new value"]}),t(V,{children:"the strict will make effects to get the property with special key and may cause energy consumption, the best way is to use array as path instead of string path with strict mode."}),s(V,{children:["How can I get valueType watched ","( like c in const obj = { a: { b : { c : 1 } } } )","?",t("p",{children:"There are five ways:"}),s("ol",{children:[t("li",{children:t(be,{lang:"ts",children:'const c = useWatch(obj, "a.b.c", (a: number|undefined, b) => {})'})}),t("li",{children:t(be,{lang:"ts",children:'const c: number|undefined = useWatch(obj, "a.b.c", (a, b) => {})'})}),t("li",{children:t(be,{lang:"ts",children:'const c = useWatch<typeof obj, number>(obj, "a.b.c", (a, b) => {})'})}),t("li",{children:t(be,{lang:"ts",children:'const c: PathValue<typeof obj, "a.b.c"> = useWatch(obj, "a.b.c", (a, b) => {})'})}),t("li",{children:t(be,{lang:"ts",children:"const c = useWatch(obj, (state) => state.a.b.c, (a, b) => {})"})}),t("p",{children:'The fourth way is only work with string path not array path, and infer will fail if the one key in path includes "." character.'})]})]}),t("p",{children:'Therefore, it is suggested to avoid using string includes "." as keys in your object, and then run with string or array path or under non-strict mode with PathValue inferred from the string path. Everything will be fine. Otherwise, use getter instead of path, in this case, you need to confirm your getter always works correctly.'})]}),$best:t("ul",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(g,{}),params:{},return:{}}},useUrl:{desc:"A hook to get url params.",detail:s(g,{children:["useUrl is a hook that is used to listen url and get params, it accepts four parameters.",s("ol",{children:[s(V,{children:[t("strong",{children:"callback (?)"}),": The function will be called when url changes."]}),s(V,{children:[t("strong",{children:"name (?)"}),": The name of url listener, if you have multiple url listeners, you can use this parameter to distinguish them."]}),s(V,{children:[t("strong",{children:"immediate (false)"}),": The function will be called immediately when url changes."]}),s(V,{children:[t("strong",{children:"config (?)"}),": The configuration of the params parser.",s("ol",{children:[s(V,{children:[t("strong",{children:"mode (?)"}),': The mode of the params parser: `"string"` | `"auto"` = `"auto"`.']}),s(V,{children:[t("strong",{children:"autoParams (?)"}),": The parameters to treat as auto."]}),s(V,{children:[t("strong",{children:"stringifyParams (?)"}),": The parameters to treat as string."]}),s(V,{children:[t("strong",{children:"custom (?)"}),": The custom parser of certain query parameters."]})]})]})]}),"For example:"]}),consideration:s(g,{children:[t("strong",{children:"Type parameters"}),t("ol",{children:s("li",{children:[t("strong",{children:"T"})," - `string` or `object`",s("ul",{children:[t("li",{children:'The string to convert, like `"http://localhost?id=1&name=evan"`'}),s("li",{children:["object: object to inferred as, like ",t("code",{children:'`{ id: "1", name: "evan" }`'})]})]})]})}),s("ol",{children:[s("li",{children:[t("strong",{children:"Mode"}),' - The mode to use when converting: `"string"` | `"fuzzy"` | `"auto"` | `"strict"` | `"any"` = `"auto"`.']}),s("li",{children:[t("strong",{children:"StrictParams"})," - The parameters to treat as strict."]}),s("li",{children:[t("strong",{children:"FuzzyParams"})," - The parameters to treat as fuzzy."]})]})]})},useProtect:{desc:"A hook to protect your state.",detail:s(g,{children:["useProtect is a hook that is used to protect your state being changed:",s("ol",{children:[t("li",{children:"initialValue"}),t("li",{children:"Conditions to protect"})]}),"For example:"]}),consideration:s("ol",{children:[t(V,{children:"initialValue is type of any"}),t(V,{children:"Conditions to protect could be type of boolean, string or null."}),s("ul",{children:[s(V,{children:[t("strong",{children:"boolean"}),": if the condition is true, the state will be protected with default error message."]}),s(V,{children:[t("strong",{children:"string"}),": if the condition is not empty string, the state will be protected with the string as error message."]}),s(V,{children:[t("strong",{children:"null"}),": if the condition is null, the state will not be protected"]})]})]})},useToggle:{desc:"A hook to toggle boolean state.",detail:s(g,{children:["useToggle is a hook that is used to toggle boolean state:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," (?) : boolean, default is false"]}),s("li",{children:[t("strong",{children:"valueMap"})," (?) : the returned value map"]}),s("ul",{children:[s("li",{children:[t("strong",{children:"true"})," (?) : the value when state is true, default is true"]}),s("li",{children:[t("strong",{children:"false"})," (?) : the value when state is false, default is false"]})]})]}),"For example:"]}),consideration:t("ol",{children:t(V,{children:"initialValue is type of boolean"})}),$p1:"configure the value mapping"},useLoading:{desc:"A hook to toggle loading state.",detail:s(g,{children:["useLoading is a hook that is used to manage loading state:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," (?) : loading map"]}),s("li",{children:[t("strong",{children:"options"})," (?) : the config of value formatter"]}),s("ul",{children:[s("li",{children:[t("strong",{children:"boolify"})," (?) : the value when state is true, default is true"]}),s("li",{children:[t("strong",{children:"setType"}),' (?) : invoke setter using "override" or "spread"']})]})]}),"For example:"]}),consideration:s("ol",{children:[t(V,{children:"Returned Value is an array merged with object like the struct following : "}),t(be,{lang:"text",theme:"oneLight",children:`
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
`}),t(V,{children:"When you use loading in count way, you must confirm that plus times is always same with minus times"}),t(V,{children:"By default, the loading value will be false when the loading value is 0, you can disable it by setting boolify to false"}),s(V,{children:["By default, the set actions will ",t("strong",{children:"override"}),' the old value, you can disable it by setting setType to "spread"']})]}),$p1:"You can use loading in count way, that means you can plus or minus loading value, and the loading state will be true when the value is greater than 0, otherwise false."},useMeta:{desc:"A React Hook that returns a meta state and a function to set the meta state",detail:s(g,{children:[t("h4",{children:"Parameters: "}),s(V,{children:[t("strong",{children:"initialObject"})," : The initial state object of the meta state."]}),s(V,{children:[t("strong",{children:"deepSet"})," (?): Whether to use deep clone when setting the meta state. Defaults to false."]})]}),$p1:"Use setObj to update certain property in object and rerender the component. If you directly reassign properties in object, the view will only sync at next rerender.",$p2:"Set property from the old property",$p3:"Reset the whole object directly or from old object",consideration:s("ol",{children:[t(V,{children:"The state must be an object."}),t(V,{children:"No deepSet will work quicker."}),s(V,{children:["Do not reassign properties during setting :",s("div",{style:{marginTop:"4px"},children:["It is ",t("strong",{children:"bad"})," and will not work: ❌"]}),t(be,{lang:"ts",children:"set('count', obj.count++)"}),t("div",{children:"It is ok: ✅"}),t(be,{lang:"ts",children:"set('count', obj.count + 1)"}),t("div",{children:"It is the best: ✅"}),t(be,{lang:"ts",children:"set('count', (pre) +> pre + 1)"})]})]}),$faqs:s("ul",{children:[s(V,{children:[t("strong",{children:"Q"}),": Why useMeta instead of useState?"]}),s(V,{children:[t("strong",{children:"A"}),": Because useMeta makes it easier to set deep properties of the state."]}),t("br",{}),s(V,{children:[t("strong",{children:"Q"}),": What's the difference of deepSet or not?"]}),s(V,{children:[t("strong",{children:"A"}),": When deepSet is true, the state will be deep cloned when setting the state, otherwise it will be shallow cloned. Deepclone is slower than shallowclone, but it is safer. Therefore, when the state object is huge, you should avoid using deepSet unless necessary."]})]})},useReactive:{desc:"A hook to make your object reactive.",detail:s(g,{children:["useReactive is a hook that is used to make your object reactive:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," : primitives, array, object, Date, Map or Set"]}),s("li",{children:[t("strong",{children:"deep"})," (?) : boolean, Whether to deep reactive, default is true"]})]}),"For example:"]}),$p1:"Create a reactive proxy for an object",$p2:"Create a reactive proxy for an array",$p3:"Create a reactive proxy for a primitive value. In this case, the returned struct will be like this: { value: 1 }, and you can get the value by using value property.",consideration:s(g,{children:[s("ol",{children:[t(V,{children:"initialValue could be of primitives, array, object, Date, Map and Set."}),t(V,{children:"deep is type of boolean"})]}),s("p",{style:{padding:"20px",background:"#cff",borderRadius:"4px"},children:[t("strong",{children:"ℹ️ Notice"})," : Every time you call a method on the reactive object will cause rerender."]}),s("p",{style:{padding:"20px",background:"#ffd",borderRadius:"4px"},children:[t("strong",{children:"⚠️ Warning"})," : useReactive makes proxies for all properties on the target as many as possible, some apis will behave differently from the original."]})]}),$best:t(g,{children:s("ul",{children:[s(V,{children:[t("strong",{children:"Better performance"})," : Use shallow reactive, and define a property to rerender."]}),s(V,{children:[t("strong",{children:"Better reactive"})," : Use deep reactive, rerender every when property changes."]}),s(V,{children:[t("strong",{children:"Better security"})," : Use unwrap (exported from useReactive) to control reactive data, and reassign it to the reactive proxy."]})]})}),$faqs:s("ul",{children:[s(V,{children:[t("strong",{children:"Q"}),": Why useReactive instead of useState?"]}),s(V,{children:[t("strong",{children:"A"}),": Because useReactive simplifies the process of making object reactive. That is you can play react.js like Vue.js."]}),t("br",{}),s(V,{children:[t("strong",{children:"Q"}),": What's the difference of deep or not?"]}),s(V,{children:[t("strong",{children:"A"}),": When deep is true, the object will be deep reactive, otherwise it will be shallow reactive. Deep reactive means every properties on object will get proxied. Shallow reactive means only the first level properties will get proxied."]})]}),$apis:{generics:t("ul",{children:s("li",{children:[t("strong",{children:"T"}),": suggest to extends primitives | Array | object | Date | Map | Set"]})}),params:{},return:{}}},useList:{desc:"A hook to manage list state.",detail:t(g,{}),consideration:s("ol",{children:[s(V,{children:[t("strong",{children:"initialValue"})," : array"]}),s(V,{children:[t("strong",{children:"options"})," : object"]})]}),$p1:"Just render the temporary list view.",$p2:"Control the temporary list data, as you see, the original list data is still. Only when you save the list, will the original list get updated.",$best:t("ul",{children:s(V,{children:[t("strong",{children:"Best management"})," : Use isolation and control together."]})}),$faqs:s(g,{children:[s(V,{children:[t("strong",{children:"Q"}),": Why useList instead of useState?"]}),s(V,{children:[t("strong",{children:"A"}),": Because useList makes it easier to manage list state."]}),t("br",{}),s(V,{children:[t("strong",{children:"Q"}),": What abilities does useList have?"]}),s(V,{children:[t("strong",{children:"A"}),": useList has lots of abilities:",s("ol",{children:[s("li",{children:[t("strong",{children:"render"}),": render the list view"]}),s("li",{children:[t("strong",{children:"isolation"}),": isolate the view data and original data."]}),s("li",{children:[t("strong",{children:"control"}),": provide many ways to control the list data."]}),s("li",{children:[t("strong",{children:"backtracking"}),": provide ability to trace back the list data."]}),s("li",{children:[t("strong",{children:"pagination"}),": provide ability to paginate the list data."]}),t("span",{children:"..."})]})]})]}),$apis:{generics:t(g,{children:s("li",{children:[t("strong",{children:"T"}),": typeof list elements"]})}),params:{},return:{}}},useVirtualArea:{desc:"A hook to render huge list in a virtual area way.",detail:s(g,{children:["useVirtualArea is a hook that is used to render huge list in a virtual area way:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"options"})," : object"]}),s("li",{children:[t("strong",{children:"dependencies"})," : array"]})]}),"For example:"]}),$p1:"",consideration:s("ol",{children:[t(V,{children:"options is type of object"}),t(V,{children:"dependencies is type of array"}),t(V,{children:"options.items is required"}),t(V,{children:"options.renderItem is required"}),t(V,{children:"options.hasMore is required"}),t(V,{children:"options.loadMoreItems is required"}),t(V,{children:"options.height is required"})]}),$faqs:s("ul",{children:[s(V,{children:[t("strong",{children:"Q"}),": Why useVirtualArea instead of useState?"]}),s(V,{children:[t("strong",{children:"A"}),": Because useVirtualArea makes it more efficient to render huge list in a virtual area way."]}),t("br",{}),s(V,{children:[t("strong",{children:"Q"}),": What is virtual area?"]}),s(V,{children:[t("strong",{children:"A"}),": Virtual area is a virtual area in your page that is used to render huge list. It is not really a area, but a concept."]}),t("br",{}),s(V,{children:[t("strong",{children:"Q"}),": How about the performance?"]}),s(V,{children:[t("strong",{children:"A"}),": It is much more efficient than using useState to render huge list. You can try it by yourself. The performance is similar to react-window."]})]}),$apis:{generics:s("ul",{children:[s("li",{children:[t("strong",{children:"C"}),': extends keyof React.JSX.IntrinsicElements. Default: "div"']}),s("li",{children:[t("strong",{children:"I"}),': extends keyof React.JSX.IntrinsicElements. Default: "div"']}),s("li",{children:[t("strong",{children:"L"}),': extends keyof React.JSX.IntrinsicElements. Default: "div"']})]}),params:{},return:{}}},useReactor:{desc:"A state hook based on Reactor Model.",detail:s(g,{children:[t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," : object"]}),s("li",{children:[t("strong",{children:"plugins"})," : ","ReactorPlugin<T>[]"]})]}),"For example:"]}),consideration:s(g,{children:[s("ol",{children:[t(V,{children:"Direct mutation of reactor.value properties won't trigger re-renders. Always use set() or setValue() to update state."}),t(V,{children:'Use path-based set() method (e.g., set("user.name", "John")) for updating nested properties instead of direct assignment.'}),t(V,{children:"Reactor is best suited for managing complex object state. For simple primitive values, consider using useState instead."}),t(V,{children:"Plugin actions are executed synchronously during state changes. Avoid heavy computations in plugin callbacks."}),t(V,{children:"The event bus (emit/on) is isolated to Reactor instances only and doesn't share events with useEmitter or useReceiver hooks."})]}),s("p",{style:{padding:"20px",background:"#ffd",borderRadius:"4px"},children:[t("strong",{children:"⚠️ Warning"})," : please invoke subscribe, on and listeners in useEffect hook area to avoid some unexpectable problems."]})]}),$p1:"Basic usage, manage a state. You can use get() to get certain property by path or directly access that by keys chain. You can use set() to update certain property value by path.",$p1_1:"Because this state is typeof object, therefore, the third button can directly change the stored value, but will not trigger the rerender.",$p2:"Register a plugin to the Reactor Instance, and dipatch its name to invoke the plugin",$p3:"Import listen from useReactor, listen the state changing, and do something in then code block.",$p4:"Ressign the value of Reactor instance can override the state. You can also use setValue to do that.",$p5:"You can clone a new Reactor from an existing Reactor instance, but they will point to the same state. CloneValue will just clone value of state.",$p6:"You can assign a default value to Reactor, and when you invoke reset, the value will be reset to default value.",$p7:"Different Reactor instances can communicate with each other by a global event bus, you can emit a event and use on to receive a event payload.",$p7_notice:t(g,{children:s("p",{style:{padding:"20px",background:"#cff",borderRadius:"4px"},children:[t("strong",{children:"ℹ️ Notice"})," : Reactor Event Bus is dependent from the Emitter's."]})}),$best:s("ul",{children:[s(V,{children:[t("strong",{children:"Component Communication"}),": Use Reactor's event bus (emit/on) to sync data between components without prop drilling."]}),s(V,{children:[t("strong",{children:"Plugin System"}),": Leverage plugins for cross-cutting concerns like logging, validation, or persistence to keep component logic clean."]}),s(V,{children:[t("strong",{children:"Path-based Access"}),': Use get("user.profile.name") and set("user.profile.name", value) for deeply nested properties instead of manual traversal.']}),s(V,{children:[t("strong",{children:"State Subscription"}),": Use subscribe() to react to state changes in other parts of your application without tight coupling."]}),s(V,{children:[t("strong",{children:"Default Values"}),": Set default values with setDefaultValue() and use reset() to easily restore initial state (useful for forms)."]}),s(V,{children:[t("strong",{children:"State Cloning"}),": Use cloneValue() when you need an independent copy of the state for comparison or undo functionality."]})]}),$faqs:s("ul",{children:[s(V,{children:[t("strong",{children:"Q"}),": Why useReactor instead of useState?"]}),s(V,{children:[t("strong",{children:"A"}),": Reactor provides advanced features like path-based access, subscriptions, plugins, event system, and easier state management for complex objects. It's ideal when you need more than simple state updates."]}),s(V,{children:[t("strong",{children:"Q"}),": When should I use plugins?"]}),s(V,{children:[t("strong",{children:"A"}),": Use plugins to add custom logic that runs on state changes or actions, such as logging, validation, persistence, or side effects. Plugins help keep your component code clean and reusable."]}),s(V,{children:[t("strong",{children:"Q"}),": Can I use Reactor outside of React components?"]}),s(V,{children:[t("strong",{children:"A"}),": Yes, you can create a Reactor instance directly using `new Reactor(initialValue)`, but it won't trigger React re-renders. Use useReactor hook inside components for automatic re-rendering."]})]}),$apis:{generics:t("ul",{children:s("li",{children:[t("strong",{children:"T"}),": typeof state value."]})}),params:{},return:{}}},useTree:{desc:"A hook to manage tree state.",detail:s(g,{children:[t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," : array"]}),s("li",{children:[t("strong",{children:"options"})," : object"]})]}),"For example:"]}),$p1:"Here is a simple example to show how to use useTree hook.",consideration:s("ol",{children:[s(V,{children:["initialValue is type of ",t("span",{className:"txt-secondary",children:"TreeNode"})]}),t(V,{children:"options is type of object"})]}),$best:t("ul",{children:s(V,{children:[t("strong",{children:"Control the virtual nodes"})," : Avoid to change the original nodes directly."]})}),$faqs:s("ul",{children:[s(V,{children:[t("strong",{children:"Q"}),": Why useTree instead of useState?"]}),s(V,{children:[t("strong",{children:"A"}),": Because useTree makes it easier to manage and render tree state."]})]}),$apis:{generics:s(g,{children:[s("li",{children:[t("strong",{children:"T"}),": extends TreeNode, type of node"]}),s("li",{children:[t("strong",{children:"K"}),": extends string, key name of node as idKey"]})]}),params:{},return:{}}},useBatchHooks:{desc:"A hook to batch hooks.",detail:s(g,{children:["useBatchHooks is a hook that is used to batch hooks:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"hook"})," : the hook to be executed"]}),s("li",{children:[t("strong",{children:"count"})," (?) : number of times to execute the hook, default is 1"]})]}),"For example:"]}),$p1:"You can batch hooks to create a series of ripple refs and bind them to a series of elements.",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useMemento:{desc:"A hook to manage a state as memento",detail:s(g,{children:[t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialState"})," : any"]}),s("li",{children:[t("strong",{children:"config"})," : object"]})]}),"For example:"]}),$p1:"The initial state will be the first state in the history. By default, the history size is 10, and the strict mode is false. Therefore, the history will be 10 states at most, and an Error would be thrown out when the idKey is not found.",$p2:"You should know that if you invoke clear api, all will be cleared, including the history, so this action is not rollbackable. Also, after clear, current idKey will be set to NaN. (In future versions, it may be set to other falsy value such null.)",consideration:s("ol",{children:[t(V,{children:"initialState is type of any"}),t(V,{children:"config is type of object of MementoConfig"})]}),$best:t("ul",{children:s(V,{children:[t("strong",{children:"Strict Mode"})," : Use strict mode and set idKey to a unique value."]})}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},usePrevious:{desc:"A hook to store previous state.",detail:s(g,{children:["usePrevious is a hook that is used to store previous state:",t("h4",{children:"Parameters : "}),t("ol",{children:s("li",{children:[t("strong",{children:"state"})," : any state from useState"]})}),"For example:"]}),$p1:"The previous state will be undefined when the state is the first state.",consideration:t("ol",{children:"It is just a simple hook, no consideration."}),$best:t(g,{children:"This is a React component that allows users to toggle between a light and dark theme. The usePrevious hook is used to keep track of the previous theme, and a message is logged to the console whenever the theme changes."}),$faqs:s("ul",{children:[s(V,{children:[t("strong",{children:"Q"}),": Why usePrevious instead of useState?"]}),s(V,{children:[t("strong",{children:"A"}),": Because it is more convenient for readonly state."]}),t("br",{})]}),$apis:{generics:t(g,{children:s("li",{children:[t("strong",{children:"T"}),": extends any, type of state."]})}),params:{state:"any state from useState"},return:{previous:"the previous state"}}},useEmitter:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useReceiver:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useReflect:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useProvide:{desc:"A hook to share a state with other components.",detail:s(g,{children:["useProvide is a hook that is used to share a state with other components, and it is based on"," ",t("a",{href:"#/docs/useEmitter",children:"useEmitter"}),":",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"name"})," : the name of the state, should be unique"]}),s("li",{children:[t("strong",{children:"state"})," : any state from useState"]})]}),"For example:"]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useInject:{desc:"A hook to inject a state from other components.",detail:s(g,{children:["useInject is a hook that is used to inject a state from other components, and it is based on"," ",t("a",{href:"#/docs/useReceiver",children:"useReceiver"}),":",t("h4",{children:"Parameters : "}),t("ol",{children:s("li",{children:[t("strong",{children:"name"})," : the name of the state, should be unique"]})}),"For example:"]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useGuide:{desc:"",detail:t(g,{}),$p1:"Make guidence for elements with certain ids.",$p2:s(g,{children:[s("p",{children:[t("strong",{children:"Try to wrapp the target element with Target component."})," The wrapped is different from the raw, they have different method to render and insert the guide element into DOM tree."]}),t("p",{children:"By raw way, useGuide will create a div wrapper on every guidence element, and append it to the target element."}),s("p",{children:["By Target wrapped way, useGuide will wrap the target element with pure fregment, and render the guidence element into the fregment with",t("code",{children:" React.createPortal "}),"."]}),t("p",{children:"The expressional difference in visiable is that the wrapped way will higher the zIndex of target element than mask, and the raw way will not. (Actually, the raw way will higher target too, but for some reason, it may not work.)"})]}),consideration:s("ol",{children:[t(V,{children:"target element should have id"}),t(V,{children:"the id should be unique"})]}),$best:s("ul",{children:[t(V,{children:"Ensure the parent element of the target element has a position of either 'relative' or 'absolute'. This allows the guide element (with 'absolute' positioning) to be positioned relative to the parent element."}),t(V,{children:"If the parent element is a scroll container, ensure it has sufficient height and width to contain all its content. This allows the guide element to correctly follow its target element when the user scrolls."}),t(V,{children:"Avoid using 'overflow: hidden' on the parent element if possible. This could cause the guide element to be clipped or hidden."}),t(V,{children:"If the parent element has a high 'z-index' value, you may need to adjust the 'z-index' of the guide element to ensure it appears above the parent element."}),t(V,{children:"If the parent element has padding or borders, these values may need to be considered in the positioning calculations for the guide element."})]}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useReactorStore:{desc:"A hook to store the Reactor instance.",detail:s("p",{style:{padding:"20px",background:"#fef",borderRadius:"4px"},children:[t("strong",{children:"⛔ Deprecated"})," : This hook is deprecated since"," ",t("span",{style:{color:"blue"},children:"v0.1.22"}),"."]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useReactorStoreContext:{desc:"A hook to share the Reactor instance with the react context.",detail:s("p",{style:{padding:"20px",background:"#fef",borderRadius:"4px"},children:[t("strong",{children:"⛔ Deprecated"})," : This hook is deprecated since"," ",t("span",{style:{color:"blue"},children:"v0.1.22"}),"."]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useReactorStoreRef:{desc:"A hook to set the Reactor instance to ref.",detail:s("p",{style:{padding:"20px",background:"#fef",borderRadius:"4px"},children:[t("strong",{children:"⛔ Deprecated"})," : This hook is deprecated since"," ",t("span",{style:{color:"blue"},children:"v0.1.22"}),"."]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useTickState:{desc:"A hook to manage state with tick.",detail:s(g,{children:["useTickState is a hook that is used to manage state with tick:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"initialValue"})," : any"]}),s("li",{children:[t("strong",{children:"tickBy"}),' : "onSetState" | "onChange"']})]}),"For example:"]}),$p1:"Tick by onSetState(default)",$p2:"Tick by onChange",consideration:s("ol",{children:[t(V,{children:`When tickby "onSetState", you'd better avoid abuse setState`}),t(V,{children:`When tickby "onChange", you'd better confirm your dependencies`})]}),$best:t("ul",{children:t(V,{children:'Tick by "onSetState", and before invoke setState check whether the new value is differ from the old.'})}),$faqs:s("ul",{children:[s(V,{children:[t("strong",{children:"Q"})," : Why I need useTickState?"]}),s(V,{children:[t("strong",{children:"A"})," : useTickState give you a more clear tag to tag whether the state changes"]})]}),$apis:{generics:t(g,{}),params:{},return:{}}},useReactorListener:{desc:"A hook to listen Reactor instance's value changes.",detail:s(g,{children:["useReactorListener is a hook that is used to listen Reactor instance's value changes:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"reactor"})," : Reactor instance"]}),s("li",{children:[t("strong",{children:"callback"})," : ReactorListener Callback"]}),s("li",{children:[t("strong",{children:"immediate"})," : boolean, default is false"]})]}),"For example:"]}),$p1:"The immediate listener will be invoked immediately when the listener is registered. Therefor, the first example will not get userCopy sync at initial, and the second example will.",consideration:s("ol",{children:[t(V,{children:"reactor is type of Reactor instance"}),t(V,{children:"callback is type of ReactorListenerCallback"})]}),$best:t("ul",{children:t(V,{children:"Use immediate listener to sync the value at initial."})}),$faqs:s("ul",{children:[s(V,{children:[t("strong",{children:"Q"})," : Why I need useReactorListener?"]}),s(V,{children:[t("strong",{children:"A"})," : useReactorListener allows you to listen a Reactor independently."]})]}),$apis:{generics:t(g,{}),params:{},return:{}}},useTicker:{desc:"A hook to manage a ticker.",detail:s(g,{children:["useTicker is a hook that is used to manage a ticker:",t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"fn"})," : Callback function"]}),s("li",{children:[t("strong",{children:"duration or options"})," : the duration of ticker's config"]}),s("li",{children:[t("strong",{children:"options"})," : ticker's config"]})]}),"For example:"]}),$p1:"",consideration:t("ol",{children:t("li",{children:"when immediate is true, only the first resume will call the callback immediately."})}),$best:t("ol",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(g,{}),params:{},return:{}}},useDebounce:{desc:"",detail:t(g,{children:"useDebounce is a hook that is used to debounce a function."}),$p1:"Try to click on the button frequently, and see whether the number changes 1 sec after your last click.",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t("ul",{children:s("li",{children:[t("strong",{children:"R"}),": suggest to extends primitives | Array | object | Date | Map | Set"]})}),params:{},return:{}}},useMap:{desc:"A React Hook that manages a Map state with convenient methods for manipulation.",detail:s(g,{children:["useMap is a hook that provides a convenient way to manage Map state in React. It wraps the native Map data structure and provides methods like set, get, del, and add to manipulate the map state. The returned map is readonly, which means you cannot use map.set() directly, but must use the provided set() method to trigger re-renders.",t("h4",{children:"Parameters:"}),t("ol",{children:s("li",{children:[t("strong",{children:"initialState"}),": T extends Object - The initial state object that will be converted to a Map."]})}),"For example:"]}),$p1:"Basic usage: initialize a map with an object, and use get() to retrieve values and set() to update values.",$h2:"Get and Set",$p2:"You can get properties from the map directly by `map.get` or by using get method, and set properties by using set method. `map.set` is omitted from the map.",$h3:"Four overloads of set",$p3:s(g,{children:["Set method has 4 overloads:",s("ol",{children:[t("li",{children:"set<K> = (key: K, value: T[K]): void;"}),t("li",{children:"set<K> = (key: K, setValueAction: (prev: T[K]) => T[K]): void"}),t("li",{children:"set(record, mode?: 'rehydrate' | 'override'): void"}),t("li",{children:"set(setMapAction: (prev: Map) => T | Map, mode?: 'rehydrate' | 'override'): void"})]})]}),$p4:s(g,{children:[t("p",{children:"About 3rd and 4th overload, you can set second parameter to 'rehydrate' to rehydrate the map, or 'override' to override the map. If the mode not specified, it will be 'rehydrate' by default."}),t("p",{children:"About 4th overload, the return of setMapAction could be type of a Map instance of a plain object of T."})]}),$h4:"Del and Add",$p5:"You can delete a property by using del method, and add a property by using add method.",consideration:s("ol",{children:[t(V,{children:"Unless you del, the type of map.get is T[K] actually"}),t(V,{children:'Default set action mode is "rehydrate"'})]}),$best:t("ol",{children:t("span",{children:"If you prefer Map than Object, useMap is a good choice than useRecord"})}),$faqs:s("ul",{children:[s(V,{children:[t("strong",{children:"Q"}),": Why useMap instead of useState with Map?"]}),s(V,{children:[t("strong",{children:"A"}),": useMap provides convenient methods (set, get, del, add) and ensures immutability automatically. You don't need to manually create a new Map instance to trigger re-renders."]}),s(V,{children:[t("strong",{children:"Q"}),": What's the difference between 'rehydrate' and 'override' mode?"]}),s(V,{children:[t("strong",{children:"A"}),": 'rehydrate' merges new values with existing ones (keeps existing keys), while 'override' replaces the entire map (removes all existing keys)."]}),s(V,{children:[t("strong",{children:"Q"}),": Can I use map.set() directly?"]}),s(V,{children:[t("strong",{children:"A"}),": No, the returned map is readonly. You must use the provided set() method to trigger re-renders."]})]}),$apis:{generics:t(g,{}),params:{},return:{}}},useRecord:{desc:"useRecord is a hook that is used to manage an one-level record object.",detail:s(g,{children:[t("h4",{children:"Parameters : "}),t("ol",{children:s("li",{children:[t("strong",{children:"initialValue"})," : object"]})}),"For example:"]}),$p1:"You can use setRecord to set a property of the record object.",consideration:t("ol",{children:t(lt,{})}),$best:t("ul",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(g,{}),params:{},return:{}}},useResize:{desc:"",detail:t(g,{}),$p1:"Prop nothing, listen the resize event of window. Try to resize the window and see the changes.",$h2:"Listen an element",$p2:"Prop a ref, listen the resize event of the ref element. Try to drag the sliders to see the changes.",consideration:t("ol",{children:t(lt,{})}),$best:t("ul",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(g,{}),params:{},return:{}}},useThrottle:{desc:"useThrottle is a hook that is used to throttle a function to be called at most once in a certain period.",detail:s(g,{children:[t("h4",{children:"Parameters : "}),s("ol",{children:[s(V,{children:[t("strong",{children:"fn"})," : Callback function"]}),s(V,{children:[t("strong",{children:"interval"})," : number"]}),s(V,{children:[t("strong",{children:"options"})," : throttle's config"]})]}),"For example:"]}),$p1:"Click the button, and see whether the number changes only once during every second.",consideration:t("ol",{children:t(lt,{})}),$best:t("ul",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(g,{}),params:{},return:{}}},useWatchGetter:{desc:"A hook to watch the getter of a state.",detail:s(g,{children:[t("h4",{children:"Parameters : "}),s("ol",{children:[s("li",{children:[t("strong",{children:"getter"})," : Getter"]}),s("li",{children:[t("strong",{children:"callback"})," : WatcherCallback"]}),s("li",{children:[t("strong",{children:"updater"})," : Whether to return a manual reupdate function."]})]}),"For example:"]}),$p1:"The callback will be invoked when the getter result changes.",consideration:t("ol",{children:t(V,{children:"If you want to manually reupdate the getter, you can set the updater to true, and the return value will be an array like [value, reupdate func]."})}),$best:t("ul",{children:t(lt,{})}),$faqs:t("ul",{children:t(lt,{})}),$apis:{generics:t(g,{}),params:{},return:{}}},useTitle:{desc:"A React Hook for managing and monitoring the document title with automatic restoration.",detail:s(g,{children:[s("p",{children:[t("code",{children:"useTitle"})," provides a reactive way to manage the document title. It returns the current title and a setter function, allowing you to read and update the title dynamically."]}),t("p",{children:"The hook uses MutationObserver to detect external title changes (e.g., from other components or scripts) and automatically syncs the state. When the component unmounts, the original title is restored."})]}),$p1:"The hook returns an array with the current title and a setter function. Switch between tabs above to see different use cases including counters, notifications, timers, and status indicators.",consideration:s("ol",{children:[t("li",{children:"The document title is a global resource. Multiple components using this hook may conflict with each other."}),t("li",{children:"The hook uses MutationObserver which has good browser support but may not work in very old browsers."}),t("li",{children:"The original title is restored when the component unmounts, which may override titles set by other components."}),t("li",{children:"Frequent title updates (e.g., every second) may impact performance on low-end devices."})]}),$best:s("ul",{children:[t("li",{children:"Use descriptive titles that reflect the current page state or content."}),s("li",{children:["For notification counts, use format like ",t("code",{children:"(3) New Messages"})," to draw attention."]}),t("li",{children:"Avoid updating the title too frequently (more than once per second) to prevent performance issues."}),t("li",{children:"Place the hook at the top level of your component for consistent behavior."}),s("li",{children:["For timers or counters, consider using ",t("code",{children:"useEffect"})," to sync the title with state changes."]}),t("li",{children:"Keep titles concise - browser tabs have limited space for displaying titles."})]}),$faqs:s("ul",{children:[s("li",{children:[t("strong",{children:"Q: Will the original title be restored when the component unmounts?"}),t("br",{}),"A: Yes, the hook automatically restores the original document title when the component unmounts."]}),s("li",{children:[t("strong",{children:"Q: Can this hook detect title changes made by other components?"}),t("br",{}),"A: Yes, the hook uses MutationObserver to monitor the title element and automatically syncs with external changes."]}),s("li",{children:[t("strong",{children:"Q: What happens if multiple components use this hook?"}),t("br",{}),"A: They may conflict with each other since the document title is global. Consider using only one instance or coordinating between components."]}),s("li",{children:[t("strong",{children:"Q: Does this work in all browsers?"}),t("br",{}),"A: Yes, MutationObserver is supported in all modern browsers. For older browsers, the hook will still work but won't detect external changes."]}),s("li",{children:[t("strong",{children:"Q: Can I use this for SEO?"}),t("br",{}),"A: This hook changes the title dynamically on the client side. For SEO, set the initial title in your HTML or use server-side rendering."]})]}),$apis:{generics:t(g,{}),params:{initialTitle:"Optional initial title to set when the component mounts. If not provided, uses the current document title."},return:{"[0] title":"The current document title (reactive to external changes).","[1] setTitle":"Function to update the document title. Signature: (title: string) => void"}}},usePromise:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useGenerator:{desc:"A hook to manage a generator.",detail:s("p",{style:{padding:"20px",background:"#fef",borderRadius:"4px"},children:[t("strong",{children:"⛔ Deprecated"})," : This hook is deprecated since"," ",t("span",{style:{color:"blue"},children:"v1.2.2"}),"."]}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useFavicon:{desc:"A React Hook for dynamically setting the page favicon with optional badge support.",detail:s(g,{children:[s("p",{children:[t("code",{children:"useFavicon"})," allows you to dynamically change the favicon of your page and add badges to it. It supports multiple use cases including notification counters, status indicators, and custom badges."]}),t("p",{children:"The hook provides a simple API with function overloading: you can pass just a URL for basic usage, or pass a number/string for quick badge creation, or use the full options object for complete control."})]}),$p1:"The hook supports three usage patterns: basic (just URL), shorthand (URL + badge content), and full configuration (URL + options object). Switch between tabs above to see different examples.",consideration:s("ol",{children:[t("li",{children:"The favicon is a global resource - only one can be displayed at a time. If multiple components use this hook simultaneously, they will conflict."}),t("li",{children:"Badge rendering uses canvas, which may have CORS restrictions for cross-origin images. Use same-origin images when possible."}),t("li",{children:'Numbers over 99 will automatically display as "99+" to maintain readability.'}),t("li",{children:"The hook will remove all existing favicon elements and create a new one to avoid browser caching issues."})]}),$best:s("ul",{children:[s("li",{children:["Use the shorthand syntax ",t("code",{children:"useFavicon(url, count)"})," for simple badge counters."]}),s("li",{children:["When count is 0, pass ",t("code",{children:"undefined"})," or ",t("code",{children:"void 0"}),' to hide the badge instead of showing "0".']}),t("li",{children:"Place the hook at the top level of your component, not inside conditional statements."}),t("li",{children:"Use same-origin images to avoid CORS issues with canvas rendering."}),s("li",{children:["For notification badges, use red background (",t("code",{children:"#ff3b30"}),") to draw attention."]}),s("li",{children:["For status indicators, use small size (",t("code",{children:"size: 0.3"}),") and position at bottom-right."]})]}),$faqs:s("ul",{children:[s("li",{children:[t("strong",{children:"Q: Can I use this without a badge?"}),t("br",{}),"A: Yes, simply call ",t("code",{children:"useFavicon(iconUrl)"})," without the second parameter."]}),s("li",{children:[t("strong",{children:"Q: What happens if the icon fails to load?"}),t("br",{}),"A: The hook will fallback to the original icon URL without the badge."]}),s("li",{children:[t("strong",{children:"Q: Can I change the badge dynamically?"}),t("br",{}),"A: Yes, the hook will update the favicon whenever the iconUrl or badge options change."]}),s("li",{children:[t("strong",{children:"Q: What happens when the badge content exceeds 99?"}),t("br",{}),'A: Numbers over 99 will automatically display as "99+" to maintain readability.']}),s("li",{children:[t("strong",{children:"Q: Why is my badge not showing?"}),t("br",{}),"A: Check if the image is from the same origin. Cross-origin images may fail due to CORS restrictions."]})]}),$apis:{generics:t(g,{}),params:{iconUrl:"The URL of the favicon image.",badge:"Shorthand for badge content. Can be a string or number. When provided, creates a badge with default settings.",options:"Full configuration object for the favicon.","options.badge":"Badge configuration to overlay on the favicon.","options.badge.content":"The content to display in the badge. Numbers over 99 will display as '99+'.","options.badge.position":"Badge position. One of: 'top-right', 'top-left', 'bottom-right', 'bottom-left'. Defaults to 'top-right'.","options.badge.bgColor":"Badge background color. Defaults to '#ff3b30'.","options.badge.textColor":"Badge text color. Defaults to '#fff'.","options.badge.size":"Badge size as a ratio of icon size (0-1). Defaults to 0.5."},return:{void:"This hook does not return any value."}}},useClickAway:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useCookie:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useDimensions:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useHover:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useKeyPress:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useMousePosition:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useOverflow:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useRaf:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useRafState:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useScroll:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useSafeArea:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useAsyncEffect:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useDimensionsById:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},useInfiniteScroll:{desc:"A React Hook for implementing infinite scrolling with automatic load detection using IntersectionObserver.",detail:s(g,{children:[s("p",{children:[t("code",{children:"useInfiniteScroll"})," provides a simple way to implement infinite scrolling in React applications. It automatically detects when a loader element becomes visible and triggers asynchronous data loading using the browser’s ",t("code",{children:"IntersectionObserver"})," API."]}),t("p",{children:"The hook manages the entire lifecycle of an infinite list: loading state, accumulated items, concurrency control, and viewport/container visibility detection. It also supports both page-level scrolling and scrollable container elements."}),s("p",{children:["By returning a ",t("code",{children:"loader"})," element that must be rendered at the bottom of your list, the hook can observe its visibility and trigger additional data loading when users scroll near the end of the content."]})]}),$p1:"Render the returned loader element at the bottom of your list. When it enters the viewport (or container), the hook automatically triggers loadMore and appends new items.",consideration:s("ol",{children:[s("li",{children:["The ",t("code",{children:"loader"})," element must be rendered in the DOM for the observer to detect it. If it is conditionally hidden, infinite loading will not trigger."]}),s("li",{children:["The ",t("code",{children:"loadMore"})," function should be stable (e.g., wrapped with ",t("code",{children:"useCallback"}),"or referencing stable state) to avoid unnecessary re-observation or unexpected requests."]}),s("li",{children:["When using ",t("code",{children:'mode="container"'}),", ensure the container element has a fixed height and ",t("code",{children:"overflow: auto"})," or ",t("code",{children:"overflow: scroll"})," so scrolling events occur inside the container."]}),t("li",{children:"The hook prevents concurrent requests internally, but your API should still be idempotent or safe against repeated calls in case of network retries."}),t("li",{children:"If the loader is already visible when mounted (for example when the list is short), the hook will immediately trigger loading until the viewport/container is filled."})]}),$best:s("ul",{children:[s("li",{children:["Always place the returned ",t("code",{children:"loader"})," at the bottom of your list items so the observer can detect when the user reaches the end."]}),s("li",{children:["Use ",t("code",{children:"preloadDistance"})," (e.g., 200–400px) to start loading before the user actually reaches the bottom for smoother UX."]}),s("li",{children:["When working with scrollable panels or chat-style layouts, use",t("code",{children:'mode="container"'})," with ",t("code",{children:"containerRef"})," or ",t("code",{children:"containerId"}),"."]}),s("li",{children:["Keep pagination state outside the hook (e.g., page or cursor) and update it inside",t("code",{children:"loadMore"}),"."]}),s("li",{children:["Use ",t("code",{children:"reload()"})," when filters or query parameters change to restart the list from the beginning."]}),s("li",{children:["Use ",t("code",{children:"triggerLoadMore()"})," if you need to manually load more data (for example when a button is clicked)."]})]}),$faqs:s("ul",{children:[s("li",{children:[t("strong",{children:"Q: Why is the loader not triggering?"}),t("br",{}),"A: Ensure the loader element is rendered and visible in the DOM. The observer only works if the element exists and can intersect with the viewport or container."]}),s("li",{children:[t("strong",{children:"Q: Can I use this with a scrollable container instead of the window?"}),t("br",{}),"A: Yes. Set ",t("code",{children:'mode="container"'})," and provide either ",t("code",{children:"containerRef"})," or",t("code",{children:"containerId"}),"."]}),s("li",{children:[t("strong",{children:"Q: Can I manually control the loaded items?"}),t("br",{}),"A: Yes. Use the returned ",t("code",{children:"setItems"})," function to modify the list manually."]}),s("li",{children:[t("strong",{children:"Q: How do I reset the list?"}),t("br",{}),"A: Call ",t("code",{children:"reset()"})," to clear the items and loading state, or use",t("code",{children:"reload()"})," to reset and immediately fetch the first page again."]}),s("li",{children:[t("strong",{children:"Q: What happens if the list is shorter than the viewport?"}),t("br",{}),"A: The hook automatically triggers additional loads until the viewport or container becomes filled or ",t("code",{children:"hasMore"})," becomes false."]})]}),$apis:{generics:s(g,{children:[t("p",{children:t("code",{children:"<T, C>"})}),s("ul",{children:[s("li",{children:[t("code",{children:"T"})," — Type of items returned by ",t("code",{children:"loadMore"}),"."]}),s("li",{children:[t("code",{children:"C"})," — HTML element type used as the loader container. Defaults to"," ",t("code",{children:'"div"'}),"."]})]})]}),params:{loadMore:"Async function used to fetch the next batch of items. Should return an array of items or void.",hasMore:"Boolean indicating whether more data is available. When false, loading stops permanently.",loader:"Custom loading indicator. Can be a ReactNode or a function returning a ReactNode.",component:"HTML element type used as the wrapper for the loader element. Defaults to 'div'.",props:"Props passed to the loader container element.",preloadDistance:"Distance in pixels from the viewport/container bottom that triggers preloading. Defaults to 200.",observerOptions:"Custom IntersectionObserver options for advanced control.",disabled:"When true, automatic loading is disabled.",mode:"Scroll detection mode. 'viewport' observes the window, 'container' observes a specific scroll container, and 'auto' chooses automatically.",containerId:"ID of the scroll container element. Takes priority when mode='container'.",containerRef:"Ref to the scroll container element when mode='container'. Used if containerId is not provided."},return:{loader:"React element that must be rendered at the end of the list to trigger loading when it becomes visible.",loading:"Boolean indicating whether a request is currently in progress.",items:"Accumulated array of loaded items.",setItems:"State setter allowing manual modification of the items array.",reset:"Clears all items and resets the loading state.",reload:"Resets the list and immediately triggers the first load.",triggerLoadMore:"Manually triggers the loadMore function."}}},useAutoPageSize:{desc:"",detail:t(g,{}),$p1:"",consideration:t("ol",{}),$best:t("ul",{}),$faqs:t("ul",{}),$apis:{generics:t(g,{}),params:{},return:{}}},__end:"end of locale mappings, please do not delete this line"},qm={en:{...Hm},cn:{...Wm}};function f(e){const o=cl("locale");return dl(qm[o],e)}const M=({children:e,id:o,low:n,top:r})=>t(bt,{id:o,variant:n?"h6":"h5",component:"h6",gutterBottom:!0,marginTop:r??"40px",fontWeight:"bold",children:e}),Pe=({children:e,top:o})=>s(g,{children:[t(bt,{id:"hook-faqs",variant:"h5",component:"h5",gutterBottom:!0,marginTop:o??"40px",fontWeight:"bold",children:"FAQs"}),e]}),Ne=({children:e,top:o})=>s(g,{children:[t(bt,{id:"hook-best",variant:"h5",component:"h5",gutterBottom:!0,marginTop:o??"40px",fontWeight:"bold",children:"Best Practice"}),e]}),Ve=({children:e,top:o})=>s(g,{children:[t(bt,{id:"hook-usage",variant:"h5",component:"h5",gutterBottom:!0,marginTop:o??"40px",fontWeight:"bold",children:"Usage"}),e]}),te=({children:e})=>t(bt,{variant:"body1",gutterBottom:!0,children:e}),Y=({children:e,code:o,lang:n})=>s("div",{className:"Demo",children:[t(Sr,{style:{padding:"2rem"},children:e}),t(cr,{lang:n,children:o})]}),xe=({children:e})=>{const o=f("$article.Consideration");return s(g,{children:[t(M,{id:"hook-consider",children:o}),t(te,{children:e})]})},Km=({children:e})=>t(bt,{variant:"h4",component:"h1",gutterBottom:!0,marginTop:"40px",fontWeight:"bold",children:e});function ie(e){return s(g,{children:[t(bt,{variant:"h4",component:"h1",gutterBottom:!0,marginTop:"40px",fontWeight:"bold",children:e.title}),t(bt,{variant:"subtitle1",gutterBottom:!0,children:t("div",{id:"hook-desc",children:e.desc})}),t("div",{children:e.children}),t(yu,{sx:{height:"1rem"}})]})}const Gm="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function wa(){u.useEffect(()=>{document.title=`overview - ${se.homepage}`},[]);const e=Lm();u.useEffect(()=>{console.log(`theme: ${e}`)},[e]);const[o,n]=Dt(),r=Pr({},!o);return s(ie,{title:"Overview",desc:Gm,children:[t(M,{children:"Introduction"}),s(te,{children:["react-hooks-kit is an open source library focused on making it easy to use react hooks.",t("br",{}),t("br",{}),"It includes a comprehensive collection of hooks that empower you to accomplish any task in your application without being forced into a specific way of doing things.",t("br",{}),t("br",{}),"react-hooks-kit is a lightweight library that doesn't require any dependencies. It's easy to use, and it's easy to learn.",t("br",{})]}),t(M,{children:"Advantages"}),t(te,{children:s("ul",{children:[s(V,{children:[t("strong",{children:"Cosying"}),": react-hooks-kit provides a simple API that makes it easy to use react hooks."]}),s(V,{children:[t("strong",{children:"Lightweight"}),": It is a lightweight library without any dependencies."]}),s(V,{children:[t("strong",{children:"Overall"}),": It includes a comprehensive collection of hooks that empower you to accomplish different tasks in your application like store, parser, listeners, effects, etc."]}),s(V,{children:[t("strong",{children:"Typescript support"}),": It is developed with typescript and provides excellent typescript support and type inference support."]}),s("li",{children:[t("strong",{children:"innovation"}),": It provides some innovative hooks like useWatch (partial listener), useRipple (css houdini effect), etc."]})]})}),t(M,{children:"Information"}),t(te,{children:s("p",{children:["There are about 60 hooks in library, most of them are still experimental and not stable yet. In menu, only the hooks without prefix tag is entirely stable. If a hook with prefix tag of"," ",t("strong",{children:"new"}),", it means it has passed tests; with a prefix tag of ",t("strong",{children:"cup"})," means experimental; a prefix tag of"," ",t("strong",{children:"clock"})," means in plan."]})}),t("div",{css:$css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 32px;
      `,children:s(E,{onClick:n,color:o?"primary":"inherit",style:{textTransform:"none"},ref:r,disableRipple:!0,children:[t("span",{style:{marginRight:8},children:"Was this page helpful?"}),o?t(ga,{}):t(va,{})]})})]})}function rn(e){const[o,n]=Dt(),r=Pr({},!o);return t("div",{css:$css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 32px;
      `,children:s(E,{onClick:n,color:o?"primary":"inherit",style:{textTransform:"none"},ref:r,disableRipple:!0,children:[t("span",{style:{marginRight:8},children:e.children??"Was this page helpful?"}),o?t(ga,{}):t(va,{})]})})}const Jm="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function Ym(){return u.useEffect(()=>{document.title=`overview - ${se.homepage}`},[]),s(ie,{title:"Installation",desc:Jm,children:[t(M,{children:"npm"}),t(te,{children:t(be,{lang:"bash",children:"npm i -S @evanpatchouli/react-hooks-kit"})}),t(M,{children:"pnpm"}),t(te,{children:t(be,{lang:"bash",children:"pnpm i -S @evanpatchouli/react-hooks-kit"})}),t(M,{children:"yarn"}),t(te,{children:t(be,{lang:"bash",children:"yarn add -S @evanpatchouli/react-hooks-kit"})}),t(rn,{})]})}var No={},tr={exports:{}},fi;function sn(){return fi||(fi=1,(function(e){function o(n){return n&&n.__esModule?n:{default:n}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports})(tr)),tr.exports}var or={};const Qm=ul(El);var gi;function an(){return gi||(gi=1,(function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=Qm})(or)),or}var vi;function Xm(){if(vi)return No;vi=1;var e=sn();Object.defineProperty(No,"__esModule",{value:!0}),No.default=void 0;var o=e(an()),n=Qo(),r=(0,o.default)((0,n.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");return No.default=r,No}var Zm=Xm();const ef=Xo(Zm);var Lo={},bi;function tf(){if(bi)return Lo;bi=1;var e=sn();Object.defineProperty(Lo,"__esModule",{value:!0}),Lo.default=void 0;var o=e(an()),n=Qo(),r=(0,o.default)((0,n.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");return Lo.default=r,Lo}var of=tf();const nf=Xo(of);function tt(e){return e.hidden?null:s("span",{children:[t("span",{style:{color:"red",marginRight:"0.25em"},children:"*"}),e.children]})}const ka=t(Ee,{label:"string",color:"primary"}),Ca=t(Ee,{label:"number",color:"secondary"}),Ta=t(Ee,{label:"boolean",color:"success"}),Ra=t(Ee,{label:"object",color:"info"}),Sa=t(Ee,{label:"ReactNode",color:"warning"}),Ma=t(Ee,{label:"undefined",color:"default"}),Pa=t(Ee,{label:"null",color:"error",variant:"outlined"}),Va=t(Ee,{label:"any",color:"secondary",variant:"outlined"}),rf=t(Ee,{label:"unknown",color:"error"}),sf=t(Ee,{label:"never",color:"error"}),Ia=t(Ee,{label:"void",color:"primary",variant:"outlined"}),af=t(Ee,{label:"symbol",color:"error"}),lf=t(Ee,{label:"bigint",color:"error"}),Aa=t(Ee,{label:"function",color:"primary",variant:"outlined"}),cf=t(Ee,{label:"Array",color:"info",variant:"outlined"}),df=e=>t(Ee,{color:"primary",variant:"outlined",label:`Dispatch<SetStateAction<${e}>>`}),An={String:e=>e?.length?t(Ee,{label:e,color:"primary"}):ka,Number:e=>e?t(Ee,{label:e,color:"secondary"}):Ca,Boolean:e=>typeof e=="boolean"?t(Ee,{label:`${e}`,color:"success"}):Ta,Object:()=>Ra,ReactNode:()=>Sa,Undefined:()=>Ma,Null:()=>Pa,Any:()=>Va,Unknown:()=>rf,Never:()=>sf,Void:()=>Ia,Symbol:()=>af,BigInt:()=>lf,Function:e=>e?t(Ee,{label:e,color:"primary",variant:"outlined"}):Aa,Array:e=>e?t(Ee,{label:`Array<${e}>`,color:"info",variant:"outlined"}):cf,SetAction:df},dr=e=>{if(typeof e=="object")return e;if(!e.includes("|")&&!e.includes("&"))switch(e){case"string":return ka;case"number":return Ca;case"boolean":return Ta;case"object":return Ra;case"ReactNode":return Sa;case"undefined":return Ma;case"null":return Pa;case"any":return Va;case"void":return Ia;case"function":return Aa;default:return t(Ee,{label:e,color:"default"})}else{if(e.includes("|"))return e.split("|").map(o=>dr(o.trim())).map((o,n,r)=>s(u.Fragment,{children:[o,r.length-1===n?null:" | "]},o.props.label));if(e.includes("&"))return e.split("&").map(o=>dr(o.trim())).map((o,n,r)=>s(u.Fragment,{children:[o,r.length-1===n?null:" & "]},o.props.label))}},Ea=({name:e,type:o,required:n,defaultValue:r,desc:i,details:a,properties:l})=>({name:e,type:dr(o),required:n,defaultValue:[void 0,null].includes(r)?t("span",{css:$css`color: gainsboro`,children:`${r}`}):typeof r=="boolean"?`${r}`:typeof r=="string"?`"${r}"`:typeof r=="object"?(()=>{if(Array.isArray(r))return r.length===0?"[]":JSON.stringify(r);try{return`{ ${Object.keys(r).map(d=>`${d}: ${r[d]}`)} }`}catch{return r}})():r==="--"?"--":r,desc:i,details:a,properties:l?.map(d=>Ea(d))||[]});function uf(e,o,n,r,i,a,l){return Ea({name:e,type:o,required:n,defaultValue:r,desc:i,details:a,properties:l})}function pf(e){const{row:o}=e,[n,r]=u.useState(!1),i=o.properties?.length||o.details;return s(u.Fragment,{children:[s(Uo,{sx:{"& > *":{borderBottom:"unset"}},children:[t(et,{children:t(Ln,{style:{display:i?"block":"none"},"aria-label":"expand row",size:"small",onClick:()=>r(!n),children:n?t(nf,{}):t(ef,{})})}),s(et,{component:"th",scope:"row",children:[o.required&&t(tt,{}),o.name]}),t(et,{align:"center",children:o.type}),e.type==="param"&&t(et,{align:"center",children:o.defaultValue}),t(et,{align:"left",children:o.desc})]}),t(Uo,{children:t(et,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:t(dt,{in:n,timeout:"auto",unmountOnExit:!0,children:s(Yt,{sx:{margin:1},children:[o.details,s(pa,{size:"small","aria-label":"purchases",children:[o.properties.length<=0?null:t(ma,{children:s(Uo,{children:[t(et,{sx:{fontWeight:"bold"},children:"name"}),t(et,{sx:{fontWeight:"bold"},align:"center",children:"type"}),e?.type!=="return"&&t(et,{sx:{fontWeight:"bold"},align:"center",children:"default"}),t(et,{sx:{fontWeight:"bold"},align:"left",children:"description"})]})}),t(ha,{children:o.properties.map(a=>s(Uo,{children:[t(et,{component:"th",scope:"row",children:a.name}),t(et,{align:"center",children:a.type}),e.type==="param"&&t(et,{align:"center",children:a.defaultValue}),t(et,{align:"left",children:a.desc})]},a.name))})]})]})})})})]})}function Z(e){const o={sx:{backgroundColor:"black",color:"white",fontWeight:"bold"}},n=e.rows?.map(r=>uf(r.name,r.type,r.required,r.defaultValue,r.desc,r.details,r.properties??[]));return t(Sh,{component:jn,children:s(pa,{"aria-label":"collapsible table",children:[t(ma,{children:s(Uo,{children:[t(et,{...o}),t(et,{...o,children:e?.return?"ReturnValue":"Parameters"}),t(et,{...o,align:"center",children:"type"}),!e?.return&&t(et,{...o,align:"center",children:"default"}),t(et,{...o,align:"center",children:"description"})]})}),t(ha,{children:n?.map(r=>t(pf,{row:r,type:e.return?"return":"param"},r.name))})]})})}function Na(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useToggle"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}const hf="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.",mf=`
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
`,En={button:{width:"80px",height:"1.8rem",cursor:"pointer",padding:"10px 4px",textTransform:"uppercase",background:"white",borderRadius:"20px",position:"relative"},text:{position:"absolute",top:"50%",fontFamily:"sans-serif",transition:"all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"}},ff=()=>{const[e,o]=Dt();return t("button",{style:{...En.button,border:`1px solid ${e?"dodgerblue":"gray"}`},onClick:o,children:t("span",{style:{...En.text,left:e?"100%":"0",color:e?"dodgerblue":"gray",transform:`translate(${e?"calc(-8px - 100%)":"calc(8px)"}, -50%)`},children:e?"ON":"OFF"})})},gf=`
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
`,vf=()=>{const[e,o]=Dt(),n=gr({color:"hsla(210, 100%, 56%, 0.557)",duration:500,trigger:"mousedown"});return t("button",{ref:n,style:{...En.button,border:`1px solid ${e?"dodgerblue":"gray"}`},onClick:o,children:t("span",{style:{...En.text,left:e?"100%":"0",color:e?"blue":"gainsboro",transform:`translate(${e?"calc(-2px - 100%)":"calc(2px)"}, -50%)`,backgroundColor:e?"hsla(210, 100%, 56%, 0.557)":"gray",padding:"0 4px",lineHeight:"1.4rem",borderRadius:"12px"},children:e?"ON":"OFF"})})};function bf(){return u.useEffect(()=>{document.title=`Usage - ${se.homepage}`},[]),s(ie,{title:"Usage",desc:hf,children:[t(M,{children:"npm"}),t("p",{children:'Take "useToggle" as an example, you can use it to make a Switcher:'}),s(te,{children:[t(ff,{}),t(cr,{children:mf})]}),t("p",{children:'Use "useRipple" to make Switcher more cool:'}),s(te,{children:[t(vf,{}),t(cr,{children:gf})]}),t("strong",{children:"Now, you get a cool RippleSwitcher!"}),t(Na,{}),t(rn,{})]})}const yf="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function xf(){return u.useEffect(()=>{document.title=`FAQs - ${se.homepage}`},[]),s(ie,{title:"FAQs",desc:yf,children:[t(M,{children:"How about the Compatibility ?"}),s("p",{children:["This library is compatible with ",t("code",{children:"react@^16.8.0"})," ~ ",t("code",{children:"react@^18.2.0"}),"."]}),t(M,{children:"Is it really lightweight ?"}),s("p",{children:["Yes, it is. The bundle size is only ",t("code",{children:"~ 1.5kb"})," (minified and gzipped). It goes without any dependencies besides ",t("code",{children:"react"})," and ",t("code",{children:"react-dom"}),"."]}),t(M,{children:"How about its support for typescript ?"}),t("p",{children:"This library is written in typescript and it has its own type definitions. So you can use it with typescript without any problem."}),t(M,{children:"Is it tree-shakable ?"}),t("p",{children:"Yes, it is. All of the hooks are exported as named exports. So you can import only the hooks that you need."}),t(M,{children:"How about the performance ?"}),t("p",{children:"The performance is good. The hooks are optimized and memoized. So they will not cause unnecessary re-renders in your app."}),t(M,{children:"How about the browser support ?"}),s("p",{children:["This library is compatible with all modern browsers. It also works with IE11. But you need to include the polyfills for ",t("code",{children:"Promise"})," and ",t("code",{children:"Object.assign"})," in your app. Some special hooks such as useRipple that goes with Houdini may not be available in some browsers."]}),t(M,{children:"How about the accessibility ?"}),s("p",{children:["This library is compatible with accessibility. All of the hooks are tested with"," ",t("code",{children:"@testing-library/react"}),"."]}),t(rn,{})]})}const $f="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function wf(){return u.useEffect(()=>{document.title=`Support - ${se.homepage}`},[]),s(ie,{title:"Support",desc:$f,children:[t(M,{children:"Support us to make it better !"}),s(E,{LinkComponent:"a",variant:"contained",children:["Buy me a coffee",t(hm,{style:{marginLeft:8}})]}),t(rn,{children:"🥰 Thank you ~ "})]})}const yi=Object.freeze(Object.defineProperty({__proto__:null,FAQs:xf,Installation:Ym,Overview:wa,Support:wf,Usage:bf},Symbol.toStringTag,{value:"Module"}));function kf(){const e=Object.values(Vt).map(a=>Object.values(a)).flat(),[o,n]=u.useState(0),[r,i]=Zo({last:"Last",lastLink:"",next:"Next",nextLink:""});return vr(a=>{const d=a.hash.replace("#/docs/","").split("?")[0],c=e.findIndex(v=>v.route===d),p=e[c-1],h=e[c+1];p?(i("last",p.title),i("lastLink",p.route)):(i("last","Docs"),i("lastLink","")),h&&(i("next",h.title),i("nextLink",h.route))},"article-navigator",!0),t(Yt,{sx:{width:"100%",flex:"1"},children:s(Jd,{showLabels:!0,value:o,onChange:(a,l)=>{n(l)},style:{display:"flex",bottom:"0",left:"0",right:"0",justifyContent:"space-between",zIndex:1e3,backgroundColor:"white"},children:[t(Xr,{LinkComponent:"a",href:`#/docs/${r.lastLink}`,label:r.last,icon:t(xm,{})}),t(Xr,{LinkComponent:"a",href:`#/docs/${r.nextLink}`,label:r.next,icon:t($m,{})})]})})}const Nn=u.createContext({});function Cf(e){return pe("MuiTimeline",e)}he("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function Co(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${O(e)}`}const Tf=["position","className"],Rf=e=>{const{position:o,classes:n}=e,r={root:["root",o&&Co(o)]};return le(r,Cf,n)},Sf=_("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.position&&o[Co(n.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),Mf=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTimeline"}),{position:i="right",className:a}=r,l=re(r,Tf),d=m({},r,{position:i}),c=Rf(d),p=u.useMemo(()=>({position:i}),[i]);return R.jsx(Nn.Provider,{value:p,children:R.jsx(Sf,m({className:Q(c.root,a),ownerState:d,ref:n},l))})});function Pf(e){return pe("MuiTimelineContent",e)}const Vf=he("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),If=["className"],Af=e=>{const{position:o,classes:n}=e,r={root:["root",Co(o)]};return le(r,Pf,n)},Ef=_(bt,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[Co(n.position)]]}})(({ownerState:e})=>m({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),oo=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTimelineContent"}),{className:i}=r,a=re(r,If),{position:l}=u.useContext(Nn),d=m({},r,{position:l||"right"}),c=Af(d);return R.jsx(Ef,m({component:"div",className:Q(c.root,i),ownerState:d,ref:n},a))}),Nf=he("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function Lf(e){return pe("MuiTimelineItem",e)}const jf=he("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]),Bf=["position","className"],Of=e=>{const{position:o,classes:n,hasOppositeContent:r}=e,i={root:["root",Co(o),!r&&"missingOppositeContent"]};return le(i,Lf,n)},Df=_("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[Co(n.position)]]}})(({ownerState:e})=>m({listStyle:"none",display:"flex",position:"relative",minHeight:70},e.position==="left"&&{flexDirection:"row-reverse"},(e.position==="alternate"||e.position==="alternate-reverse")&&{[`&:nth-of-type(${e.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${Vf.root}`]:{textAlign:"right"},[`& .${Nf.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})),no=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTimelineItem"}),{position:i,className:a}=r,l=re(r,Bf),{position:d}=u.useContext(Nn);let c=!1;u.Children.forEach(r.children,b=>{vo(b,["TimelineOppositeContent"])&&(c=!0)});const p=m({},r,{position:i||d||"right",hasOppositeContent:c}),h=Of(p),v=u.useMemo(()=>({position:p.position}),[p.position]);return R.jsx(Nn.Provider,{value:v,children:R.jsx(Df,m({className:Q(h.root,a),ownerState:p,ref:n},l))})});function Uf(e){return pe("MuiTimelineSeparator",e)}he("MuiTimelineSeparator",["root"]);const zf=["className"],Ff=e=>{const{classes:o}=e;return le({root:["root"]},Uf,o)},_f=_("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),ro=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTimelineSeparator"}),{className:i}=r,a=re(r,zf),l=r,d=Ff(l);return R.jsx(_f,m({className:Q(d.root,i),ownerState:l,ref:n},a))});function Wf(e){return pe("MuiTimelineConnector",e)}he("MuiTimelineConnector",["root"]);const Hf=["className"],qf=e=>{const{classes:o}=e;return le({root:["root"]},Wf,o)},Kf=_("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})),fo=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTimelineConnector"}),{className:i}=r,a=re(r,Hf),l=r,d=qf(l);return R.jsx(Kf,m({className:Q(d.root,i),ownerState:l,ref:n},a))});function Gf(e){return pe("MuiTimelineDot",e)}he("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const Jf=["className","color","variant"],Yf=e=>{const{color:o,variant:n,classes:r}=e,i={root:["root",n,o!=="inherit"&&`${n}${O(o)}`]};return le(i,Gf,r)},Qf=_("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.color!=="inherit"&&`${n.variant}${O(n.color)}`],o[n.variant]]}})(({ownerState:e,theme:o})=>m({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(o.vars||o).shadows[1],margin:"11.5px 0"},e.variant==="filled"&&m({borderColor:"transparent"},e.color!=="inherit"&&m({},e.color==="grey"?{color:(o.vars||o).palette.grey[50],backgroundColor:(o.vars||o).palette.grey[400]}:{color:(o.vars||o).palette[e.color].contrastText,backgroundColor:(o.vars||o).palette[e.color].main})),e.variant==="outlined"&&m({boxShadow:"none",backgroundColor:"transparent"},e.color!=="inherit"&&m({},e.color==="grey"?{borderColor:(o.vars||o).palette.grey[400]}:{borderColor:(o.vars||o).palette[e.color].main})))),io=u.forwardRef(function(o,n){const r=de({props:o,name:"MuiTimelineDot"}),{className:i,color:a="grey",variant:l="filled"}=r,d=re(r,Jf),c=m({},r,{color:a,variant:l}),p=Yf(c);return R.jsx(Qf,m({className:Q(p.root,i),ownerState:c,ref:n},d))});function Xf(){const e=o=>()=>{document.getElementById(o)?.scrollIntoView({behavior:"smooth",block:"center"})};return s(Mf,{className:"doc-navigator-line",sx:{[`& .${jf.root}:before`]:{flex:0,padding:0}},children:[s(no,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-desc"),children:[s(ro,{children:[t(io,{}),t(fo,{})]}),t(oo,{children:t("div",{style:{cursor:"pointer"},children:"Description"})})]}),s(no,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-usage"),children:[s(ro,{children:[t(io,{}),t(fo,{})]}),t(oo,{children:t("div",{style:{cursor:"pointer"},children:"Usage"})})]}),s(no,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-consider"),children:[s(ro,{children:[t(io,{}),t(fo,{})]}),t(oo,{children:t("div",{style:{cursor:"pointer"},children:"Considerations"})})]}),s(no,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-best"),children:[s(ro,{children:[t(io,{}),t(fo,{})]}),t(oo,{children:t("div",{style:{cursor:"pointer"},children:"Best practice"})})]}),s(no,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-faqs"),children:[s(ro,{children:[t(io,{}),t(fo,{})]}),t(oo,{children:t("div",{style:{cursor:"pointer"},children:"FAQs"})})]}),s(no,{children:[s(ro,{children:[t(io,{}),t(fo,{})]}),t(oo,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-api"),children:t("div",{style:{cursor:"pointer"},children:"Hook's Apis"})})]}),s(no,{children:[t(ro,{children:t(io,{})}),t(oo,{css:$css`&:hover { color: dodgerblue; }`,onClick:e("hook-ref"),children:t("div",{style:{cursor:"pointer"},children:"Reference"})})]})]})}const rt=(e,o,n)=>{e&&(typeof e=="string"&&e?window.location.hash=e.replace(/#/g,""):typeof e=="object"&&e.path&&(window.location.hash||(e.hash??o)?window.location.hash=e.path.replace(/#/g,""):window.location.assign(e.path)))};function Zf(){return t(ie,{title:"Docs of react-hooks-kit",children:s(te,{children:[t("p",{children:"This is a collection of hooks to manage state and view much more easier in ReactJs."}),t("p",{children:"It includes some stateful hooks:"}),s("ul",{children:[t("li",{children:"useLoading"}),t("li",{children:"useTree"}),t("li",{children:"useReactive"}),t("li",{children:"useReactor"}),t("li",{children:"..."})]}),t("p",{children:"And it also includes some utils:"}),s("ul",{children:[t("li",{children:"useGuide"}),t("li",{children:"useTicker"}),t("li",{children:"useVirtualArea"}),t("li",{children:"..."})]}),t("p",{children:"And it also provides some magical hooks:"}),s("ul",{children:[t("li",{children:"useEmitter"}),t("li",{children:"useReceiver"}),t("li",{children:"useProvide"}),t("li",{children:"useInject"}),t("li",{children:"..."})]}),t("p",{children:"And some houdini hooks:"}),s("ul",{children:[t("li",{children:"useRipple"}),t("li",{children:"useParticle"}),t("li",{children:"..."})]})]})})}const eg="@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.";function tg(){u.useEffect(()=>{document.title=`SentMail - ${se.homepage}`},[]);const e={display:"flex",gap:1,textTransform:"none"};return s(ie,{title:"SentMail",desc:eg,children:[t(M,{children:"Sent mail to us to get more information and support."}),s(E,{sx:e,children:[t(Qn,{})," evanpatchouli@gmail.com"]}),s(E,{sx:e,children:[t(Qn,{})," evanpatchouli@foxmail.com"]}),s(E,{sx:e,children:[t(Qn,{})," 3125019716@qq.com"]}),t(rn,{})]})}const og=()=>{const[e,o]=u.useState(0),n=ba(e),r=u.useRef();return u.useEffect(()=>(r.current=setInterval(()=>{o(i=>++i)},17),()=>{r.current&&clearInterval(r.current)}),[]),s("div",{children:[s("h1",{children:["Now: ",e,", previous: ",n,", timer:",`${r.current}`]}),t(E,{variant:"contained",color:"primary",onClick:()=>{r.current&&clearInterval(r.current)},children:"Stop"})]})},ng=`import usePrevoius from "@/hooks/usePrevious";
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
};`,xi={code:ng,View:og};function rg(){const e=[{name:"state",type:"T",defaultValue:t(tt,{children:"Required"}),desc:"state to be tracked"}],o=[{name:"prevoiusState",type:"T",defaultValue:null,desc:"the previous value of the state that was passed in"}],n=f("usePrevious.$apis.generics");return s(g,{children:[t(M,{id:"hook-api",children:"Api of usePrevoius"}),t(te,{children:n}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:o})]})}function ig(){const[e,o]=u.useState("light"),n=ba(e);return u.useEffect(()=>{n&&n!==e&&console.log(`Theme changed from ${n} to ${e}`)},[e,n]),s("div",{children:[s("p",{children:["Current theme: ",e]}),t("button",{onClick:()=>{o(e==="light"?"dark":"light")},children:"Toggle theme"})]})}const sg=`import { useState, useEffect } from "react";
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
}`,$i={View:ig,code:sg};function ag(){const e="usePrevious",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:xi.code,children:t(xi.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),s(Ne,{children:[r,t(Y,{code:$i.code,children:t($i.View,{})})]}),t(Pe,{children:l}),t(rg,{})]})}const lg=()=>{const[e,o]=Dt();return t(g,{children:t(Mr,{checked:e,onChange:o})})},cg=`
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
`,wi={code:cg,View:lg},dg=()=>{const[e,o]=Dt(!1,{true:"Open",false:"Close"});return s(g,{children:[t(Mr,{checked:e==="Open",onChange:o})," ",e]})},ug=`
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
`,ki={code:ug,View:dg};function pg(){const e="useToggle",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e.replace(/([A-Z])/g,a=>a.toUpperCase()),desc:o,children:[t(te,{children:n}),t(Y,{code:wi.code,children:t(wi.View,{})}),t(M,{children:"Value map"}),t("p",{children:i}),t(Y,{code:ki.code,children:t(ki.View,{})}),t(xe,{children:r}),t(Na,{})]})}const hg=()=>s("div",{css:$css`display: flex;`,children:[t(mg,{}),t("s",{css:$css`margin: 0 20px;`}),t(fg,{})]}),mg=()=>{const[,e]=Dt(),{loading:o,setLoading:n}=br({load:!1});return s("div",{css:$css`display: flex; align-items: center;`,children:[t("strong",{children:"setLoading : "}),t(Mr,{onChange:()=>{e(),n("load",r=>!r)}}),t("div",{css:$css`
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
        `,children:t(en,{on:o.load})})})]})},fg=()=>{Dt();const{loading:e,onLoading:o,unLoading:n}=br({load:!1});return s("div",{css:$css`display: flex; align-items: center;`,children:[t("strong",{children:"(on & un)Loading : "}),t(E,{onClick:()=>n("load"),children:"Off"}),t("div",{css:$css`
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
        `,children:t(en,{on:e.load})})}),t(E,{onClick:()=>o("load"),children:"On"})]})},gg=`
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
`,Ci={code:gg,View:hg},vg=()=>{const[e,o]=u.useState({setType:"override",boolify:!0}),n=()=>{o(d=>({...d,setType:d.setType==="override"?"spread":"override"}))},r=()=>{o(d=>({...d,boolify:!d.boolify}))},{loading:i,plusLoading:a,minusLoading:l}=br({load:!1},e);return s("div",{css:$css`
      display: flex;
      align-items: center;
      `,children:[s("div",{children:[s(E,{css:$css`display: block; text-transform: none;`,onClick:n,children:["setType : ",e?.setType]}),s(E,{css:$css`display: block; text-transform: none;`,onClick:r,children:["boolify : ",`${e?.boolify}`]})]}),t(E,{onClick:()=>{l("load")},children:"-"}),t("div",{css:$css`
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
        `,children:t(en,{on:!!i.load})})}),t(E,{onClick:()=>{a("load")},children:"+"}),s("strong",{children:["count : ",JSON.stringify(i.load)]})]})},bg=`
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
`,Ti={code:bg,View:vg};function kn(){return t("span",{style:{marginRight:"10px"}})}function yg(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useLoading"}),t(M,{low:!0,top:"20px",children:"Generics"}),t(te,{children:t("ul",{children:s("li",{children:[t("strong",{children:"T"}),": should extends object"]})})}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"loadingMap",type:"object",defaultValue:t(tt,{children:"Required"}),desc:"initial state map of loadings"},{name:"options",type:"object",defaultValue:{setType:"override",boolify:!0},desc:"options of useLoadingApi",properties:[{name:"setType",type:'"override" | "spread"',defaultValue:"override",desc:"set action mode of setter"},{name:"boolify",type:"boolean",defaultValue:!0,desc:"whether the value is false when state is 0, and is true when state is 1; or the value is 0 when state is false, and is 1 when state is true"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array & Object)"}),t(Z,{return:!0,rows:[{name:"[0] loading",type:t(Ee,{label:"{ [x: keyof T]: boolean | number }"}),desc:"state of loadings"},{name:"[1] setLoading",type:"(k, v) => void | ( k, (v) => T[k] ) => void | (obj: Partial<T>) => void | ( (obj) => Partial<T> ) => void",desc:"set the state of certain loading value",details:s("p",{children:[t("strong",{children:"overload 1"})," : ","(k, v) => void"," ",t(kn,{})," set the state of loading[k] to v",t("br",{}),t("strong",{children:"overload 2"})," : ","( k, (v) => T[k] ) => void"," ",t(kn,{})," ","set the state of loading[k] to v(loading[k])",t("br",{}),t("strong",{children:"overload 3"})," : ","(obj: Partial<T>) => void"," ",t(kn,{})," ","set the state of loading by obj",t("br",{}),t("strong",{children:"overload 4"})," : ","( (obj) => Partial<T> ) => void"," ",t(kn,{})," set the state of loading by obj(loading)"]})},{name:"[2] onLoading",type:"(key: keyof T) => void",desc:"set the state of loading[key] to true"},{name:"[3] unLoading",type:"(key: keyof T) => void",desc:"set the state of loading[key] to false"},{name:"[4] plusLoading",type:"(key: keyof T) => void",desc:"plus the state of loading[key] by 1"},{name:"[5] minusLoading",type:"(key: keyof T) => void",desc:"minus the state of loading[key] by 1"}]})]})}function xg(){const e="useLoading",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e.replace(/([A-Z])/g,a=>a.toUpperCase()),desc:o,children:[t(te,{children:n}),t(Y,{code:Ci.code,children:t(Ci.View,{})}),t(M,{children:"Counter mode"}),t("p",{children:i}),t(Y,{code:Ti.code,children:t(Ti.View,{})}),t(xe,{children:r}),t(yg,{})]})}const $g=()=>{const[e,o]=Cm({name:"record",count:1});return s(g,{children:[t("pre",{children:JSON.stringify(e,null,2)}),t(E,{onClick:()=>o("count",e.count+1),children:"count++"})]})},wg=`import { useRecord } from "@evanpatchouli-hooks-kit";
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
`,Ri={code:wg,View:$g};function kg(){const e=[{name:"initial",type:"object",defaultValue:{},desc:"an one-level record object"}],o=[{name:"[0] state",type:"object",defaultValue:null,desc:"state of record"},{name:"[1] setRecordAction",type:"Function",desc:s("div",{css:$css`text-align: left;`,children:[t("span",{children:"set method has 4 overloads:"}),s("ul",{children:[t("li",{children:t("code",{children:"set<K> = (key: K, value: T[K]): void;"})}),t("li",{children:t("code",{children:"set<K> = (key: K, setValueAction: (prev: T[K]) => T[K]): void;"})}),t("li",{children:t("code",{children:'set(record, mode?: "rehydrate" | "override"): void;'})}),t("li",{children:t("code",{children:'set(setRecordAction: (prev: T) => Partial<T>, mode?: "rehydrate" | "override"): void;'})})]}),t("span",{children:"mode:"}),s("ul",{children:[s("li",{children:[t("strong",{children:"rehydrate"}),": merge the new state with the old state"]}),s("li",{children:[t("strong",{children:"override"}),": replace the old state with the new state"]})]})]})}];return s(g,{children:[t(M,{id:"hook-api",children:"Api of useRecord"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:o})]})}function Cg(){const e="useRecord",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:Ri.code,children:t(Ri.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(kg,{})]})}const Tg=()=>{const{map:e}=_n({name:"useMap",kind:"statefult-hook",state:"experimental"});return t(g,{children:t("pre",{children:JSON.stringify(Object.fromEntries(e),null,2)})})},Rg=`import { useMap } from "@evanpatchouli/react-hooks-kit";
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
`,Si={code:Rg,View:Tg},Sg=()=>{const{map:e,set:o,get:n}=_n({count:1});return s(g,{children:[s("pre",{children:["map.count: ",e.get("count")]}),t(E,{onClick:()=>o("count",n("count")+1),children:"count++"})]})},Mg=`import { useMap } from "@evanpatchouli/react-hooks-kit";
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
`,Mi={code:Mg,View:Sg},Pg=()=>{const{map:e,set:o,get:n}=_n({count:1});return s(g,{children:[s("pre",{children:["map.count: ",e.get("count")]}),t(E,{onClick:()=>o("count",n("count")+1),children:"overload 1"}),t(E,{onClick:()=>o("count",r=>r+1),children:"overload 2"}),t(E,{onClick:()=>o(r=>({count:r.get("count")+1}),"rehydrate"),children:"overload 3"}),t(E,{onClick:()=>o(r=>new Map(Object.entries({count:r.get("count")+1})),"override"),children:"overload 4"})]})},Vg=`import { useMap } from "@evanpatchouli/react-hooks-kit";
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
`,Pi={code:Vg,View:Pg},Ig=()=>{const{map:e,del:o,add:n}=_n({a:"a",b:"b"});return s(g,{children:[t("pre",{children:JSON.stringify(Object.fromEntries(e),null,2)}),t(E,{onClick:()=>o("b"),children:"Del b"}),t(E,{onClick:()=>n("b","b"),children:"Add b"})]})},Ag=`import { useMap } from "@evanpatchouli/react-hooks-kit";
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
`,Vi={code:Ag,View:Ig};function Eg(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useMap"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initial object",type:"T",defaultValue:"{}",desc:"initial object to be convert into Map"}]}),s(M,{low:!0,top:"20px",children:["ReturnValue ","{ map, get, set, del, add }"]}),t(Z,{return:!0,rows:[{name:"map",type:"Map<K, T[K]>",desc:"map object state"},{name:"get",type:"(key: K) => T[K]",desc:"get value by key from map"},{name:"set",type:"4 overloads",desc:"set method"},{name:"del",type:"(key: K) => void",desc:"del property by key"},{name:"add",type:"(key: K, value: any) => void",desc:"add property to map"}]})]})}function Ng(){const e="useMap",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$h2`),d=f(`${e}.$p2`),c=f(`${e}.$p3`),p=f(`${e}.$h3`),h=f(`${e}.$p4`),v=f(`${e}.$h4`),b=f(`${e}.$p5`),$=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:Si.code,children:t(Si.View,{})}),t("p",{children:a}),t(M,{children:l}),t("p",{children:d}),t(Y,{code:Mi.code,children:t(Mi.View,{})}),t(M,{children:p}),t("p",{children:c}),t(Y,{code:Pi.code,children:t(Pi.View,{})}),t("p",{children:h}),t(M,{children:v}),t("p",{children:b}),t(Y,{code:Vi.code,children:t(Vi.View,{})})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:$}),t(Eg,{})]})}const Lg=()=>{const[e,o]=Zo({name:"John",age:20,more:{address:"Taipei",score:100},messi:{game:{wordCup:{win:!0}}}});return s(g,{children:[t(E,{onClick:()=>{o("age",e.age+1)},children:"obj.age++"}),t(E,{onClick:()=>{e.more.score++},children:"obj.more.score++ [lazy]"}),t(E,{onClick:()=>{e.messi.game.wordCup.win=!e.messi.game.wordCup.win},children:"!obj.messi.game.wordCup.win [lazy]"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},jg=`import Code from "@/components/code";
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
`,Ii={code:jg,View:Lg},Bg=()=>{const[e,o]=Zo({width:100,height:100});return s(g,{children:[t(E,{onClick:()=>{o("width",(n,r)=>n+1)},children:"obj.width++"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},Og=`
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
`,Ai={code:Og,View:Bg},Dg=()=>{const[e,o]=Zo({width:100,height:100});return s(g,{children:[t(E,{onClick:()=>{o({width:e.width+1,height:e.height+1})},children:"override obj"}),t(E,{onClick:()=>{o(n=>({...n,width:n.width+1}))},children:"override obj from old"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},Ug=`
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
`,Ei={code:Ug,View:Dg};function zg(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useMeta"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initialObject",type:"T extends object",defaultValue:t(tt,{children:"Required"}),desc:"initial state of object"},{name:"options",type:"{ deepSet?: boolean; createNonExists?: boolean }",defaultValue:"{ deepSet: false, createNonExist: false }",desc:"options of useMeta",properties:[{name:"deepSet",type:"boolean",defaultValue:!1,desc:"Whether to deep clone object when setting property",details:s(g,{children:[t("strong",{children:"DeepClone"})," will make it slower especially"," ",t("strong",{children:"a huge object"})]})},{name:"createNonExist",type:"boolean",defaultValue:!1,desc:"Whether to create non-exists property when setting property"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[{name:"[0] state",type:"T",desc:"state of object"},{name:"[1] setter",type:"type: (k, v) => void | ( k, (oldValue, oldObject) => Value ) => void | (obj: T) => void | ( (oldObject) => T ) => void",desc:"setter of object"}]})]})}function Fg(){const e="useMeta",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`),a=f(`${e}.$p2`),l=f(`${e}.$p3`),d=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e.replace(/([A-Z])/g,c=>c.toUpperCase()),desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(M,{low:!0,children:"Set deep property in object"}),t("p",{children:i}),t(Y,{code:Ii.code,children:t(Ii.View,{})}),t(M,{low:!0,children:"Set action of property"}),t("p",{children:a}),t(Y,{code:Ai.code,children:t(Ai.View,{})}),t(M,{low:!0,children:"Set action of whole object"}),t("p",{children:l}),t(Y,{code:Ei.code,children:t(Ei.View,{})})]}),t(xe,{children:r}),t(Pe,{children:d}),t(zg,{})]})}const _g=()=>{const[e,o]=ya([{name:"Leo Messi"},{name:"Cristiano Ronaldo"},{name:"Neymar"},{name:"Kylian Mbappe"},{name:"Kevin De Bruyne"},{name:"Ronaldinho"}],{renderFn(r){return s("div",{css:$css`margin-bottom: 8px;`,children:[t("label",{css:$css`margin-right: 1rem;`,children:"Name"}),t("span",{id:r.name,children:r.name})]})}},[]),n=u.useMemo(()=>o.render(),[e]);return t(g,{children:n})},Wg=`import useList from "@/hooks/useList";
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
};`,Ni={code:Wg,View:_g},Hg=()=>{const[e,o]=ya([{name:"Leo Messi"},{name:"Cristiano Ronaldo"},{name:"Neymar"},{name:"Kylian Mbappe"},{name:"Kevin De Bruyne"},{name:"Ronaldinho"}],{renderFn(l){return s("div",{css:$css`margin-bottom: 8px;`,children:[t("label",{css:$css`margin-right: 1rem;`,children:"Name"}),t("span",{id:l.name,children:l.name})]})}},[]),n=()=>{o.addItem({name:Math.random().toString(36).slice(-8)})},r=()=>{const l=e.find((d,c)=>!e[c+1])?._id;(l||l===0)&&o.removeItem(l)},i=()=>{o.save()},a=u.useMemo(()=>o.render(),[e]);return s(g,{children:[a,s("div",{css:$css`text-align: right;`,children:[t("span",{children:"The temp list length: "}),t(Ee,{label:`${e.length}`}),t("span",{children:"The original list length: "}),t(Ee,{label:`${o.originalItems.length}`}),t(E,{color:"error",onClick:r,children:"Pop"}),t(E,{color:"primary",onClick:n,children:"Add"}),t(E,{color:"success",onClick:i,children:"Save"})]})]})},qg=`import useList from "@/hooks/useList";
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
};`,Li={code:qg,View:Hg};function Kg(){const e=f("useList.$apis.generics");return s(g,{children:[t(M,{id:"hook-api",children:"Api of useList"}),s(M,{low:!0,top:"20px",children:["Generics",'<T extends object = { [key: string]: any }, K extends string | number = "_id">']}),t(te,{children:e}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initialItems",type:"Array<any>",defaultValue:t(tt,{children:"Required"}),desc:"initial list items"},{name:"options",type:"UseListOptions",defaultValue:{idKey:"_id"},desc:"options for useList",properties:[{name:"idKey",type:"string",defaultValue:"_id",desc:"idkey of item"},{name:"sortFn",type:"SortFunction<T>",defaultValue:null,desc:"sort function"},{name:"filterFn",type:"FilterFunction<T>",defaultValue:null,desc:"filter function"},{name:"renderFn",type:"RenderFunction<T>",defaultValue:"(item) => item",desc:"render of item"},{name:"renderEmpty",type:"Function | JSX.Element | React.ReactNode",defaultValue:null,desc:"render of no data"},{name:"itemsPerPage",type:"number",defaultValue:1,desc:"pageSize of pagination"}]},{name:"dependencies",type:"Array<any>",defaultValue:"[]",desc:"dependencies for items to auto save"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[{name:"[0] temp list",type:"Array<ItemExtended<T>>",defaultValue:null,desc:"the temporary virtual list data"},{name:"[1] list manager",type:"object",desc:"list manager object",properties:[{name:"updateItems",type:"(newItems: Item<T>[]) => void",desc:"Function to replace the current list of items with a new list."},{name:"addItem",type:"(item: Item<T>) => void",desc:"Function to add a new item to the list."},{name:"removeItem",type:"(id: string | number) => void",desc:"Function to remove an item from the list by its id."},{name:"removeItems",type:"(ids: (string | number)[]) => void",desc:"Function to remove multiple items from the list by their ids."},{name:"save",type:"() => void",desc:"Function to save the current state of the list."},{name:"reset",type:"() => void",desc:"Function to reset the list to its original state."},{name:"filteredItems",type:"Item<T>[]",desc:"The current list of items after applying the filter function."},{name:"originalItems",type:"Item<T>[]",desc:"The original list of items."},{name:"render",type:"() => React.ReactNode",desc:"Function to render the current list of items."},{name:"pagedItems",type:"Item<T>[]",desc:"The current page of items when pagination is applied."},{name:"currentPage",type:"number",desc:"The current page number when pagination is applied."},{name:"totalPage",type:"number",desc:"The total number of pages when pagination is applied."},{name:"goToPage",type:"(page: number) => void",desc:"Function to navigate to a specific page."},{name:"goLastPage",type:"() => void",desc:"Function to navigate to the previous page."},{name:"goNextPage",type:"() => void",desc:"Function to navigate to the next page."}]}]})]})}function Gg(){const e="useList",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`),a=f(`${e}.$p2`),l=f(`${e}.$faqs`),d=f(`${e}.$best`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e.replace(/([A-Z])/g,c=>c.toUpperCase()),desc:o,children:[t(te,{children:n}),s(Ve,{children:[t("p",{children:i}),t(Y,{code:Ni.code,children:t(Ni.View,{})}),t("p",{children:a}),t(Y,{code:Li.code,children:t(Li.View,{})})]}),t(xe,{children:r}),t(Ne,{children:d}),t(Pe,{children:l}),t(Kg,{})]})}var jo={},ji;function Jg(){if(ji)return jo;ji=1;var e=sn();Object.defineProperty(jo,"__esModule",{value:!0}),jo.default=void 0;var o=e(an()),n=Qo(),r=(0,o.default)((0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");return jo.default=r,jo}var Yg=Jg();const Qg=Xo(Yg);function La(e){const[o,n]=u.useState(!0);return t(Yt,{sx:{width:"400px",...e.sx},children:t(dt,{in:e.open??o,children:t(Ql,{action:t(Ln,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{n(!1),e.setOpen&&e.setOpen(!1)},children:t(Qg,{fontSize:"inherit"})}),severity:e.severity??"info",sx:{mb:2},children:e.children})})})}const Xg={_id:"1",name:"Root",children:[{_id:"2",name:"Child 1",children:[{_id:"5",name:"Child 1.1",children:[]},{_id:"6",name:"Child 1.2",children:[]}]},{_id:"3",name:"Child 2",children:[]},{_id:"4",name:"Child 3",children:[]}]},Zg=()=>{const[e,o]=u.useState(!1),[n,r]=u.useState(""),[i,{addNode:a,removeNode:l,moveNode:d,searchTree:c,render:p}]=Tm(Xg,{idKey:"_id",renderNode:(w,S,P,C,T)=>t("div",{css:$css`margin-left: ${P*20}px;`,children:w.name},S)}),h=()=>{let S=a({_id:"7",name:"New Node",children:[]},"1");S&&(r(S),o(!0))},v=()=>{let w=l("7");w&&(r(w),o(!0))},[b,$]=Dt();return s("div",{children:[t(E,{onClick:h,children:"Add Node"}),t(E,{onClick:v,children:"Remove Node"}),t(E,{onClick:()=>{let w=()=>d("7","4");b&&(w=()=>d("7","1"));let S=w();S?(r(S),o(!0)):$()},children:"Move Node"}),t(E,{onClick:()=>{const w=c("3");console.log(w)},children:"Search Node"}),t("div",{children:p()}),t(La,{severity:"error",open:e,setOpen:o,sx:{position:"fixed",bottom:16,right:16,zIndex:9999,width:"fit-content"},children:n})]})},ev=`import { useToggle } from "@/hooks";
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
};`,Bi={code:ev,View:Zg};function tv(){const e=f("useTree.$apis.generics");return s(g,{children:[t(M,{id:"hook-api",children:"Api of useTree"}),s(M,{low:!0,top:"20px",children:["Generics",'<T extends object = { [key: string]: any }, K extends string | number = "_id">']}),t(te,{children:e}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:"{}",desc:"initial tree data"},{name:"options",type:"UseTreeOptions<T,K>",defaultValue:{idKey:"_id"},desc:"options of useTree",properties:[{name:"idKey",type:"string",defaultValue:"id",desc:"key of id"},{name:"renderNode",type:"(node: TreeNode<T>, idKey: string, level: number) => React.ReactNode",desc:"render node of tree"},{name:"renderEmpty",type:"React.ReactNode | (() => React.ReactNode)",desc:"render empty node of tree"},{name:"filterFn",type:"(node: TreeNode<T>) => boolean",desc:"filter node of tree"},{name:"strict",type:"boolean",defaultValue:!1,desc:"if true, addNode, removeNode, updateNode, moveNode will check and throw error; if false, will return the errMsg"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[{name:"[0] tree",type:'TreeNode<"_id">',desc:"state of tree data"},{name:"[1] manager",type:"TreeManager<T>",desc:"manager objectr of tree data",properties:[{name:"addNode",type:"(node: TreeNode<T>, parentId: any) => string | null",desc:"add a node to tree"},{name:"removeNode",type:"(nodeId: any) => string | null",desc:"remove a node from tree"},{name:"updateNode",type:"(nodeId: any, node: TreeNode<T>) => string | null",desc:"update a node of tree"},{name:"findNode",type:"(nodeId: any) => TreeNode<T> | null",desc:"find a node from tree"},{name:"moveNode",type:"(nodeId: any, parentId: T) => string | null",desc:"move a node to another node"},{name:"searchTree",type:"(nodeId: any) => TreeNode<T> | null",desc:"search a node from tree"},{name:"traverse",type:t(be,{theme:"oneLight",style:{background:"#ebebeb"},lang:"ts",children:`Traverse<Callback> {
  (callback: Callback): any[];
  (nodeId: string, callback?: 
    Callback | undefined): any[];
}`}),desc:"traverse tree or certain node"},{name:"render",type:"() => React.ReactNode[]|React.ReactNode|null",desc:"use options.renderNode to render tree"}]}]})]})}function ov(){const e="useTree",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:Bi.code,children:t(Bi.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(tv,{})]})}const nv=()=>{const e=Dn({name:"John",age:20,more:{address:"Taipei",score:100},messi:{game:{wordCup:{win:!0}}}},!0);return s(g,{children:[t(E,{onClick:()=>{e.age=Math.random()*100},children:"obj.age++"}),t(E,{onClick:()=>{e.more.score++},children:"obj.more.score++"}),t(E,{onClick:()=>{e.messi.game.wordCup.win=!e.messi.game.wordCup.win},children:"console.log(obj.age)"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},rv=`import Code from "@/components/code";
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
};`,Oi={code:rv,View:nv};function iv(){const e=f("useReactive.$apis.generics");return s(g,{children:[t(M,{id:"hook-api",children:"Api of useReactive"}),s(M,{low:!0,top:"20px",children:["Generics","<T = any>"]}),t(te,{children:e}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initialObject",type:"primitive | Array | object | Date | Map | Set",defaultValue:t(tt,{children:"Required"}),desc:"initial value of reactive"},{name:"deepReactive",type:"boolean",defaultValue:!0,desc:"Whether to make the object reactive deeply. Default: true"},{name:"...callbacks",type:"Watcher<T>[]",defaultValue:null,desc:"When a reactive value changes, the callback will be triggered"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Object)"}),t(Z,{return:!0,rows:[{name:"ReactiveObject",type:"Reactive<T>",defaultValue:null,desc:"reactive object from initialObject",details:s("p",{children:["If the initialObject is a primitive type, the return value is a reactive primitive type. Just like:",t(be,{lang:"ts",children:`const reactiveNumber = useReactive(1);
// typeof reactiveNumber will be like following:            
type ReactiveNumber =
{
  value: 1,
  set: (value: number) => void,
  get: () => number,
}`}),t("br",{})]})}]})]})}const sv=()=>{const e=Dn([1,2,3]);return u.useEffect(()=>{console.log(e)},[]),s(g,{children:[t(E,{onClick:()=>{e[0]++},children:"arr[0]++"}),t(E,{onClick:()=>{e.push(1)},children:"push"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},av=`import Code from "@/components/code";
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
};`,Di={code:av,View:sv},lv=()=>{let e=Dn(0);return u.useEffect(()=>{console.log(e)},[]),s(g,{children:[t(E,{onClick:()=>{e.value++},children:"c.value++"}),t(be,{theme:"oneLight",lang:"json",children:`${e.value}`})]})},cv=`import Code from "@/components/code";
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
};`,Ui={code:cv,View:lv},dv=()=>{let e=Dn(0);const[o,n]=u.useState();return s(g,{children:[t(E,{onClick:()=>{console.log(e),console.log(Nr(e)),n(Nr(e))},children:"assign cValue with unwrap"}),t(be,{theme:"oneLight",lang:"json",children:o?.toString()})]})},uv=`import Code from "@/components/code";
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
};`,zi={code:uv,View:dv};function pv(){const e="useReactive",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`),a=f(`${e}.$p2`),l=f(`${e}.$p3`),d=f(`${e}.$best`),c=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t("p",{children:i}),t(Y,{code:Oi.code,children:t(Oi.View,{})}),t("p",{children:a}),t(Y,{code:Di.code,children:t(Di.View,{})}),t("p",{children:l}),t(Y,{code:Ui.code,children:t(Ui.View,{})}),t(Y,{code:zi.code,children:t(zi.View,{})})]}),t(xe,{children:r}),t(Ne,{children:d}),t(Pe,{children:c}),t(iv,{})]})}const hv=()=>{const e=lo(),o=Wt({name:"John",age:20,more:{address:"Taipei",score:100},messi:{game:{wordCup:{win:!0}}}});return s(g,{children:[t(E,{onClick:()=>{e(o.value.messi.game.wordCup.win.toString()),console.log(o)},children:"toastWordCupWin"}),t(E,{onClick:()=>{o.set("messi.game.wordCup.win",!o.get("messi.game.wordCup.win"))},children:"set wordCup.win (render)"}),t(E,{onClick:()=>{o.value.messi.game.wordCup.win=!o.value.messi.game.wordCup.win},children:"assign wordCup.win (not render)"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(o,null,2)})]})},mv=`
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
`,Fi={code:mv,View:hv},fv=()=>{const e=Wt({name:"evan",sex:"male",age:20},[{name:"age++",action:o=>{e.set("age",++o.age)}}]);return s(g,{children:[t(E,{onClick:()=>{e.dispatch("age++")},children:"age++"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},gv=`import Code from "@/components/code";
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
`,_i={code:gv,View:fv},vv=()=>{const e=Wt({name:"evan",sex:"male",age:20},[{name:"age++",action:n=>{e.set("age",++n.age)}}]),o=lo();return Ws(e).then(()=>{const n=e.get("age");o(n?.toString())}),s(g,{children:[t(E,{onClick:()=>{e.dispatch("age++")},children:"age++"}),t("span",{children:"age will be toasted at screen if changes"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},bv=`import Code from "@/components/code";
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
`,Wi={code:bv,View:vv},yv=()=>{const e=Wt({name:"evan",sex:"male",age:20},[{name:"age++",action:r=>{e.set("age",++r.age)}}]);return s(g,{children:[t(E,{onClick:()=>{e.dispatch("age++")},children:"age++"}),t(E,{onClick:()=>{e.value={name:"messi",sex:"male",age:36}},children:"reAssign"}),t(E,{onClick:()=>{e.setValue({name:"Cristiano Ronaldo",sex:"male",age:38})},children:"set new value"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)})]})},xv=`import Code from "@/components/code";
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
`,Hi={code:xv,View:yv},$v=()=>{const e=Wt({name:"evan",sex:"male",age:20},[{name:"age++",action:(n,r,i)=>{i.set("age",++n.age)}}]),o=e.clone();return s(g,{children:[t(E,{onClick:()=>{e.dispatch("age++")},children:"age++"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(e,null,2)}),t(E,{onClick:()=>{o.dispatch("age++")},children:"age2++"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(o,null,2)}),t(E,{children:"clonedValue"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify(e.cloneValue(),null,2)})]})},wv=`import Code from "@/components/code";
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
`,qi={code:wv,View:$v},kv=()=>{const e=Wt(0,[{name:"age++",action(o,n,r){r.setValue(o+1)}}]);return s(g,{children:[t(E,{onClick:()=>{e.dispatch("age++")},children:"age++"}),t(E,{onClick:()=>{e.reset()},children:"reset"}),t(be,{theme:"oneLight",lang:"json",children:JSON.stringify({age:e,default:e.getDefaultValue()},null,2)})]})},Cv=`import Code from "@/components/code";
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
`,Ki={code:Cv,View:kv},Gi=({children:e,style:o,loading:n})=>s("div",{style:{position:"relative",...o},children:[e,n&&t("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,backgroundColor:"rgba(255, 255, 255, 0.666)"},children:t(en,{on:n})})]}),Ji={background:"#fafafa",height:"60px"},Tv=()=>{Fs();const e=Wt({name:"Leo Messi",sex:"male",age:20,received:"",loading:!1},[{name:"greet_to_cr7",action:r=>{e.emit("greet_to_cr7",`Hello! I'm ${r.name}.`)}},{name:"receive_greet_to_messi",action:(r,i)=>{e.set("loading",!0),setTimeout(()=>{e.set("received",i),e.set("loading",!1)},500)}}]);u.useEffect(()=>{e.on("greet_to_messi",r=>{e.dispatch("receive_greet_to_messi",r)})},[]);const o=Wt({name:"Cristiano Ronaldo",sex:"male",age:38,received:"",loading:!1},[{name:"greet_to_messi",action:(r,i)=>{o.emit("greet_to_messi",`Hello, ${i} I'm ${r.name}.`)}},{name:"receive_greet_to_cr7",action:(r,i)=>{o.set("loading",!0),setTimeout(()=>{o.set("received",i);const a=i.split(" ").slice(-1)[0];o.dispatch("greet_to_messi",a),o.set("loading",!1)},500)}}]);return u.useEffect(()=>{o.on("greet_to_cr7",r=>o.dispatch("receive_greet_to_cr7",r))},[]),s(g,{children:[t(E,{onClick:()=>{e.dispatch("greet_to_cr7")},children:"Messi greet to CR7"}),t(E,{onClick:()=>{e.set("received",""),o.set("received","")},style:{marginLeft:"1em"},children:"Reset All"}),t("div",{style:{marginLeft:"0.5em"},children:"Messi got: "}),t(Gi,{loading:e.get("loading"),style:Ji,children:t(be,{theme:"oneLight",lang:"text",children:e.get("received")})}),t("div",{style:{marginLeft:"0.5em"},children:"CR7 got: "}),t(Gi,{loading:o.get("loading"),style:Ji,children:t(be,{theme:"oneLight",lang:"text",children:o.get("received")})})]})},Rv=`import Code from "@/components/code";
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
`,Yi={code:Rv,View:Tv};function Sv(){const e=f("useReactor.$apis.generics");return s(g,{children:[t(M,{id:"hook-api",children:"Api of useReactive"}),s(M,{low:!0,top:"20px",children:["Generics","<T = any>"]}),t(te,{children:e}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initialValue",type:"any",defaultValue:t(tt,{children:"Required"}),desc:"initial value of reactor to hold"},{name:"plugins",type:"ReactorPlugin<T>[]",defaultValue:"[]",desc:"register plugins to invoke some actions and onActions."}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Object)"}),t(Z,{return:!0,rows:[{name:"ReactorInstance",type:"Reactor<T>",defaultValue:null,desc:"reactor object from initialValue",details:s("p",{children:["Reactor is a state management tool based on React Hooks with the following features:",s("ul",{children:[t("li",{children:"View updates are only triggered by set invocation or value reassignment."}),t("li",{children:"Direct changes to deep state properties won't trigger view updates but are stored in memory and applied on the next view update."}),t("li",{children:"Reactor is a reactive, proxy, cloneable, resettable, dispatchable, serializable, subscribable, listenable, and pluginable object."})]})]}),properties:[{name:"value",type:"T",desc:"The current value of the reactor."},{name:"get",type:"(path?: Path<T>) => PathValue<T, typeof path>",desc:"get certain property from the value of the reactor."},{name:"set",type:"(path?: Path<T>, value: PathValue<T, typeof path>) => void",desc:"Set certain property to the value of the reactor."},{name:"reset",type:"() => void",desc:"Reset the value of the reactor to the default value."},{name:"setValue",type:"(value: T | SetAction<T>) => void",desc:"Override the value with value proped."},{name:"setDefaultValue",type:"(value: T) => void",desc:"Override the defaultValue with value proped."},{name:"getDefaultValue",type:"() => T",desc:"get the default value of the reactor."},{name:"clone",type:"() => T",desc:"Clone this reactor."},{name:"cloneValue",type:"() => T",desc:"Clone the value of this reactor."},{name:"dispatch",type:"(action: string, payload?; any) => void",desc:"invoke the plugins action will certain action name equal to plugin's name."},{name:"emit",type:"(eventName: string, payload?: any) => void",desc:"send a event on reactor event bus."},{name:"on",type:"(eventName: string, handler: (payload?: any) => void) => void",desc:"listen a event on reactor event bus."}]}]})]})}function Mv(){const e="useReactor",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`),a=f(`${e}.$p1_1`),l=f(`${e}.$p2`),d=f(`${e}.$p3`),c=f(`${e}.$p4`),p=f(`${e}.$p5`),h=f(`${e}.$p6`),v=f(`${e}.$p7`),b=f(`${e}.$p7_notice`),$=f(`${e}.$best`),y=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e.replace(/([A-Z])/g,x=>x.toUpperCase()),desc:o,children:[t(te,{children:n}),s(Ve,{children:[t("p",{children:i}),t(Y,{code:Fi.code,children:t(Fi.View,{})}),t("p",{children:a}),t("br",{}),t("p",{children:l}),t(Y,{code:_i.code,children:t(_i.View,{})}),t("br",{}),t("p",{children:d}),t(Y,{code:Wi.code,children:t(Wi.View,{})}),t("br",{}),t("p",{children:c}),t(Y,{code:Hi.code,children:t(Hi.View,{})}),t("br",{}),t("p",{children:p}),t(Y,{code:qi.code,children:t(qi.View,{})}),t("br",{}),t("p",{children:h}),t(Y,{code:Ki.code,children:t(Ki.View,{})}),t("br",{}),t("p",{children:v}),t(Y,{code:Yi.code,children:t(Yi.View,{})}),b]}),t(xe,{children:r}),t(Ne,{children:$}),t(Pe,{children:y}),t(Sv,{})]})}function Pv(){const e="useReactorStore",o=f(`${e}.desc`),n=f(`${e}.detail`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),t(ie,{title:e,desc:o,children:t(te,{children:n})})}function Vv(){const e="useReactorStoreContext",o=f(`${e}.desc`),n=f(`${e}.detail`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),t(ie,{title:e,desc:o,children:t(te,{children:n})})}function Iv(){const e="useReactorStoreRef",o=f(`${e}.desc`),n=f(`${e}.detail`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),t(ie,{title:e,desc:o,children:t(te,{children:n})})}const Av=()=>{const[e,o,n]=xa(0);return s("span",{children:["cnt: ",e," ",t(E,{onClick:()=>o(Number(Math.floor(Math.random()*10))),children:"tick"}),t("br",{}),"cntChanges: ",n]})},Ev=`import useTickState from "@/hooks/useTickState";
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
`,Qi={code:Ev,View:Av},Nv=()=>{const[e,o,n]=xa(0,"onChange",r=>[r]);return s("span",{children:["cnt: ",e," ",t(E,{onClick:()=>o(Number(Math.floor(Math.random()*10))),children:"tick"}),t("br",{}),"cntChanges: ",n]})},Lv=`import useTickState from "@/hooks/useTickState";
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
`,Xi={code:Lv,View:Nv};function jv(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useTickState"}),s(M,{low:!0,top:"20px",children:["Generics","<T extends unknown = any>"]}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initial",type:"T",defaultValue:null,desc:"initial state"},{name:"tickBy",type:'"onSetState"|"onChange"',defaultValue:"onSetState",desc:"The trigger to increment the tick"},{name:"dependencies",type:"Array | (state) => Array",defaultValue:"[state]",desc:"onChange useEffect dependencies"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[{name:"[0] state",type:"T",defaultValue:null,desc:"state"},{name:"[1] setState",type:"SetStateAction",desc:"setState function"},{name:"[2] tick",type:"number",desc:"tick (value changes)"}]})]})}function Bv(){const e="useTickState",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$p2`),d=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t("p",{children:a}),t(Y,{code:Qi.code,children:t(Qi.View,{})}),t("p",{children:l}),t(Y,{code:Xi.code,children:t(Xi.View,{})})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:d}),t(jv,{})]})}const Ov=()=>{const[e,o,n]=pl("initial"),[r,i]=u.useState("initial"),a=l=>{i(l.target.value)};return s("div",{css:$css`margin: 20px;`,children:[t(cm,{label:"NewState",value:r,onInput:a}),t("br",{}),t(E,{onClick:()=>o(r),children:"setState"}),t(E,{onClick:()=>n.createMemento("memento 1"),children:"createMemento"}),t(E,{onClick:()=>n.rollback(),children:"rollback"}),t(E,{onClick:()=>n.forward(),children:"forward"}),t(E,{onClick:()=>n.clear(),children:"clear"}),s("label",{css:$css`display: block;`,children:["state: ",t("span",{children:e})]}),s("label",{css:$css`display: block;`,children:["idKey: ",t("span",{children:n.idKey})]}),s("label",{css:$css`display: block;`,children:["mementos: ",t("span",{children:JSON.stringify(n.mementos,null,2)})]}),s("label",{css:$css`display: block;`,children:["history: ",t("span",{children:JSON.stringify(n.history,null,2)})]})]})},Dv=`import useMemento from "@/hooks/useMemento";
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

`,Zi={code:Dv,View:Ov};function Uv(){const e=[{name:"initialState",type:"T",defaultValue:An.Null(),desc:"initial state of memento"},{name:"config",type:"object",defaultValue:{historySize:10,strict:!1},desc:"configuration for memento",properties:[{name:"historySize",type:"number",defaultValue:10,desc:"size of the history"},{name:"strict",type:"boolean",defaultValue:!1,desc:"throw error when idKey is not found"}]}],o=[{name:"[0] state",type:"T | null",defaultValue:"initialState",desc:"current state"},{name:"[1] setState",type:An.SetAction("T|null"),desc:"set new state to memento (popstate)"},{name:"[2] manager",type:"object",desc:"memento manager with various methods",properties:[{name:"idKey",type:"number | NaN",desc:"current state's id"},{name:"createMemento",type:"(idKey: string) => void",desc:"create a memento"},{name:"deleteMemento",type:"(idKey: string) => void",desc:"delete a memento"},{name:"clearMementos",type:"() => void",desc:"clear all mementos"},{name:"rollback",type:"() => void",desc:"rollback to previous state"},{name:"forward",type:"() => void",desc:"forward to next state"},{name:"goToHistory",type:"(index: number) => void",desc:"go to a history state"},{name:"goToMemento",type:"(idKey: string) => void",desc:"go to a memento state"},{name:"deleteHistory",type:"(index: number) => void",desc:"delete a history state"},{name:"clearHistory",type:"() => void",desc:"clear all history states"},{name:"clone",type:"(idKey: string) => void",desc:"clone a history state"},{name:"clear",type:"() => void",desc:"clear all states"},{name:"history",type:"Array<HistoryItem<T>>",desc:"all history states"},{name:"mementos",type:"Array<Memento<T>>",desc:"all mementos"}]}];return s(g,{children:[t(M,{id:"hook-api",children:"Api of useMemento"}),s(M,{low:!0,top:"20px",children:["Generics","<T = any>"]}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:o})]})}function zv(){const e="useMemento",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$p2`),d=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t("p",{children:a}),t(Y,{code:Zi.code,children:t(Zi.View,{})}),t("p",{children:l})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:d}),t(Uv,{})]})}const Fv=()=>{const[e,o]=u.useState(0),n=Sm(()=>{o(e+1)},1e3,{immediate:!0,pauseAtFirst:!1}),r=()=>n.pause(),i=()=>n.resume(),a=()=>{n.reset(),o(0)},l=()=>n.delayedPause(2e3),d=()=>n.delayedResume(2e3);return s(g,{children:[s("p",{children:["count: ",e," ticker: ",n.tick]}),t(E,{onClick:r,children:"pause"}),t(E,{onClick:i,children:"resume"}),t(E,{onClick:a,children:"reset"}),t(E,{onClick:l,children:"pause after 2s"}),t(E,{onClick:d,children:"resume after 2s"})]})},_v=`import useTicker from "@hooks/useTicker";
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
};`,es={code:_v,View:Fv};function Wv(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useTicker"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"fn",type:"(tick: number) => void",desc:"callback function"},{name:"options or duration",type:"TickerOptions | number",desc:"options or duration"},{name:"options",type:"TickerOptions",desc:"options"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Object)"}),t(Z,{return:!0,rows:[{name:"tick",type:"number",defaultValue:0,desc:"tick count"},{name:"status",type:'"on" | "off"',defaultValue:'"off"',desc:"status of ticker"},{name:"resume",type:"() => void",desc:"resume ticker"},{name:"pause",type:"() => void",desc:"pause ticker"},{name:"reset",type:"() => void",desc:"reset ticker"},{name:"delayedPause",type:"(delay: number) => void",desc:"pause ticker after delay"},{name:"delayedResume",type:"(delay: number) => void",desc:"resume ticker after delay"}]})]})}function Hv(){const e="useTicker",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:es.code,children:t(es.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(Wv,{})]})}const qv=()=>{const[e,o]=u.useState(0),r=Vm(()=>{o(i=>i+1)},1e3,!1);return s(g,{children:[s("h4",{children:["count: ",e]}),t(E,{onClick:r,variant:"contained",color:"primary",children:"+1"})]})},Kv=`
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
`,ts={code:Kv,View:qv};function Gv(){const e=[{name:"fn",type:"(args: any[]) => R",defaultValue:void 0,desc:"debounce function"},{name:"delay",type:"number",defaultValue:200,desc:"delay time"},{name:"immediate",type:"boolean",defaultValue:!1,desc:"whether to execute immediately"},{name:"callback",type:"(result: R) => void",defaultValue:void 0,desc:"callback function"}],o=[{name:"debounceFn",type:"function & { cancel: () => void }",desc:"debounce function",properties:[{name:"cancel",type:"() => void",desc:"cancel function"}]}],n=f("useDebounce.$apis.generics");return s(g,{children:[t(M,{id:"hook-api",children:"Api of useDebounce"}),t("pre",{children:`function useDebounce<R = void>(
  fn: (args: any[]) => R, 
  delay?: number, 
  immediate?: boolean, 
  callback?: (result: ReturnType<typeof fn>) => void
  ): {
    (...args: any[]): Promise<unknown>;
    cancel(): void;
}`}),n,t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Function Object)"}),t(Z,{return:!0,rows:o})]})}function Jv(){const e="useDebounce",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:ts.code,children:t(ts.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(Gv,{})]})}const Yv=()=>{const[e,o]=u.useState(0),n=hl(function(){o(r=>r+1)},1e3);return s(g,{children:[s("p",{children:["Throttle: ",e]}),t(E,{variant:"contained",onClick:n,children:"Throttle + 1"})]})},Qv=`
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
`,os={code:Qv,View:Yv};function Xv(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useThrottle"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"fn",type:"(args: any[]) => R",defaultValue:void 0,desc:"function to throttle"},{name:"interval",type:"number",defaultValue:200,desc:"time to throttle"},{name:"options",type:"object",defaultValue:{leading:!0,trailing:!1},desc:"options of the throttle",properties:[{name:"leading",type:"boolean",defaultValue:!0,desc:"call function on leading edge"},{name:"trailing",type:"boolean",defaultValue:!1,desc:"call function on trailing edge"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Function Object)"}),t(Z,{return:!0,rows:[{name:"throttleFn",type:"function & { cancel: () => void }",desc:"throttled function",properties:[{name:"cancel",type:"() => void",desc:"cancel function"}]}]})]})}function Zv(){const e="useThrottle",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:os.code,children:t(os.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(Xv,{})]})}const eb=()=>{const{params:e}=vr(()=>{console.log("url changed")},"ursUrl exmaple1 listener",!0);return s(g,{children:[t("span",{children:"url params: "}),t("code",{children:JSON.stringify(e,null,2)}),s("span",{style:{color:"gainsboro"},children:[" ","( try to change query params in broswer location bar )"]})]})},tb=`
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
`,ns={code:tb,View:eb};function ob(){const e=f("useUrl.desc"),o=f("useUrl.detail"),n=f("useUrl.consideration");return u.useEffect(()=>{document.title=`useUrl - ${se.homepage}`},[]),s(ie,{title:"UseUrl",desc:e,children:[t(te,{children:o}),t(Y,{code:ns.code,children:t(ns.View,{})}),t(xe,{children:n})]})}const nb=()=>{const[e,o]=Un([{ids:["logs"],name:"guide",renders:[{id:"logs",render(c,p,h,v){return s("div",{onClick:()=>{o.stop()},style:{width:"fit-content"},children:[p," ",h," : only the first not work (☝️ click here to close )"]})}}]}],void 0,{containerStyle:{backgroundColor:"#fff",zIndex:"9999",padding:"10px 20px",borderRadius:"6px",cursor:"pointer"}}),n=[],[r,i]=u.useState({a:1,b:2,c:{c1:1,c2:{"c3.x":1}}}),a=Xn(r,"c.c2.c3.x",(c,p)=>{console.log(`num.c.c2.["c3.x"]: ${c} -> ${p}`)}),l=Xn(r,"c.c2.c3.x",(c,p)=>{console.log(`(#c__c2__c3_x$strict) num.c.c2.["c3.x"]: ${c} -> ${p}`)},!0),d=Xn(r,["c","c2","c3.x"],(c,p)=>{console.log(`(#c__c2__c3_x$array) num.c.c2.["c3.x"]: ${c} -> ${p}`)},{immediate:!0});return s(g,{children:[t(E,{variant:"outlined",onClick:()=>{o.start(),i(c=>({...c,c:{...c.c,c2:{...c.c.c2,"c3.x":c.c.c2["c3.x"]+1}},a:r.a+1}))},children:JSON.stringify(r,null,2)}),s("div",{css:$css({marginBlock:"1rem"}),children:[s(E,{variant:"contained",color:"success",children:["c__c2__c3_x: ",a]})," ",'default is non-strict mode, the special key "c3.x" will cause mistake.']}),s("div",{css:$css({marginBlock:"1rem"}),children:[s(E,{variant:"contained",color:"success",children:["c__c2__c3_x$strict: ",l]})," ","set strict mode to ",t("code",{children:"true"})," works, but may cause energy consumption."]}),s("div",{css:$css({marginBlock:"1rem"}),children:[s(E,{variant:"contained",color:"success",children:["c__c2__c3_x$array: ",d]})," ",t("strong",{children:"Most suggested"}),': use array to access the special key "c3.x".']}),t("div",{id:"logs",children:n.filter(c=>!c.startsWith("theme")).map((c,p)=>t("p",{children:c},p))})]})},rb=`
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
`,rs={code:rb,View:nb};function ib(){const e=[{name:"object",type:"object state variable",required:!0,defaultValue:void 0,desc:"object state variable to watch"},{name:"path",type:"(value: T) => void | undefined",defaultValue:void 0,desc:"callback function when value changed"},{name:"callback",type:"Callback<V>",defaultValue:void 0,desc:"callback function when value changed"},{name:"configOrStrict",type:"Config | boolean",defaultValue:!1,desc:s("div",{css:$css`text-align: left;`,children:["Config object to configure the watch behavior.",t("br",{}),"Config structure:",t("pre",{children:`interface Config {
  strict?: boolean;
  immediate?: boolean;
}`})]})},{name:"immediate",type:"boolean",defaultValue:!1,desc:"whether to execute callback immediately"}];return s(g,{children:[t(M,{id:"hook-api",children:"Api of useWatchGetter"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (value)"}),t(Z,{return:!0,rows:[{name:"value",type:"T | undefined",defaultValue:null,desc:"value watched"}]})]})}function sb(){const e="useWatch",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`useWatch - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:rs.code,children:t(rs.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(ib,{})]})}const ab=()=>{const[e,o]=u.useState({a:1,b:2}),n=()=>o(a=>({...a,a:a.a+1})),r=()=>o(a=>({...a,a:a.a-1})),i=Am(()=>e.a);return s(g,{children:[t(E,{onClick:n,children:"Increment"}),t(E,{onClick:r,children:"Decrement"}),t("pre",{children:JSON.stringify(i,null,2)})]})},lb=`
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
`,is={code:lb,View:ab};function cb(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useWatchGetter"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"getter",type:"getter function",required:!0,defaultValue:void 0,desc:"getter function should return a value"},{name:"callback",type:"(value: T) => void | undefined",defaultValue:void 0,desc:"callback function when value changed"},{name:"updater",type:"boolean",defaultValue:"false",desc:"if true, return [value, updater]"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (value or Array([value, updater]))"}),t(Z,{return:!0,rows:[{name:"value or array",type:"T | [T, Function]",defaultValue:null,desc:"value or Array([value, updater])"}]})]})}function db(){const e="useWatchGetter",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:is.code,children:t(is.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(cb,{})]})}const ss=e=>{const o=Wt("user"),[n,r]=u.useState("");return Em(o,i=>{r(i),console.log("user changes")},e.immediate),s(g,{children:[s(E,{onClick:()=>o.setValue(Math.random().toString(36).slice(-8)),children:["user changes ",e.immediate?"immediate":"unimmediate"]}),s("div",{children:["user: ",o.value]}),s("div",{children:["useCopy: ",n]})]})},ub=()=>s(g,{children:[t(ss,{}),t(ss,{immediate:!0})]}),pb=`import useReactorListener from "@hooks/useReactorListener";
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
`,as={code:pb,View:ub};function hb(){const e=[{name:"target",type:"Reactor<T>",defaultValue:t(tt,{children:"Required"}),desc:"An instance of Reactor Class"},{name:"callback",type:An.Function("(value: T) => void"),defaultValue:An.Undefined(),desc:"callback function"}];return s(g,{children:[t(M,{id:"hook-api",children:"Api of useReactorListener"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Void)"})]})}function mb(){const e="useReactorListener",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t("p",{children:a}),t(Y,{code:as.code,children:t(as.View,{})})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(hb,{})]})}const fb=()=>{const e=$a();return t(g,{children:s("span",{children:["x: ",e.width,", y: ",e.height]})})},gb=`
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
`,ls={code:gb,View:fb},vb=()=>{const e=lo(),o=u.useRef(null),n=$a({callback(d){e(`width: ${d.width}, height: ${d.height}`)},target:o}),[r,i]=u.useState(200),[a,l]=u.useState(200);return s(g,{children:[s("div",{ref:o,style:{width:r+"px",height:a+"px",backgroundColor:"lightblue"},children:["x: ",n.width,", y: ",n.height]}),t(ni,{value:r,onChange:(d,c)=>i(c),min:10,max:500,step:1,valueLabelDisplay:"auto"}),t(ni,{value:a,onChange:(d,c)=>l(c),min:10,max:500,step:1,valueLabelDisplay:"auto"})]})},bb=`
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
`,cs={code:bb,View:vb};function yb(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useResize"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"options",type:"{ callback?; target? }",defaultValue:{},desc:"if target is undefined, it will listen to window resize. target chould be id string or ref object",properties:[{name:"callback",type:"(size) => void | undefined",defaultValue:void 0,desc:"callback function when size changed"},{name:"target",type:"string | RefObject | undefined",defaultValue:void 0,desc:"target element to listen resize"}]},{name:"deps",type:"any[]",defaultValue:[],desc:"dependencies list"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Object)"}),t(Z,{return:!0,rows:[{name:"size",type:"{ width: number, height: number }",defaultValue:null,desc:"size object"}]})]})}function xb(){const e="useResize",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$h2`),d=f(`${e}.$p2`),c=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:ls.code,children:t(ls.View,{})}),t("p",{children:a}),t(M,{children:l}),t(Y,{code:cs.code,children:t(cs.View,{})}),t("p",{children:d})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:c}),t(yb,{})]})}const $b=()=>{const[e,o]=Nm(async()=>await(await fetch("https://api.example.com/data")).json());return s(g,{children:[e.status==="idle"&&t("p",{children:"Click the button to fetch data"}),e.status==="pending"&&t("p",{children:"Loading..."}),e.status==="resolved"&&t("p",{children:"Success!"}),e.status==="rejected"&&t("p",{children:"Error!"}),t(E,{onClick:o,children:"Abort"})]})},wb=`

`,ds={code:wb,View:$b};function kb(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of usePromise"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[]})]})}function Cb(){const e="usePromise",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:ds.code,children:t(ds.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(kb,{})]})}function Tb(){const e="useGenerator",o=f(`${e}.desc`),n=f(`${e}.detail`);return f(`${e}.$best`),f(`${e}.consideration`),f(`${e}.$p1`),f(`${e}.$faqs`),u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),t(ie,{title:e,desc:o,children:t(te,{children:n})})}const Rb=()=>{const[e,o]=u.useState(""),n=lo(),r=yr("kid1","kid2",i=>{o(i),n(`${i}`)});return s(g,{children:[t(E,{onClick:()=>{r.emit("kid1","kid1 said Hello!")},children:"Kid1 Send"}),t(qs,{value:e})]})},Sb=()=>{const e=yr("kid2"),o=lo(),[n,r]=u.useState("");return u.useEffect(()=>{e.subscribe("kid1",i=>{o(`${i}`),r(i)})},[]),s(g,{children:[t(E,{onClick:()=>{e.emit("kid2","kid2 said Hello!")},children:"Kid2 Send"}),t(qs,{value:n})]})},Mb=()=>{const e=u.useContext(Hs),o=()=>{const i={};e.forEach((a,l)=>{i[l]=a}),console.log(i)},[n,r]=Dt();return s(g,{children:[t(E,{onClick:o,children:"Print All listners"}),t("br",{}),t(Rb,{}),t("br",{}),t(E,{onClick:r,children:"Show/Hide Kid2"}),n&&t(Sb,{})]})},Pb=`

  `,us={code:Pb,View:Mb};function Vb(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useEmitter"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function Ib(){const e="useEmitter",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:us.code,children:t(us.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(Vb,{})]})}const Ab=()=>{const e=yr("tester"),o=lo(),[n]=ml("test",(...a)=>{o(JSON.stringify(a))}),r=u.useContext(Hs),i=()=>{const a={};r.forEach((l,d)=>{a[d]=l}),console.log(a)};return s(g,{children:[t(E,{onClick:()=>{e.emit("test","hello")},children:"Send"}),t("div",{children:JSON.stringify(n)}),t(E,{onClick:i,children:"Print All"})]})},Eb=`

`,ps={code:Eb,View:Ab};function Nb(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useReceiver"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function Lb(){const e="useReceiver",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:ps.code,children:t(ps.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(Nb,{})]})}const jb=()=>{const[e,o]=u.useState({name:"Evan",age:20});return Ks("someone",e),s(g,{children:[t(E,{onClick:()=>o({...e,name:e.name==="Evan"?"Nave":"Evan"}),children:e.name}),t(E,{onClick:()=>o({...e,age:e.age+1}),children:e.age})]})},Bb=()=>{const[e]=Pn("someone"),[o]=Pn("someone");return s(g,{children:[s("div",{style:{display:"flex"},children:[t("span",{children:e?.name}),t("div",{style:{width:"2rem"}}),t("span",{children:e?.age})]}),s("div",{style:{display:"flex"},children:[t("span",{children:o?.name}),t("div",{style:{width:"2rem"}}),t("span",{children:o?.age})]})]})},Ob=()=>s(g,{children:[t("h4",{children:"UseProvide"}),t(jb,{}),t("h4",{children:"Inject"}),t(Bb,{})]}),Db=`import useInject from "@/hooks/useInject";
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
};`,hs={code:Db,View:Ob};function Ub(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useProvide"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"name",type:"string",defaultValue:t(tt,{children:"Required"}),desc:"The unique name of the state to be provided globally"},{name:"state",type:"any",defaultValue:t(tt,{children:"Required"}),desc:"The state to be provided globally"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Void)"})]})}function zb(){const e="useProvide",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:hs.code,children:t(hs.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(Ub,{})]})}const Fb=()=>{const[e,o]=u.useState({name:"Evan",age:20});return Ks("someone",e),s(g,{children:[t(E,{onClick:()=>o({...e,name:e.name==="Evan"?"Nave":"Evan"}),children:e.name}),t(E,{onClick:()=>o({...e,age:e.age+1}),children:e.age})]})},_b=()=>{const[e]=Pn("someone"),[o]=Pn("someone");return s(g,{children:[s("div",{style:{display:"flex"},children:[t("span",{children:e?.name}),t("div",{style:{width:"2rem"}}),t("span",{children:e?.age})]}),s("div",{style:{display:"flex"},children:[t("span",{children:o?.name}),t("div",{style:{width:"2rem"}}),t("span",{children:o?.age})]})]})},Wb=()=>s(g,{children:[t("h4",{children:"UseProvide"}),t(Fb,{}),t("h4",{children:"Inject"}),t(_b,{})]}),Hb=`import useInject from "@/hooks/useInject";
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
};`,ms={code:Hb,View:Wb};function qb(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useInject"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"name",type:"string",defaultValue:t(tt,{children:"Required"}),desc:"The unique name of the state to be provided globally"}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[{name:"[0]state",type:"T[K] | undefined",defaultValue:null,desc:"state injected from provided globally, if the state is not provided, it will be undefined, and because of the delay of event, the state will be undefined at the first render"},{name:"[1]setState",type:s(g,{children:[t(Ee,{label:"(value: T[K] | undefined) => void"})," |"," ",t(Ee,{label:"undefined"})]}),desc:"set state function, if the state is not provided, it will be undefined"}]})]})}function Kb(){const e="useInject",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:ms.code,children:t(ms.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(qb,{})]})}const Gb=[`
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
`];function Jb(){u.useEffect(()=>{document.title=`useRipple - ${se.homepage}`},[]);const e=gr();return s(ie,{title:"UseRipple",desc:"useRipple is a hook for using houdini particle effect.",children:[t(te,{children:"A hook to render ripple effect by using houdini paintWorklet."}),t(M,{children:"Usage"}),t(Y,{code:Gb[0],children:t("div",{css:Yb.demo1,ref:e,children:"Click to render ripple effect"})}),t(M,{children:"Considerations"}),t(te,{children:s("ol",{children:[s("li",{children:[t("strong",{children:"useRipple"})," is a hook to render ripple effect by using ",t("strong",{children:"houdini"})," paintWorklet."]}),s("li",{children:[t("strong",{children:"mousedown"})," is the default trigger to render ripple effect. You should avoid using the same trigger on you component other click-like handler to avoid conflict."]}),s("li",{children:["Different triggers will make the effect a little ",t("strong",{children:"different"}),"."]})]})})]})}const Yb={demo1:$css`
  &:hover {
    cursor: pointer;
    background-color: azure;
  }
  &::selection {
    background-color: transparent;
  }
`};function Qb(){u.useEffect(()=>{document.title=`useParticle - ${se.homepage}`},[]);const e=Pr({color:"blue"});return s(ie,{title:"UseParticle",desc:"useParticle is a hook for using houdini particle effect.",children:[t(te,{children:"A hook to render particle effect by using houdini paintWorklet."}),t(Sr,{children:t("div",{css:$css`
          &::selection {
            background-color: transparent;
          }
          &:hover {
            cursor: pointer;
            background-color: gainsboro;
          }
        `,ref:e,children:"Particle"})})]})}const Xb=()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 50 50",children:[t("circle",{cx:"25",cy:"25",r:"20",stroke:"#aaa","stroke-width":"2",fill:"none"}),t("line",{x1:"15",y1:"15",x2:"35",y2:"35",stroke:"#aaa","stroke-width":"2"})]});function Zb(){const[e,o]=u.useState([]),[n,r]=u.useState(!0),i=async()=>{await new Promise(h=>setTimeout(h,1e3+Math.random()*1e3)),o(h=>[...h,...Array.from({length:10},(v,b)=>b+h.length)]),e.length+10>=50&&r(!1)},a=h=>t("div",{css:$css`margin-left: 20px`,children:h}),[l,d,c,p]=jm({loadMoreItems:i,items:e,hasMore:n,renderItem:a,renderEmpty:s("div",{css:$css`display: flex; align-items: center; padding-block: 20px;`,children:[t("span",{children:"No Data"}),t("div",{css:$css`margin-left: 12px; width: 20px; height: 20px;`,children:t(Xb,{})})]}),height:"300px",style:{position:"relative"},loaderComponentProps:{style:{marginBlock:"20px"}},renderTop:()=>s("div",{css:$css`display: flex; align-items: center; position: sticky; top: 0; z-index: 1; background-color: #fff; padding: 10px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);`,children:[t("strong",{children:"total : "}),t("span",{css:$css`margin-left: 20px;`,children:e.length}),t("strong",{css:$css`margin-left: 20px;`,children:"hasMore : "}),t("span",{css:$css`margin-left: 20px;`,children:n.toString()}),t("strong",{css:$css`margin-left: 20px;`,children:"loading : "}),t("span",{css:$css`margin-left: 20px;`,children:d.toString()})]}),renderLoader:()=>s("div",{css:$css`display: flex; align-items: center; margin-left: 12px;`,children:[t(en,{on:!0}),t("span",{css:$css`margin-left: 20px; color: #44A2FC;`,children:"Loading Items..."})]}),renderUnLoaded:()=>s("div",{css:$css`display: flex; align-items: center;`,children:[t("span",{css:$css`color: #333;`,children:"No more Items"}),t("span",{css:$css`
              margin-left: 20px;
              color: #44A2FC;
              cursor: pointer;
            `,onClick:()=>{o([]),r(!0)},children:"Restart"})]})});return t("div",{children:p()})}const ey=`import React, { useState, useEffect } from "react";
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
`,fs={View:Zb,code:ey};function ty(){const e=[{name:"options",type:"object",defaultValue:t(tt,{children:"Required"}),desc:"options of VirtualAreaOptions",properties:[{name:"loadMoreItems",type:"function",defaultValue:t(tt,{children:"Required"}),desc:"load more items function",details:"() => Promise<void>"},{name:"items",type:"any[]",defaultValue:t(tt,{children:"Required"}),desc:"items to render"},{name:"hasMore",type:"boolean",defaultValue:t(tt,{children:"Required"}),desc:"whether there are more items to load"},{name:"height",type:"React.CSSProperties['height']",defaultValue:t(tt,{children:"Required"}),desc:"height of virtual area"},{name:"style",type:"React.CSSProperties",defaultValue:"{}",desc:"style of virtual area"},{name:"renderTop",type:"React.ReactNode | (() => React.ReactNode)",defaultValue:"null",desc:"render function of top area"},{name:"renderItem",type:"React.ReactNode | ((item: any) => React.ReactNode)",defaultValue:t(tt,{children:"Required"}),desc:"render function of item"},{name:"itemComponent",type:"I",defaultValue:"null",desc:"component of item"},{name:"itemComponentProps",type:"React.JSX.IntrinsicElements[I]",defaultValue:"{}",desc:"props of item component"},{name:"renderEmpty",type:"React.ReactNode | (() => React.ReactNode)",defaultValue:"No data",desc:"render function of no data"},{name:"renderLoader",type:"React.ReactNode | (() => React.ReactNode)",defaultValue:"Loading...",desc:"render function of loader"},{name:"renderUnLoaded",type:"React.ReactNode | (() => React.ReactNode)",defaultValue:"No more data",desc:"render function of unloaded"},{name:"loaderComponent",type:"L",defaultValue:"div",desc:"component of loader"},{name:"loaderComponentProps",type:"React.JSX.IntrinsicElements[L]",defaultValue:"{}",desc:"props of loader component"},{name:"containerComponent",type:"C",defaultValue:"div",desc:"component of container"},{name:"containerComponentProps",type:"React.JSX.IntrinsicElements[C]",defaultValue:"{}",desc:"props of container component"},{name:"renderBottom",type:"React.ReactNode | (() => React.ReactNode)",defaultValue:"null",desc:"render function of bottom area"},{name:"observerOptions",type:"IntersectionObserverInit",defaultValue:{root:null,rootMargin:"20px",threshold:1},desc:"options of IntersectionObserver"}]},{name:"depths",type:"array",defaultValue:t(g,{children:"[]"}),desc:"dependencies of items render function"}],o=[{name:"[0] loaderRef",type:t(Ee,{label:"RefObject"}),desc:"ref of loader"},{name:"[1] loading",type:"boolean",desc:"state of loading"},{name:"[2] items",type:"Array<any>",desc:"items of list"},{name:"[3] render",type:"() => JSX.Element",desc:"render function of virtual area"}],n=f("useVirtualArea.$apis.generics");return s(g,{children:[t(M,{id:"hook-api",children:"Api of useVirtualArea"}),s(M,{low:!0,top:"20px",children:["Generics","<C, I, L>"]}),t(te,{children:n}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:e}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:o})]})}function oy(){const e="useVirtualArea",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.consideration`),i=f(`${e}.$p1`),a=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e.replace(/([A-Z])/g,l=>l.toUpperCase()),desc:o,children:[t(te,{children:n}),t(Ve,{children:t(Y,{code:fs.code,children:t(fs.View,{})})}),t("p",{children:i}),t(xe,{children:r}),t(Pe,{children:a}),t(ty,{})]})}const ny=()=>{const[e,o]=Un(Array.from({length:9},(n,r)=>r+1).map(n=>({ids:[`s${n}`],name:`Step ${n}`,data:{},renders:[{id:`s${n}`,render(r,i,a,l){console.log(r,i,a,l);const d=n===9?o.stop:o.next;return s("div",{css:$css`
              display: flex;
              align-items: center;
              width: fit-content; 
              position: absolute;
              background: #fff;
              padding: 4px 20px;
              border-radius: 6px;
              transform: translate(-50%, 50%);
              `,children:[t("div",{css:$css`width: 60px;`,children:i}),t("div",{css:$css`padding: 4px 12px; &:hover { cursor: pointer; background: #eee;  border-radius: 4px;}`,onClick:d,children:n===9?"End":"Next"})]})}}]})));return s("div",{css:kt.containerCss,children:[t("div",{id:"s1",css:kt.boxCss("red"),onClick:o.start,children:"Start"}),t("div",{id:"s2",css:kt.boxCss("green"),children:"2"}),t("div",{id:"s3",css:kt.boxCss("blue"),children:"3"}),t("div",{id:"s4",css:kt.boxCss("black"),children:"4"}),t("div",{id:"s5",css:kt.boxCss("purple"),children:"5"}),t("div",{id:"s6",css:kt.boxCss("pink"),children:"6"}),t("div",{id:"s7",css:kt.boxCss("cyan"),children:"7"}),t("div",{id:"s8",css:kt.boxCss("magenta"),children:"8"}),t("div",{id:"s9",css:kt.boxCss("orange"),children:"9"})]})};var kt;(e=>{e.containerCss=$css`
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
`})(kt||(kt={}));const ry=`import useGuide from "@hooks/useGuide";

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
`,gs={code:ry,View:ny};function iy(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useGuide"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[]})]})}const ja=e=>{const{id:o,name:n,data:r,ids:i,guider:a}=e;return t("div",{onClick:a.stop,css:Jo.guide,children:"Stop"})},sy=()=>{const[,e]=Un([{ids:["example2-s1"],name:"Step1",renders:[{id:"example2-s1",render(o,n,r,i){return t(ja,{...{id:o,name:n,data:r,ids:i,guider:e}})}}]}]);return t("div",{children:t("div",{id:"example2-s1",onClick:e.start,style:Jo.btn,children:"Start"})})},ay=()=>{const[,e]=Un([{ids:["example2-s2"],name:"Step1",renders:[{id:"example2-s2",render(o,n,r,i){return t(ja,{...{id:o,name:n,data:r,ids:i,guider:e}})}}]}]);return t(fl,{id:"example2-s2",guider:e,children:t("div",{id:"example2-s2",onClick:e.start,style:Jo.btn,children:"Start"})})};var Jo;(e=>{e.btn={cursor:"pointer",background:"#fff",padding:"4px 20px",borderRadius:"6px",border:"1px solid #333",boxSizing:"content-box"},e.guide=$css({display:"flex",alignItems:"center",width:"fit-content",position:"absolute",background:"#fff",padding:"4px 20px",borderRadius:"6px"})})(Jo||(Jo={}));const ly=()=>s("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-around"},children:[t(sy,{}),t(ay,{})]}),cy=`import useGuide, { Guider, Target } from "@hooks/useGuide";

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
`,vs={code:cy,View:ly};function dy(){const e="useGuide",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$p2`),d=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t("p",{children:a}),t(Y,{code:gs.code,children:t(gs.View,{})}),t("p",{children:l}),t(Y,{code:vs.code,children:t(vs.View,{})})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:d}),t(iy,{})]})}function uy({loadMore:e,hasMore:o,loader:n,component:r,props:i,preloadDistance:a=200,observerOptions:l,disabled:d,containerId:c,containerRef:p,mode:h="auto"}){const[v,b]=u.useState([]),[$,y]=u.useState(!1),x=u.useRef(null),w=u.useRef(null),S=u.useRef(null),P=u.useRef(!1),C=u.useRef(null),T=u.useRef(!0),I=u.useRef(e),k=u.useRef(o);I.current=e,k.current=o;const A=u.useCallback(()=>h==="auto"?x.current?"container":"viewport":h,[h]);u.useEffect(()=>{x.current=document.getElementById(c)},[c,p]),u.useEffect(()=>()=>{T.current=!1,w.current?.disconnect()},[]);const j=u.useCallback(()=>{const F=S.current;if(!F)return!1;const W=F.getBoundingClientRect();if(A()==="viewport")return W.top<=window.innerHeight+a;const ae=x.current;if(!ae)return console.error("[react-hooks-kit][useInfiniteScroll] Container element not found for infinite scroll."),!1;const J=ae.getBoundingClientRect();return W.top<=J.bottom+a},[a,A]),z=u.useCallback(async()=>{if(P.current||C.current||!k.current||d)return;P.current=!0,T.current&&y(!0);const F=I.current();C.current=F;try{const W=await F;Array.isArray(W)&&T.current&&b(oe=>[...oe,...W])}finally{C.current=null,P.current=!1,T.current&&(y(!1),requestAnimationFrame(()=>{!P.current&&k.current&&!d&&j()&&z()}))}},[d,j]),N=u.useCallback(F=>{if(S.current=F,w.current&&w.current.disconnect(),!F){w.current=null;return}w.current=new IntersectionObserver(W=>{W[0]?.isIntersecting&&z()},{root:A()==="container"?x.current:null,rootMargin:`0px 0px ${a}px 0px`,threshold:0,...l}),w.current.observe(F),requestAnimationFrame(()=>{!P.current&&k.current&&!d&&j()&&z()})},[z,a,l,d,j,A]),D=u.useCallback(()=>{b([]),P.current=!1,y(!1)},[]),X=u.useCallback(async()=>{D(),await new Promise(F=>requestAnimationFrame(()=>F(void 0))),await z()},[D,z]),B=r||"div",L=$?typeof n=="function"?n():n??"Loading...":null;return{loader:t(B,{ref:N,...i,children:L}),loading:$,items:v,setItems:b,reset:D,reload:X,triggerLoadMore:z}}const py=e=>new Promise(o=>{setTimeout(()=>{const i=Array.from({length:10}).map((a,l)=>({id:(e-1)*10+l+1,title:`Item ${(e-1)*10+l+1}`}));o({items:i,hasMore:e<5})},1e3)}),hy=()=>{const[e,o]=u.useState(1),[n,r]=u.useState(!0),{loader:i,items:a,reset:l}=uy({loadMore:async()=>{const d=await py(e);return o(c=>c+1),r(d.hasMore),d.items},hasMore:n,loader:t("div",{style:{textAlign:"center"},children:"Loading more..."}),preloadDistance:200,mode:"container",containerId:"infinite-scroll-container"});return s(Sr,{id:"infinite-scroll-container",style:{maxWidth:400,height:220,margin:"20px auto",padding:20,overflow:"auto"},children:[t(E,{onClick:l,children:"Reset"}),a.map((d,c)=>t("div",{style:{height:20},children:d.title},c)),i]})},my=`
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
`,bs={code:my,View:hy};function fy(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useInfiniteScroll"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[]})]})}function gy(){const e="useInfiniteScroll",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:bs.code,children:t(bs.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(fy,{})]})}const vy=()=>t(g,{children:t("h3",{children:"useAutoPageSize"})}),by=`

`,ys={code:by,View:vy};function yy(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useAutoPageSize"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[]})]})}function xy(){const e="useAutoPageSize",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:ys.code,children:t(ys.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(yy,{})]})}const $y=()=>{const[e,o]=Bm(0,(c,p)=>5<(p??0)?"Num cannot be greater than 5":null,(c,p)=>0>(p??0)?"Num cannot be less than 0":null),[n,r]=u.useState(null),[i,a]=u.useState(!1),l=()=>{a(!1)},d=s(u.Fragment,{children:[t(E,{color:"secondary",size:"small",onClick:l,children:"UNDO"}),t(Ln,{size:"small","aria-label":"close",color:"inherit",onClick:l,children:t(um,{fontSize:"small"})})]});return s(g,{children:[t(E,{onClick:()=>{try{o(c=>c-1)}catch(c){r(c.message),a(!0)}},children:"-"}),t("span",{children:"num: "}),t("code",{children:e}),t(E,{onClick:()=>{try{o(c=>c+1)}catch(c){r(c.message),a(!0)}},children:"+"}),t(vp,{open:i,autoHideDuration:6e3,onClose:l,message:n,action:d})]})},wy=`
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
`,xs={code:wy,View:$y};function ky(){const e=f("useProtect.desc"),o=f("useProtect.detail"),n=f("useProtect.consideration");return u.useEffect(()=>{document.title=`useProtect - ${se.homepage}`},[]),s(ie,{title:"UseProtect",desc:e,children:[t(te,{children:o}),t(Y,{code:xs.code,children:t(xs.View,{})}),t(xe,{children:n})]})}const Cy={border:"none",background:"none",padding:"0.5rem 1.5rem",borderRadius:"3px",cursor:"pointer",boxShadow:"0 0 0 1px #ccc",margin:"1rem",position:"relative"},Ty=()=>{const e=gl(gr,3,{duration:300});return t(g,{children:e.map((o,n)=>t("button",{type:"button",ref:o,style:Cy,children:++n},n))})},Ry=`import useRipple from "@/hooks/houdini/hooks/useRipple";
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
`,$s={code:Ry,View:Ty};function Sy(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useBatchHooks"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function My(){const e="useBatchHooks",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t("p",{children:a}),t(Y,{code:$s.code,children:t($s.View,{})})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(Sy,{})]})}const Py=()=>{const e=Rm({x:0});return t(g,{children:s(E,{onClick:()=>{e.set("x",Math.random())},children:["$x: ",e.get("x")]})})},Vy=`

`,ws={code:Vy,View:Py};function Iy(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useReflect"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initial",type:"boolean",defaultValue:!1,desc:"initial state of toggle"},{name:"valueMap",type:"object",defaultValue:{true:!0,false:!1},desc:"mapping of returned values",properties:[{name:"true",type:"boolean | T",defaultValue:!0,desc:"value returned when toggle is on"},{name:"false",type:"boolean | F",defaultValue:!1,desc:"value returned when toggle is off"}]}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[{name:"[0] isOn",type:"boolean | T | F",defaultValue:null,desc:"state of toggle"},{name:"[1] toggle",type:"() => void",desc:"toggle function"},{name:"[2] setToggle",type:"(value: boolean|(value => boolean)) => void",desc:"set toggle function"}]})]})}function Ay(){const e="useReflect",o=f(`${e}.desc`),n=f(`${e}.detail`),r=f(`${e}.$best`),i=f(`${e}.consideration`),a=f(`${e}.$p1`),l=f(`${e}.$faqs`);return u.useEffect(()=>{document.title=`${e} - ${se.homepage}`},[]),s(ie,{title:e,desc:o,children:[t(te,{children:n}),s(Ve,{children:[t(Y,{code:ws.code,children:t(ws.View,{})}),t("p",{children:a})]}),t(xe,{children:i}),t(Ne,{children:r}),t(Pe,{children:l}),t(Iy,{})]})}const Ey=()=>{const[e,o]=nn();return s(g,{children:[s("div",{style:{marginBottom:"16px"},children:[t("strong",{children:"Current Title: "}),t("span",{children:e})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t(E,{variant:"contained",onClick:()=>o("New Title"),children:'Set to "New Title"'}),t(E,{variant:"contained",onClick:()=>o("Another Title"),children:'Set to "Another Title"'}),t(E,{variant:"outlined",onClick:()=>{document.title="External Change"},children:"External Change (via document.title)"})]})]})},Ny=`import useTitle from "@hooks/useTitle";
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
};`,ks={code:Ny,View:Ey},Ly=()=>{const[e,o]=u.useState(0),[n,r]=nn("Counter: 0");return u.useEffect(()=>{r(`Counter: ${e}`)},[e]),s(g,{children:[t("h3",{children:"Example 2: Dynamic Counter Title"}),t("p",{children:"The page title updates automatically with the counter value."}),s("div",{style:{marginBottom:"16px"},children:[t("strong",{children:"Current Count: "}),t("span",{style:{fontSize:"24px",fontWeight:"bold"},children:e})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t(E,{variant:"contained",onClick:()=>o(e+1),children:"Increment"}),t(E,{variant:"outlined",onClick:()=>o(e-1),children:"Decrement"}),t(E,{variant:"outlined",onClick:()=>o(0),children:"Reset"})]})]})},jy=`import useTitle from "@evanpatchouli/react-hooks-kit";
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
};`,Cs={code:jy,View:Ly},By=()=>{const[e,o]=u.useState(0),[n,r]=nn("Messages");return u.useEffect(()=>{e>0?r(`(${e}) New Messages`):r("Messages")},[e]),s(g,{children:[t("h3",{children:"Example 3: Notification Title"}),t("p",{children:"The page title shows unread message count, similar to email clients."}),s("div",{style:{marginBottom:"16px"},children:[t("strong",{children:"Unread Messages: "}),t("span",{style:{fontSize:"24px",fontWeight:"bold",color:e>0?"#ff3b30":"#666"},children:e})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t(E,{variant:"contained",onClick:()=>o(e+1),children:"New Message"}),t(E,{variant:"outlined",onClick:()=>o(Math.max(0,e-1)),children:"Mark as Read"}),t(E,{variant:"outlined",onClick:()=>o(0),children:"Clear All"})]})]})},Oy=`import useTitle from "@evanpatchouli/react-hooks-kit";
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
};`,Ts={code:Oy,View:By},Dy=()=>{const[e,o]=u.useState(0),[n,r]=u.useState(!1),[i,a]=nn("Timer: 00:00");return u.useEffect(()=>{let l=null;return n&&(l=setInterval(()=>{o(d=>d+1)},1e3)),()=>{l&&clearInterval(l)}},[n]),u.useEffect(()=>{const l=Math.floor(e/60),d=e%60,c=`${String(l).padStart(2,"0")}:${String(d).padStart(2,"0")}`;a(`Timer: ${c}`)},[e]),s(g,{children:[t("h3",{children:"Example 4: Timer Title"}),t("p",{children:"The page title updates every second to show elapsed time."}),s("div",{style:{marginBottom:"16px"},children:[t("strong",{children:"Elapsed Time: "}),s("span",{style:{fontSize:"32px",fontWeight:"bold",fontFamily:"monospace"},children:[String(Math.floor(e/60)).padStart(2,"0"),":",String(e%60).padStart(2,"0")]})]}),s("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t(E,{variant:"contained",color:n?"error":"primary",onClick:()=>r(!n),children:n?"Pause":"Start"}),t(E,{variant:"outlined",onClick:()=>{o(0),r(!1)},children:"Reset"})]})]})},Uy=`import useTitle from "@evanpatchouli/react-hooks-kit";
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
};`,Rs={code:Uy,View:Dy};function zy(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useTitle"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"initialTitle",type:"string",defaultValue:"document.title",desc:"The initial title to set when the component mounts. If not provided, uses the current document title."}]}),t(M,{low:!0,top:"20px",children:"ReturnValue (Array)"}),t(Z,{return:!0,rows:[{name:"[0] title",type:"string",defaultValue:null,desc:"The current document title (reactive to external changes)"},{name:"[1] setTitle",type:"(title: string) => void",defaultValue:null,desc:"Function to update the document title"}]})]})}function Cn(e){const{children:o,value:n,index:r,...i}=e;return t("div",{role:"tabpanel",hidden:n!==r,id:`example-tabpanel-${r}`,"aria-labelledby":`example-tab-${r}`,...i,children:n===r&&t(Yt,{sx:{p:3},children:o})})}function Fy(){const[e,o]=u.useState(0),n="useTitle",r=f(`${n}.desc`),i=f(`${n}.detail`),a=f(`${n}.$best`),l=f(`${n}.consideration`),d=f(`${n}.$p1`),c=f(`${n}.$faqs`);return nn(`✨${n}✨ - ${se.homepage}`),s(ie,{title:n,desc:r,children:[t(te,{children:i}),s(Ve,{children:[t(Yt,{sx:{borderBottom:1,borderColor:"divider"},children:s(fa,{value:e,onChange:(p,h)=>o(h),children:[t(jt,{label:"Basic"}),t(jt,{label:"Counter"}),t(jt,{label:"Notification"}),t(jt,{label:"Timer"})]})}),t(Cn,{value:e,index:0,children:t(Y,{code:ks.code,children:t(ks.View,{})})}),t(Cn,{value:e,index:1,children:t(Y,{code:Cs.code,children:t(Cs.View,{})})}),t(Cn,{value:e,index:2,children:t(Y,{code:Ts.code,children:t(Ts.View,{})})}),t(Cn,{value:e,index:3,children:t(Y,{code:Rs.code,children:t(Rs.View,{})})}),t("p",{children:d})]}),t(xe,{children:l}),t(Ne,{children:a}),t(Pe,{children:c}),t(zy,{})]})}const _y=()=>{const[e,o]=u.useState(0);return ko("/react-hooks-kit/favicon.ico",e>0?e:void 0),s(g,{children:[t("h3",{children:"Example 1: Dynamic Counter Badge"}),t("p",{children:"Click the button to increment the badge counter on the favicon."}),s(E,{variant:"contained",onClick:()=>o(e+1),children:["Count: ",e]}),t(E,{variant:"outlined",onClick:()=>o(0),style:{marginLeft:"10px"},children:"Reset"})]})},Wy=`import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  useFavicon("/favicon.ico", count);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};`,Ss={code:Wy,View:_y},Hy=()=>{const[e,o]=u.useState(3);return ko("/react-hooks-kit/favicon.ico",{badge:{content:e,position:"top-right",bgColor:"#ff3b30",textColor:"#fff"}}),s(g,{children:[t("h3",{children:"Example 2: Notification Badge"}),s("p",{children:["Unread messages: ",e]}),t(E,{variant:"contained",onClick:()=>o(e+1),children:"Add Message"}),t(E,{variant:"outlined",onClick:()=>o(Math.max(0,e-1)),style:{marginLeft:"10px"},children:"Mark as Read"}),t(E,{variant:"outlined",onClick:()=>o(0),style:{marginLeft:"10px"},children:"Clear All"})]})},qy=`import useFavicon from "@evanpatchouli/react-hooks-kit";
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
};`,Ms={code:qy,View:Hy},Ky=()=>{const[e,o]=u.useState("online");return ko("/react-hooks-kit/favicon.ico",{badge:{content:"●",position:"bottom-right",bgColor:e==="online"?"#00ff00":"#ff0000",textColor:"#fff",size:.3}}),s(g,{children:[t("h3",{children:"Example 3: Status Indicator"}),s("p",{children:["Current status: ",t("strong",{children:e})]}),t(E,{variant:"contained",onClick:()=>o(e==="online"?"offline":"online"),children:"Toggle Status"})]})},Gy=`import useFavicon from "@evanpatchouli/react-hooks-kit";
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
};`,Ps={code:Gy,View:Ky},Jy=()=>{const[e,o]=u.useState("top-right");return ko("/react-hooks-kit/favicon.ico",{badge:{content:"5",position:e}}),s(g,{children:[t("h3",{children:"Example 4: Different Positions"}),t("p",{children:"Select badge position:"}),s(la,{style:{minWidth:200},children:[t(ca,{children:"Position"}),s(zs,{value:e,label:"Position",onChange:n=>o(n.target.value),children:[t(un,{value:"top-right",children:"Top Right"}),t(un,{value:"top-left",children:"Top Left"}),t(un,{value:"bottom-right",children:"Bottom Right"}),t(un,{value:"bottom-left",children:"Bottom Left"})]})]})]})},Yy=`import useFavicon from "@evanpatchouli/react-hooks-kit";
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
};`,Vs={code:Yy,View:Jy},Qy=()=>{const[e,o]=u.useState(150);return ko("/react-hooks-kit/favicon.ico",e),s(g,{children:[t("h3",{children:"Example 5: 99+ Display"}),s("p",{children:["Count: ",e,' (displays as "99+" when over 99)']}),t(E,{variant:"contained",onClick:()=>o(e+10),children:"+10"}),t(E,{variant:"outlined",onClick:()=>o(Math.max(0,e-10)),style:{marginLeft:"10px"},children:"-10"}),t(E,{variant:"outlined",onClick:()=>o(50),style:{marginLeft:"10px"},children:"Set to 50"}),t(E,{variant:"outlined",onClick:()=>o(150),style:{marginLeft:"10px"},children:"Set to 150"})]})},Xy=`import useFavicon from "@evanpatchouli/react-hooks-kit";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(150);
  useFavicon("/favicon.ico", count); // Will display as "99+"

  return <div>Count: {count}</div>;
};`,Is={code:Xy,View:Qy},Zy=()=>(ko(Dm("🍎")),s(g,{children:[t("h3",{children:"Example 6: Use a text favicon"}),s("p",{children:["You can also use a text favicon by ",t("code",{children:"createTextFavicon"}),"."]})]})),ex=`import useFavicon, { createTextFavicon } from "@evanpatchouli/react-hooks-kit";

const View = () => {
  const [count, setCount] = useState(0);
  useFavicon(createTextFavicon("🍎"));

  return (
    <>
      <h3>Example 6: Use a text favicon</h3>
      <p>You can also use a text favicon by <code>createTextFavicon</code>.</p>
    </>
  );
};`,As={code:ex,View:Zy};function tx(){return s(g,{children:[t(M,{id:"hook-api",children:"Api of useFavicon"}),t(M,{low:!0,top:"20px",children:"Parameters"}),t(Z,{param:!0,rows:[{name:"iconUrl",type:"string",defaultValue:t(tt,{}),desc:"The URL of the favicon image."},{name:"badge",type:"string | number",defaultValue:"undefined",desc:"Shorthand for badge content. When provided, creates a badge with default settings."},{name:"options",type:"UseFaviconOptions",defaultValue:"undefined",desc:"Full configuration object for the favicon.",properties:[{name:"badge",type:"BadgeOptions",defaultValue:"undefined",desc:"Badge configuration to overlay on the favicon.",properties:[{name:"content",type:"string | number",defaultValue:t(tt,{}),desc:"The content to display in the badge. Numbers over 99 will display as '99+'."},{name:"position",type:"'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",defaultValue:"'top-right'",desc:"Badge position."},{name:"bgColor",type:"string",defaultValue:"'#ff3b30'",desc:"Badge background color."},{name:"textColor",type:"string",defaultValue:"'#fff'",desc:"Badge text color."},{name:"size",type:"number",defaultValue:"0.5",desc:"Badge size as a ratio of icon size (0-1)."}]}]}]}),t(M,{low:!0,top:"20px",children:"Return Value"}),t(Z,{return:!0,rows:[{name:"void",type:"void",defaultValue:null,desc:"This hook does not return any value."}]})]})}function go(e){const{children:o,value:n,index:r,...i}=e;return t("div",{role:"tabpanel",hidden:n!==r,id:`example-tabpanel-${r}`,"aria-labelledby":`example-tab-${r}`,...i,children:n===r&&t(Yt,{sx:{p:3},children:o})})}function ox(){const[e,o]=u.useState(0),n="useFavicon",r=f(`${n}.desc`),i=f(`${n}.detail`),a=f(`${n}.$best`),l=f(`${n}.consideration`),d=f(`${n}.$p1`),c=f(`${n}.$faqs`);return u.useEffect(()=>{document.title=`${n} - ${se.homepage}`},[]),s(ie,{title:n,desc:r,children:[t(te,{children:i}),s(Ve,{children:[t(Yt,{sx:{borderBottom:1,borderColor:"divider"},children:s(fa,{value:e,onChange:(p,h)=>o(h),children:[t(jt,{label:"Counter"}),t(jt,{label:"Notification"}),t(jt,{label:"Status"}),t(jt,{label:"Position"}),t(jt,{label:"99+"}),t(jt,{label:"Text Favicon"})]})}),t(go,{value:e,index:0,children:t(Y,{code:Ss.code,children:t(Ss.View,{})})}),t(go,{value:e,index:1,children:t(Y,{code:Ms.code,children:t(Ms.View,{})})}),t(go,{value:e,index:2,children:t(Y,{code:Ps.code,children:t(Ps.View,{})})}),t(go,{value:e,index:3,children:t(Y,{code:Vs.code,children:t(Vs.View,{})})}),t(go,{value:e,index:4,children:t(Y,{code:Is.code,children:t(Is.View,{})})}),t(go,{value:e,index:5,children:t(Y,{code:As.code,children:t(As.View,{})})}),t("p",{children:d})]}),t(xe,{children:l}),t(Ne,{children:a}),t(Pe,{children:c}),t(tx,{})]})}const Es=Object.freeze(Object.defineProperty({__proto__:null,Overview:wa,SentMail:tg,UseAutoPageSize:xy,UseBatchHooks:My,UseDebounce:Jv,UseEmitter:Ib,UseFavicon:ox,UseGenerator:Tb,UseGuide:dy,UseInfiniteScroll:gy,UseInject:Kb,UseList:Gg,UseLoading:xg,UseMap:Ng,UseMemento:zv,UseMeta:Fg,UseParticle:Qb,UsePrevious:ag,UsePromise:Cb,UseProtect:ky,UseProvide:zb,UseReactive:pv,UseReactor:Mv,UseReactorListener:mb,UseReactorStore:Pv,UseReactorStoreContext:Vv,UseReactorStoreRef:Iv,UseReceiver:Lb,UseRecord:Cg,UseReflect:Ay,UseResize:xb,UseRipple:Jb,UseThrottle:Zv,UseTickState:Bv,UseTicker:Hv,UseTitle:Fy,UseToggle:pg,UseTree:ov,UseUrl:ob,UseVirtualArea:oy,UseWatch:sb,UseWatchGetter:db},Symbol.toStringTag,{value:"Module"}));function nx(e){return e.split("?")[0].split("/").filter(Boolean).pop()||""}function rx(){return s("div",{css:$css`
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
    `,children:[t(mm,{}),t("div",{children:"This page is still deving..."})]})}var Bo={},Ns;function ix(){if(Ns)return Bo;Ns=1;var e=sn();Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.default=void 0;var o=e(an()),n=Qo(),r=(0,o.default)((0,n.jsx)("path",{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");return Bo.default=r,Bo}var sx=ix();const Ls=Xo(sx);var Oo={},js;function ax(){if(js)return Oo;js=1;var e=sn();Object.defineProperty(Oo,"__esModule",{value:!0}),Oo.default=void 0;var o=e(an()),n=Qo(),r=(0,o.default)((0,n.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");return Oo.default=r,Oo}var lx=ax();const cx=Xo(lx);function dx(e,o,n){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(e,o,"");else if(window.sidebar&&/Firefox/i.test(navigator.userAgent)||window.opera&&window.print){var r=document.createElement("a");r.href=o,r.title=e,r.rel="sidebar",document.body.appendChild(r),r.click(),document.body.removeChild(r)}else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(o,e);else{const i=[/Mac/i.test(navigator.platform)?"Cmd":"Ctrl","D"];n?n(i):alert("Press "+i[0]+" + D to bookmark this page.")}}function ux(){const[e,o]=u.useState(null),[n,r]=u.useState(!1);return s(g,{children:[t(Yt,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1,position:"fixed",bottom:"80px",right:"40px"},children:t(Vp,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:t(da,{}),children:[{icon:t(Ls,{style:{rotate:"180deg"}}),name:"Bottom",callback:()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{icon:t(Ls,{}),name:"Top",callback:()=>{window.scrollTo({top:0,behavior:"smooth"})}},{icon:t(km,{}),name:"Star",callback:()=>{dx(null,null,a=>{o(s("span",{children:[t("span",{children:"Please press "}),t("strong",{children:a.join(" + ")}),t("span",{children:" to bookmark site. ✨"})]})),r(!0)})}},{icon:t(cx,{}),name:"Share"}].map(a=>t(qp,{icon:a.icon,tooltipTitle:a.name,onClick:a.callback},a.name))})}),t(La,{open:n,setOpen:r,sx:{position:"fixed",bottom:"0%",right:"0%",transform:"translate(-10px, -10px)"},children:e})]})}const px={new:t(bm,{color:"primary"}),deving:t(vm,{}),stable:t(g,{}),experimental:t(wm,{color:"secondary"}),preview:t(dm,{color:"disabled"}),deprecated:t(gm,{color:"error"})};function _t({type:e}){return px[e]}function hx(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}function fx(){const[e,o]=Zo({0:!0,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1}),n=vr(),r=nx(n.hash);return s("div",{className:"Docs",children:[t("div",{className:"Docs-Left",children:s(wt,{className:"Docs-Left-Menu",sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:t(ar,{component:"div",id:"nested-list-subheader",onClick:()=>{rt("/docs",!0)},style:{cursor:"pointer"},children:"Docs of react-hooks-kit"}),children:[s(ze,{onClick:()=>{o(0,!e[0])},children:[t(Fe,{children:"📖"}),t(_e,{primary:"Getting started"}),e[0]?t(Nt,{}):t(Lt,{})]}),t(dt,{in:e[0],timeout:"auto",unmountOnExit:!0,children:s(wt,{component:"div",disablePadding:!0,children:[s(ze,{sx:{pl:4},selected:r==="overview",onClick:()=>rt("/docs/overview",!0),children:[t(Fe,{children:"🧐"}),t(_e,{primary:"Overview"})]}),s(ze,{sx:{pl:4},selected:r==="installation",onClick:()=>rt("/docs/installation",!0),children:[t(Fe,{children:"⬇️"}),t(_e,{primary:"Installation"})]}),s(ze,{sx:{pl:4},selected:r==="usage",onClick:()=>rt("/docs/usage",!0),children:[t(Fe,{children:"🫰"}),t(_e,{primary:"Usage"})]}),s(ze,{sx:{pl:4},selected:r==="faqs",onClick:()=>rt("/docs/faqs",!0),children:[t(Fe,{children:"❓"}),t(_e,{primary:"FAQs"})]}),s(ze,{sx:{pl:4},selected:r==="support",onClick:()=>rt("/docs/support",!0),children:[t(Fe,{children:"💰"}),t(_e,{primary:"Support"})]})]})}),s(ze,{selected:r==="sent-mail",onClick:()=>rt("/docs/sent-mail",!0),children:[t(Fe,{children:"📧"}),t(_e,{primary:"Sent mail"})]}),s(ze,{selected:r==="draft",onClick:()=>rt("/docs/draft",!0),children:[t(Fe,{children:"⚓"}),t(_e,{primary:"Drafts"})]}),s(wt,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:t(ar,{component:"div",id:"nested-list-subheader",children:"Functional hooks"}),children:[s(ze,{onClick:()=>{o(1,!e[1])},children:[t(Fe,{children:"💾"}),t(_e,{primary:"Stateful hooks"}),e[1]?t(Nt,{}):t(Lt,{})]}),t(dt,{in:e[1],timeout:"auto",unmountOnExit:!0,children:t(wt,{component:"div",disablePadding:!0,children:Object.entries(Vt.StatefulHooks).map(([,{route:i,status:a}])=>s(ze,{sx:{pl:4,opacity:a==="deprecated"?"0.5":"1"},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(Fe,{children:t(_t,{type:a})}),t(_e,{children:a==="deprecated"?t("del",{children:i}):i})]}))})}),s(ze,{onClick:()=>{o(2,!e[2])},children:[t(Fe,{children:"♻️"}),t(_e,{primary:"Callback hooks"}),e[2]?t(Nt,{}):t(Lt,{})]}),t(dt,{in:e[2],timeout:"auto",unmountOnExit:!0,children:t(wt,{component:"div",disablePadding:!0,children:Object.entries(Vt.CallbackHooks).map(([,{route:i,status:a}])=>s(ze,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(Fe,{children:t(_t,{type:a})}),t(_e,{primary:i})]}))})}),s(ze,{onClick:()=>{o(3,!e[3])},children:[t(Fe,{children:"⌚"}),t(_e,{primary:"Promise hooks"}),e[3]?t(Nt,{}):t(Lt,{})]}),t(dt,{in:e[3],timeout:"auto",unmountOnExit:!0,children:t(wt,{component:"div",disablePadding:!0,children:Object.entries(Vt.PromiseHooks).map(([,{route:i,status:a}])=>s(ze,{sx:{pl:4,opacity:a==="deprecated"?"0.5":"1"},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(Fe,{children:t(_t,{type:a})}),t(_e,{children:a==="deprecated"?t("del",{children:i}):i})]}))})}),s(ze,{onClick:()=>{o(4,!e[4])},children:[t(Fe,{children:"🛠️"}),t(_e,{primary:"Utils hooks"}),e[4]?t(Nt,{}):t(Lt,{})]}),t(dt,{in:e[4],timeout:"auto",unmountOnExit:!0,children:t(wt,{component:"div",disablePadding:!0,children:Object.entries(Vt.UtilsHooks).map(([,{route:i,status:a}])=>s(ze,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(Fe,{children:t(_t,{type:a})}),t(_e,{primary:i})]}))})}),s(ze,{onClick:()=>{o(5,!e[5])},children:[t(Fe,{children:"🔮"}),t(_e,{primary:"Lifecycle hooks"}),e[5]?t(Nt,{}):t(Lt,{})]}),t(dt,{in:e[5],timeout:"auto",unmountOnExit:!0,children:t(wt,{component:"div",disablePadding:!0,children:Object.entries(Vt.LifecycleHooks).map(([,{route:i,status:a}])=>s(ze,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(Fe,{children:t(_t,{type:a})}),t(_e,{primary:i})]}))})}),s(ze,{onClick:()=>{o(6,!e[6])},children:[t(Fe,{children:"♨️"}),t(_e,{primary:"Event hooks"}),e[6]?t(Nt,{}):t(Lt,{})]}),t(dt,{in:e[6],timeout:"auto",unmountOnExit:!0,children:t(wt,{component:"div",disablePadding:!0,children:Object.entries(Vt.EventHooks).map(([,{route:i,status:a}])=>s(ze,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(Fe,{children:t(_t,{type:a})}),t(_e,{primary:i})]}))})}),s(ze,{onClick:()=>{o(7,!e[7])},children:[t(Fe,{children:"🎉"}),t(_e,{primary:"UI & UX hooks"}),e[7]?t(Nt,{}):t(Lt,{})]}),t(dt,{in:e[7],timeout:"auto",unmountOnExit:!0,children:t(wt,{component:"div",disablePadding:!0,children:Object.entries(Vt.UiUxHooks).map(([,{route:i,status:a}])=>s(ze,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(Fe,{children:t(_t,{type:a})}),t(_e,{primary:i})]}))})}),s(ze,{onClick:()=>{o(8,!e[8])},children:[t(Fe,{children:"🎉"}),t(_e,{primary:"Utils hooks"}),e[8]?t(Nt,{}):t(Lt,{})]}),t(dt,{in:e[8],timeout:"auto",unmountOnExit:!0,children:t(wt,{component:"div",disablePadding:!0,children:Object.entries(Vt.UtilsHooks).map(([,{route:i,status:a}])=>s(ze,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(Fe,{children:t(_t,{type:a})}),t(_e,{primary:i})]}))})}),s(ze,{onClick:()=>{o(9,!e[9])},children:[t(Fe,{children:"🪄"}),t(_e,{primary:"Other hooks"}),e[9]?t(Nt,{}):t(Lt,{})]}),t(dt,{in:e[9],timeout:"auto",unmountOnExit:!0,children:t(wt,{component:"div",disablePadding:!0,children:Object.entries(Vt.OtherHooks).map(([,{route:i,status:a}])=>s(ze,{sx:{pl:4},selected:r===i,onClick:()=>rt(`/docs/${i}`,!0),children:[t(Fe,{children:t(_t,{type:a})}),t(_e,{primary:i})]}))})})]})]})}),s("div",{className:"Docs-Main",children:[t(vl,{children:t(pn,{path:"/",children:s(g,{children:[t(pn,{path:"",element:t(Zf,{})}),Object.entries(Vt).map(([i,a])=>{const l=i;return Object.entries(a).map(([d,c])=>{const p=hx(d);let h;return l==="GettingStarted"?p in yi&&(h=yi[p]):p in Es&&(h=Es[p]),h?t(pn,{path:c.route,element:t(h,{})}):t(pn,{path:c.route,element:s(g,{children:[t(Km,{children:c.title}),t(rx,{})]})})})})]})})}),t(kf,{})]}),s("div",{className:"Docs-Right",children:[t(Xf,{}),t(ux,{})]})]})}export{fx as default};
