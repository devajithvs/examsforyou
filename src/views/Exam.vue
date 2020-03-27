<template>
  <v-app class="grey">
    <Navbar/>
    <v-content>
      <Exam/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/exam_navbar'
import Exam from '@/components/exam_container'
export default {
  name: 'App',
  components: { Navbar, Exam },
  data () {
    return {
    }
  }
}
</script>