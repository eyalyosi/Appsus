export default {
    template: `
          <section class="mail-filter-container">
              <form action="" type="submit" class="mail-filter flex evenly align">
                    <label>
                        Sarch mail:
                        <input type="text" v-model="filterBy.searchKey" placeholder="search...">
                        <button @click.prevent="setFilter">Search</button>
                    </label>
                        
                    <label for="mail-choice">
                        Filter:
                        <input list="mail-choice-list" id="mail-choice" name="mail-choice" v-model="filterBy.label" @change="setFilter"/>
                            <datalist id="mail-choice-list">
                                <option value="All"></option>
                                <option value="Read"></option>
                                <option value="Unread"></option>
                                <option value="Starred"></option>
                            </datalist>
                    </label>
              </form>
          </section>
    `,
    data() {
        return {
            filterBy: {
                searchKey: '',
                label: '',
                isRead: ''
            }
        }
    },
    created() { },
    methods: {
        setFilter() {
            this.$emit('filtered', { ...this.filterBy });
        }
    },
    computed: {}
}
