import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AdminPanel } from './pages/admin-panel';



function App() {

  const [showPage, setShowPage] = useState("admin-panel");

  return (
    <>
      {showPage === "admin-panel" && <AdminPanel/>}
    </>
  )
}

export default App
