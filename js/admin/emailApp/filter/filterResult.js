const template=`
<div>
  <div v-if="!filterIsValid">
    <h3>Current Filter is invalid</h3>
  </div>
  <ul>
    <li v-for="text in filterAsText">{{text}}</li>
  </ul>
  <button v-if="isStale" @click="getUserCount">Update Count</button>
  <p v-if="!isStale">Estimated recipients: {{userCount}}</p>
</div>
`,filterResult={template:"\n<div>\n  <div v-if=\"!filterIsValid\">\n    <h3>Current Filter is invalid</h3>\n  </div>\n  <ul>\n    <li v-for=\"text in filterAsText\">{{text}}</li>\n  </ul>\n  <button v-if=\"isStale\" @click=\"getUserCount\">Update Count</button>\n  <p v-if=\"!isStale\">Estimated recipients: {{userCount}}</p>\n</div>\n",props:["model"],data:()=>({userCount:null,lastCheckedFilter:null}),computed:{isStale(){return!(null!==this.lastCheckedFilter)||!this.deepEqual(this.currentFilterValues,this.lastCheckedFilter)},currentFilterValues(){return this.generateFilterValues(this.model)},filterIsValid(){let a=!0;return this.model.filterByCredit&&this.model.minCredit>this.model.maxCredit&&(a=!1),this.model.filterByLastActive&&new Date(this.model.lastActiveStart)>new Date(this.model.lastActiveEnd)&&(a=!1),a},filterAsText(){const a=[];return this.model.filterByCredit&&(a.push(`Min Credit: ${this.model.minCredit}`),a.push(`Max Credit: ${this.model.maxCredit}`)),this.model.filterByLastActive&&(a.push(`Last Active Start: ${this.model.lastActiveStart}`),a.push(`Last Active End: ${this.model.lastActiveEnd}`)),this.model.filterByEmail&&a.push(`Email is one of: ${this.model.emailList.join(", ")}`),0===a.length&&a.push("No filters enabled."),a}},methods:{async getUserCount(){const a={method:"POST",body:JSON.stringify({filter:this.model}),headers:{Accept:"application/json","Content-Type":"application/json"}},b=await fetch("/admin/email/count",a).then(a=>a.json());this.lastCheckedFilter=this.generateFilterValues(this.model),this.userCount=b.count},generateFilterValues(a){return[a.filterByCredit,a.filterByLastActive,a.filterByEmail,a.minCredit,a.maxCredit,a.lastActiveStart,a.lastActiveEnd,a.emailList]},deepEqual(a,b){return a.every((a,c)=>a===b[c])}}};export default filterResult;