export default {
    props: ['mail'],
    template: `
            <div class="single-mail-container flex space align" :class="unRead">
                <div class="from-star-box flex space align">
                    <div @click.stop="starMail" :title="titleStarred" class="star-box"><img :src="starForDisplay"></div>
                    <div class="mail-from" :class="isRead">{{fromDisplay}}</div >
                </div>
                <span class="mail-title-subject-container">
                    <span :class="isRead">{{mail.subject}} - </span>
                    <span class="body-span"> {{bodyText}}</span>
                </span>
                <div class="read-and-delet flex">
                    <div @click.stop="readMail" :title="titleRead"><img :src="readForDiaplay"></div>
                    <div @click.stop="deleteMail" title="Delete Mail"><img src="/png/006-delete.png" alt=""></div>
                </div>
                <div class="date-container">{{dateToDisplay}}</div>
            </div>      
    `,
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        readMail() {
            this.$emit('read-mail', this.mail.id)
        },
        starMail() {
            this.$emit('star-mail', this.mail.id)
        },
        deleteMail() {
            this.$emit('delete-mail', this.mail.id)
        }
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
        fromDisplay() {
            if (!this.mail.isSent) {
                var idx = this.mail.from.indexOf('@')
                var firstletterUppercase = this.mail.from.charAt(0).toUpperCase() + this.mail.from.slice(1, idx)
                return firstletterUppercase
            }
            else {
                var idx = this.mail.to.indexOf('@')
                var firstletterUppercase = this.mail.to.charAt(0).toUpperCase() + this.mail.to.slice(1, idx)
                return firstletterUppercase
            }
        },
        dateToDisplay() {
            var sentAtDate = new Date(this.mail.sentAt)
            var now = new Date()
            var diff = sentAtDate - now
            if (diff > -86400000) {
                return sentAtDate.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' })
            }
            if (sentAtDate.getFullYear() === 2022) return sentAtDate.toLocaleString('en-US', { month: 'short', day: 'numeric' })
            else return sentAtDate.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
        },
        starForDisplay() {
            if (this.mail.isStarred) return `/png/003-star.png`
            else if (!this.mail.isStarred) return `/png/008-star-1.png`
        },
        titleStarred() {
            if (this.mail.isStarred) return "Unstar mail"
            else if (!this.mail.isStarred) return "Star this mail"
        },
        readForDiaplay() {
            if (this.mail.isRead) return '/png/010-read-1.png'
            else if (!this.mail.isRead) return '/png/007-unread.png'
        },
        titleRead() {
            if (this.mail.isRead) return "Set as Unread"
            else if (!this.mail.isRead) return "Set as Read"
        }
    }
}

