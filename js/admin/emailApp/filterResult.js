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
`,filterResult={template:"\n<div>\n  <div v-if=\"!filterIsValid\">\n    <h3>Current Filter is invalid</h3>\n  </div>\n  <ul>\n    <li v-for=\"text in filterAsText\">{{text}}</li>\n  </ul>\n  <button v-if=\"isStale\" @click=\"getUserCount\">Update Count</button>\n  <p v-if=\"!isStale\">Estimated recipients: {{userCount}}</p>\n</div>\n",props:["filter"],data:()=>({userCount:null,lastCheckedFilter:null}),computed:{isStale(){return!(null!==this.lastCheckedFilter)||!this.deepEqual(this.currentFilterValues,this.lastCheckedFilter)},currentFilterValues(){return this.generateFilterValues(this.filter)},filterIsValid(){let a=!0;return this.filter.filterByCredit&&this.filter.minCredit>this.filter.maxCredit&&(a=!1),this.filter.filterByLastActive&&new Date(this.filter.lastActiveStart)>new Date(this.filter.lastActiveEnd)&&(a=!1),a},filterAsText(){const a=[];return this.filter.filterByCredit&&(a.push(`Min Credit: ${this.filter.minCredit}`),a.push(`Max Credit: ${this.filter.maxCredit}`)),this.filter.filterByLastActive&&(a.push(`Last Active Start: ${this.filter.lastActiveStart}`),a.push(`Last Active End: ${this.filter.lastActiveEnd}`)),0===a.length&&a.push("No filters enabled."),a}},methods:{async getUserCount(){const a={method:"POST",body:JSON.stringify({filter:this.filter}),headers:{Accept:"application/json","Content-Type":"application/json"}},b=await fetch("/admin/email/count",a).then(a=>a.json());this.lastCheckedFilter=this.generateFilterValues(this.filter),this.userCount=b.count},generateFilterValues(a){return[a.minCredit,a.maxCredit,a.lastActiveStart,a.lastActiveEnd]},deepEqual(a,b){return a.every((a,c)=>a===b[c])}}};export default filterResult;