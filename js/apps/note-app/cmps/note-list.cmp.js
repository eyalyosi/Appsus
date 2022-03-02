import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
template:`
<section class="note-list">
  
    <ul class="flex evenly">
        <li v-for="note in notes" class="clean-list blue">
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

    }
},
created(){},
methods:{},
computed:{},
}