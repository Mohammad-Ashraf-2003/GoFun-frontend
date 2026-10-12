import { Routes, Route } from "react-router-dom";
import Login from "../src/Authentication/Login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/User/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
