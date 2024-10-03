import { useState } from 'react';
import useRecipeStore from './recipeStore';

function AddRecipeForm () {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (

    <>

     <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center', marginInline: '10px' }}>
     <div style={{display: 'flex', padding: '10px'}} >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
       />
     </div>
      
     <div style={{display: 'flex', padding: '10px'}}>
       <textarea
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         placeholder="Description"
       />  
     </div>
          
      <button type="submit" style={{}}>Add Recipe</button>
    </form>        

    </>

  );
};


export default  AddRecipeForm;