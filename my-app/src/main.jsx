import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RootCmp } from './RootCmp.jsx'
import { NavBar } from './cmp/NavBar.jsx'
import { Footer } from './cmp/Footer.jsx'
import store from '../src/store/store.js'
import { Provider } from 'react-redux'
import { UserMsg } from './cmp/UserMsg.jsx'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </StrictMode>
  </Provider>
)
