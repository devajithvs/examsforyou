import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {store} from './store/store';

Vue.config.productionTip = false
Vue.mixin({
  methods: {
    initialize: function(){
      this.setNightMode();
      this.updateTime();
      this.initializeQuizVariables();
    },
    initializeQuizVariables: function(){
      localStorage.removeItem("userAttemptsData");
      localStorage.removeItem("question_no");
      let i,j;
      this.$store.state.store.userAttemptsData = JSON.parse(localStorage.getItem("userAttemptsData"));
      this.$store.state.store.question_no = JSON.parse(localStorage.getItem("question_no"));
      this.$store.state.store.current_section = JSON.parse(localStorage.getItem("current_section"));
      if(this.$store.state.store.userAttemptsData===null || this.$store.state.store.question_no===null) {
        this.$store.state.store.userAttemptsData = [];
        this.$store.state.store.question_no = [0,0,0];
        this.$store.state.store.current_section = 0;
        this.$store.state.store.userAttemptsData = new Array(this.$store.state.store.exam_sections.length);
        for(j=0; j < this.$store.state.store.exam_sections.length; j++){  
          this.$store.state.store.userAttemptsData[j] = new Array(this.$store.state.store.exam_sections[j].questions.length);
          for (i = 0; i < this.$store.state.store.exam_sections[j].questions.length; i++) {
            this.$store.state.store.userAttemptsData[j][i] ={id:i, selected: false ,marked_for_review: false, answer: [], class:"not-visited"};
          }         
        }

      }

      this.$store.commit('selectCurrentQuestion');
      this.updateResponse();
      localStorage.setItem("question_no", JSON.stringify(this.$store.state.store.question_no));
      localStorage.setItem("current_section", JSON.stringify(this.$store.state.store.current_section));
      localStorage.setItem("userAttemptsData", JSON.stringify(this.$store.state.store.userAttemptsData));
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
    },
    updateTime: function() {
        // localStorage.removeItem("time");
        this.$store.state.store.expire_date = JSON.parse(localStorage.getItem("expire_date"));
        let endTime = new Date();
        if(this.$store.state.store.expire_date===null) {
            endTime.setHours(endTime.getHours() + 3);
            this.$store.state.store.expire_date = endTime.getTime();
            localStorage.setItem("expire_date", JSON.stringify(this.$store.state.store.expire_date));
        }
        if (this.$store.state.store.expire_date < endTime.getTime()){
            alert("Time's up! Restart?");
            localStorage.removeItem("expire_date");
            this.updateTime();
        }
    },
    
    updateResponse: function() {
      if(this.$store.state.store.userAttemptsData[this.$store.state.store.current_section][this.$store.state.store.question_no[this.$store.state.store.current_section]].marked_for_review){
        this.$store.commit('setClass','marked-for-review');
      }
      else if(!this.$store.state.store.userAttemptsData[this.$store.state.store.current_section][this.$store.state.store.question_no[this.$store.state.store.current_section]].answer.length){
        this.$store.commit('setClass','not-answered');
      }
      else {
        this.$store.commit('setClass','answered');
      }
    },
    
  },

  computed: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } 
      else {
        return false
      }
    },
    store(){
      return this.$store.state.store;
    },
  },
})


new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
