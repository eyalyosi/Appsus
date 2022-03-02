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
            <mail-folder-list @show-inbox="showInbox" />
            <mail-details v-if="selectedMail" :mail="selectedMail"/>
            <mail-list v-else :mails="mails" @mail-selected="setSelectedMail"></mail-list>
        <!-- <button @click="puki">puki</button> -->
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
            unreadMailscount: null
        }
    },
    created() {
        mailService.query()
            .then(mails => this.mails = mails)
    },
    methods: {
        setSelectedMail(mail) {
            this.selectedMail = mail
        },
        showInbox() {
            this.selectedMail = null
        },
        // puki() {
        //     console.log(this.mails);
        //     this.unreadForDisplay()
        // },
        unreadForDisplay() {
            var res = this.mails.filter(mail => mail.isRead === false)
            console.log(res.length);
            unreadMailscount = res
        }
    },
    computed: {
        
    },
}
