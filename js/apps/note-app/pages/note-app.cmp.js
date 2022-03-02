import { noteService } from "../service/note.service.js";
import noteList from '../cmps/note-list.cmp.js'


export default {
  template: `
<h1>note</h1>
<note-list :notes="notes" @color="noteColor" @add="addNote" @remove="removeNote"></note-list>

`,
components: {
  noteList,
},
  data() {
    return {
      notes:null,
    };
  },
  created() {
    noteService.getNotes()
    .then(note => {
      this.notes = note
      console.log(this.notes);
    })
  },
  methods: {
    removeNote(id) {
      noteService.remove(id)
      .then(notes => {
        const idx = this.notes.findIndex((note) => note.id === id);
        this.notes.splice(idx, 1);
      })
    },
    addNote(txt) {
      noteService.createNote(txt)
      .then(note => {
        this.notes.push(note)
        console.log(note);
      })
    },
    noteColor(note){
      noteService.changeNoteColor(note)
      .then(res => {
        const idx = this.notes.findIndex(note => note.id === res.id)
        this.notes.splice(idx,1,res)
      })
    }
        
           
  },
  computed: {},
};
