import {IoArrowBackCircleOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export const GoToMainButton = () => {
  const navigate = useNavigate()
  const goMaitBtn = () => {
    navigate('/')
  }
  return (
    
    <button 
    className='absolute top-20 left-[10%] text-5xl text-white bg-sky-800 rounded-full'
    onClick={goMaitBtn}   
    >
        <IoArrowBackCircleOutline/>
    </button>
  )
}
