<template>
  <main>
      <div class="blog" v-for="blog in processedPosts">
        <div class="image" v-bind:style="{ backgroundImage: 'url(' + blog.image_url + ')'}"></div>
        <h2>{{blog.title}}</h2>
        <p>{{blog.abstract}}</p>
      </div>
    </main>
</template>

<script>
import {bus} from '../main.js';

const NYTBaseUrl = 'https://api.nytimes.com/svc/topstories/v2/'
const ApiKey = "a51e08a31a5e4cad8451d9aa2f501774"

function buildUrl(url) {
    return NYTBaseUrl + url + ".json?api-key=" + ApiKey;
}

export default {
    data() {
        return {
            blogs: [],
            spinner: true,
        }
    },
    created() {
        this.getPosts('home');
    },
    methods: {
        getPosts(section) {
            var url = buildUrl(section);
            this.axios.get(url)
            .then((response) => {
                this.blogs = response.data.results;
            })
            .catch( error => {swal("There is an error with loading data");
            });
        }
    },
    computed: {
        processedPosts: function() {
            var posts = this.blogs;
            // add images
            posts.map(post => {
                var imgObj = post.multimedia
                .find(media => media.format === 'superJumbo');
                post.image_url = imgObj ? imgObj.url : 'http://placehold.it/500x120?text=N/A'
            });
            return posts;
        }
    }
}
</script>

<style lang="scss">

.image {
    height: 100px;
    margin-top: 1rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid hsl(0, 0%, 67%);
}

</style>


