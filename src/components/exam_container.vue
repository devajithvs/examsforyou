<template>
    <v-container>
      <v-layout rows id="exam-info">
        <v-flex xs12 md8>
          <v-tabs>
            <v-tab class="caption">Chemistry<v-icon>info</v-icon></v-tab>
            <v-tab class="caption">Physics<v-icon>info</v-icon></v-tab>
            <v-tab class="caption">Mathematics<v-icon>info</v-icon></v-tab>
          </v-tabs>
        </v-flex>
        <v-flex xs12 md4>
          <v-container class="align-content-center">
            <a class="text-center hidden-sm-and-down pr-5">Instructions<v-icon small class="primary--text">assignment</v-icon></a>
            
            <a class="hidden-sm-and-down">Question Paper<v-icon small class="primary--text">book</v-icon></a>
          </v-container>
        </v-flex>
          
        
      </v-layout>
      <v-layout row>
        <v-flex xs12 md8>
          <v-container id="question">
            <v-card class="mx-auto">
              
              <v-card-title class="primary">
                <span class="subtitle-1 font-weight-light white--text">Question {{question_no + 1}} - Single choice question</span>
                <v-spacer></v-spacer>
                <div class="subtitle-1 white--text right">
                  <v-icon v-on:click="attempt[question_no].code = 4" class="white--text">bookmark_outline</v-icon>
                  <span class="font-weight-light">Mark for review</span>
                </div>
              </v-card-title>

              <v-card-text class="subtitle-2 right overflow-y-auto mt-4" style="height: 20vh" id="question" >                
                <!-- v-for="block in quiz" v-bind:key="block._id" -->
                <p> {{question_object.question}} </p>
              </v-card-text>

              <v-divider :inset="inset"></v-divider>

              <v-card-text class="overflow-y-auto" style="height: 35vh">  
                <v-container fluid>                   
                  <v-radio-group small column>
                    <v-radio class="subtitle-2"
                      v-for="(item, index) in question_object.options" v-bind:key="item._id"
                      :label="`${String.fromCharCode(index+65)}) ${item.option}`"
                      :value="index"
                    ></v-radio>
                  </v-radio-group>
                </v-container>
              </v-card-text>

              <v-card-actions class="card-action">
                <v-btn v-on:click="question_no --" class="white primary--text">Previous</v-btn>
                <v-btn class="white primary--text">Clear Slection</v-btn>
                <v-spacer></v-spacer>
                <v-btn v-on:click="question_no ++" class="primary">Next</v-btn> 
              </v-card-actions>

            </v-card>
          </v-container>
        </v-flex>
        <v-flex xs12 md4>
          <v-container id="question">
            <v-card class="mx-auto">
              
              <v-card-title class="primary">
                <span class="subtitle-1 font-weight-light white--text">CHEMISTRY (30)</span>
                <v-spacer></v-spacer>
              </v-card-title>

              <v-card-text class="subtitle-2 right overflow-y-auto mt-4" id="question" style="height: 20vh">
                <div v-on:click="question_no = block.id" v-for="block in attempt" v-bind:key="block.id" class="status-icon pallet" v-bind:class="{ 'current-question': (block.id === question_no), 'answered': (block.code === 1), 'not-answered': (block.code === 2), 'not-visited': (block.code === 3), 'marked-for-review': (block.code === 4 || block.code === 5)}">
                  <span>{{block.id+1}}</span>
                  <div class="ans-and-review" v-if="block.code === 5">
                    <div class="status-icon-ans-and-review material-icons white-text">assignment</div>
                  </div>
                </div>
              </v-card-text>
              <v-divider :inset="inset"></v-divider>
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
  background: #6ee5c5;
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
.status-icon.marked-for-review {
  background-color: #6d60b5;
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
  color: #000;
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
  background-color: #5960b7;
  color: white;
}

.status-icon.answered {
  background-color: #63d1b4;
  color: white;
}

.status-icon.not-answered {
  background-color: #ed5f5f;
  color: white;
}

.status-icon.not-visited {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

.status-icon.current-question {
  border: 2px solid #fff;
  box-shadow: 0 0 8px 2px
  rgba(0,0,0,.24);
}

</style>

<script>
import json from '@/assets/data.json'
export default {
    data (){
      return{
        question_no: 1-1,
        exam_details: json,
        exam_name:'JEE Advanced 2020',
        timerCount: '',
        expire_date: new Date("Mar 12, 2020 17:37:25").getTime(),
        attempt: [
          {
            id: 0,
            code: 1,
            answer: ''
          },
          {
            id:1,
            code:2,
            answer: ''
          },
          {
            id:2,
            code:3,
            answer: ''
          },
          {
            id:3,
            code:4,
            answer: ''
          },
          {
            id:4,
            code:5,
            answer: ''
          },
          {
            id:5,
            code:1,
            answer: ''
          },
          {
            id:6,
            code:2,
            answer: ''
          },
          {
            id:7,
            code:1,
            answer: ''
          }
        ]
      }
    },
    computed:  {
      question_object: function(){
        console.log(this.exam_details.length)
        return this.exam_details[this.question_no].questions[0]
      }
    }
}
</script>