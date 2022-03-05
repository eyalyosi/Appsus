import { noteService } from "../service/note.service.js";
import { mailService } from '../../mail/service/mail.service.js'
import noteList from "../cmps/note-list.cmp.js";
import noteFilter from "../cmps/note-filter.cmp.js";

export default {
  template: `
  <note-app>
    <div class="main-note flex warp main-layout">
      <!-- <note-filter class="filter"/> -->
      <note-list  :notes="noteForDisplay" :pinned="pininigNote" @pin="setPining" @check="checkList" @removeTodo="removeTodo" @color="noteColor" @add="addNote" @remove="removeNote" @filtered="setFilter" @copy="copyNote"></note-list>
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
    });
    const id = this.$route.params.mailId
    mailService.get(id)
      .then(mail => {
        if (!mail) return
        this.addNote(mail.body, 'textNote')
        // this.newMail.body = note.info.txt
      })
  },
  methods: {
    setPining(note) {
      note.isPinned = !note.isPinned
      noteService.update(note)
        .then(Note => {
          log(Note)
          const idx = this.notes.findIndex((note) => note.id === Note.id);
          this.notes.splice(idx, 1, Note);
        })
    },
    removeNote(id) {
      noteService.remove(id).then((notes) => {
        const idx = this.notes.findIndex((note) => note.id === id);
        this.notes.splice(idx, 1);
      });
    },
    setFilter(filter) {
      this.filterBy = filter
    },
    checkList(id, idx) {
      noteService.changeTodoStatus(id, idx)
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
      noteService.changeNoteColor(currNote);
    },
    copyNote(note) {
      const idx = this.notes.findIndex(Note => Note.id === note.id)
      noteService.copyNote(note).then((Note) => {
        this.notes.splice(idx, 0, Note);
      });
    }
  },
  computed: {
    pininigNote() {
      var pin = [];
      this.notes.forEach(note => {
        if (note.isPinned) {
          pin.push(note)
        }
      })
      return pin
    },
    noteForDisplay() {
      if (this.filterBy.searchKey === '' && this.filterBy.label === 'All') return this.notes
      if (this.filterBy.searchKey === ''||this.filterBy.label === 'Video'||this.filterBy.label === 'Image') {
        return this.notes.filter(note => note.info.label === this.filterBy.label)
      }
      var regex = new RegExp(this.filterBy.searchKey, 'i')
      if (this.filterBy.label === 'All' || this.filterBy.label === 'Note') {
        var display = this.notes.filter(note => {
          return regex.test(note.info.txt)
        })
      } else if (this.filterBy.label === 'Todo') {
        // display = this.notes.filter(note => regex.test(note.info.todo[0].txt))
        display = this.notes.filter(note => regex.test(note.info.todo[0].txt))
        //  todo a filter of note todo

      }

      return display
    }
  },
};

