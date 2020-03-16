<template>
    <nav>
        <v-app-bar app class="navbar" dense dark >            
            <v-app-bar-nav-icon class="primary_text--text hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase hidden-sm-and-down">
                <img :src="img" style="margin-top:1vh; width:200px; height: auto;" v-bind:style="[$vuetify.theme.dark ? {'filter': 'invert(100%)'} : {}]"/>
            </v-toolbar-title>
            <v-toolbar-title class="text-uppercase hidden-md-and-up">
                <img :src="logo" style="margin-top:1vh; width:25px; height: auto;" v-bind:style="[$vuetify.theme.dark ? {'filter': 'invert(100%)'} : {}]"/>
            </v-toolbar-title>
            
            <v-toolbar-title class="text-uppercase hidden-sm-and-down pl-5">
                <span class="subtitle-2 primary_text--text" id="exam-name">{{store.exam_name}}</span>
            </v-toolbar-title>
            
            <v-spacer></v-spacer>

            <span class="primary_text--text time hidden-sm-and-down pr-2">Time Left:</span>
            <v-icon title="Time Left" class="primary_text--text pr-1 left">access_time</v-icon>
            <span class="primary_text--text time" id="time-left">{{ timerCount}}</span>
            <v-btn text class="success hidden-xs-only ml-5">
                <span class=    "white--text">Submit</span>
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
                
                <v-list-item-title class="text-center">
                    <span class="subtitle-2 primary_text--text" id="exam-name">{{store.exam_name}}</span>
                    <i class="material-icons primary_text--text dark-mode-button vertical-align-middle padding-bottom-3" v-bind:title="[($vuetify.theme.dark) ? 'Light Mode': 'Night Mode']" v-on:click="swapMode">{{ ($vuetify.theme.dark) ? 'brightness_5': 'brightness_2' }}</i>
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
.v-slide-group__prev {
display: none !important;
}

.vertical-align-middle { 
  vertical-align: middle; 
}

.padding-bottom-3 {
  padding-bottom: 3px;
}


.dark-mode-button {
    display: inline-block;
    border-radius: 50%;
    // border: 1px solid var(--v-primary_text-base);
    // box-shadow: 1px 1px 1px 1px var(--v-primary_text-base);
    padding: .15em .15em;
    background: transparent;
    cursor: pointer;
    line-height: 23px !important;
    color: var(--v-primary_text-base);
    }
</style>

<script>
 /*Other component*/
import Status from './exam_status'

export default {
    components: { Status
    },
    data () {
        return{
            img: require('@/assets/logo_with_text.svg'),
            logo: require('@/assets/logo.svg'),
            drawer: false,
            timerCount: '',
        }
    },
    methods: {
        swapMode: function () {
            this.store.night_mode_status = !this.store.night_mode_status
            this.$vuetify.theme.dark = this.store.night_mode_status
            localStorage.setItem("night_mode_status", JSON.stringify(this.store.night_mode_status));
        },
        
    },
    watch: {
        timerCount: {
            handler() {
                setTimeout(() => {
                    let now = new Date().getTime();
                    let distance = this.store.expire_date - now;

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