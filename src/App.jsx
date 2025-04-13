import React from 'react'
import Header from './components/header/Header'
import List from './components/list/List'

const App = () => {
  return (
    <div className='min-h-screen bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)] dark:bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)] 2xl:px-60 lg:px-40 md:px-25 px-10 py-10'>
        <Header/>
        <List/>
    </div>
  )
}

export default App