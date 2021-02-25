import addBook from "./pages/add-book.cmp.js";
import appHeader from "./cmps/app-header.cmp.js";
import bookApp from "./pages/book-app.cmp.js";
import aboutPage from "./pages/about-page.cmp.js";
import homePage from "./pages/home-page.cmp.js";
import bookDetails from "./pages/book-details.cmp.js";
import { bookService } from "./services/book-service.js";
const KEY = "books";

const routes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/books",
    component: bookApp,
  },
  {
    path: "/about",
    component: aboutPage,
  },
  {
    path: "/books/:bookId",
    component: bookDetails,
  },
  {
    path: "/addBook",
    component: addBook,
  },
];

const myRouter = new VueRouter({ routes });

const options = {
  el: "#app",
  router: myRouter,
  template: `
    <section>
    <app-header/>
    <router-view />
    </section>
    `,
  data() {
    return {
      bookList: null,
    };
  },
  components: {
    appHeader,
  },
  mounted() {
    this.bookList = bookService.sendBooks();
    bookService.query().then((books) => {
      if (!books.length) {
        bookService.saveToStorage(KEY, this.bookList);
      }
    });
  },
};

const app = new Vue(options);
