import { noteService } from "../service/note.service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteFilter from "../cmps/note-filter.cmp.js";

export default {
  template: `
  <note-app>
    <div class="main-note flex warp">
      <!-- <note-filter class="filter"/> -->
      <note-list :notes="noteForDisplay" @check="checkList" @removeTodo="removeTodo" @color="noteColor" @add="addNote" @remove="removeNote" @filtered="setFilter"></note-list>
    </div>
  </note-app>
`,
  components: {
    noteList,
    noteFilter,
  },
  data() {
    return {
      notes: null,
      filterBy: {
        searchKey: '',
        label: 'All',
      }
    };
  },
  created() {
    noteService.getNotes().then((note) => {
      this.notes = note;
      console.log(this.notes);
    });
  },
  methods: {
    removeNote(id) {
      noteService.remove(id).then((notes) => {
        const idx = this.notes.findIndex((note) => note.id === id);
        this.notes.splice(idx, 1);
      });
    },
    setFilter(filter){
        this.filterBy = filter
    },
    checkList(id,idx){
      noteService.changeTodoStatus(id,idx)
      .then(note => {
        const Idx = this.notes.findIndex(Note => Note.id === id)
        this.notes.splice(Idx, 1, note);
      })
    },
    removeTodo(id, todo) {
      noteService.removeTodo(id, todo).then((Note) => {
        if (Note.info.todo.length === 0) {
          this.removeNote(id);
        } else {
          var idx = this.notes.findIndex((note) => note.id === id);
          this.notes.splice(idx, 1, Note);
        }
      });
    },
    addNote(input, type) {
      // console.log(txt);
      noteService.createNote(input, type).then((note) => {
        this.notes.push(note);
      });
    },
    noteColor(id, color) {
      const currNote = this.notes.find((note) => note.id === id);
      currNote.info.color = color;
      console.log(currNote);
      noteService.changeNoteColor(currNote);
    },
  },
  computed: {
    noteForDisplay(){
      if(this.filterBy.searchKey === '' && this.filterBy.label ==='All') return this.notes
      if(this.filterBy.searchKey === '') {
        return this.notes.filter(note => note.info.label === this.filterBy.label)
      }
      const regex = new RegExp(this.filterBy.searchKey, 'i')
      return this.notes.filter(note => {
        regex.test(note.info.txt)&& note.info.label === this.filterBy.label
      })
    }
  },
};
