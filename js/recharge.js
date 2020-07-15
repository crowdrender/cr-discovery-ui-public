import loadPage from"./modules/LoadPage.js";import showModal from"./modules/showModal.js";import createSnackbarItem from"./modules/Snackbar.js";async function recharge(a){var b;if(10>a||0!=a%10)return void createSnackbarItem("You have entered an invalid amount. Please recharge a multiple of $10");try{gtag("event","Discovery: Add Credit",{user:null===(b=window.user)||void 0===b?void 0:b.email,amount:a})}catch(a){}showModal(`Recharge $${a.toFixed(2)} USD`,`
    <p>Please choose your payment method</p>
    <div class="grid-1">
      <div>
        <a class="btn" href="/recharge?amount=${100*a}">Secure Card Payment</a>
      </div>
      <div>
        <a class="btn" href="/recharge?amount=${100*a}&gateway=paypal">Paypal</a>
      </div>
    </div>
  `)}async function setupRecharge(){const a=Array.from(document.querySelectorAll(".recharge-button"));a.forEach(a=>{const b=a.querySelector(".recharge-text");b.addEventListener("click",()=>{a.classList.add("show-choices")});const c=a.querySelector(".recharge-choices"),d=c.querySelector(".ten"),e=c.querySelector(".twenty"),f=c.querySelector(".fifty"),g=c.querySelector(".more");d.addEventListener("click",()=>{recharge(10)}),e.addEventListener("click",()=>{recharge(20)}),f.addEventListener("click",()=>{recharge(50)}),g.addEventListener("click",()=>{a.classList.remove("show-choices"),a.classList.add("show-amount")});const h=a.querySelector(".recharge-amount"),i=h.querySelector(".amount"),j=h.querySelector(".submit");j.addEventListener("click",a=>(a.preventDefault(),recharge(+i.value),!1))})}function init(){setupRecharge()}loadPage().then(init);