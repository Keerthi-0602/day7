import React, { useContext } from "react";
import CandidateCard from "../components/CandidateCard";
import { VoteContext } from "../context/VoteContext";
import { Link } from "react-router-dom";

const VotingPage = () => {
  const { leadingCandidate } = useContext(VoteContext);

  return (
    <div className="p-10 text-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-4xl font-extrabold mb-10 text-indigo-800 drop-shadow-lg">
        🗳️ Voting Application
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        <CandidateCard name="A" />
        <CandidateCard name="B" />
        <CandidateCard name="C" />
      </div>

      <h2 className="mt-10 text-2xl font-semibold text-purple-900">
        🏆 Leading Candidate: <span className="font-bold">{leadingCandidate()}</span>
      </h2>

      <Link
        to="/results"
        className="mt-8 inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-green-800"
      >
        View Results 📊
      </Link>
    </div>
  );
};

export default VotingPage;
