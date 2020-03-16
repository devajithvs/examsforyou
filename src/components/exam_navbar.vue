<template>
    <nav>
        <v-app-bar app class="primary" dense dark >            
            <v-app-bar-nav-icon class="primary_text--text hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase hidden-sm-and-down">
                <img :src="img" style="margin-top:1vh; width:200px; height: auto;" v-bind:style="[$vuetify.theme.dark ? {'filter': 'invert(100%)'} : {}]"/>
            </v-toolbar-title>
            <v-toolbar-title class="text-uppercase hidden-md-and-up">
                <img :src="logo" style="margin-top:1vh; width:25px; height: auto;" v-bind:style="[$vuetify.theme.dark ? {'filter': 'invert(100%)'} : {}]"/>
            </v-toolbar-title>
            
            <v-toolbar-title class="text-uppercase hidden-sm-and-down pl-5">
                <span class="subtitle-2 primary_text--text" id="exam-name">{{exam_name}}</span>
            </v-toolbar-title>
            
            <v-spacer></v-spacer>

            <span class="primary_text--text time hidden-sm-and-down pr-2">Time Left:</span>
            <v-icon class="primary_text--text pr-1 left">access_time</v-icon>
            <span class="primary_text--text time" id="time-left">{{ timerCount}}</span>
            <v-btn text class="success hidden-xs-only ml-5">
                <span class="white--text">Submit</span>
            </v-btn>
            <i class="material-icons primary_text--text ml-n12 hidden-xs-only" v-on:click="swapMode">md_brightness_medium</i> 
        </v-app-bar>

        <v-navigation-drawer app 
        absolute
        temporary
        disable-resize-watcher 
        v-model="drawer">
        <template v-slot:prepend>
            <v-list-item two-line>
            

            <v-list-item-content>
                
                <v-list-item-title class="title text-center">
                    <span class="subtitle-2 primary_text--text" id="exam-name">{{exam_name}}</span>
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
            <v-list-item
            >
            <v-list-item-content>
                
                <v-list-item-title class="mt-n4">
                    <v-switch right class="ml-1"
                        v-model="$vuetify.theme.dark" label="Night Mode">
                    </v-switch>
                    
                </v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {

    data () {
        return{
            img: require('@/assets/logo_with_text.svg'),
            logo: require('@/assets/logo.svg'),
            drawer: false,
            night_mode_status: false,
            exam_name:'JEE Advanced 2020',
            timerCount: '',
            expire_date: new Date("Mar 12, 2020 17:37:25").getTime()
        }
    },
    methods: {
        initialize: function(){
            this.setNightMode();
            this.updateTime();
                      
        },
        setNightMode: function(){
            // localStorage.removeItem("night_mode_status");
            var mode = JSON.parse(localStorage.getItem("night_mode_status"));
            if(mode===null) {
                mode = {"night_mode_status": false}
                localStorage.setItem("night_mode_status", JSON.stringify(mode));
            }
            this.$vuetify.theme.dark = mode.night_mode_status;
            return this.$vuetify.theme.dark;
        },
        updateTime: function() {
            // localStorage.removeItem("time");
            var time = JSON.parse(localStorage.getItem("time"));
            let endTime = new Date();
            if(time===null) {
                
                endTime.setHours(endTime.getHours() + 3);
                this.expire_date = endTime.getTime();
                time = {"expire_date": this.expire_date};
                localStorage.setItem("time", JSON.stringify(time));
            }
            console.log(time.expire_date);
            this.expire_date = time.expire_date; 
            if (this.expire_date < endTime.getTime()){
                alert("Time's up! Restart?");
                localStorage.removeItem("time");
                this.updateTime();
            }
        },
        swapMode: function () {
            this.night_mode_status = !this.night_mode_status
            this.$vuetify.theme.dark = this.night_mode_status
            localStorage.setItem("night_mode_status", JSON.stringify({"night_mode_status": this.night_mode_status}));
        },
        
    },
    beforeMount(){
            this.initialize()
    },
    watch: {

        timerCount: {
            handler() {

                setTimeout(() => {

                    let now = new Date().getTime();
                    let distance = this.expire_date - now;

                    let hours = ('0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
                    let minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
                    let seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
                    this.timerCount = hours+ ":" + minutes + ":" + seconds;

                }, 1000);

            },
            immediate: true // This ensures the watcher is triggered upon creation
        }

    },
}
</script>