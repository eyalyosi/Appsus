export default {
template:`
    <section class="note-filter flex evenly align">
    <label>
            Search Note:
            <input type="text" v-model="filterBy.searchKey" placeholder="search by from" @input="setFilter" @focus="filterBy.searchKey = ''">
        </label>
        <!-- <button @click.prevent="setFilter">Search</button> -->
        <label for="note-choice">
            <input list="note-choice-list" id="note-choice" name="note-choice" v-model="filterBy.label" @click="filterBy.label=''" @change="setFilter"/>
                <datalist id="note-choice-list">
                    <option value="All"></option>
                    <option value="Note"></option>
                    <option value="Todo"></option>
                    <option value="Video"></option>
                    <option value="Image"></option>
                </datalist>
        </label>
    </section>
`,
data() {
    return {
        filterBy: {
            searchKey: '',
            label: 'All',
        }
    };
},
created(){},
methods:{
    setFilter(){
        if(this.label === ''&&this.searchKey==='')return
        this.$emit('filtered', { ...this.filterBy });
    }
},
computed:{},
}
