import { Layout } from './components/Layout/Layout';
import {Routes, Route} from 'react-router'
import { MainPage } from './pages/MainPage';
import { ProductPage } from './pages/ProductPage';
import { FavoiteProductPage } from './pages/FavoiteProductPage';
import { CartPage } from './pages/CartPage';
import { AuthPage } from './pages/AuthPage';
// import { Loader } from './components/loader/Loader';
// import { ErrorPage } from './pages/ErrorPage';



function App() {
  return ( 
    <Layout >
      <Routes>
      <Route index path='/' element={<MainPage/>} /> 
      <Route  path='product/:id' element={<ProductPage/>}/> 
      <Route  path='favorites' element={<FavoiteProductPage/>} /> 
      <Route  path='cart' element={<CartPage/>}/> 
      <Route  path='login' element={<AuthPage/>} /> 
     </Routes>
     </Layout>
  );
}

export default App;
