import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export const Favorites = () => {
  const favorite = useSelector((state: any) => state.favorites.favoriteProduct)
  const navigate = useNavigate() 

  return (
    <div className='text-2xl flex items-center relative'>
        <button className='text-yellow-300' onClick={() => navigate('/favorites')}>
          {
           favorite?.length ? <MdFavorite/> : <MdFavoriteBorder/>
          }     
          </button>
         {
          favorite.length >= 1&&
          <span className=' flex items-center justify-center absolute bottom-0 right-0.5 h-3 w-3 rounded-full bg-red-600 text-xs text-white'>
          {favorite.length}
        </span>
         }
    </div>
  )
}
