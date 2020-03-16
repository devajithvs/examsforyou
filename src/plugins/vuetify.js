import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
    customProperties: true,
    },
    themes: {
      light: {

        pure_complementary: '#000000',
        primary: '#ffffff',
        navbar:'#ffffff',

        secondary: '#747474',
        primary_text: '#747474',
        secondary_text: '#AAB8B8',
        
        review: '#5960b7',
        success: '#63d1b4',
        accent: '#0079D3',
        error: '#ed5f5f',
      },
      dark: {
        navbar:'#1e1e1e',
        success: colors.green.darken2,
        pure_complementary: '#ffffff',
        primary: '#030303',
        primary2: '#000000',
        secondary: '#ffffff',
        primary_text: '#AAB8B8',
        secondary_text: '#747474',

        review: '#6b6be5',
      },
    },
  },
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
      },
});
