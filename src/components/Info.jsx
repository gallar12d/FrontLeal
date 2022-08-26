import React from "react";

const Info = ({text, succes}) => {
  return (
    <div className={`flex justify-between p-4 mt-4 ${(succes)? 'bg-green-500': 'bg-red-500'} rounded shadow max-w-sm text-white`}>
      <span>{text}</span>
    </div>
  );
};

export default Info;
