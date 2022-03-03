export default {
    props: ['cmp'],
template:`
<section>
    <div :style="{backgroundColor:cmp.info.color}">
        <!-- <button  @click="remove(cmp.id)">X</button> -->

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