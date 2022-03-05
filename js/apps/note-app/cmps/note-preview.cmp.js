import textNote from './text-note.cmp.js' 
import noteTodo from './note-todo.cmp.js' 
import noteImg from './note-img.cmp.js' 
import noteVideo from './note-video.cmp.js' 
// import { noteService } from '../service/note.service.js'

export default {
    props: ['notes','pinned'],
template:`
<div class="pin-contaner">
        <div v-for="cmp in pinned" class="pining " :style="{backgroundColor:cmp.info.color}">
        <component :is="cmp.type" :cmp="cmp"  @check="check" @removeTodo="removeTodo" ></component>  
        </div>
        </div>
   <h1>pin</h1> <hr><hr>
<section v-if="notes" class="note-preview flex wrap evenly" >
  <div v-for="cmp in notes" class="note-card" :style="{backgroundColor:cmp.info.color}">
      <component :is="cmp.type" :cmp="cmp" @check="check" @removeTodo="removeTodo" ></component>        
        <img src="/imge/003-cancel.png" @click="remove(cmp.id)" class="poinetr" >
       
        <!-- <button @click="remove(cmp.id)">X</button> -->
        <input v-model="color" type="color" @input="noteColor(cmp.id)" class="color"><img src="/imge/001-paint-palette.png" class="poinetr">
        <img class="poinetr"  @click="copy(cmp)" src="/imge/001-paste.png">
        <!-- <button @click="copy(cmp)">copy</button> -->
        <router-link class="link" :to="'/mail/'+cmp.id">send to mail</router-link>
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