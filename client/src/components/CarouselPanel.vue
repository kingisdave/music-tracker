<template>
  <v-card class="primary">
    <v-row>
      <v-col
        md="8" xs="10"
        class="mx-auto"
      >
        <v-carousel :show-arrows="false">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
