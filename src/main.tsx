import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import App from './App.tsx';
import Policy from './components/Privacy_Policy.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/'>
    <Routes>
        <Route  path="/" element={<App />} />
        <Route path="/:productName" element={<Policy />} />
      </Routes>
   </BrowserRouter>
  </StrictMode>,
)
