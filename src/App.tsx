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
      {error && <div id="box"></div>}
      {!loading && <MemberDetails color="Blue" name="tim" primary={true}/>}
    </div>
  );
};

export default App;
