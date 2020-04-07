<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" lg="3" sm="4"
                v-for="(item, index) in items"
                :key="index"
                >
                    <div class="text-center body-1 mb-2">{{ item.title }}</div>

                    <div>
                        <span
                        v-for="(item2, index2) in item.sub_items1"
                        :key="index2"
                        >
                            <span v-if="item2.sub_items2" >
                                <v-list-item-title
                                    v-for="(item3, index3) in item2.sub_items2"
                                    :key="index3"
                                    class="text-center caption">{{ item3.title }}
                                </v-list-item-title>
                            </span>
                            <span v-else>
                                <v-list-item-title class="text-center caption">{{ item2.title }}</v-list-item-title>
                            </span>
                        </span>
                    </div>   
                </v-col>
            </v-row>   
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
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
