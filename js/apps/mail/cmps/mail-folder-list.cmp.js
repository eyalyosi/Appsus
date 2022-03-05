
export default {
    props: ['unreadMailsCount'],
    template: `
       <section class="folder-list-container">
           <div class="compose-mail" @click="onCompuse"><img src="/png/005-plus.png">Compose</div>
           <div class="folder-list">
                <div @click="showInbox" class="inbox flex space align">
                    <div class="inbox-box"><img src="/png/002-download.png"> <span>Inbox</span>
                    </div>
                    <span class="unread">{{unreadMailsCount}}</span>
                </div>
                <div @click="showStarred"><img src="/png/003-star.png"> Starred</div>
                <div @Click="sentMails"><img src="/png/004-mail.png"> Sent Mail</div>
           </div>
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
            this.$emit('Show-Sent', { mailfrom: '', label: '', isRead: '', isSent: true })
        },
        showStarred() {
            this.$emit('Show-Starred', { mailfrom: '', label: 'Starred', isRead: '' })
        }
    },
    computed: {
    }
}