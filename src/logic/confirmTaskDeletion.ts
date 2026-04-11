import type { Task } from '../types/task';
import { removeTask } from './handleStorage'

export function confirmTaskDeletion(newTask: Task) {
    const uiContainer = document.getElementById("ui-container") as HTMLDivElement;
    const existingOverlay = document.querySelector('.taskform-overlay');
    const modalAnimationClass = 'taskform-overlay-visible';
    const modalTransitionMs = 320;

    if (existingOverlay) {
        return;
    }

    const deleteFormOverlay = document.createElement('div');
    deleteFormOverlay.classList.add('taskform-overlay');

    const deleteFormContainer = document.createElement('div');
    deleteFormContainer.classList.add('taskform-container', 'delete-confirmation-container');

    const deleteForm = document.createElement('form');
    deleteForm.classList.add('delete-confirmation-form');
    deleteFormContainer.appendChild(deleteForm);
    deleteFormOverlay.appendChild(deleteFormContainer);

    const removeDeleteOverlay = () => {
        let isRemoved = false;
        deleteFormOverlay.classList.remove(modalAnimationClass);

        const cleanup = () => {
            if (isRemoved) {
                return;
            }

            isRemoved = true;
            deleteFormOverlay.removeEventListener('transitionend', handleTransitionEnd);
            deleteFormOverlay.remove();
        };

        const handleTransitionEnd = (event: TransitionEvent) => {
            if (event.target === deleteFormOverlay) {
                cleanup();
            }
        };

        deleteFormOverlay.addEventListener('transitionend', handleTransitionEnd);
        window.setTimeout(cleanup, modalTransitionMs + 50);
    };

    const text = document.createElement('div');
    text.classList.add('delete-confirmation-text');
    text.textContent = 'Are you sure you want to delete this task?';

    const actionContainer = document.createElement('div');
    actionContainer.classList.add('delete-confirmation-actions');

    const deleteButton = document.createElement('button');
    deleteButton.type = 'submit';
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-confirm-button');

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('delete-cancel-button');

    const closeContainer = document.createElement('div');
    closeContainer.classList.add('close-form-container');

    deleteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        removeTask(newTask.name);
        removeDeleteOverlay();
    });

    cancelButton.addEventListener('click', () => {
        removeDeleteOverlay();
    });


    actionContainer.appendChild(cancelButton);
    actionContainer.appendChild(deleteButton);

    deleteForm.appendChild(text);
    deleteForm.appendChild(actionContainer);
    deleteForm.appendChild(closeContainer);

    uiContainer.appendChild(deleteFormOverlay);
    requestAnimationFrame(() => {
        deleteFormOverlay.classList.add(modalAnimationClass);
    });

}
