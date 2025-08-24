import { forwardRef } from 'react';

const MarkCard = forwardRef((props, ref) => {
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
      className={`w-[450px] h-[250px] p-8 rounded-xl shadow-2xl flex flex-col justify-between ${gradient} ${fontClass}`}
      style={{ color: fontColor }}
    >
      <div className="flex justify-between items-start">
        <div className="text-left">
          <h2 className="text-2xl font-bold">{brandName}</h2>
          <p className="text-sm italic opacity-80">{brandline}</p>
        </div>
        {logo && (
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 object-cover rounded-full border border-black/90" // Changed to object-cover
          />
        )}
      </div>
      <div className="text-left">
        <h1 className="text-4xl font-bold tracking-wide">{title}</h1>
        <p className="text-lg opacity-90">{description}</p>
        <div className="mt-3 text-xs opacity-70 border-t border-white/20 pt-2">
          <p> {phone} <span className="mx-16">  </span> ✉ {email}</p>
          <p>{addresss}</p>
        </div>
      </div>
    </div>
  );
});

export default MarkCard;