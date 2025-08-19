import React, { createContext, useState } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    A: 0,
    B: 0,
    C: 0,
  });

  const voteForCandidate = (candidate) => {
    setVotes((prev) => ({ ...prev, [candidate]: prev[candidate] + 1 }));
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const leadingCandidate = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const leaders = Object.entries(votes).filter(([_, v]) => v === maxVotes);

    if (maxVotes === 0) return "No votes yet";
    if (leaders.length > 1) return "Tie!";
    return `Candidate ${leaders[0][0]}`;
  };

  return (
    <VoteContext.Provider value={{ votes, voteForCandidate, totalVotes, leadingCandidate }}>
      {children}
    </VoteContext.Provider>
  );
};
