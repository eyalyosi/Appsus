import notePreview from "./note-preview.cmp.js";

export default {
  props: ["notes"],
  template: `
<section >
  <div class="add-note flex evenly">
  <input v-model="note"   type="text" placeholder="What\`s on your mind..." ref="elInput"><button @click="addNote">note that</button><button @click="noteSelector('textNote')">note</button>
  <button @click="noteSelector('noteImg')">image</button><button @click="noteSelector('noteVideo')">video</button>
  <button @click="noteSelector('noteTodo')">Todo</button>
  </div>  
  <h1>Notes</h1>
 <div class="note-list">
    <!-- <ul class="flex evenly wrap"> -->
        <!-- <li v-for="note in notes" class="clean-list blue" :style="{backgroundColor:note.color}"> -->
            <note-preview @color="noteColor" @check="check" @remove="remove" @removeTodo="removeTodo" :notes="notes" />
            </div>
            <!-- <input v-model="color" type="color" @input="noteColor(note)"> -->
          <!-- </li> -->
        <!-- </ul> -->
        
</section>
`,
  components: {
    notePreview,
    note: null,
  },
  data() {
    return {
      color:'red',
      selector: null
    };
  },
  created() {},
  methods: {
    remove(id) {
      this.$emit("remove", id);
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
