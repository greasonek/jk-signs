import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Gallery from './components/Gallery';
import About from './components/about';
import './App.css';

const App = () => {
  return (
    <>
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