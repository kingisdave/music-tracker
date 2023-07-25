<template>
  <v-card class="product-wrapper primary d-flex justify-center align-center"
    align="center">
    <div class="product-bgcolor primary"></div>
    <v-row class="h-100 d-flex align-center">
      <v-col cols="12" sm="6" md="6"
        class="d-flex justify-center align-center">
        <v-row class="ma-7 pa-0 rounded-xl" 
          style="width: 100%; height: 50vh;">
          <v-col cols="6" class="">
            <v-card class="ma-1 rounded-xl">
              <v-img
                src="../../assets/images/nice-guitar.jpg"
                aspect-ratio="1"
                cover
                class="bg-grey-lighten-2"
              ></v-img>

            </v-card>
          </v-col>
          <v-col cols="6" class="">
            <v-card class="ma-1 rounded-xl">
              <v-img
                src="../../assets/images/tree-house.jpg"
                aspect-ratio="1"
                cover
                class="bg-grey-lighten-2"
              ></v-img>

            </v-card>
          </v-col>
          <v-col cols="6" class="">
            <v-card class="ma-1 rounded-xl">
              <v-img
                src="../../assets/images/human-book.png"
                aspect-ratio="1"
                cover
                class="bg-grey-lighten-2"
              ></v-img>

            </v-card>
          </v-col>
          <v-col cols="6" class="">
            <v-card class="ma-1 rounded-xl">
              <v-img
                src="../../assets/images/earphone.jpg"
                aspect-ratio="1"
                cover
                class="bg-grey-lighten-2"
              ></v-img>

            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" md="6"
        class="">
        <v-card class="">
          <v-card-text class="d-block pt-4 pb-6">
            <h1 class="text-sm-h3 font-weight-medium">
              Products 
            </h1>
            <h3 class="text-subtitle2 text-sm-subtitle mt-3">
              Product Offering
            </h3>
          </v-card-text>
          <v-card-text class="d-block pt-4 pb-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Ullam voluptas iure quibusdam a cupiditate 
              maiores officia tempora suscipit distinctio autem 
              odit dolore exercitationem nostrum quo asperiores 
              optio, repellendus nisi recusandae?
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
  </v-card>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .product-wrapper {
    min-height:80vh;
    background-image: url('../../assets/images/music-wallpaper.jpg');
    background-position: center;
    background-color: fill;
  }
  .product-bgcolor {
    background-color: rgba(186, 154, 216, 0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    /* z-index: 10; */
  }

</style>