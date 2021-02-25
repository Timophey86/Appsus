import { storageService } from "../../../main-services/async-storage-service.js";
import { utilService } from "./util-service.js";

const KEY = "emails";

export const mailService = {
  query,
  saveToStorage,
  saveNewItemToStorage,
  removeItem,
  getMails,
  sendEmail,
  changeReadStatus,
};

function query(key = KEY) {
  return storageService.query(key);
}

function saveToStorage(key = KEY, value) {
  storageService.postMany(key, value);
}

function saveNewItemToStorage(key = KEY, value) {
  storageService.post(key, value);
}

function removeItem(key = KEY, value) {
  storageService.remove(key, value);
}

function sendEmail(recipent, about, txt) {
  let newEmail = {
    isSent: true,
    id: utilService.makeId(),
    from: "Appsus Industries",
    to: recipent,
    subject: about,
    body: txt,
    isRead: false,
    date: Date.now(),
  };
  saveNewItemToStorage(KEY, newEmail);
}

function changeReadStatus(id) {
  storageService.get(KEY, id).then((mail) => {
    (mail.isRead = true), storageService.put(KEY, mail);
  });
}

function getMails() {
  return gEmails;
}

var gEmails = _createEmails();

function _createEmail(status) {
  return {
    isSent: false,
    id: utilService.makeId(),
    subject: _makeLorem(),
    body: _makeLorem(10),
    isRead: status,
    date: Date.now(),
    from: _makeAuthor(1),
    to: _makeAuthor(1),
  };
}

function _createEmails() {
  var emails = [];
  for (var i = 0; i < 10; i++) {
    if (i === 3 || i === 6 || i === 4) {
      emails.push(_createEmail(true));
    } else emails.push(_createEmail(false));
  }
  return emails;
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

function capitaliseFirstLetter(txt) {
  var upperCaseTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
  return upperCaseTxt;
}

function _getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// storageService.postMany(KEY, gBooks)
