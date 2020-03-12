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
                <span class="subtitle-1 font-weight-light white--text">Question 1 - Single choice question</span>
                <v-spacer></v-spacer>
                <div class="subtitle-1 white--text right">
                  <v-icon class="white--text">bookmark_outline</v-icon>
                  <span class="font-weight-light">Mark for review</span>
                </div>
              </v-card-title>

              <v-card-text class="subtitle-2 right overflow-y-auto mt-4" style="max-height: 25vh" id="question" >                
                <p v-for="block in quiz" v-bind:key="block._id"> {{quiz[0].question}} </p>
              </v-card-text>

              <v-card-text class="overflow-y-auto" style="max-height: 35vh">
                <v-container fluid>
                  <v-radio-group small column>
                    <v-radio class="subtitle-2" label="A) 1m/s" value="1"></v-radio>
                    <v-radio class="subtitle-2" label="B) 5m/s" value="2"></v-radio>
                    <v-radio class="subtitle-2" label="C) 10m/s" value="3"></v-radio>
                    <v-radio class="subtitle-2" label="D) 15m/s" value="4"></v-radio>
                  </v-radio-group>
                </v-container>
              </v-card-text>

              <v-card-actions class="card-action">
                <v-btn class="white primary--text">Previous</v-btn>
                <v-btn class="white primary--text">Clear Slection</v-btn>
                <v-spacer></v-spacer>
                <v-btn class="primary">Save and Next</v-btn> 
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

              <v-card-text class="subtitle-2 right overflow-y-auto mt-4" id="question" style="max-height: 25vh">
                <div class="status-icon marked-for-review pallet">
                  <span>1</span>
                </div>
                <div class="status-icon marked-for-review pallet">
                  <span>1</span>
                </div>
                <div class="status-icon marked-for-review pallet">
                  <span>1</span>
                </div>
                <div class="status-icon marked-for-review pallet">
                  <span>1</span>
                </div>
                <div class="status-icon marked-for-review pallet">
                  <span>1</span>
                </div>
                <div class="status-icon marked-for-review pallet">
                  <span>1</span>
                </div>
                <div class="status-icon marked-for-review pallet">
                  <span>1</span>
                </div>
                <div class="status-icon marked-for-review pallet">
                  <span>1</span>
                </div>
                <div class="status-icon marked-for-review pallet">
                  <span>1</span>
                </div>
                <div class="status-icon marked-for-review pallet">
                  <span>1</span>
                </div>  
                <div class="status-icon not-answered pallet">
                  <span>2</span>
                </div>
                <div class="status-icon answered-and-marked-for-review pallet">
                  <div class="ans-review-tick">
                    <div class="status-icon-img-review-tick material-icons white-text">done</div>
                  </div>
                  <span>3</span>
                </div>
                <div class="status-icon answered pallet">
                  <span>4</span>
                </div>
                <div class="status-icon not-visited pallet">
                  <span>5</span>
                </div>
              </v-card-text>

              <v-card-text class="subtitle-2 right overflow-y-auto mt-4" id="question-stats">
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
                    <div class="status-icon answered-and-marked-for-review">
                      <div>0</div>
                      <div class="ans-review-tick">
                        <div class="status-icon-img-review-tick material-icons white-text">done</div>
                      </div>
                    </div>
                    <div class="status-label">Answered and Marked for Review</div>
                  </v-flex>

                  <div class="divider"></div>
                </v-layout>
              </v-card-text>

            </v-card>
          </v-container>

        </v-flex>
      </v-layout>
    </v-container>
</template>

<style lang="scss">
  .status-icon .ans-review-tick {
  background: #3abb9c;
  width: 14px;
  height: 14px;
  border: 2px solid #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.status-icon.answered-and-marked-for-review, .status-icon.marked-for-review {
  background-color: #5960b7;
}
.pallet {
  float: left;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
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
  height: 30px;
  width: 30px;
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
.status-icon-img-review-tick {
  object-fit: contain;
  font-size: 0.9rem;
}

.status-icon.marked-for-review {
  background-color: #5960b7;
  color: white;
}

.status-icon.answered-and-marked-for-review {
  background-color: #5960b7;
  color: white;
}

.status-icon.answered {
  background-color: green;
  color: white;
}

.status-icon.not-answered {
  background-color: red;
  color: white;
}

.status-icon.not-visited {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

</style>

<script>
export default {
    data (){
        return{
            exam_name:'JEE Advanced 2020',
            timerCount: '',
            expire_date: new Date("Mar 12, 2020 17:37:25").getTime(),
            quiz: [
              {
                "solution": {
                  "images": [],
                  "solution": ""
                },
                "marking": {
                  "correct": "4",
                  "incorrect": "-2"
                },
                "mcqma": true,
                "numericalAnswers": [],
                "numericalAnswerType": "Range",
                "_bonus": false,
                "images": [],
                "options": [
                  {
                    "_onlyImage": false,
                    "_correct": true,
                    "option": "If 𝐼₁ = 𝐼₂, then 𝐵⃗⃗ cannot be equal to zero at the origin (0, 0, 0)",
                    "_id": "5b0520933daddf758d480a63"
                  },
                  {
                    "_onlyImage": false,
                    "_correct": true,
                    "option": "If 𝐼₁ > 0 and 𝐼₂ < 0, then 𝐵⃗⃗ can be equal to zero at the origin (0, 0, 0)",
                    "_id": "5b0520933daddf758d480a62"
                  },
                  {
                    "_onlyImage": false,
                    "_correct": false,
                    "option": "If 𝐼₁ < 0 and 𝐼₂ > 0, then 𝐵⃗⃗ can be equal to zero at the origin (0, 0, 0)",
                    "_id": "5b0520933daddf758d480a61"
                  },
                  {
                    "_onlyImage": false,
                    "_correct": true,
                    "option": "If 𝐼₁ = 𝐼₂, then the 𝑧-component of the magnetic field at the centre of the loop is (−𝜇₀ 𝐼/2𝑅)",
                    "_id": "5b0520933daddf758d480a60"
                  }
                ],
                "type": "mcq",
                "question": "Two infinitely long straight wires lie in the 𝑥𝑦-plane along the lines 𝑥 = ±𝑅. The wire located at 𝑥 = +𝑅 carries a constant current 𝐼1 and the wire located at 𝑥 = −𝑅 carries a constant current 𝐼₂. A circular loop of radius 𝑅 is suspended with its centre at (0, 0, √3𝑅) and in a plane parallel to the 𝑥𝑦-plane. This loop carries a constant current 𝐼 in the clockwise direction as seen from above the loop. The current in the wire is taken to be positive if it is in the +𝑗̂direction. Which of the following statements regarding the magnetic field 𝐵⃗⃗ is (are) true?",
                "_id": "5b0520933daddf758d480a5f"
              }
            ]
        }
    }    
}
</script>