import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VoteProvider } from "./context/VoteContext";
import VotingPage from "./pages/VotingPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <VoteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<VotingPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </VoteProvider>
  );
}

export default App;

