const template=`
<div>
  <button :disabled="loadingState === 'loading'" @click="submit">Send Batch Email</button>
  <div v-if="loadingState === 'loading'">
    <p>Awaiting server response...</p>
  </div>
  <div v-if="loadingState === 'sent'">
    <p>{{sentCount}} emails queued</p>
  </div>
  <div v-if="loadingState === 'error'">
    <p>Error: {{errorMessage}}</p>
  </div>
  <div v-if="sendMarketingUnsubHeaders">
    <p>Will attach one click unsubscribe headers to the emails.</p>
  </div>
</div>
`,sendBatchEmail={template:"\n<div>\n  <button :disabled=\"loadingState === 'loading'\" @click=\"submit\">Send Batch Email</button>\n  <div v-if=\"loadingState === 'loading'\">\n    <p>Awaiting server response...</p>\n  </div>\n  <div v-if=\"loadingState === 'sent'\">\n    <p>{{sentCount}} emails queued</p>\n  </div>\n  <div v-if=\"loadingState === 'error'\">\n    <p>Error: {{errorMessage}}</p>\n  </div>\n  <div v-if=\"sendMarketingUnsubHeaders\">\n    <p>Will attach one click unsubscribe headers to the emails.</p>\n  </div>\n</div>\n",props:["filterString","template","subject","sendMarketingUnsubHeaders"],data:()=>({loadingState:null,errorMessage:null,sentCount:null}),methods:{async submit(){const a=this.filterString,b={to:["{{email}}"],from:"\"CrowdRender\" <info@crowdrender.com.au>",subject:this.subject,html:this.template};this.sendMarketingUnsubHeaders&&(b.headers={"List-Unsubscribe-Post":"List-Unsubscribe=One-Click","List-Unsubscribe":"<https://discovery.crowd-render.com/mailing-list/unsubscribe-one-click/{{unsubscribeToken}}>"});const c={method:"POST",body:`{
          "filter": ${a},
          "config": ${JSON.stringify(b)}
        }`,headers:{Accept:"application/json","Content-Type":"application/json"}};try{this.loadingState="loading";const a=await fetch("/admin/email/send-batch",c).then(a=>a.json());if("OK"!==a.status)throw a;this.loadingState="sent",this.sentCount=a.count+""}catch(a){this.loadingState="error",this.errorMessage=JSON.stringify(a)}}}};export default sendBatchEmail;