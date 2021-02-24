export default {
    props:['email'],
    template: `
    <div class="email-display" :class="isRead">
        <div class="author">Author:<span>{{this.email.from}}</span></div>
        <div class="subject">Subject:<span>{{this.email.subject}}</span></div>
        <div class="time-sent">Time: <span>{{formatDate}}</span></div> 
        <div v-if="email.isRead"><i class="far fa-envelope-open"></i></div>
        <div v-else><i class="far fa-envelope"></i></div>
    </div>
    `,
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
    
}