import { Routes, Route, } from "react-router-dom"

import Web from './components/web'
import { LoginForm } from './components/LoginForm'
import { ProductoDetalle } from './components/ProductoDetalle'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
      </Routes>
    </>
  )
}

export default App
