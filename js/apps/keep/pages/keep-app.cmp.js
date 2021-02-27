import { notesService } from '../services/keep-service.js'
import noteList from '../cmps/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'
const KEY = 'notes'

export default {
  template: `
    <section v-if="notes" class="keep-app main-container" >
      <div class="action">
      <note-filter @filtered="setFilter"/>
      <div class="add">
        <h1>Add note :</h1>
        <select @change="onChange($event)" class="add-filter">
          <option value="noteImg">image</option>
        <option value="noteTxt">text</option>
        </select>
        <note-add :noteType="this.noteType" @addNote="addNote" v-if="isAdd"/>
      </div>
      </div>

      <note-list :notesToShow="notesToShow" @deleteNote="deleteNote"></note-list>

    </section>
  `,
  data() {
    return {
      notes:[],
      isAdd: false,
      noteType: null,
      filterBy: null
    };
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
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
  computed: {
    notesToShow() {
        if (!this.filterBy) return this.notes
        const searchStr = this.filterBy.byName
        const notesToShow = this.notes.filter(note => {
            if (note.info.txt){
              return note.info.txt.toLowerCase().includes(searchStr.toLowerCase())
            }else if (note.info.label){
              return note.info.label.toLowerCase().includes(searchStr.toLowerCase())
            }else if (note.info.title) {
              return note.info.title.toLowerCase().includes(searchStr.toLowerCase())
            }
        })
        return notesToShow
    }
},
  created() {
    this.getNotes()
  },
  components: {
    noteList,
    noteAdd,
    noteFilter
  }
};