import { mailService } from '../service/mail.service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailFolderList from '../cmps/mail-folder-list.cmp.js'
import mailDetails from './mail-details.cmp.js'

export default {
    template: `
    <h1>mail</h1>
    <section class="mail-app main-layout flex space">
            <!-- <mail-add /> -->
            <!-- <mail-nav /> -->
            <!-- <mail-filter /> -->
            <mail-folder-list />
            <mail-details v-if="selectedMail" />
            <mail-list v-else :mails="mails" @mail-selected="setSelectedMail"></mail-list>
    </section>
    `,
    components: {
        mailList,
        mailFilter,
        mailFolderList,
        mailDetails
    },
    data() {
        return {
            mails: null,
            selectedMail: null,
        }
    },
    created() {
        mailService.query()
            .then(mails => this.mails = mails)
    },
    methods: {
        setSelectedMail(mail) {
            this.selectedMail = mail
            console.log(this.selectedMail);
        }
    },
    computed: {

    },
}
