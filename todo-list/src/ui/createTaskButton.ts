import { handleCreateTask } from './handleCreateTask';

type Task = {
    name: string;
    dueDate: string;
    checkList: checkListItem[];
};

type checkListItem = {
    action: string;
    completion: boolean;
};
export function createTaskButton(){
    const container = document.createElement("div");

    const createTaskButton = document.createElement("button");
    container.classList.add("create-task-container");
    container.appendChild(createTaskButton);

    createTaskButton.textContent = '+ Create Task';

    // Add click event listener


    return container;
}