import { router } from './router.js';
import appHeader from './cmps/app-header.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';



const options = {
    template: `
        <section>
            <app-header />
            <user-msg />
            <router-view />
         
        </section>
    `,
    components: {
        appHeader,
        
        userMsg
    }
};


const app = Vue.createApp(options);
app.use(router);
app.mount('#app');