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
import Navbar from '@/components/ExamPage/ExamNavbar'
import Status from '@/components/ExamPage/ExamStatus'
import QuestionContainer from '@/components/ExamPage/QuestionContainer'
export default {
  name: 'App',
  components: { Navbar, Status, QuestionContainer },
  data () {
    return {
    }
  }
}
</script>