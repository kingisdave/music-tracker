<template>
  <v-card class="product-wrapper primary"
    align="center">
    <div class="product-bgcolor"></div>
    <v-row>
      <v-col cols="12" sm="6" md="6"
        class="">
        <!-- images -->
      </v-col>
      <v-col cols="12" sm="6" md="6"
        class="">
        <v-card>
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
    min-height:70vh;
    background-image: url('../../assets/images/music-wallpaper.jpg');
    background-position: center;
    background-color: fill;
  }
  .product-bgcolor {
    background-color: rgba(154, 118, 187, 0.7);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -10;
  }

</style>