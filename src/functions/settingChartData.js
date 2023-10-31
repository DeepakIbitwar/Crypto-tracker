import { convertDate } from "./converDate";



export const settingChartData =(setChartData, prices)=>{
    
    setChartData({
        labels:
        // ['mon', 'tue', 'wed'],
         prices.map((price)=>convertDate(price[0])),
        datasets:[
          {
            data:
            prices.map((price)=>price[1]),
          //  ['1', '2', '3'],
           borderColor:"#3a80e9",
           backgroundColor:"rgba(58,128,233,0.1)",
           borderWidth:2,
           fill:true,
           tension:0.25,
          
          pointRadius: 0,

        
          },
        ],
      });
}