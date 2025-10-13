import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Landing from './pages/Home/Landing'



function App() {

  return (
    <div >
        <Routes>
          <Route path="*" element={<Layout />} >
            <Route index element={<Landing />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App