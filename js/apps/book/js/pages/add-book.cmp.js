import { bookService } from "../services/book-service.js";
const KEY = "books";

export default {
  template: `
    <div class="main-container"> 
        <h2> Search Book to add to repository</h2>
        <form @submit.prevent="getBooks">
            Search: <input type="text" placeholder="Enter Title" v-model="searchObject"> <button>Go</button>
        </form>
        <div v-if="booksToAdd" class="books-to-add-list">
        <ul class="books-to-add">
      <li v-for="book in booksToAdd" :key="book.id" class="book-to-add-container" >
          {{book.volumeInfo.title}}<button @click="addBookToRepo(book.id)">+</button>
      </li>
    </ul>
        </div>
    </div>
    `,
  data() {
    return {
      booksToAdd: null,
      searchObject: "",
    };
  },
  methods: {
    getBooks() {
      axios({
        method: "get",
        url: `https://www.googleapis.com/books/v1/volumes?printType=books&q=${this.searchObject}`,
      })
        .then((searRes) => {
          bookService.query(`book-${this.searchObject}`).then((res) => {
            console.log(res);
            if (!res.length) {
              bookService.saveToStorage(
                `book-${this.searchObject}`,
                searRes.data.items
              );
              this.booksToAdd = searRes.data.items;
              console.log("just saved this list ", this.booksToAdd);
            } else {
              this.booksToAdd = res;
              console.log(
                "I found this in the storage for u ",
                this.booksToAdd
              );
            }
          });
        })
        .catch((err) => console.log("second error"));
    },
    addBookToRepo(id) {
      var aBook = this.booksToAdd.find((book) => {
        return book.id === id;
      });
      var postThisBook = bookService.createBook(aBook);
      console.log("This is a book to post ", postThisBook);
      bookService.saveNewItemToStorage(KEY, postThisBook);
      this.$router.push('books')
    },
  },
};
