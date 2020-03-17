import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {store} from './store/store';

Vue.config.productionTip = false
Vue.mixin({
  methods: {
    initialize: function(){
      // this.setNightMode();
      this.updateTime();
      this.initializeQuizVariables();
    },
    initializeQuizVariables: function(){
      localStorage.removeItem("userAttemptsData");
      localStorage.removeItem("question_no");
      let i,j;
      this.store.userAttemptsData = JSON.parse(localStorage.getItem("userAttemptsData"));
      this.store.question_no = JSON.parse(localStorage.getItem("question_no"));
      if(this.store.userAttemptsData===null || this.store.question_no===null) {
        console.log("hellp")
        this.store.userAttemptsData = [];
        this.store.question_no = [0,0,0];
        this.store.userAttemptsData = new Array(this.store.exam_sections.length);
        for(j=0; j < this.store.exam_sections.length; j++){  
          this.store.userAttemptsData[j] = new Array(this.store.exam_sections[j].questions.length);
          for (i = 0; i < this.store.exam_sections[j].questions.length; i++) {
            Vue.set(this.store.userAttemptsData[j],i,{id:i, selected: false ,marked_for_review: false, answer: '', class:"not-visited",code:3})
          }         
        }

      }
      else{
        for(j=0; j < this.store.exam_sections.length; j++) {  

          Vue.set(this.store.userAttemptsData[j][0], 'selected', false);
          Vue.set(this.store.userAttemptsData[j][this.store.question_no[j]], 'selected', true);
        }
      }
      localStorage.setItem("question_no", JSON.stringify(this.store.question_no));
      localStorage.setItem("userAttemptsData", JSON.stringify(this.store.userAttemptsData));
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
          
      this.$store.commit('selectCurrentQuestion',false);
     
      if(this.store.userAttemptsData[this.store.current_section][this.store.question_no[this.store.current_section]].marked_for_review){
        this.$store.commit('setClass','marked-for-review');
      }
      else if(this.store.userAttemptsData[this.store.current_section][this.store.question_no[this.store.current_section]].answer === ''){
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
