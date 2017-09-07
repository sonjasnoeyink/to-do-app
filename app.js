function onReady() {
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');
  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';
    renderTheUI(toDos);
  }
  function renderTheUI(toDos) {
    var todoList = document.getElementById('toDoList');
    toDoList.innerHTML = '';
    toDos.forEach(function(toDo) {
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.innerHTML = toDo.title;

      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }
  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI(todos);
}

window.onload = function() {
  onReady();
};
