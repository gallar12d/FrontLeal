import React, { useState } from "react";
import { getUser as getUserService } from "../services/userServices.js";
import Detail from "./Detail.jsx";
import Info from "./Info.jsx";

const Search = ({ id, changeIdentification }) => {
  const [user, setUser] = useState(null);
  const [sales, setSales] = useState([]);
  const [claims, setClaims] = useState([]);
  const [exist, setExist] = useState(true);
  const [identification, setidentification] = useState(id);

  const getUser = async (identification) => {
    changeIdentification(identification);

    const resp = await getUserService(identification);
    if (resp.user) {
      setUser(resp.user.user);
      setSales(resp.user.sales);
      setClaims(resp.user.claims);
    } else {
      setUser(null);
      setExist(false);
      setTimeout(() => {
        setExist(true);
      }, 3000);
    }
  };

  const handleChange = (e) => setidentification(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(identification);
  };

  const closeInfo = () => setExist(true);

  return (
    <div className="p-4 w-3/4">
      <h2 className="text-4xl mb-4  font-bold tracking-tight">
        Buscar usuario
        <span className="text-slate-50 xl:text-5xl"></span>
      </h2>
      <div className="flex gap-4  items-end">
        <div className=" p-6 w-1/2 rounded-lg shadow-lg bg-white ">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Ingrese identificación
              </label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control  block   w-full px-3 py-1.5 text-base  font-normal  text-gray-700bg-white bg-clip-padding   border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Identificación"
                value={identification}
              />
            </div>
            {identification ? (
              <button
                type="submit"
                className=" px-6 py-2.5 bg-neutral-900 text-white  font-medium  text-xs  leading-tight  ppercase  rounded shadow-md hover:bg-neutral-500 hover:shadow-lg"
              >
                Buscar
              </button>
            ) : null}
          </form>
        </div>
        {user ? (
          <div className="flex w-1/2 bg-white  rounded p-4 mt-4">
            <h2 className="text-xl  text-gray-600 font-bold tracking-tight">
              Puntos acumulados
              <br />
              <span className=" text-4xl ">
                {user.accumulated_points}
              </span>
            </h2>
          </div>
        ) : null}
      </div>

      {!exist ? <Info text="Usuario no existe !" /> : ""}

      {user ? <Detail claims={claims} sales={sales} user={user} /> : ""}
    </div>
  );
};

export default Search;
