import FilterByCredit from"./filterByCredit.js";import FilterByLastActive from"./filterByLastActive.js";import FilterByEmail from"./filterByEmail.js";import FilterResult from"./filterResult.js";const template=`
<div class="grid-2">
  <div class="filter-input">
    <h3>Customise Filters</h3>
    <FilterByCredit :model="model" />
    <FilterByLastActive :model="model" />
    <FilterByEmail :model="model" />
  </div>
  <div class="filter-output">
    <h3>Filter Result</h3>
    <FilterResult :model="model"/>
  </div>
</div>
`,filterSection={template:"\n<div class=\"grid-2\">\n  <div class=\"filter-input\">\n    <h3>Customise Filters</h3>\n    <FilterByCredit :model=\"model\" />\n    <FilterByLastActive :model=\"model\" />\n    <FilterByEmail :model=\"model\" />\n  </div>\n  <div class=\"filter-output\">\n    <h3>Filter Result</h3>\n    <FilterResult :model=\"model\"/>\n  </div>\n</div>\n",components:{FilterByCredit,FilterByLastActive,FilterByEmail,FilterResult},props:["model"]};export default filterSection;