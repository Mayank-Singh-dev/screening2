import React, { useEffect, useRef, useState } from "react";
import { IoMdSettings } from "react-icons/io";

const Header = ({ showWeather, setShowWeather, showCurrency, setShowCurrency }) => {
  const [ismenu, setIsMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleToggleWeather = () => {
    const newValue = !showWeather;
    setShowWeather(newValue);
  };
  
  const handleToggleCurrency = () => {
    const newValue = !showCurrency;
    setShowCurrency(newValue);
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed flex flex-row gap-12 z-50 p-5 px-4  items-center justify-between bg-blue-400 w-full ">
      <div className="font-bold text-xl md:text-2xl md:mr-auto cursor-pointer" onClick={handleScrollToTop}>Info</div>
      <button ref={menuRef} onClick={() => setIsMenu(!ismenu)}>
        <IoMdSettings className="text-2xl cursor-pointer hover:shadow-lg active:scale-95 transition transform duration-100 ease-out" />
      </button>
      {ismenu && (
        <div ref={menuRef} className="w-40 bg-blue-300 shadow-xl rounded-lg flex flex-col absolute top-20 right-0 justify-center items-center">
          <p
            className={`px-4 py-2 flex items-center gap-3 cursor-pointer  transition-all duration-100 ease-in-out text text-textColor text-base ${
              showWeather ? '' : ""
            }`}
            onClick={handleToggleWeather}
          >
            Weather <input type="checkbox" name="weather" checked={showWeather} onChange={handleToggleWeather} />
          </p>
          <p
            className={`px-4 py-2 flex items-center gap-3 cursor-pointer  transition-all duration-100 ease-in-out text text-textColor text-base ${
              showCurrency ? "" : ""
            }`}
            onClick={handleToggleCurrency}
          >
            Currency <input type="checkbox" name="Currency" checked={showCurrency} onChange={handleToggleCurrency} />
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
