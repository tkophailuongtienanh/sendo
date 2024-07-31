import logo from "./logo.svg";
import "./App.css";
import "./style/style.css";
import Main from "./view/Main";
import Foot from "./view/Foot";
import Header from "./view/Header";
import { Route, Router, Routes } from "react-router-dom";
import ProductList from "./view/product/ProductList";
function App() {
  return (
    <div className="flex flex-col h-full">
      <Header className="grow-0"></Header>
      <div className="grow bg-gray-100">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/category/:categoryId" element={<ProductList/>}></Route>
          <Route path="/search/:search" element={<ProductList/>}></Route>
          <Route path="/product/:id" element></Route> 
        </Routes>
      </div>
      <Foot className="grow-0"></Foot>
    </div>
  );
}

export default App;
