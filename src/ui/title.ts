export function createTitle() {
    const container = document.createElement("div")
    container.classList.add("title-container");

    const titleContainer = document.createElement("div")
    container.appendChild(titleContainer)

    const titleText = document.createElement("div")
    titleText.textContent = "Task Manager";
    titleContainer.appendChild(titleText)
    
    return container;
}