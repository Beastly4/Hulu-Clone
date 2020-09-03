import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Films from "./Films";
import requests from "./requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="App">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Films selectedOption={selectedOption} />
    </div>
  );
}

export default App;
