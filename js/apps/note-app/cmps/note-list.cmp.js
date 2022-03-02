import notePreview from "./note-preview.cmp.js";

export default {
  props: ["notes"],
  template: `
<section class="note-list">
    <input type="text">
    <ul class="flex evenly">
        <li v-for="note in notes" class="clean-list blue">
            <button @click="remove(note.id)">X</button>
            <note-preview :note="note" />
        </li>
     </ul>

</section>
`,
  components: {
    notePreview,
  },
  data() {
    return {
        
    };
  },
  created() {},
  methods: {
      remove(id) {
          this.$emit('remove',id)
      }
  },
  computed: {},
};
