var deleteBtns = document.getElementsByClassName('deleteBtn');

for (var i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click', function() {
    this.parentNode.remove();
  });
}