import { useNavigate } from "react-router-dom"
import { GiBasket } from "react-icons/gi"
import { useSelector } from "react-redux"

export const Cart = () => {
  const navigate = useNavigate()
  const cart = useSelector((state: any) => state.cart.cartProduct)
  return (
    <div className="relative">
      <button
        className="text-xl text-white/80"
        onClick={() => navigate("cart")}
      >
        <GiBasket />
      </button>
      {cart.length >= 1 && (
        <span className=" flex items-center justify-center absolute bottom-0 right-0 h-3 w-3 rounded-full bg-red-600 text-xs text-white">
          {cart.length}
        </span>
      )}
    </div>
  )
}
