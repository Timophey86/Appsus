import { storageService } from "../services/async-storage-service.js";
const KEY = "books";

export default {
  props: ["bookId"],
  template: `
    <div class="review-form">
       <label>Add a review:</label>
    <form @submit.prevent="addReview">
      <input type="text" placeholder="Your Name" v-model="name" required/>
      <label for="rate">Rate the book:</label>
      <select id="rate" placeholder="Rate Book" name="rate" v-model.number="rate" required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <textarea placeholder="Write your review" name="message" rows="10" cols="30" v-model="review" required>
        </textarea
      >
      <button>Submit</button>
    </form>
</div>
    `,
  data() {
    return {
      name: "",
      review: "",
      rate: null,
    };
  },
  methods: {
    addReview() {
      console.log(this.bookId);
      var obj = {};
      obj.name = this.name;
      obj.review = this.review;
      obj.rate = this.rate;
      storageService.get(KEY, this.bookId).then((book) => {
          if (!book.review) {
              book.review = [obj]
              storageService.put(KEY, book)
            } else {book.review.push(obj)
                storageService.put(KEY, book)};
                this.$emit("closeBar", book.review);
                
        console.log(book);
      });
    },
  },
};
