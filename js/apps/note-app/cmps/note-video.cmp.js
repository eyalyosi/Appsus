export default {
    props: ['cmp'],
template:`
    <section>
        <div>
            <h4>cmp.info.label</h4><hr>
            <iframe width="350" height="280" :src="setVideoUrl"></iframe>
        </div>
    </section>
`,
data() {
    return {};
},
created(){},
methods:{},
computed:{
    setVideoUrl(){
    return 'https://www.youtube.com/embed/'+ this.cmp.info.txt
    }
},
}