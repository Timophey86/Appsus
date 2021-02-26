import { storageService } from './async-storage-service.js'
import { utilService } from './util-service.js'

const KEY = 'notes'

export const notesService = {
  query,
  getNotes,
  saveToStorage,
  saveNewItemToStorage,
  editNote,
  deleteNote,
  getNewTxtNote,
  addNote,
  getNewTodosNote,
  getNewImgNote
}


function addNote(note) {
  return storageService.post(KEY, note)
}

function editNote(note) {
  storageService.put(KEY, note)

}

function saveToStorage(key, value) {
  storageService.postMany(key, value)
}
function deleteNote(noteId) {
  return storageService.remove(KEY, noteId)
}

function query(key = KEY) {
  return storageService.query(key)
}

function getNotes() {
  return gNotes
}

function saveNewItemToStorage(key, value) {
  storageService.post(key, value)
}

function getNewTxtNote() {
  return {
    id: utilService.makeId(3),
    type: 'noteTxt',
    isPinned: false,
    info: {
      txt: ''
    },
    style: {
      backgroundColor: '#00d'
    }
  }
}

function getNewTodosNote() {
  return {

    id: utilService.makeId(3),
    type: 'noteTodos',
    isPinned: false,
    info: {
      label: '',
      todos: [
        { txt: '', doneAt: null },
        { txt: '', doneAt: 187111111 }
      ]
    },
    style: {
      backgroundColor: '#00d'
    }

  }
}

function getNewImgNote() {
  return {

    id: utilService.makeId(3),
    type: 'noteImg',
    isPinned: false,
    info: {
      url: '',
      title: ''
    },
    style: {
      backgroundColor: '#00d'
    }

  }
}



var gNotes = [

  {
    id: utilService.makeId(3),
    type: 'noteTxt',
    isPinned: false,
    info: {
      txt: 'Fullstack Me Baby!'
    },
    style: {
      backgroundColor: '#00d'
    }
  },
  {
    id: utilService.makeId(3),
    type: 'noteTodos',
    isPinned: false,
    info: {
      label: 'How was it:',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 }
      ]
    },
    style: {
      backgroundColor: '#00d'
    }
  },
  {
    id: utilService.makeId(3),
    type: 'noteImg',
    isPinned: false,
    info: {
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80',
      title: 'Me playing Mi'
    },
    style: {
      backgroundColor: '#00d'
    }
  },
  // {
  //   id : utilService.makeId(3),
  //   type: 'noteVideo',
  //   isPinned: false,
  //   info: {
  //     url: 'https://www.youtube.com/watch?v=1lFI8sYN1Rc',
  //     title: 'Nice video!'
  //   },
  //   style: {
  //     backgroundColor: '#00d'
  //   }
  // }
]






