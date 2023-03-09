import { Button } from "@mui/material";
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GoToMainButton } from "../components/Buttons/GoToMainButton"
import { CartProductItem } from '../components/Product-components/CartProductItem';
import { Product} from "../Types/ProductTypes";
import { FaTrashAlt } from 'react-icons/fa'
import { deleteAllFromCart } from "../redux/Slices/ProcuctSlices/Cart";
import { NoProducts } from "../components/Product-components/NoProducts";
import { CartBuyButton } from "../components/Product-components/CartBuyButton";



export const CartPage = () => {
    
    const cart = useSelector((state: any) => state.cart.cartProduct)

    const totalPrice:any = cart.reduce((acc:any, product:Product) => acc += product.price , 0) 
    const deliveryPrice:any= totalPrice >= 1000 ? 0 :  100
    const finalPrice:any = totalPrice + deliveryPrice 
  

    const dispatch = useDispatch()

    const deleteAll = () => {
        dispatch(deleteAllFromCart())
    }
    useEffect(() => {
        document.title = "Cart"
    })

  return (
    <>
    <div className='container mx-auto my-20 w-full flex  justify-center'>
    <div className="flex flex-col items-center  h-auto w-full  ">  
        {   cart.length >= 1 ?
            cart.map((product:Product, index:number) => 
             <CartProductItem product={product} key={index} />)  
             : <NoProducts/>  
        }
   {cart.length >= 1 ?
     <Button  variant="contained" color="error" onClick={deleteAll}>
        Delete All <FaTrashAlt/>
    </Button> : null
   }
    </div>
    <CartBuyButton totalPrice={totalPrice} deliveryPrice={deliveryPrice} finalPrice={finalPrice}/>
    </div>
    <GoToMainButton/>
    </>
  )
}




