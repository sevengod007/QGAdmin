import{T as f,K as p,aA as v,bx as m,by as x,bl as y,an as h,bf as g,a2 as b,_ as t,ak as c,Z as d,Y as k,a0 as i,a9 as C,ba as E,bb as w,X as _,bz as B,a7 as I,bc as N}from"./home-688395e4.js";import{E as S}from"./Editor-5e47dcc0.js";const V=o=>(E("data-v-a62d1de4"),o=o(),w(),o),K={class:"config-container h-full"},M={class:"editor-container"},T={class:"flex-1 flex items-center"},z=V(()=>t("span",{style:{"padding-left":"8px"}},"config.yml",-1)),A={class:"flex-1 flex items-center flex-row-reverse"},D={class:"editor"},L=f({__name:"index",setup(o){const s=p("");v(()=>{document.onkeydown=e=>{(e.ctrlKey||e.metaKey)&&e.key==="s"&&(l(),e.preventDefault())}}),m().then(({data:e,success:a})=>{a&&(s.value=e)});async function l(){const e=s.value;if(e){const{success:a,error:n}=await x(e);y({type:a?"success":"error",message:a?"配置保存成功！":n})}}return(e,a)=>{const n=h,r=g;return _(),b("div",K,[t("div",M,[t("nav",null,[t("div",T,[c(n,null,{default:d(()=>[c(i(B))]),_:1}),z]),t("div",A,[c(r,{type:"primary",plain:"",onClick:l},{default:d(()=>[I(" 保存配置 ")]),_:1})])]),t("div",D,[s.value?(_(),k(i(S),{key:0,theme:"vs-dark",defaultLanguage:"yaml",value:s.value,"onUpdate:value":a[0]||(a[0]=u=>s.value=u)},null,8,["value"])):C("",!0)])])])}}});const Y=N(L,[["__scopeId","data-v-a62d1de4"]]);export{Y as default};