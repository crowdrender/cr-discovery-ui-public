import renderChart from"./RenderChart.js";import{limitDataPoints,longDateToolTipRenderer,shortDateFormatter,addOrIncrement,dateWeekFormatter}from"./reportUtils.js";import{renderLineChart,renderPieChart,renderColumnChart}from"./chartTypes.js";import{getAnalyticsData,getUserCountData}from"./api.js";import loadPage from"../modules/LoadPage.js";async function populateUserSignup(a){const b={};a.forEach(a=>{const c=a._id,d=new Date(`${c.year}-${c.month}-${c.day}`),e=d.getDay();d.setTime(d.getTime()-24*(60*(60*(1e3*e)))),d.setHours(0,0,0,0),0!==d.getDay()&&d.setTime(d.getTime()+86400000);const f=d.getTime()+"";b[f]||(b[f]=0),b[f]+=a.count});const c=Object.entries(b).map(([a,b])=>({x:+a,y:b}));c.sort((c,a)=>c.x>a.x?1:-1);const d=generateYearlyDatasets(c);d.reverse();const e=Math.max(...c.map(a=>a.y));renderChart("userSignup",{type:"scatter",data:{datasets:d},options:{tooltips:{callbacks:{label:a=>dateWeekFormatter(+a.label)}},scales:{xAxes:[{ticks:{callback:dateWeekFormatter,min:0,max:31536000000}}],yAxes:[{ticks:{min:0,max:10*Math.ceil(1.1*e/10),callback:a=>a+""}}]}}})}function generateYearlyDatasets(a){const b={};a.forEach(a=>{const c=new Date(a.x).getFullYear();b[c]||(b[c]=[]),b[c].push(a)});const c=Object.entries(b).map(([a,b],c)=>{const d={label:a,pointRadius:2,backgroundColor:generateColour(c),pointBackgroundColor:generateColour(c),borderColor:generateColour(c),data:b.map(a=>({x:new Date(a.x).setFullYear(1970),y:a.y})),showLine:!0,fill:!1};return d});return c}function generateColour(a){const b=Math.floor(Math.abs(16777215*Math.sin(a))).toString(16).padStart(6,"0");return`#${b}`}function splitByYears(a){const b={};return a.forEach(a=>{const c=new Date(a.x).getFullYear();b[c]||(b[c]=[]),b[c].push(a)}),b}async function populateUserSignupHistory(a){const b=[],c=a.sort((c,a)=>c.signupTime>a.signupTime?1:-1);let d=0,e=c[0].signupTime,f=c[0].signupTime;for(let g=0;g<c.length;g+=1){const a=c[g];e=Math.min(e,a.signupTime),f=Math.max(f,a.signupTime),b.push({y:d,x:a.signupTime}),d+=1}const g=splitByYears(b),h=Object.entries(g).map(([a,b])=>limitDataPoints(b,500));renderLineChart("userSignupHistory",h,{xMin:e,xMax:f,xTickRenderer:shortDateFormatter,tooltipRenderer:longDateToolTipRenderer})}function renderPlatformsChart(a){const b=a.map(a=>a.data.platform),c=b.reduce((a,b)=>(addOrIncrement(a,b),a),{}),d=Object.entries(c).map(([a,b])=>({y:b,indexLabel:a}));renderPieChart("platforms",d)}function renderLanguagesChart(a){const b=a.map(a=>a.data.language),c=b.reduce((a,b)=>(addOrIncrement(a,b),a),{}),d=Object.entries(c).map(([a,b])=>({y:b,indexLabel:a}));renderPieChart("languages",d)}function renderReferrersChart(a){const b=a.map(a=>a.data.referrer.replace(/(http:\/\/|https:\/\/)/g,"").replace(/\/(.*)$/,"")),c=b.reduce((a,b="noReferrer")=>(addOrIncrement(a,b),a),{}),d=Object.entries(c).map(([a,b])=>({y:b,indexLabel:a}));renderPieChart("referrers",d)}function renderTimeToLoadChart(a){const b=a.reduce((a,b)=>{if(b.data.url){const c=new URL(b.data.url).pathname;a[c]?a[c].push(b):a[c]=[b]}else a.noUrl?a.noUrl.push(b):a.noUrl=[b];return a},{}),c=Object.keys(b),d=Object.values(b),e=[];for(let b=0;b<c.length;b+=1){const a=c[b],f=d[b].reduce((a,b)=>a+b.data.timeToLoad,0);e.push({url:a,time:f/d[b].length})}const f=e.sort((c,a)=>c.time>a.time?1:-1),g=f.map(a=>({y:a.time,indexLabel:a.url}));renderColumnChart("timePerPage",g)}function renderWeeklyUsageChart(a){const b=a.reduce((a,b)=>{if(b.data.time){const c=new Date(b.data.time).getDay();addOrIncrement(a,c)}return a},{}),c=Object.keys(b),d=Object.values(b),e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],f=[];for(let b=0;b<c.length;b+=1)f.push({y:d[b],indexLabel:e[c[b]]});f.push(f.shift()),renderColumnChart("weeklyUsage",f)}function renderAlltimeUsageChart(a){const b=a.reduce((a,b)=>{const c=new Date(b.data.time).setHours(0,0,0,0),d=Object.assign({},a);return d[c]||(d[c]=[]),d[c].push(b),d},[]);Object.entries(b).forEach(([a,c])=>{b[a]=c.reduce((a,b)=>{const c=Object.assign({},a);return b.userId&&!c.userIds.find(a=>a===b.userId)&&(c.uniqueUsers+=1,c.userIds.push(b.userId)),c},{uniqueUsers:0,userIds:[]}).uniqueUsers});let c=Object.entries(b).map(([a,b])=>({y:b,x:+a}));c=c.sort((c,a)=>c.x>a.x?1:-1),renderLineChart("alltimeUsage",[c],{xTickRenderer:shortDateFormatter,tooltipRenderer:longDateToolTipRenderer})}function renderScreenSizeCanvas(a,b){const d=document.querySelector(a),e=d.getContext("2d"),c=d.width;let f=0,g=0;b.forEach(a=>{f=Math.max(f,a.x,a.y),g+=a.count});const h=b.map(a=>({x:a.x/f,y:a.y/f,count:a.count}));h.forEach(a=>{e.fillStyle=`rgba(225,64,64,${a.count/g})`,e.fillRect(0,0,a.x*c,a.y*c)})}function renderScreenSizeChart(a){const b=a.reduce((a,b)=>{if(b.data.time){const c=`${b.data.windowDimensions.width}x${b.data.windowDimensions.height}`;addOrIncrement(a,c)}return a},{}),c=Object.keys(b),d=Object.values(b),e=[];for(let b=0;b<c.length;b+=1)e.push({y:c[b].substr(c[b].indexOf("x")+1),x:c[b].substr(0,c[b].indexOf("x")),count:d[b]});renderScreenSizeCanvas("#screenSize",e)}async function sessionPathAnalysis(a){const b=a.reduce((a,b)=>{const c=Object.assign({},a);return b.sessionId&&(!c[b.sessionId]&&(c[b.sessionId]=[]),c[b.sessionId].push(b)),c},[]),c=Object.values(b).reduce((a,b)=>{const c=[...a];for(let d=0;d<b.length;d+=1){const a=b[d];c[d]||(c[d]=[]),c[d].push(a)}return c},[]),d=c[0].length,e=c[0].length-c[1].length,f=c.map(a=>a.reduce((a,b)=>{const c=Object.assign({},a),d=new URL(b.data.url).pathname;return c[d]?c[d]+=1:c[d]=1,c},{})),g=c.map(a=>a.length);console.log(`Session Count: ${d}`),console.log(`Bounce Count: ${e}`),console.log(`Page Urls: ${JSON.stringify(f,null,2)}`),console.log(`Session Length Distribution: ${g}`)}async function renderAnalyticsCharts(){const a=await getAnalyticsData(),b=a.filter(a=>"browser-info"===a.type);renderReferrersChart(b),renderPlatformsChart(b),renderLanguagesChart(b),renderTimeToLoadChart(b),renderWeeklyUsageChart(b),renderAlltimeUsageChart(b),renderScreenSizeChart(b),sessionPathAnalysis(b)}async function renderUserCharts(){const a=await getUserCountData();populateUserSignup(a)}async function init(){renderUserCharts(),renderAnalyticsCharts()}loadPage().then(init);