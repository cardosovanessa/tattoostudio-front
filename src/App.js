import React from "react";
import Teste from "./Components/Teste";
import Forms from "./Components/Teste/forms";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Teste />
      <Forms disable={true}></Forms>
      <Forms disable={false}></Forms>
    </>
  );
}

export default App;