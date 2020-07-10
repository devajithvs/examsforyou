<template>
    <section class="bg-white">
        <nav class="navbar container flex space-between">
          <img src="@/assets/menu.svg" class="icon menu__icon" alt="">
          <div class="e4y__left flex ml-2">
            <img src="@/assets/Logo_only.svg" class="icon logo__icon mr-2" alt="">
            <img src="@/assets/Logo_text.svg" class="icon logotext__icon mr-2" alt="">
            <div  class="flex align-flex-end ml-1">
                <span class="gray-2" id="exam-name">
                    {{exam_name}}
                </span>
            </div>
          </div>
         
          <div class="flex align-center">
            <span class="gray-2 mr-1">Time Left:</span>
            <span class="icon right__icon-black"></span>
            <span class="gray-2 mr-3" id="time-left">{{timerCount}}</span>
            <button class="navbar-button button success">
                <span class="font-bold font-18">Submit</span>
            </button>
          </div>

          <img src="@/assets/search_black.svg" class="search__icon" alt="">
        </nav>
        <div class="divider-horizontal"></div> 
    </section>
</template>

<style lang="css">
   @import '../css/main.css';
</style>

<script>
 /*Other component*/
// import Status from './exam_status'
import Init from '../mixins/exam_init'
import UpdateResponse from '../mixins/updateResponse'

export default {
    mixins: [Init, UpdateResponse],
    // components: { Status, },
    beforeMount(){
      this.initialize();
      this.updateResponse();
    },
    data () {
        return{
            drawer: false,
            timerCount: '00:00:00',
        }
    },
    computed: {
        exam_name() {
            return this.$store.state.store.exam_details.name + " " + this.$store.state.store.exam_details.year
        },
    },        
    methods: {
        swapMode: function () {
            this.$store.state.store.night_mode_status = !this.$store.state.store.night_mode_status
            this.$vuetify.theme.dark = this.$store.state.store.night_mode_status
            localStorage.setItem("night_mode_status", JSON.stringify(this.$store.state.store.night_mode_status));
        },
        
    },
    watch: {
        timerCount: {
            handler() {
                setTimeout(() => {
                    let now = new Date().getTime();
                    let distance =this.$store.state.store.sessionData.expire_date - now;

                    let hours = ('0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
                    let minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
                    let seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
                    this.timerCount = hours+ ":" + minutes + ":" + seconds;
                    console.log("hello")
                    if (distance <= 0) {
                        alert("Time's up! Restart?");
                        localStorage.removeItem("expire_date");
                        localStorage.removeItem("userAttemptsData");
                        localStorage.removeItem("sessionData");
                        this.$store.state.store.sessionData.expire_date = null;
                        this.updateTime();
                    }

                }, 1000);

            },
            immediate: true // This ensures the watcher is triggered upon creation
        }

    },
}
</script>