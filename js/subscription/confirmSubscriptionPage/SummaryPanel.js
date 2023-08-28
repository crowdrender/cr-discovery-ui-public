import{ExpandSymbol}from"./ExpandSymbol.js";const template=html`
<div class="summary-panel">
  <div class="summary-content">
    <p class="subscribe-text">Subscribe to CrowdRender at</p>
    <p class="price">\${{displayPrice}}</p>
    <p class="period">per {{period}}</p>
    <p v-if="isYearly" class="description">This yearly subscription includes the Creature Kitbash addon.</p>
    <button class="show-details text-button" @click="toggleDetails">Details <ExpandSymbol :expanded="showDetails" /></button>
    <p v-if="showDetails" class="description">{{description}}</p>
  </div>
</div>
`;export const SummaryPanel={template,components:{ExpandSymbol},props:{priceCents:Number,period:String,description:String},data:()=>({showDetails:!1}),methods:{toggleDetails(){this.showDetails=!this.showDetails}},computed:{displayPrice(){return(this.priceCents/100).toFixed(2)},isYearly(){return"year"===this.period}}};function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`.trim()).join("").trim()}