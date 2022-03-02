import mailList from '../cmps/mail-list.cmp.js'
import { mailService } from '../service/mail.service.js'


//TODO: nav bar on the left
//TODO:

export default {
    template: `
    <h1>mail</h1>
    <section class="mail-app main-layout">
            <!-- <mail-add />
            <mail-nav />
            <mail-filter />
            <mail-details /> -->
            <mail-list :mails="mails"></book-list>
    </section>
    `,
    components: {
        mailList,
    },
    data() {
        return {
            mails: null,
        }
    },
    created() {
        mailService.query()
            .then(mails => this.mails = mails)
    },
    methods: {

    },
    computed: {},
}
