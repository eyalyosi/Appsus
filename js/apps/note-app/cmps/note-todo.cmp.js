export default {
    props: ['cmp'],
template:`
<section>
    
       <div class="note-header"> <!-- <button  @click="remove(cmp.id)">X</button> -->
        <h4>{{cmp.info.label}}</h4>
        <img src="/imge/002-tack.png" @click="pining(cmp)"><hr>
       <ul class="todo-ul">
       </div>   
       <div v-for="(todo,idx) in cmp.info.todo" class="todo-div flex"><li class="todo" :class="todo.isDone ? 'done' : ''" @click="checkList(cmp.id,idx)">{{todo.txt}} </li><button @click.stop="remove(cmp.id,todo)">X</button></div>
       </ul>
    
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
        this.$emit('check',id,idx)
       console.log(id);
       console.log(idx);
    },
    remove(id,todo) {
        this.$emit('removeTodo',id,todo)
    },
    pining(note){
    this.$emit('pin',note)
    },
},
computed:{
    checkStatus(todo){
        return todo.isDone ? 'done' : ''
    }
},
}