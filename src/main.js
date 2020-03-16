import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {store} from './store/store';

Vue.config.productionTip = false
import json from '@/assets/data.json';
Vue.mixin({
  beforeMount(){
    this.initialize()
  },

  methods: {
    initialize: function(){
      this.setNightMode();
      this.updateTime();
      this.initializeQuizVariables();
    },
    initializeQuizVariables: function(){
      // localStorage.removeItem("question_status");
      // localStorage.removeItem("saveData");
      this.store.userAttemptsData = JSON.parse(localStorage.getItem("question_status"));
      this.store.question_no = JSON.parse(localStorage.getItem("question_no"));
      if(this.store.userAttemptsData===null || this.store.question_no===null) {
        this.store.userAttemptsData = [];
        for (var i = 0; i < json.length; i++) {
          this.store.userAttemptsData.push({id:i, selected: false ,marked_for_review: false, answer: '', class:"not-visited",code:3});
          this.store.question_no = 0;
          localStorage.setItem("question_status", JSON.stringify(this.store.question_no));
        }
      }
      else{
        this.store.userAttemptsData[0].selected = false;
        this.store.userAttemptsData[this.store.question_no].selected = true;
      }
      localStorage.setItem("question_no", JSON.stringify(this.store.question_no));
      localStorage.setItem("question_status", JSON.stringify(this.store.userAttemptsData));
    },
    
    setNightMode: function(){
      // localStorage.removeItem("night_mode_status");
      var mode = JSON.parse(localStorage.getItem("night_mode_status"));
      if(mode===null) {
        mode = false;
        localStorage.setItem("night_mode_status", JSON.stringify(mode));
      }
      this.$vuetify.theme.dark = mode;
      localStorage.setItem("night_mode_status", JSON.stringify(this.$vuetify.theme.dark));
      console.log(mode);
    },
    updateTime: function() {
        // localStorage.removeItem("time");
        this.store.expire_date = JSON.parse(localStorage.getItem("expire_date"));
        let endTime = new Date();
        if(this.store.expire_date===null) {
            endTime.setHours(endTime.getHours() + 3);
            this.store.expire_date = endTime.getTime();
            localStorage.setItem("expire_date", JSON.stringify(this.store.expire_date));
        }
        if (this.store.expire_date < endTime.getTime()){
            alert("Time's up! Restart?");
            localStorage.removeItem("expire_date");
            this.updateTime();
        }
    },
    
    updateResponse: function() {
          
      this.store.userAttemptsData[this.store.question_no].selected = false;
      if(this.store.userAttemptsData[this.store.question_no].answer === '' && this.store.userAttemptsData[this.store.question_no].marked_for_review){
        this.store.userAttemptsData[this.store.question_no].class = 'marked-for-review';
      }
      else if(this.store.userAttemptsData[this.store.question_no].answer !== '' && this.store.userAttemptsData[this.store.question_no].marked_for_review){
        this.store.userAttemptsData[this.store.question_no].class = 'marked-for-review';
      }
      else if(this.store.userAttemptsData[this.store.question_no].answer === ''){
        this.store.userAttemptsData[this.store.question_no].class = 'not-answered';
      }
      else {
        this.store.userAttemptsData[this.store.question_no].class = 'answered';
      }
    },
    
  },
  computed: {
    store(){
        return this.$store.state.store
    },
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
  }
})


new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
