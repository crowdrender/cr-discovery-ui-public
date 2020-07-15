import htmlFromString from"./HtmlFromString.js";export default function showModal(a,b,c,d=!0){const e=`
  <div class="modal ${c||""} ${d?"auto-hide":""}">
    <div class="modal-content">
      <div class="header">
        <h2>${a}</h2>
        <span class="modal-close close"></span>
      </div>
      <div class="body">
        ${b}
      </div>
    </div>
  </div>
  `,f=htmlFromString(e);document.body.appendChild(f)}