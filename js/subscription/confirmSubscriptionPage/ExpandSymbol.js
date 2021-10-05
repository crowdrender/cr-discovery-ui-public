const template=html`
<span class="expand-symbol" v-bind:class="{ expanded }">
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M 0 3 L 8 15 L 16 3"/>
  </svg>
</span>
`;export const ExpandSymbol={template,props:{expanded:Boolean}};function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`.trim()).join("").trim()}