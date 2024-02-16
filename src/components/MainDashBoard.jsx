import React, { useContext, useEffect } from 'react'
import AnalyticsGraphSection from './AnalyticsGraphSection'
import OrdersSection from './OrdersSection'
import AnalyticsGrid from './AnalyticsGrid'
import TopPlatform from './TopPlatform'
import AnalyticsChart from './AnalyticsChart'
import { ThemeContext } from '../../ThemeContext'
import AOS from 'aos';
import 'aos/dist/aos.css';
const MainDashBoard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { theme } = useContext(ThemeContext)
  return (
    <div className={` ${theme == "dark" ? " text-white bg-black" : "bg-[#fafafa]"}`}>
      <div className={`flex ${theme == "dark" ? " text-white bg-black" : "bg-[#fafafa]"} `}>
        <div className='w-3/5 max-xl:w-full h-fit flex flex-col gap-8 max-xl:py-6 max-xl:pb-32 max-md:pb-16 '>
          <div className='px-4 xl:hidden' data-aos="fade-up">
            <AnalyticsChart />
          </div>
          <AnalyticsGrid  />
          <AnalyticsGraphSection  />
          <div className='xl:hidden px-4'>
            <TopPlatform />
          </div>
        </div>
        <div className='w-2/5 max-xl:hidden'>
          <OrdersSection />
        </div>
      </div>
    </div>
  )
}

export default MainDashBoard