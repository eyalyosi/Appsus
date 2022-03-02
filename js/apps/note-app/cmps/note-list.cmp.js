import notePreview from "./note-preview.cmp.js";

export default {
  props: ["notes"],
  template: `
<section class="note-list">
    <input v-model="newNote"  type="text" placeholder="What\`s on your mind..."><button @click="addNote">note that</button>
    <ul class="flex evenly wrap">
        <li v-for="note in notes" class="clean-list blue">
            <button @click="remove(note.id)">X</button>
            <note-preview :note="note" />
        </li>
     </ul>

</section>
`,
  components: {
    notePreview,
    newNote:''
  },
  data() {
    return {
        
    };
  },
  created() {},
  methods: {
      remove(id) {
          this.$emit('remove',id)
      },
      addNote(){
        this.$emit('add',this.newNote)
        // this.newNote = ''
      },
        
  },
  computed: {},
};
