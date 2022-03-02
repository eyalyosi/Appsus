import mailPreview from './mail-preview.cmp.js'
export default {
    props: ['mails'],
    template: `
       <section class="mail-list">
            <ul class="clean-list">
                <li v-for="mail in mails" :key="mail.id" class="mail-preview-container" @click="selectMail(mail)" >
                    <mail-preview :mail="mail" />
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
        }
    },
    computed: {
        
    }
}