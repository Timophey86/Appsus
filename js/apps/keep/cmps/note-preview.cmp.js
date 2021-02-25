import noteTxt from './note-txt.cmp.js'


export default {
    props: ['notes'],
    template: `
        <section class="note-preview">

            <div v-for="(note, idx) in notes" :key="note.id" class="notes-list">
            <component @deleteNote="deleteNote" :is="note.type" :info="note.info" :note="note" :style="{ 'background-color': note.style.backgroundColor }" class="note">
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
        
    },

};