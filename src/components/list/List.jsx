import React, { useEffect, useState } from 'react'
import Button from '../button/Button'
import { Lists } from '../../data/Constant'
import { Switch } from '@mui/material'

const List = () => {
  const [selected, setSelected] = useState('All'); 
  // const [status, setStatus] = useState();
  const [fullList, setFullList]= useState(Lists);
  let [newList, setNewList]= useState([]);
  useEffect(() => {
    let filtered;
    if (selected === 'Active') {
      filtered = fullList.filter((list) => list.isActive === true);
    } else if (selected === 'Inactive') {
      filtered = fullList.filter((list) => list.isActive === false);
    } else {
      filtered = fullList;
    }
    setNewList(filtered);
  }, [selected, fullList]); // dependency on Lists for safety

  const removeButtonHandle = (name) => {
    setFullList((prev) => prev.filter((list) => list.name !== name));
  };
  const toggleButton=(name)=>{
    setFullList((prev)=> 
      prev.map((list)=> 
        list.name === name ? {...list, isActive: !list.isActive} : list
  )
  );
  }
  return (
    <main className='pt-10'>
      <div className='flex justify-between items-center max-sm:flex-col max-sm: gap-4 transition-all duration-300 ease-in-out'>
        <div>
          <h1 className='font-noto-bold text-3xl text-[#09153e] dark:text-white'>Extensions List</h1>
        </div>
        <div className='flex gap-3'>
        <Button 
        text='All' 
        isSelected={selected === 'All'} 
        onClick={() => setSelected('All')} 
      />
      <Button 
        text='Active' 
        isSelected={selected === 'Active'} 
        onClick={() => setSelected('Active')} 
      />
      <Button 
        text='Inactive' 
        isSelected={selected === 'Inactive'} 
        onClick={() => setSelected('Inactive')} 
      />
        </div>
      </div>
        <div className='grid mt-8 gap-4 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 transition-all duration-300 ease-in-out'>
          {
            newList.map((list)=>(
              <div key={list.name} className='flex flex-col justify-between shadow-lg dark:bg-[#54596954] dark:text-white bg-white p-5 gap-10 md:gap-15 rounded-3xl dark:ring dark:ring-gray-600'>
                <div className='flex justify-start gap-4 '>
                  <div>
                    <img src={list.logo} alt="icons" className='w-23'/>
                  </div>
                  <div>
                    <h1 className='font-noto-bold text-lg text-[#09153e] dark:text-white'>
                      {list.name}
                    </h1>
                    <p className='text-[1rem] dark:text-[#ffffff8e] text-gray-600'>
                      {list.description}
                    </p>
                  </div>
                </div>
                <div className='flex  justify-between'>
                  <div>
                    <button className='ring-1 ring-gray-600 px-3.5 py-1 rounded-2xl active:ring-2 active:ring-red-400 hover:bg-red-500 transition-all ease-in-out duration-100' onClick={()=>removeButtonHandle(list.name)}>Remove</button>
                  </div>
                  <div>
                    <Switch color='warning' checked={list.isActive} onChange={()=>toggleButton(list.name)}/>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </main>
  )
}

export default List