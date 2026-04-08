import './styles.css';
import { createTitle } from './ui/title';
import { createTaskButton } from './ui/createTaskButton';
import { createTaskDisplay } from './ui/task-display';

const uiContainer = document.createElement("div");
uiContainer.classList.add("ui-container");
uiContainer.id = "ui-container";
const app = document.querySelector<HTMLDivElement>('#app')!;

uiContainer.append(
    createTitle(),
    createTaskButton(),
    createTaskDisplay()
);
app.appendChild(uiContainer);