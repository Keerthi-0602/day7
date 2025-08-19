import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";

const CandidateCard = ({ name }) => {
  const { votes, voteForCandidate } = useContext(VoteContext);

  return (
    <div className="p-4 border rounded-2xl shadow-md text-center w-48">
      <h2 className="text-xl font-bold mb-2">Candidate {name}</h2>
      <p className="text-lg mb-2">Votes: {votes[name]}</p>
      <button
        onClick={() => voteForCandidate(name)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
      >
        Vote
      </button>
    </div>
  );
};

export default CandidateCard;
