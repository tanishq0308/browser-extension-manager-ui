import React, { useEffect, useState } from 'react'
import moon from '../../assets/images/icon-moon.svg'
import sun from '../../assets/images/icon-sun.svg'

const ToggleButton = () => {
    const [darkMode,setDarkMode]= useState(()=>{
        localStorage.getItem('theme') === 'dark'
    })

    useEffect(()=>{
        const root= window.document.documentElement;
        if(darkMode){
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    },[darkMode]);


  return (
    <div className='bg-gray-200 hover:cursor-pointer dark:hover:bg-[#8490b356] p-4 rounded-xl transition-all duration-200 ease-in-out dark:bg-[#54596956] active:ring-red-400 active:ring-2' onClick={()=>setDarkMode(!darkMode)}>
        {
            darkMode ?
            <img src={sun} alt="" />
            :
            <img src={moon} alt="" />
        }
  </div>
  )
}

export default ToggleButton