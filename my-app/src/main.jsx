import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RootCmp } from './RootCmp.jsx'
import { NavBar } from './cmp/NavBar.jsx'
import { Footer } from './cmp/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='general-layout'>
        <NavBar />
        <RootCmp />
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
)
