import listBlogs from '../components/listBlogs.vue';
import addBlog from '../components/addBlog';

export default [
    {path: '/', component: listBlogs},
    {path: '/add-blog', component: addBlog}
]