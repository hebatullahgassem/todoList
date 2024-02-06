// 2. Add an input to add a new todo
// 3. Delete a todo by clicking on x button next to it
// 4. Mark a todo as completed and make it appear in a different color with a line through it
// 5. Edit a todo
// 6. Add a search bar to search for a specific todo
// 7. Whenever i refresh the page, the todos should still be there always

const input = document.querySelector(".todoInput");
const search = document.querySelector(".SearchInput");
const addBtn = document.querySelector(".addBtn");
const todoContainer = document.getElementById("todoContainer");

addBtn.addEventListener("click", function () {
  //take input value
  const task = document.createElement("p");
  task.innerHTML = "- " + input.value;
  task.className = "task";

  //add value to container
  const taskContainer = document.createElement("div");
  todoContainer.appendChild(taskContainer);
  taskContainer.appendChild(task);
});
