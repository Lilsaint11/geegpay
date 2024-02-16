import React, { useContext, useEffect, useRef, useState } from 'react'
import search from './images/searchicon.svg'
import calender from './images/calender-icon.svg'
import bell from './images/bellicon.svg'
import profile from './images/profile-user.png'
import down from './images/arrowdown.svg'
import vector from './images/Vector.png'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { SlLogout } from "react-icons/sl";

import MobileSideBar from './MobileSideBar'
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeContext } from '../../ThemeContext'
const HeaderComponent = () => {
    const {theme} = useContext(ThemeContext)
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [isDropdown, setIsDropdown] = useState(false)
    const currentDate = new Date();
    const [isAnimating, setIsAnimating] = useState(false);
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    const dropdownRef = useRef(null);

    // UseEffect to add event listeners
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (isDropdown && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdown(false);
          }
        };
      
        const handleEscapeKey = (event) => {
          if (isDropdown && event.key === 'Escape') {
            setIsDropdown(false);
          }
        };
      
        // Attach event listeners on mount if the dropdown is open
        if (isDropdown) {
          document.addEventListener('mousedown', handleClickOutside);
          document.addEventListener('keydown', handleEscapeKey);
        }
      
        // Detach event listeners on unmount
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          document.removeEventListener('keydown', handleEscapeKey);
        };
      }, [isDropdown, setIsDropdown]);
  
    const handleLogoutClick = () => {
      // Implement your logout logic here
      setIsDropdown(false); // Close the dropdown after clicking "Logout"
    };
    const Sidebar = () => {
        return (
            <motion.div className="fixed top-0 left-0  w-full ">
                <motion.div key="sss" className='flex justify-between'>
                    <motion.div key={'asdas'} initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className=' bg-black w-full flex justify-end bg-opacity-75'>
                        <motion.div onClick={() => { setIsSideBarOpen(false) }} className='w-full'>

                        </motion.div>
                        <motion.div key={'sadasd'} initial={{ x: '100%' }} animate={{ x: '0%' }} exit={{ x: "100%" }} transition={{ duration: '0.2' }} className=''>
                            <MobileSideBar onClick={() => { setIsSideBarOpen(false); document.body.style.overflowY='scroll' } } />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        )
    }
    const DropdownMenu = () => {


        return (
            <motion.div onAnimationEndCapture={() => setIsAnimating(false)} ref={dropdownRef}  tabIndex="0" initial={{opacity:0.3,scale:0.5,y:-70}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0,y:-70}} className={`absolute inline-block text-left top-16 right-8 max-md:right-0`}>
                <div className={` mt-2 w-36 rounded-xl shadow-lg  ring-1 ring-black ring-opacity-5 ${theme==='dark'?'bg-neutral-900 text-white border-neutral-800 border':'bg-white text-gray-700 border-neutral-200 border'}`}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div
                            className=" block px-4 py-2 text-sm leading-5     border-b border-neutral-300 font-semibold
                    "
                        >
                            My Account
                        </div>
                        <div
                            className={`cursor-pointer block px-4 py-2 text-sm leading-5  ${theme==='dark'?'bg-neutral-900 text-white hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none':'bg-white text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900'}
                    `}
                        >
                            Profile
                        </div>
                        <div
                            className={`cursor-pointer block px-4 py-2 text-sm leading-5  ${theme==='dark'?'bg-neutral-900 text-white hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none':'bg-white text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900'}
                            `}
                        >
                            Subscriptions
                        </div>
                        <div
                            className={`cursor-pointer block px-4 py-2 text-sm leading-5  ${theme==='dark'?'bg-neutral-900 text-white hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none':'bg-white text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900'}
                            `}
                        >
                            Subscriptions
                        </div>
                        <div
                            className={`cursor-pointer block px-4 py-2 text-sm leading-5  ${theme==='dark'?'bg-neutral-900 text-white hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none':'bg-white text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900'}
                            `}
                        >
                            Management
                        </div>
                        <div
                            className={`cursor-pointer px-4 py-2 flex items-center gap-2 text-sm leading-5  ${theme==='dark'?'bg-neutral-900 text-red-500 hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:text-red-800':'bg-white text-red-500 hover:bg-neutral-100 focus:outline-none focus:bg-gray-100 focus:text-red-800'}
                            `}
                            onClick={handleLogoutClick}
          tabIndex="0"
                        >

                             <SlLogout/>Log Out
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };
    
    return (
        <div className={`header w-full sticky top-0 max-md:py-[14px] z-50 ${theme === "dark" ? "bg-black border-b border-neutral-800" : "bg-[#FAFAFA] border-b border-neutral-200"}`}>
            <div className='flex items-center justify-between gap-[20px] '>
                <div className='flex justify-between items-center w-3/5 max-xl:w-1/2 max-lg:w-auto'>
                    <div>
                        <p className={`dashboard-title max-md:hidden ${theme == "dark" ? "text-white" : "bg-[#FAFAFA] text-[#26282C]"}`}>Dashboard</p>
                        <img src={vector} className='md:hidden' alt="" />
                    </div>

                    <div className='  w-[333px]  flex items-center max-lg:hidden'>
                        <button className={`pl-[13px] pr-[6px] h-[48px] border border-[#dadddd] border-r-0 rounded-tl-[24px] rounded-bl-[24px] overflow-hidden ${theme == "dark" ? " bg-black border border-neutral-800" : "bg-white border border-neutral-200"}`}>
                            <img src={search} alt="" className='w-[18px] h-[18px] ' />
                        </button>
                        <input type="text" placeholder='Search...' className={`font-[Inter] overflow-hidden w-full outline-none border-l-0 border border-[#dadddd]  rounded-br-[24px]  rounded-tr-[24px] h-[48px] ${theme == "dark" ? " bg-black border border-neutral-800 text-neutral-400" : "bg-white border border-neutral-200"}`} />
                    </div>
                </div>
                <div className='flex items-center justify-end w-2/5 gap-[20px] max-xl:w-1/2 max-lg:w-auto relative '>
                    <div className='flex gap-[10px] px-[16px] max-md:hidden'>
                        <img src={calender} alt="" className={`w-[20px] h-[20px] ${theme == "dark" ? "invert" : ""}`} />
                        <p className={`date ${theme == "dark" ? "text-white" : "bg-[#FAFAFA] text-[#26282C]"}`}>{formattedDate}</p>
                    </div>
                    <div className={`w-12 h-12 p-[11px] rounded-[27px] cursor-pointer justify-center items-center   flex max-md:hidden ${theme == "dark" ? "bg-black border border-neutral-800" : "bg-[#FAFAFA] border border-neutral-200"} relative`}>
                        <img src={bell} alt="" className={` ${theme == "dark" ? "invert" : ""}`} />
                        <div className={`flex items-center absolute bottom-[0px] right-[-5px] justify-center text-xs h-5 w-5 rounded-full bg-[#34caa5] text-neutral-50 font-bold ${theme == "dark" ? "" : ""} `}>
                            <span>3</span>
                        </div>
                    </div>
                            <AnimatePresence>
                                {
                                    isDropdown && !isAnimating && (<DropdownMenu />)
                                }
                            </AnimatePresence>
                            
                    <div className={`flex rounded-[28px]  py-[6px] px-[8px]    items-center gap-[12px] max-md:hidden ${theme == "dark" ? "bg-black border border-neutral-800" : "bg-[#FAFAFA] border border-neutral-200"}`} >
                        <div className='relative'>
                            <img src={profile} alt="" className='w-[38px] h-[38px]'  />
                        </div>
                        <div className='flex items-center'>
                            <div className='flex flex-col text-right'>
                                <p className={`user-name ${theme == "dark" ? "text-white" : "bg-[#FAFAFA] text-[#26282C]"}`}>Justin Bergson</p>
                                <p className={`user-email  ${theme == "dark" ? "text-neutral-500" : "bg-[#FAFAFA] text-[#787486]"}`}>Justin@gmail.com</p>
                            </div>
                        </div>
                        <div className='cursor-pointer'>
                            {
                                !isDropdown?(

                                    <img src={down} alt="" className={`w-[20px] h-[20px]  ${theme == "dark" ? "invert" : ""}`} onClick={() => setIsDropdown(true)} />
                                ):(
                                    <IoIosArrowUp className={`text-xl  ${theme == "dark" ? "invert" : ""}`} onClick={() => setIsDropdown(false)}/>
                                )
                            }
                        </div>
                    </div>
                    <div className='md:hidden flex gap-[10px] items-center'>
                        <img src={profile} className='w-[38px] h-[38px]' alt="" onClick={() => handleLogoutClick}/>
                        <button className='p-[8px]' onClick={() => { setIsSideBarOpen(true); document.body.style.overflowY='hidden' }}>
                            <HiOutlineMenuAlt4 className={`text-2xl ${theme ==='dark'?"text-white":"text-black"}`} />
                        </button>
                    </div>
                </div>
                <AnimatePresence>
                    {
                        isSideBarOpen && (<Sidebar />)
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}



export default HeaderComponent