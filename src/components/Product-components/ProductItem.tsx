import {useState} from 'react'
import { Link } from 'react-router-dom'
import {MdFavorite} from 'react-icons/md'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { Product } from '../../Types/ProductTypes'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/Slices/ProcuctSlices/Favorites'
import { addToCart } from '../../redux/Slices/ProcuctSlices/Cart'
import { Button } from '@mui/material'




export const ProductItem = ({product}:Product) => {

  const [description, setDescription] = useState(false) 
  
  const dispatch = useDispatch()
  const addToFavorites = () => {
    dispatch(addProduct(product))
  }
  const addProdToCart = () => {
    dispatch(addToCart(product))
  }


  return (
    <div className='flex flex-col gap-2 justify-center items-center  h-full w-72 px-10 '>
        <Link to={`product/${product.id}`}>
        <div className="h-92 w-60 flex items-center justify-center">
          <img className="h-40 w-40"
           src={product.images?.[0]} alt={product.title} />
        </div>
        <div className="text-xl text-center">{product.title}</div>
        </Link> 
        <div className="text-xs">{product.category?.name}</div>      
        {description ?
        <div className="text-sm text-center">{product.description}</div> : null }
         <Button
          variant='contained'
          color='info'
          onClick={() => setDescription(!description)} >
          {!description ? 'Show description' : 'hide description'}
        </Button>
        <div className="text-xl flex justify-between items-center w-36">
          <button className='text-yellow-400 focus:animate-spin'
          onClick={addToFavorites}
          >
          <MdFavorite/>
          </button>          
          {product?.price} $      
          <button className='text-white' 
          onClick={addProdToCart}
          >
            <RiShoppingCart2Fill/>
          </button>
        </div>
          <div className='flex flex-row gap-1 border-2 rounded-md p-2'>
            <img className='h-12 w-12 hover:scale-150 duration-300 cursor-pointer' src={product.images?.[0]} alt={product.title}/>
            <img className='h-12 w-12  hover:scale-150 duration-300 cursor-pointer' src={product.images?.[1]} alt={product.title}/>
            <img className='h-12 w-12  hover:scale-150 duration-300 cursor-pointer' src={product.images?.[2]} alt={product.title} />
          </div>
    </div>
  )
}
