<template>
    <div class="primary" id="primary">
      <v-container>
        <v-layout rows id="exam-info">
          <v-flex xs12 md8 class="pl-0 ml-0">
            <v-tabs 
            class="mx-auto"
            background-color="transparent"
            color="accent"
            v-model="current_section"
            >
              <v-tab class="caption" v-for="item in exam_sections" v-bind:key="item.section_code">{{item.name}}<v-icon>info</v-icon></v-tab>
            </v-tabs>
          </v-flex>

          <v-flex xs12 md4>
            <v-container>
              <a class="primary_text--text text-center hidden-sm-and-down pr-5"><v-icon small class="accent--text">assignment</v-icon>&nbsp;Instructions</a>
              <a class="primary_text--text hidden-sm-and-down"><v-icon small class="accent--text">book</v-icon>&nbsp;Question Paper</a>
            </v-container>
          </v-flex>  
          
        </v-layout>
        
        <v-tabs-items v-model="current_section">
          <v-tab-item :transition="false" :reverse-transition="false"
          v-for="(item, index) in exam_sections"
          :key="index"
          >
            <v-layout row>
              <v-flex xs12 md8>
                <v-container id="examStatus">
                  <v-card class="mx-auto">
                    
                    <v-card-title class="navbar">
                      <span class="subtitle-1 text-xs-center justify-center">Question {{question_no[current_section] + 1}} - Single choice question</span>
                      <v-spacer></v-spacer>
                      <div class="subtitle-1 center">
                        <i class="material-icons vertical-align-middle padding-bottom-3 accent--text" title="Bookmark" v-on:click="reviewSwap">{{userAttemptsData[current_section][question_no[current_section]].marked_for_review ? 'bookmark': 'bookmark_outline'}}</i>
                        <span class="subtitle-1 hidden-xs-only">Mark for review</span>
                      </div>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="subtitle-2 right overflow-y-auto mt-4" style="height: 25vh" id="question" >                
                      <p> {{exam_sections[current_section].questions[question_no[current_section]].question}} </p>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text class="overflow-y-auto" style="height: 30vh">
                      <v-container fluid>
                        
                        <div style="width: 100%;" v-for="(option, index) in exam_sections[current_section].questions[question_no[current_section]].options" v-bind:key="option.id"> 
                        <!-- class="radio-toolbar mb-4"> -->
                          <input type="checkbox" class="accent--text" v-bind:key="index" name="radio" v-bind:value="index" v-model="answer">
                          <label :for='index' style="font-weight: 500;width: 100%;" v-bind:style="[isMobile ? 'font-size: 12px;' : 'font-size: 16px;' ]" ><strong>{{String.fromCharCode(index+65) +") "}}</strong>{{option.option}}</label>
                        </div>            
                        
                      </v-container>
                    </v-card-text>
                    

                    <v-card-actions class="primary card-action pt-4" v-if="!isMobile">
                      <v-btn v-on:click="prevQuestion()" class="secondary primary--text">Previous</v-btn>
                      <v-btn v-on:click="clearSelection()" class="secondary primary--text">Clear Slection</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn v-on:click="nextQuestion()" class="success white--text">Next</v-btn> 
                    </v-card-actions>
                    <v-card-actions class="primary card-action pt-4" v-else>
                      <v-btn small v-on:click="prevQuestion()" class="secondary primary--text" style="height:5vh;">Previous</v-btn>
                      <v-btn small v-on:click="clearSelection()" class="secondary primary--text" style="height:5vh;">Clear Slection</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn small v-on:click="nextQuestion()" class="success white--text" style="height:5vh;">Next</v-btn> 
                    </v-card-actions>


                  </v-card>
                </v-container>
              </v-flex>
              <v-flex xs12 md4>
                <v-container id="status" class=" hidden-sm-and-down">
                    <Status/>
                </v-container>

              </v-flex>
            </v-layout>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </div>
</template>

<style lang="scss">

// .radio-toolbar
//  input {
//   // opacity:0;
//    position:absolute; left:9999px;
// }

.radio-toolbar label {
    display: inline-block;
    background-color: var(--v-secondary-text-base);
    padding: 10px 20px;
    border: 2px solid var(--v-secondary-base);
    border-radius: 4px;
}

