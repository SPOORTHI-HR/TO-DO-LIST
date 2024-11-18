const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
addTaskBtn.addEventListener('click', () => {
const taskText = taskInput.value;
if (taskText !== '') {
const newTask = document.createElement('li');
newTask.textContent = taskText;
taskList.appendChild(newTask);
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', () => {
taskList.removeChild(newTask);
});
newTask.appendChild(deleteBtn);
const completeBtn = document.createElement('button');
completeBtn.textContent = 'Complete';
completeBtn.addEventListener('click', () => {
newTask.classList.toggle('completed');
});
newTask.appendChild(completeBtn);
taskInput.value = '';
}
});
