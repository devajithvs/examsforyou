<template>
    <nav>
        <v-app-bar class="primary" dense dark>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase">
                <span>EXAMS</span>
                <span class="font-weight-bold">FORYOU</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="white">
                <span class="primary--text">Sign In</span>
                <v-icon right class="primary--text">home</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer white height="92vh" v-model="drawer">
            <v-list>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title>Application</v-list-item-title>
                <v-list-item-subtitle>Subtext</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
        </v-navigation-drawer>
    </nav>
</template>

<style lang="scss">
    
</style>
<script>
export default {
    data (){
        return{
            drawer: false
        }
    }
    
}
</script>