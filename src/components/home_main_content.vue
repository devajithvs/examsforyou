<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg=6 md=9 sm=10>
          <div class="mt-9">
          <h1 class="text-center">Everything You Need To Ace Your Next Big Test</h1>
            <div>        
              <h1 class="mt-4">
              <v-text-field class="center"
              rounded
              single-line
              outlined
              color="primary_text--text"
              append-icon="search"
              placeholder="Search for Exams, Topics & more">
                </v-text-field> 
              </h1>
              <h4 class="text-center" >Attempt previous years exams with analytics, interactive digital reports and more absolutely FREE</h4>
            </div>
          </div>
        </v-col>
      </v-row>  
    </v-container>
    <v-divider></v-divider>
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
    }
  }
}
</script>