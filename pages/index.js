import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Weather from '@/components/weather';
import Currency from '@/components/currency';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // const [showWeather, setShowWeather] = useState(true);
  // const [showCurrency, setShowCurrency] = useState(true);
  const [showWeather, setShowWeather] = useState(true);
  const [showCurrency, setShowCurrency] = useState(true);

  useEffect(() => {
    // Load the saved state from local storage when the component mounts
    const savedShowWeather = localStorage.getItem('showWeather');
    if (savedShowWeather !== null) {
      setShowWeather(JSON.parse(savedShowWeather));
    }

    const savedShowCurrency = localStorage.getItem('showCurrency');
    if (savedShowCurrency !== null) {
      setShowCurrency(JSON.parse(savedShowCurrency));
    }
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
