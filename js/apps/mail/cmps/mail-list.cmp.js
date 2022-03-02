import mailPreview from './mail-preview.cmp.js'
export default {
    props: ['mails'],
    template: `
       <section class="mail-list">
            <ul class="clean-list">
                <li v-for="mail in mails" :key="mail.id" class="mail-preview-container">
                    <mail-preview :mail="mail" />
                    <!-- <router-link :to="'/book/'+book.id">Details</router-link> -->
                </li>
            </ul>
       </section>
    `,
    components: {
        mailPreview
    },
    methods: {

    },
    computed: {

    }
}