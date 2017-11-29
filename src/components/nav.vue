<template>
  <nav>
    <ul>
        <li><router-link to="/" exact>SHOW BLOGS</router-link></li>
        <li><router-link to="/add-blog" exact>ADD BLOG</router-link></li>
    </ul>
</nav>
</template>

<script>
export default {
  data() {
      return {
          openNav: false
      }
  }
}
</script>
