<template>
  <v-card class="ml-0 pa-0">
    <welcome-panel/>
    <carousel-panel/>

    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size screens.
      </v-card-text>
  </v-card>
</template>

<script>
import WelcomePanel from '@/components/WelcomePanel.vue'
import CarouselPanel from '@/components/CarouselPanel.vue'

export default {
  name: 'IndexView',
  components: {
    WelcomePanel,
  CarouselPanel
  },
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo'
      },
      {
        title: 'Bar',
        value: 'bar'
      },
      {
        title: 'Fizz',
        value: 'fizz'
      },
      {
        title: 'Buzz',
        value: 'buzz'
      }
    ]
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>
