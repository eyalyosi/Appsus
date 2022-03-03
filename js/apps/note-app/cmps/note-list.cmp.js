import notePreview from "./note-preview.cmp.js";

export default {
  props: ["notes"],
  template: `
<section >
  <input v-model="note"   type="text" placeholder="What\`s on your mind..."><button @click="addNote">note that</button>
 <div class="note-list">
    <!-- <ul class="flex evenly wrap"> -->
        <!-- <li v-for="note in notes" class="clean-list blue" :style="{backgroundColor:note.color}"> -->
            <note-preview @color="noteColor" @remove="remove" :notes="notes" />
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
      color:'red'
    };
  },
  created() {},
  methods: {
    remove(id) {
      this.$emit("remove", id);
    },
    addNote() {
      // console.log(this.note);
      this.$emit("add", this.note);
      this.note = ''
    },
    noteColor(id,color) {
      this.$emit("color",id,color)

    },
  },
  computed: {},
};
