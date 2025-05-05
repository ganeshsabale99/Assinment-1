import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import FooterClock from "./components/FooterClock";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
        <FooterClock />
      </Router>
    </div>
  );
}

export default App;
