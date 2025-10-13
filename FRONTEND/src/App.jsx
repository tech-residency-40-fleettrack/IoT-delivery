import './App.css'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Landing from './pages/Landing'



function App() {

  return (
    <div >
      <Layout>
        <Routes>
          <Route path="*" element={<Layout />} />
          <Route index element={<Landing />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App