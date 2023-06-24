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
      flat
      rounded="0"
    >
      <v-window v-model="onboarding">
        <v-window-item
          v-for="n in (team/length)"
          :key="`group-${n}`"
          :value="n"
        >
        <v-row class="">
          <v-col cols="6" sm="4" md="3"
            class="bg-white"
            v-for="x in 4"
            :key="`team-${(n-1) * 4 + x}`"
          >
            <v-card
              height="200"
              class="d-flex justify-center align-center"
            >
              <span class="text-h2">
                Card {{ (n - 1) * 4 + x }}
              </span>
            </v-card>
          </v-col>
        </v-row>
          <!-- <v-card
            height="200"
            class="d-flex justify-center align-center"
          >
            <span class="text-h2">
              Card {{ n }}
            </span>
          </v-card> -->
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
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      team: 20,
      onboarding: 0,
      length: 4,
      fullname: null,  
      title: null,
      message: null  
    }
  },
  methods: {
    next () {
      this.onboarding = this.onboarding + 1 > (this.team/this.length)
        ? 1
        : this.onboarding + 1
    },
    prev () {
      this.onboarding = this.onboarding - 1 <= 0
        ? (this.team/this.length)
        : this.onboarding - 1
    }
  }
}
</script>

<style scoped>

</style>
