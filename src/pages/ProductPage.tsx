import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { Button } from '@mui/material'
import { Product } from '../Types/ProductTypes' 
import axios from 'axios'
import { Loader } from '../components/loader/Loader';
import {FaShoppingCart} from 'react-icons/fa'
import {FcLikePlaceholder, FcLike} from 'react-icons/fc'
import { GoToMainButton } from '../components/Buttons/GoToMainButton';
import { addProduct } from '../redux/Slices/ProcuctSlices/Favorites';
import { addToCart } from '../redux/Slices/ProcuctSlices/Cart';



export const ProductPage = () => {
  const [product, setProduct] = useState<Product | any>()
  const [like, setLike] = useState(false)
  const [image, setImage] = useState(0)
  
  const {id} = useParams()

  const dispatch = useDispatch()

  const addToFavorites = () => {
    setLike(!like)
    dispatch(addProduct(product))
  }

  const addProdToCart = () => {
    dispatch(addToCart(product))
  }


  useEffect(() => {
      axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
       .then(res => setProduct(res.data))
  },[id])
  
  useEffect(() => {
    product?.title === undefined ?
    document.title = 'Loading...':
    document.title =`${product?.title}`
  },[product?.title])

  if(!product ){
    return <Loader/>
  }
  return (
    <div className='flex items-center justify-center mt-20'> 
      <div className='flex flex-col justify-center items-center gap-4 w-1/3  rounded-md p-5'>
        <div className='p-2'>
            <img className='h-72 rounded-md shadow-2xl'
             src={product?.images?.[image]} 
             alt={product?.title} />
        </div>
        <div className='flex flex-row gap-1 border-2 rounded-md p-2'>
            <img className='h-12 w-12 hover:scale-150 duration-300 cursor-pointer' src={product.images?.[0]} alt={product.title}
             onClick={() => setImage(0)}/>
            <img className='h-12 w-12  hover:scale-150 duration-300 cursor-pointer' src={product.images?.[1]} alt={product.title}
             onClick={() => setImage(1)}/>
            <img className='h-12 w-12  hover:scale-150 duration-300 cursor-pointer' src={product.images?.[2]} alt={product.title}
             onClick={() => setImage(2)}/>
          </div>
        <div className='text-xl text-white  text-center '>{product?.title}</div>
        <div className='text-sm w-72 text-white  text-center'>{product?.description}</div>
      
        <div className=' flex gap-20'>
            <Button
            variant='contained'
            color={!like ? 'warning' : 'error'}
            onClick={addToFavorites}>
            <span className='text-white text-xl'>
              {!like ? <FcLikePlaceholder/> : <FcLike/>}
            </span>
            <span className='text-white text-xl'>LIKE</span>
            </Button>

            <Button
              variant='contained'
              color='success'
              onClick={addProdToCart}
            >
              <span className='text-white text-xl'><FaShoppingCart/></span>
              <span className='text-white text-xl'>{product?.price}$</span>
            </Button>
        </div>
    </div>
    <GoToMainButton/>
    </div>
  )
}
