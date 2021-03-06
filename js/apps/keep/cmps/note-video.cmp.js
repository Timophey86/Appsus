import noteEditModal from './note-edit-modal.cmp.js'
import { notesService } from '../services/keep-service.js'


export default {
  props: ['note'],
  template: `
    <section>

      <div class="note" :style="{ 'background-color': note.style.backgroundColor }">

        <h1>{{note.info.title}}</h1>
        <iframe width="150" height="100" :src="note.info.url" frameborder="0" ></iframe>
        <div class="edit-delete-btn">


          <div @click="edit"><i class="fas fa-edit"></i></div>
          <div class="delete" @click="deleteNote"><i class="far fa-trash-alt"></i></div>

          <note-edit-modal @save="save" v-if="this.isEdit" :note="note" />
        </div>
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