<template>
    <div class="primary">
      <v-container>
        <v-layout rows id="exam-info">
          <v-flex xs12 md8 class="pl-0 ml-0">
            <v-tabs class="mx-auto"
            background-color="transparent"
            color="accent"
            >
              <v-tab class="caption">Chemistry<v-icon>info</v-icon></v-tab>
              <v-tab class="caption">Physics<v-icon>info</v-icon></v-tab>
              <v-tab class="caption">Mathematics<v-icon>info</v-icon></v-tab>
            </v-tabs>
          </v-flex>
          <v-flex xs12 md4>
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
                  <v-spacer></v-spacer>
                  <div class="subtitle-1 center">
                    <i class="material-icons vertical-align-middle padding-bottom-3 accent--text" v-on:click="reviewSwap()">{{ (attempt2[question_no].class === 'marked-for-review') ? 'bookmark': 'bookmark_outline' }}</i>
                    <span class="subtitle-1 hidden-xs-only">Mark for review</span>
                  </div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="subtitle-2 right overflow-y-auto mt-4" style="height: 25vh" id="question" >                
                  <p> {{question_object.question}} </p>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="overflow-y-auto" style="height: 30vh">  
                  <v-container fluid>
                    <div style="width: 100%;" class="radio-toolbar mb-4" v-for="(item, index) in question_object.options" v-bind:key="item._id">

                        <input type="radio" class="accent--text" :id='index' name="radio" :value='index' v-model="attempt2[question_no].answer">
                        <label style="font-weight: 500;width: 100%;" :for='index'><strong>{{String.fromCharCode(index+65) +") "}}</strong>{{item.option}}</label>

                            <!-- <i class="icon material-icons">done</i> -->
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
                <v-card-text class="subtitle-2 right overflow-y-auto mt-0" id="question" style="height: 30vh">
                  <div v-on:click="selectQuestion(block)" v-for="block in attempt2" v-bind:key="block.id" class="status-icon pallet" v-bind:class="[block.class, block.selected ? 'current-question': '']"> 
                    <span>{{block.id+1}}</span>
                    <div class="ans-and-review" v-if="block.class === 'marked-for-review' && block.answer !== ''">
                      <div class="status-icon-ans-and-review material-icons white-text">assignment</div>
                    </div>
                  </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="subtitle-2 right overflow-y-auto" id="question-stats" style="height: 35vh">
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
    </div>
</template>

<style lang="scss">

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar label {
    display: inline-block;
    background-color: var(--v-secondary-text-base);
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border: 2px solid var(--v-secondary-base);
    border-radius: 4px;
}

.radio-toolbar input[type="radio"]:checked + label {
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

import json from '@/assets/data.json';

export default {
    data (){
      return{
        question_no: '',
        exam_details: json,
        exam_name:'JEE Advanced 2020',
        timerCount: '',
        expire_date: new Date("Mar 12, 2020 17:37:25").getTime(),
        attempt2: '',
        saveData: '',
      }
    },
    beforeMount(){
      this.initialize()
    },
    methods: {
      
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      },
      // isMobile: function() {
      //   var check = false;
      //   (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      //   return check;
      // },
      initialize: function(){
        // localStorage.removeItem("question_status");
        // localStorage.removeItem("saveData");
        this.attempt2 = JSON.parse(localStorage.getItem("question_status"));
        var saveData = JSON.parse(localStorage.getItem("saveData"));
        if(!Array.isArray(this.attempt2)) {
          this.attempt2 = [];
          for (var i = 0; i < json.length; i++) {
            this.attempt2.push({id:i, selected: false ,marked_for_review: false, answer: '', class:"not-visited",code:3});
          }
          if(saveData===null) {
            this.question_no = 0;
            saveData = {"saveData": this.question_no}
            localStorage.setItem("question_status", JSON.stringify({"saveData": this.question_no}));
          }
        }
        else{
          if(saveData===null) {
            this.question_no = 0;
            saveData = {"saveData": this.question_no}
            localStorage.setItem("question_status", JSON.stringify({"saveData": this.question_no}));
          }
          else{
            this.question_no = saveData.current_question;
            this.attempt2[0].selected = false;
            this.attempt2[this.question_no].selected = true;
          }
        }
        localStorage.setItem("question_status", JSON.stringify(this.attempt2));

      },
      nextQuestion: function () {
        this.updateResponse();
        if(this.question_no >= json.length - 1){
          alert('That was the last question!');
          return;
        } 
        
        this.question_no++;
        this.attempt2[this.question_no].selected = true;
        this.saveData = {"current_question": this.question_no};
        localStorage.setItem("current_question", JSON.stringify(this.saveData));
        localStorage.setItem("question_status", JSON.stringify(this.attempt2));
      },
      prevQuestion: function () {
        this.updateResponse();
        if(this.question_no == 0){
          alert('There is no question zero, index starts with one here ;p');
          return;
        }        
        this.question_no--;
        this.attempt2[this.question_no].selected = true;
        this.saveData = {"current_question": this.question_no};
        localStorage.setItem("current_question", JSON.stringify(this.saveData));
        localStorage.setItem("question_status", JSON.stringify(this.attempt2));
      },
      selectQuestion: function(block) {
        this.updateResponse();
        this.question_no = block.id;
        block.selected = true;
        this.saveData = {"current_question": this.question_no};
        localStorage.setItem("current_question", JSON.stringify(this.saveData));
        localStorage.setItem("question_status", JSON.stringify(this.attempt2));
      },
      reviewSwap: function () {
        this.attempt2[this.question_no].marked_for_review = !this.attempt2[this.question_no].marked_for_review;
        this.updateResponse();
      },
      updateResponse: function() {
        
        this.attempt2[this.question_no].selected = false;
        if(this.attempt2[this.question_no].answer === '' && this.attempt2[this.question_no].marked_for_review){
          this.attempt2[this.question_no].class = 'marked-for-review';
        }
        else if(this.attempt2[this.question_no].answer !== '' && this.attempt2[this.question_no].marked_for_review){
          this.attempt2[this.question_no].class = 'marked-for-review';
        }
        else if(this.attempt2[this.question_no].answer === ''){
          this.attempt2[this.question_no].class = 'not-answered';
        }
        else {
          this.attempt2[this.question_no].class = 'answered';
        }
        console.log(this.saveData.current_question);
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