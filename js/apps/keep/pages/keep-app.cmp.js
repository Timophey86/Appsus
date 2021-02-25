import { notesService } from '../services/keep-service.js'
import notePreview from '../cmps/note-preview.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'
const KEY = 'notes'


export default {
  template: `
    <section v-if="notes" class="keep-app">
      <note-preview @deleteNote="deleteNote" :notes="notes"></note-preview>
      <div class="add">
        <button @click="add">add</button>
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
      // console.log('add');
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
    }
  },

  created() {
    this.getNotes()


  },
  components: {
    notePreview,
    noteAdd,
  }



};