export default {
    props: ['mail'],
    template: `
        <section class="mail-show-container">
            <div class="mail-show">
                <div class="detail-header flex space">
                    <span class="detail-mail-subject">{{mail.subject}}</span>
                    <router-link class="send-to-note":to="'/note/'+mail.id">Send to Note</router-link>
                    <button class="btn-delete" @click="remove(mail.id)" title="Delete Mail"><img src="./png/006-delete.png" alt=""></button>
                </div>
                <h4 class="detail-from-h4"><span class="detail-from">{{fromDisplay}}</span>    <span><{{mail.from}}></span></h4>
                <div class="mail-body">
                    {{mail.body}}
                </div>
            </div>
        </section>
    `,
    data() {
        return {
        };
    },
    components: {
    },
    created() {
    },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
    },
    computed: {
        fromDisplay() {
            if (!this.mail.isSent) {
                var idx = this.mail.from.indexOf('@')
                var firstletterUppercase = this.mail.from.charAt(0).toUpperCase() + this.mail.from.slice(1, idx)
                return firstletterUppercase
            }
            else {
                var idx = this.mail.from.indexOf('@')
                var firstletterUppercase = this.mail.from.charAt(0).toUpperCase() + this.mail.from.slice(1, idx)
                return firstletterUppercase
            }
        },
    },
    watch: {
    }
}