import homePage from "./main-pages/home-page.cmp.js";
import bookMainPage from "./apps/book/js/pages/home-page.cmp.js";
import bookList from "./apps/book/js/cmps/book-list.cmp.js";
import mailApp from "./apps/mail/pages/email-app.cmp.js";
import mailList from "./apps/mail/cmps/email-list.cmp.js";
import keepApp from "./apps/keep/pages/keep-app.cmp.js";
import compose from "./apps/mail/pages/email-compose.cmp.js"

const routes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/book/list",
    component: bookList,
  },
  {
    path: "/book",
    component: bookMainPage,
  },
  {
    path: "/mail-app",
    component: mailApp,
    children: [
      {
        path: "/",
        component: mailList,
        name: "Welcome",
      },
      { path: "inbox", component: mailList, name: "inbox" },
      { path: "compose", component: compose, name: "compose" },
      { path: "sent", component: mailList, name: "sent" },
    ],
  },
  {
    path: "/keep",
    component: keepApp,
  },
];

export const myRouter = new VueRouter({ routes });
