<template>
    <div class="megaMenu-container">
       <div class="megaMenu round-border-5 shadow">
            <div class="mega-content">
                <ul class="mega-col">
                    <li class="mega-row dark-1 hover-darker mpt-1"
                        v-for="(item, index) in exam_list_level1"
                        :key="index"
                        @click="current_item_1 = item"
                        @mouseover="current_item_1 = item"
                        >
                        <div class="icon exam-icon" :class="exam_list_level1_icons[index]">
                        </div>
                        <div class="item">
                            {{ item }}
                        </div>
                        <span class="icon right__icon-black"></span>
                    </li>
                </ul>
                <ul class="mega-col secondary">
                    <li class="mega-row mb-1 dark-1">
                        <div class="item-2 mega-col-title">
                            {{current_item_1}}
                        </div>
                    </li>
                    <li class="mega-row mb-1 dark-1"
                        v-for="(item, index) in exam_list_level2[current_item_1]"
                        :key="index"
                        >
                        <a class="item-2">
                            {{ item }}
                        </a>
                    </li>
                </ul>
            </div>
       </div>
    </div>

</template>

<script>
export default {
  name: 'App',
    computed: {
    },
    data () {
        return {
            current_item_1 : '',
            
            exam_list_level1_icons: ['ENGINEERING', 'MEDICAL', 'BANK', 'MBA', 'CIVIL_SERVICES', 'FOREIGN_STUDY', 'SCHOOL'],
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