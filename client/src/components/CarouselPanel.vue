<template>
  <v-card class="primary pt-5"
    align="center"
    style="min-height:70vh;">
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
      <v-sheet
        width="70%"
        height="85%"
        class="mt-3 mx-auto"
        style="background-color: #F5F6F7"
      >
        <v-row align="center" 
          class="ma-0" 
          style="height: 100%;">
          <v-col xs="12" sm="6">
            
          </v-col>
          <v-col sm="6"
            class="d-none d-sm-block align-center">
              <v-card-text
                style="color: #2a0a74; border: 3px solid #8c4ed2;">
                <p class="text-h6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Magni ut est qui harum nam modi adipisci
                  soluta hic! Nam vero ipsa possimus nisi quibusdam
                  vitae. Tempora iure et itaque similique?
                </p>
              </v-card-text>
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
