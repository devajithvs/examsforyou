<template>
  <div>
   
    <v-container>
        <v-row justify="center">
            <v-col cols="12" lg="6" md="9" sm="10">
                <img :src="img" style="margin-top:1vh; width:200px; height: auto;" v-bind:style="[$vuetify.theme.dark ? {'filter': 'invert(100%)'} : {}]"/>
            </v-col>
            <v-spacer></v-spacer>
            <i title="Time Left" class="material-icons primary_text--text pr-1 left">facebook</i>
        </v-row> 
    </v-container>	
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
        img: require('@/assets/logo_with_text.svg'),
    }
  }
}
</script>