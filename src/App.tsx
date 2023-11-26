import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}
export default App; 
