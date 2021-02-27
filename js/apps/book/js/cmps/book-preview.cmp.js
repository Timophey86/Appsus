export default {
  props: ["book"],
  template: `
  <router-link :to="'/books/'+book.id" class="book-preview">
    <!-- <section class="book-preview"> -->
        <h4>{{book.title}}</h4>
        <img class="book-preview-image" :src=book.thumbnail>
        <p>Price: {{book.listPrice.amount}} {{showCurr}}</p>
    <!-- </section> -->
    </router-link>
    `,
  computed: {
    showCurr() {
      if (this.book.listPrice.currencyCode === "EUR") {
        return "€";
      } else if (this.book.listPrice.currencyCode === "ILS") {
        return "₪";
      } else {
        return "$";
      }
    },
  },
};
