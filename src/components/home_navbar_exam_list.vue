<template>
    <v-card class="scroll-y" flat>
            <v-row justify="center">
                <v-col cols="12" lg="3" sm="4" class="navbar">
                    <v-list class="navbar">
                        <v-list-item 
                        v-for="(item, index) in data[0]"
                        :key="index"
                        >
                            <v-list-item-title class="">{{ item }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="12" lg="3" sm="4" class="navbar_darker">
                    <v-list class="navbar_darker">
                        <v-list-item 
                        v-for="(item, index) in data[1]"
                        :key="index"
                        >
                        <v-list-item-title :class="data[2][index]">{{ item }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="12" lg="3" sm="4" class="navbar">
                    <v-list class="navbar">
                        <span
                        v-for="(item2, index2) in items[0].sub_items1"
                        :key="index2"
                        >
                            <span v-if="item2.sub_items2">
                                <div class="body-1 font-weight-bold mt-3">{{ item2.title }}</div>
                                <v-list-item-title
                                    v-for="(item3, index3) in item2.sub_items2"
                                    :key="index3"
                                    class="body-1 mt-1">{{ item3.title }}
                                </v-list-item-title>
                            </span>
                            <span v-else>
                                <v-list-item-title class="body-1 mt-1">{{ item2.title }}</v-list-item-title>
                            </span>
                        </span>
                    </v-list>
                </v-col>
                <v-col cols="12" lg="3" sm="4" class="navbar_darker">
                    <v-list class="navbar_darker">
                        <v-list-item
                        v-for="(item, index) in items[0].sub_items1[3].sub_items2 "
                        :key="index"
                        >
                            <v-list-item-title class="">{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
    </v-card>

</template>
<style type="text/css">

</style>
<script>
export default {
  name: 'App',
    computed: {
        data: function() {



            // v-for="(item2, index2) in items[0].sub_items1"
            //             :key="index2"
            //             >
            //                 <span v-if="item2.sub_items2">
            //                     <div class="body-1 font-weight-bold mt-3">{{ item2.title }}</div>
            //                     <v-list-item-title
            //                         v-for="(item3, index3) in item2.sub_items2"
            //                         :key="index3"
            //                         class="body-1 mt-1">{{ item3.title }}
            //                     </v-list-item-title>
            //                 </span>
            //                 <span v-else>
            //                     <v-list-item-title class="body-1 mt-1">{{ item2.title }}</v-list-item-title>
            //                 </span>
            var returnValue = [[], [], []];
            let i = 0;
            // TODO Improve function.
            this.items.forEach(function (item0, index) {
                returnValue[0][index] = item0.title;
                item0.sub_items1.forEach(function (item1) {
                    returnValue[1][i] = item1.title;
                    returnValue[2][i] = "body-1 font-weight-bold";
                    i++;
                    if(item1.sub_items2) {
                        item1.sub_items2.forEach(function (item2) {
                            returnValue[1][i] = item2.title;
                            returnValue[2][i] = "body-1";
                            i++;
                        });
                    }

                });
            });
            console.log(returnValue);
            return returnValue;
        },
    },
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