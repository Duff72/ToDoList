const input = document.getElementById('input');
const addToDo = document.getElementById('addToDo');
const list = document.getElementById('list');

function addToDoList() {
    const newItem = document.createElement('li');
    newItem.innerHTML = `<button class="listItem" style="background:none; border:none">${input.value}</button>`;
    list.appendChild(newItem);

    const newButton = newItem.querySelector('button');
    newButton.addEventListener('click', removeListItem);
    input.value = '';
}

addToDo.addEventListener('click', addToDoList);

function removeListItem() {
    this.parentNode.remove();
}