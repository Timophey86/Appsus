import {mailService} from "../services/mail-service.js"

export default {
    template: `
    <section class= "email-list">
        <h3>This is our emails list</h3>
    </section>
    `,
    data () {
        return {
            emails : []
        }
    },
    methods: {
        getEmails() {
            this.emails = mailService.getMails()
        }
    },
    created() {
        this.getEmails()
        console.log(this.emails)
        
    }
}