<template>
<div class="megaMenu" style="min-width: 795px;">
    <div class="megaMenuInner" id="menu" style="height: 632.8px;">
        
        <ul id="megaMenuInnerMainUl" style="height: 630.8px;">

            <li v-for="(item, index) in exam_list_level1"
            :key="index"
            @click="current_item_1 = item"
            @mouseover="current_item_1 = item"
            :class="(item == current_item_1) ? 'active' : ''"
            style="visibility: visible; height: 630.8px;">
                <a href="#">{{ item }}
                    <i class="arrow right"></i>
                </a>
                <div class="megaInner" :class="(item == current_item_1) ? 'foo' : ''">                    
                    <div class="megaInnBlk">                                
                        <div class="innerList">
                            <h3>Exams</h3>
                            <ul>
                                <li 
                                v-for="item2 in exam_list_level2[current_item_1]"
                                :key="item2"
                                ><a href="https://engineering.careers360.com/exams/jee-main">{{ item2 }}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>

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
  width: 795px;
  padding: 15px 0 0; }

.megaMenu:before {
  content: "";
  position: absolute;
  top: 6px;
  left: 72px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff; }

.megaMenuInner > ul {
  position: relative;
  padding: 20px 0 0 0;
  margin: 0;
  list-style: none;
  height: auto;
  background-color: #fff;
  width: 239px; }
  .megaMenuInner > ul li > a {
    display: inline-block;
    width: 100%;
    padding: 7px 20px 7px;
    text-align: left;
    position: relative;
    color: #666; }
    .megaMenuInner > ul li > a span {
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -5px;
      font-size: 9px;
      color: #e5e5e5;
      font-weight: 600; }
    .megaMenuInner > ul li > a:hover {
      color: #3a4d95;
      font-weight: 600;
      background-color: #f2f2f2; }
      .megaMenuInner > ul li > a:hover span {
        color: #3a4d95; }


.megaMenuInner > v-list .active > a, .megaMenuInner > ul li.active > a, .megaMenuInner > ul > li.active > a > span {
  color: #3a4d95;
  font-weight: 600;
  background-color: #f2f2f2; }

.megaMenuInner {
  overflow: hidden;
  box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.2);
  border: solid 1px #e5e5e5;
  background-color: #fff;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  height: auto !important; }

.megaMenuInner > a {
  color: #666;
  text-align: left;
  font-weight: 400; }

.megaMenuInner ul {
  margin: 0;
  padding: 0;
  list-style: none; }

.megaMenuInner > ul > li:first-child {
  padding-top: 10px; }

.megaMenuInner > ul > li:last-child {
  padding-bottom: 10px; }

.megaInner {
  display: none;
  height: auto;
  background-color: #fff; }

.megaInner {
  position: absolute;
  top: 0;
  left: 239px;
  width: 556px;
  min-height: 430px;
  background-color: #f2f2f2; }

.arrow {
  border: solid black;
  border-width: 0px 1px 1px 0px;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.foo {
  display: block; }

.megaInnBlk {
  padding: 15px 30px; }

.innerList {
  display: inline-block;
  vertical-align: top;
  margin-top: 40px;
  width: 49%; }
  .innerList h3 {
    color: #333;
    font-size: 14px;
    margin: 0 0 10px;
    padding: 0;
    font-weight: 600; }
  .innerList ul li {
    list-style: none;
    margin-top: 10px;
    font-size: 12px;
    padding: 0 10px 0 0; }
    .innerList ul li a {
      font-size: 12px;
      margin: 0;
      width: auto !important;
      padding: 0;
      height: inherit;
      line-height: 15px; }

.innerList ul li a:hover {
    color: #3a4d95; }
.innerList:nth-child(-n+2) {
    margin-top: 0; }

.innerList ul {
  margin: 0;
  padding: 0;
  list-style: none; }

.sub-MENUNEW {
  display: inline-block;
  background: #dc3545;
  color: #fff !important;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 3px;
  margin-left: 6px;
  vertical-align: middle;
  position: relative;
  line-height: 10px !important; }
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