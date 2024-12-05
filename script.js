const todos = document.getElementById("todos");

// const todoInput = document.getElementById("todo");

const btn = document.getElementById("btn");

let i = 1;

btn.addEventListener("click", () => {
    //error check
  const div = document.createElement("div");
  div.setAttribute("id", "todo" + i);
  i++;
  div.innerHTML = `<p id=${"item" + i} onclick='finish(${i})'>${
    todoInput.value
  }</p> 
    <button onclick=deleteItem(${i})>Delete</button>`;
//   todos.appendChild(div);
  todoInput.value = '';
});

function deleteItem(idx) {
  let d = document.getElementById("todo" + idx);
  todos.removeChild(d);
}

function finish(idx) {
  let d = document.getElementById("item" + idx);
  d.style.textDecoration = "line-through";
  d.style.color = 'gray'
}
