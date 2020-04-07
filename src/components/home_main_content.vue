<template>
  <div>
    <v-container class="back">
      <v-row justify="center" align="center">
        <v-col cols="12" lg=6 md=9 sm=10>
          <div>
          <h1 class="text-center">Everything You Need To Ace Your Next Big Test</h1>
            <div id="inspire">        
              <h1 class="mt-4">
              <!-- <v-text-field class="center"
              rounded
              single-line
              outlined
              color="primary_text--text"
              append-icon="search"
              placeholder="Search for Exams, Topics & more">
                </v-text-field>  -->
              </h1>
              <h4 class="text-center" >Attempt previous years exams with analytics, interactive digital reports and more absolutely FREE</h4>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg=6 md=9 sm=10>
          <img v-bind:src="img" style="width:100%; height: auto;"/>
        </v-col>
      </v-row>  
    </v-container>
  </div>
</template>

<style lang="scss">
@media screen and (max-width: 667px) {
  body {
    overflow-x: hidden !important;
  }
  v-container {
    max-width: 100% !important;
    overflow-x: hidden !important;
  }
}
  
</style>

<script>

export default {
  name: 'App',
  data () {
    return {
      // img: require('@/assets/undraw_online_test.svg'),
      img: require('@/assets/undraw_exams.svg'),
    }
  }
}
</script>