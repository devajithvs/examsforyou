<template>
    <v-card class="mx-auto" >            
        <v-card-title class="navbar">
            <span class="subtitle-1">{{statusTitle}}</span>
            <v-spacer></v-spacer>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="navbar subtitle-2 right overflow-y-auto mt-0" id="question" style="height: 30vh">
            <div v-on:click="selectQuestion(block)" v-for="block in userAttemptsData[current_section]" v-bind:key="block.id" class="status-icon pallet" v-bind:class="[block.class, block.selected ? 'current-question': '']"> 
            <span>{{block.id+1}}</span>
            <div class="ans-and-review" v-if="block.class === 'answered-and-marked-for-review'">
                <div class="status-icon-ans-and-review material-icons white-text">assignment</div>
            </div>
            </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="navbar subtitle-2 right overflow-y-auto" id="question-stats" style="height: 35vh">
            <v-layout rows id="exam-info" wrap>
            <v-flex md6 class="status-container">
                <div class="status-icon answered">
                <div class="status-icon-text">{{ sessionStats.answered }}</div>
                </div>
                <div class="status-label">Answered</div>
            </v-flex>

            <v-flex md6 class="status-container">
                <div class="status-icon not-answered">
                <div class="status-icon-text">{{ sessionStats.not_answered }}</div>
                </div>
                <div class="status-label">Not Answered</div>
            </v-flex>
            </v-layout>
            <v-layout rows id="exam-info" wrap>
            <v-flex md6 class="status-container">
                <div class="status-icon not-visited">
                <div class="status-icon-text">{{ sessionStats.not_visited }}</div>
                </div>
                <div class="status-label">Not Visited</div>
            </v-flex>

            <v-flex md6 class="status-container">
                <div class="status-icon marked-for-review">
                <div class="status-icon-text">{{ sessionStats.marked_for_review }}</div>
                </div>
                <div class="status-label">Marked for Review</div>
            </v-flex>

            <v-flex md12 class="status-container">
                <div class="status-icon marked-for-review">
                <div>{{ sessionStats.answered_and_marked_for_review }}</div>
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
import {mapState} from 'vuex'
import UpdateResponse from '../mixins/updateResponse'
export default {
    computed: {
        mixins: [UpdateResponse],
        ...mapState({
            exam_sections: state => state.store.exam_sections,
            question_no: state => state.store.sessionData.question_no,
            current_section: state => state.store.sessionData.current_section,
            userAttemptsData: state => state.store.userAttemptsData,
            sessionStats: state => state.store.sessionStats,
        }),
        statusTitle() {
            return this.exam_sections[this.current_section].name + ' (' + this.exam_sections[this.current_section].questions.length + ')';
        },
    },
    methods: {
      selectQuestion: function(block) {
        this.$store.commit('changeQuestion', block.id);
        this.updateResponse();
      },
    },
}
</script>