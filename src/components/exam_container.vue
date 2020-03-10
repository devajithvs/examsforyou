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

              <v-card-text class="subtitle-2 right overflow-y-auto mt-4" id="question" style="max-height: 25vh">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque numquam quae rerum et, incidunt hic, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed temporibus, suscipit ipsa voluptatum maiores unde quis consequuntur at voluptatem. Maiores quos sed fuga hic iure voluptatibus ipsam explicabo. Rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit ad nobis ducimus odio consequatur ea velit natus corrupti mollitia! Nemo, illo perspiciatis culpa maiores doloribus voluptatum aperiam doloremque rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate magnam atque inventore nesciunt quod. Quasi iste dolores molestias excepturi perspiciatis, cupiditate minima molestiae repellat ratione a culpa, nisi temporibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, reiciendis? Libero, ipsam ducimus magni, repudiandae minus aut harum quod enim vel dignissimos sequi similique odit maxime illum quibusdam aliquam dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequatur ullam consectetur dolor. Maxime at saepe sapiente voluptas quidem itaque ea tempora, sint modi amet, nisi voluptate aliquid, aperiam nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aut ipsum voluptatem. Dolor, deleniti? Exercitationem rerum nostrum, sunt, reprehenderit reiciendis consequuntur, doloremque distinctio velit provident voluptas itaque voluptatibus placeat expedita. corporis impedit pariatur cupiditate velit reprehenderit illum nam? Beatae nisi sequi ut vitae quis? Cras nec enim ut nunc pellentesque dapibus efficitur non sapien. Nunc at elementum ipsum. Fusce luctus sem eget nibh sodales, at ullamcorper diam rhoncus. Sed risus felis, vo. A block of mass m = 1 kg moving on a horizontal surface with speed on the block in this range is inversely proportional to x over this range, the final kinetic energy and speed . The retarding force   enters a rough patch ranging from I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </v-card-text>

              <v-card-text class="overflow-y-auto" style="max-height: 35vh">
                <v-container fluid>
                  <v-radio-group small v-model="column" column>
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

              <div class="card-content question-buttons" id="question">
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
              </div>

              <div class="card-content question-stats" id="question-stats">
              <div class="row">

                <div class="col l6 status-container">
                  <div class="status-icon answered">
                    <div class="status-icon-text">0</div>
                  </div>
                  <div class="status-label">Answered</div>
                </div>

                <div class="col l6 status-container">
                  <div class="status-icon not-answered">
                    <div class="status-icon-text">0</div>
                  </div>
                  <div class="status-label">Not Answered</div>
                </div>

                <div class="col l6 status-container">
                  <div class="status-icon not-visited">
                    <div class="status-icon-text">0</div>
                  </div>
                  <div class="status-label">Not Visited</div>
                </div>

                <div class="col l6 status-container">
                  <div class="status-icon marked-for-review">
                    <div class="status-icon-text">0</div>
                  </div>
                  <div class="status-label">Marked for Review</div>
                </div>

                <div class="col l12 status-container">
                  <div class="status-icon answered-and-marked-for-review">
                    <div>0</div>
                    <div class="ans-review-tick">
                      <div class="status-icon-img-review-tick material-icons white-text">done</div>
                    </div>
                  </div>
                  <div class="status-label">Answered and Marked for Review</div>
                </div>

                <div class="divider"></div>
              </div>
            </div>

            </v-card>
          </v-container>

        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
    data (){
        return{
            drawer: false
        }
    }
    
}
</script>