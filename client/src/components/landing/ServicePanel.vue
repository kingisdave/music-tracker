<template>
  <v-card class="service-wrapper primary"
    align="center">
    <div class="service-bgcolor"></div>
    
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
  .service-wrapper {
    min-height:70vh;
    background-image: url('../../assets/images/cool-mic.jpg');
    background-position: center;
    background-color: cover;
  }
  .service-bgcolor {
    background-color: rgba(194, 164, 224, 0.7);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -10;
  }

</style>