import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useApi } from './api'
import MemberDetails from './MemberDetails'
import FamilyPreferences from './FamilyPreferences'


const App: React.FC = () => {
  const [state, setstate] = useState(0);

  const [response, loading, error] = useApi()
  console.log(response, loading, error)
  return (
    <div className="App">
      {error && <div id="box"></div>}
      {/* {!loading && <MemberDetails color="Blue" name="tim" primary={true}/>} */}
      <FamilyPreferences loading={loading} members={response} error={error}/>
    </div>
  );
};

export default App;
