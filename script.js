let inputText = document.getElementById("input")

let notesList = [];
for(let i = 0; i<10; i++){
  if(localStorage.getItem(String(i)) != null)
  {
    notesList.push(localStorage.getItem("1"));
    addNote(notesList[0]);
  }
}
function addNote(text) {
  let notes = document.querySelector("#note-list");
  let note = document.createElement('li');
  let deleteBtn = document.createElement('button');
  let input = document.getElementById('input')
  if(text!= null){
    note.classList.add('note');
    note.innerHTML = text;
    notes.appendChild(note);
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerHTML = "X";
    note.appendChild(deleteBtn);
    deleteBtn.onclick = deleteNote;
  }
  if (input.value != '')
  {
    note.classList.add('note');
    note.innerHTML = input.value;
    notes.appendChild(note);
    deleteBtn.classList.add('deleteBtn');
    note.appendChild(deleteBtn);
    deleteBtn.onclick = deleteNote;
    input.value = '';
    localStorage.setItem("1", note.innerText);
    notesList.push(localStorage.getItem("1"));
    console.log(notesList);
  }
  input.value = '';
}

function deleteNote(){
  this.parentNode.remove();
}