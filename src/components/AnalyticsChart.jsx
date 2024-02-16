import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { ThemeContext } from '../../ThemeContext';

const data = [
  { name: 'Jan', value: 16000 },
  { name: 'Feb', value: 26000 },
  { name: 'Mar', value: 17000 },
  { name: 'Apr', value: 38000 },
  { name: 'May', value: 19000 },
  { name: 'Jun', value: 50000 },
  { name: 'Jul', value: 60000 },
  { name: 'Aug', value: 27000 },
  { name: 'Sep', value: 45000 },
  { name: 'Oct', value: 33000 },
  { name: 'Nov', value: 40000 },
  { name: 'Dec', value: 36000 },
];
  const AnalyticsChart = () => {
    const {theme} = useContext(ThemeContext)
    const yTicks = [0, 15000, 30000, 45000,60000];
    const tickStyle = {
      fill: '#878787', 
      fontSize: 14,   
    };
    return (
      <div className={`p-[20px] select-none  border box  rounded-[14px] flex flex-col gap-3 ${theme ==  "dark" ? "bg-neutral-900 text-black border-neutral-800" : "bg-white border-[#EDF2F7]"} `}>
        <div className='flex justify-between'>
          <h2 className={` text-[18px] font-medium font-["Plus Jakarta Sans"] ${theme ==  "dark" ? "text-white":"text-[#26282C]"}`}>Sales Trends</h2>
          <div className={`flex text-[#3A3F51] items-center text-[15px] gap-3`}>
            <p className={`${theme ==  "dark" ? "text-white":"text-[#26282C]"}`}>Short by:</p>
            <div className={`border rounded-full py-2 px-4 font-light ${theme ==  "dark" ? "bg-neutral-900 border-neutral-700 text-white" : "bg-white border-neutral-200"} `}>
              <select name=""  id="" className={`outline-none ${theme ==  "dark" ? "bg-neutral-900 text-white" : "bg-white"} `} >
                <option value="weekly" >Daily</option>
                <option value="weekly" >Weekly</option>
                <option value="monthly" selected>Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={295}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ style: tickStyle }}/>
          <YAxis ticks={yTicks} tick={{ style: tickStyle }} />
          <defs>
            <linearGradient id="greenBlueGradient" x1="0%" y1="100%%" x2="0%" y2="150%">
              <stop offset="0%" style={{ stopColor: '#34CAA5', stopOpacity: 1 }} />
              <stop offset="200%" style={{ stopColor: '#83838300', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <Tooltip />
          
          <Bar dataKey="value" radius={[70, 70, 0, 0]} fill="url(#greenBlueGradient)" barSize={30}>
            <Bar.Background fill="#34CAA5" />
          </Bar>
        </BarChart>
        </ResponsiveContainer>

      </div>
      );
  };
  
  export default AnalyticsChart