import { useState } from 'react'
import Logo from './logo/Logo'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Logo variant={"light"} anim={true} />
      
    </>
  )
}

export default App
