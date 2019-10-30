import React, { useState, useEffect } from "react";
import "./App.css";
import { useApi } from "./api";
import FamilyPreferences from "./FamilyPreferences";

const App: React.FC = () => {
  const [onShippingPage, setOnShippingPage] = useState(false);

  const [response, loading, error] = useApi();
  console.log(response, loading, error);
  return (
    <div className="App">
      {/* {!loading && <MemberDetails color="Blue" name="tim" primary={true}/>} */}
      {onShippingPage ? (
        <div>shipping page</div>
      ) : (
        <FamilyPreferences
          loading={loading}
          members={response}
          error={error}
          setOnShippingPage={setOnShippingPage}
        />
      )}
    </div>
  );
};

export default App;
