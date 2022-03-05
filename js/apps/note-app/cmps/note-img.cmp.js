export default {
    props: ['cmp'],
template:`
    <section>
        <div >
            <h4>{{cmp.info.label}}</h4><img src="/imge/002-tack.png" @click="pining(cmp)"><hr>
            <img :src="setImg"><br>
            <a :href="cmp.info.url">original image</a><br><hr>
        </div>
    </section>
`,
data() {
    return {};
},
created(){
    // console.log(this.cmp.info.txt);
},
methods:{
    pining(note){
        this.$emit('pin',note)
    },
},
computed:{
    setImg(){
        return this.cmp.info.url;
    }
}
}