import Vue from"../lib/vue.esm.browser.js";const template=html`
<div id="login-overlay">
    <div class="login-overlay-content">
      <h1>Just one thing</h1>
      <p v-if="showLoginForm">To access this, please login or <button @click="switchToSignup" class="text-button sign-up">sign up</button>.</p>
      <p v-if="showSignupForm">To access this, please <button @click="switchToLogin" class="text-button login">login</button> or sign up.</p>
      <form class="login-form md-grid-2 styled-form" v-bind:class="{ visible: showLoginForm }" v-bind:action="loginUrl" method="POST">
        <input type="text" name="username" placeholder="Username" v-model="username" />
        <input type="password" name="password" placeholder="Password" v-model="password" />
        <input type="submit" class="span-2 submit action" value="Login" />
        <div class="span-2">
          <p>No account? <a href="#" @click="switchToSignup">Sign up instead</a>.</p>
        </div>
      </form>
      <form class="signup-form md-grid-2 styled-form" v-bind:class="{ visible: showSignupForm }" v-bind:action="signupUrl" method="POST">
        <input type="text" name="username" placeholder="Username" v-model="username" />
        <input type="password" name="password" placeholder="Password" v-model="password" />
        <input type="submit" class="span-2 submit action" value="Sign up" />
        <div class="span-2">
          <div class="checkbox">
            <input type="checkbox" name="subscribe" v-model="subscribe" />
            <div class="checkmark"></div>
          </div>
          <label for="subscribe">Subscribe to our mailing list</label>
        </div>
        <div class="span-2">
          <p>Already have an account? <a href="#" @click="switchToLogin">Log in instead</a>.</p>
        </div>
      </form>
  </div>
</div>
`,App={template,components:{},data:()=>({page:"login",subscribe:!0,username:"",password:""}),computed:{loginUrl:()=>`/login?redirectUrl=${encodeURIComponent(window.location.pathname)}`,signupUrl:()=>`/sign-up?redirectUrl=${encodeURIComponent(window.location.pathname)}`,showLoginForm(){return"login"===this.page},showSignupForm(){return"signup"===this.page}},methods:{switchToSignup(){this.page="signup"},switchToLogin(){this.page="login"}}};export default App;function html(a,...b){return a.map((a,c)=>`${a}${b[c]||""}`.trim()).join("").trim()}new Vue({el:"#login-overlay",components:{App},template:"<App />"});