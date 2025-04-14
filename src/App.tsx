import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Blog from './Blog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Blog />
    </div>
  )
}

export default App
