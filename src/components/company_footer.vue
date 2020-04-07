<template>
  <div style="col">
   
    <v-container>
        <v-row justify="center">
            <v-col cols="12" lg="6" md="9" sm="10">
                <Logo :isTextRequired="true"/>
            </v-col>
            <v-spacer></v-spacer>
            <i title="Time Left" class="material-icons primary_text--text pr-1 left">facebook</i>
            
        </v-row> 
        <v-row justify="center">
            <v-spacer></v-spacer>
            <span class="caption">vectors by https://icons8.com and https://undraw.co</span>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import Logo from '@/components/company_logo'
export default {
    name: 'App',
    components: { Logo },
    data () {
    }
}
</script>