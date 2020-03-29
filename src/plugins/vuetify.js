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
        logo_primary: '#009966',

        pure_complementary: '#000000',
        primary: '#ffffff',
        navbar:'#ffffff',

        secondary: '#646464',
        primary_text: '#747474',
        secondary_text: '#AAB8B8',
        
        review: '#5960b7',
        success: '#009966',
        // success: '#63d1b4',
        accent: '#0079D3',
        // error: '#ed5f5f',
      },
      dark2: {
        logo_primary: '#ffffff',

        navbar:'#191C20',
        success: '#009966',
        pure_complementary: '#ffffff',
        primary: '#101010',
        primary2: '#000000',
        secondary: '#ffffff',
        primary_text: '#AAB8B8',
        secondary_text: '#747474',

        review: '#6b6be5',
      },
      dark: {
        logo_primary: '#ffffff',

        navbar:'#21303D',
        // success: '#009966',
        success: colors.green.darken2,
        pure_complementary: '#ffffff',
        primary: '#15202b',
        secondary: '#ffffff',
        primary_text: '#AAB8B8',
        secondary_text: '#747474',

        review: '#6b6be5',
      },
    },
  },
    // icons: {
    //     iconfont: 'md', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    //   },
});
