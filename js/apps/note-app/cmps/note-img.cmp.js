export default {
    props: ['cmp'],
template:`
    <section>
        <div :style="{backgroundColor:cmp.info.color}">
            <h4>{{cmp.info.label}}</h4><hr>
            <img :src="setImg">
        </div>
    </section>
`,
data() {
    return {};
},
created(){
    console.log(this.cmp.info.txt);
},
methods:{},
computed:{
    setImg(){
        return this.cmp.info.txt;
    }
}
}