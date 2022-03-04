import mailPreview from './mail-preview.cmp.js'
export default {
    props: ['mails'],
    template: `
       <section class="mail-list">
            <ul class="clean-list">
                <li v-for="mail in mails" :key="mail.id" class="mail-preview-container" @click="selectMail(mail)" >
                    <mail-preview :mail="mail" @star-mail="starMail(mail.id)" @read-mail="updateRead(mail.id)" @delete-mail="deleteMail(mail.id)"/>
                </li>
            </ul>
       </section>
    `,
    components: {
        mailPreview
    },
    data() {
        return {
            mail: null
        }
    },
    methods: {
        selectMail(mail) {
            this.$emit('mail-selected', mail)
        },
        starMail(mailId) {
            this.$emit('update-Star', mailId)
        },
        updateRead(mailId) {
            this.$emit('update-Read', mailId)
        },
        deleteMail(mailId) {
            this.$emit('delete-mail', mailId)
        }
    },
    computed: {
    }
}
