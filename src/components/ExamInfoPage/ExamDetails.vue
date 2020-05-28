<template>
    <div class="primary" id="primary">
      <div class="primary_text">
        <v-container>
          <v-row align="center">
            <v-col cols="12">
              <v-row justify="center" align="center" class="mt-10 mb-3">
                <span class="exam-name display-2 primary--text text-truncate" id="exam-name">JEE MAIN EXAM</span>
              </v-row>
              <v-row justify="center" align="center ml-3 mb-2">
                <span class="exam-name text-truncate"><a class="" href="http://nta.ac.in/Engineeringexam">http://nta.ac.in/Engineeringexam</a></span>
              </v-row>
              <v-row align="center my-5">
                <span class="exam-name primary--text">Joint Entrance Examination (Main) is conducted for admission to B.E/B.Tech and B.arch programs in NITs, IIITs and other Centrally Funded Technical Institutions etc. NTA will be organizing JEE Main from the year 2019. The exam was being conducted by the CBSE until 2018 earlier. JEE Main will be held twice a year in January and April in online mode only.Around 130000 students compete for 11000 seats every year. </span>
              </v-row>
            </v-col>
<!--             <v-spacer></v-spacer>
            <v-divider vertical/>
            <v-col lg="2">
              <span class="exam-name subtitle primary--text text-truncate">Conducted yearly</span>  
              <span class="exam-name subtitle primary--text text-truncate">Mode: online and offline</span>  
            </v-col> -->
          </v-row>
        </v-container>
      </div>
      <v-container>
        <v-row align="center" class="mt-0">
          <v-col lg="9" md="9" class="mt-0">
              <v-row class="primary mt-0" id="exam-info">
                <v-col class="mt-n9 mb-n3">
                  <v-tabs 
                  class="mx-auto"
                  background-color="transparent"
                  color="accent"
                  v-model="current_tab"
                  >
                    <v-tab class="subtitle-2 no-capitalization"
                      v-for="(item, index) in info_sections"
                      :key="index"
                      >{{item}}
                    </v-tab>
                  </v-tabs>
                </v-col>
              </v-row>
              <v-divider class="mt-0"/>
            
            <v-tabs-items class="mt-5" v-model="current_tab">
              <v-tab-item
              v-for="(item, index) in info_sections"
              :key="index"
              >
                <ExamNotification v-if="current_tab == 0"/>
                <ExamBlog v-if="current_tab == 1"/>
                <ExamPreviousPapers v-if="current_tab == 2"/>
                <ExamStudyMaterial v-if="current_tab == 3"/>
                <ExamFAQ v-if="current_tab == 4"/>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
          <v-col>
<!--             <Adsense
            </Adsense> -->
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<style lang="scss">
  @import '../../sass/exam.scss';

  .v-tab--active:hover::before, .theme--light.v-tabs .v-tab--active::before {
    opacity: 0 !important;
  }

  .v-tab:hover::before {
    opacity: 0 !important;
  }

  .no-hover-animation:hover::before {
    opacity: 0 !important;
  }
</style>


<script>
 /*Other component*/
import ExamNotification from './ExamNotification'
import ExamBlog from './ExamBlog'
import ExamPreviousPapers from './ExamPreviousPapers'
import ExamStudyMaterial from './ExamStudyMaterial'
import ExamFAQ from './ExamFAQ'
export default {
  components: { ExamNotification, ExamBlog, ExamPreviousPapers, ExamStudyMaterial, ExamFAQ },
  data() {
    return {
      current_tab : 0,
      info_sections : ["Exam Notifications", "Blog", "Attempt Previous Papers", "Study Material", "FAQs"],
    }
  }
}
</script>