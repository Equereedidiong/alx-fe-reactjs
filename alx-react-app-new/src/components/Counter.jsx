import { useState } from "react";


function Counter () {
    const [count, setCount] = useState(0);
    return (
        
        <div style = {{ display:'flex', justifyContent: 'center'}}>
             
            <div style={{ padding: '6px'}}>
   
             <button onClick = { () => setCount((count) => count + 1 )}> You Count Increment {count} </button>

            </div>
             

            <div style={ {padding: '6px'}}>
   
               <button onClick = { () => setCount((count)  => count - 1 )}> Your Count Decrement {count} </button>

            </div>
            
            <div style={{padding: '4px'}}>
  
              <button onClick = { () => setCount((0))} > Count Reseted </button>

            </div>

        </div>

    )
};

export default Counter;