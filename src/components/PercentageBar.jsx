import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../../ThemeContext';
const PercentageBar = ({ title, price, percentage, color, width }) => {
    const {theme} = useContext(ThemeContext)
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='flex flex-col percentbar gap-[16px] '>
            <h3 className=''>{title}</h3>
            <div className={`outward w-full overflow-hidden ${theme==='dark'?"bg-neutral-800":"bg-neutral-200"}`}>
                <div
                    className={`h-full rounded-[40px]`}
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-duration="800"
                    data-aos-easing="fade-right"
                    // data-aos-anchor-placement=""
                    data-aos-once="true"
                    style={{ width: width, backgroundColor: color }}
                ></div>
            </div>
            <div className='flex justify-between'>
                <p>{price}</p>
                <p>{percentage}</p>
            </div>
        </div>
    );
};

export default PercentageBar;
