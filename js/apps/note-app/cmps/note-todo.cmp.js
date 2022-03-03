export default {
    props: ['cmp'],
template:`
<section>
    <div>
        <!-- <button  @click="remove(cmp.id)">X</button> -->
        <h4>{{cmp.info.label}}</h4><hr>
       <ul>
           <li class="todo" v-for="(todo,idx) in cmp.info.txt" @click="checkList(cmp.id,idx)">{{todo}}</li>
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
    }
},
computed:{
    check(){
        return this.isDane ? 'dane' : ''
    }
},
}