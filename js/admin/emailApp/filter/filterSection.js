import FilterByCredit from"./filterByCredit.js";import FilterByLastActive from"./filterByLastActive.js";import FilterByEmail from"./filterByEmail.js";import FilterEditor from"./filterEditor.js";const template=`
<div class="grid-2">
  <h3 class="span-2">Filters</h3>
  <div class="filter-input">
    <FilterByCredit :model="model" />
    <FilterByLastActive :model="model" />
    <FilterByEmail :model="model" />
  </div>
  <div class="filter-output">
    <FilterEditor :model="model" :filterResult="filterResult"/>
  </div>
</div>
`,filterSection={template:"\n<div class=\"grid-2\">\n  <h3 class=\"span-2\">Filters</h3>\n  <div class=\"filter-input\">\n    <FilterByCredit :model=\"model\" />\n    <FilterByLastActive :model=\"model\" />\n    <FilterByEmail :model=\"model\" />\n  </div>\n  <div class=\"filter-output\">\n    <FilterEditor :model=\"model\" :filterResult=\"filterResult\"/>\n  </div>\n</div>\n",components:{FilterByCredit,FilterByLastActive,FilterByEmail,FilterEditor},props:["model","filterResult"]};export default filterSection;