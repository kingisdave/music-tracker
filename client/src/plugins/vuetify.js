// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// import { aliases, mdi } from 'vuetify/iconsets/mdi'
import colors from 'vuetify/lib/util/colors'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          mainprimary: '#4914D5', // #E53935
          secondary: colors.red.lighten5 // #FFCDD2
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi' // This is already the default value - only for display purposes
  }
  // icons: {
  //   defaultSet: 'mdi',
  //   aliases,
  //   sets: {
  //     mdi
  //   }
  // }
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides,
)
