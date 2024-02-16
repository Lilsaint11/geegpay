import React, { useContext } from 'react'
import box from './images/box.png'
import category from './images/category.png'
import discount from './images/discount-shape.png'
import info from './images/info-circle.png'
import moon from './images/moon.png'
import profile from './images/profile.png'
import trend from './images/trend-up.png'
import vector from './images/Vector.png'
import sun from './images/sun.png'
import arrowright from './images/arrow-right.png'
import setting from './images/setting-2.png'
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

const SideBarComponent = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    console.log(theme)
    return (
        <div className={`sidebar h-screen justify-between left-0  sticky top-0 border-r max-md:hidden ${theme == "dark" ? "bg-black border-neutral-800" : "bg-[#f7f8fa] border-[#EBECF2]"}`}>
            <div className='flex flex-col gap-[10px] items-center'>
                <button className='p-[10px]'>
                    <img src={vector} alt={`Image `} className='w-[40px] h-[40px]' />
                </button>
                <button className={`p-[10px] relative active:scale-150   rounded-full w-full flex justify-center selected-button ${theme==='dark'?'invert':''}`}>
                                    <img className='w-[24px] h-[24px]' src={category} alt={`Image`} />
                                </button>
                {
                    imageList.map((item, index) => {
                        return (
                            <>
                                <button className='p-[10px] active:scale-150 hover:scale-125 duration-150 group rounded-full w-full flex justify-center '>
                                    <img className='w-[24px] h-[24px] group-hover:brightness-75' src={item} alt={`Image ${index}`} />
                                </button>
                            </>
                        )
                    })
                }
                <div className={`flex items-center flex-col gap-[16px] p-[8px] duration-200 hover:bg-neutral-700  rounded-[100px] ${theme==="dark"?'bg-neutral-800 hover:bg-neutral-700':'bg-neutral-200 hover:bg-neutral-400'} cursor-pointer `} onClick={toggleTheme} >
                    <button className=''>
                        <img src={sun} alt={`Image `} className={` ${theme==="dark"?"opacity-0":''} duration-150`}/>
                    </button>
                    <button className=''>
                        <img src={moon} alt={`Image `} className={` duration-150 ${theme==="dark"?"group-hover:brightness-150 brightness-200":'group-hover:brightness-75 invisible'}`} />
                    </button>
                </div>
            </div>
            <div className='flex items-center flex-col gap-[10px] p-[10px] mb-16'>
                {
                    logoutList.map((item, index) => {
                        return (
                            <button className='p-[10px] hover:scale-125 duration-150 group active:scale-150 rounded-full '>
                                <img className='w-[24px] h-[24px] group-hover:brightness-75' src={item} alt={`Image ${index}`} />
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideBarComponent