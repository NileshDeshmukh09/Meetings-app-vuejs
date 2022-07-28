<template>
  <div>
    <div>
      <div class="container login bg-info">
        <h1 class="text-center text-white mt-3">Login</h1>
        <hr />
        <form @submit.prevent="handleLogin">
          <div class="form-group m-3" >
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control inputField"
              id="email"
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group m-3">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control inputField"
              id="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-primary m-3">Submit</button>
        </form>
        <hr />
        <p class="float-end">Do not have Account ? <a href="/"> Signup </a></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Config from "@/config";

const TOKEN_KEY = "token";
const EMAIL_KEY = "email";
const NAME_KEY = "name";

const { baseUrl } = Config;

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      const data = {
        email: this.email,
        password: this.password,
      }
      console.log(data);

      try {
        const response = await axios.post(`${baseUrl}/api/auth/login`, data);
        console.log(response.data);
        const { token, email, name } = response.data;
        console.log(token, email, name);

        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(EMAIL_KEY, email);
        localStorage.setItem(NAME_KEY, name);

        alert("Login Successfully !");
        setTimeout(() => {
          this.$router.push("/calender");
        }, 1000);
        return true;
      }
      catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 800px;
  height: 450px;
  margin-top: 50px;
}
label {
  font-size: 25px;
}
.inputField {
  height: 45px;
}
</style>