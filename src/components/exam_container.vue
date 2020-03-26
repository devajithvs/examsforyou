<template>
    <div class="primary" id="primary">
      <v-container>
        <v-layout rows class="primary" id="exam-info">
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
            <v-layout row class="primary">
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
                    <v-card-text class="navbar subtitle-2 right overflow-y-auto pt-4" style="height: 25vh" id="question" >                
                      <p> {{exam_sections[current_section].questions[question_no[current_section]].question}} </p>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text class="navbar overflow-y-auto" style="height: 30vh">
                      <v-container fluid>
                        
                        <v-checkbox class="checkbox subtitle-2 ma-n2 pa-0"
                          v-model="answer"
                          color="success"
                          v-for="(option, index) in exam_sections[current_section].questions[question_no[current_section]].options" v-bind:key="option.id"
                          :label="`${String.fromCharCode(index+65)}) ${option.option}`"
                          :value="index"
                        ></v-checkbox>
                      </v-container>
                    </v-card-text>
                    
                    <v-divider></v-divider>

                    <v-card-actions class="navbar card-action pt-4" v-if="!isMobile">
                      <v-btn v-on:click="prevQuestion()" class="secondary primary--text">Previous</v-btn>
                      <v-btn v-on:click="clearSelection()" class="secondary primary--text">Clear Slection</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn v-on:click="nextQuestion()" class="success white--text">Next</v-btn> 
                    </v-card-actions>
                    <v-card-actions class="navbar card-action pt-4" v-else>
                      <v-btn small v-on:click="prevQuestion()" class="secondary primary--text" style="height:5vh;">Previous</v-btn>
                      <v-btn small v-on:click="clearSelection()" class="secondary primary--text" style="height:5vh;">Clear Slection</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn small v-on:click="nextQuestion()" class="success white--text" style="height:5vh;">Next</v-btn> 
                    </v-card-actions>
                  </v-card>
                </v-container>
              </v-flex>
              <v-flex xs12 md4>
                <v-container id="status" class="hidden-sm-and-down">
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
  @import '../sass/exam.scss';
</style>


<script>
 /*Other component*/
 import {mapState} from 'vuex'
import Status from './exam_status'
import UpdateResponse from '../mixins/updateResponse'

export default {
  mixins: [UpdateResponse],
  components: { Status },
  data(){
    return{
    }
  },
  computed: {
      answer: {
        get () {
          return this.$store.state.store.userAttemptsData[this.$store.state.store.sessionData.current_section][this.$store.state.store.sessionData.question_no[this.$store.state.store.sessionData.current_section]].answer
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
          return this.$store.state.store.sessionData.current_section
        },
        set (value) {
          this.$store.commit('changeSection', value)
          this.$store.commit('selectCurrentQuestion');
          this.updateResponse();
        }
      },
      ...mapState({
        exam_sections: state => state.store.exam_sections,
        question_no: state => state.store.sessionData.question_no,
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