export default {
    props: ["info"],
template:`
<section>
    <h4>{{info.label}}</h4>
    <p>{{info.txt}}</p>
</section>
`,
data() {
    return {}
},
created(){},
methods:{},
computed:{},
}