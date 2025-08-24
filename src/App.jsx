import { Suspense, lazy, useRef, useState, memo } from "react";
import saveCardAsImage from "./saveCardAsImage";
import GradientPicker from "./Component/GradientPicker";
import LoaderSkeleton from "./Component/LoaderSkeleton";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

function App() {
  const [title, setTitle] = useState("Hingu Prem");
  const [description, setDescription] = useState("Software Developer");
  const [addresss, setAddresss] = useState("Ahmedabad, Gujarat, India");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [email, setEmail] = useState("prem.hingu@example.com");
  const [logo, setLogo] = useState(null);
  const [brandName, setBrandName] = useState("Prem Works");
  const [brandline, setBrandline] = useState("Building Ideas into Reality");
  const [gradient, setGradient] = useState("bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800");
  const [fontColor, setFontColor] = useState("#ffffff");
  const [fontClass, setFontClass] = useState('font-cinzel'); // Font state
  const exportRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [fontPickerOpen, setFontPickerOpen] = useState(false);
  const themeNames = ["PremCard", "MarkCard"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [themeName, setThemeName] = useState(themeNames[0]);
  const Template = memo(lazy(() => import(`./Templates/${themeName}.jsx`)));

  const handleLogoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogo(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Rodal
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        height={500}
        width={390}
        showCloseButton={false}
      >
        <div className="flex overflow-scroll h-[470px] overflow-x-hidden">
          <GradientPicker setGradient={setGradient} />
        </div>
        <div className="mt-2 flex justify-end">
          <button className="btn-secondary w-auto" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      </Rodal>

      <div className="card-preview-wrapper">
        <Suspense fallback={<LoaderSkeleton />}>
          <Template
            title={title}
            description={description}
            addresss={addresss}
            phone={phone}
            email={email}
            logo={logo}
            brandName={brandName}
            brandline={brandline}
            gradient={gradient}
            fontColor={fontColor}
            fontClass={fontClass}
            ref={exportRef}
          />
        </Suspense>
      </div>

      <div className="template-switcher">
        <button
          onClick={() => {
            if (currentIndex > 0) {
              const idx = currentIndex - 1;
              setThemeName(themeNames[idx]);
              setCurrentIndex(idx);
            }
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (currentIndex < themeNames.length - 1) {
              const idx = currentIndex + 1;
              setThemeName(themeNames[idx]);
              setCurrentIndex(idx);
            }
          }}
        >
          Next
        </button>
      </div>

      <div className="form-wrapper">
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          <input type="text" placeholder="Name" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Designation" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Address" value={addresss} onChange={(e) => setAddresss(e.target.value)} />
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="text" placeholder="Company" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
          <input type="text" placeholder="Tag Line" value={brandline} onChange={(e) => setBrandline(e.target.value)} />

          <select
            value={fontClass}
            onChange={(e) => setFontClass(e.target.value)}
            className="form-input"
          >
            <option value="font-cinzel">Cinzel (Classic)</option>
            <option value="font-inter">Inter (Modern)</option>
            <option value="font-lato">Lato (Friendly)</option>
            <option value="font-merriweather">Merriweather (Serif)</option>
            <option value="font-playfair">Playfair Display (Elegant)</option>
          </select>

          <div className="flex flex-row items-center w-full justify-between gap-2">
            <button className="btn-secondary" onClick={() => setIsOpen(true)}>
              Choose a Background
            </button>
          </div>

          <div className="flex flex-row items-center w-full justify-between gap-2">
            <div className="btn-secondary" onClick={() => setFontPickerOpen(!fontPickerOpen)}>
              Choose a Font Color
            </div>
            {fontPickerOpen ? (
              <input
                type="color"
                value={fontColor}
                onChange={(e) => setFontColor(e.target.value)}
                className="p-1 h-12 w-12 bg-gray-700 rounded-md border border-gray-600 cursor-pointer"
              />
            ) : null}
          </div>

          <label htmlFor="logo-upload" className="btn-secondary cursor-pointer">
            Upload Logo
          </label>
          <input
            id="logo-upload"
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={handleLogoUpload}
          />

          <button onClick={() => saveCardAsImage(exportRef)} className="btn-primary">
            Export as Image
          </button>

          <p className="text-center text-sm w-full text-gray-400 font-display pt-4">
            Made by <a href="https://github.com/hinguprem">Hingu Prem</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
