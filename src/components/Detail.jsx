import React from "react";
import moment from "moment";

const Detail = ({ user, sales, claims }) => {
  const formatDate = (date) =>
    moment(new Date(date)).format("DD-MM-YYYY h:mm a");
  return (
    <>
      <div className="flex items gap-4 mt-10 h-96 ">
        <div className="mb-6 w-1/2">
          <h2 className="text-3xl  font-bold tracking-tight">
            Detalle de compras y puntos: <br />
          </h2>
          <br />

          <table className=" w-full p-4 shadow  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Detalle
                </th>
                <th scope="col" className="py-3 px-6">
                  Valor
                </th>
                <th scope="col" className="py-3 px-6">
                  Puntos
                </th>
                <th scope="col" className="py-3 px-6">
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody className="h-full">
              {sales &&
                sales.length &&
                sales.map((sale) => {
                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {sale.detail}
                      </th>
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {sale.value}
                      </th>
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {sale.value / 1000}
                      </th>
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {formatDate(sale.createdAt)}
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="mb-6 w-1/2">
          <h2 className="text-3xl  font-bold tracking-tight">
            Detalle de redenciones: <br />
          </h2>
          <br />
          <table className=" w-full p-4   text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Detalle
                </th>

                <th scope="col" className="py-3 px-6">
                  Puntos redimidos
                </th>
                <th scope="col" className="py-3 px-6">
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody>
              {claims &&
                !!claims.length &&
                claims.map((sale) => {
                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {sale.detail}
                      </th>
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {sale.points}
                      </th>

                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {formatDate(sale.createdAt)}
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Detail;
