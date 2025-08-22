import React, { forwardRef } from "react";

const MarkCard = forwardRef(
  ({ title, description, addresss, phone, brandName, brandline, gradient, fontColor }, ref) => {
    return (
      <div
        ref={ref}
        className={`w-[390px] h-[220px] rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-center ${gradient}`}
        style={{ color: fontColor }}
      >
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <p className="text-base">{description}</p>
        <div className="mt-4">
          <p className="text-sm">{addresss}</p>
          <p className="text-sm">{phone}</p>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold">{brandName}</h2>
          <p className="text-xs italic">{brandline}</p>
        </div>
      </div>
    );
  }
);

export default MarkCard;
