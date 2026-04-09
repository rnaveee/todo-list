import type { Task, checkListItem } from '../types/task.ts';

export function renderTask(newTask: Task){
    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('new-task');
    const taskDisplayContainer = document.getElementById("task-display-container") as HTMLDivElement;

    taskDisplayContainer.appendChild(newTaskContainer);    

    const leftColumn = document.createElement('div');
    leftColumn.classList.add('task-main-content');
    newTaskContainer.appendChild(leftColumn);

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('name-display-container');
    leftColumn.appendChild(nameContainer);
    const dateContainer = document.createElement('div');
    dateContainer.classList.add('date-display-container');
    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('priority-display-container');
    const notesContainer = document.createElement('div');
    notesContainer.classList.add('notes-display-container');
    const checklistContainer = document.createElement('div');
    checklistContainer.classList.add('checklist-display-container');

    const nameDiv = document.createElement('div');
    nameDiv.textContent = newTask.name + ' | ';
    nameContainer.appendChild(nameDiv);

    const dateDiv = document.createElement('div');
    dateDiv.textContent = newTask.dueDate;
    dateContainer.appendChild(dateDiv);

    const priorityDiv = document.createElement('div');
    priorityDiv.textContent = newTask.priorityLevel;
    priorityContainer.appendChild(priorityDiv);
    nameContainer.appendChild(priorityContainer);

    const colors: Record<string, string> = {
        Critical: 'red',
        High: 'orange',
        Medium: 'yellow',
        Minimal: 'grey'
    };

    priorityDiv.style.color = colors[priorityDiv.textContent];

    const notesDiv = document.createElement('div');
    notesDiv.textContent = newTask.notes;
    notesContainer.appendChild(notesDiv);

    newTask.checkList.forEach((item: checkListItem) => {
        const checklistDiv = document.createElement('div');
        checklistDiv.textContent = item.action;
        checklistContainer.appendChild(checklistDiv);
    });

    leftColumn.appendChild(checklistContainer);
    newTaskContainer.appendChild(dateContainer);
    newTaskContainer.appendChild(notesContainer);
}
