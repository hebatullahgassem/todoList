//after editing i cannot check the task 
// 6. Add a search bar to search for a specific todo
// 7. Whenever i refresh the page, the todos should still be there always

const input = document.querySelector(".todoInput");
const search = document.querySelector(".SearchInput");
const addBtn = document.querySelector(".addBtn");
const cont = [];
const todoContainer = document.getElementById("todoContainer");

addBtn.addEventListener("click", addTask);

function addTask() {
  //take input value
  const task = document.createElement("p");
  task.innerText = input.value;
  task.className = "task";

  //add value to container
  const taskContainer = document.createElement("div");
  taskContainer.className = "everyTaskContainer";
  todoContainer.appendChild(taskContainer);
  taskContainer.appendChild(task);

  //delete button for each task
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerHTML = "Delete";
  taskContainer.appendChild(deleteBtn);

  //edit btn for each task
  const edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.className = "edit";
  taskContainer.appendChild(edit);

  //check box for each task
  const mark = document.createElement("input");
  mark.type = "checkbox";
  mark.className = "mark";
  taskContainer.appendChild(mark);

  //save info when refresh
  localStorage.setItem("task", task.innerText);

  //clear input after clicking
  input.value = "";

  //deleteBtn function
  deleteBtn.addEventListener("click", function () {
    this.parentElement.remove();
    localStorage.removeItem("task");
  });

  //check button function
  mark.addEventListener("click", check);

  function check() {
    task.style.color = "lightgray";
    task.style.textDecoration = "line-through";
  }

  //edit function
  edit.addEventListener("click", function () {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = task.innerText;
    newInput.className = 'newInput';

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.className = 'save';

    const newTask = document.createElement('p');
    newTask.className = 'task';

    task.replaceWith(newInput, saveBtn);

    saveBtn.addEventListener('click', function(){
      saveBtn.remove();
      newTask.textContent = newInput.value;
      newInput.replaceWith(newTask);
    });
  });
}


//search
function searchInput(){
  const inputSearch = search.value.toLowerCase();

  const result = todoContainer.filter((task) => {
    return task.toLowerCase().includes(inputSearch);
  });
};

search.addEventListener('input', searchInput);