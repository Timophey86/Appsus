import { bookService } from "../services/book-service.js";
import { storageService } from "../services/async-storage-service.js";
import reviewAdd from "../pages/review-add.cmp.js";
const KEY = "books";

export default {
  template: `
    <section v-if="bookToShow" class="book-details main-container">
        <h2>{{bookToShow.title}}</h2>
        <h4>Author: {{bookToShow.authors[0]}}</h4>
        <p>Published Year: {{bookToShow.publishedDate}} <br> <span class="published">{{publishedDate}}</span></p>
        <p>{{bookToShow.description}}</p>
        <h5>{{pageCount}}</h5>
        <h4 class="on-sale" v-if="isOnSale">On Sale</h4>
        <img :src=bookToShow.thumbnail>
        <h3 v-if="isReviews" @click="showReviews">Show Reviews</h3>
        <h3 v-else>No reviews to show</h3>
        <p v-if="dsiplayReviews" v-for="(review,idx) in this.currReview" :key="idx"> <span class="review-specs">Reviewed By</span>:{{review.name}} <span class="review-specs">Rated</span>:{{review.rate}}/5 <span class="review-specs">Review</span>:{{review.review}}</p>
        <review-add :bookId="bookToShow.id" v-if="this.open" @closeBar="openReview"/>
        <button class="add-review-btn" @click="openReview">Add Review</button>
        <router-link :to="'/books/'+nextBookId"> Next Book </router-link>
        <router-link to="/books">Back</router-link> 
    </section>
    `,
  data() {
    return {
      books: bookService.query(),
      bookToShow: null,
      open: false,
      dsiplayReviews: false,
      isReviews: false,
      currReview: ["21121", "21111111"],
      nextBookId: "nGhVwZvGCGp",
    };
  },
  computed: {
    pageCount() {
      if (this.bookToShow.pageCount > 500) {
        return "Long Read";
      } else if (this.bookToShow.pageCount > 200) {
        return "Decent Read";
      } else {
        return "Light Read";
      }
    },
    publishedDate() {
      if (2021 - this.bookToShow.publishedDate > 10) {
        return "Veteran Book";
      } else if (2021 - this.bookToShow.publishedDate >= 1) {
        return "New!";
      } else {
        return "Recent";
      }
    },
    isOnSale() {
      if (this.bookToShow.listPrice.isOnSale) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    openReview(sa) {
        console.log('im hereee');
      this.open = !this.open;
      this.currReview = sa;
      this.isReviews = true;
    },
    showReviews() {
      this.dsiplayReviews = !this.dsiplayReviews;
    },
    changeReviewDiplayStatus() {
      console.log(this.bookToShow);
      if (!this.bookToShow.review) {
      } else this.isReviews = true;
    },
    loadBook() {
      const id = this.$route.params.bookId;
      console.log(id)
      storageService.get(KEY, id).then((book) => {
        this.bookToShow = book;
        this.currReview = book.review;
        this.changeReviewDiplayStatus();
      });
    },
  },
  mounted() {
      this.loadBook()
  },
  watch: {
      '$route.params.bookId'(id){
          console.log('id changed to  ',id)
          this.loadBook()
      }
  },
  components: {
    reviewAdd,
  },
};
