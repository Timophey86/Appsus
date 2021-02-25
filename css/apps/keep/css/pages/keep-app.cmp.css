import { notesService } from '../services/keep-service.js'
import notePreview from '../cmps/note-preview.cmp.js'



export default {
  template: `
    <section class="keep-app">
      <note-preview :notes="notes"></note-preview>
    </section>
  `,
  data() {
    return {
      notes: null,
    };
  },
  created() {
    this.notes = notesService.query()
    notesService.query()
    .then(notes => this.notes = notes)
  },
  components: {
    notePreview
  }



};