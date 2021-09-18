document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#submit_button').addEventListener('click',(e) => {
    e.preventDefault();
    buildToDo(document.querySelector('#new-task-description').value = 'No chores',document.querySelector('#add_due_date').value = 'No due date');
    })
  });

function buildToDo(todo,date) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click',handleDelete);
  p.textContent = `${todo} --- ${date}  `;
  btn.textContent = 'X';
  document.querySelector('#tasks').appendChild(p);
  p.appendChild(btn);
}

function handleDelete(e) {
  e.target.parentNode.remove()
};
