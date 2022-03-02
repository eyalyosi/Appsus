import { utilService } from "../../../service/util-service.js";
import { storageService } from "../../../service/async-storage-service.js";

export const noteService = {
  remove,
  getNotes,
};
const KEY_NOTE = "notes";
var gNotes = utilService.loadFromStorage(KEY_NOTE) || [];

function getNotes() {
  if (!gNotes || !gNotes.length) {
    gNotes = [
      {
        id: "n101",
        type: "note-txt",
        isPinned: false,
        info: {
          txt: "sprint 3",
        },
      },
      {
        id: "n102",
        type: "note-img",
        isPinned: false,
        info: {
          //   url: "https://i.picsum.photos/id/234/200/300.jpg?hmac=KD9xFDCez7-lqgcMm-EEi7BtpClIdCzJS6YvFVyLiDs",
          txt: "paris",
        },
      },
      {
        id: "n103",
        type: "note-todos",
        isPinned: false,
        info: {
          txt: "clean",
        },
      },
    ];
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
