const taskList = document.getElementById("taskList");
    const taskTitleInput = document.getElementById("taskTitle");
    const addTaskButton = document.getElementById("addTask");
    const taskIdToDeleteInput = document.getElementById("taskIdToDelete");
    const deleteTaskButton = document.getElementById("deleteTask");
    const taskIdToFindInput = document.getElementById("taskIdToFind");
    const findTaskButton = document.getElementById("findTask");
    const listTasksButton = document.getElementById("listTasks");

    // You can define your JavaScript functions to interact with the API here

    function addTaskToList(task) {
      const taskList = document.getElementById('taskList');
      const listItem = document.createElement('li');
      listItem.textContent = `ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed}`;
      taskList.appendChild(listItem);
    }
  

    // Example function to delete a task by ID
    function deleteTask() {
      const taskIdToDelete = taskIdToDeleteInput.value;
      
      // Make a DELETE request
      fetch(`http://localhost/task/${taskIdToDelete}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.status === 200) {
        } else {
          // Handle deletion failure (e.g., task not found or other errors)
          console.error('Failed to delete task:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
    

    // Example function to find a task by ID
    function findTask() {
      const taskIdToFind = taskIdToFindInput.value;
      fetch(`http://localhost/task/${taskIdToFind}`, {
        method: 'GET',
      })
      .then(response => {
        if (response.status === 200) {
          // Handle the successful response here
          // For example, you can access the response data using response.json()
          // and perform further actions.
        } else {
          console.error('Failed to get task:', response.statusText);
          // Handle the error here if needed.
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any network errors or exceptions here.
      })
      .finally(() => {
        // Regardless of success or failure, clear the input field
        taskIdToFindInput.value = "";
      });
    }
    

    // Example function to list all tasks
    function listAllTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = ''; // Clear the current list
  
      // Fetch tasks from the server
      fetch('http://localhost/tasks')
        .then(response => response.json())
        .then(data => {
          data.forEach(task => {
            addTaskToList(task);
          });
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });
    }

    // Add event listeners for buttons
    addTaskButton.addEventListener("click", addTask);
    deleteTaskButton.addEventListener("click", deleteTask);
    findTaskButton.addEventListener("click", findTask);
    listTasksButton.addEventListener("click", listAllTasks);