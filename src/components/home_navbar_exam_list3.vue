<template>
<div class="megaMenu">
    <div class="megaMenuInner" id="menu" style="height: 632.8px;"> 
        <ul style="height: 630.8px;">



        </ul>
    </div>
</div>


</template>
<style type="text/css">
    
html {
  font-size: 62.5%;
}

a label {
  cursor: pointer; 
}

a {
  text-decoration: none;
}

.megaMenu {
  position: absolute;
  min-width: 795px;
  padding: 15px 0 0; }

.megaMenu:before {
  color: green;
  content: "";
  position: absolute;
  top: 6px;
  left: 72px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff; }

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