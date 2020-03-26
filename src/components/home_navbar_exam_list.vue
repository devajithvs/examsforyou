<template>
    <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Entrance and Recruitment Exams</v-list-item-title>
              <v-list-item-subtitle>IIT JEE, NEET, GATE</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
            <v-list-item
            v-for="(item, index) in items"
            :key="index"
            >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                
            </v-list-item>
        </v-list>
    </v-card>

</template>

<script>
export default {
  name: 'App',
    data () {
        return{
            items: [
                { title: 'Click Me',
                    items: [
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me 2' },],
                },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }
    },   
}
</script>