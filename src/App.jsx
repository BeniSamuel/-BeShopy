import react from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  )
};

export default App;