import noteTxt from './note-txt.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
import noteVideo from './note-video.cmp.js'

export default {
    props: ['notesToShow'],
    template: `
        <section class="note-container">
            <div v-for="(note, idx) in notesToShow" :key="note.id" class="notes-list"> 
              <component  @deleteNote="deleteNote" :is="note.type" :info="note.info" :note="note">
              </component>
            </div>
            
        </section>
    `,
    methods:{
        deleteNote(noteId){
            this.$emit('deleteNote',noteId)
        }
    },
    components: {
        noteTxt,
        noteTodos,
        noteImg,
        noteVideo
    },
};