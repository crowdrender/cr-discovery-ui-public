const template=`
<div>
  <button @click="refresh">Refresh Preview</button>
  <div style="border: 1px solid rgba(0, 0, 0, 0.2); background-color: white; padding: var(--s3);" class="preview-container" v-html="previewString">
  </div>
</div>
`,preview={template:"\n<div>\n  <button @click=\"refresh\">Refresh Preview</button>\n  <div style=\"border: 1px solid rgba(0, 0, 0, 0.2); background-color: white; padding: var(--s3);\" class=\"preview-container\" v-html=\"previewString\">\n  </div>\n</div>\n",props:["template"],data:()=>({renderedPreview:"",lastRenderedTemplate:""}),computed:{isStale(){return this.lastRenderedTemplate!==this.template},previewString(){return this.isStale?this.template:this.renderedPreview||this.template}},methods:{async refresh(){const a={method:"POST",body:JSON.stringify({template:this.template}),headers:{Accept:"application/json","Content-Type":"application/json"}},b=await fetch("/admin/email/preview",a).then(a=>a.json());this.renderedPreview=b.result,this.lastRenderedTemplate=this.template}}};export default preview;