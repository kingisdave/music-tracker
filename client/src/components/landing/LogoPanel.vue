<template>
  <div class="logos-container">
    <v-parallax
      :src="require('@/assets/images/tesla-car.jpg')"
      height="90vh" style="min-height: 70vh;"
    >
      <div class="d-flex flex-column fill-height justify-center align-center">
        <div class="pa-8 rounded-xl bg-white text-center elevation-12">
          <h1 class="text-h4 font-weight-bold font-italic"
            color="primary">
            Let's Track Now
          </h1>
          <v-btn size="x-large"
            color="#5865f2"
            elevation="8" 
            class="subheading mt-6 text-white">
            Track your files today!
          </v-btn>
        </div>
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .logos-container{
    /* background: #F1F1F1; */
    /* color: #929292; */
  }
</style>
