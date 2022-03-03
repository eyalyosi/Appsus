import { mailService } from '../service/mail.service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailFolderList from '../cmps/mail-folder-list.cmp.js'
import mailDetails from './mail-details.cmp.js'

export default {
    template: `
    <h1>mail</h1>
        <section class="mail-app main-layout">
            <!-- <mail-add /> -->
            <!-- <mail-nav /> -->
            <mail-filter @filtered="setFilter"/>
            <div class="flex space">
                <mail-folder-list @show-inbox="showInbox" :unreadMailsCount="unreadMailsCount" @show-compose="showComposeMail"/>
                <mail-details v-if="selectedMail" :mail="selectedMail" @remove="removeMail"/>
                <mail-list v-else :mails="mailToDisplay" @mail-selected="setSelectedMail"></mail-list>
            </div>
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
            unreadMailsCount: null,
            filterBy: null,
        }
    },
    created() {
        this.getMails()
    },
    methods: {
        getMails() {
            mailService.query()
                .then(mails => {
                    this.mails = mails
                })
        },
        setSelectedMail(mail) {
            mailService.save(mail)
                .then(() => {
                    this.selectedMail = mail
                    mail.isRead = true
                    this.mails = [...this.mails]
                })
        },
        showInbox() {
            this.selectedMail = null
        },
        removeMail(id) {
            mailService.remove(id)
                .then(() => {
                    const idx = this.mails.findIndex((mail) => mail.id === id);
                    this.mails.splice(idx, 1)
                    this.mails = [...this.mails]
                    this.selectedMail = null

                    // showSuccessMsg('Deleted succesfully');
                })
        },
        unreadForDisplay() {
            if (!this.mails) return
            var res = this.mails.filter(mail => mail.isRead === false)
            this.unreadMailsCount = res.length
        },
        showComposeMail() {
            console.log('hi')
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
            // console.log(this.filterBy);
        }
    },
    computed: {
        mailToDisplay() {
            // console.log(this.mails);
            if (!this.filterBy) {
                    // console.log('hi');
                return this.mails}
            if (this.filterBy.label === 'All') {
                // console.log(this.mails);
                return this.mails.filter((mail) => (mail.isRead === true) && (mail.isRead === false))}

        }
    },
    watch: {
        mails: {
            handler() {
                this.unreadForDisplay()
            },
            immediate: true,
        }
    }
}