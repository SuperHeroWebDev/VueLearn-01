<template>
  <main>
      <div class="blog" v-for="blog in processedPosts">
        <router-link v-bind:to="'/blog/' + blog.short_url.substr(16)">
            <div class="image" v-bind:style="{ backgroundImage: 'url(' + blog.image_url + ')'}"></div>
            <h2>{{blog.title}}</h2>
            <p>{{blog.abstract}}</p>
        </router-link>
      </div> 
      
      <div class="fullWidth" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="0">
          <slot v-if="spinner"></slot>
      </div>
      <transition name="fade-slow">
      <div v-if="end" class="noData">No more data</div>
      </transition>
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
            category: 'home',
            searchString: '',
            busy: false,
            counter: 0,
            end: false
        }
    },
    created() {
        bus.$on('sendSectionEmit', (data) => {
            this.end = false;
            this.busy = false;
            this.counter = 0;
            this.category = data;
            this.blogs = [];
            this.getPosts(this.category);
        });

        bus.$on('sendSearchEmit', (data) => {
            this.searchString= data;
        })

    },
    methods: {
        getPosts(section) {
            var url = buildUrl(section);
            this.axios.get(url)
            .then((response) => {
                //send to parent that it's loaded
                this.$emit('appOn', true);

                var arrLength = response.data.results.length;      
                for (var i = 0, j = 4; i < j; i++) {
                    if(this.counter < arrLength) {
                        this.spinner = false;
                        this.busy = false;
                        this.blogs.push(response.data.results[this.counter]);
                        this.counter++;
                    } else {
                        this.end = true;
                        this.spinner = false;
                        this.busy = true;
                    }
                }                 

            })
            .catch( error => {swal("There is an error with loading data");
            });
        },
        loadMore: function() {
            this.spinner = true;
            this.getPosts(this.category);
        }
    },
    computed: {
        processedPosts: function() {
            var posts = this.blogs;
            // add images
            posts.map(post => {
                var imgObj = post.multimedia
                .find(media => media.format === 'superJumbo');
                post.image_url = imgObj ? imgObj.url : 'https://placehold.it/500x120?text=N/A'
            });

            return posts.filter((item) => {
                var title = item.title;
                var lCase = title.toLowerCase();
                return lCase.match(this.searchString);
            })
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

.fullWidth {
    width: 100%;
    margin: 0 auto;
    text-align: center;
}

.noData {
    padding: 1rem;
    border: 1px solid hsl(0, 0%, 67%);
    width: 50%;
    text-align: center;
    background-color: hsl(153, 65%, 92%);
}

.fade-slow-enter-active{
    transition: opacity 3s;
}
.fade-slow-enter,
.fade-slow-leave-to {
    opacity: 0;
}

</style>