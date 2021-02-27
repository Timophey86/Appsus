const KEY = "books";
import { bookService } from "../services/book-service.js";
import { storageService } from "../services/async-storage-service.js";
import bookList from "../cmps/book-list.cmp.js";
import bookFilter from "../cmps/book-filter.cmp.js";
const bookKey = "books";

export default {
  template: `
    <section class="book-app">
    <book-filter @filtered="setFilter"></book-filter>
    <book-list :books="booksToShow"/>
    </section>
    `,
  data() {
    return {
      books: null,
      filterBy: null,
    };
  },
  methods: {
    selectBook(book) {
      this.selectedBook = book;
    },
    setFilter(filters) {
      this.filterBy = filters;
    },
  },
  computed: {
    booksToShow() {
      var booksToShow;
      if (!this.filterBy) {
        booksToShow = this.books;
        console.log("the first ", booksToShow);
        return booksToShow;
      }
      if (
        this.filterBy.name === "" &&
        this.filterBy.from === 0 &&
        this.filterBy.to === Infinity
      ) {
        booksToShow = this.books;
        console.log("the first ", booksToShow);
        return booksToShow;
      }
      if (
        this.filterBy.name &&
        this.filterBy.from === 0 &&
        this.filterBy.to === Infinity
      ) {
        const searchTerm = this.filterBy.name.toLowerCase();
        booksToShow = this.books.filter((book) => {
          return book.title.toLowerCase().includes(searchTerm);
        });
        console.log("the fsecond ", booksToShow);

        return booksToShow;
      }
      if (this.filterBy.name && this.filterBy.from && this.filterBy.to) {
        if (this.filterBy.to < this.filterBy.from) {
          booksToShow = this.books;
          return booksToShow;
        }
        const searchTerm = this.filterBy.name.toLowerCase();
        booksToShow = this.books.filter((book) => {
          return book.title.toLowerCase().includes(searchTerm);
        });
        var filteredBooks = booksToShow.filter((book) => {
          return (
            book.listPrice.amount > this.filterBy.from &&
            book.listPrice.amount < this.filterBy.to
          );
        });
        console.log("the third ", booksToShow);
        return filteredBooks;
      }
      if (!this.filterBy.name)  {
      booksToShow = this.books.filter((book) => {
        return (
          book.listPrice.amount > this.filterBy.from &&
          book.listPrice.amount < this.filterBy.to
        );
      });
      return booksToShow
    }
    },
  },
  created () {
    storageService.query(bookKey).
    then(books => {this.books = books
    if (!this.books || !this.books.lenght) {
      this.books = bookService.sendBooks();
      bookService.saveToStorage(bookKey, this.books);
    }
    }
      )
  },
  components: {
    bookList,
    bookFilter,
  }
};
