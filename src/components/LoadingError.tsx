import React from "react";
import LoadingErrorGif from "../img/LoadingError.gif";

const LoadingError: React.FC<{}> = () => {
  return (
    <div>
      <p>Error: Could not receive family preferences</p>
      <img src={LoadingErrorGif} alt="sad"></img>
    </div>
  );
};

export default LoadingError;
