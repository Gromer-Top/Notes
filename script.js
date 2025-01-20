//Массив кнопок удаления
let deleteBtns = document.getElementsByClassName('deleteBtn');

let inputText = document.getElementById("input")

function addNote() {
  let notes = document.querySelector("#note-list");
  let note = document.createElement('li');
  let deleteBtn = document.createElement('button');
  let input = document.getElementById('input')
  if (input.value != '')
  {
    note.classList.add('note');
    note.innerHTML = input.value;
    notes.appendChild(note);
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerHTML = "X";
    deleteBtns = document.getElementsByClassName('deleteBtn');
    note.appendChild(deleteBtn);
    input.value = '';
  }
  input.value = '';
}

function deleteNote(el){
  el.parentNode.remove();
}