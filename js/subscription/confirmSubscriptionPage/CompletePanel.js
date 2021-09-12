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
`;export const CompletePanel={template,data:()=>({isSupporter:!1,intervalHandle:null}),created(){this.intervalHandle=setInterval(()=>{this.checkSupporterStatus()},2e3),this.checkSupporterStatus()},methods:{async checkSupporterStatus(){var a,b,c,d;const e=await graphQLQuery(`query {user {supporterStatus {subscribe { amount }}}}`),f=await e.json(),g=null===(d=null===(c=null===(b=null===(a=null===f||void 0===f?void 0:f.data)||void 0===a?void 0:a.user)||void 0===b?void 0:b.supporterStatus)||void 0===c?void 0:c.subscribe)||void 0===d?void 0:d.amount;0<g&&(this.isSupporter=!0,clearInterval(this.intervalHandle))},onContinuePressed(){this.isSupporter&&(window.location.href="/download")}}};function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`.trim()).join("").trim()}