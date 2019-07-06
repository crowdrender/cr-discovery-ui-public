const template=`
<div>
  <button @click="toggleFilterByLastActive">Filter By Last Active</button>
  <div v-if="model.filterByLastActive" class="last-active-filter">
    <label>Last Active Start</label>
    <input type="date" v-model="model.lastActiveStart" />
    <br />
    <label>Last Active End</label>
    <input type="date" v-model="model.lastActiveEnd" />
  </div>
</div>
`,filterByLastActive={template:"\n<div>\n  <button @click=\"toggleFilterByLastActive\">Filter By Last Active</button>\n  <div v-if=\"model.filterByLastActive\" class=\"last-active-filter\">\n    <label>Last Active Start</label>\n    <input type=\"date\" v-model=\"model.lastActiveStart\" />\n    <br />\n    <label>Last Active End</label>\n    <input type=\"date\" v-model=\"model.lastActiveEnd\" />\n  </div>\n</div>\n",props:["model"],methods:{toggleFilterByLastActive(){this.model.filterByLastActive=!this.model.filterByLastActive}}};export default filterByLastActive;