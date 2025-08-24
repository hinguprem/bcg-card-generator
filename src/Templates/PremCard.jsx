import { forwardRef } from 'react';

const PremCard = forwardRef((props, ref) => {
  const {
    title,
    description,
    addresss,
    phone,
    email,
    logo,
    brandName,
    brandline,
    gradient,
    fontColor,
    fontClass,
  } = props;

  return (
    <div
      ref={ref}
      className={`w-[450px] h-[250px] p-6 rounded-lg shadow-lg flex flex-col justify-between ${gradient} ${fontClass}`}
      style={{ color: fontColor }}
    >
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-md">{description}</p>
          </div>
          {logo && (
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 object-cover rounded-full border border-black/90" // Changed to object-cover
            />
          )}
        </div>
        <div className="mt-4 text-sm">
          <p>{addresss}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
      <div className="text-right">
        <h2 className="text-xl font-semibold">{brandName}</h2>
        <p className="text-sm italic">{brandline}</p>
      </div>
    </div>
  );
});

export default PremCard;