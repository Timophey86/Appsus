import noteEditModal from './note-edit-modal.cmp.js'

export default {
  props: ['note'],
  template: `
    <section class="note-txt">
      <h1>{{note.info.txt}}</h1>
      <button @click="click">Edit</button>
      <note-edit-modal v-if="this.isEdit" :note="note" />
    </section>
    
  `,
  data() {
    return {
      isEdit: false,
    };
  },
  methods : {
    click(){
      console.log('bla');
      this.isEdit = true
    }
  },
  components: {
    noteEditModal
  }
};