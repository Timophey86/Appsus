import { notesService } from '../services/keep-service.js'

export default {
    props: ['noteType'],
    template: `
        <section class="note-add">

        <div v-if="noteType === 'noteTxt'">
            <h1>Add you'r note:</h1>
        <textarea cols="20" rows="10" v-model="newNote.txt.info.txt"></textarea>
            <div class="add-save" @click="addNote"><i class="far fa-save fa-lg"></i></div>
        </div>

        <!-- <div class="add-modal" v-if="noteType === 'noteTodos'">
        <input type="text" v-model="newNote.todos.info.label">
        <input type="text" v-model="newNote.todos.txt">
        <button @click="addNote">save</button>
        </div> -->

        <div class="add-img" v-if="noteType === 'noteImg'">
            <label>Add text:</label>
            <input type="text" v-model="newNote.img.info.title">
            <label>Add image url:</label>
            <input type="text" v-model="newNote.img.info.url">
            <div class="add-save" @click="addNote"><i class="far fa-save fa-lg"></i></div>
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