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
            forcedRender: 0
        },      
    },
    mutations: {
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
        selectCurrentQuestion(state,val){
            Vue.set(state.store.userAttemptsData[state.store.current_section][state.store.question_no[state.store.current_section]], 'selected', val);
        },
        selectQuestion(state,val){
            Vue.set(state.store.question_no, state.store.current_section, val);
        },
        reviewSwap(state){
            Vue.set(state.store.userAttemptsData[state.store.current_section][state.store.question_no[state.store.current_section]], 'marked_for_review', !state.store.userAttemptsData[state.store.current_section][state.store.question_no[state.store.current_section]].marked_for_review);
        },
        clearSelection(state){
            Vue.set(state.store.userAttemptsData[state.store.current_section][state.store.question_no[state.store.current_section]], 'answer', '');
        },
        setClass(state, className){
            Vue.set(state.store.userAttemptsData[state.store.current_section][state.store.question_no[state.store.current_section]], 'class', className);
            
        }

    }
})