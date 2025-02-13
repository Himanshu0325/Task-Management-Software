import { useState } from 'react'
import Wellcome from './Components/Wellcome'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Wellcome/>
    </>
  )
}

export default App
