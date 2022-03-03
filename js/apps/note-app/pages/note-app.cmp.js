import { noteService } from "../service/note.service.js";
import noteList from '../cmps/note-list.cmp.js'


export default {
  template: `
  <note-app>
    <div class="main-note flex warp">
      <h1>note</h1>
      <note-list :notes="notes" @color="noteColor" @add="addNote" @remove="removeNote" ></note-list>
    </div>
  </note-app>
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
    addNote(txt,selector) {
      console.log(txt);
      noteService.createNote(txt)
      .then(note => {
        this.notes.push(note)
        
      })
    },
    noteColor(id,color){
      const currNote = this.notes.find((note) => note.id === id);
      currNote.info.color = color
      console.log(currNote);
      noteService.changeNoteColor(currNote)
    }
        
           
  },
  computed: {},
};
