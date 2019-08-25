import Preview from"./preview.js";import SendBatchEmail from"./sendBatchEmail.js";import FilterSection from"./filter/filterSection.js";import EditingSection from"./editingSection.js";import FilterQueryGenerator from"./FilterQueryGenerator.js";const filterQueryGenerator=new FilterQueryGenerator(null),template=`
<div class="batch-email-panel">
  <FilterSection :model="filter" :filterResult="filterResult" class="card" />
  <EditingSection class="card grid-1" :template="template" :subject="subject" @change="handleTemplateChange"/>
  <div class="grid-1 card template-output">
    <div>
      <h3>Email Preview</h3>
      <Preview :template="template"/>
      <SendBatchEmail :template="template" :filterString="filterResult" :subject="subject" />
    </div>
  </div>
</div>
`,App={template,components:{Preview,SendBatchEmail,FilterSection,EditingSection},data:()=>({template:"",subject:"",filter:{customFilterString:null,filterByCredit:!1,filterByLastActive:!1,filterByEmail:!1,minCredit:null,maxCredit:null,lastActiveStart:null,lastActiveEnd:null,emailList:[]}}),computed:{filterResult(){return null===this.filter.customFilterString?this.generatedFilterResult:this.filter.customFilterString},generatedFilterResult(){return filterQueryGenerator.setFilter(this.filter),filterQueryGenerator.getQuery()}},methods:{handleTemplateChange({propName:a,value:b}){this[a]=b}}};export default App;