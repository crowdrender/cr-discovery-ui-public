import{AuthService}from"./AuthService.js";const authService=new AuthService(window.fetch.bind(window)),template=html`
<div class="login-panel">
  <form class="login-form styled-form login-content">
    <input type="text" class="username" v-model="username" placeholder="Email">
    <input type="password" class="password" v-model="password" placeholder="Password">
    <input class="action" type="submit" @click="onSubmitPressed" :value="modeActionText"/>
    <p>{{modeLongText}} <button class="text-button" type="button" @click="toggleModes">{{modeToggleText}}</button></p>
  </form>
</div>
`;export const LoginForm={template,props:{onTokenObtained:Function},data:()=>({username:"",password:"",mode:"login"}),computed:{modeActionText(){return"login"===this.mode?"Login":"Sign Up"},modeToggleText(){return"login"===this.mode?"Sign Up":"Login"},modeLongText(){return"login"===this.mode?`Don't have an account?`:`Already have an account?`}},methods:{async onSubmitPressed(a){a.preventDefault();try{const a="login"===this.mode?await authService.login(this.username,this.password):await authService.signup(this.username,this.password);this.onTokenObtained(a)}catch(a){console.log(a),alert(a.message)}},toggleModes(){this.mode="login"===this.mode?"signup":"login"}}};function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`.trim()).join("").trim()}