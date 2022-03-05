import homePage from './pages/home-page.js'
import noteApp from './apps/note-app/pages/note-app.cmp.js'
import mailApp from './apps/mail/pages/mail-app.cmp.js';
import mailCompose from './apps/mail/cmps/mail-compose.cmp.js';

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/note',
        component: noteApp
    },
    {
        path: '/mail',
        component: mailApp,

    },
    {
        path:'/mail/:noteId',
        component:mailCompose,
    },
    {
        path:'/note/:mailId',
        component:noteApp,
    },

];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});