import Vue from 'vue';
import Vuex from 'vuex';
import json from '@/assets/data.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        data: {
            question_no: '',
            exam_details: json,
            exam_name:'JEE Advanced 2020',
            timerCount: '',
            expire_date: '',
            attempt2: '',
            saveData: '',
            drawer: false,
            night_mode_status: false,
        },      
    },
})