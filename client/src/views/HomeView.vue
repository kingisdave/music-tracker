<template>
  <v-card>
    <v-layout>
      <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      />

      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size screens.
      </v-card-text>
    </v-layout>
  </v-card>
  <!-- <HelloWorld /> -->
</template>

<script>
import { defineComponent } from 'vue'

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
