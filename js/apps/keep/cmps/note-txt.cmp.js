import noteEditModal from './note-edit-modal.cmp.js'


export default {
  props: ['note'],
  template: `
    <section class="note-txt">
      <h1>{{note.info.txt}}</h1>
      <button @click="edit">Edit</button>
      <button @click="deleteNote">delete</button>
      <note-edit-modal v-if="this.isEdit" :note="note" />
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
    }
  },
  components: {
   
    noteEditModal,
    
  }
};

