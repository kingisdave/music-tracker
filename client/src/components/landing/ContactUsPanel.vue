<template>
  <v-card class="primary pt-5 mx-4"
    variant="plain"
    style="min-height:70vh;">
    <v-card-text class="text-center my-7">
      <h1 class="text-h4 text-md-h3 font-weight-bold">
        Contact Us
      </h1>
    </v-card-text> 
    <v-form 
      v-model="form"
      @submit.prevent="onSubmit">
      <v-row>
        <v-col cols="12" sm="6" >
          <v-text-field
            v-model="fullName"
            :readonly="loading"
            :rules="[required]"
            placeholder="Your Name"
            class="mb-4"
            hint="Enter your fullname"
            bg-color="white"
            clearable
            label="Fullname"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[rules.required, rules.email]"
            class="mb-4"
            bg-color="white"
            clearable
            hint="Enter your Email (Email is safe with us)"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="phoneNumber"
            :readonly="loading"
            placeholder="Optional"
            bg-color="white"
            class="mb-4"
            hint="Enter your password to access this website"
            clearable
            label="Phone Number"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-textarea
            counter
            label="Text"
            bg-color="white"
            rows="9"
            :readonly="loading"
            :rules="[rules.required, rules.length(1000)]"
            :model-value="message"
            clearable
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center mb-3">
        <v-col cols="12" sm="6" md="5">
          <v-btn 
            :disabled="!form"
            :loading="loading" 
            type="submit"
            color="success"
            block 
            class=" mt-2"
            variant="elevated"
            size="large"
          >
            Submit
          </v-btn>
        </v-col>

      </v-row>
    </v-form>
    
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      form: false,
      fullname: null,  
      email: null,
      phoneNumber: null,
      message: null,
      loading: false,
      rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        required: v => !!v || 'This field is required',
        length: len => v => (v || '').length <= len || `Invalid character length, required ${len}`,
      },  
    }
  },
  methods: {
    onSubmit () {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  }
}
</script>

<style scoped>

</style>
