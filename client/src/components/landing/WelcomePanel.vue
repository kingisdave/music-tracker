<template>
  <v-card>
    <v-img
      class="align-center text-white"
      height="90vh"
      :src="require('../../assets/images/Music Education Training Concert Background.jpg')"
      cover
    >
      <v-row class="align-center">
        <v-col md="8" sm="8" xs="12"
          class="px-4 px-sm-10 text-white">
          <v-card-text class=" mx-0 mx-sm-10">
            <div class="text-h6 text-sm-h4 my-1 my-sm-3 text-start">
              <h1 class="text-h4 text-md-h3 font-weight-bold">
                Relieve Your Stress
              </h1>
              <div class="my-2 ml-4 ml-sm-0">With</div>
              <h1 class="text-h2 font-weight-bold font-italic">
                Premium
              </h1>
            </div>
            <v-row class="px-4 my-6 flex">
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-row>
            <v-row class="flex justify-center justify-sm-start mt-6">
              <v-col cols="7" sm="6" md="5">
                <v-btn block 
                  rounded="lg" 
                  size="large"
                  color="#b036a9"
                  variant="flat"
                >
                  Start Now
                </v-btn>
              </v-col>
              <!-- <v-col cols="5" sm="4" md="3">
                <v-btn block 
                  rounded="lg"
                  color="#4500e6" 
                  size="large"
                  variant="flat"
                >
                  Login
                </v-btn>

              </v-col> -->
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
