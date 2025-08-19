import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";
import { Link } from "react-router-dom";

const ResultsPage = () => {
  const { votes, totalVotes, leadingCandidate } = useContext(VoteContext);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Results Page</h1>
      <ul className="text-lg mb-6">
        {Object.entries(votes).map(([candidate, count]) => (
          <li key={candidate}>
            Candidate {candidate}: {count} votes
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-4">
        Total Votes: {totalVotes}
      </h2>
      <h2 className="text-xl font-semibold mb-6">
        Leading Candidate: {leadingCandidate()}
      </h2>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
      >
        Back to Voting
      </Link>
    </div>
  );
};

export default ResultsPage;
