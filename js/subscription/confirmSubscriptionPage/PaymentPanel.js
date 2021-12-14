import{getEnv}from"../../env.js";import Sleep from"../../modules/Sleep.js";import{CreatePaymentMethodController}from"../create-payment-method.js";import{AddPaymentMethodForm}from"./AddPaymentMethodForm.js";import{LoginForm}from"./LoginForm.js";const template=html`
<div class="payment-panel">
  <div class="payment-content">
    <div v-if="paymentMethod" class="payment-method-selector">
      <div class="existing-payment-method">
        <input type="radio" id="existing-payment-method" name="Use Existing Payment Method" value="existing" v-model="paymentMethodSelection">
        <label for="existing-payment-method">
          Use Existing Payment Method:
          <span class="existing-payment-method-descriptor">
            Card ending with {{paymentMethod.card.last4}}
          </span>
        </label>
      </div>
      <div class="new-payment-method">
        <input type="radio" id="new-payment-method" name="Add New Payment Method" value="new" v-model="paymentMethodSelection">
        <label for="new-payment-method">Add new payment method</label>
      </div>
    </div>
    <AddPaymentMethodForm
        :onFocussed="onFocussed"
        :error="error"
        :success="success"
        :failedReason="failedReason"
    />
    <button @click="submitForm" class="btn" :disabled="disabled || this.loading">{{buttonText}}</button>
    <div class="disclaimer">
      By subscribing, you allow CrowdRender to charge your card for this payment and future payments until you cancel your subscription.
    </div>
    <div class="agree-to-terms">
      By subscribing, you agree to CrowdRender's <a href="/terms" target="_blank">Terms and Conditions</a>.
    </div>
    <img class="stripe-logo" :src="stripeLogoUrl" />
  </div>
</div>
`;export const PaymentPanel={template,components:{LoginForm,AddPaymentMethodForm},data:()=>({loading:!1,paymentMethodSelection:"existing",error:null,success:!1,failedReason:null}),props:{disabled:Boolean,priceId:String,paymentMethod:Object,onSubmit:Function,email:String,stripeService:Object},async created(){this.createPaymentMethodController=new CreatePaymentMethodController(this.stripeService,this.email,"#card",a=>this.handleStatusChange(a)),await Sleep(1),this.createPaymentMethodController.setup()},computed:{buttonText(){return this.loading||this.disabled?"Loading...":"Subscribe"},stripeLogoUrl(){return`${getEnv("FRONTEND_ASSET_URL")}/images/Powered by Stripe - blurple.png`}},methods:{onFocussed(){this.paymentMethodSelection="new"},handleStatusChange(a){this.error=null,this.loading=!1;"success"===a||("loading"===a?this.loading=!0:"failed"===a.status?this.failedReason=a.message:"error"===a.status&&(a.message.length?this.error=a.message:this.onFocussed()))},async submitForm(){if("new"===this.paymentMethodSelection||!this.paymentMethod)try{await this.createPaymentMethodController.createPaymentMethod(),this.onSubmit()}catch(a){}else this.onSubmit()}}};function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`.trim()).join("").trim()}