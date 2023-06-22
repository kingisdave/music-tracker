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
          class="px-10 text-white">
          <v-card-text>
            <div class="text-h6 text-sm-h4 mx-0 mx-sm-10 my-1 my-sm-3 text-start">
              <h1 class="">Relieve Your Stress</h1>
              <div class="my-2">With</div>
              <h1 class="text-h2 font-weight-bold italics">Ease</h1>
            </div>
            <div class="mx-10" >
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </div>
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
