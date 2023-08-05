<template>
  <v-card class="primary pt-5"
    align="center"
    style="min-height:70vh;">
    <div class="d-block text-center pt-4 pb-3">
      <h1 class="text-sm-h4 font-weight-bold">
        Contact Us
      </h1>
    </div> 
    <form @submit.prevent="submit">
      <v-row>
        <v-col cols="12" sm="6" >
          <v-text-field
            v-model="fullName"
            :readonly="loading"
            :rules="[required]"
            placeholder="Your Name"
            class="mb-2"
            hint="Enter your fullname"
            clearable
            label="Fullname"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            hint="Enter your Email (Email is safe with us)"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="phoneNumber"
            :readonly="loading"
            placeholder="Optional"
            class="mb-2"
            hint="Enter your password to access this website"
            clearable
            label="Phone Number"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-textarea
            counter
            label="Text"
            :rules="rules"
            :model-value="value"
          ></v-textarea>
        </v-col>
      </v-row>
    </form>
    
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      fullname: null,  
      email: null,
      phoneNumber: null,
      message: null,
      rules: {
        required: value => !!value || 'Field is required',
      },  
    }
  }
}
</script>

<style scoped>

</style>
