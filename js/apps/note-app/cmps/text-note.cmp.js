export default {
    props: ["cmp"],
template:`
<section >
    <div>
    <h4>{{cmp.info.label}}</h4><hr>
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
    // remove(id){
    //     console.log(id);
    //     this.$emit('remove', id)
    // },
    noteColor(id){
        this.cmp.info.color = this.color
        this.$emit('color', id, this.color)
       
    }
},
computed:{},
}