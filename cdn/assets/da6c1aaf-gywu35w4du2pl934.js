import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{$c as n,AQ as r,Cc as i,F1 as a,GL as o,GQ as s,Hc as c,Jc as l,KQ as u,Lc as d,Mc as f,UL as p,Uc as m,VC as h,_Z as g,bP as _,gc as v,gv as y,hv as b,i0 as x,jc as S,tl as C,yP as w,zC as T,zc as E}from"./4813494d-knhpfrb9ycxm929m.js";import{An as D,Cn as O,Fn as k,On as A,Pn as j,Sn as M,bn as ee,en as N,gn as te,jn as ne,kn as re,xn as P,yn as ie}from"./2340486e-eab5bn2wcgxcv5rd.js";import{Bs as ae,Det as oe,EU as se,HK as ce,Ha as le,Oet as ue,Ua as de,WK as fe,_q as pe,bU as me,gq as he,yU as ge,zs as _e}from"./conversation-small-n5s3carkmv0i75zr.js";import{Mt as ve,Nt as ye,dv as be,fv as xe,gv as Se,hv as Ce,n as we,t as Te}from"./30901919-h7uts3f2w0id3a9a.js";import{At as Ee,Dm as De,Et as Oe,Hp as ke,Tt as Ae,Up as je,as as Me,at as Ne,au as F,bt as Pe,cs as Fe,ct as Ie,cu as Le,ep as Re,is as ze,jt as Be,km as Ve,kt as He,ls as Ue,lt as I,lu as We,nr as Ge,ru as Ke,tp as qe,tr as Je,uu as L,yt as Ye}from"./8b34dbc2-co7396vgukg6b5f0.js";var R,z,B,V,H,U,W,Xe,Ze,Qe=e((()=>{k(),re(),ne(),R=new WeakMap,z=new WeakMap,B=new WeakMap,V=new WeakMap,H=new WeakMap,U=new WeakMap,W=new WeakMap,Xe=class{constructor(e,t){j(this,R,void 0),j(this,z,void 0),j(this,B,void 0),j(this,V,[]),j(this,H,{}),j(this,U,void 0),j(this,W,void 0),A(B,this,e);let n=e.getUniformBlockIndex(t,Ze._),r=e.getActiveUniformBlockParameter(t,n,e.UNIFORM_BLOCK_DATA_SIZE);A(U,this,e.createBuffer()),e.bindBuffer(e.UNIFORM_BUFFER,D(U,this)),e.bufferData(e.UNIFORM_BUFFER,r,e.DYNAMIC_DRAW),e.bindBufferBase(e.UNIFORM_BUFFER,0,D(U,this)),e.uniformBlockBinding(t,n,0);let i=e.getActiveUniformBlockParameter(t,n,e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);A(V,this,[]),A(H,this,{});for(let n=0;n<i.length;n++){let r=i[n];if(r==null)continue;let a=e.getActiveUniform(t,r);if(!a)throw Error(`No uniformInfo for index `+r);let o=a.name;o=o.replace(/\[0\]$/,``);let s=e.getActiveUniforms(t,[r],e.UNIFORM_OFFSET),c=Array.isArray(s)&&s.length>0?s[0]:0;D(V,this).push(o),D(H,this)[o]=c}A(W,this,new ArrayBuffer(r)),A(R,this,new Float32Array(D(W,this))),A(z,this,new Int32Array(D(W,this)))}setVariablesAndRender(e){for(let t of D(V,this)){let[,n]=t.split(`.`),r=D(H,this)[t]/4,i=e[n];typeof i==`number`?D(R,this)[r]=i:typeof i==`boolean`?D(z,this)[r]=+!!i:Array.isArray(i)&&D(R,this).set(i,r)}D(B,this).bindBuffer(D(B,this).UNIFORM_BUFFER,D(U,this)),D(B,this).bufferSubData(D(B,this).UNIFORM_BUFFER,0,D(W,this)),D(B,this).drawArrays(D(B,this).TRIANGLE_STRIP,0,6)}},Ze={_:`BlorbUniformsObject`}})),$e,et=e((()=>{$e=`#version 300 es
#define E (2.71828182846)
#define pi (3.14159265358979323844)

precision highp float;

struct ColoredSDF {
  float distance;
  vec4 color;
};

struct SDFArgs {
  vec2 st;
  float amount;
  float duration;
  float time;
  float mainRadius;
};

/* ----------------------- Utilities actually used ----------------------- */

float scaled(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), float(0), float(1));
}

float spring(float t, float d) {
  return 1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t);
}

float bounce(float t, float d) {
  return -sin(pi * (1.0 - d) * t) * (1.0 - t) * exp(-E * 2.0 * t) * t * 10.0;
}

float opSmoothUnion(float d1, float d2, float k) {
  if (k <= 0.0) k = 0.000001;
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
  r.xy = p.x > 0.0 ? r.xy : r.zw;
  r.x = p.y > 0.0 ? r.x : r.y;
  vec2 q = abs(p) - b + r.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

/* --------------------------- Active states ----------------------------- */

ColoredSDF applyIdleState(
  ColoredSDF sdf,
  SDFArgs args,
  bool isWhiteForeground
) {
  float midRadius = 0.12;
  float maxRadius = 0.3;
  float t1 = 1.0;
  float gamma = 3.0;
  float omega = pi / 2.0;

  float k = exp(-gamma) * omega;

  float radius;
  if (args.time <= t1) {
    float t_prime = args.time / t1;
    float springValue = 1.0 - exp(-gamma * t_prime) * cos(omega * t_prime);
    radius = midRadius * springValue;
  } else {
    float adjustedTime = args.time - t1;
    radius =
      midRadius + (maxRadius - midRadius) * (1.0 - exp(-k * adjustedTime));
  }

  float distance = length(args.st) - radius;
  sdf.distance = mix(sdf.distance, distance, args.amount);

  
  float alpha = sin(pi / 0.7 * args.time) * 0.3 + 0.7;
  vec4 color = vec4(isWhiteForeground ? vec3(1.0) : vec3(0.0), alpha);
  sdf.color = mix(sdf.color, color, args.amount);

  return sdf;
}

ColoredSDF applySpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float silenceAmount,
  float silenceDuration
) {
  float d = 1000.0;
  const int barCount = 4;

  float totalSpan = args.mainRadius * 1.9;
  float slotWidth = totalSpan / float(barCount);
  float gapRatio = clamp(0.35, 0.0, 0.9);
  float baseBarHalfWidth = slotWidth * (1.0 - gapRatio) * 0.5;

  for (int i = 0; i < barCount; i++) {
    float f = (float(i) + 0.5) / float(barCount);

    float w = baseBarHalfWidth;
    float h = w;

    float wave = sin(f * pi * 0.8 + args.time) * 0.5 + 0.5;
    float entryAnimation = spring(
      scaled(0.1 + wave * 0.4, 1.0 + wave * 0.4, args.duration),
      0.98
    );

    vec2 pos = vec2(f - 0.5, 0.0) * totalSpan;
    pos.y = 0.25 * (1.0 - entryAnimation);

    
    if (silenceAmount > 0.0) {
      float bounceStagger = f / 5.0;
      float bounceDelay = 0.6;
      float bounceTimer = scaled(
        bounceDelay,
        bounceDelay + 1.0,
        fract((silenceDuration + bounceStagger) / 2.0) * 2.0
      );
      pos.y +=
        bounce(bounceTimer, 6.0) *
        w *
        0.25 *
        silenceAmount *
        pow(entryAnimation, 4.0) *
        pow(args.amount, 4.0);
    }

    
    h += avgMag[i] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1);

    float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
    d = opSmoothUnion(d, dd, 0.2 * (1.0 - args.amount));
  }

  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

/* ------------------------------ I/O & UBO ------------------------------ */

in vec2 out_uv;
out vec4 fragColor;

layout(std140) uniform BlorbUniformsObject {
  float time;
  float speakTimestamp;
  vec4 avgMag;
  vec2 viewport;
  float screenScaleFactor;
  float silenceAmount;
  float silenceTimestamp;
  bool isWhiteForeground;
} ubo; 

/* -------------------------------- main --------------------------------- */

void main() {
  vec2 st = out_uv - 0.5;
  float viewRatio = ubo.viewport.y / ubo.viewport.x;
  st.y *= viewRatio;

  ColoredSDF sdf;
  sdf.distance = 1000.0;
  sdf.color = vec4(1.0);

  SDFArgs args;
  args.st = st;
  args.time = ubo.time;
  args.mainRadius = 0.49;
  args.amount = 1.0;
  args.duration = ubo.time - ubo.speakTimestamp;

  
  SDFArgs idleArgs = args;
  idleArgs.amount = 1.0;
  sdf = applyIdleState(sdf, idleArgs, ubo.isWhiteForeground);

  float silenceDuration = ubo.time - ubo.silenceTimestamp;
  sdf = applySpeakState(
    sdf,
    args,
    ubo.avgMag,
    ubo.silenceAmount,
    silenceDuration
  );

  float clampingTolerance = 0.0075 / max(ubo.screenScaleFactor, 0.0001);
  float clampedShape = smoothstep(clampingTolerance, 0.0, sdf.distance);
  float alpha = sdf.color.a * clampedShape;
  fragColor = vec4(sdf.color.rgb * alpha, alpha);
}`})),tt,nt=e((()=>{tt=`#version 300 es

out vec4 out_position;
out vec2 out_uv;

const vec4 blitFullscreenTrianglePositions[6] = vec4[](
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0),
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0)
);

void main() {
  out_position = blitFullscreenTrianglePositions[gl_VertexID];
  out_uv = out_position.xy * 0.5 + 0.5;
  out_uv.y = 1.0 - out_uv.y;
  gl_Position = out_position;
}`}));function rt({className:e,staticConfig:t,onDynamicConfigSetterReady:n,onRenderComplete:r}){"use no forget";let i=(0,G.useRef)(performance.now()/1e3),a=(0,G.useRef)({viewport:at,time:i.current}).current,o=(0,G.useRef)(void 0),c=(0,G.useRef)({...a,...t,speakTimestamp:0,avgMag:[0,0,0,0],silenceAmount:0,silenceTimestamp:0}),l=(0,G.useCallback)(e=>{c.current={...a,...t,...e},o.current=e},[a,t]);return(0,G.useEffect)(()=>{o.current&&(c.current={...a,...t,...o.current})},[t,a]),(0,G.useEffect)(()=>{n(l)},[n,l]),(0,G.useEffect)(()=>{let e=setInterval(()=>{a.time=performance.now()/1e3},ce);return()=>clearInterval(e)},[a]),(0,it.jsx)(Ae,{className:s(`flex items-center justify-center`,e),variablesRef:c,onViewportUpdate:e=>{a.viewport=[e.width,e.height]},onGlAvailable:void 0,onCanvasSizeUpdate:void 0,onRenderComplete:r,scale:1,GLUniformsSetter:Xe,vert:tt,frag:$e})}var G,it,at,ot=e((()=>{Oe(),fe(),u(),G=t(O()),Qe(),et(),nt(),it=M(),at=[300,300]}));function st(e){return e.source===he.Microphone}function ct(e){return e.origin===`local`}function lt(e){return e*mt}function ut(){Ee()||Be()}var dt,ft,pt,mt,ht,gt,_t=e((()=>{dt=N(),_e(),g(),pe(),He(),Ue(),ft=t(O()),ot(),pt=M(),mt=1.4,ht={bands:4,loPass:0,hiPass:400},gt=e=>{"use forget";let t=(0,dt.c)(13),{className:n}=e,[i,a]=(0,ft.useState)(void 0),o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=Fe(),t[0]=o):o=t[0];let s=r(o.tracks$),c;t[1]===s?c=t[2]:(c=s.filter(st).find(ct),t[1]=s,t[2]=c);let l=ae(c?.track,ht),u;t[3]===l?u=t[4]:(u=l.map(lt),t[3]=l,t[4]=u);let d=u,f=ut,p,m;t[5]!==d||t[6]!==i?(p=()=>{i&&i({speakTimestamp:0,avgMag:d,silenceAmount:0,silenceTimestamp:0})},m=[d,i],t[5]=d,t[6]=i,t[7]=p,t[8]=m):(p=t[7],m=t[8]),(0,ft.useEffect)(p,m);let h;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(h={screenScaleFactor:window.devicePixelRatio,isWhiteForeground:!0},t[9]=h):h=t[9];let g=h,_;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(_=e=>{a(()=>e)},t[10]=_):_=t[10];let v=_,y;return t[11]===n?y=t[12]:(y=(0,pt.jsx)(rt,{className:n,staticConfig:g,onDynamicConfigSetterReady:v,onRenderComplete:f}),t[11]=n,t[12]=y),y}})),vt,yt,bt=e((()=>{vt={ON:{colorClass:`!bg-black/5 !hover:bg-black/10 !active:bg-black/20 !dark:bg-[rgba(255,255,255,0.04)] !dark:hover:bg-white/5 !dark:active:bg-white/10`,sizeClass:`!h-9 !w-9 !min-h-9 touch:!min-h-9`,iconColorClass:void 0},OFF:{colorClass:`bg-red-500! hover:bg-red-400! active:bg-red-600! dark:bg-red-500! dark:hover:bg-red-400! dark:active:bg-red-600!`,sizeClass:`!h-9 !w-9 !min-h-9 touch:!min-h-9`,iconColorClass:`text-white`}},yt={ON:{colorClass:`bg-gray-900 hover:bg-gray-800 active:bg-gray-700`,sizeClass:`!h-9 !w-9 !min-h-9 touch:!min-h-9`,iconColorClass:`text-token-main-surface-primary hover:text-token-text-inverted`},OFF:{colorClass:`bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10`,sizeClass:`!h-9 !w-9 !min-h-9 touch:!min-h-9`,iconColorClass:`hover:text-token-text-inverted`}}}));function xt(e){return e.server.connectionState===l.Connected}function St(e){return e.server.remoteState===n.Listening||e.server.remoteState===n.Speaking}function Ct(){return ge()}var K,q,J,Y,wt,Tt,Et,Dt,Ot,kt,X,At=e((()=>{K=N(),y(),Te(),_t(),p(),g(),_(),Pe(),I(),C(),F(),u(),q=t(O()),ee(),me(),v(),bt(),d(),J=M(),Y={buttonLayout:`rounded-full overflow-hidden h-9 px-3`,buttonContents:`flex flex-row items-center justify-center gap-2`,buttonColors:`hover:opacity-80 font-semibold transition-colors transition-width duration-500 ease-in-out`,loadingColor:`bg-token-icon-primary text-token-text-inverted px-0`,loadedColor:`bg-token-bg-accent-static text-token-text-inverted-static`},wt=`relative overflow-visible before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:content-[''] before:shadow-[0_0_18px_6px_rgba(250,226,113,0.6)] before:opacity-90 before:animate-[pulse_2.4s_ease-in-out_infinite]`,Tt=`bg-[#fae271] text-[#a96e25] hover:bg-[#f6dc63] active:bg-[#f0d35a]`,Et=e=>{"use forget";let t=(0,K.c)(7),{className:n,Icon:r}=e,i;t[0]===n?i=t[1]:(i=s(n,`relative`),t[0]=n,t[1]=i);let a;t[2]===r?a=t[3]:(a=(0,J.jsx)(r,{className:`absolute start-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2`}),t[2]=r,t[3]=a);let o;return t[4]!==i||t[5]!==a?(o=(0,J.jsx)(`div`,{className:i,children:a}),t[4]=i,t[5]=a,t[6]=o):o=t[6],o},Dt=()=>{"use forget";let e=(0,K.c)(5),[t,n]=(0,q.useState)(!0),r=L(xt),i=L(St),a,o;return e[0]!==r||e[1]!==i||e[2]!==t?(a=()=>{r&&i&&t?n(!1):r||n(!0)},o=[r,i,t],e[0]=r,e[1]=i,e[2]=t,e[3]=a,e[4]=o):(a=e[3],o=e[4]),(0,q.useEffect)(a,o),t},Ot=e=>{"use forget";let t=(0,K.c)(15),{onClick:n,hasExceededRateLimit:r,isEndingVoiceSession:i,isLoading:a}=e,o=P(),c,l;i?(c=X.endingVoiceSessionLabel,l=w):a&&!r?(c=X.cancelLoadingAriaLabel,l=b):(c=X.endVoiceAriaLabel,l=b);let u;t[0]!==c||t[1]!==o?(u=o.formatMessage(c),t[0]=c,t[1]=o,t[2]=u):u=t[2];let d=l,f=i&&`pointer-events-none`,p;t[3]===f?p=t[4]:(p=s(`keyboard-focused:focus-ring`,f),t[3]=f,t[4]=p);let m;t[5]!==c||t[6]!==o?(m=o.formatMessage(c),t[5]=c,t[6]=o,t[7]=m):m=t[7];let h;return t[8]!==l||t[9]!==i||t[10]!==n||t[11]!==u||t[12]!==p||t[13]!==m?(h=(0,J.jsx)(Ne,{"aria-label":u,onClick:n,icon:d,iconSize:`icon-md`,buttonSize:vt.ON.sizeClass,className:p,disabled:i,iconColor:`text-token-text-inverted`,tooltipPrimaryLabel:m}),t[8]=l,t[9]=i,t[10]=n,t[11]=u,t[12]=p,t[13]=m,t[14]=h):h=t[14],h},kt=e=>{"use forget";let t=(0,K.c)(27),{onClick:n}=e,a=Dt(),c=P(),l=S(),u=r(Ct)?.id!=null,[d,f]=(0,q.useState)(!1),p=E();if(r(i)){let e;return t[0]!==u||t[1]!==l||t[2]!==a||t[3]!==n?(e=(0,J.jsx)(Ot,{onClick:n,hasExceededRateLimit:u,isEndingVoiceSession:l,isLoading:a}),t[0]=u,t[1]=l,t[2]=a,t[3]=n,t[4]=e):e=t[4],e}let m,h,g;l?(m=w,h=X.endingVoiceSessionLabel,g=X.endingVoiceSessionLabel):a&&!u?(m=d?we:w,h=X.cancelLoadingAriaLabel,g=X.cancelLoadingButtonLabel):(m=p&&o()?Ye:gt,h=X.endVoiceAriaLabel,g=X.endVoiceButtonLabel);let _=a||l,v,y,b,x;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(v=()=>f(!0),y=()=>f(!1),b=()=>f(!0),x=()=>f(!1),t[5]=v,t[6]=y,t[7]=b,t[8]=x):(v=t[5],y=t[6],b=t[7],x=t[8]);let C;t[9]!==h||t[10]!==c?(C=c.formatMessage(h),t[9]=h,t[10]=c,t[11]=C):C=t[11];let T=_&&Y.loadingColor,D=!_&&(p?Tt:Y.loadedColor),O=!_&&p&&wt,k;t[12]!==T||t[13]!==D||t[14]!==O?(k=s(Y.buttonLayout,Y.buttonContents,Y.buttonColors,T,D,O),t[12]=T,t[13]=D,t[14]=O,t[15]=k):k=t[15];let A;t[16]===m?A=t[17]:(A=(0,J.jsx)(Et,{Icon:m,className:`h-3 w-3`}),t[16]=m,t[17]=A);let j;t[18]===g?j=t[19]:(j=(0,J.jsx)(te,{...g}),t[18]=g,t[19]=j);let M;return t[20]!==l||t[21]!==n||t[22]!==A||t[23]!==j||t[24]!==C||t[25]!==k?(M=(0,J.jsxs)(`button`,{onMouseOver:v,onMouseOut:y,onFocus:b,onBlur:x,"aria-label":C,type:`button`,className:k,onClick:n,disabled:l,children:[A,j]}),t[20]=l,t[21]=n,t[22]=A,t[23]=j,t[24]=C,t[25]=k,t[26]=M):M=t[26],M},X=ie({endVoiceButtonLabel:{id:`integratedux.endVoiceMode`,defaultMessage:`End`},cancelLoadingButtonLabel:{id:`integratedux.cancelLoading`,defaultMessage:`Cancel`},endVoiceAriaLabel:{id:`integratedux.endVoiceAriaLabel`,defaultMessage:`End Voice`},cancelLoadingAriaLabel:{id:`integratedux.cancelLoadingAria`,defaultMessage:`Cancel loading`},endingVoiceSessionLabel:{id:`integratedux.endingVoiceSession`,defaultMessage:`Ending…`}})})),jt,Mt,Nt,Pt,Ft,Z,It=e((()=>{jt=N(),Ce(),I(),u(),Mt=t(O()),ee(),bt(),Nt=M(),Pt=1e3,Ft=e=>{"use forget";let t=(0,jt.c)(19),{disabled:n,onClick:r,microphoneLabel:i,microphoneActive:a,microphoneForceMuted:o}=e,[c,l]=(0,Mt.useState)(!1),u,d;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(u=()=>{let e=window.setTimeout(()=>l(!0),Pt);return()=>{window.clearTimeout(e)}},d=[],t[0]=u,t[1]=d):(u=t[0],d=t[1]),(0,Mt.useEffect)(u,d);let f=P(),{colorClass:p,sizeClass:m,iconColorClass:h}=vt[a||!c?`ON`:`OFF`],g;t[2]!==f||t[3]!==a||t[4]!==o?(g=o?f.formatMessage(Z.microphoneMuted):a?f.formatMessage(Z.microphoneOff):f.formatMessage(Z.microphoneOn),t[2]=f,t[3]=a,t[4]=o,t[5]=g):g=t[5];let _=g,v=!a,y;t[6]===v?y=t[7]:(y={isOnAfterRelease:v},t[6]=v,t[7]=y);let b=n&&c,x;t[8]!==p||t[9]!==m?(x=s(p,m),t[8]=p,t[9]=m,t[10]=x):x=t[10];let S;return t[11]!==h||t[12]!==i||t[13]!==r||t[14]!==_||t[15]!==y||t[16]!==b||t[17]!==x?(S=(0,Nt.jsx)(Ne,{"aria-label":_,buttonSound:y,onClick:r,icon:Se,iconSize:`icon-md`,disabled:b,className:x,iconColor:h,tooltipPrimaryLabel:_,tooltipSecondaryLabel:i}),t[11]=h,t[12]=i,t[13]=r,t[14]=_,t[15]=y,t[16]=b,t[17]=x,t[18]=S):S=t[18],S},Z=ie({microphoneMuted:{id:`integrated-ux.mute-button.microphone-muted`,defaultMessage:`Microphone muted in system settings / hardware switch`},microphoneOff:{id:`integrated-ux.mute-button.microphone-off`,defaultMessage:`Turn off microphone`},microphoneOn:{id:`integrated-ux.mute-button.microphone-on`,defaultMessage:`Turn on microphone`}})})),Lt,Rt,zt,Bt=e((()=>{Lt=N(),ze(),F(),v(),It(),Rt=M(),zt=()=>{"use forget";let e=(0,Lt.c)(6),{isMuting:t,toggleMute:n}=We(),{disconnectPending:r}=Me(),{forceMuted:i,active:a,label:o,granted:s}=f(),c=t||r||i||!s,l=s&&a,u;return e[0]!==i||e[1]!==o||e[2]!==c||e[3]!==l||e[4]!==n?(u=(0,Rt.jsx)(Ft,{disabled:c,onClick:n,microphoneActive:l,microphoneForceMuted:i,microphoneLabel:o}),e[0]=i,e[1]=o,e[2]=c,e[3]=l,e[4]=n,e[5]=u):u=e[5],u}})),Vt,Ht,Ut,Q,Wt=e((()=>{Vt=N(),_(),be(),ve(),I(),u(),ee(),bt(),Ht=M(),Ut=e=>{"use forget";let t=(0,Vt.c)(14),{waiting:n,started:r,onClick:i}=e,a=P(),o;t[0]!==a||t[1]!==r||t[2]!==n?(o=n?a.formatMessage(Q.screensharePending):r?a.formatMessage(Q.screenshareOn):a.formatMessage(Q.screenshareOff),t[0]=a,t[1]=r,t[2]=n,t[3]=o):o=t[3];let c=o,{colorClass:l,sizeClass:u,iconColorClass:d}=yt[r?`ON`:`OFF`],f=n?w:r?xe:ye,p;t[4]!==l||t[5]!==u?(p=s(l,u),t[4]=l,t[5]=u,t[6]=p):p=t[6];let m;return t[7]!==f||t[8]!==d||t[9]!==i||t[10]!==c||t[11]!==p||t[12]!==n?(m=(0,Ht.jsx)(Ne,{"aria-label":c,onClick:i,disabled:n,icon:f,iconSize:`icon-md`,className:p,iconColor:d}),t[7]=f,t[8]=d,t[9]=i,t[10]=c,t[11]=p,t[12]=n,t[13]=m):m=t[13],m},Q=ie({screenshareOff:{id:`integrated-ux.screenshare-button.screenshare-off`,defaultMessage:`Activate screenshare`},screenshareOn:{id:`integrated-ux.screenshare-button.screenshare-on`,defaultMessage:`Turn off screenshare`},screensharePending:{id:`integrated-ux.screenshare-button.pending`,defaultMessage:`Pending screenshare activation`}})})),Gt,Kt,qt,Jt=e((()=>{Gt=N(),F(),O(),Wt(),Kt=M(),qt=()=>{"use forget";let e=(0,Gt.c)(7),{screenshareTrackState:t,toggleScreenShare:n}=Le(),r;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=[Ke.Starting,Ke.Stopping],e[0]=r):r=e[0];let i=r.includes(t),a=t===Ke.Started,o;e[1]===n?o=e[2]:(o=()=>n(`ControlButton`),e[1]=n,e[2]=o);let s;return e[3]!==a||e[4]!==o||e[5]!==i?(s=(0,Kt.jsx)(Ut,{waiting:i,started:a,onClick:o}),e[3]=a,e[4]=o,e[5]=i,e[6]=s):s=e[6],s}}));function Yt(e){return e.server.connectionState}var Xt,$,Zt,Qt=e((()=>{Xt=N(),x(),ke(),h(),Re(),Ge(),De(),g(),I(),F(),le(),me(),m(),ue(),At(),Bt(),Jt(),$=M(),Zt=e=>{"use forget";let t=(0,Xt.c)(23),{buttonClassName:n,isComposerSubmitDisabled:i,isComposerSubmitPending:o,onComposerSubmit:s}=e,l=se(),u=je(),d;t[0]===u.conversation?d=t[1]:(d=u.conversation??T(a),t[0]=u.conversation,t[1]=d);let f=d,p=qe(),m;t[2]===u?m=t[3]:(m=()=>Ve(u),t[2]=u,t[3]=m);let h=!r(m),g=r(p.hasUploadInProgress$),_;t[4]===p?_=t[5]:(_=()=>p.files$().length>0,t[4]=p,t[5]=_);let v=r(_),y=h||g||v,b=L(Yt),x;t[6]!==b||t[7]!==l?(x=async()=>{oe({type:`STOP`,reason:await c({connectionState:b,isLimitExceeded:l})})},t[6]=b,t[7]=l,t[8]=x):x=t[8];let S=x;de(S);let C;t[9]===y?C=t[10]:(C=!y&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Ie,{capability:`screenshare`,children:(0,$.jsx)(qt,{})}),(0,$.jsx)(zt,{})]}),t[9]=y,t[10]=C);let w;t[11]!==n||t[12]!==u||t[13]!==y||t[14]!==f||t[15]!==S||t[16]!==i||t[17]!==o||t[18]!==s?(w=y?(0,$.jsx)(Je,{buttonClassName:n,onSubmit:s,composerController:u,conversation:f,isStreaming:!1,isDisabled:i,showSpinner:o}):(0,$.jsx)(kt,{onClick:S}),t[11]=n,t[12]=u,t[13]=y,t[14]=f,t[15]=S,t[16]=i,t[17]=o,t[18]=s,t[19]=w):w=t[19];let E;return t[20]!==C||t[21]!==w?(E=(0,$.jsxs)(`div`,{className:`flex flex-row gap-2`,children:[C,w]}),t[20]=C,t[21]=w,t[22]=E):E=t[22],E}}));function $t(e){return e.isVoiceModeActive}var en,tn,nn;e((()=>{en=N(),Qt(),F(),tn=M(),nn=e=>{"use forget";let t=(0,en.c)(6),{buttonClassName:n,isFocused:r,isComposerSubmitDisabled:i,isComposerSubmitPending:a,onComposerSubmit:o}=e;if(!L($t))return null;let s;return t[0]!==n||t[1]!==i||t[2]!==a||t[3]!==r||t[4]!==o?(s=(0,tn.jsx)(Zt,{buttonClassName:n,composerIsFocused:r,isComposerSubmitDisabled:i,isComposerSubmitPending:a,onComposerSubmit:o}),t[0]=n,t[1]=i,t[2]=a,t[3]=r,t[4]=o,t[5]=s):s=t[5],s}}))();export{nn as WrapperSpeechActiveContainer};
//# sourceMappingURL=da6c1aaf-gywu35w4du2pl934.js.map