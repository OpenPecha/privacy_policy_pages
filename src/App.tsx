import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <main className="content-container">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default App
