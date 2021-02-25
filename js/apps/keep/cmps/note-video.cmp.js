import noteEditModal from './note-edit-modal.cmp.js'
import { notesService } from '../services/keep-service.js'


export default {
  props: ['note'],
  template: `
    <section class="note-txt">
      <h1>{{note.info.title}}</h1>
      
      <iframe width="150" height="100" src="https://www.youtube.com/watch?v=1lFI8sYN1Rc" frameborder="0" ></iframe>
      <button @click="edit">Edit</button>
      <button @click="deleteNote">delete</button>
      <note-edit-modal @save="save" v-if="this.isEdit" :note="note" />
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