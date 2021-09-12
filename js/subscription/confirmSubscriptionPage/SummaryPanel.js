const template=html`
<div class="summary-panel">
  <div class="summary-content">
    <p class="subscribe-text">Subscribe to CrowdRender at</p>
    <p class="price">\${{displayPrice}}</p>
    <p class="period">per {{period}}</p>

  </div>
</div>
`;export const SummaryPanel={template,props:{priceCents:Number,period:String},computed:{displayPrice(){return(this.priceCents/100).toFixed(2)}}};function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`.trim()).join("").trim()}