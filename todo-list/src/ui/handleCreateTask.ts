export function handleCreateTask() {
    const taskFormContainer = document.createElement("div");
    taskFormContainer.classList.add("taskform-container");

    const taskForm = document.createElement("div");
    taskFormContainer.appendChild(taskForm);

    return taskFormContainer;
}