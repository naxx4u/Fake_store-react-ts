import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { GoToMainButton } from '../components/Buttons/GoToMainButton';
import { Product } from '../Types/ProductTypes';
import { FavoritProductItem } from '../components/Product-components/FavoritProductItem';
import { NoProducts } from '../components/Product-components/NoProducts';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteAllProducts } from '../redux/Slices/ProcuctSlices/Favorites';
import { FaTrashAlt } from 'react-icons/fa';




export const FavoiteProductPage = () => {
    const favorite = useSelector((state: any) => state.favorites.favoriteProduct)
    const dispatch = useDispatch()
    const deleteAll = () => {
        dispatch(deleteAllProducts())
    }

    useEffect(() => {
        document.title = "Favorite"
    })

    return (
        <>
            <div className='flex flex-col items-center justify-center mt-12 '>
                {favorite.length > 0 ?
                    favorite.map((product: Product, index: number) =>
                        <FavoritProductItem product={product} key={index} />
                    ) : <NoProducts />}

                {favorite.length >= 1 ?
                    <Button variant="contained" color="error" onClick={deleteAll}>
                      
                        Delete All <FaTrashAlt />
                    </Button> : null
                }
            </div>
            <GoToMainButton />
        </>
    )
}
