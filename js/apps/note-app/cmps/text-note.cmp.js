export default {
    props: ["cmp"],
template:`
<section class="flex evenly wrap">
    <div :style="{backgroundColor:cmp.info.color}">
    <!-- <button @click="remove(cmp.id)">X</button> -->
    <h4>{{cmp.info.label}}</h4>
    <p>{{cmp.info.txt}}</p>
    <input v-model="color" type="color" @input="noteColor(cmp.id)">
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