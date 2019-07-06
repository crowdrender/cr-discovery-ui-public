const template=`
<div class="text-area" >
  <textarea v-model="contents" @change="triggerTemplateChange"/>
</div>
`,textArea={template:"\n<div class=\"text-area\" >\n  <textarea v-model=\"contents\" @change=\"triggerTemplateChange\"/>\n</div>\n",data:()=>({contents:""}),computed:{templateValue(){return`<p>${this.contents}</p>`}},methods:{triggerTemplateChange(){this.$emit("templateChange",this.templateValue)}},mounted(){this.triggerTemplateChange()}};export default textArea;