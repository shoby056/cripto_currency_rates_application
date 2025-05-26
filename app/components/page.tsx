"use client";
import { useState, useEffect } from "react";

interface Rates {
  BTC?: number;
  ETH?: number;
  BNB?: number;
  USDT?: number;
  DOGE?: number;
  ADA?: number;
}

export default function CryptoRates() {
  const [rates, setRates] = useState<Rates | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether,cardano,dogecoin&vs_currencies=usd"
        );
        const data = await response.json();

        console.log("Fetched Rates:", data);

        setRates({
          BTC: data.bitcoin.usd,
          ETH: data.ethereum.usd,
          BNB: data.binancecoin.usd,
          USDT: data.tether.usd,
          DOGE: data.dogecoin.usd,
          ADA: data.cardano.usd,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <nav>
        <h1 className="main">Crypto Currency Rates</h1>
      </nav>

      <div className="container">
        <div className="shan">
          <h1 className="here">Here are crypto rates</h1>
        </div>
        <br />
        <div className="buttons">
          <table>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Rate (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BTC</td>
                <td>{rates?.BTC ?? "Loading..."}</td>
              </tr>
              <tr>
                <td>ETH</td>
                <td>{rates?.ETH ?? "Loading..."}</td>
              </tr>
              <tr>
                <td>BNB</td>
                <td>{rates?.BNB ?? "Loading..."}</td>
              </tr>
              <tr>
                <td>USDT</td>
                <td>{rates?.USDT ?? "Loading..."}</td>
              </tr>
              <tr>
                <td>DOGE</td>
                <td>{rates?.DOGE ?? "Loading..."}</td>
              </tr>
              <tr>
                <td>ADA</td>
                <td>{rates?.ADA ?? "Loading..."}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
