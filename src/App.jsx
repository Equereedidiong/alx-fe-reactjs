import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList  from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import useRecipeStore from './components/recipeStore'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ background: 'black', display: 'flex', justifyContent: 'centre', alignItems: 'centre', alignContent: 'centre'}}>
        <div>
          < AddRecipeForm />
        </div>
      
        <div>
          < RecipeList />

        </div>
      </div>
      
    </>
  )
}

export default App;
