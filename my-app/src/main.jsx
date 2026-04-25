import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RootCmp } from './RootCmp'
import { NavBar } from './cmp/NavBar'
import { Footer } from './cmp/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='general-layout'>
      <NavBar/>
      <RootCmp />
      <Footer/>
    </div>
    
  </StrictMode>,
)
