<template>
    <div class="exam-status-container">
      <div class="tabs gray-2">
        <a class="tab-element cursor-pointer font-bold font-15">&nbsp;Instructions</a>
        <a class="tab-element cursor-pointer font-bold font-15">&nbsp;Question Paper</a>
      </div>
      <div class="card bg-white">
        <div class="container mt-1 mb-1 flex space-between">
          <span class="text-center justify-center">{{statusTitle}}</span>
        </div>
        <div class="divider-horizontal"></div> 
        <div id="question-stats" class="container mt-1 mb-1" style="height: 30vh">
            <div v-on:click="selectQuestion(block)" v-for="block in userAttemptsData[current_section]" v-bind:key="block.id" class="status-icon pallet" v-bind:class="[block.class, block.selected ? 'current-question': '']"> 
                <span>{{block.id+1}}</span>
                <div class="ans-and-review" v-if="block.class === 'answered-and-marked-for-review'">
                    <!-- TODO -->
                    <div class="status-icon-ans-and-review material-icons white">assignment</div>
                </div>
            </div>
        </div>
            
        <div class="divider-horizontal"></div> 

        <div id="question-stats-info" class="grid-2 font-15 mt-1 mb-1">
            <div class="flex align-center">
                <div class="status-icon answered">
                    <div class="">{{ sessionStats.answered }}</div>
                </div>
                <div class="status-label width-7em">Answered</div>
            </div>

            <div class="flex align-center">
                <div class="status-icon not-answered">
                    <div class="">{{ sessionStats.not_answered }}</div>
                </div>
                <div class="status-label width-7em">Not Answered</div>
            </div>

            <div class="flex align-center">
                <div class="status-icon not-visited">
                    <div class="">{{ sessionStats.not_visited }}</div>
                </div>
                <div class="status-label width-7em">Not Visited</div>
            </div>

            <div class="flex align-center">
                <div class="status-icon marked-for-review">
                <div class="">{{ sessionStats.marked_for_review }}</div>
                </div>
                <div class="status-label width-7em">Marked for Review</div>
            </div>

            <div class="flex align-center grid-full">
                <div class="status-icon marked-for-review">
                    <div>
                        {{ sessionStats.answered_and_marked_for_review }}
                    </div>
                    <div class="ans-and-review">
                        <!-- TODO -->
                        <div class="status-icon-ans-and-review material-icons white-text">assignment</div>
                    </div>
                </div>
                <div class="status-label">Answered and Marked for Review</div>
            </div>
        </div>

      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import UpdateResponse from '../mixins/updateResponse'
export default {
    mixins: [UpdateResponse],
    computed: {
        statusTitle() {
            return this.exam_sections[this.current_section].name + ' (' + this.exam_sections[this.current_section].questions.length + ')';
        },
        ...mapState({
            exam_sections: state => state.store.exam_sections,
            question_no: state => state.store.sessionData.question_no,
            current_section: state => state.store.sessionData.current_section,
            userAttemptsData: state => state.store.userAttemptsData,
            sessionStats: state => state.store.sessionStats,
        }),
    },
    methods: {
      selectQuestion: function(block) {
        this.$store.commit('changeQuestion', block.id);
        this.updateResponse();
      },
    },
}
</script>