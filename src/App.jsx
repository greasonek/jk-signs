import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from "./components/Home";
import './App.css';

const App = () => {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App