
import {Favorites} from "./Favorites"
import { Login } from "./Login"
import { MenuButton } from "./MenuButton"
import { Search } from "./Search"
import { Cart } from './Cart';

export const Navbar = () => {
 
  return (
    <nav className='container flex items-center justify-between px-4 mx-auto h-16 bg-gradient-to-l from-black/50 via-purple-800 to-blue-800 rounded-b-md'>
      <MenuButton/>
      <Search/>
      <div className="flex items-center justify-between basis-36">
      <Favorites/>
      <Cart/>
      <Login/>
      </div>
    </nav>
  )
}
