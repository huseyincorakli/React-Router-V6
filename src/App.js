import About from "./components/About";
import Home from "./components/Home";
import User from "./components/User";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Personel from "./components/Personel";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/*" element={<Layout />}>
          <Route path="" element={<Home />}>
            <Route path=":query" element={<Main />} />
          </Route>
          <Route path="about" element={<About />}></Route>
          <Route path="user" element={<User />}>
            <Route path=":id" element={<Personel />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
