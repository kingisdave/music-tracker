<template>
  <v-card class="product-wrapper d-flex align-center"
    align="center">
    <div class="product-bgcolor primary"></div>
    <v-row class="pt-5 d-flex flex-wrap-reverse align-center">
      <v-col cols="12" md="6"
        class="">
        <v-card class="mx-4" variant="none">
          <v-card-text class="d-inline pt-4 pb-3 pb-sm-6">
            <h1 class="text-h4 text-md-h3 font-weight-medium">
              Key Features 
            </h1>
          </v-card-text>
          <v-card-text class="d-block pt-1 mb-6 text-justify text-sm-left">
            <p class="text-subtitle-1 mb-4 my-sm-6">
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Ullam voluptas iure quibusdam a cupiditate 
              maiores officia tempora suscipit distinctio autem 
              odit dolore exercitationem nostrum quo asperiores 
              optio, repellendus nisi recusandae?
            </p>
            <p class="text-subtitle-1 my-4 my-sm-6">
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Ullam voluptas iure quibusdam a cupiditate 
              maiores officia tempora suscipit distinctio autem 
              odit dolore exercitationem nostrum quo asperiores 
              optio, repellendus nisi recusandae?
            </p>
            <p class="text-subtitle-1 my-4 my-sm-6">
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Ullam voluptas iure quibusdam a cupiditate 
              maiores officia tempora suscipit distinctio autem 
              odit dolore exercitationem nostrum quo asperiores 
              optio, repellendus nisi recusandae?
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6"
        class="d-flex justify-center align-center">
        <v-row class="mx-2 py-sm-10 rounded-xl" 
          style="">
          <v-col cols="6" sm="6" md="12"
            class="px-sm-10" 
            v-for="(image, index) in cardImages"
            :key="index"
          >
            <v-card class="ma-1 rounded-shaped">
              <v-img
                :src="image.src"
                aspect-ratio="1"
                cover
                class="bg-grey-lighten-2"
              >
              </v-img>

            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    
  </v-card>
  
</template>

<script>
export default {
  data () {
    return {
      cardImages: [
        {
          src: require('../../assets/images/nice-guitar.jpg')
        },
        {
          src: require('../../assets/images/human-book.png')
        },
        
      ]
    };
  }
}
</script>

<style scoped>
  /* .product-wrapper {
    min-height:85vh;
    background-image: url('../../assets/images/music-wallpaper.jpg');
    background-position: center;
    background-color: fill;
  } */
  .product-bgcolor {
    background-color: rgba(186, 154, 216, 0.8);
    position: absolute;
    width: 100%;
    height: 100%;
  }

</style>