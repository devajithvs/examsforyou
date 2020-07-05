<template>
    <section class="bg-white">
        <nav class="navbar container flex space-between">
          <img src="@/assets/menu.svg" class="icon menu__icon" alt="">
          <div class="e4y__left flex ml-2">
            <img src="@/assets/Logo_only.svg" class="icon logo__icon mr-2" alt="">
            <img src="@/assets/Logo_text.svg" class="icon logotext__icon mr-2" alt="">
            <div id="megamenu" @mouseleave="expand = false">
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
                <ExamListCard v-show="expand"/>
            </div>
            <form class="search-container ml-2">
                <div class="search-form">
                    <input class="search-bar" placeholder="What do you want to learn?" autocomplete="on" type="text">
                </div>
                <button id="search-button" type="submit"></button>
            </form>
          </div>
         
          <button class="navbar-button button success">
            <div class="button-content">
              <span class="font-bold font-18">Login</span>
            </div>
          </button>

          <img src="@/assets/search_black.svg" class="search__icon" alt="">
        </nav>
        <div class="divider-horizontal"></div> 
    </section>
</template>

<script>
import ExamListCard from '@/components/home_navbar_exam_list'
export default {
  name: 'App',
  components: { ExamListCard,},
  data: () => ({
    expand: false,
    }),
    methods: {        
    },
    computed: {  
    }
}
</script>