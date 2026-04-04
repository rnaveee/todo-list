import './styles.css'
import { createUI } from './ui/ui'

const app = document.querySelector<HTMLDivElement>('#app')!

app.appendChild(createUI())