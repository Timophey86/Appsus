import { notesService } from '../services/keep-service.js'
import noteList from '../cmps/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'
const KEY = 'notes'

export default {
  template: `
    <section v-if="notes" class="keep-app">
      <note-list @deleteNote="deleteNote" :notes="notes"></note-list>
      <div class="add">
        <button class="add-btn" @click="add">add</button>
        <note-add @addNote="addNote" v-if="isAdd"/>
      </div>
    </section>
  `,
  data() {
    return {
      notes: null,
      isAdd: false,
    };
  },
  methods: {
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