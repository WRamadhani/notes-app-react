import { createRoot } from 'react-dom/client'
import NotesApp from './components/NotesApp'
import './style/reset-joshcomeau.css'
import './style/style.css'

createRoot(document.getElementById('root')).render(<NotesApp />)