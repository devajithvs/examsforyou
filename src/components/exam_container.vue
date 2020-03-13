<template >
    <v-container>
      <v-layout rows id="exam-info">
        <v-flex xs12 md8>
          <v-tabs
          background-color="transparent"
          color="accent"
          
          >
            <v-tab class="caption">Chemistry<v-icon>info</v-icon></v-tab>
            <v-tab class="caption">Physics<v-icon>info</v-icon></v-tab>
            <v-tab class="caption">Mathematics<v-icon>info</v-icon></v-tab>
          </v-tabs>
        </v-flex>
        <v-flex  xs12 md4>
          <v-container>
            <a class="primary_text--text text-center hidden-sm-and-down pr-5"><v-icon small class="accent--text">assignment</v-icon>&nbsp;Instructions</a>
            <a class="primary_text--text hidden-sm-and-down"><v-icon small class="accent--text">book</v-icon>&nbsp;Question Paper</a>
          </v-container>
        </v-flex>
          
        
      </v-layout>
      <v-layout row>
        <v-flex xs12 md8>
          <v-container id="question">
            <v-card class="mx-auto">
              
              <v-card-title class="primary">
                <span class="subtitle-1 text-xs-center justify-center">Question {{question_no + 1}} - Single choice question</span>
                <v-spacer class="hidden-xs-only"></v-spacer>
                <div class="subtitle-1 center">
                  <v-icon class="accent--text" v-on:click="reviewSwap()">{{ (attempt2[question_no].code === 4 || attempt2[question_no].code === 5) ? 'bookmark': 'bookmark_outline' }}</v-icon>
                  <span class="subtitle-1">Mark for review</span>
                </div>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="subtitle-2 right overflow-y-auto mt-4" style="height: 25vh" id="question" >                
                <p> {{question_object.question}} </p>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text class="overflow-y-auto" style="height: 30vh">  
                <v-container fluid>
                  
                  <div style="width: 100%;" class="pretty p-icon p-round p-smooth mb-3" v-for="(item, index) in question_object.options" v-bind:key="item._id">
                      <input type="radio" name="radio1" :value='index' v-model="attempt2[question_no].answer">
                      <div class="state p-success">
                          <i class="icon material-icons">done</i>
                          <label>{{String.fromCharCode(index+65) +") "+item.option}}</label>
                      </div>
                  </div>            
                  
                </v-container>
              </v-card-text>

              <v-card-actions class="primary card-action">
                <v-btn v-on:click="prevQuestion()" class="secondary primary--text">Previous</v-btn>
                <v-btn v-on:click="clearSelection()" class="secondary primary--text">Clear Slection</v-btn>
                <v-spacer></v-spacer>
                <v-btn v-on:click="nextQuestion()" class="success white--text">Next</v-btn> 
              </v-card-actions>

            </v-card>
          </v-container>
        </v-flex>
        <v-flex xs12 md4>
          <v-container id="question">
            <v-card class="mx-auto">
              
              <v-card-title class="primary">
                <span class="subtitle-1">CHEMISTRY (30)</span>
                <v-spacer></v-spacer>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="subtitle-2 right overflow-y-auto mt-4" id="question" style="height: 20vh">
                <div v-on:click="selectQuestion(block.id)" v-for="block in attempt2" v-bind:key="block.id" class="status-icon pallet" v-bind:class="{'current-question': (block.id === question_no), 'answered': (block.code === 1), 'not-answered': (block.code === 2), 'not-visited': (block.code === 3), 'marked-for-review': (block.code === 4 || block.code === 5)}">
                  <span>{{block.id+1}}</span>
                  <div class="ans-and-review" v-if="block.code === 5">
                    <div class="status-icon-ans-and-review material-icons white-text">assignment</div>
                  </div>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="subtitle-2 right overflow-y-auto mt-4" id="question-stats" style="height: 35vh">
                <v-layout rows id="exam-info" wrap>
                  <v-flex md6 class="status-container">
                    <div class="status-icon answered">
                      <div class="status-icon-text">0</div>
                    </div>
                    <div class="status-label">Answered</div>
                  </v-flex>

                  <v-flex md6 class="status-container">
                    <div class="status-icon not-answered">
                      <div class="status-icon-text">0</div>
                    </div>
                    <div class="status-label">Not Answered</div>
                  </v-flex>

                  <v-flex md6 class="status-container">
                    <div class="status-icon not-visited">
                      <div class="status-icon-text">0</div>
                    </div>
                    <div class="status-label">Not Visited</div>
                  </v-flex>

                  <v-flex md6 class="status-container">
                    <div class="status-icon marked-for-review">
                      <div class="status-icon-text">0</div>
                    </div>
                    <div class="status-label">Marked for Review</div>
                  </v-flex>

                  <v-flex md12 class="status-container">
                    <div class="status-icon marked-for-review">
                      <div>0</div>
                      <div class="ans-and-review">
                        <div class="status-icon-ans-and-review material-icons white-text">assignment</div>
                      </div>
                    </div>
                    <div class="status-label">Answered and Marked for Review</div>
                  </v-flex>
                </v-layout>
              </v-card-text>

            </v-card>
          </v-container>

        </v-flex>
      </v-layout>
    </v-container>
