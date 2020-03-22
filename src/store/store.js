import Vue from 'vue';
import Vuex from 'vuex';
import json from '@/assets/sampledata.json';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        store: {
            exam_sections: json.question_paper.sections,
            exam_name: json.question_paper.exam_details.name + " " + json.question_paper.exam_details.year,
            current_section: 0,
            question_no: [],
            expire_date: {},
            userAttemptsData: [],
            saveData: {},
            night_mode_status: false,
            sessionStats:  {answered:0, not_answered:0, not_visited:'', marked_for_review:0, answered_and_marked_for_review:0},

        },      
    },
    mutations: {
        changeStats(state) {
            let j,i;
            state.store.sessionStats.answered = 0;
            state.store.sessionStats.not_answered = 0;
            state.store.sessionStats.not_visited = 0;
            state.store.sessionStats.marked_for_review = 0;
            state.store.sessionStats.answered_and_marked_for_review = 0;

            for(j=0; j < this.state.store.exam_sections.length; j++) {
                for (i = 0; i < this.state.store.exam_sections[j].questions.length; i++) {
                    if(this.state.store.userAttemptsData[j][i].class === "answered")
                        state.store.sessionStats.answered++;
                    else if(this.state.store.userAttemptsData[j][i].class === "not-answered")
                        state.store.sessionStats.not_answered++;
                    else if(this.state.store.userAttemptsData[j][i].class === "not-visited")
                        state.store.sessionStats.not_visited++;
                    else if(this.state.store.userAttemptsData[j][i].class === "marked-for-review")
                        state.store.sessionStats.marked_for_review++;
                    else if(this.state.store.userAttemptsData[j][i].class === "answered-and-marked-for-review")
                        state.store.sessionStats.answered_and_marked_for_review++;
                    
                }
            }            
        },
        incrementSection (state){
            state.store.current_section++;
        },
        decrementSection (state){
            state.store.current_section--;
        },
        changeSection (state, index){
            state.store.current_section = index;
        },
        incrementQuestion (state){
            Vue.set(state.store.question_no,state.store.current_section,state.store.question_no[state.store.current_section]+1);
        },
        decrementQuestion (state){
            Vue.set(state.store.question_no,state.store.current_section,state.store.question_no[state.store.current_section]-1);
        },
        deselectCurrentQuestion(state){
            const newRow = this.state.store.userAttemptsData[state.store.current_section].slice(0);
            newRow[state.store.question_no[state.store.current_section]].selected = false;
            Vue.set(state.store.userAttemptsData, state.store.current_section, newRow);
        },
        selectCurrentQuestion(state){            
            const newRow = this.state.store.userAttemptsData[state.store.current_section].slice(0);
            newRow[state.store.question_no[state.store.current_section]].selected = true;
            Vue.set(state.store.userAttemptsData, state.store.current_section, newRow);
        },
        changeQuestion(state,val){
            this.commit('deselectCurrentQuestion')
            Vue.set(state.store.question_no, state.store.current_section, val);
            const newRow = this.state.store.userAttemptsData[state.store.current_section].slice(0);
            newRow[state.store.question_no[state.store.current_section]].selected = true;
            Vue.set(state.store.userAttemptsData, state.store.current_section, newRow);
        },
        reviewSwap(state){
            const newRow = this.state.store.userAttemptsData[state.store.current_section].slice(0);
            newRow[state.store.question_no[state.store.current_section]].marked_for_review = !state.store.userAttemptsData[state.store.current_section][state.store.question_no[state.store.current_section]].marked_for_review;
            Vue.set(state.store.userAttemptsData, state.store.current_section, newRow);
        },
        clearSelection(state){
            const newRow = this.state.store.userAttemptsData[state.store.current_section].slice(0);
            newRow[state.store.question_no[state.store.current_section]].answer = [];
            Vue.set(state.store.userAttemptsData, state.store.current_section, newRow);
        },
        setClass(state, className){
            const newRow = this.state.store.userAttemptsData[state.store.current_section].slice(0);
            newRow[state.store.question_no[state.store.current_section]].class = className
            Vue.set(state.store.userAttemptsData, state.store.current_section, newRow);         
        },
        setOption(state, optionId){
            const newRow = this.state.store.userAttemptsData[state.store.current_section].slice(0);
            newRow[state.store.question_no[state.store.current_section]].answer = optionId
            Vue.set(state.store.userAttemptsData, state.store.current_section, newRow);
        }

    }
})