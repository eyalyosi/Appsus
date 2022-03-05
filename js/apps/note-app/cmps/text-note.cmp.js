export default {
    props: ["cmp"],
template:`
<section >
    <div>
    <h4>{{cmp.info.label}}</h4><img src="/imge/002-tack.png" @click="pining(cmp)"><hr>
    <p>{{cmp.info.txt}}</p>
    </div>
</section>
`,
data() {
    return {
        color:''
    }
},
created(){},
methods:{
    pining(note){
        this.$emit('pin',note)
    },
    noteColor(id){
        this.cmp.info.color = this.color
        this.$emit('color', id, this.color)
       
    }
},
computed:{},
}