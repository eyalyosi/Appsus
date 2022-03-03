import textNote from './text-note.cmp.js' 
import noteTodo from './note-todo.cmp.js' 
import noteImg from './note-img.cmp.js' 
// import { noteService } from '../service/note.service.js'

export default {
    props: ['notes'],
template:`
<section v-if="notes" class="note-preview">
    <!-- <div class="txt-note"> {{note.info.txt}} </div> -->
  <div v-for="cmp in notes">
        <button @click="remove(cmp.id)">X</button>
    <component :is="cmp.type" :cmp="cmp" @color="color" ></component>        
      
  </div>
</section>
`,
components: {
    textNote,
    noteTodo,
    noteImg
},
data() {
    return {
        notes: this.notes
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
    color(id,color) {
        this.$emit('color',id,color)
    },
    remove(id) {
        this.$emit('remove',id)
    }

},
computed:{},
}