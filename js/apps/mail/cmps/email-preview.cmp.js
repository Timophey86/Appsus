import emailDetails from "./email-details.cmp.js"
import {mailService} from "../services/mail-service.js"
import {eventBus} from "../services/event-bus.js"
const KEY = "emails";

export default {
    props:['email'],
    template: `
    <div>
        <div class="email-display" :class="isRead" v-if="mailNotShown">
        <div @click="showMail" class="author">Author:<span>{{this.email.from}}</span></div>
        <div @click="showMail" class="subject">Subject:<span>{{this.email.subject}}</span></div>
        <div @click="showMail" class="time-sent">Time: <span>{{formatDate}}</span></div> 
        <div class="action-buttons" v-if="email.isRead"><i @click="showMail" class="far fa-envelope-open"></i><i @click="removeEmail(email.id)" class="far fa-trash-alt"></i><i @click="reply(email)" class="fas fa-reply"></i></div>
        <div class="action-buttons" v-else><i @click="showMail" class="far fa-envelope"></i><i @click="removeEmail(email.id)" class="far fa-trash-alt"></i><i @click=reply(email) class="fas fa-reply"></i></div>
        </div>
        <email-details @closeEpandedMail="closeModal" v-else :currEmail="email">  </email-details>
    </div>
    `,
    data () {
        return {
            mailNotShown:true,
            mailsLength: this.email
        }
    },
    computed: {
     formatDate() {
        this.hour = new Date(this.email.date).getHours()
        this.min = new Date(this.email.date).getMinutes()
        return `${this.hour}:${this.min}`
    },
    isRead() {
        if (this.email.isRead) return 'read'
        else return 'not-read'
    }},
    methods: {
        showMail() {
            this.mailNotShown = false
        },
        closeModal() {
            this.mailNotShown = true
            this.markAsRead()
        },
        markAsRead() {
            mailService.changeReadStatus(this.email.id)
            console.log(this.$route.name);
            this.$router.go()
        },
        removeEmail(id) {
            mailService.removeItem(KEY,id)
            this.$router.go()
        },
        reply() {
            console.log(this.email)
            eventBus.$emit('REPLY', this.email)
            this.$router.push('/mail-app/compose')
        }
    },
    components: {
        emailDetails
    },
    created() {
    //   console.log(this.email)
    }
    
}