<template>
  <v-app-bar color="#3700B3">
    <v-toolbar-title>
      <router-link
        class="home"
        tag="span"
        :to="{name: 'root'}"
        style="color: #f4f4f4"
      >
        MusicTracker
      </router-link>
    </v-toolbar-title>
    <v-app-bar-nav-icon
      variant="text"
      class="mr-auto navButtons"
      @click.stop="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>
    <v-btn
      variant="plain"
      class="navButtons"
      :to="{name: 'songs'}">
      Browse
    </v-btn>

    <v-spacer></v-spacer>
      <v-btn
        variant="plain"
        class="navButtons"
        :prepend-icon="theme === 'light' ?
          'mdi-weather-sunny' :
          'mdi-weather-night'"
        @click="$emit('toggle-theme')"
      >
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        variant="plain"
        class="navButtons"
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

  </v-app-bar>
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
    color: white;
    background-color: transparent !important;
  }
  .navButtons:hover {
    color: white;
    background-color: #ccc;
  }
</style>
