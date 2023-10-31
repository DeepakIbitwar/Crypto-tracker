// import React from 'react'

import React, { useEffect, useState } from 'react'
import Header from '../componants/Common/Header'
import TabsComponant from '../componants/Dashboard/Tabs'
import axios from 'axios';
import Search from '../componants/Dashboard/Search';

import PaginationComponant from '../componants/Dashboard/Pagination';
import Loader from '../componants/Common/Loader';

import BackToButton from '../componants/Common/BackToTop';
import CoinPage from './coin';


import { get100Coins } from '../functions/get100Coins';
function DashboardPage() {
  const [coins, setCoins]=useState([]);
  const [search, setSearch]=useState("");
  const [paginatedCoins,setPaginatedCoins]=useState([])
  const [page, setPage] =useState(1);
  const [isLoading, setIsLoading] =useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex=(value-1)*10
    setPaginatedCoins(coins.slice(previousIndex,previousIndex+10))
  };
  const onSearchChange=(e)=>{
    setSearch(e.target.value);
  };

  var filteredcoins=coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

  

useEffect(()=>{
//   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
//   .then((response)=>{
//    setCoins(response.data);
//    setPaginatedCoins(response.data.slice(0,10))
//    setIsLoading(false);
//   })
//   .catch((error)=>{
// console.log(error)
// setIsLoading(false);
getData();
//   })
},[])

const getData=async()=>{
   const myCoin=await get100Coins();
   if(myCoin){
    setCoins(myCoin)
    setPaginatedCoins(myCoin.slice(0,10));
    setIsLoading(false);
   }
}

  return (
    <>
    <Header/>
    <BackToButton/>
    {isLoading ? (<Loader/>):(<div>
      
      {/* {<Search/>} */}
      <Search search={search} onSearchChange={onSearchChange}
      
      />
      <TabsComponant coins={search?filteredcoins:paginatedCoins}/>
      {!search && <PaginationComponant page={page} handlePageChange={handlePageChange}/>}
      {/* <PaginationComponant page={page} handlePageChange={handlePageChange}/> */}
{/* <Loader/> */}
    </div>)}</>
  )
}

export default DashboardPage
