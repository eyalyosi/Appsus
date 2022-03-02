export default {
    props: ['mail'],
    template: `
        <section class="mail-show-container">
            <div class="mail-show">
                <p>{{mail.subject}}  <button>delete</button></p>
                <h4><span>{{mail.from}}</span><span>{{mail.to}}</span></h4>
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
    },
    computed: {
    },
    watch: {
    }
}