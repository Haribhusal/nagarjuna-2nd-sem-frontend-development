

let input = document.getElementById('my-input');
let btn = document.getElementById('my-btn');
let list = document.getElementById('list')

let todos = [
  {
    text: "Go to Market", isCompleted : false
  },
  {
    text: "Buy a Pen", isCompleted : false
  },
  {
    text: "Meet friend", isCompleted : false
  },
  {
    text: "Bring a laptop", isCompleted : false
  }
]

function renderTodos(){
  list.innerHTML = '';
  todos.forEach((item, index) => {
    let li = document.createElement('li')
    li.innerHTML = `
    <span>${item.text}</span>
        <div>
          <button onclick='toggleTodo(${index})'>Done</button>
          <button onclick='deleteTodo(${index})'>Delete</button>
        </div>
  
    `;
    list.appendChild(li)
  })
}
renderTodos();