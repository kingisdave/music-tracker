<template>
  <v-container fluld>
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="require('../assets/svgs/access_account.svg')"
          class="h-75"
          contain
        ></v-img>
        <br/>
        <h2 class="text-capitalize"></h2>
      </v-col>
      <v-col
        cols="12" md="6">
        <v-sheet
          class="mt-4 bg-surface-variant"
          height="350"
        >
          <v-card
            class="mx-auto"
            md="6"
            cols="12"
            color="white"
            elevation="4"
          >
            <div class="d-flex justify-center">
              <h2>Login Here</h2>
              <!-- <v-avatar icon="mdi-vuetify" size="54"></v-avatar> -->
            </div>
            <v-alert
              type="error"
              v-model="showError"
              border="start"
              variant="tonal"
              closable
              close-label="Close Alert"
              color="red"
            >
              {{error}}
            </v-alert>
            <v-container>
              <v-form
                ref="loginform"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="email"
                  color="primary"
                  :rules="emailRules"
                  label="Email"
                  variant="underlined"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
                  :type="showPass ? 'text' : 'password'"
                  color="primary"
                  label="Password"
                  placeholder="Enter your password"
                  variant="underlined"
                  @click:append="showPass = !showPass"
                  required
                ></v-text-field>

                <v-btn block
                  :disabled="!valid"
                  color="#3700B3"
                  class="my-3 login-btn-color"
                  @click="login('account')"
                >
                  Signin
                </v-btn>
              </v-form>
              <div class="my-4 text-center">
                Sign in with your social account
              </div>
              <v-btn block
                color="#0066ff"
                class="my-3 login-btn-color"
                prepend-icon="mdi-facebook"
                @click="login('facebook')"
              >
                Connect with Facebook
              </v-btn>
              <v-btn block
                color="#ff0000"
                class="my-3 login-btn-color"
                prepend-icon="mdi-google"
                @click="login('email')"
              >
                Login with Gmail
              </v-btn>

            </v-container>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      name: this.$store.state.name,
      valid: true,
      showPass: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      showError: false,
      error: null
      // checkbox: false,
    }
  },
  methods: {
    async login (logtype) {
      console.log(logtype, 'dksm')
      // console.log(this.password, ' PSS')
      // this.$refs.loginform.validate()
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        this.error = err.response.data.error
        this.showError = true
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
  .login-btn-color{
    color: #ffffff;
  }
  .login-btn-color:hover{
    color: #000000;
    background-color: #ffffff;
  }
</style>
