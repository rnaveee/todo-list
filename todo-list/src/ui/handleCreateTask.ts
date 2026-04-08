export function handleCreateTaskForm() {
    const uiContainer = document.getElementById("ui-container") as HTMLDivElement;
    const existingOverlay = document.querySelector(".taskform-overlay");

    if (existingOverlay) {
        return;
    }

    const taskFormOverlay = document.createElement("div");
    taskFormOverlay.classList.add("taskform-overlay");

    const taskFormContainer = document.createElement("div");
    taskFormContainer.classList.add("taskform-container");

    const taskForm = document.createElement("form");
    taskFormContainer.appendChild(taskForm);
    taskFormOverlay.appendChild(taskFormContainer);

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("name-container");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = 'Task:';
    const nameInput = document.createElement("input");
    nameInput.type = 'text';
    nameInput.placeholder = 'Name of task';
    nameContainer.appendChild(nameLabel);
    nameContainer.appendChild(nameInput);

    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority-container");

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = 'Priority level:';
    const priorityInput = document.createElement("select");
    priorityInput.appendChild(document.createElement('option'));
    const priorities = ['Critical', 'High', 'Medium', 'Minimal', 'Minimal']
    priorities.forEach(level => {
        const option = document.createElement("option");
        option.value = level;
        option.textContent = level;
        priorityInput.appendChild(option);
    });
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityInput);

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("date-container");

    const dateLabel = document.createElement("label");
    dateLabel.textContent = 'Due Date';
    const dateInput = document.createElement("input");
    dateInput.type = 'date';
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInput);

    const checklistContainer = document.createElement('div');
    checklistContainer.classList.add('checklist-container');
    const checklistLabel = document.createElement('label');
    checklistLabel.textContent = 'Checklist';
    const addToChecklist = document.createElement('button');
    addToChecklist.textContent = '+ add to checklist'
    addToChecklist.type = 'button';

    checklistContainer.appendChild(checklistLabel);
    checklistContainer.appendChild(addToChecklist);

    addToChecklist.addEventListener('click', () => {
        const checklistField = document.createElement('input');
        checklistField.placeholder = 'Task';
        checklistContainer.appendChild(checklistField);
    });

    const notesContainer = document.createElement("div");
    notesContainer.classList.add("notes-container");
    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes:";
    const notesInput = document.createElement("textarea");
    notesInput.placeholder = "Add notes";
    notesContainer.appendChild(notesLabel);
    notesContainer.appendChild(notesInput);

    const submit = document.createElement("button");
    submit.type = 'submit';
    submit.textContent = 'Create Task';
    const submitContainer = document.createElement("div");
    submitContainer.classList.add("submit-container");
    submitContainer.appendChild(submit);


    taskForm.appendChild(nameContainer);
    taskForm.appendChild(dateContainer);
    taskForm.appendChild(priorityContainer);
    taskForm.appendChild(checklistContainer);
    taskForm.appendChild(notesContainer);
    taskForm.appendChild(submitContainer);

    uiContainer.appendChild(taskFormOverlay);

    
}
