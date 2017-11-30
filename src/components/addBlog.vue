<template>
        <div id="add-blog">
            <div>
                <div v-show="submitted" id="submitted">
                    <h2>Thank you for posting!</h2>
                    <p>Your dummy content is appreciated</p>
                    <button v-on:click="clear">Post Another</button>
                </div>

                <form v-show="!submitted">
                    <h2 class="center">Add</h2>
                    <label for="title">Title:</label>
                    <input v-model.lazy="blog.title" type="text" id="title" required>
                    <label for="content">Content:</label>
                    <textarea v-model.lazy="blog.content" id="content" required></textarea>
                    <label>Category:</label>
                    <div id="checkbox">
                        <input v-model="blog.categories" type="checkbox" name="category" id="category1" value="category 1">
                        <label for="category1">category1</label>
                        <input v-model="blog.categories" type="checkbox" name="category" id="category2" value="category 2">
                        <label for="category2">category2</label>
                        <input v-model="blog.categories" type="checkbox" name="category" id="category3" value="category 3">
                        <label for="category3">category3</label>
                        <input v-model="blog.categories" type="checkbox" name="category" id="category4" value="category 4">   
                        <label for="category4">category4</label>
                    </div>
                    <label for="author">Author:</label>   
                    <select v-model="blog.author" name="author" id="author">
                        <option v-for="author in authors">{{author}}</option>
                    </select>
                    <button v-on:click.prevent="submit">Add Blog</button>
                </form>
                <hr>
                <div v-show="!submitted" id="preview">
                    <h2  class="center">Preview</h2>
                    <h3>Title:</h3>
                    <h3 class="gray">{{blog.title}}</h3>
                    <h3>Content:</h3>
                    <p>{{blog.content}}</p>
                    <h3 >Category:</h3>
                    <ul v-for="category in blog.categories">
                        <li>{{category}}</li>
                    </ul>
                    <h3 >Author:</h3>
                    <p>{{blog.author}}</p>
                </div>
            </div>
        </div>
</template>

<script>

export default {
    data() {
        return {
            blog: {
                title: '',
                content: '',
                author: '',
                categories: []
            },
            authors: ['Stan', 'Frank', 'Georgie'],
            submitted: false
        }
    },
    methods: {
        submit: function() {
            swal({
                title: "Are you sure?",
                text: "You cannot make any changes after this.",
                buttons: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    this.submitted = true;
                } else {
                    swal("Good choice. Better safe than sorry!");
                }
            });
            this.axios.post('#', this.blog)
            .then((response) => {
                console.log(response);
                
            });
            
        },
        clear: function() {
            this.blog.title = '';
            this.blog.content = '';
            this.blog.author = '';
            this.blog.categories = [];
            this.submitted = !this.submitted;
        }
    }
}
</script>

<style lang="scss">
.center {
        text-align: center;
    }

</style>

