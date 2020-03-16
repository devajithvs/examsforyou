<template>
    <v-card class="mx-auto">            
        <v-card-title class="navbar">
            <span class="subtitle-1">CHEMISTRY (30)</span>
            <v-spacer></v-spacer>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="subtitle-2 right overflow-y-auto mt-0" id="question" style="height: 30vh">
            <div v-on:click="selectQuestion(block)" v-for="block in store.userAttemptsData" v-bind:key="block.id" class="status-icon pallet" v-bind:class="[block.class, block.selected ? 'current-question': '']"> 
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
            </v-layout>
            <v-layout rows id="exam-info" wrap>
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
</template>

<script>
export default {
    
    methods: {
      selectQuestion: function(block) {
        this.updateResponse();
        this.store.question_no = block.id;
        block.selected = true;
        localStorage.setItem("question_no", JSON.stringify(this.store.question_no));
        localStorage.setItem("question_status", JSON.stringify(this.store.userAttemptsData));
      },
      clearSelection: function(){
        this.store.userAttemptsData[this.store.question_no].answer = '';
      }
    },
}
</script>