import { ActiveTabs } from "../../Types/ProductTypes"
import {GiBasket, GiConverseShoe, GiDualityMask} from 'react-icons/gi'
import {RiTShirt2Fill} from 'react-icons/ri'
import {BsSmartwatch} from 'react-icons/bs'
import {MdChair} from 'react-icons/md'



export const MainPageCategory = ({
  AllProActiveTab,
  ClothesActiveTab,
  WatchesActiveTab,
  FurnitureActiveTab,
  ShoesActiveTab,
  OtherActiveTab,
  getAllproductsHandler,
  getOnlyClothesHandler,
  getOnlyFurnitureHandler,
  getOnlyShoesHandler,
  getOnlyWatchesHandler,
  getOnlyOtherHandler
}:ActiveTabs) => {
  return (
    <div className='container mx-auto  flex  items-center justify-center mt-12'>
    <ul className='flex justify-between flex-wrap  gap-4 '>
    <li onClick={getAllproductsHandler}
       className={` flex items-center gap-2 bg-white text-black/80 px-1 py-0.5 rounded-md border-2 border-sky-300 cursor-pointer hover:scale-105 duration-100 ${AllProActiveTab && ' border-red-500'} shadow-2xl shadow-white`}
       >
        <span className="text-purple-500"><GiBasket/></span>
        <span>All product</span>
       </li>
      <li onClick={getOnlyClothesHandler}
       className={` flex items-center gap-2 bg-white text-black/80 px-1 py-0.5 rounded-md border-2 border-sky-300 cursor-pointer hover:scale-105 duration-100  ${ClothesActiveTab && 'border-red-500'} shadow-2xl shadow-white`}
       >
        <span className="text-purple-500"> <RiTShirt2Fill/></span>
        <span>Clothes</span>
       </li>
      <li onClick={getOnlyWatchesHandler}
       className={` flex items-center gap-2 bg-white text-black/80 px-1 py-0.5 rounded-md border-2 border-sky-300 cursor-pointer hover:scale-105 duration-100  ${WatchesActiveTab && 'border-red-500'} shadow-2xl shadow-white`}
       >
        <span className="text-purple-500"><BsSmartwatch/></span>
        <span >Watches</span>
       </li>
      <li onClick={getOnlyFurnitureHandler}
       className={` flex items-center gap-2 bg-white text-black/80 px-1 py-0.5 rounded-md border-2 border-sky-300 cursor-pointer hover:scale-105 duration-100  ${FurnitureActiveTab && 'border-red-500'} shadow-2xl shadow-white`}
       >
        <span className="text-purple-500"><MdChair/></span>
        <span>Furniture</span>
       </li>
      <li onClick={getOnlyShoesHandler}
       className={` flex items-center gap-2 bg-white text-black/80 px-1 py-0.5 rounded-md border-2 border-sky-300 cursor-pointer hover:scale-105 duration-100  ${ShoesActiveTab && 'border-red-500'} shadow-2xl shadow-white`}
       >
        <span className="text-purple-500"><GiConverseShoe/></span>
        <span>Shoes</span>
       </li>
      <li onClick={getOnlyOtherHandler}
       className={` flex items-center gap-2 bg-white text-black/80 px-1 py-0.5 rounded-md border-2 border-sky-300 cursor-pointer hover:scale-105 duration-100  ${OtherActiveTab && 'border-red-500'} shadow-2xl shadow-white`}
       >
        <span className="text-purple-500"><GiDualityMask/></span>
        <span>Other</span>
       </li>
    </ul>
</div>
  )
}
