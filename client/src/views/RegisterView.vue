<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :src="require('../assets/svgs/access_account.svg')"
          class="h-75"
          contain
        ></v-img>
        <br/>
        <h2 class="text-capitalize">You are welcome to the manager app</h2>
      </v-col>
      <v-col cols="12" md="6">

        <v-card
          class="mx-auto mt-2 text-center rounded"
          max-width="344"
          elevation="12"
          color="white"
          title="Register"
        >
          <error-panel v-model="showError">
            <div class="text-justify text-caption">
              {{ logError }}
            </div>
          </error-panel>
          <v-container>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              autocomplete="off"
            >
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="firstName"
                    color="primary"
                    :rules="firstNameRules"
                    label="First name"
                    variant="underlined"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="lastName"
                    color="primary"
                    :rules="lastNameRules"
                    label="Last name"
                    variant="underlined"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
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

              <!-- <v-checkbox
                v-model="checkbox"
                color="secondary"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="I agree to site terms and conditions"
                required
              ></v-checkbox> -->

              <v-btn block
                :disabled="!valid"
                color="#3700B3"
                class="my-3 text-white login-btn-color"
                @click="register"
              >
                Create Account
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      valid: true,
      showPass: false,
      firstName: '',
      firstNameRules: [
        v => !!v || 'Firstname is required',
        v => (v && v.length <= 10) || 'First name must be less than 10 characters'
      ],
      lastName: '',
      lastNameRules: [
        v => !!v || 'Lastname is required',
        v => (v && v.length <= 10) || 'Last name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must not be less than 8 characters'
      ],
      showError: false,
      logError: null
    }
  },
  methods: {
    async register () {
      this.$refs.form.validate()
      try {
        await AuthenticationService.register({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        })
        this.$router.push({
          name: 'login'
        })
      } catch (err) {
        this.showError = true
        this.logError = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: white;
  }
</style>
