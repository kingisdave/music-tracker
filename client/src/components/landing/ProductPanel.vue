<template>
  <v-card class="product-wrapper primary d-flex align-center"
    align="center">
    <div class="product-bgcolor primary"></div>
    <v-row class="d-flex align-center">
      <v-col cols="12" sm="6" md="6"
        class="d-block d-sm-none">
        <v-card class="mx-2 mt-10" variant="none" 
          style="border: 0 !important;">
          <v-card-text class="d-block">
            <h1 class="text-sm-h4 font-weight-medium">
              Our Products 
            </h1>
            <h3 class="text-subtitle2 text-sm-subtitle mt-3">
              Product Offering
            </h3>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6"
        class="d-flex justify-center align-center">
        <v-row class="mx-3 ma-sm-5 pa-0 rounded-xl" 
          style="">
          <v-col cols="6" 
            v-for="(image, index) in cardImages"
            :key="index"
          >
            <v-card class="ma-1 rounded-xl">
              <v-img
                :src="image.src"
                aspect-ratio="1"
                cover
                class="bg-grey-lighten-2"
              >
              <!-- <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-progress-circular
                    color="grey-lighten-4"
                    indeterminate
                  ></v-progress-circular>
                </div>
              </template> -->
              </v-img>

            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" md="6"
        class="">
        <v-card class="mx-4" variant="none">
          <v-card-text class="d-none d-sm-inline pt-4 pb-3 pb-sm-6">
            <h1 class="text-h4 text-md-h3 font-weight-medium">
              Products 
            </h1>
            <h3 class="text-subtitle2 text-sm-subtitle mt-3">
              Product Offering
            </h3>
          </v-card-text>
          <v-card-text class="d-block pt-4 mb-6">
            <p class="text-body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing 
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
  data () {
    return {
      cardImages: [
        {
          src: require('../../assets/images/nice-guitar.jpg')
        },
        {
          src: require('../../assets/images/tree-house.jpg')
        },
        {
          src: require('../../assets/images/human-book.png')
        },
        {
          src: require('../../assets/images/earphone.jpg')
        }
      ]
    };
  }
}
</script>

<style scoped>
  .product-wrapper {
    min-height:85vh;
    background-image: url('../../assets/images/music-wallpaper.jpg');
    background-position: center;
    background-color: fill;
  }
  .product-bgcolor {
    background-color: rgba(186, 154, 216, 0.8);
    position: absolute;
    width: 100%;
    height: 100%;
  }

</style>