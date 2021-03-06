// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.todo-filter')
// Functions
function addTodo(text) 
{
    // create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.innerHTML = `
    <li class="todo-item">${text}</li>
    <button class="complete-btn"><i class="fas fa-check"></i></button>
    <button class="trash-btn"><i class="fas fa-trash"></i></button>
    `;
    todoList.appendChild(todoDiv);
}

function deleteCheck(button) 
{
    const todoListItem = button.parentElement;

    if (button.classList.contains('trash-btn')) 
    {
        todoListItem.classList.add('fall');
        todoListItem.addEventListener('transitionend', ()=>
        {
            todoListItem.remove();
        });
    }
    if (button.classList.contains('complete-btn')) 
    {
        todoListItem.classList.toggle('completed');
    }
}


function filterTodo(filter) 
{
    const todoListItems = [...document.querySelectorAll('.todo')];
    todoListItems.forEach(item => 
        {
            switch (filter) {
                case "completed":
                    item.style.display = "flex";
                    if (!item.classList.contains('completed')) 
                    {
                        item.style.display = "none";
                    }
                break;

                case "uncompleted":
                    item.style.display = "flex";
                    if (item.classList.contains('completed')) 
                    {
                        item.style.display = "none";
                    }
                break;

                //default case    
                case "all":
                    item.style.display = "flex";
                break;
            }
        });
}
// Event Listeners
todoButton.addEventListener('click', event => 
{
    // prevents form from submitting
    event.preventDefault();
    const todoText = todoInput.value;
    addTodo(todoText);
    todoInput.value = '';
});

todoList.addEventListener('click', event =>
{
    const item = event.target;
    deleteCheck(item);
});

filterOption.addEventListener('click', event => 
{
    filterTodo(event.target.value);
});