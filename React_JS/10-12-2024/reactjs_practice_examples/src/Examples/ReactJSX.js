import React,{Component} from 'react'

// const ReactJSX = () => <h1>Hello World!</h1>;

function ReactJSX() {
    // const fruits = ["Apple","Banana","Cherry"];
//     const buttonLabel = "Click Me!"
//   function clickHandler(){
//         alert("button clicked");
//     }
const isActive = true;
  return (
    <div className={isActive ? "active" : "inactive"}>Dynamic Class
    {/* // <h1>Hello World!</h1>
    // </div> */}
    {/* // <ul>
    //     {fruits.map((fruit,index)=> ( */}
    {/* //         <li key={index}>{fruit}</li>
    //     ))}
    // </ul> */}
    {/* <button onClick={clickHandler}>{buttonLabel}</button> */}
    {/* <h1>Welcome to React</h1>
    <p>This is a description text.</p> */}
    </div>
    )
 }

export default ReactJSX
