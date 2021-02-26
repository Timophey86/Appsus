import noteEditModal from './note-edit-modal.cmp.js'
import { notesService } from '../services/keep-service.js'


export default {
  props: ['note'],
  template: `
    <section>

      <div class="note" :style="{ 'background-color': note.style.backgroundColor }">

        <h1>{{note.info.title}}</h1>
        <img width= "140px" height="140px" :src="note.info.url" >
        <button @click="edit">Edit</button>
        <button @click="deleteNote">delete</button>
        <note-edit-modal @save="save" v-if="this.isEdit" :note="note" />
      </div>

    </section>
    
  `,
  data() {
    return {
      isEdit: false,
    };
  },
  methods : {
    edit(){
      this.isEdit = true
    },
    deleteNote() {
      this.$emit('deleteNote',this.note.id) 
    },
    save(note){
      notesService.editNote(note)
      this.isEdit= false
    }
  },
  components: {
    noteEditModal,
  }
};