<template>
  <main>
    <header>
      <Navbar/>
    </header>
    <content>
        <MainHeader/>
        <ContentCards/>
    </content>
    <FOOTER>
      <SEOFooter/>
      <CompanyFooter/>
    </FOOTER>
  </main>
</template>

<script>
import Navbar from '@/components/home_navbar'
import MainHeader from '@/components/home_main_content'
import ContentCards from '@/components/home_content_card'
import SEOFooter from '@/components/main_footer'
import CompanyFooter from '@/components/company_footer'
export default {
  name: 'App',
  components: { Navbar, MainHeader, ContentCards, SEOFooter, CompanyFooter,},
  data () {
    return {
    }
  }
}
</script>