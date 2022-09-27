<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
      <v-main>
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
  <!-- <HelloWorld /> -->
</template>

<script>
import { defineComponent } from 'vue'

// Components
// import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'HomeView',

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
})
</script>
