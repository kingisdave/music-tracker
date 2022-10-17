<template>
  <v-toolbar fixed color="primary">
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        MusicTracker
      </span>

      <v-btn
        flat
        dark
        @click="navigateTo({name: 'songs'})">
        Browse
      </v-btn>

    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({name: 'login'})">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
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
  // data: () => ({
  //   icons: {
  //     mdiAccount
  //   }
  // }),
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }

}

</script>
<style scoped>
  .home {
    cursor: pointer;
  }
  .home:hover {
    color: aquamarine;
  }

</style>
