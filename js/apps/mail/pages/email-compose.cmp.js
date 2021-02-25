import {mailService} from "../services/mail-service.js"
import {utilService} from '../services/util-service.js'
import {eventBus} from "../services/event-bus.js"

export default {
    props: ['email'],
    template: `
        <section class="email-compose">
            <div class="mail-title">Email compose</div>
            <div> {{email}}</div>
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
        if(this.$route.params.to) {
            this.mail.to='To: '+this.$route.params.to,
            this.mail.subject='Re: '+ this.$route.params.subject
        }
    },
    methods: {
        send() {
            mailService.sendEmail(this.mail.to, this.mail.subject, this.mail.body)
            this.$router.push('/mail-app')
        },
        saveToSent() {}
    }
}


