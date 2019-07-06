import TextArea from"./TextArea.js";import TwoUp from"./TwoUp.js";import CenteredSection from"./CenteredSection.js";import Heading from"./Heading.js";import ImageComponent from"./Image.js";import Button from"./Button.js";import headSection from"./BasicTemplateHead.js";import footerSection from"./BasicTemplateFooter.js";const template=`
<div class="basic-template" >
  <div class="email-settings">
    <textarea style="width: 100%; height: 3em;" maxlength="140" class="body-preview" v-model="bodyPreview" placeholder="Body Preview (Max 140 characters)" />
    <input type="color" v-model="bodyBackgroundColour" />
  </div>
  <p>Contents</p>
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
`,basicTemplate={components:{TextArea,CenteredSection,TwoUp,Heading,ImageComponent,Button},template:"\n<div class=\"basic-template\" >\n  <div class=\"email-settings\">\n    <textarea style=\"width: 100%; height: 3em;\" maxlength=\"140\" class=\"body-preview\" v-model=\"bodyPreview\" placeholder=\"Body Preview (Max 140 characters)\" />\n    <input type=\"color\" v-model=\"bodyBackgroundColour\" />\n  </div>\n  <p>Contents</p>\n  <div class=\"child-types\">\n    <div v-for=\"(child, index) in children\" >\n      <select @change=\"(e) => handleChangeChildType(index)(e.target.value)\">\n        <option :value=\"null\" />\n        <option v-for=\"choice in childTypes\" :value=\"choice\">{{choice}}</option>\n      </select>\n      <div class=\"children\" style=\"padding-left: 16px;\">\n        <component @templateChange=\"(newValue) => handleTemplateChange(index)(newValue)\" :is=\"child.type\" />\n      </div>\n    </div>\n  </div>\n  <button @click=\"addNewChild\">Add New Child</button>\n</div>\n",data:()=>({bodyPreview:"",bodyBackgroundColour:"#ffffff",childTypes:["TextArea","CenteredSection","TwoUp","Heading","ImageComponent","Button"],children:[{type:null,value:""}]}),computed:{contentsTemplate(){return this.children.reduce((a,b,c)=>a+this.getTemplateValue(c),"")},templateValue(){return`<!doctype html>
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microso=-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        ${headSection}
        <body style="background-color:${this.bodyBackgroundColour};">
          <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
            ${this.bodyPreview}
          </div>
          <div style="-webkit-font-smoothing:antialiased;width:100%">
              <!-- add a pixel here -->
            <!--[if gte mso 9]><style> li { text-indent: -1em; }</style><![endif]-->
            <style>
              @media screen yahoo {
                .pb img,
                .qb img {
                  max-width: 90%!important;
                }
      
                .fc {
                  width: 301px !important;
                }
      
                .tb {
                  background-position: 50% 0 !important;
                }
      
                .dc {
                  vertical-align: top !important;
                }
      
                tbody tr td div {
                  overflow: visible !important;
                }
              }
            </style>
            ${this.contentsTemplate}
            ${footerSection}
          </div>
        </body>
      </html>`}},methods:{getTemplateValue(a){return this.children[a]?this.children[a].value:""},handleTemplateChange(a){return b=>{this.$set(this.children[a],"value",b),this.triggerTemplateChange()}},triggerTemplateChange(){this.$emit("templateChange",this.templateValue)},addNewChild(){this.children.push({type:null,value:""})},handleChangeChildType(a){return b=>{this.children[a].value="",this.children[a].type=b}}},mounted(){this.triggerTemplateChange()}};export default basicTemplate;