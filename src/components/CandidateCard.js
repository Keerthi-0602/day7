import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";
import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";

const CandidateCard = ({ name }) => {
  const { votes, voteForCandidate } = useContext(VoteContext);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 border rounded-2xl shadow-lg text-center w-56 bg-white"
    >
      <h2 className="text-2xl font-bold mb-2 text-blue-700">
        Candidate {name}
      </h2>
      <p className="text-lg mb-3 text-gray-700">Votes: {votes[name]}</p>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => voteForCandidate(name)}
        className="flex items-center gap-2 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700"
      >
        <ThumbsUp size={18} /> Vote
      </motion.button>
    </motion.div>
  );
};

export default CandidateCard;
