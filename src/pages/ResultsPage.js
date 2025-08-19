import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ResultsPage = () => {
  const { votes, totalVotes, leadingCandidate } = useContext(VoteContext);

  const data = Object.entries(votes).map(([candidate, count]) => ({
    name: `Candidate ${candidate}`,
    votes: count,
  }));

  return (
    <div className="p-10 text-center min-h-screen bg-gradient-to-tr from-yellow-100 to-pink-200">
      <h1 className="text-4xl font-extrabold mb-10 text-pink-800 drop-shadow-lg">
        📊 Results Page
      </h1>

      <div className="h-72 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={60}>
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="votes" fill="#6366f1" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ul className="text-lg font-medium text-gray-800 mb-6">
        {Object.entries(votes).map(([candidate, count]) => (
          <li key={candidate}>
            {`Candidate ${candidate}: ${count} votes`}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-purple-900 mb-2">
        Total Votes: <span className="font-bold">{totalVotes}</span>
      </h2>
      <h2 className="text-xl font-semibold text-green-900 mb-6">
        🏆 Leading Candidate: <span className="font-bold">{leadingCandidate()}</span>
      </h2>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-800"
      >
        Back to Voting 🗳️
      </Link>
    </div>
  );
};

export default ResultsPage;
