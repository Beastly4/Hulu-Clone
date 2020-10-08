import React, { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Nav from "./Nav";
import Films from "./Films";
import requests from "../requests/requests";
import Modal from "react-modal";

Modal.setAppElement("#root");
function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="App">
      <Header setSelectedOption={setSelectedOption} />
      <Nav setSelectedOption={setSelectedOption} />
      <Films selectedOption={selectedOption} />
    </div>
  );
}

export default App;
