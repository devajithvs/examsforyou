<template>
  <div class="examinfo__content container">
    <ExamNotification/>
    <div class="exam-info card bg-white">
      <div class="mb-5">
        <h4 class="font-16 text-center">Quick-links</h4>
        <div class="flex flex-wrap space-around mt-5">
          <div class="ql-link flexbox-vertical">
            <img src="@/assets/application.svg" alt="">
            <h5 class="font-16 text-center mt-2">Overview</h5>
          </div>
          <div class="ql-link flexbox-vertical">
            <img src="@/assets/dates.svg" alt="">
            <h5 class="font-16 text-center mt-2">Dates</h5>
          </div>
          <div class="ql-link flexbox-vertical">
            <img src="@/assets/syllabus.svg" alt="">
            <h5 class="font-16 text-center mt-2">Syllabus</h5>
          </div>
        </div>
      </div>
      <div class="container">
        <h3 class="font-18">What is JEE Main?</h3>
        <p class="mt-1 pt-1 font-16">{{jee_main["briefDescription"]}}</p>
      </div>
      <div class="container">
        <h3 class="font-18">JEE Main Dates</h3>
        <p class="mt-1 pt-1 font-16">July 2: JEE Main 2020 postponed/cancelled, MHRD to reveal tomorrow. Read more</p>
        <p class="mt-1 pt-1 font-16">June 26: JEE Main 2020 exam dates unchanged, says HRD Minister; to be reviewed in July 1st week. Read more</p>
        <p class="mt-1 pt-1 font-16">June 24: JEE Main 2020 to be postponed again; 5 reasons to know why. Read more</p>
        <p class="mt-1 pt-1 font-16">June 16: JEE Main 2020: Educationists demand to cancel the exam. Read more</p>
        <p class="mt-1 pt-1 font-16">May 25: NTA to release JEE Main 2020 admit card 15 days prior to the exam. Read more</p>
        <p class="mt-1 pt-1 font-16">May 20: JEE Main 2020: National Test Abhyas App is now available on Android. Read more</p>
        <p class="mt-1 pt-1 font-16">May 19: JEE Main 2020: HRD Minister to make a major announcement for students who dropped the idea to study abroad. Read more</p>
        <p class="mt-1 pt-1 font-16">May 5. HRD Minister announced JEE Main 2020 April Session dates on May 05. The exam will be held from July 18-23 in online mode. Read More</p>
      </div>
    </div>
  </div>
</template>

<script>
import exams_list_details from '@/assets/json_files/exam_details.json';
import ExamNotification from './ExamNotification'
export default {
  components: { ExamNotification, },
  data() {
    return {
      jee_main: exams_list_details["jee-main"],
    }
  }
}
</script>
