import type { Task } from '../types/task'
import { renderAllTasks } from './renderAllTasks';

export function pushTask(newTask: Task): void {
    const storedTasks = localStorage.getItem('tasks');

    const tasks = storedTasks ? JSON.parse(storedTasks) : [];

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    renderAllTasks();
}

export function getTasks(): Task[] {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}

export function removeTask(name: string): void {
    const storedTasks = localStorage.getItem('tasks');

    const tasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];

    const newTasks = tasks.filter(task => task.name !== name);

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    renderAllTasks();
}

export function saveTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderAllTasks();
}