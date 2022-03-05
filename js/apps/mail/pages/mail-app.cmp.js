import { mailService } from '../service/mail.service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailFolderList from '../cmps/mail-folder-list.cmp.js'
import mailDetails from './mail-details.cmp.js'
import mailCompose from '../cmps/mail-compose.cmp.js'

export default {
    template: `
    
        <section class="mail-app main-layout">
            <mail-filter @filtered="setFilter" />
            <div class="main-mail flex space">
                <mail-folder-list @filter="setFilter" :unreadMailsCount="unreadMailsCount" @show-compose="showComposeMail" @Show-Sent="setFilter" @Show-Starred="setFilter"/>
                <mail-list v-if="showMails" :mails="mailToDisplay" @mail-selected="setSelectedMail" @update-Star="setStarred" @update-Read="setReadUnread" @delete-mail="removeMail"></mail-list>
                <mail-details v-if="selectedMail" :mail="selectedMail" @remove="removeMail"/>
                <mail-compose v-if="isCompuse" @add-new-mail="add"/>
            </div>
        </section>
    `,
    components: {
        mailList,
        mailFilter,
        mailFolderList,
        mailDetails,
        mailCompose
    },
    data() {
        return {
            mails: null,
            selectedMail: null,
            unreadMailsCount: null,
            isCompuse: false,
            filterBy: {
                searchKey: '',
                label: 'All',
                isRead: null,
                isSent: null,
            },
            showMails: true
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
        setSelectedMail(selectedMail) {
            selectedMail.isRead = true
            mailService.save(selectedMail)
                .then(() => {
                    this.selectedMail = selectedMail
                    this.showMails = false
                    this.mails = [...this.mails]
                })
        },
        showInbox() {
            this.selectedMail = null
            this.isCompuse = false
            this.showMails = true
        },
        removeMail(id) {
            mailService.remove(id)
                .then(() => {
                    const idx = this.mails.findIndex((mail) => mail.id === id);
                    this.mails.splice(idx, 1)
                    this.selectedMail = null
                    this.showMails = true
                    this.mails = [...this.mails]
                })
        },
        unreadForDisplay() {
            if (!this.mails) return
            var res = this.mails.filter(mail => (mail.isRead === false) && (mail.isSent === false))
            this.unreadMailsCount = res.length
        },
        showComposeMail() {
            this.selectedMail = null
            this.showMails = false
            this.isCompuse = true
        },
        setFilter(filterBy) {
            this.isCompuse = false
            this.selectedMail = null
            this.showMails = true
            this.filterBy = filterBy
        },
        add(newMail) {
            mailService.addNewMail(newMail)
                .then((newMailSaved) => {
                    // this.mails.push(newMailSaved)
                    this.mails = [newMailSaved, ...this.mails]
                    this.showMails = true
                    this.isCompuse = false
                })
        },
        setStarred(mailId) {
            var mail = this.mails.find((mail) => mail.id === mailId)
            mail.isStarred = !mail.isStarred
            mailService.save(mail)
                .then(() => {
                    this.mails = [...this.mails]
                })
        },
        setReadUnread(mailId) {
            var mail = this.mails.find((mail) => mail.id === mailId)
            mail.isRead = !mail.isRead
            mailService.save(mail)
                .then(() => {
                    this.mails = [...this.mails]
                })
        }
    },
    computed: {
        mailToDisplay() {
            if (!this.mails) return
            // else if (!this.filterBy || !this.filterBy.label && !this.filterBy.isSent) {
            else if (!this.filterBy) {
                return this.mails.filter((mail) => (!mail.isSent))
            }
            else if (this.filterBy.label === 'All') {
                return this.mails.filter((mail) => (!mail.isSent))
            }
            else if (this.filterBy.label === 'Read') {
                return this.mails.filter((mail) => (mail.isRead) && (!mail.isSent))
            }
            else if (this.filterBy.label === 'Unread') {
                return this.mails.filter((mail) => (!mail.isRead) && (!mail.isSent))
            }
            else if (this.filterBy.label === 'Starred') {
                return this.mails.filter((mail) => (mail.isStarred) && (!mail.isSent))
            }
            else if (this.filterBy.isSent) {
                return this.mails.filter((mail) => (mail.isSent))
            }
            const regex = new RegExp(this.filterBy.searchKey, 'i')
            return this.mails.filter((mail) => (regex.test(mail.subject) || regex.test(mail.body) ||
                regex.test(mail.body) || regex.test(mail.to) || regex.test(mail.from)) && (!mail.isSent))
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