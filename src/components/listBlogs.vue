<template>
  <main>
      <slot v-if="spinner"></slot>
      <div class="blog" v-for="blog in blogs">
        <h2>{{blog.title}}</h2>
        <p>{{blog.abstract}}</p>
      </div>
    </main>
</template>

<script>

export default {
    data() {
        return {
            blogs: [],
            spinner: true
        }
    },
    created() {
        var here = this;
        this.axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=a51e08a31a5e4cad8451d9aa2f501774')
        .then((response) => {

            function getBlogs() {
                here.blogs = response.data.results;
                here.spinner = false;
            };
            
            setTimeout(getBlogs, 1000);
            
        });
    }
}
</script>
