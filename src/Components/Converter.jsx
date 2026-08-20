// 22. Currency converter — live exchange rates
import React, { useState, useEffect } from "react";

function Converter() {
  const [userInput, setUserInput] = useState("");
  const [rate, setRate] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const currencies = ["USD", "NGN", "EUR", "GBP", "JPY", "CAD"];

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setRate(1);
      setError(null);
      setLoading(false);
      return;
    }

    const getRate = async () => {
      setLoading(true);
      setError(null);
      setRate(null);

      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/${fromCurrency}`
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();

        if (
          data.result !== "success" ||
          !data.rates ||
          data.rates[toCurrency] === undefined
        ) {
          throw new Error("Unable to get exchange rate");
        }

        setRate(data.rates[toCurrency]);
      } catch (err) {
        setError(
          err instanceof TypeError
            ? "Network error — check your connection."
            : err.message
        );
      } finally {
        setLoading(false);
      }
    };

    getRate();
  }, [fromCurrency, toCurrency]);

  const total = userInput && rate ? Number(userInput) * rate : "";

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8">
        <h1 className="text-xl font-semibold text-slate-900 mb-6">
          Currency Converter
        </h1>

        <label className="block text-sm font-medium text-slate-600 mb-1">
          Amount
        </label>
        <input
          type="text"
          inputMode="decimal"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter amount"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition mb-5"
        />

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-600 mb-1">
              From
            </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={swapCurrencies}
            className="mt-6 shrink-0 rounded-full w-9 h-9 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition text-lg"
            aria-label="Swap currencies"
          >
            ⇄
          </button>

          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-600 mb-1">
              To
            </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            >
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-4 min-h-[68px] flex items-center justify-center">
          {loading && (
            <p className="text-sm text-slate-500">Loading exchange rate...</p>
          )}

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          {!loading && !error && userInput && rate && (
            <p className="text-2xl font-semibold text-slate-900">
              {total.toFixed(2)}{" "}
              <span className="text-base font-medium text-slate-500">
                {toCurrency}
              </span>
            </p>
          )}

          {!loading && !error && (!userInput || !rate) && (
            <p className="text-sm text-slate-400">
              Enter an amount to convert
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Converter;