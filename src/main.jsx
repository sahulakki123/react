import { createRoot } from 'react-dom/client'
import App from './Bar.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(


    <BrowserRouter>
    <App />
    </BrowserRouter>

)
