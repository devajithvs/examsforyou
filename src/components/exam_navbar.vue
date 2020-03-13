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
            <i class="material-icons primary_text--text ml-n12 hidden-xs-only" v-on:click="$vuetify.theme.dark = !$vuetify.theme.dark">md_brightness_medium</i> 
        </v-app-bar>

        <v-navigation-drawer app 
        clipped
        fixed
        floating
        white 
        disable-resize-watcher 
        v-model="drawer">
            <template v-slot:append>
                <div class="pa-2">
                <v-btn block>Logout</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </nav>
</template>

<script>

export default {
    data (){
        return{
            img: require('@/assets/logo_with_text.svg'),
            logo: require('@/assets/logo.svg'),
            drawer: false,
            exam_name:'JEE Advanced 2020',
            timerCount: '',
            expire_date: new Date("Mar 12, 2020 17:37:25").getTime()
        }
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