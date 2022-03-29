import{getConversionData}from"./api.js";export async function renderConversionCharts(){const c=new Date,d={start:new Date(c.getFullYear(),c.getMonth(),c.getDate()-60),end:new Date(c.getFullYear(),c.getMonth(),c.getDate()-30)},a={start:new Date(c.getFullYear(),c.getMonth(),c.getDate()-30),end:c},b=await getConversionData(d,a),e={a:{conversion:b.a.subscriptions/b.a.users,timeRange:d},b:{conversion:b.b.subscriptions/b.b.users,timeRange:a}};updateUI(e)}function updateUI(c){const{a:d,b:a}=c,b=document.getElementById("conversion-results");b.innerHTML=html`
    <div>
      <h3>${d.timeRange.start.toDateString()} to ${d.timeRange.end.toDateString()}</h3>
      <p class="conversion-result">${(100*d.conversion).toFixed(2)}%</p>
    </div>
    <div>
      <h3>${a.timeRange.start.toDateString()} to ${a.timeRange.end.toDateString()}</h3>
      <p class="conversion-result">${(100*a.conversion).toFixed(2)}%</p>
    </div>
  `}function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`).join("").trim()}