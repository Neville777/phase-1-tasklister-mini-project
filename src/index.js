
document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("create-task-form");

  taskForm.addEventListener("submit", function (e) {
    // Prevent page from refreshing

    e.preventDefault();

     // Remove whitespace from the input field

    const taskDescription = document.getElementById("new-task-description").value;
      // Check if the description is not empty

    if (taskDescription !== "") { 
      addTaskToDOM(taskDescription);

      // Clear the input field

      document.getElementById("new-task-description").value = "";
    } else {
      // Show an alert if the description is empty
      alert("Weka Jina"); 
    }
  });

  function addTaskToDOM(description) {
    const taskItem = document.createElement("li");
    taskItem.textContent = description;

    // Create a remove button

    const removeButton = document.createElement("button"); 
    removeButton.textContent = "NGOA";
    removeButton.addEventListener("click", (e) => {
      // Remove the task item when the button is clicked
      e.target.parentNode.remove(); 
    });

    // Add the remove button to the task item

    taskItem.appendChild(removeButton); 

    const taskList = document.getElementById("tasks");
    taskList.appendChild(taskItem);
  }
});
