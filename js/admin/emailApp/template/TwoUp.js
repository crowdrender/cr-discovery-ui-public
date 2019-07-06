import TextArea from"./TextArea.js";import CenteredSection from"./CenteredSection.js";import Heading from"./Heading.js";import ImageComponent from"./Image.js";import Button from"./Button.js";const template=`
<div class="two-up">
  <div class="child-types grid-2">
    <div class="left-child-types">
      <p>Left</p>
      <div v-for="(child, index) in leftChildren">
        <select  @change="(e) => handleChangeChildType('left', index)(e.target.value)">
          <option :value="null" />
          <option v-for="choice in childTypes" :value="choice">{{choice}}</option>
        </select>
        <p>{{child.type}}</p>
        <component @templateChange="(newValue) => handleTemplateChange('left', index)(newValue)" :is="child.type" />
      </div>
      <button @click="addNewChild('left')">Add New Child</button>
    </div>
    <div class="right-child-types">
      <p>Right</p>
      <div v-for="(child, index) in rightChildren">
        <select  @change="(e) => handleChangeChildType('right', index)(e.target.value)">
          <option :value="null" />
          <option v-for="choice in childTypes" :value="choice">{{choice}}</option>
        </select>
        <p>{{child.type}}</p>
        <component @templateChange="(newValue) => handleTemplateChange('right', index)(newValue)" :is="child.type" />
      </div>
      <button @click="addNewChild('right')">Add New Child</button>
    </div>
  </div>

</div>
`,twoUp={components:{TextArea,CenteredSection,Heading,ImageComponent,Button},template:"\n<div class=\"two-up\">\n  <div class=\"child-types grid-2\">\n    <div class=\"left-child-types\">\n      <p>Left</p>\n      <div v-for=\"(child, index) in leftChildren\">\n        <select  @change=\"(e) => handleChangeChildType('left', index)(e.target.value)\">\n          <option :value=\"null\" />\n          <option v-for=\"choice in childTypes\" :value=\"choice\">{{choice}}</option>\n        </select>\n        <p>{{child.type}}</p>\n        <component @templateChange=\"(newValue) => handleTemplateChange('left', index)(newValue)\" :is=\"child.type\" />\n      </div>\n      <button @click=\"addNewChild('left')\">Add New Child</button>\n    </div>\n    <div class=\"right-child-types\">\n      <p>Right</p>\n      <div v-for=\"(child, index) in rightChildren\">\n        <select  @change=\"(e) => handleChangeChildType('right', index)(e.target.value)\">\n          <option :value=\"null\" />\n          <option v-for=\"choice in childTypes\" :value=\"choice\">{{choice}}</option>\n        </select>\n        <p>{{child.type}}</p>\n        <component @templateChange=\"(newValue) => handleTemplateChange('right', index)(newValue)\" :is=\"child.type\" />\n      </div>\n      <button @click=\"addNewChild('right')\">Add New Child</button>\n    </div>\n  </div>\n\n</div>\n",data:()=>({childTypes:["TextArea","CenteredSection","Heading","ImageComponent","Button"],leftChildren:[{type:null,value:""}],rightChildren:[{type:null,value:""}]}),computed:{leftContents(){return this.leftChildren.reduce((a,b)=>a+b.value,"")},rightContents(){return this.rightChildren.reduce((a,b)=>a+b.value,"")},templateValue(){return`
      <table width="100%" class="two-up">
        <tbody>
          <tr>
            <td valign="top" width="49%">
              ${this.leftContents}
            </td>
            <td valign="top" width="2%">
            </td>
            <td valign="top" width="49%">
              ${this.rightContents}
            </td>
          </tr>
        </tbody>
      </table>
      `}},methods:{triggerTemplateChange(){this.$emit("templateChange",this.templateValue)},handleTemplateChange(a,b){return c=>{this.$set(this[`${a}Children`][b],"value",c),this.triggerTemplateChange()}},handleChangeChildType(a,b){const c=`${a}Children`;return a=>{this[c][b].value="",this[c][b].type=a}},addNewChild(a){this[`${a}Children`].push({type:null,value:""})}},mounted(){this.triggerTemplateChange()}};export default twoUp;