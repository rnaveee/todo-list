export function createUI() {
    const container = document.createElement("div")
    container.classList.add("title-container");

    const titleContainer = document.createElement("div")
    container.appendChild(titleContainer)

    titleContainer.textContent = "To-Do List"
    

    return container;
}