import bookPreview from "./book-preview.cmp.js";

export default {
  props: ["books"],
  template: `
  <div>
    <ul class="book-list grid-container main-container ">
      <li v-for="book in books" :key="book.id" class="book-preview-container" >
        <book-preview :book="book"/>
        <div class="btns-container">
          <!-- <router-link :to="'/books/'+book.id">Details</router-link> -->
        </div>
      </li>
    </ul>
  </div>
  `,
  methods: {
    select(book) {
      this.$emit("selected", book);
    },
  },
  components: {
    bookPreview,
  },
};
