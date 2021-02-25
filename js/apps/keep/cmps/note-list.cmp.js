import noteTxt from './note-txt.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
import noteVideo from './note-video.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class="note-container">
            <div v-for="(note, idx) in notes" :key="note.id" class="notes-list">
              <component class="note" @deleteNote="deleteNote" :is="note.type" :info="note.info" :note="note" :style="{ 'background-color': note.style.backgroundColor }" >
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