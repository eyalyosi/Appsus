

export default {
    template: `
       <section class="mail-folder-list">
           <div><img src="/png/005-plus.png">Compose</div>
           <div @click="showInbox"><img src="/png/002-download.png"> Inbox <span v-if="unreadMail">({{unreadMail}})</span></div>
           <div><img src="/png/003-star.png"> Starred</div>
           <div><img src="/png/004-mail.png"> Sent Mail</div>
           <div><img src="/png/001-drafts.png"> Drafts</div>
       </section>
    `,
    components: {
    },
    data() {
        return {
            unreadMail: null
        }
    },
    methods: {
        showInbox() {
            this.$emit('show-inbox')
        }
    },
    computed: {

    }
}