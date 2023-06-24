<template @load="showTheme">
  <v-card class="primary pt-5"
    align="center"
    style="min-height:70vh;">
    <v-card-text class="d-block text-center pt-4 pb-3">
      <h1 class="text-h6 text-sm-h4 font-weight-bold">
        Our Team
      </h1>
      <h3 class="text-subtitle2 text-sm-subtitle mt-3">
        Meet our team members
      </h3>
    </v-card-text>
    <v-card
      theme="dark"
      flat
      rounded="0"
    >
      <v-window v-model="onboarding">
        <v-window-item
          v-for="n in length"
          :key="`card-${n}`"
          :value="n"
        >
          <v-card
            height="200"
            class="d-flex justify-center align-center"
          >
            <span class="text-h2">
              Card {{ n }}
            </span>
          </v-card>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-end px-4">
        <v-btn
          variant="plain"
          icon="mdi-chevron-left"
          @click="prev"
        ></v-btn>
        
        <v-btn
          variant="plain"
          icon="mdi-chevron-right"
          @click="next"
        ></v-btn>
      </v-card-actions>
    </v-card>
    <!-- <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <v-avatar
          color="primary"
          size="24"
          v-text="step"
        ></v-avatar>
      </v-card-title>

      <v-window v-model="step">
        <v-window-item :value="1">
          
        </v-window-item>

        <v-window-item :value="2">
          
        </v-window-item>

        <v-window-item :value="3">
          
        </v-window-item>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          v-if="step > 1"
          variant="text"
          @click="step--"
        >
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="step < 3"
          color="primary"
          variant="flat"
          @click="step++"
        >
          Next
        </v-btn>
      </v-card-actions>
    </v-card> -->
    <!-- <v-row class="">
      <v-col cols="6" sm="4" md="3"></v-col>
      <v-col cols="6"></v-col>
    </v-row> -->
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      length: 3,
      onboarding: 0,
      fullname: null,  
      email: null,
      phoneNumber: null,
      message: null  
    }
  },
  methods: {
    next () {
      this.onboarding = this.onboarding + 1 > this.length
        ? 1
        : this.onboarding + 1
    },
    prev () {
      this.onboarding = this.onboarding - 1 <= 0
        ? this.length
        : this.onboarding - 1
    }
  }
}
</script>

<style scoped>

</style>
