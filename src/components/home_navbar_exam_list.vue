<template>
    <div>
        <v-row justify="left">
            <v-col class="main-col navbar">
                <v-list dense>
                    <v-list-item 
                    v-for="(item, index) in exam_list_level1"
                    :key="index"
                    @click="current_item_1 = item"
                    @mouseover="current_item_1 = item"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="items[0].icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title 
                        
                        :class="(item == current_item_1) ? 'success--text' : ''">

                        {{ item }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col class="sec-col navbar">
                <v-list dense>
                    <v-list-item 
                    v-for="(item, index) in exam_list_level2[current_item_1]"
                    :key="index"
                    >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </div>

</template>
<style type="text/css">
    
    .main-col{
        padding: 0 !IMPORTANT;
        height: inherit;
        position: relative;
        display: inline-block;
    }
    .sec-col{
        padding: 0 !IMPORTANT;
        position: absolute;
        float: left;
        min-width: 200px;
        width: 100%;
        height: 100%;
        margin-left: 200px;
    }
</style>
<script>
export default {
  name: 'App',
    computed: {
    },
    data () {
        return {
            items: [
        { text: 'Real-Time', icon: 'lock' },
        { text: 'Audience', icon: 'account' },
        { text: 'Conversions', icon: 'flag' },
      ],
            current_item_1 : '',
            exam_list_level1: ['ENGINEERING', 'MEDICAL', 'BANK', 'MBA', 'CIVIL SERVICES', 'FOREIGN STUDY', 'SCHOOL'],
            exam_list_level2: {
                'ENGINEERING' : ['JEE Main', 'JEE Advanced', 'BITSAT', 'GATE'],
                'MEDICAL' : ['NEET', 'AIIMS', 'NEET PG', 'AIIMS PG'],
                'BANK' : ['IBPS PO', 'SBI PO', 'IBPS RRB', 'IBPS Clerk', 'RBI Assistant', 'RBI Grade B'],
                'MBA' : ['CAT', 'XAT', 'SNAP', 'MAT'],
                'CIVIL SERVICES' : ['IFS', 'IESISS', 'RAS', 'ESE'],
                'FOREIGN STUDY' : ['GMAT', 'IELTS', 'GRE', 'TOEFL', 'SAT'],
                'SCHOOL' : ['NTSE', 'KVPY', 'CLASS 9', 'CLASS 10', 'CLASS 11', 'CLASS 12']
            },
            exam_list_level3: {
                'GATE' : ['GATE - CE', 'GATE - CH', 'GATE - CS', 'GATE - ME', 'GATE - PH', 'GATE - EE', 'GATE - CY']
            },
        }
    },  
}
</script>