import React from "react";
import LoadingGif from "../img/Loading.gif";

const Loading: React.FC<{}> = () => {
  return (
    <div>
      <p>Loading...</p>
      <img src={LoadingGif} alt="loading"></img>
    </div>
  );
};

export default Loading;
