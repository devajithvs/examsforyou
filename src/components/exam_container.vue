<template>
  <div class="exam_grid width-80 container mt-5">
    <div class="exam-question-container">
      <div class="tabs gray-2">
          <a class="tab-element cursor-pointer font-bold font-15 hover-darker" 
          v-for="item in exam_sections"
          v-bind:key="item.section_code"
          @click="current_section = item.section_code"
          :class="current_section==item.section_code ? 'selected' : ''"
          >
            {{item.name}}
          </a>
      </div>
      <div class="card bg-white">
        <div class="container mt-1 mb-1 flex space-between">
          <span class="text-center justify-center">Question {{question_no[current_section] + 1}} - Single choice question</span>
          <span class="subtitle-1 hidden-xs-only">Mark for review</span>
        </div>
        <div class="divider-horizontal"></div> 
        <div class="container question mt-1 mb-1" style="height: 25vh">
          <p> {{question_no[current_section] + 1}}) {{exam_sections[current_section].questions[question_no[current_section]].question}} </p>
        </div>
        <div class="divider-horizontal"></div> 

        <div class="container question mt-1 mb-1">
          <div class="radio-container font-15 max-width-90 gray-1 mt-1 ml-1"
          v-for="(option, index) in exam_sections[current_section].questions[question_no[current_section]].options" v-bind:key="option.id">
            <input type="radio" :checked="answer = index" :value="index" id="index" name="sort-order">
            <label for="date-option">{{String.fromCharCode(index+65)}}) {{option.option}}</label>
          </div>
        </div>
        <div class="divider-horizontal"></div> 
        
        <div class="container mt-3 mb-1 flex space-between">
          <div class="">
            <button v-on:click="prevQuestion()" class="button bg-gray-2 mr-3 height-3">
              <span class="font-bold font-18">Previous</span>
            </button>
            <button v-on:click="clearSelection()" class="button bg-gray-2 ml-2 height-3">
              <span class="font-bold font-18">Clear Selection</span>
            </button>
          </div>
          <button v-on:click="nextQuestion()" class="button success height-3">
            <span class="font-bold font-18">Next</span>
          </button>
        </div>
      </div>
    </div>
    <Status/>
  </div>
</template>

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