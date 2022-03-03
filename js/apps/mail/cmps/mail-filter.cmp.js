export default {
    template: `
          <section class="mail-filter-container">
              <form action="" type="submit" class="mail-filter">
                    <label>
                        Sarch mail:
                        <input type="text" v-model="filterBy.mailFrom" placeholder="search by from">
                    </label>
                    <button @click.prevent="setFilter">Search</button>
                    <label for="mail-choice">
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
                mailfrom: '',
                label: null
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
