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
  getNewImgNote,
  addToTop
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

function addToTop(noteId){
  storageService.addToTop(KEY, noteId)
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
      backgroundColor: '#E0BBE4'
    }
  },
  {
    id: utilService.makeId(3),
    type: 'noteTodos',
    isPinned: false,
    info: {
      label: 'TO DO :',
      todos: [
        { txt: 'Eat', doneAt: null },
        { txt: 'Sleep(not)', doneAt: 187111111 },
        { txt: 'Code', doneAt: 187111111 },
        { txt: 'Repeat', doneAt: 187111111 }
      ]
    },
    style: {
      backgroundColor: '#FFFFBF'
    }
  },
  {
    id: utilService.makeId(3),
    type: 'noteImg',
    isPinned: false,
    info: {
      url: 'https://images.unsplash.com/photo-1516633630673-67bbad747022?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
      title: 'i need vitamin sea !!!'
    },
    style: {
      backgroundColor: '#ACECD5'
    }
  },
  {
    id: utilService.makeId(3),
    type: 'noteTxt',
    isPinned: false,
    info: {
      txt: 'Holllllllllla'
    },
    style: {
      backgroundColor: '#CEC9DF'
    }
  },
  {
    id: utilService.makeId(3),
    type: 'noteImg',
    isPinned: false,
    info: {
      url: 'https://images.unsplash.com/photo-1455275803899-34511e680e27?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
      title: 'keep on cruising'
    },
    style: {
      backgroundColor: '#F28997'
    }
  },
  {
    id: utilService.makeId(3),
    type: 'noteImg',
    isPinned: false,
    info: {
      url: 'https://images.unsplash.com/photo-1610575668742-d1891a67df5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
      title: 'VIBE'
    },
    style: {
      backgroundColor: '#A5FFE1'
    }
  },
  {
    id: utilService.makeId(3),
    type: 'noteTxt',
    isPinned: false,
    info: {
      txt: 'Fullstack Me Baby!'
    },
    style: {
      backgroundColor: '#813F5B'
    }
  },
  {
    id: utilService.makeId(3),
    type: 'noteImg',
    isPinned: false,
    info: {
      url: 'https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=694&q=80',
      title: 'Amsterdam'
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
      label: 'TO DO :',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 },
      ]
    },
    style: {
      backgroundColor: '#8DA290'
    }
  },
  {
    id: utilService.makeId(3),
    type: 'noteImg',
    isPinned: false,
    info: {
      url: 'https://images.unsplash.com/photo-1484371924254-a44002341ca9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
      title: 'Me playing Mi'
    },
    style: {
      backgroundColor: '#B4DFF6'
    }
  }

  
  // {
  //   id : utilService.makeId(3),
  //   type: 'noteVideo',
  //   isPinned: false,
  //   info: {
  //     url: 'http://www.youtube.com/embed/W7qWa52k-nE',
  //     title: 'Nice video!'
  //   },
  //   style: {
  //     backgroundColor: '#00d'
  //   }
  // }
]






