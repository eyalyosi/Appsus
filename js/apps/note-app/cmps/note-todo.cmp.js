export default {
    props: ['cmp'],
template:`
<section>
    <div>
        <!-- <button  @click="remove(cmp.id)">X</button> -->
        <h4>{{cmp.info.label}}</h4><hr>
       <ul class="todo-ul">
           <li class="todo" v-for="(todo,idx) in cmp.info.todo" @click="checkList(cmp.id,idx)">{{todo}} <button @click.stop="remove(cmp.id,todo)">X</button></li>
       </ul>
    </div>
</section>
`,
data() {
    return {
        isDane:false
    };
},
created(){},
methods:{
    checkList(id,idx){
        
       console.log(id);
       console.log(idx);
    },
    remove(id,todo) {
        this.$emit('removeTodo',id,todo)
    }
},
computed:{
    check(){
        return this.isDane ? 'dane' : ''
    }
},
}