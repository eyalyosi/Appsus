import textNote from './text-note.cmp.js' 
import noteTodo from './note-todo.cmp.js' 
import noteImg from './note-img.cmp.js' 
import noteVideo from './note-video.cmp.js' 
// import { noteService } from '../service/note.service.js'

export default {
    props: ['notes'],
template:`
<section v-if="notes" class="note-preview flex wrap " >
   
  <div v-for="cmp in notes"  :style="{backgroundColor:cmp.info.color}">
      <component :is="cmp.type" :cmp="cmp" @check="check" @removeTodo="removeTodo" ></component>        
        <button @click="remove(cmp.id)">X</button>
        <input v-model="color" type="color" @input="noteColor(cmp.id)">
        <button @click="copy(cmp)">copy</button>
        <router-link :to="'/mail/'+cmp.id">lllll</router-link>
  </div>
</section>
`,
components: {
    textNote,
    noteTodo,
    noteImg,
    noteVideo
},
data() {
    return {
        notes: this.notes,
        color: null
    };
},
created(){
    // this.notes=this.notes
    // noteService.getNotes()
    // .then(notes => {
    //     this.notes = notes
    // })
},
methods:{
    noteColor(id) {
        this.$emit('color',id,this.color)
    },
    remove(id) {
        this.$emit('remove',id)
    },
    removeTodo(id,todo) {
        this.$emit('removeTodo',id,todo)
    },
    check(id,idx){
        this.$emit('check',id,idx)
    },
    copy(note){
        this.$emit('copy',note)
    }

},
computed:{},
}