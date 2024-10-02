// //Understanding the structure of a JSX file

// // 1. Function Declaration:
// // The component is defined as a function called WelcomeMessage.
// // In React, functional components are functions that return JSX, which describes the UI.

// function WelcomeMessage() {
//    // 2. JSX (JavaScript XML) Return Statement:
//    //Inside the function, JSX is returned. JSX is a syntax extension that looks similar to HTML 
//    // but is written in JavaScript.
//    // The returned JSX consists of a div element that contains:
//    // A h1 heading element displaying "Welcome to ALX React APP!"
//    // A p paragraph element displaying "This is a simple JSX component." js

//     return (
//         <div>
//             <h1>Welcome to ALX React APP!</h1>
//             <p>This is a simple JSX component.</p>
//         </div>
//     );
// }

// // 3. Export Statement:
// // The export default statement is used to make this component available for use in other files.
// // When you export a component as default, it can be imported into other parts of your application without using curly braces.
// export default WelcomeMessage;

function WelcomeMessage() {
    return (
        <div>
            <h1>Hello everyone, I am learning React at ALX!</h1>
            <p>I am learning about JSX!</p>
        </div>
    );
}

export default WelcomeMessage;