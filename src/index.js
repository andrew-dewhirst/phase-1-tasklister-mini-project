document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault();
    buildToDo(document.querySelector('#new-task-description').value);
    buildDueDate(document.querySelector('#add_due_date').value);
  })
});

function buildToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click',handleDelete);
  p.textContent = `${todo} `;
  btn.textContent = ' x';
  document.querySelector('#tasks').appendChild(p);
  p.appendChild(btn);
}

function buildDueDate(dueDate) {
  let p = document.createElement('p');
  p.textContent = dueDate;
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove()
}
