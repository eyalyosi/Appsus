
//TODO button make unread in mail
export default {
    props: ['mail'],
    template: `
            <div class="single-mail flex space" @click="changeToRead()">
                <div class="mail-to" :class="isRead">
                         {{mail.from}}
                </div >
                <div class="mail-title-subject-container">
                       <span :class="isRead">{{mail.subject}} - </span>
                       <span> {{mail.body}}</span>
                </div>
                <div>{{mail.sentAt}}</div>
            </div>
    `,
    data() {
        return {
            
        }
    },
    created() {
    },
    methods: {
        changeToRead() {
            this.mail.isRead = true
        }
    },
    computed: {
        isRead() {
            if (!this.mail.isRead) return { isRead: [this.mail.from , this.mail.subject]}

        },

    }
}