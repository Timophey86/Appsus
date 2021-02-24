import homePage from './main-pages/home-page.cmp.js'
import bookMainPage from './apps/book/js/pages/home-page.cmp.js'
import bookList from './apps/book/js/cmps/book-list.cmp.js'



const routes = [
    {
        path: '/',
        component: homePage,
    },
    // {
    //     path: '/mail',
    //     component: mailMainPage,
    // },
    // {
    //     path: '/keep',
    //     component: keepMainPage,
    // },
    {
        path: '/book',
        component: bookMainPage,
        children: [
            {
                path: 'list',
                component: bookList
            }
        ]
    }
]

export const myRouter = new VueRouter({ routes })