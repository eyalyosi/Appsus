export default {
    template: `
          <section class="mail-filter-container">
              <form action="" type="submit" class="mail-filter">
                    <label>
                        Sarch mail:
                        <input type="text" v-model="filterBy" placeholder="search by title / subject/ from / date">
                    </label>
                    <label for="mail-choice">
                        <input list="mail-choice-list" id="mail-choice" name="mail-choice" />
 
                            <datalist id="mail-choice-list">
                                <option value="All">
                                <option value="Read">
                                <option value="Unread">
                                <option value="Starred">
                            </datalist>
                    </label>
                    <!-- <button @click.prevent="setFilter">Search</button> -->
              </form>
          </section>
    `,
    data() {
        return {
            filterBy: {
                mailTo: '',
                title: '',
                subject: '',
                data: ''
            }
        }
    },
    created() { },
    methods: {
        // setFilter() {
        //     this.$emit('filtered', {...this.filterBy});
        // }
    },
    computed: {}
}
