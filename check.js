// Selectors 
const text = document.getElementById("thingsToDo");
const buttn = document.querySelector(".addTask");
const todoList = document.querySelector(".todo-list");

// Event listener
buttn.addEventListener("click", clicked);
todoList.addEventListener("click", deleteCheck);
//Functions

function clicked(event) {
  event.preventDefault();
 
  //create div
  const newDiv = document.createElement("div"); 
  newDiv.classList.add("todo");

  //create a new LI
  const newElementLi = document.createElement("li");
  newElementLi.innerHTML = text.value;
  newElementLi.classList.add("new-ElementLi");
  newDiv.appendChild(newElementLi);

  // Check  
  const checkBox = document.createElement("button");
  checkBox.innerHTML = '<i class="fas fa-check-square"></i>';
  checkBox.classList.add("check-box");
  newDiv.appendChild(checkBox);
 
  // Delete
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-button");
  newDiv.appendChild(deleteButton);
  todoList.appendChild(newDiv);
}

  function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === 'delete-button'){
      const todo = item.parentElement;
      todo.remove();
    }
    if(item.classList[0] === 'check-box'){
      const todo = item.parentElement;
      todo.classList.toggle("completed");
      }
    }

  
    
    



