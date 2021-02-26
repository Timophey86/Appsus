import { notesService } from '../services/keep-service.js'
import noteList from '../cmps/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'
const KEY = 'notes'

export default {
  template: `
    <section v-if="notes" class="keep-app " >
      <note-list @deleteNote="deleteNote" :notes="notes"></note-list>
      <div class="add">
        
        <select @change="onChange($event)" class="add-btn">
        <option value="noteTxt">text</option>
        <option value="noteTodos">todo</option>
        <option value="noteImg">img</option>
        </select>
        <!-- <button class="add-btn" @click="add">add</button> -->
        <note-add :noteType="this.noteType" @addNote="addNote" v-if="isAdd"/>
      </div>
    </section>
  `,
  data() {
    return {
      notes: null,
      isAdd: false,
      noteType: null
    };
  },
  methods: {
    onChange(event) {
      this.noteType = event.target.value
      this.isAdd = true 
    },
    getNotes() {
      notesService.query(KEY)
        .then(notes => {if (!notes || !notes.length) {
            this.notes = notesService.getNotes()
            notesService.saveToStorage(KEY, this.notes)
        } else {
          this.notes = notes
        }})
    },
    add() {
      this.isAdd = true 
    },
    deleteNote(noteId){
      notesService.deleteNote(noteId)
         .then(()=>{
          this.getNotes()
         })
    },
    addNote(newNout){
      notesService.addNote(newNout)
      .then(()=>{
        this.getNotes()
       })
       this.isAdd = false
    }
  },
  created() {
    this.getNotes()
  },
  components: {
    noteList,
    noteAdd,
  }
};