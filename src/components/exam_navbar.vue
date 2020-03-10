<template>
    <nav>
        <v-app-bar app class="primary" dense dark>

            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase hidden-sm-and-down">
                <span>EXAMS</span>
                <span class="font-weight-bold">FORYOU</span>
            </v-toolbar-title>
            <v-toolbar-title class="text-uppercase hidden-md-and-up">
                <span>E</span>
                <span class="font-weight-bold">4</span>
                <span>Y</span>
            </v-toolbar-title>
            <v-toolbar-title class="text-uppercase hidden-sm-and-down pl-5">
                <span id="exam-name" class="subtitle-2">JEE Advanced 2019</span>
            </v-toolbar-title>
            
            
            <v-spacer></v-spacer>

            <span class="time hidden-sm-and-down pr-2">Time Left:</span>
            <v-icon class="white--text pr-1 left">access_time</v-icon>
            <span class="time pr-5 " id="time-left">02:45:25</span>
            <v-btn flat class="success">
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
            drawer: false
        }
    }
    
}
</script>