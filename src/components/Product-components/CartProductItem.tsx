import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Product } from '../../Types/ProductTypes'
import { deleteFromCart } from '../../redux/Slices/ProcuctSlices/Cart'
import { Link } from 'react-router-dom';

export const CartProductItem = ({product}:Product) => {

    const dispatch = useDispatch()
    const deleteOne = () => {
        dispatch(deleteFromCart(product.id))
    }

  return (
     
            <div className=' w-2/3 flex flex-row items-center justify-between my-4 p-4  border-2 border-purple-900  shadow-xl rounded-md'>
                <Link to={`/product/${product.id}`}>
               <div className="flex items-center justify-center gap-2">
               <img className="h-20 w-20"
                src={product.images?.[0]}
                alt={product.title} />
                <span className="text-md">{product.title}</span>
               </div>
               </Link>
                <div className="w-20 flex items-center  gap-2">
                   
                <span className="text-white text-md ">
                    {product.price} $
                </span>
                <button className="hover:text-red-500"
                        onClick={deleteOne}
                >
                    <FaTrashAlt/>
                    </button>
                </div>
            </div>
       
  )
}
