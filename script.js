// Simple in-memory user store
const users = {
    "test@test.com": "password" // Example user credentials
};

// Add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    tasks.push(taskText);
    taskInput.value = ''; // Clear the input after adding
    renderTaskList();
}

// Render the task list
function renderTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the current list

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

// Delete a specific task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task from the array
    renderTaskList(); // Re-render the list
}

// Clear all tasks
function clearList() {
    tasks = []; // Reset the task array
    renderTaskList(); // Clear the task list in the UI
}

// Login function
function login() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    console.log(`Login Attempt - Email: ${email}, Password: ${password}`); // Debugging line

    if (users[email] === password) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('todoContainer').style.display = 'block';
        renderTaskList(); // Ensure tasks are rendered when logged in
    } else {
        document.getElementById('loginMessage').innerText = "Invalid login credentials!";
    }
}

// Sign-up function
function signUp() {
    const name = document.getElementById('signUpName').value.trim();
    const email = document.getElementById('signUpEmail').value.trim();
    const password = document.getElementById('signUpPassword').value.trim();

    console.log(`Sign Up Attempt - Name: ${name}, Email: ${email}, Password: ${password}`); // Debugging line

    if (name && email && password) {
        // Add the new user to the user store
        users[email] = password;
        document.getElementById('signUpForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block'; // Redirect to login page
    } else {
        document.getElementById('signUpMessage').innerText = "All fields are required!";
    }
}

// Show sign-up form
function showSignUp() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
}

// Show login form
function showLogin() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}
