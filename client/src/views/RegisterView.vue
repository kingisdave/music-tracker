<template>
  <v-container-fluid>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>
              Register
            </v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                name="email"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <br/>
              <v-text-field
                type="password"
                hint="Enter your password to access this website"
                label="Password"
                name="password"
                v-model="password"
                persistent-hint
              ></v-text-field>
              <br/>
              <div class="error" v-html="error">
              </div>
              <br/>
              <v-btn
                color="success"
                @click="register"
              >
                Register
              </v-btn>

            </v-form>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container-fluid>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
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
