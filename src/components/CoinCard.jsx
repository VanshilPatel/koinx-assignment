import React, { useState, useEffect } from 'react';

const CoinCard = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    // Replace 'your_api_url_here' with the actual API endpoint URL
    const apiUrl = 'your_api_url_here';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract necessary fields from the data array of objects
        const extractedData = data.map((coin) => ({
          name: coin.name,
          svg: coin.svg, // Replace with the actual field name for SVG
          price: coin.price, // Replace with the actual field name for price
          priceChange: coin.priceChange, // Replace with the actual field name for price change
          graph: coin.graph, // Replace with the actual field name for the graph
        }));

        // Set the extracted data in the state
        setCoinData(extractedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      {coinData.map((coin, index) => (
        <div key={index} className='flex'>
          <img src={coin.svg} alt={coin.name} />
          <span>{coin.name}</span>
          <button className='bg-green-200 px-3 border rounded-sm ml-2'>
            <span className='text-green-500'>{coin.priceChange}</span>
          </button>
          <p>{coin.price}</p>
          <div>{coin.graph}</div>
        </div>
      ))}
    </div>
  );
};

export default CoinCard;
