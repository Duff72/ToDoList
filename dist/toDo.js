"use strict";
const input = document.getElementById('input');
const addToDo = document.getElementById('addToDo');
const list = document.getElementById('list');
function addToDoList() {
    if (input && input.value) {
        const newItem = document.createElement('li');
        newItem.innerHTML = `<button class="listItem" style="background:none; border:none">${input.value}</button>`;
        if (list) {
            list.appendChild(newItem);
            const newButton = newItem.querySelector('button');
            if (newButton) {
                newButton.addEventListener('click', removeListItem);
            }
        }
        input.value = '';
    }
}
if (addToDo) {
    addToDo.addEventListener('click', addToDoList);
}
function removeListItem() {
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    }
}
