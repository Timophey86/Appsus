import { mailService } from "../services/mail-service.js";
import emailPreview from "./email-preview.cmp.js";
import { eventBus } from "../services/event-bus.js";
const KEY = "emails";

export default {
  template: `
    <section class= "email-list">
        <h3>This is our email list</h3>
        <div class="sort-and-search">
        <div class="sort">Sort:
        <select class="sort-by-bar" @change="sortEmails" v-model="sortBy">
                <option value="all" selected>All</option>
                <option value="date">Date</option>
                <option value="stared">Starred</option>
                <option value="read">Read</option>
                <option value="author">Author</option>
            </select>
            </div>
            <div class="search-bar">Filter:
            <select class="read-unread-all" v-model="filterBy.options">
                <option value="all" selected>All</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
                <option value="stared">Starred</option>
            </select>
            <input type="search"  id="search-email-input" autofocus placeholder="🔍 Search mail" v-model="filterBy.searchTxt">
        </div>
            </div>
        <email-preview v-for="(currEmail, idx) in filteredEmails" :key="currEmail.id"
     :email="currEmail" :idx="idx"> 
        </email-preview> 
    </section>
    `,
  data() {
    return {
      emails: [],
      routeName: "inbox",
      filterBy: {
        searchTxt: "",
        options: "all",
      },
      sortBy: "all",
    };
  },
  methods: {
    getEmails() {
      mailService.query(KEY).then((mails) => {
        if (!mails || !mails.length) {
          this.emails = mailService.getMails();
          mailService.saveToStorage(KEY, this.emails);
          this.getNumOfUnread();
        } else {
          console.log(" i have this for u", mails);
          this.emails = mails;
          this.getNumOfUnread();
        }
      });
    },
    getSentMails() {
      mailService.query(KEY).then((mails) => {
        var sentMails = [];
        mails.forEach((mail) => {
          if (mail.isSent === true) {
            sentMails.push(mail);
          }
        });
        this.emails = sentMails;
      });
    },
    moveToCompose(mail) {
      this.$router.push(`/mail-app/compose?to=${mail.to}`);
    },
    sortEmails() {
      if (this.sortBy === "stared") {
        this.emails.sort((email) => {
          return email.isStared ? -1 : 1;
        });
      } else if (this.sortBy === "read") {
        this.emails.sort((email) => {
          return email.isRead ? -1 : 1;
        });
      } else if (this.sortBy === "date") {
        this.emails.sort((a, b) => {
          console.log(a.date);
          return a.date - b.date;
        });
      } else if (this.sortBy === "author") {
        this.emails.sort((a, b) => {
          var nameA = a.from.toUpperCase();
          var nameB = b.from.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else {
        this.$router.go();
      }
    },
    getNumOfUnread() {
      var unread = 0;
      this.emails.forEach((mail) => {
        if (!mail.isRead) {
          unread++;
        }
      });
      this.$emit("updateUnread", unread);
    },
  },
  computed: {
    filteredEmails() {
      if (!this.emails) return;
      if (this.filterBy.options === "all") {
        var filtered = this.emails.filter((email) => {
          return (
            email.body
              .toLowerCase()
              .includes(this.filterBy.searchTxt.toLowerCase()) ||
            email.subject
              .toLowerCase()
              .includes(this.filterBy.searchTxt.toLowerCase()) ||
            email.to
              .toLowerCase()
              .includes(this.filterBy.searchTxt.toLowerCase()) ||
            email.from
              .toLowerCase()
              .includes(this.filterBy.searchTxt.toLowerCase())
          );
        });
      } else if (this.filterBy.options === "unread") {
        var filtered = this.emails.filter((email) => {
          return (
            !email.isRead &&
            (email.body
              .toLowerCase()
              .includes(this.filterBy.searchTxt.toLowerCase()) ||
              email.subject
                .toLowerCase()
                .includes(this.filterBy.searchTxt.toLowerCase()) ||
              email.to
                .toLowerCase()
                .includes(this.filterBy.searchTxt.toLowerCase()) ||
              email.from
                .toLowerCase()
                .includes(this.filterBy.searchTxt.toLowerCase()))
          );
        });
      } else if (this.filterBy.options === "stared") {
        var filtered = this.emails.filter((email) => {
          return (
            email.isStared &&
            (email.body
              .toLowerCase()
              .includes(this.filterBy.searchTxt.toLowerCase()) ||
              email.subject
                .toLowerCase()
                .includes(this.filterBy.searchTxt.toLowerCase()) ||
              email.to
                .toLowerCase()
                .includes(this.filterBy.searchTxt.toLowerCase()) ||
              email.from
                .toLowerCase()
                .includes(this.filterBy.searchTxt.toLowerCase()))
          );
        });
      } else {
        var filtered = this.emails.filter((email) => {
          return (
            email.isRead &&
            (email.body
              .toLowerCase()
              .includes(this.filterBy.searchTxt.toLowerCase()) ||
              email.subject
                .toLowerCase()
                .includes(this.filterBy.searchTxt.toLowerCase()) ||
              email.to
                .toLowerCase()
                .includes(this.filterBy.searchTxt.toLowerCase()) ||
              email.from
                .toLowerCase()
                .includes(this.filterBy.searchTxt.toLowerCase()))
          );
        });
      }
      return filtered;
    },
  },
  created() {
    if (this.$route.name === "inbox") {
      this.getEmails();
    } else if (this.$route.name === "sent") {
      this.getSentMails();
    }
  },
  components: {
    emailPreview,
  },
  watch: {
    "$route.params"() {
      console.log("route has changeddddddddd to ", this.$route.name);
      if (this.$route.name === "sent") {
        this.getSentMails();
      } else {
        this.getEmails();
      }
    },
  },
};
