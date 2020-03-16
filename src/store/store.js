import Vue from 'vue';
import Vuex from 'vuex';
import json from '@/assets/sampledata.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        store: {
            exam_details: json.quesion_paper.exam_details,
            exam_name: json.quesion_paper.exam_details.exam_name + " " + json.quesion_paper.exam_details.year,
            current_section: 0,
            question_no: [],
            expire_date: '',
            userAttemptsData: '',
            saveData: '',
            night_mode_status: false,
        },      
    },
})