import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="bule" message="お元気ですか" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
