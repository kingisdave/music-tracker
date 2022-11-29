<template>
  <v-app :theme="theme">
    <page-header
      @toggle-theme="toggleTheme"
      @toggle-drawer="drawer = !drawer"
    ></page-header>
    <side-navigation-bar
      :drawer="drawer"
    ></side-navigation-bar>
    <v-main>
      <v-container fluid
        class="fill-height pa-0"
        style="background: #5114DD33"
      >
        <router-view/>
      </v-container>
    </v-main>

    <footer-panel></footer-panel>
  </v-app>
</template>
<script>
import { useTheme } from 'vuetify'
import PageHeader from '@/components/PageHeader.vue'
import SideNavigationBar from '@/components/SideNavigationBar.vue'
import FooterPanel from '@/components/FooterPanel.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    SideNavigationBar,
    FooterPanel
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
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () =>
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
  // methods: {
  //   changeTheme () {
  //     this.theme = this.theme === 'light' ? 'dark' : 'light'
  //     console.log('this them',this.theme)
  //   }
  // },
  // watch: {
  //   group () {
  //     this.drawer = false
  //     console.log('DRWAS ',this.drawer)
  //   }
  // }
}
</script>

<style>

</style>
