<template>
    <section class="on-top">
      <div class="bg-primary clear-navbar">
        <div class="container">
            <PWD v-bind:CurrentDir="['Home', 'Engineering']"/>
            <h1 class="white font-20 text-center">{{exam_details["overview"][0]["description"]}}</h1>
            <div class="flex align-center justify-center mt-1">
                <div class="icon admit-card-icon mr-1 mt-1"></div>
                <p class="white font-10">Exam Date<br>03, July, 2020 (Tentative)</p>
            </div>
            <button class="button center-button bg-complementary mt-1">
              <span class="font-bold font-15"><a class="white" :href="exam_details['registration']['website']">Visit Website</a></span>
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
      <ExamDetails :examDetails="exam_details" v-if="current_tab == 0"/>
      <ExamArticles :examDetails="exam_details" v-if="current_tab == 1"/>
      <ExamPreviousPapers :examDetails="exam_details" v-if="current_tab == 2"/>
      <ExamStudyMaterial :examDetails="exam_details" v-if="current_tab == 3"/>
    </div>
  </section>
</template>

<script>
import PWD from '@/components/PWD'
import ExamDetails from './ExamDetails'
import ExamArticles from './ExamArticles'
import ExamPreviousPapers from './ExamPreviousPapers'
import ExamStudyMaterial from './ExamStudyMaterial'

import all_exam_details from '@/assets/json_files/exam_details.json';
export default {
  components: { PWD, ExamDetails, ExamArticles, ExamPreviousPapers, ExamStudyMaterial },
  data() {
    return {
      exam_details: all_exam_details["bitsat"],
      current_tab : 0,
      info_sections : ["Exam Details", "Articles", "Attempt Previous Papers", "Study Material"],
    }
  }
}
</script>