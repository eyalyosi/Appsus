// TODO set mail send at
//TODO button make unread in mail

export default {
    props: ['mail'],
    template: `
            <div class="single-mail flex space" :class="unRead">
                <div class="mail-to" :class="isRead">
                         {{fromToDisplay}}
                </div >
                <div class="mail-title-subject-container">
                       <span :class="isRead">{{mail.subject}} - </span>
                       <span> {{bodyText}}</span>
                </div>
                <div>{{mail.sentAt}}</div>
                <!-- <div @click.stop="starMail" title="Star this Mail"><img src="/png/008-star-1.png" alt=""></div>
                <div @click.stop="readMail" title="Make as Read"><img src="/png/007-read.png" alt=""></div>
                <div @click.stop="deleteMail" title="delete Mail"><img src="/png/006-delete.png" alt=""></div> -->
            </div>      
    `,
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        // readMail() {
        //     this.$emit('read-mail', this.mail.id)
        // },
        // starMail() {
        //     this.$emit('star-mail', this.mail.id)
        // }
    },
    computed: {
        isRead() {
            if (!this.mail.isRead) return { unread: [this.mail.from, this.mail.subject] }
        },
        unRead() {
            if (this.mail.isRead) return { isRead: [this.mail.from, this.mail.subject] }
        },
        bodyText() {
            if (this.mail.body.length > 50) return this.mail.body.substring(0, 50) + '...'
            else return this.mail.body
        },
        fromToDisplay() {
            var idx = this.mail.from.indexOf('@')
            var firstletterUppercase = this.mail.from.charAt(0).toUpperCase() + this.mail.from.slice(1, idx)
            return firstletterUppercase
        },
        dateToDisplay() {
            var sentAtDate = new Date(this.mail.sentAt)
            var now = new Date()
            var diff = sentAtDate - now
            diff = diff / 1000
            // console.log(diff);
            // if (diff > -1)
            //     sentAtDate = sentAtDate.toLocaleTimeString()
            // console.log(sentAtDate);
            // return date
        }
    }
}