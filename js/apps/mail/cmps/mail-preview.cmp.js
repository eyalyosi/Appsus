export default {
    props: ['mail'],
    template: `
            <div class="single-mail flex space">
                <div class="mail-to">
                     {{mail.to}}
                </div class="mail-title-subject-container">
                <div>
                       <span>{{mail.title}}</span>
                       <span>{{mail.body}}</span>
                </div>
                <div>{{mail. sentAt}}</div>
            </div>
    `,
    data() {
        return {

        }
    },
    created() {
    },
    methods: {
    },
    computed: {

    }
}