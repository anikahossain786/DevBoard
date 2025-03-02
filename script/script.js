let remainingTasks = 6; // Initial number of tasks

// Function to mark task as completed
function completeTask(taskId) {
  const taskElement = document.getElementById(taskId);
  const taskCard = taskElement.closest(".card");
  const taskTitle = taskCard.querySelector("h2").innerText;
  const taskDeadline = taskCard.querySelector(".text-gray-700").innerText; // Selects the deadline text

  // Get current date and time for real-time completion
  const currentDate = new Date();
  const completionTime = currentDate.toLocaleString(); // Formats the date and time as per user's locale

  const historyList = document.getElementById("historyList");
  const historyItem = document.createElement("li");
  historyItem.classList.add("text-gray-600");

  // Add task completion details along with the time
  historyItem.innerHTML = `<strong>${taskTitle}</strong> completed. Deadline: <strong>${taskDeadline}</strong>. Completed on: <strong>${completionTime}</strong>`;
  historyList.appendChild(historyItem);

  // Update task button text and disable it
  taskElement.innerText = "Completed";
  taskElement.disabled = true;

  // Change task card background color to indicate completion
  taskCard.classList.add("bg-green-100");

  // Decrement the remaining task count
  remainingTasks--;
  updateRemainingTasks();
}

// Clear history function
function clearHistory() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";
}

// Update the remaining tasks count
function updateRemainingTasks() {
  const remainingTasksElement = document.getElementById("remainingTasks");
  remainingTasksElement.innerText = `  ${remainingTasks}`;
}
