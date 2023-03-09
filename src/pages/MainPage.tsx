import {useState, useEffect} from 'react'
import axios from 'axios'
import { ProductItem } from '../components/Product-components/ProductItem'
import { Loader } from '../components/loader/Loader'
import { GoToTopButton } from '../components/Buttons/GoToTopButton'
import { Product } from '../Types/ProductTypes'
import {allProductURL, onlyClothesURL, onlyFurnitureURL, onlyShoesURL, oblyWatchesURL, onlyOtherURL} from '../Helpers/Url'
import { MainPageCategory } from '../components/Product-components/MainPageCategory'


export const MainPage = () => {
    const [products, setProducts] = useState([])
    const [fetchUrl, setFetchUrl] = useState(allProductURL)
    const [fetching, setFetching] = useState(true)    
    const [limitProduct, setLimitProduct] = useState(20)
    const [showTopButton, setShowTopButton ] = useState(false)

    const [AllProActiveTab, setAllProdActiveTab] = useState(true)
    const [ClothesActiveTab, setClothesActiveTab] = useState(false)
    const [WatchesActiveTab, setWatchesActiveTab] = useState(false)
    const [FurnitureActiveTab, setFurnitureActiveTab] = useState(false)
    const [ShoesActiveTab, setShoesActiveTab] = useState(false)
    const [OtherActiveTab, setOtherActiveTab] = useState(false)
    

    const getAllproductsHandler = () => {
      setFetchUrl(allProductURL)
      setFetching(true)
      setLimitProduct(20)
      setAllProdActiveTab(true)
      setClothesActiveTab(false)
      setClothesActiveTab(false)
      setWatchesActiveTab(false)
      setFurnitureActiveTab(false)
      setShoesActiveTab(false)
      setOtherActiveTab(false)
    }

    const getOnlyClothesHandler = () => {
      setFetchUrl(onlyClothesURL)
      setFetching(true)
      setLimitProduct(20)
      setAllProdActiveTab(false)
      setClothesActiveTab(false)
      setClothesActiveTab(true)
      setWatchesActiveTab(false)
      setFurnitureActiveTab(false)
      setShoesActiveTab(false)
      setOtherActiveTab(false)
    }

    const getOnlyFurnitureHandler = () => {
      setFetchUrl(onlyFurnitureURL)
      setFetching(true)
      setLimitProduct(20)
      setAllProdActiveTab(false)
      setClothesActiveTab(false)
      setClothesActiveTab(false)
      setWatchesActiveTab(false)
      setFurnitureActiveTab(true)
      setShoesActiveTab(false)
      setOtherActiveTab(false)
    }
    const getOnlyShoesHandler = () => {
      setFetchUrl(onlyShoesURL)
      setFetching(true)
      setLimitProduct(20)
      setAllProdActiveTab(false)
      setClothesActiveTab(false)
      setClothesActiveTab(false)
      setWatchesActiveTab(false)
      setFurnitureActiveTab(false)
      setShoesActiveTab(true)
      setOtherActiveTab(false)
    }
    const getOnlyWatchesHandler = () => {
      setFetchUrl(oblyWatchesURL)
      setFetching(true)
      setLimitProduct(20)
      setAllProdActiveTab(false)
      setClothesActiveTab(false)
      setClothesActiveTab(false)
      setWatchesActiveTab(true)
      setFurnitureActiveTab(false)
      setShoesActiveTab(false)
      setOtherActiveTab(false)
    }
    const getOnlyOtherHandler = () => {
      setFetchUrl(onlyOtherURL)
      setFetching(true)
      setLimitProduct(20)
      setAllProdActiveTab(false)
      setClothesActiveTab(false)
      setClothesActiveTab(false)
      setWatchesActiveTab(false)
      setFurnitureActiveTab(false)
      setShoesActiveTab(false)
      setOtherActiveTab(true)
    }



    const scrollHandler = (e:any) => {
      if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
          setFetching(true)       
      }
    }



    useEffect(() => {
      window.addEventListener('scroll',scrollHandler )
      return function(){
        window.removeEventListener('scroll',scrollHandler )
      }
    }, [])

    useEffect(() => {
      if(fetching){
        axios.get(`${fetchUrl + `?offset=0&limit=${limitProduct}`}`)
        .then(res => {
          setProducts(res.data)
          setLimitProduct(prev => prev+20)
        })
        .finally(() => setFetching(false))
      }
        
    }, [fetchUrl, limitProduct, fetching, products  ])
    
    useEffect(() => {
      document.title = 'Platzi Fake Store API'
     }, [])

     useEffect(() => {
           window.addEventListener('scroll', () => {
            window.scrollY > 180 ? setShowTopButton(true) :  setShowTopButton(false)  
           })
     }) 

  if(products.length <= 0 ){
  return  <Loader/>
  }
  
  return (
    <>
  <MainPageCategory
  AllProActiveTab={AllProActiveTab}
  ClothesActiveTab={ClothesActiveTab}
  WatchesActiveTab={WatchesActiveTab}
  FurnitureActiveTab={FurnitureActiveTab}
  ShoesActiveTab={ShoesActiveTab}
  OtherActiveTab={OtherActiveTab}
  getAllproductsHandler={getAllproductsHandler}
  getOnlyClothesHandler={getOnlyClothesHandler}
  getOnlyFurnitureHandler={getOnlyFurnitureHandler}
  getOnlyShoesHandler={getOnlyShoesHandler}
  getOnlyWatchesHandler={getOnlyWatchesHandler}
  getOnlyOtherHandler={getOnlyOtherHandler}
  />
    <div className='container mx-auto mt-12 flex flex-row gap-20 flex-wrap justify-between '>
     
        {
          products?.map((product: Product, index: number) =>
         
          <ProductItem  product={product} key={index}/>)
        }
    </div>
    {showTopButton && <GoToTopButton/>}
    </>
  )
}
