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
          primary: '#1f4e79',
          secondary: '#2E75B6',
        },
      },
    },
  },
})
