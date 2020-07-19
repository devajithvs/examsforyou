export default {  

  methods: {
    // TODO- improve function
    updateResponse: function() {
      if(this.$store.state.store.userAttemptsData[this.$store.state.store.sessionData.current_section][this.$store.state.store.sessionData.question_no[this.$store.state.store.sessionData.current_section]].marked_for_review && !this.$store.state.store.userAttemptsData[this.$store.state.store.sessionData.current_section][this.$store.state.store.sessionData.question_no[this.$store.state.store.sessionData.current_section]].answer.length){
        this.$store.commit('setClass','marked-for-review');
      }
      else if(this.$store.state.store.userAttemptsData[this.$store.state.store.sessionData.current_section][this.$store.state.store.sessionData.question_no[this.$store.state.store.sessionData.current_section]].marked_for_review){
        this.$store.commit('setClass','answered-and-marked-for-review');
      }
      else if(this.$store.state.store.userAttemptsData[this.$store.state.store.sessionData.current_section][this.$store.state.store.sessionData.question_no[this.$store.state.store.sessionData.current_section]].answer.length){
        this.$store.commit('setClass','answered');
      }
      else {
        this.$store.commit('setClass','not-answered');
      }
      
      this.$store.commit('changeStats');
      localStorage.setItem("sessionData", JSON.stringify(this.$store.state.store.sessionData));
      localStorage.setItem("userAttemptsData", JSON.stringify(this.$store.state.store.userAttemptsData));
    },
  },
}