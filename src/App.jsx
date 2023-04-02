import { useState } from 'react'
import './App.css'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import ProductListing from './Pages/ProductListing'
import ProductDetail from './Pages/ProductDetail'
function App() {
  
  return (
    <div className="App">
     {/* <h1>Hello World</h1> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<ProductListing/>} />
          <Route exact path='/product/:id' element={<ProductDetail/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
