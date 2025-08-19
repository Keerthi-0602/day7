import React, { useContext } from "react";
import CandidateCard from "../components/CandidateCard";
import { VoteContext } from "../context/VoteContext";
import { Link } from "react-router-dom";

const VotingPage = () => {
  const { leadingCandidate } = useContext(VoteContext);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Voting Page</h1>
      <div className="flex gap-6 justify-center">
        <CandidateCard name="A" />
        <CandidateCard name="B" />
        <CandidateCard name="C" />
      </div>
      <h2 className="mt-6 text-xl font-semibold">
        Leading Candidate: {leadingCandidate()}
      </h2>
      <Link
        to="/results"
        className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800"
      >
        View Results
      </Link>
    </div>
  );
};

export default VotingPage;
