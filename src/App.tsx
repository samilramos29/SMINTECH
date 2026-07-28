import { Routes, Route, } from "react-router-dom"

import Web from './components/web'
import { LoginForm } from './components/LoginForm'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  )
}

export default App
