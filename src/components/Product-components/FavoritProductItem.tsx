import {useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from 'react-icons/fa'
import {GiBasket} from 'react-icons/gi'
import { deleteProduct } from '../../redux/Slices/ProcuctSlices/Favorites';
import { Product } from '../../Types/ProductTypes';
import { addToCart } from '../../redux/Slices/ProcuctSlices/Cart'

export const FavoritProductItem = ({product}:Product) => {
    const dispatch = useDispatch()

    const addToFavorites = () => {
        dispatch(addToCart(product))
        dispatch(deleteProduct(product.id)) 
      }
    
    const deleteFromFavorite = (e:any) => {
        e.stopPropagation()
        dispatch(deleteProduct(product.id))      
    }

  return (
    <div className='flex items-center justify-between w-1/4 my-2 p-4 border-2 border-purple-900 rounded-md shadow-xl'>
    <Link className='flex items-center gap-2'
     to={`/product/${product.id}`} >
        <img className='h-20 rounded-sm'
            src={product.images?.[0]}
            alt={product?.title} />
        <span className='text-md text-white/90'>{product?.title}</span>
    </Link>   
        <div className='flex items-center gap-2'>
        <span className='text-white'>{product?.price} $</span>
        <button className='hover:text-red-600'
        onClick={deleteFromFavorite}
        >
            <FaTrashAlt/>
        </button>

        <button className='text-xl hover:text-white/75'
        onClick={addToFavorites}
        >
            <GiBasket/>
        </button>
        </div>
    
    </div>
)}
