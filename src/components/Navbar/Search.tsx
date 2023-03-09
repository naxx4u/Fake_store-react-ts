import {useState, useEffect} from 'react'
import axios from 'axios'
import {FaSearch} from 'react-icons/fa'
import { Product } from '../../Types/ProductTypes'


export const Search = () => {
  const [products, setProducts] = useState([])
  const [value, setValue] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const getSearchItems = () => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(res => setProducts(res.data))
      setShowSearch(true)
  }

 const searchItems = products.filter((product:Product) => {
  return product.title?.toLowerCase().includes(value.toLowerCase())
 })


  useEffect(() => {
    setValue('')
  }, [])
  return (
    <div className='flex gap-1 relative basis-1'>
        <input 
        className='h-6 w-64 focus:w-72 ease-in-out duration-150 rounded-md focus:border-sky-400 placeholder:text-center'
        type="search"
        placeholder='Type something...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClick={getSearchItems}
        onBlur={() => setShowSearch(false)}
        />

    {
     ( showSearch &&  value?.length >= 1) &&
      <ul className='absolute top-6 min-h-0 max-h-64 w-72 z-30 shadow-2xl rounded-md bg-white overflow-auto'>
      {products?.length && searchItems.map((product: Product, index:number) => 
      <li className='flex flex-col px-1 py-2 hover:bg-slate-300 cursor-pointer'
        key={index}>
        <span className='text-sm font-semibold'>{product.title}</span>
        <span className='text-xs '>{product.category?.name}</span>
      </li>)}
    </ul>
    }

        <button
        className='text-white'
        type="submit">
            <FaSearch/>
        </button>
    </div>
  )
}
