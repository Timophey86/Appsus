export default {
    template: `
    <section class="note-filter">
        <label> Search a note: </label>    
        <input type="search" @input="setFilter" placeholder="Search...." v-model="filterBy.byName">
    </section>
    `,
    data() {
        return {
            filterBy: {
                byName: '',
            }
        }
    },
    methods:{
        setFilter(){
            this.$emit('filtered', this.filterBy)
        }
    }
}
