<template>
    <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Entrance and Recruitment Exams</v-list-item-title>
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
        return {
            items: [    
                { title: 'ENGINEERING',
                    sub_items1: [
                        { title: 'JEE Advanced' },
                        { title: 'JEE Main' },
                        { title: 'BITSAT' },
                        { title: 'GATE',
                            sub_items2: [
                                { title: 'GATE - CE' },
                                { title: 'GATE - CH' },
                                { title: 'GATE - CS' },
                                { title: 'GATE - ME' },
                                { title: 'GATE - PH' },
                                { title: 'GATE - EE' },
                                { title: 'GATE - CY' },
                            ]
                        },
                    ],
                },
                { title: 'MEDICAL',
                    sub_items1: [
                        { title: 'NEET' },
                        { title: 'AIIMS' },
                        { title: 'NEET PG' },
                        { title: 'AIIMS PG' },
                    ],
                },
                { title: 'BANK',
                    sub_items1: [
                        { title: 'IBPS PO' },
                        { title: 'SBI PO' },
                        { title: 'IBPS RRB' },
                        { title: 'IBPS Clerk' },
                        { title: 'RBI Assistant' },
                        { title: 'RBI Grade B' },
                    ],
                },
                { title: 'MBA',
                    sub_items1: [
                        { title: 'CAT' },
                        { title: 'XAT' },
                        { title: 'SNAP' },
                        { title: 'MAT' },
                    ],
                },
                { title: 'CIVIL SERVICES',
                    sub_items1: [
                        { title: 'IAS' },
                        { title: 'IFS' },
                        { title: 'IES ISS' },
                        { title: 'RAS' },
                        { title: 'ESE' },
                    ],
                },
                { title: 'FOREIGN STUDY',
                    sub_items1: [
                        { title: 'GMAT' },
                        { title: 'IELTS' },
                        { title: 'GRE' },
                        { title: 'TOEFL' },
                        { title: 'SAT' },
                    ],
                },
                { title: 'SCHOOL',
                    sub_items1: [
                        { title: 'NTSE' },
                        { title: 'KVPY' },
                        { title: 'Class 9' },
                        { title: 'Class 10' },
                        { title: 'Class 11' },
                        { title: 'Class 12' },
                    ],
                },
            ],
        }
    },  
}
</script>