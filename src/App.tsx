import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  const countChanger = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <div className="card">
      <Header></Header>

      <button onClick={countChanger}>
        count is {count}
      </button>
      </div>
    </>
  )
}

export default App
