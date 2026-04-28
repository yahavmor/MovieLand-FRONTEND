import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RootCmp } from './RootCmp.jsx'
import { NavBar } from './cmp/NavBar.jsx'
import { Footer } from './cmp/Footer.jsx'
import store from '../src/store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <div className='general-layout'>
          <NavBar />
          <RootCmp />
          <Footer />
        </div>
      </BrowserRouter>
    </StrictMode>
  </Provider>
)
