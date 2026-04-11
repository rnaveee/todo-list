import type { Task } from '../types/task.ts' ;
import { renderTask } from '../ui/renderTask';

export function renderAllTasks() {
    const taskDisplayContainer = document.getElementById("task-display-container") as HTMLDivElement;
    const storedTasks = localStorage.getItem('tasks');
    const tasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];

    taskDisplayContainer.replaceChildren();

    tasks.forEach((task: Task) => {
        renderTask(task);
    });
}