.radio-toolbar input:checked + label {
    background-color: var(--v-success-base);
    border-color: var(--v-complementary-base);
}


.v-slide-group__prev {
display: none !important;
}

.vertical-align-middle { 
  vertical-align: middle; 
}

.padding-bottom-3 {
  padding-bottom: 3px;
}

body{
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.status-icon .ans-and-review {
  background: var(--v-success-base);
  width: 15px;
  height: 15px;
  border: 2px solid #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pallet {
  cursor:pointer;
  float: left;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.status-label {
  
  margin-left: 8px;
  font-size: 14px;
  color: var(--v-secondary-base);
  font-weight: 400;
  line-height: normal;
  text-align: left;
  display: inline-flex;
  flex-direction: column;
}
.status-icon {
  height: 35px;
  width: 35px;
  position: relative;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.status-container {
  display: flex;
  align-items: center;
  padding: 1.5rem 0 0;
}
.status-icon-ans-and-review {
  object-fit: contain;
  font-size: 0.6rem;
  position: relative;
  bottom: 0;
  right: -0.7px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status-icon.marked-for-review {
  background-color: var(--v-review-base);
  color: #fff;
}

.status-icon.answered {
  // background-color: #63d1b4;
  background-color: var(--v-success-base);
  color: #fff;
}

.status-icon.not-answered {
  background-color: var(--v-error-base);
  color: #fff;
}

.status-icon.not-visited {
  color: #1b1b1b;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

.status-icon.current-question {
  border: 2px solid #fff;
  box-shadow: 0 0 8px 2px rgba(0,0,0,.25);
}
</style>


<script>
 /*Other component*/
import Status from './exam_status'
import {mapState} from 'vuex'

export default {
    components: { Status },
    data(){
      return{
      }
    },
    beforeMount(){
      this.initialize()
    },
    computed: {
      answer: {
        get () {
          return this.$store.state.store.userAttemptsData[this.$store.state.store.current_section][this.$store.state.store.question_no[this.$store.state.store.current_section]].answer
        },
        set (value) {
          if (value.length > 1){
            value.shift();
          }
          this.$store.commit('setOption', value)
          this.updateResponse();
        }
      },
      current_section: {
        get () {
          return this.$store.state.store.current_section
        },
        set (value) {
          this.$store.commit('changeSection', value)
          this.$store.commit('selectCurrentQuestion');
          this.updateResponse();
        }
      },
      ...mapState({
        exam_sections: state => state.store.exam_sections,
        question_no: state => state.store.question_no,
        userAttemptsData: state => state.store.userAttemptsData,
      })
    },
    methods: {
      nextQuestion: function () {
        this.$store.commit('deselectCurrentQuestion');
        if(this.question_no[this.current_section] >= this.userAttemptsData[this.current_section].length - 1) {
          if(this.current_section >= this.exam_sections.length - 1){
            alert('That was the last question!');
            return;
          }
          else {
            this.$store.commit('incrementSection');
            this.$store.commit('selectCurrentQuestion');
            this.updateResponse();
          }
        }
        else {
          this.$store.commit('incrementQuestion');
        }
        this.$store.commit('selectCurrentQuestion');
        this.updateResponse();
        localStorage.setItem("question_no", JSON.stringify(this.question_no));
        localStorage.setItem("question_status", JSON.stringify(this.userAttemptsData));
      },
      prevQuestion: function () {
        this.$store.commit('deselectCurrentQuestion');
        if(this.question_no[this.current_section] == 0){
          if(this.current_section <= 0){
            alert('There is no question zero, index starts with one here ;p');
            return;
          }
          else{
            this.$store.commit('decrementSection');
            this.$store.commit('selectCurrentQuestion');
            this.updateResponse();
          }         
        }
        else{
          this.$store.commit('decrementQuestion');
        }
        this.$store.commit('selectCurrentQuestion');
        this.updateResponse();
        localStorage.setItem("question_no", JSON.stringify(this.question_no));
        localStorage.setItem("question_status", JSON.stringify(this.userAttemptsData));
      },

      reviewSwap: function () {
        this.$store.commit('reviewSwap')
        this.updateResponse();

      },
      clearSelection: function(){
        this.$store.commit('clearSelection')
        this.updateResponse();
      }
    },
}
</script>