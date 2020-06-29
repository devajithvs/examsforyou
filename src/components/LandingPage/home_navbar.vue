<template>
    <div>
        <nav class="navbar container">
          <img src="assets/menu.svg" class="icon menu__icon" alt="">
          <div class="e4y__left">
            <img src="@/assets/Logo_only.svg" class="icon logo__icon" alt="">
            <img src="@/assets/Logo_text.svg" class="icon logotext__icon" alt="">
            <div style="overflow: visible;" class="dropdown" @mouseleave="expand = false">
                <button
                @click="expand = !expand"
                @mouseover="expand = true"
                class="explore explore-button button success btn-hover-ghost"
                >
                    <div class="explore-content">
                    <span class="bold explore-text btn-hover-ghost">Explore</span>
                    <span class="icon down__icon btn-hover-ghost"></span>
                </div>
                </button>
                <ExamListCard class="overlay transparent" v-show="expand"/>
            </div>
            <form class="search-container">
                <div class="search-form">
                    <input class="search-bar" placeholder="What do you want to learn?" autocomplete="on" type="text">
                </div>
                <button id="search-button" type="submit"></button>
            </form>
          </div>
         
          <button class="login-button button success">
            <span class="bold">Login</span>
          </button>

          <img src="@/assets/search_black.svg" class="search__icon" alt="">
        </nav>
        <div class="divider-horizontal"></div> 
    </div>

</template>
<style>

    @import '../../css/main.css';
    .explore:hover::before {
        opacity: 0 !important;
    }
    .dropdown{
        position: relative;
        display: inline-block;
    }
    .overlay{
        position: absolute;
        min-width: 200px;
        background-color: #f1f1f1;
        width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }
</style>

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