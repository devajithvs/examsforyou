<template>
    <section class="bg-white fixed full-width on-top">
        <SideNavCard :class="sidemenu? 'sidenav-show':'sidenav-hidden'"/>
        <nav class="navbar container flex space-between">
          <div class="full-height menu__icon" :class="sidemenu? 'blurall':''" @click="sidemenu = !sidemenu">
            <img :src="sidemenu? require('@/assets/close.svg') : require('@/assets/menu.svg')" class="icon vertical-center">
          </div>
          <div class="e4y__left flex ml-2 baseline sm-mr-auto">
            <img src="@/assets/Logo_only.svg" class="icon logo__icon mr-2" alt="">
            <img src="@/assets/Logo_text.svg" class="icon logotext__icon mr-2" alt="">
            <span class="gray-2 display-lg-and-up" id="exam-name">
                {{exam_name}}
            </span>
          </div>
         
          <div class="flex align-center">
            <span class="gray-2 mr-1 display-lg-and-up">Time Left:</span>
            <img src="@/assets/timer.svg" class="icon" alt="">
            <span class="gray-2 mr-5" id="time-left">{{timerCount}}</span>
            <button class="display-lg-and-up navbar-button button success">
                <span class="font-bold font-18">Submit</span>
            </button>
          </div>
        </nav>
        <div class="divider-horizontal"></div> 
    </section>
</template>

<script>
import Init from '@/mixins/exam_init'
import UpdateResponse from '@/mixins/updateResponse'
import SideNavCard from '@/components/ExamPage/ExamSideNav'

export default {
    mixins: [Init, UpdateResponse],
    components: { SideNavCard, },
    beforeMount(){
      this.initialize();
      this.updateResponse();
    },
    data () {
        return{
            sidemenu: false,
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