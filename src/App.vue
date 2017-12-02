<template>
<div>
    <div id="loaderApp" v-show="!appOn">
      <div class="center">
        <spinner></spinner>
        <p>Loading your sweet app</p>
      </div>
    </div>

    <div class="wrapper" v-show="appOn">
      <app-header></app-header>
      <app-nav v-on:routeState="reciveData($event)"></app-nav>
      <filters v-if="routeState"></filters>
      <transition name="addBlog">
        <keep-alive>
          <router-view v-on:appOn="switchApp($event)">
            <spinner></spinner>
          </router-view>
        </keep-alive>
      </transition>
      <app-footer></app-footer>
    </div>
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
      routeState: true,
      appOn: false
    }
  },
  methods: {
    reciveData: function(param){
      this.routeState = param;
    },
    switchApp: function(param){
      setTimeout(() => {
         this.appOn = param;
      }, 2000);
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

//loaderApp
#loaderApp {
  text-align: center;
  height: 100vh;
  width: 100%;
  background-color: hsl(0, 0%, 15%);
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
