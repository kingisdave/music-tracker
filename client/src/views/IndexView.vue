<template>
  <v-card class="ml-0 pa-0">
    <welcome-panel/>

    <feature-panel/>
    
    <our-team-panel/>
    
    <service-panel />
    <logo-panel/>
    
    <contact-us-panel/>

    <about-panel/>

  </v-card>
</template>

<script>
import WelcomePanel from '@/components/landing/WelcomePanel.vue'
import FeaturePanel from '@/components/landing/FeaturePanel.vue'
import OurTeamPanel from '@/components/landing/OurTeamPanel.vue'
import ServicePanel from '@/components/landing/ServicePanel.vue'
import LogoPanel from '@/components/landing/LogoPanel.vue'
import ContactUsPanel from '@/components/landing/ContactUsPanel.vue'
import AboutPanel from '@/components/landing/AboutPanel.vue'

export default {
  name: 'IndexView',
  components: {
    WelcomePanel,
    FeaturePanel,
    OurTeamPanel,
    ServicePanel,
    ContactUsPanel,
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
