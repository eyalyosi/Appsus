import notePreview from "./note-preview.cmp.js";

export default {
  props: ["notes"],
  template: `
<section class="note-list">
    <input v-model="newNote"  type="text" placeholder="What\`s on your mind..."><button @click="addNote">note that</button>
    <ul class="flex evenly wrap">
        <li v-for="note in notes" class="clean-list blue" :style="{backgroundColor:note.color}">
            <button @click="remove(note.id)">X</button>
            <note-preview :note="note" />
            <input v-model="color" type="color" @input="noteColor(note)">
        </li>
     </ul>

</section>
`,
  components: {
    notePreview,
    nwNote: "",
  },
  data() {
    return {
      color:'red'
    };
  },
  created() {},
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
    addNote() {
      this.$emit("add", this.nwNote);
      // this.newNote = ''
    },
    noteColor(note) {
      console.log(this.color);
      note.color = this.color
      this.$emit("color",note)
      console.log(id);
    },
  },
  computed: {},
};
