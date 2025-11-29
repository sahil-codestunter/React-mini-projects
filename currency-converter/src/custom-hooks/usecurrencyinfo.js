import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    async function getData() {
      try {
        const res = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
        const json = await res.json();

        setData(json.rates); // <-- always valid
      } catch (error) {
        console.error("Currency API error:", error);
      }
    }

    getData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
