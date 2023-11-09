import React from 'react'
import Results from './Results'
import { useContext } from 'react'
import { FetchContext } from '../db/FetchContext'

const Sumz = () => {
  const { fetchDataButton, inputLink, handleInput, apiData } = useContext(FetchContext)
  return (
    <div className='flex flex-col h py-5 px-[300px] '>
        <div className='flex flex-col text-center '>
        <h1 className='text-5xl'>FREE SUMMARY GENERATOR</h1>
        <h1 className='text-5xl text-violet-950	'>OPEN AI GPT-4</h1>
        <p>Simplify your content writing with our text summary generator. Transform your paragraphs, articles, and other long text into digestible and engaging copy in one click.</p>
        </div>
        <div className='bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 h-10 flex flex-row my-5 px-2 rounded-md'>
            <input className='w-full bg-transparent focus:outline-none' type='text' value={inputLink} onChange={handleInput}  />
            <button className='bg-transparent' onClick={fetchDataButton}>ENTER</button>
        </div>
        <div >
        {apiData === null ? <span></span> : <h1 className='text-left text-xl py-3'>Article Summary</h1>}
          
          <Results />
        </div>
    </div>
  )
}

export default Sumz