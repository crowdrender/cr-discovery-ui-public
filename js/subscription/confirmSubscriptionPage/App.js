import getQueryStringParameterByName from"../../modules/QueryString.js";import{LoginForm}from"./LoginForm.js";import{SummaryPanel}from"./SummaryPanel.js";import{PaymentPanel}from"./PaymentPanel.js";import{CompletePanel}from"./CompletePanel.js";import{getCookie}from"../../modules/Cookie.js";import{ConfirmPaymentController}from"../confirm.js";const template=html`
<div id="confirm-subscription-app">
  <div class="error" v-if="error">{{error}}</div>
  <div class="confirm-subscription-container" v-if="!loading && !error">
    <SummaryPanel :priceCents="priceCents" :period="period" :description="description" />
    <LoginForm v-if="!token" :onTokenObtained="onTokenObtained"/>
    <PaymentPanel
        v-if="token && !isComplete"
        :priceId="priceId"
        :onTokenObtained="onTokenObtained"
        :paymentMethod="paymentMethod"
        :onSubmit="onSubmit"
        :email="email"
        :stripeService="stripeService"
        :disabled="waitingForPayment"
    />
    <CompletePanel v-if="isComplete" />
  </div>
</div>
`,App={template,components:{SummaryPanel,PaymentPanel,CompletePanel,LoginForm},async created(){try{await this.loadData(),this.loading=!1}catch(a){this.error=a.message}},data:()=>({loading:!0,waitingForPayment:!1,error:null,priceId:"",priceCents:0,period:"month",token:null,paymentMethod:null,email:null,stripeService:null,isComplete:!1}),computed:{displayPrice(){return(this.priceCents/100).toFixed(2)}},methods:{async loadData(){var a,b;if(this.token=getCookie("CRAuth"),this.priceId=getQueryStringParameterByName("priceId"),!this.priceId)throw new Error("Missing priceId");this.email=null===(b=null===(a=window)||void 0===a?void 0:a.user)||void 0===b?void 0:b.email;const{publicKey:c}=await fetch("/subscription/config").then(a=>a.json());this.stripeService=Stripe(c);this.confirmPaymentController=new ConfirmPaymentController(this.stripeService,this.priceId,a=>this.handleStatusChange(a)),await Promise.all([this.retrieveExistingPaymentMethod(),this.retrievePriceInfo()])},async retrieveExistingPaymentMethod(){const a=await fetch("/subscription/payment-method").then(a=>a.json()).catch(()=>null);this.paymentMethod=null===a||void 0===a?void 0:a.paymentMethod},async retrievePriceInfo(){const a=await fetch(`/subscription/price/${this.priceId}`).then(a=>a.json());this.priceCents=a.value,this.period=a.period,this.description=a.description},onTokenObtained(a){this.token=a,this.retrieveExistingPaymentMethod()},onSubmit(){this.confirmPaymentController.confirmPayment()},handleStatusChange(a){return this.waitingForPayment=!1,"loading"===a?void(this.waitingForPayment=!0):"success"===a?this.showCompleteMessage():"failed"===a.status?this.showFailedMessage(a.message):void 0},showCompleteMessage(){this.isComplete=!0},showFailedMessage(a){alert(`Subscription failed: ${a}`)}}};export default App;function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`.trim()).join("").trim()}