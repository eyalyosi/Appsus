// TODO text area

export default {
    template: `
       <section class="compose-mail-container">
            <div class="mail-container">
                <form >
                    <div><h3>New Message</h3></div>
                    <div>To:<input type="email" v-model="newMail.mailTo"></div>
                    <div>Subject:<input type="text" placeholder="Subject" v-model="newMail.subject"></div>
                    <div><textarea rows="10" cols="50" class="text-area" v-model="newMail.body"></textarea></div>
                    <div><button @click.prevent="saveMail">Send</button><button @click.prevent="deleteMail"><img src="./png/006-delete.png" alt=""></button></div>
                </form>
            </div>
       </section>
    `,
    components: {
    },
    data() {
        return {
            newMail: {
                mailTo: '',
                subject: '',
                body: '',
            }
        }
    },
    methods: {
        saveMail() {
            if (!this.newMail.mailTo) return
            if (!this.newMail.subject) alert('Are you sure you want to send this email without a subject?')
            this.$emit('add-new-mail', { ...this.newMail })
        },
        deleteMail() {

        }
    },
    computed: {
    }
}