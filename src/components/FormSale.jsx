import React, { useState } from "react";
import { createSale as createSaleService } from "../services/saleServices.js";
import Info from "./Info.jsx";

const FormSale = ({id, changeIdentification}) => {
  const [detail, setDetail] = useState("");
  const [value, setValue] = useState("");
  const [identification, setIdentification] = useState(id);
  const [showInfo, setShowInfo] = useState(false);

  const handleChangeDetail = (e) => {
    setDetail(e.target.value);
  };
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleChangeIndentification = (e) => {
    setIdentification(e.target.value);
  };

  const createSale = async (sale) => {
    await createSaleService(sale);
    changeIdentification(sale.identification)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sale = {
      value: parseInt(value),
      detail,
      identification: parseInt(identification),
    };
    createSale(sale);
    setValue("");
    setDetail("");
    setIdentification("");
    setShowInfo(true);
    setTimeout(() => {
      setShowInfo(false);
    }, 3000);
  };
  return (
    <div className="p-4">
      <h2 className="mb-4 text-4xl text-center font-bold tracking-tight">
        Registrar venta
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
              className="form-control w-full  px-3 py-1.5  text-base text-gray-700 border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="No identificación"
            />
          </div>

          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Ingrese detalle de venta
            </label>
            <input
              value={detail}
              onChange={handleChangeDetail}
              type="text"
              className="form-control w-full  px-3 py-1.5 text-base  font-normal   text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded  ocus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Detalle"
            />
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Ingrese valor de venta
            </label>
            <input
              onWheel={(e) => e.target.blur()}
              value={value}
              onChange={handleChangeValue}
              type="number"
              className="form-control w-full  px-3  py-1.5  text-base  font-normal  text-gray-700 bg-white bg-clip-padding    border border-solid border-gray-300   rounded  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Valor "
            />
          </div>

          {identification && value && detail ? (
            <button
              type="submit"
              className="px-6 py-2.5 bg-neutral-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-neutral-500 hover:shadow-lg  ease-in-out"
            >
              Registrar
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
      {showInfo ? <Info succes={true} text="Venta registrada!!!" /> : ""}
    </div>
  );
};

export default FormSale;
