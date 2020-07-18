<template>
    <div class="sideMenu-container sidenav-width">
       <div class="bg-white round-border-5 shadow full-height">
            <div class="flex">
                <ul class="flex-vertical space-around full-width" v-show="!currentItem">
                    <li class="cursor-pointer flex space-around align-center font-16 gray-1 hover-darker pt-1 pb-1"
                        v-for="(item, index) in exam_list_level1"
                        :key="index"
                        @click="currentItem = item"
                        >
                        <div class="icon" :class="exam_list_level1_icons[index]">
                        </div>
                        <div class="width-50">
                            {{ item }}
                        </div>
                        <span class="icon right__icon-black"></span>
                    </li>
                </ul>
                <ul class="flex-vertical space-around secondary full-width" v-show="currentItem">
                    <li class="cursor-pointer flex space-around align-center font-18 gray-1 mb-3" @click="currentItem = ''">
                        <span class="icon right__icon-black rotate180"></span>
                        <div class="font-18 width-80">
                            {{currentItem}}
                        </div>
                    </li>
                    <div class="divider-horizontal mb-3"></div>
                    <li class="cursor-pointer flex space-around align-center font-18 mb-3 gray-1"
                        v-for="(item, index) in exam_list_level2[currentItem]"
                        :key="index"
                        >
                        <a class="width-80">
                            {{ item }}
                        </a>
                        <span class="icon right__icon-black"></span>
                    </li>
                </ul>
            </div>
       </div>
    </div>

</template>

<script>
export default {
    props: {
        currentItem: {
            type: String,
        },
    },
    computed: {
    },
    data () {
        return {
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