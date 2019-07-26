import isSet from"../../../modules/IsSet.js";import FilterQueryGenerator from"../FilterQueryGenerator.js";const filterQueryGenerator=new FilterQueryGenerator({}),template=`
<div class="filter-editor">
  <div v-if="!filterIsValid">
    <h3>Current Filter is invalid</h3>
  </div>
  <div class="editing-window">
    <button @click="toggleCustomFilter">{{toggleCustomFilterMessage}}</button>
    <textarea
        class="filter-output"
        :class="{invalid: isCustomFilterValid}"
        :disabled="!enableCustomFilter"
        :value="displayedFilterString"
        @input="updateCustomFilter"
    />
  </div>
  <button v-if="isStale" @click="getUserCount">Update Count</button>
  <p v-if="!isStale">Estimated recipients: {{userCount}}</p>
</div>
`,filterEditor={template,props:["model"],data:()=>({userCount:null,lastCheckedFilter:null,enableCustomFilter:!1}),computed:{toggleCustomFilterMessage(){return this.enableCustomFilter?"Disable custom filter":"Enable custom filter"},isCustomFilter(){return null!==this.model.customFilterString},filterResult(){return this.isCustomFilter?this.customFilterObject:this.generatedFilterObject},generatedFilterObject(){return filterQueryGenerator.setFilter(this.model),filterQueryGenerator.getQuery()},customFilterObject(){return this.isCustomFilterValid?JSON.parse(this.model.customFilterString):{}},isCustomFilterValid(){if(!this.isCustomFilter)return!0;try{return"object"==typeof JSON.parse(this.model.customFilterString)}catch(a){return!1}},computedFilterString(){return JSON.stringify(this.filterResult,null,2)},displayedFilterString(){return this.isCustomFilter?this.model.customFilterString:this.computedFilterString},isStale(){return!(null!==this.lastCheckedFilter)||!this.deepEqual(this.currentFilterValues,this.lastCheckedFilter)},currentFilterValues(){return this.generateFilterValues(this.model)},filterIsValid(){let a=!0;return this.model.filterByCredit&&isSet(this.model.minCredit)&&isSet(this.model.maxCredit)&&this.model.minCredit>this.model.maxCredit&&(a=!1),this.model.filterByLastActive&&new Date(this.model.lastActiveStart)>new Date(this.model.lastActiveEnd)&&(a=!1),a}},methods:{updateCustomFilter(a){this.model.customFilterString=a.target.value},toggleCustomFilter(){return this.enableCustomFilter?void(this.enableCustomFilter=!1,this.model.customFilterString=null):(this.enableCustomFilter=!0,void(this.model.customFilterString=this.computedFilterString))},async getUserCount(){const a={method:"POST",body:JSON.stringify({filter:this.filterResult}),headers:{Accept:"application/json","Content-Type":"application/json"}},b=await fetch("/admin/email/count",a).then(a=>a.json());this.lastCheckedFilter=this.generateFilterValues(),this.userCount=b.count},generateFilterValues(){return this.isCustomFilter?[this.model.customFilterString]:[this.model.filterByCredit,this.model.filterByLastActive,this.model.filterByEmail,this.model.minCredit,this.model.maxCredit,this.model.lastActiveStart,this.model.lastActiveEnd,this.model.emailList]},deepEqual(a,b){return a.every((a,c)=>a===b[c])}}};export default filterEditor;