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

    const taskComplete = document.createElement('input');
    taskComplete.type = 'checkbox';
    taskComplete.classList.add('task-complete-checkbox');
    nameContainer.appendChild(taskComplete);

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

    const taskCompletionText = document.createElement('div');
    taskCompletionText.classList.add('task-completion-label');
    taskCompletionText.textContent = 'Completed!';
    taskCompletionText.style.visibility = 'hidden';
    taskCompletionText.style.color = 'green';
    nameContainer.appendChild(taskCompletionText);

    const colors: Record<string, string> = {
        Critical: 'red',
        High: 'orange',
        Medium: 'yellow',
        Minimal: 'grey'
    };

    priorityDiv.style.color = colors[priorityDiv.textContent];

    const notesTitle = document.createElement('div');
    notesTitle.classList.add('notes-title');
    notesTitle.textContent = 'Notes:';
    notesContainer.appendChild(notesTitle);

    const notesDiv = document.createElement('div');
    notesDiv.textContent = newTask.notes;
    notesContainer.appendChild(notesDiv);

    newTask.checkList.forEach((item: checkListItem) => {
        const checklistItemRow = document.createElement('label');
        checklistItemRow.classList.add('checklist-item');
        const checkbox = document.createElement('input');
        const checklistName = document.createElement('span');
        const checklistCompletion = document.createElement('div');
        checklistCompletion.textContent = 'Completed!';
        checklistCompletion.style.visibility = 'hidden';
        checklistCompletion.style.color = 'green';


        taskComplete.addEventListener('change', () => {
            if(taskComplete.checked){
                checklistCompletion.style.visibility = 'visible';
                taskCompletionText.style.visibility = 'visible';
                checkbox.checked = true;
                item.completion = true;
            } else {
                checklistCompletion.style.visibility = 'hidden';
                taskCompletionText.style.visibility = 'hidden';
                checkbox.checked = false;
                item.completion = false;
            }
        });

        checkbox.addEventListener('change', () => {
            if(checkbox.checked) {
                checklistCompletion.style.visibility = 'visible';
                item.completion = true;
            } else {
                checklistCompletion.style.visibility = 'hidden';
                item.completion = false;
            }
            if(newTask.checkList.every(check => check.completion === true)){
                taskComplete.checked = true;
                taskCompletionText.style.visibility = 'visible';
            } else {
                taskComplete.checked = false;
                taskCompletionText.style.visibility = 'hidden';
            }
        });

        checkbox.type = 'checkbox';
        checkbox.checked = item.completion;
        checklistName.textContent = item.action;

        checklistItemRow.appendChild(checkbox);
        checklistItemRow.appendChild(checklistName);
        checklistItemRow.appendChild(checklistCompletion);
        checklistContainer.appendChild(checklistItemRow);
    });

    taskComplete.addEventListener('change', () => {
        if(taskComplete.checked){
            taskCompletionText.style.visibility = 'visible';
        } else {
            taskCompletionText.style.visibility = 'hidden';
        }
    });

    leftColumn.appendChild(checklistContainer);
    newTaskContainer.appendChild(dateContainer);
    newTaskContainer.appendChild(notesContainer);

    return newTask;
}
