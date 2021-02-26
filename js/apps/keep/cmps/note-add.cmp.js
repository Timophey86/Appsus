import { notesService } from '../services/keep-service.js'

export default {
    props: ['noteType'],
    template: `
        <section class="note-add">

        <div v-if="noteType === 'noteTxt'">
        <textarea cols="20" rows="10" v-model="newNote.txt.info.txt"></textarea>
        <button @click="addNote">save</button>
        </div>

        <div v-if="noteType === 'noteTodos'">
        <input type="text" v-model="newNote.todos.info.label">
        <input type="text" v-model="newNote.todos.txt">
        <button @click="addNote">save</button>
        </div>

        <div v-if="noteType === 'noteImg'">
        <input type="text" v-model="newNote.img.info.title">
        <input type="text" v-model="newNote.img.info.url">
        <button @click="addNote">save</button>
        </div>
        

        </section>
    `,
    data() {
        return {
            newNote: {
                txt: notesService.getNewTxtNote(),
                todos: notesService.getNewTodosNote(),
                img: notesService.getNewImgNote()
            },
            type : this.noteType,
        }
    },
    methods: {
        addNote(){
            var note = this.newNote.txt
            if (this.type === 'noteTodos') note = this.newNote.todos
            else if (this.type === 'noteImg') note = this.newNote.img
            this.$emit('addNote',note)
            
        }
    }
};