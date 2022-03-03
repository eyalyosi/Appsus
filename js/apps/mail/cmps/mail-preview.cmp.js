
//TODO button make unread in mail
export default {
    props: ['mail'],
    template: `
            <!-- <div class="single-mail flex space" @click="changeToRead" :class="unRead"> -->
            <div class="single-mail flex space" :class="unRead">
                <div class="mail-to" :class="isRead">
                         {{mail.from}}
                </div >
                <div class="mail-title-subject-container">
                       <span :class="isRead">{{mail.subject}} - </span>
                       <span> {{bodyText}}</span>
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
        // changeToRead() {
        //     this.mail.isRead = true

        //     //TODO save mail
        // }
    },
    computed: {
        isRead() {
            if (!this.mail.isRead) return { unread: [this.mail.from , this.mail.subject]}
        },
        unRead() {
            if (this.mail.isRead) return { isRead: [this.mail.from , this.mail.subject]}
        },
        bodyText(){
            if (this.mail.body.length > 50) return this.mail.body.substring(0,50) + '...'
            else return this.mail.body
        }
    }
}