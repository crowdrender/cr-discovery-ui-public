import{setCookie,getCookie}from"./modules/Cookie.js";import loadPage from"./modules/LoadPage.js";import"./modal/userFeedbackModal.js";async function showModal(){const a=await fetch("/api/v02/graph",{credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:`{
                    "query": "query {user {referrals {hasVerifiedEmail, redeemed}}}",
                    "variables": null
                }`});if(!getCookie("homepageReferralShown")){const b=document.querySelector(".referral-modal");if(b.classList.remove("hidden"),200===a.status){const b=await a.json(),{data:{user:{referrals:c}}}=b;c.length?setCookie("homepageReferralShown",Date.now(),60):setCookie("homepageReferralShown",Date.now())}else setCookie("homepageReferralShown",Date.now())}}function init(){showModal()}loadPage().then(init);