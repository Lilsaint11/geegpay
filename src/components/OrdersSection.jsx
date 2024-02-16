import React from 'react'
import AnalyticsCard from './AnalyticsCard'
import boxrotate from './MainImages/3d-rotate.png'
import boxtick from './MainImages/box-tick.png'
import coin from './MainImages/coin.png'
import greenarrow from './MainImages/greenarrow.png'
import greenchart from './MainImages/greenchart.png'
import redchart from './MainImages/redchart.png'
import redarrow from './MainImages/redarrow.png'
import shoppingcart from './MainImages/shopping-cart.png'
import TopPlatform from './TopPlatform'

const cardData = [
    {
        "image": boxtick,
        "color": "green",
        "title": "Total Order",
        "chart": greenchart,
        "percentage": '23.5',
        "amount": "350"
      },
    {
        "image": boxrotate,
        "color": "red",
        "title": "Total Refund",
        "chart": redchart,
        "percentage": '23.5',
        "amount": "270",
      },
    {
        "image": shoppingcart,
        "color": "red",
        "title": "Average Sales",
        "chart": redchart,
        "percentage": '23.5',
        "amount": "1567",
      },
    {
        "image": coin,
        "color": "green",
        "title": "Total Income",
        "chart": greenchart,
        "percentage": '23.5',
        "amount": "$350,000.00",
      }
      
]

const OrdersSection = () => {
  return (
    <div  className='w-full h-full  p-6 pl-2 grid grid-cols-2 gap-[16px]'>
        {
            cardData.map(
                (item)=>{
                    return(
                        <AnalyticsCard image={item.image} color={item.color} title={item.title} chart={item.chart} percentage={item.percentage} amount={item.amount}/>
                    )
                }
            )
        }
        <TopPlatform/>
    </div>
  )
}

export default OrdersSection