import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Gallery from './components/gallery';
import Header from './components/Header';
import Home from "./components/Home";
import Shop from './components/Shop';
import './App.css';
import ProductModal from './components/productModal/productModal';

const App = () => {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      <ProductModal/>
    </>
  )
}

export default App