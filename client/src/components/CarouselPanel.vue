<template>
  <v-card class="primary pt-5"
    align="center"
    style="min-height:90vh;">
    <!-- <v-row
      align="center"
      style="min-height:90vh;">
      <v-col
        md="8" xs="10"
        class="mx-auto"
      > -->
    <v-carousel 
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background>
      <v-carousel-item
        v-for="(slide,i) in slides"
        :key="i"
      >
      <v-sheet tile
        width="70%"
        height="85%"
        theme="dark"
        class="mx-auto"
        style="background-color: #F5F6F7"
      >
        <v-row>
          <v-col xs="12" sm="6">
            
          </v-col>
          <v-col class="d-none d-sm-block">
            
          </v-col>
        </v-row>
      </v-sheet>
      </v-carousel-item>
    </v-carousel>
      <!-- </v-col>
    </v-row> -->
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  }
}
</script>

<style scoped>

</style>
