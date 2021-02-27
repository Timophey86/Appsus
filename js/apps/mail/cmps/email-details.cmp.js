export default {
  props: ["currEmail"],
  template: ` 
    <section class="body-txt" >
<div class="body-header">
    <h3 class="body-header-txt"  @click="closeModal">{{currEmail.subject}}</h3>
</div>

<div class="body-body"   @click="closeModal">

<div> <span class='text-description'>From: </span>{{currEmail.from}} </div>
<div>  <span class='text-description'>At: </span>  {{formatDate}}</div>
<div>  <span class='text-description'>Body: </span>{{currEmail.body}}</div>
</div>
<div class="reply" @click="reply">Reply</div>
     </section>
    `,
  data() {
    return {
      hour: "",
      min: "",
      day: "",
      month: "",
    };
  },

  methods: {
    closeModal() {
      this.$emit("closeEpandedMail");
    },
    reply() {
      this.$emit("replyToEmail");
    },
  },
  computed: {
    formatDate() {
      this.hour = new Date(this.currEmail.date).getHours();
      this.min = new Date(this.currEmail.date).getMinutes();
      this.day = new Date(this.currEmail.date).getDay();
      this.month = new Date(this.currEmail.date).getMonth() + 1;
      return `${this.hour}:${this.min}, ${this.day}.${this.month}`;
    },
  },
};
