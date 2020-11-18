const template=`
<div class="button" >
  <label>Button text:</lablel>
  <input v-model="buttonText" @change="triggerTemplateChange"/>
  <label>Button URL:</lablel>
  <input v-model="buttonUrl" @change="triggerTemplateChange"/>
</div>
`,button={template:"\n<div class=\"button\" >\n  <label>Button text:</lablel>\n  <input v-model=\"buttonText\" @change=\"triggerTemplateChange\"/>\n  <label>Button URL:</lablel>\n  <input v-model=\"buttonUrl\" @change=\"triggerTemplateChange\"/>\n</div>\n",data:()=>({buttonText:"",buttonUrl:""}),computed:{templateValue(){return`
        <a
            href="${this.buttonUrl}"
            style="display: inline-block; text-decoration: none; background-color: var(--col-primary); border: 1px solid white; font-size: 18px; padding: 8px 16px; color: white;"
        >
          ${this.buttonText}
        </a>
      `}},methods:{triggerTemplateChange(){this.$emit("templateChange",this.templateValue)}},mounted(){this.triggerTemplateChange()}};export default button;