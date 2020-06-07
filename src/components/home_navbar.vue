<template>
    <nav>
        <v-app-bar app class="navbar" elevate-on-scroll>        
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase hidden-sm-and-down">
                <Logo :isTextRequired="true"/>
            </v-toolbar-title>
            <v-toolbar-title class="text-uppercase hidden-md-and-up">
                <Logo :isTextRequired="false"/>
            </v-toolbar-title> 
            <div style="overflow: visible;" class="dropdown" @mouseleave="expand = false">
                <v-col
                  cols="12"
                  lg="3"
                >
                    <v-btn 
                    text 
                    flat
                    @click="expand = !expand"
                    @mouseover="expand = true"
                    class="hidden-xs-only ml-5 mr-5 login explore"
                    :class="expand ? 'navbar' : 'success'">
                        <span class="no-capitalization ml-n1" :class="(!$vuetify.theme.dark && expand) ? 'success--text' : 'white--text'">Explore</span>
                        <v-icon size="15" class="mr-n1" :class="(!$vuetify.theme.dark && expand) ? 'success--text' : 'white--text'">{{expand ? 'expand_less' : 'expand_more'}}</v-icon>
                    </v-btn>
                </v-col>
                <ExamListCard class="overlay transparent" v-show="expand"/>
            </div>

            <v-text-field class="mt-5 ml-4 mr-4 hidden-sm-and-down"
                color="primary_text--text"
                append-outer-icon="search"
                placeholder="Search">
            </v-text-field>
            
            <v-spacer></v-spacer>
            <v-btn text class="success hidden-xs-only mr-5 login">
                <span class="white--text no-capitalization">Login</span>
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
    .explore:hover::before {
        opacity: 0 !important;
      }
    .dropdown{
        position: relative;
        display: inline-block;
    }
    .overlay{
        position: absolute;
        min-width: 200px;
        background-color: #f1f1f1;
        width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }
</style>

<script>
import ExamListCard from '@/components/home_navbar_exam_list4'
import Logo from '@/components/company_logo'
export default {
  name: 'App',
  components: {  Logo, ExamListCard,},
  data: () => ({
    expand: false,
    }),
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