<template>
    <section class="bg-white fixed full-width on-top">
        <div >
          <SideNavCard v-show="sidemenu" v-bind:currentItem="''"/>
        </div>
        <div @mouseleave="expand = false">
          <ExamListCard v-show="expand"/>
        </div>
        <nav class="navbar container flex space-between " style="overflow:hidden;">
          <img src="@/assets/menu.svg" class="icon menu__icon" alt="" v-show="!sidemenu" @click="sidemenu = !sidemenu">
          <img src="@/assets/close.svg" class="icon menu__icon" alt="" v-show="sidemenu" @click="sidemenu = !sidemenu">
          <div class="e4y__left flex ml-2">
            <img src="@/assets/Logo_only.svg" class="icon logo__icon mr-2" alt="">
            <img src="@/assets/Logo_text.svg" class="icon logotext__icon mr-2" alt="">
            <div id="megamenu">
                <button
                @click="expand = !expand"
                @mouseover="expand = true"
                class="navbar-button button success ml-2"
                :class="expand ? 'ghost-on-hover' : ''"
                >
                    <div class="flex center align-center">
                      <span class="font-bold explore-text font-18">Explore</span>
                      <span class="icon down__icon"></span>
                    </div>
                </button>
            </div>
            <form class="search-container ml-2">
                <div class="search-form">
                    <input class="search-bar" placeholder="What do you want to learn?" autocomplete="on" type="text">
                </div>
                <button id="search-button" type="submit"></button>
            </form>
          </div>
         
          <button class="navbar-button button success">
            <span class="font-bold font-18">Login</span>
          </button>

          <img src="@/assets/search_black.svg" class="search__icon" alt="">
        </nav>
        <div class="divider-horizontal"></div>
    </section>
</template>

<script>
import ExamListCard from '@/components/home_navbar_exam_list'
import SideNavCard from '@/components/LandingPage/SideNav'
export default {
  name: 'App',
  components: { ExamListCard, SideNavCard,},
  data: () => ({
    expand: false,
    sidemenu: false,
    }),
    methods: {        
    },
    computed: {  
    }
}
</script>