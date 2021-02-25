import { notesService } from '../services/keep-service.js'

export default {
    template: `
        <section class="note-add">
        <textarea cols="20" rows="10" v-model="newTxtNote.info.txt"></textarea>
        <button @click="addNote">save</button>
        </section>
    `,
    data() {
        return {
            newTxtNote: notesService.getNewTxtNote()
        }
    },
    methods: {
        addNote(){
            this.$emit('addNote',this.newTxtNote)
        }
    }
};