<template @load="showTheme">
  <v-card class="primary pt-5"
    align="center"
    style="min-height:70vh;">
    <v-card-text class="d-block text-center pt-6 pb-8">
      <h1 class="text-sm-h3 font-weight-medium">
        Our Team
      </h1>
      <h3 class="text-subtitle2 text-sm-subtitle mt-3">
        Meet our team members
      </h3>
    </v-card-text>
    <v-card
      flat
      rounded="0"
      style="width: 85%"
    >
      <v-window v-model="onboarding">
        <v-window-item
          v-for="n in (team/length)"
          :key="`group-${n}`"
          :value="n"
        >
          <v-row class="d-flex justify-center">
            <v-col cols="12" sm="4" md="3"
              class="d-none d-md-inline bg-white"
              v-for="x in length"
              :key="`team-${(n-1) * length + x}`"
            >
              <v-card
                height="400"
                class="d-flex justify-center align-center"
              >
                <span class="text-h2">
                  Card {{ (n - 1) * length + x }}
                </span>
              </v-card>
            </v-col>
            <v-col cols="6" sm="6" md="3"
              class="d-none d-sm-inline d-md-none bg-white"
              v-for="x in 2"
              :key="`team-${(n-1) * 2 + x}`"
            >
              <v-card
                height="400"
                class="d-flex justify-center align-center"
              >
                <span class="text-h2">
                  Card {{ (n - 1) * 2 + x }}
                </span>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4" md="3"
              class="d-inline d-sm-none bg-white  "
              v-for="x in 2"
              :key="`team-${(n-1) * 2 + x}`"
            >
              <v-card
                height="400"
                class="d-flex justify-center align-center bg-white"
              >
                <span class="text-h2">
                  Card {{ (n - 1) * 2 + x }}
                </span>
              </v-card>
            </v-col>
          </v-row>
        
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
