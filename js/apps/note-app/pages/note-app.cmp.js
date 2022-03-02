import { noteService } from "../service/note.service.js";
import noteList from '../cmps/note-list.cmp.js'


export default {
  template: `
<h1>note</h1>
<note-list :notes="notes"></note-list>

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
  methods: {},
  computed: {},
};
