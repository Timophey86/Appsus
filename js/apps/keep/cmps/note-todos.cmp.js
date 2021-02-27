import noteEditModal from './note-edit-modal.cmp.js'
import { notesService } from '../services/keep-service.js'

export default {
    props: ['note'],
    template: `
        <section>

          <div class="note" :style="{ 'background-color': note.style.backgroundColor }">
            <h1>{{note.info.label}}</h1>
              <ul>
                   <li v-for="todo in note.info.todos">
                       <p>{{todo.txt}}</p>
                   </li>
              </ul>
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


}    