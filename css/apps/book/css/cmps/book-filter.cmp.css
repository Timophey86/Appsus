export default {
  template: `
    <section class="book-filter main-container ">
      <label> Search a book: </label> 
      <form class="filter-form" @submit.prevent="setFilter">
        <input type="text" placeholder="Search...." v-model="filterBy.byName">
        <input type="number" placeholder="From Price" v-model.number="filterBy.fromPrice">
        <input type="number" placeholder="To Price" v-model.number="filterBy.toPrice">
        <input type="submit" value="Filter">
      </form>  
      <router-link class="main-container add-book-btn" to="/addBook">Add Book</router-link>
    </section>
    `,
  data() {
    return {
      filterBy: {
        byName: "",
        fromPrice: 0,
        toPrice: Infinity,
      },
    };
  },
  methods: {
    setFilter() {
      let filteredValues = {
        name: this.filterBy.byName,
        from: this.filterBy.fromPrice,
        to: this.filterBy.toPrice,
      };
      this.$emit("filtered", filteredValues);
      this.filterBy.byName = "";
      this.filterBy.toPrice = Infinity;
      this.filterBy.fromPrice = 0;
    },
  },
};
