import listBlogs from '../components/listBlogs';
import addBlog from '../components/addBlog';
import singlePage from '../components/singlePage'

export default [
    {path: 'https://superherowebdev.github.io/VueLearn-01/', component: listBlogs},
    {path: 'https://superherowebdev.github.io/VueLearn-01/add-blog', component: addBlog},
    {path: 'https://superherowebdev.github.io/VueLearn-01/blog/:id', component: singlePage}
]