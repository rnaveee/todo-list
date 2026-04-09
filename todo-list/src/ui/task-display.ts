export function createTaskDisplay(){
    const container = document.createElement("div")
    container.classList.add("task-display-container")
    container.id = 'task-display-container';

    const taskDisplayContainer = document.createElement("div")
    container.appendChild(taskDisplayContainer)
    
    const titleText = document.createElement("div")
    taskDisplayContainer.appendChild(titleText)
    titleText.textContent = "Your tasks"
    

    return container
}