import type { Task, checkListItem } from '../types/task.ts';
import { confirmTaskDeletion } from '../logic/confirmTaskDeletion.ts';

export function renderTask(newTask: Task){
    const setCompletionVisibility = (element: HTMLDivElement, isVisible: boolean) => {
        element.classList.toggle('is-visible', isVisible);
    };
    const hasChecklistItems = newTask.checkList.length > 0;
    const isChecklistComplete = () =>
        hasChecklistItems && newTask.checkList.every(check => check.completion === true);

    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('new-task');
    const taskDisplayContainer = document.getElementById("task-display-container") as HTMLDivElement;

    taskDisplayContainer.appendChild(newTaskContainer);

    const leftColumn = document.createElement('div');
    leftColumn.classList.add('task-main-content');
    newTaskContainer.appendChild(leftColumn);
    const sideColumn = document.createElement('div');
    sideColumn.classList.add('task-side-content');
    newTaskContainer.appendChild(sideColumn);
    const metaContainer = document.createElement('div');
    metaContainer.classList.add('task-meta-container');

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

    const removeContainer = document.createElement('div');
    removeContainer.classList.add('remove-container');
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'X';
    removeButton.setAttribute('aria-label', `Remove task ${newTask.name}`);
    removeContainer.appendChild(removeButton);

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
    notesTitle.textContent = 'NOTES:';
    notesContainer.appendChild(notesTitle);

    const notesDiv = document.createElement('div');
    notesDiv.classList.add('notes-body');
    notesDiv.textContent = newTask.notes;
    notesContainer.appendChild(notesDiv);

    newTask.checkList.forEach((item: checkListItem) => {
        const checklistItemRow = document.createElement('label');
        checklistItemRow.classList.add('checklist-item');
        const checkbox = document.createElement('input');
        const checklistName = document.createElement('span');
        const checklistCompletion = document.createElement('div');
        checklistCompletion.classList.add('task-completion-label');
        checklistCompletion.textContent = 'Completed!';


        taskComplete.addEventListener('change', () => {
            if(taskComplete.checked){
                setCompletionVisibility(checklistCompletion, true);
                setCompletionVisibility(taskCompletionText, true);
                checkbox.checked = true;
                item.completion = true;
            } else {
                setCompletionVisibility(checklistCompletion, false);
                setCompletionVisibility(taskCompletionText, false);
                checkbox.checked = false;
                item.completion = false;
            }
        });

        checkbox.addEventListener('change', () => {
            if(checkbox.checked) {
                setCompletionVisibility(checklistCompletion, true);
                item.completion = true;
            } else {
                setCompletionVisibility(checklistCompletion, false);
                item.completion = false;
            }
            if(isChecklistComplete()){
                taskComplete.checked = true;
                setCompletionVisibility(taskCompletionText, true);
            } else {
                taskComplete.checked = false;
                setCompletionVisibility(taskCompletionText, false);
            }
        });

        checkbox.type = 'checkbox';
        checkbox.checked = item.completion;
        checklistName.textContent = item.action;
        setCompletionVisibility(checklistCompletion, item.completion);

        checklistItemRow.appendChild(checkbox);
        checklistItemRow.appendChild(checklistName);
        checklistItemRow.appendChild(checklistCompletion);
        checklistContainer.appendChild(checklistItemRow);
    });

    taskComplete.addEventListener('change', () => {
        if(taskComplete.checked){
            setCompletionVisibility(taskCompletionText, true);
        } else {
            setCompletionVisibility(taskCompletionText, false);
        }
    });

    setCompletionVisibility(taskCompletionText, isChecklistComplete());

    removeButton.addEventListener('click', () => {
        confirmTaskDeletion(newTask);
    });

    leftColumn.appendChild(checklistContainer);
    metaContainer.appendChild(dateContainer);
    metaContainer.appendChild(removeContainer);
    sideColumn.appendChild(metaContainer);
    sideColumn.appendChild(notesContainer);

    return newTask;
}
