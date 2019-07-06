import TextArea from"./TextArea.js";import Heading from"./Heading.js";import ImageComponent from"./Image.js";import Button from"./Button.js";const template=`
<div class="centered-section" >
  <div class="child-types">
    <div v-for="(child, index) in children" >
      <select @change="(e) => handleChangeChildType(index)(e.target.value)">
        <option :value="null" />
        <option v-for="choice in childTypes" :value="choice">{{choice}}</option>
      </select>
      <div class="children" style="padding-left: 16px;">
        <component @templateChange="(newValue) => handleTemplateChange(index)(newValue)" :is="child.type" />
      </div>
    </div>
  </div>
  <button @click="addNewChild">Add New Child</button>
</div>
`,centeredSection={components:{TextArea,Heading,ImageComponent,Button},template:"\n<div class=\"centered-section\" >\n  <div class=\"child-types\">\n    <div v-for=\"(child, index) in children\" >\n      <select @change=\"(e) => handleChangeChildType(index)(e.target.value)\">\n        <option :value=\"null\" />\n        <option v-for=\"choice in childTypes\" :value=\"choice\">{{choice}}</option>\n      </select>\n      <div class=\"children\" style=\"padding-left: 16px;\">\n        <component @templateChange=\"(newValue) => handleTemplateChange(index)(newValue)\" :is=\"child.type\" />\n      </div>\n    </div>\n  </div>\n  <button @click=\"addNewChild\">Add New Child</button>\n</div>\n",data:()=>({childTypes:["TextArea","Heading","ImageComponent","Button"],children:[{type:null,value:""}]}),computed:{contentsTemplate(){return this.children.reduce((a,b)=>a+b.value,"")},templateValue(){return`
      <table width="100%">
      <tbody>
        <tr>
          <td align="center">
            ${this.contentsTemplate}
          </td>
        </tr>
      </tbody>
    </table>
      `}},methods:{getTemplateValue(a){return this.children[a]?this.children[a].value:""},triggerTemplateChange(){this.$emit("templateChange",this.templateValue)},handleChangeChildType(a){return b=>{this.children[a].value="",this.children[a].type=b}},handleTemplateChange(a){return b=>{this.$set(this.children[a],"value",b),this.triggerTemplateChange()}},addNewChild(){this.children.push({type:null,value:""})}},mounted(){this.triggerTemplateChange()}};export default centeredSection;