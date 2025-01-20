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
    note.appendChild(deleteBtn);
    deleteBtn.onclick = deleteNote;
    input.value = '';
  }
  input.value = '';
}

function deleteNote(){
  this.parentNode.remove();
}