<template>
  <v-card class="product-wrapper primary"
    align="center">
    <div class="product-bgcolor"></div>
    
    <!-- <v-card-text class="d-block pt-6 pb-8">
      <h1 class="text-sm-h3 font-weight-medium">
        Products & Services
      </h1>
      <h3 class="text-subtitle2 text-sm-subtitle mt-3">
        Service Overview
      </h3>
    </v-card-text> -->
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