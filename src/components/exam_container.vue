<template>
  <div class="exam_grid width-80 container mt-5">
    <QuestionContainer/>
    <Status/>
  </div>
</template>

<script>
import Status from './exam_status'
import QuestionContainer from './QuestionContainer'

export default {
  components: { Status,QuestionContainer, },
  data(){
    return{
    }
  },
}
</script>