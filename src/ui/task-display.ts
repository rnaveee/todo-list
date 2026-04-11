export function createTaskDisplay(){
    const container = document.createElement("div");
    container.classList.add("task-display-container");

    const titleText = document.createElement("div");
    titleText.textContent = "Your tasks";
    container.appendChild(titleText);

    const taskDisplayContainer = document.createElement("div");
    taskDisplayContainer.id = 'task-display-container';
    container.appendChild(taskDisplayContainer);
    
    return container;
}
