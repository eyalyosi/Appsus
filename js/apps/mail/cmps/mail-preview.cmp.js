export default {
    props: ['mail'],
    template: `
            <div class="single-mail flex space" @click="changeToRead(mail)">
                <div class="mail-to" :class="isRead">
                         {{mail.from}}
                </div class="mail-title-subject-container">
                <div>
                       <span :class="isRead">{{mail.title}}</span>
                       <span>{{mail.body}}</span>
                </div>
                <div>{{mail.sentAt}}</div>
            </div>
          <pre>isread:{{mail.isRead}}</pre>
    `,
    data() {
        return {
            
        }
    },
    created() {
    },
    methods: {
        changeToRead(mail) {
            console.log('hi');
        }
    },
    computed: {
         //TODO- isRead- regula isRead-false mail.from bold, mail.subject bold
        isRead() {
            if (!this.mail.isRead) return { isRead: this.mail.from}
            // if (!this.mail.isRead) return { isRead: this.mail.title}

        },

    }
}