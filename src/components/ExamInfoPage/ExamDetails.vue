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
    <div class="tabs gray-2">
        <a class="tab-element cursor-pointer font-bold font-15 hover-darker" 
        v-for="(item, index) in info_sections" @click="current_tab = index"
        :key="index"
        :class="current_tab==index ? 'selected' : ''"
        >
          {{item}}
        </a>
    </div>
    <div>
      <ExamInformation v-if="current_tab == 0"/>
      <ExamBlog v-if="current_tab == 1"/>
      <ExamPreviousPapers v-if="current_tab == 2"/>
      <ExamStudyMaterial v-if="current_tab == 3"/>
      <ExamList v-if="current_tab == 4"/>
      <ExamAnalyse v-if="current_tab == 5"/>
    </div>
  </section>
</template>

<script>
 /*Other component*/
import ExamInformation from './ExamInformation'
import ExamBlog from './ExamBlog'
import ExamPreviousPapers from './ExamPreviousPapers'
import ExamStudyMaterial from './ExamStudyMaterial'
import ExamList from './ExamListPage'
import ExamAnalyse from './ExamAnalysePage'
export default {
  components: { ExamInformation, ExamBlog, ExamPreviousPapers, ExamStudyMaterial, ExamList, ExamAnalyse },
  data() {
    return {
      current_tab : 0,
      info_sections : ["Exam Info", "Articles", "Attempt Previous Papers", "Study Material", "Exam List", "ExamAnalyse"],
    }
  }
}
</script>