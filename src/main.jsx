import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import App from './Demo.jsx'
// import App from './Props/App.jsx';
// import App from './Tailwind/Tailwind.jsx';
// import App from './Routing/Routing.jsx';
import App from './Hook/Hook.jsx';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
