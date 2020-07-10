<template>
  <main>
    <header>
      <Navbar/>
    </header>
    <content>
      <Exam/>
    </content>
  </main>
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