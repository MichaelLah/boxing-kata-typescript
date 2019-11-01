import React, { useState } from "react";
import "../App.css";
import { useApi } from "../util/api";
import FamilyPreferences from "./FamilyPreferences";
import Shipping from "./shipping/Shipping";

const App: React.FC = () => {
  const [onShippingPage, setOnShippingPage] = useState(false);

  const [response, loading, error] = useApi();
  return (
    <div className="App">
      {/* {!loading && <MemberDetails color="Blue" name="tim" primary={true}/>} */}
      {onShippingPage ? (
        <Shipping setOnShippingPage={setOnShippingPage} members={response} />
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
