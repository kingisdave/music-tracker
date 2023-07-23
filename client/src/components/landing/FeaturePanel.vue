<template>
  <v-card class="feature-wrapper primary"
    align="center">
    <div class="feature-bgcolor"></div>
    <div class="d-block text-center pt-7 pb-4">
      <h1 class="text-sm-h3 font-weight-medium">
        Features & Services
      </h1>
      <h4 class="text-sm-subtitle mt-3">
        Check out on each of the features and our services
      </h4>
    </div>
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
                :src="slide.src"
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
                :src="require('../../assets/images/Dark Music Wallpaper - WallpaperSafari.jpg')"
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
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
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
        {
          src: require('../../assets/images/cool-mic.jpg'),
        },
        {
          src: require('../../assets/images/human-book.png'),
        },
        {
          src: require('../../assets/images/money-pizza.png'),
        },
        {
          src: require('../../assets/images/tree-house.jpg'),
        },
      ],
    }
  }
}
</script>

<style scoped>
  .feature-wrapper {
    min-height:70vh;
    background-image: url('../../assets/images/nice-guitar.jpg');
    background-color: cover;
    background-position: center;
  }
  .feature-bgcolor {
    background-color: rgba(206, 173, 240, 0.877);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -10;
  }
</style>
