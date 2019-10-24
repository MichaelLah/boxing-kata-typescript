import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";


const apiCall = async (someBullshit: number) => {

  const apiResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  // const apiResponse = await fetch('https://beam-kata.s3.us-east-2.amazonaws.com/perks.json')

  const perks = await apiResponse.json()
  console.log(perks)
}

const App: React.FC = () => {
  const blah = "123";
  apiCall(1)
  const [state, setstate] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <button
          onClick={() => {
            setstate(state + 1);
          }}
        >
          {state}
        </button>
      </body>
    </div>
  );
};

export default App;
