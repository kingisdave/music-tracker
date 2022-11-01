<template>
  <v-app>
    <page-header></page-header>

    <!-- <v-app-bar
        color="primary"
        prominent
        class="mb-2"
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar> -->
    <!-- <v-navigation-drawer
      v-model="drawer"
      color="grey-darken-2"
      bottom
      temporary
    >
      <v-list
        :items="items"
      ></v-list>
    </v-navigation-drawer> -->
    <v-main>
      <v-container fluid
        class="fill-height"
        style="background: #5114DD33"
      >
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'App',
  components: {
    PageHeader
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

<style>

</style>
