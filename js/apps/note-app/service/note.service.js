import { utilService } from "../../../service/util-service.js";
import { storageService } from "../../../service/async-storage-service.js";

export const noteService = {
  remove,
  getNotes,
  createNote,
  get,
  changeNoteColor,

};
const KEY_NOTE = "notes";
var gNotes = utilService.loadFromStorage(KEY_NOTE);

// function getNotes() {
//   if (!gNotes || !gNotes.length) {
//     gNotes = [
//       {
//         id: "n101",
//         color:'rgb(246, 239, 239)',
//         type: "note-txt",
//         isPinned: false,
//         info: {
//           txt: "sprint 3",
//         },
//       },
//       {
//         id: "n102",
//         color:'rgb(246, 239, 239)',
//         type: "note-img",
//         isPinned: false,
//         info: {
//           //   url: "https://i.picsum.photos/id/234/200/300.jpg?hmac=KD9xFDCez7-lqgcMm-EEi7BtpClIdCzJS6YvFVyLiDs",
//           txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor inventore delectus assumenda' ,
//         },
//       },
//       {
//         id: "n103",
//         color:'rgb(246, 239, 239)',
//         type: "note-todos",
//         isPinned: false,
//         info: {
//           txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, praesentium.',
//         },
//       },
//     ];
//   }
//   utilService.saveToStorage(KEY_NOTE, gNotes);
//   return query(KEY_NOTE).then((notes) => notes);
// }

// test
// test
// test


// function getById() {
//   return Promise.resolve(gNotes);
// }


function getNotes(){ 
  if (!gNotes || !gNotes.length) {
     gNotes =  [
    {
      type : 'textNote',
      id:"n101",
      info: {
        label: 'Note',
        txt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, molestiae.',
        color: 'rgb(246, 239, 239)',
        isPinned: false,
      }
    },
    {
      type : 'textNote',
      id:"n102",
      info: {
        label: 'Note',
        txt: 't consectetur adipisicing elit. Sequi, molestiae.',
        color: 'rgb(246, 239, 239)',
        isPinned: false,
      }
    },
    {
      type : 'textNote',
      id:"n103",
      info: {
        label: 'Note',
        txt: ' adipisicing elit. Sequi, molestiae.',
        color: 'rgb(246, 239, 239)',
        isPinned: false,
      }
    },
    {
      type : 'noteTodo',
      id:"n104",
      info: {
        label: 'Todo',
        txt: ['eat','take a shawer'],
        color: 'rgb(246, 239, 239)',
        isPinned: false,
      }
    },
    {
      type : 'noteTodo',
      id:"n105",
      info: {
        label: 'Todo',
        txt: ['finish the sprint','love','do something'],
        color: 'rgb(246, 239, 239)',
        isPinned: false,
      }
    },
    {
      type : 'noteImg',
      id:"n106",
      info: {
        label: 'Image',
        txt: 'https://i.picsum.photos/id/234/200/300.jpg?hmac=KD9xFDCez7-lqgcMm-EEi7BtpClIdCzJS6YvFVyLiDs',
        color: 'rgb(246, 239, 239)',
        isPinned: false,
      }
    },

  ]
}
utilService.saveToStorage(KEY_NOTE, gNotes);
return query(KEY_NOTE).then((notes) => notes);
}



function query() {
  return storageService.query(KEY_NOTE);
}

function remove(noteId) {
   storageService.remove(KEY_NOTE, noteId)
   return query()
   .then(notes => notes)
}

function createNote(txt ,type='textNote') {
  console.log(txt);
const note = {
  type,
  id: '',
  info: {
    label:'Note',
    txt,
    color:'rgb(246, 239, 239)',
    isPinned:false
  }
}
return storageService.post(KEY_NOTE,note)
}

function get(noteId) {
  return storageService.get(KEY_NOTE, noteId)
  .then(note => {
    return note;
      // return _setNextPrevCarId(car)
  })
}

function changeNoteColor(note) {
  return storageService.put(KEY_NOTE,note)
  .then(note => note)
}