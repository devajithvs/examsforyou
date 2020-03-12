<template>
    <nav>
        

        <v-app-bar app class="primary" dense dark>

            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <!-- <v-toolbar-title class="text-uppercase hidden-sm-and-down">
                <span>EXAMS</span>
                <span class="font-weight-bold">FORYOU</span>
            </v-toolbar-title> -->
            <!-- <v-toolbar-title class="text-uppercase hidden-md-and-up">
                <span>E</span>
                <span class="font-weight-bold">4</span>
                <span>Y</span>
            </v-toolbar-title> -->
            <v-toolbar-title class="text-uppercase hidden-sm-and-down">
                <img :src="img" style="margin-top:2vh; width:200px; height: auto; filter: invert(100%);"/>
            </v-toolbar-title>
            <v-toolbar-title class="text-uppercase hidden-md-and-up">
                <img :src="logo" style="margin-top:2vh; width:25px; height: auto; filter: invert(100%);"/>
            </v-toolbar-title>
            
            <v-toolbar-title class="text-uppercase hidden-sm-and-down pl-5">
                <span id="exam-name" class="subtitle-2">{{exam_name}}</span>
            </v-toolbar-title>
            
            
            <v-spacer></v-spacer>

            <span class="time hidden-sm-and-down pr-2">Time Left:</span>
            <v-icon class="white--text pr-1 left">access_time</v-icon>
            <span class="time pr-5 " id="time-left">{{ timerCount}}</span>
            <v-btn text class="success">
                <span class="white--text">Submit</span>
            </v-btn>
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

    }

}
</script>