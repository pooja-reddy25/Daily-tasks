import React from 'react'
import './App.css';
import ReactJSX from './Examples/ReactJSX';
import ReactComponents from './Examples/ReactComponents';
import ReactClass from './Examples/ReactClass';

function App() {
  return (
    <div className="App">
        {/* <header className="App-header"> */}
        {/* <ReactJSX /> */}
        {/* <ReactComponents name={"Pooja"} /> */}
      {/* </header> */}
      <ReactClass name="Pooja" age={23} email="abc@gmail.com"/>
    </div>
  );
}

export default App;
