"use client"
import { useState, useEffect } from "react";


interface Rates {
  BTC?: number;
  BNB?: number;
  USDT?: number;
  ETH?: number;
  DOGE?: number;
  ADA?: number;
}

interface DataType {
  rates: Rates;
}


export default function CryptoRates() {
  // const API_KEY = "3251945b5f95ea3a9162dfb71217145c";
  const API_KEY = "5068db716bc1b9f4fa6963de4c5d4269";

  const [data, setData] = useState<DataType>({
    rates: {
      BTC: 0,
      BNB: 0,
      USDT: 0,
      ETH: 0,
      DOGE: 0,
      ADA: 0,
    },
  });
  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  // const data = await fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`) 
  // const fetched_data = await data.json()

  // console.log(fetched_data)

  return (
    <div>
      <nav>
        <h1 className="main" >Crypto Currency Rates</h1>
      </nav>

      <div className="container">
        <div className="shan">
          <h1 className="here">Here are crypto rates</h1></div>
        <br />
        <div className="buttons">
          <table>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BTC</td>
                <td>{data?.rates?.BTC}</td>
              </tr>
              <tr>
                <td>BNB</td>
                <td>{data?.rates?.BNB}</td>
              </tr>
              <tr>
                <td>USDT</td>
                <td>{data?.rates?.USDT}</td>
              </tr>
              <tr>
                <td>ETH</td>
                <td>{data?.rates?.ETH}</td>
              </tr>
              <tr>
                <td>DOGE</td>
                <td>{data?.rates?.DOGE}</td>
              </tr>
              <tr>
                <td>ADA</td>
                <td>{data?.rates?.ADA}</td>
              </tr>
            </tbody>
          </table>

        </div>




      </div>

    </div>
  );
}