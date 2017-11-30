<template>
  <nav>
    <ul>
        <li v-on:click="checkRoute"><router-link to="/" exact>SHOW BLOGS</router-link></li>
        <li v-on:click="checkRoute"><router-link to="/add-blog" exact>ADD BLOG</router-link></li>
    </ul>
</nav>
</template>

<script>
export default {
  data() {
      return {
          openNav: false,
          route: false
      }
  },
  methods: {
        checkRoute: function() {
            if (this.$route.fullPath === '/') {
                this.route = true;
            } else {
                this.route = false;
            }
            this.$emit('routeState', this.route);
        }
    }
}
</script>
