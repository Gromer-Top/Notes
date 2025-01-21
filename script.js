let inputText = document.getElementById("input")

let notesList = [];

for(let i = 0; i < localStorage.length; i++)
{
  if(localStorage.getItem(String(i)) != null)
  {
    notesList.push(localStorage.getItem(String(i)));
    console.log(1)
  }
  else if(localStorage.getItem(String(i)) == null){
    localStorage.removeItem(String(i));
  }
}

for(let i = 0; i <= notesList.length - 1;i++)
{
  if (notesList[i] != null)
  {
    addNote(String(notesList[i]));
  }
}

function addNote(text) {
  let notes = document.querySelector("#note-list");
  let note = document.createElement('li');
  let deleteBtn = document.createElement('button');
  let input = document.getElementById('input')
  if(text!= null){
    note.classList.add('note');
    note.innerText = text;
    notes.appendChild(note);
    deleteBtn.classList.add('deleteBtn');
    note.appendChild(deleteBtn);
    deleteBtn.onclick = deleteNote;
  }
  if (input.value != '')
  {
    note.classList.add('note');
    note.innerText = input.value;
    notes.appendChild(note);
    deleteBtn.classList.add('deleteBtn');
    note.appendChild(deleteBtn);
    deleteBtn.onclick = deleteNote;
    input.value = '';
    let countNotes = notesList.length + 1;
    localStorage.setItem(countNotes, note.innerText);
    notesList.push(localStorage.getItem(String(countNotes)));
    console.log(countNotes);
    console.log(notesList);
  }
  input.value = '';
}

function deleteNote(){
  for(let i = 0; i < notesList.length; i++){
    if(this.parentNode.innerText  == notesList[i]){
        notesList.splice(i);
    }
  }
  for (let i = 0; i < localStorage.length; i++) {
    if (this.parentNode.innerText == localStorage.getItem(String(i))){
      localStorage.removeItem(String(i));
    }
  }
  
  this.parentNode.remove();
}