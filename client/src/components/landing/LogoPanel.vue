<template>
  <div class="logos-container">
    <v-parallax
      :src="require('@/assets/images/tesla-car.jpg')"
      height="90vh" style="min-height: 70vh;"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">
          Welcome to Tracker
        </h1>
        <h4 class="subheading">
          Track your files today!
        </h4>
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
    background: #F1F1F1;
    color: #929292;
  }
</style>
