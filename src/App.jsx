import react from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Shop from './Pages/Shop/Shop';
import Product from './Pages/Product/Product';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';

const App = () => {
  return (
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
    </Router>
  )
};

export default App;