import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx';
import Policy from './components/Privacy_Policy.tsx'
import Home from './components/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path=":productName" element={<Policy />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
