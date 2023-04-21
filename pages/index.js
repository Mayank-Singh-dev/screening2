import React, { useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Weather from '@/components/weather';
import Currency from '@/components/currency';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showWeather, setShowWeather] = useState(true);
  const [showCurrency, setShowCurrency] = useState(true);

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
