<template>
  <v-card
    class="mx-auto text-center"
    max-width="344"
    title="User Login"
  >
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

        <!-- <v-checkbox
          v-model="checkbox"
          color="secondary"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="I agree to site terms and conditions"
          required
        ></v-checkbox> -->

        <v-btn block
          :disabled="!valid"
          color="primary"
          class="my-3"
          @click="login"
        >
          Login
        </v-btn>
      </v-form>
      <!-- <v-divider></v-divider> -->
      <!-- <div class="error" v-html="error">
      </div> -->
    </v-container>
  </v-card>
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
    async login () {
      console.log(this.email, 'dksm')
      console.log(this.password, ' PSS')
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
</style>
