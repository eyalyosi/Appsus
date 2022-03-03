export default {
    props: ["info"],
template:`
<section class="flex evenly wrap">
    <div :style="{backgroundColor:info.color}">
    <button @click="remove(info.id)">X</button>
    <h4>{{info.label}}</h4>
    <p>{{info.txt}}</p>
    <input v-model="color" type="color" @input="noteColor(info.id)">
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
    remove(id){
        console.log(id);
        this.$emit('remove', id)
    },
    noteColor(id){
        this.info.color = this.color
        this.$emit('color', id, this.color)
       
    }
},
computed:{},
}