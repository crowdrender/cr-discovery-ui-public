export async function getAnalyticsData(){const a=await fetch("/api/v0/admin/analytics",{credentials:"same-origin",method:"POST"}),b=await a.json();return b}export async function getUserCountData(){const a=await fetch("/api/v0/admin/user-count",{credentials:"same-origin",cache:"force-cache"}),b=await a.json();return b}export async function makeLogsQuery(a){const b=await fetch("/api/v0/admin/logs",{credentials:"same-origin",method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)});let c=await b.json();return c=c.map(a=>a.obj),c}