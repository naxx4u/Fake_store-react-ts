import {useEffect, useState} from 'react'
import { useForm, SubmitHandler} from "react-hook-form";
import { useDispatch } from 'react-redux'
import { authUser } from '../redux/Slices/AutSlice/Auth'
import { GoToMainButton } from '../components/Buttons/GoToMainButton';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export type FormValues = {
  email: string;
  password: string;
};

export const AuthPage = () => {
    const [isAuth, setIsAuth] = useState<string | any>(null)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch<any>()
    const { register, handleSubmit, formState:{errors, isValid}} = useForm<FormValues>({  mode: 'onBlur' })

    const onSubmit: SubmitHandler<FormValues> = () => {
      dispatch(authUser({email, password}))
      setEmail('')
      setPassword('')
      setTimeout(() => setIsAuth(localStorage.getItem('token') ? true : false), 500)
    }

    
    useEffect(() => {
      setEmail('')
      setPassword('')
      isAuth ?  navigate('/') : navigate('/login')
      isAuth === false && alert('Oops... email or password incorrect')
    }, [isAuth, navigate])

    useEffect(() => {
      document.title = 'Login'
    })

  return (
    <>
    <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-6 h-80 w-72 bg-gradient-to-r from-slate-700  to-purple-600 border-2 border-slate-200 rounded-md shadow-2xl shadow-purple-700'
     onSubmit={handleSubmit(onSubmit)}
     autoComplete='off' 
    >
      <h1 className='text-2xl text-slate-200'>Login</h1>
      <label className='flex flex-col text-md text-slate-200'> 
      Email
        <input className='h-7 rounded-md text-slate-700 placeholder:text-slate-400 focus:ring-0 focus:outline-1 focus:outline-slate-200 placeholder:text-center'
         type="text" 
         placeholder='example@gmail.com' 
         value={email}         
       
         {...register('email', {
         
           minLength:{
            value:6,
            message: "To short email..."
          },
           onChange: (e) => setEmail(e.target.value),
           required: "Email is required",
           pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
          },)}/> 
         {errors?.email && <p className='text-red-600 text-center tex-xs'>{errors.email.message}</p>}          
      </label>

      <label className='flex flex-col text-md text-slate-200 '>
       Password
        <input className='h-7 rounded-md text-slate-700 placeholder:text-slate-400 focus:ring-0  focus:outline-1 focus:outline-slate-200 placeholder:text-center'
        type="password"  
        placeholder='enter your password'
        value={password}        
         
         {...register('password', {
          onChange: (e) => setPassword(e.target.value),
           minLength: {
            value:6,
            message: "Password is to short..."
           },          
           required: "Password is required"
          },)}/>   
        {errors?.password && <p className='text-red-600 text-center tex-xs'>{errors.password.message}</p>}    
      </label>
      <Button type='submit' variant='contained' color='secondary' size='large' disabled={!isValid}>
          Login
      </Button>
    </form>
    <GoToMainButton/>
    </>
  )
}
