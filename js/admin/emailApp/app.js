import Preview from"./preview.js";import FilterResult from"./filterResult.js";import SendBatchEmail from"./sendBatchEmail.js";const filterByCredit=`
<div>
  <button @click="toggleFilterByCredit">Filter By Credit</button>
  <div v-if="filter.filterByCredit" class="credit-filter">
    <label>Min Credit</label>
    <input type="number" v-model="filter.minCredit" step="0.01" />
    <br />
    <label>Max Credit</label>
    <input type="number" v-model="filter.maxCredit" step="0.01" />
  </div>
</div>
`,filterByLastActive=`
<div>
  <button @click="toggleFilterByLastActive">Filter By Last Active</button>
  <div v-if="filter.filterByLastActive" class="last-active-filter">
    <label>Last Active Start</label>
    <input type="date" v-model="filter.lastActiveStart" />
    <br />
    <label>Last Active End</label>
    <input type="date" v-model="filter.lastActiveEnd" />
  </div>
</div>
`,template=`
<div class="batch-email-panel">
  <div class="grid-2 card">
    <div class="filter-input">
      <h3>Customise Filters</h3>
      ${"\n<div>\n  <button @click=\"toggleFilterByCredit\">Filter By Credit</button>\n  <div v-if=\"filter.filterByCredit\" class=\"credit-filter\">\n    <label>Min Credit</label>\n    <input type=\"number\" v-model=\"filter.minCredit\" step=\"0.01\" />\n    <br />\n    <label>Max Credit</label>\n    <input type=\"number\" v-model=\"filter.maxCredit\" step=\"0.01\" />\n  </div>\n</div>\n"}
      ${filterByLastActive}
    </div>
    <div class="filter-output">
      <h3>Filter Result</h3>
      <FilterResult :filter="filter"/>
    </div>
  </div>
  <div class="grid-2 card template-input">
    <div>
      <h3>Subject</h3>
      <input v-model="subject" />
    </div>
    <div>
      <h3>Email Body</h3>
      <textarea style="width: 100%; height: 15em;" v-model="template" />
    </div>
  </div>
  <div class="grid-1 card template-output">
    <div>
      <h3>Email Preview</h3>
      <Preview :template="template"/>
      <SendBatchEmail :template="template" :filter="filter" :subject="subject" />
    </div>
  </div>
</div>
`,App={template,components:{Preview,FilterResult,SendBatchEmail},data:()=>({template:"",subject:"",filter:{filterByCredit:!1,filterByLastActive:!1,minCredit:0,maxCredit:0,lastActiveStart:0,lastActiveEnd:0}}),computed:{},methods:{toggleFilterByCredit(){this.filter.filterByCredit=!this.filter.filterByCredit},toggleFilterByLastActive(){this.filter.filterByLastActive=!this.filter.filterByLastActive}}};export default App;