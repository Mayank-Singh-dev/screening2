import React, { useEffect, useState } from "react";

const Currency = () => {
  const base_url = "https://v6.exchangerate-api.com/v6/28b3469f1509e8e5e2113af9/latest/INR";
  const [currencyRates, setCurrencyRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    fetch(base_url)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);

        if (data && data.conversion_rates) {
          const rates = data.conversion_rates;
          const currencies = Object.keys(rates);

          console.log("Currencies:", currencies);
          console.log("Rates:", rates);

          setCurrencyRates(rates);
        }
      })
      .catch((error) => {
        console.log("API error:", error);
      });
  }, []);

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const convertCurrency = (fromCurrency, toCurrency, amount) => {
    const rate = currencyRates[toCurrency] / currencyRates[fromCurrency];
    return (amount * rate).toFixed(2);
  };

  return (
    <div className="p-8 bg-blue-200 mt-3 border rounded-lg ml-2 mr-2 lg:mr-64 lg:h-6/6 mb-52 lg:mb-0">
      <h1 className="text-4xl mb-4 -mt-2 font-bold">Currency</h1>

      <div className="flex flex-row gap-3">
        <input
          className=" border border-black rounded-md w-4/6 p-2 font-semibold text-lg"
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />
        <select
          className="w-2/6 font-semibold text-lg"
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
        >
          {Object.keys(currencyRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-row gap-3 mt-3">
        <input
          className=" border border-black rounded-md w-4/6 p-2 font-semibold text-lg"
          type="number"
          value={convertCurrency(fromCurrency, toCurrency, amount)}
          readOnly
        />
        <select
          className="w-2/6 font-semibold text-lg"
          value={toCurrency}
          onChange={handleToCurrencyChange}
        >
          {Object.keys(currencyRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Currency;

