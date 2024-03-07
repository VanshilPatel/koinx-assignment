import React, { useState, useEffect } from 'react';
import FooterCard from './FooterCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FooterCardsContainer = () => {
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        // Replace 'yourApiEndpoint' with the actual API endpoint
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();

        // Assuming the API response has an array of coins
        const coins = data.coins.slice(0, 5); // Fetching data for the top 5 coins
        setTopCoins(coins);
      } catch (error) {
        console.error('Error fetching top coins:', error);
      }
    };

    fetchTopCoins();
  }, []);




  const NextArrow = (props) => (
    <div className="slick-arrow slick-next bg-slate-300">
      Next
    </div>
  );

  const PrevArrow = (props) => (
    <div  className="slick-arrow slick-prev bg-slate-300">
      Prev
    </div>
  );
  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };



  return (
    <div className='mx-11 mt-5 py-3 px-6 pt-5 pb-3'>
      <p className='font-semibold text-xl'>You may also Like</p>
      <div className='mx-3 mt-5'>
      
      <Slider {...sliderSettings} className="gap-x-2">
        {topCoins.map((coin) => (
          <FooterCard key={coin.item.id} coinData={coin.item} />
        ))}
      </Slider>
      </div>

      <div>
      <p className='font-semibold text-xl mt-5 mb-5'>Trending Coins</p>
    
      <Slider {...sliderSettings}>
        {topCoins.map((coin) => (
          <FooterCard key={coin.item.id} coinData={coin.item}/>
        ))}
       </Slider>
     
      </div>
    </div>
  );
};

export default FooterCardsContainer;
