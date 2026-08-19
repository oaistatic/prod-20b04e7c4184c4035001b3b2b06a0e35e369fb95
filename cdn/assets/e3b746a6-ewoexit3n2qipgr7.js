const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-cr30ieqixz64spnx.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-knhpfrb9ycxm929m.js","assets/2340486e-eab5bn2wcgxcv5rd.js","assets/conversation-small-n5s3carkmv0i75zr.js","assets/30901919-h7uts3f2w0id3a9a.js","assets/c470f5ab-lnbl5ceqx234sh7l.js","assets/0e5afe53-gjzhrrxr2tjc3wtq.js","assets/conversation-small-ftje035n.css","assets/8b34dbc2-co7396vgukg6b5f0.js","assets/82782bc9-pdlkxdtuzf8m9d1w.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{AH as r,AQ as i,E4 as a,GQ as o,Jm as s,K4 as c,KQ as l,KU as u,M4 as d,My as f,NC as p,Ny as m,P4 as h,SF as g,SZ as _,T4 as v,UC as y,VC as b,X4 as x,Y4 as S,Ym as C,_Z as w,b4 as T,bP as ee,ck as te,dk as ne,e0 as re,eq as E,gV as D,i0 as O,jH as k,js as A,kQ as j,ks as M,mV as N,ok as ie,pa as P,sk as ae,tW as oe,xF as se,xa as ce,yP as F,zC as le}from"./4813494d-knhpfrb9ycxm929m.js";import{Cn as I,Sn as ue,Tn as L,bn as de,en as fe,gn as pe,wn as R,xn as me,yn as z}from"./2340486e-eab5bn2wcgxcv5rd.js";import{$l as he,$rn as B,A_t as ge,Cb as _e,DGt as ve,E8 as ye,EGt as be,Gvt as xe,JT as Se,M_t as V,Ql as H,Qrn as Ce,S8 as we,T8 as Te,Uvt as Ee,Wvt as De,b8 as Oe,iE as ke,tE as Ae,v8 as je,wb as U,x8 as W,y8 as Me}from"./conversation-small-n5s3carkmv0i75zr.js";import{HC as Ne,Ix as Pe,Lx as Fe,VC as Ie,mE as Le,pE as Re}from"./30901919-h7uts3f2w0id3a9a.js";import{i as G,n as K,t as ze}from"./8d846022-habmttvqwy4a5siq.js";import{a as Be,i as Ve,o as He}from"./91969468-hp6gft5s8qmtdubj.js";import{n as Ue,t as We}from"./4d271a7b-g5zk7c9xn4rid68d.js";import{n as q,t as Ge}from"./de6a4d0c-f1webjbmrzeka0lj.js";import{n as Ke,r as J}from"./58bafdef-pbmuchcpjbiq2kbo.js";import{a as qe,i as Y}from"./e01e2324-dmix8cixevgnrom6.js";import{i as Je,t as X}from"./5dc32f04-f7sq5q2sk210dn5u.js";import{n as Ye,t as Xe}from"./066a83b9-ignjz3qv7b4dwhvn.js";import{n as Ze,t as Qe}from"./f0f3c45c-hdfcyezsfv2luckh.js";import{i as $e,n as et,r as tt,t as nt}from"./cc79834b-oaylghv5wypbpqen.js";function rt(){return T(`2779568043`)}function it(){return T(`3864712762`)}function at(){return v(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var ot=e((()=>{a()}));function st({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var ct=e((()=>{}));function lt({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,surface:a}){let o={network_policy:n,surface:a};return e!=null&&(o.error_source=e),t!=null&&(o.error_type=t),r!=null&&(o.outcome=r),i!=null&&(o.ready_signal=i),o}function ut(){return typeof performance<`u`?performance.now():Date.now()}function dt(e){return new TextEncoder().encode(e).byteLength/1024}function ft(e){return e instanceof Error?e.name:`unknown`}function pt(e,t,n=1){x.count(c.APP_BLOCKS,e,lt(t),n)}function mt(e,t,n){x.hist(c.APP_BLOCKS,e,lt(n),t)}function ht({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,gt.useRef)(ut()),i=(0,gt.useRef)(null),a=(0,gt.useRef)(!1),o=(0,gt.useRef)(!1),s=ae(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=ae((n=e)=>{o.current||(o.current=!0,mt(yt,dt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:ae((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=ut(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),pt(St,t);let _=(e,n)=>{f||(f=!0,pt(xt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=ut();mt(bt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,mt(_t,s-r.current,t),n!=null&&mt(wt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=ut(),g=n,mt(Ct,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{e()&&(p=!0,s(),pt(vt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt=e((()=>{S(),ie(),gt=n(I()),_t=`app_block.first_render_time_ms`,vt=`app_block.load.failure`,yt=`app_block.payload_size_kb`,bt=`app_block.ready_to_first_paint_ms`,xt=`app_block.render.outcome`,St=`app_block.render.start`,Ct=`app_block.sandbox_eval_to_ready_ms`,wt=`app_block.widget_ref_to_first_paint_ms`}));function Et(e){return e==="default"||e===`open`?e:null}function Dt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var Ot=e((()=>{})),kt,At=e((()=>{kt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),jt=e((()=>{})),Mt,Nt=e((()=>{jt(),Mt=`/cdn/assets/app-block-sandbox-foundation-c11hc9c6.css`})),Pt,Ft=e((()=>{Pt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),It=e((()=>{})),Lt,Rt=e((()=>{It(),Lt=`/cdn/assets/app-block-sandbox-grv3t07f.css`}));function zt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Bt=e((()=>{}));function Vt(e){return/<!doctype\b|<html[\s>]/i.test(e)}function Ht(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function Ut(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function Wt(e){try{return new URL(e).origin}catch{return null}}function Gt(e){return $t.has(e)?e:`default`}function Kt(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function qt(e=[]){let t=Ut(Lt),n=Ut(Mt),r=[Wt(Xt),Wt(Zt),Wt(t),Wt(n),...Qt,...e.map(Wt)];return Array.from(new Set(r.filter(e=>e!=null)))}function Jt(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,styleMode:c=`default`}={}){let l=e.trim();if(!s&&Vt(l))return{html:l,expectReadySignal:!1};let u=Ht(n),d=c===`open`?kt:Pt,f=Ut(c===`open`?Mt:Lt),p=Gt(r),m=Kt(t,i),h=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&c===`open`,g=[`color-scheme: ${t};`,h?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${m});`].join(` `);return{expectReadySignal:a,html:`<!doctype html>
<html ${[`lang="${u}"`,`class="${t}"`,`data-chat-theme="${p}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${c}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${g}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${Xt}" defer><\/script>
    <script>
      (() => {
        const tailwindScript = document.getElementById("app-block-tailwind");
        const markFatal = () => {
          document.documentElement.setAttribute("data-fatal", "");
        };

        if (!(tailwindScript instanceof HTMLScriptElement)) {
          markFatal();
          return;
        }

        tailwindScript.addEventListener("error", markFatal, { once: true });
        tailwindScript.addEventListener(
          "load",
          () => {
            const readinessProbe = document.createElement("div");
            readinessProbe.className = "hidden";
            readinessProbe.setAttribute("aria-hidden", "true");

            const markReadyWhenStyled = () => {
              if (getComputedStyle(readinessProbe).display !== "none") {
                return;
              }

              styleObserver.disconnect();
              readinessProbe.remove();
              document.documentElement.setAttribute("data-ready", "");
            };
            const styleObserver = new MutationObserver(markReadyWhenStyled);
            styleObserver.observe(document.head, {
              childList: true,
              characterData: true,
              subtree: true,
            });

            document.body.append(readinessProbe);
            markReadyWhenStyled();
          },
          { once: true }
        );
      })();
    <\/script>`:``}
    ${a?`<link rel="stylesheet" href="${f}" />`:`<style>${d}</style>`}
    ${s?en:``}
  </head>
  <body>
    <main>
${s?``:l}
    </main>
    ${s?tn:``}
  </body>
</html>`}}var Yt,Xt,Zt,Qt,$t,en,tn,nn=e((()=>{At(),Nt(),Ft(),Rt(),Bt(),Xt=`https://cdn.tailwindcss.com`,Zt=`https://images.openai.com`,Qt=[`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],$t=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),en=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,tn=String.raw(Yt||=zt([`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`],[`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^\\s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`]))}));function rn(){"use forget";let e=(0,an.useContext)(on);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var an,on,sn=e((()=>{an=n(I()),on=(0,an.createContext)(null)})),cn,ln=e((()=>{k(),L(),cn=r(()=>R(()=>import(`./7aa2b76f-cr30ieqixz64spnx.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function un(e){"use forget";let t=(0,mn.c)(38),{additionalResourceDomains:n,children:r,code:a,conversationId:o,source:s,styleMode:c,title:l}=e,u=`app-block:${s.appBlockId}:${(0,hn.useId)()}`,d=(0,hn.useRef)(null),f=s.appBlockId,p=s.libraryFileId,m=s.messageId,h=s.refIndex,g=o??null,_;t[0]!==g||t[1]!==f?(_={appBlockId:f,conversationId:g},t[0]=g,t[1]=f,t[2]=_):_=t[2];let v=_,y=i(je),b;t[3]!==y||t[4]!==v?(b=we(y,v),t[3]=y,t[4]=v,t[5]=b):b=t[5];let x=b,S=y?.appBlockId===f&&y.conversationId===g&&(y.isOriginalVersion===!0||y.versionNumber!=null),C=x||S,w;t[6]!==y||t[7]!==u||t[8]!==v?(w=Te(y,v,u),t[6]=y,t[7]=u,t[8]=v,t[9]=w):w=t[9];let T=w,ee;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(ee=()=>{d.current?.focus()},t[10]=ee):ee=t[10];let te=ee,ne;t[11]!==f||t[12]!==p||t[13]!==m||t[14]!==h?(ne={appBlockId:f,libraryFileId:p,messageId:m,refIndex:h},t[11]=f,t[12]=p,t[13]=m,t[14]=h,t[15]=ne):ne=t[15];let re;t[16]!==n||t[17]!==a||t[18]!==c||t[19]!==ne||t[20]!==l?(re={additionalResourceDomains:n,code:a,focusOnClose:te,source:ne,styleMode:c,title:l},t[16]=n,t[17]=a,t[18]=c,t[19]=ne,t[20]=l,t[21]=re):re=t[21];let E=re,D,O;t[22]!==E||t[23]!==x||t[24]!==v?(D=()=>{x&&ye(v,E)},O=[E,x,v],t[22]=E,t[23]=x,t[24]=v,t[25]=D,t[26]=O):(D=t[25],O=t[26]),(0,hn.useEffect)(D,O);let k;t[27]!==E||t[28]!==T||t[29]!==v?(k=()=>{Me(v,T,E)},t[27]=E,t[28]=T,t[29]=v,t[30]=k):k=t[30];let A=k,j;t[31]!==C||t[32]!==S||t[33]!==A?(j={isExpanded:C,isViewingHistoricalVersion:S,openExpandedView:A,triggerRef:d},t[31]=C,t[32]=S,t[33]=A,t[34]=j):j=t[34];let M=j,N;return t[35]!==r||t[36]!==M?(N=(0,gn.jsx)(on.Provider,{value:M,children:r}),t[35]=r,t[36]=M,t[37]=N):N=t[37],N}function dn(e){"use forget";let t=(0,mn.c)(2),{collapsedPreview:n,inlinePreview:r}=e,{isExpanded:i}=rn(),a=i?n:r,o;return t[0]===a?o=t[1]:(o=(0,gn.jsx)(gn.Fragment,{children:a}),t[0]=a,t[1]=o),o}function fn(e){"use forget";let t=(0,mn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:a,headerAction:o,title:s}=e,c=tt(),l;t[0]===a?l=t[1]:(l=()=>a==null?0:H(a).height$()??0,t[0]=a,t[1]=l);let u=i(l),d=c===`fullscreen`&&n&&a!=null?u:0,f;t[2]===s?f=t[3]:(f=(0,gn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:s}),t[2]=s,t[3]=f);let p;t[4]!==o||t[5]!==f?(p=(0,gn.jsxs)(nt.Header,{className:`pb-1`,children:[f,o]}),t[4]=o,t[5]=f,t[6]=p):p=t[6];let m;t[7]===d?m=t[8]:(m={paddingBottom:d},t[7]=d,t[8]=m);let h;t[9]===r?h=t[10]:(h=(0,gn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=h);let g;t[11]!==m||t[12]!==h?(g=(0,gn.jsx)(nt.Body,{className:`bg-token-bg-primary overflow-hidden`,style:m,children:h}),t[11]=m,t[12]=h,t[13]=g):g=t[13];let _;return t[14]!==p||t[15]!==g?(_=(0,gn.jsxs)(gn.Fragment,{children:[p,g]}),t[14]=p,t[15]=g,t[16]=_):_=t[16],_}function pn(e){"use forget";let t=(0,mn.c)(5),{conversation:n,paneId:r}=e,i=$e(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,gn.jsx)(cn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var mn,hn,gn,_n=e((()=>{mn=fe(),he(),et(),j(),hn=n(I()),sn(),W(),ln(),gn=ue()}));function vn(){"use forget";let e=(0,yn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,bn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,bn.jsx)(pe,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var yn,bn,xn=e((()=>{yn=fe(),de(),bn=ue()}));function Sn(e){"use forget";let t=(0,wn.c)(38),n=me(),r;t[0]!==n||t[1]!==e?(r=e?n.formatMessage(On.generatingApp,{title:e}):n.formatMessage(On.creatingInterface),t[0]=n,t[1]=e,t[2]=r):r=t[2];let i=r,a;t[3]===n?a=t[4]:(a=n.formatMessage(On.sketchingInterface),t[3]=n,t[4]=a);let o;t[5]===n?o=t[6]:(o=n.formatMessage(On.shapingLayout),t[5]=n,t[6]=o);let s;t[7]===n?s=t[8]:(s=n.formatMessage(On.arrangingPieces),t[7]=n,t[8]=s);let c;t[9]===n?c=t[10]:(c=n.formatMessage(On.polishingVisuals),t[9]=n,t[10]=c);let l;t[11]===n?l=t[12]:(l=n.formatMessage(On.tuningInputs),t[11]=n,t[12]=l);let u;t[13]===n?u=t[14]:(u=n.formatMessage(On.addingInteractivity),t[13]=n,t[14]=u);let d;t[15]===n?d=t[16]:(d=n.formatMessage(On.wiringControls),t[15]=n,t[16]=d);let f;t[17]===n?f=t[18]:(f=n.formatMessage(On.composingInteractions),t[17]=n,t[18]=f);let p;t[19]===n?p=t[20]:(p=n.formatMessage(On.calibratingPreview),t[19]=n,t[20]=p);let m;t[21]===n?m=t[22]:(m=n.formatMessage(On.refiningDetails),t[21]=n,t[22]=m);let h;t[23]!==i||t[24]!==a||t[25]!==m||t[26]!==o||t[27]!==s||t[28]!==c||t[29]!==l||t[30]!==u||t[31]!==d||t[32]!==f||t[33]!==p?(h=[i,a,o,s,c,l,u,d,f,p,m],t[23]=i,t[24]=a,t[25]=m,t[26]=o,t[27]=s,t[28]=c,t[29]=l,t[30]=u,t[31]=d,t[32]=f,t[33]=p,t[34]=h):h=t[34];let g=h,[_,v]=(0,Tn.useState)(0),y,b;return t[35]===g.length?(y=t[36],b=t[37]):(y=()=>{let e=window.setInterval(()=>{v(e=>Math.min(e+1,g.length-1))},Dn);return()=>{window.clearInterval(e)}},b=[g.length],t[35]=g.length,t[36]=y,t[37]=b),(0,Tn.useEffect)(y,b),g[_]??g[0]??``}function Cn(e){"use forget";let t=(0,wn.c)(2),{title:n}=e,r=Sn(n),i;return t[0]===r?i=t[1]:(i=(0,En.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,En.jsx)(X,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var wn,Tn,En,Dn,On,kn=e((()=>{wn=fe(),Je(),Tn=n(I()),de(),En=ue(),Dn=2800,On=z({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}})}));function An(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Mn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===re.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=jn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===Un?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=E(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Bn(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function jn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==Un||e.library_file_id==null?null:{appBlockId:st({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Mn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==Wn||e.category!==Un||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Nn(r,`content`),a=Nn(r,`entrypoint`)??`index.html`,o=Rn(r,a),s=Fn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Nn(r,`app_block_id`)??st({messageId:t,refIndex:n}),bundleVersion:Pn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Fn(o,`current_content_file_id`),entrypoint:a,iconSvg:Nn(r,`icon_svg`),language:zn(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Fn(o,`library_file_name`),libraryFileVersionNumber:Ln(In(o,`library_file_version_number`)),mimeType:Fn(o,`mime_type`),messageId:t,refIndex:n,styleMode:Et(Nn(r,`style_mode`)),title:Nn(r,`display_name`)??Nn(r,`title`)}}function Nn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Pn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Fn(e,t){return typeof e!=`object`||!e?null:Nn(e,t)}function In(e,t){return typeof e!=`object`||!e?null:Pn(e,t)}function Ln(...e){for(let t of e)if(t!=null)return t;return null}function Rn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Nn(r,`library_file_id`)!=null&&(n??=r,Nn(r,`path`)===t))return r;return n}function zn(){return`html`}function Bn(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Vn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function Hn(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Vn(r,e))return!1}return!0}var Un,Wn,Gn,Kn=e((()=>{O(),b(),A(),Se(),w(),ct(),Ot(),Un=`app_block`,Wn=`client_defined_widget`,Gn=p(e=>_(()=>An(M(e).flatMap(e=>e.messages)),{equals:Hn}))}));function qn({appBlockId:e,conversation:t}){return t==null?null:Gn(t).get(e)??null}function Jn(e){return e?.serverId$()??void 0}function Yn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:De(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function Xn({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return Ee({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:D(e)?`missing`:`failed`})}),()=>{a.abort()}}function Zn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Qn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Qn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var $n=e((()=>{N(),xe(),Kn()})),er=t({AppBlock:()=>rr,AppBlockPreviewLoadingState:()=>xr,AppBlockSandboxPreview:()=>yr});function tr(e){let t=e.search(Ir),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function nr(e){let t=tr(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(Lr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Rr)!=null}function rr(e){"use forget";let t=(0,Z.c)(115),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:a,authoritativeSource:o,code:s,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:u,id:d,captureConsoleMessages:f,clientThreadId:p,iconSvg:m,isStreaming:h,isTurnStreaming:g,libraryFileId:_,libraryFileVersionNumber:v,messageId:b,onConsoleMessagesChange:x,onReadyChange:S,progressiveStreaming:C,ref:w,refIndex:T,styleMode:ee,title:te,variant:ne,widgetRefSeenAtMs:re}=e,E=c===void 0||c,D=f!==void 0&&f,O=h!==void 0&&h,k=g!==void 0&&g,A=C!==void 0&&C,j=ne===void 0?`inline`:ne,M=y(),N;t[0]===M?N=t[1]:(N=()=>M!=null&&B(M),t[0]=M,t[1]=N);let ie=i(N),P;t[2]!==p||t[3]!==M?(P=p==null?M:le(p),t[2]=p,t[3]=M,t[4]=P):P=t[4];let ae=P,se=b!=null&&T!=null?st({messageId:b,refIndex:T}):void 0,F=r??se??st({messageId:b??d,refIndex:T??0}),I=i(()=>Ae({conversation:M??null,instanceId:F,messageId:b,refIndex:T}))??u,ue=i(()=>o!=null||I!=null?null:qn({appBlockId:F,conversation:M??null})),L=o??ue,de;t[5]===M?de=t[6]:(de=()=>Jn(M??null),t[5]=M,t[6]=de);let fe=i(de),pe=oe(M?.id),R=fe??pe,me;t[7]!==l||t[8]!==_||t[9]!==v||t[10]!==R||t[11]!==L?(me=Yn({currentContentFileId:l,libraryFileId:_,libraryFileVersionNumber:v,serverThreadId:R,source:L}),t[7]=l,t[8]=_,t[9]=v,t[10]=R,t[11]=L,t[12]=me):me=t[12];let z=me,[he,ge]=(0,Q.useState)(null),[ve,ye]=(0,Q.useState)(0),be;t[13]!==ve||t[14]!==z.libraryContentKey?(be=[z.libraryContentKey,ve],t[13]=ve,t[14]=z.libraryContentKey,t[15]=be):be=t[15];let xe=be.join(`\0`),Se,V;t[16]!==a||t[17]!==xe||t[18]!==z.contentFileId||t[19]!==z.libraryFileId||t[20]!==I||t[21]!==R?(Se=()=>{if(!(a!=null||I===`collapsed`))return Xn({contentFileId:z.contentFileId,libraryContentKey:xe,libraryFileId:z.libraryFileId,onContentStateChange:ge,serverThreadId:R})},V=[a,z.contentFileId,z.libraryFileId,xe,I,R],t[16]=a,t[17]=xe,t[18]=z.contentFileId,t[19]=z.libraryFileId,t[20]=I,t[21]=R,t[22]=Se,t[23]=V):(Se=t[22],V=t[23]),(0,Q.useEffect)(Se,V);let H=Zn({appBlockId:F,contentFileId:z.contentFileId,currentContentFileId:l,libraryContent:he,libraryContentKey:xe,libraryFileId:_,libraryFileVersionNumber:v,source:L}),Ce=he?.key===xe?he:null,we;t[24]!==H?.libraryFileId||t[25]!==_?(we=()=>Oe(H?.libraryFileId??_),t[24]=H?.libraryFileId,t[25]=_,t[26]=we):we=t[26];let Te=i(we),De=H?.libraryFileVersionNumber??v,ke=Te!=null&&(De==null||Te.versionNumber>=De)?Te.code:void 0,je=ke??a??H?.content??s??null,U=H?.iconSvg??m??null,W=H?.libraryFileId??_,Ne=W==null&&a==null&&ke==null&&l==null&&L?.currentContentFileId==null&&L?.latestPatchMessageId==null,Pe;t[27]!==Ne||t[28]!==s||t[29]!==b||t[30]!==je||t[31]!==T||t[32]!==L?(Pe=Ne?L==null?b!=null&&T!=null&&s!=null&&je===s?{messageId:b,refIndex:T}:null:L.messageId.length>0&&L.content!=null&&je===L.content?{messageId:L.messageId,refIndex:L.refIndex}:null:null,t[27]=Ne,t[28]=s,t[29]=b,t[30]=je,t[31]=T,t[32]=L,t[33]=Pe):Pe=t[33];let Fe=Pe,Ie=j===`artifact`,Le=H?.styleMode??ee??(Ie&&A?`open`:void 0),Re;t[34]!==W||t[35]!==Le?(Re=Dt({explicitStyleMode:Le,libraryFileId:W}),t[34]=W,t[35]=Le,t[36]=Re):Re=t[36];let G=Re,K=H?.title??te,ze;t[37]===M?ze=t[38]:(ze=()=>M!=null&&ce(M)?`work`:`chat`,t[37]=M,t[38]=ze);let Be=i(ze),Ve;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(Ve=at(),t[39]=Ve):Ve=t[39];let He=Ve,Ue=A,We=Ie&&G===`open`,q=I===`collapsed`||I==null&&E&&H?.latestPatchMessageId!=null&&H.latestPatchMessageId!==b,Ge=s!=null||l!=null,Ke;t[40]!==p||t[41]!==s||t[42]!==M?.id||t[43]!==l||t[44]!==F||t[45]!==v||t[46]!==b||t[47]!==W||t[48]!==G||t[49]!==K||t[50]!==T||t[51]!==R||t[52]!==L?.messageId?(Ke=async e=>{let t=s;if(t==null&&l!=null)try{t=await Ee({abortSignal:new AbortController().signal,fileId:l,serverThreadId:R})}catch{return}t!=null&&Me({appBlockId:F,conversationId:M?.id??p??null,isOriginalVersion:!0,versionNumber:v??void 0},`app-block:${F}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:F,libraryFileId:W,messageId:L?.messageId??b,refIndex:T},styleMode:G,title:K})},t[40]=p,t[41]=s,t[42]=M?.id,t[43]=l,t[44]=F,t[45]=v,t[46]=b,t[47]=W,t[48]=G,t[49]=K,t[50]=T,t[51]=R,t[52]=L?.messageId,t[53]=Ke):Ke=t[53],M?.id,L?.messageId;let J=Ke;if(O&&!Ue){let e;return t[54]===K?e=t[55]:(e=(0,$.jsx)(Cn,{title:K}),t[54]=K,t[55]=e),e}let qe=ie&&s!=null;if(Ce?.status===`missing`&&!qe)return null;if(q){let e=Ge?J:void 0,n;return t[56]!==K||t[57]!==e?(n=(0,$.jsx)(_r,{onView:e,title:K}),t[56]=K,t[57]=e,t[58]=n):n=t[58],n}let Y=je??(Ue&&O?``:null);if(Y==null){if(H?.latestPatchMessageId!=null){let e=M?.id??p,n=Ce?.status===`failed`,r;t[59]===ye?r=t[60]:(r=()=>ye(ir),t[59]=ye,t[60]=r);let i;return t[61]!==F||t[62]!==Ie||t[63]!==U||t[64]!==K||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(cr,{appBlockId:F,conversationId:e,hasFailed:n,iconSvg:U,onRetry:r,showHeader:Ie,title:K}),t[61]=F,t[62]=Ie,t[63]=U,t[64]=K,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===K?e=t[70]:(e=(0,$.jsx)(Cn,{title:K}),t[69]=K,t[70]=e),e}let Je;t[71]!==p||t[72]!==Be||t[73]!==O||t[74]!==k||t[75]!==b||t[76]!==K||t[77]!==T?(Je=!O&&!k&&p!=null&&b!=null&&T!=null&&rt()?{reference:{clientThreadId:p,messageId:b,referenceIndex:T},target:{kind:`app_block`,metadata:{...K==null?{}:{title:K},tab:Be}}}:void 0,t[71]=p,t[72]=Be,t[73]=O,t[74]=k,t[75]=b,t[76]=K,t[77]=T,t[78]=Je):Je=t[78];let X=Je,Ye=M?.id??p,Xe=L?.messageId??b,Ze;t[79]!==F||t[80]!==W||t[81]!==T||t[82]!==Xe?(Ze={appBlockId:F,libraryFileId:W,messageId:Xe,refIndex:T},t[79]=F,t[80]=W,t[81]=T,t[82]=Xe,t[83]=Ze):Ze=t[83];let Qe=We&&He&&!O,$e=M?.id??p,et;t[84]===Fe?et=t[85]:(et=Fe==null?void 0:{contentReferenceIndex:Fe.refIndex,messageId:Fe.messageId,widgetName:_e.AppBlock},t[84]=Fe,t[85]=et);let tt;t[86]!==n||t[87]!==D||t[88]!==X||t[89]!==d||t[90]!==O||t[91]!==x||t[92]!==S||t[93]!==U||t[94]!==G||t[95]!==K||t[96]!==w||t[97]!==Y||t[98]!==ae||t[99]!==Ue||t[100]!==We||t[101]!==Qe||t[102]!==$e||t[103]!==et||t[104]!==j||t[105]!==re?(tt=(0,$.jsx)(ar,{additionalResourceDomains:n,canOpen:Qe,captureConsoleMessages:D,clientThreadId:$e,code:Y,feedback:X,iconSvg:U,id:d,isStreaming:O,onConsoleMessagesChange:x,onReadyChange:S,progressiveStreaming:Ue,ref:w,showArtifactCard:We,shareConversation:ae,shareTarget:et,styleMode:G,title:K,variant:j,widgetRefSeenAtMs:re}),t[86]=n,t[87]=D,t[88]=X,t[89]=d,t[90]=O,t[91]=x,t[92]=S,t[93]=U,t[94]=G,t[95]=K,t[96]=w,t[97]=Y,t[98]=ae,t[99]=Ue,t[100]=We,t[101]=Qe,t[102]=$e,t[103]=et,t[104]=j,t[105]=re,t[106]=tt):tt=t[106];let nt;return t[107]!==n||t[108]!==G||t[109]!==K||t[110]!==Y||t[111]!==Ye||t[112]!==Ze||t[113]!==tt?(nt=(0,$.jsx)(un,{additionalResourceDomains:n,code:Y,conversationId:Ye,styleMode:G,source:Ze,title:K,children:tt}),t[107]=n,t[108]=G,t[109]=K,t[110]=Y,t[111]=Ye,t[112]=Ze,t[113]=tt,t[114]=nt):nt=t[114],nt}function ir(e){return e+1}function ar(e){"use forget";let t=(0,Z.c)(47),{additionalResourceDomains:n,canOpen:r,captureConsoleMessages:i,clientThreadId:a,code:o,feedback:s,iconSvg:c,id:l,isStreaming:u,onConsoleMessagesChange:d,onReadyChange:f,progressiveStreaming:p,ref:m,shareConversation:h,shareTarget:g,showArtifactCard:_,styleMode:v,title:y,variant:b,widgetRefSeenAtMs:x}=e,{isViewingHistoricalVersion:S,openExpandedView:C,triggerRef:w}=rn(),T;t[0]===n?T=t[1]:(T=n??[],t[0]=n,t[1]=T);let ee;t[2]!==o||t[3]!==l||t[4]!==v||t[5]!==T?(ee=[l,v,o,...T],t[2]=o,t[3]=l,t[4]=v,t[5]=T,t[6]=ee):ee=t[6];let te=ee.join(`\0`),[ne,re]=(0,Q.useState)(null),E=!u&&ne===te,D;t[7]===C?D=t[8]:(D=()=>{be(),C()},t[7]=C,t[8]=D);let O=D,k;t[9]!==f||t[10]!==te?(k=(e,t)=>{re(e?te:null),f?.(e,t)},t[9]=f,t[10]=te,t[11]=k):k=t[11];let A=k,j=S?O:void 0,M;t[12]!==c||t[13]!==j||t[14]!==y||t[15]!==w?(M=(0,$.jsx)(dr,{iconSvg:c,onOpen:j,openButtonRef:w,title:y}),t[12]=c,t[13]=j,t[14]=y,t[15]=w,t[16]=M):M=t[16];let N;t[17]!==n||t[18]!==i||t[19]!==a||t[20]!==o||t[21]!==A||t[22]!==l||t[23]!==u||t[24]!==d||t[25]!==p||t[26]!==m||t[27]!==v||t[28]!==b||t[29]!==x?(N=(0,$.jsx)(yr,{additionalResourceDomains:n,code:o,id:l,isStreaming:u,captureConsoleMessages:i,clientThreadId:a,onConsoleMessagesChange:d,onReadyChange:A,progressiveStreaming:p,ref:m,styleMode:v,variant:b,widgetRefSeenAtMs:x}),t[17]=n,t[18]=i,t[19]=a,t[20]=o,t[21]=A,t[22]=l,t[23]=u,t[24]=d,t[25]=p,t[26]=m,t[27]=v,t[28]=b,t[29]=x,t[30]=N):N=t[30];let ie;t[31]!==r||t[32]!==s||t[33]!==O||t[34]!==c||t[35]!==E||t[36]!==u||t[37]!==h||t[38]!==g||t[39]!==_||t[40]!==N||t[41]!==y||t[42]!==w?(ie=(0,$.jsx)(sr,{canOpen:r,expandButtonRef:w,feedback:s,iconSvg:c,isShareReady:E,shareConversation:h,shareTarget:g,isStreaming:u,showArtifactCard:_,title:y,onOpen:O,children:N}),t[31]=r,t[32]=s,t[33]=O,t[34]=c,t[35]=E,t[36]=u,t[37]=h,t[38]=g,t[39]=_,t[40]=N,t[41]=y,t[42]=w,t[43]=ie):ie=t[43];let P;return t[44]!==M||t[45]!==ie?(P=(0,$.jsx)(dn,{collapsedPreview:M,inlinePreview:ie}),t[44]=M,t[45]=ie,t[46]=P):P=t[46],P}function or(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:s,titleClassName:c}=e,l;t[0]===r?l=t[1]:(l=o(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=l);let u=c??`truncate text-base font-semibold`,d;t[2]===u?d=t[3]:(d=o(`text-token-text-primary`,u),t[2]=u,t[3]=d);let f=s??i,p;t[4]!==d||t[5]!==f?(p=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:d,children:f})}),t[4]=d,t[5]=f,t[6]=p):p=t[6];let m;t[7]!==a||t[8]!==p?(m=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,p]}),t[7]=a,t[8]=p,t[9]=m):m=t[9];let h;return t[10]!==n||t[11]!==l||t[12]!==m?(h=(0,$.jsxs)(`div`,{className:l,children:[m,n]}),t[10]=n,t[11]=l,t[12]=m,t[13]=h):h=t[13],h}function sr(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:s,isShareReady:c,isStreaming:l,onOpen:u,shareConversation:d,shareTarget:f,showArtifactCard:p,title:m}=e,h=me(),g;t[0]===h?g=t[1]:(g=h.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=h,t[1]=g);let _=g,v;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==_||t[6]!==s||t[7]!==c||t[8]!==l||t[9]!==u||t[10]!==d||t[11]!==f||t[12]!==p||t[13]!==m?(v=p?(0,$.jsxs)(`div`,{className:o(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,l&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(or,{action:(0,$.jsx)(zr,{canOpen:n,conversation:d,expandButtonRef:i,isReady:c,onOpen:u,target:f}),className:`min-h-13 px-4 py-2`,fallbackTitle:_,leading:l?(0,$.jsx)(F,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(pr,{iconSvg:s}),title:m}),(0,$.jsx)(`div`,{children:r})]}):r,t[2]=n,t[3]=r,t[4]=i,t[5]=_,t[6]=s,t[7]=c,t[8]=l,t[9]=u,t[10]=d,t[11]=f,t[12]=p,t[13]=m,t[14]=v):v=t[14];let y;t[15]===a?y=t[16]:(y=a==null?null:(0,$.jsx)(lr,{...a}),t[15]=a,t[16]=y);let b;return t[17]!==v||t[18]!==y?(b=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[v,y]}),t[17]=v,t[18]=y,t[19]=b):b=t[19],b}function cr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:a,iconSvg:o,onRetry:s,showHeader:c,title:l}=e,u=i(je),d=me(),f;t[0]===d?f=t[1]:(f=d.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=d,t[1]=f);let p=f;if(we(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==o||t[3]!==l?(e=(0,$.jsx)(dr,{iconSvg:o,title:l}),t[2]=o,t[3]=l,t[4]=e):e=t[4],e}let m;t[5]!==p||t[6]!==o||t[7]!==c||t[8]!==l?(m=c?(0,$.jsx)(or,{className:`mb-2`,fallbackTitle:p,leading:(0,$.jsx)(pr,{iconSvg:o}),title:l}):null,t[5]=p,t[6]=o,t[7]=c,t[8]=l,t[9]=m):m=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:Cr},t[10]=h):h=t[10];let g;t[11]!==a||t[12]!==s?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:a?(0,$.jsx)(Sr,{onRetry:s}):(0,$.jsx)(xr,{})}),t[11]=a,t[12]=s,t[13]=g):g=t[13];let _;return t[14]!==m||t[15]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[m,g]}),t[14]=m,t[15]=g,t[16]=_):_=t[16],_}function lr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[a,o]=(0,Q.useState)(!1);if(i(ur))return null;let s;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,$.jsx)(Xe,{}),t[0]=s):s=t[0];let c;return t[1]!==a||t[2]!==n||t[3]!==r?(c=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(Y,{onOpenChange:o,open:a,reference:n,target:r,triggerButton:s})}),t[1]=a,t[2]=n,t[3]=r,t[4]=c):c=t[4],c}function ur(){return J()}function dr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=me(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=or,l=r==null?void 0:(0,$.jsx)(f,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(pe,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let p;t[9]===n?p=t[10]:(p=(0,$.jsx)(fr,{iconSvg:n}),t[9]=n,t[10]=p);let m;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==p||t[15]!==a?(m=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:p,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=p,t[15]=a,t[16]=m):m=t[16];let h;t[17]!==u||t[18]!==m?(h=(0,$.jsx)(`div`,{className:u,children:m}),t[17]=u,t[18]=m,t[19]=h):h=t[19];let g;return t[20]!==d||t[21]!==h?(g=(0,$.jsx)(`div`,{className:d,children:h}),t[20]=d,t[21]=h,t[22]=g):g=t[22],g}function fr(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(pr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function pr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=mr(r),t[0]=r,t[1]=a);let s=a,c;return t[2]!==i||t[3]!==s?(c=s==null?(0,$.jsx)(Ie,{"aria-hidden":`true`,className:o(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:o(`icon-md shrink-0`,i),children:(0,$.jsx)(ge,{svgString:s,className:`h-full w-full`})}),t[2]=i,t[3]=s,t[4]=c):c=t[4],c}function mr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>jr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Mr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Pr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!hr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function hr(e){let t=e.replace(Nr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Nr)){let e=t[1],n=t[2];if(!Fr.has(e)||!gr(e,n))return!1}return!0}function gr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function _r(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=me(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(pe,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(pe,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(pe,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function vr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=me(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let c=o,l;t[2]===r?l=t[3]:(l=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=l);let u;t[4]!==c||t[5]!==i||t[6]!==l?(u=(0,$.jsx)(f,{ref:i,type:`button`,icon:Pe,color:`ghost`,size:`medium`,label:c,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:l}),t[4]=c,t[5]=i,t[6]=l,t[7]=u):u=t[7];let d;return t[8]!==n||t[9]!==c||t[10]!==u?(d=(0,$.jsx)(s,{label:c,className:n,children:u}),t[8]=n,t[9]=c,t[10]=u,t[11]=d):d=t[11],d}function yr(e){"use forget";let t=(0,Z.c)(134),{additionalResourceDomains:n,clientThreadId:r,code:a,id:s,captureConsoleMessages:c,isStreaming:l,onConsoleMessagesChange:u,onReadyChange:d,progressiveStreaming:f,ref:p,styleMode:m,surface:g,variant:_,widgetRefSeenAtMs:v}=e,y=l!==void 0&&l,b=f!==void 0&&f,x=m===void 0?`default`:m,S=g===void 0?`inline`:g,C=_===void 0?`inline`:_,w=me(),T=(0,Q.useRef)(null),ee=(0,Q.useRef)(!1),te=(0,Q.useRef)(!1),re=(0,Q.useRef)(null),E=(0,Q.useRef)(null),D=(0,Q.useRef)(null),O=(0,Q.useRef)(null),k=(0,Q.useRef)(null),A=(0,Q.useRef)(null),j=(0,Q.useRef)(0),M=(0,Q.useRef)(null),N=(0,Q.useRef)(null),ie;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ie=[],t[0]=ie):ie=t[0];let P=(0,Q.useRef)(ie),oe=ne(),ce=i(se),{allowDependencyNetworkRequestsWithoutCanvasAccess:F}=(0,Q.useContext)(Ge),le=Be()||F,I=He(r)&&!F,ue=oe?`dark`:`light`,L=w.locale,de;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(de={status:`streaming`},t[1]=de):de=t[1];let[fe,R]=(0,Q.useState)(de),z=fe.status===`finalized`&&fe.html!==a,he=b&&C===`artifact`&&!y,B=b&&S===`inline`&&fe.status!==`static`&&!he&&!z,ge=B&&y&&C===`artifact`&&!nr(a),_e=ge?0:wr,ve=le?`execution-enabled`:`execution-disabled`,ye=I?`network-enabled`:`network-disabled`,be=B?`progressive-app-block-stream`:a,xe;t[2]===n?xe=t[3]:(xe=n??[],t[2]=n,t[3]=xe);let Se;t[4]!==ce||t[5]!==L||t[6]!==x||t[7]!==S||t[8]!==be||t[9]!==xe||t[10]!==ve||t[11]!==ye||t[12]!==ue?(Se=[ue,ce,S,x,L,ve,ye,be,...xe],t[4]=ce,t[5]=L,t[6]=x,t[7]=S,t[8]=be,t[9]=xe,t[10]=ve,t[11]=ye,t[12]=ue,t[13]=Se):Se=t[13];let V=Se.join(`\0`),H;t[14]===n?H=t[15]:(H=qt(n),t[14]=n,t[15]=H);let Ce=H,we=I?`deps_only`:`disabled`,Te;t[16]!==S||t[17]!==we?(Te={networkPolicy:we,surface:S},t[16]=S,t[17]=we,t[18]=Te):Te=t[18];let Ee=Te,[De,Oe]=(0,Q.useState)(0),[ke,Ae]=(0,Q.useState)(null),je=ke?.signature===V?ke.status:null,U=je===`ready`,W=U||je===`failed_after_ready`,Me=je===`failed`,Ne=B&&y&&!Me,Pe;t[19]!==a||t[20]!==Ee||t[21]!==v?(Pe={content:a,metricTags:Ee,widgetRefSeenAtMs:v},t[19]=a,t[20]=Ee,t[21]=v,t[22]=Pe):Pe=t[22];let{cancelFirstPaintFrame:Fe,startRunMetrics:Ie}=ht(Pe),Le,Re;t[23]!==U||t[24]!==d?(Le=()=>{d?.(U)},Re=[U,d],t[23]=U,t[24]=d,t[25]=Le,t[26]=Re):(Le=t[25],Re=t[26]),(0,Q.useEffect)(Le,Re);let G,Ve;t[27]===Symbol.for(`react.memo_cache_sentinel`)?(G=()=>({clearCapturedConsoleMessages:()=>{P.current=[]},captureScreenshotDataUrl:async()=>(await T.current?.screenshot())?.imageBase64??null,focus:()=>{T.current?.focus()}}),Ve=[],t[27]=G,t[28]=Ve):(G=t[27],Ve=t[28]),(0,Q.useImperativeHandle)(p,G,Ve);let We;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(We=()=>{M.current!=null&&(window.clearTimeout(M.current),M.current=null)},t[29]=We):We=t[29];let q=ae(We),Ke;t[30]===Symbol.for(`react.memo_cache_sentinel`)?(Ke=()=>{N.current!=null&&(window.clearTimeout(N.current),N.current=null)},t[30]=Ke):Ke=t[30];let J=ae(Ke),qe;t[31]!==U||t[32]!==d||t[33]!==V||t[34]!==B?(qe=()=>{if(!B||!U)return;let e=O.current,t=T.current;if(e==null||t?.updateAppBlockStream==null||te.current)return;let n=j.current;O.current=null,E.current=ut(),D.current=e.html,e.isFinal&&(te.current=!0);let r=()=>j.current===n?t.updateAppBlockStream?.(e)??Promise.resolve():Promise.resolve(),i=A.current,a=i==null?r():i.then(r);A.current=a,a.then(()=>{A.current===a&&(A.current=null),j.current===n&&(nr(e.html)&&k.current?.markFirstPaint(),e.isFinal&&(k.current?.reportPayloadSize(e.html),R({status:`finalized`,html:e.html})))},e=>{A.current===a&&(A.current=null),j.current===n&&(e instanceof DOMException&&e.name===`AbortError`||(Ae({signature:V,status:`failed`}),d?.(!1,`failure`)))})},t[31]=U,t[32]=d,t[33]=V,t[34]=B,t[35]=qe):qe=t[35];let Y=ae(qe),Je;t[36]!==ce||t[37]!==c||t[38]!==q||t[39]!==J||t[40]!==a||t[41]!==le||t[42]!==I||t[43]!==z||t[44]!==y||t[45]!==L||t[46]!==u||t[47]!==d||t[48]!==V||t[49]!==fe.status||t[50]!==he||t[51]!==B||t[52]!==Ie||t[53]!==x||t[54]!==S||t[55]!==ue?(Je=()=>{if(!le)return;(z||he&&fe.status!==`static`)&&R({status:`static`});let e=B&&T.current?.updateAppBlockStream!=null;if(B&&!e){y||R({status:`static`});return}ee.current=!0,te.current=!1,re.current=null,E.current=null,D.current=null,O.current=null,k.current=null,A.current=null,J(),j.current+=1;let t=j.current;q(),Ae(null);let{expectReadySignal:n,html:r}=Jt(a,ue,L,ce,S,{loadTailwind:I,progressiveStreaming:e,styleMode:x}),i=!1,o=!1,s=!1,l=!1,f=!1,p=()=>j.current===t,m=Ie(p,{deferFirstPaint:e,deferPayloadSize:e});e&&(k.current=m);let g=e=>{!c||u==null||!p()||(P.current=e,!l&&(l=!0,h.postTask(()=>{l=!1,p()&&u(P.current)},{priority:`background`})))},_=e=>{!p()||i||s||(i=!0,q(),m.markReady(e),!f&&(f=!0,h.postTask(()=>{f=!1,!(!p()||s)&&(o=!0,Ae({signature:V,status:`ready`}))},{priority:`background`})))},v=(e,t)=>{!p()||s||(s=!0,q(),Ae({signature:V,status:o?`failed_after_ready`:`failed`}),m.reportFailure(e,t),h.postTask(()=>{p()&&d?.(!1,`failure`)},{priority:`background`}))};P.current=[],g([]),M.current=window.setTimeout(()=>{v(`sandbox_eval`,`ready_timeout`)},Er),(async()=>{let e=T.current?.evalAsync({code:r,expectReadySignal:n,language:`html`});if(e==null){v(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){p()&&!i&&v(`sandbox_eval`,`generator_completed_without_ready`);break}p()&&(g([...P.current,t.value]),t.value.type===K.ENVIRONMENT_STATUS&&t.value.status===ze.RUNNING_CODE&&_(`running_code`),t.value.type===K.RUN_COMPLETE&&(t.value.wasFatalError?v(`runtime`,`fatal_runtime_error`):(_(`run_complete`),m.reportSuccess(`run_complete`))),await h.yield())}})().catch(e=>{p()&&(e instanceof DOMException&&e.name===`AbortError`||v(`sandbox_eval`,ft(e)))})},t[36]=ce,t[37]=c,t[38]=q,t[39]=J,t[40]=a,t[41]=le,t[42]=I,t[43]=z,t[44]=y,t[45]=L,t[46]=u,t[47]=d,t[48]=V,t[49]=fe.status,t[50]=he,t[51]=B,t[52]=Ie,t[53]=x,t[54]=S,t[55]=ue,t[56]=Je):Je=t[56];let X=ae(Je),Ye;t[57]!==q||t[58]!==J?(Ye=()=>{j.current+=1,ee.current=!1,te.current=!1,re.current=null,D.current=null,O.current=null,k.current=null,A.current=null,q(),J(),Ae(null),Oe(br)},t[57]=q,t[58]=J,t[59]=Ye):Ye=t[59];let Xe=ae(Ye),Ze;t[60]===S?Ze=t[61]:(Ze=S===`inline`?{margin:-4,width:`calc(100% + ${Tr*2}px)`}:void 0,t[60]=S,t[61]=Ze);let Qe=Ze,$e;t[62]!==Fe||t[63]!==q||t[64]!==J||t[65]!==X?($e=()=>{X();let e=T.current;return()=>{j.current+=1,k.current=null,A.current=null,q(),J(),Fe(),e?.stop()}},t[62]=Fe,t[63]=q,t[64]=J,t[65]=X,t[66]=$e):$e=t[66];let et;t[67]!==Fe||t[68]!==q||t[69]!==J||t[70]!==le||t[71]!==V||t[72]!==X||t[73]!==De?(et=[Fe,q,J,le,V,X,De],t[67]=Fe,t[68]=q,t[69]=J,t[70]=le,t[71]=V,t[72]=X,t[73]=De,t[74]=et):et=t[74],(0,Q.useEffect)($e,et);let tt,nt;t[75]!==y||t[76]!==X||t[77]!==B?(tt=()=>{!B||y||ee.current||T.current?.updateAppBlockStream!=null||X()},nt=[y,X,B],t[75]=y,t[76]=X,t[77]=B,t[78]=tt,t[79]=nt):(tt=t[78],nt=t[79]),(0,Q.useEffect)(tt,nt);let rt,it;if(t[80]!==J||t[81]!==a||t[82]!==Y||t[83]!==Me||t[84]!==U||t[85]!==y||t[86]!==B||t[87]!==C?(rt=()=>{if(!B||!U||Me||te.current||T.current?.updateAppBlockStream==null)return;let e=y?tr(a):a;if(y&&(O.current?.html??D.current)===e)return;if(O.current={html:e,isFinal:!y},!y){J(),Y();return}let t=E.current;if(t==null&&C===`artifact`&&(re.current??=ut(),t=re.current),t==null){Y();return}let n=C===`artifact`?Or:Dr,r=ut()-t;if(r>=n){Y();return}return N.current=window.setTimeout(()=>{N.current=null,Y()},n-r),J},it=[J,a,Y,Me,U,y,B,C],t[80]=J,t[81]=a,t[82]=Y,t[83]=Me,t[84]=U,t[85]=y,t[86]=B,t[87]=C,t[88]=rt,t[89]=it):(rt=t[88],it=t[89]),(0,Q.useEffect)(rt,it),!le){let e;return t[90]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(vn,{}),t[90]=e):e=t[90],e}let at=S===`inline`&&(ge?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),ot=S===`stage`&&`h-full min-h-0`,st;t[91]!==at||t[92]!==ot?(st=o(`flex w-full`,at,ot),t[91]=at,t[92]=ot,t[93]=st):st=t[93];let ct=S===`inline`?`flex-none`:`w-full`,lt=Ne&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,dt;t[94]!==ct||t[95]!==lt?(dt=o(`relative min-w-0`,ct,lt),t[94]=ct,t[95]=lt,t[96]=dt):dt=t[96];let pt=`${De}:${I?`network-enabled`:`network-disabled`}`,mt;t[97]===w?mt=t[98]:(mt=w.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[97]=w,t[98]=mt);let gt=I?`deps-only`:`none`,_t=I?kr:Ar,vt=W?0:-1,yt=S===`inline`&&x===`open`,bt=S!==`stage`,xt=B?_e:Cr,St;t[99]!==s||t[100]!==X||t[101]!==Ce||t[102]!==pt||t[103]!==mt||t[104]!==gt||t[105]!==_t||t[106]!==vt||t[107]!==yt||t[108]!==bt||t[109]!==xt?(St=(0,$.jsx)(Ue,{id:s,title:mt,visuallyHidden:!1,networkPolicy:gt,additionalResourceDomains:Ce,sandboxPermissions:_t,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:vt,onRetryCodeRun:X,transparentBackground:yt,useIntrinsicHeight:bt,intrinsicHeightFallback:xt,ref:T},pt),t[99]=s,t[100]=X,t[101]=Ce,t[102]=pt,t[103]=mt,t[104]=gt,t[105]=_t,t[106]=vt,t[107]=yt,t[108]=bt,t[109]=xt,t[110]=St):St=t[110];let Ct;t[111]===Ne?Ct=t[112]:(Ct=Ne?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[111]=Ne,t[112]=Ct);let wt;t[113]!==Me||t[114]!==W||t[115]!==B?(wt=!W&&!Me&&!B?(0,$.jsx)(xr,{}):null,t[113]=Me,t[114]=W,t[115]=B,t[116]=wt):wt=t[116];let Tt;t[117]!==Me||t[118]!==Xe?(Tt=Me?(0,$.jsx)(Sr,{onRetry:Xe}):null,t[117]=Me,t[118]=Xe,t[119]=Tt):Tt=t[119];let Et;t[120]!==Qe||t[121]!==Ne||t[122]!==dt||t[123]!==St||t[124]!==Ct||t[125]!==wt||t[126]!==Tt?(Et=(0,$.jsxs)(`div`,{"aria-busy":Ne,className:dt,style:Qe,children:[St,Ct,wt,Tt]}),t[120]=Qe,t[121]=Ne,t[122]=dt,t[123]=St,t[124]=Ct,t[125]=wt,t[126]=Tt,t[127]=Et):Et=t[127];let Dt;t[128]===Ne?Dt=t[129]:(Dt=Ne?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(pe,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[128]=Ne,t[129]=Dt);let Ot;return t[130]!==st||t[131]!==Et||t[132]!==Dt?(Ot=(0,$.jsxs)(`div`,{className:st,children:[Et,Dt]}),t[130]=st,t[131]=Et,t[132]=Dt,t[133]=Ot):Ot=t[133],Ot}function br(e){return e+1}function xr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(F,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(pe,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function Sr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(pe,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(pe,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(f,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br=e((()=>{Z=fe(),m(),Ke(),q(),Ye(),ee(),g(),We(),C(),Ne(),Fe(),Re(),ve(),Ve(),b(),Ce(),Ze(),U(),d(),j(),u(),V(),P(),te(),ie(),qe(),xe(),G(),l(),Q=n(I()),de(),nn(),Tt(),ot(),_n(),W(),xn(),sn(),kn(),ct(),ke(),Ot(),$n(),$=ue(),Cr=432,wr=120,Tr=4,Er=15e3,Dr=100,Or=350,kr=`allow-scripts allow-same-origin allow-forms`,Ar=`allow-scripts allow-same-origin`,jr=12e3,Mr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Nr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Pr=new Set([`svg`,`path`]),Fr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Ir=/<script(?:\s|>)/i,Lr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Rr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,zr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:c}=e,l;t[0]!==n||t[1]!==i||t[2]!==o?(l=n&&o!=null?(0,$.jsx)(vr,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=l):l=t[3];let u=l;if(r==null)return u;let d;t[4]===c?d=t[5]:(d=c??{contentReferenceIndex:-1,messageId:``},t[4]=c,t[5]=d);let p=d,m=a&&c!=null,h;t[6]===u?h=t[7]:(h=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(s,{label:n,children:(0,$.jsx)(f,{type:`button`,icon:Le,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),u]}):u},t[6]=u,t[7]=h);let g;return t[8]!==p||t[9]!==r||t[10]!==m||t[11]!==h?(g=(0,$.jsx)(Qe,{category:_e.AppBlock,conversation:r,isReady:m,target:p,children:h}),t[8]=p,t[9]=r,t[10]=m,t[11]=h,t[12]=g):g=t[12],g}}));export{it as S,Tt as _,Br as a,ot as b,Gn as c,pn as d,_n as f,ut as g,Dt as h,er as i,Kn as l,Et as m,xr as n,qn as o,Ot as p,yr as r,$n as s,rr as t,fn as u,st as v,at as x,ct as y};
//# sourceMappingURL=e3b746a6-ewoexit3n2qipgr7.js.map