import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import PanelView from '@/components/globals/PanelView'

loadFonts()
createApp(App)
  .component('panel-view', PanelView)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
