<template>
  <v-card class="ml-0 pa-0">
    <welcome-panel/>

    <carousel-panel/>

    <logo-panel/>

    <about-panel/>

  </v-card>
</template>

<script>
import WelcomePanel from '@/components/landing/WelcomePanel.vue'
import CarouselPanel from '@/components/CarouselPanel.vue'
import LogoPanel from '@/components/landing/LogoPanel.vue'
import AboutPanel from '@/components/landing/AboutPanel.vue'

export default {
  name: 'IndexView',
  components: {
    WelcomePanel,
    CarouselPanel,
    LogoPanel,
    AboutPanel
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
