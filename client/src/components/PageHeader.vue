<template>
  <v-toolbar dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{name: 'root'}">
        MusicTracker
      </router-link>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="$emit('toggle-drawer')"
      ></v-app-bar-nav-icon>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        variant="plain"
        class="navButtons text-darken-1"
        :to="{name: 'songs'}">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        variant="plain"
        class="navButtons text-darken-1"
        :prepend-icon="theme === 'light' ?
          'mdi-weather-sunny' :
          'mdi-weather-night'"
        @click="$emit('toggle-theme')"
      >
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        variant="plain"
        class="navButtons text-darken-1"
        :to="{name: 'login'}">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        variant="plain"
        class="navButtons"
        :to="{name: 'register'}">
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        variant="plain"
        class="navButtons"
        @click="logout">
        Log Out
      </v-btn>

      <!-- <v-icon
        aria-label="My Account" role="img" aria-hidden="false"
        :icon="`mdiSvg:${icons.mdiAccount}`"
      ></v-icon> -->

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
// import { mdiAccount } from '@mdi/js'

export default {
  name: 'PageHeader',
  props: ['theme', 'drawer'],
  // data: () => ({
  //   icons: {
  //     mdiAccount
  //   }
  // }),
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }

  // created () {
  //   this.theme = 'light'
  //   // this.theme = ref('light')
  // }

}

</script>
<style scoped>
  .home {
    text-decoration: none;
  }
  .home:hover {
    color: aquamarine;
  }
  .navButtons {
    background-color: transparent !important;
  }
  .navButtons:hover {
    color: white;
    background-color: #ccc;
  }
</style>
