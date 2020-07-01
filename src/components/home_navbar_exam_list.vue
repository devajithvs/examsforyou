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
<style type="text/css">
.megaMenu-container {
    z-index: 1;
    background-color: transparent;
    position: absolute;
    width: 460px;
    padding: 25px 5px 10px 10px;
    margin-left: auto;
    margin-right: auto;
}

/* triangle on top of megaMenu */
.megaMenu-container:after {
    z-index:2;
    content: "";
    position: absolute;
    top: 15px;
    left: 72px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--clr-white);
} 

.megaMenu {
    padding-top: 1rem;
    background-color: var(--clr-white);
}

.mega-col {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.secondary {
    justify-content: flex-start;
}

.mega-col-title {
    font-size: 1rem;
    margin-bottom: 1rem;
}

.mega-content {
    display: flex;
}

.mega-row {
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.item {
    width: 50%;
}

.item-2 {
    width: 80%;
}

</style>
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