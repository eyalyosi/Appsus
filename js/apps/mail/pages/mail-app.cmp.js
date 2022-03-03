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
                <mail-folder-list @filter="setFilter" :unreadMailsCount="unreadMailsCount" @show-compose="showComposeMail" @Show-Sent="setFilter"/>
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
            // filterBy: null
            filterBy: {
                searchKey: '',
                label: 'All',
                isRead: null
            }
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
            var res = this.mails.filter(mail => (mail.isRead === false) && (mail.isSent === false))
            this.unreadMailsCount = res.length
        },
        showComposeMail() {
            console.log('hi')
        },
        setFilter(filterBy) {
            this.selectedMail = null
            this.filterBy = filterBy
            // console.log(filterBy);
        }
    },
    computed: {
        mailToDisplay() {
            if (!this.filterBy) return this.mails
            if (!this.mails) return
            if (this.filterBy.label === 'All') {
                return this.mails.filter((mail) => (!mail.isSent))
            }
            if (this.filterBy.label === 'Read') {
                return this.mails.filter((mail) => (mail.isRead) && (!mail.isSent))
            }
            if (this.filterBy.label === 'Unread') {
                return this.mails.filter((mail) => (!mail.isRead) && (!mail.isSent))
            }
            if (this.filterBy.isRead) {
                console.log('hi');
                return this.mails.filter((mail) => (mail.isSent))
            }
            if (this.filterBy.searchKey) {
                console.log('hi');
                const regex = new RegExp(this.filterBy.searchKey, 'i')
                return this.mails.filter((mail) => (regex.test(mail.subject) || regex.test(mail.body) ||
                    regex.test(mail.body) || regex.test(mail.to) || regex.test(mail.from)) && (!mail.isSent))
            }
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