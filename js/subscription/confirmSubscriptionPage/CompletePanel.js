import{graphQLQuery}from"../../api.js";const template=html`
<div class="complete-panel">
  <div class="complete-content">
    <h2>Payment complete!</h2>
    <p>{{!isSupporter ? 'Finalising subscription...' : 'Subscription finalised!'}}</p>
    <button class="loader" @class="{ complete: isSupporter }" @click="onContinuePressed">
      <span v-if="!isSupporter" class="dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </span>
      <span v-else>Continue to download</span>
    </button>
  </div>
</div>
`;export const CompletePanel={template,data:()=>({isSupporter:!1,intervalHandle:null}),created(){this.intervalHandle=setInterval(()=>{this.checkSubscription()},2e3),this.checkSubscription()},methods:{async checkSubscription(){var a,b,c;const d=await graphQLQuery(`query { user { subscription { tier }}}`),e=await d.json(),f=null===(c=null===(b=null===(a=null===e||void 0===e?void 0:e.data)||void 0===a?void 0:a.user)||void 0===b?void 0:b.subscription)||void 0===c?void 0:c.tier;f&&(this.isSupporter=!0,clearInterval(this.intervalHandle))},onContinuePressed(){this.isSupporter&&(window.location.href="/download")}}};function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`.trim()).join("").trim()}