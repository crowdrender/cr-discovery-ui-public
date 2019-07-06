import BasicTemplate from"./template/BasicTemplate.js";const template=`
<div class="template-input">
  <div>
    <h3>Subject</h3>
    <input :value="subject" @change="(changeEvent) => handleChange('subject')(changeEvent.target.value)" />
  </div>
  <div>
    <h3>Email Body</h3>
    <BasicTemplate @templateChange="(newValue) => handleChange('template')(newValue)"/>
  </div>
</div>
`,editingSection={components:{BasicTemplate},template:"\n<div class=\"template-input\">\n  <div>\n    <h3>Subject</h3>\n    <input :value=\"subject\" @change=\"(changeEvent) => handleChange('subject')(changeEvent.target.value)\" />\n  </div>\n  <div>\n    <h3>Email Body</h3>\n    <BasicTemplate @templateChange=\"(newValue) => handleChange('template')(newValue)\"/>\n  </div>\n</div>\n",props:["template","subject"],methods:{handleChange(a){return b=>{this.$emit("change",{propName:a,value:b})}}}};export default editingSection;