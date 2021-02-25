import { notesService } from '../services/keep-service.js'


export default {
  props: ['note'],
  template: `
      <section class="edit-modal">
      
        <div class="txt-edit">
          <h1>Edit you'r note:</h1>
          <textarea cols="20" rows="10" v-model="noteToEdit.info.txt"></textarea>
          <button @click="save">Save</button>
        </div>
      </section>
  `,
  data() {
    return {
      noteToEdit: null,
    }
  },
  methods: {
    save() {
      notesService.editNote(this.noteToEdit)
    }
  },
  created() {
    this.noteToEdit = this.note
  },


}


