import { Navbar } from '../Navbar/Navbar'

interface LayoutProps {
    children: JSX.Element
}

export const Layout = ({children} : LayoutProps ) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
