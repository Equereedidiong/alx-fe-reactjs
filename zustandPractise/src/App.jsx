import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useStore from './stores/zustandStore'

function App() {
  // const [count, setCount] = useState(0)

  const remove = useStore((state) => state.removeCount );

  return (
    <>
      <div>

        This is for zustand

      </div>
      <h4> The current count is</h4>
      <p> {useStore ((state) => state.count)} </p>
      <div>
        <button onClick={useStore ((state) => (state.increaseCount))}>
          Increase count
        </button>

        <br />
        <br />

        <button onClick= { useStore ((state) => state.decreaseCount)}>
          Decrease count
        </button>
        


        <button onClick={remove}> remove count</button>
      </div>

    </>
  )
}

export default App
