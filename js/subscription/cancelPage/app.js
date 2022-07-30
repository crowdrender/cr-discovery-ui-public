const template=html`
<div class="summary">
  <div v-if="status === 'default'">
    <p>This will cancel your subscription at the {{subscription.tier}} tier at the end of the current billing period. You will still be able to make use of your supporter perks until the billing period finishes.</p>
    <button @click="onCancel" class="btn">Cancel Subscription</button>
  </div>
  <div v-if="status === 'success'">
      <p>Subscription successfully cancelled. Thank you for your support! You can still access your supporter perks until the end of the billing period.</p>
      <a href="/profile" class="btn">Continue to Profile Page</a>
  </div>
  <div v-if="status === 'error'">
      <p>Subscription cancellation failed. Please contact us to manually cancel your subscription.</p>
  </div>
  <div v-if="status === 'loading'">
      <p>Loading</p>
  </div>
</div>
`,App={template,components:{},data:()=>({status:"default",error:null,subscription:window.crBootstrap.subscription}),computed:{},methods:{async onCancel(){this.status="loading";try{const a=await this.cancelSubscription();if("OK"===a.status)this.status="success";else throw new Error(a.error)}catch(a){this.status="error",this.error=a.message}},async cancelSubscription(){return fetch("/subscription/cancel",{method:"post",headers:{"Content-Type":"application/json"}}).then(a=>a.json())}}};export default App;function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`.trim()).join("").trim()}