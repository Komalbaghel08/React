import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>
        Show
      </button>

      <button onClick={() => setShow(false)}>
        Hide
      </button>

      {show && <h2 >Hello</h2>}
    </div>
  );
}
export default App;