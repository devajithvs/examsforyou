<template>
  <main>
    <header>
      <Navbar/>
    </header>
    <content>
      <div class="exam_grid width-80 container mt-5">
        <QuestionContainer/>
        <Status/>
      </div>
    </content>
  </main>
</template>

<script>
import Navbar from '@/components/exam_navbar'
import Status from '@/components/exam_status'
import QuestionContainer from '@/components/QuestionContainer'
export default {
  name: 'App',
  components: { Navbar, Status, QuestionContainer },
  data () {
    return {
    }
  }
}
</script>