import { mailService } from '../service/mail.service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailFolderList from '../cmps/mail-folder-list.cmp.js'
//TODO: nav bar on the left
//TODO:

export default {
    template: `
    <h1>mail</h1>
    <section class="mail-app main-layout">
            <!-- <mail-add />
            <mail-nav />
            <mail-details /> -->
            <mail-filter />
            <mail-folder-list />
            <mail-list :mails="mails"></book-list>
    </section>
    `,
    components: {
        mailList,
        mailFilter,
        mailFolderList
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
