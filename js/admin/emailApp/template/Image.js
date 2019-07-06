const template=`
<div class="image" >
  <input v-model="imageUrl" @change="triggerTemplateChange" placeholder="Image URL"/>
  <br />
  <input v-if="isLink" v-model="linkUrl" @change="triggerTemplateChange" placeholder="Image Link URL"/>
  <br v-if="isLink" />
  <button @click="toggleIsLink">{{buttonText}}</button>
</div>
`,image={template:"\n<div class=\"image\" >\n  <input v-model=\"imageUrl\" @change=\"triggerTemplateChange\" placeholder=\"Image URL\"/>\n  <br />\n  <input v-if=\"isLink\" v-model=\"linkUrl\" @change=\"triggerTemplateChange\" placeholder=\"Image Link URL\"/>\n  <br v-if=\"isLink\" />\n  <button @click=\"toggleIsLink\">{{buttonText}}</button>\n</div>\n",data:()=>({imageUrl:"",isLink:!1,linkUrl:""}),computed:{buttonText(){return this.isLink?"Remove link from image":"Make image a link"},templateValue(){return this.isLink?`
      <a href="${this.linkUrl}">
        <img style="width: 100%;" src="${this.imageUrl}" />
      </a>`:`<img style="width: 100%;" src="${this.imageUrl}" />`}},methods:{toggleIsLink(){this.isLink=!this.isLink,this.triggerTemplateChange()},triggerTemplateChange(){this.$emit("templateChange",this.templateValue)}},mounted(){this.triggerTemplateChange()}};export default image;