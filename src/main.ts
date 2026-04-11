import './styles.css';
import { createTitle } from './ui/title';
import { createTaskButton } from './ui/createTaskButton';
import { createTaskDisplay } from './ui/task-display';
import { createFooter } from './ui/footer';
import { renderAllTasks } from './logic/renderAllTasks';

const uiContainer = document.createElement("div");
uiContainer.classList.add("ui-container");
uiContainer.id = "ui-container";
const app = document.querySelector<HTMLDivElement>('#app')!;

uiContainer.append(
    createTitle(),
    createTaskButton(),
    createTaskDisplay(),
    createFooter()
);
app.appendChild(uiContainer);
renderAllTasks();
