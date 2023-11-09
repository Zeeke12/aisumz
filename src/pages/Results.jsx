import React, { useContext } from 'react'
import { FetchContext } from '../db/FetchContext'

const Results = () => {
  const { apiData } = useContext(FetchContext)
  return (
    <>
    {apiData === null ? <span></span> : <div className='py-5 px-5 h-fit bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-md'>
      {apiData}
    </div>}
    </>
  )
}

export default Results