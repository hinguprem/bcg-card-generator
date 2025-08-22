import React, { forwardRef } from "react";

const PremCard = forwardRef(
  ({ title, description, addresss, phone, brandName, brandline, gradient, fontColor }, ref) => {
    return (
      <div
        ref={ref}
        className={`w-[390px] h-[220px] rounded-xl shadow-lg flex flex-col justify-between p-5 ${gradient}`}
        style={{ color: fontColor }}
      >
        <div id="card" className="p-6 rounded-2xl shadow-lg w-96">
  {/* कार्ड का content */}
</div>

        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        <div>
          <p className="text-xs">{addresss}</p>
          <p className="text-xs">{phone}</p>
        </div>
        <div className="text-right">
          <h2 className="font-semibold">{brandName}</h2>
          <p className="text-xs italic">{brandline}</p>
        </div>
      </div>
    );
  }
);

export default PremCard;
