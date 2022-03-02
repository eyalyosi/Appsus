// import mailApp from './views/home-app.cmp.js';
import homePage from './pages/home-page.js'
import noteApp from './apps/note-app/pages/note-app.cmp.js'
import mailApp from './apps/mail/pages/mail-app.cmp.js';
// import carEdit from './views/car-edit.cmp.js';

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
        component: mailApp
    },
    // {
    //     path: '/about',
    //     component: aboutPage,
    //     children: [
    //         {
    //             path: 'team',
    //             component: aboutTeam
    //         },
    //         {
    //             path: 'services',
    //             component: aboutServices
    //         },
    //     ]
    // },
    // {
    //     path: '/car/edit/:carId?',
    //     component: carEdit
    // },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});