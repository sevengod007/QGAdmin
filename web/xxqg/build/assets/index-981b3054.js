import{T as E,C as A,bD as q,Y as F,Z as w,a0 as U,a3 as H,X as r,_ as e,a8 as f,a2 as p,aU as B,ak as d,a6 as D,ba as N,bb as M,bc as P,bd as G,K as j,bE as K,bF as Q,bg as R,bh as X,I as Z,bi as J,bj as O,bk as W,bG as z,a7 as S,bq as ee,br as se,bH as te,bp as oe,bn as ae}from"./home-c54d2e61.js";import{E as ne,b as ce,d as L}from"./el-progress-fb22447f.js";const Y=c=>(N("data-v-3136009b"),c=c(),M(),c),le={class:"total flex"},ie={class:"flex flex-1 justify-center flex-col items-center"},de=Y(()=>e("span",null,"总分",-1)),re={class:"flex flex-1 justify-center flex-col items-center"},ue=Y(()=>e("span",null,"今日",-1)),_e={style:{width:"8em"}},pe=E({__name:"index",props:{score:{default:""},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(c,{emit:l}){const m=c,V=["#6a994e","#2a9d8f","#e9c46a","#f4a261","#e76f51","#118ab2","#85586F"],h=A({get(){return m.modelValue},set(v){l("update:modelValue",v)}});function x(v){const u=v.split(/[\n]/).map(_=>{const y=_.split("：");return{name:y[0],score:y[1]}}),[g,k,...i]=u,b=i.map(_=>{_.name==="专项答题"&&(_.score=_.score.split("/")[0]+"/5");const y=_.score.split("/");return{..._,percentage:100/Number(y[1])*Number(y[0])}});return{score:g.score,daily:k.score,dailyList:b}}return(v,u)=>{const g=ne,k=q;return r(),F(k,{class:"score-popup flex flex-col justify-around",show:U(h),"onUpdate:show":u[0]||(u[0]=i=>H(h)?h.value=i:null),position:"bottom",style:{height:"60%"}},{default:w(()=>[e("div",le,[e("div",ie,[de,e("h1",null,f(x(c.score).score),1)]),e("div",re,[ue,e("h1",null,f(x(c.score).daily),1)])]),(r(!0),p(D,null,B(x(c.score).dailyList,(i,b)=>(r(),p("div",{class:"detail flex",key:b},[e("div",_e,f(`${i.name} (${i.score})`),1),d(g,{class:"flex-auto","text-inside":!0,"stroke-width":18,color:V[b],percentage:i.percentage!==null?Math.ceil(i.percentage):100},null,8,["color","percentage"])]))),128))]),_:1},8,["show"])}}});const fe=P(pe,[["__scopeId","data-v-3136009b"]]),I=c=>(N("data-v-5d15d285"),c=c(),M(),c),me={class:"mobile-user-list-container"},ve={class:"nav flex justify-between items-center"},ye={class:"box"},he={class:"box-item"},xe=I(()=>e("div",null,"UID",-1)),be={class:"box-item"},we=I(()=>e("div",null,"添加时间",-1)),ge={class:"box-item"},ke=I(()=>e("div",null,"挂机时长",-1)),Se={class:"footer flex justify-between"},Ce={key:0},$e={key:1,style:{"font-size":"12px",color:"#ee0a24"}},Ue={class:"flex justify-between flex-col items-center"},De={class:"flex justify-end",style:{width:"100%"}},Ie={class:"qrcode flex flex-col justify-between items-center flex-auto"},Ve={class:"flex-auto flex items-center"},je={class:"wait"},Le=I(()=>e("span",{class:"dotting"},null,-1)),Te={key:1},ze={class:"link",style:{width:"100%"}},Ee=E({__name:"index",setup(c){const l=G({search:"",tableData:[],currUserScore:"",showScore:!1}),m=j(!1),V=j(!0),h=j(null);let x=null,v="";const u=async()=>{const{data:o,success:t}=await R(),a=o.map(n=>(n.status=!0,n));t&&(l.tableData=a),await g()},g=async()=>{const{data:o,success:t}=await X();if(!t||t&&!o)return;const a=o.map(n=>(n.status=!1,n.login_time=n.loginTime,n));l.tableData=l.tableData.concat(a)};u();async function k(o,t){const{success:a}=t?await ee(o):await se(o);a&&await u()}function i(o,t){te({title:"提示",message:`是否删除${t}?`}).then(async()=>{const{success:a}=await oe(o);!a||(z({type:"success",message:"Delete completed"}),u())}).catch()}const b=async o=>{const{data:t,success:a}=await ae(o);l.currUserScore=a?t:"",l.showScore=!0},_=async()=>{m.value=!0,await Z();const o=h.value,{url:t,code:a,sign:n}=await J();v=t,ce.toCanvas(o,t||"Test",{margin:0,scale:4});const C=setInterval(async()=>{const{data:s,success:$}=await O(a);$&&(clearInterval(C),(await W(s.split("=")[1],n)).success&&(z({type:"success",message:"用户添加成功！"}),await u(),m.value=!1))},5e3);x=C},y=()=>{clearInterval(x)};function T(){const o=document.createElement("a");o.href="dtxuexi://appclient/page/study_feeds?url="+escape(v),o.click()}return(o,t)=>{const a=K,n=Q,C=q;return r(),p(D,null,[e("div",me,[(r(!0),p(D,null,B(l.tableData,s=>(r(),p("div",{class:"user-card",key:s.uid},[e("div",ve,[e("div",null,f(s.nick),1),e("div",null,[d(a,{name:s.status?"smile-o":"warning-o",color:s.status?"green":"red",size:"20"},null,8,["name","color"])])]),e("div",ye,[e("div",he,[xe,e("span",null,f(s.uid),1)]),e("div",be,[we,e("span",null,f(U(L).unix(s.login_time).format("YYYY年MM月DD日 HH:mm:ss")),1)]),e("div",ge,[ke,e("span",null,f(U(L)().diff(U(L).unix(s.login_time),"day")+"天"),1)])]),e("div",Se,[s.status?(r(),p("div",Ce,[d(n,{type:s.is_study?"warning":"success",size:"mini",onClick:$=>k(s.uid,s.is_study)},{default:w(()=>[S(f(s.is_study?"停止学习":"开始学习"),1)]),_:2},1032,["type","onClick"]),d(n,{type:"primary",size:"mini",onClick:$=>b(s.token)},{default:w(()=>[S(" 分数查询 ")]),_:2},1032,["onClick"])])):(r(),p("div",$e," 登录状态已过期 ")),d(n,{type:"danger",size:"mini",onClick:$=>i(s.uid,s.nick)},{default:w(()=>[S(" 删除 ")]),_:2},1032,["onClick"])])]))),128))]),d(fe,{score:l.currUserScore,modelValue:l.showScore,"onUpdate:modelValue":t[0]||(t[0]=s=>l.showScore=s)},null,8,["score","modelValue"]),e("div",{class:"add-user",onClick:_},[d(a,{name:"plus",size:"25"})]),d(C,{class:"qrcode",show:m.value,"onUpdate:show":t[2]||(t[2]=s=>m.value=s),onClose:y},{default:w(()=>[e("div",Ue,[e("nav",De,[d(a,{name:"cross",size:"20",onClick:t[1]||(t[1]=s=>m.value=!1)})]),e("div",Ie,[e("div",Ve,[e("canvas",{ref_key:"qrcode",ref:h},null,512)]),e("div",je,[V.value?(r(),p(D,{key:0},[S(" 等待扫码中"),Le],64)):(r(),p("span",Te," 扫码完成 "))])]),e("div",ze,[d(n,{block:"",type:"primary",onClick:T},{default:w(()=>[S(" 调用APP跳转登录 ")]),_:1})])])]),_:1},8,["show"])],64)}}});const Me=P(Ee,[["__scopeId","data-v-5d15d285"]]);export{Me as default};
