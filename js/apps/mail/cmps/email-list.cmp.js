import {mailService} from "../services/mail-service.js"
import emailPreview from "./email-preview.cmp.js"
const KEY = 'emails'

export default {
    template: `
    <section class= "email-list">
        <h3>This is our emails list</h3>
        <email-preview v-for="(currEmail, idx) in emails" :key="currEmail.id"
            :email="currEmail" :idx="idx"> 
        </email-preview> 
    </section>
    `,
    data () {
        return {
            emails : []
        }
    },
    methods: {
        getEmails() {
            mailService.query(KEY)
            .then(mails => {if (!mails || !mails.length) {
                this.emails = mailService.getMails()
                mailService.saveToStorage(KEY, this.emails)
            } else {
                console.log(' i have this for u', mails)
                this.emails=mails
            }})
        }
    },
    created() {
        this.getEmails()
    },
    components: {
        emailPreview
    }
}