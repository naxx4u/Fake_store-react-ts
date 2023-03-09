import { Button } from "@mui/material"

export const CartBuyButton = ({totalPrice, deliveryPrice, finalPrice}:any) => {
  return (
    <div className="mr-20 bg-slate-200/10 w-1/5 h-48 flex flex-col   border-2 border-purple-900 rounded-md shadow-2xl  ">
    <div className="flex flex-col item-center gap-2 p-2">
    <div className="text-center text-xl">Details</div>
    <div className="text-md text-slate-200 flex justify-between">
        <span>Price: </span> 
        <span>{totalPrice} $</span>
    </div>
    <div className="text-md text-slate-200  flex justify-between">
        <span>Delivery:</span>
        <span>{deliveryPrice !== 100 ? 'free' :  '100 $' }</span>
    </div>
    <div className="text-md text-slate-200  flex justify-between border-t-2">
        <span>Total:</span>
        <span>{finalPrice} $</span>
    </div>
    </div>
    <div className="flex items-center justify-center ">
    <Button disabled={totalPrice === 0 && true} className="w-32" variant="contained" color="info">
      Buy
    </Button> 
    </div>   
    </div>
  )
}
