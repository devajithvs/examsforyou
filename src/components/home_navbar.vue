<template>
    <nav>
        <v-app-bar app class="navbar">        
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase hidden-sm-and-down">
                <Logo :isTextRequired="true"/>
            </v-toolbar-title>
            <v-toolbar-title class="text-uppercase hidden-md-and-up">
                <Logo :isTextRequired="false"/>
            </v-toolbar-title> 
            <v-toolbar-items transparent class="ml-5">
                <v-btn text class=" hidden-sm-and-down ml-5">
                    <span>Blog</span>
                </v-btn>
                <v-menu
                eager
                open-on-hover
                :close-on-content-click="false"
                :close-on-click="true"
                offset-y
                >
                    <template v-slot:activator="{ on }">
                        <v-btn text class=" hidden-sm-and-down ml-5" title="Attempt Previous Years Question Papers" v-on="on">Practice</v-btn>
                    </template>
                    <ExamListCard/>
                </v-menu>

                <v-btn text class=" hidden-sm-and-down ml-5" title="Best resources to study from, notes, videos">
                    <span>Courses</span>
                </v-btn>

                <v-btn text class=" hidden-sm-and-down ml-5" title="Get all the details of Exams you are qualified for">
                    <span>Examsforyou</span>
                </v-btn>

                

            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-text-field class="mt-5 mr-4 hidden-sm-and-down"
                color="primary_text--text"
                append-outer-icon="mdi-microphone"
                placeholder="Search">
            </v-text-field>


            <v-btn text class="success hidden-xs-only mr-5 login">
                <span class="white--text">Login</span>
            </v-btn>
            <i class="material-icons primary_text--text dark-mode-button hidden-sm-and-down" style="opacity: 0.9; width: auto;" v-bind:title="[($vuetify.theme.dark) ? 'Light Mode': 'Night Mode']" v-on:click="swapMode">{{ ($vuetify.theme.dark) ? 'brightness_5': 'brightness_2' }}</i> 
        </v-app-bar>
        <!-- <v-navigation-drawer class="primary" 
        app 
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
                    <span class="subtitle-2 exam-name primary_text--text text-truncate" id="exam-name">{{exam_name}}</span>
                    <v-spacer></v-spacer>
                    <i style="" class="material-icons primary_text--text dark-mode-button vertical-align-middle padding-bottom-3" v-bind:title="[($vuetify.theme.dark) ? 'Light Mode': 'Night Mode']" v-on:click="swapMode">{{ ($vuetify.theme.dark) ? 'brightness_5': 'brightness_2' }}</i>
                    
                </v-list-item-title>
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
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer> -->
    </nav>
</template>
<style lang="scss">
    @import '../sass/exam.scss';
</style>

<script>
import ExamListCard from '@/components/home_navbar_exam_list'
import Logo from '@/components/company_logo'
export default {
  name: 'App',
  components: {  Logo, ExamListCard,},
  data () {
    },
    methods: {
        swapMode: function () {
            this.$store.state.store.night_mode_status = !this.$store.state.store.night_mode_status
            this.$vuetify.theme.dark = this.$store.state.store.night_mode_status
            localStorage.setItem("night_mode_status", JSON.stringify(this.$store.state.store.night_mode_status));
        },
        
    },
    computed: {
    }
}
</script>