export default {
    props: ['cmp'],
template:`
    <section>
        <div>
            <h4>cmp.info.label</h4><img src="/imge/002-tack.png" ><hr>
            <iframe width="350" height="280" :src="setVideoUrl"></iframe>
            <br>
            <a :href="setUrl">see full video</a><hr>
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
        var idx = this.cmp.info.url.indexOf('.com')
        return 'https://www.youtube.com/embed/'+ this.cmp.info.url.substring(idx)
        
    },
    setUrl(){
        return this.cmp.info.url
    }
},
}