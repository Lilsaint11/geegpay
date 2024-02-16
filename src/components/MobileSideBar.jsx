import React, { useContext } from 'react'
import box from './images/box.png'
import category from './images/category.png'
import discount from './images/discount-shape.png'
import info from './images/info-circle.png'
import moon from './images/moon.png'
import profile from './images/profile.png'
import trend from './images/trend-up.png'
import bell from './images/solar_bell-outline.png'
import vector from './images/Vector.png'
import sun from './images/sun.png'
import arrowright from './images/arrow-right.png'
import setting from './images/setting-2.png'
import { IoClose } from "react-icons/io5";
import logout from './images/logout.png'
import { ThemeContext } from '../../ThemeContext'
const imageList = [
    trend,
    profile,
    box,
    discount,
    info,
]
const logoutList = [
    arrowright,
    setting,
    logout,
]
const MobileSideBar = ({ onClick }) => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={`sidebarmobile justify-between h-dvh top-0 relative ${theme === 'dark' ? "bg-neutral-900 border-l border-neutral-800" : 'bg-neutral-200 border-l border-neutral-300'}`}>
            <button className='absolute top-0 right-0 text-2xl p-2 text-neutral-400' onClick={onClick}>
                <IoClose />
            </button>
            <div className='flex flex-col gap-[6px] items-center' data-aos="fade-left" data-aos-duration="400">
                <button className='p-[16px] relative group rounded-full  flex justify-center mb-2' data-aos="fade-left" data-aos-duration='200' data-aos-delay="50">
                    <div className={`flex items-center absolute bottom-[10px] right-[8px] justify-center text-xs h-5 w-5 rounded-full bg-[#34caa5] text-neutral-50 font-bold ${theme == "dark" ? "" : ""} `}>
                        <span>3</span>
                    </div>
                    <img className={`w-[24px] h-[24px]  ${theme === "dark" ? "group-hover:brightness-150 invert" : 'group-hover:brightness-75'}`} src={bell} alt={`Image`} />
                </button>
                
                <button className='p-[16px] relative duration-150 group rounded-full  flex justify-center selected-button-mobile' data-aos="fade-left" data-aos-duration='200' data-aos-delay="100">
                    <img className={`w-[20px] h-[20px] group-hover:brightness-75  ${theme === "dark" ? "group-hover:brightness-150 invert" : 'group-hover:brightness-75'}`} src={category} alt={`Image`} />
                </button>
                {
                    imageList.map((item, index) => {
                        return (
                            <>
                                <button className={`p-[16px] hover:scale-125 active:scale-150 duration-150 group rounded-full  flex justify-center `} data-aos="fade-left" data-aos-duration='200' data-aos-delay={`${(index+2)*50}`}>
                                    <img className={`w-[20px] h-[20px] group-hover:brightness-75 ${theme === "dark" ? "group-hover:brightness-150 " : 'group-hover:brightness-75'} `} src={item} alt={`Image ${index} `} />
                                </button>
                            </>
                        )
                    })
                }
                <div data-aos="fade-left" data-aos-duration='200' data-aos-delay="400" className={`flex items-center flex-col gap-[16px] p-[8px] hover:bg-neutral-700  rounded-[100px] ${theme === "dark" ? 'bg-neutral-800' : 'bg-white'} cursor-pointer`} onClick={toggleTheme} >
                    <button className=''>
                        <img src={sun} alt={`Image `} className={` ${theme === "dark" ? "opacity-0" : ''} duration-150`} />
                    </button>
                    <button className=''>
                        <img src={moon} alt={`Image `} className={` duration-150 ${theme === "dark" ? "group-hover:brightness-150 brightness-200" : 'group-hover:brightness-75 invisible'}`} />
                    </button>
                </div>
            </div>
            <div className='flex items-center flex-col gap-[10px] p-[10px] mb-16'>
                {
                    logoutList.map((item, index) => {
                        return (
                            <button data-aos="fade-left" data-aos-offset='10' data-aos-duration='200' data-aos-delay={`${(index+9)*50}`} className='p-[10px] hover:scale-125 active:scale-150 duration-150 group rounded-full '>
                                <img className={`w-[24px] h-[24px] group-hover:brightness-75  ${theme === "dark" ? "group-hover:brightness-150 " : 'group-hover:brightness-75'}`} src={item} alt={`Image ${index}`} />
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MobileSideBar