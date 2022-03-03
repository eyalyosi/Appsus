export default {
    props: ['cmp'],
template:`
<section>
    <div :style="{backgroundColor:cmp.info.color}">
        <!-- <button  @click="remove(cmp.id)">X</button> -->
        <h4>{{cmp.info.label}}</h4>
       <ul>
           <li v-for="todo in cmp.info.txt">{{todo}}</li>
       </ul>
    </div>
</section>
`,
data() {
    return {};
},
created(){},
methods:{},
computed:{},
}