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
        class="mt-3"
        style="background-color: #F5F6F7"
      >
        <v-row align="top" align-sm="center" 
          class=" ma-0" 
          style="height: 100%;">
          <v-col cols="12" sm="6"
            class="d-none d-sm-inline" 
            style="padding: 0; width: 100%; height: 100%;">
            <v-img
              class="text-white"
              height="200"
              :src="require('../assets/images/Dark Music Wallpaper - WallpaperSafari.jpg')"
              cover
              style="width: 100%; height: 100%"
            />
          </v-col>
          <v-col cols="12" sm="6"
            class="d-inline d-sm-none" 
            style="padding: 0; width: 100%; height: 50%;">
            <v-img
              class="text-white"
              height="300"
              :src="require('../assets/images/Dark Music Wallpaper - WallpaperSafari.jpg')"
              cover
              style="width: 100%; height: 100%;"
            />
          </v-col>
          <v-col cols="12" sm="6">
              <v-card-text
                style="color: #2a0a74;">
                <p class="text-body-2 text-md-h6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Magni ut est qui harum nam modi adipisci
                  soluta hic! Nam vero ipsa possimus nisi quibusdam
                  vitae. Tempora iure et itaque similique?
                </p>
              </v-card-text>
          </v-col>
        </v-row>
        <!-- <v-row align="center" 
          class="d-flex d-sm-none ma-0" 
          style="height: 100%;">
          <v-col cols="12" sm="6" 
            style="padding: 0; width: 100%; height: 50%;">
            <v-img
              class="text-white border-2"
              height="200"
              :src="require('../assets/images/Dark Music Wallpaper - WallpaperSafari.jpg')"
              cover
              style="width: 100%"
            />
          </v-col>
          <v-col cols="12" sm="6">
              <v-card-text
                style="color: #2a0a74; border: 3px solid #8c4ed2;">
                <p class="text-subtitle-2 text-sm-h6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Magni ut est qui harum nam modi adipisci
                  soluta hic! Nam vero ipsa possimus nisi quibusdam
                  vitae. Tempora iure et itaque similique?
                </p>
              </v-card-text>
          </v-col>
        </v-row> -->
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
