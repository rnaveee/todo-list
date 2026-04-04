export function createTaskButton(){
    const container = document.createElement("div")

    const createTaskButton = document.createElement("button")
    container.classList.add("create-task-container")
    container.appendChild(createTaskButton)

    createTaskButton.textContent = '+ Create Task'

    
    return container

}