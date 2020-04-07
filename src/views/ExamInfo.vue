<template>
    <v-app>
    <Navbar/>
    <v-content>
      <ExamInfoContainer/>
    </v-content>
    <FOOTER>
      <v-divider></v-divider>
      <SEOFooter class="navbar"/>
      <v-divider></v-divider>
      <CompanyFooter class="navbar"/>
    </FOOTER>
  </v-app>
    
</template>

  
<script>

import ExamInfoContainer from '@/components/ExamInfoPage/ExamDetails'
import Navbar from '@/components/home_navbar'
export default {
  name: 'App',
  components: { Navbar , ExamInfoContainer },
  data () {
    return {
    }
  }
}
</script>