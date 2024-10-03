import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <Router>
        <Routes>

          <Route path = "/" element = {<RecipeList />}></Route>
          <Route path = "/recipe/:recipeId" element = {<RecipeDetails />}> </Route>

        </Routes>
      </Router>

     <h2> Recipe Application </h2>
     <div style = {{display:'flex', justifyContent: 'center'}}> </div>
     
      <div>
        Add your recipe
        < AddRecipeForm />
      </div>

      <div>
        < RecipeDetails />
      </div>


      <div>
        < RecipeList />
        <div style={{display: 'inline-block', marginRight: '60px'}}> 
          {/* <button> Update Recipe </button>

          <button> Delete Recipe</button> */}
        </div>
      </div>
      

    </>
  )
}

export default App;
