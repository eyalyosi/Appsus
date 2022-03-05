export default {
    template: `
    <!-- todo add image +onclick to navigate -->
        <section class="home-page app-main main-layout flex evenly">
            <div class="mail-home" @click="navToMail">
                <h2>Your Email service</h2>
                <img src="./png/email-logo.jpg" alt="">
            </div>

            <div class="note-home" @click="navToNote">
                <h2>Your Note service</h2>
                <img src="./png/note-logo.jpg" alt="">
            </div>
        </section>
    `,
    components: {
    },
    methods: {
        navToMail() {
            this.$router.push('/mail')
        },
        navToNote() {
            this.$router.push('/note')
        }
    },
}
