const template=html`
<div class="card-info">
  <div id="card" @click="onFocussed"></div>
  <p class="error" v-if="error">{{error}}</p>
  <p class="failedReason" v-if="failedReason">{{failedReason}}</p>
</div>
`;export const AddPaymentMethodForm={template,props:{onFocussed:Function,error:String,success:Boolean,failedReason:String}};function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`.trim()).join("").trim()}