</template>

<style lang="scss">

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

import json from '@/assets/data.json';
localStorage.removeItem("question_status");
var question_status = JSON.parse(localStorage.getItem("question_status"));
var current_question = JSON.parse(localStorage.getItem("current_question"));
if(!Array.isArray(question_status)) {
  question_status = [];
  for (var i = 0; i < json.length; i++) {
    question_status.push({id:i, marked_for_review: false, answer: '', code:3});
    console.log(i);
  } 
}
var question_no;
if(!Array.isArray(current_question)) {
  question_no= 1-1;
}
else{
  question_no= current_question.current_question;
}
console.log(question_status);
localStorage.setItem("question_status", JSON.stringify(question_status));
export default {
    data (){
      return{
        question_no: question_no,
        exam_details: json,
        exam_name:'JEE Advanced 2020',
        timerCount: '',
        expire_date: new Date("Mar 12, 2020 17:37:25").getTime(),
        attempt2: question_status,
        attempt: [
          {
            id: 0,
            code: 1,
            answer: '',
            marked_for_review: false,
          },
          {
            id:1,
            code:2,
            answer: '',
            marked_for_review: false,
          },
          {
            id:2,
            code:3,
            answer: '',
            marked_for_review: false,
          },
          {
            id:3,
            code:4,
            answer: '',
            marked_for_review: false,
          },
          {
            id:4,
            code:5,
            answer: '',
            marked_for_review: false,
          },
          {
            id:5,
            code:1,
            answer: '',
            marked_for_review: false,
          },
          {
            id:6,
            code:2,
            answer: '',
            marked_for_review: false,
          },
          {
            id:7,
            code:1,
            answer: '',
            marked_for_review: false,
          }
        ]
      }
    },
    methods: {
      
      nextQuestion: function () {
        // alert('Hello ' + this.name + '!')
        // alert(event.target.tagName)
        this.updateResponse();
        this.question_no++;
        current_question = {"current_question": this.question_no};
        localStorage.setItem("current_question", JSON.stringify(current_question));
      },
      prevQuestion: function () {
        this.updateResponse();
        if(this.question_no == 0){
          alert('There is no question zero. Index starts with one here ;p');
          return;
        }        
        this.question_no--;
        current_question = {"current_question": this.question_no};
        localStorage.setItem("current_question", JSON.stringify(current_question));
      },
      selectQuestion: function (param) {
        this.updateResponse();
        
        this.question_no = param;
        current_question = {"current_question": this.question_no};
        localStorage.setItem("current_question", JSON.stringify(current_question));
      },
      reviewSwap: function () {
        this.attempt2[this.question_no].marked_for_review = !this.attempt2[this.question_no].marked_for_review;
        this.updateResponse();
      },
      updateResponse: function() {
        if(this.attempt2[this.question_no].answer === '' && this.attempt2[this.question_no].marked_for_review){
          this.attempt2[this.question_no].code = 4;
        }
        else if(this.attempt2[this.question_no].answer !== '' && this.attempt2[this.question_no].marked_for_review){
          this.attempt2[this.question_no].code = 5;
        }
        else if(this.attempt2[this.question_no].answer === ''){
          this.attempt2[this.question_no].code = 2;
        }
        else {
          this.attempt2[this.question_no].code = 1;
        }
        console.log(this.attempt2[this.question_no].answer);
      },
      clearSelection: function(){
        this.attempt2[this.question_no].answer = '';
      }
    },
    computed:  {
      question_object: function(){
        return this.exam_details[this.question_no].questions[0]
      },
    },
}
</script>