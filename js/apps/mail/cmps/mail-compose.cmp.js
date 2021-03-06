import { noteService } from '../../note-app/service/note.service.js'

export default {
    template: `
       <section class="compose-mail-container">
            <div>
                <form class="mail-container">
                    <div><h3>New Message</h3></div>
                    <div><input type="email" v-model="newMail.mailTo" class="input" placeholder="To" requierd></div>
                    <div><input type="text" placeholder="Subject" v-model="newMail.subject" class="input"  placeholder="Subject"></div>
                    <div class="text-area-container"><textarea rows="10" cols="50" class="text-area" v-model="newMail.body" class="input"></textarea></div>
                    <div class="compose-buttons flex space align"><button @click.prevent="saveMail" class="compose-btn">Send</button><button @click.prevent="deleteMail" class="compose-btn"><img src="./png/006-delete.png" alt=""></button></div>
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
    created() {
        const id = this.$route.params.noteId
        noteService.get(id)
            .then(note => {
                if (!note) return
                switch (note.type) {
                    case 'textNote' :
                        this.newMail.body = note.info.txt
                        break;
                    case 'noteVideo' :
                        this.newMail.body = note.info.url
                        break;
                    case 'noteImg' :
                        this.newMail.body = note.info.url
                        break;
                    case 'noteTodo' :
                        var str = 'todo:\n'
                        note.info.todo.forEach(tod => {
                            str += `${tod.txt}\n`
                        })
                        this.newMail.body = str
                        break;
                }
                
            })
    },
    methods: {
        saveMail() {
            if (!this.newMail.mailTo) return
            if (!this.newMail.subject) alert('Are you sure you want to send this email without a subject?')
            this.$emit('add-new-mail', { ...this.newMail })
        },
    },
    computed: {
    }
}