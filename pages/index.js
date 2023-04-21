import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Currency from "@/components/currency";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Weather from "@/components/weather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showWeather, setShowWeather] = useState(true);
  const [showCurrency, setShowCurrency] = useState(true);

  useEffect(() => {
    const showWeatherFromStorage = localStorage.getItem("showWeather") === "true";
    const showCurrencyFromStorage = localStorage.getItem("showCurrency") === "true";
    setShowWeather(showWeatherFromStorage);
    setShowCurrency(showCurrencyFromStorage);

  }, []);

  return (
    <div>
      <Header
        showWeather={showWeather}
        setShowWeather={setShowWeather}
        showCurrency={showCurrency}
        setShowCurrency={setShowCurrency}
      />
      <div className="pt-20 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10 md:grid-cols-1 md:gap-3">
        {showWeather && <Weather />}
        {showCurrency && <Currency />}
      </div>
      <Footer />
    </div>
  );
}
