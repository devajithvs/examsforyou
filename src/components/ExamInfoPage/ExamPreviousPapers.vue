<template>
    <div id="primary">
      <div>
        <v-card
            max-width="250"
          >
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline text-wrap">JEE Mains Previous Paper 1</v-list-item-title>
                <v-list-item-subtitle class="text-wrap mt-3">Held On: 9 Jan 2019 </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>



            <v-list class="transparent mx-0">
              <v-list-item
                v-for="item in exam_info"
                :key="item.title"
              >
                <v-list-item-title class="text-wrap caption">{{ item.title }}</v-list-item-title>

                <v-list-item-subtitle class="text-right">
                  {{ item.value }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
              <v-btn class="success">Attempt </v-btn>
            </v-card-actions>
          </v-card>       
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        exam_info: [
          { title: 'Questions', value: '180' },
          { title: 'Duration', value: '120 Minutes' },
          { title: 'Maximum Marks', value: '360' },
        ],
      }
    },
  }
</script>

San Francisco
