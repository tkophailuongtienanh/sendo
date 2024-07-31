import logo from "./logo.svg";
import "./App.css";
import "./style/style.css";
import Main from "./view/Main";
import Foot from "./view/Foot";
import Header from "./view/Header";
import { Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Foot></Foot>
    </>
  );
}

export default App;
