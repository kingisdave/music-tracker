<template>
  <v-card>
    <v-img
      class="align-center text-white"
      height="80vh"
      :src="require('../../assets/images/Music Education Training Concert Background.jpg')"
      cover
    >
      <v-row class="h-100 align-center">
        <v-col md="8" sm="8" xs="12"
          class="px-4 px-sm-10 text-white">
          <v-card-text class=" mx-0 mx-sm-10">
            <div class="text-h6 text-sm-h4 my-1 my-sm-3 text-start">
              <h1 class="text-h4 text-md-h3 font-weight-bold">
                Relieve Your Stress
              </h1>
              <div class="my-2 ml-4 ml-sm-0">With</div>
              <h1 class="text-h2 font-weight-bold font-italic">Ease</h1>
            </div>
            <v-row class="my-3">
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-row>
            <v-row class="flex justify-center justify-sm-start mt-4">
              <v-col cols="7" sm="6" md="5">
                <v-btn block 
                  rounded="lg" 
                  size="large"
                  color="#4500e6"
                  variant="flat"
                >
                  Start Now
                </v-btn>
              </v-col>
              <v-col cols="5" sm="4" md="3">
                <v-btn block 
                  rounded="lg"
                  color="#752471" 
                  size="large"
                  variant="flat"
                >
                  Login
                </v-btn>
                <!-- <v-btn block 
                  rounded="lg"
                  color="#e19dde" 
                  size="large"
                  variant="flat"
                >
                  Login
                </v-btn> -->
              </v-col>
              <!-- <v-btn 
                size="large"
                class="ma-1 ma-sm-3" 
                rounded="xs" 
                variant="outlined"
              >
                Start Now
              </v-btn>
              <v-btn 
                size="large"
                class="ma-1 ma-sm-3"
                rounded="xs" 
                variant="outlined"
              >
                Login
              </v-btn> -->
            </v-row>
          </v-card-text>
        </v-col>
        <v-col md="4" class="d-none d-sm-block">
          <v-card>
            <v-img
              class="align-center text-white"
              height="70vh"
              :src="require('../../assets/images/mobile-pix.png')"
              contain
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
