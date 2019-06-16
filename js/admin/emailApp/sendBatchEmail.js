const template=`
<div>
  <div v-if="loadingState === null">
    <button @click="submit">Send Batch Email</button>
  </div>
  <div v-if="loadingState === 'loading'">
    <p>Awaiting server response...</p>
  </div>
  <div v-if="loadingState === 'sent'">
    <p>Email successfully sent!</p>
  </div>
  <div v-if="loadingState === 'error'">
    <p>{{errorMessage}}</p>
  </div>
</div>
`,sendBatchEmail={template:"\n<div>\n  <div v-if=\"loadingState === null\">\n    <button @click=\"submit\">Send Batch Email</button>\n  </div>\n  <div v-if=\"loadingState === 'loading'\">\n    <p>Awaiting server response...</p>\n  </div>\n  <div v-if=\"loadingState === 'sent'\">\n    <p>Email successfully sent!</p>\n  </div>\n  <div v-if=\"loadingState === 'error'\">\n    <p>{{errorMessage}}</p>\n  </div>\n</div>\n",props:["filter","template","subject"],data:()=>({loadingState:null,errorMessage:null}),computed:{},methods:{async submit(){const{filter:a}=this,b={to:["{{email}}"],from:"\"CrowdRender\" <info@crowdrender.com.au>",subject:this.subject,html:this.template},c={method:"POST",body:JSON.stringify({filter:a,config:b}),headers:{Accept:"application/json","Content-Type":"application/json"}};try{this.loadingState="loading";const a=await fetch("/admin/email/send-batch",c).then(a=>a.json());if("OK"!==a.status)throw a;this.loadingState="sent"}catch(a){this.loadingState="error",this.errorMessage=JSON.stringify(a)}}}};export default sendBatchEmail;