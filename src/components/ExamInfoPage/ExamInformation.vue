<template>
  <div class="examinfo__content container">
    <ExamNotification/>
    <div class="exam-info card bg-white">
      <div class="mb-5">
        <h4 class="font-16 text-center">Quick-links</h4>
        <div class="flex flex-wrap space-around mt-5">
          <div class="ql-link flexbox-vertical">
            <img src="@/assets/dates.svg" alt="">
            <h5 class="font-16 text-center mt-2">Dates</h5>
          </div>
          <div class="ql-link flexbox-vertical">
            <img src="@/assets/application.svg" alt="">
            <h5 class="font-16 text-center mt-2">Application</h5>
          </div>
          <div class="ql-link flexbox-vertical">
            <img src="@/assets/syllabus.svg" alt="">
            <h5 class="font-16 text-center mt-2">Syllabus</h5>
          </div>
        </div>
      </div>
      <div class="container">
        <h3 class="font-18">About JEE Main 2020</h3>
        <p class="mt-1 pt-1 font-16">National Testing Agency will conduct JEE Main 2020 from July 18 to 23. Previously, the exam was postponed due to the outbreak of COVID-19.  The authorities have closed the JEE Main 2020 application form correction along with exam centre correction from May 25 to 31. The JEE Main application form submission facility was also opened from May 19 to 24. The details of JEE Main 2020 admit card will be released tentatively on July 3. NTA has closed the application form correction facility along with exam centre change facility on May 3. The application form was released on February 7 and the last date to complete the JEE Main registration was March 12, 2020. The computer based test will be conducted for two papers - JEE Main Paper 1 for B.Tech/ B.E and Paper 2 for B.Arch/ B.Planning. JEE Main 2020 result will be announced in online mode and will be valid for the current admission year only. JEE Main ranks will be used for admissions to  UG engineering programmes offered by 31 NITs, 25 IIITs and 28 CFTIs in addition to admission in states like Odisha, Madhya Pradesh, Haryana, Uttarakhand, Punjab, Bihar, Jharkhand and Nagaland and many other private universities and institutes. JEE Main is held twice a year. Candidates can appear for both and the better of the two scores will be considered for ranking purposes. About 8,69,010 candidates appeared for the January session of JEE Main which was held from January 6 to 9 in 570 exam centres. 9 students scored 100 percentile as per the JEE Main result (January) for Paper I which was declared on January 17. The result for Paper 2 was announced on January 23.</p>
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
import ExamNotification from './ExamNotification'
export default {
  components: { ExamNotification, },
}
</script>
