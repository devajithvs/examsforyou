<template>
    <section class="on-top">
      <div class="bg-primary extra-margin-top">
        <div class="container">
            <p class="font-10 white mb-1"><a href="" class="white">HOME</a>&nbsp;>>&nbsp;<a href="" class="white">JEE MAIN</a></p>
            <h1 class="white font-20 text-center">Joint Entrance Examination Main (JEE Main)</h1>
            <div class="flex align-center justify-center mt-1">
                <div class="icon admit-card-icon mr-1 mt-1"></div>
                <p class="white font-10">Admit Card Date<br>03, July, 2020 (Tentative)</p>
            </div>
            <button class="button center-button bg-complementary mt-1">
              <span class="font-bold font-15">Visit Website</span>
            </button>  
        </div>
    </div>
    <div class="divider-horizontal"></div>
    <div>
      <ExamAnalyseContent/>
    </div>
  </section>
</template>

<script>
import ExamAnalyseContent from './ExamAnalyseContent'
export default {
  components: { ExamAnalyseContent },
  data() {
    return {
      current_tab : 0,
      info_sections : ["Exam Details", "Articles", "Attempt Previous Papers", "Study Material", "Exam List", "ExamAnalyse"],
    }
  }
}
</script>