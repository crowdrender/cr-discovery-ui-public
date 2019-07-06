const template=`
<div>
  <button @click="toggleFilterByEmail">Filter By Email </button>
  <div v-if="model.filterByEmail" class="email-regex-filter">
    <label>Email List</label>
    <br />
    <textarea style="width: 100%;" type="text" v-model="emailString" @change="handleChange" />
  </div>
</div>
`,filterByEmail={template:"\n<div>\n  <button @click=\"toggleFilterByEmail\">Filter By Email </button>\n  <div v-if=\"model.filterByEmail\" class=\"email-regex-filter\">\n    <label>Email List</label>\n    <br />\n    <textarea style=\"width: 100%;\" type=\"text\" v-model=\"emailString\" @change=\"handleChange\" />\n  </div>\n</div>\n",props:["model"],data:()=>({emailString:""}),computed:{emailArray(){return this.emailString?this.emailString.split(",").map(a=>a.trim()):[]}},methods:{toggleFilterByEmail(){this.model.filterByEmail=!this.model.filterByEmail},handleChange(){this.model.emailList=this.emailArray}}};export default filterByEmail;