import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ProductDetails from './components/productDetails/ProductDetails';
import Categories from './components/category/Categories';
import Cart from './components/Cart/Cart';
import Products from './components/products/Products';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/productdetails/:id' element={<ProductDetails />} />
      <Route path='/products' element={<Products />}  />
      <Route path='/cart' element={<Cart />}  />
      <Route path='/category' element={<Categories />}  />
     </Routes>
     <Footer />
    </BrowserRouter>
  )
}

export default App
