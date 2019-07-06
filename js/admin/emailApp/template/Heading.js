const template=`
<div class="heading" >
  <input v-model="contents" @change="triggerTemplateChange"/>
</div>
`,heading={template:"\n<div class=\"heading\" >\n  <input v-model=\"contents\" @change=\"triggerTemplateChange\"/>\n</div>\n",data:()=>({contents:""}),computed:{templateValue(){return`
        <p style="font-size: 42px;">
          ${this.contents}
        </p>
      `}},methods:{triggerTemplateChange(){this.$emit("templateChange",this.templateValue)}},mounted(){this.triggerTemplateChange()}};export default heading;