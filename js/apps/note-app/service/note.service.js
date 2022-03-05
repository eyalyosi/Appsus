import { utilService } from "../../../service/util-service.js";
import { storageService } from "../../../service/async-storage-service.js";

export const noteService = {
  remove,
  getNotes,
  createNote,
  get,
  changeNoteColor,
  removeTodo,
  changeTodoStatus,
  copyNote,
  setPining
};
const KEY_NOTE = "notes";
var gNotes = utilService.loadFromStorage(KEY_NOTE);

function getNotes(){ 
  if (!gNotes || !gNotes.length) {
    console.log('shit');
     gNotes =  [
    {
      type : 'textNote',
      id:"n101",
      isPinned: false,
      info: {
        label: 'Note',
        txt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, molestiae.',
        color: 'rgb(124, 143, 238)',
      }
    },
    {
      type : 'textNote',
      id:"n102",
      isPinned: false,
      info: {
        label: 'Note',
        txt: 't consectetur adipisicing elit. Sequi, molestiae.',
        color: 'rgb(124, 143, 238)',
      }
    },
    {
      type : 'textNote',
      id:"n103",
      isPinned: true,
      info: {
        label: 'Note',
        txt: ' adipisicing elit. Sequi, molestiae.',
        color: 'rgb(124, 143, 238)',
      }
    },
    {
      type : 'noteTodo',
      id:"n104",
      isPinned: false,
      info: {
        label: 'Todo',
        todo: [{txt:'eat',isDone: false},{txt:'take a shawer',isDone: false}],
        color: 'rgb(124, 143, 238)',
      }
    },
    {
      type : 'noteTodo',
      id:"n105",
      isPinned: false,
      info: {
        label: 'Todo',
        todo: [{txt:'finish the sprint',isDone: false},{txt:'love',isDone: false},{txt:'do something',isDone: false}],
        color: 'rgb(124, 143, 238)',
      }
    },
    {
      type : 'noteVideo',
      id:"n106",
      isPinned: false,
      info: {
        label: 'Video',
        url: 'https://www.youtube.com/watch?v=Su4Gv-cwpWI&list=RDSu4Gv-cwpWI&index=2',
        color: 'rgb(124, 143, 238)',
      }
    },
    {
      type : 'noteImg',
      id:"n107",
      isPinned: false,
      info: {
        label: 'Image',
        url: 'https://i.picsum.photos/id/234/200/300.jpg?hmac=KD9xFDCez7-lqgcMm-EEi7BtpClIdCzJS6YvFVyLiDs',
        color: 'rgb(124, 143, 238)',
      }
    },

  ]
  utilService.saveToStorage(KEY_NOTE, gNotes);
}
return query(KEY_NOTE).then((notes) => notes);
}

function setPining(note){
return storageService.put(KEY_NOTE,note)
}

function query() {
  return storageService.query(KEY_NOTE);
}

function remove(noteId) {
   storageService.remove(KEY_NOTE, noteId)
   return query()
   .then(notes => notes)
}

function createNote(input ,type) {
  // console.log(txt);
const note = {
  type,
  id: '',
  isPinned:false,
  info: {
    // label:'Note',
    // txt,
    color:'rgb(124, 143, 238)',
  }
}
 switch (type) {
   case 'textNote':
     note.info.label='Note'
     note.info.txt= input
     break;
   case 'noteImg':
     note.info.label='Image';
     note.info.url= input;
     break;
   case 'noteVideo':
     note.info.label='Video';
     note.info.url= input;
     break;
   case 'noteTodo':
     var todos = input.split(',')
     const nTodo = todos.map(todo => {
        return {txt: todo , isDone: false}
     })
     note.info.label='Todo';
     note.info.todo= nTodo;
     break;
 } 
return storageService.post(KEY_NOTE,note)
}

function copyNote(note){
  const newNote = JSON.parse(JSON.stringify(note))
  newNote.id = ''
  return storageService.post(KEY_NOTE,newNote)
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

function removeTodo(id,Todo) {
  return query().then(notes => {
    var note = notes.find(note => note.id === id)   
    var todoIdx = note.info.todo.findIndex(todo => todo.txt === Todo.txt)
    note.info.todo.splice(todoIdx,1)
    return storageService.put(KEY_NOTE,note)
  })
}

function changeTodoStatus(noteId,todoIdx){
  return get(noteId).then(note => {
    if(note.info.todo[todoIdx].isDone){
      note.info.todo[todoIdx].isDone = false
    } else {
      note.info.todo[todoIdx].isDone = true
    }
      return storageService.put(KEY_NOTE,note)
  })
}