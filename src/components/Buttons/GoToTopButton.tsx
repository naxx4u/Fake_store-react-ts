import {FaArrowAltCircleUp}  from 'react-icons/fa'


export const GoToTopButton = () => {
    const goToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
  return (
    <div className='fixed bottom-10 right-10'>
        <button 
        className='text-4xl text-purple-800 animate-bounce'
        onClick={goToTop}
        >
            <FaArrowAltCircleUp/>
        </button>
    </div>
  )
}
