import {mailService} from "../services/mail-service.js"
import {utilService} from '../services/util-service.js'
import {eventBus} from "../services/event-bus.js"

export default {
    props: ['email'],
    template: `
        <section class="email-compose">
            <div class="mail-title">Email compose</div>
            <div> {{email}}</div>
            <input type="text" placeholder="To:" v-model="mail.to" autofocus required> 
            <input type="text" placeholder="Subject" v-model="mail.subject" required>
            <textarea type="text" class="compose-body" rows="10" cols="50" placeholder="email text" v-model="mail.body" required></textarea>
            <button class="send" @click="send">Send</button>
            <!-- <button class="save-to-draft">Save to draft <i class="fas fa-archive"></i></button> -->
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
        saveToDraft() {
            
        }
    }
}


