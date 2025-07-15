const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskName');
const taskTypeSelect = document.getElementById('taskType');
const taskList = document.getElementById('taskList');

let tasks = [];

function getColorClass(type) {
    switch (type) {
        case 'In Progress': return 'orange';
        case 'Done': return 'green';
        case 'Task': return 'red';
        default: return '';
    }
}

function displayTasks() {
    result.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task ${getColorClass(task.taskType)}`;

        taskDiv.innerHTML = `
          <span onclick="editTask(${index})">
            <strong>${task.taskName}</strong> - ${task.taskType} <br/>
            <small>${task.dateAdded}</small>
          </span>
          <span>
            <button onclick="deleteTask(${index})">Delete</button>
          </span>
        `;

        result.appendChild(taskDiv);
    });
}

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskName = taskNameInput.value.trim();
    const taskType = taskTypeSelect.value;

    if (taskName === '' || taskType === '') {
        alert('Please enter both task name and type.');
        return;
    }

    const task = {
        taskName,
        taskType,
        dateAdded: new Date().toLocaleString()
    };

    tasks.push(task);
    displayTasks();
    console.log(tasks);
    taskForm.reset();
});

function editTask(index) {
    const newName = prompt('Edit Task Name:', tasks[index].taskName);
    const newType = prompt('Edit Task Type (Task, In Progress, Done):', tasks[index].taskType);

    if (newName && newType) {
        tasks[index].taskName = newName;
        tasks[index].taskType = newType;
        displayTasks();
    }
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
    }
}

window.editTask = editTask;
window.deleteTask = deleteTask;
