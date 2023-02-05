import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Card from "./Card";
import Client from './Client';
import Effect from "./Effect";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="client"element={<Client />} />
        <Route path="/effect" element={<Effect show={show} setShow={setShow}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
