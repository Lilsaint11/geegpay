import React, { useContext } from 'react'

import greenarrow from './MainImages/greenarrow.png'

import redarrow from './MainImages/redarrow.png'
import { ThemeContext } from '../../ThemeContext'
const AnalyticsCard = ({image,color,title,chart,percentage,amount}) => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`rounded-[14px] border border-[#EDF2F7] box p-[16px] max-sm:p-[10px] flex flex-col gap-[10px] ${theme ==  "dark" ? "bg-neutral-900 text-white border-neutral-800" : "bg-white text-black border-[#EDF2F7]"}`}>
        <div className='flex justify-between items-center '>
            <div className={`p-[10px] border rounded-full ${theme ==  "dark" ? "bg-neutral-900 text-white border-neutral-700" : "bg-white text-black border-[#EDF2F7]"}`}><img src={image} alt="" /></div>
            <div><img src={chart} alt="" /></div>
        </div>
        <div className='flex flex-col gap-[5px]'>
            <p className='card-title max-sm:text-base'>{title}</p>
            <p className='card-amount max-sm:text-xl'>{amount}</p>
        </div>
        <div className={`flex gap-[10px] max-sm:gap-x-[6px] justify-start items-center`}>
            <div className={`flex items-center gap-x-[4px]  gap-y-[2px]  ${color === 'green'? 'green-percent' : color === 'red'?'red-percent':''}`}>
                <img src={color === 'green'? greenarrow : color === 'red'?redarrow:''} alt="" className='w-[9px] h-[5px]' />
                <p className='card-percent'>{percentage}%</p>
            </div>
            <div>
                <p className='previous text-sm max-lg:text-xs '>vs. previous month</p>
            </div>
        </div>
    </div>
  )
}

export default AnalyticsCard