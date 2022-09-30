<template>
  <v-card
    class="mx-auto text-center rounded"
    max-width="344"
    elevation="12"
    title="Register"
  >
    <v-container>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        autocomplete="off"
      >
        <v-text-field
          v-model="firstName"
          color="primary"
          :rules="firstNameRules"
          label="First name"
          variant="underlined"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          color="primary"
          :rules="lastNameRules"
          label="Last name"
          variant="underlined"
          required
        ></v-text-field>

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
          @click="register"
        >
          Create Account
        </v-btn>
      </v-form>
      <v-divider></v-divider>
      <div class="error" v-html="error">
      </div>
    </v-container>
  </v-card>
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
      // checkbox: false,
      error: null
    }
  },
  methods: {
    async register () {
      console.log(this.$refs.form)
      this.$refs.form.validate()
      try {
        await AuthenticationService.register({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
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
