import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ProductsPage from './components/ProductsPage'
import DefaultLayout from './components/layout/DefaultLayout'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/About' element={<AboutPage />}></Route>
          <Route path='/Products' element={<ProductsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
