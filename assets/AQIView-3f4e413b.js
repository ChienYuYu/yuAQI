import{_ as y,r as i,w as m,o as p,c as h,a as t,b as w,v as $,F as k,d as A,t as l,e as N,p as S,f as C,g as b,u as s,n as q,h as O,i as V,j as D,k as g}from"./index-a8e806b8.js";import{a as M,L as Q}from"./LoadingComponent-e685c7db.js";const I=o=>(S("data-v-8f9b577e"),o=o(),C(),o),L={class:"top-card"},B={class:"wrap"},P=I(()=>t("h2",{class:"title"},"空氣品質指標 (AQI)",-1)),z=I(()=>t("option",{value:"",disabled:"",selected:""},"請選擇縣市",-1)),E=["value"],F=N('<table data-v-8f9b577e><tr data-v-8f9b577e><th class="green" data-v-8f9b577e>0 ~ 50</th><th class="yellow" data-v-8f9b577e>51 ~ 100</th><th class="orange" data-v-8f9b577e>101 ~ 150</th><th class="red" data-v-8f9b577e>151 ~ 200</th><th class="purple" data-v-8f9b577e>200 ~ 300</th><th class="dark-red" data-v-8f9b577e>300 ~ 400</th></tr><tr data-v-8f9b577e><td class="green" data-v-8f9b577e>良好</td><td class="yellow" data-v-8f9b577e>普通</td><td class="orange" data-v-8f9b577e>對敏感族群不健康</td><td class="red" data-v-8f9b577e>對所有族群不健康</td><td class="purple" data-v-8f9b577e>非常不健康</td><td class="dark-red" data-v-8f9b577e>危害</td></tr></table>',1),j={__name:"AqiSelectCard",emits:["my-select"],setup(o,{emit:c}){const _=i(["基隆市","臺北市","新北市","桃園市","新竹市","新竹縣","苗栗縣","臺中市","彰化縣","南投縣","雲林縣","嘉義市","嘉義縣","臺南市","高雄市","屏東縣","臺東縣","花蓮縣","宜蘭縣","澎湖縣","金門縣","連江縣"]),n=i("");return m(n,()=>{c("my-select",n.value)}),(u,a)=>(p(),h("div",L,[t("div",B,[P,w(t("select",{"onUpdate:modelValue":a[0]||(a[0]=d=>n.value=d)},[z,(p(!0),h(k,null,A(_.value,d=>(p(),h("option",{value:d,key:d},l(d),9,E))),128))],512),[[$,n.value]])]),F]))}},J=y(j,[["__scopeId","data-v-8f9b577e"]]);const r=o=>(S("data-v-a8f0c03a"),o=o(),C(),o),U={class:"card-wrap"},X={colspan:"2"},G=r(()=>t("th",null,"AQI",-1)),H=r(()=>t("th",null,"CO",-1)),K=r(()=>t("th",null,"NO",-1)),R=r(()=>t("th",null,"NO2",-1)),T=r(()=>t("th",null,"NOX",-1)),W=r(()=>t("th",null,"O3",-1)),Y=r(()=>t("th",null,"PM2.5",-1)),Z=r(()=>t("th",null,"PM10",-1)),tt=r(()=>t("th",null,"SO2",-1)),et=r(()=>t("th",null,"更新時間",-1)),at={class:"update-time"},st={class:"small-card-wrap"},lt=["onClick"],ot={class:"district"},nt={__name:"AqiShowCard",props:["parentArr"],setup(o){const c=o,_=b(()=>c.parentArr),n=i({}),u=i(!1),a=b(()=>u.value===!1&&c.parentArr.length?c.parentArr[0]:u.value?n.value:{});function d(e){u.value=!0,n.value=e}const f=b(()=>e=>e.aqi>51&&e.aqi<101?"background-color:rgb(247, 210, 46);":e.aqi>100&&e.aqi<151?"background-color:orange;":e.aqi>150&&e.aqi<201?"background-color:rgb(224, 83, 83);":e.aqi>200&&e.aqi<301?"background-color:rgb(211, 52, 211);":e.aqi>300&&e.aqi<401?"background-color:dark-red;":"background-color:rgb(67, 184, 67);");return m(_,()=>{u.value=!1}),(e,x)=>(p(),h("div",U,[t("table",null,[t("tr",null,[t("th",X,l(s(a).sitename),1)]),t("tr",null,[t("th",{colspan:"2",style:q([{background:"#fff",color:"#000"},s(f)(s(a))])},l(s(a).status),5)]),t("tr",null,[G,t("td",null,l(s(a).aqi),1)]),t("tr",null,[H,t("td",null,l(s(a).co),1)]),t("tr",null,[K,t("td",null,l(s(a).no),1)]),t("tr",null,[R,t("td",null,l(s(a).no2),1)]),t("tr",null,[T,t("td",null,l(s(a).nox),1)]),t("tr",null,[W,t("td",null,l(s(a).o3),1)]),t("tr",null,[Y,t("td",null,l(s(a)["pm2.5"]),1)]),t("tr",null,[Z,t("td",null,l(s(a).pm10),1)]),t("tr",null,[tt,t("td",null,l(s(a).so2),1)]),t("tr",null,[et,t("td",at,l(s(a).publishtime),1)])]),t("div",st,[(p(!0),h(k,null,A(c.parentArr,v=>(p(),h("ul",{class:O(["small-card",{"is-click":v===n.value}]),key:v.longitude,onClick:ut=>d(v)},[t("li",ot,l(v.sitename),1),t("li",{style:q(s(f)(v))},l(v.aqi),5)],10,lt))),128))])]))}},rt=y(nt,[["__scopeId","data-v-a8f0c03a"]]);const ct={class:"wrapper"},dt={__name:"AQIView",setup(o){const c=i([]),_=i([]),n=i(""),u=i(!0);function a(e){n.value=e,d()}function d(){_.value=c.value.filter(e=>e.county===n.value)}async function f(){const e=await M.get("https://data.epa.gov.tw/api/v2/aqx_p_432?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate desc&format=JSON");c.value=e.data.records,_.value=e.data.records,u.value=!1}return V(()=>{f()}),(e,x)=>(p(),h(k,null,[w(g(Q,null,null,512),[[D,u.value]]),t("div",ct,[g(J,{class:"top-card",onMySelect:a}),g(rt,{parentArr:_.value},null,8,["parentArr"])])],64))}},pt=y(dt,[["__scopeId","data-v-506ba7d3"]]);export{pt as default};
