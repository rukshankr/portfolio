/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

//fonts
import '@fortawesome/fontawesome-free/css/all.css'
import {aliases, fa} from 'vuetify/iconsets/fa'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#171f34',
          secondary: '#6ef5cd',
          tertiary: '#239aa8'
        },
      },
    },
  },
})
