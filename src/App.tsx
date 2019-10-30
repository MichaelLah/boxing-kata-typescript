import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useApi } from './api'
import MemberDetails from './MemberDetails'



const App: React.FC = () => {
  const [state, setstate] = useState(0);

  const [response, loading, error] = useApi()
  console.log(response, loading, error)
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {error && <div id="box"></div>}
      {!loading && <MemberDetails color="Blue" name="tim" primary={true}/>}
      <div>
        <button
          onClick={() => {
            setstate(state + 1);
          }}
        >
          {state}
        </button>
      </div>
    </div>
  );
};

export default App;
