export class AuthService{constructor(a){this.fetch=a}async signup(a,b,c){const d={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:a,password:b,subscribe:c,acceptedTerms:!0})},e=await this.fetch("/sign-up",d),f=await e.json();if(!0!==f.success)throw new Error(f.error);return f.token}async login(a,b){const c={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:a,password:b})},d=await this.fetch("/login",c),e=await d.json();if(!0!==e.success)throw new Error(e.error);return e.token}}