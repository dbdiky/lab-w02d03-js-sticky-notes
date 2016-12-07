console.log('Diky');

var newDiv;
var button = document.querySelector('button');

var addNote = function(event){
    var note = document.createElement('div');
    note.classList.add('note');
    var container = document.querySelector('#container');
    container.appendChild(note);
    note.setAttribute("contenteditable", "true")
  };

  button.addEventListener('click', addNote);
