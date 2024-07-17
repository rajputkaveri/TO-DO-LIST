const todoList = JSON.parse(localStorage.getItem('todo')) || [];

displayList();

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-date-input');
    const dueDate = dateInputElement.value;
    const name = inputElement.value;
    if (name === '' || dueDate === ''){
        document.querySelector('.js-result').innerHTML = `Please fill up everything`;    
    } else {
        document.querySelector('.js-result').innerHTML = ``;    
        todoList.push({
            name,
            dueDate
        });
        localStorage.setItem('todo', JSON.stringify(todoList));
        inputElement.value = '';
        dateInputElement.value = '';
    }
    displayList();
}

function deleteTodo(i) {
    todoList.splice(i, 1);
    displayList();
    localStorage.setItem('todo', JSON.stringify(todoList));
}
function displayList() {
    let todoListHTML = '';
    for (let index = 0; index < todoList.length; index++) {
        const todoObject = todoList[index];
        const {name, dueDate} = todoObject;
        const html = 
        `<p class = 'js-todo'>${name} - ${dueDate}</p>
        <button onclick = "deleteTodo(${index})" class = 'delete-button'>Delete </button>`;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}