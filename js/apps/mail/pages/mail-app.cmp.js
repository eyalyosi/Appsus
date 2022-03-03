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
            <mail-folder-list @show-inbox="showInbox" :unreadMailscount="unreadMailscount"/>
            <mail-details v-if="selectedMail" :mail="selectedMail" @remove="removeMail"/>
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
        this.getMails()
    },
    methods: {
        getMails() {
            mailService.query()
                .then(mails => {
                    this.mails = mails
                    this.unreadForDisplay()
                })
        },
        setSelectedMail(mail) {
            this.selectedMail = mail
            mailService.save(mail)

        },
        showInbox() {
            this.selectedMail = null
        },
        removeMail(id) {
            mailService.remove(id)
                .then(() => {
                    const idx = this.mails.findIndex((mail) => mail.id === id);
                    this.mails.splice(idx, 1);
                    this.selectedMail = null

                    // showSuccessMsg('Deleted succesfully');
                })
        },
        unreadForDisplay() {
            var res = this.mails.filter(mail => mail.isRead === false)
            this.unreadMailscount = res.length
        }
        // puki() {
        //     console.log(this.unreadMailscount);
        // },

    },
    computed: {
    },
    watch: {
        unreadMailscount: {
            handler() {
                this.getMails()
                // console.log('hi');
            },
            immediate: true,
        }
    }
}