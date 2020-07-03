<template>
    <div id="previous-papers" class="examinfo__content container">
      <ExamNotification/>
      <div class="exam-info left-info grid-3">
        <div class="qp-card card bg-white"
        v-for="index in 10" :key="index">

          <div class="font-18">JEE Mains Previous Paper 1</div>
          <div class="gray-2 font-10">Held On: 9 Jan 2019 </div>
          <div class="flexbox space-between mt-3"
            v-for="item in exam_info"
            :key="item.title"
          >
            <span class="font-15">{{ item.title }}</span>
            <span class="font-15 gray-1"> {{ item.value }}</span>
          </div>
          <div class="divider-horizontal-primary mt-2 mb-2"></div>
          <button class="button success white center-button">Attempt</button>
        </div>
      </div>
    </div>
</template>

<script>
import ExamNotification from './ExamNotification'
export default {
  components: { ExamNotification, },
  data () {
    return {
      exam_info: [
        { title: 'Questions', value: '180' },
        { title: 'Duration', value: '120 Minutes' },
        { title: 'Maximum Marks', value: '360' },
      ],
    }
  }
}
</script>

San Francisco
