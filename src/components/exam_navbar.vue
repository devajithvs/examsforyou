<template>
    <nav>
        <v-app-bar app class="navbar">            
            <v-app-bar-nav-icon class="primary_text--text hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase hidden-sm-and-down">
                <Logo :isTextRequired="true"/>
            </v-toolbar-title>
            <v-toolbar-title class="text-uppercase hidden-md-and-up">
                <Logo :isTextRequired="false"/>
            </v-toolbar-title>
            
            <v-toolbar-title class="text-uppercase hidden-sm-and-down pl-5">
                <span class="subtitle-2 primary_text--text" id="exam-name">{{exam_name}}</span>
            </v-toolbar-title>
            
            <v-spacer></v-spacer>

            <span class="primary_text--text time hidden-sm-and-down pr-2">Time Left:</span>
            <v-icon title="Time Left" class="primary_text--text pr-1 left">access_time</v-icon>
            <span class="primary_text--text time" id="time-left">{{timerCount}}</span>
            <v-btn text class="success hidden-xs-only ml-5">
                <span class="white--text">Submit</span>
            </v-btn>
            <i class="material-icons primary_text--text dark-mode-button hidden-sm-and-down ml-4" style="opacity: 0.9; width: auto;" v-bind:title="[($vuetify.theme.dark) ? 'Light Mode': 'Night Mode']" v-on:click="swapMode">{{ ($vuetify.theme.dark) ? 'brightness_5': 'brightness_2' }}</i> 
        </v-app-bar>

        <v-navigation-drawer class="primary" app 
        absolute
        temporary
        disable-resize-watcher 
        v-model="drawer"
        width="75%"
        style="position:fixed; top:0; left:0; overflow-y:scroll;"
        >
        <template v-slot:prepend>
            <v-list-item two-line>
            <v-list-item-content>
                
                <v-list-item-title class="mb-4" style="display: flex; flex-wrap: wrap;">
                <!-- class="text-center"> -->
                    <span class="subtitle-2 exam-name primary_text--text text-truncate" id="exam-name">{{exam_name}}</span>
                    <v-spacer></v-spacer>
                    <i style="" class="material-icons primary_text--text dark-mode-button vertical-align-middle padding-bottom-3" v-bind:title="[($vuetify.theme.dark) ? 'Light Mode': 'Night Mode']" v-on:click="swapMode">{{ ($vuetify.theme.dark) ? 'brightness_5': 'brightness_2' }}</i>
                    <!-- <span class="subtitle-1">Night Mode</span> -->
                </v-list-item-title>

                <v-btn text class="success">       
                    <span class="white--text">Submit</span>
                </v-btn>
                <v-list-item-subtitle class="mt-3">
                    <a class="primary_text--text text-center pr-5"><v-icon small class="accent--text">assignment</v-icon>&nbsp;Instructions</a>
                    <a class="primary_text--text"><v-icon small class="accent--text">book</v-icon>&nbsp;Question Paper</a>
                </v-list-item-subtitle>

            
            </v-list-item-content>
            </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item>
            
                <v-list-item-content>                        
                    <Status/>                  
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<style lang="scss">
    @import '../sass/exam.scss';
</style>

<script>
 /*Other component*/
import Status from './exam_status'
import Init from '../mixins/exam_init'
import UpdateResponse from '../mixins/updateResponse'
import Logo from './exam_status'

export default {
    mixins: [Init, UpdateResponse],
    components: { Status, Logo },
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