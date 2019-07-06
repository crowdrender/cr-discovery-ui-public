import Preview from"./preview.js";import SendBatchEmail from"./sendBatchEmail.js";import FilterSection from"./filter/filterSection.js";import EditingSection from"./editingSection.js";const template=`
<div class="batch-email-panel">
  <FilterSection :model="filter" class="card" />
  <EditingSection class="card grid-1" :template="template" :subject="subject" @change="handleTemplateChange"/>
  <div class="grid-1 card template-output">
    <div>
      <h3>Email Preview</h3>
      <Preview :template="template"/>
      <SendBatchEmail :template="template" :filter="filter" :subject="subject" />
    </div>
  </div>
</div>
`,App={template:"\n<div class=\"batch-email-panel\">\n  <FilterSection :model=\"filter\" class=\"card\" />\n  <EditingSection class=\"card grid-1\" :template=\"template\" :subject=\"subject\" @change=\"handleTemplateChange\"/>\n  <div class=\"grid-1 card template-output\">\n    <div>\n      <h3>Email Preview</h3>\n      <Preview :template=\"template\"/>\n      <SendBatchEmail :template=\"template\" :filter=\"filter\" :subject=\"subject\" />\n    </div>\n  </div>\n</div>\n",components:{Preview,SendBatchEmail,FilterSection,EditingSection},data:()=>({template:"",subject:"",filter:{filterByCredit:!1,filterByLastActive:!1,filterByEmail:!1,minCredit:0,maxCredit:0,lastActiveStart:0,lastActiveEnd:0,emailList:[]}}),computed:{},methods:{handleTemplateChange({propName:a,value:b}){this[a]=b}}};export default App;