import React from 'react'
import { useContext } from 'react'
import { FetchContext } from '../db/FetchContext'

const Sumz = () => {
  const { fetchData, inputLink, handleInput, apiData, loading } = useContext(FetchContext)
  return (
    <div className='flex flex-col py-5 px-auto h-fit mb-5' >
        <div className='flex flex-col text-center'> 
        <h1 className='text-5xl'>FREE SUMMARY GENERATOR</h1>
        <h1 className='text-5xl text-violet-950	'>OPEN AI GPT-4</h1>
        <p className='mx-auto'>Simplify your content writing with our text summary generator. Transform your paragraphs, articles, and other long text into digestible and engaging copy in one click.</p>
        
        </div>
        <div className='bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 h-30 flex flex-row my-5 px-2 rounded-md mx-auto py-auto w-[300px] md:w-[500px]'>
            <input className='w-full bg-transparent h-10 focus:outline-none invalid:border-pink-500' type='url' value={inputLink} onChange={handleInput}  />
            <button className='bg-transparent' onClick={fetchData}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clip-rule="evenodd" />
</svg>

</button>
        </div>
        <div className='mx-auto '>
        {apiData === null ? <span></span> : <h1 className='text-left text-2xl py-3  '>Article Summary</h1>}
          

        {loading && (
        <div><button type="button">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-violet-800 text-3xl" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </button></div>
      )}
      {!loading && apiData && (
        <div className='py-5 px-5 h-max bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-md w-[350px] md:w-[600px] mx-auto text-left'>
          {apiData} 
        </div>
      )}
        
        </div>
    </div>
  )
}

export default Sumz