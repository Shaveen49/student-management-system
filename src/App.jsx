import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./assets/components/login/Login";
import Students from "./assets/components/students/Students";

import Tables from "./assets/components/table/Tables";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Students />} />
      </Routes>
      {/* <Login />*/}
      {/* <Students /> */}
    </div>
  );
}

export default App;
