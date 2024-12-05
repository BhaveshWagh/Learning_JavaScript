const notesContainer = document.getElementById('app');
const addNoteButton = notesContainer.querySelector('.add-note');

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener('click', () => addNote());

function getNotes() {
  // convert json data to native js array
  return JSON.parse(localStorage.getItem('stickynotes-notes') || '[]');
}

function saveNotes(notes) {
  // take in your js array and stringify to json format
  localStorage.setItem('stickynotes-notes', JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement('textarea');

  element.classList.add('note');
  element.value = content;
  element.placeholder = 'Empty sticky note';

  element.addEventListener('change', () => {
    updateNote(id, element.value);
  });

  element.addEventListener('dblclick', () => {
    const doDelete = confirm(
      'Are you sure you wish to delete this sticky note?'
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  const notesObject = {
    id: Math.floor(Math.random() * 1000000),
    content: '',
  };

  const noteElement = createNoteElement(notesObject.id, notesObject.content);

  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(notesObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  console.log('Updating notes: ', notes);
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}
