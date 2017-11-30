<template>
  <div class="wrapper">
      <app-header></app-header>
      <app-nav v-on:routeState="reciveData($event)"></app-nav>
      <filters v-if="routeState"></filters>
      <transition name="addBlog">
        <router-view>
          <spinner></spinner>
        </router-view>
      </transition>
      <app-footer></app-footer>
  </div>
</template>

<script>
import header from './components/header';
import nav from './components/nav';
import listBlogs from './components/listBlogs';
import addBlog from './components/addBlog';
import footer from './components/footer';
import spinner from './components/RotateSquare.vue'
import filters from './components/filters.vue'


export default {
  components: {
    'app-header': header,
    'app-nav': nav,
    'listBlogs': listBlogs,
    'app-footer': footer,
    'addBlog': addBlog,
    'spinner': spinner,
    'filters': filters
  },
  data () {
    return {
      routeState: true
    }
  },
  methods: {
    reciveData: function(par){
      this.routeState = par;
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';


// Slide Fade
.addBlog-enter-active,
.addBlog-leave-active {
  transition: all .3s ease-in-out;
}

.addBlog-enter,
.addBlog-leave-to {
  opacity: 0;
  transform: translateX(20px)
}

</style>
