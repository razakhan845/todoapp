var todoInp = document.getElementById('todoInp');
var showList = document.getElementById('showList');


function addtodo() {
    var todotext = todoInp.value;


    var todoTextNode = document.createTextNode(todotext);

    var todoLi = document.createElement('li');
    todoLi.setAttribute('class', 'todolist');
    todoLi.appendChild(todoTextNode);
    showList.appendChild(todoLi);

    var deltBtn = document.createElement('SPAN')
    deltBtn.setAttribute('onclick', 'deletedTodo(this)')
    var deleteTextNode = document.createTextNode('DELETED')
    deltBtn.appendChild(deleteTextNode)
    todoLi.appendChild(deltBtn)
}

function deletedTodo(element) {
    element.parentNode.remove()
}
function deleteAll() {
    showList.innerHTML = ""
}

