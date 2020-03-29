<template>
  <v-app>
    <Navbar/>
    <v-content>
        <MainHeader/>
        <ContentCards />
        <ExploreExams/>
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
import Navbar from '@/components/home_navbar'
import MainHeader from '@/components/home_main_content'
import ContentCards from '@/components/home_content_card'
import SEOFooter from '@/components/main_footer'
import CompanyFooter from '@/components/company_footer'
import ExploreExams from '@/components/main_explore_exams'
export default {
  name: 'App',
  components: { Navbar, MainHeader, ContentCards, SEOFooter, CompanyFooter, ExploreExams},
  data () {
    return {
    }
  }
}
</script>