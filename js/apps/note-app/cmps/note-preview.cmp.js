

export default {
    props: ['note'],
template:`
<section class="note-preview">
  
    <div class="txt-note"> {{note.info.txt}} </div>
    
</section>
`,
data() {
    return {};
},
created(){},
methods:{},
computed:{},
}