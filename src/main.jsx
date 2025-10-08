import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
// import App from './Demo.jsx'
// import App from './Props/App.jsx';
// import App from './Tailwind/Tailwind.jsx';
// import App from './Routing/Routing.jsx';
// import App from './Hook/Hook.jsx';
// import App from './Form/Form.jsx';
// import App from './Form/Map.jsx';
// import App from './Hook/State.jsx';
// import App from './Form/Practice.jsx';
// import App from './Hook/Toggle.jsx';
// import App from './Hook/Condition.jsx';
// import App from './Props/App1.jsx';
// import App from './Render/Rendering.jsx';
// import App from './Render/Darkmode.jsx';
// import App from './Context/Context.jsx';
import App from './UseEffect/UseEffect.jsx';


import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  
);
