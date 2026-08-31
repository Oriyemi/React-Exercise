// 26. Crypto price tracker with polling



import React, { useState, useEffect } from "react";

function Crypto() {
  const [coin, setCoin] = useState("bitcoin");
  const [cryptoPrice, setCryptoPrice] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPrice = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`,
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        setCryptoPrice(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
      };
      fetchPrice();

   
      const polling = setInterval(fetchPrice, 5000);
      
    return () => {
      clearInterval(polling);
    };
  }, [coin]);

  return (
    <div>
      <div>
        <h1>Crypto Price Tracker</h1>
        <input
          type="text "
          value={coin}
          onChange={(e) => setCoin(e.target.value)}
        />
        <p>Coin:{coin}</p>
        <p>
          Price:{cryptoPrice ? `$${cryptoPrice[coin].usd}` : "No price yet"}
        </p>

        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Crypto;
