import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import './variables.css'
import SvgBlurDefs from './Components/SvgBlurDefs';

export default function App() {
  
  return (
    <>
      <SvgBlurDefs />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}