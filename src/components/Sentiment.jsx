import React from 'react'
import KeyEventCards from './KeyEventCards'
import buysvg from "../assets/buy.svg"
import holdsvg from "../assets/hold.svg"
import sellsvg from "../assets/sell.svg"
import i from "../assets/i.svg"

const Sentiment = () => {
  return (
    <div className='mb-10 border rounded-md'>
         <span className='font-semibold text-2xl mx-11 mb-4'>Sentiment</span>


         <div className='flex pt-4 items-center'>
         <span className='text-lg font-semibold ml-11 mr-2'>Key events </span>
         <img src={i} className=''></img>
         </div>


         <KeyEventCards/>

         <div className='flex pt-4 items-center'>
         <span className='text-lg font-semibold ml-11 mr-2'>Analyst Estimates</span>
         <img src={i} className=''></img>
         </div>


         <div className='flex'>
            <svg className='mx-11 mt-4' width="117" height="121" viewBox="0 0 117 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.796875" width="116.86" height="120" rx="58.43" fill="#EBF9F4"/>
                <path d="M33.019 73.0469L44.5769 50.1895V49.9956H31.209V46.5696H48.714V50.112L37.1948 73.0469H33.019ZM61.8847 73.4089C60.704 73.3916 59.5404 73.1762 58.3941 72.7625C57.2564 72.3487 56.2221 71.6592 55.2913 70.6939C54.3604 69.7286 53.6149 68.4315 53.0547 66.8025C52.5031 65.1735 52.2273 63.1394 52.2273 60.7003C52.2273 58.3904 52.4557 56.3391 52.9125 54.5464C53.3779 52.7537 54.0459 51.241 54.9164 50.0085C55.7869 48.7674 56.8384 47.8237 58.0709 47.1772C59.3034 46.5308 60.6867 46.2076 62.2209 46.2076C63.7981 46.2076 65.1987 46.5179 66.4226 47.1384C67.6465 47.759 68.6377 48.6166 69.3961 49.7112C70.1632 50.8058 70.6502 52.0512 70.857 53.4475H66.9139C66.6467 52.3443 66.1166 51.4436 65.3237 50.7455C64.5307 50.0473 63.4965 49.6983 62.2209 49.6983C60.2816 49.6983 58.769 50.5429 57.683 52.2322C56.6057 53.9215 56.0627 56.2702 56.0541 59.2782H56.248C56.7048 58.5283 57.265 57.8905 57.9287 57.3648C58.6009 56.8304 59.3508 56.421 60.1782 56.1366C61.0142 55.8435 61.8934 55.697 62.8156 55.697C64.3498 55.697 65.7374 56.0719 66.9785 56.8218C68.2283 57.563 69.2237 58.5887 69.965 59.8987C70.7062 61.2088 71.0768 62.7085 71.0768 64.3978C71.0768 66.0871 70.6933 67.617 69.9262 68.9874C69.1677 70.3578 68.099 71.4438 66.72 72.2453C65.3409 73.0383 63.7292 73.4261 61.8847 73.4089ZM61.8718 70.0475C62.8888 70.0475 63.7981 69.7975 64.5997 69.2977C65.4013 68.7978 66.0347 68.1255 66.5002 67.2808C66.9656 66.4362 67.1983 65.4924 67.1983 64.4495C67.1983 63.4325 66.9699 62.506 66.5131 61.6699C66.0649 60.8339 65.4444 60.1702 64.6514 59.679C63.8671 59.1877 62.9707 58.942 61.9623 58.942C61.1952 58.942 60.4842 59.0886 59.8291 59.3816C59.1827 59.6746 58.6139 60.0797 58.1226 60.5969C57.6313 61.114 57.2435 61.7087 56.959 62.381C56.6832 63.0446 56.5453 63.7471 56.5453 64.4883C56.5453 65.4795 56.7737 66.3974 57.2305 67.242C57.696 68.0867 58.3294 68.7676 59.131 69.2847C59.9412 69.7932 60.8548 70.0475 61.8718 70.0475Z" fill="#0FBA83"/>
                <path d="M82.7732 64.6151V64.0014C82.7732 63.562 82.8641 63.1605 83.0459 62.7969C83.2315 62.4295 83.5005 62.1359 83.8527 61.9162C84.2088 61.6927 84.6387 61.581 85.1425 61.581C85.6577 61.581 86.0895 61.6908 86.438 61.9105C86.7865 62.1302 87.0497 62.4238 87.2277 62.7912C87.4096 63.1586 87.5005 63.562 87.5005 64.0014V64.6151C87.5005 65.0545 87.4096 65.4579 87.2277 65.8253C87.0459 66.1889 86.7789 66.4825 86.4266 66.706C86.0781 66.9257 85.6501 67.0355 85.1425 67.0355C84.6312 67.0355 84.1993 66.9257 83.8471 66.706C83.4948 66.4825 83.2277 66.1889 83.0459 65.8253C82.8641 65.4579 82.7732 65.0545 82.7732 64.6151ZM84.0971 64.0014V64.6151C84.0971 64.9408 84.1747 65.2363 84.33 65.5014C84.4853 65.7666 84.7562 65.8991 85.1425 65.8991C85.5251 65.8991 85.7921 65.7666 85.9437 65.5014C86.0952 65.2363 86.1709 64.9408 86.1709 64.6151V64.0014C86.1709 63.6757 86.0971 63.3802 85.9493 63.1151C85.8054 62.8499 85.5365 62.7173 85.1425 62.7173C84.7637 62.7173 84.4948 62.8499 84.3357 63.1151C84.1766 63.3802 84.0971 63.6757 84.0971 64.0014ZM76.9209 57.956V57.3423C76.9209 56.9029 77.0118 56.4995 77.1937 56.1321C77.3793 55.7647 77.6482 55.4711 78.0005 55.2514C78.3565 55.0317 78.7865 54.9219 79.2902 54.9219C79.8054 54.9219 80.2372 55.0317 80.5857 55.2514C80.9342 55.4711 81.1974 55.7647 81.3755 56.1321C81.5535 56.4995 81.6425 56.9029 81.6425 57.3423V57.956C81.6425 58.3954 81.5516 58.7988 81.3698 59.1662C81.1918 59.5298 80.9266 59.8234 80.5743 60.0469C80.2259 60.2666 79.7978 60.3764 79.2902 60.3764C78.7751 60.3764 78.3414 60.2666 77.9891 60.0469C77.6406 59.8234 77.3755 59.5298 77.1937 59.1662C77.0118 58.7988 76.9209 58.3954 76.9209 57.956ZM78.2505 57.3423V57.956C78.2505 58.2817 78.3262 58.5772 78.4777 58.8423C78.633 59.1075 78.9039 59.2401 79.2902 59.2401C79.669 59.2401 79.9342 59.1075 80.0857 58.8423C80.241 58.5772 80.3187 58.2817 80.3187 57.956V57.3423C80.3187 57.0166 80.2448 56.7211 80.0971 56.456C79.9493 56.1908 79.6804 56.0582 79.2902 56.0582C78.9115 56.0582 78.6425 56.1908 78.4834 56.456C78.3281 56.7211 78.2505 57.0166 78.2505 57.3423ZM77.4607 66.7969L85.4607 55.1605H86.8187L78.8187 66.7969H77.4607Z" fill="#0FBA83"/>
            </svg>
            
            <div className='mt-4'>
                <p className='my-3 text-gray-500'>Buy</p>
                <p className='my-3  text-gray-500'>Hold</p>
                <p className='my-3  text-gray-500'>Sell</p>
            </div>

            <div className='mt-4'>
                <img src={buysvg} alt="buy-svg" className='mt-5 pl-5'></img>
                <img src={holdsvg} alt="buy-svg"className='mt-7 pl-5'></img>
                <img src={sellsvg} alt="buy-svg" className='mt-7 pl-5'></img>
            </div>

            <div className='mt-4'>
               <p className='my-3 text-gray-500 tex-sm font-medium pl-5'>76%</p>
               <p className='my-3 text-gray-500 text-sm font-medium pl-5'>8%</p>
               <p className='my-3 text-gray-500 text-sm font-medium pl-5' >16%</p>
            </div>

        </div>

             </div>



       
   
  )
}

export default Sentiment
