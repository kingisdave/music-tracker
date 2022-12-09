<template>
  <v-card>
    <v-img
      class="align-center text-white"
      height="80vh"
      :src="require('../../assets/images/Music Education Training Concert Background.jpg')"
      cover
    >
      <v-row class="h-100 align-center">
        <v-col cols="6"
          class="px-10 text-white">
          <v-card-text>
            <div class="text-h4 mx-10 my-3 text-start">
              <h1>Let's Music</h1>
              <div class="my-4">With</div>
              <h1 class="">Ease</h1>
            </div>
            <div class="mx-10" >
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </div>
          </v-card-text>
        </v-col>
        <v-col cols="6">
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
