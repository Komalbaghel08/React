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
import App from "./Context.jsx"

import { BrowserRouter } from "react-router-dom";
import MyContext from "./MyContext.jsx";
let mydata = {
  name:"komal",
  age:21,
  city:"bhopal"
}

let theme = {
  dark:{
"background-color":"black",
"color":"white",
"width":"200px",
"height":"200px"
  },
  light:{
"background-color":"white",
"color":"black",
"width":"200px",
"height":"200px"
  }
}

createRoot(document.getElementById("root")).render(
  <MyContext.Provider value={theme}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </MyContext.Provider>
);
