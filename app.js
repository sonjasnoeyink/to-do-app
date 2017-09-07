function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input for the checkbox
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach it to the ul
    toDoList.appendChild(newLi);

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    //empty the input
    newToDoText.value = '';
  });
};

function deleteCheckBox() {
    let ul = document.getElementById('toDoList');
    let li = ul.children;
    for (let i=0; i < li.length; i++) {
        while(li[i] && li[i].children[0].checked) {
            ul.removeChild(li[i]);
        }
    }
}


window.onload = function() {
  onReady();
};
