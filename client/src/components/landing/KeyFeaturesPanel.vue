<template>
  <v-card class="product-wrapper d-flex align-center"
    align="center" style="min-height: 85vh;">
    <div class="product-bgcolor primary"></div>
    <v-row class="pt-8 d-flex flex-wrap-reverse align-center">
      <v-col cols="12" md="6"
        class="">
        <v-card class="mx-4" variant="none">
          <v-card-text class="d-inline pt-6 pb-3 pb-sm-6">
            <h1 class="text-h4 text-md-h3 font-weight-medium">
              Key Features 
            </h1>
          </v-card-text>
          <v-card-text class="d-block pt-1 mb-6 text-justify text-sm-left">
            <p class="text-subtitle-1 text-sm-h6 text-sm-h5 mb-4 my-sm-6">
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Ullam voluptas iure quibusdam a cupiditate 
              maiores officia tempora suscipit distinctio autem 
              odit dolore exercitationem nostrum quo asperiores 
              optio, repellendus nisi recusandae?
            </p>
            <p class="text-subtitle-1 text-sm-h6 text-sm-h5 my-4 my-sm-6">
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Ullam voluptas iure quibusdam a cupiditate 
              maiores officia tempora suscipit distinctio autem 
              odit dolore exercitationem nostrum quo asperiores 
              optio, repellendus nisi recusandae?
            </p>
            <p class="text-subtitle-1 text-sm-h6 text-sm-h5 my-4 my-sm-6">
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
        <v-row class="mx-2 py-sm-10 rounded-xl d-flex justify-center" 
          style="">
          <v-col cols="12" sm="6" md="10" lg="6"
            class="px-sm-10 px-md-2" 
            v-for="(image, index) in cardImages"
            :key="index"
          >
            <v-card class="ma-1 rounded-shaped">
              <v-img
                :src="image.src"
                aspect-ratio="1"
                cover
                class="bg-grey-lighten-2"
                style="min-height: 300px; max-height: 450px;"
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
  } */
  .product-bgcolor {
    background-color: rgba(186, 154, 216, 0.8);
    position: absolute;
    width: 100%;
    height: 100%;
  }

</style>