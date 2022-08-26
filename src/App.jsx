import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Search from "./components/Search";
import FormSale from "./components/FormSale";
import FormClaim from "./components/FormClaim";

function App() {
  const [identification, setIdentification] = useState(undefined);
  const changeIdentification = (id) => setIdentification(id);
  return (
    <div className="App h-screen  bg-yellow-400 ">
      <nav className="flex justify-between items-center w-full bg-white">
        <ul className="flex  items-center gap-10 p-2 ">
          <li>
            <img
              className="w-16"
              src="https://dn8uedl399hli.cloudfront.net/official/2019/01/12202316/logo-puntos-leal.png"
              alt=""
            />
          </li>
          <li>
            <Link to="/">Usuario</Link>
          </li>
          <li>
            <Link to="/sale">Ventas</Link>
          </li>
          <li>
            <Link to="/claim">Redenciones</Link>
          </li>
        </ul>
        <div className="pr-20">
          <h2>
            <strong>Usuario Leal</strong>
          </h2>
          <h3>{identification}</h3>
        </div>
      </nav>
      <div className="flex justify-center items-end">
        <Routes>
          <Route
            path="/"
            element={
              <Search
                changeIdentification={changeIdentification}
                id={identification}
              />
            }
          ></Route>
          <Route
            path="/sale"
            element={
              <FormSale
                changeIdentification={changeIdentification}
                id={identification}
              />
            }
          ></Route>
          <Route
            path="/claim"
            element={
              <FormClaim
                changeIdentification={changeIdentification}
                id={identification}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
