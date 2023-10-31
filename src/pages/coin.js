import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../componants/Common/Loader';
import Header from '../componants/Common/Header';
import axios from 'axios';
import { coinObject } from '../functions/converObject';
import List from '../componants/Dashboard/List';
// import TogglePriceType from '../componants/Coin/PriceType.js';
import CoinInfo from '../componants/Coin/coinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../componants/Coin/LineChart';
// import { convertDate } from '../functions/convertDate';
import { convertDate } from '../functions/converDate';
import SelectDays from '../componants/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
function CoinPage() {

    const {id}=useParams();
    const [isLoading, setIsLoading]=useState(true)
    const [coinData, setCoinData]=useState();
    const [days, setDays]=useState(7)
    const [chartData, setChartData]=useState({});
    const [PriceType, setPriceType] = useState('prices');


    useEffect(()=>{
        if(id){
         
          getData()


        }
    },[id]);

    async function  getData(){
const data=await getCoinData(id);
if(data){
    coinObject(setCoinData,data);
    const prices=await getCoinPrices(id, days,PriceType);
    if(prices.length>0){
      settingChartData(setChartData,prices);
    setIsLoading(false)
  }
} 
}
 
const handleDaysChange=async (event)=>{
  setIsLoading(true);
  setDays(event.target.value);
  const prices=await getCoinPrices(id , event.target.value,PriceType);
    if(prices.length>0){
        settingChartData(setChartData,prices);
        
        setIsLoading(false);
    }
};

  const handlePriceTypeChange = async(event, newType) => {
    // setPriceType(newType);
    setIsLoading(true);
  setPriceType(newType);

  const prices=await getCoinPrices(id , days,newType);
  
    if(prices.length>0){
        settingChartData(setChartData,prices);
        
        setIsLoading(false);
    }
  };
        


    
  return (
    
    <div>
    <Header/>
    {isLoading?(<Loader/>): (<>
    <div className="gray-wrapper" style={{padding: '0rem 1rem'}}>
        <List coin ={coinData}/></div>
        {/* <div className='gray-wrapper'></div> */}
        <div className="gray-wrapper">
        <SelectDays days={days}
         handleDaysChange={handleDaysChange}/>
          {/* <TogglePriceType PriceType={PriceType} 

          handlePriceTypeChange={handlePriceTypeChange}
          /> */}
          <LineChart chartData={chartData}/>
          </div>
    <CoinInfo heading={coinData.name} desc={coinData.desc}/></>)}
    </div>
  )
}

export default CoinPage
