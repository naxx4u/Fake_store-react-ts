import React from 'react'
import loader from './loader.gif'

export const Loader = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>
    <img className='h-72 w-48  ' src={loader} alt={loader} />
   </div>
  )
}
