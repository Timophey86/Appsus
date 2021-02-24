import { storageService } from './async-storage-service.js'
import {utilService} from './util-service.js'

const KEY = 'emails'

export const mailService = {
    query,
    saveToStorage,
    createBook,
    saveNewItemToStorage,
    removeItem,
    getMails
}


function query(key = KEY) {
   return storageService.query(key)
}

function saveToStorage(key, value) {
  storageService.postMany(key, value)
}


function saveNewItemToStorage(key, value) {
  storageService.post(key,value)
}

function removeItem(key, value) {
  storageService.remove(key, value)
}


function getMails () {
  return gEmails
}

var gEmails= [{subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},]

function createBook(book) {
 return {
    id: book.id,
    title: book.volumeInfo.title,
    subtitle: "mi est eros convallis auctor arcu dapibus himenaeos",
    authors: [_makeAuthor()],
    publishedDate: book.volumeInfo.publishedDate,
    description: _makeLorem(20),
    pageCount: _getRandomIntInclusive(20,1000),
    categories: ["Computers", "Hack"],
    thumbnail: book.volumeInfo.imageLinks.smallThumbnail,
    language: "en",
    reviews:[],
    listPrice: {
      amount: _getRandomIntInclusive(20,200),
      currencyCode: "EUR",
      isOnSale: false,
    },
  }
}



function _makeAuthor(nameLength = 2) {
  var names = [
    "Liam",
    "Noah",
    "Oliver",
    "William",
    "Elijah",
    "James",
    "Benjamin",
    "Lucas",
    "Mason",
    "Ethan",
    "Alexander",
    "Henry",
    "Jacob",
    "Olivia",
    "Emma",
    "Ava",
    "Sophia",
    "Isabella",
    "Charlotte",
    "Amelia",
    "Mia",
    "Harper",
    "Evelyn",
    "Abigail",
    "Emily",
    "Ella",
  ];
  var authorName = "";
  while (nameLength > 0) {
    nameLength--;
    authorName += names[Math.floor(Math.random() * names.length)] + " ";
  }
  return authorName;
}

function _makeLorem(size = 2) {
  var words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color of television",
    "tuned",
    "to",
    "a dead channel",
    "All",
    "this happened",
    "more or less",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from various people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    "It",
    "was",
    "a pleasure",
    "to",
    "burn",
  ];
  var txt = "";
  while (size > 0) {
    size--;
    txt += words[Math.floor(Math.random() * words.length)] + " ";
  }
  return capitaliseFirstLetter(txt);
}

function capitaliseFirstLetter (txt) {
  var upperCaseTxt = txt.charAt(0).toUpperCase()+txt.slice(1)
  return upperCaseTxt
}

function _getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// storageService.postMany(KEY, gBooks)