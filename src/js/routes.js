import listBlogs from '../components/listBlogs';
import addBlog from '../components/addBlog';
import singlePage from '../components/singlePage'

export default [
    {path: '/', component: listBlogs},
    {path: '/add-blog', component: addBlog},
    {path: '/blog/:id', component: singlePage},
    { path: "*", redirect: "/" }
]