import React, { useContext } from 'react'
import HeaderComponent from './components/HeaderComponent'
import MainDashBoard from './components/MainDashBoard'
import { ThemeContext} from '../ThemeContext'
import SideBarComponent from './components/SideBarComponent'

const App = () => { 
  const {theme} = useContext(ThemeContext);
  return (

      <div className={`flex font-[Inter]  ${theme ==  "dark" ? " text-white bg-black" : "bg-[#fafafa]"}`}>
        <div  className='z-50' >
          <SideBarComponent />
        </div>
        <div className='w-full h-full'>
          <HeaderComponent />
          <MainDashBoard/>
        </div>
      </div>
    
  )
}

export default App