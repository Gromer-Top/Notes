//Массив кнопок удаления
let deleteBtns = document.getElementsByClassName('deleteBtn');

let inputText = document.getElementById("input")

for (var i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click', function() {
    this.parentNode.remove();
  });
}

function addNote() {
  let notes = document.querySelector(".notes");
  let note = document.createElement('DIV');
  let input = document.getElementById('input')
  if (input.value != '')
  {
    note.classList.add('note');
    note.innerHTML = input.value;
    notes.appendChild(note);
    input.value = '';
  }
  input.value = '';
}
