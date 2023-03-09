import { useState } from 'react'
import {FaKey} from 'react-icons/fa'
import {RiAccountCircleFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('token') ? true : false
  const [loginMenu, setLoginMenu] = useState(false)
  const logout = () => {  
    localStorage.removeItem('token')
    navigate('/login')
    setLoginMenu(false)
  }
  return (
    <div className='relative'   >
      {isAuth ?
      <button className='text-2xl text-white'
       onClick={() => setLoginMenu(!loginMenu)}
      //  onBlur={() => setLoginMenu(false)}   
       >
        <RiAccountCircleFill/>
      </button>
        :
      <button className='flex items-center justify-center gap-1 px-2 py-1 text-sm text-white bg-sky-400/50 rounded-md border-2 hover:border-purple-600 '
      onClick={() => navigate('/login')}
      >
        <span>Login </span>
        <span><FaKey/></span>
      </button>
    }
    {loginMenu &&
    <ul className='absolute top-6 -right-4 h-auto w-20 bg-sky-300 rounded-md shadow-xl'>
      <li className='py-1 px-2 hover:bg-slate-400 duration-150 hover:text-slate-200 cursor-pointer hover:rounded-t-md'>Profile</li>
      <li className='py-1 px-2 hover:bg-slate-400 duration-150 hover:text-slate-200 cursor-pointer'>History</li>
      <li className='py-1 px-2 hover:bg-slate-400 duration-150 hover:text-slate-200 cursor-pointer'>Orders</li>
      <li className='py-1 px-2 hover:bg-slate-400 duration-150 hover:text-slate-200 cursor-pointer hover:rounded-b-md border-t-2 border-slate-900 '
      onClick={logout}
      >Logout</li>
    </ul>
    }
    </div>
  )
}
