import react from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Shop from './Pages/Shop/Shop';
import Product from './Pages/Product/Product';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';
import { Toaster } from 'react-hot-toast';
import CartProvider from './Context/CartProvider';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/shop" element={<Shop/>} />
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Toaster
          position='bottom-right'
          toastOptions={{
            style: {
              color: "black",
              fontFamily: "poppins",
              duration: 10000
            }
          }}
        />
      </Router>
    </CartProvider>
    
  )
};

export default App;