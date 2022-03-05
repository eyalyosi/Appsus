import notePreview from "./note-preview.cmp.js";
import noteFilter from "../cmps/note-filter.cmp.js";

export default {
  props: ["notes","pinned"],
  template: `
<section >
  <note-filter @filtered="filtered"/>
  <div class="add-note flex evenly">
  <input v-model="note"   type="text" placeholder="What\`s on your mind..." ref="elInput"><button @click="addNote">note that</button><button @click="noteSelector('textNote')">note</button>
  <button @click="noteSelector('noteImg')">image</button><button @click="noteSelector('noteVideo')">video</button>
  <button @click="noteSelector('noteTodo')">Todo</button>
  </div>  
  <h1>Notes</h1>
 <div class="note-list">
            <note-preview @color="noteColor" @check="check" @remove="remove" @removeTodo="removeTodo" :notes="notes" @copy="copy" @pin="pin" :pinned="pinned"/>
            </div>
</section>
`,
  components: {
    notePreview,
    noteFilter,
    // note: null,
  },
  data() {
    return {
      color:'red',
      selector: null,
      filterBy:'ALL'
    };
  },
  created() {},
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
    pin(note){
this.$emit('pin',note)
    },
    copy(note){
      this.$emit("copy", note);
    },
    filtered(filter){
      this.$emit('filtered',filter)
    },
    addNote() {
      this.$emit("add", this.note,this.selector);
      this.$refs["elInput"].value = ''
      this.note = ''
    },
    noteColor(id,color) {
      this.$emit("color",id,color)
    },
    removeTodo(id,todo){
        this.$emit('removeTodo',id,todo)
    },
    check(id,idx){
      this.$emit('check',id,idx)
    },
    noteSelector(selector) {
          this.selector = selector
          switch (selector) {
            case 'textNote' :
              this.$refs["elInput"].placeholder = 'Note'
              break;
            case 'noteImg' :
              this.$refs["elInput"].placeholder = 'Paste image url'
              break;
            case 'noteVideo' :
              this.$refs["elInput"].placeholder = 'Paste video url'
              break;
            case 'noteTodo' :
              this.$refs["elInput"].placeholder = 'Write comma separated list'
              break;
          }
    }
  },
  computed: {},
};
