import textNote from './text-note.cmp.js' 
import { noteService } from '../service/note.service.js'

export default {
    props: ['note'],
template:`
<section v-if="notes" class="note-preview">
    <!-- <div class="txt-note"> {{note.info.txt}} </div> -->
  <div v-for="cmp in notes.cmps">
    <component :is="cmp.type" :info="cmp.info"></component>        
      
  </div>
</section>
`,
components: {
    textNote,
},
data() {
    return {
        notes: null
    };
},
created(){
    noteService.getById()
    .then(notes => {
        this.notes = notes
    })
},
methods:{},
computed:{},
}