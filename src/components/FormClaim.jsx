import React, { useState } from "react";
import { createClaim as createClaimService } from "../services/claimServices.js";
import Info from "./Info.jsx";
import { getUser as getUserService } from "../services/userServices.js";

const FormClaim = ({ id, changeIdentification }) => {
  const [detail, setDetail] = useState("");
  const [points, setPoints] = useState("");
  const [identification, setIdentification] = useState(id || undefined);
  const [showInfo, setShowInfo] = useState(false);
  const [message, setMessage] = useState("");
  const [succes, setSucces] = useState(true);

  const handleChangeDetail = (e) => {
    setDetail(e.target.value);
  };
  const handleChangeValue = (e) => {
    setPoints(e.target.value);
  };
  const handleChangeIndentification = (e) => {
    setIdentification(e.target.value);
  };
  const createClaim = async (claim) => {
    //validar si el user puede redimir con los puntos que tienen el
    const resp = await getUserService(claim.identification);
    if (
      resp.user &&
      resp.user.user &&
      resp.user.user.accumulated_points >= claim.points
    ) {
      setMessage("Redención registrada !!!");
      setShowInfo(true);
      setSucces(true);

      setTimeout(() => {
        setShowInfo(false);
      }, 3000);
      setPoints("");
      setDetail("");
      return await createClaimService(claim);
    }
    changeIdentification(claim.identification);
    setMessage("No es posible registrar la redencion!!!");
    setSucces(false);
    setShowInfo(true);
    setTimeout(() => {
      setShowInfo(false);
    }, 3000);
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const claim = {
      identification: parseInt(identification),
      detail,
      points: parseInt(points),
    };
    createClaim(claim);
  };
  return (
    <div className="p-4">
      <h2 className="mb-4 text-4xl text-center font-bold tracking-tight">
        Registrar redención
      </h2>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Ingrese número de identificación
            </label>
            <input
              onWheel={(e) => e.target.blur()}
              value={identification}
              onChange={handleChangeIndentification}
              type="number"
              className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="No identificacion"
            />
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Ingrese detalle de redención
            </label>
            <input
              value={detail}
              onChange={handleChangeDetail}
              type="text"
              className=" form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Detalle"
            />
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Ingrese puntos a redimir
            </label>
            <input
              value={points}
              onChange={handleChangeValue}
              type="number"
              onWheel={(e) => e.target.blur()}
              className=" form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Puntos "
            />
          </div>
          {identification && points && detail ? (
            <button
              type="submit"
              className="px-6 py-2.5  bg-neutral-900  text-white  font-medium  text-xs leading-tight  uppercase  rounded shadow-md hover:bg-neutral-500  hover:shadow-lg  "
            >
              Redimir
            </button>
          ) : null}
        </form>
      </div>
      {showInfo ? <Info succes={succes} text={message} /> : ""}
    </div>
  );
};

export default FormClaim;
