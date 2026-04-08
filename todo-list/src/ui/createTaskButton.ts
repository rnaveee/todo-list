import { handleCreateTaskForm } from "./handleCreateTask";

export function createTaskButton(){
    const container = document.createElement("div");

    const createTaskButton = document.createElement("button");
    container.classList.add("create-task-container");
    container.appendChild(createTaskButton);

    createTaskButton.textContent = '+ Create Task';

    createTaskButton.addEventListener('click', handleCreateTaskForm);

    return container;
}