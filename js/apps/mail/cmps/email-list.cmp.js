import { mailService } from "../services/mail-service.js";
import emailPreview from "./email-preview.cmp.js";
const KEY = "emails";

export default {
  template: `
    <section class= "email-list">
        <h3>This is our emails list</h3>
        <email-preview v-for="(currEmail, idx) in emails" :key="currEmail.id"
            :email="currEmail" :idx="idx"> 
        </email-preview> 
    </section>
    `,
  data() {
    return {
      emails: [],
      routeName: "inbox",
    };
  },
  methods: {
    getEmails() {
      mailService.query(KEY).then((mails) => {
        if (!mails || !mails.length) {
          this.emails = mailService.getMails();
          mailService.saveToStorage(KEY, this.emails);
        } else {
          console.log(" i have this for u", mails);
          this.emails = mails;
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
    // ,
    // changeRouteStatus(name) {
    //     this.routeName = name
    //     this.$router.push('/mail-app/'+this.routeName)
    // }
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
