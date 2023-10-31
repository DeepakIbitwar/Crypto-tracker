import React from 'react'

import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertnumber';
import { Link } from 'react-router-dom';


function List({coin}) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
    <Tooltip title="Coin Logo" placement='bottom-start'><td className="td-img">
        <img src={coin.image} className='coin-logo' />
        </td></Tooltip>
        
        <Tooltip title="Coin Info" placement='bottom-start'> <td>
        <div className='name-col'>
        <p className="coin-symbol">{coin.symbol}</p>
        <p className='coin-name'>
          {coin.name}
        </p>
        </div>
      </td></Tooltip>

      <Tooltip title="Prise Change In 24Hrs" placement='bottom-start'> {coin.price_change_percentage_24h>0 ?
      <td className='chip-flex'>
      <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}</div>
      <div className='icon-chip td-icon '><TrendingUpRoundedIcon/></div>
      </td> : 
      ( <td className='chip-flex'>
      <div className='price-chip chip-red '>{coin.price_change_percentage_24h.toFixed(2)}</div>
      <div className='icon-chip chip-red td-icon'><TrendingDownRoundedIcon/></div>
      </td> 
      
      )
}</Tooltip>
       
     
<Tooltip title="Current Price" placement='bottom-center'>
<td><h3 className='coin-price td-center-align' style={{color:coin.price_change_percentage_24h<0 ? "red": "green"}}>${coin.current_price.toLocaleString()}</h3></td>
</Tooltip>


<Tooltip title="Total Volume" placement='bottom-center'><td className=''><p className='total-volume td-right-align td-total-volume'>
  {coin.total_volume.toLocaleString()}
</p></td></Tooltip>

<Tooltip title="Market Cap" placement='bottom-center'><td className='desktop-td-mkt'> 
<p className='total-volume td-right-align'>
  ${coin.market_cap.toLocaleString()}
</p>
</td>
</Tooltip>

<Tooltip title="Market Cap" placement='bottom-center'><td className='mobile-td-mkt'> 
<p className='total-volume td-right-align'>
  ${convertNumber(coin.market_cap)}
</p>

</td></Tooltip>


    
    </tr>
      
    </Link>
  )
}

export default List
