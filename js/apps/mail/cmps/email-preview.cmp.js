import emailDetails from "./email-details.cmp.js";
import { mailService } from "../services/mail-service.js";
import { eventBus } from "../services/event-bus.js";
const KEY = "emails";

export default {
  props: ["email"],
  template: `
    <div>
        <div class="email-display" :class="isRead" v-if="mailNotShown">
        <div @click="changeStared" class="stars-container" v-if="email.isStared"><i class="fas fa-star"></i></div>
        <div @click="changeStared" class="stars-container" v-else><i class="far fa-star"></i></div>
        <div @click="showMail" class="author"><span class="title">Author:</span>{{this.email.from}}</div>
        <div @click="showMail" class="subject"><span class="title">Subject:</span>{{this.email.subject}}</div>
        <div @click="showMail" class="time-sent"><span class="title">Time:</span> {{formatDate}}</div> 
        <div class="action-buttons" v-if="email.isRead"><i @click="showMail" class="far fa-envelope-open"></i><i @click="removeEmail(email.id)" class="far fa-trash-alt"></i> <router-link :to="{ name: 'compose', params: {to: email.from, subject: email.subject} }"><i class="fas fa-reply"></i></router-link> </div>
        <div class="action-buttons" v-else><i @click="showMail" class="far fa-envelope"></i><i @click="removeEmail(email.id)" class="far fa-trash-alt"></i><router-link :to="{ name: 'compose', params: {to: email.from, subject: email.subject} }"><i class="fas fa-reply"></i></router-link></div>
        </div>
        <email-details @closeEpandedMail="closeModal" v-else :currEmail="email">  </email-details>
    </div>
    `,
  data() {
    return {
      mailNotShown: true,
      mailsLength: this.email,
    };
  },
  computed: {
    formatDate() {
      this.hour = new Date(this.email.date).getHours();
      this.min = new Date(this.email.date).getMinutes();
      return `${this.hour}:${this.min}`;
    },
    isRead() {
      if (this.email.isRead) return "read";
      else return "not-read";
    },
  },
  methods: {
    showMail() {
      this.mailNotShown = false;
    },
    closeModal() {
      this.mailNotShown = true;
      this.markAsRead();
    },
    markAsRead() {
      mailService.changeReadStatus(this.email.id);
      this.$router.go();
    },
    removeEmail(id) {
      mailService.removeItem(KEY, id);
      this.$router.go();
    },
    reply() {
      this.$emit("passOn", this.email);
    },
    changeStared() {
      mailService.changeStaredStatus(this.email.id);
      this.$router.go();
    },
  },
  components: {
    emailDetails,
  },
};
