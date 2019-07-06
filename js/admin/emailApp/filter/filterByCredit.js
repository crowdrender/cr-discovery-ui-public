const template=`
<div>
  <button @click="toggleFilterByCredit">Filter By Credit</button>
  <div v-if="this.model.filterByCredit" class="credit-filter">
    <label>Min Credit</label>
    <input type="number" v-model="model.minCredit" step="0.01" />
    <br />
    <label>Max Credit</label>
    <input type="number" v-model="model.maxCredit" step="0.01" />
  </div>
</div>
`,filterByCredit={template:"\n<div>\n  <button @click=\"toggleFilterByCredit\">Filter By Credit</button>\n  <div v-if=\"this.model.filterByCredit\" class=\"credit-filter\">\n    <label>Min Credit</label>\n    <input type=\"number\" v-model=\"model.minCredit\" step=\"0.01\" />\n    <br />\n    <label>Max Credit</label>\n    <input type=\"number\" v-model=\"model.maxCredit\" step=\"0.01\" />\n  </div>\n</div>\n",props:["model"],methods:{toggleFilterByCredit(){this.model.filterByCredit=!this.model.filterByCredit}}};export default filterByCredit;