
export default {
    props: ['unreadMailsCount'],
    template: `
       <section class="mail-folder-list">
           <div @click="onCompuse"><img src="/png/005-plus.png">Compose</div>
           <div @click="showInbox"><img src="/png/002-download.png"> Inbox <span class="unread">({{unreadMailsCount}})</span></div>
           <div><img src="/png/003-star.png"> Starred</div>
           <div @Click="sentMails"><img src="/png/004-mail.png"> Sent Mail</div>
           <!-- <div><img src="/png/001-drafts.png"> Drafts</div> -->
       </section>
    `,
    components: {
    },
    data() {
        return {
        }
    }, created() {

    },
    methods: {
        showInbox() {
            this.$emit('filter', { mailfrom: '', label: 'All', isRead: '' })
        },
        onCompuse() {
            this.$emit('show-compose')
        },
        sentMails() {
            this.$emit('Show-Sent', { mailfrom: '', label: '', isRead: true })
        }
    },
    computed: {
    }
}