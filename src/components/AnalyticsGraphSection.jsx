import React, { useContext } from 'react'
import AnalyticsTable from './AnalyticsTable'
import AnalyticsChart from './AnalyticsChart'
import { ThemeContext } from '../../ThemeContext'

const AnalyticsGraphSection = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`w-full h-full  p-6 pr-2   max-xl:py-0 max-xl:p-4 bg-[#FAFAFA] grid gap-4 max-xl:gap-8 ${theme ==  "dark" ? "bg-black text-white" : "bg-[#fafafa]"} `}>
      <div className='max-xl:hidden'>
        <AnalyticsChart/>
      </div>
        <AnalyticsTable/>
    </div>
  )
}

export default AnalyticsGraphSection