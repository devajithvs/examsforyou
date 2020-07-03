<template>
    <div id="previous-papers" class="examinfo__content container">
      <ExamNotification/>
      <div class="exam-index card bg-white">
        <h2 class="font-16 text-center primary mb-5">JEE Main Updates and Notifications</h2>
        <div class="divider-horizontal mt-2 mb-2"></div>
        <div class="notifications mb-1">
          <span class="font-15 width-90 notification-text">JEE Main 2020 admit card to be available in the first week of July</span>
          <span class="icon right__icon-black"></span>
        </div>
        <div class="divider-horizontal mt-2 mb-2"></div>
        <div class="notifications mb-1">
          <span class="font-15 width-90 notification-text">Je available in the first week of July</span>
          <span class="icon right__icon-black"></span>
        </div>
        <div class="divider-horizontal mt-2 mb-2"></div>
        <div class="notifications mb-1">
          <span class="font-15 width-90 notification-text">JEE Main 2020 admit card to be available in the first week of July</span>
          <span class="icon right__icon-black"></span>
        </div>
        <div class="divider-horizontal mt-2 mb-2"></div>
        <div class="notifications mb-1">
          <span class="font-15 width-90 notification-text">JEE Main 2020 admit card to be available in the first week of July</span>
          <span class="icon right__icon-black"></span>
        </div> 
      </div>

      <div class="exam-material left-info grid-3 card bg-white">
        <div class="qp-card card bg-white shadow"
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
}
</script>
