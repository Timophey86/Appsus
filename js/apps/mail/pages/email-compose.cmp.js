import {mailService} from "../services/mail-service.js"
import {utilService} from '../services/util-service.js'

export default {
    // props: ['email'],
    template: `
        <section class="email-compose">
            <div class="mail-title">Email compose</div>
            <input placeholder="To:" v-model="mail.to" autofocus required> 
            <input placeholder="Subject" v-model="mail.subject" required>
            <textarea class="compose-body" rows="8" cols="50" placeholder="email text" v-model="mail.body" required></textarea>
            <button @click="send">Send</button>
            
        </section> 
    `,
    data() {
        return {
            mail: {
                id: null,
                subject: '',
                body: '',
                isRead: false,
                date: Date.now(),
                from: 'Apsus User',
                to: '',
            },
        }
    },
    created() {
        this.mail.id = utilService.makeId()
    },
    methods: {
        send() {
            this.$router.push('/mail-app')
            mailService.sendEmail(this.mail.to, this.mail.subject, this.mail.body)
            this.$emit()
        }
    }
}