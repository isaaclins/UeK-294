const taskList = document.getElementById("taskList");
const taskTitleInput = document.getElementById("taskTitle");
const addTaskButton = document.getElementById("addTask");
const taskIdToDeleteInput = document.getElementById("taskIdToDelete");
const deleteTaskButton = document.getElementById("deleteTask");
const taskIdToFindInput = document.getElementById("taskIdToFind");
const findTaskButton = document.getElementById("findTask");
const listTasksButton = document.getElementById("listTasks");
const addchecked = document.getElementById('addChecked');
const editedDone = document.getElementById("editTaskDone").checked;
const editTaskButton = document.getElementById("editTask");
const taskIdToEditInput = document.getElementById("taskIdToEdit");
const editTaskTitleInput = document.getElementById("editTaskTitle");
const editTaskDoneInput = document.getElementById("editTaskDone");
const tasktitlesmthsmth =  taskTitleInput.value;

async function addTask() {
  const isChecked = addChecked.checked;
  const tasktitlesmthsmth = taskTitleInput.value;

  try {
    const response = await fetch('http://localhost/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: isChecked,
        title: tasktitlesmthsmth,
      }),
    });
    if (response.status === 200) {
      listAllTasks();
    } else {
      console.error('Failed to add task:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function deleteTask() {
  const taskIdToDelete = taskIdToDeleteInput.value;
  try {
    const response = await fetch(`http://localhost/task/${taskIdToDelete}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      listAllTasks();
    } else {
      console.error('Failed to delete task:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function findTask() {
  const taskIdToFindInput = document.getElementById("taskIdToFind");
  const taskIdToFind = taskIdToFindInput.value;
  
  try {
    const response = await fetch(`http://localhost/task/${taskIdToFind}`, {
      method: 'GET',
    });
    
    if (response.status === 200) {
      const taskData = await response.json(); // Parse JSON response
      displayTask(taskData); // Call a function to display the task data
    } else {
      console.error('Failed to get task:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    taskIdToFindInput.value = "";
  }
}

// Function to display task data on the web page
function displayTask(taskData) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear existing tasks
  
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `ID: ${taskData.id}<br>Title: ${taskData.title}<br>Completed: ${taskData.completed}`;
  taskList.appendChild(taskItem);
}

async function listAllTasks() {
  taskList.innerHTML = ''; // Clear the current list
  try {
    const response = await fetch('http://localhost/tasks');
    if (response.status === 200) {
      const data = await response.json();
      data.forEach(task => {
        displayTask(task)
      });
    } else {
      console.error('Failed to fetch tasks:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
}
async function editTask() {
  const taskIdToEdit = taskIdToEditInput.value;
  const editedTitle = editTaskTitleInput.value;
  const editedDone = editTaskDoneInput.checked;

  try {
    const response = await fetch(`http://localhost/tasks/${taskIdToEdit}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: editedTitle,
        completed: editedDone,
      }),
    });

    if (response.status === 200) {
      listAllTasks();
    } else {
      console.error('Failed to edit task:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

editTaskButton.addEventListener("click", editTask);

addTaskButton.addEventListener("click", addTask);
deleteTaskButton.addEventListener("click", deleteTask);
findTaskButton.addEventListener("click", findTask);
listTasksButton.addEventListener("click", listAllTasks);

document.addEventListener('DOMContentLoaded', ()=>{
  listAllTasks();
});