import { storageService } from './async-storage-service.js'
import { utilService } from './util-service.js'


const KEY = 'notes '

export const notesService = {
  query,
  getNotes,
  saveToStorage,
  saveNewItemToStorage
}


function query(key = KEY) {
  return storageService.query(key)
}

function getNotes() {
  return gNotes
}

function saveToStorage(key, value) {
  storageService.postMany(key, value)
}

function saveNewItemToStorage(key, value) {
  storageService.post(key, value)
}

var gNotes = [

  {
    id : utilService.makeId(3),
    type: 'NoteTxt',
    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!'
    },
    style: {
      backgroundColor: '#00d'
    }
  },
  {
    id : utilService.makeId(3),
    type: 'NoteImg',
    info: {
      url: 'http://some-img/me',
      title: 'Me playing Mi'
    },
    style: {
      backgroundColor: '#00d'
    }
  },
  {
    id : utilService.makeId(3),
    type: 'NoteTodos',
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
    id : utilService.makeId(3),
    type: 'NoteVideo',
    info: {
      url: 'https://www.youtube.com/watch?v=1lFI8sYN1Rc',
      title: 'Nice video!'
    },
    style: {
      backgroundColor: '#00d'
    }
  }
]






