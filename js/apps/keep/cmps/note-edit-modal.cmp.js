

export default {
  props: ['note'],
  template: `
      <section class="edit-modal">

        <div class="txt-edit">
          <div v-if="noteType === 'noteTxt'">
            <h1>Edit you'r note:</h1>
            <textarea cols="20" rows="10" v-model="noteToEdit.info.txt"></textarea>
            <input type="color" v-model="noteToEdit.style.backgroundColor">
            <button @click="save">Save</button>
          </div>
      
          <div v-if="noteType === 'noteTodos'">
            <h1>Edit you'r note:</h1>
            <input type="text" v-model="noteToEdit.info.label">
            <ul>
                <li v-for="todo in todos">
                  <input type="text" v-model="todo.txt">
                </li> 
            </ul>
            <input type="color" v-model="noteToEdit.style.backgroundColor">
            <button @click="save">Save</button>
          </div>

          <div v-if="noteType === 'noteImg'">
            <h1>Edit you'r note:</h1>
            <input type="text" v-model="noteToEdit.info.title">
            <input type="text" v-model="noteToEdit.info.url">
            <input type="color" v-model="noteToEdit.style.backgroundColor">
            <button @click="save">Save</button>
          </div>

          <div v-if="noteType === 'noteVideo'">
            <h1>Edit you'r note:</h1>
            <input type="text" v-model="noteToEdit.info.title">
            <input type="text" v-model="noteToEdit.info.url">
            <input type="color" v-model="noteToEdit.style.backgroundColor">
            <button @click="save">Save</button>
          </div>

        </div>

      </section>
  `,
  data() {
    return {
      noteToEdit: null,
      noteType : this.getNoteType(),
      todos: this.note.info.todos
    }
  },
  methods: {
    getNoteType(){
      if (this.note.type === 'noteTxt')return 'noteTxt'
      else if (this.note.type === 'noteTodos') return 'noteTodos'
      else if (this.note.type === 'noteImg') return 'noteImg'
      else if (this.note.type === 'noteVideo') return 'noteVideo'
      else return
      
    },
    save() {
      this.$emit('save',this.noteToEdit)
    }
  },
  created() {
    this.noteToEdit = this.note
    
  },
}


