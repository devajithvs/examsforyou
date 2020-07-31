export default {  

  methods: {
    initialize: function(){
      this.initializeQuizVariables();
      this.updateTime();
    },
    initializeQuizVariables: function(){
      localStorage.removeItem("userAttemptsData");
      localStorage.removeItem("sessionData");
      let i,j;
      this.$store.state.store.sessionData = JSON.parse(localStorage.getItem("sessionData"));
      this.$store.state.store.userAttemptsData = JSON.parse(localStorage.getItem("userAttemptsData"));
      if(this.$store.state.store.userAttemptsData===null || this.$store.state.store.sessionData ===null) {
        this.$store.state.store.userAttemptsData = [];
        console.log("Test")
        this.$store.state.store.sessionData = {question_no: [0,0,0], current_section: 0, expire_date: null}
        this.$store.state.store.userAttemptsData = new Array(this.$store.state.store.exam_sections.length);

        for(j=0; j < this.$store.state.store.exam_sections.length; j++){ 
          this.$store.state.store.userAttemptsData[j] = new Array(this.$store.state.store.exam_sections[j].questions.length);
          for (i = 0; i < this.$store.state.store.exam_sections[j].questions.length; i++) {
            this.$store.state.store.userAttemptsData[j][i] ={id:i, selected: false ,marked_for_review: false, answer: null, class:"not-visited"};
          }         
        }
      }

      this.$store.commit('selectCurrentQuestion');
      localStorage.setItem("userAttemptsData", JSON.stringify(this.$store.state.store.userAttemptsData));
    },
    updateTime: function() {
        // this.$store.state.store.sessionData.expire_date = null
        let duration = this.$store.state.store.exam_details.duration;
        // duration = 10;
        if(this.$store.state.store.sessionData.expire_date===null) {
          let endTime = new Date();
          endTime.setSeconds(endTime.getSeconds() + duration);
          this.$store.state.store.sessionData.expire_date = endTime.getTime();
          localStorage.setItem("sessionData", JSON.stringify(this.$store.state.store.sessionData));
        }
        this.isTimeUp();
    },
    isTimeUp: function() {
      let currentTime = new Date();
      if (this.$store.state.store.sessionData.expire_date < currentTime.getTime()){
        alert("Time's up! Restart?");
        localStorage.removeItem("expire_date");
        localStorage.removeItem("userAttemptsData");
        localStorage.removeItem("sessionData");
        this.updateTime();
      }
    },
  }
};